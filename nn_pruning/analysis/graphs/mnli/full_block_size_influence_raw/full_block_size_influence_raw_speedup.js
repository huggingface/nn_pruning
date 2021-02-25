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
    
      
      
    
      var element = document.getElementById("92918319-c738-4fe8-a267-f733bb9bbab2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '92918319-c738-4fe8-a267-f733bb9bbab2' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b4d49b0c-c4ca-4423-bb9d-a1c3cd33fe06":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3933","type":"BoxAnnotation"},{"attributes":{"end":86,"start":79},"id":"3942","type":"Range1d"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"3952"},{"id":"3969"},{"id":"3986"},{"id":"4011"},{"id":"4034"},{"id":"4059"},{"id":"4092"},{"id":"4123"},{"id":"4156"},{"id":"4197"},{"id":"4236"},{"id":"4277"},{"id":"4366"},{"id":"4413"},{"id":"4462"}]},"id":"3965","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3950","type":"Line"},{"attributes":{},"id":"3924","type":"BasicTicker"},{"attributes":{"click_policy":"hide","items":[{"id":"3965"},{"id":"4362"}]},"id":"3964","type":"Legend"},{"attributes":{"axis":{"id":"3923"},"dimension":1,"ticker":null},"id":"3926","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3951","type":"Line"},{"attributes":{"source":{"id":"4153"}},"id":"4157","type":"CDSView"},{"attributes":{"source":{"id":"3949"}},"id":"3953","type":"CDSView"},{"attributes":{},"id":"3920","type":"BasicTicker"},{"attributes":{},"id":"3932","type":"HelpTool"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"3909","type":"Title"},{"attributes":{"axis_label":"Matched","formatter":{"id":"3955"},"ticker":{"id":"3924"}},"id":"3923","type":"LinearAxis"},{"attributes":{},"id":"3955","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"3919"},"ticker":null},"id":"3922","type":"Grid"},{"attributes":{"below":[{"id":"3919"}],"center":[{"id":"3922"},{"id":"3926"},{"id":"3943"},{"id":"3964"},{"id":"4002"},{"id":"4083"},{"id":"4188"}],"left":[{"id":"3923"}],"plot_width":800,"renderers":[{"id":"3947"},{"id":"3952"},{"id":"3969"},{"id":"3986"},{"id":"4006"},{"id":"4011"},{"id":"4034"},{"id":"4059"},{"id":"4087"},{"id":"4092"},{"id":"4123"},{"id":"4156"},{"id":"4192"},{"id":"4197"},{"id":"4236"},{"id":"4277"},{"id":"4320"},{"id":"4366"},{"id":"4413"},{"id":"4462"}],"title":{"id":"3909"},"toolbar":{"id":"3934"},"x_range":{"id":"3941"},"x_scale":{"id":"3915"},"y_range":{"id":"3942"},"y_scale":{"id":"3917"}},"id":"3908","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3915","type":"LinearScale"},{"attributes":{"overlay":{"id":"3933"}},"id":"3929","type":"BoxZoomTool"},{"attributes":{},"id":"3957","type":"BasicTickFormatter"},{"attributes":{},"id":"3931","type":"ResetTool"},{"attributes":{},"id":"3927","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3927"},{"id":"3928"},{"id":"3929"},{"id":"3930"},{"id":"3931"},{"id":"3932"}]},"id":"3934","type":"Toolbar"},{"attributes":{},"id":"3959","type":"UnionRenderers"},{"attributes":{"text":"TinyBERT","x":2.0,"y":84.6},"id":"4002","type":"Label"},{"attributes":{},"id":"3960","type":"Selection"},{"attributes":{"data":{"x":[1.63],"y":[82.2]},"selected":{"id":"3960"},"selection_policy":{"id":"3959"}},"id":"3944","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3945","type":"Scatter"},{"attributes":{},"id":"3961","type":"UnionRenderers"},{"attributes":{},"id":"3930","type":"SaveTool"},{"attributes":{},"id":"3928","type":"WheelZoomTool"},{"attributes":{},"id":"3962","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4009","type":"Line"},{"attributes":{"source":{"id":"4317"}},"id":"4321","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4032","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4190","type":"Scatter"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4275","type":"Line"},{"attributes":{"data_source":{"id":"4089"},"glyph":{"id":"4090"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4091"},"selection_glyph":null,"view":{"id":"4093"}},"id":"4092","type":"GlyphRenderer"},{"attributes":{},"id":"4185","type":"UnionRenderers"},{"attributes":{},"id":"4456","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4031"},"glyph":{"id":"4032"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4033"},"selection_glyph":null,"view":{"id":"4035"}},"id":"4034","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4084"}},"id":"4088","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4010","type":"Line"},{"attributes":{},"id":"4186","type":"Selection"},{"attributes":{},"id":"4457","type":"Selection"},{"attributes":{"source":{"id":"4008"}},"id":"4012","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4090","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4276","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"4118"},"selection_policy":{"id":"4117"}},"id":"4089","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4274"}},"id":"4278","type":"CDSView"},{"attributes":{"data_source":{"id":"4317"},"glyph":{"id":"4318"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4319"},"selection_glyph":null,"view":{"id":"4321"}},"id":"4320","type":"GlyphRenderer"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4318","type":"Line"},{"attributes":{"data_source":{"id":"4120"},"glyph":{"id":"4121"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4122"},"selection_glyph":null,"view":{"id":"4124"}},"id":"4123","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4154","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4195","type":"Line"},{"attributes":{},"id":"4314","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4189"},"glyph":{"id":"4190"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4191"},"selection_glyph":null,"view":{"id":"4193"}},"id":"4192","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4460","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4091","type":"Line"},{"attributes":{},"id":"4026","type":"UnionRenderers"},{"attributes":{"source":{"id":"4089"}},"id":"4093","type":"CDSView"},{"attributes":{},"id":"4315","type":"Selection"},{"attributes":{"data_source":{"id":"4194"},"glyph":{"id":"4195"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4196"},"selection_glyph":null,"view":{"id":"4198"}},"id":"4197","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"4231"},"selection_policy":{"id":"4230"}},"id":"4194","type":"ColumnDataSource"},{"attributes":{},"id":"4027","type":"Selection"},{"attributes":{"source":{"id":"4189"}},"id":"4193","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4461","type":"Line"},{"attributes":{"data":{"x":[1.9946948904542998,2.0018744207135466,2.002662075247167,2.4005750580789247,2.8975278910432105,2.9707750898055454,2.9812930987603186,3.3300349445225725,3.509180092206226],"y":[83.19918492103923,83.13805399898115,83.03616912888437,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"4360"},"selection_policy":{"id":"4359"}},"id":"4317","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4459"}},"id":"4463","type":"CDSView"},{"attributes":{"data_source":{"id":"3966"},"glyph":{"id":"3967"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3968"},"selection_glyph":null,"view":{"id":"3970"}},"id":"3969","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4234","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"4315"},"selection_policy":{"id":"4314"}},"id":"4274","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4364","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3967","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4319","type":"Line"},{"attributes":{},"id":"4115","type":"UnionRenderers"},{"attributes":{},"id":"4507","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3984","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4196","type":"Line"},{"attributes":{},"id":"4028","type":"UnionRenderers"},{"attributes":{"text":"Original Soft Movement","x":1.0,"y":84.9414161996943},"id":"4188","type":"Label"},{"attributes":{"source":{"id":"4194"}},"id":"4198","type":"CDSView"},{"attributes":{"data_source":{"id":"4233"},"glyph":{"id":"4234"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4235"},"selection_glyph":null,"view":{"id":"4237"}},"id":"4236","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"3981"},"selection_policy":{"id":"3980"}},"id":"3966","type":"ColumnDataSource"},{"attributes":{},"id":"4116","type":"Selection"},{"attributes":{"data_source":{"id":"4363"},"glyph":{"id":"4364"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4365"},"selection_glyph":null,"view":{"id":"4367"}},"id":"4366","type":"GlyphRenderer"},{"attributes":{},"id":"4029","type":"Selection"},{"attributes":{},"id":"4508","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3968","type":"Line"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"4320"}]},"id":"4362","type":"LegendItem"},{"attributes":{"source":{"id":"3966"}},"id":"3970","type":"CDSView"},{"attributes":{},"id":"4359","type":"UnionRenderers"},{"attributes":{},"id":"4117","type":"UnionRenderers"},{"attributes":{},"id":"4228","type":"UnionRenderers"},{"attributes":{},"id":"4360","type":"Selection"},{"attributes":{"text":"DistilBERT","x":1.63,"y":82.2},"id":"3943","type":"Label"},{"attributes":{},"id":"3980","type":"UnionRenderers"},{"attributes":{},"id":"4118","type":"Selection"},{"attributes":{},"id":"4229","type":"Selection"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"3957"},"ticker":{"id":"3920"}},"id":"3919","type":"LinearAxis"},{"attributes":{},"id":"3981","type":"Selection"},{"attributes":{"source":{"id":"3944"}},"id":"3948","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"4054"},"selection_policy":{"id":"4053"}},"id":"4031","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4057","type":"Line"},{"attributes":{"data_source":{"id":"4084"},"glyph":{"id":"4085"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4086"},"selection_glyph":null,"view":{"id":"4088"}},"id":"4087","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4056"},"glyph":{"id":"4057"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4058"},"selection_glyph":null,"view":{"id":"4060"}},"id":"4059","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4033","type":"Line"},{"attributes":{},"id":"4230","type":"UnionRenderers"},{"attributes":{"source":{"id":"4410"}},"id":"4414","type":"CDSView"},{"attributes":{"source":{"id":"4031"}},"id":"4035","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"4408"},"selection_policy":{"id":"4407"}},"id":"4363","type":"ColumnDataSource"},{"attributes":{},"id":"4231","type":"Selection"},{"attributes":{"data_source":{"id":"3983"},"glyph":{"id":"3984"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3985"},"selection_glyph":null,"view":{"id":"3987"}},"id":"3986","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4411","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"4000"},"selection_policy":{"id":"3999"}},"id":"3983","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"4151"},"selection_policy":{"id":"4150"}},"id":"4120","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"4508"},"selection_policy":{"id":"4507"}},"id":"4459","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4121","type":"Line"},{"attributes":{},"id":"4053","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4365","type":"Line"},{"attributes":{"data_source":{"id":"4008"},"glyph":{"id":"4009"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4010"},"selection_glyph":null,"view":{"id":"4012"}},"id":"4011","type":"GlyphRenderer"},{"attributes":{"end":6.0,"start":0.75},"id":"3941","type":"Range1d"},{"attributes":{"source":{"id":"4363"}},"id":"4367","type":"CDSView"},{"attributes":{"data_source":{"id":"4410"},"glyph":{"id":"4411"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4412"},"selection_glyph":null,"view":{"id":"4414"}},"id":"4413","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4122","type":"Line"},{"attributes":{},"id":"4054","type":"Selection"},{"attributes":{"source":{"id":"4120"}},"id":"4124","type":"CDSView"},{"attributes":{"data_source":{"id":"4153"},"glyph":{"id":"4154"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4155"},"selection_glyph":null,"view":{"id":"4157"}},"id":"4156","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3985","type":"Line"},{"attributes":{"source":{"id":"3983"}},"id":"3987","type":"CDSView"},{"attributes":{"data_source":{"id":"4003"},"glyph":{"id":"4004"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4005"},"selection_glyph":null,"view":{"id":"4007"}},"id":"4006","type":"GlyphRenderer"},{"attributes":{},"id":"4407","type":"UnionRenderers"},{"attributes":{},"id":"4150","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4086","type":"Scatter"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"4272"},"selection_policy":{"id":"4271"}},"id":"4233","type":"ColumnDataSource"},{"attributes":{},"id":"4408","type":"Selection"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"4081"},"selection_policy":{"id":"4080"}},"id":"4056","type":"ColumnDataSource"},{"attributes":{},"id":"3999","type":"UnionRenderers"},{"attributes":{},"id":"4151","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4235","type":"Line"},{"attributes":{"data_source":{"id":"3949"},"glyph":{"id":"3950"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3951"},"selection_glyph":null,"view":{"id":"3953"}},"id":"3952","type":"GlyphRenderer"},{"attributes":{},"id":"4000","type":"Selection"},{"attributes":{},"id":"3917","type":"LinearScale"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"3962"},"selection_policy":{"id":"3961"}},"id":"3949","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4233"}},"id":"4237","type":"CDSView"},{"attributes":{"data_source":{"id":"4274"},"glyph":{"id":"4275"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4276"},"selection_glyph":null,"view":{"id":"4278"}},"id":"4277","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4058","type":"Line"},{"attributes":{"source":{"id":"4056"}},"id":"4060","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4191","type":"Scatter"},{"attributes":{},"id":"4271","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4005","type":"Scatter"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"4186"},"selection_policy":{"id":"4185"}},"id":"4153","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"4457"},"selection_policy":{"id":"4456"}},"id":"4410","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3944"},"glyph":{"id":"3945"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3946"},"selection_glyph":null,"view":{"id":"3948"}},"id":"3947","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.78125],"y":[84.3]},"selected":{"id":"4116"},"selection_policy":{"id":"4115"}},"id":"4084","type":"ColumnDataSource"},{"attributes":{},"id":"4080","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3946","type":"Scatter"},{"attributes":{"data":{"x":[2.0],"y":[84.6]},"selected":{"id":"4027"},"selection_policy":{"id":"4026"}},"id":"4003","type":"ColumnDataSource"},{"attributes":{},"id":"4272","type":"Selection"},{"attributes":{"data_source":{"id":"4459"},"glyph":{"id":"4460"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4461"},"selection_glyph":null,"view":{"id":"4463"}},"id":"4462","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.0],"y":[84.9414161996943]},"selected":{"id":"4229"},"selection_policy":{"id":"4228"}},"id":"4189","type":"ColumnDataSource"},{"attributes":{},"id":"4081","type":"Selection"},{"attributes":{"source":{"id":"4003"}},"id":"4007","type":"CDSView"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":84.3},"id":"4083","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4155","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4412","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"4029"},"selection_policy":{"id":"4028"}},"id":"4008","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4004","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4085","type":"Scatter"}],"root_ids":["3908"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"b4d49b0c-c4ca-4423-bb9d-a1c3cd33fe06","root_ids":["3908"],"roots":{"3908":"92918319-c738-4fe8-a267-f733bb9bbab2"}}];
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