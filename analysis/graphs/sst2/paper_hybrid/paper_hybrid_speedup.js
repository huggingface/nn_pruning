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
    
      
      
    
      var element = document.getElementById("37b51615-a013-4c47-9381-bfeb21f28f4a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '37b51615-a013-4c47-9381-bfeb21f28f4a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5f34a64c-a865-4260-8a41-5b82172b60a0":{"roots":{"references":[{"attributes":{},"id":"1551","type":"BasicTicker"},{"attributes":{},"id":"1562","type":"ResetTool"},{"attributes":{},"id":"1601","type":"UnionRenderers"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1595"},"ticker":{"id":"1551"}},"id":"1550","type":"LinearAxis"},{"attributes":{"axis":{"id":"1550"},"ticker":null},"id":"1553","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1576","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1581","type":"Scatter"},{"attributes":{},"id":"1555","type":"BasicTicker"},{"attributes":{},"id":"1558","type":"PanTool"},{"attributes":{"source":{"id":"1586"}},"id":"1590","type":"CDSView"},{"attributes":{},"id":"1593","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[2.0],"y":[93.0]},"selected":{"id":"1602"},"selection_policy":{"id":"1601"}},"id":"1586","type":"ColumnDataSource"},{"attributes":{},"id":"1563","type":"HelpTool"},{"attributes":{},"id":"1559","type":"WheelZoomTool"},{"attributes":{"text":"DistilBERT","x":1.63,"y":91.3},"id":"1579","type":"Label"},{"attributes":{"data_source":{"id":"1586"},"glyph":{"id":"1587"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1588"},"selection_glyph":null,"view":{"id":"1590"}},"id":"1589","type":"GlyphRenderer"},{"attributes":{},"id":"1599","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1558"},{"id":"1559"},{"id":"1560"},{"id":"1561"},{"id":"1562"},{"id":"1563"}]},"id":"1565","type":"Toolbar"},{"attributes":{"data_source":{"id":"1580"},"glyph":{"id":"1581"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1582"},"selection_glyph":null,"view":{"id":"1584"}},"id":"1583","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1575","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1588","type":"Scatter"},{"attributes":{"text":"Accuracy against Speedup (BERT-base reference)"},"id":"1540","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1564","type":"BoxAnnotation"},{"attributes":{"source":{"id":"1574"}},"id":"1578","type":"CDSView"},{"attributes":{},"id":"1602","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1582","type":"Scatter"},{"attributes":{},"id":"1598","type":"Selection"},{"attributes":{"end":null,"start":null},"id":"1572","type":"Range1d"},{"attributes":{"axis":{"id":"1554"},"dimension":1,"ticker":null},"id":"1557","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1587","type":"Scatter"},{"attributes":{"text":"TinyBERT","x":2.0,"y":93.0},"id":"1585","type":"Label"},{"attributes":{"below":[{"id":"1550"}],"center":[{"id":"1553"},{"id":"1557"},{"id":"1573"},{"id":"1579"},{"id":"1585"}],"left":[{"id":"1554"}],"plot_width":800,"renderers":[{"id":"1577"},{"id":"1583"},{"id":"1589"}],"title":{"id":"1540"},"toolbar":{"id":"1565"},"x_range":{"id":"1572"},"x_scale":{"id":"1546"},"y_range":{"id":"1544"},"y_scale":{"id":"1548"}},"id":"1539","subtype":"Figure","type":"Plot"},{"attributes":{"text":"BERT-base","x":1,"y":92.66},"id":"1573","type":"Label"},{"attributes":{},"id":"1595","type":"BasicTickFormatter"},{"attributes":{},"id":"1548","type":"LinearScale"},{"attributes":{},"id":"1597","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"1564"}},"id":"1560","type":"BoxZoomTool"},{"attributes":{"data":{"x":[1],"y":[92.66]},"selected":{"id":"1598"},"selection_policy":{"id":"1597"}},"id":"1574","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1580"}},"id":"1584","type":"CDSView"},{"attributes":{},"id":"1561","type":"SaveTool"},{"attributes":{},"id":"1600","type":"Selection"},{"attributes":{},"id":"1544","type":"DataRange1d"},{"attributes":{"data":{"x":[1.63],"y":[91.3]},"selected":{"id":"1600"},"selection_policy":{"id":"1599"}},"id":"1580","type":"ColumnDataSource"},{"attributes":{},"id":"1546","type":"LinearScale"},{"attributes":{"data_source":{"id":"1574"},"glyph":{"id":"1575"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1576"},"selection_glyph":null,"view":{"id":"1578"}},"id":"1577","type":"GlyphRenderer"},{"attributes":{"axis_label":"Accuracy","formatter":{"id":"1593"},"ticker":{"id":"1555"}},"id":"1554","type":"LinearAxis"}],"root_ids":["1539"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"5f34a64c-a865-4260-8a41-5b82172b60a0","root_ids":["1539"],"roots":{"1539":"37b51615-a013-4c47-9381-bfeb21f28f4a"}}];
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