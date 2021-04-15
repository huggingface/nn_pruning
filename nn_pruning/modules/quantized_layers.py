import math
import copy

import torch
import torch.nn as nn
import torch.nn.functional as F
from torch.quantization import (
    QConfig,
    QuantStub,
    DeQuantStub,
    FakeQuantize,
    MinMaxObserver,
)
import transformers

from ..model_patcher import ModelPatcher
from ..training_patcher import ReplacementModule
from .masked_nn import MaskedLinear
from .nonorm import Layer2NoNorm, NoNorm


_ATTENTION_MASK_INF = 20

# TensorFlow Lite Quantization Specs
# https://www.tensorflow.org/lite/performance/quantization_spec?hl=en
# For activations: int8 asymmetric per-tensor [-128, 127] range
# For weights: int8 symmetric per-tensor [-127, 127] range
_TFLITE_QAT_CONFIG = QConfig(
    activation=FakeQuantize.with_args(
        observer=MinMaxObserver,
        dtype=torch.qint8,
        quant_min=-128,
        quant_max=127,
        qscheme=torch.per_tensor_affine,
    ),
    weight=FakeQuantize.with_args(
        observer=MinMaxObserver,
        dtype=torch.qint8,
        quant_min=-127,
        quant_max=127,
        qscheme=torch.per_tensor_symmetric
    )
)
_DEFAULT_CONFIG = torch.quantization.get_default_qat_qconfig("fbgemm")
_DEFAULT_MOBILE = torch.quantization.get_default_qat_qconfig("qnnpack")

_QCONFIG_MAPPING = {
    "default": _DEFAULT_CONFIG,
    "mobile": _DEFAULT_MOBILE,
    "tflite": _TFLITE_QAT_CONFIG,
}


def create_qconfig(qconfig_name):
    qconfig = _QCONFIG_MAPPING.get(qconfig_name, None)
    if qconfig is None:
        raise ValueError(
            f"qconfig name must be in {_QCONFIG_MAPPING.keys()}, {qconfig_name} was provided"
        )
    return copy.deepcopy(qconfig)


# def activation_output_fakequant(scale, zp, min_, max_):
#
#     def quant_out(x):
#         quant_x = torch.clamp(
#             torch.round(x / scale + zp),
#             min=min_,
#             max=max_
#         )
#         dequant_x = (quant_x - zp) * scale
#         return dequant_x
#
#     return quant_out


class QuantizedMaskedLinear(MaskedLinear):
    def __init__(self, masked_linear, qconfig: QConfig = None):
        super(ReplacementModule, self).__init__()

        def is_attribute(attribute_name):
            attribute = getattr(masked_linear, attribute_name)
            is_special = attribute_name.startswith("__")
            is_callable = callable(attribute) and not isinstance(attribute, nn.Module)
            return (not is_special) and (not is_callable)

        attributes = [name for name in dir(masked_linear) if is_attribute(name)]
        for attribute_name in attributes:
            setattr(self, attribute_name, getattr(masked_linear, attribute_name))

        self.qconfig = qconfig
        if qconfig:
            self.fake_quant_weight = qconfig.weight()
            self.activation_post_process = qconfig.activation()

    def forward(self, input):
        masked_weights, bias = self.get_masked_weights_bias()

        if self.qconfig:
            masked_weights = self.fake_quant_weight(masked_weights)

        output = F.linear(input, masked_weights, bias)

        if self.qconfig:
            output = self.activation_post_process(output)

        return output


class QuantizedEmbedding(nn.Module):
    def __init__(self, embedding, qconfig: QConfig = None, **kwargs):
        super().__init__()
        self.num_embeddings = embedding.num_embeddings
        self.embedding_dim = embedding.embedding_dim
        self.padding_idx = embedding.padding_idx

        self.weight = nn.Parameter(embedding.weight.detach())

        self.qconfig = qconfig
        if qconfig:
            self.weight_fake_quant = qconfig.weight().to(embedding.weight.device)

    def forward(self, input: torch.Tensor) -> torch.Tensor:
        weight = self.weight_fake_quant(self.weight) if self.qconfig else self.weight
        return F.embedding(input, weight, self.padding_idx)

    def extra_repr(self) -> str:
        s = "{num_embeddings}, {embedding_dim}"
        if self.padding_idx is not None:
            s += ", padding_idx={padding_idx}"
        return s.format(**self.__dict__)


class QuantizedSoftmaxArray(nn.Module):
    def __init__(self, softmax, **kwargs) -> None:
        super().__init__()
        self.dim = softmax.dim
        self.input_scale = self.softmax.quant_in.scale
        self.input_zp = self.softmax.quant_in.zero_point
        self.output_scale = self.softmax.quant_exp.scale
        self.output_zp = self.softmax.quant_exp.zero_point
        self.range = (self.softmax.quant_in.quant_min, self.sofmax.quant_in.quant_max)

        self.no_sum = hasattr(softmax, "sum_acc")
        if self.no_sum:
            self.sum_acc = softmax.sum_acc

        self.array = self._build_array()

    def __setstate__(self, state):
        self.__dict__.update(state)
        if not hasattr(self, "dim"):
            self.dim = None

    def _build_array(self):
        quant_input = torch.arange(self.range[0], self.range[1] + 1, device=self.input_zp.device)
        dequantized = (quant_input - self.input_zp) * self.input_scale
        dequantized = dequantized - dequantized[-1]
        exp = torch.exp(dequantized)
        quant_output = exp / self.output_scale + self.output_zp
        return quant_output

    def forward(self, input: torch.Tensor) -> torch.Tensor:
        # Useful to test when not running in quantized mode.
        if input.dtype == torch.float32 or input.dtype == torch.float16:
            input = torch.clamp(
                input / self.input_scale + self.input_zp,
                min=self.range[0],
                max=self.range[1]
            ).to(dtype=torch.long, device=input.device)
        exp = self.array[input + self.range[0]]
        if self.no_sum:
            sum_ = self.sum_acc
        else:
            sum_ = torch.sum(exp, dim=self.dim, keepdim=True)
        output = exp / sum_
        return output


class QuantizedSoftmax(nn.Module):
    def __init__(
        self,
        softmax,
        qconfig: QConfig = None,
        no_sum: bool = False,
        **kwargs
    ) -> None:
        super().__init__()
        self.dim = softmax.dim
        self.qconfig = qconfig
        if qconfig:
            self.quant_in = QuantStub(qconfig)
            self.quant_exp = QuantStub(qconfig)
            self.quant_sum = QuantStub(qconfig)
            self.quant_out = QuantStub(qconfig)
            self.dequant = DeQuantStub()

        self.no_sum = no_sum
        if no_sum:
            self.delta = 0
            self.final_delta = 1
            self.delta_step = (self.final_delta - self.delta) / 100
            self.dim = None

    def forward(self, input: torch.Tensor) -> torch.Tensor:
        if self.qconfig:
            # quant_in is not necessary as the input is already fake quantized, only useful to keep
            # track of the fake quantization params inside the Softmax.
            input = self.quant_in(input)
            input = self.dequant(input)

        if self.qconfig and self.no_sum:
            quant_max = self.quant_in.activation_post_process.quant_max
            zp = self.quant_in.activation_post_process.zero_point
            scale = self.quant_in.activation_post_process.scale
            max_value = (quant_max - zp) * scale
        else:
            max_value, _ = torch.max(input, dim=-1, keepdim=True)
        exp = torch.exp(input - max_value)

        if self.qconfig:
            exp = self.quant_exp(exp)

        if self.no_sum and self.delta == self.final_delta:
            sum_ = self.sum_acc
        else:
            sum_ = torch.sum(exp, dim=self.dim, keepdim=True)
            if self.no_sum:
                with torch.no_grad():
                    new_sum_acc = self.sum_acc.detach().clone()
                    new_sum_acc = torch.lerp(sum_.mean(), self.sum_acc, self.delta)
                    self.sum_acc.data.copy_(new_sum_acc)
                    self.delta = min(self.delta + self.delta_step, self.final_delta)

        if self.qconfig:
            sum_ = self.quant_sum(sum_)

        output = exp / sum_

        if self.qconfig:
            output = self.quant_out(output)

        return output

    def compile(self):
        return QuantizedSoftmaxArray(self)

    def extra_repr(self) -> str:
        return "dim={dim}".format(dim=self.dim)


class QuantizedTanh(nn.Module):
    def __init__(
        self,
        _,
        qconfig: QConfig = None,
        tflite_activation_output_scheme: bool = False,
        **kwargs
    ):
        super().__init__()
        self.qconfig = qconfig
        if qconfig:
            # if tflite_activation_output_scheme:
            #     self.quant = activation_output_fakequant(1 / 128, 0, -128, 127)
            # else:
            self.quant = QuantStub(qconfig)

    def forward(self, input: torch.Tensor) -> torch.Tensor:
        output = torch.tanh(input)

        if self.qconfig:
            output = self.quant(output)

        return output


class QuantizedBertSelfAttention(nn.Module):
    def __init__(
        self,
        self_attention,
        qconfig: QConfig = None,
        use_separate_params: bool = True,
        tflite_activation_output_scheme: bool = False,
        use_softmax_array: bool = False,
        attention_mask_inf: int = _ATTENTION_MASK_INF,
        **kwargs
    ):
        super().__init__()
        self.num_attention_heads = self_attention.num_attention_heads
        self.attention_head_size = self_attention.attention_head_size
        self.all_head_size = self.num_attention_heads * self.attention_head_size
        self.position_embedding_type = self_attention.position_embedding_type

        self.use_separate_params = use_separate_params
        self.normalization_factor = 1 / math.sqrt(float(self.attention_head_size))

        if use_separate_params:
            def copy_param(param_name, module):
                return nn.Parameter(getattr(module, param_name).detach().clone())

            def copy_linear(original, new):
                new.weight = copy_param("weight", original)
                new.bias = copy_param("bias", original)

            hidden_size = self_attention.query.in_features
            self.query = nn.Linear(hidden_size, self.all_head_size)
            self.key = nn.Linear(hidden_size, self.all_head_size)
            self.value = nn.Linear(hidden_size, self.all_head_size)

            copy_linear(self_attention.query, self.query)
            copy_linear(self_attention.key, self.key)
            copy_linear(self_attention.value, self.value)
        else:
            # TODO: reformulate this as a Linear (to make it compatible with MaskedLinear)
            qkv_weights = torch.cat(
                [
                    self.normalization_factor * self_attention.query.weight.permute(1, 0),
                    self_attention.key.weight.permute(1, 0),
                    self_attention.value.weight.permute(1, 0)
                ],
                dim=1
            )

            qkv_biases = torch.cat(
                [
                    self.normalization_factor * self_attention.query.bias,
                    self_attention.key.bias,
                    self_attention.value.bias
                ],
                dim=0
            )
            qkv_biases = qkv_biases.view(1, -1)

            device = self_attention.query.weight.device
            self.qkv_weights = nn.Parameter(qkv_weights.to(device))
            self.qkv_biases = nn.Parameter(qkv_biases.to(device))

        self.dropout = nn.Dropout(self_attention.dropout.p)
        self.is_decoder = self_attention.is_decoder

        self.softmax = nn.Softmax(dim=-1)

        # Quantization
        self.qconfig = qconfig
        if qconfig:
            self.attention_mask_inf = attention_mask_inf
            self.softmax = QuantizedSoftmax(
                self.softmax,
                qconfig=qconfig,
                tflite_activation_output_scheme=tflite_activation_output_scheme
            )
            self.quant_scores = QuantStub(qconfig)
            self.quant_context = QuantStub(qconfig)

    def transpose_for_scores(self, x):
        new_x_shape = x.size()[:-1] + (self.num_attention_heads, self.attention_head_size)
        x = x.view(*new_x_shape)
        return x.permute(0, 2, 1, 3)

    def forward(
        self,
        hidden_states,
        attention_mask=None,
        head_mask=None,
        encoder_hidden_states=None,
        encoder_attention_mask=None,
        past_key_value=None,
        output_attentions=False,
    ):
        # mixed_query_layer = self.query(hidden_states)

        # # If this is instantiated as a cross-attention module, the keys
        # # and values come from an encoder; the attention mask needs to be
        # # such that the encoder"s padding tokens are not attended to.
        # is_cross_attention = encoder_hidden_states is not None

        # if is_cross_attention and past_key_value is not None:
        #     # reuse k,v, cross_attentions
        #     key_layer = past_key_value[0]
        #     value_layer = past_key_value[1]
        #     attention_mask = encoder_attention_mask
        # elif is_cross_attention:
        #     key_layer = self.transpose_for_scores(self.key(encoder_hidden_states))
        #     value_layer = self.transpose_for_scores(self.value(encoder_hidden_states))
        #     attention_mask = encoder_attention_mask
        # elif past_key_value is not None:
        #     key_layer = self.transpose_for_scores(self.key(hidden_states))
        #     value_layer = self.transpose_for_scores(self.value(hidden_states))
        #     key_layer = torch.cat([past_key_value[0], key_layer], dim=2)
        #     value_layer = torch.cat([past_key_value[1], value_layer], dim=2)
        # else:
        #     key_layer = self.transpose_for_scores(self.key(hidden_states))
        #     value_layer = self.transpose_for_scores(self.value(hidden_states))

        # query_layer = self.transpose_for_scores(mixed_query_layer)

        # if self.is_decoder:
        #     # if cross_attention save Tuple(torch.Tensor, torch.Tensor) of all cross attention key/value_states.
        #     # Further calls to cross_attention layer can then reuse all cross-attention
        #     # key/value_states (first "if" case)
        #     # if uni-directional self-attention (decoder) save Tuple(torch.Tensor, torch.Tensor) of
        #     # all previous decoder key/value_states. Further calls to uni-directional self-attention
        #     # can concat previous decoder key/value_states to current projected key/value_states (third "elif" case)
        #     # if encoder bi-directional self-attention `past_key_value` is always `None`
        #     past_key_value = (key_layer, value_layer)

        if self.use_separate_params:
            query_layer = self.query(hidden_states)
            key_layer = self.key(hidden_states)
            value_layer = self.value(hidden_states)

            query_layer = self.transpose_for_scores(query_layer)
            key_layer = self.transpose_for_scores(key_layer)
            value_layer = self.transpose_for_scores(value_layer)
        else:
            batch_size, seqlen, hidden_dim = hidden_states.shape
            projections = torch.addmm(
                self.qkv_biases,
                hidden_states.view(-1, hidden_dim),
                self.qkv_weights
            )
            projections = projections.view(
                batch_size, seqlen, 3, self.num_attention_heads, self.attention_head_size
            )
            projections = projections.permute(2, 0, 3, 1, 4).contiguous()
            query_layer = projections[0]
            key_layer = projections[1]
            value_layer = projections[2]

        # Take the dot product between "query" and "key" to get the raw attention scores.
        attention_scores = torch.matmul(query_layer, key_layer.transpose(-1, -2))

        if self.use_separate_params:
            attention_scores *= self.normalization_factor

        if attention_mask is not None:
            # Apply the attention mask is (precomputed for all layers in BertModel forward() function)
            if not self.qconfig:
                attention_scores += attention_mask
            else:
                # TODO: clean this.
                attention_mask = torch.clamp(attention_mask, min=-self.attention_mask_inf)
                attention_scores += attention_mask
                # attention_scores = torch.max(
                #     torch.min(attention_scores), attention_scores + attention_mask
                # )

        if self.position_embedding_type == "relative_key" or self.position_embedding_type == "relative_key_query":
            seq_length = hidden_states.size()[1]
            position_ids_l = torch.arange(seq_length, dtype=torch.long, device=hidden_states.device).view(-1, 1)
            position_ids_r = torch.arange(seq_length, dtype=torch.long, device=hidden_states.device).view(1, -1)
            distance = position_ids_l - position_ids_r
            positional_embedding = self.distance_embedding(distance + self.max_position_embeddings - 1)
            positional_embedding = positional_embedding.to(dtype=query_layer.dtype)  # fp16 compatibility

            if self.position_embedding_type == "relative_key":
                relative_position_scores = torch.einsum("bhld,lrd->bhlr", query_layer, positional_embedding)
                attention_scores = attention_scores + relative_position_scores
            elif self.position_embedding_type == "relative_key_query":
                relative_position_scores_query = torch.einsum("bhld,lrd->bhlr", query_layer, positional_embedding)
                relative_position_scores_key = torch.einsum("bhrd,lrd->bhlr", key_layer, positional_embedding)
                attention_scores = attention_scores + relative_position_scores_query + relative_position_scores_key

        if self.qconfig:
            attention_scores = self.quant_scores(attention_scores)

        # print(attention_scores)
        # Normalize the attention scores to probabilities.
        attention_probs = self.softmax(attention_scores)

        # This is actually dropping out entire tokens to attend to, which might
        # seem a bit unusual, but is taken from the original Transformer paper.
        attention_probs = self.dropout(attention_probs)

        # Mask heads if we want to
        if head_mask is not None:
            attention_probs = attention_probs * head_mask

        context_layer = torch.matmul(attention_probs, value_layer)

        if self.qconfig:
            context_layer = self.quant_context(context_layer)

        # if self.use_transpose_for_scores:
        context_layer = context_layer.permute(0, 2, 1, 3).contiguous()
        new_context_layer_shape = context_layer.size()[:-2] + (self.all_head_size,)
        context_layer = context_layer.view(*new_context_layer_shape)

        outputs = (context_layer, attention_probs) if output_attentions else (context_layer,)

        if self.is_decoder:
            outputs = outputs + (past_key_value,)
        return outputs


# class QuantizedLayerNorm(nn.Module):
#     def __init__(self, layer_norm, qconfig: QConfig = None, **kwargs) -> None:
#         super().__init__()
#         self.normalized_shape = layer_norm.normalized_shape
#         self.eps = layer_norm.eps
#         self.elementwise_affine = layer_norm.elementwise_affine
#         if self.elementwise_affine:
#             self.weight = nn.Parameter(layer_norm.weight.detach())
#             self.bias = nn.Parameter(layer_norm.bias.detach())
#         else:
#             self.register_parameter("weight", None)
#             self.register_parameter("bias", None)
#
#         # Quantization
#         self.qconfig = qconfig
#         if qconfig:
#             self.quant1 = QuantStub(qconfig)
#             self.quant2 = QuantStub(qconfig)
#             self.weight_fake_quant = qconfig.weight()
#             self.dequant = DeQuantStub()
#
#     def forward(self, input: torch.Tensor) -> torch.Tensor:
#         # Implemented trying to mimic the TensorFlow BatchNorm implementation:
#         # https://github.com/tensorflow/tensorflow/blob/85c8b2a817f95a3e979ecd1ed95bff1dc1335cff/tensorflow/python/ops/nn_impl.py
#
#         if self.qconfig:
#             input = self.dequant(input)
#
#         mean = torch.mean(input, dim=-1, keepdim=True)
#
#         squared_diff = torch.pow(input - mean, 2)
#
#         # if self.qconfig:
#         #     squared_diff = self.quant1(squared_diff)
#
#         var = torch.mean(squared_diff, dim=-1, keepdim=True)
#
#         if self.qconfig:
#             var = self.quant1(var)
#
#         inv = torch.rsqrt(var + self.eps)
#
#         if self.weight is not None:
#             inv = inv * self.weight_fake_quant(self.weight)
#
#         a = input * inv
#
#         q_mean = self.quant2(mean) if self.qconfig else mean
#         # q_mean = mean
#         b = self.bias - q_mean * inv if self.bias is not None else - q_mean * inv
#
#         return a + b


class QuantizedNoNorm(nn.Module):
    def __init__(self, nonorm, qconfig: QConfig = None, **kwargs):
        super().__init__()
        self.weight = nn.Parameter(nonorm.weight.detach())
        self.bias = nn.Parameter(nonorm.bias.detach())

        self.qconfig = qconfig
        if qconfig:
            self.fake_quant_weight = qconfig.weight().to(nonorm.weight.device)
            self.fake_quant_bias = qconfig.weight().to(nonorm.weight.device)
            self.fake_quant_output = qconfig.activation().to(nonorm.weight.device)

    def forward(self, batch):
        weight = self.fake_quant_weight(self.weight) if self.qconfig else self.weight
        bias = self.fake_quant_bias(self.bias) if self.qconfig else self.bias
        output = batch * weight + bias
        return self.fake_quant_output(output) if self.qconfig else output


class QuantizedLayer2NoNorm(nn.Module):
    # There are two ways to specify how the module will move progressively from a LayerNorm to a NoNorm
    # If you give a non-None schedule_callback, steps and start_delta won"t be used.
    # It must be a function that returns a dictionary containing at least two keys:
    #  - mix : moving from 1.0 to 0.0 , it is the lerp factor between LayerNorm and NoNorm: 1.0 -> LayerNorm, 0.0 -> NoNorm
    #  - delta : moving from 0.99 to 1.0 for example, it is the accumulator exponential decay,
    #   the higher the longer the period it smooth the mean/variance accumulator
    # If you don"t specify a schedule_callback, each call to forward will count as a step, and in "steps" steps
    # it will move to a LayerNorm to a NoNorm

    def __init__(
        self,
        layerNorm,
        qconfig: QConfig = None,
        steps: int = 5000,
        start_delta: float = 0.99,
        schedule_callback=None,
        **kwargs
    ):
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
            self.delta = start_delta
            self.final_delta = 1.0
            self.mix = 1.0
            self.delta_step = (self.final_delta - self.delta) / self.steps
            self.mix_step = 1 / self.steps
        else:
            self.steps = None
            self.delta_step = None
            self.mix_step = None
            self.delta = None
            self.final_delta = None
            self.mix = None

        self.register_buffer("accumulator", torch.zeros(3, device=layerNorm.weight.device))

        self.qconfig = qconfig
        if qconfig:
            self.fake_quant_weight = qconfig.weight()
            self.fake_quant_bias = qconfig.weight()
            self.fake_quant_output = qconfig.activation()

    def forward(self, batch):
        accumulator = self.accumulator.clone()

        if self.schedule_callback is not None:
            d = self.schedule_callback()
            mix = d["mix"]
            delta = d["delta"]
        else:
            if self.training:
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

            if self.training:
                one = torch.tensor(1.0, device=batch_var.device)
                new_acc = torch.stack([batch_mean.mean(), batch_var.mean(), one])
                accumulator = torch.lerp(new_acc, accumulator, delta)

            batch_mean = torch.lerp(accumulator[0] / accumulator[2], batch_mean, mix)
            batch_var = torch.lerp(accumulator[1] / accumulator[2], batch_var, mix)

        ret = (batch - batch_mean) / (batch_var + self.eps).sqrt()
        if self.qconfig:
            weight = self.fake_quant_weight(self.weight)
            bias = self.fake_quant_bias(self.bias)
        else:
            weight = self.weight
            bias = self.bias
        ret = ret * weight + bias
        if self.qconfig:
            ret = self.fake_quant_output(ret)

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


# class QuantizedNoNormCompiler(ModelPatcher):
#     def __init__(self):
#         super().__init__(all_match=True)
#
#     def is_patchable(self, module_name, module, raiseError):
#         return isinstance(module, QuantizedLayer2NoNorm)
#
#     def new_child_module(self, child_module_name, child_module, patch_info):
#         return child_module.compile()


class QATPatcher(ModelPatcher):
    qat_layers = {
        nn.Embedding: QuantizedEmbedding,
        Layer2NoNorm: QuantizedLayer2NoNorm,
        NoNorm: QuantizedNoNorm,
        MaskedLinear: QuantizedMaskedLinear,
        transformers.models.bert.modeling_bert.BertSelfAttention: QuantizedBertSelfAttention,
        nn.Softmax: QuantizedSoftmax,
        nn.Tanh: QuantizedTanh
    }

    def __init__(self, qconfig, layers_to_patch=None, layers_not_to_patch=None, **kwargs):
        super().__init__(all_match=True)
        self.qconfig = qconfig
        self.kwargs = kwargs
        if layers_to_patch is None:
            layers_to_patch = QATPatcher.qat_layers.keys()
        elif not isinstance(layers_to_patch, (list, tuple)):
            layers_to_patch = [layers_to_patch]
        self.layers_to_patch = set(layers_to_patch)
        if layers_not_to_patch is None:
            layers_not_to_patch = []
        elif not isinstance(layers_not_to_patch, (list, tuple)):
            layers_not_to_patch = [layers_not_to_patch]
        self.layers_not_to_patch = set(layers_not_to_patch)
        self.patchable_layers = tuple(self.layers_to_patch - self.layers_not_to_patch)

    def is_patchable(self, module_name, module, raiseError):
        return isinstance(module, self.patchable_layers)

    def new_child_module(self, child_module_name, child_module, patch_info):
        qat_cls = QATPatcher.qat_layers[type(child_module)]
        qat_module = qat_cls(child_module, qconfig=self.qconfig, **self.kwargs)
        return qat_module
