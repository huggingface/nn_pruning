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

    def open(self, name):
        return (self.path / name).open()

    def read_jsonl(self, name):
        ret = []
        for line in self.open(name):
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

    def build_squad_table(self):
        info = self.read_jsonl("new_xp_v1_speedup_Block_struct_method__final_fine_tuned.jsonl")
        headers = ["BERT version", "F1 difference", "Speedup / BERT-base "]

        values = [["large", "+2.5%", "2x"]]

        return self.markdown_table_string("Squad V1", headers, values)

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

