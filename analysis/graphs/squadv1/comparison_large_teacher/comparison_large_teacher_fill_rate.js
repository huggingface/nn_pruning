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
    
      
      
    
      var element = document.getElementById("a09593f3-1333-4e27-ae90-fa37ecf91e52");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a09593f3-1333-4e27-ae90-fa37ecf91e52' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5b22506a-447d-4573-82c3-972a5286f133":{"roots":{"references":[{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"26987"},"selection_policy":{"id":"26986"}},"id":"26973","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"26973"},"glyph":{"id":"26974"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26975"},"selection_glyph":null,"view":{"id":"26977"}},"id":"26976","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"26974","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"26989"},{"id":"27249"},{"id":"27418"}],"location":"bottom_right"},"id":"26988","type":"Legend"},{"attributes":{"text":"DistilBERT","x":0.5,"y":86.9},"id":"26967","type":"Label"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27056","type":"Line"},{"attributes":{},"id":"27005","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"26975","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27081","type":"Line"},{"attributes":{},"id":"27006","type":"Selection"},{"attributes":{"source":{"id":"26973"}},"id":"26977","type":"CDSView"},{"attributes":{"data_source":{"id":"26990"},"glyph":{"id":"26991"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26992"},"selection_glyph":null,"view":{"id":"26994"}},"id":"26993","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"27080"},"glyph":{"id":"27081"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27082"},"selection_glyph":null,"view":{"id":"27084"}},"id":"27083","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27057","type":"Line"},{"attributes":{"source":{"id":"27055"}},"id":"27059","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27008","type":"Line"},{"attributes":{},"id":"27078","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27033","type":"Line"},{"attributes":{},"id":"27079","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27009","type":"Line"},{"attributes":{"axis_label":"F1","formatter":{"id":"26979"},"ticker":{"id":"26949"}},"id":"26948","type":"LinearAxis"},{"attributes":{"source":{"id":"27007"}},"id":"27011","type":"CDSView"},{"attributes":{},"id":"26979","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"27054"},"selection_policy":{"id":"27053"}},"id":"27032","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"26958"}},"id":"26954","type":"BoxZoomTool"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"27106"},"selection_policy":{"id":"27105"}},"id":"27080","type":"ColumnDataSource"},{"attributes":{},"id":"26940","type":"LinearScale"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27114","type":"Line"},{"attributes":{},"id":"27024","type":"UnionRenderers"},{"attributes":{},"id":"27025","type":"Selection"},{"attributes":{},"id":"26956","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27082","type":"Line"},{"attributes":{},"id":"26981","type":"BasicTickFormatter"},{"attributes":{},"id":"26942","type":"LinearScale"},{"attributes":{"source":{"id":"27080"}},"id":"27084","type":"CDSView"},{"attributes":{},"id":"26984","type":"UnionRenderers"},{"attributes":{},"id":"26985","type":"Selection"},{"attributes":{"axis":{"id":"26944"},"ticker":null},"id":"26947","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"27029","type":"Scatter"},{"attributes":{"data":{"x":[0.5],"y":[87.5]},"selected":{"id":"27052"},"selection_policy":{"id":"27051"}},"id":"27027","type":"ColumnDataSource"},{"attributes":{},"id":"27105","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"27109","type":"Scatter"},{"attributes":{},"id":"27106","type":"Selection"},{"attributes":{"data_source":{"id":"27032"},"glyph":{"id":"27033"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27034"},"selection_glyph":null,"view":{"id":"27036"}},"id":"27035","type":"GlyphRenderer"},{"attributes":{"source":{"id":"27027"}},"id":"27031","type":"CDSView"},{"attributes":{"data_source":{"id":"27027"},"glyph":{"id":"27028"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27029"},"selection_glyph":null,"view":{"id":"27031"}},"id":"27030","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[90.3]},"selected":{"id":"27141"},"selection_policy":{"id":"27140"}},"id":"27108","type":"ColumnDataSource"},{"attributes":{},"id":"26986","type":"UnionRenderers"},{"attributes":{},"id":"26987","type":"Selection"},{"attributes":{},"id":"26949","type":"BasicTicker"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"27079"},"selection_policy":{"id":"27078"}},"id":"27055","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"27055"},"glyph":{"id":"27056"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27057"},"selection_glyph":null,"view":{"id":"27059"}},"id":"27058","type":"GlyphRenderer"},{"attributes":{},"id":"26953","type":"WheelZoomTool"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"27143"},"selection_policy":{"id":"27142"}},"id":"27113","type":"ColumnDataSource"},{"attributes":{},"id":"26957","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27034","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"27110","type":"Scatter"},{"attributes":{"data_source":{"id":"27113"},"glyph":{"id":"27114"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27115"},"selection_glyph":null,"view":{"id":"27117"}},"id":"27116","type":"GlyphRenderer"},{"attributes":{"source":{"id":"27032"}},"id":"27036","type":"CDSView"},{"attributes":{"end":0.65},"id":"26966","type":"Range1d"},{"attributes":{},"id":"26955","type":"SaveTool"},{"attributes":{"source":{"id":"27108"}},"id":"27112","type":"CDSView"},{"attributes":{"data_source":{"id":"27108"},"glyph":{"id":"27109"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27110"},"selection_glyph":null,"view":{"id":"27112"}},"id":"27111","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"27248"},"selection_policy":{"id":"27247"}},"id":"27212","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26952"},{"id":"26953"},{"id":"26954"},{"id":"26955"},{"id":"26956"},{"id":"26957"}]},"id":"26959","type":"Toolbar"},{"attributes":{"data_source":{"id":"27144"},"glyph":{"id":"27145"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27146"},"selection_glyph":null,"view":{"id":"27148"}},"id":"27147","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27115","type":"Line"},{"attributes":{"source":{"id":"27113"}},"id":"27117","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"27176"},"selection_policy":{"id":"27175"}},"id":"27144","type":"ColumnDataSource"},{"attributes":{},"id":"27051","type":"UnionRenderers"},{"attributes":{},"id":"27052","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"26991","type":"Line"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"26976"},{"id":"26993"},{"id":"27010"},{"id":"27035"},{"id":"27058"},{"id":"27083"},{"id":"27116"},{"id":"27147"},{"id":"27180"},{"id":"27253"},{"id":"27292"},{"id":"27333"},{"id":"27422"},{"id":"27469"},{"id":"27518"}]},"id":"26989","type":"LegendItem"},{"attributes":{},"id":"27053","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"27025"},"selection_policy":{"id":"27024"}},"id":"27007","type":"ColumnDataSource"},{"attributes":{},"id":"27054","type":"Selection"},{"attributes":{"data_source":{"id":"27212"},"glyph":{"id":"27213"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27214"},"selection_glyph":null,"view":{"id":"27216"}},"id":"27215","type":"GlyphRenderer"},{"attributes":{},"id":"27140","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"27006"},"selection_policy":{"id":"27005"}},"id":"26990","type":"ColumnDataSource"},{"attributes":{},"id":"27141","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"26992","type":"Line"},{"attributes":{"source":{"id":"26990"}},"id":"26994","type":"CDSView"},{"attributes":{"data_source":{"id":"27007"},"glyph":{"id":"27008"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27009"},"selection_glyph":null,"view":{"id":"27011"}},"id":"27010","type":"GlyphRenderer"},{"attributes":{},"id":"27142","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"27288"},"selection_policy":{"id":"27287"}},"id":"27250","type":"ColumnDataSource"},{"attributes":{},"id":"27143","type":"Selection"},{"attributes":{"data_source":{"id":"27250"},"glyph":{"id":"27251"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27252"},"selection_glyph":null,"view":{"id":"27254"}},"id":"27253","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27251","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27290","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27331","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27252","type":"Line"},{"attributes":{"source":{"id":"27250"}},"id":"27254","type":"CDSView"},{"attributes":{"data_source":{"id":"27289"},"glyph":{"id":"27290"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27291"},"selection_glyph":null,"view":{"id":"27293"}},"id":"27292","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27420","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"27465"},"selection_policy":{"id":"27464"}},"id":"27419","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"27419"},"glyph":{"id":"27420"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27421"},"selection_glyph":null,"view":{"id":"27423"}},"id":"27422","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.45493344907407407,0.356571903935185,0.29078052662037035,0.23759403935185186,0.19692201967592593],"y":[90.26969803251558,89.81145528969563,89.00029318511001,88.30880074775172,87.15966661496869]},"selected":{"id":"27417"},"selection_policy":{"id":"27416"}},"id":"27373","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27467","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27178","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27516","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27145","type":"Line"},{"attributes":{},"id":"27287","type":"UnionRenderers"},{"attributes":{},"id":"27288","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27421","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27146","type":"Line"},{"attributes":{"source":{"id":"27419"}},"id":"27423","type":"CDSView"},{"attributes":{"data_source":{"id":"27466"},"glyph":{"id":"27467"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27468"},"selection_glyph":null,"view":{"id":"27470"}},"id":"27469","type":"GlyphRenderer"},{"attributes":{"source":{"id":"27144"}},"id":"27148","type":"CDSView"},{"attributes":{"data_source":{"id":"27177"},"glyph":{"id":"27178"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27179"},"selection_glyph":null,"view":{"id":"27181"}},"id":"27180","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"27329"},"selection_policy":{"id":"27328"}},"id":"27289","type":"ColumnDataSource"},{"attributes":{},"id":"27175","type":"UnionRenderers"},{"attributes":{},"id":"27176","type":"Selection"},{"attributes":{},"id":"27464","type":"UnionRenderers"},{"attributes":{},"id":"27465","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27291","type":"Line"},{"attributes":{"source":{"id":"27289"}},"id":"27293","type":"CDSView"},{"attributes":{"data_source":{"id":"27330"},"glyph":{"id":"27331"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27332"},"selection_glyph":null,"view":{"id":"27334"}},"id":"27333","type":"GlyphRenderer"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"26934","type":"Title"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"27211"},"selection_policy":{"id":"27210"}},"id":"27177","type":"ColumnDataSource"},{"attributes":{"source":{"id":"27212"}},"id":"27216","type":"CDSView"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"27514"},"selection_policy":{"id":"27513"}},"id":"27466","type":"ColumnDataSource"},{"attributes":{},"id":"27328","type":"UnionRenderers"},{"attributes":{},"id":"27329","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27179","type":"Line"},{"attributes":{"source":{"id":"27177"}},"id":"27181","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27468","type":"Line"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27213","type":"Line"},{"attributes":{"source":{"id":"27466"}},"id":"27470","type":"CDSView"},{"attributes":{"data_source":{"id":"27515"},"glyph":{"id":"27516"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27517"},"selection_glyph":null,"view":{"id":"27519"}},"id":"27518","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"26944"}],"center":[{"id":"26947"},{"id":"26951"},{"id":"26967"},{"id":"26988"},{"id":"27026"},{"id":"27107"}],"left":[{"id":"26948"}],"plot_width":800,"renderers":[{"id":"26971"},{"id":"26976"},{"id":"26993"},{"id":"27010"},{"id":"27030"},{"id":"27035"},{"id":"27058"},{"id":"27083"},{"id":"27111"},{"id":"27116"},{"id":"27147"},{"id":"27180"},{"id":"27215"},{"id":"27253"},{"id":"27292"},{"id":"27333"},{"id":"27376"},{"id":"27422"},{"id":"27469"},{"id":"27518"}],"title":{"id":"26934"},"toolbar":{"id":"26959"},"x_range":{"id":"26966"},"x_scale":{"id":"26940"},"y_range":{"id":"26938"},"y_scale":{"id":"26942"}},"id":"26933","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"26958","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"26968"},"glyph":{"id":"26969"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26970"},"selection_glyph":null,"view":{"id":"26972"}},"id":"26971","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"27372"},"selection_policy":{"id":"27371"}},"id":"27330","type":"ColumnDataSource"},{"attributes":{},"id":"27210","type":"UnionRenderers"},{"attributes":{},"id":"26952","type":"PanTool"},{"attributes":{"source":{"id":"27373"}},"id":"27377","type":"CDSView"},{"attributes":{},"id":"27211","type":"Selection"},{"attributes":{},"id":"27513","type":"UnionRenderers"},{"attributes":{},"id":"27514","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27332","type":"Line"},{"attributes":{"source":{"id":"27330"}},"id":"27334","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27374","type":"Line"},{"attributes":{},"id":"26938","type":"DataRange1d"},{"attributes":{},"id":"26945","type":"BasicTicker"},{"attributes":{},"id":"27416","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27214","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"27565"},"selection_policy":{"id":"27564"}},"id":"27515","type":"ColumnDataSource"},{"attributes":{},"id":"27371","type":"UnionRenderers"},{"attributes":{},"id":"27372","type":"Selection"},{"attributes":{"data_source":{"id":"27373"},"glyph":{"id":"27374"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27375"},"selection_glyph":null,"view":{"id":"27377"}},"id":"27376","type":"GlyphRenderer"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"26981"},"ticker":{"id":"26945"}},"id":"26944","type":"LinearAxis"},{"attributes":{"label":{"value":"BERT-base teacher"},"renderers":[{"id":"27215"}]},"id":"27249","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"27517","type":"Line"},{"attributes":{},"id":"27417","type":"Selection"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":90.3},"id":"27107","type":"Label"},{"attributes":{"source":{"id":"27515"}},"id":"27519","type":"CDSView"},{"attributes":{},"id":"27247","type":"UnionRenderers"},{"attributes":{},"id":"27248","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"27028","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27375","type":"Line"},{"attributes":{},"id":"27564","type":"UnionRenderers"},{"attributes":{},"id":"27565","type":"Selection"},{"attributes":{"data":{"x":[0.5],"y":[86.9]},"selected":{"id":"26985"},"selection_policy":{"id":"26984"}},"id":"26968","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"26948"},"dimension":1,"ticker":null},"id":"26951","type":"Grid"},{"attributes":{"label":{"value":"BERT-large teacher"},"renderers":[{"id":"27376"}]},"id":"27418","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26970","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26969","type":"Scatter"},{"attributes":{"source":{"id":"26968"}},"id":"26972","type":"CDSView"},{"attributes":{"text":"TinyBERT","x":0.5,"y":87.5},"id":"27026","type":"Label"}],"root_ids":["26933"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"5b22506a-447d-4573-82c3-972a5286f133","root_ids":["26933"],"roots":{"26933":"a09593f3-1333-4e27-ae90-fa37ecf91e52"}}];
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