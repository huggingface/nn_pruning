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
    
      
      
    
      var element = document.getElementById("4bfd6229-b98f-448d-bbd7-0a33ad509fc8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4bfd6229-b98f-448d-bbd7-0a33ad509fc8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0752668b-63ee-4f81-ae10-c872dac4fdb1":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3475","type":"Line"},{"attributes":{"source":{"id":"3182"}},"id":"3186","type":"CDSView"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3514","type":"Line"},{"attributes":{},"id":"3220","type":"Selection"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"3193"},"selection_policy":{"id":"3194"}},"id":"3177","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3513"}},"id":"3517","type":"CDSView"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"3176","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3476","type":"Line"},{"attributes":{},"id":"3221","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.7],"y":[88.5,88.5]},"selected":{"id":"3195"},"selection_policy":{"id":"3196"}},"id":"3182","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3474"}},"id":"3478","type":"CDSView"},{"attributes":{"below":[{"id":"3152"}],"center":[{"id":"3155"},{"id":"3159"},{"id":"3176"},{"id":"3197"},{"id":"3199"},{"id":"3224"}],"left":[{"id":"3156"}],"plot_width":800,"renderers":[{"id":"3180"},{"id":"3185"},{"id":"3203"},{"id":"3208"},{"id":"3228"},{"id":"3233"},{"id":"3256"},{"id":"3282"},{"id":"3309"},{"id":"3339"},{"id":"3370"},{"id":"3404"},{"id":"3439"},{"id":"3477"},{"id":"3516"},{"id":"3558"}],"title":null,"toolbar":{"id":"3167"},"x_range":{"id":"3174"},"x_scale":{"id":"3148"},"y_range":{"id":"3175"},"y_scale":{"id":"3150"}},"id":"3142","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3201","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3515","type":"Line"},{"attributes":{"axis":{"id":"3156"},"dimension":1,"ticker":null},"id":"3159","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3184","type":"Line"},{"attributes":{},"id":"3157","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3178","type":"Scatter"},{"attributes":{},"id":"3511","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3183","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3166","type":"BoxAnnotation"},{"attributes":{},"id":"3222","type":"Selection"},{"attributes":{},"id":"3223","type":"UnionRenderers"},{"attributes":{},"id":"3512","type":"UnionRenderers"},{"attributes":{},"id":"3188","type":"BasicTickFormatter"},{"attributes":{},"id":"3190","type":"BasicTickFormatter"},{"attributes":{"axis_label":"F1","formatter":{"id":"3190"},"ticker":{"id":"3157"}},"id":"3156","type":"LinearAxis"},{"attributes":{"source":{"id":"3177"}},"id":"3181","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3556","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3231","type":"Line"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"3185"},{"id":"3208"},{"id":"3233"},{"id":"3282"},{"id":"3339"},{"id":"3404"},{"id":"3477"},{"id":"3558"}]},"id":"3198","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.7],"y":[88.5,88.5]},"selected":{"id":"3251"},"selection_policy":{"id":"3252"}},"id":"3230","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3227","type":"Scatter"},{"attributes":{"label":{"value":"Hybrid Filled LT"},"renderers":[{"id":"3516"}]},"id":"3554","type":"LegendItem"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"3199","type":"Label"},{"attributes":{"data_source":{"id":"3230"},"glyph":{"id":"3231"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3232"},"selection_glyph":null,"view":{"id":"3234"}},"id":"3233","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3225"}},"id":"3229","type":"CDSView"},{"attributes":{},"id":"3552","type":"Selection"},{"attributes":{"data_source":{"id":"3225"},"glyph":{"id":"3226"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3227"},"selection_glyph":null,"view":{"id":"3229"}},"id":"3228","type":"GlyphRenderer"},{"attributes":{},"id":"3193","type":"Selection"},{"attributes":{"axis_label":"Density","formatter":{"id":"3188"},"ticker":{"id":"3153"}},"id":"3152","type":"LinearAxis"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"3276"},"selection_policy":{"id":"3277"}},"id":"3253","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3177"},"glyph":{"id":"3178"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3179"},"selection_glyph":null,"view":{"id":"3181"}},"id":"3180","type":"GlyphRenderer"},{"attributes":{},"id":"3553","type":"UnionRenderers"},{"attributes":{"label":{"value":"Movement"},"renderers":[{"id":"3256"}]},"id":"3278","type":"LegendItem"},{"attributes":{},"id":"3194","type":"UnionRenderers"},{"attributes":{"source":{"id":"3253"}},"id":"3257","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3254","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3232","type":"Line"},{"attributes":{"source":{"id":"3230"}},"id":"3234","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3160"},{"id":"3161"},{"id":"3162"},{"id":"3163"},{"id":"3164"},{"id":"3165"}]},"id":"3167","type":"Toolbar"},{"attributes":{},"id":"3195","type":"Selection"},{"attributes":{"data":{"x":[0,0.7],"y":[88.5,88.5]},"selected":{"id":"3596"},"selection_policy":{"id":"3597"}},"id":"3555","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3555"},"glyph":{"id":"3556"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3557"},"selection_glyph":null,"view":{"id":"3559"}},"id":"3558","type":"GlyphRenderer"},{"attributes":{},"id":"3161","type":"WheelZoomTool"},{"attributes":{},"id":"3196","type":"UnionRenderers"},{"attributes":{},"id":"3165","type":"HelpTool"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"3220"},"selection_policy":{"id":"3221"}},"id":"3200","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3182"},"glyph":{"id":"3183"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3184"},"selection_glyph":null,"view":{"id":"3186"}},"id":"3185","type":"GlyphRenderer"},{"attributes":{},"id":"3249","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3557","type":"Line"},{"attributes":{"source":{"id":"3555"}},"id":"3559","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3206","type":"Line"},{"attributes":{},"id":"3250","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3205"},"glyph":{"id":"3206"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3207"},"selection_glyph":null,"view":{"id":"3209"}},"id":"3208","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"3249"},"selection_policy":{"id":"3250"}},"id":"3225","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3202","type":"Scatter"},{"attributes":{"data":{"x":[0,0.7],"y":[88.5,88.5]},"selected":{"id":"3222"},"selection_policy":{"id":"3223"}},"id":"3205","type":"ColumnDataSource"},{"attributes":{},"id":"3153","type":"BasicTicker"},{"attributes":{},"id":"3596","type":"Selection"},{"attributes":{"source":{"id":"3200"}},"id":"3204","type":"CDSView"},{"attributes":{"data_source":{"id":"3200"},"glyph":{"id":"3201"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3202"},"selection_glyph":null,"view":{"id":"3204"}},"id":"3203","type":"GlyphRenderer"},{"attributes":{},"id":"3251","type":"Selection"},{"attributes":{"data_source":{"id":"3253"},"glyph":{"id":"3254"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3255"},"selection_glyph":null,"view":{"id":"3257"}},"id":"3256","type":"GlyphRenderer"},{"attributes":{},"id":"3597","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3436"},"glyph":{"id":"3437"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3438"},"selection_glyph":null,"view":{"id":"3440"}},"id":"3439","type":"GlyphRenderer"},{"attributes":{},"id":"3252","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3226","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3179","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3207","type":"Line"},{"attributes":{"source":{"id":"3205"}},"id":"3209","type":"CDSView"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"3224","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3255","type":"Line"},{"attributes":{"axis":{"id":"3152"},"ticker":null},"id":"3155","type":"Grid"},{"attributes":{"data_source":{"id":"3306"},"glyph":{"id":"3307"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3308"},"selection_glyph":null,"view":{"id":"3310"}},"id":"3309","type":"GlyphRenderer"},{"attributes":{},"id":"3365","type":"Selection"},{"attributes":{},"id":"3366","type":"UnionRenderers"},{"attributes":{},"id":"3276","type":"Selection"},{"attributes":{},"id":"3277","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3401"},"glyph":{"id":"3402"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3403"},"selection_glyph":null,"view":{"id":"3405"}},"id":"3404","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3280","type":"Line"},{"attributes":{"data":{"x":[0,0.7],"y":[88.5,88.5]},"selected":{"id":"3304"},"selection_policy":{"id":"3305"}},"id":"3279","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3402","type":"Line"},{"attributes":{"data_source":{"id":"3279"},"glyph":{"id":"3280"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3281"},"selection_glyph":null,"view":{"id":"3283"}},"id":"3282","type":"GlyphRenderer"},{"attributes":{},"id":"3150","type":"LinearScale"},{"attributes":{"data":{"x":[0.6812548225308642,0.6752387152777778,0.5732301311728395,0.492259837962963,0.38802083333333326,0.3719618055555556,0.353563850308642,0.2564019097222221,0.24131944444444442,0.18184558256172845,0.17980806327160492],"y":[88.73698799207777,88.67903677006836,88.08831525592305,87.91705961229685,87.36378709007766,87.30735739624531,86.768721062838,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"3333"},"selection_policy":{"id":"3334"}},"id":"3306","type":"ColumnDataSource"},{"attributes":{},"id":"3398","type":"Selection"},{"attributes":{"data_source":{"id":"3336"},"glyph":{"id":"3337"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3338"},"selection_glyph":null,"view":{"id":"3340"}},"id":"3339","type":"GlyphRenderer"},{"attributes":{},"id":"3164","type":"ResetTool"},{"attributes":{"source":{"id":"3306"}},"id":"3310","type":"CDSView"},{"attributes":{},"id":"3399","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3367"},"glyph":{"id":"3368"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3369"},"selection_glyph":null,"view":{"id":"3371"}},"id":"3370","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3281","type":"Line"},{"attributes":{"source":{"id":"3279"}},"id":"3283","type":"CDSView"},{"attributes":{"end":0.7},"id":"3174","type":"Range1d"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3307","type":"Line"},{"attributes":{},"id":"3304","type":"Selection"},{"attributes":{"data":{"x":[0,0.7],"y":[88.5,88.5]},"selected":{"id":"3434"},"selection_policy":{"id":"3435"}},"id":"3401","type":"ColumnDataSource"},{"attributes":{},"id":"3160","type":"PanTool"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"3471"},"selection_policy":{"id":"3472"}},"id":"3436","type":"ColumnDataSource"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3437","type":"Line"},{"attributes":{},"id":"3305","type":"UnionRenderers"},{"attributes":{"source":{"id":"3436"}},"id":"3440","type":"CDSView"},{"attributes":{"end":90.75,"start":83.5},"id":"3175","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3403","type":"Line"},{"attributes":{"source":{"id":"3401"}},"id":"3405","type":"CDSView"},{"attributes":{},"id":"3148","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3438","type":"Line"},{"attributes":{"overlay":{"id":"3166"}},"id":"3162","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3337","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3308","type":"Line"},{"attributes":{},"id":"3434","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"3198"},{"id":"3278"},{"id":"3335"},{"id":"3400"},{"id":"3473"},{"id":"3554"}],"location":"bottom_center"},"id":"3197","type":"Legend"},{"attributes":{"label":{"value":"Block"},"renderers":[{"id":"3309"}]},"id":"3335","type":"LegendItem"},{"attributes":{},"id":"3435","type":"UnionRenderers"},{"attributes":{},"id":"3333","type":"Selection"},{"attributes":{},"id":"3334","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3474"},"glyph":{"id":"3475"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3476"},"selection_glyph":null,"view":{"id":"3478"}},"id":"3477","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3513"},"glyph":{"id":"3514"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3515"},"selection_glyph":null,"view":{"id":"3517"}},"id":"3516","type":"GlyphRenderer"},{"attributes":{},"id":"3163","type":"SaveTool"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"3439"}]},"id":"3473","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.7],"y":[88.5,88.5]},"selected":{"id":"3365"},"selection_policy":{"id":"3366"}},"id":"3336","type":"ColumnDataSource"},{"attributes":{},"id":"3471","type":"Selection"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"3398"},"selection_policy":{"id":"3399"}},"id":"3367","type":"ColumnDataSource"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3368","type":"Line"},{"attributes":{"source":{"id":"3367"}},"id":"3371","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3369","type":"Line"},{"attributes":{},"id":"3472","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3338","type":"Line"},{"attributes":{"source":{"id":"3336"}},"id":"3340","type":"CDSView"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"3370"}]},"id":"3400","type":"LegendItem"},{"attributes":{"data":{"x":[0.45493344907407407,0.356571903935185,0.29078052662037035,0.23759403935185186,0.19692201967592593],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,87.15966661496869]},"selected":{"id":"3552"},"selection_policy":{"id":"3553"}},"id":"3513","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.7],"y":[88.5,88.5]},"selected":{"id":"3511"},"selection_policy":{"id":"3512"}},"id":"3474","type":"ColumnDataSource"}],"root_ids":["3142"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"0752668b-63ee-4f81-ae10-c872dac4fdb1","root_ids":["3142"],"roots":{"3142":"4bfd6229-b98f-448d-bbd7-0a33ad509fc8"}}];
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