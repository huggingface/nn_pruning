import copy
import json
import tempfile
from collections import defaultdict
from pathlib import Path

import pandas
from transformers import (
    AutoModelForQuestionAnswering,
    AutoModelForSequenceClassification,
)

from examples.question_answering.qa_xp import QAXP


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

    def points(self, task, force=False):
        filename = self.get_filename(task)

        if filename in self.CACHE:
            ret = self.CACHE[filename]
        else:
            full_path = self.cache_dir / filename
            if full_path.exists() and not force:
                with full_path.open() as f:
                    ret = json.load(f)
            else:
                ret = self.points_(task)
                with full_path.open("w") as f:
                    json.dump(ret, f, indent=4, sort_keys=True)
                with full_path.open("r") as f:
                    reload = json.load(f)
                    assert ret == reload

            self.CACHE[filename] = ret
        ret = copy.deepcopy(ret)
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

        large_teacher = "large" in sparse_args["distil_teacher_name_or_path"]
        large = "large" in xp["config"]["_name_or_path"] or "large" in xp.get("source_checkpoint", "")
        size = "l" if large else "b"
        no_norm = "layer_norm_patch" in sparse_args and sparse_args["layer_norm_patch"]
        is_relu = "gelu_patch" in sparse_args and sparse_args["gelu_patch"] or xp["config"]["hidden_act"] == "relu"
        is_rewind = "rewind_model_name_or_path" in sparse_args and sparse_args["rewind_model_name_or_path"] is not None

        if xp["config"]["_name_or_path"] == "aloxatel/bert-base-mnli":
            return None

        compare_different = {}
        if self.check(sparse_args, compare, compare_different):
            ret = f"Block/struct method, final fine tuned, s={size}"

            if not large and large_teacher:
                ret += ", t=l"
            # annotate += ", fw=" + str(sparse_args["final_warmup"])

            # annotate += ", ver=" + str(0 if sparse_args.get('attention_output_with_dense', True) else 1)
            annotate = "%d" % (100 - xp["stats"]["linear_sparsity"])

            if no_norm:
                ret += ", nonorm=1"

            if is_relu:
                ret += ", relu=1"

            if is_rewind:
                ret += ", rewind=1"

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

            if not large and large_teacher:
                ret += ", t=l"

            if no_norm:
                ret += ", nonorm=1"

            if is_relu:
                ret += ", relu=1"

            if is_rewind:
                ret += ", rewind=1"

            #            annotate = self.get_lambdas_annotation(sparse_args)
            annotate = "%d" % (100 - xp["stats"]["linear_sparsity"])
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
            path = xp["path"]

            cols = sparse_args["attention_block_cols"]
            rows = sparse_args["attention_block_rows"]
            d_cols = sparse_args["dense_block_cols"]
            d_rows = sparse_args["dense_block_rows"]
            if d_cols != cols:
                return None
            if d_rows != rows:
                return None

            #            ver = 1 - int(sparse_args.get("attention_output_with_dense", True))
            #            if ver == 0:
            #                return "full block version 0"

            ret = f"Full block method, bs= {rows}x{cols}"
            # ret += ", fw=" + str(sparse_args["final_warmup"])

            annotate = self.get_lambdas_annotation(sparse_args)
            annotate = "%d" % (100 - xp["stats"]["linear_sparsity"])

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
        annotate = "%d" % (100 - xp["stats"]["linear_sparsity"])

        if self.check(sparse_args, compare, compare_different):
            return "improved soft movement with distillation", annotate
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

        if task in ["squadv1", "squadv2"]:
            additional = {"f1": checkpoint["eval_metrics"]["f1"]}
        else:
            additional = {
                "matched": checkpoint["eval_metrics"]["eval_accuracy"] * 100,
                "mismatched": checkpoint["eval_metrics_mm"]["eval_accuracy"] * 100,
            }

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
    TASK_NAMES = {"squad": "squadv1"}
    TIMING_KEY = "cuda_eval_elapsed_time"

    def __init__(self, model_name, task, white_list, black_list):
        self.model_name = model_name
        self.task = self.TASK_NAMES.get(task, task)
        if task in ["squadv1", "squadv2"]:
            model_class = AutoModelForQuestionAnswering
        elif task in ["mnli", "qqp", "sst2"]:
            model_class = AutoModelForSequenceClassification

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

    def get_base_speed_info(self):
        task = self.TASK_NAMES.get(self.task, self.task)

        path = Path(__file__).parent.resolve()
        report_path = path / "files" / ("base_speed_report_file_%s.json" % task)
        with report_path.open() as f:
            ret = json.load(f)
        return ret

    def get_speed(self):
        try:
            tmpfile = tempfile.TemporaryDirectory()
            if self.task in ["squadv1", "squadv2"]:
                task = self.task
                if self.task == "squadv1":
                    task = "squad"
                elif self.task == "squadv2":
                    task = "squad_v2"
                ret = QAXP.evaluate_model(
                    model_name_or_path=self.model_name, task=task, optimize_mode="disabled", output_dir=tmpfile.name
                )

                base_speed_info = self.get_base_speed_info()

                ret["speedup"] = base_speed_info[self.TIMING_KEY] / ret["timings"][self.TIMING_KEY]
                return ret
            else:
                raise ValueError(f"Unknown task {self.task}")
        finally:
            tmpfile.cleanup()


class Bert(PointProvider):
    def points_(self, task):
        # From https://www.aclweb.org/anthology/N19-1423.pdf
        if task == "squadv1":
            ret = {
                "f1": 88.5,
                "exact": 80.8,
            }
            ret_large = {}  # "f1": 93.15, "exact":86.91}
        elif task == "squadv2":
            # from https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1194/reports/default/15848021.pdf
            ret = {
                "f1": 76.70,
                "exact": 73.85,
            }
            ret_large = {}
        elif task == "mnli":
            ret = {"matched": 84.6, "mismatched": 83.4}
            ret_large = {}
        elif task == "qqp":
            # Official baseline
            # ret = {"f1":84.31, "accuracy":88.4}
            # Our baseline
            ret = {"f1": 88.12, "accuracy": 91.15}
            ret_large = {}
        elif task == "sst2":
            # Official baseline
            # ret = {"f1":84.31, "accuracy":88.4}
            # Our baseline
            ret = {"accuracy": 92.66}
            ret_large = {}
        else:
            raise Exception(f"Unkwnon task {task}")

        sd = HFModelStats(
            model_name="bert-large-uncased-whole-word-masking-finetuned-squad",
            task=task,
            white_list=["weight"],
            black_list=["embeddings", "layer_norm", "qa"],
        )

        speed_info = sd.get_speed()
        speedup = speed_info["speedup"]

        ret.update({"fill_rate": 1.0, "annotate": "BERT", "speedup": 1})

        ret_large.update({"fill_rate": 8 / 4, "annotate": "BERT-large", "speedup": speedup})

        return dict(bert=[ret], bert_large=[ret_large])


class DistilBert(PointProvider):
    def points_(self, task):
        sd = HFModelStats(
            model_name="distilbert-base-uncased-distilled-squad",
            task=task,
            white_list=["weight"],
            black_list=["embeddings", "layer_norm", "qa"],
        )

        total_distilbert = sd.model_part_size()
        speed_info = sd.get_speed()
        speedup = speed_info["speedup"]

        sb = HFModelStats(
            model_name="csarron/bert-base-uncased-squad-v1",
            task=task,
            white_list=["weight"],
            black_list=["embeddings", "LayerNorm", "qa"],
        )

        total_bert = sb.model_part_size()

        fill_rate = total_distilbert / total_bert

        if task == "squadv1":
            # From https://arxiv.org/pdf/1910.01108.pdf
            ret = {
                "f1": 86.9,
                "exact": 79.1,
            }
        elif task == "squadv2":
            # From https://huggingface.co/twmkn9/distilbert-base-uncased-squad2
            ret = {
                "exact": 64.88976637051661,
                "f1": 68.1776176526635,
            }
        elif task == "mnli":
            # From https://arxiv.org/abs/1910.01108 and
            # https://huggingface.co/huggingface/distilbert-base-uncased-finetuned-mnli
            #
            ret = {
                "matched": 82.2,
                #                    "mismatched": 0.8216, # to be checked : from https://huggingface.co/ishan/distilbert-base-uncased-mnli
            }
        elif task == "qqp":
            ret = {"accuracy": 88.5}
        elif task == "sst2":
            ret = {"accuracy": 91.3}
        else:
            raise Exception(f"Unkwnon task {task}")

        ret.update({"fill_rate": fill_rate, "annotate": "DistilBERT", "speedup": speedup})  # 1.63

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
            ret = {"f1": 87.5, "exact": 79.7}
            # [{"f1":82.1, "exact": 72.7, "fill_rate": 0.5, "speedup": 9.4, "annotate":"TinyBERT4"}]
        elif task == "squadv2":
            ret = {"f1": 77.7, "exact": 74.7}
            # Tiny bert 4:  68.2 71.8
        elif task == "mnli":
            ret = {"matched": 84.6, "mismatched": 83.2}
        elif task == "qqp":
            ret = {"f1": 88.0, "accuracy": 91.1}
            # This is test set
            # ret = {"accuracy": 71.6}
        elif task == "sst2":
            ret = {"accuracy": 93.0}
        else:
            raise Exception(f"Unkwnon task {task}")

        ret.update({"fill_rate": 0.5, "speedup": 2.0, "annotate": "TinyBERT6"})

        smb = HFModelStats(
            model_name="huawei-noah/TinyBERT_General_6L_768D",
            task=task,
            white_list=["weight"],
            black_list=["embeddings", "layer_norm", "qa"],
        )

        speed_info = smb.get_speed()

        ret["speedup"] = speed_info["speedup"]

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
            mobile_bert_measured = copy.copy(mobile_bert)
            mobile_bert_no_opt = {"f1": 90.3, "exact": 83.4}
        elif task == "squadv2":
            mobile_bert = {"f1": 79.2, "exact": 76.2}
            mobile_bert_measured = copy.copy(mobile_bert)
            mobile_bert_no_opt = {"f1": 80.2, "exact": 77.6}
        elif task == "mnli":
            mobile_bert = {"matched": 83.3, "mismatched": 82.6}
            mobile_bert_measured = copy.copy(mobile_bert)
            mobile_bert_no_opt = {"matched": 84.3, "mismatched": 83.4}
        elif task == "qqp":
            return {}
        elif task == "sst2":
            mobile_bert = {"accuracy": 92.1}
            mobile_bert_measured = copy.copy(mobile_bert)
            mobile_bert_no_opt = {"accuracy": 92.1}
        else:
            raise Exception(f"Unkwnon task {task}")

        # total_fill_rate = 25.3 / 109
        fill_rate = 5.7 / 22.5
        mobile_bert.update({"fill_rate": fill_rate, "speedup": 342 / 62, "annotate": "MobileBERT"})

        smb = HFModelStats(
            model_name="csarron/mobilebert-uncased-squad-v1",
            task=task,
            white_list=["weight"],
            black_list=["embeddings", "layer_norm", "qa"],
        )

        speed_info = smb.get_speed()

        paper_speedup = 342 / 192
        mobile_bert_no_opt.update({"fill_rate": fill_rate, "speedup": paper_speedup, "annotate": "MobileBERT w/o opt"})

        mobile_bert_measured.update(
            {"fill_rate": fill_rate, "speedup": speed_info["speedup"], "annotate": "MobileBERT"}
        )

        return dict(
            mobile_bert_measured=[mobile_bert_measured], mobile_bert_no_opt=[mobile_bert_no_opt]
        )  # mobile_bert=[mobile_bert],


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
        elif task == "squadv2":
            return {}
        elif task == "mnli":
            sheet_name = "MNLI"
        elif task == "qqp":
            sheet_name = "QQP"
        elif task in ["sst2"]:
            return {}
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
                        elif task == "qqp":
                            d = dict(name=name, fill_rate=d[3] / 100.0, accuracy=d[4] * 100, f1=d[7] * 100)
                        else:
                            raise ValueError(f"Unknown task {task}")

                        d.update(defaults)
                        if key not in ret:
                            ret[key] = []
                        ret[key].append(d)

        return ret


class StructuredPruningOfBert(PointProvider):
    def __init__(self, cache_dir):
        super().__init__(cache_dir)

        s = """a : no pruning 0 0 2712 84.6 0 0 1279
                b : attn(Sq) 1 0 2288 84.2 44.3 0 1112
                c : ff(Sq) 0 1 2103 83.2 0 48.1 908
                d : ff(Sq) + attn(Sq) 1 1 1667 83.7 82.6 44.0 48.1 740
                e : ff(Sq) + attn(Sq) 2 2 1391 83.2 80.9 53.1 64.9 576
                f : ff(Sq) + attn(Sq) 3 3 1213 82.4 76.8 57.6 73.7 492
                g : ff(Sq) + attn(Sq) 4 4 1128 81.5 67.8 60.1 78.4 441"""

        replacements = [
            ("ff(Sq) + attn(Sq)", "ff + attn)"),
            ("ff(Sq)", "ff)"),
            ("attn(Sq)", "attn"),
            ("attn ", "attn)"),
            ("no pruning", "no pruning)"),
        ]
        s2 = s
        for r in replacements:
            s2 = s2.replace(*r)

        headers = [
            "index",
            "type",
            "lambda_att",
            "lambda_ff",
            "time",
            "F1 +retrain",
            "F1 no retrain",
            "% attn removed",
            "% ff removed",
            "size",
        ]

        final_info = {}
        for i, l in enumerate(s2.split("\n")):
            s0, s2 = l.split(")")
            s0, s1 = s0.split(" : ")
            s0 = s0.strip()
            s2 = [float(x) for x in s2.split(" ") if x != ""]
            if i < 3:
                s2.insert(3, 0)

            parts = [s0, s1] + s2

            new_info = {}
            for i, h in enumerate(headers):
                new_info[h] = parts[i]
            final_info[new_info["type"] + " (" + new_info["index"] + ")"] = new_info

        self.info = final_info

    def points_(self, task):
        if task == "squadv2":
            info = self.info
            points = []
            for k, v in info.items():
                size_ratio = v["size"] / info["no pruning (a)"]["size"]
                speedup = info["no pruning (a)"]["time"] / v["time"]
                # The speedup number is for BERT-large, we convert to BERT-base speedup (1024 instead of 768 dim, twice the layers)
                speedup = speedup * 3 / 8
                removed = (v["% ff removed"] * 4 + v["% attn removed"]) / 5

                f1 = v["F1 +retrain"] or v["F1 no retrain"]
                points.append({"f1": f1, "fill_rate": 1.0 - (removed / 100), "speedup": speedup})
        else:
            return {}

        return dict(structured_pruning=points)


class GlueExperiments(PointProvider):
    FILENAME = "BERT glue benchmark.xlsx"

    def __init__(self, cache_dir):
        super().__init__(cache_dir)

    def points_(self, task):
        if task not in ["qqp", "sst2"]:
            return {}

        xcel_file_name = Path(__file__).parent / "files" / self.FILENAME
        sheet_name = "Sheet1"

        xcel = pandas.read_excel(xcel_file_name, index_col=0, sheet_name=sheet_name)
        xcel = pandas.DataFrame(xcel)

        rows = list(xcel.iterrows())

        values = defaultdict(dict)

        keys = ["name"]

        if task == "qqp":
            info_range = [0, 5]
        else:
            info_range = [13, 17]

        row_part = rows[info_range[0] : info_range[1]]
        for i, r in enumerate(row_part[1:]):
            keys.append(r[0])

        for i, (r, d) in enumerate(row_part):
            # print(r[1])

            for j, c in enumerate(d):
                if str(c) != "nan":
                    values[j][keys[i]] = c

        for v in values.values():
            if v["name"] == "bartbasetestqqp-a32-l20-dl1-wr8-fw2-epoch10-teach09":
                v["name"] = "bertbasetestqqp-a32-l20-dl1-wr8-fw2-epoch10-teach09"

            v["with_teacher"] = "teach09" in v["name"]
            v["architecture"] = "bart" if "bart" in v["name"] else "bert"
            fill_rate = v["nnz_perc"]
            if not isinstance(fill_rate, (float, int)):
                assert "%" in fill_rate
                fill_rate = fill_rate.replace("%", "")
                fill_rate = float(fill_rate) / 100.0

            v["fill_rate"] = float(fill_rate)
            del v["nnz_perc"]
            if task == "qqp":
                v["f1"] = float(v["F1"])
                del v["F1"]

            v["accuracy"] = float(v["accuracy"])
            v["speedup"] = 1.0

        ret = defaultdict(list)

        for v in values.values():
            key = "glue_experiment_" + v["architecture"]
            if v["with_teacher"]:
                key += "_teacher"
            if "baseline" not in v["name"]:
                ret[key].append(v)
                print(v["name"], v["fill_rate"], v["accuracy"])

        return ret


class MultiProvider:
    def points(self, task, cache_dir, analyze_result_file):
        ret = {}

        classes = [MovementPruning, Bert, DistilBert, TinyBert, MobileBert, StructuredPruningOfBert, GlueExperiments]

        for cls in classes:
            force = cls == "GlueExperiments"
            ret.update(cls(cache_dir).points(task, force=force))

        if task not in ["qqp", "sst2"]:
            xps = Experiments(cache_dir, analyze_result_file).points(task, force=False)
        else:
            xps = {}

        return ret, xps
