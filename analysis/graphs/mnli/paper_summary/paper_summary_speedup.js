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
    
      
      
    
      var element = document.getElementById("997d2499-a58a-42f8-9e7b-7f23e74bef67");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '997d2499-a58a-42f8-9e7b-7f23e74bef67' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b85a553e-1e06-42ab-9201-a5a4bde8b40c":{"roots":{"references":[{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1055","type":"Line"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{},"id":"1062","type":"BasicTickFormatter"},{"attributes":{"text":"DistilBERT","x":1.63,"y":82.2},"id":"1042","type":"Label"},{"attributes":{},"id":"1071","type":"UnionRenderers"},{"attributes":{"data":{"x":[1],"y":[84.6]},"selected":{"id":"1066"},"selection_policy":{"id":"1065"}},"id":"1037","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1037"}},"id":"1041","type":"CDSView"},{"attributes":{},"id":"1072","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1039","type":"Scatter"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Scatter"},{"attributes":{},"id":"1095","type":"Selection"},{"attributes":{},"id":"1094","type":"UnionRenderers"},{"attributes":{"source":{"id":"1043"}},"id":"1047","type":"CDSView"},{"attributes":{"click_policy":"hide","items":[{"id":"1074"},{"id":"1096"}]},"id":"1073","type":"Legend"},{"attributes":{"data_source":{"id":"1049"},"glyph":{"id":"1050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1051"},"selection_glyph":null,"view":{"id":"1053"}},"id":"1052","type":"GlyphRenderer"},{"attributes":{"end":86,"start":79},"id":"1035","type":"Range1d"},{"attributes":{},"id":"1065","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1037"},"glyph":{"id":"1038"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1039"},"selection_glyph":null,"view":{"id":"1041"}},"id":"1040","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1045","type":"Scatter"},{"attributes":{},"id":"1066","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1044","type":"Scatter"},{"attributes":{"text":"BERT-base","x":1,"y":84.6},"id":"1036","type":"Label"},{"attributes":{"data":{"x":[1.63],"y":[82.2]},"selected":{"id":"1068"},"selection_policy":{"id":"1067"}},"id":"1043","type":"ColumnDataSource"},{"attributes":{"text":"TinyBERT","x":2.0,"y":84.6},"id":"1048","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1051","type":"Scatter"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{"source":{"id":"1049"}},"id":"1053","type":"CDSView"},{"attributes":{"data_source":{"id":"1043"},"glyph":{"id":"1044"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1045"},"selection_glyph":null,"view":{"id":"1047"}},"id":"1046","type":"GlyphRenderer"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"data":{"x":[2.0],"y":[84.6]},"selected":{"id":"1070"},"selection_policy":{"id":"1069"}},"id":"1049","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"1057"}]},"id":"1074","type":"LegendItem"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"},{"id":"1036"},{"id":"1042"},{"id":"1048"},{"id":"1073"}],"left":[{"id":"1016"}],"plot_width":800,"renderers":[{"id":"1040"},{"id":"1046"},{"id":"1052"},{"id":"1057"},{"id":"1078"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"x_range":{"id":"1034"},"x_scale":{"id":"1008"},"y_range":{"id":"1035"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"end":6.0,"start":0.75},"id":"1034","type":"Range1d"},{"attributes":{"data_source":{"id":"1054"},"glyph":{"id":"1055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1056"},"selection_glyph":null,"view":{"id":"1058"}},"id":"1057","type":"GlyphRenderer"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1050","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{},"id":"1067","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{},"id":"1060","type":"BasicTickFormatter"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"1002","type":"Title"},{"attributes":{},"id":"1068","type":"Selection"},{"attributes":{"data_source":{"id":"1075"},"glyph":{"id":"1076"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1077"},"selection_glyph":null,"view":{"id":"1079"}},"id":"1078","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.6100189119596693,1.6185689249184445,1.9387133575906608,2.121598192871819,2.4133000530018203,2.4305344962050333,2.6912592204656125,2.8396374970436784],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"1072"},"selection_policy":{"id":"1071"}},"id":"1054","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1054"}},"id":"1058","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1056","type":"Line"},{"attributes":{"axis_label":"Matched","formatter":{"id":"1060"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1076","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1077","type":"Line"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"1078"}]},"id":"1096","type":"LegendItem"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"axis":{"id":"1012"},"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1062"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{"data":{"x":[1.6071409755568822,1.9283585664636496,2.353099811974791,2.495903279653477],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"1095"},"selection_policy":{"id":"1094"}},"id":"1075","type":"ColumnDataSource"},{"attributes":{},"id":"1069","type":"UnionRenderers"},{"attributes":{},"id":"1070","type":"Selection"},{"attributes":{"source":{"id":"1075"}},"id":"1079","type":"CDSView"},{"attributes":{},"id":"1010","type":"LinearScale"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"b85a553e-1e06-42ab-9201-a5a4bde8b40c","root_ids":["1001"],"roots":{"1001":"997d2499-a58a-42f8-9e7b-7f23e74bef67"}}];
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