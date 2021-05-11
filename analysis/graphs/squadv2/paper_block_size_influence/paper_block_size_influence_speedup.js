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
    
      
      
    
      var element = document.getElementById("1a0739b5-29f3-456f-8630-fc0e18eb2ddf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1a0739b5-29f3-456f-8630-fc0e18eb2ddf' but no matching script tag was found.")
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
                    
                  var docs_json = '{"53ae4282-3b63-40ed-b3f7-a71355751d35":{"roots":{"references":[{"attributes":{},"id":"1510","type":"WheelZoomTool"},{"attributes":{"data":{"x":[1],"y":[76.7]},"selected":{"id":"1554"},"selection_policy":{"id":"1555"}},"id":"1525","type":"ColumnDataSource"},{"attributes":{},"id":"1556","type":"Selection"},{"attributes":{},"id":"1559","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1527","type":"Scatter"},{"attributes":{},"id":"1512","type":"SaveTool"},{"attributes":{"axis":{"id":"1505"},"dimension":1,"ticker":null},"id":"1508","type":"Grid"},{"attributes":{"below":[{"id":"1501"}],"center":[{"id":"1504"},{"id":"1508"},{"id":"1524"},{"id":"1530"},{"id":"1536"},{"id":"1542"}],"left":[{"id":"1505"}],"plot_width":800,"renderers":[{"id":"1528"},{"id":"1534"},{"id":"1540"},{"id":"1546"}],"title":null,"toolbar":{"id":"1516"},"x_range":{"id":"1523"},"x_scale":{"id":"1497"},"y_range":{"id":"1495"},"y_scale":{"id":"1499"}},"id":"1491","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1526","type":"Scatter"},{"attributes":{},"id":"1495","type":"DataRange1d"},{"attributes":{},"id":"1506","type":"BasicTicker"},{"attributes":{"overlay":{"id":"1515"}},"id":"1511","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1525"},"glyph":{"id":"1526"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1527"},"selection_glyph":null,"view":{"id":"1529"}},"id":"1528","type":"GlyphRenderer"},{"attributes":{"axis_label":"F1","formatter":{"id":"1551"},"ticker":{"id":"1506"}},"id":"1505","type":"LinearAxis"},{"attributes":{"text":"TinyBERT","x":2.0,"y":77.7},"id":"1536","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1539","type":"Scatter"},{"attributes":{},"id":"1558","type":"Selection"},{"attributes":{"source":{"id":"1537"}},"id":"1541","type":"CDSView"},{"attributes":{"data":{"x":[1.63],"y":[68.1776176526635]},"selected":{"id":"1556"},"selection_policy":{"id":"1557"}},"id":"1531","type":"ColumnDataSource"},{"attributes":{"text":"DistilBERT","x":1.63,"y":68.1776176526635},"id":"1530","type":"Label"},{"attributes":{},"id":"1561","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1532","type":"Scatter"},{"attributes":{},"id":"1560","type":"Selection"},{"attributes":{},"id":"1551","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1538","type":"Scatter"},{"attributes":{},"id":"1557","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.0],"y":[77.7]},"selected":{"id":"1558"},"selection_policy":{"id":"1559"}},"id":"1537","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1531"},"glyph":{"id":"1532"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1533"},"selection_glyph":null,"view":{"id":"1535"}},"id":"1534","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1531"}},"id":"1535","type":"CDSView"},{"attributes":{"text":"BERT-base","x":1,"y":76.7},"id":"1524","type":"Label"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1509"},{"id":"1510"},{"id":"1511"},{"id":"1512"},{"id":"1513"},{"id":"1514"}]},"id":"1516","type":"Toolbar"},{"attributes":{"data_source":{"id":"1543"},"glyph":{"id":"1544"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1545"},"selection_glyph":null,"view":{"id":"1547"}},"id":"1546","type":"GlyphRenderer"},{"attributes":{},"id":"1502","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1545","type":"Scatter"},{"attributes":{"source":{"id":"1525"}},"id":"1529","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1515","type":"BoxAnnotation"},{"attributes":{},"id":"1499","type":"LinearScale"},{"attributes":{"data":{"x":[1.612951511916643],"y":[79.2]},"selected":{"id":"1560"},"selection_policy":{"id":"1561"}},"id":"1543","type":"ColumnDataSource"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1549"},"ticker":{"id":"1502"}},"id":"1501","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1544","type":"Scatter"},{"attributes":{"axis":{"id":"1501"},"ticker":null},"id":"1504","type":"Grid"},{"attributes":{},"id":"1514","type":"HelpTool"},{"attributes":{"source":{"id":"1543"}},"id":"1547","type":"CDSView"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":79.2},"id":"1542","type":"Label"},{"attributes":{},"id":"1513","type":"ResetTool"},{"attributes":{},"id":"1497","type":"LinearScale"},{"attributes":{},"id":"1549","type":"BasicTickFormatter"},{"attributes":{"end":3.0,"start":0.85},"id":"1523","type":"Range1d"},{"attributes":{},"id":"1509","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1533","type":"Scatter"},{"attributes":{},"id":"1554","type":"Selection"},{"attributes":{"data_source":{"id":"1537"},"glyph":{"id":"1538"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1539"},"selection_glyph":null,"view":{"id":"1541"}},"id":"1540","type":"GlyphRenderer"},{"attributes":{},"id":"1555","type":"UnionRenderers"}],"root_ids":["1491"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"53ae4282-3b63-40ed-b3f7-a71355751d35","root_ids":["1491"],"roots":{"1491":"1a0739b5-29f3-456f-8630-fc0e18eb2ddf"}}];
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