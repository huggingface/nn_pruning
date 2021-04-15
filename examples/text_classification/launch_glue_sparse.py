import sys
import copy

def main():
    import json
    from pathlib import Path

    if len(sys.argv) < 2:
        raise RuntimeError("Please specify json file")
    filename = Path(sys.argv[1]).resolve()
    param_dict = json.load(open(filename))

    import examples.text_classification.glue_sparse_xp as glue_sparse_xp

    glue = glue_sparse_xp.GlueSparseXP(param_dict)

    def hp_space(trial):
        return {}

    glue.hyperparameter_search(direction="minimize", hp_space=hp_space, n_trials=1)


def _mp_fn(index):
    # For xla_spawn (TPUs)
    main()


if __name__ == "__main__":
    main()
