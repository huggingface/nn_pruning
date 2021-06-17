import click
import json
import shutil
from pathlib import Path
from examples.question_answering.qa_sparse_xp import QASparseXP
from examples.text_classification.glue_sparse_xp import GlueSparseXP

@click.group()
@click.pass_context
def cli(ctx):
    ctx.obj = {}



QA_TYPICAL_PARAMETERS = {
    "max_seq_length": 384,
    "doc_stride": 128,
    "num_train_epochs": 20,
    "warmup_steps": 5400,
    "null_score_diff_threshold": 0.0,
}

GLUE_TYPICAL_PARAMETERS = {
    "max_seq_length": 128,
    "doc_stride": 128,
    "num_train_epochs": 12,
    "warmup_steps": 12000,
}

SUMMARIZATION_TYPICAL_PARAMETERS = {
    "dataset_config_name": None,
    "max_target_length": 62,
    "num_beams": 6,
    "pad_to_max_length": 1,
    "predict_with_generate": 1,
    "ignore_pad_token_for_loss": 1,
}

TRANSLATION_TYPICAL_PARAMETERS = {
    "dataset_config_name": "de-en",
    "source_lang": "en",
    "target_lang": "de",
    "source_prefix": None,
    "max_target_length": 128,
    "num_beams": 4,
    "pad_to_max_length": 1,
    "predict_with_generate": 1,
    "ignore_pad_token_for_loss": 1,
}

COMMON_TYPICAL_PARAMETERS = {
    "do_train": 1,
    "do_eval": 1,
    "learning_rate": 3e-5,
    "num_train_epochs": 3,
    "per_device_eval_batch_size": 32,
    "logging_steps": 250,
    "evaluation_strategy": "steps",
    "eval_steps": 5000,
    "save_steps": 5000,
    "save_total_limit": 50,
    "seed": 17,
    "overwrite_cache": 0,
    "overwrite_output_dir": 1,
    "warmup_steps": 5400,
    "distil_alpha_ce": 0.1,
    "distil_alpha_teacher": 0.9,
    "mask_scores_learning_rate": 1e-2,
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
    "attention_output_with_dense": 0,
    "layer_norm_patch_steps": 50000,
    "gelu_patch_steps": 50000,
    "eval_with_current_patch_params ": 0,
    "linear_min_parameters": 0,
}

TRANSLATION_TASKS = {"wmt14", "wmt16"}

SUMMARY_TASKS = {"xsum", "cnn_dailymail"}

QA_TASKS = {"squadv1", "squadv2"}

GLUE_TASKS = {"mnli", "cola", "mrpc", "qnli", "qqp", "rte", "sst2", "stsb", "wnli"}

task2teacher = {
    "squadv1_base": "csarron/bert-base-uncased-squad-v1",
    "squadv1_large": "bert-large-uncased-whole-word-masking-finetuned-squad",
    "squadv2_base": "twmkn9/bert-base-uncased-squad2",
    "squadv2_large": "madlag/bert-large-uncased-whole-word-masking-finetuned-squadv2",
    "mnli_base": "textattack/bert-base-uncased-MNLI",
    "mnli_large": "madlag/bert-large-uncased-mnli", # TODO : use whole word masking
    "cola_base": "textattack/bert-base-uncased-CoLA",
    "mrpc_base": "textattack/bert-base-uncased-MRPC",
    "qnli_base": "textattack/bert-base-uncased-QNLI",
    "qqp_base": "textattack/bert-base-uncased-QQP",
    "rte_base": "textattack/bert-base-uncased-RTE",
    "sst2_base": "textattack/bert-base-uncased-SST-2",
    "stsb_base": "textattack/bert-base-uncased-STS-B",
    "wnli_base": "textattack/bert-base-uncased-WNLI",
}

@cli.command()
@click.pass_context
@click.argument("task", default="squadv1", type=click.Choice(["squadv1", "squadv2", "mnli", "cola", "mrpc", "qnli",
                                                              "qqp", "rte", "sst2", "stsb", "wnli", "cnn_dailymail",
                                                              "xsum", "wmt14", "wmt16"]))
@click.argument("output-dir", type=click.Path(resolve_path=True))
@click.option("--json_path", type=click.Path(resolve_path=True), help="Path to a parameters json file")
@click.option("--model-name-or-path", default="bert-base-uncased", type=click.Choice(["bert-base-uncased",
                                                                                      "bert-large-uncased",
                                                                                      "facebook/bart-base",
                                                                                      "t5-small",
                                                                                      "t5-base"]))
@click.option("--teacher", default=None, type=str, help = "'auto' for auto selection, or teacher name or path (default is no teacher)")
@click.option("--per-device-train-batch-size", default=16, type=int)
@click.option("--regularization-final-lambda", default=10, type=float)
@click.option("--dense-lambda", default=1.0, type=float)
@click.option("--ampere-pruning-method", default="disabled", type=click.Choice(["disabled", "topk"]))
@click.option('--layer_norm_patch', is_flag=True)
@click.option('--gelu_patch', is_flag=True)
@click.option("--qat", is_flag=True)
@click.option("--qconfig", default="default", type=str) # TODO: make it a click.Choice instead.

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
    gelu_patch,
    qat,
    qconfig
):

    if json_path is not None:
        param_dict = json.load(open(json_path))
    else:
        if task in QA_TASKS:
            param_dict = {**COMMON_TYPICAL_PARAMETERS, **QA_TYPICAL_PARAMETERS}
            if task == "squadv2":
                param_dict["dataset_name"] = "squad_v2"
                param_dict["version_2_with_negative"] = 1
            else:
                param_dict["dataset_name"] = "squad"
                param_dict["version_2_with_negative"] = 0
        elif task in SUMMARY_TASKS:
            param_dict = {**COMMON_TYPICAL_PARAMETERS, **SUMMARIZATION_TYPICAL_PARAMETERS, "dataset_name": task}
        elif task in TRANSLATION_TASKS:
            param_dict = {**COMMON_TYPICAL_PARAMETERS, **TRANSLATION_TYPICAL_PARAMETERS, "dataset_name": task}
        elif task in GLUE_TASKS:
            param_dict = {**COMMON_TYPICAL_PARAMETERS, **GLUE_TYPICAL_PARAMETERS, "dataset_name": task}
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
        param_dict["qat"] = qat
        param_dict["qconfig"] = qconfig

        if teacher == "auto":
            name_teacher = task
            if model_name_or_path == "bert-base-uncased":
                name_teacher += '_base'
            elif model_name_or_path == "bert-large-uncased":
                name_teacher += '_large'
            distil_teacher_name_or_path = task2teacher.get(name_teacher)
            if distil_teacher_name_or_path is None:
                raise ValueError(f"Cannot find teacher for model {model_name_or_path} on task {task}")
            param_dict["distil_teacher_name_or_path"] = distil_teacher_name_or_path

    if task in QA_TASKS:
        import examples.question_answering.qa_sparse_xp as qa_sparse_xp
        experiment = qa_sparse_xp.QASparseXP(param_dict)
    elif task in SUMMARY_TASKS:
        import examples.seq2seq.summarization_sparse_xp as summarization_sparse_xp
        experiment = summarization_sparse_xp.SummarizationSparseXP(param_dict)
    elif task in TRANSLATION_TASKS:
        import examples.seq2seq.translation_sparse_xp as translation_sparse_xp
        experiment = translation_sparse_xp.TranslationSparseXP(param_dict)
    else:
        import examples.text_classification.glue_sparse_xp as glue_sparse_xp
        experiment = glue_sparse_xp.GlueSparseXP(param_dict)

    # This does not actually use hyper parameter search right now, but it's useful for naming the output directory for example
    experiment.hyperparameter_search()


TASKS = ["squad", "squad_v2", "cnn_dailymail", "mnli", "qqp", "sst2"]

@cli.command()
@click.option("--checkpoint", default=None, type=click.Path(resolve_path=True, exists=True))
@click.option("--model", default=None, type=str)
@click.option("--teacher", default=None, type=str)
@click.argument("dest", default=None, type=click.Path(resolve_path=True, exists=True))
@click.argument("task", default=None, type= click.Choice(TASKS))
@click.option('--overwrite', is_flag=True)
def final_finetune(checkpoint, model, teacher, dest, task, overwrite):
    input_info = 0
    if checkpoint is not None:
        input_info += 1
    if model is not None:
        input_info += 1
    if input_info == 2:
        raise click.Abort("You should specify a checkpoint path with --checkpoint or a hub model name with --model, not both.")

    if input_info == 0:
        raise click.Abort("You should specify a checkpoint path with --checkpoint or a hub model name with --model.")

    if checkpoint is not None:
        src_path = Path(checkpoint)
        dest_key = src_path.parent.name

    if model is not None:
        dest_key = model.replace("/", "_")
        src_path = model

    task_rewrite = "squadv2" if task == "squad_v2" else task
    dest_path = Path(dest).resolve() / f"{task_rewrite}_test_final_fine_tune" / ("fine_tuned_" + dest_key)

    if dest_path.exists():
        if overwrite:
            shutil.rmtree(dest_path)
        else:
            raise click.ClickException(f"Destination path {dest_path} already exists")
    else:
        print("PROCESSING", dest_path)

    dest_path.mkdir(exist_ok=True, parents=True)
    with (dest_path / "source.txt").open("w") as f:
        f.write(str(src_path))

    if checkpoint is not None:
        tmp_path = Path("tmp_finetune/").resolve()
        if tmp_path.exists():
            shutil.rmtree(tmp_path)
        shutil.copytree(src_path, tmp_path)
        src_path = tmp_path

        files_to_remove = ["trainer_state.json", "training_args.bin", "scheduler.pt"]
        for file_to_remove in files_to_remove:
            file_to_remove_ = tmp_path / file_to_remove
            if file_to_remove_.exists():
                file_to_remove_.unlink()

        if teacher is None:
            with open(src_path / "sparse_args.json") as f:
                sparse_args = json.load(f)
                teacher = sparse_args["distil_teacher_name_or_path"]

    if model is not None:
        if teacher is None:
            raise click.ClickException("Please specify teacher")


    if "squad" in task:
        QASparseXP.final_finetune(str(src_path), str(dest_path), task, teacher=teacher)
    elif task in ["mnli"]:
        GlueSparseXP.final_finetune(str(src_path), str(dest_path), task, teacher=teacher)
    else:
        raise Exception(f"Unknown task {task}")


def post_process():
    pass

def main():
    return cli()

if __name__ == "__main__":
    main()
