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
    
      
      
    
      var element = document.getElementById("fc63dae6-f8a9-4d77-883f-a976025464d8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fc63dae6-f8a9-4d77-883f-a976025464d8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f894f4e1-1a6a-49ef-b055-3118022472f7":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9438","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9607","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9945","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9896","type":"Line"},{"attributes":{"source":{"id":"9436"}},"id":"9440","type":"CDSView"},{"attributes":{"data_source":{"id":"9606"},"glyph":{"id":"9607"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9608"},"selection_glyph":null,"view":{"id":"9610"}},"id":"9609","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9462","type":"Line"},{"attributes":{"below":[{"id":"9372"}],"center":[{"id":"9375"},{"id":"9379"},{"id":"9396"},{"id":"9417"},{"id":"9455"},{"id":"9536"}],"left":[{"id":"9376"}],"plot_width":800,"renderers":[{"id":"9400"},{"id":"9405"},{"id":"9422"},{"id":"9439"},{"id":"9459"},{"id":"9464"},{"id":"9487"},{"id":"9512"},{"id":"9540"},{"id":"9545"},{"id":"9576"},{"id":"9609"},{"id":"9644"},{"id":"9682"},{"id":"9721"},{"id":"9762"},{"id":"9805"},{"id":"9851"},{"id":"9898"},{"id":"9947"},{"id":"9998"},{"id":"10052"},{"id":"10107"},{"id":"10164"}],"title":{"id":"9362"},"toolbar":{"id":"9387"},"x_range":{"id":"9394"},"x_scale":{"id":"9368"},"y_range":{"id":"9395"},"y_scale":{"id":"9370"}},"id":"9361","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"9482"},"selection_policy":{"id":"9483"}},"id":"9461","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9397"}},"id":"9401","type":"CDSView"},{"attributes":{},"id":"9373","type":"BasicTicker"},{"attributes":{},"id":"9604","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9510","type":"Line"},{"attributes":{},"id":"9605","type":"UnionRenderers"},{"attributes":{},"id":"9893","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9543","type":"Line"},{"attributes":{},"id":"9453","type":"Selection"},{"attributes":{},"id":"9894","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"9402"},"glyph":{"id":"9403"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9404"},"selection_glyph":null,"view":{"id":"9406"}},"id":"9405","type":"GlyphRenderer"},{"attributes":{},"id":"9454","type":"UnionRenderers"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":84.3},"id":"9536","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9511","type":"Line"},{"attributes":{"source":{"id":"9509"}},"id":"9513","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"9639"},"selection_policy":{"id":"9640"}},"id":"9606","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9458","type":"Scatter"},{"attributes":{"source":{"id":"9641"}},"id":"9645","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"9942"},"selection_policy":{"id":"9943"}},"id":"9895","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"9480"},"selection_policy":{"id":"9481"}},"id":"9456","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9995"}},"id":"9999","type":"CDSView"},{"attributes":{},"id":"9534","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9538","type":"Scatter"},{"attributes":{},"id":"9535","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"9461"},"glyph":{"id":"9462"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9463"},"selection_glyph":null,"view":{"id":"9465"}},"id":"9464","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9608","type":"Line"},{"attributes":{"source":{"id":"9456"}},"id":"9460","type":"CDSView"},{"attributes":{"source":{"id":"9606"}},"id":"9610","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9897","type":"Line"},{"attributes":{"data_source":{"id":"9456"},"glyph":{"id":"9457"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9458"},"selection_glyph":null,"view":{"id":"9460"}},"id":"9459","type":"GlyphRenderer"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9642","type":"Line"},{"attributes":{"source":{"id":"9895"}},"id":"9899","type":"CDSView"},{"attributes":{"data_source":{"id":"9944"},"glyph":{"id":"9945"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9946"},"selection_glyph":null,"view":{"id":"9948"}},"id":"9947","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[84.3]},"selected":{"id":"9569"},"selection_policy":{"id":"9570"}},"id":"9537","type":"ColumnDataSource"},{"attributes":{"end":86,"start":79},"id":"9395","type":"Range1d"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"9413"},"selection_policy":{"id":"9414"}},"id":"9397","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9485","type":"Line"},{"attributes":{"data_source":{"id":"9484"},"glyph":{"id":"9485"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9486"},"selection_glyph":null,"view":{"id":"9488"}},"id":"9487","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"9571"},"selection_policy":{"id":"9572"}},"id":"9542","type":"ColumnDataSource"},{"attributes":{},"id":"9639","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9463","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9539","type":"Scatter"},{"attributes":{},"id":"9640","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"9418"},{"id":"9678"},{"id":"9847"},{"id":"10048"}],"location":"bottom_right"},"id":"9417","type":"Legend"},{"attributes":{"data_source":{"id":"9542"},"glyph":{"id":"9543"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9544"},"selection_glyph":null,"view":{"id":"9546"}},"id":"9545","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9461"}},"id":"9465","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"9455","type":"Label"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"9415"},"selection_policy":{"id":"9416"}},"id":"9402","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9537"}},"id":"9541","type":"CDSView"},{"attributes":{"data_source":{"id":"9537"},"glyph":{"id":"9538"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9539"},"selection_glyph":null,"view":{"id":"9541"}},"id":"9540","type":"GlyphRenderer"},{"attributes":{},"id":"9943","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.34212239583333326,0.2529296875,0.18093532986111116,0.12286603009259256],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"9676"},"selection_policy":{"id":"9677"}},"id":"9641","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9457","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9403","type":"Line"},{"attributes":{"data_source":{"id":"9573"},"glyph":{"id":"9574"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9575"},"selection_glyph":null,"view":{"id":"9577"}},"id":"9576","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9575","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9404","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9680","type":"Line"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"9405"},{"id":"9422"},{"id":"9439"},{"id":"9464"},{"id":"9487"},{"id":"9512"},{"id":"9545"},{"id":"9576"},{"id":"9609"},{"id":"9682"},{"id":"9721"},{"id":"9762"},{"id":"9851"},{"id":"9898"},{"id":"9947"},{"id":"10052"},{"id":"10107"},{"id":"10164"}]},"id":"9418","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9544","type":"Line"},{"attributes":{"data_source":{"id":"9397"},"glyph":{"id":"9398"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9399"},"selection_glyph":null,"view":{"id":"9401"}},"id":"9400","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9542"}},"id":"9546","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9643","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9399","type":"Scatter"},{"attributes":{"source":{"id":"9573"}},"id":"9577","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"9993"},"selection_policy":{"id":"9994"}},"id":"9944","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9679"},"glyph":{"id":"9680"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9681"},"selection_glyph":null,"view":{"id":"9683"}},"id":"9682","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9997","type":"Line"},{"attributes":{},"id":"9480","type":"Selection"},{"attributes":{"axis":{"id":"9372"},"ticker":null},"id":"9375","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9398","type":"Scatter"},{"attributes":{},"id":"9481","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid filled, BERT-base"},"renderers":[{"id":"9644"}]},"id":"9678","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9946","type":"Line"},{"attributes":{"source":{"id":"9944"}},"id":"9948","type":"CDSView"},{"attributes":{"end":0.75},"id":"9394","type":"Range1d"},{"attributes":{},"id":"9377","type":"BasicTicker"},{"attributes":{},"id":"9676","type":"Selection"},{"attributes":{},"id":"9482","type":"Selection"},{"attributes":{},"id":"9677","type":"UnionRenderers"},{"attributes":{},"id":"9483","type":"UnionRenderers"},{"attributes":{"axis":{"id":"9376"},"dimension":1,"ticker":null},"id":"9379","type":"Grid"},{"attributes":{},"id":"9569","type":"Selection"},{"attributes":{},"id":"9570","type":"UnionRenderers"},{"attributes":{},"id":"9993","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9850","type":"Line"},{"attributes":{},"id":"9994","type":"UnionRenderers"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"9408"},"ticker":{"id":"9373"}},"id":"9372","type":"LinearAxis"},{"attributes":{},"id":"9370","type":"LinearScale"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"9845"},"selection_policy":{"id":"9846"}},"id":"9802","type":"ColumnDataSource"},{"attributes":{},"id":"9571","type":"Selection"},{"attributes":{},"id":"9408","type":"BasicTickFormatter"},{"attributes":{},"id":"9572","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"9716"},"selection_policy":{"id":"9717"}},"id":"9679","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9802"},"glyph":{"id":"9803"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9804"},"selection_glyph":null,"view":{"id":"9806"}},"id":"9805","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9402"}},"id":"9406","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"9757"},"selection_policy":{"id":"9758"}},"id":"9718","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Original Soft Movement"},"renderers":[{"id":"9998"}]},"id":"10048","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"9507"},"selection_policy":{"id":"9508"}},"id":"9484","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"9534"},"selection_policy":{"id":"9535"}},"id":"9509","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9681","type":"Line"},{"attributes":{"source":{"id":"9679"}},"id":"9683","type":"CDSView"},{"attributes":{"data_source":{"id":"9509"},"glyph":{"id":"9510"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9511"},"selection_glyph":null,"view":{"id":"9513"}},"id":"9512","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"9718"},"glyph":{"id":"9719"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9720"},"selection_glyph":null,"view":{"id":"9722"}},"id":"9721","type":"GlyphRenderer"},{"attributes":{},"id":"9368","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9486","type":"Line"},{"attributes":{},"id":"10046","type":"Selection"},{"attributes":{"source":{"id":"9484"}},"id":"9488","type":"CDSView"},{"attributes":{},"id":"10047","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"9604"},"selection_policy":{"id":"9605"}},"id":"9573","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9574","type":"Line"},{"attributes":{},"id":"9507","type":"Selection"},{"attributes":{},"id":"9716","type":"Selection"},{"attributes":{"axis_label":"Matched","formatter":{"id":"9410"},"ticker":{"id":"9377"}},"id":"9376","type":"LinearAxis"},{"attributes":{},"id":"9508","type":"UnionRenderers"},{"attributes":{},"id":"9717","type":"UnionRenderers"},{"attributes":{},"id":"9434","type":"Selection"},{"attributes":{},"id":"9385","type":"HelpTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10050","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"10102"},"selection_policy":{"id":"10103"}},"id":"10049","type":"ColumnDataSource"},{"attributes":{},"id":"9435","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"10049"},"glyph":{"id":"10050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10051"},"selection_glyph":null,"view":{"id":"10053"}},"id":"10052","type":"GlyphRenderer"},{"attributes":{},"id":"9410","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10105","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9760","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10162","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9719","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10051","type":"Line"},{"attributes":{"source":{"id":"10049"}},"id":"10053","type":"CDSView"},{"attributes":{"data_source":{"id":"10104"},"glyph":{"id":"10105"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10106"},"selection_glyph":null,"view":{"id":"10108"}},"id":"10107","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9720","type":"Line"},{"attributes":{"source":{"id":"9718"}},"id":"9722","type":"CDSView"},{"attributes":{"data_source":{"id":"9759"},"glyph":{"id":"9760"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9761"},"selection_glyph":null,"view":{"id":"9763"}},"id":"9762","type":"GlyphRenderer"},{"attributes":{},"id":"9383","type":"SaveTool"},{"attributes":{},"id":"10102","type":"Selection"},{"attributes":{"overlay":{"id":"9386"}},"id":"9382","type":"BoxZoomTool"},{"attributes":{},"id":"9757","type":"Selection"},{"attributes":{},"id":"9758","type":"UnionRenderers"},{"attributes":{},"id":"10103","type":"UnionRenderers"},{"attributes":{},"id":"9384","type":"ResetTool"},{"attributes":{},"id":"9380","type":"PanTool"},{"attributes":{},"id":"9942","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"9800"},"selection_policy":{"id":"9801"}},"id":"9759","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9802"}},"id":"9806","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"10159"},"selection_policy":{"id":"10160"}},"id":"10104","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9761","type":"Line"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"9362","type":"Title"},{"attributes":{},"id":"9381","type":"WheelZoomTool"},{"attributes":{"source":{"id":"9759"}},"id":"9763","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9380"},{"id":"9381"},{"id":"9382"},{"id":"9383"},{"id":"9384"},{"id":"9385"}]},"id":"9387","type":"Toolbar"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9803","type":"Line"},{"attributes":{"source":{"id":"10104"}},"id":"10108","type":"CDSView"},{"attributes":{"data_source":{"id":"10161"},"glyph":{"id":"10162"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10163"},"selection_glyph":null,"view":{"id":"10165"}},"id":"10164","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10106","type":"Line"},{"attributes":{},"id":"9413","type":"Selection"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"9396","type":"Label"},{"attributes":{},"id":"9414","type":"UnionRenderers"},{"attributes":{},"id":"9800","type":"Selection"},{"attributes":{},"id":"9415","type":"Selection"},{"attributes":{},"id":"9801","type":"UnionRenderers"},{"attributes":{},"id":"10159","type":"Selection"},{"attributes":{},"id":"9416","type":"UnionRenderers"},{"attributes":{},"id":"10160","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"9453"},"selection_policy":{"id":"9454"}},"id":"9436","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9849","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9804","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"10218"},"selection_policy":{"id":"10219"}},"id":"10161","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9848"},"glyph":{"id":"9849"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9850"},"selection_glyph":null,"view":{"id":"9852"}},"id":"9851","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"9805"}]},"id":"9847","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10163","type":"Line"},{"attributes":{"source":{"id":"10161"}},"id":"10165","type":"CDSView"},{"attributes":{"data_source":{"id":"9419"},"glyph":{"id":"9420"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9421"},"selection_glyph":null,"view":{"id":"9423"}},"id":"9422","type":"GlyphRenderer"},{"attributes":{},"id":"9845","type":"Selection"},{"attributes":{},"id":"9846","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9420","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9437","type":"Line"},{"attributes":{},"id":"10218","type":"Selection"},{"attributes":{"data_source":{"id":"9641"},"glyph":{"id":"9642"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9643"},"selection_glyph":null,"view":{"id":"9645"}},"id":"9644","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"9386","type":"BoxAnnotation"},{"attributes":{},"id":"10219","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"9434"},"selection_policy":{"id":"9435"}},"id":"9419","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9421","type":"Line"},{"attributes":{"source":{"id":"9419"}},"id":"9423","type":"CDSView"},{"attributes":{"data_source":{"id":"9436"},"glyph":{"id":"9437"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9438"},"selection_glyph":null,"view":{"id":"9440"}},"id":"9439","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"9893"},"selection_policy":{"id":"9894"}},"id":"9848","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.750694155218002,0.34656273890574396,0.247365299956507,0.186029553957332,0.131177042042143,0.0947351805073981,0.0602396365698101,0.0402606146574505,0.0284787168842778,0.0214990126796872,0.01685626988373],"y":[84.9210392256749,83.7289862455425,83.331635252165,82.41467142129389,81.7320427916454,81.13092205807429,80.6826286296485,79.9898115129903,79.4294447274579,79.1441670911869,78.7671930718288]},"selected":{"id":"10046"},"selection_policy":{"id":"10047"}},"id":"9995","type":"ColumnDataSource"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9996","type":"Line"},{"attributes":{"data_source":{"id":"9895"},"glyph":{"id":"9896"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9897"},"selection_glyph":null,"view":{"id":"9899"}},"id":"9898","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9848"}},"id":"9852","type":"CDSView"},{"attributes":{"data_source":{"id":"9995"},"glyph":{"id":"9996"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9997"},"selection_glyph":null,"view":{"id":"9999"}},"id":"9998","type":"GlyphRenderer"}],"root_ids":["9361"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"f894f4e1-1a6a-49ef-b055-3118022472f7","root_ids":["9361"],"roots":{"9361":"fc63dae6-f8a9-4d77-883f-a976025464d8"}}];
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