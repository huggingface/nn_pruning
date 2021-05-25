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
Fine-tuning the library models for question answering.
"""
# You can also adapt this script on your own question answering task. Pointers for this are left as comments.

import logging
import os
from dataclasses import dataclass, field
from pathlib import Path

from datasets import load_metric, load_dataset
from transformers import (
    AutoModelForQuestionAnswering,
    DataCollatorWithPadding,
    EvalPrediction,
    default_data_collator,
)

from nn_pruning.hp_naming import TrialShortNamer

from .qa_train import QATrainer
from .qa_utils import postprocess_qa_predictions
from examples.xp import XP, DataTrainingArguments, ModelArguments, XPTrainingArguments
import json

logger = logging.getLogger(__name__)


@dataclass
class QADataTrainingArguments(DataTrainingArguments):
    """
    Arguments pertaining to what data we are going to input our model for training and eval.
    """

    version_2_with_negative: bool = field(
        default=False,
        metadata={"help": "If true, some of the examples do not have an answer."},
    )
    null_score_diff_threshold: float = field(
        default=0.0,
        metadata={
            "help": "The threshold used to select the null answer: if the best answer has a score that is less than "
            "the score of the null answer minus this threshold, the null answer is selected for this example. "
            "Only useful when `version_2_with_negative=True`."
        },
    )
    n_best_size: int = field(
        default=20,
        metadata={"help": "The total number of n-best predictions to generate when looking for an answer."},
    )

    max_answer_length: int = field(
        default=30,
        metadata={
            "help": "The maximum length of an answer that can be generated. This is needed because the start "
            "and end predictions are not conditioned on one another."
        },
    )

class QAXP(XP):
    ARGUMENTS = {
        "model": ModelArguments,
        "data": QADataTrainingArguments,
        "training": XPTrainingArguments,
    }
    QA_TRAINER_CLASS = QATrainer
    SHORT_NAMER = TrialShortNamer

    @classmethod
    def _model_init(cls, model_args, model_config, data_args):
        model = AutoModelForQuestionAnswering.from_pretrained(
            model_args.model_name_or_path,
            from_tf=bool(".ckpt" in model_args.model_name_or_path),
            config=model_config,
            cache_dir=model_args.cache_dir,
        )
        return model

    # Validation preprocessing
    def _prepare_validation_features(self, examples):
        # Tokenize our examples with truncation and maybe padding, but keep the overflows using a stride. This results
        # in one example possible giving several features when a context is long, each of those features having a
        # context that overlaps a bit the context of the previous feature.
        data_args = self.data_args
        pad_on_right = self.pad_on_right
        tokenized_examples = self.tokenizer(
            examples[self.question_column_name if pad_on_right else self.context_column_name],
            examples[self.context_column_name if pad_on_right else self.question_column_name],
            truncation="only_second" if pad_on_right else "only_first",
            max_length=data_args.max_seq_length,
            stride=data_args.doc_stride,
            return_overflowing_tokens=True,
            return_offsets_mapping=True,
            padding="max_length" if data_args.pad_to_max_length else False,
        )

        # Since one example might give us several features if it hasanalyze_run.py /data_2to/devel_data/nn_pruning/output/ files/results squadv2 all a long context, we need a map from a feature to
        # its corresponding example. This key gives us just that.
        sample_mapping = tokenized_examples.pop("overflow_to_sample_mapping")

        # For evaluation, we will need to convert our predictions to substrings of the context, so we keep the
        # corresponding example_id and we will store the offset mappings.
        tokenized_examples["example_id"] = []

        for i in range(len(tokenized_examples["input_ids"])):
            # Grab the sequence corresponding to that example (to know what is the context and what is the question).
            sequence_ids = tokenized_examples.sequence_ids(i)
            context_index = 1 if pad_on_right else 0

            # One example can give several spans, this is the index of the example containing this span of text.
            sample_index = sample_mapping[i]
            tokenized_examples["example_id"].append(examples["id"][sample_index])

            # Set to None the offset_mapping that are not part of the context so it's easy to determine if a token
            # position is part of the context or not.
            tokenized_examples["offset_mapping"][i] = [
                (o if sequence_ids[k] == context_index else None)
                for k, o in enumerate(tokenized_examples["offset_mapping"][i])
            ]

        return tokenized_examples

    # Training preprocessing
    def _prepare_train_features(self, examples):
        # Preprocessing the datasets.
        # Preprocessing is slighlty different for training and evaluation.
        training_args = self.training_args
        data_args = self.data_args

        question_column_name = self.question_column_name
        context_column_name = self.context_column_name
        answer_column_name = self.answer_column_name

        pad_on_right = self.pad_on_right
        # Tokenize our examples with truncation and maybe padding, but keep the overflows using a stride. This results
        # in one example possible giving several features when a context is long, each of those features having a
        # context that overlaps a bit the context of the previous feature.
        tokenized_examples = self.tokenizer(
            examples[question_column_name if pad_on_right else context_column_name],
            examples[context_column_name if pad_on_right else question_column_name],
            truncation="only_second" if pad_on_right else "only_first",
            max_length=data_args.max_seq_length,
            stride=data_args.doc_stride,
            return_overflowing_tokens=True,
            return_offsets_mapping=True,
            padding="max_length" if data_args.pad_to_max_length else False,
        )

        # Since one example might give us several features if it has a long context, we need a map from a feature to
        # its corresponding example. This key gives us just that.
        sample_mapping = tokenized_examples.pop("overflow_to_sample_mapping")
        # The offset mappings will give us a map from token to character position in the original context. This will
        # help us compute the start_positions and end_positions.
        offset_mapping = tokenized_examples.pop("offset_mapping")

        # Let's label those examples!
        tokenized_examples["start_positions"] = []
        tokenized_examples["end_positions"] = []

        for i, offsets in enumerate(offset_mapping):
            # We will label impossible answers with the index of the CLS token.
            input_ids = tokenized_examples["input_ids"][i]
            cls_index = input_ids.index(self.tokenizer.cls_token_id)

            # Grab the sequence corresponding to that example (to know what is the context and what is the question).
            sequence_ids = tokenized_examples.sequence_ids(i)

            # One example can give several spans, this is the index of the example containing this span of text.
            sample_index = sample_mapping[i]
            answers = examples[answer_column_name][sample_index]
            # If no answers are given, set the cls_index as answer.
            if len(answers["answer_start"]) == 0:
                tokenized_examples["start_positions"].append(cls_index)
                tokenized_examples["end_positions"].append(cls_index)
            else:
                # Start/end character index of the answer in the text.
                start_char = answers["answer_start"][0]
                end_char = start_char + len(answers["text"][0])

                # Start token index of the current span in the text.
                token_start_index = 0
                while sequence_ids[token_start_index] != (1 if pad_on_right else 0):
                    token_start_index += 1

                # End token index of the current span in the text.
                token_end_index = len(input_ids) - 1
                while sequence_ids[token_end_index] != (1 if pad_on_right else 0):
                    token_end_index -= 1

                # Detect if the answer is out of the span (in which case this feature is labeled with the CLS index).
                if not (offsets[token_start_index][0] <= start_char and offsets[token_end_index][1] >= end_char):
                    tokenized_examples["start_positions"].append(cls_index)
                    tokenized_examples["end_positions"].append(cls_index)
                else:
                    # Otherwise move the token_start_index and token_end_index to the two ends of the answer.
                    # Note: we could go after the last offset if the answer is the last word (edge case).
                    while token_start_index < len(offsets) and offsets[token_start_index][0] <= start_char:
                        token_start_index += 1
                    tokenized_examples["start_positions"].append(token_start_index - 1)
                    while offsets[token_end_index][1] >= end_char:
                        token_end_index -= 1
                    tokenized_examples["end_positions"].append(token_end_index + 1)

        return tokenized_examples


    def prepare_column_names(self):
        training_args = self.training_args

        if training_args.do_train:
            column_names = self.datasets["train"].column_names
        else:
            column_names = self.datasets["validation"].column_names
        self.column_names = column_names
        self.question_column_name = "question" if "question" in column_names else column_names[0]
        self.context_column_name = "context" if "context" in column_names else column_names[1]
        self.answer_column_name = "answers" if "answers" in column_names else column_names[2]


    def prepare_datasets(self):
        dataset_cache_dir = Path(self.data_args.dataset_cache_dir).resolve()

        if not dataset_cache_dir.exists():
            dataset_cache_dir.mkdir()

        # Padding side determines if we do (question|context) or (context|question).
        pad_on_right = self.tokenizer.padding_side == "right"
        self.pad_on_right = pad_on_right

        if self.training_args.do_train:
            self.train_dataset = self.datasets["train"].map(
                self._prepare_train_features,
                batched=True,
                num_proc=self.data_args.preprocessing_num_workers,
                remove_columns=self.column_names,
                load_from_cache_file=not self.data_args.overwrite_cache,
                cache_file_name=str(dataset_cache_dir / "train_dataset"),
            )

        if self.training_args.do_eval:
            self.validation_dataset = self.datasets["validation"].map(
                self._prepare_validation_features,
                batched=True,
                num_proc=self.data_args.preprocessing_num_workers,
                remove_columns=self.column_names,
                load_from_cache_file=not self.data_args.overwrite_cache,
                cache_file_name=str(dataset_cache_dir / "eval_dataset"),
            )


    def create_dataset(self):
        # Get the datasets: you can either provide your own CSV/JSON/TXT training and evaluation files (see below)
        # or just provide the name of one of the public datasets available on the hub at https://huggingface.co/datasets/
        # (the dataset will be downloaded automatically from the datasets Hub).
        #
        # For CSV/JSON files, this script will use the column called 'text' or the first column if no column called
        # 'text' is found. You can easily tweak this behavior (see below).
        #
        # In distributed training, the load_dataset function guarantee that only one local process can concurrently
        # download the dataset.
        data_args = self.data_args
        if data_args.dataset_name is not None:
            # Downloading and loading a dataset from the hub.
            self.datasets =  load_dataset(data_args.dataset_name, data_args.dataset_config_name)
        else:
            data_files = {}
            if data_args.train_file is not None:
                data_files["train"] = data_args.train_file
            if data_args.validation_file is not None:
                data_files["validation"] = data_args.validation_file
            extension = data_args.train_file.split(".")[-1]
            self.datasets = load_dataset(extension, data_files=data_files, field="data")

        self.prepare_column_names()
        self.prepare_datasets()


    # Post-processing:
    def _post_processing_function(self, examples, features, predictions, output_dir):
        # Post-processing: we match the start logits and end logits to answers in the original context.
        data_args = self.data_args
        training_args = self.training_args
        predictions = postprocess_qa_predictions(
            examples=examples,
            features=features,
            predictions=predictions,
            version_2_with_negative=data_args.version_2_with_negative,
            n_best_size=data_args.n_best_size,
            max_answer_length=data_args.max_answer_length,
            null_score_diff_threshold=data_args.null_score_diff_threshold,
            output_dir=output_dir,
            is_world_process_zero=self.trainer.is_world_process_zero(),
        )
        # Format the result to the format the metric expects.
        if data_args.version_2_with_negative:
            formatted_predictions = [
                {"id": k, "prediction_text": v, "no_answer_probability": 0.0} for k, v in predictions.items()
            ]
        else:
            formatted_predictions = [{"id": k, "prediction_text": v} for k, v in predictions.items()]
        references = [{"id": ex["id"], "answers": ex[self.answer_column_name]} for ex in self.datasets["validation"]]
        return EvalPrediction(predictions=formatted_predictions, label_ids=references)

    def create_trainer(self):
        # Data collator
        # We have already padded to max length if the corresponding flag is True, otherwise we need to pad in the data
        # collator.
        training_args = self.training_args
        data_args = self.data_args

        data_collator = (
            default_data_collator if data_args.pad_to_max_length else DataCollatorWithPadding(self.tokenizer)
        )

        metric = load_metric("squad_v2" if data_args.version_2_with_negative else "squad")

        def compute_metrics(p: EvalPrediction):
            return metric.compute(predictions=p.predictions, references=p.label_ids)

        all_args = self.get_all_args(exclude_base=True)

        # Initialize our Trainer
        self.trainer = self.QA_TRAINER_CLASS(
            model=None,
            args=training_args,
            train_dataset=self.train_dataset if training_args.do_train else None,
            eval_dataset=self.validation_dataset if training_args.do_eval else None,
            eval_examples=self.datasets["validation"] if training_args.do_eval else None,
            tokenizer=self.tokenizer,
            data_collator=data_collator,
            post_process_function=self._post_processing_function,
            compute_metrics=compute_metrics,
            model_init=self.model_init,
            **all_args,
        )

    @classmethod
    def evaluate_model(cls, model_name_or_path, task, optimize_mode="dense", output_dir = None):
        if output_dir is None:
            output_dir = Path(model_name_or_path)
        else:
            output_dir = Path(output_dir)
        output_dir = output_dir.resolve()

        parameters = {
            "model_name_or_path": str(model_name_or_path),
            "dataset_name": task,
            "do_train": 0,
            "do_eval": 1,
            "per_device_train_batch_size": 16,
            "max_seq_length": 384,
            "doc_stride": 128,
            "output_dir": str(output_dir),
            "logging_dir": str(output_dir),
            "overwrite_cache": 0,
            "overwrite_output_dir": 0,
            "per_device_eval_batch_size":128,
            "optimize_model_before_eval":optimize_mode,
            "version_2_with_negative": task == "squad_v2"
        }

        cls.run_from_dict(parameters)

        file_info = {"timings": "evaluate_timing",
                     "metrics": "eval_metrics"}

        ret = {}
        for k, v in file_info.items():
            with open(output_dir / "checkpoint-0" / (v + ".json")) as f:
                j = json.load(f)
                ret[k] = j

        return ret

