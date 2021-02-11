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
    
      
      
    
      var element = document.getElementById("028e8970-cce9-404c-a533-14b25b2faf9d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '028e8970-cce9-404c-a533-14b25b2faf9d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5628e4b5-1127-4590-b348-33dc015e0615":{"roots":{"references":[{"attributes":{"source":{"id":"2523"}},"id":"2527","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2450","type":"Line"},{"attributes":{},"id":"2441","type":"Selection"},{"attributes":{"text":"Distilbert","x":0.5,"y":86.9},"id":"2383","type":"Label"},{"attributes":{"source":{"id":"2553"}},"id":"2557","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2771","type":"Line"},{"attributes":{},"id":"2905","type":"Selection"},{"attributes":{},"id":"2440","type":"UnionRenderers"},{"attributes":{"source":{"id":"2423"}},"id":"2427","type":"CDSView"},{"attributes":{},"id":"2904","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2812"},"selection_policy":{"id":"2811"}},"id":"2770","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"2374"}},"id":"2370","type":"BoxZoomTool"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2653","type":"Line"},{"attributes":{},"id":"2954","type":"Selection"},{"attributes":{},"id":"2616","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2498","type":"Line"},{"attributes":{},"id":"3005","type":"Selection"},{"attributes":{},"id":"2369","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2956","type":"Line"},{"attributes":{},"id":"2361","type":"BasicTicker"},{"attributes":{"data":{"x":[0.25071068751959147,0.15786624249116865,0.11725962603533713,0.11616964693422671,0.06489395800931963,0.04466981063654396,0.0340861803219642],"y":[88.66263407974378,88.07603620459668,87.64967103979136,87.59923644792065,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"2857"},"selection_policy":{"id":"2856"}},"id":"2813","type":"ColumnDataSource"},{"attributes":{},"id":"2402","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2449","type":"Line"},{"attributes":{},"id":"2400","type":"UnionRenderers"},{"attributes":{},"id":"2615","type":"UnionRenderers"},{"attributes":{"axis":{"id":"2364"},"dimension":1,"ticker":null},"id":"2367","type":"Grid"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2497","type":"Line"},{"attributes":{"data_source":{"id":"2553"},"glyph":{"id":"2554"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2555"},"selection_glyph":null,"view":{"id":"2557"}},"id":"2556","type":"GlyphRenderer"},{"attributes":{},"id":"2401","type":"Selection"},{"attributes":{},"id":"2650","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2422"},"selection_policy":{"id":"2421"}},"id":"2406","type":"ColumnDataSource"},{"attributes":{},"id":"2403","type":"Selection"},{"attributes":{},"id":"2354","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2731","type":"Line"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2495"},"selection_policy":{"id":"2494"}},"id":"2471","type":"ColumnDataSource"},{"attributes":{},"id":"2468","type":"Selection"},{"attributes":{"data_source":{"id":"2813"},"glyph":{"id":"2814"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2815"},"selection_glyph":null,"view":{"id":"2817"}},"id":"2816","type":"GlyphRenderer"},{"attributes":{},"id":"2953","type":"UnionRenderers"},{"attributes":{},"id":"2651","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2385","type":"Scatter"},{"attributes":{},"id":"2688","type":"Selection"},{"attributes":{"end":0.9},"id":"2382","type":"Range1d"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2472","type":"Line"},{"attributes":{},"id":"2467","type":"UnionRenderers"},{"attributes":{},"id":"2687","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2406"},"glyph":{"id":"2407"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2408"},"selection_glyph":null,"view":{"id":"2410"}},"id":"2409","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2728"},"selection_policy":{"id":"2727"}},"id":"2690","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2769"},"selection_policy":{"id":"2768"}},"id":"2729","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2957","type":"Line"},{"attributes":{},"id":"2356","type":"LinearScale"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2730","type":"Line"},{"attributes":{"data_source":{"id":"2448"},"glyph":{"id":"2449"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2450"},"selection_glyph":null,"view":{"id":"2452"}},"id":"2451","type":"GlyphRenderer"},{"attributes":{},"id":"2372","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2445","type":"Scatter"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"2395"},"ticker":{"id":"2361"}},"id":"2360","type":"LinearAxis"},{"attributes":{"data_source":{"id":"2859"},"glyph":{"id":"2860"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2861"},"selection_glyph":null,"view":{"id":"2863"}},"id":"2862","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2470"},"selection_policy":{"id":"2469"}},"id":"2448","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2384"},"glyph":{"id":"2385"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2386"},"selection_glyph":null,"view":{"id":"2388"}},"id":"2387","type":"GlyphRenderer"},{"attributes":{},"id":"2371","type":"SaveTool"},{"attributes":{},"id":"2469","type":"UnionRenderers"},{"attributes":{},"id":"3004","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2617"},"glyph":{"id":"2618"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2619"},"selection_glyph":null,"view":{"id":"2621"}},"id":"2620","type":"GlyphRenderer"},{"attributes":{},"id":"2365","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2815","type":"Line"},{"attributes":{"source":{"id":"2448"}},"id":"2452","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2525","type":"Line"},{"attributes":{"source":{"id":"2443"}},"id":"2447","type":"CDSView"},{"attributes":{},"id":"2368","type":"PanTool"},{"attributes":{},"id":"2470","type":"Selection"},{"attributes":{},"id":"2421","type":"UnionRenderers"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2524","type":"Line"},{"attributes":{"data_source":{"id":"2584"},"glyph":{"id":"2585"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2586"},"selection_glyph":null,"view":{"id":"2588"}},"id":"2587","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2729"}},"id":"2733","type":"CDSView"},{"attributes":{},"id":"2422","type":"Selection"},{"attributes":{"data_source":{"id":"2729"},"glyph":{"id":"2730"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2731"},"selection_glyph":null,"view":{"id":"2733"}},"id":"2732","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.408203125,0.34883014896373055,0.3292532356948229,0.3214888139204546,0.2941730898123325,0.2657799220963173,0.23532130281690145],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.70940223967354,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"2551"},"selection_policy":{"id":"2550"}},"id":"2523","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2770"},"glyph":{"id":"2771"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2772"},"selection_glyph":null,"view":{"id":"2774"}},"id":"2773","type":"GlyphRenderer"},{"attributes":{"axis_label":"F1","formatter":{"id":"2397"},"ticker":{"id":"2365"}},"id":"2364","type":"LinearAxis"},{"attributes":{"data_source":{"id":"2471"},"glyph":{"id":"2472"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2473"},"selection_glyph":null,"view":{"id":"2475"}},"id":"2474","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2473","type":"Line"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2522"},"selection_policy":{"id":"2521"}},"id":"2496","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2692","type":"Line"},{"attributes":{"source":{"id":"2690"}},"id":"2694","type":"CDSView"},{"attributes":{"data_source":{"id":"2496"},"glyph":{"id":"2497"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2498"},"selection_glyph":null,"view":{"id":"2500"}},"id":"2499","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Improved soft movement, BERT-base"},"renderers":[{"id":"2816"}]},"id":"2858","type":"LegendItem"},{"attributes":{"source":{"id":"2496"}},"id":"2500","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2691","type":"Line"},{"attributes":{"source":{"id":"2471"}},"id":"2475","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2814","type":"Line"},{"attributes":{"below":[{"id":"2360"}],"center":[{"id":"2363"},{"id":"2367"},{"id":"2383"},{"id":"2404"},{"id":"2442"}],"left":[{"id":"2364"}],"plot_width":800,"renderers":[{"id":"2387"},{"id":"2392"},{"id":"2409"},{"id":"2426"},{"id":"2446"},{"id":"2451"},{"id":"2474"},{"id":"2499"},{"id":"2526"},{"id":"2556"},{"id":"2587"},{"id":"2620"},{"id":"2655"},{"id":"2693"},{"id":"2732"},{"id":"2773"},{"id":"2816"},{"id":"2862"},{"id":"2909"},{"id":"2958"}],"title":{"id":"2350"},"toolbar":{"id":"2375"},"x_range":{"id":"2382"},"x_scale":{"id":"2356"},"y_range":{"id":"2354"},"y_scale":{"id":"2358"}},"id":"2349","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"2770"}},"id":"2774","type":"CDSView"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"2468"},"selection_policy":{"id":"2467"}},"id":"2443","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2772","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2444","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2583"},"selection_policy":{"id":"2582"}},"id":"2553","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2813"}},"id":"2817","type":"CDSView"},{"attributes":{},"id":"2727","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"2405"},{"id":"2552"},{"id":"2689"},{"id":"2858"}],"location":"top_left"},"id":"2404","type":"Legend"},{"attributes":{},"id":"2495","type":"Selection"},{"attributes":{"data_source":{"id":"2443"},"glyph":{"id":"2444"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2445"},"selection_glyph":null,"view":{"id":"2447"}},"id":"2446","type":"GlyphRenderer"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"2350","type":"Title"},{"attributes":{},"id":"2373","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2425","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2907","type":"Line"},{"attributes":{},"id":"2728","type":"Selection"},{"attributes":{"text":"Tinybert","x":0.5,"y":87.5},"id":"2442","type":"Label"},{"attributes":{},"id":"2494","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2403"},"selection_policy":{"id":"2402"}},"id":"2389","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2859"}},"id":"2863","type":"CDSView"},{"attributes":{},"id":"2551","type":"Selection"},{"attributes":{},"id":"2768","type":"UnionRenderers"},{"attributes":{},"id":"2522","type":"Selection"},{"attributes":{"source":{"id":"2584"}},"id":"2588","type":"CDSView"},{"attributes":{},"id":"2769","type":"Selection"},{"attributes":{"data_source":{"id":"2955"},"glyph":{"id":"2956"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2957"},"selection_glyph":null,"view":{"id":"2959"}},"id":"2958","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2441"},"selection_policy":{"id":"2440"}},"id":"2423","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2861","type":"Line"},{"attributes":{},"id":"2521","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2908","type":"Line"},{"attributes":{"data_source":{"id":"2523"},"glyph":{"id":"2524"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2525"},"selection_glyph":null,"view":{"id":"2527"}},"id":"2526","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2408","type":"Line"},{"attributes":{"label":{"value":"Reference f1=88.5 BERT-base"},"renderers":[{"id":"2392"},{"id":"2409"},{"id":"2426"},{"id":"2451"},{"id":"2474"},{"id":"2499"},{"id":"2556"},{"id":"2587"},{"id":"2620"},{"id":"2693"},{"id":"2732"},{"id":"2773"},{"id":"2862"},{"id":"2909"},{"id":"2958"}]},"id":"2405","type":"LegendItem"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2905"},"selection_policy":{"id":"2904"}},"id":"2859","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2407","type":"Line"},{"attributes":{},"id":"2358","type":"LinearScale"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2585","type":"Line"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2954"},"selection_policy":{"id":"2953"}},"id":"2906","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2652"}},"id":"2656","type":"CDSView"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"3005"},"selection_policy":{"id":"3004"}},"id":"2955","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2554","type":"Line"},{"attributes":{},"id":"2812","type":"Selection"},{"attributes":{},"id":"2550","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2386","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2651"},"selection_policy":{"id":"2650"}},"id":"2617","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2617"}},"id":"2621","type":"CDSView"},{"attributes":{},"id":"2811","type":"UnionRenderers"},{"attributes":{},"id":"2856","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"2401"},"selection_policy":{"id":"2400"}},"id":"2384","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2406"}},"id":"2410","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2618","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2619","type":"Line"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-large"},"renderers":[{"id":"2655"}]},"id":"2689","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2555","type":"Line"},{"attributes":{},"id":"2395","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2390","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2654","type":"Line"},{"attributes":{},"id":"2397","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2860","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2424","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2374","type":"BoxAnnotation"},{"attributes":{},"id":"2582","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2616"},"selection_policy":{"id":"2615"}},"id":"2584","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2955"}},"id":"2959","type":"CDSView"},{"attributes":{"data_source":{"id":"2906"},"glyph":{"id":"2907"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2908"},"selection_glyph":null,"view":{"id":"2910"}},"id":"2909","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2586","type":"Line"},{"attributes":{"source":{"id":"2389"}},"id":"2393","type":"CDSView"},{"attributes":{"source":{"id":"2906"}},"id":"2910","type":"CDSView"},{"attributes":{"axis":{"id":"2360"},"ticker":null},"id":"2363","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2391","type":"Line"},{"attributes":{"data_source":{"id":"2389"},"glyph":{"id":"2390"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2391"},"selection_glyph":null,"view":{"id":"2393"}},"id":"2392","type":"GlyphRenderer"},{"attributes":{},"id":"2583","type":"Selection"},{"attributes":{},"id":"2857","type":"Selection"},{"attributes":{"data_source":{"id":"2423"},"glyph":{"id":"2424"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2425"},"selection_glyph":null,"view":{"id":"2427"}},"id":"2426","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2368"},{"id":"2369"},{"id":"2370"},{"id":"2371"},{"id":"2372"},{"id":"2373"}]},"id":"2375","type":"Toolbar"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-base"},"renderers":[{"id":"2526"}]},"id":"2552","type":"LegendItem"},{"attributes":{"data":{"x":[0.8222085160818713,0.5930300575953924,0.5025114810562569,0.40262012864169494],"y":[91.0266636723574,90.16320537561052,89.39825688878855,88.34901265417608]},"selected":{"id":"2688"},"selection_policy":{"id":"2687"}},"id":"2652","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2690"},"glyph":{"id":"2691"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2692"},"selection_glyph":null,"view":{"id":"2694"}},"id":"2693","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2384"}},"id":"2388","type":"CDSView"},{"attributes":{"data_source":{"id":"2652"},"glyph":{"id":"2653"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2654"},"selection_glyph":null,"view":{"id":"2656"}},"id":"2655","type":"GlyphRenderer"}],"root_ids":["2349"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"5628e4b5-1127-4590-b348-33dc015e0615","root_ids":["2349"],"roots":{"2349":"028e8970-cce9-404c-a533-14b25b2faf9d"}}];
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