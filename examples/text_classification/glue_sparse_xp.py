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
Sparse Fine-tuning the library models for question answering.
"""
# You can also adapt this script on your own question answering task. Pointers for this are left as comments.


import json
import shutil
from pathlib import Path
from types import SimpleNamespace
import torch
from nn_pruning.inference_model_patcher import optimize_model

from nn_pruning.hp_naming import TrialShortNamer
from nn_pruning.patch_coordinator import SparseTrainingArguments
from .glue_sparse_train import GlueSparseTrainer
from .glue_xp import (
    GlueXP,
    ModelArguments,
    GlueDataTrainingArguments,
    XPTrainingArguments,
)
from transformers import AutoModelForSequenceClassification
import tempfile
from nn_pruning.sparse_xp import SparseXP


class SparseGlueShortNamer(TrialShortNamer):
    DEFAULTS = {
        "adam_beta1": 0.9,
        "adam_beta2": 0.999,
        "adam_epsilon": 1e-08,
        "ampere_pruning_method": "disabled",
        "attention_block_cols": 32,
        "attention_block_rows": 32,
        "attention_lambda": 1.0,
        "attention_output_with_dense": 0,
        "attention_pruning_method": "sigmoied_threshold",
        "bias_mask": True,
        "dataloader_drop_last": False,
        "dataloader_num_workers": 0,
        "dataset_cache_dir": "dataset_cache_dir",
        "debug": False,
        "dense_block_cols": 1,
        "dense_block_rows": 1,
        "dense_lambda": 1.0,
        "dense_pruning_method": "sigmoied_threshold:1d_alt",
        "disable_tqdm": False,
        "distil_alpha_ce": 0.1,
        "distil_alpha_teacher": 0.9,
        "distil_teacher_name_or_path": "aloxatel/bert-base-mnli",
        "distil_temperature": 2.0,
        "do_eval": 1,
        "do_predict": False,
        "do_train": 1,
        "doc_stride": 128,
        "eval_steps": 5000,
        "evaluation_strategy": "steps",
        "final_ampere_temperature": 20.0,
        "final_finetune": False,
        "final_threshold": 0.1,
        "final_warmup": 5,
        "fp16": False,
        "fp16_opt_level": "O1",
        "gradient_accumulation_steps": 1,
        "ignore_data_skip": False,
        "initial_ampere_temperature": 0.0,
        "initial_threshold": 0,
        "initial_warmup": 1,
        "learning_rate": 3e-05,
        "load_best_model_at_end": False,
        "local_rank": -1,
        "logging_first_step": False,
        "logging_steps": 250,
        "mask_init": "constant",
        "mask_scale": 0.0,
        "mask_scores_learning_rate": 0.01,
        "max_grad_norm": 1.0,
        "max_seq_length": 128,
        "max_steps": -1,
        "model_name_or_path": "bert-base-uncased",
        "model_parallel": False,
        "no_cuda": False,
        "num_train_epochs": 10,
        "optimize_model_before_eval": "disabled",
        "output_dir": "output/mnli_test/",
        "overwrite_cache": 0,
        "overwrite_output_dir": 1,
        "pad_to_max_length": True,
        "past_index": -1,
        "per_device_eval_batch_size": 8,
        "per_device_train_batch_size": 1,
        "prediction_loss_only": False,
        "regularization": "l1",
        "regularization_final_lambda": 10,
        "remove_unused_columns": True,
        "run_name": "output/mnli_test/",
        "save_steps": 5000,
        "save_total_limit": 50,
        "seed": 17,
        "dataset_name": "mnli",
        "tpu_metrics_debug": False,
        "use_fast_tokenizer": True,
        "warmup_steps": 5400,
        "weight_decay": 0.0,
        'fp16_backend': 'auto',
        'sharded_ddp': False,
        'layer_norm_patch': False,
        'layer_norm_patch_steps': 50000,
        'layer_norm_patch_start_delta': 0.99,
        'gelu_patch': False,
        'gelu_patch_steps': 50000,
        'eval_with_current_patch_params': False,
        'warmup_ratio': 0.0,
        'fp16_full_eval': False,
        'label_smoothing_factor': 0.0,
        'adafactor': False,
        'group_by_length': False,
        'report_to': [],
        'dataloader_pin_memory': True,
        'skip_memory_metrics': False,
        '_n_gpu': 1,
        'linear_min_parameters': 0.005,
        'lr_scheduler_type': 'SchedulerType.LINEAR',
        'logging_strategy': 'IntervalStrategy.STEPS',
        'save_strategy': 'IntervalStrategy.STEPS',
        'rewind_model_name_or_path': None,
        'qat': False,
        'qconfig': 'default',
    }


class GlueSparseXP(SparseXP, GlueXP):
    ARGUMENTS = {
        "model": ModelArguments,
        "data": GlueDataTrainingArguments,
        "training": XPTrainingArguments,
        "sparse": SparseTrainingArguments,
    }
    GLUE_TRAINER_CLASS = GlueSparseTrainer
    SHORT_NAMER = SparseGlueShortNamer
    CONSTRUCTOR = AutoModelForSequenceClassification
    LOGIT_NAMES = ["logits"]

    def __init__(self, params):
        GlueXP.__init__(self, params)
        SparseXP.__init__(self)

    def create_trainer(self, *args, **kwargs):
        super().create_trainer(*args, **kwargs)
        SparseXP.setup_trainer(self)

    @classmethod
    def final_finetune(cls, src_path, dest_path, task, teacher):
        param_dict = {
            "model_name_or_path": src_path,
            "dataset_name": task,
            "dataset_cache_dir": "dataset_cache_dir",
            "do_train": 1,
            "do_eval": 1,
            "per_device_train_batch_size": 32,
            "per_device_eval_batch_size": 128,
            "max_seq_length": 128,
            "doc_stride": 128,
            "num_train_epochs": 6,
            "logging_steps": 250,
            "save_steps": 5000,
            "eval_steps": 5000,
            "save_total_limit": 50,
            "seed": 17,
            "evaluation_strategy": "steps",
            "learning_rate": 3e-5,
            "output_dir": dest_path,
            "logging_dir": dest_path,
            "overwrite_cache": 0,
            "overwrite_output_dir": 1,
            "warmup_steps": 10,
            "initial_warmup": 0,
            "final_warmup": 0,
            "mask_init": "constant",
            "mask_scale": 0.0,
            "regularization": "",
            "regularization_final_lambda": 0,
            "distil_teacher_name_or_path":teacher,
            "distil_alpha_ce": 0.1,
            "distil_alpha_teacher": 0.90,
            "attention_output_with_dense": 0,
            "final_finetune": 1,
        }


        glue = cls(param_dict)
        glue.run()

        cls.fix_last_checkpoint_bug(dest_path)
