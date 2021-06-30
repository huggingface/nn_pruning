# Analyzing experiments results

This directory contains research tools to:
- 1/ download experiments from AWS SageMaker S3 bucket and unpack them
- 2/ upload the locally produced checkpoints and those unpacked from Sagemaker to the nn_pruning AWS S3  bucket
- 3/ extract information about produced models
- 4/ clean unused checkpoints 
- 5/ plot sparsity/accuracy and speed/accuracy graphs 
- 6/ upload the best models to the Hugging Face model hub.

All those commands are available running `command_line.py` (use `--help` to display the details of these commands).

## 1/ Downloading models from Amazon SageMaker S3 buckets

## 2/ Upload the locally produced checkpoints

## 3/ Scanning runs and their checkpoints to produce reports
When running multiple experiments, a lot of checkpoints are produced.
The `analyze` command will scan all the checkpoints information, extract the best ones according to their metrics, extract information about their sparsity, check their accuracy after "compilation", and measure the speed of the model.
('Compiling' a model means applying once and for all the pruning pattern on the weights, and create a model that has the exact layout as the original one, but with some zeroes at some places)
The results are written by default to files/results_{TASK_NAME}.json .
Some information about the 
 
## Creating graphs

## Uploading models to the hub with rich model cards

## Cleaning unused checkpoints

