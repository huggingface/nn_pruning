import transformers
import time
import torch
#import torchvision.models as models
import torch.autograd.profiler as profiler


def patch_model(model):
    from pytorch_block_sparse import BlockSparseModelPatcher
    # Create a model patcher
    mp = BlockSparseModelPatcher()
    #    for l in mp.get_patchable_layers(model):
    #        print(l)
    params = {"pseudo_linear":False}
    mp.add_pattern("bert\\.encoder\\.layer\\.[0-9+]\\.attention\\.self\\.(query|key|value)", params)
    mp.add_pattern("bert\\.encoder\\.layer\\.[0-9]+\\.attention\\.output\\.dense", params)
    mp.add_pattern("bert\\.encoder\\.layer\\.[0-9]+\\.intermediate\\.dense", params)
    mp.add_pattern("bert\\.encoder\\.layer\\.[0-9]+\\.output\\.dense", params)

    mp.patch_model(model)


def test(patch = False):
    model = transformers.BertForQuestionAnswering.from_pretrained("madlag/bert-base-uncased-squad-v1-sparse0.25")
    print("Model parameters before", model.num_parameters())
    if patch:
        if True:
            heads = [i for i in range(7)]
            pruning = {i: heads for i in range(12)}
            model.prune_heads(pruning)
        patch_model(model)

        print("Model parameters after", model.num_parameters())

    tokenizer = transformers.BertTokenizer.from_pretrained('madlag/bert-base-uncased-squad-v1-sparse0.25')

    nlp = transformers.pipeline("question-answering", model=model, tokenizer=tokenizer, device=0)

    context = r"""
    Extractive Question Answering is the task of extracting an answer from a text given a question. An example of a
    question answering dataset is the SQuAD dataset, which is entirely based on that task. If you would like to fine-tune
    a model on a SQuAD task, you may leverage the `run_squad.py`.
    """

    info = (torch.ones(48, 128) * 4).long().cuda()
    info = {"input_ids":info}
    start = time.time()
    for i in range(100):
        if (i % 10) == 0:
            print(i)
        #with profiler.profile(record_shapes=True) as prof:
        #    with profiler.record_function("model_inference"):
        #with torch.autograd.profiler.emit_nvtx():
        if True:
            model(**info)
            #print(nlp(question="What is extractive question answering?", context=context))
            #print(nlp(question="What is a good example of a question answering dataset?", context=context))
        #print(prof.key_averages().table(sort_by="cpu_time_total", row_limit=10))

    end = time.time()
    ret = end - start
    print(f"elapsed {ret}")
    return ret

first_time = test(False)
second_time = test(True)
print(f"{first_time / second_time}")