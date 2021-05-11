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
    
      
      
    
      var element = document.getElementById("302379f5-31e5-4318-ac1b-b91769926f98");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '302379f5-31e5-4318-ac1b-b91769926f98' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9cca483b-d3f3-4766-9646-00ddc3072517":{"roots":{"references":[{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"4447","type":"Title"},{"attributes":{"text":"TinyBERT","x":0.5,"y":77.7},"id":"4503","type":"Label"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4535","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4706","type":"Line"},{"attributes":{"data_source":{"id":"4481"},"glyph":{"id":"4482"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4483"},"selection_glyph":null,"view":{"id":"4485"}},"id":"4484","type":"GlyphRenderer"},{"attributes":{},"id":"4465","type":"PanTool"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4738"},"selection_policy":{"id":"4739"}},"id":"4705","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4555"},"selection_policy":{"id":"4556"}},"id":"4534","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4531","type":"Scatter"},{"attributes":{},"id":"4458","type":"BasicTicker"},{"attributes":{},"id":"4470","type":"HelpTool"},{"attributes":{"data_source":{"id":"4705"},"glyph":{"id":"4706"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4707"},"selection_glyph":null,"view":{"id":"4709"}},"id":"4708","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4534"},"glyph":{"id":"4535"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4536"},"selection_glyph":null,"view":{"id":"4538"}},"id":"4537","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4505","type":"Scatter"},{"attributes":{"source":{"id":"4529"}},"id":"4533","type":"CDSView"},{"attributes":{"data_source":{"id":"4529"},"glyph":{"id":"4530"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4531"},"selection_glyph":null,"view":{"id":"4533"}},"id":"4532","type":"GlyphRenderer"},{"attributes":{"axis_label":"Density","formatter":{"id":"4492"},"ticker":{"id":"4458"}},"id":"4457","type":"LinearAxis"},{"attributes":{"data":{"x":[0.2417173032407408,0.2396677276234569,0.17903645833333348,0.1781864872685185],"y":[75.7435955094686,75.42311762499034,74.35790789620452,74.07805149116633]},"selected":{"id":"4580"},"selection_policy":{"id":"4581"}},"id":"4557","type":"ColumnDataSource"},{"attributes":{},"id":"4497","type":"Selection"},{"attributes":{},"id":"4608","type":"Selection"},{"attributes":{},"id":"4498","type":"UnionRenderers"},{"attributes":{},"id":"4609","type":"UnionRenderers"},{"attributes":{"source":{"id":"4481"}},"id":"4485","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4707","type":"Line"},{"attributes":{"source":{"id":"4557"}},"id":"4561","type":"CDSView"},{"attributes":{"source":{"id":"4705"}},"id":"4709","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4558","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4465"},{"id":"4466"},{"id":"4467"},{"id":"4468"},{"id":"4469"},{"id":"4470"}]},"id":"4472","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4536","type":"Line"},{"attributes":{"source":{"id":"4534"}},"id":"4538","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4641","type":"Line"},{"attributes":{"data_source":{"id":"4640"},"glyph":{"id":"4641"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4642"},"selection_glyph":null,"view":{"id":"4644"}},"id":"4643","type":"GlyphRenderer"},{"attributes":{"click_policy":"hide","items":[{"id":"4502"},{"id":"4582"},{"id":"4639"},{"id":"4704"}],"location":"bottom_right"},"id":"4501","type":"Legend"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4499"},"selection_policy":{"id":"4500"}},"id":"4486","type":"ColumnDataSource"},{"attributes":{},"id":"4451","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4488","type":"Line"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"4613"}]},"id":"4639","type":"LegendItem"},{"attributes":{},"id":"4738","type":"Selection"},{"attributes":{},"id":"4739","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4526"},"selection_policy":{"id":"4527"}},"id":"4509","type":"ColumnDataSource"},{"attributes":{},"id":"4553","type":"Selection"},{"attributes":{"data_source":{"id":"4509"},"glyph":{"id":"4510"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4511"},"selection_glyph":null,"view":{"id":"4513"}},"id":"4512","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4671"},"glyph":{"id":"4672"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4673"},"selection_glyph":null,"view":{"id":"4675"}},"id":"4674","type":"GlyphRenderer"},{"attributes":{},"id":"4554","type":"UnionRenderers"},{"attributes":{},"id":"4637","type":"Selection"},{"attributes":{},"id":"4638","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4482","type":"Scatter"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[79.2]},"selected":{"id":"4553"},"selection_policy":{"id":"4554"}},"id":"4529","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"4457"},"ticker":null},"id":"4460","type":"Grid"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4510","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[77.7]},"selected":{"id":"4524"},"selection_policy":{"id":"4525"}},"id":"4504","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4506","type":"Scatter"},{"attributes":{"axis":{"id":"4461"},"dimension":1,"ticker":null},"id":"4464","type":"Grid"},{"attributes":{"source":{"id":"4504"}},"id":"4508","type":"CDSView"},{"attributes":{"data_source":{"id":"4486"},"glyph":{"id":"4487"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4488"},"selection_glyph":null,"view":{"id":"4490"}},"id":"4489","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4504"},"glyph":{"id":"4505"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4506"},"selection_glyph":null,"view":{"id":"4508"}},"id":"4507","type":"GlyphRenderer"},{"attributes":{"label":{"value":"BERT-base (F1 = 76.7)"},"renderers":[{"id":"4489"},{"id":"4512"},{"id":"4537"},{"id":"4586"},{"id":"4643"},{"id":"4708"}]},"id":"4502","type":"LegendItem"},{"attributes":{"data_source":{"id":"4557"},"glyph":{"id":"4558"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4559"},"selection_glyph":null,"view":{"id":"4561"}},"id":"4560","type":"GlyphRenderer"},{"attributes":{"end":0.8},"id":"4479","type":"Range1d"},{"attributes":{},"id":"4466","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"4457"}],"center":[{"id":"4460"},{"id":"4464"},{"id":"4480"},{"id":"4501"},{"id":"4503"},{"id":"4528"}],"left":[{"id":"4461"}],"plot_width":800,"renderers":[{"id":"4484"},{"id":"4489"},{"id":"4507"},{"id":"4512"},{"id":"4532"},{"id":"4537"},{"id":"4560"},{"id":"4586"},{"id":"4613"},{"id":"4643"},{"id":"4674"},{"id":"4708"}],"title":{"id":"4447"},"toolbar":{"id":"4472"},"x_range":{"id":"4479"},"x_scale":{"id":"4453"},"y_range":{"id":"4451"},"y_scale":{"id":"4455"}},"id":"4446","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4555","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4669"},"selection_policy":{"id":"4670"}},"id":"4640","type":"ColumnDataSource"},{"attributes":{},"id":"4556","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4530","type":"Scatter"},{"attributes":{"data":{"x":[0.34007282021604945,0.32972849151234573,0.3241524402006174,0.3233748070987654,0.251953125,0.24984929591049398,0.18021797839506182,0.17889781057098764],"y":[76.36922308183819,75.58377333824575,75.48730979224833,75.30785179817528,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"4702"},"selection_policy":{"id":"4703"}},"id":"4671","type":"ColumnDataSource"},{"attributes":{"text":"DistilBERT","x":0.5,"y":68.1776176526635},"id":"4480","type":"Label"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4672","type":"Line"},{"attributes":{"source":{"id":"4671"}},"id":"4675","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4511","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4673","type":"Line"},{"attributes":{},"id":"4455","type":"LinearScale"},{"attributes":{"source":{"id":"4509"}},"id":"4513","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4642","type":"Line"},{"attributes":{"source":{"id":"4640"}},"id":"4644","type":"CDSView"},{"attributes":{"axis_label":"F1","formatter":{"id":"4494"},"ticker":{"id":"4462"}},"id":"4461","type":"LinearAxis"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4584","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4471","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4559","type":"Line"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"4560"}]},"id":"4582","type":"LegendItem"},{"attributes":{},"id":"4494","type":"BasicTickFormatter"},{"attributes":{},"id":"4462","type":"BasicTicker"},{"attributes":{"data_source":{"id":"4583"},"glyph":{"id":"4584"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4585"},"selection_glyph":null,"view":{"id":"4587"}},"id":"4586","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4483","type":"Scatter"},{"attributes":{},"id":"4669","type":"Selection"},{"attributes":{},"id":"4670","type":"UnionRenderers"},{"attributes":{},"id":"4524","type":"Selection"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":79.2},"id":"4528","type":"Label"},{"attributes":{"overlay":{"id":"4471"}},"id":"4467","type":"BoxZoomTool"},{"attributes":{},"id":"4525","type":"UnionRenderers"},{"attributes":{},"id":"4580","type":"Selection"},{"attributes":{},"id":"4581","type":"UnionRenderers"},{"attributes":{"source":{"id":"4583"}},"id":"4587","type":"CDSView"},{"attributes":{"source":{"id":"4486"}},"id":"4490","type":"CDSView"},{"attributes":{},"id":"4453","type":"LinearScale"},{"attributes":{},"id":"4469","type":"ResetTool"},{"attributes":{"data":{"x":[0.40983072916666674,0.3211805555555556,0.25958478009259256],"y":[76.9922204715519,75.63264927831169,75.19978410639239]},"selected":{"id":"4637"},"selection_policy":{"id":"4638"}},"id":"4610","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"4674"}]},"id":"4704","type":"LegendItem"},{"attributes":{},"id":"4526","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4608"},"selection_policy":{"id":"4609"}},"id":"4583","type":"ColumnDataSource"},{"attributes":{},"id":"4500","type":"UnionRenderers"},{"attributes":{},"id":"4527","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4610"},"glyph":{"id":"4611"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4612"},"selection_glyph":null,"view":{"id":"4614"}},"id":"4613","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.5],"y":[68.1776176526635]},"selected":{"id":"4497"},"selection_policy":{"id":"4498"}},"id":"4481","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4487","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4612","type":"Line"},{"attributes":{},"id":"4499","type":"Selection"},{"attributes":{},"id":"4702","type":"Selection"},{"attributes":{"source":{"id":"4610"}},"id":"4614","type":"CDSView"},{"attributes":{},"id":"4703","type":"UnionRenderers"},{"attributes":{},"id":"4492","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4585","type":"Line"},{"attributes":{},"id":"4468","type":"SaveTool"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4611","type":"Line"}],"root_ids":["4446"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"9cca483b-d3f3-4766-9646-00ddc3072517","root_ids":["4446"],"roots":{"4446":"302379f5-31e5-4318-ac1b-b91769926f98"}}];
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