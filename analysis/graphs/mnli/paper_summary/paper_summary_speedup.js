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
    
      
      
    
      var element = document.getElementById("701ff71f-7c40-4524-8ffa-c53b0a963a78");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '701ff71f-7c40-4524-8ffa-c53b0a963a78' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6a1b6e25-d444-4e47-b5aa-7c41603efdcf":{"roots":{"references":[{"attributes":{"axis":{"id":"1011"},"ticker":null},"id":"1014","type":"Grid"},{"attributes":{"end":86,"start":79},"id":"1034","type":"Range1d"},{"attributes":{"end":6.0,"start":0.75},"id":"1033","type":"Range1d"},{"attributes":{},"id":"1064","type":"Selection"},{"attributes":{"data":{"x":[1],"y":[84.6]},"selected":{"id":"1064"},"selection_policy":{"id":"1065"}},"id":"1036","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1053"},"glyph":{"id":"1054"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1055"},"selection_glyph":null,"view":{"id":"1057"}},"id":"1056","type":"GlyphRenderer"},{"attributes":{},"id":"1062","type":"BasicTickFormatter"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1054","type":"Line"},{"attributes":{},"id":"1065","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1050","type":"Scatter"},{"attributes":{"data":{"x":[1.8799112593179124],"y":[84.6]},"selected":{"id":"1068"},"selection_policy":{"id":"1069"}},"id":"1048","type":"ColumnDataSource"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1062"},"ticker":{"id":"1012"}},"id":"1011","type":"LinearAxis"},{"attributes":{},"id":"1022","type":"SaveTool"},{"attributes":{"text":"TinyBERT","x":1.8799112593179124,"y":84.6},"id":"1047","type":"Label"},{"attributes":{"source":{"id":"1053"}},"id":"1057","type":"CDSView"},{"attributes":{"data_source":{"id":"1048"},"glyph":{"id":"1049"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1050"},"selection_glyph":null,"view":{"id":"1052"}},"id":"1051","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1037","type":"Scatter"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"1056"}]},"id":"1073","type":"LegendItem"},{"attributes":{"source":{"id":"1048"}},"id":"1052","type":"CDSView"},{"attributes":{"data_source":{"id":"1074"},"glyph":{"id":"1075"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1076"},"selection_glyph":null,"view":{"id":"1078"}},"id":"1077","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1043","type":"Scatter"},{"attributes":{},"id":"1066","type":"Selection"},{"attributes":{},"id":"1019","type":"PanTool"},{"attributes":{},"id":"1012","type":"BasicTicker"},{"attributes":{"text":"BERT-base","x":1,"y":84.6},"id":"1035","type":"Label"},{"attributes":{},"id":"1067","type":"UnionRenderers"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1075","type":"Line"},{"attributes":{},"id":"1016","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1044","type":"Scatter"},{"attributes":{"below":[{"id":"1011"}],"center":[{"id":"1014"},{"id":"1018"},{"id":"1035"},{"id":"1041"},{"id":"1047"},{"id":"1072"}],"left":[{"id":"1015"}],"plot_width":800,"renderers":[{"id":"1039"},{"id":"1045"},{"id":"1051"},{"id":"1056"},{"id":"1077"}],"title":null,"toolbar":{"id":"1026"},"x_range":{"id":"1033"},"x_scale":{"id":"1007"},"y_range":{"id":"1034"},"y_scale":{"id":"1009"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[2.124330759364805,2.5489185330514665,3.1103446346400894,3.299103308301978],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"1093"},"selection_policy":{"id":"1094"}},"id":"1074","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"1025"}},"id":"1021","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"1015"},"dimension":1,"ticker":null},"id":"1018","type":"Grid"},{"attributes":{"source":{"id":"1074"}},"id":"1078","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1076","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1025","type":"BoxAnnotation"},{"attributes":{},"id":"1068","type":"Selection"},{"attributes":{"source":{"id":"1036"}},"id":"1040","type":"CDSView"},{"attributes":{},"id":"1024","type":"HelpTool"},{"attributes":{},"id":"1069","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"1077"}]},"id":"1095","type":"LegendItem"},{"attributes":{"data_source":{"id":"1036"},"glyph":{"id":"1037"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1038"},"selection_glyph":null,"view":{"id":"1040"}},"id":"1039","type":"GlyphRenderer"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1055","type":"Line"},{"attributes":{"data_source":{"id":"1042"},"glyph":{"id":"1043"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1044"},"selection_glyph":null,"view":{"id":"1046"}},"id":"1045","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.128134836864489,2.139436306864655,2.5626055721055767,2.804344092196828,3.189917755903195,3.2126983696601332,3.5573262273885065,3.753453724447129],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"1070"},"selection_policy":{"id":"1071"}},"id":"1053","type":"ColumnDataSource"},{"attributes":{},"id":"1007","type":"LinearScale"},{"attributes":{"source":{"id":"1042"}},"id":"1046","type":"CDSView"},{"attributes":{"axis_label":"Matched","formatter":{"id":"1060"},"ticker":{"id":"1016"}},"id":"1015","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Scatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1019"},{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"}]},"id":"1026","type":"Toolbar"},{"attributes":{"click_policy":"hide","items":[{"id":"1073"},{"id":"1095"}]},"id":"1072","type":"Legend"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1049","type":"Scatter"},{"attributes":{"text":"DistilBERT","x":2.0609917530867805,"y":82.2},"id":"1041","type":"Label"},{"attributes":{},"id":"1070","type":"Selection"},{"attributes":{},"id":"1071","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.0609917530867805],"y":[82.2]},"selected":{"id":"1066"},"selection_policy":{"id":"1067"}},"id":"1042","type":"ColumnDataSource"},{"attributes":{},"id":"1020","type":"WheelZoomTool"},{"attributes":{},"id":"1093","type":"Selection"},{"attributes":{},"id":"1060","type":"BasicTickFormatter"},{"attributes":{},"id":"1094","type":"UnionRenderers"},{"attributes":{},"id":"1023","type":"ResetTool"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"6a1b6e25-d444-4e47-b5aa-7c41603efdcf","root_ids":["1001"],"roots":{"1001":"701ff71f-7c40-4524-8ffa-c53b0a963a78"}}];
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