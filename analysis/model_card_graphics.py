import plotly.graph_objects as go
from io import StringIO

import plotly.io as pio
import plotly.express as px
pio.orca.config.use_xvfb = True

import bokeh.plotting
import bokeh.models
from bokeh.resources import CDN
from bokeh.embed import autoload_static

from pathlib import Path
import torch
from .graph_util import BokehHelper
from nn_pruning.model_structure import struct_from_config

class PruningInfoBokehPlotter(BokehHelper):


    def create_fig(self, layer_count, pruned_heads, heads_count):
        from bokeh.plotting import figure
        import copy

        layers = list([str(x) for x in range(layer_count)])

        kinds = ["active", "pruned"]
        colors = ["#0000ff", "#ffcccc"]

        active_by_layer = []
        pruned_by_layer = []
        for i in range(layer_count):
            pruned = len(pruned_heads.get(str(i), []))
            active = heads_count - pruned
            pruned_by_layer.append(pruned)
            active_by_layer.append(active)

        data = {'layers': layers,
                'pruned': pruned_by_layer,
                'active': active_by_layer, }

        p = figure(x_range=layers, plot_height=400, title="Pruned Transformer Heads",
                   toolbar_location=None, tools="",
                   x_axis_label="Layer index",
                   y_axis_label="Heads count")

        rs = p.vbar_stack(kinds, x='layers', width=0.9, color=colors, source=data,
                          legend_label=kinds)

        p.y_range.start = 0
        p.x_range.range_padding = 0.1
        p.xgrid.grid_line_color = None
        p.axis.minor_tick_line_color = None
        p.outline_line_color = None
        p.legend.location = "top"
        # p.legend.orientation = "horizontal"

        # rs.reverse()
        # kinds.reverse()

        legend = bokeh.models.Legend(items=[(kind, [r]) for (kind, r) in zip(kinds, rs)],
                                     location=(10, 0), orientation="horizontal")
        p.add_layout(legend, 'above')

        return p


class DensityBokehPlotter(BokehHelper):

    def matrix_blockify(self, matrix, block_size):
        shape = matrix.shape
        matrix = matrix != 0
        m = matrix.reshape(shape[0] // block_size[0], block_size[0], shape[1] // block_size[1], block_size[1])
        m = m.any(1).any(2).int()
        return m

    def matrix_pattern_block(self, matrix, block_size):
        return self.matrix_blockify(matrix, block_size)

    def matrix_pattern_line(self, matrix, block_size):
        a = (matrix != 0).any(0).sum()
        b = (torch.arange(matrix.shape[1]) < a).expand_as(matrix)

        return self.matrix_blockify(b, block_size)

    def matrix_pattern_col(self, matrix, block_size):
        a = (matrix != 0).any(1).sum()
        b = (torch.arange(matrix.shape[0]) < a).unsqueeze(1).expand_as(matrix)
        return self.matrix_blockify(b, block_size)

    def matrix_preprocess(self, matrix):
        self.block_size = (32, 32)

        best_sparsity = -1.0
        best_matrix = None
        for method in "matrix_pattern_block", "matrix_pattern_line", "matrix_pattern_col":
            m = getattr(self, method)(matrix, self.block_size)
            sparsity = (m == 0).sum() / m.numel()
            if sparsity > best_sparsity:
                best_sparsity = sparsity
                best_matrix = m

        return best_matrix

    def color_to_tensor(self, color):
        return torch.tensor(color).float().unsqueeze(0)

    def colorize_matrix(self, matrix):
        import torch
        full_color_tensor = self.color_to_tensor(self.full_color)
        empty_color_tensor = self.color_to_tensor(self.empty_color)

        m = matrix.float()
        m0 = m.unsqueeze(-1).matmul(full_color_tensor)
        m1 = (1 - m).unsqueeze(-1).matmul(empty_color_tensor)
        m_final = m0 + m1

        return m_final

    def create_image(self, matrix, file):
        ratio = self.ratio
        fig = px.imshow(matrix)
        fig.update_layout(width = int(matrix.shape[1] * ratio), height = int(matrix.shape[0] * ratio), margin=dict(l=2, r=2, b=2, t=2))
        fig.write_image(file)

    def replacements_apply(self, s, replacements):
        for r in replacements:
            if isinstance(r, str):
                s = s.replace(r, "")
            else:
                s = s.replace(*r)
        return s

    def process_matrix(self, name, matrix):

        is_attention = self.model_structure.is_attention(name)
        is_ffn = self.model_structure.is_ffn(name)

        if not name.endswith(".weight") or (not is_ffn and not is_attention):
            return
        elif is_attention:
            attention_size = (self.attention_size, self.attention_size)
            if matrix.shape != attention_size:
                zeros = torch.zeros(attention_size)
                zeros[:matrix.shape[0], :matrix.shape[1]] = matrix
                matrix = zeros

        parts = name.split(".")
        nnz = float((matrix != 0).sum())
        density = nnz / matrix.numel()
        parameters = nnz  / 1e6
        block_matrix = self.matrix_preprocess(matrix)
        color_matrix = self.colorize_matrix(block_matrix)

        filename = self.replacements_apply(name, ["bert.encoder.", (".", "_"), ("_weight", ".png"), ])

        layer = dict(name=name, filename=filename, density=density, parameters=parameters, size=matrix.shape)
        self.layers.append(layer)
        with (self.dest_path / filename).open("wb") as f:
            self.create_image(color_matrix, f)

        return matrix

    def process_matrices(self):
        self.layers = []

        for name, parameter in self.model.named_parameters():
            self.process_matrix(name, parameter)

    def add_info(self, traces_, kind, **kwargs):
        if kind not in traces_:
            traces_[kind] = {}
            for k in kwargs:
                traces_[kind][k] = []
        d = traces_[kind]

        for k, v in kwargs.items():
            d[k].append(v)

    def layer_short_name(self, name):
        shortname = name
        shortname = shortname.split(".")
        shortname = shortname[2:]
        shortname = ".".join(shortname)
        shortname = ("decoder." if self.model_structure.is_decoder(name) else "encoder.") + shortname
        shortname = self.replacements_apply(shortname, [".self", ".weight", ".dense", (".", ".")])

        return shortname

    def create_fig(self,
                   model,
                   dest_path,
                   url_base,
                   width=505,
                   height=300,
                   div_id="density",
                   block_size=(32, 32),
                   full_color=[0, 0, 255],
                   empty_color=[255, 190, 190],
                   ratio = 8):
        self.model = model
        self.dest_path = Path(dest_path)
        self.width = width
        self.height = height
        if not self.dest_path.exists():
            self.dest_path.mkdir()
        self.block_size = block_size
        self.full_color = full_color
        self.empty_color = empty_color
        self.url_base = url_base

        self.model_structure = struct_from_config(model.config_class)
        self.attention_size = getattr(model.config, self.model_structure.NAME_CONFIG["hidden_size"])
        self.ratio = ratio
        self.process_matrices()


        traces = {}
        part_index = 0
        max_layer_encoder = -1
        linear_per_layer = len(self.model_structure.LAYER_PATTERNS)
        positions = []
        for layer in self.layers:
            name = layer["name"]
            density = layer["density"] * 100
            parameters = layer["parameters"]
            height = parameters

            kind = None
            for k, v in self.model_structure.LAYER_PATTERNS.items():
                if v in name:
                    increment = 1
                    if k in self.model_structure.ATTENTION_LAYERS:
                        kind = k.replace('encoder_decoder_', '')
                    else:
                        kind = "fully connected"
                    break

            if kind is None:
                print(name)
                assert (False)

            shortname = self.layer_short_name(name)

            x = part_index / linear_per_layer + 1 / (linear_per_layer * 2)
            url = f"{self.url_base}/{layer['filename']}"
            img_height = str(int(layer["size"][0] / 8)) + "px"
            img_width = str(int(layer["size"][1] / 8)) + "px"
            self.add_info(traces,
                          kind,
                          x=x,
                          height=height,
                          name=shortname,
                          density=f"{density:0.1f}%",
                          parameters=f"{parameters:0.2f}",
                          url=url,
                          img_height=img_height,
                          img_width=img_width)
            if x not in positions:
                positions.append(x)

            layer_number = self.model_structure.layer_index(name)
            is_decoder = self.model_structure.is_decoder(name)
            if not is_decoder:
                max_layer_encoder = max(max_layer_encoder, layer_number)
            else:
                layer_number += max_layer_encoder + 1
            if self.model_structure.is_ffn(name) and self.model_structure.LAYER_PATTERNS["output_dense"] in name:
                part_index = (layer_number + 1 ) * linear_per_layer
            else:
                part_index += increment

        colors = ["#6573f7", "#ed5642", "#20cb97", "#aa69f7"]

        hover = bokeh.models.HoverTool(
            tooltips="""
        <div>
            <div style="margin-bottom:10px">
                <span style="font-size: 15px;"><b>@name</b><br/>density=@density</span>
            </div>
            <div>            
                <img
                    src="@url" height="@img_height" width="@img_width" alt="@url"
                    style="float: left; margin: 0px 15px 15px 0px;"
                    border="0"
                />
            </div>
        </div>
        """)

        self.fig = bokeh.plotting.figure(plot_height=self.height,
                                         plot_width=self.width,
                                         title="Transformer Layers",
                                         tools=[hover])

        p = self.fig
        width = 1 / 8

        kinds = []
        bars = []
        for i, key in enumerate(traces):
            kinds.append(key)
            bar = p.vbar(top="height",
                   x="x",
                   width=width,
                   color=colors[i],
                   source=traces[key],
#                   legend_label=key,
#                   legend = False,
                   name=key)
            bars.append(bar)

        p.y_range.start = 0
        p.x_range.range_padding = 0.1
        p.xgrid.grid_line_color = None
        p.axis.minor_tick_line_color = None
        p.outline_line_color = None
#        p.legend.visible = False
        #p.legend.location = "top"
        #p.legend.orientation = "horizontal"

        legend = bokeh.models.Legend(items=[(kind, [r]) for (kind, r) in zip(kinds, bars)],
                                     location=(10, 0), orientation="horizontal")
        p.add_layout(legend, 'above')

        p.xaxis.axis_label = "Layer"
        p.yaxis.axis_label = "Parameters (M)"

        return p
