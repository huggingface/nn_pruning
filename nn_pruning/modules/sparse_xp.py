import json
import shutil
from pathlib import Path
from types import SimpleNamespace
import torch
import tempfile

class SparseXP:
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
