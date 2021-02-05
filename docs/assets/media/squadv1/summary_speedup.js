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
    
      
      
    
      var element = document.getElementById("23976a38-c2b6-4beb-bb24-be7e770a8026");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '23976a38-c2b6-4beb-bb24-be7e770a8026' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0fd8b828-f7d1-4878-bec5-a5917eae0d44":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1138","type":"Line"},{"attributes":{"data_source":{"id":"1137"},"glyph":{"id":"1138"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1139"},"selection_glyph":null,"view":{"id":"1141"}},"id":"1140","type":"GlyphRenderer"},{"attributes":{"text":"Distilbert","x":1.63,"y":86.9},"id":"1035","type":"Label"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1423","type":"Line"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[88.5,88.5]},"selected":{"id":"1475"},"selection_policy":{"id":"1476"}},"id":"1422","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1422"},"glyph":{"id":"1423"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1424"},"selection_glyph":null,"view":{"id":"1426"}},"id":"1425","type":"GlyphRenderer"},{"attributes":{},"id":"1131","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[87.5,87.5]},"selected":{"id":"1537"},"selection_policy":{"id":"1538"}},"id":"1477","type":"ColumnDataSource"},{"attributes":{},"id":"1130","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1424","type":"Line"},{"attributes":{"source":{"id":"1422"}},"id":"1426","type":"CDSView"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{},"id":"1132","type":"Selection"},{"attributes":{},"id":"1133","type":"UnionRenderers"},{"attributes":{},"id":"1476","type":"UnionRenderers"},{"attributes":{},"id":"1475","type":"Selection"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{"data_source":{"id":"1358"},"glyph":{"id":"1359"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1360"},"selection_glyph":null,"view":{"id":"1362"}},"id":"1361","type":"GlyphRenderer"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1134","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{},"id":"1135","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[86.5,86.5]},"selected":{"id":"1539"},"selection_policy":{"id":"1540"}},"id":"1482","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1478","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1483","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1479","type":"Line"},{"attributes":{"source":{"id":"1477"}},"id":"1481","type":"CDSView"},{"attributes":{"data_source":{"id":"1482"},"glyph":{"id":"1483"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1484"},"selection_glyph":null,"view":{"id":"1486"}},"id":"1485","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1484","type":"Line"},{"attributes":{"source":{"id":"1482"}},"id":"1486","type":"CDSView"},{"attributes":{"data":{"x":[0.9221729963255725,0.9261182619659336,0.929906085171529,1.0281280670181348,1.034699920808227],"y":[91.0266636723574,90.84270784891945,90.73941291394593,90.16320537561052,90.10843526218638]},"selected":{"id":"1213"},"selection_policy":{"id":"1214"}},"id":"1178","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,1.9839754797994356,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.24613086360249,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"1134"},"selection_policy":{"id":"1135"}},"id":"1107","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[88.5,88.5]},"selected":{"id":"1166"},"selection_policy":{"id":"1167"}},"id":"1137","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1178"},"glyph":{"id":"1179"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1180"},"selection_glyph":null,"view":{"id":"1182"}},"id":"1181","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"1052"},"selection_policy":{"id":"1053"}},"id":"1036","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1036"},"glyph":{"id":"1037"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1038"},"selection_glyph":null,"view":{"id":"1040"}},"id":"1039","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1168"},"glyph":{"id":"1169"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1170"},"selection_glyph":null,"view":{"id":"1172"}},"id":"1171","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1037","type":"Scatter"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1169","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Scatter"},{"attributes":{},"id":"1538","type":"UnionRenderers"},{"attributes":{"end":4.0,"start":0.75},"id":"1034","type":"Range1d"},{"attributes":{"text":"Tinybert","x":2.0,"y":87.5},"id":"1068","type":"Label"},{"attributes":{"data_source":{"id":"1041"},"glyph":{"id":"1042"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1043"},"selection_glyph":null,"view":{"id":"1045"}},"id":"1044","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1139","type":"Line"},{"attributes":{},"id":"1537","type":"Selection"},{"attributes":{"source":{"id":"1137"}},"id":"1141","type":"CDSView"},{"attributes":{"data_source":{"id":"1058"},"glyph":{"id":"1059"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1060"},"selection_glyph":null,"view":{"id":"1062"}},"id":"1061","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[87.5,87.5]},"selected":{"id":"1209"},"selection_policy":{"id":"1210"}},"id":"1168","type":"ColumnDataSource"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"1002","type":"Title"},{"attributes":{"source":{"id":"1036"}},"id":"1040","type":"CDSView"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[88.5,88.5]},"selected":{"id":"1054"},"selection_policy":{"id":"1055"}},"id":"1041","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1042","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"1057"},{"id":"1136"},{"id":"1215"},{"id":"1310"},{"id":"1421"}]},"id":"1056","type":"Legend"},{"attributes":{"label":{"value":"BERT-base reference (f1=88.5)"},"renderers":[{"id":"1044"},{"id":"1077"},{"id":"1140"},{"id":"1219"},{"id":"1314"},{"id":"1425"}]},"id":"1057","type":"LegendItem"},{"attributes":{},"id":"1166","type":"Selection"},{"attributes":{},"id":"1539","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1043","type":"Line"},{"attributes":{},"id":"1167","type":"UnionRenderers"},{"attributes":{},"id":"1540","type":"UnionRenderers"},{"attributes":{"source":{"id":"1041"}},"id":"1045","type":"CDSView"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"},{"id":"1035"},{"id":"1056"},{"id":"1068"}],"left":[{"id":"1016"}],"plot_width":800,"renderers":[{"id":"1039"},{"id":"1044"},{"id":"1061"},{"id":"1066"},{"id":"1072"},{"id":"1077"},{"id":"1100"},{"id":"1105"},{"id":"1110"},{"id":"1140"},{"id":"1171"},{"id":"1176"},{"id":"1181"},{"id":"1219"},{"id":"1258"},{"id":"1263"},{"id":"1268"},{"id":"1314"},{"id":"1361"},{"id":"1366"},{"id":"1371"},{"id":"1425"},{"id":"1480"},{"id":"1485"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"x_range":{"id":"1034"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1253","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1312","type":"Line"},{"attributes":{},"id":"1047","type":"BasicTickFormatter"},{"attributes":{},"id":"1254","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[86.5,86.5]},"selected":{"id":"1211"},"selection_policy":{"id":"1212"}},"id":"1173","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1311"}},"id":"1315","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1174","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1170","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1313","type":"Line"},{"attributes":{"source":{"id":"1168"}},"id":"1172","type":"CDSView"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[86.5,86.5]},"selected":{"id":"1417"},"selection_policy":{"id":"1418"}},"id":"1363","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1173"},"glyph":{"id":"1174"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1175"},"selection_glyph":null,"view":{"id":"1177"}},"id":"1176","type":"GlyphRenderer"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1179","type":"Line"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[87.5,87.5]},"selected":{"id":"1415"},"selection_policy":{"id":"1416"}},"id":"1358","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1178"}},"id":"1182","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1217","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1175","type":"Line"},{"attributes":{},"id":"1090","type":"UnionRenderers"},{"attributes":{"source":{"id":"1173"}},"id":"1177","type":"CDSView"},{"attributes":{},"id":"1089","type":"Selection"},{"attributes":{},"id":"1357","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[86.5,86.5]},"selected":{"id":"1306"},"selection_policy":{"id":"1307"}},"id":"1260","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1180","type":"Line"},{"attributes":{},"id":"1356","type":"Selection"},{"attributes":{"data_source":{"id":"1216"},"glyph":{"id":"1217"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1218"},"selection_glyph":null,"view":{"id":"1220"}},"id":"1219","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1261","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1257","type":"Line"},{"attributes":{},"id":"1052","type":"Selection"},{"attributes":{"source":{"id":"1255"}},"id":"1259","type":"CDSView"},{"attributes":{"data_source":{"id":"1260"},"glyph":{"id":"1261"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1262"},"selection_glyph":null,"view":{"id":"1264"}},"id":"1263","type":"GlyphRenderer"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"label":{"value":"BERT-large, hybrid pruning"},"renderers":[{"id":"1181"}]},"id":"1215","type":"LegendItem"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1266","type":"Line"},{"attributes":{},"id":"1053","type":"UnionRenderers"},{"attributes":{"source":{"id":"1265"}},"id":"1269","type":"CDSView"},{"attributes":{},"id":"1091","type":"Selection"},{"attributes":{"data":{"x":[1.0253716557683228,1.0930418633843273,1.170038217254783,1.2958210124830911,1.3926143255719736,1.5170581452285046],"y":[88.66263407974378,88.08154392563726,87.64967103979136,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"1419"},"selection_policy":{"id":"1420"}},"id":"1368","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1262","type":"Line"},{"attributes":{},"id":"1092","type":"UnionRenderers"},{"attributes":{"source":{"id":"1260"}},"id":"1264","type":"CDSView"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1359","type":"Line"},{"attributes":{},"id":"1210","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1267","type":"Line"},{"attributes":{"data_source":{"id":"1311"},"glyph":{"id":"1312"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1313"},"selection_glyph":null,"view":{"id":"1315"}},"id":"1314","type":"GlyphRenderer"},{"attributes":{},"id":"1054","type":"Selection"},{"attributes":{},"id":"1209","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1364","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1360","type":"Line"},{"attributes":{},"id":"1055","type":"UnionRenderers"},{"attributes":{"source":{"id":"1358"}},"id":"1362","type":"CDSView"},{"attributes":{},"id":"1049","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"BERT-base, structured pruning"},"renderers":[{"id":"1268"}]},"id":"1310","type":"LegendItem"},{"attributes":{"data_source":{"id":"1363"},"glyph":{"id":"1364"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1365"},"selection_glyph":null,"view":{"id":"1367"}},"id":"1366","type":"GlyphRenderer"},{"attributes":{},"id":"1093","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1370","type":"Line"},{"attributes":{},"id":"1094","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1365","type":"Line"},{"attributes":{},"id":"1211","type":"Selection"},{"attributes":{"source":{"id":"1363"}},"id":"1367","type":"CDSView"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1369","type":"Line"},{"attributes":{},"id":"1212","type":"UnionRenderers"},{"attributes":{},"id":"1305","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"source":{"id":"1368"}},"id":"1372","type":"CDSView"},{"attributes":{"data_source":{"id":"1368"},"glyph":{"id":"1369"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1370"},"selection_glyph":null,"view":{"id":"1372"}},"id":"1371","type":"GlyphRenderer"},{"attributes":{},"id":"1304","type":"Selection"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{"label":{"value":"Improved soft movement"},"renderers":[{"id":"1371"}]},"id":"1421","type":"LegendItem"},{"attributes":{},"id":"1095","type":"Selection"},{"attributes":{},"id":"1096","type":"UnionRenderers"},{"attributes":{},"id":"1213","type":"Selection"},{"attributes":{},"id":"1306","type":"Selection"},{"attributes":{"axis_label":"F1","formatter":{"id":"1049"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{},"id":"1214","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[87.5,87.5]},"selected":{"id":"1089"},"selection_policy":{"id":"1090"}},"id":"1058","type":"ColumnDataSource"},{"attributes":{},"id":"1307","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1064","type":"Line"},{"attributes":{},"id":"1416","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[86.5,86.5]},"selected":{"id":"1091"},"selection_policy":{"id":"1092"}},"id":"1063","type":"ColumnDataSource"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{},"id":"1415","type":"Selection"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"1093"},"selection_policy":{"id":"1094"}},"id":"1069","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1059","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1060","type":"Line"},{"attributes":{"source":{"id":"1058"}},"id":"1062","type":"CDSView"},{"attributes":{},"id":"1308","type":"Selection"},{"attributes":{"data_source":{"id":"1063"},"glyph":{"id":"1064"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1065"},"selection_glyph":null,"view":{"id":"1067"}},"id":"1066","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1069"},"glyph":{"id":"1070"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1071"},"selection_glyph":null,"view":{"id":"1073"}},"id":"1072","type":"GlyphRenderer"},{"attributes":{},"id":"1309","type":"UnionRenderers"},{"attributes":{},"id":"1417","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1075","type":"Line"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1070","type":"Scatter"},{"attributes":{},"id":"1418","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1065","type":"Line"},{"attributes":{"source":{"id":"1063"}},"id":"1067","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1071","type":"Scatter"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{"data":{"x":[3.0334457011164853,3.064498644631839,3.198427826329907,3.345964239980557,3.3600072707194957,3.3926900622840255,3.537229811528122,3.5770330236355736,3.6353458521805493,3.6402791562343726,3.6439618700884893],"y":[86.86229967213058,86.70235473718577,86.37059709799422,86.30683282660192,86.2625032125089,86.19280466015066,85.91370280008687,85.77799129804794,85.60283555208089,85.51634639956605,85.45260706155949]},"selected":{"id":"1308"},"selection_policy":{"id":"1309"}},"id":"1265","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1097"},"glyph":{"id":"1098"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1099"},"selection_glyph":null,"view":{"id":"1101"}},"id":"1100","type":"GlyphRenderer"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1047"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1074"},"glyph":{"id":"1075"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1076"},"selection_glyph":null,"view":{"id":"1078"}},"id":"1077","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[86.5,86.5]},"selected":{"id":"1132"},"selection_policy":{"id":"1133"}},"id":"1102","type":"ColumnDataSource"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[88.5,88.5]},"selected":{"id":"1095"},"selection_policy":{"id":"1096"}},"id":"1074","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1103","type":"Line"},{"attributes":{"data_source":{"id":"1265"},"glyph":{"id":"1266"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1267"},"selection_glyph":null,"view":{"id":"1269"}},"id":"1268","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1069"}},"id":"1073","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1098","type":"Line"},{"attributes":{"data_source":{"id":"1107"},"glyph":{"id":"1108"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1109"},"selection_glyph":null,"view":{"id":"1111"}},"id":"1110","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1255"},"glyph":{"id":"1256"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1257"},"selection_glyph":null,"view":{"id":"1259"}},"id":"1258","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[88.5,88.5]},"selected":{"id":"1253"},"selection_policy":{"id":"1254"}},"id":"1216","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1102"},"glyph":{"id":"1103"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1104"},"selection_glyph":null,"view":{"id":"1106"}},"id":"1105","type":"GlyphRenderer"},{"attributes":{},"id":"1419","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1099","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1256","type":"Line"},{"attributes":{},"id":"1420","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1477"},"glyph":{"id":"1478"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1479"},"selection_glyph":null,"view":{"id":"1481"}},"id":"1480","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1012"},"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"source":{"id":"1097"}},"id":"1101","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1109","type":"Line"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[87.5,87.5]},"selected":{"id":"1130"},"selection_policy":{"id":"1131"}},"id":"1097","type":"ColumnDataSource"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1108","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1218","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1076","type":"Line"},{"attributes":{"source":{"id":"1216"}},"id":"1220","type":"CDSView"},{"attributes":{"label":{"value":"BERT-base, hybrid pruning"},"renderers":[{"id":"1110"}]},"id":"1136","type":"LegendItem"},{"attributes":{"source":{"id":"1074"}},"id":"1078","type":"CDSView"},{"attributes":{"source":{"id":"1107"}},"id":"1111","type":"CDSView"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[87.5,87.5]},"selected":{"id":"1304"},"selection_policy":{"id":"1305"}},"id":"1255","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1104","type":"Line"},{"attributes":{"source":{"id":"1102"}},"id":"1106","type":"CDSView"},{"attributes":{"data":{"x":[0,3.6439618700884893],"y":[88.5,88.5]},"selected":{"id":"1356"},"selection_policy":{"id":"1357"}},"id":"1311","type":"ColumnDataSource"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"0fd8b828-f7d1-4878-bec5-a5917eae0d44","root_ids":["1001"],"roots":{"1001":"23976a38-c2b6-4beb-bb24-be7e770a8026"}}];
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