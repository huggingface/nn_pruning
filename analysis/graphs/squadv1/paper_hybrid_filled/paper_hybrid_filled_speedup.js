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
    
      
      
    
      var element = document.getElementById("f81f1b76-5481-4094-b4bc-052b80c3c6b7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f81f1b76-5481-4094-b4bc-052b80c3c6b7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c046e87e-aec1-4906-94a8-9823db8cdb6b":{"roots":{"references":[{"attributes":{},"id":"2663","type":"Selection"},{"attributes":{},"id":"2722","type":"Selection"},{"attributes":{"source":{"id":"2674"}},"id":"2678","type":"CDSView"},{"attributes":{},"id":"2780","type":"Selection"},{"attributes":{"data_source":{"id":"2651"},"glyph":{"id":"2652"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2653"},"selection_glyph":null,"view":{"id":"2655"}},"id":"2654","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2676","type":"Line"},{"attributes":{"source":{"id":"2752"}},"id":"2756","type":"CDSView"},{"attributes":{"label":{"value":"Hybrid Filled, large teacher"},"renderers":[{"id":"2677"}]},"id":"2697","type":"LegendItem"},{"attributes":{},"id":"2612","type":"WheelZoomTool"},{"attributes":{},"id":"2779","type":"UnionRenderers"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2699","type":"Line"},{"attributes":{},"id":"2601","type":"LinearScale"},{"attributes":{},"id":"2611","type":"PanTool"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2755"}]},"id":"2781","type":"LegendItem"},{"attributes":{},"id":"2695","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2641","type":"Scatter"},{"attributes":{},"id":"2664","type":"UnionRenderers"},{"attributes":{},"id":"2696","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2617","type":"BoxAnnotation"},{"attributes":{},"id":"2665","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2653","type":"Line"},{"attributes":{"axis":{"id":"2603"},"ticker":null},"id":"2606","type":"Grid"},{"attributes":{},"id":"2662","type":"UnionRenderers"},{"attributes":{"axis":{"id":"2607"},"dimension":1,"ticker":null},"id":"2610","type":"Grid"},{"attributes":{},"id":"2666","type":"UnionRenderers"},{"attributes":{},"id":"2667","type":"Selection"},{"attributes":{"source":{"id":"2640"}},"id":"2644","type":"CDSView"},{"attributes":{"data_source":{"id":"2628"},"glyph":{"id":"2629"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2630"},"selection_glyph":null,"view":{"id":"2632"}},"id":"2631","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2647","type":"Scatter"},{"attributes":{"data":{"x":[1.612951511916643],"y":[90.0]},"selected":{"id":"2669"},"selection_policy":{"id":"2668"}},"id":"2646","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2698"},"glyph":{"id":"2699"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2700"},"selection_glyph":null,"view":{"id":"2702"}},"id":"2701","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2648","type":"Scatter"},{"attributes":{"data_source":{"id":"2646"},"glyph":{"id":"2647"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2648"},"selection_glyph":null,"view":{"id":"2650"}},"id":"2649","type":"GlyphRenderer"},{"attributes":{},"id":"2721","type":"UnionRenderers"},{"attributes":{"data":{"x":[1],"y":[88.5]},"selected":{"id":"2663"},"selection_policy":{"id":"2662"}},"id":"2628","type":"ColumnDataSource"},{"attributes":{},"id":"2750","type":"Selection"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"2654"}]},"id":"2673","type":"LegendItem"},{"attributes":{"data":{"x":[1.550702144203815,1.816892934733715,2.0527490991469155,2.095053330406629,2.3158516160525413,2.6437372826229817],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"2722"},"selection_policy":{"id":"2721"}},"id":"2698","type":"ColumnDataSource"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"2657"},"ticker":{"id":"2604"}},"id":"2603","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2630","type":"Scatter"},{"attributes":{"source":{"id":"2628"}},"id":"2632","type":"CDSView"},{"attributes":{"source":{"id":"2698"}},"id":"2702","type":"CDSView"},{"attributes":{},"id":"2668","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2700","type":"Line"},{"attributes":{},"id":"2669","type":"Selection"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"2701"}]},"id":"2723","type":"LegendItem"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2725","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2636","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2629","type":"Scatter"},{"attributes":{"data_source":{"id":"2634"},"glyph":{"id":"2635"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2636"},"selection_glyph":null,"view":{"id":"2638"}},"id":"2637","type":"GlyphRenderer"},{"attributes":{},"id":"2604","type":"BasicTicker"},{"attributes":{},"id":"2670","type":"UnionRenderers"},{"attributes":{},"id":"2657","type":"BasicTickFormatter"},{"attributes":{},"id":"2671","type":"Selection"},{"attributes":{},"id":"2615","type":"ResetTool"},{"attributes":{"source":{"id":"2646"}},"id":"2650","type":"CDSView"},{"attributes":{"data":{"x":[0.9840340185670864,1.026141974757969,1.095528107464865,1.1632636047982534,1.170038217254783,1.2607211638158147,1.3349999991845345,1.3926143255719736,1.5170581452285046],"y":[90.24019516114679,89.78322305629628,88.66959543954316,88.11360890595924,87.64967103979136,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"2671"},"selection_policy":{"id":"2670"}},"id":"2651","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2651"}},"id":"2655","type":"CDSView"},{"attributes":{},"id":"2614","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2642","type":"Scatter"},{"attributes":{"data_source":{"id":"2640"},"glyph":{"id":"2641"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2642"},"selection_glyph":null,"view":{"id":"2644"}},"id":"2643","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2617"}},"id":"2613","type":"BoxZoomTool"},{"attributes":{},"id":"2616","type":"HelpTool"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"2667"},"selection_policy":{"id":"2666"}},"id":"2640","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2724"},"glyph":{"id":"2725"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2726"},"selection_glyph":null,"view":{"id":"2728"}},"id":"2727","type":"GlyphRenderer"},{"attributes":{"text":"BERT-base","x":1,"y":88.5},"id":"2627","type":"Label"},{"attributes":{},"id":"2659","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[1.9695394330694393,2.1003540884863323,2.1124331270315624,2.227490161916501,2.262663009764823,2.471023235070233,2.61711931355729,2.681246344578876,2.704854439028025,2.860446087610368,2.86191312967017],"y":[88.06903108265608,87.70461789964966,87.48291010744668,87.3881230572442,87.14755939306319,86.74156854566804,86.39441106336629,86.20063710644014,86.11992485005756,85.69020560735045,85.6109462422114]},"selected":{"id":"2780"},"selection_policy":{"id":"2779"}},"id":"2752","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2674"},"glyph":{"id":"2675"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2676"},"selection_glyph":null,"view":{"id":"2678"}},"id":"2677","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"2750"},"selection_policy":{"id":"2749"}},"id":"2724","type":"ColumnDataSource"},{"attributes":{},"id":"2608","type":"BasicTicker"},{"attributes":{"source":{"id":"2724"}},"id":"2728","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2726","type":"Line"},{"attributes":{"axis_label":"F1","formatter":{"id":"2659"},"ticker":{"id":"2608"}},"id":"2607","type":"LinearAxis"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2753","type":"Line"},{"attributes":{"end":3.0,"start":0.85},"id":"2625","type":"Range1d"},{"attributes":{},"id":"2749","type":"UnionRenderers"},{"attributes":{"end":90.75,"start":84.5},"id":"2626","type":"Range1d"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"2727"}]},"id":"2751","type":"LegendItem"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2652","type":"Line"},{"attributes":{"source":{"id":"2634"}},"id":"2638","type":"CDSView"},{"attributes":{"text":"DistilBERT","x":1.63,"y":86.9},"id":"2633","type":"Label"},{"attributes":{"click_policy":"hide","items":[{"id":"2673"},{"id":"2697"},{"id":"2723"},{"id":"2751"},{"id":"2781"}]},"id":"2672","type":"Legend"},{"attributes":{},"id":"2599","type":"LinearScale"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":90.0},"id":"2645","type":"Label"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2611"},{"id":"2612"},{"id":"2613"},{"id":"2614"},{"id":"2615"},{"id":"2616"}]},"id":"2618","type":"Toolbar"},{"attributes":{"below":[{"id":"2603"}],"center":[{"id":"2606"},{"id":"2610"},{"id":"2627"},{"id":"2633"},{"id":"2639"},{"id":"2645"},{"id":"2672"}],"left":[{"id":"2607"}],"plot_width":800,"renderers":[{"id":"2631"},{"id":"2637"},{"id":"2643"},{"id":"2649"},{"id":"2654"},{"id":"2677"},{"id":"2701"},{"id":"2727"},{"id":"2755"}],"title":{"id":"2593"},"toolbar":{"id":"2618"},"x_range":{"id":"2625"},"x_scale":{"id":"2599"},"y_range":{"id":"2626"},"y_scale":{"id":"2601"}},"id":"2592","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"2665"},"selection_policy":{"id":"2664"}},"id":"2634","type":"ColumnDataSource"},{"attributes":{"text":"TinyBERT","x":2.0,"y":87.5},"id":"2639","type":"Label"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"2593","type":"Title"},{"attributes":{"data_source":{"id":"2752"},"glyph":{"id":"2753"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2754"},"selection_glyph":null,"view":{"id":"2756"}},"id":"2755","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.5606414607482133,1.8333442967227587,2.075387764969063,2.306354828560857,2.363378950512201,2.36451559845159,2.6186173775098402],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,88.25975710073095,88.20838283474134,87.15966661496869]},"selected":{"id":"2696"},"selection_policy":{"id":"2695"}},"id":"2674","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2635","type":"Scatter"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2675","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2754","type":"Line"}],"root_ids":["2592"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"c046e87e-aec1-4906-94a8-9823db8cdb6b","root_ids":["2592"],"roots":{"2592":"f81f1b76-5481-4094-b4bc-052b80c3c6b7"}}];
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