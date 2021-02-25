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
    
      
      
    
      var element = document.getElementById("e8db14b3-25e1-4ca0-8148-002291078c20");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e8db14b3-25e1-4ca0-8148-002291078c20' but no matching script tag was found.")
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
                    
                  var docs_json = '{"fa6a8992-61c7-45b2-83a4-1318c8f860e3":{"roots":{"references":[{"attributes":{"source":{"id":"5242"}},"id":"5246","type":"CDSView"},{"attributes":{},"id":"5253","type":"Selection"},{"attributes":{"data_source":{"id":"5242"},"glyph":{"id":"5243"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5244"},"selection_glyph":null,"view":{"id":"5246"}},"id":"5245","type":"GlyphRenderer"},{"attributes":{},"id":"5208","type":"LinearScale"},{"attributes":{},"id":"5564","type":"UnionRenderers"},{"attributes":{},"id":"5565","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5244","type":"Line"},{"attributes":{},"id":"5254","type":"UnionRenderers"},{"attributes":{},"id":"5224","type":"ResetTool"},{"attributes":{},"id":"5255","type":"Selection"},{"attributes":{},"id":"5223","type":"SaveTool"},{"attributes":{"source":{"id":"5610"}},"id":"5614","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"5226","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5568","type":"Line"},{"attributes":{},"id":"5252","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5569","type":"Line"},{"attributes":{"source":{"id":"5567"}},"id":"5571","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5611","type":"Line"},{"attributes":{},"id":"5607","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5220"},{"id":"5221"},{"id":"5222"},{"id":"5223"},{"id":"5224"},{"id":"5225"}]},"id":"5227","type":"Toolbar"},{"attributes":{},"id":"5608","type":"Selection"},{"attributes":{},"id":"5225","type":"HelpTool"},{"attributes":{"data_source":{"id":"5259"},"glyph":{"id":"5260"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5261"},"selection_glyph":null,"view":{"id":"5263"}},"id":"5262","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5657","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5260","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5612","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5277","type":"Line"},{"attributes":{"text":"Original Soft Movement","x":1.0,"y":84.9414161996943},"id":"5481","type":"Label"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"5274"},"selection_policy":{"id":"5273"}},"id":"5259","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5656"},"glyph":{"id":"5657"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5658"},"selection_glyph":null,"view":{"id":"5660"}},"id":"5659","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5298","type":"Scatter"},{"attributes":{"data":{"x":[1.63],"y":[82.2]},"selected":{"id":"5253"},"selection_policy":{"id":"5252"}},"id":"5237","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5237"},"glyph":{"id":"5238"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5239"},"selection_glyph":null,"view":{"id":"5241"}},"id":"5240","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5261","type":"Line"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"5613"}]},"id":"5655","type":"LegendItem"},{"attributes":{"source":{"id":"5259"}},"id":"5263","type":"CDSView"},{"attributes":{},"id":"5210","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5239","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5297","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5238","type":"Scatter"},{"attributes":{},"id":"5652","type":"UnionRenderers"},{"attributes":{},"id":"5653","type":"Selection"},{"attributes":{"text":"TinyBERT","x":2.0,"y":84.6},"id":"5295","type":"Label"},{"attributes":{"overlay":{"id":"5226"}},"id":"5222","type":"BoxZoomTool"},{"attributes":{"source":{"id":"5237"}},"id":"5241","type":"CDSView"},{"attributes":{},"id":"5273","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"5255"},"selection_policy":{"id":"5254"}},"id":"5242","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5243","type":"Line"},{"attributes":{},"id":"5274","type":"Selection"},{"attributes":{},"id":"5248","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"5701"},"selection_policy":{"id":"5700"}},"id":"5656","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5276"},"glyph":{"id":"5277"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5278"},"selection_glyph":null,"view":{"id":"5280"}},"id":"5279","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"5750"},"selection_policy":{"id":"5749"}},"id":"5703","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"5293"},"selection_policy":{"id":"5292"}},"id":"5276","type":"ColumnDataSource"},{"attributes":{},"id":"5217","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5658","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5378","type":"Scatter"},{"attributes":{"source":{"id":"5656"}},"id":"5660","type":"CDSView"},{"attributes":{"data_source":{"id":"5703"},"glyph":{"id":"5704"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5705"},"selection_glyph":null,"view":{"id":"5707"}},"id":"5706","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"5212"},"ticker":null},"id":"5215","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5278","type":"Line"},{"attributes":{"source":{"id":"5276"}},"id":"5280","type":"CDSView"},{"attributes":{"data":{"x":[2.0],"y":[84.6]},"selected":{"id":"5320"},"selection_policy":{"id":"5319"}},"id":"5296","type":"ColumnDataSource"},{"attributes":{},"id":"5700","type":"UnionRenderers"},{"attributes":{},"id":"5701","type":"Selection"},{"attributes":{},"id":"5292","type":"UnionRenderers"},{"attributes":{},"id":"5250","type":"BasicTickFormatter"},{"attributes":{},"id":"5293","type":"Selection"},{"attributes":{},"id":"5220","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5483","type":"Scatter"},{"attributes":{"data_source":{"id":"5482"},"glyph":{"id":"5483"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5484"},"selection_glyph":null,"view":{"id":"5486"}},"id":"5485","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5753","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5488","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5302","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5447","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5704","type":"Line"},{"attributes":{"data":{"x":[1.78125],"y":[84.3]},"selected":{"id":"5409"},"selection_policy":{"id":"5408"}},"id":"5377","type":"ColumnDataSource"},{"attributes":{},"id":"5373","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5296"},"glyph":{"id":"5297"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5298"},"selection_glyph":null,"view":{"id":"5300"}},"id":"5299","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"5212"}],"center":[{"id":"5215"},{"id":"5219"},{"id":"5236"},{"id":"5257"},{"id":"5295"},{"id":"5376"},{"id":"5481"}],"left":[{"id":"5216"}],"plot_width":800,"renderers":[{"id":"5240"},{"id":"5245"},{"id":"5262"},{"id":"5279"},{"id":"5299"},{"id":"5304"},{"id":"5327"},{"id":"5352"},{"id":"5380"},{"id":"5385"},{"id":"5416"},{"id":"5449"},{"id":"5485"},{"id":"5490"},{"id":"5529"},{"id":"5570"},{"id":"5613"},{"id":"5659"},{"id":"5706"},{"id":"5755"}],"title":{"id":"5202"},"toolbar":{"id":"5227"},"x_range":{"id":"5234"},"x_scale":{"id":"5208"},"y_range":{"id":"5235"},"y_scale":{"id":"5210"}},"id":"5201","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5374","type":"Selection"},{"attributes":{"data_source":{"id":"5301"},"glyph":{"id":"5302"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5303"},"selection_glyph":null,"view":{"id":"5305"}},"id":"5304","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5448","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5705","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"5322"},"selection_policy":{"id":"5321"}},"id":"5301","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5446"}},"id":"5450","type":"CDSView"},{"attributes":{"source":{"id":"5703"}},"id":"5707","type":"CDSView"},{"attributes":{"data_source":{"id":"5752"},"glyph":{"id":"5753"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5754"},"selection_glyph":null,"view":{"id":"5756"}},"id":"5755","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5296"}},"id":"5300","type":"CDSView"},{"attributes":{"data":{"x":[1.0],"y":[84.9414161996943]},"selected":{"id":"5522"},"selection_policy":{"id":"5521"}},"id":"5482","type":"ColumnDataSource"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":84.3},"id":"5376","type":"Label"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5325","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5383","type":"Line"},{"attributes":{},"id":"5478","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5382"},"glyph":{"id":"5383"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5384"},"selection_glyph":null,"view":{"id":"5386"}},"id":"5385","type":"GlyphRenderer"},{"attributes":{"end":86,"start":79},"id":"5235","type":"Range1d"},{"attributes":{},"id":"5749","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5377"},"glyph":{"id":"5378"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5379"},"selection_glyph":null,"view":{"id":"5381"}},"id":"5380","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5324"},"glyph":{"id":"5325"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5326"},"selection_glyph":null,"view":{"id":"5328"}},"id":"5327","type":"GlyphRenderer"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"5202","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5303","type":"Line"},{"attributes":{},"id":"5479","type":"Selection"},{"attributes":{},"id":"5750","type":"Selection"},{"attributes":{"source":{"id":"5301"}},"id":"5305","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"5411"},"selection_policy":{"id":"5410"}},"id":"5382","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5377"}},"id":"5381","type":"CDSView"},{"attributes":{"data_source":{"id":"5610"},"glyph":{"id":"5611"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5612"},"selection_glyph":null,"view":{"id":"5614"}},"id":"5613","type":"GlyphRenderer"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"5250"},"ticker":{"id":"5213"}},"id":"5212","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5413"},"glyph":{"id":"5414"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5415"},"selection_glyph":null,"view":{"id":"5417"}},"id":"5416","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"5479"},"selection_policy":{"id":"5478"}},"id":"5446","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5484","type":"Scatter"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"5801"},"selection_policy":{"id":"5800"}},"id":"5752","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5384","type":"Line"},{"attributes":{},"id":"5319","type":"UnionRenderers"},{"attributes":{"end":6.0,"start":0.75},"id":"5234","type":"Range1d"},{"attributes":{"source":{"id":"5382"}},"id":"5386","type":"CDSView"},{"attributes":{"data_source":{"id":"5487"},"glyph":{"id":"5488"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5489"},"selection_glyph":null,"view":{"id":"5491"}},"id":"5490","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"5524"},"selection_policy":{"id":"5523"}},"id":"5487","type":"ColumnDataSource"},{"attributes":{},"id":"5320","type":"Selection"},{"attributes":{"source":{"id":"5482"}},"id":"5486","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5754","type":"Line"},{"attributes":{"data":{"x":[1.9946948904542998,2.0018744207135466,2.002662075247167,2.4005750580789247,2.8975278910432105,2.9707750898055454,2.9812930987603186,3.3300349445225725,3.509180092206226],"y":[83.19918492103923,83.13805399898115,83.03616912888437,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"5653"},"selection_policy":{"id":"5652"}},"id":"5610","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5752"}},"id":"5756","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5527","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5528","type":"Line"},{"attributes":{},"id":"5408","type":"UnionRenderers"},{"attributes":{},"id":"5800","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5489","type":"Line"},{"attributes":{},"id":"5321","type":"UnionRenderers"},{"attributes":{"source":{"id":"5487"}},"id":"5491","type":"CDSView"},{"attributes":{"data_source":{"id":"5526"},"glyph":{"id":"5527"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5528"},"selection_glyph":null,"view":{"id":"5530"}},"id":"5529","type":"GlyphRenderer"},{"attributes":{},"id":"5409","type":"Selection"},{"attributes":{},"id":"5801","type":"Selection"},{"attributes":{},"id":"5322","type":"Selection"},{"attributes":{},"id":"5410","type":"UnionRenderers"},{"attributes":{},"id":"5521","type":"UnionRenderers"},{"attributes":{},"id":"5411","type":"Selection"},{"attributes":{},"id":"5522","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"5258"},{"id":"5655"}]},"id":"5257","type":"Legend"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"5347"},"selection_policy":{"id":"5346"}},"id":"5324","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5350","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5351","type":"Line"},{"attributes":{"data_source":{"id":"5349"},"glyph":{"id":"5350"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5351"},"selection_glyph":null,"view":{"id":"5353"}},"id":"5352","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5326","type":"Line"},{"attributes":{},"id":"5523","type":"UnionRenderers"},{"attributes":{"source":{"id":"5324"}},"id":"5328","type":"CDSView"},{"attributes":{},"id":"5524","type":"Selection"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"5444"},"selection_policy":{"id":"5443"}},"id":"5413","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5414","type":"Line"},{"attributes":{},"id":"5346","type":"UnionRenderers"},{"attributes":{},"id":"5347","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5415","type":"Line"},{"attributes":{"text":"DistilBERT","x":1.63,"y":82.2},"id":"5236","type":"Label"},{"attributes":{"source":{"id":"5413"}},"id":"5417","type":"CDSView"},{"attributes":{"data_source":{"id":"5446"},"glyph":{"id":"5447"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5448"},"selection_glyph":null,"view":{"id":"5450"}},"id":"5449","type":"GlyphRenderer"},{"attributes":{},"id":"5221","type":"WheelZoomTool"},{"attributes":{"axis_label":"Matched","formatter":{"id":"5248"},"ticker":{"id":"5217"}},"id":"5216","type":"LinearAxis"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"5245"},{"id":"5262"},{"id":"5279"},{"id":"5304"},{"id":"5327"},{"id":"5352"},{"id":"5385"},{"id":"5416"},{"id":"5449"},{"id":"5490"},{"id":"5529"},{"id":"5570"},{"id":"5659"},{"id":"5706"},{"id":"5755"}]},"id":"5258","type":"LegendItem"},{"attributes":{},"id":"5443","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5379","type":"Scatter"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"5565"},"selection_policy":{"id":"5564"}},"id":"5526","type":"ColumnDataSource"},{"attributes":{},"id":"5213","type":"BasicTicker"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"5374"},"selection_policy":{"id":"5373"}},"id":"5349","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"5608"},"selection_policy":{"id":"5607"}},"id":"5567","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5567"},"glyph":{"id":"5568"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5569"},"selection_glyph":null,"view":{"id":"5571"}},"id":"5570","type":"GlyphRenderer"},{"attributes":{},"id":"5444","type":"Selection"},{"attributes":{"axis":{"id":"5216"},"dimension":1,"ticker":null},"id":"5219","type":"Grid"},{"attributes":{"source":{"id":"5349"}},"id":"5353","type":"CDSView"},{"attributes":{"source":{"id":"5526"}},"id":"5530","type":"CDSView"}],"root_ids":["5201"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"fa6a8992-61c7-45b2-83a4-1318c8f860e3","root_ids":["5201"],"roots":{"5201":"e8db14b3-25e1-4ca0-8148-002291078c20"}}];
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