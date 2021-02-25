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
    
      
      
    
      var element = document.getElementById("b5167afe-0888-4aa6-a478-194e220ad189");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b5167afe-0888-4aa6-a478-194e220ad189' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8f266ccd-fe32-45fa-b8b2-e23f3dcb275d":{"roots":{"references":[{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7083","type":"Line"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[84.3]},"selected":{"id":"7232"},"selection_policy":{"id":"7231"}},"id":"7200","type":"ColumnDataSource"},{"attributes":{},"id":"7231","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"7097"},"selection_policy":{"id":"7096"}},"id":"7082","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7512","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7100","type":"Line"},{"attributes":{},"id":"7040","type":"BasicTicker"},{"attributes":{},"id":"7232","type":"Selection"},{"attributes":{"data_source":{"id":"7511"},"glyph":{"id":"7512"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7513"},"selection_glyph":null,"view":{"id":"7515"}},"id":"7514","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7084","type":"Line"},{"attributes":{"source":{"id":"7082"}},"id":"7086","type":"CDSView"},{"attributes":{"label":{"value":"Original Soft Movement"},"renderers":[{"id":"7468"}]},"id":"7510","type":"LegendItem"},{"attributes":{},"id":"7507","type":"UnionRenderers"},{"attributes":{},"id":"7233","type":"UnionRenderers"},{"attributes":{},"id":"7508","type":"Selection"},{"attributes":{},"id":"7096","type":"UnionRenderers"},{"attributes":{},"id":"7234","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"7049","type":"BoxAnnotation"},{"attributes":{},"id":"7097","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"7556"},"selection_policy":{"id":"7555"}},"id":"7511","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7099"},"glyph":{"id":"7100"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7101"},"selection_glyph":null,"view":{"id":"7103"}},"id":"7102","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"7116"},"selection_policy":{"id":"7115"}},"id":"7099","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7270","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7559","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7237","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7608","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7043"},{"id":"7044"},{"id":"7045"},{"id":"7046"},{"id":"7047"},{"id":"7048"}]},"id":"7050","type":"Toolbar"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7125","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7238","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7513","type":"Line"},{"attributes":{"source":{"id":"7236"}},"id":"7240","type":"CDSView"},{"attributes":{"source":{"id":"7511"}},"id":"7515","type":"CDSView"},{"attributes":{"data_source":{"id":"7269"},"glyph":{"id":"7270"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7271"},"selection_glyph":null,"view":{"id":"7273"}},"id":"7272","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7558"},"glyph":{"id":"7559"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7560"},"selection_glyph":null,"view":{"id":"7562"}},"id":"7561","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7101","type":"Line"},{"attributes":{"source":{"id":"7099"}},"id":"7103","type":"CDSView"},{"attributes":{"data_source":{"id":"7119"},"glyph":{"id":"7120"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7121"},"selection_glyph":null,"view":{"id":"7123"}},"id":"7122","type":"GlyphRenderer"},{"attributes":{},"id":"7266","type":"UnionRenderers"},{"attributes":{},"id":"7555","type":"UnionRenderers"},{"attributes":{},"id":"7115","type":"UnionRenderers"},{"attributes":{},"id":"7267","type":"Selection"},{"attributes":{},"id":"7556","type":"Selection"},{"attributes":{},"id":"7116","type":"Selection"},{"attributes":{"axis_label":"Matched","formatter":{"id":"7071"},"ticker":{"id":"7040"}},"id":"7039","type":"LinearAxis"},{"attributes":{"source":{"id":"7304"}},"id":"7308","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7121","type":"Scatter"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"7302"},"selection_policy":{"id":"7301"}},"id":"7269","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7201","type":"Scatter"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"7143"},"selection_policy":{"id":"7142"}},"id":"7119","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"7605"},"selection_policy":{"id":"7604"}},"id":"7558","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7124"},"glyph":{"id":"7125"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7126"},"selection_glyph":null,"view":{"id":"7128"}},"id":"7127","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7271","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"7145"},"selection_policy":{"id":"7144"}},"id":"7124","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7269"}},"id":"7273","type":"CDSView"},{"attributes":{"source":{"id":"7119"}},"id":"7123","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7305","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7560","type":"Line"},{"attributes":{"data_source":{"id":"7304"},"glyph":{"id":"7305"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7306"},"selection_glyph":null,"view":{"id":"7308"}},"id":"7307","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"7039"},"dimension":1,"ticker":null},"id":"7042","type":"Grid"},{"attributes":{"source":{"id":"7558"}},"id":"7562","type":"CDSView"},{"attributes":{"data_source":{"id":"7607"},"glyph":{"id":"7608"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7609"},"selection_glyph":null,"view":{"id":"7611"}},"id":"7610","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"7170"},"selection_policy":{"id":"7169"}},"id":"7147","type":"ColumnDataSource"},{"attributes":{},"id":"7301","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"7147"},"glyph":{"id":"7148"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7149"},"selection_glyph":null,"view":{"id":"7151"}},"id":"7150","type":"GlyphRenderer"},{"attributes":{},"id":"7604","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7126","type":"Line"},{"attributes":{},"id":"7302","type":"Selection"},{"attributes":{"source":{"id":"7124"}},"id":"7128","type":"CDSView"},{"attributes":{"end":86,"start":79},"id":"7058","type":"Range1d"},{"attributes":{},"id":"7605","type":"Selection"},{"attributes":{"below":[{"id":"7035"}],"center":[{"id":"7038"},{"id":"7042"},{"id":"7059"},{"id":"7080"},{"id":"7118"},{"id":"7199"}],"left":[{"id":"7039"}],"plot_width":800,"renderers":[{"id":"7063"},{"id":"7068"},{"id":"7085"},{"id":"7102"},{"id":"7122"},{"id":"7127"},{"id":"7150"},{"id":"7175"},{"id":"7203"},{"id":"7208"},{"id":"7239"},{"id":"7272"},{"id":"7307"},{"id":"7345"},{"id":"7384"},{"id":"7425"},{"id":"7468"},{"id":"7514"},{"id":"7561"},{"id":"7610"}],"title":{"id":"7025"},"toolbar":{"id":"7050"},"x_range":{"id":"7057"},"x_scale":{"id":"7031"},"y_range":{"id":"7058"},"y_scale":{"id":"7033"}},"id":"7024","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7306","type":"Line"},{"attributes":{},"id":"7142","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"7656"},"selection_policy":{"id":"7655"}},"id":"7607","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7465"},"glyph":{"id":"7466"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7467"},"selection_glyph":null,"view":{"id":"7469"}},"id":"7468","type":"GlyphRenderer"},{"attributes":{},"id":"7143","type":"Selection"},{"attributes":{},"id":"7043","type":"PanTool"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-base"},"renderers":[{"id":"7307"}]},"id":"7341","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7609","type":"Line"},{"attributes":{"source":{"id":"7607"}},"id":"7611","type":"CDSView"},{"attributes":{},"id":"7338","type":"UnionRenderers"},{"attributes":{},"id":"7339","type":"Selection"},{"attributes":{},"id":"7144","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7120","type":"Scatter"},{"attributes":{},"id":"7655","type":"UnionRenderers"},{"attributes":{"end":0.75},"id":"7057","type":"Range1d"},{"attributes":{"data_source":{"id":"7060"},"glyph":{"id":"7061"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7062"},"selection_glyph":null,"view":{"id":"7064"}},"id":"7063","type":"GlyphRenderer"},{"attributes":{},"id":"7145","type":"Selection"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"7076"},"selection_policy":{"id":"7075"}},"id":"7060","type":"ColumnDataSource"},{"attributes":{},"id":"7656","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7061","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7062","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7343","type":"Line"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":84.3},"id":"7199","type":"Label"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"7073"},"ticker":{"id":"7036"}},"id":"7035","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7065"},"glyph":{"id":"7066"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7067"},"selection_glyph":null,"view":{"id":"7069"}},"id":"7068","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"7379"},"selection_policy":{"id":"7378"}},"id":"7342","type":"ColumnDataSource"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"7118","type":"Label"},{"attributes":{"data_source":{"id":"7342"},"glyph":{"id":"7343"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7344"},"selection_glyph":null,"view":{"id":"7346"}},"id":"7345","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7060"}},"id":"7064","type":"CDSView"},{"attributes":{"data":{"x":[0.750694155218002,0.34656273890574396,0.247365299956507,0.186029553957332,0.131177042042143,0.0947351805073981,0.0602396365698101,0.0402606146574505,0.0284787168842778,0.0214990126796872,0.01685626988373],"y":[84.9210392256749,83.7289862455425,83.331635252165,82.41467142129389,81.7320427916454,81.13092205807429,80.6826286296485,79.9898115129903,79.4294447274579,79.1441670911869,78.7671930718288]},"selected":{"id":"7508"},"selection_policy":{"id":"7507"}},"id":"7465","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"7078"},"selection_policy":{"id":"7077"}},"id":"7065","type":"ColumnDataSource"},{"attributes":{},"id":"7031","type":"LinearScale"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7066","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7382","type":"Line"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"7059","type":"Label"},{"attributes":{"click_policy":"hide","items":[{"id":"7081"},{"id":"7341"},{"id":"7510"}],"location":"bottom_right"},"id":"7080","type":"Legend"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7423","type":"Line"},{"attributes":{"data_source":{"id":"7082"},"glyph":{"id":"7083"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7084"},"selection_glyph":null,"view":{"id":"7086"}},"id":"7085","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7148","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7173","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7344","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7067","type":"Line"},{"attributes":{"source":{"id":"7342"}},"id":"7346","type":"CDSView"},{"attributes":{"data_source":{"id":"7172"},"glyph":{"id":"7173"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7174"},"selection_glyph":null,"view":{"id":"7176"}},"id":"7175","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7381"},"glyph":{"id":"7382"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7383"},"selection_glyph":null,"view":{"id":"7385"}},"id":"7384","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7065"}},"id":"7069","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7149","type":"Line"},{"attributes":{"axis":{"id":"7035"},"ticker":null},"id":"7038","type":"Grid"},{"attributes":{"source":{"id":"7147"}},"id":"7151","type":"CDSView"},{"attributes":{},"id":"7378","type":"UnionRenderers"},{"attributes":{},"id":"7169","type":"UnionRenderers"},{"attributes":{},"id":"7379","type":"Selection"},{"attributes":{},"id":"7170","type":"Selection"},{"attributes":{},"id":"7071","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7206","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7467","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"7197"},"selection_policy":{"id":"7196"}},"id":"7172","type":"ColumnDataSource"},{"attributes":{},"id":"7033","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"7420"},"selection_policy":{"id":"7419"}},"id":"7381","type":"ColumnDataSource"},{"attributes":{},"id":"7036","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7174","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7383","type":"Line"},{"attributes":{"source":{"id":"7172"}},"id":"7176","type":"CDSView"},{"attributes":{"source":{"id":"7381"}},"id":"7385","type":"CDSView"},{"attributes":{"data_source":{"id":"7422"},"glyph":{"id":"7423"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7424"},"selection_glyph":null,"view":{"id":"7426"}},"id":"7425","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"7049"}},"id":"7045","type":"BoxZoomTool"},{"attributes":{},"id":"7196","type":"UnionRenderers"},{"attributes":{},"id":"7419","type":"UnionRenderers"},{"attributes":{},"id":"7048","type":"HelpTool"},{"attributes":{},"id":"7073","type":"BasicTickFormatter"},{"attributes":{},"id":"7197","type":"Selection"},{"attributes":{},"id":"7420","type":"Selection"},{"attributes":{},"id":"7075","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"7200"},"glyph":{"id":"7201"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7202"},"selection_glyph":null,"view":{"id":"7204"}},"id":"7203","type":"GlyphRenderer"},{"attributes":{},"id":"7076","type":"Selection"},{"attributes":{"data_source":{"id":"7205"},"glyph":{"id":"7206"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7207"},"selection_glyph":null,"view":{"id":"7209"}},"id":"7208","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7465"}},"id":"7469","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7202","type":"Scatter"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"7463"},"selection_policy":{"id":"7462"}},"id":"7422","type":"ColumnDataSource"},{"attributes":{},"id":"7046","type":"SaveTool"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"7025","type":"Title"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"7234"},"selection_policy":{"id":"7233"}},"id":"7205","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7200"}},"id":"7204","type":"CDSView"},{"attributes":{"data":{"x":[0.34212239583333326,0.2529296875,0.18093532986111116,0.12286603009259256],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"7339"},"selection_policy":{"id":"7338"}},"id":"7304","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7424","type":"Line"},{"attributes":{"source":{"id":"7422"}},"id":"7426","type":"CDSView"},{"attributes":{},"id":"7077","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"7236"},"glyph":{"id":"7237"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7238"},"selection_glyph":null,"view":{"id":"7240"}},"id":"7239","type":"GlyphRenderer"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7466","type":"Line"},{"attributes":{},"id":"7078","type":"Selection"},{"attributes":{},"id":"7044","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7207","type":"Line"},{"attributes":{},"id":"7462","type":"UnionRenderers"},{"attributes":{"source":{"id":"7205"}},"id":"7209","type":"CDSView"},{"attributes":{},"id":"7047","type":"ResetTool"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"7267"},"selection_policy":{"id":"7266"}},"id":"7236","type":"ColumnDataSource"},{"attributes":{},"id":"7463","type":"Selection"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"7068"},{"id":"7085"},{"id":"7102"},{"id":"7127"},{"id":"7150"},{"id":"7175"},{"id":"7208"},{"id":"7239"},{"id":"7272"},{"id":"7345"},{"id":"7384"},{"id":"7425"},{"id":"7514"},{"id":"7561"},{"id":"7610"}]},"id":"7081","type":"LegendItem"}],"root_ids":["7024"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"8f266ccd-fe32-45fa-b8b2-e23f3dcb275d","root_ids":["7024"],"roots":{"7024":"b5167afe-0888-4aa6-a478-194e220ad189"}}];
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