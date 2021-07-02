#!/usr/bin/env python
import click
import json
import sh
from pathlib import Path
from datetime import datetime
from analyze_run import ModelAnalysis
from create_model import Packager
from plot import main_plot
import os
import sys
from aws_download import  AWSExperienceDownloader

@click.group()
@click.pass_context
def cli(ctx):
    ctx.obj = {}

@cli.command()
@click.argument("bucket", type=str)
@click.argument("output", default=None, type=click.Path(resolve_path=True, exists=True))
@click.option("-p", "--pattern", type=str, multiple=True)
def download(bucket, output, pattern):
    """Download SageMaker results and unpack them"""
    downloader = AWSExperienceDownloader(bucket,
                                         Path("__file__").parent / "tmp",
                                         output)
    for p in pattern:
        downloader.load(pattern=p)


@cli.command()
@click.argument("input", default=None, type=click.Path(resolve_path=True, exists=True))
@click.argument("output", default="s3://lagunas-sparsity-experiments/backup/nn_pruning/output", type=str)
@click.option("--clean-train-files", is_flag=True, help="remove optimizer.pt files")
@click.option("--dryrun", is_flag=True, help="")
def upload(input, output, clean_train_files, dryrun):
    """Upload all model checkpoints to s3 for archival. You may want to remove large files like optimizer.pt before that."""

    if clean_train_files:
        to_remove = ["optimizer.pt"]
        for root, subFolders, files in os.walk(input):
            for file in files:
                if file in to_remove:
                    path = Path(root) / file
                    print(f"Removing train file {path}")
                    if not dry_run:
                        path.unlink()

    if dryrun:
        dry_run_command = ["--dryrun"]
    else:
        dry_run_command = []

    command = ["s3", "sync"] + dry_run_command + ["--follow-symlinks", input, output]
    sh.aws(*command, _out = sys.stdout)

TASKS = ["squadv1", "squadv2", "cnn_dailymail", "mnli", "qqp", "sst2"]

@cli.command()
@click.argument("input", default=None, type=click.Path(resolve_path=True, exists=True))
@click.option("--output", default="files/results", type=str, help="Base name of the output json files.")
@click.option("--task", default=TASKS, type=str, multiple=True)
@click.option("--dataset-config", default=None, type=str, help="The configuration name of the dataset to use.")
@click.option("--force-speed", is_flag=True, help="Force reevaluation of model speed.")
@click.option("--skip-check", is_flag=True, help="Keep legacy models (that did not pruned bias) and more generally models that have different eval results after pruning, so use wisely.")
def analyze(input, output, task, dataset_config, force_speed, skip_check):
    """Analyze all the directories 'd' in INPUT, and each run in d (each run contains N checkpoints), then write a json file for each task, named OUTPUT_{task}.json.
    Each directory 'd' name should starts with '{task}_' indicating which task it contains.
    (squad for squadv1, squadv2 or squad_v2 for squadv2, mnli, ccnews for cnn_dailymail. See ModelAnalysis class for for more information).
    """
    for t in task:
        ma = ModelAnalysis(input,
                           output,
                           t,
                           dataset_config_name=dataset_config,
                           force_speed=force_speed,
                           prefixes = ["fine_tuned_", "hp_", "aws_",  "large_"],
                           exclude_non_matching_f1=not skip_check)
        ma.run()

@cli.command()
@click.option("--results", default="files/results", type=str, help="Base name of the results json files.")
@click.option("--task", default=TASKS, type=str, multiple=True)
def plot(results, task):
    main_plot(results, task)

MODEL_KINDS = ["hybrid", "hybrid-filled", "unstruct"]

@cli.command()
@click.argument("checkpoint", default=None, type=click.Path(exists=True))
@click.argument("kind", default=None, type = click.Choice(MODEL_KINDS))
@click.argument("task", default=None, type= click.Choice(TASKS))
@click.argument("user", default=None, type = str)
@click.argument("dest", default=None, type= click.Path(resolve_path=False, exists=True))
@click.option("--results", default="files/results", type=str, help="Base name of the output json files.")
@click.option("--only-name", is_flag=True, help="Only print what would be the name of the git.")
def model_upload(checkpoint, kind, task, user, dest, results, only_name):
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

@cli.command()
@click.pass_context
@click.argument("basedir", type=click.Path(resolve_path=True), nargs = 1)
@click.argument('result_files', type=click.Path(resolve_path=True), nargs=-1) #help="Result files used as whitelist (files/results_*.json for example) "
@click.option('--execute', is_flag=True)
def clean(ctxt, basedir, result_files, execute):
    """Clean the checkpoints to save disk space and only keep the best ones referenced in json results files (like files/results*_.json).
    You may want to run the 'upload' command before doing this to backup all the checkpoints.
    This only removes the "pytorch_model.bin" files
    """
    if execute:
        click.echo("EXECUTING")
    else:
        click.echo("DRY RUN")
    click.echo("Base dir")
    click.echo("  " + basedir)
    click.echo()
    click.echo("Result files:")
    for r in result_files:
        click.echo("  " + r)
    click.echo()

    if len(result_files) == 0:
       click.Abort("Empty result files")

    whitelist = {}
    for filename in result_files:
        with open(filename) as f:
            single_whitelist = json.load(f)["checkpoints"]
            for k in single_whitelist:
                whitelist[k] = True

    click.echo("Whitelisted checkpoints:")
    whitelisted = len(whitelist)
    click.echo(f"  {whitelisted}")
    click.echo()

    kept = {}
    removed = {}
    removed_size = 0

    def find_whitelisted_checkpoint(whitelist, dir):
        dir = str(dir.resolve())
        for k in whitelist:
            if k.startswith(dir):
                return True
        return False

    for dir in Path(basedir).iterdir():
        if not find_whitelisted_checkpoint(whitelist, dir):
            click.echo(click.style(f"excluded {dir} (no whitelisted checkpoint in this base directory)", fg='red'))
            continue

        click.echo(click.style(f"scanning {dir} ", fg='green'))

        set_dir = dir.resolve()
        for hp_name in set_dir.iterdir():
            for checkpoint in hp_name.iterdir():
                checkpoint_str = str(checkpoint)
                if checkpoint_str in whitelist:
                    kept[checkpoint_str] = True
                else:
                    model_file = checkpoint / "pytorch_model.bin"
                    if model_file.exists():
                        removed[model_file] = True
                        removed_size += model_file.stat().st_size

    click.echo("Kept / Whitelisted")
    click.echo(f"  {len(kept)} / {whitelisted}")

    click.echo()
    click.echo("Removed")
    click.echo(f"  {len(removed)} pytorch_model.bin files")
    click.echo("  %0.2fGB" % (removed_size / (1024**3)))

    if execute:
        d = datetime.now().replace(microsecond=0)
        d = d.isoformat().replace(":", "_").replace("T", "_")
        removed_filename = "files/removed_files_%s.json" % d
        click.echo()
        with Path(removed_filename).open("w") as f:
            for model_file in removed:
                f.write(str(model_file) + "\n")

        for model_file in removed:
    #            click.echo("REMOVING", model_file)
            model_file.unlink()

        click.echo("Wrote removed files list to:")
        click.echo(f"  {removed_filename}")


def main():
    return cli()

if __name__ == "__main__":
    main()
