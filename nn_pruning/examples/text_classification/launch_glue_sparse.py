import sys
import copy

def main():
    import json
    from pathlib import Path

    if len(sys.argv) < 2:
        raise RuntimeError("Please specify json file")
    filename = Path(sys.argv[1]).resolve()
    param_dict = json.load(open(filename))

    import nn_pruning.examples.text_classification.glue_sparse_xp as glue_sparse_xp

    qa = glue_sparse_xp.GlueSparseXP(param_dict)
    qa.run()


def _mp_fn(index):
    # For xla_spawn (TPUs)
    main()


if __name__ == "__main__":
    main()
