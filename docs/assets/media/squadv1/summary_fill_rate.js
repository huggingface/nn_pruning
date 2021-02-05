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
    
      
      
    
      var element = document.getElementById("e4df83b0-ec45-4902-ba25-89b905caec6f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e4df83b0-ec45-4902-ba25-89b905caec6f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1743d152-151d-4066-8f97-a20c99013dd6":{"roots":{"references":[{"attributes":{},"id":"2317","type":"PanTool"},{"attributes":{},"id":"2318","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2720","type":"Line"},{"attributes":{},"id":"2322","type":"HelpTool"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2772"},"selection_policy":{"id":"2773"}},"id":"2719","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2719"},"glyph":{"id":"2720"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2721"},"selection_glyph":null,"view":{"id":"2723"}},"id":"2722","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2834"},"selection_policy":{"id":"2835"}},"id":"2774","type":"ColumnDataSource"},{"attributes":{},"id":"2387","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2665"},"glyph":{"id":"2666"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2667"},"selection_glyph":null,"view":{"id":"2669"}},"id":"2668","type":"GlyphRenderer"},{"attributes":{},"id":"2386","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2317"},{"id":"2318"},{"id":"2319"},{"id":"2320"},{"id":"2321"},{"id":"2322"}]},"id":"2324","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2721","type":"Line"},{"attributes":{"source":{"id":"2719"}},"id":"2723","type":"CDSView"},{"attributes":{},"id":"2320","type":"SaveTool"},{"attributes":{},"id":"2388","type":"Selection"},{"attributes":{},"id":"2773","type":"UnionRenderers"},{"attributes":{},"id":"2389","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"2323"}},"id":"2319","type":"BoxZoomTool"},{"attributes":{},"id":"2772","type":"Selection"},{"attributes":{},"id":"2349","type":"Selection"},{"attributes":{},"id":"2321","type":"ResetTool"},{"attributes":{},"id":"2390","type":"Selection"},{"attributes":{},"id":"2350","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2323","type":"BoxAnnotation"},{"attributes":{},"id":"2391","type":"UnionRenderers"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"2299","type":"Title"},{"attributes":{"text":"Distilbert","x":0.5,"y":86.9},"id":"2332","type":"Label"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2836"},"selection_policy":{"id":"2837"}},"id":"2779","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2775","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2780","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2776","type":"Line"},{"attributes":{"source":{"id":"2774"}},"id":"2778","type":"CDSView"},{"attributes":{"data_source":{"id":"2779"},"glyph":{"id":"2780"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2781"},"selection_glyph":null,"view":{"id":"2783"}},"id":"2782","type":"GlyphRenderer"},{"attributes":{},"id":"2392","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2781","type":"Line"},{"attributes":{"source":{"id":"2779"}},"id":"2783","type":"CDSView"},{"attributes":{},"id":"2393","type":"UnionRenderers"},{"attributes":{},"id":"2716","type":"Selection"},{"attributes":{"data":{"x":[0.408203125,0.34883014896373055,0.3292532356948229,0.2941730898123325,0.2657799220963173,0.23532130281690145],"y":[88.72194531479171,88.24613086360249,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"2431"},"selection_policy":{"id":"2432"}},"id":"2404","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2333"},"glyph":{"id":"2334"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2335"},"selection_glyph":null,"view":{"id":"2337"}},"id":"2336","type":"GlyphRenderer"},{"attributes":{},"id":"2835","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"2349"},"selection_policy":{"id":"2350"}},"id":"2333","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2335","type":"Scatter"},{"attributes":{},"id":"2834","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2334","type":"Scatter"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2653"},"selection_policy":{"id":"2654"}},"id":"2608","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2355"},"glyph":{"id":"2356"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2357"},"selection_glyph":null,"view":{"id":"2359"}},"id":"2358","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2338"},"glyph":{"id":"2339"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2340"},"selection_glyph":null,"view":{"id":"2342"}},"id":"2341","type":"GlyphRenderer"},{"attributes":{"text":"Tinybert","x":0.5,"y":87.5},"id":"2365","type":"Label"},{"attributes":{"source":{"id":"2333"}},"id":"2337","type":"CDSView"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2351"},"selection_policy":{"id":"2352"}},"id":"2338","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2339","type":"Line"},{"attributes":{},"id":"2836","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"2354"},{"id":"2433"},{"id":"2512"},{"id":"2607"},{"id":"2718"}]},"id":"2353","type":"Legend"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2429"},"selection_policy":{"id":"2430"}},"id":"2399","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2400","type":"Line"},{"attributes":{"label":{"value":"BERT-base reference (f1=88.5)"},"renderers":[{"id":"2341"},{"id":"2374"},{"id":"2437"},{"id":"2516"},{"id":"2611"},{"id":"2722"}]},"id":"2354","type":"LegendItem"},{"attributes":{},"id":"2837","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2395","type":"Line"},{"attributes":{"data_source":{"id":"2399"},"glyph":{"id":"2400"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2401"},"selection_glyph":null,"view":{"id":"2403"}},"id":"2402","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2340","type":"Line"},{"attributes":{"source":{"id":"2338"}},"id":"2342","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2396","type":"Line"},{"attributes":{"source":{"id":"2394"}},"id":"2398","type":"CDSView"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2405","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2406","type":"Line"},{"attributes":{"source":{"id":"2404"}},"id":"2408","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2401","type":"Line"},{"attributes":{},"id":"2464","type":"UnionRenderers"},{"attributes":{"source":{"id":"2399"}},"id":"2403","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2609","type":"Line"},{"attributes":{},"id":"2550","type":"Selection"},{"attributes":{"data_source":{"id":"2434"},"glyph":{"id":"2435"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2436"},"selection_glyph":null,"view":{"id":"2438"}},"id":"2437","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2470"},"glyph":{"id":"2471"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2472"},"selection_glyph":null,"view":{"id":"2474"}},"id":"2473","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2435","type":"Line"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2714"},"selection_policy":{"id":"2715"}},"id":"2660","type":"ColumnDataSource"},{"attributes":{},"id":"2344","type":"BasicTickFormatter"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2476","type":"Line"},{"attributes":{},"id":"2551","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2471","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2467","type":"Line"},{"attributes":{"source":{"id":"2465"}},"id":"2469","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2610","type":"Line"},{"attributes":{"label":{"value":"BERT-base, hybrid pruning"},"renderers":[{"id":"2407"}]},"id":"2433","type":"LegendItem"},{"attributes":{"source":{"id":"2608"}},"id":"2612","type":"CDSView"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2508"},"selection_policy":{"id":"2509"}},"id":"2470","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2712"},"selection_policy":{"id":"2713"}},"id":"2655","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2475"}},"id":"2479","type":"CDSView"},{"attributes":{},"id":"2346","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2514","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2472","type":"Line"},{"attributes":{"source":{"id":"2470"}},"id":"2474","type":"CDSView"},{"attributes":{},"id":"2654","type":"UnionRenderers"},{"attributes":{},"id":"2428","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2603"},"selection_policy":{"id":"2604"}},"id":"2557","type":"ColumnDataSource"},{"attributes":{},"id":"2653","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2477","type":"Line"},{"attributes":{},"id":"2427","type":"Selection"},{"attributes":{"data_source":{"id":"2513"},"glyph":{"id":"2514"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2515"},"selection_glyph":null,"view":{"id":"2517"}},"id":"2516","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2558","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2554","type":"Line"},{"attributes":{"source":{"id":"2552"}},"id":"2556","type":"CDSView"},{"attributes":{"data_source":{"id":"2557"},"glyph":{"id":"2558"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2559"},"selection_glyph":null,"view":{"id":"2561"}},"id":"2560","type":"GlyphRenderer"},{"attributes":{"label":{"value":"BERT-large, hybrid pruning"},"renderers":[{"id":"2478"}]},"id":"2512","type":"LegendItem"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2563","type":"Line"},{"attributes":{"source":{"id":"2562"}},"id":"2566","type":"CDSView"},{"attributes":{"data":{"x":[0.25071068751959147,0.15786624249116865,0.11616964693422671,0.06489395800931963,0.04466981063654396,0.0340861803219642],"y":[88.66263407974378,88.07603620459668,87.59923644792065,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"2716"},"selection_policy":{"id":"2717"}},"id":"2665","type":"ColumnDataSource"},{"attributes":{},"id":"2305","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2559","type":"Line"},{"attributes":{},"id":"2429","type":"Selection"},{"attributes":{"source":{"id":"2557"}},"id":"2561","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2656","type":"Line"},{"attributes":{},"id":"2430","type":"UnionRenderers"},{"attributes":{},"id":"2507","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2564","type":"Line"},{"attributes":{"data_source":{"id":"2608"},"glyph":{"id":"2609"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2610"},"selection_glyph":null,"view":{"id":"2612"}},"id":"2611","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2661","type":"Line"},{"attributes":{},"id":"2506","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2657","type":"Line"},{"attributes":{},"id":"2351","type":"Selection"},{"attributes":{"source":{"id":"2655"}},"id":"2659","type":"CDSView"},{"attributes":{"data_source":{"id":"2660"},"glyph":{"id":"2661"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2662"},"selection_glyph":null,"view":{"id":"2664"}},"id":"2663","type":"GlyphRenderer"},{"attributes":{"label":{"value":"BERT-base, structured pruning"},"renderers":[{"id":"2565"}]},"id":"2607","type":"LegendItem"},{"attributes":{},"id":"2352","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2667","type":"Line"},{"attributes":{},"id":"2431","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2662","type":"Line"},{"attributes":{"source":{"id":"2660"}},"id":"2664","type":"CDSView"},{"attributes":{},"id":"2432","type":"UnionRenderers"},{"attributes":{},"id":"2508","type":"Selection"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2666","type":"Line"},{"attributes":{"source":{"id":"2665"}},"id":"2669","type":"CDSView"},{"attributes":{},"id":"2509","type":"UnionRenderers"},{"attributes":{},"id":"2602","type":"UnionRenderers"},{"attributes":{},"id":"2601","type":"Selection"},{"attributes":{},"id":"2303","type":"DataRange1d"},{"attributes":{"label":{"value":"Improved soft movement"},"renderers":[{"id":"2668"}]},"id":"2718","type":"LegendItem"},{"attributes":{},"id":"2510","type":"Selection"},{"attributes":{},"id":"2603","type":"Selection"},{"attributes":{},"id":"2511","type":"UnionRenderers"},{"attributes":{},"id":"2713","type":"UnionRenderers"},{"attributes":{},"id":"2604","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2386"},"selection_policy":{"id":"2387"}},"id":"2355","type":"ColumnDataSource"},{"attributes":{},"id":"2712","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2361","type":"Line"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[86.5,86.5]},"selected":{"id":"2388"},"selection_policy":{"id":"2389"}},"id":"2360","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.8222085160818713,0.8222085160818713,0.8222085160818713,0.5930300575953924],"y":[90.73941291394593,90.84270784891945,91.0266636723574,90.10843526218638]},"selected":{"id":"2510"},"selection_policy":{"id":"2511"}},"id":"2475","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"2390"},"selection_policy":{"id":"2391"}},"id":"2366","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2463"},"selection_policy":{"id":"2464"}},"id":"2434","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2475"},"glyph":{"id":"2476"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2477"},"selection_glyph":null,"view":{"id":"2479"}},"id":"2478","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2356","type":"Line"},{"attributes":{"data_source":{"id":"2465"},"glyph":{"id":"2466"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2467"},"selection_glyph":null,"view":{"id":"2469"}},"id":"2468","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2357","type":"Line"},{"attributes":{},"id":"2605","type":"Selection"},{"attributes":{"source":{"id":"2355"}},"id":"2359","type":"CDSView"},{"attributes":{},"id":"2307","type":"LinearScale"},{"attributes":{},"id":"2714","type":"Selection"},{"attributes":{"data_source":{"id":"2360"},"glyph":{"id":"2361"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2362"},"selection_glyph":null,"view":{"id":"2364"}},"id":"2363","type":"GlyphRenderer"},{"attributes":{"end":0.75},"id":"2331","type":"Range1d"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2466","type":"Line"},{"attributes":{"data_source":{"id":"2366"},"glyph":{"id":"2367"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2368"},"selection_glyph":null,"view":{"id":"2370"}},"id":"2369","type":"GlyphRenderer"},{"attributes":{},"id":"2606","type":"UnionRenderers"},{"attributes":{},"id":"2715","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2372","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2367","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2436","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2362","type":"Line"},{"attributes":{"source":{"id":"2434"}},"id":"2438","type":"CDSView"},{"attributes":{"source":{"id":"2360"}},"id":"2364","type":"CDSView"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2506"},"selection_policy":{"id":"2507"}},"id":"2465","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.21133535879629628,0.202030888310185,0.16608796296296302,0.15747974537037035,0.14585141782407407,0.13883463541666652,0.13751446759259256],"y":[86.86229967213058,86.45517515140308,86.2625032125089,85.91370280008687,85.77799129804794,85.60283555208089,85.45260706155949]},"selected":{"id":"2605"},"selection_policy":{"id":"2606"}},"id":"2562","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2368","type":"Scatter"},{"attributes":{"data_source":{"id":"2394"},"glyph":{"id":"2395"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2396"},"selection_glyph":null,"view":{"id":"2398"}},"id":"2397","type":"GlyphRenderer"},{"attributes":{},"id":"2310","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2371"},"glyph":{"id":"2372"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2373"},"selection_glyph":null,"view":{"id":"2375"}},"id":"2374","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2309"}],"center":[{"id":"2312"},{"id":"2316"},{"id":"2332"},{"id":"2353"},{"id":"2365"}],"left":[{"id":"2313"}],"plot_width":800,"renderers":[{"id":"2336"},{"id":"2341"},{"id":"2358"},{"id":"2363"},{"id":"2369"},{"id":"2374"},{"id":"2397"},{"id":"2402"},{"id":"2407"},{"id":"2437"},{"id":"2468"},{"id":"2473"},{"id":"2478"},{"id":"2516"},{"id":"2555"},{"id":"2560"},{"id":"2565"},{"id":"2611"},{"id":"2658"},{"id":"2663"},{"id":"2668"},{"id":"2722"},{"id":"2777"},{"id":"2782"}],"title":{"id":"2299"},"toolbar":{"id":"2324"},"x_range":{"id":"2331"},"x_scale":{"id":"2305"},"y_range":{"id":"2303"},"y_scale":{"id":"2307"}},"id":"2298","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2550"},"selection_policy":{"id":"2551"}},"id":"2513","type":"ColumnDataSource"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"2344"},"ticker":{"id":"2310"}},"id":"2309","type":"LinearAxis"},{"attributes":{"data_source":{"id":"2562"},"glyph":{"id":"2563"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2564"},"selection_glyph":null,"view":{"id":"2566"}},"id":"2565","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[88.5,88.5]},"selected":{"id":"2392"},"selection_policy":{"id":"2393"}},"id":"2371","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2552"},"glyph":{"id":"2553"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2554"},"selection_glyph":null,"view":{"id":"2556"}},"id":"2555","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2366"}},"id":"2370","type":"CDSView"},{"attributes":{},"id":"2314","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2404"},"glyph":{"id":"2405"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2406"},"selection_glyph":null,"view":{"id":"2408"}},"id":"2407","type":"GlyphRenderer"},{"attributes":{"axis_label":"F1","formatter":{"id":"2346"},"ticker":{"id":"2314"}},"id":"2313","type":"LinearAxis"},{"attributes":{},"id":"2463","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2553","type":"Line"},{"attributes":{},"id":"2717","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2774"},"glyph":{"id":"2775"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2776"},"selection_glyph":null,"view":{"id":"2778"}},"id":"2777","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2515","type":"Line"},{"attributes":{"axis":{"id":"2313"},"dimension":1,"ticker":null},"id":"2316","type":"Grid"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2427"},"selection_policy":{"id":"2428"}},"id":"2394","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2513"}},"id":"2517","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2373","type":"Line"},{"attributes":{"data":{"x":[0,0.8222085160818713],"y":[87.5,87.5]},"selected":{"id":"2601"},"selection_policy":{"id":"2602"}},"id":"2552","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2371"}},"id":"2375","type":"CDSView"},{"attributes":{"data_source":{"id":"2655"},"glyph":{"id":"2656"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2657"},"selection_glyph":null,"view":{"id":"2659"}},"id":"2658","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"2309"},"ticker":null},"id":"2312","type":"Grid"}],"root_ids":["2298"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"1743d152-151d-4066-8f97-a20c99013dd6","root_ids":["2298"],"roots":{"2298":"e4df83b0-ec45-4902-ba25-89b905caec6f"}}];
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