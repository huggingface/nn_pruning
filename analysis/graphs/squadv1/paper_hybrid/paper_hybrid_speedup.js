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
    
      
      
    
      var element = document.getElementById("f42259c5-1912-45c2-96c5-249f24193358");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f42259c5-1912-45c2-96c5-249f24193358' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8bfd7a1e-7347-4c9e-b671-c1270e339275":{"roots":{"references":[{"attributes":{},"id":"2319","type":"UnionRenderers"},{"attributes":{"source":{"id":"2205"}},"id":"2209","type":"CDSView"},{"attributes":{},"id":"2320","type":"Selection"},{"attributes":{"data_source":{"id":"2217"},"glyph":{"id":"2218"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2219"},"selection_glyph":null,"view":{"id":"2221"}},"id":"2220","type":"GlyphRenderer"},{"attributes":{},"id":"2184","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2207","type":"Scatter"},{"attributes":{},"id":"2231","type":"BasicTickFormatter"},{"attributes":{},"id":"2171","type":"LinearScale"},{"attributes":{"source":{"id":"2217"}},"id":"2221","type":"CDSView"},{"attributes":{"source":{"id":"2222"}},"id":"2226","type":"CDSView"},{"attributes":{"data_source":{"id":"2199"},"glyph":{"id":"2200"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2201"},"selection_glyph":null,"view":{"id":"2203"}},"id":"2202","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9695394330694393,2.1003540884863323,2.1124331270315624,2.227490161916501,2.262663009764823,2.471023235070233,2.61711931355729,2.681246344578876,2.704854439028025,2.860446087610368,2.86191312967017],"y":[88.06903108265608,87.70461789964966,87.48291010744668,87.3881230572442,87.14755939306319,86.74156854566804,86.39441106336629,86.20063710644014,86.11992485005756,85.69020560735045,85.6109462422114]},"selected":{"id":"2266"},"selection_policy":{"id":"2265"}},"id":"2245","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"2235"},"selection_policy":{"id":"2234"}},"id":"2205","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2245"}},"id":"2249","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2224","type":"Line"},{"attributes":{"overlay":{"id":"2189"}},"id":"2185","type":"BoxZoomTool"},{"attributes":{},"id":"2187","type":"ResetTool"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":90.0},"id":"2216","type":"Label"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2246","type":"Line"},{"attributes":{"data_source":{"id":"2222"},"glyph":{"id":"2223"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2224"},"selection_glyph":null,"view":{"id":"2226"}},"id":"2225","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2247","type":"Line"},{"attributes":{},"id":"2232","type":"UnionRenderers"},{"attributes":{},"id":"2233","type":"Selection"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"2248"}]},"id":"2268","type":"LegendItem"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2270","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2200","type":"Scatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2183"},{"id":"2184"},{"id":"2185"},{"id":"2186"},{"id":"2187"},{"id":"2188"}]},"id":"2190","type":"Toolbar"},{"attributes":{},"id":"2186","type":"SaveTool"},{"attributes":{"axis_label":"F1","formatter":{"id":"2231"},"ticker":{"id":"2180"}},"id":"2179","type":"LinearAxis"},{"attributes":{},"id":"2229","type":"BasicTickFormatter"},{"attributes":{"end":3.0,"start":0.85},"id":"2197","type":"Range1d"},{"attributes":{},"id":"2265","type":"UnionRenderers"},{"attributes":{},"id":"2234","type":"UnionRenderers"},{"attributes":{},"id":"2266","type":"Selection"},{"attributes":{},"id":"2173","type":"LinearScale"},{"attributes":{},"id":"2235","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2189","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2213","type":"Scatter"},{"attributes":{"data_source":{"id":"2245"},"glyph":{"id":"2246"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2247"},"selection_glyph":null,"view":{"id":"2249"}},"id":"2248","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2212","type":"Scatter"},{"attributes":{},"id":"2188","type":"HelpTool"},{"attributes":{"data_source":{"id":"2269"},"glyph":{"id":"2270"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2271"},"selection_glyph":null,"view":{"id":"2273"}},"id":"2272","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2175"}],"center":[{"id":"2178"},{"id":"2182"},{"id":"2198"},{"id":"2204"},{"id":"2210"},{"id":"2216"},{"id":"2243"}],"left":[{"id":"2179"}],"plot_width":800,"renderers":[{"id":"2202"},{"id":"2208"},{"id":"2214"},{"id":"2220"},{"id":"2225"},{"id":"2248"},{"id":"2272"},{"id":"2298"}],"title":{"id":"2165"},"toolbar":{"id":"2190"},"x_range":{"id":"2197"},"x_scale":{"id":"2171"},"y_range":{"id":"2169"},"y_scale":{"id":"2173"}},"id":"2164","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2236","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"2237"},"selection_policy":{"id":"2236"}},"id":"2211","type":"ColumnDataSource"},{"attributes":{},"id":"2176","type":"BasicTicker"},{"attributes":{},"id":"2237","type":"Selection"},{"attributes":{"data":{"x":[0.9300676995438012,0.9350465325310627,1.0289741034797428,1.2936473074353696,1.3610235261481995,1.4072439764136124,1.4315993728861762,1.4324102529903697,1.4331301499255447],"y":[90.32458147221426,90.22195941338013,89.04761607630476,87.8561484925226,86.9851273164745,86.51897974152047,86.42554404823127,86.34346487920875,86.23578242662717]},"selected":{"id":"2292"},"selection_policy":{"id":"2291"}},"id":"2269","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2269"}},"id":"2273","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2271","type":"Line"},{"attributes":{"axis":{"id":"2175"},"ticker":null},"id":"2178","type":"Grid"},{"attributes":{"text":"BERT-base","x":1,"y":88.5},"id":"2198","type":"Label"},{"attributes":{"label":{"value":"Hybrid, large"},"renderers":[{"id":"2272"}]},"id":"2294","type":"LegendItem"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2296","type":"Line"},{"attributes":{},"id":"2238","type":"UnionRenderers"},{"attributes":{},"id":"2239","type":"Selection"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2223","type":"Line"},{"attributes":{"source":{"id":"2199"}},"id":"2203","type":"CDSView"},{"attributes":{},"id":"2291","type":"UnionRenderers"},{"attributes":{},"id":"2292","type":"Selection"},{"attributes":{"data":{"x":[1],"y":[88.5]},"selected":{"id":"2233"},"selection_policy":{"id":"2232"}},"id":"2199","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"2225"}]},"id":"2244","type":"LegendItem"},{"attributes":{"data_source":{"id":"2211"},"glyph":{"id":"2212"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2213"},"selection_glyph":null,"view":{"id":"2215"}},"id":"2214","type":"GlyphRenderer"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"2165","type":"Title"},{"attributes":{"text":"TinyBERT","x":2.0,"y":87.5},"id":"2210","type":"Label"},{"attributes":{"click_policy":"hide","items":[{"id":"2244"},{"id":"2268"},{"id":"2294"},{"id":"2322"}]},"id":"2243","type":"Legend"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2206","type":"Scatter"},{"attributes":{"source":{"id":"2211"}},"id":"2215","type":"CDSView"},{"attributes":{},"id":"2240","type":"UnionRenderers"},{"attributes":{},"id":"2241","type":"Selection"},{"attributes":{"data_source":{"id":"2205"},"glyph":{"id":"2206"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2207"},"selection_glyph":null,"view":{"id":"2209"}},"id":"2208","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2295"},"glyph":{"id":"2296"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2297"},"selection_glyph":null,"view":{"id":"2299"}},"id":"2298","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.9840340185670864,1.026141974757969,1.095528107464865,1.1632636047982534,1.170038217254783,1.2607211638158147,1.3349999991845345,1.3926143255719736,1.5170581452285046],"y":[90.24019516114679,89.78322305629628,88.66959543954316,88.11360890595924,87.64967103979136,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"2241"},"selection_policy":{"id":"2240"}},"id":"2222","type":"ColumnDataSource"},{"attributes":{},"id":"2180","type":"BasicTicker"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"2229"},"ticker":{"id":"2176"}},"id":"2175","type":"LinearAxis"},{"attributes":{"text":"DistilBERT","x":1.63,"y":86.9},"id":"2204","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2219","type":"Scatter"},{"attributes":{"data":{"x":[1.550702144203815,1.816892934733715,2.0527490991469155,2.095053330406629,2.3158516160525413,2.6437372826229817],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"2320"},"selection_policy":{"id":"2319"}},"id":"2295","type":"ColumnDataSource"},{"attributes":{},"id":"2169","type":"DataRange1d"},{"attributes":{"source":{"id":"2295"}},"id":"2299","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2201","type":"Scatter"},{"attributes":{"data":{"x":[1.612951511916643],"y":[90.0]},"selected":{"id":"2239"},"selection_policy":{"id":"2238"}},"id":"2217","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2297","type":"Line"},{"attributes":{"axis":{"id":"2179"},"dimension":1,"ticker":null},"id":"2182","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2218","type":"Scatter"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"2298"}]},"id":"2322","type":"LegendItem"},{"attributes":{},"id":"2183","type":"PanTool"}],"root_ids":["2164"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"8bfd7a1e-7347-4c9e-b671-c1270e339275","root_ids":["2164"],"roots":{"2164":"f42259c5-1912-45c2-96c5-249f24193358"}}];
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