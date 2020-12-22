import json
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Dict

import torch.nn as nn
from nn_pruning.hp_naming import TrialShortNamer
from nn_pruning.model_structure import BertStructure
from nn_pruning.modules.masked_nn import (
    ChannelPruningModulePatcher,
    JointPruningModulePatcher,
    LinearPruningParameters,
)
from nn_pruning.training_patcher import BertLinearModelPatcher, PatcherContext
from run_qa import QATraining
from trainer_qa import QuestionAnsweringTrainer
from transformers.optimization import AdamW, get_linear_schedule_with_warmup


@dataclass
class SparseTrainingArguments:
    """
    Sparse training specific arguments
    """

    mask_scores_learning_rate: float = field(
        default=1e-2, metadata={"help": "The initial learning rate for mask_scores."}
    )

    dense_pruning_method: str = field(
        default="topk", metadata={"help": "Dense Layers pruning method."}
    )

    attention_pruning_method: str = field(
        default="topk", metadata={"help": "Dense Layers pruning method."}
    )

    ampere_pruning_method: str = field(
        default="disabled",
        metadata={"help": "Ampere sparse method ('disabled' for no ampere sparsity)"},
    )

    mask_init: str = field(
        default="constant", metadata={"help": "Mask scores initialization method"}
    )

    mask_scale: float = field(
        default=0.0,
        metadata={"help": "Parameter to use with mask_init."},
    )

    dense_block_rows: int = field(
        default=1,
        metadata={"help": "Block size in rows for dense layers."},
    )

    dense_block_cols: int = field(
        default=1,
        metadata={"help": "Block size in cols for dense layers."},
    )

    attention_block_rows: int = field(
        default=1,
        metadata={"help": "Block size in rows for attention."},
    )

    attention_block_cols: int = field(
        default=1,
        metadata={"help": "Block size in cols for attention."},
    )

    initial_threshold: float = field(
        default=1.0,
        metadata={"help": "Initial value of the threshold (for scheduling)."},
    )
    final_threshold: float = field(
        default=0.5,
        metadata={"help": "Final value of the threshold (for scheduling)."},
    )

    initial_warmup: float = field(
        default=1,
        metadata={
            "help": "Run `initial_warmup` * `warmup_steps` steps of threshold warmup during which threshold stays at its `initial_threshold` value (sparsity schedule)."
        },
    )
    final_warmup: float = field(
        default=2,
        metadata={
            "help": "Run `final_warmup` * `warmup_steps` steps of threshold cool-down during which threshold stays"
        },
    )

    initial_ampere_temperature: float = field(
        default=0.0,
        metadata={"help": "Initial value of the ampere temperature (for scheduling)."},
    )
    final_ampere_temperature: float = field(
        default=20.0,
        metadata={"help": "Final value of the ampere temperature (for scheduling)."},
    )
    final_lambda: float = field(
        default=0.0,
        metadata={
            "help": "Regularization intensity (used in conjunction with `regularization`)."
        },
    )


class QASparseTrainer(QuestionAnsweringTrainer):
    def __init__(self, sparse_args, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.sparse_args = sparse_args
        self.log_prefix = ""

    def set_members(self, patcher_context: PatcherContext):
        self.patcher_context = patcher_context

    def compute_loss(self, model, inputs):
        loss = super().compute_loss(model, inputs)
        # loss += self.regularization(model)
        return loss

    def log(self, logs: Dict[str, float]) -> None:
        for k, v in self.patcher_context.enumerate_context_data():
            logs[self.log_prefix + k] = v

        return super().log(logs)

    def schedule_threshold(self, training: bool):
        state = self.state
        args = self.args
        sparse_args = self.sparse_args

        step = state.global_step
        total_step = state.max_steps
        warmup_steps = args.warmup_steps
        initial_threshold = sparse_args.initial_threshold
        final_threshold = sparse_args.final_threshold
        initial_warmup = sparse_args.initial_warmup
        final_warmup = sparse_args.final_warmup
        final_lambda = sparse_args.final_lambda
        initial_ampere_temperature = sparse_args.initial_ampere_temperature
        final_ampere_temperature = sparse_args.final_ampere_temperature

        if training:
            if step <= initial_warmup * warmup_steps:
                threshold = initial_threshold
                ampere_temperature = initial_ampere_temperature
            elif step > (total_step - final_warmup * warmup_steps):
                threshold = final_threshold
                ampere_temperature = final_ampere_temperature
            else:
                spars_warmup_steps = initial_warmup * warmup_steps
                spars_schedu_steps = (final_warmup + initial_warmup) * warmup_steps
                mul_coeff = 1 - (step - spars_warmup_steps) / (
                    total_step - spars_schedu_steps
                )
                threshold = final_threshold + (initial_threshold - final_threshold) * (
                    mul_coeff ** 3
                )
                ampere_temperature = final_ampere_temperature + (
                    initial_ampere_temperature - final_ampere_temperature
                ) * (mul_coeff ** 3)
        else:
            threshold = final_threshold
            ampere_temperature = final_ampere_temperature

        regu_lambda = final_lambda * threshold / final_threshold

        context_data = dict(
            threshold=threshold,
            ampere_temperature=ampere_temperature,
            regu_lambda=regu_lambda,
        )

        self.patcher_context.set_context_data_dict(context_data)

    def training_step(self, *args, **kwargs):
        self.schedule_threshold(True)
        self.log_prefix = ""
        return super().training_step(*args, **kwargs)

    def evaluate(self, *args, **kwargs):
        self.schedule_threshold(False)
        self.log_prefix = "eval_"
        ret = super().evaluate(*args, **kwargs)
        return ret

    def regularization(model: nn.Module, mode: str):
        # TODO
        assert False
        if mode not in ["l0", "l1"]:
            return 0
        regu, counter = 0, 0
        for name, module in model.named_modules():
            # if isinstance(module, )

            if "mask_scores" in name:
                if mode == "l1":
                    regu += torch.norm(torch.sigmoid(param), p=1) / param.numel()
                elif mode == "l0":
                    regu += (
                        torch.sigmoid(param - 2 / 3 * np.log(0.1 / 1.1)).sum()
                        / param.numel()
                    )
                else:
                    ValueError("Don't know this mode.")
                counter += 1
        return regu / counter

    def create_optimizer_and_scheduler(self, num_training_steps: int):
        assert self.optimizer is None
        self.optimizer = self.create_optimizer(self.model)

        assert self.lr_scheduler is None
        self.lr_scheduler = self.create_scheduler(num_training_steps)

    def create_optimizer(self, model):

        # Prepare optimizer and schedule (linear warmup and decay)
        no_decay = ["bias", "LayerNorm.weight"]
        args = self.args
        sparse_args = self.sparse_args

        mask_params = []
        no_decay_params = []
        decay_params = []

        for n, p in model.named_parameters():
            if not p.requires_grad:
                continue
            if "mask_score" in n:
                mask_params.append(p)
            elif any(nd in n for nd in no_decay):
                no_decay_params.append(p)
            else:
                decay_params.append(p)

        optimizer_grouped_parameters = [
            {
                "params": mask_params,
                "lr": sparse_args.mask_scores_learning_rate,
            },
            {
                "params": no_decay_params,
                "lr": args.learning_rate,
                "weight_decay": args.weight_decay,
            },
            {
                "params": decay_params,
                "lr": args.learning_rate,
                "weight_decay": 0.0,
            },
        ]

        optimizer = AdamW(
            optimizer_grouped_parameters, lr=args.learning_rate, eps=args.adam_epsilon
        )
        return optimizer

    def create_scheduler(self, num_training_steps: int):
        scheduler = get_linear_schedule_with_warmup(
            self.optimizer,
            num_warmup_steps=self.args.warmup_steps,
            num_training_steps=num_training_steps,
        )
        return scheduler


class SparseQAShortNamer(TrialShortNamer):
    DEFAULTS = {
        "adam_beta1": 0.9,
        "adam_beta2": 0.999,
        "adam_epsilon": 1e-08,
        "ampere_pruning_method": "disabled",
        "attention_block_cols": 768,
        "attention_block_rows": 64,
        "attention_pruning_method": "topK",
        "dataloader_drop_last": False,
        "dataloader_num_workers": 0,
        "dataset_cache_dir": "dataset_cache",
        "dataset_name": "squad",
        "debug": False,
        "dense_block_cols": 1,
        "dense_block_rows": 1,
        "dense_pruning_method": "topK",
        "disable_tqdm": False,
        "doc_stride": 128,
        "do_eval": 1,
        "do_predict": False,
        "do_train": 1,
        "evaluation_strategy":"epoch",
        "eval_steps":500,
        "final_ampere_temperature": 20.0,
        "final_lambda": 0.0,
        "final_threshold": 0.1,
        "final_warmup": 2,
        "fp16": False,
        "fp16_opt_level": "O1",
        "gradient_accumulation_steps": 1,
        "ignore_data_skip": False,
        "initial_ampere_temperature": 0.0,
        "initial_threshold": 1,
        "initial_warmup": 1,
        "learning_rate": 3e-05,
        "load_best_model_at_end": False,
        "local_rank": -1,
        "logging_first_step": False,
        "logging_steps": 500,
        "mask_init": "constant",
        "mask_scale": 0.0,
        "mask_scores_learning_rate": 0.01,
        "max_answer_length": 30,
        "max_grad_norm": 1.0,
        "max_seq_length": 384,
        "max_steps": -1,
        "model_name_or_path": "bert-base-uncased",
        "model_parallel": False,
        "n_best_size": 20,
        "no_cuda": False,
        "null_score_diff_threshold": 0.0,
        "num_train_epochs": 10,
        "output_dir": "output/squad_test",
        "overwrite_cache": 0,
        "overwrite_output_dir": 1,
        "pad_to_max_length": True,
        "past_index": -1,
        "per_device_eval_batch_size": 8,
        "per_device_train_batch_size": 16,
        "prediction_loss_only": False,
        "remove_unused_columns": True,
        "run_name": "output/squad_test",
        "save_steps": 5000,
        "save_total_limit": 5,
        "seed": 17,
        "tpu_metrics_debug": False,
        "version_2_with_negative": False,
        "warmup_steps": 5400,
        "weight_decay": 0.0,
    }


class QASparseTraining(QATraining):
    QA_TRAINER_CLASS = QASparseTrainer
    SHORT_NAMER = SparseQAShortNamer

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.patcher_context = PatcherContext()

    def create_trainer(self, *args, **kwargs):
        super().create_trainer(*args, **kwargs)
        self.trainer.set_members(patcher_context=self.patcher_context)

    def get_arguments(self):
        return {"sparse": SparseTrainingArguments}

    def parse_pruning_method(self, method):
        parts = method.split(":")
        if len(parts) == 2:
            return parts
        elif len(parts) == 1:
            return parts[0], "default"
        else:
            raise RuntimeError("Could not parse pruning method")

    def patch_model(self, model, trial):
        attention_pruning_method_parts = self.parse_pruning_method(
            self.sparse_args.attention_pruning_method
        )

        parameters_attention = LinearPruningParameters(
            method=attention_pruning_method_parts[0],
            submethod=attention_pruning_method_parts[1],
            ampere_method=self.sparse_args.ampere_pruning_method,
            block_rows=self.sparse_args.attention_block_rows,
            block_cols=self.sparse_args.attention_block_cols,
        )

        dense_pruning_method_parts = self.parse_pruning_method(
            self.sparse_args.dense_pruning_method
        )

        parameters_dense = LinearPruningParameters(
            method=dense_pruning_method_parts[0],
            submethod=dense_pruning_method_parts[1],
            ampere_method=self.sparse_args.ampere_pruning_method,
            block_rows=self.sparse_args.dense_block_rows,
            block_cols=self.sparse_args.dense_block_cols,
        )

        patcher_context = self.patcher_context

        p_attention = JointPruningModulePatcher(
            patcher_context, parameters_attention, suffix=".attention"
        )
        p_dense = ChannelPruningModulePatcher(
            patcher_context, parameters_dense, BertStructure, suffix="dense"
        )

        module_patchers = dict(
            query=p_attention,
            key=p_attention,
            value=p_attention,
            att_dense=p_dense,
            interm_dense=p_dense,
            output_dense=p_dense,
        )

        patcher = BertLinearModelPatcher(module_patchers)
        patcher.patch(model)

        assert patcher.stats["patched"] == 72
        if False:
            key_sizes = {k: len(v) for k, v in patcher_context.context_modules.items()}

            for k, v in key_sizes.items():
                print(k, v)

            assert key_sizes == {"ampere_mask": 72, "mask": 12, "mask_1d": 48}

    def model_init(self, trial=None):
        model = super().model_init(trial)
        self.patch_model(model, trial)
        return model



def main():
    if len(sys.argv) < 2:
        raise RuntimeError("Please specify json file")
    filename = Path(sys.argv[1]).resolve()
    param_dict = json.load(open(filename))

    qa = QASparseTraining(param_dict)

    def hp_space(trial):
        return {}

    qa.hyperparameter_search(direction="minimize", hp_space=hp_space, n_trials=4)


def _mp_fn(index):
    # For xla_spawn (TPUs)
    main()


if __name__ == "__main__":
    main()
