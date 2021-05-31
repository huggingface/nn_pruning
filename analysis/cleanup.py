import click
from pathlib import Path
import json
from datetime import datetime

@click.group()
@click.pass_context
def cli(ctx):
    ctx.obj = {}

@cli.command()
@click.pass_context
@click.argument("basedir", type=click.Path(resolve_path=True), nargs = 1)
@click.argument('result_files', type=click.Path(resolve_path=True), nargs=-1) #help="Result files used as whitelist (files/results_*.json for example) "
@click.option('--execute', is_flag=True)
def main(ctxt, basedir, result_files, execute):
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
    task_names = {}
    for filename in result_files:
        task_name = Path(filename).name[len("results_"):-5]
        task_names[task_name] = True
        with open(filename) as f:
            single_whitelist = json.load(f)["checkpoints"]
            for k in single_whitelist:
                whitelist[k] = True

    # Legacy : Add alias for squad
    if "squadv1" in task_names:
        task_names["squad"] = True

    click.echo(f"Known task names: {task_names}")
    click.echo("Whitelisted checkpoints:")
    whitelisted = len(whitelist)
    click.echo(f"  {whitelisted}")
    click.echo()

    kept = {}
    removed = {}
    removed_size = 0

    def find_task_name(dir, task_names):
        for task_name in task_names:
            if (task_name  + "_") in dir.name:
                return True
        return False

    for dir in Path(basedir).iterdir():
        if not find_task_name(dir, task_names):
            click.echo(f"excluded {dir} (task name)")
            continue
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


if __name__ == "__main__":
    main()
