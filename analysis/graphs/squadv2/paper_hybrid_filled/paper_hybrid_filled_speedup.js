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
    
      
      
    
      var element = document.getElementById("45d7118e-e783-4e10-8ea3-5280bab1c598");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '45d7118e-e783-4e10-8ea3-5280bab1c598' but no matching script tag was found.")
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
                    
                  var docs_json = '{"97919417-6009-46c1-a9c1-8640cbcd11f5":{"roots":{"references":[{"attributes":{"data":{"x":[2.0],"y":[77.7]},"selected":{"id":"2208"},"selection_policy":{"id":"2209"}},"id":"2182","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2178","type":"Scatter"},{"attributes":{},"id":"2144","type":"LinearScale"},{"attributes":{},"id":"2199","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2184","type":"Scatter"},{"attributes":{},"id":"2201","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2176"}},"id":"2180","type":"CDSView"},{"attributes":{"data":{"x":[1.6886187887920359,1.6886329110139469,1.9668482355381207,1.967623348426169,2.2138561278822038,2.21478049486557],"y":[76.9922204715519,76.41332910789964,75.63264927831169,75.41825183851692,75.19978410639239,74.99644635560065]},"selected":{"id":"2237"},"selection_policy":{"id":"2238"}},"id":"2216","type":"ColumnDataSource"},{"attributes":{},"id":"2140","type":"DataRange1d"},{"attributes":{"source":{"id":"2216"}},"id":"2220","type":"CDSView"},{"attributes":{"overlay":{"id":"2160"}},"id":"2156","type":"BoxZoomTool"},{"attributes":{},"id":"2142","type":"LinearScale"},{"attributes":{},"id":"2204","type":"Selection"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2217","type":"Line"},{"attributes":{},"id":"2205","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2218","type":"Line"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"2219"}]},"id":"2239","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2189","type":"Scatter"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":79.2},"id":"2187","type":"Label"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2241","type":"Line"},{"attributes":{"source":{"id":"2170"}},"id":"2174","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":2.0,"y":77.7},"id":"2181","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2177","type":"Scatter"},{"attributes":{"data":{"x":[1.63],"y":[68.1776176526635]},"selected":{"id":"2206"},"selection_policy":{"id":"2207"}},"id":"2176","type":"ColumnDataSource"},{"attributes":{},"id":"2157","type":"SaveTool"},{"attributes":{"data_source":{"id":"2176"},"glyph":{"id":"2177"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2178"},"selection_glyph":null,"view":{"id":"2180"}},"id":"2179","type":"GlyphRenderer"},{"attributes":{},"id":"2206","type":"Selection"},{"attributes":{},"id":"2207","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2183","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2190","type":"Scatter"},{"attributes":{"data":{"x":[1.612951511916643],"y":[79.2]},"selected":{"id":"2210"},"selection_policy":{"id":"2211"}},"id":"2188","type":"ColumnDataSource"},{"attributes":{},"id":"2237","type":"Selection"},{"attributes":{"data_source":{"id":"2170"},"glyph":{"id":"2171"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2172"},"selection_glyph":null,"view":{"id":"2174"}},"id":"2173","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2182"}},"id":"2186","type":"CDSView"},{"attributes":{},"id":"2238","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2182"},"glyph":{"id":"2183"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2184"},"selection_glyph":null,"view":{"id":"2186"}},"id":"2185","type":"GlyphRenderer"},{"attributes":{},"id":"2158","type":"ResetTool"},{"attributes":{"data_source":{"id":"2193"},"glyph":{"id":"2194"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2195"},"selection_glyph":null,"view":{"id":"2197"}},"id":"2196","type":"GlyphRenderer"},{"attributes":{"end":3.0,"start":0.85},"id":"2168","type":"Range1d"},{"attributes":{},"id":"2208","type":"Selection"},{"attributes":{"text":"DistilBERT","x":1.63,"y":68.1776176526635},"id":"2175","type":"Label"},{"attributes":{},"id":"2209","type":"UnionRenderers"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2194","type":"Line"},{"attributes":{"data_source":{"id":"2240"},"glyph":{"id":"2241"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2242"},"selection_glyph":null,"view":{"id":"2244"}},"id":"2243","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2188"}},"id":"2192","type":"CDSView"},{"attributes":{"data_source":{"id":"2188"},"glyph":{"id":"2189"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2190"},"selection_glyph":null,"view":{"id":"2192"}},"id":"2191","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9743856139999647,2.1827364771962623,2.2119705358002966],"y":[75.7435955094686,74.35790789620452,74.07805149116633]},"selected":{"id":"2212"},"selection_policy":{"id":"2213"}},"id":"2193","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"2196"}]},"id":"2215","type":"LegendItem"},{"attributes":{"data":{"x":[1.6923735326861915,1.7148910932524941,1.984995220235696,1.9886235329515656,2.189942994396503,2.2280218111235897],"y":[76.36922308183819,75.58377333824575,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"2263"},"selection_policy":{"id":"2264"}},"id":"2240","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1],"y":[76.7]},"selected":{"id":"2204"},"selection_policy":{"id":"2205"}},"id":"2170","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2193"}},"id":"2197","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2171","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2195","type":"Line"},{"attributes":{"source":{"id":"2240"}},"id":"2244","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2242","type":"Line"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2243"}]},"id":"2265","type":"LegendItem"},{"attributes":{},"id":"2210","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"2215"},{"id":"2239"},{"id":"2265"}]},"id":"2214","type":"Legend"},{"attributes":{},"id":"2211","type":"UnionRenderers"},{"attributes":{},"id":"2155","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2172","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2160","type":"BoxAnnotation"},{"attributes":{},"id":"2263","type":"Selection"},{"attributes":{},"id":"2212","type":"Selection"},{"attributes":{},"id":"2264","type":"UnionRenderers"},{"attributes":{"below":[{"id":"2146"}],"center":[{"id":"2149"},{"id":"2153"},{"id":"2169"},{"id":"2175"},{"id":"2181"},{"id":"2187"},{"id":"2214"}],"left":[{"id":"2150"}],"plot_width":800,"renderers":[{"id":"2173"},{"id":"2179"},{"id":"2185"},{"id":"2191"},{"id":"2196"},{"id":"2219"},{"id":"2243"}],"title":{"id":"2136"},"toolbar":{"id":"2161"},"x_range":{"id":"2168"},"x_scale":{"id":"2142"},"y_range":{"id":"2140"},"y_scale":{"id":"2144"}},"id":"2135","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2213","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2154"},{"id":"2155"},{"id":"2156"},{"id":"2157"},{"id":"2158"},{"id":"2159"}]},"id":"2161","type":"Toolbar"},{"attributes":{"data_source":{"id":"2216"},"glyph":{"id":"2217"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2218"},"selection_glyph":null,"view":{"id":"2220"}},"id":"2219","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"2146"},"ticker":null},"id":"2149","type":"Grid"},{"attributes":{"axis":{"id":"2150"},"dimension":1,"ticker":null},"id":"2153","type":"Grid"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"2136","type":"Title"},{"attributes":{},"id":"2151","type":"BasicTicker"},{"attributes":{"axis_label":"F1","formatter":{"id":"2201"},"ticker":{"id":"2151"}},"id":"2150","type":"LinearAxis"},{"attributes":{},"id":"2159","type":"HelpTool"},{"attributes":{"text":"BERT-base","x":1,"y":76.7},"id":"2169","type":"Label"},{"attributes":{},"id":"2154","type":"PanTool"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"2199"},"ticker":{"id":"2147"}},"id":"2146","type":"LinearAxis"},{"attributes":{},"id":"2147","type":"BasicTicker"}],"root_ids":["2135"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"97919417-6009-46c1-a9c1-8640cbcd11f5","root_ids":["2135"],"roots":{"2135":"45d7118e-e783-4e10-8ea3-5280bab1c598"}}];
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