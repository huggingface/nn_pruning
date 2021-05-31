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
    
      
      
    
      var element = document.getElementById("709af781-510f-4d76-878a-89b744f3c806");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '709af781-510f-4d76-878a-89b744f3c806' but no matching script tag was found.")
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
                    
                  var docs_json = '{"64c0c37e-28d2-4869-9c8e-c536ca09cb6f":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1893","type":"Scatter"},{"attributes":{},"id":"1878","type":"ResetTool"},{"attributes":{"axis":{"id":"1870"},"dimension":1,"ticker":null},"id":"1873","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1898","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1904","type":"Scatter"},{"attributes":{},"id":"1871","type":"BasicTicker"},{"attributes":{},"id":"1922","type":"UnionRenderers"},{"attributes":{},"id":"1925","type":"Selection"},{"attributes":{"end":86,"start":79},"id":"1889","type":"Range1d"},{"attributes":{},"id":"1926","type":"UnionRenderers"},{"attributes":{},"id":"1948","type":"Selection"},{"attributes":{},"id":"1949","type":"UnionRenderers"},{"attributes":{"text":"TinyBERT","x":1.8799112593179124,"y":84.6},"id":"1902","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1892","type":"Scatter"},{"attributes":{"source":{"id":"1897"}},"id":"1901","type":"CDSView"},{"attributes":{},"id":"1867","type":"BasicTicker"},{"attributes":{},"id":"1920","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1897"},"glyph":{"id":"1898"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1899"},"selection_glyph":null,"view":{"id":"1901"}},"id":"1900","type":"GlyphRenderer"},{"attributes":{},"id":"1924","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1903"},"glyph":{"id":"1904"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1905"},"selection_glyph":null,"view":{"id":"1907"}},"id":"1906","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.0609917530867805],"y":[82.2]},"selected":{"id":"1921"},"selection_policy":{"id":"1922"}},"id":"1897","type":"ColumnDataSource"},{"attributes":{"text":"DistilBERT","x":2.0609917530867805,"y":82.2},"id":"1896","type":"Label"},{"attributes":{},"id":"1917","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Matched","formatter":{"id":"1915"},"ticker":{"id":"1871"}},"id":"1870","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1908"},"glyph":{"id":"1909"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1910"},"selection_glyph":null,"view":{"id":"1912"}},"id":"1911","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1866"},"ticker":null},"id":"1869","type":"Grid"},{"attributes":{},"id":"1862","type":"LinearScale"},{"attributes":{},"id":"1875","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1905","type":"Scatter"},{"attributes":{},"id":"1879","type":"HelpTool"},{"attributes":{"click_policy":"hide","items":[{"id":"1928"},{"id":"1950"}]},"id":"1927","type":"Legend"},{"attributes":{"source":{"id":"1891"}},"id":"1895","type":"CDSView"},{"attributes":{},"id":"1877","type":"SaveTool"},{"attributes":{"data_source":{"id":"1929"},"glyph":{"id":"1930"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1931"},"selection_glyph":null,"view":{"id":"1933"}},"id":"1932","type":"GlyphRenderer"},{"attributes":{},"id":"1915","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1899","type":"Scatter"},{"attributes":{},"id":"1864","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1910","type":"Line"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1930","type":"Line"},{"attributes":{"data":{"x":[1.8799112593179124],"y":[84.6]},"selected":{"id":"1923"},"selection_policy":{"id":"1924"}},"id":"1903","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"1911"}]},"id":"1928","type":"LegendItem"},{"attributes":{"data":{"x":[1],"y":[84.6]},"selected":{"id":"1919"},"selection_policy":{"id":"1920"}},"id":"1891","type":"ColumnDataSource"},{"attributes":{},"id":"1919","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1880","type":"BoxAnnotation"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1909","type":"Line"},{"attributes":{"data":{"x":[2.128134836864489,2.139436306864655,2.5626055721055767,2.804344092196828,3.189917755903195,3.2126983696601332,3.5573262273885065,3.753453724447129],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"1948"},"selection_policy":{"id":"1949"}},"id":"1929","type":"ColumnDataSource"},{"attributes":{"end":6.0,"start":0.75},"id":"1888","type":"Range1d"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1917"},"ticker":{"id":"1867"}},"id":"1866","type":"LinearAxis"},{"attributes":{"below":[{"id":"1866"}],"center":[{"id":"1869"},{"id":"1873"},{"id":"1890"},{"id":"1896"},{"id":"1902"},{"id":"1927"}],"left":[{"id":"1870"}],"plot_width":800,"renderers":[{"id":"1894"},{"id":"1900"},{"id":"1906"},{"id":"1911"},{"id":"1932"}],"title":{"id":"1856"},"toolbar":{"id":"1881"},"x_range":{"id":"1888"},"x_scale":{"id":"1862"},"y_range":{"id":"1889"},"y_scale":{"id":"1864"}},"id":"1855","subtype":"Figure","type":"Plot"},{"attributes":{"text":"BERT-base","x":1,"y":84.6},"id":"1890","type":"Label"},{"attributes":{},"id":"1874","type":"PanTool"},{"attributes":{"source":{"id":"1903"}},"id":"1907","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1931","type":"Line"},{"attributes":{"source":{"id":"1929"}},"id":"1933","type":"CDSView"},{"attributes":{},"id":"1923","type":"Selection"},{"attributes":{"overlay":{"id":"1880"}},"id":"1876","type":"BoxZoomTool"},{"attributes":{"source":{"id":"1908"}},"id":"1912","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1874"},{"id":"1875"},{"id":"1876"},{"id":"1877"},{"id":"1878"},{"id":"1879"}]},"id":"1881","type":"Toolbar"},{"attributes":{},"id":"1921","type":"Selection"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"1932"}]},"id":"1950","type":"LegendItem"},{"attributes":{"data":{"x":[2.124330759364805,2.5489185330514665,3.1103446346400894,3.299103308301978],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"1925"},"selection_policy":{"id":"1926"}},"id":"1908","type":"ColumnDataSource"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"1856","type":"Title"},{"attributes":{"data_source":{"id":"1891"},"glyph":{"id":"1892"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1893"},"selection_glyph":null,"view":{"id":"1895"}},"id":"1894","type":"GlyphRenderer"}],"root_ids":["1855"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"64c0c37e-28d2-4869-9c8e-c536ca09cb6f","root_ids":["1855"],"roots":{"1855":"709af781-510f-4d76-878a-89b744f3c806"}}];
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