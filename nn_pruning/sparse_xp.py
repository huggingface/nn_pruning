import json
import shutil
from pathlib import Path
from types import SimpleNamespace
import torch
import tempfile
from nn_pruning.patch_coordinator import ModelPatchingCoordinator
from nn_pruning.inference_model_patcher import optimize_model

class SparseXP:
    def __init__(self):
        self.patch_coordinator = self.create_patching_coordinator(self.sparse_args,
                                                                  self.training_args.device,
                                                                  self.model_args.cache_dir)


    @classmethod
    def create_patching_coordinator(cls, sparse_args, device, cache_dir):
        return ModelPatchingCoordinator(sparse_args,
                                        device=device,
                                        cache_dir=cache_dir,
                                        logit_names=cls.LOGIT_NAMES,
                                        teacher_constructor=cls.CONSTRUCTOR)

    def setup_trainer(self, *args, **kwargs):
        self.trainer.set_patch_coordinator(self.patch_coordinator)

    def unzero_parameters(self, model, epsilon=0.01):
        # Used to avoid zero gradients when doing final finetune on sparse networks that we want to extend
        # Make sure some parts are not completely zero
        for k, v in model.named_parameters():
            if "bias" in k:
                continue
            zero_mask = v == 0
            if zero_mask.sum() == 0:
                continue

            with torch.no_grad():
                print("unzero_parameters", k, "sparsity=", zero_mask.sum() / zero_mask.numel(), zero_mask.shape)
                new_values = torch.randn_like(v)
                new_values *= v.std() * epsilon
                new_values += v.mean()
                new_values *= zero_mask
                v.copy_(v + new_values)
        return model

    def model_init(self, trial=None):
        if self.sparse_args.final_finetune:
            model = self.compile_model(self.model_args.model_name_or_path)
            model = optimize_model(model, "dense")
            model = self.unzero_parameters(model)
        else:
            model = super().model_init(trial)
            self.patch_coordinator.patch_model(model, trial)
        return model

    @classmethod
    def compile_model(cls, src_path, dest_path=None):
        src_path = Path(src_path)
        if dest_path is not None:
            dest_path = Path(dest_path)
        model_bin_name = "pytorch_model.bin"

        def load_json_to_obj(name):
            with (src_path / name).open() as f:
                return json.load(f, object_hook=lambda d: SimpleNamespace(**d))

        current_config = src_path / "config.json"
        up_config = (src_path.parent) / "config.json"

        if not current_config.exists():
            shutil.copy(up_config, current_config)

        with current_config.open() as f:
            model_config = json.load(f)

        model_args = load_json_to_obj("model_args.json")
        sparse_args = load_json_to_obj("sparse_args.json")

        if hasattr(sparse_args, "final_finetune") and sparse_args.final_finetune:
            if dest_path is None:
                with tempfile.TemporaryDirectory() as dest_path:
                    return cls.final_fine_tune_bertarize(src_path, dest_path)
            else:
                return cls.final_fine_tune_bertarize(src_path, dest_path)

        model_args.model_name_or_path = str(src_path)

        model = cls._model_init(model_args, model_config)
        patcher = cls.create_patching_coordinator(sparse_args=sparse_args, device="cuda", cache_dir=None)

        patcher.patch_model(model, trial=None)

        state_dict = torch.load(src_path / model_bin_name)
        model.load_state_dict(state_dict, strict=True)

        patcher.compile_model(model)

        if dest_path is not None:
            shutil.copytree(src_path, dest_path, dirs_exist_ok=True)
            # Save the config (may have been modified by compile_model to add layer_norm=no_norm )
            model.config.save_pretrained(dest_path)
            # Override the
            state_dict = model.state_dict()
            torch.save(state_dict, dest_path / model_bin_name)

        return model

    @classmethod
    def final_fine_tune_bertarize(cls, src_path, dest_path, remove_head_pruning = False):
        src_path = Path(src_path)
        assert (dest_path is not None)
        dest_path = Path(dest_path)

        with (src_path / "config.json").open() as f:
            config = json.load(f)

        hidden_size = config["hidden_size"]

        m = torch.load(src_path / "pytorch_model.bin")

        new_m = {}
        # TODO : depends on the network
        ffn_multiplier = 4

        for k, v in m.items():
            correct_shape = None
            if k.endswith("intermediate.dense.linear.weight") or k.endswith("intermediate.dense.weight"):
                correct_shape = (hidden_size * ffn_multiplier, hidden_size)
            elif k.endswith("intermediate.dense.linear.bias") or k.endswith("intermediate.dense.bias"):
                correct_shape = (hidden_size * ffn_multiplier,)
            elif k.endswith("output.dense.linear.weight") or (
                    k.endswith("output.dense.weight") and "attention" not in k):
                correct_shape = (hidden_size, hidden_size * ffn_multiplier)
            elif k.endswith("output.dense.linear.bias") or k.endswith("output.dense.bias"):
                correct_shape = (hidden_size,)
            elif "attention" in k and "LayerNorm" not in k and remove_head_pruning:
                if "weight" in k:
                    correct_shape =  (hidden_size, hidden_size)
                elif "bias" in k:
                    correct_shape =  (hidden_size,)
                else:
                    raise Exception("Unhandled case")

            if correct_shape is not None:
                print(k, v.shape, correct_shape)
                k = k.replace("linear.", "")
            else:
                print(k, "unchanged", v.shape)


            if correct_shape is not None and v.shape != correct_shape:
                z = torch.zeros(correct_shape, device=v.device)
                if len(correct_shape) == 1:
                    z[:v.shape[0]] = v
                else:
                    z[:v.shape[0], :v.shape[1]] = v
                v = z

            new_m[k] = v

        shutil.copytree(src_path, dest_path, dirs_exist_ok=True)

        if remove_head_pruning:
            del config["pruned_heads"]
            with (dest_path / "config.json").open("w") as f:
                json.dump(config, f)

        torch.save(new_m, dest_path / "pytorch_model.bin")

        # Final check : try to load the network
        model = cls.CONSTRUCTOR.from_pretrained(dest_path, from_tf=False)

        return model
