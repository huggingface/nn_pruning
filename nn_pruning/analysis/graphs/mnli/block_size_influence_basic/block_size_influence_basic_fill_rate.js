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
    
      
      
    
      var element = document.getElementById("e467ed4b-75f3-4128-b9f4-974b8503d833");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e467ed4b-75f3-4128-b9f4-974b8503d833' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e9ddf46f-41a5-4945-a66f-0e103f757a1d":{"roots":{"references":[{"attributes":{},"id":"12866","type":"Selection"},{"attributes":{},"id":"12688","type":"PanTool"},{"attributes":{},"id":"12676","type":"LinearScale"},{"attributes":{},"id":"12789","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"12774"}]},"id":"12792","type":"LegendItem"},{"attributes":{},"id":"12790","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12736","type":"Line"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"12722"},{"id":"12738"},{"id":"12755"},{"id":"12796"},{"id":"12819"},{"id":"12844"}]},"id":"12734","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12794","type":"Line"},{"attributes":{},"id":"12731","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"12814"},"selection_policy":{"id":"12813"}},"id":"12793","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12721","type":"Line"},{"attributes":{},"id":"12732","type":"Selection"},{"attributes":{"data_source":{"id":"12793"},"glyph":{"id":"12794"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12795"},"selection_glyph":null,"view":{"id":"12797"}},"id":"12796","type":"GlyphRenderer"},{"attributes":{"end":0.75},"id":"12702","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12694","type":"BoxAnnotation"},{"attributes":{},"id":"12689","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12817","type":"Line"},{"attributes":{"source":{"id":"12719"}},"id":"12723","type":"CDSView"},{"attributes":{"data_source":{"id":"12816"},"glyph":{"id":"12817"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12818"},"selection_glyph":null,"view":{"id":"12820"}},"id":"12819","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12795","type":"Line"},{"attributes":{"data_source":{"id":"12719"},"glyph":{"id":"12720"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12721"},"selection_glyph":null,"view":{"id":"12723"}},"id":"12722","type":"GlyphRenderer"},{"attributes":{"source":{"id":"12793"}},"id":"12797","type":"CDSView"},{"attributes":{"data_source":{"id":"12735"},"glyph":{"id":"12736"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12737"},"selection_glyph":null,"view":{"id":"12739"}},"id":"12738","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12753","type":"Line"},{"attributes":{"end":86,"start":79},"id":"12703","type":"Range1d"},{"attributes":{"data":{"x":[0.34212239583333326,0.2529296875,0.18093532986111116,0.12286603009259256],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"12790"},"selection_policy":{"id":"12789"}},"id":"12771","type":"ColumnDataSource"},{"attributes":{},"id":"12813","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"12750"},"selection_policy":{"id":"12749"}},"id":"12735","type":"ColumnDataSource"},{"attributes":{},"id":"12814","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12688"},{"id":"12689"},{"id":"12690"},{"id":"12691"},{"id":"12692"},{"id":"12693"}]},"id":"12695","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12737","type":"Line"},{"attributes":{"source":{"id":"12735"}},"id":"12739","type":"CDSView"},{"attributes":{},"id":"12685","type":"BasicTicker"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"12715"},"selection_policy":{"id":"12714"}},"id":"12704","type":"ColumnDataSource"},{"attributes":{},"id":"12692","type":"ResetTool"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12705","type":"Line"},{"attributes":{},"id":"12693","type":"HelpTool"},{"attributes":{},"id":"12749","type":"UnionRenderers"},{"attributes":{"source":{"id":"12704"}},"id":"12708","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12706","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12842","type":"Line"},{"attributes":{},"id":"12750","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"12839"},"selection_policy":{"id":"12838"}},"id":"12816","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12720","type":"Line"},{"attributes":{"axis":{"id":"12684"},"dimension":1,"ticker":null},"id":"12687","type":"Grid"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"12732"},"selection_policy":{"id":"12731"}},"id":"12719","type":"ColumnDataSource"},{"attributes":{},"id":"12691","type":"SaveTool"},{"attributes":{"data_source":{"id":"12841"},"glyph":{"id":"12842"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12843"},"selection_glyph":null,"view":{"id":"12845"}},"id":"12844","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12818","type":"Line"},{"attributes":{"source":{"id":"12816"}},"id":"12820","type":"CDSView"},{"attributes":{"data_source":{"id":"12752"},"glyph":{"id":"12753"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12754"},"selection_glyph":null,"view":{"id":"12756"}},"id":"12755","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"12694"}},"id":"12690","type":"BoxZoomTool"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"12769"},"selection_policy":{"id":"12768"}},"id":"12752","type":"ColumnDataSource"},{"attributes":{},"id":"12838","type":"UnionRenderers"},{"attributes":{},"id":"12710","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"12771"}},"id":"12775","type":"CDSView"},{"attributes":{},"id":"12839","type":"Selection"},{"attributes":{},"id":"12865","type":"UnionRenderers"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"12670","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12754","type":"Line"},{"attributes":{"data_source":{"id":"12704"},"glyph":{"id":"12705"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12706"},"selection_glyph":null,"view":{"id":"12708"}},"id":"12707","type":"GlyphRenderer"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"12712"},"ticker":{"id":"12681"}},"id":"12680","type":"LinearAxis"},{"attributes":{"source":{"id":"12752"}},"id":"12756","type":"CDSView"},{"attributes":{"below":[{"id":"12680"}],"center":[{"id":"12683"},{"id":"12687"},{"id":"12717"}],"left":[{"id":"12684"}],"plot_width":800,"renderers":[{"id":"12707"},{"id":"12722"},{"id":"12738"},{"id":"12755"},{"id":"12774"},{"id":"12796"},{"id":"12819"},{"id":"12844"}],"title":{"id":"12670"},"toolbar":{"id":"12695"},"x_range":{"id":"12702"},"x_scale":{"id":"12676"},"y_range":{"id":"12703"},"y_scale":{"id":"12678"}},"id":"12669","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12772","type":"Line"},{"attributes":{},"id":"12678","type":"LinearScale"},{"attributes":{},"id":"12768","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"12718"},{"id":"12734"},{"id":"12792"}],"location":"bottom_right"},"id":"12717","type":"Legend"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"12866"},"selection_policy":{"id":"12865"}},"id":"12841","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"12771"},"glyph":{"id":"12772"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12773"},"selection_glyph":null,"view":{"id":"12775"}},"id":"12774","type":"GlyphRenderer"},{"attributes":{},"id":"12769","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12843","type":"Line"},{"attributes":{},"id":"12712","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"12841"}},"id":"12845","type":"CDSView"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"12707"}]},"id":"12718","type":"LegendItem"},{"attributes":{},"id":"12681","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12773","type":"Line"},{"attributes":{},"id":"12714","type":"UnionRenderers"},{"attributes":{"axis":{"id":"12680"},"ticker":null},"id":"12683","type":"Grid"},{"attributes":{"axis_label":"Matched","formatter":{"id":"12710"},"ticker":{"id":"12685"}},"id":"12684","type":"LinearAxis"},{"attributes":{},"id":"12715","type":"Selection"}],"root_ids":["12669"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e9ddf46f-41a5-4945-a66f-0e103f757a1d","root_ids":["12669"],"roots":{"12669":"e467ed4b-75f3-4128-b9f4-974b8503d833"}}];
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