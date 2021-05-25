# coding=utf-8
# Copyright 2020 The HuggingFace Team All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""
Fine-tuning the library models for text summarization.
"""

import logging
import os
from dataclasses import dataclass, field
from pathlib import Path
from datasets import load_metric, load_dataset
import json
import nltk  # Here to have a nice missing dependency error message early on
import numpy as np
from filelock import FileLock
from transformers import (
    AutoConfig,
    AutoModelForSeq2SeqLM,
    DataCollatorForSeq2Seq,
    EvalPrediction,
    AutoTokenizer,
)
from transformers.file_utils import is_offline_mode

from nn_pruning.hp_naming import TrialShortNamer
from examples.xp import XP, DataTrainingArguments, ModelArguments, XPTrainingArguments
from .seq2seq_train import Seq2SeqXPTrainer, Seq2SeqXPTrainingArguments

logger = logging.getLogger(__name__)


try:
    nltk.data.find("tokenizers/punkt")
except (LookupError, OSError):
    if is_offline_mode():
        raise LookupError(
            "Offline mode: run this script without TRANSFORMERS_OFFLINE first to download nltk data files"
        )
    with FileLock(".lock") as lock:
        nltk.download("punkt", quiet=True)


summarization_name_mapping = {
    "amazon_reviews_multi": ("review_body", "review_title"),
    "big_patent": ("description", "abstract"),
    "cnn_dailymail": ("article", "highlights"),
    "orange_sum": ("text", "summary"),
    "pn_summary": ("article", "summary"),
    "psc": ("extract_text", "summary_text"),
    "samsum": ("dialogue", "summary"),
    "thaisum": ("body", "summary"),
    "xglue": ("news_body", "news_title"),
    "xsum": ("document", "summary"),
    "wiki_summary": ("article", "highlights"),
}

@dataclass
class SummarizationDataTrainingArguments(DataTrainingArguments):
    """
    Arguments pertaining to what data we are going to input our model for training and eval.
    """
    text_column: str = field(
        default=None,
        metadata={"help": "The name of the column in the datasets containing the full texts (for summarization)."},
    )
    summary_column: str = field(
        default=None,
        metadata={"help": "The name of the column in the datasets containing the summaries (for summarization)."},
    )
    max_source_length: int = field(
        default=1024,
        metadata={
            "help": "The maximum total input sequence length after tokenization. Sequences longer "
            "than this will be truncated, sequences shorter will be padded."
        },
    )
    max_target_length: int = field(
        default=128,
        metadata={
            "help": "The maximum total sequence length for target text after tokenization. Sequences longer "
            "than this will be truncated, sequences shorter will be padded."
        },
    )
    val_max_target_length: int = field(
        default=None,
        metadata={
            "help": "The maximum total sequence length for validation target text after tokenization. Sequences longer "
            "than this will be truncated, sequences shorter will be padded. Will default to `max_target_length`."
            "This argument is also used to override the ``max_length`` param of ``model.generate``, which is used "
            "during ``evaluate`` and ``predict``."
        },
    )
    max_train_samples: int = field(
        default=None,
        metadata={
            "help": "For debugging purposes or quicker training, truncate the number of training examples to this "
            "value if set."
        },
    )
    max_val_samples: int = field(
        default=None,
        metadata={
            "help": "For debugging purposes or quicker training, truncate the number of validation examples to this "
            "value if set."
        },
    )
    max_test_samples: int = field(
        default=None,
        metadata={
            "help": "For debugging purposes or quicker training, truncate the number of test examples to this "
            "value if set."
        },
    )
    num_beams: int = field(
        default=None,
        metadata={
            "help": "Number of beams to use for evaluation. This argument will be passed to ``model.generate``, "
            "which is used during ``evaluate`` and ``predict``."
        },
    )
    ignore_pad_token_for_loss: bool = field(
        default=True,
        metadata={
            "help": "Whether to ignore the tokens corresponding to padded labels in the loss computation or not."
        },
    )
    source_prefix: str = field(
        default=None, metadata={"help": "A prefix to add before every source text (useful for T5 models)."}
    )

    def __post_init__(self):
        super().__post_init__()
        if self.val_max_target_length is None:
            self.val_max_target_length = self.max_target_length

class SummarizationXP(XP):
    ARGUMENTS = {
        "model": ModelArguments,
        "data": SummarizationDataTrainingArguments,
        "training": Seq2SeqXPTrainingArguments,
    }
    SEQ2SEQ_TRAINER_CLASS = Seq2SeqXPTrainer
    SHORT_NAMER = TrialShortNamer

    @classmethod
    def _model_init(cls, model_args, model_config, data_args):
        model = AutoModelForSeq2SeqLM.from_pretrained(
            model_args.model_name_or_path,
            from_tf=bool(".ckpt" in model_args.model_name_or_path),
            config=model_config,
            cache_dir=model_args.cache_dir,
        )

        if model.config.decoder_start_token_id is None:
            raise ValueError("Make sure that `config.decoder_start_token_id` is correctly defined")

        return model

    def _preprocess_function(self, examples):
        data_args = self.data_args
        inputs = examples[self.text_column]
        targets = examples[self.summary_column]
        inputs = [self.prefix + inp for inp in inputs]
        model_inputs = self.tokenizer(inputs, max_length=data_args.max_source_length, padding=self.padding, truncation=True)

        # Setup the tokenizer for targets
        with self.tokenizer.as_target_tokenizer():
            labels = self.tokenizer(targets, max_length=self.max_target_length, padding=self.padding, truncation=True)

        # If we are padding here, replace all tokenizer.pad_token_id in the labels by -100 when we want to ignore
        # padding in the loss.
        if self.padding == "max_length" and data_args.ignore_pad_token_for_loss:
            labels["input_ids"] = [
                [(l if l != self.tokenizer.pad_token_id else -100) for l in label] for label in labels["input_ids"]
            ]
        model_inputs["labels"] = labels["input_ids"]
        return model_inputs

    def prepare_column_names(self):
        training_args = self.training_args
        if training_args.do_train:
            column_names = self.datasets["train"].column_names
        elif training_args.do_eval:
            column_names = self.datasets["validation"].column_names
        elif training_args.do_predict:
            column_names = self.datasets["test"].column_names
        else:
            raise ValueError("Please pass `do_train`, `do_eval` and/or `do_predict`.")
        self.column_names = column_names

    def prepare_datasets(self):
        data_args = self.data_args
        dataset_cache_dir = Path(data_args.dataset_cache_dir).resolve()

        if not dataset_cache_dir.exists():
            dataset_cache_dir.mkdir()

        if self.training_args.do_train:
            train_dataset = self.datasets["train"]
            if data_args.max_train_samples is not None:
                train_dataset = train_dataset.select(range(data_args.max_train_samples))
            self.train_dataset = train_dataset.map(
                self._preprocess_function,
                batched=True,
                num_proc=data_args.preprocessing_num_workers,
                remove_columns=self.column_names,
                load_from_cache_file=not data_args.overwrite_cache,
                cache_file_name=str(dataset_cache_dir / "train_dataset"),
            )

        if self.training_args.do_eval:
            validation_dataset = self.datasets["validation"]
            if data_args.max_val_samples is not None:
                validation_dataset = validation_dataset.select(range(data_args.max_val_samples))
            self.validation_dataset = validation_dataset.map(
                self._preprocess_function,
                batched=True,
                num_proc=data_args.preprocessing_num_workers,
                remove_columns=self.column_names,
                load_from_cache_file=not data_args.overwrite_cache,
                cache_file_name=str(dataset_cache_dir / "eval_dataset"),
            )

        if self.training_args.do_predict:
            predict_dataset = self.datasets["test"]
            if data_args.max_test_samples is not None:
                predict_dataset = predict_dataset.select(range(data_args.max_test_samples))
            self.predict_dataset = predict_dataset.map(
                self._preprocess_function,
                batched=True,
                num_proc=data_args.preprocessing_num_workers,
                remove_columns=self.column_names,
                load_from_cache_file=not data_args.overwrite_cache,
                cache_file_name=str(dataset_cache_dir / "test_dataset"),
            )


    def create_dataset(self):
        # Get the datasets: you can either provide your own CSV/JSON training and evaluation files (see below)
        # or just provide the name of one of the public datasets available on the hub at https://huggingface.co/datasets/
        # (the dataset will be downloaded automatically from the datasets Hub).
        #
        # For CSV/JSON files this script will use the first column for the full texts and the second column for the
        # summaries (unless you specify column names for this with the `text_column` and `summary_column` arguments).
        #
        # In distributed training, the load_dataset function guarantee that only one local process can concurrently
        # download the dataset.
        data_args = self.data_args
        if data_args.dataset_name is not None:
            # Downloading and loading a dataset from the hub.
            self.datasets = load_dataset(data_args.dataset_name, data_args.dataset_config_name)
        else:
            data_files = {}
            if data_args.train_file is not None:
                data_files["train"] = data_args.train_file
                extension = data_args.train_file.split(".")[-1]
            if data_args.validation_file is not None:
                data_files["validation"] = data_args.validation_file
                extension = data_args.validation_file.split(".")[-1]
            if data_args.test_file is not None:
                data_files["test"] = data_args.test_file
                extension = data_args.test_file.split(".")[-1]
            self.datasets = load_dataset(extension, data_files=data_files)

        self.prefix = data_args.source_prefix if data_args.source_prefix is not None else ""

        self.prepare_column_names()

        # Get the column names for input/target.
        dataset_columns = summarization_name_mapping.get(data_args.dataset_name, None)
        if data_args.text_column is None:
            self.text_column = dataset_columns[0] if dataset_columns is not None else self.column_names[0]
        else:
            self.text_column = data_args.text_column
            if self.text_column not in self.column_names:
                raise ValueError(
                    f"--text_column' value '{data_args.text_column}' needs to be one of: {', '.join(self.column_names)}"
                )
        if data_args.summary_column is None:
            self.summary_column = dataset_columns[1] if dataset_columns is not None else self.column_names[1]
        else:
            self.summary_column = data_args.summary_column
            if self.summary_column not in self.column_names:
                raise ValueError(
                    f"--summary_column' value '{data_args.summary_column}' needs to be one of: {', '.join(self.column_names)}"
                )

        self.max_target_length = data_args.max_target_length
        self.padding = "max_length" if data_args.pad_to_max_length else False
        self.prepare_datasets()

    def create_trainer(self):
        # Data collator
        training_args = self.training_args
        data_args = self.data_args

        label_pad_token_id = -100 if data_args.ignore_pad_token_for_loss else self.tokenizer.pad_token_id

        data_collator = DataCollatorForSeq2Seq(
            self.tokenizer,
            label_pad_token_id=label_pad_token_id,
        )

        # Metric
        metric = load_metric("rouge")

        def postprocess_text(preds, labels):
            preds = [pred.strip() for pred in preds]
            labels = [label.strip() for label in labels]

            # rougeLSum expects newline after each sentence
            preds = ["\n".join(nltk.sent_tokenize(pred)) for pred in preds]
            labels = ["\n".join(nltk.sent_tokenize(label)) for label in labels]

            return preds, labels

        def compute_metrics(p: EvalPrediction):
            preds = p.predictions[0] if isinstance(p.predictions, tuple) else p.predictions
            labels = p.label_ids
            decoded_preds = self.tokenizer.batch_decode(preds, skip_special_tokens=True)
            if data_args.ignore_pad_token_for_loss:
                # Replace -100 in the labels as we can't decode them.
                labels = np.where(labels != -100, labels, self.tokenizer.pad_token_id)
            decoded_labels = self.tokenizer.batch_decode(labels, skip_special_tokens=True)

            # Some simple post-processing
            decoded_preds, decoded_labels = postprocess_text(decoded_preds, decoded_labels)
            result = metric.compute(predictions=decoded_preds, references=decoded_labels, use_stemmer=True)
            # Extract a few results from ROUGE
            result = {key: value.mid.fmeasure * 100 for key, value in result.items()}

            prediction_lens = [np.count_nonzero(pred != self.tokenizer.pad_token_id) for pred in preds]
            result["gen_len"] = np.mean(prediction_lens)
            result = {k: round(v, 4) for k, v in result.items()}
            return result

        all_args = self.get_all_args(exclude_base=True)

        # Initialize our Trainer
        self.trainer = self.SEQ2SEQ_TRAINER_CLASS(
            model=None,
            args=training_args,
            train_dataset=self.train_dataset if training_args.do_train else None,
            eval_dataset=self.validation_dataset if training_args.do_eval else None,
            tokenizer=self.tokenizer,
            data_collator=data_collator,
            compute_metrics=compute_metrics if training_args.predict_with_generate else None,
            model_init=self.model_init,
            **all_args,
        )
        self.trainer._max_length = data_args.max_target_length
        self.trainer._num_beams = data_args.num_beams

    @classmethod
    def evaluate_model(
            cls,
            model_name_or_path,
            task,
            dataset_config_name=None,
            optimize_mode="dense",
            output_dir=None
    ):
        if output_dir is None:
            output_dir = Path(model_name_or_path)
        else:
            output_dir = Path(output_dir)
        output_dir = output_dir.resolve()

        parameters = {
            "model_name_or_path": model_name_or_path,
            "dataset_name": task,
            "dataset_config_name": dataset_config_name,
            "do_train": 0,
            "do_eval": 1,
            "per_device_eval_batch_size": 16,
            "max_target_length": 128,
            "output_dir": str(output_dir),
            "logging_dir": str(output_dir),
            "overwrite_cache": 0,
            "overwrite_output_dir": 0,
            "optimize_model_before_eval": optimize_mode
        }

        cls.run_from_dict(parameters)

        file_info = {"timings": "evaluate_timing",
                     "metrics": "eval_results"}

        ret = {}
        for k, v in file_info.items():
            with open(output_dir / "checkpoint-0" / (v + ".json")) as f:
                j = json.load(f)
                ret[k] = j

        return ret
