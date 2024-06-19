//Plugins

/** jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ **/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
  },
  easeInQuad: function (e, f, a, h, g) {
    return h * (f /= g) * f + a;
  },
  easeOutQuad: function (e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a;
  },
  easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f + a;
    }
    return (-h / 2) * (--f * (f - 2) - 1) + a;
  },
  easeInCubic: function (e, f, a, h, g) {
    return h * (f /= g) * f * f + a;
  },
  easeOutCubic: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a;
  },
  easeInOutCubic: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f + 2) + a;
  },
  easeInQuart: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a;
  },
  easeOutQuart: function (e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a;
  },
  easeInOutQuart: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f + a;
    }
    return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
  },
  easeInQuint: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a;
  },
  easeOutQuint: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
  },
  easeInOutQuint: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
  },
  easeInSine: function (e, f, a, h, g) {
    return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
  },
  easeOutSine: function (e, f, a, h, g) {
    return h * Math.sin((f / g) * (Math.PI / 2)) + a;
  },
  easeInOutSine: function (e, f, a, h, g) {
    return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
  },
  easeInExpo: function (e, f, a, h, g) {
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
  },
  easeOutExpo: function (e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
  },
  easeInOutExpo: function (e, f, a, h, g) {
    if (f == 0) {
      return a;
    }
    if (f == g) {
      return a + h;
    }
    if ((f /= g / 2) < 1) {
      return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
    }
    return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
  },
  easeInCirc: function (e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
  },
  easeOutCirc: function (e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
  },
  easeInOutCirc: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
    }
    return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
  },
  easeInElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      -(
        g *
        Math.pow(2, 10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j)
      ) + e
    );
  },
  easeOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) +
      l +
      e
    );
  },
  easeInOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k / 2) == 2) {
      return e + l;
    }
    if (!j) {
      j = k * (0.3 * 1.5);
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    if (h < 1) {
      return (
        -0.5 *
          (g *
            Math.pow(2, 10 * (h -= 1)) *
            Math.sin(((h * k - i) * (2 * Math.PI)) / j)) +
        e
      );
    }
    return (
      g *
        Math.pow(2, -10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j) *
        0.5 +
      l +
      e
    );
  },
  easeInBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a;
  },
  easeOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
  },
  easeInOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    if ((f /= h / 2) < 1) {
      return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
    }
    return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
  },
  easeInBounce: function (e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
  },
  easeOutBounce: function (e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a;
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
        }
      }
    }
  },
  easeInOutBounce: function (e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
    }
    return (
      jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    );
  },
});

/** Scroll to **/
(function scrollto() {
  var h = ($.scrollTo = function (a, b, c) {
    $(window).scrollTo(a, b, c);
  });
  h.defaults = {
    axis: "xy",
    duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
    limit: true,
  };
  h.window = function (a) {
    return $(window)._scrollable();
  };
  $.fn._scrollable = function () {
    return this.map(function () {
      var a = this,
        isWin =
          !a.nodeName ||
          $.inArray(a.nodeName.toLowerCase(), [
            "iframe",
            "#document",
            "html",
            "body",
          ]) != -1;
      if (!isWin) return a;
      var b = (a.contentWindow || a).document || a.ownerDocument || a;
      return /webkit/i.test(navigator.userAgent) || b.compatMode == "BackCompat"
        ? b.body
        : b.documentElement;
    });
  };
  $.fn.scrollTo = function (e, f, g) {
    if (typeof f == "object") {
      g = f;
      f = 0;
    }
    if (typeof g == "function") g = { onAfter: g };
    if (e == "max") e = 9e9;
    g = $.extend({}, h.defaults, g);
    f = f || g.duration;
    g.queue = g.queue && g.axis.length > 1;
    if (g.queue) f /= 2;
    g.offset = both(g.offset);
    g.over = both(g.over);
    return this._scrollable()
      .each(function () {
        if (!e) return;
        var d = this,
          $elem = $(d),
          targ = e,
          toff,
          attr = {},
          win = $elem.is("html,body");
        switch (typeof targ) {
          case "number":
          case "string":
            if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
              targ = both(targ);
              break;
            }
            targ = $(targ, this);
            if (!targ.length) return;
          case "object":
            if (targ.is || targ.style) toff = (targ = $(targ)).offset();
        }
        $.each(g.axis.split(""), function (i, a) {
          var b = a == "x" ? "Left" : "Top",
            pos = b.toLowerCase(),
            key = "scroll" + b,
            old = d[key],
            max = h.max(d, a);
          if (toff) {
            attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
            if (g.margin) {
              attr[key] -= parseInt(targ.css("margin" + b)) || 0;
              attr[key] -= parseInt(targ.css("border" + b + "Width")) || 0;
            }
            attr[key] += g.offset[pos] || 0;
            if (g.over[pos])
              attr[key] += targ[a == "x" ? "width" : "height"]() * g.over[pos];
          } else {
            var c = targ[pos];
            attr[key] =
              c.slice && c.slice(-1) == "%" ? (parseFloat(c) / 100) * max : c;
          }
          if (g.limit && /^\d+$/.test(attr[key]))
            attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
          if (!i && g.queue) {
            if (old != attr[key]) animate(g.onAfterFirst);
            delete attr[key];
          }
        });
        animate(g.onAfter);
        function animate(a) {
          $elem.animate(
            attr,
            f,
            g.easing,
            a &&
              function () {
                a.call(this, e, g);
              }
          );
        }
      })
      .end();
  };
  h.max = function (a, b) {
    var c = b == "x" ? "Width" : "Height",
      scroll = "scroll" + c;
    if (!$(a).is("html,body")) return a[scroll] - $(a)[c.toLowerCase()]();
    var d = "client" + c,
      html = a.ownerDocument.documentElement,
      body = a.ownerDocument.body;
    return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d]);
  };
  function both(a) {
    return typeof a == "object" ? a : { top: a, left: a };
  }
})(jQuery);

/*!
 * Isotope
 */
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))),
          (s.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning))
          return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({
            to: a,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });

/** aos **/
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
  })([
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        f = o(c),
        s = n(8),
        d = o(s),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = document.all && !window.atob,
        j = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
        },
        O = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ((e && (k = !0), k))
            return (w = (0, y.default)(w, j)), (0, b.default)(w, j.once), w;
        },
        S = function () {
          (w = (0, h.default)()), O();
        },
        _ = function () {
          w.forEach(function (e, t) {
            e.node.removeAttribute("data-aos"),
              e.node.removeAttribute("data-aos-easing"),
              e.node.removeAttribute("data-aos-duration"),
              e.node.removeAttribute("data-aos-delay");
          });
        },
        E = function (e) {
          return (
            e === !0 ||
            ("mobile" === e && p.default.mobile()) ||
            ("phone" === e && p.default.phone()) ||
            ("tablet" === e && p.default.tablet()) ||
            ("function" == typeof e && e() === !0)
          );
        },
        z = function (e) {
          return (
            (j = i(j, e)),
            (w = (0, h.default)()),
            E(j.disable) || x
              ? _()
              : (document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", j.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", j.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", j.delay),
                "DOMContentLoaded" === j.startEvent &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? O(!0)
                  : "load" === j.startEvent
                  ? window.addEventListener(j.startEvent, function () {
                      O(!0);
                    })
                  : document.addEventListener(j.startEvent, function () {
                      O(!0);
                    }),
                window.addEventListener("resize", (0, f.default)(O, 50, !0)),
                window.addEventListener(
                  "orientationchange",
                  (0, f.default)(O, 50, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, u.default)(function () {
                    (0, b.default)(w, j.once);
                  }, 99)
                ),
                document.addEventListener("DOMNodeRemoved", function (e) {
                  var t = e.target;
                  t &&
                    1 === t.nodeType &&
                    t.hasAttribute &&
                    t.hasAttribute("data-aos") &&
                    (0, f.default)(S, 50, !0);
                }),
                (0, d.default)("[data-aos]", S),
                w)
          );
        };
      e.exports = { init: z, refresh: O, refreshHard: S };
    },
    function (e, t) {},
    ,
    ,
    ,
    ,
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function o(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (k = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (k = e), (h = setTimeout(s, t)), S ? o(e) : g;
          }
          function a(e) {
            var n = e - w,
              o = e - k,
              i = t - n;
            return _ ? j(i, y - o) : i;
          }
          function c(e) {
            var n = e - w,
              o = e - k;
            return void 0 === w || n >= t || n < 0 || (_ && o >= y);
          }
          function s() {
            var e = O();
            return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
          }
          function d(e) {
            return (h = void 0), E && b ? o(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(O());
          }
          function m() {
            var e = O(),
              n = c(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (_) return (h = setTimeout(s, t)), o(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            S = !1,
            _ = !1,
            E = !0;
          if ("function" != typeof e) throw new TypeError(f);
          return (
            (t = u(t) || 0),
            i(n) &&
              ((S = !!n.leading),
              (_ = "maxWait" in n),
              (y = _ ? x(u(n.maxWait) || 0, t) : y),
              (E = "trailing" in n ? !!n.trailing : E)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e, t, o) {
          var r = !0,
            a = !0;
          if ("function" != typeof e) throw new TypeError(f);
          return (
            i(o) &&
              ((r = "leading" in o ? !!o.leading : r),
              (a = "trailing" in o ? !!o.trailing : a)),
            n(e, t, { leading: r, maxWait: t, trailing: a })
          );
        }
        function i(e) {
          var t = "undefined" == typeof e ? "undefined" : c(e);
          return !!e && ("object" == t || "function" == t);
        }
        function r(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
          );
        }
        function a(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) ||
            (r(e) && k.call(e) == d)
          );
        }
        function u(e) {
          if ("number" == typeof e) return e;
          if (a(e)) return s;
          if (i(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(l, "");
          var n = m.test(e);
          return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
        }
        var c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          f = "Expected a function",
          s = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y =
            "object" == ("undefined" == typeof t ? "undefined" : c(t)) &&
            t &&
            t.Object === Object &&
            t,
          g =
            "object" == ("undefined" == typeof self ? "undefined" : c(self)) &&
            self &&
            self.Object === Object &&
            self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function () {
            return h.Date.now();
          };
        e.exports = o;
      }).call(
        t,
        (function () {
          return this;
        })()
      );
    },
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function i(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (O = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (O = e), (h = setTimeout(s, t)), S ? i(e) : g;
          }
          function u(e) {
            var n = e - w,
              o = e - O,
              i = t - n;
            return _ ? x(i, y - o) : i;
          }
          function f(e) {
            var n = e - w,
              o = e - O;
            return void 0 === w || n >= t || n < 0 || (_ && o >= y);
          }
          function s() {
            var e = j();
            return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
          }
          function d(e) {
            return (h = void 0), E && b ? i(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(j());
          }
          function m() {
            var e = j(),
              n = f(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (_) return (h = setTimeout(s, t)), i(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            S = !1,
            _ = !1,
            E = !0;
          if ("function" != typeof e) throw new TypeError(c);
          return (
            (t = a(t) || 0),
            o(n) &&
              ((S = !!n.leading),
              (_ = "maxWait" in n),
              (y = _ ? k(a(n.maxWait) || 0, t) : y),
              (E = "trailing" in n ? !!n.trailing : E)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e) {
          var t = "undefined" == typeof e ? "undefined" : u(e);
          return !!e && ("object" == t || "function" == t);
        }
        function i(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
          );
        }
        function r(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) ||
            (i(e) && w.call(e) == s)
          );
        }
        function a(e) {
          if ("number" == typeof e) return e;
          if (r(e)) return f;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(d, "");
          var n = p.test(e);
          return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
        }
        var u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          c = "Expected a function",
          f = NaN,
          s = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v =
            "object" == ("undefined" == typeof t ? "undefined" : u(t)) &&
            t &&
            t.Object === Object &&
            t,
          y =
            "object" == ("undefined" == typeof self ? "undefined" : u(self)) &&
            self &&
            self.Object === Object &&
            self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function () {
            return g.Date.now();
          };
        e.exports = n;
      }).call(
        t,
        (function () {
          return this;
        })()
      );
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        a.push({ selector: e, fn: t }),
          !u &&
            r &&
            ((u = new r(o)),
            u.observe(i.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            })),
          o();
      }
      function o() {
        for (var e, t, n = 0, o = a.length; n < o; n++) {
          (e = a[n]), (t = i.querySelectorAll(e.selector));
          for (var r, u = 0, c = t.length; u < c; u++)
            (r = t[u]), r.ready || ((r.ready = !0), e.fn.call(r, r));
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = window.document,
        r = window.MutationObserver || window.WebKitMutationObserver,
        a = [],
        u = void 0;
      t.default = n;
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        f = (function () {
          function e() {
            n(this, e);
          }
          return (
            i(e, [
              {
                key: "phone",
                value: function () {
                  var e = o();
                  return !(!r.test(e) && !a.test(e.substr(0, 4)));
                },
              },
              {
                key: "mobile",
                value: function () {
                  var e = o();
                  return !(!u.test(e) && !c.test(e.substr(0, 4)));
                },
              },
              {
                key: "tablet",
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
            ]),
            e
          );
        })();
      t.default = new f();
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e, t, n) {
          var o = e.node.getAttribute("data-aos-once");
          t > e.position
            ? e.node.classList.add("aos-animate")
            : "undefined" != typeof o &&
              ("false" === o || (!n && "true" !== o)) &&
              e.node.classList.remove("aos-animate");
        },
        o = function (e, t) {
          var o = window.pageYOffset,
            i = window.innerHeight;
          e.forEach(function (e, r) {
            n(e, i + o, t);
          });
        };
      t.default = o;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(12),
        r = o(i),
        a = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add("aos-init"),
                (e.position = (0, r.default)(e.node, t.offset));
            }),
            e
          );
        };
      t.default = a;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(13),
        r = o(i),
        a = function (e, t) {
          var n = 0,
            o = 0,
            i = window.innerHeight,
            a = {
              offset: e.getAttribute("data-aos-offset"),
              anchor: e.getAttribute("data-aos-anchor"),
              anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
            };
          switch (
            (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor &&
              document.querySelectorAll(a.anchor) &&
              (e = document.querySelectorAll(a.anchor)[0]),
            (n = (0, r.default)(e).top),
            a.anchorPlacement)
          ) {
            case "top-bottom":
              break;
            case "center-bottom":
              n += e.offsetHeight / 2;
              break;
            case "bottom-bottom":
              n += e.offsetHeight;
              break;
            case "top-center":
              n += i / 2;
              break;
            case "bottom-center":
              n += i / 2 + e.offsetHeight;
              break;
            case "center-center":
              n += i / 2 + e.offsetHeight / 2;
              break;
            case "top-top":
              n += i;
              break;
            case "bottom-top":
              n += e.offsetHeight + i;
              break;
            case "center-top":
              n += e.offsetHeight / 2 + i;
          }
          return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
        };
      t.default = a;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        for (
          var t = 0, n = 0;
          e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

        )
          (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
            (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return { top: n, left: t };
      };
      t.default = n;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        e = e || document.querySelectorAll("[data-aos]");
        var t = [];
        return (
          [].forEach.call(e, function (e, n) {
            t.push({ node: e });
          }),
          t
        );
      };
      t.default = n;
    },
  ]);
});
//# sourceMappingURL=aos.js.map

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: "auto",
              "margin-left": d ? b : "",
              "margin-right": d ? "" : b,
            };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g--; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i);
          (this._clones = b),
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || "",
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass("active"),
            this.settings.center &&
              (this.$stage.children(".center").removeClass("center"),
              this.$stage.children().eq(this.current()).addClass("center"));
        },
      },
    ]),
    (e.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var b, c, e;
        (b = this.$element.find("img")),
          (c = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (e = this.$element.children(c).width()),
          b.length && e <= 0 && this.preloadAutoWidthImages(b);
      }
      this.$element.addClass(this.options.loadingClass),
        (this.$stage = a(
          "<" +
            this.settings.stageElement +
            ' class="' +
            this.settings.stageClass +
            '"/>'
        ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(":visible")
          ? this.refresh()
          : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.$element.is(":visible") &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + ".owl.core",
          a.proxy(this.onTransitionEnd, this)
        ),
        this.settings.responsive !== !1 &&
          this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            a.proxy(this.onDragEnd, this)
          ));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          "mouseup.owl.core touchend.owl.core",
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              "mousemove.owl.core touchmove.owl.core",
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function (b, c) {
      var d = -1,
        e = 30,
        f = this.width(),
        g = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            g,
            a.proxy(function (a, h) {
              return (
                "left" === c && b > h - e && b < h + e
                  ? (d = a)
                  : "right" === c && b > h - f - e && b < h - f + e
                  ? (d = a + 1)
                  : this.op(b, "<", h) &&
                    this.op(b, ">", g[a + 1] || h - f) &&
                    (d = "left" === c ? a + 1 : a),
                d === -1
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", g[this.minimum()])
            ? (d = b = this.minimum())
            : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
        d
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition: this.speed() / 1e3 + "s",
            })
          : c
          ? this.$stage.animate(
              { left: b + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + "px" });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        "string" === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)),
        a !== d &&
          ((this._speed = 0),
          (this._current = a),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(a)),
          this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        for (
          b = this._items.length,
            c = this._items[--b].width(),
            d = this.$element.width();
          b-- &&
          ((c += this._items[b].width() + this.settings.margin), !(c > d));

        );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h),
          d !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.$element.is(":visible") && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn("Can not detect viewport width."),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)),
        a !== d &&
          (this.trigger("remove", { content: this._items[a], position: a }),
          this._items[a].remove(),
          this._items.splice(a, 1),
          this._mergers.splice(a, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function (a) {
                  c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        this.settings.responsive !== !1 &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : a < c;
        case ">":
          return d ? a < c : a > c;
        case ">=":
          return d ? a <= c : a >= c;
        case "<=":
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        j = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            "function" == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && a.namespace.indexOf("owl") !== -1)
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data("owl.carousel");
        f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + ".owl.carousel.core",
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f)
                );
            }
          )),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              )
                for (
                  var c = this._core.settings,
                    e = (c.center && Math.ceil(c.items / 2)) || c.items,
                    f = (c.center && e * -1) || 0,
                    g =
                      (b.property && b.property.value !== d
                        ? b.property.value
                        : this._core.current()) + f,
                    h = this._core.clones().length,
                    i = a.proxy(function (a, b) {
                      this.load(b);
                    }, this);
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": 'url("' + g + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" == a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.$stage.children().toArray().slice(b, c),
          e = [],
          f = 0;
        a.each(d, function (b, c) {
          e.push(a(c).height());
        }),
          (f = Math.max.apply(null, e)),
          this._core.$stage
            .parent()
            .height(f)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"'
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (a) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? '<div class="owl-video-tn ' +
                  j +
                  '" ' +
                  i +
                  '="' +
                  a +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  a +
                  ')"></div>'),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type
          ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
          : "vimeo" === c.type
          ? a.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : "vzaar" === c.type &&
            a.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          "youtube" === f.type
            ? (c =
                '<iframe width="' +
                g +
                '" height="' +
                h +
                '" src="//www.youtube.com/embed/' +
                f.id +
                "?autoplay=1&rel=0&v=" +
                f.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === f.type
            ? (c =
                '<iframe src="//player.vimeo.com/video/' +
                f.id +
                '?autoplay=1" width="' +
                g +
                '" height="' +
                h +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : "vzaar" === f.type &&
              (c =
                '<iframe frameborder="0"height="' +
                h +
                '"width="' +
                g +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                f.id +
                '/player?autoplay=true"></iframe>'),
          a('<div class="owl-video-frame">' + c + "</div>").insertAfter(
            e.find(".owl-video")
          ),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              a.namespace && (this.swapping = "translated" == a.type);
            }, this),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype.play = function (a, b) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (e.prototype._getNextTimeout = function (d, e) {
        return (
          this._timeout && b.clearTimeout(this._timeout),
          b.setTimeout(
            a.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                c.hidden ||
                this._core.next(e || this._core.settings.autoplaySpeed);
            }, this),
            d || this._core.settings.autoplayTimeout
          )
        );
      }),
      (e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          (b.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a("<div>")
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "div",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

// Magnific Popup v1.1.0 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+imagezoom
(function (a) {
  typeof define == "function" && define.amd
    ? define(["jquery"], a)
    : typeof exports == "object"
    ? a(require("jquery"))
    : a(window.jQuery || window.Zepto);
})(function (a) {
  var b = "Close",
    c = "BeforeClose",
    d = "AfterClose",
    e = "BeforeAppend",
    f = "MarkupParse",
    g = "Open",
    h = "Change",
    i = "mfp",
    j = "." + i,
    k = "mfp-ready",
    l = "mfp-removing",
    m = "mfp-prevent-close",
    n,
    o = function () {},
    p = !!window.jQuery,
    q,
    r = a(window),
    s,
    t,
    u,
    v,
    w = function (a, b) {
      n.ev.on(i + a + j, b);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (b, c) {
      n.ev.triggerHandler(i + b, c),
        n.st.callbacks &&
          ((b = b.charAt(0).toLowerCase() + b.slice(1)),
          n.st.callbacks[b] &&
            n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]));
    },
    z = function (b) {
      if (b !== v || !n.currTemplate.closeBtn)
        (n.currTemplate.closeBtn = a(
          n.st.closeMarkup.replace("%title%", n.st.tClose)
        )),
          (v = b);
      return n.currTemplate.closeBtn;
    },
    A = function () {
      a.magnificPopup.instance ||
        ((n = new o()), n.init(), (a.magnificPopup.instance = n));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (a.transition !== undefined) return !0;
      while (b.length) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (o.prototype = {
    constructor: o,
    init: function () {
      var b = navigator.appVersion;
      (n.isLowIE = n.isIE8 = document.all && !document.addEventListener),
        (n.isAndroid = /android/gi.test(b)),
        (n.isIOS = /iphone|ipad|ipod/gi.test(b)),
        (n.supportsTransition = B()),
        (n.probablyMobile =
          n.isAndroid ||
          n.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (s = a(document)),
        (n.popupsCache = {});
    },
    open: function (b) {
      var c;
      if (b.isObj === !1) {
        (n.items = b.items.toArray()), (n.index = 0);
        var d = b.items,
          e;
        for (c = 0; c < d.length; c++) {
          (e = d[c]), e.parsed && (e = e.el[0]);
          if (e === b.el[0]) {
            n.index = c;
            break;
          }
        }
      } else
        (n.items = a.isArray(b.items) ? b.items : [b.items]),
          (n.index = b.index || 0);
      if (n.isOpen) {
        n.updateItemHTML();
        return;
      }
      (n.types = []),
        (u = ""),
        b.mainEl && b.mainEl.length ? (n.ev = b.mainEl.eq(0)) : (n.ev = s),
        b.key
          ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}),
            (n.currTemplate = n.popupsCache[b.key]))
          : (n.currTemplate = {}),
        (n.st = a.extend(!0, {}, a.magnificPopup.defaults, b)),
        (n.fixedContentPos =
          n.st.fixedContentPos === "auto"
            ? !n.probablyMobile
            : n.st.fixedContentPos),
        n.st.modal &&
          ((n.st.closeOnContentClick = !1),
          (n.st.closeOnBgClick = !1),
          (n.st.showCloseBtn = !1),
          (n.st.enableEscapeKey = !1)),
        n.bgOverlay ||
          ((n.bgOverlay = x("bg").on("click" + j, function () {
            n.close();
          })),
          (n.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + j, function (a) {
              n._checkIfClose(a.target) && n.close();
            })),
          (n.container = x("container", n.wrap))),
        (n.contentContainer = x("content")),
        n.st.preloader &&
          (n.preloader = x("preloader", n.container, n.st.tLoading));
      var h = a.magnificPopup.modules;
      for (c = 0; c < h.length; c++) {
        var i = h[c];
        (i = i.charAt(0).toUpperCase() + i.slice(1)), n["init" + i].call(n);
      }
      y("BeforeOpen"),
        n.st.showCloseBtn &&
          (n.st.closeBtnInside
            ? (w(f, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (u += " mfp-close-btn-in"))
            : n.wrap.append(z())),
        n.st.alignTop && (u += " mfp-align-top"),
        n.fixedContentPos
          ? n.wrap.css({
              overflow: n.st.overflowY,
              overflowX: "hidden",
              overflowY: n.st.overflowY,
            })
          : n.wrap.css({ top: r.scrollTop(), position: "absolute" }),
        (n.st.fixedBgPos === !1 ||
          (n.st.fixedBgPos === "auto" && !n.fixedContentPos)) &&
          n.bgOverlay.css({ height: s.height(), position: "absolute" }),
        n.st.enableEscapeKey &&
          s.on("keyup" + j, function (a) {
            a.keyCode === 27 && n.close();
          }),
        r.on("resize" + j, function () {
          n.updateSize();
        }),
        n.st.closeOnContentClick || (u += " mfp-auto-cursor"),
        u && n.wrap.addClass(u);
      var l = (n.wH = r.height()),
        m = {};
      if (n.fixedContentPos && n._hasScrollBar(l)) {
        var o = n._getScrollbarSize();
        o && (m.marginRight = o);
      }
      n.fixedContentPos &&
        (n.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (m.overflow = "hidden"));
      var p = n.st.mainClass;
      return (
        n.isIE7 && (p += " mfp-ie7"),
        p && n._addClassToMFP(p),
        n.updateItemHTML(),
        y("BuildControls"),
        a("html").css(m),
        n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || a(document.body)),
        (n._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          n.content
            ? (n._addClassToMFP(k), n._setFocus())
            : n.bgOverlay.addClass(k),
            s.on("focusin" + j, n._onFocusIn);
        }, 16),
        (n.isOpen = !0),
        n.updateSize(l),
        y(g),
        b
      );
    },
    close: function () {
      if (!n.isOpen) return;
      y(c),
        (n.isOpen = !1),
        n.st.removalDelay && !n.isLowIE && n.supportsTransition
          ? (n._addClassToMFP(l),
            setTimeout(function () {
              n._close();
            }, n.st.removalDelay))
          : n._close();
    },
    _close: function () {
      y(b);
      var c = l + " " + k + " ";
      n.bgOverlay.detach(),
        n.wrap.detach(),
        n.container.empty(),
        n.st.mainClass && (c += n.st.mainClass + " "),
        n._removeClassFromMFP(c);
      if (n.fixedContentPos) {
        var e = { marginRight: "" };
        n.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      s.off("keyup" + j + " focusin" + j),
        n.ev.off(j),
        n.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        n.bgOverlay.attr("class", "mfp-bg"),
        n.container.attr("class", "mfp-container"),
        n.st.showCloseBtn &&
          (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) &&
          n.currTemplate.closeBtn &&
          n.currTemplate.closeBtn.detach(),
        n.st.autoFocusLast && n._lastFocusedEl && a(n._lastFocusedEl).focus(),
        (n.currItem = null),
        (n.content = null),
        (n.currTemplate = null),
        (n.prevHeight = 0),
        y(d);
    },
    updateSize: function (a) {
      if (n.isIOS) {
        var b = document.documentElement.clientWidth / window.innerWidth,
          c = window.innerHeight * b;
        n.wrap.css("height", c), (n.wH = c);
      } else n.wH = a || r.height();
      n.fixedContentPos || n.wrap.css("height", n.wH), y("Resize");
    },
    updateItemHTML: function () {
      var b = n.items[n.index];
      n.contentContainer.detach(),
        n.content && n.content.detach(),
        b.parsed || (b = n.parseEl(n.index));
      var c = b.type;
      y("BeforeChange", [n.currItem ? n.currItem.type : "", c]),
        (n.currItem = b);
      if (!n.currTemplate[c]) {
        var d = n.st[c] ? n.st[c].markup : !1;
        y("FirstMarkupParse", d),
          d ? (n.currTemplate[c] = a(d)) : (n.currTemplate[c] = !0);
      }
      t && t !== b.type && n.container.removeClass("mfp-" + t + "-holder");
      var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](
        b,
        n.currTemplate[c]
      );
      n.appendContent(e, c),
        (b.preloaded = !0),
        y(h, b),
        (t = b.type),
        n.container.prepend(n.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, b) {
      (n.content = a),
        a
          ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0
            ? n.content.find(".mfp-close").length || n.content.append(z())
            : (n.content = a)
          : (n.content = ""),
        y(e),
        n.container.addClass("mfp-" + b + "-holder"),
        n.contentContainer.append(n.content);
    },
    parseEl: function (b) {
      var c = n.items[b],
        d;
      c.tagName
        ? (c = { el: a(c) })
        : ((d = c.type), (c = { data: c, src: c.src }));
      if (c.el) {
        var e = n.types;
        for (var f = 0; f < e.length; f++)
          if (c.el.hasClass("mfp-" + e[f])) {
            d = e[f];
            break;
          }
        (c.src = c.el.attr("data-mfp-src")),
          c.src || (c.src = c.el.attr("href"));
      }
      return (
        (c.type = d || n.st.type || "inline"),
        (c.index = b),
        (c.parsed = !0),
        (n.items[b] = c),
        y("ElementParse", c),
        n.items[b]
      );
    },
    addGroup: function (a, b) {
      var c = function (c) {
        (c.mfpEl = this), n._openClick(c, a, b);
      };
      b || (b = {});
      var d = "click.magnificPopup";
      (b.mainEl = a),
        b.items
          ? ((b.isObj = !0), a.off(d).on(d, c))
          : ((b.isObj = !1),
            b.delegate
              ? a.off(d).on(d, b.delegate, c)
              : ((b.items = a), a.off(d).on(d, c)));
    },
    _openClick: function (b, c, d) {
      var e =
        d.midClick !== undefined
          ? d.midClick
          : a.magnificPopup.defaults.midClick;
      if (
        !e &&
        (b.which === 2 || b.ctrlKey || b.metaKey || b.altKey || b.shiftKey)
      )
        return;
      var f =
        d.disableOn !== undefined
          ? d.disableOn
          : a.magnificPopup.defaults.disableOn;
      if (f)
        if (a.isFunction(f)) {
          if (!f.call(n)) return !0;
        } else if (r.width() < f) return !0;
      b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()),
        (d.el = a(b.mfpEl)),
        d.delegate && (d.items = c.find(d.delegate)),
        n.open(d);
    },
    updateStatus: function (a, b) {
      if (n.preloader) {
        q !== a && n.container.removeClass("mfp-s-" + q),
          !b && a === "loading" && (b = n.st.tLoading);
        var c = { status: a, text: b };
        y("UpdateStatus", c),
          (a = c.status),
          (b = c.text),
          n.preloader.html(b),
          n.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          n.container.addClass("mfp-s-" + a),
          (q = a);
      }
    },
    _checkIfClose: function (b) {
      if (a(b).hasClass(m)) return;
      var c = n.st.closeOnContentClick,
        d = n.st.closeOnBgClick;
      if (c && d) return !0;
      if (
        !n.content ||
        a(b).hasClass("mfp-close") ||
        (n.preloader && b === n.preloader[0])
      )
        return !0;
      if (b !== n.content[0] && !a.contains(n.content[0], b)) {
        if (d && a.contains(document, b)) return !0;
      } else if (c) return !0;
      return !1;
    },
    _addClassToMFP: function (a) {
      n.bgOverlay.addClass(a), n.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), n.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (n.isIE7 ? s.height() : document.body.scrollHeight) > (a || r.height())
      );
    },
    _setFocus: function () {
      (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus();
    },
    _onFocusIn: function (b) {
      if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target))
        return n._setFocus(), !1;
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(f, [b, c, d]),
        a.each(c, function (c, d) {
          if (d === undefined || d === !1) return !0;
          e = c.split("_");
          if (e.length > 1) {
            var f = b.find(j + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              g === "replaceWith"
                ? f[0] !== d[0] && f.replaceWith(d)
                : g === "img"
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(j + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (n.scrollbarSize === undefined) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (n.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return n.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: o.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          b ? (b = a.extend(!0, {}, b)) : (b = {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (b) {
      A();
      var c = a(this);
      if (typeof b == "string")
        if (b === "open") {
          var d,
            e = p ? c.data("magnificPopup") : c[0].magnificPopup,
            f = parseInt(arguments[1], 10) || 0;
          e.items
            ? (d = e.items[f])
            : ((d = c), e.delegate && (d = d.find(e.delegate)), (d = d.eq(f))),
            n._openClick({ mfpEl: d }, c, e);
        } else
          n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));
      else
        (b = a.extend(!0, {}, b)),
          p ? c.data("magnificPopup", b) : (c[0].magnificPopup = b),
          n.addGroup(c, b);
      return c;
    });
  var C = "inline",
    D,
    E,
    F,
    G = function () {
      F && (E.after(F.addClass(D)).detach(), (F = null));
    };
  a.magnificPopup.registerModule(C, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        n.types.push(C),
          w(b + "." + C, function () {
            G();
          });
      },
      getInline: function (b, c) {
        G();
        if (b.src) {
          var d = n.st.inline,
            e = a(b.src);
          if (e.length) {
            var f = e[0].parentNode;
            f &&
              f.tagName &&
              (E || ((D = d.hiddenClass), (E = x(D)), (D = "mfp-" + D)),
              (F = e.after(E).detach().removeClass(D))),
              n.updateStatus("ready");
          } else n.updateStatus("error", d.tNotFound), (e = a("<div>"));
          return (b.inlineElement = e), e;
        }
        return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c;
      },
    },
  });
  var H = "ajax",
    I,
    J = function () {
      I && a(document.body).removeClass(I);
    },
    K = function () {
      J(), n.req && n.req.abort();
    };
  a.magnificPopup.registerModule(H, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        n.types.push(H),
          (I = n.st.ajax.cursor),
          w(b + "." + H, K),
          w("BeforeChange." + H, K);
      },
      getAjax: function (b) {
        I && a(document.body).addClass(I), n.updateStatus("loading");
        var c = a.extend(
          {
            url: b.src,
            success: function (c, d, e) {
              var f = { data: c, xhr: e };
              y("ParseAjax", f),
                n.appendContent(a(f.data), H),
                (b.finished = !0),
                J(),
                n._setFocus(),
                setTimeout(function () {
                  n.wrap.addClass(k);
                }, 16),
                n.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (b.finished = b.loadError = !0),
                n.updateStatus(
                  "error",
                  n.st.ajax.tError.replace("%url%", b.src)
                );
            },
          },
          n.st.ajax.settings
        );
        return (n.req = a.ajax(c)), "";
      },
    },
  });
  var L,
    M = function (b) {
      if (b.data && b.data.title !== undefined) return b.data.title;
      var c = n.st.image.titleSrc;
      if (c) {
        if (a.isFunction(c)) return c.call(n, b);
        if (b.el) return b.el.attr(c) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = n.st.image,
          d = ".image";
        n.types.push("image"),
          w(g + d, function () {
            n.currItem.type === "image" &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(b + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              r.off("resize" + j);
          }),
          w("Resize" + d, n.resizeImage),
          n.isLowIE && w("AfterChange", n.resizeImage);
      },
      resizeImage: function () {
        var a = n.currItem;
        if (!a || !a.img) return;
        if (n.st.image.verticalFit) {
          var b = 0;
          n.isLowIE &&
            (b =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", n.wH - b);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (n.content && n.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var b = 0,
          c = a.img[0],
          d = function (e) {
            L && clearInterval(L),
              (L = setInterval(function () {
                if (c.naturalWidth > 0) {
                  n._onImageHasSize(a);
                  return;
                }
                b > 200 && clearInterval(L),
                  b++,
                  b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500);
              }, e));
          };
        d(1);
      },
      getImage: function (b, c) {
        var d = 0,
          e = function () {
            b &&
              (b.img[0].complete
                ? (b.img.off(".mfploader"),
                  b === n.currItem &&
                    (n._onImageHasSize(b), n.updateStatus("ready")),
                  (b.hasSize = !0),
                  (b.loaded = !0),
                  y("ImageLoadComplete"))
                : (d++, d < 200 ? setTimeout(e, 100) : f()));
          },
          f = function () {
            b &&
              (b.img.off(".mfploader"),
              b === n.currItem &&
                (n._onImageHasSize(b),
                n.updateStatus("error", g.tError.replace("%url%", b.src))),
              (b.hasSize = !0),
              (b.loaded = !0),
              (b.loadError = !0));
          },
          g = n.st.image,
          h = c.find(".mfp-img");
        if (h.length) {
          var i = document.createElement("img");
          (i.className = "mfp-img"),
            b.el &&
              b.el.find("img").length &&
              (i.alt = b.el.find("img").attr("alt")),
            (b.img = a(i).on("load.mfploader", e).on("error.mfploader", f)),
            (i.src = b.src),
            h.is("img") && (b.img = b.img.clone()),
            (i = b.img[0]),
            i.naturalWidth > 0 ? (b.hasSize = !0) : i.width || (b.hasSize = !1);
        }
        return (
          n._parseMarkup(c, { title: M(b), img_replaceWith: b.img }, b),
          n.resizeImage(),
          b.hasSize
            ? (L && clearInterval(L),
              b.loadError
                ? (c.addClass("mfp-loading"),
                  n.updateStatus("error", g.tError.replace("%url%", b.src)))
                : (c.removeClass("mfp-loading"), n.updateStatus("ready")),
              c)
            : (n.updateStatus("loading"),
              (b.loading = !0),
              b.hasSize ||
                ((b.imgHidden = !0),
                c.addClass("mfp-loading"),
                n.findImageSize(b)),
              c)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        N === undefined &&
          (N = document.createElement("p").style.MozTransform !== undefined),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a = n.st.zoom,
          d = ".zoom",
          e;
        if (!a.enabled || !n.supportsTransition) return;
        var f = a.duration,
          g = function (b) {
            var c = b
                .clone()
                .removeAttr("style")
                .removeAttr("class")
                .addClass("mfp-animated-image"),
              d = "all " + a.duration / 1e3 + "s " + a.easing,
              e = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden",
              },
              f = "transition";
            return (
              (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
              c.css(e),
              c
            );
          },
          h = function () {
            n.content.css("visibility", "visible");
          },
          i,
          j;
        w("BuildControls" + d, function () {
          if (n._allowZoom()) {
            clearTimeout(i),
              n.content.css("visibility", "hidden"),
              (e = n._getItemToZoom());
            if (!e) {
              h();
              return;
            }
            (j = g(e)),
              j.css(n._getOffset()),
              n.wrap.append(j),
              (i = setTimeout(function () {
                j.css(n._getOffset(!0)),
                  (i = setTimeout(function () {
                    h(),
                      setTimeout(function () {
                        j.remove(), (e = j = null), y("ZoomAnimationEnded");
                      }, 16);
                  }, f));
              }, 16));
          }
        }),
          w(c + d, function () {
            if (n._allowZoom()) {
              clearTimeout(i), (n.st.removalDelay = f);
              if (!e) {
                e = n._getItemToZoom();
                if (!e) return;
                j = g(e);
              }
              j.css(n._getOffset(!0)),
                n.wrap.append(j),
                n.content.css("visibility", "hidden"),
                setTimeout(function () {
                  j.css(n._getOffset());
                }, 16);
            }
          }),
          w(b + d, function () {
            n._allowZoom() && (h(), j && j.remove(), (e = null));
          });
      },
      _allowZoom: function () {
        return n.currItem.type === "image";
      },
      _getItemToZoom: function () {
        return n.currItem.hasSize ? n.currItem.img : !1;
      },
      _getOffset: function (b) {
        var c;
        b
          ? (c = n.currItem.img)
          : (c = n.st.zoom.opener(n.currItem.el || n.currItem));
        var d = c.offset(),
          e = parseInt(c.css("padding-top"), 10),
          f = parseInt(c.css("padding-bottom"), 10);
        d.top -= a(window).scrollTop() - e;
        var g = {
          width: c.width(),
          height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e,
        };
        return (
          O()
            ? (g["-moz-transform"] = g.transform =
                "translate(" + d.left + "px," + d.top + "px)")
            : ((g.left = d.left), (g.top = d.top)),
          g
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (n.currTemplate[P]) {
        var b = n.currTemplate[P].find("iframe");
        b.length &&
          (a || (b[0].src = Q),
          n.isIE8 && b.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        n.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(b + "." + P, function () {
            R();
          });
      },
      getIframe: function (b, c) {
        var d = b.src,
          e = n.st.iframe;
        a.each(e.patterns, function () {
          if (d.indexOf(this.index) > -1)
            return (
              this.id &&
                (typeof this.id == "string"
                  ? (d = d.substr(
                      d.lastIndexOf(this.id) + this.id.length,
                      d.length
                    ))
                  : (d = this.id.call(this, d))),
              (d = this.src.replace("%id%", d)),
              !1
            );
        });
        var f = {};
        return (
          e.srcAction && (f[e.srcAction] = d),
          n._parseMarkup(c, f, b),
          n.updateStatus("ready"),
          c
        );
      },
    },
  });
  var S = function (a) {
      var b = n.items.length;
      return a > b - 1 ? a - b : a < 0 ? b + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = n.st.gallery,
          d = ".mfp-gallery";
        n.direction = !0;
        if (!c || !c.enabled) return !1;
        (u += " mfp-gallery"),
          w(g + d, function () {
            c.navigateByImgClick &&
              n.wrap.on("click" + d, ".mfp-img", function () {
                if (n.items.length > 1) return n.next(), !1;
              }),
              s.on("keydown" + d, function (a) {
                a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next();
              });
          }),
          w("UpdateStatus" + d, function (a, b) {
            b.text && (b.text = T(b.text, n.currItem.index, n.items.length));
          }),
          w(f + d, function (a, b, d, e) {
            var f = n.items.length;
            d.counter = f > 1 ? T(c.tCounter, e.index, f) : "";
          }),
          w("BuildControls" + d, function () {
            if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
              var b = c.arrowMarkup,
                d = (n.arrowLeft = a(
                  b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                ).addClass(m)),
                e = (n.arrowRight = a(
                  b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")
                ).addClass(m));
              d.click(function () {
                n.prev();
              }),
                e.click(function () {
                  n.next();
                }),
                n.container.append(d.add(e));
            }
          }),
          w(h + d, function () {
            n._preloadTimeout && clearTimeout(n._preloadTimeout),
              (n._preloadTimeout = setTimeout(function () {
                n.preloadNearbyImages(), (n._preloadTimeout = null);
              }, 16));
          }),
          w(b + d, function () {
            s.off(d),
              n.wrap.off("click" + d),
              (n.arrowRight = n.arrowLeft = null);
          });
      },
      next: function () {
        (n.direction = !0), (n.index = S(n.index + 1)), n.updateItemHTML();
      },
      prev: function () {
        (n.direction = !1), (n.index = S(n.index - 1)), n.updateItemHTML();
      },
      goTo: function (a) {
        (n.direction = a >= n.index), (n.index = a), n.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a = n.st.gallery.preload,
          b = Math.min(a[0], n.items.length),
          c = Math.min(a[1], n.items.length),
          d;
        for (d = 1; d <= (n.direction ? c : b); d++)
          n._preloadItem(n.index + d);
        for (d = 1; d <= (n.direction ? b : c); d++)
          n._preloadItem(n.index - d);
      },
      _preloadItem: function (b) {
        b = S(b);
        if (n.items[b].preloaded) return;
        var c = n.items[b];
        c.parsed || (c = n.parseEl(b)),
          y("LazyLoad", c),
          c.type === "image" &&
            (c.img = a('<img class="mfp-img" />')
              .on("load.mfploader", function () {
                c.hasSize = !0;
              })
              .on("error.mfploader", function () {
                (c.hasSize = !0), (c.loadError = !0), y("LazyLoadError", c);
              })
              .attr("src", c.src)),
          (c.preloaded = !0);
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = n.st.retina,
            b = a.ratio;
          (b = isNaN(b) ? b() : b),
            b > 1 &&
              (w("ImageHasSize." + U, function (a, c) {
                c.img.css({
                  "max-width": c.img[0].naturalWidth / b,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (c, d) {
                d.src = a.replaceSrc(d, b);
              }));
        }
      },
    },
  }),
    A();
});

/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.11.1
 * @url https://github.com/feimosi/baguetteBox.js
 */
!(function (e, t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.baguetteBox = t());
})(this, function () {
  "use strict";
  var r,
    l,
    u,
    c,
    d,
    f =
      '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
    g =
      '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
    p =
      '<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',
    b = {},
    v = {
      captions: !0,
      buttons: "auto",
      fullScreen: !1,
      noScrollbars: !1,
      bodyClass: "baguetteBox-open",
      titleTag: !1,
      async: !1,
      preload: 2,
      animation: "slideIn",
      afterShow: null,
      afterHide: null,
      onChange: null,
      overlayBackgroundColor: "rgba(0,0,0,.8)",
    },
    m = {},
    h = [],
    o = 0,
    n = !1,
    i = {},
    a = !1,
    y = /.+\.(gif|jpe?g|png|webp)/i,
    w = {},
    k = [],
    s = null,
    x = function (e) {
      -1 !== e.target.id.indexOf("baguette-img") && j();
    },
    E = function (e) {
      e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0), D();
    },
    C = function (e) {
      e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0), X();
    },
    B = function (e) {
      e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0), j();
    },
    T = function (e) {
      i.count++,
        1 < i.count && (i.multitouch = !0),
        (i.startX = e.changedTouches[0].pageX),
        (i.startY = e.changedTouches[0].pageY);
    },
    N = function (e) {
      if (!a && !i.multitouch) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        var t = e.touches[0] || e.changedTouches[0];
        40 < t.pageX - i.startX
          ? ((a = !0), D())
          : t.pageX - i.startX < -40
          ? ((a = !0), X())
          : 100 < i.startY - t.pageY && j();
      }
    },
    L = function () {
      i.count--, i.count <= 0 && (i.multitouch = !1), (a = !1);
    },
    A = function () {
      L();
    },
    P = function (e) {
      "block" === r.style.display &&
        r.contains &&
        !r.contains(e.target) &&
        (e.stopPropagation(), Y());
    };
  function S(e) {
    if (w.hasOwnProperty(e)) {
      var t = w[e].galleries;
      [].forEach.call(t, function (e) {
        [].forEach.call(e, function (e) {
          W(e.imageElement, "click", e.eventHandler);
        }),
          h === e && (h = []);
      }),
        delete w[e];
    }
  }
  function F(e) {
    switch (e.keyCode) {
      case 37:
        D();
        break;
      case 39:
        X();
        break;
      case 27:
        j();
        break;
      case 36:
        !(function t(e) {
          e && e.preventDefault();
          return M(0);
        })(e);
        break;
      case 35:
        !(function n(e) {
          e && e.preventDefault();
          return M(h.length - 1);
        })(e);
    }
  }
  function H(e, t) {
    if (h !== e) {
      for (
        h = e,
          (function s(e) {
            e = e || {};
            for (var t in v)
              (b[t] = v[t]), "undefined" != typeof e[t] && (b[t] = e[t]);
            (l.style.transition = l.style.webkitTransition =
              "fadeIn" === b.animation
                ? "opacity .4s ease"
                : "slideIn" === b.animation
                ? ""
                : "none"),
              "auto" === b.buttons &&
                (("ontouchstart" in window) || 1 === h.length) &&
                (b.buttons = !1);
            u.style.display = c.style.display = b.buttons ? "" : "none";
            try {
              r.style.backgroundColor = b.overlayBackgroundColor;
            } catch (n) {}
          })(t);
        l.firstChild;

      )
        l.removeChild(l.firstChild);
      for (var n, o = [], i = [], a = (k.length = 0); a < e.length; a++)
        ((n = J("div")).className = "full-image"),
          (n.id = "baguette-img-" + a),
          k.push(n),
          o.push("baguetteBox-figure-" + a),
          i.push("baguetteBox-figcaption-" + a),
          l.appendChild(k[a]);
      r.setAttribute("aria-labelledby", o.join(" ")),
        r.setAttribute("aria-describedby", i.join(" "));
    }
  }
  function I(e) {
    b.noScrollbars &&
      ((document.documentElement.style.overflowY = "hidden"),
      (document.body.style.overflowY = "scroll")),
      "block" !== r.style.display &&
        (U(document, "keydown", F),
        (i = { count: 0, startX: null, startY: null }),
        q((o = e), function () {
          z(o), V(o);
        }),
        R(),
        (r.style.display = "block"),
        b.fullScreen &&
          (function t() {
            r.requestFullscreen
              ? r.requestFullscreen()
              : r.webkitRequestFullscreen
              ? r.webkitRequestFullscreen()
              : r.mozRequestFullScreen && r.mozRequestFullScreen();
          })(),
        setTimeout(function () {
          (r.className = "visible"),
            b.bodyClass &&
              document.body.classList &&
              document.body.classList.add(b.bodyClass),
            b.afterShow && b.afterShow();
        }, 50),
        b.onChange && b.onChange(o, k.length),
        (s = document.activeElement),
        Y(),
        (n = !0));
  }
  function Y() {
    b.buttons ? u.focus() : d.focus();
  }
  function j() {
    b.noScrollbars &&
      ((document.documentElement.style.overflowY = "auto"),
      (document.body.style.overflowY = "auto")),
      "none" !== r.style.display &&
        (W(document, "keydown", F),
        (r.className = ""),
        setTimeout(function () {
          (r.style.display = "none"),
            document.fullscreen &&
              (function e() {
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen &&
                    document.webkitExitFullscreen();
              })(),
            b.bodyClass &&
              document.body.classList &&
              document.body.classList.remove(b.bodyClass),
            b.afterHide && b.afterHide(),
            s && s.focus(),
            (n = !1);
        }, 500));
  }
  function q(t, n) {
    var e = k[t],
      o = h[t];
    if (void 0 !== e && void 0 !== o)
      if (e.getElementsByTagName("img")[0]) n && n();
      else {
        var i = o.imageElement,
          a = i.getElementsByTagName("img")[0],
          s =
            "function" == typeof b.captions
              ? b.captions.call(h, i)
              : i.getAttribute("data-caption") || i.title,
          r = (function d(e) {
            var t = e.href;
            if (e.dataset) {
              var n = [];
              for (var o in e.dataset)
                "at-" !== o.substring(0, 3) ||
                  isNaN(o.substring(3)) ||
                  (n[o.replace("at-", "")] = e.dataset[o]);
              for (
                var i = Object.keys(n).sort(function (e, t) {
                    return parseInt(e, 10) < parseInt(t, 10) ? -1 : 1;
                  }),
                  a = window.innerWidth * window.devicePixelRatio,
                  s = 0;
                s < i.length - 1 && i[s] < a;

              )
                s++;
              t = n[i[s]] || t;
            }
            return t;
          })(i),
          l = J("figure");
        if (
          ((l.id = "baguetteBox-figure-" + t),
          (l.innerHTML =
            '<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>'),
          b.captions && s)
        ) {
          var u = J("figcaption");
          (u.id = "baguetteBox-figcaption-" + t),
            (u.innerHTML = s),
            l.appendChild(u);
        }
        e.appendChild(l);
        var c = J("img");
        (c.onload = function () {
          var e = document.querySelector(
            "#baguette-img-" + t + " .baguetteBox-spinner"
          );
          l.removeChild(e), !b.async && n && n();
        }),
          c.setAttribute("src", r),
          (c.alt = (a && a.alt) || ""),
          b.titleTag && s && (c.title = s),
          l.appendChild(c),
          b.async && n && n();
      }
  }
  function X() {
    return M(o + 1);
  }
  function D() {
    return M(o - 1);
  }
  function M(e, t) {
    return !n && 0 <= e && e < t.length
      ? (H(t, b), I(e), !0)
      : e < 0
      ? (b.animation && O("left"), !1)
      : e >= k.length
      ? (b.animation && O("right"), !1)
      : (q((o = e), function () {
          z(o), V(o);
        }),
        R(),
        b.onChange && b.onChange(o, k.length),
        !0);
  }
  function O(e) {
    (l.className = "bounce-from-" + e),
      setTimeout(function () {
        l.className = "";
      }, 400);
  }
  function R() {
    var e = 100 * -o + "%";
    "fadeIn" === b.animation
      ? ((l.style.opacity = 0),
        setTimeout(function () {
          m.transforms
            ? (l.style.transform = l.style.webkitTransform =
                "translate3d(" + e + ",0,0)")
            : (l.style.left = e),
            (l.style.opacity = 1);
        }, 400))
      : m.transforms
      ? (l.style.transform = l.style.webkitTransform =
          "translate3d(" + e + ",0,0)")
      : (l.style.left = e);
  }
  function z(e) {
    e - o >= b.preload ||
      q(e + 1, function () {
        z(e + 1);
      });
  }
  function V(e) {
    o - e >= b.preload ||
      q(e - 1, function () {
        V(e - 1);
      });
  }
  function U(e, t, n, o) {
    e.addEventListener
      ? e.addEventListener(t, n, o)
      : e.attachEvent("on" + t, function (e) {
          ((e = e || window.event).target = e.target || e.srcElement), n(e);
        });
  }
  function W(e, t, n, o) {
    e.removeEventListener
      ? e.removeEventListener(t, n, o)
      : e.detachEvent("on" + t, n);
  }
  function G(e) {
    return document.getElementById(e);
  }
  function J(e) {
    return document.createElement(e);
  }
  return (
    [].forEach ||
      (Array.prototype.forEach = function (e, t) {
        for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
      }),
    [].filter ||
      (Array.prototype.filter = function (e, t, n, o, i) {
        for (n = this, o = [], i = 0; i < n.length; i++)
          e.call(t, n[i], i, n) && o.push(n[i]);
        return o;
      }),
    {
      run: function K(e, t) {
        return (
          (m.transforms = (function n() {
            var e = J("div");
            return (
              "undefined" != typeof e.style.perspective ||
              "undefined" != typeof e.style.webkitPerspective
            );
          })()),
          (m.svg = (function o() {
            var e = J("div");
            return (
              (e.innerHTML = "<svg/>"),
              "http://www.w3.org/2000/svg" ===
                (e.firstChild && e.firstChild.namespaceURI)
            );
          })()),
          (m.passiveEvents = (function i() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (n) {}
            return e;
          })()),
          (function a() {
            if ((r = G("baguetteBox-overlay")))
              return (
                (l = G("baguetteBox-slider")),
                (u = G("previous-button")),
                (c = G("next-button")),
                void (d = G("close-button"))
              );
            (r = J("div")).setAttribute("role", "dialog"),
              (r.id = "baguetteBox-overlay"),
              document.getElementsByTagName("body")[0].appendChild(r),
              ((l = J("div")).id = "baguetteBox-slider"),
              r.appendChild(l),
              (u = J("button")).setAttribute("type", "button"),
              (u.id = "previous-button"),
              u.setAttribute("aria-label", "Previous"),
              (u.innerHTML = m.svg ? f : "&lt;"),
              r.appendChild(u),
              (c = J("button")).setAttribute("type", "button"),
              (c.id = "next-button"),
              c.setAttribute("aria-label", "Next"),
              (c.innerHTML = m.svg ? g : "&gt;"),
              r.appendChild(c),
              (d = J("button")).setAttribute("type", "button"),
              (d.id = "close-button"),
              d.setAttribute("aria-label", "Close"),
              (d.innerHTML = m.svg ? p : "&times;"),
              r.appendChild(d),
              (u.className = c.className = d.className = "baguetteBox-button"),
              (function n() {
                var e = m.passiveEvents ? { passive: !1 } : null,
                  t = m.passiveEvents ? { passive: !0 } : null;
                U(r, "click", x),
                  U(u, "click", E),
                  U(c, "click", C),
                  U(d, "click", B),
                  U(l, "contextmenu", A),
                  U(r, "touchstart", T, t),
                  U(r, "touchmove", N, e),
                  U(r, "touchend", L),
                  U(document, "focus", P, !0);
              })();
          })(),
          S(e),
          (function s(e, a) {
            var t = document.querySelectorAll(e),
              n = { galleries: [], nodeList: t };
            return (
              (w[e] = n),
              [].forEach.call(t, function (e) {
                a && a.filter && (y = a.filter);
                var t = [];
                if (
                  ((t = "A" === e.tagName ? [e] : e.getElementsByTagName("a")),
                  0 !==
                    (t = [].filter.call(t, function (e) {
                      if (-1 === e.className.indexOf(a && a.ignoreClass))
                        return y.test(e.href);
                    })).length)
                ) {
                  var i = [];
                  [].forEach.call(t, function (e, t) {
                    var n = function (e) {
                        e.preventDefault
                          ? e.preventDefault()
                          : (e.returnValue = !1),
                          H(i, a),
                          I(t);
                      },
                      o = { eventHandler: n, imageElement: e };
                    U(e, "click", n), i.push(o);
                  }),
                    n.galleries.push(i);
                }
              }),
              n.galleries
            );
          })(e, t)
        );
      },
      show: M,
      showNext: X,
      showPrevious: D,
      hide: j,
      destroy: function e() {
        !(function n() {
          var e = m.passiveEvents ? { passive: !1 } : null,
            t = m.passiveEvents ? { passive: !0 } : null;
          W(r, "click", x),
            W(u, "click", E),
            W(c, "click", C),
            W(d, "click", B),
            W(l, "contextmenu", A),
            W(r, "touchstart", T, t),
            W(r, "touchmove", N, e),
            W(r, "touchend", L),
            W(document, "focus", P, !0);
        })(),
          (function t() {
            for (var e in w) w.hasOwnProperty(e) && S(e);
          })(),
          W(document, "keydown", F),
          document
            .getElementsByTagName("body")[0]
            .removeChild(document.getElementById("baguetteBox-overlay")),
          (w = {}),
          (h = []),
          (o = 0);
      },
    }
  );
});

/* @preserve
 * Leaflet 1.3.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!(function (t, i) {
  "object" == typeof exports && "undefined" != typeof module
    ? i(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], i)
    : i((t.L = {}));
})(this, function (t) {
  "use strict";
  function i(t) {
    var i, e, n, o;
    for (e = 1, n = arguments.length; e < n; e++) {
      o = arguments[e];
      for (i in o) t[i] = o[i];
    }
    return t;
  }
  function e(t, i) {
    var e = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
    var n = e.call(arguments, 2);
    return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }
  function n(t) {
    return (t._leaflet_id = t._leaflet_id || ++ti), t._leaflet_id;
  }
  function o(t, i, e) {
    var n, o, s, r;
    return (
      (r = function () {
        (n = !1), o && (s.apply(e, o), (o = !1));
      }),
      (s = function () {
        n
          ? (o = arguments)
          : (t.apply(e, arguments), setTimeout(r, i), (n = !0));
      })
    );
  }
  function s(t, i, e) {
    var n = i[1],
      o = i[0],
      s = n - o;
    return t === n && e ? t : ((((t - o) % s) + s) % s) + o;
  }
  function r() {
    return !1;
  }
  function a(t, i) {
    var e = Math.pow(10, void 0 === i ? 6 : i);
    return Math.round(t * e) / e;
  }
  function h(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }
  function u(t) {
    return h(t).split(/\s+/);
  }
  function l(t, i) {
    t.hasOwnProperty("options") || (t.options = t.options ? Qt(t.options) : {});
    for (var e in i) t.options[e] = i[e];
    return t.options;
  }
  function c(t, i, e) {
    var n = [];
    for (var o in t)
      n.push(
        encodeURIComponent(e ? o.toUpperCase() : o) +
          "=" +
          encodeURIComponent(t[o])
      );
    return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&");
  }
  function _(t, i) {
    return t.replace(ii, function (t, e) {
      var n = i[e];
      if (void 0 === n) throw new Error("No value provided for variable " + t);
      return "function" == typeof n && (n = n(i)), n;
    });
  }
  function d(t, i) {
    for (var e = 0; e < t.length; e++) if (t[e] === i) return e;
    return -1;
  }
  function p(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }
  function m(t) {
    var i = +new Date(),
      e = Math.max(0, 16 - (i - oi));
    return (oi = i + e), window.setTimeout(t, e);
  }
  function f(t, i, n) {
    if (!n || si !== m) return si.call(window, e(t, i));
    t.call(i);
  }
  function g(t) {
    t && ri.call(window, t);
  }
  function v() {}
  function y(t) {
    if ("undefined" != typeof L && L && L.Mixin) {
      t = ei(t) ? t : [t];
      for (var i = 0; i < t.length; i++)
        t[i] === L.Mixin.Events &&
          console.warn(
            "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
            new Error().stack
          );
    }
  }
  function x(t, i, e) {
    (this.x = e ? Math.round(t) : t), (this.y = e ? Math.round(i) : i);
  }
  function w(t, i, e) {
    return t instanceof x
      ? t
      : ei(t)
      ? new x(t[0], t[1])
      : void 0 === t || null === t
      ? t
      : "object" == typeof t && "x" in t && "y" in t
      ? new x(t.x, t.y)
      : new x(t, i, e);
  }
  function P(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function b(t, i) {
    return !t || t instanceof P ? t : new P(t, i);
  }
  function T(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function z(t, i) {
    return t instanceof T ? t : new T(t, i);
  }
  function M(t, i, e) {
    if (isNaN(t) || isNaN(i))
      throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
    (this.lat = +t), (this.lng = +i), void 0 !== e && (this.alt = +e);
  }
  function C(t, i, e) {
    return t instanceof M
      ? t
      : ei(t) && "object" != typeof t[0]
      ? 3 === t.length
        ? new M(t[0], t[1], t[2])
        : 2 === t.length
        ? new M(t[0], t[1])
        : null
      : void 0 === t || null === t
      ? t
      : "object" == typeof t && "lat" in t
      ? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
      : void 0 === i
      ? null
      : new M(t, i, e);
  }
  function Z(t, i, e, n) {
    if (ei(t))
      return (
        (this._a = t[0]),
        (this._b = t[1]),
        (this._c = t[2]),
        void (this._d = t[3])
      );
    (this._a = t), (this._b = i), (this._c = e), (this._d = n);
  }
  function S(t, i, e, n) {
    return new Z(t, i, e, n);
  }
  function E(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function k(t, i) {
    var e,
      n,
      o,
      s,
      r,
      a,
      h = "";
    for (e = 0, o = t.length; e < o; e++) {
      for (n = 0, s = (r = t[e]).length; n < s; n++)
        (a = r[n]), (h += (n ? "L" : "M") + a.x + " " + a.y);
      h += i ? (Xi ? "z" : "x") : "";
    }
    return h || "M0 0";
  }
  function I(t) {
    return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
  }
  function A(t, i, e, n) {
    return (
      "touchstart" === i
        ? O(t, e, n)
        : "touchmove" === i
        ? W(t, e, n)
        : "touchend" === i && H(t, e, n),
      this
    );
  }
  function B(t, i, e) {
    var n = t["_leaflet_" + i + e];
    return (
      "touchstart" === i
        ? t.removeEventListener(Qi, n, !1)
        : "touchmove" === i
        ? t.removeEventListener(te, n, !1)
        : "touchend" === i &&
          (t.removeEventListener(ie, n, !1), t.removeEventListener(ee, n, !1)),
      this
    );
  }
  function O(t, i, n) {
    var o = e(function (t) {
      if (
        "mouse" !== t.pointerType &&
        t.MSPOINTER_TYPE_MOUSE &&
        t.pointerType !== t.MSPOINTER_TYPE_MOUSE
      ) {
        if (!(ne.indexOf(t.target.tagName) < 0)) return;
        $(t);
      }
      j(t, i);
    });
    (t["_leaflet_touchstart" + n] = o),
      t.addEventListener(Qi, o, !1),
      se ||
        (document.documentElement.addEventListener(Qi, R, !0),
        document.documentElement.addEventListener(te, D, !0),
        document.documentElement.addEventListener(ie, N, !0),
        document.documentElement.addEventListener(ee, N, !0),
        (se = !0));
  }
  function R(t) {
    (oe[t.pointerId] = t), re++;
  }
  function D(t) {
    oe[t.pointerId] && (oe[t.pointerId] = t);
  }
  function N(t) {
    delete oe[t.pointerId], re--;
  }
  function j(t, i) {
    t.touches = [];
    for (var e in oe) t.touches.push(oe[e]);
    (t.changedTouches = [t]), i(t);
  }
  function W(t, i, e) {
    var n = function (t) {
      ((t.pointerType !== t.MSPOINTER_TYPE_MOUSE &&
        "mouse" !== t.pointerType) ||
        0 !== t.buttons) &&
        j(t, i);
    };
    (t["_leaflet_touchmove" + e] = n), t.addEventListener(te, n, !1);
  }
  function H(t, i, e) {
    var n = function (t) {
      j(t, i);
    };
    (t["_leaflet_touchend" + e] = n),
      t.addEventListener(ie, n, !1),
      t.addEventListener(ee, n, !1);
  }
  function F(t, i, e) {
    function n(t) {
      var i;
      if (Ui) {
        if (!Pi || "mouse" === t.pointerType) return;
        i = re;
      } else i = t.touches.length;
      if (!(i > 1)) {
        var e = Date.now(),
          n = e - (s || e);
        (r = t.touches ? t.touches[0] : t), (a = n > 0 && n <= h), (s = e);
      }
    }
    function o(t) {
      if (a && !r.cancelBubble) {
        if (Ui) {
          if (!Pi || "mouse" === t.pointerType) return;
          var e,
            n,
            o = {};
          for (n in r) (e = r[n]), (o[n] = e && e.bind ? e.bind(r) : e);
          r = o;
        }
        (r.type = "dblclick"), i(r), (s = null);
      }
    }
    var s,
      r,
      a = !1,
      h = 250;
    return (
      (t[ue + ae + e] = n),
      (t[ue + he + e] = o),
      (t[ue + "dblclick" + e] = i),
      t.addEventListener(ae, n, !1),
      t.addEventListener(he, o, !1),
      t.addEventListener("dblclick", i, !1),
      this
    );
  }
  function U(t, i) {
    var e = t[ue + ae + i],
      n = t[ue + he + i],
      o = t[ue + "dblclick" + i];
    return (
      t.removeEventListener(ae, e, !1),
      t.removeEventListener(he, n, !1),
      Pi || t.removeEventListener("dblclick", o, !1),
      this
    );
  }
  function V(t, i, e, n) {
    if ("object" == typeof i) for (var o in i) G(t, o, i[o], e);
    else for (var s = 0, r = (i = u(i)).length; s < r; s++) G(t, i[s], e, n);
    return this;
  }
  function q(t, i, e, n) {
    if ("object" == typeof i) for (var o in i) K(t, o, i[o], e);
    else if (i)
      for (var s = 0, r = (i = u(i)).length; s < r; s++) K(t, i[s], e, n);
    else {
      for (var a in t[le]) K(t, a, t[le][a]);
      delete t[le];
    }
    return this;
  }
  function G(t, i, e, o) {
    var s = i + n(e) + (o ? "_" + n(o) : "");
    if (t[le] && t[le][s]) return this;
    var r = function (i) {
        return e.call(o || t, i || window.event);
      },
      a = r;
    Ui && 0 === i.indexOf("touch")
      ? A(t, i, r, s)
      : !Vi || "dblclick" !== i || !F || (Ui && Si)
      ? "addEventListener" in t
        ? "mousewheel" === i
          ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1)
          : "mouseenter" === i || "mouseleave" === i
          ? ((r = function (i) {
              (i = i || window.event), ot(t, i) && a(i);
            }),
            t.addEventListener(
              "mouseenter" === i ? "mouseover" : "mouseout",
              r,
              !1
            ))
          : ("click" === i &&
              Ti &&
              (r = function (t) {
                st(t, a);
              }),
            t.addEventListener(i, r, !1))
        : "attachEvent" in t && t.attachEvent("on" + i, r)
      : F(t, r, s),
      (t[le] = t[le] || {}),
      (t[le][s] = r);
  }
  function K(t, i, e, o) {
    var s = i + n(e) + (o ? "_" + n(o) : ""),
      r = t[le] && t[le][s];
    if (!r) return this;
    Ui && 0 === i.indexOf("touch")
      ? B(t, i, s)
      : !Vi || "dblclick" !== i || !U || (Ui && Si)
      ? "removeEventListener" in t
        ? "mousewheel" === i
          ? t.removeEventListener(
              "onwheel" in t ? "wheel" : "mousewheel",
              r,
              !1
            )
          : t.removeEventListener(
              "mouseenter" === i
                ? "mouseover"
                : "mouseleave" === i
                ? "mouseout"
                : i,
              r,
              !1
            )
        : "detachEvent" in t && t.detachEvent("on" + i, r)
      : U(t, s),
      (t[le][s] = null);
  }
  function Y(t) {
    return (
      t.stopPropagation
        ? t.stopPropagation()
        : t.originalEvent
        ? (t.originalEvent._stopped = !0)
        : (t.cancelBubble = !0),
      nt(t),
      this
    );
  }
  function X(t) {
    return G(t, "mousewheel", Y), this;
  }
  function J(t) {
    return V(t, "mousedown touchstart dblclick", Y), G(t, "click", et), this;
  }
  function $(t) {
    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
  }
  function Q(t) {
    return $(t), Y(t), this;
  }
  function tt(t, i) {
    if (!i) return new x(t.clientX, t.clientY);
    var e = i.getBoundingClientRect(),
      n = e.width / i.offsetWidth || 1,
      o = e.height / i.offsetHeight || 1;
    return new x(
      t.clientX / n - e.left - i.clientLeft,
      t.clientY / o - e.top - i.clientTop
    );
  }
  function it(t) {
    return Pi
      ? t.wheelDeltaY / 2
      : t.deltaY && 0 === t.deltaMode
      ? -t.deltaY / ce
      : t.deltaY && 1 === t.deltaMode
      ? 20 * -t.deltaY
      : t.deltaY && 2 === t.deltaMode
      ? 60 * -t.deltaY
      : t.deltaX || t.deltaZ
      ? 0
      : t.wheelDelta
      ? (t.wheelDeltaY || t.wheelDelta) / 2
      : t.detail && Math.abs(t.detail) < 32765
      ? 20 * -t.detail
      : t.detail
      ? (t.detail / -32765) * 60
      : 0;
  }
  function et(t) {
    _e[t.type] = !0;
  }
  function nt(t) {
    var i = _e[t.type];
    return (_e[t.type] = !1), i;
  }
  function ot(t, i) {
    var e = i.relatedTarget;
    if (!e) return !0;
    try {
      for (; e && e !== t; ) e = e.parentNode;
    } catch (t) {
      return !1;
    }
    return e !== t;
  }
  function st(t, i) {
    var e = t.timeStamp || (t.originalEvent && t.originalEvent.timeStamp),
      n = pi && e - pi;
    (n && n > 100 && n < 500) || (t.target._simulatedClick && !t._simulated)
      ? Q(t)
      : ((pi = e), i(t));
  }
  function rt(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }
  function at(t, i) {
    var e = t.style[i] || (t.currentStyle && t.currentStyle[i]);
    if ((!e || "auto" === e) && document.defaultView) {
      var n = document.defaultView.getComputedStyle(t, null);
      e = n ? n[i] : null;
    }
    return "auto" === e ? null : e;
  }
  function ht(t, i, e) {
    var n = document.createElement(t);
    return (n.className = i || ""), e && e.appendChild(n), n;
  }
  function ut(t) {
    var i = t.parentNode;
    i && i.removeChild(t);
  }
  function lt(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  }
  function ct(t) {
    var i = t.parentNode;
    i.lastChild !== t && i.appendChild(t);
  }
  function _t(t) {
    var i = t.parentNode;
    i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }
  function dt(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);
    var e = gt(t);
    return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e);
  }
  function pt(t, i) {
    if (void 0 !== t.classList)
      for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
    else if (!dt(t, i)) {
      var s = gt(t);
      ft(t, (s ? s + " " : "") + i);
    }
  }
  function mt(t, i) {
    void 0 !== t.classList
      ? t.classList.remove(i)
      : ft(t, h((" " + gt(t) + " ").replace(" " + i + " ", " ")));
  }
  function ft(t, i) {
    void 0 === t.className.baseVal
      ? (t.className = i)
      : (t.className.baseVal = i);
  }
  function gt(t) {
    return void 0 === t.className.baseVal ? t.className : t.className.baseVal;
  }
  function vt(t, i) {
    "opacity" in t.style
      ? (t.style.opacity = i)
      : "filter" in t.style && yt(t, i);
  }
  function yt(t, i) {
    var e = !1,
      n = "DXImageTransform.Microsoft.Alpha";
    try {
      e = t.filters.item(n);
    } catch (t) {
      if (1 === i) return;
    }
    (i = Math.round(100 * i)),
      e
        ? ((e.Enabled = 100 !== i), (e.Opacity = i))
        : (t.style.filter += " progid:" + n + "(opacity=" + i + ")");
  }
  function xt(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++)
      if (t[e] in i) return t[e];
    return !1;
  }
  function wt(t, i, e) {
    var n = i || new x(0, 0);
    t.style[pe] =
      (Oi
        ? "translate(" + n.x + "px," + n.y + "px)"
        : "translate3d(" + n.x + "px," + n.y + "px,0)") +
      (e ? " scale(" + e + ")" : "");
  }
  function Lt(t, i) {
    (t._leaflet_pos = i),
      Ni ? wt(t, i) : ((t.style.left = i.x + "px"), (t.style.top = i.y + "px"));
  }
  function Pt(t) {
    return t._leaflet_pos || new x(0, 0);
  }
  function bt() {
    V(window, "dragstart", $);
  }
  function Tt() {
    q(window, "dragstart", $);
  }
  function zt(t) {
    for (; -1 === t.tabIndex; ) t = t.parentNode;
    t.style &&
      (Mt(),
      (ve = t),
      (ye = t.style.outline),
      (t.style.outline = "none"),
      V(window, "keydown", Mt));
  }
  function Mt() {
    ve &&
      ((ve.style.outline = ye),
      (ve = void 0),
      (ye = void 0),
      q(window, "keydown", Mt));
  }
  function Ct(t, i) {
    if (!i || !t.length) return t.slice();
    var e = i * i;
    return (t = kt(t, e)), (t = St(t, e));
  }
  function Zt(t, i, e) {
    return Math.sqrt(Rt(t, i, e, !0));
  }
  function St(t, i) {
    var e = t.length,
      n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
    (n[0] = n[e - 1] = 1), Et(t, n, i, 0, e - 1);
    var o,
      s = [];
    for (o = 0; o < e; o++) n[o] && s.push(t[o]);
    return s;
  }
  function Et(t, i, e, n, o) {
    var s,
      r,
      a,
      h = 0;
    for (r = n + 1; r <= o - 1; r++)
      (a = Rt(t[r], t[n], t[o], !0)) > h && ((s = r), (h = a));
    h > e && ((i[s] = 1), Et(t, i, e, n, s), Et(t, i, e, s, o));
  }
  function kt(t, i) {
    for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
      Ot(t[n], t[o]) > i && (e.push(t[n]), (o = n));
    return o < s - 1 && e.push(t[s - 1]), e;
  }
  function It(t, i, e, n, o) {
    var s,
      r,
      a,
      h = n ? Se : Bt(t, e),
      u = Bt(i, e);
    for (Se = u; ; ) {
      if (!(h | u)) return [t, i];
      if (h & u) return !1;
      (a = Bt((r = At(t, i, (s = h || u), e, o)), e)),
        s === h ? ((t = r), (h = a)) : ((i = r), (u = a));
    }
  }
  function At(t, i, e, n, o) {
    var s,
      r,
      a = i.x - t.x,
      h = i.y - t.y,
      u = n.min,
      l = n.max;
    return (
      8 & e
        ? ((s = t.x + (a * (l.y - t.y)) / h), (r = l.y))
        : 4 & e
        ? ((s = t.x + (a * (u.y - t.y)) / h), (r = u.y))
        : 2 & e
        ? ((s = l.x), (r = t.y + (h * (l.x - t.x)) / a))
        : 1 & e && ((s = u.x), (r = t.y + (h * (u.x - t.x)) / a)),
      new x(s, r, o)
    );
  }
  function Bt(t, i) {
    var e = 0;
    return (
      t.x < i.min.x ? (e |= 1) : t.x > i.max.x && (e |= 2),
      t.y < i.min.y ? (e |= 4) : t.y > i.max.y && (e |= 8),
      e
    );
  }
  function Ot(t, i) {
    var e = i.x - t.x,
      n = i.y - t.y;
    return e * e + n * n;
  }
  function Rt(t, i, e, n) {
    var o,
      s = i.x,
      r = i.y,
      a = e.x - s,
      h = e.y - r,
      u = a * a + h * h;
    return (
      u > 0 &&
        ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1
          ? ((s = e.x), (r = e.y))
          : o > 0 && ((s += a * o), (r += h * o))),
      (a = t.x - s),
      (h = t.y - r),
      n ? a * a + h * h : new x(s, r)
    );
  }
  function Dt(t) {
    return !ei(t[0]) || ("object" != typeof t[0][0] && void 0 !== t[0][0]);
  }
  function Nt(t) {
    return (
      console.warn(
        "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
      ),
      Dt(t)
    );
  }
  function jt(t, i, e) {
    var n,
      o,
      s,
      r,
      a,
      h,
      u,
      l,
      c,
      _ = [1, 4, 2, 8];
    for (o = 0, u = t.length; o < u; o++) t[o]._code = Bt(t[o], i);
    for (r = 0; r < 4; r++) {
      for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++)
        (a = t[o]),
          (h = t[s]),
          a._code & l
            ? h._code & l ||
              (((c = At(h, a, l, i, e))._code = Bt(c, i)), n.push(c))
            : (h._code & l &&
                (((c = At(h, a, l, i, e))._code = Bt(c, i)), n.push(c)),
              n.push(a));
      t = n;
    }
    return t;
  }
  function Wt(t, i) {
    var e,
      n,
      o,
      s,
      r = "Feature" === t.type ? t.geometry : t,
      a = r ? r.coordinates : null,
      h = [],
      u = i && i.pointToLayer,
      l = (i && i.coordsToLatLng) || Ht;
    if (!a && !r) return null;
    switch (r.type) {
      case "Point":
        return (e = l(a)), u ? u(t, e) : new Xe(e);
      case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++)
          (e = l(a[o])), h.push(u ? u(t, e) : new Xe(e));
        return new qe(h);
      case "LineString":
      case "MultiLineString":
        return (n = Ft(a, "LineString" === r.type ? 0 : 1, l)), new tn(n, i);
      case "Polygon":
      case "MultiPolygon":
        return (n = Ft(a, "Polygon" === r.type ? 1 : 2, l)), new en(n, i);
      case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = Wt(
            {
              geometry: r.geometries[o],
              type: "Feature",
              properties: t.properties,
            },
            i
          );
          c && h.push(c);
        }
        return new qe(h);
      default:
        throw new Error("Invalid GeoJSON object.");
    }
  }
  function Ht(t) {
    return new M(t[1], t[0], t[2]);
  }
  function Ft(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++)
      (n = i ? Ft(t[s], i - 1, e) : (e || Ht)(t[s])), o.push(n);
    return o;
  }
  function Ut(t, i) {
    return (
      (i = "number" == typeof i ? i : 6),
      void 0 !== t.alt
        ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)]
        : [a(t.lng, i), a(t.lat, i)]
    );
  }
  function Vt(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++)
      o.push(i ? Vt(t[s], i - 1, e, n) : Ut(t[s], n));
    return !i && e && o.push(o[0]), o;
  }
  function qt(t, e) {
    return t.feature ? i({}, t.feature, { geometry: e }) : Gt(e);
  }
  function Gt(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type
      ? t
      : { type: "Feature", properties: {}, geometry: t };
  }
  function Kt(t, i) {
    return new nn(t, i);
  }
  function Yt(t, i) {
    return new dn(t, i);
  }
  function Xt(t) {
    return Yi ? new fn(t) : null;
  }
  function Jt(t) {
    return Xi || Ji ? new xn(t) : null;
  }
  var $t = Object.freeze;
  Object.freeze = function (t) {
    return t;
  };
  var Qt =
      Object.create ||
      (function () {
        function t() {}
        return function (i) {
          return (t.prototype = i), new t();
        };
      })(),
    ti = 0,
    ii = /\{ *([\w_-]+) *\}/g,
    ei =
      Array.isArray ||
      function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      },
    ni = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    oi = 0,
    si = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
    ri =
      window.cancelAnimationFrame ||
      p("CancelAnimationFrame") ||
      p("CancelRequestAnimationFrame") ||
      function (t) {
        window.clearTimeout(t);
      },
    ai = (Object.freeze || Object)({
      freeze: $t,
      extend: i,
      create: Qt,
      bind: e,
      lastId: ti,
      stamp: n,
      throttle: o,
      wrapNum: s,
      falseFn: r,
      formatNum: a,
      trim: h,
      splitWords: u,
      setOptions: l,
      getParamString: c,
      template: _,
      isArray: ei,
      indexOf: d,
      emptyImageUrl: ni,
      requestFn: si,
      cancelFn: ri,
      requestAnimFrame: f,
      cancelAnimFrame: g,
    });
  (v.extend = function (t) {
    var e = function () {
        this.initialize && this.initialize.apply(this, arguments),
          this.callInitHooks();
      },
      n = (e.__super__ = this.prototype),
      o = Qt(n);
    (o.constructor = e), (e.prototype = o);
    for (var s in this)
      this.hasOwnProperty(s) &&
        "prototype" !== s &&
        "__super__" !== s &&
        (e[s] = this[s]);
    return (
      t.statics && (i(e, t.statics), delete t.statics),
      t.includes &&
        (y(t.includes),
        i.apply(null, [o].concat(t.includes)),
        delete t.includes),
      o.options && (t.options = i(Qt(o.options), t.options)),
      i(o, t),
      (o._initHooks = []),
      (o.callInitHooks = function () {
        if (!this._initHooksCalled) {
          n.callInitHooks && n.callInitHooks.call(this),
            (this._initHooksCalled = !0);
          for (var t = 0, i = o._initHooks.length; t < i; t++)
            o._initHooks[t].call(this);
        }
      }),
      e
    );
  }),
    (v.include = function (t) {
      return i(this.prototype, t), this;
    }),
    (v.mergeOptions = function (t) {
      return i(this.prototype.options, t), this;
    }),
    (v.addInitHook = function (t) {
      var i = Array.prototype.slice.call(arguments, 1),
        e =
          "function" == typeof t
            ? t
            : function () {
                this[t].apply(this, i);
              };
      return (
        (this.prototype._initHooks = this.prototype._initHooks || []),
        this.prototype._initHooks.push(e),
        this
      );
    });
  var hi = {
    on: function (t, i, e) {
      if ("object" == typeof t) for (var n in t) this._on(n, t[n], i);
      else
        for (var o = 0, s = (t = u(t)).length; o < s; o++) this._on(t[o], i, e);
      return this;
    },
    off: function (t, i, e) {
      if (t)
        if ("object" == typeof t) for (var n in t) this._off(n, t[n], i);
        else
          for (var o = 0, s = (t = u(t)).length; o < s; o++)
            this._off(t[o], i, e);
      else delete this._events;
      return this;
    },
    _on: function (t, i, e) {
      this._events = this._events || {};
      var n = this._events[t];
      n || ((n = []), (this._events[t] = n)), e === this && (e = void 0);
      for (var o = { fn: i, ctx: e }, s = n, r = 0, a = s.length; r < a; r++)
        if (s[r].fn === i && s[r].ctx === e) return;
      s.push(o);
    },
    _off: function (t, i, e) {
      var n, o, s;
      if (this._events && (n = this._events[t]))
        if (i) {
          if ((e === this && (e = void 0), n))
            for (o = 0, s = n.length; o < s; o++) {
              var a = n[o];
              if (a.ctx === e && a.fn === i)
                return (
                  (a.fn = r),
                  this._firingCount && (this._events[t] = n = n.slice()),
                  void n.splice(o, 1)
                );
            }
        } else {
          for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
          delete this._events[t];
        }
    },
    fire: function (t, e, n) {
      if (!this.listens(t, n)) return this;
      var o = i({}, e, {
        type: t,
        target: this,
        sourceTarget: (e && e.sourceTarget) || this,
      });
      if (this._events) {
        var s = this._events[t];
        if (s) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var r = 0, a = s.length; r < a; r++) {
            var h = s[r];
            h.fn.call(h.ctx || this, o);
          }
          this._firingCount--;
        }
      }
      return n && this._propagateEvent(o), this;
    },
    listens: function (t, i) {
      var e = this._events && this._events[t];
      if (e && e.length) return !0;
      if (i)
        for (var n in this._eventParents)
          if (this._eventParents[n].listens(t, i)) return !0;
      return !1;
    },
    once: function (t, i, n) {
      if ("object" == typeof t) {
        for (var o in t) this.once(o, t[o], i);
        return this;
      }
      var s = e(function () {
        this.off(t, i, n).off(t, s, n);
      }, this);
      return this.on(t, i, n).on(t, s, n);
    },
    addEventParent: function (t) {
      return (
        (this._eventParents = this._eventParents || {}),
        (this._eventParents[n(t)] = t),
        this
      );
    },
    removeEventParent: function (t) {
      return this._eventParents && delete this._eventParents[n(t)], this;
    },
    _propagateEvent: function (t) {
      for (var e in this._eventParents)
        this._eventParents[e].fire(
          t.type,
          i({ layer: t.target, propagatedFrom: t.target }, t),
          !0
        );
    },
  };
  (hi.addEventListener = hi.on),
    (hi.removeEventListener = hi.clearAllEventListeners = hi.off),
    (hi.addOneTimeEventListener = hi.once),
    (hi.fireEvent = hi.fire),
    (hi.hasEventListeners = hi.listens);
  var ui = v.extend(hi),
    li =
      Math.trunc ||
      function (t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
  (x.prototype = {
    clone: function () {
      return new x(this.x, this.y);
    },
    add: function (t) {
      return this.clone()._add(w(t));
    },
    _add: function (t) {
      return (this.x += t.x), (this.y += t.y), this;
    },
    subtract: function (t) {
      return this.clone()._subtract(w(t));
    },
    _subtract: function (t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    },
    divideBy: function (t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function (t) {
      return (this.x /= t), (this.y /= t), this;
    },
    multiplyBy: function (t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function (t) {
      return (this.x *= t), (this.y *= t), this;
    },
    scaleBy: function (t) {
      return new x(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function (t) {
      return new x(this.x / t.x, this.y / t.y);
    },
    round: function () {
      return this.clone()._round();
    },
    _round: function () {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    },
    floor: function () {
      return this.clone()._floor();
    },
    _floor: function () {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    },
    ceil: function () {
      return this.clone()._ceil();
    },
    _ceil: function () {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    },
    trunc: function () {
      return this.clone()._trunc();
    },
    _trunc: function () {
      return (this.x = li(this.x)), (this.y = li(this.y)), this;
    },
    distanceTo: function (t) {
      var i = (t = w(t)).x - this.x,
        e = t.y - this.y;
      return Math.sqrt(i * i + e * e);
    },
    equals: function (t) {
      return (t = w(t)).x === this.x && t.y === this.y;
    },
    contains: function (t) {
      return (
        (t = w(t)),
        Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
      );
    },
    toString: function () {
      return "Point(" + a(this.x) + ", " + a(this.y) + ")";
    },
  }),
    (P.prototype = {
      extend: function (t) {
        return (
          (t = w(t)),
          this.min || this.max
            ? ((this.min.x = Math.min(t.x, this.min.x)),
              (this.max.x = Math.max(t.x, this.max.x)),
              (this.min.y = Math.min(t.y, this.min.y)),
              (this.max.y = Math.max(t.y, this.max.y)))
            : ((this.min = t.clone()), (this.max = t.clone())),
          this
        );
      },
      getCenter: function (t) {
        return new x(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      getBottomLeft: function () {
        return new x(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return new x(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (t) {
        var i, e;
        return (
          (t =
            "number" == typeof t[0] || t instanceof x ? w(t) : b(t)) instanceof
          P
            ? ((i = t.min), (e = t.max))
            : (i = e = t),
          i.x >= this.min.x &&
            e.x <= this.max.x &&
            i.y >= this.min.y &&
            e.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = b(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= i.x && n.x <= e.x,
          r = o.y >= i.y && n.y <= e.y;
        return s && r;
      },
      overlaps: function (t) {
        t = b(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x > i.x && n.x < e.x,
          r = o.y > i.y && n.y < e.y;
        return s && r;
      },
      isValid: function () {
        return !(!this.min || !this.max);
      },
    }),
    (T.prototype = {
      extend: function (t) {
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        if (t instanceof M) (i = t), (e = t);
        else {
          if (!(t instanceof T)) return t ? this.extend(C(t) || z(t)) : this;
          if (((i = t._southWest), (e = t._northEast), !i || !e)) return this;
        }
        return (
          n || o
            ? ((n.lat = Math.min(i.lat, n.lat)),
              (n.lng = Math.min(i.lng, n.lng)),
              (o.lat = Math.max(e.lat, o.lat)),
              (o.lng = Math.max(e.lng, o.lng)))
            : ((this._southWest = new M(i.lat, i.lng)),
              (this._northEast = new M(e.lat, e.lng))),
          this
        );
      },
      pad: function (t) {
        var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          o = Math.abs(i.lng - e.lng) * t;
        return new T(new M(i.lat - n, i.lng - o), new M(e.lat + n, e.lng + o));
      },
      getCenter: function () {
        return new M(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new M(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new M(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (t) {
        t =
          "number" == typeof t[0] || t instanceof M || "lat" in t ? C(t) : z(t);
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        return (
          t instanceof T
            ? ((i = t.getSouthWest()), (e = t.getNorthEast()))
            : (i = e = t),
          i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
        );
      },
      intersects: function (t) {
        t = z(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= i.lat && n.lat <= e.lat,
          r = o.lng >= i.lng && n.lng <= e.lng;
        return s && r;
      },
      overlaps: function (t) {
        t = z(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > i.lat && n.lat < e.lat,
          r = o.lng > i.lng && n.lng < e.lng;
        return s && r;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (t, i) {
        return (
          !!t &&
          ((t = z(t)),
          this._southWest.equals(t.getSouthWest(), i) &&
            this._northEast.equals(t.getNorthEast(), i))
        );
      },
      isValid: function () {
        return !(!this._southWest || !this._northEast);
      },
    }),
    (M.prototype = {
      equals: function (t, i) {
        return (
          !!t &&
          ((t = C(t)),
          Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <=
            (void 0 === i ? 1e-9 : i))
        );
      },
      toString: function (t) {
        return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")";
      },
      distanceTo: function (t) {
        return _i.distance(this, C(t));
      },
      wrap: function () {
        return _i.wrapLatLng(this);
      },
      toBounds: function (t) {
        var i = (180 * t) / 40075017,
          e = i / Math.cos((Math.PI / 180) * this.lat);
        return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
      },
      clone: function () {
        return new M(this.lat, this.lng, this.alt);
      },
    });
  var ci = {
      latLngToPoint: function (t, i) {
        var e = this.projection.project(t),
          n = this.scale(i);
        return this.transformation._transform(e, n);
      },
      pointToLatLng: function (t, i) {
        var e = this.scale(i),
          n = this.transformation.untransform(t, e);
        return this.projection.unproject(n);
      },
      project: function (t) {
        return this.projection.project(t);
      },
      unproject: function (t) {
        return this.projection.unproject(t);
      },
      scale: function (t) {
        return 256 * Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t / 256) / Math.LN2;
      },
      getProjectedBounds: function (t) {
        if (this.infinite) return null;
        var i = this.projection.bounds,
          e = this.scale(t);
        return new P(
          this.transformation.transform(i.min, e),
          this.transformation.transform(i.max, e)
        );
      },
      infinite: !1,
      wrapLatLng: function (t) {
        var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
        return new M(
          this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat,
          i,
          t.alt
        );
      },
      wrapLatLngBounds: function (t) {
        var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          o = i.lng - e.lng;
        if (0 === n && 0 === o) return t;
        var s = t.getSouthWest(),
          r = t.getNorthEast();
        return new T(new M(s.lat - n, s.lng - o), new M(r.lat - n, r.lng - o));
      },
    },
    _i = i({}, ci, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function (t, i) {
        var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s = Math.sin(((i.lat - t.lat) * e) / 2),
          r = Math.sin(((i.lng - t.lng) * e) / 2),
          a = s * s + Math.cos(n) * Math.cos(o) * r * r,
          h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return this.R * h;
      },
    }),
    di = {
      R: 6378137,
      MAX_LATITUDE: 85.0511287798,
      project: function (t) {
        var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          n = Math.max(Math.min(e, t.lat), -e),
          o = Math.sin(n * i);
        return new x(
          this.R * t.lng * i,
          (this.R * Math.log((1 + o) / (1 - o))) / 2
        );
      },
      unproject: function (t) {
        var i = 180 / Math.PI;
        return new M(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i,
          (t.x * i) / this.R
        );
      },
      bounds: (function () {
        var t = 6378137 * Math.PI;
        return new P([-t, -t], [t, t]);
      })(),
    };
  Z.prototype = {
    transform: function (t, i) {
      return this._transform(t.clone(), i);
    },
    _transform: function (t, i) {
      return (
        (i = i || 1),
        (t.x = i * (this._a * t.x + this._b)),
        (t.y = i * (this._c * t.y + this._d)),
        t
      );
    },
    untransform: function (t, i) {
      return (
        (i = i || 1),
        new x((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
      );
    },
  };
  var pi,
    mi,
    fi,
    gi,
    vi = i({}, _i, {
      code: "EPSG:3857",
      projection: di,
      transformation: (function () {
        var t = 0.5 / (Math.PI * di.R);
        return S(t, 0.5, -t, 0.5);
      })(),
    }),
    yi = i({}, vi, { code: "EPSG:900913" }),
    xi = document.documentElement.style,
    wi = "ActiveXObject" in window,
    Li = wi && !document.addEventListener,
    Pi = "msLaunchUri" in navigator && !("documentMode" in document),
    bi = I("webkit"),
    Ti = I("android"),
    zi = I("android 2") || I("android 3"),
    Mi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
    Ci = Ti && I("Google") && Mi < 537 && !("AudioNode" in window),
    Zi = !!window.opera,
    Si = I("chrome"),
    Ei = I("gecko") && !bi && !Zi && !wi,
    ki = !Si && I("safari"),
    Ii = I("phantom"),
    Ai = "OTransition" in xi,
    Bi = 0 === navigator.platform.indexOf("Win"),
    Oi = wi && "transition" in xi,
    Ri =
      "WebKitCSSMatrix" in window &&
      "m11" in new window.WebKitCSSMatrix() &&
      !zi,
    Di = "MozPerspective" in xi,
    Ni = !window.L_DISABLE_3D && (Oi || Ri || Di) && !Ai && !Ii,
    ji = "undefined" != typeof orientation || I("mobile"),
    Wi = ji && bi,
    Hi = ji && Ri,
    Fi = !window.PointerEvent && window.MSPointerEvent,
    Ui = !(!window.PointerEvent && !Fi),
    Vi =
      !window.L_NO_TOUCH &&
      (Ui ||
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
    qi = ji && Zi,
    Gi = ji && Ei,
    Ki =
      (window.devicePixelRatio ||
        window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
    Yi = !!document.createElement("canvas").getContext,
    Xi = !(!document.createElementNS || !E("svg").createSVGRect),
    Ji =
      !Xi &&
      (function () {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var i = t.firstChild;
          return (
            (i.style.behavior = "url(#default#VML)"),
            i && "object" == typeof i.adj
          );
        } catch (t) {
          return !1;
        }
      })(),
    $i = (Object.freeze || Object)({
      ie: wi,
      ielt9: Li,
      edge: Pi,
      webkit: bi,
      android: Ti,
      android23: zi,
      androidStock: Ci,
      opera: Zi,
      chrome: Si,
      gecko: Ei,
      safari: ki,
      phantom: Ii,
      opera12: Ai,
      win: Bi,
      ie3d: Oi,
      webkit3d: Ri,
      gecko3d: Di,
      any3d: Ni,
      mobile: ji,
      mobileWebkit: Wi,
      mobileWebkit3d: Hi,
      msPointer: Fi,
      pointer: Ui,
      touch: Vi,
      mobileOpera: qi,
      mobileGecko: Gi,
      retina: Ki,
      canvas: Yi,
      svg: Xi,
      vml: Ji,
    }),
    Qi = Fi ? "MSPointerDown" : "pointerdown",
    te = Fi ? "MSPointerMove" : "pointermove",
    ie = Fi ? "MSPointerUp" : "pointerup",
    ee = Fi ? "MSPointerCancel" : "pointercancel",
    ne = ["INPUT", "SELECT", "OPTION"],
    oe = {},
    se = !1,
    re = 0,
    ae = Fi ? "MSPointerDown" : Ui ? "pointerdown" : "touchstart",
    he = Fi ? "MSPointerUp" : Ui ? "pointerup" : "touchend",
    ue = "_leaflet_",
    le = "_leaflet_events",
    ce =
      Bi && Si ? 2 * window.devicePixelRatio : Ei ? window.devicePixelRatio : 1,
    _e = {},
    de = (Object.freeze || Object)({
      on: V,
      off: q,
      stopPropagation: Y,
      disableScrollPropagation: X,
      disableClickPropagation: J,
      preventDefault: $,
      stop: Q,
      getMousePosition: tt,
      getWheelDelta: it,
      fakeStop: et,
      skipped: nt,
      isExternalTarget: ot,
      addListener: V,
      removeListener: q,
    }),
    pe = xt([
      "transform",
      "WebkitTransform",
      "OTransform",
      "MozTransform",
      "msTransform",
    ]),
    me = xt([
      "webkitTransition",
      "transition",
      "OTransition",
      "MozTransition",
      "msTransition",
    ]),
    fe =
      "webkitTransition" === me || "OTransition" === me
        ? me + "End"
        : "transitionend";
  if ("onselectstart" in document)
    (mi = function () {
      V(window, "selectstart", $);
    }),
      (fi = function () {
        q(window, "selectstart", $);
      });
  else {
    var ge = xt([
      "userSelect",
      "WebkitUserSelect",
      "OUserSelect",
      "MozUserSelect",
      "msUserSelect",
    ]);
    (mi = function () {
      if (ge) {
        var t = document.documentElement.style;
        (gi = t[ge]), (t[ge] = "none");
      }
    }),
      (fi = function () {
        ge && ((document.documentElement.style[ge] = gi), (gi = void 0));
      });
  }
  var ve,
    ye,
    xe = (Object.freeze || Object)({
      TRANSFORM: pe,
      TRANSITION: me,
      TRANSITION_END: fe,
      get: rt,
      getStyle: at,
      create: ht,
      remove: ut,
      empty: lt,
      toFront: ct,
      toBack: _t,
      hasClass: dt,
      addClass: pt,
      removeClass: mt,
      setClass: ft,
      getClass: gt,
      setOpacity: vt,
      testProp: xt,
      setTransform: wt,
      setPosition: Lt,
      getPosition: Pt,
      disableTextSelection: mi,
      enableTextSelection: fi,
      disableImageDrag: bt,
      enableImageDrag: Tt,
      preventOutline: zt,
      restoreOutline: Mt,
    }),
    we = ui.extend({
      run: function (t, i, e, n) {
        this.stop(),
          (this._el = t),
          (this._inProgress = !0),
          (this._duration = e || 0.25),
          (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
          (this._startPos = Pt(t)),
          (this._offset = i.subtract(this._startPos)),
          (this._startTime = +new Date()),
          this.fire("start"),
          this._animate();
      },
      stop: function () {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function () {
        (this._animId = f(this._animate, this)), this._step();
      },
      _step: function (t) {
        var i = +new Date() - this._startTime,
          e = 1e3 * this._duration;
        i < e
          ? this._runFrame(this._easeOut(i / e), t)
          : (this._runFrame(1), this._complete());
      },
      _runFrame: function (t, i) {
        var e = this._startPos.add(this._offset.multiplyBy(t));
        i && e._round(), Lt(this._el, e), this.fire("step");
      },
      _complete: function () {
        g(this._animId), (this._inProgress = !1), this.fire("end");
      },
      _easeOut: function (t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      },
    }),
    Le = ui.extend({
      options: {
        crs: vi,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0,
      },
      initialize: function (t, i) {
        (i = l(this, i)),
          this._initContainer(t),
          this._initLayout(),
          (this._onResize = e(this._onResize, this)),
          this._initEvents(),
          i.maxBounds && this.setMaxBounds(i.maxBounds),
          void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)),
          i.center &&
            void 0 !== i.zoom &&
            this.setView(C(i.center), i.zoom, { reset: !0 }),
          (this._handlers = []),
          (this._layers = {}),
          (this._zoomBoundLayers = {}),
          (this._sizeChanged = !0),
          this.callInitHooks(),
          (this._zoomAnimated = me && Ni && !qi && this.options.zoomAnimation),
          this._zoomAnimated &&
            (this._createAnimProxy(),
            V(this._proxy, fe, this._catchTransitionEnd, this)),
          this._addLayers(this.options.layers);
      },
      setView: function (t, e, n) {
        return (
          (e = void 0 === e ? this._zoom : this._limitZoom(e)),
          (t = this._limitCenter(C(t), e, this.options.maxBounds)),
          (n = n || {}),
          this._stop(),
          this._loaded &&
          !n.reset &&
          !0 !== n &&
          (void 0 !== n.animate &&
            ((n.zoom = i({ animate: n.animate }, n.zoom)),
            (n.pan = i({ animate: n.animate, duration: n.duration }, n.pan))),
          this._zoom !== e
            ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom)
            : this._tryAnimatedPan(t, n.pan))
            ? (clearTimeout(this._sizeTimer), this)
            : (this._resetView(t, e), this)
        );
      },
      setZoom: function (t, i) {
        return this._loaded
          ? this.setView(this.getCenter(), t, { zoom: i })
          : ((this._zoom = t), this);
      },
      zoomIn: function (t, i) {
        return (
          (t = t || (Ni ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom + t, i)
        );
      },
      zoomOut: function (t, i) {
        return (
          (t = t || (Ni ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom - t, i)
        );
      },
      setZoomAround: function (t, i, e) {
        var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          s = (t instanceof x ? t : this.latLngToContainerPoint(t))
            .subtract(o)
            .multiplyBy(1 - 1 / n),
          r = this.containerPointToLatLng(o.add(s));
        return this.setView(r, i, { zoom: e });
      },
      _getBoundsCenterZoom: function (t, i) {
        (i = i || {}), (t = t.getBounds ? t.getBounds() : z(t));
        var e = w(i.paddingTopLeft || i.padding || [0, 0]),
          n = w(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));
        if (
          (o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) ===
          1 / 0
        )
          return { center: t.getCenter(), zoom: o };
        var s = n.subtract(e).divideBy(2),
          r = this.project(t.getSouthWest(), o),
          a = this.project(t.getNorthEast(), o);
        return {
          center: this.unproject(r.add(a).divideBy(2).add(s), o),
          zoom: o,
        };
      },
      fitBounds: function (t, i) {
        if (!(t = z(t)).isValid()) throw new Error("Bounds are not valid.");
        var e = this._getBoundsCenterZoom(t, i);
        return this.setView(e.center, e.zoom, i);
      },
      fitWorld: function (t) {
        return this.fitBounds(
          [
            [-90, -180],
            [90, 180],
          ],
          t
        );
      },
      panTo: function (t, i) {
        return this.setView(t, this._zoom, { pan: i });
      },
      panBy: function (t, i) {
        if (((t = w(t).round()), (i = i || {}), !t.x && !t.y))
          return this.fire("moveend");
        if (!0 !== i.animate && !this.getSize().contains(t))
          return (
            this._resetView(
              this.unproject(this.project(this.getCenter()).add(t)),
              this.getZoom()
            ),
            this
          );
        if (
          (this._panAnim ||
            ((this._panAnim = new we()),
            this._panAnim.on(
              {
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd,
              },
              this
            )),
          i.noMoveStart || this.fire("movestart"),
          !1 !== i.animate)
        ) {
          pt(this._mapPane, "leaflet-pan-anim");
          var e = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(
            this._mapPane,
            e,
            i.duration || 0.25,
            i.easeLinearity
          );
        } else this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      },
      flyTo: function (t, i, e) {
        function n(t) {
          var i =
              (g * g - m * m + (t ? -1 : 1) * x * x * v * v) /
              (2 * (t ? g : m) * x * v),
            e = Math.sqrt(i * i + 1) - i;
          return e < 1e-9 ? -18 : Math.log(e);
        }
        function o(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2;
        }
        function s(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2;
        }
        function r(t) {
          return o(t) / s(t);
        }
        function a(t) {
          return m * (s(w) / s(w + y * t));
        }
        function h(t) {
          return (m * (s(w) * r(w + y * t) - o(w))) / x;
        }
        function u(t) {
          return 1 - Math.pow(1 - t, 1.5);
        }
        function l() {
          var e = (Date.now() - L) / b,
            n = u(e) * P;
          e <= 1
            ? ((this._flyToFrame = f(l, this)),
              this._move(
                this.unproject(c.add(_.subtract(c).multiplyBy(h(n) / v)), p),
                this.getScaleZoom(m / a(n), p),
                { flyTo: !0 }
              ))
            : this._move(t, i)._moveEnd(!0);
        }
        if (!1 === (e = e || {}).animate || !Ni) return this.setView(t, i, e);
        this._stop();
        var c = this.project(this.getCenter()),
          _ = this.project(t),
          d = this.getSize(),
          p = this._zoom;
        (t = C(t)), (i = void 0 === i ? p : i);
        var m = Math.max(d.x, d.y),
          g = m * this.getZoomScale(p, i),
          v = _.distanceTo(c) || 1,
          y = 1.42,
          x = y * y,
          w = n(0),
          L = Date.now(),
          P = (n(1) - w) / y,
          b = e.duration ? 1e3 * e.duration : 1e3 * P * 0.8;
        return this._moveStart(!0, e.noMoveStart), l.call(this), this;
      },
      flyToBounds: function (t, i) {
        var e = this._getBoundsCenterZoom(t, i);
        return this.flyTo(e.center, e.zoom, i);
      },
      setMaxBounds: function (t) {
        return (t = z(t)).isValid()
          ? (this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            (this.options.maxBounds = t),
            this._loaded && this._panInsideMaxBounds(),
            this.on("moveend", this._panInsideMaxBounds))
          : ((this.options.maxBounds = null),
            this.off("moveend", this._panInsideMaxBounds));
      },
      setMinZoom: function (t) {
        var i = this.options.minZoom;
        return (
          (this.options.minZoom = t),
          this._loaded &&
          i !== t &&
          (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom)
            ? this.setZoom(t)
            : this
        );
      },
      setMaxZoom: function (t) {
        var i = this.options.maxZoom;
        return (
          (this.options.maxZoom = t),
          this._loaded &&
          i !== t &&
          (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom)
            ? this.setZoom(t)
            : this
        );
      },
      panInsideBounds: function (t, i) {
        this._enforcingBounds = !0;
        var e = this.getCenter(),
          n = this._limitCenter(e, this._zoom, z(t));
        return (
          e.equals(n) || this.panTo(n, i), (this._enforcingBounds = !1), this
        );
      },
      invalidateSize: function (t) {
        if (!this._loaded) return this;
        t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
        var n = this.getSize();
        (this._sizeChanged = !0), (this._lastCenter = null);
        var o = this.getSize(),
          s = n.divideBy(2).round(),
          r = o.divideBy(2).round(),
          a = s.subtract(r);
        return a.x || a.y
          ? (t.animate && t.pan
              ? this.panBy(a)
              : (t.pan && this._rawPanBy(a),
                this.fire("move"),
                t.debounceMoveend
                  ? (clearTimeout(this._sizeTimer),
                    (this._sizeTimer = setTimeout(
                      e(this.fire, this, "moveend"),
                      200
                    )))
                  : this.fire("moveend")),
            this.fire("resize", { oldSize: n, newSize: o }))
          : this;
      },
      stop: function () {
        return (
          this.setZoom(this._limitZoom(this._zoom)),
          this.options.zoomSnap || this.fire("viewreset"),
          this._stop()
        );
      },
      locate: function (t) {
        if (
          ((t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t)),
          !("geolocation" in navigator))
        )
          return (
            this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported.",
            }),
            this
          );
        var n = e(this._handleGeolocationResponse, this),
          o = e(this._handleGeolocationError, this);
        return (
          t.watch
            ? (this._locationWatchId = navigator.geolocation.watchPosition(
                n,
                o,
                t
              ))
            : navigator.geolocation.getCurrentPosition(n, o, t),
          this
        );
      },
      stopLocate: function () {
        return (
          navigator.geolocation &&
            navigator.geolocation.clearWatch &&
            navigator.geolocation.clearWatch(this._locationWatchId),
          this._locateOptions && (this._locateOptions.setView = !1),
          this
        );
      },
      _handleGeolocationError: function (t) {
        var i = t.code,
          e =
            t.message ||
            (1 === i
              ? "permission denied"
              : 2 === i
              ? "position unavailable"
              : "timeout");
        this._locateOptions.setView && !this._loaded && this.fitWorld(),
          this.fire("locationerror", {
            code: i,
            message: "Geolocation error: " + e + ".",
          });
      },
      _handleGeolocationResponse: function (t) {
        var i = new M(t.coords.latitude, t.coords.longitude),
          e = i.toBounds(t.coords.accuracy),
          n = this._locateOptions;
        if (n.setView) {
          var o = this.getBoundsZoom(e);
          this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o);
        }
        var s = { latlng: i, bounds: e, timestamp: t.timestamp };
        for (var r in t.coords)
          "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
        this.fire("locationfound", s);
      },
      addHandler: function (t, i) {
        if (!i) return this;
        var e = (this[t] = new i(this));
        return this._handlers.push(e), this.options[t] && e.enable(), this;
      },
      remove: function () {
        if (
          (this._initEvents(!0),
          this._containerId !== this._container._leaflet_id)
        )
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch (t) {
          (this._container._leaflet_id = void 0), (this._containerId = void 0);
        }
        void 0 !== this._locationWatchId && this.stopLocate(),
          this._stop(),
          ut(this._mapPane),
          this._clearControlPos && this._clearControlPos(),
          this._clearHandlers(),
          this._loaded && this.fire("unload");
        var t;
        for (t in this._layers) this._layers[t].remove();
        for (t in this._panes) ut(this._panes[t]);
        return (
          (this._layers = []),
          (this._panes = []),
          delete this._mapPane,
          delete this._renderer,
          this
        );
      },
      createPane: function (t, i) {
        var e = ht(
          "div",
          "leaflet-pane" +
            (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
          i || this._mapPane
        );
        return t && (this._panes[t] = e), e;
      },
      getCenter: function () {
        return (
          this._checkIfLoaded(),
          this._lastCenter && !this._moved()
            ? this._lastCenter
            : this.layerPointToLatLng(this._getCenterLayerPoint())
        );
      },
      getZoom: function () {
        return this._zoom;
      },
      getBounds: function () {
        var t = this.getPixelBounds();
        return new T(
          this.unproject(t.getBottomLeft()),
          this.unproject(t.getTopRight())
        );
      },
      getMinZoom: function () {
        return void 0 === this.options.minZoom
          ? this._layersMinZoom || 0
          : this.options.minZoom;
      },
      getMaxZoom: function () {
        return void 0 === this.options.maxZoom
          ? void 0 === this._layersMaxZoom
            ? 1 / 0
            : this._layersMaxZoom
          : this.options.maxZoom;
      },
      getBoundsZoom: function (t, i, e) {
        (t = z(t)), (e = w(e || [0, 0]));
        var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          a = t.getSouthEast(),
          h = this.getSize().subtract(e),
          u = b(this.project(a, n), this.project(r, n)).getSize(),
          l = Ni ? this.options.zoomSnap : 1,
          c = h.x / u.x,
          _ = h.y / u.y,
          d = i ? Math.max(c, _) : Math.min(c, _);
        return (
          (n = this.getScaleZoom(d, n)),
          l &&
            ((n = Math.round(n / (l / 100)) * (l / 100)),
            (n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l)),
          Math.max(o, Math.min(s, n))
        );
      },
      getSize: function () {
        return (
          (this._size && !this._sizeChanged) ||
            ((this._size = new x(
              this._container.clientWidth || 0,
              this._container.clientHeight || 0
            )),
            (this._sizeChanged = !1)),
          this._size.clone()
        );
      },
      getPixelBounds: function (t, i) {
        var e = this._getTopLeftPoint(t, i);
        return new P(e, e.add(this.getSize()));
      },
      getPixelOrigin: function () {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function (t) {
        return this.options.crs.getProjectedBounds(
          void 0 === t ? this.getZoom() : t
        );
      },
      getPane: function (t) {
        return "string" == typeof t ? this._panes[t] : t;
      },
      getPanes: function () {
        return this._panes;
      },
      getContainer: function () {
        return this._container;
      },
      getZoomScale: function (t, i) {
        var e = this.options.crs;
        return (i = void 0 === i ? this._zoom : i), e.scale(t) / e.scale(i);
      },
      getScaleZoom: function (t, i) {
        var e = this.options.crs;
        i = void 0 === i ? this._zoom : i;
        var n = e.zoom(t * e.scale(i));
        return isNaN(n) ? 1 / 0 : n;
      },
      project: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.latLngToPoint(C(t), i)
        );
      },
      unproject: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.pointToLatLng(w(t), i)
        );
      },
      layerPointToLatLng: function (t) {
        var i = w(t).add(this.getPixelOrigin());
        return this.unproject(i);
      },
      latLngToLayerPoint: function (t) {
        return this.project(C(t))._round()._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function (t) {
        return this.options.crs.wrapLatLng(C(t));
      },
      wrapLatLngBounds: function (t) {
        return this.options.crs.wrapLatLngBounds(z(t));
      },
      distance: function (t, i) {
        return this.options.crs.distance(C(t), C(i));
      },
      containerPointToLayerPoint: function (t) {
        return w(t).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function (t) {
        return w(t).add(this._getMapPanePos());
      },
      containerPointToLatLng: function (t) {
        var i = this.containerPointToLayerPoint(w(t));
        return this.layerPointToLatLng(i);
      },
      latLngToContainerPoint: function (t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)));
      },
      mouseEventToContainerPoint: function (t) {
        return tt(t, this._container);
      },
      mouseEventToLayerPoint: function (t) {
        return this.containerPointToLayerPoint(
          this.mouseEventToContainerPoint(t)
        );
      },
      mouseEventToLatLng: function (t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      _initContainer: function (t) {
        var i = (this._container = rt(t));
        if (!i) throw new Error("Map container not found.");
        if (i._leaflet_id)
          throw new Error("Map container is already initialized.");
        V(i, "scroll", this._onScroll, this), (this._containerId = n(i));
      },
      _initLayout: function () {
        var t = this._container;
        (this._fadeAnimated = this.options.fadeAnimation && Ni),
          pt(
            t,
            "leaflet-container" +
              (Vi ? " leaflet-touch" : "") +
              (Ki ? " leaflet-retina" : "") +
              (Li ? " leaflet-oldie" : "") +
              (ki ? " leaflet-safari" : "") +
              (this._fadeAnimated ? " leaflet-fade-anim" : "")
          );
        var i = at(t, "position");
        "absolute" !== i &&
          "relative" !== i &&
          "fixed" !== i &&
          (t.style.position = "relative"),
          this._initPanes(),
          this._initControlPos && this._initControlPos();
      },
      _initPanes: function () {
        var t = (this._panes = {});
        (this._paneRenderers = {}),
          (this._mapPane = this.createPane("mapPane", this._container)),
          Lt(this._mapPane, new x(0, 0)),
          this.createPane("tilePane"),
          this.createPane("shadowPane"),
          this.createPane("overlayPane"),
          this.createPane("markerPane"),
          this.createPane("tooltipPane"),
          this.createPane("popupPane"),
          this.options.markerZoomAnimation ||
            (pt(t.markerPane, "leaflet-zoom-hide"),
            pt(t.shadowPane, "leaflet-zoom-hide"));
      },
      _resetView: function (t, i) {
        Lt(this._mapPane, new x(0, 0));
        var e = !this._loaded;
        (this._loaded = !0),
          (i = this._limitZoom(i)),
          this.fire("viewprereset");
        var n = this._zoom !== i;
        this._moveStart(n, !1)._move(t, i)._moveEnd(n),
          this.fire("viewreset"),
          e && this.fire("load");
      },
      _moveStart: function (t, i) {
        return t && this.fire("zoomstart"), i || this.fire("movestart"), this;
      },
      _move: function (t, i, e) {
        void 0 === i && (i = this._zoom);
        var n = this._zoom !== i;
        return (
          (this._zoom = i),
          (this._lastCenter = t),
          (this._pixelOrigin = this._getNewPixelOrigin(t)),
          (n || (e && e.pinch)) && this.fire("zoom", e),
          this.fire("move", e)
        );
      },
      _moveEnd: function (t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function () {
        return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function (t) {
        Lt(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function () {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function () {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function () {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      },
      _initEvents: function (t) {
        (this._targets = {}), (this._targets[n(this._container)] = this);
        var i = t ? q : V;
        i(
          this._container,
          "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",
          this._handleDOMEvent,
          this
        ),
          this.options.trackResize && i(window, "resize", this._onResize, this),
          Ni &&
            this.options.transform3DLimit &&
            (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function () {
        g(this._resizeRequest),
          (this._resizeRequest = f(function () {
            this.invalidateSize({ debounceMoveend: !0 });
          }, this));
      },
      _onScroll: function () {
        (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
      },
      _onMoveEnd: function () {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >=
          this.options.transform3DLimit &&
          this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function (t, i) {
        for (
          var e,
            o = [],
            s = "mouseout" === i || "mouseover" === i,
            r = t.target || t.srcElement,
            a = !1;
          r;

        ) {
          if (
            (e = this._targets[n(r)]) &&
            ("click" === i || "preclick" === i) &&
            !t._simulated &&
            this._draggableMoved(e)
          ) {
            a = !0;
            break;
          }
          if (e && e.listens(i, !0)) {
            if (s && !ot(r, t)) break;
            if ((o.push(e), s)) break;
          }
          if (r === this._container) break;
          r = r.parentNode;
        }
        return o.length || a || s || !ot(r, t) || (o = [this]), o;
      },
      _handleDOMEvent: function (t) {
        if (this._loaded && !nt(t)) {
          var i = t.type;
          ("mousedown" !== i && "keypress" !== i) ||
            zt(t.target || t.srcElement),
            this._fireDOMEvent(t, i);
        }
      },
      _mouseEvents: [
        "click",
        "dblclick",
        "mouseover",
        "mouseout",
        "contextmenu",
      ],
      _fireDOMEvent: function (t, e, n) {
        if ("click" === t.type) {
          var o = i({}, t);
          (o.type = "preclick"), this._fireDOMEvent(o, o.type, n);
        }
        if (
          !t._stopped &&
          (n = (n || []).concat(this._findEventTargets(t, e))).length
        ) {
          var s = n[0];
          "contextmenu" === e && s.listens(e, !0) && $(t);
          var r = { originalEvent: t };
          if ("keypress" !== t.type) {
            var a = s.getLatLng && (!s._radius || s._radius <= 10);
            (r.containerPoint = a
              ? this.latLngToContainerPoint(s.getLatLng())
              : this.mouseEventToContainerPoint(t)),
              (r.layerPoint = this.containerPointToLayerPoint(
                r.containerPoint
              )),
              (r.latlng = a
                ? s.getLatLng()
                : this.layerPointToLatLng(r.layerPoint));
          }
          for (var h = 0; h < n.length; h++)
            if (
              (n[h].fire(e, r, !0),
              r.originalEvent._stopped ||
                (!1 === n[h].options.bubblingMouseEvents &&
                  -1 !== d(this._mouseEvents, e)))
            )
              return;
        }
      },
      _draggableMoved: function (t) {
        return (
          ((t = t.dragging && t.dragging.enabled() ? t : this).dragging &&
            t.dragging.moved()) ||
          (this.boxZoom && this.boxZoom.moved())
        );
      },
      _clearHandlers: function () {
        for (var t = 0, i = this._handlers.length; t < i; t++)
          this._handlers[t].disable();
      },
      whenReady: function (t, i) {
        return (
          this._loaded
            ? t.call(i || this, { target: this })
            : this.on("load", t, i),
          this
        );
      },
      _getMapPanePos: function () {
        return Pt(this._mapPane) || new x(0, 0);
      },
      _moved: function () {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function (t, i) {
        return (
          t && void 0 !== i
            ? this._getNewPixelOrigin(t, i)
            : this.getPixelOrigin()
        ).subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function (t, i) {
        var e = this.getSize()._divideBy(2);
        return this.project(t, i)
          ._subtract(e)
          ._add(this._getMapPanePos())
          ._round();
      },
      _latLngToNewLayerPoint: function (t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return this.project(t, i)._subtract(n);
      },
      _latLngBoundsToNewLayerBounds: function (t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return b([
          this.project(t.getSouthWest(), i)._subtract(n),
          this.project(t.getNorthWest(), i)._subtract(n),
          this.project(t.getSouthEast(), i)._subtract(n),
          this.project(t.getNorthEast(), i)._subtract(n),
        ]);
      },
      _getCenterLayerPoint: function () {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function (t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function (t, i, e) {
        if (!e) return t;
        var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          s = new P(n.subtract(o), n.add(o)),
          r = this._getBoundsOffset(s, e, i);
        return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
      },
      _limitOffset: function (t, i) {
        if (!i) return t;
        var e = this.getPixelBounds(),
          n = new P(e.min.add(t), e.max.add(t));
        return t.add(this._getBoundsOffset(n, i));
      },
      _getBoundsOffset: function (t, i, e) {
        var n = b(
            this.project(i.getNorthEast(), e),
            this.project(i.getSouthWest(), e)
          ),
          o = n.min.subtract(t.min),
          s = n.max.subtract(t.max);
        return new x(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
      },
      _rebound: function (t, i) {
        return t + i > 0
          ? Math.round(t - i) / 2
          : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
      },
      _limitZoom: function (t) {
        var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = Ni ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
      },
      _onPanTransitionStep: function () {
        this.fire("move");
      },
      _onPanTransitionEnd: function () {
        mt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function (t, i) {
        var e = this._getCenterOffset(t)._trunc();
        return (
          !(!0 !== (i && i.animate) && !this.getSize().contains(e)) &&
          (this.panBy(e, i), !0)
        );
      },
      _createAnimProxy: function () {
        var t = (this._proxy = ht(
          "div",
          "leaflet-proxy leaflet-zoom-animated"
        ));
        this._panes.mapPane.appendChild(t),
          this.on(
            "zoomanim",
            function (t) {
              var i = pe,
                e = this._proxy.style[i];
              wt(
                this._proxy,
                this.project(t.center, t.zoom),
                this.getZoomScale(t.zoom, 1)
              ),
                e === this._proxy.style[i] &&
                  this._animatingZoom &&
                  this._onZoomTransitionEnd();
            },
            this
          ),
          this.on(
            "load moveend",
            function () {
              var t = this.getCenter(),
                i = this.getZoom();
              wt(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
            },
            this
          ),
          this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function () {
        ut(this._proxy), delete this._proxy;
      },
      _catchTransitionEnd: function (t) {
        this._animatingZoom &&
          t.propertyName.indexOf("transform") >= 0 &&
          this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function () {
        return !this._container.getElementsByClassName("leaflet-zoom-animated")
          .length;
      },
      _tryAnimatedZoom: function (t, i, e) {
        if (this._animatingZoom) return !0;
        if (
          ((e = e || {}),
          !this._zoomAnimated ||
            !1 === e.animate ||
            this._nothingToAnimate() ||
            Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold)
        )
          return !1;
        var n = this.getZoomScale(i),
          o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return (
          !(!0 !== e.animate && !this.getSize().contains(o)) &&
          (f(function () {
            this._moveStart(!0, !1)._animateZoom(t, i, !0);
          }, this),
          !0)
        );
      },
      _animateZoom: function (t, i, n, o) {
        this._mapPane &&
          (n &&
            ((this._animatingZoom = !0),
            (this._animateToCenter = t),
            (this._animateToZoom = i),
            pt(this._mapPane, "leaflet-zoom-anim")),
          this.fire("zoomanim", { center: t, zoom: i, noUpdate: o }),
          setTimeout(e(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function () {
        this._animatingZoom &&
          (this._mapPane && mt(this._mapPane, "leaflet-zoom-anim"),
          (this._animatingZoom = !1),
          this._move(this._animateToCenter, this._animateToZoom),
          f(function () {
            this._moveEnd(!0);
          }, this));
      },
    }),
    Pe = v.extend({
      options: { position: "topright" },
      initialize: function (t) {
        l(this, t);
      },
      getPosition: function () {
        return this.options.position;
      },
      setPosition: function (t) {
        var i = this._map;
        return (
          i && i.removeControl(this),
          (this.options.position = t),
          i && i.addControl(this),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      addTo: function (t) {
        this.remove(), (this._map = t);
        var i = (this._container = this.onAdd(t)),
          e = this.getPosition(),
          n = t._controlCorners[e];
        return (
          pt(i, "leaflet-control"),
          -1 !== e.indexOf("bottom")
            ? n.insertBefore(i, n.firstChild)
            : n.appendChild(i),
          this
        );
      },
      remove: function () {
        return this._map
          ? (ut(this._container),
            this.onRemove && this.onRemove(this._map),
            (this._map = null),
            this)
          : this;
      },
      _refocusOnMap: function (t) {
        this._map &&
          t &&
          t.screenX > 0 &&
          t.screenY > 0 &&
          this._map.getContainer().focus();
      },
    }),
    be = function (t) {
      return new Pe(t);
    };
  Le.include({
    addControl: function (t) {
      return t.addTo(this), this;
    },
    removeControl: function (t) {
      return t.remove(), this;
    },
    _initControlPos: function () {
      function t(t, o) {
        var s = e + t + " " + e + o;
        i[t + o] = ht("div", s, n);
      }
      var i = (this._controlCorners = {}),
        e = "leaflet-",
        n = (this._controlContainer = ht(
          "div",
          e + "control-container",
          this._container
        ));
      t("top", "left"),
        t("top", "right"),
        t("bottom", "left"),
        t("bottom", "right");
    },
    _clearControlPos: function () {
      for (var t in this._controlCorners) ut(this._controlCorners[t]);
      ut(this._controlContainer),
        delete this._controlCorners,
        delete this._controlContainer;
    },
  });
  var Te = Pe.extend({
      options: {
        collapsed: !0,
        position: "topright",
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function (t, i, e, n) {
          return e < n ? -1 : n < e ? 1 : 0;
        },
      },
      initialize: function (t, i, e) {
        l(this, e),
          (this._layerControlInputs = []),
          (this._layers = []),
          (this._lastZIndex = 0),
          (this._handlingClick = !1);
        for (var n in t) this._addLayer(t[n], n);
        for (n in i) this._addLayer(i[n], n, !0);
      },
      onAdd: function (t) {
        this._initLayout(),
          this._update(),
          (this._map = t),
          t.on("zoomend", this._checkDisabledLayers, this);
        for (var i = 0; i < this._layers.length; i++)
          this._layers[i].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function (t) {
        return Pe.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function () {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      addBaseLayer: function (t, i) {
        return this._addLayer(t, i), this._map ? this._update() : this;
      },
      addOverlay: function (t, i) {
        return this._addLayer(t, i, !0), this._map ? this._update() : this;
      },
      removeLayer: function (t) {
        t.off("add remove", this._onLayerChange, this);
        var i = this._getLayer(n(t));
        return (
          i && this._layers.splice(this._layers.indexOf(i), 1),
          this._map ? this._update() : this
        );
      },
      expand: function () {
        pt(this._container, "leaflet-control-layers-expanded"),
          (this._form.style.height = null);
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return (
          t < this._form.clientHeight
            ? (pt(this._form, "leaflet-control-layers-scrollbar"),
              (this._form.style.height = t + "px"))
            : mt(this._form, "leaflet-control-layers-scrollbar"),
          this._checkDisabledLayers(),
          this
        );
      },
      collapse: function () {
        return mt(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function () {
        var t = "leaflet-control-layers",
          i = (this._container = ht("div", t)),
          e = this.options.collapsed;
        i.setAttribute("aria-haspopup", !0), J(i), X(i);
        var n = (this._form = ht("form", t + "-list"));
        e &&
          (this._map.on("click", this.collapse, this),
          Ti ||
            V(i, { mouseenter: this.expand, mouseleave: this.collapse }, this));
        var o = (this._layersLink = ht("a", t + "-toggle", i));
        (o.href = "#"),
          (o.title = "Layers"),
          Vi
            ? (V(o, "click", Q), V(o, "click", this.expand, this))
            : V(o, "focus", this.expand, this),
          e || this.expand(),
          (this._baseLayersList = ht("div", t + "-base", n)),
          (this._separator = ht("div", t + "-separator", n)),
          (this._overlaysList = ht("div", t + "-overlays", n)),
          i.appendChild(n);
      },
      _getLayer: function (t) {
        for (var i = 0; i < this._layers.length; i++)
          if (this._layers[i] && n(this._layers[i].layer) === t)
            return this._layers[i];
      },
      _addLayer: function (t, i, n) {
        this._map && t.on("add remove", this._onLayerChange, this),
          this._layers.push({ layer: t, name: i, overlay: n }),
          this.options.sortLayers &&
            this._layers.sort(
              e(function (t, i) {
                return this.options.sortFunction(
                  t.layer,
                  i.layer,
                  t.name,
                  i.name
                );
              }, this)
            ),
          this.options.autoZIndex &&
            t.setZIndex &&
            (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
          this._expandIfNotCollapsed();
      },
      _update: function () {
        if (!this._container) return this;
        lt(this._baseLayersList),
          lt(this._overlaysList),
          (this._layerControlInputs = []);
        var t,
          i,
          e,
          n,
          o = 0;
        for (e = 0; e < this._layers.length; e++)
          (n = this._layers[e]),
            this._addItem(n),
            (i = i || n.overlay),
            (t = t || !n.overlay),
            (o += n.overlay ? 0 : 1);
        return (
          this.options.hideSingleBase &&
            ((t = t && o > 1),
            (this._baseLayersList.style.display = t ? "" : "none")),
          (this._separator.style.display = i && t ? "" : "none"),
          this
        );
      },
      _onLayerChange: function (t) {
        this._handlingClick || this._update();
        var i = this._getLayer(n(t.target)),
          e = i.overlay
            ? "add" === t.type
              ? "overlayadd"
              : "overlayremove"
            : "add" === t.type
            ? "baselayerchange"
            : null;
        e && this._map.fire(e, i);
      },
      _createRadioElement: function (t, i) {
        var e =
            '<input type="radio" class="leaflet-control-layers-selector" name="' +
            t +
            '"' +
            (i ? ' checked="checked"' : "") +
            "/>",
          n = document.createElement("div");
        return (n.innerHTML = e), n.firstChild;
      },
      _addItem: function (t) {
        var i,
          e = document.createElement("label"),
          o = this._map.hasLayer(t.layer);
        t.overlay
          ? (((i = document.createElement("input")).type = "checkbox"),
            (i.className = "leaflet-control-layers-selector"),
            (i.defaultChecked = o))
          : (i = this._createRadioElement("leaflet-base-layers", o)),
          this._layerControlInputs.push(i),
          (i.layerId = n(t.layer)),
          V(i, "click", this._onInputClick, this);
        var s = document.createElement("span");
        s.innerHTML = " " + t.name;
        var r = document.createElement("div");
        return (
          e.appendChild(r),
          r.appendChild(i),
          r.appendChild(s),
          (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(
            e
          ),
          this._checkDisabledLayers(),
          e
        );
      },
      _onInputClick: function () {
        var t,
          i,
          e = this._layerControlInputs,
          n = [],
          o = [];
        this._handlingClick = !0;
        for (var s = e.length - 1; s >= 0; s--)
          (t = e[s]),
            (i = this._getLayer(t.layerId).layer),
            t.checked ? n.push(i) : t.checked || o.push(i);
        for (s = 0; s < o.length; s++)
          this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
        for (s = 0; s < n.length; s++)
          this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
        (this._handlingClick = !1), this._refocusOnMap();
      },
      _checkDisabledLayers: function () {
        for (
          var t,
            i,
            e = this._layerControlInputs,
            n = this._map.getZoom(),
            o = e.length - 1;
          o >= 0;
          o--
        )
          (t = e[o]),
            (i = this._getLayer(t.layerId).layer),
            (t.disabled =
              (void 0 !== i.options.minZoom && n < i.options.minZoom) ||
              (void 0 !== i.options.maxZoom && n > i.options.maxZoom));
      },
      _expandIfNotCollapsed: function () {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expand: function () {
        return this.expand();
      },
      _collapse: function () {
        return this.collapse();
      },
    }),
    ze = Pe.extend({
      options: {
        position: "topleft",
        zoomInText: "+",
        zoomInTitle: "Zoom in",
        zoomOutText: "&#x2212;",
        zoomOutTitle: "Zoom out",
      },
      onAdd: function (t) {
        var i = "leaflet-control-zoom",
          e = ht("div", i + " leaflet-bar"),
          n = this.options;
        return (
          (this._zoomInButton = this._createButton(
            n.zoomInText,
            n.zoomInTitle,
            i + "-in",
            e,
            this._zoomIn
          )),
          (this._zoomOutButton = this._createButton(
            n.zoomOutText,
            n.zoomOutTitle,
            i + "-out",
            e,
            this._zoomOut
          )),
          this._updateDisabled(),
          t.on("zoomend zoomlevelschange", this._updateDisabled, this),
          e
        );
      },
      onRemove: function (t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function () {
        return (this._disabled = !0), this._updateDisabled(), this;
      },
      enable: function () {
        return (this._disabled = !1), this._updateDisabled(), this;
      },
      _zoomIn: function (t) {
        !this._disabled &&
          this._map._zoom < this._map.getMaxZoom() &&
          this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function (t) {
        !this._disabled &&
          this._map._zoom > this._map.getMinZoom() &&
          this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function (t, i, e, n, o) {
        var s = ht("a", e, n);
        return (
          (s.innerHTML = t),
          (s.href = "#"),
          (s.title = i),
          s.setAttribute("role", "button"),
          s.setAttribute("aria-label", i),
          J(s),
          V(s, "click", Q),
          V(s, "click", o, this),
          V(s, "click", this._refocusOnMap, this),
          s
        );
      },
      _updateDisabled: function () {
        var t = this._map,
          i = "leaflet-disabled";
        mt(this._zoomInButton, i),
          mt(this._zoomOutButton, i),
          (this._disabled || t._zoom === t.getMinZoom()) &&
            pt(this._zoomOutButton, i),
          (this._disabled || t._zoom === t.getMaxZoom()) &&
            pt(this._zoomInButton, i);
      },
    });
  Le.mergeOptions({ zoomControl: !0 }),
    Le.addInitHook(function () {
      this.options.zoomControl &&
        ((this.zoomControl = new ze()), this.addControl(this.zoomControl));
    });
  var Me = Pe.extend({
      options: {
        position: "bottomleft",
        maxWidth: 100,
        metric: !0,
        imperial: !0,
      },
      onAdd: function (t) {
        var i = ht("div", "leaflet-control-scale"),
          e = this.options;
        return (
          this._addScales(e, "leaflet-control-scale-line", i),
          t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this),
          t.whenReady(this._update, this),
          i
        );
      },
      onRemove: function (t) {
        t.off(
          this.options.updateWhenIdle ? "moveend" : "move",
          this._update,
          this
        );
      },
      _addScales: function (t, i, e) {
        t.metric && (this._mScale = ht("div", i, e)),
          t.imperial && (this._iScale = ht("div", i, e));
      },
      _update: function () {
        var t = this._map,
          i = t.getSize().y / 2,
          e = t.distance(
            t.containerPointToLatLng([0, i]),
            t.containerPointToLatLng([this.options.maxWidth, i])
          );
        this._updateScales(e);
      },
      _updateScales: function (t) {
        this.options.metric && t && this._updateMetric(t),
          this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function (t) {
        var i = this._getRoundNum(t),
          e = i < 1e3 ? i + " m" : i / 1e3 + " km";
        this._updateScale(this._mScale, e, i / t);
      },
      _updateImperial: function (t) {
        var i,
          e,
          n,
          o = 3.2808399 * t;
        o > 5280
          ? ((i = o / 5280),
            (e = this._getRoundNum(i)),
            this._updateScale(this._iScale, e + " mi", e / i))
          : ((n = this._getRoundNum(o)),
            this._updateScale(this._iScale, n + " ft", n / o));
      },
      _updateScale: function (t, i, e) {
        (t.style.width = Math.round(this.options.maxWidth * e) + "px"),
          (t.innerHTML = i);
      },
      _getRoundNum: function (t) {
        var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          e = t / i;
        return (
          (e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1), i * e
        );
      },
    }),
    Ce = Pe.extend({
      options: {
        position: "bottomright",
        prefix:
          '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>',
      },
      initialize: function (t) {
        l(this, t), (this._attributions = {});
      },
      onAdd: function (t) {
        (t.attributionControl = this),
          (this._container = ht("div", "leaflet-control-attribution")),
          J(this._container);
        for (var i in t._layers)
          t._layers[i].getAttribution &&
            this.addAttribution(t._layers[i].getAttribution());
        return this._update(), this._container;
      },
      setPrefix: function (t) {
        return (this.options.prefix = t), this._update(), this;
      },
      addAttribution: function (t) {
        return t
          ? (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update(),
            this)
          : this;
      },
      removeAttribution: function (t) {
        return t
          ? (this._attributions[t] && (this._attributions[t]--, this._update()),
            this)
          : this;
      },
      _update: function () {
        if (this._map) {
          var t = [];
          for (var i in this._attributions) this._attributions[i] && t.push(i);
          var e = [];
          this.options.prefix && e.push(this.options.prefix),
            t.length && e.push(t.join(", ")),
            (this._container.innerHTML = e.join(" | "));
        }
      },
    });
  Le.mergeOptions({ attributionControl: !0 }),
    Le.addInitHook(function () {
      this.options.attributionControl && new Ce().addTo(this);
    });
  (Pe.Layers = Te),
    (Pe.Zoom = ze),
    (Pe.Scale = Me),
    (Pe.Attribution = Ce),
    (be.layers = function (t, i, e) {
      return new Te(t, i, e);
    }),
    (be.zoom = function (t) {
      return new ze(t);
    }),
    (be.scale = function (t) {
      return new Me(t);
    }),
    (be.attribution = function (t) {
      return new Ce(t);
    });
  var Ze = v.extend({
    initialize: function (t) {
      this._map = t;
    },
    enable: function () {
      return this._enabled
        ? this
        : ((this._enabled = !0), this.addHooks(), this);
    },
    disable: function () {
      return this._enabled
        ? ((this._enabled = !1), this.removeHooks(), this)
        : this;
    },
    enabled: function () {
      return !!this._enabled;
    },
  });
  Ze.addTo = function (t, i) {
    return t.addHandler(i, this), this;
  };
  var Se,
    Ee = { Events: hi },
    ke = Vi ? "touchstart mousedown" : "mousedown",
    Ie = {
      mousedown: "mouseup",
      touchstart: "touchend",
      pointerdown: "touchend",
      MSPointerDown: "touchend",
    },
    Ae = {
      mousedown: "mousemove",
      touchstart: "touchmove",
      pointerdown: "touchmove",
      MSPointerDown: "touchmove",
    },
    Be = ui.extend({
      options: { clickTolerance: 3 },
      initialize: function (t, i, e, n) {
        l(this, n),
          (this._element = t),
          (this._dragStartTarget = i || t),
          (this._preventOutline = e);
      },
      enable: function () {
        this._enabled ||
          (V(this._dragStartTarget, ke, this._onDown, this),
          (this._enabled = !0));
      },
      disable: function () {
        this._enabled &&
          (Be._dragging === this && this.finishDrag(),
          q(this._dragStartTarget, ke, this._onDown, this),
          (this._enabled = !1),
          (this._moved = !1));
      },
      _onDown: function (t) {
        if (
          !t._simulated &&
          this._enabled &&
          ((this._moved = !1),
          !dt(this._element, "leaflet-zoom-anim") &&
            !(
              Be._dragging ||
              t.shiftKey ||
              (1 !== t.which && 1 !== t.button && !t.touches) ||
              ((Be._dragging = this),
              this._preventOutline && zt(this._element),
              bt(),
              mi(),
              this._moving)
            ))
        ) {
          this.fire("down");
          var i = t.touches ? t.touches[0] : t;
          (this._startPoint = new x(i.clientX, i.clientY)),
            V(document, Ae[t.type], this._onMove, this),
            V(document, Ie[t.type], this._onUp, this);
        }
      },
      _onMove: function (t) {
        if (!t._simulated && this._enabled)
          if (t.touches && t.touches.length > 1) this._moved = !0;
          else {
            var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
              e = new x(i.clientX, i.clientY).subtract(this._startPoint);
            (e.x || e.y) &&
              (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance ||
                ($(t),
                this._moved ||
                  (this.fire("dragstart"),
                  (this._moved = !0),
                  (this._startPos = Pt(this._element).subtract(e)),
                  pt(document.body, "leaflet-dragging"),
                  (this._lastTarget = t.target || t.srcElement),
                  window.SVGElementInstance &&
                    this._lastTarget instanceof SVGElementInstance &&
                    (this._lastTarget =
                      this._lastTarget.correspondingUseElement),
                  pt(this._lastTarget, "leaflet-drag-target")),
                (this._newPos = this._startPos.add(e)),
                (this._moving = !0),
                g(this._animRequest),
                (this._lastEvent = t),
                (this._animRequest = f(this._updatePosition, this, !0))));
          }
      },
      _updatePosition: function () {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t),
          Lt(this._element, this._newPos),
          this.fire("drag", t);
      },
      _onUp: function (t) {
        !t._simulated && this._enabled && this.finishDrag();
      },
      finishDrag: function () {
        mt(document.body, "leaflet-dragging"),
          this._lastTarget &&
            (mt(this._lastTarget, "leaflet-drag-target"),
            (this._lastTarget = null));
        for (var t in Ae)
          q(document, Ae[t], this._onMove, this),
            q(document, Ie[t], this._onUp, this);
        Tt(),
          fi(),
          this._moved &&
            this._moving &&
            (g(this._animRequest),
            this.fire("dragend", {
              distance: this._newPos.distanceTo(this._startPos),
            })),
          (this._moving = !1),
          (Be._dragging = !1);
      },
    }),
    Oe = (Object.freeze || Object)({
      simplify: Ct,
      pointToSegmentDistance: Zt,
      closestPointOnSegment: function (t, i, e) {
        return Rt(t, i, e);
      },
      clipSegment: It,
      _getEdgeIntersection: At,
      _getBitCode: Bt,
      _sqClosestPointOnSegment: Rt,
      isFlat: Dt,
      _flat: Nt,
    }),
    Re = (Object.freeze || Object)({ clipPolygon: jt }),
    De = {
      project: function (t) {
        return new x(t.lng, t.lat);
      },
      unproject: function (t) {
        return new M(t.y, t.x);
      },
      bounds: new P([-180, -90], [180, 90]),
    },
    Ne = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new P(
        [-20037508.34279, -15496570.73972],
        [20037508.34279, 18764656.23138]
      ),
      project: function (t) {
        var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          s = Math.sqrt(1 - o * o),
          r = s * Math.sin(n),
          a =
            Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
        return (n = -e * Math.log(Math.max(a, 1e-10))), new x(t.lng * i * e, n);
      },
      unproject: function (t) {
        for (
          var i,
            e = 180 / Math.PI,
            n = this.R,
            o = this.R_MINOR / n,
            s = Math.sqrt(1 - o * o),
            r = Math.exp(-t.y / n),
            a = Math.PI / 2 - 2 * Math.atan(r),
            h = 0,
            u = 0.1;
          h < 15 && Math.abs(u) > 1e-7;
          h++
        )
          (i = s * Math.sin(a)),
            (i = Math.pow((1 - i) / (1 + i), s / 2)),
            (a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a);
        return new M(a * e, (t.x * e) / n);
      },
    },
    je = (Object.freeze || Object)({
      LonLat: De,
      Mercator: Ne,
      SphericalMercator: di,
    }),
    We = i({}, _i, {
      code: "EPSG:3395",
      projection: Ne,
      transformation: (function () {
        var t = 0.5 / (Math.PI * Ne.R);
        return S(t, 0.5, -t, 0.5);
      })(),
    }),
    He = i({}, _i, {
      code: "EPSG:4326",
      projection: De,
      transformation: S(1 / 180, 1, -1 / 180, 0.5),
    }),
    Fe = i({}, ci, {
      projection: De,
      transformation: S(1, 0, -1, 0),
      scale: function (t) {
        return Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function (t, i) {
        var e = i.lng - t.lng,
          n = i.lat - t.lat;
        return Math.sqrt(e * e + n * n);
      },
      infinite: !0,
    });
  (ci.Earth = _i),
    (ci.EPSG3395 = We),
    (ci.EPSG3857 = vi),
    (ci.EPSG900913 = yi),
    (ci.EPSG4326 = He),
    (ci.Simple = Fe);
  var Ue = ui.extend({
    options: {
      pane: "overlayPane",
      attribution: null,
      bubblingMouseEvents: !0,
    },
    addTo: function (t) {
      return t.addLayer(this), this;
    },
    remove: function () {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function (t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function (t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function (t) {
      return (this._map._targets[n(t)] = this), this;
    },
    removeInteractiveTarget: function (t) {
      return delete this._map._targets[n(t)], this;
    },
    getAttribution: function () {
      return this.options.attribution;
    },
    _layerAdd: function (t) {
      var i = t.target;
      if (i.hasLayer(this)) {
        if (
          ((this._map = i),
          (this._zoomAnimated = i._zoomAnimated),
          this.getEvents)
        ) {
          var e = this.getEvents();
          i.on(e, this),
            this.once(
              "remove",
              function () {
                i.off(e, this);
              },
              this
            );
        }
        this.onAdd(i),
          this.getAttribution &&
            i.attributionControl &&
            i.attributionControl.addAttribution(this.getAttribution()),
          this.fire("add"),
          i.fire("layeradd", { layer: this });
      }
    },
  });
  Le.include({
    addLayer: function (t) {
      if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
      var i = n(t);
      return this._layers[i]
        ? this
        : ((this._layers[i] = t),
          (t._mapToAdd = this),
          t.beforeAdd && t.beforeAdd(this),
          this.whenReady(t._layerAdd, t),
          this);
    },
    removeLayer: function (t) {
      var i = n(t);
      return this._layers[i]
        ? (this._loaded && t.onRemove(this),
          t.getAttribution &&
            this.attributionControl &&
            this.attributionControl.removeAttribution(t.getAttribution()),
          delete this._layers[i],
          this._loaded &&
            (this.fire("layerremove", { layer: t }), t.fire("remove")),
          (t._map = t._mapToAdd = null),
          this)
        : this;
    },
    hasLayer: function (t) {
      return !!t && n(t) in this._layers;
    },
    eachLayer: function (t, i) {
      for (var e in this._layers) t.call(i, this._layers[e]);
      return this;
    },
    _addLayers: function (t) {
      for (var i = 0, e = (t = t ? (ei(t) ? t : [t]) : []).length; i < e; i++)
        this.addLayer(t[i]);
    },
    _addZoomLimit: function (t) {
      (!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
        ((this._zoomBoundLayers[n(t)] = t), this._updateZoomLevels());
    },
    _removeZoomLimit: function (t) {
      var i = n(t);
      this._zoomBoundLayers[i] &&
        (delete this._zoomBoundLayers[i], this._updateZoomLevels());
    },
    _updateZoomLevels: function () {
      var t = 1 / 0,
        i = -1 / 0,
        e = this._getZoomSpan();
      for (var n in this._zoomBoundLayers) {
        var o = this._zoomBoundLayers[n].options;
        (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)),
          (i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom));
      }
      (this._layersMaxZoom = i === -1 / 0 ? void 0 : i),
        (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
        e !== this._getZoomSpan() && this.fire("zoomlevelschange"),
        void 0 === this.options.maxZoom &&
          this._layersMaxZoom &&
          this.getZoom() > this._layersMaxZoom &&
          this.setZoom(this._layersMaxZoom),
        void 0 === this.options.minZoom &&
          this._layersMinZoom &&
          this.getZoom() < this._layersMinZoom &&
          this.setZoom(this._layersMinZoom);
    },
  });
  var Ve = Ue.extend({
      initialize: function (t, i) {
        l(this, i), (this._layers = {});
        var e, n;
        if (t) for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e]);
      },
      addLayer: function (t) {
        var i = this.getLayerId(t);
        return (this._layers[i] = t), this._map && this._map.addLayer(t), this;
      },
      removeLayer: function (t) {
        var i = t in this._layers ? t : this.getLayerId(t);
        return (
          this._map &&
            this._layers[i] &&
            this._map.removeLayer(this._layers[i]),
          delete this._layers[i],
          this
        );
      },
      hasLayer: function (t) {
        return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
      },
      clearLayers: function () {
        return this.eachLayer(this.removeLayer, this);
      },
      invoke: function (t) {
        var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);
        for (i in this._layers) (e = this._layers[i])[t] && e[t].apply(e, n);
        return this;
      },
      onAdd: function (t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function (t) {
        this.eachLayer(t.removeLayer, t);
      },
      eachLayer: function (t, i) {
        for (var e in this._layers) t.call(i, this._layers[e]);
        return this;
      },
      getLayer: function (t) {
        return this._layers[t];
      },
      getLayers: function () {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      setZIndex: function (t) {
        return this.invoke("setZIndex", t);
      },
      getLayerId: function (t) {
        return n(t);
      },
    }),
    qe = Ve.extend({
      addLayer: function (t) {
        return this.hasLayer(t)
          ? this
          : (t.addEventParent(this),
            Ve.prototype.addLayer.call(this, t),
            this.fire("layeradd", { layer: t }));
      },
      removeLayer: function (t) {
        return this.hasLayer(t)
          ? (t in this._layers && (t = this._layers[t]),
            t.removeEventParent(this),
            Ve.prototype.removeLayer.call(this, t),
            this.fire("layerremove", { layer: t }))
          : this;
      },
      setStyle: function (t) {
        return this.invoke("setStyle", t);
      },
      bringToFront: function () {
        return this.invoke("bringToFront");
      },
      bringToBack: function () {
        return this.invoke("bringToBack");
      },
      getBounds: function () {
        var t = new T();
        for (var i in this._layers) {
          var e = this._layers[i];
          t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
        }
        return t;
      },
    }),
    Ge = v.extend({
      options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] },
      initialize: function (t) {
        l(this, t);
      },
      createIcon: function (t) {
        return this._createIcon("icon", t);
      },
      createShadow: function (t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function (t, i) {
        var e = this._getIconUrl(t);
        if (!e) {
          if ("icon" === t)
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
        return this._setIconStyles(n, t), n;
      },
      _setIconStyles: function (t, i) {
        var e = this.options,
          n = e[i + "Size"];
        "number" == typeof n && (n = [n, n]);
        var o = w(n),
          s = w(
            ("shadow" === i && e.shadowAnchor) ||
              e.iconAnchor ||
              (o && o.divideBy(2, !0))
          );
        (t.className = "leaflet-marker-" + i + " " + (e.className || "")),
          s &&
            ((t.style.marginLeft = -s.x + "px"),
            (t.style.marginTop = -s.y + "px")),
          o && ((t.style.width = o.x + "px"), (t.style.height = o.y + "px"));
      },
      _createImg: function (t, i) {
        return (i = i || document.createElement("img")), (i.src = t), i;
      },
      _getIconUrl: function (t) {
        return (Ki && this.options[t + "RetinaUrl"]) || this.options[t + "Url"];
      },
    }),
    Ke = Ge.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      },
      _getIconUrl: function (t) {
        return (
          Ke.imagePath || (Ke.imagePath = this._detectIconPath()),
          (this.options.imagePath || Ke.imagePath) +
            Ge.prototype._getIconUrl.call(this, t)
        );
      },
      _detectIconPath: function () {
        var t = ht("div", "leaflet-default-icon-path", document.body),
          i = at(t, "background-image") || at(t, "backgroundImage");
        return (
          document.body.removeChild(t),
          (i =
            null === i || 0 !== i.indexOf("url")
              ? ""
              : i
                  .replace(/^url\(["']?/, "")
                  .replace(/marker-icon\.png["']?\)$/, ""))
        );
      },
    }),
    Ye = Ze.extend({
      initialize: function (t) {
        this._marker = t;
      },
      addHooks: function () {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new Be(t, t, !0)),
          this._draggable
            .on(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .enable(),
          pt(t, "leaflet-marker-draggable");
      },
      removeHooks: function () {
        this._draggable
          .off(
            {
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          )
          .disable(),
          this._marker._icon &&
            mt(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function (t) {
        var i = this._marker,
          e = i._map,
          n = this._marker.options.autoPanSpeed,
          o = this._marker.options.autoPanPadding,
          s = L.DomUtil.getPosition(i._icon),
          r = e.getPixelBounds(),
          a = e.getPixelOrigin(),
          h = b(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
        if (!h.contains(s)) {
          var u = w(
            (Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) -
              (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x),
            (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) -
              (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)
          ).multiplyBy(n);
          e.panBy(u, { animate: !1 }),
            this._draggable._newPos._add(u),
            this._draggable._startPos._add(u),
            L.DomUtil.setPosition(i._icon, this._draggable._newPos),
            this._onDrag(t),
            (this._panRequest = f(this._adjustPan.bind(this, t)));
        }
      },
      _onDragStart: function () {
        (this._oldLatLng = this._marker.getLatLng()),
          this._marker.closePopup().fire("movestart").fire("dragstart");
      },
      _onPreDrag: function (t) {
        this._marker.options.autoPan &&
          (g(this._panRequest),
          (this._panRequest = f(this._adjustPan.bind(this, t))));
      },
      _onDrag: function (t) {
        var i = this._marker,
          e = i._shadow,
          n = Pt(i._icon),
          o = i._map.layerPointToLatLng(n);
        e && Lt(e, n),
          (i._latlng = o),
          (t.latlng = o),
          (t.oldLatLng = this._oldLatLng),
          i.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function (t) {
        g(this._panRequest),
          delete this._oldLatLng,
          this._marker.fire("moveend").fire("dragend", t);
      },
    }),
    Xe = Ue.extend({
      options: {
        icon: new Ke(),
        interactive: !0,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10,
        keyboard: !0,
        title: "",
        alt: "",
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: "markerPane",
        bubblingMouseEvents: !1,
      },
      initialize: function (t, i) {
        l(this, i), (this._latlng = C(t));
      },
      onAdd: function (t) {
        (this._zoomAnimated =
          this._zoomAnimated && t.options.markerZoomAnimation),
          this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
          this._initIcon(),
          this.update();
      },
      onRemove: function (t) {
        this.dragging &&
          this.dragging.enabled() &&
          ((this.options.draggable = !0), this.dragging.removeHooks()),
          delete this.dragging,
          this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
          this._removeIcon(),
          this._removeShadow();
      },
      getEvents: function () {
        return { zoom: this.update, viewreset: this.update };
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        var i = this._latlng;
        return (
          (this._latlng = C(t)),
          this.update(),
          this.fire("move", { oldLatLng: i, latlng: this._latlng })
        );
      },
      setZIndexOffset: function (t) {
        return (this.options.zIndexOffset = t), this.update();
      },
      setIcon: function (t) {
        return (
          (this.options.icon = t),
          this._map && (this._initIcon(), this.update()),
          this._popup && this.bindPopup(this._popup, this._popup.options),
          this
        );
      },
      getElement: function () {
        return this._icon;
      },
      update: function () {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function () {
        var t = this.options,
          i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          e = t.icon.createIcon(this._icon),
          n = !1;
        e !== this._icon &&
          (this._icon && this._removeIcon(),
          (n = !0),
          t.title && (e.title = t.title),
          "IMG" === e.tagName && (e.alt = t.alt || "")),
          pt(e, i),
          t.keyboard && (e.tabIndex = "0"),
          (this._icon = e),
          t.riseOnHover &&
            this.on({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            });
        var o = t.icon.createShadow(this._shadow),
          s = !1;
        o !== this._shadow && (this._removeShadow(), (s = !0)),
          o && (pt(o, i), (o.alt = "")),
          (this._shadow = o),
          t.opacity < 1 && this._updateOpacity(),
          n && this.getPane().appendChild(this._icon),
          this._initInteraction(),
          o && s && this.getPane("shadowPane").appendChild(this._shadow);
      },
      _removeIcon: function () {
        this.options.riseOnHover &&
          this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex,
          }),
          ut(this._icon),
          this.removeInteractiveTarget(this._icon),
          (this._icon = null);
      },
      _removeShadow: function () {
        this._shadow && ut(this._shadow), (this._shadow = null);
      },
      _setPos: function (t) {
        Lt(this._icon, t),
          this._shadow && Lt(this._shadow, t),
          (this._zIndex = t.y + this.options.zIndexOffset),
          this._resetZIndex();
      },
      _updateZIndex: function (t) {
        this._icon.style.zIndex = this._zIndex + t;
      },
      _animateZoom: function (t) {
        var i = this._map
          ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
          .round();
        this._setPos(i);
      },
      _initInteraction: function () {
        if (
          this.options.interactive &&
          (pt(this._icon, "leaflet-interactive"),
          this.addInteractiveTarget(this._icon),
          Ye)
        ) {
          var t = this.options.draggable;
          this.dragging &&
            ((t = this.dragging.enabled()), this.dragging.disable()),
            (this.dragging = new Ye(this)),
            t && this.dragging.enable();
        }
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._map && this._updateOpacity(), this
        );
      },
      _updateOpacity: function () {
        var t = this.options.opacity;
        vt(this._icon, t), this._shadow && vt(this._shadow, t);
      },
      _bringToFront: function () {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function () {
        this._updateZIndex(0);
      },
      _getPopupAnchor: function () {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function () {
        return this.options.icon.options.tooltipAnchor;
      },
    }),
    Je = Ue.extend({
      options: {
        stroke: !0,
        color: "#3388ff",
        weight: 3,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: 0.2,
        fillRule: "evenodd",
        interactive: !0,
        bubblingMouseEvents: !0,
      },
      beforeAdd: function (t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function () {
        this._renderer._initPath(this),
          this._reset(),
          this._renderer._addPath(this);
      },
      onRemove: function () {
        this._renderer._removePath(this);
      },
      redraw: function () {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function (t) {
        return (
          l(this, t), this._renderer && this._renderer._updateStyle(this), this
        );
      },
      bringToFront: function () {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function () {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function () {
        return this._path;
      },
      _reset: function () {
        this._project(), this._update();
      },
      _clickTolerance: function () {
        return (
          (this.options.stroke ? this.options.weight / 2 : 0) +
          this._renderer.options.tolerance
        );
      },
    }),
    $e = Je.extend({
      options: { fill: !0, radius: 10 },
      initialize: function (t, i) {
        l(this, i), (this._latlng = C(t)), (this._radius = this.options.radius);
      },
      setLatLng: function (t) {
        return (
          (this._latlng = C(t)),
          this.redraw(),
          this.fire("move", { latlng: this._latlng })
        );
      },
      getLatLng: function () {
        return this._latlng;
      },
      setRadius: function (t) {
        return (this.options.radius = this._radius = t), this.redraw();
      },
      getRadius: function () {
        return this._radius;
      },
      setStyle: function (t) {
        var i = (t && t.radius) || this._radius;
        return Je.prototype.setStyle.call(this, t), this.setRadius(i), this;
      },
      _project: function () {
        (this._point = this._map.latLngToLayerPoint(this._latlng)),
          this._updateBounds();
      },
      _updateBounds: function () {
        var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          n = [t + e, i + e];
        this._pxBounds = new P(this._point.subtract(n), this._point.add(n));
      },
      _update: function () {
        this._map && this._updatePath();
      },
      _updatePath: function () {
        this._renderer._updateCircle(this);
      },
      _empty: function () {
        return (
          this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        );
      },
      _containsPoint: function (t) {
        return (
          t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        );
      },
    }),
    Qe = $e.extend({
      initialize: function (t, e, n) {
        if (
          ("number" == typeof e && (e = i({}, n, { radius: e })),
          l(this, e),
          (this._latlng = C(t)),
          isNaN(this.options.radius))
        )
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function (t) {
        return (this._mRadius = t), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var t = [this._radius, this._radiusY || this._radius];
        return new T(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: Je.prototype.setStyle,
      _project: function () {
        var t = this._latlng.lng,
          i = this._latlng.lat,
          e = this._map,
          n = e.options.crs;
        if (n.distance === _i.distance) {
          var o = Math.PI / 180,
            s = this._mRadius / _i.R / o,
            r = e.project([i + s, t]),
            a = e.project([i - s, t]),
            h = r.add(a).divideBy(2),
            u = e.unproject(h).lat,
            l =
              Math.acos(
                (Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) /
                  (Math.cos(i * o) * Math.cos(u * o))
              ) / o;
          (isNaN(l) || 0 === l) && (l = s / Math.cos((Math.PI / 180) * i)),
            (this._point = h.subtract(e.getPixelOrigin())),
            (this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x),
            (this._radiusY = h.y - r.y);
        } else {
          var c = n.unproject(
            n.project(this._latlng).subtract([this._mRadius, 0])
          );
          (this._point = e.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - e.latLngToLayerPoint(c).x);
        }
        this._updateBounds();
      },
    }),
    tn = Je.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (t, i) {
        l(this, i), this._setLatLngs(t);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (t) {
        return this._setLatLngs(t), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (t) {
        for (
          var i, e, n = 1 / 0, o = null, s = Rt, r = 0, a = this._parts.length;
          r < a;
          r++
        )
          for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
            var c = s(t, (i = h[u - 1]), (e = h[u]), !0);
            c < n && ((n = c), (o = s(t, i, e)));
          }
        return o && (o.distance = Math.sqrt(n)), o;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a = this._rings[0],
          h = a.length;
        if (!h) return null;
        for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
        if (0 === i) return this._map.layerPointToLatLng(a[0]);
        for (t = 0, n = 0; t < h - 1; t++)
          if (((o = a[t]), (s = a[t + 1]), (e = o.distanceTo(s)), (n += e) > i))
            return (
              (r = (n - i) / e),
              this._map.layerPointToLatLng([
                s.x - r * (s.x - o.x),
                s.y - r * (s.y - o.y),
              ])
            );
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (t, i) {
        return (
          (i = i || this._defaultShape()),
          (t = C(t)),
          i.push(t),
          this._bounds.extend(t),
          this.redraw()
        );
      },
      _setLatLngs: function (t) {
        (this._bounds = new T()), (this._latlngs = this._convertLatLngs(t));
      },
      _defaultShape: function () {
        return Dt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (t) {
        for (var i = [], e = Dt(t), n = 0, o = t.length; n < o; n++)
          e
            ? ((i[n] = C(t[n])), this._bounds.extend(i[n]))
            : (i[n] = this._convertLatLngs(t[n]));
        return i;
      },
      _project: function () {
        var t = new P();
        (this._rings = []), this._projectLatlngs(this._latlngs, this._rings, t);
        var i = this._clickTolerance(),
          e = new x(i, i);
        this._bounds.isValid() &&
          t.isValid() &&
          (t.min._subtract(e), t.max._add(e), (this._pxBounds = t));
      },
      _projectLatlngs: function (t, i, e) {
        var n,
          o,
          s = t[0] instanceof M,
          r = t.length;
        if (s) {
          for (o = [], n = 0; n < r; n++)
            (o[n] = this._map.latLngToLayerPoint(t[n])), e.extend(o[n]);
          i.push(o);
        } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e);
      },
      _clipPoints: function () {
        var t = this._renderer._bounds;
        if (
          ((this._parts = []), this._pxBounds && this._pxBounds.intersects(t))
        )
          if (this.options.noClip) this._parts = this._rings;
          else {
            var i,
              e,
              n,
              o,
              s,
              r,
              a,
              h = this._parts;
            for (i = 0, n = 0, o = this._rings.length; i < o; i++)
              for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++)
                (r = It(a[e], a[e + 1], t, e, !0)) &&
                  ((h[n] = h[n] || []),
                  h[n].push(r[0]),
                  (r[1] === a[e + 1] && e !== s - 2) || (h[n].push(r[1]), n++));
          }
      },
      _simplifyPoints: function () {
        for (
          var t = this._parts,
            i = this.options.smoothFactor,
            e = 0,
            n = t.length;
          e < n;
          e++
        )
          t[e] = Ct(t[e], i);
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (t, i) {
        var e,
          n,
          o,
          s,
          r,
          a,
          h = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (e = 0, s = this._parts.length; e < s; e++)
          for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
            if ((i || 0 !== n) && Zt(t, a[o], a[n]) <= h) return !0;
        return !1;
      },
    });
  tn._flat = Nt;
  var en = tn.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = this._rings[0],
          l = u.length;
        if (!l) return null;
        for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++)
          (e = u[t]),
            (n = u[i]),
            (o = e.y * n.x - n.y * e.x),
            (r += (e.x + n.x) * o),
            (a += (e.y + n.y) * o),
            (s += 3 * o);
        return (
          (h = 0 === s ? u[0] : [r / s, a / s]), this._map.layerPointToLatLng(h)
        );
      },
      _convertLatLngs: function (t) {
        var i = tn.prototype._convertLatLngs.call(this, t),
          e = i.length;
        return (
          e >= 2 && i[0] instanceof M && i[0].equals(i[e - 1]) && i.pop(), i
        );
      },
      _setLatLngs: function (t) {
        tn.prototype._setLatLngs.call(this, t),
          Dt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return Dt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var t = this._renderer._bounds,
          i = this.options.weight,
          e = new x(i, i);
        if (
          ((t = new P(t.min.subtract(e), t.max.add(e))),
          (this._parts = []),
          this._pxBounds && this._pxBounds.intersects(t))
        )
          if (this.options.noClip) this._parts = this._rings;
          else
            for (var n, o = 0, s = this._rings.length; o < s; o++)
              (n = jt(this._rings[o], t, !0)).length && this._parts.push(n);
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (t) {
        var i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = !1;
        if (!this._pxBounds.contains(t)) return !1;
        for (o = 0, a = this._parts.length; o < a; o++)
          for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++)
            (e = i[s]),
              (n = i[r]),
              e.y > t.y != n.y > t.y &&
                t.x < ((n.x - e.x) * (t.y - e.y)) / (n.y - e.y) + e.x &&
                (u = !u);
        return u || tn.prototype._containsPoint.call(this, t, !0);
      },
    }),
    nn = qe.extend({
      initialize: function (t, i) {
        l(this, i), (this._layers = {}), t && this.addData(t);
      },
      addData: function (t) {
        var i,
          e,
          n,
          o = ei(t) ? t : t.features;
        if (o) {
          for (i = 0, e = o.length; i < e; i++)
            ((n = o[i]).geometries ||
              n.geometry ||
              n.features ||
              n.coordinates) &&
              this.addData(n);
          return this;
        }
        var s = this.options;
        if (s.filter && !s.filter(t)) return this;
        var r = Wt(t, s);
        return r
          ? ((r.feature = Gt(t)),
            (r.defaultOptions = r.options),
            this.resetStyle(r),
            s.onEachFeature && s.onEachFeature(t, r),
            this.addLayer(r))
          : this;
      },
      resetStyle: function (t) {
        return (
          (t.options = i({}, t.defaultOptions)),
          this._setLayerStyle(t, this.options.style),
          this
        );
      },
      setStyle: function (t) {
        return this.eachLayer(function (i) {
          this._setLayerStyle(i, t);
        }, this);
      },
      _setLayerStyle: function (t, i) {
        "function" == typeof i && (i = i(t.feature)),
          t.setStyle && t.setStyle(i);
      },
    }),
    on = {
      toGeoJSON: function (t) {
        return qt(this, {
          type: "Point",
          coordinates: Ut(this.getLatLng(), t),
        });
      },
    };
  Xe.include(on),
    Qe.include(on),
    $e.include(on),
    tn.include({
      toGeoJSON: function (t) {
        var i = !Dt(this._latlngs),
          e = Vt(this._latlngs, i ? 1 : 0, !1, t);
        return qt(this, {
          type: (i ? "Multi" : "") + "LineString",
          coordinates: e,
        });
      },
    }),
    en.include({
      toGeoJSON: function (t) {
        var i = !Dt(this._latlngs),
          e = i && !Dt(this._latlngs[0]),
          n = Vt(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
        return (
          i || (n = [n]),
          qt(this, { type: (e ? "Multi" : "") + "Polygon", coordinates: n })
        );
      },
    }),
    Ve.include({
      toMultiPoint: function (t) {
        var i = [];
        return (
          this.eachLayer(function (e) {
            i.push(e.toGeoJSON(t).geometry.coordinates);
          }),
          qt(this, { type: "MultiPoint", coordinates: i })
        );
      },
      toGeoJSON: function (t) {
        var i =
          this.feature && this.feature.geometry && this.feature.geometry.type;
        if ("MultiPoint" === i) return this.toMultiPoint(t);
        var e = "GeometryCollection" === i,
          n = [];
        return (
          this.eachLayer(function (i) {
            if (i.toGeoJSON) {
              var o = i.toGeoJSON(t);
              if (e) n.push(o.geometry);
              else {
                var s = Gt(o);
                "FeatureCollection" === s.type
                  ? n.push.apply(n, s.features)
                  : n.push(s);
              }
            }
          }),
          e
            ? qt(this, { geometries: n, type: "GeometryCollection" })
            : { type: "FeatureCollection", features: n }
        );
      },
    });
  var sn = Kt,
    rn = Ue.extend({
      options: {
        opacity: 1,
        alt: "",
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: "",
        zIndex: 1,
        className: "",
      },
      initialize: function (t, i, e) {
        (this._url = t), (this._bounds = z(i)), l(this, e);
      },
      onAdd: function () {
        this._image ||
          (this._initImage(),
          this.options.opacity < 1 && this._updateOpacity()),
          this.options.interactive &&
            (pt(this._image, "leaflet-interactive"),
            this.addInteractiveTarget(this._image)),
          this.getPane().appendChild(this._image),
          this._reset();
      },
      onRemove: function () {
        ut(this._image),
          this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._image && this._updateOpacity(), this
        );
      },
      setStyle: function (t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      bringToFront: function () {
        return this._map && ct(this._image), this;
      },
      bringToBack: function () {
        return this._map && _t(this._image), this;
      },
      setUrl: function (t) {
        return (this._url = t), this._image && (this._image.src = t), this;
      },
      setBounds: function (t) {
        return (this._bounds = z(t)), this._map && this._reset(), this;
      },
      getEvents: function () {
        var t = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      getBounds: function () {
        return this._bounds;
      },
      getElement: function () {
        return this._image;
      },
      _initImage: function () {
        var t = "IMG" === this._url.tagName,
          i = (this._image = t ? this._url : ht("img"));
        pt(i, "leaflet-image-layer"),
          this._zoomAnimated && pt(i, "leaflet-zoom-animated"),
          this.options.className && pt(i, this.options.className),
          (i.onselectstart = r),
          (i.onmousemove = r),
          (i.onload = e(this.fire, this, "load")),
          (i.onerror = e(this._overlayOnError, this, "error")),
          this.options.crossOrigin && (i.crossOrigin = ""),
          this.options.zIndex && this._updateZIndex(),
          t
            ? (this._url = i.src)
            : ((i.src = this._url), (i.alt = this.options.alt));
      },
      _animateZoom: function (t) {
        var i = this._map.getZoomScale(t.zoom),
          e = this._map._latLngBoundsToNewLayerBounds(
            this._bounds,
            t.zoom,
            t.center
          ).min;
        wt(this._image, e, i);
      },
      _reset: function () {
        var t = this._image,
          i = new P(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ),
          e = i.getSize();
        Lt(t, i.min),
          (t.style.width = e.x + "px"),
          (t.style.height = e.y + "px");
      },
      _updateOpacity: function () {
        vt(this._image, this.options.opacity);
      },
      _updateZIndex: function () {
        this._image &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function () {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && ((this._url = t), (this._image.src = t));
      },
    }),
    an = rn.extend({
      options: { autoplay: !0, loop: !0 },
      _initImage: function () {
        var t = "VIDEO" === this._url.tagName,
          i = (this._image = t ? this._url : ht("video"));
        if (
          (pt(i, "leaflet-image-layer"),
          this._zoomAnimated && pt(i, "leaflet-zoom-animated"),
          (i.onselectstart = r),
          (i.onmousemove = r),
          (i.onloadeddata = e(this.fire, this, "load")),
          t)
        ) {
          for (
            var n = i.getElementsByTagName("source"), o = [], s = 0;
            s < n.length;
            s++
          )
            o.push(n[s].src);
          this._url = n.length > 0 ? o : [i.src];
        } else {
          ei(this._url) || (this._url = [this._url]),
            (i.autoplay = !!this.options.autoplay),
            (i.loop = !!this.options.loop);
          for (var a = 0; a < this._url.length; a++) {
            var h = ht("source");
            (h.src = this._url[a]), i.appendChild(h);
          }
        }
      },
    }),
    hn = Ue.extend({
      options: { offset: [0, 7], className: "", pane: "popupPane" },
      initialize: function (t, i) {
        l(this, t), (this._source = i);
      },
      onAdd: function (t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && vt(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && vt(this._container, 1),
          this.bringToFront();
      },
      onRemove: function (t) {
        t._fadeAnimated
          ? (vt(this._container, 0),
            (this._removeTimeout = setTimeout(
              e(ut, void 0, this._container),
              200
            )))
          : ut(this._container);
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        return (
          (this._latlng = C(t)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && ct(this._container), this;
      },
      bringToBack: function () {
        return this._map && _t(this._container), this;
      },
      _updateContent: function () {
        if (this._content) {
          var t = this._contentNode,
            i =
              "function" == typeof this._content
                ? this._content(this._source || this)
                : this._content;
          if ("string" == typeof i) t.innerHTML = i;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(i);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng),
            i = w(this.options.offset),
            e = this._getAnchor();
          this._zoomAnimated
            ? Lt(this._container, t.add(e))
            : (i = i.add(t).add(e));
          var n = (this._containerBottom = -i.y),
            o = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + i.x);
          (this._container.style.bottom = n + "px"),
            (this._container.style.left = o + "px");
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    }),
    un = hn.extend({
      options: {
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: "",
      },
      openOn: function (t) {
        return t.openPopup(this), this;
      },
      onAdd: function (t) {
        hn.prototype.onAdd.call(this, t),
          t.fire("popupopen", { popup: this }),
          this._source &&
            (this._source.fire("popupopen", { popup: this }, !0),
            this._source instanceof Je || this._source.on("preclick", Y));
      },
      onRemove: function (t) {
        hn.prototype.onRemove.call(this, t),
          t.fire("popupclose", { popup: this }),
          this._source &&
            (this._source.fire("popupclose", { popup: this }, !0),
            this._source instanceof Je || this._source.off("preclick", Y));
      },
      getEvents: function () {
        var t = hn.prototype.getEvents.call(this);
        return (
          (void 0 !== this.options.closeOnClick
            ? this.options.closeOnClick
            : this._map.options.closePopupOnClick) &&
            (t.preclick = this._close),
          this.options.keepInView && (t.moveend = this._adjustPan),
          t
        );
      },
      _close: function () {
        this._map && this._map.closePopup(this);
      },
      _initLayout: function () {
        var t = "leaflet-popup",
          i = (this._container = ht(
            "div",
            t + " " + (this.options.className || "") + " leaflet-zoom-animated"
          )),
          e = (this._wrapper = ht("div", t + "-content-wrapper", i));
        if (
          ((this._contentNode = ht("div", t + "-content", e)),
          J(e),
          X(this._contentNode),
          V(e, "contextmenu", Y),
          (this._tipContainer = ht("div", t + "-tip-container", i)),
          (this._tip = ht("div", t + "-tip", this._tipContainer)),
          this.options.closeButton)
        ) {
          var n = (this._closeButton = ht("a", t + "-close-button", i));
          (n.href = "#close"),
            (n.innerHTML = "&#215;"),
            V(n, "click", this._onCloseButtonClick, this);
        }
      },
      _updateLayout: function () {
        var t = this._contentNode,
          i = t.style;
        (i.width = ""), (i.whiteSpace = "nowrap");
        var e = t.offsetWidth;
        (e = Math.min(e, this.options.maxWidth)),
          (e = Math.max(e, this.options.minWidth)),
          (i.width = e + 1 + "px"),
          (i.whiteSpace = ""),
          (i.height = "");
        var n = t.offsetHeight,
          o = this.options.maxHeight;
        o && n > o
          ? ((i.height = o + "px"), pt(t, "leaflet-popup-scrolled"))
          : mt(t, "leaflet-popup-scrolled"),
          (this._containerWidth = this._container.offsetWidth);
      },
      _animateZoom: function (t) {
        var i = this._map._latLngToNewLayerPoint(
            this._latlng,
            t.zoom,
            t.center
          ),
          e = this._getAnchor();
        Lt(this._container, i.add(e));
      },
      _adjustPan: function () {
        if (
          !(
            !this.options.autoPan ||
            (this._map._panAnim && this._map._panAnim._inProgress)
          )
        ) {
          var t = this._map,
            i = parseInt(at(this._container, "marginBottom"), 10) || 0,
            e = this._container.offsetHeight + i,
            n = this._containerWidth,
            o = new x(this._containerLeft, -e - this._containerBottom);
          o._add(Pt(this._container));
          var s = t.layerPointToContainerPoint(o),
            r = w(this.options.autoPanPadding),
            a = w(this.options.autoPanPaddingTopLeft || r),
            h = w(this.options.autoPanPaddingBottomRight || r),
            u = t.getSize(),
            l = 0,
            c = 0;
          s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x),
            s.x - l - a.x < 0 && (l = s.x - a.x),
            s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y),
            s.y - c - a.y < 0 && (c = s.y - a.y),
            (l || c) && t.fire("autopanstart").panBy([l, c]);
        }
      },
      _onCloseButtonClick: function (t) {
        this._close(), Q(t);
      },
      _getAnchor: function () {
        return w(
          this._source && this._source._getPopupAnchor
            ? this._source._getPopupAnchor()
            : [0, 0]
        );
      },
    });
  Le.mergeOptions({ closePopupOnClick: !0 }),
    Le.include({
      openPopup: function (t, i, e) {
        return (
          t instanceof un || (t = new un(e).setContent(t)),
          i && t.setLatLng(i),
          this.hasLayer(t)
            ? this
            : (this._popup &&
                this._popup.options.autoClose &&
                this.closePopup(),
              (this._popup = t),
              this.addLayer(t))
        );
      },
      closePopup: function (t) {
        return (
          (t && t !== this._popup) || ((t = this._popup), (this._popup = null)),
          t && this.removeLayer(t),
          this
        );
      },
    }),
    Ue.include({
      bindPopup: function (t, i) {
        return (
          t instanceof un
            ? (l(t, i), (this._popup = t), (t._source = this))
            : ((this._popup && !i) || (this._popup = new un(i, this)),
              this._popup.setContent(t)),
          this._popupHandlersAdded ||
            (this.on({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !0)),
          this
        );
      },
      unbindPopup: function () {
        return (
          this._popup &&
            (this.off({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !1),
            (this._popup = null)),
          this
        );
      },
      openPopup: function (t, i) {
        if ((t instanceof Ue || ((i = t), (t = this)), t instanceof qe))
          for (var e in this._layers) {
            t = this._layers[e];
            break;
          }
        return (
          i || (i = t.getCenter ? t.getCenter() : t.getLatLng()),
          this._popup &&
            this._map &&
            ((this._popup._source = t),
            this._popup.update(),
            this._map.openPopup(this._popup, i)),
          this
        );
      },
      closePopup: function () {
        return this._popup && this._popup._close(), this;
      },
      togglePopup: function (t) {
        return (
          this._popup &&
            (this._popup._map ? this.closePopup() : this.openPopup(t)),
          this
        );
      },
      isPopupOpen: function () {
        return !!this._popup && this._popup.isOpen();
      },
      setPopupContent: function (t) {
        return this._popup && this._popup.setContent(t), this;
      },
      getPopup: function () {
        return this._popup;
      },
      _openPopup: function (t) {
        var i = t.layer || t.target;
        this._popup &&
          this._map &&
          (Q(t),
          i instanceof Je
            ? this.openPopup(t.layer || t.target, t.latlng)
            : this._map.hasLayer(this._popup) && this._popup._source === i
            ? this.closePopup()
            : this.openPopup(i, t.latlng));
      },
      _movePopup: function (t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function (t) {
        13 === t.originalEvent.keyCode && this._openPopup(t);
      },
    });
  var ln = hn.extend({
    options: {
      pane: "tooltipPane",
      offset: [0, 0],
      direction: "auto",
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: 0.9,
    },
    onAdd: function (t) {
      hn.prototype.onAdd.call(this, t),
        this.setOpacity(this.options.opacity),
        t.fire("tooltipopen", { tooltip: this }),
        this._source && this._source.fire("tooltipopen", { tooltip: this }, !0);
    },
    onRemove: function (t) {
      hn.prototype.onRemove.call(this, t),
        t.fire("tooltipclose", { tooltip: this }),
        this._source &&
          this._source.fire("tooltipclose", { tooltip: this }, !0);
    },
    getEvents: function () {
      var t = hn.prototype.getEvents.call(this);
      return Vi && !this.options.permanent && (t.preclick = this._close), t;
    },
    _close: function () {
      this._map && this._map.closeTooltip(this);
    },
    _initLayout: function () {
      var t =
        "leaflet-tooltip " +
        (this.options.className || "") +
        " leaflet-zoom-" +
        (this._zoomAnimated ? "animated" : "hide");
      this._contentNode = this._container = ht("div", t);
    },
    _updateLayout: function () {},
    _adjustPan: function () {},
    _setPosition: function (t) {
      var i = this._map,
        e = this._container,
        n = i.latLngToContainerPoint(i.getCenter()),
        o = i.layerPointToContainerPoint(t),
        s = this.options.direction,
        r = e.offsetWidth,
        a = e.offsetHeight,
        h = w(this.options.offset),
        u = this._getAnchor();
      "top" === s
        ? (t = t.add(w(-r / 2 + h.x, -a + h.y + u.y, !0)))
        : "bottom" === s
        ? (t = t.subtract(w(r / 2 - h.x, -h.y, !0)))
        : "center" === s
        ? (t = t.subtract(w(r / 2 + h.x, a / 2 - u.y + h.y, !0)))
        : "right" === s || ("auto" === s && o.x < n.x)
        ? ((s = "right"), (t = t.add(w(h.x + u.x, u.y - a / 2 + h.y, !0))))
        : ((s = "left"),
          (t = t.subtract(w(r + u.x - h.x, a / 2 - u.y - h.y, !0)))),
        mt(e, "leaflet-tooltip-right"),
        mt(e, "leaflet-tooltip-left"),
        mt(e, "leaflet-tooltip-top"),
        mt(e, "leaflet-tooltip-bottom"),
        pt(e, "leaflet-tooltip-" + s),
        Lt(e, t);
    },
    _updatePosition: function () {
      var t = this._map.latLngToLayerPoint(this._latlng);
      this._setPosition(t);
    },
    setOpacity: function (t) {
      (this.options.opacity = t), this._container && vt(this._container, t);
    },
    _animateZoom: function (t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
      this._setPosition(i);
    },
    _getAnchor: function () {
      return w(
        this._source && this._source._getTooltipAnchor && !this.options.sticky
          ? this._source._getTooltipAnchor()
          : [0, 0]
      );
    },
  });
  Le.include({
    openTooltip: function (t, i, e) {
      return (
        t instanceof ln || (t = new ln(e).setContent(t)),
        i && t.setLatLng(i),
        this.hasLayer(t) ? this : this.addLayer(t)
      );
    },
    closeTooltip: function (t) {
      return t && this.removeLayer(t), this;
    },
  }),
    Ue.include({
      bindTooltip: function (t, i) {
        return (
          t instanceof ln
            ? (l(t, i), (this._tooltip = t), (t._source = this))
            : ((this._tooltip && !i) || (this._tooltip = new ln(i, this)),
              this._tooltip.setContent(t)),
          this._initTooltipInteractions(),
          this._tooltip.options.permanent &&
            this._map &&
            this._map.hasLayer(this) &&
            this.openTooltip(),
          this
        );
      },
      unbindTooltip: function () {
        return (
          this._tooltip &&
            (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            (this._tooltip = null)),
          this
        );
      },
      _initTooltipInteractions: function (t) {
        if (t || !this._tooltipHandlersAdded) {
          var i = t ? "off" : "on",
            e = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent
            ? (e.add = this._openTooltip)
            : ((e.mouseover = this._openTooltip),
              (e.mouseout = this.closeTooltip),
              this._tooltip.options.sticky && (e.mousemove = this._moveTooltip),
              Vi && (e.click = this._openTooltip)),
            this[i](e),
            (this._tooltipHandlersAdded = !t);
        }
      },
      openTooltip: function (t, i) {
        if ((t instanceof Ue || ((i = t), (t = this)), t instanceof qe))
          for (var e in this._layers) {
            t = this._layers[e];
            break;
          }
        return (
          i || (i = t.getCenter ? t.getCenter() : t.getLatLng()),
          this._tooltip &&
            this._map &&
            ((this._tooltip._source = t),
            this._tooltip.update(),
            this._map.openTooltip(this._tooltip, i),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (pt(this._tooltip._container, "leaflet-clickable"),
              this.addInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      closeTooltip: function () {
        return (
          this._tooltip &&
            (this._tooltip._close(),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (mt(this._tooltip._container, "leaflet-clickable"),
              this.removeInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      toggleTooltip: function (t) {
        return (
          this._tooltip &&
            (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
          this
        );
      },
      isTooltipOpen: function () {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function (t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      getTooltip: function () {
        return this._tooltip;
      },
      _openTooltip: function (t) {
        var i = t.layer || t.target;
        this._tooltip &&
          this._map &&
          this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
      },
      _moveTooltip: function (t) {
        var i,
          e,
          n = t.latlng;
        this._tooltip.options.sticky &&
          t.originalEvent &&
          ((i = this._map.mouseEventToContainerPoint(t.originalEvent)),
          (e = this._map.containerPointToLayerPoint(i)),
          (n = this._map.layerPointToLatLng(e))),
          this._tooltip.setLatLng(n);
      },
    });
  var cn = Ge.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon",
    },
    createIcon: function (t) {
      var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
        e = this.options;
      if (((i.innerHTML = !1 !== e.html ? e.html : ""), e.bgPos)) {
        var n = w(e.bgPos);
        i.style.backgroundPosition = -n.x + "px " + -n.y + "px";
      }
      return this._setIconStyles(i, "icon"), i;
    },
    createShadow: function () {
      return null;
    },
  });
  Ge.Default = Ke;
  var _n = Ue.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: ji,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2,
      },
      initialize: function (t) {
        l(this, t);
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView(),
          this._update();
      },
      beforeAdd: function (t) {
        t._addZoomLimit(this);
      },
      onRemove: function (t) {
        this._removeAllTiles(),
          ut(this._container),
          t._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return (
          this._map && (ct(this._container), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          this._map && (_t(this._container), this._setAutoZIndex(Math.min)),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (t) {
        return (this.options.opacity = t), this._updateOpacity(), this;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        return this._map && (this._removeAllTiles(), this._update()), this;
      },
      getEvents: function () {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = o(
                this._onMoveEnd,
                this.options.updateInterval,
                this
              )),
            (t.move = this._onMove)),
          this._zoomAnimated && (t.zoomanim = this._animateZoom),
          t
        );
      },
      createTile: function () {
        return document.createElement("div");
      },
      getTileSize: function () {
        var t = this.options.tileSize;
        return t instanceof x ? t : new x(t, t);
      },
      _updateZIndex: function () {
        this._container &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (t) {
        for (
          var i,
            e = this.getPane().children,
            n = -t(-1 / 0, 1 / 0),
            o = 0,
            s = e.length;
          o < s;
          o++
        )
          (i = e[o].style.zIndex),
            e[o] !== this._container && i && (n = t(n, +i));
        isFinite(n) &&
          ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !Li) {
          vt(this._container, this.options.opacity);
          var t = +new Date(),
            i = !1,
            e = !1;
          for (var n in this._tiles) {
            var o = this._tiles[n];
            if (o.current && o.loaded) {
              var s = Math.min(1, (t - o.loaded) / 200);
              vt(o.el, s),
                s < 1
                  ? (i = !0)
                  : (o.active ? (e = !0) : this._onOpaqueTile(o),
                    (o.active = !0));
            }
          }
          e && !this._noPrune && this._pruneTiles(),
            i &&
              (g(this._fadeFrame),
              (this._fadeFrame = f(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: r,
      _initContainer: function () {
        this._container ||
          ((this._container = ht(
            "div",
            "leaflet-layer " + (this.options.className || "")
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var t = this._tileZoom,
          i = this.options.maxZoom;
        if (void 0 !== t) {
          for (var e in this._levels)
            this._levels[e].el.children.length || e === t
              ? ((this._levels[e].el.style.zIndex = i - Math.abs(t - e)),
                this._onUpdateLevel(e))
              : (ut(this._levels[e].el),
                this._removeTilesAtZoom(e),
                this._onRemoveLevel(e),
                delete this._levels[e]);
          var n = this._levels[t],
            o = this._map;
          return (
            n ||
              (((n = this._levels[t] = {}).el = ht(
                "div",
                "leaflet-tile-container leaflet-zoom-animated",
                this._container
              )),
              (n.el.style.zIndex = i),
              (n.origin = o
                .project(o.unproject(o.getPixelOrigin()), t)
                .round()),
              (n.zoom = t),
              this._setZoomTransform(n, o.getCenter(), o.getZoom()),
              n.el.offsetWidth,
              this._onCreateLevel(n)),
            (this._level = n),
            n
          );
        }
      },
      _onUpdateLevel: r,
      _onRemoveLevel: r,
      _onCreateLevel: r,
      _pruneTiles: function () {
        if (this._map) {
          var t,
            i,
            e = this._map.getZoom();
          if (e > this.options.maxZoom || e < this.options.minZoom)
            this._removeAllTiles();
          else {
            for (t in this._tiles) (i = this._tiles[t]).retain = i.current;
            for (t in this._tiles)
              if ((i = this._tiles[t]).current && !i.active) {
                var n = i.coords;
                this._retainParent(n.x, n.y, n.z, n.z - 5) ||
                  this._retainChildren(n.x, n.y, n.z, n.z + 2);
              }
            for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
          }
        }
      },
      _removeTilesAtZoom: function (t) {
        for (var i in this._tiles)
          this._tiles[i].coords.z === t && this._removeTile(i);
      },
      _removeAllTiles: function () {
        for (var t in this._tiles) this._removeTile(t);
      },
      _invalidateAll: function () {
        for (var t in this._levels)
          ut(this._levels[t].el),
            this._onRemoveLevel(t),
            delete this._levels[t];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (t, i, e, n) {
        var o = Math.floor(t / 2),
          s = Math.floor(i / 2),
          r = e - 1,
          a = new x(+o, +s);
        a.z = +r;
        var h = this._tileCoordsToKey(a),
          u = this._tiles[h];
        return u && u.active
          ? ((u.retain = !0), !0)
          : (u && u.loaded && (u.retain = !0),
            r > n && this._retainParent(o, s, r, n));
      },
      _retainChildren: function (t, i, e, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var s = 2 * i; s < 2 * i + 2; s++) {
            var r = new x(o, s);
            r.z = e + 1;
            var a = this._tileCoordsToKey(r),
              h = this._tiles[a];
            h && h.active
              ? (h.retain = !0)
              : (h && h.loaded && (h.retain = !0),
                e + 1 < n && this._retainChildren(o, s, e + 1, n));
          }
      },
      _resetView: function (t) {
        var i = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
      },
      _animateZoom: function (t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function (t) {
        var i = this.options;
        return void 0 !== i.minNativeZoom && t < i.minNativeZoom
          ? i.minNativeZoom
          : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t
          ? i.maxNativeZoom
          : t;
      },
      _setView: function (t, i, e, n) {
        var o = this._clampZoom(Math.round(i));
        ((void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
          (void 0 !== this.options.minZoom && o < this.options.minZoom)) &&
          (o = void 0);
        var s = this.options.updateWhenZooming && o !== this._tileZoom;
        (n && !s) ||
          ((this._tileZoom = o),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          void 0 !== o && this._update(t),
          e || this._pruneTiles(),
          (this._noPrune = !!e)),
          this._setZoomTransforms(t, i);
      },
      _setZoomTransforms: function (t, i) {
        for (var e in this._levels)
          this._setZoomTransform(this._levels[e], t, i);
      },
      _setZoomTransform: function (t, i, e) {
        var n = this._map.getZoomScale(e, t.zoom),
          o = t.origin
            .multiplyBy(n)
            .subtract(this._map._getNewPixelOrigin(i, e))
            .round();
        Ni ? wt(t.el, o, n) : Lt(t.el, o);
      },
      _resetGrid: function () {
        var t = this._map,
          i = t.options.crs,
          e = (this._tileSize = this.getTileSize()),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
          (this._wrapX = i.wrapLng &&
            !this.options.noWrap && [
              Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x),
              Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y),
            ]),
          (this._wrapY = i.wrapLat &&
            !this.options.noWrap && [
              Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x),
              Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y),
            ]);
      },
      _onMoveEnd: function () {
        this._map && !this._map._animatingZoom && this._update();
      },
      _getTiledPixelBounds: function (t) {
        var i = this._map,
          e = i._animatingZoom
            ? Math.max(i._animateToZoom, i.getZoom())
            : i.getZoom(),
          n = i.getZoomScale(e, this._tileZoom),
          o = i.project(t, this._tileZoom).floor(),
          s = i.getSize().divideBy(2 * n);
        return new P(o.subtract(s), o.add(s));
      },
      _update: function (t) {
        var i = this._map;
        if (i) {
          var e = this._clampZoom(i.getZoom());
          if (
            (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom)
          ) {
            var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              s = o.getCenter(),
              r = [],
              a = this.options.keepBuffer,
              h = new P(
                o.getBottomLeft().subtract([a, -a]),
                o.getTopRight().add([a, -a])
              );
            if (
              !(
                isFinite(o.min.x) &&
                isFinite(o.min.y) &&
                isFinite(o.max.x) &&
                isFinite(o.max.y)
              )
            )
              throw new Error("Attempted to load an infinite number of tiles");
            for (var u in this._tiles) {
              var l = this._tiles[u].coords;
              (l.z === this._tileZoom && h.contains(new x(l.x, l.y))) ||
                (this._tiles[u].current = !1);
            }
            if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
            else {
              for (var c = o.min.y; c <= o.max.y; c++)
                for (var _ = o.min.x; _ <= o.max.x; _++) {
                  var d = new x(_, c);
                  if (((d.z = this._tileZoom), this._isValidTile(d))) {
                    var p = this._tiles[this._tileCoordsToKey(d)];
                    p ? (p.current = !0) : r.push(d);
                  }
                }
              if (
                (r.sort(function (t, i) {
                  return t.distanceTo(s) - i.distanceTo(s);
                }),
                0 !== r.length)
              ) {
                this._loading || ((this._loading = !0), this.fire("loading"));
                var m = document.createDocumentFragment();
                for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
                this._level.el.appendChild(m);
              }
            }
          }
        }
      },
      _isValidTile: function (t) {
        var i = this._map.options.crs;
        if (!i.infinite) {
          var e = this._globalTileRange;
          if (
            (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x)) ||
            (!i.wrapLat && (t.y < e.min.y || t.y > e.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var n = this._tileCoordsToBounds(t);
        return z(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function (t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function (t) {
        var i = this._map,
          e = this.getTileSize(),
          n = t.scaleBy(e),
          o = n.add(e);
        return [i.unproject(n, t.z), i.unproject(o, t.z)];
      },
      _tileCoordsToBounds: function (t) {
        var i = this._tileCoordsToNwSe(t),
          e = new T(i[0], i[1]);
        return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e;
      },
      _tileCoordsToKey: function (t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      _keyToTileCoords: function (t) {
        var i = t.split(":"),
          e = new x(+i[0], +i[1]);
        return (e.z = +i[2]), e;
      },
      _removeTile: function (t) {
        var i = this._tiles[t];
        i &&
          (Ci || i.el.setAttribute("src", ni),
          ut(i.el),
          delete this._tiles[t],
          this.fire("tileunload", {
            tile: i.el,
            coords: this._keyToTileCoords(t),
          }));
      },
      _initTile: function (t) {
        pt(t, "leaflet-tile");
        var i = this.getTileSize();
        (t.style.width = i.x + "px"),
          (t.style.height = i.y + "px"),
          (t.onselectstart = r),
          (t.onmousemove = r),
          Li && this.options.opacity < 1 && vt(t, this.options.opacity),
          Ti && !zi && (t.style.WebkitBackfaceVisibility = "hidden");
      },
      _addTile: function (t, i) {
        var n = this._getTilePos(t),
          o = this._tileCoordsToKey(t),
          s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
        this._initTile(s),
          this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)),
          Lt(s, n),
          (this._tiles[o] = { el: s, coords: t, current: !0 }),
          i.appendChild(s),
          this.fire("tileloadstart", { tile: s, coords: t });
      },
      _tileReady: function (t, i, n) {
        if (this._map) {
          i && this.fire("tileerror", { error: i, tile: n, coords: t });
          var o = this._tileCoordsToKey(t);
          (n = this._tiles[o]) &&
            ((n.loaded = +new Date()),
            this._map._fadeAnimated
              ? (vt(n.el, 0),
                g(this._fadeFrame),
                (this._fadeFrame = f(this._updateOpacity, this)))
              : ((n.active = !0), this._pruneTiles()),
            i ||
              (pt(n.el, "leaflet-tile-loaded"),
              this.fire("tileload", { tile: n.el, coords: t })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire("load"),
              Li || !this._map._fadeAnimated
                ? f(this._pruneTiles, this)
                : setTimeout(e(this._pruneTiles, this), 250)));
        }
      },
      _getTilePos: function (t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (t) {
        var i = new x(
          this._wrapX ? s(t.x, this._wrapX) : t.x,
          this._wrapY ? s(t.y, this._wrapY) : t.y
        );
        return (i.z = t.z), i;
      },
      _pxBoundsToTileRange: function (t) {
        var i = this.getTileSize();
        return new P(
          t.min.unscaleBy(i).floor(),
          t.max.unscaleBy(i).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function () {
        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
        return !0;
      },
    }),
    dn = _n.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
      },
      initialize: function (t, i) {
        (this._url = t),
          (i = l(this, i)).detectRetina &&
            Ki &&
            i.maxZoom > 0 &&
            ((i.tileSize = Math.floor(i.tileSize / 2)),
            i.zoomReverse
              ? (i.zoomOffset--, i.minZoom++)
              : (i.zoomOffset++, i.maxZoom--),
            (i.minZoom = Math.max(0, i.minZoom))),
          "string" == typeof i.subdomains &&
            (i.subdomains = i.subdomains.split("")),
          Ti || this.on("tileunload", this._onTileRemove);
      },
      setUrl: function (t, i) {
        return (this._url = t), i || this.redraw(), this;
      },
      createTile: function (t, i) {
        var n = document.createElement("img");
        return (
          V(n, "load", e(this._tileOnLoad, this, i, n)),
          V(n, "error", e(this._tileOnError, this, i, n)),
          this.options.crossOrigin && (n.crossOrigin = ""),
          (n.alt = ""),
          n.setAttribute("role", "presentation"),
          (n.src = this.getTileUrl(t)),
          n
        );
      },
      getTileUrl: function (t) {
        var e = {
          r: Ki ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var n = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = n), (e["-y"] = n);
        }
        return _(this._url, i(e, this.options));
      },
      _tileOnLoad: function (t, i) {
        Li ? setTimeout(e(t, this, null, i), 0) : t(null, i);
      },
      _tileOnError: function (t, i, e) {
        var n = this.options.errorTileUrl;
        n && i.getAttribute("src") !== n && (i.src = n), t(e, i);
      },
      _onTileRemove: function (t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var t = this._tileZoom,
          i = this.options.maxZoom,
          e = this.options.zoomReverse,
          n = this.options.zoomOffset;
        return e && (t = i - t), t + n;
      },
      _getSubdomain: function (t) {
        var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[i];
      },
      _abortLoading: function () {
        var t, i;
        for (t in this._tiles)
          this._tiles[t].coords.z !== this._tileZoom &&
            (((i = this._tiles[t].el).onload = r),
            (i.onerror = r),
            i.complete || ((i.src = ni), ut(i), delete this._tiles[t]));
      },
    }),
    pn = dn.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1",
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (t, e) {
        this._url = t;
        var n = i({}, this.defaultWmsParams);
        for (var o in e) o in this.options || (n[o] = e[o]);
        var s = (e = l(this, e)).detectRetina && Ki ? 2 : 1,
          r = this.getTileSize();
        (n.width = r.x * s), (n.height = r.y * s), (this.wmsParams = n);
      },
      onAdd: function (t) {
        (this._crs = this.options.crs || t.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
        (this.wmsParams[i] = this._crs.code), dn.prototype.onAdd.call(this, t);
      },
      getTileUrl: function (t) {
        var i = this._tileCoordsToNwSe(t),
          e = this._crs,
          n = b(e.project(i[0]), e.project(i[1])),
          o = n.min,
          s = n.max,
          r = (
            this._wmsVersion >= 1.3 && this._crs === He
              ? [o.y, o.x, s.y, s.x]
              : [o.x, o.y, s.x, s.y]
          ).join(","),
          a = L.TileLayer.prototype.getTileUrl.call(this, t);
        return (
          a +
          c(this.wmsParams, a, this.options.uppercase) +
          (this.options.uppercase ? "&BBOX=" : "&bbox=") +
          r
        );
      },
      setParams: function (t, e) {
        return i(this.wmsParams, t), e || this.redraw(), this;
      },
    });
  (dn.WMS = pn),
    (Yt.wms = function (t, i) {
      return new pn(t, i);
    });
  var mn = Ue.extend({
      options: { padding: 0.1, tolerance: 0 },
      initialize: function (t) {
        l(this, t), n(this), (this._layers = this._layers || {});
      },
      onAdd: function () {
        this._container ||
          (this._initContainer(),
          this._zoomAnimated && pt(this._container, "leaflet-zoom-animated")),
          this.getPane().appendChild(this._container),
          this._update(),
          this.on("update", this._updatePaths, this);
      },
      onRemove: function () {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function () {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd,
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function (t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function () {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function (t, i) {
        var e = this._map.getZoomScale(i, this._zoom),
          n = Pt(this._container),
          o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          s = this._map.project(this._center, i),
          r = this._map.project(t, i).subtract(s),
          a = o.multiplyBy(-e).add(n).add(o).subtract(r);
        Ni ? wt(this._container, a, e) : Lt(this._container, a);
      },
      _reset: function () {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var t in this._layers) this._layers[t]._reset();
      },
      _onZoomEnd: function () {
        for (var t in this._layers) this._layers[t]._project();
      },
      _updatePaths: function () {
        for (var t in this._layers) this._layers[t]._update();
      },
      _update: function () {
        var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
        (this._bounds = new P(e, e.add(i.multiplyBy(1 + 2 * t)).round())),
          (this._center = this._map.getCenter()),
          (this._zoom = this._map.getZoom());
      },
    }),
    fn = mn.extend({
      getEvents: function () {
        var t = mn.prototype.getEvents.call(this);
        return (t.viewprereset = this._onViewPreReset), t;
      },
      _onViewPreReset: function () {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function () {
        mn.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function () {
        var t = (this._container = document.createElement("canvas"));
        V(t, "mousemove", o(this._onMouseMove, 32, this), this),
          V(
            t,
            "click dblclick mousedown mouseup contextmenu",
            this._onClick,
            this
          ),
          V(t, "mouseout", this._handleMouseOut, this),
          (this._ctx = t.getContext("2d"));
      },
      _destroyContainer: function () {
        delete this._ctx,
          ut(this._container),
          q(this._container),
          delete this._container;
      },
      _updatePaths: function () {
        if (!this._postponeUpdatePaths) {
          this._redrawBounds = null;
          for (var t in this._layers) this._layers[t]._update();
          this._redraw();
        }
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          (this._drawnLayers = {}), mn.prototype._update.call(this);
          var t = this._bounds,
            i = this._container,
            e = t.getSize(),
            n = Ki ? 2 : 1;
          Lt(i, t.min),
            (i.width = n * e.x),
            (i.height = n * e.y),
            (i.style.width = e.x + "px"),
            (i.style.height = e.y + "px"),
            Ki && this._ctx.scale(2, 2),
            this._ctx.translate(-t.min.x, -t.min.y),
            this.fire("update");
        }
      },
      _reset: function () {
        mn.prototype._reset.call(this),
          this._postponeUpdatePaths &&
            ((this._postponeUpdatePaths = !1), this._updatePaths());
      },
      _initPath: function (t) {
        this._updateDashArray(t), (this._layers[n(t)] = t);
        var i = (t._order = { layer: t, prev: this._drawLast, next: null });
        this._drawLast && (this._drawLast.next = i),
          (this._drawLast = i),
          (this._drawFirst = this._drawFirst || this._drawLast);
      },
      _addPath: function (t) {
        this._requestRedraw(t);
      },
      _removePath: function (t) {
        var i = t._order,
          e = i.next,
          n = i.prev;
        e ? (e.prev = n) : (this._drawLast = n),
          n ? (n.next = e) : (this._drawFirst = e),
          delete t._order,
          delete this._layers[L.stamp(t)],
          this._requestRedraw(t);
      },
      _updatePath: function (t) {
        this._extendRedrawBounds(t),
          t._project(),
          t._update(),
          this._requestRedraw(t);
      },
      _updateStyle: function (t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function (t) {
        if (t.options.dashArray) {
          var i,
            e = t.options.dashArray.split(","),
            n = [];
          for (i = 0; i < e.length; i++) n.push(Number(e[i]));
          t.options._dashArray = n;
        }
      },
      _requestRedraw: function (t) {
        this._map &&
          (this._extendRedrawBounds(t),
          (this._redrawRequest = this._redrawRequest || f(this._redraw, this)));
      },
      _extendRedrawBounds: function (t) {
        if (t._pxBounds) {
          var i = (t.options.weight || 0) + 1;
          (this._redrawBounds = this._redrawBounds || new P()),
            this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])),
            this._redrawBounds.extend(t._pxBounds.max.add([i, i]));
        }
      },
      _redraw: function () {
        (this._redrawRequest = null),
          this._redrawBounds &&
            (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
          this._clear(),
          this._draw(),
          (this._redrawBounds = null);
      },
      _clear: function () {
        var t = this._redrawBounds;
        if (t) {
          var i = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y);
        } else
          this._ctx.clearRect(
            0,
            0,
            this._container.width,
            this._container.height
          );
      },
      _draw: function () {
        var t,
          i = this._redrawBounds;
        if ((this._ctx.save(), i)) {
          var e = i.getSize();
          this._ctx.beginPath(),
            this._ctx.rect(i.min.x, i.min.y, e.x, e.y),
            this._ctx.clip();
        }
        this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next)
          (t = n.layer),
            (!i || (t._pxBounds && t._pxBounds.intersects(i))) &&
              t._updatePath();
        (this._drawing = !1), this._ctx.restore();
      },
      _updatePoly: function (t, i) {
        if (this._drawing) {
          var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;
          if (a) {
            for (
              this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0;
              e < a;
              e++
            ) {
              for (n = 0, o = r[e].length; n < o; n++)
                (s = r[e][n]), h[n ? "lineTo" : "moveTo"](s.x, s.y);
              i && h.closePath();
            }
            this._fillStroke(h, t);
          }
        }
      },
      _updateCircle: function (t) {
        if (this._drawing && !t._empty()) {
          var i = t._point,
            e = this._ctx,
            n = Math.max(Math.round(t._radius), 1),
            o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
          (this._drawnLayers[t._leaflet_id] = t),
            1 !== o && (e.save(), e.scale(1, o)),
            e.beginPath(),
            e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1),
            1 !== o && e.restore(),
            this._fillStroke(e, t);
        }
      },
      _fillStroke: function (t, i) {
        var e = i.options;
        e.fill &&
          ((t.globalAlpha = e.fillOpacity),
          (t.fillStyle = e.fillColor || e.color),
          t.fill(e.fillRule || "evenodd")),
          e.stroke &&
            0 !== e.weight &&
            (t.setLineDash &&
              t.setLineDash((i.options && i.options._dashArray) || []),
            (t.globalAlpha = e.opacity),
            (t.lineWidth = e.weight),
            (t.strokeStyle = e.color),
            (t.lineCap = e.lineCap),
            (t.lineJoin = e.lineJoin),
            t.stroke());
      },
      _onClick: function (t) {
        for (
          var i,
            e,
            n = this._map.mouseEventToLayerPoint(t),
            o = this._drawFirst;
          o;
          o = o.next
        )
          (i = o.layer).options.interactive &&
            i._containsPoint(n) &&
            !this._map._draggableMoved(i) &&
            (e = i);
        e && (et(t), this._fireEvent([e], t));
      },
      _onMouseMove: function (t) {
        if (
          this._map &&
          !this._map.dragging.moving() &&
          !this._map._animatingZoom
        ) {
          var i = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, i);
        }
      },
      _handleMouseOut: function (t) {
        var i = this._hoveredLayer;
        i &&
          (mt(this._container, "leaflet-interactive"),
          this._fireEvent([i], t, "mouseout"),
          (this._hoveredLayer = null));
      },
      _handleMouseHover: function (t, i) {
        for (var e, n, o = this._drawFirst; o; o = o.next)
          (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
        n !== this._hoveredLayer &&
          (this._handleMouseOut(t),
          n &&
            (pt(this._container, "leaflet-interactive"),
            this._fireEvent([n], t, "mouseover"),
            (this._hoveredLayer = n))),
          this._hoveredLayer && this._fireEvent([this._hoveredLayer], t);
      },
      _fireEvent: function (t, i, e) {
        this._map._fireDOMEvent(i, e || i.type, t);
      },
      _bringToFront: function (t) {
        var i = t._order,
          e = i.next,
          n = i.prev;
        e &&
          ((e.prev = n),
          n ? (n.next = e) : e && (this._drawFirst = e),
          (i.prev = this._drawLast),
          (this._drawLast.next = i),
          (i.next = null),
          (this._drawLast = i),
          this._requestRedraw(t));
      },
      _bringToBack: function (t) {
        var i = t._order,
          e = i.next,
          n = i.prev;
        n &&
          ((n.next = e),
          e ? (e.prev = n) : n && (this._drawLast = n),
          (i.prev = null),
          (i.next = this._drawFirst),
          (this._drawFirst.prev = i),
          (this._drawFirst = i),
          this._requestRedraw(t));
      },
    }),
    gn = (function () {
      try {
        return (
          document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
          function (t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          }
        );
      } catch (t) {
        return function (t) {
          return document.createElement(
            "<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      }
    })(),
    vn = {
      _initContainer: function () {
        this._container = ht("div", "leaflet-vml-container");
      },
      _update: function () {
        this._map._animatingZoom ||
          (mn.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function (t) {
        var i = (t._container = gn("shape"));
        pt(i, "leaflet-vml-shape " + (this.options.className || "")),
          (i.coordsize = "1 1"),
          (t._path = gn("path")),
          i.appendChild(t._path),
          this._updateStyle(t),
          (this._layers[n(t)] = t);
      },
      _addPath: function (t) {
        var i = t._container;
        this._container.appendChild(i),
          t.options.interactive && t.addInteractiveTarget(i);
      },
      _removePath: function (t) {
        var i = t._container;
        ut(i), t.removeInteractiveTarget(i), delete this._layers[n(t)];
      },
      _updateStyle: function (t) {
        var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;
        (o.stroked = !!n.stroke),
          (o.filled = !!n.fill),
          n.stroke
            ? (i || (i = t._stroke = gn("stroke")),
              o.appendChild(i),
              (i.weight = n.weight + "px"),
              (i.color = n.color),
              (i.opacity = n.opacity),
              n.dashArray
                ? (i.dashStyle = ei(n.dashArray)
                    ? n.dashArray.join(" ")
                    : n.dashArray.replace(/( *, *)/g, " "))
                : (i.dashStyle = ""),
              (i.endcap = n.lineCap.replace("butt", "flat")),
              (i.joinstyle = n.lineJoin))
            : i && (o.removeChild(i), (t._stroke = null)),
          n.fill
            ? (e || (e = t._fill = gn("fill")),
              o.appendChild(e),
              (e.color = n.fillColor || n.color),
              (e.opacity = n.fillOpacity))
            : e && (o.removeChild(e), (t._fill = null));
      },
      _updateCircle: function (t) {
        var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);
        this._setPath(
          t,
          t._empty()
            ? "M0 0"
            : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600"
        );
      },
      _setPath: function (t, i) {
        t._path.v = i;
      },
      _bringToFront: function (t) {
        ct(t._container);
      },
      _bringToBack: function (t) {
        _t(t._container);
      },
    },
    yn = Ji ? gn : E,
    xn = mn.extend({
      getEvents: function () {
        var t = mn.prototype.getEvents.call(this);
        return (t.zoomstart = this._onZoomStart), t;
      },
      _initContainer: function () {
        (this._container = yn("svg")),
          this._container.setAttribute("pointer-events", "none"),
          (this._rootGroup = yn("g")),
          this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function () {
        ut(this._container),
          q(this._container),
          delete this._container,
          delete this._rootGroup,
          delete this._svgSize;
      },
      _onZoomStart: function () {
        this._update();
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          mn.prototype._update.call(this);
          var t = this._bounds,
            i = t.getSize(),
            e = this._container;
          (this._svgSize && this._svgSize.equals(i)) ||
            ((this._svgSize = i),
            e.setAttribute("width", i.x),
            e.setAttribute("height", i.y)),
            Lt(e, t.min),
            e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")),
            this.fire("update");
        }
      },
      _initPath: function (t) {
        var i = (t._path = yn("path"));
        t.options.className && pt(i, t.options.className),
          t.options.interactive && pt(i, "leaflet-interactive"),
          this._updateStyle(t),
          (this._layers[n(t)] = t);
      },
      _addPath: function (t) {
        this._rootGroup || this._initContainer(),
          this._rootGroup.appendChild(t._path),
          t.addInteractiveTarget(t._path);
      },
      _removePath: function (t) {
        ut(t._path),
          t.removeInteractiveTarget(t._path),
          delete this._layers[n(t)];
      },
      _updatePath: function (t) {
        t._project(), t._update();
      },
      _updateStyle: function (t) {
        var i = t._path,
          e = t.options;
        i &&
          (e.stroke
            ? (i.setAttribute("stroke", e.color),
              i.setAttribute("stroke-opacity", e.opacity),
              i.setAttribute("stroke-width", e.weight),
              i.setAttribute("stroke-linecap", e.lineCap),
              i.setAttribute("stroke-linejoin", e.lineJoin),
              e.dashArray
                ? i.setAttribute("stroke-dasharray", e.dashArray)
                : i.removeAttribute("stroke-dasharray"),
              e.dashOffset
                ? i.setAttribute("stroke-dashoffset", e.dashOffset)
                : i.removeAttribute("stroke-dashoffset"))
            : i.setAttribute("stroke", "none"),
          e.fill
            ? (i.setAttribute("fill", e.fillColor || e.color),
              i.setAttribute("fill-opacity", e.fillOpacity),
              i.setAttribute("fill-rule", e.fillRule || "evenodd"))
            : i.setAttribute("fill", "none"));
      },
      _updatePoly: function (t, i) {
        this._setPath(t, k(t._parts, i));
      },
      _updateCircle: function (t) {
        var i = t._point,
          e = Math.max(Math.round(t._radius), 1),
          n =
            "a" +
            e +
            "," +
            (Math.max(Math.round(t._radiusY), 1) || e) +
            " 0 1,0 ",
          o = t._empty()
            ? "M0 0"
            : "M" +
              (i.x - e) +
              "," +
              i.y +
              n +
              2 * e +
              ",0 " +
              n +
              2 * -e +
              ",0 ";
        this._setPath(t, o);
      },
      _setPath: function (t, i) {
        t._path.setAttribute("d", i);
      },
      _bringToFront: function (t) {
        ct(t._path);
      },
      _bringToBack: function (t) {
        _t(t._path);
      },
    });
  Ji && xn.include(vn),
    Le.include({
      getRenderer: function (t) {
        var i =
          t.options.renderer ||
          this._getPaneRenderer(t.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          i ||
            (i = this._renderer = (this.options.preferCanvas && Xt()) || Jt()),
          this.hasLayer(i) || this.addLayer(i),
          i
        );
      },
      _getPaneRenderer: function (t) {
        if ("overlayPane" === t || void 0 === t) return !1;
        var i = this._paneRenderers[t];
        return (
          void 0 === i &&
            ((i = (xn && Jt({ pane: t })) || (fn && Xt({ pane: t }))),
            (this._paneRenderers[t] = i)),
          i
        );
      },
    });
  var wn = en.extend({
    initialize: function (t, i) {
      en.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    },
    setBounds: function (t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function (t) {
      return (
        (t = z(t)),
        [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
      );
    },
  });
  (xn.create = yn),
    (xn.pointsToPath = k),
    (nn.geometryToLayer = Wt),
    (nn.coordsToLatLng = Ht),
    (nn.coordsToLatLngs = Ft),
    (nn.latLngToCoords = Ut),
    (nn.latLngsToCoords = Vt),
    (nn.getFeature = qt),
    (nn.asFeature = Gt),
    Le.mergeOptions({ boxZoom: !0 });
  var Ln = Ze.extend({
    initialize: function (t) {
      (this._map = t),
        (this._container = t._container),
        (this._pane = t._panes.overlayPane),
        (this._resetStateTimeout = 0),
        t.on("unload", this._destroy, this);
    },
    addHooks: function () {
      V(this._container, "mousedown", this._onMouseDown, this);
    },
    removeHooks: function () {
      q(this._container, "mousedown", this._onMouseDown, this);
    },
    moved: function () {
      return this._moved;
    },
    _destroy: function () {
      ut(this._pane), delete this._pane;
    },
    _resetState: function () {
      (this._resetStateTimeout = 0), (this._moved = !1);
    },
    _clearDeferredResetState: function () {
      0 !== this._resetStateTimeout &&
        (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
    },
    _onMouseDown: function (t) {
      if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
      this._clearDeferredResetState(),
        this._resetState(),
        mi(),
        bt(),
        (this._startPoint = this._map.mouseEventToContainerPoint(t)),
        V(
          document,
          {
            contextmenu: Q,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseMove: function (t) {
      this._moved ||
        ((this._moved = !0),
        (this._box = ht("div", "leaflet-zoom-box", this._container)),
        pt(this._container, "leaflet-crosshair"),
        this._map.fire("boxzoomstart")),
        (this._point = this._map.mouseEventToContainerPoint(t));
      var i = new P(this._point, this._startPoint),
        e = i.getSize();
      Lt(this._box, i.min),
        (this._box.style.width = e.x + "px"),
        (this._box.style.height = e.y + "px");
    },
    _finish: function () {
      this._moved && (ut(this._box), mt(this._container, "leaflet-crosshair")),
        fi(),
        Tt(),
        q(
          document,
          {
            contextmenu: Q,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseUp: function (t) {
      if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
        this._clearDeferredResetState(),
          (this._resetStateTimeout = setTimeout(e(this._resetState, this), 0));
        var i = new T(
          this._map.containerPointToLatLng(this._startPoint),
          this._map.containerPointToLatLng(this._point)
        );
        this._map.fitBounds(i).fire("boxzoomend", { boxZoomBounds: i });
      }
    },
    _onKeyDown: function (t) {
      27 === t.keyCode && this._finish();
    },
  });
  Le.addInitHook("addHandler", "boxZoom", Ln),
    Le.mergeOptions({ doubleClickZoom: !0 });
  var Pn = Ze.extend({
    addHooks: function () {
      this._map.on("dblclick", this._onDoubleClick, this);
    },
    removeHooks: function () {
      this._map.off("dblclick", this._onDoubleClick, this);
    },
    _onDoubleClick: function (t) {
      var i = this._map,
        e = i.getZoom(),
        n = i.options.zoomDelta,
        o = t.originalEvent.shiftKey ? e - n : e + n;
      "center" === i.options.doubleClickZoom
        ? i.setZoom(o)
        : i.setZoomAround(t.containerPoint, o);
    },
  });
  Le.addInitHook("addHandler", "doubleClickZoom", Pn),
    Le.mergeOptions({
      dragging: !0,
      inertia: !zi,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: 0.2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0,
    });
  var bn = Ze.extend({
    addHooks: function () {
      if (!this._draggable) {
        var t = this._map;
        (this._draggable = new Be(t._mapPane, t._container)),
          this._draggable.on(
            {
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          ),
          this._draggable.on("predrag", this._onPreDragLimit, this),
          t.options.worldCopyJump &&
            (this._draggable.on("predrag", this._onPreDragWrap, this),
            t.on("zoomend", this._onZoomEnd, this),
            t.whenReady(this._onZoomEnd, this));
      }
      pt(this._map._container, "leaflet-grab leaflet-touch-drag"),
        this._draggable.enable(),
        (this._positions = []),
        (this._times = []);
    },
    removeHooks: function () {
      mt(this._map._container, "leaflet-grab"),
        mt(this._map._container, "leaflet-touch-drag"),
        this._draggable.disable();
    },
    moved: function () {
      return this._draggable && this._draggable._moved;
    },
    moving: function () {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function () {
      var t = this._map;
      if (
        (t._stop(),
        this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
      ) {
        var i = z(this._map.options.maxBounds);
        (this._offsetLimit = b(
          this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),
          this._map
            .latLngToContainerPoint(i.getSouthEast())
            .multiplyBy(-1)
            .add(this._map.getSize())
        )),
          (this._viscosity = Math.min(
            1,
            Math.max(0, this._map.options.maxBoundsViscosity)
          ));
      } else this._offsetLimit = null;
      t.fire("movestart").fire("dragstart"),
        t.options.inertia && ((this._positions = []), (this._times = []));
    },
    _onDrag: function (t) {
      if (this._map.options.inertia) {
        var i = (this._lastTime = +new Date()),
          e = (this._lastPos =
            this._draggable._absPos || this._draggable._newPos);
        this._positions.push(e), this._times.push(i), this._prunePositions(i);
      }
      this._map.fire("move", t).fire("drag", t);
    },
    _prunePositions: function (t) {
      for (; this._positions.length > 1 && t - this._times[0] > 50; )
        this._positions.shift(), this._times.shift();
    },
    _onZoomEnd: function () {
      var t = this._map.getSize().divideBy(2),
        i = this._map.latLngToLayerPoint([0, 0]);
      (this._initialWorldOffset = i.subtract(t).x),
        (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
    },
    _viscousLimit: function (t, i) {
      return t - (t - i) * this._viscosity;
    },
    _onPreDragLimit: function () {
      if (this._viscosity && this._offsetLimit) {
        var t = this._draggable._newPos.subtract(this._draggable._startPos),
          i = this._offsetLimit;
        t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)),
          t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)),
          t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)),
          t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)),
          (this._draggable._newPos = this._draggable._startPos.add(t));
      }
    },
    _onPreDragWrap: function () {
      var t = this._worldWidth,
        i = Math.round(t / 2),
        e = this._initialWorldOffset,
        n = this._draggable._newPos.x,
        o = ((n - i + e) % t) + i - e,
        s = ((n + i + e) % t) - i - e,
        r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
      (this._draggable._absPos = this._draggable._newPos.clone()),
        (this._draggable._newPos.x = r);
    },
    _onDragEnd: function (t) {
      var i = this._map,
        e = i.options,
        n = !e.inertia || this._times.length < 2;
      if ((i.fire("dragend", t), n)) i.fire("moveend");
      else {
        this._prunePositions(+new Date());
        var o = this._lastPos.subtract(this._positions[0]),
          s = (this._lastTime - this._times[0]) / 1e3,
          r = e.easeLinearity,
          a = o.multiplyBy(r / s),
          h = a.distanceTo([0, 0]),
          u = Math.min(e.inertiaMaxSpeed, h),
          l = a.multiplyBy(u / h),
          c = u / (e.inertiaDeceleration * r),
          _ = l.multiplyBy(-c / 2).round();
        _.x || _.y
          ? ((_ = i._limitOffset(_, i.options.maxBounds)),
            f(function () {
              i.panBy(_, {
                duration: c,
                easeLinearity: r,
                noMoveStart: !0,
                animate: !0,
              });
            }))
          : i.fire("moveend");
      }
    },
  });
  Le.addInitHook("addHandler", "dragging", bn),
    Le.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
  var Tn = Ze.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173],
    },
    initialize: function (t) {
      (this._map = t),
        this._setPanDelta(t.options.keyboardPanDelta),
        this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function () {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"),
        V(
          t,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    removeHooks: function () {
      this._removeHooks(),
        q(
          this._map._container,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    _onMouseDown: function () {
      if (!this._focused) {
        var t = document.body,
          i = document.documentElement,
          e = t.scrollTop || i.scrollTop,
          n = t.scrollLeft || i.scrollLeft;
        this._map._container.focus(), window.scrollTo(n, e);
      }
    },
    _onFocus: function () {
      (this._focused = !0), this._map.fire("focus");
    },
    _onBlur: function () {
      (this._focused = !1), this._map.fire("blur");
    },
    _setPanDelta: function (t) {
      var i,
        e,
        n = (this._panKeys = {}),
        o = this.keyCodes;
      for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
      for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
      for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
      for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t];
    },
    _setZoomDelta: function (t) {
      var i,
        e,
        n = (this._zoomKeys = {}),
        o = this.keyCodes;
      for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
      for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t;
    },
    _addHooks: function () {
      V(document, "keydown", this._onKeyDown, this);
    },
    _removeHooks: function () {
      q(document, "keydown", this._onKeyDown, this);
    },
    _onKeyDown: function (t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
          e = t.keyCode,
          n = this._map;
        if (e in this._panKeys) {
          if (n._panAnim && n._panAnim._inProgress) return;
          (i = this._panKeys[e]),
            t.shiftKey && (i = w(i).multiplyBy(3)),
            n.panBy(i),
            n.options.maxBounds && n.panInsideBounds(n.options.maxBounds);
        } else if (e in this._zoomKeys)
          n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
        else {
          if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey)
            return;
          n.closePopup();
        }
        Q(t);
      }
    },
  });
  Le.addInitHook("addHandler", "keyboard", Tn),
    Le.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60,
    });
  var zn = Ze.extend({
    addHooks: function () {
      V(this._map._container, "mousewheel", this._onWheelScroll, this),
        (this._delta = 0);
    },
    removeHooks: function () {
      q(this._map._container, "mousewheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function (t) {
      var i = it(t),
        n = this._map.options.wheelDebounceTime;
      (this._delta += i),
        (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
        this._startTime || (this._startTime = +new Date());
      var o = Math.max(n - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer),
        (this._timer = setTimeout(e(this._performZoom, this), o)),
        Q(t);
    },
    _performZoom: function () {
      var t = this._map,
        i = t.getZoom(),
        e = this._map.options.zoomSnap || 0;
      t._stop();
      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
        o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
        s = e ? Math.ceil(o / e) * e : o,
        r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
      (this._delta = 0),
        (this._startTime = null),
        r &&
          ("center" === t.options.scrollWheelZoom
            ? t.setZoom(i + r)
            : t.setZoomAround(this._lastMousePos, i + r));
    },
  });
  Le.addInitHook("addHandler", "scrollWheelZoom", zn),
    Le.mergeOptions({ tap: !0, tapTolerance: 15 });
  var Mn = Ze.extend({
    addHooks: function () {
      V(this._map._container, "touchstart", this._onDown, this);
    },
    removeHooks: function () {
      q(this._map._container, "touchstart", this._onDown, this);
    },
    _onDown: function (t) {
      if (t.touches) {
        if (($(t), (this._fireClick = !0), t.touches.length > 1))
          return (this._fireClick = !1), void clearTimeout(this._holdTimeout);
        var i = t.touches[0],
          n = i.target;
        (this._startPos = this._newPos = new x(i.clientX, i.clientY)),
          n.tagName &&
            "a" === n.tagName.toLowerCase() &&
            pt(n, "leaflet-active"),
          (this._holdTimeout = setTimeout(
            e(function () {
              this._isTapValid() &&
                ((this._fireClick = !1),
                this._onUp(),
                this._simulateEvent("contextmenu", i));
            }, this),
            1e3
          )),
          this._simulateEvent("mousedown", i),
          V(document, { touchmove: this._onMove, touchend: this._onUp }, this);
      }
    },
    _onUp: function (t) {
      if (
        (clearTimeout(this._holdTimeout),
        q(document, { touchmove: this._onMove, touchend: this._onUp }, this),
        this._fireClick && t && t.changedTouches)
      ) {
        var i = t.changedTouches[0],
          e = i.target;
        e &&
          e.tagName &&
          "a" === e.tagName.toLowerCase() &&
          mt(e, "leaflet-active"),
          this._simulateEvent("mouseup", i),
          this._isTapValid() && this._simulateEvent("click", i);
      }
    },
    _isTapValid: function () {
      return (
        this._newPos.distanceTo(this._startPos) <=
        this._map.options.tapTolerance
      );
    },
    _onMove: function (t) {
      var i = t.touches[0];
      (this._newPos = new x(i.clientX, i.clientY)),
        this._simulateEvent("mousemove", i);
    },
    _simulateEvent: function (t, i) {
      var e = document.createEvent("MouseEvents");
      (e._simulated = !0),
        (i.target._simulatedClick = !0),
        e.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          i.screenX,
          i.screenY,
          i.clientX,
          i.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
        i.target.dispatchEvent(e);
    },
  });
  Vi && !Ui && Le.addInitHook("addHandler", "tap", Mn),
    Le.mergeOptions({ touchZoom: Vi && !zi, bounceAtZoomLimits: !0 });
  var Cn = Ze.extend({
    addHooks: function () {
      pt(this._map._container, "leaflet-touch-zoom"),
        V(this._map._container, "touchstart", this._onTouchStart, this);
    },
    removeHooks: function () {
      mt(this._map._container, "leaflet-touch-zoom"),
        q(this._map._container, "touchstart", this._onTouchStart, this);
    },
    _onTouchStart: function (t) {
      var i = this._map;
      if (
        t.touches &&
        2 === t.touches.length &&
        !i._animatingZoom &&
        !this._zooming
      ) {
        var e = i.mouseEventToContainerPoint(t.touches[0]),
          n = i.mouseEventToContainerPoint(t.touches[1]);
        (this._centerPoint = i.getSize()._divideBy(2)),
          (this._startLatLng = i.containerPointToLatLng(this._centerPoint)),
          "center" !== i.options.touchZoom &&
            (this._pinchStartLatLng = i.containerPointToLatLng(
              e.add(n)._divideBy(2)
            )),
          (this._startDist = e.distanceTo(n)),
          (this._startZoom = i.getZoom()),
          (this._moved = !1),
          (this._zooming = !0),
          i._stop(),
          V(document, "touchmove", this._onTouchMove, this),
          V(document, "touchend", this._onTouchEnd, this),
          $(t);
      }
    },
    _onTouchMove: function (t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
          n = i.mouseEventToContainerPoint(t.touches[0]),
          o = i.mouseEventToContainerPoint(t.touches[1]),
          s = n.distanceTo(o) / this._startDist;
        if (
          ((this._zoom = i.getScaleZoom(s, this._startZoom)),
          !i.options.bounceAtZoomLimits &&
            ((this._zoom < i.getMinZoom() && s < 1) ||
              (this._zoom > i.getMaxZoom() && s > 1)) &&
            (this._zoom = i._limitZoom(this._zoom)),
          "center" === i.options.touchZoom)
        ) {
          if (((this._center = this._startLatLng), 1 === s)) return;
        } else {
          var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
          if (1 === s && 0 === r.x && 0 === r.y) return;
          this._center = i.unproject(
            i.project(this._pinchStartLatLng, this._zoom).subtract(r),
            this._zoom
          );
        }
        this._moved || (i._moveStart(!0, !1), (this._moved = !0)),
          g(this._animRequest);
        var a = e(i._move, i, this._center, this._zoom, {
          pinch: !0,
          round: !1,
        });
        (this._animRequest = f(a, this, !0)), $(t);
      }
    },
    _onTouchEnd: function () {
      this._moved && this._zooming
        ? ((this._zooming = !1),
          g(this._animRequest),
          q(document, "touchmove", this._onTouchMove),
          q(document, "touchend", this._onTouchEnd),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              ))
        : (this._zooming = !1);
    },
  });
  Le.addInitHook("addHandler", "touchZoom", Cn),
    (Le.BoxZoom = Ln),
    (Le.DoubleClickZoom = Pn),
    (Le.Drag = bn),
    (Le.Keyboard = Tn),
    (Le.ScrollWheelZoom = zn),
    (Le.Tap = Mn),
    (Le.TouchZoom = Cn);
  var Zn = window.L;
  (window.L = t),
    (Object.freeze = $t),
    (t.version = "1.3.1"),
    (t.noConflict = function () {
      return (window.L = Zn), this;
    }),
    (t.Control = Pe),
    (t.control = be),
    (t.Browser = $i),
    (t.Evented = ui),
    (t.Mixin = Ee),
    (t.Util = ai),
    (t.Class = v),
    (t.Handler = Ze),
    (t.extend = i),
    (t.bind = e),
    (t.stamp = n),
    (t.setOptions = l),
    (t.DomEvent = de),
    (t.DomUtil = xe),
    (t.PosAnimation = we),
    (t.Draggable = Be),
    (t.LineUtil = Oe),
    (t.PolyUtil = Re),
    (t.Point = x),
    (t.point = w),
    (t.Bounds = P),
    (t.bounds = b),
    (t.Transformation = Z),
    (t.transformation = S),
    (t.Projection = je),
    (t.LatLng = M),
    (t.latLng = C),
    (t.LatLngBounds = T),
    (t.latLngBounds = z),
    (t.CRS = ci),
    (t.GeoJSON = nn),
    (t.geoJSON = Kt),
    (t.geoJson = sn),
    (t.Layer = Ue),
    (t.LayerGroup = Ve),
    (t.layerGroup = function (t, i) {
      return new Ve(t, i);
    }),
    (t.FeatureGroup = qe),
    (t.featureGroup = function (t) {
      return new qe(t);
    }),
    (t.ImageOverlay = rn),
    (t.imageOverlay = function (t, i, e) {
      return new rn(t, i, e);
    }),
    (t.VideoOverlay = an),
    (t.videoOverlay = function (t, i, e) {
      return new an(t, i, e);
    }),
    (t.DivOverlay = hn),
    (t.Popup = un),
    (t.popup = function (t, i) {
      return new un(t, i);
    }),
    (t.Tooltip = ln),
    (t.tooltip = function (t, i) {
      return new ln(t, i);
    }),
    (t.Icon = Ge),
    (t.icon = function (t) {
      return new Ge(t);
    }),
    (t.DivIcon = cn),
    (t.divIcon = function (t) {
      return new cn(t);
    }),
    (t.Marker = Xe),
    (t.marker = function (t, i) {
      return new Xe(t, i);
    }),
    (t.TileLayer = dn),
    (t.tileLayer = Yt),
    (t.GridLayer = _n),
    (t.gridLayer = function (t) {
      return new _n(t);
    }),
    (t.SVG = xn),
    (t.svg = Jt),
    (t.Renderer = mn),
    (t.Canvas = fn),
    (t.canvas = Xt),
    (t.Path = Je),
    (t.CircleMarker = $e),
    (t.circleMarker = function (t, i) {
      return new $e(t, i);
    }),
    (t.Circle = Qe),
    (t.circle = function (t, i, e) {
      return new Qe(t, i, e);
    }),
    (t.Polyline = tn),
    (t.polyline = function (t, i) {
      return new tn(t, i);
    }),
    (t.Polygon = en),
    (t.polygon = function (t, i) {
      return new en(t, i);
    }),
    (t.Rectangle = wn),
    (t.rectangle = function (t, i) {
      return new wn(t, i);
    }),
    (t.Map = Le),
    (t.map = function (t, i) {
      return new Le(t, i);
    });
});

/*!
 * jQuery Form Plugin
 * https://github.com/malsup/form#copyright-and-license
 */
!(function (e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e("undefined" != typeof jQuery ? jQuery : window.Zepto);
})(function (e) {
  "use strict";
  function t(t) {
    var r = t.data;
    t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r));
  }
  function r(t) {
    var r = t.target,
      a = e(r);
    if (!a.is("[type=submit],[type=image]")) {
      var n = a.closest("[type=submit]");
      if (0 === n.length) return;
      r = n[0];
    }
    var i = this;
    if (((i.clk = r), "image" == r.type))
      if (void 0 !== t.offsetX) (i.clk_x = t.offsetX), (i.clk_y = t.offsetY);
      else if ("function" == typeof e.fn.offset) {
        var o = a.offset();
        (i.clk_x = t.pageX - o.left), (i.clk_y = t.pageY - o.top);
      } else
        (i.clk_x = t.pageX - r.offsetLeft), (i.clk_y = t.pageY - r.offsetTop);
    setTimeout(function () {
      i.clk = i.clk_x = i.clk_y = null;
    }, 100);
  }
  function a() {
    if (e.fn.ajaxSubmit.debug) {
      var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
      window.console && window.console.log
        ? window.console.log(t)
        : window.opera && window.opera.postError && window.opera.postError(t);
    }
  }
  var n = {};
  (n.fileapi = void 0 !== e("<input type='file'/>").get(0).files),
    (n.formdata = void 0 !== window.FormData);
  var i = !!e.fn.prop;
  (e.fn.attr2 = function () {
    if (!i) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return (e && e.jquery) || "string" == typeof e
      ? e
      : this.attr.apply(this, arguments);
  }),
    (e.fn.ajaxSubmit = function (t) {
      function r(r) {
        var a,
          n,
          i = e.param(r, t.traditional).split("&"),
          o = i.length,
          s = [];
        for (a = 0; o > a; a++)
          (i[a] = i[a].replace(/\+/g, " ")),
            (n = i[a].split("=")),
            s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
        return s;
      }
      function o(a) {
        for (var n = new FormData(), i = 0; i < a.length; i++)
          n.append(a[i].name, a[i].value);
        if (t.extraData) {
          var o = r(t.extraData);
          for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]);
        }
        t.data = null;
        var s = e.extend(!0, {}, e.ajaxSettings, t, {
          contentType: !1,
          processData: !1,
          cache: !1,
          type: u || "POST",
        });
        t.uploadProgress &&
          (s.xhr = function () {
            var r = e.ajaxSettings.xhr();
            return (
              r.upload &&
                r.upload.addEventListener(
                  "progress",
                  function (e) {
                    var r = 0,
                      a = e.loaded || e.position,
                      n = e.total;
                    e.lengthComputable && (r = Math.ceil((a / n) * 100)),
                      t.uploadProgress(e, a, n, r);
                  },
                  !1
                ),
              r
            );
          }),
          (s.data = null);
        var c = s.beforeSend;
        return (
          (s.beforeSend = function (e, r) {
            (r.data = t.formData ? t.formData : n), c && c.call(this, e, r);
          }),
          e.ajax(s)
        );
      }
      function s(r) {
        function n(e) {
          var t = null;
          try {
            e.contentWindow && (t = e.contentWindow.document);
          } catch (r) {
            a("cannot get iframe.contentWindow document: " + r);
          }
          if (t) return t;
          try {
            t = e.contentDocument ? e.contentDocument : e.document;
          } catch (r) {
            a("cannot get iframe.contentDocument: " + r), (t = e.document);
          }
          return t;
        }
        function o() {
          function t() {
            try {
              var e = n(g).readyState;
              a("state = " + e),
                e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50);
            } catch (r) {
              a("Server abort: ", r, " (", r.name, ")"),
                s(k),
                j && clearTimeout(j),
                (j = void 0);
            }
          }
          var r = f.attr2("target"),
            i = f.attr2("action"),
            o = "multipart/form-data",
            c = f.attr("enctype") || f.attr("encoding") || o;
          w.setAttribute("target", p),
            (!u || /post/i.test(u)) && w.setAttribute("method", "POST"),
            i != m.url && w.setAttribute("action", m.url),
            m.skipEncodingOverride ||
              (u && !/post/i.test(u)) ||
              f.attr({
                encoding: "multipart/form-data",
                enctype: "multipart/form-data",
              }),
            m.timeout &&
              (j = setTimeout(function () {
                (T = !0), s(D);
              }, m.timeout));
          var l = [];
          try {
            if (m.extraData)
              for (var d in m.extraData)
                m.extraData.hasOwnProperty(d) &&
                  l.push(
                    e.isPlainObject(m.extraData[d]) &&
                      m.extraData[d].hasOwnProperty("name") &&
                      m.extraData[d].hasOwnProperty("value")
                      ? e(
                          '<input type="hidden" name="' +
                            m.extraData[d].name +
                            '">'
                        )
                          .val(m.extraData[d].value)
                          .appendTo(w)[0]
                      : e('<input type="hidden" name="' + d + '">')
                          .val(m.extraData[d])
                          .appendTo(w)[0]
                  );
            m.iframeTarget || v.appendTo("body"),
              g.attachEvent
                ? g.attachEvent("onload", s)
                : g.addEventListener("load", s, !1),
              setTimeout(t, 15);
            try {
              w.submit();
            } catch (h) {
              var x = document.createElement("form").submit;
              x.apply(w);
            }
          } finally {
            w.setAttribute("action", i),
              w.setAttribute("enctype", c),
              r ? w.setAttribute("target", r) : f.removeAttr("target"),
              e(l).remove();
          }
        }
        function s(t) {
          if (!x.aborted && !F) {
            if (
              ((M = n(g)),
              M || (a("cannot access response document"), (t = k)),
              t === D && x)
            )
              return x.abort("timeout"), void S.reject(x, "timeout");
            if (t == k && x)
              return (
                x.abort("server abort"),
                void S.reject(x, "error", "server abort")
              );
            if ((M && M.location.href != m.iframeSrc) || T) {
              g.detachEvent
                ? g.detachEvent("onload", s)
                : g.removeEventListener("load", s, !1);
              var r,
                i = "success";
              try {
                if (T) throw "timeout";
                var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                if (
                  (a("isXml=" + o),
                  !o &&
                    window.opera &&
                    (null === M.body || !M.body.innerHTML) &&
                    --O)
                )
                  return (
                    a("requeing onLoad callback, DOM not available"),
                    void setTimeout(s, 250)
                  );
                var u = M.body ? M.body : M.documentElement;
                (x.responseText = u ? u.innerHTML : null),
                  (x.responseXML = M.XMLDocument ? M.XMLDocument : M),
                  o && (m.dataType = "xml"),
                  (x.getResponseHeader = function (e) {
                    var t = { "content-type": m.dataType };
                    return t[e.toLowerCase()];
                  }),
                  u &&
                    ((x.status = Number(u.getAttribute("status")) || x.status),
                    (x.statusText =
                      u.getAttribute("statusText") || x.statusText));
                var c = (m.dataType || "").toLowerCase(),
                  l = /(json|script|text)/.test(c);
                if (l || m.textarea) {
                  var f = M.getElementsByTagName("textarea")[0];
                  if (f)
                    (x.responseText = f.value),
                      (x.status = Number(f.getAttribute("status")) || x.status),
                      (x.statusText =
                        f.getAttribute("statusText") || x.statusText);
                  else if (l) {
                    var p = M.getElementsByTagName("pre")[0],
                      h = M.getElementsByTagName("body")[0];
                    p
                      ? (x.responseText = p.textContent
                          ? p.textContent
                          : p.innerText)
                      : h &&
                        (x.responseText = h.textContent
                          ? h.textContent
                          : h.innerText);
                  }
                } else
                  "xml" == c &&
                    !x.responseXML &&
                    x.responseText &&
                    (x.responseXML = X(x.responseText));
                try {
                  E = _(x, c, m);
                } catch (y) {
                  (i = "parsererror"), (x.error = r = y || i);
                }
              } catch (y) {
                a("error caught: ", y), (i = "error"), (x.error = r = y || i);
              }
              x.aborted && (a("upload aborted"), (i = null)),
                x.status &&
                  (i =
                    (x.status >= 200 && x.status < 300) || 304 === x.status
                      ? "success"
                      : "error"),
                "success" === i
                  ? (m.success && m.success.call(m.context, E, "success", x),
                    S.resolve(x.responseText, "success", x),
                    d && e.event.trigger("ajaxSuccess", [x, m]))
                  : i &&
                    (void 0 === r && (r = x.statusText),
                    m.error && m.error.call(m.context, x, i, r),
                    S.reject(x, "error", r),
                    d && e.event.trigger("ajaxError", [x, m, r])),
                d && e.event.trigger("ajaxComplete", [x, m]),
                d && !--e.active && e.event.trigger("ajaxStop"),
                m.complete && m.complete.call(m.context, x, i),
                (F = !0),
                m.timeout && clearTimeout(j),
                setTimeout(function () {
                  m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(),
                    (x.responseXML = null);
                }, 100);
            }
          }
        }
        var c,
          l,
          m,
          d,
          p,
          v,
          g,
          x,
          y,
          b,
          T,
          j,
          w = f[0],
          S = e.Deferred();
        if (
          ((S.abort = function (e) {
            x.abort(e);
          }),
          r)
        )
          for (l = 0; l < h.length; l++)
            (c = e(h[l])),
              i ? c.prop("disabled", !1) : c.removeAttr("disabled");
        if (
          ((m = e.extend(!0, {}, e.ajaxSettings, t)),
          (m.context = m.context || m),
          (p = "jqFormIO" + new Date().getTime()),
          m.iframeTarget
            ? ((v = e(m.iframeTarget)),
              (b = v.attr2("name")),
              b ? (p = b) : v.attr2("name", p))
            : ((v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />')),
              v.css({ position: "absolute", top: "-1000px", left: "-1000px" })),
          (g = v[0]),
          (x = {
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: "n/a",
            getAllResponseHeaders: function () {},
            getResponseHeader: function () {},
            setRequestHeader: function () {},
            abort: function (t) {
              var r = "timeout" === t ? "timeout" : "aborted";
              a("aborting upload... " + r), (this.aborted = 1);
              try {
                g.contentWindow.document.execCommand &&
                  g.contentWindow.document.execCommand("Stop");
              } catch (n) {}
              v.attr("src", m.iframeSrc),
                (x.error = r),
                m.error && m.error.call(m.context, x, r, t),
                d && e.event.trigger("ajaxError", [x, m, r]),
                m.complete && m.complete.call(m.context, x, r);
            },
          }),
          (d = m.global),
          d && 0 === e.active++ && e.event.trigger("ajaxStart"),
          d && e.event.trigger("ajaxSend", [x, m]),
          m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)
        )
          return m.global && e.active--, S.reject(), S;
        if (x.aborted) return S.reject(), S;
        (y = w.clk),
          y &&
            ((b = y.name),
            b &&
              !y.disabled &&
              ((m.extraData = m.extraData || {}),
              (m.extraData[b] = y.value),
              "image" == y.type &&
                ((m.extraData[b + ".x"] = w.clk_x),
                (m.extraData[b + ".y"] = w.clk_y))));
        var D = 1,
          k = 2,
          A = e("meta[name=csrf-token]").attr("content"),
          L = e("meta[name=csrf-param]").attr("content");
        L && A && ((m.extraData = m.extraData || {}), (m.extraData[L] = A)),
          m.forceSync ? o() : setTimeout(o, 10);
        var E,
          M,
          F,
          O = 50,
          X =
            e.parseXML ||
            function (e, t) {
              return (
                window.ActiveXObject
                  ? ((t = new ActiveXObject("Microsoft.XMLDOM")),
                    (t.async = "false"),
                    t.loadXML(e))
                  : (t = new DOMParser().parseFromString(e, "text/xml")),
                t &&
                t.documentElement &&
                "parsererror" != t.documentElement.nodeName
                  ? t
                  : null
              );
            },
          C =
            e.parseJSON ||
            function (e) {
              return window.eval("(" + e + ")");
            },
          _ = function (t, r, a) {
            var n = t.getResponseHeader("content-type") || "",
              i = "xml" === r || (!r && n.indexOf("xml") >= 0),
              o = i ? t.responseXML : t.responseText;
            return (
              i &&
                "parsererror" === o.documentElement.nodeName &&
                e.error &&
                e.error("parsererror"),
              a && a.dataFilter && (o = a.dataFilter(o, r)),
              "string" == typeof o &&
                ("json" === r || (!r && n.indexOf("json") >= 0)
                  ? (o = C(o))
                  : ("script" === r || (!r && n.indexOf("javascript") >= 0)) &&
                    e.globalEval(o)),
              o
            );
          };
        return S;
      }
      if (!this.length)
        return (
          a("ajaxSubmit: skipping submit process - no element selected"), this
        );
      var u,
        c,
        l,
        f = this;
      "function" == typeof t ? (t = { success: t }) : void 0 === t && (t = {}),
        (u = t.type || this.attr2("method")),
        (c = t.url || this.attr2("action")),
        (l = "string" == typeof c ? e.trim(c) : ""),
        (l = l || window.location.href || ""),
        l && (l = (l.match(/^([^#]+)/) || [])[1]),
        (t = e.extend(
          !0,
          {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "")
              ? "javascript:false"
              : "about:blank",
          },
          t
        ));
      var m = {};
      if ((this.trigger("form-pre-serialize", [this, t, m]), m.veto))
        return (
          a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this
        );
      if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)
        return (
          a("ajaxSubmit: submit aborted via beforeSerialize callback"), this
        );
      var d = t.traditional;
      void 0 === d && (d = e.ajaxSettings.traditional);
      var p,
        h = [],
        v = this.formToArray(t.semantic, h);
      if (
        (t.data && ((t.extraData = t.data), (p = e.param(t.data, d))),
        t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)
      )
        return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
      if ((this.trigger("form-submit-validate", [v, this, t, m]), m.veto))
        return (
          a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this
        );
      var g = e.param(v, d);
      p && (g = g ? g + "&" + p : p),
        "GET" == t.type.toUpperCase()
          ? ((t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g),
            (t.data = null))
          : (t.data = g);
      var x = [];
      if (
        (t.resetForm &&
          x.push(function () {
            f.resetForm();
          }),
        t.clearForm &&
          x.push(function () {
            f.clearForm(t.includeHidden);
          }),
        !t.dataType && t.target)
      ) {
        var y = t.success || function () {};
        x.push(function (r) {
          var a = t.replaceTarget ? "replaceWith" : "html";
          e(t.target)[a](r).each(y, arguments);
        });
      } else t.success && x.push(t.success);
      if (
        ((t.success = function (e, r, a) {
          for (var n = t.context || this, i = 0, o = x.length; o > i; i++)
            x[i].apply(n, [e, r, a || f, f]);
        }),
        t.error)
      ) {
        var b = t.error;
        t.error = function (e, r, a) {
          var n = t.context || this;
          b.apply(n, [e, r, a, f]);
        };
      }
      if (t.complete) {
        var T = t.complete;
        t.complete = function (e, r) {
          var a = t.context || this;
          T.apply(a, [e, r, f]);
        };
      }
      var j = e("input[type=file]:enabled", this).filter(function () {
          return "" !== e(this).val();
        }),
        w = j.length > 0,
        S = "multipart/form-data",
        D = f.attr("enctype") == S || f.attr("encoding") == S,
        k = n.fileapi && n.formdata;
      a("fileAPI :" + k);
      var A,
        L = (w || D) && !k;
      t.iframe !== !1 && (t.iframe || L)
        ? t.closeKeepAlive
          ? e.get(t.closeKeepAlive, function () {
              A = s(v);
            })
          : (A = s(v))
        : (A = (w || D) && k ? o(v) : e.ajax(t)),
        f.removeData("jqxhr").data("jqxhr", A);
      for (var E = 0; E < h.length; E++) h[E] = null;
      return this.trigger("form-submit-notify", [this, t]), this;
    }),
    (e.fn.ajaxForm = function (n) {
      if (
        ((n = n || {}),
        (n.delegation = n.delegation && e.isFunction(e.fn.on)),
        !n.delegation && 0 === this.length)
      ) {
        var i = { s: this.selector, c: this.context };
        return !e.isReady && i.s
          ? (a("DOM not ready, queuing ajaxForm"),
            e(function () {
              e(i.s, i.c).ajaxForm(n);
            }),
            this)
          : (a(
              "terminating; zero elements found by selector" +
                (e.isReady ? "" : " (DOM not ready)")
            ),
            this);
      }
      return n.delegation
        ? (e(document)
            .off("submit.form-plugin", this.selector, t)
            .off("click.form-plugin", this.selector, r)
            .on("submit.form-plugin", this.selector, n, t)
            .on("click.form-plugin", this.selector, n, r),
          this)
        : this.ajaxFormUnbind()
            .bind("submit.form-plugin", n, t)
            .bind("click.form-plugin", n, r);
    }),
    (e.fn.ajaxFormUnbind = function () {
      return this.unbind("submit.form-plugin click.form-plugin");
    }),
    (e.fn.formToArray = function (t, r) {
      var a = [];
      if (0 === this.length) return a;
      var i,
        o = this[0],
        s = this.attr("id"),
        u = t ? o.getElementsByTagName("*") : o.elements;
      if (
        (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()),
        s &&
          ((i = e(':input[form="' + s + '"]').get()),
          i.length && (u = (u || []).concat(i))),
        !u || !u.length)
      )
        return a;
      var c, l, f, m, d, p, h;
      for (c = 0, p = u.length; p > c; c++)
        if (((d = u[c]), (f = d.name), f && !d.disabled))
          if (t && o.clk && "image" == d.type)
            o.clk == d &&
              (a.push({ name: f, value: e(d).val(), type: d.type }),
              a.push(
                { name: f + ".x", value: o.clk_x },
                { name: f + ".y", value: o.clk_y }
              ));
          else if (((m = e.fieldValue(d, !0)), m && m.constructor == Array))
            for (r && r.push(d), l = 0, h = m.length; h > l; l++)
              a.push({ name: f, value: m[l] });
          else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
              for (l = 0; l < v.length; l++)
                a.push({ name: f, value: v[l], type: d.type });
            else a.push({ name: f, value: "", type: d.type });
          } else
            null !== m &&
              "undefined" != typeof m &&
              (r && r.push(d),
              a.push({
                name: f,
                value: m,
                type: d.type,
                required: d.required,
              }));
      if (!t && o.clk) {
        var g = e(o.clk),
          x = g[0];
        (f = x.name),
          f &&
            !x.disabled &&
            "image" == x.type &&
            (a.push({ name: f, value: g.val() }),
            a.push(
              { name: f + ".x", value: o.clk_x },
              { name: f + ".y", value: o.clk_y }
            ));
      }
      return a;
    }),
    (e.fn.formSerialize = function (t) {
      return e.param(this.formToArray(t));
    }),
    (e.fn.fieldSerialize = function (t) {
      var r = [];
      return (
        this.each(function () {
          var a = this.name;
          if (a) {
            var n = e.fieldValue(this, t);
            if (n && n.constructor == Array)
              for (var i = 0, o = n.length; o > i; i++)
                r.push({ name: a, value: n[i] });
            else
              null !== n &&
                "undefined" != typeof n &&
                r.push({ name: this.name, value: n });
          }
        }),
        e.param(r)
      );
    }),
    (e.fn.fieldValue = function (t) {
      for (var r = [], a = 0, n = this.length; n > a; a++) {
        var i = this[a],
          o = e.fieldValue(i, t);
        null === o ||
          "undefined" == typeof o ||
          (o.constructor == Array && !o.length) ||
          (o.constructor == Array ? e.merge(r, o) : r.push(o));
      }
      return r;
    }),
    (e.fieldValue = function (t, r) {
      var a = t.name,
        n = t.type,
        i = t.tagName.toLowerCase();
      if (
        (void 0 === r && (r = !0),
        r &&
          (!a ||
            t.disabled ||
            "reset" == n ||
            "button" == n ||
            (("checkbox" == n || "radio" == n) && !t.checked) ||
            (("submit" == n || "image" == n) && t.form && t.form.clk != t) ||
            ("select" == i && -1 == t.selectedIndex)))
      )
        return null;
      if ("select" == i) {
        var o = t.selectedIndex;
        if (0 > o) return null;
        for (
          var s = [],
            u = t.options,
            c = "select-one" == n,
            l = c ? o + 1 : u.length,
            f = c ? o : 0;
          l > f;
          f++
        ) {
          var m = u[f];
          if (m.selected) {
            var d = m.value;
            if (
              (d ||
                (d =
                  m.attributes &&
                  m.attributes.value &&
                  !m.attributes.value.specified
                    ? m.text
                    : m.value),
              c)
            )
              return d;
            s.push(d);
          }
        }
        return s;
      }
      return e(t).val();
    }),
    (e.fn.clearForm = function (t) {
      return this.each(function () {
        e("input,select,textarea", this).clearFields(t);
      });
    }),
    (e.fn.clearFields = e.fn.clearInputs =
      function (t) {
        var r =
          /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
          var a = this.type,
            n = this.tagName.toLowerCase();
          r.test(a) || "textarea" == n
            ? (this.value = "")
            : "checkbox" == a || "radio" == a
            ? (this.checked = !1)
            : "select" == n
            ? (this.selectedIndex = -1)
            : "file" == a
            ? /MSIE/.test(navigator.userAgent)
              ? e(this).replaceWith(e(this).clone(!0))
              : e(this).val("")
            : t &&
              ((t === !0 && /hidden/.test(a)) ||
                ("string" == typeof t && e(this).is(t))) &&
              (this.value = "");
        });
      }),
    (e.fn.resetForm = function () {
      return this.each(function () {
        ("function" == typeof this.reset ||
          ("object" == typeof this.reset && !this.reset.nodeType)) &&
          this.reset();
      });
    }),
    (e.fn.enable = function (e) {
      return (
        void 0 === e && (e = !0),
        this.each(function () {
          this.disabled = !e;
        })
      );
    }),
    (e.fn.selected = function (t) {
      return (
        void 0 === t && (t = !0),
        this.each(function () {
          var r = this.type;
          if ("checkbox" == r || "radio" == r) this.checked = t;
          else if ("option" == this.tagName.toLowerCase()) {
            var a = e(this).parent("select");
            t &&
              a[0] &&
              "select-one" == a[0].type &&
              a.find("option").selected(!1),
              (this.selected = t);
          }
        })
      );
    }),
    (e.fn.ajaxSubmit.debug = !1);
});

/*! jQuery Validation Plugin - v1.12.0 - 4/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 JÃ¶rn Zaefferer; Licensed MIT */
!(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var c = a.data(this[0], "validator");
      return c
        ? c
        : (this.attr("novalidate", "novalidate"),
          (c = new a.validator(b, this[0])),
          a.data(this[0], "validator", c),
          c.settings.onsubmit &&
            (this.validateDelegate(":submit", "click", function (b) {
              c.settings.submitHandler && (c.submitButton = b.target),
                a(b.target).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(b.target).attr("formnovalidate") &&
                  (c.cancelSubmit = !0);
            }),
            this.submit(function (b) {
              function d() {
                var d;
                return c.settings.submitHandler
                  ? (c.submitButton &&
                      (d = a("<input type='hidden'/>")
                        .attr("name", c.submitButton.name)
                        .val(a(c.submitButton).val())
                        .appendTo(c.currentForm)),
                    c.settings.submitHandler.call(c, c.currentForm, b),
                    c.submitButton && d.remove(),
                    !1)
                  : !0;
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                  ? c.pendingRequest
                    ? ((c.formSubmitted = !0), !1)
                    : d()
                  : (c.focusInvalid(), !1)
              );
            })),
          c);
    },
    valid: function () {
      var b, c;
      return (
        a(this[0]).is("form")
          ? (b = this.validate().form())
          : ((b = !0),
            (c = a(this[0].form).validate()),
            this.each(function () {
              b = c.element(this) && b;
            })),
        b
      );
    },
    removeAttrs: function (b) {
      var c = {},
        d = this;
      return (
        a.each(b.split(/\s/), function (a, b) {
          (c[b] = d.attr(b)), d.removeAttr(b);
        }),
        c
      );
    },
    rules: function (b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0];
      if (b)
        switch (
          ((d = a.data(j.form, "validator").settings),
          (e = d.rules),
          (f = a.validator.staticRules(j)),
          b)
        ) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)),
              delete f.messages,
              (e[j.name] = f),
              c.messages &&
                (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;
          case "remove":
            return c
              ? ((i = {}),
                a.each(c.split(/\s/), function (b, c) {
                  (i[c] = f[c]),
                    delete f[c],
                    "required" === c && a(j).removeAttr("aria-required");
                }),
                i)
              : (delete e[j.name], f);
        }
      return (
        (g = a.validator.normalizeRules(
          a.extend(
            {},
            a.validator.classRules(j),
            a.validator.attributeRules(j),
            a.validator.dataRules(j),
            a.validator.staticRules(j)
          ),
          j
        )),
        g.required &&
          ((h = g.required),
          delete g.required,
          (g = a.extend({ required: h }, g)),
          a(j).attr("aria-required", "true")),
        g.remote &&
          ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
        g
      );
    },
  }),
    a.extend(a.expr[":"], {
      blank: function (b) {
        return !a.trim("" + a(b).val());
      },
      filled: function (b) {
        return !!a.trim("" + a(b).val());
      },
      unchecked: function (b) {
        return !a(b).prop("checked");
      },
    }),
    (a.validator = function (b, c) {
      (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init();
    }),
    (a.validator.format = function (b, c) {
      return 1 === arguments.length
        ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
          }
        : (arguments.length > 2 &&
            c.constructor !== Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor !== Array && (c = [c]),
          a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
              return c;
            });
          }),
          b);
    }),
    a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (a) {
          (this.lastActive = a),
            this.settings.focusCleanup &&
              !this.blockFocusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.addWrapper(this.errorsFor(a)).hide());
        },
        onfocusout: function (a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function (a, b) {
          (9 !== b.which || "" !== this.elementValue(a)) &&
            (a.name in this.submitted || a === this.lastElement) &&
            this.element(a);
        },
        onclick: function (a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).addClass(c).removeClass(d)
            : a(b).addClass(c).removeClass(d);
        },
        unhighlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).removeClass(c).addClass(d)
            : a(b).removeClass(c).addClass(d);
        },
      },
      setDefaults: function (b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: a.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: a.validator.format("Please enter at least {0} characters."),
        rangelength: a.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: a.validator.format("Please enter a value between {0} and {1}."),
        max: a.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: a.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function b(b) {
            var c = a.data(this[0].form, "validator"),
              d = "on" + b.type.replace(/^validate/, ""),
              e = c.settings;
            e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b);
          }
          (this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var c,
            d = (this.groups = {});
          a.each(this.settings.groups, function (b, c) {
            "string" == typeof c && (c = c.split(/\s/)),
              a.each(c, function (a, c) {
                d[c] = b;
              });
          }),
            (c = this.settings.rules),
            a.each(c, function (b, d) {
              c[b] = a.validator.normalizeRule(d);
            }),
            a(this.currentForm)
              .validateDelegate(
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
                "focusin focusout keyup",
                b
              )
              .validateDelegate(
                "[type='radio'], [type='checkbox'], select, option",
                "click",
                b
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).bind(
                "invalid-form.validate",
                this.settings.invalidHandler
              ),
            a(this.currentForm)
              .find("[required], [data-rule-required], .required")
              .attr("aria-required", "true");
        },
        form: function () {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function (b) {
          var c = this.clean(b),
            d = this.validationTargetFor(c),
            e = !0;
          return (
            (this.lastElement = d),
            void 0 === d
              ? delete this.invalid[c.name]
              : (this.prepareElement(d),
                (this.currentElements = a(d)),
                (e = this.check(d) !== !1),
                e ? delete this.invalid[d.name] : (this.invalid[d.name] = !0)),
            a(b).attr("aria-invalid", !e),
            this.numberOfInvalids() ||
              (this.toHide = this.toHide.add(this.containers)),
            this.showErrors(),
            e
          );
        },
        showErrors: function (b) {
          if (b) {
            a.extend(this.errorMap, b), (this.errorList = []);
            for (var c in b)
              this.errorList.push({
                message: b[c],
                element: this.findByName(c)[0],
              });
            this.successList = a.grep(this.successList, function (a) {
              return !(a.name in b);
            });
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.submitted = {}),
            (this.lastElement = null),
            this.prepareForm(),
            this.hideErrors(),
            this.elements()
              .removeClass(this.settings.errorClass)
              .removeData("previousValue")
              .removeAttr("aria-invalid");
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (a) {
          var b,
            c = 0;
          for (b in a) c++;
          return c;
        },
        hideErrors: function () {
          this.addWrapper(this.toHide).hide();
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .focus()
                .trigger("focusin");
            } catch (b) {}
        },
        findLastActive: function () {
          var b = this.lastActive;
          return (
            b &&
            1 ===
              a.grep(this.errorList, function (a) {
                return a.element.name === b.name;
              }).length &&
            b
          );
        },
        elements: function () {
          var b = this,
            c = {};
          return a(this.currentForm)
            .find("input, select, textarea")
            .not(":submit, :reset, :image, [disabled]")
            .not(this.settings.ignore)
            .filter(function () {
              return (
                !this.name &&
                  b.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                this.name in c || !b.objectLength(a(this).rules())
                  ? !1
                  : ((c[this.name] = !0), !0)
              );
            });
        },
        clean: function (b) {
          return a(b)[0];
        },
        errors: function () {
          var b = this.settings.errorClass.split(" ").join(".");
          return a(this.settings.errorElement + "." + b, this.errorContext);
        },
        reset: function () {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([])),
            (this.currentElements = a([]));
        },
        prepareForm: function () {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function (a) {
          this.reset(), (this.toHide = this.errorsFor(a));
        },
        elementValue: function (b) {
          var c,
            d = a(b),
            e = d.attr("type");
          return "radio" === e || "checkbox" === e
            ? a("input[name='" + d.attr("name") + "']:checked").val()
            : ((c = d.val()), "string" == typeof c ? c.replace(/\r/g, "") : c);
        },
        check: function (b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
            d,
            e,
            f = a(b).rules(),
            g = a.map(f, function (a, b) {
              return b;
            }).length,
            h = !1,
            i = this.elementValue(b);
          for (d in f) {
            e = { method: d, parameters: f[d] };
            try {
              if (
                ((c = a.validator.methods[d].call(this, i, b, e.parameters)),
                "dependency-mismatch" === c && 1 === g)
              ) {
                h = !0;
                continue;
              }
              if (((h = !1), "pending" === c))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return this.formatAndAdd(b, e), !1;
            } catch (j) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    "Exception occurred when checking element " +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method.",
                    j
                  ),
                j)
              );
            }
          }
          if (!h) return this.objectLength(f) && this.successList.push(b), !0;
        },
        customDataMessage: function (b, c) {
          return (
            a(b).data(
              "msg" + c[0].toUpperCase() + c.substring(1).toLowerCase()
            ) || a(b).data("msg")
          );
        },
        customMessage: function (a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function () {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
          return void 0;
        },
        defaultMessage: function (b, c) {
          return this.findDefined(
            this.customMessage(b.name, c),
            this.customDataMessage(b, c),
            (!this.settings.ignoreTitle && b.title) || void 0,
            a.validator.messages[c],
            "<strong>Warning: No message defined for " + b.name + "</strong>"
          );
        },
        formatAndAdd: function (b, c) {
          var d = this.defaultMessage(b, c.method),
            e = /\$?\{(\d+)\}/g;
          "function" == typeof d
            ? (d = d.call(this, c.parameters, b))
            : e.test(d) &&
              (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
            this.errorList.push({ message: d, element: b, method: c.method }),
            (this.errorMap[b.name] = d),
            (this.submitted[b.name] = d);
        },
        addWrapper: function (a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function () {
          var a, b, c;
          for (a = 0; this.errorList[a]; a++)
            (c = this.errorList[a]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  c.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(c.element, c.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (a = 0, b = this.validElements(); b[a]; a++)
              this.settings.unhighlight.call(
                this,
                b[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return a(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (b, c) {
          var d = this.errorsFor(b);
          d.length
            ? (d
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              d.html(c))
            : ((d = a("<" + this.settings.errorElement + ">")
                .attr("for", this.idOrName(b))
                .addClass(this.settings.errorClass)
                .html(c || "")),
              this.settings.wrapper &&
                (d = d
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.append(d).length ||
                (this.settings.errorPlacement
                  ? this.settings.errorPlacement(d, a(b))
                  : d.insertAfter(b))),
            !c &&
              this.settings.success &&
              (d.text(""),
              "string" == typeof this.settings.success
                ? d.addClass(this.settings.success)
                : this.settings.success(d, b)),
            (this.toShow = this.toShow.add(d));
        },
        errorsFor: function (b) {
          var c = this.idOrName(b);
          return this.errors().filter(function () {
            return a(this).attr("for") === c;
          });
        },
        idOrName: function (a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        validationTargetFor: function (a) {
          return (
            this.checkable(a) &&
              (a = this.findByName(a.name).not(this.settings.ignore)[0]),
            a
          );
        },
        checkable: function (a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function (b) {
          return a(this.currentForm).find("[name='" + b + "']");
        },
        getLength: function (b, c) {
          switch (c.nodeName.toLowerCase()) {
            case "select":
              return a("option:selected", c).length;
            case "input":
              if (this.checkable(c))
                return this.findByName(c.name).filter(":checked").length;
          }
          return b.length;
        },
        depend: function (a, b) {
          return this.dependTypes[typeof a]
            ? this.dependTypes[typeof a](a, b)
            : !0;
        },
        dependTypes: {
          boolean: function (a) {
            return a;
          },
          string: function (b, c) {
            return !!a(b, c.form).length;
          },
          function: function (a, b) {
            return a(b);
          },
        },
        optional: function (b) {
          var c = this.elementValue(b);
          return (
            !a.validator.methods.required.call(this, c, b) &&
            "dependency-mismatch"
          );
        },
        startRequest: function (a) {
          this.pending[a.name] ||
            (this.pendingRequest++, (this.pending[a.name] = !0));
        },
        stopRequest: function (b, c) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            c && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
              : !c &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler("invalid-form", [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function (b) {
          return (
            a.data(b, "previousValue") ||
            a.data(b, "previousValue", {
              old: null,
              valid: !0,
              message: this.defaultMessage(b, "remote"),
            })
          );
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (b, c) {
        b.constructor === String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function (b) {
        var c = {},
          d = a(b).attr("class");
        return (
          d &&
            a.each(d.split(" "), function () {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      attributeRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          "required" === c
            ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
            : (d = f.attr(c)),
            /min|max/.test(c) &&
              (null === g || /number|range|text/.test(g)) &&
              (d = Number(d)),
            d || 0 === d ? (e[c] = d) : g === c && "range" !== g && (e[c] = !0);
        return (
          e.maxlength &&
            /-1|2147483647|524288/.test(e.maxlength) &&
            delete e.maxlength,
          e
        );
      },
      dataRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b);
        for (c in a.validator.methods)
          (d = f.data(
            "rule" + c[0].toUpperCase() + c.substring(1).toLowerCase()
          )),
            void 0 !== d && (e[c] = d);
        return e;
      },
      staticRules: function (b) {
        var c = {},
          d = a.data(b.form, "validator");
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function (b, c) {
        return (
          a.each(b, function (d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case "string":
                  f = !!a(e.depends, c.form).length;
                  break;
                case "function":
                  f = e.depends.call(c, c);
              }
              f ? (b[d] = void 0 !== e.param ? e.param : !0) : delete b[d];
            }
          }),
          a.each(b, function (d, e) {
            b[d] = a.isFunction(e) ? e(c) : e;
          }),
          a.each(["minlength", "maxlength"], function () {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(["rangelength", "range"], function () {
            var c;
            b[this] &&
              (a.isArray(b[this])
                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                : "string" == typeof b[this] &&
                  ((c = b[this].split(/[\s,]+/)),
                  (b[this] = [Number(c[0]), Number(c[1])])));
          }),
          a.validator.autoCreateRanges &&
            (b.min &&
              b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            b.minlength &&
              b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b
        );
      },
      normalizeRule: function (b) {
        if ("string" == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function () {
            c[this] = !0;
          }),
            (b = c);
        }
        return b;
      },
      addMethod: function (b, c, d) {
        (a.validator.methods[b] = c),
          (a.validator.messages[b] =
            void 0 !== d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function (b, c, d) {
          if (!this.depend(d, c)) return "dependency-mismatch";
          if ("select" === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }
          return this.checkable(c)
            ? this.getLength(b, c) > 0
            : a.trim(b).length > 0;
        },
        email: function (a, b) {
          return (
            this.optional(b) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              a
            )
          );
        },
        url: function (a, b) {
          return (
            this.optional(b) ||
            /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
              a
            )
          );
        },
        date: function (a, b) {
          return (
            this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
          );
        },
        dateISO: function (a, b) {
          return (
            this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
          );
        },
        number: function (a, b) {
          return (
            this.optional(b) ||
            /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          );
        },
        digits: function (a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        creditcard: function (a, b) {
          if (this.optional(b)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(a)) return !1;
          var c,
            d,
            e = 0,
            f = 0,
            g = !1;
          if (((a = a.replace(/\D/g, "")), a.length < 13 || a.length > 19))
            return !1;
          for (c = a.length - 1; c >= 0; c--)
            (d = a.charAt(c)),
              (f = parseInt(d, 10)),
              g && (f *= 2) > 9 && (f -= 9),
              (e += f),
              (g = !g);
          return e % 10 === 0;
        },
        minlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
          return this.optional(c) || e >= d;
        },
        maxlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
          return this.optional(c) || d >= e;
        },
        rangelength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
          return this.optional(c) || (e >= d[0] && e <= d[1]);
        },
        min: function (a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function (a, b, c) {
          return this.optional(b) || c >= a;
        },
        range: function (a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        equalTo: function (b, c, d) {
          var e = a(d);
          return (
            this.settings.onfocusout &&
              e
                .unbind(".validate-equalTo")
                .bind("blur.validate-equalTo", function () {
                  a(c).valid();
                }),
            b === e.val()
          );
        },
        remote: function (b, c, d) {
          if (this.optional(c)) return "dependency-mismatch";
          var e,
            f,
            g = this.previousValue(c);
          return (
            this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (g.originalMessage = this.settings.messages[c.name].remote),
            (this.settings.messages[c.name].remote = g.message),
            (d = ("string" == typeof d && { url: d }) || d),
            g.old === b
              ? g.valid
              : ((g.old = b),
                (e = this),
                this.startRequest(c),
                (f = {}),
                (f[c.name] = b),
                a.ajax(
                  a.extend(
                    !0,
                    {
                      url: d,
                      mode: "abort",
                      port: "validate" + c.name,
                      dataType: "json",
                      data: f,
                      context: e.currentForm,
                      success: function (d) {
                        var f,
                          h,
                          i,
                          j = d === !0 || "true" === d;
                        (e.settings.messages[c.name].remote =
                          g.originalMessage),
                          j
                            ? ((i = e.formSubmitted),
                              e.prepareElement(c),
                              (e.formSubmitted = i),
                              e.successList.push(c),
                              delete e.invalid[c.name],
                              e.showErrors())
                            : ((f = {}),
                              (h = d || e.defaultMessage(c, "remote")),
                              (f[c.name] = g.message =
                                a.isFunction(h) ? h(b) : h),
                              (e.invalid[c.name] = !0),
                              e.showErrors(f)),
                          (g.valid = j),
                          e.stopRequest(c, j);
                      },
                    },
                    d
                  )
                ),
                "pending")
          );
        },
      },
    }),
    (a.format = function () {
      throw "$.format has been deprecated. Please use $.validator.format instead.";
    });
})(jQuery),
  (function (a) {
    var b,
      c = {};
    a.ajaxPrefilter
      ? a.ajaxPrefilter(function (a, b, d) {
          var e = a.port;
          "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
        })
      : ((b = a.ajax),
        (a.ajax = function (d) {
          var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
          return "abort" === e
            ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
            : b.apply(this, arguments);
        }));
  })(jQuery),
  (function (a) {
    a.extend(a.fn, {
      validateDelegate: function (b, c, d) {
        return this.bind(c, function (c) {
          var e = a(c.target);
          return e.is(b) ? d.apply(e, arguments) : void 0;
        });
      },
    });
  })(jQuery);

// MC
(function ($) {
  // TODO: Do we actually allow custom error styles or is this legacy code?
  var err_style = "";
  try {
    err_style = mc_custom_error_style;
  } catch (e) {
    err_style =
      "#mc_embed_signup input.mce_inline_error { border-color:#6B0505; } #mc_embed_signup div.mce_inline_error { margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff; }";
  }
  var head = document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (style.styleSheet) {
    style.styleSheet.cssText = err_style;
  } else {
    style.appendChild(document.createTextNode(err_style));
  }
  head.appendChild(style);

  // Expose extra mc form methods in global var
  window.mc = {
    /**
     *	Open the evil popup
     */
    openPopup: function () {
      $("#mc_embed_signup a.mc_embed_close").show();
      setTimeout(function () {
        $("#mc_embed_signup").fadeIn();
      }, mc.delayPopup);
    },
    /**
     *	Close the evil popup
     */
    closePopup: function () {
      $("#mc_embed_signup").hide();
      var now = new Date();
      var expires_date = new Date(now.getTime() + 31536000000);
      document.cookie =
        "MCEvilPopupClosed=yes;expires=" +
        expires_date.toGMTString() +
        ";path=/";
    },
    /**
     *	Figure out if we should show the evil popup (if they've closed it before, don't show it.)
     */
    evalPopup: function () {
      $("#mc_embed_signup").hide();
      cks = document.cookie.split(";");
      for (i = 0; i < cks.length; i++) {
        parts = cks[i].split("=");
        if (parts[0].indexOf("MCEvilPopupClosed") != -1) mc.showPopup = false;
      }
      if (mc.showPopup) mc.openPopup();
    },
    /**
     *	Grab the list subscribe url from the form action and make it work for an ajax post.
     */
    getAjaxSubmitUrl: function () {
      var url = $("form#mc-embedded-subscribe-form").attr("action");
      url = url.replace("/post?u=", "/post-json?u=");
      url += "&c=?";
      return url;
    },
    /**
     *	Classify text inputs in the same field group as group for validation purposes.
     *	All this does is tell jQueryValidation to create one error div for the group, rather
     *	than one for each input. Primary use case is birthday and date fields, where we want
     *	to display errors about the inputs collectively, not individually.
     *
     *	NOTE: Grouping inputs will give you one error div, but you still need to specify where
     *	that div should be displayed. By default, it's inserted after the first input with a
     *	validation error, which can break up a set of inputs. Use the errorPlacement setting in
     *	the validator to control error div placement.
     */
    getGroups: function () {
      var groups = {};
      $(".mc-field-group").each(function (index) {
        var inputs = $(this).find("input:text:not(:hidden)"); // TODO: What about non-text inputs like number?
        if (inputs.length > 1) {
          var mergeName = inputs.first().attr("name");
          var fieldNames = $.map(inputs, function (f) {
            return f.name;
          });
          groups[mergeName.substring(0, mergeName.indexOf("["))] =
            fieldNames.join(" ");
        }
      });
      return groups;
    },
    /**
     *	Chick if a field is part of a multipart field
     * 	(e.g., A date merge field is composed of individual inputs for month, day and year)
     *	Used in jQuery validation onkeyup method to ensure that we don't evaluate a field
     *  if a user hasn't reached the last input in a multipart field yet.
     */
    isMultiPartField: function (element) {
      return (
        $("input:not(:hidden)", $(element).closest(".mc-field-group")).length >
        1
      );
    },
    /**
     *	Checks if the element is the last input in its fieldgroup.
     *	If the field is not the last in a set of inputs we don't want to validate it on certain events (onfocusout, onblur)
     *	because the user might not be finished yet.
     */
    isTooEarly: function (element) {
      var fields = $(
        "input:not(:hidden)",
        $(element).closest(".mc-field-group")
      );
      return $(fields).eq(-1).attr("id") != $(element).attr("id");
    },
    /**
     *	Handle the error/success message after successful form submission.
     *	Success messages are appended to #mce-success-response
     *	Error messages are displayed with the invalid input when possible, or appended to #mce-error-response
     */
    mce_success_cb: function (resp) {
      $("#mce-success-response").hide();
      $("#mce-error-response").hide();

      // On successful form submission, display a success message and reset the form
      if (resp.result == "success") {
        $("#mce-" + resp.result + "-response").show();
        $("#mce-" + resp.result + "-response").html(resp.msg);
        $("#mc-embedded-subscribe-form").each(function () {
          this.reset();
        });

        // If the form has errors, display them, inline if possible, or appended to #mce-error-response
      } else {
        // Example errors - Note: You only get one back at a time even if you submit several that are bad.
        // Error structure - number indicates the index of the merge field that was invalid, then details
        // Object {result: "error", msg: "6 - Please enter the date"}
        // Object {result: "error", msg: "4 - Please enter a value"}
        // Object {result: "error", msg: "9 - Please enter a complete address"}

        // Try to parse the error into a field index and a message.
        // On failure, just put the dump thing into in the msg variable.
        var index = -1;
        var msg;
        try {
          var parts = resp.msg.split(" - ", 2);
          if (parts[1] == undefined) {
            msg = resp.msg;
          } else {
            i = parseInt(parts[0]);
            if (i.toString() == parts[0]) {
              index = parts[0];
              msg = parts[1];
            } else {
              index = -1;
              msg = resp.msg;
            }
          }
        } catch (e) {
          index = -1;
          msg = resp.msg;
        }

        try {
          // If index is -1 if means we don't have data on specifically which field was invalid.
          // Just lump the error message into the generic response div.
          if (index == -1) {
            $("#mce-" + resp.result + "-response").show();
            $("#mce-" + resp.result + "-response").html(msg);
          } else {
            var fieldName = $("input[name*='" + fnames[index] + "']").attr(
              "name"
            ); // Make sure this exists (they haven't deleted the fnames array lookup)
            var data = {};
            data[fieldName] = msg;
            mc.mce_validator.showErrors(data);
          }
        } catch (e) {
          $("#mce-" + resp.result + "-response").show();
          $("#mce-" + resp.result + "-response").html(msg);
        }
      }
    },
  };

  window.mc.mce_validator = $("#mc-embedded-subscribe-form").validate({
    // Set error HTML: <div class="mce_inline_error"></div>
    errorClass: "mce_inline_error",
    errorElement: "div",

    // Validate fields on keyup, focusout and blur.
    onkeyup: false,
    onfocusout: function (element) {
      if (!mc.isTooEarly(element)) {
        $(element).valid();
      }
    },
    onblur: function (element) {
      if (!mc.isTooEarly(element)) {
        $(element).valid();
      }
    },
    // Grouping fields makes jQuery Validation display one error for all the fields in the group
    // It doesn't have anything to do with how the fields are validated (together or separately),
    // it's strictly for visual display of errors
    groups: mc.getGroups(),
    // Place a field's inline error HTML just before the div.mc-field-group closing tag
    errorPlacement: function (error, element) {
      element.closest(".mc-field-group").append(error);
    },
    // Submit the form via ajax (see: jQuery Form plugin)
    submitHandler: function (form) {
      $(form).ajaxSubmit(mc.ajaxOptions);
    },
  });

  window.mc.ajaxOptions = {
    url: mc.getAjaxSubmitUrl(),
    type: "GET",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: mc.mce_success_cb,
  };
})(jQuery);
