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
    
      
      
    
      var element = document.getElementById("154a837c-4b9d-434a-90ab-da66808759ec");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '154a837c-4b9d-434a-90ab-da66808759ec' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0c3476e1-1520-4921-9dda-8a6be486998e":{"roots":{"references":[{"attributes":{},"id":"2166","type":"BasicTickFormatter"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":90.0},"id":"2154","type":"Label"},{"attributes":{},"id":"2259","type":"Selection"},{"attributes":{},"id":"2107","type":"DataRange1d"},{"attributes":{"source":{"id":"2143"}},"id":"2147","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2162","type":"Line"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2234","type":"Line"},{"attributes":{"data":{"x":[1.550702144203815,1.816892934733715,2.0527490991469155,2.095053330406629,2.3158516160525413,2.6437372826229817],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"2259"},"selection_policy":{"id":"2258"}},"id":"2233","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2233"}},"id":"2237","type":"CDSView"},{"attributes":{"click_policy":"hide","items":[{"id":"2182"},{"id":"2206"},{"id":"2232"},{"id":"2260"}]},"id":"2181","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2235","type":"Line"},{"attributes":{"source":{"id":"2155"}},"id":"2159","type":"CDSView"},{"attributes":{"axis_label":"F1","formatter":{"id":"2168"},"ticker":{"id":"2118"}},"id":"2117","type":"LinearAxis"},{"attributes":{},"id":"2258","type":"UnionRenderers"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"2103","type":"Title"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"2236"}]},"id":"2260","type":"LegendItem"},{"attributes":{"text":"BERT-base","x":1,"y":88.5},"id":"2136","type":"Label"},{"attributes":{"data_source":{"id":"2160"},"glyph":{"id":"2161"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2162"},"selection_glyph":null,"view":{"id":"2164"}},"id":"2163","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"2117"},"dimension":1,"ticker":null},"id":"2120","type":"Grid"},{"attributes":{"data_source":{"id":"2143"},"glyph":{"id":"2144"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2145"},"selection_glyph":null,"view":{"id":"2147"}},"id":"2146","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2145","type":"Scatter"},{"attributes":{"data_source":{"id":"2149"},"glyph":{"id":"2150"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2151"},"selection_glyph":null,"view":{"id":"2153"}},"id":"2152","type":"GlyphRenderer"},{"attributes":{},"id":"2168","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2139","type":"Scatter"},{"attributes":{},"id":"2121","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2121"},{"id":"2122"},{"id":"2123"},{"id":"2124"},{"id":"2125"},{"id":"2126"}]},"id":"2128","type":"Toolbar"},{"attributes":{"source":{"id":"2137"}},"id":"2141","type":"CDSView"},{"attributes":{},"id":"2111","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2138","type":"Scatter"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2161","type":"Line"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"2166"},"ticker":{"id":"2114"}},"id":"2113","type":"LinearAxis"},{"attributes":{"text":"TinyBERT","x":2.0,"y":87.5},"id":"2148","type":"Label"},{"attributes":{"data":{"x":[1],"y":[88.5]},"selected":{"id":"2172"},"selection_policy":{"id":"2171"}},"id":"2137","type":"ColumnDataSource"},{"attributes":{},"id":"2171","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.9695394330694393,2.1003540884863323,2.1124331270315624,2.227490161916501,2.262663009764823,2.471023235070233,2.61711931355729,2.681246344578876,2.704854439028025,2.860446087610368,2.86191312967017],"y":[88.06903108265608,87.70461789964966,87.48291010744668,87.3881230572442,87.14755939306319,86.74156854566804,86.39441106336629,86.20063710644014,86.11992485005756,85.69020560735045,85.6109462422114]},"selected":{"id":"2205"},"selection_policy":{"id":"2204"}},"id":"2183","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2137"},"glyph":{"id":"2138"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2139"},"selection_glyph":null,"view":{"id":"2141"}},"id":"2140","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2183"}},"id":"2187","type":"CDSView"},{"attributes":{},"id":"2172","type":"Selection"},{"attributes":{},"id":"2231","type":"Selection"},{"attributes":{"end":3.0,"start":0.85},"id":"2135","type":"Range1d"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"2176"},"selection_policy":{"id":"2175"}},"id":"2149","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2149"}},"id":"2153","type":"CDSView"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2184","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2185","type":"Line"},{"attributes":{"text":"DistilBERT","x":1.63,"y":86.9},"id":"2142","type":"Label"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2186"}]},"id":"2206","type":"LegendItem"},{"attributes":{"data_source":{"id":"2155"},"glyph":{"id":"2156"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2157"},"selection_glyph":null,"view":{"id":"2159"}},"id":"2158","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2208","type":"Line"},{"attributes":{"data":{"x":[1.612951511916643],"y":[90.0]},"selected":{"id":"2178"},"selection_policy":{"id":"2177"}},"id":"2155","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2127","type":"BoxAnnotation"},{"attributes":{},"id":"2204","type":"UnionRenderers"},{"attributes":{},"id":"2173","type":"UnionRenderers"},{"attributes":{},"id":"2205","type":"Selection"},{"attributes":{},"id":"2174","type":"Selection"},{"attributes":{"source":{"id":"2160"}},"id":"2164","type":"CDSView"},{"attributes":{"data_source":{"id":"2183"},"glyph":{"id":"2184"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2185"},"selection_glyph":null,"view":{"id":"2187"}},"id":"2186","type":"GlyphRenderer"},{"attributes":{},"id":"2114","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2144","type":"Scatter"},{"attributes":{},"id":"2126","type":"HelpTool"},{"attributes":{},"id":"2175","type":"UnionRenderers"},{"attributes":{},"id":"2109","type":"LinearScale"},{"attributes":{},"id":"2176","type":"Selection"},{"attributes":{"data_source":{"id":"2207"},"glyph":{"id":"2208"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2209"},"selection_glyph":null,"view":{"id":"2211"}},"id":"2210","type":"GlyphRenderer"},{"attributes":{},"id":"2118","type":"BasicTicker"},{"attributes":{},"id":"2230","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2157","type":"Scatter"},{"attributes":{"data":{"x":[0.9300676995438012,0.9350465325310627,1.0289741034797428,1.2936473074353696,1.3610235261481995,1.4072439764136124,1.4315993728861762,1.4324102529903697,1.4331301499255447],"y":[90.32458147221426,90.22195941338013,89.04761607630476,87.8561484925226,86.9851273164745,86.51897974152047,86.42554404823127,86.34346487920875,86.23578242662717]},"selected":{"id":"2231"},"selection_policy":{"id":"2230"}},"id":"2207","type":"ColumnDataSource"},{"attributes":{},"id":"2177","type":"UnionRenderers"},{"attributes":{"source":{"id":"2207"}},"id":"2211","type":"CDSView"},{"attributes":{},"id":"2178","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2209","type":"Line"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"2174"},"selection_policy":{"id":"2173"}},"id":"2143","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"2163"}]},"id":"2182","type":"LegendItem"},{"attributes":{"label":{"value":"Hybrid, large"},"renderers":[{"id":"2210"}]},"id":"2232","type":"LegendItem"},{"attributes":{},"id":"2124","type":"SaveTool"},{"attributes":{"data_source":{"id":"2233"},"glyph":{"id":"2234"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2235"},"selection_glyph":null,"view":{"id":"2237"}},"id":"2236","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2150","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2156","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2151","type":"Scatter"},{"attributes":{"below":[{"id":"2113"}],"center":[{"id":"2116"},{"id":"2120"},{"id":"2136"},{"id":"2142"},{"id":"2148"},{"id":"2154"},{"id":"2181"}],"left":[{"id":"2117"}],"plot_width":800,"renderers":[{"id":"2140"},{"id":"2146"},{"id":"2152"},{"id":"2158"},{"id":"2163"},{"id":"2186"},{"id":"2210"},{"id":"2236"}],"title":{"id":"2103"},"toolbar":{"id":"2128"},"x_range":{"id":"2135"},"x_scale":{"id":"2109"},"y_range":{"id":"2107"},"y_scale":{"id":"2111"}},"id":"2102","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2122","type":"WheelZoomTool"},{"attributes":{},"id":"2179","type":"UnionRenderers"},{"attributes":{},"id":"2180","type":"Selection"},{"attributes":{"overlay":{"id":"2127"}},"id":"2123","type":"BoxZoomTool"},{"attributes":{"data":{"x":[0.9840340185670864,1.026141974757969,1.095528107464865,1.1632636047982534,1.170038217254783,1.2607211638158147,1.3349999991845345,1.3926143255719736,1.5170581452285046],"y":[90.24019516114679,89.78322305629628,88.66959543954316,88.11360890595924,87.64967103979136,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"2180"},"selection_policy":{"id":"2179"}},"id":"2160","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"2113"},"ticker":null},"id":"2116","type":"Grid"},{"attributes":{},"id":"2125","type":"ResetTool"}],"root_ids":["2102"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"0c3476e1-1520-4921-9dda-8a6be486998e","root_ids":["2102"],"roots":{"2102":"154a837c-4b9d-434a-90ab-da66808759ec"}}];
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