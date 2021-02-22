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
    
      
      
    
      var element = document.getElementById("e3cbc37c-a02c-4eb2-bd04-8c69c976db95");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e3cbc37c-a02c-4eb2-bd04-8c69c976db95' but no matching script tag was found.")
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
                    
                  var docs_json = '{"164b75fa-d28d-4915-8982-e3a98b8b79c6":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2477","type":"Line"},{"attributes":{"text":"Tinybert","x":0.5,"y":84.6},"id":"2196","type":"Label"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2521"},"selection_policy":{"id":"2522"}},"id":"2476","type":"ColumnDataSource"},{"attributes":{},"id":"2344","type":"Selection"},{"attributes":{"data_source":{"id":"2476"},"glyph":{"id":"2477"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2478"},"selection_glyph":null,"view":{"id":"2480"}},"id":"2479","type":"GlyphRenderer"},{"attributes":{},"id":"2345","type":"UnionRenderers"},{"attributes":{},"id":"2022","type":"LinearScale"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2524","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2097","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2573","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2122","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2478","type":"Line"},{"attributes":{"source":{"id":"2476"}},"id":"2480","type":"CDSView"},{"attributes":{"data_source":{"id":"2523"},"glyph":{"id":"2524"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2525"},"selection_glyph":null,"view":{"id":"2527"}},"id":"2526","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2098","type":"Line"},{"attributes":{"source":{"id":"2096"}},"id":"2100","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2142"},"selection_policy":{"id":"2143"}},"id":"2121","type":"ColumnDataSource"},{"attributes":{},"id":"2057","type":"BasicTickFormatter"},{"attributes":{},"id":"2025","type":"BasicTicker"},{"attributes":{},"id":"2522","type":"UnionRenderers"},{"attributes":{},"id":"2114","type":"UnionRenderers"},{"attributes":{},"id":"2521","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2388","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2347","type":"Line"},{"attributes":{},"id":"2113","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2348","type":"Line"},{"attributes":{"source":{"id":"2346"}},"id":"2350","type":"CDSView"},{"attributes":{"data_source":{"id":"2387"},"glyph":{"id":"2388"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2389"},"selection_glyph":null,"view":{"id":"2391"}},"id":"2390","type":"GlyphRenderer"},{"attributes":{},"id":"2059","type":"Selection"},{"attributes":{},"id":"2060","type":"UnionRenderers"},{"attributes":{},"id":"2386","type":"UnionRenderers"},{"attributes":{"end":0.75},"id":"2046","type":"Range1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2117","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2118","type":"Scatter"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"2066"},{"id":"2082"},{"id":"2099"},{"id":"2124"},{"id":"2147"},{"id":"2172"},{"id":"2205"},{"id":"2236"},{"id":"2269"},{"id":"2310"},{"id":"2349"},{"id":"2390"},{"id":"2479"},{"id":"2526"},{"id":"2575"}]},"id":"2078","type":"LegendItem"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"2140"},"selection_policy":{"id":"2141"}},"id":"2116","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"2570"},"selection_policy":{"id":"2571"}},"id":"2523","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2198","type":"Scatter"},{"attributes":{},"id":"2385","type":"Selection"},{"attributes":{"data_source":{"id":"2121"},"glyph":{"id":"2122"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2123"},"selection_glyph":null,"view":{"id":"2125"}},"id":"2124","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2116"}},"id":"2120","type":"CDSView"},{"attributes":{"data_source":{"id":"2116"},"glyph":{"id":"2117"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2118"},"selection_glyph":null,"view":{"id":"2120"}},"id":"2119","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2525","type":"Line"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"2229"},"selection_policy":{"id":"2230"}},"id":"2197","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2523"}},"id":"2527","type":"CDSView"},{"attributes":{},"id":"2055","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2572"},"glyph":{"id":"2573"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2574"},"selection_glyph":null,"view":{"id":"2576"}},"id":"2575","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2145","type":"Line"},{"attributes":{"axis":{"id":"2024"},"ticker":null},"id":"2027","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2146","type":"Line"},{"attributes":{},"id":"2571","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2144"},"glyph":{"id":"2145"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2146"},"selection_glyph":null,"view":{"id":"2148"}},"id":"2147","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2024"}],"center":[{"id":"2027"},{"id":"2031"},{"id":"2061"},{"id":"2115"},{"id":"2196"},{"id":"2301"}],"left":[{"id":"2028"}],"plot_width":800,"renderers":[{"id":"2051"},{"id":"2066"},{"id":"2082"},{"id":"2099"},{"id":"2119"},{"id":"2124"},{"id":"2147"},{"id":"2172"},{"id":"2200"},{"id":"2205"},{"id":"2236"},{"id":"2269"},{"id":"2305"},{"id":"2310"},{"id":"2349"},{"id":"2390"},{"id":"2433"},{"id":"2479"},{"id":"2526"},{"id":"2575"}],"title":{"id":"2014"},"toolbar":{"id":"2039"},"x_range":{"id":"2046"},"x_scale":{"id":"2020"},"y_range":{"id":"2047"},"y_scale":{"id":"2022"}},"id":"2013","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2123","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"2428"},"selection_policy":{"id":"2429"}},"id":"2387","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2079"},"glyph":{"id":"2080"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2081"},"selection_glyph":null,"view":{"id":"2083"}},"id":"2082","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2121"}},"id":"2125","type":"CDSView"},{"attributes":{"source":{"id":"2430"}},"id":"2434","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2064","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2038","type":"BoxAnnotation"},{"attributes":{},"id":"2570","type":"Selection"},{"attributes":{"data_source":{"id":"2063"},"glyph":{"id":"2064"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2065"},"selection_glyph":null,"view":{"id":"2067"}},"id":"2066","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2389","type":"Line"},{"attributes":{"source":{"id":"2387"}},"id":"2391","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2076"},"selection_policy":{"id":"2077"}},"id":"2063","type":"ColumnDataSource"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2431","type":"Line"},{"attributes":{"text":"Distilbert","x":0.5034571936567231,"y":82.2},"id":"2115","type":"Label"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"2094"},"selection_policy":{"id":"2095"}},"id":"2079","type":"ColumnDataSource"},{"attributes":{},"id":"2141","type":"UnionRenderers"},{"attributes":{},"id":"2429","type":"UnionRenderers"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":84.3},"id":"2301","type":"Label"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"2621"},"selection_policy":{"id":"2622"}},"id":"2572","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2065","type":"Line"},{"attributes":{},"id":"2140","type":"Selection"},{"attributes":{},"id":"2428","type":"Selection"},{"attributes":{"source":{"id":"2063"}},"id":"2067","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"2113"},"selection_policy":{"id":"2114"}},"id":"2096","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Original Soft Movement"},"renderers":[{"id":"2051"}]},"id":"2062","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2574","type":"Line"},{"attributes":{"source":{"id":"2572"}},"id":"2576","type":"CDSView"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"2014","type":"Title"},{"attributes":{},"id":"2077","type":"UnionRenderers"},{"attributes":{},"id":"2142","type":"Selection"},{"attributes":{},"id":"2622","type":"UnionRenderers"},{"attributes":{},"id":"2076","type":"Selection"},{"attributes":{},"id":"2143","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.906903863388052,0.750694155218002,0.34656273890574396,0.247365299956507,0.186029553957332,0.131177042042143,0.0947351805073981,0.0602396365698101,0.0402606146574505,0.0284787168842778,0.0214990126796872,0.01685626988373],"y":[84.9414161996943,84.9210392256749,83.7289862455425,83.331635252165,82.41467142129389,81.7320427916454,81.13092205807429,80.6826286296485,79.9898115129903,79.4294447274579,79.1441670911869,78.7671930718288]},"selected":{"id":"2059"},"selection_policy":{"id":"2060"}},"id":"2048","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2432","type":"Line"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2049","type":"Line"},{"attributes":{},"id":"2621","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2080","type":"Line"},{"attributes":{"label":{"value":"Hybrid pruning, BERT-base"},"renderers":[{"id":"2433"}]},"id":"2475","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2081","type":"Line"},{"attributes":{"source":{"id":"2048"}},"id":"2052","type":"CDSView"},{"attributes":{"source":{"id":"2079"}},"id":"2083","type":"CDSView"},{"attributes":{},"id":"2474","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2096"},"glyph":{"id":"2097"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2098"},"selection_glyph":null,"view":{"id":"2100"}},"id":"2099","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2050","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"2062"},{"id":"2078"},{"id":"2475"}],"location":"top_left"},"id":"2061","type":"Legend"},{"attributes":{},"id":"2473","type":"Selection"},{"attributes":{},"id":"2095","type":"UnionRenderers"},{"attributes":{},"id":"2094","type":"Selection"},{"attributes":{},"id":"2020","type":"LinearScale"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"2167"},"selection_policy":{"id":"2168"}},"id":"2144","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2144"}},"id":"2148","type":"CDSView"},{"attributes":{"data_source":{"id":"2169"},"glyph":{"id":"2170"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2171"},"selection_glyph":null,"view":{"id":"2173"}},"id":"2172","type":"GlyphRenderer"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"2055"},"ticker":{"id":"2025"}},"id":"2024","type":"LinearAxis"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2170","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2032"},{"id":"2033"},{"id":"2034"},{"id":"2035"},{"id":"2036"},{"id":"2037"}]},"id":"2039","type":"Toolbar"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2231"},"selection_policy":{"id":"2232"}},"id":"2202","type":"ColumnDataSource"},{"attributes":{},"id":"2168","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2267","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2234","type":"Line"},{"attributes":{"end":86,"start":79},"id":"2047","type":"Range1d"},{"attributes":{},"id":"2167","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2235","type":"Line"},{"attributes":{"axis":{"id":"2028"},"dimension":1,"ticker":null},"id":"2031","type":"Grid"},{"attributes":{"source":{"id":"2233"}},"id":"2237","type":"CDSView"},{"attributes":{"data_source":{"id":"2266"},"glyph":{"id":"2267"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2268"},"selection_glyph":null,"view":{"id":"2270"}},"id":"2269","type":"GlyphRenderer"},{"attributes":{},"id":"2036","type":"ResetTool"},{"attributes":{},"id":"2035","type":"SaveTool"},{"attributes":{},"id":"2265","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"2194"},"selection_policy":{"id":"2195"}},"id":"2169","type":"ColumnDataSource"},{"attributes":{},"id":"2033","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2203","type":"Line"},{"attributes":{},"id":"2264","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2171","type":"Line"},{"attributes":{"data_source":{"id":"2048"},"glyph":{"id":"2049"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2050"},"selection_glyph":null,"view":{"id":"2052"}},"id":"2051","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2169"}},"id":"2173","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2303","type":"Scatter"},{"attributes":{},"id":"2195","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"2299"},"selection_policy":{"id":"2300"}},"id":"2266","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2302"}},"id":"2306","type":"CDSView"},{"attributes":{},"id":"2194","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2268","type":"Line"},{"attributes":{"source":{"id":"2266"}},"id":"2270","type":"CDSView"},{"attributes":{"overlay":{"id":"2038"}},"id":"2034","type":"BoxZoomTool"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[84.3]},"selected":{"id":"2342"},"selection_policy":{"id":"2343"}},"id":"2302","type":"ColumnDataSource"},{"attributes":{},"id":"2037","type":"HelpTool"},{"attributes":{},"id":"2300","type":"UnionRenderers"},{"attributes":{},"id":"2032","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2199","type":"Scatter"},{"attributes":{"data_source":{"id":"2202"},"glyph":{"id":"2203"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2204"},"selection_glyph":null,"view":{"id":"2206"}},"id":"2205","type":"GlyphRenderer"},{"attributes":{},"id":"2299","type":"Selection"},{"attributes":{"source":{"id":"2197"}},"id":"2201","type":"CDSView"},{"attributes":{"data_source":{"id":"2197"},"glyph":{"id":"2198"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2199"},"selection_glyph":null,"view":{"id":"2201"}},"id":"2200","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2430"},"glyph":{"id":"2431"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2432"},"selection_glyph":null,"view":{"id":"2434"}},"id":"2433","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2233"},"glyph":{"id":"2234"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2235"},"selection_glyph":null,"view":{"id":"2237"}},"id":"2236","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2204","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2304","type":"Scatter"},{"attributes":{"source":{"id":"2202"}},"id":"2206","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"2264"},"selection_policy":{"id":"2265"}},"id":"2233","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2308","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"2344"},"selection_policy":{"id":"2345"}},"id":"2307","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2302"},"glyph":{"id":"2303"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2304"},"selection_glyph":null,"view":{"id":"2306"}},"id":"2305","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2307"},"glyph":{"id":"2308"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2309"},"selection_glyph":null,"view":{"id":"2311"}},"id":"2310","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.34212239583333326,0.2529296875,0.18093532986111116,0.12286603009259256],"y":[83.70860927152319,83.04635761589404,82.68976057055526,81.02903718797758]},"selected":{"id":"2473"},"selection_policy":{"id":"2474"}},"id":"2430","type":"ColumnDataSource"},{"attributes":{"axis_label":"Matched","formatter":{"id":"2057"},"ticker":{"id":"2029"}},"id":"2028","type":"LinearAxis"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"2385"},"selection_policy":{"id":"2386"}},"id":"2346","type":"ColumnDataSource"},{"attributes":{},"id":"2230","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"2309","type":"Line"},{"attributes":{},"id":"2229","type":"Selection"},{"attributes":{"source":{"id":"2307"}},"id":"2311","type":"CDSView"},{"attributes":{"data_source":{"id":"2346"},"glyph":{"id":"2347"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2348"},"selection_glyph":null,"view":{"id":"2350"}},"id":"2349","type":"GlyphRenderer"},{"attributes":{},"id":"2231","type":"Selection"},{"attributes":{},"id":"2029","type":"BasicTicker"},{"attributes":{},"id":"2232","type":"UnionRenderers"},{"attributes":{},"id":"2343","type":"UnionRenderers"},{"attributes":{},"id":"2342","type":"Selection"}],"root_ids":["2013"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"164b75fa-d28d-4915-8982-e3a98b8b79c6","root_ids":["2013"],"roots":{"2013":"e3cbc37c-a02c-4eb2-bd04-8c69c976db95"}}];
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