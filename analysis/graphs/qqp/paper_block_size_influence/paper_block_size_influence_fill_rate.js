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
    
      
      
    
      var element = document.getElementById("e2a29d57-969b-4ede-9dab-48707faa1f8b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e2a29d57-969b-4ede-9dab-48707faa1f8b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"37d27b44-cc9d-4ece-b1e0-4b29441283f4":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2604","type":"Line"},{"attributes":{"end":null,"start":null},"id":"2561","type":"Range1d"},{"attributes":{"data":{"x":[0.5],"y":[88.0]},"selected":{"id":"2578"},"selection_policy":{"id":"2579"}},"id":"2563","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2605","type":"Line"},{"attributes":{},"id":"2551","type":"ResetTool"},{"attributes":{"source":{"id":"2603"}},"id":"2607","type":"CDSView"},{"attributes":{"overlay":{"id":"2553"}},"id":"2549","type":"BoxZoomTool"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2586","type":"Line"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.12)"},"renderers":[{"id":"2571"},{"id":"2606"}]},"id":"2584","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2565","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2587","type":"Line"},{"attributes":{},"id":"2619","type":"Selection"},{"attributes":{"source":{"id":"2585"}},"id":"2589","type":"CDSView"},{"attributes":{},"id":"2552","type":"HelpTool"},{"attributes":{},"id":"2620","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2603"},"glyph":{"id":"2604"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2605"},"selection_glyph":null,"view":{"id":"2607"}},"id":"2606","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"2588"}]},"id":"2602","type":"LegendItem"},{"attributes":{"text":"TinyBERT","x":0.5,"y":88.0},"id":"2562","type":"Label"},{"attributes":{"axis":{"id":"2543"},"dimension":1,"ticker":null},"id":"2546","type":"Grid"},{"attributes":{},"id":"2577","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2569","type":"Line"},{"attributes":{},"id":"2578","type":"Selection"},{"attributes":{},"id":"2579","type":"UnionRenderers"},{"attributes":{},"id":"2575","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2547"},{"id":"2548"},{"id":"2549"},{"id":"2550"},{"id":"2551"},{"id":"2552"}]},"id":"2554","type":"Toolbar"},{"attributes":{},"id":"2540","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2570","type":"Line"},{"attributes":{},"id":"2599","type":"Selection"},{"attributes":{"axis_label":"Density","formatter":{"id":"2575"},"ticker":{"id":"2540"}},"id":"2539","type":"LinearAxis"},{"attributes":{"click_policy":"hide","items":[{"id":"2584"},{"id":"2602"}],"location":"top_left"},"id":"2583","type":"Legend"},{"attributes":{},"id":"2548","type":"WheelZoomTool"},{"attributes":{},"id":"2600","type":"UnionRenderers"},{"attributes":{},"id":"2535","type":"LinearScale"},{"attributes":{},"id":"2533","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2553","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"2539"}],"center":[{"id":"2542"},{"id":"2546"},{"id":"2562"},{"id":"2583"}],"left":[{"id":"2543"}],"plot_width":800,"renderers":[{"id":"2566"},{"id":"2571"},{"id":"2588"},{"id":"2606"}],"title":null,"toolbar":{"id":"2554"},"x_range":{"id":"2561"},"x_scale":{"id":"2535"},"y_range":{"id":"2533"},"y_scale":{"id":"2537"}},"id":"2529","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2544","type":"BasicTicker"},{"attributes":{},"id":"2547","type":"PanTool"},{"attributes":{"axis_label":"F1","formatter":{"id":"2577"},"ticker":{"id":"2544"}},"id":"2543","type":"LinearAxis"},{"attributes":{},"id":"2537","type":"LinearScale"},{"attributes":{},"id":"2580","type":"Selection"},{"attributes":{"data":{"x":[0.5411396866835819,0.189394009936974,0.140400543820956,0.109227130042228,0.07148142159828309,0.0514173835720133,0.0392661812553424,0.0315456693725093,0.026190065697198398],"y":[88.5798737068386,87.5633240513973,87.5020913501756,87.1691792294807,86.75933679450671,86.3724377378647,85.94077873630211,85.6267687697686,85.4114217569895]},"selected":{"id":"2599"},"selection_policy":{"id":"2600"}},"id":"2585","type":"ColumnDataSource"},{"attributes":{},"id":"2581","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2564","type":"Scatter"},{"attributes":{"data_source":{"id":"2563"},"glyph":{"id":"2564"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2565"},"selection_glyph":null,"view":{"id":"2567"}},"id":"2566","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,null],"y":[88.12,88.12]},"selected":{"id":"2580"},"selection_policy":{"id":"2581"}},"id":"2568","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2585"},"glyph":{"id":"2586"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2587"},"selection_glyph":null,"view":{"id":"2589"}},"id":"2588","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"2539"},"ticker":null},"id":"2542","type":"Grid"},{"attributes":{"source":{"id":"2568"}},"id":"2572","type":"CDSView"},{"attributes":{"source":{"id":"2563"}},"id":"2567","type":"CDSView"},{"attributes":{},"id":"2550","type":"SaveTool"},{"attributes":{"data_source":{"id":"2568"},"glyph":{"id":"2569"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2570"},"selection_glyph":null,"view":{"id":"2572"}},"id":"2571","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,null],"y":[88.12,88.12]},"selected":{"id":"2619"},"selection_policy":{"id":"2620"}},"id":"2603","type":"ColumnDataSource"}],"root_ids":["2529"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"37d27b44-cc9d-4ece-b1e0-4b29441283f4","root_ids":["2529"],"roots":{"2529":"e2a29d57-969b-4ede-9dab-48707faa1f8b"}}];
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