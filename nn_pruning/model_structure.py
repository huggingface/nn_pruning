from typing import Dict
import re
from transformers import BertConfig, BartConfig, T5Config

class ModelStructure:
    PATTERN_PREFIX: str = ""
    LAYER_PATTERNS: Dict[str, str] = {}
    ATTENTION_LAYERS = ("query", "key", "value")
    FFN_LAYERS = ("interm_dense", "output_dense")

    @classmethod
    def get_module_intra_layer_position(cls, module_name):
        for i, pattern_info in enumerate(cls.LAYER_PATTERNS.items()):
            pattern_name, pattern = pattern_info
            if pattern in module_name:
                return i, pattern_name
        LAYER_PATTERNS_STRING = "\n".join([f"{k}: {v}" for k, v in cls.LAYER_PATTERNS.items()])
        raise RuntimeError(f"module name {module_name} does not match patterns {LAYER_PATTERNS_STRING}")

    @classmethod
    def is_attention(cls, module_name, exclude_att_dense=False):
        patterns = cls.ATTENTION_LAYERS if exclude_att_dense else cls.MHA_LAYERS
        for i, pattern in enumerate(patterns):
            if cls.LAYER_PATTERNS[pattern] in module_name:
                return True
        return False

    @classmethod
    def is_ffn(cls, module_name):
        if cls.is_attention(module_name, exclude_att_dense=False):
            return False
        for i, pattern in enumerate(cls.FFN_LAYERS):
            if cls.LAYER_PATTERNS[pattern] in module_name:
                return True
        return False

    @classmethod
    def get_position_ffn(cls, module_name):
        for i, pattern in enumerate(cls.FFN_LAYERS):
            if cls.LAYER_PATTERNS[pattern] in module_name:
                return i
        FFN_PATTERNS_STRING = ", ".join([f"{v}" for k, v in cls.LAYER_PATTERNS.items() if k in cls.FFN_LAYERS])
        raise RuntimeError(f"Module name {module_name} does not match any of the FFN patterns : {FFN_PATTERNS_STRING}")

    @classmethod
    def is_decoder(cls, module_name):
        return True if 'decoder' in module_name else False

    @classmethod
    def layer_index(cls, child_module_name):
        extracts = re.findall(r"[0-9]+", child_module_name)
        return int(extracts[0])

    @staticmethod
    def is_layernorm(module_name):
        return "layernorm" in module_name.lower().replace("_", "")

class BertStructure(ModelStructure):
    PATTERN_PREFIX = "(:?bert.)?encoder.layer.[0-9]+."
    LAYER_PATTERNS = dict(
        query="attention.self.query",
        key="attention.self.key",
        value="attention.self.value",
        att_dense="attention.output.dense",
        interm_dense="intermediate.dense",
        output_dense="output.dense",
    )
    ATTENTION_PREFIX = ("attention.self",)
    ATTENTION_LAYERS = ("query", "key", "value")
    MHA_LAYERS = ATTENTION_LAYERS + ("att_dense",)
    NAME_CONFIG = dict(
        hidden_size="hidden_size",
        intermediate_size="intermediate_size",
        num_hidden_layers="num_hidden_layers",
        num_attention_heads="num_attention_heads",
        attention_head_size="attention_head_size",
    )

class BartStructure(ModelStructure):
    PATTERN_PREFIX = "(:?model.)?(en|de)coder.layers.[0-9]+."
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
    ATTENTION_PREFIX = ("self_attn", "encoder_attn")
    ATTENTION_LAYERS = ("query", "key", "value", "encoder_decoder_query", "encoder_decoder_key", "encoder_decoder_value")
    MHA_LAYERS = ATTENTION_LAYERS + ("att_dense", "encoder_decoder_att_dense")
    NAME_CONFIG = dict(
        hidden_size="d_model",
        intermediate_size="encoder_ffn_dim",
        num_hidden_layers="num_hidden_layers",
        num_attention_heads="num_heads",
        attention_head_size = "head_dim",
    )

class T5Structure(ModelStructure):
    PATTERN_PREFIX = "(en|de)coder.block.[0-9]+.layer.[0-9]+."
    LAYER_PATTERNS = dict(
        query="SelfAttention.q",
        key="SelfAttention.k",
        value="SelfAttention.v",
        att_dense="SelfAttention.o",
        encoder_decoder_query="EncDecAttention.q",
        encoder_decoder_key="EncDecAttention.k",
        encoder_decoder_value="EncDecAttention.v",
        encoder_decoder_att_dense="EncDecAttention.o",
        interm_dense="DenseReluDense.wi",
        output_dense="DenseReluDense.wo",
    )
    ATTENTION_PREFIX = ("SelfAttention", "EncDecAttention")
    ATTENTION_LAYERS = ("query", "key", "value", "encoder_decoder_query", "encoder_decoder_key", "encoder_decoder_value")
    MHA_LAYERS = ATTENTION_LAYERS + ("att_dense", "encoder_decoder_att_dense")
    NAME_CONFIG = dict(
        hidden_size="d_model",
        intermediate_size="d_ff",
        num_hidden_layers="num_layers",
        num_attention_heads="num_heads",
        attention_head_size="key_value_proj_dim",
    )

config2struct = {
    BertConfig: BertStructure,
    BartConfig: BartStructure,
    T5Config: T5Structure,
}

name2struct = {
    "bert": BertStructure,
    "bart": BartStructure,
    "t5": T5Structure,
}

class ModelStructureNotFound(RuntimeError):
    pass

def struct_from_config(config):
    structure = None
    if hasattr(config, "config_class"):
        structure = config2struct.get(config.config_class)
    elif hasattr(config, "model_type"):
        structure = name2struct.get(config.model_type)

    if structure is None:
        raise ModelStructureNotFound(f"Model config does not match any of the defined structures.")
    return structure

def struct_from_name(model_name):
    for name in name2struct.keys():
        if name in model_name:
            return name2struct[name]
    raise ModelStructureNotFound(f"Model name {model_name} does not match any of the defined structures.")

def struct_from_model(model):
    for structure in config2struct.values():
        layer_pattern = structure.LAYER_PATTERNS
        num_pattern = len(layer_pattern)
        for pattern in layer_pattern.values():
            for k, v in model.items():
                if pattern in k:
                    num_pattern -= 1
                    break
        if num_pattern == 0:
            return structure
    else:
        raise RuntimeError("Model does not match any of the defined structures.")

def count_num_heads(model):
    head_count = 0
    model_structure = struct_from_config(model.config_class)
    for name, module in model.named_modules():
        for attention_prefix in model_structure.ATTENTION_PREFIX:
            if name.endswith(attention_prefix):
                if hasattr(module, 'num_attention_heads'):
                    num_attention_heads = module.num_attention_heads
                elif hasattr(module, 'num_heads'):
                    num_attention_heads = module.num_heads
                else:
                    raise RuntimeError(f"Not able to retrieve number of attention head")
                head_count += num_attention_heads
    return head_count

