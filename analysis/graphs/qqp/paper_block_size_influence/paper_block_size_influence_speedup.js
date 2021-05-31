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
    
      
      
    
      var element = document.getElementById("32512950-1a5d-4e50-8463-62cb5a500117");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '32512950-1a5d-4e50-8463-62cb5a500117' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4eaa2c58-8fea-4afc-ada8-43a8bb3cb0e4":{"roots":{"references":[{"attributes":{},"id":"1315","type":"LinearScale"},{"attributes":{"text":"BERT-base","x":1,"y":88.12},"id":"1340","type":"Label"},{"attributes":{},"id":"1313","type":"LinearScale"},{"attributes":{},"id":"1359","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1331"}},"id":"1327","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"1317"},"ticker":null},"id":"1320","type":"Grid"},{"attributes":{},"id":"1367","type":"Selection"},{"attributes":{"text":"Soft Movement","x":1.0,"y":88.5798737068386},"id":"1352","type":"Label"},{"attributes":{},"id":"1325","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1354","type":"Scatter"},{"attributes":{"end":null,"start":null},"id":"1339","type":"Range1d"},{"attributes":{},"id":"1368","type":"UnionRenderers"},{"attributes":{"axis_label":"F1","formatter":{"id":"1361"},"ticker":{"id":"1322"}},"id":"1321","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1347"},"glyph":{"id":"1348"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1349"},"selection_glyph":null,"view":{"id":"1351"}},"id":"1350","type":"GlyphRenderer"},{"attributes":{},"id":"1328","type":"SaveTool"},{"attributes":{"data":{"x":[2.0],"y":[88.0]},"selected":{"id":"1367"},"selection_policy":{"id":"1366"}},"id":"1347","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1353"},"glyph":{"id":"1354"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1355"},"selection_glyph":null,"view":{"id":"1357"}},"id":"1356","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1355","type":"Scatter"},{"attributes":{"axis":{"id":"1321"},"dimension":1,"ticker":null},"id":"1324","type":"Grid"},{"attributes":{"data":{"x":[1.0],"y":[88.5798737068386]},"selected":{"id":"1369"},"selection_policy":{"id":"1368"}},"id":"1353","type":"ColumnDataSource"},{"attributes":{},"id":"1369","type":"Selection"},{"attributes":{"source":{"id":"1353"}},"id":"1357","type":"CDSView"},{"attributes":{},"id":"1366","type":"UnionRenderers"},{"attributes":{"source":{"id":"1341"}},"id":"1345","type":"CDSView"},{"attributes":{},"id":"1322","type":"BasicTicker"},{"attributes":{},"id":"1364","type":"UnionRenderers"},{"attributes":{"below":[{"id":"1317"}],"center":[{"id":"1320"},{"id":"1324"},{"id":"1340"},{"id":"1346"},{"id":"1352"}],"left":[{"id":"1321"}],"plot_width":800,"renderers":[{"id":"1344"},{"id":"1350"},{"id":"1356"}],"title":null,"toolbar":{"id":"1332"},"x_range":{"id":"1339"},"x_scale":{"id":"1313"},"y_range":{"id":"1311"},"y_scale":{"id":"1315"}},"id":"1307","subtype":"Figure","type":"Plot"},{"attributes":{"text":"TinyBERT","x":2.0,"y":88.0},"id":"1346","type":"Label"},{"attributes":{},"id":"1361","type":"BasicTickFormatter"},{"attributes":{},"id":"1318","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1325"},{"id":"1326"},{"id":"1327"},{"id":"1328"},{"id":"1329"},{"id":"1330"}]},"id":"1332","type":"Toolbar"},{"attributes":{},"id":"1311","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1349","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1343","type":"Scatter"},{"attributes":{"data_source":{"id":"1341"},"glyph":{"id":"1342"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1343"},"selection_glyph":null,"view":{"id":"1345"}},"id":"1344","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1331","type":"BoxAnnotation"},{"attributes":{},"id":"1365","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1342","type":"Scatter"},{"attributes":{},"id":"1330","type":"HelpTool"},{"attributes":{"source":{"id":"1347"}},"id":"1351","type":"CDSView"},{"attributes":{},"id":"1329","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1348","type":"Scatter"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1359"},"ticker":{"id":"1318"}},"id":"1317","type":"LinearAxis"},{"attributes":{},"id":"1326","type":"WheelZoomTool"},{"attributes":{"data":{"x":[1],"y":[88.12]},"selected":{"id":"1365"},"selection_policy":{"id":"1364"}},"id":"1341","type":"ColumnDataSource"}],"root_ids":["1307"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"4eaa2c58-8fea-4afc-ada8-43a8bb3cb0e4","root_ids":["1307"],"roots":{"1307":"32512950-1a5d-4e50-8463-62cb5a500117"}}];
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