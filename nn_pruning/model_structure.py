from typing import Dict


class ModelStructure:
    PATTERN_PREFIX: str = ""
    LAYER_PATTERNS: Dict[str, str] = {}
    ATTENTION_LAYERS = ("query", "key", "value")

    @classmethod
    def get_module_intra_layer_position(cls, module_name):
        for i, pattern_info in enumerate(cls.LAYER_PATTERNS.items()):
            pattern_name, pattern = pattern_info
            if module_name.endswith(pattern):
                return i, pattern_name
        LAYER_PATTERNS_STRING = "\n".join([f"{k}: {v}" for k, v in cls.LAYER_PATTERNS.items()])
        raise RuntimeError(f"module name {module_name} does not match patterns {LAYER_PATTERNS_STRING}")

    @classmethod
    def is_attention(cls, module_name):
        pos = cls.get_module_intra_layer_position(module_name)
        category = list(cls.LAYER_PATTERNS.keys())[pos]
        return category in cls.ATTENTION_LAYERS


class BertStructure(ModelStructure):
    PATTERN_PREFIX = "bert.encoder.layer.[0-9]+."
    LAYER_PATTERNS = dict(
        query="attention.self.query",
        key="attention.self.key",
        value="attention.self.value",
        att_dense="attention.output.dense",
        interm_dense="intermediate.dense",
        output_dense="output.dense",
    )
