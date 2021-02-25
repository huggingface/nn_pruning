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
    
      
      
    
      var element = document.getElementById("c988562f-8c24-446a-9b42-399379190f7b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c988562f-8c24-446a-9b42-399379190f7b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"fe772cb4-d555-420f-b828-8bf474e49eba":{"roots":{"references":[{"attributes":{"below":[{"id":"11355"}],"center":[{"id":"11358"},{"id":"11362"},{"id":"11379"},{"id":"11400"},{"id":"11438"},{"id":"11519"}],"left":[{"id":"11359"}],"plot_width":800,"renderers":[{"id":"11383"},{"id":"11388"},{"id":"11405"},{"id":"11422"},{"id":"11442"},{"id":"11447"},{"id":"11470"},{"id":"11495"},{"id":"11523"},{"id":"11528"},{"id":"11559"},{"id":"11592"},{"id":"11627"},{"id":"11665"},{"id":"11704"},{"id":"11745"},{"id":"11788"},{"id":"11834"},{"id":"11881"},{"id":"11930"}],"title":{"id":"11345"},"toolbar":{"id":"11370"},"x_range":{"id":"11377"},"x_scale":{"id":"11351"},"y_range":{"id":"11378"},"y_scale":{"id":"11353"}},"id":"11344","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"11380"},"glyph":{"id":"11381"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11382"},"selection_glyph":null,"view":{"id":"11384"}},"id":"11383","type":"GlyphRenderer"},{"attributes":{},"id":"11739","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"11419"},"glyph":{"id":"11420"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11421"},"selection_glyph":null,"view":{"id":"11423"}},"id":"11422","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11928","type":"Line"},{"attributes":{"data_source":{"id":"11624"},"glyph":{"id":"11625"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11626"},"selection_glyph":null,"view":{"id":"11628"}},"id":"11627","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11879","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"11436"},"selection_policy":{"id":"11435"}},"id":"11419","type":"ColumnDataSource"},{"attributes":{},"id":"11393","type":"BasicTickFormatter"},{"attributes":{},"id":"11740","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"11369","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11880","type":"Line"},{"attributes":{"source":{"id":"11878"}},"id":"11882","type":"CDSView"},{"attributes":{"data_source":{"id":"11927"},"glyph":{"id":"11928"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11929"},"selection_glyph":null,"view":{"id":"11931"}},"id":"11930","type":"GlyphRenderer"},{"attributes":{},"id":"11395","type":"UnionRenderers"},{"attributes":{"axis":{"id":"11355"},"ticker":null},"id":"11358","type":"Grid"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"11393"},"ticker":{"id":"11356"}},"id":"11355","type":"LinearAxis"},{"attributes":{"source":{"id":"11785"}},"id":"11789","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11743","type":"Line"},{"attributes":{},"id":"11396","type":"Selection"},{"attributes":{},"id":"11924","type":"UnionRenderers"},{"attributes":{},"id":"11925","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11744","type":"Line"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"11396"},"selection_policy":{"id":"11395"}},"id":"11380","type":"ColumnDataSource"},{"attributes":{"source":{"id":"11742"}},"id":"11746","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11786","type":"Line"},{"attributes":{},"id":"11397","type":"UnionRenderers"},{"attributes":{},"id":"11398","type":"Selection"},{"attributes":{"end":86,"start":79},"id":"11378","type":"Range1d"},{"attributes":{},"id":"11782","type":"UnionRenderers"},{"attributes":{},"id":"11353","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"11976"},"selection_policy":{"id":"11975"}},"id":"11927","type":"ColumnDataSource"},{"attributes":{"axis_label":"Matched","formatter":{"id":"11391"},"ticker":{"id":"11360"}},"id":"11359","type":"LinearAxis"},{"attributes":{},"id":"11783","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11929","type":"Line"},{"attributes":{"source":{"id":"11927"}},"id":"11931","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11832","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11787","type":"Line"},{"attributes":{},"id":"11975","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11441","type":"Scatter"},{"attributes":{},"id":"11976","type":"Selection"},{"attributes":{"data_source":{"id":"11831"},"glyph":{"id":"11832"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11833"},"selection_glyph":null,"view":{"id":"11835"}},"id":"11834","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11382","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11381","type":"Scatter"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"11788"}]},"id":"11830","type":"LegendItem"},{"attributes":{},"id":"11827","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"11385"},"glyph":{"id":"11386"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11387"},"selection_glyph":null,"view":{"id":"11389"}},"id":"11388","type":"GlyphRenderer"},{"attributes":{},"id":"11363","type":"PanTool"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"11438","type":"Label"},{"attributes":{"end":0.75},"id":"11377","type":"Range1d"},{"attributes":{},"id":"11360","type":"BasicTicker"},{"attributes":{},"id":"11828","type":"Selection"},{"attributes":{"source":{"id":"11380"}},"id":"11384","type":"CDSView"},{"attributes":{},"id":"11416","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"11398"},"selection_policy":{"id":"11397"}},"id":"11385","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11386","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"11401"},{"id":"11661"},{"id":"11830"}],"location":"bottom_right"},"id":"11400","type":"Legend"},{"attributes":{},"id":"11417","type":"Selection"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"11388"},{"id":"11405"},{"id":"11422"},{"id":"11447"},{"id":"11470"},{"id":"11495"},{"id":"11528"},{"id":"11559"},{"id":"11592"},{"id":"11665"},{"id":"11704"},{"id":"11745"},{"id":"11834"},{"id":"11881"},{"id":"11930"}]},"id":"11401","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11387","type":"Line"},{"attributes":{"source":{"id":"11385"}},"id":"11389","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"11876"},"selection_policy":{"id":"11875"}},"id":"11831","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11440","type":"Scatter"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"11925"},"selection_policy":{"id":"11924"}},"id":"11878","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11420","type":"Line"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":84.3},"id":"11519","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11833","type":"Line"},{"attributes":{"source":{"id":"11831"}},"id":"11835","type":"CDSView"},{"attributes":{"data_source":{"id":"11878"},"glyph":{"id":"11879"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11880"},"selection_glyph":null,"view":{"id":"11882"}},"id":"11881","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11421","type":"Line"},{"attributes":{"source":{"id":"11419"}},"id":"11423","type":"CDSView"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"11463"},"selection_policy":{"id":"11462"}},"id":"11439","type":"ColumnDataSource"},{"attributes":{},"id":"11391","type":"BasicTickFormatter"},{"attributes":{},"id":"11875","type":"UnionRenderers"},{"attributes":{},"id":"11435","type":"UnionRenderers"},{"attributes":{},"id":"11876","type":"Selection"},{"attributes":{},"id":"11436","type":"Selection"},{"attributes":{"source":{"id":"11701"}},"id":"11705","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11590","type":"Line"},{"attributes":{},"id":"11516","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11445","type":"Line"},{"attributes":{"source":{"id":"11624"}},"id":"11628","type":"CDSView"},{"attributes":{"data_source":{"id":"11439"},"glyph":{"id":"11440"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11441"},"selection_glyph":null,"view":{"id":"11443"}},"id":"11442","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[84.3]},"selected":{"id":"11552"},"selection_policy":{"id":"11551"}},"id":"11520","type":"ColumnDataSource"},{"attributes":{},"id":"11517","type":"Selection"},{"attributes":{"data_source":{"id":"11444"},"glyph":{"id":"11445"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11446"},"selection_glyph":null,"view":{"id":"11448"}},"id":"11447","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11591","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"11465"},"selection_policy":{"id":"11464"}},"id":"11444","type":"ColumnDataSource"},{"attributes":{"source":{"id":"11589"}},"id":"11593","type":"CDSView"},{"attributes":{},"id":"11367","type":"ResetTool"},{"attributes":{"source":{"id":"11439"}},"id":"11443","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11625","type":"Line"},{"attributes":{"overlay":{"id":"11369"}},"id":"11365","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11522","type":"Scatter"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11468","type":"Line"},{"attributes":{},"id":"11621","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"11525"},"glyph":{"id":"11526"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11527"},"selection_glyph":null,"view":{"id":"11529"}},"id":"11528","type":"GlyphRenderer"},{"attributes":{},"id":"11368","type":"HelpTool"},{"attributes":{"data_source":{"id":"11467"},"glyph":{"id":"11468"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11469"},"selection_glyph":null,"view":{"id":"11471"}},"id":"11470","type":"GlyphRenderer"},{"attributes":{"source":{"id":"11520"}},"id":"11524","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11446","type":"Line"},{"attributes":{},"id":"11622","type":"Selection"},{"attributes":{"source":{"id":"11444"}},"id":"11448","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11526","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"11554"},"selection_policy":{"id":"11553"}},"id":"11525","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.750694155218002,0.34656273890574396,0.247365299956507,0.186029553957332,0.131177042042143,0.0947351805073981,0.0602396365698101,0.0402606146574505,0.0284787168842778,0.0214990126796872,0.01685626988373],"y":[84.9210392256749,83.7289862455425,83.331635252165,82.41467142129389,81.7320427916454,81.13092205807429,80.6826286296485,79.9898115129903,79.4294447274579,79.1441670911869,78.7671930718288]},"selected":{"id":"11659"},"selection_policy":{"id":"11658"}},"id":"11624","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"11556"},"glyph":{"id":"11557"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11558"},"selection_glyph":null,"view":{"id":"11560"}},"id":"11559","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"11622"},"selection_policy":{"id":"11621"}},"id":"11589","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11663","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11626","type":"Line"},{"attributes":{"source":{"id":"11402"}},"id":"11406","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11527","type":"Line"},{"attributes":{},"id":"11462","type":"UnionRenderers"},{"attributes":{"source":{"id":"11525"}},"id":"11529","type":"CDSView"},{"attributes":{"data_source":{"id":"11662"},"glyph":{"id":"11663"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11664"},"selection_glyph":null,"view":{"id":"11666"}},"id":"11665","type":"GlyphRenderer"},{"attributes":{},"id":"11463","type":"Selection"},{"attributes":{"label":{"value":"Original Soft Movement"},"renderers":[{"id":"11627"}]},"id":"11661","type":"LegendItem"},{"attributes":{},"id":"11658","type":"UnionRenderers"},{"attributes":{},"id":"11551","type":"UnionRenderers"},{"attributes":{},"id":"11659","type":"Selection"},{"attributes":{},"id":"11464","type":"UnionRenderers"},{"attributes":{},"id":"11552","type":"Selection"},{"attributes":{},"id":"11465","type":"Selection"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"11828"},"selection_policy":{"id":"11827"}},"id":"11785","type":"ColumnDataSource"},{"attributes":{},"id":"11553","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"11699"},"selection_policy":{"id":"11698"}},"id":"11662","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"11785"},"glyph":{"id":"11786"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11787"},"selection_glyph":null,"view":{"id":"11789"}},"id":"11788","type":"GlyphRenderer"},{"attributes":{},"id":"11554","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11702","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11403","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"11783"},"selection_policy":{"id":"11782"}},"id":"11742","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"11490"},"selection_policy":{"id":"11489"}},"id":"11467","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11493","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11664","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11521","type":"Scatter"},{"attributes":{"source":{"id":"11662"}},"id":"11666","type":"CDSView"},{"attributes":{},"id":"11356","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11492"},"glyph":{"id":"11493"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11494"},"selection_glyph":null,"view":{"id":"11496"}},"id":"11495","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"11701"},"glyph":{"id":"11702"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11703"},"selection_glyph":null,"view":{"id":"11705"}},"id":"11704","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11469","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"11417"},"selection_policy":{"id":"11416"}},"id":"11402","type":"ColumnDataSource"},{"attributes":{"source":{"id":"11467"}},"id":"11471","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11404","type":"Line"},{"attributes":{},"id":"11698","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11363"},{"id":"11364"},{"id":"11365"},{"id":"11366"},{"id":"11367"},{"id":"11368"}]},"id":"11370","type":"Toolbar"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"11345","type":"Title"},{"attributes":{},"id":"11351","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"11587"},"selection_policy":{"id":"11586"}},"id":"11556","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11557","type":"Line"},{"attributes":{},"id":"11489","type":"UnionRenderers"},{"attributes":{},"id":"11699","type":"Selection"},{"attributes":{},"id":"11490","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11558","type":"Line"},{"attributes":{"source":{"id":"11556"}},"id":"11560","type":"CDSView"},{"attributes":{"data_source":{"id":"11589"},"glyph":{"id":"11590"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11591"},"selection_glyph":null,"view":{"id":"11593"}},"id":"11592","type":"GlyphRenderer"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"11379","type":"Label"},{"attributes":{},"id":"11366","type":"SaveTool"},{"attributes":{},"id":"11364","type":"WheelZoomTool"},{"attributes":{},"id":"11586","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"11740"},"selection_policy":{"id":"11739"}},"id":"11701","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"11517"},"selection_policy":{"id":"11516"}},"id":"11492","type":"ColumnDataSource"},{"attributes":{},"id":"11587","type":"Selection"},{"attributes":{"data_source":{"id":"11742"},"glyph":{"id":"11743"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11744"},"selection_glyph":null,"view":{"id":"11746"}},"id":"11745","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"11359"},"dimension":1,"ticker":null},"id":"11362","type":"Grid"},{"attributes":{"data_source":{"id":"11402"},"glyph":{"id":"11403"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11404"},"selection_glyph":null,"view":{"id":"11406"}},"id":"11405","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"11520"},"glyph":{"id":"11521"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11522"},"selection_glyph":null,"view":{"id":"11524"}},"id":"11523","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11703","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11494","type":"Line"},{"attributes":{"source":{"id":"11492"}},"id":"11496","type":"CDSView"}],"root_ids":["11344"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"fe772cb4-d555-420f-b828-8bf474e49eba","root_ids":["11344"],"roots":{"11344":"c988562f-8c24-446a-9b42-399379190f7b"}}];
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