## Block Pruning For Faster Transformers EMNLP 2021 Paper: Companion Documentation

## Retrieving checkpoint metadata
The files are available in the [files](files) subdirectory, one for each task.

The keys in the "checkpoints" dictonary are Amazon S3 urls to the checkpoints themselves, and the values are the metadata on the checkpoint. This metadata was chosen to be  sufficient to reproduce all the plots in the paper.

```python
 "checkpoints": {
   "s3://lagunas-sparsity-experiments..." {
      "config":{...}, # base model configuration (as in HF transformers library)
      "eval_metrics":{...} # evaluation results
      "model_args":{...}, # model creation parameters
      "sparse_args":{...}, # pruning sparsity parameters
      "speed":{...}, # speed benchmark results
      "speedup":{...}, # overall results
      "stats":{...}, # model statistics (numbers of parameters remaining, pruned heads etc)
      "training_args":{...} # training parameters (as in Trainer object from HF transformers library)
    }
 }
```

## Retrieving full checkpoint data
The most easy way is to use [Amazon S3 command line tools](https://aws.amazon.com/cli/).

The checkpoints are public. The S3 bucket contain some checkpoints that were not used in the final paper.

#### Example: retrieve a single file:

[Use a direct https link](https://lagunas-sparsity-experiments.s3.eu-west-3.amazonaws.com/backup/nn_pruning/output/squadv2_test_final_fine_tune/fine_tuned_madlag_bert-large-uncased-wwm-squadv2-x2.15-f83.2-d25-hybrid-v1/checkpoint-57500/config.json)

or 

```aws s3 cp  s3://lagunas-sparsity-experiments/backup/nn_pruning/output/squadv2_test_final_fine_tune/fine_tuned_madlag_bert-large-uncased-wwm-squadv2-x2.15-f83.2-d25-hybrid-v1/checkpoint-57500/config.json /tmp/config.json```


#### Example: retrieve a complete checkpoint: 

```aws s3 sync  s3://lagunas-sparsity-experiments/backup/nn_pruning/output/squadv2_test_final_fine_tune/fine_tuned_madlag_bert-large-uncased-wwm-squadv2-x2.15-f83.2-d25-hybrid-v1/checkpoint-57500/ /tmp/checkpoint-57500```

#### Example: download all data at once (beware: the full data is 2.7 TB):

```aws s3 sync  s3://lagunas-sparsity-experiments/backup/nn_pruning/output/ /tmp/nn_pruning```





