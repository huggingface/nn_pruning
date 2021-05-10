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
    
      
      
    
      var element = document.getElementById("78079f20-db19-4a62-b581-411349a29ed3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '78079f20-db19-4a62-b581-411349a29ed3' but no matching script tag was found.")
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
                    
                  var docs_json = '{"20387686-0da8-43f3-8a22-840ec81b4b6d":{"roots":{"references":[{"attributes":{"data":{"x":[1.9695394330694393,2.1003540884863323,2.1124331270315624,2.227490161916501,2.262663009764823,2.471023235070233,2.61711931355729,2.681246344578876,2.704854439028025,2.860446087610368,2.86191312967017],"y":[88.06903108265608,87.70461789964966,87.48291010744668,87.3881230572442,87.14755939306319,86.74156854566804,86.39441106336629,86.20063710644014,86.11992485005756,85.69020560735045,85.6109462422114]},"selected":{"id":"2841"},"selection_policy":{"id":"2840"}},"id":"2814","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2679","type":"BoxAnnotation"},{"attributes":{"data":{"x":[1.5606414607482133,1.8333442967227587,2.075387764969063,2.306354828560857,2.363378950512201,2.36451559845159,2.6186173775098402],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,88.25975710073095,88.20838283474134,87.15966661496869]},"selected":{"id":"2757"},"selection_policy":{"id":"2756"}},"id":"2736","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2786"}},"id":"2790","type":"CDSView"},{"attributes":{"source":{"id":"2736"}},"id":"2740","type":"CDSView"},{"attributes":{"click_policy":"hide","items":[{"id":"2735"},{"id":"2759"},{"id":"2785"},{"id":"2813"},{"id":"2843"}]},"id":"2734","type":"Legend"},{"attributes":{},"id":"2678","type":"HelpTool"},{"attributes":{},"id":"2720","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2673"},{"id":"2674"},{"id":"2675"},{"id":"2676"},{"id":"2677"},{"id":"2678"}]},"id":"2680","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2715","type":"Line"},{"attributes":{"source":{"id":"2713"}},"id":"2717","type":"CDSView"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2737","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2738","type":"Line"},{"attributes":{},"id":"2723","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2814"},"glyph":{"id":"2815"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2816"},"selection_glyph":null,"view":{"id":"2818"}},"id":"2817","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"2716"}]},"id":"2735","type":"LegendItem"},{"attributes":{},"id":"2724","type":"Selection"},{"attributes":{"text":"TinyBERT","x":2.0,"y":87.5},"id":"2701","type":"Label"},{"attributes":{"label":{"value":"Hybrid Filled, large teacher"},"renderers":[{"id":"2739"}]},"id":"2759","type":"LegendItem"},{"attributes":{"data_source":{"id":"2702"},"glyph":{"id":"2703"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2704"},"selection_glyph":null,"view":{"id":"2706"}},"id":"2705","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2761","type":"Line"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"2789"}]},"id":"2813","type":"LegendItem"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2714","type":"Line"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2787","type":"Line"},{"attributes":{"axis":{"id":"2669"},"dimension":1,"ticker":null},"id":"2672","type":"Grid"},{"attributes":{"source":{"id":"2696"}},"id":"2700","type":"CDSView"},{"attributes":{"end":3.0,"start":0.85},"id":"2687","type":"Range1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2709","type":"Scatter"},{"attributes":{"source":{"id":"2690"}},"id":"2694","type":"CDSView"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"2720"},"ticker":{"id":"2666"}},"id":"2665","type":"LinearAxis"},{"attributes":{"data":{"x":[1.612951511916643],"y":[90.0]},"selected":{"id":"2730"},"selection_policy":{"id":"2729"}},"id":"2708","type":"ColumnDataSource"},{"attributes":{},"id":"2756","type":"UnionRenderers"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"2655","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2703","type":"Scatter"},{"attributes":{},"id":"2725","type":"UnionRenderers"},{"attributes":{},"id":"2757","type":"Selection"},{"attributes":{},"id":"2726","type":"Selection"},{"attributes":{},"id":"2677","type":"ResetTool"},{"attributes":{"source":{"id":"2702"}},"id":"2706","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2710","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2697","type":"Scatter"},{"attributes":{"data_source":{"id":"2696"},"glyph":{"id":"2697"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2698"},"selection_glyph":null,"view":{"id":"2700"}},"id":"2699","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"2728"},"selection_policy":{"id":"2727"}},"id":"2702","type":"ColumnDataSource"},{"attributes":{},"id":"2674","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"2760"},"glyph":{"id":"2761"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2762"},"selection_glyph":null,"view":{"id":"2764"}},"id":"2763","type":"GlyphRenderer"},{"attributes":{"end":90.75,"start":84.5},"id":"2688","type":"Range1d"},{"attributes":{"axis_label":"F1","formatter":{"id":"2722"},"ticker":{"id":"2670"}},"id":"2669","type":"LinearAxis"},{"attributes":{"source":{"id":"2814"}},"id":"2818","type":"CDSView"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"2726"},"selection_policy":{"id":"2725"}},"id":"2696","type":"ColumnDataSource"},{"attributes":{},"id":"2727","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2698","type":"Scatter"},{"attributes":{},"id":"2728","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2704","type":"Scatter"},{"attributes":{"data":{"x":[1.550702144203815,1.816892934733715,2.0527490991469155,2.095053330406629,2.3158516160525413,2.6437372826229817],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"2783"},"selection_policy":{"id":"2782"}},"id":"2760","type":"ColumnDataSource"},{"attributes":{},"id":"2811","type":"Selection"},{"attributes":{},"id":"2663","type":"LinearScale"},{"attributes":{},"id":"2722","type":"BasicTickFormatter"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":90.0},"id":"2707","type":"Label"},{"attributes":{"source":{"id":"2760"}},"id":"2764","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2762","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2816","type":"Line"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2817"}]},"id":"2843","type":"LegendItem"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"2763"}]},"id":"2785","type":"LegendItem"},{"attributes":{},"id":"2729","type":"UnionRenderers"},{"attributes":{"below":[{"id":"2665"}],"center":[{"id":"2668"},{"id":"2672"},{"id":"2689"},{"id":"2695"},{"id":"2701"},{"id":"2707"},{"id":"2734"}],"left":[{"id":"2669"}],"plot_width":800,"renderers":[{"id":"2693"},{"id":"2699"},{"id":"2705"},{"id":"2711"},{"id":"2716"},{"id":"2739"},{"id":"2763"},{"id":"2789"},{"id":"2817"}],"title":{"id":"2655"},"toolbar":{"id":"2680"},"x_range":{"id":"2687"},"x_scale":{"id":"2661"},"y_range":{"id":"2688"},"y_scale":{"id":"2663"}},"id":"2654","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2730","type":"Selection"},{"attributes":{"data_source":{"id":"2713"},"glyph":{"id":"2714"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2715"},"selection_glyph":null,"view":{"id":"2717"}},"id":"2716","type":"GlyphRenderer"},{"attributes":{},"id":"2841","type":"Selection"},{"attributes":{},"id":"2676","type":"SaveTool"},{"attributes":{},"id":"2782","type":"UnionRenderers"},{"attributes":{},"id":"2783","type":"Selection"},{"attributes":{},"id":"2810","type":"UnionRenderers"},{"attributes":{},"id":"2666","type":"BasicTicker"},{"attributes":{"overlay":{"id":"2679"}},"id":"2675","type":"BoxZoomTool"},{"attributes":{},"id":"2731","type":"UnionRenderers"},{"attributes":{"source":{"id":"2708"}},"id":"2712","type":"CDSView"},{"attributes":{},"id":"2732","type":"Selection"},{"attributes":{"text":"DistilBERT","x":1.63,"y":86.9},"id":"2695","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2692","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2691","type":"Scatter"},{"attributes":{"data_source":{"id":"2690"},"glyph":{"id":"2691"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2692"},"selection_glyph":null,"view":{"id":"2694"}},"id":"2693","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.9840340185670864,1.026141974757969,1.095528107464865,1.1632636047982534,1.170038217254783,1.2607211638158147,1.3349999991845345,1.3926143255719736,1.5170581452285046],"y":[90.24019516114679,89.78322305629628,88.66959543954316,88.11360890595924,87.64967103979136,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"2732"},"selection_policy":{"id":"2731"}},"id":"2713","type":"ColumnDataSource"},{"attributes":{},"id":"2670","type":"BasicTicker"},{"attributes":{"text":"BERT-base","x":1,"y":88.5},"id":"2689","type":"Label"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"2811"},"selection_policy":{"id":"2810"}},"id":"2786","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1],"y":[88.5]},"selected":{"id":"2724"},"selection_policy":{"id":"2723"}},"id":"2690","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"2665"},"ticker":null},"id":"2668","type":"Grid"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2815","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2788","type":"Line"},{"attributes":{"data_source":{"id":"2708"},"glyph":{"id":"2709"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2710"},"selection_glyph":null,"view":{"id":"2712"}},"id":"2711","type":"GlyphRenderer"},{"attributes":{},"id":"2673","type":"PanTool"},{"attributes":{},"id":"2840","type":"UnionRenderers"},{"attributes":{},"id":"2661","type":"LinearScale"},{"attributes":{"data_source":{"id":"2786"},"glyph":{"id":"2787"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2788"},"selection_glyph":null,"view":{"id":"2790"}},"id":"2789","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2736"},"glyph":{"id":"2737"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2738"},"selection_glyph":null,"view":{"id":"2740"}},"id":"2739","type":"GlyphRenderer"}],"root_ids":["2654"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"20387686-0da8-43f3-8a22-840ec81b4b6d","root_ids":["2654"],"roots":{"2654":"78079f20-db19-4a62-b581-411349a29ed3"}}];
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