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

        return qa_sparse_xp.QASparseXP.compile_model(self.path, dest_path = self.dest_path)

    def run_(self, model):
        pass

    def run(self, force = False, write=True, **kwargs):
        output_report_path = self.path / self.output_name
        if output_report_path.exists() and not force:
            return json.load(output_report_path.open())

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
    def __init__(self, path):
        super().__init__(path, "speed_report.json", copy_to_tmp_path=True)

    def run_(self, model, optimize_mode):
        ret = qa_xp.QAXP.evaluate_model(src_path=self.dest_path, optimize_mode=optimize_mode)
        return ret

class ModelAnalysis:
    def __init__(self, path):
        self.path = Path(path).resolve()
        self.total_checkpoints = 0

    def checkpoint_index(self, name):
        return int(name[0][len("checkpoint-"):])

    def analyze_run(self, path):
        checkpoints = []
        for d in os.listdir(path):
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
            mse = ModelStatsExtract(checkpoint_path)
            stats_report = mse.run(force = ":1d_alt" in k)
            checkpoint_info["stats"] = stats_report

            for mode in "dense", :
                try:
                    mse2 = ModelSpeedEvaluate(checkpoint_path)
                    eval_report = mse2.run(force = True, optimize_mode = mode)
                    checkpoint_info["speed"] = eval_report["timings"]
                    checkpoint_info["opt_eval_metrics"] = eval_report["metrics"]
                    print(eval_report["metrics"])
                    break
                except Exception as e:
                    print(e)
                    assert(mode == "dense")

            ret[str(checkpoint_path)] = checkpoint_info
        return ret, base_speed_report


    def run(self):
        info = {}
        for root, dirs, files in os.walk(self.path, followlinks=True):
            for name in dirs:
                if name.startswith("hp_"):
                    new_info, base_speed_report = self.analyze_run((Path(root) / name).resolve())
                    info.update(new_info)

        info = {"checkpoints":info, "base_speed_report":base_speed_report}

        with open("results3.json", "w") as f:
            json.dump(info, f)


if __name__ == "__main__":
    import sys
    ma = ModelAnalysis(sys.argv[1])
    ma.run()
