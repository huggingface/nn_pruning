#!/usr/bin/env python
import click
import json
from analyze_run import ModelAnalysis
from create_model import Packager
import shutil
from pathlib import Path
from examples.question_answering.qa_sparse_xp import QASparseXP
from examples.text_classification.glue_sparse_xp import GlueSparseXP

@click.group()
@click.pass_context
def cli(ctx):
    ctx.obj = {}

TASKS = ["squadv1", "squadv2", "cnn_dailymail", "mnli"]

@cli.command()
@click.argument("input", default=None, type=click.Path(resolve_path=True, exists=True))
@click.option("--output", default="files/results", type=str, help="Base name of the output json files.")
@click.option("--task", default=TASKS, type=str, multiple=True)
@click.option("--force-speed", is_flag=True, help="Force reevaluation of model speed.")
@click.option("--skip-check", is_flag=True, help="Keep legacy models (that did not pruned bias) and more generally models that have different eval results after pruning, so use wisely.")
def analyze(input, output, task, force_speed, skip_check):
    """Analyze all the directories 'd' in INPUT, and each run in d (each run contains N checkpoints), then write a json file for each task, named OUTPUT_{task}.json.
    Each directory 'd' name should starts with '{task}_' indicating which task it contains.
    (squad for squadv1, squadv2 or squad_v2 for squadv2, mnli, ccnews for cnn_dailymail. See ModelAnalysis class for for more information).
    """
    for t in task:
        ma = ModelAnalysis(input,
                           output,
                           t,
                           force_speed,
                           prefixes = ["fine_tuned_", "hp_", "aws_",  "large_"],
                           exclude_non_matching_f1=not skip_check)
        ma.run()

@click.argument("input", default=None, type=click.Path(resolve_path=True, exists=True))
@click.argument("task", default=None, type= click.Choice(TASKS))
def final_finetune(input, task):
    src_path = Path(input)
    key = src_path.parent.name
    dest_key = "fine_tuned_" + key
    task_rewrite = "squadv2" if task == "squad_v2" else task
    dest_path = src_path.parent.parent.parent / f"{task_rewrite}_test_final_fine_tune" / dest_key
    dest_path = dest_path.resolve()
    if dest_path.exists():
        click.echo(f"Destination path {dest_path} already exists")
        return
    else:
        print("PROCESSING", dest_path)

    tmp_path = Path("tmp_finetune/").resolve()
    if tmp_path.exists():
        shutil.rmtree(tmp_path)
    shutil.copytree(src_path, tmp_path)

    files_to_remove = ["trainer_state.json", "training_args.bin", "scheduler.pt"]
    for file_to_remove in files_to_remove:
        file_to_remove_ = tmp_path / file_to_remove
        if file_to_remove_.exists():
            file_to_remove_.unlink()

    dest_path.mkdir(exist_ok=True, parents=True)
    with (dest_path / "source.txt").open("w") as f:
        f.write(str(src_path))

    with open(src_path / "sparse_args.json") as f:
        sparse_args = json.load(f)
        teacher = sparse_args["distil_teacher_name_or_path"]

    if "squad" in task:
        QASparseXP.final_finetune(str(tmp_path), str(dest_path), task, teacher=teacher)
    elif task in ["mnli"]:
        GlueSparseXP.final_finetune(str(tmp_path), str(dest_path), task, teacher=teacher)
    else:
        raise Exception(f"Unknown task {task}")



MODEL_KINDS = ["hybrid", "hybrid-filled", "unstruct"]

@cli.command()
@click.argument("checkpoint", default=None, type=click.Path(exists=True))
@click.argument("kind", default=None, type = click.Choice(MODEL_KINDS))
@click.argument("task", default=None, type= click.Choice(TASKS))
@click.argument("user", default=None, type = str)
@click.argument("dest", default=None, type= click.Path(resolve_path=False, exists=True))
@click.option("--results", default="files/results", type=str, help="Base name of the output json files.")
@click.option("--only-name", is_flag=True, help="Only print what would be the name of the git.")
def upload(checkpoint, kind, task, user, dest, results, only_name):
    # Upload a model to the hub. This includes compiling the model, extracting statistics, preparing a model card etc.
    p = Packager(user, f"{results}_{task}.json", checkpoint, dest, kind = kind, task = task)
    p.run(only_name=only_name)


@cli.command()
@click.argument("user", default=None, type = str)
@click.argument("password", default=None, type = str)
@click.argument("model_name", default=None, type = str)
def delete_hub_model(user, password, model_name):
    import transformers.hf_api as hf_api

    api = hf_api.HfApi()
    token = api.login(user, password)

    for m in api.model_list():
        if "madlag" in m.modelId and "ampere" in m.modelId:
            print(m.modelId)

    api.delete_repo(token=token, name=model_name)

@cli.command()
@click.argument("user", default=None, type = str)
@click.argument("password", default=None, type = str)
def list_models(user, password):
    import transformers.hf_api as hf_api

    api = hf_api.HfApi()
    token = api.login(user, password)

    for m in api.model_list():
        if user in m.modelId:
            print(m.modelId)

def main():
    return cli()

if __name__ == "__main__":
    main()
