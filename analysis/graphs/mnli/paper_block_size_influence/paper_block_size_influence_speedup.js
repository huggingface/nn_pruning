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
    
      
      
    
      var element = document.getElementById("ea68f0cb-6c7f-42fe-9a31-d3846b1c6722");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ea68f0cb-6c7f-42fe-9a31-d3846b1c6722' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f7f77762-ebd1-4c57-a976-3b71b37e0f17":{"roots":{"references":[{"attributes":{},"id":"1346","type":"LinearScale"},{"attributes":{},"id":"1353","type":"BasicTicker"},{"attributes":{},"id":"1397","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1381","type":"Scatter"},{"attributes":{"data":{"x":[1],"y":[84.6]},"selected":{"id":"1397"},"selection_policy":{"id":"1396"}},"id":"1373","type":"ColumnDataSource"},{"attributes":{},"id":"1399","type":"Selection"},{"attributes":{"source":{"id":"1379"}},"id":"1383","type":"CDSView"},{"attributes":{"text":"BERT-base","x":1,"y":84.6},"id":"1372","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1380","type":"Scatter"},{"attributes":{},"id":"1393","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[2.0],"y":[84.6]},"selected":{"id":"1401"},"selection_policy":{"id":"1400"}},"id":"1385","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1362","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"1348"},"ticker":null},"id":"1351","type":"Grid"},{"attributes":{"data_source":{"id":"1385"},"glyph":{"id":"1386"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1387"},"selection_glyph":null,"view":{"id":"1389"}},"id":"1388","type":"GlyphRenderer"},{"attributes":{},"id":"1400","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.63],"y":[82.2]},"selected":{"id":"1399"},"selection_policy":{"id":"1398"}},"id":"1379","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1356"},{"id":"1357"},{"id":"1358"},{"id":"1359"},{"id":"1360"},{"id":"1361"}]},"id":"1363","type":"Toolbar"},{"attributes":{},"id":"1401","type":"Selection"},{"attributes":{"text":"TinyBERT","x":2.0,"y":84.6},"id":"1384","type":"Label"},{"attributes":{},"id":"1349","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1374","type":"Scatter"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1393"},"ticker":{"id":"1349"}},"id":"1348","type":"LinearAxis"},{"attributes":{"source":{"id":"1373"}},"id":"1377","type":"CDSView"},{"attributes":{},"id":"1391","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1385"}},"id":"1389","type":"CDSView"},{"attributes":{"data_source":{"id":"1373"},"glyph":{"id":"1374"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1375"},"selection_glyph":null,"view":{"id":"1377"}},"id":"1376","type":"GlyphRenderer"},{"attributes":{},"id":"1360","type":"ResetTool"},{"attributes":{"axis_label":"Matched","formatter":{"id":"1391"},"ticker":{"id":"1353"}},"id":"1352","type":"LinearAxis"},{"attributes":{},"id":"1396","type":"UnionRenderers"},{"attributes":{},"id":"1344","type":"LinearScale"},{"attributes":{"end":86,"start":79},"id":"1371","type":"Range1d"},{"attributes":{"overlay":{"id":"1362"}},"id":"1358","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1379"},"glyph":{"id":"1380"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1381"},"selection_glyph":null,"view":{"id":"1383"}},"id":"1382","type":"GlyphRenderer"},{"attributes":{},"id":"1359","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1375","type":"Scatter"},{"attributes":{"axis":{"id":"1352"},"dimension":1,"ticker":null},"id":"1355","type":"Grid"},{"attributes":{"below":[{"id":"1348"}],"center":[{"id":"1351"},{"id":"1355"},{"id":"1372"},{"id":"1378"},{"id":"1384"}],"left":[{"id":"1352"}],"plot_width":800,"renderers":[{"id":"1376"},{"id":"1382"},{"id":"1388"}],"title":null,"toolbar":{"id":"1363"},"x_range":{"id":"1370"},"x_scale":{"id":"1344"},"y_range":{"id":"1371"},"y_scale":{"id":"1346"}},"id":"1338","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1356","type":"PanTool"},{"attributes":{},"id":"1361","type":"HelpTool"},{"attributes":{"end":6.0,"start":0.75},"id":"1370","type":"Range1d"},{"attributes":{},"id":"1398","type":"UnionRenderers"},{"attributes":{},"id":"1357","type":"WheelZoomTool"},{"attributes":{"text":"DistilBERT","x":1.63,"y":82.2},"id":"1378","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1387","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1386","type":"Scatter"}],"root_ids":["1338"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"f7f77762-ebd1-4c57-a976-3b71b37e0f17","root_ids":["1338"],"roots":{"1338":"ea68f0cb-6c7f-42fe-9a31-d3846b1c6722"}}];
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