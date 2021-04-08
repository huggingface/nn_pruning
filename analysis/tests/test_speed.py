import unittest
from examples.question_answering.qa_xp import QAXP
import tempfile
from analysis.plot_data import HFModelStats, MobileBert
from pathlib import Path

class MyTestCase(unittest.TestCase):
    def tst_speed_hub_model(self):
        model_name_or_path = "csarron/mobilebert-uncased-squad-v1"
        #model_name_or_path = "distilbert-base-uncased-distilled-squad"
        #model_name_or_path = "mrm8488/squeezebert-finetuned-squadv1"
        tmpfile = tempfile.TemporaryDirectory()
        try:

            ret = QAXP.evaluate_model(model_name_or_path=model_name_or_path,
                                      task="squad",
                                      optimize_mode="disabled",
                                      output_dir=tmpfile.name)

            keys = {'timings': ['eval_elapsed_time','cuda_eval_elapsed_time'],
                    'metrics': ['exact_match', 'f1']}

            for k, v in keys.items():
                self.assertTrue(k in ret)
                for subk in v:
                    self.assertTrue(subk in ret[k])

            print(ret)
        finally:
            tmpfile.cleanup()

    def tst_plot_data_provider(self):
        s =  HFModelStats("csarron/mobilebert-uncased-squad-v1", "squadv1", {},{})
        base_speed_info = s.get_base_speed_info()
        print(base_speed_info)
        speed_info = s.get_speed()
        print(speed_info)

    def test_mobile_bert_plot_data(self):
        task = "squadv1"
        cache_dir = Path(__file__).resolve().parent.parent / "cache"
        print(cache_dir)
        MobileBert(cache_dir).points(task, force=True)

if __name__ == '__main__':
    unittest.main()
