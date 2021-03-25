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
    
      
      
    
      var element = document.getElementById("95cd9e62-ca82-440a-baf9-8e6baa5b53c6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '95cd9e62-ca82-440a-baf9-8e6baa5b53c6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0d629292-f9ae-4e13-af6c-f21a49b45d9f":{"roots":{"references":[{"attributes":{"source":{"id":"14776"}},"id":"14780","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14778","type":"Line"},{"attributes":{},"id":"14736","type":"BasicTickFormatter"},{"attributes":{},"id":"14775","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"14795"},"glyph":{"id":"14796"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14797"},"selection_glyph":null,"view":{"id":"14799"}},"id":"14798","type":"GlyphRenderer"},{"attributes":{},"id":"14774","type":"Selection"},{"attributes":{},"id":"14757","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"14865"},"glyph":{"id":"14866"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14867"},"selection_glyph":null,"view":{"id":"14869"}},"id":"14868","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"14796","type":"Line"},{"attributes":{},"id":"14756","type":"Selection"},{"attributes":{"end":0.75},"id":"14726","type":"Range1d"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"14756"},"selection_policy":{"id":"14757"}},"id":"14743","type":"ColumnDataSource"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"14734"},"ticker":{"id":"14705"}},"id":"14704","type":"LinearAxis"},{"attributes":{},"id":"14705","type":"BasicTicker"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14777","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14712"},{"id":"14713"},{"id":"14714"},{"id":"14715"},{"id":"14716"},{"id":"14717"}]},"id":"14719","type":"Toolbar"},{"attributes":{"data_source":{"id":"14759"},"glyph":{"id":"14760"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14761"},"selection_glyph":null,"view":{"id":"14763"}},"id":"14762","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"14746"},{"id":"14762"},{"id":"14779"},{"id":"14820"},{"id":"14843"},{"id":"14868"}]},"id":"14758","type":"LegendItem"},{"attributes":{"click_policy":"hide","items":[{"id":"14742"},{"id":"14758"},{"id":"14816"}],"location":"bottom_right"},"id":"14741","type":"Legend"},{"attributes":{},"id":"14716","type":"ResetTool"},{"attributes":{},"id":"14717","type":"HelpTool"},{"attributes":{"source":{"id":"14795"}},"id":"14799","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14718","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14818","type":"Line"},{"attributes":{},"id":"14793","type":"Selection"},{"attributes":{},"id":"14794","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"14739"},"selection_policy":{"id":"14740"}},"id":"14728","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14842","type":"Line"},{"attributes":{"overlay":{"id":"14718"}},"id":"14714","type":"BoxZoomTool"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"14838"},"selection_policy":{"id":"14839"}},"id":"14817","type":"ColumnDataSource"},{"attributes":{},"id":"14702","type":"LinearScale"},{"attributes":{"data_source":{"id":"14817"},"glyph":{"id":"14818"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14819"},"selection_glyph":null,"view":{"id":"14821"}},"id":"14820","type":"GlyphRenderer"},{"attributes":{},"id":"14700","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"14797","type":"Line"},{"attributes":{"source":{"id":"14865"}},"id":"14869","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14867","type":"Line"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"14729","type":"Line"},{"attributes":{"below":[{"id":"14704"}],"center":[{"id":"14707"},{"id":"14711"},{"id":"14741"}],"left":[{"id":"14708"}],"plot_width":800,"renderers":[{"id":"14731"},{"id":"14746"},{"id":"14762"},{"id":"14779"},{"id":"14798"},{"id":"14820"},{"id":"14843"},{"id":"14868"}],"title":{"id":"14694"},"toolbar":{"id":"14719"},"x_range":{"id":"14726"},"x_scale":{"id":"14700"},"y_range":{"id":"14727"},"y_scale":{"id":"14702"}},"id":"14693","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"14840"}},"id":"14844","type":"CDSView"},{"attributes":{"source":{"id":"14728"}},"id":"14732","type":"CDSView"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"14731"}]},"id":"14742","type":"LegendItem"},{"attributes":{},"id":"14712","type":"PanTool"},{"attributes":{"data_source":{"id":"14743"},"glyph":{"id":"14744"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14745"},"selection_glyph":null,"view":{"id":"14747"}},"id":"14746","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"14890"},"selection_policy":{"id":"14891"}},"id":"14865","type":"ColumnDataSource"},{"attributes":{},"id":"14734","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14761","type":"Line"},{"attributes":{},"id":"14713","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14744","type":"Line"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"14798"}]},"id":"14816","type":"LegendItem"},{"attributes":{"data_source":{"id":"14728"},"glyph":{"id":"14729"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14730"},"selection_glyph":null,"view":{"id":"14732"}},"id":"14731","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"14863"},"selection_policy":{"id":"14864"}},"id":"14840","type":"ColumnDataSource"},{"attributes":{"source":{"id":"14743"}},"id":"14747","type":"CDSView"},{"attributes":{"data_source":{"id":"14776"},"glyph":{"id":"14777"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14778"},"selection_glyph":null,"view":{"id":"14780"}},"id":"14779","type":"GlyphRenderer"},{"attributes":{},"id":"14709","type":"BasicTicker"},{"attributes":{"source":{"id":"14759"}},"id":"14763","type":"CDSView"},{"attributes":{},"id":"14890","type":"Selection"},{"attributes":{"end":86,"start":79},"id":"14727","type":"Range1d"},{"attributes":{},"id":"14838","type":"Selection"},{"attributes":{},"id":"14715","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14745","type":"Line"},{"attributes":{"axis":{"id":"14708"},"dimension":1,"ticker":null},"id":"14711","type":"Grid"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"14793"},"selection_policy":{"id":"14794"}},"id":"14776","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14866","type":"Line"},{"attributes":{},"id":"14864","type":"UnionRenderers"},{"attributes":{},"id":"14863","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"14730","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"14774"},"selection_policy":{"id":"14775"}},"id":"14759","type":"ColumnDataSource"},{"attributes":{},"id":"14739","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14760","type":"Line"},{"attributes":{},"id":"14740","type":"UnionRenderers"},{"attributes":{"axis_label":"Matched","formatter":{"id":"14736"},"ticker":{"id":"14709"}},"id":"14708","type":"LinearAxis"},{"attributes":{},"id":"14891","type":"UnionRenderers"},{"attributes":{"source":{"id":"14817"}},"id":"14821","type":"CDSView"},{"attributes":{},"id":"14815","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14819","type":"Line"},{"attributes":{"data_source":{"id":"14840"},"glyph":{"id":"14841"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14842"},"selection_glyph":null,"view":{"id":"14844"}},"id":"14843","type":"GlyphRenderer"},{"attributes":{},"id":"14814","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"14841","type":"Line"},{"attributes":{"data":{"x":[0.34212239583333326,0.2529296875,0.18093532986111116,0.12286603009259256],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"14814"},"selection_policy":{"id":"14815"}},"id":"14795","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"14704"},"ticker":null},"id":"14707","type":"Grid"},{"attributes":{},"id":"14839","type":"UnionRenderers"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"14694","type":"Title"}],"root_ids":["14693"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"0d629292-f9ae-4e13-af6c-f21a49b45d9f","root_ids":["14693"],"roots":{"14693":"95cd9e62-ca82-440a-baf9-8e6baa5b53c6"}}];
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