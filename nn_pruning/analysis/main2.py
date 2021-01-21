import nn_pruning.examples.question_answering.qa_sparse_xp as qa_sparse_xp
import nn_pruning.examples.question_answering.qa_xp as qa_xp
import os
from pathlib import Path
import json
import shutil
from collections import defaultdict
import tempfile


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
        print(output_report_path)

        if output_report_path.exists() and not force:
            ret = json.load(output_report_path.open())
            if "metrics" in ret and ret["metrics"]["f1"] < 60:
                print()
                print("########### PATHOLOGICAL : RETRY")
                print()
            else:
                return ret

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
        numel = parameter.numel()
        nnz = int((parameter != 0).sum())
        self.stats["total"] += numel
        self.stats["nnz"] += nnz

        if layer_number not in self.stats["layers"]:
            self.stats["layers"][layer_number] = defaultdict(int)

        self.stats["layers"][layer_number]["total"] = numel
        self.stats["layers"][layer_number]["nnz"] = nnz

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

class ModelAnalysis:
    def __init__(self, path, output_file_name):
        self.path = Path(path).resolve()
        self.total_checkpoints = 0
        self.output_file_name = output_file_name

    def checkpoint_index(self, name):
        return int(name[0][len("checkpoint-"):])

    def process_checkpoint(self, checkpoint_path):
        # if "hp_od-output__squad_test3_es-steps_nte20_ls250_est5000_rn-output__squad_test3_dpm-sigmoied_threshold:1d_alt_apme-sigmoied_threshold_aowd0_it0_fw10_r-l1_rfl10.0_al0.00156_dtnop-csarron__bert-base-uncased-squad-v1/checkpoint-90000" not in str(checkpoint_path):
        #    self.total_checkpoints += 1
        #    continue
        # print(checkpoint_path)

        checkpoint_info = {}

        base_speed_report_file = Path("base_speed_report_file.json")
        if base_speed_report_file.exists():
            base_speed_report = json.load(base_speed_report_file.open())
        else:
            mse2 = ModelSpeedEvaluate(checkpoint_path)
            base_speed_report = mse2.run(force=True, write=False, optimize_mode="disabled")["timings"]
            with base_speed_report_file.open("w") as f:
                json.dump(base_speed_report, f)

        self.total_checkpoints += 1
        mse_stats = ModelStatsExtract(checkpoint_path)
        stats_report = mse_stats.run(force=False)
        checkpoint_info["stats"] = stats_report

        mse_speed = ModelSpeedEvaluate(checkpoint_path, optimize_mode="dense")
        eval_report = mse_speed.run(force=False)
        if "timings" in eval_report:
            checkpoint_info["speed"] = eval_report["timings"]
            checkpoint_info["opt_eval_metrics"] = eval_report["metrics"]
            print(eval_report["metrics"])
        else:
            assert ("eval_elapsed_time" in eval_report)
            checkpoint_info["speed"] = eval_report
            checkpoint_info["opt_eval_metrics"] = None

        return checkpoint_info, base_speed_report

    def analyze_run(self, path):
        checkpoints = []
        for d in os.listdir(path):
            # Blacklist these
            if "checkpoint-" in d:
                with open(Path(path) / d/ "eval_metrics.json") as f:
                    j = json.load(f)
                    checkpoints.append((d, j))

        # Sort checkpoints by training step
        checkpoints.sort(key = lambda x : self.checkpoint_index(x))

        # Filter checkpoints: remove all checkpoints such as f1 has improved afterwards, as that means that they are both
        # less sparse and less precise, so not interesting
        filtered = []
        max_f1 = 0
        for i in range(len(checkpoints) - 1, -1, -1):
            checkpoint = checkpoints[i]
            index = self.checkpoint_index(checkpoint)
            if index < 25000:
                continue

            f1 = checkpoint[1]["f1"]
            if f1 >= max_f1:
                filtered.insert(0, checkpoint)
                max_f1 = max(max_f1, checkpoints[i][1]["f1"])

        ret = {}
        base_speed_report = None
        for i, k in enumerate(filtered):
            print("Processing", self.total_checkpoints)
            checkpoint_path = path / k[0]

            print(checkpoint_path)

#            try:
            ret[str(checkpoint_path)], base_speed_report = self.process_checkpoint(checkpoint_path)
#            except Exception as e:
#                print(f"ERROR with {checkpoint_path}: {e}")

        return ret, base_speed_report


    def run(self):
        info = {}
        for root, dirs, files in os.walk(self.path, followlinks=True):
            for name in dirs:
                if name.startswith("hp_") or name.startswith("aws_"):
                    print(name)
                    #try:
                    new_info, base_speed_report = self.analyze_run((Path(root) / name).resolve())
                    print(base_speed_report)
                    info.update(new_info)
                    #except:
                    #    print("ERROR with", os.path.join(root, name))

        info = {"checkpoints":info, "base_speed_report":base_speed_report}

        with open(self.output_file_name, "w") as f:
            json.dump(info, f)


if __name__ == "__main__":
    import sys
    ma = ModelAnalysis(sys.argv[1], sys.argv[2])
    ma.run()
