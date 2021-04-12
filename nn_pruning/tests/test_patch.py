import unittest
from unittest import TestCase

from transformers import BertConfig, BertForQuestionAnswering

from nn_pruning.model_structure import BertStructure
from nn_pruning.modules.masked_nn import (
    ChannelPruningModulePatcher,
    JointPruningModulePatcher,
    LinearPruningArgs,
    LinearPruningModulePatcher,
    LinearPruningArgs,
)
from nn_pruning.training_patcher import LinearModelPatcher, PatcherContext


class TestFun(TestCase):
    MODEL_STRUCTURE = BertStructure
    def test_base(self):
        config = BertConfig.from_pretrained("bert-base-uncased")
        model = BertForQuestionAnswering(config)

        patcher = LinearModelPatcher({}, self.MODEL_STRUCTURE)
        layers = patcher.get_patchable_layers(model)
        # for regexp, layers in layers.items():
        #    print(regexp)

    def test_patch_module_independent_parameters(self):
        config = BertConfig.from_pretrained("bert-base-uncased")
        model = BertForQuestionAnswering(config)

        parameters = LinearPruningArgs(
            method="topK",
            submethod="default",
            ampere_method="disabled",
            block_rows=32,
            block_cols=32,
            min_elements=0.005,
        )

        context = PatcherContext()

        p = LinearPruningModulePatcher(context, parameters, self.MODEL_STRUCTURE)

        module_patchers = dict(query=p, key=p, value=p, att_dense=p, interm_dense=p, output_dense=p)

        patcher = LinearModelPatcher(module_patchers, self.MODEL_STRUCTURE)
        patcher.patch(model)

        self.assertEqual(patcher.stats["patched"], 72)
        key_sizes = {k: len(v) for k, v in context.context_modules.items()}

        self.assertEqual(key_sizes, {"mask": 72})

    def test_patch_module_ampere(self):
        config = BertConfig.from_pretrained("bert-base-uncased")
        model = BertForQuestionAnswering(config)

        parameters = LinearPruningArgs(
            method="topK",
            submethod="default",
            ampere_method="annealing",
            block_rows=32,
            block_cols=32,
            min_elements=0.005,
        )

        context = PatcherContext()

        p = LinearPruningModulePatcher(context, parameters, self.MODEL_STRUCTURE)

        module_patchers = dict(query=p, key=p, value=p, att_dense=p, interm_dense=p, output_dense=p)

        patcher = LinearModelPatcher(module_patchers, self.MODEL_STRUCTURE)
        patcher.patch(model)

        self.assertEqual(patcher.stats["patched"], 72)
        key_sizes = {k: len(v) for k, v in context.context_modules.items()}

        self.assertEqual(key_sizes, {"ampere_mask": 72, "mask": 72})

    def test_patch_module_tied_attention(self):
        config = BertConfig.from_pretrained("bert-base-uncased")
        model = BertForQuestionAnswering(config)

        parameters = LinearPruningArgs(
            method="topK",
            submethod="default",
            ampere_method="annealing",
            block_rows=32,
            block_cols=32,
            min_elements=0.005,
        )

        context = PatcherContext()

        p_attention = JointPruningModulePatcher(context, parameters, self.MODEL_STRUCTURE, "attention")
        p_dense = LinearPruningModulePatcher(context, parameters, self.MODEL_STRUCTURE)

        module_patchers = dict(
            query=p_attention,
            key=p_attention,
            value=p_attention,
            att_dense=p_dense,
            interm_dense=p_dense,
            output_dense=p_dense,
        )

        patcher = LinearModelPatcher(module_patchers, self.MODEL_STRUCTURE)
        patcher.patch(model)

        self.assertEqual(patcher.stats["patched"], 72)
        key_sizes = {k: len(v) for k, v in context.context_modules.items()}

        self.assertEqual(key_sizes, {"ampere_mask": 72, "mask": 48})

    def test_patch_tiedattention_line_pruning(self):
        config = BertConfig.from_pretrained("bert-base-uncased")
        model = BertForQuestionAnswering(config)

        parameters_attention = LinearPruningArgs(
            method="topK",
            submethod="default",
            ampere_method="annealing",
            block_rows=32,
            block_cols=32,
            min_elements=0.005,
        )

        parameters_dense = LinearPruningArgs(
            method="topK", submethod="1d", ampere_method="annealing", block_rows=32, block_cols=32, min_elements=0.005
        )

        context = PatcherContext()

        p_attention = JointPruningModulePatcher(context, parameters_attention, self.MODEL_STRUCTURE, suffix=".attention")
        p_dense = ChannelPruningModulePatcher(context, parameters_dense, self.MODEL_STRUCTURE, suffix="dense")

        module_patchers = dict(
            query=p_attention,
            key=p_attention,
            value=p_attention,
            att_dense=p_dense,
            interm_dense=p_dense,
            output_dense=p_dense,
        )

        patcher = LinearModelPatcher(module_patchers, self.MODEL_STRUCTURE)
        patcher.patch(model)

        self.assertEqual(patcher.stats["patched"], 72)
        key_sizes = {k: len(v) for k, v in context.context_modules.items()}

        for k, v in key_sizes.items():
            print(k, v)

        for k, v in context.context_modules.items():
            print(k, v)
        self.assertEqual(key_sizes, {"ampere_mask": 72, "mask": 12, "mask_1d": 48})


if __name__ == "__main__":
    unittest.main()
