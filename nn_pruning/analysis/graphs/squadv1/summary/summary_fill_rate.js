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
    
      
      
    
      var element = document.getElementById("1c26a53a-67d0-41df-a62c-61beff5670e1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1c26a53a-67d0-41df-a62c-61beff5670e1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a94d5a0d-ba55-4c70-8f9d-1f5c90414a49":{"roots":{"references":[{"attributes":{"data_source":{"id":"4672"},"glyph":{"id":"4673"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4674"},"selection_glyph":null,"view":{"id":"4676"}},"id":"4675","type":"GlyphRenderer"},{"attributes":{},"id":"5246","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5414","type":"Line"},{"attributes":{"source":{"id":"4826"}},"id":"4830","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4657"},{"id":"4658"},{"id":"4659"},{"id":"4660"},{"id":"4661"},{"id":"4662"}]},"id":"4664","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5415","type":"Line"},{"attributes":{},"id":"4645","type":"LinearScale"},{"attributes":{"source":{"id":"5413"}},"id":"5417","type":"CDSView"},{"attributes":{"axis":{"id":"4653"},"dimension":1,"ticker":null},"id":"4656","type":"Grid"},{"attributes":{},"id":"5470","type":"UnionRenderers"},{"attributes":{},"id":"5471","type":"Selection"},{"attributes":{},"id":"5412","type":"Selection"},{"attributes":{},"id":"4854","type":"Selection"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"4639","type":"Title"},{"attributes":{"overlay":{"id":"4663"}},"id":"4659","type":"BoxZoomTool"},{"attributes":{},"id":"4660","type":"SaveTool"},{"attributes":{"data_source":{"id":"5247"},"glyph":{"id":"5248"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5249"},"selection_glyph":null,"view":{"id":"5251"}},"id":"5250","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"4649"},"ticker":null},"id":"4652","type":"Grid"},{"attributes":{},"id":"4658","type":"WheelZoomTool"},{"attributes":{},"id":"4661","type":"ResetTool"},{"attributes":{},"id":"4683","type":"UnionRenderers"},{"attributes":{},"id":"4650","type":"BasicTicker"},{"attributes":{"source":{"id":"5147"}},"id":"5151","type":"CDSView"},{"attributes":{"axis_label":"F1","formatter":{"id":"4678"},"ticker":{"id":"4654"}},"id":"4653","type":"LinearAxis"},{"attributes":{"end":0.65},"id":"4671","type":"Range1d"},{"attributes":{},"id":"4701","type":"Selection"},{"attributes":{"below":[{"id":"4649"}],"center":[{"id":"4652"},{"id":"4656"},{"id":"4685"},{"id":"4739"},{"id":"4820"},{"id":"4925"}],"left":[{"id":"4653"}],"plot_width":800,"renderers":[{"id":"4675"},{"id":"4690"},{"id":"4706"},{"id":"4723"},{"id":"4743"},{"id":"4748"},{"id":"4771"},{"id":"4796"},{"id":"4824"},{"id":"4829"},{"id":"4860"},{"id":"4893"},{"id":"4929"},{"id":"4934"},{"id":"4973"},{"id":"5014"},{"id":"5057"},{"id":"5103"},{"id":"5150"},{"id":"5199"},{"id":"5250"},{"id":"5304"},{"id":"5359"},{"id":"5416"}],"title":{"id":"4639"},"toolbar":{"id":"4664"},"x_range":{"id":"4671"},"x_scale":{"id":"4645"},"y_range":{"id":"4643"},"y_scale":{"id":"4647"}},"id":"4638","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4657","type":"PanTool"},{"attributes":{},"id":"4643","type":"DataRange1d"},{"attributes":{},"id":"4662","type":"HelpTool"},{"attributes":{},"id":"4654","type":"BasicTicker"},{"attributes":{},"id":"5194","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4931"},"glyph":{"id":"4932"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4933"},"selection_glyph":null,"view":{"id":"4935"}},"id":"4934","type":"GlyphRenderer"},{"attributes":{},"id":"4765","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4932","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5249","type":"Line"},{"attributes":{"source":{"id":"5247"}},"id":"5251","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"4969"},"selection_policy":{"id":"4968"}},"id":"4931","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4971","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5012","type":"Line"},{"attributes":{},"id":"4853","type":"UnionRenderers"},{"attributes":{},"id":"5245","type":"UnionRenderers"},{"attributes":{},"id":"5195","type":"Selection"},{"attributes":{"data":{"x":[0.934228131753319,0.33692503194188606,0.23178618820053898,0.12717287831006702,0.0844962705308448,0.0615813180599198,0.046974065934975495,0.0372814764901698,0.030607106053833898,0.025692807846040798],"y":[89.508140874387,88.365230562872,87.5263834085333,85.5113906680275,84.55,83.7985152764562,83.5336572106868,82.9035029539827,82.3709214373788,81.7389208616436]},"selected":{"id":"4684"},"selection_policy":{"id":"4683"}},"id":"4672","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4933","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5101","type":"Line"},{"attributes":{"data_source":{"id":"5100"},"glyph":{"id":"5101"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5102"},"selection_glyph":null,"view":{"id":"5104"}},"id":"5103","type":"GlyphRenderer"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4673","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"4854"},"selection_policy":{"id":"4853"}},"id":"4821","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4970"},"glyph":{"id":"4971"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4972"},"selection_glyph":null,"view":{"id":"4974"}},"id":"4973","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4721","type":"Line"},{"attributes":{"source":{"id":"4931"}},"id":"4935","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4704","type":"Line"},{"attributes":{},"id":"4766","type":"UnionRenderers"},{"attributes":{},"id":"4767","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"4719"},"selection_policy":{"id":"4718"}},"id":"4703","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-base"},"renderers":[{"id":"5057"}]},"id":"5099","type":"LegendItem"},{"attributes":{"source":{"id":"4672"}},"id":"4676","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4674","type":"Line"},{"attributes":{},"id":"5097","type":"UnionRenderers"},{"attributes":{},"id":"5053","type":"Selection"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"4680"},"ticker":{"id":"4650"}},"id":"4649","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4705","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4741","type":"Scatter"},{"attributes":{"source":{"id":"4703"}},"id":"4707","type":"CDSView"},{"attributes":{},"id":"5098","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"4686"},{"id":"4702"},{"id":"5099"},{"id":"5300"}],"location":"top_left"},"id":"4685","type":"Legend"},{"attributes":{},"id":"4966","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4688","type":"Line"},{"attributes":{},"id":"4855","type":"UnionRenderers"},{"attributes":{},"id":"4967","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5302","type":"Line"},{"attributes":{},"id":"4856","type":"Selection"},{"attributes":{"data_source":{"id":"5301"},"glyph":{"id":"5302"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5303"},"selection_glyph":null,"view":{"id":"5305"}},"id":"5304","type":"GlyphRenderer"},{"attributes":{},"id":"4718","type":"UnionRenderers"},{"attributes":{"label":{"value":"Improved soft movement, BERT-base"},"renderers":[{"id":"5250"}]},"id":"5300","type":"LegendItem"},{"attributes":{},"id":"4719","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4769","type":"Line"},{"attributes":{},"id":"5298","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4794","type":"Line"},{"attributes":{"source":{"id":"4821"}},"id":"4825","type":"CDSView"},{"attributes":{},"id":"5299","type":"Selection"},{"attributes":{"data_source":{"id":"4793"},"glyph":{"id":"4794"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4795"},"selection_glyph":null,"view":{"id":"4797"}},"id":"4796","type":"GlyphRenderer"},{"attributes":{},"id":"4678","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4770","type":"Line"},{"attributes":{"source":{"id":"4768"}},"id":"4772","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"5146"},"selection_policy":{"id":"5145"}},"id":"5100","type":"ColumnDataSource"},{"attributes":{},"id":"4968","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.25071068751959147,0.15786624249116865,0.11725962603533713,0.11616964693422671,0.06489395800931963,0.04466981063654396,0.0340861803219642],"y":[88.66263407974378,88.07603620459668,87.64967103979136,87.59923644792065,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"5299"},"selection_policy":{"id":"5298"}},"id":"5247","type":"ColumnDataSource"},{"attributes":{},"id":"4969","type":"Selection"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5248","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5148","type":"Line"},{"attributes":{"data_source":{"id":"5054"},"glyph":{"id":"5055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5056"},"selection_glyph":null,"view":{"id":"5058"}},"id":"5057","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5197","type":"Line"},{"attributes":{},"id":"4791","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4720"},"glyph":{"id":"4721"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4722"},"selection_glyph":null,"view":{"id":"4724"}},"id":"4723","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4891","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4858","type":"Line"},{"attributes":{},"id":"4764","type":"UnionRenderers"},{"attributes":{},"id":"4792","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"4738"},"selection_policy":{"id":"4737"}},"id":"4720","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5102","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4746","type":"Line"},{"attributes":{"source":{"id":"5100"}},"id":"5104","type":"CDSView"},{"attributes":{},"id":"4680","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"5147"},"glyph":{"id":"5148"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5149"},"selection_glyph":null,"view":{"id":"5151"}},"id":"5150","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4859","type":"Line"},{"attributes":{"source":{"id":"4857"}},"id":"4861","type":"CDSView"},{"attributes":{"data_source":{"id":"4890"},"glyph":{"id":"4891"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4892"},"selection_glyph":null,"view":{"id":"4894"}},"id":"4893","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4722","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"5355"},"selection_policy":{"id":"5354"}},"id":"5301","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4720"}},"id":"4724","type":"CDSView"},{"attributes":{"source":{"id":"4740"}},"id":"4744","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5357","type":"Line"},{"attributes":{},"id":"4888","type":"UnionRenderers"},{"attributes":{},"id":"5145","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"5471"},"selection_policy":{"id":"5470"}},"id":"5413","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"5010"},"selection_policy":{"id":"5009"}},"id":"4970","type":"ColumnDataSource"},{"attributes":{},"id":"4737","type":"UnionRenderers"},{"attributes":{},"id":"4889","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5056","type":"Line"},{"attributes":{},"id":"5146","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"4819"},"selection_policy":{"id":"4818"}},"id":"4793","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5303","type":"Line"},{"attributes":{},"id":"4738","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4827","type":"Line"},{"attributes":{"source":{"id":"5301"}},"id":"5305","type":"CDSView"},{"attributes":{"data_source":{"id":"5356"},"glyph":{"id":"5357"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5358"},"selection_glyph":null,"view":{"id":"5360"}},"id":"5359","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4972","type":"Line"},{"attributes":{"source":{"id":"4970"}},"id":"4974","type":"CDSView"},{"attributes":{"data_source":{"id":"5011"},"glyph":{"id":"5012"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5013"},"selection_glyph":null,"view":{"id":"5015"}},"id":"5014","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4795","type":"Line"},{"attributes":{"source":{"id":"4793"}},"id":"4797","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4927","type":"Scatter"},{"attributes":{},"id":"5009","type":"UnionRenderers"},{"attributes":{},"id":"5354","type":"UnionRenderers"},{"attributes":{},"id":"4818","type":"UnionRenderers"},{"attributes":{},"id":"5010","type":"Selection"},{"attributes":{},"id":"5355","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"4924"},"selection_policy":{"id":"4923"}},"id":"4890","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"5195"},"selection_policy":{"id":"5194"}},"id":"5147","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4687"},"glyph":{"id":"4688"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4689"},"selection_glyph":null,"view":{"id":"4691"}},"id":"4690","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4742","type":"Scatter"},{"attributes":{"source":{"id":"4926"}},"id":"4930","type":"CDSView"},{"attributes":{"label":{"value":"Original Soft Movement"},"renderers":[{"id":"4675"}]},"id":"4686","type":"LegendItem"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"4765"},"selection_policy":{"id":"4764"}},"id":"4740","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5198","type":"Line"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":90.3},"id":"4925","type":"Label"},{"attributes":{},"id":"4647","type":"LinearScale"},{"attributes":{},"id":"4819","type":"Selection"},{"attributes":{"data_source":{"id":"4745"},"glyph":{"id":"4746"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4747"},"selection_glyph":null,"view":{"id":"4749"}},"id":"4748","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4892","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5149","type":"Line"},{"attributes":{"data_source":{"id":"4740"},"glyph":{"id":"4741"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4742"},"selection_glyph":null,"view":{"id":"4744"}},"id":"4743","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"4701"},"selection_policy":{"id":"4700"}},"id":"4687","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4890"}},"id":"4894","type":"CDSView"},{"attributes":{"text":"Distilbert","x":0.5,"y":86.9},"id":"4739","type":"Label"},{"attributes":{"data_source":{"id":"5196"},"glyph":{"id":"5197"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5198"},"selection_glyph":null,"view":{"id":"5200"}},"id":"5199","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"4767"},"selection_policy":{"id":"4766"}},"id":"4745","type":"ColumnDataSource"},{"attributes":{"text":"Tinybert","x":0.5,"y":87.5},"id":"4820","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4822","type":"Scatter"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.3]},"selected":{"id":"4967"},"selection_policy":{"id":"4966"}},"id":"4926","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"4690"},{"id":"4706"},{"id":"4723"},{"id":"4748"},{"id":"4771"},{"id":"4796"},{"id":"4829"},{"id":"4860"},{"id":"4893"},{"id":"4934"},{"id":"4973"},{"id":"5014"},{"id":"5103"},{"id":"5150"},{"id":"5199"},{"id":"5304"},{"id":"5359"},{"id":"5416"}]},"id":"4702","type":"LegendItem"},{"attributes":{"data_source":{"id":"4703"},"glyph":{"id":"4704"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4705"},"selection_glyph":null,"view":{"id":"4707"}},"id":"4706","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4663","type":"BoxAnnotation"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"5246"},"selection_policy":{"id":"5245"}},"id":"5196","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"4792"},"selection_policy":{"id":"4791"}},"id":"4768","type":"ColumnDataSource"},{"attributes":{},"id":"4684","type":"Selection"},{"attributes":{},"id":"4923","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"5053"},"selection_policy":{"id":"5052"}},"id":"5011","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"5412"},"selection_policy":{"id":"5411"}},"id":"5356","type":"ColumnDataSource"},{"attributes":{},"id":"4924","type":"Selection"},{"attributes":{"data_source":{"id":"4768"},"glyph":{"id":"4769"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4770"},"selection_glyph":null,"view":{"id":"4772"}},"id":"4771","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4689","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4823","type":"Scatter"},{"attributes":{"source":{"id":"4687"}},"id":"4691","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4747","type":"Line"},{"attributes":{"source":{"id":"5054"}},"id":"5058","type":"CDSView"},{"attributes":{"data_source":{"id":"4826"},"glyph":{"id":"4827"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4828"},"selection_glyph":null,"view":{"id":"4830"}},"id":"4829","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4745"}},"id":"4749","type":"CDSView"},{"attributes":{"source":{"id":"5196"}},"id":"5200","type":"CDSView"},{"attributes":{"data_source":{"id":"4821"},"glyph":{"id":"4822"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4823"},"selection_glyph":null,"view":{"id":"4825"}},"id":"4824","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5013","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5358","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"4856"},"selection_policy":{"id":"4855"}},"id":"4826","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5011"}},"id":"5015","type":"CDSView"},{"attributes":{"source":{"id":"5356"}},"id":"5360","type":"CDSView"},{"attributes":{"data_source":{"id":"5413"},"glyph":{"id":"5414"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5415"},"selection_glyph":null,"view":{"id":"5417"}},"id":"5416","type":"GlyphRenderer"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5055","type":"Line"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.26195384837962965,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.70940223967354,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"5098"},"selection_policy":{"id":"5097"}},"id":"5054","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4857"},"glyph":{"id":"4858"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4859"},"selection_glyph":null,"view":{"id":"4861"}},"id":"4860","type":"GlyphRenderer"},{"attributes":{},"id":"5052","type":"UnionRenderers"},{"attributes":{},"id":"5411","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"4889"},"selection_policy":{"id":"4888"}},"id":"4857","type":"ColumnDataSource"},{"attributes":{},"id":"4700","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4928","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4828","type":"Line"},{"attributes":{"data_source":{"id":"4926"},"glyph":{"id":"4927"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4928"},"selection_glyph":null,"view":{"id":"4930"}},"id":"4929","type":"GlyphRenderer"}],"root_ids":["4638"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"a94d5a0d-ba55-4c70-8f9d-1f5c90414a49","root_ids":["4638"],"roots":{"4638":"1c26a53a-67d0-41df-a62c-61beff5670e1"}}];
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