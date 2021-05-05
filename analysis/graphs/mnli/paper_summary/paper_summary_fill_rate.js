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
    
      
      
    
      var element = document.getElementById("accacfa9-d94e-4b9e-86bc-ef0492064ce3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'accacfa9-d94e-4b9e-86bc-ef0492064ce3' but no matching script tag was found.")
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
                    
                  var docs_json = '{"18af1cd8-0dc2-4571-bb52-14210a6c3fa8":{"roots":{"references":[{"attributes":{},"id":"2275","type":"Selection"},{"attributes":{"source":{"id":"2229"}},"id":"2233","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2348","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2373"},"selection_policy":{"id":"2372"}},"id":"2347","type":"ColumnDataSource"},{"attributes":{},"id":"2246","type":"Selection"},{"attributes":{"axis":{"id":"2208"},"dimension":1,"ticker":null},"id":"2211","type":"Grid"},{"attributes":{"data_source":{"id":"2347"},"glyph":{"id":"2348"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2349"},"selection_glyph":null,"view":{"id":"2351"}},"id":"2350","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2252"}},"id":"2256","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2349","type":"Line"},{"attributes":{"source":{"id":"2347"}},"id":"2351","type":"CDSView"},{"attributes":{"source":{"id":"2234"}},"id":"2238","type":"CDSView"},{"attributes":{},"id":"2217","type":"HelpTool"},{"attributes":{"data_source":{"id":"2298"},"glyph":{"id":"2299"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2300"},"selection_glyph":null,"view":{"id":"2302"}},"id":"2301","type":"GlyphRenderer"},{"attributes":{},"id":"2216","type":"ResetTool"},{"attributes":{"axis_label":"Density","formatter":{"id":"2242"},"ticker":{"id":"2205"}},"id":"2204","type":"LinearAxis"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2299","type":"Line"},{"attributes":{},"id":"2245","type":"UnionRenderers"},{"attributes":{"source":{"id":"2276"}},"id":"2280","type":"CDSView"},{"attributes":{},"id":"2373","type":"Selection"},{"attributes":{},"id":"2209","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2253","type":"Scatter"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2279"}]},"id":"2297","type":"LegendItem"},{"attributes":{},"id":"2372","type":"UnionRenderers"},{"attributes":{},"id":"2296","type":"Selection"},{"attributes":{},"id":"2202","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2212"},{"id":"2213"},{"id":"2214"},{"id":"2215"},{"id":"2216"},{"id":"2217"}]},"id":"2219","type":"Toolbar"},{"attributes":{},"id":"2295","type":"UnionRenderers"},{"attributes":{"axis_label":"Matched","formatter":{"id":"2240"},"ticker":{"id":"2209"}},"id":"2208","type":"LinearAxis"},{"attributes":{"end":86,"start":79},"id":"2227","type":"Range1d"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2248"},"selection_policy":{"id":"2247"}},"id":"2234","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"2273"},"selection_policy":{"id":"2272"}},"id":"2252","type":"ColumnDataSource"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"2228","type":"Label"},{"attributes":{"data_source":{"id":"2257"},"glyph":{"id":"2258"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2259"},"selection_glyph":null,"view":{"id":"2261"}},"id":"2260","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2258","type":"Line"},{"attributes":{"data":{"x":[0.34212239583333326,0.2529296875,0.18093532986111116,0.12286603009259256],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"2345"},"selection_policy":{"id":"2344"}},"id":"2321","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2234"},"glyph":{"id":"2235"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2236"},"selection_glyph":null,"view":{"id":"2238"}},"id":"2237","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2320"},"selection_policy":{"id":"2319"}},"id":"2298","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2321"},"glyph":{"id":"2322"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2323"},"selection_glyph":null,"view":{"id":"2325"}},"id":"2324","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2254","type":"Scatter"},{"attributes":{},"id":"2212","type":"PanTool"},{"attributes":{"data_source":{"id":"2252"},"glyph":{"id":"2253"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2254"},"selection_glyph":null,"view":{"id":"2256"}},"id":"2255","type":"GlyphRenderer"},{"attributes":{"click_policy":"hide","items":[{"id":"2250"},{"id":"2297"},{"id":"2346"}],"location":"bottom_right"},"id":"2249","type":"Legend"},{"attributes":{},"id":"2200","type":"LinearScale"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"2324"}]},"id":"2346","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2275"},"selection_policy":{"id":"2274"}},"id":"2257","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"2296"},"selection_policy":{"id":"2295"}},"id":"2276","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2321"}},"id":"2325","type":"CDSView"},{"attributes":{"below":[{"id":"2204"}],"center":[{"id":"2207"},{"id":"2211"},{"id":"2228"},{"id":"2249"},{"id":"2251"}],"left":[{"id":"2208"}],"plot_width":800,"renderers":[{"id":"2232"},{"id":"2237"},{"id":"2255"},{"id":"2260"},{"id":"2279"},{"id":"2301"},{"id":"2324"},{"id":"2350"}],"title":{"id":"2194"},"toolbar":{"id":"2219"},"x_range":{"id":"2226"},"x_scale":{"id":"2200"},"y_range":{"id":"2227"},"y_scale":{"id":"2202"}},"id":"2193","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"2218"}},"id":"2214","type":"BoxZoomTool"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2322","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2300","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2278","type":"Line"},{"attributes":{"source":{"id":"2298"}},"id":"2302","type":"CDSView"},{"attributes":{},"id":"2213","type":"WheelZoomTool"},{"attributes":{},"id":"2205","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2259","type":"Line"},{"attributes":{"source":{"id":"2257"}},"id":"2261","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2235","type":"Line"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2277","type":"Line"},{"attributes":{},"id":"2215","type":"SaveTool"},{"attributes":{},"id":"2320","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2236","type":"Line"},{"attributes":{},"id":"2319","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2276"},"glyph":{"id":"2277"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2278"},"selection_glyph":null,"view":{"id":"2280"}},"id":"2279","type":"GlyphRenderer"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"2251","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2230","type":"Scatter"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"2246"},"selection_policy":{"id":"2245"}},"id":"2229","type":"ColumnDataSource"},{"attributes":{},"id":"2273","type":"Selection"},{"attributes":{"data_source":{"id":"2229"},"glyph":{"id":"2230"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2231"},"selection_glyph":null,"view":{"id":"2233"}},"id":"2232","type":"GlyphRenderer"},{"attributes":{},"id":"2272","type":"UnionRenderers"},{"attributes":{},"id":"2240","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2323","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2231","type":"Scatter"},{"attributes":{"end":0.75},"id":"2226","type":"Range1d"},{"attributes":{},"id":"2242","type":"BasicTickFormatter"},{"attributes":{},"id":"2274","type":"UnionRenderers"},{"attributes":{},"id":"2345","type":"Selection"},{"attributes":{"text":"Matched against Density (BERT-base reference)"},"id":"2194","type":"Title"},{"attributes":{},"id":"2344","type":"UnionRenderers"},{"attributes":{},"id":"2248","type":"Selection"},{"attributes":{},"id":"2247","type":"UnionRenderers"},{"attributes":{"label":{"value":"BERT-base (Matched = 84.6)"},"renderers":[{"id":"2237"},{"id":"2260"},{"id":"2301"},{"id":"2350"}]},"id":"2250","type":"LegendItem"},{"attributes":{"axis":{"id":"2204"},"ticker":null},"id":"2207","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2218","type":"BoxAnnotation"}],"root_ids":["2193"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"18af1cd8-0dc2-4571-bb52-14210a6c3fa8","root_ids":["2193"],"roots":{"2193":"accacfa9-d94e-4b9e-86bc-ef0492064ce3"}}];
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