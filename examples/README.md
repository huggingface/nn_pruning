<!---
Copyright 2020 The HuggingFace Team. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

#### Fine-tuning BERT on SQuAD1.0

First install the nn_pruning repository, then you can use the `nn_pruning_run` command:

nn_pruning_run examples fine-prune \[OPTIONS\] squadv1 OUTPUT_DIR

In \[OPTIONS\], the parameters are, by decreasing order of importance:

**--model-name-or-path** Default is a BERT-base `bert-base-uncased` but you can try `bert-large-uncased` too 

**--regularization-final-lambda** You can try values between ~2.5 and ~40 to select different levels of sparsity with
different levels of precision. 2.5 will give the most precise network with low level of sparsity,
 40 a high level of sparsity with lower precision.
 
**--distil-teacher-name-or-path** The default value is a BERT-large network `bert-large-uncased-whole-word-masking-finetuned-squad`,
 if you don't have enough memory you can use `csarron/bert-base-uncased-squad-v1` which is a BERT-base network.
 
**--per-device-train-batch-size** To adjust batch size according to your available memory

**--dense-lambda** If >1, it will increases FFn layers sparsity, if <1, it will decrease it.
You may want to try different lambdas to have slightly different networks, but 1 is usually a good choice.

**--parameters** If you want to change any other parameters, you can pass a json file containing all the parameters you want.
 All other options will be the ignored, except of course `OUTPUT_DIR`.  The name of the parameters and their types and values are defined in 
`nn_pruning.patch_coordinator.SparseTrainingArguments`, and in `nn_pruning.examples.xp` with the `ModelArguments`,
`DataTrainingArguments` and `XPTrainingArguments` dataclasses.

**A command and corresponding json with all parameters that leads to a very good network**:

`python command_line.py finetune --json-path parameters_block64_squadv1_bert_base.json squadv1 output_dir`

**parameters_block64_squadv1_bert_base.json**:
```
{
        "adam_beta1": 0.9,
        "adam_beta2": 0.999,
        "adam_epsilon": 1e-08,
        "ampere_pruning_method": "disabled",
        "attention_block_cols": 64,
        "attention_block_rows": 64,
        "attention_lambda": 1.0,
        "attention_output_with_dense": 0,
        "attention_pruning_method": "sigmoied_threshold",
        "bias_mask": 1,
        "dataset_name": "squad",
        "debug": 0,
        "dense_block_cols": 1,
        "dense_block_rows": 1,
        "dense_lambda": 1.0,
        "dense_pruning_method": "sigmoied_threshold:1d_alt",
        "disable_tqdm": 0,
        "distil_alpha_ce": 0.1,
        "distil_alpha_teacher": 0.9,
        "distil_teacher_name_or_path": "bert-large-uncased-whole-word-masking-finetuned-squad",
        "distil_temperature": 2.0,
        "doc_stride": 128,
        "do_eval": 1,
        "do_predict": 0,
        "do_train": 1,
        "evaluation_strategy": "steps",
        "eval_steps": 5000,
        "final_ampere_temperature": 20.0,
        "final_finetune": 0,
        "final_threshold": 0.1,
        "final_warmup": 10,
        "fp16": 0,
        "fp16_opt_level": "O1",
        "fp16_backend": "auto",
        "gradient_accumulation_steps": 1,
        "ignore_data_skip": 0,
        "initial_ampere_temperature": 0.0,
        "initial_threshold": 0,
        "initial_warmup": 1,
        "learning_rate": 3e-05,
        "load_best_model_at_end": 0,
        "local_rank": -1,
        "logging_first_step": 0,
        "logging_steps": 500,
        "mask_init": "constant",
        "mask_scale": 0.0,
        "mask_scores_learning_rate": 0.01,
        "max_answer_length": 30,
        "max_grad_norm": 1.0,
        "max_seq_length": 384,
        "max_steps": -1,
        "model_name_or_path": "bert-base-uncased",
        "model_parallel": 0,
        "n_best_size": 20,
        "no_cuda": 0,
        "null_score_diff_threshold": 0.0,
        "num_train_epochs": 20,
        "optimize_model_before_eval": "disabled",
        "overwrite_cache": 0,
        "overwrite_output_dir": 1,
        "pad_to_max_length": 1,
        "past_index": -1,
        "per_device_eval_batch_size": 128,
        "per_device_train_batch_size": 16,
        "prediction_loss_only": 0,
        "regularization": "l1",
        "regularization_final_lambda": 10.0,
        "remove_unused_columns": 1,
        "save_steps": 5000,
        "save_total_limit": 50,
        "seed": 17,
        "tpu_metrics_debug": 0,
        "version_2_with_negative": 0,
        "warmup_steps": 5400,
        "weight_decay": 0.0,
        "tokenizer_name": 0,
        "use_fast_tokenizer": 1,
        "layer_norm_patch": 0,
        "gelu_patch":0
    }
```
 
# Compiling a model checkpoint
The checkpoints that are created during the 'fine-pruning' are not directly usable as standard models,
as they contains all the parameters used for creating/updating the pruning pattern.
You will need to "compile" the checkpoint you are interested in to have a model with the same structure as the original one you used,
but with some zeroes scattered in the linear layers.
To do so, you can use the 'compile' command: it will produce a clean model that you can use directly, or use after processing with the `nn_pruning.inference_model_patcher.optimize_model` to speed up the inference.
An example code for usage can be found in this [model card](https://huggingface.co/madlag/bert-large-uncased-wwm-squadv2-x2.63-f82.6-d16-hybrid-v1).
