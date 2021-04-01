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

A json with all parameters that leads to a very good network:
```
{
        "adam_beta1": 0.9,
        "adam_beta2": 0.999,
        "adam_epsilon": 1e-08,
        "ampere_pruning_method": "disabled",
        "attention_block_cols": 32,
        "attention_block_rows": 32,
        "attention_lambda": 1.0,
        "attention_output_with_dense": 0,
        "attention_pruning_method": "sigmoied_threshold",
        "bias_mask": True,
        "dataloader_drop_last": False,
        "dataloader_num_workers": 0,
        "dataset_cache_dir": "dataset_cache",
        "dataset_name": "squad",
        "debug": False,
        "dense_block_cols": 1,
        "dense_block_rows": 1,
        "dense_lambda": 1.0,
        "dense_pruning_method": "sigmoied_threshold:1d_alt",
        "disable_tqdm": False,
        "distil_alpha_ce": 0.1,
        "distil_alpha_teacher": 0.9,
        "distil_teacher_name_or_path": "bert-large-uncased-whole-word-masking-finetuned-squad",
        "distil_temperature": 2.0,
        "doc_stride": 128,
        "do_eval": 1,
        "do_predict": False,
        "do_train": 1,
        "evaluation_strategy": "epoch",
        "eval_steps": 500,
        "final_ampere_temperature": 20.0,
        "final_finetune": 0,
        "final_threshold": 0.1,
        "final_warmup": 10,
        "fp16": False,
        "fp16_opt_level": "O1",
        "fp16_backend": "auto",
        "gradient_accumulation_steps": 1,
        "ignore_data_skip": False,
        "initial_ampere_temperature": 0.0,
        "initial_threshold": 0,
        "initial_warmup": 1,
        "learning_rate": 3e-05,
        "load_best_model_at_end": False,
        "local_rank": -1,
        "logging_first_step": False,
        "logging_steps": 500,
        "mask_init": "constant",
        "mask_scale": 0.0,
        "mask_scores_learning_rate": 0.01,
        "max_answer_length": 30,
        "max_grad_norm": 1.0,
        "max_seq_length": 384,
        "max_steps": -1,
        "model_name_or_path": "bert-base-uncased",
        "model_parallel": False,
        "n_best_size": 20,
        "no_cuda": False,
        "null_score_diff_threshold": 0.0,
        "num_train_epochs": 20,
        "optimize_model_before_eval": "disabled",
        "overwrite_cache": 0,
        "overwrite_output_dir": 1,
        "pad_to_max_length": True,
        "past_index": -1,
        "per_device_eval_batch_size": 32,
        "per_device_train_batch_size": 16,
        "prediction_loss_only": False,
        "regularization": "l1",
        "regularization_final_lambda": 10.0,
        "remove_unused_columns": True,
        "save_steps": 5000,
        "save_total_limit": 50,
        "seed": 17,
        "sharded_ddp": False,
        "tpu_metrics_debug": False,
        "version_2_with_negative": False,
        "warmup_steps": 5400,
        "weight_decay": 0.0,
        'tokenizer_name': None,
        'use_fast_tokenizer': True,
        'layer_norm_patch': False,
        'gelu_patch':False,
    }
```
 



