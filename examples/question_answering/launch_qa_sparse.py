import sys
import copy

def main():
    import json
    from pathlib import Path
    import sys

    sys.path += ["."]

    import examples.question_answering.qa_sparse_xp as qa_sparse_xp

    if len(sys.argv) < 2:
        raise RuntimeError("Please specify json file")
    filename = Path(sys.argv[1]).resolve()
    param_dict = json.load(open(filename))

#    variants = [{"dense_lambda":1.0, "regularization_final_lambda": 20}]
#    for variant in variants:
#        param_dict_ = copy.deepcopy(param_dict)
#        param_dict_.update(variant)
    qa = qa_sparse_xp.QASparseXP(param_dict)

    def hp_space(trial):
        return {}
    
    qa.hyperparameter_search(direction="minimize", hp_space=hp_space, n_trials=1)

if __name__ == "__main__":
    main()
