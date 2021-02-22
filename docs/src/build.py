import jinja2
from pathlib import Path
from io import StringIO
from pytablewriter import MarkdownTableWriter
from pprint import pprint
import json
from nn_pruning.analysis.create_model import Packager

class DocBuilder:
    def __init__(self):
        self.docs_path = Path(__file__).parent.parent
        self.git_path = self.docs_path.parent
        self.media_path = self.docs_path / "assets" / "media"
        self.path = Path(__file__).parent / "files"
        print(self.docs_path)

    # From https://www.aclweb.org/anthology/N19-1423.pdf Table 2
    # From https://huggingface.co/csarron/bert-base-uncased-squad-v1
    # From https://huggingface.co/bert-large-uncased-whole-word-masking-finetuned-squad
    BERT_BASE_PERFORMANCE = dict(large=dict(em=86.91, f1=93.15, url="https://huggingface.co/bert-large-uncased-whole-word-masking-finetuned-squad"),
                                 base=dict(em=80.8, f1=88.5, url="https://huggingface.co/csarron/bert-base-uncased-squad-v1"))

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

    def build_bert_performance(self):
        headers = ["BERT version", "Exact Match", "F1"]

        values = []
        for k, v in self.BERT_BASE_PERFORMANCE.items():
            values.append([k, v["em"], v["f1"]])

        return self.markdown_table_string("BERT SQuAD v1 performance", headers, values)

    def bold_line(self, line):
        return ["**" + str(v) + "**" for v in line]

    def reorder_squad_table_columns(self, lines):
        new_lines = []
        for l in lines:
            # 7 will contain the theoretical speedup, we are
            new_l = l[0:3] + l[5:6] + l[3:5] + l[7:]
            new_lines.append(new_l)

        return new_lines


    def build_squadv1(self):
        infos = self.read_jsonl("new_xp_v1_speedup_Block_struct_method__final_fine_tuned.jsonl")
        headers = ["Model", "Type", "method", "F1", "F1 diff", "Params", "Theoretical<br>Speedup", "Speedup"]

        base_performance = self.BERT_BASE_PERFORMANCE
        values = []


        bert_large = [f"[#1]({base_performance['large']['url']})", "large", "-", base_performance["large"]["f1"], "%+0.2f" % (base_performance["large"]["f1"] - base_performance["base"]["f1"]), "+166%", "0.37x", "0.35x"]
        bert_large = self.bold_line(bert_large)

        values.append(bert_large)

        bert_base = ["base",  "-", base_performance["base"]["f1"], "+0.00", "+0%", "1.0x", "1.0x", ]
        bert_base = self.bold_line(bert_base)

        base_added = False
        for info in infos:
            path = info["path"]
            size = "large" if "large" in path else "base"
            type = info["type"]

            f1 = info["f1"]
            if f1 <  base_performance["base"]["f1"] and not base_added:
                values.append([f"**[#{len(values) + 1}]({base_performance['base']['url']})**"] + bert_base)
                base_added = True


            f1_diff = info["f1"] - base_performance["base"]["f1"]
            speedup = info["speedup"]
            sparsity = 1.0 - info["fill_rate"]

            if size == "large":
                large_reduction = "%d%%" % (100 * (1.0 - (info["fill_rate"] * 3 / 8)))

            perf = "%+.2f" % f1_diff
            speedup = "%0.2fx" % speedup
            theo_speedup = "%0.1fx" % (1.0 / (1.0 - sparsity))
            sparsity = "-%d%%" % (100 * sparsity)

            name = Packager.build_model_name_(size, "squadv1", info["speedup"], info["f1"], 100 * (1.0 - info["fill_rate"]), info["type"], False, 1)
            url = f"https://huggingface.co/madlag/{name}"

            if info["url"] != None:
                assert(url == info["url"])
                index = f"**[#{len(values) + 1}]({url})**"
            else:
                index = f"#{len(values) + 1}"

            values.append([index,  size, type, f1, perf, sparsity, theo_speedup, speedup])

        headers = self.reorder_squad_table_columns([headers])[0]
        values = self.reorder_squad_table_columns(values)

        #p = grapher.MyPlotter()
        #graph_js, graph_html = p.run()

        #graph_html = graph_html.replace("$$JS_SOURCE$$", "media/graph.js")

        #with open(self.docs_path / "media" / "graph.js", "w") as output:
        #    output.write(graph_js)


        speedup_html = self.read_media_file("squadv1/summary_speedup.html")
        summary_fill_rate_html = self.read_media_file("squadv1/summary_fill_rate.html")


        return dict(table=self.markdown_table_string("Squad V1", headers, values),
                    large_reduction=large_reduction,
                    summary_speedup=speedup_html,
                    summary_fill_rate=summary_fill_rate_html)

    def build_mnli(self):

        speedup_html = self.read_media_file("mnli/summary_speedup.html")
        summary_fill_rate_html = self.read_media_file("mnli/summary_fill_rate.html")


        return dict(summary_speedup=speedup_html,
                    summary_fill_rate=summary_fill_rate_html)

    def run(self):
        template = jinja2.Template(self.open("README.jinja.md").read())

        variables = {}

        def graph_create(title, part, name):
            media_path = variables["media_path"]
            html = variables[part][name]
            html = html.replace("$$JS_PATH$$", f"{media_path}/{part}/{name}.js")[1:]

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
            with (variation["path"] / "README.md").open("w") as readme_file:
                variables.clear()
                variables.update(variation)
                variables.update(report)
                ret = template.render(**variables)
                readme_file.write(ret)


if __name__ == "__main__":
    db = DocBuilder()
    db.run()

