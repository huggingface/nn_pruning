import torch
import torch.nn as nn
import torch.nn.functional as F
from nn_pruning.model_patcher import ModelPatcher


class GeLU2ReLU(nn.Module):
    # There are two ways to specify how the module will move progressively from a GeLU to a ReLU
    # If you give a non-None schedule_callback, steps won't be used.
    # It must be a function that returns a dictionary containing at least two keys:
    #  - mix : moving from 1.0 to 0.0 , it is the lerp factor between LayerNorm and NoNorm
    # If you don't specify a schedule_callback, each call to forward will count as a step, and in 'steps' steps
    # it will move to a GeLU to a ReLU
    def __init__(self,
                 steps = 5000,
                 schedule_callback = None):
        super().__init__()
        self.schedule_callback = schedule_callback

        if self.schedule_callback is None:
            self.steps = steps
            self.mix_step = 1 / self.steps
            self.mix = 1.0
        else:
            self.steps = None
            self.mix_step = None
            self.mix = None

    def forward(self, batch):
        if self.training:
            if self.schedule_callback is not None:
                d = self.schedule_callback()
                mix = d["mix"]
            else:
                mix = self.mix
        else:
            mix = 0

        if mix == 0:
            ret = F.relu(batch)
        else:
            g = F.gelu(batch)
            r = F.relu(batch)
            ret = torch.lerp(r, g, mix)

        if self.training:
            if self.schedule_callback is None:
                self.mix = max(0.0, self.mix - self.mix_step)

        return ret

class GeLU2ReLUModelPatcher(ModelPatcher):
    def __init__(self,
                 steps = 5000,
                 schedule_callback = None):
        super().__init__(all_match=True)
        self.steps = steps
        self.schedule_callback = schedule_callback
        self.names = ["intermediate_act_fn", "transform_act_fn"]

    def is_patchable(self, module_name, module, raiseError):
        for name in self.names:
            if hasattr(module, name):
                return True
        return False

    def new_child_module(self, child_module_name, child_module, patch_info):
        fn = GeLU2ReLU(steps=self.steps,
                       schedule_callback=self.schedule_callback)
        patched = True
        for name in self.names:
            if hasattr(child_module, name):
                setattr(child_module, name, fn)
                patched = True

        assert(patched)
        # We don't return a new child module, we change it in place, we return the module itself to let the patcher update stats
        return child_module


