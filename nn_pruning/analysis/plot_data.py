import copy
import json
from collections import defaultdict
from pathlib import Path
from transformers import AutoModelForQuestionAnswering, AutoModelForSequenceClassification

import pandas


class PointProvider:
    CACHE = {}

    def __init__(self, cache_dir):
        self.cache_dir = Path(cache_dir)

    def points_(self, task):
        # return a list of points. Each point in a dictionary with "f1", "speedup", and "sparsity"
        # task is "squadv1", "mnli" etc
        raise NotImplementedError("Implement in subclass")

    def get_filename(self, task):
        return self.__class__.__name__.lower() + "_" + task + ".json"

    def points(self, task):
        filename = self.get_filename(task)
        if filename in self.CACHE:
            return self.CACHE[filename]

        full_path = self.cache_dir / filename
        if full_path.exists():
            with full_path.open() as f:
                ret = json.load(f)
        else:
            ret = self.points_(task)
            with full_path.open("w") as f:
                json.dump(ret, f, indent=4, sort_keys=True)
        self.CACHE[filename] = ret
        return ret


class ExperimentClassifier:
    def __init__(self):
        self.cat_fun_names = []
        for c in dir(self):
            if c.startswith("is_"):
                cat_fun_name = c[3:]
                self.cat_fun_names.append(cat_fun_name)

    def check(self, d, equals, not_equals):
        for k, v in equals.items():
            if d.get(k) != v:
                print(d)
                print(f"WL: d[{k}]=={d.get(k)} !={v}")
                return False
        for k, v in not_equals.items():
            if d[k] == v:
                # print(f"BL: d[{k}]={d[k]} !={v}")
                return False
        return True

    def is_small_epoch(self, xp):
        checkpoint_index = int(xp["path"].split("/")[-1].split("-")[-1])
        if checkpoint_index <= 75000:
            return "small_epoch", ""

        return None

    def get_lambdas_annotation(self, sparse_args):
        lambdas = (
            sparse_args["regularization_final_lambda"],
            sparse_args.get("attention_lambda", "1.0"),
            sparse_args.get("dense_lambda", "1.0"),
        )
        annotate = "l=(" + ", ".join([str(x) for x in lambdas]) + ")"
        return annotate

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
                return category, annotate, fun_name

        return "misc", "", "misc"

    def is_new_xp(self, xp):
        compare = dict(final_finetune=1)
        print(xp)
        sparse_args = xp["sparse_args"]

        large = "large" in sparse_args["distil_teacher_name_or_path"] or "large" in str(xp["path"])
        size = "l" if large else "b"
        compare_different = {}
        if self.check(sparse_args, compare, compare_different):
            ret = f"Block/struct method, final fine tuned, s={size}"
            # annotate += ", fw=" + str(sparse_args["final_warmup"])

            # annotate += ", ver=" + str(0 if sparse_args.get('attention_output_with_dense', True) else 1)
            annotate = ""
            return ret, annotate

        compare = dict(
            attention_pruning_method="sigmoied_threshold",
            dense_block_cols=1,
            dense_block_rows=1,
            dense_pruning_method="sigmoied_threshold:1d_alt",
            initial_warmup=1,
            # final_warmup=10,
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
                ret = f"Block/struct method, bs= {rows}x{cols}, v={ver}, s={size}"
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
            # final_warmup=10,
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

            ret += ", dl=" + str(sparse_args.get("dense_lambda", 1.0))
            return ret, annotate

    def is_block_unstructured(self, xp):
        compare = dict(
            attention_pruning_method="sigmoied_threshold",
            dense_pruning_method="sigmoied_threshold",
            initial_warmup=1,
            # final_warmup=10,
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
            annotate = self.get_lambdas_annotation(sparse_args)

            ret += ", dl=" + str(sparse_args.get("dense_lambda", 1.0))
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


class Experiments(PointProvider):
    def __init__(self, cache_dir, analyze_result_file):
        super().__init__(cache_dir)
        self.analyze_result_file = analyze_result_file

    def get_filename(self, task):
        input_file_name = Path(self.analyze_result_file).resolve()
        mtime = int(input_file_name.stat().st_mtime)
        h = input_file_name.name.split(".")[0] + "-" + str(mtime)

        return self.__class__.__name__.lower() + "_" + task + "-" + h + ".json"

    def process_checkpoint(self, checkpoint, task):
        fill_rate = 1.0 - checkpoint["stats"]["linear_sparsity"] / 100
        if "large" in checkpoint["path"]:
            # Large BERT has more parameters
            fill_rate *= 8 / 3

        ret = dict(fill_rate=fill_rate, speedup=checkpoint["speedup"], checkpoint=checkpoint)

        if task == "squadv1":
            additional = {"f1":checkpoint["eval_metrics"]["f1"]}
        else:
            additional = {"matched":checkpoint["eval_metrics"]["eval_accuracy"] * 100,
                          "mismatched":checkpoint["eval_metrics_mm"]["eval_accuracy"] * 100}

        ret.update(additional)

        return ret

    def points_(self, task):
        # Cache checkpoints to speed things up
        raw_points = json.load(open(self.analyze_result_file))["checkpoints"]
        ec = ExperimentClassifier()
        ret = {}
        for path, raw_point in raw_points.items():
            raw_point["path"] = path
            cat, annotation, cat_fun_name = ec.categorize(raw_point)
            processed = self.process_checkpoint(raw_point, task)
            processed["cat_fun_name"] = cat_fun_name
            processed["annotate"] = annotation

            if cat not in ret:
                ret[cat] = []
            ret[cat].append(processed)

        return ret


class HFModelStats:
    def __init__(self, model_name, model_class, white_list, black_list):
        self.model_name = model_name
        self.model_class = model_class
        self.white_list = white_list
        self.black_list = black_list

    def model_part_size(self):
        model = self.model_class.from_pretrained(self.model_name)

        a = {k: v for k, v in model.named_parameters()}
        total = 0
        for k, v in a.items():

            def check(x):
                for bl in self.black_list:
                    if bl in x:
                        return False
                for wl in self.white_list:
                    if wl not in x:
                        return False
                return True

            if not check(k):
                continue

            total += v.numel()
        return total


class DistilBert(PointProvider):
    def points_(self, task):
        if task == "squadv1":
            model_class = AutoModelForQuestionAnswering
        elif task == "mnli":
            model_class = AutoModelForSequenceClassification

        sd = HFModelStats(
            model_name="distilbert-base-uncased-distilled-squad",
            model_class=model_class,
            white_list=["weight"],
            black_list=["embeddings", "layer_norm", "qa"],
        )

        total_distilbert = sd.model_part_size()

        sb = HFModelStats(
            model_name="csarron/bert-base-uncased-squad-v1",
            model_class=model_class,
            white_list=["weight"],
            black_list=["embeddings", "LayerNorm", "qa"],
        )

        total_bert = sb.model_part_size()

        fill_rate = total_distilbert / total_bert

        if task == "squadv1":
            ret = {
                "f1": 86.9,
                "exact": 79.1,
            }
        elif task == "mnli":
            # From https://arxiv.org/abs/1910.01108 and
            # https://huggingface.co/huggingface/distilbert-base-uncased-finetuned-mnli
            #
            ret = {
                "matched": 82.2,
                #                    "mismatched": 0.8216, # to be checked : from https://huggingface.co/ishan/distilbert-base-uncased-mnli
            }
        else:
            raise Exception(f"Unkwnon task {task}")

        ret.update({"fill_rate": fill_rate, "annotate": "DistilBERT", "speedup": 1.63})

        return dict(distilbert=[ret])


class TinyBert(PointProvider):
    def points_(self, task):
        """https://arxiv.org/pdf/1909.10351.pdf"""
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
        """TinyBERT6 2.0x BERT"""
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

        if task == "squadv1":
            # From https://arxiv.org/pdf/1910.01108.pdf
            ret = {"f1": 87.5, "exact": 79.7}

            # [{"f1":82.1, "exact": 72.7, "fill_rate": 0.5, "speedup": 9.4, "annotate":"TinyBERT4"}]
        elif task == "mnli":
            ret = {"matched": 84.6, "mismatched": 83.2}
        else:
            raise Exception(f"Unkwnon task {task}")

        ret.update({"fill_rate": 0.5, "speedup": 2.0, "annotate": "TinyBERT6"})

        return dict(tinybert=[ret])


class Are16HeadsBetter(PointProvider):
    def points_(self, task):
        """. We find that pruning half of the model’s
        heads speeds up inference by up to ≈ 17.5% for higher batch sizes (this difference vanishes for
        smaller batch sizes)."""
        pass


class BertTiny(PointProvider):
    def points_(self, task):
        "https://huggingface.co/mrm8488/bert-tiny-wrslb-finetuned-squadv1"


class MobileBert(PointProvider):
    # From https://arxiv.org/abs/2004.02984
    """Network, Params SQuAD v1.1 EM F1 SQuAD v2.0  EM F1
      MobileBERTTINY 15.1M 81.4 88.6 74.4 77.1
      MobileBERT 25.3M 82.9 90.0 76.2 79.2
    MobileBERT w/o OPT 25.3M 83.4 90.3 77.6 80.2"""

    """ Network, Params #FLOPS Latency CoLA SST-2 MRPC STS-B QQP MNLI-m/mm QNLI RTE GLU
    MobileBERTTINY 15.1M 3.1B 40 ms 46.7 91.7 87.9 80.1 68.9 81.5/81.6 89.5 65.1 75.8
MobileBERT 25.3M 5.7B 62 ms 50.5 92.8 88.8 84.4 70.2 83.3/82.6 90.6 66.2 77.7
MobileBERT w/o OPT 25.3M 5.7B 192 ms 51.1 92.6 88.8 84.8 70.5 84.3/83.4 91.6 70.4 78.5"""

    def points_(self, task):
        if task == "squadv1":
            mobile_bert = {"f1": 90.0, "exact": 82.9}
            mobile_bert_no_opt = {"f1": 90.3, "exact": 83.4}
        elif task == "mnli":
            mobile_bert = {"matched": 83.3, "mismatched": 82.6}
            mobile_bert_no_opt = {"matched": 84.3, "mismatched": 83.4}
        else:
            raise Exception(f"Unkwnon task {task}")

        # total_fill_rate = 25.3 / 109
        fill_rate = 5.7 / 22.5
        mobile_bert.update({"fill_rate": fill_rate, "speedup": 342 / 62, "annotate": "MobileBERT"})

        mobile_bert_no_opt.update({"fill_rate": fill_rate, "speedup": 342 / 192, "annotate": "MobileBERT w/o OPT"})

        return dict(mobile_bert_no_opt=[mobile_bert_no_opt]) # mobile_bert=[mobile_bert],

class MovementPruning(PointProvider):
    SUBSETS = ["local_movement_pruning", "soft_movement_with_distillation"]

    def __init__(self, cache_dir):
        super().__init__(cache_dir)

    def points_(self, task):
        defaults = dict(size=1, inner_sparsity=1, cols=1, rows=1, epochs=10, speedup=1.0)
        ret = {}

        xcel_file_name = Path(__file__).parent / "files" / "mvmt_pruning.xlsx"
        if task == "squadv1":
            sheet_name = "SQuAD"
        elif task == "mnli":
            sheet_name = "MNLI"
        else:
            raise ValueError(f"Unkwnown task {task}")
        xcel = pandas.read_excel(xcel_file_name, index_col=0, sheet_name="Details - " + sheet_name)
        xcel = pandas.DataFrame(xcel)
        for i, (r, d) in enumerate(xcel.iterrows()):
            if i > 2:
                if str(d[2]) != "nan":
                    name = d[2]
                    if name.startswith("topK_1.0"):
                        key = "local_movement_pruning"
                    elif name.startswith("l1_with_distil"):
                        key = "soft_movement_with_distillation"
                    else:
                        key = None
                    if key != None and key in self.SUBSETS:
                        if task == "squadv1":
                            d = dict(name=name, fill_rate=d[3] / 100.0, exact=d[4], f1=d[5])
                        elif task == "mnli":
                            d = dict(name=name, fill_rate=d[3] / 100.0, matched=d[4] * 100, mismatched=d[6] * 100)
                        else:
                            raise ValueError(f"Unknown task {task}")

                        d.update(defaults)
                        if key not in ret:
                            ret[key] = []
                        ret[key].append(d)

        return ret


class MultiProvider:
    def points(self, task, cache_dir, analyze_result_file):
        ret = {}
        ret.update(MovementPruning(cache_dir).points(task))
        ret.update(DistilBert(cache_dir).points(task))
        ret.update(TinyBert(cache_dir).points(task))
        ret.update(MobileBert(cache_dir).points(task))

        xps = Experiments(cache_dir, analyze_result_file).points(task)

        return ret, xps
