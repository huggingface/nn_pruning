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
    
      
      
    
      var element = document.getElementById("fb5aa62a-786d-4c7f-a2e4-a3ce2183905a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fb5aa62a-786d-4c7f-a2e4-a3ce2183905a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4269cf02-f34a-44fd-9ac4-63649cde9195":{"roots":{"references":[{"attributes":{},"id":"1586","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1619","type":"Scatter"},{"attributes":{"click_policy":"hide","items":[{"id":"1643"}]},"id":"1642","type":"Legend"},{"attributes":{},"id":"1634","type":"Selection"},{"attributes":{},"id":"1590","type":"WheelZoomTool"},{"attributes":{"data":{"x":[1.8799112593179124],"y":[84.6]},"selected":{"id":"1638"},"selection_policy":{"id":"1639"}},"id":"1618","type":"ColumnDataSource"},{"attributes":{},"id":"1636","type":"Selection"},{"attributes":{"data_source":{"id":"1618"},"glyph":{"id":"1619"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1620"},"selection_glyph":null,"view":{"id":"1622"}},"id":"1621","type":"GlyphRenderer"},{"attributes":{},"id":"1589","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1625","type":"Line"},{"attributes":{},"id":"1637","type":"UnionRenderers"},{"attributes":{},"id":"1592","type":"SaveTool"},{"attributes":{"data":{"x":[2.128134836864489,2.139436306864655,2.5626055721055767,2.804344092196828,3.189917755903195,3.2126983696601332,3.5573262273885065,3.753453724447129],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"1640"},"selection_policy":{"id":"1641"}},"id":"1623","type":"ColumnDataSource"},{"attributes":{"text":"DistilBERT","x":2.0609917530867805,"y":82.2},"id":"1611","type":"Label"},{"attributes":{"source":{"id":"1623"}},"id":"1627","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1613","type":"Scatter"},{"attributes":{"axis":{"id":"1581"},"ticker":null},"id":"1584","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1589"},{"id":"1590"},{"id":"1591"},{"id":"1592"},{"id":"1593"},{"id":"1594"}]},"id":"1596","type":"Toolbar"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"1571","type":"Title"},{"attributes":{},"id":"1638","type":"Selection"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1624","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1614","type":"Scatter"},{"attributes":{},"id":"1639","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"1595"}},"id":"1591","type":"BoxZoomTool"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"1626"}]},"id":"1643","type":"LegendItem"},{"attributes":{},"id":"1593","type":"ResetTool"},{"attributes":{},"id":"1594","type":"HelpTool"},{"attributes":{"text":"BERT-base","x":1,"y":84.6},"id":"1605","type":"Label"},{"attributes":{"source":{"id":"1618"}},"id":"1622","type":"CDSView"},{"attributes":{"data":{"x":[2.0609917530867805],"y":[82.2]},"selected":{"id":"1636"},"selection_policy":{"id":"1637"}},"id":"1612","type":"ColumnDataSource"},{"attributes":{},"id":"1579","type":"LinearScale"},{"attributes":{"axis_label":"Matched","formatter":{"id":"1630"},"ticker":{"id":"1586"}},"id":"1585","type":"LinearAxis"},{"attributes":{"text":"TinyBERT","x":1.8799112593179124,"y":84.6},"id":"1617","type":"Label"},{"attributes":{},"id":"1582","type":"BasicTicker"},{"attributes":{"axis":{"id":"1585"},"dimension":1,"ticker":null},"id":"1588","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1620","type":"Scatter"},{"attributes":{"source":{"id":"1606"}},"id":"1610","type":"CDSView"},{"attributes":{},"id":"1640","type":"Selection"},{"attributes":{},"id":"1641","type":"UnionRenderers"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1632"},"ticker":{"id":"1582"}},"id":"1581","type":"LinearAxis"},{"attributes":{"data":{"x":[1],"y":[84.6]},"selected":{"id":"1634"},"selection_policy":{"id":"1635"}},"id":"1606","type":"ColumnDataSource"},{"attributes":{},"id":"1632","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1607","type":"Scatter"},{"attributes":{},"id":"1635","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1608","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1595","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1581"}],"center":[{"id":"1584"},{"id":"1588"},{"id":"1605"},{"id":"1611"},{"id":"1617"},{"id":"1642"}],"left":[{"id":"1585"}],"plot_width":800,"renderers":[{"id":"1609"},{"id":"1615"},{"id":"1621"},{"id":"1626"}],"title":{"id":"1571"},"toolbar":{"id":"1596"},"x_range":{"id":"1603"},"x_scale":{"id":"1577"},"y_range":{"id":"1604"},"y_scale":{"id":"1579"}},"id":"1570","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"1606"},"glyph":{"id":"1607"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1608"},"selection_glyph":null,"view":{"id":"1610"}},"id":"1609","type":"GlyphRenderer"},{"attributes":{"end":86,"start":79},"id":"1604","type":"Range1d"},{"attributes":{"data_source":{"id":"1623"},"glyph":{"id":"1624"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1625"},"selection_glyph":null,"view":{"id":"1627"}},"id":"1626","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1612"}},"id":"1616","type":"CDSView"},{"attributes":{},"id":"1630","type":"BasicTickFormatter"},{"attributes":{"end":6.0,"start":0.75},"id":"1603","type":"Range1d"},{"attributes":{},"id":"1577","type":"LinearScale"},{"attributes":{"data_source":{"id":"1612"},"glyph":{"id":"1613"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1614"},"selection_glyph":null,"view":{"id":"1616"}},"id":"1615","type":"GlyphRenderer"}],"root_ids":["1570"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"4269cf02-f34a-44fd-9ac4-63649cde9195","root_ids":["1570"],"roots":{"1570":"fb5aa62a-786d-4c7f-a2e4-a3ce2183905a"}}];
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