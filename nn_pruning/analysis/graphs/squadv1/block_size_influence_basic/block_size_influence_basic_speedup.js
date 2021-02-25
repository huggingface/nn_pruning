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
    
      
      
    
      var element = document.getElementById("32cb8b5d-51d0-4b9f-bf24-153b75c461e8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '32cb8b5d-51d0-4b9f-bf24-153b75c461e8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9b246f6f-9a55-4a48-b353-f1bd228c97e2":{"roots":{"references":[{"attributes":{},"id":"25165","type":"Selection"},{"attributes":{"data_source":{"id":"26088"},"glyph":{"id":"26089"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26090"},"selection_glyph":null,"view":{"id":"26092"}},"id":"26091","type":"GlyphRenderer"},{"attributes":{"source":{"id":"25447"}},"id":"25451","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25244","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25413","type":"Line"},{"attributes":{},"id":"25315","type":"UnionRenderers"},{"attributes":{},"id":"25562","type":"UnionRenderers"},{"attributes":{"below":[{"id":"25131"}],"center":[{"id":"25134"},{"id":"25138"},{"id":"25167"}],"left":[{"id":"25135"}],"plot_width":800,"renderers":[{"id":"25157"},{"id":"25172"},{"id":"25188"},{"id":"25205"},{"id":"25224"},{"id":"25246"},{"id":"25269"},{"id":"25294"},{"id":"25321"},{"id":"25351"},{"id":"25382"},{"id":"25415"},{"id":"25450"},{"id":"25488"},{"id":"25527"},{"id":"25568"},{"id":"25611"},{"id":"25657"},{"id":"25704"},{"id":"25753"},{"id":"25804"},{"id":"25858"},{"id":"25913"},{"id":"25970"},{"id":"26029"},{"id":"26091"},{"id":"26154"},{"id":"26219"}],"title":{"id":"25121"},"toolbar":{"id":"25146"},"x_range":{"id":"25153"},"x_scale":{"id":"25127"},"y_range":{"id":"25125"},"y_scale":{"id":"25129"}},"id":"25120","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"25129","type":"LinearScale"},{"attributes":{},"id":"25316","type":"Selection"},{"attributes":{},"id":"25563","type":"Selection"},{"attributes":{"data_source":{"id":"25243"},"glyph":{"id":"25244"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25245"},"selection_glyph":null,"view":{"id":"25247"}},"id":"25246","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25414","type":"Line"},{"attributes":{"source":{"id":"25412"}},"id":"25416","type":"CDSView"},{"attributes":{"label":{"value":"Block, bs= 32x32"},"renderers":[{"id":"25224"}]},"id":"25242","type":"LegendItem"},{"attributes":{"end":3.25,"start":0.75},"id":"25153","type":"Range1d"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25448","type":"Line"},{"attributes":{},"id":"25239","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25566","type":"Line"},{"attributes":{"source":{"id":"25608"}},"id":"25612","type":"CDSView"},{"attributes":{},"id":"25240","type":"Selection"},{"attributes":{},"id":"25444","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25349","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25170","type":"Line"},{"attributes":{},"id":"25445","type":"Selection"},{"attributes":{"data_source":{"id":"25169"},"glyph":{"id":"25170"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25171"},"selection_glyph":null,"view":{"id":"25173"}},"id":"25172","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"25348"},"glyph":{"id":"25349"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25350"},"selection_glyph":null,"view":{"id":"25352"}},"id":"25351","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25567","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 16x16"},"renderers":[{"id":"25321"}]},"id":"25347","type":"LegendItem"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"25182"},"selection_policy":{"id":"25181"}},"id":"25169","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.2806693802635063,1.4644339860190774,1.4658802450943298,1.6527498971607057],"y":[88.34112193061533,87.51569063636161,87.439750439335,86.14927876930865]},"selected":{"id":"25345"},"selection_policy":{"id":"25344"}},"id":"25318","type":"ColumnDataSource"},{"attributes":{"source":{"id":"25565"}},"id":"25569","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25609","type":"Line"},{"attributes":{},"id":"25344","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"25318"},"glyph":{"id":"25319"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25320"},"selection_glyph":null,"view":{"id":"25322"}},"id":"25321","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25486","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25203","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25449","type":"Line"},{"attributes":{},"id":"25345","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"25264"},"selection_policy":{"id":"25263"}},"id":"25243","type":"ColumnDataSource"},{"attributes":{},"id":"25605","type":"UnionRenderers"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25319","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25171","type":"Line"},{"attributes":{"source":{"id":"25169"}},"id":"25173","type":"CDSView"},{"attributes":{},"id":"25606","type":"Selection"},{"attributes":{"data_source":{"id":"25485"},"glyph":{"id":"25486"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25487"},"selection_glyph":null,"view":{"id":"25489"}},"id":"25488","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25223","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25267","type":"Line"},{"attributes":{"data_source":{"id":"25266"},"glyph":{"id":"25267"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25268"},"selection_glyph":null,"view":{"id":"25270"}},"id":"25269","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.1977117757004876,1.3371368758339826,1.4881855061802785],"y":[88.3744311515211,87.66615713942541,86.75922108224064]},"selected":{"id":"25482"},"selection_policy":{"id":"25481"}},"id":"25447","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Block, bs= 8x8"},"renderers":[{"id":"25450"}]},"id":"25484","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25245","type":"Line"},{"attributes":{},"id":"25143","type":"ResetTool"},{"attributes":{"source":{"id":"25243"}},"id":"25247","type":"CDSView"},{"attributes":{},"id":"25481","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"25145"}},"id":"25141","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25655","type":"Line"},{"attributes":{},"id":"25181","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"25377"},"selection_policy":{"id":"25376"}},"id":"25348","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25610","type":"Line"},{"attributes":{},"id":"25482","type":"Selection"},{"attributes":{"data_source":{"id":"25447"},"glyph":{"id":"25448"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25449"},"selection_glyph":null,"view":{"id":"25451"}},"id":"25450","type":"GlyphRenderer"},{"attributes":{},"id":"25182","type":"Selection"},{"attributes":{},"id":"25263","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"25379"},"glyph":{"id":"25380"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25381"},"selection_glyph":null,"view":{"id":"25383"}},"id":"25382","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"25445"},"selection_policy":{"id":"25444"}},"id":"25412","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"26090","type":"Line"},{"attributes":{},"id":"25264","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"26089","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"25200"},"selection_policy":{"id":"25199"}},"id":"25185","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25350","type":"Line"},{"attributes":{"data":{"x":[1.1252216532791355,1.1931736074335828,1.1988795413397866,1.3515039902008532],"y":[88.58172107792693,88.02284574429551,87.80889686617203,87.31499809166372]},"selected":{"id":"25651"},"selection_policy":{"id":"25650"}},"id":"25608","type":"ColumnDataSource"},{"attributes":{"source":{"id":"25348"}},"id":"25352","type":"CDSView"},{"attributes":{"label":{"value":"Block, bs= 4x4"},"renderers":[{"id":"25611"}]},"id":"25653","type":"LegendItem"},{"attributes":{},"id":"25650","type":"UnionRenderers"},{"attributes":{"axis":{"id":"25135"},"dimension":1,"ticker":null},"id":"25138","type":"Grid"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"25522"},"selection_policy":{"id":"25521"}},"id":"25485","type":"ColumnDataSource"},{"attributes":{},"id":"25142","type":"SaveTool"},{"attributes":{"data_source":{"id":"25608"},"glyph":{"id":"25609"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25610"},"selection_glyph":null,"view":{"id":"25612"}},"id":"25611","type":"GlyphRenderer"},{"attributes":{},"id":"25376","type":"UnionRenderers"},{"attributes":{},"id":"25651","type":"Selection"},{"attributes":{},"id":"25199","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25292","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25525","type":"Line"},{"attributes":{},"id":"25200","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"25289"},"selection_policy":{"id":"25288"}},"id":"25266","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25526","type":"Line"},{"attributes":{},"id":"25377","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25293","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25487","type":"Line"},{"attributes":{"data_source":{"id":"25291"},"glyph":{"id":"25292"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25293"},"selection_glyph":null,"view":{"id":"25295"}},"id":"25294","type":"GlyphRenderer"},{"attributes":{"source":{"id":"25485"}},"id":"25489","type":"CDSView"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25802","type":"Line"},{"attributes":{"data_source":{"id":"25524"},"glyph":{"id":"25525"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25526"},"selection_glyph":null,"view":{"id":"25528"}},"id":"25527","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25268","type":"Line"},{"attributes":{"source":{"id":"25266"}},"id":"25270","type":"CDSView"},{"attributes":{},"id":"25144","type":"HelpTool"},{"attributes":{"data_source":{"id":"25202"},"glyph":{"id":"25203"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25204"},"selection_glyph":null,"view":{"id":"25206"}},"id":"25205","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"25699"},"selection_policy":{"id":"25698"}},"id":"25654","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"25654"},"glyph":{"id":"25655"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25656"},"selection_glyph":null,"view":{"id":"25658"}},"id":"25657","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"25219"},"selection_policy":{"id":"25218"}},"id":"25202","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"25410"},"selection_policy":{"id":"25409"}},"id":"25379","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25139"},{"id":"25140"},{"id":"25141"},{"id":"25142"},{"id":"25143"},{"id":"25144"}]},"id":"25146","type":"Toolbar"},{"attributes":{"data":{"x":[1.9695394330694393,2.1003540884863323,2.1124331270315624,2.227490161916501,2.262663009764823,2.471023235070233,2.61711931355729,2.681246344578876,2.704854439028025,2.860446087610368,2.86191312967017],"y":[88.06903108265608,87.70461789964966,87.48291010744668,87.3881230572442,87.14755939306319,86.74156854566804,86.39441106336629,86.20063710644014,86.11992485005756,85.69020560735045,85.6109462422114]},"selected":{"id":"25852"},"selection_policy":{"id":"25851"}},"id":"25801","type":"ColumnDataSource"},{"attributes":{},"id":"25521","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25380","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"25748"},"selection_policy":{"id":"25747"}},"id":"25701","type":"ColumnDataSource"},{"attributes":{},"id":"25288","type":"UnionRenderers"},{"attributes":{},"id":"25522","type":"Selection"},{"attributes":{"source":{"id":"25221"}},"id":"25225","type":"CDSView"},{"attributes":{},"id":"25289","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25656","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25204","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25381","type":"Line"},{"attributes":{"source":{"id":"25654"}},"id":"25658","type":"CDSView"},{"attributes":{"data_source":{"id":"25701"},"glyph":{"id":"25702"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25703"},"selection_glyph":null,"view":{"id":"25705"}},"id":"25704","type":"GlyphRenderer"},{"attributes":{"source":{"id":"25202"}},"id":"25206","type":"CDSView"},{"attributes":{"source":{"id":"25379"}},"id":"25383","type":"CDSView"},{"attributes":{"data_source":{"id":"25412"},"glyph":{"id":"25413"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25414"},"selection_glyph":null,"view":{"id":"25416"}},"id":"25415","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25222","type":"Line"},{"attributes":{},"id":"25698","type":"UnionRenderers"},{"attributes":{"source":{"id":"25318"}},"id":"25322","type":"CDSView"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"25606"},"selection_policy":{"id":"25605"}},"id":"25565","type":"ColumnDataSource"},{"attributes":{},"id":"25218","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"25316"},"selection_policy":{"id":"25315"}},"id":"25291","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"25563"},"selection_policy":{"id":"25562"}},"id":"25524","type":"ColumnDataSource"},{"attributes":{},"id":"25409","type":"UnionRenderers"},{"attributes":{},"id":"25699","type":"Selection"},{"attributes":{},"id":"25219","type":"Selection"},{"attributes":{},"id":"25410","type":"Selection"},{"attributes":{"source":{"id":"25291"}},"id":"25295","type":"CDSView"},{"attributes":{"source":{"id":"25524"}},"id":"25528","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25320","type":"Line"},{"attributes":{"data_source":{"id":"25565"},"glyph":{"id":"25566"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25567"},"selection_glyph":null,"view":{"id":"25569"}},"id":"25568","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25857","type":"Line"},{"attributes":{},"id":"25127","type":"LinearScale"},{"attributes":{},"id":"25907","type":"UnionRenderers"},{"attributes":{},"id":"26148","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25751","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25187","type":"Line"},{"attributes":{"source":{"id":"25801"}},"id":"25805","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25702","type":"Line"},{"attributes":{},"id":"25908","type":"Selection"},{"attributes":{},"id":"26149","type":"Selection"},{"attributes":{},"id":"25162","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"25221"},"glyph":{"id":"25222"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25223"},"selection_glyph":null,"view":{"id":"25225"}},"id":"25224","type":"GlyphRenderer"},{"attributes":{},"id":"25136","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25703","type":"Line"},{"attributes":{"source":{"id":"25185"}},"id":"25189","type":"CDSView"},{"attributes":{"source":{"id":"25701"}},"id":"25705","type":"CDSView"},{"attributes":{"data_source":{"id":"25750"},"glyph":{"id":"25751"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25752"},"selection_glyph":null,"view":{"id":"25754"}},"id":"25753","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25968","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"26217","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25911","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"26152","type":"Line"},{"attributes":{},"id":"25747","type":"UnionRenderers"},{"attributes":{"axis":{"id":"25131"},"ticker":null},"id":"25134","type":"Grid"},{"attributes":{},"id":"25748","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25912","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"26153","type":"Line"},{"attributes":{"source":{"id":"25910"}},"id":"25914","type":"CDSView"},{"attributes":{"source":{"id":"26151"}},"id":"26155","type":"CDSView"},{"attributes":{"data_source":{"id":"25967"},"glyph":{"id":"25968"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25969"},"selection_glyph":null,"view":{"id":"25971"}},"id":"25970","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"26216"},"glyph":{"id":"26217"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26218"},"selection_glyph":null,"view":{"id":"26220"}},"id":"26219","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25803","type":"Line"},{"attributes":{},"id":"25964","type":"UnionRenderers"},{"attributes":{},"id":"26213","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"25799"},"selection_policy":{"id":"25798"}},"id":"25750","type":"ColumnDataSource"},{"attributes":{},"id":"25965","type":"Selection"},{"attributes":{},"id":"26214","type":"Selection"},{"attributes":{"axis_label":"F1","formatter":{"id":"25160"},"ticker":{"id":"25136"}},"id":"25135","type":"LinearAxis"},{"attributes":{"data":{"x":[1.559464313363606,1.599770932365684,1.9655458674518098,2.0054680821187447,2.2874144573134694,2.289378243109522],"y":[87.36378709007766,87.30735739624531,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"25240"},"selection_policy":{"id":"25239"}},"id":"25221","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25752","type":"Line"},{"attributes":{"source":{"id":"26088"}},"id":"26092","type":"CDSView"},{"attributes":{"source":{"id":"25750"}},"id":"25754","type":"CDSView"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"26214"},"selection_policy":{"id":"26213"}},"id":"26151","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"26151"},"glyph":{"id":"26152"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26153"},"selection_glyph":null,"view":{"id":"26155"}},"id":"26154","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"25185"},"glyph":{"id":"25186"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25187"},"selection_glyph":null,"view":{"id":"25189"}},"id":"25188","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26026"}},"id":"26030","type":"CDSView"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"26024"},"selection_policy":{"id":"26023"}},"id":"25967","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"26281"},"selection_policy":{"id":"26280"}},"id":"26216","type":"ColumnDataSource"},{"attributes":{},"id":"25798","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25155","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"25145","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25156","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"26149"},"selection_policy":{"id":"26148"}},"id":"26088","type":"ColumnDataSource"},{"attributes":{},"id":"25799","type":"Selection"},{"attributes":{"data":{"x":[1.0253716557683228,1.0930418633843273,1.170038217254783,1.2958210124830911,1.3926143255719736,1.5170581452285046],"y":[88.66263407974378,88.08154392563726,87.64967103979136,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"25165"},"selection_policy":{"id":"25164"}},"id":"25154","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25969","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"26218","type":"Line"},{"attributes":{"source":{"id":"25967"}},"id":"25971","type":"CDSView"},{"attributes":{"source":{"id":"26216"}},"id":"26220","type":"CDSView"},{"attributes":{},"id":"25164","type":"UnionRenderers"},{"attributes":{"source":{"id":"25154"}},"id":"25158","type":"CDSView"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"26027","type":"Line"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"25172"},{"id":"25188"},{"id":"25205"},{"id":"25246"},{"id":"25269"},{"id":"25294"},{"id":"25351"},{"id":"25382"},{"id":"25415"},{"id":"25488"},{"id":"25527"},{"id":"25568"},{"id":"25657"},{"id":"25704"},{"id":"25753"},{"id":"25858"},{"id":"25913"},{"id":"25970"},{"id":"26091"},{"id":"26154"},{"id":"26219"}]},"id":"25184","type":"LegendItem"},{"attributes":{},"id":"26023","type":"UnionRenderers"},{"attributes":{},"id":"26280","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25856","type":"Line"},{"attributes":{},"id":"26024","type":"Selection"},{"attributes":{},"id":"26281","type":"Selection"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"26085"},"selection_policy":{"id":"26084"}},"id":"26026","type":"ColumnDataSource"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"25162"},"ticker":{"id":"25132"}},"id":"25131","type":"LinearAxis"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"25804"}]},"id":"25854","type":"LegendItem"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"25121","type":"Title"},{"attributes":{},"id":"25851","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"25168"},{"id":"25184"},{"id":"25242"},{"id":"25347"},{"id":"25484"},{"id":"25653"},{"id":"25854"},{"id":"26087"}]},"id":"25167","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"26028","type":"Line"},{"attributes":{"label":{"value":"Unstructured Soft Movement Pruning"},"renderers":[{"id":"25157"}]},"id":"25168","type":"LegendItem"},{"attributes":{},"id":"25852","type":"Selection"},{"attributes":{},"id":"25125","type":"DataRange1d"},{"attributes":{},"id":"25140","type":"WheelZoomTool"},{"attributes":{},"id":"25132","type":"BasicTicker"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"26029"}]},"id":"26087","type":"LegendItem"},{"attributes":{},"id":"25139","type":"PanTool"},{"attributes":{},"id":"26084","type":"UnionRenderers"},{"attributes":{},"id":"25160","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"25908"},"selection_policy":{"id":"25907"}},"id":"25855","type":"ColumnDataSource"},{"attributes":{},"id":"26085","type":"Selection"},{"attributes":{"data_source":{"id":"25855"},"glyph":{"id":"25856"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25857"},"selection_glyph":null,"view":{"id":"25859"}},"id":"25858","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"25801"},"glyph":{"id":"25802"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25803"},"selection_glyph":null,"view":{"id":"25805"}},"id":"25804","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"26026"},"glyph":{"id":"26027"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26028"},"selection_glyph":null,"view":{"id":"26030"}},"id":"26029","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"25154"},"glyph":{"id":"25155"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25156"},"selection_glyph":null,"view":{"id":"25158"}},"id":"25157","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"25965"},"selection_policy":{"id":"25964"}},"id":"25910","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"25910"},"glyph":{"id":"25911"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25912"},"selection_glyph":null,"view":{"id":"25914"}},"id":"25913","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"25186","type":"Line"},{"attributes":{"source":{"id":"25855"}},"id":"25859","type":"CDSView"}],"root_ids":["25120"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"9b246f6f-9a55-4a48-b353-f1bd228c97e2","root_ids":["25120"],"roots":{"25120":"32cb8b5d-51d0-4b9f-bf24-153b75c461e8"}}];
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