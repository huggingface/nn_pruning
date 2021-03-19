from pathlib import Path
import sys
import json

with open(sys.argv[1]) as f:
    whitelist = json.load(f)["checkpoints"]

print("whitelist len= ", len(whitelist))

base = Path("/data_2to/devel_data/nn_pruning/output")
for dir in base.iterdir():
    set_dir = dir.resolve()
    for hp_name in set_dir.iterdir():
        for checkpoint in hp_name.iterdir():
            checkpoint_str = str(checkpoint)
            print(checkpoint)
            if checkpoint_str in whitelist or "squad_test_large_regu_10_d0.25" in checkpoint_str:
                print("KEEPING", checkpoint)
                continue
            else:
                model_file = checkpoint / "pytorch_model.bin"
                if model_file.exists():
                    print("REMOVING", model_file)
#                    model_file.unlink()

