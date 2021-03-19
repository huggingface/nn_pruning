import transformers.hf_api as hf_api

api = hf_api.HfApi()
token = api.login("madlag", "qqJh}KNkqb}u4]KGkXDf{bHXu")

for m in api.model_list():
    if "madlag" in m.modelId and "ampere" in m.modelId:
        print(m.modelId)

api.delete_repo(token=token, name="bert-base-uncased-squadv1-x1.84-f88.7-d0.3628472222222222-hybrid-filled-v1")
