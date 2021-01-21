import sys
import copy

def main():
    import json
    from pathlib import Path

    import nn_pruning.examples.question_answering.qa_sparse_xp as qa_sparse_xp

    if len(sys.argv) < 2:
        raise RuntimeError("Please specify json file")
    filename = Path(sys.argv[1]).resolve()
    param_dict = json.load(open(filename))

    variants = [{"dense_lambda":0.25, "regularization_final_lambda": 10},
                {"dense_lambda":0.25, "regularization_final_lambda": 20},
                {"dense_lambda":0.25, "regularization_final_lambda": 5} ]
    for variant in variants:
        param_dict_ = copy.deepcopy(param_dict)
        param_dict_.update(variant)
        qa = qa_sparse_xp.QASparseXP(param_dict_)

        def hp_space(trial):
            return {}

        qa.hyperparameter_search(direction="minimize", hp_space=hp_space, n_trials=1)


def _mp_fn(index):
    # For xla_spawn (TPUs)
    main()


if __name__ == "__main__":
    main()
