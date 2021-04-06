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
    
      
      
    
      var element = document.getElementById("9ed2f150-56ef-4dce-81e7-fa6fa9040a03");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9ed2f150-56ef-4dce-81e7-fa6fa9040a03' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d868ea7d-d766-4aea-9448-60a7846787b4":{"roots":{"references":[{"attributes":{},"id":"12321","type":"Selection"},{"attributes":{},"id":"12322","type":"UnionRenderers"},{"attributes":{},"id":"12052","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12290","type":"Line"},{"attributes":{"source":{"id":"12288"}},"id":"12292","type":"CDSView"},{"attributes":{"axis":{"id":"12054"},"ticker":null},"id":"12057","type":"Grid"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12362","type":"Line"},{"attributes":{"data_source":{"id":"12361"},"glyph":{"id":"12362"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12363"},"selection_glyph":null,"view":{"id":"12365"}},"id":"12364","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Original Soft Movement"},"renderers":[{"id":"12326"}]},"id":"12360","type":"LegendItem"},{"attributes":{},"id":"12358","type":"Selection"},{"attributes":{},"id":"12359","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.2685667438271605,0.2664870273919753,0.1792655285493826,0.12386067708333348,0.11340181327160492,0.1114064911265431,0.11082175925925919,0.08217592592592593,0.06458574459876543,0.06432050540123457],"y":[83.19918492103923,83.13805399898115,82.27203260315844,81.67091186958737,81.37544574630667,81.29393785022924,81.07997962302598,80.58074375955171,80.539989811513,79.97962302598064]},"selected":{"id":"12527"},"selection_policy":{"id":"12528"}},"id":"12484","type":"ColumnDataSource"},{"attributes":{},"id":"12050","type":"LinearScale"},{"attributes":{"end":0.75},"id":"12076","type":"Range1d"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"12398"},"selection_policy":{"id":"12399"}},"id":"12361","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"12484"},"glyph":{"id":"12485"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12486"},"selection_glyph":null,"view":{"id":"12488"}},"id":"12487","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12401","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"12482"},"selection_policy":{"id":"12483"}},"id":"12441","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12363","type":"Line"},{"attributes":{"source":{"id":"12361"}},"id":"12365","type":"CDSView"},{"attributes":{"data_source":{"id":"12400"},"glyph":{"id":"12401"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12402"},"selection_glyph":null,"view":{"id":"12404"}},"id":"12403","type":"GlyphRenderer"},{"attributes":{},"id":"12398","type":"Selection"},{"attributes":{},"id":"12399","type":"UnionRenderers"},{"attributes":{},"id":"12055","type":"BasicTicker"},{"attributes":{},"id":"12066","type":"ResetTool"},{"attributes":{"end":86,"start":79},"id":"12077","type":"Range1d"},{"attributes":{"axis":{"id":"12058"},"dimension":1,"ticker":null},"id":"12061","type":"Grid"},{"attributes":{"axis_label":"Matched","formatter":{"id":"12092"},"ticker":{"id":"12059"}},"id":"12058","type":"LinearAxis"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"12439"},"selection_policy":{"id":"12440"}},"id":"12400","type":"ColumnDataSource"},{"attributes":{},"id":"12067","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12402","type":"Line"},{"attributes":{},"id":"12062","type":"PanTool"},{"attributes":{"source":{"id":"12400"}},"id":"12404","type":"CDSView"},{"attributes":{"data_source":{"id":"12441"},"glyph":{"id":"12442"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12443"},"selection_glyph":null,"view":{"id":"12445"}},"id":"12444","type":"GlyphRenderer"},{"attributes":{},"id":"12063","type":"WheelZoomTool"},{"attributes":{"axis_label":"Fill_rate","formatter":{"id":"12090"},"ticker":{"id":"12055"}},"id":"12054","type":"LinearAxis"},{"attributes":{"overlay":{"id":"12068"}},"id":"12064","type":"BoxZoomTool"},{"attributes":{},"id":"12439","type":"Selection"},{"attributes":{},"id":"12065","type":"SaveTool"},{"attributes":{},"id":"12440","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12062"},{"id":"12063"},{"id":"12064"},{"id":"12065"},{"id":"12066"},{"id":"12067"}]},"id":"12069","type":"Toolbar"},{"attributes":{},"id":"12059","type":"BasicTicker"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"12164"},"selection_policy":{"id":"12165"}},"id":"12143","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12144","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12167","type":"Line"},{"attributes":{"data_source":{"id":"12138"},"glyph":{"id":"12139"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12140"},"selection_glyph":null,"view":{"id":"12142"}},"id":"12141","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12081","type":"Scatter"},{"attributes":{},"id":"12097","type":"Selection"},{"attributes":{"data_source":{"id":"12166"},"glyph":{"id":"12167"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12168"},"selection_glyph":null,"view":{"id":"12170"}},"id":"12169","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12442","type":"Line"},{"attributes":{},"id":"12098","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12145","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12225","type":"Line"},{"attributes":{"source":{"id":"12484"}},"id":"12488","type":"CDSView"},{"attributes":{"source":{"id":"12143"}},"id":"12147","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"12253"},"selection_policy":{"id":"12254"}},"id":"12224","type":"ColumnDataSource"},{"attributes":{},"id":"12624","type":"Selection"},{"attributes":{"source":{"id":"12219"}},"id":"12223","type":"CDSView"},{"attributes":{},"id":"12625","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"12224"},"glyph":{"id":"12225"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12226"},"selection_glyph":null,"view":{"id":"12228"}},"id":"12227","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12443","type":"Line"},{"attributes":{"data":{"x":[0.750694155218002,0.34656273890574396,0.247365299956507,0.186029553957332,0.131177042042143,0.0947351805073981,0.0602396365698101,0.0402606146574505,0.0284787168842778,0.0214990126796872,0.01685626988373],"y":[84.9210392256749,83.7289862455425,83.331635252165,82.41467142129389,81.7320427916454,81.13092205807429,80.6826286296485,79.9898115129903,79.4294447274579,79.1441670911869,78.7671930718288]},"selected":{"id":"12358"},"selection_policy":{"id":"12359"}},"id":"12323","type":"ColumnDataSource"},{"attributes":{"source":{"id":"12441"}},"id":"12445","type":"CDSView"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12485","type":"Line"},{"attributes":{"data_source":{"id":"12255"},"glyph":{"id":"12256"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12257"},"selection_glyph":null,"view":{"id":"12259"}},"id":"12258","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.5034571936567231],"y":[82.2]},"selected":{"id":"12095"},"selection_policy":{"id":"12096"}},"id":"12079","type":"ColumnDataSource"},{"attributes":{"text":"Matched against Fill_rate (BERT-base reference)"},"id":"12044","type":"Title"},{"attributes":{"data_source":{"id":"12079"},"glyph":{"id":"12080"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12081"},"selection_glyph":null,"view":{"id":"12083"}},"id":"12082","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12289","type":"Line"},{"attributes":{"source":{"id":"12084"}},"id":"12088","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12226","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"12100"},{"id":"12360"},{"id":"12529"}],"location":"bottom_right"},"id":"12099","type":"Legend"},{"attributes":{"source":{"id":"12224"}},"id":"12228","type":"CDSView"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12627","type":"Line"},{"attributes":{"source":{"id":"12323"}},"id":"12327","type":"CDSView"},{"attributes":{},"id":"12162","type":"Selection"},{"attributes":{},"id":"12482","type":"Selection"},{"attributes":{"label":{"value":"Reference Matched=84.6 BERT-base"},"renderers":[{"id":"12087"},{"id":"12104"},{"id":"12121"},{"id":"12146"},{"id":"12169"},{"id":"12194"},{"id":"12227"},{"id":"12258"},{"id":"12291"},{"id":"12364"},{"id":"12403"},{"id":"12444"},{"id":"12533"},{"id":"12580"},{"id":"12629"}]},"id":"12100","type":"LegendItem"},{"attributes":{},"id":"12163","type":"UnionRenderers"},{"attributes":{},"id":"12483","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"12675"},"selection_policy":{"id":"12676"}},"id":"12626","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12628","type":"Line"},{"attributes":{"source":{"id":"12626"}},"id":"12630","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"12068","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"12101"},"glyph":{"id":"12102"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12103"},"selection_glyph":null,"view":{"id":"12105"}},"id":"12104","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12102","type":"Line"},{"attributes":{"source":{"id":"12577"}},"id":"12581","type":"CDSView"},{"attributes":{},"id":"12164","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12119","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12531","type":"Line"},{"attributes":{},"id":"12165","type":"UnionRenderers"},{"attributes":{"below":[{"id":"12054"}],"center":[{"id":"12057"},{"id":"12061"},{"id":"12078"},{"id":"12099"},{"id":"12137"},{"id":"12218"}],"left":[{"id":"12058"}],"plot_width":800,"renderers":[{"id":"12082"},{"id":"12087"},{"id":"12104"},{"id":"12121"},{"id":"12141"},{"id":"12146"},{"id":"12169"},{"id":"12194"},{"id":"12222"},{"id":"12227"},{"id":"12258"},{"id":"12291"},{"id":"12326"},{"id":"12364"},{"id":"12403"},{"id":"12444"},{"id":"12487"},{"id":"12533"},{"id":"12580"},{"id":"12629"}],"title":{"id":"12044"},"toolbar":{"id":"12069"},"x_range":{"id":"12076"},"x_scale":{"id":"12050"},"y_range":{"id":"12077"},"y_scale":{"id":"12052"}},"id":"12043","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"12323"},"glyph":{"id":"12324"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12325"},"selection_glyph":null,"view":{"id":"12327"}},"id":"12326","type":"GlyphRenderer"},{"attributes":{},"id":"12251","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"12116"},"selection_policy":{"id":"12117"}},"id":"12101","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12486","type":"Line"},{"attributes":{},"id":"12252","type":"UnionRenderers"},{"attributes":{},"id":"12675","type":"Selection"},{"attributes":{},"id":"12676","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"12530"},"glyph":{"id":"12531"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12532"},"selection_glyph":null,"view":{"id":"12534"}},"id":"12533","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12103","type":"Line"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"12487"}]},"id":"12529","type":"LegendItem"},{"attributes":{"source":{"id":"12101"}},"id":"12105","type":"CDSView"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":0.25333333333333335,"y":84.3},"id":"12218","type":"Label"},{"attributes":{"data_source":{"id":"12084"},"glyph":{"id":"12085"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12086"},"selection_glyph":null,"view":{"id":"12088"}},"id":"12087","type":"GlyphRenderer"},{"attributes":{},"id":"12253","type":"Selection"},{"attributes":{},"id":"12090","type":"BasicTickFormatter"},{"attributes":{},"id":"12254","type":"UnionRenderers"},{"attributes":{},"id":"12527","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12139","type":"Scatter"},{"attributes":{},"id":"12528","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"12189"},"selection_policy":{"id":"12190"}},"id":"12166","type":"ColumnDataSource"},{"attributes":{},"id":"12116","type":"Selection"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12192","type":"Line"},{"attributes":{},"id":"12117","type":"UnionRenderers"},{"attributes":{"text":"TinyBERT","x":0.5,"y":84.6},"id":"12137","type":"Label"},{"attributes":{"data_source":{"id":"12219"},"glyph":{"id":"12220"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12221"},"selection_glyph":null,"view":{"id":"12223"}},"id":"12222","type":"GlyphRenderer"},{"attributes":{},"id":"12217","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"12191"},"glyph":{"id":"12192"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12193"},"selection_glyph":null,"view":{"id":"12195"}},"id":"12194","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12080","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12168","type":"Line"},{"attributes":{},"id":"12092","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"12166"}},"id":"12170","type":"CDSView"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"12575"},"selection_policy":{"id":"12576"}},"id":"12530","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"12286"},"selection_policy":{"id":"12287"}},"id":"12255","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12578","type":"Line"},{"attributes":{"data_source":{"id":"12118"},"glyph":{"id":"12119"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12120"},"selection_glyph":null,"view":{"id":"12122"}},"id":"12121","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12256","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"12135"},"selection_policy":{"id":"12136"}},"id":"12118","type":"ColumnDataSource"},{"attributes":{},"id":"12189","type":"Selection"},{"attributes":{"source":{"id":"12138"}},"id":"12142","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12532","type":"Line"},{"attributes":{},"id":"12190","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12086","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12257","type":"Line"},{"attributes":{"source":{"id":"12530"}},"id":"12534","type":"CDSView"},{"attributes":{"data_source":{"id":"12577"},"glyph":{"id":"12578"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12579"},"selection_glyph":null,"view":{"id":"12581"}},"id":"12580","type":"GlyphRenderer"},{"attributes":{"source":{"id":"12079"}},"id":"12083","type":"CDSView"},{"attributes":{"source":{"id":"12255"}},"id":"12259","type":"CDSView"},{"attributes":{"data_source":{"id":"12288"},"glyph":{"id":"12289"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12290"},"selection_glyph":null,"view":{"id":"12292"}},"id":"12291","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12120","type":"Line"},{"attributes":{"source":{"id":"12118"}},"id":"12122","type":"CDSView"},{"attributes":{"text":"DistilBERT","x":0.5034571936567231,"y":82.2},"id":"12078","type":"Label"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12085","type":"Line"},{"attributes":{"data":{"x":[0.25333333333333335],"y":[84.3]},"selected":{"id":"12251"},"selection_policy":{"id":"12252"}},"id":"12219","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,0.75],"y":[84.6,84.6]},"selected":{"id":"12097"},"selection_policy":{"id":"12098"}},"id":"12084","type":"ColumnDataSource"},{"attributes":{},"id":"12286","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"12216"},"selection_policy":{"id":"12217"}},"id":"12191","type":"ColumnDataSource"},{"attributes":{},"id":"12287","type":"UnionRenderers"},{"attributes":{},"id":"12575","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12221","type":"Scatter"},{"attributes":{},"id":"12096","type":"UnionRenderers"},{"attributes":{},"id":"12135","type":"Selection"},{"attributes":{},"id":"12136","type":"UnionRenderers"},{"attributes":{},"id":"12576","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12193","type":"Line"},{"attributes":{"source":{"id":"12191"}},"id":"12195","type":"CDSView"},{"attributes":{},"id":"12095","type":"Selection"},{"attributes":{"data":{"x":[0,0.75],"y":[82.6,82.6]},"selected":{"id":"12321"},"selection_policy":{"id":"12322"}},"id":"12288","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12140","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12325","type":"Line"},{"attributes":{"data":{"x":[0,0.75],"y":[83.6,83.6]},"selected":{"id":"12624"},"selection_policy":{"id":"12625"}},"id":"12577","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.5],"y":[84.6]},"selected":{"id":"12162"},"selection_policy":{"id":"12163"}},"id":"12138","type":"ColumnDataSource"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"12324","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"12579","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12220","type":"Scatter"},{"attributes":{},"id":"12216","type":"Selection"},{"attributes":{"data_source":{"id":"12143"},"glyph":{"id":"12144"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12145"},"selection_glyph":null,"view":{"id":"12147"}},"id":"12146","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"12626"},"glyph":{"id":"12627"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12628"},"selection_glyph":null,"view":{"id":"12630"}},"id":"12629","type":"GlyphRenderer"}],"root_ids":["12043"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"d868ea7d-d766-4aea-9448-60a7846787b4","root_ids":["12043"],"roots":{"12043":"9ed2f150-56ef-4dce-81e7-fa6fa9040a03"}}];
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