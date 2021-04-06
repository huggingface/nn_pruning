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
    
      
      
    
      var element = document.getElementById("b1c1f59f-0a5d-41a4-b3f0-d186a5789129");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b1c1f59f-0a5d-41a4-b3f0-d186a5789129' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9dd878b6-f9dd-43d6-844b-29f4a3723016":{"roots":{"references":[{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"42464"},"selection_policy":{"id":"42465"}},"id":"42448","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"42485"},"selection_policy":{"id":"42486"}},"id":"42470","type":"ColumnDataSource"},{"attributes":{"end":0.65},"id":"42446","type":"Range1d"},{"attributes":{},"id":"42531","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42900","type":"Line"},{"attributes":{},"id":"42532","type":"UnionRenderers"},{"attributes":{"label":{"value":"BERT-base teacher"},"renderers":[{"id":"42695"}]},"id":"42729","type":"LegendItem"},{"attributes":{"data_source":{"id":"42899"},"glyph":{"id":"42900"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42901"},"selection_glyph":null,"view":{"id":"42903"}},"id":"42902","type":"GlyphRenderer"},{"attributes":{"label":{"value":"BERT-large teacher"},"renderers":[{"id":"42856"}]},"id":"42898","type":"LegendItem"},{"attributes":{},"id":"42727","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42508","type":"Scatter"},{"attributes":{},"id":"42533","type":"Selection"},{"attributes":{},"id":"42728","type":"UnionRenderers"},{"attributes":{},"id":"42534","type":"UnionRenderers"},{"attributes":{"axis_label":"F1","formatter":{"id":"42461"},"ticker":{"id":"42429"}},"id":"42428","type":"LinearAxis"},{"attributes":{},"id":"42896","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42449","type":"Scatter"},{"attributes":{},"id":"42897","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"42466"},"selection_policy":{"id":"42467"}},"id":"42453","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42450","type":"Scatter"},{"attributes":{"data_source":{"id":"42453"},"glyph":{"id":"42454"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42455"},"selection_glyph":null,"view":{"id":"42457"}},"id":"42456","type":"GlyphRenderer"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":90.3},"id":"42587","type":"Label"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"42808"},"selection_policy":{"id":"42809"}},"id":"42769","type":"ColumnDataSource"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"42506","type":"Label"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"42438","type":"BoxAnnotation"},{"attributes":{"source":{"id":"42448"}},"id":"42452","type":"CDSView"},{"attributes":{"data_source":{"id":"42448"},"glyph":{"id":"42449"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42450"},"selection_glyph":null,"view":{"id":"42452"}},"id":"42451","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"42767"},"selection_policy":{"id":"42768"}},"id":"42730","type":"ColumnDataSource"},{"attributes":{"source":{"id":"42470"}},"id":"42474","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42454","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"42469"},{"id":"42729"},{"id":"42898"}],"location":"bottom_right"},"id":"42468","type":"Legend"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"42944"},"selection_policy":{"id":"42945"}},"id":"42899","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"42456"},{"id":"42473"},{"id":"42490"},{"id":"42515"},{"id":"42538"},{"id":"42563"},{"id":"42596"},{"id":"42627"},{"id":"42660"},{"id":"42733"},{"id":"42772"},{"id":"42813"},{"id":"42902"},{"id":"42949"},{"id":"42998"}]},"id":"42469","type":"LegendItem"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42471","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42536","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42947","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42455","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42472","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42561","type":"Line"},{"attributes":{"source":{"id":"42453"}},"id":"42457","type":"CDSView"},{"attributes":{},"id":"42767","type":"Selection"},{"attributes":{"data_source":{"id":"42560"},"glyph":{"id":"42561"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42562"},"selection_glyph":null,"view":{"id":"42564"}},"id":"42563","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"42470"},"glyph":{"id":"42471"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42472"},"selection_glyph":null,"view":{"id":"42474"}},"id":"42473","type":"GlyphRenderer"},{"attributes":{},"id":"42768","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42537","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42901","type":"Line"},{"attributes":{"source":{"id":"42535"}},"id":"42539","type":"CDSView"},{"attributes":{"source":{"id":"42899"}},"id":"42903","type":"CDSView"},{"attributes":{"data_source":{"id":"42946"},"glyph":{"id":"42947"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42948"},"selection_glyph":null,"view":{"id":"42950"}},"id":"42949","type":"GlyphRenderer"},{"attributes":{},"id":"42459","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42811","type":"Line"},{"attributes":{},"id":"42558","type":"Selection"},{"attributes":{},"id":"42420","type":"LinearScale"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42770","type":"Line"},{"attributes":{},"id":"42559","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"42855","type":"Line"},{"attributes":{},"id":"42944","type":"Selection"},{"attributes":{},"id":"42945","type":"UnionRenderers"},{"attributes":{"below":[{"id":"42424"}],"center":[{"id":"42427"},{"id":"42431"},{"id":"42447"},{"id":"42468"},{"id":"42506"},{"id":"42587"}],"left":[{"id":"42428"}],"plot_width":800,"renderers":[{"id":"42451"},{"id":"42456"},{"id":"42473"},{"id":"42490"},{"id":"42510"},{"id":"42515"},{"id":"42538"},{"id":"42563"},{"id":"42591"},{"id":"42596"},{"id":"42627"},{"id":"42660"},{"id":"42695"},{"id":"42733"},{"id":"42772"},{"id":"42813"},{"id":"42856"},{"id":"42902"},{"id":"42949"},{"id":"42998"}],"title":{"id":"42414"},"toolbar":{"id":"42439"},"x_range":{"id":"42446"},"x_scale":{"id":"42420"},"y_range":{"id":"42418"},"y_scale":{"id":"42422"}},"id":"42413","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42771","type":"Line"},{"attributes":{"source":{"id":"42769"}},"id":"42773","type":"CDSView"},{"attributes":{"data_source":{"id":"42810"},"glyph":{"id":"42811"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42812"},"selection_glyph":null,"view":{"id":"42814"}},"id":"42813","type":"GlyphRenderer"},{"attributes":{},"id":"42461","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"42585"},"selection_policy":{"id":"42586"}},"id":"42560","type":"ColumnDataSource"},{"attributes":{},"id":"42418","type":"DataRange1d"},{"attributes":{"data_source":{"id":"42588"},"glyph":{"id":"42589"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42590"},"selection_glyph":null,"view":{"id":"42592"}},"id":"42591","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"42993"},"selection_policy":{"id":"42994"}},"id":"42946","type":"ColumnDataSource"},{"attributes":{},"id":"42808","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42996","type":"Line"},{"attributes":{},"id":"42809","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42562","type":"Line"},{"attributes":{"source":{"id":"42560"}},"id":"42564","type":"CDSView"},{"attributes":{"source":{"id":"42588"}},"id":"42592","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42948","type":"Line"},{"attributes":{"source":{"id":"42946"}},"id":"42950","type":"CDSView"},{"attributes":{"data_source":{"id":"42995"},"glyph":{"id":"42996"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42997"},"selection_glyph":null,"view":{"id":"42999"}},"id":"42998","type":"GlyphRenderer"},{"attributes":{},"id":"42585","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"42851"},"selection_policy":{"id":"42852"}},"id":"42810","type":"ColumnDataSource"},{"attributes":{},"id":"42586","type":"UnionRenderers"},{"attributes":{"source":{"id":"42853"}},"id":"42857","type":"CDSView"},{"attributes":{},"id":"42993","type":"Selection"},{"attributes":{},"id":"42994","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42812","type":"Line"},{"attributes":{"source":{"id":"42810"}},"id":"42814","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"42854","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42590","type":"Scatter"},{"attributes":{},"id":"42851","type":"Selection"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"42727"},"selection_policy":{"id":"42728"}},"id":"42692","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"43044"},"selection_policy":{"id":"43045"}},"id":"42995","type":"ColumnDataSource"},{"attributes":{},"id":"42464","type":"Selection"},{"attributes":{},"id":"42852","type":"UnionRenderers"},{"attributes":{},"id":"42435","type":"SaveTool"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"42622"},"selection_policy":{"id":"42623"}},"id":"42593","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42997","type":"Line"},{"attributes":{},"id":"42465","type":"UnionRenderers"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"42447","type":"Label"},{"attributes":{},"id":"42425","type":"BasicTicker"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42594","type":"Line"},{"attributes":{"data_source":{"id":"42593"},"glyph":{"id":"42594"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42595"},"selection_glyph":null,"view":{"id":"42597"}},"id":"42596","type":"GlyphRenderer"},{"attributes":{"source":{"id":"42995"}},"id":"42999","type":"CDSView"},{"attributes":{"data_source":{"id":"42624"},"glyph":{"id":"42625"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42626"},"selection_glyph":null,"view":{"id":"42628"}},"id":"42627","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42658","type":"Line"},{"attributes":{},"id":"42436","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42595","type":"Line"},{"attributes":{"source":{"id":"42593"}},"id":"42597","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"42694","type":"Line"},{"attributes":{},"id":"42466","type":"Selection"},{"attributes":{},"id":"42467","type":"UnionRenderers"},{"attributes":{},"id":"43044","type":"Selection"},{"attributes":{},"id":"43045","type":"UnionRenderers"},{"attributes":{},"id":"42620","type":"Selection"},{"attributes":{},"id":"42621","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42488","type":"Line"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.3]},"selected":{"id":"42620"},"selection_policy":{"id":"42621"}},"id":"42588","type":"ColumnDataSource"},{"attributes":{},"id":"42437","type":"HelpTool"},{"attributes":{},"id":"42622","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"42432"},{"id":"42433"},{"id":"42434"},{"id":"42435"},{"id":"42436"},{"id":"42437"}]},"id":"42439","type":"Toolbar"},{"attributes":{},"id":"42623","type":"UnionRenderers"},{"attributes":{},"id":"42485","type":"Selection"},{"attributes":{},"id":"42486","type":"UnionRenderers"},{"attributes":{"axis":{"id":"42424"},"ticker":null},"id":"42427","type":"Grid"},{"attributes":{"overlay":{"id":"42438"}},"id":"42434","type":"BoxZoomTool"},{"attributes":{},"id":"42432","type":"PanTool"},{"attributes":{"data_source":{"id":"42769"},"glyph":{"id":"42770"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42771"},"selection_glyph":null,"view":{"id":"42773"}},"id":"42772","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"42655"},"selection_policy":{"id":"42656"}},"id":"42624","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"42487"},"glyph":{"id":"42488"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42489"},"selection_glyph":null,"view":{"id":"42491"}},"id":"42490","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42625","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"42504"},"selection_policy":{"id":"42505"}},"id":"42487","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42513","type":"Line"},{"attributes":{"data":{"x":[0.45493344907407407,0.356571903935185,0.29078052662037035,0.23759403935185186,0.19692201967592593],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,87.15966661496869]},"selected":{"id":"42896"},"selection_policy":{"id":"42897"}},"id":"42853","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42626","type":"Line"},{"attributes":{"source":{"id":"42624"}},"id":"42628","type":"CDSView"},{"attributes":{"data_source":{"id":"42657"},"glyph":{"id":"42658"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42659"},"selection_glyph":null,"view":{"id":"42661"}},"id":"42660","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42489","type":"Line"},{"attributes":{"source":{"id":"42487"}},"id":"42491","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"42533"},"selection_policy":{"id":"42534"}},"id":"42512","type":"ColumnDataSource"},{"attributes":{},"id":"42655","type":"Selection"},{"attributes":{},"id":"42656","type":"UnionRenderers"},{"attributes":{},"id":"42504","type":"Selection"},{"attributes":{},"id":"42505","type":"UnionRenderers"},{"attributes":{},"id":"42691","type":"UnionRenderers"},{"attributes":{},"id":"42433","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42731","type":"Line"},{"attributes":{"axis":{"id":"42428"},"dimension":1,"ticker":null},"id":"42431","type":"Grid"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"42690"},"selection_policy":{"id":"42691"}},"id":"42657","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"42853"},"glyph":{"id":"42854"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42855"},"selection_glyph":null,"view":{"id":"42857"}},"id":"42856","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42509","type":"Scatter"},{"attributes":{"source":{"id":"42692"}},"id":"42696","type":"CDSView"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"42531"},"selection_policy":{"id":"42532"}},"id":"42507","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42589","type":"Scatter"},{"attributes":{"data_source":{"id":"42512"},"glyph":{"id":"42513"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42514"},"selection_glyph":null,"view":{"id":"42516"}},"id":"42515","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42659","type":"Line"},{"attributes":{"source":{"id":"42507"}},"id":"42511","type":"CDSView"},{"attributes":{"source":{"id":"42657"}},"id":"42661","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42732","type":"Line"},{"attributes":{"data_source":{"id":"42507"},"glyph":{"id":"42508"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42509"},"selection_glyph":null,"view":{"id":"42511"}},"id":"42510","type":"GlyphRenderer"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"42693","type":"Line"},{"attributes":{"source":{"id":"42730"}},"id":"42734","type":"CDSView"},{"attributes":{"data_source":{"id":"42692"},"glyph":{"id":"42693"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42694"},"selection_glyph":null,"view":{"id":"42696"}},"id":"42695","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"42730"},"glyph":{"id":"42731"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42732"},"selection_glyph":null,"view":{"id":"42734"}},"id":"42733","type":"GlyphRenderer"},{"attributes":{},"id":"42422","type":"LinearScale"},{"attributes":{},"id":"42429","type":"BasicTicker"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"42459"},"ticker":{"id":"42425"}},"id":"42424","type":"LinearAxis"},{"attributes":{"data_source":{"id":"42535"},"glyph":{"id":"42536"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42537"},"selection_glyph":null,"view":{"id":"42539"}},"id":"42538","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"42558"},"selection_policy":{"id":"42559"}},"id":"42535","type":"ColumnDataSource"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"42414","type":"Title"},{"attributes":{},"id":"42690","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42514","type":"Line"},{"attributes":{"source":{"id":"42512"}},"id":"42516","type":"CDSView"}],"root_ids":["42413"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"9dd878b6-f9dd-43d6-844b-29f4a3723016","root_ids":["42413"],"roots":{"42413":"b1c1f59f-0a5d-41a4-b3f0-d186a5789129"}}];
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