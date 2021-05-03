import unittest
from unittest import TestCase
from nn_pruning.patch_coordinator import SparseTrainingArguments, ModelPatchingCoordinator
from nn_pruning.modules.masked_nn import (
    GenericLinearPruningContextModule,
    BlockLinearPruningContextModule,
    SingleDimensionLinearPruningContextModule,
)
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

    def test_context_module(self):
        sparse_args = SparseTrainingArguments.hybrid(20.0)
        sparse_args.layer_norm_patch = True
        sparse_args.gelu_patch = True

        ref_context_module = {
            "bert-base-uncased":  {"generic": 60, "block": 48, "single": 12},
            "bert-large-uncased": {"generic": 120, "block": 96, "single": 24},
            "facebook/bart-base": {"generic": 84, "block": 72, "single": 12},
        }

        for model_name_or_path in ref_context_module.keys():
            config, model, coordinator = self.helper(sparse_args, model_name_or_path)

            coordinator.patch_model(model)

            context_module = {"generic": 0, "block": 0, "single": 0}

            for name, module in model.named_modules():
                if isinstance(module, GenericLinearPruningContextModule):
                    context_module["generic"] += 1
                    if isinstance(module, BlockLinearPruningContextModule):
                        context_module["block"] += 1
                    elif isinstance(module, SingleDimensionLinearPruningContextModule):
                        context_module["single"] += 1

            self.assertEqual(context_module, ref_context_module[model_name_or_path])


if __name__ == "__main__":
    unittest.main()
