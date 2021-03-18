import re
from typing import Any, Dict

import torch.nn as nn

from .model_patcher import ModelPatcher
from nn_pruning.modules.nonorm import Layer2NoNorm


class PatcherContextModule(nn.Module):
    pass

class PatcherContext:
    def __init__(self):
        self.context_modules: Dict = {}
        self.context_data = {}

    def set_context_data(self, data_key, data):
        # print("set_context_data", data_key, data)
        self.context_data[data_key] = data

    def set_context_data_dict(self, d: Dict[str, Any]):
        for k, v in d.items():
            self.set_context_data(k, v)

    def get_context_data(self, data_key):
        return self.context_data[data_key]

    def enumerate_context_data(self):
        for k, v in self.context_data.items():
            yield k, v

    def has_module_context(self, key):
        d = self.context_modules
        for key_part in key:
            if key_part not in d:
                return False
            d = d[key_part]
        return True

    def get_context_module(self, key) -> PatcherContextModule:
        d = self.context_modules
        for key_part in key:
            d = d[key_part]
        return d

    def set_module_context(self, key, module_context: PatcherContextModule):
        d = self.context_modules
        for key_part in key[:-1]:
            if key_part not in d:
                d[key_part] = {}
            d = d[key_part]
        assert key[-1] not in d
        d[key[-1]] = module_context


class ReplacementModule(nn.Module):
    def set_context(self, context):
        self._context = context

    def get_context_data(self, key):
        return self._context.get_context_data(key)


class ModulePatcher:
    def __init__(self, context: PatcherContext):
        self.context = context

    def extract_layer_number_from_name(self, child_module_name):
        extracts = re.findall(r"[0-9]+", child_module_name)
        if len(extracts) != 1:
            return None
        return int(extracts[0])

    def get_context_key(self, child_module_name, kind="default"):
        # Default implementation: each module has its own context
        return (kind, child_module_name)

    def create_context_module(self, child_module_name, child_module, key):
        raise NotImplementedError("Implement in subclass")

    def get_context_module(self, child_module_name, child_module, kind="default", **kwargs):
        key = self.get_context_key(child_module_name, kind=kind)
        if key == None:
            return None
        if self.context.has_module_context(key):
            return self.context.get_context_module(key)
        else:
            module_context = self.create_context_module(child_module_name, child_module, key, **kwargs)
            self.context.set_module_context(key, module_context)
            return module_context

    def patch(self, child_module_name, child_module) -> ReplacementModule:
        raise NotImplementedError("Implement in subclass")

    def patch_and_connect(self, child_module_name, child_module) -> ReplacementModule:
        ret = self.patch(child_module_name, child_module)
        if ret is not None:
            ret.set_context(self.context)
        return ret


class ModelDispatchingPatcher(ModelPatcher):
    def __init__(self):
        super().__init__()

    def add_patcher(self, pattern: str, patcher: ModulePatcher):
        patch_info = dict(patcher=patcher)
        super().add_pattern(pattern, patch_info)

    def new_child_module(self, child_module_name: str, child_module: nn.Module, patch_info: Dict):
        if patch_info.get("patcher") is not None:
            return patch_info["patcher"].patch_and_connect(child_module_name, child_module)

    def is_patchable(self, module_name, module, raiseError):
        return isinstance(module, nn.Linear)

class BertLinearModelPatcher(ModelDispatchingPatcher):
    PATTERN_PREFIX = "bert.encoder.layer.[0-9]+."
    LAYERS_PATTERNS = dict(
        query="attention.self.query",
        key="attention.self.key",
        value="attention.self.value",
        att_dense="attention.output.dense",
        interm_dense="intermediate.dense",
        output_dense="output.dense",
    )

    def __init__(self, patchers: Dict[str, ModulePatcher]):
        super().__init__()
        for layer_type, patcher in patchers.items():
            layer_pattern = (self.PATTERN_PREFIX + self.LAYERS_PATTERNS[layer_type]).replace(".", "\.")
            self.add_patcher(layer_pattern, patcher)

