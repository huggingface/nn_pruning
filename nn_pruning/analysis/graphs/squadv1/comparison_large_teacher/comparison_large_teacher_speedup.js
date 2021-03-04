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
    
      
      
    
      var element = document.getElementById("aa08e0d2-9194-4ef6-9063-35c9e327033b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aa08e0d2-9194-4ef6-9063-35c9e327033b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c62661df-45d2-430b-b789-377d0df09344":{"roots":{"references":[{"attributes":{},"id":"23453","type":"Selection"},{"attributes":{"axis_label":"F1","formatter":{"id":"22969"},"ticker":{"id":"22939"}},"id":"22938","type":"LinearAxis"},{"attributes":{},"id":"23454","type":"UnionRenderers"},{"attributes":{},"id":"22939","type":"BasicTicker"},{"attributes":{},"id":"22928","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23411","type":"Line"},{"attributes":{},"id":"22932","type":"LinearScale"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"22924","type":"Title"},{"attributes":{},"id":"22930","type":"LinearScale"},{"attributes":{"source":{"id":"23409"}},"id":"23413","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23506","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23457","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23458","type":"Line"},{"attributes":{"source":{"id":"23456"}},"id":"23460","type":"CDSView"},{"attributes":{"data_source":{"id":"23505"},"glyph":{"id":"23506"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23507"},"selection_glyph":null,"view":{"id":"23509"}},"id":"23508","type":"GlyphRenderer"},{"attributes":{},"id":"23068","type":"UnionRenderers"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"22971"},"ticker":{"id":"22935"}},"id":"22934","type":"LinearAxis"},{"attributes":{},"id":"23502","type":"Selection"},{"attributes":{},"id":"23503","type":"UnionRenderers"},{"attributes":{"axis":{"id":"22934"},"ticker":null},"id":"22937","type":"Grid"},{"attributes":{"below":[{"id":"22934"}],"center":[{"id":"22937"},{"id":"22941"},{"id":"22957"},{"id":"22978"},{"id":"23016"},{"id":"23097"}],"left":[{"id":"22938"}],"plot_width":800,"renderers":[{"id":"22961"},{"id":"22966"},{"id":"22983"},{"id":"23000"},{"id":"23020"},{"id":"23025"},{"id":"23048"},{"id":"23073"},{"id":"23101"},{"id":"23106"},{"id":"23137"},{"id":"23170"},{"id":"23205"},{"id":"23243"},{"id":"23282"},{"id":"23323"},{"id":"23366"},{"id":"23412"},{"id":"23459"},{"id":"23508"}],"title":{"id":"22924"},"toolbar":{"id":"22949"},"x_range":{"id":"22956"},"x_scale":{"id":"22930"},"y_range":{"id":"22928"},"y_scale":{"id":"22932"}},"id":"22923","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22935","type":"BasicTicker"},{"attributes":{"axis":{"id":"22938"},"dimension":1,"ticker":null},"id":"22941","type":"Grid"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"23553"},"selection_policy":{"id":"23554"}},"id":"23505","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23507","type":"Line"},{"attributes":{"source":{"id":"23505"}},"id":"23509","type":"CDSView"},{"attributes":{},"id":"23553","type":"Selection"},{"attributes":{},"id":"23554","type":"UnionRenderers"},{"attributes":{},"id":"22973","type":"Selection"},{"attributes":{"source":{"id":"23134"}},"id":"23138","type":"CDSView"},{"attributes":{"data_source":{"id":"23167"},"glyph":{"id":"23168"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23169"},"selection_glyph":null,"view":{"id":"23171"}},"id":"23170","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"23019","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23023","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23321","type":"Line"},{"attributes":{},"id":"23164","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23104","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23280","type":"Line"},{"attributes":{},"id":"23013","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23071","type":"Line"},{"attributes":{},"id":"23165","type":"UnionRenderers"},{"attributes":{},"id":"23014","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23281","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23072","type":"Line"},{"attributes":{"source":{"id":"23279"}},"id":"23283","type":"CDSView"},{"attributes":{"data_source":{"id":"23320"},"glyph":{"id":"23321"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23322"},"selection_glyph":null,"view":{"id":"23324"}},"id":"23323","type":"GlyphRenderer"},{"attributes":{"source":{"id":"23070"}},"id":"23074","type":"CDSView"},{"attributes":{},"id":"22943","type":"WheelZoomTool"},{"attributes":{"source":{"id":"23202"}},"id":"23206","type":"CDSView"},{"attributes":{},"id":"22971","type":"BasicTickFormatter"},{"attributes":{},"id":"23317","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23168","type":"Line"},{"attributes":{},"id":"23094","type":"Selection"},{"attributes":{"data_source":{"id":"23202"},"glyph":{"id":"23203"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23204"},"selection_glyph":null,"view":{"id":"23206"}},"id":"23205","type":"GlyphRenderer"},{"attributes":{"source":{"id":"23017"}},"id":"23021","type":"CDSView"},{"attributes":{},"id":"23130","type":"UnionRenderers"},{"attributes":{},"id":"23318","type":"UnionRenderers"},{"attributes":{},"id":"22975","type":"Selection"},{"attributes":{},"id":"23095","type":"UnionRenderers"},{"attributes":{"end":4,"start":0.75},"id":"22956","type":"Range1d"},{"attributes":{"data_source":{"id":"23022"},"glyph":{"id":"23023"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23024"},"selection_glyph":null,"view":{"id":"23026"}},"id":"23025","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23169","type":"Line"},{"attributes":{"data_source":{"id":"23017"},"glyph":{"id":"23018"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23019"},"selection_glyph":null,"view":{"id":"23021"}},"id":"23020","type":"GlyphRenderer"},{"attributes":{"source":{"id":"23167"}},"id":"23171","type":"CDSView"},{"attributes":{},"id":"22976","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"23042"},"selection_policy":{"id":"23043"}},"id":"23022","type":"ColumnDataSource"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"23203","type":"Line"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":90.3},"id":"23097","type":"Label"},{"attributes":{},"id":"23199","type":"Selection"},{"attributes":{"source":{"id":"23098"}},"id":"23102","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23046","type":"Line"},{"attributes":{"source":{"id":"23363"}},"id":"23367","type":"CDSView"},{"attributes":{"data_source":{"id":"23103"},"glyph":{"id":"23104"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23105"},"selection_glyph":null,"view":{"id":"23107"}},"id":"23106","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"23360"},"selection_policy":{"id":"23361"}},"id":"23320","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"23045"},"glyph":{"id":"23046"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23047"},"selection_glyph":null,"view":{"id":"23049"}},"id":"23048","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"23100","type":"Scatter"},{"attributes":{},"id":"22974","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23024","type":"Line"},{"attributes":{},"id":"23200","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"22948","type":"BoxAnnotation"},{"attributes":{"source":{"id":"23022"}},"id":"23026","type":"CDSView"},{"attributes":{"data_source":{"id":"23098"},"glyph":{"id":"23099"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23100"},"selection_glyph":null,"view":{"id":"23102"}},"id":"23101","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"23131"},"selection_policy":{"id":"23132"}},"id":"23103","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23322","type":"Line"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"23236"},"selection_policy":{"id":"23237"}},"id":"23202","type":"ColumnDataSource"},{"attributes":{"source":{"id":"23320"}},"id":"23324","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"23364","type":"Line"},{"attributes":{"data_source":{"id":"23134"},"glyph":{"id":"23135"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23136"},"selection_glyph":null,"view":{"id":"23138"}},"id":"23137","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23241","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"23204","type":"Line"},{"attributes":{},"id":"23360","type":"Selection"},{"attributes":{},"id":"23040","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23105","type":"Line"},{"attributes":{"source":{"id":"23103"}},"id":"23107","type":"CDSView"},{"attributes":{},"id":"23361","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"23240"},"glyph":{"id":"23241"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23242"},"selection_glyph":null,"view":{"id":"23244"}},"id":"23243","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23136","type":"Line"},{"attributes":{},"id":"23041","type":"UnionRenderers"},{"attributes":{"text":"DistilBERT","x":1.63,"y":86.9},"id":"22957","type":"Label"},{"attributes":{"label":{"value":"BERT-base teacher"},"renderers":[{"id":"23205"}]},"id":"23239","type":"LegendItem"},{"attributes":{},"id":"22945","type":"SaveTool"},{"attributes":{},"id":"23236","type":"Selection"},{"attributes":{},"id":"22969","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"22980"},"glyph":{"id":"22981"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22982"},"selection_glyph":null,"view":{"id":"22984"}},"id":"22983","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"22981","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23410","type":"Line"},{"attributes":{},"id":"22946","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"23365","type":"Line"},{"attributes":{},"id":"23042","type":"Selection"},{"attributes":{},"id":"23129","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"22998","type":"Line"},{"attributes":{},"id":"22942","type":"PanTool"},{"attributes":{},"id":"23237","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"23040"},"selection_policy":{"id":"23041"}},"id":"23017","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.78125],"y":[90.3]},"selected":{"id":"23129"},"selection_policy":{"id":"23130"}},"id":"23098","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"22948"}},"id":"22944","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22942"},{"id":"22943"},{"id":"22944"},{"id":"22945"},{"id":"22946"},{"id":"22947"}]},"id":"22949","type":"Toolbar"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"22973"},"selection_policy":{"id":"22974"}},"id":"22958","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"22994"},"selection_policy":{"id":"22995"}},"id":"22980","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"23409"},"glyph":{"id":"23410"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23411"},"selection_glyph":null,"view":{"id":"23413"}},"id":"23412","type":"GlyphRenderer"},{"attributes":{"source":{"id":"22958"}},"id":"22962","type":"CDSView"},{"attributes":{},"id":"23043","type":"UnionRenderers"},{"attributes":{},"id":"22947","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"22959","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"22982","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"22960","type":"Scatter"},{"attributes":{"source":{"id":"22980"}},"id":"22984","type":"CDSView"},{"attributes":{"data":{"x":[1.5606414607482133,1.8333442967227587,2.075387764969063,2.306354828560857,2.363378950512201,2.36451559845159,2.6186173775098402],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,88.25975710073095,88.20838283474134,87.15966661496869]},"selected":{"id":"23405"},"selection_policy":{"id":"23406"}},"id":"23363","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"23018","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"23099","type":"Scatter"},{"attributes":{"label":{"value":"BERT-large teacher"},"renderers":[{"id":"23366"}]},"id":"23408","type":"LegendItem"},{"attributes":{"data_source":{"id":"22963"},"glyph":{"id":"22964"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22965"},"selection_glyph":null,"view":{"id":"22967"}},"id":"22966","type":"GlyphRenderer"},{"attributes":{},"id":"23405","type":"Selection"},{"attributes":{"text":"TinyBERT","x":2.0,"y":87.5},"id":"23016","type":"Label"},{"attributes":{},"id":"23131","type":"Selection"},{"attributes":{"data_source":{"id":"22958"},"glyph":{"id":"22959"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22960"},"selection_glyph":null,"view":{"id":"22962"}},"id":"22961","type":"GlyphRenderer"},{"attributes":{},"id":"23406","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"23276"},"selection_policy":{"id":"23277"}},"id":"23240","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"23363"},"glyph":{"id":"23364"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23365"},"selection_glyph":null,"view":{"id":"23367"}},"id":"23366","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"22975"},"selection_policy":{"id":"22976"}},"id":"22963","type":"ColumnDataSource"},{"attributes":{},"id":"22994","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"22964","type":"Line"},{"attributes":{},"id":"23132","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"22979"},{"id":"23239"},{"id":"23408"}]},"id":"22978","type":"Legend"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"23317"},"selection_policy":{"id":"23318"}},"id":"23279","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"22966"},{"id":"22983"},{"id":"23000"},{"id":"23025"},{"id":"23048"},{"id":"23073"},{"id":"23106"},{"id":"23137"},{"id":"23170"},{"id":"23243"},{"id":"23282"},{"id":"23323"},{"id":"23412"},{"id":"23459"},{"id":"23508"}]},"id":"22979","type":"LegendItem"},{"attributes":{},"id":"22995","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"23067"},"selection_policy":{"id":"23068"}},"id":"23045","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"22965","type":"Line"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"23094"},"selection_policy":{"id":"23095"}},"id":"23070","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23242","type":"Line"},{"attributes":{"source":{"id":"22963"}},"id":"22967","type":"CDSView"},{"attributes":{"source":{"id":"23240"}},"id":"23244","type":"CDSView"},{"attributes":{"data_source":{"id":"23279"},"glyph":{"id":"23280"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23281"},"selection_glyph":null,"view":{"id":"23283"}},"id":"23282","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"23070"},"glyph":{"id":"23071"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23072"},"selection_glyph":null,"view":{"id":"23074"}},"id":"23073","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23047","type":"Line"},{"attributes":{"source":{"id":"23045"}},"id":"23049","type":"CDSView"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"23453"},"selection_policy":{"id":"23454"}},"id":"23409","type":"ColumnDataSource"},{"attributes":{},"id":"23276","type":"Selection"},{"attributes":{"data_source":{"id":"22997"},"glyph":{"id":"22998"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22999"},"selection_glyph":null,"view":{"id":"23001"}},"id":"23000","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"23013"},"selection_policy":{"id":"23014"}},"id":"22997","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"23164"},"selection_policy":{"id":"23165"}},"id":"23134","type":"ColumnDataSource"},{"attributes":{},"id":"23067","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"23135","type":"Line"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"23502"},"selection_policy":{"id":"23503"}},"id":"23456","type":"ColumnDataSource"},{"attributes":{},"id":"23277","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"23456"},"glyph":{"id":"23457"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23458"},"selection_glyph":null,"view":{"id":"23460"}},"id":"23459","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"23199"},"selection_policy":{"id":"23200"}},"id":"23167","type":"ColumnDataSource"},{"attributes":{"source":{"id":"22997"}},"id":"23001","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"22999","type":"Line"}],"root_ids":["22923"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"c62661df-45d2-430b-b789-377d0df09344","root_ids":["22923"],"roots":{"22923":"aa08e0d2-9194-4ef6-9063-35c9e327033b"}}];
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