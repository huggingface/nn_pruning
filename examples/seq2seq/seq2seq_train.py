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
A subclass of `Trainer` specific to seq2seq tasks
"""

from dataclasses import dataclass, field
from pathlib import Path
import json
import os
import copy
from transformers import (
    Seq2SeqTrainer,
    Seq2SeqTrainingArguments,
)
from transformers.trainer_utils import PREFIX_CHECKPOINT_DIR
from transformers.utils import logging

import timeit
import functools
import torch.cuda
import torch.nn as nn
from nn_pruning.inference_model_patcher import optimize_model
from nn_pruning.sparse_trainer import TimingModule

@dataclass
class Seq2SeqXPTrainingArguments(Seq2SeqTrainingArguments):
    optimize_model_before_eval: str = field(
        default="disabled",
        metadata={
            "help": "Apply some optimization to model before evaluation (use nn_pruning.inference_model_patcher.InferencePatcher)."
                    "Valid values: disabled, block_sparse, dense"
        },
    )


logger = logging.get_logger(__name__)

class Seq2SeqXPTrainer(Seq2SeqTrainer):
    def __init__(self, *args, eval_examples=None, post_process_function=None, **kwargs):
        self.model_args = kwargs.pop("model_args")
        self.data_args = kwargs.pop("data_args")
        super().__init__(*args, **kwargs)
        self.eval_examples = eval_examples
        self.post_process_function = post_process_function

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
        return TimingModule(model, method_list=["generate", "config"])

    def run_dir(self):
        return Path(self.args.output_dir)

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

    def finish_evaluate(self, checkpoint_dir):
        for k, v in self.__dict__.items():
            if k.endswith("_args") and k != "args":
                filename = k + ".json"
                s = json.dumps(v.__dict__, indent=4, sort_keys=True)
                with open(os.path.join(checkpoint_dir, filename), "w") as f:
                    f.write(s)


    def evaluate(self, eval_dataset=None, eval_examples=None, ignore_keys=None):
        eval_dataset = self.eval_dataset if eval_dataset is None else eval_dataset
        eval_dataloader = self.get_eval_dataloader(eval_dataset)

        self.start_timer()

        output = self.prediction_loop(
            eval_dataloader,
            description="Evaluation",
            ignore_keys=ignore_keys,
        )

        self.end_timer(len(eval_dataset))

        checkpoint_dir = self.checkpoint_dir()

        metrics = output.metrics
        log_eval_metrics = metrics.copy()
        self.log(log_eval_metrics)

        if self.is_world_process_zero():
            logger.info("***** Eval results *****")
            for key, value in metrics.items():
                logger.info(f"  {key} = {value}")

            filename = "eval_results.json"
            s = json.dumps(metrics, indent=4, sort_keys=True)
            with open(os.path.join(checkpoint_dir, filename), "w") as f:
                f.write(s)

            self.finish_evaluate(checkpoint_dir)

        return metrics


    def predict(self, test_dataset, test_examples=None, ignore_keys=None):
        test_dataloader = self.get_test_dataloader(test_dataset)

        output = self.prediction_loop(
            test_dataloader,
            description="Prediction",
            ignore_keys=ignore_keys,
        )

        checkpoint_dir = self.checkpoint_dir()

        metrics = {f"test{k[len('eval'):]}": v for k, v in metrics.items()}

        if self.is_world_process_zero():
            logger.info("***** Pred results *****")
            for key, value in metrics.items():
                logger.info(f"  {key} = {value}")

            filename = "test_results.json"
            s = json.dumps(metrics, indent=4, sort_keys=True)
            with open(os.path.join(checkpoint_dir, filename), "w") as f:
                f.write(s)

        return output

