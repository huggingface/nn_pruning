import jinja2
from pathlib import Path
from io import StringIO
from pytablewriter import MarkdownTableWriter
from pprint import pprint
import json

class DocBuilder:
    def __init__(self):
        self.git_path = Path(__file__).parent.parent.parent
        self.path = Path(__file__).parent / "files"
        print(self.git_path)

    # From https://www.aclweb.org/anthology/N19-1423.pdf Table 2
    BERT_BASE_PERFORMANCE = dict(large=dict(em=84.1, f1=90.9), base=dict(em=80.8, f1=88.5))

    def open(self, name):
        return (self.path / name).open()

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


    def build_squad_table(self):
        infos = self.read_jsonl("new_xp_v1_speedup_Block_struct_method__final_fine_tuned.jsonl")
        headers = ["BERT model", "F1 difference", "Effective Speedup", "Parameters count reduction", "Theoretical speedup"]

        base_performance = self.BERT_BASE_PERFORMANCE
        values = []
        for info in infos:
            type = "large" if "large" in info["meta"]["path"] else "base"

            f1 = info["f1"] - base_performance["base"]["f1"]
            speedup = info["speedup"]
            sparsity = 1.0 - info["meta"]["fill_rate"]

            if type == "large":
                large_reduction = "%d%%" % (100 * (1.0 - (info["meta"]["fill_rate"] * 3 / 8)))

            perf = "%+0.2f%%" % f1
            speedup = "%0.2fx" % speedup
            theo_speedup = "%0.1fx" % (1.0 / (1.0 - sparsity))
            sparsity = "-%d%%" % (100 * sparsity)
            values.append([type, perf, speedup, sparsity, theo_speedup])

        return {"table":self.markdown_table_string("Squad V1", headers, values), "large_reduction":large_reduction}

    def run(self):
        template = jinja2.Template(self.open("README.jinja.md").read())

        prefix = "build_"
        report = {}
        for name in dir(self):
            if name.startswith(prefix):
                key = name[len(prefix):]
                report[key] = getattr(self, name)()

        pprint(report)
        ret = template.render(**report)

        with (self.git_path / "README.md").open("w") as readme_file:
            readme_file.write(ret)


        pass


if __name__ == "__main__":
    db = DocBuilder()
    db.run()

