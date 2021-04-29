import copy

import torch
from torch.quantization import (
    FakeQuantize,
    MinMaxObserver,
    MovingAverageMinMaxObserver,
    QConfig,
    float_qparams_weight_only_qconfig,
    get_default_qat_qconfig,
    get_default_qconfig,
)

# TensorFlow Lite Quantization Specs
# https://www.tensorflow.org/lite/performance/quantization_spec?hl=en
# For activations: int8 asymmetric per-tensor [-128, 127] range
# For weights: int8 symmetric per-tensor [-127, 127] range
_TFLITE_QCONFIG = QConfig(
    activation=MovingAverageMinMaxObserver.with_args(
        dtype=torch.qint8,
        quant_min=-128,
        quant_max=127,
        qscheme=torch.per_tensor_affine,
    ),
    weight=MinMaxObserver.with_args(
        dtype=torch.qint8, quant_min=-127, quant_max=127, qscheme=torch.per_tensor_symmetric
    ),
)
_TFLITE_QAT_QCONFIG = QConfig(
    activation=FakeQuantize.with_args(
        observer=MovingAverageMinMaxObserver,
        dtype=torch.qint8,
        quant_min=-128,
        quant_max=127,
        qscheme=torch.per_tensor_affine,
    ),
    weight=FakeQuantize.with_args(
        observer=MinMaxObserver, dtype=torch.qint8, quant_min=-127, quant_max=127, qscheme=torch.per_tensor_symmetric
    ),
)
_ONNX_QCONFIG = QConfig(
    activation=MinMaxObserver.with_args(
        quant_min=0,
        quant_max=255,
        reduce_range=True,
    ),
    weight=MinMaxObserver.with_args(
        quant_min=-128, quant_max=127, dtype=torch.qint8, reduce_range=False, qscheme=torch.per_tensor_symmetric
    ),
)
_ONNX_QAT_QCONFIG = QConfig(
    activation=FakeQuantize.with_args(
        observer=MinMaxObserver,
        quant_min=0,
        quant_max=255,
        reduce_range=True,
    ),
    weight=FakeQuantize.with_args(
        observer=MinMaxObserver,
        quant_min=-128,
        quant_max=127,
        dtype=torch.qint8,
        reduce_range=False,
        qscheme=torch.per_tensor_symmetric,
    ),
)

_QCONFIG_DICT = {"object_type": [(torch.nn.Embedding, float_qparams_weight_only_qconfig)]}

_QAT_QCONFIG_DICT = {"object_type": [(torch.nn.Embedding, float_qparams_weight_only_qconfig)]}

_QCONFIG_MAPPING = {
    "default": "fbgemm",
    "mobile": "qnnpack",
    "fbgemm": "fbgemm",
    "qnnpack": "qnnpack",
    "tflite": _TFLITE_QCONFIG,
    "onnx": _ONNX_QCONFIG,
}

_QAT_QCONFING_MAPPING = {
    "default": "fbgemm",
    "mobile": "qnnpack",
    "fbgemm": "fbgemm",
    "qnnpack": "qnnpack",
    "tflite": _TFLITE_QAT_QCONFIG,
    "onnx": _ONNX_QAT_QCONFIG,
}


def create_qconfig(qconfig_name, mode):
    mode = mode.lower()
    if mode not in ["static", "qat"]:
        raise ValueError(f"mode must either be static or qat, here: {mode}")

    mapping = _QCONFIG_MAPPING if mode == "static" else _QAT_QCONFING_MAPPING
    qconfig = mapping.get(qconfig_name, None)
    if isinstance(qconfig, str):
        qconfig_function = get_default_qconfig if mode == "static" else get_default_qat_qconfig
        qconfig = qconfig_function(qconfig)
    if qconfig is None:
        raise ValueError(f"qconfig name must be in {mapping.keys()}, but {qconfig_name} was provided")
    qconfig_dict = _QCONFIG_DICT if mode == "static" else _QAT_QCONFIG_DICT
    qconfig_dict = copy.deepcopy(qconfig_dict)
    qconfig_dict[""] = qconfig
    return qconfig_dict
