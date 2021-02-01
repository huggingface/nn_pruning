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
A subclass of `Trainer` specific to Question-Answering tasks
"""

import os
from pathlib import Path

from nn_pruning.examples.xp import XPTrainer
from transformers.utils import logging
import numpy as np

logger = logging.get_logger(__name__)

class GlueTrainer(XPTrainer):
    def __init__(self, *args, eval_examples=None, post_process_function=None, **kwargs):
        self.model_args = kwargs.pop("model_args")
        self.data_args = kwargs.pop("data_args")
        super().__init__(*args, **kwargs)
        self.eval_examples = eval_examples
        self.post_process_function = post_process_function

    def evaluate(self, eval_dataset=None, eval_examples=None, ignore_keys=None):
        data_args = self.data_args
        eval_dataset = self.additional_datasets["validation_matched" if data_args.task_name == "mnli" else "validation"]

        for k in eval_dataset:
            print(k)
            import pdb;
            pdb.set_trace()
            break

        logger.info("*** Evaluate ***")

        # Loop to handle MNLI double evaluation (matched, mis-matched)
        tasks = [data_args.task_name]
        eval_datasets = [eval_dataset]
        if data_args.task_name == "mnli":
            tasks.append("mnli-mm")
            eval_datasets.append(self.additional_datasets["validation_mismatched"])

        checkpoint_dir = self.checkpoint_dir()

        eval_results = {}
        for eval_dataset, task in zip(eval_datasets, tasks):
            self.start_timer()
            for data in eval_dataset:
                print(data)
                break
            eval_result = super().evaluate(eval_dataset=eval_dataset)
            self.end_timer(len(eval_dataset), task)

            output_eval_file = os.path.join(checkpoint_dir, f"eval_results_{task}.txt")
            if self.is_world_process_zero():
                with open(output_eval_file, "w") as writer:
                    logger.info(f"***** Eval results {task} *****")
                    for key, value in eval_result.items():
                        logger.info(f"  {key} = {value}")
                        writer.write(f"{key} = {value}\n")

            eval_results.update(eval_result)

        logger.info("*** Test ***")

        # Loop to handle MNLI double evaluation (matched, mis-matched)
        tasks = [data_args.task_name]
        if data_args.task_name == "mnli":
            test_datasets = [self.additional_datasets["test_matched"]]
            tasks.append("mnli-mm")
            test_datasets.append(self.additional_datasets["test_mismatched"])
        else:
            test_datasets = [self.additional_datasets["test"]]

        for test_dataset, task in zip(test_datasets, tasks):
            # Removing the `label` columns because it contains -1 and Trainer won't like that.
            test_dataset.remove_columns_("label")
            predictions = self.predict(test_dataset=test_dataset).predictions
            predictions = np.squeeze(predictions) if self.is_regression else np.argmax(predictions, axis=1)

            output_test_file = os.path.join(checkpoint_dir, f"test_results_{task}.txt")
            if self.is_world_process_zero():
                with open(output_test_file, "w") as writer:
                    logger.info(f"***** Test results {task} *****")
                    writer.write("index\tprediction\n")
                    for index, item in enumerate(predictions):
                        if self.is_regression:
                            writer.write(f"{index}\t{item:3.3f}\n")
                        else:
                            item = self.label_list[item]
                            writer.write(f"{index}\t{item}\n")

