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
    
      
      
    
      var element = document.getElementById("3ab849b4-7a54-4821-8950-9d9ca8a75cd0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3ab849b4-7a54-4821-8950-9d9ca8a75cd0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"81692a22-7029-4983-88a1-004dcc26f65d":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3562","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3585","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3610","type":"Scatter"},{"attributes":{"data_source":{"id":"3588"},"glyph":{"id":"3589"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3590"},"selection_glyph":null,"view":{"id":"3592"}},"id":"3591","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"3536"}],"center":[{"id":"3539"},{"id":"3543"},{"id":"3559"},{"id":"3580"},{"id":"3582"},{"id":"3607"}],"left":[{"id":"3540"}],"plot_width":800,"renderers":[{"id":"3563"},{"id":"3568"},{"id":"3586"},{"id":"3591"},{"id":"3611"},{"id":"3616"},{"id":"3639"},{"id":"3665"}],"title":{"id":"3526"},"toolbar":{"id":"3551"},"x_range":{"id":"3558"},"x_scale":{"id":"3532"},"y_range":{"id":"3530"},"y_scale":{"id":"3534"}},"id":"3525","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3589","type":"Line"},{"attributes":{"source":{"id":"3583"}},"id":"3587","type":"CDSView"},{"attributes":{"data_source":{"id":"3583"},"glyph":{"id":"3584"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3585"},"selection_glyph":null,"view":{"id":"3587"}},"id":"3586","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3606"},"selection_policy":{"id":"3605"}},"id":"3588","type":"ColumnDataSource"},{"attributes":{},"id":"3634","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.34007282021604945,0.32972849151234573,0.3241524402006174,0.3233748070987654,0.251953125,0.24984929591049398,0.18021797839506182,0.17889781057098764],"y":[76.36922308183819,75.58377333824575,75.48730979224833,75.30785179817528,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"3660"},"selection_policy":{"id":"3659"}},"id":"3636","type":"ColumnDataSource"},{"attributes":{},"id":"3635","type":"Selection"},{"attributes":{},"id":"3549","type":"HelpTool"},{"attributes":{"data":{"x":[0.5],"y":[68.1776176526635]},"selected":{"id":"3577"},"selection_policy":{"id":"3576"}},"id":"3560","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3608"}},"id":"3612","type":"CDSView"},{"attributes":{},"id":"3548","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3590","type":"Line"},{"attributes":{"source":{"id":"3588"}},"id":"3592","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3614","type":"Line"},{"attributes":{},"id":"3573","type":"BasicTickFormatter"},{"attributes":{"text":"DistilBERT","x":0.5,"y":68.1776176526635},"id":"3559","type":"Label"},{"attributes":{"end":0.8},"id":"3558","type":"Range1d"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"3639"}]},"id":"3661","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3663","type":"Line"},{"attributes":{"data_source":{"id":"3662"},"glyph":{"id":"3663"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3664"},"selection_glyph":null,"view":{"id":"3666"}},"id":"3665","type":"GlyphRenderer"},{"attributes":{"click_policy":"hide","items":[{"id":"3581"},{"id":"3661"}],"location":"bottom_right"},"id":"3580","type":"Legend"},{"attributes":{},"id":"3603","type":"UnionRenderers"},{"attributes":{},"id":"3659","type":"UnionRenderers"},{"attributes":{},"id":"3604","type":"Selection"},{"attributes":{},"id":"3660","type":"Selection"},{"attributes":{},"id":"3530","type":"DataRange1d"},{"attributes":{"overlay":{"id":"3550"}},"id":"3546","type":"BoxZoomTool"},{"attributes":{"label":{"value":"BERT-base (F1 = 76.7)"},"renderers":[{"id":"3568"},{"id":"3591"},{"id":"3616"},{"id":"3665"}]},"id":"3581","type":"LegendItem"},{"attributes":{},"id":"3544","type":"PanTool"},{"attributes":{},"id":"3545","type":"WheelZoomTool"},{"attributes":{"source":{"id":"3560"}},"id":"3564","type":"CDSView"},{"attributes":{},"id":"3541","type":"BasicTicker"},{"attributes":{},"id":"3605","type":"UnionRenderers"},{"attributes":{},"id":"3606","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3688"},"selection_policy":{"id":"3687"}},"id":"3662","type":"ColumnDataSource"},{"attributes":{},"id":"3571","type":"BasicTickFormatter"},{"attributes":{"text":"TinyBERT","x":0.5,"y":77.7},"id":"3582","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3664","type":"Line"},{"attributes":{},"id":"3532","type":"LinearScale"},{"attributes":{"source":{"id":"3662"}},"id":"3666","type":"CDSView"},{"attributes":{"axis":{"id":"3540"},"dimension":1,"ticker":null},"id":"3543","type":"Grid"},{"attributes":{"source":{"id":"3565"}},"id":"3569","type":"CDSView"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3579"},"selection_policy":{"id":"3578"}},"id":"3565","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[79.2]},"selected":{"id":"3633"},"selection_policy":{"id":"3632"}},"id":"3608","type":"ColumnDataSource"},{"attributes":{},"id":"3547","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3609","type":"Scatter"},{"attributes":{"axis_label":"F1","formatter":{"id":"3571"},"ticker":{"id":"3541"}},"id":"3540","type":"LinearAxis"},{"attributes":{"data_source":{"id":"3613"},"glyph":{"id":"3614"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3615"},"selection_glyph":null,"view":{"id":"3617"}},"id":"3616","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"3536"},"ticker":null},"id":"3539","type":"Grid"},{"attributes":{},"id":"3534","type":"LinearScale"},{"attributes":{"data_source":{"id":"3608"},"glyph":{"id":"3609"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3610"},"selection_glyph":null,"view":{"id":"3612"}},"id":"3611","type":"GlyphRenderer"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"3526","type":"Title"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3635"},"selection_policy":{"id":"3634"}},"id":"3613","type":"ColumnDataSource"},{"attributes":{},"id":"3687","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3636"},"glyph":{"id":"3637"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3638"},"selection_glyph":null,"view":{"id":"3640"}},"id":"3639","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3566","type":"Line"},{"attributes":{},"id":"3688","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3567","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3638","type":"Line"},{"attributes":{"source":{"id":"3636"}},"id":"3640","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3544"},{"id":"3545"},{"id":"3546"},{"id":"3547"},{"id":"3548"},{"id":"3549"}]},"id":"3551","type":"Toolbar"},{"attributes":{"data_source":{"id":"3560"},"glyph":{"id":"3561"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3562"},"selection_glyph":null,"view":{"id":"3564"}},"id":"3563","type":"GlyphRenderer"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3637","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3615","type":"Line"},{"attributes":{},"id":"3577","type":"Selection"},{"attributes":{"source":{"id":"3613"}},"id":"3617","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3550","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3584","type":"Scatter"},{"attributes":{},"id":"3579","type":"Selection"},{"attributes":{},"id":"3578","type":"UnionRenderers"},{"attributes":{},"id":"3576","type":"UnionRenderers"},{"attributes":{"axis_label":"Density","formatter":{"id":"3573"},"ticker":{"id":"3537"}},"id":"3536","type":"LinearAxis"},{"attributes":{"data_source":{"id":"3565"},"glyph":{"id":"3566"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3567"},"selection_glyph":null,"view":{"id":"3569"}},"id":"3568","type":"GlyphRenderer"},{"attributes":{},"id":"3537","type":"BasicTicker"},{"attributes":{"data":{"x":[0.5],"y":[77.7]},"selected":{"id":"3604"},"selection_policy":{"id":"3603"}},"id":"3583","type":"ColumnDataSource"},{"attributes":{},"id":"3632","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3561","type":"Scatter"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":79.2},"id":"3607","type":"Label"},{"attributes":{},"id":"3633","type":"Selection"}],"root_ids":["3525"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"81692a22-7029-4983-88a1-004dcc26f65d","root_ids":["3525"],"roots":{"3525":"3ab849b4-7a54-4821-8950-9d9ca8a75cd0"}}];
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