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
    
      
      
    
      var element = document.getElementById("63513884-fe51-4115-b37d-44c5b8edaa16");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '63513884-fe51-4115-b37d-44c5b8edaa16' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3fcd4cde-ad71-4418-8891-60c6e672ffe2":{"roots":{"references":[{"attributes":{},"id":"1120","type":"Selection"},{"attributes":{"data_source":{"id":"1304"},"glyph":{"id":"1305"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1306"},"selection_glyph":null,"view":{"id":"1308"}},"id":"1307","type":"GlyphRenderer"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1047"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1205"},"glyph":{"id":"1206"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1207"},"selection_glyph":null,"view":{"id":"1209"}},"id":"1208","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1177","type":"Line"},{"attributes":{"data_source":{"id":"1422"},"glyph":{"id":"1423"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1424"},"selection_glyph":null,"view":{"id":"1426"}},"id":"1425","type":"GlyphRenderer"},{"attributes":{},"id":"1121","type":"UnionRenderers"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1176","type":"Line"},{"attributes":{},"id":"1122","type":"Selection"},{"attributes":{},"id":"1234","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1148"},"glyph":{"id":"1149"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1150"},"selection_glyph":null,"view":{"id":"1152"}},"id":"1151","type":"GlyphRenderer"},{"attributes":{},"id":"1268","type":"Selection"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[87.5,87.5]},"selected":{"id":"1147"},"selection_policy":{"id":"1146"}},"id":"1123","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1100"}},"id":"1104","type":"CDSView"},{"attributes":{},"id":"1119","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[86.5,86.5]},"selected":{"id":"1174"},"selection_policy":{"id":"1173"}},"id":"1148","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1343","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1150","type":"Line"},{"attributes":{"axis":{"id":"1012"},"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"end":4.0,"start":0.75},"id":"1034","type":"Range1d"},{"attributes":{"source":{"id":"1123"}},"id":"1127","type":"CDSView"},{"attributes":{"data_source":{"id":"1123"},"glyph":{"id":"1124"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1125"},"selection_glyph":null,"view":{"id":"1127"}},"id":"1126","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"source":{"id":"1465"}},"id":"1469","type":"CDSView"},{"attributes":{},"id":"1235","type":"Selection"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"1203"},"selection_policy":{"id":"1202"}},"id":"1175","type":"ColumnDataSource"},{"attributes":{},"id":"1147","type":"Selection"},{"attributes":{},"id":"1340","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1149","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1306","type":"Line"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[88.5,88.5]},"selected":{"id":"1122"},"selection_policy":{"id":"1121"}},"id":"1100","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[86.5,86.5]},"selected":{"id":"1303"},"selection_policy":{"id":"1302"}},"id":"1269","type":"ColumnDataSource"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"1002","type":"Title"},{"attributes":{"data_source":{"id":"1236"},"glyph":{"id":"1237"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1238"},"selection_glyph":null,"view":{"id":"1240"}},"id":"1239","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1102","type":"Line"},{"attributes":{"source":{"id":"1381"}},"id":"1385","type":"CDSView"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-large"},"renderers":[{"id":"1307"}]},"id":"1341","type":"LegendItem"},{"attributes":{},"id":"1092","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1344","type":"Line"},{"attributes":{},"id":"1093","type":"Selection"},{"attributes":{},"id":"1146","type":"UnionRenderers"},{"attributes":{"source":{"id":"1342"}},"id":"1346","type":"CDSView"},{"attributes":{"source":{"id":"1148"}},"id":"1152","type":"CDSView"},{"attributes":{},"id":"1267","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1270","type":"Line"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[87.5,87.5]},"selected":{"id":"1268"},"selection_policy":{"id":"1267"}},"id":"1236","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1058"},"glyph":{"id":"1059"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1060"},"selection_glyph":null,"view":{"id":"1062"}},"id":"1061","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1236"}},"id":"1240","type":"CDSView"},{"attributes":{},"id":"1203","type":"Selection"},{"attributes":{},"id":"1173","type":"UnionRenderers"},{"attributes":{"source":{"id":"1175"}},"id":"1179","type":"CDSView"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[88.5,88.5]},"selected":{"id":"1380"},"selection_policy":{"id":"1379"}},"id":"1342","type":"ColumnDataSource"},{"attributes":{},"id":"1174","type":"Selection"},{"attributes":{"source":{"id":"1269"}},"id":"1273","type":"CDSView"},{"attributes":{},"id":"1339","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[88.5,88.5]},"selected":{"id":"1235"},"selection_policy":{"id":"1234"}},"id":"1205","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1101","type":"Line"},{"attributes":{"data":{"x":[0.9221729963255725,0.9261182619659336,0.929906085171529,1.0281280670181348,1.034699920808227,1.2874356761138743,1.3462013485997515],"y":[91.0266636723574,90.84270784891945,90.73941291394593,90.16320537561052,90.10843526218638,89.39825688878855,88.34901265417608]},"selected":{"id":"1340"},"selection_policy":{"id":"1339"}},"id":"1304","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1097","type":"Scatter"},{"attributes":{"data_source":{"id":"1269"},"glyph":{"id":"1270"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1271"},"selection_glyph":null,"view":{"id":"1273"}},"id":"1272","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1059","type":"Line"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[87.5,87.5]},"selected":{"id":"1421"},"selection_policy":{"id":"1420"}},"id":"1381","type":"ColumnDataSource"},{"attributes":{},"id":"1074","type":"Selection"},{"attributes":{},"id":"1302","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1125","type":"Line"},{"attributes":{"data_source":{"id":"1342"},"glyph":{"id":"1343"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1344"},"selection_glyph":null,"view":{"id":"1346"}},"id":"1345","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1271","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1382","type":"Line"},{"attributes":{},"id":"1055","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1237","type":"Line"},{"attributes":{},"id":"1073","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1207","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1383","type":"Line"},{"attributes":{"source":{"id":"1058"}},"id":"1062","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1305","type":"Line"},{"attributes":{"axis_label":"F1","formatter":{"id":"1049"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[87.5,87.5]},"selected":{"id":"1074"},"selection_policy":{"id":"1073"}},"id":"1058","type":"ColumnDataSource"},{"attributes":{},"id":"1303","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1124","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1206","type":"Line"},{"attributes":{"source":{"id":"1095"}},"id":"1099","type":"CDSView"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-base"},"renderers":[{"id":"1178"}]},"id":"1204","type":"LegendItem"},{"attributes":{},"id":"1202","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1381"},"glyph":{"id":"1382"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1383"},"selection_glyph":null,"view":{"id":"1385"}},"id":"1384","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1205"}},"id":"1209","type":"CDSView"},{"attributes":{"data_source":{"id":"1465"},"glyph":{"id":"1466"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1467"},"selection_glyph":null,"view":{"id":"1469"}},"id":"1468","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1036"},"glyph":{"id":"1037"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1038"},"selection_glyph":null,"view":{"id":"1040"}},"id":"1039","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Improved soft movement, BERT-base"},"renderers":[{"id":"1468"}]},"id":"1510","type":"LegendItem"},{"attributes":{"data_source":{"id":"1175"},"glyph":{"id":"1176"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1177"},"selection_glyph":null,"view":{"id":"1179"}},"id":"1178","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1075"},"glyph":{"id":"1076"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1077"},"selection_glyph":null,"view":{"id":"1079"}},"id":"1078","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1238","type":"Line"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"1120"},"selection_policy":{"id":"1119"}},"id":"1095","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1041"},"glyph":{"id":"1042"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1043"},"selection_glyph":null,"view":{"id":"1045"}},"id":"1044","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1560","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1037","type":"Scatter"},{"attributes":{"text":"Tinybert","x":2.0,"y":87.5},"id":"1094","type":"Label"},{"attributes":{"source":{"id":"1036"}},"id":"1040","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1423","type":"Line"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[86.5,86.5]},"selected":{"id":"1093"},"selection_policy":{"id":"1092"}},"id":"1075","type":"ColumnDataSource"},{"attributes":{},"id":"1508","type":"UnionRenderers"},{"attributes":{"text":"Distilbert","x":1.63,"y":86.9},"id":"1035","type":"Label"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{"data_source":{"id":"1100"},"glyph":{"id":"1101"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1102"},"selection_glyph":null,"view":{"id":"1104"}},"id":"1103","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"1053"},"selection_policy":{"id":"1052"}},"id":"1036","type":"ColumnDataSource"},{"attributes":{},"id":"1420","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1043","type":"Line"},{"attributes":{},"id":"1379","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1042","type":"Line"},{"attributes":{},"id":"1509","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"1057"},{"id":"1204"},{"id":"1341"},{"id":"1510"}]},"id":"1056","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Scatter"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1076","type":"Line"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[88.5,88.5]},"selected":{"id":"1055"},"selection_policy":{"id":"1054"}},"id":"1041","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1060","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1096","type":"Scatter"},{"attributes":{},"id":"1380","type":"Selection"},{"attributes":{"source":{"id":"1304"}},"id":"1308","type":"CDSView"},{"attributes":{},"id":"1047","type":"BasicTickFormatter"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1466","type":"Line"},{"attributes":{},"id":"1557","type":"Selection"},{"attributes":{"data_source":{"id":"1558"},"glyph":{"id":"1559"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1560"},"selection_glyph":null,"view":{"id":"1562"}},"id":"1561","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[86.5,86.5]},"selected":{"id":"1464"},"selection_policy":{"id":"1463"}},"id":"1422","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1095"},"glyph":{"id":"1096"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1097"},"selection_glyph":null,"view":{"id":"1099"}},"id":"1098","type":"GlyphRenderer"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{"source":{"id":"1041"}},"id":"1045","type":"CDSView"},{"attributes":{},"id":"1049","type":"BasicTickFormatter"},{"attributes":{},"id":"1606","type":"Selection"},{"attributes":{},"id":"1556","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1511"},"glyph":{"id":"1512"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1513"},"selection_glyph":null,"view":{"id":"1515"}},"id":"1514","type":"GlyphRenderer"},{"attributes":{},"id":"1053","type":"Selection"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{},"id":"1052","type":"UnionRenderers"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{},"id":"1421","type":"Selection"},{"attributes":{},"id":"1656","type":"UnionRenderers"},{"attributes":{"label":{"value":"Reference f1=88.5 BERT-base"},"renderers":[{"id":"1044"},{"id":"1061"},{"id":"1078"},{"id":"1103"},{"id":"1126"},{"id":"1151"},{"id":"1208"},{"id":"1239"},{"id":"1272"},{"id":"1345"},{"id":"1384"},{"id":"1425"},{"id":"1514"},{"id":"1561"},{"id":"1610"}]},"id":"1057","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1467","type":"Line"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[86.5,86.5]},"selected":{"id":"1657"},"selection_policy":{"id":"1656"}},"id":"1607","type":"ColumnDataSource"},{"attributes":{},"id":"1657","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1608","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1424","type":"Line"},{"attributes":{},"id":"1605","type":"UnionRenderers"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"},{"id":"1035"},{"id":"1056"},{"id":"1094"}],"left":[{"id":"1016"}],"plot_width":800,"renderers":[{"id":"1039"},{"id":"1044"},{"id":"1061"},{"id":"1078"},{"id":"1098"},{"id":"1103"},{"id":"1126"},{"id":"1151"},{"id":"1178"},{"id":"1208"},{"id":"1239"},{"id":"1272"},{"id":"1307"},{"id":"1345"},{"id":"1384"},{"id":"1425"},{"id":"1468"},{"id":"1514"},{"id":"1561"},{"id":"1610"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"x_range":{"id":"1034"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[1.0253716557683228,1.0930418633843273,1.170038217254783,1.2958210124830911,1.3926143255719736,1.5170581452285046],"y":[88.66263407974378,88.08154392563726,87.64967103979136,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"1509"},"selection_policy":{"id":"1508"}},"id":"1465","type":"ColumnDataSource"},{"attributes":{},"id":"1054","type":"UnionRenderers"},{"attributes":{"source":{"id":"1558"}},"id":"1562","type":"CDSView"},{"attributes":{"source":{"id":"1607"}},"id":"1611","type":"CDSView"},{"attributes":{"source":{"id":"1422"}},"id":"1426","type":"CDSView"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[87.5,87.5]},"selected":{"id":"1606"},"selection_policy":{"id":"1605"}},"id":"1558","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1513","type":"Line"},{"attributes":{},"id":"1464","type":"Selection"},{"attributes":{"source":{"id":"1075"}},"id":"1079","type":"CDSView"},{"attributes":{},"id":"1463","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1559","type":"Line"},{"attributes":{"source":{"id":"1511"}},"id":"1515","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1609","type":"Line"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{"data":{"x":[0,2.799991523936488],"y":[88.5,88.5]},"selected":{"id":"1557"},"selection_policy":{"id":"1556"}},"id":"1511","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1607"},"glyph":{"id":"1608"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1609"},"selection_glyph":null,"view":{"id":"1611"}},"id":"1610","type":"GlyphRenderer"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1077","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1512","type":"Line"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"3fcd4cde-ad71-4418-8891-60c6e672ffe2","root_ids":["1001"],"roots":{"1001":"63513884-fe51-4115-b37d-44c5b8edaa16"}}];
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