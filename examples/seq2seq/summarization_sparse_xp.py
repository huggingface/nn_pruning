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
Sparse Fine-tuning the library models for text summarization.
"""
# You can also adapt this script on your own question answering task. Pointers for this are left as comments.


import json
import shutil
from pathlib import Path
from types import SimpleNamespace
import torch
from transformers import AutoModelForSeq2SeqLM
from nn_pruning.inference_model_patcher import optimize_model
from nn_pruning.hp_naming import TrialShortNamer
from nn_pruning.patch_coordinator import SparseTrainingArguments
from nn_pruning.sparse_xp import SparseXP
from .seq2seq_train import Seq2SeqXPTrainingArguments
from .seq2seq_sparse_train import Seq2SeqSparseTrainer
from .summarization_xp import SummarizationXP, ModelArguments, SummarizationDataTrainingArguments


class SparseSummarizationShortNamer(TrialShortNamer):
    DEFAULTS = {
        "adam_beta1": 0.9,
        "adam_beta2": 0.999,
        "adam_epsilon": 1e-08,
        "ampere_pruning_method": "disabled",
        "attention_block_cols": 32,
        "attention_block_rows": 32,
        "attention_lambda": 1.0,
        "attention_output_with_dense": 0,
        "attention_pruning_method": "topK",
        "bias_mask": False,
        "dataloader_drop_last": False,
        "dataloader_num_workers": 0,
        "dataset_cache_dir": "dataset_cache",
        "debug": False,
        "dense_block_cols": 1,
        "dense_block_rows": 1,
        "dense_lambda": 1.0,
        "decoder_dense_lambda": None,
        "decoder_attention_lambda": None,
        "dense_pruning_method": "topK",
        "disable_tqdm": False,
        "distil_alpha_ce": 0.1,
        "distil_alpha_teacher": 0.9,
        "distil_teacher_name_or_path": None,
        "distil_temperature": 2.0,
        "do_eval": 1,
        "do_predict": False,
        "do_train": 1,
        "evaluation_strategy": "epoch",
        "eval_steps": 500,
        "final_ampere_temperature": 20.0,
        "final_finetune": 0,
        "final_threshold": 0.1,
        "final_warmup": 2,
        "fp16": False,
        "fp16_opt_level": "O1",
        "fp16_backend": "auto",
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
        "max_steps": -1,
        "model_parallel": False,
        "n_best_size": 20,
        "no_cuda": False,
        "null_score_diff_threshold": 0.0,
        "num_train_epochs": 10,
        "output_dir": "output/summarization_test",
        "optimize_model_before_eval": "disabled",
        "overwrite_cache": 0,
        "overwrite_output_dir": 1,
        "past_index": -1,
        "per_device_eval_batch_size": 8,
        "per_device_train_batch_size": 16,
        "prediction_loss_only": False,
        "regularization": "disabled",
        "regularization_final_lambda": 0.0,
        "remove_unused_columns": True,
        "run_name": "output/summarization_test",
        "save_steps": 5000,
        "save_total_limit": 5,
        "seed": 17,
        "sharded_ddp": False,
        "tpu_metrics_debug": False,
        "warmup_steps": 5400,
        "weight_decay": 0.0,
        "tokenizer_name": None,
        "use_fast_tokenizer": True,
        "layer_norm_patch": False,
        "layer_norm_patch_steps": 50000,
        "layer_norm_patch_start_delta": 0.99,
        "gelu_patch":False,
        "gelu_patch_steps": 50000,
        "eval_with_current_patch_params": False,
        "linear_min_parameters": 0.0,
        "rewind_model_name_or_path": None,
        "warmup_ratio": 0.0,
        "lr_scheduler_type": "SchedulerType.LINEAR",
        "logging_strategy": "IntervalStrategy.STEPS",
        "save_strategy": "IntervalStrategy.STEPS",
        "fp16_full_eval": False,
        "label_smoothing_factor": 0.0,
        "adafactor": False,
        "group_by_length": False,
        "report_to": None,
        "dataloader_pin_memory": True,
        "skip_memory_metrics": False,
        "_n_gpu": 1,
        "max_seq_length": 384,
        "doc_stride": 128,
        "val_max_target_length": None,
        "sortish_sampler": False,
        "qat": False,
        "qconfig": "default",
        "train_file": "output/summarization_test/",
        "validation_file": "output/summarization_test/",
        "model_name_or_path": "facebook/bart-base",
        "dataset_name": "xsum",
        "dataset_config_name": None,
        "pad_to_max_length": True,
        "ignore_pad_token_for_loss": True,
        "max_source_length": 1024,
        "max_target_length": 128,
        "num_beams": 6,
        "predict_with_generate": True,
        "source_prefix": None,
    }

class SummarizationSparseXP(SparseXP, SummarizationXP):
    ARGUMENTS = {
        "model": ModelArguments,
        "data": SummarizationDataTrainingArguments,
        "training": Seq2SeqXPTrainingArguments,
        "sparse": SparseTrainingArguments,
    }
    SEQ2SEQ_TRAINER_CLASS = Seq2SeqSparseTrainer
    SHORT_NAMER = SparseSummarizationShortNamer
    CONSTRUCTOR = AutoModelForSeq2SeqLM
    LOGIT_NAMES = ["logits"]

    def __init__(self, params):
        SummarizationXP.__init__(self, params)
        SparseXP.__init__(self)

    def create_trainer(self, *args, **kwargs):
        super().create_trainer(*args, **kwargs)
        SparseXP.setup_trainer(self)

    @classmethod
    def final_finetune(cls, src_path, dest_path, task, dataset_config_name=None, teacher=None):
        param_dict = {
            "model_name_or_path": src_path,
            "dataset_name": task,
            "dataset_config_name": dataset_config_name,
            "do_train": 1,
            "do_eval": 1,
            "per_device_train_batch_size": 4,
            "per_device_eval_batch_size": 16,
            "max_target_length": 128,
            "num_train_epochs": 10,
            "logging_steps": 250,
            "save_steps": 2500,
            "eval_steps": 2500,
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
            "regularization": "",
            "regularization_final_lambda": 0,
            "distil_teacher_name_or_path": teacher,
            "distil_alpha_ce": 0.1,
            "distil_alpha_teacher": 0.9,
            "final_finetune": 1,
            "attention_output_with_dense": 0,
        }
        summarization = cls(param_dict)
        summarization.run()

        cls.fix_last_checkpoint_bug(dest_path)



