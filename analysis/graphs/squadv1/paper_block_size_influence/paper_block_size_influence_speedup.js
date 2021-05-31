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
    
      
      
    
      var element = document.getElementById("7a257d1d-fef5-4c71-8f79-e9538f124845");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7a257d1d-fef5-4c71-8f79-e9538f124845' but no matching script tag was found.")
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
                    
                  var docs_json = '{"88e55028-8751-47f6-becb-5aed75d6f101":{"roots":{"references":[{"attributes":{},"id":"1559","type":"LinearScale"},{"attributes":{"source":{"id":"1632"}},"id":"1636","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1711","type":"Line"},{"attributes":{},"id":"1572","type":"SaveTool"},{"attributes":{"data":{"x":[1.1252216532791355,1.1538953400165994,1.1931736074335828,1.1988795413397866,1.302586687378539,1.3515039902008532,1.5664666750452154,1.5668552712310941,1.5696177764204813],"y":[88.58172107792693,88.21768668110452,88.02284574429551,87.80889686617203,87.37325813950282,87.31499809166372,85.93146728512978,85.88482767255138,85.78500582028688]},"selected":{"id":"1737"},"selection_policy":{"id":"1738"}},"id":"1710","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Block Size=16"},"renderers":[{"id":"1659"}]},"id":"1681","type":"LegendItem"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1633","type":"Line"},{"attributes":{"source":{"id":"1710"}},"id":"1714","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1634","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1712","type":"Line"},{"attributes":{"label":{"value":"Block Size=32"},"renderers":[{"id":"1635"}]},"id":"1655","type":"LegendItem"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1657","type":"Line"},{"attributes":{"label":{"value":"Block Size=4"},"renderers":[{"id":"1713"}]},"id":"1739","type":"LegendItem"},{"attributes":{},"id":"1628","type":"Selection"},{"attributes":{},"id":"1570","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1569"},{"id":"1570"},{"id":"1571"},{"id":"1572"},{"id":"1573"},{"id":"1574"}]},"id":"1576","type":"Toolbar"},{"attributes":{},"id":"1737","type":"Selection"},{"attributes":{"text":"DistilBERT","x":2.0609917530867805,"y":86.9},"id":"1591","type":"Label"},{"attributes":{"data":{"x":[1],"y":[88.5]},"selected":{"id":"1620"},"selection_policy":{"id":"1621"}},"id":"1586","type":"ColumnDataSource"},{"attributes":{},"id":"1620","type":"Selection"},{"attributes":{"overlay":{"id":"1575"}},"id":"1571","type":"BoxZoomTool"},{"attributes":{},"id":"1573","type":"ResetTool"},{"attributes":{},"id":"1653","type":"Selection"},{"attributes":{},"id":"1738","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1588","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1587","type":"Scatter"},{"attributes":{},"id":"1621","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1594","type":"Scatter"},{"attributes":{},"id":"1654","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.8799112593179124],"y":[87.5]},"selected":{"id":"1624"},"selection_policy":{"id":"1625"}},"id":"1598","type":"ColumnDataSource"},{"attributes":{},"id":"1574","type":"HelpTool"},{"attributes":{"source":{"id":"1586"}},"id":"1590","type":"CDSView"},{"attributes":{"data_source":{"id":"1586"},"glyph":{"id":"1587"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1588"},"selection_glyph":null,"view":{"id":"1590"}},"id":"1589","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1593","type":"Scatter"},{"attributes":{"data":{"x":[2.0609917530867805],"y":[86.9]},"selected":{"id":"1622"},"selection_policy":{"id":"1623"}},"id":"1592","type":"ColumnDataSource"},{"attributes":{"text":"TinyBERT","x":1.8799112593179124,"y":87.5},"id":"1597","type":"Label"},{"attributes":{},"id":"1622","type":"Selection"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":90.0},"id":"1603","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1600","type":"Scatter"},{"attributes":{"data_source":{"id":"1656"},"glyph":{"id":"1657"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1658"},"selection_glyph":null,"view":{"id":"1660"}},"id":"1659","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1605","type":"Scatter"},{"attributes":{},"id":"1623","type":"UnionRenderers"},{"attributes":{"source":{"id":"1592"}},"id":"1596","type":"CDSView"},{"attributes":{"data_source":{"id":"1592"},"glyph":{"id":"1593"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1594"},"selection_glyph":null,"view":{"id":"1596"}},"id":"1595","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1710"},"glyph":{"id":"1711"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1712"},"selection_glyph":null,"view":{"id":"1714"}},"id":"1713","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.2806693802635063,1.4665027478478643,1.8303357184393354],"y":[88.34112193061533,87.65780769915727,86.57822332702295]},"selected":{"id":"1679"},"selection_policy":{"id":"1680"}},"id":"1656","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1599","type":"Scatter"},{"attributes":{},"id":"1629","type":"UnionRenderers"},{"attributes":{"source":{"id":"1656"}},"id":"1660","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1606","type":"Scatter"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1658","type":"Line"},{"attributes":{"data":{"x":[1.612951511916643],"y":[90.0]},"selected":{"id":"1626"},"selection_policy":{"id":"1627"}},"id":"1604","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1598"}},"id":"1602","type":"CDSView"},{"attributes":{},"id":"1624","type":"Selection"},{"attributes":{},"id":"1562","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1598"},"glyph":{"id":"1599"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1600"},"selection_glyph":null,"view":{"id":"1602"}},"id":"1601","type":"GlyphRenderer"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1683","type":"Line"},{"attributes":{"data_source":{"id":"1609"},"glyph":{"id":"1610"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1611"},"selection_glyph":null,"view":{"id":"1613"}},"id":"1612","type":"GlyphRenderer"},{"attributes":{},"id":"1625","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1561"},"ticker":null},"id":"1564","type":"Grid"},{"attributes":{"label":{"value":"Movement"},"renderers":[{"id":"1612"}]},"id":"1631","type":"LegendItem"},{"attributes":{"data_source":{"id":"1632"},"glyph":{"id":"1633"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1634"},"selection_glyph":null,"view":{"id":"1636"}},"id":"1635","type":"GlyphRenderer"},{"attributes":{},"id":"1679","type":"Selection"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1610","type":"Line"},{"attributes":{"source":{"id":"1604"}},"id":"1608","type":"CDSView"},{"attributes":{"data_source":{"id":"1604"},"glyph":{"id":"1605"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1606"},"selection_glyph":null,"view":{"id":"1608"}},"id":"1607","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.9840340185670864,1.026141974757969,1.095528107464865,1.1632636047982534,1.170038217254783,1.2607211638158147,1.3349999991845345,1.3926143255719736,1.5170581452285046],"y":[90.24019516114679,89.78322305629628,88.66959543954316,88.11360890595924,87.64967103979136,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"1628"},"selection_policy":{"id":"1629"}},"id":"1609","type":"ColumnDataSource"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1615"},"ticker":{"id":"1562"}},"id":"1561","type":"LinearAxis"},{"attributes":{},"id":"1680","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.2129893613486789,1.232662374177603,1.4146984734806616,1.4569389629649467,1.5765472050873537,1.599770932365684,1.7643216216448254,1.7886473497076825,1.9655458674518098,2.0054680821187447,2.2874144573134694,2.289378243109522],"y":[88.73698799207777,88.67903677006836,88.10463591853348,87.91705961229685,87.40026291426761,87.30735739624531,86.768721062838,86.11161494070976,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"1653"},"selection_policy":{"id":"1654"}},"id":"1632","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1609"}},"id":"1613","type":"CDSView"},{"attributes":{},"id":"1626","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1611","type":"Line"},{"attributes":{},"id":"1627","type":"UnionRenderers"},{"attributes":{"end":2.5,"start":0.95},"id":"1583","type":"Range1d"},{"attributes":{"click_policy":"hide","items":[{"id":"1631"},{"id":"1655"},{"id":"1681"},{"id":"1709"},{"id":"1739"}]},"id":"1630","type":"Legend"},{"attributes":{"below":[{"id":"1561"}],"center":[{"id":"1564"},{"id":"1568"},{"id":"1585"},{"id":"1591"},{"id":"1597"},{"id":"1603"},{"id":"1630"}],"left":[{"id":"1565"}],"plot_width":800,"renderers":[{"id":"1589"},{"id":"1595"},{"id":"1601"},{"id":"1607"},{"id":"1612"},{"id":"1635"},{"id":"1659"},{"id":"1685"},{"id":"1713"}],"title":null,"toolbar":{"id":"1576"},"x_range":{"id":"1583"},"x_scale":{"id":"1557"},"y_range":{"id":"1584"},"y_scale":{"id":"1559"}},"id":"1551","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"1682"},"glyph":{"id":"1683"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1684"},"selection_glyph":null,"view":{"id":"1686"}},"id":"1685","type":"GlyphRenderer"},{"attributes":{"axis_label":"F1","formatter":{"id":"1617"},"ticker":{"id":"1566"}},"id":"1565","type":"LinearAxis"},{"attributes":{"data":{"x":[1.1977117757004876,1.3059049623464731,1.319204091160467,1.3371368758339826,1.5645594133095706,2.0060775865978457],"y":[88.3744311515211,88.02730364897265,87.861684752796,87.66615713942541,86.84949475139184,85.16652519097626]},"selected":{"id":"1707"},"selection_policy":{"id":"1708"}},"id":"1682","type":"ColumnDataSource"},{"attributes":{},"id":"1569","type":"PanTool"},{"attributes":{"source":{"id":"1682"}},"id":"1686","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1684","type":"Line"},{"attributes":{"end":90.5,"start":85},"id":"1584","type":"Range1d"},{"attributes":{"label":{"value":"Block Size=8"},"renderers":[{"id":"1685"}]},"id":"1709","type":"LegendItem"},{"attributes":{},"id":"1566","type":"BasicTicker"},{"attributes":{},"id":"1707","type":"Selection"},{"attributes":{"text":"BERT-base","x":1,"y":88.5},"id":"1585","type":"Label"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1575","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"1565"},"dimension":1,"ticker":null},"id":"1568","type":"Grid"},{"attributes":{},"id":"1708","type":"UnionRenderers"},{"attributes":{},"id":"1615","type":"BasicTickFormatter"},{"attributes":{},"id":"1557","type":"LinearScale"},{"attributes":{},"id":"1617","type":"BasicTickFormatter"}],"root_ids":["1551"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"88e55028-8751-47f6-becb-5aed75d6f101","root_ids":["1551"],"roots":{"1551":"7a257d1d-fef5-4c71-8f79-e9538f124845"}}];
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