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
    
      
      
    
      var element = document.getElementById("5f7ec0d8-152b-458a-b226-bd65b9d0a693");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5f7ec0d8-152b-458a-b226-bd65b9d0a693' but no matching script tag was found.")
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
                    
                  var docs_json = '{"bfac90eb-a763-4e46-9f72-b05d29064f92":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3527","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3552","type":"Line"},{"attributes":{},"id":"3406","type":"LinearScale"},{"attributes":{},"id":"3409","type":"BasicTicker"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3452"},"selection_policy":{"id":"3451"}},"id":"3438","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3439","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3503","type":"Line"},{"attributes":{"data_source":{"id":"3480"},"glyph":{"id":"3481"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3482"},"selection_glyph":null,"view":{"id":"3484"}},"id":"3483","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"3408"},"ticker":null},"id":"3411","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3434","type":"Scatter"},{"attributes":{},"id":"3404","type":"LinearScale"},{"attributes":{},"id":"3524","type":"Selection"},{"attributes":{},"id":"3523","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"3454"},{"id":"3501"},{"id":"3550"}],"location":"bottom_right"},"id":"3453","type":"Legend"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"3450"},"selection_policy":{"id":"3449"}},"id":"3433","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3457","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3504","type":"Line"},{"attributes":{"end":0.75},"id":"3430","type":"Range1d"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3481","type":"Line"},{"attributes":{"end":86,"start":79},"id":"3431","type":"Range1d"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"3528"}]},"id":"3550","type":"LegendItem"},{"attributes":{"source":{"id":"3525"}},"id":"3529","type":"CDSView"},{"attributes":{"data_source":{"id":"3551"},"glyph":{"id":"3552"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3553"},"selection_glyph":null,"view":{"id":"3555"}},"id":"3554","type":"GlyphRenderer"},{"attributes":{},"id":"3421","type":"HelpTool"},{"attributes":{"data_source":{"id":"3502"},"glyph":{"id":"3503"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3504"},"selection_glyph":null,"view":{"id":"3506"}},"id":"3505","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3456"},"glyph":{"id":"3457"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3458"},"selection_glyph":null,"view":{"id":"3460"}},"id":"3459","type":"GlyphRenderer"},{"attributes":{},"id":"3549","type":"Selection"},{"attributes":{"source":{"id":"3438"}},"id":"3442","type":"CDSView"},{"attributes":{},"id":"3548","type":"UnionRenderers"},{"attributes":{"label":{"value":"BERT-base (Matched = 84.6)"},"renderers":[{"id":"3441"},{"id":"3464"},{"id":"3505"},{"id":"3554"}]},"id":"3454","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3422","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3458","type":"Scatter"},{"attributes":{"source":{"id":"3433"}},"id":"3437","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"3455","type":"Label"},{"attributes":{},"id":"3416","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3435","type":"Scatter"},{"attributes":{"source":{"id":"3502"}},"id":"3506","type":"CDSView"},{"attributes":{"data_source":{"id":"3438"},"glyph":{"id":"3439"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3440"},"selection_glyph":null,"view":{"id":"3442"}},"id":"3441","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3433"},"glyph":{"id":"3434"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3435"},"selection_glyph":null,"view":{"id":"3437"}},"id":"3436","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3416"},{"id":"3417"},{"id":"3418"},{"id":"3419"},{"id":"3420"},{"id":"3421"}]},"id":"3423","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3440","type":"Line"},{"attributes":{},"id":"3451","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3577"},"selection_policy":{"id":"3576"}},"id":"3551","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"3412"},"dimension":1,"ticker":null},"id":"3415","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3553","type":"Line"},{"attributes":{},"id":"3446","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"3551"}},"id":"3555","type":"CDSView"},{"attributes":{"text":"Matched against Density (BERT-base reference)"},"id":"3398","type":"Title"},{"attributes":{},"id":"3420","type":"ResetTool"},{"attributes":{"source":{"id":"3456"}},"id":"3460","type":"CDSView"},{"attributes":{},"id":"3444","type":"BasicTickFormatter"},{"attributes":{},"id":"3417","type":"WheelZoomTool"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3479"},"selection_policy":{"id":"3478"}},"id":"3461","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3482","type":"Line"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"3483"}]},"id":"3501","type":"LegendItem"},{"attributes":{},"id":"3500","type":"Selection"},{"attributes":{},"id":"3499","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.34212239583333326,0.2529296875,0.18093532986111116,0.12286603009259256],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"3500"},"selection_policy":{"id":"3499"}},"id":"3480","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"3549"},"selection_policy":{"id":"3548"}},"id":"3525","type":"ColumnDataSource"},{"attributes":{},"id":"3479","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3524"},"selection_policy":{"id":"3523"}},"id":"3502","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3461"},"glyph":{"id":"3462"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3463"},"selection_glyph":null,"view":{"id":"3465"}},"id":"3464","type":"GlyphRenderer"},{"attributes":{},"id":"3449","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3462","type":"Line"},{"attributes":{},"id":"3452","type":"Selection"},{"attributes":{"below":[{"id":"3408"}],"center":[{"id":"3411"},{"id":"3415"},{"id":"3432"},{"id":"3453"},{"id":"3455"}],"left":[{"id":"3412"}],"plot_width":800,"renderers":[{"id":"3436"},{"id":"3441"},{"id":"3459"},{"id":"3464"},{"id":"3483"},{"id":"3505"},{"id":"3528"},{"id":"3554"}],"title":{"id":"3398"},"toolbar":{"id":"3423"},"x_range":{"id":"3430"},"x_scale":{"id":"3404"},"y_range":{"id":"3431"},"y_scale":{"id":"3406"}},"id":"3397","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Matched","formatter":{"id":"3444"},"ticker":{"id":"3413"}},"id":"3412","type":"LinearAxis"},{"attributes":{"overlay":{"id":"3422"}},"id":"3418","type":"BoxZoomTool"},{"attributes":{},"id":"3477","type":"Selection"},{"attributes":{},"id":"3413","type":"BasicTicker"},{"attributes":{},"id":"3478","type":"UnionRenderers"},{"attributes":{},"id":"3476","type":"UnionRenderers"},{"attributes":{},"id":"3576","type":"UnionRenderers"},{"attributes":{"source":{"id":"3480"}},"id":"3484","type":"CDSView"},{"attributes":{"axis_label":"Density","formatter":{"id":"3446"},"ticker":{"id":"3409"}},"id":"3408","type":"LinearAxis"},{"attributes":{},"id":"3577","type":"Selection"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"3432","type":"Label"},{"attributes":{},"id":"3450","type":"Selection"},{"attributes":{},"id":"3419","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3463","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"3477"},"selection_policy":{"id":"3476"}},"id":"3456","type":"ColumnDataSource"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3526","type":"Line"},{"attributes":{"source":{"id":"3461"}},"id":"3465","type":"CDSView"},{"attributes":{"data_source":{"id":"3525"},"glyph":{"id":"3526"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3527"},"selection_glyph":null,"view":{"id":"3529"}},"id":"3528","type":"GlyphRenderer"}],"root_ids":["3397"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"bfac90eb-a763-4e46-9f72-b05d29064f92","root_ids":["3397"],"roots":{"3397":"5f7ec0d8-152b-458a-b226-bd65b9d0a693"}}];
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