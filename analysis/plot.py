import copy
import itertools
import json
import math
import re
import shutil
from collections import defaultdict
from pathlib import Path

import bokeh
import bokeh.plotting as plotting
import plot_data
import seaborn
from bokeh.io import export_png
from bokeh.models import Label, Range1d
from bokeh.plotting import figure, output_file, show
from matplotlib import pyplot as pyplot

from analysis.graph_util import BokehHelper


def bert_reference_label(accuracy_key, reference_accuracy, index):
    return f"BERT-base ({accuracy_key.capitalize()} = {reference_accuracy}){'' if index == 0 else str(-index)}"


class Plotter:
    def __init__(
        self,
        dest_dir,
        dest_file_name,
        only_dots,
        draw_labels,
        limits,
        title,
        x_label,
        y_label,
        accuracy_key,
        reference_accuracy,
        draw_bert_reference_lines,
        fontsize,
        figsize,
        seaborn_name=None,
    ):
        self.dest_dir = dest_dir
        self.dest_file_name = dest_file_name
        self.only_dots = only_dots
        self.draw_labels = draw_labels
        self.limits = limits
        self.title = title
        self.x_label = x_label
        self.y_label = y_label
        self.accuracy_key = accuracy_key
        self.reference_accuracy = reference_accuracy
        self.draw_bert_reference_lines = draw_bert_reference_lines
        self.fontsize = fontsize
        self.figsize = figsize
        self.seaborn_name = seaborn_name

    @staticmethod
    def label_cleanup(label):
        for s in " _,/=":
            label = label.replace(s, "_")
        return label


class MatplotlibPlotter(Plotter):
    def save_fig(self, extension, **kwargs):
        pyplot.savefig(
            self.dest_dir / (self.dest_file_name + "." + extension),
            dpi=None,
            facecolor="w",
            edgecolor="w",
            orientation="portrait",
            format=None,
            transparent=False,
            metadata=None,
            **kwargs,
        )

    def run(self, plots, key):
        seaborn_name.set_context(self.seaborn_name)

        draw_labels = self.draw_labels

        if self.limits is not None:
            x_min = self.limits[key]["x_min"]
            x_max = self.limits[key]["x_max"]
            y_min = self.limits[key]["y_min"]
            y_max = self.limits[key]["y_max"]
        else:
            x_min = None
            x_max = None
            y_min = None
            y_max = None

        markers = ["o", "v", "s", "+", "v"]

        fig = pyplot.figure(figsize=self.figsize)
        ax1 = fig.add_subplot(111)
        max_x = 0

        for label_text, plot in plots.items():
            x = plot["x"]
            y = plot["y"]
            annotate = plot["annotate"]
            max_x = max(max_x, max(x))

            if len(x) == 1 or self.only_dots:
                l = label_text if len(x) != 1 else None
                pyplot.scatter(x, y, s=3, c="black", alpha=1.0, label=l)  # , marker=markers[i]) # cool
            else:
                pyplot.plot(x, y, label=label_text)  # , marker=markers[i]) # cool

            if draw_labels or len(x) == 1:
                for i, txt in enumerate(x):
                    if x_min is None or x[i] >= x_min and x[i] <= x_max:
                        if y_min is None or y[i] >= y_min and y[i] <= y_max:
                            a = annotate[i] or label_text
                            ax1.annotate(a, (x[i] + 0.005, y[i] + 0.005), fontsize=self.fontsize)
        if self.draw_bert_reference_lines:
            if isinstance(self.draw_bert_reference_lines, int):
                line_count = self.draw_bert_reference_lines
            else:
                line_count = 1

            for i in range(line_count):
                f1 = self.reference_accuracy - i
                pyplot.plot(
                    [0, 10],
                    [self.reference_accuracy - i] * 2,
                    label=bert_reference_label(self.accuracy_key, self.reference_accuracy, i),
                )

        if self.limits is not None:
            legend_pos = self.limits[key]["legend_pos"]
        else:
            legend_pos = "best"

        if self.limits is not None:
            ncol = self.limits[key].get("ncol", 1)
        else:
            ncol = 1

        pyplot.legend(loc=legend_pos, prop={"size": self.fontsize}, ncol=ncol)

        if x_min != None:
            pyplot.xlim(x_min, x_max)
        if y_min != None:
            pyplot.ylim(y_min, y_max)

        pyplot.xticks(fontsize=self.fontsize)
        pyplot.yticks(fontsize=self.fontsize)

        pyplot.xlabel(self.x_label, fontsize=self.fontsize)
        pyplot.ylabel(self.y_label, fontsize=self.fontsize)
        if self.title is not None:
            pyplot.title(self.title, fontsize=self.fontsize)

        pyplot.tight_layout(pad=0.03)

        self.save_fig("png", bbox_inches=None, pad_inches=0.1)
        self.save_fig("pdf")  # , bbox_inches='tight' )
        self.save_fig("eps", bbox_inches="tight")


class BokehPlot(BokehHelper):
    def get_legend_pos(self, limits):
        if limits is not None:
            replacements = [(" ", "_"), ("upper", "top"), ("lower", "bottom")]
            pos = limits["legend_pos"]
            for s, d in replacements:
                pos = pos.replace(s, d)
        else:
            pos = "top_left"
        return pos

    def create_fig(
        self,
        plots,
        key,
        title,
        width,
        x_label,
        y_label,
        limits,
        only_dots,
        accuracy_key,
        reference_accuracy,
        draw_bert_reference_lines,
    ):
        # select a palette
        from bokeh.palettes import Dark2_5 as palette

        # create a new plot with a title and axis labels
        fig = bokeh.plotting.figure(title=title, width=width, x_axis_label="x", y_axis_label="y")
        fig.xaxis.axis_label = x_label
        fig.yaxis.axis_label = y_label

        if limits is not None:
            limits = limits[key]
            x_min = limits["x_min"]
            x_max = limits["x_max"]
            y_min = limits["y_min"]
            y_max = limits["y_max"]
        else:
            x_min = None
            x_max = None
            y_min = None
            y_max = None

        fig.x_range = Range1d(x_min, x_max)
        if y_min is not None and y_max is not None:
            fig.y_range = Range1d(y_min, y_max)

        # add a line renderer with legend and line thickness

        colors = itertools.cycle(palette)

        max_x = -math.inf
        for plot in plots.values():
            max_x = max(max_x, max(plot["x"]))

        for (label_text, plot), color in zip(plots.items(), colors):
            x = plot["x"]
            y = plot["y"]
            annotate = plot["annotate"]

            if len(x) == 1 or only_dots:
                point = Label(x=x[0], y=y[0], text=label_text)
                fig.add_layout(point)
                fig.scatter(x, y)  # , marker=markers[i]) # cool
            else:
                fig.line(x, y, legend_label=label_text, line_width=2, color=color)

            if draw_bert_reference_lines:
                if isinstance(draw_bert_reference_lines, int):
                    line_count = draw_bert_reference_lines
                else:
                    line_count = 1

                for i in range(line_count):
                    f1 = reference_accuracy - i
                    line_args = dict(legend_label=bert_reference_label(accuracy_key, reference_accuracy, i))

                    fig.line(
                        x=[0, x_max], y=[reference_accuracy - i] * 2, color="red", alpha=0.5 ** (i + 2), **line_args
                    )

            if False:
                if draw_labels or len(x) == 1:
                    for i, txt in enumerate(x):
                        if x_min is None or x[i] >= x_min and x[i] <= x_max:
                            if y_min is None or y[i] >= y_min and y[i] <= y_max:
                                annotate = annotate or label_text
                                ax1.annotate(annotate, (x[i] + 0.005, y[i] + 0.005))

        fig.legend.click_policy = "hide"

        fig.legend.location = self.get_legend_pos(limits)
        return fig


class BokehPlotter(Plotter):
    def save_file(self, extension, data):
        with (self.dest_dir / (self.dest_file_name + "." + extension)).open("w") as f:
            f.write(data)

    def run(self, plots, key):
        WIDTH = 800
        div_id = str(self.dest_file_name)
        js_path = "$$JS_PATH$$"
        bp = BokehPlot(div_id, js_path)
        fig, js, tag = bp.run(
            plots,
            key,
            width=WIDTH,
            title=self.title,
            x_label=self.x_label,
            y_label=self.y_label,
            limits=self.limits,
            only_dots=self.only_dots,
            accuracy_key=self.accuracy_key,
            reference_accuracy=self.reference_accuracy,
            draw_bert_reference_lines=self.draw_bert_reference_lines,
        )

        export_png(fig, filename=self.dest_dir / (self.dest_file_name + "_static.png"), width=WIDTH)

        self.save_file("js", js)
        self.save_file("html", tag)


class TextFilePlotter(Plotter):
    def log_plot(self, dest_file_name, x, y, data, x_key, y_key):
        with dest_file_name.open("w") as f:
            for i in range(len(x)):
                s = {x_key: x[i], y_key: y[i], "meta": data[i]}
                f.write(json.dumps(s) + "\n")

    def run(self, plots, key):

        for label_text, plot in plots.items():
            x = plot["x"]
            y = plot["y"]
            point = plot["points"]
            annotate = plot["annotate"]

            label_for_file = self.label_cleanup(label_text)
            log_dir = self.dest_dir / "logs"
            log_dir.mkdir(exist_ok=True)
            self.log_plot(
                log_dir / f"{self.dest_file_name}_{label_for_file}.jsonl", x, y, point, key, self.accuracy_key
            )


class PlotManager:
    TASK_KEYS = {"squadv1": "f1", "squadv2": "f1", "mnli": "matched", "qqp": "f1", "sst2": "accuracy"}
    REFERENCES = {"squadv1": 88.5, "squadv2": 76.70, "mnli": 84.6, "qqp": 88.12, "sst2": 92.66}

    def __init__(
        self,
        task,
        input_filename,
        print_misc=True,
        draw_labels=False,
        convex_envelop=True,
        only_dots=False,
        fontsize=15,
        figsize=(20, 12),
        limits=None,
        label_mapping=None,
        draw_bert_reference_lines=False,
        add_title=True,
        seaborn_name=None,
    ):
        self.cache_dir = Path(__file__).parent / "cache"
        self.cache_dir.mkdir(exist_ok=True)

        self.task = task
        self.input_filename = input_filename
        self.print_misc = print_misc
        self.draw_labels = draw_labels
        self.convex_envelop = convex_envelop
        self.only_dots = only_dots or not convex_envelop
        self.fontsize = fontsize
        self.figsize = figsize
        self.seaborn_name = seaborn_name

        self.limits = limits.get(task, None)

        self.label_mapping = label_mapping

        self.draw_bert_reference_lines = draw_bert_reference_lines
        self.add_title = add_title

    def convexity_filter_checkpoints(self, checkpoints, key="speedup", filt=True):
        margin = 1.0005
        if key == "fill_rate":
            sgn = -1
        else:
            sgn = 1
        key_margin_min = 0.00001
        sort_by_key = lambda x: sgn * x.get(key, 1.0)
        checkpoints.sort(key=sort_by_key, reverse=True)
        best_c = checkpoints[0]
        accuracy_key = self.TASK_KEYS[self.task]

        filtered_checkpoints = [best_c]
        for checkpoint in checkpoints[1:]:
            if True:
                f1_margin = checkpoint[accuracy_key] > filtered_checkpoints[-1][accuracy_key] * margin
                key_margin = abs(checkpoint[key] - filtered_checkpoints[-1][key])
                if key_margin < key_margin_min:
                    if checkpoint[accuracy_key] > filtered_checkpoints[-1][accuracy_key]:
                        filtered_checkpoints[-1] = checkpoint
                else:
                    if not filt or f1_margin:
                        filtered_checkpoints.append(checkpoint)
            else:
                filtered_checkpoints.append(checkpoint)

        filtered_checkpoints.sort(key=sort_by_key, reverse=False)

        return filtered_checkpoints

    def match_regexp_dict(self, key, regexps):
        for r, (i, value) in regexps.items():
            if re.fullmatch(r, key):
                if value is True:
                    return i, key.capitalize()
                else:
                    return i, value
        return None, None

    def plot(self, key, dest_dir, dest_file_name):
        dest_dir = Path(dest_dir)
        dest_dir.mkdir(exist_ok=True)

        references, checkpoints = plot_data.MultiProvider().points(self.task, self.cache_dir, self.input_filename)

        final_plots = {}

        label_mapping = {k: (i, v) for i, (k, v) in enumerate(self.label_mapping.items())}

        indexed_labels = defaultdict(list)

        for inputs in references, checkpoints:
            for k, v in inputs.items():
                index, label = self.match_regexp_dict(k, label_mapping)
                if index is None:
                    print(f"Rejected (WL) {k}")
                    for c in v:
                        if "checkpoint" in c:
                            print(" " * 4, c["checkpoint"]["path"])
                    continue
                indexed_labels[index].append(k)
                final_plots[k] = v

        max_x = -math.inf
        plots = {}
        accuracy_key = self.TASK_KEYS[self.task]

        indexed_labels = [(k, v) for k, v in indexed_labels.items()]
        indexed_labels.sort(key=lambda x: x[0])

        for _, labels in indexed_labels:
            data = []
            for label in labels:
                data += final_plots[label]

            print(data, key)
            x0 = [e.get(key, 1.0) for e in data]

            if self.convex_envelop:  # and len(set(x0)) > 1:
                data = self.convexity_filter_checkpoints(data, key=key, filt=len(set(x0)) > 1)
            print(data, key)
            x = [e.get(key, 1.0) for e in data]
            max_x = max(max_x, max(x))
            print(accuracy_key, json.dumps(data, indent=4, sort_keys=True))
            y = [e[accuracy_key] for e in data]
            annotate = [e.get("annotate", "") for e in data]

            _, label_text = self.match_regexp_dict(label, label_mapping)
            if label_text is None:
                print(label)
            assert label_text is not None
            #            label_text = self.label_mapping.get(label, label.capitalize())
            plots[label_text] = {"x": x, "y": y, "annotate": annotate, "points": data}

        x_label_mapping = {"fill_rate": "density"}
        x_label = x_label_mapping.get(key, key).capitalize()
        y_label = accuracy_key.capitalize()

        if self.add_title:
            title = "%s against %s (BERT-base reference)" % (y_label, x_label)
        else:
            title = None

        reference_accuracy = self.REFERENCES[task]

        params = dict(
            dest_dir=dest_dir,
            dest_file_name=dest_file_name,
            only_dots=self.only_dots,
            draw_labels=self.draw_labels,
            limits=self.limits,
            title=title,
            x_label=x_label,
            y_label=y_label,
            accuracy_key=accuracy_key,
            reference_accuracy=reference_accuracy,
            draw_bert_reference_lines=self.draw_bert_reference_lines,
            fontsize=self.fontsize,
            figsize=self.figsize,
            seaborn_name=self.seaborn_name,
        )

        constructors = [MatplotlibPlotter, TextFilePlotter, BokehPlotter]

        for c in constructors:
            m = c(**params)
            m.run(plots, key)


def draw_all_plots(input_file_name, task, x_axis, cleanup_cache=False):
    max_squad_speed = 2.9
    paper_fontsize = 7
    paper_figsize = (3.6, 15 / 20 * 3.6)
    web_fontsize = 15
    web_figsize = (20, 12)
    plots = {
        "paper_summary": dict(
            add_title=False,
            draw_labels=False,
            fontsize=paper_fontsize,
            figsize=paper_figsize,
            seaborn_name="paper",
            label_mapping={
                "bert": "BERT-base",
                "distilbert": "DistilBERT",
                "tinybert": "TinyBERT",
                "mobile_bert_measured": "MobileBERT",
                "structured_pruning": "Structured Pruning",
                "improved soft movement with distillation": "Movement",
                "Full block method, bs= 32x32+.*": "Block",
                "Block/struct method, bs= 32x32, v=1, s=b": "Hybrid",
                "Block/struct method, final fine tuned, s=b": "Hybrid Filled",
                # "Block/struct method, bs= 32x32, v=1, s=b, t=l": "Hybrid LT",
                "Block/struct method, final fine tuned, s=b, t=l": "Hybrid Filled LT",
                "glue_experiment_bert": "Hybrid w/o teacher",
                "glue_experiment_bert_teacher": "Hybrid",
            },
            limits=dict(
                squadv1=dict(
                    speedup=dict(
                        legend_pos="lower center", ncol=2, x_min=0.95, x_max=max_squad_speed, y_min=83.5, y_max=90.5
                    ),
                    fill_rate=dict(legend_pos="lower center", ncol=2, x_min=0.0, x_max=0.7, y_min=83.5, y_max=90.75),
                ),
                squadv2=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.35, x_max=max_squad_speed, y_min=None, y_max=None),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.8, y_min=None, y_max=None),
                ),
                mnli=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=79, y_max=86),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.75, y_min=79, y_max=86),
                ),
                qqp=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=85, y_max=89),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.75, y_min=85, y_max=89),
                ),
                sst2=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=86, y_max=94),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=1.0, y_min=86, y_max=94),
                ),
            ),
        ),
    }
    plots_paper = {
        "paper_block_size_influence": dict(
            draw_labels=False,
            add_title=False,
            fontsize=paper_fontsize,
            figsize=paper_figsize,
            seaborn_name="paper",
            #            convex_envelop=False,
            label_mapping={
                "bert": "BERT-base",
                "distilbert": "DistilBERT",
                "tinybert": "TinyBERT",
                "mobile_bert_measured": "MobileBERT",
                "improved soft movement with distillation": "Movement",
                "Full block method, bs= 32x32+.*": "Block Size=32",
                "Full block method, bs= 16x16+.*": "Block Size=16",
                "Full block method, bs= 8x8+.*": "Block Size=8",
                "Full block method, bs= 4x4+.*": "Block Size=4",
            },
            limits=dict(
                squadv1=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.95, x_max=2.5, y_min=85, y_max=90.5),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.8, y_min=85, y_max=90.75),
                ),
                squadv2=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.85, x_max=max_squad_speed, y_min=None, y_max=None),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.8, y_min=None, y_max=None),
                ),
                mnli=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=79, y_max=86),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.75, y_min=79, y_max=86),
                ),
            ),
        ),
        "paper_hybrid": dict(
            draw_labels=False,
            fontsize=paper_fontsize,
            figsize=paper_figsize,
            seaborn_name="paper",
            label_mapping={
                "bert": "BERT-base",
                "distilbert": "DistilBERT",
                "tinybert": "TinyBERT",
                "mobile_bert_measured": "MobileBERT",
                "improved soft movement with distillation": "Soft Movement",
                "Block/struct method, bs= 32x32, v=1, s=b": "Hybrid",
                "Block/struct method, bs= 32x32, v=1, s=l": "Hybrid, large",
                "Block/struct method, bs= 32x32, v=1, s=b, t=l": "Hybrid, large teacher",
            },
            limits=dict(
                squadv1=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.85, x_max=max_squad_speed, y_min=None, y_max=None),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.8, y_min=None, y_max=None),
                ),
                squadv2=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.85, x_max=max_squad_speed, y_min=None, y_max=None),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.8, y_min=None, y_max=None),
                ),
                mnli=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=79, y_max=86),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.75, y_min=79, y_max=86),
                ),
            ),
        ),
        "paper_hybrid_filled": dict(
            draw_labels=False,
            fontsize=paper_fontsize,
            figsize=paper_figsize,
            seaborn_name="paper",
            label_mapping={
                "bert": "BERT-base",
                "distilbert": "DistilBERT",
                "tinybert": "TinyBERT",
                "mobile_bert_measured": "MobileBERT",
                "improved soft movement with distillation": "Soft Movement",
                "Block/struct method, final fine tuned, s=b, t=l": "Hybrid Filled, large teacher",
                "Block/struct method, bs= 32x32, v=1, s=b, t=l": "Hybrid, large teacher",
                "Block/struct method, final fine tuned, s=b": "Hybrid Filled",
                "Block/struct method, bs= 32x32, v=1, s=b": "Hybrid",
            },
            limits=dict(
                squadv1=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.85, x_max=max_squad_speed, y_min=84.5, y_max=90.75),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.8, y_min=84.5, y_max=90.75),
                ),
                squadv2=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.85, x_max=max_squad_speed, y_min=None, y_max=None),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.8, y_min=None, y_max=None),
                ),
                mnli=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=79, y_max=86),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.75, y_min=79, y_max=86),
                ),
            ),
        ),
    }
    plots.update(plots_paper)
    if task == "qqp":
        for k, v in plots.items():
            v["label_mapping"]["soft_movement_with_distillation"] = "Soft Movement"
            del v["label_mapping"]["distilbert"]

    plots_old = {
        "summary": dict(
            draw_labels=False,
            fontsize=web_fontsize,
            figsize=web_figsize,
            label_mapping={
                "distilbert": "DistilBERT",
                "tinybert": "TinyBERT",
                "mobile_bert_no_opt": "Mobile Bert (w/o opt)",
                "Block/struct method, final fine tuned, s=b, t=l": "Hybrid filled, BERT-base, large teacher",
                "Block/struct method, final fine tuned, s=l": "Hybrid pruning, BERT-large",
                "Block/struct method, final fine tuned, s=b": "Hybrid pruning, BERT-base",
                "Structured pruning": "Structured pruning, BERT-base",
                "improved soft movement with distillation": "Improved soft movement, BERT-base",
                "soft_movement_with_distillation": "Original Soft Movement",
            },
            limits=dict(
                squadv1=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=4, y_min=None, y_max=None),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.65, y_min=None, y_max=None),
                ),
                mnli=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=79, y_max=86),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.75, y_min=79, y_max=86),
                ),
            ),
        ),
        "summary_with_blocks": dict(
            draw_labels=False,
            fontsize=web_fontsize,
            figsize=web_figsize,
            label_mapping={
                "distilbert": "DistilBERT",
                "tinybert": "TinyBERT",
                "mobile_bert_no_opt": "Mobile Bert (w/o opt)",
                "Block/struct method, final fine tuned, s=l": "Hybrid filled, BERT-large",
                "Block/struct method, final fine tuned, s=b": "Hybrid filled, BERT-base",
                "Block/struct method, final fine tuned, s=b, t=l": "Hybrid filled, BERT-base, large teacher",
                "Block/struct method, bs= 32x32, v=1, s=b": "Hybrid, BERT-base",
                "Block/struct method, bs= 32x32, v=1, s=l": "Hybrid, BERT-large",
                "Block/struct method, bs= 32x32, v=1, s=b, t=l": "Hybrid, BERT-base, large teacher",
                "Block/struct method, bs= 32x32, v=1, s=b, t=l, nonorm=1": "Hybrid, BERT-base, large teacher, NoNorm",
                "Block/struct method, bs= 32x32, v=1, s=b, t=l, nonorm=1, relu=1": "Hybrid, BERT-base, large teacher, Full Patch",
                "Block/struct method, bs= 32x32, v=1, s=b, t=l, nonorm=1, relu=1, rewind=1": "Hybrid, BERT-base, large teacher, Full Patch, Rewind",
                "Structured pruning": "Structured pruning, BERT-base",
                "improved soft movement with distillation": "Improved soft movement, BERT-base",
                "soft_movement_with_distillation": "Original Soft Movement",
            },
            limits=dict(
                squadv1=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=4, y_min=None, y_max=None),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.65, y_min=None, y_max=None),
                ),
                mnli=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=79, y_max=86),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.75, y_min=79, y_max=86),
                ),
            ),
        ),
        "comparison_large_teacher": dict(
            draw_labels=False,
            fontsize=web_fontsize,
            figsize=web_figsize,
            label_mapping={
                "distilbert": "DistilBERT",
                "tinybert": "TinyBERT",
                "mobile_bert_no_opt": "Mobile Bert (w/o opt)",
                "Block/struct method, final fine tuned, s=b": "BERT-base teacher",
                "Block/struct method, final fine tuned, s=b, t=l": "BERT-large teacher",
            },
            limits=dict(
                squadv1=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=4, y_min=None, y_max=None),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.65, y_min=None, y_max=None),
                ),
                mnli=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=79, y_max=86),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.75, y_min=79, y_max=86),
                ),
            ),
        ),
        "full_block_size_influence_raw": dict(
            draw_labels=False,
            fontsize=web_fontsize,
            figsize=web_figsize,
            label_mapping={
                "distilbert": "DistilBERT",
                "tinybert": "TinyBERT",
                "mobile_bert_no_opt": "Mobile Bert (w/o opt)",
                "improved soft movement with distillation": "Improved soft movement, BERT-base",
                "soft_movement_with_distillation": "Original Soft Movement",
                # "Full block method, bs= 32x32+.*": True,
                # "Full block method, bs= 16x16+.*": True,
                "Full block method, bs= 8x8+.*": True,
                # "Full block method, bs= 4x4+.*": True,
                "Block/struct method, bs= 32x32, v=1, s=b": "Hybrid, BERT-base",
            },
            limits=dict(
                squadv1=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=3.25, y_min=None, y_max=None),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.65, y_min=None, y_max=None),
                ),
                mnli=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=79, y_max=86),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.75, y_min=79, y_max=86),
                ),
            ),
        ),
        "full_block_size_influence": dict(
            draw_labels=False,
            fontsize=web_fontsize,
            figsize=web_figsize,
            label_mapping={
                "distilbert": "DistilBERT",
                "tinybert": "TinyBERT",
                "mobile_bert_no_opt": "Mobile Bert (w/o opt)",
                "improved soft movement with distillation": "Improved soft movement, BERT-base",
                "soft_movement_with_distillation": "Original Soft Movement",
                "Full block method, bs= 32x32+.*": "Full block, bs= 32x32",
                "Full block method, bs= 16x16+.*": "Full block, bs= 16x16",
                "Full block method, bs= 8x8+.*": "Full block, bs= 8x8",
                "Full block method, bs= 4x4+.*": "Full block, bs= 4x4",
                "Block/struct method, bs= 32x32, v=1, s=b": "Hybrid, BERT-base",
            },
            limits=dict(
                squadv1=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=3.25, y_min=None, y_max=None),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.65, y_min=None, y_max=None),
                ),
                mnli=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=79, y_max=86),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.75, y_min=79, y_max=86),
                ),
            ),
        ),
        "block_size_influence_basic": dict(
            draw_labels=True,
            fontsize=web_fontsize,
            figsize=web_figsize,
            label_mapping={
                "improved soft movement with distillation": "Unstructured Soft Movement Pruning",
                "Full block method, bs= 32x32+.*": "Block, bs= 32x32",
                "Full block method, bs= 16x16+.*": "Block, bs= 16x16",
                "Full block method, bs= 8x8+.*": "Block, bs= 8x8",
                "Full block method, bs= 4x4+.*": "Block, bs= 4x4",
                "Block/struct method, bs= 32x32, v=1, s=b": "Hybrid, abs=32x32",
                "Block/struct method, final fine tuned, s=b": "Hybrid filled, abs=32x32",
            },
            limits=dict(
                squadv1=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=3.25, y_min=None, y_max=None),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.65, y_min=None, y_max=None),
                ),
                mnli=dict(
                    speedup=dict(legend_pos="upper right", x_min=0.75, x_max=6.0, y_min=79, y_max=86),
                    fill_rate=dict(legend_pos="lower right", x_min=0.0, x_max=0.75, y_min=79, y_max=86),
                ),
            ),
        ),
    }
    for name, configuration in plots.items():
        #        if name not in ["block_size_influence_basic"]:
        #            continue
        configuration = copy.deepcopy(configuration)
        if x_axis == "fill_rate":
            configuration["draw_bert_reference_lines"] = True
            del configuration["label_mapping"]["bert"]

        p = PlotManager(
            task,
            input_file_name,
            **configuration,
        )

        plot_name = Plotter.label_cleanup(name)
        dest = Path("graphs") / task / name
        dest.mkdir(exist_ok=True, parents=True)

        p.plot(x_axis, dest, f"{plot_name}_{x_axis}")


def copy_plots_single(task, dest_dir, parts, suffixes):
    graph_path = (Path(__file__).parent / "graphs" / task).resolve()
    dest_dir.mkdir(exist_ok=True, parents=True)

    for part in parts:
        part_dir = graph_path / part
        part_dir.mkdir(exist_ok=True, parents=True)
        for name in part_dir.iterdir():
            if name.suffix in suffixes:
                src = name
                dst = str(dest_dir / name.name)
                shutil.copyfile(src, dst)


def copy_plots(task):
    # To nn_pruning home page
    git_root_dir = Path(__file__).resolve().parent.parent
    dest_dir = (git_root_dir / "docs" / "assets" / "media" / task / "graphs").resolve()
    parts = ["summary"]
    suffixes = [".html", ".js", ".png"]

    copy_plots_single(task, dest_dir, parts, suffixes)

    # To nn_pruning home page
    dest_dir = (git_root_dir.parent / "article_nn_pruning" / "images" / task).resolve()
    graph_path = (Path(__file__).parent / "graphs" / task).resolve()

    parts = [""]
    for f in graph_path.iterdir():
        if f.name.startswith("paper_"):
            parts.append(f)
    suffixes = [".pdf"]
    copy_plots_single(task, dest_dir, parts, suffixes)


#
# ["squadv1"]:  # , "qqp", "squadv2"]: #, #"squadv1", "mnli"]
def main_plot(results_base_name, tasks):
    for task in tasks:
        input_file_name_ = results_base_name + "_" + task + ".json"
        for x_axis in ["speedup", "fill_rate"]:
            draw_all_plots(input_file_name_, task, x_axis, cleanup_cache=False)
        copy_plots(task)

if __name__ == "__main__":
    import sys

    input_file_name = sys.argv[1]
    for task in ["squadv1"]:  # , "qqp", "squadv2"]: #, #"squadv1", "mnli"]
        input_file_name_ = input_file_name + "_" + task + ".json"
        for x_axis in ["speedup", "fill_rate"]:
            draw_all_plots(input_file_name_, task, x_axis, cleanup_cache=False)
        copy_plots(task)
