import click
import json


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
    "dense_block_rows": 1,
    "dense_block_cols": 1,
    "attention_pruning_method": "sigmoied_threshold",
    "attention_block_rows": 32,
    "attention_block_cols": 32,
    "attention_lambda": 1.0,
    "mask_init": "constant",
    "mask_scale": 0.0,
    "regularization": "l1",
    "distil_alpha_ce": 0.1,
    "distil_alpha_teacher": 0.9,
    "attention_output_with_dense": 0,
    "layer_norm_patch_steps": 50000,
    "gelu_patch_steps": 50000,
    'linear_min_parameters': 0,
}

GLUE_TYPICAL_PARAMETERS = {
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
    "dense_block_rows": 1,
    "dense_block_cols": 1,
    "attention_pruning_method": "sigmoied_threshold",
    "attention_block_rows": 32,
    "attention_block_cols": 32,
    "attention_lambda": 1.0,
    "mask_init": "constant",
    "mask_scale": 0.0,
    "regularization": "l1",
    "distil_alpha_ce": 0.1,
    "distil_alpha_teacher": 0.90,
    "attention_output_with_dense": 0,
}

GLUE_TASKS = {"mnli", "cola", "mrpc", "qnli", "qqp", "rte", "sst2", "stsb", "wnli"}

task2teacher = {
    "mnli": "textattack/bert-base-uncased-MNLI",
    "cola": "textattack/bert-base-uncased-CoLA",
    "mrpc": "textattack/bert-base-uncased-MRPC",
    "qnli": "textattack/bert-base-uncased-QNLI",
    "qqp": "textattack/bert-base-uncased-QQP",
    "rte": "textattack/bert-base-uncased-RTE",
    "sst2": "textattack/bert-base-uncased-SST-2",
    "stsb": "textattack/bert-base-uncased-STS-B",
    "wnli": "textattack/bert-base-uncased-WNLI",
}

@cli.command()
@click.pass_context
@click.argument("task", default="squadv1", type=click.Choice(["squadv1", "mnli", "cola", "mrpc", "qnli", "qqp", "rte", "sst2", "stsb", "wnli"]))
@click.argument("output-dir", type=click.Path(resolve_path=True))
@click.option("--json_path", type=click.Path(resolve_path=True), help="Path to a parameters json file")
@click.option("--model-name-or-path", default="bert-base-uncased", type=click.Choice(["bert-base-uncased", "bert-large-uncased"]))
@click.option("--teacher", default=None, type=str, help = "'auto' for auto selection, or teacher name or path (default is no teacher)")
@click.option("--per-device-train-batch-size", default=16, type=int)
@click.option("--regularization-final-lambda", default=10, type=float)
@click.option("--dense-lambda", default=1.0, type=float)
@click.option("--ampere-pruning-method", default="disabled", type=click.Choice(["disabled", "topk"]))
@click.option('--layer_norm_patch', is_flag=True)
@click.option('--gelu_patch', is_flag=True)
def finetune(
    ctx,
    task,
    json_path,
    model_name_or_path,
    teacher,
    per_device_train_batch_size,
    regularization_final_lambda,
    dense_lambda,
    ampere_pruning_method,
    output_dir,
    layer_norm_patch,
    gelu_patch
):
    filename = json_path
    if json_path is not None:
        param_dict = json.load(open(filename))
    else:
        if task == "squadv1":
            param_dict = QA_TYPICAL_PARAMETERS
        elif task in GLUE_TASKS:
            param_dict = GLUE_TYPICAL_PARAMETERS
            param_dict["dataset_name"] = task
        else:
            raise ValueError(f"Unknown task {task}")

        param_dict["model_name_or_path"] = model_name_or_path
        param_dict["distil_teacher_name_or_path"] = teacher
        param_dict["per_device_train_batch_size"] = per_device_train_batch_size
        param_dict["regularization_final_lambda"] = regularization_final_lambda
        param_dict["dense_lambda"] = dense_lambda
        param_dict["ampere_pruning_method"] = ampere_pruning_method
        param_dict["output_dir"] = output_dir
        param_dict["logging_dir"] = output_dir
        param_dict["layer_norm_patch"] = layer_norm_patch
        param_dict["gelu_patch"] = gelu_patch

    if task == "squadv1":
        if json_path is None and teacher == "auto":
            if model_name_or_path == "bert-base-uncased":
                param_dict["distil_teacher_name_or_path"] = "csarron/bert-base-uncased-squad-v1"
            elif model_name_or_path == "bert-large-uncased":
                param_dict["distil_teacher_name_or_path"] = "bert-large-uncased-whole-word-masking-finetuned-squad"
            else:
                raise ValueError(f"Cannot find teacher for model {model_name_or_path}")

        import examples.question_answering.qa_sparse_xp as qa_sparse_xp

        experiment = qa_sparse_xp.QASparseXP(param_dict)
    else:
        if json_path is None and teacher == "auto":
            if model_name_or_path == "bert-base-uncased":
                if task in GLUE_TASKS:
                    param_dict["distil_teacher_name_or_path"] = task2teacher[task]
                else:
                    raise ValueError(f"Unknown task {task}")
            else:
                raise ValueError(f"Cannot find teacher for model {model_name_or_path}")

        import examples.text_classification.glue_sparse_xp as glue_sparse_xp

        experiment = glue_sparse_xp.GlueSparseXP(param_dict)

    # This does not actually use hyper parameter search right now, but it's useful for naming the output directory for example
    experiment.hyperparameter_search()

def post_process():
    pass

def main():
    return cli()
