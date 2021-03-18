# NN PRUNING RESEARCH REPORT (WIP)



Origin of the project
---

The project started with the observation that unstructured sparsity is hard to accelerate, because parallel machines
need some form of data regularity/locality to be able to be used at peak performance.

Using blocks with various shape is the most simple form of regularity that can be introduced to improved performance.

Pytorch Block Sparse
---
Because that kind of feature was not available, or for different software stack, the first step that I chose was to implement a library for fast block sparse basic algebra to measure this.
[pytorch_block_sparse](https://github.com/huggingface/pytorch_block_sparse), using CUDA / CUTLASS kernels, is the result of this first step.

Creating such a library, and reaching good performances, was quite a challenge.
Diving low into the lower software layers and the hardware details takes some significant time and effort.

Other tools could be used, like the Triton Compiler, but at the time I did not consider it stable enough.

The result of this work was a library that was able to reach parity with dense code when sparsity >= 60%.
That is a decent result, but better levels of performance are probably possible.

The positive point is that it saves memory proportionally to sparsity, and it's a drop-in replacement for pytorch Linear layers.

Block Movement Pruning
---
The level of pruning Movement Pruning was able to reach on several fine-tuning tasks was very interesting.
This was a good candidate to test block pruning instead of unstructured sparsity.

A lot of different experiments were tested (~250, producing more than 5000 models).
The parameter space is large, and this is a subset of what could be tested:
Parameter space is described at least by:
 - pruning algorithms (those proposed in Movement Pruning: magnitude, topK, threshold, sigmoied_threshold...)
 - block shape (1x1 up to 64x64, square or rectangular, entire heads for BERT = 64*768...)
 - attention vs FFNs (not using the same pruning algorithm for each part is actually a good idea) 
 - pruning speed (number of epochs used to transition from 100% to N%)
 - pretrained network, and teacher (BERT-base/large ...)
 
It was not economically feasible to sweep this parameter space, and of course some initial observations were instrumental
 into introducing new dimensions in the search (like applying different pruning on attention and FFNs).
Most of the models were built on a RTX 3090 on a home server, running almost 24-7 for > 4 months.
Some were created on Amazon SageMaker, for simple sweeps, block shape tests for example, and it could be useful to run
 some more. 

The main task that was tested was SQuAD v1, and MNLI.
Now that the library has been released, some external users are starting to test it on their own dataset (as of 11th of March 2021).

SQuADv1
---
The following experiments were tested:

- Block pruning for both attention and FFNs

  Main observations:
   - 32x32 block pruning approaches 1x1 performance (1x1 = unstructured), when using twice the number of epochs
   
- Movement Pruning with twice the epochs (20 instead of 10)

  This resulted in a large improvement on 1x1 blocks, showing that the reachable accuracy at same level of sparsity was way higher than initially obtained in Movement Pruning Paper.
  
  Experiment conclusions:   
  - 32x32 is good, but 1x1 is still better (makes more sense)  
  - Searching for even better hyper-parameters for Movement Pruning may lead to further improvement
  
- 1D pruning

  One additional observations from the initial block pruning experiment was that the pruning patterns seems mostly unidimensional.
  It was mentioned too by Victor Sanh on the original movement pruning models, but with blocks the pattern is much
  more massive: full attention heads are quickly pruned when using 32x32 blocks.
  
  The next step was then to prune rows or col (1d pruning)
  Experiment conclusions:
  - The results are not very good on attention
   An hypothesis is that the head dimension is too small, so removing even a small part of a 64 dimensions key have a too large impact when 
   doing the dot-product with a 64 dimensions value.
   To be tested: row/col pruning but only on value and output layers.
   But the computation structure makes it not that efficient compared to full head pruning (extracting a subset of input dimensions is not very fast) 
  - 1D pruning is good on FFNs, especially when you apply the same mask for 1st FFN rows and 2nd FFN cols (that makes sense as they are following each other)
   
- Hybrid pruning:

  The next logical step was to use blocks for attention, and rows/cols for FFNs
  This leads to significant improvement compared to the "block everywhere" strategy.
  
  The resulting pruned network is faster because of: 
  - head pruning -> smaller matrices, heads are still block sparse 
  - structured (rows/cols) pruning of FFNs -> smaller, but dense matrices
  
- Optional final step: densification of attention heads
  
  As noted in the previous step, we removed some heads, but the remaining heads are block sparse.

  The problem is that we don't have an efficient block sparse library for low sparsity, and even if we had, it would probably not be available everywhere.
  
  To get around this, we can successfully use the following method:
  
  - fill attention empty blocks with a small random noise (to avoid null gradients)
  - Perform some epochs of fine tuning, using the same distillation parameters used previously.
  
  As a consequence:
  - we get back some accuracy: F1 is higher
  - but the model speed is the same, as we have the same heads, and FFNs shape is unchanged: the tradeoff speed/F1 is improved 
  - we increased the non-zero parameters (but we observe that the sparsity/F1 tradeoff is actually not different, the curve is just translated)
  - we have a fully dense network, no special runtime is needed
  
- Further improvements

  The previous experiments can be improved or modified using some orthogonal changes:
   
  - Using a large teacher : even for 75% sparse networks the difference in accuracy is significant
  - Replacing LayerNorm with NoNorm : small drop in F1 (~ 0.5), but MobileBERT claims that it leads to a large latency gain  

MNLI
---
The results are similar to TinyBERT and MobileBERT.
The latest found improvements were not tested yet on MNLI, so some gain is probably possible.

More testing is still needed

To Be Tested
---
  - replacing GeLU by ReLU
  - Ampere sparsity (code is 90% there, but needs some fixes)
  - Quantization impact (quantized version for bert is now 40MB instead of 400MB initially, with 1% drop in F1 )
  - Real-life benchmarks (will probably be better than current numbers that are quite conservative) 
  - More tasks
  - Improve integration with Transformers (varying sizes for FFNs)    
  - Original Movement Pruning with large teacher
    
    
Block Pruning Pros and Cons
---

- Pros
  - Smaller
  - Faster
  - No special runtime
  
- Cons
  - Precision loss for large speedups. But the method offers a continuous tradeoff between speed/size and accuracy contrary to optimized pretrained networks like MobileBERT.
  - Much larger fine-tuning time (14H instead of 1H when using all tricks). But the idea is to train once and then inference time is much more important 
  - Minor: needs to patch network after loading with transformers to remove empty parts (head pruning is native, but not for the TF version).


Software & Packaging  
---

#### Principles
The original Movement Pruning code was using its own version of the BERT source code, with MaskedLinear layers.

One of the goal of the nn_pruning library was to make it possible to prune any network (including non-transformers architectures).
The library would be hardly attractive if the first step to do so was to rewrite the source code of the source model.
Maintaining an up to date version of the rewritten source code should be avoided too.

Python and Pytorch flexibility makes it really easy to patch dynamically existing models.

To apply the nn_library on a new model, you just have to write a small set of regular expressions to define the layers you want to target.
Using Pytorch module iterator, it's then easy to replace all nn.Linear with MaskedLinear, without any source code modification. 
Rewriting back the network to its original form is done in the same way, just as the final pruning of the heads or parts of the 
matrices, to optimize the network for inference.

#### Encoding a large family of pruning algorithms 
Using simple `module name` to `mask info` mapping rules, a large set of pruning strategies can be explored (and some are still to be):
- 1D pruning : for pruning the two BERT FFNs jointly, a single mask is created, and their MaskedLinear objects points to this mask
- 2D pruning : each MaskedLinear has its own Mask
- 2D joint pruning : for attention, pruning the 4 layers (KQV + output) at once can be testing easily: map all these layers to the same Mask information  

#### Packaging

The idea was not to produce just a research project 
The library is structured in three layers:
- Low level: details of the pruning algorithms
It should be easy to extend the set of supported pruning algorithms, mostly by deriving new subclasses.
- PatchCoordinator : minimum set of functions to be called to patch the network, fine-prune-distill it, and compile it back to its original form
The PatchCoordinator is meant to be used as in any fine-tuning code, using a Trainer or not.
- SparseTrainer : a MixIn to be used with the HuggingFace Trainer, that encapsulate the PatchCoordinator
The SparseTrainer should manage almost 100% of the pruning process, using itself a PatchCoordinator


#### Inference
The benchmarks that are presented on the nn_pruning main page are quite conservative: it's hard to know from the papers
what kind of setup was used to benchmark MobileBert or TinyBERT.
I chose to measure the CUDA time on PyTorch forward pass, with large batches, but the displayed speedups may include some time that is not 100% related to model computation.
More benchmarks with ONNX/ORT may actually show an even better performance.
 
The produced models are 100% compatible with ONNX, as they are dense networks, with just some different shapes on different layers.
On this topic, Morgan Funtowicz proposed a [patch](https://github.com/microsoft/onnxruntime/pull/6850) for ONNX/ORT that was accepted, to support different numbers of heads for each layer when using specially optimized attention module.

Further work on inference:
- Quantization: it is still not yet known what kind of accuracy drop will be observed
- LayerNorm replacement with NoNorm is claimed by the ModelBERT paper to reduce latency by 3x.
 Some models have been produced with very limited accuracy drop, we still have to test their speed.
- for the same reason, we can replace GeLUs by ReLUs, but this has not been yet implemented (much easier than LayerNorm)
- Fusion of NoNorm with Linear Layers (if ORT doesn't fuse automatically those layers)     
 