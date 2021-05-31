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
    
      
      
    
      var element = document.getElementById("e9afc30d-c1af-450f-b479-ea38bc55d499");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e9afc30d-c1af-450f-b479-ea38bc55d499' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c9e07adb-7589-429c-85a3-a7daf54991bf":{"roots":{"references":[{"attributes":{"end":0.75},"id":"2735","type":"Range1d"},{"attributes":{},"id":"2721","type":"PanTool"},{"attributes":{"below":[{"id":"2713"}],"center":[{"id":"2716"},{"id":"2720"},{"id":"2737"},{"id":"2758"},{"id":"2760"}],"left":[{"id":"2717"}],"plot_width":800,"renderers":[{"id":"2741"},{"id":"2746"},{"id":"2764"},{"id":"2769"}],"title":null,"toolbar":{"id":"2728"},"x_range":{"id":"2735"},"x_scale":{"id":"2709"},"y_range":{"id":"2736"},"y_scale":{"id":"2711"}},"id":"2703","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2709","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2756"},"selection_policy":{"id":"2757"}},"id":"2743","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2744","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2767","type":"Line"},{"attributes":{"axis":{"id":"2713"},"ticker":null},"id":"2716","type":"Grid"},{"attributes":{"data_source":{"id":"2738"},"glyph":{"id":"2739"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2740"},"selection_glyph":null,"view":{"id":"2742"}},"id":"2741","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2739","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2768","type":"Line"},{"attributes":{"source":{"id":"2766"}},"id":"2770","type":"CDSView"},{"attributes":{"axis_label":"Density","formatter":{"id":"2752"},"ticker":{"id":"2714"}},"id":"2713","type":"LinearAxis"},{"attributes":{},"id":"2714","type":"BasicTicker"},{"attributes":{"click_policy":"hide","items":[{"id":"2759"}],"location":"bottom_right"},"id":"2758","type":"Legend"},{"attributes":{"source":{"id":"2743"}},"id":"2747","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"2760","type":"Label"},{"attributes":{"source":{"id":"2738"}},"id":"2742","type":"CDSView"},{"attributes":{"source":{"id":"2761"}},"id":"2765","type":"CDSView"},{"attributes":{},"id":"2725","type":"ResetTool"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"2781"},"selection_policy":{"id":"2782"}},"id":"2761","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2743"},"glyph":{"id":"2744"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2745"},"selection_glyph":null,"view":{"id":"2747"}},"id":"2746","type":"GlyphRenderer"},{"attributes":{"axis_label":"Matched","formatter":{"id":"2750"},"ticker":{"id":"2718"}},"id":"2717","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2740","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2745","type":"Line"},{"attributes":{},"id":"2752","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2727","type":"BoxAnnotation"},{"attributes":{},"id":"2757","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2721"},{"id":"2722"},{"id":"2723"},{"id":"2724"},{"id":"2725"},{"id":"2726"}]},"id":"2728","type":"Toolbar"},{"attributes":{"end":86,"start":79},"id":"2736","type":"Range1d"},{"attributes":{},"id":"2722","type":"WheelZoomTool"},{"attributes":{},"id":"2781","type":"Selection"},{"attributes":{"axis":{"id":"2717"},"dimension":1,"ticker":null},"id":"2720","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2762","type":"Scatter"},{"attributes":{},"id":"2726","type":"HelpTool"},{"attributes":{},"id":"2782","type":"UnionRenderers"},{"attributes":{},"id":"2754","type":"Selection"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"2737","type":"Label"},{"attributes":{},"id":"2718","type":"BasicTicker"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2783"},"selection_policy":{"id":"2784"}},"id":"2766","type":"ColumnDataSource"},{"attributes":{},"id":"2755","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2761"},"glyph":{"id":"2762"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2763"},"selection_glyph":null,"view":{"id":"2765"}},"id":"2764","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2727"}},"id":"2723","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2763","type":"Scatter"},{"attributes":{},"id":"2750","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2766"},"glyph":{"id":"2767"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2768"},"selection_glyph":null,"view":{"id":"2770"}},"id":"2769","type":"GlyphRenderer"},{"attributes":{},"id":"2783","type":"Selection"},{"attributes":{},"id":"2784","type":"UnionRenderers"},{"attributes":{},"id":"2724","type":"SaveTool"},{"attributes":{},"id":"2756","type":"Selection"},{"attributes":{"label":{"value":"BERT-base (Matched = 84.6)"},"renderers":[{"id":"2746"},{"id":"2769"}]},"id":"2759","type":"LegendItem"},{"attributes":{},"id":"2711","type":"LinearScale"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"2754"},"selection_policy":{"id":"2755"}},"id":"2738","type":"ColumnDataSource"}],"root_ids":["2703"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"c9e07adb-7589-429c-85a3-a7daf54991bf","root_ids":["2703"],"roots":{"2703":"e9afc30d-c1af-450f-b479-ea38bc55d499"}}];
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