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
    
      
      
    
      var element = document.getElementById("2b77b833-43d6-4632-9a09-2c527cd20cb1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2b77b833-43d6-4632-9a09-2c527cd20cb1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"20c8cb25-2436-443c-939a-92bf5bb87731":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1596","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"1586"},"dimension":1,"ticker":null},"id":"1589","type":"Grid"},{"attributes":{"data":{"x":[2.0],"y":[84.6]},"selected":{"id":"1640"},"selection_policy":{"id":"1639"}},"id":"1619","type":"ColumnDataSource"},{"attributes":{"axis_label":"Matched","formatter":{"id":"1630"},"ticker":{"id":"1587"}},"id":"1586","type":"LinearAxis"},{"attributes":{"source":{"id":"1607"}},"id":"1611","type":"CDSView"},{"attributes":{},"id":"1632","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1624"}},"id":"1628","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":2.0,"y":84.6},"id":"1618","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1621","type":"Scatter"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"1627"}]},"id":"1644","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1609","type":"Scatter"},{"attributes":{},"id":"1639","type":"UnionRenderers"},{"attributes":{"source":{"id":"1619"}},"id":"1623","type":"CDSView"},{"attributes":{},"id":"1578","type":"LinearScale"},{"attributes":{},"id":"1595","type":"HelpTool"},{"attributes":{},"id":"1640","type":"Selection"},{"attributes":{"end":86,"start":79},"id":"1605","type":"Range1d"},{"attributes":{},"id":"1583","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1614","type":"Scatter"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1625","type":"Line"},{"attributes":{"axis":{"id":"1582"},"ticker":null},"id":"1585","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1626","type":"Line"},{"attributes":{},"id":"1580","type":"LinearScale"},{"attributes":{"text":"BERT-base","x":1,"y":84.6},"id":"1606","type":"Label"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"1572","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1590"},{"id":"1591"},{"id":"1592"},{"id":"1593"},{"id":"1594"},{"id":"1595"}]},"id":"1597","type":"Toolbar"},{"attributes":{},"id":"1641","type":"UnionRenderers"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1632"},"ticker":{"id":"1583"}},"id":"1582","type":"LinearAxis"},{"attributes":{"data":{"x":[1.63],"y":[82.2]},"selected":{"id":"1638"},"selection_policy":{"id":"1637"}},"id":"1613","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1608","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1620","type":"Scatter"},{"attributes":{},"id":"1642","type":"Selection"},{"attributes":{},"id":"1590","type":"PanTool"},{"attributes":{"overlay":{"id":"1596"}},"id":"1592","type":"BoxZoomTool"},{"attributes":{},"id":"1630","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1613"},"glyph":{"id":"1614"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1615"},"selection_glyph":null,"view":{"id":"1617"}},"id":"1616","type":"GlyphRenderer"},{"attributes":{},"id":"1593","type":"SaveTool"},{"attributes":{"data_source":{"id":"1619"},"glyph":{"id":"1620"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1621"},"selection_glyph":null,"view":{"id":"1623"}},"id":"1622","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1615","type":"Scatter"},{"attributes":{},"id":"1635","type":"UnionRenderers"},{"attributes":{"source":{"id":"1613"}},"id":"1617","type":"CDSView"},{"attributes":{},"id":"1636","type":"Selection"},{"attributes":{"data":{"x":[1.6100189119596693,1.6185689249184445,1.9387133575906608,2.121598192871819,2.4133000530018203,2.4305344962050333,2.6912592204656125,2.8396374970436784],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"1642"},"selection_policy":{"id":"1641"}},"id":"1624","type":"ColumnDataSource"},{"attributes":{},"id":"1638","type":"Selection"},{"attributes":{},"id":"1591","type":"WheelZoomTool"},{"attributes":{"data":{"x":[1],"y":[84.6]},"selected":{"id":"1636"},"selection_policy":{"id":"1635"}},"id":"1607","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1607"},"glyph":{"id":"1608"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1609"},"selection_glyph":null,"view":{"id":"1611"}},"id":"1610","type":"GlyphRenderer"},{"attributes":{"text":"DistilBERT","x":1.63,"y":82.2},"id":"1612","type":"Label"},{"attributes":{},"id":"1594","type":"ResetTool"},{"attributes":{"end":6.0,"start":0.75},"id":"1604","type":"Range1d"},{"attributes":{"below":[{"id":"1582"}],"center":[{"id":"1585"},{"id":"1589"},{"id":"1606"},{"id":"1612"},{"id":"1618"},{"id":"1643"}],"left":[{"id":"1586"}],"plot_width":800,"renderers":[{"id":"1610"},{"id":"1616"},{"id":"1622"},{"id":"1627"}],"title":{"id":"1572"},"toolbar":{"id":"1597"},"x_range":{"id":"1604"},"x_scale":{"id":"1578"},"y_range":{"id":"1605"},"y_scale":{"id":"1580"}},"id":"1571","subtype":"Figure","type":"Plot"},{"attributes":{"click_policy":"hide","items":[{"id":"1644"}]},"id":"1643","type":"Legend"},{"attributes":{},"id":"1637","type":"UnionRenderers"},{"attributes":{},"id":"1587","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1624"},"glyph":{"id":"1625"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1626"},"selection_glyph":null,"view":{"id":"1628"}},"id":"1627","type":"GlyphRenderer"}],"root_ids":["1571"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"20c8cb25-2436-443c-939a-92bf5bb87731","root_ids":["1571"],"roots":{"1571":"2b77b833-43d6-4632-9a09-2c527cd20cb1"}}];
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