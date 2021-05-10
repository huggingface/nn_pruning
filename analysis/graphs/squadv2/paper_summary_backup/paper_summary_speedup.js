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
    
      
      
    
      var element = document.getElementById("a9397acd-b271-46a2-8037-b0372c8cc8b9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a9397acd-b271-46a2-8037-b0372c8cc8b9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f6f81407-4ab5-4620-b316-0ffeeb5d75aa":{"roots":{"references":[{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1060","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1061","type":"Line"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1073","type":"UnionRenderers"},{"attributes":{"source":{"id":"1059"}},"id":"1063","type":"CDSView"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"},{"id":"1035"},{"id":"1041"},{"id":"1047"},{"id":"1053"},{"id":"1080"}],"left":[{"id":"1016"}],"plot_width":800,"renderers":[{"id":"1039"},{"id":"1045"},{"id":"1051"},{"id":"1057"},{"id":"1062"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"x_range":{"id":"1034"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1074","type":"Selection"},{"attributes":{"text":"MobileBERT","x":5.94211706642239,"y":79.2},"id":"1053","type":"Label"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"1062"}]},"id":"1081","type":"LegendItem"},{"attributes":{"data":{"x":[2.0],"y":[77.7]},"selected":{"id":"1074"},"selection_policy":{"id":"1073"}},"id":"1048","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1049","type":"Scatter"},{"attributes":{"data_source":{"id":"1036"},"glyph":{"id":"1037"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1038"},"selection_glyph":null,"view":{"id":"1040"}},"id":"1039","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1054"}},"id":"1058","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Scatter"},{"attributes":{"data":{"x":[1],"y":[76.7]},"selected":{"id":"1070"},"selection_policy":{"id":"1069"}},"id":"1036","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1012"},"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1037","type":"Scatter"},{"attributes":{"click_policy":"hide","items":[{"id":"1081"}]},"id":"1080","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1050","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1056","type":"Scatter"},{"attributes":{"data_source":{"id":"1042"},"glyph":{"id":"1043"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1044"},"selection_glyph":null,"view":{"id":"1046"}},"id":"1045","type":"GlyphRenderer"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{},"id":"1065","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1065"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{},"id":"1075","type":"UnionRenderers"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{"data":{"x":[1.3429161433820673,1.3607840637968203,1.5751145207049526,1.5779936248892672,1.7377427284587807,1.767958668802947],"y":[76.36922308183819,75.58377333824575,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"1078"},"selection_policy":{"id":"1077"}},"id":"1059","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1055","type":"Scatter"},{"attributes":{},"id":"1076","type":"Selection"},{"attributes":{"data_source":{"id":"1048"},"glyph":{"id":"1049"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1050"},"selection_glyph":null,"view":{"id":"1052"}},"id":"1051","type":"GlyphRenderer"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{"axis_label":"F1","formatter":{"id":"1067"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{"text":"DistilBERT","x":1.63,"y":68.1776176526635},"id":"1041","type":"Label"},{"attributes":{"source":{"id":"1036"}},"id":"1040","type":"CDSView"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"1002","type":"Title"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{},"id":"1069","type":"UnionRenderers"},{"attributes":{"data":{"x":[5.94211706642239],"y":[79.2]},"selected":{"id":"1076"},"selection_policy":{"id":"1075"}},"id":"1054","type":"ColumnDataSource"},{"attributes":{},"id":"1070","type":"Selection"},{"attributes":{},"id":"1067","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{},"id":"1077","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1059"},"glyph":{"id":"1060"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1061"},"selection_glyph":null,"view":{"id":"1063"}},"id":"1062","type":"GlyphRenderer"},{"attributes":{},"id":"1078","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{"end":3.0,"start":0.85},"id":"1034","type":"Range1d"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{"data":{"x":[1.63],"y":[68.1776176526635]},"selected":{"id":"1072"},"selection_policy":{"id":"1071"}},"id":"1042","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1042"}},"id":"1046","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1044","type":"Scatter"},{"attributes":{},"id":"1071","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1043","type":"Scatter"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{"text":"TinyBERT","x":2.0,"y":77.7},"id":"1047","type":"Label"},{"attributes":{},"id":"1072","type":"Selection"},{"attributes":{"source":{"id":"1048"}},"id":"1052","type":"CDSView"},{"attributes":{"data_source":{"id":"1054"},"glyph":{"id":"1055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1056"},"selection_glyph":null,"view":{"id":"1058"}},"id":"1057","type":"GlyphRenderer"},{"attributes":{"text":"BERT-base","x":1,"y":76.7},"id":"1035","type":"Label"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"f6f81407-4ab5-4620-b316-0ffeeb5d75aa","root_ids":["1001"],"roots":{"1001":"a9397acd-b271-46a2-8037-b0372c8cc8b9"}}];
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