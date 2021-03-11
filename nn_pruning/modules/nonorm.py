import torch.nn as nn
import torch
from nn_pruning.model_patcher import ModelPatcher


class Layer2NoNorm(nn.Module):
    # TODO: make interpolating factor external instead of fixed at layer construction using steps
    def __init__(self, layerNorm, steps = 5000):
        super().__init__()
        self.normalized_shape = layerNorm.normalized_shape
        self.eps = layerNorm.eps
        self.elementwise_affine = layerNorm.elementwise_affine
        assert(self.elementwise_affine)
        self.weight = nn.Parameter(layerNorm.weight.detach().clone())
        self.bias = nn.Parameter(layerNorm.bias.detach().clone())
        # Accumulators are for mean and std, and accumulator normalization factor
        self.steps = steps
        self.register_buffer("accumulator", torch.zeros(3, device=layerNorm.weight.device))
        self.delta = 0.99
        self.final_delta = 1.0
        self.delta_step = (self.final_delta - self.delta) / self.steps
        self.mix = 1.0
        self.mix_step = 1 / self.steps

    def forward(self, batch):
        accumulator = self.accumulator.clone()
        if self.training:
            mean = batch.mean(-1, keepdim=True)
            var = batch.var(-1, unbiased=False, keepdim=True)

            one = torch.tensor(1.0, device=var.device)
            new_acc = torch.stack([mean.mean(), var.mean(), one])
            accumulator *= self.delta
            accumulator += new_acc * (1.0 - self.delta)
            mix = self.mix
            mean = mean * mix + accumulator[0] / accumulator[2] * (1.0 - mix)
            var = var * mix + accumulator[1] / accumulator[2] * (1.0 - mix)
        else:
            mean = accumulator[0] / accumulator[2]
            var = accumulator[1] / accumulator[2]

        ret = (batch - mean) / (var + self.eps).sqrt()
        ret = ret * self.weight + self.bias

        if self.training:
            self.accumulator = accumulator.detach()
            self.mix = max(0.0, self.mix - self.mix_step)
            self.delta = min(self.final_delta, self.delta + self.delta_step)

        return ret

    def compile(self):
        accumulator = self.accumulator
        mean = accumulator[0] / accumulator[2]
        var = accumulator[1] / accumulator[2]

        inv_var = 1.0 / (var + self.eps).sqrt()

        weight = self.weight * inv_var
        bias = - mean * inv_var * self.weight + self.bias

        return NoNorm(weight.detach().clone(), bias.detach().clone())

class NoNorm(nn.Module):
    def __init__(self, weight, bias):
        super().__init__()
        self.weight = nn.Parameter(weight)
        self.bias = nn.Parameter(bias)

    def forward(self, batch):
        return batch * self.weight + self.bias

class NoNormCompiler(ModelPatcher):
    def __init__(self):
        super().__init__(all_match=True)

    def is_patchable(self, module_name, module, raiseError):
        return isinstance(module, Layer2NoNorm)

    def new_child_module(self, child_module_name, child_module, patch_info):
        return child_module.compile()

class NoNormPatcher(ModelPatcher):
    def __init__(self):
        super().__init__(all_match=True)

    def is_patchable(self, module_name, module, raiseError):
        return isinstance(module, nn.LayerNorm)

    def new_child_module(self, child_module_name, child_module, patch_info):
        return NoNorm(child_module.weight.detach(), child_module.bias.detach())

