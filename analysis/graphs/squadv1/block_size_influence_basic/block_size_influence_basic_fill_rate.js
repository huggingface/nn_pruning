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
    
      
      
    
      var element = document.getElementById("78b8ed6e-1586-4e26-a4b9-118007d7805a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '78b8ed6e-1586-4e26-a4b9-118007d7805a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"831e93e4-dcc1-47e8-aaf0-af64a634b359":{"roots":{"references":[{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"35113","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34712","type":"Line"},{"attributes":{"source":{"id":"34662"}},"id":"34666","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"35178","type":"Line"},{"attributes":{"source":{"id":"34762"}},"id":"34766","type":"CDSView"},{"attributes":{"label":{"value":"Unstructured Soft Movement Pruning"},"renderers":[{"id":"34118"}]},"id":"34129","type":"LegendItem"},{"attributes":{"source":{"id":"34408"}},"id":"34412","type":"CDSView"},{"attributes":{"data_source":{"id":"34711"},"glyph":{"id":"34712"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34713"},"selection_glyph":null,"view":{"id":"34715"}},"id":"34714","type":"GlyphRenderer"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34409","type":"Line"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34116","type":"Line"},{"attributes":{},"id":"34093","type":"BasicTicker"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"34123"},"ticker":{"id":"34093"}},"id":"34092","type":"LinearAxis"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34929","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34527","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34872","type":"Line"},{"attributes":{},"id":"34406","type":"UnionRenderers"},{"attributes":{"source":{"id":"34569"}},"id":"34573","type":"CDSView"},{"attributes":{},"id":"34407","type":"Selection"},{"attributes":{},"id":"34709","type":"UnionRenderers"},{"attributes":{},"id":"34710","type":"Selection"},{"attributes":{},"id":"35110","type":"UnionRenderers"},{"attributes":{},"id":"35111","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34528","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34873","type":"Line"},{"attributes":{"source":{"id":"34526"}},"id":"34530","type":"CDSView"},{"attributes":{"source":{"id":"34871"}},"id":"34875","type":"CDSView"},{"attributes":{"data_source":{"id":"34928"},"glyph":{"id":"34929"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34930"},"selection_glyph":null,"view":{"id":"34932"}},"id":"34931","type":"GlyphRenderer"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34570","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34447","type":"Line"},{"attributes":{},"id":"34123","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34410","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"34761"},"selection_policy":{"id":"34760"}},"id":"34711","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"35176"},"selection_policy":{"id":"35175"}},"id":"35112","type":"ColumnDataSource"},{"attributes":{},"id":"34090","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34764","type":"Line"},{"attributes":{},"id":"34567","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"34446"},"glyph":{"id":"34447"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34448"},"selection_glyph":null,"view":{"id":"34450"}},"id":"34449","type":"GlyphRenderer"},{"attributes":{},"id":"34568","type":"Selection"},{"attributes":{},"id":"34926","type":"UnionRenderers"},{"attributes":{},"id":"34927","type":"Selection"},{"attributes":{"label":{"value":"Block, bs= 8x8"},"renderers":[{"id":"34411"}]},"id":"34445","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34713","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"35114","type":"Line"},{"attributes":{"source":{"id":"34711"}},"id":"34715","type":"CDSView"},{"attributes":{"source":{"id":"35112"}},"id":"35116","type":"CDSView"},{"attributes":{"data_source":{"id":"35177"},"glyph":{"id":"35178"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35179"},"selection_glyph":null,"view":{"id":"35181"}},"id":"35180","type":"GlyphRenderer"},{"attributes":{},"id":"34105","type":"HelpTool"},{"attributes":{},"id":"34443","type":"UnionRenderers"},{"attributes":{},"id":"34444","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34616","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"34986"},"selection_policy":{"id":"34985"}},"id":"34928","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"34106","type":"BoxAnnotation"},{"attributes":{"source":{"id":"34115"}},"id":"34119","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34571","type":"Line"},{"attributes":{"source":{"id":"34987"}},"id":"34991","type":"CDSView"},{"attributes":{},"id":"34760","type":"UnionRenderers"},{"attributes":{},"id":"34761","type":"Selection"},{"attributes":{},"id":"35175","type":"UnionRenderers"},{"attributes":{},"id":"35176","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34930","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 4x4"},"renderers":[{"id":"34572"}]},"id":"34614","type":"LegendItem"},{"attributes":{"source":{"id":"34928"}},"id":"34932","type":"CDSView"},{"attributes":{"click_policy":"hide","items":[{"id":"34129"},{"id":"34145"},{"id":"34203"},{"id":"34308"},{"id":"34445"},{"id":"34614"},{"id":"34815"},{"id":"35048"}],"location":"bottom_right"},"id":"34128","type":"Legend"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34988","type":"Line"},{"attributes":{"data":{"x":[0.3551132767288775,0.22577770845389655,0.1314994906201774],"y":[88.21768668110452,87.37325813950282,85.93146728512978]},"selected":{"id":"34613"},"selection_policy":{"id":"34612"}},"id":"34569","type":"ColumnDataSource"},{"attributes":{},"id":"34612","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"34484"},"selection_policy":{"id":"34483"}},"id":"34446","type":"ColumnDataSource"},{"attributes":{},"id":"34613","type":"Selection"},{"attributes":{"data_source":{"id":"34569"},"glyph":{"id":"34570"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34571"},"selection_glyph":null,"view":{"id":"34573"}},"id":"34572","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34817","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"35243"},"selection_policy":{"id":"35242"}},"id":"35177","type":"ColumnDataSource"},{"attributes":{},"id":"34985","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34486","type":"Line"},{"attributes":{},"id":"34986","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"34568"},"selection_policy":{"id":"34567"}},"id":"34526","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.3628472222222222,0.31168619791666674,0.279712818287037,0.2539966724537037,0.21717664930555558,0.1933774594907408],"y":[88.72194531479171,88.26868699204444,88.06386432532665,87.68464122182475,87.22907143184382,86.75497848244157]},"selected":{"id":"35047"},"selection_policy":{"id":"35046"}},"id":"34987","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"34765"}]},"id":"34815","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"35179","type":"Line"},{"attributes":{"data":{"x":[0.3063324940057448,0.3040029855422032,0.1914404292165497,0.11370071364037782,0.08189950165925208,0.06421700230351202,0.04477844709231538,0.04466981063654396,0.0340861803219642],"y":[90.24019516114679,90.15245565366504,89.78322305629628,88.66465208237972,88.11360890595924,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"34127"},"selection_policy":{"id":"34126"}},"id":"34115","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34448","type":"Line"},{"attributes":{"source":{"id":"35177"}},"id":"35181","type":"CDSView"},{"attributes":{"source":{"id":"34446"}},"id":"34450","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34100"},{"id":"34101"},{"id":"34102"},{"id":"34103"},{"id":"34104"},{"id":"34105"}]},"id":"34107","type":"Toolbar"},{"attributes":{"data_source":{"id":"34485"},"glyph":{"id":"34486"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34487"},"selection_glyph":null,"view":{"id":"34489"}},"id":"34488","type":"GlyphRenderer"},{"attributes":{},"id":"34813","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34763","type":"Line"},{"attributes":{},"id":"34814","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"34661"},"selection_policy":{"id":"34660"}},"id":"34615","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"35050","type":"Line"},{"attributes":{"data_source":{"id":"34615"},"glyph":{"id":"34616"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34617"},"selection_glyph":null,"view":{"id":"34619"}},"id":"34618","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.24473741319444442,0.22031129436728392,0.21446397569444442,0.18393735532407407,0.169071903935185,0.15074628665123457,0.1279357156635803,0.12381847993827155,0.11965904706790131],"y":[88.06903108265608,87.56487698206614,87.3881230572442,87.14755939306319,86.51098653495667,86.4116267700138,86.11992485005756,85.69020560735045,85.26341062121247]},"selected":{"id":"34814"},"selection_policy":{"id":"34813"}},"id":"34762","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34989","type":"Line"},{"attributes":{},"id":"35242","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34663","type":"Line"},{"attributes":{},"id":"35243","type":"Selection"},{"attributes":{"data_source":{"id":"35049"},"glyph":{"id":"35050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35051"},"selection_glyph":null,"view":{"id":"35053"}},"id":"35052","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34664","type":"Line"},{"attributes":{},"id":"34483","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"34990"}]},"id":"35048","type":"LegendItem"},{"attributes":{},"id":"34484","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34617","type":"Line"},{"attributes":{"source":{"id":"34615"}},"id":"34619","type":"CDSView"},{"attributes":{},"id":"34277","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"34662"},"glyph":{"id":"34663"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34664"},"selection_glyph":null,"view":{"id":"34666"}},"id":"34665","type":"GlyphRenderer"},{"attributes":{},"id":"34126","type":"UnionRenderers"},{"attributes":{},"id":"35046","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"34870"},"selection_policy":{"id":"34869"}},"id":"34816","type":"ColumnDataSource"},{"attributes":{},"id":"35047","type":"Selection"},{"attributes":{"data_source":{"id":"34816"},"glyph":{"id":"34817"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34818"},"selection_glyph":null,"view":{"id":"34820"}},"id":"34819","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"34987"},"glyph":{"id":"34988"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34989"},"selection_glyph":null,"view":{"id":"34991"}},"id":"34990","type":"GlyphRenderer"},{"attributes":{},"id":"34278","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"34927"},"selection_policy":{"id":"34926"}},"id":"34871","type":"ColumnDataSource"},{"attributes":{"end":0.65},"id":"34114","type":"Range1d"},{"attributes":{},"id":"34127","type":"Selection"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"34525"},"selection_policy":{"id":"34524"}},"id":"34485","type":"ColumnDataSource"},{"attributes":{},"id":"34660","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34818","type":"Line"},{"attributes":{},"id":"34661","type":"Selection"},{"attributes":{"source":{"id":"34816"}},"id":"34820","type":"CDSView"},{"attributes":{"data_source":{"id":"34871"},"glyph":{"id":"34872"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34873"},"selection_glyph":null,"view":{"id":"34875"}},"id":"34874","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34487","type":"Line"},{"attributes":{"source":{"id":"34485"}},"id":"34489","type":"CDSView"},{"attributes":{"data_source":{"id":"34526"},"glyph":{"id":"34527"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34528"},"selection_glyph":null,"view":{"id":"34530"}},"id":"34529","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34117","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"35111"},"selection_policy":{"id":"35110"}},"id":"35049","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35112"},"glyph":{"id":"35113"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35114"},"selection_glyph":null,"view":{"id":"35116"}},"id":"35115","type":"GlyphRenderer"},{"attributes":{},"id":"34088","type":"LinearScale"},{"attributes":{"source":{"id":"35049"}},"id":"35053","type":"CDSView"},{"attributes":{},"id":"34524","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"34710"},"selection_policy":{"id":"34709"}},"id":"34662","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"35051","type":"Line"},{"attributes":{},"id":"34525","type":"Selection"},{"attributes":{},"id":"34869","type":"UnionRenderers"},{"attributes":{},"id":"34870","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34131","type":"Line"},{"attributes":{"data_source":{"id":"34130"},"glyph":{"id":"34131"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34132"},"selection_glyph":null,"view":{"id":"34134"}},"id":"34133","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"34144"},"selection_policy":{"id":"34143"}},"id":"34130","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"34133"},{"id":"34149"},{"id":"34166"},{"id":"34207"},{"id":"34230"},{"id":"34255"},{"id":"34312"},{"id":"34343"},{"id":"34376"},{"id":"34449"},{"id":"34488"},{"id":"34529"},{"id":"34618"},{"id":"34665"},{"id":"34714"},{"id":"34819"},{"id":"34874"},{"id":"34931"},{"id":"35052"},{"id":"35115"},{"id":"35180"}]},"id":"34145","type":"LegendItem"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34147","type":"Line"},{"attributes":{},"id":"34201","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34132","type":"Line"},{"attributes":{},"id":"34202","type":"Selection"},{"attributes":{"source":{"id":"34130"}},"id":"34134","type":"CDSView"},{"attributes":{"data_source":{"id":"34115"},"glyph":{"id":"34116"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34117"},"selection_glyph":null,"view":{"id":"34119"}},"id":"34118","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"34309"},"glyph":{"id":"34310"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34311"},"selection_glyph":null,"view":{"id":"34313"}},"id":"34312","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34310","type":"Line"},{"attributes":{"axis":{"id":"34096"},"dimension":1,"ticker":null},"id":"34099","type":"Grid"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34205","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"34226"},"selection_policy":{"id":"34225"}},"id":"34204","type":"ColumnDataSource"},{"attributes":{},"id":"34306","type":"UnionRenderers"},{"attributes":{},"id":"34307","type":"Selection"},{"attributes":{"data_source":{"id":"34204"},"glyph":{"id":"34205"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34206"},"selection_glyph":null,"view":{"id":"34208"}},"id":"34207","type":"GlyphRenderer"},{"attributes":{},"id":"34143","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"34407"},"selection_policy":{"id":"34406"}},"id":"34373","type":"ColumnDataSource"},{"attributes":{},"id":"34144","type":"Selection"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34280","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34228","type":"Line"},{"attributes":{"data_source":{"id":"34227"},"glyph":{"id":"34228"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34229"},"selection_glyph":null,"view":{"id":"34231"}},"id":"34230","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34206","type":"Line"},{"attributes":{"source":{"id":"34204"}},"id":"34208","type":"CDSView"},{"attributes":{"data":{"x":[0.353609061535494,0.22401861496913578,0.13401210455246915],"y":[88.02730364897265,86.84949475139184,85.16652519097626]},"selected":{"id":"34444"},"selection_policy":{"id":"34443"}},"id":"34408","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"34146"},"glyph":{"id":"34147"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34148"},"selection_glyph":null,"view":{"id":"34150"}},"id":"34149","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[88.5,88.5]},"selected":{"id":"34339"},"selection_policy":{"id":"34338"}},"id":"34309","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"34408"},"glyph":{"id":"34409"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34410"},"selection_glyph":null,"view":{"id":"34412"}},"id":"34411","type":"GlyphRenderer"},{"attributes":{},"id":"34097","type":"BasicTicker"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34164","type":"Line"},{"attributes":{},"id":"34101","type":"WheelZoomTool"},{"attributes":{"data":{"x":[0.3578679591049382,0.23011007426697527],"y":[87.65780769915727,86.57822332702295]},"selected":{"id":"34307"},"selection_policy":{"id":"34306"}},"id":"34279","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"34340"},"glyph":{"id":"34341"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34342"},"selection_glyph":null,"view":{"id":"34344"}},"id":"34343","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"34162"},"selection_policy":{"id":"34161"}},"id":"34146","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34374","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34148","type":"Line"},{"attributes":{},"id":"34225","type":"UnionRenderers"},{"attributes":{"source":{"id":"34146"}},"id":"34150","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34311","type":"Line"},{"attributes":{},"id":"34226","type":"Selection"},{"attributes":{"data_source":{"id":"34279"},"glyph":{"id":"34280"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34281"},"selection_glyph":null,"view":{"id":"34283"}},"id":"34282","type":"GlyphRenderer"},{"attributes":{"source":{"id":"34309"}},"id":"34313","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34375","type":"Line"},{"attributes":{"data_source":{"id":"34762"},"glyph":{"id":"34763"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34764"},"selection_glyph":null,"view":{"id":"34766"}},"id":"34765","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.38802083333333326,0.3719618055555556,0.2564019097222221,0.24131944444444442,0.18184558256172845,0.17980806327160492],"y":[87.36378709007766,87.30735739624531,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"34202"},"selection_policy":{"id":"34201"}},"id":"34182","type":"ColumnDataSource"},{"attributes":{},"id":"34161","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"34106"}},"id":"34102","type":"BoxZoomTool"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"34251"},"selection_policy":{"id":"34250"}},"id":"34227","type":"ColumnDataSource"},{"attributes":{},"id":"34162","type":"Selection"},{"attributes":{"below":[{"id":"34092"}],"center":[{"id":"34095"},{"id":"34099"},{"id":"34128"}],"left":[{"id":"34096"}],"plot_width":800,"renderers":[{"id":"34118"},{"id":"34133"},{"id":"34149"},{"id":"34166"},{"id":"34185"},{"id":"34207"},{"id":"34230"},{"id":"34255"},{"id":"34282"},{"id":"34312"},{"id":"34343"},{"id":"34376"},{"id":"34411"},{"id":"34449"},{"id":"34488"},{"id":"34529"},{"id":"34572"},{"id":"34618"},{"id":"34665"},{"id":"34714"},{"id":"34765"},{"id":"34819"},{"id":"34874"},{"id":"34931"},{"id":"34990"},{"id":"35052"},{"id":"35115"},{"id":"35180"}],"title":{"id":"34082"},"toolbar":{"id":"34107"},"x_range":{"id":"34114"},"x_scale":{"id":"34088"},"y_range":{"id":"34086"},"y_scale":{"id":"34090"}},"id":"34081","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34253","type":"Line"},{"attributes":{},"id":"34338","type":"UnionRenderers"},{"attributes":{"axis_label":"F1","formatter":{"id":"34121"},"ticker":{"id":"34097"}},"id":"34096","type":"LinearAxis"},{"attributes":{"data_source":{"id":"34182"},"glyph":{"id":"34183"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34184"},"selection_glyph":null,"view":{"id":"34186"}},"id":"34185","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Block, bs= 16x16"},"renderers":[{"id":"34282"}]},"id":"34308","type":"LegendItem"},{"attributes":{"data_source":{"id":"34252"},"glyph":{"id":"34253"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34254"},"selection_glyph":null,"view":{"id":"34256"}},"id":"34255","type":"GlyphRenderer"},{"attributes":{},"id":"34339","type":"Selection"},{"attributes":{},"id":"34103","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34229","type":"Line"},{"attributes":{"source":{"id":"34227"}},"id":"34231","type":"CDSView"},{"attributes":{},"id":"34104","type":"ResetTool"},{"attributes":{"data_source":{"id":"34163"},"glyph":{"id":"34164"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34165"},"selection_glyph":null,"view":{"id":"34167"}},"id":"34166","type":"GlyphRenderer"},{"attributes":{"text":"F1 against Fill_rate (BERT-base reference)"},"id":"34082","type":"Title"},{"attributes":{"data":{"x":[0,0.65],"y":[87.5,87.5]},"selected":{"id":"34372"},"selection_policy":{"id":"34371"}},"id":"34340","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"34181"},"selection_policy":{"id":"34180"}},"id":"34163","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34341","type":"Line"},{"attributes":{},"id":"34100","type":"PanTool"},{"attributes":{"source":{"id":"34182"}},"id":"34186","type":"CDSView"},{"attributes":{},"id":"34250","type":"UnionRenderers"},{"attributes":{},"id":"34251","type":"Selection"},{"attributes":{"axis":{"id":"34092"},"ticker":null},"id":"34095","type":"Grid"},{"attributes":{},"id":"34086","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34165","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34342","type":"Line"},{"attributes":{"source":{"id":"34163"}},"id":"34167","type":"CDSView"},{"attributes":{"source":{"id":"34340"}},"id":"34344","type":"CDSView"},{"attributes":{"data_source":{"id":"34373"},"glyph":{"id":"34374"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34375"},"selection_glyph":null,"view":{"id":"34377"}},"id":"34376","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34183","type":"Line"},{"attributes":{"data":{"x":[0,0.65],"y":[86.5,86.5]},"selected":{"id":"34278"},"selection_policy":{"id":"34277"}},"id":"34252","type":"ColumnDataSource"},{"attributes":{},"id":"34180","type":"UnionRenderers"},{"attributes":{},"id":"34371","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34281","type":"Line"},{"attributes":{},"id":"34181","type":"Selection"},{"attributes":{},"id":"34372","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"34254","type":"Line"},{"attributes":{"source":{"id":"34252"}},"id":"34256","type":"CDSView"},{"attributes":{},"id":"34121","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"34279"}},"id":"34283","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34184","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 32x32"},"renderers":[{"id":"34185"}]},"id":"34203","type":"LegendItem"},{"attributes":{"source":{"id":"34373"}},"id":"34377","type":"CDSView"}],"root_ids":["34081"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"831e93e4-dcc1-47e8-aaf0-af64a634b359","root_ids":["34081"],"roots":{"34081":"78b8ed6e-1586-4e26-a4b9-118007d7805a"}}];
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