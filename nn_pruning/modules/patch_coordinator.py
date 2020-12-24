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

from nn_pruning.model_structure import BertStructure
from .masked_nn import (
    ChannelPruningModulePatcher,
    JointPruningModulePatcher,
    LinearPruningModulePatcher,
    LinearPruningParameters,
    MaskedLinear,
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

    dense_pruning_method: str = field(default="topk", metadata={"help": "Dense Layers pruning method."})

    attention_pruning_method: str = field(default="topk", metadata={"help": "Dense Layers pruning method."})

    ampere_pruning_method: str = field(
        default="disabled",
        metadata={"help": "Ampere sparse method ('disabled' for no ampere sparsity)"},
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
        mode = self.sparse_args.regularization
        if mode not in ["l0", "l1"]:
            return 0

        regu, counter = 0, 0
        for name, module in model.named_modules():
            if isinstance(module, PatcherContextModule):
                param = module.mask_scores
                if mode == "l1":
                    regu_add = torch.norm(torch.sigmoid(param), p=1) / param.numel()
                elif mode == "l0":
                    regu_add = torch.sigmoid(param - 2 / 3 * np.log(0.1 / 1.1)).sum() / param.numel()
                else:
                    ValueError("Don't know this mode.")
                regu += regu_add
                counter += 1
        if counter == 0:
            return 0

        regu = regu * self.patcher_context.get_context_data("regu_lambda")

        return regu / counter

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

        return loss


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

        parameters_attention = LinearPruningParameters(
            method=attention_pruning_method_parts[0],
            submethod=attention_pruning_method_parts[1],
            ampere_method=self.sparse_args.ampere_pruning_method,
            block_rows=self.sparse_args.attention_block_rows,
            block_cols=self.sparse_args.attention_block_cols,
        )

        dense_pruning_method_parts = self.parse_pruning_method(self.sparse_args.dense_pruning_method)

        parameters_dense = LinearPruningParameters(
            method=dense_pruning_method_parts[0],
            submethod=dense_pruning_method_parts[1],
            ampere_method=self.sparse_args.ampere_pruning_method,
            block_rows=self.sparse_args.dense_block_rows,
            block_cols=self.sparse_args.dense_block_cols,
        )

        patcher_context = self.patcher_context

        p_attention = JointPruningModulePatcher(patcher_context, parameters_attention, suffix=".attention")

        if parameters_dense.submethod.startswith("1d"):
            p_dense = ChannelPruningModulePatcher(
                patcher_context, parameters_dense, self.MODEL_STRUCTURE, suffix="dense"
            )
        else:
            p_dense = LinearPruningModulePatcher(patcher_context, parameters_dense, suffix="dense")

        module_patchers = dict(
            query=p_attention,
            key=p_attention,
            value=p_attention,
            att_dense=p_dense,
            interm_dense=p_dense,
            output_dense=p_dense,
        )

        patcher = BertLinearModelPatcher(module_patchers)
        patcher.patch(model)
        assert (patcher.stats["patched"] == 72)

        return patcher


