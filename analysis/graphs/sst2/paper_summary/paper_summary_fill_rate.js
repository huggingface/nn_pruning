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
    
      
      
    
      var element = document.getElementById("921d8bfc-5891-4f52-a609-f5634069242f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '921d8bfc-5891-4f52-a609-f5634069242f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"fbcc73c7-5952-4c95-a957-64c6c64efe4d":{"roots":{"references":[{"attributes":{},"id":"2156","type":"Selection"},{"attributes":{},"id":"2157","type":"UnionRenderers"},{"attributes":{"end":0.75},"id":"2038","type":"Range1d"},{"attributes":{},"id":"2024","type":"PanTool"},{"attributes":{},"id":"2053","type":"BasicTickFormatter"},{"attributes":{},"id":"2086","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2071","type":"Line"},{"attributes":{},"id":"2087","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2160","type":"Line"},{"attributes":{"axis_label":"Density","formatter":{"id":"2053"},"ticker":{"id":"2017"}},"id":"2016","type":"LinearAxis"},{"attributes":{"data":{"x":[0,0.75],"y":[92.66,92.66]},"selected":{"id":"2184"},"selection_policy":{"id":"2185"}},"id":"2159","type":"ColumnDataSource"},{"attributes":{},"id":"2055","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2159"},"glyph":{"id":"2160"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2161"},"selection_glyph":null,"view":{"id":"2163"}},"id":"2162","type":"GlyphRenderer"},{"attributes":{},"id":"2028","type":"ResetTool"},{"attributes":{"source":{"id":"2069"}},"id":"2073","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2161","type":"Line"},{"attributes":{"data_source":{"id":"2046"},"glyph":{"id":"2047"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2048"},"selection_glyph":null,"view":{"id":"2050"}},"id":"2049","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2159"}},"id":"2163","type":"CDSView"},{"attributes":{},"id":"2012","type":"LinearScale"},{"attributes":{},"id":"2017","type":"BasicTicker"},{"attributes":{},"id":"2021","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2043","type":"Scatter"},{"attributes":{"data_source":{"id":"2110"},"glyph":{"id":"2111"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2112"},"selection_glyph":null,"view":{"id":"2114"}},"id":"2113","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2064"}},"id":"2068","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2111","type":"Line"},{"attributes":{"axis":{"id":"2016"},"ticker":null},"id":"2019","type":"Grid"},{"attributes":{"source":{"id":"2088"}},"id":"2092","type":"CDSView"},{"attributes":{"source":{"id":"2041"}},"id":"2045","type":"CDSView"},{"attributes":{},"id":"2029","type":"HelpTool"},{"attributes":{"overlay":{"id":"2030"}},"id":"2026","type":"BoxZoomTool"},{"attributes":{"label":{"value":"Hybrid w/o teacher"},"renderers":[{"id":"2091"}]},"id":"2109","type":"LegendItem"},{"attributes":{},"id":"2184","type":"Selection"},{"attributes":{},"id":"2185","type":"UnionRenderers"},{"attributes":{},"id":"2057","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2024"},{"id":"2025"},{"id":"2026"},{"id":"2027"},{"id":"2028"},{"id":"2029"}]},"id":"2031","type":"Toolbar"},{"attributes":{},"id":"2107","type":"Selection"},{"attributes":{},"id":"2058","type":"UnionRenderers"},{"attributes":{},"id":"2108","type":"UnionRenderers"},{"attributes":{"text":"Accuracy against Density (BERT-base reference)"},"id":"2006","type":"Title"},{"attributes":{"end":94,"start":86},"id":"2039","type":"Range1d"},{"attributes":{},"id":"2025","type":"WheelZoomTool"},{"attributes":{},"id":"2027","type":"SaveTool"},{"attributes":{"data_source":{"id":"2064"},"glyph":{"id":"2065"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2066"},"selection_glyph":null,"view":{"id":"2068"}},"id":"2067","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.5034,0.2157,0.1372,0.1009,0.0854,0.0589],"y":[91.86,90.6,90.37,89.68,88.42,87.96]},"selected":{"id":"2156"},"selection_policy":{"id":"2157"}},"id":"2133","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2069"},"glyph":{"id":"2070"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2071"},"selection_glyph":null,"view":{"id":"2073"}},"id":"2072","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"2020"},"dimension":1,"ticker":null},"id":"2023","type":"Grid"},{"attributes":{},"id":"2059","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[92.66,92.66]},"selected":{"id":"2131"},"selection_policy":{"id":"2132"}},"id":"2110","type":"ColumnDataSource"},{"attributes":{},"id":"2060","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2133"},"glyph":{"id":"2134"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2135"},"selection_glyph":null,"view":{"id":"2137"}},"id":"2136","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2090","type":"Line"},{"attributes":{"source":{"id":"2133"}},"id":"2137","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2134","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2112","type":"Line"},{"attributes":{"source":{"id":"2110"}},"id":"2114","type":"CDSView"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[91.3]},"selected":{"id":"2057"},"selection_policy":{"id":"2058"}},"id":"2041","type":"ColumnDataSource"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":91.3},"id":"2040","type":"Label"},{"attributes":{"text":"TinyBERT","x":0.5,"y":93.0},"id":"2063","type":"Label"},{"attributes":{"below":[{"id":"2016"}],"center":[{"id":"2019"},{"id":"2023"},{"id":"2040"},{"id":"2061"},{"id":"2063"}],"left":[{"id":"2020"}],"plot_width":800,"renderers":[{"id":"2044"},{"id":"2049"},{"id":"2067"},{"id":"2072"},{"id":"2091"},{"id":"2113"},{"id":"2136"},{"id":"2162"}],"title":{"id":"2006"},"toolbar":{"id":"2031"},"x_range":{"id":"2038"},"x_scale":{"id":"2012"},"y_range":{"id":"2039"},"y_scale":{"id":"2014"}},"id":"2005","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2070","type":"Line"},{"attributes":{},"id":"2131","type":"Selection"},{"attributes":{"label":{"value":"BERT-base (Accuracy = 92.66)"},"renderers":[{"id":"2049"},{"id":"2072"},{"id":"2113"},{"id":"2162"}]},"id":"2062","type":"LegendItem"},{"attributes":{},"id":"2132","type":"UnionRenderers"},{"attributes":{},"id":"2084","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2030","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2065","type":"Scatter"},{"attributes":{"data":{"x":[0.9945999999999999,0.8422,0.8277,0.6301,0.4999,0.2153,0.172,0.1219,0.0865,0.0701],"y":[92.78,92.55,92.2,91.74,90.71,89.79,89.11,88.42,86.81,86.47]},"selected":{"id":"2107"},"selection_policy":{"id":"2108"}},"id":"2088","type":"ColumnDataSource"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2089","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[92.66,92.66]},"selected":{"id":"2086"},"selection_policy":{"id":"2087"}},"id":"2069","type":"ColumnDataSource"},{"attributes":{},"id":"2085","type":"UnionRenderers"},{"attributes":{},"id":"2014","type":"LinearScale"},{"attributes":{"data":{"x":[0.5],"y":[93.0]},"selected":{"id":"2084"},"selection_policy":{"id":"2085"}},"id":"2064","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2066","type":"Scatter"},{"attributes":{"data_source":{"id":"2041"},"glyph":{"id":"2042"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2043"},"selection_glyph":null,"view":{"id":"2045"}},"id":"2044","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2042","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2135","type":"Line"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2136"}]},"id":"2158","type":"LegendItem"},{"attributes":{"source":{"id":"2046"}},"id":"2050","type":"CDSView"},{"attributes":{"axis_label":"Accuracy","formatter":{"id":"2055"},"ticker":{"id":"2021"}},"id":"2020","type":"LinearAxis"},{"attributes":{"data":{"x":[0,0.75],"y":[92.66,92.66]},"selected":{"id":"2059"},"selection_policy":{"id":"2060"}},"id":"2046","type":"ColumnDataSource"},{"attributes":{"click_policy":"hide","items":[{"id":"2062"},{"id":"2109"},{"id":"2158"}],"location":"bottom_right"},"id":"2061","type":"Legend"},{"attributes":{"data_source":{"id":"2088"},"glyph":{"id":"2089"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2090"},"selection_glyph":null,"view":{"id":"2092"}},"id":"2091","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2048","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2047","type":"Line"}],"root_ids":["2005"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"fbcc73c7-5952-4c95-a957-64c6c64efe4d","root_ids":["2005"],"roots":{"2005":"921d8bfc-5891-4f52-a609-f5634069242f"}}];
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