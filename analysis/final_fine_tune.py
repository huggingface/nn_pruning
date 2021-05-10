import json
from pathlib import Path
import sys
from examples.question_answering.qa_sparse_xp import QASparseXP
from examples.text_classification.glue_sparse_xp import GlueSparseXP
import shutil


def main(checkpoint_list_file, task):
    checkpoint_list_file = Path(checkpoint_list_file)
    source_points = []
    lines = checkpoint_list_file.open().read().split("\n")
    for s in lines:
        if len(s) != 0:
            if s[0] == "#":
                continue
            if str(checkpoint_list_file).endswith(".jsonl"):
                j = json.loads(s)
                s = j["meta"]["checkpoint"]["path"]
            else:
                s = s.strip()
            assert((task  + "_") in s)
            source_points.append(s)

    print(f"SOURCE POINTS: {len(source_points)}")
    for source_point in source_points:
        print(source_point)

    for source_point in source_points:
        src_path = Path(source_point)
        key = src_path.parent.name
        assert(key.startswith("hp_") or key.startswith("aws_") or key.startswith("large_"))
        dest_key = "fine_tuned_" + key
        task_rewrite = "squadv2" if task == "squad_v2" else task
        dest_path = src_path.parent.parent.parent / f"{task_rewrite}_test_final_fine_tune" / dest_key
        dest_path = dest_path.resolve()
        if dest_path.exists():
            print("SKIPPING", dest_path)
            continue
        else:
            print("PROCESSING", dest_path)

        tmp_path = Path("tmp_finetune/").resolve()
        if tmp_path.exists():
            shutil.rmtree(tmp_path)
        shutil.copytree(src_path, tmp_path)

        files_to_remove = ["trainer_state.json", "training_args.bin", "scheduler.pt"]
        for file_to_remove in files_to_remove:
            file_to_remove_ = tmp_path / file_to_remove
            if file_to_remove_.exists():
                file_to_remove_.unlink()

        dest_path.mkdir(exist_ok=True, parents=True)
        with (dest_path / "source.txt").open("w") as f:
            f.write(str(src_path))

        with open(src_path / "sparse_args.json") as f:
            sparse_args = json.load(f)
            teacher = sparse_args["distil_teacher_name_or_path"]

        if "squad" in task:
            QASparseXP.final_finetune(str(tmp_path), str(dest_path), task, teacher=teacher)
        elif task in ["mnli"]:
            GlueSparseXP.final_finetune(str(tmp_path), str(dest_path), task, teacher=teacher)
        else:
            raise Exception(f"Unknown task {task}")

if __name__ == "__main__":
    checkpoint_list_file = sys.argv[1]
    task = sys.argv[2]
    main(checkpoint_list_file, task)
