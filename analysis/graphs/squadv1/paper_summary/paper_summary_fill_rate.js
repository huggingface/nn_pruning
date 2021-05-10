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
    
      
      
    
      var element = document.getElementById("545688ed-4a1a-433d-b0e4-551f301c3bd5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '545688ed-4a1a-433d-b0e4-551f301c3bd5' but no matching script tag was found.")
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
                    
                  var docs_json = '{"dd8ed077-f75a-4f2d-8359-e7f73e7a96e5":{"roots":{"references":[{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"3257"},"selection_policy":{"id":"3256"}},"id":"3241","type":"ColumnDataSource"},{"attributes":{},"id":"3312","type":"UnionRenderers"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"3288","type":"Label"},{"attributes":{},"id":"3313","type":"Selection"},{"attributes":{},"id":"3396","type":"UnionRenderers"},{"attributes":{"source":{"id":"3264"}},"id":"3268","type":"CDSView"},{"attributes":{"source":{"id":"3662"}},"id":"3666","type":"CDSView"},{"attributes":{},"id":"3397","type":"Selection"},{"attributes":{"data_source":{"id":"3269"},"glyph":{"id":"3270"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3271"},"selection_glyph":null,"view":{"id":"3273"}},"id":"3272","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3243","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3247","type":"Line"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"3263","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3291","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3270","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"3284"},"selection_policy":{"id":"3283"}},"id":"3264","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3538"},"glyph":{"id":"3539"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3540"},"selection_glyph":null,"view":{"id":"3542"}},"id":"3541","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3266","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3401","type":"Line"},{"attributes":{"data_source":{"id":"3264"},"glyph":{"id":"3265"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3266"},"selection_glyph":null,"view":{"id":"3268"}},"id":"3267","type":"GlyphRenderer"},{"attributes":{},"id":"3659","type":"UnionRenderers"},{"attributes":{},"id":"3660","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3265","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3286"},"selection_policy":{"id":"3285"}},"id":"3269","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3429"},"selection_policy":{"id":"3428"}},"id":"3400","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"3340"},"selection_policy":{"id":"3339"}},"id":"3317","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3539","type":"Line"},{"attributes":{},"id":"3314","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3242","type":"Scatter"},{"attributes":{},"id":"3315","type":"Selection"},{"attributes":{"data_source":{"id":"3400"},"glyph":{"id":"3401"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3402"},"selection_glyph":null,"view":{"id":"3404"}},"id":"3403","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3500"},"glyph":{"id":"3501"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3502"},"selection_glyph":null,"view":{"id":"3504"}},"id":"3503","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3224"},{"id":"3225"},{"id":"3226"},{"id":"3227"},{"id":"3228"},{"id":"3229"}]},"id":"3231","type":"Toolbar"},{"attributes":{"source":{"id":"3241"}},"id":"3245","type":"CDSView"},{"attributes":{"source":{"id":"3289"}},"id":"3293","type":"CDSView"},{"attributes":{},"id":"3534","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3432","type":"Line"},{"attributes":{},"id":"3535","type":"Selection"},{"attributes":{"source":{"id":"3431"}},"id":"3435","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3271","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3433","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3709","type":"Line"},{"attributes":{"source":{"id":"3269"}},"id":"3273","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3295","type":"Line"},{"attributes":{"data_source":{"id":"3241"},"glyph":{"id":"3242"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3243"},"selection_glyph":null,"view":{"id":"3245"}},"id":"3244","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3402","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3259"},"selection_policy":{"id":"3258"}},"id":"3246","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3400"}},"id":"3404","type":"CDSView"},{"attributes":{"data":{"x":[0.38938319830246915,0.29069613233024694,0.22240909529320985,0.2187620563271605,0.15897472993827155,0.1255726755401234],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"3616"},"selection_policy":{"id":"3615"}},"id":"3577","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3664","type":"Line"},{"attributes":{},"id":"3253","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3230","type":"BoxAnnotation"},{"attributes":{"label":{"value":"Hybrid Filled, large teacher"},"renderers":[{"id":"3665"}]},"id":"3707","type":"LegendItem"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3344","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3575"},"selection_policy":{"id":"3574"}},"id":"3538","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3577"},"glyph":{"id":"3578"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3579"},"selection_glyph":null,"view":{"id":"3581"}},"id":"3580","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"3320"}]},"id":"3342","type":"LegendItem"},{"attributes":{},"id":"3428","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3343"},"glyph":{"id":"3344"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3345"},"selection_glyph":null,"view":{"id":"3347"}},"id":"3346","type":"GlyphRenderer"},{"attributes":{},"id":"3429","type":"Selection"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3578","type":"Line"},{"attributes":{},"id":"3704","type":"UnionRenderers"},{"attributes":{"source":{"id":"3577"}},"id":"3581","type":"CDSView"},{"attributes":{},"id":"3283","type":"UnionRenderers"},{"attributes":{},"id":"3705","type":"Selection"},{"attributes":{"data_source":{"id":"3246"},"glyph":{"id":"3247"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3248"},"selection_glyph":null,"view":{"id":"3250"}},"id":"3249","type":"GlyphRenderer"},{"attributes":{},"id":"3284","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3540","type":"Line"},{"attributes":{},"id":"3339","type":"UnionRenderers"},{"attributes":{"source":{"id":"3538"}},"id":"3542","type":"CDSView"},{"attributes":{},"id":"3340","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3579","type":"Line"},{"attributes":{},"id":"3255","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3466","type":"Line"},{"attributes":{"data":{"x":[0.6812548225308642,0.6752387152777778,0.5732301311728395,0.492259837962963,0.38802083333333326,0.3719618055555556,0.353563850308642,0.2564019097222221,0.24131944444444442,0.18184558256172845,0.17980806327160492],"y":[88.73698799207777,88.67903677006836,88.08831525592305,87.91705961229685,87.36378709007766,87.30735739624531,86.768721062838,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"3397"},"selection_policy":{"id":"3396"}},"id":"3370","type":"ColumnDataSource"},{"attributes":{},"id":"3285","type":"UnionRenderers"},{"attributes":{},"id":"3574","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3465"},"glyph":{"id":"3466"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3467"},"selection_glyph":null,"view":{"id":"3469"}},"id":"3468","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3753"},"selection_policy":{"id":"3752"}},"id":"3708","type":"ColumnDataSource"},{"attributes":{},"id":"3286","type":"Selection"},{"attributes":{"data_source":{"id":"3708"},"glyph":{"id":"3709"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3710"},"selection_glyph":null,"view":{"id":"3712"}},"id":"3711","type":"GlyphRenderer"},{"attributes":{},"id":"3575","type":"Selection"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"3434"}]},"id":"3464","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3368"},"selection_policy":{"id":"3367"}},"id":"3343","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3370"},"glyph":{"id":"3371"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3372"},"selection_glyph":null,"view":{"id":"3374"}},"id":"3373","type":"GlyphRenderer"},{"attributes":{},"id":"3229","type":"HelpTool"},{"attributes":{},"id":"3461","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3710","type":"Line"},{"attributes":{},"id":"3462","type":"Selection"},{"attributes":{"source":{"id":"3370"}},"id":"3374","type":"CDSView"},{"attributes":{"source":{"id":"3708"}},"id":"3712","type":"CDSView"},{"attributes":{"overlay":{"id":"3230"}},"id":"3226","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3345","type":"Line"},{"attributes":{},"id":"3256","type":"UnionRenderers"},{"attributes":{"source":{"id":"3343"}},"id":"3347","type":"CDSView"},{"attributes":{},"id":"3257","type":"Selection"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3371","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3620","type":"Line"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"3313"},"selection_policy":{"id":"3312"}},"id":"3289","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.45493344907407407,0.356571903935185,0.29078052662037035,0.23759403935185186,0.19692201967592593],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,87.15966661496869]},"selected":{"id":"3705"},"selection_policy":{"id":"3704"}},"id":"3662","type":"ColumnDataSource"},{"attributes":{},"id":"3752","type":"UnionRenderers"},{"attributes":{},"id":"3753","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3290","type":"Scatter"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"3580"}]},"id":"3618","type":"LegendItem"},{"attributes":{"data_source":{"id":"3294"},"glyph":{"id":"3295"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3296"},"selection_glyph":null,"view":{"id":"3298"}},"id":"3297","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3498"},"selection_policy":{"id":"3497"}},"id":"3465","type":"ColumnDataSource"},{"attributes":{},"id":"3228","type":"ResetTool"},{"attributes":{"data_source":{"id":"3289"},"glyph":{"id":"3290"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3291"},"selection_glyph":null,"view":{"id":"3293"}},"id":"3292","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"3535"},"selection_policy":{"id":"3534"}},"id":"3500","type":"ColumnDataSource"},{"attributes":{},"id":"3367","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3315"},"selection_policy":{"id":"3314"}},"id":"3294","type":"ColumnDataSource"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3501","type":"Line"},{"attributes":{},"id":"3368","type":"Selection"},{"attributes":{"data_source":{"id":"3317"},"glyph":{"id":"3318"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3319"},"selection_glyph":null,"view":{"id":"3321"}},"id":"3320","type":"GlyphRenderer"},{"attributes":{},"id":"3227","type":"SaveTool"},{"attributes":{"label":{"value":"Hybrid Filled"},"renderers":[{"id":"3503"}]},"id":"3537","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3502","type":"Line"},{"attributes":{},"id":"3258","type":"UnionRenderers"},{"attributes":{},"id":"3259","type":"Selection"},{"attributes":{},"id":"3615","type":"UnionRenderers"},{"attributes":{},"id":"3616","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3319","type":"Line"},{"attributes":{"source":{"id":"3317"}},"id":"3321","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3467","type":"Line"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3318","type":"Line"},{"attributes":{"source":{"id":"3465"}},"id":"3469","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3296","type":"Line"},{"attributes":{"source":{"id":"3500"}},"id":"3504","type":"CDSView"},{"attributes":{"source":{"id":"3294"}},"id":"3298","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3372","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3660"},"selection_policy":{"id":"3659"}},"id":"3619","type":"ColumnDataSource"},{"attributes":{},"id":"3497","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3619"},"glyph":{"id":"3620"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3621"},"selection_glyph":null,"view":{"id":"3623"}},"id":"3622","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"3462"},"selection_policy":{"id":"3461"}},"id":"3431","type":"ColumnDataSource"},{"attributes":{},"id":"3498","type":"Selection"},{"attributes":{"data_source":{"id":"3662"},"glyph":{"id":"3663"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3664"},"selection_glyph":null,"view":{"id":"3666"}},"id":"3665","type":"GlyphRenderer"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"3206","type":"Title"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3663","type":"Line"},{"attributes":{"label":{"value":"All Block"},"renderers":[{"id":"3373"}]},"id":"3399","type":"LegendItem"},{"attributes":{"source":{"id":"3619"}},"id":"3623","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3621","type":"Line"},{"attributes":{},"id":"3217","type":"BasicTicker"},{"attributes":{"source":{"id":"3246"}},"id":"3250","type":"CDSView"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"3249"},{"id":"3272"},{"id":"3297"},{"id":"3346"},{"id":"3403"},{"id":"3468"},{"id":"3541"},{"id":"3622"},{"id":"3711"}]},"id":"3262","type":"LegendItem"},{"attributes":{"click_policy":"hide","items":[{"id":"3262"},{"id":"3342"},{"id":"3399"},{"id":"3464"},{"id":"3537"},{"id":"3618"},{"id":"3707"}],"location":"bottom_right"},"id":"3261","type":"Legend"},{"attributes":{},"id":"3214","type":"LinearScale"},{"attributes":{},"id":"3212","type":"LinearScale"},{"attributes":{},"id":"3225","type":"WheelZoomTool"},{"attributes":{},"id":"3224","type":"PanTool"},{"attributes":{"data_source":{"id":"3431"},"glyph":{"id":"3432"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3433"},"selection_glyph":null,"view":{"id":"3435"}},"id":"3434","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3248","type":"Line"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"3240","type":"Label"},{"attributes":{"end":90.75,"start":84.5},"id":"3239","type":"Range1d"},{"attributes":{"axis_label":"Density","formatter":{"id":"3253"},"ticker":{"id":"3217"}},"id":"3216","type":"LinearAxis"},{"attributes":{"axis":{"id":"3220"},"dimension":1,"ticker":null},"id":"3223","type":"Grid"},{"attributes":{"axis_label":"F1","formatter":{"id":"3255"},"ticker":{"id":"3221"}},"id":"3220","type":"LinearAxis"},{"attributes":{"axis":{"id":"3216"},"ticker":null},"id":"3219","type":"Grid"},{"attributes":{"below":[{"id":"3216"}],"center":[{"id":"3219"},{"id":"3223"},{"id":"3240"},{"id":"3261"},{"id":"3263"},{"id":"3288"}],"left":[{"id":"3220"}],"plot_width":800,"renderers":[{"id":"3244"},{"id":"3249"},{"id":"3267"},{"id":"3272"},{"id":"3292"},{"id":"3297"},{"id":"3320"},{"id":"3346"},{"id":"3373"},{"id":"3403"},{"id":"3434"},{"id":"3468"},{"id":"3503"},{"id":"3541"},{"id":"3580"},{"id":"3622"},{"id":"3665"},{"id":"3711"}],"title":{"id":"3206"},"toolbar":{"id":"3231"},"x_range":{"id":"3238"},"x_scale":{"id":"3212"},"y_range":{"id":"3239"},"y_scale":{"id":"3214"}},"id":"3205","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3221","type":"BasicTicker"},{"attributes":{"end":0.8},"id":"3238","type":"Range1d"}],"root_ids":["3205"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"dd8ed077-f75a-4f2d-8359-e7f73e7a96e5","root_ids":["3205"],"roots":{"3205":"545688ed-4a1a-433d-b0e4-551f301c3bd5"}}];
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