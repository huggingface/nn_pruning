import torch.nn as nn
import torch
from nn_pruning.model_patcher import ModelPatcher


class Layer2NoNorm(nn.Module):
    # There are two ways to specify how the module will move progressively from a LayerNorm to a NoNorm
    # If you give a non-None schedule_callback, steps and start_delta won't be used.
    # It must be a function that returns a dictionary containing at least two keys:
    #  - mix : moving from 1.0 to 0.0 , it is the lerp factor between LayerNorm and NoNorm: 1.0 -> LayerNorm, 0.0 -> NoNorm
    #  - delta : moving from 0.99 to 1.0 for example, it is the accumulator exponential decay,
    #   the higher the longer the period it smooth the mean/variance accumulator
    # If you don't specify a schedule_callback, each call to forward will count as a step, and in 'steps' steps
    # it will move to a LayerNorm to a NoNorm

    def __init__(self, layerNorm,
                 steps = 5000,
                 start_delta = 0.99,
                 schedule_callback = None):
        super().__init__()
        self.normalized_shape = layerNorm.normalized_shape
        self.eps = layerNorm.eps
        self.elementwise_affine = layerNorm.elementwise_affine
        assert(self.elementwise_affine)
        self.weight = nn.Parameter(layerNorm.weight.detach().clone())
        self.bias = nn.Parameter(layerNorm.bias.detach().clone())
        # Accumulators are for mean and std, and accumulator normalization factor
        self.schedule_callback = schedule_callback

        if self.schedule_callback is None:
            self.steps = steps
            self.delta_step = (self.final_delta - self.delta) / self.steps
            self.mix_step = 1 / self.steps
            self.delta = start_delta
            self.final_delta = 1.0
            self.mix = 1.0
        else:
            self.steps = None
            self.delta_step = None
            self.mix_step = None
            self.delta = None
            self.final_delta = None
            self.mix = None

        self.register_buffer("accumulator", torch.zeros(3, device=layerNorm.weight.device))

    def forward(self, batch):
        accumulator = self.accumulator.clone()

        if self.training:
            if self.schedule_callback is not None:
                d = self.schedule_callback()
                mix = d["mix"]
                delta = d["delta"]
            else:
                mix = self.mix
                delta = self.delta
        else:
            mix = 0
            delta = 1.0

        if mix == 0 and delta == 1.0:
            batch_mean = accumulator[0] / accumulator[2]
            batch_var = accumulator[1] / accumulator[2]
        else:
            batch_mean = batch.mean(-1, keepdim=True)
            batch_var = batch.var(-1, unbiased=False, keepdim=True)

            one = torch.tensor(1.0, device=batch_var.device)
            new_acc = torch.stack([batch_mean.mean(), batch_var.mean(), one])
            accumulator = torch.lerp(new_acc, accumulator, delta)

            batch_mean = torch.lerp(accumulator[0] / accumulator[2], batch_mean, mix)
            batch_var = torch.lerp(accumulator[1] / accumulator[2], batch_var, mix)

        ret = (batch - batch_mean) / (batch_var + self.eps).sqrt()
        ret = ret * self.weight + self.bias

        if self.training:
            self.accumulator = accumulator.detach()
            if self.schedule_callback is None:
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

class Layer2NoNormPatcher(ModelPatcher):
    def __init__(self,
                 steps = 5000,
                 start_delta = 0.99,
                 schedule_callback = None):
        super().__init__(all_match=True)
        self.steps = steps
        self.start_delta = start_delta
        self.schedule_callback = schedule_callback

    def is_patchable(self, module_name, module, raiseError):
        return isinstance(module, nn.LayerNorm)

    def new_child_module(self, child_module_name, child_module, patch_info):
        return Layer2NoNorm(child_module,
                            steps = self.steps,
                            start_delta = self.start_delta,
                            schedule_callback = self.schedule_callback)

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

