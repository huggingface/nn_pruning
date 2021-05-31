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
    
      
      
    
      var element = document.getElementById("db959dab-5eaa-4e89-9029-297ef1d085a6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'db959dab-5eaa-4e89-9029-297ef1d085a6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"66b60398-e7f7-4c6c-9da9-b004fec1741b":{"roots":{"references":[{"attributes":{},"id":"1188","type":"UnionRenderers"},{"attributes":{},"id":"1104","type":"UnionRenderers"},{"attributes":{"end":90.5,"start":83.5},"id":"1034","type":"Range1d"},{"attributes":{},"id":"1071","type":"UnionRenderers"},{"attributes":{},"id":"1074","type":"Selection"},{"attributes":{},"id":"1016","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1059"},"glyph":{"id":"1060"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1061"},"selection_glyph":null,"view":{"id":"1063"}},"id":"1062","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1015"},"dimension":1,"ticker":null},"id":"1018","type":"Grid"},{"attributes":{},"id":"1075","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1025","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1037","type":"Scatter"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1161","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1050","type":"Scatter"},{"attributes":{"end":2.9,"start":0.95},"id":"1033","type":"Range1d"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1107","type":"Line"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":90.0},"id":"1053","type":"Label"},{"attributes":{"data":{"x":[1.9695394330694393,2.1003540884863323,2.1124331270315624,2.227490161916501,2.262663009764823,2.471023235070233,2.61711931355729,2.681246344578876,2.704854439028025,2.860446087610368,2.86191312967017],"y":[88.06903108265608,87.70461789964966,87.48291010744668,87.3881230572442,87.14755939306319,86.74156854566804,86.39441106336629,86.20063710644014,86.11992485005756,85.69020560735045,85.6109462422114]},"selected":{"id":"1129"},"selection_policy":{"id":"1130"}},"id":"1106","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.8799112593179124],"y":[87.5]},"selected":{"id":"1074"},"selection_policy":{"id":"1075"}},"id":"1048","type":"ColumnDataSource"},{"attributes":{},"id":"1012","type":"BasicTicker"},{"attributes":{"source":{"id":"1042"}},"id":"1046","type":"CDSView"},{"attributes":{"source":{"id":"1106"}},"id":"1110","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1055","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1108","type":"Line"},{"attributes":{},"id":"1076","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1049","type":"Scatter"},{"attributes":{"source":{"id":"1059"}},"id":"1063","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1056","type":"Scatter"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"1109"}]},"id":"1131","type":"LegendItem"},{"attributes":{},"id":"1077","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.612951511916643],"y":[90.0]},"selected":{"id":"1076"},"selection_policy":{"id":"1077"}},"id":"1054","type":"ColumnDataSource"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1133","type":"Line"},{"attributes":{"source":{"id":"1048"}},"id":"1052","type":"CDSView"},{"attributes":{"data_source":{"id":"1048"},"glyph":{"id":"1049"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1050"},"selection_glyph":null,"view":{"id":"1052"}},"id":"1051","type":"GlyphRenderer"},{"attributes":{"axis_label":"F1","formatter":{"id":"1067"},"ticker":{"id":"1016"}},"id":"1015","type":"LinearAxis"},{"attributes":{},"id":"1129","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1043","type":"Scatter"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1060","type":"Line"},{"attributes":{"source":{"id":"1054"}},"id":"1058","type":"CDSView"},{"attributes":{},"id":"1078","type":"Selection"},{"attributes":{"data_source":{"id":"1054"},"glyph":{"id":"1055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1056"},"selection_glyph":null,"view":{"id":"1058"}},"id":"1057","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1036"}},"id":"1040","type":"CDSView"},{"attributes":{"data":{"x":[0.9840340185670864,1.026141974757969,1.095528107464865,1.1632636047982534,1.170038217254783,1.2607211638158147,1.3349999991845345,1.3926143255719736,1.5170581452285046],"y":[90.24019516114679,89.78322305629628,88.66959543954316,88.11360890595924,87.64967103979136,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"1078"},"selection_policy":{"id":"1079"}},"id":"1059","type":"ColumnDataSource"},{"attributes":{},"id":"1130","type":"UnionRenderers"},{"attributes":{"label":{"value":"Movement"},"renderers":[{"id":"1062"}]},"id":"1081","type":"LegendItem"},{"attributes":{},"id":"1079","type":"UnionRenderers"},{"attributes":{},"id":"1019","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1061","type":"Line"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1065"},"ticker":{"id":"1012"}},"id":"1011","type":"LinearAxis"},{"attributes":{"click_policy":"hide","items":[{"id":"1081"},{"id":"1105"},{"id":"1131"},{"id":"1159"},{"id":"1189"}],"location":"bottom_center"},"id":"1080","type":"Legend"},{"attributes":{"data_source":{"id":"1132"},"glyph":{"id":"1133"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1134"},"selection_glyph":null,"view":{"id":"1136"}},"id":"1135","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"1157"},"selection_policy":{"id":"1158"}},"id":"1132","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1132"}},"id":"1136","type":"CDSView"},{"attributes":{},"id":"1073","type":"UnionRenderers"},{"attributes":{"text":"TinyBERT","x":1.8799112593179124,"y":87.5},"id":"1047","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1134","type":"Line"},{"attributes":{},"id":"1072","type":"Selection"},{"attributes":{"below":[{"id":"1011"}],"center":[{"id":"1014"},{"id":"1018"},{"id":"1035"},{"id":"1041"},{"id":"1047"},{"id":"1053"},{"id":"1080"}],"left":[{"id":"1015"}],"plot_width":800,"renderers":[{"id":"1039"},{"id":"1045"},{"id":"1051"},{"id":"1057"},{"id":"1062"},{"id":"1085"},{"id":"1109"},{"id":"1135"},{"id":"1163"}],"title":null,"toolbar":{"id":"1026"},"x_range":{"id":"1033"},"x_scale":{"id":"1007"},"y_range":{"id":"1034"},"y_scale":{"id":"1009"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"1135"}]},"id":"1159","type":"LegendItem"},{"attributes":{"overlay":{"id":"1025"}},"id":"1021","type":"BoxZoomTool"},{"attributes":{},"id":"1024","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1019"},{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"}]},"id":"1026","type":"Toolbar"},{"attributes":{"data":{"x":[1],"y":[88.5]},"selected":{"id":"1070"},"selection_policy":{"id":"1071"}},"id":"1036","type":"ColumnDataSource"},{"attributes":{},"id":"1157","type":"Selection"},{"attributes":{},"id":"1065","type":"BasicTickFormatter"},{"attributes":{},"id":"1158","type":"UnionRenderers"},{"attributes":{},"id":"1067","type":"BasicTickFormatter"},{"attributes":{},"id":"1022","type":"SaveTool"},{"attributes":{"data":{"x":[1.2129893613486789,1.232662374177603,1.4146984734806616,1.4569389629649467,1.5765472050873537,1.599770932365684,1.7643216216448254,1.7886473497076825,1.9655458674518098,2.0054680821187447,2.2874144573134694,2.289378243109522],"y":[88.73698799207777,88.67903677006836,88.10463591853348,87.91705961229685,87.40026291426761,87.30735739624531,86.768721062838,86.11161494070976,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"1103"},"selection_policy":{"id":"1104"}},"id":"1082","type":"ColumnDataSource"},{"attributes":{"text":"DistilBERT","x":2.0609917530867805,"y":86.9},"id":"1041","type":"Label"},{"attributes":{},"id":"1007","type":"LinearScale"},{"attributes":{"source":{"id":"1082"}},"id":"1086","type":"CDSView"},{"attributes":{"data_source":{"id":"1160"},"glyph":{"id":"1161"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1162"},"selection_glyph":null,"view":{"id":"1164"}},"id":"1163","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Block"},"renderers":[{"id":"1085"}]},"id":"1105","type":"LegendItem"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"data_source":{"id":"1042"},"glyph":{"id":"1043"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1044"},"selection_glyph":null,"view":{"id":"1046"}},"id":"1045","type":"GlyphRenderer"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1083","type":"Line"},{"attributes":{"data":{"x":[1.5606414607482133,1.8333442967227587,2.075387764969063,2.306354828560857,2.363378950512201,2.36451559845159,2.6186173775098402],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,88.25975710073095,88.20838283474134,87.15966661496869]},"selected":{"id":"1187"},"selection_policy":{"id":"1188"}},"id":"1160","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1084","type":"Line"},{"attributes":{"source":{"id":"1160"}},"id":"1164","type":"CDSView"},{"attributes":{"text":"BERT-base","x":1,"y":88.5},"id":"1035","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1162","type":"Line"},{"attributes":{},"id":"1103","type":"Selection"},{"attributes":{"data_source":{"id":"1106"},"glyph":{"id":"1107"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1108"},"selection_glyph":null,"view":{"id":"1110"}},"id":"1109","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1044","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Scatter"},{"attributes":{"data_source":{"id":"1082"},"glyph":{"id":"1083"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1084"},"selection_glyph":null,"view":{"id":"1086"}},"id":"1085","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1011"},"ticker":null},"id":"1014","type":"Grid"},{"attributes":{},"id":"1023","type":"ResetTool"},{"attributes":{"label":{"value":"Hybrid Filled LT"},"renderers":[{"id":"1163"}]},"id":"1189","type":"LegendItem"},{"attributes":{},"id":"1020","type":"WheelZoomTool"},{"attributes":{},"id":"1187","type":"Selection"},{"attributes":{"data_source":{"id":"1036"},"glyph":{"id":"1037"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1038"},"selection_glyph":null,"view":{"id":"1040"}},"id":"1039","type":"GlyphRenderer"},{"attributes":{},"id":"1070","type":"Selection"},{"attributes":{"data":{"x":[2.0609917530867805],"y":[86.9]},"selected":{"id":"1072"},"selection_policy":{"id":"1073"}},"id":"1042","type":"ColumnDataSource"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"66b60398-e7f7-4c6c-9da9-b004fec1741b","root_ids":["1001"],"roots":{"1001":"db959dab-5eaa-4e89-9029-297ef1d085a6"}}];
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