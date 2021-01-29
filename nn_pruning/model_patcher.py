import re

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

    def replace_module(self, father, child_module_name, child_name, child_module, patch_info):
        new_child_module = self.new_child_module(child_module_name, child_module, patch_info)
        if new_child_module is not None:
            self.stats["patched"] += 1
            setattr(father, child_name, new_child_module)

    def patch(self, model):
        modules = {}
        modified = False
        if self.all_match and len(self.patterns) != 0:
            Warning("all match is true, but there are some defined patterns, those will be ignored")
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

