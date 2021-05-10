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
    
      
      
    
      var element = document.getElementById("47f30a9f-354f-4a18-99b4-5a30dba58435");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '47f30a9f-354f-4a18-99b4-5a30dba58435' but no matching script tag was found.")
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
                    
                  var docs_json = '{"dd8a38db-f341-47c9-84cc-bfe27c22aacb":{"roots":{"references":[{"attributes":{},"id":"2419","type":"WheelZoomTool"},{"attributes":{"source":{"id":"2482"}},"id":"2486","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2659","type":"Line"},{"attributes":{"data_source":{"id":"2487"},"glyph":{"id":"2488"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2489"},"selection_glyph":null,"view":{"id":"2491"}},"id":"2490","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2692"},"selection_policy":{"id":"2691"}},"id":"2658","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2453"},"selection_policy":{"id":"2452"}},"id":"2439","type":"ColumnDataSource"},{"attributes":{},"id":"2415","type":"BasicTicker"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2509"},"selection_policy":{"id":"2508"}},"id":"2487","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2482"},"glyph":{"id":"2483"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2484"},"selection_glyph":null,"view":{"id":"2486"}},"id":"2485","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2658"},"glyph":{"id":"2659"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2660"},"selection_glyph":null,"view":{"id":"2662"}},"id":"2661","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2488","type":"Line"},{"attributes":{},"id":"2480","type":"Selection"},{"attributes":{},"id":"2561","type":"UnionRenderers"},{"attributes":{},"id":"2451","type":"Selection"},{"attributes":{"data":{"x":[1.0,0.9114,0.5272,0.37459999999999993,0.2951999999999999,0.25259999999999994],"y":[84.6,84.2,83.7,83.2,82.4,81.5]},"selected":{"id":"2534"},"selection_policy":{"id":"2533"}},"id":"2510","type":"ColumnDataSource"},{"attributes":{},"id":"2479","type":"UnionRenderers"},{"attributes":{},"id":"2562","type":"Selection"},{"attributes":{"label":{"value":"Structured Pruning"},"renderers":[{"id":"2513"}]},"id":"2535","type":"LegendItem"},{"attributes":{"axis_label":"Density","formatter":{"id":"2447"},"ticker":{"id":"2411"}},"id":"2410","type":"LinearAxis"},{"attributes":{"source":{"id":"2510"}},"id":"2514","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2660","type":"Line"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2511","type":"Line"},{"attributes":{"source":{"id":"2658"}},"id":"2662","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2436","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2489","type":"Line"},{"attributes":{"source":{"id":"2487"}},"id":"2491","type":"CDSView"},{"attributes":{"data":{"x":[0.5],"y":[68.1776176526635]},"selected":{"id":"2451"},"selection_policy":{"id":"2450"}},"id":"2434","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2593"},"glyph":{"id":"2594"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2595"},"selection_glyph":null,"view":{"id":"2597"}},"id":"2596","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2439"},"glyph":{"id":"2440"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2441"},"selection_glyph":null,"view":{"id":"2443"}},"id":"2442","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2594","type":"Line"},{"attributes":{},"id":"2478","type":"Selection"},{"attributes":{},"id":"2422","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2435","type":"Scatter"},{"attributes":{},"id":"2477","type":"UnionRenderers"},{"attributes":{},"id":"2691","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2566"}]},"id":"2592","type":"LegendItem"},{"attributes":{},"id":"2692","type":"Selection"},{"attributes":{},"id":"2411","type":"BasicTicker"},{"attributes":{},"id":"2506","type":"UnionRenderers"},{"attributes":{},"id":"2590","type":"UnionRenderers"},{"attributes":{},"id":"2507","type":"Selection"},{"attributes":{},"id":"2421","type":"SaveTool"},{"attributes":{},"id":"2591","type":"Selection"},{"attributes":{"axis":{"id":"2410"},"ticker":null},"id":"2413","type":"Grid"},{"attributes":{},"id":"2404","type":"DataRange1d"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":79.2},"id":"2481","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2459","type":"Scatter"},{"attributes":{},"id":"2508","type":"UnionRenderers"},{"attributes":{},"id":"2453","type":"Selection"},{"attributes":{},"id":"2445","type":"BasicTickFormatter"},{"attributes":{},"id":"2509","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2623"},"selection_policy":{"id":"2622"}},"id":"2593","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5],"y":[77.7]},"selected":{"id":"2478"},"selection_policy":{"id":"2477"}},"id":"2457","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.40983072916666674,0.3211805555555556,0.25958478009259256],"y":[76.9922204715519,75.63264927831169,73.52700323040777]},"selected":{"id":"2656"},"selection_policy":{"id":"2655"}},"id":"2624","type":"ColumnDataSource"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2625","type":"Line"},{"attributes":{"source":{"id":"2624"}},"id":"2628","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2626","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2595","type":"Line"},{"attributes":{"data_source":{"id":"2434"},"glyph":{"id":"2435"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2436"},"selection_glyph":null,"view":{"id":"2438"}},"id":"2437","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2593"}},"id":"2597","type":"CDSView"},{"attributes":{"text":"DistilBERT","x":0.5,"y":68.1776176526635},"id":"2433","type":"Label"},{"attributes":{"text":"TinyBERT","x":0.5,"y":77.7},"id":"2456","type":"Label"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2440","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2537","type":"Line"},{"attributes":{"label":{"value":"BERT-base (F1 = 76.7)"},"renderers":[{"id":"2442"},{"id":"2465"},{"id":"2490"},{"id":"2539"},{"id":"2596"},{"id":"2661"}]},"id":"2455","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2512","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2441","type":"Line"},{"attributes":{"source":{"id":"2439"}},"id":"2443","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2463","type":"Line"},{"attributes":{"data_source":{"id":"2536"},"glyph":{"id":"2537"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2538"},"selection_glyph":null,"view":{"id":"2540"}},"id":"2539","type":"GlyphRenderer"},{"attributes":{},"id":"2622","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2510"},"glyph":{"id":"2511"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2512"},"selection_glyph":null,"view":{"id":"2514"}},"id":"2513","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2424"}},"id":"2420","type":"BoxZoomTool"},{"attributes":{},"id":"2623","type":"Selection"},{"attributes":{"end":0.8},"id":"2432","type":"Range1d"},{"attributes":{"below":[{"id":"2410"}],"center":[{"id":"2413"},{"id":"2417"},{"id":"2433"},{"id":"2454"},{"id":"2456"},{"id":"2481"}],"left":[{"id":"2414"}],"plot_width":800,"renderers":[{"id":"2437"},{"id":"2442"},{"id":"2460"},{"id":"2465"},{"id":"2485"},{"id":"2490"},{"id":"2513"},{"id":"2539"},{"id":"2566"},{"id":"2596"},{"id":"2627"},{"id":"2661"}],"title":{"id":"2400"},"toolbar":{"id":"2425"},"x_range":{"id":"2432"},"x_scale":{"id":"2406"},"y_range":{"id":"2404"},"y_scale":{"id":"2408"}},"id":"2399","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2533","type":"UnionRenderers"},{"attributes":{"source":{"id":"2457"}},"id":"2461","type":"CDSView"},{"attributes":{},"id":"2450","type":"UnionRenderers"},{"attributes":{},"id":"2534","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2418"},{"id":"2419"},{"id":"2420"},{"id":"2421"},{"id":"2422"},{"id":"2423"}]},"id":"2425","type":"Toolbar"},{"attributes":{},"id":"2452","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[79.2]},"selected":{"id":"2507"},"selection_policy":{"id":"2506"}},"id":"2482","type":"ColumnDataSource"},{"attributes":{"click_policy":"hide","items":[{"id":"2455"},{"id":"2535"},{"id":"2592"},{"id":"2657"}],"location":"bottom_right"},"id":"2454","type":"Legend"},{"attributes":{"data_source":{"id":"2624"},"glyph":{"id":"2625"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2626"},"selection_glyph":null,"view":{"id":"2628"}},"id":"2627","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2464","type":"Line"},{"attributes":{"source":{"id":"2434"}},"id":"2438","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2483","type":"Scatter"},{"attributes":{"axis_label":"F1","formatter":{"id":"2445"},"ticker":{"id":"2415"}},"id":"2414","type":"LinearAxis"},{"attributes":{"data":{"x":[0.34007282021604945,0.32972849151234573,0.3241524402006174,0.3233748070987654,0.251953125,0.24984929591049398,0.18021797839506182,0.17889781057098764],"y":[76.36922308183819,75.58377333824575,75.48730979224833,75.30785179817528,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"2591"},"selection_policy":{"id":"2590"}},"id":"2563","type":"ColumnDataSource"},{"attributes":{},"id":"2423","type":"HelpTool"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"2627"}]},"id":"2657","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2458","type":"Scatter"},{"attributes":{},"id":"2447","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2562"},"selection_policy":{"id":"2561"}},"id":"2536","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2563"},"glyph":{"id":"2564"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2565"},"selection_glyph":null,"view":{"id":"2567"}},"id":"2566","type":"GlyphRenderer"},{"attributes":{},"id":"2655","type":"UnionRenderers"},{"attributes":{"source":{"id":"2462"}},"id":"2466","type":"CDSView"},{"attributes":{"axis":{"id":"2414"},"dimension":1,"ticker":null},"id":"2417","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2565","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2424","type":"BoxAnnotation"},{"attributes":{"source":{"id":"2563"}},"id":"2567","type":"CDSView"},{"attributes":{},"id":"2656","type":"Selection"},{"attributes":{},"id":"2418","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2484","type":"Scatter"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"2400","type":"Title"},{"attributes":{"data_source":{"id":"2462"},"glyph":{"id":"2463"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2464"},"selection_glyph":null,"view":{"id":"2466"}},"id":"2465","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2480"},"selection_policy":{"id":"2479"}},"id":"2462","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2538","type":"Line"},{"attributes":{},"id":"2408","type":"LinearScale"},{"attributes":{"data_source":{"id":"2457"},"glyph":{"id":"2458"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2459"},"selection_glyph":null,"view":{"id":"2461"}},"id":"2460","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2536"}},"id":"2540","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2564","type":"Line"},{"attributes":{},"id":"2406","type":"LinearScale"}],"root_ids":["2399"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"dd8a38db-f341-47c9-84cc-bfe27c22aacb","root_ids":["2399"],"roots":{"2399":"47f30a9f-354f-4a18-99b4-5a30dba58435"}}];
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