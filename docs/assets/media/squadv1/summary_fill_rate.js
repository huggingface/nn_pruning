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
    
      
      
    
      var element = document.getElementById("76bea915-f806-4071-8ed6-ee63b7174bbf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '76bea915-f806-4071-8ed6-ee63b7174bbf' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2f5ecc4a-16e8-46f5-b4e6-4b0f1444fa97":{"roots":{"references":[{"attributes":{},"id":"5110","type":"UnionRenderers"},{"attributes":{},"id":"5046","type":"UnionRenderers"},{"attributes":{},"id":"5757","type":"UnionRenderers"},{"attributes":{},"id":"5045","type":"Selection"},{"attributes":{},"id":"5756","type":"Selection"},{"attributes":{"data_source":{"id":"5017"},"glyph":{"id":"5018"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5019"},"selection_glyph":null,"view":{"id":"5021"}},"id":"5020","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5879"},"glyph":{"id":"5880"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5881"},"selection_glyph":null,"view":{"id":"5883"}},"id":"5882","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5759","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"5198"},"selection_policy":{"id":"5199"}},"id":"5166","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5817"}},"id":"5821","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5066","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5049","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"5063"},"selection_policy":{"id":"5064"}},"id":"5048","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5760","type":"Line"},{"attributes":{"source":{"id":"5758"}},"id":"5762","type":"CDSView"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5818","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5050","type":"Line"},{"attributes":{"source":{"id":"5048"}},"id":"5052","type":"CDSView"},{"attributes":{},"id":"5816","type":"UnionRenderers"},{"attributes":{},"id":"5064","type":"UnionRenderers"},{"attributes":{},"id":"5815","type":"Selection"},{"attributes":{},"id":"5063","type":"Selection"},{"attributes":{"overlay":{"id":"5008"}},"id":"5004","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5880","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5819","type":"Line"},{"attributes":{"data_source":{"id":"5065"},"glyph":{"id":"5066"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5067"},"selection_glyph":null,"view":{"id":"5069"}},"id":"5068","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Improved soft movement, BERT-base"},"renderers":[{"id":"5820"}]},"id":"5878","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"5082"},"selection_policy":{"id":"5083"}},"id":"5065","type":"ColumnDataSource"},{"attributes":{},"id":"5877","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5091","type":"Line"},{"attributes":{},"id":"5005","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5067","type":"Line"},{"attributes":{},"id":"5026","type":"BasicTickFormatter"},{"attributes":{},"id":"5876","type":"Selection"},{"attributes":{"source":{"id":"5065"}},"id":"5069","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"5111"},"selection_policy":{"id":"5112"}},"id":"5090","type":"ColumnDataSource"},{"attributes":{},"id":"5006","type":"ResetTool"},{"attributes":{},"id":"5083","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5399"},"glyph":{"id":"5400"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5401"},"selection_glyph":null,"view":{"id":"5403"}},"id":"5402","type":"GlyphRenderer"},{"attributes":{},"id":"5082","type":"Selection"},{"attributes":{},"id":"4992","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"5940"},"selection_policy":{"id":"5941"}},"id":"5879","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"6005"},"selection_policy":{"id":"6006"}},"id":"5942","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5087","type":"Scatter"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"5109"},"selection_policy":{"id":"5110"}},"id":"5085","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5881","type":"Line"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":90.3},"id":"5270","type":"Label"},{"attributes":{"source":{"id":"5879"}},"id":"5883","type":"CDSView"},{"attributes":{"data_source":{"id":"5090"},"glyph":{"id":"5091"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5092"},"selection_glyph":null,"view":{"id":"5094"}},"id":"5093","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5942"},"glyph":{"id":"5943"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5944"},"selection_glyph":null,"view":{"id":"5946"}},"id":"5945","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5085"}},"id":"5089","type":"CDSView"},{"attributes":{"data_source":{"id":"5085"},"glyph":{"id":"5086"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5087"},"selection_glyph":null,"view":{"id":"5089"}},"id":"5088","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5167","type":"Scatter"},{"attributes":{},"id":"4990","type":"LinearScale"},{"attributes":{},"id":"5941","type":"UnionRenderers"},{"attributes":{},"id":"5940","type":"Selection"},{"attributes":{},"id":"5002","type":"PanTool"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"5136"},"selection_policy":{"id":"5137"}},"id":"5113","type":"ColumnDataSource"},{"attributes":{},"id":"5007","type":"HelpTool"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"5024"},"ticker":{"id":"4995"}},"id":"4994","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5113"},"glyph":{"id":"5114"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5115"},"selection_glyph":null,"view":{"id":"5117"}},"id":"5116","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5092","type":"Line"},{"attributes":{},"id":"5003","type":"WheelZoomTool"},{"attributes":{"source":{"id":"5090"}},"id":"5094","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5002"},{"id":"5003"},{"id":"5004"},{"id":"5005"},{"id":"5006"},{"id":"5007"}]},"id":"5009","type":"Toolbar"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5172","type":"Line"},{"attributes":{"source":{"id":"5171"}},"id":"5175","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5236","type":"Line"},{"attributes":{},"id":"5398","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5173","type":"Line"},{"attributes":{"data_source":{"id":"5202"},"glyph":{"id":"5203"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5204"},"selection_glyph":null,"view":{"id":"5206"}},"id":"5205","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5277","type":"Line"},{"attributes":{"source":{"id":"5592"}},"id":"5596","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"5313"},"selection_policy":{"id":"5314"}},"id":"5276","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5358","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5542","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5594","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5943","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6008","type":"Line"},{"attributes":{"data_source":{"id":"5276"},"glyph":{"id":"5277"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5278"},"selection_glyph":null,"view":{"id":"5280"}},"id":"5279","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5273","type":"Scatter"},{"attributes":{},"id":"5397","type":"Selection"},{"attributes":{"source":{"id":"5271"}},"id":"5275","type":"CDSView"},{"attributes":{},"id":"5109","type":"Selection"},{"attributes":{"data_source":{"id":"5271"},"glyph":{"id":"5272"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5273"},"selection_glyph":null,"view":{"id":"5275"}},"id":"5274","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5543","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5944","type":"Line"},{"attributes":{"source":{"id":"5356"}},"id":"5360","type":"CDSView"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.26195384837962965,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.70940223967354,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"5442"},"selection_policy":{"id":"5443"}},"id":"5399","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5541"}},"id":"5545","type":"CDSView"},{"attributes":{"data_source":{"id":"6007"},"glyph":{"id":"6008"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6009"},"selection_glyph":null,"view":{"id":"6011"}},"id":"6010","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5942"}},"id":"5946","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5316","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5357","type":"Line"},{"attributes":{},"id":"5199","type":"UnionRenderers"},{"attributes":{},"id":"5591","type":"UnionRenderers"},{"attributes":{},"id":"6006","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5445"},"glyph":{"id":"5446"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5447"},"selection_glyph":null,"view":{"id":"5449"}},"id":"5448","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5086","type":"Scatter"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5400","type":"Line"},{"attributes":{"data":{"x":[0.934228131753319,0.33692503194188606,0.23178618820053898,0.12717287831006702,0.0844962705308448,0.0615813180599198,0.046974065934975495,0.0372814764901698,0.030607106053833898,0.025692807846040798],"y":[89.508140874387,88.365230562872,87.5263834085333,85.5113906680275,84.55,83.7985152764562,83.5336572106868,82.9035029539827,82.3709214373788,81.7389208616436]},"selected":{"id":"5028"},"selection_policy":{"id":"5029"}},"id":"5017","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5278","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5446","type":"Line"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5018","type":"Line"},{"attributes":{"source":{"id":"5276"}},"id":"5280","type":"CDSView"},{"attributes":{},"id":"5111","type":"Selection"},{"attributes":{"data_source":{"id":"5315"},"glyph":{"id":"5316"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5317"},"selection_glyph":null,"view":{"id":"5319"}},"id":"5318","type":"GlyphRenderer"},{"attributes":{},"id":"5112","type":"UnionRenderers"},{"attributes":{},"id":"5198","type":"Selection"},{"attributes":{},"id":"5590","type":"Selection"},{"attributes":{},"id":"6005","type":"Selection"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-base"},"renderers":[{"id":"5402"}]},"id":"5444","type":"LegendItem"},{"attributes":{"source":{"id":"5017"}},"id":"5021","type":"CDSView"},{"attributes":{},"id":"4988","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5019","type":"Line"},{"attributes":{},"id":"5443","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5592"},"glyph":{"id":"5593"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5594"},"selection_glyph":null,"view":{"id":"5596"}},"id":"5595","type":"GlyphRenderer"},{"attributes":{"click_policy":"hide","items":[{"id":"5031"},{"id":"5047"},{"id":"5444"},{"id":"5645"},{"id":"5878"}],"location":"top_left"},"id":"5030","type":"Legend"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"4984","type":"Title"},{"attributes":{},"id":"5312","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5033","type":"Line"},{"attributes":{},"id":"5200","type":"Selection"},{"attributes":{},"id":"5442","type":"Selection"},{"attributes":{"data_source":{"id":"5646"},"glyph":{"id":"5647"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5648"},"selection_glyph":null,"view":{"id":"5650"}},"id":"5649","type":"GlyphRenderer"},{"attributes":{"axis_label":"F1","formatter":{"id":"5026"},"ticker":{"id":"4999"}},"id":"4998","type":"LinearAxis"},{"attributes":{},"id":"5201","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5647","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"6072"},"selection_policy":{"id":"6073"}},"id":"6007","type":"ColumnDataSource"},{"attributes":{},"id":"5311","type":"Selection"},{"attributes":{},"id":"4995","type":"BasicTicker"},{"attributes":{},"id":"5028","type":"Selection"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-large"},"renderers":[{"id":"5595"}]},"id":"5645","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"6009","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5114","type":"Line"},{"attributes":{"source":{"id":"6007"}},"id":"6011","type":"CDSView"},{"attributes":{},"id":"4999","type":"BasicTicker"},{"attributes":{},"id":"5024","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5139","type":"Line"},{"attributes":{},"id":"5644","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"5200"},"selection_policy":{"id":"5201"}},"id":"5171","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5138"},"glyph":{"id":"5139"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5140"},"selection_glyph":null,"view":{"id":"5142"}},"id":"5141","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5115","type":"Line"},{"attributes":{},"id":"5313","type":"Selection"},{"attributes":{},"id":"5643","type":"Selection"},{"attributes":{"source":{"id":"5113"}},"id":"5117","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"5490"},"selection_policy":{"id":"5491"}},"id":"5445","type":"ColumnDataSource"},{"attributes":{},"id":"5314","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.6509150752314815,0.4766890914351851,0.3799370659722226,0.3216869212962964,0.30790653935185175,0.2633101851851851],"y":[91.0266636723574,90.16320537561052,89.39825688878855,88.43872986679673,88.34901265417608,87.48044078095904]},"selected":{"id":"5643"},"selection_policy":{"id":"5644"}},"id":"5592","type":"ColumnDataSource"},{"attributes":{},"id":"6073","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5593","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5493","type":"Line"},{"attributes":{},"id":"6072","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"5233"},"selection_policy":{"id":"5234"}},"id":"5202","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"5590"},"selection_policy":{"id":"5591"}},"id":"5541","type":"ColumnDataSource"},{"attributes":{},"id":"5137","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5203","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5447","type":"Line"},{"attributes":{"source":{"id":"5445"}},"id":"5449","type":"CDSView"},{"attributes":{"data":{"x":[0.25071068751959147,0.15786624249116865,0.11725962603533713,0.11616964693422671,0.06489395800931963,0.04466981063654396,0.0340861803219642],"y":[88.66263407974378,88.07603620459668,87.64967103979136,87.59923644792065,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"5876"},"selection_policy":{"id":"5877"}},"id":"5817","type":"ColumnDataSource"},{"attributes":{},"id":"5136","type":"Selection"},{"attributes":{"data_source":{"id":"5492"},"glyph":{"id":"5493"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5494"},"selection_glyph":null,"view":{"id":"5496"}},"id":"5495","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5204","type":"Line"},{"attributes":{"source":{"id":"5202"}},"id":"5206","type":"CDSView"},{"attributes":{"data_source":{"id":"5235"},"glyph":{"id":"5236"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5237"},"selection_glyph":null,"view":{"id":"5239"}},"id":"5238","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"5699"},"selection_policy":{"id":"5700"}},"id":"5646","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5817"},"glyph":{"id":"5818"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5819"},"selection_glyph":null,"view":{"id":"5821"}},"id":"5820","type":"GlyphRenderer"},{"attributes":{},"id":"5491","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5702","type":"Line"},{"attributes":{},"id":"5234","type":"UnionRenderers"},{"attributes":{},"id":"5490","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"5815"},"selection_policy":{"id":"5816"}},"id":"5758","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"5354"},"selection_policy":{"id":"5355"}},"id":"5315","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5401","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"5163"},"selection_policy":{"id":"5164"}},"id":"5138","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5648","type":"Line"},{"attributes":{},"id":"5233","type":"Selection"},{"attributes":{"data_source":{"id":"5171"},"glyph":{"id":"5172"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5173"},"selection_glyph":null,"view":{"id":"5175"}},"id":"5174","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5646"}},"id":"5650","type":"CDSView"},{"attributes":{"data_source":{"id":"5701"},"glyph":{"id":"5702"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5703"},"selection_glyph":null,"view":{"id":"5705"}},"id":"5704","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5317","type":"Line"},{"attributes":{"source":{"id":"5315"}},"id":"5319","type":"CDSView"},{"attributes":{"data_source":{"id":"5356"},"glyph":{"id":"5357"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5358"},"selection_glyph":null,"view":{"id":"5360"}},"id":"5359","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5140","type":"Line"},{"attributes":{},"id":"5029","type":"UnionRenderers"},{"attributes":{"below":[{"id":"4994"}],"center":[{"id":"4997"},{"id":"5001"},{"id":"5030"},{"id":"5084"},{"id":"5165"},{"id":"5270"}],"left":[{"id":"4998"}],"plot_width":800,"renderers":[{"id":"5020"},{"id":"5035"},{"id":"5051"},{"id":"5068"},{"id":"5088"},{"id":"5093"},{"id":"5116"},{"id":"5141"},{"id":"5169"},{"id":"5174"},{"id":"5205"},{"id":"5238"},{"id":"5274"},{"id":"5279"},{"id":"5318"},{"id":"5359"},{"id":"5402"},{"id":"5448"},{"id":"5495"},{"id":"5544"},{"id":"5595"},{"id":"5649"},{"id":"5704"},{"id":"5761"},{"id":"5820"},{"id":"5882"},{"id":"5945"},{"id":"6010"}],"title":{"id":"4984"},"toolbar":{"id":"5009"},"x_range":{"id":"5016"},"x_scale":{"id":"4990"},"y_range":{"id":"4988"},"y_scale":{"id":"4992"}},"id":"4983","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"5138"}},"id":"5142","type":"CDSView"},{"attributes":{"end":0.65},"id":"5016","type":"Range1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5272","type":"Scatter"},{"attributes":{},"id":"5700","type":"UnionRenderers"},{"attributes":{},"id":"5355","type":"UnionRenderers"},{"attributes":{},"id":"5699","type":"Selection"},{"attributes":{"axis":{"id":"4998"},"dimension":1,"ticker":null},"id":"5001","type":"Grid"},{"attributes":{},"id":"5164","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"5268"},"selection_policy":{"id":"5269"}},"id":"5235","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"5539"},"selection_policy":{"id":"5540"}},"id":"5492","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5032"},"glyph":{"id":"5033"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5034"},"selection_glyph":null,"view":{"id":"5036"}},"id":"5035","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.3]},"selected":{"id":"5311"},"selection_policy":{"id":"5312"}},"id":"5271","type":"ColumnDataSource"},{"attributes":{},"id":"5354","type":"Selection"},{"attributes":{"label":{"value":"Original Soft Movement"},"renderers":[{"id":"5020"}]},"id":"5031","type":"LegendItem"},{"attributes":{},"id":"5163","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5237","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5494","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"5045"},"selection_policy":{"id":"5046"}},"id":"5032","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5235"}},"id":"5239","type":"CDSView"},{"attributes":{"source":{"id":"5492"}},"id":"5496","type":"CDSView"},{"attributes":{"text":"Distilbert","x":0.5,"y":86.9},"id":"5084","type":"Label"},{"attributes":{"data_source":{"id":"5541"},"glyph":{"id":"5542"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5543"},"selection_glyph":null,"view":{"id":"5545"}},"id":"5544","type":"GlyphRenderer"},{"attributes":{"text":"Tinybert","x":0.5,"y":87.5},"id":"5165","type":"Label"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"5035"},{"id":"5051"},{"id":"5068"},{"id":"5093"},{"id":"5116"},{"id":"5141"},{"id":"5174"},{"id":"5205"},{"id":"5238"},{"id":"5279"},{"id":"5318"},{"id":"5359"},{"id":"5448"},{"id":"5495"},{"id":"5544"},{"id":"5649"},{"id":"5704"},{"id":"5761"},{"id":"5882"},{"id":"5945"},{"id":"6010"}]},"id":"5047","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5703","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"5008","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"5048"},"glyph":{"id":"5049"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5050"},"selection_glyph":null,"view":{"id":"5052"}},"id":"5051","type":"GlyphRenderer"},{"attributes":{},"id":"5269","type":"UnionRenderers"},{"attributes":{},"id":"5540","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"5397"},"selection_policy":{"id":"5398"}},"id":"5356","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"5756"},"selection_policy":{"id":"5757"}},"id":"5701","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"4994"},"ticker":null},"id":"4997","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5034","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5168","type":"Scatter"},{"attributes":{"source":{"id":"5032"}},"id":"5036","type":"CDSView"},{"attributes":{"source":{"id":"5399"}},"id":"5403","type":"CDSView"},{"attributes":{"source":{"id":"5701"}},"id":"5705","type":"CDSView"},{"attributes":{},"id":"5268","type":"Selection"},{"attributes":{},"id":"5539","type":"Selection"},{"attributes":{"source":{"id":"5166"}},"id":"5170","type":"CDSView"},{"attributes":{"data_source":{"id":"5166"},"glyph":{"id":"5167"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5168"},"selection_glyph":null,"view":{"id":"5170"}},"id":"5169","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5758"},"glyph":{"id":"5759"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5760"},"selection_glyph":null,"view":{"id":"5762"}},"id":"5761","type":"GlyphRenderer"}],"root_ids":["4983"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"2f5ecc4a-16e8-46f5-b4e6-4b0f1444fa97","root_ids":["4983"],"roots":{"4983":"76bea915-f806-4071-8ed6-ee63b7174bbf"}}];
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