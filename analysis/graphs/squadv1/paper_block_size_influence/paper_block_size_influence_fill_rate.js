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
    
      
      
    
      var element = document.getElementById("7c298c26-f9a7-452a-b3a9-86e6c05e0650");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7c298c26-f9a7-452a-b3a9-86e6c05e0650' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4086478d-d55f-42e3-8812-47432bd4650a":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4258","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4282","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4278"},"selection_policy":{"id":"4279"}},"id":"4257","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4254","type":"Scatter"},{"attributes":{"data_source":{"id":"4257"},"glyph":{"id":"4258"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4259"},"selection_glyph":null,"view":{"id":"4261"}},"id":"4260","type":"GlyphRenderer"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4281","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4583","type":"Line"},{"attributes":{"source":{"id":"4252"}},"id":"4256","type":"CDSView"},{"attributes":{"data_source":{"id":"4252"},"glyph":{"id":"4253"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4254"},"selection_glyph":null,"view":{"id":"4256"}},"id":"4255","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4623"},"selection_policy":{"id":"4624"}},"id":"4582","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4582"},"glyph":{"id":"4583"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4584"},"selection_glyph":null,"view":{"id":"4586"}},"id":"4585","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Movement"},"renderers":[{"id":"4283"}]},"id":"4305","type":"LegendItem"},{"attributes":{"data_source":{"id":"4394"},"glyph":{"id":"4395"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4396"},"selection_glyph":null,"view":{"id":"4398"}},"id":"4397","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"4303"},"selection_policy":{"id":"4304"}},"id":"4280","type":"ColumnDataSource"},{"attributes":{},"id":"4303","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4259","type":"Line"},{"attributes":{"source":{"id":"4257"}},"id":"4261","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4584","type":"Line"},{"attributes":{"source":{"id":"4582"}},"id":"4586","type":"CDSView"},{"attributes":{},"id":"4623","type":"Selection"},{"attributes":{},"id":"4276","type":"Selection"},{"attributes":{},"id":"4190","type":"SaveTool"},{"attributes":{},"id":"4624","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4187"},{"id":"4188"},{"id":"4189"},{"id":"4190"},{"id":"4191"},{"id":"4192"}]},"id":"4194","type":"Toolbar"},{"attributes":{},"id":"4277","type":"UnionRenderers"},{"attributes":{},"id":"4278","type":"Selection"},{"attributes":{},"id":"4279","type":"UnionRenderers"},{"attributes":{"source":{"id":"4280"}},"id":"4284","type":"CDSView"},{"attributes":{},"id":"4187","type":"PanTool"},{"attributes":{"data_source":{"id":"4333"},"glyph":{"id":"4334"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4335"},"selection_glyph":null,"view":{"id":"4337"}},"id":"4336","type":"GlyphRenderer"},{"attributes":{},"id":"4304","type":"UnionRenderers"},{"attributes":{},"id":"4580","type":"UnionRenderers"},{"attributes":{},"id":"4175","type":"LinearScale"},{"attributes":{"overlay":{"id":"4193"}},"id":"4189","type":"BoxZoomTool"},{"attributes":{},"id":"4177","type":"LinearScale"},{"attributes":{"click_policy":"hide","items":[{"id":"4225"},{"id":"4305"},{"id":"4362"},{"id":"4427"},{"id":"4500"},{"id":"4581"}],"location":"bottom_right"},"id":"4224","type":"Legend"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4307","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4331"},"selection_policy":{"id":"4332"}},"id":"4306","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4306"},"glyph":{"id":"4307"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4308"},"selection_glyph":null,"view":{"id":"4310"}},"id":"4309","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.6812548225308642,0.6752387152777778,0.5732301311728395,0.492259837962963,0.38802083333333326,0.3719618055555556,0.353563850308642,0.2564019097222221,0.24131944444444442,0.18184558256172845,0.17980806327160492],"y":[88.73698799207777,88.67903677006836,88.08831525592305,87.91705961229685,87.36378709007766,87.30735739624531,86.768721062838,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"4360"},"selection_policy":{"id":"4361"}},"id":"4333","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4335","type":"Line"},{"attributes":{"source":{"id":"4333"}},"id":"4337","type":"CDSView"},{"attributes":{},"id":"4192","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4308","type":"Line"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"4203","type":"Label"},{"attributes":{"source":{"id":"4306"}},"id":"4310","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4334","type":"Line"},{"attributes":{},"id":"4331","type":"Selection"},{"attributes":{},"id":"4332","type":"UnionRenderers"},{"attributes":{},"id":"4188","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"4363"},"glyph":{"id":"4364"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4365"},"selection_glyph":null,"view":{"id":"4367"}},"id":"4366","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4205","type":"Scatter"},{"attributes":{},"id":"4222","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4364","type":"Line"},{"attributes":{"axis":{"id":"4179"},"ticker":null},"id":"4182","type":"Grid"},{"attributes":{},"id":"4461","type":"Selection"},{"attributes":{"axis":{"id":"4183"},"dimension":1,"ticker":null},"id":"4186","type":"Grid"},{"attributes":{},"id":"4223","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4206","type":"Scatter"},{"attributes":{"axis_label":"F1","formatter":{"id":"4217"},"ticker":{"id":"4184"}},"id":"4183","type":"LinearAxis"},{"attributes":{"label":{"value":"Block Size=32"},"renderers":[{"id":"4336"}]},"id":"4362","type":"LegendItem"},{"attributes":{},"id":"4462","type":"UnionRenderers"},{"attributes":{"end":90.75,"start":85},"id":"4202","type":"Range1d"},{"attributes":{},"id":"4360","type":"Selection"},{"attributes":{"source":{"id":"4209"}},"id":"4213","type":"CDSView"},{"attributes":{},"id":"4361","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4501"},"glyph":{"id":"4502"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4503"},"selection_glyph":null,"view":{"id":"4505"}},"id":"4504","type":"GlyphRenderer"},{"attributes":{},"id":"4184","type":"BasicTicker"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4502","type":"Line"},{"attributes":{"label":{"value":"Block Size=8"},"renderers":[{"id":"4466"}]},"id":"4500","type":"LegendItem"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"4251","type":"Label"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4392"},"selection_policy":{"id":"4393"}},"id":"4363","type":"ColumnDataSource"},{"attributes":{},"id":"4498","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4233","type":"Line"},{"attributes":{"data":{"x":[0.5761748890817902,0.3578679591049382,0.23011007426697527],"y":[88.34112193061533,87.65780769915727,86.57822332702295]},"selected":{"id":"4425"},"selection_policy":{"id":"4426"}},"id":"4394","type":"ColumnDataSource"},{"attributes":{},"id":"4180","type":"BasicTicker"},{"attributes":{"data_source":{"id":"4232"},"glyph":{"id":"4233"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4234"},"selection_glyph":null,"view":{"id":"4236"}},"id":"4235","type":"GlyphRenderer"},{"attributes":{"axis_label":"Density","formatter":{"id":"4215"},"ticker":{"id":"4180"}},"id":"4179","type":"LinearAxis"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4395","type":"Line"},{"attributes":{"source":{"id":"4394"}},"id":"4398","type":"CDSView"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"4276"},"selection_policy":{"id":"4277"}},"id":"4252","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4396","type":"Line"},{"attributes":{},"id":"4499","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4229","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4249"},"selection_policy":{"id":"4250"}},"id":"4232","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4365","type":"Line"},{"attributes":{"source":{"id":"4227"}},"id":"4231","type":"CDSView"},{"attributes":{"source":{"id":"4363"}},"id":"4367","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4465","type":"Line"},{"attributes":{"data_source":{"id":"4227"},"glyph":{"id":"4228"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4229"},"selection_glyph":null,"view":{"id":"4231"}},"id":"4230","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4280"},"glyph":{"id":"4281"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4282"},"selection_glyph":null,"view":{"id":"4284"}},"id":"4283","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.576706686137635,0.3551132767288775,0.22577770845389655,0.1314994906201774],"y":[88.58172107792693,88.21768668110452,87.37325813950282,85.93146728512978]},"selected":{"id":"4579"},"selection_policy":{"id":"4580"}},"id":"4540","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4193","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4228","type":"Scatter"},{"attributes":{"data_source":{"id":"4463"},"glyph":{"id":"4464"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4465"},"selection_glyph":null,"view":{"id":"4467"}},"id":"4466","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4253","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4538"},"selection_policy":{"id":"4539"}},"id":"4501","type":"ColumnDataSource"},{"attributes":{},"id":"4392","type":"Selection"},{"attributes":{"data_source":{"id":"4540"},"glyph":{"id":"4541"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4542"},"selection_glyph":null,"view":{"id":"4544"}},"id":"4543","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"4179"}],"center":[{"id":"4182"},{"id":"4186"},{"id":"4203"},{"id":"4224"},{"id":"4226"},{"id":"4251"}],"left":[{"id":"4183"}],"plot_width":800,"renderers":[{"id":"4207"},{"id":"4212"},{"id":"4230"},{"id":"4235"},{"id":"4255"},{"id":"4260"},{"id":"4283"},{"id":"4309"},{"id":"4336"},{"id":"4366"},{"id":"4397"},{"id":"4431"},{"id":"4466"},{"id":"4504"},{"id":"4543"},{"id":"4585"}],"title":null,"toolbar":{"id":"4194"},"x_range":{"id":"4201"},"x_scale":{"id":"4175"},"y_range":{"id":"4202"},"y_scale":{"id":"4177"}},"id":"4169","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4234","type":"Line"},{"attributes":{"source":{"id":"4232"}},"id":"4236","type":"CDSView"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4541","type":"Line"},{"attributes":{"source":{"id":"4540"}},"id":"4544","type":"CDSView"},{"attributes":{},"id":"4393","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4503","type":"Line"},{"attributes":{"source":{"id":"4501"}},"id":"4505","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4542","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"4220"},"selection_policy":{"id":"4221"}},"id":"4204","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4428"},"glyph":{"id":"4429"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4430"},"selection_glyph":null,"view":{"id":"4432"}},"id":"4431","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4429","type":"Line"},{"attributes":{},"id":"4538","type":"Selection"},{"attributes":{},"id":"4247","type":"Selection"},{"attributes":{"label":{"value":"Block Size=16"},"renderers":[{"id":"4397"}]},"id":"4427","type":"LegendItem"},{"attributes":{},"id":"4539","type":"UnionRenderers"},{"attributes":{},"id":"4248","type":"UnionRenderers"},{"attributes":{},"id":"4425","type":"Selection"},{"attributes":{},"id":"4426","type":"UnionRenderers"},{"attributes":{},"id":"4220","type":"Selection"},{"attributes":{},"id":"4249","type":"Selection"},{"attributes":{},"id":"4221","type":"UnionRenderers"},{"attributes":{},"id":"4250","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4209"},"glyph":{"id":"4210"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4211"},"selection_glyph":null,"view":{"id":"4213"}},"id":"4212","type":"GlyphRenderer"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"4226","type":"Label"},{"attributes":{"data":{"x":[0.5704405984760802,0.353609061535494,0.22401861496913578,0.13401210455246915],"y":[88.3744311515211,88.02730364897265,86.84949475139184,85.16652519097626]},"selected":{"id":"4498"},"selection_policy":{"id":"4499"}},"id":"4463","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4204"}},"id":"4208","type":"CDSView"},{"attributes":{},"id":"4217","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Block Size=4"},"renderers":[{"id":"4543"}]},"id":"4581","type":"LegendItem"},{"attributes":{"data_source":{"id":"4204"},"glyph":{"id":"4205"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4206"},"selection_glyph":null,"view":{"id":"4208"}},"id":"4207","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4222"},"selection_policy":{"id":"4223"}},"id":"4209","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"4461"},"selection_policy":{"id":"4462"}},"id":"4428","type":"ColumnDataSource"},{"attributes":{},"id":"4191","type":"ResetTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4210","type":"Line"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4464","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"4247"},"selection_policy":{"id":"4248"}},"id":"4227","type":"ColumnDataSource"},{"attributes":{},"id":"4215","type":"BasicTickFormatter"},{"attributes":{},"id":"4579","type":"Selection"},{"attributes":{"end":0.8},"id":"4201","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4430","type":"Line"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"4212"},{"id":"4235"},{"id":"4260"},{"id":"4309"},{"id":"4366"},{"id":"4431"},{"id":"4504"},{"id":"4585"}]},"id":"4225","type":"LegendItem"},{"attributes":{"source":{"id":"4463"}},"id":"4467","type":"CDSView"},{"attributes":{"source":{"id":"4428"}},"id":"4432","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4211","type":"Line"}],"root_ids":["4169"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"4086478d-d55f-42e3-8812-47432bd4650a","root_ids":["4169"],"roots":{"4169":"7c298c26-f9a7-452a-b3a9-86e6c05e0650"}}];
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