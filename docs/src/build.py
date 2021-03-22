import jinja2
from pathlib import Path
from io import StringIO
from pytablewriter import MarkdownTableWriter
from pprint import pprint
import json
from analysis.create_model import Packager

class DocBuilder:
    def __init__(self, file_name):
        self.docs_path = Path(__file__).parent.parent
        self.git_path = self.docs_path.parent
        self.models_path = self.git_path.parent / "models"
        self.media_path = self.docs_path / "assets" / "media"
        self.path = Path(__file__).parent / "files"
        self.file_name = file_name

    # From https://www.aclweb.org/anthology/N19-1423.pdf Table 2
    # From https://huggingface.co/csarron/bert-base-uncased-squad-v1
    # From https://huggingface.co/bert-large-uncased-whole-word-masking-finetuned-squad
    BERT_BASE_PERFORMANCE = dict(squadv1=dict(large=dict(em=86.91, f1=93.15, url="https://huggingface.co/bert-large-uncased-whole-word-masking-finetuned-squad"),
                                              base=dict(em=80.8, f1=88.5, url="https://huggingface.co/csarron/bert-base-uncased-squad-v1")),
                                 mnli=dict(base=dict(matched=84.6))
                                 )
    TASK_METRICS = dict(squadv1=dict(f1="F1", em="Exact Match"),
                        mnli= dict(matched="Accuracy"))

    def open(self, name):
        return (self.path / name).open()

    def read_media_file(self, name):
        with (self.media_path / name).open() as f:
            return f.read()

    def read_jsonl(self, name):
        ret = []
        for line in self.open(name):
            if line.strip().startswith("#"):
                continue
            ret.append(json.loads(line))
        return ret

    def markdown_string(self, markdown_writer):
        # Build a markdown string from a markdown writer (for tables layout for example)
        markdown = ""
        s = StringIO(markdown)
        s.close = lambda: None
        markdown_writer.dump(s)
        f = StringIO(s.getvalue())
        lines = f.readlines()[1:]
        ret = "".join(lines) + "\n\n"
        return ret

    def markdown_table_string(self, table_name, headers, values):
        writer = MarkdownTableWriter(
            table_name=f"### {table_name}", headers=headers, value_matrix=values
        )
        return self.markdown_string(writer)


    def _build_network(self, base_info, name, model_name):
        network_path = self.models_path / "madlag" / name / "model_card"
        base_info[f"models_{name}_pruning_info"] = self.read_media_file(f"squadv1/models/{name}/pruning_info.html")
        base_info[f"models_{name}_density_info"] = self.read_media_file(f"squadv1/models/{name}/density_info.html")


    def run(self):
        template = jinja2.Template(self.open(self.file_name + ".jinja.md").read())

        variables = {}

        def remove_empty_lines(s):
            s = s.split("\n")
            s = filter(lambda x : len(x) != 0, s)
            return "\n".join(s)

        def graph_create(title, part, name):
            media_path = variables["media_path"]
            html = variables[part.replace("/", "_")][name.replace("/", "_")]
            html = html.replace("$$JS_PATH$$", f"{media_path}/{part}/{name}.js")
            html = remove_empty_lines(html)

            if variables["github_readme"]:
                ret = f"![{title}]({media_path}/{part}/{name}.png)"
            else:
                ret = f'<div class="graph">{html}</div>'

            return ret

        template.globals['graph'] = graph_create

        prefix = "build_"
        report = {}
        for name in dir(self):
            if name.startswith(prefix):
                key = name[len(prefix):]
                report[key] = getattr(self, name)()

        variations = [dict(path=self.git_path, github_readme=True, media_path="docs/assets/media"),
                      dict(path=self.docs_path, github_readme=False, media_path="assets/media")]

        for variation in variations:
            with (variation["path"] / (self.file_name + ".md")).open("w") as readme_file:
                variables.clear()
                variables.update(variation)
                variables.update(report)
                variables["file_name"] = self.file_name
                ret = template.render(**variables)
                readme_file.write(ret)


class ReadmeDocBuilder(DocBuilder):
    def __init__(self):
        super().__init__(file_name = "README")

    def build_bert_performance(self):
        ret = {}
        for task in ["squadv1", "mnli"]:
            values = []
            for k, v in self.BERT_BASE_PERFORMANCE[task].items():
                vv = [k] + [v[tk] for tk in self.TASK_METRICS[task].keys()]
                values.append(vv)

            headers = ["BERT version"] + list(self.TASK_METRICS[task].values())
            ret[task]=self.markdown_table_string(f"BERT {task.capitalize()} performance", headers, values)
        return ret

    def bold_line(self, line):
        return ["**" + str(v) + "**" for v in line]

    def reorder_squad_table_columns(self, lines):
        new_lines = []
        for l in lines:
            # 7 will contain the theoretical speedup, we are
            new_l = l[0:3] + l[5:6] + l[3:5] + l[7:]
            new_lines.append(new_l)

        return new_lines

    def part_build(self, task):
        infos = self.read_jsonl(f"results_{task}.jsonl")
        reference_infos = self.read_jsonl(f"reference_{task}.jsonl")
        accuracy_key = list(self.TASK_METRICS[task].keys())[0]
        akey_display = self.TASK_METRICS[task][accuracy_key]
        headers = ["Model", "Type", "method", akey_display, f"{akey_display} diff", "Params", "Theoretical<br>Speedup", "Speedup"]

        for e in reference_infos:
            e["reference"] = True

        for e in infos:
            e["reference"] = False

        all_infos = infos + reference_infos
        all_infos.sort(key=lambda e : e[accuracy_key], reverse=True)

        base_performance = self.BERT_BASE_PERFORMANCE[task]
        values = []

        large_reduction = None
        for info in all_infos:
            path = info.get("path", info.get("url"))
            size = "large" if "large" in path else "base"
            type = info["type"]

            accuracy = info[accuracy_key]

            accuracy_diff = info[accuracy_key] - base_performance["base"][accuracy_key]
            speedup = info["speedup"]
            sparsity = 1.0 - info["fill_rate"]

            if size == "large":
                large_reduction = "%d%%" % (100 * (1.0 - (info["fill_rate"] * 3 / 8)))

            perf = "%+.2f" % accuracy_diff
            speedup = "%0.2fx" % speedup
            theo_speedup = "%0.1fx" % (1.0 / (1.0 - sparsity))
            sparsity = "%+d%%" % (-100 * sparsity)

            if info.get("reference"):
                url = info["url"]
                index = f"[#{len(values) + 1}]({url})"
            else:
                name = Packager.build_model_name_(size, task, info["speedup"], info[accuracy_key],
                                                  100 * (1.0 - info["fill_rate"]), info["type"], False, 1)
                url = f"https://huggingface.co/madlag/{name}"

                if info["url"] != None:
                    assert(url == info["url"])
                    index = f"**[#{len(values) + 1}]({url})**"
                else:
                    index = f"#{len(values) + 1}"

            v = [index,  size, type, accuracy, perf, sparsity, theo_speedup, speedup]
            if info.get("reference"):
                v = self.bold_line(v)

            values.append(v)

        headers = self.reorder_squad_table_columns([headers])[0]
        values = self.reorder_squad_table_columns(values)

        speedup_html = self.read_media_file(f"{task}/graphs/summary_speedup.html")
        summary_fill_rate_html = self.read_media_file(f"{task}/graphs/summary_fill_rate.html")

        return dict(table=self.markdown_table_string(task.capitalize(), headers, values),
                    large_reduction=large_reduction,
                    graphs_summary_speedup=speedup_html,
                    graphs_summary_fill_rate=summary_fill_rate_html)

    def build_squadv1(self):
        ret = self.part_build("squadv1")
        self._build_network(ret, "network_filled", "bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1")
        return ret

    def build_mnli(self):
        return self.part_build("mnli")

class ResearchReportDocBuilder(DocBuilder):
    def __init__(self):
        super().__init__(file_name = "RESEARCH_REPORT")


if __name__ == "__main__":
    ReadmeDocBuilder().run()
    ResearchReportDocBuilder().run()

