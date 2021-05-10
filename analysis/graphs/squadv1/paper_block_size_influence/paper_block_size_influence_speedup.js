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
    
      
      
    
      var element = document.getElementById("760f0275-3442-4db7-8512-5442fc341a5b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '760f0275-3442-4db7-8512-5442fc341a5b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ce0f9b0a-1bb1-4ecf-817a-040285eb1785":{"roots":{"references":[{"attributes":{"data":{"x":[1.612951511916643],"y":[90.0]},"selected":{"id":"1689"},"selection_policy":{"id":"1688"}},"id":"1667","type":"ColumnDataSource"},{"attributes":{},"id":"1799","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1655"},"glyph":{"id":"1656"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1657"},"selection_glyph":null,"view":{"id":"1659"}},"id":"1658","type":"GlyphRenderer"},{"attributes":{},"id":"1679","type":"BasicTickFormatter"},{"attributes":{},"id":"1800","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1657","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1668","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1656","type":"Scatter"},{"attributes":{},"id":"1715","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1661"},"glyph":{"id":"1662"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1663"},"selection_glyph":null,"view":{"id":"1665"}},"id":"1664","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1649"},"glyph":{"id":"1650"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1651"},"selection_glyph":null,"view":{"id":"1653"}},"id":"1652","type":"GlyphRenderer"},{"attributes":{},"id":"1716","type":"Selection"},{"attributes":{"source":{"id":"1672"}},"id":"1676","type":"CDSView"},{"attributes":{},"id":"1684","type":"UnionRenderers"},{"attributes":{},"id":"1685","type":"Selection"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"1685"},"selection_policy":{"id":"1684"}},"id":"1655","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1674","type":"Line"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"1679"},"ticker":{"id":"1625"}},"id":"1624","type":"LinearAxis"},{"attributes":{},"id":"1622","type":"LinearScale"},{"attributes":{"axis_label":"F1","formatter":{"id":"1681"},"ticker":{"id":"1629"}},"id":"1628","type":"LinearAxis"},{"attributes":{},"id":"1683","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1669","type":"Scatter"},{"attributes":{"data_source":{"id":"1719"},"glyph":{"id":"1720"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1721"},"selection_glyph":null,"view":{"id":"1723"}},"id":"1722","type":"GlyphRenderer"},{"attributes":{},"id":"1686","type":"UnionRenderers"},{"attributes":{"source":{"id":"1649"}},"id":"1653","type":"CDSView"},{"attributes":{},"id":"1687","type":"Selection"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1720","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1663","type":"Scatter"},{"attributes":{"data":{"x":[1.2806693802635063,1.4665027478478643,1.8303357184393354],"y":[88.34112193061533,87.65780769915727,86.57822332702295]},"selected":{"id":"1742"},"selection_policy":{"id":"1741"}},"id":"1719","type":"ColumnDataSource"},{"attributes":{},"id":"1632","type":"PanTool"},{"attributes":{"source":{"id":"1719"}},"id":"1723","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1721","type":"Line"},{"attributes":{"below":[{"id":"1624"}],"center":[{"id":"1627"},{"id":"1631"},{"id":"1648"},{"id":"1654"},{"id":"1660"},{"id":"1666"},{"id":"1693"}],"left":[{"id":"1628"}],"plot_width":800,"renderers":[{"id":"1652"},{"id":"1658"},{"id":"1664"},{"id":"1670"},{"id":"1675"},{"id":"1698"},{"id":"1722"},{"id":"1748"},{"id":"1776"}],"title":null,"toolbar":{"id":"1639"},"x_range":{"id":"1646"},"x_scale":{"id":"1620"},"y_range":{"id":"1647"},"y_scale":{"id":"1622"}},"id":"1614","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"Block Size=16"},"renderers":[{"id":"1722"}]},"id":"1744","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1632"},{"id":"1633"},{"id":"1634"},{"id":"1635"},{"id":"1636"},{"id":"1637"}]},"id":"1639","type":"Toolbar"},{"attributes":{},"id":"1682","type":"UnionRenderers"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1746","type":"Line"},{"attributes":{},"id":"1633","type":"WheelZoomTool"},{"attributes":{},"id":"1688","type":"UnionRenderers"},{"attributes":{},"id":"1689","type":"Selection"},{"attributes":{"line_color":"#66a61e","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1673","type":"Line"},{"attributes":{"data_source":{"id":"1667"},"glyph":{"id":"1668"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1669"},"selection_glyph":null,"view":{"id":"1671"}},"id":"1670","type":"GlyphRenderer"},{"attributes":{},"id":"1741","type":"UnionRenderers"},{"attributes":{},"id":"1742","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1662","type":"Scatter"},{"attributes":{"data":{"x":[0.9840340185670864,1.026141974757969,1.095528107464865,1.1632636047982534,1.170038217254783,1.2607211638158147,1.3349999991845345,1.3926143255719736,1.5170581452285046],"y":[90.24019516114679,89.78322305629628,88.66959543954316,88.11360890595924,87.64967103979136,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"1691"},"selection_policy":{"id":"1690"}},"id":"1672","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1655"}},"id":"1659","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1638","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1651","type":"Scatter"},{"attributes":{"end":3.0,"start":0.85},"id":"1646","type":"Range1d"},{"attributes":{"source":{"id":"1661"}},"id":"1665","type":"CDSView"},{"attributes":{},"id":"1690","type":"UnionRenderers"},{"attributes":{},"id":"1691","type":"Selection"},{"attributes":{"data_source":{"id":"1745"},"glyph":{"id":"1746"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1747"},"selection_glyph":null,"view":{"id":"1749"}},"id":"1748","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1672"},"glyph":{"id":"1673"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1674"},"selection_glyph":null,"view":{"id":"1676"}},"id":"1675","type":"GlyphRenderer"},{"attributes":{"end":90.75,"start":84.5},"id":"1647","type":"Range1d"},{"attributes":{"text":"DistilBERT","x":1.63,"y":86.9},"id":"1654","type":"Label"},{"attributes":{"overlay":{"id":"1638"}},"id":"1634","type":"BoxZoomTool"},{"attributes":{"data":{"x":[1],"y":[88.5]},"selected":{"id":"1683"},"selection_policy":{"id":"1682"}},"id":"1649","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.1977117757004876,1.3059049623464731,1.319204091160467,1.3371368758339826,1.5645594133095706,2.0060775865978457],"y":[88.3744311515211,88.02730364897265,87.861684752796,87.66615713942541,86.84949475139184,85.16652519097626]},"selected":{"id":"1770"},"selection_policy":{"id":"1769"}},"id":"1745","type":"ColumnDataSource"},{"attributes":{},"id":"1635","type":"SaveTool"},{"attributes":{},"id":"1636","type":"ResetTool"},{"attributes":{"source":{"id":"1745"}},"id":"1749","type":"CDSView"},{"attributes":{"source":{"id":"1667"}},"id":"1671","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1747","type":"Line"},{"attributes":{"text":"MobileBERT","x":1.612951511916643,"y":90.0},"id":"1666","type":"Label"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"1687"},"selection_policy":{"id":"1686"}},"id":"1661","type":"ColumnDataSource"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1774","type":"Line"},{"attributes":{},"id":"1629","type":"BasicTicker"},{"attributes":{"axis":{"id":"1624"},"ticker":null},"id":"1627","type":"Grid"},{"attributes":{"label":{"value":"Block Size=8"},"renderers":[{"id":"1748"}]},"id":"1772","type":"LegendItem"},{"attributes":{"label":{"value":"Soft Movement"},"renderers":[{"id":"1675"}]},"id":"1694","type":"LegendItem"},{"attributes":{},"id":"1769","type":"UnionRenderers"},{"attributes":{},"id":"1625","type":"BasicTicker"},{"attributes":{},"id":"1770","type":"Selection"},{"attributes":{"axis":{"id":"1628"},"dimension":1,"ticker":null},"id":"1631","type":"Grid"},{"attributes":{"click_policy":"hide","items":[{"id":"1694"},{"id":"1718"},{"id":"1744"},{"id":"1772"},{"id":"1802"}]},"id":"1693","type":"Legend"},{"attributes":{"text":"TinyBERT","x":2.0,"y":87.5},"id":"1660","type":"Label"},{"attributes":{},"id":"1681","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1773"},"glyph":{"id":"1774"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1775"},"selection_glyph":null,"view":{"id":"1777"}},"id":"1776","type":"GlyphRenderer"},{"attributes":{},"id":"1620","type":"LinearScale"},{"attributes":{"data":{"x":[1.2129893613486789,1.232662374177603,1.4146984734806616,1.4569389629649467,1.5765472050873537,1.599770932365684,1.7643216216448254,1.7886473497076825,1.9655458674518098,2.0054680821187447,2.2874144573134694,2.289378243109522],"y":[88.73698799207777,88.67903677006836,88.10463591853348,87.91705961229685,87.40026291426761,87.30735739624531,86.768721062838,86.11161494070976,85.97854187426412,85.84893170709621,85.3167029862563,85.17930403802184]},"selected":{"id":"1716"},"selection_policy":{"id":"1715"}},"id":"1695","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1650","type":"Scatter"},{"attributes":{"source":{"id":"1695"}},"id":"1699","type":"CDSView"},{"attributes":{"data":{"x":[1.1252216532791355,1.1538953400165994,1.1931736074335828,1.1988795413397866,1.302586687378539,1.3515039902008532,1.5664666750452154,1.5668552712310941,1.5696177764204813],"y":[88.58172107792693,88.21768668110452,88.02284574429551,87.80889686617203,87.37325813950282,87.31499809166372,85.93146728512978,85.88482767255138,85.78500582028688]},"selected":{"id":"1800"},"selection_policy":{"id":"1799"}},"id":"1773","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1773"}},"id":"1777","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1775","type":"Line"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1696","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1697","type":"Line"},{"attributes":{"data_source":{"id":"1695"},"glyph":{"id":"1696"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1697"},"selection_glyph":null,"view":{"id":"1699"}},"id":"1698","type":"GlyphRenderer"},{"attributes":{},"id":"1637","type":"HelpTool"},{"attributes":{"text":"BERT-base","x":1,"y":88.5},"id":"1648","type":"Label"},{"attributes":{"label":{"value":"Block Size=32"},"renderers":[{"id":"1698"}]},"id":"1718","type":"LegendItem"},{"attributes":{"label":{"value":"Block Size=4"},"renderers":[{"id":"1776"}]},"id":"1802","type":"LegendItem"}],"root_ids":["1614"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"ce0f9b0a-1bb1-4ecf-817a-040285eb1785","root_ids":["1614"],"roots":{"1614":"760f0275-3442-4db7-8512-5442fc341a5b"}}];
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