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
    
      
      
    
      var element = document.getElementById("fe9802b2-75e3-4a81-8223-20bbb356840f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fe9802b2-75e3-4a81-8223-20bbb356840f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f851ddad-5a2e-42a4-9e15-84d8d8bcbf96":{"roots":{"references":[{"attributes":{},"id":"1053","type":"UnionRenderers"},{"attributes":{},"id":"1031","type":"CategoricalTickFormatter"},{"attributes":{},"id":"1052","type":"Selection"},{"attributes":{"label":{"value":"pruned"},"renderers":[{"id":"1043"}]},"id":"1054","type":"LegendItem"},{"attributes":{"data":{"active":[4,4,6,7,7,5,6,7,5,5,5,3],"layers":["0","1","2","3","4","5","6","7","8","9","10","11"],"pruned":[8,8,6,5,5,7,6,5,7,7,7,9]},"selected":{"id":"1052"},"selection_policy":{"id":"1053"}},"id":"1039","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"1020"}},"fill_color":{"value":"#0000ff"},"line_color":{"value":"#0000ff"},"top":{"expr":{"id":"1021"}},"width":{"value":0.9},"x":{"field":"layers"}},"id":"1026","type":"VBar"},{"attributes":{"above":[{"id":"1055"}],"below":[{"id":"1012"}],"center":[{"id":"1014"},{"id":"1018"},{"id":"1037"}],"left":[{"id":"1015"}],"outline_line_color":null,"plot_height":400,"renderers":[{"id":"1028"},{"id":"1043"}],"title":{"id":"1002"},"toolbar":{"id":"1019"},"toolbar_location":null,"x_range":{"id":"1004"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"active":[4,4,6,7,7,5,6,7,5,5,5,3],"layers":["0","1","2","3","4","5","6","7","8","9","10","11"],"pruned":[8,8,6,5,5,7,6,5,7,7,7,9]},"selected":{"id":"1035"},"selection_policy":{"id":"1036"}},"id":"1024","type":"ColumnDataSource"},{"attributes":{"fields":["active"]},"id":"1021","type":"Stack"},{"attributes":{"source":{"id":"1039"}},"id":"1044","type":"CDSView"},{"attributes":{"axis_label":"Heads count","formatter":{"id":"1033"},"minor_tick_line_color":null,"ticker":{"id":"1016"}},"id":"1015","type":"LinearAxis"},{"attributes":{"fields":["active"]},"id":"1022","type":"Stack"},{"attributes":{},"id":"1033","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"1022"}},"fill_color":{"value":"#ffcccc"},"line_color":{"value":"#ffcccc"},"top":{"expr":{"id":"1023"}},"width":{"value":0.9},"x":{"field":"layers"}},"id":"1041","type":"VBar"},{"attributes":{"data_source":{"id":"1039"},"glyph":{"id":"1041"},"hover_glyph":null,"muted_glyph":null,"name":"pruned","nonselection_glyph":{"id":"1042"},"selection_glyph":null,"view":{"id":"1044"}},"id":"1043","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1012"},"grid_line_color":null,"ticker":null},"id":"1014","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1022"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#ffcccc"},"line_alpha":{"value":0.1},"line_color":{"value":"#ffcccc"},"top":{"expr":{"id":"1023"}},"width":{"value":0.9},"x":{"field":"layers"}},"id":"1042","type":"VBar"},{"attributes":{"fields":["active","pruned"]},"id":"1023","type":"Stack"},{"attributes":{"fields":[]},"id":"1020","type":"Stack"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"source":{"id":"1024"}},"id":"1029","type":"CDSView"},{"attributes":{},"id":"1035","type":"Selection"},{"attributes":{"data_source":{"id":"1024"},"glyph":{"id":"1026"},"hover_glyph":null,"muted_glyph":null,"name":"active","nonselection_glyph":{"id":"1027"},"selection_glyph":null,"view":{"id":"1029"}},"id":"1028","type":"GlyphRenderer"},{"attributes":{},"id":"1013","type":"CategoricalTicker"},{"attributes":{},"id":"1036","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"1020"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#0000ff"},"line_alpha":{"value":0.1},"line_color":{"value":"#0000ff"},"top":{"expr":{"id":"1021"}},"width":{"value":0.9},"x":{"field":"layers"}},"id":"1027","type":"VBar"},{"attributes":{"start":0},"id":"1006","type":"DataRange1d"},{"attributes":{"factors":["0","1","2","3","4","5","6","7","8","9","10","11"],"range_padding":0.1},"id":"1004","type":"FactorRange"},{"attributes":{"label":{"value":"active"},"renderers":[{"id":"1028"}]},"id":"1038","type":"LegendItem"},{"attributes":{},"id":"1008","type":"CategoricalScale"},{"attributes":{"label":{"value":"pruned"},"renderers":[{"id":"1043"}]},"id":"1057","type":"LegendItem"},{"attributes":{"items":[{"id":"1038"},{"id":"1054"}],"location":null},"id":"1037","type":"Legend"},{"attributes":{"label":{"value":"active"},"renderers":[{"id":"1028"}]},"id":"1056","type":"LegendItem"},{"attributes":{"items":[{"id":"1056"},{"id":"1057"}],"location":[10,0],"orientation":"horizontal"},"id":"1055","type":"Legend"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1019","type":"Toolbar"},{"attributes":{"axis_label":"Layer index","formatter":{"id":"1031"},"minor_tick_line_color":null,"ticker":{"id":"1013"}},"id":"1012","type":"CategoricalAxis"},{"attributes":{"axis":{"id":"1015"},"dimension":1,"ticker":null},"id":"1018","type":"Grid"},{"attributes":{"text":"Pruned Transformer Heads"},"id":"1002","type":"Title"},{"attributes":{},"id":"1016","type":"BasicTicker"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"f851ddad-5a2e-42a4-9e15-84d8d8bcbf96","root_ids":["1001"],"roots":{"1001":"fe9802b2-75e3-4a81-8223-20bbb356840f"}}];
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