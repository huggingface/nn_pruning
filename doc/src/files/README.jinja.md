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

##### Squad V1
BERT base performance: EM=80.4, F1=88.1

| Pruned BERT version |  F1 difference    | Speedup (BERT-base )             | 
| :---:                     | :---:                | :---:                  | 
| large | +2.5%       | 1.0x| 
| base  | 0%      | 1.8x | 
| base  | -1%       | 2.25x| 
| base  | -2%       | 2.6x | 


| MNLI - Dev<br>acc/MM acc       | 84.5/84.9                | |                   |  | 
| QQP - Dev<br>acc/F1            | 91.4/88.4                | |                   |  | 



![Squad v1 speedup](doc/media/squad_speedup.png)

