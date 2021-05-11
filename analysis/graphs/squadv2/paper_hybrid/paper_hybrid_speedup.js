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
    
      
      
    
      var element = document.getElementById("b16651c2-54b8-4695-b7d5-5937fabee14b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b16651c2-54b8-4695-b7d5-5937fabee14b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c6aa9f90-daa9-422c-acbe-e6e6d5746417":{"roots":{"references":[{"attributes":{"axis":{"id":"1774"},"dimension":1,"ticker":null},"id":"1777","type":"Grid"},{"attributes":{"click_policy":"hide","items":[{"id":"1839"},{"id":"1863"}]},"id":"1838","type":"Legend"},{"attributes":{"data":{"x":[1.9743856139999647,2.1827364771962623,2.2119705358002966],"y":[75.7435955094686,74.35790789620452,74.07805149116633]},"selected":{"id":"1861"},"selection_policy":{"id":"1862"}},"id":"1840","type":"ColumnDataSource"},{"attributes":{"text":"BERT-base","x":1,"y":76.7},"id":"1793","type":"Label"},{"attributes":{"axis":{"id":"1770"},"ticker":null},"id":"1773","type":"Grid"},{"attributes":{"source":{"id":"1840"}},"id":"1844","type":"CDSView"},{"attributes":{"data_source":{"id":"1812"},"glyph":{"id":"1813"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1814"},"selection_glyph":null,"view":{"id":"1816"}},"id":"1815","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1819","type":"Line"},{"attributes":{},"id":"1828","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1813","type":"Scatter"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1841","type":"Line"},{"attributes":{},"id":"1829","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1842","type":"Line"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"1843"}]},"id":"1863","type":"LegendItem"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1818","type":"Line"},{"attributes":{"text":"DistilBERT","x":1.63,"y":68.1776176526635},"id":"1799","type":"Label"},{"attributes":{"data":{"x":[1.63],"y":[68.1776176526635]},"selected":{"id":"1830"},"selection_policy":{"id":"1831"}},"id":"1800","type":"ColumnDataSource"},{"attributes":{},"id":"1782","type":"ResetTool"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"1760","type":"Title"},{"attributes":{"data_source":{"id":"1800"},"glyph":{"id":"1801"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1802"},"selection_glyph":null,"view":{"id":"1804"}},"id":"1803","type":"GlyphRenderer"},{"attributes":{},"id":"1830","type":"Selection"},{"attributes":{},"id":"1831","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1796","type":"Scatter"},{"attributes":{"source":{"id":"1817"}},"id":"1821","type":"CDSView"},{"attributes":{},"id":"1861","type":"Selection"},{"attributes":{"data_source":{"id":"1806"},"glyph":{"id":"1807"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1808"},"selection_glyph":null,"view":{"id":"1810"}},"id":"1809","type":"GlyphRenderer"},{"attributes":{},"id":"1862","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.6923735326861915,1.7148910932524941,1.984995220235696,1.9886235329515656,2.189942994396503,2.2280218111235897],"y":[76.36922308183819,75.58377333824575,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"1836"},"selection_policy":{"id":"1837"}},"id":"1817","type":"ColumnDataSource"},{"attributes":{"end":3.0,"start":0.85},"id":"1792","type":"Range1d"},{"attributes":{"data_source":{"id":"1817"},"glyph":{"id":"1818"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1819"},"selection_glyph":null,"view":{"id":"1821"}},"id":"1820","type":"GlyphRenderer"},{"attributes":{},"id":"1764","type":"DataRange1d"},{"attributes":{},"id":"1832","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1802","type":"Scatter"},{"attributes":{},"id":"1833","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1794"},"glyph":{"id":"1795"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1796"},"selection_glyph":null,"view":{"id":"1798"}},"id":"1797","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1],"y":[76.7]},"selected":{"id":"1828"},"selection_policy":{"id":"1829"}},"id":"1794","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1808","type":"Scatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1778"},{"id":"1779"},{"id":"1780"},{"id":"1781"},{"id":"1782"},{"id":"1783"}]},"id":"1785","type":"Toolbar"},{"attributes":{},"id":"1766","type":"LinearScale"},{"attributes":{},"id":"1771","type":"BasicTicker"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1823"},"ticker":{"id":"1771"}},"id":"1770","type":"LinearAxis"},{"attributes":{"axis_label":"F1","formatter":{"id":"1825"},"ticker":{"id":"1775"}},"id":"1774","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1801","type":"Scatter"},{"attributes":{},"id":"1834","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1814","type":"Scatter"},{"attributes":{},"id":"1835","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1784","type":"BoxAnnotation"},{"attributes":{},"id":"1768","type":"LinearScale"},{"attributes":{},"id":"1783","type":"HelpTool"},{"attributes":{},"id":"1836","type":"Selection"},{"attributes":{"below":[{"id":"1770"}],"center":[{"id":"1773"},{"id":"1777"},{"id":"1793"},{"id":"1799"},{"id":"1805"},{"id":"1811"},{"id":"1838"}],"left":[{"id":"1774"}],"plot_width":800,"renderers":[{"id":"1797"},{"id":"1803"},{"id":"1809"},{"id":"1815"},{"id":"1820"},{"id":"1843"}],"title":{"id":"1760"},"toolbar":{"id":"1785"},"x_range":{"id":"1792"},"x_scale":{"id":"1766"},"y_range":{"id":"1764"},"y_scale":{"id":"1768"}},"id":"1759","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1837","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"1820"}]},"id":"1839","type":"LegendItem"},{"attributes":{},"id":"1775","type":"BasicTicker"},{"attributes":{},"id":"1781","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1807","type":"Scatter"},{"attributes":{"source":{"id":"1806"}},"id":"1810","type":"CDSView"},{"attributes":{"data":{"x":[1.612951511916643],"y":[79.2]},"selected":{"id":"1834"},"selection_policy":{"id":"1835"}},"id":"1812","type":"ColumnDataSource"},{"attributes":{"text":"TinyBERT","x":2.0,"y":77.7},"id":"1805","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1795","type":"Scatter"},{"attributes":{},"id":"1778","type":"PanTool"},{"attributes":{"source":{"id":"1800"}},"id":"1804","type":"CDSView"},{"attributes":{"data_source":{"id":"1840"},"glyph":{"id":"1841"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1842"},"selection_glyph":null,"view":{"id":"1844"}},"id":"1843","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1794"}},"id":"1798","type":"CDSView"},{"attributes":{"source":{"id":"1812"}},"id":"1816","type":"CDSView"},{"attributes":{},"id":"1825","type":"BasicTickFormatter"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":79.2},"id":"1811","type":"Label"},{"attributes":{"overlay":{"id":"1784"}},"id":"1780","type":"BoxZoomTool"},{"attributes":{},"id":"1779","type":"WheelZoomTool"},{"attributes":{"data":{"x":[2.0],"y":[77.7]},"selected":{"id":"1832"},"selection_policy":{"id":"1833"}},"id":"1806","type":"ColumnDataSource"},{"attributes":{},"id":"1823","type":"BasicTickFormatter"}],"root_ids":["1759"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"c6aa9f90-daa9-422c-acbe-e6e6d5746417","root_ids":["1759"],"roots":{"1759":"b16651c2-54b8-4695-b7d5-5937fabee14b"}}];
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