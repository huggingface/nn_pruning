from .model_patcher import ModelPatcher
import torch
import torch.nn as nn


class BertHeadsPruner:
    def __init__(self, model):
        self.model = model

    def analyze_head(self, p, head_size):
        p0 = (p != 0).reshape(p.shape[0] // head_size, head_size, p.shape[1]).any(-1).any(-1)
        return p0

    def get_pruned_heads(self):
        heads_count = 0
        to_prune = {}
        for name, module in self.model.named_modules():
            if name.endswith("attention.self"):
                layer_number = int("".join(ch for ch in name if ch.isnumeric()))
                parts = []
                for a in ["value", "query", "key"]:
                    p = self.analyze_head(getattr(module, a).weight, module.attention_head_size)
                    parts.append(p)
                parts = list(torch.stack(parts, 0).all(0).cpu().detach().numpy())
                heads_count += len(parts)

                heads_to_prune = [i for i, p in enumerate(parts) if not p]
                # TEMPORARY : AT LEAST KEEP ONE HEAD
                if len(heads_to_prune) == len(parts):
                    heads_to_prune.remove(0)

                to_prune[layer_number] = heads_to_prune
        return to_prune, heads_count

    def run(self):
        model = self.model

        to_prune, heads_count = self.get_pruned_heads()

        model.prune_heads(to_prune)
        return sum([len(p) for p in to_prune.values()]), heads_count


class SparseDimensionsLinear(nn.Module):
    def __init__(self, in_features, out_features, weight, bias, input_extract, output_expand, name=None):
        super().__init__()
        self.name = name
        self.in_features = in_features
        self.out_features = out_features

        self.register_buffer("input_extract", input_extract)
        self.register_buffer("output_expand", output_expand)

        new_linear = torch.nn.Linear(weight.shape[1], weight.shape[0], bias=True).to(weight.device)
        with torch.no_grad():
            new_linear.weight.copy_(weight)
            new_linear.bias.copy_(bias)
        self.linear = new_linear

    @classmethod
    def get_sparsity(cls, w, dim, prune):
        if prune:
            l = (w != 0).sum(dim)
            nnz = (l != 0).sum()
            idx = l.nonzero(as_tuple=False).squeeze(-1)
            # print(idx.shape, idx.shape[0])
            # TEMPORARY : NON EMPTY MATRICE
            if idx.shape[0] == 0:
                idx = torch.tensor([0], device=idx.device)
                nnz = 1
            return 1.0 - (float(nnz) / l.numel()), idx
        else:
            return 0.0, None

    @classmethod
    def create(
        cls,
        linear,
        prune_input=True,
        prune_output=True,
        input_keep_dimension=True,
        output_keep_dimension=True,
        name=None,
    ):
        weight = linear.weight.detach()
        c_sparsity, c = cls.get_sparsity(weight, 0, prune_input)
        r_sparsity, r = cls.get_sparsity(weight, 1, prune_output)
        in_features = linear.in_features
        out_features = linear.out_features

        if c_sparsity != 0 and input_keep_dimension:
            input_extract = c
        else:
            input_extract = None

        if r_sparsity != 0 and output_keep_dimension:
            output_expand = r
        else:
            output_expand = None

        sparsity = max(r_sparsity, c_sparsity) * 100
        print(f"{name}, sparsity = {sparsity:0.2f}")

        if r is not None:
            weight = weight[r, :]
        if c is not None:
            weight = weight[:, c]

        bias = linear.bias.detach()
        if r is not None:
            bias = bias[r]

        if input_extract is None and output_expand is None:
            new_linear = torch.nn.Linear(weight.shape[1], weight.shape[0], bias=True).to(weight.device)
            with torch.no_grad():
                new_linear.weight.copy_(weight)
                new_linear.bias.copy_(bias)
            ret = new_linear
        else:
            ret = SparseDimensionsLinear(in_features, out_features, weight, bias, input_extract, output_expand, name)

        return ret

    def forward(self, batch):
        if self.input_extract is not None:
            batch = batch[..., self.input_extract]

        batch = self.linear(batch)

        if self.output_expand is not None:
            output_shape = list(batch.shape)
            output_shape[-1] = self.out_features
            output = torch.zeros(output_shape, device=batch.device)
            output[..., self.output_expand] = batch
            batch = output
        return batch


class InferenceModelPatcher(ModelPatcher):
    def __init__(self, prune_heads=False, mode="dense"):
        super().__init__()
        self.prune_heads = prune_heads
        self.mode = mode

    def is_patchable(self, module_name, module, raiseError):
        if isinstance(module, torch.nn.Linear):
            return True
        else:
            if raiseError:
                raise Exception(f"Cannot patch {module_name}: this is not a Linear layer:\n{module}")
            return False

    def new_child_module_block_sparse(self, child_module_name, child_module, patch_info):
        from pytorch_block_sparse.block_sparse_linear import BlockSparseLinear, PseudoBlockSparseLinear

        density = patch_info.get("density")
        pseudo = patch_info.get("pseudo_linear")
        if pseudo:
            patch_type = "PseudoBlockSparseLinear (debug)"
        else:
            patch_type = "BlockSparseLinear"

        self.is_patchable(child_module_name, child_module, raiseError=True)
        print(
            f"Patching with {patch_type} '{child_module_name}' with density={density}, in={child_module.in_features},"
            f" out={child_module.out_features},bias={child_module.bias is not None} "
        )
        ret = BlockSparseLinear(0, 0, False, torch_nn_linear=child_module, density=density)
        if pseudo:
            ret = PseudoBlockSparseLinear(ret)

        return ret

    def get_sparsity(self, w, dim):
        r = (w != 0).sum(dim)
        nnz = (r != 0).sum()
        return 1.0 - (nnz / r.numel()), r != 0

    def new_child_module_dense(self, child_module_name, child_module, patch_info):
        input_keep_dimension = patch_info.get("input_keep_dimension", True)
        prune_input = patch_info.get("prune_input", True)
        output_keep_dimension = patch_info.get("output_keep_dimension", True)
        prune_output = patch_info.get("prune_output", True)

        # print(child_module_name, input_keep_dimension, output_keep_dimension)

        return SparseDimensionsLinear.create(
            child_module,
            input_keep_dimension=input_keep_dimension,
            output_keep_dimension=output_keep_dimension,
            name=child_module_name,
            prune_input=prune_input,
            prune_output=prune_output,
        )

    def new_child_module(self, child_module_name, child_module, patch_info):
        # print("new_child_module", child_module_name)
        if self.mode == "block_sparse":
            return self.new_child_module_block_sparse(child_module_name, child_module, patch_info)
        elif self.mode == "dense":
            return self.new_child_module_dense(child_module_name, child_module, patch_info)
        elif self.mode == "heads":
            return None
        else:
            raise Exception(f"Unknown mode {self.mode}")

    def patch_model(self, model):
        if self.prune_heads:
            pruner = BertHeadsPruner(model)
            removed_heads, total_heads = pruner.run()
            print(
                f"removed heads {removed_heads}, total_heads={total_heads}, percentage removed={removed_heads/total_heads}"
            )

        super().patch(model)

def optimize_model(model, mode, clone=True):
    """mode in ["dense", "heads", "block_sparse"]"""
    import copy

    assert mode != "disabled"
    if clone == True:
        model = copy.deepcopy(model)

    params = {}
    for name, parameter in model.named_parameters():
        params[name] = parameter

    # Further prune
    for layer_number in range(12):
        n0 = f"bert.encoder.layer.{layer_number}.intermediate.dense.weight"
        n1 = f"bert.encoder.layer.{layer_number}.output.dense.weight"

        output_mask = params[n0].abs().sum(1) == 0
        input_mask = params[n1].abs().sum(0) == 0

        with torch.no_grad():
            params[n0][input_mask] = 0
            params[n1][:, output_mask] = 0

    # Create a model patcher
    mp = InferenceModelPatcher(prune_heads=True, mode=mode)
    #    for l in mp.get_patchable_layers(model):
    #        print(l)
    # mp.add_pattern("bert\\.encoder\\.layer\\.[0-9+]\\.attention\\.self\\.(query|key|value)", {})
    # mp.add_pattern("bert\\.encoder\\.layer\\.[0-9]+\\.attention\\.output\\.dense", {})
    mp.add_pattern(
        "bert\\.encoder\\.layer\\.[0-9]+\\.intermediate\\.dense",
        {"input_keep_dimension": True, "output_keep_dimension": False, "prune_input":False, "prune_output":True},
    )
    mp.add_pattern(
        "bert\\.encoder\\.layer\\.[0-9]+\\.output\\.dense",
        {"output_keep_dimension": True, "input_keep_dimension": False, "prune_input":True, "prune_output":False},
    )

    mp.patch_model(model)

    if hasattr(model.config, "layer_norm_type") and model.config.layer_norm_type == "no_norm":
        from nn_pruning.modules.nonorm import NoNormPatcher
        nnc = NoNormPatcher()
        nnc.patch(model)

    return model
