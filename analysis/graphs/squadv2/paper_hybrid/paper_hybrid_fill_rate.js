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
    
      
      
    
      var element = document.getElementById("159ff655-a92b-4f58-b70b-231e01809658");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '159ff655-a92b-4f58-b70b-231e01809658' but no matching script tag was found.")
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
                    
                  var docs_json = '{"26f6fc36-c4e6-4114-8833-adc7e1723513":{"roots":{"references":[{"attributes":{},"id":"3850","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3914","type":"Scatter"},{"attributes":{"below":[{"id":"3841"}],"center":[{"id":"3844"},{"id":"3848"},{"id":"3864"},{"id":"3885"},{"id":"3887"},{"id":"3912"}],"left":[{"id":"3845"}],"plot_width":800,"renderers":[{"id":"3868"},{"id":"3873"},{"id":"3891"},{"id":"3896"},{"id":"3916"},{"id":"3921"},{"id":"3944"},{"id":"3970"},{"id":"3997"},{"id":"4027"}],"title":{"id":"3831"},"toolbar":{"id":"3856"},"x_range":{"id":"3863"},"x_scale":{"id":"3837"},"y_range":{"id":"3835"},"y_scale":{"id":"3839"}},"id":"3830","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3939"},"selection_policy":{"id":"3940"}},"id":"3918","type":"ColumnDataSource"},{"attributes":{},"id":"3881","type":"Selection"},{"attributes":{"data_source":{"id":"3870"},"glyph":{"id":"3871"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3872"},"selection_glyph":null,"view":{"id":"3874"}},"id":"3873","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3913"}},"id":"3917","type":"CDSView"},{"attributes":{"data":{"x":[0.5],"y":[77.7]},"selected":{"id":"3908"},"selection_policy":{"id":"3909"}},"id":"3888","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3919","type":"Line"},{"attributes":{},"id":"3992","type":"Selection"},{"attributes":{},"id":"3876","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"3855"}},"id":"3851","type":"BoxZoomTool"},{"attributes":{},"id":"3993","type":"UnionRenderers"},{"attributes":{"source":{"id":"3941"}},"id":"3945","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3942","type":"Line"},{"attributes":{},"id":"3849","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3915","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3920","type":"Line"},{"attributes":{"source":{"id":"3918"}},"id":"3922","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":0.5,"y":77.7},"id":"3887","type":"Label"},{"attributes":{},"id":"3842","type":"BasicTicker"},{"attributes":{"axis_label":"Density","formatter":{"id":"3876"},"ticker":{"id":"3842"}},"id":"3841","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3890","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4025","type":"Line"},{"attributes":{"data_source":{"id":"4024"},"glyph":{"id":"4025"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4026"},"selection_glyph":null,"view":{"id":"4028"}},"id":"4027","type":"GlyphRenderer"},{"attributes":{},"id":"3884","type":"UnionRenderers"},{"attributes":{},"id":"3909","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3941"},"glyph":{"id":"3942"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3943"},"selection_glyph":null,"view":{"id":"3945"}},"id":"3944","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"3997"}]},"id":"4023","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3910"},"selection_policy":{"id":"3911"}},"id":"3893","type":"ColumnDataSource"},{"attributes":{"end":0.8},"id":"3863","type":"Range1d"},{"attributes":{"axis":{"id":"3845"},"dimension":1,"ticker":null},"id":"3848","type":"Grid"},{"attributes":{},"id":"3908","type":"Selection"},{"attributes":{},"id":"3846","type":"BasicTicker"},{"attributes":{"axis":{"id":"3841"},"ticker":null},"id":"3844","type":"Grid"},{"attributes":{},"id":"3937","type":"Selection"},{"attributes":{"data_source":{"id":"3918"},"glyph":{"id":"3919"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3920"},"selection_glyph":null,"view":{"id":"3922"}},"id":"3921","type":"GlyphRenderer"},{"attributes":{},"id":"3938","type":"UnionRenderers"},{"attributes":{},"id":"4021","type":"Selection"},{"attributes":{},"id":"4022","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3913"},"glyph":{"id":"3914"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3915"},"selection_glyph":null,"view":{"id":"3917"}},"id":"3916","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.5],"y":[68.1776176526635]},"selected":{"id":"3881"},"selection_policy":{"id":"3882"}},"id":"3865","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3866","type":"Scatter"},{"attributes":{"source":{"id":"3893"}},"id":"3897","type":"CDSView"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3883"},"selection_policy":{"id":"3884"}},"id":"3870","type":"ColumnDataSource"},{"attributes":{},"id":"3911","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3872","type":"Line"},{"attributes":{},"id":"3939","type":"Selection"},{"attributes":{},"id":"3910","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4053"},"selection_policy":{"id":"4054"}},"id":"4024","type":"ColumnDataSource"},{"attributes":{},"id":"3878","type":"BasicTickFormatter"},{"attributes":{"text":"DistilBERT","x":0.5,"y":68.1776176526635},"id":"3864","type":"Label"},{"attributes":{},"id":"3940","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.34007282021604945,0.32972849151234573,0.3241524402006174,0.3233748070987654,0.251953125,0.24984929591049398,0.18021797839506182,0.17889781057098764],"y":[76.36922308183819,75.58377333824575,75.48730979224833,75.30785179817528,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"3964"},"selection_policy":{"id":"3965"}},"id":"3941","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3865"},"glyph":{"id":"3866"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3867"},"selection_glyph":null,"view":{"id":"3869"}},"id":"3868","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[79.2]},"selected":{"id":"3937"},"selection_policy":{"id":"3938"}},"id":"3913","type":"ColumnDataSource"},{"attributes":{},"id":"3883","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4026","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3889","type":"Scatter"},{"attributes":{"source":{"id":"4024"}},"id":"4028","type":"CDSView"},{"attributes":{},"id":"3837","type":"LinearScale"},{"attributes":{},"id":"3853","type":"ResetTool"},{"attributes":{"source":{"id":"3888"}},"id":"3892","type":"CDSView"},{"attributes":{},"id":"3854","type":"HelpTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3968","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3943","type":"Line"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"3944"}]},"id":"3966","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3871","type":"Line"},{"attributes":{"data_source":{"id":"3967"},"glyph":{"id":"3968"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3969"},"selection_glyph":null,"view":{"id":"3971"}},"id":"3970","type":"GlyphRenderer"},{"attributes":{},"id":"4053","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3894","type":"Line"},{"attributes":{},"id":"4054","type":"UnionRenderers"},{"attributes":{"axis_label":"F1","formatter":{"id":"3878"},"ticker":{"id":"3846"}},"id":"3845","type":"LinearAxis"},{"attributes":{"label":{"value":"BERT-base (F1 = 76.7)"},"renderers":[{"id":"3873"},{"id":"3896"},{"id":"3921"},{"id":"3970"},{"id":"4027"}]},"id":"3886","type":"LegendItem"},{"attributes":{},"id":"3964","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"3886"},{"id":"3966"},{"id":"4023"}],"location":"bottom_right"},"id":"3885","type":"Legend"},{"attributes":{},"id":"3965","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3867","type":"Scatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3849"},{"id":"3850"},{"id":"3851"},{"id":"3852"},{"id":"3853"},{"id":"3854"}]},"id":"3856","type":"Toolbar"},{"attributes":{"source":{"id":"3870"}},"id":"3874","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3895","type":"Line"},{"attributes":{"source":{"id":"3865"}},"id":"3869","type":"CDSView"},{"attributes":{},"id":"3882","type":"UnionRenderers"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":79.2},"id":"3912","type":"Label"},{"attributes":{"data":{"x":[0.2417173032407408,0.2396677276234569,0.17903645833333348,0.1781864872685185],"y":[75.7435955094686,75.42311762499034,74.35790789620452,74.07805149116633]},"selected":{"id":"4021"},"selection_policy":{"id":"4022"}},"id":"3994","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"3992"},"selection_policy":{"id":"3993"}},"id":"3967","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3855","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"3994"},"glyph":{"id":"3995"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3996"},"selection_glyph":null,"view":{"id":"3998"}},"id":"3997","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3996","type":"Line"},{"attributes":{"source":{"id":"3994"}},"id":"3998","type":"CDSView"},{"attributes":{},"id":"3835","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3969","type":"Line"},{"attributes":{"source":{"id":"3967"}},"id":"3971","type":"CDSView"},{"attributes":{},"id":"3852","type":"SaveTool"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3995","type":"Line"},{"attributes":{"data_source":{"id":"3893"},"glyph":{"id":"3894"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3895"},"selection_glyph":null,"view":{"id":"3897"}},"id":"3896","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3888"},"glyph":{"id":"3889"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3890"},"selection_glyph":null,"view":{"id":"3892"}},"id":"3891","type":"GlyphRenderer"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"3831","type":"Title"},{"attributes":{},"id":"3839","type":"LinearScale"}],"root_ids":["3830"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"26f6fc36-c4e6-4114-8833-adc7e1723513","root_ids":["3830"],"roots":{"3830":"159ff655-a92b-4f58-b70b-231e01809658"}}];
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