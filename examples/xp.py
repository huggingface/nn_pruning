import copy
import json
import logging
import os.path
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional
import timeit

import transformers
from transformers import (
    AutoConfig,
    AutoTokenizer,
    HfArgumentParser,
    PreTrainedTokenizerFast,
    TrainingArguments,
    set_seed,
)
from transformers.trainer_utils import is_main_process
from transformers.trainer import Trainer
from transformers.trainer_utils import (
    PREFIX_CHECKPOINT_DIR,
)
from nn_pruning.sparse_trainer import TimingModule
from transformers.trainer_utils import (
    HPSearchBackend,
)

from transformers.integrations import is_ray_available

from nn_pruning.inference_model_patcher import optimize_model

if is_ray_available():
    from ray import tune

logger = logging.getLogger(__name__)


@dataclass
class ModelArguments:
    """
    Arguments pertaining to which model/config/tokenizer we are going to fine-tune from.
    """

    model_name_or_path: str = field(
        metadata={"help": "Path to pretrained model or model identifier from huggingface.co/models"}
    )
    config_name: Optional[str] = field(
        default=None,
        metadata={"help": "Pretrained config name or path if not the same as model_name"},
    )
    tokenizer_name: Optional[str] = field(
        default=None,
        metadata={"help": "Pretrained tokenizer name or path if not the same as model_name"},
    )
    cache_dir: Optional[str] = field(
        default=None,
        metadata={"help": "Path to directory to store the pretrained models downloaded from huggingface.co"},
    )

    use_fast_tokenizer: bool = field(
        default=True,
        metadata={"help": "Whether to use one of the fast tokenizer (backed by the tokenizers library) or not."},
    )


@dataclass
class DataTrainingArguments:
    """
    Arguments pertaining to what data we are going to input our model for training and eval.
    """

    dataset_name: Optional[str] = field(
        default=None,
        metadata={"help": "The name of the dataset to use (via the datasets library)."},
    )
    dataset_config_name: Optional[str] = field(
        default=None,
        metadata={"help": "The configuration name of the dataset to use (via the datasets library)."},
    )
    train_file: Optional[str] = field(default=None, metadata={"help": "The input training data file (a text file)."})
    validation_file: Optional[str] = field(
        default=None,
        metadata={"help": "An optional input evaluation data file to evaluate the perplexity on (a text file)."},
    )
    overwrite_cache: bool = field(
        default=False,
        metadata={"help": "Overwrite the cached training and evaluation sets"},
    )

    dataset_cache_dir: Optional[str] = field(
        default="dataset_cache", metadata={"help": "The path to the dataset cache."}
    )

    preprocessing_num_workers: Optional[int] = field(
        default=None,
        metadata={"help": "The number of processes to use for the preprocessing."},
    )
    max_seq_length: int = field(
        default=384,
        metadata={
            "help": "The maximum total input sequence length after tokenization. Sequences longer "
            "than this will be truncated, sequences shorter will be padded."
        },
    )
    pad_to_max_length: bool = field(
        default=True,
        metadata={
            "help": "Whether to pad all samples to `max_seq_length`. "
            "If False, will pad the samples dynamically when batching to the maximum length in the batch (which can "
            "be faster on GPU but will be slower on TPU)."
        },
    )
    doc_stride: int = field(
        default=128,
        metadata={"help": "When splitting up a long document into chunks, how much stride to take between chunks."},
    )

    def __post_init__(self):
        if self.dataset_name is None and self.train_file is None and self.validation_file is None:
            raise ValueError("Need either a dataset name or a training/validation file.")
        else:
            if self.train_file is not None:
                extension = self.train_file.split(".")[-1]
                assert extension in [
                    "csv",
                    "json",
                ], "`train_file` should be a csv or a json file."
            if self.validation_file is not None:
                extension = self.validation_file.split(".")[-1]
                assert extension in [
                    "csv",
                    "json",
                ], "`validation_file` should be a csv or a json file."

@dataclass
class XPTrainingArguments(TrainingArguments):
    optimize_model_before_eval: str = field(
        default="disabled",
        metadata={
            "help": "Apply some optimization to model before evaluation (use nn_pruning.inference_model_patcher.InferencePatcher)."
                    "Valid values: disabled, block_sparse, dense"
        },
    )


class XP:
    ARGUMENTS = {
        "model": ModelArguments,
        "data": DataTrainingArguments,
        "training": XPTrainingArguments,
    }

    def __init__(self, param_dict):
        # See all possible arguments in src/transformers/training_args.py
        # or by passing the --help flag to this script.
        # We now keep distinct sets of args, for a cleaner separation of concerns.
        arguments = copy.deepcopy(self.ARGUMENTS)
        self.arguments_names = list(arguments.keys())
        parser = HfArgumentParser(arguments.values())
        parse_results = parser.parse_dict(param_dict) #, strict=True)

        assert self.arguments_names[0] == "model"
        assert self.arguments_names[1] == "data"
        assert self.arguments_names[2] == "training"

        # Explicitly affect args, to make IDE not flagging members as unknown
        self.model_args = parse_results[0]
        self.data_args = parse_results[1]
        self.training_args = parse_results[2]

        for i, (k, v) in enumerate(arguments.items()):
            if i < 3:
                continue
            setattr(self, k + "_args", parse_results[i])

    def model_init(self, trial=None):
        model =  self._model_init(self.model_args, self.config, self.data_args)
        if hasattr(model.config, "layer_norm_type") and model.config.layer_norm_type == "no_norm":
            from nn_pruning.modules.nonorm import NoNormPatcher
            nnc = NoNormPatcher()
            nnc.patch(model)

        return model


    def get_all_args(self, exclude_base=False):
        # Extract the other arguments
        all_args = {}
        for k in self.arguments_names:
            if exclude_base and k == "training":
                continue
            name = k + "_args"
            all_args[name] = getattr(self, name)
        return all_args

    @classmethod
    def run_from_dict(cls, param_dict):
        r = cls(param_dict)
        return r.run()

    @classmethod
    def run_from_json_file(cls, filename):
        json_file_name = Path(filename).resolve()
        param_dict = json.load(open(json_file_name))
        return cls.run_from_dict(param_dict)

    @classmethod
    def run_from_command_line(cls):
        if len(sys.argv) < 2:
            raise RuntimeError("Please specify json file")
        cls.run_from_json_file(sys.argv[1])

    def setup_logging(self):
        # Setup logging
        training_args = self.training_args
        logging.basicConfig(
            format="%(asctime)s - %(levelname)s - %(name)s -   %(message)s",
            datefmt="%m/%d/%Y %H:%M:%S",
        )
        logger.setLevel(logging.INFO if is_main_process(training_args.local_rank) else logging.WARN)

    def create_directories(self):
        training_args = self.training_args
        output_dir = Path(training_args.output_dir).resolve()

        if (
            output_dir.exists()
            and list(output_dir.iterdir())
            and training_args.do_train
            and not training_args.overwrite_output_dir
        ):
            raise ValueError(
                f"Output directory ({training_args.output_dir}) already exists and is not empty."
                "Use --overwrite_output_dir to overcome."
            )

    def initial_message(self):
        # Log on each process the small summary:
        training_args = self.training_args
        logger.warning(
            f"Process rank: {training_args.local_rank}, device: {training_args.device}, n_gpu: {training_args.n_gpu}"
            + f"distributed training: {bool(training_args.local_rank != -1)}, 16-bits training: {training_args.fp16}"
        )
        # Set the verbosity to info of the Transformers logger (on main process only):
        if is_main_process(training_args.local_rank):
            transformers.utils.logging.set_verbosity_info()

        logger.info("Training/evaluation parameters")
        for k in self.arguments_names:
            logger.info("  %s: %s", k.capitalize(), getattr(self, k + "_args"))

    def setup_random(self):
        # Set seed before initializing model.
        training_args = self.training_args
        set_seed(training_args.seed)

    def create_dataset(self):
        raise NotImplementedError("Implement in subclass")

    def create_config(self):
        # Load pretrained model and tokenizer
        #
        # Distributed training:
        # The .from_pretrained methods guarantee that only one local process can concurrently
        # download model & vocab.
        model_args = self.model_args

        self.config = AutoConfig.from_pretrained(
            model_args.config_name if model_args.config_name else model_args.model_name_or_path,
            cache_dir=model_args.cache_dir,
        )
        return self.config

    def create_tokenizer(self):
        # See more about loading any type of standard or custom dataset (from files, python dict, pandas DataFrame, etc) at
        # https://huggingface.co/docs/datasets/loading_datasets.html.
        model_args = self.model_args
        self.tokenizer = AutoTokenizer.from_pretrained(
            model_args.tokenizer_name if model_args.tokenizer_name else model_args.model_name_or_path,
            cache_dir=model_args.cache_dir,
            use_fast=True,
        )

        # Tokenizer check: this script requires a fast tokenizer.
        if not isinstance(self.tokenizer, PreTrainedTokenizerFast):
            raise ValueError(
                "This example script only works for models that have a fast tokenizer. Checkout the big table of models "
                "at https://huggingface.co/transformers/index.html#bigtable to find the model types that meet this "
                "requirement"
            )

    def create_trainer(self):
        self.trainer = None
        raise RuntimeError("Implement in subclass")

    def prepare(self):
        self.create_directories()
        self.setup_logging()
        self.initial_message()
        self.setup_random()
        self.create_tokenizer()
        self.create_dataset()
        self.create_config()
        self.create_trainer()

    def train(self):
        # Training
        self.trainer.train()
        self.trainer.save_model()  # Saves the tokenizer too for easy upload

    def evaluate(self):
        logger.info("*** Evaluate ***")
        _ = self.trainer.evaluate()

    def run(self):
        self.prepare()

        if self.training_args.do_train:
            self.train()

        # Evaluation
        results = {}
        if self.training_args.do_eval:
            self.evaluate()

        return results

    def hp_name(self, trial):
        all_args = self.get_all_args()
        d = {}
        for key, value in all_args.items():
            for k, v in value.__dict__.items():
                if v is None:
                    continue
                try:
                    _ = json.dumps(v)
                except Exception as e:
                    if k.startswith("__"):
                        continue
                    else:
                        v = str(v)
                        if k == "evaluation_strategy":
                            v = v.split(".")[-1].lower()
                    print(k, v)

                if k in d:
                    raise RuntimeError(f"Duplicate parameters {k} in arguments")
                d[k] = v

        EXCLUDES = ["logging_dir"]
        for exclude in EXCLUDES:
            del d[exclude]
        try:
            ret = self.SHORT_NAMER.shortname(d)
        except:
            raise
        return ret

    def hyperparameter_search(self, direction="maximize", hp_space=None, n_trials=1):
        self.prepare()

        def default_hp_space_fun(trial):
            return {}

        if hp_space is None:
            hp_space = default_hp_space_fun

        return self.trainer.hyperparameter_search(
            hp_name=self.hp_name,
            direction=direction,
            hp_space=hp_space,
            n_trials=n_trials,
        )

    @classmethod
    def fix_last_checkpoint_bug_checkpoint(cls, checkpoint_path):
        # Special stuff : add link to compensate for bug
        for link_name in ["pytorch_model.bin", "training_args.bin", "vocab.txt", "tokenizer_config.json",
                          "special_tokens_map.json"]:
            filename = checkpoint_path / link_name
            print(filename)
            filename_parent = Path("..") / link_name
            filename_absolute_parent = checkpoint_path.parent / link_name
            if not filename.exists() and filename_absolute_parent.exists():
                print(filename, filename_parent)
                filename.symlink_to(filename_parent)

    @classmethod
    def fix_last_checkpoint_bug(cls, run_path):
        run_path = Path(run_path)
        for src_path in run_path.iterdir():
            if src_path.name.startswith("checkpoint-"):
                cls.fix_last_checkpoint_bug_checkpoint(src_path)

class XPTrainer(Trainer):
    def checkpoint_dir(self):
        # Save model checkpoint
        checkpoint_folder = f"{PREFIX_CHECKPOINT_DIR}-{self.state.global_step}"

        checkpoint_dir = self.run_dir() / checkpoint_folder
        if not checkpoint_dir.exists():
            checkpoint_dir.mkdir()

        return checkpoint_dir

    def instrument_model(self, model):
        if self.args.optimize_model_before_eval != "disabled":
            model = optimize_model(self.model, self.args.optimize_model_before_eval)

        return TimingModule(model)

    def run_dir(self):
        # Save model checkpoint
        if hasattr(self, "_trial"):
            trial = self._trial
        else:
            trial = None
        if self.hp_search_backend is not None and trial is not None:
            run_id = trial.number if self.hp_search_backend == HPSearchBackend.OPTUNA else tune.get_trial_id()
            run_name = self.hp_name(trial) if self.hp_name is not None else f"run-{run_id}"
            run_dir = Path(self.args.output_dir) / run_name
        else:
            run_dir = Path(self.args.output_dir)

        return run_dir

    def start_timer(self):
        self._model_save = self.model
        self.model = self.instrument_model(self.model)
        self._start_time = timeit.default_timer()

    def end_timer(self, eval_dataset_length, suffix = None):
        evalTime = timeit.default_timer() - self._start_time
        cudaEvalTime, cudaEvalCount = self.model.get_results()
        cudaEvalTime = 1e-3 * cudaEvalTime
        checkpoint_dir = self.checkpoint_dir()
        suffix = "" if suffix is None else "_" + suffix
        timing_file = os.path.join(checkpoint_dir, f"evaluate_timing{suffix}.json")

        logger.info("  Evaluation done in total %f secs (%f sec per example)", evalTime, evalTime / eval_dataset_length)
        logger.info("  Cuda time %f secs (%f sec per example)", cudaEvalTime, cudaEvalTime / eval_dataset_length)

        with open(timing_file, "w") as f:
            f.write(json.dumps({"eval_elapsed_time": evalTime, "cuda_eval_elapsed_time": cudaEvalTime}))

        self.model = self._model_save


    def finish_evaluate(self, checkpoint_dir, metrics):
        self.control = self.callback_handler.on_evaluate(self.args, self.state, self.control, metrics)

        for k, v in self.__dict__.items():
            if k.endswith("_args") and k != "args":
                filename = k + ".json"
                s = json.dumps(v.__dict__, indent=4, sort_keys=True)
                with open(os.path.join(checkpoint_dir, filename), "w") as f:
                    f.write(s)
