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
    
      
      
    
      var element = document.getElementById("3fbcd55d-ecb6-4c0d-baf8-a9b26426f2fa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3fbcd55d-ecb6-4c0d-baf8-a9b26426f2fa' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a145bb9c-ef1f-4362-acfd-95216f77c67b":{"roots":{"references":[{"attributes":{},"id":"3155","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3180","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3208","type":"Line"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":79.2},"id":"3225","type":"Label"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3207","type":"Line"},{"attributes":{},"id":"3221","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3162"},{"id":"3163"},{"id":"3164"},{"id":"3165"},{"id":"3166"},{"id":"3167"}]},"id":"3169","type":"Toolbar"},{"attributes":{},"id":"3222","type":"Selection"},{"attributes":{"axis":{"id":"3154"},"ticker":null},"id":"3157","type":"Grid"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[79.2]},"selected":{"id":"3251"},"selection_policy":{"id":"3250"}},"id":"3226","type":"ColumnDataSource"},{"attributes":{"axis_label":"F1","formatter":{"id":"3189"},"ticker":{"id":"3159"}},"id":"3158","type":"LinearAxis"},{"attributes":{},"id":"3197","type":"Selection"},{"attributes":{},"id":"3166","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3203","type":"Scatter"},{"attributes":{"axis":{"id":"3158"},"dimension":1,"ticker":null},"id":"3161","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3179","type":"Scatter"},{"attributes":{"data_source":{"id":"3206"},"glyph":{"id":"3207"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3208"},"selection_glyph":null,"view":{"id":"3210"}},"id":"3209","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3197"},"selection_policy":{"id":"3196"}},"id":"3183","type":"ColumnDataSource"},{"attributes":{},"id":"3223","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"3168"}},"id":"3164","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3184","type":"Line"},{"attributes":{},"id":"3224","type":"Selection"},{"attributes":{},"id":"3196","type":"UnionRenderers"},{"attributes":{},"id":"3195","type":"Selection"},{"attributes":{"source":{"id":"3206"}},"id":"3210","type":"CDSView"},{"attributes":{"data_source":{"id":"3201"},"glyph":{"id":"3202"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3203"},"selection_glyph":null,"view":{"id":"3205"}},"id":"3204","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3202","type":"Scatter"},{"attributes":{},"id":"3194","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.5],"y":[77.7]},"selected":{"id":"3222"},"selection_policy":{"id":"3221"}},"id":"3201","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3185","type":"Line"},{"attributes":{"data_source":{"id":"3183"},"glyph":{"id":"3184"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3185"},"selection_glyph":null,"view":{"id":"3187"}},"id":"3186","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3232","type":"Line"},{"attributes":{"source":{"id":"3226"}},"id":"3230","type":"CDSView"},{"attributes":{"source":{"id":"3201"}},"id":"3205","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3228","type":"Scatter"},{"attributes":{"data_source":{"id":"3231"},"glyph":{"id":"3232"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3233"},"selection_glyph":null,"view":{"id":"3235"}},"id":"3234","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3226"},"glyph":{"id":"3227"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3228"},"selection_glyph":null,"view":{"id":"3230"}},"id":"3229","type":"GlyphRenderer"},{"attributes":{},"id":"3148","type":"DataRange1d"},{"attributes":{"label":{"value":"BERT-base (F1 = 76.7)"},"renderers":[{"id":"3186"},{"id":"3209"},{"id":"3234"}]},"id":"3199","type":"LegendItem"},{"attributes":{"text":"TinyBERT","x":0.5,"y":77.7},"id":"3200","type":"Label"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3253"},"selection_policy":{"id":"3252"}},"id":"3231","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3178"}},"id":"3182","type":"CDSView"},{"attributes":{},"id":"3159","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3227","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3224"},"selection_policy":{"id":"3223"}},"id":"3206","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3233","type":"Line"},{"attributes":{"source":{"id":"3231"}},"id":"3235","type":"CDSView"},{"attributes":{"data_source":{"id":"3178"},"glyph":{"id":"3179"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3180"},"selection_glyph":null,"view":{"id":"3182"}},"id":"3181","type":"GlyphRenderer"},{"attributes":{"click_policy":"hide","items":[{"id":"3199"}],"location":"bottom_right"},"id":"3198","type":"Legend"},{"attributes":{"source":{"id":"3183"}},"id":"3187","type":"CDSView"},{"attributes":{},"id":"3250","type":"UnionRenderers"},{"attributes":{"text":"DistilBERT","x":0.5,"y":68.1776176526635},"id":"3177","type":"Label"},{"attributes":{},"id":"3251","type":"Selection"},{"attributes":{"data":{"x":[0.5],"y":[68.1776176526635]},"selected":{"id":"3195"},"selection_policy":{"id":"3194"}},"id":"3178","type":"ColumnDataSource"},{"attributes":{},"id":"3150","type":"LinearScale"},{"attributes":{},"id":"3163","type":"WheelZoomTool"},{"attributes":{},"id":"3189","type":"BasicTickFormatter"},{"attributes":{},"id":"3252","type":"UnionRenderers"},{"attributes":{},"id":"3253","type":"Selection"},{"attributes":{"axis_label":"Density","formatter":{"id":"3191"},"ticker":{"id":"3155"}},"id":"3154","type":"LinearAxis"},{"attributes":{},"id":"3152","type":"LinearScale"},{"attributes":{},"id":"3162","type":"PanTool"},{"attributes":{},"id":"3167","type":"HelpTool"},{"attributes":{},"id":"3165","type":"SaveTool"},{"attributes":{"end":0.8},"id":"3176","type":"Range1d"},{"attributes":{"below":[{"id":"3154"}],"center":[{"id":"3157"},{"id":"3161"},{"id":"3177"},{"id":"3198"},{"id":"3200"},{"id":"3225"}],"left":[{"id":"3158"}],"plot_width":800,"renderers":[{"id":"3181"},{"id":"3186"},{"id":"3204"},{"id":"3209"},{"id":"3229"},{"id":"3234"}],"title":null,"toolbar":{"id":"3169"},"x_range":{"id":"3176"},"x_scale":{"id":"3150"},"y_range":{"id":"3148"},"y_scale":{"id":"3152"}},"id":"3144","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3168","type":"BoxAnnotation"},{"attributes":{},"id":"3191","type":"BasicTickFormatter"}],"root_ids":["3144"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"a145bb9c-ef1f-4362-acfd-95216f77c67b","root_ids":["3144"],"roots":{"3144":"3fbcd55d-ecb6-4c0d-baf8-a9b26426f2fa"}}];
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