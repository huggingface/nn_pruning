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
    
      
      
    
      var element = document.getElementById("8f3d1e56-cff3-4a36-a479-7d72f484929c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8f3d1e56-cff3-4a36-a479-7d72f484929c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e971adaa-a917-438d-bf37-549f1730295a":{"roots":{"references":[{"attributes":{},"id":"5437","type":"HelpTool"},{"attributes":{"overlay":{"id":"5438"}},"id":"5434","type":"BoxZoomTool"},{"attributes":{"source":{"id":"5471"}},"id":"5475","type":"CDSView"},{"attributes":{},"id":"5429","type":"BasicTicker"},{"attributes":{"below":[{"id":"5424"}],"center":[{"id":"5427"},{"id":"5431"},{"id":"5447"},{"id":"5468"},{"id":"5470"},{"id":"5495"}],"left":[{"id":"5428"}],"plot_width":800,"renderers":[{"id":"5451"},{"id":"5456"},{"id":"5474"},{"id":"5479"},{"id":"5499"},{"id":"5504"},{"id":"5527"},{"id":"5553"},{"id":"5580"},{"id":"5610"},{"id":"5641"},{"id":"5675"},{"id":"5710"},{"id":"5748"}],"title":{"id":"5414"},"toolbar":{"id":"5439"},"x_range":{"id":"5446"},"x_scale":{"id":"5420"},"y_range":{"id":"5418"},"y_scale":{"id":"5422"}},"id":"5413","subtype":"Figure","type":"Plot"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"5414","type":"Title"},{"attributes":{},"id":"5433","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"5524"},"glyph":{"id":"5525"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5526"},"selection_glyph":null,"view":{"id":"5528"}},"id":"5527","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5455","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5473","type":"Scatter"},{"attributes":{"click_policy":"hide","items":[{"id":"5469"},{"id":"5549"},{"id":"5606"},{"id":"5671"},{"id":"5744"}],"location":"bottom_right"},"id":"5468","type":"Legend"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"5495","type":"Label"},{"attributes":{"axis_label":"Density","formatter":{"id":"5460"},"ticker":{"id":"5425"}},"id":"5424","type":"LinearAxis"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"5456"},{"id":"5479"},{"id":"5504"},{"id":"5553"},{"id":"5610"},{"id":"5675"},{"id":"5748"}]},"id":"5469","type":"LegendItem"},{"attributes":{"data_source":{"id":"5476"},"glyph":{"id":"5477"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5478"},"selection_glyph":null,"view":{"id":"5480"}},"id":"5479","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5466"},"selection_policy":{"id":"5465"}},"id":"5453","type":"ColumnDataSource"},{"attributes":{},"id":"5418","type":"DataRange1d"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5493"},"selection_policy":{"id":"5492"}},"id":"5476","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5471"},"glyph":{"id":"5472"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5473"},"selection_glyph":null,"view":{"id":"5475"}},"id":"5474","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5472","type":"Scatter"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"5447","type":"Label"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5454","type":"Line"},{"attributes":{"data_source":{"id":"5453"},"glyph":{"id":"5454"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5455"},"selection_glyph":null,"view":{"id":"5457"}},"id":"5456","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"5520"},"selection_policy":{"id":"5519"}},"id":"5496","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5477","type":"Line"},{"attributes":{},"id":"5420","type":"LinearScale"},{"attributes":{},"id":"5460","type":"BasicTickFormatter"},{"attributes":{},"id":"5436","type":"ResetTool"},{"attributes":{},"id":"5422","type":"LinearScale"},{"attributes":{"source":{"id":"5453"}},"id":"5457","type":"CDSView"},{"attributes":{},"id":"5435","type":"SaveTool"},{"attributes":{"axis":{"id":"5428"},"dimension":1,"ticker":null},"id":"5431","type":"Grid"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"5491"},"selection_policy":{"id":"5490"}},"id":"5471","type":"ColumnDataSource"},{"attributes":{},"id":"5462","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"5707"},"glyph":{"id":"5708"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5709"},"selection_glyph":null,"view":{"id":"5711"}},"id":"5710","type":"GlyphRenderer"},{"attributes":{},"id":"5463","type":"UnionRenderers"},{"attributes":{"source":{"id":"5476"}},"id":"5480","type":"CDSView"},{"attributes":{},"id":"5464","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5497","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"5438","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5478","type":"Line"},{"attributes":{"end":0.8},"id":"5446","type":"Range1d"},{"attributes":{},"id":"5547","type":"Selection"},{"attributes":{},"id":"5432","type":"PanTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5551","type":"Line"},{"attributes":{},"id":"5492","type":"UnionRenderers"},{"attributes":{},"id":"5781","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5672"},"glyph":{"id":"5673"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5674"},"selection_glyph":null,"view":{"id":"5676"}},"id":"5675","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5448"}},"id":"5452","type":"CDSView"},{"attributes":{},"id":"5493","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5575"},"selection_policy":{"id":"5574"}},"id":"5550","type":"ColumnDataSource"},{"attributes":{},"id":"5782","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5673","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"5464"},"selection_policy":{"id":"5463"}},"id":"5448","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5550"},"glyph":{"id":"5551"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5552"},"selection_glyph":null,"view":{"id":"5554"}},"id":"5553","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"5604"},"selection_policy":{"id":"5603"}},"id":"5577","type":"ColumnDataSource"},{"attributes":{},"id":"5668","type":"UnionRenderers"},{"attributes":{"axis_label":"F1","formatter":{"id":"5462"},"ticker":{"id":"5429"}},"id":"5428","type":"LinearAxis"},{"attributes":{},"id":"5669","type":"Selection"},{"attributes":{"source":{"id":"5577"}},"id":"5581","type":"CDSView"},{"attributes":{},"id":"5425","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5552","type":"Line"},{"attributes":{"source":{"id":"5550"}},"id":"5554","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5578","type":"Line"},{"attributes":{},"id":"5491","type":"Selection"},{"attributes":{"axis":{"id":"5424"},"ticker":null},"id":"5427","type":"Grid"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5502","type":"Line"},{"attributes":{"source":{"id":"5496"}},"id":"5500","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5498","type":"Scatter"},{"attributes":{"data_source":{"id":"5501"},"glyph":{"id":"5502"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5503"},"selection_glyph":null,"view":{"id":"5505"}},"id":"5504","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5705"},"selection_policy":{"id":"5704"}},"id":"5672","type":"ColumnDataSource"},{"attributes":{},"id":"5574","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5496"},"glyph":{"id":"5497"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5498"},"selection_glyph":null,"view":{"id":"5500"}},"id":"5499","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.38938319830246915,0.29069613233024694,0.22240909529320985,0.2187620563271605,0.15897472993827155,0.1255726755401234],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"5742"},"selection_policy":{"id":"5741"}},"id":"5707","type":"ColumnDataSource"},{"attributes":{},"id":"5490","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5522"},"selection_policy":{"id":"5521"}},"id":"5501","type":"ColumnDataSource"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5708","type":"Line"},{"attributes":{},"id":"5575","type":"Selection"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"5547"},"selection_policy":{"id":"5546"}},"id":"5524","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5707"}},"id":"5711","type":"CDSView"},{"attributes":{"source":{"id":"5524"}},"id":"5528","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5674","type":"Line"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5525","type":"Line"},{"attributes":{"data_source":{"id":"5638"},"glyph":{"id":"5639"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5640"},"selection_glyph":null,"view":{"id":"5642"}},"id":"5641","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5672"}},"id":"5676","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5503","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5608","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5709","type":"Line"},{"attributes":{"source":{"id":"5501"}},"id":"5505","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5449","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5579","type":"Line"},{"attributes":{},"id":"5704","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5448"},"glyph":{"id":"5449"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5450"},"selection_glyph":null,"view":{"id":"5452"}},"id":"5451","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5607"},"glyph":{"id":"5608"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5609"},"selection_glyph":null,"view":{"id":"5611"}},"id":"5610","type":"GlyphRenderer"},{"attributes":{},"id":"5705","type":"Selection"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"5580"}]},"id":"5606","type":"LegendItem"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"5470","type":"Label"},{"attributes":{},"id":"5519","type":"UnionRenderers"},{"attributes":{},"id":"5520","type":"Selection"},{"attributes":{},"id":"5603","type":"UnionRenderers"},{"attributes":{},"id":"5604","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5746","type":"Line"},{"attributes":{"data_source":{"id":"5745"},"glyph":{"id":"5746"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5747"},"selection_glyph":null,"view":{"id":"5749"}},"id":"5748","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"5710"}]},"id":"5744","type":"LegendItem"},{"attributes":{},"id":"5521","type":"UnionRenderers"},{"attributes":{},"id":"5522","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5636"},"selection_policy":{"id":"5635"}},"id":"5607","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5023148148148149,0.4998734085648149,0.3219943576388893,0.23756691261574106,0.18968822337962976,0.15945999710648154,0.12708875868055594],"y":[90.32458147221426,90.22195941338013,89.03656646065757,87.8561484925226,86.9851273164745,86.66302391758462,86.23578242662717]},"selected":{"id":"5669"},"selection_policy":{"id":"5668"}},"id":"5638","type":"ColumnDataSource"},{"attributes":{},"id":"5741","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5639","type":"Line"},{"attributes":{},"id":"5742","type":"Selection"},{"attributes":{"source":{"id":"5638"}},"id":"5642","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5640","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5450","type":"Scatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5432"},{"id":"5433"},{"id":"5434"},{"id":"5435"},{"id":"5436"},{"id":"5437"}]},"id":"5439","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5609","type":"Line"},{"attributes":{"source":{"id":"5607"}},"id":"5611","type":"CDSView"},{"attributes":{"label":{"value":"Hybrid, large"},"renderers":[{"id":"5641"}]},"id":"5671","type":"LegendItem"},{"attributes":{},"id":"5465","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5526","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"5782"},"selection_policy":{"id":"5781"}},"id":"5745","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"5527"}]},"id":"5549","type":"LegendItem"},{"attributes":{},"id":"5466","type":"Selection"},{"attributes":{},"id":"5635","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5577"},"glyph":{"id":"5578"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5579"},"selection_glyph":null,"view":{"id":"5581"}},"id":"5580","type":"GlyphRenderer"},{"attributes":{},"id":"5636","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5747","type":"Line"},{"attributes":{"source":{"id":"5745"}},"id":"5749","type":"CDSView"},{"attributes":{},"id":"5546","type":"UnionRenderers"}],"root_ids":["5413"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e971adaa-a917-438d-bf37-549f1730295a","root_ids":["5413"],"roots":{"5413":"8f3d1e56-cff3-4a36-a479-7d72f484929c"}}];
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