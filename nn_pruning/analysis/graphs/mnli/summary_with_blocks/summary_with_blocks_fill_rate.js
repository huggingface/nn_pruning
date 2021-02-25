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
    
      
      
    
      var element = document.getElementById("15984320-f986-4707-bab2-45bc7014da5e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '15984320-f986-4707-bab2-45bc7014da5e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"bcef967b-8d38-477c-8320-d4e904325a6a":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8446","type":"Scatter"},{"attributes":{},"id":"8396","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8450","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8748","type":"Line"},{"attributes":{},"id":"8591","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8707","type":"Line"},{"attributes":{},"id":"8440","type":"UnionRenderers"},{"attributes":{},"id":"8592","type":"Selection"},{"attributes":{},"id":"8441","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8708","type":"Line"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"8350","type":"Title"},{"attributes":{"source":{"id":"8706"}},"id":"8710","type":"CDSView"},{"attributes":{"data_source":{"id":"8747"},"glyph":{"id":"8748"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8749"},"selection_glyph":null,"view":{"id":"8751"}},"id":"8750","type":"GlyphRenderer"},{"attributes":{"source":{"id":"8629"}},"id":"8633","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8595","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8526","type":"Scatter"},{"attributes":{},"id":"8744","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"8444"},"glyph":{"id":"8445"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8446"},"selection_glyph":null,"view":{"id":"8448"}},"id":"8447","type":"GlyphRenderer"},{"attributes":{},"id":"8358","type":"LinearScale"},{"attributes":{},"id":"8398","type":"BasicTickFormatter"},{"attributes":{},"id":"8745","type":"Selection"},{"attributes":{"below":[{"id":"8360"}],"center":[{"id":"8363"},{"id":"8367"},{"id":"8384"},{"id":"8405"},{"id":"8443"},{"id":"8524"}],"left":[{"id":"8364"}],"plot_width":800,"renderers":[{"id":"8388"},{"id":"8393"},{"id":"8410"},{"id":"8427"},{"id":"8447"},{"id":"8452"},{"id":"8475"},{"id":"8500"},{"id":"8528"},{"id":"8533"},{"id":"8564"},{"id":"8597"},{"id":"8632"},{"id":"8670"},{"id":"8709"},{"id":"8750"},{"id":"8793"},{"id":"8839"},{"id":"8886"},{"id":"8935"},{"id":"8986"},{"id":"9040"},{"id":"9095"},{"id":"9152"}],"title":{"id":"8350"},"toolbar":{"id":"8375"},"x_range":{"id":"8382"},"x_scale":{"id":"8356"},"y_range":{"id":"8383"},"y_scale":{"id":"8358"}},"id":"8349","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"8449"},"glyph":{"id":"8450"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8451"},"selection_glyph":null,"view":{"id":"8453"}},"id":"8452","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8596","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"8470"},"selection_policy":{"id":"8469"}},"id":"8449","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8594"}},"id":"8598","type":"CDSView"},{"attributes":{"source":{"id":"8444"}},"id":"8448","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"8630","type":"Line"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[84.3]},"selected":{"id":"8557"},"selection_policy":{"id":"8556"}},"id":"8525","type":"ColumnDataSource"},{"attributes":{},"id":"8400","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8473","type":"Line"},{"attributes":{},"id":"8401","type":"Selection"},{"attributes":{},"id":"8626","type":"UnionRenderers"},{"attributes":{"source":{"id":"8790"}},"id":"8794","type":"CDSView"},{"attributes":{"data_source":{"id":"8472"},"glyph":{"id":"8473"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8474"},"selection_glyph":null,"view":{"id":"8476"}},"id":"8475","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"8788"},"selection_policy":{"id":"8787"}},"id":"8747","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8451","type":"Line"},{"attributes":{},"id":"8627","type":"Selection"},{"attributes":{"source":{"id":"8449"}},"id":"8453","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8749","type":"Line"},{"attributes":{"source":{"id":"8747"}},"id":"8751","type":"CDSView"},{"attributes":{},"id":"8402","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"8627"},"selection_policy":{"id":"8626"}},"id":"8594","type":"ColumnDataSource"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"8791","type":"Line"},{"attributes":{"axis_label":"Matched","formatter":{"id":"8396"},"ticker":{"id":"8365"}},"id":"8364","type":"LinearAxis"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8668","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"8631","type":"Line"},{"attributes":{},"id":"8403","type":"Selection"},{"attributes":{},"id":"8467","type":"UnionRenderers"},{"attributes":{},"id":"8787","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"8667"},"glyph":{"id":"8668"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8669"},"selection_glyph":null,"view":{"id":"8671"}},"id":"8670","type":"GlyphRenderer"},{"attributes":{},"id":"8468","type":"Selection"},{"attributes":{},"id":"8788","type":"Selection"},{"attributes":{"label":{"value":"Hybrid filled, BERT-base"},"renderers":[{"id":"8632"}]},"id":"8666","type":"LegendItem"},{"attributes":{"data_source":{"id":"8594"},"glyph":{"id":"8595"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8596"},"selection_glyph":null,"view":{"id":"8598"}},"id":"8597","type":"GlyphRenderer"},{"attributes":{},"id":"8663","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8837","type":"Line"},{"attributes":{},"id":"8664","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"8792","type":"Line"},{"attributes":{},"id":"8469","type":"UnionRenderers"},{"attributes":{},"id":"8470","type":"Selection"},{"attributes":{},"id":"8371","type":"SaveTool"},{"attributes":{"data_source":{"id":"8836"},"glyph":{"id":"8837"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8838"},"selection_glyph":null,"view":{"id":"8840"}},"id":"8839","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"8833"},"selection_policy":{"id":"8832"}},"id":"8790","type":"ColumnDataSource"},{"attributes":{},"id":"8372","type":"ResetTool"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"8793"}]},"id":"8835","type":"LegendItem"},{"attributes":{},"id":"8832","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"8407"},"glyph":{"id":"8408"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8409"},"selection_glyph":null,"view":{"id":"8411"}},"id":"8410","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"8704"},"selection_policy":{"id":"8703"}},"id":"8667","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8790"},"glyph":{"id":"8791"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8792"},"selection_glyph":null,"view":{"id":"8794"}},"id":"8793","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8408","type":"Line"},{"attributes":{},"id":"8833","type":"Selection"},{"attributes":{},"id":"8369","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8425","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"8745"},"selection_policy":{"id":"8744"}},"id":"8706","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"8374"}},"id":"8370","type":"BoxZoomTool"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":84.3},"id":"8524","type":"Label"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"8422"},"selection_policy":{"id":"8421"}},"id":"8407","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"8495"},"selection_policy":{"id":"8494"}},"id":"8472","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"8522"},"selection_policy":{"id":"8521"}},"id":"8497","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8669","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8409","type":"Line"},{"attributes":{"source":{"id":"8667"}},"id":"8671","type":"CDSView"},{"attributes":{"data_source":{"id":"8706"},"glyph":{"id":"8707"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8708"},"selection_glyph":null,"view":{"id":"8710"}},"id":"8709","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8497"},"glyph":{"id":"8498"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8499"},"selection_glyph":null,"view":{"id":"8501"}},"id":"8500","type":"GlyphRenderer"},{"attributes":{"source":{"id":"8407"}},"id":"8411","type":"CDSView"},{"attributes":{"data_source":{"id":"8424"},"glyph":{"id":"8425"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8426"},"selection_glyph":null,"view":{"id":"8428"}},"id":"8427","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8474","type":"Line"},{"attributes":{"source":{"id":"8472"}},"id":"8476","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"8881"},"selection_policy":{"id":"8880"}},"id":"8836","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.750694155218002,0.34656273890574396,0.247365299956507,0.186029553957332,0.131177042042143,0.0947351805073981,0.0602396365698101,0.0402606146574505,0.0284787168842778,0.0214990126796872,0.01685626988373],"y":[84.9210392256749,83.7289862455425,83.331635252165,82.41467142129389,81.7320427916454,81.13092205807429,80.6826286296485,79.9898115129903,79.4294447274579,79.1441670911869,78.7671930718288]},"selected":{"id":"9034"},"selection_policy":{"id":"9033"}},"id":"8983","type":"ColumnDataSource"},{"attributes":{},"id":"8703","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"8984","type":"Line"},{"attributes":{},"id":"8421","type":"UnionRenderers"},{"attributes":{},"id":"8494","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"8441"},"selection_policy":{"id":"8440"}},"id":"8424","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8838","type":"Line"},{"attributes":{},"id":"8704","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"8930"},"selection_policy":{"id":"8929"}},"id":"8883","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8424"}},"id":"8428","type":"CDSView"},{"attributes":{"source":{"id":"8836"}},"id":"8840","type":"CDSView"},{"attributes":{},"id":"8495","type":"Selection"},{"attributes":{"data_source":{"id":"8883"},"glyph":{"id":"8884"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8885"},"selection_glyph":null,"view":{"id":"8887"}},"id":"8886","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8426","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"9090"},"selection_policy":{"id":"9089"}},"id":"9037","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9038","type":"Line"},{"attributes":{"data_source":{"id":"9037"},"glyph":{"id":"9038"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9039"},"selection_glyph":null,"view":{"id":"9041"}},"id":"9040","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"8468"},"selection_policy":{"id":"8467"}},"id":"8444","type":"ColumnDataSource"},{"attributes":{"end":0.75},"id":"8382","type":"Range1d"},{"attributes":{},"id":"8880","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8531","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9093","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8498","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9150","type":"Line"},{"attributes":{"data_source":{"id":"8983"},"glyph":{"id":"8984"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8985"},"selection_glyph":null,"view":{"id":"8987"}},"id":"8986","type":"GlyphRenderer"},{"attributes":{},"id":"8881","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9039","type":"Line"},{"attributes":{"source":{"id":"9037"}},"id":"9041","type":"CDSView"},{"attributes":{"data_source":{"id":"9092"},"glyph":{"id":"9093"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9094"},"selection_glyph":null,"view":{"id":"9096"}},"id":"9095","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8499","type":"Line"},{"attributes":{"source":{"id":"8497"}},"id":"8501","type":"CDSView"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"8398"},"ticker":{"id":"8361"}},"id":"8360","type":"LinearAxis"},{"attributes":{},"id":"9089","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8933","type":"Line"},{"attributes":{"source":{"id":"8983"}},"id":"8987","type":"CDSView"},{"attributes":{},"id":"8521","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8884","type":"Line"},{"attributes":{},"id":"9090","type":"Selection"},{"attributes":{},"id":"8522","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8885","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8392","type":"Line"},{"attributes":{"source":{"id":"8883"}},"id":"8887","type":"CDSView"},{"attributes":{"data_source":{"id":"8932"},"glyph":{"id":"8933"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8934"},"selection_glyph":null,"view":{"id":"8936"}},"id":"8935","type":"GlyphRenderer"},{"attributes":{"end":86,"start":79},"id":"8383","type":"Range1d"},{"attributes":{"data_source":{"id":"8525"},"glyph":{"id":"8526"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8527"},"selection_glyph":null,"view":{"id":"8529"}},"id":"8528","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8530"},"glyph":{"id":"8531"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8532"},"selection_glyph":null,"view":{"id":"8534"}},"id":"8533","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8527","type":"Scatter"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"9147"},"selection_policy":{"id":"9146"}},"id":"9092","type":"ColumnDataSource"},{"attributes":{},"id":"8929","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"8559"},"selection_policy":{"id":"8558"}},"id":"8530","type":"ColumnDataSource"},{"attributes":{},"id":"8930","type":"Selection"},{"attributes":{"source":{"id":"8525"}},"id":"8529","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"8374","type":"BoxAnnotation"},{"attributes":{"source":{"id":"8390"}},"id":"8394","type":"CDSView"},{"attributes":{"data":{"x":[0.34212239583333326,0.2529296875,0.18093532986111116,0.12286603009259256],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"8664"},"selection_policy":{"id":"8663"}},"id":"8629","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9094","type":"Line"},{"attributes":{"source":{"id":"9092"}},"id":"9096","type":"CDSView"},{"attributes":{"data_source":{"id":"8561"},"glyph":{"id":"8562"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8563"},"selection_glyph":null,"view":{"id":"8565"}},"id":"8564","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"9149"},"glyph":{"id":"9150"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9151"},"selection_glyph":null,"view":{"id":"9153"}},"id":"9152","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"8393"},{"id":"8410"},{"id":"8427"},{"id":"8452"},{"id":"8475"},{"id":"8500"},{"id":"8533"},{"id":"8564"},{"id":"8597"},{"id":"8670"},{"id":"8709"},{"id":"8750"},{"id":"8839"},{"id":"8886"},{"id":"8935"},{"id":"9040"},{"id":"9095"},{"id":"9152"}]},"id":"8406","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8532","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"8985","type":"Line"},{"attributes":{},"id":"9146","type":"UnionRenderers"},{"attributes":{"source":{"id":"8530"}},"id":"8534","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"8981"},"selection_policy":{"id":"8980"}},"id":"8932","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8563","type":"Line"},{"attributes":{},"id":"8368","type":"PanTool"},{"attributes":{},"id":"9147","type":"Selection"},{"attributes":{},"id":"8422","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8934","type":"Line"},{"attributes":{"source":{"id":"8932"}},"id":"8936","type":"CDSView"},{"attributes":{},"id":"8365","type":"BasicTicker"},{"attributes":{},"id":"8556","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"8629"},"glyph":{"id":"8630"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8631"},"selection_glyph":null,"view":{"id":"8633"}},"id":"8632","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"9206"},"selection_policy":{"id":"9205"}},"id":"9149","type":"ColumnDataSource"},{"attributes":{},"id":"8980","type":"UnionRenderers"},{"attributes":{},"id":"8557","type":"Selection"},{"attributes":{},"id":"8356","type":"LinearScale"},{"attributes":{},"id":"8981","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9151","type":"Line"},{"attributes":{"data_source":{"id":"8390"},"glyph":{"id":"8391"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8392"},"selection_glyph":null,"view":{"id":"8394"}},"id":"8393","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9149"}},"id":"9153","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8391","type":"Line"},{"attributes":{},"id":"8558","type":"UnionRenderers"},{"attributes":{},"id":"9205","type":"UnionRenderers"},{"attributes":{},"id":"8559","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"8406"},{"id":"8666"},{"id":"8835"},{"id":"9036"}],"location":"bottom_right"},"id":"8405","type":"Legend"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8368"},{"id":"8369"},{"id":"8370"},{"id":"8371"},{"id":"8372"},{"id":"8373"}]},"id":"8375","type":"Toolbar"},{"attributes":{},"id":"9206","type":"Selection"},{"attributes":{"label":{"value":"Original Soft Movement"},"renderers":[{"id":"8986"}]},"id":"9036","type":"LegendItem"},{"attributes":{"data_source":{"id":"8385"},"glyph":{"id":"8386"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8387"},"selection_glyph":null,"view":{"id":"8389"}},"id":"8388","type":"GlyphRenderer"},{"attributes":{},"id":"9033","type":"UnionRenderers"},{"attributes":{},"id":"8361","type":"BasicTicker"},{"attributes":{},"id":"8373","type":"HelpTool"},{"attributes":{"axis":{"id":"8364"},"dimension":1,"ticker":null},"id":"8367","type":"Grid"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"8401"},"selection_policy":{"id":"8400"}},"id":"8385","type":"ColumnDataSource"},{"attributes":{},"id":"9034","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8386","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8387","type":"Scatter"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"8384","type":"Label"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"8443","type":"Label"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"8592"},"selection_policy":{"id":"8591"}},"id":"8561","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8445","type":"Scatter"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"8562","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"8403"},"selection_policy":{"id":"8402"}},"id":"8390","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"8360"},"ticker":null},"id":"8363","type":"Grid"},{"attributes":{"source":{"id":"8561"}},"id":"8565","type":"CDSView"},{"attributes":{"source":{"id":"8385"}},"id":"8389","type":"CDSView"}],"root_ids":["8349"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"bcef967b-8d38-477c-8320-d4e904325a6a","root_ids":["8349"],"roots":{"8349":"15984320-f986-4707-bab2-45bc7014da5e"}}];
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