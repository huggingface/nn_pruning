from pathlib import Path
import json
import sh
import shutil
from transformers import BertForQuestionAnswering, TFBertForQuestionAnswering, BertConfig
from tempfile import TemporaryDirectory
from nn_pruning.inference_model_patcher import optimize_model
from nn_pruning.analysis.model_card_graphics import PruningInfoBokehPlotter
import jinja2

import sys
indent = 4
if sys.version_info.major == 3 and 4 <= sys.version_info.minor <= 8:
  from nn_pruning.analysis import _make_iterencode
  json.encoder._make_iterencode = _make_iterencode._make_iterencode
  indent = (4, None)

from nn_pruning.examples.question_answering.qa_sparse_xp import QASparseXP
from nn_pruning.examples.text_classification.glue_sparse_xp import GlueSparseXP

def pretty_json(p):
    return json.dumps(p, sort_keys=True, indent=indent, separators = [", ", ": "])

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
    def __init__(self,
                 owner_name,
                 info_filepath,
                 checkpoint_path,
                 git_base_path,
                 kind,
                 task
                 ):
        self.info_filepath = Path(info_filepath).resolve()
        self.checkpoint_path = checkpoint_path
        self.git_base_path = Path(git_base_path).resolve()
        self.version = 1
        self.model_owner_name = owner_name
        self.kind = kind
        self.task = task

    def build_model_name(self):
        checkpoint_info = self.checkpoint_info
        source_path = checkpoint_info.get("source_checkpoint")
        if source_path is not None:
            source_info = self.info["checkpoints"][source_path]

        self.is_ampere = checkpoint_info["sparse_args"]["ampere_pruning_method"] != "disabled"
        if source_info is None:
            stats = checkpoint_info["stats"]
            size = "base" if stats["linear_total"] <= 84934656 else "large"
            self.density = stats["linear_sparsity"]
        else:
            stats = checkpoint_info["stats"]
            self.density = stats["linear_sparsity"]

            size = "base" if source_info["config"]["_name_or_path"] == 'bert-base-uncased' else "large"
            if size == "base":
                linear_total = 12 * 12 * 768 * 768
            elif size == "large":
                linear_total = 12 * 24 * 1024 * 1024

            linear_size = stats["linear_nnz"]
            self.density = linear_size / linear_total

        self.density  = int(self.density * 100)
        speedup = checkpoint_info["speedup"]

        f1 = checkpoint_info["eval_metrics"]["f1"]
        if self.is_ampere:
            self.density /= 2
        name = f"bert-{size}-uncased-{self.task}-x{speedup:.2f}-f{f1:.1f}-d{self.density}-{self.kind}"
        if self.is_ampere:
            name += "-ampere"

        name += f"-v{self.version}"

        return name

    def load_info(self):
        with self.info_filepath.open() as f:
            info = json.load(f)

        self.info = info
        self.checkpoint_info = info["checkpoints"][self.checkpoint_path]
        self.model_name = self.build_model_name()

    def sanity_check(self):
        pass


    def create_git(self):
        git_path = self.git_base_path / self.model_owner_name / self.model_name
        if not git_path.parent.exists():
            git_path.parent.mkdir(parents=True)
        if not git_path.exists():
            sh.transformers_cli("repo", "create", "-y", f"{self.model_name}")
            with cd(git_path.parent):
                sh.git("clone", f"https://huggingface.co/{self.model_owner_name}/{self.model_name}")
        return git_path

    def copy_model_files(self):
        modified = False

        src_path = self.checkpoint_path

        d = None
        try:
            if not (self.git_path / "tf_model.h5").exists() or not (self.git_path / "pytorch_model.bin").exists():
                if task.startswith("squad"):
                    d = TemporaryDirectory()
                    model = QASparseXP.compile_model(src_path, dest_path=d.name)
                    model = optimize_model(model, "heads")
                    model.save_pretrained(d.name)
                    src_path = d.name
                else:
                    raise Exception(f"Unknown task {task}")

            if not (self.git_path / "tf_model.h5").exists():
                with TemporaryDirectory() as d2:
                    if task.startswith("squad"):
                        QASparseXP.final_fine_tune_bertarize(src_path, d2, remove_head_pruning=True)
                    else:
                        raise Exception(f"Unknown task {task}")

                    tf_model = TFBertForQuestionAnswering.from_pretrained(d2, from_pt=True)
                    tf_model.save_pretrained(self.git_path)
                    modified = True

            if not (self.git_path / "pytorch_model.bin").exists():
                model = BertForQuestionAnswering.from_pretrained(src_path)
                model.save_pretrained(self.git_path)
                modified = True

            FILES = "special_tokens_map.json", "tokenizer_config.json", "vocab.txt"
            for file in FILES:
                if not (self.git_path / file).exists():
                    shutil.copyfile(str(Path(src_path) / file), str(self.git_path / file))
                    modified = True

            return modified
        finally:
            if d is not None:
                d.cleanup()

    JS_PATH = "$$JS_PATH$$"
    def create_graphics(self):
        pruned_heads = self.checkpoint_info["config"].get("pruned_heads")
        ret = {}
        if pruned_heads is not None:
            pruning_info_plotter = PruningInfoBokehPlotter("pruning_info", self.JS_PATH)
            fig, js, html = pruning_info_plotter.run(layer_count=12, pruned_heads=pruned_heads, heads_count=12)
            ret["pruning_info"] = dict(js=js, html=html)
        return ret

        if False:

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


    def create_readme(self):
        checkpoint_info = self.checkpoint_info
        model_card_path = "model_card"
        (self.git_path / model_card_path).mkdir(exist_ok=True)

        graphics = self.create_graphics()

        model_path = f"/{self.model_owner_name}/{self.model_name}/raw/main/{model_card_path}"
        model_card_base_url = f"https://huggingface.co{model_path}"

        for k, v in graphics.items():
            with (self.git_path / model_card_path / (k + ".js")).open("w") as f:
                f.write(v["js"])
                html = v["html"]
                html = html.replace(self.JS_PATH, f"{model_path}/{k}.js")[1:]
                v["html"] = html

        template_file = Path(__file__).parent / "files" / "README_MODEL.md.jinja"
        template = jinja2.Template(template_file.open().read())

        config = checkpoint_info["config"]
        pruned_heads = sum([len(x) for x in config["pruned_heads"]])
        total_heads = config["num_hidden_layers"] * config["num_attention_heads"]
        sparsity_report = dict(density = self.density, is_ampere=self.is_ampere, pruned_heads=pruned_heads, total_heads=total_heads)
        pytorch_final_file_size = (self.git_path / "pytorch_model.bin").stat().st_size
        packaging_report = dict(pytorch_final_file_size=pytorch_final_file_size, model_name=self.model_name, model_owner_name = self.model_owner_name, version=self.version)
        ret = template.render(speedup = checkpoint_info["speedup"],
                              sparsity = sparsity_report,
                              packaging = packaging_report,
                              eval_metrics = checkpoint_info["eval_metrics"],
                              graphics=graphics,
                              burl=model_card_base_url,
                              kind=self.kind,
                              task=self.task)

        with (self.git_path / "README.md").open("w") as readme_file:
            readme_file.write(ret)

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


    def test(self):
        # Download the model and do some basic stuff
        pass

    def add_files(self):
        files = ["pytorch_model.bin",  "tf_model.h5"]
        files += ["config.json", "special_tokens_map.json", "tokenizer_config.json", "vocab.txt"]
        files += ["README.md"] #, "model_meta.json", "model_card/pruning.svg", "model_card/layer_images",
         #                  "model_card/density.js"]
        with cd(self.git_path):
            sh.git("add", *files, _fg=True)

    def commit(self):
        with cd(self.git_path):
            # sh.git("status", _fg=True)
            sh.git("commit", "-m", "Adding modes, graphs and metadata.", _fg=True)

    def push(self):
        with cd(self.git_path):
            sh.git("status", _fg=True)
            sh.git("push", _fg=True)

    def run(self):
        self.load_info()
        self.sanity_check()
        self.git_path = self.create_git()
        self.copy_model_files()
        self.create_readme()
        self.add_files()
        self.commit()
        self.push()

if __name__ == "__main__":
    checkpoint_path = "/data_2to/devel_data/nn_pruning/output/squad_test_final_fine_tune/fine_tuned_aws_nn-pruning-v10-a32-l5-dl0-5--2021-01-21--00-52-45/checkpoint-22132"
    kind = "hybrid-filled"
    task = "squadv1"

    git_base_path = Path(__file__).parent.parent.parent.parent / "models"
    p = Packager("madlag", "files/test2.json", checkpoint_path, git_base_path, kind = kind, task = task)
    p.run()