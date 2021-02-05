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
    
      
      
    
      var element = document.getElementById("b62c8fc6-4a13-47ab-b66a-55646141eb1d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b62c8fc6-4a13-47ab-b66a-55646141eb1d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"278c18b5-26c9-4b1d-acac-37866d573326":{"roots":{"references":[{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{"label":{"value":"BERT base, hybrid pruning"},"renderers":[{"id":"1037"}]},"id":"1048","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1036","type":"Line"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"data":{"x":[0.9221729963255725,0.9261182619659336,0.929906085171529,1.0281280670181348,1.034699920808227],"y":[91.0266636723574,90.84270784891945,90.73941291394593,90.16320537561052,90.10843526218638]},"selected":{"id":"1062"},"selection_policy":{"id":"1063"}},"id":"1049","type":"ColumnDataSource"},{"attributes":{},"id":"1045","type":"Selection"},{"attributes":{"data_source":{"id":"1049"},"glyph":{"id":"1050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1051"},"selection_glyph":null,"view":{"id":"1053"}},"id":"1052","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1051","type":"Line"},{"attributes":{},"id":"1062","type":"Selection"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{"axis_label":"y","formatter":{"id":"1041"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{"data":{"x":[3.0334457011164853,3.064498644631839,3.198427826329907,3.345964239980557,3.3600072707194957,3.3926900622840255,3.537229811528122,3.5770330236355736,3.6353458521805493,3.6402791562343726,3.6439618700884893],"y":[86.86229967213058,86.70235473718577,86.37059709799422,86.30683282660192,86.2625032125089,86.19280466015066,85.91370280008687,85.77799129804794,85.60283555208089,85.51634639956605,85.45260706155949]},"selected":{"id":"1080"},"selection_policy":{"id":"1081"}},"id":"1065","type":"ColumnDataSource"},{"attributes":{"text":"simple line example"},"id":"1002","type":"Title"},{"attributes":{"source":{"id":"1065"}},"id":"1069","type":"CDSView"},{"attributes":{"source":{"id":"1034"}},"id":"1038","type":"CDSView"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"},{"id":"1047"}],"left":[{"id":"1016"}],"renderers":[{"id":"1037"},{"id":"1052"},{"id":"1068"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"x_range":{"id":"1004"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1035","type":"Line"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,1.9839754797994356,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.24613086360249,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"1045"},"selection_policy":{"id":"1046"}},"id":"1034","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1066","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"1048"},{"id":"1064"},{"id":"1082"}]},"id":"1047","type":"Legend"},{"attributes":{"data_source":{"id":"1034"},"glyph":{"id":"1035"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1036"},"selection_glyph":null,"view":{"id":"1038"}},"id":"1037","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1065"},"glyph":{"id":"1066"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1067"},"selection_glyph":null,"view":{"id":"1069"}},"id":"1068","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1067","type":"Line"},{"attributes":{"label":{"value":"BERT large, hybrid pruning"},"renderers":[{"id":"1052"}]},"id":"1064","type":"LegendItem"},{"attributes":{},"id":"1046","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1050","type":"Line"},{"attributes":{},"id":"1081","type":"UnionRenderers"},{"attributes":{},"id":"1004","type":"DataRange1d"},{"attributes":{},"id":"1041","type":"BasicTickFormatter"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{"label":{"value":"BERT-base, structured pruning"},"renderers":[{"id":"1068"}]},"id":"1082","type":"LegendItem"},{"attributes":{"axis_label":"x","formatter":{"id":"1043"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"axis":{"id":"1012"},"ticker":null},"id":"1015","type":"Grid"},{"attributes":{},"id":"1043","type":"BasicTickFormatter"},{"attributes":{},"id":"1080","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{},"id":"1063","type":"UnionRenderers"},{"attributes":{"source":{"id":"1049"}},"id":"1053","type":"CDSView"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"278c18b5-26c9-4b1d-acac-37866d573326","root_ids":["1001"],"roots":{"1001":"b62c8fc6-4a13-47ab-b66a-55646141eb1d"}}];
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