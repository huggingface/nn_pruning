from examples.question_answering.qa_xp import QAXP
from examples.question_answering.qa_sparse_xp import QASparseXP
from examples.text_classification.glue_xp import GlueXP
from examples.text_classification.glue_sparse_xp import GlueSparseXP
from examples.seq2seq.summarization_xp import SummarizationXP
from examples.seq2seq.summarization_sparse_xp import SummarizationSparseXP
import examples.xp as xp
from pathlib import Path
import json
import torch
from collections import defaultdict
import tempfile
from nn_pruning.inference_model_patcher import optimize_model
from nn_pruning.model_structure import struct_from_config

QA_TASKS = {"squadv1", "squadv2"}
GLUE_TASKS = {"mnli", "qqp", "sst2"}
SUMMARIZATION_TASKS = {"cnn_dailymail"}

class ModelStatsExtractBase:
    def __init__(self, path, output_name, task, copy_to_tmp_path = False):
        self.path = Path(path).resolve()
        self.output_name = output_name
        self.copy_to_tmp_path = copy_to_tmp_path
        self.task = task

    def open_model(self):
        if self.copy_to_tmp_path:
            self.dest_path_ = tempfile.TemporaryDirectory()
            self.dest_path = self.dest_path_.name
        else:
            self.dest_path = None

        if self.task in QA_TASKS:
            cls = QASparseXP
        elif self.task in GLUE_TASKS:
            cls = GlueSparseXP
        elif self.task in SUMMARIZATION_TASKS:
            cls = SummarizationSparseXP
        else:
            raise Exception(f"Unknown task {self.task}")

        return cls.compile_model(self.path, dest_path=self.dest_path)

    def run_(self, model):
        pass

    def run(self, force = False, write=True, **kwargs):
        output_report_path = self.path / self.output_name

        if output_report_path.exists() and not force:
            ret = json.load(output_report_path.open())
            return ret

        xp.XP.fix_last_checkpoint_bug_checkpoint(self.path)
        model = self.open_model()

        ret = self.run_(model, **kwargs)

        if write:
            with open(output_report_path, "w") as f:
                json.dump(ret, f)

        return ret

class ModelStatsExtract(ModelStatsExtractBase):
    def __init__(self, path, task):
        super().__init__(path, "sparsity_report.json", task)
        self.stats = {"total": 0, "nnz":0, "linear_total":0, "linear_nnz":0, "layers":{}}

    def get_layer_number(self, name):
        parts = name.split(".")
        for p in parts:
            try:
                return int(p)
            except:
                continue

    def add_parameter(self, name, parameter, is_linear_layer_weight, is_attention):
        layer_number = self.get_layer_number(name)
        if is_attention and "weight" in name:
            if len(parameter.shape) == 2:
                # Special case to avoid bad size when attention is pruned
                numel = self.attention_size * self.attention_size
            elif len(parameter.shape) == 1:
                numel = self.attention_size
            else:
                raise ValueError(f"Unsupported shape {parameter.shape}")
        else:
            numel = parameter.numel()

        nnz = int((parameter != 0).sum())
        self.stats["total"] += numel
        self.stats["nnz"] += nnz

        if layer_number is None:
            return

        if layer_number not in self.stats["layers"]:
            self.stats["layers"][layer_number] = defaultdict(int)

        self.stats["layers"][layer_number]["total"] += numel
        self.stats["layers"][layer_number]["nnz"] += nnz

        if is_linear_layer_weight:
            self.stats["linear_total"] += numel
            self.stats["linear_nnz"] += nnz
            self.stats["layers"][layer_number]["linear_total"] += numel
            self.stats["layers"][layer_number]["linear_nnz"] += nnz

            if is_attention:
                self.stats["layers"][layer_number]["linear_attention_total"] += numel
                self.stats["layers"][layer_number]["linear_attention_nnz"] += nnz
            else:
                self.stats["layers"][layer_number]["linear_dense_total"] += numel
                self.stats["layers"][layer_number]["linear_dense_nnz"] += nnz

    def run_(self, model):
        model_structure = struct_from_config(model.config_class)
        self.attention_size = getattr(model.config, model_structure.NAME_CONFIG["hidden_size"])
        for name, parameter in model.named_parameters():
            is_attention = model_structure.is_attention(name)
            is_ffn = model_structure.is_ffn(name)
            is_layernorm = model_structure.is_layernorm(name)
            is_linear_layer_weight = (is_attention or is_ffn) and name.endswith(".weight") and not is_layernorm
            self.add_parameter(name, parameter, is_linear_layer_weight, is_attention)

        total_sparsity = (1.0 - self.stats["nnz"] / self.stats["total"]) * 100
        self.stats["total_sparsity"] = total_sparsity
        sparsity = (1.0 - self.stats["linear_nnz"] / self.stats["linear_total"]) * 100
        self.stats["linear_sparsity"] = sparsity

        model = optimize_model(model, "heads")
        self.stats["pruned_heads"] = getattr(model.config, "pruned_heads")

        return self.stats

class ModelReferenceSpeedEvaluate(ModelStatsExtractBase):
    def __init__(self, model_name, task, dataset_config_name=None):
        self.model_name = model_name
        self.task = task
        self.dataset_config_name = dataset_config_name

    def run(self):
        if self.task in QA_TASKS:
            task = "squad" if self.task == "squadv1" else "squad_v2"
            ret = QAXP.evaluate_model(
                model_name_or_path=self.model_name,
                task=task,
                optimize_mode="disabled"
            )
        elif self.task in GLUE_TASKS:
            ret = GlueXP.evaluate_model(
                model_name_or_path=self.model_name,
                task=self.task,
                optimize_mode="disabled"
            )
        elif self.task in SUMMARIZATION_TASKS:
            ret = SummarizationXP.evaluate_model(
                model_name_or_path=self.model_name,
                task=self.task,
                dataset_config_name=self.dataset_config_name,
                optimize_mode="disabled"
            )
        else:
            raise Exception(f"Unknown task {self.task}")

        return ret

class ModelSpeedEvaluate(ModelStatsExtractBase):
    def __init__(self, path, task, dataset_config_name = None, optimize_mode = "dense"):
        if optimize_mode == "disabled":
            filename = "speed_report_no_optimize.json"
        else:
            assert(optimize_mode=="dense")
            filename = "speed_report.json"
        self.optimize_mode = optimize_mode
        self.dataset_config_name = dataset_config_name
        super().__init__(path, filename, task, copy_to_tmp_path=True)

    def run_(self, model):
        if self.task in QA_TASKS:
            task = "squad" if self.task == "squadv1" else "squad_v2"
            ret = QAXP.evaluate_model(
                model_name_or_path=self.dest_path,
                task=task,
                optimize_mode=self.optimize_mode
            )
        elif self.task in GLUE_TASKS:
            ret = GlueXP.evaluate_model(
                model_name_or_path=self.dest_path,
                task=self.task,
                optimize_mode=self.optimize_mode
            )
        elif self.task in SUMMARIZATION_TASKS:
            ret = SummarizationXP.evaluate_model(
                model_name_or_path=self.dest_path,
                task=self.task,
                dataset_config_name=self.dataset_config_name,
                optimize_mode=self.optimize_mode
            )
        else:
            raise Exception(f"Unknown task {self.task}")

        return ret



class ModelAddBasicReport:
    def __init__(self, checkpoint_path, checkpoint, base_speed_report, exclude_non_matching_f1=True, task=None):
        self.checkpoint_path = checkpoint_path
        self.checkpoint = checkpoint
        self.base_speed_report = base_speed_report
        self.exclude_non_matching_f1 = exclude_non_matching_f1
        self.task = task

    speed_key = "cuda_eval_elapsed_time"

    def basic_report(self):
        ret = {}
        checkpoint_path = self.checkpoint_path
        checkpoint = self.checkpoint
        base_time = self.base_speed_report[self.speed_key]

        speedup = base_time / checkpoint["speed"][self.speed_key]

        p = Path(checkpoint_path).resolve()
        # We retrieve the metric we just measure
        final_eval_metrics = checkpoint.get("eval_metrics")
        # We retrieve the non-optimized networks metrics (they may differ because bias pruning was not implemented at first)

        if self.task == "squadv1":
            # Special check for squad, as there was a 'bug' initially: bias where not pruned, resulting in a drop in F1
            eval_metrics = json.load(open(p / "eval_metrics.json"))

            eval_diff = eval_metrics["f1"] - final_eval_metrics["f1"]
            if eval_diff > 0.1:
                if self.exclude_non_matching_f1:
                    print("EXCLUDING (non matching f1 between run and final eval)", eval_diff, eval_metrics["f1"], final_eval_metrics["f1"], checkpoint_path)
                    return None
                else:
                    # The metrics are really the bad ones (absence bias pruning degrades performance)
                    ret["eval_metrics"] = final_eval_metrics
                    ret["unopt_eval_metrics"] = eval_metrics


        sparse_args = json.load(open(p / "sparse_args.json"))
        try:
            with (p.parent / "source.txt").open() as f:
                source_checkpoint = f.read().strip()
        except:
            source_checkpoint = None

        config = json.load(open(p / "config.json"))
        try:
            training_args = torch.load(p / "training_args.bin").to_dict()
        except:
            training_args = {}

        model_args = json.load(open(p / "model_args.json"))

        ret["sparse_args"] = sparse_args
        ret["config"] = config
        if source_checkpoint is not None:
            ret["source_checkpoint"] = source_checkpoint
        ret["training_args"] = training_args
        ret["model_args"] = model_args
        ret["speedup"] = speedup
        return ret


class ModelAnalysis:
    TASK_EVAL_INFO = {
        "squadv1":{"key":"eval_metrics.f1", "files":["eval_metrics"], "min":85},
        "squadv2": {"key": "eval_metrics.f1", "files": ["eval_metrics"], "min": 70},
        "mnli":{"key":"eval_results_mnli.eval_accuracy", "files":["eval_results_mnli", "eval_results_mnli-mm"], "min":0.7},
        "sst2": {"key": "eval_results_sst2.eval_accuracy", "files": ["eval_results_sst2"], "min": 0.7},
        "qqp": {"key": "eval_results_qqp.eval_f1", "files": ["eval_results_qqp"], "min": 0.7},
        "cnn_dailymail": {"key": "eval_results.eval_rouge2", "files": ["eval_results"], "min": 18}
    }
    REFERENCE_MODELS = {
        "squadv1":"csarron/bert-base-uncased-squad-v1",
        "squadv2": "twmkn9/bert-base-uncased-squad2",
        "mnli":"textattack/bert-base-uncased-MNLI",
        "qqp": "textattack/bert-base-uncased-QQP",
        "sst2": "textattack/bert-base-uncased-SST-2",
        "cnn_dailymail": "facebook/bart-large-cnn"
    }
    TASK_PREFIXES = {
        "squadv1": ["squad"],
        "squadv2": ["squadv2", "squad_v2"],
        "cnn_dailymail": ["cnn"]
    }

    def __init__(self,
                 path,
                 output_file_name,
                 task,
                 dataset_config_name = None,
                 force_speed = False,
                 prefixes = None,
                 exclude_non_matching_f1 = True):
        self.path = Path(path).resolve()
        self.total_checkpoints = 0
        self.output_file_name = output_file_name
        self.force_speed = force_speed
        self.prefixes = prefixes
        self.exclude_non_matching_f1 = exclude_non_matching_f1
        self.task = task
        self.dataset_config_name = dataset_config_name

    def checkpoint_index(self, name):
        return int(name[0][len("checkpoint-"):])

    def process_checkpoint(self, checkpoint_path, force_speed = False):
        checkpoint_info = {}

        # Extract statistics
        self.total_checkpoints += 1
        mse_stats = ModelStatsExtract(checkpoint_path, self.task)
        stats_report = mse_stats.run(force=False)
        checkpoint_info["stats"] = stats_report

        # Compute speed
        mse_speed = ModelSpeedEvaluate(checkpoint_path, self.task, self.dataset_config_name, optimize_mode="dense")
        eval_report = mse_speed.run(force=force_speed)

        checkpoint_info["speed"] = eval_report["timings"]
        checkpoint_info["eval_metrics"] = eval_report["metrics"]
        for k,v in eval_report.items():
            if k not in ["timings", "metrics"]:
                k = k.replace("metrics", "eval_metrics").replace("timings", "speed")
                checkpoint_info[k] = v

        return checkpoint_info

    def base_speed_report_get(self):
        # Create base report
        base_speed_report_file = Path(f"files/base_speed_report_file_{self.task}.json")
        if base_speed_report_file.exists():
            base_speed_report = json.load(base_speed_report_file.open())
        else:
            # Fine tuned models are already pruned, so faster, so not appropriate to have a base speed evaluation
            mse2 = ModelReferenceSpeedEvaluate(self.REFERENCE_MODELS[self.task], self.task, self.dataset_config_name)
            base_speed_report = mse2.run()["timings"]
            with base_speed_report_file.open("w") as f:
                json.dump(base_speed_report, f)
        return base_speed_report


    def analyze_run(self, path, force_speed= False):
        checkpoints = []
        for d in path.iterdir():
            if d.name.startswith("checkpoint-"):
                infos = {}
                for filename in self.TASK_EVAL_INFO[self.task]["files"]:
                    with open(d / f"{filename}.json") as f:
                        j = json.load(f)
                        infos[filename] = j
                checkpoints.append((d.name, infos))

        # Sort checkpoints by training step
        checkpoints.sort(key = lambda x : self.checkpoint_index(x))

        # Only keep the last 10 checkpoints
        checkpoints = checkpoints[-10:]

        # Filter checkpoints: remove all checkpoints such as f1 has improved afterwards, as that means that they are both
        # less sparse and less precise, so not interesting
        task_info = self.TASK_EVAL_INFO[self.task]
        eval_key = task_info["key"].split(".")

        filtered = []
        max_eval_value = 0
        min_eval_value = task_info["min"]
        for checkpoint in reversed(checkpoints):
            index = self.checkpoint_index(checkpoint)
            eval_value = checkpoint[1][eval_key[0]][eval_key[1]]
            if eval_value > min_eval_value and eval_value >= max_eval_value:
                filtered.insert(0, checkpoint)

            max_eval_value = max(max_eval_value, eval_value)

        ret = {}
        for i, k in enumerate(filtered):
            checkpoint_path = path / k[0]

            print("Processing", self.total_checkpoints)
            ret[str(checkpoint_path)] = self.process_checkpoint(checkpoint_path, force_speed=force_speed)

        return ret

    def check_prefix(self, name):
        for prefix in self.prefixes:
            if name.startswith(prefix):
                return True
        return False

    def run(self):
        base_speed_report = self.base_speed_report_get()
        checkpoints = {}
        missings = {}
        for i in range(2):
            if i == 0:
                for root_dir in self.path.iterdir():
                    task_prefixes = self.TASK_PREFIXES.get(self.task, [self.task])
                    found = False
                    for task_prefix in task_prefixes:
                        if root_dir.name.startswith(task_prefix + "_"):
                            found = True
                            break
                    if not found:
                        print(f"EXCLUDING {root_dir} : not task {self.task}")
                        continue
                    else:
                        print(f"PROCESSING {root_dir}")

                    for name in root_dir.iterdir():
                        if self.check_prefix(name.name):
                            new_checkpoints = self.analyze_run(name.resolve(), force_speed=self.force_speed)
                            checkpoints.update(new_checkpoints)
            elif i == 1:
                for missing in missings:
                    assert(missing is not None)
                    assert(missing not in checkpoints)
                    new_checkpoint = self.process_checkpoint(missing, force_speed=self.force_speed)
                    checkpoints[missing] = new_checkpoint

            to_delete = {}
            for checkpoint_path, checkpoint_info in checkpoints.items():
                if i == 1 and checkpoint_path not in missings:
                    continue
                mabr = ModelAddBasicReport(checkpoint_path, checkpoint_info, base_speed_report, exclude_non_matching_f1=self.exclude_non_matching_f1 and i == 0, task=self.task)
                br = mabr.basic_report()
                if br is None:
                    assert(i == 0)
                    assert(checkpoint_path is not None)
                    to_delete[checkpoint_path] = True
                else:
                    checkpoint_info.update(br)
                    source_checkpoint = br.get("source_checkpoint")
                    # Some checkpoint are the result of a post-processing of other checkpoints : make sure that the source is part of the report
                    if source_checkpoint is not None and source_checkpoint not in checkpoints:
                        missings[source_checkpoint] = True

            if i == 0:
                for checkpoint_path in to_delete:
                    del checkpoints[checkpoint_path]


        out = dict(base_speed_report=base_speed_report, checkpoints=checkpoints)
        with open(self.output_file_name + "_" + self.task + ".json", "w") as f:
            json.dump(out, f, sort_keys=True, indent = 4)


if __name__ == "__main__":
    import sys
    if len(sys.argv) > 4:
        exclude = sys.argv[4] != "all"
    else:
        exclude = True

    ma = ModelAnalysis(sys.argv[1],
                       sys.argv[2],
                       sys.argv[3],
                       force_speed=False,
                       prefixes = ["fine_tuned_", "hp_", "aws_",  "large_"],
                       exclude_non_matching_f1 = exclude)
    ma.run()
