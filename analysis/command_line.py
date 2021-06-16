#!/usr/bin/env python
import click
from analyze_run import ModelAnalysis
from create_model import Packager
from plot import main_plot

@click.group()
@click.pass_context
def cli(ctx):
    ctx.obj = {}

TASKS = ["squadv1", "squadv2", "cnn_dailymail", "mnli", "qqp", "sst2"]

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
