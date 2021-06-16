---
language: en
thumbnail:
license: mit
tags:
- question-answering
- {{model_family}}
- {{model_base}}
datasets:
- squad_v2
metrics:
- squad_v2
widget:
- text: "Where is the Eiffel Tower located?"
  context: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
- text: "Who is Frederic Chopin?"
  context: "Frédéric François Chopin, born Fryderyk Franciszek Chopin (1 March 1810 – 17 October 1849), was a Polish composer and virtuoso pianist of the Romantic era who wrote primarily for solo piano."
---

## {{model_base_name}} model fine-tuned on SQuAD v2

This model was created using the [nn_pruning](https://github.com/huggingface/nn_pruning) python library: the **linear layers contains {{"%.1f"|format(sparsity.linear_density)}}%** of the original {{model_base}} weights.
{% if nn_pruning_needed %}
This model **CANNOT be used without using nn_pruning `optimize_model`** function, as it uses NoNorms instead of LayerNorms and this is not currently supported by the Transformers library.
{% endif %}
{% if use_relu %}
It uses ReLUs instead of GeLUs as in the initial BERT network, to speedup inference.
This does not need special handling, as it is supported by the Transformers library, and flagged in the model config by the ```"hidden_act": "relu"``` entry.
{% endif %}
{% if is_ampere %}
It is Ampere sparse. That means that the non-zero blocks are themselves Ampere sparse, reducing the number of parameters, increasing speed, with a limited impact on precision.
{% endif %}
The model contains **{{"%.1f"|format(sparsity.total_density)}}%** of the original weights **overall** (the embeddings account for a significant part of the model, and they are not pruned by this method).

With a simple resizing of the linear matrices it ran **{{"%.2f"|format(speedup)}}x as fast as {{model_base_name}}** on the evaluation.
This is possible because the pruning method lead to structured matrices: to visualize them, hover below on the plot to see the non-zero/zero parts of each matrix.

<div class="graph">{{graphics.density_info.html}}</div>

In terms of accuracy, its **{{reference.main_metric_name}} is {{"%.2f"|format(eval_metrics.main_metric)}}**, compared with {{reference.main_metric_value}} for {{model_base_name}}, a **{{reference.main_metric_name}} {{"gain" if eval_metrics.main_metric > reference.main_metric_value else "drop"}} of {{"%.2f"|format((eval_metrics.main_metric - reference.main_metric_value) | abs)}}**.

## Fine-Pruning details
This model was fine-tuned from the HuggingFace [model]({{model_base_url}}) checkpoint on [SQuAD2.0](https://rajpurkar.github.io/SQuAD-explorer), and distilled from the model [{{teacher}}]({{teacher_url}}).
This model is case-insensitive: it does not make a difference between english and English.

A side-effect of the block pruning is that some of the attention heads are completely removed: {{sparsity.pruned_heads}} heads were removed on a total of {{sparsity.total_heads}} ({{"%.1f"|format(sparsity.pruned_heads / sparsity.total_heads * 100)}}%).
Here is a detailed view on how the remaining heads are distributed in the network after pruning.
<div class="graph">{{graphics.pruning_info.html}}</div>

## Details of the SQuAD1.1 dataset

| Dataset  | Split | # samples |
| -------- | ----- | --------- |
| SQuAD 2.0 | train | 130.0K      |
| SQuAD 2.0 | eval  | 11.9k     |

### Fine-tuning
- Python: `3.8.5`

- Machine specs:

```CPU: Intel(R) Core(TM) i7-6700K CPU
Memory: 64 GiB
GPUs: 1 GeForce GTX 3090, with 24GiB memory
GPU driver: 455.23.05, CUDA: 11.1
```

### Results

**Pytorch model file size**: `{{packaging.pytorch_final_file_size // 1024 // 1024}}MB` (original BERT: `{{original_model_size_mb // 1024 // 1024}}MB`)

| Metric | # Value   | # Original ([Table 2](https://www.aclweb.org/anthology/N19-1423.pdf))| Variation |
| ------ | --------- | --------- | --------- |
| **EM** | **{{"%.2f"|format(eval_metrics.exact)}}** | **82.83** | **{{"%+.2f"|format(eval_metrics.exact - 83.83)}}**|
| **F1** | **{{"%.2f"|format(eval_metrics.f1)}}** | **85.85** | **{{"%+.2f"|format((eval_metrics.f1 - 85.85))}}**|

```
{{eval_metrics_pretty}}
```

## Example Usage
Install nn_pruning: it contains the optimization script, which just pack the linear layers into smaller ones by removing empty rows/columns.

`pip install nn_pruning`

Then you can use the `transformers library` almost as usual: you just have to call `optimize_model` when the pipeline has loaded.

```python
from transformers import pipeline
from nn_pruning.inference_model_patcher import optimize_model

qa_pipeline = pipeline(
    "question-answering",
    model="{{packaging.model_owner_name}}/{{packaging.model_name}}",
    tokenizer="{{packaging.model_owner_name}}/{{packaging.model_name}}"
)

print("{{model_base_name}} parameters: {{original_model_size_params // 1E6}}M")
print(f"Parameters count (includes only head pruning, not feed forward pruning)={int(qa_pipeline.model.num_parameters() / 1E6)}M")
qa_pipeline.model = optimize_model(qa_pipeline.model, "dense")

print(f"Parameters count after complete optimization={int(qa_pipeline.model.num_parameters() / 1E6)}M")
predictions = qa_pipeline({
    'context': "Frédéric François Chopin, born Fryderyk Franciszek Chopin (1 March 1810 – 17 October 1849), was a Polish composer and virtuoso pianist of the Romantic era who wrote primarily for solo piano.",
    'question': "Who is Frederic Chopin?",
})
print("Predictions", predictions)
```