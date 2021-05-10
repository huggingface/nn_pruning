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
    
      
      
    
      var element = document.getElementById("1e67b99b-aa7a-4546-9d98-f4f2b1e20ea7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1e67b99b-aa7a-4546-9d98-f4f2b1e20ea7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"84ba186f-d132-4bcc-84b2-8e2c134a8911":{"roots":{"references":[{"attributes":{"data_source":{"id":"2104"},"glyph":{"id":"2105"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2106"},"selection_glyph":null,"view":{"id":"2108"}},"id":"2107","type":"GlyphRenderer"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2082","type":"Line"},{"attributes":{},"id":"2032","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2042"},{"id":"2043"},{"id":"2044"},{"id":"2045"},{"id":"2046"},{"id":"2047"}]},"id":"2049","type":"Toolbar"},{"attributes":{},"id":"2094","type":"UnionRenderers"},{"attributes":{"source":{"id":"2058"}},"id":"2062","type":"CDSView"},{"attributes":{"source":{"id":"2081"}},"id":"2085","type":"CDSView"},{"attributes":{},"id":"2095","type":"Selection"},{"attributes":{},"id":"2100","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2083","type":"Line"},{"attributes":{"source":{"id":"2076"}},"id":"2080","type":"CDSView"},{"attributes":{},"id":"2093","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2065","type":"Scatter"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"2084"}]},"id":"2103","type":"LegendItem"},{"attributes":{},"id":"2096","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2076"},"glyph":{"id":"2077"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2078"},"selection_glyph":null,"view":{"id":"2080"}},"id":"2079","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2071","type":"Scatter"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":79.2},"id":"2075","type":"Label"},{"attributes":{"data":{"x":[1.6886187734530513,1.688632895674834,1.9668482176717705,1.967623330552778,2.1553813294806785,2.197954202178729,2.1987392442848313],"y":[76.9922204715519,76.41332910789964,75.63264927831169,75.41825183851692,73.52700323040777,73.40396080963602,73.28479728809118]},"selected":{"id":"2101"},"selection_policy":{"id":"2100"}},"id":"2081","type":"ColumnDataSource"},{"attributes":{},"id":"2097","type":"Selection"},{"attributes":{},"id":"2046","type":"ResetTool"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"2024","type":"Title"},{"attributes":{},"id":"2035","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2048","type":"BoxAnnotation"},{"attributes":{"data":{"x":[1.612951511916643],"y":[79.2]},"selected":{"id":"2099"},"selection_policy":{"id":"2098"}},"id":"2076","type":"ColumnDataSource"},{"attributes":{},"id":"2098","type":"UnionRenderers"},{"attributes":{"text":"TinyBERT","x":2.0,"y":77.7},"id":"2069","type":"Label"},{"attributes":{},"id":"2099","type":"Selection"},{"attributes":{"text":"BERT-base","x":1,"y":76.7},"id":"2057","type":"Label"},{"attributes":{"click_policy":"hide","items":[{"id":"2103"},{"id":"2127"}]},"id":"2102","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2066","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2077","type":"Scatter"},{"attributes":{},"id":"2028","type":"DataRange1d"},{"attributes":{"data_source":{"id":"2081"},"glyph":{"id":"2082"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2083"},"selection_glyph":null,"view":{"id":"2085"}},"id":"2084","type":"GlyphRenderer"},{"attributes":{},"id":"2039","type":"BasicTicker"},{"attributes":{"axis":{"id":"2034"},"ticker":null},"id":"2037","type":"Grid"},{"attributes":{"source":{"id":"2064"}},"id":"2068","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2078","type":"Scatter"},{"attributes":{"overlay":{"id":"2048"}},"id":"2044","type":"BoxZoomTool"},{"attributes":{},"id":"2087","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[1.63],"y":[68.1776176526635]},"selected":{"id":"2095"},"selection_policy":{"id":"2094"}},"id":"2064","type":"ColumnDataSource"},{"attributes":{"end":3.0,"start":0.85},"id":"2056","type":"Range1d"},{"attributes":{},"id":"2101","type":"Selection"},{"attributes":{"data":{"x":[1.6923735173130998,1.7148910776748587,1.9849952022045032,1.988623514887414,2.1899429745036167,2.2280217908848052],"y":[76.36922308183819,75.58377333824575,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"2126"},"selection_policy":{"id":"2125"}},"id":"2104","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"2038"},"dimension":1,"ticker":null},"id":"2041","type":"Grid"},{"attributes":{},"id":"2043","type":"WheelZoomTool"},{"attributes":{"source":{"id":"2104"}},"id":"2108","type":"CDSView"},{"attributes":{},"id":"2045","type":"SaveTool"},{"attributes":{},"id":"2089","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2107"}]},"id":"2127","type":"LegendItem"},{"attributes":{"data_source":{"id":"2058"},"glyph":{"id":"2059"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2060"},"selection_glyph":null,"view":{"id":"2062"}},"id":"2061","type":"GlyphRenderer"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2105","type":"Line"},{"attributes":{"below":[{"id":"2034"}],"center":[{"id":"2037"},{"id":"2041"},{"id":"2057"},{"id":"2063"},{"id":"2069"},{"id":"2075"},{"id":"2102"}],"left":[{"id":"2038"}],"plot_width":800,"renderers":[{"id":"2061"},{"id":"2067"},{"id":"2073"},{"id":"2079"},{"id":"2084"},{"id":"2107"}],"title":{"id":"2024"},"toolbar":{"id":"2049"},"x_range":{"id":"2056"},"x_scale":{"id":"2030"},"y_range":{"id":"2028"},"y_scale":{"id":"2032"}},"id":"2023","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2106","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2072","type":"Scatter"},{"attributes":{},"id":"2042","type":"PanTool"},{"attributes":{"source":{"id":"2070"}},"id":"2074","type":"CDSView"},{"attributes":{},"id":"2047","type":"HelpTool"},{"attributes":{"data":{"x":[1],"y":[76.7]},"selected":{"id":"2093"},"selection_policy":{"id":"2092"}},"id":"2058","type":"ColumnDataSource"},{"attributes":{"text":"DistilBERT","x":1.63,"y":68.1776176526635},"id":"2063","type":"Label"},{"attributes":{"axis_label":"F1","formatter":{"id":"2087"},"ticker":{"id":"2039"}},"id":"2038","type":"LinearAxis"},{"attributes":{},"id":"2030","type":"LinearScale"},{"attributes":{"data_source":{"id":"2070"},"glyph":{"id":"2071"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2072"},"selection_glyph":null,"view":{"id":"2074"}},"id":"2073","type":"GlyphRenderer"},{"attributes":{},"id":"2125","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2060","type":"Scatter"},{"attributes":{},"id":"2126","type":"Selection"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"2089"},"ticker":{"id":"2035"}},"id":"2034","type":"LinearAxis"},{"attributes":{"data":{"x":[2.0],"y":[77.7]},"selected":{"id":"2097"},"selection_policy":{"id":"2096"}},"id":"2070","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2064"},"glyph":{"id":"2065"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2066"},"selection_glyph":null,"view":{"id":"2068"}},"id":"2067","type":"GlyphRenderer"},{"attributes":{},"id":"2092","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2059","type":"Scatter"}],"root_ids":["2023"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"84ba186f-d132-4bcc-84b2-8e2c134a8911","root_ids":["2023"],"roots":{"2023":"1e67b99b-aa7a-4546-9d98-f4f2b1e20ea7"}}];
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