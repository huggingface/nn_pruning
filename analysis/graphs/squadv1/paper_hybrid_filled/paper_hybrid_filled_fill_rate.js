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
    
      
      
    
      var element = document.getElementById("03b68710-a1ea-46af-96b8-e339317fdcad");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '03b68710-a1ea-46af-96b8-e339317fdcad' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c10f8528-2a19-40f4-90ff-74156f7c5b69":{"roots":{"references":[{"attributes":{"source":{"id":"6407"}},"id":"6411","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6408","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6386","type":"Line"},{"attributes":{"source":{"id":"6555"}},"id":"6559","type":"CDSView"},{"attributes":{"source":{"id":"6384"}},"id":"6388","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6710","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6750"},"selection_policy":{"id":"6749"}},"id":"6709","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6709"},"glyph":{"id":"6710"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6711"},"selection_glyph":null,"view":{"id":"6713"}},"id":"6712","type":"GlyphRenderer"},{"attributes":{},"id":"6402","type":"UnionRenderers"},{"attributes":{},"id":"6403","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6711","type":"Line"},{"attributes":{"source":{"id":"6709"}},"id":"6713","type":"CDSView"},{"attributes":{"axis_label":"F1","formatter":{"id":"6345"},"ticker":{"id":"6311"}},"id":"6310","type":"LinearAxis"},{"attributes":{},"id":"6749","type":"UnionRenderers"},{"attributes":{},"id":"6404","type":"UnionRenderers"},{"attributes":{},"id":"6750","type":"Selection"},{"attributes":{},"id":"6405","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6434","type":"Line"},{"attributes":{},"id":"6705","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6409","type":"Line"},{"attributes":{"end":0.8},"id":"6328","type":"Range1d"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"6410"}]},"id":"6432","type":"LegendItem"},{"attributes":{"data_source":{"id":"6433"},"glyph":{"id":"6434"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6435"},"selection_glyph":null,"view":{"id":"6437"}},"id":"6436","type":"GlyphRenderer"},{"attributes":{},"id":"6706","type":"Selection"},{"attributes":{},"id":"6429","type":"UnionRenderers"},{"attributes":{},"id":"6430","type":"Selection"},{"attributes":{"axis":{"id":"6310"},"dimension":1,"ticker":null},"id":"6313","type":"Grid"},{"attributes":{"data":{"x":[0.45493344907407407,0.356571903935185,0.29078052662037035,0.23759403935185186,0.19692201967592593],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,87.15966661496869]},"selected":{"id":"6487"},"selection_policy":{"id":"6486"}},"id":"6460","type":"ColumnDataSource"},{"attributes":{},"id":"6311","type":"BasicTicker"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6458"},"selection_policy":{"id":"6457"}},"id":"6433","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6460"},"glyph":{"id":"6461"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6462"},"selection_glyph":null,"view":{"id":"6464"}},"id":"6463","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6462","type":"Line"},{"attributes":{"source":{"id":"6460"}},"id":"6464","type":"CDSView"},{"attributes":{"overlay":{"id":"6320"}},"id":"6316","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6435","type":"Line"},{"attributes":{"source":{"id":"6433"}},"id":"6437","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6461","type":"Line"},{"attributes":{},"id":"6457","type":"UnionRenderers"},{"attributes":{},"id":"6458","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6355","type":"Scatter"},{"attributes":{"source":{"id":"6590"}},"id":"6594","type":"CDSView"},{"attributes":{},"id":"6346","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6592","type":"Line"},{"attributes":{},"id":"6347","type":"Selection"},{"attributes":{"data_source":{"id":"6521"},"glyph":{"id":"6522"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6523"},"selection_glyph":null,"view":{"id":"6525"}},"id":"6524","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6491","type":"Line"},{"attributes":{},"id":"6587","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"6490"},"glyph":{"id":"6491"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6492"},"selection_glyph":null,"view":{"id":"6494"}},"id":"6493","type":"GlyphRenderer"},{"attributes":{},"id":"6588","type":"Selection"},{"attributes":{"data_source":{"id":"6331"},"glyph":{"id":"6332"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6333"},"selection_glyph":null,"view":{"id":"6335"}},"id":"6334","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid Filled, large teacher"},"renderers":[{"id":"6463"}]},"id":"6489","type":"LegendItem"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"6296","type":"Title"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6349"},"selection_policy":{"id":"6348"}},"id":"6336","type":"ColumnDataSource"},{"attributes":{},"id":"6486","type":"UnionRenderers"},{"attributes":{"axis":{"id":"6306"},"ticker":null},"id":"6309","type":"Grid"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"6353","type":"Label"},{"attributes":{"source":{"id":"6354"}},"id":"6358","type":"CDSView"},{"attributes":{"data_source":{"id":"6359"},"glyph":{"id":"6360"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6361"},"selection_glyph":null,"view":{"id":"6363"}},"id":"6362","type":"GlyphRenderer"},{"attributes":{},"id":"6487","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6381","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6360","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6629","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"6374"},"selection_policy":{"id":"6373"}},"id":"6354","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6628"},"glyph":{"id":"6629"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6630"},"selection_glyph":null,"view":{"id":"6632"}},"id":"6631","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6356","type":"Scatter"},{"attributes":{"data_source":{"id":"6354"},"glyph":{"id":"6355"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6356"},"selection_glyph":null,"view":{"id":"6358"}},"id":"6357","type":"GlyphRenderer"},{"attributes":{},"id":"6349","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6376"},"selection_policy":{"id":"6375"}},"id":"6359","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"6593"}]},"id":"6627","type":"LegendItem"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"6430"},"selection_policy":{"id":"6429"}},"id":"6407","type":"ColumnDataSource"},{"attributes":{},"id":"6307","type":"BasicTicker"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6519"},"selection_policy":{"id":"6518"}},"id":"6490","type":"ColumnDataSource"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6591","type":"Line"},{"attributes":{"source":{"id":"6379"}},"id":"6383","type":"CDSView"},{"attributes":{"data":{"x":[0.38938319830246915,0.29069613233024694,0.22240909529320985,0.2187620563271605,0.15897472993827155,0.1255726755401234],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"6552"},"selection_policy":{"id":"6551"}},"id":"6521","type":"ColumnDataSource"},{"attributes":{},"id":"6624","type":"UnionRenderers"},{"attributes":{"source":{"id":"6336"}},"id":"6340","type":"CDSView"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6522","type":"Line"},{"attributes":{},"id":"6625","type":"Selection"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"6378","type":"Label"},{"attributes":{"source":{"id":"6521"}},"id":"6525","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6361","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6523","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6333","type":"Scatter"},{"attributes":{"source":{"id":"6359"}},"id":"6363","type":"CDSView"},{"attributes":{"data_source":{"id":"6407"},"glyph":{"id":"6408"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6409"},"selection_glyph":null,"view":{"id":"6411"}},"id":"6410","type":"GlyphRenderer"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"6330","type":"Label"},{"attributes":{},"id":"6304","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6492","type":"Line"},{"attributes":{"source":{"id":"6490"}},"id":"6494","type":"CDSView"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"6706"},"selection_policy":{"id":"6705"}},"id":"6667","type":"ColumnDataSource"},{"attributes":{},"id":"6314","type":"PanTool"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"6347"},"selection_policy":{"id":"6346"}},"id":"6331","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6331"}},"id":"6335","type":"CDSView"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6665"},"selection_policy":{"id":"6664"}},"id":"6628","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6667"},"glyph":{"id":"6668"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6669"},"selection_glyph":null,"view":{"id":"6671"}},"id":"6670","type":"GlyphRenderer"},{"attributes":{},"id":"6518","type":"UnionRenderers"},{"attributes":{},"id":"6519","type":"Selection"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6668","type":"Line"},{"attributes":{"source":{"id":"6667"}},"id":"6671","type":"CDSView"},{"attributes":{},"id":"6373","type":"UnionRenderers"},{"attributes":{},"id":"6374","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6338","type":"Line"},{"attributes":{},"id":"6348","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6630","type":"Line"},{"attributes":{"source":{"id":"6628"}},"id":"6632","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6669","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6332","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6556","type":"Line"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"6339"},{"id":"6362"},{"id":"6387"},{"id":"6436"},{"id":"6493"},{"id":"6558"},{"id":"6631"},{"id":"6712"}]},"id":"6352","type":"LegendItem"},{"attributes":{},"id":"6375","type":"UnionRenderers"},{"attributes":{},"id":"6664","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"6555"},"glyph":{"id":"6556"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6557"},"selection_glyph":null,"view":{"id":"6559"}},"id":"6558","type":"GlyphRenderer"},{"attributes":{"axis_label":"Density","formatter":{"id":"6343"},"ticker":{"id":"6307"}},"id":"6306","type":"LinearAxis"},{"attributes":{},"id":"6343","type":"BasicTickFormatter"},{"attributes":{},"id":"6315","type":"WheelZoomTool"},{"attributes":{},"id":"6376","type":"Selection"},{"attributes":{},"id":"6665","type":"Selection"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"6524"}]},"id":"6554","type":"LegendItem"},{"attributes":{"below":[{"id":"6306"}],"center":[{"id":"6309"},{"id":"6313"},{"id":"6330"},{"id":"6351"},{"id":"6353"},{"id":"6378"}],"left":[{"id":"6310"}],"plot_width":800,"renderers":[{"id":"6334"},{"id":"6339"},{"id":"6357"},{"id":"6362"},{"id":"6382"},{"id":"6387"},{"id":"6410"},{"id":"6436"},{"id":"6463"},{"id":"6493"},{"id":"6524"},{"id":"6558"},{"id":"6593"},{"id":"6631"},{"id":"6670"},{"id":"6712"}],"title":{"id":"6296"},"toolbar":{"id":"6321"},"x_range":{"id":"6328"},"x_scale":{"id":"6302"},"y_range":{"id":"6329"},"y_scale":{"id":"6304"}},"id":"6295","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6551","type":"UnionRenderers"},{"attributes":{},"id":"6552","type":"Selection"},{"attributes":{},"id":"6345","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"6336"},"glyph":{"id":"6337"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6338"},"selection_glyph":null,"view":{"id":"6340"}},"id":"6339","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6314"},{"id":"6315"},{"id":"6316"},{"id":"6317"},{"id":"6318"},{"id":"6319"}]},"id":"6321","type":"Toolbar"},{"attributes":{},"id":"6319","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"6320","type":"BoxAnnotation"},{"attributes":{},"id":"6302","type":"LinearScale"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"6625"},"selection_policy":{"id":"6624"}},"id":"6590","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"6403"},"selection_policy":{"id":"6402"}},"id":"6379","type":"ColumnDataSource"},{"attributes":{},"id":"6318","type":"ResetTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6337","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6380","type":"Scatter"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"6670"}]},"id":"6708","type":"LegendItem"},{"attributes":{},"id":"6317","type":"SaveTool"},{"attributes":{"data_source":{"id":"6384"},"glyph":{"id":"6385"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6386"},"selection_glyph":null,"view":{"id":"6388"}},"id":"6387","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6588"},"selection_policy":{"id":"6587"}},"id":"6555","type":"ColumnDataSource"},{"attributes":{"end":90.75,"start":84.5},"id":"6329","type":"Range1d"},{"attributes":{"data_source":{"id":"6379"},"glyph":{"id":"6380"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6381"},"selection_glyph":null,"view":{"id":"6383"}},"id":"6382","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6590"},"glyph":{"id":"6591"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6592"},"selection_glyph":null,"view":{"id":"6594"}},"id":"6593","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6405"},"selection_policy":{"id":"6404"}},"id":"6384","type":"ColumnDataSource"},{"attributes":{"click_policy":"hide","items":[{"id":"6352"},{"id":"6432"},{"id":"6489"},{"id":"6554"},{"id":"6627"},{"id":"6708"}],"location":"bottom_right"},"id":"6351","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6557","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6385","type":"Line"}],"root_ids":["6295"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"c10f8528-2a19-40f4-90ff-74156f7c5b69","root_ids":["6295"],"roots":{"6295":"03b68710-a1ea-46af-96b8-e339317fdcad"}}];
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