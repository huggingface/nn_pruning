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
    
      
      
    
      var element = document.getElementById("cbc92136-fe26-4e3e-b053-ba4b9e0c434e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cbc92136-fe26-4e3e-b053-ba4b9e0c434e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9e841aaa-bc4a-416f-9690-caa3f57b36a6":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1820","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1814","type":"Scatter"},{"attributes":{"axis_label":"Accuracy","formatter":{"id":"1826"},"ticker":{"id":"1788"}},"id":"1787","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1819"},"glyph":{"id":"1820"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1821"},"selection_glyph":null,"view":{"id":"1823"}},"id":"1822","type":"GlyphRenderer"},{"attributes":{"text":"BERT-base","x":1,"y":92.66},"id":"1806","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1821","type":"Scatter"},{"attributes":{"overlay":{"id":"1797"}},"id":"1793","type":"BoxZoomTool"},{"attributes":{"data":{"x":[1.63],"y":[91.3]},"selected":{"id":"1833"},"selection_policy":{"id":"1832"}},"id":"1813","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1819"}},"id":"1823","type":"CDSView"},{"attributes":{},"id":"1795","type":"ResetTool"},{"attributes":{},"id":"1834","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1813"},"glyph":{"id":"1814"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1815"},"selection_glyph":null,"view":{"id":"1817"}},"id":"1816","type":"GlyphRenderer"},{"attributes":{},"id":"1835","type":"Selection"},{"attributes":{},"id":"1784","type":"BasicTicker"},{"attributes":{"end":null,"start":null},"id":"1805","type":"Range1d"},{"attributes":{},"id":"1777","type":"DataRange1d"},{"attributes":{"data":{"x":[2.0],"y":[93.0]},"selected":{"id":"1835"},"selection_policy":{"id":"1834"}},"id":"1819","type":"ColumnDataSource"},{"attributes":{"text":"Accuracy against Speedup (BERT-base reference)"},"id":"1773","type":"Title"},{"attributes":{"data_source":{"id":"1807"},"glyph":{"id":"1808"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1809"},"selection_glyph":null,"view":{"id":"1811"}},"id":"1810","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1807"}},"id":"1811","type":"CDSView"},{"attributes":{"data":{"x":[1],"y":[92.66]},"selected":{"id":"1831"},"selection_policy":{"id":"1830"}},"id":"1807","type":"ColumnDataSource"},{"attributes":{},"id":"1833","type":"Selection"},{"attributes":{},"id":"1791","type":"PanTool"},{"attributes":{},"id":"1781","type":"LinearScale"},{"attributes":{},"id":"1779","type":"LinearScale"},{"attributes":{},"id":"1792","type":"WheelZoomTool"},{"attributes":{},"id":"1796","type":"HelpTool"},{"attributes":{},"id":"1788","type":"BasicTicker"},{"attributes":{"below":[{"id":"1783"}],"center":[{"id":"1786"},{"id":"1790"},{"id":"1806"},{"id":"1812"},{"id":"1818"}],"left":[{"id":"1787"}],"plot_width":800,"renderers":[{"id":"1810"},{"id":"1816"},{"id":"1822"}],"title":{"id":"1773"},"toolbar":{"id":"1798"},"x_range":{"id":"1805"},"x_scale":{"id":"1779"},"y_range":{"id":"1777"},"y_scale":{"id":"1781"}},"id":"1772","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1797","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1808","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1809","type":"Scatter"},{"attributes":{"source":{"id":"1813"}},"id":"1817","type":"CDSView"},{"attributes":{},"id":"1830","type":"UnionRenderers"},{"attributes":{},"id":"1828","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"1787"},"dimension":1,"ticker":null},"id":"1790","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1815","type":"Scatter"},{"attributes":{},"id":"1832","type":"UnionRenderers"},{"attributes":{"text":"DistilBERT","x":1.63,"y":91.3},"id":"1812","type":"Label"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1828"},"ticker":{"id":"1784"}},"id":"1783","type":"LinearAxis"},{"attributes":{},"id":"1794","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1791"},{"id":"1792"},{"id":"1793"},{"id":"1794"},{"id":"1795"},{"id":"1796"}]},"id":"1798","type":"Toolbar"},{"attributes":{"axis":{"id":"1783"},"ticker":null},"id":"1786","type":"Grid"},{"attributes":{"text":"TinyBERT","x":2.0,"y":93.0},"id":"1818","type":"Label"},{"attributes":{},"id":"1826","type":"BasicTickFormatter"},{"attributes":{},"id":"1831","type":"Selection"}],"root_ids":["1772"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"9e841aaa-bc4a-416f-9690-caa3f57b36a6","root_ids":["1772"],"roots":{"1772":"cbc92136-fe26-4e3e-b053-ba4b9e0c434e"}}];
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