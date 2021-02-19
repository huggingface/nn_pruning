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
    
      
      
    
      var element = document.getElementById("ea82ad95-014e-4c2a-ab96-642301fb0af1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ea82ad95-014e-4c2a-ab96-642301fb0af1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"64a7072c-9698-49ec-afec-a67ebe7da83e":{"roots":{"references":[{"attributes":{"source":{"id":"1281"}},"id":"1285","type":"CDSView"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"data_source":{"id":"1602"},"glyph":{"id":"1603"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1604"},"selection_glyph":null,"view":{"id":"1606"}},"id":"1605","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1287","type":"Line"},{"attributes":{"axis":{"id":"1012"},"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{},"id":"1277","type":"UnionRenderers"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{},"id":"1278","type":"Selection"},{"attributes":{"source":{"id":"1036"}},"id":"1040","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1037","type":"Scatter"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1036"},"glyph":{"id":"1037"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1038"},"selection_glyph":null,"view":{"id":"1040"}},"id":"1039","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Scatter"},{"attributes":{},"id":"1709","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1283","type":"Scatter"},{"attributes":{"axis_label":"F1","formatter":{"id":"1050"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1286"},"glyph":{"id":"1287"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1288"},"selection_glyph":null,"view":{"id":"1290"}},"id":"1289","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1281"},"glyph":{"id":"1282"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1283"},"selection_glyph":null,"view":{"id":"1285"}},"id":"1284","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[88.5,88.5]},"selected":{"id":"1323"},"selection_policy":{"id":"1322"}},"id":"1286","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.0253716557683228,1.0930418633843273,1.170038217254783,1.2958210124830911,1.3926143255719736,1.5170581452285046],"y":[88.66263407974378,88.08154392563726,87.64967103979136,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"1452"},"selection_policy":{"id":"1451"}},"id":"1409","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1326","type":"Line"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[86.5,86.5]},"selected":{"id":"1407"},"selection_policy":{"id":"1406"}},"id":"1366","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1288","type":"Line"},{"attributes":{"source":{"id":"1286"}},"id":"1290","type":"CDSView"},{"attributes":{"data_source":{"id":"1325"},"glyph":{"id":"1326"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1327"},"selection_glyph":null,"view":{"id":"1329"}},"id":"1328","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1247","type":"Line"},{"attributes":{},"id":"1320","type":"UnionRenderers"},{"attributes":{},"id":"1321","type":"Selection"},{"attributes":{},"id":"1322","type":"UnionRenderers"},{"attributes":{},"id":"1323","type":"Selection"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[87.5,87.5]},"selected":{"id":"1364"},"selection_policy":{"id":"1363"}},"id":"1325","type":"ColumnDataSource"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1327","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1891","type":"Line"},{"attributes":{"source":{"id":"1325"}},"id":"1329","type":"CDSView"},{"attributes":{"data_source":{"id":"1366"},"glyph":{"id":"1367"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1368"},"selection_glyph":null,"view":{"id":"1370"}},"id":"1369","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1889"}},"id":"1893","type":"CDSView"},{"attributes":{},"id":"1363","type":"UnionRenderers"},{"attributes":{},"id":"1364","type":"Selection"},{"attributes":{"source":{"id":"1502"}},"id":"1506","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1953","type":"Line"},{"attributes":{"label":{"value":"Reference f1=88.5 BERT-base"},"renderers":[{"id":"1044"},{"id":"1061"},{"id":"1078"},{"id":"1103"},{"id":"1126"},{"id":"1151"},{"id":"1184"},{"id":"1215"},{"id":"1248"},{"id":"1289"},{"id":"1328"},{"id":"1369"},{"id":"1458"},{"id":"1505"},{"id":"1554"},{"id":"1659"},{"id":"1714"},{"id":"1771"},{"id":"1892"},{"id":"1955"},{"id":"2020"}]},"id":"1057","type":"LegendItem"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[88.5,88.5]},"selected":{"id":"1121"},"selection_policy":{"id":"1120"}},"id":"1100","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2018","type":"Line"},{"attributes":{},"id":"1054","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1101","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1552","type":"Line"},{"attributes":{"source":{"id":"1602"}},"id":"1606","type":"CDSView"},{"attributes":{"data_source":{"id":"1952"},"glyph":{"id":"1953"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1954"},"selection_glyph":null,"view":{"id":"1956"}},"id":"1955","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1124","type":"Line"},{"attributes":{"data_source":{"id":"1551"},"glyph":{"id":"1552"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1553"},"selection_glyph":null,"view":{"id":"1555"}},"id":"1554","type":"GlyphRenderer"},{"attributes":{},"id":"1053","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1123"},"glyph":{"id":"1124"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1125"},"selection_glyph":null,"view":{"id":"1127"}},"id":"1126","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1102","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1282","type":"Scatter"},{"attributes":{"source":{"id":"1409"}},"id":"1413","type":"CDSView"},{"attributes":{"data_source":{"id":"1181"},"glyph":{"id":"1182"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1183"},"selection_glyph":null,"view":{"id":"1185"}},"id":"1184","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1100"}},"id":"1104","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1367","type":"Line"},{"attributes":{"source":{"id":"1176"}},"id":"1180","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1712","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1769","type":"Line"},{"attributes":{"data_source":{"id":"1100"},"glyph":{"id":"1101"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1102"},"selection_glyph":null,"view":{"id":"1104"}},"id":"1103","type":"GlyphRenderer"},{"attributes":{},"id":"1548","type":"UnionRenderers"},{"attributes":{},"id":"1949","type":"UnionRenderers"},{"attributes":{},"id":"1549","type":"Selection"},{"attributes":{},"id":"1950","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1182","type":"Line"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[88.5,88.5]},"selected":{"id":"1210"},"selection_policy":{"id":"1209"}},"id":"1181","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1368","type":"Line"},{"attributes":{"data_source":{"id":"1409"},"glyph":{"id":"1410"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1411"},"selection_glyph":null,"view":{"id":"1413"}},"id":"1412","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1366"}},"id":"1370","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1713","type":"Line"},{"attributes":{"data":{"x":[5.516129032258065],"y":[90.0]},"selected":{"id":"1208"},"selection_policy":{"id":"1207"}},"id":"1176","type":"ColumnDataSource"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1410","type":"Line"},{"attributes":{"source":{"id":"1711"}},"id":"1715","type":"CDSView"},{"attributes":{"data_source":{"id":"1212"},"glyph":{"id":"1213"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1214"},"selection_glyph":null,"view":{"id":"1216"}},"id":"1215","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1768"},"glyph":{"id":"1769"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1770"},"selection_glyph":null,"view":{"id":"1772"}},"id":"1771","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1246","type":"Line"},{"attributes":{},"id":"1118","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1183","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1604","type":"Line"},{"attributes":{},"id":"1119","type":"Selection"},{"attributes":{"source":{"id":"1181"}},"id":"1185","type":"CDSView"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[86.5,86.5]},"selected":{"id":"1600"},"selection_policy":{"id":"1599"}},"id":"1551","type":"ColumnDataSource"},{"attributes":{},"id":"1406","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.78125],"y":[90.3]},"selected":{"id":"1321"},"selection_policy":{"id":"1320"}},"id":"1281","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[87.5,87.5]},"selected":{"id":"2015"},"selection_policy":{"id":"2014"}},"id":"1952","type":"ColumnDataSource"},{"attributes":{},"id":"1407","type":"Selection"},{"attributes":{},"id":"1765","type":"UnionRenderers"},{"attributes":{},"id":"1766","type":"Selection"},{"attributes":{"data_source":{"id":"1058"},"glyph":{"id":"1059"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1060"},"selection_glyph":null,"view":{"id":"1062"}},"id":"1061","type":"GlyphRenderer"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"1002","type":"Title"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1059","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1553","type":"Line"},{"attributes":{"source":{"id":"1551"}},"id":"1555","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1954","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1076","type":"Line"},{"attributes":{"source":{"id":"1952"}},"id":"1956","type":"CDSView"},{"attributes":{"data_source":{"id":"2017"},"glyph":{"id":"2018"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2019"},"selection_glyph":null,"view":{"id":"2021"}},"id":"2020","type":"GlyphRenderer"},{"attributes":{"text":"Mobile_bert_no_opt","x":1.78125,"y":90.3},"id":"1280","type":"Label"},{"attributes":{"click_policy":"hide","items":[{"id":"1057"},{"id":"1454"},{"id":"1655"},{"id":"1888"}]},"id":"1056","type":"Legend"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[87.5,87.5]},"selected":{"id":"1073"},"selection_policy":{"id":"1072"}},"id":"1058","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1456","type":"Line"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"1052"},"selection_policy":{"id":"1051"}},"id":"1036","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1411","type":"Line"},{"attributes":{},"id":"1120","type":"UnionRenderers"},{"attributes":{"source":{"id":"1827"}},"id":"1831","type":"CDSView"},{"attributes":{},"id":"1121","type":"Selection"},{"attributes":{},"id":"1207","type":"UnionRenderers"},{"attributes":{"text":"Distilbert","x":1.63,"y":86.9},"id":"1035","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1060","type":"Line"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[86.5,86.5]},"selected":{"id":"1825"},"selection_policy":{"id":"1824"}},"id":"1768","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1058"}},"id":"1062","type":"CDSView"},{"attributes":{},"id":"1208","type":"Selection"},{"attributes":{},"id":"1599","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1455"},"glyph":{"id":"1456"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1457"},"selection_glyph":null,"view":{"id":"1459"}},"id":"1458","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1043","type":"Line"},{"attributes":{},"id":"1600","type":"Selection"},{"attributes":{},"id":"2014","type":"UnionRenderers"},{"attributes":{},"id":"2015","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1770","type":"Line"},{"attributes":{"label":{"value":"Improved soft movement, BERT-base"},"renderers":[{"id":"1412"}]},"id":"1454","type":"LegendItem"},{"attributes":{"source":{"id":"1041"}},"id":"1045","type":"CDSView"},{"attributes":{"source":{"id":"1768"}},"id":"1772","type":"CDSView"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1828","type":"Line"},{"attributes":{},"id":"1451","type":"UnionRenderers"},{"attributes":{},"id":"1072","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[87.5,87.5]},"selected":{"id":"1549"},"selection_policy":{"id":"1548"}},"id":"1502","type":"ColumnDataSource"},{"attributes":{},"id":"1209","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1656"},"glyph":{"id":"1657"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1658"},"selection_glyph":null,"view":{"id":"1660"}},"id":"1659","type":"GlyphRenderer"},{"attributes":{},"id":"1073","type":"Selection"},{"attributes":{},"id":"1210","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1657","type":"Line"},{"attributes":{},"id":"1452","type":"Selection"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[86.5,86.5]},"selected":{"id":"2082"},"selection_policy":{"id":"2081"}},"id":"2017","type":"ColumnDataSource"},{"attributes":{},"id":"1824","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[87.5,87.5]},"selected":{"id":"1146"},"selection_policy":{"id":"1145"}},"id":"1123","type":"ColumnDataSource"},{"attributes":{},"id":"1825","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1149","type":"Line"},{"attributes":{},"id":"1048","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1148"},"glyph":{"id":"1149"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1150"},"selection_glyph":null,"view":{"id":"1152"}},"id":"1151","type":"GlyphRenderer"},{"attributes":{"end":4.0,"start":0.75},"id":"1034","type":"Range1d"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-base"},"renderers":[{"id":"1605"}]},"id":"1655","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1125","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2019","type":"Line"},{"attributes":{"source":{"id":"1123"}},"id":"1127","type":"CDSView"},{"attributes":{"source":{"id":"2017"}},"id":"2021","type":"CDSView"},{"attributes":{},"id":"1652","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1075"},"glyph":{"id":"1076"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1077"},"selection_glyph":null,"view":{"id":"1079"}},"id":"1078","type":"GlyphRenderer"},{"attributes":{},"id":"1653","type":"Selection"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[86.5,86.5]},"selected":{"id":"1092"},"selection_policy":{"id":"1091"}},"id":"1075","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1890","type":"Line"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[88.5,88.5]},"selected":{"id":"1500"},"selection_policy":{"id":"1499"}},"id":"1455","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1829","type":"Line"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,1.9839754797994356,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.24613086360249,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"1653"},"selection_policy":{"id":"1652"}},"id":"1602","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[87.5,87.5]},"selected":{"id":"1243"},"selection_policy":{"id":"1242"}},"id":"1212","type":"ColumnDataSource"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1603","type":"Line"},{"attributes":{},"id":"1145","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1095"},"glyph":{"id":"1096"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1097"},"selection_glyph":null,"view":{"id":"1099"}},"id":"1098","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1213","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1503","type":"Line"},{"attributes":{"data_source":{"id":"1889"},"glyph":{"id":"1890"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1891"},"selection_glyph":null,"view":{"id":"1893"}},"id":"1892","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1504","type":"Line"},{"attributes":{},"id":"1146","type":"Selection"},{"attributes":{},"id":"2081","type":"UnionRenderers"},{"attributes":{},"id":"2082","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1077","type":"Line"},{"attributes":{"data":{"x":[0.9221729963255725,0.9261182619659336,0.929906085171529,1.0281280670181348,1.034699920808227,1.2874356761138743,1.4102258637932692,1.4644927453324936,1.4810163272660417],"y":[91.0266636723574,90.84270784891945,90.73941291394593,90.16320537561052,90.10843526218638,89.39825688878855,88.43605833215561,87.48044078095904,87.41551421723396]},"selected":{"id":"1886"},"selection_policy":{"id":"1885"}},"id":"1827","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1075"}},"id":"1079","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1214","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1457","type":"Line"},{"attributes":{"source":{"id":"1095"}},"id":"1099","type":"CDSView"},{"attributes":{"source":{"id":"1212"}},"id":"1216","type":"CDSView"},{"attributes":{"source":{"id":"1455"}},"id":"1459","type":"CDSView"},{"attributes":{"data_source":{"id":"1245"},"glyph":{"id":"1246"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1247"},"selection_glyph":null,"view":{"id":"1249"}},"id":"1248","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1502"},"glyph":{"id":"1503"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1504"},"selection_glyph":null,"view":{"id":"1506"}},"id":"1505","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-large"},"renderers":[{"id":"1830"}]},"id":"1888","type":"LegendItem"},{"attributes":{},"id":"1885","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[88.5,88.5]},"selected":{"id":"1709"},"selection_policy":{"id":"1708"}},"id":"1656","type":"ColumnDataSource"},{"attributes":{},"id":"1886","type":"Selection"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"},{"id":"1035"},{"id":"1056"},{"id":"1094"},{"id":"1175"},{"id":"1280"}],"left":[{"id":"1016"}],"plot_width":800,"renderers":[{"id":"1039"},{"id":"1044"},{"id":"1061"},{"id":"1078"},{"id":"1098"},{"id":"1103"},{"id":"1126"},{"id":"1151"},{"id":"1179"},{"id":"1184"},{"id":"1215"},{"id":"1248"},{"id":"1284"},{"id":"1289"},{"id":"1328"},{"id":"1369"},{"id":"1412"},{"id":"1458"},{"id":"1505"},{"id":"1554"},{"id":"1605"},{"id":"1659"},{"id":"1714"},{"id":"1771"},{"id":"1830"},{"id":"1892"},{"id":"1955"},{"id":"2020"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"x_range":{"id":"1034"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"1827"},"glyph":{"id":"1828"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1829"},"selection_glyph":null,"view":{"id":"1831"}},"id":"1830","type":"GlyphRenderer"},{"attributes":{},"id":"1050","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1178","type":"Scatter"},{"attributes":{},"id":"1091","type":"UnionRenderers"},{"attributes":{},"id":"1172","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[86.5,86.5]},"selected":{"id":"1173"},"selection_policy":{"id":"1172"}},"id":"1148","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[87.5,87.5]},"selected":{"id":"1766"},"selection_policy":{"id":"1765"}},"id":"1711","type":"ColumnDataSource"},{"attributes":{},"id":"1092","type":"Selection"},{"attributes":{},"id":"1242","type":"UnionRenderers"},{"attributes":{},"id":"1243","type":"Selection"},{"attributes":{},"id":"1499","type":"UnionRenderers"},{"attributes":{},"id":"1500","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1658","type":"Line"},{"attributes":{},"id":"1051","type":"UnionRenderers"},{"attributes":{},"id":"1173","type":"Selection"},{"attributes":{"text":"Mobile_bert","x":5.516129032258065,"y":90.0},"id":"1175","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1150","type":"Line"},{"attributes":{"source":{"id":"1656"}},"id":"1660","type":"CDSView"},{"attributes":{"data_source":{"id":"1711"},"glyph":{"id":"1712"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1713"},"selection_glyph":null,"view":{"id":"1715"}},"id":"1714","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1148"}},"id":"1152","type":"CDSView"},{"attributes":{},"id":"1052","type":"Selection"},{"attributes":{"text":"Tinybert","x":2.0,"y":87.5},"id":"1094","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1096","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1097","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1042","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1177","type":"Scatter"},{"attributes":{"data_source":{"id":"1176"},"glyph":{"id":"1177"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1178"},"selection_glyph":null,"view":{"id":"1180"}},"id":"1179","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"1119"},"selection_policy":{"id":"1118"}},"id":"1095","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1245"}},"id":"1249","type":"CDSView"},{"attributes":{"data_source":{"id":"1041"},"glyph":{"id":"1042"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1043"},"selection_glyph":null,"view":{"id":"1045"}},"id":"1044","type":"GlyphRenderer"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1048"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[86.5,86.5]},"selected":{"id":"1278"},"selection_policy":{"id":"1277"}},"id":"1245","type":"ColumnDataSource"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[88.5,88.5]},"selected":{"id":"1950"},"selection_policy":{"id":"1949"}},"id":"1889","type":"ColumnDataSource"},{"attributes":{},"id":"1708","type":"UnionRenderers"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"data":{"x":[0,5.516129032258065],"y":[88.5,88.5]},"selected":{"id":"1054"},"selection_policy":{"id":"1053"}},"id":"1041","type":"ColumnDataSource"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"64a7072c-9698-49ec-afec-a67ebe7da83e","root_ids":["1001"],"roots":{"1001":"ea82ad95-014e-4c2a-ab96-642301fb0af1"}}];
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