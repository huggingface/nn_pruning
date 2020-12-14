import unittest
from unittest import TestCase
from transformers import (
    BertConfig,
    BertForQuestionAnswering,
)

from nn_pruning.modules.masked_nn import (
    LinearPruningModulePatcher,
    LinearPruningParameters,
    JointPruningModulePatcher,
    ChannelPruningModulePatcher
)

from nn_pruning.training_patcher import BertLinearModelPatcher, PatcherContext

from nn_pruning.model_structure import BertStructure


class TestFun(TestCase):
    def test_base(self):

if __name__ == "__main__":
    unittest.main()
