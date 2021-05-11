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
    
      
      
    
      var element = document.getElementById("244a336a-ecaf-4cbf-a3c9-256956e2f0c9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '244a336a-ecaf-4cbf-a3c9-256956e2f0c9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3454f715-8876-4f0a-ae62-276b6c90c674":{"roots":{"references":[{"attributes":{"click_policy":"hide","items":[{"id":"2623"},{"id":"2703"},{"id":"2760"},{"id":"2825"},{"id":"2898"}],"location":"bottom_right"},"id":"2622","type":"Legend"},{"attributes":{"data_source":{"id":"2630"},"glyph":{"id":"2631"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2632"},"selection_glyph":null,"view":{"id":"2634"}},"id":"2633","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2827","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2609","type":"Line"},{"attributes":{"source":{"id":"2607"}},"id":"2611","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2900","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2647"},"selection_policy":{"id":"2648"}},"id":"2630","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2936"},"selection_policy":{"id":"2937"}},"id":"2899","type":"ColumnDataSource"},{"attributes":{},"id":"2586","type":"PanTool"},{"attributes":{"data_source":{"id":"2899"},"glyph":{"id":"2900"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2901"},"selection_glyph":null,"view":{"id":"2903"}},"id":"2902","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2592"}},"id":"2588","type":"BoxZoomTool"},{"attributes":{},"id":"2790","type":"Selection"},{"attributes":{},"id":"2791","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2901","type":"Line"},{"attributes":{"source":{"id":"2899"}},"id":"2903","type":"CDSView"},{"attributes":{},"id":"2645","type":"Selection"},{"attributes":{},"id":"2646","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2826"},"glyph":{"id":"2827"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2828"},"selection_glyph":null,"view":{"id":"2830"}},"id":"2829","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2792"}},"id":"2796","type":"CDSView"},{"attributes":{},"id":"2587","type":"WheelZoomTool"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"2795"}]},"id":"2825","type":"LegendItem"},{"attributes":{},"id":"2647","type":"Selection"},{"attributes":{},"id":"2936","type":"Selection"},{"attributes":{},"id":"2648","type":"UnionRenderers"},{"attributes":{},"id":"2937","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.5],"y":[68.1776176526635]},"selected":{"id":"2618"},"selection_policy":{"id":"2619"}},"id":"2602","type":"ColumnDataSource"},{"attributes":{},"id":"2823","type":"Selection"},{"attributes":{},"id":"2824","type":"UnionRenderers"},{"attributes":{},"id":"2613","type":"BasicTickFormatter"},{"attributes":{},"id":"2615","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2656","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2676"},"selection_policy":{"id":"2677"}},"id":"2655","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2652","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2794","type":"Line"},{"attributes":{"data_source":{"id":"2655"},"glyph":{"id":"2656"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2657"},"selection_glyph":null,"view":{"id":"2659"}},"id":"2658","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2859"},"selection_policy":{"id":"2860"}},"id":"2826","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2650"}},"id":"2654","type":"CDSView"},{"attributes":{"data":{"x":[0.2417173032407408,0.2396677276234569,0.17903645833333348,0.1781864872685185],"y":[75.7435955094686,75.42311762499034,74.35790789620452,74.07805149116633]},"selected":{"id":"2896"},"selection_policy":{"id":"2897"}},"id":"2861","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2650"},"glyph":{"id":"2651"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2652"},"selection_glyph":null,"view":{"id":"2654"}},"id":"2653","type":"GlyphRenderer"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"2568","type":"Title"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2862","type":"Line"},{"attributes":{"data":{"x":[1.0,0.9114,0.5272,0.37459999999999993,0.2951999999999999,0.25259999999999994],"y":[84.6,84.2,83.7,83.2,82.4,81.5]},"selected":{"id":"2701"},"selection_policy":{"id":"2702"}},"id":"2678","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2861"}},"id":"2865","type":"CDSView"},{"attributes":{},"id":"2618","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2680","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2604","type":"Scatter"},{"attributes":{"source":{"id":"2678"}},"id":"2682","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2828","type":"Line"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2679","type":"Line"},{"attributes":{"source":{"id":"2826"}},"id":"2830","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2657","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2863","type":"Line"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":79.2},"id":"2649","type":"Label"},{"attributes":{"source":{"id":"2655"}},"id":"2659","type":"CDSView"},{"attributes":{"data_source":{"id":"2607"},"glyph":{"id":"2608"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2609"},"selection_glyph":null,"view":{"id":"2611"}},"id":"2610","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"2582"},"dimension":1,"ticker":null},"id":"2585","type":"Grid"},{"attributes":{"data_source":{"id":"2602"},"glyph":{"id":"2603"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2604"},"selection_glyph":null,"view":{"id":"2606"}},"id":"2605","type":"GlyphRenderer"},{"attributes":{},"id":"2590","type":"ResetTool"},{"attributes":{},"id":"2589","type":"SaveTool"},{"attributes":{"axis":{"id":"2578"},"ticker":null},"id":"2581","type":"Grid"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2620"},"selection_policy":{"id":"2621"}},"id":"2607","type":"ColumnDataSource"},{"attributes":{},"id":"2859","type":"Selection"},{"attributes":{},"id":"2860","type":"UnionRenderers"},{"attributes":{},"id":"2674","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2603","type":"Scatter"},{"attributes":{},"id":"2675","type":"UnionRenderers"},{"attributes":{"label":{"value":"BERT-base (F1 = 76.7)"},"renderers":[{"id":"2610"},{"id":"2633"},{"id":"2658"},{"id":"2707"},{"id":"2764"},{"id":"2829"},{"id":"2902"}]},"id":"2623","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2608","type":"Line"},{"attributes":{"below":[{"id":"2578"}],"center":[{"id":"2581"},{"id":"2585"},{"id":"2601"},{"id":"2622"},{"id":"2624"},{"id":"2649"}],"left":[{"id":"2582"}],"plot_width":800,"renderers":[{"id":"2605"},{"id":"2610"},{"id":"2628"},{"id":"2633"},{"id":"2653"},{"id":"2658"},{"id":"2681"},{"id":"2707"},{"id":"2734"},{"id":"2764"},{"id":"2795"},{"id":"2829"},{"id":"2864"},{"id":"2902"}],"title":{"id":"2568"},"toolbar":{"id":"2593"},"x_range":{"id":"2600"},"x_scale":{"id":"2574"},"y_range":{"id":"2572"},"y_scale":{"id":"2576"}},"id":"2567","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[79.2]},"selected":{"id":"2674"},"selection_policy":{"id":"2675"}},"id":"2650","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2631","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[77.7]},"selected":{"id":"2645"},"selection_policy":{"id":"2646"}},"id":"2625","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2602"}},"id":"2606","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2627","type":"Scatter"},{"attributes":{"text":"DistilBERT","x":0.5,"y":68.1776176526635},"id":"2601","type":"Label"},{"attributes":{"source":{"id":"2625"}},"id":"2629","type":"CDSView"},{"attributes":{"data_source":{"id":"2625"},"glyph":{"id":"2626"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2627"},"selection_glyph":null,"view":{"id":"2629"}},"id":"2628","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"2864"}]},"id":"2898","type":"LegendItem"},{"attributes":{"data_source":{"id":"2678"},"glyph":{"id":"2679"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2680"},"selection_glyph":null,"view":{"id":"2682"}},"id":"2681","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2626","type":"Scatter"},{"attributes":{"data_source":{"id":"2792"},"glyph":{"id":"2793"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2794"},"selection_glyph":null,"view":{"id":"2796"}},"id":"2795","type":"GlyphRenderer"},{"attributes":{},"id":"2676","type":"Selection"},{"attributes":{"text":"TinyBERT","x":0.5,"y":77.7},"id":"2624","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2651","type":"Scatter"},{"attributes":{},"id":"2677","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2861"},"glyph":{"id":"2862"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2863"},"selection_glyph":null,"view":{"id":"2865"}},"id":"2864","type":"GlyphRenderer"},{"attributes":{},"id":"2896","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2632","type":"Line"},{"attributes":{"axis_label":"Density","formatter":{"id":"2613"},"ticker":{"id":"2579"}},"id":"2578","type":"LinearAxis"},{"attributes":{},"id":"2897","type":"UnionRenderers"},{"attributes":{"source":{"id":"2630"}},"id":"2634","type":"CDSView"},{"attributes":{},"id":"2576","type":"LinearScale"},{"attributes":{},"id":"2572","type":"DataRange1d"},{"attributes":{"label":{"value":"Structured Pruning"},"renderers":[{"id":"2681"}]},"id":"2703","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2705","type":"Line"},{"attributes":{"data_source":{"id":"2704"},"glyph":{"id":"2705"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2706"},"selection_glyph":null,"view":{"id":"2708"}},"id":"2707","type":"GlyphRenderer"},{"attributes":{},"id":"2583","type":"BasicTicker"},{"attributes":{},"id":"2701","type":"Selection"},{"attributes":{},"id":"2702","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.34007282021604945,0.32972849151234573,0.3241524402006174,0.3233748070987654,0.251953125,0.24984929591049398,0.18021797839506182,0.17889781057098764],"y":[76.36922308183819,75.58377333824575,75.48730979224833,75.30785179817528,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"2758"},"selection_policy":{"id":"2759"}},"id":"2731","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2729"},"selection_policy":{"id":"2730"}},"id":"2704","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2731"},"glyph":{"id":"2732"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2733"},"selection_glyph":null,"view":{"id":"2735"}},"id":"2734","type":"GlyphRenderer"},{"attributes":{},"id":"2574","type":"LinearScale"},{"attributes":{"source":{"id":"2731"}},"id":"2735","type":"CDSView"},{"attributes":{},"id":"2579","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2706","type":"Line"},{"attributes":{},"id":"2619","type":"UnionRenderers"},{"attributes":{"source":{"id":"2704"}},"id":"2708","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2732","type":"Line"},{"attributes":{},"id":"2591","type":"HelpTool"},{"attributes":{},"id":"2620","type":"Selection"},{"attributes":{},"id":"2729","type":"Selection"},{"attributes":{"axis_label":"F1","formatter":{"id":"2615"},"ticker":{"id":"2583"}},"id":"2582","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2592","type":"BoxAnnotation"},{"attributes":{},"id":"2730","type":"UnionRenderers"},{"attributes":{},"id":"2621","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2762","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2733","type":"Line"},{"attributes":{"data_source":{"id":"2761"},"glyph":{"id":"2762"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2763"},"selection_glyph":null,"view":{"id":"2765"}},"id":"2764","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2734"}]},"id":"2760","type":"LegendItem"},{"attributes":{},"id":"2758","type":"Selection"},{"attributes":{},"id":"2759","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"2790"},"selection_policy":{"id":"2791"}},"id":"2761","type":"ColumnDataSource"},{"attributes":{"end":0.8},"id":"2600","type":"Range1d"},{"attributes":{"data":{"x":[0.40983072916666674,0.3211805555555556,0.25958478009259256],"y":[76.9922204715519,75.63264927831169,75.19978410639239]},"selected":{"id":"2823"},"selection_policy":{"id":"2824"}},"id":"2792","type":"ColumnDataSource"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2793","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2586"},{"id":"2587"},{"id":"2588"},{"id":"2589"},{"id":"2590"},{"id":"2591"}]},"id":"2593","type":"Toolbar"},{"attributes":{"source":{"id":"2761"}},"id":"2765","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2763","type":"Line"}],"root_ids":["2567"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"3454f715-8876-4f0a-ae62-276b6c90c674","root_ids":["2567"],"roots":{"2567":"244a336a-ecaf-4cbf-a3c9-256956e2f0c9"}}];
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