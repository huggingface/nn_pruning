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
    
      
      
    
      var element = document.getElementById("2b65daf9-3b79-4b60-9662-2778d7380c3d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2b65daf9-3b79-4b60-9662-2778d7380c3d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"34b5412b-45f5-40f9-a1ff-6097d5ba5a27":{"roots":{"references":[{"attributes":{},"id":"2856","type":"ResetTool"},{"attributes":{"data":{"x":[0,null],"y":[88.12,88.12]},"selected":{"id":"2887"},"selection_policy":{"id":"2886"}},"id":"2873","type":"ColumnDataSource"},{"attributes":{},"id":"2905","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2870","type":"Scatter"},{"attributes":{},"id":"2857","type":"HelpTool"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2891","type":"Line"},{"attributes":{},"id":"2926","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2910","type":"Line"},{"attributes":{"text":"TinyBERT","x":0.5,"y":88.0},"id":"2867","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2869","type":"Scatter"},{"attributes":{},"id":"2849","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2852"},{"id":"2853"},{"id":"2854"},{"id":"2855"},{"id":"2856"},{"id":"2857"}]},"id":"2859","type":"Toolbar"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.12)"},"renderers":[{"id":"2876"},{"id":"2911"}]},"id":"2889","type":"LegendItem"},{"attributes":{},"id":"2925","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2868"},"glyph":{"id":"2869"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2870"},"selection_glyph":null,"view":{"id":"2872"}},"id":"2871","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.5],"y":[88.0]},"selected":{"id":"2885"},"selection_policy":{"id":"2884"}},"id":"2868","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2875","type":"Line"},{"attributes":{},"id":"2885","type":"Selection"},{"attributes":{},"id":"2855","type":"SaveTool"},{"attributes":{"click_policy":"hide","items":[{"id":"2889"},{"id":"2907"}],"location":"top_left"},"id":"2888","type":"Legend"},{"attributes":{"source":{"id":"2908"}},"id":"2912","type":"CDSView"},{"attributes":{"source":{"id":"2873"}},"id":"2877","type":"CDSView"},{"attributes":{"data_source":{"id":"2873"},"glyph":{"id":"2874"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2875"},"selection_glyph":null,"view":{"id":"2877"}},"id":"2876","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2858"}},"id":"2854","type":"BoxZoomTool"},{"attributes":{},"id":"2887","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2858","type":"BoxAnnotation"},{"attributes":{"axis_label":"Density","formatter":{"id":"2879"},"ticker":{"id":"2845"}},"id":"2844","type":"LinearAxis"},{"attributes":{"data":{"x":[0.5411396866835819,0.189394009936974,0.140400543820956,0.109227130042228,0.07148142159828309,0.0514173835720133,0.0392661812553424,0.0315456693725093,0.026190065697198398],"y":[88.5798737068386,87.5633240513973,87.5020913501756,87.1691792294807,86.75933679450671,86.3724377378647,85.94077873630211,85.6267687697686,85.4114217569895]},"selected":{"id":"2906"},"selection_policy":{"id":"2905"}},"id":"2890","type":"ColumnDataSource"},{"attributes":{"axis_label":"F1","formatter":{"id":"2881"},"ticker":{"id":"2849"}},"id":"2848","type":"LinearAxis"},{"attributes":{"data_source":{"id":"2908"},"glyph":{"id":"2909"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2910"},"selection_glyph":null,"view":{"id":"2912"}},"id":"2911","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2868"}},"id":"2872","type":"CDSView"},{"attributes":{"data_source":{"id":"2890"},"glyph":{"id":"2891"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2892"},"selection_glyph":null,"view":{"id":"2894"}},"id":"2893","type":"GlyphRenderer"},{"attributes":{},"id":"2842","type":"LinearScale"},{"attributes":{},"id":"2838","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2892","type":"Line"},{"attributes":{},"id":"2853","type":"WheelZoomTool"},{"attributes":{},"id":"2886","type":"UnionRenderers"},{"attributes":{},"id":"2879","type":"BasicTickFormatter"},{"attributes":{},"id":"2852","type":"PanTool"},{"attributes":{"data":{"x":[0,null],"y":[88.12,88.12]},"selected":{"id":"2926"},"selection_policy":{"id":"2925"}},"id":"2908","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"2844"}],"center":[{"id":"2847"},{"id":"2851"},{"id":"2867"},{"id":"2888"}],"left":[{"id":"2848"}],"plot_width":800,"renderers":[{"id":"2871"},{"id":"2876"},{"id":"2893"},{"id":"2911"}],"title":{"id":"2834"},"toolbar":{"id":"2859"},"x_range":{"id":"2866"},"x_scale":{"id":"2840"},"y_range":{"id":"2838"},"y_scale":{"id":"2842"}},"id":"2833","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2909","type":"Line"},{"attributes":{"source":{"id":"2890"}},"id":"2894","type":"CDSView"},{"attributes":{"end":null,"start":null},"id":"2866","type":"Range1d"},{"attributes":{},"id":"2845","type":"BasicTicker"},{"attributes":{},"id":"2906","type":"Selection"},{"attributes":{"axis":{"id":"2844"},"ticker":null},"id":"2847","type":"Grid"},{"attributes":{},"id":"2884","type":"UnionRenderers"},{"attributes":{},"id":"2840","type":"LinearScale"},{"attributes":{},"id":"2881","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"2893"}]},"id":"2907","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2874","type":"Line"},{"attributes":{"axis":{"id":"2848"},"dimension":1,"ticker":null},"id":"2851","type":"Grid"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"2834","type":"Title"}],"root_ids":["2833"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"34b5412b-45f5-40f9-a1ff-6097d5ba5a27","root_ids":["2833"],"roots":{"2833":"2b65daf9-3b79-4b60-9662-2778d7380c3d"}}];
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