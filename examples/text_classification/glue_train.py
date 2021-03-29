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
import json

from examples.xp import XPTrainer
from transformers.utils import logging
from transformers.trainer_utils import (
    PredictionOutput,
)
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
        eval_dataset = self.additional_datasets["validation_matched" if data_args.dataset_name == "mnli" else "validation"]

        logger.info("*** Evaluate ***")

        # Loop to handle MNLI double evaluation (matched, mis-matched)
        tasks = [data_args.dataset_name]
        eval_datasets = [eval_dataset]
        if data_args.dataset_name == "mnli":
            tasks.append("mnli-mm")
            eval_datasets.append(self.additional_datasets["validation_mismatched"])

        eval_dataloaders = []
        for eval_dataset in eval_datasets:
            eval_dataloaders.append( self.get_eval_dataloader(eval_dataset))

        # Temporarily disable metric computation, we will do it in the loop here.
        checkpoint_dir = self.checkpoint_dir()

        output0 = None
        for eval_dataloader, task in zip(eval_dataloaders, tasks):
            self.start_timer()

            output = self.prediction_loop(
                eval_dataloader,
                description="Evaluation",
                # No point gathering the predictions if there are no metrics, otherwise we defer to
                # self.args.prediction_loss_only
                prediction_loss_only=True if self.compute_metrics is None else None,
                ignore_keys=ignore_keys,
            )
            if output0 is None:
                output0 = output
            self.end_timer(len(eval_dataset), task)

            eval_results = output.metrics

            log_metrics = {f"eval_{task}_{k}": v for k, v in output.metrics.items()}
            self.log(log_metrics)

            output_eval_file = os.path.join(checkpoint_dir, f"eval_results_{task}.json")
            if self.is_world_process_zero():
                logger.info(f"***** Eval results {task} *****")
                for key, value in eval_results.items():
                    logger.info(f"  {key} = {value}")

                with open(output_eval_file, "w") as writer:
                    json.dump(eval_results, writer, indent=4, sort_keys=True)


        logger.info("*** Test ***")

        # Loop to handle MNLI double evaluation (matched, mis-matched)
        tasks = [data_args.dataset_name]
        if data_args.dataset_name == "mnli":
            test_datasets = [self.additional_datasets["test_matched"]]
            tasks.append("mnli-mm")
            test_datasets.append(self.additional_datasets["test_mismatched"])
        else:
            test_datasets = [self.additional_datasets["test"]]

        for test_dataset, task in zip(test_datasets, tasks):
            # Removing the `label` columns because it contains -1 and Trainer won't like that.
            if "label" in test_dataset.column_names:
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

        super().finish_evaluate(checkpoint_dir, output0.metrics)

        return output0.metrics
