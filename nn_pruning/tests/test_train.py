import unittest
from unittest import TestCase

from transformers import BertConfig, BertForQuestionAnswering

from nn_pruning.model_structure import BertStructure
from nn_pruning.modules.masked_nn import (
    ChannelPruningModulePatcher,
    JointPruningModulePatcher,
    LinearPruningModulePatcher,
    LinearPruningParameters,
)
from nn_pruning.training_patcher import BertLinearModelPatcher, PatcherContext


class TestFun(TestCase):
    def test_base(self):
        pass


if __name__ == "__main__":
    unittest.main()
