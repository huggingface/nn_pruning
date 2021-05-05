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
    
      
      
    
      var element = document.getElementById("0f180309-3ea7-4e95-a1f3-011925b3576f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0f180309-3ea7-4e95-a1f3-011925b3576f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b4ef694f-4a3c-4ce0-bc08-69cbcdc66352":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3339","type":"Line"},{"attributes":{"source":{"id":"3184"}},"id":"3188","type":"CDSView"},{"attributes":{"source":{"id":"3369"}},"id":"3373","type":"CDSView"},{"attributes":{"click_policy":"hide","items":[{"id":"3200"},{"id":"3280"},{"id":"3337"},{"id":"3402"},{"id":"3475"},{"id":"3556"}],"location":"bottom_right"},"id":"3199","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3371","type":"Line"},{"attributes":{"data_source":{"id":"3202"},"glyph":{"id":"3203"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3204"},"selection_glyph":null,"view":{"id":"3206"}},"id":"3205","type":"GlyphRenderer"},{"attributes":{},"id":"3367","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3186","type":"Line"},{"attributes":{},"id":"3159","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3207"},"glyph":{"id":"3208"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3209"},"selection_glyph":null,"view":{"id":"3211"}},"id":"3210","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3340","type":"Line"},{"attributes":{"source":{"id":"3338"}},"id":"3342","type":"CDSView"},{"attributes":{"data_source":{"id":"3184"},"glyph":{"id":"3185"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3186"},"selection_glyph":null,"view":{"id":"3188"}},"id":"3187","type":"GlyphRenderer"},{"attributes":{},"id":"3162","type":"PanTool"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3198"},"selection_policy":{"id":"3197"}},"id":"3184","type":"ColumnDataSource"},{"attributes":{},"id":"3279","type":"Selection"},{"attributes":{},"id":"3368","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3185","type":"Line"},{"attributes":{},"id":"3278","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3282","type":"Line"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"3258"}]},"id":"3280","type":"LegendItem"},{"attributes":{},"id":"3152","type":"LinearScale"},{"attributes":{"data_source":{"id":"3281"},"glyph":{"id":"3282"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3283"},"selection_glyph":null,"view":{"id":"3285"}},"id":"3284","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"3154"},"ticker":null},"id":"3157","type":"Grid"},{"attributes":{},"id":"3166","type":"ResetTool"},{"attributes":{"end":90.75,"start":84.5},"id":"3177","type":"Range1d"},{"attributes":{"end":0.8},"id":"3176","type":"Range1d"},{"attributes":{},"id":"3190","type":"BasicTickFormatter"},{"attributes":{},"id":"3401","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3404","type":"Line"},{"attributes":{"data_source":{"id":"3403"},"glyph":{"id":"3404"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3405"},"selection_glyph":null,"view":{"id":"3407"}},"id":"3406","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.6812548225308642,0.6752387152777778,0.5732301311728395,0.492259837962963,0.38802083333333326,0.3719618055555556,0.353563850308642,0.2564019097222221,0.24131944444444442,0.18184558256172845,0.17980806327160492],"y":[88.73698799207777,88.67903677006836,88.08831525592305,87.91705961229685,87.36378709007766,87.30735739624531,86.768721062838,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"3336"},"selection_policy":{"id":"3335"}},"id":"3308","type":"ColumnDataSource"},{"attributes":{},"id":"3400","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid"},"renderers":[{"id":"3372"}]},"id":"3402","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3307"},"selection_policy":{"id":"3306"}},"id":"3281","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3308"},"glyph":{"id":"3309"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3310"},"selection_glyph":null,"view":{"id":"3312"}},"id":"3311","type":"GlyphRenderer"},{"attributes":{},"id":"3336","type":"Selection"},{"attributes":{"source":{"id":"3308"}},"id":"3312","type":"CDSView"},{"attributes":{},"id":"3306","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3283","type":"Line"},{"attributes":{"data_source":{"id":"3369"},"glyph":{"id":"3370"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3371"},"selection_glyph":null,"view":{"id":"3373"}},"id":"3372","type":"GlyphRenderer"},{"attributes":{},"id":"3192","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"3281"}},"id":"3285","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3309","type":"Line"},{"attributes":{"axis_label":"F1","formatter":{"id":"3192"},"ticker":{"id":"3159"}},"id":"3158","type":"LinearAxis"},{"attributes":{},"id":"3307","type":"Selection"},{"attributes":{},"id":"3197","type":"UnionRenderers"},{"attributes":{},"id":"3150","type":"LinearScale"},{"attributes":{},"id":"3198","type":"Selection"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3437"},"selection_policy":{"id":"3436"}},"id":"3403","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.38938319830246915,0.29069613233024694,0.22240909529320985,0.2187620563271605,0.15897472993827155,0.1255726755401234],"y":[89.74014850499854,88.96065210705885,87.9662592155432,87.86127253902632,86.63938864881486,85.80872913704097]},"selected":{"id":"3474"},"selection_policy":{"id":"3473"}},"id":"3438","type":"ColumnDataSource"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3439","type":"Line"},{"attributes":{"source":{"id":"3438"}},"id":"3442","type":"CDSView"},{"attributes":{},"id":"3195","type":"UnionRenderers"},{"attributes":{},"id":"3436","type":"UnionRenderers"},{"attributes":{"below":[{"id":"3154"}],"center":[{"id":"3157"},{"id":"3161"},{"id":"3178"},{"id":"3199"},{"id":"3201"},{"id":"3226"}],"left":[{"id":"3158"}],"plot_width":800,"renderers":[{"id":"3182"},{"id":"3187"},{"id":"3205"},{"id":"3210"},{"id":"3230"},{"id":"3235"},{"id":"3258"},{"id":"3284"},{"id":"3311"},{"id":"3341"},{"id":"3372"},{"id":"3406"},{"id":"3441"},{"id":"3479"},{"id":"3518"},{"id":"3560"}],"title":{"id":"3144"},"toolbar":{"id":"3169"},"x_range":{"id":"3176"},"x_scale":{"id":"3150"},"y_range":{"id":"3177"},"y_scale":{"id":"3152"}},"id":"3143","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"3158"},"dimension":1,"ticker":null},"id":"3161","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3405","type":"Line"},{"attributes":{"source":{"id":"3403"}},"id":"3407","type":"CDSView"},{"attributes":{},"id":"3155","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3440","type":"Line"},{"attributes":{},"id":"3437","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3310","type":"Line"},{"attributes":{},"id":"3196","type":"Selection"},{"attributes":{"data_source":{"id":"3338"},"glyph":{"id":"3339"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3340"},"selection_glyph":null,"view":{"id":"3342"}},"id":"3341","type":"GlyphRenderer"},{"attributes":{},"id":"3335","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3162"},{"id":"3163"},{"id":"3164"},{"id":"3165"},{"id":"3166"},{"id":"3167"}]},"id":"3169","type":"Toolbar"},{"attributes":{"label":{"value":"All Block"},"renderers":[{"id":"3311"}]},"id":"3337","type":"LegendItem"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"3178","type":"Label"},{"attributes":{"label":{"value":"BERT-base (F1 = 88.5)"},"renderers":[{"id":"3187"},{"id":"3210"},{"id":"3235"},{"id":"3284"},{"id":"3341"},{"id":"3406"},{"id":"3479"},{"id":"3560"}]},"id":"3200","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3228","type":"Scatter"},{"attributes":{},"id":"3474","type":"Selection"},{"attributes":{"axis_label":"Density","formatter":{"id":"3190"},"ticker":{"id":"3155"}},"id":"3154","type":"LinearAxis"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3208","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"3223"},"selection_policy":{"id":"3222"}},"id":"3202","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3515"},"glyph":{"id":"3516"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3517"},"selection_glyph":null,"view":{"id":"3519"}},"id":"3518","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3204","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3225"},"selection_policy":{"id":"3224"}},"id":"3207","type":"ColumnDataSource"},{"attributes":{},"id":"3473","type":"UnionRenderers"},{"attributes":{"source":{"id":"3202"}},"id":"3206","type":"CDSView"},{"attributes":{"label":{"value":"Hybrid, large teacher"},"renderers":[{"id":"3441"}]},"id":"3475","type":"LegendItem"},{"attributes":{"data_source":{"id":"3255"},"glyph":{"id":"3256"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3257"},"selection_glyph":null,"view":{"id":"3259"}},"id":"3258","type":"GlyphRenderer"},{"attributes":{},"id":"3167","type":"HelpTool"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"3401"},"selection_policy":{"id":"3400"}},"id":"3369","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3368"},"selection_policy":{"id":"3367"}},"id":"3338","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3209","type":"Line"},{"attributes":{"source":{"id":"3207"}},"id":"3211","type":"CDSView"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3370","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"3196"},"selection_policy":{"id":"3195"}},"id":"3179","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3227"},"glyph":{"id":"3228"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3229"},"selection_glyph":null,"view":{"id":"3231"}},"id":"3230","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3180","type":"Scatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3233","type":"Line"},{"attributes":{"data_source":{"id":"3438"},"glyph":{"id":"3439"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3440"},"selection_glyph":null,"view":{"id":"3442"}},"id":"3441","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3477","type":"Line"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3514"},"selection_policy":{"id":"3513"}},"id":"3476","type":"ColumnDataSource"},{"attributes":{},"id":"3222","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3476"},"glyph":{"id":"3477"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3478"},"selection_glyph":null,"view":{"id":"3480"}},"id":"3479","type":"GlyphRenderer"},{"attributes":{},"id":"3223","type":"Selection"},{"attributes":{"data":{"x":[0.45493344907407407,0.356571903935185,0.29078052662037035,0.23759403935185186,0.19692201967592593],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,87.15966661496869]},"selected":{"id":"3555"},"selection_policy":{"id":"3554"}},"id":"3515","type":"ColumnDataSource"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3516","type":"Line"},{"attributes":{"source":{"id":"3515"}},"id":"3519","type":"CDSView"},{"attributes":{},"id":"3513","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3478","type":"Line"},{"attributes":{"text":"F1 against Density (BERT-base reference)"},"id":"3144","type":"Title"},{"attributes":{"source":{"id":"3476"}},"id":"3480","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3517","type":"Line"},{"attributes":{},"id":"3224","type":"UnionRenderers"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"3201","type":"Label"},{"attributes":{},"id":"3225","type":"Selection"},{"attributes":{},"id":"3514","type":"Selection"},{"attributes":{"source":{"id":"3179"}},"id":"3183","type":"CDSView"},{"attributes":{},"id":"3163","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3181","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3203","type":"Scatter"},{"attributes":{},"id":"3555","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3558","type":"Line"},{"attributes":{"data_source":{"id":"3179"},"glyph":{"id":"3180"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3181"},"selection_glyph":null,"view":{"id":"3183"}},"id":"3182","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"3252"},"selection_policy":{"id":"3251"}},"id":"3227","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3229","type":"Scatter"},{"attributes":{},"id":"3554","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid Filled, large teacher"},"renderers":[{"id":"3518"}]},"id":"3556","type":"LegendItem"},{"attributes":{"data_source":{"id":"3232"},"glyph":{"id":"3233"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3234"},"selection_glyph":null,"view":{"id":"3236"}},"id":"3235","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3254"},"selection_policy":{"id":"3253"}},"id":"3232","type":"ColumnDataSource"},{"attributes":{"text":"MobileBERT","x":0.25333333333333335,"y":90.0},"id":"3226","type":"Label"},{"attributes":{"source":{"id":"3227"}},"id":"3231","type":"CDSView"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"3279"},"selection_policy":{"id":"3278"}},"id":"3255","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3257","type":"Line"},{"attributes":{"source":{"id":"3255"}},"id":"3259","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3256","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3234","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3168","type":"BoxAnnotation"},{"attributes":{"source":{"id":"3232"}},"id":"3236","type":"CDSView"},{"attributes":{"overlay":{"id":"3168"}},"id":"3164","type":"BoxZoomTool"},{"attributes":{},"id":"3165","type":"SaveTool"},{"attributes":{"data":{"x":[0,0.8],"y":[88.5,88.5]},"selected":{"id":"3599"},"selection_policy":{"id":"3598"}},"id":"3557","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3557"},"glyph":{"id":"3558"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3559"},"selection_glyph":null,"view":{"id":"3561"}},"id":"3560","type":"GlyphRenderer"},{"attributes":{},"id":"3251","type":"UnionRenderers"},{"attributes":{},"id":"3252","type":"Selection"},{"attributes":{},"id":"3598","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3559","type":"Line"},{"attributes":{"source":{"id":"3557"}},"id":"3561","type":"CDSView"},{"attributes":{},"id":"3599","type":"Selection"},{"attributes":{},"id":"3253","type":"UnionRenderers"},{"attributes":{},"id":"3254","type":"Selection"}],"root_ids":["3143"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"b4ef694f-4a3c-4ce0-bc08-69cbcdc66352","root_ids":["3143"],"roots":{"3143":"0f180309-3ea7-4e95-a1f3-011925b3576f"}}];
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