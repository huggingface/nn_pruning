import nn_pruning.examples.question_answering.qa_sparse_xp as qa_sparse_xp
import nn_pruning.examples.question_answering.qa_xp as qa_xp
import os
from pathlib import Path
import json
import torch
from collections import defaultdict
import tempfile
from nn_pruning.inference_model_patcher import optimize_model

class ModelStatsExtractBase:
    def __init__(self, path, output_name, copy_to_tmp_path = False):
        self.path = Path(path).resolve()
        self.output_name = output_name
        self.copy_to_tmp_path = copy_to_tmp_path

    def open_model(self):
        if self.copy_to_tmp_path:
            self.dest_path_ = tempfile.TemporaryDirectory()
            self.dest_path = Path(self.dest_path_.name)
        else:
            self.dest_path = None

        ret = qa_sparse_xp.QASparseXP.compile_model(self.path, dest_path = self.dest_path)

        return ret

    def run_(self, model):
        pass

    def run(self, force = False, write=True, **kwargs):
        output_report_path = self.path / self.output_name

        if output_report_path.exists() and not force:
            ret = json.load(output_report_path.open())
            return ret

        qa_sparse_xp.QASparseXP.fix_last_checkpoint_bug_checkpoint(self.path)
        model = self.open_model()
        ret = self.run_(model, **kwargs)

        if write:
            with open(output_report_path, "w") as f:
                json.dump(ret, f)

        return ret

class ModelStatsExtract(ModelStatsExtractBase):
    def __init__(self, path):
        super().__init__(path, "sparsity_report.json")
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
        if "attention" in name and "weight" in name and "layernorm" not in name.lower().replace("_", ""):
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
        self.attention_size = model.config.hidden_size
        for name, parameter in model.named_parameters():
            if ".encoder."  in name:
                is_linear_layer_weight = name.endswith(".weight") and "LayerNorm" not in name
                is_attention = "attention" in name
            else:
                is_linear_layer_weight = False
                is_attention = False
            self.add_parameter(name, parameter, is_linear_layer_weight, is_attention)

        total_sparsity = (1.0 - self.stats["nnz"] / self.stats["total"]) * 100
        self.stats["total_sparsity"] = total_sparsity
        sparsity = (1.0 - self.stats["linear_nnz"] / self.stats["linear_total"]) * 100
        self.stats["linear_sparsity"] = sparsity
        print(f"################# sparsity={sparsity}")
        print(self.path)

        model = optimize_model(model, "heads")
        self.stats["pruned_heads"] = model.config.pruned_heads

        return self.stats

class ModelSpeedEvaluate(ModelStatsExtractBase):
    def __init__(self, path, optimize_mode = "dense"):
        if optimize_mode == "disabled":
            filename = "speed_report_no_optimize.json"
        else:
            assert(optimize_mode=="dense")
            filename = "speed_report.json"
        self.optimize_mode = optimize_mode
        super().__init__(path, filename, copy_to_tmp_path=True)

    def run_(self, model):
        ret = qa_xp.QAXP.evaluate_model(src_path=self.dest_path, optimize_mode=self.optimize_mode)
        return ret

class ModelAddBasicReport:
    def __init__(self, checkpoint_path, checkpoint, base_speed_report, exclude_non_matching_f1=True):
        self.checkpoint_path = checkpoint_path
        self.checkpoint = checkpoint
        self.base_speed_report = base_speed_report
        self.exclude_non_matching_f1 = exclude_non_matching_f1

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
        eval_metrics = json.load(open(p / "eval_metrics.json"))

        eval_diff = eval_metrics["f1"] - final_eval_metrics["f1"]
        if eval_diff > 0.1:
            if self.exclude_non_matching_f1:
                print("Excluding", eval_diff, eval_metrics["f1"], final_eval_metrics["f1"], checkpoint_path)
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
        training_args = torch.load(p / "training_args.bin").to_dict()
        #print(dir(training_args))


        ret["sparse_args"] = sparse_args
        ret["config"] = config
        if source_checkpoint is not None:
            ret["source_checkpoint"] = source_checkpoint
        ret["training_args"] = training_args
        ret["speedup"] = speedup
        return ret


class ModelAnalysis:
    def __init__(self, path, output_file_name, min_f1 = 85, force_speed = False, prefixes = None, exclude_non_matching_f1 = True):
        self.path = Path(path).resolve()
        self.total_checkpoints = 0
        self.output_file_name = output_file_name
        self.min_f1 = min_f1
        self.force_speed = force_speed
        self.prefixes = prefixes
        self.exclude_non_matching_f1 = exclude_non_matching_f1

    def checkpoint_index(self, name):
        return int(name[0][len("checkpoint-"):])

    def process_checkpoint(self, checkpoint_path, force_speed = False):
        # if "hp_od-output__squad_test3_es-steps_nte20_ls250_est5000_rn-output__squad_test3_dpm-sigmoied_threshold:1d_alt_apme-sigmoied_threshold_aowd0_it0_fw10_r-l1_rfl10.0_al0.00156_dtnop-csarron__bert-base-uncased-squad-v1/checkpoint-90000" not in str(checkpoint_path):
        #    self.total_checkpoints += 1
        #    continue
        # print(checkpoint_path)

        checkpoint_info = {}

        # Create base report
        base_speed_report_file = Path("files/base_speed_report_file.json")
        if base_speed_report_file.exists():
            base_speed_report = json.load(base_speed_report_file.open())
        else:
            # Fine tuned models are already pruned, so faster, so not appropriate to have a base speed evaluation
            if "fine_tuned" not in checkpoint_path:
                mse2 = ModelSpeedEvaluate(checkpoint_path, optimize_mode="disabled")
                base_speed_report = mse2.run(force=True, write=False)["timings"]
                with base_speed_report_file.open("w") as f:
                    json.dump(base_speed_report, f)

        # Extract statistics
        self.total_checkpoints += 1
        mse_stats = ModelStatsExtract(checkpoint_path)
        stats_report = mse_stats.run(force=False)
        checkpoint_info["stats"] = stats_report

        # Compute speed
        mse_speed = ModelSpeedEvaluate(checkpoint_path, optimize_mode="dense")
        eval_report = mse_speed.run(force=force_speed)

        checkpoint_info["speed"] = eval_report["timings"]
        checkpoint_info["eval_metrics"] = eval_report["metrics"]
        print(checkpoint_info)

        return checkpoint_info, base_speed_report

    def analyze_run(self, path, force_speed= False):
        checkpoints = []
        for d in os.listdir(path):
            if "checkpoint-" in d:
                with open(Path(path) / d/ "eval_metrics.json") as f:
                    j = json.load(f)
                    checkpoints.append((d, j))

        # Sort checkpoints by training step
        checkpoints.sort(key = lambda x : self.checkpoint_index(x))

        # Only keep the last 10 checkpoints
        checkpoints = checkpoints[-10:]

        # Filter checkpoints: remove all checkpoints such as f1 has improved afterwards, as that means that they are both
        # less sparse and less precise, so not interesting
        filtered = []
        max_f1 = 0
        for checkpoint in reversed(checkpoints):
            index = self.checkpoint_index(checkpoint)
            f1 = checkpoint[1]["f1"]
            if f1 > self.min_f1 and f1 >= max_f1:
                filtered.insert(0, checkpoint)

            max_f1 = max(max_f1, f1)

        ret = {}
        base_speed_report = None
        for i, k in enumerate(filtered):
            checkpoint_path = path / k[0]

            print("Processing", self.total_checkpoints)
            ret[str(checkpoint_path)], base_speed_report = self.process_checkpoint(checkpoint_path, force_speed=force_speed)

        return ret, base_speed_report

    def check_prefix(self, name):
        for prefix in self.prefixes:
            if name.startswith(prefix):
                return True
        return False

    def run(self):
        checkpoints = {}
        missings = {}
        for i in range(2):
            if i == 0:
                for root, dirs, files in os.walk(self.path, followlinks=True):
                    for name in dirs:
                        if not "squad" in name and not "large_regu" in name:
                            continue
                        if self.check_prefix(name):
                            new_checkpoints, base_speed_report = self.analyze_run((Path(root) / name).resolve(), force_speed=self.force_speed)
                            checkpoints.update(new_checkpoints)
            elif i == 1:
                for missing in missings:
                    assert(missing is not None)
                    assert(missing not in checkpoints)
                    new_checkpoint, _ = self.process_checkpoint(missing, force_speed=self.force_speed)
                    checkpoints[missing] = new_checkpoint

            to_delete = {}
            for checkpoint_path, checkpoint_info in checkpoints.items():
                if i == 1 and checkpoint_path not in missings:
                    continue

                mabr = ModelAddBasicReport(checkpoint_path, checkpoint_info, base_speed_report, exclude_non_matching_f1=self.exclude_non_matching_f1 and i == 0)
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
        with open(self.output_file_name, "w") as f:
            json.dump(out, f, sort_keys=True, indent = 4)


if __name__ == "__main__":
    import sys
    if len(sys.argv) > 3:
        exclude = sys.argv[3] != "all"
    else:
        exclude = True

    ma = ModelAnalysis(sys.argv[1],
                       sys.argv[2],
                       force_speed=False,
                       prefixes = ["fine_tuned_", "hp_", "aws_"], # "large_",
                       exclude_non_matching_f1 = exclude)
    ma.run()
