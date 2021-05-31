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
    
      
      
    
      var element = document.getElementById("558fb80c-02d9-44d2-92f4-3e8c88080f4d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '558fb80c-02d9-44d2-92f4-3e8c88080f4d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a1b33de8-12b6-416f-8f8a-5a06d3f21260":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3214","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3215","type":"Line"},{"attributes":{},"id":"3192","type":"Selection"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"3139","type":"Title"},{"attributes":{"source":{"id":"3213"}},"id":"3217","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3179","type":"Line"},{"attributes":{},"id":"3189","type":"UnionRenderers"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3196","type":"Line"},{"attributes":{},"id":"3143","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3213"},"glyph":{"id":"3214"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3215"},"selection_glyph":null,"view":{"id":"3217"}},"id":"3216","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,null],"y":[88.12,88.12]},"selected":{"id":"3192"},"selection_policy":{"id":"3191"}},"id":"3178","type":"ColumnDataSource"},{"attributes":{},"id":"3191","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3195"},"glyph":{"id":"3196"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3197"},"selection_glyph":null,"view":{"id":"3199"}},"id":"3198","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3163","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"3149"},"ticker":null},"id":"3152","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3197","type":"Line"},{"attributes":{},"id":"3230","type":"UnionRenderers"},{"attributes":{"source":{"id":"3195"}},"id":"3199","type":"CDSView"},{"attributes":{},"id":"3150","type":"BasicTicker"},{"attributes":{},"id":"3158","type":"WheelZoomTool"},{"attributes":{"data":{"x":[0,null],"y":[88.12,88.12]},"selected":{"id":"3231"},"selection_policy":{"id":"3230"}},"id":"3213","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3175","type":"Scatter"},{"attributes":{},"id":"3231","type":"Selection"},{"attributes":{"below":[{"id":"3149"}],"center":[{"id":"3152"},{"id":"3156"},{"id":"3172"},{"id":"3193"}],"left":[{"id":"3153"}],"plot_width":800,"renderers":[{"id":"3176"},{"id":"3181"},{"id":"3198"},{"id":"3216"}],"title":{"id":"3139"},"toolbar":{"id":"3164"},"x_range":{"id":"3171"},"x_scale":{"id":"3145"},"y_range":{"id":"3143"},"y_scale":{"id":"3147"}},"id":"3138","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"3198"}]},"id":"3212","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3174","type":"Scatter"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.12)"},"renderers":[{"id":"3181"},{"id":"3216"}]},"id":"3194","type":"LegendItem"},{"attributes":{"source":{"id":"3173"}},"id":"3177","type":"CDSView"},{"attributes":{"data_source":{"id":"3173"},"glyph":{"id":"3174"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3175"},"selection_glyph":null,"view":{"id":"3177"}},"id":"3176","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3180","type":"Line"},{"attributes":{"end":null,"start":null},"id":"3171","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3157"},{"id":"3158"},{"id":"3159"},{"id":"3160"},{"id":"3161"},{"id":"3162"}]},"id":"3164","type":"Toolbar"},{"attributes":{},"id":"3210","type":"UnionRenderers"},{"attributes":{"axis":{"id":"3153"},"dimension":1,"ticker":null},"id":"3156","type":"Grid"},{"attributes":{},"id":"3160","type":"SaveTool"},{"attributes":{"axis_label":"F1","formatter":{"id":"3186"},"ticker":{"id":"3154"}},"id":"3153","type":"LinearAxis"},{"attributes":{},"id":"3211","type":"Selection"},{"attributes":{},"id":"3147","type":"LinearScale"},{"attributes":{},"id":"3154","type":"BasicTicker"},{"attributes":{"axis_label":"Density","formatter":{"id":"3184"},"ticker":{"id":"3150"}},"id":"3149","type":"LinearAxis"},{"attributes":{"data":{"x":[0.5411396866835819,0.189394009936974,0.140400543820956,0.109227130042228,0.07148142159828309,0.0514173835720133,0.0392661812553424,0.0315456693725093,0.026190065697198398],"y":[88.5798737068386,87.5633240513973,87.5020913501756,87.1691792294807,86.75933679450671,86.3724377378647,85.94077873630211,85.6267687697686,85.4114217569895]},"selected":{"id":"3211"},"selection_policy":{"id":"3210"}},"id":"3195","type":"ColumnDataSource"},{"attributes":{"text":"TinyBERT","x":0.5,"y":88.0},"id":"3172","type":"Label"},{"attributes":{},"id":"3161","type":"ResetTool"},{"attributes":{"data":{"x":[0.5],"y":[88.0]},"selected":{"id":"3190"},"selection_policy":{"id":"3189"}},"id":"3173","type":"ColumnDataSource"},{"attributes":{},"id":"3190","type":"Selection"},{"attributes":{"source":{"id":"3178"}},"id":"3182","type":"CDSView"},{"attributes":{"data_source":{"id":"3178"},"glyph":{"id":"3179"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3180"},"selection_glyph":null,"view":{"id":"3182"}},"id":"3181","type":"GlyphRenderer"},{"attributes":{},"id":"3157","type":"PanTool"},{"attributes":{},"id":"3162","type":"HelpTool"},{"attributes":{},"id":"3184","type":"BasicTickFormatter"},{"attributes":{},"id":"3145","type":"LinearScale"},{"attributes":{"click_policy":"hide","items":[{"id":"3194"},{"id":"3212"}],"location":"top_left"},"id":"3193","type":"Legend"},{"attributes":{"overlay":{"id":"3163"}},"id":"3159","type":"BoxZoomTool"},{"attributes":{},"id":"3186","type":"BasicTickFormatter"}],"root_ids":["3138"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"a1b33de8-12b6-416f-8f8a-5a06d3f21260","root_ids":["3138"],"roots":{"3138":"558fb80c-02d9-44d2-92f4-3e8c88080f4d"}}];
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