from pathlib import Path
import json
import copy

LOCAL_PREFIX="/data_2to/devel_data/"
URL_PREFIX="s3://lagunas-sparsity-experiments/backup/"

def rewrite(src, dest):
    with src.open() as f_in:
        j = json.load(f_in)
        dest_j = copy.deepcopy(j)
        del dest_j["checkpoints"]
        dest_j["checkpoints"] = {}
        for k,v in j["checkpoints"].items():
            new_k = k.replace(LOCAL_PREFIX, URL_PREFIX)
            assert(new_k != k)
            dest_j["checkpoints"][new_k] = v

    dest_file = (dest / src.name)
    print(dest_file)
    with dest_file.open("w") as f_out:
        json.dump(dest_j, f_out, sort_keys=True, indent = 4)

def main():
    path = Path(__file__).parent.parent / "files"
    dest = Path(__file__).parent / "files"
    if not dest.exists():
        dest.mkdir()

    for f in path.iterdir():
        if f.name.startswith("results_") and f.name.endswith(".json"):
            rewrite(f, dest)


if __name__ == "__main__":
    main()