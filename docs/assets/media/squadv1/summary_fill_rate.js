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
    
      
      
    
      var element = document.getElementById("246bef39-065f-4107-9c16-fc9169ecb060");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '246bef39-065f-4107-9c16-fc9169ecb060' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2f18527d-b90b-4bb4-9171-8e9d27c7b7c9":{"roots":{"references":[{"attributes":{"data_source":{"id":"3204"},"glyph":{"id":"3205"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3206"},"selection_glyph":null,"view":{"id":"3208"}},"id":"3207","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3518","type":"Line"},{"attributes":{"source":{"id":"3158"}},"id":"3162","type":"CDSView"},{"attributes":{},"id":"2746","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2898"},"glyph":{"id":"2899"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2900"},"selection_glyph":null,"view":{"id":"2902"}},"id":"2901","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3116","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3461","type":"Line"},{"attributes":{},"id":"2747","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2899","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3117","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3462","type":"Line"},{"attributes":{"source":{"id":"3115"}},"id":"3119","type":"CDSView"},{"attributes":{"source":{"id":"3460"}},"id":"3464","type":"CDSView"},{"attributes":{"data_source":{"id":"3517"},"glyph":{"id":"3518"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3519"},"selection_glyph":null,"view":{"id":"3521"}},"id":"3520","type":"GlyphRenderer"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3159","type":"Line"},{"attributes":{},"id":"2894","type":"UnionRenderers"},{"attributes":{},"id":"2895","type":"Selection"},{"attributes":{"data_source":{"id":"2751"},"glyph":{"id":"2752"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2753"},"selection_glyph":null,"view":{"id":"2755"}},"id":"2754","type":"GlyphRenderer"},{"attributes":{},"id":"3155","type":"UnionRenderers"},{"attributes":{},"id":"3514","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.8222085160818713,0.5930300575953924],"y":[91.0266636723574,90.16320537561052]},"selected":{"id":"3032"},"selection_policy":{"id":"3031"}},"id":"2997","type":"ColumnDataSource"},{"attributes":{},"id":"3156","type":"Selection"},{"attributes":{},"id":"3515","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2752","type":"Line"},{"attributes":{"data_source":{"id":"2868"},"glyph":{"id":"2869"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2870"},"selection_glyph":null,"view":{"id":"2872"}},"id":"2871","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2769","type":"Line"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2869","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3205","type":"Line"},{"attributes":{"source":{"id":"2729"}},"id":"2733","type":"CDSView"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2766"},"selection_policy":{"id":"2765"}},"id":"2751","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2927"},"selection_policy":{"id":"2926"}},"id":"2898","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2997"},"glyph":{"id":"2998"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2999"},"selection_glyph":null,"view":{"id":"3001"}},"id":"3000","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"2745"},"selection_policy":{"id":"2744"}},"id":"2729","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3160","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2731","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"3574"},"selection_policy":{"id":"3573"}},"id":"3517","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2929"},"glyph":{"id":"2930"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2931"},"selection_glyph":null,"view":{"id":"2933"}},"id":"2932","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2730","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2753","type":"Line"},{"attributes":{"source":{"id":"2751"}},"id":"2755","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2963","type":"Line"},{"attributes":{"data_source":{"id":"2734"},"glyph":{"id":"2735"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2736"},"selection_glyph":null,"view":{"id":"2738"}},"id":"2737","type":"GlyphRenderer"},{"attributes":{"text":"Tinybert","x":0.5,"y":87.5},"id":"2787","type":"Label"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"2812"},"selection_policy":{"id":"2811"}},"id":"2788","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3519","type":"Line"},{"attributes":{"data_source":{"id":"2729"},"glyph":{"id":"2730"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2731"},"selection_glyph":null,"view":{"id":"2733"}},"id":"2732","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2900","type":"Line"},{"attributes":{"source":{"id":"3517"}},"id":"3521","type":"CDSView"},{"attributes":{},"id":"2710","type":"BasicTicker"},{"attributes":{"source":{"id":"2898"}},"id":"2902","type":"CDSView"},{"attributes":{"label":{"value":"Structured pruning, BERT-base"},"renderers":[{"id":"3161"}]},"id":"3203","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2999","type":"Line"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2747"},"selection_policy":{"id":"2746"}},"id":"2734","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2735","type":"Line"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"2695","type":"Title"},{"attributes":{"axis_label":"F1","formatter":{"id":"2741"},"ticker":{"id":"2710"}},"id":"2709","type":"LinearAxis"},{"attributes":{},"id":"3200","type":"UnionRenderers"},{"attributes":{},"id":"3201","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2736","type":"Line"},{"attributes":{"source":{"id":"2734"}},"id":"2738","type":"CDSView"},{"attributes":{},"id":"2765","type":"UnionRenderers"},{"attributes":{},"id":"3573","type":"UnionRenderers"},{"attributes":{},"id":"2766","type":"Selection"},{"attributes":{},"id":"2926","type":"UnionRenderers"},{"attributes":{},"id":"3574","type":"Selection"},{"attributes":{},"id":"2927","type":"Selection"},{"attributes":{},"id":"2866","type":"Selection"},{"attributes":{"data_source":{"id":"2768"},"glyph":{"id":"2769"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2770"},"selection_glyph":null,"view":{"id":"2772"}},"id":"2771","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"3249"},"selection_policy":{"id":"3248"}},"id":"3204","type":"ColumnDataSource"},{"attributes":{},"id":"2743","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2785"},"selection_policy":{"id":"2784"}},"id":"2768","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2960"},"selection_policy":{"id":"2959"}},"id":"2929","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.25071068751959147,0.15786624249116865,0.11725962603533713,0.11616964693422671,0.06489395800931963,0.04466981063654396,0.0340861803219642],"y":[88.66263407974378,88.07603620459668,87.64967103979136,87.59923644792065,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"3402"},"selection_policy":{"id":"3401"}},"id":"3351","type":"ColumnDataSource"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3352","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2930","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3252","type":"Line"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"3349"},"selection_policy":{"id":"3348"}},"id":"3300","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2788"}},"id":"2792","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3206","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2770","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2931","type":"Line"},{"attributes":{"source":{"id":"3204"}},"id":"3208","type":"CDSView"},{"attributes":{"data_source":{"id":"3251"},"glyph":{"id":"3252"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3253"},"selection_glyph":null,"view":{"id":"3255"}},"id":"3254","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2768"}},"id":"2772","type":"CDSView"},{"attributes":{"source":{"id":"2929"}},"id":"2933","type":"CDSView"},{"attributes":{"data_source":{"id":"2962"},"glyph":{"id":"2963"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2964"},"selection_glyph":null,"view":{"id":"2966"}},"id":"2965","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2789","type":"Scatter"},{"attributes":{},"id":"2703","type":"LinearScale"},{"attributes":{"end":0.9},"id":"2727","type":"Range1d"},{"attributes":{},"id":"3248","type":"UnionRenderers"},{"attributes":{},"id":"2784","type":"UnionRenderers"},{"attributes":{},"id":"2959","type":"UnionRenderers"},{"attributes":{},"id":"3249","type":"Selection"},{"attributes":{},"id":"2785","type":"Selection"},{"attributes":{},"id":"2960","type":"Selection"},{"attributes":{"below":[{"id":"2705"}],"center":[{"id":"2708"},{"id":"2712"},{"id":"2728"},{"id":"2749"},{"id":"2787"}],"left":[{"id":"2709"}],"plot_width":800,"renderers":[{"id":"2732"},{"id":"2737"},{"id":"2754"},{"id":"2771"},{"id":"2791"},{"id":"2796"},{"id":"2819"},{"id":"2844"},{"id":"2871"},{"id":"2901"},{"id":"2932"},{"id":"2965"},{"id":"3000"},{"id":"3038"},{"id":"3077"},{"id":"3118"},{"id":"3161"},{"id":"3207"},{"id":"3254"},{"id":"3303"},{"id":"3354"},{"id":"3408"},{"id":"3463"},{"id":"3520"}],"title":{"id":"2695"},"toolbar":{"id":"2720"},"x_range":{"id":"2727"},"x_scale":{"id":"2701"},"y_range":{"id":"2699"},"y_scale":{"id":"2703"}},"id":"2694","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2790","type":"Scatter"},{"attributes":{"data":{"x":[0.408203125,0.34883014896373055,0.3292532356948229,0.3214888139204546,0.2941730898123325,0.2657799220963173,0.23532130281690145],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.70940223967354,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"2895"},"selection_policy":{"id":"2894"}},"id":"2868","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2997"}},"id":"3001","type":"CDSView"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2995"},"selection_policy":{"id":"2994"}},"id":"2962","type":"ColumnDataSource"},{"attributes":{},"id":"2744","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"3298"},"selection_policy":{"id":"3297"}},"id":"3251","type":"ColumnDataSource"},{"attributes":{},"id":"2745","type":"Selection"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2998","type":"Line"},{"attributes":{"data_source":{"id":"2793"},"glyph":{"id":"2794"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2795"},"selection_glyph":null,"view":{"id":"2797"}},"id":"2796","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2788"},"glyph":{"id":"2789"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2790"},"selection_glyph":null,"view":{"id":"2792"}},"id":"2791","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2964","type":"Line"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2814"},"selection_policy":{"id":"2813"}},"id":"2793","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2962"}},"id":"2966","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3253","type":"Line"},{"attributes":{"source":{"id":"3251"}},"id":"3255","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2794","type":"Line"},{"attributes":{"data_source":{"id":"3300"},"glyph":{"id":"3301"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3302"},"selection_glyph":null,"view":{"id":"3304"}},"id":"3303","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2795","type":"Line"},{"attributes":{"data_source":{"id":"2816"},"glyph":{"id":"2817"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2818"},"selection_glyph":null,"view":{"id":"2820"}},"id":"2819","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2793"}},"id":"2797","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2817","type":"Line"},{"attributes":{},"id":"2994","type":"UnionRenderers"},{"attributes":{},"id":"2995","type":"Selection"},{"attributes":{},"id":"3297","type":"UnionRenderers"},{"attributes":{},"id":"3298","type":"Selection"},{"attributes":{"data_source":{"id":"3035"},"glyph":{"id":"3036"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3037"},"selection_glyph":null,"view":{"id":"3039"}},"id":"3038","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3351"}},"id":"3355","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3036","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3353","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3301","type":"Line"},{"attributes":{},"id":"2811","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3302","type":"Line"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-large"},"renderers":[{"id":"3000"}]},"id":"3034","type":"LegendItem"},{"attributes":{},"id":"2812","type":"Selection"},{"attributes":{"source":{"id":"3300"}},"id":"3304","type":"CDSView"},{"attributes":{},"id":"3031","type":"UnionRenderers"},{"attributes":{},"id":"3032","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2713"},{"id":"2714"},{"id":"2715"},{"id":"2716"},{"id":"2717"},{"id":"2718"}]},"id":"2720","type":"Toolbar"},{"attributes":{},"id":"2813","type":"UnionRenderers"},{"attributes":{"text":"Distilbert","x":0.5,"y":86.9},"id":"2728","type":"Label"},{"attributes":{},"id":"2814","type":"Selection"},{"attributes":{},"id":"3348","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.21133535879629628,0.202030888310185,0.17082609953703698,0.16608796296296302,0.15747974537037035,0.14585141782407407,0.13883463541666652,0.13780381944444442],"y":[86.86229967213058,86.45517515140308,86.30683282660192,86.2625032125089,85.91370280008687,85.77799129804794,85.60283555208089,85.51634639956605]},"selected":{"id":"3201"},"selection_policy":{"id":"3200"}},"id":"3158","type":"ColumnDataSource"},{"attributes":{},"id":"3349","type":"Selection"},{"attributes":{"data_source":{"id":"3405"},"glyph":{"id":"3406"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3407"},"selection_glyph":null,"view":{"id":"3409"}},"id":"3408","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"3072"},"selection_policy":{"id":"3071"}},"id":"3035","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3158"},"glyph":{"id":"3159"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3160"},"selection_glyph":null,"view":{"id":"3162"}},"id":"3161","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3406","type":"Line"},{"attributes":{"label":{"value":"Reference f1=88.5 BERT-base"},"renderers":[{"id":"2737"},{"id":"2754"},{"id":"2771"},{"id":"2796"},{"id":"2819"},{"id":"2844"},{"id":"2901"},{"id":"2932"},{"id":"2965"},{"id":"3038"},{"id":"3077"},{"id":"3118"},{"id":"3207"},{"id":"3254"},{"id":"3303"},{"id":"3408"},{"id":"3463"},{"id":"3520"}]},"id":"2750","type":"LegendItem"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3075","type":"Line"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"3156"},"selection_policy":{"id":"3155"}},"id":"3115","type":"ColumnDataSource"},{"attributes":{},"id":"2716","type":"SaveTool"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2839"},"selection_policy":{"id":"2838"}},"id":"2816","type":"ColumnDataSource"},{"attributes":{"click_policy":"hide","items":[{"id":"2750"},{"id":"2897"},{"id":"3034"},{"id":"3203"},{"id":"3404"}],"location":"top_left"},"id":"2749","type":"Legend"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2842","type":"Line"},{"attributes":{"label":{"value":"Improved soft movement, BERT-base"},"renderers":[{"id":"3354"}]},"id":"3404","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3037","type":"Line"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-base"},"renderers":[{"id":"2871"}]},"id":"2897","type":"LegendItem"},{"attributes":{"overlay":{"id":"2719"}},"id":"2715","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"2841"},"glyph":{"id":"2842"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2843"},"selection_glyph":null,"view":{"id":"2845"}},"id":"2844","type":"GlyphRenderer"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"2743"},"ticker":{"id":"2706"}},"id":"2705","type":"LinearAxis"},{"attributes":{"source":{"id":"3035"}},"id":"3039","type":"CDSView"},{"attributes":{"data_source":{"id":"3074"},"glyph":{"id":"3075"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3076"},"selection_glyph":null,"view":{"id":"3078"}},"id":"3077","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2818","type":"Line"},{"attributes":{"source":{"id":"2816"}},"id":"2820","type":"CDSView"},{"attributes":{},"id":"3401","type":"UnionRenderers"},{"attributes":{},"id":"3402","type":"Selection"},{"attributes":{},"id":"2717","type":"ResetTool"},{"attributes":{"axis":{"id":"2709"},"dimension":1,"ticker":null},"id":"2712","type":"Grid"},{"attributes":{},"id":"2701","type":"LinearScale"},{"attributes":{},"id":"3071","type":"UnionRenderers"},{"attributes":{},"id":"3072","type":"Selection"},{"attributes":{},"id":"2699","type":"DataRange1d"},{"attributes":{},"id":"2838","type":"UnionRenderers"},{"attributes":{},"id":"2706","type":"BasicTicker"},{"attributes":{},"id":"2839","type":"Selection"},{"attributes":{},"id":"3113","type":"Selection"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"3458"},"selection_policy":{"id":"3457"}},"id":"3405","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2870","type":"Line"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"3515"},"selection_policy":{"id":"3514"}},"id":"3460","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2866"},"selection_policy":{"id":"2865"}},"id":"2841","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"3113"},"selection_policy":{"id":"3112"}},"id":"3074","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3407","type":"Line"},{"attributes":{"source":{"id":"3405"}},"id":"3409","type":"CDSView"},{"attributes":{"data_source":{"id":"3460"},"glyph":{"id":"3461"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3462"},"selection_glyph":null,"view":{"id":"3464"}},"id":"3463","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2843","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3076","type":"Line"},{"attributes":{"data_source":{"id":"3351"},"glyph":{"id":"3352"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3353"},"selection_glyph":null,"view":{"id":"3355"}},"id":"3354","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2841"}},"id":"2845","type":"CDSView"},{"attributes":{"source":{"id":"3074"}},"id":"3078","type":"CDSView"},{"attributes":{"data_source":{"id":"3115"},"glyph":{"id":"3116"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3117"},"selection_glyph":null,"view":{"id":"3119"}},"id":"3118","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2868"}},"id":"2872","type":"CDSView"},{"attributes":{},"id":"2714","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2719","type":"BoxAnnotation"},{"attributes":{},"id":"2713","type":"PanTool"},{"attributes":{},"id":"3457","type":"UnionRenderers"},{"attributes":{},"id":"2718","type":"HelpTool"},{"attributes":{},"id":"3458","type":"Selection"},{"attributes":{},"id":"2865","type":"UnionRenderers"},{"attributes":{},"id":"3112","type":"UnionRenderers"},{"attributes":{},"id":"2741","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"2705"},"ticker":null},"id":"2708","type":"Grid"}],"root_ids":["2694"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"2f18527d-b90b-4bb4-9171-8e9d27c7b7c9","root_ids":["2694"],"roots":{"2694":"246bef39-065f-4107-9c16-fc9169ecb060"}}];
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