(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("785989b7-480c-4178-b891-183b633dd090");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '785989b7-480c-4178-b891-183b633dd090' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"9871e7b5-e1db-4e08-9c77-f58701051df8":{"roots":{"references":[{"attributes":{},"id":"4519","type":"UnionRenderers"},{"attributes":{},"id":"4520","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4524","type":"Line"},{"attributes":{"data_source":{"id":"4645"},"glyph":{"id":"4646"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4647"},"selection_glyph":null,"view":{"id":"4649"}},"id":"4648","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4548"},"selection_policy":{"id":"4547"}},"id":"4523","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4646","type":"Line"},{"attributes":{},"id":"4405","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"4523"},"glyph":{"id":"4524"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4525"},"selection_glyph":null,"view":{"id":"4527"}},"id":"4526","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.6812548225308642,0.6752387152777778,0.5732301311728395,0.492259837962963,0.38802083333333326,0.3719618055555556,0.353563850308642,0.2564019097222221,0.24131944444444442,0.18184558256172845,0.17980806327160492],"y":[88.73698799207777,88.67903677006836,88.08831525592305,87.91705961229685,87.36378709007766,87.30735739624531,86.768721062838,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"4577"},"selection_policy":{"id":"4576"}},"id":"4550","type":"ColumnDataSource"},{"attributes":{},"id":"4641","type":"UnionRenderers"},{"attributes":{},"id":"4642","type":"Selection"},{"attributes":{"source":{"id":"4550"}},"id":"4554","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4525","type":"Line"},{"attributes":{"source":{"id":"4523"}},"id":"4527","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4551","type":"Line"},{"attributes":{},"id":"4404","type":"PanTool"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4678"},"selection_policy":{"id":"4677"}},"id":"4645","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"4410"}},"id":"4406","type":"BoxZoomTool"},{"attributes":{},"id":"4547","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.5704405984760802,0.353609061535494,0.22401861496913578,0.13401210455246915],"y":[88.3744311515211,88.02730364897265,86.84949475139184,85.16652519097626]},"selected":{"id":"4715"},"selection_policy":{"id":"4714"}},"id":"4680","type":"ColumnDataSource"},{"attributes":{},"id":"4548","type":"Selection"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4681","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"4437"},"selection_policy":{"id":"4436"}},"id":"4421","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4680"}},"id":"4684","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4410","type":"BoxAnnotation"},{"attributes":{"end":90.75,"start":84.5},"id":"4419","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4647","type":"Line"},{"attributes":{"source":{"id":"4645"}},"id":"4649","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4581","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4682","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4552","type":"Line"},{"attributes":{},"id":"4677","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4580"},"glyph":{"id":"4581"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4582"},"selection_glyph":null,"view":{"id":"4584"}},"id":"4583","type":"GlyphRenderer"},{"attributes":{},"id":"4678","type":"Selection"},{"attributes":{"label":{"value":"Block Size=32"},"renderers":[{"id":"4553"}]},"id":"4579","type":"LegendItem"},{"attributes":{},"id":"4576","type":"UnionRenderers"},{"attributes":{},"id":"4577","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4719","type":"Line"},{"attributes":{},"id":"4397","type":"BasicTicker"},{"attributes":{"data_source":{"id":"4718"},"glyph":{"id":"4719"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4720"},"selection_glyph":null,"view":{"id":"4722"}},"id":"4721","type":"GlyphRenderer"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"4443","type":"Label"},{"attributes":{"axis_label":"Density","formatter":{"id":"4433"},"ticker":{"id":"4397"}},"id":"4396","type":"LinearAxis"},{"attributes":{"label":{"value":"Block Size=8"},"renderers":[{"id":"4683"}]},"id":"4717","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4422","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4609"},"selection_policy":{"id":"4608"}},"id":"4580","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5761748890817902,0.3578679591049382,0.23011007426697527],"y":[88.34112193061533,87.65780769915727,86.57822332702295]},"selected":{"id":"4642"},"selection_policy":{"id":"4641"}},"id":"4611","type":"ColumnDataSource"},{"attributes":{},"id":"4714","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4612","type":"Line"},{"attributes":{},"id":"4715","type":"Selection"},{"attributes":{"source":{"id":"4611"}},"id":"4615","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4613","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4404"},{"id":"4405"},{"id":"4406"},{"id":"4407"},{"id":"4408"},{"id":"4409"}]},"id":"4411","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4582","type":"Line"},{"attributes":{"source":{"id":"4580"}},"id":"4584","type":"CDSView"},{"attributes":{"data":{"x":[0.576706686137635,0.3551132767288775,0.22577770845389655,0.1314994906201774],"y":[88.58172107792693,88.21768668110452,87.37325813950282,85.93146728512978]},"selected":{"id":"4796"},"selection_policy":{"id":"4795"}},"id":"4757","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Block Size=16"},"renderers":[{"id":"4614"}]},"id":"4644","type":"LegendItem"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"4420","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4423","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4755"},"selection_policy":{"id":"4754"}},"id":"4718","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4421"},"glyph":{"id":"4422"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4423"},"selection_glyph":null,"view":{"id":"4425"}},"id":"4424","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4757"},"glyph":{"id":"4758"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4759"},"selection_glyph":null,"view":{"id":"4761"}},"id":"4760","type":"GlyphRenderer"},{"attributes":{},"id":"4608","type":"UnionRenderers"},{"attributes":{},"id":"4392","type":"LinearScale"},{"attributes":{},"id":"4609","type":"Selection"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4758","type":"Line"},{"attributes":{"source":{"id":"4718"}},"id":"4722","type":"CDSView"},{"attributes":{},"id":"4394","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4720","type":"Line"},{"attributes":{"source":{"id":"4757"}},"id":"4761","type":"CDSView"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"4468","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4759","type":"Line"},{"attributes":{},"id":"4433","type":"BasicTickFormatter"},{"attributes":{},"id":"4465","type":"UnionRenderers"},{"attributes":{},"id":"4754","type":"UnionRenderers"},{"attributes":{},"id":"4466","type":"Selection"},{"attributes":{},"id":"4755","type":"Selection"},{"attributes":{"source":{"id":"4421"}},"id":"4425","type":"CDSView"},{"attributes":{"below":[{"id":"4396"}],"center":[{"id":"4399"},{"id":"4403"},{"id":"4420"},{"id":"4441"},{"id":"4443"},{"id":"4468"}],"left":[{"id":"4400"}],"plot_width":800,"renderers":[{"id":"4424"},{"id":"4429"},{"id":"4447"},{"id":"4452"},{"id":"4472"},{"id":"4477"},{"id":"4500"},{"id":"4526"},{"id":"4553"},{"id":"4583"},{"id":"4614"},{"id":"4648"},{"id":"4683"},{"id":"4721"},{"id":"4760"},{"id":"4802"}],"title":null,"toolbar":{"id":"4411"},"x_range":{"id":"4418"},"x_scale":{"id":"4392"},"y_range":{"id":"4419"},"y_scale":{"id":"4394"}},"id":"4386","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4435","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4800","type":"Line"},{"attributes":{"end":0.8},"id":"4418","type":"Range1d"},{"attributes":{"data_source":{"id":"4799"},"glyph":{"id":"4800"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4801"},"selection_glyph":null,"view":{"id":"4803"}},"id":"4802","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4475","type":"Line"},{"attributes":{"source":{"id":"4469"}},"id":"4473","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4471","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4840"},"selection_policy":{"id":"4839"}},"id":"4799","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4474"},"glyph":{"id":"4475"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4476"},"selection_glyph":null,"view":{"id":"4478"}},"id":"4477","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4469"},"glyph":{"id":"4470"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4471"},"selection_glyph":null,"view":{"id":"4473"}},"id":"4472","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4801","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4495"},"selection_policy":{"id":"4494"}},"id":"4474","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4799"}},"id":"4803","type":"CDSView"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"4520"},"selection_policy":{"id":"4519"}},"id":"4497","type":"ColumnDataSource"},{"attributes":{},"id":"4407","type":"SaveTool"},{"attributes":{},"id":"4795","type":"UnionRenderers"},{"attributes":{},"id":"4436","type":"UnionRenderers"},{"attributes":{},"id":"4796","type":"Selection"},{"attributes":{"axis_label":"F1","formatter":{"id":"4435"},"ticker":{"id":"4401"}},"id":"4400","type":"LinearAxis"},{"attributes":{"source":{"id":"4497"}},"id":"4501","type":"CDSView"},{"attributes":{},"id":"4437","type":"Selection"},{"attributes":{"data_source":{"id":"4611"},"glyph":{"id":"4612"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4613"},"selection_glyph":null,"view":{"id":"4615"}},"id":"4614","type":"GlyphRenderer"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4498","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4476","type":"Line"},{"attributes":{},"id":"4839","type":"UnionRenderers"},{"attributes":{"source":{"id":"4474"}},"id":"4478","type":"CDSView"},{"attributes":{},"id":"4840","type":"Selection"},{"attributes":{},"id":"4408","type":"ResetTool"},{"attributes":{"axis":{"id":"4400"},"dimension":1,"ticker":null},"id":"4403","type":"Grid"},{"attributes":{"click_policy":"hide","items":[{"id":"4442"},{"id":"4522"},{"id":"4579"},{"id":"4644"},{"id":"4717"},{"id":"4798"}],"location":"bottom_right"},"id":"4441","type":"Legend"},{"attributes":{},"id":"4438","type":"UnionRenderers"},{"attributes":{},"id":"4439","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4439"},"selection_policy":{"id":"4438"}},"id":"4426","type":"ColumnDataSource"},{"attributes":{},"id":"4492","type":"UnionRenderers"},{"attributes":{},"id":"4493","type":"Selection"},{"attributes":{"source":{"id":"4444"}},"id":"4448","type":"CDSView"},{"attributes":{"data_source":{"id":"4449"},"glyph":{"id":"4450"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4451"},"selection_glyph":null,"view":{"id":"4453"}},"id":"4452","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4427","type":"Line"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"4493"},"selection_policy":{"id":"4492"}},"id":"4469","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4450","type":"Line"},{"attributes":{"label":{"value":"Block Size=4"},"renderers":[{"id":"4760"}]},"id":"4798","type":"LegendItem"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"4464"},"selection_policy":{"id":"4463"}},"id":"4444","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4446","type":"Scatter"},{"attributes":{"data_source":{"id":"4444"},"glyph":{"id":"4445"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4446"},"selection_glyph":null,"view":{"id":"4448"}},"id":"4447","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4466"},"selection_policy":{"id":"4465"}},"id":"4449","type":"ColumnDataSource"},{"attributes":{},"id":"4409","type":"HelpTool"},{"attributes":{},"id":"4494","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4497"},"glyph":{"id":"4498"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4499"},"selection_glyph":null,"view":{"id":"4501"}},"id":"4500","type":"GlyphRenderer"},{"attributes":{},"id":"4495","type":"Selection"},{"attributes":{"source":{"id":"4426"}},"id":"4430","type":"CDSView"},{"attributes":{"data_source":{"id":"4680"},"glyph":{"id":"4681"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4682"},"selection_glyph":null,"view":{"id":"4684"}},"id":"4683","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4470","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4451","type":"Line"},{"attributes":{"source":{"id":"4449"}},"id":"4453","type":"CDSView"},{"attributes":{},"id":"4401","type":"BasicTicker"},{"attributes":{"axis":{"id":"4396"},"ticker":null},"id":"4399","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4445","type":"Scatter"},{"attributes":{"data_source":{"id":"4426"},"glyph":{"id":"4427"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4428"},"selection_glyph":null,"view":{"id":"4430"}},"id":"4429","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4499","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4428","type":"Line"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"4500"}]},"id":"4522","type":"LegendItem"},{"attributes":{"data_source":{"id":"4550"},"glyph":{"id":"4551"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4552"},"selection_glyph":null,"view":{"id":"4554"}},"id":"4553","type":"GlyphRenderer"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"4429"},{"id":"4452"},{"id":"4477"},{"id":"4526"},{"id":"4583"},{"id":"4648"},{"id":"4721"},{"id":"4802"}]},"id":"4442","type":"LegendItem"},{"attributes":{},"id":"4463","type":"UnionRenderers"},{"attributes":{},"id":"4464","type":"Selection"}],"root_ids":["4386"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"9871e7b5-e1db-4e08-9c77-f58701051df8","root_ids":["4386"],"roots":{"4386":"785989b7-480c-4178-b891-183b633dd090"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();