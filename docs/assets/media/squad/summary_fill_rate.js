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
    
      
      
    
      var element = document.getElementById("3ef6ab92-c3ec-4230-9479-2260c1891f63");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3ef6ab92-c3ec-4230-9479-2260c1891f63' but no matching script tag was found.")
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
                    
                  var docs_json = '{"522969be-7a81-4f45-b973-66a52a7b3107":{"roots":{"references":[{"attributes":{},"id":"1173","type":"BasicTickFormatter"},{"attributes":{},"id":"1147","type":"BasicTicker"},{"attributes":{"text":"simple line example"},"id":"1132","type":"Title"},{"attributes":{"axis":{"id":"1142"},"ticker":null},"id":"1145","type":"Grid"},{"attributes":{"data_source":{"id":"1195"},"glyph":{"id":"1196"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1197"},"selection_glyph":null,"view":{"id":"1199"}},"id":"1198","type":"GlyphRenderer"},{"attributes":{"axis_label":"x","formatter":{"id":"1173"},"ticker":{"id":"1143"}},"id":"1142","type":"LinearAxis"},{"attributes":{"overlay":{"id":"1156"}},"id":"1152","type":"BoxZoomTool"},{"attributes":{},"id":"1171","type":"BasicTickFormatter"},{"attributes":{},"id":"1154","type":"ResetTool"},{"attributes":{},"id":"1151","type":"WheelZoomTool"},{"attributes":{"source":{"id":"1195"}},"id":"1199","type":"CDSView"},{"attributes":{},"id":"1150","type":"PanTool"},{"attributes":{},"id":"1153","type":"SaveTool"},{"attributes":{"label":{"value":"BERT-base, structured pruning"},"renderers":[{"id":"1198"}]},"id":"1212","type":"LegendItem"},{"attributes":{"label":{"value":"BERT base, hybrid pruning"},"renderers":[{"id":"1167"}]},"id":"1178","type":"LegendItem"},{"attributes":{},"id":"1211","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1180","type":"Line"},{"attributes":{"label":{"value":"BERT large, hybrid pruning"},"renderers":[{"id":"1182"}]},"id":"1194","type":"LegendItem"},{"attributes":{},"id":"1193","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1156","type":"BoxAnnotation"},{"attributes":{},"id":"1210","type":"Selection"},{"attributes":{"axis":{"id":"1146"},"dimension":1,"ticker":null},"id":"1149","type":"Grid"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1165","type":"Line"},{"attributes":{},"id":"1176","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1179"},"glyph":{"id":"1180"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1181"},"selection_glyph":null,"view":{"id":"1183"}},"id":"1182","type":"GlyphRenderer"},{"attributes":{},"id":"1155","type":"HelpTool"},{"attributes":{},"id":"1140","type":"LinearScale"},{"attributes":{"below":[{"id":"1142"}],"center":[{"id":"1145"},{"id":"1149"},{"id":"1177"}],"left":[{"id":"1146"}],"renderers":[{"id":"1167"},{"id":"1182"},{"id":"1198"}],"title":{"id":"1132"},"toolbar":{"id":"1157"},"x_range":{"id":"1134"},"x_scale":{"id":"1138"},"y_range":{"id":"1136"},"y_scale":{"id":"1140"}},"id":"1131","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1197","type":"Line"},{"attributes":{},"id":"1138","type":"LinearScale"},{"attributes":{"data":{"x":[0.21133535879629628,0.202030888310185,0.16608796296296302,0.15747974537037035,0.14585141782407407,0.13883463541666652,0.13751446759259256],"y":[86.86229967213058,86.45517515140308,86.2625032125089,85.91370280008687,85.77799129804794,85.60283555208089,85.45260706155949]},"selected":{"id":"1210"},"selection_policy":{"id":"1211"}},"id":"1195","type":"ColumnDataSource"},{"attributes":{},"id":"1134","type":"DataRange1d"},{"attributes":{},"id":"1175","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1166","type":"Line"},{"attributes":{},"id":"1192","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1181","type":"Line"},{"attributes":{"data":{"x":[0.408203125,0.34883014896373055,0.3292532356948229,0.2941730898123325,0.2657799220963173,0.23532130281690145],"y":[88.72194531479171,88.24613086360249,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"1175"},"selection_policy":{"id":"1176"}},"id":"1164","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1196","type":"Line"},{"attributes":{"source":{"id":"1179"}},"id":"1183","type":"CDSView"},{"attributes":{"data":{"x":[0.8222085160818713,0.8222085160818713,0.8222085160818713,0.5930300575953924],"y":[90.73941291394593,90.84270784891945,91.0266636723574,90.10843526218638]},"selected":{"id":"1192"},"selection_policy":{"id":"1193"}},"id":"1179","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1164"}},"id":"1168","type":"CDSView"},{"attributes":{"click_policy":"hide","items":[{"id":"1178"},{"id":"1194"},{"id":"1212"}]},"id":"1177","type":"Legend"},{"attributes":{"data_source":{"id":"1164"},"glyph":{"id":"1165"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1166"},"selection_glyph":null,"view":{"id":"1168"}},"id":"1167","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1150"},{"id":"1151"},{"id":"1152"},{"id":"1153"},{"id":"1154"},{"id":"1155"}]},"id":"1157","type":"Toolbar"},{"attributes":{},"id":"1143","type":"BasicTicker"},{"attributes":{},"id":"1136","type":"DataRange1d"},{"attributes":{"axis_label":"y","formatter":{"id":"1171"},"ticker":{"id":"1147"}},"id":"1146","type":"LinearAxis"}],"root_ids":["1131"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"522969be-7a81-4f45-b973-66a52a7b3107","root_ids":["1131"],"roots":{"1131":"3ef6ab92-c3ec-4230-9479-2260c1891f63"}}];
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