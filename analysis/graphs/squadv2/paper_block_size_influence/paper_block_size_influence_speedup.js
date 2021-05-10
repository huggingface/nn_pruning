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
    
      
      
    
      var element = document.getElementById("a3740304-1366-41da-b2c2-0e2de7325f55");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a3740304-1366-41da-b2c2-0e2de7325f55' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c8bbd030-db5e-4145-b296-6b7d992257e1":{"roots":{"references":[{"attributes":{},"id":"1444","type":"BasicTicker"},{"attributes":{"source":{"id":"1473"}},"id":"1477","type":"CDSView"},{"attributes":{"axis":{"id":"1443"},"ticker":null},"id":"1446","type":"Grid"},{"attributes":{"data_source":{"id":"1467"},"glyph":{"id":"1468"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1469"},"selection_glyph":null,"view":{"id":"1471"}},"id":"1470","type":"GlyphRenderer"},{"attributes":{"axis_label":"F1","formatter":{"id":"1491"},"ticker":{"id":"1448"}},"id":"1447","type":"LinearAxis"},{"attributes":{},"id":"1491","type":"BasicTickFormatter"},{"attributes":{"text":"BERT-base","x":1,"y":76.7},"id":"1466","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1474","type":"Scatter"},{"attributes":{"source":{"id":"1479"}},"id":"1483","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":2.0,"y":77.7},"id":"1478","type":"Label"},{"attributes":{},"id":"1500","type":"UnionRenderers"},{"attributes":{},"id":"1439","type":"LinearScale"},{"attributes":{"data_source":{"id":"1485"},"glyph":{"id":"1486"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1487"},"selection_glyph":null,"view":{"id":"1489"}},"id":"1488","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.63],"y":[68.1776176526635]},"selected":{"id":"1499"},"selection_policy":{"id":"1498"}},"id":"1473","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1467"}},"id":"1471","type":"CDSView"},{"attributes":{"source":{"id":"1485"}},"id":"1489","type":"CDSView"},{"attributes":{"data":{"x":[2.0],"y":[77.7]},"selected":{"id":"1501"},"selection_policy":{"id":"1500"}},"id":"1479","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1447"},"dimension":1,"ticker":null},"id":"1450","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1475","type":"Scatter"},{"attributes":{"data":{"x":[1.612951511916643],"y":[79.2]},"selected":{"id":"1503"},"selection_policy":{"id":"1502"}},"id":"1485","type":"ColumnDataSource"},{"attributes":{},"id":"1501","type":"Selection"},{"attributes":{"text":"DistilBERT","x":1.63,"y":68.1776176526635},"id":"1472","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1486","type":"Scatter"},{"attributes":{"overlay":{"id":"1457"}},"id":"1453","type":"BoxZoomTool"},{"attributes":{},"id":"1496","type":"UnionRenderers"},{"attributes":{},"id":"1455","type":"ResetTool"},{"attributes":{"data_source":{"id":"1479"},"glyph":{"id":"1480"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1481"},"selection_glyph":null,"view":{"id":"1483"}},"id":"1482","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1487","type":"Scatter"},{"attributes":{},"id":"1497","type":"Selection"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":79.2},"id":"1484","type":"Label"},{"attributes":{"data_source":{"id":"1473"},"glyph":{"id":"1474"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1475"},"selection_glyph":null,"view":{"id":"1477"}},"id":"1476","type":"GlyphRenderer"},{"attributes":{},"id":"1452","type":"WheelZoomTool"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1493"},"ticker":{"id":"1444"}},"id":"1443","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1457","type":"BoxAnnotation"},{"attributes":{"end":3.0,"start":0.85},"id":"1465","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1451"},{"id":"1452"},{"id":"1453"},{"id":"1454"},{"id":"1455"},{"id":"1456"}]},"id":"1458","type":"Toolbar"},{"attributes":{},"id":"1498","type":"UnionRenderers"},{"attributes":{},"id":"1448","type":"BasicTicker"},{"attributes":{},"id":"1499","type":"Selection"},{"attributes":{},"id":"1493","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1481","type":"Scatter"},{"attributes":{},"id":"1454","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1468","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1480","type":"Scatter"},{"attributes":{"below":[{"id":"1443"}],"center":[{"id":"1446"},{"id":"1450"},{"id":"1466"},{"id":"1472"},{"id":"1478"},{"id":"1484"}],"left":[{"id":"1447"}],"plot_width":800,"renderers":[{"id":"1470"},{"id":"1476"},{"id":"1482"},{"id":"1488"}],"title":null,"toolbar":{"id":"1458"},"x_range":{"id":"1465"},"x_scale":{"id":"1439"},"y_range":{"id":"1437"},"y_scale":{"id":"1441"}},"id":"1433","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1441","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1469","type":"Scatter"},{"attributes":{},"id":"1437","type":"DataRange1d"},{"attributes":{},"id":"1502","type":"UnionRenderers"},{"attributes":{},"id":"1451","type":"PanTool"},{"attributes":{"data":{"x":[1],"y":[76.7]},"selected":{"id":"1497"},"selection_policy":{"id":"1496"}},"id":"1467","type":"ColumnDataSource"},{"attributes":{},"id":"1503","type":"Selection"},{"attributes":{},"id":"1456","type":"HelpTool"}],"root_ids":["1433"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"c8bbd030-db5e-4145-b296-6b7d992257e1","root_ids":["1433"],"roots":{"1433":"a3740304-1366-41da-b2c2-0e2de7325f55"}}];
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