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
    
      
      
    
      var element = document.getElementById("b3fe9ecf-bdc8-4346-b300-db9908195785");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b3fe9ecf-bdc8-4346-b300-db9908195785' but no matching script tag was found.")
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
                    
                  var docs_json = '{"805ded24-7a91-477f-8df4-89942c9d370a":{"roots":{"references":[{"attributes":{"data_source":{"id":"2071"},"glyph":{"id":"2072"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2073"},"selection_glyph":null,"view":{"id":"2075"}},"id":"2074","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2331"},"glyph":{"id":"2332"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2333"},"selection_glyph":null,"view":{"id":"2335"}},"id":"2334","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2293"}},"id":"2297","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2259","type":"Line"},{"attributes":{},"id":"2063","type":"BasicTickFormatter"},{"attributes":{},"id":"2185","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2088"},"glyph":{"id":"2089"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2090"},"selection_glyph":null,"view":{"id":"2092"}},"id":"2091","type":"GlyphRenderer"},{"attributes":{},"id":"2186","type":"Selection"},{"attributes":{},"id":"2408","type":"UnionRenderers"},{"attributes":{"source":{"id":"2071"}},"id":"2075","type":"CDSView"},{"attributes":{},"id":"2409","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2260","type":"Line"},{"attributes":{},"id":"2035","type":"SaveTool"},{"attributes":{"source":{"id":"2258"}},"id":"2262","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2294","type":"Line"},{"attributes":{},"id":"2064","type":"UnionRenderers"},{"attributes":{},"id":"2065","type":"Selection"},{"attributes":{"text":"Distilbert","x":0.5034571936567231,"y":82.2},"id":"2048","type":"Label"},{"attributes":{"data_source":{"id":"2194"},"glyph":{"id":"2195"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2196"},"selection_glyph":null,"view":{"id":"2198"}},"id":"2197","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2412","type":"Line"},{"attributes":{"source":{"id":"2189"}},"id":"2193","type":"CDSView"},{"attributes":{},"id":"2290","type":"UnionRenderers"},{"attributes":{},"id":"2291","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2195","type":"Line"},{"attributes":{"data":{"x":[0,0.9],"y":[84.6,84.6]},"selected":{"id":"2223"},"selection_policy":{"id":"2222"}},"id":"2194","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.06458574459876543,0.06432050540123457],"y":[81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.539989811513,79.97962302598064]},"selected":{"id":"2328"},"selection_policy":{"id":"2327"}},"id":"2293","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2413","type":"Line"},{"attributes":{"data_source":{"id":"2225"},"glyph":{"id":"2226"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2227"},"selection_glyph":null,"view":{"id":"2229"}},"id":"2228","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2411"}},"id":"2415","type":"CDSView"},{"attributes":{},"id":"2066","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.9],"y":[82.6,82.6]},"selected":{"id":"2291"},"selection_policy":{"id":"2290"}},"id":"2258","type":"ColumnDataSource"},{"attributes":{},"id":"2067","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2295","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2196","type":"Line"},{"attributes":{"source":{"id":"2194"}},"id":"2198","type":"CDSView"},{"attributes":{},"id":"2037","type":"HelpTool"},{"attributes":{},"id":"2451","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2032"},{"id":"2033"},{"id":"2034"},{"id":"2035"},{"id":"2036"},{"id":"2037"}]},"id":"2039","type":"Toolbar"},{"attributes":{},"id":"2452","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2332","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2072","type":"Line"},{"attributes":{"label":{"value":"Block/struct method, bs= 32x32, v=1, s=b"},"renderers":[{"id":"2296"}]},"id":"2330","type":"LegendItem"},{"attributes":{},"id":"2327","type":"UnionRenderers"},{"attributes":{"text":"Tinybert","x":0.5,"y":84.6},"id":"2107","type":"Label"},{"attributes":{},"id":"2220","type":"UnionRenderers"},{"attributes":{},"id":"2328","type":"Selection"},{"attributes":{},"id":"2221","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2110","type":"Scatter"},{"attributes":{"source":{"id":"2049"}},"id":"2053","type":"CDSView"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"2065"},"selection_policy":{"id":"2064"}},"id":"2049","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2050","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2051","type":"Scatter"},{"attributes":{},"id":"2222","type":"UnionRenderers"},{"attributes":{},"id":"2085","type":"UnionRenderers"},{"attributes":{},"id":"2223","type":"Selection"},{"attributes":{"data_source":{"id":"2054"},"glyph":{"id":"2055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2056"},"selection_glyph":null,"view":{"id":"2058"}},"id":"2057","type":"GlyphRenderer"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"2061"},"ticker":{"id":"2025"}},"id":"2024","type":"LinearAxis"},{"attributes":{"data":{"x":[0,0.9],"y":[84.6,84.6]},"selected":{"id":"2368"},"selection_policy":{"id":"2367"}},"id":"2331","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2049"},"glyph":{"id":"2050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2051"},"selection_glyph":null,"view":{"id":"2053"}},"id":"2052","type":"GlyphRenderer"},{"attributes":{},"id":"2086","type":"Selection"},{"attributes":{"data":{"x":[0,0.9],"y":[83.6,83.6]},"selected":{"id":"2086"},"selection_policy":{"id":"2085"}},"id":"2071","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2371","type":"Line"},{"attributes":{},"id":"2022","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.9],"y":[84.6,84.6]},"selected":{"id":"2067"},"selection_policy":{"id":"2066"}},"id":"2054","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2372","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2055","type":"Line"},{"attributes":{},"id":"2025","type":"BasicTicker"},{"attributes":{"click_policy":"hide","items":[{"id":"2070"},{"id":"2330"}],"location":"top_left"},"id":"2069","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2333","type":"Line"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"2057"},{"id":"2074"},{"id":"2091"},{"id":"2116"},{"id":"2139"},{"id":"2164"},{"id":"2197"},{"id":"2228"},{"id":"2261"},{"id":"2334"},{"id":"2373"},{"id":"2414"}]},"id":"2070","type":"LegendItem"},{"attributes":{"source":{"id":"2331"}},"id":"2335","type":"CDSView"},{"attributes":{"data_source":{"id":"2370"},"glyph":{"id":"2371"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2372"},"selection_glyph":null,"view":{"id":"2374"}},"id":"2373","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2056","type":"Line"},{"attributes":{"source":{"id":"2054"}},"id":"2058","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2109","type":"Scatter"},{"attributes":{"data":{"x":[0,0.9],"y":[83.6,83.6]},"selected":{"id":"2256"},"selection_policy":{"id":"2255"}},"id":"2225","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2089","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2226","type":"Line"},{"attributes":{},"id":"2367","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2073","type":"Line"},{"attributes":{},"id":"2368","type":"Selection"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":84.3},"id":"2188","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2227","type":"Line"},{"attributes":{"source":{"id":"2225"}},"id":"2229","type":"CDSView"},{"attributes":{"data_source":{"id":"2258"},"glyph":{"id":"2259"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2260"},"selection_glyph":null,"view":{"id":"2262"}},"id":"2261","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2090","type":"Line"},{"attributes":{"source":{"id":"2088"}},"id":"2092","type":"CDSView"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"2132"},"selection_policy":{"id":"2131"}},"id":"2108","type":"ColumnDataSource"},{"attributes":{},"id":"2255","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.9],"y":[82.6,82.6]},"selected":{"id":"2452"},"selection_policy":{"id":"2451"}},"id":"2411","type":"ColumnDataSource"},{"attributes":{},"id":"2061","type":"BasicTickFormatter"},{"attributes":{},"id":"2256","type":"Selection"},{"attributes":{"data":{"x":[0,0.9],"y":[83.6,83.6]},"selected":{"id":"2409"},"selection_policy":{"id":"2408"}},"id":"2370","type":"ColumnDataSource"},{"attributes":{},"id":"2104","type":"UnionRenderers"},{"attributes":{},"id":"2105","type":"Selection"},{"attributes":{"source":{"id":"2370"}},"id":"2374","type":"CDSView"},{"attributes":{"data_source":{"id":"2411"},"glyph":{"id":"2412"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2413"},"selection_glyph":null,"view":{"id":"2415"}},"id":"2414","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2114","type":"Line"},{"attributes":{"end":0.9},"id":"2046","type":"Range1d"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[84.3]},"selected":{"id":"2221"},"selection_policy":{"id":"2220"}},"id":"2189","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"2024"}],"center":[{"id":"2027"},{"id":"2031"},{"id":"2048"},{"id":"2069"},{"id":"2107"},{"id":"2188"}],"left":[{"id":"2028"}],"plot_width":800,"renderers":[{"id":"2052"},{"id":"2057"},{"id":"2074"},{"id":"2091"},{"id":"2111"},{"id":"2116"},{"id":"2139"},{"id":"2164"},{"id":"2192"},{"id":"2197"},{"id":"2228"},{"id":"2261"},{"id":"2296"},{"id":"2334"},{"id":"2373"},{"id":"2414"}],"title":{"id":"2014"},"toolbar":{"id":"2039"},"x_range":{"id":"2046"},"x_scale":{"id":"2020"},"y_range":{"id":"2047"},"y_scale":{"id":"2022"}},"id":"2013","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"2108"}},"id":"2112","type":"CDSView"},{"attributes":{"data_source":{"id":"2113"},"glyph":{"id":"2114"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2115"},"selection_glyph":null,"view":{"id":"2117"}},"id":"2116","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2108"},"glyph":{"id":"2109"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2110"},"selection_glyph":null,"view":{"id":"2112"}},"id":"2111","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.9],"y":[84.6,84.6]},"selected":{"id":"2134"},"selection_policy":{"id":"2133"}},"id":"2113","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2191","type":"Scatter"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2137","type":"Line"},{"attributes":{"data_source":{"id":"2136"},"glyph":{"id":"2137"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2138"},"selection_glyph":null,"view":{"id":"2140"}},"id":"2139","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2115","type":"Line"},{"attributes":{"source":{"id":"2113"}},"id":"2117","type":"CDSView"},{"attributes":{},"id":"2131","type":"UnionRenderers"},{"attributes":{},"id":"2132","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2038","type":"BoxAnnotation"},{"attributes":{},"id":"2133","type":"UnionRenderers"},{"attributes":{},"id":"2134","type":"Selection"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"2014","type":"Title"},{"attributes":{"end":86,"start":79},"id":"2047","type":"Range1d"},{"attributes":{},"id":"2033","type":"WheelZoomTool"},{"attributes":{"data":{"x":[0,0.9],"y":[83.6,83.6]},"selected":{"id":"2159"},"selection_policy":{"id":"2158"}},"id":"2136","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2162","type":"Line"},{"attributes":{"data_source":{"id":"2189"},"glyph":{"id":"2190"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2191"},"selection_glyph":null,"view":{"id":"2193"}},"id":"2192","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2161"},"glyph":{"id":"2162"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2163"},"selection_glyph":null,"view":{"id":"2165"}},"id":"2164","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2038"}},"id":"2034","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2138","type":"Line"},{"attributes":{"source":{"id":"2136"}},"id":"2140","type":"CDSView"},{"attributes":{},"id":"2158","type":"UnionRenderers"},{"attributes":{"axis":{"id":"2028"},"dimension":1,"ticker":null},"id":"2031","type":"Grid"},{"attributes":{},"id":"2159","type":"Selection"},{"attributes":{"axis_label":"Matched","formatter":{"id":"2063"},"ticker":{"id":"2029"}},"id":"2028","type":"LinearAxis"},{"attributes":{"data_source":{"id":"2293"},"glyph":{"id":"2294"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2295"},"selection_glyph":null,"view":{"id":"2297"}},"id":"2296","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.9],"y":[82.6,82.6]},"selected":{"id":"2105"},"selection_policy":{"id":"2104"}},"id":"2088","type":"ColumnDataSource"},{"attributes":{},"id":"2029","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2163","type":"Line"},{"attributes":{"axis":{"id":"2024"},"ticker":null},"id":"2027","type":"Grid"},{"attributes":{"data":{"x":[0,0.9],"y":[82.6,82.6]},"selected":{"id":"2186"},"selection_policy":{"id":"2185"}},"id":"2161","type":"ColumnDataSource"},{"attributes":{},"id":"2036","type":"ResetTool"},{"attributes":{},"id":"2032","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2190","type":"Scatter"},{"attributes":{"source":{"id":"2161"}},"id":"2165","type":"CDSView"},{"attributes":{},"id":"2020","type":"LinearScale"}],"root_ids":["2013"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"805ded24-7a91-477f-8df4-89942c9d370a","root_ids":["2013"],"roots":{"2013":"b3fe9ecf-bdc8-4346-b300-db9908195785"}}];
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