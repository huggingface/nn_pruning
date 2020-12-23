import sys


def main():
    import json
    from pathlib import Path

    import nn_pruning.examples.question_answering.run_qa_sparse as run_qa_sparse

    if len(sys.argv) < 2:
        raise RuntimeError("Please specify json file")
    filename = Path(sys.argv[1]).resolve()
    param_dict = json.load(open(filename))

    qa = run_qa_sparse.QASparseTraining(param_dict)

    def hp_space(trial):
        return {}

    qa.hyperparameter_search(direction="minimize", hp_space=hp_space, n_trials=1)


def _mp_fn(index):
    # For xla_spawn (TPUs)
    main()


if __name__ == "__main__":
    main()
