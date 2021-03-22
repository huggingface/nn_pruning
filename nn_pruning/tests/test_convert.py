import shutil
import unittest
from pathlib import Path
from unittest import TestCase

import examples.question_answering.run_qa_sparse as run_qa_sparse


class TestFun(TestCase):
    def test_base(self):
        checkpoint_path = Path("/home/lagunas/tmp/checkpoint-5")
        dest_path = checkpoint_path.parent / (checkpoint_path.name + "-compiled")
        shutil.rmtree(dest_path)

        model = run_qa_sparse.QASparseTraining.compile_model(checkpoint_path, str(dest_path))


if __name__ == "__main__":
    unittest.main()
