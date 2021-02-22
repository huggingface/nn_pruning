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
    
      
      
    
      var element = document.getElementById("f3451b7f-ab03-46ea-8978-e0f054a36ec1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f3451b7f-ab03-46ea-8978-e0f054a36ec1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3b9f5be1-64d5-489f-95df-d27bfa8f458f":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3414","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3415","type":"Line"},{"attributes":{},"id":"3591","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3436"},"glyph":{"id":"3437"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3438"},"selection_glyph":null,"view":{"id":"3440"}},"id":"3439","type":"GlyphRenderer"},{"attributes":{},"id":"3592","type":"Selection"},{"attributes":{"source":{"id":"3413"}},"id":"3417","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3437","type":"Line"},{"attributes":{"source":{"id":"3489"}},"id":"3493","type":"CDSView"},{"attributes":{"data_source":{"id":"3494"},"glyph":{"id":"3495"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3496"},"selection_glyph":null,"view":{"id":"3498"}},"id":"3497","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3495","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"3524"},"selection_policy":{"id":"3523"}},"id":"3494","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,1.9839754797994356,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.24613086360249,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"3629"},"selection_policy":{"id":"3628"}},"id":"3593","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3525"},"glyph":{"id":"3526"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3527"},"selection_glyph":null,"view":{"id":"3529"}},"id":"3528","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3409","type":"Scatter"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3559","type":"Line"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"3366"},"selection_policy":{"id":"3365"}},"id":"3349","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3349"}},"id":"3353","type":"CDSView"},{"attributes":{},"id":"3432","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3496","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3632","type":"Line"},{"attributes":{"data_source":{"id":"3631"},"glyph":{"id":"3632"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3633"},"selection_glyph":null,"view":{"id":"3635"}},"id":"3634","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3350","type":"Scatter"},{"attributes":{"source":{"id":"3494"}},"id":"3498","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3351","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3595","type":"Line"},{"attributes":{},"id":"3433","type":"Selection"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":90.3},"id":"3488","type":"Label"},{"attributes":{"data_source":{"id":"3354"},"glyph":{"id":"3355"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3356"},"selection_glyph":null,"view":{"id":"3358"}},"id":"3357","type":"GlyphRenderer"},{"attributes":{"text":"Tinybert","x":2.0,"y":87.5},"id":"3407","type":"Label"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-base"},"renderers":[{"id":"3596"}]},"id":"3630","type":"LegendItem"},{"attributes":{"data_source":{"id":"3349"},"glyph":{"id":"3350"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3351"},"selection_glyph":null,"view":{"id":"3353"}},"id":"3352","type":"GlyphRenderer"},{"attributes":{},"id":"3628","type":"UnionRenderers"},{"attributes":{},"id":"3629","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"3368"},"selection_policy":{"id":"3367"}},"id":"3354","type":"ColumnDataSource"},{"attributes":{},"id":"3521","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3355","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"3370"},{"id":"3630"},{"id":"3799"}]},"id":"3369","type":"Legend"},{"attributes":{},"id":"3522","type":"Selection"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"3357"},{"id":"3374"},{"id":"3391"},{"id":"3416"},{"id":"3439"},{"id":"3464"},{"id":"3497"},{"id":"3528"},{"id":"3561"},{"id":"3634"},{"id":"3673"},{"id":"3714"},{"id":"3803"},{"id":"3850"},{"id":"3899"}]},"id":"3370","type":"LegendItem"},{"attributes":{},"id":"3434","type":"UnionRenderers"},{"attributes":{},"id":"3435","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3356","type":"Line"},{"attributes":{"below":[{"id":"3325"}],"center":[{"id":"3328"},{"id":"3332"},{"id":"3348"},{"id":"3369"},{"id":"3407"},{"id":"3488"}],"left":[{"id":"3329"}],"plot_width":800,"renderers":[{"id":"3352"},{"id":"3357"},{"id":"3374"},{"id":"3391"},{"id":"3411"},{"id":"3416"},{"id":"3439"},{"id":"3464"},{"id":"3492"},{"id":"3497"},{"id":"3528"},{"id":"3561"},{"id":"3596"},{"id":"3634"},{"id":"3673"},{"id":"3714"},{"id":"3757"},{"id":"3803"},{"id":"3850"},{"id":"3899"}],"title":{"id":"3315"},"toolbar":{"id":"3340"},"x_range":{"id":"3347"},"x_scale":{"id":"3321"},"y_range":{"id":"3319"},"y_scale":{"id":"3323"}},"id":"3314","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"3354"}},"id":"3358","type":"CDSView"},{"attributes":{"data":{"x":[1.0253716557683228,1.0930418633843273,1.170038217254783,1.2958210124830911,1.3926143255719736,1.5170581452285046],"y":[88.66263407974378,88.08154392563726,87.64967103979136,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"3798"},"selection_policy":{"id":"3797"}},"id":"3754","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"3669"},"selection_policy":{"id":"3668"}},"id":"3631","type":"ColumnDataSource"},{"attributes":{},"id":"3523","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3754"},"glyph":{"id":"3755"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3756"},"selection_glyph":null,"view":{"id":"3758"}},"id":"3757","type":"GlyphRenderer"},{"attributes":{},"id":"3524","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3671","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"3753"},"selection_policy":{"id":"3752"}},"id":"3711","type":"ColumnDataSource"},{"attributes":{},"id":"3360","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"3460"},"selection_policy":{"id":"3459"}},"id":"3436","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3462","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3633","type":"Line"},{"attributes":{"data_source":{"id":"3489"},"glyph":{"id":"3490"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3491"},"selection_glyph":null,"view":{"id":"3493"}},"id":"3492","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3631"}},"id":"3635","type":"CDSView"},{"attributes":{"data_source":{"id":"3461"},"glyph":{"id":"3462"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3463"},"selection_glyph":null,"view":{"id":"3465"}},"id":"3464","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3670"},"glyph":{"id":"3671"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3672"},"selection_glyph":null,"view":{"id":"3674"}},"id":"3673","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3438","type":"Line"},{"attributes":{"source":{"id":"3436"}},"id":"3440","type":"CDSView"},{"attributes":{},"id":"3668","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"3557"},"selection_policy":{"id":"3556"}},"id":"3525","type":"ColumnDataSource"},{"attributes":{},"id":"3459","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3526","type":"Line"},{"attributes":{},"id":"3669","type":"Selection"},{"attributes":{},"id":"3460","type":"Selection"},{"attributes":{},"id":"3362","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3527","type":"Line"},{"attributes":{"source":{"id":"3525"}},"id":"3529","type":"CDSView"},{"attributes":{"data_source":{"id":"3558"},"glyph":{"id":"3559"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3560"},"selection_glyph":null,"view":{"id":"3562"}},"id":"3561","type":"GlyphRenderer"},{"attributes":{},"id":"3326","type":"BasicTicker"},{"attributes":{},"id":"3323","type":"LinearScale"},{"attributes":{"axis":{"id":"3325"},"ticker":null},"id":"3328","type":"Grid"},{"attributes":{},"id":"3556","type":"UnionRenderers"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"3362"},"ticker":{"id":"3326"}},"id":"3325","type":"LinearAxis"},{"attributes":{},"id":"3557","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"3710"},"selection_policy":{"id":"3709"}},"id":"3670","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"3487"},"selection_policy":{"id":"3486"}},"id":"3461","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3491","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3490","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3672","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3463","type":"Line"},{"attributes":{"source":{"id":"3670"}},"id":"3674","type":"CDSView"},{"attributes":{"data_source":{"id":"3711"},"glyph":{"id":"3712"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3713"},"selection_glyph":null,"view":{"id":"3715"}},"id":"3714","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3461"}},"id":"3465","type":"CDSView"},{"attributes":{},"id":"3709","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3849","type":"Line"},{"attributes":{},"id":"3486","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"3592"},"selection_policy":{"id":"3591"}},"id":"3558","type":"ColumnDataSource"},{"attributes":{},"id":"3365","type":"UnionRenderers"},{"attributes":{},"id":"3710","type":"Selection"},{"attributes":{"source":{"id":"3593"}},"id":"3597","type":"CDSView"},{"attributes":{},"id":"3487","type":"Selection"},{"attributes":{"end":3.25,"start":0.75},"id":"3347","type":"Range1d"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3594","type":"Line"},{"attributes":{},"id":"3366","type":"Selection"},{"attributes":{"source":{"id":"3847"}},"id":"3851","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3560","type":"Line"},{"attributes":{"source":{"id":"3558"}},"id":"3562","type":"CDSView"},{"attributes":{"data_source":{"id":"3896"},"glyph":{"id":"3897"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3898"},"selection_glyph":null,"view":{"id":"3900"}},"id":"3899","type":"GlyphRenderer"},{"attributes":{},"id":"3894","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3712","type":"Line"},{"attributes":{},"id":"3895","type":"Selection"},{"attributes":{"source":{"id":"3754"}},"id":"3758","type":"CDSView"},{"attributes":{},"id":"3367","type":"UnionRenderers"},{"attributes":{},"id":"3368","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3713","type":"Line"},{"attributes":{"source":{"id":"3711"}},"id":"3715","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3755","type":"Line"},{"attributes":{},"id":"3752","type":"UnionRenderers"},{"attributes":{},"id":"3319","type":"DataRange1d"},{"attributes":{},"id":"3753","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3897","type":"Line"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"3315","type":"Title"},{"attributes":{"text":"Distilbert","x":1.63,"y":86.9},"id":"3348","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3898","type":"Line"},{"attributes":{"source":{"id":"3896"}},"id":"3900","type":"CDSView"},{"attributes":{"data_source":{"id":"3371"},"glyph":{"id":"3372"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3373"},"selection_glyph":null,"view":{"id":"3375"}},"id":"3374","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3333"},{"id":"3334"},{"id":"3335"},{"id":"3336"},{"id":"3337"},{"id":"3338"}]},"id":"3340","type":"Toolbar"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3372","type":"Line"},{"attributes":{},"id":"3945","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3389","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3801","type":"Line"},{"attributes":{"data_source":{"id":"3593"},"glyph":{"id":"3594"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3595"},"selection_glyph":null,"view":{"id":"3597"}},"id":"3596","type":"GlyphRenderer"},{"attributes":{},"id":"3946","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"3387"},"selection_policy":{"id":"3386"}},"id":"3371","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3756","type":"Line"},{"attributes":{"data_source":{"id":"3800"},"glyph":{"id":"3801"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3802"},"selection_glyph":null,"view":{"id":"3804"}},"id":"3803","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3373","type":"Line"},{"attributes":{"label":{"value":"Improved soft movement, BERT-base"},"renderers":[{"id":"3757"}]},"id":"3799","type":"LegendItem"},{"attributes":{"source":{"id":"3371"}},"id":"3375","type":"CDSView"},{"attributes":{},"id":"3797","type":"UnionRenderers"},{"attributes":{},"id":"3798","type":"Selection"},{"attributes":{},"id":"3386","type":"UnionRenderers"},{"attributes":{},"id":"3387","type":"Selection"},{"attributes":{},"id":"3321","type":"LinearScale"},{"attributes":{},"id":"3333","type":"PanTool"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"3846"},"selection_policy":{"id":"3845"}},"id":"3800","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3848","type":"Line"},{"attributes":{"data_source":{"id":"3388"},"glyph":{"id":"3389"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3390"},"selection_glyph":null,"view":{"id":"3392"}},"id":"3391","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"3946"},"selection_policy":{"id":"3945"}},"id":"3896","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"3406"},"selection_policy":{"id":"3405"}},"id":"3388","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3413"},"glyph":{"id":"3414"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3415"},"selection_glyph":null,"view":{"id":"3417"}},"id":"3416","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3802","type":"Line"},{"attributes":{"source":{"id":"3800"}},"id":"3804","type":"CDSView"},{"attributes":{"data_source":{"id":"3847"},"glyph":{"id":"3848"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3849"},"selection_glyph":null,"view":{"id":"3851"}},"id":"3850","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3390","type":"Line"},{"attributes":{"source":{"id":"3388"}},"id":"3392","type":"CDSView"},{"attributes":{"source":{"id":"3408"}},"id":"3412","type":"CDSView"},{"attributes":{},"id":"3845","type":"UnionRenderers"},{"attributes":{},"id":"3405","type":"UnionRenderers"},{"attributes":{"axis":{"id":"3329"},"dimension":1,"ticker":null},"id":"3332","type":"Grid"},{"attributes":{},"id":"3846","type":"Selection"},{"attributes":{},"id":"3406","type":"Selection"},{"attributes":{},"id":"3336","type":"SaveTool"},{"attributes":{},"id":"3338","type":"HelpTool"},{"attributes":{"axis_label":"F1","formatter":{"id":"3360"},"ticker":{"id":"3330"}},"id":"3329","type":"LinearAxis"},{"attributes":{},"id":"3334","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"3339"}},"id":"3335","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3410","type":"Scatter"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"3895"},"selection_policy":{"id":"3894"}},"id":"3847","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"3433"},"selection_policy":{"id":"3432"}},"id":"3408","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3339","type":"BoxAnnotation"},{"attributes":{"data":{"x":[1.78125],"y":[90.3]},"selected":{"id":"3522"},"selection_policy":{"id":"3521"}},"id":"3489","type":"ColumnDataSource"},{"attributes":{},"id":"3330","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3408"},"glyph":{"id":"3409"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3410"},"selection_glyph":null,"view":{"id":"3412"}},"id":"3411","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"3435"},"selection_policy":{"id":"3434"}},"id":"3413","type":"ColumnDataSource"},{"attributes":{},"id":"3337","type":"ResetTool"}],"root_ids":["3314"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"3b9f5be1-64d5-489f-95df-d27bfa8f458f","root_ids":["3314"],"roots":{"3314":"f3451b7f-ab03-46ea-8978-e0f054a36ec1"}}];
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