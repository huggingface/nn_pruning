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
    
      
      
    
      var element = document.getElementById("544c6fda-2f8b-467a-aca5-5a5319b81be7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '544c6fda-2f8b-467a-aca5-5a5319b81be7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ef421061-8e8b-465b-81dd-18c3ed085d97":{"roots":{"references":[{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10168","type":"Line"},{"attributes":{"data_source":{"id":"10167"},"glyph":{"id":"10168"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10169"},"selection_glyph":null,"view":{"id":"10171"}},"id":"10170","type":"GlyphRenderer"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"10113","type":"Label"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10507","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"10551"},"selection_policy":{"id":"10550"}},"id":"10506","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"10506"},"glyph":{"id":"10507"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10508"},"selection_glyph":null,"view":{"id":"10510"}},"id":"10509","type":"GlyphRenderer"},{"attributes":{},"id":"10373","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10057","type":"Scatter"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10554","type":"Line"},{"attributes":{},"id":"10164","type":"UnionRenderers"},{"attributes":{"below":[{"id":"10030"}],"center":[{"id":"10033"},{"id":"10037"},{"id":"10054"},{"id":"10075"},{"id":"10113"},{"id":"10194"}],"left":[{"id":"10034"}],"plot_width":800,"renderers":[{"id":"10058"},{"id":"10063"},{"id":"10080"},{"id":"10097"},{"id":"10117"},{"id":"10122"},{"id":"10145"},{"id":"10170"},{"id":"10198"},{"id":"10203"},{"id":"10234"},{"id":"10267"},{"id":"10302"},{"id":"10340"},{"id":"10379"},{"id":"10420"},{"id":"10463"},{"id":"10509"},{"id":"10556"},{"id":"10605"}],"title":{"id":"10020"},"toolbar":{"id":"10045"},"x_range":{"id":"10052"},"x_scale":{"id":"10026"},"y_range":{"id":"10053"},"y_scale":{"id":"10028"}},"id":"10019","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"10073"},"selection_policy":{"id":"10072"}},"id":"10060","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10603","type":"Line"},{"attributes":{},"id":"10374","type":"Selection"},{"attributes":{},"id":"10165","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10508","type":"Line"},{"attributes":{"end":0.75},"id":"10052","type":"Range1d"},{"attributes":{"source":{"id":"10506"}},"id":"10510","type":"CDSView"},{"attributes":{"data_source":{"id":"10553"},"glyph":{"id":"10554"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10555"},"selection_glyph":null,"view":{"id":"10557"}},"id":"10556","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10418","type":"Line"},{"attributes":{},"id":"10550","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10201","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10377","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"10192"},"selection_policy":{"id":"10191"}},"id":"10167","type":"ColumnDataSource"},{"attributes":{},"id":"10551","type":"Selection"},{"attributes":{"data_source":{"id":"10060"},"glyph":{"id":"10061"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10062"},"selection_glyph":null,"view":{"id":"10064"}},"id":"10063","type":"GlyphRenderer"},{"attributes":{},"id":"10026","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10038"},{"id":"10039"},{"id":"10040"},{"id":"10041"},{"id":"10042"},{"id":"10043"}]},"id":"10045","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10169","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10378","type":"Line"},{"attributes":{"source":{"id":"10167"}},"id":"10171","type":"CDSView"},{"attributes":{"source":{"id":"10337"}},"id":"10341","type":"CDSView"},{"attributes":{"source":{"id":"10376"}},"id":"10380","type":"CDSView"},{"attributes":{"data_source":{"id":"10417"},"glyph":{"id":"10418"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10419"},"selection_glyph":null,"view":{"id":"10421"}},"id":"10420","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"10376"},"glyph":{"id":"10377"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10378"},"selection_glyph":null,"view":{"id":"10380"}},"id":"10379","type":"GlyphRenderer"},{"attributes":{},"id":"10191","type":"UnionRenderers"},{"attributes":{},"id":"10414","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"10600"},"selection_policy":{"id":"10599"}},"id":"10553","type":"ColumnDataSource"},{"attributes":{},"id":"10192","type":"Selection"},{"attributes":{},"id":"10415","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10555","type":"Line"},{"attributes":{"source":{"id":"10553"}},"id":"10557","type":"CDSView"},{"attributes":{"data_source":{"id":"10602"},"glyph":{"id":"10603"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10604"},"selection_glyph":null,"view":{"id":"10606"}},"id":"10605","type":"GlyphRenderer"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"10054","type":"Label"},{"attributes":{"data_source":{"id":"10195"},"glyph":{"id":"10196"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10197"},"selection_glyph":null,"view":{"id":"10199"}},"id":"10198","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"10200"},"glyph":{"id":"10201"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10202"},"selection_glyph":null,"view":{"id":"10204"}},"id":"10203","type":"GlyphRenderer"},{"attributes":{"source":{"id":"10460"}},"id":"10464","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10197","type":"Scatter"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"10458"},"selection_policy":{"id":"10457"}},"id":"10417","type":"ColumnDataSource"},{"attributes":{},"id":"10599","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"10229"},"selection_policy":{"id":"10228"}},"id":"10200","type":"ColumnDataSource"},{"attributes":{},"id":"10600","type":"Selection"},{"attributes":{"source":{"id":"10195"}},"id":"10199","type":"CDSView"},{"attributes":{"data":{"x":[0.750694155218002,0.34656273890574396,0.247365299956507,0.186029553957332,0.131177042042143,0.0947351805073981,0.0602396365698101,0.0402606146574505,0.0284787168842778,0.0214990126796872,0.01685626988373],"y":[84.9210392256749,83.7289862455425,83.331635252165,82.41467142129389,81.7320427916454,81.13092205807429,80.6826286296485,79.9898115129903,79.4294447274579,79.1441670911869,78.7671930718288]},"selected":{"id":"10334"},"selection_policy":{"id":"10333"}},"id":"10299","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10419","type":"Line"},{"attributes":{"source":{"id":"10417"}},"id":"10421","type":"CDSView"},{"attributes":{"data_source":{"id":"10231"},"glyph":{"id":"10232"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10233"},"selection_glyph":null,"view":{"id":"10235"}},"id":"10234","type":"GlyphRenderer"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10461","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10202","type":"Line"},{"attributes":{},"id":"10457","type":"UnionRenderers"},{"attributes":{"source":{"id":"10055"}},"id":"10059","type":"CDSView"},{"attributes":{"source":{"id":"10200"}},"id":"10204","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"10651"},"selection_policy":{"id":"10650"}},"id":"10602","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"10262"},"selection_policy":{"id":"10261"}},"id":"10231","type":"ColumnDataSource"},{"attributes":{},"id":"10043","type":"HelpTool"},{"attributes":{},"id":"10458","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10604","type":"Line"},{"attributes":{"source":{"id":"10602"}},"id":"10606","type":"CDSView"},{"attributes":{},"id":"10066","type":"BasicTickFormatter"},{"attributes":{},"id":"10226","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10462","type":"Line"},{"attributes":{},"id":"10650","type":"UnionRenderers"},{"attributes":{},"id":"10227","type":"Selection"},{"attributes":{},"id":"10651","type":"Selection"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"10463"}]},"id":"10505","type":"LegendItem"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":84.3},"id":"10194","type":"Label"},{"attributes":{},"id":"10502","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"10071"},"selection_policy":{"id":"10070"}},"id":"10055","type":"ColumnDataSource"},{"attributes":{},"id":"10228","type":"UnionRenderers"},{"attributes":{},"id":"10042","type":"ResetTool"},{"attributes":{},"id":"10503","type":"Selection"},{"attributes":{},"id":"10229","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10115","type":"Scatter"},{"attributes":{"data_source":{"id":"10055"},"glyph":{"id":"10056"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10057"},"selection_glyph":null,"view":{"id":"10059"}},"id":"10058","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10056","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"10044","type":"BoxAnnotation"},{"attributes":{"end":86,"start":79},"id":"10053","type":"Range1d"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10061","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"10076"},{"id":"10336"},{"id":"10505"}],"location":"bottom_right"},"id":"10075","type":"Legend"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10095","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10265","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10062","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10232","type":"Line"},{"attributes":{"axis":{"id":"10030"},"ticker":null},"id":"10033","type":"Grid"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10120","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10233","type":"Line"},{"attributes":{"source":{"id":"10231"}},"id":"10235","type":"CDSView"},{"attributes":{"data_source":{"id":"10264"},"glyph":{"id":"10265"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10266"},"selection_glyph":null,"view":{"id":"10268"}},"id":"10267","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10096","type":"Line"},{"attributes":{"source":{"id":"10094"}},"id":"10098","type":"CDSView"},{"attributes":{"data_source":{"id":"10114"},"glyph":{"id":"10115"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10116"},"selection_glyph":null,"view":{"id":"10118"}},"id":"10117","type":"GlyphRenderer"},{"attributes":{},"id":"10261","type":"UnionRenderers"},{"attributes":{},"id":"10068","type":"BasicTickFormatter"},{"attributes":{},"id":"10110","type":"UnionRenderers"},{"attributes":{},"id":"10262","type":"Selection"},{"attributes":{},"id":"10031","type":"BasicTicker"},{"attributes":{},"id":"10111","type":"Selection"},{"attributes":{},"id":"10070","type":"UnionRenderers"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"10063"},{"id":"10080"},{"id":"10097"},{"id":"10122"},{"id":"10145"},{"id":"10170"},{"id":"10203"},{"id":"10234"},{"id":"10267"},{"id":"10340"},{"id":"10379"},{"id":"10420"},{"id":"10509"},{"id":"10556"},{"id":"10605"}]},"id":"10076","type":"LegendItem"},{"attributes":{},"id":"10071","type":"Selection"},{"attributes":{"source":{"id":"10299"}},"id":"10303","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10116","type":"Scatter"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"10297"},"selection_policy":{"id":"10296"}},"id":"10264","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10196","type":"Scatter"},{"attributes":{"source":{"id":"10060"}},"id":"10064","type":"CDSView"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"10138"},"selection_policy":{"id":"10137"}},"id":"10114","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"10119"},"glyph":{"id":"10120"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10121"},"selection_glyph":null,"view":{"id":"10123"}},"id":"10122","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10266","type":"Line"},{"attributes":{"overlay":{"id":"10044"}},"id":"10040","type":"BoxZoomTool"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"10140"},"selection_policy":{"id":"10139"}},"id":"10119","type":"ColumnDataSource"},{"attributes":{"source":{"id":"10264"}},"id":"10268","type":"CDSView"},{"attributes":{},"id":"10072","type":"UnionRenderers"},{"attributes":{"source":{"id":"10114"}},"id":"10118","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10300","type":"Line"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[84.3]},"selected":{"id":"10227"},"selection_policy":{"id":"10226"}},"id":"10195","type":"ColumnDataSource"},{"attributes":{},"id":"10039","type":"WheelZoomTool"},{"attributes":{},"id":"10073","type":"Selection"},{"attributes":{},"id":"10028","type":"LinearScale"},{"attributes":{"axis_label":"Matched","formatter":{"id":"10066"},"ticker":{"id":"10035"}},"id":"10034","type":"LinearAxis"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10143","type":"Line"},{"attributes":{},"id":"10296","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10144","type":"Line"},{"attributes":{"data_source":{"id":"10142"},"glyph":{"id":"10143"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10144"},"selection_glyph":null,"view":{"id":"10146"}},"id":"10145","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10121","type":"Line"},{"attributes":{},"id":"10297","type":"Selection"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"10068"},"ticker":{"id":"10031"}},"id":"10030","type":"LinearAxis"},{"attributes":{"source":{"id":"10119"}},"id":"10123","type":"CDSView"},{"attributes":{},"id":"10035","type":"BasicTicker"},{"attributes":{"axis":{"id":"10034"},"dimension":1,"ticker":null},"id":"10037","type":"Grid"},{"attributes":{},"id":"10038","type":"PanTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10338","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10301","type":"Line"},{"attributes":{},"id":"10041","type":"SaveTool"},{"attributes":{},"id":"10137","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"10337"},"glyph":{"id":"10338"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10339"},"selection_glyph":null,"view":{"id":"10341"}},"id":"10340","type":"GlyphRenderer"},{"attributes":{},"id":"10138","type":"Selection"},{"attributes":{"label":{"value":"Original Soft Movement"},"renderers":[{"id":"10302"}]},"id":"10336","type":"LegendItem"},{"attributes":{"data_source":{"id":"10077"},"glyph":{"id":"10078"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10079"},"selection_glyph":null,"view":{"id":"10081"}},"id":"10080","type":"GlyphRenderer"},{"attributes":{},"id":"10333","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10078","type":"Line"},{"attributes":{},"id":"10334","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"10111"},"selection_policy":{"id":"10110"}},"id":"10094","type":"ColumnDataSource"},{"attributes":{},"id":"10139","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"10299"},"glyph":{"id":"10300"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10301"},"selection_glyph":null,"view":{"id":"10303"}},"id":"10302","type":"GlyphRenderer"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"10020","type":"Title"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"10092"},"selection_policy":{"id":"10091"}},"id":"10077","type":"ColumnDataSource"},{"attributes":{},"id":"10140","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10079","type":"Line"},{"attributes":{"source":{"id":"10077"}},"id":"10081","type":"CDSView"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"10503"},"selection_policy":{"id":"10502"}},"id":"10460","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"10094"},"glyph":{"id":"10095"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10096"},"selection_glyph":null,"view":{"id":"10098"}},"id":"10097","type":"GlyphRenderer"},{"attributes":{},"id":"10092","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"10374"},"selection_policy":{"id":"10373"}},"id":"10337","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"10460"},"glyph":{"id":"10461"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10462"},"selection_glyph":null,"view":{"id":"10464"}},"id":"10463","type":"GlyphRenderer"},{"attributes":{},"id":"10091","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10339","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"10415"},"selection_policy":{"id":"10414"}},"id":"10376","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"10165"},"selection_policy":{"id":"10164"}},"id":"10142","type":"ColumnDataSource"},{"attributes":{"source":{"id":"10142"}},"id":"10146","type":"CDSView"}],"root_ids":["10019"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"ef421061-8e8b-465b-81dd-18c3ed085d97","root_ids":["10019"],"roots":{"10019":"544c6fda-2f8b-467a-aca5-5a5319b81be7"}}];
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