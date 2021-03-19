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
    
      
      
    
      var element = document.getElementById("e8e4033b-d681-40b2-a29f-91a0a59987b4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e8e4033b-d681-40b2-a29f-91a0a59987b4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"dab988f9-1e21-4203-8602-46f5d29d4eca":{"roots":{"references":[{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30357","type":"Line"},{"attributes":{"source":{"id":"30356"}},"id":"30360","type":"CDSView"},{"attributes":{},"id":"30248","type":"UnionRenderers"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30437","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30727","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30010"},{"id":"30011"},{"id":"30012"},{"id":"30013"},{"id":"30014"},{"id":"30015"}]},"id":"30017","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30358","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30396","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30526","type":"Line"},{"attributes":{},"id":"30722","type":"Selection"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30673","type":"Line"},{"attributes":{"data_source":{"id":"30395"},"glyph":{"id":"30396"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30397"},"selection_glyph":null,"view":{"id":"30399"}},"id":"30398","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"30002"}],"center":[{"id":"30005"},{"id":"30009"},{"id":"30038"}],"left":[{"id":"30006"}],"plot_width":800,"renderers":[{"id":"30028"},{"id":"30043"},{"id":"30059"},{"id":"30076"},{"id":"30095"},{"id":"30117"},{"id":"30140"},{"id":"30165"},{"id":"30192"},{"id":"30222"},{"id":"30253"},{"id":"30286"},{"id":"30321"},{"id":"30359"},{"id":"30398"},{"id":"30439"},{"id":"30482"},{"id":"30528"},{"id":"30575"},{"id":"30624"},{"id":"30675"},{"id":"30729"},{"id":"30784"},{"id":"30841"},{"id":"30900"},{"id":"30962"},{"id":"31025"},{"id":"31090"}],"title":{"id":"29992"},"toolbar":{"id":"30017"},"x_range":{"id":"30024"},"x_scale":{"id":"29998"},"y_range":{"id":"29996"},"y_scale":{"id":"30000"}},"id":"29991","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30723","type":"UnionRenderers"},{"attributes":{"label":{"value":"Unstructured Soft Movement Pruning"},"renderers":[{"id":"30028"}]},"id":"30039","type":"LegendItem"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"30569"},"selection_policy":{"id":"30570"}},"id":"30525","type":"ColumnDataSource"},{"attributes":{},"id":"30392","type":"Selection"},{"attributes":{"data_source":{"id":"30525"},"glyph":{"id":"30526"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30527"},"selection_glyph":null,"view":{"id":"30529"}},"id":"30528","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"30002"},"ticker":null},"id":"30005","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30027","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"30039"},{"id":"30055"},{"id":"30113"},{"id":"30218"},{"id":"30355"},{"id":"30524"},{"id":"30725"},{"id":"30958"}]},"id":"30038","type":"Legend"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30251","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30284","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30573","type":"Line"},{"attributes":{},"id":"30393","type":"UnionRenderers"},{"attributes":{"axis_label":"F1","formatter":{"id":"30031"},"ticker":{"id":"30007"}},"id":"30006","type":"LinearAxis"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30622","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30527","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30252","type":"Line"},{"attributes":{"source":{"id":"30525"}},"id":"30529","type":"CDSView"},{"attributes":{"data_source":{"id":"30572"},"glyph":{"id":"30573"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30574"},"selection_glyph":null,"view":{"id":"30576"}},"id":"30575","type":"GlyphRenderer"},{"attributes":{"source":{"id":"30250"}},"id":"30254","type":"CDSView"},{"attributes":{"data_source":{"id":"30283"},"glyph":{"id":"30284"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30285"},"selection_glyph":null,"view":{"id":"30287"}},"id":"30286","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"30778"},"selection_policy":{"id":"30779"}},"id":"30726","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"30726"},"glyph":{"id":"30727"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30728"},"selection_glyph":null,"view":{"id":"30730"}},"id":"30729","type":"GlyphRenderer"},{"attributes":{},"id":"29998","type":"LinearScale"},{"attributes":{},"id":"30007","type":"BasicTicker"},{"attributes":{"data":{"x":[1.8420919143305463,1.98338294004996,2.0930209740713988,2.094444154371984,2.2192523962418718,2.436764806371294,2.5991656903766382,2.68869031405704,2.799991523936488],"y":[88.72194531479171,88.26868699204444,88.20260662536118,88.11014400914335,88.06386432532665,87.70940223967354,87.22907143184382,86.75497848244157,86.69392512957342]},"selected":{"id":"30955"},"selection_policy":{"id":"30956"}},"id":"30897","type":"ColumnDataSource"},{"attributes":{},"id":"30280","type":"Selection"},{"attributes":{},"id":"30569","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30782","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"30433"},"selection_policy":{"id":"30434"}},"id":"30395","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30839","type":"Line"},{"attributes":{},"id":"30570","type":"UnionRenderers"},{"attributes":{},"id":"30281","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30728","type":"Line"},{"attributes":{"source":{"id":"30726"}},"id":"30730","type":"CDSView"},{"attributes":{"data_source":{"id":"30781"},"glyph":{"id":"30782"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30783"},"selection_glyph":null,"view":{"id":"30785"}},"id":"30784","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.0253716557683228,1.0930418633843273,1.170038217254783,1.2958210124830911,1.3926143255719736,1.5170581452285046],"y":[88.66263407974378,88.08154392563726,87.64967103979136,86.3547925481507,85.66626983371626,85.40699359564026]},"selected":{"id":"30035"},"selection_policy":{"id":"30036"}},"id":"30025","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30397","type":"Line"},{"attributes":{"source":{"id":"30395"}},"id":"30399","type":"CDSView"},{"attributes":{"data_source":{"id":"30436"},"glyph":{"id":"30437"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30438"},"selection_glyph":null,"view":{"id":"30440"}},"id":"30439","type":"GlyphRenderer"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30026","type":"Line"},{"attributes":{},"id":"30778","type":"Selection"},{"attributes":{"source":{"id":"30025"}},"id":"30029","type":"CDSView"},{"attributes":{"source":{"id":"30318"}},"id":"30322","type":"CDSView"},{"attributes":{},"id":"30433","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"30315"},"selection_policy":{"id":"30316"}},"id":"30283","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Hybrid, abs=32x32"},"renderers":[{"id":"30675"}]},"id":"30725","type":"LegendItem"},{"attributes":{},"id":"30779","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"30618"},"selection_policy":{"id":"30619"}},"id":"30572","type":"ColumnDataSource"},{"attributes":{},"id":"30434","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30285","type":"Line"},{"attributes":{"source":{"id":"30283"}},"id":"30287","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30574","type":"Line"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30319","type":"Line"},{"attributes":{"source":{"id":"30572"}},"id":"30576","type":"CDSView"},{"attributes":{"data_source":{"id":"30621"},"glyph":{"id":"30622"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30623"},"selection_glyph":null,"view":{"id":"30625"}},"id":"30624","type":"GlyphRenderer"},{"attributes":{},"id":"30315","type":"Selection"},{"attributes":{"source":{"id":"30479"}},"id":"30483","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30899","type":"Line"},{"attributes":{},"id":"30618","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"30476"},"selection_policy":{"id":"30477"}},"id":"30436","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"30835"},"selection_policy":{"id":"30836"}},"id":"30781","type":"ColumnDataSource"},{"attributes":{},"id":"30316","type":"UnionRenderers"},{"attributes":{},"id":"30619","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30438","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30783","type":"Line"},{"attributes":{"source":{"id":"30436"}},"id":"30440","type":"CDSView"},{"attributes":{"source":{"id":"30781"}},"id":"30785","type":"CDSView"},{"attributes":{"data_source":{"id":"30838"},"glyph":{"id":"30839"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30840"},"selection_glyph":null,"view":{"id":"30842"}},"id":"30841","type":"GlyphRenderer"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30480","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30320","type":"Line"},{"attributes":{},"id":"30476","type":"Selection"},{"attributes":{},"id":"30835","type":"Selection"},{"attributes":{"source":{"id":"30672"}},"id":"30676","type":"CDSView"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"30669"},"selection_policy":{"id":"30670"}},"id":"30621","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"30056"},"glyph":{"id":"30057"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30058"},"selection_glyph":null,"view":{"id":"30060"}},"id":"30059","type":"GlyphRenderer"},{"attributes":{},"id":"30477","type":"UnionRenderers"},{"attributes":{},"id":"30836","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"30356"},"glyph":{"id":"30357"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30358"},"selection_glyph":null,"view":{"id":"30360"}},"id":"30359","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30623","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 8x8"},"renderers":[{"id":"30321"}]},"id":"30355","type":"LegendItem"},{"attributes":{"source":{"id":"30621"}},"id":"30625","type":"CDSView"},{"attributes":{},"id":"30352","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30674","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"30070"},"selection_policy":{"id":"30071"}},"id":"30056","type":"ColumnDataSource"},{"attributes":{},"id":"30353","type":"UnionRenderers"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"29992","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30481","type":"Line"},{"attributes":{"source":{"id":"30897"}},"id":"30901","type":"CDSView"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"30894"},"selection_policy":{"id":"30895"}},"id":"30838","type":"ColumnDataSource"},{"attributes":{},"id":"30669","type":"Selection"},{"attributes":{},"id":"30670","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.9695394330694393,2.1003540884863323,2.1124331270315624,2.227490161916501,2.262663009764823,2.471023235070233,2.61711931355729,2.681246344578876,2.704854439028025,2.860446087610368,2.86191312967017],"y":[88.06903108265608,87.70461789964966,87.48291010744668,87.3881230572442,87.14755939306319,86.74156854566804,86.39441106336629,86.20063710644014,86.11992485005756,85.69020560735045,85.6109462422114]},"selected":{"id":"30722"},"selection_policy":{"id":"30723"}},"id":"30672","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30840","type":"Line"},{"attributes":{"data":{"x":[1.1538953400165994,1.302586687378539,1.5664666750452154,1.5668552712310941,1.5696177764204813],"y":[88.21768668110452,87.37325813950282,85.93146728512978,85.88482767255138,85.78500582028688]},"selected":{"id":"30521"},"selection_policy":{"id":"30522"}},"id":"30479","type":"ColumnDataSource"},{"attributes":{"source":{"id":"30838"}},"id":"30842","type":"CDSView"},{"attributes":{"label":{"value":"Block, bs= 4x4"},"renderers":[{"id":"30482"}]},"id":"30524","type":"LegendItem"},{"attributes":{"data_source":{"id":"30479"},"glyph":{"id":"30480"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30481"},"selection_glyph":null,"view":{"id":"30483"}},"id":"30482","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30898","type":"Line"},{"attributes":{},"id":"30003","type":"BasicTicker"},{"attributes":{},"id":"30521","type":"Selection"},{"attributes":{"data_source":{"id":"30897"},"glyph":{"id":"30898"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30899"},"selection_glyph":null,"view":{"id":"30901"}},"id":"30900","type":"GlyphRenderer"},{"attributes":{},"id":"30522","type":"UnionRenderers"},{"attributes":{},"id":"30894","type":"Selection"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"30033"},"ticker":{"id":"30003"}},"id":"30002","type":"LinearAxis"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"30392"},"selection_policy":{"id":"30393"}},"id":"30356","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31089","type":"Line"},{"attributes":{},"id":"30895","type":"UnionRenderers"},{"attributes":{"source":{"id":"31087"}},"id":"31091","type":"CDSView"},{"attributes":{"source":{"id":"30092"}},"id":"30096","type":"CDSView"},{"attributes":{},"id":"30031","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30138","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30163","type":"Line"},{"attributes":{"source":{"id":"30073"}},"id":"30077","type":"CDSView"},{"attributes":{"data_source":{"id":"30162"},"glyph":{"id":"30163"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30164"},"selection_glyph":null,"view":{"id":"30166"}},"id":"30165","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30139","type":"Line"},{"attributes":{"source":{"id":"30137"}},"id":"30141","type":"CDSView"},{"attributes":{},"id":"30052","type":"Selection"},{"attributes":{"data_source":{"id":"30959"},"glyph":{"id":"30960"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30961"},"selection_glyph":null,"view":{"id":"30963"}},"id":"30962","type":"GlyphRenderer"},{"attributes":{},"id":"31151","type":"Selection"},{"attributes":{},"id":"30000","type":"LinearScale"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30960","type":"Line"},{"attributes":{},"id":"30053","type":"UnionRenderers"},{"attributes":{},"id":"30159","type":"Selection"},{"attributes":{},"id":"31152","type":"UnionRenderers"},{"attributes":{},"id":"30160","type":"UnionRenderers"},{"attributes":{"label":{"value":"Hybrid filled, abs=32x32"},"renderers":[{"id":"30900"}]},"id":"30958","type":"LegendItem"},{"attributes":{},"id":"30955","type":"Selection"},{"attributes":{},"id":"30956","type":"UnionRenderers"},{"attributes":{"source":{"id":"30189"}},"id":"30193","type":"CDSView"},{"attributes":{},"id":"30089","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"30186"},"selection_policy":{"id":"30187"}},"id":"30162","type":"ColumnDataSource"},{"attributes":{},"id":"30090","type":"UnionRenderers"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30093","type":"Line"},{"attributes":{"end":3.25,"start":0.75},"id":"30024","type":"Range1d"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30057","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30164","type":"Line"},{"attributes":{"data_source":{"id":"30073"},"glyph":{"id":"30074"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30075"},"selection_glyph":null,"view":{"id":"30077"}},"id":"30076","type":"GlyphRenderer"},{"attributes":{"source":{"id":"30162"}},"id":"30166","type":"CDSView"},{"attributes":{},"id":"30247","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"30089"},"selection_policy":{"id":"30090"}},"id":"30073","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30191","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"31019"},"selection_policy":{"id":"31020"}},"id":"30959","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30115","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30094","type":"Line"},{"attributes":{},"id":"30186","type":"Selection"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31023","type":"Line"},{"attributes":{},"id":"30011","type":"WheelZoomTool"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"30043"},{"id":"30059"},{"id":"30076"},{"id":"30117"},{"id":"30140"},{"id":"30165"},{"id":"30222"},{"id":"30253"},{"id":"30286"},{"id":"30359"},{"id":"30398"},{"id":"30439"},{"id":"30528"},{"id":"30575"},{"id":"30624"},{"id":"30729"},{"id":"30784"},{"id":"30841"},{"id":"30962"},{"id":"31025"},{"id":"31090"}]},"id":"30055","type":"LegendItem"},{"attributes":{"axis":{"id":"30006"},"dimension":1,"ticker":null},"id":"30009","type":"Grid"},{"attributes":{},"id":"30187","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"30114"},"glyph":{"id":"30115"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30116"},"selection_glyph":null,"view":{"id":"30118"}},"id":"30117","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30961","type":"Line"},{"attributes":{"overlay":{"id":"30016"}},"id":"30012","type":"BoxZoomTool"},{"attributes":{"source":{"id":"30959"}},"id":"30963","type":"CDSView"},{"attributes":{"data_source":{"id":"30672"},"glyph":{"id":"30673"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30674"},"selection_glyph":null,"view":{"id":"30676"}},"id":"30675","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"31022"},"glyph":{"id":"31023"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31024"},"selection_glyph":null,"view":{"id":"31026"}},"id":"31025","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Block, bs= 32x32"},"renderers":[{"id":"30095"}]},"id":"30113","type":"LegendItem"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30190","type":"Line"},{"attributes":{},"id":"30110","type":"Selection"},{"attributes":{},"id":"30014","type":"ResetTool"},{"attributes":{},"id":"30033","type":"BasicTickFormatter"},{"attributes":{},"id":"30015","type":"HelpTool"},{"attributes":{},"id":"31019","type":"Selection"},{"attributes":{},"id":"30111","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"30219"},"glyph":{"id":"30220"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30221"},"selection_glyph":null,"view":{"id":"30223"}},"id":"30222","type":"GlyphRenderer"},{"attributes":{"source":{"id":"30056"}},"id":"30060","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30220","type":"Line"},{"attributes":{},"id":"31020","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30075","type":"Line"},{"attributes":{},"id":"30013","type":"SaveTool"},{"attributes":{},"id":"30035","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30058","type":"Line"},{"attributes":{"label":{"value":"Block, bs= 16x16"},"renderers":[{"id":"30192"}]},"id":"30218","type":"LegendItem"},{"attributes":{},"id":"30036","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.4665027478478643,1.8303357184393354],"y":[87.65780769915727,86.57822332702295]},"selected":{"id":"30215"},"selection_policy":{"id":"30216"}},"id":"30189","type":"ColumnDataSource"},{"attributes":{},"id":"30215","type":"Selection"},{"attributes":{"data_source":{"id":"30025"},"glyph":{"id":"30026"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30027"},"selection_glyph":null,"view":{"id":"30029"}},"id":"30028","type":"GlyphRenderer"},{"attributes":{},"id":"29996","type":"DataRange1d"},{"attributes":{},"id":"30010","type":"PanTool"},{"attributes":{},"id":"30216","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"30134"},"selection_policy":{"id":"30135"}},"id":"30114","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31088","type":"Line"},{"attributes":{"data_source":{"id":"30189"},"glyph":{"id":"30190"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30191"},"selection_glyph":null,"view":{"id":"30193"}},"id":"30192","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"31084"},"selection_policy":{"id":"31085"}},"id":"31022","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"30159"},"selection_policy":{"id":"30160"}},"id":"30137","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"30137"},"glyph":{"id":"30138"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30139"},"selection_glyph":null,"view":{"id":"30141"}},"id":"30140","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.3059049623464731,1.319204091160467,1.5645594133095706,2.0060775865978457],"y":[88.02730364897265,87.861684752796,86.84949475139184,85.16652519097626]},"selected":{"id":"30352"},"selection_policy":{"id":"30353"}},"id":"30318","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31024","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30116","type":"Line"},{"attributes":{"source":{"id":"31022"}},"id":"31026","type":"CDSView"},{"attributes":{"data_source":{"id":"31087"},"glyph":{"id":"31088"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31089"},"selection_glyph":null,"view":{"id":"31091"}},"id":"31090","type":"GlyphRenderer"},{"attributes":{"source":{"id":"30114"}},"id":"30118","type":"CDSView"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"30247"},"selection_policy":{"id":"30248"}},"id":"30219","type":"ColumnDataSource"},{"attributes":{},"id":"30070","type":"Selection"},{"attributes":{},"id":"31084","type":"Selection"},{"attributes":{"data_source":{"id":"30318"},"glyph":{"id":"30319"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30320"},"selection_glyph":null,"view":{"id":"30322"}},"id":"30321","type":"GlyphRenderer"},{"attributes":{},"id":"30134","type":"Selection"},{"attributes":{"data_source":{"id":"30250"},"glyph":{"id":"30251"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30252"},"selection_glyph":null,"view":{"id":"30254"}},"id":"30253","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.559464313363606,1.599770932365684,1.9655458674518098,2.0054680821187447,2.2874144573134694,2.289378243109522],"y":[87.36378709007766,87.30735739624531,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"30110"},"selection_policy":{"id":"30111"}},"id":"30092","type":"ColumnDataSource"},{"attributes":{},"id":"30071","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30041","type":"Line"},{"attributes":{},"id":"30135","type":"UnionRenderers"},{"attributes":{},"id":"31085","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"30040"},"glyph":{"id":"30041"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30042"},"selection_glyph":null,"view":{"id":"30044"}},"id":"30043","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30221","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"30052"},"selection_policy":{"id":"30053"}},"id":"30040","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30074","type":"Line"},{"attributes":{"source":{"id":"30219"}},"id":"30223","type":"CDSView"},{"attributes":{"data_source":{"id":"30092"},"glyph":{"id":"30093"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30094"},"selection_glyph":null,"view":{"id":"30096"}},"id":"30095","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"30280"},"selection_policy":{"id":"30281"}},"id":"30250","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"30016","type":"BoxAnnotation"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"31151"},"selection_policy":{"id":"31152"}},"id":"31087","type":"ColumnDataSource"},{"attributes":{"source":{"id":"30040"}},"id":"30044","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"30042","type":"Line"}],"root_ids":["29991"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"dab988f9-1e21-4203-8602-46f5d29d4eca","root_ids":["29991"],"roots":{"29991":"e8e4033b-d681-40b2-a29f-91a0a59987b4"}}];
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