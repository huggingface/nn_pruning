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
    
      
      
    
      var element = document.getElementById("02c851b3-d63f-4f15-8701-76f3c6b47304");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '02c851b3-d63f-4f15-8701-76f3c6b47304' but no matching script tag was found.")
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
                    
                  var docs_json = '{"52d283c6-9789-4888-a3b1-d51d97544505":{"roots":{"references":[{"attributes":{"data":{"x":[1.2129893613486789,1.232662374177603,1.4146984734806616,1.4569389629649467,1.5765472050873537,1.599770932365684,1.7643216216448254,1.7886473497076825,1.9655458674518098,2.0054680821187447,2.2874144573134694,2.289378243109522],"y":[88.73698799207777,88.67903677006836,88.10463591853348,87.91705961229685,87.40026291426761,87.30735739624531,86.768721062838,86.11161494070976,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"1104"},"selection_policy":{"id":"1103"}},"id":"1083","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1083"}},"id":"1087","type":"CDSView"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"source":{"id":"1049"}},"id":"1053","type":"CDSView"},{"attributes":{"source":{"id":"1055"}},"id":"1059","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1162","type":"Line"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1084","type":"Line"},{"attributes":{"data":{"x":[1],"y":[88.5]},"selected":{"id":"1071"},"selection_policy":{"id":"1070"}},"id":"1037","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.550702144203815,1.816892934733715,2.0527490991469155,2.095053330406629,2.3158516160525413,2.6437372826229817],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"1188"},"selection_policy":{"id":"1187"}},"id":"1161","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1085","type":"Line"},{"attributes":{},"id":"1070","type":"UnionRenderers"},{"attributes":{},"id":"1071","type":"Selection"},{"attributes":{"source":{"id":"1060"}},"id":"1064","type":"CDSView"},{"attributes":{"source":{"id":"1161"}},"id":"1165","type":"CDSView"},{"attributes":{"label":{"value":"All Block"},"renderers":[{"id":"1086"}]},"id":"1106","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1163","type":"Line"},{"attributes":{"data_source":{"id":"1049"},"glyph":{"id":"1050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1051"},"selection_glyph":null,"view":{"id":"1053"}},"id":"1052","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.612951511916643],"y":[90.0]},"selected":{"id":"1077"},"selection_policy":{"id":"1076"}},"id":"1055","type":"ColumnDataSource"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1192","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1051","type":"Scatter"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"1164"}]},"id":"1190","type":"LegendItem"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{"data_source":{"id":"1060"},"glyph":{"id":"1061"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1062"},"selection_glyph":null,"view":{"id":"1064"}},"id":"1063","type":"GlyphRenderer"},{"attributes":{},"id":"1103","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1057","type":"Scatter"},{"attributes":{},"id":"1187","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{},"id":"1072","type":"UnionRenderers"},{"attributes":{},"id":"1104","type":"Selection"},{"attributes":{},"id":"1073","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Scatter"},{"attributes":{},"id":"1188","type":"Selection"},{"attributes":{"axis":{"id":"1012"},"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"data_source":{"id":"1055"},"glyph":{"id":"1056"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1057"},"selection_glyph":null,"view":{"id":"1059"}},"id":"1058","type":"GlyphRenderer"},{"attributes":{"end":3.0,"start":0.85},"id":"1034","type":"Range1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1050","type":"Scatter"},{"attributes":{"data_source":{"id":"1191"},"glyph":{"id":"1192"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1193"},"selection_glyph":null,"view":{"id":"1195"}},"id":"1194","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1056","type":"Scatter"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"1075"},"selection_policy":{"id":"1074"}},"id":"1049","type":"ColumnDataSource"},{"attributes":{},"id":"1074","type":"UnionRenderers"},{"attributes":{},"id":"1075","type":"Selection"},{"attributes":{"end":90.75,"start":84.5},"id":"1035","type":"Range1d"},{"attributes":{"data":{"x":[1.9695394330694393,2.1003540884863323,2.1124331270315624,2.227490161916501,2.262663009764823,2.471023235070233,2.61711931355729,2.681246344578876,2.704854439028025,2.860446087610368,2.86191312967017],"y":[88.06903108265608,87.70461789964966,87.48291010744668,87.3881230572442,87.14755939306319,86.74156854566804,86.39441106336629,86.20063710644014,86.11992485005756,85.69020560735045,85.6109462422114]},"selected":{"id":"1130"},"selection_policy":{"id":"1129"}},"id":"1107","type":"ColumnDataSource"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1061","type":"Line"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1108","type":"Line"},{"attributes":{"data":{"x":[0.9840340185670864,1.026141974757969,1.095528107464865,1.1632636047982534,1.170038217254783,1.2607211638158147,1.3349999991845345,1.3926143255719736,1.5170581452285046],"y":[90.24019516114679,89.78322305629628,88.66959543954316,88.11360890595924,87.64967103979136,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"1079"},"selection_policy":{"id":"1078"}},"id":"1060","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.5606414607482133,1.8333442967227587,2.075387764969063,2.306354828560857,2.363378950512201,2.36451559845159,2.6186173775098402],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,88.25975710073095,88.20838283474134,87.15966661496869]},"selected":{"id":"1220"},"selection_policy":{"id":"1219"}},"id":"1191","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"1063"}]},"id":"1082","type":"LegendItem"},{"attributes":{"data_source":{"id":"1107"},"glyph":{"id":"1108"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1109"},"selection_glyph":null,"view":{"id":"1111"}},"id":"1110","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1039","type":"Scatter"},{"attributes":{"source":{"id":"1191"}},"id":"1195","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1062","type":"Line"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{"source":{"id":"1107"}},"id":"1111","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1193","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1109","type":"Line"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"1110"}]},"id":"1132","type":"LegendItem"},{"attributes":{"data_source":{"id":"1043"},"glyph":{"id":"1044"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1045"},"selection_glyph":null,"view":{"id":"1047"}},"id":"1046","type":"GlyphRenderer"},{"attributes":{"click_policy":"hide","items":[{"id":"1082"},{"id":"1106"},{"id":"1132"},{"id":"1160"},{"id":"1190"},{"id":"1222"}]},"id":"1081","type":"Legend"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1134","type":"Line"},{"attributes":{},"id":"1076","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid Filled, large teacher"},"renderers":[{"id":"1194"}]},"id":"1222","type":"LegendItem"},{"attributes":{},"id":"1077","type":"Selection"},{"attributes":{"source":{"id":"1043"}},"id":"1047","type":"CDSView"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1067"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"},{"id":"1036"},{"id":"1042"},{"id":"1048"},{"id":"1054"},{"id":"1081"}],"left":[{"id":"1016"}],"plot_width":800,"renderers":[{"id":"1040"},{"id":"1046"},{"id":"1052"},{"id":"1058"},{"id":"1063"},{"id":"1086"},{"id":"1110"},{"id":"1136"},{"id":"1164"},{"id":"1194"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"x_range":{"id":"1034"},"x_scale":{"id":"1008"},"y_range":{"id":"1035"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1219","type":"UnionRenderers"},{"attributes":{},"id":"1129","type":"UnionRenderers"},{"attributes":{},"id":"1220","type":"Selection"},{"attributes":{},"id":"1130","type":"Selection"},{"attributes":{"source":{"id":"1037"}},"id":"1041","type":"CDSView"},{"attributes":{},"id":"1078","type":"UnionRenderers"},{"attributes":{},"id":"1067","type":"BasicTickFormatter"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{},"id":"1079","type":"Selection"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1133"},"glyph":{"id":"1134"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1135"},"selection_glyph":null,"view":{"id":"1137"}},"id":"1136","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"1073"},"selection_policy":{"id":"1072"}},"id":"1043","type":"ColumnDataSource"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"1002","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{"text":"BERT-base","x":1,"y":88.5},"id":"1036","type":"Label"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"1158"},"selection_policy":{"id":"1157"}},"id":"1133","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1133"}},"id":"1137","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":2.0,"y":87.5},"id":"1048","type":"Label"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1135","type":"Line"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{"data_source":{"id":"1161"},"glyph":{"id":"1162"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1163"},"selection_glyph":null,"view":{"id":"1165"}},"id":"1164","type":"GlyphRenderer"},{"attributes":{"axis_label":"F1","formatter":{"id":"1069"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{"text":"DistilBERT","x":1.63,"y":86.9},"id":"1042","type":"Label"},{"attributes":{},"id":"1069","type":"BasicTickFormatter"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"1136"}]},"id":"1160","type":"LegendItem"},{"attributes":{"data_source":{"id":"1037"},"glyph":{"id":"1038"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1039"},"selection_glyph":null,"view":{"id":"1041"}},"id":"1040","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1083"},"glyph":{"id":"1084"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1085"},"selection_glyph":null,"view":{"id":"1087"}},"id":"1086","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1045","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1044","type":"Scatter"},{"attributes":{},"id":"1157","type":"UnionRenderers"},{"attributes":{},"id":"1158","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":90.0},"id":"1054","type":"Label"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"52d283c6-9789-4888-a3b1-d51d97544505","root_ids":["1001"],"roots":{"1001":"02c851b3-d63f-4f15-8701-76f3c6b47304"}}];
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