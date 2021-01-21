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

import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as nn_functional
from transformers import AutoConfig, AutoModelForQuestionAnswering
from dataclasses import dataclass, field
from collections import defaultdict

from nn_pruning.model_structure import BertStructure
from .masked_nn import (
    ChannelPruningModulePatcher,
    JointPruningModulePatcher,
    LinearPruningModulePatcher,
    LinearPruningArgs,
    MaskedLinearModelCompiler
)
from nn_pruning.training_patcher import (
    BertLinearModelPatcher,
    PatcherContext,
    PatcherContextModule,
)

@dataclass
class SparseTrainingArguments:
    """
    Sparse training specific arguments
    """

    mask_scores_learning_rate: float = field(
        default=1e-2, metadata={"help": "The initial learning rate for mask_scores."}
    )

    dense_pruning_method: str = field(default="topK", metadata={"help": "Dense Layers pruning method."})

    attention_pruning_method: str = field(default="topK", metadata={"help": "Dense Layers pruning method."})

    ampere_pruning_method: str = field(
        default="disabled",
        metadata={"help": "Ampere sparse method ('disabled' for no ampere sparsity)"},
    )

    attention_output_with_dense: bool = field(
        default=True,
        metadata={"help": "share the same pruning parameters for attention output and other dense matrices"},
    )

    bias_mask: bool = field(
        default=True,
        metadata={"help": "Apply the mask built on weight to the bias too (not doing so will impact somewhat ability to prune complete heads, as bias is then pruned while being nonzero)"},
    )

    mask_init: str = field(default="constant", metadata={"help": "Mask scores initialization method"})

    mask_scale: float = field(
        default=0.0,
        metadata={"help": "Parameter to use with mask_init."},
    )

    dense_block_rows: int = field(
        default=1,
        metadata={"help": "Block size in rows for dense layers."},
    )

    dense_block_cols: int = field(
        default=1,
        metadata={"help": "Block size in cols for dense layers."},
    )

    attention_block_rows: int = field(
        default=1,
        metadata={"help": "Block size in rows for attention."},
    )

    attention_block_cols: int = field(
        default=1,
        metadata={"help": "Block size in cols for attention."},
    )

    initial_threshold: float = field(
        default=1.0,
        metadata={"help": "Initial value of the threshold (for scheduling)."},
    )
    final_threshold: float = field(
        default=0.5,
        metadata={"help": "Final value of the threshold (for scheduling)."},
    )

    initial_warmup: float = field(
        default=1,
        metadata={
            "help": "Run `initial_warmup` * `warmup_steps` steps of threshold warmup during which threshold stays at its `initial_threshold` value (sparsity schedule)."
        },
    )
    final_warmup: float = field(
        default=2,
        metadata={
            "help": "Run `final_warmup` * `warmup_steps` steps of threshold cool-down during which threshold stays"
        },
    )

    initial_ampere_temperature: float = field(
        default=0.0,
        metadata={"help": "Initial value of the ampere temperature (for scheduling)."},
    )
    final_ampere_temperature: float = field(
        default=20.0,
        metadata={"help": "Final value of the ampere temperature (for scheduling)."},
    )

    regularization: str = field(
        default="disabled",
        metadata={"help": "Add L0 or L1 regularization to the mask scores."},
    )

    regularization_final_lambda: float = field(
        default=0.0,
        metadata={"help": "Regularization intensity (used in conjunction with `regularization`)."},
    )

    attention_lambda: float = field(
        default=1.0,
        metadata={"help": "Regularization intensity for attention (attention lambda will be regularization_lambda * attention_lambda)."},
    )

    dense_lambda: float = field(
        default=1.0,
        metadata={
            "help": "Regularization intensity for dense (attention lambda will be regularization_lambda * dense_lambda)."},
    )

    distil_teacher_name_or_path: str = field(
        default=None,
        metadata={"help": "Path to the already SQuAD fine-tuned teacher model. Only for distillation."},
    )

    distil_alpha_ce: float = field(
        default=0.5,
        metadata={"help": "Cross entropy loss linear weight. Only for distillation."},
    )

    distil_alpha_teacher: float = field(
        default=0.5,
        metadata={"help": "Distillation loss linear weight. Only for distillation."},
    )

    distil_temperature: float = field(
        default=2.0,
        metadata={"help": "Distillation temperature. Only for distillation."},
    )

    final_finetune: bool = field(
        default=False,
        metadata={
            "help": "Run a final fine tune pass on the network"
        },
    )

class ModelPatchingCoordinator:
    MODEL_STRUCTURE = BertStructure

    def __init__(self, sparse_args, device, cache_dir):
        self.sparse_args = sparse_args
        self.patcher_context = PatcherContext()
        self.teacher = self.create_teacher(device, cache_dir)

    def parse_pruning_method(self, method):
        parts = method.split(":")
        if len(parts) == 2:
            return parts
        elif len(parts) == 1:
            return parts[0], "default"
        else:
            raise RuntimeError("Could not parse pruning method")

    def patch_model(self, model, trial):
        raise NotImplementedError("Implement in subclass")

    def log(self):
        logs = {}
        for k, v in self.patcher_context.enumerate_context_data():
            logs[k] = v

        return logs

    def create_teacher(self, device, cache_dir):
        sparse_args = self.sparse_args

        if sparse_args.distil_teacher_name_or_path is not None:
            assert sparse_args.distil_alpha_ce > 0.0
            assert sparse_args.distil_alpha_ce + sparse_args.distil_alpha_teacher > 0.0

            model_config = AutoConfig.from_pretrained(sparse_args.distil_teacher_name_or_path, cache_dir=cache_dir)

            teacher = AutoModelForQuestionAnswering.from_pretrained(
                sparse_args.distil_teacher_name_or_path,
                from_tf=bool(".ckpt" in sparse_args.distil_teacher_name_or_path),
                config=model_config,
                cache_dir=cache_dir,
            )

            teacher.to(device)
        else:
            teacher = None

        return teacher

    def schedule_threshold(
        self,
        step: int = -1,
        total_step: int = -1,
        warmup_steps: int = -1,
        training: bool = False,
    ):
        sparse_args = self.sparse_args

        initial_threshold = sparse_args.initial_threshold
        final_threshold = sparse_args.final_threshold
        initial_warmup = sparse_args.initial_warmup
        final_warmup = sparse_args.final_warmup
        final_lambda = sparse_args.regularization_final_lambda
        initial_ampere_temperature = sparse_args.initial_ampere_temperature
        final_ampere_temperature = sparse_args.final_ampere_temperature

        if training:
            if step <= initial_warmup * warmup_steps:
                threshold = initial_threshold
                ampere_temperature = initial_ampere_temperature
            elif step > (total_step - final_warmup * warmup_steps):
                threshold = final_threshold
                ampere_temperature = final_ampere_temperature
            else:
                spars_warmup_steps = initial_warmup * warmup_steps
                spars_schedu_steps = (final_warmup + initial_warmup) * warmup_steps
                mul_coeff = 1 - (step - spars_warmup_steps) / (total_step - spars_schedu_steps)
                threshold = final_threshold + (initial_threshold - final_threshold) * (mul_coeff ** 3)
                ampere_temperature = final_ampere_temperature + (
                    initial_ampere_temperature - final_ampere_temperature
                ) * (mul_coeff ** 3)
        else:
            threshold = final_threshold
            ampere_temperature = final_ampere_temperature

        regu_lambda = final_lambda * threshold / final_threshold

        context_data = dict(
            threshold=threshold,
            ampere_temperature=ampere_temperature,
            regu_lambda=regu_lambda,
        )

        self.patcher_context.set_context_data_dict(context_data)

    def regularization_loss(self, model: nn.Module):
        # Return regularization, lambda, and information on the network sparsity
        mode = self.sparse_args.regularization

        info = {}

        regul_modes = ["l1", "l0"]
        if mode in regul_modes:
            threshold = self.patcher_context.get_context_data("threshold")

        for name, module in model.named_modules():
            if mode not in regul_modes:
                if isinstance(module, nn.Linear):
                    weight = module.weight
                    module_regu = 0
                    module_nnz = (weight != 0).sum()
                    numel = weight.numel()
                else:
                    continue
            elif isinstance(module, PatcherContextModule):
                param = module.mask_scores
                numel = param.numel()

                if mode == "l1":
                    module_regu = torch.norm(torch.sigmoid(param), p=1) / numel
                    module_nnz = (torch.sigmoid(param) > threshold).sum().item()
                elif mode == "l0":
                    assert(False)
                    module_regu = torch.sigmoid(param - 2 / 3 * np.log(0.1 / 1.1)).sum() / numel
                    module_nnz = (torch.sigmoid(param - 2 / 3 * np.log(0.1 / 1.1)) > threshold).sum().item()
                else:
                    assert(False)

            # TEMPORARY : use model info to perform this dispatch
            if not hasattr(self.sparse_args, "attention_output_with_dense") or self.sparse_args.attention_output_with_dense:
                layer_names = ["key", "query", "value"]
                key = "dense"
                for ln in layer_names:
                    if ln in name:
                        key = "attention"
            else:
                key = "attention" if "attention" in name else "dense"

            if key not in info:
                info[key] = defaultdict(float)

            key_info = info[key]

            key_info["regu"] += module_regu
            key_info["nnz"] += float(module_nnz)
            key_info["numel"] += numel
            key_info["nummod"] += 1

        if mode not in regul_modes:
            lamb = 0
            lambdas = dict(attention=0,
                           dense=0)
        else:
            lamb = self.patcher_context.get_context_data("regu_lambda")

            lambdas = dict(attention=self.sparse_args.attention_lambda * 0.5,
                           dense=self.sparse_args.dense_lambda * 0.5)

        info["total"] = defaultdict(float)

        for key, value in info.items():
            if key == "total":
                continue
            for k, v in value.items():
                if k in ["numel", "nnz"]:
                    info["total"][k] += v

        for key, value in info.items():
            value["nnz_perc"] = value["nnz"] / value["numel"]
            del value["nnz"]
            del value["numel"]
            if key == "total":
                continue
            value["regu_loss"] = value["regu"] * lambdas[key] / value["nummod"]
            info["total"]["regu_loss"] += value["regu_loss"]
            del value["regu"]
            del value["nummod"]

        return info["total"]["regu_loss"], lamb, info

    def distil_loss_combine(self, ce_loss, model_inputs, model_outputs):
        sparse_args = self.sparse_args
        teacher = self.teacher

        if teacher == None:
            return ce_loss

        temperature = sparse_args.distil_temperature

        start_logits_stu, end_logits_stu = model_outputs["start_logits"], model_outputs["end_logits"]

        with torch.no_grad():
            teacher_out = teacher(
                input_ids=model_inputs["input_ids"],
                token_type_ids=model_inputs["token_type_ids"],
                attention_mask=model_inputs["attention_mask"],
            )
            start_logits_tea, end_logits_tea = teacher_out["start_logits"], teacher_out["end_logits"]

        loss_start = (
            nn_functional.kl_div(
                input=nn_functional.log_softmax(start_logits_stu / temperature, dim=-1),
                target=nn_functional.softmax(start_logits_tea / temperature, dim=-1),
                reduction="batchmean",
            )
            * (temperature ** 2)
        )
        loss_end = (
            nn_functional.kl_div(
                input=nn_functional.log_softmax(end_logits_stu / temperature, dim=-1),
                target=nn_functional.softmax(end_logits_tea / temperature, dim=-1),
                reduction="batchmean",
            )
            * (temperature ** 2)
        )
        loss_logits = (loss_start + loss_end) / 2.0

        loss = sparse_args.distil_alpha_teacher * loss_logits + sparse_args.distil_alpha_ce * ce_loss

        return loss, loss_logits


    def create_optimizer_groups(self, model, args, sparse_args):
        # Prepare optimizer and schedule (linear warmup and decay)
        no_decay = ["bias", "LayerNorm.weight"]

        mask_params = []
        no_decay_params = []
        decay_params = []

        for n, p in model.named_parameters():
            if not p.requires_grad:
                continue
            if "mask_score" in n:
                mask_params.append(p)
            elif any(nd in n for nd in no_decay):
                no_decay_params.append(p)
            else:
                decay_params.append(p)

        optimizer_grouped_parameters = [
            {
                "params": mask_params,
                "lr": sparse_args.mask_scores_learning_rate,
            },
            {
                "params": no_decay_params,
                "lr": args.learning_rate,
                "weight_decay": 0.0,
            },
            {
                "params": decay_params,
                "lr": args.learning_rate,
                "weight_decay": args.weight_decay,
            },
        ]

        return optimizer_grouped_parameters

    def compile_model(self, model):
        self.schedule_threshold()
        compiler = MaskedLinearModelCompiler()
        compiler.patch(model)

    def patch_model(self, model, trial):
        assert trial is None or len(trial.params) == 0
        attention_pruning_method_parts = self.parse_pruning_method(self.sparse_args.attention_pruning_method)

        if hasattr(self.sparse_args, "bias_mask"):
            bias_mask = self.sparse_args.bias_mask
        else:
            bias_mask = False

        args_attention = LinearPruningArgs(
            method=attention_pruning_method_parts[0],
            submethod=attention_pruning_method_parts[1],
            ampere_method=self.sparse_args.ampere_pruning_method,
            block_rows=self.sparse_args.attention_block_rows,
            block_cols=self.sparse_args.attention_block_cols,
            bias_mask=bias_mask
        )

        args_attention_t = LinearPruningArgs(
            method=attention_pruning_method_parts[0],
            submethod=attention_pruning_method_parts[1],
            ampere_method=self.sparse_args.ampere_pruning_method,
            block_rows=self.sparse_args.attention_block_cols,
            block_cols=self.sparse_args.attention_block_rows,
            bias_mask=bias_mask
        )

        dense_pruning_method_parts = self.parse_pruning_method(self.sparse_args.dense_pruning_method)

        args_dense = LinearPruningArgs(
            method=dense_pruning_method_parts[0],
            submethod=dense_pruning_method_parts[1],
            ampere_method=self.sparse_args.ampere_pruning_method,
            block_rows=self.sparse_args.dense_block_rows,
            block_cols=self.sparse_args.dense_block_cols,
            bias_mask=bias_mask
        )

        patcher_context = self.patcher_context

        if args_attention.submethod == "joint":
            p_attention = JointPruningModulePatcher(patcher_context, args_attention, suffix=".attention")
            p_attention_t = JointPruningModulePatcher(patcher_context, args_attention_t, suffix=".attention")
        else:
            p_attention = LinearPruningModulePatcher(patcher_context, args_attention)
            p_attention_t = LinearPruningModulePatcher(patcher_context, args_attention_t)

        if args_dense.submethod.startswith("1d"):
            p_dense = ChannelPruningModulePatcher(
                patcher_context, args_dense, self.MODEL_STRUCTURE, suffix="dense"
            )
        else:
            p_dense = LinearPruningModulePatcher(patcher_context, args_dense)

        if not hasattr(self.sparse_args, "attention_output_with_dense") or self.sparse_args.attention_output_with_dense:
            p_att_dense = p_dense
        else:
            p_att_dense = p_attention_t

        module_patchers = dict(
            query=p_attention,
            key=p_attention,
            value=p_attention,
            att_dense=p_att_dense,
            interm_dense=p_dense,
            output_dense=p_dense,
        )

        patcher = BertLinearModelPatcher(module_patchers)
        patcher.patch(model)
        assert (patcher.stats["patched"] == 72)

        return patcher


