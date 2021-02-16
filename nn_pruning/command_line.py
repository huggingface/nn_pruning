import click
import json
from pathlib import Path

@click.group()
@click.pass_context
def cli(ctx):
    ctx.obj = {}



QA_TYPICAL_PARAMETERS = {
  "dataset_name": "squad",
  "do_train": 1,
  "do_eval": 1,

  "max_seq_length": 384,
  "doc_stride": 128,
  "num_train_epochs": 20,
  "logging_steps": 250,
  "save_steps": 10000,
  "eval_steps": 10000,
  "save_total_limit": 50,
  "seed": 17,
  "evaluation_strategy": "steps",
  "learning_rate": 3e-5,
  "mask_scores_learning_rate": 1e-2,
  "overwrite_cache": 0,
  "overwrite_output_dir": 1,
  "warmup_steps": 5400,
  "initial_warmup": 1,
  "final_warmup": 10,
  "initial_threshold": 0,
  "final_threshold": 0.1,
  "dense_pruning_method": "sigmoied_threshold:1d_alt",
  "dense_block_rows":1,
  "dense_block_cols":1,

  "attention_pruning_method": "sigmoied_threshold",
  "attention_block_rows":32,
  "attention_block_cols":32,
  "attention_lambda":1.0,

  "mask_init": "constant",
  "mask_scale": 0.0,
  "regularization": "l1",
  "distil_alpha_ce": 0.1,
  "distil_alpha_teacher": 0.9,
  "attention_output_with_dense": 0
}

GLUE_TYPICAL_PARAMETERS = {
  "task_name": "mnli",
  "do_train": 1,
  "do_eval": 1,
  "per_device_eval_batch_size": 128,
  "max_seq_length": 128,
  "doc_stride": 128,
  "num_train_epochs": 12,
  "logging_steps": 250,
  "save_steps": 5000,
  "eval_steps": 5000,
  "save_total_limit": 50,
  "seed": 17,
  "evaluation_strategy": "steps",
  "learning_rate": 3e-5,
  "mask_scores_learning_rate": 1e-2,
  "overwrite_cache": 0,
  "overwrite_output_dir": 1,
  "warmup_steps": 12000,
  "initial_warmup": 1,
  "final_warmup": 4,
  "initial_threshold": 0,
  "final_threshold": 0.1,
  "dense_pruning_method": "sigmoied_threshold:1d_alt",
  "dense_block_rows":1,
  "dense_block_cols":1,
  "attention_pruning_method": "sigmoied_threshold",
  "attention_block_rows":32,
  "attention_block_cols":32,
  "attention_lambda":1.0,
  "mask_init": "constant",
  "mask_scale": 0.0,
  "regularization": "l1",
  "distil_alpha_ce": 0.1,
  "distil_alpha_teacher": 0.90,
  "attention_output_with_dense": 0
}

#parameters: model_name, teacher, batch_size, regu_lambda, regu_lambda_dense, ampere



@cli.command()
@click.pass_context
@click.argument("task", default="squadv1", type=click.Choice(['squadv1', 'mnli']))
@click.option("--json-path", type=click.Path(resolve_path=True))
@click.option("--model-name-or-path", defaut="bert-base-uncased", type=click.Choice("bert-base-uncased", "bert-large-uncased"))
@click.option("--distil-teacher-name-or-path-name", defaut=None, type=str)
@click.option("--per-device-train-batch-size", defaut=16, type=int)
@click.option("--regularization-final-lambda", defaut=20, type=float)
@click.option("--dense-lambda", defaut=1.0, type=float)
@click.option("--ampere-pruning-method", default="disabled", type=click.Choice("disabled", "topk"))
@click.option("--output-dir", type=click.Path(resolve_path=True))
def fine_prune(ctx, task, json_path, model_name_or_path, distil_teacher_name_or_path, per_device_train_batch_size, regularization_final_lambda, dense_lambda, ampere_pruning_method, output_dir):
    filename = json_path
    if json_path is None:
        param_dict = json.load(open(filename))
    else:
        if task == "squad":
            param_dict = QA_TYPICAL_PARAMETERS
        elif task == "mnli":
            param_dict = GLUE_TYPICAL_PARAMETERS
        else:
            raise ValueError(f"Unknown task {task}")

        param_dict["model_name_or_path"] = model_name_or_path
        param_dict["distil_teacher_name_or_path"] = distil_teacher_name_or_path
        param_dict["per_device_train_batch_size"] = per_device_train_batch_size
        param_dict["regularization_final_lambda"] = regularization_final_lambda
        param_dict["dense_lambda"] = dense_lambda
        param_dict["ampere_pruning_method"] = ampere_pruning_method
        param_dict["output_dir"] = output_dir
        param_dict["logging_dir"] = output_dir

    if task == "squadv1":
        if json_path is None and distil_teacher_name_or_path is None:
            # Large teacher is default
            param_dict["distil_teacher_name_or_path"] = "csarron/bert-base-uncased-squad-v1"

        import nn_pruning.examples.question_answering.qa_sparse_xp as qa_sparse_xp
        experiment = qa_sparse_xp.QASparseXP(param_dict)
    else:
        if json_path is None and distil_teacher_name_or_path is None:
            # Large teacher is default
            param_dict["distil_teacher_name_or_path"] = "aloxatel/bert-base-mnli"

        import nn_pruning.examples.text_classification.glue_sparse_xp as glue_sparse_xp
        experiment = glue_sparse_xp.GlueSparseXP(param_dict)

    experiment.hyperparameter_search()

@cli.command()
@click.pass_context
@click.argument("path", default=None, type=click.Path(exists=True, resolve_path=True))
@click.argument("output", default=None, type=click.Path(resolve_path=True))
def command2(ctx, path, output):
    print(path + ":" + run2(path, output))


def main():
    return cli()


