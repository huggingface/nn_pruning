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
    
      
      
    
      var element = document.getElementById("e124791c-930b-47a7-b6b7-84e0809dae9e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e124791c-930b-47a7-b6b7-84e0809dae9e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"24a0822c-9796-4cc4-8511-0ec2b16c72b8":{"roots":{"references":[{"attributes":{"source":{"id":"6577"}},"id":"6581","type":"CDSView"},{"attributes":{},"id":"6540","type":"Selection"},{"attributes":{},"id":"6510","type":"BasicTicker"},{"attributes":{"axis_label":"Matched","formatter":{"id":"6535"},"ticker":{"id":"6510"}},"id":"6509","type":"LinearAxis"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"6495","type":"Title"},{"attributes":{},"id":"6517","type":"ResetTool"},{"attributes":{},"id":"6690","type":"UnionRenderers"},{"attributes":{},"id":"6593","type":"UnionRenderers"},{"attributes":{},"id":"6516","type":"SaveTool"},{"attributes":{},"id":"6614","type":"UnionRenderers"},{"attributes":{},"id":"6691","type":"Selection"},{"attributes":{},"id":"6594","type":"Selection"},{"attributes":{"below":[{"id":"6505"}],"center":[{"id":"6508"},{"id":"6512"},{"id":"6542"}],"left":[{"id":"6509"}],"plot_width":800,"renderers":[{"id":"6532"},{"id":"6547"},{"id":"6563"},{"id":"6580"},{"id":"6599"},{"id":"6621"},{"id":"6644"},{"id":"6669"}],"title":{"id":"6495"},"toolbar":{"id":"6520"},"x_range":{"id":"6527"},"x_scale":{"id":"6501"},"y_range":{"id":"6528"},"y_scale":{"id":"6503"}},"id":"6494","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6506","type":"BasicTicker"},{"attributes":{"end":6.0,"start":0.75},"id":"6527","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"6519","type":"BoxAnnotation"},{"attributes":{"data":{"x":[1.9994637396181068,2.398404835869523,2.9218072258788506,3.4372712841353343],"y":[83.70860927152319,83.04635761589404,82.6795720835456,81.02903718797758]},"selected":{"id":"6615"},"selection_policy":{"id":"6614"}},"id":"6596","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6545","type":"Line"},{"attributes":{"axis":{"id":"6509"},"dimension":1,"ticker":null},"id":"6512","type":"Grid"},{"attributes":{"data_source":{"id":"6544"},"glyph":{"id":"6545"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6546"},"selection_glyph":null,"view":{"id":"6548"}},"id":"6547","type":"GlyphRenderer"},{"attributes":{},"id":"6615","type":"Selection"},{"attributes":{"data_source":{"id":"6529"},"glyph":{"id":"6530"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6531"},"selection_glyph":null,"view":{"id":"6533"}},"id":"6532","type":"GlyphRenderer"},{"attributes":{},"id":"6501","type":"LinearScale"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"6557"},"selection_policy":{"id":"6556"}},"id":"6544","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6596"},"glyph":{"id":"6597"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6598"},"selection_glyph":null,"view":{"id":"6600"}},"id":"6599","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6619","type":"Line"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"6547"},{"id":"6563"},{"id":"6580"},{"id":"6621"},{"id":"6644"},{"id":"6669"}]},"id":"6559","type":"LegendItem"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"6639"},"selection_policy":{"id":"6638"}},"id":"6618","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6561","type":"Line"},{"attributes":{"data_source":{"id":"6618"},"glyph":{"id":"6619"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6620"},"selection_glyph":null,"view":{"id":"6622"}},"id":"6621","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6546","type":"Line"},{"attributes":{"source":{"id":"6544"}},"id":"6548","type":"CDSView"},{"attributes":{},"id":"6503","type":"LinearScale"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6642","type":"Line"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"6532"}]},"id":"6543","type":"LegendItem"},{"attributes":{"data_source":{"id":"6641"},"glyph":{"id":"6642"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6643"},"selection_glyph":null,"view":{"id":"6645"}},"id":"6644","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6620","type":"Line"},{"attributes":{"source":{"id":"6618"}},"id":"6622","type":"CDSView"},{"attributes":{},"id":"6556","type":"UnionRenderers"},{"attributes":{},"id":"6557","type":"Selection"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6530","type":"Line"},{"attributes":{},"id":"6638","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.9946948904542998,2.0018744207135466,2.002662075247167,2.4005750580789247,2.8975278910432105,2.9707750898055454,2.9812930987603186,3.3300349445225725,3.509180092206226],"y":[83.19918492103923,83.13805399898115,83.03616912888437,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"6540"},"selection_policy":{"id":"6539"}},"id":"6529","type":"ColumnDataSource"},{"attributes":{},"id":"6513","type":"PanTool"},{"attributes":{},"id":"6518","type":"HelpTool"},{"attributes":{},"id":"6514","type":"WheelZoomTool"},{"attributes":{},"id":"6639","type":"Selection"},{"attributes":{"source":{"id":"6529"}},"id":"6533","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6531","type":"Line"},{"attributes":{"data_source":{"id":"6560"},"glyph":{"id":"6561"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6562"},"selection_glyph":null,"view":{"id":"6564"}},"id":"6563","type":"GlyphRenderer"},{"attributes":{"click_policy":"hide","items":[{"id":"6543"},{"id":"6559"},{"id":"6617"}]},"id":"6542","type":"Legend"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6578","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6513"},{"id":"6514"},{"id":"6515"},{"id":"6516"},{"id":"6517"},{"id":"6518"}]},"id":"6520","type":"Toolbar"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6667","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"6575"},"selection_policy":{"id":"6574"}},"id":"6560","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"6664"},"selection_policy":{"id":"6663"}},"id":"6641","type":"ColumnDataSource"},{"attributes":{"end":86,"start":79},"id":"6528","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6562","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6668","type":"Line"},{"attributes":{},"id":"6535","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"6560"}},"id":"6564","type":"CDSView"},{"attributes":{"data_source":{"id":"6666"},"glyph":{"id":"6667"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6668"},"selection_glyph":null,"view":{"id":"6670"}},"id":"6669","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"6519"}},"id":"6515","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6579","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6643","type":"Line"},{"attributes":{"source":{"id":"6641"}},"id":"6645","type":"CDSView"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"6537"},"ticker":{"id":"6506"}},"id":"6505","type":"LinearAxis"},{"attributes":{"source":{"id":"6596"}},"id":"6600","type":"CDSView"},{"attributes":{},"id":"6574","type":"UnionRenderers"},{"attributes":{},"id":"6539","type":"UnionRenderers"},{"attributes":{},"id":"6663","type":"UnionRenderers"},{"attributes":{},"id":"6575","type":"Selection"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"6599"}]},"id":"6617","type":"LegendItem"},{"attributes":{},"id":"6664","type":"Selection"},{"attributes":{"axis":{"id":"6505"},"ticker":null},"id":"6508","type":"Grid"},{"attributes":{"data_source":{"id":"6577"},"glyph":{"id":"6578"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6579"},"selection_glyph":null,"view":{"id":"6581"}},"id":"6580","type":"GlyphRenderer"},{"attributes":{},"id":"6537","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"6594"},"selection_policy":{"id":"6593"}},"id":"6577","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6666"}},"id":"6670","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"6691"},"selection_policy":{"id":"6690"}},"id":"6666","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6598","type":"Line"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6597","type":"Line"}],"root_ids":["6494"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"24a0822c-9796-4cc4-8511-0ec2b16c72b8","root_ids":["6494"],"roots":{"6494":"e124791c-930b-47a7-b6b7-84e0809dae9e"}}];
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