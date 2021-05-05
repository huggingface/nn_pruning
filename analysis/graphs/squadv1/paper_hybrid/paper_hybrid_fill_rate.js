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
    
      
      
    
      var element = document.getElementById("6b89f00e-d6d2-4cf2-a3ce-927087c97544");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6b89f00e-d6d2-4cf2-a3ce-927087c97544' but no matching script tag was found.")
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
                    
                  var docs_json = '{"85a32081-6fdd-4cf5-945d-618f1577e4dc":{"roots":{"references":[{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"5255","type":"Label"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5422"},"selection_policy":{"id":"5421"}},"id":"5392","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5392"},"glyph":{"id":"5393"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5394"},"selection_glyph":null,"view":{"id":"5396"}},"id":"5395","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5262","type":"Line"},{"attributes":{"data_source":{"id":"5492"},"glyph":{"id":"5493"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5494"},"selection_glyph":null,"view":{"id":"5496"}},"id":"5495","type":"GlyphRenderer"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5424","type":"Line"},{"attributes":{"data_source":{"id":"5281"},"glyph":{"id":"5282"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5283"},"selection_glyph":null,"view":{"id":"5285"}},"id":"5284","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5393","type":"Line"},{"attributes":{"source":{"id":"5423"}},"id":"5427","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5263","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5425","type":"Line"},{"attributes":{"source":{"id":"5261"}},"id":"5265","type":"CDSView"},{"attributes":{},"id":"5421","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5287","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5394","type":"Line"},{"attributes":{"source":{"id":"5392"}},"id":"5396","type":"CDSView"},{"attributes":{},"id":"5422","type":"Selection"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"5277"},"selection_policy":{"id":"5276"}},"id":"5256","type":"ColumnDataSource"},{"attributes":{},"id":"5276","type":"UnionRenderers"},{"attributes":{},"id":"5277","type":"Selection"},{"attributes":{},"id":"5220","type":"SaveTool"},{"attributes":{"data_source":{"id":"5261"},"glyph":{"id":"5262"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5263"},"selection_glyph":null,"view":{"id":"5265"}},"id":"5264","type":"GlyphRenderer"},{"attributes":{},"id":"5278","type":"UnionRenderers"},{"attributes":{},"id":"5279","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5258","type":"Scatter"},{"attributes":{},"id":"5252","type":"Selection"},{"attributes":{},"id":"5455","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5458","type":"Line"},{"attributes":{"data_source":{"id":"5457"},"glyph":{"id":"5458"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5459"},"selection_glyph":null,"view":{"id":"5461"}},"id":"5460","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5234","type":"Scatter"},{"attributes":{},"id":"5454","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid, large"},"renderers":[{"id":"5426"}]},"id":"5456","type":"LegendItem"},{"attributes":{},"id":"5246","type":"BasicTickFormatter"},{"attributes":{},"id":"5251","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"5254"},{"id":"5334"},{"id":"5391"},{"id":"5456"},{"id":"5529"}],"location":"bottom_right"},"id":"5253","type":"Legend"},{"attributes":{"source":{"id":"5256"}},"id":"5260","type":"CDSView"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"5306"},"selection_policy":{"id":"5305"}},"id":"5281","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5283","type":"Scatter"},{"attributes":{},"id":"5244","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"5286"},"glyph":{"id":"5287"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5288"},"selection_glyph":null,"view":{"id":"5290"}},"id":"5289","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5491"},"selection_policy":{"id":"5490"}},"id":"5457","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5308"},"selection_policy":{"id":"5307"}},"id":"5286","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.38938319830246915,0.29069613233024694,0.22240909529320985,0.2187620563271605,0.15897472993827155,0.1255726755401234],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"5528"},"selection_policy":{"id":"5527"}},"id":"5492","type":"ColumnDataSource"},{"attributes":{},"id":"5249","type":"UnionRenderers"},{"attributes":{"source":{"id":"5281"}},"id":"5285","type":"CDSView"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5493","type":"Line"},{"attributes":{},"id":"5217","type":"PanTool"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"5333"},"selection_policy":{"id":"5332"}},"id":"5309","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5423"},"glyph":{"id":"5424"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5425"},"selection_glyph":null,"view":{"id":"5427"}},"id":"5426","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5492"}},"id":"5496","type":"CDSView"},{"attributes":{},"id":"5490","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5311","type":"Line"},{"attributes":{"source":{"id":"5309"}},"id":"5313","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5459","type":"Line"},{"attributes":{},"id":"5218","type":"WheelZoomTool"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5310","type":"Line"},{"attributes":{"source":{"id":"5457"}},"id":"5461","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5288","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5494","type":"Line"},{"attributes":{"source":{"id":"5286"}},"id":"5290","type":"CDSView"},{"attributes":{},"id":"5491","type":"Selection"},{"attributes":{},"id":"5221","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"5223","type":"BoxAnnotation"},{"attributes":{},"id":"5250","type":"Selection"},{"attributes":{},"id":"5305","type":"UnionRenderers"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"5199","type":"Title"},{"attributes":{},"id":"5306","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5217"},{"id":"5218"},{"id":"5219"},{"id":"5220"},{"id":"5221"},{"id":"5222"}]},"id":"5224","type":"Toolbar"},{"attributes":{"data_source":{"id":"5256"},"glyph":{"id":"5257"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5258"},"selection_glyph":null,"view":{"id":"5260"}},"id":"5259","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"5223"}},"id":"5219","type":"BoxZoomTool"},{"attributes":{},"id":"5307","type":"UnionRenderers"},{"attributes":{"axis":{"id":"5213"},"dimension":1,"ticker":null},"id":"5216","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5282","type":"Scatter"},{"attributes":{},"id":"5308","type":"Selection"},{"attributes":{},"id":"5528","type":"Selection"},{"attributes":{},"id":"5222","type":"HelpTool"},{"attributes":{"data_source":{"id":"5309"},"glyph":{"id":"5310"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5311"},"selection_glyph":null,"view":{"id":"5313"}},"id":"5312","type":"GlyphRenderer"},{"attributes":{},"id":"5214","type":"BasicTicker"},{"attributes":{},"id":"5527","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5279"},"selection_policy":{"id":"5278"}},"id":"5261","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"5495"}]},"id":"5529","type":"LegendItem"},{"attributes":{"source":{"id":"5238"}},"id":"5242","type":"CDSView"},{"attributes":{"axis":{"id":"5209"},"ticker":null},"id":"5212","type":"Grid"},{"attributes":{"end":0.8},"id":"5231","type":"Range1d"},{"attributes":{"below":[{"id":"5209"}],"center":[{"id":"5212"},{"id":"5216"},{"id":"5232"},{"id":"5253"},{"id":"5255"},{"id":"5280"}],"left":[{"id":"5213"}],"plot_width":800,"renderers":[{"id":"5236"},{"id":"5241"},{"id":"5259"},{"id":"5264"},{"id":"5284"},{"id":"5289"},{"id":"5312"},{"id":"5338"},{"id":"5365"},{"id":"5395"},{"id":"5426"},{"id":"5460"},{"id":"5495"},{"id":"5533"}],"title":{"id":"5199"},"toolbar":{"id":"5224"},"x_range":{"id":"5231"},"x_scale":{"id":"5205"},"y_range":{"id":"5203"},"y_scale":{"id":"5207"}},"id":"5198","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Density","formatter":{"id":"5244"},"ticker":{"id":"5210"}},"id":"5209","type":"LinearAxis"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"5232","type":"Label"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5531","type":"Line"},{"attributes":{},"id":"5333","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5568"},"selection_policy":{"id":"5567"}},"id":"5530","type":"ColumnDataSource"},{"attributes":{},"id":"5332","type":"UnionRenderers"},{"attributes":{},"id":"5205","type":"LinearScale"},{"attributes":{"data_source":{"id":"5530"},"glyph":{"id":"5531"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5532"},"selection_glyph":null,"view":{"id":"5534"}},"id":"5533","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5336","type":"Line"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"5312"}]},"id":"5334","type":"LegendItem"},{"attributes":{"data_source":{"id":"5335"},"glyph":{"id":"5336"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5337"},"selection_glyph":null,"view":{"id":"5339"}},"id":"5338","type":"GlyphRenderer"},{"attributes":{},"id":"5210","type":"BasicTicker"},{"attributes":{"axis_label":"F1","formatter":{"id":"5246"},"ticker":{"id":"5214"}},"id":"5213","type":"LinearAxis"},{"attributes":{},"id":"5567","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5532","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5240","type":"Line"},{"attributes":{"source":{"id":"5530"}},"id":"5534","type":"CDSView"},{"attributes":{"source":{"id":"5233"}},"id":"5237","type":"CDSView"},{"attributes":{},"id":"5568","type":"Selection"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"5390"},"selection_policy":{"id":"5389"}},"id":"5362","type":"ColumnDataSource"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"5241"},{"id":"5264"},{"id":"5289"},{"id":"5338"},{"id":"5395"},{"id":"5460"},{"id":"5533"}]},"id":"5254","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5361"},"selection_policy":{"id":"5360"}},"id":"5335","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5362"},"glyph":{"id":"5363"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5364"},"selection_glyph":null,"view":{"id":"5366"}},"id":"5365","type":"GlyphRenderer"},{"attributes":{},"id":"5390","type":"Selection"},{"attributes":{"source":{"id":"5362"}},"id":"5366","type":"CDSView"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"5280","type":"Label"},{"attributes":{},"id":"5360","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"5250"},"selection_policy":{"id":"5249"}},"id":"5233","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5337","type":"Line"},{"attributes":{"source":{"id":"5335"}},"id":"5339","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5363","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5239","type":"Line"},{"attributes":{},"id":"5361","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5257","type":"Scatter"},{"attributes":{},"id":"5203","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5364","type":"Line"},{"attributes":{},"id":"5207","type":"LinearScale"},{"attributes":{"data_source":{"id":"5238"},"glyph":{"id":"5239"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5240"},"selection_glyph":null,"view":{"id":"5242"}},"id":"5241","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.5023148148148149,0.4998734085648149,0.3219943576388893,0.23756691261574106,0.18968822337962976,0.15945999710648154,0.12708875868055594],"y":[90.32458147221426,90.22195941338013,89.03656646065757,87.8561484925226,86.9851273164745,86.66302391758462,86.23578242662717]},"selected":{"id":"5455"},"selection_policy":{"id":"5454"}},"id":"5423","type":"ColumnDataSource"},{"attributes":{},"id":"5389","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"5365"}]},"id":"5391","type":"LegendItem"},{"attributes":{"data_source":{"id":"5233"},"glyph":{"id":"5234"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5235"},"selection_glyph":null,"view":{"id":"5237"}},"id":"5236","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5235","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5252"},"selection_policy":{"id":"5251"}},"id":"5238","type":"ColumnDataSource"}],"root_ids":["5198"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"85a32081-6fdd-4cf5-945d-618f1577e4dc","root_ids":["5198"],"roots":{"5198":"6b89f00e-d6d2-4cf2-a3ce-927087c97544"}}];
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