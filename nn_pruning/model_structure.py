from typing import Dict
import re

class ModelStructure:
    PATTERN_PREFIX: str = ""
    LAYER_PATTERNS: Dict[str, str] = {}
    ATTENTION_LAYERS = ("query", "key", "value")

    @classmethod
    def get_module_intra_layer_position(cls, module_name):
        for i, pattern_info in enumerate(cls.LAYER_PATTERNS.items()):
            pattern_name, pattern = pattern_info
            if pattern in module_name:
                return i, pattern_name
        LAYER_PATTERNS_STRING = "\n".join([f"{k}: {v}" for k, v in cls.LAYER_PATTERNS.items()])
        raise RuntimeError(f"module name {module_name} does not match patterns {LAYER_PATTERNS_STRING}")

    @classmethod
    def is_attention(cls, module_name):
        pos, _ = cls.get_module_intra_layer_position(module_name)
        category = list(cls.LAYER_PATTERNS.keys())[pos]
        return category in cls.ATTENTION_LAYERS

    @classmethod
    def layer_index(cls, child_module_name):
        extracts = re.findall(r"[0-9]+", child_module_name)
        if len(extracts) != 1:
            return None
        return int(extracts[0])


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
    ATTENTION_LAYERS = ("query", "key", "value")


class BartStructure(ModelStructure):
    PATTERN_PREFIX = "model.(en|de)coder.layers.[0-9]+."
    LAYER_PATTERNS = dict(
        query="self_attn.q_proj",
        key="self_attn.k_proj",
        value="self_attn.v_proj",
        att_dense="self_attn.out_proj",
        encoder_decoder_query="encoder_attn.q_proj",
        encoder_decoder_key="encoder_attn.k_proj",
        encoder_decoder_value="encoder_attn.v_proj",
        encoder_decoder_att_dense="encoder_attn.out_proj",
        interm_dense="fc1",
        output_dense="fc2",
    )
    ATTENTION_LAYERS = ("query", "key", "value", "encoder_decoder_query", "encoder_decoder_key", "encoder_decoder_value")
