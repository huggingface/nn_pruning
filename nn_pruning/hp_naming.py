# Copyright 2020 The HuggingFace Team. All rights reserved.
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

import copy
import re


class TrialShortNamer:
    PREFIX = "hp"
    DEFAULTS = {}
    NAMING_INFO = None
    MAX_LENGTH = 200

    @classmethod
    def set_defaults(cls, prefix, defaults):
        cls.PREFIX = prefix
        cls.DEFAULTS = defaults
        cls.build_naming_info()

    @staticmethod
    def length_tuple_enumerator(parts):
        for i in range(len(parts[0])):
            if len(parts) == 1:
                yield (i + 1,)
            else:
                for l in TrialShortNamer.length_tuple_enumerator(parts[1:]):
                    yield (i + 1,) + l

    @staticmethod
    def names_enumerator(s, splitter="_", separator="_"):
        parts = s.split(splitter)
        for ls in TrialShortNamer.length_tuple_enumerator(parts):
            ps = [p[: ls[i]] for i, p in enumerate(parts)]
            yield separator.join(ps)

    @staticmethod
    def shortname_for_key(info, param_name):
        # We try to create a separatorless short name, but if there is a collision we have to fallback
        # to a separated short name
        separators = ["", "_"]

        for separator in separators:
            for shortname in TrialShortNamer.names_enumerator(param_name, separator=separator):
                if shortname not in info["reverse_short_param"]:
                    info["short_param"][param_name] = shortname
                    info["reverse_short_param"][shortname] = param_name
                    return shortname

        return param_name

    @staticmethod
    def add_new_param_name(info, param_name):
        short_name = TrialShortNamer.shortname_for_key(info, param_name)
        info["short_param"][param_name] = short_name
        info["reverse_short_param"][short_name] = param_name

    @classmethod
    def build_naming_info(cls):
        if cls.NAMING_INFO is not None:
            return

        info = dict(
            short_word={},
            reverse_short_word={},
            short_param={},
            reverse_short_param={},
        )

        field_keys = list(cls.DEFAULTS.keys())

        for k in field_keys:
            cls.add_new_param_name(info, k)

        cls.NAMING_INFO = info

    @classmethod
    def shortname(cls, params):
        cls.build_naming_info()
        assert cls.PREFIX is not None
        name = [copy.copy(cls.PREFIX)]

        missing_defaults = {}
        for k, v in params.items():
            if k not in cls.DEFAULTS:
                missing_defaults[k] = v

        if len(missing_defaults) != 0:
            print(missing_defaults)
            raise Exception(f"You should provide a default value for the params {missing_defaults}")

        for k, v in params.items():
            if v == cls.DEFAULTS[k]:
                # The default value is not added to the name
                continue

            key = cls.NAMING_INFO["short_param"][k]

            if isinstance(v, bool):
                v = 1 if v else 0

            sep = "" if isinstance(v, (int, float)) else "-"
            e = f"{key}{sep}{v}"
            name.append(e)

        ret = "_".join(name).replace("/", "__")

        if len(ret) > cls.MAX_LENGTH:
            h = hex(abs(hash(ret)))[2:]
            ret = ret[:cls.MAX_LENGTH]
            ret = ret[:-len(h) - 2]
            ret = ret + "--" + h
        return ret

    @classmethod
    def parse_repr(cls, repr):
        repr = repr[len(cls.PREFIX) + 1 :]
        if repr == "":
            values = []
        else:
            values = repr.split("_")

        parameters = {}

        for value in values:
            if "-" in value:
                p_k, p_v = value.split("-")
            else:
                p_k = re.sub("[0-9.]", "", value)
                p_v = float(re.sub("[^0-9.]", "", value))

            key = cls.NAMING_INFO["reverse_short_param"][p_k]

            parameters[key] = p_v

        for k in cls.DEFAULTS:
            if k not in parameters:
                parameters[k] = cls.DEFAULTS[k]

        return parameters
