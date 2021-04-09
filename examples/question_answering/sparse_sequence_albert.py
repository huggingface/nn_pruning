from transformers.modeling_outputs import  BaseModelOutput
import torch.nn as nn
import torch
from nn_pruning.model_patcher import ModelPatcher
from transformers import AutoModelForQuestionAnswering
from torch import autograd

class PatchedAlbertTransformer(nn.Module):
    def forward(
        self,
        hidden_states,
        attention_mask=None,
        head_mask=None,
        output_attentions=False,
        output_hidden_states=False,
        return_dict=True,
    ):
        hidden_states = self.embedding_hidden_mapping_in(hidden_states)

        all_hidden_states = (hidden_states,) if output_hidden_states else None
        all_attentions = () if output_attentions else None

        for i in range(self.config.num_hidden_layers):
            # Number of layers in a hidden group
            layers_per_group = int(self.config.num_hidden_layers / self.config.num_hidden_groups)

            # Index of the hidden group
            group_idx = int(i / (self.config.num_hidden_layers / self.config.num_hidden_groups))

            layer_group_output = self.albert_layer_groups[group_idx](
                hidden_states,
                attention_mask,
                head_mask[group_idx * layers_per_group : (group_idx + 1) * layers_per_group],
                output_attentions,
                output_hidden_states,
            )
            hidden_states = layer_group_output[0]

            if output_attentions:
                all_attentions = all_attentions + layer_group_output[-1]

            if output_hidden_states:
                all_hidden_states = all_hidden_states + (hidden_states,)

        if not return_dict:
            return tuple(v for v in [hidden_states, all_hidden_states, all_attentions] if v is not None)
        return BaseModelOutput(
            last_hidden_state=hidden_states, hidden_states=all_hidden_states, attentions=all_attentions
        )


def scatter_(dest, dim, index, src):
    assert(index.max() < dest.shape[dim])
    assert(index.shape == src.shape)
    dest.scatter_(dim=dim, index=index,src=src)

def extract(h, a, m):
    # Extract from h and a the elements marked with mask and return them
    # Return too the reverse mapping to scatter new_h back to h:
    #   - shape is h.shape[:2]
    #   - used with unextract
    #   - index are between 0 and h.shape[1] inclusive , this is useful as some lines in new_h are not complete,
    #     so we scatter the invalid elements to a dummy 'h.shape[1]' index
    #     See the code from unextract : you need an intermediary array with a additional element in the second dimension
    device = h.device
    batch_size = h.shape[0]
    seq_len = h.shape[1]
    max_len = m.sum(-1).max()
    new_a = torch.ones(batch_size, max_len + 1, dtype=torch.float, device=device) * a.min()
    new_h = torch.zeros((batch_size, max_len + 1, h.shape[2]), dtype=torch.float, device=device)

    c = (m.cumsum(-1)) * m
    scatter_(new_a, dim=1, index=c, src=a)
    #new_a.scatter_(dim=1, index=c, src=a)
    new_a = new_a[:, 1:]

    ar = torch.arange(seq_len,device=device).unsqueeze(0).repeat((batch_size, 1))
    index = torch.ones(batch_size, max_len + 1, dtype=torch.long, device=device) * seq_len

    scatter_(index, dim=1, index=c, src=ar)
    #index.scatter_(dim=1, index=c, src=ar)
    index = index[:, 1:]

    c = c.unsqueeze(-1).repeat((1, 1, h.shape[2]))

    scatter_(new_h, dim=1, index=c, src=h)
    #new_h.scatter_(dim=1, index=c, src=h)
    new_h = new_h[:, 1:]

    return new_h, new_a, index

def unextract(large_h, small_h, index):
    # add a 'trashbin' element at the end of the dimension 1 (sequence length)
    device = large_h.device
    dtype = large_h.dtype
    dest = large_h.clone()
    if len(large_h.shape) == 3:
        new_elements = torch.zeros((large_h.shape[0],1,large_h.shape[2]), dtype=dtype, device=device)
        index = index.unsqueeze(-1).repeat((1,1,large_h.shape[2]))
    elif len(large_h.shape) == 2:
        new_elements = torch.zeros((large_h.shape[0],1), dtype=dtype, device=device)
    else:
        raise Exception(f"Unsupported shape {large_h.shape}")

    dest = torch.cat((dest, new_elements), dim = 1)
    # Scatter using index
    scatter_(dest, dim=1, index=index, src=small_h)
    #dest.scatter_(dim=1, index=index, src=small_h)
    # Remove the 'trashbin' element

    dest = dest[:,:-1]

    return dest


def topk_mask(scores, attention_mask, keep_ratio, keep_non_empty=True, verbose=False):
    def prt(*args, **kwargs):
        if verbose:
            print(*args, **kwargs)

    prt((attention_mask == 0).int())
    device = scores.device

    scores += attention_mask
    prt(scores)
    attention_mask_bool = (attention_mask == 0)
    tokens = attention_mask_bool.sum(1)
    prt(tokens)
    tokens = tokens * keep_ratio
    prt(tokens)
    if keep_non_empty:
        tokens = torch.max(tokens.int(), torch.ones_like(tokens, dtype=torch.int, device = device))
    prt(tokens)
    tokens = tokens.unsqueeze(-1).repeat((1, scores.shape[1]))
    prt(tokens)
    keep_first_mask = torch.arange(scores.shape[1], device=device).unsqueeze(0).repeat((scores.shape[0], 1))
    prt(keep_first_mask)
    keep_first_mask = keep_first_mask < tokens
    prt(keep_first_mask)
    prt()
    prt(scores)
    values, indices = scores.sort(dim=1, descending=True)
    prt(indices)
    indices += 1
    indices *= keep_first_mask
    prt(indices)
    final_mask = torch.zeros((scores.shape[0], scores.shape[1] + 1), device=device)
    final_mask.scatter_(dim=1, index=indices, src=torch.ones_like(indices, device=device, dtype=final_mask.dtype))
    final_mask = final_mask[:, 1:]
    prt(final_mask)
    return final_mask

class TopKBinarizer1D(autograd.Function):
    @staticmethod
    def forward(ctx, scores: torch.tensor, attention_mask: torch.tensor, threshold: float):
        return topk_mask(scores, attention_mask, threshold)

    @staticmethod
    def backward(ctx, gradOutput):
        return gradOutput, None, None


def layer_threshold(layer_index, progress, min_threshold = 0.75, layer_count=5):
    p = 1.0 - progress
    t = layer_count * p - (layer_count - layer_index - 1)
    t = min(1.0, t)
    t = max(t, 0.0)
    t = t * (1 - min_threshold) + min_threshold
    return t

layer_threshold(0, 0.5)

class SequenceExtract(nn.Module):
    def __init__(self, config, child, patcher_context):
        super().__init__()
        self.config = config
        self.layer_count = config.num_hidden_layers
        self.hidden_size = config.hidden_size
        self.child = child
        weight = torch.randn(1, self.hidden_size,self.hidden_size)
        self.linear = nn.Linear(self.hidden_size, self.hidden_size)
        self.weight = nn.Parameter(weight)

        import threading
        self.thread_local = threading.local()
        self.patcher_context = patcher_context

    def phase(self):
        if not hasattr(self.thread_local, "layer_index"):
            self.thread_local.layer_index = 0

        if self.thread_local.layer_index == 0:
            self.thread_local.layer_info = [None] * (self.layer_count // 2 - 1)
            self.thread_local.regul = 0
            self.thread_local.sparsity_info = {}

        if self.thread_local.layer_index <= (self.layer_count // 2 - 1):
            phase = 0
            layer_info_index = self.thread_local.layer_index - 1
        else:
            phase = 1
            layer_info_index = self.layer_count - self.thread_local.layer_index - 2

        return phase, layer_info_index

    def regularization(self):
        return self.thread_local.regul

    def get_sparsity_info(self):
        return self.thread_local.sparsity_info

    def forward(self, hidden_states, attention_mask, head_mask, output_attentions):
        phase, index = self.phase()

        compact_attention_mask = attention_mask.squeeze(1).squeeze(1)

        if index >= 0:
            previous_mask = self.thread_local.layer_info[index]["mask"]
            #previous_mask_bool = previous_mask.to(bool)
            sub_hidden_states, sub_attention_mask, sub_index = extract(hidden_states, compact_attention_mask, previous_mask.to(bool))
#            sub_hidden_states = hidden_states[:, previous_mask_bool[0]]
#            sub_attention_mask = torch.zeros(1, 1, 1, sub_hidden_states.shape[1])
        else:
            previous_mask = (compact_attention_mask == 0).to(float)
            #previous_mask_bool = previous_mask.to(bool)
            sub_index = None
            sub_attention_mask = compact_attention_mask
            sub_hidden_states = hidden_states

        sub_attention_mask_ = sub_attention_mask.unsqueeze(1).unsqueeze(1)

#        print("NNZ", previous_mask.sum(), sub_attention_mask_.shape, sub_hidden_states.shape)
#        print(sub_attention_mask_.min(), sub_attention_mask_.max())
        ret = self.child(sub_hidden_states, sub_attention_mask_, head_mask, output_attentions)

        if phase == 0:
            if (index + 1)< len(self.thread_local.layer_info):
                #scores = ret[0].matmul(self.weight[0]).max(-1)[0]
                scores = self.linear(ret[0]).max(-1)[0]

                # Regularization
                numel = scores.numel()
                #self.thread_local.regul += torch.norm(torch.sigmoid(scores), p=1) / numel

#                print(scores.max(), scores.min())
                scores += sub_attention_mask * 100
                progress = self.patcher_context.get_context_data("progress")
                threshold = layer_threshold(index + 1, progress, min_threshold = 0.75, layer_count=5)
                mask = TopKBinarizer1D.apply(scores, sub_attention_mask, threshold)

                msum = mask.sum()
                density = msum / ((sub_attention_mask == 0).sum())
                self.thread_local.sparsity_info[f"layer_{index+1}"] = density

                agg_density = msum / (compact_attention_mask == 0).sum()
                self.thread_local.sparsity_info[f"layer_agg_{index + 1}"] = agg_density

                if sub_index is None:
                    new_mask = mask
                else:
                    new_mask = unextract(previous_mask, mask, sub_index)
#                    new_mask = torch.zeros_like(previous_mask)
#                    new_mask[previous_mask_bool] = mask
                self.thread_local.layer_info[index + 1] = {"mask":new_mask, "index":sub_index}
        elif phase == 1:
            pass

        if sub_index is not None:
            new_ret = unextract(hidden_states, ret[0], sub_index)
            #assert((new_ret == ret[0]).all())
            ret = (new_ret,)

        #new_ret = hidden_states.clone()
        #new_ret[previous_mask_bool] = ret[0]

        self.thread_local.layer_index = (self.thread_local.layer_index + 1) % self.layer_count
        return ret

class SparseSequenceModelPatcher(ModelPatcher):
    def __init__(self, patch_coordinator):
        super().__init__(all_match=True)
        self.patch_coordinator = patch_coordinator

    def new_child_module(self, child_module_name, child_module, patch_info):
        if child_module_name == "albert.encoder":
            ret = PatchedAlbertTransformer()
            ret.config = child_module.config
            self.config = child_module.config
            ret.embedding_hidden_mapping_in = child_module.embedding_hidden_mapping_in
            ret.albert_layer_groups = child_module.albert_layer_groups
            self.encoder = ret
            return ret

        if child_module_name.endswith("albert_layers.0"):
            config = self.config
            ret = SequenceExtract(config, child_module, self.patch_coordinator.patcher_context)
            return ret

        return None


def create_sparse_sequence_albert(patch_coordinator):
    model = AutoModelForQuestionAnswering.from_pretrained('albert-base-v2')
    patcher = SparseSequenceModelPatcher(patch_coordinator)
    patcher.patch(model)
    return model
