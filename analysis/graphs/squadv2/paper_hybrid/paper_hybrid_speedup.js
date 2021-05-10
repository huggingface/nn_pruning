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
    
      
      
    
      var element = document.getElementById("e494e0f4-c092-4e2a-ad5c-40abd3d2e9e4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e494e0f4-c092-4e2a-ad5c-40abd3d2e9e4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0bde5f67-f935-4cdd-a2f1-1e71d9fc74f7":{"roots":{"references":[{"attributes":{"data":{"x":[1.63],"y":[68.1776176526635]},"selected":{"id":"1773"},"selection_policy":{"id":"1772"}},"id":"1742","type":"ColumnDataSource"},{"attributes":{"axis_label":"F1","formatter":{"id":"1765"},"ticker":{"id":"1717"}},"id":"1716","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1736"},"glyph":{"id":"1737"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1738"},"selection_glyph":null,"view":{"id":"1740"}},"id":"1739","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1742"}},"id":"1746","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":2.0,"y":77.7},"id":"1747","type":"Label"},{"attributes":{"data_source":{"id":"1748"},"glyph":{"id":"1749"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1750"},"selection_glyph":null,"view":{"id":"1752"}},"id":"1751","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1],"y":[76.7]},"selected":{"id":"1771"},"selection_policy":{"id":"1770"}},"id":"1736","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1749","type":"Scatter"},{"attributes":{},"id":"1776","type":"UnionRenderers"},{"attributes":{},"id":"1765","type":"BasicTickFormatter"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1760","type":"Line"},{"attributes":{},"id":"1777","type":"Selection"},{"attributes":{"data_source":{"id":"1754"},"glyph":{"id":"1755"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1756"},"selection_glyph":null,"view":{"id":"1758"}},"id":"1757","type":"GlyphRenderer"},{"attributes":{},"id":"1713","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1755","type":"Scatter"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"1702","type":"Title"},{"attributes":{},"id":"1720","type":"PanTool"},{"attributes":{"click_policy":"hide","items":[{"id":"1781"}]},"id":"1780","type":"Legend"},{"attributes":{},"id":"1770","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.612951511916643],"y":[79.2]},"selected":{"id":"1777"},"selection_policy":{"id":"1776"}},"id":"1754","type":"ColumnDataSource"},{"attributes":{},"id":"1771","type":"Selection"},{"attributes":{},"id":"1778","type":"UnionRenderers"},{"attributes":{},"id":"1779","type":"Selection"},{"attributes":{},"id":"1717","type":"BasicTicker"},{"attributes":{},"id":"1708","type":"LinearScale"},{"attributes":{"source":{"id":"1736"}},"id":"1740","type":"CDSView"},{"attributes":{},"id":"1767","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1712"}],"center":[{"id":"1715"},{"id":"1719"},{"id":"1735"},{"id":"1741"},{"id":"1747"},{"id":"1753"},{"id":"1780"}],"left":[{"id":"1716"}],"plot_width":800,"renderers":[{"id":"1739"},{"id":"1745"},{"id":"1751"},{"id":"1757"},{"id":"1762"}],"title":{"id":"1702"},"toolbar":{"id":"1727"},"x_range":{"id":"1734"},"x_scale":{"id":"1708"},"y_range":{"id":"1706"},"y_scale":{"id":"1710"}},"id":"1701","subtype":"Figure","type":"Plot"},{"attributes":{"text":"BERT-base","x":1,"y":76.7},"id":"1735","type":"Label"},{"attributes":{},"id":"1723","type":"SaveTool"},{"attributes":{"end":3.0,"start":0.85},"id":"1734","type":"Range1d"},{"attributes":{},"id":"1772","type":"UnionRenderers"},{"attributes":{},"id":"1721","type":"WheelZoomTool"},{"attributes":{"text":"DistilBERT","x":1.63,"y":68.1776176526635},"id":"1741","type":"Label"},{"attributes":{},"id":"1710","type":"LinearScale"},{"attributes":{"axis":{"id":"1716"},"dimension":1,"ticker":null},"id":"1719","type":"Grid"},{"attributes":{},"id":"1706","type":"DataRange1d"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"1762"}]},"id":"1781","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1744","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1750","type":"Scatter"},{"attributes":{},"id":"1773","type":"Selection"},{"attributes":{"axis":{"id":"1712"},"ticker":null},"id":"1715","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1738","type":"Scatter"},{"attributes":{"source":{"id":"1754"}},"id":"1758","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1743","type":"Scatter"},{"attributes":{"source":{"id":"1748"}},"id":"1752","type":"CDSView"},{"attributes":{},"id":"1725","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1720"},{"id":"1721"},{"id":"1722"},{"id":"1723"},{"id":"1724"},{"id":"1725"}]},"id":"1727","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1761","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1756","type":"Scatter"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":79.2},"id":"1753","type":"Label"},{"attributes":{},"id":"1774","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.0],"y":[77.7]},"selected":{"id":"1775"},"selection_policy":{"id":"1774"}},"id":"1748","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1742"},"glyph":{"id":"1743"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1744"},"selection_glyph":null,"view":{"id":"1746"}},"id":"1745","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.6923735173130998,1.7148910776748587,1.9849952022045032,1.988623514887414,2.1899429745036167,2.2280217908848052],"y":[76.36922308183819,75.58377333824575,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"1779"},"selection_policy":{"id":"1778"}},"id":"1759","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1726","type":"BoxAnnotation"},{"attributes":{"source":{"id":"1759"}},"id":"1763","type":"CDSView"},{"attributes":{},"id":"1775","type":"Selection"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1767"},"ticker":{"id":"1713"}},"id":"1712","type":"LinearAxis"},{"attributes":{},"id":"1724","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1737","type":"Scatter"},{"attributes":{"overlay":{"id":"1726"}},"id":"1722","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1759"},"glyph":{"id":"1760"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1761"},"selection_glyph":null,"view":{"id":"1763"}},"id":"1762","type":"GlyphRenderer"}],"root_ids":["1701"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"0bde5f67-f935-4cdd-a2f1-1e71d9fc74f7","root_ids":["1701"],"roots":{"1701":"e494e0f4-c092-4e2a-ad5c-40abd3d2e9e4"}}];
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