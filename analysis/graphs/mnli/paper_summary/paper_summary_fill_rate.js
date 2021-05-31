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
    
      
      
    
      var element = document.getElementById("bddeb16c-9bd7-45f3-ac1c-c03d8c5df2d8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bddeb16c-9bd7-45f3-ac1c-c03d8c5df2d8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b0e3db83-1c1a-40d2-a912-993d5e13c678":{"roots":{"references":[{"attributes":{},"id":"2239","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2277"}]},"id":"2295","type":"LegendItem"},{"attributes":{},"id":"2342","type":"Selection"},{"attributes":{},"id":"2207","type":"BasicTicker"},{"attributes":{"axis":{"id":"2202"},"ticker":null},"id":"2205","type":"Grid"},{"attributes":{},"id":"2343","type":"UnionRenderers"},{"attributes":{},"id":"2241","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2234","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2346","type":"Line"},{"attributes":{"source":{"id":"2274"}},"id":"2278","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2370"},"selection_policy":{"id":"2371"}},"id":"2345","type":"ColumnDataSource"},{"attributes":{},"id":"2215","type":"HelpTool"},{"attributes":{"data_source":{"id":"2345"},"glyph":{"id":"2346"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2347"},"selection_glyph":null,"view":{"id":"2349"}},"id":"2348","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2229","type":"Scatter"},{"attributes":{},"id":"2270","type":"Selection"},{"attributes":{},"id":"2271","type":"UnionRenderers"},{"attributes":{"end":0.75},"id":"2224","type":"Range1d"},{"attributes":{"axis_label":"Density","formatter":{"id":"2241"},"ticker":{"id":"2203"}},"id":"2202","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2347","type":"Line"},{"attributes":{"source":{"id":"2345"}},"id":"2349","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2233","type":"Line"},{"attributes":{"data_source":{"id":"2319"},"glyph":{"id":"2320"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2321"},"selection_glyph":null,"view":{"id":"2323"}},"id":"2322","type":"GlyphRenderer"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"2226","type":"Label"},{"attributes":{},"id":"2272","type":"Selection"},{"attributes":{},"id":"2273","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2245"},"selection_policy":{"id":"2246"}},"id":"2232","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"2243"},"selection_policy":{"id":"2244"}},"id":"2227","type":"ColumnDataSource"},{"attributes":{},"id":"2370","type":"Selection"},{"attributes":{},"id":"2371","type":"UnionRenderers"},{"attributes":{},"id":"2293","type":"Selection"},{"attributes":{},"id":"2200","type":"LinearScale"},{"attributes":{},"id":"2294","type":"UnionRenderers"},{"attributes":{"axis":{"id":"2206"},"dimension":1,"ticker":null},"id":"2209","type":"Grid"},{"attributes":{},"id":"2243","type":"Selection"},{"attributes":{"source":{"id":"2232"}},"id":"2236","type":"CDSView"},{"attributes":{},"id":"2244","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"2248"},{"id":"2295"},{"id":"2344"}],"location":"bottom_right"},"id":"2247","type":"Legend"},{"attributes":{"data_source":{"id":"2274"},"glyph":{"id":"2275"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2276"},"selection_glyph":null,"view":{"id":"2278"}},"id":"2277","type":"GlyphRenderer"},{"attributes":{},"id":"2213","type":"SaveTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2297","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2317"},"selection_policy":{"id":"2318"}},"id":"2296","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2296"},"glyph":{"id":"2297"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2298"},"selection_glyph":null,"view":{"id":"2300"}},"id":"2299","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.34212239583333326,0.2529296875,0.18093532986111116,0.12286603009259256],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"2342"},"selection_policy":{"id":"2343"}},"id":"2319","type":"ColumnDataSource"},{"attributes":{},"id":"2245","type":"Selection"},{"attributes":{"source":{"id":"2319"}},"id":"2323","type":"CDSView"},{"attributes":{},"id":"2246","type":"UnionRenderers"},{"attributes":{},"id":"2214","type":"ResetTool"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2320","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2298","type":"Line"},{"attributes":{},"id":"2198","type":"LinearScale"},{"attributes":{"source":{"id":"2296"}},"id":"2300","type":"CDSView"},{"attributes":{"end":86,"start":79},"id":"2225","type":"Range1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2228","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2216","type":"BoxAnnotation"},{"attributes":{},"id":"2203","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2251","type":"Scatter"},{"attributes":{},"id":"2211","type":"WheelZoomTool"},{"attributes":{"label":{"value":"BERT-base (Matched = 84.6)"},"renderers":[{"id":"2235"},{"id":"2258"},{"id":"2299"},{"id":"2348"}]},"id":"2248","type":"LegendItem"},{"attributes":{"overlay":{"id":"2216"}},"id":"2212","type":"BoxZoomTool"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2272"},"selection_policy":{"id":"2273"}},"id":"2255","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2255"},"glyph":{"id":"2256"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2257"},"selection_glyph":null,"view":{"id":"2259"}},"id":"2258","type":"GlyphRenderer"},{"attributes":{},"id":"2317","type":"Selection"},{"attributes":{"below":[{"id":"2202"}],"center":[{"id":"2205"},{"id":"2209"},{"id":"2226"},{"id":"2247"},{"id":"2249"}],"left":[{"id":"2206"}],"plot_width":800,"renderers":[{"id":"2230"},{"id":"2235"},{"id":"2253"},{"id":"2258"},{"id":"2277"},{"id":"2299"},{"id":"2322"},{"id":"2348"}],"title":null,"toolbar":{"id":"2217"},"x_range":{"id":"2224"},"x_scale":{"id":"2198"},"y_range":{"id":"2225"},"y_scale":{"id":"2200"}},"id":"2192","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2318","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2256","type":"Line"},{"attributes":{"data_source":{"id":"2232"},"glyph":{"id":"2233"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2234"},"selection_glyph":null,"view":{"id":"2236"}},"id":"2235","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"2270"},"selection_policy":{"id":"2271"}},"id":"2250","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2252","type":"Scatter"},{"attributes":{},"id":"2210","type":"PanTool"},{"attributes":{"source":{"id":"2250"}},"id":"2254","type":"CDSView"},{"attributes":{"data_source":{"id":"2250"},"glyph":{"id":"2251"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2252"},"selection_glyph":null,"view":{"id":"2254"}},"id":"2253","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2210"},{"id":"2211"},{"id":"2212"},{"id":"2213"},{"id":"2214"},{"id":"2215"}]},"id":"2217","type":"Toolbar"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"2293"},"selection_policy":{"id":"2294"}},"id":"2274","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2321","type":"Line"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2275","type":"Line"},{"attributes":{"data_source":{"id":"2227"},"glyph":{"id":"2228"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2229"},"selection_glyph":null,"view":{"id":"2231"}},"id":"2230","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"2322"}]},"id":"2344","type":"LegendItem"},{"attributes":{"axis_label":"Matched","formatter":{"id":"2239"},"ticker":{"id":"2207"}},"id":"2206","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2276","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2257","type":"Line"},{"attributes":{"source":{"id":"2255"}},"id":"2259","type":"CDSView"},{"attributes":{"source":{"id":"2227"}},"id":"2231","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"2249","type":"Label"}],"root_ids":["2192"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"b0e3db83-1c1a-40d2-a912-993d5e13c678","root_ids":["2192"],"roots":{"2192":"bddeb16c-9bd7-45f3-ac1c-c03d8c5df2d8"}}];
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