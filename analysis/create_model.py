from pathlib import Path
import json
import sh
import shutil
from transformers import BertForQuestionAnswering, TFBertForQuestionAnswering
from tempfile import TemporaryDirectory
from nn_pruning.inference_model_patcher import optimize_model
from analysis.model_card_graphics import PruningInfoBokehPlotter, DensityBokehPlotter
import jinja2

import sys
indent = 4
if sys.version_info.major == 3 and 4 <= sys.version_info.minor <= 8:
  from . import _make_iterencode
  json.encoder._make_iterencode = _make_iterencode._make_iterencode
  indent = (4, None)

from examples.question_answering.qa_sparse_xp import QASparseXP
from examples.text_classification.glue_sparse_xp import GlueSparseXP

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

    @classmethod
    def build_model_name_(cls, model_size, task, speedup, precision, linear_sparsity, kind, is_ampere, version):
        density = int(100 - linear_sparsity)

        name = f"bert-{model_size}-uncased-{task}-x{speedup:.2f}-f{precision:.1f}-d{density}-{kind}"
        if is_ampere:
            name += "-ampere"

        name += f"-v{version}"
        return name

    def build_model_name(self):
        checkpoint_info = self.checkpoint_info
        source_path = checkpoint_info.get("source_checkpoint")
        if source_path is not None:
            print(source_path)
            source_info = self.info["checkpoints"][source_path]

        self.is_ampere = checkpoint_info["sparse_args"]["ampere_pruning_method"] != "disabled"
        stats = checkpoint_info["stats"]
        self.model_size = "base" if stats["linear_total"] == 84934656 else "large"
        self.sparsity = int(stats["linear_sparsity"])
        self.total_sparsity = int(stats["total_sparsity"])
        self.density = int(100 - stats["linear_sparsity"])
        self.total_density = int(100 - stats["total_sparsity"])
        speedup = checkpoint_info["speedup"]

        f1 = checkpoint_info["eval_metrics"]["f1"]

        return self.build_model_name_(self.model_size, task, speedup, f1, stats["linear_sparsity"], self.kind, self.is_ampere, self.version)

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
        print(git_path)
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

        finally:
            if d is not None:
                d.cleanup()

        # Reload the config, this may have been changed by compilation / optimization (pruned_heads, gelu_patch, layer_norm_patch)
        with (self.git_path / "config.json").open() as f:
            self.checkpoint_info["config"] = json.load(f)

        return modified

    JS_PATH = "$$JS_PATH$$"
    def create_graphics(self, url_base, model_card_path):
        pruned_heads = self.checkpoint_info["config"].get("pruned_heads")
        ret = {}
        if pruned_heads is not None:
            pruning_info_plotter = PruningInfoBokehPlotter("pruning_info", self.JS_PATH)
            fig, js, html = pruning_info_plotter.run(layer_count=12, pruned_heads=pruned_heads, heads_count=12)
            ret["pruning_info"] = dict(js=js, html=html)

        density_plotter = DensityBokehPlotter("density", self.JS_PATH)

        model = BertForQuestionAnswering.from_pretrained(self.git_path)

        fig, js, html = density_plotter.run(model=model,
                                            dest_path=model_card_path / "images",
                                            url_base=url_base + "/images")
        ret["density_info"] = dict(js=js, html=html)

        from bokeh.io import export_png

        export_png(fig, filename="/tmp/plot.png")

        return ret

    def create_readme(self):
        checkpoint_info = self.checkpoint_info
        model_card_path = "model_card"
        (self.git_path / model_card_path).mkdir(exist_ok=True)

        model_path = f"/{self.model_owner_name}/{self.model_name}/raw/main/{model_card_path}"
        model_card_base_url = f"https://huggingface.co{model_path}"

        graphics = self.create_graphics(url_base=model_path, model_card_path = self.git_path / model_card_path)


        for k, v in graphics.items():
            with (self.git_path / model_card_path / (k + ".js")).open("w") as f:
                f.write(v["js"])
                html = v["html"]
                html = html.replace(self.JS_PATH, f"{model_path}/{k}.js")[1:]
                v["html"] = html

        template_file = Path(__file__).parent / "files" / "README_MODEL.jinja.md"
        template = jinja2.Template(template_file.open().read())

        config = checkpoint_info["config"]
        pruned_heads = sum([len(x) for x in config["pruned_heads"].values()])
        total_heads = config["num_hidden_layers"] * config["num_attention_heads"]

        sparsity_report = dict(linear_density = self.density,
                               total_density = self.total_density,
                               is_ampere=self.is_ampere, pruned_heads=pruned_heads, total_heads=total_heads)
        pytorch_final_file_size = (self.git_path / "pytorch_model.bin").stat().st_size
        packaging_report = dict(pytorch_final_file_size=pytorch_final_file_size, model_name=self.model_name, model_owner_name = self.model_owner_name, version=self.version)

        reference = dict(main_metric_value=88.5, main_metric_name="F1")
        eval_metrics = checkpoint_info["eval_metrics"]
        if task == "squadv1":
            eval_metrics["main_metric"] = eval_metrics["f1"]

        nn_pruning_needed = config.get("layer_norm_type") == "no_norm"
        use_relu = config.get("hidden_act") == "relu"

        teacher = self.checkpoint_info["sparse_args"].get('distil_teacher_name_or_path')
        ret = template.render(speedup = checkpoint_info["speedup"],
                              sparsity = sparsity_report,
                              packaging = packaging_report,
                              eval_metrics = eval_metrics,
                              graphics=graphics,
                              burl=model_card_base_url,
                              kind=self.kind,
                              reference = reference,
                              task=self.task,
                              nn_pruning_needed=nn_pruning_needed,
                              use_relu=use_relu,
                              teacher=teacher)

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
        files += ["README.md", "model_card"]
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
    checkpoint_path = "/data_2to/devel_data/nn_pruning/output/squad_test_final_fine_tune/fine_tuned_hp_od-output__squad_test3_es-steps_nte20_ls250_est5000_rn-output__squad_test3_dpm-sigmoied_threshold:1d_alt_apme-sigmoied_threshold_aowd0_bm1_abr32_abc32_it0_fw10_r-l1_rfl20_dl0.25_dtnop-csarron__bert-base-uncased-squad-v1/checkpoint-22132"
    checkpoint_path = "/data_2to/devel_data/nn_pruning/output/squad_test_9_fullpatch4/hp_od-__data_2to__devel_data__nn_pruning__output__squad_test_9_fullpatch4___es-steps_nte20_ls250_stl50_est5000_rn-__data_2to__devel_data__nn_pruning__output__squad_test_9_fullpatch4_--6cb2db64e9a885f1/checkpoint-110000"
    kind = "hybrid-filled-opt"
    task = "squadv1"

    git_base_path = (Path(__file__).resolve().parent.parent.parent / "models").resolve()
    p = Packager("madlag", "files/results_squadv1.json", checkpoint_path, git_base_path, kind = kind, task = task)
    p.run()