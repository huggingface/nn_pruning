# Copyright 2020-present, the HuggingFace Inc. team.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""
Count remaining (non-zero) weights in the encoder (i.e. the transformer layers).
Sparsity and remaining weights levels are equivalent: sparsity % = 100 - remaining weights %.
"""

import click, click_log
import torch
import shutil
import json
import sh
from pathlib import Path

from transformers import BertForQuestionAnswering, TFBertForQuestionAnswering, BertConfig
from block_movement_pruning.emmental.modules import MaskedLinear
from block_movement_pruning.emmental.utils import read_info, check_is_ampere_sparse, nnz_blocks_count

import jinja2
import logging

logger = logging.getLogger(__name__)
click_log.basic_config(logger)

class ModelPostProcessor:
    def __init__(self, path):
        self.path = Path(path).resolve()

    def add_parameter(self, name, original_parameter, parameter, is_linear_layer_weight):
        raise NotImplementedError("Please implement add_parameter in your ModelPostProcessor subclass")

    def finish(self):
        raise NotImplementedError("Please implement finish in your ModelPostProcessor subclass")

    def run(self):
        st = torch.load(self.path / "pytorch_model.bin", map_location="cuda")

        logging.info("name".ljust(60, " "), "Remaining Weights %", "Remaining Weight")
        for name, param in st.items():
            if "encoder" not in name:
                self.add_parameter(name, param, None, is_linear_layer_weight=False)
                continue
            if name.endswith(".weight") and "LayerNorm" not in name:
                weights = MaskedLinear.masked_weights_from_state_dict(st, name, **self.mask_args)
                self.add_parameter(name, param, weights, is_linear_layer_weight=True)
            elif MaskedLinear.check_name(name):
                pass
            else:
                self.add_parameter(name, param, None, is_linear_layer_weight=False)

        return self.finish()


class ParameterCounter(ModelPostProcessor):
    def __init__(self, path):
        super().__init__(path)
        self.info = read_info(self.path)
        self.config = self.info["config"]
        self.args = self.info["args"]
        self.mask_args = self.masked_weights_args(self.args)
        self.ampere_enabled = self.mask_args["ampere_pruning_method"] != "disabled"
        self.mask_block_rows, self.mask_block_cols = self.args["mask_block_rows"], self.args["mask_block_cols"]
        self.block_sparse_enabled = self.mask_block_rows > 1 or self.mask_block_cols > 1

        self.is_ampere_valid = True
        self.nnz_total = 0
        self.blocks_total = 0
        self.remaining_count = 0  # Number of remaining (not pruned) params in the encoder
        self.encoder_count = 0  # Number of params in the encoder

    def masked_weights_args(self, args):
        ret = dict(pruning_method=args["pruning_method"],
                   pruning_submethod=args.get("pruning_submethod", "default"),
                   threshold=args["final_threshold"],
                   ampere_pruning_method=args["ampere_pruning_method"],
                   mask_block_rows=args["mask_block_rows"],
                   mask_block_cols=args["mask_block_cols"],
                   rows_shuffle_r=None,  # TODO : some methods requires
                   cols_shuffle_r=None,  # TODO
                   kind=None  # TODO
                   )
        return ret

    def add_parameter(self, name, original_parameter, parameter, is_linear_layer_weight):
        if is_linear_layer_weight:
            if self.ampere_enabled:
                if not check_is_ampere_sparse(parameter.t()):
                    logger.debug(f"{name} is not ampere sparse")
                    self.is_ampere_valid = False

            if self.block_sparse_enabled:
                nnz, blocks = nnz_blocks_count(parameter, self.mask_block_rows, self.mask_block_cols)
                self.nnz_total += nnz
                self.blocks_total += blocks

                logger.debug(f"{name} block density {nnz}/{blocks}={nnz / blocks}")

            mask_ones = (parameter != 0).sum().item()
            logger.debug(name.ljust(60, " "), str(round(100 * mask_ones / original_parameter.numel(), 3)).ljust(20, " "),
                  str(mask_ones), str(original_parameter.numel()))

            self.remaining_count += mask_ones
            self.encoder_count += original_parameter.numel()
        else:
            logger.debug(f"Adding {name}: {original_parameter.numel()}")
            self.remaining_count += original_parameter.numel()
            self.encoder_count += original_parameter.numel()

    def finish(self):
        ret = {}
        ret["parameters"] = self.encoder_count
        ret["nnz_parameters"] = self.remaining_count
        ret["global_density"] = self.remaining_count / self.encoder_count
        ret["ampere"] = self.ampere_enabled
        if self.ampere_enabled:
            ret["is_ampere_valid"] = self.is_ampere_valid

        ret["block_sparse"] = self.block_sparse_enabled

        if self.block_sparse_enabled:
            nnz_total = self.nnz_total
            blocks_total = self.blocks_total
            total_block_density = nnz_total / blocks_total

            ret["block_sparse_nnz"] = nnz_total
            ret["block_sparse_total"] = blocks_total
            ret["block_sparse_density"] = total_block_density

            threshold = self.mask_args['threshold']

            if abs(total_block_density - threshold) > 0.001:
                if self.mask_args["pruning_method"] == "sigmoied_threshold":
                    ret["is_block_sparse_valid"] = True
                else:
                    ret["is_block_sparse_valid"] = False
                    logger.debug(
f"Total block density {nnz_total}/{blocks_total}={total_block_density * 100:0.2f}% !!!!=== {threshold * 100}%=threshold")
                logger.debug("TOTAL BLOCK SPARSITY VERY DIFFERENT FROM THRESHOLD")
            else:
                ret["is_block_sparse_valid"] = True
                logger.debug(
                    f"Total block density {nnz_total}/{blocks_total}={total_block_density * 100:0.2f}% ~ {threshold * 100}%=threshold")


        self.info["check_report"] = ret
        self.info["original_path"] = str(self.path)

        return self.info

class Normalizer(ParameterCounter):
    def __init__(self, path, dest_path):
        super().__init__(path)
        self.dest_path = Path(dest_path).resolve()

        if self.dest_path is None:
            self.dest_path = self.path.parent / f"normalized_{self.path.name}"

        self.pruned_model = {}

    def add_parameter(self, name, original_parameter, parameter, is_linear_layer_weight):
        super().add_parameter(name=name,
                              original_parameter = original_parameter,
                              parameter=parameter,
                              is_linear_layer_weight=is_linear_layer_weight)

        if is_linear_layer_weight:
            self.pruned_model[name] = parameter
        else:
            self.pruned_model[name] = original_parameter

    def finish(self):
        report = super().finish()
        if not self.dest_path.exists():
            shutil.copytree(self.path, self.dest_path)
            logger.debug(f"\nCreated folder {self.dest_path}")
        logger.debug(f"Saving to {self.dest_path}")

        torch.save(self.pruned_model, self.dest_path / "pytorch_model.bin")
        s = json.dumps(report)
        with (self.dest_path / "report.json").open("w") as report_file:
            report_file.write(s)

        return report

class BestCheckpointExtractor():
    def __init__(self, input_dir, output_dir, minf1 = 70):
        self.input_dir = Path(input_dir).resolve()
        self.output_dir = Path(output_dir).resolve()
        self.minf1 = minf1

    def run(self):
        maxf1 = 0
        best_checkpoint_dir = None
        for p in os.listdir(self.input_dir):
            if p.startswith("checkpoint-"):
                checkpoint_dir = self.input_dir / p
                report = read_info(checkpoint_dir)
                if report["result"] is None:
                    continue
                f1 = report["result"]["f1"]
                if f1 > self.minf1:
                    if maxf1 < f1:
                        maxf1 = f1
                        best_checkpoint_dir = checkpoint_dir

        if best_checkpoint_dir is not None:
            dest = self.output_dir / self.input_dir.name
            if not dest.exists():
                shutil.copytree(best_checkpoint_dir, dest, dirs_exist_ok=False)
                with (dest / "original_directory.txt").open("w") as f:
                    f.write(str(self.input_dir) + "\n")

class Evaluator():
    def __init__(self, path, patch_model):
        self.path = Path(path).resolve()
        self.patch_model = patch_model

    def run(self):
        path = str(self.path)
        command = ['masked_run_squad.py',
                   '--model_type',
                   'bert',
                   '--model_name_or_path',
                   path,
                   '--tokenizer_name',
                   'bert-base-uncased',
                   '--output_dir',
                   path,
                   '--data_dir',
                   'squad_data',
                   '--predict_file',
                   'dev-v1.1.json',
                   '--do_eval',
                   '--do_lower_case',
                   '--per_gpu_eval_batch_size',
                   '16',
                   '--max_seq_length',
                   '384',
                   '--doc_stride',
                   '128']
        if self.patch_model:
            command.append("--patch_model_for_eval")
        sh.python(command, _fg=True)


class PackagerException(Exception):
    pass

class BadF1ModelException(PackagerException):
    pass

import contextlib
import os

@contextlib.contextmanager
def cd(path):
   old_path = os.getcwd()
   os.chdir(path)
   try:
       yield
   finally:
       os.chdir(old_path)

class Packager:
    def __init__(self, src_path, git_base_path, minimal_f1 = 80):
        self.src_path = Path(src_path).resolve()
        self.git_base_path = Path(git_base_path).resolve()
        self.version = 1
        self.minimal_f1 = minimal_f1

    def load_info(self):
        self.info_from_files = read_info(self.src_path)
        with (self.src_path / "report.json").open("r") as f:
            self.report = self.rewrite_report(json.loads(f.read()))

        self.model_owner_name = "madlag"  # sh.transformers_cli("whoami").split("\n")[0]
        self.model_name = self.build_model_name()
        print(self.model_name)

    def rewrite_report(self, report):
        del report["args"]["output_dir"]
        del report["args"]["device"]
        del report["original_path"]

        f1_ref = self.info_from_files["result"]["f1"]
        exact_ref = self.info_from_files["result"]["exact"]

        f1 = report["result"]["f1"]
        exact = report["result"]["exact"]

        for renaming in ("check_report", "sparsity"), ("result", "precision"):
            report[renaming[1]] = report[renaming[0]]
            del report[renaming[0]]

        assert (abs(f1 - f1_ref) < 1e-5)
        assert (abs(exact - exact_ref) < 1e-5)

        performance = {}
        for suffix, type in ("", "dense"), ("_patched", "pytorch_block_sparse"):
            e = json.loads((self.src_path / f"evaluation_timings_{suffix}.json").open().read())
            performance[type] = e

        for k in performance:
            performance[k]["eval_elapsed_time"] = performance[k]["elapsed_time"]
            del performance[k]["elapsed_time"]

        performance["speedup"] = performance["dense"]["eval_elapsed_time"] / performance["pytorch_block_sparse"][
            "eval_elapsed_time"]

        report["performance"] = performance

        report["sparsity"]["block_size"] = (
        report["config"]["mask_block_rows"], report["config"]["mask_block_cols"])
        return report

    def build_model_name(self):
        is_ampere = self.report["config"]["ampere_pruning_method"] == "annealing"
        density = self.report["sparsity"]["block_sparse_density"]
        if is_ampere:
            density /= 2
        name = f"bert-base-uncased-squad1.1-block-sparse-{density:.2f}"
        if is_ampere:
            name += "-ampere"

        name += f"-v{self.version}"

        return name

    def check(self):
        f1 = self.report["precision"]["f1"]
        if f1 < self.minimal_f1:
            raise BadF1ModelException(f"Model {self.model_name} f1={f1} does not reach given minimal f1={self.minimal_f1}")
        else:
            return True

    def create_git(self):

        git_path = self.git_base_path / self.model_owner_name / self.model_name
        if not git_path.parent.exists():
            git_path.parent.mkdir(parents=True)
        if not git_path.exists():
            sh.transformers_cli("repo", "create", "-y", f"{self.model_name}")
            with cd(git_path.parent):
                sh.git("clone", f"https://huggingface.co/{self.model_owner_name}/{self.model_name}")
        return git_path

    def create_readme(self):
        model_card_path = Path("model_card")
        (self.git_path / model_card_path).mkdir(exist_ok=True)

        images = {}
        images["pruning_image"] = "pruning.svg"

        model_card_base_url = f"https://huggingface.co/{self.model_owner_name}/{self.model_name}/raw/main/model_card"
        urlbase = f"{model_card_base_url}/layer_images"
        js_path = f"/{self.model_owner_name}/{self.model_name}/raw/main/model_card/density.js"

        if True:
            from block_movement_pruning.model_card_graphics import PruningInfoPlotter, DensityPlotter
            p = PruningInfoPlotter(self.report["sparsity"]["pruned_heads"], self.report["config"]["num_attention_heads"])
            p.plot()

            # TEMPORARY
            model = BertForQuestionAnswering.from_pretrained(self.src_path)


            dp = DensityPlotter(model, self.git_path / model_card_path / "layer_images", url_base=urlbase, js_path=js_path)
            dp.plot()
            js, density_html = dp.get_html()
            (self.git_path / model_card_path / "density.js").open("w").write(js)

            p.save_image(str(self.git_path / model_card_path / images["pruning_image"]))

            pruned_heads_graphic = p.get_html()
        else:
            density_html = ""

        template_file = Path(__file__).parent / "README_MODEL.md.jinja"
        template = jinja2.Template(template_file.open().read())

        ret = template.render(**self.report, images=images, burl=model_card_base_url, density_html=density_html)

        with (self.git_path / "README.md").open("w") as readme_file:
            readme_file.write(ret)

    def copy_model_files(self):
        modified = False
        from pytorch_block_sparse.util import BertHeadsPruner

        if not (self.git_path / "tf_model.h5").exists():
            tf_model = TFBertForQuestionAnswering.from_pretrained(self.src_path, from_pt=True)
            tf_model.save_pretrained(self.git_path)
            modified = True

        devel = True
        if not (self.git_path / "pytorch_model.bin").exists() or devel:
            model = BertForQuestionAnswering.from_pretrained(self.src_path)
            to_prune, head_count = BertHeadsPruner(model).get_pruned_heads()
            model.prune_heads(to_prune)
            config = model.config

            config.pruned_heads = to_prune
            self.report["sparsity"]["pruned_heads"] = to_prune

            config.block_size = [config.mask_block_rows, config.mask_block_cols]
            KEYS_TO_DELETE = ["pruning_submethod", "shuffling_method", "in_shuffling_group", "out_shuffling_group"]
            KEYS_TO_DELETE += ["ampere_mask_init", "ampere_pruning_method", "ampere_mask_scale", "mask_init", "mask_scale"]
            KEYS_TO_DELETE += ["pruning_method", "mask_block_rows", "mask_block_cols", "gradient_checkpointing"]
            KEYS_TO_DELETE += ["initializer_range", "intermediate_size", "hidden_dropout_prob", "layer_norm_eps"]

            for key in KEYS_TO_DELETE:
                delattr(config, key)

            config.architectures = ["BertForQuestionAnswering"]
            config.name_or_path = f"{self.model_owner_name}/{self.model_name}"
            model.save_pretrained(self.git_path)
            modified = True
            self.report["sparsity"]["total_pruned_attention_heads"] = sum([len(t) for t in to_prune.values()])
            self.report["sparsity"]["total_attention_heads"] = self.report["config"]["num_attention_heads"] * self.report["config"]["num_hidden_layers"]

        self.report["packaging"] = {}
        self.report["packaging"]["pytorch_final_file_size"] = os.stat(self.git_path / "pytorch_model.bin").st_size
        self.report["packaging"]["model_owner"] = self.model_owner_name
        self.report["packaging"]["model_name"] = f"{self.model_owner_name}/{self.model_name}"


        #PRODUCED_PATHES = ["dev-v1.1.json", "nbest_predictions_.json", "predictions_.json"]
        FILES = "special_tokens_map.json", "tokenizer_config.json", "vocab.txt" #, "report.json"
        for file in FILES:
            if not (self.git_path / file).exists():
                shutil.copyfile(self.src_path / file, self.git_path / file)
                modified = True


        if not (self.git_path / "model_meta.json").exists() or devel:
            with (self.git_path / "model_meta.json").open("w") as file:
                report_string = pretty_json(self.report)
                file.write(report_string)
        else:
            self.report = json.loads((self.git_path / "model_meta.json").open().read())

        return modified

    def add_files(self):
        # "pytorch_model.bin",  "tf_model.h5"
        files = ["config.json", "special_tokens_map.json",  "tokenizer_config.json",  "vocab.txt"]
        files += ["README.md", "model_meta.json", "model_card/pruning.svg", "model_card/layer_images", "model_card/density.js"]
        with cd(self.git_path):
            sh.git("add", *files, _fg=True)

    def commit(self):
        with cd(self.git_path):
            #sh.git("status", _fg=True)
            sh.git("commit", "-m", "Adding modes, graphs and metadata.", _fg=True)

    def push(self):
        with cd(self.git_path):
            sh.git("status", _fg=True)
            sh.git("push", _fg=True)

    def test(self):
        # Download the model and do some basic stuff
        pass

    def run(self):
        "https://huggingface.co/madlag/bert-base-uncased-squad-v1-sparse0.25/raw/main/config.json"
        self.load_info()
        self.check()
        self.git_path = self.create_git()
        self.copy_model_files()
        self.create_readme()
        #if modified:
        self.add_files()
        self.commit()
        self.push()




@click.group()
@click_log.simple_verbosity_option(logger, default="INFO")
@click.pass_context
def cli(ctx):
    ctx.obj = {}

import sys
indent = 4
if sys.version_info.major == 3 and 4 <= sys.version_info.minor <= 8:
  import block_movement_pruning._make_iterencode as _make_iterencode
  json.encoder._make_iterencode = _make_iterencode._make_iterencode
  indent = (4, None)

def pretty_json(p):
    return json.dumps(p, sort_keys=True, indent=indent, separators = [", ", ": "])

@cli.command()
@click.pass_context
@click.argument('path', default = None, nargs = -1, type=click.Path(exists = True, resolve_path = True))
def stats(ctx, path):
    if len(path) == 0:
        raise click.BadArgumentUsage("You should specify at least one input path")
    for i, p in enumerate(path):
        logger.info(f"Checking {i+1}/{len(path)}: {p}")
        mpp = ParameterCounter(p)
        report = mpp.run()
        print(pretty_json(report))



@cli.command()
@click.pass_context
@click.option('--minf1', '-m', type=float, default=70)
@click.argument('path', default = None, nargs = -1, type=click.Path(exists = True, resolve_path = True))
@click.argument('output', default=None, type=click.Path(exists = True, resolve_path = True))
def extract_best_checkpoint(ctx, minf1, output, path):
    if len(path) == 0:
        raise click.BadArgumentUsage("You should specify at least one input path")
    for i, p in enumerate(path):
        logger.info(f"Extracting best checkpoint {i+1}/{len(path)}: {p}")
        bce = BestCheckpointExtractor(p, output,minf1=minf1)
        bce.run()

    #logger.debug(path + ":" + main(path, output)


@cli.command()
@click.pass_context
@click.argument('path', nargs=-1, type=click.Path(exists = True, resolve_path = True))
@click.argument('output', default = None, type=click.Path(resolve_path = True))
def normalize(ctx, path, output):
    output = Path(output).resolve()
    if len(path) == 0:
        raise click.BadArgumentUsage("You should specify at least one input path")
    for i, p in enumerate(path):
        p = Path(p).resolve()
        logger.info(f"Normalizing {i + 1}/{len(path)}: {p}")
        normalizer = Normalizer(p, output / p.name)
        report = normalizer.run()
        print(pretty_json(report))



@cli.command()
@click.pass_context
@click.argument('path', nargs=-1, type=click.Path(exists = True, resolve_path = True))
def evaluate(ctx, path):
    if len(path) == 0:
        raise click.BadArgumentUsage("You should specify at least one input path")
    for i, p in enumerate(path):
        p = Path(p).resolve()
        logger.info(f"Evaluating {i + 1}/{len(path)}: {p}")
        for patch_model in [True, False]:
            evaluator = Evaluator(p, patch_model=patch_model)
            evaluator.run()


@cli.command()
@click.pass_context
@click.argument('path', nargs=-1, type=click.Path(exists = True, resolve_path = True))
@click.argument('output', default = None, type=click.Path(resolve_path = True))
@click.option('--minf1', '-m', type=float, default=80)
def package(ctx, path, output, minf1):
    output = Path(output).resolve()
    if len(path) == 0:
        raise click.BadArgumentUsage("You should specify at least one input path")
    for i, p in enumerate(path):
        p = Path(p).resolve()
        logger.info(f"Packaging {i + 1}/{len(path)}: {p.name}")
        packager = Packager(p, output, minimal_f1=minf1)
        try:
            packager.run()
        except PackagerException as e:
            logger.error(e)

def extract_f1_from_tensorboard(path):
    import os
    import json
    from tensorboard.backend.event_processing import event_accumulator
    path = Path(path).resolve()
    def find_event_file(path):
        found = False
        for p in os.listdir(path):
            if p.startswith("events.out.tfevents"):
                found = True
                break

        if found:
            a = event_accumulator.EventAccumulator(path / p)
            a.Reload()
            return a
        return None

    def extract_checkpoint_data(a):
        ret = {}
        for key in ["exact", "f1"]:
            for s in a.Scalars(f"eval/{key}"):
                if s.step not in ret:
                    ret[s.step] = {}
                ret[s.step][key] = s.value
        return ret

    def write_checkpoints_data(path):
        a = find_event_file(path)
        if a is None:
            print(f"Event file not found for {path}")
            return
        data = extract_checkpoint_data(a)
        for k, v in data.items():
            checkpoint_path = f / f"checkpoint-{k}"
            if checkpoint_path.exists():
                report_path = checkpoint_path /  "report_from_tensorboard.json"
                report_data = json.dumps(v)
                with report_path.open("w") as f:
                    f.write(report_data)

    for p in path:
        p = Path(p).resolve()
        print(p)
        try:
            write_checkpoints_data(p)
        except Exception as e:
            print(e)

    return

    output = Path(output).resolve()
    tmp_output_path = output /  "tmp_normalize"
    for p in path:
        p = Path(p).resolve()
        for checkpoint in range(30000, 120000, 5000):
            checkpoint_path = p / f"checkpoint-{checkpoint}"
            eval_results = checkpoint_path /  "dev-v1.1.json/eval_results.txt"
            if eval_results.exists():
                continue

            shutil.rmtree(tmp_output_path, ignore_errors=True)
            shutil.copytree(checkpoint_path, tmp_output_path)
            bertarizer = Bertarizer(checkpoint_path, tmp_output_path, package=False)
            report = bertarizer.run()
            report["original_path"] = checkpoint_path

            run_evaluate(tmp_output_path)


            print(report)
            break

            #output_path = os.path.join(output, os.path.split(p)[-1], )
            #if os.path.exists(checkpoint_path):

            #print(output_path)


def main():
    return cli()
