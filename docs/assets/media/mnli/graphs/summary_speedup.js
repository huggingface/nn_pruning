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
    
      
      
    
      var element = document.getElementById("6bdef90c-98ab-4eb9-817b-c939b6899ac2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6bdef90c-98ab-4eb9-817b-c939b6899ac2' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8367543f-42ec-4b42-ab73-ffb53cf4ede1":{"roots":{"references":[{"attributes":{"click_policy":"hide","items":[{"id":"1058"},{"id":"1318"}]},"id":"1057","type":"Legend"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"1045"},{"id":"1062"},{"id":"1079"},{"id":"1104"},{"id":"1127"},{"id":"1152"},{"id":"1185"},{"id":"1216"},{"id":"1249"},{"id":"1322"},{"id":"1361"},{"id":"1402"},{"id":"1451"},{"id":"1498"},{"id":"1547"}]},"id":"1058","type":"LegendItem"},{"attributes":{},"id":"1054","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1545","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1496","type":"Line"},{"attributes":{},"id":"1055","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1497","type":"Line"},{"attributes":{"source":{"id":"1495"}},"id":"1499","type":"CDSView"},{"attributes":{"data_source":{"id":"1544"},"glyph":{"id":"1545"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1546"},"selection_glyph":null,"view":{"id":"1548"}},"id":"1547","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1043","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"1054"},"selection_policy":{"id":"1055"}},"id":"1042","type":"ColumnDataSource"},{"attributes":{},"id":"1541","type":"Selection"},{"attributes":{},"id":"1053","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{},"id":"1542","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"1592"},"selection_policy":{"id":"1593"}},"id":"1544","type":"ColumnDataSource"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1059"},"glyph":{"id":"1060"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1061"},"selection_glyph":null,"view":{"id":"1063"}},"id":"1062","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1060","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1546","type":"Line"},{"attributes":{"source":{"id":"1544"}},"id":"1548","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1077","type":"Line"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"1002","type":"Title"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"1073"},"selection_policy":{"id":"1074"}},"id":"1059","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1042"},"glyph":{"id":"1043"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1044"},"selection_glyph":null,"view":{"id":"1046"}},"id":"1045","type":"GlyphRenderer"},{"attributes":{},"id":"1592","type":"Selection"},{"attributes":{"axis_label":"Matched","formatter":{"id":"1048"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{"data":{"x":[1.63],"y":[82.2]},"selected":{"id":"1052"},"selection_policy":{"id":"1053"}},"id":"1037","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1061","type":"Line"},{"attributes":{"source":{"id":"1059"}},"id":"1063","type":"CDSView"},{"attributes":{},"id":"1593","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1044","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1097","type":"Scatter"},{"attributes":{"text":"DistilBERT","x":1.63,"y":82.2},"id":"1036","type":"Label"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{"source":{"id":"1042"}},"id":"1046","type":"CDSView"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{},"id":"1073","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Scatter"},{"attributes":{"data_source":{"id":"1037"},"glyph":{"id":"1038"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1039"},"selection_glyph":null,"view":{"id":"1041"}},"id":"1040","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1039","type":"Scatter"},{"attributes":{},"id":"1074","type":"UnionRenderers"},{"attributes":{},"id":"1048","type":"BasicTickFormatter"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{"end":86,"start":79},"id":"1035","type":"Range1d"},{"attributes":{"data_source":{"id":"1076"},"glyph":{"id":"1077"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1078"},"selection_glyph":null,"view":{"id":"1080"}},"id":"1079","type":"GlyphRenderer"},{"attributes":{"end":6.0,"start":0.75},"id":"1034","type":"Range1d"},{"attributes":{"axis":{"id":"1012"},"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"1092"},"selection_policy":{"id":"1093"}},"id":"1076","type":"ColumnDataSource"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"data":{"x":[1.78125],"y":[84.3]},"selected":{"id":"1208"},"selection_policy":{"id":"1209"}},"id":"1177","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1078","type":"Line"},{"attributes":{"source":{"id":"1076"}},"id":"1080","type":"CDSView"},{"attributes":{"data":{"x":[2.0],"y":[84.6]},"selected":{"id":"1119"},"selection_policy":{"id":"1120"}},"id":"1096","type":"ColumnDataSource"},{"attributes":{},"id":"1050","type":"BasicTickFormatter"},{"attributes":{},"id":"1092","type":"Selection"},{"attributes":{},"id":"1093","type":"UnionRenderers"},{"attributes":{},"id":"1052","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1183","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1400","type":"Line"},{"attributes":{"source":{"id":"1443"}},"id":"1447","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1102","type":"Line"},{"attributes":{"data_source":{"id":"1281"},"glyph":{"id":"1282"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1283"},"selection_glyph":null,"view":{"id":"1285"}},"id":"1284","type":"GlyphRenderer"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1050"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{"source":{"id":"1096"}},"id":"1100","type":"CDSView"},{"attributes":{"source":{"id":"1281"}},"id":"1285","type":"CDSView"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1247","type":"Line"},{"attributes":{},"id":"1173","type":"Selection"},{"attributes":{},"id":"1396","type":"Selection"},{"attributes":{"data_source":{"id":"1101"},"glyph":{"id":"1102"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1103"},"selection_glyph":null,"view":{"id":"1105"}},"id":"1104","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1096"},"glyph":{"id":"1097"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1098"},"selection_glyph":null,"view":{"id":"1100"}},"id":"1099","type":"GlyphRenderer"},{"attributes":{},"id":"1174","type":"UnionRenderers"},{"attributes":{},"id":"1397","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"1121"},"selection_policy":{"id":"1122"}},"id":"1101","type":"ColumnDataSource"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":84.3},"id":"1176","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1248","type":"Line"},{"attributes":{"source":{"id":"1246"}},"id":"1250","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1282","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1125","type":"Line"},{"attributes":{"data_source":{"id":"1124"},"glyph":{"id":"1125"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1126"},"selection_glyph":null,"view":{"id":"1128"}},"id":"1127","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1103","type":"Line"},{"attributes":{"source":{"id":"1177"}},"id":"1181","type":"CDSView"},{"attributes":{},"id":"1278","type":"Selection"},{"attributes":{"data_source":{"id":"1182"},"glyph":{"id":"1183"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1184"},"selection_glyph":null,"view":{"id":"1186"}},"id":"1185","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1101"}},"id":"1105","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1449","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1179","type":"Scatter"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"1439"},"selection_policy":{"id":"1440"}},"id":"1399","type":"ColumnDataSource"},{"attributes":{},"id":"1279","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1177"},"glyph":{"id":"1178"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1179"},"selection_glyph":null,"view":{"id":"1181"}},"id":"1180","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"1210"},"selection_policy":{"id":"1211"}},"id":"1182","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9994637396181068,2.398404835869523,2.9218072258788506,3.4372712841353343],"y":[83.70860927152319,83.04635761589404,82.6795720835456,81.02903718797758]},"selected":{"id":"1315"},"selection_policy":{"id":"1316"}},"id":"1281","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1401","type":"Line"},{"attributes":{"source":{"id":"1399"}},"id":"1403","type":"CDSView"},{"attributes":{"data_source":{"id":"1213"},"glyph":{"id":"1214"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1215"},"selection_glyph":null,"view":{"id":"1217"}},"id":"1216","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.0],"y":[84.9414161996943]},"selected":{"id":"1490"},"selection_policy":{"id":"1491"}},"id":"1443","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"1278"},"selection_policy":{"id":"1279"}},"id":"1246","type":"ColumnDataSource"},{"attributes":{},"id":"1119","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1320","type":"Line"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1283","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1184","type":"Line"},{"attributes":{},"id":"1120","type":"UnionRenderers"},{"attributes":{},"id":"1439","type":"Selection"},{"attributes":{"source":{"id":"1182"}},"id":"1186","type":"CDSView"},{"attributes":{"data_source":{"id":"1319"},"glyph":{"id":"1320"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1321"},"selection_glyph":null,"view":{"id":"1323"}},"id":"1322","type":"GlyphRenderer"},{"attributes":{},"id":"1440","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-base"},"renderers":[{"id":"1284"}]},"id":"1318","type":"LegendItem"},{"attributes":{},"id":"1315","type":"Selection"},{"attributes":{},"id":"1121","type":"Selection"},{"attributes":{},"id":"1208","type":"Selection"},{"attributes":{},"id":"1316","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1445","type":"Scatter"},{"attributes":{},"id":"1122","type":"UnionRenderers"},{"attributes":{},"id":"1209","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1448"},"glyph":{"id":"1449"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1450"},"selection_glyph":null,"view":{"id":"1452"}},"id":"1451","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1443"},"glyph":{"id":"1444"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1445"},"selection_glyph":null,"view":{"id":"1447"}},"id":"1446","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"1492"},"selection_policy":{"id":"1493"}},"id":"1448","type":"ColumnDataSource"},{"attributes":{},"id":"1210","type":"Selection"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"1541"},"selection_policy":{"id":"1542"}},"id":"1495","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1098","type":"Scatter"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"1355"},"selection_policy":{"id":"1356"}},"id":"1319","type":"ColumnDataSource"},{"attributes":{},"id":"1211","type":"UnionRenderers"},{"attributes":{"text":"Original Soft Movement","x":1.0,"y":84.9414161996943},"id":"1442","type":"Label"},{"attributes":{"text":"TinyBERT","x":2.0,"y":84.6},"id":"1095","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1444","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1450","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"1146"},"selection_policy":{"id":"1147"}},"id":"1124","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1359","type":"Line"},{"attributes":{"source":{"id":"1448"}},"id":"1452","type":"CDSView"},{"attributes":{"data_source":{"id":"1399"},"glyph":{"id":"1400"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1401"},"selection_glyph":null,"view":{"id":"1403"}},"id":"1402","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1495"},"glyph":{"id":"1496"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1497"},"selection_glyph":null,"view":{"id":"1499"}},"id":"1498","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1150","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1151","type":"Line"},{"attributes":{"data_source":{"id":"1149"},"glyph":{"id":"1150"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1151"},"selection_glyph":null,"view":{"id":"1153"}},"id":"1152","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1126","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1321","type":"Line"},{"attributes":{"source":{"id":"1124"}},"id":"1128","type":"CDSView"},{"attributes":{"source":{"id":"1319"}},"id":"1323","type":"CDSView"},{"attributes":{"data_source":{"id":"1358"},"glyph":{"id":"1359"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1360"},"selection_glyph":null,"view":{"id":"1362"}},"id":"1361","type":"GlyphRenderer"},{"attributes":{},"id":"1490","type":"Selection"},{"attributes":{},"id":"1146","type":"Selection"},{"attributes":{},"id":"1355","type":"Selection"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"1243"},"selection_policy":{"id":"1244"}},"id":"1213","type":"ColumnDataSource"},{"attributes":{},"id":"1491","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1214","type":"Line"},{"attributes":{},"id":"1147","type":"UnionRenderers"},{"attributes":{},"id":"1356","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1215","type":"Line"},{"attributes":{"source":{"id":"1213"}},"id":"1217","type":"CDSView"},{"attributes":{"data_source":{"id":"1246"},"glyph":{"id":"1247"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1248"},"selection_glyph":null,"view":{"id":"1250"}},"id":"1249","type":"GlyphRenderer"},{"attributes":{},"id":"1492","type":"Selection"},{"attributes":{},"id":"1243","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1178","type":"Scatter"},{"attributes":{},"id":"1493","type":"UnionRenderers"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"},{"id":"1036"},{"id":"1057"},{"id":"1095"},{"id":"1176"},{"id":"1442"}],"left":[{"id":"1016"}],"plot_width":800,"renderers":[{"id":"1040"},{"id":"1045"},{"id":"1062"},{"id":"1079"},{"id":"1099"},{"id":"1104"},{"id":"1127"},{"id":"1152"},{"id":"1180"},{"id":"1185"},{"id":"1216"},{"id":"1249"},{"id":"1284"},{"id":"1322"},{"id":"1361"},{"id":"1402"},{"id":"1446"},{"id":"1451"},{"id":"1498"},{"id":"1547"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"x_range":{"id":"1034"},"x_scale":{"id":"1008"},"y_range":{"id":"1035"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"1173"},"selection_policy":{"id":"1174"}},"id":"1149","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1358"}},"id":"1362","type":"CDSView"},{"attributes":{"source":{"id":"1037"}},"id":"1041","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"1396"},"selection_policy":{"id":"1397"}},"id":"1358","type":"ColumnDataSource"},{"attributes":{},"id":"1244","type":"UnionRenderers"},{"attributes":{"source":{"id":"1149"}},"id":"1153","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1360","type":"Line"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"8367543f-42ec-4b42-ab73-ffb53cf4ede1","root_ids":["1001"],"roots":{"1001":"6bdef90c-98ab-4eb9-817b-c939b6899ac2"}}];
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