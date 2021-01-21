import pandas
import math
import numpy
from matplotlib import pyplot as pyplot
import os
import json
from pathlib import Path
from collections import defaultdict
import re
import copy

# %matplotlib widget


class PlotterBase:
    LIMITS = {
        "speedup": dict(legend="upper right", x_min=0.95, x_max=4.0, y_min=84, y_max=90),
        "fill_rate": dict(legend="lower right", x_min=0.0, x_max=0.55, y_min=84, y_max=90),
    }

    def __init__(
        self,
        input_filename,
        cat_fun_names=None,
        print_misc=True,
        draw_labels=False,
        convex_envelop=True,
        only_dots=False,
        fontsize=15,
        white_list=None,
        black_list=None,
        reference_black_list=None,
        limits=None,
    ):
        self.input_filename = input_filename
        self.cat_fun_names = cat_fun_names or []
        self.print_misc = print_misc
        self.draw_labels = draw_labels
        self.convex_envelop = convex_envelop
        self.only_dots = only_dots or not convex_envelop
        self.fontsize = fontsize
        self.white_list = white_list
        self.black_list = black_list

        self.limits = limits or self.LIMITS

        self.reference_black_list = reference_black_list

    CHECKPOINTS = None
    def read_checkpoint_info(self):
        if self.CHECKPOINTS != None:
            return copy.deepcopy(self.CHECKPOINTS)

        j = json.load(open(self.input_filename))

        base_time = j["base_speed_report"]["eval_elapsed_time"]

        points = []
        max_speedup = 1.0
        for name, checkpoint in j["checkpoints"].items():
            try:
                speedup = base_time / checkpoint["speed"]["eval_elapsed_time"]
                speedup = max(1.0, speedup)
            except:
                speedup = 1.0
            max_speedup = max(max_speedup, speedup)
            p = Path(name)
            opt_eval_metrics = checkpoint.get("opt_eval_metrics")
            eval_metrics = json.load(open(p / "eval_metrics.json"))

            if opt_eval_metrics is not None:
                if (abs(eval_metrics["f1"] - opt_eval_metrics["f1"]) > 5):
                    print(eval_metrics, opt_eval_metrics)
                    assert(False)
                eval_metrics["f1"] = max(eval_metrics["f1"], opt_eval_metrics["f1"])

            sparsity_report = json.load(open(p / "sparsity_report.json"))
            sparsity = 1.0 - (sparsity_report["linear_nnz"] / sparsity_report["linear_total"])
            sparse_args = json.load(open(p / "sparse_args.json"))

            point = dict(speedup=speedup, **eval_metrics, sparsity=sparsity, sparse_args=sparse_args, path=name)
            points.append(point)

        self.CHECKPOINTS = points
        return points

    def model_part_size(self, model_name, white_list, black_list):
        from transformers import AutoModelForQuestionAnswering
        from pytorch_block_sparse import BlockSparseModelPatcher

        model = AutoModelForQuestionAnswering.from_pretrained(model_name)

        a = {k: v for k, v in model.named_parameters()}
        total = 0
        for k, v in a.items():

            def check(x):
                for bl in black_list:
                    if bl in x:
                        return False
                for wl in white_list:
                    if wl not in x:
                        return False
                return True

            if not check(k):
                continue

            total += v.numel()
        return total

    def distilbert_data(self):
        path = Path("distilbert_info.json")
        if path.exists():
            return json.load(path.open())
        total_distilbert = self.model_part_size(
            "distilbert-base-uncased-distilled-squad",
            white_list=["weight"],
            black_list=["embeddings", "layer_norm", "qa"],
        )

        total_bert = self.model_part_size(
            "csarron/bert-base-uncased-squad-v1", white_list=["weight"], black_list=["embeddings", "LayerNorm", "qa"]
        )

        # From https://arxiv.org/pdf/1910.01108.pdf
        d = [
            {
                "f1": 86.9,
                "exact": 79.1,
                "fill_rate": total_distilbert / total_bert,
                "speedup": 1.63,
                "annotate": "DistilBERT",
            }
        ]

        json.dump(d, path.open("w"))

        return d

    def are16headsbetter_data(self):
        """. We find that pruning half of the model’s
        heads speeds up inference by up to ≈ 17.5% for higher batch sizes (this difference vanishes for
        smaller batch sizes)."""
        pass

    def bert_tiny(self):
        "https://huggingface.co/mrm8488/bert-tiny-wrslb-finetuned-squadv1"

    def tinybert_data(self):
        "https://arxiv.org/pdf/1909.10351.pdf"
        """System SQuAD 1.1 SQuAD 2.0
EM F1 EM F1
BERTBASE (Teacher) 80.7 88.4 74.5 77.7
4-layer student models
BERT4-PKD 70.1 79.5 60.8 64.6
DistilBERT4 71.8 81.2 60.6 64.1
MiniLM4 - - - 69.7
TinyBERT4 72.7 82.1 68.2 71.8
6-layer student models
BERT6-PKD 77.1 85.3 66.3 69.8
DistilBERT6 78.1 86.2 66.0 69.5
MiniLM6 - - - 76.4
TinyBERT6 79.7 87.5 74.7 77.7"""

        """ Compared with the teacher
BERTBASE, TinyBERT4 is 7.5x smaller and 9.4x
faster in the model efficiency, while maintaining
competitive performances."""
        "TinyBERT6 2.0x BERT"
        """System #Params #FLOPs Speedup MNLI-(m/mm) QQP QNLI SST-2 CoLA STS-B MRPC RTE Avg
BERTBASE (Teacher) 109M 22.5B 1.0x 83.9/83.4 71.1 90.9 93.4 52.8 85.2 87.5 67.0 79.5
BERTTINY 14.5M 1.2B 9.4x 75.4/74.9 66.5 84.8 87.6 19.5 77.1 83.2 62.6 70.2
BERTSMALL 29.2M 3.4B 5.7x 77.6/77.0 68.1 86.4 89.7 27.8 77.0 83.4 61.8 72.1
BERT4-PKD 52.2M 7.6B 3.0x 79.9/79.3 70.2 85.1 89.4 24.8 79.8 82.6 62.3 72.6
DistilBERT4 52.2M 7.6B 3.0x 78.9/78.0 68.5 85.2 91.4 32.8 76.1 82.4 54.1 71.9
MobileBERTTINY† 15.1M 3.1B - 81.5/81.6 68.9 89.5 91.7 46.7 80.1 87.9 65.1 77.0
TinyBERT4 (ours) 14.5M 1.2B 9.4x 82.5/81.8 71.3 87.7 92.6 44.1 80.4 86.4 66.6 77.0
BERT6-PKD 67.0M 11.3B 2.0x 81.5/81.0 70.7 89.0 92.0 - - 85.0 65.5 -
PD 67.0M 11.3B 2.0x 82.8/82.2 70.4 88.9 91.8 - - 86.8 65.3 -
DistilBERT6 67.0M 11.3B 2.0x 82.6/81.3 70.1 88.9 92.5 49.0 81.3 86.9 58.4 76.8
TinyBERT6 (ours) 67.0M 11.3B 2.0x 84.6/83.2 71.6 90.4 93.1 51.1 83.7 87.3 70.0 79.4"""

        # From https://arxiv.org/pdf/1910.01108.pdf
        d = [{"f1": 87.5, "exact": 79.7, "fill_rate": 0.5, "speedup": 2.0, "annotate": "TinyBERT6"}]
        # d += [{"f1":82.1, "exact": 72.7, "fill_rate": 0.5, "speedup": 9.4, "annotate":"TinyBERT4"}]

        return d

    def mobilebert_data(self):
        "MobileBERTTINY"

    def read_reference_entries(self):
        defaults = dict(size=1, inner_sparsity=1, cols=1, rows=1, epochs=10)
        ret = dict(local_movement_pruning=[], soft_movement_with_distillation=[])

        xcel_file_name = Path(__file__).parent / "mvmt_pruning.xlsx"
        xcel = pandas.read_excel(xcel_file_name, index_col=0, sheet_name="Details - SQuAD")
        xcel = pandas.DataFrame(xcel)
        for i, (r, d) in enumerate(xcel.iterrows()):
            if i > 2:
                if str(d[2]) != "nan":
                    name = d[2]
                    name_parts = name.split("_")
                    if name.startswith("topK_1.0"):
                        key = "local_movement_pruning"
                    elif name.startswith("l1_with_distil"):
                        key = "soft_movement_with_distillation"
                    else:
                        key = None
                    if key != None:
                        d = dict(name=name, fill_rate=d[3] / 100.0, exact=d[4], f1=d[5])

                        d.update(defaults)
                        ret[key].append(d)

        # Add other networks
        ret["distilbert"] = self.distilbert_data()
        ret["tinybert"] = self.tinybert_data()

        return ret

    def check(self, d, equals, not_equals):
        for k, v in equals.items():
            if d[k] != v:
                print(d)
                print(f"WL: d[{k}]=={d[k]} !={v}")
                return False
        for k, v in not_equals.items():
            if d[k] == v:
                #print(f"BL: d[{k}]={d[k]} !={v}")
                return False
        return True

    def is_small_epoch(self, xp):
        checkpoint_index = int(xp["path"].split("/")[-1].split("-")[-1])
        if checkpoint_index <= 75000:
            return "small_epoch", ""

        return None

    def categorize(self, xp):
        print("STARTING")
        for fun_name in self.cat_fun_names:
            print(f"fun_name={fun_name}")
            fun_name = "is_" + fun_name
            ret = getattr(self, fun_name)(xp)
            if ret is None:
                continue
            else:
                if isinstance(ret, tuple):
                    category, annotate = ret
                else:
                    category = ret
                    annotate = ""
                return category, annotate

        return "misc", ""

    def process_checkpoint(self, checkpoint):
        d = checkpoint
        ret = dict(fill_rate=1.0 - d["sparsity"], f1=d["f1"])

        speedup = d["speedup"]
        if speedup > 1:
            ret["speedup"] = speedup
        return ret

    def checkpoints_prepare(self, checkpoints):
        ret = defaultdict(list)
        for checkpoint in checkpoints:
            cat, annotate = self.categorize(checkpoint)
            if cat is None:
                assert cat is not None
            processed = self.process_checkpoint(checkpoint)
            processed["annotate"] = annotate
            processed["path"] = checkpoint["path"]
            if cat == "misc" and self.print_misc:
                print(json.dumps(checkpoint["sparse_args"], indent=4))
            ret[cat].append(processed)
        return ret

    def convexity_filter_checkpoints(self, checkpoints, key="speedup", filt=True):
        if key == "fill_rate":
            sgn = -1
        else:
            sgn = 1
        sort_by_key = lambda x: sgn * x.get(key, 1.0)
        checkpoints.sort(key=sort_by_key, reverse=True)
        best_c = checkpoints[0]

        filtered_checkpoints = [best_c]
        for checkpoint in checkpoints[1:]:
            if not filt or checkpoint["f1"] > filtered_checkpoints[-1]["f1"]:
                filtered_checkpoints.append(checkpoint)

        filtered_checkpoints.sort(key=sort_by_key, reverse=False)

        return filtered_checkpoints

    def match_regexp_list(self, key, regexps):
        for r in regexps:
            if re.fullmatch(r, key):
#                print(f"MATCHING, {key}, {r}")
                return True
#            else:
#                print(f"NOT MATCHING, {key}, {r}")
        return False

    def log_plot(self, dest_file_name, x, y, data, x_key, y_key):

        with dest_file_name.open("w") as f:
            for i in range(len(x)):
                s = {x_key:x[i], y_key:y[i], "meta":data[i]}
                s = f"{s}\n"
                f.write(s)

    @staticmethod
    def label_cleanup(label):
        for s in " _,/=":
            label = label.replace(s, "_")
        return label

    def plot(self, key, dest_dir, dest_file_name):
        dest_dir = Path(dest_dir)
        dest_dir.mkdir(exist_ok=True)

        checkpoints = self.read_checkpoint_info()
        reference_entries = self.read_reference_entries()
        labels = []
        parts = []
        reference_black_list = self.reference_black_list
        for k, v in reference_entries.items():
            if reference_black_list is not None and k in reference_black_list:
                continue
            labels.append(k)
            parts.append(v)

        checkpoints_plot_info = self.checkpoints_prepare(checkpoints)

        category_keys = list(checkpoints_plot_info.keys())
        category_keys.sort()

        for k in category_keys:
            if self.white_list is not None and not self.match_regexp_list(k, self.white_list):
                print(f"Rejected (WL) {k}")
                continue
            if self.black_list is not None and self.match_regexp_list(k, self.black_list):
                print(f"Rejected (BL) {k}")
                continue
            v = checkpoints_plot_info[k]
            labels.append(k)
            parts.append(v)

        x_min = self.limits[key]["x_min"]
        x_max = self.limits[key]["x_max"]
        y_min = self.limits[key]["y_min"]
        y_max = self.limits[key]["y_max"]

        markers = ["o", "v", "s", "+", "v"]

        fig = pyplot.figure(figsize=(20, 12))
        ax1 = fig.add_subplot(111)
        max_x = 0


        for i, data in enumerate(parts):
            label = labels[i]

            x0 = [e.get(key, 1.0) for e in data]

            if self.convex_envelop: # and len(set(x0)) > 1:
                data = self.convexity_filter_checkpoints(data, key=key, filt = len(set(x0)) > 1)

            x = [e.get(key, 1.0) for e in data]
            max_x = max(max_x, max(x))
            y = [e["f1"] for e in data]

            label = self.label_cleanup(label)
            log_dir = dest_dir / "logs"
            log_dir.mkdir(exist_ok=True)
            self.log_plot(log_dir / f"{dest_file_name}_{label}.txt", x, y, data, key, "f1")

            if len(x) == 1 or self.only_dots:
                pyplot.scatter(x, y, cmap="viridis", alpha=1.0, label=label)  # , marker=markers[i]) # cool
            else:
                pyplot.plot(x, y, label=label)  # , marker=markers[i]) # cool

            if self.draw_labels or len(x) == 1:
                for i, txt in enumerate(x):
                    if x_min is None or x[i] >= x_min and x[i] <= x_max:
                        if y_min is None or y[i] >= y_min and y[i] <= y_max:
                            annotate = data[i].get("annotate", label)
                            ax1.annotate(annotate, (x[i] + 0.005, y[i] + 0.005))

        for i in range(3):
            f1 = 88.5 - i
            pyplot.plot(
                [0, 10], [88.5 - i] * 2, label=f"original BERT-base {'' if i == 0 else str(-i) + '% '}(F1 = {f1})"
            )

        legend_loc = self.limits[key]["legend"]
        pyplot.legend(loc=legend_loc, prop={"size": self.fontsize})

        if x_min != None:
            pyplot.xlim(x_min, x_max)
        if y_min != None:
            pyplot.ylim(y_min, y_max)

        XLabel = key.replace("_", " ").capitalize()
        pyplot.xlabel(XLabel, fontsize=self.fontsize)
        YLabel = "F1"
        pyplot.ylabel(YLabel, fontsize=self.fontsize)
        title = "%s against %s\n" % (YLabel, XLabel)
        pyplot.title(title, fontsize=self.fontsize)

        pyplot.savefig(
            dest_dir / (dest_file_name + ".png"),
            dpi=None,
            facecolor="w",
            edgecolor="w",
            orientation="portrait",
            format=None,
            transparent=False,
            bbox_inches=None,
            pad_inches=0.1,
            metadata=None,
        )


class GeneralPlotter(PlotterBase):
    #    select = ['block_sparse', 'improved soft movement with distillation', 'misc', 'new method, attention pruned with rows', 'new method, longer final warmup (15 instead of 10)', 'new xp, block_size= 16x16', 'new xp, block_size= 32x32', 'new xp, block_size= 64x32', 'small_epoch']

    CAT_FUN_NAMES = [
        "new_xp",
        "full_block",
        "improved_mvmt_pruning",
        "longer_final_warmup",
        "attention_rows",
        "short_final_warmup",
        "block_unstructured"
    ]
    BLACK_LIST = ["misc"]  # "small_epoch", "new method, attention pruned with rows",
    WHITE_LIST = [
        "improved soft movement with distillation",
        "Structured pruning",
        "Block/struct method, bs= 32x32, v=0",
        "Block/struct method, bs= 32x32, v=1",
        "Block/struct method, bs= 16x16, v=1",
        "Full block method, bs= 32x32, v=1",
        "new xp, block_size= 64x768",
    ]
    REFERENCE_BLACK_LIST = ["local_movement_pruning", "soft_movement_with_distillation"]

    def __init__(
        self,
        input_file_name,
        cat_fun_names=None,
        cluster=False,
        white_list=None,
        black_list=None,
        reference_black_list=None,
        **kwargs
    ):
        cat_fun_names = cat_fun_names or self.CAT_FUN_NAMES
        if white_list is False:
            white_list = None
        else:
            white_list = white_list or self.WHITE_LIST
        if black_list is False:
            black_list = None
        else:
            black_list = black_list or self.BLACK_LIST

        self.cluster = cluster
        if reference_black_list is False:
            reference_black_list = None
        else:
            reference_black_list = reference_black_list or self.REFERENCE_BLACK_LIST

        super().__init__(
            input_file_name,
            cat_fun_names=cat_fun_names,
            white_list=white_list,
            black_list=black_list,
            reference_black_list=reference_black_list,
            **kwargs,
        )

    def get_lambdas_annotation(self, sparse_args):
        lambdas = (
            sparse_args["regularization_final_lambda"],
            sparse_args.get("attention_lambda", "1.0"),
            sparse_args.get("dense_lambda", "1.0"),
        )
        annotate = "l=(" + ", ".join([str(x) for x in lambdas]) + ")"
        return annotate

    def is_new_xp(self, xp):
        compare = dict(
            attention_pruning_method="sigmoied_threshold",
            dense_block_cols=1,
            dense_block_rows=1,
            dense_pruning_method="sigmoied_threshold:1d_alt",
            initial_warmup=1,
            final_warmup=10,
            regularization="l1",
        )

        compare_different = dict(attention_block_cols=1, attention_block_rows=1, distil_teacher_name_or_path=None)

        sparse_args = xp["sparse_args"]
        if self.check(sparse_args, compare, compare_different):
            cols = sparse_args["attention_block_cols"]
            rows = sparse_args["attention_block_rows"]
            # if cols == 768:
            #    return None
            if cols == 768:
                ret = "Structured pruning"
            else:
                ver = 1 - int(sparse_args.get("attention_output_with_dense", True))
                ret = f"Block/struct method, bs= {rows}x{cols}, v={ver}"
                # ret += ", fw=" + str(sparse_args["final_warmup"])

            annotate = self.get_lambdas_annotation(sparse_args)
            # annotate += ", fw=" + str(sparse_args["final_warmup"])

            # annotate += ", ver=" + str(0 if sparse_args.get('attention_output_with_dense', True) else 1)
            return ret, annotate

    def is_full_block(self, xp):
        compare = dict(
            attention_pruning_method="sigmoied_threshold",
            dense_pruning_method="sigmoied_threshold",
            initial_warmup=1,
            #final_warmup=10,
            regularization="l1",
        )

        compare_different = dict(attention_block_cols=1, attention_block_rows=1, distil_teacher_name_or_path=None)

        sparse_args = xp["sparse_args"]
        if self.check(sparse_args, compare, compare_different):
            cols = sparse_args["attention_block_cols"]
            rows = sparse_args["attention_block_rows"]
            d_cols = sparse_args["dense_block_cols"]
            d_rows = sparse_args["dense_block_rows"]
            if d_cols != cols:
                return None
            if d_rows != rows:
                return None

            ver = 1 - int(sparse_args.get("attention_output_with_dense", True))
            if ver == 0:
                return "full block version 0"

            ret = f"Full block method, bs= {rows}x{cols}"
            # ret += ", fw=" + str(sparse_args["final_warmup"])

            annotate = self.get_lambdas_annotation(sparse_args)
            if self.cluster:
                ret += ", dl=" + str(sparse_args.get("dense_lambda", 1.0))

            # annotate += f", fw=" + str(sparse_args["final_warmup"])

            # annotate += ", ver=" + str(0 if sparse_args.get('attention_output_with_dense', True) else 1)
            return ret, annotate

    def is_block_unstructured(self, xp):
        compare = dict(
            attention_pruning_method="sigmoied_threshold",
            dense_pruning_method="sigmoied_threshold",
            initial_warmup=1,
            #final_warmup=10,
            regularization="l1",
        )

        compare_different = dict(attention_block_cols=1, attention_block_rows=1, distil_teacher_name_or_path=None)

        sparse_args = xp["sparse_args"]
        if self.check(sparse_args, compare, compare_different):
            cols = sparse_args["attention_block_cols"]
            rows = sparse_args["attention_block_rows"]
            d_cols = sparse_args["dense_block_cols"]
            d_rows = sparse_args["dense_block_rows"]
            if d_cols != 1:
                return None
            if d_rows != 1:
                return None

            ver = 1 - int(sparse_args.get("attention_output_with_dense", True))
            if ver == 0:
                return "full block version 0"

            ret = f"Block/unstruct method, bs= {rows}x{cols}"
            # ret += ", fw=" + str(sparse_args["final_warmup"])

            annotate = self.get_lambdas_annotation(sparse_args)
            if self.cluster:
                ret += ", dl=" + str(sparse_args.get("dense_lambda", 1.0))

            # annotate += f", fw=" + str(sparse_args["final_warmup"])

            # annotate += ", ver=" + str(0 if sparse_args.get('attention_output_with_dense', True) else 1)
            return ret, annotate

    def is_improved_mvmt_pruning(self, xp):
        compare = dict(
            attention_block_cols=1,
            attention_block_rows=1,
            attention_pruning_method="sigmoied_threshold",
            dense_block_cols=1,
            dense_block_rows=1,
            dense_pruning_method="sigmoied_threshold",
            initial_warmup=1,
            final_warmup=10,
            regularization="l1",
        )

        compare_different = dict(distil_teacher_name_or_path=None)

        sparse_args = xp["sparse_args"]
        if self.check(sparse_args, compare, compare_different):
            return "improved soft movement with distillation"
        else:
            return None

    def is_longer_final_warmup(self, xp):
        compare = dict(
            attention_block_cols=32,
            attention_block_rows=32,
            attention_pruning_method="sigmoied_threshold",
            dense_block_cols=1,
            dense_block_rows=1,
            dense_pruning_method="sigmoied_threshold:1d_alt",
            initial_warmup=1,
            final_warmup=15,
            regularization="l1",
        )

        compare_different = dict(distil_teacher_name_or_path=None)

        sparse_args = xp["sparse_args"]
        if self.check(sparse_args, compare, compare_different):
            return "new method, longer final warmup (15 instead of 10)"

    def is_attention_rows(self, xp):
        compare = dict(
            attention_block_cols=768,
            attention_block_rows=1,
            attention_pruning_method="sigmoied_threshold",
            dense_block_cols=1,
            dense_block_rows=1,
            dense_pruning_method="sigmoied_threshold:1d_alt",
            initial_warmup=1,
            final_warmup=10,
            regularization="l1",
        )

        compare_different = dict(distil_teacher_name_or_path=None)

        sparse_args = xp["sparse_args"]
        if self.check(sparse_args, compare, compare_different):
            return "new method, attention pruned with rows"

    def is_short_final_warmup(self, xp):
        sparse_args = xp["sparse_args"]
        if sparse_args.get("final_warmup") != 10:
            return "short final warmup"

if __name__ == "__main__":
    import sys
    input_file_name = "results8.json"

    def multiplot(p, name):
        name = PlotterBase.label_cleanup(name)
        dest = Path("graphs") / name
        p.plot("speedup", dest, f"{name}_speedup")
        p.plot("fill_rate", dest, f"{name}_fill_rate")

    white_list = ["Block/struct method, bs= [0-9]+x[0-9]+, v=1",
                  "Block/unstruct method, bs= [0-9]+x[0-9]+",
                  "improved soft movement with distillation",
                  "soft_movement_with_distillation",
                  "Full block method, bs= 32x32",
                  "Structured pruning",
                  ]
    black_list = ["new method, attention pruned with rows"] #"Block/struct method, bs= [0-9]+x.[0-9]+, v=0"]
    raw_black_list = copy.deepcopy(white_list)
    raw_black_list += copy.deepcopy(black_list)
    #raw_black_list = False

    # For debug purpose : black_list is the kept white list
    p = GeneralPlotter(input_file_name, white_list=False, black_list=raw_black_list, reference_black_list=None)
    #multiplot(p, "raw_global")
#    sys.exit(0)
    reference_black_list = ["local_movement_pruning"]
    p = GeneralPlotter(input_file_name, white_list=white_list, black_list=black_list, reference_black_list=reference_black_list)
    #multiplot(p, "global")

    CAT_FUN_NAMES = {
    #    "new_xp_v0": dict(fun_name="new_xp", draw_labels=False, white_list=["Block/struct method, bs= [0-9]+x.[0-9]+, v=0"]),
        "new_xp_v1": dict(fun_name="new_xp", draw_labels=True, white_list=["Block/struct method, bs= [0-9]+x.[0-9]+, v=1"], convex_envelop=True),
        "structured": dict(fun_name="new_xp", draw_labels=False, white_list=["Structured pruning"]),
        #        "new_xp_16": dict(fun_name="new_xp", draw_labels=False, white_list=["Block/struct method, bs= 16x16, v=[0-9]+"]),
#        "new_xp_32": dict(fun_name="new_xp", draw_labels=False, white_list=["Block/struct method, bs= 32x32, v=[0-9]+"]),

        "full_block": {},
        "improved_mvmt_pruning": {},
        "block_unstructured":{}
    }
    for name, configuration in CAT_FUN_NAMES.items():
        limits = {
            "speedup": dict(legend="upper right", x_min=0.95, x_max=4.0, y_min=None, y_max=None),
            "fill_rate": dict(legend="lower right", x_min=0.0, x_max=0.55, y_min=None, y_max=None),
        }
        draw_labels = configuration.get("draw_labels", True)
        cat_fun_name = configuration.get("fun_name", name)
        convex_envelop = configuration.get("convex_envelop", name)
        p = GeneralPlotter(
            input_file_name,
            cat_fun_names=[cat_fun_name],
            draw_labels=draw_labels,
            limits=limits,
            convex_envelop=convex_envelop,
            cluster=True,
            white_list=configuration.get("white_list", False),
        )
        multiplot(p, name)
