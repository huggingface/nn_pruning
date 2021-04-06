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
    
      
      
    
      var element = document.getElementById("0eeede07-a494-4480-ab4c-a02c82fe1f90");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0eeede07-a494-4480-ab4c-a02c82fe1f90' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6631e114-dbbf-402b-8507-9ae517b06f21":{"roots":{"references":[{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13726","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13767","type":"Line"},{"attributes":{"source":{"id":"13686"}},"id":"13690","type":"CDSView"},{"attributes":{"data_source":{"id":"13725"},"glyph":{"id":"13726"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13727"},"selection_glyph":null,"view":{"id":"13729"}},"id":"13728","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"13379"},"ticker":null},"id":"13382","type":"Grid"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13614","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13581","type":"Line"},{"attributes":{},"id":"13723","type":"Selection"},{"attributes":{},"id":"13724","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"13422"},"selection_policy":{"id":"13423"}},"id":"13409","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13582","type":"Line"},{"attributes":{"source":{"id":"13580"}},"id":"13584","type":"CDSView"},{"attributes":{"data_source":{"id":"13613"},"glyph":{"id":"13614"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13615"},"selection_glyph":null,"view":{"id":"13617"}},"id":"13616","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"13764"},"selection_policy":{"id":"13765"}},"id":"13725","type":"ColumnDataSource"},{"attributes":{},"id":"13611","type":"Selection"},{"attributes":{},"id":"13612","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13727","type":"Line"},{"attributes":{"source":{"id":"13725"}},"id":"13729","type":"CDSView"},{"attributes":{"data_source":{"id":"13766"},"glyph":{"id":"13767"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13768"},"selection_glyph":null,"view":{"id":"13770"}},"id":"13769","type":"GlyphRenderer"},{"attributes":{"end":0.75},"id":"13401","type":"Range1d"},{"attributes":{},"id":"13380","type":"BasicTicker"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"13646"},"selection_policy":{"id":"13647"}},"id":"13613","type":"ColumnDataSource"},{"attributes":{"source":{"id":"13648"}},"id":"13652","type":"CDSView"},{"attributes":{},"id":"13764","type":"Selection"},{"attributes":{},"id":"13765","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13615","type":"Line"},{"attributes":{"source":{"id":"13613"}},"id":"13617","type":"CDSView"},{"attributes":{"source":{"id":"13426"}},"id":"13430","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"13649","type":"Line"},{"attributes":{"data_source":{"id":"13443"},"glyph":{"id":"13444"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13445"},"selection_glyph":null,"view":{"id":"13447"}},"id":"13446","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"13460"},"selection_policy":{"id":"13461"}},"id":"13443","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"13807"},"selection_policy":{"id":"13808"}},"id":"13766","type":"ColumnDataSource"},{"attributes":{},"id":"13646","type":"Selection"},{"attributes":{"source":{"id":"13809"}},"id":"13813","type":"CDSView"},{"attributes":{},"id":"13647","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13768","type":"Line"},{"attributes":{"source":{"id":"13766"}},"id":"13770","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"13810","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13687","type":"Line"},{"attributes":{"below":[{"id":"13379"}],"center":[{"id":"13382"},{"id":"13386"},{"id":"13403"},{"id":"13424"},{"id":"13462"},{"id":"13543"}],"left":[{"id":"13383"}],"plot_width":800,"renderers":[{"id":"13407"},{"id":"13412"},{"id":"13429"},{"id":"13446"},{"id":"13466"},{"id":"13471"},{"id":"13494"},{"id":"13519"},{"id":"13547"},{"id":"13552"},{"id":"13583"},{"id":"13616"},{"id":"13651"},{"id":"13689"},{"id":"13728"},{"id":"13769"},{"id":"13812"},{"id":"13858"},{"id":"13905"},{"id":"13954"}],"title":{"id":"13369"},"toolbar":{"id":"13394"},"x_range":{"id":"13401"},"x_scale":{"id":"13375"},"y_range":{"id":"13402"},"y_scale":{"id":"13377"}},"id":"13368","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"13391","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"13650","type":"Line"},{"attributes":{},"id":"13807","type":"Selection"},{"attributes":{},"id":"13808","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13686"},"glyph":{"id":"13687"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13688"},"selection_glyph":null,"view":{"id":"13690"}},"id":"13689","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Original Soft Movement"},"renderers":[{"id":"13651"}]},"id":"13685","type":"LegendItem"},{"attributes":{},"id":"13388","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13428","type":"Line"},{"attributes":{},"id":"13683","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13387"},{"id":"13388"},{"id":"13389"},{"id":"13390"},{"id":"13391"},{"id":"13392"}]},"id":"13394","type":"Toolbar"},{"attributes":{},"id":"13387","type":"PanTool"},{"attributes":{},"id":"13684","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13648"},"glyph":{"id":"13649"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13650"},"selection_glyph":null,"view":{"id":"13652"}},"id":"13651","type":"GlyphRenderer"},{"attributes":{},"id":"13392","type":"HelpTool"},{"attributes":{"axis":{"id":"13383"},"dimension":1,"ticker":null},"id":"13386","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"13811","type":"Line"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"13812"}]},"id":"13854","type":"LegendItem"},{"attributes":{},"id":"13384","type":"BasicTicker"},{"attributes":{"axis_label":"Matched","formatter":{"id":"13417"},"ticker":{"id":"13384"}},"id":"13383","type":"LinearAxis"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"13852"},"selection_policy":{"id":"13853"}},"id":"13809","type":"ColumnDataSource"},{"attributes":{"end":86,"start":79},"id":"13402","type":"Range1d"},{"attributes":{},"id":"13852","type":"Selection"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"13412"},{"id":"13429"},{"id":"13446"},{"id":"13471"},{"id":"13494"},{"id":"13519"},{"id":"13552"},{"id":"13583"},{"id":"13616"},{"id":"13689"},{"id":"13728"},{"id":"13769"},{"id":"13858"},{"id":"13905"},{"id":"13954"}]},"id":"13425","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"13723"},"selection_policy":{"id":"13724"}},"id":"13686","type":"ColumnDataSource"},{"attributes":{},"id":"13853","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13809"},"glyph":{"id":"13810"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13811"},"selection_glyph":null,"view":{"id":"13813"}},"id":"13812","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13688","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13411","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"13425"},{"id":"13685"},{"id":"13854"}],"location":"bottom_right"},"id":"13424","type":"Legend"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13492","type":"Line"},{"attributes":{},"id":"13442","type":"UnionRenderers"},{"attributes":{"source":{"id":"13409"}},"id":"13413","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13517","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"13441"},"selection_policy":{"id":"13442"}},"id":"13426","type":"ColumnDataSource"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"13415"},"ticker":{"id":"13380"}},"id":"13379","type":"LinearAxis"},{"attributes":{"data_source":{"id":"13516"},"glyph":{"id":"13517"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13518"},"selection_glyph":null,"view":{"id":"13520"}},"id":"13519","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13856","type":"Line"},{"attributes":{"data_source":{"id":"13426"},"glyph":{"id":"13427"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13428"},"selection_glyph":null,"view":{"id":"13430"}},"id":"13429","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13493","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"13900"},"selection_policy":{"id":"13901"}},"id":"13855","type":"ColumnDataSource"},{"attributes":{},"id":"13377","type":"LinearScale"},{"attributes":{"source":{"id":"13491"}},"id":"13495","type":"CDSView"},{"attributes":{"data_source":{"id":"13855"},"glyph":{"id":"13856"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13857"},"selection_glyph":null,"view":{"id":"13859"}},"id":"13858","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13406","type":"Scatter"},{"attributes":{},"id":"13415","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13903","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13952","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13444","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13464","type":"Scatter"},{"attributes":{},"id":"13514","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13469","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13857","type":"Line"},{"attributes":{},"id":"13515","type":"UnionRenderers"},{"attributes":{"source":{"id":"13855"}},"id":"13859","type":"CDSView"},{"attributes":{"data_source":{"id":"13902"},"glyph":{"id":"13903"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13904"},"selection_glyph":null,"view":{"id":"13906"}},"id":"13905","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13445","type":"Line"},{"attributes":{"source":{"id":"13443"}},"id":"13447","type":"CDSView"},{"attributes":{},"id":"13417","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"13489"},"selection_policy":{"id":"13490"}},"id":"13468","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"13420"},"selection_policy":{"id":"13421"}},"id":"13404","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"13541"},"selection_policy":{"id":"13542"}},"id":"13516","type":"ColumnDataSource"},{"attributes":{},"id":"13900","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13550","type":"Line"},{"attributes":{},"id":"13460","type":"Selection"},{"attributes":{},"id":"13901","type":"UnionRenderers"},{"attributes":{},"id":"13461","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13518","type":"Line"},{"attributes":{"source":{"id":"13516"}},"id":"13520","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"13393","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13465","type":"Scatter"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"13949"},"selection_policy":{"id":"13950"}},"id":"13902","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"13487"},"selection_policy":{"id":"13488"}},"id":"13463","type":"ColumnDataSource"},{"attributes":{},"id":"13541","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13545","type":"Scatter"},{"attributes":{},"id":"13542","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"13393"}},"id":"13389","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"13468"},"glyph":{"id":"13469"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13470"},"selection_glyph":null,"view":{"id":"13472"}},"id":"13471","type":"GlyphRenderer"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"13403","type":"Label"},{"attributes":{"source":{"id":"13463"}},"id":"13467","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13904","type":"Line"},{"attributes":{"data_source":{"id":"13463"},"glyph":{"id":"13464"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13465"},"selection_glyph":null,"view":{"id":"13467"}},"id":"13466","type":"GlyphRenderer"},{"attributes":{"source":{"id":"13902"}},"id":"13906","type":"CDSView"},{"attributes":{"data_source":{"id":"13951"},"glyph":{"id":"13952"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13953"},"selection_glyph":null,"view":{"id":"13955"}},"id":"13954","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[84.3]},"selected":{"id":"13576"},"selection_policy":{"id":"13577"}},"id":"13544","type":"ColumnDataSource"},{"attributes":{},"id":"13375","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"13514"},"selection_policy":{"id":"13515"}},"id":"13491","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"13491"},"glyph":{"id":"13492"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13493"},"selection_glyph":null,"view":{"id":"13495"}},"id":"13494","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"13578"},"selection_policy":{"id":"13579"}},"id":"13549","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13470","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13546","type":"Scatter"},{"attributes":{},"id":"13949","type":"Selection"},{"attributes":{"data_source":{"id":"13549"},"glyph":{"id":"13550"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13551"},"selection_glyph":null,"view":{"id":"13553"}},"id":"13552","type":"GlyphRenderer"},{"attributes":{"source":{"id":"13468"}},"id":"13472","type":"CDSView"},{"attributes":{},"id":"13950","type":"UnionRenderers"},{"attributes":{"source":{"id":"13544"}},"id":"13548","type":"CDSView"},{"attributes":{"data_source":{"id":"13544"},"glyph":{"id":"13545"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13546"},"selection_glyph":null,"view":{"id":"13548"}},"id":"13547","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.750694155218002,0.34656273890574396,0.247365299956507,0.186029553957332,0.131177042042143,0.0947351805073981,0.0602396365698101,0.0402606146574505,0.0284787168842778,0.0214990126796872,0.01685626988373],"y":[84.9210392256749,83.7289862455425,83.331635252165,82.41467142129389,81.7320427916454,81.13092205807429,80.6826286296485,79.9898115129903,79.4294447274579,79.1441670911869,78.7671930718288]},"selected":{"id":"13683"},"selection_policy":{"id":"13684"}},"id":"13648","type":"ColumnDataSource"},{"attributes":{},"id":"13420","type":"Selection"},{"attributes":{},"id":"13421","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13580"},"glyph":{"id":"13581"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13582"},"selection_glyph":null,"view":{"id":"13584"}},"id":"13583","type":"GlyphRenderer"},{"attributes":{},"id":"13441","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13551","type":"Line"},{"attributes":{"source":{"id":"13549"}},"id":"13553","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"14000"},"selection_policy":{"id":"14001"}},"id":"13951","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"13611"},"selection_policy":{"id":"13612"}},"id":"13580","type":"ColumnDataSource"},{"attributes":{},"id":"13422","type":"Selection"},{"attributes":{},"id":"13487","type":"Selection"},{"attributes":{},"id":"13423","type":"UnionRenderers"},{"attributes":{},"id":"13488","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13410","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13953","type":"Line"},{"attributes":{"source":{"id":"13951"}},"id":"13955","type":"CDSView"},{"attributes":{},"id":"13489","type":"Selection"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"13369","type":"Title"},{"attributes":{},"id":"13490","type":"UnionRenderers"},{"attributes":{},"id":"13576","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13405","type":"Scatter"},{"attributes":{},"id":"13577","type":"UnionRenderers"},{"attributes":{},"id":"14000","type":"Selection"},{"attributes":{},"id":"14001","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13409"},"glyph":{"id":"13410"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13411"},"selection_glyph":null,"view":{"id":"13413"}},"id":"13412","type":"GlyphRenderer"},{"attributes":{},"id":"13390","type":"SaveTool"},{"attributes":{},"id":"13578","type":"Selection"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":84.3},"id":"13543","type":"Label"},{"attributes":{},"id":"13579","type":"UnionRenderers"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"13462","type":"Label"},{"attributes":{"source":{"id":"13404"}},"id":"13408","type":"CDSView"},{"attributes":{"data_source":{"id":"13404"},"glyph":{"id":"13405"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13406"},"selection_glyph":null,"view":{"id":"13408"}},"id":"13407","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"13427","type":"Line"}],"root_ids":["13368"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"6631e114-dbbf-402b-8507-9ae517b06f21","root_ids":["13368"],"roots":{"13368":"0eeede07-a494-4480-ab4c-a02c82fe1f90"}}];
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