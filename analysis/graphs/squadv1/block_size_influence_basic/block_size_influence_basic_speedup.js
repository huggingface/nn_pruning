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
    
      
      
    
      var element = document.getElementById("fc9c4902-cefd-4996-9c85-43e7e5e58c01");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fc9c4902-cefd-4996-9c85-43e7e5e58c01' but no matching script tag was found.")
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
                    
                  var docs_json = '{"87d45ccf-79c5-4cac-b9ea-3f6ea61580c0":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31744","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31745","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31502","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31469","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31791","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"32178","type":"Line"},{"attributes":{"source":{"id":"31743"}},"id":"31747","type":"CDSView"},{"attributes":{},"id":"31378","type":"Selection"},{"attributes":{},"id":"31379","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31840","type":"Line"},{"attributes":{},"id":"31611","type":"Selection"},{"attributes":{},"id":"31612","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31470","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31945","type":"Line"},{"attributes":{"data_source":{"id":"31790"},"glyph":{"id":"31791"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31792"},"selection_glyph":null,"view":{"id":"31794"}},"id":"31793","type":"GlyphRenderer"},{"attributes":{"source":{"id":"31468"}},"id":"31472","type":"CDSView"},{"attributes":{"data_source":{"id":"31501"},"glyph":{"id":"31502"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31503"},"selection_glyph":null,"view":{"id":"31505"}},"id":"31504","type":"GlyphRenderer"},{"attributes":{},"id":"32174","type":"Selection"},{"attributes":{},"id":"31251","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"31997"},"selection_policy":{"id":"31998"}},"id":"31944","type":"ColumnDataSource"},{"attributes":{},"id":"32175","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"31944"},"glyph":{"id":"31945"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31946"},"selection_glyph":null,"view":{"id":"31948"}},"id":"31947","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"32174"},"selection_policy":{"id":"32175"}},"id":"32115","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"32000","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31655","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"32057","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31381","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31614","type":"Line"},{"attributes":{},"id":"31499","type":"Selection"},{"attributes":{"source":{"id":"31407"}},"id":"31411","type":"CDSView"},{"attributes":{},"id":"31500","type":"UnionRenderers"},{"attributes":{},"id":"31788","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31946","type":"Line"},{"attributes":{},"id":"31789","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31244","type":"Line"},{"attributes":{"source":{"id":"31944"}},"id":"31948","type":"CDSView"},{"attributes":{"data_source":{"id":"31999"},"glyph":{"id":"32000"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32001"},"selection_glyph":null,"view":{"id":"32003"}},"id":"32002","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31382","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31615","type":"Line"},{"attributes":{},"id":"31249","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"31380"}},"id":"31384","type":"CDSView"},{"attributes":{"source":{"id":"31613"}},"id":"31617","type":"CDSView"},{"attributes":{"data_source":{"id":"31654"},"glyph":{"id":"31655"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31656"},"selection_glyph":null,"view":{"id":"31658"}},"id":"31657","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31409","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"32238"},"selection_policy":{"id":"32239"}},"id":"32177","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"32177"},"glyph":{"id":"32178"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32179"},"selection_glyph":null,"view":{"id":"32181"}},"id":"32180","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"32241","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"31534"},"selection_policy":{"id":"31535"}},"id":"31501","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"32306","type":"Line"},{"attributes":{"source":{"id":"31536"}},"id":"31540","type":"CDSView"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"31837"},"selection_policy":{"id":"31838"}},"id":"31790","type":"ColumnDataSource"},{"attributes":{},"id":"31405","type":"Selection"},{"attributes":{"source":{"id":"31890"}},"id":"31894","type":"CDSView"},{"attributes":{},"id":"31406","type":"UnionRenderers"},{"attributes":{},"id":"31652","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"32179","type":"Line"},{"attributes":{},"id":"31653","type":"UnionRenderers"},{"attributes":{},"id":"31997","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31503","type":"Line"},{"attributes":{"source":{"id":"32177"}},"id":"32181","type":"CDSView"},{"attributes":{},"id":"31998","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"32240"},"glyph":{"id":"32241"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32242"},"selection_glyph":null,"view":{"id":"32244"}},"id":"32243","type":"GlyphRenderer"},{"attributes":{"source":{"id":"31501"}},"id":"31505","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31792","type":"Line"},{"attributes":{"below":[{"id":"31220"}],"center":[{"id":"31223"},{"id":"31227"},{"id":"31256"}],"left":[{"id":"31224"}],"plot_width":800,"renderers":[{"id":"31246"},{"id":"31261"},{"id":"31277"},{"id":"31294"},{"id":"31313"},{"id":"31335"},{"id":"31358"},{"id":"31383"},{"id":"31410"},{"id":"31440"},{"id":"31471"},{"id":"31504"},{"id":"31539"},{"id":"31577"},{"id":"31616"},{"id":"31657"},{"id":"31700"},{"id":"31746"},{"id":"31793"},{"id":"31842"},{"id":"31893"},{"id":"31947"},{"id":"32002"},{"id":"32059"},{"id":"32118"},{"id":"32180"},{"id":"32243"},{"id":"32308"}],"title":{"id":"31210"},"toolbar":{"id":"31235"},"x_range":{"id":"31242"},"x_scale":{"id":"31216"},"y_range":{"id":"31214"},"y_scale":{"id":"31218"}},"id":"31209","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31537","type":"Line"},{"attributes":{"source":{"id":"31790"}},"id":"31794","type":"CDSView"},{"attributes":{"data_source":{"id":"31839"},"glyph":{"id":"31840"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31841"},"selection_glyph":null,"view":{"id":"31843"}},"id":"31842","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31438","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"31695"},"selection_policy":{"id":"31696"}},"id":"31654","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"32054"},"selection_policy":{"id":"32055"}},"id":"31999","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"32118"}]},"id":"32176","type":"LegendItem"},{"attributes":{"source":{"id":"31697"}},"id":"31701","type":"CDSView"},{"attributes":{},"id":"31534","type":"Selection"},{"attributes":{"data_source":{"id":"31437"},"glyph":{"id":"31438"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31439"},"selection_glyph":null,"view":{"id":"31441"}},"id":"31440","type":"GlyphRenderer"},{"attributes":{},"id":"31535","type":"UnionRenderers"},{"attributes":{},"id":"31837","type":"Selection"},{"attributes":{},"id":"31838","type":"UnionRenderers"},{"attributes":{},"id":"32238","type":"Selection"},{"attributes":{},"id":"32239","type":"UnionRenderers"},{"attributes":{"label":{"value":"Block, bs= 16x16"},"renderers":[{"id":"31410"}]},"id":"31436","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31656","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"32001","type":"Line"},{"attributes":{"source":{"id":"31654"}},"id":"31658","type":"CDSView"},{"attributes":{"source":{"id":"31999"}},"id":"32003","type":"CDSView"},{"attributes":{"data_source":{"id":"32056"},"glyph":{"id":"32057"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32058"},"selection_glyph":null,"view":{"id":"32060"}},"id":"32059","type":"GlyphRenderer"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31698","type":"Line"},{"attributes":{},"id":"31434","type":"Selection"},{"attributes":{},"id":"31435","type":"UnionRenderers"},{"attributes":{"axis":{"id":"31224"},"dimension":1,"ticker":null},"id":"31227","type":"Grid"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31575","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31538","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"31888"},"selection_policy":{"id":"31889"}},"id":"31839","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"32303"},"selection_policy":{"id":"32304"}},"id":"32240","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31892","type":"Line"},{"attributes":{},"id":"31695","type":"Selection"},{"attributes":{},"id":"31696","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"31574"},"glyph":{"id":"31575"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31576"},"selection_glyph":null,"view":{"id":"31578"}},"id":"31577","type":"GlyphRenderer"},{"attributes":{},"id":"31225","type":"BasicTicker"},{"attributes":{},"id":"32054","type":"Selection"},{"attributes":{"source":{"id":"31243"}},"id":"31247","type":"CDSView"},{"attributes":{},"id":"32055","type":"UnionRenderers"},{"attributes":{"label":{"value":"Block, bs= 8x8"},"renderers":[{"id":"31539"}]},"id":"31573","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31841","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"32242","type":"Line"},{"attributes":{"source":{"id":"31839"}},"id":"31843","type":"CDSView"},{"attributes":{"source":{"id":"32240"}},"id":"32244","type":"CDSView"},{"attributes":{"data_source":{"id":"32305"},"glyph":{"id":"32306"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32307"},"selection_glyph":null,"view":{"id":"32309"}},"id":"32308","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.3059049623464731,1.319204091160467,1.5645594133095706,2.0060775865978457],"y":[88.02730364897265,87.861684752796,86.84949475139184,85.16652519097626]},"selected":{"id":"31571"},"selection_policy":{"id":"31572"}},"id":"31536","type":"ColumnDataSource"},{"attributes":{},"id":"31571","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"31466"},"selection_policy":{"id":"31467"}},"id":"31437","type":"ColumnDataSource"},{"attributes":{},"id":"31572","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"31536"},"glyph":{"id":"31537"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31538"},"selection_glyph":null,"view":{"id":"31540"}},"id":"31539","type":"GlyphRenderer"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31891","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31245","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"32113"},"selection_policy":{"id":"32114"}},"id":"32056","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"31468"},"glyph":{"id":"31469"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31470"},"selection_glyph":null,"view":{"id":"31472"}},"id":"31471","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31699","type":"Line"},{"attributes":{"source":{"id":"32115"}},"id":"32119","type":"CDSView"},{"attributes":{},"id":"31888","type":"Selection"},{"attributes":{},"id":"31889","type":"UnionRenderers"},{"attributes":{},"id":"32303","type":"Selection"},{"attributes":{},"id":"32304","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"32058","type":"Line"},{"attributes":{"axis_label":"F1","formatter":{"id":"31251"},"ticker":{"id":"31225"}},"id":"31224","type":"LinearAxis"},{"attributes":{"label":{"value":"Block, bs= 4x4"},"renderers":[{"id":"31700"}]},"id":"31742","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31439","type":"Line"},{"attributes":{"source":{"id":"31437"}},"id":"31441","type":"CDSView"},{"attributes":{"source":{"id":"32056"}},"id":"32060","type":"CDSView"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"32116","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"31499"},"selection_policy":{"id":"31500"}},"id":"31468","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.1538953400165994,1.302586687378539,1.5664666750452154,1.5668552712310941,1.5696177764204813],"y":[88.21768668110452,87.37325813950282,85.93146728512978,85.88482767255138,85.78500582028688]},"selected":{"id":"31740"},"selection_policy":{"id":"31741"}},"id":"31697","type":"ColumnDataSource"},{"attributes":{},"id":"31740","type":"Selection"},{"attributes":{"axis":{"id":"31220"},"ticker":null},"id":"31223","type":"Grid"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"31611"},"selection_policy":{"id":"31612"}},"id":"31574","type":"ColumnDataSource"},{"attributes":{},"id":"31741","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"31697"},"glyph":{"id":"31698"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31699"},"selection_glyph":null,"view":{"id":"31701"}},"id":"31700","type":"GlyphRenderer"},{"attributes":{},"id":"31216","type":"LinearScale"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"32370"},"selection_policy":{"id":"32371"}},"id":"32305","type":"ColumnDataSource"},{"attributes":{},"id":"32113","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"31652"},"selection_policy":{"id":"31653"}},"id":"31613","type":"ColumnDataSource"},{"attributes":{},"id":"32114","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"32115"},"glyph":{"id":"32116"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32117"},"selection_glyph":null,"view":{"id":"32119"}},"id":"32118","type":"GlyphRenderer"},{"attributes":{},"id":"31466","type":"Selection"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"31893"}]},"id":"31943","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"32307","type":"Line"},{"attributes":{},"id":"31467","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31576","type":"Line"},{"attributes":{"source":{"id":"32305"}},"id":"32309","type":"CDSView"},{"attributes":{"source":{"id":"31574"}},"id":"31578","type":"CDSView"},{"attributes":{"data_source":{"id":"31613"},"glyph":{"id":"31614"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31615"},"selection_glyph":null,"view":{"id":"31617"}},"id":"31616","type":"GlyphRenderer"},{"attributes":{},"id":"31941","type":"Selection"},{"attributes":{"data_source":{"id":"31743"},"glyph":{"id":"31744"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31745"},"selection_glyph":null,"view":{"id":"31747"}},"id":"31746","type":"GlyphRenderer"},{"attributes":{},"id":"31942","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"31788"},"selection_policy":{"id":"31789"}},"id":"31743","type":"ColumnDataSource"},{"attributes":{},"id":"32370","type":"Selection"},{"attributes":{"data":{"x":[1.9695394330694393,2.1003540884863323,2.1124331270315624,2.227490161916501,2.262663009764823,2.471023235070233,2.61711931355729,2.681246344578876,2.704854439028025,2.860446087610368,2.86191312967017],"y":[88.06903108265608,87.70461789964966,87.48291010744668,87.3881230572442,87.14755939306319,86.74156854566804,86.39441106336629,86.20063710644014,86.11992485005756,85.69020560735045,85.6109462422114]},"selected":{"id":"31941"},"selection_policy":{"id":"31942"}},"id":"31890","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"32117","type":"Line"},{"attributes":{},"id":"32371","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31292","type":"Line"},{"attributes":{"source":{"id":"31310"}},"id":"31314","type":"CDSView"},{"attributes":{},"id":"31214","type":"DataRange1d"},{"attributes":{"data_source":{"id":"31243"},"glyph":{"id":"31244"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31245"},"selection_glyph":null,"view":{"id":"31247"}},"id":"31246","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31293","type":"Line"},{"attributes":{"source":{"id":"31291"}},"id":"31295","type":"CDSView"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31311","type":"Line"},{"attributes":{},"id":"31254","type":"Selection"},{"attributes":{},"id":"31255","type":"UnionRenderers"},{"attributes":{},"id":"31308","type":"Selection"},{"attributes":{},"id":"31309","type":"UnionRenderers"},{"attributes":{},"id":"31221","type":"BasicTicker"},{"attributes":{"data":{"x":[1.559464313363606,1.599770932365684,1.9655458674518098,2.0054680821187447,2.2874144573134694,2.289378243109522],"y":[87.36378709007766,87.30735739624531,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"31329"},"selection_policy":{"id":"31330"}},"id":"31310","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31259","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31333","type":"Line"},{"attributes":{"data_source":{"id":"31258"},"glyph":{"id":"31259"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31260"},"selection_glyph":null,"view":{"id":"31262"}},"id":"31261","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31312","type":"Line"},{"attributes":{},"id":"31232","type":"ResetTool"},{"attributes":{"data_source":{"id":"31332"},"glyph":{"id":"31333"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31334"},"selection_glyph":null,"view":{"id":"31336"}},"id":"31335","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"31271"},"selection_policy":{"id":"31272"}},"id":"31258","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"31310"},"glyph":{"id":"31311"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31312"},"selection_glyph":null,"view":{"id":"31314"}},"id":"31313","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Block, bs= 32x32"},"renderers":[{"id":"31313"}]},"id":"31331","type":"LegendItem"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"31261"},{"id":"31277"},{"id":"31294"},{"id":"31335"},{"id":"31358"},{"id":"31383"},{"id":"31440"},{"id":"31471"},{"id":"31504"},{"id":"31577"},{"id":"31616"},{"id":"31657"},{"id":"31746"},{"id":"31793"},{"id":"31842"},{"id":"31947"},{"id":"32002"},{"id":"32059"},{"id":"32180"},{"id":"32243"},{"id":"32308"}]},"id":"31273","type":"LegendItem"},{"attributes":{},"id":"31228","type":"PanTool"},{"attributes":{},"id":"31233","type":"HelpTool"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31275","type":"Line"},{"attributes":{},"id":"31329","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31260","type":"Line"},{"attributes":{},"id":"31330","type":"UnionRenderers"},{"attributes":{},"id":"31231","type":"SaveTool"},{"attributes":{"source":{"id":"31258"}},"id":"31262","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"31234","type":"BoxAnnotation"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"31210","type":"Title"},{"attributes":{},"id":"31229","type":"WheelZoomTool"},{"attributes":{"data":{"x":[1.4665027478478643,1.8303357184393354],"y":[87.65780769915727,86.57822332702295]},"selected":{"id":"31434"},"selection_policy":{"id":"31435"}},"id":"31407","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"31353"},"selection_policy":{"id":"31354"}},"id":"31332","type":"ColumnDataSource"},{"attributes":{},"id":"31271","type":"Selection"},{"attributes":{},"id":"31218","type":"LinearScale"},{"attributes":{"data_source":{"id":"31407"},"glyph":{"id":"31408"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31409"},"selection_glyph":null,"view":{"id":"31411"}},"id":"31410","type":"GlyphRenderer"},{"attributes":{},"id":"31272","type":"UnionRenderers"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"31249"},"ticker":{"id":"31221"}},"id":"31220","type":"LinearAxis"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31356","type":"Line"},{"attributes":{"data_source":{"id":"31355"},"glyph":{"id":"31356"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31357"},"selection_glyph":null,"view":{"id":"31359"}},"id":"31358","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31334","type":"Line"},{"attributes":{"data_source":{"id":"31890"},"glyph":{"id":"31891"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31892"},"selection_glyph":null,"view":{"id":"31894"}},"id":"31893","type":"GlyphRenderer"},{"attributes":{"source":{"id":"31332"}},"id":"31336","type":"CDSView"},{"attributes":{"data_source":{"id":"31274"},"glyph":{"id":"31275"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31276"},"selection_glyph":null,"view":{"id":"31278"}},"id":"31277","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"31308"},"selection_policy":{"id":"31309"}},"id":"31291","type":"ColumnDataSource"},{"attributes":{"end":3.25,"start":0.75},"id":"31242","type":"Range1d"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"31408","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"31289"},"selection_policy":{"id":"31290"}},"id":"31274","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31276","type":"Line"},{"attributes":{},"id":"31353","type":"Selection"},{"attributes":{"overlay":{"id":"31234"}},"id":"31230","type":"BoxZoomTool"},{"attributes":{"source":{"id":"31274"}},"id":"31278","type":"CDSView"},{"attributes":{},"id":"31354","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"31291"},"glyph":{"id":"31292"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31293"},"selection_glyph":null,"view":{"id":"31295"}},"id":"31294","type":"GlyphRenderer"},{"attributes":{},"id":"31289","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"31378"},"selection_policy":{"id":"31379"}},"id":"31355","type":"ColumnDataSource"},{"attributes":{},"id":"31290","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"31405"},"selection_policy":{"id":"31406"}},"id":"31380","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"31228"},{"id":"31229"},{"id":"31230"},{"id":"31231"},{"id":"31232"},{"id":"31233"}]},"id":"31235","type":"Toolbar"},{"attributes":{"data_source":{"id":"31380"},"glyph":{"id":"31381"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31382"},"selection_glyph":null,"view":{"id":"31384"}},"id":"31383","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.9840340185670864,1.026141974757969,1.095528107464865,1.1632636047982534,1.170038217254783,1.2607211638158147,1.3349999991845345,1.3926143255719736,1.5170581452285046],"y":[90.24019516114679,89.78322305629628,88.66959543954316,88.11360890595924,87.64967103979136,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"31254"},"selection_policy":{"id":"31255"}},"id":"31243","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31357","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"31257"},{"id":"31273"},{"id":"31331"},{"id":"31436"},{"id":"31573"},{"id":"31742"},{"id":"31943"},{"id":"32176"}]},"id":"31256","type":"Legend"},{"attributes":{"source":{"id":"31355"}},"id":"31359","type":"CDSView"},{"attributes":{"label":{"value":"Unstructured Soft Movement Pruning"},"renderers":[{"id":"31246"}]},"id":"31257","type":"LegendItem"}],"root_ids":["31209"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"87d45ccf-79c5-4cac-b9ea-3f6ea61580c0","root_ids":["31209"],"roots":{"31209":"fc9c4902-cefd-4996-9c85-43e7e5e58c01"}}];
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