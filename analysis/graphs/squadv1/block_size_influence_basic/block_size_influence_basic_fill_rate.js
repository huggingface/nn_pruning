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
    
      
      
    
      var element = document.getElementById("b253e25a-fa50-49f7-b396-397ca92274f9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b253e25a-fa50-49f7-b396-397ca92274f9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"aca14efa-945e-4da4-84bb-ca09d553730d":{"roots":{"references":[{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50192","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49685","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50193","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49708","type":"Line"},{"attributes":{"source":{"id":"50242"}},"id":"50246","type":"CDSView"},{"attributes":{"source":{"id":"50191"}},"id":"50195","type":"CDSView"},{"attributes":{"data_source":{"id":"49707"},"glyph":{"id":"49708"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49709"},"selection_glyph":null,"view":{"id":"49711"}},"id":"49710","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"50244","type":"Line"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"49596","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49686","type":"Line"},{"attributes":{"source":{"id":"49684"}},"id":"49688","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50096","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50409","type":"Line"},{"attributes":{"end":0.65},"id":"49594","type":"Range1d"},{"attributes":{"source":{"id":"50467"}},"id":"50471","type":"CDSView"},{"attributes":{},"id":"50240","type":"Selection"},{"attributes":{},"id":"50241","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50410","type":"Line"},{"attributes":{},"id":"49705","type":"Selection"},{"attributes":{"label":{"value":"Block, bs= 4x4"},"renderers":[{"id":"50052"}]},"id":"50094","type":"LegendItem"},{"attributes":{"source":{"id":"50408"}},"id":"50412","type":"CDSView"},{"attributes":{},"id":"49706","type":"UnionRenderers"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"50468","type":"Line"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"49606"},"selection_policy":{"id":"49607"}},"id":"49595","type":"ColumnDataSource"},{"attributes":{},"id":"49603","type":"BasicTickFormatter"},{"attributes":{},"id":"50092","type":"Selection"},{"attributes":{},"id":"50093","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50297","type":"Line"},{"attributes":{},"id":"50465","type":"Selection"},{"attributes":{},"id":"50466","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"50526"},"selection_policy":{"id":"50527"}},"id":"50467","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"49730"},"selection_policy":{"id":"49731"}},"id":"49707","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"50245"}]},"id":"50295","type":"LegendItem"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49733","type":"Line"},{"attributes":{"data_source":{"id":"49732"},"glyph":{"id":"49733"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49734"},"selection_glyph":null,"view":{"id":"49736"}},"id":"49735","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49709","type":"Line"},{"attributes":{"axis":{"id":"49572"},"ticker":null},"id":"49575","type":"Grid"},{"attributes":{"source":{"id":"49707"}},"id":"49711","type":"CDSView"},{"attributes":{},"id":"50293","type":"Selection"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"50243","type":"Line"},{"attributes":{},"id":"50294","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"50140"},"selection_policy":{"id":"50141"}},"id":"50095","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50530","type":"Line"},{"attributes":{"data_source":{"id":"50095"},"glyph":{"id":"50096"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50097"},"selection_glyph":null,"view":{"id":"50099"}},"id":"50098","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"50293"},"selection_policy":{"id":"50294"}},"id":"50242","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"50469","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50143","type":"Line"},{"attributes":{"data_source":{"id":"50529"},"glyph":{"id":"50530"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50531"},"selection_glyph":null,"view":{"id":"50533"}},"id":"50532","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"50240"},"selection_policy":{"id":"50241"}},"id":"50191","type":"ColumnDataSource"},{"attributes":{},"id":"49730","type":"Selection"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"50470"}]},"id":"50528","type":"LegendItem"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"49562","type":"Title"},{"attributes":{},"id":"49731","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50097","type":"Line"},{"attributes":{"source":{"id":"50095"}},"id":"50099","type":"CDSView"},{"attributes":{"data_source":{"id":"50142"},"glyph":{"id":"50143"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50144"},"selection_glyph":null,"view":{"id":"50146"}},"id":"50145","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49611","type":"Line"},{"attributes":{},"id":"50526","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"50349"},"selection_policy":{"id":"50350"}},"id":"50296","type":"ColumnDataSource"},{"attributes":{},"id":"50527","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"50296"},"glyph":{"id":"50297"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50298"},"selection_glyph":null,"view":{"id":"50300"}},"id":"50299","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"50467"},"glyph":{"id":"50468"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50469"},"selection_glyph":null,"view":{"id":"50471"}},"id":"50470","type":"GlyphRenderer"},{"attributes":{},"id":"50047","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50352","type":"Line"},{"attributes":{},"id":"49606","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"50465"},"selection_policy":{"id":"50466"}},"id":"50408","type":"ColumnDataSource"},{"attributes":{},"id":"49607","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"49757"},"selection_policy":{"id":"49758"}},"id":"49732","type":"ColumnDataSource"},{"attributes":{"source":{"id":"49759"}},"id":"49763","type":"CDSView"},{"attributes":{},"id":"50140","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50298","type":"Line"},{"attributes":{},"id":"50141","type":"UnionRenderers"},{"attributes":{"source":{"id":"50296"}},"id":"50300","type":"CDSView"},{"attributes":{"data_source":{"id":"50351"},"glyph":{"id":"50352"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50353"},"selection_glyph":null,"view":{"id":"50355"}},"id":"50354","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49734","type":"Line"},{"attributes":{"source":{"id":"49732"}},"id":"49736","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"49761","type":"Line"},{"attributes":{"axis":{"id":"49576"},"dimension":1,"ticker":null},"id":"49579","type":"Grid"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"50590"},"selection_policy":{"id":"50591"}},"id":"50529","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.38802083333333326,0.3719618055555556,0.2564019097222221,0.24131944444444442,0.18184558256172845,0.17980806327160492],"y":[87.36378709007766,87.30735739624531,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"49681"},"selection_policy":{"id":"49682"}},"id":"49662","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"50655"},"selection_policy":{"id":"50656"}},"id":"50592","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"49610"},"glyph":{"id":"49611"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49612"},"selection_glyph":null,"view":{"id":"49614"}},"id":"49613","type":"GlyphRenderer"},{"attributes":{},"id":"49568","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"50189"},"selection_policy":{"id":"50190"}},"id":"50142","type":"ColumnDataSource"},{"attributes":{},"id":"49757","type":"Selection"},{"attributes":{},"id":"50349","type":"Selection"},{"attributes":{},"id":"49758","type":"UnionRenderers"},{"attributes":{},"id":"50350","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"49623"},"selection_policy":{"id":"49624"}},"id":"49610","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50531","type":"Line"},{"attributes":{"data_source":{"id":"49662"},"glyph":{"id":"49663"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49664"},"selection_glyph":null,"view":{"id":"49666"}},"id":"49665","type":"GlyphRenderer"},{"attributes":{"source":{"id":"50529"}},"id":"50533","type":"CDSView"},{"attributes":{"data_source":{"id":"50592"},"glyph":{"id":"50593"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50594"},"selection_glyph":null,"view":{"id":"50596"}},"id":"50595","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50144","type":"Line"},{"attributes":{"axis_label":"F1","formatter":{"id":"49603"},"ticker":{"id":"49577"}},"id":"49576","type":"LinearAxis"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"49613"},{"id":"49629"},{"id":"49646"},{"id":"49687"},{"id":"49710"},{"id":"49735"},{"id":"49792"},{"id":"49823"},{"id":"49856"},{"id":"49929"},{"id":"49968"},{"id":"50009"},{"id":"50098"},{"id":"50145"},{"id":"50194"},{"id":"50299"},{"id":"50354"},{"id":"50411"},{"id":"50532"},{"id":"50595"},{"id":"50660"}]},"id":"49625","type":"LegendItem"},{"attributes":{"source":{"id":"50142"}},"id":"50146","type":"CDSView"},{"attributes":{"data_source":{"id":"49626"},"glyph":{"id":"49627"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49628"},"selection_glyph":null,"view":{"id":"49630"}},"id":"49629","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"50191"},"glyph":{"id":"50192"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50193"},"selection_glyph":null,"view":{"id":"50195"}},"id":"50194","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"49705"},"selection_policy":{"id":"49706"}},"id":"49684","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"49597","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49612","type":"Line"},{"attributes":{},"id":"49577","type":"BasicTicker"},{"attributes":{"source":{"id":"49610"}},"id":"49614","type":"CDSView"},{"attributes":{"label":{"value":"Unstructured Soft Movement Pruning"},"renderers":[{"id":"49598"}]},"id":"49609","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"50406"},"selection_policy":{"id":"50407"}},"id":"50351","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"50242"},"glyph":{"id":"50243"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50244"},"selection_glyph":null,"view":{"id":"50246"}},"id":"50245","type":"GlyphRenderer"},{"attributes":{"source":{"id":"49595"}},"id":"49599","type":"CDSView"},{"attributes":{},"id":"50189","type":"Selection"},{"attributes":{"data_source":{"id":"49888"},"glyph":{"id":"49889"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49890"},"selection_glyph":null,"view":{"id":"49892"}},"id":"49891","type":"GlyphRenderer"},{"attributes":{},"id":"50190","type":"UnionRenderers"},{"attributes":{},"id":"50590","type":"Selection"},{"attributes":{},"id":"50591","type":"UnionRenderers"},{"attributes":{"label":{"value":"Block, bs= 16x16"},"renderers":[{"id":"49762"}]},"id":"49788","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50353","type":"Line"},{"attributes":{"source":{"id":"50351"}},"id":"50355","type":"CDSView"},{"attributes":{"data_source":{"id":"50408"},"glyph":{"id":"50409"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50410"},"selection_glyph":null,"view":{"id":"50412"}},"id":"50411","type":"GlyphRenderer"},{"attributes":{},"id":"49786","type":"Selection"},{"attributes":{},"id":"49623","type":"Selection"},{"attributes":{},"id":"49787","type":"UnionRenderers"},{"attributes":{},"id":"50407","type":"UnionRenderers"},{"attributes":{},"id":"49624","type":"UnionRenderers"},{"attributes":{},"id":"50406","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50658","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50593","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"49580"},{"id":"49581"},{"id":"49582"},{"id":"49583"},{"id":"49584"},{"id":"49585"}]},"id":"49587","type":"Toolbar"},{"attributes":{"data_source":{"id":"49926"},"glyph":{"id":"49927"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49928"},"selection_glyph":null,"view":{"id":"49930"}},"id":"49929","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49927","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50594","type":"Line"},{"attributes":{"source":{"id":"50592"}},"id":"50596","type":"CDSView"},{"attributes":{"data_source":{"id":"50657"},"glyph":{"id":"50658"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50659"},"selection_glyph":null,"view":{"id":"50661"}},"id":"50660","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49790","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"49818"},"selection_policy":{"id":"49819"}},"id":"49789","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"49586"}},"id":"49582","type":"BoxZoomTool"},{"attributes":{},"id":"49923","type":"Selection"},{"attributes":{"data_source":{"id":"49789"},"glyph":{"id":"49790"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49791"},"selection_glyph":null,"view":{"id":"49793"}},"id":"49792","type":"GlyphRenderer"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"49760","type":"Line"},{"attributes":{},"id":"49924","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49644","type":"Line"},{"attributes":{"data":{"x":[0.353609061535494,0.22401861496913578,0.13401210455246915],"y":[88.02730364897265,86.84949475139184,85.16652519097626]},"selected":{"id":"49923"},"selection_policy":{"id":"49924"}},"id":"49888","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49627","type":"Line"},{"attributes":{"data_source":{"id":"49820"},"glyph":{"id":"49821"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49822"},"selection_glyph":null,"view":{"id":"49824"}},"id":"49823","type":"GlyphRenderer"},{"attributes":{},"id":"49584","type":"ResetTool"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"49641"},"selection_policy":{"id":"49642"}},"id":"49626","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49854","type":"Line"},{"attributes":{},"id":"50655","type":"Selection"},{"attributes":{},"id":"50656","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49628","type":"Line"},{"attributes":{"source":{"id":"49626"}},"id":"49630","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49791","type":"Line"},{"attributes":{"source":{"id":"49789"}},"id":"49793","type":"CDSView"},{"attributes":{},"id":"49580","type":"PanTool"},{"attributes":{"source":{"id":"49888"}},"id":"49892","type":"CDSView"},{"attributes":{"data":{"x":[0.3551132767288775,0.22577770845389655,0.1314994906201774],"y":[88.21768668110452,87.37325813950282,85.93146728512978]},"selected":{"id":"50092"},"selection_policy":{"id":"50093"}},"id":"50049","type":"ColumnDataSource"},{"attributes":{},"id":"49585","type":"HelpTool"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"49963"},"selection_policy":{"id":"49964"}},"id":"49926","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"50049"},"glyph":{"id":"50050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50051"},"selection_glyph":null,"view":{"id":"50053"}},"id":"50052","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"50722"},"selection_policy":{"id":"50723"}},"id":"50657","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49966","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50007","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"49586","type":"BoxAnnotation"},{"attributes":{},"id":"49641","type":"Selection"},{"attributes":{},"id":"49642","type":"UnionRenderers"},{"attributes":{},"id":"49818","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50659","type":"Line"},{"attributes":{},"id":"49819","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49928","type":"Line"},{"attributes":{"source":{"id":"50657"}},"id":"50661","type":"CDSView"},{"attributes":{"source":{"id":"49926"}},"id":"49930","type":"CDSView"},{"attributes":{"data_source":{"id":"49965"},"glyph":{"id":"49966"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49967"},"selection_glyph":null,"view":{"id":"49969"}},"id":"49968","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"49595"},"glyph":{"id":"49596"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49597"},"selection_glyph":null,"view":{"id":"49599"}},"id":"49598","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"49643"},"glyph":{"id":"49644"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49645"},"selection_glyph":null,"view":{"id":"49647"}},"id":"49646","type":"GlyphRenderer"},{"attributes":{},"id":"50722","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"49851"},"selection_policy":{"id":"49852"}},"id":"49820","type":"ColumnDataSource"},{"attributes":{},"id":"50723","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"49660"},"selection_policy":{"id":"49661"}},"id":"49643","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49821","type":"Line"},{"attributes":{"source":{"id":"49662"}},"id":"49666","type":"CDSView"},{"attributes":{},"id":"49963","type":"Selection"},{"attributes":{},"id":"49964","type":"UnionRenderers"},{"attributes":{},"id":"49601","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49645","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49822","type":"Line"},{"attributes":{"source":{"id":"49643"}},"id":"49647","type":"CDSView"},{"attributes":{"source":{"id":"49820"}},"id":"49824","type":"CDSView"},{"attributes":{"data_source":{"id":"49853"},"glyph":{"id":"49854"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49855"},"selection_glyph":null,"view":{"id":"49857"}},"id":"49856","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"49663","type":"Line"},{"attributes":{},"id":"49581","type":"WheelZoomTool"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"50004"},"selection_policy":{"id":"50005"}},"id":"49965","type":"ColumnDataSource"},{"attributes":{},"id":"49660","type":"Selection"},{"attributes":{},"id":"49851","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"50051","type":"Line"},{"attributes":{},"id":"49661","type":"UnionRenderers"},{"attributes":{},"id":"49852","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49967","type":"Line"},{"attributes":{"source":{"id":"49965"}},"id":"49969","type":"CDSView"},{"attributes":{"data_source":{"id":"50006"},"glyph":{"id":"50007"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50008"},"selection_glyph":null,"view":{"id":"50010"}},"id":"50009","type":"GlyphRenderer"},{"attributes":{"click_policy":"hide","items":[{"id":"49609"},{"id":"49625"},{"id":"49683"},{"id":"49788"},{"id":"49925"},{"id":"50094"},{"id":"50295"},{"id":"50528"}],"location":"bottom_right"},"id":"49608","type":"Legend"},{"attributes":{"data_source":{"id":"49759"},"glyph":{"id":"49760"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49761"},"selection_glyph":null,"view":{"id":"49763"}},"id":"49762","type":"GlyphRenderer"},{"attributes":{},"id":"49583","type":"SaveTool"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"49601"},"ticker":{"id":"49573"}},"id":"49572","type":"LinearAxis"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"49886"},"selection_policy":{"id":"49887"}},"id":"49853","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"49664","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"49890","type":"Line"},{"attributes":{},"id":"50004","type":"Selection"},{"attributes":{},"id":"50005","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"49684"},"glyph":{"id":"49685"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49686"},"selection_glyph":null,"view":{"id":"49688"}},"id":"49687","type":"GlyphRenderer"},{"attributes":{},"id":"49573","type":"BasicTicker"},{"attributes":{},"id":"49566","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"49855","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 32x32"},"renderers":[{"id":"49665"}]},"id":"49683","type":"LegendItem"},{"attributes":{"source":{"id":"49853"}},"id":"49857","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"49889","type":"Line"},{"attributes":{},"id":"49681","type":"Selection"},{"attributes":{},"id":"49682","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"50047"},"selection_policy":{"id":"50048"}},"id":"50006","type":"ColumnDataSource"},{"attributes":{},"id":"49886","type":"Selection"},{"attributes":{"below":[{"id":"49572"}],"center":[{"id":"49575"},{"id":"49579"},{"id":"49608"}],"left":[{"id":"49576"}],"plot_width":800,"renderers":[{"id":"49598"},{"id":"49613"},{"id":"49629"},{"id":"49646"},{"id":"49665"},{"id":"49687"},{"id":"49710"},{"id":"49735"},{"id":"49762"},{"id":"49792"},{"id":"49823"},{"id":"49856"},{"id":"49891"},{"id":"49929"},{"id":"49968"},{"id":"50009"},{"id":"50052"},{"id":"50098"},{"id":"50145"},{"id":"50194"},{"id":"50245"},{"id":"50299"},{"id":"50354"},{"id":"50411"},{"id":"50470"},{"id":"50532"},{"id":"50595"},{"id":"50660"}],"title":{"id":"49562"},"toolbar":{"id":"49587"},"x_range":{"id":"49594"},"x_scale":{"id":"49568"},"y_range":{"id":"49566"},"y_scale":{"id":"49570"}},"id":"49561","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"49570","type":"LinearScale"},{"attributes":{"source":{"id":"50049"}},"id":"50053","type":"CDSView"},{"attributes":{},"id":"49887","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"50008","type":"Line"},{"attributes":{"source":{"id":"50006"}},"id":"50010","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"50050","type":"Line"},{"attributes":{"data":{"x":[0.3578679591049382,0.23011007426697527],"y":[87.65780769915727,86.57822332702295]},"selected":{"id":"49786"},"selection_policy":{"id":"49787"}},"id":"49759","type":"ColumnDataSource"},{"attributes":{},"id":"50048","type":"UnionRenderers"},{"attributes":{"label":{"value":"Block, bs= 8x8"},"renderers":[{"id":"49891"}]},"id":"49925","type":"LegendItem"}],"root_ids":["49561"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"aca14efa-945e-4da4-84bb-ca09d553730d","root_ids":["49561"],"roots":{"49561":"b253e25a-fa50-49f7-b396-397ca92274f9"}}];
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