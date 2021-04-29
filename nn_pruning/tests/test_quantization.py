import unittest

from transformers import AutoModelForQuestionAnswering, AutoTokenizer

from nn_pruning.modules.quantization import (
    prepare_qat,
    prepare_static,
    quantize,
)


class TestQuantization(unittest.TestCase):
    def _test_quantization(self, prepare_fn):
        model_name = "bert-base-uncased"
        tokenizer = AutoTokenizer.from_pretrained(model_name)
        model = AutoModelForQuestionAnswering.from_pretrained(model_name)
        prepared_model = prepare_fn(
            model, input_names=["input_ids", "attention_mask", "token_type_ids"], qconfig_name="default"
        )
        prepared_model(**prepared_model.dummy_inputs)
        quantized = quantize(prepared_model)
        quantized(**prepared_model.dummy_inputs)

    def test_static_quantization(self):
        self._test_quantization(prepare_static)

    def test_qat(self):
        self._test_quantization(prepare_qat)
