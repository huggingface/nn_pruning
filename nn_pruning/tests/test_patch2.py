import unittest
from unittest import TestCase
from nn_pruning.patch_coordinator import SparseTrainingArguments, ModelPatchingCoordinator

from transformers import BertConfig, BertForQuestionAnswering, AutoModelForQuestionAnswering
import copy

class TestFun(TestCase):
    def helper(self, sparse_args):
        config = BertConfig.from_pretrained("bert-base-uncased")
        model = BertForQuestionAnswering(config)

        device = "cuda"
        cache_dir = None
        logit_names = ["start_logits", "end_logits"]
        teacher_constructor = AutoModelForQuestionAnswering

        coordinator = ModelPatchingCoordinator(sparse_args, device, cache_dir, logit_names, teacher_constructor)

        return config, model, coordinator

    def test_base(self):
        sparse_args = SparseTrainingArguments.hybrid(20.0)
        sparse_args.layer_norm_patch = True
        sparse_args.gelu_patch = True

        config, model, coordinator = self.helper(sparse_args)

        coordinator.patch_model(model)

        ref_stats = {'main': {'patched': 72}, 'layer_norm': {'patched': 25}, 'gelu': {'patched': 12}}

        stats = copy.deepcopy(coordinator.stats)

        print(stats["main"])
        for k in stats:
            del stats[k]["patched_names"]

        self.assertEqual(stats, ref_stats)


if __name__ == "__main__":
    unittest.main()
