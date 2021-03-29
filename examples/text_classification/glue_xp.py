# coding=utf-8
# Copyright 2020 The HuggingFace Inc. team. All rights reserved.
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
""" Finetuning the library models for sequence classification on GLUE."""
# You can also adapt this script on your own text classification task. Pointers for this are left as comments.

from typing import Optional
import logging
from dataclasses import dataclass, field
from pathlib import Path
import random
import numpy as np
import copy

from datasets import load_metric, load_dataset
from transformers import (
    AutoModelForSequenceClassification,
    EvalPrediction,
    default_data_collator,
    AutoConfig,
    PretrainedConfig
)

from nn_pruning.hp_naming import TrialShortNamer

from .glue_train import GlueTrainer
from examples.xp import XP, DataTrainingArguments, ModelArguments, XPTrainingArguments
import json


task_to_keys = {
    "cola": ("sentence", None),
    "mnli": ("premise", "hypothesis"),
    "mrpc": ("sentence1", "sentence2"),
    "qnli": ("question", "sentence"),
    "qqp": ("question1", "question2"),
    "rte": ("sentence1", "sentence2"),
    "sst2": ("sentence", None),
    "stsb": ("sentence1", "sentence2"),
    "wnli": ("sentence1", "sentence2"),
}

logger = logging.getLogger(__name__)


@dataclass
class GlueDataTrainingArguments(DataTrainingArguments):
    """
    Arguments pertaining to what data we are going to input our model for training and eval.

    Using `HfArgumentParser` we can turn this class
    into argparse arguments to be able to specify them on
    the command line.
    """

    max_seq_length: int = field(
        default=128,
        metadata={
            "help": "The maximum total input sequence length after tokenization. Sequences longer "
            "than this will be truncated, sequences shorter will be padded."
        },
    )

    def __post_init__(self):
        if self.dataset_name is not None:
            self.dataset_name = self.dataset_name.lower()
            if self.dataset_name not in task_to_keys.keys():
                raise ValueError("Unknown task, you should pick one in " + ",".join(task_to_keys.keys()))
        elif self.train_file is None or self.validation_file is None:
            raise ValueError("Need either a GLUE task or a training/validation file.")
        else:
            extension = self.train_file.split(".")[-1]
            assert extension in [
                "csv",
                "json",
            ], "`train_file` should be a csv or a json file."
            extension = self.validation_file.split(".")[-1]
            assert extension in [
                "csv",
                "json",
            ], "`validation_file` should be a csv or a json file."


class GlueXP(XP):
    ARGUMENTS = {
        "model": ModelArguments,
        "data": GlueDataTrainingArguments,
        "training": XPTrainingArguments,
    }
    GLUE_TRAINER_CLASS = GlueTrainer
    SHORT_NAMER = TrialShortNamer

    @classmethod
    def _model_init(cls, model_args, model_config):
        model = AutoModelForSequenceClassification.from_pretrained(
            model_args.model_name_or_path,
            from_tf=bool(".ckpt" in model_args.model_name_or_path),
            config=model_config,
            cache_dir=model_args.cache_dir,
        )
        return model

    def create_config(self):
        # Load pretrained model and tokenizer
        #
        # Distributed training:
        # The .from_pretrained methods guarantee that only one local process can concurrently
        # download model & vocab.
        model_args = self.model_args

        if hasattr(self, "patch_coordinator"):
            teacher = self.patch_coordinator.teacher
        else:
            teacher = None

        config_path = model_args.config_name if model_args.config_name else model_args.model_name_or_path
        if teacher is not None:
            id2label = teacher.config.id2label
            label2id = {v:k for k,v in id2label.items()}
            kwargs = dict(id2label=id2label, label2id=label2id)
        else:
            with (Path(config_path) / "config.json").open() as f:
                config = json.load(f)
                kwargs =  dict(id2label=config["id2label"], label2id=config["label2id"])

        self.config = AutoConfig.from_pretrained(
            config_path,
            num_labels=self.num_labels,
            finetuning_task=self.data_args.dataset_name,
            cache_dir=model_args.cache_dir,
            **kwargs
        )

        return self.config

    def create_dataset(self):
        # Get the datasets: you can either provide your own CSV/JSON training and evaluation files (see below)
        # or specify a GLUE benchmark task (the dataset will be downloaded automatically from the datasets Hub).
        #
        # For CSV/JSON files, this script will use as labels the column called 'label' and as pair of sentences the
        # sentences in columns called 'sentence1' and 'sentence2' if such column exists or the first two columns not named
        # label if at least two columns are provided.
        #
        # If the CSVs/JSONs contain only one non-label column, the script does single sentence classification on this
        # single column. You can easily tweak this behavior (see below)
        #
        # In distributed training, the load_dataset function guarantee that only one local process can concurrently
        # download the dataset.
        data_args = self.data_args
        if data_args.dataset_name is not None:
            # Downloading and loading a dataset from the hub.
            datasets = load_dataset("glue", data_args.dataset_name)
        elif data_args.train_file.endswith(".csv"):
            # Loading a dataset from local csv files
            datasets = load_dataset(
                "csv",
                data_files={
                    "train": data_args.train_file,
                    "validation": data_args.validation_file,
                },
            )
        else:
            # Loading a dataset from local json files
            datasets = load_dataset(
                "json",
                data_files={
                    "train": data_args.train_file,
                    "validation": data_args.validation_file,
                },
            )


        # See more about loading any type of standard or custom dataset at
        # https://huggingface.co/docs/datasets/loading_datasets.html.

        # Labels
        if data_args.dataset_name is not None:
            is_regression = data_args.dataset_name == "stsb"
            if not is_regression:
                label_list = datasets["train"].features["label"].names
                num_labels = len(label_list)
            else:
                label_list = None
                num_labels = 1
        else:
            # Trying to have good defaults here, don't hesitate to tweak to your needs.
            is_regression = datasets["train"].features["label"].dtype in [
                "float32",
                "float64",
            ]
            if is_regression:
                num_labels = 1
            else:
                # A useful fast method:
                # https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.unique
                label_list = datasets["train"].unique("label")
                label_list.sort()  # Let's sort it for determinism
                num_labels = len(label_list)
        self.is_regression = is_regression
        self.label_list  = label_list
        self.num_labels = num_labels

        # Preprocessing the datasets
        if data_args.dataset_name is not None:
            sentence1_key, sentence2_key = task_to_keys[data_args.dataset_name]
        else:
            # Again, we try to have some nice defaults but don't hesitate to tweak to your use case.
            non_label_column_names = [name for name in datasets["train"].column_names if name != "label"]
            if "sentence1" in non_label_column_names and "sentence2" in non_label_column_names:
                sentence1_key, sentence2_key = "sentence1", "sentence2"
            else:
                if len(non_label_column_names) >= 2:
                    sentence1_key, sentence2_key = non_label_column_names[:2]
                else:
                    sentence1_key, sentence2_key = non_label_column_names[0], None
        self.sentence1_key = sentence1_key
        self.sentence2_key = sentence2_key

        # Padding strategy
        if data_args.pad_to_max_length:
            padding = "max_length"
            max_length = data_args.max_seq_length
        else:
            # We will pad later, dynamically at batch creation, to the max sequence length in each batch
            padding = False
            max_length = None

        # Some models have set the order of the labels to use, so let's make sure we do use it.
        label_to_id = None

        model_config = self.create_config()

        if (
                model_config.label2id != PretrainedConfig(num_labels=num_labels).label2id
                and data_args.dataset_name is not None
        ):
            # Some have all caps in their config, some don't.
            label_name_to_id = {k.lower(): v for k, v in model_config.label2id.items()}
            if list(sorted(label_name_to_id.keys())) == list(sorted(label_list)):
                label_to_id = {i: label_name_to_id[label_list[i]] for i in range(num_labels)}
            else:
                logger.warn(
                    "Your model seems to have been trained with labels, but they don't match the dataset: ",
                    f"model labels: {list(sorted(label_name_to_id.keys()))}, dataset labels: {list(sorted(label_list))}."
                    "\nIgnoring the model labels as a result.",
                )
        elif data_args.dataset_name is None:
            label_to_id = {v: i for i, v in enumerate(label_list)}

        self.label_to_id = label_to_id

        # This is needed because some part of the dataset contains label = -1
        if label_to_id is not None:
            preprocess_label_to_id = copy.deepcopy(label_to_id)
            preprocess_label_to_id[-1] = -1
        else:
            preprocess_label_to_id = None

        def preprocess_function(examples):
            # Tokenize the texts
            args = (
                (examples[sentence1_key],) if sentence2_key is None else (
                examples[sentence1_key], examples[sentence2_key])
            )
            result = self.tokenizer(*args, padding=padding, max_length=max_length, truncation=True)

            # Map labels to IDs (not necessary for GLUE tasks)
            if preprocess_label_to_id is not None and "label" in examples:
                result["label"] = [preprocess_label_to_id[l] for l in examples["label"]]
            return result

        cache_file_names = {}
        cache_dir = (Path(data_args.dataset_cache_dir) / data_args.dataset_name).resolve()
        cache_dir.mkdir(exist_ok=True, parents=True)
        for key in ["train"]:
            cache_file_names[key] =  str(cache_dir / key)

        for key in ["validation", "test"]:
            if data_args.dataset_name == "mnli":
                for matched in ["matched", "mismatched"]:
                    key_matched = "_".join([key, matched])
                    cache_file_names[key_matched] = str(cache_dir / key_matched)
            else:
                cache_file_names[key] = str(cache_dir / key)


        datasets = datasets.map(
            preprocess_function,
            batched=True,
            load_from_cache_file=not data_args.overwrite_cache,
            cache_file_names = cache_file_names
        )
        self.datasets = datasets

        self.train_dataset = datasets["train"]
        self.eval_dataset = datasets["validation_matched" if data_args.dataset_name == "mnli" else "validation"]
        if data_args.dataset_name is not None:
            self.test_dataset = datasets["test_matched" if data_args.dataset_name == "mnli" else "test"]
        # Log a few random samples from the training set:
        for index in random.sample(range(len(self.train_dataset)), 3):
            logger.info(f"Sample {index} of the training set: {self.train_dataset[index]}.")


    def create_trainer(self):
        # Data collator
        # We have already padded to max length if the corresponding flag is True, otherwise we need to pad in the data
        # collator.
        training_args = self.training_args
        data_args = self.data_args

        # Get the metric function
        if data_args.dataset_name is not None:
            metric = load_metric("glue", data_args.dataset_name)

        # TODO: When datasets metrics include regular accuracy, make an else here and remove special branch from
        # compute_metrics

        # You can define your custom compute_metrics function. It takes an `EvalPrediction` object (a namedtuple with a
        # predictions and label_ids field) and has to return a dictionary string to float.
        def compute_metrics(p: EvalPrediction):
            preds = p.predictions[0] if isinstance(p.predictions, tuple) else p.predictions
            preds = np.squeeze(preds) if self.is_regression else np.argmax(preds, axis=1)
            if data_args.dataset_name is not None:
                result = metric.compute(predictions=preds, references=p.label_ids)
                if len(result) > 1:
                    result["combined_score"] = np.mean(list(result.values())).item()
                return result
            elif self.is_regression:
                return {"mse": ((preds - p.label_ids) ** 2).mean().item()}
            else:
                return {"accuracy": (preds == p.label_ids).astype(np.float32).mean().item()}


        all_args = self.get_all_args(exclude_base=True)

        # Initialize our Trainer
        self.trainer = self.GLUE_TRAINER_CLASS(
            model=None,
            args=training_args,
            train_dataset=self.train_dataset if training_args.do_train else None,
            eval_dataset=None,
            compute_metrics=compute_metrics,
            tokenizer=self.tokenizer,
            # Data collator will default to DataCollatorWithPadding, so we change it if we already did the padding.
            data_collator=default_data_collator if data_args.pad_to_max_length else None,
            model_init=self.model_init,
            **all_args,
        )
        self.trainer.is_regression = self.is_regression
        self.trainer.label_list = self.label_list

        self.trainer.additional_datasets = self.datasets

    @classmethod
    def evaluate_model(cls, src_path, task, optimize_mode="dense"):
        src_path = Path(src_path).resolve()
        src_path_str = str(src_path)

        parameters = {
            "model_name_or_path": src_path_str,
            "dataset_name": task,
            "dataset_cache_dir": "dataset_cache_dir",
            "do_train": 0,
            "do_eval": 1,
            "per_device_eval_batch_size": 128,
            "max_seq_length": 128,
            "doc_stride": 128,
            "output_dir": src_path_str,
            "logging_dir": src_path_str,
            "overwrite_cache": 0,
            "overwrite_output_dir": 0,
            "optimize_model_before_eval": optimize_mode
        }

        cls.run_from_dict(parameters)

        file_info = {"timings": "evaluate_timing",
                     "metrics": "eval_results"}

        if task is not None:
            file_info_tmp = {}
            for k, v in file_info.items():
                file_info_tmp[k] = file_info[k] + "_" + task
                if task == "mnli":
                    file_info_tmp[k + "_mm"] = file_info_tmp[k] + "-mm"
            file_info = file_info_tmp

        ret = {}
        for k, v in file_info.items():
            with open(src_path / "checkpoint-0" / (v + ".json")) as f:
                j = json.load(f)
                ret[k] = j

        return ret

