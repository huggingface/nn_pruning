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
    
      
      
    
      var element = document.getElementById("7c9d4b6a-ac72-4ffd-8d3b-312bbf89ed36");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7c9d4b6a-ac72-4ffd-8d3b-312bbf89ed36' but no matching script tag was found.")
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
                    
                  var docs_json = '{"555c8333-962a-4f9a-8023-d8257e0c7186":{"roots":{"references":[{"attributes":{"data_source":{"id":"7630"},"glyph":{"id":"7631"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7632"},"selection_glyph":null,"view":{"id":"7634"}},"id":"7633","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"7531","type":"BoxAnnotation"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"7651"},"selection_policy":{"id":"7652"}},"id":"7630","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"7517"}],"center":[{"id":"7520"},{"id":"7524"},{"id":"7554"}],"left":[{"id":"7521"}],"plot_width":800,"renderers":[{"id":"7544"},{"id":"7559"},{"id":"7575"},{"id":"7592"},{"id":"7611"},{"id":"7633"},{"id":"7656"},{"id":"7681"}],"title":{"id":"7507"},"toolbar":{"id":"7532"},"x_range":{"id":"7539"},"x_scale":{"id":"7513"},"y_range":{"id":"7540"},"y_scale":{"id":"7515"}},"id":"7506","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7569","type":"Selection"},{"attributes":{},"id":"7570","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7631","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7654","type":"Line"},{"attributes":{},"id":"7518","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7653"},"glyph":{"id":"7654"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7655"},"selection_glyph":null,"view":{"id":"7657"}},"id":"7656","type":"GlyphRenderer"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"7547"},"ticker":{"id":"7518"}},"id":"7517","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7541"},"glyph":{"id":"7542"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7543"},"selection_glyph":null,"view":{"id":"7545"}},"id":"7544","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7632","type":"Line"},{"attributes":{"source":{"id":"7630"}},"id":"7634","type":"CDSView"},{"attributes":{},"id":"7522","type":"BasicTicker"},{"attributes":{},"id":"7515","type":"LinearScale"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7590","type":"Line"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7542","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7573","type":"Line"},{"attributes":{"data":{"x":[1.9946948904542998,2.0018744207135466,2.002662075247167,2.4005750580789247,2.8975278910432105,2.9707750898055454,2.9812930987603186,3.3300349445225725,3.509180092206226],"y":[83.19918492103923,83.13805399898115,83.03616912888437,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"7552"},"selection_policy":{"id":"7553"}},"id":"7541","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"7587"},"selection_policy":{"id":"7588"}},"id":"7572","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7525"},{"id":"7526"},{"id":"7527"},{"id":"7528"},{"id":"7529"},{"id":"7530"}]},"id":"7532","type":"Toolbar"},{"attributes":{"source":{"id":"7541"}},"id":"7545","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7574","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7543","type":"Line"},{"attributes":{"source":{"id":"7572"}},"id":"7576","type":"CDSView"},{"attributes":{},"id":"7651","type":"Selection"},{"attributes":{},"id":"7652","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.9994637396181068,2.398404835869523,2.9218072258788506,3.4372712841353343],"y":[83.70860927152319,83.04635761589404,82.6795720835456,81.02903718797758]},"selected":{"id":"7627"},"selection_policy":{"id":"7628"}},"id":"7608","type":"ColumnDataSource"},{"attributes":{"axis_label":"Matched","formatter":{"id":"7549"},"ticker":{"id":"7522"}},"id":"7521","type":"LinearAxis"},{"attributes":{"click_policy":"hide","items":[{"id":"7555"},{"id":"7571"},{"id":"7629"}]},"id":"7554","type":"Legend"},{"attributes":{"axis":{"id":"7517"},"ticker":null},"id":"7520","type":"Grid"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7557","type":"Line"},{"attributes":{},"id":"7549","type":"BasicTickFormatter"},{"attributes":{},"id":"7547","type":"BasicTickFormatter"},{"attributes":{},"id":"7513","type":"LinearScale"},{"attributes":{},"id":"7587","type":"Selection"},{"attributes":{},"id":"7588","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"7676"},"selection_policy":{"id":"7677"}},"id":"7653","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7679","type":"Line"},{"attributes":{"data_source":{"id":"7678"},"glyph":{"id":"7679"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7680"},"selection_glyph":null,"view":{"id":"7682"}},"id":"7681","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7655","type":"Line"},{"attributes":{"source":{"id":"7653"}},"id":"7657","type":"CDSView"},{"attributes":{},"id":"7528","type":"SaveTool"},{"attributes":{"data_source":{"id":"7589"},"glyph":{"id":"7590"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7591"},"selection_glyph":null,"view":{"id":"7593"}},"id":"7592","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"7606"},"selection_policy":{"id":"7607"}},"id":"7589","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7608"}},"id":"7612","type":"CDSView"},{"attributes":{},"id":"7676","type":"Selection"},{"attributes":{},"id":"7677","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7591","type":"Line"},{"attributes":{"source":{"id":"7589"}},"id":"7593","type":"CDSView"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7609","type":"Line"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"7507","type":"Title"},{"attributes":{},"id":"7552","type":"Selection"},{"attributes":{},"id":"7553","type":"UnionRenderers"},{"attributes":{},"id":"7606","type":"Selection"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"7703"},"selection_policy":{"id":"7704"}},"id":"7678","type":"ColumnDataSource"},{"attributes":{},"id":"7607","type":"UnionRenderers"},{"attributes":{},"id":"7529","type":"ResetTool"},{"attributes":{"overlay":{"id":"7531"}},"id":"7527","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7680","type":"Line"},{"attributes":{},"id":"7530","type":"HelpTool"},{"attributes":{"source":{"id":"7678"}},"id":"7682","type":"CDSView"},{"attributes":{},"id":"7525","type":"PanTool"},{"attributes":{"data_source":{"id":"7556"},"glyph":{"id":"7557"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7558"},"selection_glyph":null,"view":{"id":"7560"}},"id":"7559","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"7544"}]},"id":"7555","type":"LegendItem"},{"attributes":{},"id":"7526","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7610","type":"Line"},{"attributes":{},"id":"7703","type":"Selection"},{"attributes":{"end":86,"start":79},"id":"7540","type":"Range1d"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"7569"},"selection_policy":{"id":"7570"}},"id":"7556","type":"ColumnDataSource"},{"attributes":{},"id":"7704","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"7608"},"glyph":{"id":"7609"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7610"},"selection_glyph":null,"view":{"id":"7612"}},"id":"7611","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"7611"}]},"id":"7629","type":"LegendItem"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"7559"},{"id":"7575"},{"id":"7592"},{"id":"7633"},{"id":"7656"},{"id":"7681"}]},"id":"7571","type":"LegendItem"},{"attributes":{"data_source":{"id":"7572"},"glyph":{"id":"7573"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7574"},"selection_glyph":null,"view":{"id":"7576"}},"id":"7575","type":"GlyphRenderer"},{"attributes":{},"id":"7627","type":"Selection"},{"attributes":{"axis":{"id":"7521"},"dimension":1,"ticker":null},"id":"7524","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7558","type":"Line"},{"attributes":{},"id":"7628","type":"UnionRenderers"},{"attributes":{"source":{"id":"7556"}},"id":"7560","type":"CDSView"},{"attributes":{"end":6.0,"start":0.75},"id":"7539","type":"Range1d"}],"root_ids":["7506"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"555c8333-962a-4f9a-8023-d8257e0c7186","root_ids":["7506"],"roots":{"7506":"7c9d4b6a-ac72-4ffd-8d3b-312bbf89ed36"}}];
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