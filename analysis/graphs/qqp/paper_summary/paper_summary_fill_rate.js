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
    
      
      
    
      var element = document.getElementById("0bcecc90-5318-4a04-87dd-5f4f7d0ed25a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0bcecc90-5318-4a04-87dd-5f4f7d0ed25a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"79eca5c9-a6c9-4157-b5e4-d89704dff21d":{"roots":{"references":[{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2146","type":"Line"},{"attributes":{},"id":"2029","type":"HelpTool"},{"attributes":{"source":{"id":"2122"}},"id":"2126","type":"CDSView"},{"attributes":{"source":{"id":"2145"}},"id":"2149","type":"CDSView"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.12)"},"renderers":[{"id":"2049"},{"id":"2084"},{"id":"2125"},{"id":"2174"}]},"id":"2062","type":"LegendItem"},{"attributes":{},"id":"2143","type":"UnionRenderers"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2064","type":"Line"},{"attributes":{"data_source":{"id":"2081"},"glyph":{"id":"2082"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2083"},"selection_glyph":null,"view":{"id":"2085"}},"id":"2084","type":"GlyphRenderer"},{"attributes":{},"id":"2054","type":"BasicTickFormatter"},{"attributes":{},"id":"2144","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2065","type":"Line"},{"attributes":{"source":{"id":"2063"}},"id":"2067","type":"CDSView"},{"attributes":{},"id":"2014","type":"LinearScale"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2082","type":"Line"},{"attributes":{},"id":"2028","type":"ResetTool"},{"attributes":{"data":{"x":[0,0.75],"y":[88.12,88.12]},"selected":{"id":"2060"},"selection_policy":{"id":"2059"}},"id":"2046","type":"ColumnDataSource"},{"attributes":{},"id":"2052","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"2016"},"ticker":null},"id":"2019","type":"Grid"},{"attributes":{"label":{"value":"Hybrid w/o teacher"},"renderers":[{"id":"2066"}]},"id":"2080","type":"LegendItem"},{"attributes":{},"id":"2027","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2043","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2172","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[88.0]},"selected":{"id":"2058"},"selection_policy":{"id":"2057"}},"id":"2041","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2147","type":"Line"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"2148"}]},"id":"2170","type":"LegendItem"},{"attributes":{"data":{"x":[0.496,0.36,0.1822,0.1132,0.0844,0.0834,0.0747],"y":[88.31,87.87,87.42,86.82,86.43,86.38,86.15]},"selected":{"id":"2120"},"selection_policy":{"id":"2119"}},"id":"2100","type":"ColumnDataSource"},{"attributes":{},"id":"2059","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2171"},"glyph":{"id":"2172"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2173"},"selection_glyph":null,"view":{"id":"2175"}},"id":"2174","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2042","type":"Scatter"},{"attributes":{"data":{"x":[0,0.75],"y":[88.12,88.12]},"selected":{"id":"2099"},"selection_policy":{"id":"2098"}},"id":"2081","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2100"},"glyph":{"id":"2101"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2102"},"selection_glyph":null,"view":{"id":"2104"}},"id":"2103","type":"GlyphRenderer"},{"attributes":{},"id":"2060","type":"Selection"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"2006","type":"Title"},{"attributes":{},"id":"2169","type":"Selection"},{"attributes":{},"id":"2168","type":"UnionRenderers"},{"attributes":{},"id":"2025","type":"WheelZoomTool"},{"attributes":{},"id":"2017","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2083","type":"Line"},{"attributes":{"source":{"id":"2041"}},"id":"2045","type":"CDSView"},{"attributes":{"source":{"id":"2081"}},"id":"2085","type":"CDSView"},{"attributes":{"source":{"id":"2100"}},"id":"2104","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2030","type":"BoxAnnotation"},{"attributes":{},"id":"2098","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[88.12,88.12]},"selected":{"id":"2197"},"selection_policy":{"id":"2196"}},"id":"2171","type":"ColumnDataSource"},{"attributes":{"axis_label":"F1","formatter":{"id":"2054"},"ticker":{"id":"2021"}},"id":"2020","type":"LinearAxis"},{"attributes":{},"id":"2099","type":"Selection"},{"attributes":{},"id":"2024","type":"PanTool"},{"attributes":{},"id":"2012","type":"LinearScale"},{"attributes":{"click_policy":"hide","items":[{"id":"2062"},{"id":"2080"},{"id":"2121"},{"id":"2170"}],"location":"bottom_right"},"id":"2061","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2173","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2047","type":"Line"},{"attributes":{"source":{"id":"2171"}},"id":"2175","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2048","type":"Line"},{"attributes":{"data":{"x":[0.6057,0.282,0.2004,0.1185,0.0662,0.048],"y":[88.13,87.17,87.02,86.27,85.94,85.59]},"selected":{"id":"2079"},"selection_policy":{"id":"2078"}},"id":"2063","type":"ColumnDataSource"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2101","type":"Line"},{"attributes":{"source":{"id":"2046"}},"id":"2050","type":"CDSView"},{"attributes":{"data_source":{"id":"2041"},"glyph":{"id":"2042"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2043"},"selection_glyph":null,"view":{"id":"2045"}},"id":"2044","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2123","type":"Line"},{"attributes":{"data_source":{"id":"2046"},"glyph":{"id":"2047"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2048"},"selection_glyph":null,"view":{"id":"2050"}},"id":"2049","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2016"}],"center":[{"id":"2019"},{"id":"2023"},{"id":"2040"},{"id":"2061"}],"left":[{"id":"2020"}],"plot_width":800,"renderers":[{"id":"2044"},{"id":"2049"},{"id":"2066"},{"id":"2084"},{"id":"2103"},{"id":"2125"},{"id":"2148"},{"id":"2174"}],"title":{"id":"2006"},"toolbar":{"id":"2031"},"x_range":{"id":"2038"},"x_scale":{"id":"2012"},"y_range":{"id":"2039"},"y_scale":{"id":"2014"}},"id":"2005","subtype":"Figure","type":"Plot"},{"attributes":{"text":"TinyBERT","x":0.5,"y":88.0},"id":"2040","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2102","type":"Line"},{"attributes":{"data_source":{"id":"2122"},"glyph":{"id":"2123"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2124"},"selection_glyph":null,"view":{"id":"2126"}},"id":"2125","type":"GlyphRenderer"},{"attributes":{},"id":"2196","type":"UnionRenderers"},{"attributes":{"end":89,"start":85},"id":"2039","type":"Range1d"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2103"}]},"id":"2121","type":"LegendItem"},{"attributes":{},"id":"2079","type":"Selection"},{"attributes":{},"id":"2197","type":"Selection"},{"attributes":{},"id":"2120","type":"Selection"},{"attributes":{"overlay":{"id":"2030"}},"id":"2026","type":"BoxZoomTool"},{"attributes":{},"id":"2021","type":"BasicTicker"},{"attributes":{},"id":"2119","type":"UnionRenderers"},{"attributes":{},"id":"2078","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2063"},"glyph":{"id":"2064"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2065"},"selection_glyph":null,"view":{"id":"2067"}},"id":"2066","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"2020"},"dimension":1,"ticker":null},"id":"2023","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2024"},{"id":"2025"},{"id":"2026"},{"id":"2027"},{"id":"2028"},{"id":"2029"}]},"id":"2031","type":"Toolbar"},{"attributes":{"axis_label":"Density","formatter":{"id":"2052"},"ticker":{"id":"2017"}},"id":"2016","type":"LinearAxis"},{"attributes":{"end":0.75},"id":"2038","type":"Range1d"},{"attributes":{"data":{"x":[0.5411396866835819,0.189394009936974,0.140400543820956,0.109227130042228,0.07148142159828309,0.0514173835720133,0.0392661812553424,0.0315456693725093,0.026190065697198398],"y":[88.5798737068386,87.5633240513973,87.5020913501756,87.1691792294807,86.75933679450671,86.3724377378647,85.94077873630211,85.6267687697686,85.4114217569895]},"selected":{"id":"2169"},"selection_policy":{"id":"2168"}},"id":"2145","type":"ColumnDataSource"},{"attributes":{},"id":"2057","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[88.12,88.12]},"selected":{"id":"2144"},"selection_policy":{"id":"2143"}},"id":"2122","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2145"},"glyph":{"id":"2146"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2147"},"selection_glyph":null,"view":{"id":"2149"}},"id":"2148","type":"GlyphRenderer"},{"attributes":{},"id":"2058","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2124","type":"Line"}],"root_ids":["2005"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"79eca5c9-a6c9-4157-b5e4-d89704dff21d","root_ids":["2005"],"roots":{"2005":"0bcecc90-5318-4a04-87dd-5f4f7d0ed25a"}}];
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