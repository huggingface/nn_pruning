import re

import torch


class ModelPatcher:
    def __init__(self, all_match=False):
        self.patterns = []
        self.stats = {"patched": 0}
        self.all_match = all_match

    def is_patchable(self, module_name, module, raiseError):
        return True

    def get_patchable_layers(self, model, number_rewrite=True):
        # Layer names (displayed as regexps)")
        ret = {}
        for k, v in model.named_modules():
            if self.is_patchable(k, v, raiseError=False):
                r = re.escape(k)
                r = re.sub(r"[0-9]+", "[0-9]+", r)
                if r not in ret:
                    ret[r] = []
                ret[r].append(v)

        return ret

    def add_pattern(self, pattern, patch_info):
        self.patterns.append(dict(pattern=pattern, patch_info=patch_info))

    def pattern_match(self, module_name):
        if self.all_match:
            return True, -1
        for pattern_def in self.patterns:
            if re.match(pattern_def["pattern"], module_name):
                return True, pattern_def["patch_info"]
        return False, -1

    def new_child_module(self, child_module_name, child_module, patch_info):
        raise NotImplementedError("Implement this in subclasses")

    def replace_module(
        self, father, child_module_name, child_name, child_module, patch_info
    ):
        new_child_module = self.new_child_module(
            child_module_name, child_module, patch_info
        )
        if new_child_module is not None:
            self.stats["patched"] += 1
            setattr(father, child_name, new_child_module)

    def patch(self, model):
        modules = {}
        modified = False
        if self.all_match and len(self.patterns) != 0:
            Warning(
                "all match is true, but there are some defined patterns, those will be ignored"
            )
        for k, v in model.named_modules():
            modules[k] = v
            match, patch_info = self.pattern_match(k)
            if match and self.is_patchable(k, v, raiseError=True):
                parts = k.split(".")
                father_module_name = ".".join(parts[:-1])
                child_name = parts[-1]
                father = modules[father_module_name]
                self.replace_module(father, k, child_name, v, patch_info)
                modified = True

        if not modified:
            print(
                "Warning: the patcher did not patch anything!"
                " Check patchable layers with `mp.get_patchable_layers(model)`"
            )


class BertHeadsPruner:
    def __init__(self, model):
        self.model = model

    def analyze_head(self, p, head_size):
        p0 = (
            (p != 0)
            .reshape(p.shape[0] // head_size, head_size, p.shape[1])
            .any(-1)
            .any(-1)
        )
        return p0

    def get_pruned_heads(self):
        heads_count = 0
        to_prune = {}
        for name, module in self.model.named_modules():
            if name.endswith("attention.self"):
                layer_number = int(name.split(".")[3])
                parts = []
                for a in ["query", "key", "value"]:
                    p = self.analyze_head(
                        getattr(module, a).weight, module.attention_head_size
                    )
                    parts.append(p)
                parts = list(torch.stack(parts, 0).all(0).cpu().detach().numpy())
                heads_count += len(parts)

                heads_to_prune = [i for i, p in enumerate(parts) if not p]

                to_prune[layer_number] = heads_to_prune
        return to_prune, heads_count

    def run(self):
        model = self.model

        to_prune, heads_count = self.get_pruned_heads()

        model.prune_heads(to_prune)
        return sum([len(p) for p in to_prune.values()]), heads_count
