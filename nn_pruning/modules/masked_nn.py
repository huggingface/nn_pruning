# coding=utf-8
# Copyright 2020-present, the HuggingFace Inc. team.
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
Masked Linear module: A fully connected layer that computes an adaptive binary mask on the fly.
The mask (binary or not) is computed at each forward pass and multiplied against
the weight matrix to prune a portion of the weights.
The pruned weight matrix is then multiplied against the inputs (and if necessary, the bias is added).
"""

import math
from dataclasses import dataclass
from itertools import permutations
from typing import List

import torch
from torch import nn
from torch.nn import functional as F
from torch.nn import init

from nn_pruning.model_structure import ModelStructure
from nn_pruning.training_patcher import (
    ModulePatcher,
    PatcherContext,
    PatcherContextModule,
    ReplacementModule,
)

from .binarizer import MagnitudeBinarizer, ThresholdBinarizer, TopKBinarizer

sparse_patterns = None

AMPERE_M = 4
AMPERE_N = 2

import torch.distributions


@dataclass
class RuntimeLinearPruningParameters:
    method: str
    submethod: str
    ampere_method: str
    block_rows: int
    block_cols: int


@dataclass
class InitDirective:
    kind: str = "constant"
    scale: float = 0.0


@dataclass
class LinearPruningParameters(RuntimeLinearPruningParameters):
    mask_init: InitDirective = InitDirective()
    ampere_init: InitDirective = InitDirective()


class GenericLinearPruningContextModule(PatcherContextModule):
    def __init__(self, shape, parameters: LinearPruningParameters):
        super().__init__()
        self.shape = shape
        self.parameters = parameters

    def init_masks(self, init_directive: InitDirective):
        mask_init = init_directive.kind
        mask_scale = init_directive.scale
        mask_scores = self.mask_scores
        if mask_init == "constant":
            init.constant_(mask_scores, val=mask_scale)
        elif mask_init == "uniform":
            init.uniform_(mask_scores, a=-mask_scale, b=mask_scale)
        elif mask_init == "kaiming":
            init.kaiming_uniform_(mask_scores, a=math.sqrt(5))


class LinearPruningContextModule(GenericLinearPruningContextModule):
    def __init__(self, shape, parameters: LinearPruningParameters):
        super().__init__(shape, parameters)
        _p = self.parameters

        assert shape[0] % _p.block_rows == 0
        assert shape[1] % _p.block_cols == 0
        self.mask_size = (
            shape[0] // _p.block_rows,
            shape[1] // _p.block_cols,
        )


class BlockLinearPruningContextModule(LinearPruningContextModule):
    def __init__(self, shape, parameters: LinearPruningParameters):
        super().__init__(shape, parameters)
        assert parameters.submethod == "default"
        self.mask_scores = nn.Parameter(torch.Tensor(size=self.mask_size))
        self.init_masks(self.parameters.mask_init)


class SingleDimensionLinearPruningContextModule(LinearPruningContextModule):
    def __init__(self, shape, is_row, parameters: LinearPruningParameters):
        super().__init__(shape, parameters)
        assert parameters.submethod.startswith("1d")

        size = (self.mask_size[0],) if is_row else (self.mask_size[1],)

        self.mask_scores = nn.Parameter(torch.zeros(size=size))
        self.init_masks(self.parameters.mask_init)


class AmpereLinearPruningContextModule(GenericLinearPruningContextModule):
    AMPERE_N = 2
    AMPERE_M = 4
    SPARSE_PATTERNS_COUNT = 6  # 2 choices among 4 = 6

    def __init__(self, shape, parameters: LinearPruningParameters):
        super().__init__(shape, parameters)
        # Creating the pattern in a transposed way to avoid a few ops later
        ampere_mask_size = (
            self.shape[1],
            self.shape[0] // self.AMPERE_M,
            self.SPARSE_PATTERNS_COUNT,
        )
        self.mask_scores = nn.Parameter(torch.Tensor(size=ampere_mask_size))
        self.init_masks(self.parameters.ampere_init)


class AmpereMaskModule(nn.Module):
    def __init__(
        self,
        context_module: AmpereLinearPruningContextModule,
        parameters: LinearPruningParameters,
    ):
        super().__init__()
        self.context_module = context_module
        ampere_pattern = self.build_ampere_pattern(context_module.mask_scores.device)
        self.register_buffer("ampere_pattern", ampere_pattern)
        self.parameters = parameters

    @staticmethod
    def build_ampere_pattern(device):
        patterns = torch.zeros(AmpereLinearPruningContextModule.AMPERE_M)
        patterns[: AmpereLinearPruningContextModule.AMPERE_N] = 1
        sparse_patterns = torch.Tensor(list(set(permutations(patterns.tolist())))).to(device=device)
        return sparse_patterns

    @staticmethod
    def mask(ampere_permut_scores, ampere_pattern, ampere_temperature: float, training: bool):
        if training:
            s = F.softmax(ampere_permut_scores * ampere_temperature, dim=-1)
        else:
            s = torch.argmax(ampere_permut_scores, dim=-1)
            s = F.one_hot(s, num_classes=ampere_permut_scores.shape[-1]).float()

        s = s.matmul(ampere_pattern)
        s = s.view(-1, s.shape[1] * s.shape[2])
        s = s.t()

        return s

    def forward(self, ampere_temperature):
        return self.mask(
            self.context_module.mask_scores,
            self.ampere_pattern,
            ampere_temperature,
            self.training,
        )


class MaskModule(nn.Module):
    def __init__(
        self,
        context_modules: List[LinearPruningContextModule],
        parameters: LinearPruningParameters,
    ):
        super().__init__()
        assert isinstance(context_modules, (list, tuple))
        self.context_modules = nn.ModuleList(context_modules)
        self.parameters = parameters

    @staticmethod
    def expand_mask(mask, block_rows, block_cols):
        mask = torch.repeat_interleave(mask, block_rows, dim=0)
        mask = torch.repeat_interleave(mask, block_cols, dim=1)
        return mask

    @staticmethod
    def mask(
        weight,
        mask_scores,
        parameters: LinearPruningParameters,
        threshold: float,
        training,
    ):
        method = parameters.method
        submethod = parameters.submethod
        if submethod.startswith("1d"):
            dividers = parameters.block_rows, parameters.block_cols
            for i, m in enumerate(mask_scores):
                if m is None:
                    assert submethod == "1d_alt"
                    mask_scores[i] = torch.ones(weight.shape[i] // dividers[i], device=weight.device)

            mask_scores = mask_scores[0].unsqueeze(-1).matmul(mask_scores[1].unsqueeze(0))
        else:
            mask_scores = mask_scores[0]

        if method == "topK":
            mask = TopKBinarizer.apply(mask_scores, threshold)
        elif method == "magnitude":
            mask = MagnitudeBinarizer.apply(weight, threshold)
        elif method in ["threshold", "sigmoied_threshold"]:
            sig = "sigmoied" in method
            mask = ThresholdBinarizer.apply(mask_scores, threshold, sig)
        elif method == "l0":
            l, r, b = -0.1, 1.1, 2 / 3
            if training:
                u = torch.zeros_like(mask_scores).uniform_().clamp(0.0001, 0.9999)
                s = torch.sigmoid((u.log() - (1 - u).log() + mask_scores) / b)
            else:
                s = torch.sigmoid(mask_scores)
            s_bar = s * (r - l) + l
            mask = s_bar.clamp(min=0.0, max=1.0)

        if method not in "magnitude":
            # Expand block mask to individual element mask
            mask = MaskModule.expand_mask(
                mask,
                block_rows=parameters.block_rows,
                block_cols=parameters.block_cols,
            )

        return mask

    def forward(self, weight, threshold):
        mask_scores = None
        if self.parameters.method != "magnitude":
            mask_scores = [(c.mask_scores if c is not None else None) for c in self.context_modules]

        return self.mask(weight, mask_scores, self.parameters, threshold, self.training)


class MaskedLinear(ReplacementModule):
    def __init__(
        self,
        linear_module: nn.Linear,
        mask_context_modules: List[LinearPruningContextModule],
        ampere_context_module: AmpereLinearPruningContextModule,
        parameters: LinearPruningParameters,
    ):
        super().__init__()

        assert isinstance(linear_module, nn.Linear)
        self.weight = linear_module.weight
        self.bias = linear_module.bias

        self.mask_module = MaskModule(mask_context_modules, parameters)
        if ampere_context_module is not None:
            self.ampere_module = AmpereMaskModule(ampere_context_module, parameters)
        self.parameters = parameters

    def get_masked_weights(self):
        threshold = self.get_context_data("threshold")
        mask = self.mask_module(self.weight, threshold)
        if self.parameters.ampere_method != "disabled":
            ampere_temperature = self.get_context_data("ampere_temperature")
            ampere_mask = self.ampere_module(ampere_temperature)
            if mask.shape != ampere_mask.shape:
                raise Exception("Shape mismatch")
            mask = mask * ampere_mask

        masked_weights = mask * self.weight

        return masked_weights

    def forward(self, input):
        masked_weights = self.get_masked_weights()
        # Compute output (linear layer) with masked weights
        return F.linear(input, masked_weights, self.bias)

    def compile(self):
        masked_weights = self.get_masked_weights()

        ret = nn.Linear(self.weight.shape[1], self.weight.shape[0], bias=self.bias is not None)
        with torch.no_grad():
            ret.weight.copy_(masked_weights)
            if ret.bias is not None:
                ret.bias.copy_(self.bias)
        return ret


class LinearPruningModulePatcher(ModulePatcher):
    def __init__(
        self,
        context: PatcherContext,
        parameters: LinearPruningParameters,
    ):
        super().__init__(context=context)
        self.parameters = parameters
        self.check_method(parameters)

    @staticmethod
    def check_method(parameters: LinearPruningParameters):
        method = parameters.method
        submethod = parameters.submethod
        ampere_method = parameters.ampere_method
        PRUNING_METHODS = ["topK", "threshold", "sigmoied_threshold", "magnitude", "l0"]
        if method not in PRUNING_METHODS:
            raise RuntimeError(f"Unknown pruning method '{method}', should be in {PRUNING_METHODS}")

        PRUNING_SUB_METHODS = ["default", "1d", "1d_alt"]
        if submethod not in PRUNING_SUB_METHODS:
            raise RuntimeError(f"Unknown pruning sub method '{submethod}', should be in {PRUNING_SUB_METHODS}")

        AMPERE_METHODS = ["disabled", "annealing"]
        if ampere_method not in AMPERE_METHODS:
            raise RuntimeError(f"Unknown ampere pruning method '{ampere_method}', should be in {AMPERE_METHODS}")

    def create_context_module(self, child_module_name, child_module, key, row=None):
        shape = child_module.weight.shape
        parameters = self.parameters
        prefix = key[0]
        if prefix == "mask":
            assert parameters.submethod == "default"
            return BlockLinearPruningContextModule(shape, parameters)
        elif prefix == "mask_1d":
            assert parameters.submethod.startswith("1d")
            assert row in [True, False]
            return SingleDimensionLinearPruningContextModule(shape, row, parameters)
        elif prefix == "ampere_mask":
            return AmpereLinearPruningContextModule(shape, parameters)
        else:
            raise RuntimeError(f"Unknown context module kind {prefix}")

    def patch(self, child_module_name, child_module):
        if self.parameters.submethod.startswith("1d"):
            mask_row = self.get_context_module(child_module_name, child_module, kind="mask_row", row=True)
            mask_col = self.get_context_module(child_module_name, child_module, kind="mask_col", row=False)
            shape = child_module.weight.shape
            if mask_row is not None:
                assert mask_row.mask_scores.shape[0] == shape[0] // self.parameters.block_rows
            if mask_col is not None:
                assert mask_col.mask_scores.shape[0] == shape[1] // self.parameters.block_cols
            mask_context_modules = [mask_row, mask_col]
        else:
            mask_context_module = self.get_context_module(child_module_name, child_module, kind="mask")
            mask_context_modules = [mask_context_module]

        if self.parameters.ampere_method != "disabled":
            ampere_context_module = self.get_context_module(child_module_name, child_module, kind="ampere_mask")
        else:
            ampere_context_module = None

        return MaskedLinear(child_module, mask_context_modules, ampere_context_module, self.parameters)


class JointPruningModulePatcher(LinearPruningModulePatcher):
    def __init__(self, context: PatcherContext, parameters: LinearPruningParameters, suffix: str):

        super().__init__(context, parameters)
        self.suffix = suffix

    def get_context_key(self, child_module_name, kind="default"):
        if kind == "ampere_mask":
            return (kind, child_module_name)
        elif kind == "mask":
            layer_number = self.extract_layer_number_from_name(child_module_name)
            return (kind, f"{layer_number}.{self.suffix}")
        else:
            raise RuntimeError(f"Unknown kind {kind}")


class ChannelPruningModulePatcher(LinearPruningModulePatcher):
    def __init__(
        self,
        context: PatcherContext,
        parameters: LinearPruningParameters,
        model_structure: ModelStructure,
        suffix: str,
    ):
        super().__init__(context, parameters)
        self.model_structure = model_structure
        self.suffix = suffix

    def get_context_key(self, child_module_name, kind="default"):
        if kind == "ampere_mask":
            return (kind, child_module_name)
        elif kind in ["mask_row", "mask_col"]:
            layer_number = self.extract_layer_number_from_name(child_module_name)

            offset = 1 if kind == "mask_row" else 0  # The weight matrix has a shape [output, input]

            position, name = self.model_structure.get_module_intra_layer_position(child_module_name)

            if self.parameters.submethod == "1d_alt":
                if (position % 2) == 1:
                    if kind == "mask_row":
                        return None
                else:
                    if kind == "mask_col":
                        return None

            return ("mask_1d", f"{layer_number}.{position+offset}.{self.suffix}")
        else:
            raise RuntimeError(f"Unknown kind {kind}")
