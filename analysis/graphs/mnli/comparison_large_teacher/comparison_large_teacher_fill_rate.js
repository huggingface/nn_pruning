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
    
      
      
    
      var element = document.getElementById("fce402da-157e-4bd6-938e-cf6466fc0baa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fce402da-157e-4bd6-938e-cf6466fc0baa' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d1415d9e-5155-4388-a4c5-6e9d1fa42b95":{"roots":{"references":[{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11277","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11278","type":"Line"},{"attributes":{},"id":"11083","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11132","type":"Line"},{"attributes":{},"id":"11084","type":"UnionRenderers"},{"attributes":{},"id":"11428","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"11152"},"selection_policy":{"id":"11153"}},"id":"11131","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[84.3]},"selected":{"id":"11239"},"selection_policy":{"id":"11240"}},"id":"11207","type":"ColumnDataSource"},{"attributes":{"source":{"id":"11276"}},"id":"11280","type":"CDSView"},{"attributes":{"data_source":{"id":"11131"},"glyph":{"id":"11132"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11133"},"selection_glyph":null,"view":{"id":"11135"}},"id":"11134","type":"GlyphRenderer"},{"attributes":{"source":{"id":"11311"}},"id":"11315","type":"CDSView"},{"attributes":{"source":{"id":"11126"}},"id":"11130","type":"CDSView"},{"attributes":{"data_source":{"id":"11126"},"glyph":{"id":"11127"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11128"},"selection_glyph":null,"view":{"id":"11130"}},"id":"11129","type":"GlyphRenderer"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11312","type":"Line"},{"attributes":{"data_source":{"id":"11072"},"glyph":{"id":"11073"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11074"},"selection_glyph":null,"view":{"id":"11076"}},"id":"11075","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11209","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"11056","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11155","type":"Line"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"11066","type":"Label"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11050"},{"id":"11051"},{"id":"11052"},{"id":"11053"},{"id":"11054"},{"id":"11055"}]},"id":"11057","type":"Toolbar"},{"attributes":{},"id":"11085","type":"Selection"},{"attributes":{"data_source":{"id":"11154"},"glyph":{"id":"11155"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11156"},"selection_glyph":null,"view":{"id":"11158"}},"id":"11157","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11430","type":"Line"},{"attributes":{},"id":"11086","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11133","type":"Line"},{"attributes":{},"id":"11309","type":"Selection"},{"attributes":{},"id":"11310","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11128","type":"Scatter"},{"attributes":{"source":{"id":"11131"}},"id":"11135","type":"CDSView"},{"attributes":{"source":{"id":"11067"}},"id":"11071","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11431","type":"Line"},{"attributes":{"data_source":{"id":"11067"},"glyph":{"id":"11068"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11069"},"selection_glyph":null,"view":{"id":"11071"}},"id":"11070","type":"GlyphRenderer"},{"attributes":{"source":{"id":"11429"}},"id":"11433","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11074","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11350","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11313","type":"Line"},{"attributes":{},"id":"11470","type":"Selection"},{"attributes":{},"id":"11150","type":"Selection"},{"attributes":{},"id":"11471","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"11349"},"glyph":{"id":"11350"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11351"},"selection_glyph":null,"view":{"id":"11353"}},"id":"11352","type":"GlyphRenderer"},{"attributes":{},"id":"11054","type":"ResetTool"},{"attributes":{},"id":"11151","type":"UnionRenderers"},{"attributes":{"label":{"value":"BERT-base teacher"},"renderers":[{"id":"11314"}]},"id":"11348","type":"LegendItem"},{"attributes":{"data_source":{"id":"11089"},"glyph":{"id":"11090"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11091"},"selection_glyph":null,"view":{"id":"11093"}},"id":"11092","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11090","type":"Line"},{"attributes":{},"id":"11346","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11073","type":"Line"},{"attributes":{},"id":"11152","type":"Selection"},{"attributes":{},"id":"11347","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11107","type":"Line"},{"attributes":{},"id":"11153","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"11088"},{"id":"11348"}],"location":"bottom_right"},"id":"11087","type":"Legend"},{"attributes":{"data_source":{"id":"11311"},"glyph":{"id":"11312"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11313"},"selection_glyph":null,"view":{"id":"11315"}},"id":"11314","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"11104"},"selection_policy":{"id":"11105"}},"id":"11089","type":"ColumnDataSource"},{"attributes":{},"id":"11038","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11091","type":"Line"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"11075"},{"id":"11092"},{"id":"11109"},{"id":"11134"},{"id":"11157"},{"id":"11182"},{"id":"11215"},{"id":"11246"},{"id":"11279"},{"id":"11352"},{"id":"11391"},{"id":"11432"}]},"id":"11088","type":"LegendItem"},{"attributes":{"source":{"id":"11089"}},"id":"11093","type":"CDSView"},{"attributes":{"source":{"id":"11072"}},"id":"11076","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11127","type":"Scatter"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"11386"},"selection_policy":{"id":"11387"}},"id":"11349","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"11085"},"selection_policy":{"id":"11086"}},"id":"11072","type":"ColumnDataSource"},{"attributes":{},"id":"11078","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11389","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"11470"},"selection_policy":{"id":"11471"}},"id":"11429","type":"ColumnDataSource"},{"attributes":{},"id":"11040","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"11177"},"selection_policy":{"id":"11178"}},"id":"11154","type":"ColumnDataSource"},{"attributes":{},"id":"11104","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11180","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11351","type":"Line"},{"attributes":{},"id":"11105","type":"UnionRenderers"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"11032","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11208","type":"Scatter"},{"attributes":{"source":{"id":"11349"}},"id":"11353","type":"CDSView"},{"attributes":{"data_source":{"id":"11179"},"glyph":{"id":"11180"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11181"},"selection_glyph":null,"view":{"id":"11183"}},"id":"11182","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"11388"},"glyph":{"id":"11389"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11390"},"selection_glyph":null,"view":{"id":"11392"}},"id":"11391","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11156","type":"Line"},{"attributes":{},"id":"11080","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"11154"}},"id":"11158","type":"CDSView"},{"attributes":{"data_source":{"id":"11106"},"glyph":{"id":"11107"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11108"},"selection_glyph":null,"view":{"id":"11110"}},"id":"11109","type":"GlyphRenderer"},{"attributes":{},"id":"11386","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"11123"},"selection_policy":{"id":"11124"}},"id":"11106","type":"ColumnDataSource"},{"attributes":{},"id":"11177","type":"Selection"},{"attributes":{},"id":"11387","type":"UnionRenderers"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":84.3},"id":"11206","type":"Label"},{"attributes":{},"id":"11178","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11108","type":"Line"},{"attributes":{"source":{"id":"11106"}},"id":"11110","type":"CDSView"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"11150"},"selection_policy":{"id":"11151"}},"id":"11126","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"11056"}},"id":"11052","type":"BoxZoomTool"},{"attributes":{},"id":"11055","type":"HelpTool"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"11427"},"selection_policy":{"id":"11428"}},"id":"11388","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"11204"},"selection_policy":{"id":"11205"}},"id":"11179","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"11207"},"glyph":{"id":"11208"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11209"},"selection_glyph":null,"view":{"id":"11211"}},"id":"11210","type":"GlyphRenderer"},{"attributes":{},"id":"11123","type":"Selection"},{"attributes":{},"id":"11124","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11390","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11181","type":"Line"},{"attributes":{"source":{"id":"11388"}},"id":"11392","type":"CDSView"},{"attributes":{"data_source":{"id":"11429"},"glyph":{"id":"11430"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11431"},"selection_glyph":null,"view":{"id":"11433"}},"id":"11432","type":"GlyphRenderer"},{"attributes":{"source":{"id":"11179"}},"id":"11183","type":"CDSView"},{"attributes":{},"id":"11053","type":"SaveTool"},{"attributes":{"end":0.75},"id":"11064","type":"Range1d"},{"attributes":{},"id":"11051","type":"WheelZoomTool"},{"attributes":{},"id":"11427","type":"Selection"},{"attributes":{},"id":"11204","type":"Selection"},{"attributes":{},"id":"11205","type":"UnionRenderers"},{"attributes":{},"id":"11043","type":"BasicTicker"},{"attributes":{},"id":"11050","type":"PanTool"},{"attributes":{"end":86,"start":79},"id":"11065","type":"Range1d"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"11083"},"selection_policy":{"id":"11084"}},"id":"11067","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11213","type":"Line"},{"attributes":{},"id":"11047","type":"BasicTicker"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"11241"},"selection_policy":{"id":"11242"}},"id":"11212","type":"ColumnDataSource"},{"attributes":{"source":{"id":"11207"}},"id":"11211","type":"CDSView"},{"attributes":{"data_source":{"id":"11212"},"glyph":{"id":"11213"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11214"},"selection_glyph":null,"view":{"id":"11216"}},"id":"11215","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.34212239583333326,0.2529296875,0.18093532986111116,0.12286603009259256],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"11346"},"selection_policy":{"id":"11347"}},"id":"11311","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"11243"},"glyph":{"id":"11244"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11245"},"selection_glyph":null,"view":{"id":"11247"}},"id":"11246","type":"GlyphRenderer"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"11078"},"ticker":{"id":"11043"}},"id":"11042","type":"LinearAxis"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"11309"},"selection_policy":{"id":"11310"}},"id":"11276","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"11046"},"dimension":1,"ticker":null},"id":"11049","type":"Grid"},{"attributes":{"below":[{"id":"11042"}],"center":[{"id":"11045"},{"id":"11049"},{"id":"11066"},{"id":"11087"},{"id":"11125"},{"id":"11206"}],"left":[{"id":"11046"}],"plot_width":800,"renderers":[{"id":"11070"},{"id":"11075"},{"id":"11092"},{"id":"11109"},{"id":"11129"},{"id":"11134"},{"id":"11157"},{"id":"11182"},{"id":"11210"},{"id":"11215"},{"id":"11246"},{"id":"11279"},{"id":"11314"},{"id":"11352"},{"id":"11391"},{"id":"11432"}],"title":{"id":"11032"},"toolbar":{"id":"11057"},"x_range":{"id":"11064"},"x_scale":{"id":"11038"},"y_range":{"id":"11065"},"y_scale":{"id":"11040"}},"id":"11031","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11214","type":"Line"},{"attributes":{"source":{"id":"11212"}},"id":"11216","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"11125","type":"Label"},{"attributes":{},"id":"11239","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11069","type":"Scatter"},{"attributes":{},"id":"11240","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11068","type":"Scatter"},{"attributes":{"axis_label":"Matched","formatter":{"id":"11080"},"ticker":{"id":"11047"}},"id":"11046","type":"LinearAxis"},{"attributes":{},"id":"11241","type":"Selection"},{"attributes":{},"id":"11242","type":"UnionRenderers"},{"attributes":{"axis":{"id":"11042"},"ticker":null},"id":"11045","type":"Grid"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"11274"},"selection_policy":{"id":"11275"}},"id":"11243","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11244","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11245","type":"Line"},{"attributes":{"source":{"id":"11243"}},"id":"11247","type":"CDSView"},{"attributes":{"data_source":{"id":"11276"},"glyph":{"id":"11277"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11278"},"selection_glyph":null,"view":{"id":"11280"}},"id":"11279","type":"GlyphRenderer"},{"attributes":{},"id":"11274","type":"Selection"},{"attributes":{},"id":"11275","type":"UnionRenderers"}],"root_ids":["11031"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"d1415d9e-5155-4388-a4c5-6e9d1fa42b95","root_ids":["11031"],"roots":{"11031":"fce402da-157e-4bd6-938e-cf6466fc0baa"}}];
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