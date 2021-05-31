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
    
      
      
    
      var element = document.getElementById("1ae3e3e5-621a-413e-ba74-4c6c37dcff4c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1ae3e3e5-621a-413e-ba74-4c6c37dcff4c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c5be711c-d425-407b-b486-33fa3c61fd08":{"roots":{"references":[{"attributes":{},"id":"5303","type":"Selection"},{"attributes":{},"id":"5304","type":"UnionRenderers"},{"attributes":{},"id":"5305","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5215"},{"id":"5216"},{"id":"5217"},{"id":"5218"},{"id":"5219"},{"id":"5220"}]},"id":"5222","type":"Toolbar"},{"attributes":{"source":{"id":"5236"}},"id":"5240","type":"CDSView"},{"attributes":{},"id":"5306","type":"UnionRenderers"},{"attributes":{},"id":"5219","type":"ResetTool"},{"attributes":{"data_source":{"id":"5421"},"glyph":{"id":"5422"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5423"},"selection_glyph":null,"view":{"id":"5425"}},"id":"5424","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5276"},"selection_policy":{"id":"5277"}},"id":"5259","type":"ColumnDataSource"},{"attributes":{"axis_label":"F1","formatter":{"id":"5244"},"ticker":{"id":"5212"}},"id":"5211","type":"LinearAxis"},{"attributes":{"end":0.8},"id":"5229","type":"Range1d"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"5310"}]},"id":"5332","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5334","type":"Line"},{"attributes":{"data_source":{"id":"5333"},"glyph":{"id":"5334"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5335"},"selection_glyph":null,"view":{"id":"5337"}},"id":"5336","type":"GlyphRenderer"},{"attributes":{},"id":"5218","type":"SaveTool"},{"attributes":{},"id":"5215","type":"PanTool"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"5230","type":"Label"},{"attributes":{},"id":"5330","type":"Selection"},{"attributes":{"axis":{"id":"5207"},"ticker":null},"id":"5210","type":"Grid"},{"attributes":{},"id":"5331","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"5387"},"selection_policy":{"id":"5388"}},"id":"5360","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5358"},"selection_policy":{"id":"5359"}},"id":"5333","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5259"},"glyph":{"id":"5260"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5261"},"selection_glyph":null,"view":{"id":"5263"}},"id":"5262","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5360"},"glyph":{"id":"5361"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5362"},"selection_glyph":null,"view":{"id":"5364"}},"id":"5363","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5236"},"glyph":{"id":"5237"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5238"},"selection_glyph":null,"view":{"id":"5240"}},"id":"5239","type":"GlyphRenderer"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"5197","type":"Title"},{"attributes":{"data":{"x":[0.5023148148148149,0.4998734085648149,0.3219943576388893,0.23756691261574106,0.18968822337962976,0.15945999710648154,0.12708875868055594],"y":[90.32458147221426,90.22195941338013,89.03656646065757,87.8561484925226,86.9851273164745,86.66302391758462,86.23578242662717]},"selected":{"id":"5452"},"selection_policy":{"id":"5453"}},"id":"5421","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5360"}},"id":"5364","type":"CDSView"},{"attributes":{},"id":"5220","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5335","type":"Line"},{"attributes":{"source":{"id":"5333"}},"id":"5337","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5361","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5280","type":"Scatter"},{"attributes":{},"id":"5358","type":"Selection"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"5239"},{"id":"5262"},{"id":"5287"},{"id":"5336"},{"id":"5393"},{"id":"5458"},{"id":"5531"}]},"id":"5252","type":"LegendItem"},{"attributes":{},"id":"5359","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5255","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5249"},"selection_policy":{"id":"5250"}},"id":"5236","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5237","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5260","type":"Line"},{"attributes":{},"id":"5208","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5261","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"5252"},{"id":"5332"},{"id":"5389"},{"id":"5454"},{"id":"5527"}],"location":"bottom_right"},"id":"5251","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5362","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5238","type":"Line"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"5363"}]},"id":"5389","type":"LegendItem"},{"attributes":{},"id":"5489","type":"UnionRenderers"},{"attributes":{},"id":"5387","type":"Selection"},{"attributes":{},"id":"5205","type":"LinearScale"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"5253","type":"Label"},{"attributes":{},"id":"5388","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5528"},"glyph":{"id":"5529"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5530"},"selection_glyph":null,"view":{"id":"5532"}},"id":"5531","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5391","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5529","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5419"},"selection_policy":{"id":"5420"}},"id":"5390","type":"ColumnDataSource"},{"attributes":{},"id":"5212","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5256","type":"Scatter"},{"attributes":{"data_source":{"id":"5390"},"glyph":{"id":"5391"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5392"},"selection_glyph":null,"view":{"id":"5394"}},"id":"5393","type":"GlyphRenderer"},{"attributes":{"axis_label":"Density","formatter":{"id":"5242"},"ticker":{"id":"5208"}},"id":"5207","type":"LinearAxis"},{"attributes":{},"id":"5525","type":"Selection"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5422","type":"Line"},{"attributes":{"source":{"id":"5421"}},"id":"5425","type":"CDSView"},{"attributes":{"data_source":{"id":"5307"},"glyph":{"id":"5308"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5309"},"selection_glyph":null,"view":{"id":"5311"}},"id":"5310","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5233","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5423","type":"Line"},{"attributes":{},"id":"5526","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5392","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"5247"},"selection_policy":{"id":"5248"}},"id":"5231","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5390"}},"id":"5394","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5232","type":"Scatter"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"5274"},"selection_policy":{"id":"5275"}},"id":"5254","type":"ColumnDataSource"},{"attributes":{},"id":"5250","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5565"},"selection_policy":{"id":"5566"}},"id":"5528","type":"ColumnDataSource"},{"attributes":{},"id":"5419","type":"Selection"},{"attributes":{},"id":"5274","type":"Selection"},{"attributes":{},"id":"5420","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5530","type":"Line"},{"attributes":{},"id":"5275","type":"UnionRenderers"},{"attributes":{"source":{"id":"5528"}},"id":"5532","type":"CDSView"},{"attributes":{"data_source":{"id":"5254"},"glyph":{"id":"5255"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5256"},"selection_glyph":null,"view":{"id":"5258"}},"id":"5257","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5455"},"glyph":{"id":"5456"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5457"},"selection_glyph":null,"view":{"id":"5459"}},"id":"5458","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5456","type":"Line"},{"attributes":{},"id":"5565","type":"Selection"},{"attributes":{},"id":"5276","type":"Selection"},{"attributes":{"label":{"value":"Hybrid, large"},"renderers":[{"id":"5424"}]},"id":"5454","type":"LegendItem"},{"attributes":{},"id":"5277","type":"UnionRenderers"},{"attributes":{},"id":"5566","type":"UnionRenderers"},{"attributes":{},"id":"5242","type":"BasicTickFormatter"},{"attributes":{},"id":"5216","type":"WheelZoomTool"},{"attributes":{},"id":"5452","type":"Selection"},{"attributes":{},"id":"5244","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"5221"}},"id":"5217","type":"BoxZoomTool"},{"attributes":{},"id":"5453","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5490"},"glyph":{"id":"5491"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5492"},"selection_glyph":null,"view":{"id":"5494"}},"id":"5493","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5231"},"glyph":{"id":"5232"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5233"},"selection_glyph":null,"view":{"id":"5235"}},"id":"5234","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5285","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5305"},"selection_policy":{"id":"5306"}},"id":"5284","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5231"}},"id":"5235","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5281","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"5221","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"5284"},"glyph":{"id":"5285"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5286"},"selection_glyph":null,"view":{"id":"5288"}},"id":"5287","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5488"},"selection_policy":{"id":"5489"}},"id":"5455","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5279"}},"id":"5283","type":"CDSView"},{"attributes":{"data":{"x":[0.38938319830246915,0.29069613233024694,0.22240909529320985,0.2187620563271605,0.15897472993827155,0.1255726755401234],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"5525"},"selection_policy":{"id":"5526"}},"id":"5490","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5279"},"glyph":{"id":"5280"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5281"},"selection_glyph":null,"view":{"id":"5283"}},"id":"5282","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5491","type":"Line"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"5330"},"selection_policy":{"id":"5331"}},"id":"5307","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"5493"}]},"id":"5527","type":"LegendItem"},{"attributes":{},"id":"5247","type":"Selection"},{"attributes":{},"id":"5203","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5492","type":"Line"},{"attributes":{},"id":"5201","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5309","type":"Line"},{"attributes":{"source":{"id":"5307"}},"id":"5311","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5457","type":"Line"},{"attributes":{},"id":"5248","type":"UnionRenderers"},{"attributes":{"axis":{"id":"5211"},"dimension":1,"ticker":null},"id":"5214","type":"Grid"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5308","type":"Line"},{"attributes":{"source":{"id":"5455"}},"id":"5459","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5286","type":"Line"},{"attributes":{"source":{"id":"5490"}},"id":"5494","type":"CDSView"},{"attributes":{"source":{"id":"5254"}},"id":"5258","type":"CDSView"},{"attributes":{"source":{"id":"5259"}},"id":"5263","type":"CDSView"},{"attributes":{"source":{"id":"5284"}},"id":"5288","type":"CDSView"},{"attributes":{"below":[{"id":"5207"}],"center":[{"id":"5210"},{"id":"5214"},{"id":"5230"},{"id":"5251"},{"id":"5253"},{"id":"5278"}],"left":[{"id":"5211"}],"plot_width":800,"renderers":[{"id":"5234"},{"id":"5239"},{"id":"5257"},{"id":"5262"},{"id":"5282"},{"id":"5287"},{"id":"5310"},{"id":"5336"},{"id":"5363"},{"id":"5393"},{"id":"5424"},{"id":"5458"},{"id":"5493"},{"id":"5531"}],"title":{"id":"5197"},"toolbar":{"id":"5222"},"x_range":{"id":"5229"},"x_scale":{"id":"5203"},"y_range":{"id":"5201"},"y_scale":{"id":"5205"}},"id":"5196","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"5303"},"selection_policy":{"id":"5304"}},"id":"5279","type":"ColumnDataSource"},{"attributes":{},"id":"5488","type":"Selection"},{"attributes":{},"id":"5249","type":"Selection"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"5278","type":"Label"}],"root_ids":["5196"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"c5be711c-d425-407b-b486-33fa3c61fd08","root_ids":["5196"],"roots":{"5196":"1ae3e3e5-621a-413e-ba74-4c6c37dcff4c"}}];
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