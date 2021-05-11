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
    
      
      
    
      var element = document.getElementById("28e9d2be-1779-4196-89be-b11a7d23313e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '28e9d2be-1779-4196-89be-b11a7d23313e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"52a3d1ca-fa64-4073-92ef-775ba4288dde":{"roots":{"references":[{"attributes":{},"id":"3126","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3139","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3166","type":"Line"},{"attributes":{"source":{"id":"3137"}},"id":"3141","type":"CDSView"},{"attributes":{"data":{"x":[0,null],"y":[92.66,92.66]},"selected":{"id":"3182"},"selection_policy":{"id":"3183"}},"id":"3165","type":"ColumnDataSource"},{"attributes":{},"id":"3149","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3167","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3161","type":"Scatter"},{"attributes":{"source":{"id":"3165"}},"id":"3169","type":"CDSView"},{"attributes":{},"id":"3114","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3165"},"glyph":{"id":"3166"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3167"},"selection_glyph":null,"view":{"id":"3169"}},"id":"3168","type":"GlyphRenderer"},{"attributes":{},"id":"3151","type":"BasicTickFormatter"},{"attributes":{},"id":"3118","type":"BasicTicker"},{"attributes":{},"id":"3154","type":"UnionRenderers"},{"attributes":{},"id":"3111","type":"LinearScale"},{"attributes":{},"id":"3125","type":"ResetTool"},{"attributes":{},"id":"3153","type":"Selection"},{"attributes":{"data":{"x":[0.5],"y":[93.0]},"selected":{"id":"3180"},"selection_policy":{"id":"3181"}},"id":"3160","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"3113"}],"center":[{"id":"3116"},{"id":"3120"},{"id":"3136"},{"id":"3157"},{"id":"3159"}],"left":[{"id":"3117"}],"plot_width":800,"renderers":[{"id":"3140"},{"id":"3145"},{"id":"3163"},{"id":"3168"}],"title":{"id":"3103"},"toolbar":{"id":"3128"},"x_range":{"id":"3135"},"x_scale":{"id":"3109"},"y_range":{"id":"3107"},"y_scale":{"id":"3111"}},"id":"3102","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3127","type":"BoxAnnotation"},{"attributes":{},"id":"3107","type":"DataRange1d"},{"attributes":{"end":null,"start":null},"id":"3135","type":"Range1d"},{"attributes":{},"id":"3155","type":"Selection"},{"attributes":{},"id":"3124","type":"SaveTool"},{"attributes":{},"id":"3180","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"3158"}],"location":"top_left"},"id":"3157","type":"Legend"},{"attributes":{"data_source":{"id":"3160"},"glyph":{"id":"3161"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3162"},"selection_glyph":null,"view":{"id":"3164"}},"id":"3163","type":"GlyphRenderer"},{"attributes":{},"id":"3121","type":"PanTool"},{"attributes":{},"id":"3181","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3121"},{"id":"3122"},{"id":"3123"},{"id":"3124"},{"id":"3125"},{"id":"3126"}]},"id":"3128","type":"Toolbar"},{"attributes":{},"id":"3156","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3162","type":"Scatter"},{"attributes":{"data_source":{"id":"3137"},"glyph":{"id":"3138"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3139"},"selection_glyph":null,"view":{"id":"3141"}},"id":"3140","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3144","type":"Line"},{"attributes":{},"id":"3109","type":"LinearScale"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":91.3},"id":"3136","type":"Label"},{"attributes":{"overlay":{"id":"3127"}},"id":"3123","type":"BoxZoomTool"},{"attributes":{"source":{"id":"3142"}},"id":"3146","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3143","type":"Line"},{"attributes":{"source":{"id":"3160"}},"id":"3164","type":"CDSView"},{"attributes":{"axis":{"id":"3113"},"ticker":null},"id":"3116","type":"Grid"},{"attributes":{"data":{"x":[0,null],"y":[92.66,92.66]},"selected":{"id":"3155"},"selection_policy":{"id":"3156"}},"id":"3142","type":"ColumnDataSource"},{"attributes":{"axis_label":"Density","formatter":{"id":"3149"},"ticker":{"id":"3114"}},"id":"3113","type":"LinearAxis"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[91.3]},"selected":{"id":"3153"},"selection_policy":{"id":"3154"}},"id":"3137","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3138","type":"Scatter"},{"attributes":{},"id":"3182","type":"Selection"},{"attributes":{"text":"Accuracy against Density (BERT-base reference)"},"id":"3103","type":"Title"},{"attributes":{},"id":"3122","type":"WheelZoomTool"},{"attributes":{"label":{"value":"BERT-base (Accuracy = 92.66)"},"renderers":[{"id":"3145"},{"id":"3168"}]},"id":"3158","type":"LegendItem"},{"attributes":{},"id":"3183","type":"UnionRenderers"},{"attributes":{"text":"TinyBERT","x":0.5,"y":93.0},"id":"3159","type":"Label"},{"attributes":{"data_source":{"id":"3142"},"glyph":{"id":"3143"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3144"},"selection_glyph":null,"view":{"id":"3146"}},"id":"3145","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"3117"},"dimension":1,"ticker":null},"id":"3120","type":"Grid"},{"attributes":{"axis_label":"Accuracy","formatter":{"id":"3151"},"ticker":{"id":"3118"}},"id":"3117","type":"LinearAxis"}],"root_ids":["3102"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"52a3d1ca-fa64-4073-92ef-775ba4288dde","root_ids":["3102"],"roots":{"3102":"28e9d2be-1779-4196-89be-b11a7d23313e"}}];
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