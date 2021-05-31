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
    
      
      
    
      var element = document.getElementById("9aa8deca-36fd-416d-afe4-af2fd1b0dce1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9aa8deca-36fd-416d-afe4-af2fd1b0dce1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1283d020-f224-4c65-b8d4-4895459fbfd3":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3062","type":"Line"},{"attributes":{},"id":"3122","type":"Selection"},{"attributes":{"overlay":{"id":"3021"}},"id":"3017","type":"BoxZoomTool"},{"attributes":{},"id":"3123","type":"UnionRenderers"},{"attributes":{},"id":"3048","type":"Selection"},{"attributes":{"text":"Matched against Density (BERT-base reference)"},"id":"2997","type":"Title"},{"attributes":{},"id":"3016","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"3011"},"dimension":1,"ticker":null},"id":"3014","type":"Grid"},{"attributes":{"axis_label":"Matched","formatter":{"id":"3044"},"ticker":{"id":"3012"}},"id":"3011","type":"LinearAxis"},{"attributes":{},"id":"3051","type":"UnionRenderers"},{"attributes":{},"id":"3075","type":"Selection"},{"attributes":{},"id":"3076","type":"UnionRenderers"},{"attributes":{},"id":"3008","type":"BasicTicker"},{"attributes":{},"id":"3050","type":"Selection"},{"attributes":{},"id":"3077","type":"Selection"},{"attributes":{"end":0.75},"id":"3029","type":"Range1d"},{"attributes":{},"id":"3020","type":"HelpTool"},{"attributes":{},"id":"3078","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3015"},{"id":"3016"},{"id":"3017"},{"id":"3018"},{"id":"3019"},{"id":"3020"}]},"id":"3022","type":"Toolbar"},{"attributes":{},"id":"3044","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3033","type":"Scatter"},{"attributes":{"source":{"id":"3055"}},"id":"3059","type":"CDSView"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"3048"},"selection_policy":{"id":"3049"}},"id":"3032","type":"ColumnDataSource"},{"attributes":{"click_policy":"hide","items":[{"id":"3053"},{"id":"3100"}],"location":"bottom_right"},"id":"3052","type":"Legend"},{"attributes":{"data_source":{"id":"3032"},"glyph":{"id":"3033"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3034"},"selection_glyph":null,"view":{"id":"3036"}},"id":"3035","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"3007"}],"center":[{"id":"3010"},{"id":"3014"},{"id":"3031"},{"id":"3052"},{"id":"3054"}],"left":[{"id":"3011"}],"plot_width":800,"renderers":[{"id":"3035"},{"id":"3040"},{"id":"3058"},{"id":"3063"},{"id":"3082"},{"id":"3104"}],"title":{"id":"2997"},"toolbar":{"id":"3022"},"x_range":{"id":"3029"},"x_scale":{"id":"3003"},"y_range":{"id":"3030"},"y_scale":{"id":"3005"}},"id":"2996","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"3037"},"glyph":{"id":"3038"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3039"},"selection_glyph":null,"view":{"id":"3041"}},"id":"3040","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3102","type":"Line"},{"attributes":{"source":{"id":"3079"}},"id":"3083","type":"CDSView"},{"attributes":{"data_source":{"id":"3101"},"glyph":{"id":"3102"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3103"},"selection_glyph":null,"view":{"id":"3105"}},"id":"3104","type":"GlyphRenderer"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"3031","type":"Label"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"3054","type":"Label"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"3082"}]},"id":"3100","type":"LegendItem"},{"attributes":{"axis":{"id":"3007"},"ticker":null},"id":"3010","type":"Grid"},{"attributes":{"source":{"id":"3032"}},"id":"3036","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3050"},"selection_policy":{"id":"3051"}},"id":"3037","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3077"},"selection_policy":{"id":"3078"}},"id":"3060","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3057","type":"Scatter"},{"attributes":{},"id":"3098","type":"Selection"},{"attributes":{},"id":"3099","type":"UnionRenderers"},{"attributes":{},"id":"3012","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3081","type":"Line"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3080","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3056","type":"Scatter"},{"attributes":{},"id":"3046","type":"BasicTickFormatter"},{"attributes":{},"id":"3015","type":"PanTool"},{"attributes":{"data_source":{"id":"3079"},"glyph":{"id":"3080"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3081"},"selection_glyph":null,"view":{"id":"3083"}},"id":"3082","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3122"},"selection_policy":{"id":"3123"}},"id":"3101","type":"ColumnDataSource"},{"attributes":{"end":86,"start":79},"id":"3030","type":"Range1d"},{"attributes":{},"id":"3049","type":"UnionRenderers"},{"attributes":{},"id":"3005","type":"LinearScale"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3061","type":"Line"},{"attributes":{"label":{"value":"BERT-base (Matched = 84.6)"},"renderers":[{"id":"3040"},{"id":"3063"},{"id":"3104"}]},"id":"3053","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3034","type":"Scatter"},{"attributes":{"source":{"id":"3037"}},"id":"3041","type":"CDSView"},{"attributes":{"source":{"id":"3060"}},"id":"3064","type":"CDSView"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"3098"},"selection_policy":{"id":"3099"}},"id":"3079","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3103","type":"Line"},{"attributes":{"source":{"id":"3101"}},"id":"3105","type":"CDSView"},{"attributes":{},"id":"3019","type":"ResetTool"},{"attributes":{},"id":"3018","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3039","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3021","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"3055"},"glyph":{"id":"3056"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3057"},"selection_glyph":null,"view":{"id":"3059"}},"id":"3058","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3038","type":"Line"},{"attributes":{"axis_label":"Density","formatter":{"id":"3046"},"ticker":{"id":"3008"}},"id":"3007","type":"LinearAxis"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"3075"},"selection_policy":{"id":"3076"}},"id":"3055","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3060"},"glyph":{"id":"3061"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3062"},"selection_glyph":null,"view":{"id":"3064"}},"id":"3063","type":"GlyphRenderer"},{"attributes":{},"id":"3003","type":"LinearScale"}],"root_ids":["2996"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"1283d020-f224-4c65-b8d4-4895459fbfd3","root_ids":["2996"],"roots":{"2996":"9aa8deca-36fd-416d-afe4-af2fd1b0dce1"}}];
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