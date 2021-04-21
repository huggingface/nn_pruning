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
import copy
import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as nn_functional
from transformers import AutoConfig, AutoModelForQuestionAnswering
from dataclasses import dataclass, field
from collections import defaultdict

from nn_pruning.model_structure import struct_from_name

from .modules.masked_nn import (
    ChannelPruningModulePatcher,
    JointPruningModulePatcher,
    LinearPruningModulePatcher,
    LinearPruningArgs,
    MaskedLinear,
    MaskedLinearModelCompiler,
    GenericLinearPruningContextModule,
    head_mask,
)
from .modules.nonorm import Layer2NoNorm, NoNorm, NoNormCompiler, Layer2NoNormPatcher
from .modules.gelu2relu import GeLU2ReLUModelPatcher
from .modules.quantized_layers import create_qconfig, QATPatcher
from .inference_model_patcher import BertHeadsPruner

from nn_pruning.training_patcher import (
    LinearModelPatcher,
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

    rewind_model_name_or_path: str = field(
        default=None,
        metadata={
           "help": "Model that will be used as a guide to prevent pruning of some attention heads while redoing fine-pruning."
        },
    )

    eval_with_current_patch_params: bool = field(
        default=False,
        metadata={
            "help": "Whether to keep the transition parameters used during training for eval. Only for Layer2NoNorm, GeLU2ReLU and pruning threshold."
        },
    )

    qat: bool = field(
        default=False,
        metadata={"help": "Whether to prepare the model for Quantization Aware Training"},
    )

    qconfig: str = field(
        default="default",
        metadata={"help": "The quantization scheme configuration to use for QAT"},
    )

    @classmethod
    def hybrid(cls, regularization_lambda):
        sparse_args = cls()
        sparse_args.dense_pruning_method = "sigmoied_threshold:1d_alt"
        sparse_args.attention_pruning_method = "sigmoied_threshold"
        sparse_args.attention_block_rows = 32
        sparse_args.attention_block_cols = 32
        sparse_args.attention_output_with_dense = False
        sparse_args.initial_threshold = 0.0
        sparse_args.final_threshold = 0.1

        sparse_args.regularization = "l1"
        sparse_args.regularization_final_lambda = regularization_lambda
        return sparse_args


class ModelPatchingCoordinator:

    def __init__(self, sparse_args, device, cache_dir, model_name_or_path, logit_names, teacher_constructor):
        # logit_names is ["start_logits", "end_logits"] for qa, ["logits"] for glue etc
        # teacher model is AutoModelForQuestionAnswering for qa, AutoModelForSequenceClassification for glue etc
        self.sparse_args = sparse_args
        self.patcher_context = PatcherContext()
        self.teacher_constructor = teacher_constructor
        self.teacher = self.create_teacher(device, cache_dir)
        self.layer_head_mask = self.create_head_rewind_info(device, cache_dir)
        self.logit_names = logit_names
        self.model_structure = struct_from_name(model_name_or_path)

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
            teacher.to(device)
        else:
            teacher = None

        return teacher


    def create_head_rewind_info(self, device, cache_dir):
        if not hasattr(self.sparse_args, "rewind_model_name_or_path"):
            return None

        rewind_model_name_or_path = self.sparse_args.rewind_model_name_or_path
        if rewind_model_name_or_path is None:
            return None
        else:
            rewind_config = AutoConfig.from_pretrained(rewind_model_name_or_path, cache_dir=cache_dir)

            return head_mask(rewind_config, device)

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

        if not training:
            step -= 1

        use_scheduler = training or sparse_args.eval_with_current_patch_params

        if use_scheduler:
            if step <= initial_warmup * warmup_steps:
                mul_coeff = 1.0
                threshold = initial_threshold
                ampere_temperature = initial_ampere_temperature
            elif step > (total_step - final_warmup * warmup_steps):
                mul_coeff = 0.0
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
            mul_coeff = 0.0
            threshold = final_threshold
            ampere_temperature = final_ampere_temperature

        regu_lambda = final_lambda * threshold / final_threshold

        context_data = dict(
            threshold=threshold,
            regu_lambda=regu_lambda,
            ampere_temperature = ampere_temperature,
            progress = 1.0 - mul_coeff
        )

        def interp(a,b, interpf):
            return a * interpf + (1.0 - interpf) * b

        if hasattr(sparse_args, "layer_norm_patch") and sparse_args.layer_norm_patch:
            if use_scheduler:
                interpf = 0.0
                layer_norm_patch_steps = sparse_args.layer_norm_patch_steps
                if step < layer_norm_patch_steps:
                    interpf = 1.0 - (step / layer_norm_patch_steps)

                delta = interp(sparse_args.layer_norm_patch_start_delta, 1.0, interpf)
                mix = interpf

                context_data["layernorm_to_nonorm_delta"] = delta
                context_data["layernorm_to_nonorm_mix"] = mix
            else:
                context_data["layernorm_to_nonorm_delta"] = 1.0
                context_data["layernorm_to_nonorm_mix"] = 0.0

        if hasattr(sparse_args, "gelu_patch") and sparse_args.gelu_patch:
            if use_scheduler:
                interpf = 0.0
                gelu_patch_steps = sparse_args.gelu_patch_steps
                if step < gelu_patch_steps:
                    interpf = 1.0 - (step / gelu_patch_steps)

                context_data["gelu_to_relu_mix"] = interpf
            else:
                context_data["gelu_to_relu_mix"] = 0.0

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
            elif hasattr(module, "regularization"):
                module_regu = module.regularization()
                if hasattr(module, "get_sparsity_info"):
                    module_nnz_info = module.get_sparsity_info()
            else:
                continue

            exclude_att_dense = not hasattr(self.sparse_args, "attention_output_with_dense") or self.sparse_args.attention_output_with_dense
            key = "attention" if self.model_structure.is_attention(name, exclude_att_dense=exclude_att_dense) else "dense"

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

        teacher_inputs = model_inputs.copy()
        if 'labels' in teacher_inputs:
            del teacher_inputs['labels']

        with torch.no_grad():
            teacher_outputs = teacher(**teacher_inputs)

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
        no_decay = ["bias", "LayerNorm.weight", "NoNorm.weight", "layer_norm.weight", "layernorm_embedding.weight"]

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

        device = model.device

        qconfig = None
        if sparse_args.qat:
            qconfig = create_qconfig(sparse_args.qconfig)
            qat_patcher = QATPatcher(
                qconfig,
                layers_not_to_patch=[Layer2NoNorm, NoNorm],
            )
            qat_patcher.patch(model)

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
                min_elements=linear_min_parameters,
            )

            args_attention_t = LinearPruningArgs(
                method=attention_pruning_method_parts[0],
                submethod=attention_pruning_method_parts[1],
                ampere_method=sparse_args.ampere_pruning_method,
                block_rows=sparse_args.attention_block_cols,
                block_cols=sparse_args.attention_block_rows,
                bias_mask=bias_mask,
                min_elements=linear_min_parameters,
            )

            if args_attention.submethod == "joint":
                p_attention = JointPruningModulePatcher(patcher_context, args_attention, model_structure=self.model_structure, suffix=".attention")
                p_attention_t = JointPruningModulePatcher(patcher_context, args_attention_t, model_structure=self.model_structure, suffix=".attention")
            else:
                p_attention = LinearPruningModulePatcher(patcher_context,
                                                         args_attention,
                                                         model_structure=self.model_structure,
                                                         row_additive_mask = self.layer_head_mask)
                p_attention_t = LinearPruningModulePatcher(patcher_context,
                                                           args_attention_t,
                                                           model_structure = self.model_structure,
                                                           col_additive_mask = self.layer_head_mask)
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
                min_elements=linear_min_parameters,
            )
            if args_dense.submethod.startswith("1d"):
                p_dense = ChannelPruningModulePatcher(
                    patcher_context, args_dense, model_structure=self.model_structure, suffix="dense"
                )
            else:
                p_dense = LinearPruningModulePatcher(patcher_context, args_dense, model_structure=self.model_structure)
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
            encoder_decoder_query=p_attention,
            encoder_decoder_key=p_attention,
            encoder_decoder_value=p_attention,
            encoder_decoder_att_dense=p_att_dense,
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

        patcher = LinearModelPatcher(module_patchers, model_structure=self.model_structure)

        patcher.patch(model)
        model = model.to(device)  # TODO: change this by making sure the mask_scores are located at the right place.

        self.stats = {}
        self.stats["main"] = patcher.stats

        if layer_norm_patch:
            def schedule_callback():
                mix = self.patcher_context.get_context_data("layernorm_to_nonorm_mix")
                delta = self.patcher_context.get_context_data("layernorm_to_nonorm_delta")
                return dict(mix=mix, delta=delta)

            layer_norm_patcher = Layer2NoNormPatcher(schedule_callback=schedule_callback)
            layer_norm_patcher.patch(model)
            self.stats["layer_norm"] = layer_norm_patcher.stats

        if gelu_patch:
            def schedule_callback():
                mix = self.patcher_context.get_context_data("gelu_to_relu_mix")
                return dict(mix=mix)

            gelu_patcher = GeLU2ReLUModelPatcher(schedule_callback=schedule_callback)
            gelu_patcher.patch(model)
            self.stats["gelu"] = gelu_patcher.stats

        if sparse_args.qat:
            qat_patcher = QATPatcher(
                qconfig,
                layers_to_patch=[MaskedLinear, Layer2NoNorm, NoNorm],
            )
            qat_patcher.patch(model)
            model.train()
            model.qconfig = qconfig
            model = torch.quantization.prepare_qat(model)

        return patcher


    def compile_model(self, model):
        self.schedule_threshold()
        compiler = MaskedLinearModelCompiler()
        compiler.patch(model)

        if hasattr(self.sparse_args, "layer_norm_patch") and self.sparse_args.layer_norm_patch:
            nnc = NoNormCompiler()
            nnc.patch(model)
            model.config.layer_norm_type = "no_norm"

        if hasattr(self.sparse_args, "gelu_patch") and self.sparse_args.gelu_patch:
            model.config.hidden_act = "relu"

        pruner = BertHeadsPruner(model)
        removed_heads, total_heads = pruner.run()
        return removed_heads, total_heads
