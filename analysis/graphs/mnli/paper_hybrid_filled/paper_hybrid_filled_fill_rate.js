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
    
      
      
    
      var element = document.getElementById("173cc00a-dbc9-42c5-88d4-befaba082f9d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '173cc00a-dbc9-42c5-88d4-befaba082f9d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ab29df3f-d3dc-48c4-942e-4c102316956c":{"roots":{"references":[{"attributes":{},"id":"3547","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"3481"}]},"id":"3499","type":"LegendItem"},{"attributes":{},"id":"3546","type":"Selection"},{"attributes":{"source":{"id":"3454"}},"id":"3458","type":"CDSView"},{"attributes":{},"id":"3447","type":"Selection"},{"attributes":{},"id":"3475","type":"UnionRenderers"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3479","type":"Line"},{"attributes":{},"id":"3450","type":"UnionRenderers"},{"attributes":{},"id":"3522","type":"UnionRenderers"},{"attributes":{},"id":"3448","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3480","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"3452"},{"id":"3499"},{"id":"3548"}],"location":"bottom_right"},"id":"3451","type":"Legend"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3437","type":"Line"},{"attributes":{},"id":"3474","type":"Selection"},{"attributes":{},"id":"3445","type":"BasicTickFormatter"},{"attributes":{"end":86,"start":79},"id":"3429","type":"Range1d"},{"attributes":{},"id":"3414","type":"PanTool"},{"attributes":{"axis":{"id":"3406"},"ticker":null},"id":"3409","type":"Grid"},{"attributes":{"end":0.75},"id":"3428","type":"Range1d"},{"attributes":{"overlay":{"id":"3420"}},"id":"3416","type":"BoxZoomTool"},{"attributes":{"source":{"id":"3459"}},"id":"3463","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3521"},"selection_policy":{"id":"3522"}},"id":"3500","type":"ColumnDataSource"},{"attributes":{},"id":"3402","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3525","type":"Line"},{"attributes":{},"id":"3407","type":"BasicTicker"},{"attributes":{},"id":"3498","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"3526"}]},"id":"3548","type":"LegendItem"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"3474"},"selection_policy":{"id":"3475"}},"id":"3454","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3549"}},"id":"3553","type":"CDSView"},{"attributes":{"text":"Matched against Density (BERT-base reference)"},"id":"3396","type":"Title"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3574"},"selection_policy":{"id":"3575"}},"id":"3549","type":"ColumnDataSource"},{"attributes":{},"id":"3443","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3500"},"glyph":{"id":"3501"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3502"},"selection_glyph":null,"view":{"id":"3504"}},"id":"3503","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3449"},"selection_policy":{"id":"3450"}},"id":"3436","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3431"}},"id":"3435","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"3453","type":"Label"},{"attributes":{"data_source":{"id":"3478"},"glyph":{"id":"3479"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3480"},"selection_glyph":null,"view":{"id":"3482"}},"id":"3481","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"3546"},"selection_policy":{"id":"3547"}},"id":"3523","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3551","type":"Line"},{"attributes":{"data_source":{"id":"3431"},"glyph":{"id":"3432"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3433"},"selection_glyph":null,"view":{"id":"3435"}},"id":"3434","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3436"},"glyph":{"id":"3437"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3438"},"selection_glyph":null,"view":{"id":"3440"}},"id":"3439","type":"GlyphRenderer"},{"attributes":{},"id":"3521","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3433","type":"Scatter"},{"attributes":{"data":{"x":[0.34212239583333326,0.2529296875,0.18093532986111116,0.12286603009259256],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"3497"},"selection_policy":{"id":"3498"}},"id":"3478","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3459"},"glyph":{"id":"3460"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3461"},"selection_glyph":null,"view":{"id":"3463"}},"id":"3462","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3523"},"glyph":{"id":"3524"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3525"},"selection_glyph":null,"view":{"id":"3527"}},"id":"3526","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3501","type":"Line"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"3430","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3461","type":"Line"},{"attributes":{},"id":"3575","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3414"},{"id":"3415"},{"id":"3416"},{"id":"3417"},{"id":"3418"},{"id":"3419"}]},"id":"3421","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3502","type":"Line"},{"attributes":{},"id":"3476","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3550","type":"Line"},{"attributes":{"below":[{"id":"3406"}],"center":[{"id":"3409"},{"id":"3413"},{"id":"3430"},{"id":"3451"},{"id":"3453"}],"left":[{"id":"3410"}],"plot_width":800,"renderers":[{"id":"3434"},{"id":"3439"},{"id":"3457"},{"id":"3462"},{"id":"3481"},{"id":"3503"},{"id":"3526"},{"id":"3552"}],"title":{"id":"3396"},"toolbar":{"id":"3421"},"x_range":{"id":"3428"},"x_scale":{"id":"3402"},"y_range":{"id":"3429"},"y_scale":{"id":"3404"}},"id":"3395","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3455","type":"Scatter"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3476"},"selection_policy":{"id":"3477"}},"id":"3459","type":"ColumnDataSource"},{"attributes":{"axis_label":"Density","formatter":{"id":"3445"},"ticker":{"id":"3407"}},"id":"3406","type":"LinearAxis"},{"attributes":{},"id":"3417","type":"SaveTool"},{"attributes":{"axis":{"id":"3410"},"dimension":1,"ticker":null},"id":"3413","type":"Grid"},{"attributes":{"source":{"id":"3500"}},"id":"3504","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3432","type":"Scatter"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"3447"},"selection_policy":{"id":"3448"}},"id":"3431","type":"ColumnDataSource"},{"attributes":{},"id":"3418","type":"ResetTool"},{"attributes":{},"id":"3419","type":"HelpTool"},{"attributes":{},"id":"3411","type":"BasicTicker"},{"attributes":{"axis_label":"Matched","formatter":{"id":"3443"},"ticker":{"id":"3411"}},"id":"3410","type":"LinearAxis"},{"attributes":{},"id":"3497","type":"Selection"},{"attributes":{},"id":"3477","type":"UnionRenderers"},{"attributes":{},"id":"3404","type":"LinearScale"},{"attributes":{},"id":"3574","type":"Selection"},{"attributes":{"source":{"id":"3523"}},"id":"3527","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3524","type":"Line"},{"attributes":{},"id":"3415","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3420","type":"BoxAnnotation"},{"attributes":{"label":{"value":"BERT-base (Matched = 84.6)"},"renderers":[{"id":"3439"},{"id":"3462"},{"id":"3503"},{"id":"3552"}]},"id":"3452","type":"LegendItem"},{"attributes":{"source":{"id":"3478"}},"id":"3482","type":"CDSView"},{"attributes":{},"id":"3449","type":"Selection"},{"attributes":{"source":{"id":"3436"}},"id":"3440","type":"CDSView"},{"attributes":{"data_source":{"id":"3549"},"glyph":{"id":"3550"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3551"},"selection_glyph":null,"view":{"id":"3553"}},"id":"3552","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3438","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3460","type":"Line"},{"attributes":{"data_source":{"id":"3454"},"glyph":{"id":"3455"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3456"},"selection_glyph":null,"view":{"id":"3458"}},"id":"3457","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3456","type":"Scatter"}],"root_ids":["3395"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"ab29df3f-d3dc-48c4-942e-4c102316956c","root_ids":["3395"],"roots":{"3395":"173cc00a-dbc9-42c5-88d4-befaba082f9d"}}];
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