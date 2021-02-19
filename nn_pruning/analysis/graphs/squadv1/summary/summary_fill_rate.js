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
    
      
      
    
      var element = document.getElementById("6c96c4e4-f368-4ce3-9770-7f35d06301c6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6c96c4e4-f368-4ce3-9770-7f35d06301c6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"58de49b6-bf08-42ea-9232-5ede18f8eaf2":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3115","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3671","type":"Line"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"3016","type":"Title"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[88.5,88.5]},"selected":{"id":"3723"},"selection_policy":{"id":"3722"}},"id":"3670","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3726","type":"Line"},{"attributes":{},"id":"3034","type":"PanTool"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3783","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3196","type":"Line"},{"attributes":{},"id":"3256","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3163","type":"Line"},{"attributes":{},"id":"3257","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3672","type":"Line"},{"attributes":{},"id":"3105","type":"UnionRenderers"},{"attributes":{"source":{"id":"3670"}},"id":"3674","type":"CDSView"},{"attributes":{},"id":"3106","type":"Selection"},{"attributes":{"data_source":{"id":"3725"},"glyph":{"id":"3726"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3727"},"selection_glyph":null,"view":{"id":"3729"}},"id":"3728","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3164","type":"Line"},{"attributes":{"source":{"id":"3162"}},"id":"3166","type":"CDSView"},{"attributes":{"text":"Distilbert","x":0.5,"y":86.9},"id":"3049","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3296","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3040","type":"BoxAnnotation"},{"attributes":{"source":{"id":"3295"}},"id":"3299","type":"CDSView"},{"attributes":{},"id":"3722","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3301","type":"Line"},{"attributes":{},"id":"3723","type":"Selection"},{"attributes":{"source":{"id":"3469"}},"id":"3473","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3111","type":"Scatter"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3260","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3191","type":"Scatter"},{"attributes":{"source":{"id":"3109"}},"id":"3113","type":"CDSView"},{"attributes":{},"id":"3186","type":"UnionRenderers"},{"attributes":{},"id":"3187","type":"Selection"},{"attributes":{"text":"Mobile_bert_no_opt","x":0.25333333333333335,"y":90.3},"id":"3294","type":"Label"},{"attributes":{"data_source":{"id":"3089"},"glyph":{"id":"3090"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3091"},"selection_glyph":null,"view":{"id":"3093"}},"id":"3092","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3114"},"glyph":{"id":"3115"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3116"},"selection_glyph":null,"view":{"id":"3118"}},"id":"3117","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3261","type":"Line"},{"attributes":{"data_source":{"id":"3109"},"glyph":{"id":"3110"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3111"},"selection_glyph":null,"view":{"id":"3113"}},"id":"3112","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3259"}},"id":"3263","type":"CDSView"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[88.5,88.5]},"selected":{"id":"3135"},"selection_policy":{"id":"3134"}},"id":"3114","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.3]},"selected":{"id":"3335"},"selection_policy":{"id":"3334"}},"id":"3295","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.0]},"selected":{"id":"3222"},"selection_policy":{"id":"3221"}},"id":"3190","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3138","type":"Line"},{"attributes":{"source":{"id":"3190"}},"id":"3194","type":"CDSView"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[87.5,87.5]},"selected":{"id":"3780"},"selection_policy":{"id":"3779"}},"id":"3725","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3195"},"glyph":{"id":"3196"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3197"},"selection_glyph":null,"view":{"id":"3199"}},"id":"3198","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[86.5,86.5]},"selected":{"id":"3106"},"selection_policy":{"id":"3105"}},"id":"3089","type":"ColumnDataSource"},{"attributes":{},"id":"3291","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3137"},"glyph":{"id":"3138"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3139"},"selection_glyph":null,"view":{"id":"3141"}},"id":"3140","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3192","type":"Scatter"},{"attributes":{},"id":"3292","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3116","type":"Line"},{"attributes":{"source":{"id":"3114"}},"id":"3118","type":"CDSView"},{"attributes":{"data_source":{"id":"3190"},"glyph":{"id":"3191"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3192"},"selection_glyph":null,"view":{"id":"3194"}},"id":"3193","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3727","type":"Line"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[88.5,88.5]},"selected":{"id":"3224"},"selection_policy":{"id":"3223"}},"id":"3195","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3725"}},"id":"3729","type":"CDSView"},{"attributes":{"data_source":{"id":"3423"},"glyph":{"id":"3424"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3425"},"selection_glyph":null,"view":{"id":"3427"}},"id":"3426","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3782"},"glyph":{"id":"3783"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3784"},"selection_glyph":null,"view":{"id":"3786"}},"id":"3785","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3226"},"glyph":{"id":"3227"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3228"},"selection_glyph":null,"view":{"id":"3230"}},"id":"3229","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3297","type":"Scatter"},{"attributes":{},"id":"3779","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3197","type":"Line"},{"attributes":{},"id":"3780","type":"Selection"},{"attributes":{"source":{"id":"3195"}},"id":"3199","type":"CDSView"},{"attributes":{},"id":"3132","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3300"},"glyph":{"id":"3301"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3302"},"selection_glyph":null,"view":{"id":"3304"}},"id":"3303","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[86.5,86.5]},"selected":{"id":"3292"},"selection_policy":{"id":"3291"}},"id":"3259","type":"ColumnDataSource"},{"attributes":{},"id":"3133","type":"Selection"},{"attributes":{"data_source":{"id":"3295"},"glyph":{"id":"3296"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3297"},"selection_glyph":null,"view":{"id":"3299"}},"id":"3298","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[88.5,88.5]},"selected":{"id":"3337"},"selection_policy":{"id":"3336"}},"id":"3300","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3055"},"glyph":{"id":"3056"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3057"},"selection_glyph":null,"view":{"id":"3059"}},"id":"3058","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.25071068751959147,0.15786624249116865,0.11725962603533713,0.11616964693422671,0.06489395800931963,0.04466981063654396,0.0340861803219642],"y":[88.66263407974378,88.07603620459668,87.64967103979136,87.59923644792065,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"3466"},"selection_policy":{"id":"3465"}},"id":"3423","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[87.5,87.5]},"selected":{"id":"3378"},"selection_policy":{"id":"3377"}},"id":"3339","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3841"}},"id":"3845","type":"CDSView"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[86.5,86.5]},"selected":{"id":"3839"},"selection_policy":{"id":"3838"}},"id":"3782","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3302","type":"Line"},{"attributes":{},"id":"3221","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3616"},"glyph":{"id":"3617"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3618"},"selection_glyph":null,"view":{"id":"3620"}},"id":"3619","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3072"}},"id":"3076","type":"CDSView"},{"attributes":{"source":{"id":"3300"}},"id":"3304","type":"CDSView"},{"attributes":{"data_source":{"id":"3339"},"glyph":{"id":"3340"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3341"},"selection_glyph":null,"view":{"id":"3343"}},"id":"3342","type":"GlyphRenderer"},{"attributes":{},"id":"3134","type":"UnionRenderers"},{"attributes":{},"id":"3135","type":"Selection"},{"attributes":{},"id":"3222","type":"Selection"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"3066"},"selection_policy":{"id":"3065"}},"id":"3050","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3784","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3052","type":"Scatter"},{"attributes":{"source":{"id":"3782"}},"id":"3786","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3051","type":"Scatter"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3842","type":"Line"},{"attributes":{"source":{"id":"3050"}},"id":"3054","type":"CDSView"},{"attributes":{"text":"Tinybert","x":0.5,"y":87.5},"id":"3108","type":"Label"},{"attributes":{"below":[{"id":"3026"}],"center":[{"id":"3029"},{"id":"3033"},{"id":"3049"},{"id":"3070"},{"id":"3108"},{"id":"3189"},{"id":"3294"}],"left":[{"id":"3030"}],"plot_width":800,"renderers":[{"id":"3053"},{"id":"3058"},{"id":"3075"},{"id":"3092"},{"id":"3112"},{"id":"3117"},{"id":"3140"},{"id":"3165"},{"id":"3193"},{"id":"3198"},{"id":"3229"},{"id":"3262"},{"id":"3298"},{"id":"3303"},{"id":"3342"},{"id":"3383"},{"id":"3426"},{"id":"3472"},{"id":"3519"},{"id":"3568"},{"id":"3619"},{"id":"3673"},{"id":"3728"},{"id":"3785"},{"id":"3844"},{"id":"3906"},{"id":"3969"},{"id":"4034"}],"title":{"id":"3016"},"toolbar":{"id":"3041"},"x_range":{"id":"3048"},"x_scale":{"id":"3022"},"y_range":{"id":"3020"},"y_scale":{"id":"3024"}},"id":"3015","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"3050"},"glyph":{"id":"3051"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3052"},"selection_glyph":null,"view":{"id":"3054"}},"id":"3053","type":"GlyphRenderer"},{"attributes":{},"id":"3223","type":"UnionRenderers"},{"attributes":{},"id":"3224","type":"Selection"},{"attributes":{},"id":"3334","type":"UnionRenderers"},{"attributes":{},"id":"3335","type":"Selection"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[88.5,88.5]},"selected":{"id":"3068"},"selection_policy":{"id":"3067"}},"id":"3055","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3073","type":"Line"},{"attributes":{},"id":"3838","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3056","type":"Line"},{"attributes":{},"id":"3839","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"3071"},{"id":"3468"},{"id":"3669"},{"id":"3902"}],"location":"top_left"},"id":"3070","type":"Legend"},{"attributes":{"label":{"value":"Reference f1=88.5 BERT-base"},"renderers":[{"id":"3058"},{"id":"3075"},{"id":"3092"},{"id":"3117"},{"id":"3140"},{"id":"3165"},{"id":"3198"},{"id":"3229"},{"id":"3262"},{"id":"3303"},{"id":"3342"},{"id":"3383"},{"id":"3472"},{"id":"3519"},{"id":"3568"},{"id":"3673"},{"id":"3728"},{"id":"3785"},{"id":"3906"},{"id":"3969"},{"id":"4034"}]},"id":"3071","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[87.5,87.5]},"selected":{"id":"3160"},"selection_policy":{"id":"3159"}},"id":"3137","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[86.5,86.5]},"selected":{"id":"3187"},"selection_policy":{"id":"3186"}},"id":"3162","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3057","type":"Line"},{"attributes":{"data_source":{"id":"3162"},"glyph":{"id":"3163"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3164"},"selection_glyph":null,"view":{"id":"3166"}},"id":"3165","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3055"}},"id":"3059","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3139","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3843","type":"Line"},{"attributes":{"source":{"id":"3137"}},"id":"3141","type":"CDSView"},{"attributes":{},"id":"3336","type":"UnionRenderers"},{"attributes":{},"id":"3337","type":"Selection"},{"attributes":{"end":0.9},"id":"3048","type":"Range1d"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[87.5,87.5]},"selected":{"id":"3257"},"selection_policy":{"id":"3256"}},"id":"3226","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3227","type":"Line"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-large"},"renderers":[{"id":"3844"}]},"id":"3902","type":"LegendItem"},{"attributes":{},"id":"3159","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3259"},"glyph":{"id":"3260"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3261"},"selection_glyph":null,"view":{"id":"3263"}},"id":"3262","type":"GlyphRenderer"},{"attributes":{},"id":"3160","type":"Selection"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[87.5,87.5]},"selected":{"id":"3087"},"selection_policy":{"id":"3086"}},"id":"3072","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3074","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3228","type":"Line"},{"attributes":{},"id":"3899","type":"UnionRenderers"},{"attributes":{"source":{"id":"3226"}},"id":"3230","type":"CDSView"},{"attributes":{},"id":"3900","type":"Selection"},{"attributes":{},"id":"3062","type":"BasicTickFormatter"},{"attributes":{},"id":"3513","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3381","type":"Line"},{"attributes":{},"id":"3514","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3340","type":"Line"},{"attributes":{"axis":{"id":"3026"},"ticker":null},"id":"3029","type":"Grid"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3904","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3341","type":"Line"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[88.5,88.5]},"selected":{"id":"3964"},"selection_policy":{"id":"3963"}},"id":"3903","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3339"}},"id":"3343","type":"CDSView"},{"attributes":{"data_source":{"id":"3380"},"glyph":{"id":"3381"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3382"},"selection_glyph":null,"view":{"id":"3384"}},"id":"3383","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3903"},"glyph":{"id":"3904"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3905"},"selection_glyph":null,"view":{"id":"3907"}},"id":"3906","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3566","type":"Line"},{"attributes":{"source":{"id":"3616"}},"id":"3620","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3967","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3517","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4032","type":"Line"},{"attributes":{},"id":"3377","type":"UnionRenderers"},{"attributes":{},"id":"3378","type":"Selection"},{"attributes":{},"id":"3064","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3905","type":"Line"},{"attributes":{"source":{"id":"3903"}},"id":"3907","type":"CDSView"},{"attributes":{"data_source":{"id":"3966"},"glyph":{"id":"3967"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3968"},"selection_glyph":null,"view":{"id":"3970"}},"id":"3969","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3518","type":"Line"},{"attributes":{"source":{"id":"3516"}},"id":"3520","type":"CDSView"},{"attributes":{"data_source":{"id":"3565"},"glyph":{"id":"3566"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3567"},"selection_glyph":null,"view":{"id":"3569"}},"id":"3568","type":"GlyphRenderer"},{"attributes":{},"id":"3065","type":"UnionRenderers"},{"attributes":{"axis_label":"F1","formatter":{"id":"3064"},"ticker":{"id":"3031"}},"id":"3030","type":"LinearAxis"},{"attributes":{"source":{"id":"3423"}},"id":"3427","type":"CDSView"},{"attributes":{},"id":"3066","type":"Selection"},{"attributes":{},"id":"3022","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[86.5,86.5]},"selected":{"id":"3421"},"selection_policy":{"id":"3420"}},"id":"3380","type":"ColumnDataSource"},{"attributes":{},"id":"3963","type":"UnionRenderers"},{"attributes":{},"id":"3562","type":"UnionRenderers"},{"attributes":{},"id":"3964","type":"Selection"},{"attributes":{},"id":"3563","type":"Selection"},{"attributes":{},"id":"3024","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3382","type":"Line"},{"attributes":{"source":{"id":"3380"}},"id":"3384","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3424","type":"Line"},{"attributes":{},"id":"3031","type":"BasicTicker"},{"attributes":{"axis":{"id":"3030"},"dimension":1,"ticker":null},"id":"3033","type":"Grid"},{"attributes":{},"id":"3067","type":"UnionRenderers"},{"attributes":{},"id":"3068","type":"Selection"},{"attributes":{},"id":"3020","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3618","type":"Line"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[86.5,86.5]},"selected":{"id":"3614"},"selection_policy":{"id":"3613"}},"id":"3565","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[87.5,87.5]},"selected":{"id":"4029"},"selection_policy":{"id":"4028"}},"id":"3966","type":"ColumnDataSource"},{"attributes":{},"id":"3420","type":"UnionRenderers"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"3062"},"ticker":{"id":"3027"}},"id":"3026","type":"LinearAxis"},{"attributes":{},"id":"3421","type":"Selection"},{"attributes":{},"id":"3027","type":"BasicTicker"},{"attributes":{},"id":"3035","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3567","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3968","type":"Line"},{"attributes":{"source":{"id":"3565"}},"id":"3569","type":"CDSView"},{"attributes":{"source":{"id":"3966"}},"id":"3970","type":"CDSView"},{"attributes":{"data_source":{"id":"4031"},"glyph":{"id":"4032"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4033"},"selection_glyph":null,"view":{"id":"4035"}},"id":"4034","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3470","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3425","type":"Line"},{"attributes":{},"id":"3613","type":"UnionRenderers"},{"attributes":{},"id":"4028","type":"UnionRenderers"},{"attributes":{},"id":"3614","type":"Selection"},{"attributes":{},"id":"4029","type":"Selection"},{"attributes":{"data_source":{"id":"3469"},"glyph":{"id":"3470"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3471"},"selection_glyph":null,"view":{"id":"3473"}},"id":"3472","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"3040"}},"id":"3036","type":"BoxZoomTool"},{"attributes":{"label":{"value":"Improved soft movement, BERT-base"},"renderers":[{"id":"3426"}]},"id":"3468","type":"LegendItem"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"3133"},"selection_policy":{"id":"3132"}},"id":"3109","type":"ColumnDataSource"},{"attributes":{},"id":"3465","type":"UnionRenderers"},{"attributes":{},"id":"3466","type":"Selection"},{"attributes":{},"id":"3037","type":"SaveTool"},{"attributes":{"data_source":{"id":"3841"},"glyph":{"id":"3842"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3843"},"selection_glyph":null,"view":{"id":"3845"}},"id":"3844","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[86.5,86.5]},"selected":{"id":"4096"},"selection_policy":{"id":"4095"}},"id":"4031","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3072"},"glyph":{"id":"3073"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3074"},"selection_glyph":null,"view":{"id":"3076"}},"id":"3075","type":"GlyphRenderer"},{"attributes":{},"id":"3086","type":"UnionRenderers"},{"attributes":{},"id":"3087","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"4033","type":"Line"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-base"},"renderers":[{"id":"3619"}]},"id":"3669","type":"LegendItem"},{"attributes":{},"id":"3038","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3034"},{"id":"3035"},{"id":"3036"},{"id":"3037"},{"id":"3038"},{"id":"3039"}]},"id":"3041","type":"Toolbar"},{"attributes":{"source":{"id":"4031"}},"id":"4035","type":"CDSView"},{"attributes":{},"id":"3039","type":"HelpTool"},{"attributes":{},"id":"3666","type":"UnionRenderers"},{"attributes":{},"id":"3667","type":"Selection"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[88.5,88.5]},"selected":{"id":"3514"},"selection_policy":{"id":"3513"}},"id":"3469","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.26195384837962965,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.70940223967354,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"3667"},"selection_policy":{"id":"3666"}},"id":"3616","type":"ColumnDataSource"},{"attributes":{},"id":"4095","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3617","type":"Line"},{"attributes":{},"id":"4096","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3091","type":"Line"},{"attributes":{"data":{"x":[0,0.6509150752314815],"y":[87.5,87.5]},"selected":{"id":"3563"},"selection_policy":{"id":"3562"}},"id":"3516","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3516"},"glyph":{"id":"3517"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3518"},"selection_glyph":null,"view":{"id":"3520"}},"id":"3519","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3090","type":"Line"},{"attributes":{"data":{"x":[0.6509150752314815,0.4766890914351851,0.3799370659722226,0.3216869212962964,0.30790653935185175,0.2633101851851851],"y":[91.0266636723574,90.16320537561052,89.39825688878855,88.43872986679673,88.34901265417608,87.48044078095904]},"selected":{"id":"3900"},"selection_policy":{"id":"3899"}},"id":"3841","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3670"},"glyph":{"id":"3671"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3672"},"selection_glyph":null,"view":{"id":"3674"}},"id":"3673","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3471","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3110","type":"Scatter"},{"attributes":{"source":{"id":"3089"}},"id":"3093","type":"CDSView"},{"attributes":{"text":"Mobile_bert","x":0.25333333333333335,"y":90.0},"id":"3189","type":"Label"}],"root_ids":["3015"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"58de49b6-bf08-42ea-9232-5ede18f8eaf2","root_ids":["3015"],"roots":{"3015":"6c96c4e4-f368-4ce3-9770-7f35d06301c6"}}];
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