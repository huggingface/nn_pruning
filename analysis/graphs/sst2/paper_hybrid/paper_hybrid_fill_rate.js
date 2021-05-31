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
    
      
      
    
      var element = document.getElementById("56175a7c-504c-4126-b6f6-3a8393403a7b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '56175a7c-504c-4126-b6f6-3a8393403a7b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"39b3f89a-b967-468b-af1f-934d55f3e492":{"roots":{"references":[{"attributes":{},"id":"2833","type":"HelpTool"},{"attributes":{},"id":"2856","type":"BasicTickFormatter"},{"attributes":{},"id":"2818","type":"LinearScale"},{"attributes":{},"id":"2860","type":"UnionRenderers"},{"attributes":{"axis":{"id":"2820"},"ticker":null},"id":"2823","type":"Grid"},{"attributes":{"axis":{"id":"2824"},"dimension":1,"ticker":null},"id":"2827","type":"Grid"},{"attributes":{},"id":"2832","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2828"},{"id":"2829"},{"id":"2830"},{"id":"2831"},{"id":"2832"},{"id":"2833"}]},"id":"2835","type":"Toolbar"},{"attributes":{"axis_label":"Accuracy","formatter":{"id":"2856"},"ticker":{"id":"2825"}},"id":"2824","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2874","type":"Line"},{"attributes":{"data_source":{"id":"2849"},"glyph":{"id":"2850"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2851"},"selection_glyph":null,"view":{"id":"2853"}},"id":"2852","type":"GlyphRenderer"},{"attributes":{},"id":"2888","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2851","type":"Line"},{"attributes":{"source":{"id":"2872"}},"id":"2876","type":"CDSView"},{"attributes":{},"id":"2831","type":"SaveTool"},{"attributes":{"source":{"id":"2849"}},"id":"2853","type":"CDSView"},{"attributes":{"data_source":{"id":"2867"},"glyph":{"id":"2868"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2869"},"selection_glyph":null,"view":{"id":"2871"}},"id":"2870","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2820"}],"center":[{"id":"2823"},{"id":"2827"},{"id":"2843"},{"id":"2864"},{"id":"2866"}],"left":[{"id":"2824"}],"plot_width":800,"renderers":[{"id":"2847"},{"id":"2852"},{"id":"2870"},{"id":"2875"}],"title":{"id":"2810"},"toolbar":{"id":"2835"},"x_range":{"id":"2842"},"x_scale":{"id":"2816"},"y_range":{"id":"2814"},"y_scale":{"id":"2818"}},"id":"2809","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"2872"},"glyph":{"id":"2873"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2874"},"selection_glyph":null,"view":{"id":"2876"}},"id":"2875","type":"GlyphRenderer"},{"attributes":{"label":{"value":"BERT-base (Accuracy = 92.66)"},"renderers":[{"id":"2852"},{"id":"2875"}]},"id":"2865","type":"LegendItem"},{"attributes":{"data":{"x":[0,null],"y":[92.66,92.66]},"selected":{"id":"2863"},"selection_policy":{"id":"2862"}},"id":"2849","type":"ColumnDataSource"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":91.3},"id":"2843","type":"Label"},{"attributes":{"source":{"id":"2867"}},"id":"2871","type":"CDSView"},{"attributes":{"data":{"x":[0.5],"y":[93.0]},"selected":{"id":"2888"},"selection_policy":{"id":"2887"}},"id":"2867","type":"ColumnDataSource"},{"attributes":{"text":"Accuracy against Density (BERT-base reference)"},"id":"2810","type":"Title"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2850","type":"Line"},{"attributes":{"data":{"x":[0,null],"y":[92.66,92.66]},"selected":{"id":"2890"},"selection_policy":{"id":"2889"}},"id":"2872","type":"ColumnDataSource"},{"attributes":{"click_policy":"hide","items":[{"id":"2865"}],"location":"top_left"},"id":"2864","type":"Legend"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2868","type":"Scatter"},{"attributes":{"overlay":{"id":"2834"}},"id":"2830","type":"BoxZoomTool"},{"attributes":{},"id":"2858","type":"BasicTickFormatter"},{"attributes":{},"id":"2861","type":"Selection"},{"attributes":{},"id":"2887","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[91.3]},"selected":{"id":"2861"},"selection_policy":{"id":"2860"}},"id":"2844","type":"ColumnDataSource"},{"attributes":{},"id":"2825","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2869","type":"Scatter"},{"attributes":{"data_source":{"id":"2844"},"glyph":{"id":"2845"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2846"},"selection_glyph":null,"view":{"id":"2848"}},"id":"2847","type":"GlyphRenderer"},{"attributes":{},"id":"2862","type":"UnionRenderers"},{"attributes":{},"id":"2814","type":"DataRange1d"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2873","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2834","type":"BoxAnnotation"},{"attributes":{"source":{"id":"2844"}},"id":"2848","type":"CDSView"},{"attributes":{},"id":"2816","type":"LinearScale"},{"attributes":{},"id":"2863","type":"Selection"},{"attributes":{},"id":"2821","type":"BasicTicker"},{"attributes":{"end":null,"start":null},"id":"2842","type":"Range1d"},{"attributes":{},"id":"2889","type":"UnionRenderers"},{"attributes":{},"id":"2890","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2845","type":"Scatter"},{"attributes":{},"id":"2828","type":"PanTool"},{"attributes":{"text":"TinyBERT","x":0.5,"y":93.0},"id":"2866","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2846","type":"Scatter"},{"attributes":{},"id":"2829","type":"WheelZoomTool"},{"attributes":{"axis_label":"Density","formatter":{"id":"2858"},"ticker":{"id":"2821"}},"id":"2820","type":"LinearAxis"}],"root_ids":["2809"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"39b3f89a-b967-468b-af1f-934d55f3e492","root_ids":["2809"],"roots":{"2809":"56175a7c-504c-4126-b6f6-3a8393403a7b"}}];
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