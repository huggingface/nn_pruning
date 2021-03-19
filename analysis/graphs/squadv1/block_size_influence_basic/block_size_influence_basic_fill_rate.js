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
    
      
      
    
      var element = document.getElementById("2b54667f-cf98-4ddc-9981-6399b1fb7ec6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2b54667f-cf98-4ddc-9981-6399b1fb7ec6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6bd9bbd1-9963-49c4-8afa-6a6a3e67d157":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47792","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47740","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"48141","type":"Line"},{"attributes":{},"id":"47125","type":"BasicTicker"},{"attributes":{},"id":"47595","type":"UnionRenderers"},{"attributes":{"source":{"id":"47790"}},"id":"47794","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"48206","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47338","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47741","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"48142","type":"Line"},{"attributes":{"source":{"id":"47739"}},"id":"47743","type":"CDSView"},{"attributes":{"source":{"id":"48140"}},"id":"48144","type":"CDSView"},{"attributes":{"data_source":{"id":"48205"},"glyph":{"id":"48206"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48207"},"selection_glyph":null,"view":{"id":"48209"}},"id":"48208","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"47365"},"selection_policy":{"id":"47366"}},"id":"47337","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"47337"},"glyph":{"id":"47338"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47339"},"selection_glyph":null,"view":{"id":"47341"}},"id":"47340","type":"GlyphRenderer"},{"attributes":{},"id":"47787","type":"Selection"},{"attributes":{},"id":"48202","type":"Selection"},{"attributes":{"data":{"x":[0.353609061535494,0.22401861496913578,0.13401210455246915],"y":[88.02730364897265,86.84949475139184,85.16652519097626]},"selected":{"id":"47470"},"selection_policy":{"id":"47471"}},"id":"47436","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47644","type":"Line"},{"attributes":{"axis":{"id":"47124"},"dimension":1,"ticker":null},"id":"47127","type":"Grid"},{"attributes":{"data_source":{"id":"47368"},"glyph":{"id":"47369"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47370"},"selection_glyph":null,"view":{"id":"47372"}},"id":"47371","type":"GlyphRenderer"},{"attributes":{},"id":"47788","type":"UnionRenderers"},{"attributes":{},"id":"48203","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47402","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47339","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 4x4"},"renderers":[{"id":"47600"}]},"id":"47642","type":"LegendItem"},{"attributes":{"source":{"id":"47337"}},"id":"47341","type":"CDSView"},{"attributes":{},"id":"47639","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47438","type":"Line"},{"attributes":{},"id":"47132","type":"ResetTool"},{"attributes":{},"id":"47640","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"48073"},"selection_policy":{"id":"48074"}},"id":"48015","type":"ColumnDataSource"},{"attributes":{},"id":"47365","type":"Selection"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47144","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47845","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"48269"},"selection_policy":{"id":"48270"}},"id":"48205","type":"ColumnDataSource"},{"attributes":{},"id":"47366","type":"UnionRenderers"},{"attributes":{},"id":"47131","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"48207","type":"Line"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"47793"}]},"id":"47843","type":"LegendItem"},{"attributes":{"source":{"id":"48205"}},"id":"48209","type":"CDSView"},{"attributes":{},"id":"47840","type":"Selection"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47791","type":"Line"},{"attributes":{},"id":"47841","type":"UnionRenderers"},{"attributes":{"source":{"id":"47191"}},"id":"47195","type":"CDSView"},{"attributes":{},"id":"48269","type":"Selection"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47211","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"47687"},"selection_policy":{"id":"47688"}},"id":"47643","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"47643"},"glyph":{"id":"47644"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47645"},"selection_glyph":null,"view":{"id":"47647"}},"id":"47646","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"47398"},"selection_policy":{"id":"47399"}},"id":"47368","type":"ColumnDataSource"},{"attributes":{},"id":"47121","type":"BasicTicker"},{"attributes":{"data_source":{"id":"47790"},"glyph":{"id":"47791"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47792"},"selection_glyph":null,"view":{"id":"47794"}},"id":"47793","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"47840"},"selection_policy":{"id":"47841"}},"id":"47790","type":"ColumnDataSource"},{"attributes":{},"id":"48270","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47369","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47691","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"47787"},"selection_policy":{"id":"47788"}},"id":"47739","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"47134","type":"BoxAnnotation"},{"attributes":{"data":{"x":[0.25071068751959147,0.15786624249116865,0.11725962603533713,0.11616964693422671,0.06489395800931963,0.04466981063654396,0.0340861803219642],"y":[88.66263407974378,88.07603620459668,87.64967103979136,87.59923644792065,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"47153"},"selection_policy":{"id":"47154"}},"id":"47143","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"47143"},"glyph":{"id":"47144"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47145"},"selection_glyph":null,"view":{"id":"47147"}},"id":"47146","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47645","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"47157"},{"id":"47173"},{"id":"47231"},{"id":"47336"},{"id":"47473"},{"id":"47642"},{"id":"47843"},{"id":"48076"}],"location":"bottom_right"},"id":"47156","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47370","type":"Line"},{"attributes":{"source":{"id":"47643"}},"id":"47647","type":"CDSView"},{"attributes":{"data_source":{"id":"47690"},"glyph":{"id":"47691"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47692"},"selection_glyph":null,"view":{"id":"47694"}},"id":"47693","type":"GlyphRenderer"},{"attributes":{"source":{"id":"47368"}},"id":"47372","type":"CDSView"},{"attributes":{"data_source":{"id":"47401"},"glyph":{"id":"47402"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47403"},"selection_glyph":null,"view":{"id":"47405"}},"id":"47404","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47145","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47192","type":"Line"},{"attributes":{},"id":"47118","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47193","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"47896"},"selection_policy":{"id":"47897"}},"id":"47844","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"47844"},"glyph":{"id":"47845"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47846"},"selection_glyph":null,"view":{"id":"47848"}},"id":"47847","type":"GlyphRenderer"},{"attributes":{},"id":"47687","type":"Selection"},{"attributes":{"data_source":{"id":"48015"},"glyph":{"id":"48016"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48017"},"selection_glyph":null,"view":{"id":"48019"}},"id":"48018","type":"GlyphRenderer"},{"attributes":{},"id":"47398","type":"Selection"},{"attributes":{"source":{"id":"47143"}},"id":"47147","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47900","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"48012"},"selection_policy":{"id":"48013"}},"id":"47956","type":"ColumnDataSource"},{"attributes":{},"id":"47688","type":"UnionRenderers"},{"attributes":{},"id":"47399","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47846","type":"Line"},{"attributes":{"source":{"id":"47844"}},"id":"47848","type":"CDSView"},{"attributes":{"data_source":{"id":"47899"},"glyph":{"id":"47900"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47901"},"selection_glyph":null,"view":{"id":"47903"}},"id":"47902","type":"GlyphRenderer"},{"attributes":{},"id":"47896","type":"Selection"},{"attributes":{"below":[{"id":"47120"}],"center":[{"id":"47123"},{"id":"47127"},{"id":"47156"}],"left":[{"id":"47124"}],"plot_width":800,"renderers":[{"id":"47146"},{"id":"47161"},{"id":"47177"},{"id":"47194"},{"id":"47213"},{"id":"47235"},{"id":"47258"},{"id":"47283"},{"id":"47310"},{"id":"47340"},{"id":"47371"},{"id":"47404"},{"id":"47439"},{"id":"47477"},{"id":"47516"},{"id":"47557"},{"id":"47600"},{"id":"47646"},{"id":"47693"},{"id":"47742"},{"id":"47793"},{"id":"47847"},{"id":"47902"},{"id":"47959"},{"id":"48018"},{"id":"48080"},{"id":"48143"},{"id":"48208"}],"title":{"id":"47110"},"toolbar":{"id":"47135"},"x_range":{"id":"47142"},"x_scale":{"id":"47116"},"y_range":{"id":"47114"},"y_scale":{"id":"47118"}},"id":"47109","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"47436"}},"id":"47440","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"47433"},"selection_policy":{"id":"47434"}},"id":"47401","type":"ColumnDataSource"},{"attributes":{},"id":"47897","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"47736"},"selection_policy":{"id":"47737"}},"id":"47690","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47403","type":"Line"},{"attributes":{"source":{"id":"47401"}},"id":"47405","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47692","type":"Line"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47437","type":"Line"},{"attributes":{"source":{"id":"47690"}},"id":"47694","type":"CDSView"},{"attributes":{"data_source":{"id":"47739"},"glyph":{"id":"47740"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47741"},"selection_glyph":null,"view":{"id":"47743"}},"id":"47742","type":"GlyphRenderer"},{"attributes":{},"id":"47433","type":"Selection"},{"attributes":{},"id":"47736","type":"Selection"},{"attributes":{"axis":{"id":"47120"},"ticker":null},"id":"47123","type":"Grid"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"47953"},"selection_policy":{"id":"47954"}},"id":"47899","type":"ColumnDataSource"},{"attributes":{},"id":"47434","type":"UnionRenderers"},{"attributes":{},"id":"47737","type":"UnionRenderers"},{"attributes":{"axis_label":"F1","formatter":{"id":"47149"},"ticker":{"id":"47125"}},"id":"47124","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47901","type":"Line"},{"attributes":{"source":{"id":"47899"}},"id":"47903","type":"CDSView"},{"attributes":{"data_source":{"id":"47956"},"glyph":{"id":"47957"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47958"},"selection_glyph":null,"view":{"id":"47960"}},"id":"47959","type":"GlyphRenderer"},{"attributes":{},"id":"47953","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"47252"},"selection_policy":{"id":"47253"}},"id":"47232","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"47474"},"glyph":{"id":"47475"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47476"},"selection_glyph":null,"view":{"id":"47478"}},"id":"47477","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47175","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47233","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47475","type":"Line"},{"attributes":{},"id":"47954","type":"UnionRenderers"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"47161"},{"id":"47177"},{"id":"47194"},{"id":"47235"},{"id":"47258"},{"id":"47283"},{"id":"47340"},{"id":"47371"},{"id":"47404"},{"id":"47477"},{"id":"47516"},{"id":"47557"},{"id":"47646"},{"id":"47693"},{"id":"47742"},{"id":"47847"},{"id":"47902"},{"id":"47959"},{"id":"48080"},{"id":"48143"},{"id":"48208"}]},"id":"47173","type":"LegendItem"},{"attributes":{"label":{"value":"Block, bs= 8x8"},"renderers":[{"id":"47439"}]},"id":"47473","type":"LegendItem"},{"attributes":{},"id":"47129","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47256","type":"Line"},{"attributes":{"overlay":{"id":"47134"}},"id":"47130","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"47255"},"glyph":{"id":"47256"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47257"},"selection_glyph":null,"view":{"id":"47259"}},"id":"47258","type":"GlyphRenderer"},{"attributes":{},"id":"47116","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47234","type":"Line"},{"attributes":{},"id":"47128","type":"PanTool"},{"attributes":{},"id":"47470","type":"Selection"},{"attributes":{"source":{"id":"47232"}},"id":"47236","type":"CDSView"},{"attributes":{},"id":"47170","type":"Selection"},{"attributes":{},"id":"47471","type":"UnionRenderers"},{"attributes":{"source":{"id":"48015"}},"id":"48019","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47957","type":"Line"},{"attributes":{},"id":"47171","type":"UnionRenderers"},{"attributes":{},"id":"47252","type":"Selection"},{"attributes":{},"id":"47253","type":"UnionRenderers"},{"attributes":{},"id":"47594","type":"Selection"},{"attributes":{"end":0.65},"id":"47142","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47958","type":"Line"},{"attributes":{"data":{"x":[0.3551132767288775,0.22577770845389655,0.1314994906201774],"y":[88.21768668110452,87.37325813950282,85.93146728512978]},"selected":{"id":"47639"},"selection_policy":{"id":"47640"}},"id":"47597","type":"ColumnDataSource"},{"attributes":{"source":{"id":"47956"}},"id":"47960","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"47128"},{"id":"47129"},{"id":"47130"},{"id":"47131"},{"id":"47132"},{"id":"47133"}]},"id":"47135","type":"Toolbar"},{"attributes":{"data":{"x":[0.38802083333333326,0.3719618055555556,0.2564019097222221,0.24131944444444442,0.18184558256172845,0.17980806327160492],"y":[87.36378709007766,87.30735739624531,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"47228"},"selection_policy":{"id":"47229"}},"id":"47210","type":"ColumnDataSource"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"48016","type":"Line"},{"attributes":{"data_source":{"id":"47174"},"glyph":{"id":"47175"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47176"},"selection_glyph":null,"view":{"id":"47178"}},"id":"47177","type":"GlyphRenderer"},{"attributes":{},"id":"48012","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"47510"},"selection_policy":{"id":"47511"}},"id":"47474","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"47597"},"glyph":{"id":"47598"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47599"},"selection_glyph":null,"view":{"id":"47601"}},"id":"47600","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47159","type":"Line"},{"attributes":{},"id":"48013","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47281","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47514","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"47277"},"selection_policy":{"id":"47278"}},"id":"47255","type":"ColumnDataSource"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47308","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47555","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"47188"},"selection_policy":{"id":"47189"}},"id":"47174","type":"ColumnDataSource"},{"attributes":{},"id":"47149","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47476","type":"Line"},{"attributes":{},"id":"47133","type":"HelpTool"},{"attributes":{"data_source":{"id":"47280"},"glyph":{"id":"47281"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47282"},"selection_glyph":null,"view":{"id":"47284"}},"id":"47283","type":"GlyphRenderer"},{"attributes":{},"id":"47114","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47176","type":"Line"},{"attributes":{"data_source":{"id":"47513"},"glyph":{"id":"47514"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47515"},"selection_glyph":null,"view":{"id":"47517"}},"id":"47516","type":"GlyphRenderer"},{"attributes":{"source":{"id":"47174"}},"id":"47178","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47257","type":"Line"},{"attributes":{"source":{"id":"47255"}},"id":"47259","type":"CDSView"},{"attributes":{"source":{"id":"47474"}},"id":"47478","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"48078","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"48017","type":"Line"},{"attributes":{},"id":"47510","type":"Selection"},{"attributes":{},"id":"47188","type":"Selection"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"47110","type":"Title"},{"attributes":{},"id":"47277","type":"Selection"},{"attributes":{"data_source":{"id":"48077"},"glyph":{"id":"48078"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48079"},"selection_glyph":null,"view":{"id":"48081"}},"id":"48080","type":"GlyphRenderer"},{"attributes":{},"id":"47511","type":"UnionRenderers"},{"attributes":{},"id":"47189","type":"UnionRenderers"},{"attributes":{},"id":"47278","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"48018"}]},"id":"48076","type":"LegendItem"},{"attributes":{},"id":"48073","type":"Selection"},{"attributes":{},"id":"47151","type":"BasicTickFormatter"},{"attributes":{},"id":"48074","type":"UnionRenderers"},{"attributes":{"source":{"id":"47307"}},"id":"47311","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47599","type":"Line"},{"attributes":{},"id":"47208","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"47207"},"selection_policy":{"id":"47208"}},"id":"47191","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"47304"},"selection_policy":{"id":"47305"}},"id":"47280","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"47551"},"selection_policy":{"id":"47552"}},"id":"47513","type":"ColumnDataSource"},{"attributes":{},"id":"47153","type":"Selection"},{"attributes":{},"id":"47154","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47282","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47515","type":"Line"},{"attributes":{"source":{"id":"47280"}},"id":"47284","type":"CDSView"},{"attributes":{"source":{"id":"47513"}},"id":"47517","type":"CDSView"},{"attributes":{"data_source":{"id":"47554"},"glyph":{"id":"47555"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47556"},"selection_glyph":null,"view":{"id":"47558"}},"id":"47557","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47309","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"48137"},"selection_policy":{"id":"48138"}},"id":"48077","type":"ColumnDataSource"},{"attributes":{},"id":"47207","type":"Selection"},{"attributes":{},"id":"47304","type":"Selection"},{"attributes":{},"id":"47551","type":"Selection"},{"attributes":{"data_source":{"id":"47307"},"glyph":{"id":"47308"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47309"},"selection_glyph":null,"view":{"id":"47311"}},"id":"47310","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"48202"},"selection_policy":{"id":"48203"}},"id":"48140","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47212","type":"Line"},{"attributes":{},"id":"47305","type":"UnionRenderers"},{"attributes":{},"id":"47552","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"48079","type":"Line"},{"attributes":{"source":{"id":"48077"}},"id":"48081","type":"CDSView"},{"attributes":{"data_source":{"id":"48140"},"glyph":{"id":"48141"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48142"},"selection_glyph":null,"view":{"id":"48144"}},"id":"48143","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Block, bs= 32x32"},"renderers":[{"id":"47213"}]},"id":"47231","type":"LegendItem"},{"attributes":{"source":{"id":"47210"}},"id":"47214","type":"CDSView"},{"attributes":{},"id":"47228","type":"Selection"},{"attributes":{},"id":"48137","type":"Selection"},{"attributes":{},"id":"47229","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"47436"},"glyph":{"id":"47437"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47438"},"selection_glyph":null,"view":{"id":"47440"}},"id":"47439","type":"GlyphRenderer"},{"attributes":{"source":{"id":"47597"}},"id":"47601","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"47594"},"selection_policy":{"id":"47595"}},"id":"47554","type":"ColumnDataSource"},{"attributes":{},"id":"48138","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"47158"},"glyph":{"id":"47159"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47160"},"selection_glyph":null,"view":{"id":"47162"}},"id":"47161","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Unstructured Soft Movement Pruning"},"renderers":[{"id":"47146"}]},"id":"47157","type":"LegendItem"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"47151"},"ticker":{"id":"47121"}},"id":"47120","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47556","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 16x16"},"renderers":[{"id":"47310"}]},"id":"47336","type":"LegendItem"},{"attributes":{"data":{"x":[0.3578679591049382,0.23011007426697527],"y":[87.65780769915727,86.57822332702295]},"selected":{"id":"47333"},"selection_policy":{"id":"47334"}},"id":"47307","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"47191"},"glyph":{"id":"47192"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47193"},"selection_glyph":null,"view":{"id":"47195"}},"id":"47194","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"47170"},"selection_policy":{"id":"47171"}},"id":"47158","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"47210"},"glyph":{"id":"47211"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47212"},"selection_glyph":null,"view":{"id":"47214"}},"id":"47213","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"47232"},"glyph":{"id":"47233"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47234"},"selection_glyph":null,"view":{"id":"47236"}},"id":"47235","type":"GlyphRenderer"},{"attributes":{"source":{"id":"47554"}},"id":"47558","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47598","type":"Line"},{"attributes":{},"id":"47333","type":"Selection"},{"attributes":{},"id":"47334","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"47160","type":"Line"},{"attributes":{"source":{"id":"47158"}},"id":"47162","type":"CDSView"}],"root_ids":["47109"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"6bd9bbd1-9963-49c4-8afa-6a6a3e67d157","root_ids":["47109"],"roots":{"47109":"2b54667f-cf98-4ddc-9981-6399b1fb7ec6"}}];
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