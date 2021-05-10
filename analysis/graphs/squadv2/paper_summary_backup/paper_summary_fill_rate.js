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
    
      
      
    
      var element = document.getElementById("2375b089-bd88-47f6-ae9c-24011ed12643");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2375b089-bd88-47f6-ae9c-24011ed12643' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1b20a790-2e93-41c7-acb9-554e65a8de1d":{"roots":{"references":[{"attributes":{"data_source":{"id":"2323"},"glyph":{"id":"2324"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2325"},"selection_glyph":null,"view":{"id":"2327"}},"id":"2326","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2254"},{"id":"2255"},{"id":"2256"},{"id":"2257"},{"id":"2258"},{"id":"2259"}]},"id":"2261","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2295","type":"Scatter"},{"attributes":{"source":{"id":"2293"}},"id":"2297","type":"CDSView"},{"attributes":{},"id":"2255","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"2318"},"glyph":{"id":"2319"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2320"},"selection_glyph":null,"view":{"id":"2322"}},"id":"2321","type":"GlyphRenderer"},{"attributes":{},"id":"2254","type":"PanTool"},{"attributes":{},"id":"2396","type":"UnionRenderers"},{"attributes":{},"id":"2240","type":"DataRange1d"},{"attributes":{},"id":"2397","type":"Selection"},{"attributes":{"source":{"id":"2346"}},"id":"2350","type":"CDSView"},{"attributes":{"source":{"id":"2298"}},"id":"2302","type":"CDSView"},{"attributes":{"source":{"id":"2318"}},"id":"2322","type":"CDSView"},{"attributes":{"source":{"id":"2323"}},"id":"2327","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2300","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2325","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2260","type":"BoxAnnotation"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2347","type":"Line"},{"attributes":{"data_source":{"id":"2346"},"glyph":{"id":"2347"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2348"},"selection_glyph":null,"view":{"id":"2350"}},"id":"2349","type":"GlyphRenderer"},{"attributes":{"axis_label":"F1","formatter":{"id":"2283"},"ticker":{"id":"2251"}},"id":"2250","type":"LinearAxis"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2373","type":"Line"},{"attributes":{"source":{"id":"2275"}},"id":"2279","type":"CDSView"},{"attributes":{"data":{"x":[0.34007282021604945,0.32972849151234573,0.3241524402006174,0.3233748070987654,0.251953125,0.24984929591049398,0.18021797839506182,0.17889781057098764],"y":[76.36922308183819,75.58377333824575,75.48730979224833,75.30785179817528,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"2369"},"selection_policy":{"id":"2368"}},"id":"2346","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2320","type":"Scatter"},{"attributes":{},"id":"2257","type":"SaveTool"},{"attributes":{},"id":"2342","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2288"},"selection_policy":{"id":"2287"}},"id":"2275","type":"ColumnDataSource"},{"attributes":{},"id":"2369","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2348","type":"Line"},{"attributes":{},"id":"2251","type":"BasicTicker"},{"attributes":{},"id":"2344","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2276","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2315"},"selection_policy":{"id":"2314"}},"id":"2298","type":"ColumnDataSource"},{"attributes":{},"id":"2247","type":"BasicTicker"},{"attributes":{},"id":"2283","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2299","type":"Line"},{"attributes":{"data_source":{"id":"2298"},"glyph":{"id":"2299"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2300"},"selection_glyph":null,"view":{"id":"2302"}},"id":"2301","type":"GlyphRenderer"},{"attributes":{},"id":"2258","type":"ResetTool"},{"attributes":{"data_source":{"id":"2372"},"glyph":{"id":"2373"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2374"},"selection_glyph":null,"view":{"id":"2376"}},"id":"2375","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2397"},"selection_policy":{"id":"2396"}},"id":"2372","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2271","type":"Scatter"},{"attributes":{},"id":"2242","type":"LinearScale"},{"attributes":{"text":"TinyBERT","x":0.5,"y":77.7},"id":"2292","type":"Label"},{"attributes":{"text":"DistilBERT","x":0.5,"y":68.1776176526635},"id":"2269","type":"Label"},{"attributes":{},"id":"2281","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2372"}},"id":"2376","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2277","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[77.7]},"selected":{"id":"2313"},"selection_policy":{"id":"2312"}},"id":"2293","type":"ColumnDataSource"},{"attributes":{"click_policy":"hide","items":[{"id":"2291"},{"id":"2371"}],"location":"bottom_right"},"id":"2290","type":"Legend"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"2236","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2374","type":"Line"},{"attributes":{"label":{"value":"BERT-base (F1 = 76.7)"},"renderers":[{"id":"2278"},{"id":"2301"},{"id":"2326"},{"id":"2375"}]},"id":"2291","type":"LegendItem"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[79.2]},"selected":{"id":"2342"},"selection_policy":{"id":"2341"}},"id":"2318","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2293"},"glyph":{"id":"2294"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2295"},"selection_glyph":null,"view":{"id":"2297"}},"id":"2296","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2294","type":"Scatter"},{"attributes":{},"id":"2313","type":"Selection"},{"attributes":{"source":{"id":"2270"}},"id":"2274","type":"CDSView"},{"attributes":{"data_source":{"id":"2275"},"glyph":{"id":"2276"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2277"},"selection_glyph":null,"view":{"id":"2279"}},"id":"2278","type":"GlyphRenderer"},{"attributes":{},"id":"2312","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2319","type":"Scatter"},{"attributes":{"below":[{"id":"2246"}],"center":[{"id":"2249"},{"id":"2253"},{"id":"2269"},{"id":"2290"},{"id":"2292"},{"id":"2317"}],"left":[{"id":"2250"}],"plot_width":800,"renderers":[{"id":"2273"},{"id":"2278"},{"id":"2296"},{"id":"2301"},{"id":"2321"},{"id":"2326"},{"id":"2349"},{"id":"2375"}],"title":{"id":"2236"},"toolbar":{"id":"2261"},"x_range":{"id":"2268"},"x_scale":{"id":"2242"},"y_range":{"id":"2240"},"y_scale":{"id":"2244"}},"id":"2235","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2287","type":"UnionRenderers"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":79.2},"id":"2317","type":"Label"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2344"},"selection_policy":{"id":"2343"}},"id":"2323","type":"ColumnDataSource"},{"attributes":{},"id":"2286","type":"Selection"},{"attributes":{"axis":{"id":"2246"},"ticker":null},"id":"2249","type":"Grid"},{"attributes":{"end":0.8},"id":"2268","type":"Range1d"},{"attributes":{},"id":"2285","type":"UnionRenderers"},{"attributes":{},"id":"2315","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2272","type":"Scatter"},{"attributes":{"overlay":{"id":"2260"}},"id":"2256","type":"BoxZoomTool"},{"attributes":{},"id":"2244","type":"LinearScale"},{"attributes":{"data_source":{"id":"2270"},"glyph":{"id":"2271"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2272"},"selection_glyph":null,"view":{"id":"2274"}},"id":"2273","type":"GlyphRenderer"},{"attributes":{"axis_label":"Density","formatter":{"id":"2281"},"ticker":{"id":"2247"}},"id":"2246","type":"LinearAxis"},{"attributes":{},"id":"2341","type":"UnionRenderers"},{"attributes":{"axis":{"id":"2250"},"dimension":1,"ticker":null},"id":"2253","type":"Grid"},{"attributes":{},"id":"2259","type":"HelpTool"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2349"}]},"id":"2371","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2324","type":"Line"},{"attributes":{},"id":"2288","type":"Selection"},{"attributes":{},"id":"2368","type":"UnionRenderers"},{"attributes":{},"id":"2343","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.5],"y":[68.1776176526635]},"selected":{"id":"2286"},"selection_policy":{"id":"2285"}},"id":"2270","type":"ColumnDataSource"},{"attributes":{},"id":"2314","type":"UnionRenderers"}],"root_ids":["2235"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"1b20a790-2e93-41c7-acb9-554e65a8de1d","root_ids":["2235"],"roots":{"2235":"2375b089-bd88-47f6-ae9c-24011ed12643"}}];
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