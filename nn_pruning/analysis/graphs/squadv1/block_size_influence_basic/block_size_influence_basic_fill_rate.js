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
    
      
      
    
      var element = document.getElementById("91995cec-16e9-4728-9af2-78aed7febca3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '91995cec-16e9-4728-9af2-78aed7febca3' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ffff2e89-56bc-4f13-afd8-53fcf2fb453d":{"roots":{"references":[{"attributes":{},"id":"39465","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39539","type":"Line"},{"attributes":{"source":{"id":"39565"}},"id":"39569","type":"CDSView"},{"attributes":{},"id":"39466","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40464","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39540","type":"Line"},{"attributes":{},"id":"40211","type":"UnionRenderers"},{"attributes":{"source":{"id":"39538"}},"id":"39542","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40399","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"39567","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40104","type":"Line"},{"attributes":{},"id":"40212","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39491","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40400","type":"Line"},{"attributes":{},"id":"39562","type":"UnionRenderers"},{"attributes":{"source":{"id":"40398"}},"id":"40402","type":"CDSView"},{"attributes":{"data_source":{"id":"40463"},"glyph":{"id":"40464"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40465"},"selection_glyph":null,"view":{"id":"40467"}},"id":"40466","type":"GlyphRenderer"},{"attributes":{},"id":"39563","type":"Selection"},{"attributes":{"data_source":{"id":"39490"},"glyph":{"id":"39491"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39492"},"selection_glyph":null,"view":{"id":"39494"}},"id":"39493","type":"GlyphRenderer"},{"attributes":{"source":{"id":"40273"}},"id":"40277","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40215","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 32x32"},"renderers":[{"id":"39471"}]},"id":"39489","type":"LegendItem"},{"attributes":{},"id":"40155","type":"Selection"},{"attributes":{},"id":"40460","type":"UnionRenderers"},{"attributes":{},"id":"39486","type":"UnionRenderers"},{"attributes":{},"id":"40154","type":"UnionRenderers"},{"attributes":{},"id":"40461","type":"Selection"},{"attributes":{},"id":"39945","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40216","type":"Line"},{"attributes":{},"id":"39487","type":"Selection"},{"attributes":{},"id":"39376","type":"LinearScale"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39596","type":"Line"},{"attributes":{"source":{"id":"40214"}},"id":"40218","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40103","type":"Line"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"40274","type":"Line"},{"attributes":{"data_source":{"id":"39595"},"glyph":{"id":"39596"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39597"},"selection_glyph":null,"view":{"id":"39599"}},"id":"39598","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Block, bs= 16x16"},"renderers":[{"id":"39568"}]},"id":"39594","type":"LegendItem"},{"attributes":{},"id":"40270","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.5761748890817902,0.46761670524691357,0.344922477816358],"y":[88.34112193061533,87.51569063636161,86.14927876930865]},"selected":{"id":"39592"},"selection_policy":{"id":"39591"}},"id":"39565","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"40528"},"selection_policy":{"id":"40527"}},"id":"40463","type":"ColumnDataSource"},{"attributes":{},"id":"39591","type":"UnionRenderers"},{"attributes":{},"id":"40271","type":"Selection"},{"attributes":{"data_source":{"id":"40102"},"glyph":{"id":"40103"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40104"},"selection_glyph":null,"view":{"id":"40106"}},"id":"40105","type":"GlyphRenderer"},{"attributes":{},"id":"39592","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"39511"},"selection_policy":{"id":"39510"}},"id":"39490","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40465","type":"Line"},{"attributes":{"data_source":{"id":"39565"},"glyph":{"id":"39566"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39567"},"selection_glyph":null,"view":{"id":"39569"}},"id":"39568","type":"GlyphRenderer"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"39409"},"ticker":{"id":"39379"}},"id":"39378","type":"LinearAxis"},{"attributes":{"source":{"id":"40463"}},"id":"40467","type":"CDSView"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39514","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"40155"},"selection_policy":{"id":"40154"}},"id":"40102","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40336","type":"Line"},{"attributes":{"data_source":{"id":"39401"},"glyph":{"id":"39402"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39403"},"selection_glyph":null,"view":{"id":"39405"}},"id":"39404","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"40275","type":"Line"},{"attributes":{"data_source":{"id":"39513"},"glyph":{"id":"39514"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39515"},"selection_glyph":null,"view":{"id":"39517"}},"id":"39516","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.5704405984760802,0.45844937548225306,0.3447129991319444],"y":[88.3744311515211,87.66615713942541,86.75922108224064]},"selected":{"id":"39729"},"selection_policy":{"id":"39728"}},"id":"39694","type":"ColumnDataSource"},{"attributes":{},"id":"40527","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39492","type":"Line"},{"attributes":{"source":{"id":"39490"}},"id":"39494","type":"CDSView"},{"attributes":{},"id":"40528","type":"Selection"},{"attributes":{"data_source":{"id":"40335"},"glyph":{"id":"40336"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40337"},"selection_glyph":null,"view":{"id":"40339"}},"id":"40338","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"39624"},"selection_policy":{"id":"39623"}},"id":"39595","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"39694"},"glyph":{"id":"39695"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39696"},"selection_glyph":null,"view":{"id":"39698"}},"id":"39697","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"40276"}]},"id":"40334","type":"LegendItem"},{"attributes":{},"id":"39510","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"39626"},"glyph":{"id":"39627"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39628"},"selection_glyph":null,"view":{"id":"39630"}},"id":"39629","type":"GlyphRenderer"},{"attributes":{},"id":"40331","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"39692"},"selection_policy":{"id":"39691"}},"id":"39659","type":"ColumnDataSource"},{"attributes":{},"id":"39511","type":"Selection"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"40332"},"selection_policy":{"id":"40331"}},"id":"40273","type":"ColumnDataSource"},{"attributes":{},"id":"40332","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39597","type":"Line"},{"attributes":{},"id":"39374","type":"LinearScale"},{"attributes":{"source":{"id":"39595"}},"id":"39599","type":"CDSView"},{"attributes":{},"id":"39623","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"39563"},"selection_policy":{"id":"39562"}},"id":"39538","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"39536"},"selection_policy":{"id":"39535"}},"id":"39513","type":"ColumnDataSource"},{"attributes":{},"id":"39624","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"40396"},"selection_policy":{"id":"40395"}},"id":"40335","type":"ColumnDataSource"},{"attributes":{"axis_label":"F1","formatter":{"id":"39407"},"ticker":{"id":"39383"}},"id":"39382","type":"LinearAxis"},{"attributes":{"data_source":{"id":"39538"},"glyph":{"id":"39539"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39540"},"selection_glyph":null,"view":{"id":"39542"}},"id":"39541","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39515","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"40461"},"selection_policy":{"id":"40460"}},"id":"40398","type":"ColumnDataSource"},{"attributes":{"source":{"id":"39513"}},"id":"39517","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"39657"},"selection_policy":{"id":"39656"}},"id":"39626","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40337","type":"Line"},{"attributes":{"source":{"id":"40335"}},"id":"40339","type":"CDSView"},{"attributes":{"data_source":{"id":"40398"},"glyph":{"id":"40399"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40400"},"selection_glyph":null,"view":{"id":"40402"}},"id":"40401","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39627","type":"Line"},{"attributes":{},"id":"39535","type":"UnionRenderers"},{"attributes":{},"id":"39379","type":"BasicTicker"},{"attributes":{},"id":"39536","type":"Selection"},{"attributes":{},"id":"40395","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39628","type":"Line"},{"attributes":{"source":{"id":"39626"}},"id":"39630","type":"CDSView"},{"attributes":{"data_source":{"id":"39659"},"glyph":{"id":"39660"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39661"},"selection_glyph":null,"view":{"id":"39663"}},"id":"39662","type":"GlyphRenderer"},{"attributes":{},"id":"40396","type":"Selection"},{"attributes":{"axis":{"id":"39378"},"ticker":null},"id":"39381","type":"Grid"},{"attributes":{},"id":"39656","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39772","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39773","type":"Line"},{"attributes":{},"id":"39946","type":"Selection"},{"attributes":{"source":{"id":"39401"}},"id":"39405","type":"CDSView"},{"attributes":{},"id":"39657","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39813","type":"Line"},{"attributes":{"source":{"id":"39771"}},"id":"39775","type":"CDSView"},{"attributes":{"data_source":{"id":"39812"},"glyph":{"id":"39813"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39814"},"selection_glyph":null,"view":{"id":"39816"}},"id":"39815","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.38802083333333326,0.3719618055555556,0.2564019097222221,0.24131944444444442,0.18184558256172845,0.17980806327160492],"y":[87.36378709007766,87.30735739624531,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"39487"},"selection_policy":{"id":"39486"}},"id":"39468","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39417","type":"Line"},{"attributes":{"source":{"id":"39694"}},"id":"39698","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39998","type":"Line"},{"attributes":{"data_source":{"id":"39416"},"glyph":{"id":"39417"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39418"},"selection_glyph":null,"view":{"id":"39420"}},"id":"39419","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39660","type":"Line"},{"attributes":{"source":{"id":"40048"}},"id":"40052","type":"CDSView"},{"attributes":{"data_source":{"id":"40157"},"glyph":{"id":"40158"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40159"},"selection_glyph":null,"view":{"id":"40161"}},"id":"40160","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39949","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"40212"},"selection_policy":{"id":"40211"}},"id":"40157","type":"ColumnDataSource"},{"attributes":{},"id":"39809","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"39429"},"selection_policy":{"id":"39428"}},"id":"39416","type":"ColumnDataSource"},{"attributes":{"source":{"id":"40102"}},"id":"40106","type":"CDSView"},{"attributes":{},"id":"39810","type":"Selection"},{"attributes":{"data_source":{"id":"39468"},"glyph":{"id":"39469"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39470"},"selection_glyph":null,"view":{"id":"39472"}},"id":"39471","type":"GlyphRenderer"},{"attributes":{"click_policy":"hide","items":[{"id":"39415"},{"id":"39431"},{"id":"39489"},{"id":"39594"},{"id":"39731"},{"id":"39900"},{"id":"40101"},{"id":"40334"}],"location":"bottom_right"},"id":"39414","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39661","type":"Line"},{"attributes":{"source":{"id":"39659"}},"id":"39663","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39950","type":"Line"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"39419"},{"id":"39435"},{"id":"39452"},{"id":"39493"},{"id":"39516"},{"id":"39541"},{"id":"39598"},{"id":"39629"},{"id":"39662"},{"id":"39735"},{"id":"39774"},{"id":"39815"},{"id":"39904"},{"id":"39951"},{"id":"40000"},{"id":"40105"},{"id":"40160"},{"id":"40217"},{"id":"40338"},{"id":"40401"},{"id":"40466"}]},"id":"39431","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"39403","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39433","type":"Line"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"39695","type":"Line"},{"attributes":{"data_source":{"id":"39997"},"glyph":{"id":"39998"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39999"},"selection_glyph":null,"view":{"id":"40001"}},"id":"40000","type":"GlyphRenderer"},{"attributes":{"source":{"id":"39948"}},"id":"39952","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39418","type":"Line"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"39368","type":"Title"},{"attributes":{"source":{"id":"39416"}},"id":"39420","type":"CDSView"},{"attributes":{"source":{"id":"39855"}},"id":"39859","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"39853"},"selection_policy":{"id":"39852"}},"id":"39812","type":"ColumnDataSource"},{"attributes":{},"id":"39691","type":"UnionRenderers"},{"attributes":{},"id":"39994","type":"UnionRenderers"},{"attributes":{},"id":"39692","type":"Selection"},{"attributes":{},"id":"39995","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39814","type":"Line"},{"attributes":{"source":{"id":"39812"}},"id":"39816","type":"CDSView"},{"attributes":{},"id":"39428","type":"UnionRenderers"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"39856","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39733","type":"Line"},{"attributes":{},"id":"39429","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"39696","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"40050","type":"Line"},{"attributes":{},"id":"39852","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.25071068751959147,0.15786624249116865,0.11725962603533713,0.11616964693422671,0.06489395800931963,0.04466981063654396,0.0340861803219642],"y":[88.66263407974378,88.07603620459668,87.64967103979136,87.59923644792065,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"39412"},"selection_policy":{"id":"39411"}},"id":"39401","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"40046"},"selection_policy":{"id":"40045"}},"id":"39997","type":"ColumnDataSource"},{"attributes":{},"id":"39853","type":"Selection"},{"attributes":{"data_source":{"id":"39732"},"glyph":{"id":"39733"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39734"},"selection_glyph":null,"view":{"id":"39736"}},"id":"39735","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"39392","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"40273"},"glyph":{"id":"40274"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40275"},"selection_glyph":null,"view":{"id":"40277"}},"id":"40276","type":"GlyphRenderer"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"39402","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39999","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 8x8"},"renderers":[{"id":"39697"}]},"id":"39731","type":"LegendItem"},{"attributes":{"data_source":{"id":"39432"},"glyph":{"id":"39433"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39434"},"selection_glyph":null,"view":{"id":"39436"}},"id":"39435","type":"GlyphRenderer"},{"attributes":{"source":{"id":"39997"}},"id":"40001","type":"CDSView"},{"attributes":{"label":{"value":"Unstructured Soft Movement Pruning"},"renderers":[{"id":"39404"}]},"id":"39415","type":"LegendItem"},{"attributes":{},"id":"39390","type":"ResetTool"},{"attributes":{},"id":"39728","type":"UnionRenderers"},{"attributes":{"axis":{"id":"39382"},"dimension":1,"ticker":null},"id":"39385","type":"Grid"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39902","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"39857","type":"Line"},{"attributes":{},"id":"39729","type":"Selection"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"39566","type":"Line"},{"attributes":{},"id":"40045","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"40048"},"glyph":{"id":"40049"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40050"},"selection_glyph":null,"view":{"id":"40052"}},"id":"40051","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"39447"},"selection_policy":{"id":"39446"}},"id":"39432","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"39392"}},"id":"39388","type":"BoxZoomTool"},{"attributes":{},"id":"39389","type":"SaveTool"},{"attributes":{},"id":"40046","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39434","type":"Line"},{"attributes":{},"id":"39391","type":"HelpTool"},{"attributes":{"source":{"id":"39432"}},"id":"39436","type":"CDSView"},{"attributes":{},"id":"39407","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0.576706686137635,0.4656780855155285,0.352672435619213],"y":[88.58172107792693,88.02284574429551,87.31499809166372]},"selected":{"id":"39898"},"selection_policy":{"id":"39897"}},"id":"39855","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Block, bs= 4x4"},"renderers":[{"id":"39858"}]},"id":"39900","type":"LegendItem"},{"attributes":{},"id":"39386","type":"PanTool"},{"attributes":{"below":[{"id":"39378"}],"center":[{"id":"39381"},{"id":"39385"},{"id":"39414"}],"left":[{"id":"39382"}],"plot_width":800,"renderers":[{"id":"39404"},{"id":"39419"},{"id":"39435"},{"id":"39452"},{"id":"39471"},{"id":"39493"},{"id":"39516"},{"id":"39541"},{"id":"39568"},{"id":"39598"},{"id":"39629"},{"id":"39662"},{"id":"39697"},{"id":"39735"},{"id":"39774"},{"id":"39815"},{"id":"39858"},{"id":"39904"},{"id":"39951"},{"id":"40000"},{"id":"40051"},{"id":"40105"},{"id":"40160"},{"id":"40217"},{"id":"40276"},{"id":"40338"},{"id":"40401"},{"id":"40466"}],"title":{"id":"39368"},"toolbar":{"id":"39393"},"x_range":{"id":"39400"},"x_scale":{"id":"39374"},"y_range":{"id":"39372"},"y_scale":{"id":"39376"}},"id":"39367","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"39897","type":"UnionRenderers"},{"attributes":{},"id":"39446","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"39769"},"selection_policy":{"id":"39768"}},"id":"39732","type":"ColumnDataSource"},{"attributes":{},"id":"39387","type":"WheelZoomTool"},{"attributes":{},"id":"39898","type":"Selection"},{"attributes":{"data_source":{"id":"39855"},"glyph":{"id":"39856"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39857"},"selection_glyph":null,"view":{"id":"39859"}},"id":"39858","type":"GlyphRenderer"},{"attributes":{"source":{"id":"40157"}},"id":"40161","type":"CDSView"},{"attributes":{},"id":"39447","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"39810"},"selection_policy":{"id":"39809"}},"id":"39771","type":"ColumnDataSource"},{"attributes":{},"id":"39383","type":"BasicTicker"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"40051"}]},"id":"40101","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"39386"},{"id":"39387"},{"id":"39388"},{"id":"39389"},{"id":"39390"},{"id":"39391"}]},"id":"39393","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39734","type":"Line"},{"attributes":{"source":{"id":"39732"}},"id":"39736","type":"CDSView"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"40049","type":"Line"},{"attributes":{},"id":"40098","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"39771"},"glyph":{"id":"39772"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39773"},"selection_glyph":null,"view":{"id":"39775"}},"id":"39774","type":"GlyphRenderer"},{"attributes":{},"id":"39409","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"39449"},"glyph":{"id":"39450"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39451"},"selection_glyph":null,"view":{"id":"39453"}},"id":"39452","type":"GlyphRenderer"},{"attributes":{},"id":"40099","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"39466"},"selection_policy":{"id":"39465"}},"id":"39449","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"39946"},"selection_policy":{"id":"39945"}},"id":"39901","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"39901"},"glyph":{"id":"39902"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39903"},"selection_glyph":null,"view":{"id":"39905"}},"id":"39904","type":"GlyphRenderer"},{"attributes":{},"id":"39768","type":"UnionRenderers"},{"attributes":{},"id":"39372","type":"DataRange1d"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"40099"},"selection_policy":{"id":"40098"}},"id":"40048","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"39995"},"selection_policy":{"id":"39994"}},"id":"39948","type":"ColumnDataSource"},{"attributes":{},"id":"39411","type":"UnionRenderers"},{"attributes":{"source":{"id":"39449"}},"id":"39453","type":"CDSView"},{"attributes":{},"id":"39769","type":"Selection"},{"attributes":{"source":{"id":"39468"}},"id":"39472","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39451","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40158","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39450","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"39903","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"40271"},"selection_policy":{"id":"40270"}},"id":"40214","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"39470","type":"Line"},{"attributes":{"source":{"id":"39901"}},"id":"39905","type":"CDSView"},{"attributes":{},"id":"39412","type":"Selection"},{"attributes":{"data_source":{"id":"39948"},"glyph":{"id":"39949"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39950"},"selection_glyph":null,"view":{"id":"39952"}},"id":"39951","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"39469","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"40159","type":"Line"},{"attributes":{"end":0.65},"id":"39400","type":"Range1d"},{"attributes":{"data_source":{"id":"40214"},"glyph":{"id":"40215"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40216"},"selection_glyph":null,"view":{"id":"40218"}},"id":"40217","type":"GlyphRenderer"}],"root_ids":["39367"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"ffff2e89-56bc-4f13-afd8-53fcf2fb453d","root_ids":["39367"],"roots":{"39367":"91995cec-16e9-4728-9af2-78aed7febca3"}}];
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