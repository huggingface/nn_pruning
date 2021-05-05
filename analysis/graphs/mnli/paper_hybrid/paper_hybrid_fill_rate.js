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
    
      
      
    
      var element = document.getElementById("f5a5edeb-174d-42cc-b7cd-af524d159575");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f5a5edeb-174d-42cc-b7cd-af524d159575' but no matching script tag was found.")
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
                    
                  var docs_json = '{"71bbd29a-2cec-4449-a4d3-3cd697c823ae":{"roots":{"references":[{"attributes":{},"id":"3007","type":"LinearScale"},{"attributes":{"source":{"id":"3062"}},"id":"3066","type":"CDSView"},{"attributes":{},"id":"3022","type":"HelpTool"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"3084"}]},"id":"3102","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3040","type":"Line"},{"attributes":{},"id":"3018","type":"WheelZoomTool"},{"attributes":{},"id":"3079","type":"UnionRenderers"},{"attributes":{"source":{"id":"3081"}},"id":"3085","type":"CDSView"},{"attributes":{},"id":"3077","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3125"},"selection_policy":{"id":"3124"}},"id":"3103","type":"ColumnDataSource"},{"attributes":{},"id":"3125","type":"Selection"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3082","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3105","type":"Line"},{"attributes":{},"id":"3100","type":"UnionRenderers"},{"attributes":{},"id":"3020","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3064","type":"Line"},{"attributes":{"axis":{"id":"3013"},"dimension":1,"ticker":null},"id":"3016","type":"Grid"},{"attributes":{},"id":"3045","type":"BasicTickFormatter"},{"attributes":{},"id":"3080","type":"Selection"},{"attributes":{"end":0.75},"id":"3031","type":"Range1d"},{"attributes":{"axis":{"id":"3009"},"ticker":null},"id":"3012","type":"Grid"},{"attributes":{"data_source":{"id":"3062"},"glyph":{"id":"3063"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3064"},"selection_glyph":null,"view":{"id":"3066"}},"id":"3065","type":"GlyphRenderer"},{"attributes":{},"id":"3101","type":"Selection"},{"attributes":{"source":{"id":"3057"}},"id":"3061","type":"CDSView"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"3033","type":"Label"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3063","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3059","type":"Scatter"},{"attributes":{"overlay":{"id":"3023"}},"id":"3019","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3035","type":"Scatter"},{"attributes":{"below":[{"id":"3009"}],"center":[{"id":"3012"},{"id":"3016"},{"id":"3033"},{"id":"3054"},{"id":"3056"}],"left":[{"id":"3013"}],"plot_width":800,"renderers":[{"id":"3037"},{"id":"3042"},{"id":"3060"},{"id":"3065"},{"id":"3084"},{"id":"3106"}],"title":{"id":"2999"},"toolbar":{"id":"3024"},"x_range":{"id":"3031"},"x_scale":{"id":"3005"},"y_range":{"id":"3032"},"y_scale":{"id":"3007"}},"id":"2998","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3047","type":"BasicTickFormatter"},{"attributes":{},"id":"3053","type":"Selection"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"3078"},"selection_policy":{"id":"3077"}},"id":"3057","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3080"},"selection_policy":{"id":"3079"}},"id":"3062","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3057"},"glyph":{"id":"3058"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3059"},"selection_glyph":null,"view":{"id":"3061"}},"id":"3060","type":"GlyphRenderer"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"3056","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3041","type":"Line"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"3101"},"selection_policy":{"id":"3100"}},"id":"3081","type":"ColumnDataSource"},{"attributes":{"end":86,"start":79},"id":"3032","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3083","type":"Line"},{"attributes":{},"id":"3078","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3017"},{"id":"3018"},{"id":"3019"},{"id":"3020"},{"id":"3021"},{"id":"3022"}]},"id":"3024","type":"Toolbar"},{"attributes":{},"id":"3005","type":"LinearScale"},{"attributes":{"source":{"id":"3039"}},"id":"3043","type":"CDSView"},{"attributes":{"source":{"id":"3103"}},"id":"3107","type":"CDSView"},{"attributes":{},"id":"3017","type":"PanTool"},{"attributes":{},"id":"3124","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3104","type":"Line"},{"attributes":{"text":"Matched against Density (BERT-base reference)"},"id":"2999","type":"Title"},{"attributes":{},"id":"3010","type":"BasicTicker"},{"attributes":{},"id":"3051","type":"Selection"},{"attributes":{},"id":"3050","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"3055"},{"id":"3102"}],"location":"bottom_right"},"id":"3054","type":"Legend"},{"attributes":{"axis_label":"Density","formatter":{"id":"3047"},"ticker":{"id":"3010"}},"id":"3009","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3036","type":"Scatter"},{"attributes":{"axis_label":"Matched","formatter":{"id":"3045"},"ticker":{"id":"3014"}},"id":"3013","type":"LinearAxis"},{"attributes":{},"id":"3021","type":"ResetTool"},{"attributes":{"label":{"value":"BERT-base (Matched = 84.6)"},"renderers":[{"id":"3042"},{"id":"3065"},{"id":"3106"}]},"id":"3055","type":"LegendItem"},{"attributes":{"data_source":{"id":"3034"},"glyph":{"id":"3035"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3036"},"selection_glyph":null,"view":{"id":"3038"}},"id":"3037","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3034"}},"id":"3038","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"3053"},"selection_policy":{"id":"3052"}},"id":"3039","type":"ColumnDataSource"},{"attributes":{},"id":"3014","type":"BasicTicker"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"3051"},"selection_policy":{"id":"3050"}},"id":"3034","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3039"},"glyph":{"id":"3040"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3041"},"selection_glyph":null,"view":{"id":"3043"}},"id":"3042","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3081"},"glyph":{"id":"3082"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3083"},"selection_glyph":null,"view":{"id":"3085"}},"id":"3084","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3058","type":"Scatter"},{"attributes":{},"id":"3052","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3023","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"3103"},"glyph":{"id":"3104"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3105"},"selection_glyph":null,"view":{"id":"3107"}},"id":"3106","type":"GlyphRenderer"}],"root_ids":["2998"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"71bbd29a-2cec-4449-a4d3-3cd697c823ae","root_ids":["2998"],"roots":{"2998":"f5a5edeb-174d-42cc-b7cd-af524d159575"}}];
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