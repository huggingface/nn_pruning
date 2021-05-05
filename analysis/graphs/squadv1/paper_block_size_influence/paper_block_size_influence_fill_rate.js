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
    
      
      
    
      var element = document.getElementById("a07b88bf-e912-47ef-8710-08603c1cef82");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a07b88bf-e912-47ef-8710-08603c1cef82' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a12903c9-b242-47fe-acde-55fb4c0e3573":{"roots":{"references":[{"attributes":{"axis":{"id":"4185"},"dimension":1,"ticker":null},"id":"4188","type":"Grid"},{"attributes":{},"id":"4427","type":"UnionRenderers"},{"attributes":{},"id":"4428","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4231","type":"Scatter"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"4253","type":"Label"},{"attributes":{"below":[{"id":"4181"}],"center":[{"id":"4184"},{"id":"4188"},{"id":"4205"},{"id":"4226"},{"id":"4228"},{"id":"4253"}],"left":[{"id":"4185"}],"plot_width":800,"renderers":[{"id":"4209"},{"id":"4214"},{"id":"4232"},{"id":"4237"},{"id":"4257"},{"id":"4262"},{"id":"4285"},{"id":"4311"},{"id":"4338"},{"id":"4368"},{"id":"4399"},{"id":"4433"},{"id":"4468"},{"id":"4506"},{"id":"4545"},{"id":"4587"}],"title":null,"toolbar":{"id":"4196"},"x_range":{"id":"4203"},"x_scale":{"id":"4177"},"y_range":{"id":"4204"},"y_scale":{"id":"4179"}},"id":"4171","subtype":"Figure","type":"Plot"},{"attributes":{"end":0.8},"id":"4203","type":"Range1d"},{"attributes":{},"id":"4219","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4260","type":"Line"},{"attributes":{"data_source":{"id":"4254"},"glyph":{"id":"4255"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4256"},"selection_glyph":null,"view":{"id":"4258"}},"id":"4257","type":"GlyphRenderer"},{"attributes":{},"id":"4194","type":"HelpTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4431","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4256","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4464"},"selection_policy":{"id":"4463"}},"id":"4430","type":"ColumnDataSource"},{"attributes":{},"id":"4222","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4259"},"glyph":{"id":"4260"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4261"},"selection_glyph":null,"view":{"id":"4263"}},"id":"4262","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4430"},"glyph":{"id":"4431"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4432"},"selection_glyph":null,"view":{"id":"4434"}},"id":"4433","type":"GlyphRenderer"},{"attributes":{},"id":"4193","type":"ResetTool"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4281"},"selection_policy":{"id":"4280"}},"id":"4259","type":"ColumnDataSource"},{"attributes":{},"id":"4223","type":"Selection"},{"attributes":{"source":{"id":"4254"}},"id":"4258","type":"CDSView"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4466","type":"Line"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"4306"},"selection_policy":{"id":"4305"}},"id":"4282","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4465"}},"id":"4469","type":"CDSView"},{"attributes":{},"id":"4463","type":"UnionRenderers"},{"attributes":{},"id":"4306","type":"Selection"},{"attributes":{"source":{"id":"4282"}},"id":"4286","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4432","type":"Line"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4283","type":"Line"},{"attributes":{"source":{"id":"4430"}},"id":"4434","type":"CDSView"},{"attributes":{},"id":"4177","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4261","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4467","type":"Line"},{"attributes":{"source":{"id":"4259"}},"id":"4263","type":"CDSView"},{"attributes":{},"id":"4464","type":"Selection"},{"attributes":{},"id":"4224","type":"UnionRenderers"},{"attributes":{},"id":"4225","type":"Selection"},{"attributes":{},"id":"4278","type":"UnionRenderers"},{"attributes":{},"id":"4279","type":"Selection"},{"attributes":{},"id":"4192","type":"SaveTool"},{"attributes":{},"id":"4179","type":"LinearScale"},{"attributes":{"source":{"id":"4229"}},"id":"4233","type":"CDSView"},{"attributes":{"data_source":{"id":"4229"},"glyph":{"id":"4230"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4231"},"selection_glyph":null,"view":{"id":"4233"}},"id":"4232","type":"GlyphRenderer"},{"attributes":{},"id":"4280","type":"UnionRenderers"},{"attributes":{},"id":"4501","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4504","type":"Line"},{"attributes":{},"id":"4281","type":"Selection"},{"attributes":{"data_source":{"id":"4503"},"glyph":{"id":"4504"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4505"},"selection_glyph":null,"view":{"id":"4507"}},"id":"4506","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"4181"},"ticker":null},"id":"4184","type":"Grid"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"4279"},"selection_policy":{"id":"4278"}},"id":"4254","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4235","type":"Line"},{"attributes":{},"id":"4500","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4234"},"glyph":{"id":"4235"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4236"},"selection_glyph":null,"view":{"id":"4238"}},"id":"4237","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Block Size=8"},"renderers":[{"id":"4468"}]},"id":"4502","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4252"},"selection_policy":{"id":"4251"}},"id":"4234","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5704405984760802,0.353609061535494,0.22401861496913578,0.13401210455246915],"y":[88.3744311515211,88.02730364897265,86.84949475139184,85.16652519097626]},"selected":{"id":"4501"},"selection_policy":{"id":"4500"}},"id":"4465","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4255","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4236","type":"Line"},{"attributes":{"source":{"id":"4234"}},"id":"4238","type":"CDSView"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"4205","type":"Label"},{"attributes":{"data":{"x":[0.576706686137635,0.3551132767288775,0.22577770845389655,0.1314994906201774],"y":[88.58172107792693,88.21768668110452,87.37325813950282,85.93146728512978]},"selected":{"id":"4582"},"selection_policy":{"id":"4581"}},"id":"4542","type":"ColumnDataSource"},{"attributes":{},"id":"4305","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4284","type":"Line"},{"attributes":{},"id":"4249","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4541"},"selection_policy":{"id":"4540"}},"id":"4503","type":"ColumnDataSource"},{"attributes":{},"id":"4250","type":"Selection"},{"attributes":{"data_source":{"id":"4542"},"glyph":{"id":"4543"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4544"},"selection_glyph":null,"view":{"id":"4546"}},"id":"4545","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"4285"}]},"id":"4307","type":"LegendItem"},{"attributes":{"data_source":{"id":"4211"},"glyph":{"id":"4212"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4213"},"selection_glyph":null,"view":{"id":"4215"}},"id":"4214","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4335"},"glyph":{"id":"4336"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4337"},"selection_glyph":null,"view":{"id":"4339"}},"id":"4338","type":"GlyphRenderer"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4543","type":"Line"},{"attributes":{"source":{"id":"4542"}},"id":"4546","type":"CDSView"},{"attributes":{},"id":"4540","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4396"},"glyph":{"id":"4397"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4398"},"selection_glyph":null,"view":{"id":"4400"}},"id":"4399","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4465"},"glyph":{"id":"4466"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4467"},"selection_glyph":null,"view":{"id":"4469"}},"id":"4468","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4505","type":"Line"},{"attributes":{"overlay":{"id":"4195"}},"id":"4191","type":"BoxZoomTool"},{"attributes":{"source":{"id":"4503"}},"id":"4507","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4544","type":"Line"},{"attributes":{},"id":"4251","type":"UnionRenderers"},{"attributes":{},"id":"4252","type":"Selection"},{"attributes":{},"id":"4541","type":"Selection"},{"attributes":{},"id":"4190","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4309","type":"Line"},{"attributes":{},"id":"4189","type":"PanTool"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4334"},"selection_policy":{"id":"4333"}},"id":"4308","type":"ColumnDataSource"},{"attributes":{"end":90.75,"start":84.5},"id":"4204","type":"Range1d"},{"attributes":{"data_source":{"id":"4308"},"glyph":{"id":"4309"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4310"},"selection_glyph":null,"view":{"id":"4312"}},"id":"4311","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.6812548225308642,0.6752387152777778,0.5732301311728395,0.492259837962963,0.38802083333333326,0.3719618055555556,0.353563850308642,0.2564019097222221,0.24131944444444442,0.18184558256172845,0.17980806327160492],"y":[88.73698799207777,88.67903677006836,88.08831525592305,87.91705961229685,87.36378709007766,87.30735739624531,86.768721062838,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"4363"},"selection_policy":{"id":"4362"}},"id":"4335","type":"ColumnDataSource"},{"attributes":{},"id":"4363","type":"Selection"},{"attributes":{"source":{"id":"4335"}},"id":"4339","type":"CDSView"},{"attributes":{},"id":"4333","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4310","type":"Line"},{"attributes":{"source":{"id":"4308"}},"id":"4312","type":"CDSView"},{"attributes":{},"id":"4582","type":"Selection"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4336","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4585","type":"Line"},{"attributes":{},"id":"4334","type":"Selection"},{"attributes":{},"id":"4581","type":"UnionRenderers"},{"attributes":{"label":{"value":"Block Size=4"},"renderers":[{"id":"4545"}]},"id":"4583","type":"LegendItem"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"4228","type":"Label"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4189"},{"id":"4190"},{"id":"4191"},{"id":"4192"},{"id":"4193"},{"id":"4194"}]},"id":"4196","type":"Toolbar"},{"attributes":{"axis_label":"F1","formatter":{"id":"4219"},"ticker":{"id":"4186"}},"id":"4185","type":"LinearAxis"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"4223"},"selection_policy":{"id":"4222"}},"id":"4206","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4206"},"glyph":{"id":"4207"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4208"},"selection_glyph":null,"view":{"id":"4210"}},"id":"4209","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4282"},"glyph":{"id":"4283"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4284"},"selection_glyph":null,"view":{"id":"4286"}},"id":"4285","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4366","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4337","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4626"},"selection_policy":{"id":"4625"}},"id":"4584","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4365"},"glyph":{"id":"4366"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4367"},"selection_glyph":null,"view":{"id":"4369"}},"id":"4368","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4584"},"glyph":{"id":"4585"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4586"},"selection_glyph":null,"view":{"id":"4588"}},"id":"4587","type":"GlyphRenderer"},{"attributes":{},"id":"4362","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4207","type":"Scatter"},{"attributes":{"label":{"value":"Block Size=32"},"renderers":[{"id":"4338"}]},"id":"4364","type":"LegendItem"},{"attributes":{},"id":"4182","type":"BasicTicker"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4225"},"selection_policy":{"id":"4224"}},"id":"4211","type":"ColumnDataSource"},{"attributes":{},"id":"4625","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4586","type":"Line"},{"attributes":{"source":{"id":"4584"}},"id":"4588","type":"CDSView"},{"attributes":{},"id":"4626","type":"Selection"},{"attributes":{"axis_label":"Density","formatter":{"id":"4217"},"ticker":{"id":"4182"}},"id":"4181","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4213","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4395"},"selection_policy":{"id":"4394"}},"id":"4365","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5761748890817902,0.3578679591049382,0.23011007426697527],"y":[88.34112193061533,87.65780769915727,86.57822332702295]},"selected":{"id":"4428"},"selection_policy":{"id":"4427"}},"id":"4396","type":"ColumnDataSource"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4397","type":"Line"},{"attributes":{},"id":"4186","type":"BasicTicker"},{"attributes":{"source":{"id":"4396"}},"id":"4400","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4398","type":"Line"},{"attributes":{},"id":"4394","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4367","type":"Line"},{"attributes":{"source":{"id":"4365"}},"id":"4369","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4230","type":"Scatter"},{"attributes":{"source":{"id":"4206"}},"id":"4210","type":"CDSView"},{"attributes":{},"id":"4395","type":"Selection"},{"attributes":{"source":{"id":"4211"}},"id":"4215","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4195","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4208","type":"Scatter"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"4250"},"selection_policy":{"id":"4249"}},"id":"4229","type":"ColumnDataSource"},{"attributes":{"click_policy":"hide","items":[{"id":"4227"},{"id":"4307"},{"id":"4364"},{"id":"4429"},{"id":"4502"},{"id":"4583"}],"location":"bottom_right"},"id":"4226","type":"Legend"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"4214"},{"id":"4237"},{"id":"4262"},{"id":"4311"},{"id":"4368"},{"id":"4433"},{"id":"4506"},{"id":"4587"}]},"id":"4227","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4212","type":"Line"},{"attributes":{},"id":"4217","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Block Size=16"},"renderers":[{"id":"4399"}]},"id":"4429","type":"LegendItem"}],"root_ids":["4171"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"a12903c9-b242-47fe-acde-55fb4c0e3573","root_ids":["4171"],"roots":{"4171":"a07b88bf-e912-47ef-8710-08603c1cef82"}}];
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