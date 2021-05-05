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
    
      
      
    
      var element = document.getElementById("a5730546-7e17-4c92-8dbc-ae3ee7bec100");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a5730546-7e17-4c92-8dbc-ae3ee7bec100' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9be0a8ea-cc45-4af8-90cf-c163bc5f98bf":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6219","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6244"},"selection_policy":{"id":"6243"}},"id":"6218","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6218"},"glyph":{"id":"6219"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6220"},"selection_glyph":null,"view":{"id":"6222"}},"id":"6221","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.45493344907407407,0.356571903935185,0.29078052662037035,0.23759403935185186,0.19692201967592593],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,87.15966661496869]},"selected":{"id":"6273"},"selection_policy":{"id":"6272"}},"id":"6245","type":"ColumnDataSource"},{"attributes":{},"id":"6491","type":"UnionRenderers"},{"attributes":{},"id":"6492","type":"Selection"},{"attributes":{},"id":"6273","type":"Selection"},{"attributes":{"source":{"id":"6245"}},"id":"6249","type":"CDSView"},{"attributes":{},"id":"6100","type":"WheelZoomTool"},{"attributes":{},"id":"6243","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6220","type":"Line"},{"attributes":{"source":{"id":"6218"}},"id":"6222","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6246","type":"Line"},{"attributes":{"end":90.75,"start":84.5},"id":"6114","type":"Range1d"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6170","type":"Line"},{"attributes":{},"id":"6244","type":"Selection"},{"attributes":{"data_source":{"id":"6164"},"glyph":{"id":"6165"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6166"},"selection_glyph":null,"view":{"id":"6168"}},"id":"6167","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6166","type":"Scatter"},{"attributes":{"data_source":{"id":"6169"},"glyph":{"id":"6170"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6171"},"selection_glyph":null,"view":{"id":"6173"}},"id":"6172","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6192"},"glyph":{"id":"6193"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6194"},"selection_glyph":null,"view":{"id":"6196"}},"id":"6195","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6191"},"selection_policy":{"id":"6190"}},"id":"6169","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6164"}},"id":"6168","type":"CDSView"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"6216"},"selection_policy":{"id":"6215"}},"id":"6192","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6495","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6536"},"selection_policy":{"id":"6535"}},"id":"6494","type":"ColumnDataSource"},{"attributes":{},"id":"6216","type":"Selection"},{"attributes":{"data_source":{"id":"6494"},"glyph":{"id":"6495"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6496"},"selection_glyph":null,"view":{"id":"6498"}},"id":"6497","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6192"}},"id":"6196","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6193","type":"Line"},{"attributes":{},"id":"6132","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6162"},"selection_policy":{"id":"6161"}},"id":"6144","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6171","type":"Line"},{"attributes":{"source":{"id":"6169"}},"id":"6173","type":"CDSView"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"6411"},"selection_policy":{"id":"6410"}},"id":"6375","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6139"}},"id":"6143","type":"CDSView"},{"attributes":{},"id":"6535","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6165","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6276","type":"Line"},{"attributes":{"axis_label":"F1","formatter":{"id":"6129"},"ticker":{"id":"6096"}},"id":"6095","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6496","type":"Line"},{"attributes":{},"id":"6133","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6141","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6247","type":"Line"},{"attributes":{"source":{"id":"6494"}},"id":"6498","type":"CDSView"},{"attributes":{"data_source":{"id":"6275"},"glyph":{"id":"6276"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6277"},"selection_glyph":null,"view":{"id":"6279"}},"id":"6278","type":"GlyphRenderer"},{"attributes":{},"id":"6129","type":"BasicTickFormatter"},{"attributes":{},"id":"6188","type":"UnionRenderers"},{"attributes":{},"id":"6189","type":"Selection"},{"attributes":{},"id":"6272","type":"UnionRenderers"},{"attributes":{},"id":"6536","type":"Selection"},{"attributes":{"axis":{"id":"6095"},"dimension":1,"ticker":null},"id":"6098","type":"Grid"},{"attributes":{"data_source":{"id":"6144"},"glyph":{"id":"6145"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6146"},"selection_glyph":null,"view":{"id":"6148"}},"id":"6147","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid Filled, large teacher"},"renderers":[{"id":"6248"}]},"id":"6274","type":"LegendItem"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"6115","type":"Label"},{"attributes":{"end":0.8},"id":"6113","type":"Range1d"},{"attributes":{},"id":"6190","type":"UnionRenderers"},{"attributes":{},"id":"6191","type":"Selection"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"6160"},"selection_policy":{"id":"6159"}},"id":"6139","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"6189"},"selection_policy":{"id":"6188"}},"id":"6164","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6145","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6305"},"selection_policy":{"id":"6304"}},"id":"6275","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.38938319830246915,0.29069613233024694,0.22240909529320985,0.2187620563271605,0.15897472993827155,0.1255726755401234],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"6338"},"selection_policy":{"id":"6337"}},"id":"6306","type":"ColumnDataSource"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6307","type":"Line"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"6309"}]},"id":"6339","type":"LegendItem"},{"attributes":{"source":{"id":"6306"}},"id":"6310","type":"CDSView"},{"attributes":{},"id":"6304","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"6139"},"glyph":{"id":"6140"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6141"},"selection_glyph":null,"view":{"id":"6143"}},"id":"6142","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6277","type":"Line"},{"attributes":{"source":{"id":"6275"}},"id":"6279","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6308","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6146","type":"Line"},{"attributes":{"source":{"id":"6144"}},"id":"6148","type":"CDSView"},{"attributes":{},"id":"6215","type":"UnionRenderers"},{"attributes":{},"id":"6305","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6194","type":"Line"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"6195"}]},"id":"6217","type":"LegendItem"},{"attributes":{"data_source":{"id":"6245"},"glyph":{"id":"6246"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6247"},"selection_glyph":null,"view":{"id":"6249"}},"id":"6248","type":"GlyphRenderer"},{"attributes":{},"id":"6159","type":"UnionRenderers"},{"attributes":{},"id":"6099","type":"PanTool"},{"attributes":{"data_source":{"id":"6375"},"glyph":{"id":"6376"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6377"},"selection_glyph":null,"view":{"id":"6379"}},"id":"6378","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6341","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6140","type":"Scatter"},{"attributes":{},"id":"6337","type":"UnionRenderers"},{"attributes":{"below":[{"id":"6091"}],"center":[{"id":"6094"},{"id":"6098"},{"id":"6115"},{"id":"6136"},{"id":"6138"},{"id":"6163"}],"left":[{"id":"6095"}],"plot_width":800,"renderers":[{"id":"6119"},{"id":"6124"},{"id":"6142"},{"id":"6147"},{"id":"6167"},{"id":"6172"},{"id":"6195"},{"id":"6221"},{"id":"6248"},{"id":"6278"},{"id":"6309"},{"id":"6343"},{"id":"6378"},{"id":"6416"},{"id":"6455"},{"id":"6497"}],"title":{"id":"6081"},"toolbar":{"id":"6106"},"x_range":{"id":"6113"},"x_scale":{"id":"6087"},"y_range":{"id":"6114"},"y_scale":{"id":"6089"}},"id":"6080","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6338","type":"Selection"},{"attributes":{},"id":"6134","type":"UnionRenderers"},{"attributes":{"axis_label":"Density","formatter":{"id":"6127"},"ticker":{"id":"6092"}},"id":"6091","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6118","type":"Scatter"},{"attributes":{},"id":"6092","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6117","type":"Scatter"},{"attributes":{},"id":"6096","type":"BasicTicker"},{"attributes":{},"id":"6160","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6374"},"selection_policy":{"id":"6373"}},"id":"6340","type":"ColumnDataSource"},{"attributes":{},"id":"6135","type":"Selection"},{"attributes":{"data_source":{"id":"6340"},"glyph":{"id":"6341"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6342"},"selection_glyph":null,"view":{"id":"6344"}},"id":"6343","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"6492"},"selection_policy":{"id":"6491"}},"id":"6452","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6452"},"glyph":{"id":"6453"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6454"},"selection_glyph":null,"view":{"id":"6456"}},"id":"6455","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6376","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"6105","type":"BoxAnnotation"},{"attributes":{"source":{"id":"6375"}},"id":"6379","type":"CDSView"},{"attributes":{},"id":"6087","type":"LinearScale"},{"attributes":{},"id":"6373","type":"UnionRenderers"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"6163","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6342","type":"Line"},{"attributes":{"source":{"id":"6340"}},"id":"6344","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6377","type":"Line"},{"attributes":{},"id":"6161","type":"UnionRenderers"},{"attributes":{},"id":"6374","type":"Selection"},{"attributes":{"data_source":{"id":"6306"},"glyph":{"id":"6307"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6308"},"selection_glyph":null,"view":{"id":"6310"}},"id":"6309","type":"GlyphRenderer"},{"attributes":{},"id":"6162","type":"Selection"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"6081","type":"Title"},{"attributes":{"source":{"id":"6116"}},"id":"6120","type":"CDSView"},{"attributes":{},"id":"6104","type":"HelpTool"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"6138","type":"Label"},{"attributes":{"overlay":{"id":"6105"}},"id":"6101","type":"BoxZoomTool"},{"attributes":{},"id":"6411","type":"Selection"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"6133"},"selection_policy":{"id":"6132"}},"id":"6116","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6414","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6135"},"selection_policy":{"id":"6134"}},"id":"6121","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6413"},"glyph":{"id":"6414"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6415"},"selection_glyph":null,"view":{"id":"6417"}},"id":"6416","type":"GlyphRenderer"},{"attributes":{},"id":"6102","type":"SaveTool"},{"attributes":{"data_source":{"id":"6116"},"glyph":{"id":"6117"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6118"},"selection_glyph":null,"view":{"id":"6120"}},"id":"6119","type":"GlyphRenderer"},{"attributes":{},"id":"6410","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"6378"}]},"id":"6412","type":"LegendItem"},{"attributes":{"data_source":{"id":"6121"},"glyph":{"id":"6122"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6123"},"selection_glyph":null,"view":{"id":"6125"}},"id":"6124","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6122","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"6137"},{"id":"6217"},{"id":"6274"},{"id":"6339"},{"id":"6412"},{"id":"6493"}],"location":"bottom_right"},"id":"6136","type":"Legend"},{"attributes":{},"id":"6089","type":"LinearScale"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"6124"},{"id":"6147"},{"id":"6172"},{"id":"6221"},{"id":"6278"},{"id":"6343"},{"id":"6416"},{"id":"6497"}]},"id":"6137","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6123","type":"Line"},{"attributes":{"source":{"id":"6121"}},"id":"6125","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6099"},{"id":"6100"},{"id":"6101"},{"id":"6102"},{"id":"6103"},{"id":"6104"}]},"id":"6106","type":"Toolbar"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"6455"}]},"id":"6493","type":"LegendItem"},{"attributes":{},"id":"6103","type":"ResetTool"},{"attributes":{},"id":"6127","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"6451"},"selection_policy":{"id":"6450"}},"id":"6413","type":"ColumnDataSource"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6453","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6454","type":"Line"},{"attributes":{},"id":"6450","type":"UnionRenderers"},{"attributes":{"axis":{"id":"6091"},"ticker":null},"id":"6094","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6415","type":"Line"},{"attributes":{"source":{"id":"6413"}},"id":"6417","type":"CDSView"},{"attributes":{"source":{"id":"6452"}},"id":"6456","type":"CDSView"},{"attributes":{},"id":"6451","type":"Selection"}],"root_ids":["6080"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"9be0a8ea-cc45-4af8-90cf-c163bc5f98bf","root_ids":["6080"],"roots":{"6080":"a5730546-7e17-4c92-8dbc-ae3ee7bec100"}}];
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