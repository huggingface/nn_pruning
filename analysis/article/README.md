## Block Pruning For Faster Transformers EMNLP 2021 Paper: Companion Documentation

### Retrieving S3 checkpoints
```
aws s3 sync --no-sign-request s3://lagunas-sparsity-experiments/backup/nn_pruning/output/squadv2_test_final_fine_tune/fine_tuned_madlag_bert-large-uncased-wwm-squadv2-x2.15-f83.2-d25-hybrid-v1/ /tmp/checkpoint
```
