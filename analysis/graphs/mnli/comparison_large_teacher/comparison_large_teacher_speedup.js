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
    
      
      
    
      var element = document.getElementById("4a516b24-8106-4c2b-b2e6-41e770a69198");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4a516b24-8106-4c2b-b2e6-41e770a69198' but no matching script tag was found.")
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
                    
                  var docs_json = '{"fd7e38cb-d2c7-4697-b933-b250813baacb":{"roots":{"references":[{"attributes":{},"id":"4029","type":"UnionRenderers"},{"attributes":{"below":[{"id":"3919"}],"center":[{"id":"3922"},{"id":"3926"},{"id":"3943"},{"id":"3964"},{"id":"4002"},{"id":"4083"}],"left":[{"id":"3923"}],"plot_width":800,"renderers":[{"id":"3947"},{"id":"3952"},{"id":"3969"},{"id":"3986"},{"id":"4006"},{"id":"4011"},{"id":"4034"},{"id":"4059"},{"id":"4087"},{"id":"4092"},{"id":"4123"},{"id":"4156"},{"id":"4191"},{"id":"4229"},{"id":"4268"},{"id":"4309"}],"title":{"id":"3909"},"toolbar":{"id":"3934"},"x_range":{"id":"3941"},"x_scale":{"id":"3915"},"y_range":{"id":"3942"},"y_scale":{"id":"3917"}},"id":"3908","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4032","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4057","type":"Line"},{"attributes":{"data_source":{"id":"4056"},"glyph":{"id":"4057"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4058"},"selection_glyph":null,"view":{"id":"4060"}},"id":"4059","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4033","type":"Line"},{"attributes":{"source":{"id":"4031"}},"id":"4035","type":"CDSView"},{"attributes":{},"id":"4053","type":"Selection"},{"attributes":{},"id":"4054","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4090","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"4080"},"selection_policy":{"id":"4081"}},"id":"4056","type":"ColumnDataSource"},{"attributes":{},"id":"4080","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4058","type":"Line"},{"attributes":{"source":{"id":"4056"}},"id":"4060","type":"CDSView"},{"attributes":{"end":6.0,"start":0.75},"id":"3941","type":"Range1d"},{"attributes":{},"id":"4081","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"4117"},"selection_policy":{"id":"4118"}},"id":"4089","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4089"},"glyph":{"id":"4090"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4091"},"selection_glyph":null,"view":{"id":"4093"}},"id":"4092","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4086","type":"Scatter"},{"attributes":{"source":{"id":"4084"}},"id":"4088","type":"CDSView"},{"attributes":{"data_source":{"id":"4084"},"glyph":{"id":"4085"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4086"},"selection_glyph":null,"view":{"id":"4088"}},"id":"4087","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9994637396181068,2.398404835869523,2.9218072258788506,3.4372712841353343],"y":[83.70860927152319,83.04635761589404,82.6795720835456,81.02903718797758]},"selected":{"id":"4222"},"selection_policy":{"id":"4223"}},"id":"4188","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4120"},"glyph":{"id":"4121"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4122"},"selection_glyph":null,"view":{"id":"4124"}},"id":"4123","type":"GlyphRenderer"},{"attributes":{},"id":"4028","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4091","type":"Line"},{"attributes":{"source":{"id":"4089"}},"id":"4093","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"4150"},"selection_policy":{"id":"4151"}},"id":"4120","type":"ColumnDataSource"},{"attributes":{},"id":"4115","type":"Selection"},{"attributes":{},"id":"4116","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3967","type":"Line"},{"attributes":{"data":{"x":[1.78125],"y":[84.3]},"selected":{"id":"4115"},"selection_policy":{"id":"4116"}},"id":"4084","type":"ColumnDataSource"},{"attributes":{"text":"DistilBERT","x":1.63,"y":82.2},"id":"3943","type":"Label"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"3980"},"selection_policy":{"id":"3981"}},"id":"3966","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4004","type":"Scatter"},{"attributes":{"data":{"x":[1.63],"y":[82.2]},"selected":{"id":"3959"},"selection_policy":{"id":"3960"}},"id":"3944","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3984","type":"Line"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"3909","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3946","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3968","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3945","type":"Scatter"},{"attributes":{"source":{"id":"3966"}},"id":"3970","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4227","type":"Line"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":84.3},"id":"4083","type":"Label"},{"attributes":{},"id":"4117","type":"Selection"},{"attributes":{"data_source":{"id":"3949"},"glyph":{"id":"3950"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3951"},"selection_glyph":null,"view":{"id":"3953"}},"id":"3952","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"4262"},"selection_policy":{"id":"4263"}},"id":"4226","type":"ColumnDataSource"},{"attributes":{},"id":"4118","type":"UnionRenderers"},{"attributes":{"text":"TinyBERT","x":2.0,"y":84.6},"id":"4002","type":"Label"},{"attributes":{"source":{"id":"3944"}},"id":"3948","type":"CDSView"},{"attributes":{"data_source":{"id":"3944"},"glyph":{"id":"3945"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3946"},"selection_glyph":null,"view":{"id":"3948"}},"id":"3947","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4226"},"glyph":{"id":"4227"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4228"},"selection_glyph":null,"view":{"id":"4230"}},"id":"4229","type":"GlyphRenderer"},{"attributes":{},"id":"3980","type":"Selection"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"3961"},"selection_policy":{"id":"3962"}},"id":"3949","type":"ColumnDataSource"},{"attributes":{},"id":"3981","type":"UnionRenderers"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"3956"},"ticker":{"id":"3920"}},"id":"3919","type":"LinearAxis"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3950","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4266","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"3965"},{"id":"4225"}]},"id":"3964","type":"Legend"},{"attributes":{},"id":"3924","type":"BasicTicker"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4307","type":"Line"},{"attributes":{"data_source":{"id":"3966"},"glyph":{"id":"3967"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3968"},"selection_glyph":null,"view":{"id":"3970"}},"id":"3969","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"3933"}},"id":"3929","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"3919"},"ticker":null},"id":"3922","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4228","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3951","type":"Line"},{"attributes":{"source":{"id":"4226"}},"id":"4230","type":"CDSView"},{"attributes":{"data_source":{"id":"4265"},"glyph":{"id":"4266"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4267"},"selection_glyph":null,"view":{"id":"4269"}},"id":"4268","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3949"}},"id":"3953","type":"CDSView"},{"attributes":{},"id":"3962","type":"UnionRenderers"},{"attributes":{},"id":"3917","type":"LinearScale"},{"attributes":{},"id":"4262","type":"Selection"},{"attributes":{},"id":"4263","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3983"},"glyph":{"id":"3984"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3985"},"selection_glyph":null,"view":{"id":"3987"}},"id":"3986","type":"GlyphRenderer"},{"attributes":{},"id":"3956","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"3999"},"selection_policy":{"id":"4000"}},"id":"3983","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4154","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4121","type":"Line"},{"attributes":{},"id":"4150","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4009","type":"Line"},{"attributes":{},"id":"3958","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4122","type":"Line"},{"attributes":{},"id":"3999","type":"Selection"},{"attributes":{"source":{"id":"4120"}},"id":"4124","type":"CDSView"},{"attributes":{"data_source":{"id":"4153"},"glyph":{"id":"4154"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4155"},"selection_glyph":null,"view":{"id":"4157"}},"id":"4156","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3985","type":"Line"},{"attributes":{"source":{"id":"3983"}},"id":"3987","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"4028"},"selection_policy":{"id":"4029"}},"id":"4008","type":"ColumnDataSource"},{"attributes":{},"id":"4151","type":"UnionRenderers"},{"attributes":{},"id":"4000","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"4303"},"selection_policy":{"id":"4304"}},"id":"4265","type":"ColumnDataSource"},{"attributes":{},"id":"3930","type":"SaveTool"},{"attributes":{},"id":"4303","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4267","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3927"},{"id":"3928"},{"id":"3929"},{"id":"3930"},{"id":"3931"},{"id":"3932"}]},"id":"3934","type":"Toolbar"},{"attributes":{"source":{"id":"4265"}},"id":"4269","type":"CDSView"},{"attributes":{"data_source":{"id":"4306"},"glyph":{"id":"4307"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4308"},"selection_glyph":null,"view":{"id":"4310"}},"id":"4309","type":"GlyphRenderer"},{"attributes":{},"id":"4304","type":"UnionRenderers"},{"attributes":{"source":{"id":"4188"}},"id":"4192","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4005","type":"Scatter"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"4185"},"selection_policy":{"id":"4186"}},"id":"4153","type":"ColumnDataSource"},{"attributes":{},"id":"3961","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4085","type":"Scatter"},{"attributes":{"data":{"x":[2.0],"y":[84.6]},"selected":{"id":"4026"},"selection_policy":{"id":"4027"}},"id":"4003","type":"ColumnDataSource"},{"attributes":{},"id":"3928","type":"WheelZoomTool"},{"attributes":{},"id":"3931","type":"ResetTool"},{"attributes":{},"id":"4185","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3933","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"4008"},"glyph":{"id":"4009"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4010"},"selection_glyph":null,"view":{"id":"4012"}},"id":"4011","type":"GlyphRenderer"},{"attributes":{},"id":"3920","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4155","type":"Line"},{"attributes":{"axis_label":"Matched","formatter":{"id":"3958"},"ticker":{"id":"3924"}},"id":"3923","type":"LinearAxis"},{"attributes":{"source":{"id":"4003"}},"id":"4007","type":"CDSView"},{"attributes":{"source":{"id":"4153"}},"id":"4157","type":"CDSView"},{"attributes":{"data_source":{"id":"4003"},"glyph":{"id":"4004"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4005"},"selection_glyph":null,"view":{"id":"4007"}},"id":"4006","type":"GlyphRenderer"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4189","type":"Line"},{"attributes":{"data_source":{"id":"4188"},"glyph":{"id":"4189"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4190"},"selection_glyph":null,"view":{"id":"4192"}},"id":"4191","type":"GlyphRenderer"},{"attributes":{},"id":"4186","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"4053"},"selection_policy":{"id":"4054"}},"id":"4031","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"4346"},"selection_policy":{"id":"4347"}},"id":"4306","type":"ColumnDataSource"},{"attributes":{"end":86,"start":79},"id":"3942","type":"Range1d"},{"attributes":{"axis":{"id":"3923"},"dimension":1,"ticker":null},"id":"3926","type":"Grid"},{"attributes":{"data_source":{"id":"4031"},"glyph":{"id":"4032"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4033"},"selection_glyph":null,"view":{"id":"4035"}},"id":"4034","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4010","type":"Line"},{"attributes":{},"id":"3959","type":"Selection"},{"attributes":{},"id":"3960","type":"UnionRenderers"},{"attributes":{"source":{"id":"4008"}},"id":"4012","type":"CDSView"},{"attributes":{},"id":"4346","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4308","type":"Line"},{"attributes":{"source":{"id":"4306"}},"id":"4310","type":"CDSView"},{"attributes":{},"id":"4026","type":"Selection"},{"attributes":{},"id":"4347","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4190","type":"Line"},{"attributes":{},"id":"3932","type":"HelpTool"},{"attributes":{},"id":"4027","type":"UnionRenderers"},{"attributes":{},"id":"3927","type":"PanTool"},{"attributes":{},"id":"4223","type":"UnionRenderers"},{"attributes":{},"id":"4222","type":"Selection"},{"attributes":{"label":{"value":"BERT-base teacher"},"renderers":[{"id":"4191"}]},"id":"4225","type":"LegendItem"},{"attributes":{},"id":"3915","type":"LinearScale"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"3952"},{"id":"3969"},{"id":"3986"},{"id":"4011"},{"id":"4034"},{"id":"4059"},{"id":"4092"},{"id":"4123"},{"id":"4156"},{"id":"4229"},{"id":"4268"},{"id":"4309"}]},"id":"3965","type":"LegendItem"}],"root_ids":["3908"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"fd7e38cb-d2c7-4697-b933-b250813baacb","root_ids":["3908"],"roots":{"3908":"4a516b24-8106-4c2b-b2e6-41e770a69198"}}];
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