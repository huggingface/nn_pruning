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
    
      
      
    
      var element = document.getElementById("f1b3b976-6293-4b1d-854d-570656edbeb2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f1b3b976-6293-4b1d-854d-570656edbeb2' but no matching script tag was found.")
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
                    
                  var docs_json = '{"90cced43-4edc-497b-955a-dde4547d67e0":{"roots":{"references":[{"attributes":{"items":[{"id":"1141"},{"id":"1142"},{"id":"1143"},{"id":"1144"}],"location":[10,0],"orientation":"horizontal"},"id":"1140","type":"Legend"},{"attributes":{},"id":"1152","type":"Selection"},{"attributes":{},"id":"1155","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#aa69f7"},"line_alpha":{"value":0.1},"line_color":{"value":"#aa69f7"},"top":{"field":"height"},"width":{"value":0.125},"x":{"field":"x"}},"id":"1137","type":"VBar"},{"attributes":{},"id":"1153","type":"UnionRenderers"},{"attributes":{},"id":"1154","type":"Selection"},{"attributes":{"data_source":{"id":"1134"},"glyph":{"id":"1136"},"hover_glyph":null,"muted_glyph":null,"name":"fully connected","nonselection_glyph":{"id":"1137"},"selection_glyph":null,"view":{"id":"1139"}},"id":"1138","type":"GlyphRenderer"},{"attributes":{},"id":"1146","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1134"}},"id":"1139","type":"CDSView"},{"attributes":{"label":{"value":"query"},"renderers":[{"id":"1120"}]},"id":"1141","type":"LegendItem"},{"attributes":{"label":{"value":"key"},"renderers":[{"id":"1126"}]},"id":"1142","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#6573f7"},"line_alpha":{"value":0.1},"line_color":{"value":"#6573f7"},"top":{"field":"height"},"width":{"value":0.125},"x":{"field":"x"}},"id":"1119","type":"VBar"},{"attributes":{},"id":"1148","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#ed5642"},"line_color":{"value":"#ed5642"},"top":{"field":"height"},"width":{"value":0.125},"x":{"field":"x"}},"id":"1124","type":"VBar"},{"attributes":{"text":"Transformer Layers"},"id":"1096","type":"Title"},{"attributes":{"label":{"value":"value"},"renderers":[{"id":"1132"}]},"id":"1143","type":"LegendItem"},{"attributes":{"source":{"id":"1128"}},"id":"1133","type":"CDSView"},{"attributes":{"data_source":{"id":"1116"},"glyph":{"id":"1118"},"hover_glyph":null,"muted_glyph":null,"name":"query","nonselection_glyph":{"id":"1119"},"selection_glyph":null,"view":{"id":"1121"}},"id":"1120","type":"GlyphRenderer"},{"attributes":{"label":{"value":"fully connected"},"renderers":[{"id":"1138"}]},"id":"1144","type":"LegendItem"},{"attributes":{"data":{"density":["33.3%","33.3%","50.0%","58.3%","58.3%","41.7%","50.0%","58.3%","41.7%","41.7%","41.7%","25.0%"],"height":[0.196608,0.196608,0.294912,0.344064,0.344064,0.24576,0.294912,0.344064,0.24576,0.24576,0.24576,0.147456],"img_height":["96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px"],"img_width":["96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px"],"name":["0.attention.query","1.attention.query","2.attention.query","3.attention.query","4.attention.query","5.attention.query","6.attention.query","7.attention.query","8.attention.query","9.attention.query","10.attention.query","11.attention.query"],"parameters":["0.20","0.20","0.29","0.34","0.34","0.25","0.29","0.34","0.25","0.25","0.25","0.15"],"url":["https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_0_attention_self_query.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_1_attention_self_query.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_2_attention_self_query.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_3_attention_self_query.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_4_attention_self_query.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_5_attention_self_query.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_6_attention_self_query.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_7_attention_self_query.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_8_attention_self_query.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_9_attention_self_query.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_10_attention_self_query.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_11_attention_self_query.png"],"x":[0.08333333333333333,1.0833333333333333,2.0833333333333335,3.0833333333333335,4.083333333333333,5.083333333333333,6.083333333333333,7.083333333333333,8.083333333333334,9.083333333333334,10.083333333333334,11.083333333333334]},"selected":{"id":"1150"},"selection_policy":{"id":"1151"}},"id":"1116","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1116"}},"id":"1121","type":"CDSView"},{"attributes":{},"id":"1156","type":"Selection"},{"attributes":{"data":{"density":["33.3%","33.3%","50.0%","58.3%","58.3%","41.7%","50.0%","58.3%","41.7%","41.7%","41.7%","25.0%"],"height":[0.196608,0.196608,0.294912,0.344064,0.344064,0.24576,0.294912,0.344064,0.24576,0.24576,0.24576,0.147456],"img_height":["96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px"],"img_width":["96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px"],"name":["0.attention.key","1.attention.key","2.attention.key","3.attention.key","4.attention.key","5.attention.key","6.attention.key","7.attention.key","8.attention.key","9.attention.key","10.attention.key","11.attention.key"],"parameters":["0.20","0.20","0.29","0.34","0.34","0.25","0.29","0.34","0.25","0.25","0.25","0.15"],"url":["https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_0_attention_self_key.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_1_attention_self_key.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_2_attention_self_key.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_3_attention_self_key.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_4_attention_self_key.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_5_attention_self_key.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_6_attention_self_key.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_7_attention_self_key.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_8_attention_self_key.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_9_attention_self_key.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_10_attention_self_key.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_11_attention_self_key.png"],"x":[0.25,1.25,2.25,3.25,4.25,5.25,6.25,7.25,8.25,9.25,10.25,11.25]},"selected":{"id":"1152"},"selection_policy":{"id":"1153"}},"id":"1122","type":"ColumnDataSource"},{"attributes":{"above":[{"id":"1140"}],"below":[{"id":"1106"}],"center":[{"id":"1109"},{"id":"1113"}],"left":[{"id":"1110"}],"outline_line_color":null,"plot_height":300,"plot_width":505,"renderers":[{"id":"1120"},{"id":"1126"},{"id":"1132"},{"id":"1138"}],"title":{"id":"1096"},"toolbar":{"id":"1114"},"x_range":{"id":"1098"},"x_scale":{"id":"1102"},"y_range":{"id":"1100"},"y_scale":{"id":"1104"}},"id":"1095","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1094"}]},"id":"1114","type":"Toolbar"},{"attributes":{"axis":{"id":"1110"},"dimension":1,"ticker":null},"id":"1113","type":"Grid"},{"attributes":{},"id":"1111","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#ed5642"},"line_alpha":{"value":0.1},"line_color":{"value":"#ed5642"},"top":{"field":"height"},"width":{"value":0.125},"x":{"field":"x"}},"id":"1125","type":"VBar"},{"attributes":{"callback":null,"tooltips":"\\n        &lt;div&gt;\\n            &lt;div style=\\"margin-bottom:10px\\"&gt;\\n                &lt;span style=\\"font-size: 15px;\\"&gt;&lt;b&gt;@name&lt;/b&gt;&lt;br/&gt;density=@density&lt;/span&gt;\\n            &lt;/div&gt;\\n            &lt;div&gt;            \\n                &lt;img\\n                    src=\\"@url\\" height=\\"@img_height\\" width=\\"@img_width\\" alt=\\"@url\\"\\n                    style=\\"float: left; margin: 0px 15px 15px 0px;\\"\\n                    border=\\"0\\"\\n                /&gt;\\n            &lt;/div&gt;\\n        &lt;/div&gt;\\n        "},"id":"1094","type":"HoverTool"},{"attributes":{"data":{"density":["33.3%","33.3%","50.0%","58.3%","58.3%","41.7%","50.0%","58.3%","41.7%","41.7%","41.7%","25.0%"],"height":[0.196608,0.196608,0.294912,0.344064,0.344064,0.24576,0.294912,0.344064,0.24576,0.24576,0.24576,0.147456],"img_height":["96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px"],"img_width":["96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px","96px"],"name":["0.attention.value","1.attention.value","2.attention.value","3.attention.value","4.attention.value","5.attention.value","6.attention.value","7.attention.value","8.attention.value","9.attention.value","10.attention.value","11.attention.value"],"parameters":["0.20","0.20","0.29","0.34","0.34","0.25","0.29","0.34","0.25","0.25","0.25","0.15"],"url":["https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_0_attention_self_value.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_1_attention_self_value.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_2_attention_self_value.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_3_attention_self_value.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_4_attention_self_value.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_5_attention_self_value.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_6_attention_self_value.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_7_attention_self_value.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_8_attention_self_value.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_9_attention_self_value.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_10_attention_self_value.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_11_attention_self_value.png"],"x":[0.41666666666666663,1.4166666666666665,2.416666666666667,3.416666666666667,4.416666666666666,5.416666666666666,6.416666666666666,7.416666666666666,8.416666666666668,9.416666666666668,10.416666666666668,11.416666666666668]},"selected":{"id":"1154"},"selection_policy":{"id":"1155"}},"id":"1128","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1122"},"glyph":{"id":"1124"},"hover_glyph":null,"muted_glyph":null,"name":"key","nonselection_glyph":{"id":"1125"},"selection_glyph":null,"view":{"id":"1127"}},"id":"1126","type":"GlyphRenderer"},{"attributes":{},"id":"1104","type":"LinearScale"},{"attributes":{},"id":"1150","type":"Selection"},{"attributes":{"source":{"id":"1122"}},"id":"1127","type":"CDSView"},{"attributes":{"fill_color":{"value":"#6573f7"},"line_color":{"value":"#6573f7"},"top":{"field":"height"},"width":{"value":0.125},"x":{"field":"x"}},"id":"1118","type":"VBar"},{"attributes":{},"id":"1157","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#20cb97"},"line_color":{"value":"#20cb97"},"top":{"field":"height"},"width":{"value":0.125},"x":{"field":"x"}},"id":"1130","type":"VBar"},{"attributes":{"start":0},"id":"1100","type":"DataRange1d"},{"attributes":{},"id":"1151","type":"UnionRenderers"},{"attributes":{},"id":"1098","type":"DataRange1d"},{"attributes":{"axis_label":"Layer","formatter":{"id":"1146"},"minor_tick_line_color":null,"ticker":{"id":"1107"}},"id":"1106","type":"LinearAxis"},{"attributes":{},"id":"1107","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#20cb97"},"line_alpha":{"value":0.1},"line_color":{"value":"#20cb97"},"top":{"field":"height"},"width":{"value":0.125},"x":{"field":"x"}},"id":"1131","type":"VBar"},{"attributes":{},"id":"1102","type":"LinearScale"},{"attributes":{"data_source":{"id":"1128"},"glyph":{"id":"1130"},"hover_glyph":null,"muted_glyph":null,"name":"value","nonselection_glyph":{"id":"1131"},"selection_glyph":null,"view":{"id":"1133"}},"id":"1132","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1106"},"grid_line_color":null,"ticker":null},"id":"1109","type":"Grid"},{"attributes":{"data":{"density":["33.3%","18.0%","18.0%","33.3%","23.3%","23.3%","50.0%","25.9%","25.9%","58.3%","25.7%","25.7%","58.3%","27.1%","27.1%","41.7%","25.8%","25.8%","50.0%","20.2%","20.2%","58.3%","15.2%","15.2%","41.7%","9.2%","9.2%","41.7%","3.6%","3.6%","41.7%","3.1%","3.1%","25.0%","7.7%","7.7%"],"height":[0.196608,0.423936,0.423936,0.196608,0.550656,0.550656,0.294912,0.61056,0.61056,0.344064,0.605952,0.605952,0.344064,0.639744,0.639744,0.24576,0.608256,0.608256,0.294912,0.47616,0.47616,0.344064,0.357888,0.357888,0.24576,0.217344,0.217344,0.24576,0.086016,0.086016,0.24576,0.073728,0.073728,0.147456,0.182784,0.182784],"img_height":["96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px"],"img_width":["96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px","96px","96px","384px"],"name":["0.attention.output","0.intermediate","0.output","1.attention.output","1.intermediate","1.output","2.attention.output","2.intermediate","2.output","3.attention.output","3.intermediate","3.output","4.attention.output","4.intermediate","4.output","5.attention.output","5.intermediate","5.output","6.attention.output","6.intermediate","6.output","7.attention.output","7.intermediate","7.output","8.attention.output","8.intermediate","8.output","9.attention.output","9.intermediate","9.output","10.attention.output","10.intermediate","10.output","11.attention.output","11.intermediate","11.output"],"parameters":["0.20","0.42","0.42","0.20","0.55","0.55","0.29","0.61","0.61","0.34","0.61","0.61","0.34","0.64","0.64","0.25","0.61","0.61","0.29","0.48","0.48","0.34","0.36","0.36","0.25","0.22","0.22","0.25","0.09","0.09","0.25","0.07","0.07","0.15","0.18","0.18"],"url":["https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_0_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_0_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_0_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_1_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_1_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_1_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_2_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_2_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_2_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_3_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_3_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_3_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_4_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_4_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_4_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_5_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_5_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_5_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_6_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_6_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_6_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_7_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_7_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_7_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_8_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_8_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_8_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_9_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_9_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_9_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_10_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_10_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_10_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_11_attention_output_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_11_intermediate_dense.png","https://huggingface.co/madlag/bert-base-uncased-squadv1-x2.44-f87.7-d26-hybrid-filled-v1/raw/main/model_card/images/layer_11_output_dense.png"],"x":[0.5833333333333334,0.75,0.9166666666666667,1.5833333333333333,1.75,1.9166666666666665,2.5833333333333335,2.75,2.916666666666667,3.5833333333333335,3.75,3.916666666666667,4.583333333333333,4.75,4.916666666666666,5.583333333333333,5.75,5.916666666666666,6.583333333333333,6.75,6.916666666666666,7.583333333333333,7.75,7.916666666666666,8.583333333333334,8.75,8.916666666666668,9.583333333333334,9.75,9.916666666666668,10.583333333333334,10.75,10.916666666666668,11.583333333333334,11.75,11.916666666666668]},"selected":{"id":"1156"},"selection_policy":{"id":"1157"}},"id":"1134","type":"ColumnDataSource"},{"attributes":{"axis_label":"Parameters (M)","formatter":{"id":"1148"},"minor_tick_line_color":null,"ticker":{"id":"1111"}},"id":"1110","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#aa69f7"},"line_color":{"value":"#aa69f7"},"top":{"field":"height"},"width":{"value":0.125},"x":{"field":"x"}},"id":"1136","type":"VBar"}],"root_ids":["1095"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"90cced43-4edc-497b-955a-dde4547d67e0","root_ids":["1095"],"roots":{"1095":"f1b3b976-6293-4b1d-854d-570656edbeb2"}}];
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