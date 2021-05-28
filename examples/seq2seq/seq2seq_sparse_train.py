# coding=utf-8
# Copyright 2020 The HuggingFace Team All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""
Sparse Fine-tuning the library models for seq2seq tasks.
"""

from nn_pruning.sparse_trainer import SparseTrainer
from .seq2seq_train import Seq2SeqXPTrainer

# SparseTrainer should appear first in the base classes, as its functions must override Seq2SeqXPTrainer and its base classes
class Seq2SeqSparseTrainer(SparseTrainer, Seq2SeqXPTrainer):
    def __init__(self, sparse_args, *args, **kwargs):
        Seq2SeqXPTrainer.__init__(self, *args, **kwargs)
        SparseTrainer.__init__(self, sparse_args)
