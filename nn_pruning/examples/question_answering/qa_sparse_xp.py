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
from nn_pruning.modules.patch_coordinator import SparseTrainingArguments, ModelPatchingCoordinator
from .qa_sparse_train import QASparseTrainer
from .qa_xp import (
    QAXP,
    ModelArguments,
    QADataTrainingArguments,
    XPTrainingArguments,
)
from transformers import AutoModelForQuestionAnswering
import tempfile


class SparseQAShortNamer(TrialShortNamer):
    DEFAULTS = {
        "adam_beta1": 0.9,
        "adam_beta2": 0.999,
        "adam_epsilon": 1e-08,
        "ampere_pruning_method": "disabled",
        "attention_block_cols": 768,
        "attention_block_rows": 64,
        "attention_lambda": 1.0,
        "attention_output_with_dense": True,
        "attention_pruning_method": "topK",
        "bias_mask": False,
        "dataloader_drop_last": False,
        "dataloader_num_workers": 0,
        "dataset_cache_dir": "dataset_cache",
        "dataset_name": "squad",
        "debug": False,
        "dense_block_cols": 1,
        "dense_block_rows": 1,
        "dense_lambda": 1.0,
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
        "max_seq_length": 384,
        "max_steps": -1,
        "model_name_or_path": "bert-base-uncased",
        "model_parallel": False,
        "n_best_size": 20,
        "no_cuda": False,
        "null_score_diff_threshold": 0.0,
        "num_train_epochs": 10,
        "output_dir": "output/squad_test",
        "optimize_model_before_eval": "disabled",
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
        "sharded_ddp": False,
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
        self.patch_coordinator = self.create_patching_coordinator(self.sparse_args,
                                                                  self.training_args.device,
                                                                  self.model_args.cache_dir)

    @classmethod
    def create_patching_coordinator(cls, sparse_args, device, cache_dir):
        return ModelPatchingCoordinator(sparse_args,
                                        device=device,
                                        cache_dir=cache_dir,
                                        logit_names=["start_logits", "end_logits"],
                                        teacher_constructor=AutoModelForQuestionAnswering)

    def create_trainer(self, *args, **kwargs):
        super().create_trainer(*args, **kwargs)
        self.trainer.set_patch_coordinator(self.patch_coordinator)

    def unzero_parameters(self, model, epsilon=0.01):
        # Used to avoid zero gradients when doing final finetune on sparse networks that we want to extend
        # Make sure some parts are not completely zero
        for k, v in model.named_parameters():
            if "bias" in k:
                continue
            zero_mask = v == 0
            if zero_mask.sum() == 0:
                continue

            with torch.no_grad():
                print("unzero_parameters", k, "sparsity=", zero_mask.sum() / zero_mask.numel(), zero_mask.shape)
                new_values = torch.randn_like(v)
                new_values *= v.std() * epsilon
                new_values += v.mean()
                new_values *= zero_mask
                v.copy_(v + new_values)
        return model

    def model_init(self, trial=None):
        if self.sparse_args.final_finetune:
            model = self.compile_model(self.model_args.model_name_or_path)
            model = optimize_model(model, "dense")
            model = self.unzero_parameters(model)
        else:
            model = super().model_init(trial)
            self.patch_coordinator.patch_model(model, trial)
        return model


    @classmethod
    def fix_last_checkpoint_bug_checkpoint(cls, checkpoint_path):
        # Special stuff : add link to compensate for bug
        for link_name in ["pytorch_model.bin", "training_args.bin", "vocab.txt", "tokenizer_config.json",
                          "special_tokens_map.json"]:
            filename = checkpoint_path / link_name
            print(filename)
            filename_parent = Path("..") / link_name
            filename_absolute_parent = checkpoint_path.parent / link_name
            if not filename.exists() and filename_absolute_parent.exists():
                print(filename, filename_parent)
                filename.symlink_to(filename_parent)

    @classmethod
    def fix_last_checkpoint_bug(cls, run_path):
        run_path = Path(run_path)
        for src_path in run_path.iterdir():
            if src_path.name.startswith("checkpoint-"):
                cls.fix_last_checkpoint_bug_checkpoint(src_path)

    @classmethod
    def final_fine_tune_bertarize(cls, src_path, dest_path):
        src_path = Path(src_path)
        assert(dest_path is not None)
        dest_path = Path(dest_path)

        config = json.load((src_path / "config.json").open())
        hidden_size = config["hidden_size"]

        m = torch.load(src_path / "pytorch_model.bin")

        new_m = {}
        # TODO : depends on the network
        ffn_multiplier = 4

        for k, v in m.items():
            correct_shape = None
            if k.endswith("intermediate.dense.linear.weight") or k.endswith("intermediate.dense.weight"):
                correct_shape = (hidden_size * ffn_multiplier, hidden_size)
            elif k.endswith("intermediate.dense.linear.bias") or k.endswith("intermediate.dense.bias") :
                correct_shape = (hidden_size * ffn_multiplier,)
            elif k.endswith("output.dense.linear.weight") or (k.endswith("output.dense.weight") and "attention" not in k):
                correct_shape = (hidden_size, hidden_size * ffn_multiplier)
            elif k.endswith("output.dense.linear.bias") or k.endswith("output.dense.bias"):
                correct_shape = (hidden_size,)

            if correct_shape is not None:
                k = k.replace("linear.", "")

            if correct_shape is not None and v.shape != correct_shape:
                z = torch.zeros(correct_shape, device=v.device)
                if len(correct_shape) == 1:
                    z[:v.shape[0]] = v
                else:
                    z[:v.shape[0], :v.shape[1]] = v
                v = z

            new_m[k] = v

        shutil.copytree(src_path, dest_path, dirs_exist_ok=True)

        torch.save(new_m, dest_path / "pytorch_model.bin")

        # Final check : try to load the network
        model = AutoModelForQuestionAnswering.from_pretrained(dest_path, from_tf=False)

        return model


    @classmethod
    def compile_model(cls, src_path, dest_path=None):
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

        if hasattr(sparse_args, "final_finetune") and sparse_args.final_finetune:
            if dest_path is None:
                with tempfile.TemporaryDirectory() as dest_path:
                    return cls.final_fine_tune_bertarize(src_path, dest_path)
            else:
                return cls.final_fine_tune_bertarize(src_path, dest_path)

        model_args.model_name_or_path = str(src_path)

        model = cls._model_init(model_args, model_config)
        patcher = cls.create_patching_coordinator(sparse_args=sparse_args, device="cuda", cache_dir=None)

        patcher.patch_model(model, trial=None)

        state_dict = torch.load(src_path / model_bin_name)
        model.load_state_dict(state_dict, strict=True)

        patcher.compile_model(model)

        if dest_path is not None:
            shutil.copytree(src_path, dest_path, dirs_exist_ok=True)
            state_dict = model.state_dict()
            torch.save(state_dict, dest_path / model_bin_name)

        return model


    @classmethod
    def final_finetune(cls, src_path, dest_path, large: bool):
        if large:
            teacher = "bert-large-uncased-whole-word-masking-finetuned-squad"
        else:
            teacher = "csarron/bert-base-uncased-squad-v1"
        param_dict = {
            "model_name_or_path": src_path,
            "dataset_name": "squad",
            "do_train": 1,
            "do_eval": 1,
            "per_device_train_batch_size": 16,
            "per_device_eval_batch_size": 128,
            "max_seq_length": 384,
            "doc_stride": 128,
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

        qa = cls(param_dict)
        qa.run()

        cls.fix_last_checkpoint_bug(dest_path)




