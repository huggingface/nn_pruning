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
    
      
      
    
      var element = document.getElementById("2af53b44-bb22-4587-8aa2-1c647ebf0519");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2af53b44-bb22-4587-8aa2-1c647ebf0519' but no matching script tag was found.")
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
                    
                  var docs_json = '{"17c30e5c-5692-4768-a7dd-4d6b34891f73":{"roots":{"references":[{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9692","type":"Line"},{"attributes":{},"id":"9348","type":"Selection"},{"attributes":{"source":{"id":"9734"}},"id":"9738","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"9319","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9693","type":"Line"},{"attributes":{"below":[{"id":"9305"}],"center":[{"id":"9308"},{"id":"9312"},{"id":"9328"},{"id":"9349"},{"id":"9387"},{"id":"9468"}],"left":[{"id":"9309"}],"plot_width":800,"renderers":[{"id":"9332"},{"id":"9337"},{"id":"9354"},{"id":"9371"},{"id":"9391"},{"id":"9396"},{"id":"9419"},{"id":"9444"},{"id":"9472"},{"id":"9477"},{"id":"9508"},{"id":"9541"},{"id":"9576"},{"id":"9614"},{"id":"9653"},{"id":"9694"},{"id":"9737"},{"id":"9783"},{"id":"9830"},{"id":"9879"}],"title":{"id":"9295"},"toolbar":{"id":"9320"},"x_range":{"id":"9327"},"x_scale":{"id":"9301"},"y_range":{"id":"9299"},"y_scale":{"id":"9303"}},"id":"9294","subtype":"Figure","type":"Plot"},{"attributes":{"end":4,"start":0.75},"id":"9327","type":"Range1d"},{"attributes":{"source":{"id":"9691"}},"id":"9695","type":"CDSView"},{"attributes":{"axis":{"id":"9309"},"dimension":1,"ticker":null},"id":"9312","type":"Grid"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9735","type":"Line"},{"attributes":{},"id":"9313","type":"PanTool"},{"attributes":{},"id":"9732","type":"UnionRenderers"},{"attributes":{},"id":"9733","type":"Selection"},{"attributes":{"text":"DistilBERT","x":1.63,"y":86.9},"id":"9328","type":"Label"},{"attributes":{},"id":"9301","type":"LinearScale"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9781","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9389","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9736","type":"Line"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"9346"},"selection_policy":{"id":"9345"}},"id":"9329","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9780"},"glyph":{"id":"9781"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9782"},"selection_glyph":null,"view":{"id":"9784"}},"id":"9783","type":"GlyphRenderer"},{"attributes":{"label":{"value":"BERT-large teacher"},"renderers":[{"id":"9737"}]},"id":"9779","type":"LegendItem"},{"attributes":{},"id":"9314","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9330","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9331","type":"Scatter"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":90.3},"id":"9468","type":"Label"},{"attributes":{"data_source":{"id":"9334"},"glyph":{"id":"9335"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9336"},"selection_glyph":null,"view":{"id":"9338"}},"id":"9337","type":"GlyphRenderer"},{"attributes":{"text":"TinyBERT","x":2.0,"y":87.5},"id":"9387","type":"Label"},{"attributes":{},"id":"9777","type":"UnionRenderers"},{"attributes":{"source":{"id":"9329"}},"id":"9333","type":"CDSView"},{"attributes":{},"id":"9778","type":"Selection"},{"attributes":{"data_source":{"id":"9329"},"glyph":{"id":"9330"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9331"},"selection_glyph":null,"view":{"id":"9333"}},"id":"9332","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"9348"},"selection_policy":{"id":"9347"}},"id":"9334","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9335","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"9350"},{"id":"9610"},{"id":"9779"}]},"id":"9349","type":"Legend"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"9337"},{"id":"9354"},{"id":"9371"},{"id":"9396"},{"id":"9419"},{"id":"9444"},{"id":"9477"},{"id":"9508"},{"id":"9541"},{"id":"9614"},{"id":"9653"},{"id":"9694"},{"id":"9783"},{"id":"9830"},{"id":"9879"}]},"id":"9350","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9336","type":"Line"},{"attributes":{},"id":"9318","type":"HelpTool"},{"attributes":{"source":{"id":"9334"}},"id":"9338","type":"CDSView"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"9826"},"selection_policy":{"id":"9825"}},"id":"9780","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9828","type":"Line"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"9926"},"selection_policy":{"id":"9925"}},"id":"9876","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9782","type":"Line"},{"attributes":{},"id":"9316","type":"SaveTool"},{"attributes":{"source":{"id":"9780"}},"id":"9784","type":"CDSView"},{"attributes":{"data_source":{"id":"9827"},"glyph":{"id":"9828"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9829"},"selection_glyph":null,"view":{"id":"9831"}},"id":"9830","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"9319"}},"id":"9315","type":"BoxZoomTool"},{"attributes":{},"id":"9340","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"9305"},"ticker":null},"id":"9308","type":"Grid"},{"attributes":{},"id":"9317","type":"ResetTool"},{"attributes":{},"id":"9303","type":"LinearScale"},{"attributes":{},"id":"9571","type":"UnionRenderers"},{"attributes":{},"id":"9825","type":"UnionRenderers"},{"attributes":{},"id":"9826","type":"Selection"},{"attributes":{},"id":"9299","type":"DataRange1d"},{"attributes":{},"id":"9342","type":"BasicTickFormatter"},{"attributes":{},"id":"9345","type":"UnionRenderers"},{"attributes":{},"id":"9346","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9313"},{"id":"9314"},{"id":"9315"},{"id":"9316"},{"id":"9317"},{"id":"9318"}]},"id":"9320","type":"Toolbar"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"9875"},"selection_policy":{"id":"9874"}},"id":"9827","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9829","type":"Line"},{"attributes":{"source":{"id":"9827"}},"id":"9831","type":"CDSView"},{"attributes":{"data_source":{"id":"9876"},"glyph":{"id":"9877"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9878"},"selection_glyph":null,"view":{"id":"9880"}},"id":"9879","type":"GlyphRenderer"},{"attributes":{},"id":"9347","type":"UnionRenderers"},{"attributes":{"source":{"id":"9393"}},"id":"9397","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9417","type":"Line"},{"attributes":{},"id":"9572","type":"Selection"},{"attributes":{"data_source":{"id":"9416"},"glyph":{"id":"9417"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9418"},"selection_glyph":null,"view":{"id":"9420"}},"id":"9419","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9475","type":"Line"},{"attributes":{},"id":"9874","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"9504"},"selection_policy":{"id":"9503"}},"id":"9474","type":"ColumnDataSource"},{"attributes":{},"id":"9875","type":"Selection"},{"attributes":{"source":{"id":"9469"}},"id":"9473","type":"CDSView"},{"attributes":{"data_source":{"id":"9474"},"glyph":{"id":"9475"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9476"},"selection_glyph":null,"view":{"id":"9478"}},"id":"9477","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"9609"},"selection_policy":{"id":"9608"}},"id":"9573","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9505"},"glyph":{"id":"9506"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9507"},"selection_glyph":null,"view":{"id":"9509"}},"id":"9508","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9539","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9476","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9612","type":"Line"},{"attributes":{"source":{"id":"9474"}},"id":"9478","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9877","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9575","type":"Line"},{"attributes":{},"id":"9412","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"9611"},"glyph":{"id":"9612"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9613"},"selection_glyph":null,"view":{"id":"9615"}},"id":"9614","type":"GlyphRenderer"},{"attributes":{},"id":"9413","type":"Selection"},{"attributes":{"label":{"value":"BERT-base teacher"},"renderers":[{"id":"9576"}]},"id":"9610","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9878","type":"Line"},{"attributes":{"source":{"id":"9876"}},"id":"9880","type":"CDSView"},{"attributes":{"data_source":{"id":"9351"},"glyph":{"id":"9352"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9353"},"selection_glyph":null,"view":{"id":"9355"}},"id":"9354","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9352","type":"Line"},{"attributes":{},"id":"9608","type":"UnionRenderers"},{"attributes":{},"id":"9414","type":"UnionRenderers"},{"attributes":{},"id":"9609","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9369","type":"Line"},{"attributes":{},"id":"9415","type":"Selection"},{"attributes":{"data_source":{"id":"9573"},"glyph":{"id":"9574"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9575"},"selection_glyph":null,"view":{"id":"9577"}},"id":"9576","type":"GlyphRenderer"},{"attributes":{},"id":"9501","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"9367"},"selection_policy":{"id":"9366"}},"id":"9351","type":"ColumnDataSource"},{"attributes":{},"id":"9502","type":"Selection"},{"attributes":{},"id":"9925","type":"UnionRenderers"},{"attributes":{},"id":"9926","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9353","type":"Line"},{"attributes":{"source":{"id":"9351"}},"id":"9355","type":"CDSView"},{"attributes":{"data":{"x":[1.5606414607482133,1.8333442967227587,2.075387764969063,2.306354828560857,2.363378950512201,2.36451559845159,2.6186173775098402],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,88.25975710073095,88.20838283474134,87.15966661496869]},"selected":{"id":"9778"},"selection_policy":{"id":"9777"}},"id":"9734","type":"ColumnDataSource"},{"attributes":{},"id":"9503","type":"UnionRenderers"},{"attributes":{},"id":"9504","type":"Selection"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"9649"},"selection_policy":{"id":"9648"}},"id":"9611","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9734"},"glyph":{"id":"9735"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9736"},"selection_glyph":null,"view":{"id":"9738"}},"id":"9737","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9651","type":"Line"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"9733"},"selection_policy":{"id":"9732"}},"id":"9691","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"9440"},"selection_policy":{"id":"9439"}},"id":"9416","type":"ColumnDataSource"},{"attributes":{},"id":"9366","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9442","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9613","type":"Line"},{"attributes":{},"id":"9367","type":"Selection"},{"attributes":{"data_source":{"id":"9469"},"glyph":{"id":"9470"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9471"},"selection_glyph":null,"view":{"id":"9473"}},"id":"9472","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9611"}},"id":"9615","type":"CDSView"},{"attributes":{"data_source":{"id":"9441"},"glyph":{"id":"9442"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9443"},"selection_glyph":null,"view":{"id":"9445"}},"id":"9444","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"9650"},"glyph":{"id":"9651"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9652"},"selection_glyph":null,"view":{"id":"9654"}},"id":"9653","type":"GlyphRenderer"},{"attributes":{},"id":"9310","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9418","type":"Line"},{"attributes":{"source":{"id":"9416"}},"id":"9420","type":"CDSView"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"9537"},"selection_policy":{"id":"9536"}},"id":"9505","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9368"},"glyph":{"id":"9369"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9370"},"selection_glyph":null,"view":{"id":"9372"}},"id":"9371","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9506","type":"Line"},{"attributes":{},"id":"9648","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"9386"},"selection_policy":{"id":"9385"}},"id":"9368","type":"ColumnDataSource"},{"attributes":{},"id":"9439","type":"UnionRenderers"},{"attributes":{},"id":"9649","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9394","type":"Line"},{"attributes":{},"id":"9440","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9507","type":"Line"},{"attributes":{"source":{"id":"9505"}},"id":"9509","type":"CDSView"},{"attributes":{"data_source":{"id":"9538"},"glyph":{"id":"9539"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9540"},"selection_glyph":null,"view":{"id":"9542"}},"id":"9541","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9370","type":"Line"},{"attributes":{"source":{"id":"9368"}},"id":"9372","type":"CDSView"},{"attributes":{"data":{"x":[0,4],"y":[88.5,88.5]},"selected":{"id":"9415"},"selection_policy":{"id":"9414"}},"id":"9393","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,4],"y":[87.5,87.5]},"selected":{"id":"9690"},"selection_policy":{"id":"9689"}},"id":"9650","type":"ColumnDataSource"},{"attributes":{},"id":"9536","type":"UnionRenderers"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"9342"},"ticker":{"id":"9306"}},"id":"9305","type":"LinearAxis"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"9467"},"selection_policy":{"id":"9466"}},"id":"9441","type":"ColumnDataSource"},{"attributes":{},"id":"9537","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9471","type":"Scatter"},{"attributes":{},"id":"9306","type":"BasicTicker"},{"attributes":{},"id":"9385","type":"UnionRenderers"},{"attributes":{},"id":"9386","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9652","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9443","type":"Line"},{"attributes":{"source":{"id":"9650"}},"id":"9654","type":"CDSView"},{"attributes":{"axis_label":"F1","formatter":{"id":"9340"},"ticker":{"id":"9310"}},"id":"9309","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9691"},"glyph":{"id":"9692"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9693"},"selection_glyph":null,"view":{"id":"9695"}},"id":"9694","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9441"}},"id":"9445","type":"CDSView"},{"attributes":{"data":{"x":[0,4],"y":[86.5,86.5]},"selected":{"id":"9572"},"selection_policy":{"id":"9571"}},"id":"9538","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9390","type":"Scatter"},{"attributes":{"source":{"id":"9573"}},"id":"9577","type":"CDSView"},{"attributes":{},"id":"9689","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"9413"},"selection_policy":{"id":"9412"}},"id":"9388","type":"ColumnDataSource"},{"attributes":{},"id":"9466","type":"UnionRenderers"},{"attributes":{},"id":"9690","type":"Selection"},{"attributes":{"data":{"x":[1.78125],"y":[90.3]},"selected":{"id":"9502"},"selection_policy":{"id":"9501"}},"id":"9469","type":"ColumnDataSource"},{"attributes":{},"id":"9467","type":"Selection"},{"attributes":{"data_source":{"id":"9393"},"glyph":{"id":"9394"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9395"},"selection_glyph":null,"view":{"id":"9397"}},"id":"9396","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9540","type":"Line"},{"attributes":{"source":{"id":"9388"}},"id":"9392","type":"CDSView"},{"attributes":{"source":{"id":"9538"}},"id":"9542","type":"CDSView"},{"attributes":{"data_source":{"id":"9388"},"glyph":{"id":"9389"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9390"},"selection_glyph":null,"view":{"id":"9392"}},"id":"9391","type":"GlyphRenderer"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"9295","type":"Title"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9574","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9470","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"9395","type":"Line"}],"root_ids":["9294"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"17c30e5c-5692-4768-a7dd-4d6b34891f73","root_ids":["9294"],"roots":{"9294":"2af53b44-bb22-4587-8aa2-1c647ebf0519"}}];
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