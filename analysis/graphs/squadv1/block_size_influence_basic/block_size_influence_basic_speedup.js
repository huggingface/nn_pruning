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
    
      
      
    
      var element = document.getElementById("f29fd01e-4355-4e2d-965f-175cf7e65389");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f29fd01e-4355-4e2d-965f-175cf7e65389' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0fc630fd-1003-47e6-bd1f-daf878e67d85":{"roots":{"references":[{"attributes":{"end":3.25,"start":0.75},"id":"16395","type":"Range1d"},{"attributes":{},"id":"16941","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16808","type":"Line"},{"attributes":{},"id":"16942","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16767","type":"Line"},{"attributes":{},"id":"16384","type":"SaveTool"},{"attributes":{},"id":"16385","type":"ResetTool"},{"attributes":{},"id":"16382","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16768","type":"Line"},{"attributes":{},"id":"16386","type":"HelpTool"},{"attributes":{"source":{"id":"16766"}},"id":"16770","type":"CDSView"},{"attributes":{"data_source":{"id":"16807"},"glyph":{"id":"16808"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16809"},"selection_glyph":null,"view":{"id":"16811"}},"id":"16810","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"16387","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16381"},{"id":"16382"},{"id":"16383"},{"id":"16384"},{"id":"16385"},{"id":"16386"}]},"id":"16388","type":"Toolbar"},{"attributes":{"data":{"x":[1.559464313363606,1.599770932365684,1.9655458674518098,2.0054680821187447,2.2874144573134694,2.289378243109522],"y":[87.36378709007766,87.30735739624531,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"16483"},"selection_policy":{"id":"16482"}},"id":"16463","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"16387"}},"id":"16383","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16398","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16412","type":"Line"},{"attributes":{"data_source":{"id":"16411"},"glyph":{"id":"16412"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16413"},"selection_glyph":null,"view":{"id":"16415"}},"id":"16414","type":"GlyphRenderer"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16397","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16993","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16944","type":"Line"},{"attributes":{},"id":"16805","type":"UnionRenderers"},{"attributes":{"source":{"id":"17043"}},"id":"17047","type":"CDSView"},{"attributes":{},"id":"16806","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"16425"},"selection_policy":{"id":"16424"}},"id":"16411","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"16463"},"glyph":{"id":"16464"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16465"},"selection_glyph":null,"view":{"id":"16467"}},"id":"16466","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16945","type":"Line"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"16414"},{"id":"16430"},{"id":"16447"},{"id":"16488"},{"id":"16511"},{"id":"16536"},{"id":"16593"},{"id":"16624"},{"id":"16657"},{"id":"16730"},{"id":"16769"},{"id":"16810"},{"id":"16899"},{"id":"16946"},{"id":"16995"},{"id":"17100"},{"id":"17155"},{"id":"17212"},{"id":"17333"},{"id":"17396"},{"id":"17461"}]},"id":"16426","type":"LegendItem"},{"attributes":{"source":{"id":"16943"}},"id":"16947","type":"CDSView"},{"attributes":{"data_source":{"id":"16992"},"glyph":{"id":"16993"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16994"},"selection_glyph":null,"view":{"id":"16996"}},"id":"16995","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16428","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16413","type":"Line"},{"attributes":{"source":{"id":"16411"}},"id":"16415","type":"CDSView"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"16849"},"selection_policy":{"id":"16848"}},"id":"16807","type":"ColumnDataSource"},{"attributes":{"source":{"id":"16850"}},"id":"16854","type":"CDSView"},{"attributes":{},"id":"16990","type":"UnionRenderers"},{"attributes":{},"id":"16991","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16809","type":"Line"},{"attributes":{"source":{"id":"16807"}},"id":"16811","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16851","type":"Line"},{"attributes":{},"id":"16424","type":"UnionRenderers"},{"attributes":{},"id":"16425","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"17042"},"selection_policy":{"id":"17041"}},"id":"16992","type":"ColumnDataSource"},{"attributes":{},"id":"16848","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"17045","type":"Line"},{"attributes":{},"id":"16849","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16994","type":"Line"},{"attributes":{"source":{"id":"16992"}},"id":"16996","type":"CDSView"},{"attributes":{"axis_label":"F1","formatter":{"id":"16402"},"ticker":{"id":"16378"}},"id":"16377","type":"LinearAxis"},{"attributes":{"data_source":{"id":"16427"},"glyph":{"id":"16428"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16429"},"selection_glyph":null,"view":{"id":"16431"}},"id":"16430","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16445","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16897","type":"Line"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16561","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"16443"},"selection_policy":{"id":"16442"}},"id":"16427","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16852","type":"Line"},{"attributes":{},"id":"17041","type":"UnionRenderers"},{"attributes":{},"id":"17042","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16429","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 4x4"},"renderers":[{"id":"16853"}]},"id":"16895","type":"LegendItem"},{"attributes":{"source":{"id":"16427"}},"id":"16431","type":"CDSView"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"16404"},"ticker":{"id":"16374"}},"id":"16373","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16465","type":"Line"},{"attributes":{},"id":"16893","type":"UnionRenderers"},{"attributes":{},"id":"16894","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17098","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"16410"},{"id":"16426"},{"id":"16484"},{"id":"16589"},{"id":"16726"},{"id":"16895"},{"id":"17096"},{"id":"17329"}]},"id":"16409","type":"Legend"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"17328"},"selection_policy":{"id":"17327"}},"id":"17268","type":"ColumnDataSource"},{"attributes":{},"id":"16404","type":"BasicTickFormatter"},{"attributes":{},"id":"16442","type":"UnionRenderers"},{"attributes":{},"id":"16443","type":"Selection"},{"attributes":{"label":{"value":"Unstructured Soft Movement Pruning"},"renderers":[{"id":"16399"}]},"id":"16410","type":"LegendItem"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"17046"}]},"id":"17096","type":"LegendItem"},{"attributes":{"data_source":{"id":"17043"},"glyph":{"id":"17044"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17045"},"selection_glyph":null,"view":{"id":"17047"}},"id":"17046","type":"GlyphRenderer"},{"attributes":{},"id":"17094","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"17044","type":"Line"},{"attributes":{},"id":"17095","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"16942"},"selection_policy":{"id":"16941"}},"id":"16896","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"16896"},"glyph":{"id":"16897"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16898"},"selection_glyph":null,"view":{"id":"16900"}},"id":"16899","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"16444"},"glyph":{"id":"16445"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16446"},"selection_glyph":null,"view":{"id":"16448"}},"id":"16447","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9695394330694393,2.1003540884863323,2.1124331270315624,2.227490161916501,2.262663009764823,2.471023235070233,2.61711931355729,2.681246344578876,2.704854439028025,2.860446087610368,2.86191312967017],"y":[88.06903108265608,87.70461789964966,87.48291010744668,87.3881230572442,87.14755939306319,86.74156854566804,86.39441106336629,86.20063710644014,86.11992485005756,85.69020560735045,85.6109462422114]},"selected":{"id":"17095"},"selection_policy":{"id":"17094"}},"id":"17043","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"16991"},"selection_policy":{"id":"16990"}},"id":"16943","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"16462"},"selection_policy":{"id":"16461"}},"id":"16444","type":"ColumnDataSource"},{"attributes":{"source":{"id":"16463"}},"id":"16467","type":"CDSView"},{"attributes":{},"id":"16407","type":"UnionRenderers"},{"attributes":{"source":{"id":"16396"}},"id":"16400","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16898","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16446","type":"Line"},{"attributes":{"source":{"id":"16896"}},"id":"16900","type":"CDSView"},{"attributes":{"data_source":{"id":"16943"},"glyph":{"id":"16944"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16945"},"selection_glyph":null,"view":{"id":"16947"}},"id":"16946","type":"GlyphRenderer"},{"attributes":{"source":{"id":"16444"}},"id":"16448","type":"CDSView"},{"attributes":{},"id":"16408","type":"Selection"},{"attributes":{"axis":{"id":"16373"},"ticker":null},"id":"16376","type":"Grid"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16464","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"17151"},"selection_policy":{"id":"17150"}},"id":"17097","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17097"},"glyph":{"id":"17098"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17099"},"selection_glyph":null,"view":{"id":"17101"}},"id":"17100","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"17268"},"glyph":{"id":"17269"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17270"},"selection_glyph":null,"view":{"id":"17272"}},"id":"17271","type":"GlyphRenderer"},{"attributes":{},"id":"16374","type":"BasicTicker"},{"attributes":{},"id":"16461","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"16396"},"glyph":{"id":"16397"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16398"},"selection_glyph":null,"view":{"id":"16400"}},"id":"16399","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17099","type":"Line"},{"attributes":{},"id":"16462","type":"Selection"},{"attributes":{},"id":"16653","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16534","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17153","type":"Line"},{"attributes":{"source":{"id":"16560"}},"id":"16564","type":"CDSView"},{"attributes":{"source":{"id":"17097"}},"id":"17101","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17210","type":"Line"},{"attributes":{"data_source":{"id":"17152"},"glyph":{"id":"17153"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17154"},"selection_glyph":null,"view":{"id":"17156"}},"id":"17155","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16535","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17331","type":"Line"},{"attributes":{"source":{"id":"16533"}},"id":"16537","type":"CDSView"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"17392"},"selection_policy":{"id":"17391"}},"id":"17330","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16562","type":"Line"},{"attributes":{"data_source":{"id":"17330"},"glyph":{"id":"17331"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17332"},"selection_glyph":null,"view":{"id":"17334"}},"id":"17333","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17394","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16486","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16655","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17459","type":"Line"},{"attributes":{"source":{"id":"16689"}},"id":"16693","type":"CDSView"},{"attributes":{},"id":"16558","type":"UnionRenderers"},{"attributes":{},"id":"17150","type":"UnionRenderers"},{"attributes":{},"id":"16559","type":"Selection"},{"attributes":{},"id":"17151","type":"Selection"},{"attributes":{"data_source":{"id":"16485"},"glyph":{"id":"16486"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16487"},"selection_glyph":null,"view":{"id":"16489"}},"id":"16488","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17332","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16656","type":"Line"},{"attributes":{"source":{"id":"17330"}},"id":"17334","type":"CDSView"},{"attributes":{"data_source":{"id":"17393"},"glyph":{"id":"17394"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17395"},"selection_glyph":null,"view":{"id":"17397"}},"id":"17396","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Block, bs= 32x32"},"renderers":[{"id":"16466"}]},"id":"16484","type":"LegendItem"},{"attributes":{"source":{"id":"16654"}},"id":"16658","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16690","type":"Line"},{"attributes":{},"id":"16371","type":"LinearScale"},{"attributes":{},"id":"16482","type":"UnionRenderers"},{"attributes":{},"id":"16483","type":"Selection"},{"attributes":{"below":[{"id":"16373"}],"center":[{"id":"16376"},{"id":"16380"},{"id":"16409"}],"left":[{"id":"16377"}],"plot_width":800,"renderers":[{"id":"16399"},{"id":"16414"},{"id":"16430"},{"id":"16447"},{"id":"16466"},{"id":"16488"},{"id":"16511"},{"id":"16536"},{"id":"16563"},{"id":"16593"},{"id":"16624"},{"id":"16657"},{"id":"16692"},{"id":"16730"},{"id":"16769"},{"id":"16810"},{"id":"16853"},{"id":"16899"},{"id":"16946"},{"id":"16995"},{"id":"17046"},{"id":"17100"},{"id":"17155"},{"id":"17212"},{"id":"17271"},{"id":"17333"},{"id":"17396"},{"id":"17461"}],"title":{"id":"16363"},"toolbar":{"id":"16388"},"x_range":{"id":"16395"},"x_scale":{"id":"16369"},"y_range":{"id":"16367"},"y_scale":{"id":"16371"}},"id":"16362","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16591","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"17208"},"selection_policy":{"id":"17207"}},"id":"17152","type":"ColumnDataSource"},{"attributes":{},"id":"16687","type":"UnionRenderers"},{"attributes":{},"id":"16688","type":"Selection"},{"attributes":{},"id":"17391","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"16590"},"glyph":{"id":"16591"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16592"},"selection_glyph":null,"view":{"id":"16594"}},"id":"16593","type":"GlyphRenderer"},{"attributes":{},"id":"17392","type":"Selection"},{"attributes":{"label":{"value":"Block, bs= 16x16"},"renderers":[{"id":"16563"}]},"id":"16589","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17154","type":"Line"},{"attributes":{"source":{"id":"17152"}},"id":"17156","type":"CDSView"},{"attributes":{"data_source":{"id":"17209"},"glyph":{"id":"17210"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17211"},"selection_glyph":null,"view":{"id":"17213"}},"id":"17212","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.4665027478478643,1.8303357184393354],"y":[87.65780769915727,86.57822332702295]},"selected":{"id":"16588"},"selection_policy":{"id":"16587"}},"id":"16560","type":"ColumnDataSource"},{"attributes":{},"id":"16587","type":"UnionRenderers"},{"attributes":{},"id":"16588","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"16507"},"selection_policy":{"id":"16506"}},"id":"16485","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16728","type":"Line"},{"attributes":{"data_source":{"id":"16560"},"glyph":{"id":"16561"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16562"},"selection_glyph":null,"view":{"id":"16564"}},"id":"16563","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16691","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"17457"},"selection_policy":{"id":"17456"}},"id":"17393","type":"ColumnDataSource"},{"attributes":{},"id":"17207","type":"UnionRenderers"},{"attributes":{},"id":"17208","type":"Selection"},{"attributes":{},"id":"16381","type":"PanTool"},{"attributes":{"data_source":{"id":"16727"},"glyph":{"id":"16728"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16729"},"selection_glyph":null,"view":{"id":"16731"}},"id":"16730","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16509","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 8x8"},"renderers":[{"id":"16692"}]},"id":"16726","type":"LegendItem"},{"attributes":{"data_source":{"id":"16508"},"glyph":{"id":"16509"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16510"},"selection_glyph":null,"view":{"id":"16512"}},"id":"16511","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17395","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16487","type":"Line"},{"attributes":{"source":{"id":"17393"}},"id":"17397","type":"CDSView"},{"attributes":{"data_source":{"id":"17458"},"glyph":{"id":"17459"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17460"},"selection_glyph":null,"view":{"id":"17462"}},"id":"17461","type":"GlyphRenderer"},{"attributes":{"source":{"id":"16485"}},"id":"16489","type":"CDSView"},{"attributes":{"data":{"x":[1.3059049623464731,1.319204091160467,1.5645594133095706,2.0060775865978457],"y":[88.02730364897265,87.861684752796,86.84949475139184,85.16652519097626]},"selected":{"id":"16725"},"selection_policy":{"id":"16724"}},"id":"16689","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.9840340185670864,1.026141974757969,1.095528107464865,1.1632636047982534,1.170038217254783,1.2607211638158147,1.3349999991845345,1.3926143255719736,1.5170581452285046],"y":[90.24019516114679,89.78322305629628,88.66959543954316,88.11360890595924,87.64967103979136,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"16408"},"selection_policy":{"id":"16407"}},"id":"16396","type":"ColumnDataSource"},{"attributes":{},"id":"16724","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"16620"},"selection_policy":{"id":"16619"}},"id":"16590","type":"ColumnDataSource"},{"attributes":{},"id":"16725","type":"Selection"},{"attributes":{},"id":"16369","type":"LinearScale"},{"attributes":{"data_source":{"id":"16689"},"glyph":{"id":"16690"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16691"},"selection_glyph":null,"view":{"id":"16693"}},"id":"16692","type":"GlyphRenderer"},{"attributes":{},"id":"16402","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"17267"},"selection_policy":{"id":"17266"}},"id":"17209","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"16621"},"glyph":{"id":"16622"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16623"},"selection_glyph":null,"view":{"id":"16625"}},"id":"16624","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17268"}},"id":"17272","type":"CDSView"},{"attributes":{},"id":"17456","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"16688"},"selection_policy":{"id":"16687"}},"id":"16654","type":"ColumnDataSource"},{"attributes":{},"id":"17457","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17211","type":"Line"},{"attributes":{},"id":"16506","type":"UnionRenderers"},{"attributes":{},"id":"16378","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16592","type":"Line"},{"attributes":{"source":{"id":"17209"}},"id":"17213","type":"CDSView"},{"attributes":{"source":{"id":"16590"}},"id":"16594","type":"CDSView"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"17269","type":"Line"},{"attributes":{},"id":"16507","type":"Selection"},{"attributes":{"data":{"x":[1.1538953400165994,1.302586687378539,1.5664666750452154,1.5668552712310941,1.5696177764204813],"y":[88.21768668110452,87.37325813950282,85.93146728512978,85.88482767255138,85.78500582028688]},"selected":{"id":"16894"},"selection_policy":{"id":"16893"}},"id":"16850","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"16765"},"selection_policy":{"id":"16764"}},"id":"16727","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"16850"},"glyph":{"id":"16851"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16852"},"selection_glyph":null,"view":{"id":"16854"}},"id":"16853","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"17524"},"selection_policy":{"id":"17523"}},"id":"17458","type":"ColumnDataSource"},{"attributes":{},"id":"17266","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"16806"},"selection_policy":{"id":"16805"}},"id":"16766","type":"ColumnDataSource"},{"attributes":{},"id":"17267","type":"Selection"},{"attributes":{"axis":{"id":"16377"},"dimension":1,"ticker":null},"id":"16380","type":"Grid"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"16532"},"selection_policy":{"id":"16531"}},"id":"16508","type":"ColumnDataSource"},{"attributes":{},"id":"16619","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"16559"},"selection_policy":{"id":"16558"}},"id":"16533","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"17460","type":"Line"},{"attributes":{},"id":"16620","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16729","type":"Line"},{"attributes":{"source":{"id":"17458"}},"id":"17462","type":"CDSView"},{"attributes":{"data_source":{"id":"16533"},"glyph":{"id":"16534"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16535"},"selection_glyph":null,"view":{"id":"16537"}},"id":"16536","type":"GlyphRenderer"},{"attributes":{"source":{"id":"16727"}},"id":"16731","type":"CDSView"},{"attributes":{"data_source":{"id":"16766"},"glyph":{"id":"16767"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16768"},"selection_glyph":null,"view":{"id":"16770"}},"id":"16769","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16510","type":"Line"},{"attributes":{"source":{"id":"16508"}},"id":"16512","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"17270","type":"Line"},{"attributes":{},"id":"17523","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"16653"},"selection_policy":{"id":"16652"}},"id":"16621","type":"ColumnDataSource"},{"attributes":{},"id":"17524","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16622","type":"Line"},{"attributes":{},"id":"16531","type":"UnionRenderers"},{"attributes":{},"id":"16764","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"17271"}]},"id":"17329","type":"LegendItem"},{"attributes":{},"id":"16532","type":"Selection"},{"attributes":{},"id":"16765","type":"Selection"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"16363","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"16623","type":"Line"},{"attributes":{"source":{"id":"16621"}},"id":"16625","type":"CDSView"},{"attributes":{"data_source":{"id":"16654"},"glyph":{"id":"16655"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16656"},"selection_glyph":null,"view":{"id":"16658"}},"id":"16657","type":"GlyphRenderer"},{"attributes":{},"id":"17327","type":"UnionRenderers"},{"attributes":{},"id":"17328","type":"Selection"},{"attributes":{},"id":"16367","type":"DataRange1d"},{"attributes":{},"id":"16652","type":"UnionRenderers"}],"root_ids":["16362"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"0fc630fd-1003-47e6-bd1f-daf878e67d85","root_ids":["16362"],"roots":{"16362":"f29fd01e-4355-4e2d-965f-175cf7e65389"}}];
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