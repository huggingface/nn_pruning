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
    
      
      
    
      var element = document.getElementById("76f6782a-6a0b-4f19-9942-64eb7f6e7d27");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '76f6782a-6a0b-4f19-9942-64eb7f6e7d27' but no matching script tag was found.")
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
                    
                  var docs_json = '{"66e7309a-51b2-4aa4-a4e8-f5d825793a39":{"roots":{"references":[{"attributes":{},"id":"6270","type":"Selection"},{"attributes":{},"id":"6271","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6274","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6302"},"selection_policy":{"id":"6303"}},"id":"6273","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6273"},"glyph":{"id":"6274"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6275"},"selection_glyph":null,"view":{"id":"6277"}},"id":"6276","type":"GlyphRenderer"},{"attributes":{},"id":"6085","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6097"},{"id":"6098"},{"id":"6099"},{"id":"6100"},{"id":"6101"},{"id":"6102"}]},"id":"6104","type":"Toolbar"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6305","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6159"},"selection_policy":{"id":"6160"}},"id":"6142","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6304"}},"id":"6308","type":"CDSView"},{"attributes":{},"id":"6097","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6306","type":"Line"},{"attributes":{},"id":"6102","type":"HelpTool"},{"attributes":{},"id":"6094","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6275","type":"Line"},{"attributes":{"source":{"id":"6273"}},"id":"6277","type":"CDSView"},{"attributes":{},"id":"6101","type":"ResetTool"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"6157"},"selection_policy":{"id":"6158"}},"id":"6137","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6139","type":"Scatter"},{"attributes":{"source":{"id":"6137"}},"id":"6141","type":"CDSView"},{"attributes":{"data_source":{"id":"6137"},"glyph":{"id":"6138"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6139"},"selection_glyph":null,"view":{"id":"6141"}},"id":"6140","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"6186"},"selection_policy":{"id":"6187"}},"id":"6162","type":"ColumnDataSource"},{"attributes":{},"id":"6302","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"6103","type":"BoxAnnotation"},{"attributes":{},"id":"6157","type":"Selection"},{"attributes":{},"id":"6303","type":"UnionRenderers"},{"attributes":{},"id":"6158","type":"UnionRenderers"},{"attributes":{"axis_label":"Density","formatter":{"id":"6125"},"ticker":{"id":"6090"}},"id":"6089","type":"LinearAxis"},{"attributes":{},"id":"6090","type":"BasicTicker"},{"attributes":{"data_source":{"id":"6338"},"glyph":{"id":"6339"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6340"},"selection_glyph":null,"view":{"id":"6342"}},"id":"6341","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6339","type":"Line"},{"attributes":{},"id":"6087","type":"LinearScale"},{"attributes":{"axis_label":"F1","formatter":{"id":"6127"},"ticker":{"id":"6094"}},"id":"6093","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6163","type":"Scatter"},{"attributes":{"end":90.75,"start":84.5},"id":"6112","type":"Range1d"},{"attributes":{},"id":"6159","type":"Selection"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"6307"}]},"id":"6337","type":"LegendItem"},{"attributes":{},"id":"6160","type":"UnionRenderers"},{"attributes":{},"id":"6335","type":"Selection"},{"attributes":{},"id":"6133","type":"UnionRenderers"},{"attributes":{},"id":"6336","type":"UnionRenderers"},{"attributes":{"axis":{"id":"6089"},"ticker":null},"id":"6092","type":"Grid"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6168","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6188"},"selection_policy":{"id":"6189"}},"id":"6167","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6164","type":"Scatter"},{"attributes":{"data_source":{"id":"6167"},"glyph":{"id":"6168"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6169"},"selection_glyph":null,"view":{"id":"6171"}},"id":"6170","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6371"},"selection_policy":{"id":"6372"}},"id":"6338","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6162"}},"id":"6166","type":"CDSView"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"6408"},"selection_policy":{"id":"6409"}},"id":"6373","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6162"},"glyph":{"id":"6163"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6164"},"selection_glyph":null,"view":{"id":"6166"}},"id":"6165","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6374","type":"Line"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"6213"},"selection_policy":{"id":"6214"}},"id":"6190","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"6376"}]},"id":"6410","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6375","type":"Line"},{"attributes":{"overlay":{"id":"6103"}},"id":"6099","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6192","type":"Line"},{"attributes":{},"id":"6098","type":"WheelZoomTool"},{"attributes":{"source":{"id":"6190"}},"id":"6194","type":"CDSView"},{"attributes":{"axis":{"id":"6093"},"dimension":1,"ticker":null},"id":"6096","type":"Grid"},{"attributes":{},"id":"6100","type":"SaveTool"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6191","type":"Line"},{"attributes":{"source":{"id":"6338"}},"id":"6342","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6340","type":"Line"},{"attributes":{"data_source":{"id":"6190"},"glyph":{"id":"6191"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6192"},"selection_glyph":null,"view":{"id":"6194"}},"id":"6193","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6169","type":"Line"},{"attributes":{"source":{"id":"6373"}},"id":"6377","type":"CDSView"},{"attributes":{"source":{"id":"6167"}},"id":"6171","type":"CDSView"},{"attributes":{},"id":"6371","type":"Selection"},{"attributes":{},"id":"6372","type":"UnionRenderers"},{"attributes":{},"id":"6186","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6132"},"selection_policy":{"id":"6133"}},"id":"6119","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6114"}},"id":"6118","type":"CDSView"},{"attributes":{},"id":"6187","type":"UnionRenderers"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"6161","type":"Label"},{"attributes":{"data_source":{"id":"6114"},"glyph":{"id":"6115"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6116"},"selection_glyph":null,"view":{"id":"6118"}},"id":"6117","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6411"},"glyph":{"id":"6412"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6413"},"selection_glyph":null,"view":{"id":"6415"}},"id":"6414","type":"GlyphRenderer"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"6122"},{"id":"6145"},{"id":"6170"},{"id":"6219"},{"id":"6276"},{"id":"6341"},{"id":"6414"},{"id":"6495"}]},"id":"6135","type":"LegendItem"},{"attributes":{},"id":"6533","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6143","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6412","type":"Line"},{"attributes":{},"id":"6188","type":"Selection"},{"attributes":{},"id":"6534","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"6135"},{"id":"6215"},{"id":"6272"},{"id":"6337"},{"id":"6410"},{"id":"6491"}],"location":"bottom_right"},"id":"6134","type":"Legend"},{"attributes":{},"id":"6189","type":"UnionRenderers"},{"attributes":{},"id":"6408","type":"Selection"},{"attributes":{"source":{"id":"6119"}},"id":"6123","type":"CDSView"},{"attributes":{},"id":"6409","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6144","type":"Line"},{"attributes":{"label":{"value":"Hybrid Filled, large teacher"},"renderers":[{"id":"6246"}]},"id":"6272","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6120","type":"Line"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"6489"},"selection_policy":{"id":"6490"}},"id":"6450","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"6193"}]},"id":"6215","type":"LegendItem"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"6079","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6121","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6217","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6448"},"selection_policy":{"id":"6449"}},"id":"6411","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6142"},"glyph":{"id":"6143"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6144"},"selection_glyph":null,"view":{"id":"6146"}},"id":"6145","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6450"},"glyph":{"id":"6451"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6452"},"selection_glyph":null,"view":{"id":"6454"}},"id":"6453","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6216"},"glyph":{"id":"6217"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6218"},"selection_glyph":null,"view":{"id":"6220"}},"id":"6219","type":"GlyphRenderer"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6451","type":"Line"},{"attributes":{"source":{"id":"6450"}},"id":"6454","type":"CDSView"},{"attributes":{"data_source":{"id":"6119"},"glyph":{"id":"6120"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6121"},"selection_glyph":null,"view":{"id":"6123"}},"id":"6122","type":"GlyphRenderer"},{"attributes":{},"id":"6213","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6413","type":"Line"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"6136","type":"Label"},{"attributes":{"source":{"id":"6411"}},"id":"6415","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6116","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6452","type":"Line"},{"attributes":{},"id":"6214","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6138","type":"Scatter"},{"attributes":{},"id":"6448","type":"Selection"},{"attributes":{"data":{"x":[0.45493344907407407,0.356571903935185,0.29078052662037035,0.23759403935185186,0.19692201967592593],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,87.15966661496869]},"selected":{"id":"6270"},"selection_policy":{"id":"6271"}},"id":"6243","type":"ColumnDataSource"},{"attributes":{},"id":"6449","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6241"},"selection_policy":{"id":"6242"}},"id":"6216","type":"ColumnDataSource"},{"attributes":{},"id":"6125","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"6243"},"glyph":{"id":"6244"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6245"},"selection_glyph":null,"view":{"id":"6247"}},"id":"6246","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"6089"}],"center":[{"id":"6092"},{"id":"6096"},{"id":"6113"},{"id":"6134"},{"id":"6136"},{"id":"6161"}],"left":[{"id":"6093"}],"plot_width":800,"renderers":[{"id":"6117"},{"id":"6122"},{"id":"6140"},{"id":"6145"},{"id":"6165"},{"id":"6170"},{"id":"6193"},{"id":"6219"},{"id":"6246"},{"id":"6276"},{"id":"6307"},{"id":"6341"},{"id":"6376"},{"id":"6414"},{"id":"6453"},{"id":"6495"}],"title":{"id":"6079"},"toolbar":{"id":"6104"},"x_range":{"id":"6111"},"x_scale":{"id":"6085"},"y_range":{"id":"6112"},"y_scale":{"id":"6087"}},"id":"6078","subtype":"Figure","type":"Plot"},{"attributes":{"end":0.8},"id":"6111","type":"Range1d"},{"attributes":{"data":{"x":[0.38938319830246915,0.29069613233024694,0.22240909529320985,0.2187620563271605,0.15897472993827155,0.1255726755401234],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"6335"},"selection_policy":{"id":"6336"}},"id":"6304","type":"ColumnDataSource"},{"attributes":{},"id":"6127","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"6243"}},"id":"6247","type":"CDSView"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"6130"},"selection_policy":{"id":"6131"}},"id":"6114","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6218","type":"Line"},{"attributes":{"source":{"id":"6216"}},"id":"6220","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6244","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6493","type":"Line"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"6453"}]},"id":"6491","type":"LegendItem"},{"attributes":{},"id":"6241","type":"Selection"},{"attributes":{},"id":"6489","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6115","type":"Scatter"},{"attributes":{},"id":"6242","type":"UnionRenderers"},{"attributes":{},"id":"6130","type":"Selection"},{"attributes":{},"id":"6490","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"6373"},"glyph":{"id":"6374"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6375"},"selection_glyph":null,"view":{"id":"6377"}},"id":"6376","type":"GlyphRenderer"},{"attributes":{},"id":"6131","type":"UnionRenderers"},{"attributes":{"source":{"id":"6142"}},"id":"6146","type":"CDSView"},{"attributes":{"data_source":{"id":"6304"},"glyph":{"id":"6305"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6306"},"selection_glyph":null,"view":{"id":"6308"}},"id":"6307","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6245","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6533"},"selection_policy":{"id":"6534"}},"id":"6492","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6492"},"glyph":{"id":"6493"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6494"},"selection_glyph":null,"view":{"id":"6496"}},"id":"6495","type":"GlyphRenderer"},{"attributes":{},"id":"6132","type":"Selection"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"6113","type":"Label"},{"attributes":{"source":{"id":"6492"}},"id":"6496","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6494","type":"Line"}],"root_ids":["6078"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"66e7309a-51b2-4aa4-a4e8-f5d825793a39","root_ids":["6078"],"roots":{"6078":"76f6782a-6a0b-4f19-9942-64eb7f6e7d27"}}];
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