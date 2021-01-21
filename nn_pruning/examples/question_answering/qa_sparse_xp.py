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

from nn_pruning.hp_naming import TrialShortNamer
from nn_pruning.modules.patch_coordinator import SparseTrainingArguments, ModelPatchingCoordinator
from .qa_sparse_train import QASparseTrainer
from .qa_xp import (
    QAXP,
    ModelArguments,
    QADataTrainingArguments,
    XPTrainingArguments,
)


class SparseQAShortNamer(TrialShortNamer):
    DEFAULTS = {
        "adam_beta1": 0.9,
        "adam_beta2": 0.999,
        "adam_epsilon": 1e-08,
        "ampere_pruning_method": "disabled",
        "attention_block_cols": 768,
        "attention_block_rows": 64,
        'attention_lambda': 1.0,
        'attention_output_with_dense': True,
        "attention_pruning_method": "topK",
        "bias_mask": False,
        "dataloader_drop_last": False,
        "dataloader_num_workers": 0,
        "dataset_cache_dir": "dataset_cache",
        "dataset_name": "squad",
        "debug": False,
        "dense_block_cols": 1,
        "dense_block_rows": 1,
        'dense_lambda': 1.0,
        "dense_pruning_method": "topK",
        "disable_tqdm": False,
        "distil_alpha_ce": 0.1,
        "distil_alpha_teacher": 0.9,
        "distil_teacher_name_or_path": None,
        "distil_temperature": 2.0,
        "doc_stride": 128,
        "do_eval": 1,
        "do_predict": False,
        "do_train": 1,
        "evaluation_strategy": "epoch",
        "eval_steps": 500,
        "final_ampere_temperature": 20.0,
        "final_finetune":0,
        "final_threshold": 0.1,
        "final_warmup": 2,
        "fp16": False,
        "fp16_opt_level": "O1",
        'fp16_backend': 'auto',
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
        'optimize_model_before_eval': 'disabled',
        "overwrite_cache": 0,
        "overwrite_output_dir": 1,
        "pad_to_max_length": True,
        "past_index": -1,
        "per_device_eval_batch_size": 8,
        "per_device_train_batch_size": 16,
        "prediction_loss_only": False,
        "regularization": "disabled",
        "regularization_final_lambda": 0.0,
        "remove_unused_columns": True,
        "run_name": "output/squad_test",
        "save_steps": 5000,
        "save_total_limit": 5,
        "seed": 17,
        'sharded_ddp': False,
        "tpu_metrics_debug": False,
        "version_2_with_negative": False,
        "warmup_steps": 5400,
        "weight_decay": 0.0,
    }

class QASparseXP(QAXP):
    ARGUMENTS = {
        "model": ModelArguments,
        "data": QADataTrainingArguments,
        "training": XPTrainingArguments,
        "sparse": SparseTrainingArguments,
    }
    QA_TRAINER_CLASS = QASparseTrainer
    SHORT_NAMER = SparseQAShortNamer

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.patch_coordinator = ModelPatchingCoordinator(self.sparse_args, self.training_args.device, self.model_args.cache_dir)

    def create_trainer(self, *args, **kwargs):
        super().create_trainer(*args, **kwargs)
        self.trainer.set_patch_coordinator(self.patch_coordinator)

    def model_init(self, trial=None):
        model = super().model_init(trial)
        self.patch_coordinator.patch_model(model, trial)
        return model

    @classmethod
    def compile_model(cls, src_path, dest_path = None):
        src_path = Path(src_path)
        if dest_path is not None:
            dest_path = Path(dest_path)
        model_bin_name = "pytorch_model.bin"

        def load_json_to_obj(name):
            with (src_path / name).open() as f:
                return json.load(f, object_hook=lambda d: SimpleNamespace(**d))

        current_config = src_path / "config.json"
        up_config = (src_path.parent) / "config.json"

        if not current_config.exists():
            shutil.copy(up_config, current_config)

        with current_config.open() as f:
            model_config = json.load(f)

        model_args = load_json_to_obj("model_args.json")
        sparse_args = load_json_to_obj("sparse_args.json")

        model_args.model_name_or_path = str(src_path)

        model = cls._model_init(model_args, model_config)
        patcher = ModelPatchingCoordinator(sparse_args, "cuda", None)
        patcher.patch_model(model, trial=None)


        state_dict = torch.load(src_path / model_bin_name)
        model.load_state_dict(state_dict, strict=True)

        patcher.compile_model(model)

        if dest_path is not None:
            shutil.copytree(src_path, dest_path, dirs_exist_ok=True)
            state_dict = model.state_dict()
            torch.save(state_dict, dest_path / model_bin_name)

        return model



