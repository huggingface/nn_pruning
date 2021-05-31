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
    
      
      
    
      var element = document.getElementById("bb76c1c2-6811-4e38-89dc-941526541d4e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bb76c1c2-6811-4e38-89dc-941526541d4e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"72191666-16f0-478c-8ce8-0753c51a676d":{"roots":{"references":[{"attributes":{},"id":"2540","type":"HelpTool"},{"attributes":{"axis":{"id":"2527"},"ticker":null},"id":"2530","type":"Grid"},{"attributes":{},"id":"2535","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2576","type":"Scatter"},{"attributes":{"source":{"id":"2574"}},"id":"2578","type":"CDSView"},{"attributes":{},"id":"2568","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2580","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2558","type":"Line"},{"attributes":{},"id":"2521","type":"DataRange1d"},{"attributes":{},"id":"2565","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2579"},"glyph":{"id":"2580"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2581"},"selection_glyph":null,"view":{"id":"2583"}},"id":"2582","type":"GlyphRenderer"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":91.3},"id":"2550","type":"Label"},{"attributes":{"data_source":{"id":"2574"},"glyph":{"id":"2575"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2576"},"selection_glyph":null,"view":{"id":"2578"}},"id":"2577","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2553","type":"Scatter"},{"attributes":{"data":{"x":[0,null],"y":[92.66,92.66]},"selected":{"id":"2597"},"selection_policy":{"id":"2596"}},"id":"2579","type":"ColumnDataSource"},{"attributes":{"click_policy":"hide","items":[{"id":"2572"}],"location":"top_left"},"id":"2571","type":"Legend"},{"attributes":{"data":{"x":[0.5],"y":[93.0]},"selected":{"id":"2595"},"selection_policy":{"id":"2594"}},"id":"2574","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2575","type":"Scatter"},{"attributes":{"label":{"value":"BERT-base (Accuracy = 92.66)"},"renderers":[{"id":"2559"},{"id":"2582"}]},"id":"2572","type":"LegendItem"},{"attributes":{"source":{"id":"2551"}},"id":"2555","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2581","type":"Line"},{"attributes":{"data_source":{"id":"2551"},"glyph":{"id":"2552"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2553"},"selection_glyph":null,"view":{"id":"2555"}},"id":"2554","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2579"}},"id":"2583","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":0.5,"y":93.0},"id":"2573","type":"Label"},{"attributes":{},"id":"2563","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2556"}},"id":"2560","type":"CDSView"},{"attributes":{},"id":"2523","type":"LinearScale"},{"attributes":{},"id":"2595","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2535"},{"id":"2536"},{"id":"2537"},{"id":"2538"},{"id":"2539"},{"id":"2540"}]},"id":"2542","type":"Toolbar"},{"attributes":{},"id":"2567","type":"UnionRenderers"},{"attributes":{},"id":"2538","type":"SaveTool"},{"attributes":{},"id":"2569","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,null],"y":[92.66,92.66]},"selected":{"id":"2570"},"selection_policy":{"id":"2569"}},"id":"2556","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[91.3]},"selected":{"id":"2568"},"selection_policy":{"id":"2567"}},"id":"2551","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2552","type":"Scatter"},{"attributes":{},"id":"2594","type":"UnionRenderers"},{"attributes":{},"id":"2525","type":"LinearScale"},{"attributes":{"axis":{"id":"2531"},"dimension":1,"ticker":null},"id":"2534","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2541","type":"BoxAnnotation"},{"attributes":{},"id":"2536","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"2541"}},"id":"2537","type":"BoxZoomTool"},{"attributes":{"axis_label":"Accuracy","formatter":{"id":"2563"},"ticker":{"id":"2532"}},"id":"2531","type":"LinearAxis"},{"attributes":{"axis_label":"Density","formatter":{"id":"2565"},"ticker":{"id":"2528"}},"id":"2527","type":"LinearAxis"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2557","type":"Line"},{"attributes":{},"id":"2532","type":"BasicTicker"},{"attributes":{},"id":"2570","type":"Selection"},{"attributes":{},"id":"2596","type":"UnionRenderers"},{"attributes":{},"id":"2597","type":"Selection"},{"attributes":{},"id":"2528","type":"BasicTicker"},{"attributes":{"end":null,"start":null},"id":"2549","type":"Range1d"},{"attributes":{"data_source":{"id":"2556"},"glyph":{"id":"2557"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2558"},"selection_glyph":null,"view":{"id":"2560"}},"id":"2559","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2527"}],"center":[{"id":"2530"},{"id":"2534"},{"id":"2550"},{"id":"2571"},{"id":"2573"}],"left":[{"id":"2531"}],"plot_width":800,"renderers":[{"id":"2554"},{"id":"2559"},{"id":"2577"},{"id":"2582"}],"title":null,"toolbar":{"id":"2542"},"x_range":{"id":"2549"},"x_scale":{"id":"2523"},"y_range":{"id":"2521"},"y_scale":{"id":"2525"}},"id":"2517","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2539","type":"ResetTool"}],"root_ids":["2517"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"72191666-16f0-478c-8ce8-0753c51a676d","root_ids":["2517"],"roots":{"2517":"bb76c1c2-6811-4e38-89dc-941526541d4e"}}];
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