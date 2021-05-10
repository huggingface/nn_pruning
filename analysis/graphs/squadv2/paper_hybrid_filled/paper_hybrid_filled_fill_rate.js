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
    
      
      
    
      var element = document.getElementById("80799374-2786-43ec-9c48-186161332939");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '80799374-2786-43ec-9c48-186161332939' but no matching script tag was found.")
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
                    
                  var docs_json = '{"75b9c3a0-fd0c-4819-8800-e1ad42d314cd":{"roots":{"references":[{"attributes":{"data_source":{"id":"4083"},"glyph":{"id":"4084"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4085"},"selection_glyph":null,"view":{"id":"4087"}},"id":"4086","type":"GlyphRenderer"},{"attributes":{},"id":"4042","type":"SaveTool"},{"attributes":{},"id":"4127","type":"UnionRenderers"},{"attributes":{},"id":"4211","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4084","type":"Line"},{"attributes":{},"id":"4128","type":"Selection"},{"attributes":{},"id":"4212","type":"Selection"},{"attributes":{"source":{"id":"4078"}},"id":"4082","type":"CDSView"},{"attributes":{},"id":"4036","type":"BasicTicker"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4101"},"selection_policy":{"id":"4100"}},"id":"4083","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5],"y":[77.7]},"selected":{"id":"4099"},"selection_policy":{"id":"4098"}},"id":"4078","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4080","type":"Scatter"},{"attributes":{"data_source":{"id":"4131"},"glyph":{"id":"4132"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4133"},"selection_glyph":null,"view":{"id":"4135"}},"id":"4134","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4060"},"glyph":{"id":"4061"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4062"},"selection_glyph":null,"view":{"id":"4064"}},"id":"4063","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4039"},{"id":"4040"},{"id":"4041"},{"id":"4042"},{"id":"4043"},{"id":"4044"}]},"id":"4046","type":"Toolbar"},{"attributes":{"data_source":{"id":"4078"},"glyph":{"id":"4079"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4080"},"selection_glyph":null,"view":{"id":"4082"}},"id":"4081","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"4045"}},"id":"4041","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4215","type":"Line"},{"attributes":{},"id":"4129","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4244"},"selection_policy":{"id":"4243"}},"id":"4214","type":"ColumnDataSource"},{"attributes":{},"id":"4044","type":"HelpTool"},{"attributes":{},"id":"4130","type":"Selection"},{"attributes":{"data_source":{"id":"4214"},"glyph":{"id":"4215"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4216"},"selection_glyph":null,"view":{"id":"4218"}},"id":"4217","type":"GlyphRenderer"},{"attributes":{"text":"TinyBERT","x":0.5,"y":77.7},"id":"4077","type":"Label"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[79.2]},"selected":{"id":"4128"},"selection_policy":{"id":"4127"}},"id":"4103","type":"ColumnDataSource"},{"attributes":{},"id":"4068","type":"BasicTickFormatter"},{"attributes":{"text":"DistilBERT","x":0.5,"y":68.1776176526635},"id":"4054","type":"Label"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"4021","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4085","type":"Line"},{"attributes":{"below":[{"id":"4031"}],"center":[{"id":"4034"},{"id":"4038"},{"id":"4054"},{"id":"4075"},{"id":"4077"},{"id":"4102"}],"left":[{"id":"4035"}],"plot_width":800,"renderers":[{"id":"4058"},{"id":"4063"},{"id":"4081"},{"id":"4086"},{"id":"4106"},{"id":"4111"},{"id":"4134"},{"id":"4160"},{"id":"4187"},{"id":"4217"}],"title":{"id":"4021"},"toolbar":{"id":"4046"},"x_range":{"id":"4053"},"x_scale":{"id":"4027"},"y_range":{"id":"4025"},"y_scale":{"id":"4029"}},"id":"4020","subtype":"Figure","type":"Plot"},{"attributes":{"end":0.8},"id":"4053","type":"Range1d"},{"attributes":{},"id":"4032","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4216","type":"Line"},{"attributes":{},"id":"4073","type":"UnionRenderers"},{"attributes":{"source":{"id":"4214"}},"id":"4218","type":"CDSView"},{"attributes":{},"id":"4043","type":"ResetTool"},{"attributes":{"axis_label":"Density","formatter":{"id":"4068"},"ticker":{"id":"4032"}},"id":"4031","type":"LinearAxis"},{"attributes":{"axis":{"id":"4031"},"ticker":null},"id":"4034","type":"Grid"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"4134"}]},"id":"4156","type":"LegendItem"},{"attributes":{},"id":"4100","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4158","type":"Line"},{"attributes":{},"id":"4074","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4062","type":"Line"},{"attributes":{"data_source":{"id":"4157"},"glyph":{"id":"4158"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4159"},"selection_glyph":null,"view":{"id":"4161"}},"id":"4160","type":"GlyphRenderer"},{"attributes":{},"id":"4243","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"4076"},{"id":"4156"},{"id":"4213"}],"location":"bottom_right"},"id":"4075","type":"Legend"},{"attributes":{},"id":"4040","type":"WheelZoomTool"},{"attributes":{},"id":"4244","type":"Selection"},{"attributes":{},"id":"4154","type":"UnionRenderers"},{"attributes":{},"id":"4072","type":"Selection"},{"attributes":{},"id":"4071","type":"UnionRenderers"},{"attributes":{},"id":"4155","type":"Selection"},{"attributes":{"data_source":{"id":"4108"},"glyph":{"id":"4109"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4110"},"selection_glyph":null,"view":{"id":"4112"}},"id":"4111","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4103"},"glyph":{"id":"4104"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4105"},"selection_glyph":null,"view":{"id":"4107"}},"id":"4106","type":"GlyphRenderer"},{"attributes":{},"id":"4027","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4130"},"selection_policy":{"id":"4129"}},"id":"4108","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.40983072916666674,0.3211805555555556,0.25958478009259256],"y":[76.9922204715519,75.63264927831169,73.52700323040777]},"selected":{"id":"4155"},"selection_policy":{"id":"4154"}},"id":"4131","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.34007282021604945,0.32972849151234573,0.3241524402006174,0.3233748070987654,0.251953125,0.24984929591049398,0.18021797839506182,0.17889781057098764],"y":[76.36922308183819,75.58377333824575,75.48730979224833,75.30785179817528,75.08828483164976,74.64560216432078,73.90823296051956,72.93998454800146]},"selected":{"id":"4212"},"selection_policy":{"id":"4211"}},"id":"4184","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4055"},"glyph":{"id":"4056"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4057"},"selection_glyph":null,"view":{"id":"4059"}},"id":"4058","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4103"}},"id":"4107","type":"CDSView"},{"attributes":{"label":{"value":"BERT-base (F1 = 76.7)"},"renderers":[{"id":"4063"},{"id":"4086"},{"id":"4111"},{"id":"4160"},{"id":"4217"}]},"id":"4076","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4105","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4183"},"selection_policy":{"id":"4182"}},"id":"4157","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4184"},"glyph":{"id":"4185"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4186"},"selection_glyph":null,"view":{"id":"4188"}},"id":"4187","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4057","type":"Scatter"},{"attributes":{"source":{"id":"4083"}},"id":"4087","type":"CDSView"},{"attributes":{"source":{"id":"4055"}},"id":"4059","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4109","type":"Line"},{"attributes":{},"id":"4101","type":"Selection"},{"attributes":{"source":{"id":"4184"}},"id":"4188","type":"CDSView"},{"attributes":{"source":{"id":"4108"}},"id":"4112","type":"CDSView"},{"attributes":{"data":{"x":[0.5],"y":[68.1776176526635]},"selected":{"id":"4072"},"selection_policy":{"id":"4071"}},"id":"4055","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4159","type":"Line"},{"attributes":{},"id":"4099","type":"Selection"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":79.2},"id":"4102","type":"Label"},{"attributes":{"source":{"id":"4157"}},"id":"4161","type":"CDSView"},{"attributes":{"source":{"id":"4131"}},"id":"4135","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4185","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4079","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4133","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4045","type":"BoxAnnotation"},{"attributes":{},"id":"4182","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"4187"}]},"id":"4213","type":"LegendItem"},{"attributes":{},"id":"4025","type":"DataRange1d"},{"attributes":{},"id":"4183","type":"Selection"},{"attributes":{},"id":"4029","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4110","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4104","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4061","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[76.7,76.7]},"selected":{"id":"4074"},"selection_policy":{"id":"4073"}},"id":"4060","type":"ColumnDataSource"},{"attributes":{},"id":"4039","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4056","type":"Scatter"},{"attributes":{"axis":{"id":"4035"},"dimension":1,"ticker":null},"id":"4038","type":"Grid"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4132","type":"Line"},{"attributes":{},"id":"4098","type":"UnionRenderers"},{"attributes":{"axis_label":"F1","formatter":{"id":"4066"},"ticker":{"id":"4036"}},"id":"4035","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4186","type":"Line"},{"attributes":{"source":{"id":"4060"}},"id":"4064","type":"CDSView"},{"attributes":{},"id":"4066","type":"BasicTickFormatter"}],"root_ids":["4020"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"75b9c3a0-fd0c-4819-8800-e1ad42d314cd","root_ids":["4020"],"roots":{"4020":"80799374-2786-43ec-9c48-186161332939"}}];
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