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
    
      
      
    
      var element = document.getElementById("b168b0cc-d5d9-4f40-a838-5dd663c8fca6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b168b0cc-d5d9-4f40-a838-5dd663c8fca6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e56b0049-09cb-486e-91f3-3cd150a9f6eb":{"roots":{"references":[{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5246","type":"Line"},{"attributes":{},"id":"5129","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"4977"},{"id":"5374"}]},"id":"4976","type":"Legend"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5287","type":"Line"},{"attributes":{"data_source":{"id":"4978"},"glyph":{"id":"4979"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4980"},"selection_glyph":null,"view":{"id":"4982"}},"id":"4981","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4963","type":"Line"},{"attributes":{"source":{"id":"4961"}},"id":"4965","type":"CDSView"},{"attributes":{},"id":"5130","type":"Selection"},{"attributes":{},"id":"5131","type":"UnionRenderers"},{"attributes":{},"id":"4967","type":"BasicTickFormatter"},{"attributes":{},"id":"5241","type":"Selection"},{"attributes":{},"id":"5242","type":"UnionRenderers"},{"attributes":{"end":86,"start":79},"id":"4954","type":"Range1d"},{"attributes":{},"id":"5243","type":"Selection"},{"attributes":{},"id":"4969","type":"BasicTickFormatter"},{"attributes":{},"id":"5244","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"5243"},"selection_policy":{"id":"5244"}},"id":"5206","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5166","type":"Line"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"4921","type":"Title"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5133","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5134","type":"Line"},{"attributes":{"source":{"id":"5132"}},"id":"5136","type":"CDSView"},{"attributes":{"data_source":{"id":"5165"},"glyph":{"id":"5166"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5167"},"selection_glyph":null,"view":{"id":"5169"}},"id":"5168","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"5284"},"selection_policy":{"id":"5285"}},"id":"5245","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5331","type":"Line"},{"attributes":{},"id":"5163","type":"Selection"},{"attributes":{},"id":"5164","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5247","type":"Line"},{"attributes":{"below":[{"id":"4931"}],"center":[{"id":"4934"},{"id":"4938"},{"id":"4955"},{"id":"4976"},{"id":"5014"},{"id":"5095"},{"id":"5200"}],"left":[{"id":"4935"}],"plot_width":800,"renderers":[{"id":"4959"},{"id":"4964"},{"id":"4981"},{"id":"4998"},{"id":"5018"},{"id":"5023"},{"id":"5046"},{"id":"5071"},{"id":"5099"},{"id":"5104"},{"id":"5135"},{"id":"5168"},{"id":"5204"},{"id":"5209"},{"id":"5248"},{"id":"5289"},{"id":"5332"},{"id":"5378"},{"id":"5425"},{"id":"5474"}],"title":{"id":"4921"},"toolbar":{"id":"4946"},"x_range":{"id":"4953"},"x_scale":{"id":"4927"},"y_range":{"id":"4954"},"y_scale":{"id":"4929"}},"id":"4920","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"5245"}},"id":"5249","type":"CDSView"},{"attributes":{"data_source":{"id":"5286"},"glyph":{"id":"5287"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5288"},"selection_glyph":null,"view":{"id":"5290"}},"id":"5289","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"5198"},"selection_policy":{"id":"5199"}},"id":"5165","type":"ColumnDataSource"},{"attributes":{},"id":"5284","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5207","type":"Line"},{"attributes":{},"id":"5285","type":"UnionRenderers"},{"attributes":{},"id":"4972","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5167","type":"Line"},{"attributes":{},"id":"4973","type":"UnionRenderers"},{"attributes":{"source":{"id":"5165"}},"id":"5169","type":"CDSView"},{"attributes":{"data":{"x":[1.0],"y":[84.9414161996943]},"selected":{"id":"5241"},"selection_policy":{"id":"5242"}},"id":"5201","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"5327"},"selection_policy":{"id":"5328"}},"id":"5286","type":"ColumnDataSource"},{"attributes":{},"id":"4974","type":"Selection"},{"attributes":{"source":{"id":"5329"}},"id":"5333","type":"CDSView"},{"attributes":{},"id":"4975","type":"UnionRenderers"},{"attributes":{},"id":"5198","type":"Selection"},{"attributes":{},"id":"5199","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5288","type":"Line"},{"attributes":{"source":{"id":"5286"}},"id":"5290","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5330","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5203","type":"Scatter"},{"attributes":{},"id":"5327","type":"Selection"},{"attributes":{},"id":"5328","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5206"},"glyph":{"id":"5207"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5208"},"selection_glyph":null,"view":{"id":"5210"}},"id":"5209","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5201"}},"id":"5205","type":"CDSView"},{"attributes":{"data_source":{"id":"5201"},"glyph":{"id":"5202"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5203"},"selection_glyph":null,"view":{"id":"5205"}},"id":"5204","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9946948904542998,2.0018744207135466,2.002662075247167,2.4005750580789247,2.8975278910432105,2.9707750898055454,2.9812930987603186,3.3300349445225725,3.509180092206226],"y":[83.19918492103923,83.13805399898115,83.03616912888437,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"5372"},"selection_policy":{"id":"5373"}},"id":"5329","type":"ColumnDataSource"},{"attributes":{"end":6.0,"start":0.75},"id":"4953","type":"Range1d"},{"attributes":{"data_source":{"id":"5245"},"glyph":{"id":"5246"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5247"},"selection_glyph":null,"view":{"id":"5249"}},"id":"5248","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"4993"},"selection_policy":{"id":"4994"}},"id":"4978","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5206"}},"id":"5210","type":"CDSView"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"4964"},{"id":"4981"},{"id":"4998"},{"id":"5023"},{"id":"5046"},{"id":"5071"},{"id":"5104"},{"id":"5135"},{"id":"5168"},{"id":"5209"},{"id":"5248"},{"id":"5289"},{"id":"5378"},{"id":"5425"},{"id":"5474"}]},"id":"4977","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5208","type":"Line"},{"attributes":{},"id":"5041","type":"Selection"},{"attributes":{},"id":"5521","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"5332"}]},"id":"5374","type":"LegendItem"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4979","type":"Line"},{"attributes":{},"id":"5042","type":"UnionRenderers"},{"attributes":{},"id":"4927","type":"LinearScale"},{"attributes":{"data":{"x":[1.78125],"y":[84.3]},"selected":{"id":"5128"},"selection_policy":{"id":"5129"}},"id":"5096","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4996","type":"Line"},{"attributes":{"data_source":{"id":"5375"},"glyph":{"id":"5376"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5377"},"selection_glyph":null,"view":{"id":"5379"}},"id":"5378","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5376","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4980","type":"Line"},{"attributes":{"source":{"id":"4978"}},"id":"4982","type":"CDSView"},{"attributes":{},"id":"4929","type":"LinearScale"},{"attributes":{},"id":"5372","type":"Selection"},{"attributes":{},"id":"5373","type":"UnionRenderers"},{"attributes":{},"id":"4939","type":"PanTool"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"4967"},"ticker":{"id":"4932"}},"id":"4931","type":"LinearAxis"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5044","type":"Line"},{"attributes":{},"id":"4993","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5016","type":"Scatter"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5069","type":"Line"},{"attributes":{},"id":"4994","type":"UnionRenderers"},{"attributes":{"text":"DistilBERT","x":1.63,"y":82.2},"id":"4955","type":"Label"},{"attributes":{"text":"TinyBERT","x":2.0,"y":84.6},"id":"5014","type":"Label"},{"attributes":{"data_source":{"id":"5068"},"glyph":{"id":"5069"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5070"},"selection_glyph":null,"view":{"id":"5072"}},"id":"5071","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5045","type":"Line"},{"attributes":{"data_source":{"id":"4961"},"glyph":{"id":"4962"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4963"},"selection_glyph":null,"view":{"id":"4965"}},"id":"4964","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4957","type":"Scatter"},{"attributes":{"source":{"id":"5043"}},"id":"5047","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"5420"},"selection_policy":{"id":"5421"}},"id":"5375","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4956"},"glyph":{"id":"4957"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4958"},"selection_glyph":null,"view":{"id":"4960"}},"id":"4959","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"4945"}},"id":"4941","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5423","type":"Line"},{"attributes":{"axis":{"id":"4931"},"ticker":null},"id":"4934","type":"Grid"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5472","type":"Line"},{"attributes":{"data_source":{"id":"4995"},"glyph":{"id":"4996"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4997"},"selection_glyph":null,"view":{"id":"4999"}},"id":"4998","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"5012"},"selection_policy":{"id":"5013"}},"id":"4995","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5377","type":"Line"},{"attributes":{},"id":"5066","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5021","type":"Line"},{"attributes":{"source":{"id":"5375"}},"id":"5379","type":"CDSView"},{"attributes":{},"id":"5067","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5422"},"glyph":{"id":"5423"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5424"},"selection_glyph":null,"view":{"id":"5426"}},"id":"5425","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4997","type":"Line"},{"attributes":{"source":{"id":"4995"}},"id":"4999","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"5041"},"selection_policy":{"id":"5042"}},"id":"5020","type":"ColumnDataSource"},{"attributes":{},"id":"5420","type":"Selection"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"5093"},"selection_policy":{"id":"5094"}},"id":"5068","type":"ColumnDataSource"},{"attributes":{},"id":"5421","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5102","type":"Line"},{"attributes":{},"id":"5012","type":"Selection"},{"attributes":{},"id":"5013","type":"UnionRenderers"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":84.3},"id":"5095","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5070","type":"Line"},{"attributes":{"source":{"id":"5068"}},"id":"5072","type":"CDSView"},{"attributes":{},"id":"4943","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5202","type":"Scatter"},{"attributes":{},"id":"4942","type":"SaveTool"},{"attributes":{},"id":"4940","type":"WheelZoomTool"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"5469"},"selection_policy":{"id":"5470"}},"id":"5422","type":"ColumnDataSource"},{"attributes":{"axis_label":"Matched","formatter":{"id":"4969"},"ticker":{"id":"4936"}},"id":"4935","type":"LinearAxis"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"4974"},"selection_policy":{"id":"4975"}},"id":"4961","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5017","type":"Scatter"},{"attributes":{"data":{"x":[2.0],"y":[84.6]},"selected":{"id":"5039"},"selection_policy":{"id":"5040"}},"id":"5015","type":"ColumnDataSource"},{"attributes":{},"id":"5093","type":"Selection"},{"attributes":{},"id":"4932","type":"BasicTicker"},{"attributes":{"source":{"id":"4956"}},"id":"4960","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5097","type":"Scatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4939"},{"id":"4940"},{"id":"4941"},{"id":"4942"},{"id":"4943"},{"id":"4944"}]},"id":"4946","type":"Toolbar"},{"attributes":{"data_source":{"id":"5020"},"glyph":{"id":"5021"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5022"},"selection_glyph":null,"view":{"id":"5024"}},"id":"5023","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5424","type":"Line"},{"attributes":{"source":{"id":"5015"}},"id":"5019","type":"CDSView"},{"attributes":{"source":{"id":"5422"}},"id":"5426","type":"CDSView"},{"attributes":{},"id":"5094","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5015"},"glyph":{"id":"5016"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5017"},"selection_glyph":null,"view":{"id":"5019"}},"id":"5018","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5471"},"glyph":{"id":"5472"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5473"},"selection_glyph":null,"view":{"id":"5475"}},"id":"5474","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"4935"},"dimension":1,"ticker":null},"id":"4938","type":"Grid"},{"attributes":{"text":"Original Soft Movement","x":1.0,"y":84.9414161996943},"id":"5200","type":"Label"},{"attributes":{},"id":"4936","type":"BasicTicker"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"5066"},"selection_policy":{"id":"5067"}},"id":"5043","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5043"},"glyph":{"id":"5044"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5045"},"selection_glyph":null,"view":{"id":"5047"}},"id":"5046","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"5130"},"selection_policy":{"id":"5131"}},"id":"5101","type":"ColumnDataSource"},{"attributes":{},"id":"5469","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4958","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5022","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5098","type":"Scatter"},{"attributes":{"data_source":{"id":"5101"},"glyph":{"id":"5102"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5103"},"selection_glyph":null,"view":{"id":"5105"}},"id":"5104","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5020"}},"id":"5024","type":"CDSView"},{"attributes":{},"id":"5470","type":"UnionRenderers"},{"attributes":{"source":{"id":"5096"}},"id":"5100","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4945","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"5096"},"glyph":{"id":"5097"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5098"},"selection_glyph":null,"view":{"id":"5100"}},"id":"5099","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4962","type":"Line"},{"attributes":{"data_source":{"id":"5329"},"glyph":{"id":"5330"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5331"},"selection_glyph":null,"view":{"id":"5333"}},"id":"5332","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5132"},"glyph":{"id":"5133"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5134"},"selection_glyph":null,"view":{"id":"5136"}},"id":"5135","type":"GlyphRenderer"},{"attributes":{},"id":"5520","type":"Selection"},{"attributes":{},"id":"4944","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5103","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"5520"},"selection_policy":{"id":"5521"}},"id":"5471","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5101"}},"id":"5105","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"5163"},"selection_policy":{"id":"5164"}},"id":"5132","type":"ColumnDataSource"},{"attributes":{},"id":"5039","type":"Selection"},{"attributes":{},"id":"5040","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5473","type":"Line"},{"attributes":{"source":{"id":"5471"}},"id":"5475","type":"CDSView"},{"attributes":{"data":{"x":[1.63],"y":[82.2]},"selected":{"id":"4972"},"selection_policy":{"id":"4973"}},"id":"4956","type":"ColumnDataSource"},{"attributes":{},"id":"5128","type":"Selection"}],"root_ids":["4920"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e56b0049-09cb-486e-91f3-3cd150a9f6eb","root_ids":["4920"],"roots":{"4920":"b168b0cc-d5d9-4f40-a838-5dd663c8fca6"}}];
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