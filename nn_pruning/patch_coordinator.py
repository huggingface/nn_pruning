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
from .modules.masked_nn import (
    ChannelPruningModulePatcher,
    JointPruningModulePatcher,
    LinearPruningModulePatcher,
    LinearPruningArgs,
    MaskedLinear,
    MaskedLinearModelCompiler,
    GenericLinearPruningContextModule
)
from .modules.nonorm import NoNormCompiler, Layer2NoNormPatcher
from .modules.gelu2relu import GeLU2ReLUModelPatcher

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
        metadata={"help": "Ampere sparse method ('disabled' for no ampere sparsity, topK, annealing, sigmoied_threshold, threshold)"},
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

    layer_norm_patch: bool = field(
        default=False,
        metadata={
            "help": "Transform the LayerNorms in a MobileBert NoNorm"
        },
    )
    layer_norm_patch_steps: int = field(
        default=50000,
        metadata={
            "help": "Number of steps for the transition from LayerNorm to NoNorm"
        },
    )

    layer_norm_patch_start_delta: int = field(
        default=0.99,
        metadata={
            "help": "Starting smoothing factor for transition from LayerNorm to NoNorm (final is 1.0)."
        },
    )

    gelu_patch: bool = field(
        default=False,
        metadata={
            "help": "Transform the GeLU in ReLU"
        },
    )

    gelu_patch_steps: int = field(
        default=50000,
        metadata={
            "help": "Number of steps for the transition from GeLU to ReLU"
        },
    )

    linear_min_parameters: int = field(
        default=0.005,
        metadata={
            "help": "Minimum fraction of parameters which should be non zero when using ThresholdBinarizer"
        },
    )

class ModelPatchingCoordinator:
    MODEL_STRUCTURE = BertStructure

    def __init__(self, sparse_args, device, cache_dir, logit_names, teacher_constructor):
        # logit_names is ["start_logits", "end_logits"] for qa, ["logits"] for glue etc
        # teacher model is AutoModelForQuestionAnswering for qa, AutoModelForSequenceClassification for glue etc
        self.sparse_args = sparse_args
        self.patcher_context = PatcherContext()
        self.teacher_constructor = teacher_constructor
        self.teacher = self.create_teacher(device, cache_dir)
        self.logit_names = logit_names

    def parse_pruning_method(self, method):
        parts = method.split(":")
        if len(parts) == 2:
            return parts
        elif len(parts) == 1:
            return parts[0], "default"
        else:
            raise RuntimeError("Could not parse pruning method")

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

            teacher = self.teacher_constructor.from_pretrained(
                sparse_args.distil_teacher_name_or_path,
                from_tf=bool(".ckpt" in sparse_args.distil_teacher_name_or_path),
                config=model_config,
                cache_dir=cache_dir,
            )
            print(teacher)
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
            regu_lambda=regu_lambda,
            ampere_temperature = ampere_temperature
        )

        def interp(a,b, interpf):
            return a * interpf + (1.0 - interpf) * b

        if sparse_args.layer_norm_patch:
            interpf = 0.0
            layer_norm_patch_steps = sparse_args.layer_norm_patch_steps
            if step < layer_norm_patch_steps:
                interpf = 1.0 - (step / layer_norm_patch_steps)

            delta = interp(sparse_args.layer_norm_patch_start_delta, 1.0, interpf)
            mix = interpf

            context_data["layernorm_to_nonorm_delta"] = delta
            context_data["layernorm_to_nonorm_mix"] = mix

        if sparse_args.gelu_patch:
            interpf = 0.0
            gelu_patch_steps = sparse_args.gelu_patch_steps
            if step < gelu_patch_steps:
                interpf = 1.0 - (step / gelu_patch_steps)

            context_data["gelu_to_relu_mix"] = interpf

        self.patcher_context.set_context_data_dict(context_data)

    def regularization_loss(self, model: nn.Module):
        # Return regularization, lambda, and information on the network sparsity
        mode = self.sparse_args.regularization

        info = {}

        regul_modes = ["l1", "l0"]
        if mode in regul_modes:
            threshold = self.patcher_context.get_context_data("threshold")

        for name, module in model.named_modules():
            module_regu = 0
            module_nnz_info = {"nnz":0, "numel":0}
            nummod = 1
            if mode not in regul_modes:
                if isinstance(module, nn.Linear):
                    weight = module.weight
                    module_nnz_info["nnz"] = (weight != 0).sum()
                    module_nnz_info["numel"] = weight.numel()
                else:
                    continue
            elif isinstance(module, GenericLinearPruningContextModule):
                module_regu = module.regularization(mode)
            elif isinstance(module, MaskedLinear):
                module_nnz_info = module.get_sparsity_info()
                nummod = 0
            else:
                continue
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
            key_info["nummod"] += nummod

            for k,v in module_nnz_info.items():
                key_info[k] += float(v)

        if mode not in regul_modes:
            lamb = 0
            lambdas = dict(attention=0, dense=0)
        else:
            lamb = self.patcher_context.get_context_data("regu_lambda")

            lambdas = dict(attention=self.sparse_args.attention_lambda * 0.5,
                           dense=self.sparse_args.dense_lambda * 0.5)

        info["total"] = defaultdict(float)

        for key, value in info.items():
            if key == "total":
                continue
            for k, v in value.items():
                if k == "numel" or "nnz" in k:
                    info["total"][k] += v

        for key, value in info.items():
            if value["numel"] != 0:
                # No patching (no pruning) -> no information on nnz -> dense linear layers
                value["nnz_perc"] = value["nnz"] / value["numel"]
            else:
                value["nnz_perc"] = 1.0
            for k in "nnz", "numel":
                if k in value:
                    del value[k]
            if key == "total":
                continue
            if value["nummod"] != 0:
                value["regu_loss"] = value["regu"] * lambdas[key] / value["nummod"]
                info["total"]["regu_loss"] += value["regu_loss"]
            for k in "regu", "nummod":
                if k in value:
                    del value[k]

        return info["total"]["regu_loss"], lamb, info

    def distil_loss_combine(self, ce_loss, model_inputs, model_outputs):
        sparse_args = self.sparse_args
        teacher = self.teacher

        if teacher == None:
            return ce_loss, 0.0

        temperature = sparse_args.distil_temperature

        with torch.no_grad():
            teacher_outputs = teacher(
                input_ids=model_inputs["input_ids"],
                token_type_ids=model_inputs["token_type_ids"],
                attention_mask=model_inputs["attention_mask"],
            )

        loss_logits = 0
        for logit_name in self.logit_names:
            logits_stu = model_outputs[logit_name]
            logits_tea = teacher_outputs[logit_name]

            loss_logits_part = nn_functional.kl_div(
                input=nn_functional.log_softmax(logits_stu / temperature, dim=-1),
                target=nn_functional.softmax(logits_tea / temperature, dim=-1),
                reduction="batchmean",
            ) * (temperature ** 2)

            loss_logits += loss_logits_part

        loss_logits /= len(self.logit_names)

        loss = sparse_args.distil_alpha_teacher * loss_logits + sparse_args.distil_alpha_ce * ce_loss

        return loss, loss_logits


    def create_optimizer_groups(self, model, args, sparse_args):
        # Prepare optimizer and schedule (linear warmup and decay)
        no_decay = ["bias", "LayerNorm.weight", "NoNorm.weight", "LayerNorm.bias", "NoNorm.bias"]

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


    def patch_model(self, model, trial = None):
        layers_count = model.config.num_hidden_layers
        sparse_args = self.sparse_args
        attention_pruning_method_parts = self.parse_pruning_method(sparse_args.attention_pruning_method)

        if hasattr(sparse_args, "bias_mask"):
            bias_mask = sparse_args.bias_mask
        else:
            bias_mask = False

        if hasattr(sparse_args, "linear_min_parameters"):
            linear_min_parameters = sparse_args.linear_min_parameters
        else:
            linear_min_parameters = 0.005

        patcher_context = self.patcher_context

        if attention_pruning_method_parts[0] != "disabled" or sparse_args.ampere_pruning_method != "disabled":
            args_attention = LinearPruningArgs(
                method=attention_pruning_method_parts[0],
                submethod=attention_pruning_method_parts[1],
                ampere_method=sparse_args.ampere_pruning_method,
                block_rows=sparse_args.attention_block_rows,
                block_cols=sparse_args.attention_block_cols,
                bias_mask=bias_mask,
                min_parameters=linear_min_parameters,
            )

            args_attention_t = LinearPruningArgs(
                method=attention_pruning_method_parts[0],
                submethod=attention_pruning_method_parts[1],
                ampere_method=sparse_args.ampere_pruning_method,
                block_rows=sparse_args.attention_block_cols,
                block_cols=sparse_args.attention_block_rows,
                bias_mask=bias_mask,
                min_parameters=linear_min_parameters,
            )
            if args_attention.submethod == "joint":
                p_attention = JointPruningModulePatcher(patcher_context, args_attention, suffix=".attention")
                p_attention_t = JointPruningModulePatcher(patcher_context, args_attention_t, suffix=".attention")
            else:
                p_attention = LinearPruningModulePatcher(patcher_context, args_attention)
                p_attention_t = LinearPruningModulePatcher(patcher_context, args_attention_t)
        else:
            p_attention = None
            p_attention_t = None

        dense_pruning_method_parts = self.parse_pruning_method(sparse_args.dense_pruning_method)

        if dense_pruning_method_parts[0] != "disabled" or sparse_args.ampere_pruning_method != "disabled":
            args_dense = LinearPruningArgs(
                method=dense_pruning_method_parts[0],
                submethod=dense_pruning_method_parts[1],
                ampere_method=sparse_args.ampere_pruning_method,
                block_rows=sparse_args.dense_block_rows,
                block_cols=sparse_args.dense_block_cols,
                bias_mask=bias_mask,
                min_parameters=linear_min_parameters,
            )
            if args_dense.submethod.startswith("1d"):
                p_dense = ChannelPruningModulePatcher(
                    patcher_context, args_dense, self.MODEL_STRUCTURE, suffix="dense"
                )
            else:
                p_dense = LinearPruningModulePatcher(patcher_context, args_dense)
        else:
            p_dense = None

        if not hasattr(sparse_args, "attention_output_with_dense") or sparse_args.attention_output_with_dense:
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

        if hasattr(sparse_args, "layer_norm_patch"):
            layer_norm_patch = sparse_args.layer_norm_patch
        else:
            layer_norm_patch = False

        if hasattr(sparse_args, "gelu_patch"):
            gelu_patch = sparse_args.gelu_patch
        else:
            gelu_patch = False

        patcher = BertLinearModelPatcher(module_patchers)

        patcher.patch(model)

        patched_count = 0
        if attention_pruning_method_parts[0] != "disabled" or sparse_args.ampere_pruning_method != "disabled":
            patched_count += 4 * layers_count

        if dense_pruning_method_parts[0] != "disabled" or sparse_args.ampere_pruning_method != "disabled":
            patched_count += 2 * layers_count

        assert (patcher.stats["patched"] == patched_count)

        if layer_norm_patch:
            def schedule_callback():
                mix = self.patcher_context.get_context_data("layernorm_to_nonorm_mix")
                delta = self.patcher_context.get_context_data("layernorm_to_nonorm_delta")
                return dict(mix=mix, delta=delta)

            layer_norm_patcher = Layer2NoNormPatcher(schedule_callback=schedule_callback)
            layer_norm_patcher.patch(model)
            layer_norm_patched_count = 2 * layers_count + 1
            assert (layer_norm_patcher.stats["patched"] == layer_norm_patched_count)

        if gelu_patch:
            def schedule_callback():
                mix = self.patcher_context.get_context_data("gelu_to_relu_mix")
                return dict(mix=mix)

            gelu_patcher = GeLU2ReLUModelPatcher(schedule_callback=schedule_callback)
            gelu_patcher.patch(model)
            gelu_patcher_count = layers_count
            assert (gelu_patcher.stats["patched"] == gelu_patcher_count)

        return patcher


    def compile_model(self, model):
        self.schedule_threshold()
        compiler = MaskedLinearModelCompiler()
        compiler.patch(model)

        if self.sparse_args.layer_norm_patch:
            nnc = NoNormCompiler()
            nnc.patch(model)
            model.config.layer_norm_type = "no_norm"



