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
    
      
      
    
      var element = document.getElementById("e30d8d51-7c92-40d2-ade8-8e166ffa77e9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e30d8d51-7c92-40d2-ade8-8e166ffa77e9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"506585c3-9e2e-43a4-87af-01cbbff6f389":{"roots":{"references":[{"attributes":{},"id":"40170","type":"UnionRenderers"},{"attributes":{"axis":{"id":"39972"},"ticker":null},"id":"39975","type":"Grid"},{"attributes":{},"id":"40033","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40084","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40109","type":"Line"},{"attributes":{"data_source":{"id":"40108"},"glyph":{"id":"40109"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40110"},"selection_glyph":null,"view":{"id":"40112"}},"id":"40111","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40085","type":"Line"},{"attributes":{"source":{"id":"40083"}},"id":"40087","type":"CDSView"},{"attributes":{},"id":"40032","type":"Selection"},{"attributes":{},"id":"39968","type":"LinearScale"},{"attributes":{},"id":"40105","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40036","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40206","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40173","type":"Line"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"40009"},"ticker":{"id":"39973"}},"id":"39972","type":"LinearAxis"},{"attributes":{},"id":"40106","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40061","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40174","type":"Line"},{"attributes":{"source":{"id":"40172"}},"id":"40176","type":"CDSView"},{"attributes":{"data_source":{"id":"40205"},"glyph":{"id":"40206"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40207"},"selection_glyph":null,"view":{"id":"40209"}},"id":"40208","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40037","type":"Line"},{"attributes":{"source":{"id":"40035"}},"id":"40039","type":"CDSView"},{"attributes":{"source":{"id":"40055"}},"id":"40059","type":"CDSView"},{"attributes":{},"id":"40202","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40142","type":"Line"},{"attributes":{},"id":"40051","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"40132"},"selection_policy":{"id":"40133"}},"id":"40108","type":"ColumnDataSource"},{"attributes":{},"id":"40203","type":"UnionRenderers"},{"attributes":{},"id":"40052","type":"UnionRenderers"},{"attributes":{"end":0.65},"id":"39994","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40110","type":"Line"},{"attributes":{"source":{"id":"40108"}},"id":"40112","type":"CDSView"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"39962","type":"Title"},{"attributes":{"source":{"id":"40240"}},"id":"40244","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"40057","type":"Scatter"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"40237"},"selection_policy":{"id":"40238"}},"id":"40205","type":"ColumnDataSource"},{"attributes":{},"id":"40132","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"40137","type":"Scatter"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"40078"},"selection_policy":{"id":"40079"}},"id":"40055","type":"ColumnDataSource"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"39995","type":"Label"},{"attributes":{},"id":"40133","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"40060"},"glyph":{"id":"40061"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40062"},"selection_glyph":null,"view":{"id":"40064"}},"id":"40063","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40207","type":"Line"},{"attributes":{"data_source":{"id":"40055"},"glyph":{"id":"40056"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40057"},"selection_glyph":null,"view":{"id":"40059"}},"id":"40058","type":"GlyphRenderer"},{"attributes":{"source":{"id":"40205"}},"id":"40209","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"40080"},"selection_policy":{"id":"40081"}},"id":"40060","type":"ColumnDataSource"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"40241","type":"Line"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.3]},"selected":{"id":"40167"},"selection_policy":{"id":"40168"}},"id":"40136","type":"ColumnDataSource"},{"attributes":{},"id":"40237","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"40105"},"selection_policy":{"id":"40106"}},"id":"40083","type":"ColumnDataSource"},{"attributes":{"source":{"id":"40136"}},"id":"40140","type":"CDSView"},{"attributes":{"data_source":{"id":"40141"},"glyph":{"id":"40142"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40143"},"selection_glyph":null,"view":{"id":"40145"}},"id":"40144","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"40035"},"glyph":{"id":"40036"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40037"},"selection_glyph":null,"view":{"id":"40039"}},"id":"40038","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"39986","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"40083"},"glyph":{"id":"40084"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40085"},"selection_glyph":null,"view":{"id":"40087"}},"id":"40086","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"40138","type":"Scatter"},{"attributes":{},"id":"40238","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40062","type":"Line"},{"attributes":{"source":{"id":"40018"}},"id":"40022","type":"CDSView"},{"attributes":{"source":{"id":"40060"}},"id":"40064","type":"CDSView"},{"attributes":{"data_source":{"id":"40136"},"glyph":{"id":"40137"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40138"},"selection_glyph":null,"view":{"id":"40140"}},"id":"40139","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"40169"},"selection_policy":{"id":"40170"}},"id":"40141","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"40274"},"selection_policy":{"id":"40275"}},"id":"40240","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"40240"},"glyph":{"id":"40241"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40242"},"selection_glyph":null,"view":{"id":"40244"}},"id":"40243","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"40172"},"glyph":{"id":"40173"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40174"},"selection_glyph":null,"view":{"id":"40176"}},"id":"40175","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40020","type":"Line"},{"attributes":{"data_source":{"id":"40401"},"glyph":{"id":"40402"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40403"},"selection_glyph":null,"view":{"id":"40405"}},"id":"40404","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"40051"},"selection_policy":{"id":"40052"}},"id":"40035","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"40242","type":"Line"},{"attributes":{},"id":"40078","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40143","type":"Line"},{"attributes":{"source":{"id":"40141"}},"id":"40145","type":"CDSView"},{"attributes":{"data_source":{"id":"40278"},"glyph":{"id":"40279"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40280"},"selection_glyph":null,"view":{"id":"40282"}},"id":"40281","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"40202"},"selection_policy":{"id":"40203"}},"id":"40172","type":"ColumnDataSource"},{"attributes":{},"id":"40079","type":"UnionRenderers"},{"attributes":{"label":{"value":"BERT-base teacher"},"renderers":[{"id":"40243"}]},"id":"40277","type":"LegendItem"},{"attributes":{},"id":"39973","type":"BasicTicker"},{"attributes":{},"id":"40274","type":"Selection"},{"attributes":{},"id":"40167","type":"Selection"},{"attributes":{},"id":"40275","type":"UnionRenderers"},{"attributes":{},"id":"40080","type":"Selection"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"40054","type":"Label"},{"attributes":{},"id":"40168","type":"UnionRenderers"},{"attributes":{"below":[{"id":"39972"}],"center":[{"id":"39975"},{"id":"39979"},{"id":"39995"},{"id":"40016"},{"id":"40054"},{"id":"40135"}],"left":[{"id":"39976"}],"plot_width":800,"renderers":[{"id":"39999"},{"id":"40004"},{"id":"40021"},{"id":"40038"},{"id":"40058"},{"id":"40063"},{"id":"40086"},{"id":"40111"},{"id":"40139"},{"id":"40144"},{"id":"40175"},{"id":"40208"},{"id":"40243"},{"id":"40281"},{"id":"40320"},{"id":"40361"},{"id":"40404"},{"id":"40450"},{"id":"40497"},{"id":"40546"}],"title":{"id":"39962"},"toolbar":{"id":"39987"},"x_range":{"id":"39994"},"x_scale":{"id":"39968"},"y_range":{"id":"39966"},"y_scale":{"id":"39970"}},"id":"39961","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"40081","type":"UnionRenderers"},{"attributes":{},"id":"39970","type":"LinearScale"},{"attributes":{"data":{"x":[0.45493344907407407,0.356571903935185,0.29078052662037035,0.23759403935185186,0.19692201967592593],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,87.15966661496869]},"selected":{"id":"40443"},"selection_policy":{"id":"40444"}},"id":"40401","type":"ColumnDataSource"},{"attributes":{},"id":"40169","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"40314"},"selection_policy":{"id":"40315"}},"id":"40278","type":"ColumnDataSource"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":90.3},"id":"40135","type":"Label"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40279","type":"Line"},{"attributes":{"source":{"id":"39996"}},"id":"40000","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40318","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"40011"},"selection_policy":{"id":"40012"}},"id":"39996","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40359","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"39998","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"39997","type":"Scatter"},{"attributes":{"data_source":{"id":"40018"},"glyph":{"id":"40019"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40020"},"selection_glyph":null,"view":{"id":"40022"}},"id":"40021","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40280","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40448","type":"Line"},{"attributes":{"data_source":{"id":"40001"},"glyph":{"id":"40002"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40003"},"selection_glyph":null,"view":{"id":"40005"}},"id":"40004","type":"GlyphRenderer"},{"attributes":{"source":{"id":"40278"}},"id":"40282","type":"CDSView"},{"attributes":{"data_source":{"id":"40317"},"glyph":{"id":"40318"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40319"},"selection_glyph":null,"view":{"id":"40321"}},"id":"40320","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"40056","type":"Scatter"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"40491"},"selection_policy":{"id":"40492"}},"id":"40447","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"39996"},"glyph":{"id":"39997"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39998"},"selection_glyph":null,"view":{"id":"40000"}},"id":"39999","type":"GlyphRenderer"},{"attributes":{"axis_label":"F1","formatter":{"id":"40007"},"ticker":{"id":"39977"}},"id":"39976","type":"LinearAxis"},{"attributes":{"data_source":{"id":"40447"},"glyph":{"id":"40448"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40449"},"selection_glyph":null,"view":{"id":"40451"}},"id":"40450","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"39976"},"dimension":1,"ticker":null},"id":"39979","type":"Grid"},{"attributes":{},"id":"40314","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"40013"},"selection_policy":{"id":"40014"}},"id":"40001","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40002","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"40017"},{"id":"40277"},{"id":"40446"}],"location":"bottom_right"},"id":"40016","type":"Legend"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40495","type":"Line"},{"attributes":{},"id":"40315","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"40032"},"selection_policy":{"id":"40033"}},"id":"40018","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40544","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40003","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40449","type":"Line"},{"attributes":{"source":{"id":"40001"}},"id":"40005","type":"CDSView"},{"attributes":{"source":{"id":"40447"}},"id":"40451","type":"CDSView"},{"attributes":{"data_source":{"id":"40494"},"glyph":{"id":"40495"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40496"},"selection_glyph":null,"view":{"id":"40498"}},"id":"40497","type":"GlyphRenderer"},{"attributes":{},"id":"40491","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"40355"},"selection_policy":{"id":"40356"}},"id":"40317","type":"ColumnDataSource"},{"attributes":{},"id":"40492","type":"UnionRenderers"},{"attributes":{},"id":"40007","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40319","type":"Line"},{"attributes":{"source":{"id":"40317"}},"id":"40321","type":"CDSView"},{"attributes":{"data_source":{"id":"40358"},"glyph":{"id":"40359"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40360"},"selection_glyph":null,"view":{"id":"40362"}},"id":"40361","type":"GlyphRenderer"},{"attributes":{},"id":"40355","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"40540"},"selection_policy":{"id":"40541"}},"id":"40494","type":"ColumnDataSource"},{"attributes":{},"id":"40356","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40496","type":"Line"},{"attributes":{"source":{"id":"40494"}},"id":"40498","type":"CDSView"},{"attributes":{"data_source":{"id":"40543"},"glyph":{"id":"40544"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40545"},"selection_glyph":null,"view":{"id":"40547"}},"id":"40546","type":"GlyphRenderer"},{"attributes":{"source":{"id":"40401"}},"id":"40405","type":"CDSView"},{"attributes":{},"id":"39985","type":"HelpTool"},{"attributes":{},"id":"40540","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"40398"},"selection_policy":{"id":"40399"}},"id":"40358","type":"ColumnDataSource"},{"attributes":{},"id":"39984","type":"ResetTool"},{"attributes":{},"id":"40009","type":"BasicTickFormatter"},{"attributes":{},"id":"40541","type":"UnionRenderers"},{"attributes":{},"id":"39981","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40360","type":"Line"},{"attributes":{"source":{"id":"40358"}},"id":"40362","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"40402","type":"Line"},{"attributes":{},"id":"39983","type":"SaveTool"},{"attributes":{},"id":"40011","type":"Selection"},{"attributes":{},"id":"39980","type":"PanTool"},{"attributes":{},"id":"40012","type":"UnionRenderers"},{"attributes":{},"id":"40398","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"40591"},"selection_policy":{"id":"40592"}},"id":"40543","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"39986"}},"id":"39982","type":"BoxZoomTool"},{"attributes":{},"id":"40399","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"39980"},{"id":"39981"},{"id":"39982"},{"id":"39983"},{"id":"39984"},{"id":"39985"}]},"id":"39987","type":"Toolbar"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40019","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40545","type":"Line"},{"attributes":{"source":{"id":"40543"}},"id":"40547","type":"CDSView"},{"attributes":{},"id":"39977","type":"BasicTicker"},{"attributes":{},"id":"40013","type":"Selection"},{"attributes":{},"id":"40014","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"40403","type":"Line"},{"attributes":{},"id":"40591","type":"Selection"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"40004"},{"id":"40021"},{"id":"40038"},{"id":"40063"},{"id":"40086"},{"id":"40111"},{"id":"40144"},{"id":"40175"},{"id":"40208"},{"id":"40281"},{"id":"40320"},{"id":"40361"},{"id":"40450"},{"id":"40497"},{"id":"40546"}]},"id":"40017","type":"LegendItem"},{"attributes":{},"id":"40592","type":"UnionRenderers"},{"attributes":{},"id":"39966","type":"DataRange1d"},{"attributes":{"label":{"value":"BERT-large teacher"},"renderers":[{"id":"40404"}]},"id":"40446","type":"LegendItem"},{"attributes":{},"id":"40443","type":"Selection"},{"attributes":{},"id":"40444","type":"UnionRenderers"}],"root_ids":["39961"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"506585c3-9e2e-43a4-87af-01cbbff6f389","root_ids":["39961"],"roots":{"39961":"e30d8d51-7c92-40d2-ade8-8e166ffa77e9"}}];
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