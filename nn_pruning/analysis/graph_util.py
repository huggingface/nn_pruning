import bokeh.plotting as plotting
import bokeh.models
from bokeh.resources import CDN
from bokeh.embed import autoload_static

class BokehHelper:
    def __init__(self, div_id, js_path):
        self.div_id = div_id
        self.js_path = js_path

    def create_fig(self, *args, **kwargs):
        raise RuntimeError("Please implement in subclass")

    def run(self, *args, show=False, **kwargs):
        # html = file_html(self.fig, CDN, self.div_id)
        if show:
            plotting.output_notebook()
        fig = self.create_fig(*args, **kwargs)

        if show:
            bokeh.plotting.show(fig)
        else:
            js, tag = autoload_static(fig, CDN, self.js_path)
            return fig, js, tag


class SamplePlotter(BokehHelper):
    def __init__(self):
        super().__init__("main_graph", "$$JS_SOURCE$$")

    def create_fig(self):
        # prepare some data
        x = [1, 2, 3, 4, 5]
        y = [6, 7, 2, 4, 5]

        # output to static HTML file
        # output_notebook()

        # create a new plot with a title and axis labels
        fig = bokeh.plotting.figure(title="simple line example", x_axis_label='x', y_axis_label='y', sizing_mode='scale_width')

        # add a line renderer with legend and line thickness
        fig.line(x, y, legend_label="Temp.", line_width=2)
        # add a line renderer with legend and line thickness
        fig.line(y, x, legend_label="Temp 2.", line_width=2)

        fig.legend.click_policy = "hide"
        return fig
