import operator

import torch
from torch.quantization import (
    float_qparams_weight_only_qconfig,
    get_default_qat_qconfig,
    get_default_qconfig,
)
from torch.quantization.quantize_fx import (
    convert_fx,
    fuse_fx,
    prepare_fx,
    prepare_qat_fx,
)
from transformers.modeling_fx_utils import symbolic_trace

from .quantization_config import create_qconfig


def change_attention_mask_value(traced, initial_value=-10000, final_value=-20):
    """Changes the attention mask initial value (default is -10000) to some smaller value."""
    graph = traced.graph
    for node in graph.nodes:
        if node.target in [torch.mul, operator.mul] and initial_value in node.args:
            new_args = []
            for arg in node.args:
                if arg == initial_value:
                    new_args.append(final_value)
                else:
                    new_args.append(arg)
            node.args = tuple(new_args)
            break

    graph.lint()
    traced.recompile()
    return traced


def broadcast_attention_mask(traced):
    """
    Broadcasts attention_mask to match the shape of attention_scores as broadcasting is not
    supported for quantized add.
    """
    graph = traced.graph
    attention_mask = None
    for node in graph.nodes:
        if (
            node.target in [torch.mul, torch.ops.quantized.mul, operator.mul]
            and len(node.args) > 1
            and node.args[1] < 0
        ):
            attention_mask = node
            break
    if attention_mask is None:
        print("Could not find attention_mask to broadcast.")
        return
    for node in graph.nodes:
        if node.target == torch.ops.quantized.add and attention_mask in node.args:
            attention_scores, mask, *rest = node.args
            with graph.inserting_before(node):
                broadcasted_mask = graph.call_function(
                    torch.broadcast_to, args=(mask, graph.call_method("size", args=(attention_scores,)))
                )
                new_args = []
                for arg in node.args:
                    if arg is mask:
                        new_args.append(broadcasted_mask)
                    else:
                        new_args.append(arg)
                node.args = tuple(new_args)
    graph.lint()
    traced.recompile()
    return traced


def broadcast_nonorm_bias(traced):
    """
    Broadcasts the NoNorm bias to match the shape of the scaled input as broadcasting is not
    supported for quantized add.
    """
    graph = traced.graph
    for node in graph.nodes:
        if node.target == torch.ops.quantized.mul:
            users = list(node.users.keys())
            if len(users) == 1 and users[0].target == torch.ops.quantized.add:
                add_node = users[0]
                with graph.inserting_before(add_node):
                    broadcasted_bias = graph.call_function(
                        torch.broadcast_to,
                        args=(add_node.args[1], graph.call_method("size", args=(add_node.args[0],))),
                    )
                    new_args = add_node.args[:1] + (broadcasted_bias,) + add_node.args[2:]
                    add_node.args = tuple(new_args)

    graph.lint()
    traced.recompile()
    return traced


def _prepare(
    model,
    training,
    torch_prepare_fn,
    input_names=None,
    batch_size=1,
    sequence_length=128,
    num_choices=-1,
    qconfig_dict=None,
):
    """Helper function that prepares the model for either static quantization or QAT."""
    if training:
        model.train()
    else:
        model.eval()

    traced = symbolic_trace(
        model, input_names=input_names, batch_size=batch_size, sequence_length=sequence_length, num_choices=num_choices
    )

    change_attention_mask_value(traced)
    prepare_custom_config_dict = {"preserved_attributes": ["config", "dummy_inputs"]}
    prepared_model = torch_prepare_fn(traced, qconfig_dict, prepare_custom_config_dict)

    return prepared_model


def prepare_static(
    model,
    input_names=None,
    batch_size=1,
    sequence_length=128,
    num_choices=-1,
    qconfig_name=None,
    qconfig_dict=None,
):
    if qconfig_name and qconfig_dict:
        raise ValueError("either specify a qconfig name or a qconfig dict, but not both")
    if qconfig_name is None and qconfig_dict is None:
        raise ValueError("a qconfig name or a qconfig dict need to be specified")
    if qconfig_name:
        qconfig_dict = create_qconfig(qconfig_name, mode="static")

    return _prepare(
        model,
        False,
        prepare_fx,
        input_names=input_names,
        batch_size=batch_size,
        sequence_length=sequence_length,
        num_choices=num_choices,
        qconfig_dict=qconfig_dict,
    )


def prepare_qat(
    model,
    input_names=None,
    batch_size=1,
    sequence_length=128,
    num_choices=-1,
    qconfig_name=None,
    qconfig_dict=None,
):
    if qconfig_name and qconfig_dict:
        raise ValueError("either specify a qconfig name or a qconfig dict, but not both")
    if qconfig_name is None and qconfig_dict is None:
        raise ValueError("a qconfig name or a qconfig dict need to be specified")
    if qconfig_name:
        qconfig_dict = create_qconfig(qconfig_name, mode="qat")

    return _prepare(
        model,
        True,
        prepare_qat_fx,
        input_names=input_names,
        batch_size=batch_size,
        sequence_length=sequence_length,
        num_choices=num_choices,
        qconfig_dict=qconfig_dict,
    )


def quantize(prepared_model):
    """Quantizes a prepared model."""
    prepared_model.eval()

    convert_custom_config_dict = {"preserved_attributes": ["config", "dummy_inputs"]}
    model_int8 = convert_fx(prepared_model, convert_custom_config_dict=convert_custom_config_dict)

    broadcast_attention_mask(model_int8)
    broadcast_nonorm_bias(model_int8)
    return model_int8
