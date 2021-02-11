import json
from pathlib import Path
import sys
import nn_pruning.examples.question_answering.qa_sparse_xp as qa_sparse_xp
import shutil


def main(checkpoint_list_file):
    checkpoint_list_file = Path(checkpoint_list_file)
    source_points = []
    lines = checkpoint_list_file.open().read().split("\n")
    for s in lines:
        if len(s) != 0:
            s = s.strip()
            source_points.append(s)


    if False:
        source_points.sort(key=lambda x : x["speedup"])

        last_speedup = 0
        new_source_points = []
        for s in source_points:
            speedup = s["speedup"]
            if speedup > last_speedup * 1.00:
                new_source_points.append(s)
                last_speedup = speedup

        source_points = new_source_points

    print(f"SOURCE POINTS: {len(source_points)}")
    for source_point in source_points:
        print(source_point)

    for source_point in source_points:
        src_path = Path(source_point) #Path(source_point["meta"]["path"])
        key = src_path.parent.name
        assert(key.startswith("hp_") or key.startswith("aws_") or key.startswith("large_"))
        dest_key = "fine_tuned_" + key
        dest_path = src_path.parent.parent.parent / "squad_test_final_fine_tune" / dest_key
        dest_path = dest_path.resolve()
        if dest_path.exists():
            print("SKIPPING", dest_path.name)
            continue
        else:
            print("PROCESSING", dest_path.name)

        tmp_path = Path("tmp_finetune/").resolve()
        if tmp_path.exists():
            shutil.rmtree(tmp_path)
        shutil.copytree(src_path, tmp_path)

        files_to_remove = ["trainer_state.json", "training_args.bin", "scheduler.pt"]
        for file_to_remove in files_to_remove:
            file_to_remove_ = tmp_path / file_to_remove
            if file_to_remove_.exists():
                file_to_remove_.unlink()

        dest_path.mkdir(exist_ok=True)
        with (dest_path / "source.txt").open("w") as f:
            f.write(str(src_path))
        large = key.startswith("large_")
        qa_sparse_xp.QASparseXP.final_finetune(str(tmp_path), str(dest_path), large=large)

if __name__ == "__main__":
    #checkpoint_list_file = sys.argv[1]
    checkpoint_list_file = "checkpoints.txt"
    main(checkpoint_list_file)