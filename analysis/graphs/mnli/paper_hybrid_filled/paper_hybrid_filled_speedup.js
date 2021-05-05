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
    
      
      
    
      var element = document.getElementById("7db61a53-f66b-4010-a80d-75b640fdc124");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7db61a53-f66b-4010-a80d-75b640fdc124' but no matching script tag was found.")
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
                    
                  var docs_json = '{"109db90d-3aeb-4221-bd7f-372310ffc288":{"roots":{"references":[{"attributes":{},"id":"1921","type":"Selection"},{"attributes":{},"id":"1878","type":"SaveTool"},{"attributes":{"data_source":{"id":"1930"},"glyph":{"id":"1931"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1932"},"selection_glyph":null,"view":{"id":"1934"}},"id":"1933","type":"GlyphRenderer"},{"attributes":{"text":"BERT-base","x":1,"y":84.6},"id":"1891","type":"Label"},{"attributes":{"axis":{"id":"1867"},"ticker":null},"id":"1870","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1875"},{"id":"1876"},{"id":"1877"},{"id":"1878"},{"id":"1879"},{"id":"1880"}]},"id":"1882","type":"Toolbar"},{"attributes":{"data":{"x":[1.6071409755568822,1.9283585664636496,2.353099811974791,2.495903279653477],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"1927"},"selection_policy":{"id":"1926"}},"id":"1909","type":"ColumnDataSource"},{"attributes":{},"id":"1863","type":"LinearScale"},{"attributes":{"data":{"x":[1],"y":[84.6]},"selected":{"id":"1921"},"selection_policy":{"id":"1920"}},"id":"1892","type":"ColumnDataSource"},{"attributes":{},"id":"1926","type":"UnionRenderers"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1931","type":"Line"},{"attributes":{},"id":"1927","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1894","type":"Scatter"},{"attributes":{"data":{"x":[1.6100189119596693,1.6185689249184445,1.9387133575906608,2.121598192871819,2.4133000530018203,2.4305344962050333,2.6912592204656125,2.8396374970436784],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"1950"},"selection_policy":{"id":"1949"}},"id":"1930","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1899","type":"Scatter"},{"attributes":{"source":{"id":"1930"}},"id":"1934","type":"CDSView"},{"attributes":{"axis_label":"Matched","formatter":{"id":"1915"},"ticker":{"id":"1872"}},"id":"1871","type":"LinearAxis"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"1912"}]},"id":"1929","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1932","type":"Line"},{"attributes":{"data_source":{"id":"1892"},"glyph":{"id":"1893"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1894"},"selection_glyph":null,"view":{"id":"1896"}},"id":"1895","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"1881"}},"id":"1877","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1905","type":"Scatter"},{"attributes":{},"id":"1923","type":"Selection"},{"attributes":{"data":{"x":[2.0],"y":[84.6]},"selected":{"id":"1925"},"selection_policy":{"id":"1924"}},"id":"1904","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"1933"}]},"id":"1951","type":"LegendItem"},{"attributes":{"source":{"id":"1904"}},"id":"1908","type":"CDSView"},{"attributes":{},"id":"1875","type":"PanTool"},{"attributes":{},"id":"1876","type":"WheelZoomTool"},{"attributes":{},"id":"1865","type":"LinearScale"},{"attributes":{},"id":"1879","type":"ResetTool"},{"attributes":{"below":[{"id":"1867"}],"center":[{"id":"1870"},{"id":"1874"},{"id":"1891"},{"id":"1897"},{"id":"1903"},{"id":"1928"}],"left":[{"id":"1871"}],"plot_width":800,"renderers":[{"id":"1895"},{"id":"1901"},{"id":"1907"},{"id":"1912"},{"id":"1933"}],"title":{"id":"1857"},"toolbar":{"id":"1882"},"x_range":{"id":"1889"},"x_scale":{"id":"1863"},"y_range":{"id":"1890"},"y_scale":{"id":"1865"}},"id":"1856","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[1.63],"y":[82.2]},"selected":{"id":"1923"},"selection_policy":{"id":"1922"}},"id":"1898","type":"ColumnDataSource"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1910","type":"Line"},{"attributes":{},"id":"1950","type":"Selection"},{"attributes":{},"id":"1872","type":"BasicTicker"},{"attributes":{"source":{"id":"1898"}},"id":"1902","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1911","type":"Line"},{"attributes":{"data_source":{"id":"1909"},"glyph":{"id":"1910"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1911"},"selection_glyph":null,"view":{"id":"1913"}},"id":"1912","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1909"}},"id":"1913","type":"CDSView"},{"attributes":{},"id":"1949","type":"UnionRenderers"},{"attributes":{},"id":"1880","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1881","type":"BoxAnnotation"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1917"},"ticker":{"id":"1868"}},"id":"1867","type":"LinearAxis"},{"attributes":{},"id":"1917","type":"BasicTickFormatter"},{"attributes":{"end":86,"start":79},"id":"1890","type":"Range1d"},{"attributes":{},"id":"1920","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1904"},"glyph":{"id":"1905"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1906"},"selection_glyph":null,"view":{"id":"1908"}},"id":"1907","type":"GlyphRenderer"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"1857","type":"Title"},{"attributes":{},"id":"1915","type":"BasicTickFormatter"},{"attributes":{},"id":"1868","type":"BasicTicker"},{"attributes":{"click_policy":"hide","items":[{"id":"1929"},{"id":"1951"}]},"id":"1928","type":"Legend"},{"attributes":{},"id":"1922","type":"UnionRenderers"},{"attributes":{"text":"DistilBERT","x":1.63,"y":82.2},"id":"1897","type":"Label"},{"attributes":{"data_source":{"id":"1898"},"glyph":{"id":"1899"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1900"},"selection_glyph":null,"view":{"id":"1902"}},"id":"1901","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1900","type":"Scatter"},{"attributes":{},"id":"1924","type":"UnionRenderers"},{"attributes":{"source":{"id":"1892"}},"id":"1896","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":2.0,"y":84.6},"id":"1903","type":"Label"},{"attributes":{},"id":"1925","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1893","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1906","type":"Scatter"},{"attributes":{"axis":{"id":"1871"},"dimension":1,"ticker":null},"id":"1874","type":"Grid"},{"attributes":{"end":6.0,"start":0.75},"id":"1889","type":"Range1d"}],"root_ids":["1856"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"109db90d-3aeb-4221-bd7f-372310ffc288","root_ids":["1856"],"roots":{"1856":"7db61a53-f66b-4010-a80d-75b640fdc124"}}];
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