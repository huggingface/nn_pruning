import sys
import copy

def main():
    import json
    from pathlib import Path

    if len(sys.argv) < 2:
        raise RuntimeError("Please specify json file")
    filename = Path(sys.argv[1]).resolve()
    param_dict = json.load(open(filename))

    import examples.question_answering.qa_sparse_xp as qa_sparse_xp

    qa = qa_sparse_xp.QASparseXP(param_dict)
    qa.run()



def _mp_fn(index):
    # For xla_spawn (TPUs)
    main()


if __name__ == "__main__":
    main()
