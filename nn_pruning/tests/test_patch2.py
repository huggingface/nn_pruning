import unittest
from unittest import TestCase
from nn_pruning.patch_coordinator import SparseTrainingArguments, ModelPatchingCoordinator

from transformers import AutoConfig, AutoModelForQuestionAnswering

import copy

class TestFun(TestCase):
    def helper(self, sparse_args, model_name_or_path):
        config = AutoConfig.from_pretrained(model_name_or_path)
        model = AutoModelForQuestionAnswering.from_pretrained(model_name_or_path)

        device = "cuda"
        cache_dir = None
        logit_names = ["start_logits", "end_logits"]
        teacher_constructor = AutoModelForQuestionAnswering

        coordinator = ModelPatchingCoordinator(sparse_args, device, cache_dir, model_name_or_path, logit_names, teacher_constructor)

        return config, model, coordinator

    def test_base(self):
        sparse_args = SparseTrainingArguments.hybrid(20.0)
        sparse_args.layer_norm_patch = True
        sparse_args.gelu_patch = True

        ref_stats = {
            "bert-base-uncased":  {"main": {"patched": 72},  "layer_norm": {"patched": 25}, "gelu": {"patched": 12}},
            "bert-large-uncased": {"main": {"patched": 144}, "layer_norm": {"patched": 49}, "gelu": {"patched": 24}},
            "facebook/bart-base": {"main": {"patched": 96},  "layer_norm": {"patched": 32}, "gelu": {"patched": 12}}
        }

        for model_name_or_path in ref_stats.keys():
            config, model, coordinator = self.helper(sparse_args, model_name_or_path)

            coordinator.patch_model(model)

            stats = copy.deepcopy(coordinator.stats)

            print(stats["main"])
            for k in stats:
                del stats[k]["patched_names"]

            self.assertEqual(stats, ref_stats[model_name_or_path])


if __name__ == "__main__":
    unittest.main()
