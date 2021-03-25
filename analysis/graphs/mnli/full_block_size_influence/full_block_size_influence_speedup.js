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
    
      
      
    
      var element = document.getElementById("06c3f262-ba71-409e-a6f3-e3c6b5f4d625");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '06c3f262-ba71-409e-a6f3-e3c6b5f4d625' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f5f4f2ba-2347-467d-9a9c-eb4103de8177":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6500","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"6536"},"selection_policy":{"id":"6537"}},"id":"6499","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6499"},"glyph":{"id":"6500"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6501"},"selection_glyph":null,"view":{"id":"6503"}},"id":"6502","type":"GlyphRenderer"},{"attributes":{},"id":"6332","type":"Selection"},{"attributes":{"source":{"id":"6494"}},"id":"6498","type":"CDSView"},{"attributes":{},"id":"6333","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"6494"},"glyph":{"id":"6495"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6496"},"selection_glyph":null,"view":{"id":"6498"}},"id":"6497","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9946948904542998,2.0018744207135466,2.002662075247167,2.4005750580789247,2.8975278910432105,2.9707750898055454,2.9812930987603186,3.3300349445225725,3.509180092206226],"y":[83.19918492103923,83.13805399898115,83.03616912888437,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"6665"},"selection_policy":{"id":"6666"}},"id":"6622","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6539","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6580","type":"Line"},{"attributes":{},"id":"6334","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6501","type":"Line"},{"attributes":{},"id":"6335","type":"UnionRenderers"},{"attributes":{},"id":"6220","type":"LinearScale"},{"attributes":{"source":{"id":"6499"}},"id":"6503","type":"CDSView"},{"attributes":{"data_source":{"id":"6538"},"glyph":{"id":"6539"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6540"},"selection_glyph":null,"view":{"id":"6542"}},"id":"6541","type":"GlyphRenderer"},{"attributes":{},"id":"6266","type":"UnionRenderers"},{"attributes":{},"id":"6534","type":"Selection"},{"attributes":{},"id":"6535","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6337","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6362","type":"Line"},{"attributes":{"data_source":{"id":"6361"},"glyph":{"id":"6362"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6363"},"selection_glyph":null,"view":{"id":"6365"}},"id":"6364","type":"GlyphRenderer"},{"attributes":{},"id":"6536","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6338","type":"Line"},{"attributes":{},"id":"6537","type":"UnionRenderers"},{"attributes":{"source":{"id":"6336"}},"id":"6340","type":"CDSView"},{"attributes":{},"id":"6359","type":"Selection"},{"attributes":{},"id":"6360","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"6577"},"selection_policy":{"id":"6578"}},"id":"6538","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6624","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"6386"},"selection_policy":{"id":"6387"}},"id":"6361","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6622"},"glyph":{"id":"6623"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6624"},"selection_glyph":null,"view":{"id":"6626"}},"id":"6625","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6540","type":"Line"},{"attributes":{"source":{"id":"6254"}},"id":"6258","type":"CDSView"},{"attributes":{"source":{"id":"6538"}},"id":"6542","type":"CDSView"},{"attributes":{"data_source":{"id":"6579"},"glyph":{"id":"6580"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6581"},"selection_glyph":null,"view":{"id":"6583"}},"id":"6582","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6363","type":"Line"},{"attributes":{"source":{"id":"6361"}},"id":"6365","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6495","type":"Scatter"},{"attributes":{},"id":"6577","type":"Selection"},{"attributes":{"text":"DistilBERT","x":1.63,"y":82.2},"id":"6248","type":"Label"},{"attributes":{},"id":"6578","type":"UnionRenderers"},{"attributes":{},"id":"6386","type":"Selection"},{"attributes":{},"id":"6387","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"6620"},"selection_policy":{"id":"6621"}},"id":"6579","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"6423"},"selection_policy":{"id":"6424"}},"id":"6394","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6622"}},"id":"6626","type":"CDSView"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"6257"},{"id":"6274"},{"id":"6291"},{"id":"6316"},{"id":"6339"},{"id":"6364"},{"id":"6397"},{"id":"6428"},{"id":"6461"},{"id":"6502"},{"id":"6541"},{"id":"6582"},{"id":"6671"},{"id":"6718"},{"id":"6767"}]},"id":"6270","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6391","type":"Scatter"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6623","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"6270"},{"id":"6667"}]},"id":"6269","type":"Legend"},{"attributes":{"data_source":{"id":"6394"},"glyph":{"id":"6395"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6396"},"selection_glyph":null,"view":{"id":"6398"}},"id":"6397","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6389"}},"id":"6393","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6581","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"6238","type":"BoxAnnotation"},{"attributes":{},"id":"6260","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"6389"},"glyph":{"id":"6390"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6391"},"selection_glyph":null,"view":{"id":"6393"}},"id":"6392","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6579"}},"id":"6583","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6395","type":"Line"},{"attributes":{"data_source":{"id":"6425"},"glyph":{"id":"6426"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6427"},"selection_glyph":null,"view":{"id":"6429"}},"id":"6428","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6459","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6396","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6765","type":"Line"},{"attributes":{},"id":"6620","type":"Selection"},{"attributes":{"axis":{"id":"6224"},"ticker":null},"id":"6227","type":"Grid"},{"attributes":{"source":{"id":"6394"}},"id":"6398","type":"CDSView"},{"attributes":{},"id":"6621","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6496","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6766","type":"Line"},{"attributes":{"source":{"id":"6764"}},"id":"6768","type":"CDSView"},{"attributes":{"data_source":{"id":"6271"},"glyph":{"id":"6272"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6273"},"selection_glyph":null,"view":{"id":"6275"}},"id":"6274","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"6267"},"selection_policy":{"id":"6268"}},"id":"6254","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6272","type":"Line"},{"attributes":{"end":6.0,"start":0.75},"id":"6246","type":"Range1d"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6289","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6669","type":"Line"},{"attributes":{"data":{"x":[1.78125],"y":[84.3]},"selected":{"id":"6421"},"selection_policy":{"id":"6422"}},"id":"6389","type":"ColumnDataSource"},{"attributes":{},"id":"6421","type":"Selection"},{"attributes":{},"id":"6813","type":"Selection"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"6286"},"selection_policy":{"id":"6287"}},"id":"6271","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6309","type":"Scatter"},{"attributes":{},"id":"6422","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"6668"},"glyph":{"id":"6669"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6670"},"selection_glyph":null,"view":{"id":"6672"}},"id":"6671","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.63],"y":[82.2]},"selected":{"id":"6265"},"selection_policy":{"id":"6266"}},"id":"6249","type":"ColumnDataSource"},{"attributes":{},"id":"6814","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"6625"}]},"id":"6667","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6273","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6251","type":"Scatter"},{"attributes":{"source":{"id":"6271"}},"id":"6275","type":"CDSView"},{"attributes":{},"id":"6225","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6250","type":"Scatter"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":84.3},"id":"6388","type":"Label"},{"attributes":{},"id":"6423","type":"Selection"},{"attributes":{},"id":"6665","type":"Selection"},{"attributes":{"text":"TinyBERT","x":2.0,"y":84.6},"id":"6307","type":"Label"},{"attributes":{},"id":"6424","type":"UnionRenderers"},{"attributes":{},"id":"6666","type":"UnionRenderers"},{"attributes":{"source":{"id":"6249"}},"id":"6253","type":"CDSView"},{"attributes":{"data_source":{"id":"6249"},"glyph":{"id":"6250"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6251"},"selection_glyph":null,"view":{"id":"6253"}},"id":"6252","type":"GlyphRenderer"},{"attributes":{},"id":"6232","type":"PanTool"},{"attributes":{},"id":"6229","type":"BasicTicker"},{"attributes":{"below":[{"id":"6224"}],"center":[{"id":"6227"},{"id":"6231"},{"id":"6248"},{"id":"6269"},{"id":"6307"},{"id":"6388"},{"id":"6493"}],"left":[{"id":"6228"}],"plot_width":800,"renderers":[{"id":"6252"},{"id":"6257"},{"id":"6274"},{"id":"6291"},{"id":"6311"},{"id":"6316"},{"id":"6339"},{"id":"6364"},{"id":"6392"},{"id":"6397"},{"id":"6428"},{"id":"6461"},{"id":"6497"},{"id":"6502"},{"id":"6541"},{"id":"6582"},{"id":"6625"},{"id":"6671"},{"id":"6718"},{"id":"6767"}],"title":{"id":"6214"},"toolbar":{"id":"6239"},"x_range":{"id":"6246"},"x_scale":{"id":"6220"},"y_range":{"id":"6247"},"y_scale":{"id":"6222"}},"id":"6213","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"6254"},"glyph":{"id":"6255"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6256"},"selection_glyph":null,"view":{"id":"6258"}},"id":"6257","type":"GlyphRenderer"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"6260"},"ticker":{"id":"6225"}},"id":"6224","type":"LinearAxis"},{"attributes":{},"id":"6286","type":"Selection"},{"attributes":{},"id":"6222","type":"LinearScale"},{"attributes":{},"id":"6287","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6256","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6255","type":"Line"},{"attributes":{},"id":"6262","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"6238"}},"id":"6234","type":"BoxZoomTool"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"6713"},"selection_policy":{"id":"6714"}},"id":"6668","type":"ColumnDataSource"},{"attributes":{},"id":"6233","type":"WheelZoomTool"},{"attributes":{"end":86,"start":79},"id":"6247","type":"Range1d"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6716","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"6456"},"selection_policy":{"id":"6457"}},"id":"6425","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"6813"},"selection_policy":{"id":"6814"}},"id":"6764","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6288"},"glyph":{"id":"6289"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6290"},"selection_glyph":null,"view":{"id":"6292"}},"id":"6291","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6426","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"6305"},"selection_policy":{"id":"6306"}},"id":"6288","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6670","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6314","type":"Line"},{"attributes":{"source":{"id":"6668"}},"id":"6672","type":"CDSView"},{"attributes":{"data_source":{"id":"6715"},"glyph":{"id":"6716"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6717"},"selection_glyph":null,"view":{"id":"6719"}},"id":"6718","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6427","type":"Line"},{"attributes":{"source":{"id":"6425"}},"id":"6429","type":"CDSView"},{"attributes":{"data_source":{"id":"6458"},"glyph":{"id":"6459"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6460"},"selection_glyph":null,"view":{"id":"6462"}},"id":"6461","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6290","type":"Line"},{"attributes":{"source":{"id":"6288"}},"id":"6292","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"6334"},"selection_policy":{"id":"6335"}},"id":"6313","type":"ColumnDataSource"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"6214","type":"Title"},{"attributes":{},"id":"6456","type":"Selection"},{"attributes":{},"id":"6713","type":"Selection"},{"attributes":{},"id":"6457","type":"UnionRenderers"},{"attributes":{},"id":"6714","type":"UnionRenderers"},{"attributes":{},"id":"6305","type":"Selection"},{"attributes":{},"id":"6236","type":"ResetTool"},{"attributes":{},"id":"6306","type":"UnionRenderers"},{"attributes":{},"id":"6235","type":"SaveTool"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"6491"},"selection_policy":{"id":"6492"}},"id":"6458","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"6762"},"selection_policy":{"id":"6763"}},"id":"6715","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6310","type":"Scatter"},{"attributes":{"data":{"x":[1.0],"y":[84.9414161996943]},"selected":{"id":"6534"},"selection_policy":{"id":"6535"}},"id":"6494","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.0],"y":[84.6]},"selected":{"id":"6332"},"selection_policy":{"id":"6333"}},"id":"6308","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6390","type":"Scatter"},{"attributes":{},"id":"6265","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6232"},{"id":"6233"},{"id":"6234"},{"id":"6235"},{"id":"6236"},{"id":"6237"}]},"id":"6239","type":"Toolbar"},{"attributes":{"data_source":{"id":"6313"},"glyph":{"id":"6314"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6315"},"selection_glyph":null,"view":{"id":"6317"}},"id":"6316","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6460","type":"Line"},{"attributes":{"source":{"id":"6308"}},"id":"6312","type":"CDSView"},{"attributes":{"source":{"id":"6458"}},"id":"6462","type":"CDSView"},{"attributes":{"source":{"id":"6715"}},"id":"6719","type":"CDSView"},{"attributes":{"data_source":{"id":"6308"},"glyph":{"id":"6309"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6310"},"selection_glyph":null,"view":{"id":"6312"}},"id":"6311","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6764"},"glyph":{"id":"6765"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6766"},"selection_glyph":null,"view":{"id":"6768"}},"id":"6767","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6717","type":"Line"},{"attributes":{"text":"Original Soft Movement","x":1.0,"y":84.9414161996943},"id":"6493","type":"Label"},{"attributes":{"axis":{"id":"6228"},"dimension":1,"ticker":null},"id":"6231","type":"Grid"},{"attributes":{"axis_label":"Matched","formatter":{"id":"6262"},"ticker":{"id":"6229"}},"id":"6228","type":"LinearAxis"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"6359"},"selection_policy":{"id":"6360"}},"id":"6336","type":"ColumnDataSource"},{"attributes":{},"id":"6267","type":"Selection"},{"attributes":{"data_source":{"id":"6336"},"glyph":{"id":"6337"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6338"},"selection_glyph":null,"view":{"id":"6340"}},"id":"6339","type":"GlyphRenderer"},{"attributes":{},"id":"6268","type":"UnionRenderers"},{"attributes":{},"id":"6491","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6315","type":"Line"},{"attributes":{},"id":"6492","type":"UnionRenderers"},{"attributes":{},"id":"6762","type":"Selection"},{"attributes":{"source":{"id":"6313"}},"id":"6317","type":"CDSView"},{"attributes":{},"id":"6763","type":"UnionRenderers"},{"attributes":{},"id":"6237","type":"HelpTool"}],"root_ids":["6213"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"f5f4f2ba-2347-467d-9a9c-eb4103de8177","root_ids":["6213"],"roots":{"6213":"06c3f262-ba71-409e-a6f3-e3c6b5f4d625"}}];
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