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
    
      
      
    
      var element = document.getElementById("6b166459-a8c2-4ef3-9a9d-298e489eb656");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6b166459-a8c2-4ef3-9a9d-298e489eb656' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e415f034-ac5f-4c8b-a175-7502dbde9d99":{"roots":{"references":[{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"24582","type":"Line"},{"attributes":{"below":[{"id":"24152"}],"center":[{"id":"24155"},{"id":"24159"},{"id":"24175"},{"id":"24196"},{"id":"24234"},{"id":"24315"}],"left":[{"id":"24156"}],"plot_width":800,"renderers":[{"id":"24179"},{"id":"24184"},{"id":"24201"},{"id":"24218"},{"id":"24238"},{"id":"24243"},{"id":"24266"},{"id":"24291"},{"id":"24319"},{"id":"24324"},{"id":"24355"},{"id":"24388"},{"id":"24423"},{"id":"24461"},{"id":"24500"},{"id":"24541"},{"id":"24584"},{"id":"24630"},{"id":"24677"},{"id":"24726"}],"title":{"id":"24142"},"toolbar":{"id":"24167"},"x_range":{"id":"24174"},"x_scale":{"id":"24148"},"y_range":{"id":"24146"},"y_scale":{"id":"24150"}},"id":"24141","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"24579","type":"Selection"},{"attributes":{},"id":"24194","type":"Selection"},{"attributes":{},"id":"24580","type":"UnionRenderers"},{"attributes":{},"id":"24195","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"24236","type":"Scatter"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"24192"},"selection_policy":{"id":"24193"}},"id":"24176","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24628","type":"Line"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"24142","type":"Title"},{"attributes":{"source":{"id":"24581"}},"id":"24585","type":"CDSView"},{"attributes":{"data_source":{"id":"24627"},"glyph":{"id":"24628"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24629"},"selection_glyph":null,"view":{"id":"24631"}},"id":"24630","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"24177","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"24178","type":"Scatter"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":90.3},"id":"24315","type":"Label"},{"attributes":{"label":{"value":"BERT-large teacher"},"renderers":[{"id":"24584"}]},"id":"24626","type":"LegendItem"},{"attributes":{"data_source":{"id":"24181"},"glyph":{"id":"24182"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24183"},"selection_glyph":null,"view":{"id":"24185"}},"id":"24184","type":"GlyphRenderer"},{"attributes":{"text":"TinyBERT","x":2.0,"y":87.5},"id":"24234","type":"Label"},{"attributes":{"source":{"id":"24176"}},"id":"24180","type":"CDSView"},{"attributes":{"data_source":{"id":"24176"},"glyph":{"id":"24177"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24178"},"selection_glyph":null,"view":{"id":"24180"}},"id":"24179","type":"GlyphRenderer"},{"attributes":{},"id":"24624","type":"Selection"},{"attributes":{},"id":"24213","type":"Selection"},{"attributes":{},"id":"24625","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"24194"},"selection_policy":{"id":"24195"}},"id":"24181","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24182","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"24197"},{"id":"24457"},{"id":"24626"}]},"id":"24196","type":"Legend"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"24184"},{"id":"24201"},{"id":"24218"},{"id":"24243"},{"id":"24266"},{"id":"24291"},{"id":"24324"},{"id":"24355"},{"id":"24388"},{"id":"24461"},{"id":"24500"},{"id":"24541"},{"id":"24630"},{"id":"24677"},{"id":"24726"}]},"id":"24197","type":"LegendItem"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"24213"},"selection_policy":{"id":"24214"}},"id":"24198","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24183","type":"Line"},{"attributes":{},"id":"24214","type":"UnionRenderers"},{"attributes":{"source":{"id":"24181"}},"id":"24185","type":"CDSView"},{"attributes":{"data_source":{"id":"24215"},"glyph":{"id":"24216"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24217"},"selection_glyph":null,"view":{"id":"24219"}},"id":"24218","type":"GlyphRenderer"},{"attributes":{},"id":"24153","type":"BasicTicker"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"24672"},"selection_policy":{"id":"24673"}},"id":"24627","type":"ColumnDataSource"},{"attributes":{},"id":"24187","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24675","type":"Line"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"24772"},"selection_policy":{"id":"24773"}},"id":"24723","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24216","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24241","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24629","type":"Line"},{"attributes":{"source":{"id":"24627"}},"id":"24631","type":"CDSView"},{"attributes":{"data_source":{"id":"24674"},"glyph":{"id":"24675"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24676"},"selection_glyph":null,"view":{"id":"24678"}},"id":"24677","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24217","type":"Line"},{"attributes":{"source":{"id":"24215"}},"id":"24219","type":"CDSView"},{"attributes":{},"id":"24189","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"24261"},"selection_policy":{"id":"24262"}},"id":"24240","type":"ColumnDataSource"},{"attributes":{},"id":"24672","type":"Selection"},{"attributes":{},"id":"24232","type":"Selection"},{"attributes":{},"id":"24673","type":"UnionRenderers"},{"attributes":{},"id":"24233","type":"UnionRenderers"},{"attributes":{"axis":{"id":"24152"},"ticker":null},"id":"24155","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"24237","type":"Scatter"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"24721"},"selection_policy":{"id":"24722"}},"id":"24674","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"24259"},"selection_policy":{"id":"24260"}},"id":"24235","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"24317","type":"Scatter"},{"attributes":{"data_source":{"id":"24240"},"glyph":{"id":"24241"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24242"},"selection_glyph":null,"view":{"id":"24244"}},"id":"24243","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"24420"},"glyph":{"id":"24421"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24422"},"selection_glyph":null,"view":{"id":"24424"}},"id":"24423","type":"GlyphRenderer"},{"attributes":{"source":{"id":"24235"}},"id":"24239","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24676","type":"Line"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"24187"},"ticker":{"id":"24153"}},"id":"24152","type":"LinearAxis"},{"attributes":{"data_source":{"id":"24235"},"glyph":{"id":"24236"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24237"},"selection_glyph":null,"view":{"id":"24239"}},"id":"24238","type":"GlyphRenderer"},{"attributes":{"source":{"id":"24674"}},"id":"24678","type":"CDSView"},{"attributes":{"data_source":{"id":"24723"},"glyph":{"id":"24724"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24725"},"selection_glyph":null,"view":{"id":"24727"}},"id":"24726","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.78125],"y":[90.3]},"selected":{"id":"24348"},"selection_policy":{"id":"24349"}},"id":"24316","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"24286"},"selection_policy":{"id":"24287"}},"id":"24263","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"24263"},"glyph":{"id":"24264"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24265"},"selection_glyph":null,"view":{"id":"24267"}},"id":"24266","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24242","type":"Line"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"24232"},"selection_policy":{"id":"24233"}},"id":"24215","type":"ColumnDataSource"},{"attributes":{},"id":"24721","type":"Selection"},{"attributes":{"source":{"id":"24240"}},"id":"24244","type":"CDSView"},{"attributes":{},"id":"24193","type":"UnionRenderers"},{"attributes":{},"id":"24722","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"24166","type":"BoxAnnotation"},{"attributes":{},"id":"24192","type":"Selection"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"24350"},"selection_policy":{"id":"24351"}},"id":"24321","type":"ColumnDataSource"},{"attributes":{"end":4,"start":0.75},"id":"24174","type":"Range1d"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24322","type":"Line"},{"attributes":{"data_source":{"id":"24352"},"glyph":{"id":"24353"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24354"},"selection_glyph":null,"view":{"id":"24356"}},"id":"24355","type":"GlyphRenderer"},{"attributes":{},"id":"24150","type":"LinearScale"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24386","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24323","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24459","type":"Line"},{"attributes":{"axis":{"id":"24156"},"dimension":1,"ticker":null},"id":"24159","type":"Grid"},{"attributes":{"source":{"id":"24321"}},"id":"24325","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24724","type":"Line"},{"attributes":{"text":"DistilBERT","x":1.63,"y":86.9},"id":"24175","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"24422","type":"Line"},{"attributes":{},"id":"24259","type":"Selection"},{"attributes":{"data_source":{"id":"24458"},"glyph":{"id":"24459"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24460"},"selection_glyph":null,"view":{"id":"24462"}},"id":"24461","type":"GlyphRenderer"},{"attributes":{},"id":"24260","type":"UnionRenderers"},{"attributes":{"label":{"value":"BERT-base teacher"},"renderers":[{"id":"24423"}]},"id":"24457","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24725","type":"Line"},{"attributes":{"source":{"id":"24723"}},"id":"24727","type":"CDSView"},{"attributes":{},"id":"24160","type":"PanTool"},{"attributes":{},"id":"24455","type":"Selection"},{"attributes":{},"id":"24261","type":"Selection"},{"attributes":{},"id":"24456","type":"UnionRenderers"},{"attributes":{},"id":"24262","type":"UnionRenderers"},{"attributes":{},"id":"24348","type":"Selection"},{"attributes":{},"id":"24161","type":"WheelZoomTool"},{"attributes":{},"id":"24349","type":"UnionRenderers"},{"attributes":{},"id":"24772","type":"Selection"},{"attributes":{},"id":"24773","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24160"},{"id":"24161"},{"id":"24162"},{"id":"24163"},{"id":"24164"},{"id":"24165"}]},"id":"24167","type":"Toolbar"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24199","type":"Line"},{"attributes":{"data":{"x":[1.5606414607482133,1.8333442967227587,2.075387764969063,2.306354828560857,2.363378950512201,2.36451559845159,2.6186173775098402],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,88.25975710073095,88.20838283474134,87.15966661496869]},"selected":{"id":"24624"},"selection_policy":{"id":"24625"}},"id":"24581","type":"ColumnDataSource"},{"attributes":{},"id":"24419","type":"UnionRenderers"},{"attributes":{},"id":"24350","type":"Selection"},{"attributes":{},"id":"24351","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"24495"},"selection_policy":{"id":"24496"}},"id":"24458","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"24581"},"glyph":{"id":"24582"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24583"},"selection_glyph":null,"view":{"id":"24585"}},"id":"24584","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24498","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24539","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24264","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24289","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24460","type":"Line"},{"attributes":{"source":{"id":"24458"}},"id":"24462","type":"CDSView"},{"attributes":{"data_source":{"id":"24288"},"glyph":{"id":"24289"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24290"},"selection_glyph":null,"view":{"id":"24292"}},"id":"24291","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"24497"},"glyph":{"id":"24498"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24499"},"selection_glyph":null,"view":{"id":"24501"}},"id":"24500","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24265","type":"Line"},{"attributes":{"source":{"id":"24263"}},"id":"24267","type":"CDSView"},{"attributes":{},"id":"24163","type":"SaveTool"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"24383"},"selection_policy":{"id":"24384"}},"id":"24352","type":"ColumnDataSource"},{"attributes":{"source":{"id":"24198"}},"id":"24202","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24353","type":"Line"},{"attributes":{},"id":"24495","type":"Selection"},{"attributes":{},"id":"24286","type":"Selection"},{"attributes":{},"id":"24496","type":"UnionRenderers"},{"attributes":{},"id":"24287","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"24166"}},"id":"24162","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24354","type":"Line"},{"attributes":{"source":{"id":"24352"}},"id":"24356","type":"CDSView"},{"attributes":{"data_source":{"id":"24198"},"glyph":{"id":"24199"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24200"},"selection_glyph":null,"view":{"id":"24202"}},"id":"24201","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"24385"},"glyph":{"id":"24386"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24387"},"selection_glyph":null,"view":{"id":"24389"}},"id":"24388","type":"GlyphRenderer"},{"attributes":{},"id":"24146","type":"DataRange1d"},{"attributes":{},"id":"24148","type":"LinearScale"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"24536"},"selection_policy":{"id":"24537"}},"id":"24497","type":"ColumnDataSource"},{"attributes":{},"id":"24383","type":"Selection"},{"attributes":{},"id":"24164","type":"ResetTool"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"24313"},"selection_policy":{"id":"24314"}},"id":"24288","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24540","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24200","type":"Line"},{"attributes":{"source":{"id":"24316"}},"id":"24320","type":"CDSView"},{"attributes":{},"id":"24384","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24499","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24290","type":"Line"},{"attributes":{"source":{"id":"24497"}},"id":"24501","type":"CDSView"},{"attributes":{"data_source":{"id":"24538"},"glyph":{"id":"24539"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24540"},"selection_glyph":null,"view":{"id":"24542"}},"id":"24541","type":"GlyphRenderer"},{"attributes":{"source":{"id":"24288"}},"id":"24292","type":"CDSView"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"24455"},"selection_policy":{"id":"24456"}},"id":"24420","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"24418"},"selection_policy":{"id":"24419"}},"id":"24385","type":"ColumnDataSource"},{"attributes":{"source":{"id":"24420"}},"id":"24424","type":"CDSView"},{"attributes":{},"id":"24536","type":"Selection"},{"attributes":{},"id":"24165","type":"HelpTool"},{"attributes":{},"id":"24313","type":"Selection"},{"attributes":{},"id":"24537","type":"UnionRenderers"},{"attributes":{},"id":"24314","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"24387","type":"Line"},{"attributes":{"source":{"id":"24385"}},"id":"24389","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"24421","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"24583","type":"Line"},{"attributes":{},"id":"24157","type":"BasicTicker"},{"attributes":{"axis_label":"F1","formatter":{"id":"24189"},"ticker":{"id":"24157"}},"id":"24156","type":"LinearAxis"},{"attributes":{"source":{"id":"24538"}},"id":"24542","type":"CDSView"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"24579"},"selection_policy":{"id":"24580"}},"id":"24538","type":"ColumnDataSource"},{"attributes":{},"id":"24418","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"24318","type":"Scatter"},{"attributes":{"data_source":{"id":"24321"},"glyph":{"id":"24322"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24323"},"selection_glyph":null,"view":{"id":"24325"}},"id":"24324","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"24316"},"glyph":{"id":"24317"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24318"},"selection_glyph":null,"view":{"id":"24320"}},"id":"24319","type":"GlyphRenderer"}],"root_ids":["24141"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e415f034-ac5f-4c8b-a175-7502dbde9d99","root_ids":["24141"],"roots":{"24141":"6b166459-a8c2-4ef3-9a9d-298e489eb656"}}];
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