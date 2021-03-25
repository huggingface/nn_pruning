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
    
      
      
    
      var element = document.getElementById("1cd0ef4f-6463-4ae4-9533-69e5b9cb6d7c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1cd0ef4f-6463-4ae4-9533-69e5b9cb6d7c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a6959eaa-c511-4794-8a2a-db65c6ba34be":{"roots":{"references":[{"attributes":{},"id":"2682","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2387","type":"Line"},{"attributes":{},"id":"2683","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"2407"},"selection_policy":{"id":"2408"}},"id":"2386","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.78125],"y":[84.3]},"selected":{"id":"2494"},"selection_policy":{"id":"2495"}},"id":"2462","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2386"},"glyph":{"id":"2387"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2388"},"selection_glyph":null,"view":{"id":"2390"}},"id":"2389","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2381"}},"id":"2385","type":"CDSView"},{"attributes":{"data_source":{"id":"2381"},"glyph":{"id":"2382"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2383"},"selection_glyph":null,"view":{"id":"2385"}},"id":"2384","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2464","type":"Scatter"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2410","type":"Line"},{"attributes":{"data_source":{"id":"2409"},"glyph":{"id":"2410"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2411"},"selection_glyph":null,"view":{"id":"2413"}},"id":"2412","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3039","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2388","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2982","type":"Line"},{"attributes":{"source":{"id":"2386"}},"id":"2390","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2685","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2311","type":"BoxAnnotation"},{"attributes":{"source":{"id":"2727"}},"id":"2731","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2983","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2686","type":"Line"},{"attributes":{"source":{"id":"2981"}},"id":"2985","type":"CDSView"},{"attributes":{"axis_label":"Matched","formatter":{"id":"2335"},"ticker":{"id":"2302"}},"id":"2301","type":"LinearAxis"},{"attributes":{"data_source":{"id":"3038"},"glyph":{"id":"3039"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3040"},"selection_glyph":null,"view":{"id":"3042"}},"id":"3041","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2684"}},"id":"2688","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2728","type":"Line"},{"attributes":{"below":[{"id":"2297"}],"center":[{"id":"2300"},{"id":"2304"},{"id":"2321"},{"id":"2342"},{"id":"2380"},{"id":"2461"},{"id":"2920"}],"left":[{"id":"2301"}],"plot_width":800,"renderers":[{"id":"2325"},{"id":"2330"},{"id":"2347"},{"id":"2364"},{"id":"2384"},{"id":"2389"},{"id":"2412"},{"id":"2437"},{"id":"2465"},{"id":"2470"},{"id":"2501"},{"id":"2534"},{"id":"2569"},{"id":"2607"},{"id":"2646"},{"id":"2687"},{"id":"2730"},{"id":"2776"},{"id":"2823"},{"id":"2872"},{"id":"2924"},{"id":"2929"},{"id":"2984"},{"id":"3041"}],"title":{"id":"2287"},"toolbar":{"id":"2312"},"x_range":{"id":"2319"},"x_scale":{"id":"2293"},"y_range":{"id":"2320"},"y_scale":{"id":"2295"}},"id":"2286","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2405","type":"Selection"},{"attributes":{},"id":"3036","type":"Selection"},{"attributes":{},"id":"2406","type":"UnionRenderers"},{"attributes":{},"id":"2725","type":"Selection"},{"attributes":{},"id":"3037","type":"UnionRenderers"},{"attributes":{},"id":"2726","type":"UnionRenderers"},{"attributes":{"axis":{"id":"2297"},"ticker":null},"id":"2300","type":"Grid"},{"attributes":{},"id":"2407","type":"Selection"},{"attributes":{},"id":"2408","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2774","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"3095"},"selection_policy":{"id":"3096"}},"id":"3038","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2383","type":"Scatter"},{"attributes":{"data":{"x":[1.63],"y":[82.2]},"selected":{"id":"2338"},"selection_policy":{"id":"2339"}},"id":"2322","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2729","type":"Line"},{"attributes":{"data_source":{"id":"2773"},"glyph":{"id":"2774"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2775"},"selection_glyph":null,"view":{"id":"2777"}},"id":"2776","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"3040","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2324","type":"Scatter"},{"attributes":{"source":{"id":"3038"}},"id":"3042","type":"CDSView"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"2730"}]},"id":"2772","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2323","type":"Scatter"},{"attributes":{"end":6.0,"start":0.75},"id":"2319","type":"Range1d"},{"attributes":{"data_source":{"id":"2327"},"glyph":{"id":"2328"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2329"},"selection_glyph":null,"view":{"id":"2331"}},"id":"2330","type":"GlyphRenderer"},{"attributes":{"text":"TinyBERT","x":2.0,"y":84.6},"id":"2380","type":"Label"},{"attributes":{"source":{"id":"2322"}},"id":"2326","type":"CDSView"},{"attributes":{},"id":"2770","type":"Selection"},{"attributes":{"data_source":{"id":"2322"},"glyph":{"id":"2323"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2324"},"selection_glyph":null,"view":{"id":"2326"}},"id":"2325","type":"GlyphRenderer"},{"attributes":{},"id":"2771","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"2340"},"selection_policy":{"id":"2341"}},"id":"2327","type":"ColumnDataSource"},{"attributes":{},"id":"3095","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2328","type":"Line"},{"attributes":{},"id":"3096","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"2343"},{"id":"2603"},{"id":"2772"}]},"id":"2342","type":"Legend"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"2330"},{"id":"2347"},{"id":"2364"},{"id":"2389"},{"id":"2412"},{"id":"2437"},{"id":"2470"},{"id":"2501"},{"id":"2534"},{"id":"2607"},{"id":"2646"},{"id":"2687"},{"id":"2776"},{"id":"2823"},{"id":"2872"},{"id":"2929"},{"id":"2984"},{"id":"3041"}]},"id":"2343","type":"LegendItem"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"2432"},"selection_policy":{"id":"2433"}},"id":"2409","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2435","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2463","type":"Scatter"},{"attributes":{"text":"Original Soft Movement","x":1.0,"y":84.9414161996943},"id":"2920","type":"Label"},{"attributes":{"data_source":{"id":"2434"},"glyph":{"id":"2435"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2436"},"selection_glyph":null,"view":{"id":"2438"}},"id":"2437","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2329","type":"Line"},{"attributes":{"source":{"id":"2327"}},"id":"2331","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2411","type":"Line"},{"attributes":{"source":{"id":"2409"}},"id":"2413","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2922","type":"Scatter"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"2818"},"selection_policy":{"id":"2819"}},"id":"2773","type":"ColumnDataSource"},{"attributes":{},"id":"2333","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[1.0],"y":[84.9414161996943]},"selected":{"id":"2977"},"selection_policy":{"id":"2978"}},"id":"2921","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"2867"},"selection_policy":{"id":"2868"}},"id":"2820","type":"ColumnDataSource"},{"attributes":{},"id":"2432","type":"Selection"},{"attributes":{},"id":"2298","type":"BasicTicker"},{"attributes":{},"id":"2433","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2775","type":"Line"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"2333"},"ticker":{"id":"2298"}},"id":"2297","type":"LinearAxis"},{"attributes":{"source":{"id":"2773"}},"id":"2777","type":"CDSView"},{"attributes":{"data_source":{"id":"2820"},"glyph":{"id":"2821"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2822"},"selection_glyph":null,"view":{"id":"2824"}},"id":"2823","type":"GlyphRenderer"},{"attributes":{},"id":"2335","type":"BasicTickFormatter"},{"attributes":{},"id":"2293","type":"LinearScale"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"2459"},"selection_policy":{"id":"2460"}},"id":"2434","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2462"},"glyph":{"id":"2463"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2464"},"selection_glyph":null,"view":{"id":"2466"}},"id":"2465","type":"GlyphRenderer"},{"attributes":{},"id":"2818","type":"Selection"},{"attributes":{},"id":"2819","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2436","type":"Line"},{"attributes":{"source":{"id":"2434"}},"id":"2438","type":"CDSView"},{"attributes":{"end":86,"start":79},"id":"2320","type":"Range1d"},{"attributes":{},"id":"2302","type":"BasicTicker"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2532","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2870","type":"Line"},{"attributes":{"source":{"id":"2566"}},"id":"2570","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2821","type":"Line"},{"attributes":{},"id":"2459","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2927","type":"Line"},{"attributes":{},"id":"2460","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2533","type":"Line"},{"attributes":{"axis":{"id":"2301"},"dimension":1,"ticker":null},"id":"2304","type":"Grid"},{"attributes":{"source":{"id":"2531"}},"id":"2535","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2822","type":"Line"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2567","type":"Line"},{"attributes":{"source":{"id":"2820"}},"id":"2824","type":"CDSView"},{"attributes":{"data_source":{"id":"2869"},"glyph":{"id":"2870"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2871"},"selection_glyph":null,"view":{"id":"2873"}},"id":"2872","type":"GlyphRenderer"},{"attributes":{"text":"Matched against Speedup (BERT-base reference)"},"id":"2287","type":"Title"},{"attributes":{"data_source":{"id":"2467"},"glyph":{"id":"2468"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2469"},"selection_glyph":null,"view":{"id":"2471"}},"id":"2470","type":"GlyphRenderer"},{"attributes":{},"id":"2564","type":"Selection"},{"attributes":{},"id":"2980","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2468","type":"Line"},{"attributes":{},"id":"2565","type":"UnionRenderers"},{"attributes":{},"id":"2867","type":"Selection"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"2496"},"selection_policy":{"id":"2497"}},"id":"2467","type":"ColumnDataSource"},{"attributes":{},"id":"2868","type":"UnionRenderers"},{"attributes":{"source":{"id":"2462"}},"id":"2466","type":"CDSView"},{"attributes":{},"id":"2338","type":"Selection"},{"attributes":{},"id":"2339","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.9994637396181068,2.398404835869523,2.9218072258788506,3.4372712841353343],"y":[83.70860927152319,83.04635761589404,82.6795720835456,81.02903718797758]},"selected":{"id":"2601"},"selection_policy":{"id":"2602"}},"id":"2566","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2498"},"glyph":{"id":"2499"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2500"},"selection_glyph":null,"view":{"id":"2502"}},"id":"2501","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"2564"},"selection_policy":{"id":"2565"}},"id":"2531","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2605","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2469","type":"Line"},{"attributes":{},"id":"2340","type":"Selection"},{"attributes":{"source":{"id":"2467"}},"id":"2471","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2568","type":"Line"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"2918"},"selection_policy":{"id":"2919"}},"id":"2869","type":"ColumnDataSource"},{"attributes":{},"id":"2341","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2604"},"glyph":{"id":"2605"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2606"},"selection_glyph":null,"view":{"id":"2608"}},"id":"2607","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2344"},"glyph":{"id":"2345"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2346"},"selection_glyph":null,"view":{"id":"2348"}},"id":"2347","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid filled, BERT-base"},"renderers":[{"id":"2569"}]},"id":"2603","type":"LegendItem"},{"attributes":{},"id":"2310","type":"HelpTool"},{"attributes":{"source":{"id":"2869"}},"id":"2873","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2871","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2345","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2362","type":"Line"},{"attributes":{},"id":"2601","type":"Selection"},{"attributes":{"data_source":{"id":"2566"},"glyph":{"id":"2567"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2568"},"selection_glyph":null,"view":{"id":"2570"}},"id":"2569","type":"GlyphRenderer"},{"attributes":{},"id":"2602","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"2359"},"selection_policy":{"id":"2360"}},"id":"2344","type":"ColumnDataSource"},{"attributes":{},"id":"2494","type":"Selection"},{"attributes":{},"id":"2495","type":"UnionRenderers"},{"attributes":{},"id":"2918","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2346","type":"Line"},{"attributes":{},"id":"2919","type":"UnionRenderers"},{"attributes":{"source":{"id":"2344"}},"id":"2348","type":"CDSView"},{"attributes":{},"id":"2295","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2382","type":"Scatter"},{"attributes":{"data":{"x":[1.9946948904542998,2.0018744207135466,2.002662075247167,2.4005750580789247,2.8975278910432105,2.9707750898055454,2.9812930987603186,3.3300349445225725,3.509180092206226],"y":[83.19918492103923,83.13805399898115,83.03616912888437,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,80.58074375955171,80.539989811513]},"selected":{"id":"2770"},"selection_policy":{"id":"2771"}},"id":"2727","type":"ColumnDataSource"},{"attributes":{},"id":"2496","type":"Selection"},{"attributes":{},"id":"2497","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"2641"},"selection_policy":{"id":"2642"}},"id":"2604","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2727"},"glyph":{"id":"2728"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2729"},"selection_glyph":null,"view":{"id":"2731"}},"id":"2730","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[84.6,84.6]},"selected":{"id":"2979"},"selection_policy":{"id":"2980"}},"id":"2926","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2923","type":"Scatter"},{"attributes":{"data_source":{"id":"2926"},"glyph":{"id":"2927"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2928"},"selection_glyph":null,"view":{"id":"2930"}},"id":"2929","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2644","type":"Line"},{"attributes":{"overlay":{"id":"2311"}},"id":"2307","type":"BoxZoomTool"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"2725"},"selection_policy":{"id":"2726"}},"id":"2684","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2921"}},"id":"2925","type":"CDSView"},{"attributes":{"data_source":{"id":"2921"},"glyph":{"id":"2922"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2923"},"selection_glyph":null,"view":{"id":"2925"}},"id":"2924","type":"GlyphRenderer"},{"attributes":{},"id":"2359","type":"Selection"},{"attributes":{},"id":"2360","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2606","type":"Line"},{"attributes":{"source":{"id":"2604"}},"id":"2608","type":"CDSView"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"3036"},"selection_policy":{"id":"3037"}},"id":"2981","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2643"},"glyph":{"id":"2644"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2645"},"selection_glyph":null,"view":{"id":"2647"}},"id":"2646","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2305"},{"id":"2306"},{"id":"2307"},{"id":"2308"},{"id":"2309"},{"id":"2310"}]},"id":"2312","type":"Toolbar"},{"attributes":{},"id":"2306","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2928","type":"Line"},{"attributes":{"source":{"id":"2926"}},"id":"2930","type":"CDSView"},{"attributes":{"data_source":{"id":"2361"},"glyph":{"id":"2362"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2363"},"selection_glyph":null,"view":{"id":"2365"}},"id":"2364","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2981"},"glyph":{"id":"2982"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2983"},"selection_glyph":null,"view":{"id":"2985"}},"id":"2984","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"2529"},"selection_policy":{"id":"2530"}},"id":"2498","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,6.0],"y":[82.6,82.6]},"selected":{"id":"2378"},"selection_policy":{"id":"2379"}},"id":"2361","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2499","type":"Line"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":84.3},"id":"2461","type":"Label"},{"attributes":{},"id":"2641","type":"Selection"},{"attributes":{},"id":"2642","type":"UnionRenderers"},{"attributes":{},"id":"2308","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2363","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2500","type":"Line"},{"attributes":{"source":{"id":"2361"}},"id":"2365","type":"CDSView"},{"attributes":{"source":{"id":"2498"}},"id":"2502","type":"CDSView"},{"attributes":{"data_source":{"id":"2531"},"glyph":{"id":"2532"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2533"},"selection_glyph":null,"view":{"id":"2535"}},"id":"2534","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.0],"y":[84.6]},"selected":{"id":"2405"},"selection_policy":{"id":"2406"}},"id":"2381","type":"ColumnDataSource"},{"attributes":{},"id":"2309","type":"ResetTool"},{"attributes":{},"id":"2977","type":"Selection"},{"attributes":{},"id":"2978","type":"UnionRenderers"},{"attributes":{"text":"DistilBERT","x":1.63,"y":82.2},"id":"2321","type":"Label"},{"attributes":{"data":{"x":[0,6.0],"y":[83.6,83.6]},"selected":{"id":"2682"},"selection_policy":{"id":"2683"}},"id":"2643","type":"ColumnDataSource"},{"attributes":{},"id":"2378","type":"Selection"},{"attributes":{},"id":"2379","type":"UnionRenderers"},{"attributes":{},"id":"2529","type":"Selection"},{"attributes":{},"id":"2530","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2684"},"glyph":{"id":"2685"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2686"},"selection_glyph":null,"view":{"id":"2688"}},"id":"2687","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2645","type":"Line"},{"attributes":{},"id":"2979","type":"Selection"},{"attributes":{"source":{"id":"2643"}},"id":"2647","type":"CDSView"},{"attributes":{},"id":"2305","type":"PanTool"}],"root_ids":["2286"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"a6959eaa-c511-4794-8a2a-db65c6ba34be","root_ids":["2286"],"roots":{"2286":"1cd0ef4f-6463-4ae4-9533-69e5b9cb6d7c"}}];
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