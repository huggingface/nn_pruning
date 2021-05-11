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
    
      
      
    
      var element = document.getElementById("f82d3b1f-c050-4a90-ae82-313a774d34b1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f82d3b1f-c050-4a90-ae82-313a774d34b1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0e967fd1-9b2d-4467-bbd7-88e882eaf522":{"roots":{"references":[{"attributes":{"end":0.8},"id":"3481","type":"Range1d"},{"attributes":{},"id":"3496","type":"BasicTickFormatter"},{"attributes":{},"id":"3500","type":"UnionRenderers"},{"attributes":{},"id":"3470","type":"SaveTool"},{"attributes":{},"id":"3494","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3473","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3467"},{"id":"3468"},{"id":"3469"},{"id":"3470"},{"id":"3471"},{"id":"3472"}]},"id":"3474","type":"Toolbar"},{"attributes":{"data_source":{"id":"3488"},"glyph":{"id":"3489"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3490"},"selection_glyph":null,"view":{"id":"3492"}},"id":"3491","type":"GlyphRenderer"},{"attributes":{"axis_label":"F1","formatter":{"id":"3496"},"ticker":{"id":"3464"}},"id":"3463","type":"LinearAxis"},{"attributes":{"overlay":{"id":"3473"}},"id":"3469","type":"BoxZoomTool"},{"attributes":{},"id":"3471","type":"ResetTool"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3528"},"selection_policy":{"id":"3529"}},"id":"3511","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3511"},"glyph":{"id":"3512"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3513"},"selection_glyph":null,"view":{"id":"3515"}},"id":"3514","type":"GlyphRenderer"},{"attributes":{},"id":"3555","type":"Selection"},{"attributes":{},"id":"3556","type":"UnionRenderers"},{"attributes":{"below":[{"id":"3459"}],"center":[{"id":"3462"},{"id":"3466"},{"id":"3482"},{"id":"3503"},{"id":"3505"},{"id":"3530"}],"left":[{"id":"3463"}],"plot_width":800,"renderers":[{"id":"3486"},{"id":"3491"},{"id":"3509"},{"id":"3514"},{"id":"3534"},{"id":"3539"}],"title":null,"toolbar":{"id":"3474"},"x_range":{"id":"3481"},"x_scale":{"id":"3455"},"y_range":{"id":"3453"},"y_scale":{"id":"3457"}},"id":"3449","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3468","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3533","type":"Scatter"},{"attributes":{},"id":"3472","type":"HelpTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3512","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[77.7]},"selected":{"id":"3526"},"selection_policy":{"id":"3527"}},"id":"3506","type":"ColumnDataSource"},{"attributes":{},"id":"3464","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3508","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3489","type":"Line"},{"attributes":{"source":{"id":"3506"}},"id":"3510","type":"CDSView"},{"attributes":{"data_source":{"id":"3506"},"glyph":{"id":"3507"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3508"},"selection_glyph":null,"view":{"id":"3510"}},"id":"3509","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3490","type":"Line"},{"attributes":{},"id":"3557","type":"Selection"},{"attributes":{},"id":"3558","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3557"},"selection_policy":{"id":"3558"}},"id":"3536","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3513","type":"Line"},{"attributes":{"source":{"id":"3511"}},"id":"3515","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3484","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3537","type":"Line"},{"attributes":{"source":{"id":"3536"}},"id":"3540","type":"CDSView"},{"attributes":{},"id":"3460","type":"BasicTicker"},{"attributes":{},"id":"3499","type":"Selection"},{"attributes":{"axis":{"id":"3459"},"ticker":null},"id":"3462","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3507","type":"Scatter"},{"attributes":{"data":{"x":[0.5],"y":[68.1776176526635]},"selected":{"id":"3499"},"selection_policy":{"id":"3500"}},"id":"3483","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3488"}},"id":"3492","type":"CDSView"},{"attributes":{},"id":"3502","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"3504"}],"location":"bottom_right"},"id":"3503","type":"Legend"},{"attributes":{},"id":"3467","type":"PanTool"},{"attributes":{},"id":"3526","type":"Selection"},{"attributes":{"axis":{"id":"3463"},"dimension":1,"ticker":null},"id":"3466","type":"Grid"},{"attributes":{},"id":"3527","type":"UnionRenderers"},{"attributes":{"axis_label":"Density","formatter":{"id":"3494"},"ticker":{"id":"3460"}},"id":"3459","type":"LinearAxis"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3501"},"selection_policy":{"id":"3502"}},"id":"3488","type":"ColumnDataSource"},{"attributes":{},"id":"3501","type":"Selection"},{"attributes":{},"id":"3528","type":"Selection"},{"attributes":{"text":"TinyBERT","x":0.5,"y":77.7},"id":"3505","type":"Label"},{"attributes":{},"id":"3529","type":"UnionRenderers"},{"attributes":{},"id":"3457","type":"LinearScale"},{"attributes":{"data_source":{"id":"3483"},"glyph":{"id":"3484"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3485"},"selection_glyph":null,"view":{"id":"3487"}},"id":"3486","type":"GlyphRenderer"},{"attributes":{"text":"DistilBERT","x":0.5,"y":68.1776176526635},"id":"3482","type":"Label"},{"attributes":{},"id":"3455","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3485","type":"Scatter"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[79.2]},"selected":{"id":"3555"},"selection_policy":{"id":"3556"}},"id":"3531","type":"ColumnDataSource"},{"attributes":{},"id":"3453","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3532","type":"Scatter"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":79.2},"id":"3530","type":"Label"},{"attributes":{"data_source":{"id":"3536"},"glyph":{"id":"3537"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3538"},"selection_glyph":null,"view":{"id":"3540"}},"id":"3539","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3483"}},"id":"3487","type":"CDSView"},{"attributes":{"source":{"id":"3531"}},"id":"3535","type":"CDSView"},{"attributes":{"data_source":{"id":"3531"},"glyph":{"id":"3532"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3533"},"selection_glyph":null,"view":{"id":"3535"}},"id":"3534","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3538","type":"Line"},{"attributes":{"label":{"value":"BERT-base (F1 = 76.7)"},"renderers":[{"id":"3491"},{"id":"3514"},{"id":"3539"}]},"id":"3504","type":"LegendItem"}],"root_ids":["3449"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"0e967fd1-9b2d-4467-bbd7-88e882eaf522","root_ids":["3449"],"roots":{"3449":"f82d3b1f-c050-4a90-ae82-313a774d34b1"}}];
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