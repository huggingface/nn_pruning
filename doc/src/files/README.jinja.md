# Neural Networks Block Movement Pruning

**[Movement](https://arxiv.org/abs/2005.07683) [pruning](https://github.com/huggingface/transformers/tree/master/examples/research_projects/movement-pruning)** *has been proved as a **very efficient
method to prune networks in a unstructured manner**. High levels of sparsity can be reached with a minimal of accuracy loss. 
The resulting sparse networks can be **compressed heavily**,
saving a lot of permanent storage space on servers or devices, and bandwidth, an important advantage for edge devices.
**But efficient inference with unstructured sparsity is hard.**
Some degree of structure is necessary to use the intrinsic parallel nature of today hardware.
**Block Movement Pruning** work extends the original method and explore **semi-structured and structured variants** of Movement Pruning.*

##  
## Results

### Squad V1
The experiments were done first on SQuAD v1.

Two networks were tested: BERT-base, and BERT-large.
 
{{ bert_performance }}

Significant speedups where obtained with limited drop in accuracy.

Here is a selection of the networks that are obtained through the method.

The "BERT version" column shows which base network was pruned.

**F1 difference, speedups and parameters counts are all relative to BERT-base.**

    
{{ squad_table.table }}
### Main takeaways
- 1st network: pruned from BERT-large, it's significantly more accurate than BERT-base, but have a similar size and speed.
- 2nd network: pruned from BERT-large, it is finally 40% smaller but significantly better than a BERT-base, and still as fast.

That means that starting from a larger networks is beneficial on all metrics, even absolute size, something observed in the [Train Large, Then Compress](https://arxiv.org/abs/2002.11794) paper.
  
- 3rd network : we can shrink BERT-base by ~60%, speedup inference by 1.8x and still have a ***better*** network
- We can select a tradeoff between speed and accuracy, depending on the final application.

**Additional remarks**
- The parameter reduction of the BERT-large networks are actually higher compared to the original network: 40% smaller than BERT-base means actually 77% smaller than BERT-large.
We kept here the comparison with BERT-base numbers as it's what matters on a practical point of view.
- The "theoretical speedup" is a speedup of linear layers (actual number of flops), something that seems to be equivalent to the measured speedup in some papers. 
The speedup here is measured on a 3090 RTX, using the HuggingFace transformers library, using Pytorch cuda timing features, and so is 100% in line with real-world speedup.

### Comparison with state of the art 
If we plot the F1 of the full set of pruned networks against the speedup, we can see that we outperform fine-tuned TinyBERT and Distilbert by a large amount: 

![Squad v1 speedup](doc/media/new_xp_v0_speedup.png)

Even in terms of save size, we get smaller networks for the same accuracy:

![Squad v1 speedup](doc/media/new_xp_v0_fill_rate.png)

