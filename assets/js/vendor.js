"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var a = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      n.d(i, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t, n) {
  (function (t) {
    "object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && (e.exports = function () {
      "use strict";

      function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(t);
      }

      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      function a(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }

      function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }

      function o(e, t) {
        var n = Object.keys(e);

        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), n.push.apply(n, i);
        }

        return n;
      }

      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function (t) {
            r(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }

        return e;
      }

      function l(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e;
        }(e) || function (e, t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
                i = !0,
                a = !1,
                r = void 0;

            try {
              for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0) {
                ;
              }
            } catch (e) {
              a = !0, r = e;
            } finally {
              try {
                i || null == s.return || s.return();
              } finally {
                if (a) throw r;
              }
            }

            return n;
          }
        }(e, t) || u(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }

      function c(e) {
        return function (e) {
          if (Array.isArray(e)) return d(e);
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }(e) || u(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }

      function u(e, t) {
        if (e) {
          if ("string" == typeof e) return d(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
        }
      }

      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);

        for (var n = 0, i = new Array(t); n < t; n++) {
          i[n] = e[n];
        }

        return i;
      }

      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }

      function p(e, t) {
        var n = Object.keys(e);

        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), n.push.apply(n, i);
        }

        return n;
      }

      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p(Object(n), !0).forEach(function (t) {
            m(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }

        return e;
      }

      var g = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
      };

      function y(e, t) {
        return function () {
          return Array.from(document.querySelectorAll(t)).includes(this);
        }.call(e, t);
      }

      var b,
          v,
          w,
          k = function k(e) {
        return null != e ? e.constructor : null;
      },
          T = function T(e, t) {
        return !!(e && t && e instanceof t);
      },
          C = function C(e) {
        return k(e) === String;
      },
          A = function A(e) {
        return Array.isArray(e);
      },
          S = function S(e) {
        return T(e, NodeList);
      },
          P = C,
          E = A,
          x = S,
          M = function M(e) {
        return T(e, Element);
      },
          N = function N(e) {
        return T(e, Event);
      },
          I = function I(e) {
        return function (e) {
          return null == e;
        }(e) || (C(e) || A(e) || S(e)) && !e.length || function (e) {
          return k(e) === Object;
        }(e) && !Object.keys(e).length;
      },
          O = function () {
        function e(t, n) {
          (function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e), M(t) ? this.element = t : P(t) && (this.element = document.querySelector(t)), M(this.element) && I(this.element.rangeTouch) && (this.config = f({}, g, {}, n), this.init());
        }

        return function (e, t, n) {
          t && h(e.prototype, t), n && h(e, n);
        }(e, [{
          key: "init",
          value: function value() {
            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
          }
        }, {
          key: "destroy",
          value: function value() {
            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
          }
        }, {
          key: "listeners",
          value: function value(e) {
            var t = this,
                n = e ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function (e) {
              t.element[n](e, function (e) {
                return t.set(e);
              }, !1);
            });
          }
        }, {
          key: "get",
          value: function value(t) {
            if (!e.enabled || !N(t)) return null;
            var n,
                i = t.target,
                a = t.changedTouches[0],
                r = parseFloat(i.getAttribute("min")) || 0,
                o = parseFloat(i.getAttribute("max")) || 100,
                s = parseFloat(i.getAttribute("step")) || 1,
                l = i.getBoundingClientRect(),
                c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (n = 100 / l.width * (a.clientX - l.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * c : 50 < n && (n += 2 * (n - 50) * c), r + function (e, t) {
              if (1 > t) {
                var n = function (e) {
                  var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
                }(t);

                return parseFloat(e.toFixed(n));
              }

              return Math.round(e / t) * t;
            }(n / 100 * (o - r), s);
          }
        }, {
          key: "set",
          value: function value(t) {
            e.enabled && N(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function (e, t) {
              if (e && t) {
                var n = new Event(t, {
                  bubbles: !0
                });
                e.dispatchEvent(n);
              }
            }(t.target, "touchend" === t.type ? "change" : "input"));
          }
        }], [{
          key: "setup",
          value: function value(t) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                i = null;
            if (I(t) || P(t) ? i = Array.from(document.querySelectorAll(P(t) ? t : 'input[type="range"]')) : M(t) ? i = [t] : x(t) ? i = Array.from(t) : E(t) && (i = t.filter(M)), I(i)) return null;
            var a = f({}, g, {}, n);

            if (P(t) && a.watch) {
              var r = new MutationObserver(function (n) {
                Array.from(n).forEach(function (n) {
                  Array.from(n.addedNodes).forEach(function (n) {
                    M(n) && y(n, t) && new e(n, a);
                  });
                });
              });
              r.observe(document.body, {
                childList: !0,
                subtree: !0
              });
            }

            return i.map(function (t) {
              return new e(t, n);
            });
          }
        }, {
          key: "enabled",
          get: function get() {
            return "ontouchstart" in document.documentElement;
          }
        }]), e;
      }(),
          L = function L(e) {
        return null != e ? e.constructor : null;
      },
          _ = function _(e, t) {
        return Boolean(e && t && e instanceof t);
      },
          j = function j(e) {
        return null == e;
      },
          q = function q(e) {
        return L(e) === Object;
      },
          D = function D(e) {
        return L(e) === String;
      },
          F = function F(e) {
        return L(e) === Function;
      },
          H = function H(e) {
        return Array.isArray(e);
      },
          R = function R(e) {
        return _(e, NodeList);
      },
          V = function V(e) {
        return j(e) || (D(e) || H(e) || R(e)) && !e.length || q(e) && !Object.keys(e).length;
      },
          B = j,
          U = q,
          W = function W(e) {
        return L(e) === Number && !Number.isNaN(e);
      },
          z = D,
          K = function K(e) {
        return L(e) === Boolean;
      },
          Y = F,
          Q = H,
          $ = R,
          X = function X(t) {
        return null !== t && "object" === e(t) && 1 === t.nodeType && "object" === e(t.style) && "object" === e(t.ownerDocument);
      },
          J = function J(e) {
        return _(e, Event);
      },
          G = function G(e) {
        return _(e, KeyboardEvent);
      },
          Z = function Z(e) {
        return _(e, TextTrack) || !j(e) && D(e.kind);
      },
          ee = function ee(e) {
        if (_(e, window.URL)) return !0;
        if (!D(e)) return !1;
        var t = e;
        e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));

        try {
          return !V(new URL(t).hostname);
        } catch (e) {
          return !1;
        }
      },
          te = V,
          ne = (b = document.createElement("span"), v = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      }, w = Object.keys(v).find(function (e) {
        return void 0 !== b.style[e];
      }), !!z(w) && v[w]);

      function ie(e, t) {
        setTimeout(function () {
          try {
            e.hidden = !0, e.offsetHeight, e.hidden = !1;
          } catch (e) {}
        }, t);
      }

      var ae = {
        isIE:
        /* @cc_on!@ */
        !!document.documentMode,
        isEdge: window.navigator.userAgent.includes("Edge"),
        isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
      };

      function re(e, t) {
        return t.split(".").reduce(function (e, t) {
          return e && e[t];
        }, e);
      }

      function oe() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
          n[i - 1] = arguments[i];
        }

        if (!n.length) return e;
        var a = n.shift();
        return U(a) ? (Object.keys(a).forEach(function (t) {
          U(a[t]) ? (Object.keys(e).includes(t) || Object.assign(e, r({}, t, {})), oe(e[t], a[t])) : Object.assign(e, r({}, t, a[t]));
        }), oe.apply(void 0, [e].concat(n))) : e;
      }

      function se(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach(function (e, n) {
          var i = n > 0 ? t.cloneNode(!0) : t,
              a = e.parentNode,
              r = e.nextSibling;
          i.appendChild(e), r ? a.insertBefore(i, r) : a.appendChild(i);
        });
      }

      function le(e, t) {
        X(e) && !te(t) && Object.entries(t).filter(function (e) {
          var t = l(e, 2)[1];
          return !B(t);
        }).forEach(function (t) {
          var n = l(t, 2),
              i = n[0],
              a = n[1];
          return e.setAttribute(i, a);
        });
      }

      function ce(e, t, n) {
        var i = document.createElement(e);
        return U(t) && le(i, t), z(n) && (i.innerText = n), i;
      }

      function ue(e, t, n, i) {
        X(t) && t.appendChild(ce(e, n, i));
      }

      function de(e) {
        $(e) || Q(e) ? Array.from(e).forEach(de) : X(e) && X(e.parentNode) && e.parentNode.removeChild(e);
      }

      function he(e) {
        if (X(e)) for (var t = e.childNodes.length; t > 0;) {
          e.removeChild(e.lastChild), t -= 1;
        }
      }

      function me(e, t) {
        return X(t) && X(t.parentNode) && X(e) ? (t.parentNode.replaceChild(e, t), e) : null;
      }

      function pe(e, t) {
        if (!z(e) || te(e)) return {};
        var n = {},
            i = oe({}, t);
        return e.split(",").forEach(function (e) {
          var t = e.trim(),
              a = t.replace(".", ""),
              r = t.replace(/[[\]]/g, "").split("="),
              o = l(r, 1)[0],
              s = r.length > 1 ? r[1].replace(/["']/g, "") : "";

          switch (t.charAt(0)) {
            case ".":
              z(i.class) ? n.class = "".concat(i.class, " ").concat(a) : n.class = a;
              break;

            case "#":
              n.id = t.replace("#", "");
              break;

            case "[":
              n[o] = s;
          }
        }), oe(i, n);
      }

      function fe(e, t) {
        if (X(e)) {
          var n = t;
          K(n) || (n = !e.hidden), e.hidden = n;
        }
      }

      function ge(e, t, n) {
        if ($(e)) return Array.from(e).map(function (e) {
          return ge(e, t, n);
        });

        if (X(e)) {
          var i = "toggle";
          return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t);
        }

        return !1;
      }

      function ye(e, t) {
        return X(e) && e.classList.contains(t);
      }

      function be(e, t) {
        var n = Element.prototype;
        return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function () {
          return Array.from(document.querySelectorAll(t)).includes(this);
        }).call(e, t);
      }

      function ve(e) {
        return this.elements.container.querySelectorAll(e);
      }

      function we(e) {
        return this.elements.container.querySelector(e);
      }

      function ke() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        X(e) && (e.focus({
          preventScroll: !0
        }), t && ge(e, this.config.classNames.tabFocus));
      }

      var Te,
          Ce = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora"
      },
          Ae = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check: function check(e, t, n) {
          var i = ae.isIPhone && n && Ae.playsinline,
              a = Ae[e] || "html5" !== t;
          return {
            api: a,
            ui: a && Ae.rangeInput && ("video" !== e || !ae.isIPhone || i)
          };
        },
        pip: !(ae.isIPhone || !Y(ce("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || ce("video").disablePictureInPicture)),
        airplay: Y(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime: function mime(e) {
          if (te(e)) return !1;
          var t = l(e.split("/"), 1)[0],
              n = e;
          if (!this.isHTML5 || t !== this.type) return !1;
          Object.keys(Ce).includes(n) && (n += '; codecs="'.concat(Ce[e], '"'));

          try {
            return Boolean(n && this.media.canPlayType(n).replace(/no/, ""));
          } catch (e) {
            return !1;
          }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: (Te = document.createElement("input"), Te.type = "range", "range" === Te.type),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== ne,
        reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
      },
          Se = function () {
        var e = !1;

        try {
          var t = Object.defineProperty({}, "passive", {
            get: function get() {
              return e = !0, null;
            }
          });
          window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
        } catch (e) {}

        return e;
      }();

      function Pe(e, t, n) {
        var i = this,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];

        if (e && "addEventListener" in e && !te(t) && Y(n)) {
          var s = t.split(" "),
              l = o;
          Se && (l = {
            passive: r,
            capture: o
          }), s.forEach(function (t) {
            i && i.eventListeners && a && i.eventListeners.push({
              element: e,
              type: t,
              callback: n,
              options: l
            }), e[a ? "addEventListener" : "removeEventListener"](t, n, l);
          });
        }
      }

      function Ee(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        Pe.call(this, e, t, n, !0, i, a);
      }

      function xe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        Pe.call(this, e, t, n, !1, i, a);
      }

      function Me(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = function o() {
          xe(e, n, o, a, r);

          for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) {
            l[c] = arguments[c];
          }

          i.apply(t, l);
        };

        Pe.call(this, e, n, o, !0, a, r);
      }

      function Ne(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};

        if (X(e) && !te(t)) {
          var a = new CustomEvent(t, {
            bubbles: n,
            detail: s(s({}, i), {}, {
              plyr: this
            })
          });
          e.dispatchEvent(a);
        }
      }

      function Ie() {
        this && this.eventListeners && (this.eventListeners.forEach(function (e) {
          var t = e.element,
              n = e.type,
              i = e.callback,
              a = e.options;
          t.removeEventListener(n, i, a);
        }), this.eventListeners = []);
      }

      function Oe() {
        var e = this;
        return new Promise(function (t) {
          return e.ready ? setTimeout(t, 0) : Ee.call(e, e.elements.container, "ready", t);
        }).then(function () {});
      }

      function Le(e) {
        (function (e) {
          return _(e, Promise) && F(e.then);
        })(e) && e.then(null, function () {});
      }

      function _e(e) {
        return !!(Q(e) || z(e) && e.includes(":")) && (Q(e) ? e : e.split(":")).map(Number).every(W);
      }

      function je(e) {
        if (!Q(e) || !e.every(W)) return null;

        var t = l(e, 2),
            n = t[0],
            i = t[1],
            a = function e(t, n) {
          return 0 === n ? t : e(n, t % n);
        }(n, i);

        return [n / a, i / a];
      }

      function qe(e) {
        var t = function t(e) {
          return _e(e) ? e.split(":").map(Number) : null;
        },
            n = t(e);

        if (null === n && (n = t(this.config.ratio)), null === n && !te(this.embed) && Q(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
          var i = this.media;
          n = je([i.videoWidth, i.videoHeight]);
        }

        return n;
      }

      function De(e) {
        if (!this.isVideo) return {};
        var t = this.elements.wrapper,
            n = qe.call(this, e),
            i = l(Q(n) ? n : [0, 0], 2),
            a = 100 / i[0] * i[1];

        if (t.style.paddingBottom = "".concat(a, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
          var r = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
              o = (r - a) / (r / 50);
          this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(o, "%)");
        } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);

        return {
          padding: a,
          ratio: n
        };
      }

      var Fe = {
        getSources: function getSources() {
          var e = this;
          return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (t) {
            var n = t.getAttribute("type");
            return !!te(n) || Ae.mime.call(e, n);
          }) : [];
        },
        getQualityOptions: function getQualityOptions() {
          return this.config.quality.forced ? this.config.quality.options : Fe.getSources.call(this).map(function (e) {
            return Number(e.getAttribute("size"));
          }).filter(Boolean);
        },
        setup: function setup() {
          if (this.isHTML5) {
            var e = this;
            e.options.speed = e.config.speed.options, te(this.config.ratio) || De.call(e), Object.defineProperty(e.media, "quality", {
              get: function get() {
                var t = Fe.getSources.call(e).find(function (t) {
                  return t.getAttribute("src") === e.source;
                });
                return t && Number(t.getAttribute("size"));
              },
              set: function set(t) {
                if (e.quality !== t) {
                  if (e.config.quality.forced && Y(e.config.quality.onChange)) e.config.quality.onChange(t);else {
                    var n = Fe.getSources.call(e).find(function (e) {
                      return Number(e.getAttribute("size")) === t;
                    });
                    if (!n) return;
                    var i = e.media,
                        a = i.currentTime,
                        r = i.paused,
                        o = i.preload,
                        s = i.readyState,
                        l = i.playbackRate;
                    e.media.src = n.getAttribute("src"), ("none" !== o || s) && (e.once("loadedmetadata", function () {
                      e.speed = l, e.currentTime = a, r || Le(e.play());
                    }), e.media.load());
                  }
                  Ne.call(e, e.media, "qualitychange", !1, {
                    quality: t
                  });
                }
              }
            });
          }
        },
        cancelRequests: function cancelRequests() {
          this.isHTML5 && (de(Fe.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        }
      };

      function He(e) {
        return Q(e) ? e.filter(function (t, n) {
          return e.indexOf(t) === n;
        }) : e;
      }

      function Re(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
          n[i - 1] = arguments[i];
        }

        return te(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
          return n[t].toString();
        });
      }

      var Ve = function Ve() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString());
      },
          Be = function Be() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.toString().replace(/\w\S*/g, function (e) {
          return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
        });
      };

      function Ue() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = e.toString();
        return t = Ve(t, "-", " "), t = Ve(t, "_", " "), t = Be(t), Ve(t, " ", "");
      }

      function We(e) {
        var t = document.createElement("div");
        return t.appendChild(e), t.innerHTML;
      }

      var ze = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube"
      },
          Ke = function Ke() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (te(e) || te(t)) return "";
        var n = re(t.i18n, e);
        if (te(n)) return Object.keys(ze).includes(e) ? ze[e] : "";
        var i = {
          "{seektime}": t.seekTime,
          "{title}": t.title
        };
        return Object.entries(i).forEach(function (e) {
          var t = l(e, 2),
              i = t[0],
              a = t[1];
          n = Ve(n, i, a);
        }), n;
      },
          Ye = function () {
        function e(t) {
          var i = this;
          n(this, e), r(this, "get", function (t) {
            if (!e.supported || !i.enabled) return null;
            var n = window.localStorage.getItem(i.key);
            if (te(n)) return null;
            var a = JSON.parse(n);
            return z(t) && t.length ? a[t] : a;
          }), r(this, "set", function (t) {
            if (e.supported && i.enabled && U(t)) {
              var n = i.get();
              te(n) && (n = {}), oe(n, t), window.localStorage.setItem(i.key, JSON.stringify(n));
            }
          }), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
        }

        return a(e, null, [{
          key: "supported",
          get: function get() {
            try {
              if (!("localStorage" in window)) return !1;
              var e = "___test";
              return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
            } catch (e) {
              return !1;
            }
          }
        }]), e;
      }();

      function Qe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        return new Promise(function (n, i) {
          try {
            var a = new XMLHttpRequest();
            if (!("withCredentials" in a)) return;
            a.addEventListener("load", function () {
              if ("text" === t) try {
                n(JSON.parse(a.responseText));
              } catch (e) {
                n(a.responseText);
              } else n(a.response);
            }), a.addEventListener("error", function () {
              throw new Error(a.status);
            }), a.open("GET", e, !0), a.responseType = t, a.send();
          } catch (e) {
            i(e);
          }
        });
      }

      function $e(e, t) {
        if (z(e)) {
          var n = "cache",
              i = z(t),
              a = function a() {
            return null !== document.getElementById(t);
          },
              r = function r(e, t) {
            e.innerHTML = t, i && a() || document.body.insertAdjacentElement("afterbegin", e);
          };

          if (!i || !a()) {
            var o = Ye.supported,
                s = document.createElement("div");

            if (s.setAttribute("hidden", ""), i && s.setAttribute("id", t), o) {
              var l = window.localStorage.getItem("".concat(n, "-").concat(t));

              if (null !== l) {
                var c = JSON.parse(l);
                r(s, c.content);
              }
            }

            Qe(e).then(function (e) {
              te(e) || (o && window.localStorage.setItem("".concat(n, "-").concat(t), JSON.stringify({
                content: e
              })), r(s, e));
            }).catch(function () {});
          }
        }
      }

      var Xe = function Xe(e) {
        return Math.trunc(e / 60 / 60 % 60, 10);
      },
          Je = function Je(e) {
        return Math.trunc(e / 60 % 60, 10);
      },
          Ge = function Ge(e) {
        return Math.trunc(e % 60, 10);
      };

      function Ze() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!W(e)) return Ze(void 0, t, n);

        var i = function i(e) {
          return "0".concat(e).slice(-2);
        },
            a = Xe(e),
            r = Je(e),
            o = Ge(e);

        return a = t || a > 0 ? "".concat(a, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(a).concat(i(r), ":").concat(i(o));
      }

      var et = {
        getIconUrl: function getIconUrl() {
          var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || ae.isIE && !window.svg4everybody;
          return {
            url: this.config.iconUrl,
            cors: e
          };
        },
        findElements: function findElements() {
          try {
            return this.elements.controls = we.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
              play: ve.call(this, this.config.selectors.buttons.play),
              pause: we.call(this, this.config.selectors.buttons.pause),
              restart: we.call(this, this.config.selectors.buttons.restart),
              rewind: we.call(this, this.config.selectors.buttons.rewind),
              fastForward: we.call(this, this.config.selectors.buttons.fastForward),
              mute: we.call(this, this.config.selectors.buttons.mute),
              pip: we.call(this, this.config.selectors.buttons.pip),
              airplay: we.call(this, this.config.selectors.buttons.airplay),
              settings: we.call(this, this.config.selectors.buttons.settings),
              captions: we.call(this, this.config.selectors.buttons.captions),
              fullscreen: we.call(this, this.config.selectors.buttons.fullscreen)
            }, this.elements.progress = we.call(this, this.config.selectors.progress), this.elements.inputs = {
              seek: we.call(this, this.config.selectors.inputs.seek),
              volume: we.call(this, this.config.selectors.inputs.volume)
            }, this.elements.display = {
              buffer: we.call(this, this.config.selectors.display.buffer),
              currentTime: we.call(this, this.config.selectors.display.currentTime),
              duration: we.call(this, this.config.selectors.display.duration)
            }, X(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0;
          } catch (e) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
          }
        },
        createIcon: function createIcon(e, t) {
          var n = "http://www.w3.org/2000/svg",
              i = et.getIconUrl.call(this),
              a = "".concat(i.cors ? "" : i.url, "#").concat(this.config.iconPrefix),
              r = document.createElementNS(n, "svg");
          le(r, oe(t, {
            "aria-hidden": "true",
            focusable: "false"
          }));
          var o = document.createElementNS(n, "use"),
              s = "".concat(a, "-").concat(e);
          return "href" in o && o.setAttributeNS("http://www.w3.org/1999/xlink", "href", s), o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), r.appendChild(o), r;
        },
        createLabel: function createLabel(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = Ke(e, this.config),
              i = s(s({}, t), {}, {
            class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
          });
          return ce("span", i, n);
        },
        createBadge: function createBadge(e) {
          if (te(e)) return null;
          var t = ce("span", {
            class: this.config.classNames.menu.value
          });
          return t.appendChild(ce("span", {
            class: this.config.classNames.menu.badge
          }, e)), t;
        },
        createButton: function createButton(e, t) {
          var n = this,
              i = oe({}, t),
              a = function () {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
            return (e = Ue(e)).charAt(0).toLowerCase() + e.slice(1);
          }(e),
              r = {
            element: "button",
            toggle: !1,
            label: null,
            icon: null,
            labelPressed: null,
            iconPressed: null
          };

          switch (["element", "icon", "label"].forEach(function (e) {
            Object.keys(i).includes(e) && (r[e] = i[e], delete i[e]);
          }), "button" !== r.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some(function (e) {
            return e === n.config.classNames.control;
          }) || oe(i, {
            class: "".concat(i.class, " ").concat(this.config.classNames.control)
          }) : i.class = this.config.classNames.control, e) {
            case "play":
              r.toggle = !0, r.label = "play", r.labelPressed = "pause", r.icon = "play", r.iconPressed = "pause";
              break;

            case "mute":
              r.toggle = !0, r.label = "mute", r.labelPressed = "unmute", r.icon = "volume", r.iconPressed = "muted";
              break;

            case "captions":
              r.toggle = !0, r.label = "enableCaptions", r.labelPressed = "disableCaptions", r.icon = "captions-off", r.iconPressed = "captions-on";
              break;

            case "fullscreen":
              r.toggle = !0, r.label = "enterFullscreen", r.labelPressed = "exitFullscreen", r.icon = "enter-fullscreen", r.iconPressed = "exit-fullscreen";
              break;

            case "play-large":
              i.class += " ".concat(this.config.classNames.control, "--overlaid"), a = "play", r.label = "play", r.icon = "play";
              break;

            default:
              te(r.label) && (r.label = a), te(r.icon) && (r.icon = e);
          }

          var o = ce(r.element);
          return r.toggle ? (o.appendChild(et.createIcon.call(this, r.iconPressed, {
            class: "icon--pressed"
          })), o.appendChild(et.createIcon.call(this, r.icon, {
            class: "icon--not-pressed"
          })), o.appendChild(et.createLabel.call(this, r.labelPressed, {
            class: "label--pressed"
          })), o.appendChild(et.createLabel.call(this, r.label, {
            class: "label--not-pressed"
          }))) : (o.appendChild(et.createIcon.call(this, r.icon)), o.appendChild(et.createLabel.call(this, r.label))), oe(i, pe(this.config.selectors.buttons[a], i)), le(o, i), "play" === a ? (Q(this.elements.buttons[a]) || (this.elements.buttons[a] = []), this.elements.buttons[a].push(o)) : this.elements.buttons[a] = o, o;
        },
        createRange: function createRange(e, t) {
          var n = ce("input", oe(pe(this.config.selectors.inputs[e]), {
            type: "range",
            min: 0,
            max: 100,
            step: .01,
            value: 0,
            autocomplete: "off",
            role: "slider",
            "aria-label": Ke(e, this.config),
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": 0
          }, t));
          return this.elements.inputs[e] = n, et.updateRangeFill.call(this, n), O.setup(n), n;
        },
        createProgress: function createProgress(e, t) {
          var n = ce("progress", oe(pe(this.config.selectors.display[e]), {
            min: 0,
            max: 100,
            value: 0,
            role: "progressbar",
            "aria-hidden": !0
          }, t));

          if ("volume" !== e) {
            n.appendChild(ce("span", null, "0"));
            var i = {
              played: "played",
              buffer: "buffered"
            }[e],
                a = i ? Ke(i, this.config) : "";
            n.innerText = "% ".concat(a.toLowerCase());
          }

          return this.elements.display[e] = n, n;
        },
        createTime: function createTime(e, t) {
          var n = pe(this.config.selectors.display[e], t),
              i = ce("div", oe(n, {
            class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
            "aria-label": Ke(e, this.config)
          }), "00:00");
          return this.elements.display[e] = i, i;
        },
        bindMenuItemShortcuts: function bindMenuItemShortcuts(e, t) {
          var n = this;
          Ee.call(this, e, "keydown keyup", function (i) {
            if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
              var a,
                  r = be(e, '[role="menuitemradio"]');
              !r && [32, 39].includes(i.which) ? et.showMenuPanel.call(n, t, !0) : 32 !== i.which && (40 === i.which || r && 39 === i.which ? (a = e.nextElementSibling, X(a) || (a = e.parentNode.firstElementChild)) : (a = e.previousElementSibling, X(a) || (a = e.parentNode.lastElementChild)), ke.call(n, a, !0));
            }
          }, !1), Ee.call(this, e, "keyup", function (e) {
            13 === e.which && et.focusFirstMenuItem.call(n, null, !0);
          });
        },
        createMenuItem: function createMenuItem(e) {
          var t = this,
              n = e.value,
              i = e.list,
              a = e.type,
              r = e.title,
              o = e.badge,
              s = void 0 === o ? null : o,
              l = e.checked,
              c = void 0 !== l && l,
              u = pe(this.config.selectors.inputs[a]),
              d = ce("button", oe(u, {
            type: "button",
            role: "menuitemradio",
            class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
            "aria-checked": c,
            value: n
          })),
              h = ce("span");
          h.innerHTML = r, X(s) && h.appendChild(s), d.appendChild(h), Object.defineProperty(d, "checked", {
            enumerable: !0,
            get: function get() {
              return "true" === d.getAttribute("aria-checked");
            },
            set: function set(e) {
              e && Array.from(d.parentNode.children).filter(function (e) {
                return be(e, '[role="menuitemradio"]');
              }).forEach(function (e) {
                return e.setAttribute("aria-checked", "false");
              }), d.setAttribute("aria-checked", e ? "true" : "false");
            }
          }), this.listeners.bind(d, "click keyup", function (e) {
            if (!G(e) || 32 === e.which) {
              switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, a) {
                case "language":
                  t.currentTrack = Number(n);
                  break;

                case "quality":
                  t.quality = n;
                  break;

                case "speed":
                  t.speed = parseFloat(n);
              }

              et.showMenuPanel.call(t, "home", G(e));
            }
          }, a, !1), et.bindMenuItemShortcuts.call(this, d, a), i.appendChild(d);
        },
        formatTime: function formatTime() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!W(e)) return e;
          var n = Xe(this.duration) > 0;
          return Ze(e, n, t);
        },
        updateTimeDisplay: function updateTimeDisplay() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          X(e) && W(t) && (e.innerText = et.formatTime(t, n));
        },
        updateVolume: function updateVolume() {
          this.supported.ui && (X(this.elements.inputs.volume) && et.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), X(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
        },
        setRange: function setRange(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          X(e) && (e.value = t, et.updateRangeFill.call(this, e));
        },
        updateProgress: function updateProgress(e) {
          var t = this;

          if (this.supported.ui && J(e)) {
            var n,
                i,
                a = 0;
            if (e) switch (e.type) {
              case "timeupdate":
              case "seeking":
              case "seeked":
                n = this.currentTime, i = this.duration, a = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && et.setRange.call(this, this.elements.inputs.seek, a);
                break;

              case "playing":
              case "progress":
                !function (e, n) {
                  var i = W(n) ? n : 0,
                      a = X(e) ? e : t.elements.display.buffer;

                  if (X(a)) {
                    a.value = i;
                    var r = a.getElementsByTagName("span")[0];
                    X(r) && (r.childNodes[0].nodeValue = i);
                  }
                }(this.elements.display.buffer, 100 * this.buffered);
            }
          }
        },
        updateRangeFill: function updateRangeFill(e) {
          var t = J(e) ? e.target : e;

          if (X(t) && "range" === t.getAttribute("type")) {
            if (be(t, this.config.selectors.inputs.seek)) {
              t.setAttribute("aria-valuenow", this.currentTime);
              var n = et.formatTime(this.currentTime),
                  i = et.formatTime(this.duration),
                  a = Ke("seekLabel", this.config);
              t.setAttribute("aria-valuetext", a.replace("{currentTime}", n).replace("{duration}", i));
            } else if (be(t, this.config.selectors.inputs.volume)) {
              var r = 100 * t.value;
              t.setAttribute("aria-valuenow", r), t.setAttribute("aria-valuetext", "".concat(r.toFixed(1), "%"));
            } else t.setAttribute("aria-valuenow", t.value);

            ae.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"));
          }
        },
        updateSeekTooltip: function updateSeekTooltip(e) {
          var t = this;

          if (this.config.tooltips.seek && X(this.elements.inputs.seek) && X(this.elements.display.seekTooltip) && 0 !== this.duration) {
            var n = "".concat(this.config.classNames.tooltip, "--visible"),
                i = function i(e) {
              return ge(t.elements.display.seekTooltip, n, e);
            };

            if (this.touch) i(!1);else {
              var a = 0,
                  r = this.elements.progress.getBoundingClientRect();
              if (J(e)) a = 100 / r.width * (e.pageX - r.left);else {
                if (!ye(this.elements.display.seekTooltip, n)) return;
                a = parseFloat(this.elements.display.seekTooltip.style.left, 10);
              }
              a < 0 ? a = 0 : a > 100 && (a = 100), et.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * a), this.elements.display.seekTooltip.style.left = "".concat(a, "%"), J(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type);
            }
          }
        },
        timeUpdate: function timeUpdate(e) {
          var t = !X(this.elements.display.duration) && this.config.invertTime;
          et.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || et.updateProgress.call(this, e);
        },
        durationUpdate: function durationUpdate() {
          if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
            if (this.duration >= Math.pow(2, 32)) return fe(this.elements.display.currentTime, !0), void fe(this.elements.progress, !0);
            X(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
            var e = X(this.elements.display.duration);
            !e && this.config.displayDuration && this.paused && et.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && et.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), et.updateSeekTooltip.call(this);
          }
        },
        toggleMenuButton: function toggleMenuButton(e, t) {
          fe(this.elements.settings.buttons[e], !t);
        },
        updateSetting: function updateSetting(e, t, n) {
          var i = this.elements.settings.panels[e],
              a = null,
              r = t;
          if ("captions" === e) a = this.currentTrack;else {
            if (a = te(n) ? this[e] : n, te(a) && (a = this.config[e].default), !te(this.options[e]) && !this.options[e].includes(a)) return void this.debug.warn("Unsupported value of '".concat(a, "' for ").concat(e));
            if (!this.config[e].options.includes(a)) return void this.debug.warn("Disabled value of '".concat(a, "' for ").concat(e));
          }

          if (X(r) || (r = i && i.querySelector('[role="menu"]')), X(r)) {
            this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = et.getLabel.call(this, e, a);
            var o = r && r.querySelector('[value="'.concat(a, '"]'));
            X(o) && (o.checked = !0);
          }
        },
        getLabel: function getLabel(e, t) {
          switch (e) {
            case "speed":
              return 1 === t ? Ke("normal", this.config) : "".concat(t, "&times;");

            case "quality":
              if (W(t)) {
                var n = Ke("qualityLabel.".concat(t), this.config);
                return n.length ? n : "".concat(t, "p");
              }

              return Be(t);

            case "captions":
              return it.getLabel.call(this);

            default:
              return null;
          }
        },
        setQualityMenu: function setQualityMenu(e) {
          var t = this;

          if (X(this.elements.settings.panels.quality)) {
            var n = "quality",
                i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
            Q(e) && (this.options.quality = He(e).filter(function (e) {
              return t.config.quality.options.includes(e);
            }));
            var a = !te(this.options.quality) && this.options.quality.length > 1;

            if (et.toggleMenuButton.call(this, n, a), he(i), et.checkMenu.call(this), a) {
              var r = function r(e) {
                var n = Ke("qualityBadge.".concat(e), t.config);
                return n.length ? et.createBadge.call(t, n) : null;
              };

              this.options.quality.sort(function (e, n) {
                var i = t.config.quality.options;
                return i.indexOf(e) > i.indexOf(n) ? 1 : -1;
              }).forEach(function (e) {
                et.createMenuItem.call(t, {
                  value: e,
                  list: i,
                  type: n,
                  title: et.getLabel.call(t, "quality", e),
                  badge: r(e)
                });
              }), et.updateSetting.call(this, n, i);
            }
          }
        },
        setCaptionsMenu: function setCaptionsMenu() {
          var e = this;

          if (X(this.elements.settings.panels.captions)) {
            var t = "captions",
                n = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                i = it.getTracks.call(this),
                a = Boolean(i.length);

            if (et.toggleMenuButton.call(this, t, a), he(n), et.checkMenu.call(this), a) {
              var r = i.map(function (t, i) {
                return {
                  value: i,
                  checked: e.captions.toggled && e.currentTrack === i,
                  title: it.getLabel.call(e, t),
                  badge: t.language && et.createBadge.call(e, t.language.toUpperCase()),
                  list: n,
                  type: "language"
                };
              });
              r.unshift({
                value: -1,
                checked: !this.captions.toggled,
                title: Ke("disabled", this.config),
                list: n,
                type: "language"
              }), r.forEach(et.createMenuItem.bind(this)), et.updateSetting.call(this, t, n);
            }
          }
        },
        setSpeedMenu: function setSpeedMenu() {
          var e = this;

          if (X(this.elements.settings.panels.speed)) {
            var t = "speed",
                n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
            this.options.speed = this.options.speed.filter(function (t) {
              return t >= e.minimumSpeed && t <= e.maximumSpeed;
            });
            var i = !te(this.options.speed) && this.options.speed.length > 1;
            et.toggleMenuButton.call(this, t, i), he(n), et.checkMenu.call(this), i && (this.options.speed.forEach(function (i) {
              et.createMenuItem.call(e, {
                value: i,
                list: n,
                type: t,
                title: et.getLabel.call(e, "speed", i)
              });
            }), et.updateSetting.call(this, t, n));
          }
        },
        checkMenu: function checkMenu() {
          var e = this.elements.settings.buttons,
              t = !te(e) && Object.values(e).some(function (e) {
            return !e.hidden;
          });
          fe(this.elements.settings.menu, !t);
        },
        focusFirstMenuItem: function focusFirstMenuItem(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

          if (!this.elements.settings.popup.hidden) {
            var n = e;
            X(n) || (n = Object.values(this.elements.settings.panels).find(function (e) {
              return !e.hidden;
            }));
            var i = n.querySelector('[role^="menuitem"]');
            ke.call(this, i, t);
          }
        },
        toggleMenu: function toggleMenu(e) {
          var t = this.elements.settings.popup,
              n = this.elements.buttons.settings;

          if (X(t) && X(n)) {
            var i = t.hidden,
                a = i;
            if (K(e)) a = e;else if (G(e) && 27 === e.which) a = !1;else if (J(e)) {
              var r = Y(e.composedPath) ? e.composedPath()[0] : e.target,
                  o = t.contains(r);
              if (o || !o && e.target !== n && a) return;
            }
            n.setAttribute("aria-expanded", a), fe(t, !a), ge(this.elements.container, this.config.classNames.menu.open, a), a && G(e) ? et.focusFirstMenuItem.call(this, null, !0) : a || i || ke.call(this, n, G(e));
          }
        },
        getMenuSize: function getMenuSize(e) {
          var t = e.cloneNode(!0);
          t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
          var n = t.scrollWidth,
              i = t.scrollHeight;
          return de(t), {
            width: n,
            height: i
          };
        },
        showMenuPanel: function showMenuPanel() {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));

          if (X(i)) {
            var a = i.parentNode,
                r = Array.from(a.children).find(function (e) {
              return !e.hidden;
            });

            if (Ae.transitions && !Ae.reducedMotion) {
              a.style.width = "".concat(r.scrollWidth, "px"), a.style.height = "".concat(r.scrollHeight, "px");

              var o = et.getMenuSize.call(this, i),
                  s = function t(n) {
                n.target === a && ["width", "height"].includes(n.propertyName) && (a.style.width = "", a.style.height = "", xe.call(e, a, ne, t));
              };

              Ee.call(this, a, ne, s), a.style.width = "".concat(o.width, "px"), a.style.height = "".concat(o.height, "px");
            }

            fe(r, !0), fe(i, !1), et.focusFirstMenuItem.call(this, i, n);
          }
        },
        setDownloadUrl: function setDownloadUrl() {
          var e = this.elements.buttons.download;
          X(e) && e.setAttribute("href", this.download);
        },
        create: function create(e) {
          var t = this,
              n = et.bindMenuItemShortcuts,
              i = et.createButton,
              a = et.createProgress,
              r = et.createRange,
              o = et.createTime,
              s = et.setQualityMenu,
              l = et.setSpeedMenu,
              c = et.showMenuPanel;
          this.elements.controls = null, Q(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
          var u = ce("div", pe(this.config.selectors.controls.wrapper));
          this.elements.controls = u;
          var d = {
            class: "plyr__controls__item"
          };
          return He(Q(this.config.controls) ? this.config.controls : []).forEach(function (s) {
            if ("restart" === s && u.appendChild(i.call(t, "restart", d)), "rewind" === s && u.appendChild(i.call(t, "rewind", d)), "play" === s && u.appendChild(i.call(t, "play", d)), "fast-forward" === s && u.appendChild(i.call(t, "fast-forward", d)), "progress" === s) {
              var l = ce("div", {
                class: "".concat(d.class, " plyr__progress__container")
              }),
                  h = ce("div", pe(t.config.selectors.progress));

              if (h.appendChild(r.call(t, "seek", {
                id: "plyr-seek-".concat(e.id)
              })), h.appendChild(a.call(t, "buffer")), t.config.tooltips.seek) {
                var m = ce("span", {
                  class: t.config.classNames.tooltip
                }, "00:00");
                h.appendChild(m), t.elements.display.seekTooltip = m;
              }

              t.elements.progress = h, l.appendChild(t.elements.progress), u.appendChild(l);
            }

            if ("current-time" === s && u.appendChild(o.call(t, "currentTime", d)), "duration" === s && u.appendChild(o.call(t, "duration", d)), "mute" === s || "volume" === s) {
              var p = t.elements.volume;

              if (X(p) && u.contains(p) || (p = ce("div", oe({}, d, {
                class: "".concat(d.class, " plyr__volume").trim()
              })), t.elements.volume = p, u.appendChild(p)), "mute" === s && p.appendChild(i.call(t, "mute")), "volume" === s && !ae.isIos) {
                var f = {
                  max: 1,
                  step: .05,
                  value: t.config.volume
                };
                p.appendChild(r.call(t, "volume", oe(f, {
                  id: "plyr-volume-".concat(e.id)
                })));
              }
            }

            if ("captions" === s && u.appendChild(i.call(t, "captions", d)), "settings" === s && !te(t.config.settings)) {
              var g = ce("div", oe({}, d, {
                class: "".concat(d.class, " plyr__menu").trim(),
                hidden: ""
              }));
              g.appendChild(i.call(t, "settings", {
                "aria-haspopup": !0,
                "aria-controls": "plyr-settings-".concat(e.id),
                "aria-expanded": !1
              }));
              var y = ce("div", {
                class: "plyr__menu__container",
                id: "plyr-settings-".concat(e.id),
                hidden: ""
              }),
                  b = ce("div"),
                  v = ce("div", {
                id: "plyr-settings-".concat(e.id, "-home")
              }),
                  w = ce("div", {
                role: "menu"
              });
              v.appendChild(w), b.appendChild(v), t.elements.settings.panels.home = v, t.config.settings.forEach(function (i) {
                var a = ce("button", oe(pe(t.config.selectors.buttons.settings), {
                  type: "button",
                  class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                  role: "menuitem",
                  "aria-haspopup": !0,
                  hidden: ""
                }));
                n.call(t, a, i), Ee.call(t, a, "click", function () {
                  c.call(t, i, !1);
                });
                var r = ce("span", null, Ke(i, t.config)),
                    o = ce("span", {
                  class: t.config.classNames.menu.value
                });
                o.innerHTML = e[i], r.appendChild(o), a.appendChild(r), w.appendChild(a);
                var s = ce("div", {
                  id: "plyr-settings-".concat(e.id, "-").concat(i),
                  hidden: ""
                }),
                    l = ce("button", {
                  type: "button",
                  class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                });
                l.appendChild(ce("span", {
                  "aria-hidden": !0
                }, Ke(i, t.config))), l.appendChild(ce("span", {
                  class: t.config.classNames.hidden
                }, Ke("menuBack", t.config))), Ee.call(t, s, "keydown", function (e) {
                  37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0));
                }, !1), Ee.call(t, l, "click", function () {
                  c.call(t, "home", !1);
                }), s.appendChild(l), s.appendChild(ce("div", {
                  role: "menu"
                })), b.appendChild(s), t.elements.settings.buttons[i] = a, t.elements.settings.panels[i] = s;
              }), y.appendChild(b), g.appendChild(y), u.appendChild(g), t.elements.settings.popup = y, t.elements.settings.menu = g;
            }

            if ("pip" === s && Ae.pip && u.appendChild(i.call(t, "pip", d)), "airplay" === s && Ae.airplay && u.appendChild(i.call(t, "airplay", d)), "download" === s) {
              var k = oe({}, d, {
                element: "a",
                href: t.download,
                target: "_blank"
              });
              t.isHTML5 && (k.download = "");
              var T = t.config.urls.download;
              !ee(T) && t.isEmbed && oe(k, {
                icon: "logo-".concat(t.provider),
                label: t.provider
              }), u.appendChild(i.call(t, "download", k));
            }

            "fullscreen" === s && u.appendChild(i.call(t, "fullscreen", d));
          }), this.isHTML5 && s.call(this, Fe.getQualityOptions.call(this)), l.call(this), u;
        },
        inject: function inject() {
          var e = this;

          if (this.config.loadSprite) {
            var t = et.getIconUrl.call(this);
            t.cors && $e(t.url, "sprite-plyr");
          }

          this.id = Math.floor(1e4 * Math.random());
          var n = null;
          this.elements.controls = null;
          var i,
              a,
              r = {
            id: this.id,
            seektime: this.config.seekTime,
            title: this.config.title
          },
              o = !0;

          if (Y(this.config.controls) && (this.config.controls = this.config.controls.call(this, r)), this.config.controls || (this.config.controls = []), X(this.config.controls) || z(this.config.controls) ? n = this.config.controls : (n = et.create.call(this, {
            id: this.id,
            seektime: this.config.seekTime,
            speed: this.speed,
            quality: this.quality,
            captions: it.getLabel.call(this)
          }), o = !1), o && z(this.config.controls) && (i = n, Object.entries(r).forEach(function (e) {
            var t = l(e, 2),
                n = t[0],
                a = t[1];
            i = Ve(i, "{".concat(n, "}"), a);
          }), n = i), z(this.config.selectors.controls.container) && (a = document.querySelector(this.config.selectors.controls.container)), X(a) || (a = this.elements.container), a[X(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), X(this.elements.controls) || et.findElements.call(this), !te(this.elements.buttons)) {
            var s = function s(t) {
              var n = e.config.classNames.controlPressed;
              Object.defineProperty(t, "pressed", {
                enumerable: !0,
                get: function get() {
                  return ye(t, n);
                },
                set: function set() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  ge(t, n, e);
                }
              });
            };

            Object.values(this.elements.buttons).filter(Boolean).forEach(function (e) {
              Q(e) || $(e) ? Array.from(e).filter(Boolean).forEach(s) : s(e);
            });
          }

          if (ae.isEdge && ie(a), this.config.tooltips.controls) {
            var c = this.config,
                u = c.classNames,
                d = c.selectors,
                h = "".concat(d.controls.wrapper, " ").concat(d.labels, " .").concat(u.hidden),
                m = ve.call(this, h);
            Array.from(m).forEach(function (t) {
              ge(t, e.config.classNames.hidden, !1), ge(t, e.config.classNames.tooltip, !0);
            });
          }
        }
      };

      function tt(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = e;

        if (t) {
          var i = document.createElement("a");
          i.href = n, n = i.href;
        }

        try {
          return new URL(n);
        } catch (e) {
          return null;
        }
      }

      function nt(e) {
        var t = new URLSearchParams();
        return U(e) && Object.entries(e).forEach(function (e) {
          var n = l(e, 2),
              i = n[0],
              a = n[1];
          t.set(i, a);
        }), t;
      }

      var it = {
        setup: function setup() {
          if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !Ae.textTracks) Q(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && et.setCaptionsMenu.call(this);else {
            if (X(this.elements.captions) || (this.elements.captions = ce("div", pe(this.config.selectors.captions)), function (e, t) {
              X(e) && X(t) && t.parentNode.insertBefore(e, t.nextSibling);
            }(this.elements.captions, this.elements.wrapper)), ae.isIE && window.URL) {
              var e = this.media.querySelectorAll("track");
              Array.from(e).forEach(function (e) {
                var t = e.getAttribute("src"),
                    n = tt(t);
                null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Qe(t, "blob").then(function (t) {
                  e.setAttribute("src", window.URL.createObjectURL(t));
                }).catch(function () {
                  de(e);
                });
              });
            }

            var t = He((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
              return e.split("-")[0];
            })),
                n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
            "auto" === n && (n = l(t, 1)[0]);
            var i = this.storage.get("captions");

            if (K(i) || (i = this.config.captions.active), Object.assign(this.captions, {
              toggled: !1,
              active: i,
              language: n,
              languages: t
            }), this.isHTML5) {
              var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";
              Ee.call(this, this.media.textTracks, a, it.update.bind(this));
            }

            setTimeout(it.update.bind(this), 0);
          }
        },
        update: function update() {
          var e = this,
              t = it.getTracks.call(this, !0),
              n = this.captions,
              i = n.active,
              a = n.language,
              r = n.meta,
              o = n.currentTrackNode,
              s = Boolean(t.find(function (e) {
            return e.language === a;
          }));
          this.isHTML5 && this.isVideo && t.filter(function (e) {
            return !r.get(e);
          }).forEach(function (t) {
            e.debug.log("Track added", t), r.set(t, {
              default: "showing" === t.mode
            }), "showing" === t.mode && (t.mode = "hidden"), Ee.call(e, t, "cuechange", function () {
              return it.updateCues.call(e);
            });
          }), (s && this.language !== a || !t.includes(o)) && (it.setLanguage.call(this, a), it.toggle.call(this, i && s)), ge(this.elements.container, this.config.classNames.captions.enabled, !te(t)), Q(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && et.setCaptionsMenu.call(this);
        },
        toggle: function toggle(e) {
          var t = this,
              n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

          if (this.supported.ui) {
            var i = this.captions.toggled,
                a = this.config.classNames.captions.active,
                r = B(e) ? !i : e;

            if (r !== i) {
              if (n || (this.captions.active = r, this.storage.set({
                captions: r
              })), !this.language && r && !n) {
                var o = it.getTracks.call(this),
                    s = it.findTrack.call(this, [this.captions.language].concat(c(this.captions.languages)), !0);
                return this.captions.language = s.language, void it.set.call(this, o.indexOf(s));
              }

              this.elements.buttons.captions && (this.elements.buttons.captions.pressed = r), ge(this.elements.container, a, r), this.captions.toggled = r, et.updateSetting.call(this, "captions"), Ne.call(this, this.media, r ? "captionsenabled" : "captionsdisabled");
            }

            setTimeout(function () {
              r && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden");
            });
          }
        },
        set: function set(e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              n = it.getTracks.call(this);
          if (-1 !== e) {
            if (W(e)) {
              if (e in n) {
                if (this.captions.currentTrack !== e) {
                  this.captions.currentTrack = e;
                  var i = n[e],
                      a = i || {},
                      r = a.language;
                  this.captions.currentTrackNode = i, et.updateSetting.call(this, "captions"), t || (this.captions.language = r, this.storage.set({
                    language: r
                  })), this.isVimeo && this.embed.enableTextTrack(r), Ne.call(this, this.media, "languagechange");
                }

                it.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && it.updateCues.call(this);
              } else this.debug.warn("Track not found", e);
            } else this.debug.warn("Invalid caption argument", e);
          } else it.toggle.call(this, !1, t);
        },
        setLanguage: function setLanguage(e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

          if (z(e)) {
            var n = e.toLowerCase();
            this.captions.language = n;
            var i = it.getTracks.call(this),
                a = it.findTrack.call(this, [n]);
            it.set.call(this, i.indexOf(a), t);
          } else this.debug.warn("Invalid language argument", e);
        },
        getTracks: function getTracks() {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              n = Array.from((this.media || {}).textTracks || []);
          return n.filter(function (n) {
            return !e.isHTML5 || t || e.captions.meta.has(n);
          }).filter(function (e) {
            return ["captions", "subtitles"].includes(e.kind);
          });
        },
        findTrack: function findTrack(e) {
          var t,
              n = this,
              i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = it.getTracks.call(this),
              r = function r(e) {
            return Number((n.captions.meta.get(e) || {}).default);
          },
              o = Array.from(a).sort(function (e, t) {
            return r(t) - r(e);
          });

          return e.every(function (e) {
            return !(t = o.find(function (t) {
              return t.language === e;
            }));
          }), t || (i ? o[0] : void 0);
        },
        getCurrentTrack: function getCurrentTrack() {
          return it.getTracks.call(this)[this.currentTrack];
        },
        getLabel: function getLabel(e) {
          var t = e;
          return !Z(t) && Ae.textTracks && this.captions.toggled && (t = it.getCurrentTrack.call(this)), Z(t) ? te(t.label) ? te(t.language) ? Ke("enabled", this.config) : e.language.toUpperCase() : t.label : Ke("disabled", this.config);
        },
        updateCues: function updateCues(e) {
          if (this.supported.ui) if (X(this.elements.captions)) {
            if (B(e) || Array.isArray(e)) {
              var t = e;

              if (!t) {
                var n = it.getCurrentTrack.call(this);
                t = Array.from((n || {}).activeCues || []).map(function (e) {
                  return e.getCueAsHTML();
                }).map(We);
              }

              var i = t.map(function (e) {
                return e.trim();
              }).join("\n");

              if (i !== this.elements.captions.innerHTML) {
                he(this.elements.captions);
                var a = ce("span", pe(this.config.selectors.caption));
                a.innerHTML = i, this.elements.captions.appendChild(a), Ne.call(this, this.media, "cuechange");
              }
            } else this.debug.warn("updateCues: Invalid input", e);
          } else this.debug.warn("No captions element to render to");
        }
      },
          at = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.6.4/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
          forced: !1,
          onChange: null
        },
        loop: {
          active: !1
        },
        speed: {
          selected: 1,
          options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
        },
        keyboard: {
          focused: !0,
          global: !1
        },
        tooltips: {
          controls: !1,
          seek: !0
        },
        captions: {
          active: !1,
          language: "auto",
          update: !1
        },
        fullscreen: {
          enabled: !0,
          fallback: !0,
          iosNative: !1
        },
        storage: {
          enabled: !0,
          key: "plyr"
        },
        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
        settings: ["captions", "quality", "speed"],
        i18n: {
          restart: "Restart",
          rewind: "Rewind {seektime}s",
          play: "Play",
          pause: "Pause",
          fastForward: "Forward {seektime}s",
          seek: "Seek",
          seekLabel: "{currentTime} of {duration}",
          played: "Played",
          buffered: "Buffered",
          currentTime: "Current time",
          duration: "Duration",
          volume: "Volume",
          mute: "Mute",
          unmute: "Unmute",
          enableCaptions: "Enable captions",
          disableCaptions: "Disable captions",
          download: "Download",
          enterFullscreen: "Enter fullscreen",
          exitFullscreen: "Exit fullscreen",
          frameTitle: "Player for {title}",
          captions: "Captions",
          settings: "Settings",
          pip: "PIP",
          menuBack: "Go back to previous menu",
          speed: "Speed",
          normal: "Normal",
          quality: "Quality",
          loop: "Loop",
          start: "Start",
          end: "End",
          all: "All",
          reset: "Reset",
          disabled: "Disabled",
          enabled: "Enabled",
          advertisement: "Ad",
          qualityBadge: {
            2160: "4K",
            1440: "HD",
            1080: "HD",
            720: "HD",
            576: "SD",
            480: "SD"
          }
        },
        urls: {
          download: null,
          vimeo: {
            sdk: "https://player.vimeo.com/api/player.js",
            iframe: "https://player.vimeo.com/video/{0}?{1}",
            api: "https://vimeo.com/api/oembed.json?url={0}"
          },
          youtube: {
            sdk: "https://www.youtube.com/iframe_api",
            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
          },
          googleIMA: {
            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
          }
        },
        listeners: {
          seek: null,
          play: null,
          pause: null,
          restart: null,
          rewind: null,
          fastForward: null,
          mute: null,
          volume: null,
          captions: null,
          download: null,
          fullscreen: null,
          pip: null,
          airplay: null,
          speed: null,
          quality: null,
          loop: null,
          language: null
        },
        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
        selectors: {
          editable: "input, textarea, select, [contenteditable]",
          container: ".plyr",
          controls: {
            container: null,
            wrapper: ".plyr__controls"
          },
          labels: "[data-plyr]",
          buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            download: '[data-plyr="download"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]'
          },
          inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]'
          },
          display: {
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration",
            buffer: ".plyr__progress__buffer",
            loop: ".plyr__progress__loop",
            volume: ".plyr__volume--display"
          },
          progress: ".plyr__progress",
          captions: ".plyr__captions",
          caption: ".plyr__caption"
        },
        classNames: {
          type: "plyr--{0}",
          provider: "plyr--{0}",
          video: "plyr__video-wrapper",
          embed: "plyr__video-embed",
          videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
          embedContainer: "plyr__video-embed__container",
          poster: "plyr__poster",
          posterEnabled: "plyr__poster-enabled",
          ads: "plyr__ads",
          control: "plyr__control",
          controlPressed: "plyr__control--pressed",
          playing: "plyr--playing",
          paused: "plyr--paused",
          stopped: "plyr--stopped",
          loading: "plyr--loading",
          hover: "plyr--hover",
          tooltip: "plyr__tooltip",
          cues: "plyr__cues",
          hidden: "plyr__sr-only",
          hideControls: "plyr--hide-controls",
          isIos: "plyr--is-ios",
          isTouch: "plyr--is-touch",
          uiSupported: "plyr--full-ui",
          noTransition: "plyr--no-transition",
          display: {
            time: "plyr__time"
          },
          menu: {
            value: "plyr__menu__value",
            badge: "plyr__badge",
            open: "plyr--menu-open"
          },
          captions: {
            enabled: "plyr--captions-enabled",
            active: "plyr--captions-active"
          },
          fullscreen: {
            enabled: "plyr--fullscreen-enabled",
            fallback: "plyr--fullscreen-fallback"
          },
          pip: {
            supported: "plyr--pip-supported",
            active: "plyr--pip-active"
          },
          airplay: {
            supported: "plyr--airplay-supported",
            active: "plyr--airplay-active"
          },
          tabFocus: "plyr__tab-focus",
          previewThumbnails: {
            thumbContainer: "plyr__preview-thumb",
            thumbContainerShown: "plyr__preview-thumb--is-shown",
            imageContainer: "plyr__preview-thumb__image-container",
            timeContainer: "plyr__preview-thumb__time-container",
            scrubbingContainer: "plyr__preview-scrubbing",
            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
          }
        },
        attributes: {
          embed: {
            provider: "data-plyr-provider",
            id: "data-plyr-embed-id"
          }
        },
        ads: {
          enabled: !1,
          publisherId: "",
          tagUrl: ""
        },
        previewThumbnails: {
          enabled: !1,
          src: ""
        },
        vimeo: {
          byline: !1,
          portrait: !1,
          title: !1,
          speed: !0,
          transparent: !1,
          customControls: !0,
          referrerPolicy: null,
          premium: !1
        },
        youtube: {
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          customControls: !0,
          noCookie: !1
        }
      },
          rt = "picture-in-picture",
          ot = {
        html5: "html5",
        youtube: "youtube",
        vimeo: "vimeo"
      },
          st = function st() {},
          lt = function () {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          n(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled");
        }

        return a(e, [{
          key: "log",
          get: function get() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : st;
          }
        }, {
          key: "warn",
          get: function get() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : st;
          }
        }, {
          key: "error",
          get: function get() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : st;
          }
        }]), e;
      }(),
          ct = function () {
        function e(t) {
          var i = this;
          n(this, e), r(this, "onChange", function () {
            if (i.enabled) {
              var e = i.player.elements.buttons.fullscreen;
              X(e) && (e.pressed = i.active);
              var t = i.target === i.player.media ? i.target : i.player.elements.container;
              Ne.call(i.player, t, i.active ? "enterfullscreen" : "exitfullscreen", !0);
            }
          }), r(this, "toggleFallback", function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

            if (e ? i.scrollPosition = {
              x: window.scrollX || 0,
              y: window.scrollY || 0
            } : window.scrollTo(i.scrollPosition.x, i.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", ge(i.target, i.player.config.classNames.fullscreen.fallback, e), ae.isIos) {
              var t = document.head.querySelector('meta[name="viewport"]'),
                  n = "viewport-fit=cover";
              t || (t = document.createElement("meta")).setAttribute("name", "viewport");
              var a = z(t.content) && t.content.includes(n);
              e ? (i.cleanupViewport = !a, a || (t.content += ",".concat(n))) : i.cleanupViewport && (t.content = t.content.split(",").filter(function (e) {
                return e.trim() !== n;
              }).join(","));
            }

            i.onChange();
          }), r(this, "trapFocus", function (e) {
            if (!ae.isIos && i.active && "Tab" === e.key && 9 === e.keyCode) {
              var t = document.activeElement,
                  n = ve.call(i.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                  a = l(n, 1)[0],
                  r = n[n.length - 1];
              t !== r || e.shiftKey ? t === a && e.shiftKey && (r.focus(), e.preventDefault()) : (a.focus(), e.preventDefault());
            }
          }), r(this, "update", function () {
            var t;
            i.enabled ? (t = i.forceFallback ? "Fallback (forced)" : e.native ? "Native" : "Fallback", i.player.debug.log("".concat(t, " fullscreen enabled"))) : i.player.debug.log("Fullscreen not supported and fallback disabled"), ge(i.player.elements.container, i.player.config.classNames.fullscreen.enabled, i.enabled);
          }), r(this, "enter", function () {
            i.enabled && (ae.isIos && i.player.config.fullscreen.iosNative ? i.player.isVimeo ? i.player.embed.requestFullscreen() : i.target.webkitEnterFullscreen() : !e.native || i.forceFallback ? i.toggleFallback(!0) : i.prefix ? te(i.prefix) || i.target["".concat(i.prefix, "Request").concat(i.property)]() : i.target.requestFullscreen({
              navigationUI: "hide"
            }));
          }), r(this, "exit", function () {
            if (i.enabled) if (ae.isIos && i.player.config.fullscreen.iosNative) i.target.webkitExitFullscreen(), Le(i.player.play());else if (!e.native || i.forceFallback) i.toggleFallback(!1);else if (i.prefix) {
              if (!te(i.prefix)) {
                var t = "moz" === i.prefix ? "Cancel" : "Exit";
                document["".concat(i.prefix).concat(t).concat(i.property)]();
              }
            } else (document.cancelFullScreen || document.exitFullscreen).call(document);
          }), r(this, "toggle", function () {
            i.active ? i.exit() : i.enter();
          }), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
            x: 0,
            y: 0
          }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function (e, t) {
            return (Element.prototype.closest || function () {
              var e = this;

              do {
                if (be.matches(e, t)) return e;
                e = e.parentElement || e.parentNode;
              } while (null !== e && 1 === e.nodeType);

              return null;
            }).call(e, t);
          }(this.player.elements.container, t.config.fullscreen.container), Ee.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
            i.onChange();
          }), Ee.call(this.player, this.player.elements.container, "dblclick", function (e) {
            X(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.player.listeners.proxy(e, i.toggle, "fullscreen");
          }), Ee.call(this, this.player.elements.container, "keydown", function (e) {
            return i.trapFocus(e);
          }), this.update();
        }

        return a(e, [{
          key: "usingNative",
          get: function get() {
            return e.native && !this.forceFallback;
          }
        }, {
          key: "enabled",
          get: function get() {
            return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
          }
        }, {
          key: "active",
          get: function get() {
            if (!this.enabled) return !1;
            if (!e.native || this.forceFallback) return ye(this.target, this.player.config.classNames.fullscreen.fallback);
            var t = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
            return t && t.shadowRoot ? t === this.target.getRootNode().host : t === this.target;
          }
        }, {
          key: "target",
          get: function get() {
            return ae.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
          }
        }], [{
          key: "native",
          get: function get() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
          }
        }, {
          key: "prefix",
          get: function get() {
            if (Y(document.exitFullscreen)) return "";
            var e = "";
            return ["webkit", "moz", "ms"].some(function (t) {
              return !(!Y(document["".concat(t, "ExitFullscreen")]) && !Y(document["".concat(t, "CancelFullScreen")]) || (e = t, 0));
            }), e;
          }
        }, {
          key: "property",
          get: function get() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
          }
        }]), e;
      }();

      function ut(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Promise(function (n, i) {
          var a = new Image(),
              r = function r() {
            delete a.onload, delete a.onerror, (a.naturalWidth >= t ? n : i)(a);
          };

          Object.assign(a, {
            onload: r,
            onerror: r,
            src: e
          });
        });
      }

      var dt = {
        addStyleHook: function addStyleHook() {
          ge(this.elements.container, this.config.selectors.container.replace(".", ""), !0), ge(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        },
        toggleNativeControls: function toggleNativeControls() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        },
        build: function build() {
          var e = this;
          if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void dt.toggleNativeControls.call(this, !0);
          X(this.elements.controls) || (et.inject.call(this), this.listeners.controls()), dt.toggleNativeControls.call(this), this.isHTML5 && it.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, et.updateVolume.call(this), et.timeUpdate.call(this), dt.checkPlaying.call(this), ge(this.elements.container, this.config.classNames.pip.supported, Ae.pip && this.isHTML5 && this.isVideo), ge(this.elements.container, this.config.classNames.airplay.supported, Ae.airplay && this.isHTML5), ge(this.elements.container, this.config.classNames.isIos, ae.isIos), ge(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
            Ne.call(e, e.media, "ready");
          }, 0), dt.setTitle.call(this), this.poster && dt.setPoster.call(this, this.poster, !1).catch(function () {}), this.config.duration && et.durationUpdate.call(this);
        },
        setTitle: function setTitle() {
          var e = Ke("play", this.config);

          if (z(this.config.title) && !te(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t) {
            t.setAttribute("aria-label", e);
          }), this.isEmbed) {
            var t = we.call(this, "iframe");
            if (!X(t)) return;
            var n = te(this.config.title) ? "video" : this.config.title,
                i = Ke("frameTitle", this.config);
            t.setAttribute("title", i.replace("{title}", n));
          }
        },
        togglePoster: function togglePoster(e) {
          ge(this.elements.container, this.config.classNames.posterEnabled, e);
        },
        setPoster: function setPoster(e) {
          var t = this,
              n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return n && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), Oe.call(this).then(function () {
            return ut(e);
          }).catch(function (n) {
            throw e === t.poster && dt.togglePoster.call(t, !1), n;
          }).then(function () {
            if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster");
          }).then(function () {
            return Object.assign(t.elements.poster.style, {
              backgroundImage: "url('".concat(e, "')"),
              backgroundSize: ""
            }), dt.togglePoster.call(t, !0), e;
          }));
        },
        checkPlaying: function checkPlaying(e) {
          var t = this;
          ge(this.elements.container, this.config.classNames.playing, this.playing), ge(this.elements.container, this.config.classNames.paused, this.paused), ge(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
            Object.assign(e, {
              pressed: t.playing
            }), e.setAttribute("aria-label", Ke(t.playing ? "pause" : "play", t.config));
          }), J(e) && "timeupdate" === e.type || dt.toggleControls.call(this);
        },
        checkLoading: function checkLoading(e) {
          var t = this;
          this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
            ge(t.elements.container, t.config.classNames.loading, t.loading), dt.toggleControls.call(t);
          }, this.loading ? 250 : 0);
        },
        toggleControls: function toggleControls(e) {
          var t = this.elements.controls;

          if (t && this.config.hideControls) {
            var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n));
          }
        },
        migrateStyles: function migrateStyles() {
          var e = this;
          Object.values(s({}, this.media.style)).filter(function (e) {
            return !te(e) && z(e) && e.startsWith("--plyr");
          }).forEach(function (t) {
            e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t);
          }), te(this.media.style) && this.media.removeAttribute("style");
        }
      },
          ht = function () {
        function e(t) {
          var i = this;
          n(this, e), r(this, "firstTouch", function () {
            var e = i.player,
                t = e.elements;
            e.touch = !0, ge(t.container, e.config.classNames.isTouch, !0);
          }), r(this, "setTabFocus", function (e) {
            var t = i.player,
                n = t.elements;

            if (clearTimeout(i.focusTimer), "keydown" !== e.type || 9 === e.which) {
              "keydown" === e.type && (i.lastKeyDown = e.timeStamp);
              var a,
                  r = e.timeStamp - i.lastKeyDown <= 20;
              ("focus" !== e.type || r) && (a = t.config.classNames.tabFocus, ge(ve.call(t, ".".concat(a)), a, !1), "focusout" !== e.type && (i.focusTimer = setTimeout(function () {
                var e = document.activeElement;
                n.container.contains(e) && ge(document.activeElement, t.config.classNames.tabFocus, !0);
              }, 10)));
            }
          }), r(this, "global", function () {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = i.player;
            t.config.keyboard.global && Pe.call(t, window, "keydown keyup", i.handleKey, e, !1), Pe.call(t, document.body, "click", i.toggleMenu, e), Me.call(t, document.body, "touchstart", i.firstTouch), Pe.call(t, document.body, "keydown focus blur focusout", i.setTabFocus, e, !1, !0);
          }), r(this, "container", function () {
            var e = i.player,
                t = e.config,
                n = e.elements,
                a = e.timers;
            !t.keyboard.global && t.keyboard.focused && Ee.call(e, n.container, "keydown keyup", i.handleKey, !1), Ee.call(e, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
              var i = n.controls;
              i && "enterfullscreen" === t.type && (i.pressed = !1, i.hover = !1);
              var r = 0;
              ["touchstart", "touchmove", "mousemove"].includes(t.type) && (dt.toggleControls.call(e, !0), r = e.touch ? 3e3 : 2e3), clearTimeout(a.controls), a.controls = setTimeout(function () {
                return dt.toggleControls.call(e, !1);
              }, r);
            });

            var r = function r(t) {
              if (!t) return De.call(e);
              var i = n.container.getBoundingClientRect(),
                  a = i.width,
                  r = i.height;
              return De.call(e, "".concat(a, ":").concat(r));
            },
                o = function o() {
              clearTimeout(a.resized), a.resized = setTimeout(r, 50);
            };

            Ee.call(e, n.container, "enterfullscreen exitfullscreen", function (t) {
              var i = e.fullscreen,
                  a = i.target,
                  s = i.usingNative;

              if (a === n.container && (e.isEmbed || !te(e.config.ratio))) {
                var c = "enterfullscreen" === t.type,
                    u = r(c);
                u.padding, function (t, n, i) {
                  if (e.isVimeo && !e.config.vimeo.premium) {
                    var a = e.elements.wrapper.firstChild,
                        r = l(t, 2)[1],
                        o = l(qe.call(e), 2),
                        s = o[0],
                        c = o[1];
                    a.style.maxWidth = i ? "".concat(r / c * s, "px") : null, a.style.margin = i ? "0 auto" : null;
                  }
                }(u.ratio, 0, c), c && setTimeout(function () {
                  return ie(n.container);
                }, 100), s || (c ? Ee.call(e, window, "resize", o) : xe.call(e, window, "resize", o));
              }
            });
          }), r(this, "media", function () {
            var e = i.player,
                t = e.elements;

            if (Ee.call(e, e.media, "timeupdate seeking seeked", function (t) {
              return et.timeUpdate.call(e, t);
            }), Ee.call(e, e.media, "durationchange loadeddata loadedmetadata", function (t) {
              return et.durationUpdate.call(e, t);
            }), Ee.call(e, e.media, "ended", function () {
              e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause());
            }), Ee.call(e, e.media, "progress playing seeking seeked", function (t) {
              return et.updateProgress.call(e, t);
            }), Ee.call(e, e.media, "volumechange", function (t) {
              return et.updateVolume.call(e, t);
            }), Ee.call(e, e.media, "playing play pause ended emptied timeupdate", function (t) {
              return dt.checkPlaying.call(e, t);
            }), Ee.call(e, e.media, "waiting canplay seeked playing", function (t) {
              return dt.checkLoading.call(e, t);
            }), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
              var n = we.call(e, ".".concat(e.config.classNames.video));
              if (!X(n)) return;
              Ee.call(e, t.container, "click", function (a) {
                ([t.container, n].includes(a.target) || n.contains(a.target)) && (e.touch && e.config.hideControls || (e.ended ? (i.proxy(a, e.restart, "restart"), i.proxy(a, function () {
                  Le(e.play());
                }, "play")) : i.proxy(a, function () {
                  Le(e.togglePlay());
                }, "play")));
              });
            }

            e.supported.ui && e.config.disableContextMenu && Ee.call(e, t.wrapper, "contextmenu", function (e) {
              e.preventDefault();
            }, !1), Ee.call(e, e.media, "volumechange", function () {
              e.storage.set({
                volume: e.volume,
                muted: e.muted
              });
            }), Ee.call(e, e.media, "ratechange", function () {
              et.updateSetting.call(e, "speed"), e.storage.set({
                speed: e.speed
              });
            }), Ee.call(e, e.media, "qualitychange", function (t) {
              et.updateSetting.call(e, "quality", null, t.detail.quality);
            }), Ee.call(e, e.media, "ready qualitychange", function () {
              et.setDownloadUrl.call(e);
            });
            var a = e.config.events.concat(["keyup", "keydown"]).join(" ");
            Ee.call(e, e.media, a, function (n) {
              var i = n.detail,
                  a = void 0 === i ? {} : i;
              "error" === n.type && (a = e.media.error), Ne.call(e, t.container, n.type, !0, a);
            });
          }), r(this, "proxy", function (e, t, n) {
            var a = i.player,
                r = a.config.listeners[n],
                o = !0;
            Y(r) && (o = r.call(a, e)), !1 !== o && Y(t) && t.call(a, e);
          }), r(this, "bind", function (e, t, n, a) {
            var r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                o = i.player,
                s = o.config.listeners[a],
                l = Y(s);
            Ee.call(o, e, t, function (e) {
              return i.proxy(e, n, a);
            }, r && !l);
          }), r(this, "controls", function () {
            var e = i.player,
                t = e.elements,
                n = ae.isIE ? "change" : "input";

            if (t.buttons.play && Array.from(t.buttons.play).forEach(function (t) {
              i.bind(t, "click", function () {
                Le(e.togglePlay());
              }, "play");
            }), i.bind(t.buttons.restart, "click", e.restart, "restart"), i.bind(t.buttons.rewind, "click", function () {
              e.lastSeekTime = Date.now(), e.rewind();
            }, "rewind"), i.bind(t.buttons.fastForward, "click", function () {
              e.lastSeekTime = Date.now(), e.forward();
            }, "fastForward"), i.bind(t.buttons.mute, "click", function () {
              e.muted = !e.muted;
            }, "mute"), i.bind(t.buttons.captions, "click", function () {
              return e.toggleCaptions();
            }), i.bind(t.buttons.download, "click", function () {
              Ne.call(e, e.media, "download");
            }, "download"), i.bind(t.buttons.fullscreen, "click", function () {
              e.fullscreen.toggle();
            }, "fullscreen"), i.bind(t.buttons.pip, "click", function () {
              e.pip = "toggle";
            }, "pip"), i.bind(t.buttons.airplay, "click", e.airplay, "airplay"), i.bind(t.buttons.settings, "click", function (t) {
              t.stopPropagation(), t.preventDefault(), et.toggleMenu.call(e, t);
            }, null, !1), i.bind(t.buttons.settings, "keyup", function (t) {
              var n = t.which;
              [13, 32].includes(n) && (13 !== n ? (t.preventDefault(), t.stopPropagation(), et.toggleMenu.call(e, t)) : et.focusFirstMenuItem.call(e, null, !0));
            }, null, !1), i.bind(t.settings.menu, "keydown", function (t) {
              27 === t.which && et.toggleMenu.call(e, t);
            }), i.bind(t.inputs.seek, "mousedown mousemove", function (e) {
              var n = t.progress.getBoundingClientRect(),
                  i = 100 / n.width * (e.pageX - n.left);
              e.currentTarget.setAttribute("seek-value", i);
            }), i.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (t) {
              var n = t.currentTarget,
                  i = t.keyCode ? t.keyCode : t.which,
                  a = "play-on-seeked";

              if (!G(t) || 39 === i || 37 === i) {
                e.lastSeekTime = Date.now();
                var r = n.hasAttribute(a),
                    o = ["mouseup", "touchend", "keyup"].includes(t.type);
                r && o ? (n.removeAttribute(a), Le(e.play())) : !o && e.playing && (n.setAttribute(a, ""), e.pause());
              }
            }), ae.isIos) {
              var a = ve.call(e, 'input[type="range"]');
              Array.from(a).forEach(function (e) {
                return i.bind(e, n, function (e) {
                  return ie(e.target);
                });
              });
            }

            i.bind(t.inputs.seek, n, function (t) {
              var n = t.currentTarget,
                  i = n.getAttribute("seek-value");
              te(i) && (i = n.value), n.removeAttribute("seek-value"), e.currentTime = i / n.max * e.duration;
            }, "seek"), i.bind(t.progress, "mouseenter mouseleave mousemove", function (t) {
              return et.updateSeekTooltip.call(e, t);
            }), i.bind(t.progress, "mousemove touchmove", function (t) {
              var n = e.previewThumbnails;
              n && n.loaded && n.startMove(t);
            }), i.bind(t.progress, "mouseleave touchend click", function () {
              var t = e.previewThumbnails;
              t && t.loaded && t.endMove(!1, !0);
            }), i.bind(t.progress, "mousedown touchstart", function (t) {
              var n = e.previewThumbnails;
              n && n.loaded && n.startScrubbing(t);
            }), i.bind(t.progress, "mouseup touchend", function (t) {
              var n = e.previewThumbnails;
              n && n.loaded && n.endScrubbing(t);
            }), ae.isWebkit && Array.from(ve.call(e, 'input[type="range"]')).forEach(function (t) {
              i.bind(t, "input", function (t) {
                return et.updateRangeFill.call(e, t.target);
              });
            }), e.config.toggleInvert && !X(t.display.duration) && i.bind(t.display.currentTime, "click", function () {
              0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, et.timeUpdate.call(e));
            }), i.bind(t.inputs.volume, n, function (t) {
              e.volume = t.target.value;
            }, "volume"), i.bind(t.controls, "mouseenter mouseleave", function (n) {
              t.controls.hover = !e.touch && "mouseenter" === n.type;
            }), t.fullscreen && Array.from(t.fullscreen.children).filter(function (e) {
              return !e.contains(t.container);
            }).forEach(function (n) {
              i.bind(n, "mouseenter mouseleave", function (n) {
                t.controls.hover = !e.touch && "mouseenter" === n.type;
              });
            }), i.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
              t.controls.pressed = ["mousedown", "touchstart"].includes(e.type);
            }), i.bind(t.controls, "focusin", function () {
              var n = e.config,
                  a = e.timers;
              ge(t.controls, n.classNames.noTransition, !0), dt.toggleControls.call(e, !0), setTimeout(function () {
                ge(t.controls, n.classNames.noTransition, !1);
              }, 0);
              var r = i.touch ? 3e3 : 4e3;
              clearTimeout(a.controls), a.controls = setTimeout(function () {
                return dt.toggleControls.call(e, !1);
              }, r);
            }), i.bind(t.inputs.volume, "wheel", function (t) {
              var n = t.webkitDirectionInvertedFromDevice,
                  i = l([t.deltaX, -t.deltaY].map(function (e) {
                return n ? -e : e;
              }), 2),
                  a = i[0],
                  r = i[1],
                  o = Math.sign(Math.abs(a) > Math.abs(r) ? a : r);
              e.increaseVolume(o / 50);
              var s = e.media.volume;
              (1 === o && s < 1 || -1 === o && s > 0) && t.preventDefault();
            }, "volume", !1);
          }), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
        }

        return a(e, [{
          key: "handleKey",
          value: function value(e) {
            var t = this.player,
                n = t.elements,
                i = e.keyCode ? e.keyCode : e.which,
                a = "keydown" === e.type,
                r = a && i === this.lastKey;
            if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && W(i)) if (a) {
              var o = document.activeElement;

              if (X(o)) {
                var s = t.config.selectors.editable;
                if (o !== n.inputs.seek && be(o, s)) return;
                if (32 === e.which && be(o, 'button, [role^="menuitem"]')) return;
              }

              switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                  r || (t.currentTime = t.duration / 10 * (i - 48));
                  break;

                case 32:
                case 75:
                  r || Le(t.togglePlay());
                  break;

                case 38:
                  t.increaseVolume(.1);
                  break;

                case 40:
                  t.decreaseVolume(.1);
                  break;

                case 77:
                  r || (t.muted = !t.muted);
                  break;

                case 39:
                  t.forward();
                  break;

                case 37:
                  t.rewind();
                  break;

                case 70:
                  t.fullscreen.toggle();
                  break;

                case 67:
                  r || t.toggleCaptions();
                  break;

                case 76:
                  t.loop = !t.loop;
              }

              27 === i && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = i;
            } else this.lastKey = null;
          }
        }, {
          key: "toggleMenu",
          value: function value(e) {
            et.toggleMenu.call(this.player, e);
          }
        }]), e;
      }();

      "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;

      var mt = function (e, t) {
        return function (e, t) {
          e.exports = function () {
            var e = function e() {},
                t = {},
                n = {},
                i = {};

            function a(e, t) {
              if (e) {
                var a = i[e];
                if (n[e] = t, a) for (; a.length;) {
                  a[0](e, t), a.splice(0, 1);
                }
              }
            }

            function r(t, n) {
              t.call && (t = {
                success: t
              }), n.length ? (t.error || e)(n) : (t.success || e)(t);
            }

            function o(t, n, i, a) {
              var r,
                  s,
                  l = document,
                  c = i.async,
                  u = (i.numRetries || 0) + 1,
                  d = i.before || e,
                  h = t.replace(/[\?|#].*$/, ""),
                  m = t.replace(/^(css|img)!/, "");
              a = a || 0, /(^css!|\.css$)/.test(h) ? ((s = l.createElement("link")).rel = "stylesheet", s.href = m, (r = "hideFocus" in s) && s.relList && (r = 0, s.rel = "preload", s.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (s = l.createElement("img")).src = m : ((s = l.createElement("script")).src = t, s.async = void 0 === c || c), s.onload = s.onerror = s.onbeforeload = function (e) {
                var l = e.type[0];
                if (r) try {
                  s.sheet.cssText.length || (l = "e");
                } catch (e) {
                  18 != e.code && (l = "e");
                }

                if ("e" == l) {
                  if ((a += 1) < u) return o(t, n, i, a);
                } else if ("preload" == s.rel && "style" == s.as) return s.rel = "stylesheet";

                n(t, l, e.defaultPrevented);
              }, !1 !== d(t, s) && l.head.appendChild(s);
            }

            function s(e, t, n) {
              var i,
                  a,
                  r = (e = e.push ? e : [e]).length,
                  s = r,
                  l = [];

              for (i = function i(e, n, _i) {
                if ("e" == n && l.push(e), "b" == n) {
                  if (!_i) return;
                  l.push(e);
                }

                --r || t(l);
              }, a = 0; a < s; a++) {
                o(e[a], i, n);
              }
            }

            function l(e, n, i) {
              var o, l;

              if (n && n.trim && (o = n), l = (o ? i : n) || {}, o) {
                if (o in t) throw "LoadJS";
                t[o] = !0;
              }

              function c(t, n) {
                s(e, function (e) {
                  r(l, e), t && r({
                    success: t,
                    error: n
                  }, e), a(o, e);
                }, l);
              }

              if (l.returnPromise) return new Promise(c);
              c();
            }

            return l.ready = function (e, t) {
              return function (e, t) {
                e = e.push ? e : [e];
                var a,
                    r,
                    o,
                    s = [],
                    l = e.length,
                    c = l;

                for (a = function a(e, n) {
                  n.length && s.push(e), --c || t(s);
                }; l--;) {
                  r = e[l], (o = n[r]) ? a(r, o) : (i[r] = i[r] || []).push(a);
                }
              }(e, function (e) {
                r(t, e);
              }), l;
            }, l.done = function (e) {
              a(e, []);
            }, l.reset = function () {
              t = {}, n = {}, i = {};
            }, l.isDefined = function (e) {
              return e in t;
            }, l;
          }();
        }(t = {
          exports: {}
        }), t.exports;
      }();

      function pt(e) {
        return new Promise(function (t, n) {
          mt(e, {
            success: t,
            error: n
          });
        });
      }

      function ft(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Ne.call(this, this.media, e ? "play" : "pause"));
      }

      var gt = {
        setup: function setup() {
          var e = this;
          ge(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, De.call(e), U(window.Vimeo) ? gt.ready.call(e) : pt(e.config.urls.vimeo.sdk).then(function () {
            gt.ready.call(e);
          }).catch(function (t) {
            e.debug.warn("Vimeo SDK (player.js) failed to load", t);
          });
        },
        ready: function ready() {
          var e = this,
              t = this,
              n = t.config.vimeo,
              i = n.premium,
              a = n.referrerPolicy,
              r = function (e, t) {
            if (null == e) return {};

            var n,
                i,
                a = function (e, t) {
              if (null == e) return {};
              var n,
                  i,
                  a = {},
                  r = Object.keys(e);

              for (i = 0; i < r.length; i++) {
                n = r[i], t.indexOf(n) >= 0 || (a[n] = e[n]);
              }

              return a;
            }(e, t);

            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);

              for (i = 0; i < r.length; i++) {
                n = r[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
              }
            }

            return a;
          }(n, ["premium", "referrerPolicy"]);

          i && Object.assign(r, {
            controls: !1,
            sidedock: !1
          });
          var o = nt(s({
            loop: t.config.loop.active,
            autoplay: t.autoplay,
            muted: t.muted,
            gesture: "media",
            playsinline: !this.config.fullscreen.iosNative
          }, r)),
              c = t.media.getAttribute("src");
          te(c) && (c = t.media.getAttribute(t.config.attributes.embed.id));
          var u,
              d = te(u = c) ? null : W(Number(u)) ? u : u.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u,
              h = ce("iframe"),
              m = Re(t.config.urls.vimeo.iframe, d, o);
          if (h.setAttribute("src", m), h.setAttribute("allowfullscreen", ""), h.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture"].join("; ")), te(a) || h.setAttribute("referrerPolicy", a), i || !n.customControls) h.setAttribute("data-poster", t.poster), t.media = me(h, t.media);else {
            var p = ce("div", {
              class: t.config.classNames.embedContainer,
              "data-poster": t.poster
            });
            p.appendChild(h), t.media = me(p, t.media);
          }
          n.customControls || Qe(Re(t.config.urls.vimeo.api, m)).then(function (e) {
            !te(e) && e.thumbnail_url && dt.setPoster.call(t, e.thumbnail_url).catch(function () {});
          }), t.embed = new window.Vimeo.Player(h, {
            autopause: t.config.autopause,
            muted: t.muted
          }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
            return ft.call(t, !0), t.embed.play();
          }, t.media.pause = function () {
            return ft.call(t, !1), t.embed.pause();
          }, t.media.stop = function () {
            t.pause(), t.currentTime = 0;
          };
          var f = t.media.currentTime;
          Object.defineProperty(t.media, "currentTime", {
            get: function get() {
              return f;
            },
            set: function set(e) {
              var n = t.embed,
                  i = t.media,
                  a = t.paused,
                  r = t.volume,
                  o = a && !n.hasPlayed;
              i.seeking = !0, Ne.call(t, i, "seeking"), Promise.resolve(o && n.setVolume(0)).then(function () {
                return n.setCurrentTime(e);
              }).then(function () {
                return o && n.pause();
              }).then(function () {
                return o && n.setVolume(r);
              }).catch(function () {});
            }
          });
          var g = t.config.speed.selected;
          Object.defineProperty(t.media, "playbackRate", {
            get: function get() {
              return g;
            },
            set: function set(e) {
              t.embed.setPlaybackRate(e).then(function () {
                g = e, Ne.call(t, t.media, "ratechange");
              }).catch(function () {
                t.options.speed = [1];
              });
            }
          });
          var y = t.config.volume;
          Object.defineProperty(t.media, "volume", {
            get: function get() {
              return y;
            },
            set: function set(e) {
              t.embed.setVolume(e).then(function () {
                y = e, Ne.call(t, t.media, "volumechange");
              });
            }
          });
          var b = t.config.muted;
          Object.defineProperty(t.media, "muted", {
            get: function get() {
              return b;
            },
            set: function set(e) {
              var n = !!K(e) && e;
              t.embed.setVolume(n ? 0 : t.config.volume).then(function () {
                b = n, Ne.call(t, t.media, "volumechange");
              });
            }
          });
          var v,
              w = t.config.loop;
          Object.defineProperty(t.media, "loop", {
            get: function get() {
              return w;
            },
            set: function set(e) {
              var n = K(e) ? e : t.config.loop.active;
              t.embed.setLoop(n).then(function () {
                w = n;
              });
            }
          }), t.embed.getVideoUrl().then(function (e) {
            v = e, et.setDownloadUrl.call(t);
          }).catch(function (t) {
            e.debug.warn(t);
          }), Object.defineProperty(t.media, "currentSrc", {
            get: function get() {
              return v;
            }
          }), Object.defineProperty(t.media, "ended", {
            get: function get() {
              return t.currentTime === t.duration;
            }
          }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (n) {
            var i = l(n, 2),
                a = i[0],
                r = i[1];
            t.embed.ratio = [a, r], De.call(e);
          }), t.embed.setAutopause(t.config.autopause).then(function (e) {
            t.config.autopause = e;
          }), t.embed.getVideoTitle().then(function (n) {
            t.config.title = n, dt.setTitle.call(e);
          }), t.embed.getCurrentTime().then(function (e) {
            f = e, Ne.call(t, t.media, "timeupdate");
          }), t.embed.getDuration().then(function (e) {
            t.media.duration = e, Ne.call(t, t.media, "durationchange");
          }), t.embed.getTextTracks().then(function (e) {
            t.media.textTracks = e, it.setup.call(t);
          }), t.embed.on("cuechange", function (e) {
            var n = e.cues,
                i = (void 0 === n ? [] : n).map(function (e) {
              return function (e) {
                var t = document.createDocumentFragment(),
                    n = document.createElement("div");
                return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText;
              }(e.text);
            });
            it.updateCues.call(t, i);
          }), t.embed.on("loaded", function () {
            t.embed.getPaused().then(function (e) {
              ft.call(t, !e), e || Ne.call(t, t.media, "playing");
            }), X(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1);
          }), t.embed.on("bufferstart", function () {
            Ne.call(t, t.media, "waiting");
          }), t.embed.on("bufferend", function () {
            Ne.call(t, t.media, "playing");
          }), t.embed.on("play", function () {
            ft.call(t, !0), Ne.call(t, t.media, "playing");
          }), t.embed.on("pause", function () {
            ft.call(t, !1);
          }), t.embed.on("timeupdate", function (e) {
            t.media.seeking = !1, f = e.seconds, Ne.call(t, t.media, "timeupdate");
          }), t.embed.on("progress", function (e) {
            t.media.buffered = e.percent, Ne.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Ne.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
              e !== t.media.duration && (t.media.duration = e, Ne.call(t, t.media, "durationchange"));
            });
          }), t.embed.on("seeked", function () {
            t.media.seeking = !1, Ne.call(t, t.media, "seeked");
          }), t.embed.on("ended", function () {
            t.media.paused = !0, Ne.call(t, t.media, "ended");
          }), t.embed.on("error", function (e) {
            t.media.error = e, Ne.call(t, t.media, "error");
          }), n.customControls && setTimeout(function () {
            return dt.build.call(t);
          }, 0);
        }
      };

      function yt(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Ne.call(this, this.media, e ? "play" : "pause"));
      }

      function bt(e) {
        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
      }

      var vt,
          wt = {
        setup: function setup() {
          var e = this;
          if (ge(this.elements.wrapper, this.config.classNames.embed, !0), U(window.YT) && Y(window.YT.Player)) wt.ready.call(this);else {
            var t = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = function () {
              Y(t) && t(), wt.ready.call(e);
            }, pt(this.config.urls.youtube.sdk).catch(function (t) {
              e.debug.warn("YouTube API failed to load", t);
            });
          }
        },
        getTitle: function getTitle(e) {
          var t = this;
          Qe(Re(this.config.urls.youtube.api, e)).then(function (e) {
            if (U(e)) {
              var n = e.title,
                  i = e.height,
                  a = e.width;
              t.config.title = n, dt.setTitle.call(t), t.embed.ratio = [a, i];
            }

            De.call(t);
          }).catch(function () {
            De.call(t);
          });
        },
        ready: function ready() {
          var e = this,
              t = e.config.youtube,
              n = e.media && e.media.getAttribute("id");

          if (te(n) || !n.startsWith("youtube-")) {
            var i = e.media.getAttribute("src");
            te(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
            var a,
                r,
                o = te(a = i) ? null : a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a,
                s = ce("div", {
              id: (r = e.provider, "".concat(r, "-").concat(Math.floor(1e4 * Math.random()))),
              "data-poster": t.customControls ? e.poster : void 0
            });

            if (e.media = me(s, e.media), t.customControls) {
              var l = function l(e) {
                return "https://i.ytimg.com/vi/".concat(o, "/").concat(e, "default.jpg");
              };

              ut(l("maxres"), 121).catch(function () {
                return ut(l("sd"), 121);
              }).catch(function () {
                return ut(l("hq"));
              }).then(function (t) {
                return dt.setPoster.call(e, t.src);
              }).then(function (t) {
                t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
              }).catch(function () {});
            }

            e.embed = new window.YT.Player(e.media, {
              videoId: o,
              host: bt(t),
              playerVars: oe({}, {
                autoplay: e.config.autoplay ? 1 : 0,
                hl: e.config.hl,
                controls: e.supported.ui && t.customControls ? 0 : 1,
                disablekb: 1,
                playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                cc_load_policy: e.captions.active ? 1 : 0,
                cc_lang_pref: e.config.captions.language,
                widget_referrer: window ? window.location.href : null
              }, t),
              events: {
                onError: function onError(t) {
                  if (!e.media.error) {
                    var n = t.data,
                        i = {
                      2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                      5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                      100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                      101: "The owner of the requested video does not allow it to be played in embedded players.",
                      150: "The owner of the requested video does not allow it to be played in embedded players."
                    }[n] || "An unknown error occured";
                    e.media.error = {
                      code: n,
                      message: i
                    }, Ne.call(e, e.media, "error");
                  }
                },
                onPlaybackRateChange: function onPlaybackRateChange(t) {
                  var n = t.target;
                  e.media.playbackRate = n.getPlaybackRate(), Ne.call(e, e.media, "ratechange");
                },
                onReady: function onReady(n) {
                  if (!Y(e.media.play)) {
                    var i = n.target;
                    wt.getTitle.call(e, o), e.media.play = function () {
                      yt.call(e, !0), i.playVideo();
                    }, e.media.pause = function () {
                      yt.call(e, !1), i.pauseVideo();
                    }, e.media.stop = function () {
                      i.stopVideo();
                    }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                      get: function get() {
                        return Number(i.getCurrentTime());
                      },
                      set: function set(t) {
                        e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Ne.call(e, e.media, "seeking"), i.seekTo(t);
                      }
                    }), Object.defineProperty(e.media, "playbackRate", {
                      get: function get() {
                        return i.getPlaybackRate();
                      },
                      set: function set(e) {
                        i.setPlaybackRate(e);
                      }
                    });
                    var a = e.config.volume;
                    Object.defineProperty(e.media, "volume", {
                      get: function get() {
                        return a;
                      },
                      set: function set(t) {
                        a = t, i.setVolume(100 * a), Ne.call(e, e.media, "volumechange");
                      }
                    });
                    var r = e.config.muted;
                    Object.defineProperty(e.media, "muted", {
                      get: function get() {
                        return r;
                      },
                      set: function set(t) {
                        var n = K(t) ? t : r;
                        r = n, i[n ? "mute" : "unMute"](), i.setVolume(100 * a), Ne.call(e, e.media, "volumechange");
                      }
                    }), Object.defineProperty(e.media, "currentSrc", {
                      get: function get() {
                        return i.getVideoUrl();
                      }
                    }), Object.defineProperty(e.media, "ended", {
                      get: function get() {
                        return e.currentTime === e.duration;
                      }
                    });
                    var s = i.getAvailablePlaybackRates();
                    e.options.speed = s.filter(function (t) {
                      return e.config.speed.options.includes(t);
                    }), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), Ne.call(e, e.media, "timeupdate"), Ne.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                      e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Ne.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Ne.call(e, e.media, "canplaythrough"));
                    }, 200), t.customControls && setTimeout(function () {
                      return dt.build.call(e);
                    }, 50);
                  }
                },
                onStateChange: function onStateChange(n) {
                  var i = n.target;

                  switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(n.data) && (e.media.seeking = !1, Ne.call(e, e.media, "seeked")), n.data) {
                    case -1:
                      Ne.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), Ne.call(e, e.media, "progress");
                      break;

                    case 0:
                      yt.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : Ne.call(e, e.media, "ended");
                      break;

                    case 1:
                      t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (yt.call(e, !0), Ne.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                        Ne.call(e, e.media, "timeupdate");
                      }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), Ne.call(e, e.media, "durationchange")));
                      break;

                    case 2:
                      e.muted || e.embed.unMute(), yt.call(e, !1);
                      break;

                    case 3:
                      Ne.call(e, e.media, "waiting");
                  }

                  Ne.call(e, e.elements.container, "statechange", !1, {
                    code: n.data
                  });
                }
              }
            });
          }
        }
      },
          kt = {
        setup: function setup() {
          this.media ? (ge(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), ge(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && ge(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = ce("div", {
            class: this.config.classNames.video
          }), se(this.media, this.elements.wrapper), this.elements.poster = ce("div", {
            class: this.config.classNames.poster,
            hidden: ""
          }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Fe.setup.call(this) : this.isYouTube ? wt.setup.call(this) : this.isVimeo && gt.setup.call(this)) : this.debug.warn("No media element found!");
        }
      },
          Tt = function () {
        function e(t) {
          var i = this;
          n(this, e), r(this, "load", function () {
            i.enabled && (U(window.google) && U(window.google.ima) ? i.ready() : pt(i.player.config.urls.googleIMA.sdk).then(function () {
              i.ready();
            }).catch(function () {
              i.trigger("error", new Error("Google IMA SDK failed to load"));
            }));
          }), r(this, "ready", function () {
            var e;
            i.enabled || ((e = i).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), i.startSafetyTimer(12e3, "ready()"), i.managerPromise.then(function () {
              i.clearSafetyTimer("onAdsManagerLoaded()");
            }), i.listeners(), i.setupIMA();
          }), r(this, "setupIMA", function () {
            i.elements.container = ce("div", {
              class: i.player.config.classNames.ads
            }), i.player.elements.container.appendChild(i.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(i.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(i.player.config.playsinline), i.elements.displayContainer = new google.ima.AdDisplayContainer(i.elements.container, i.player.media), i.loader = new google.ima.AdsLoader(i.elements.displayContainer), i.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (e) {
              return i.onAdsManagerLoaded(e);
            }, !1), i.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
              return i.onAdError(e);
            }, !1), i.requestAds();
          }), r(this, "requestAds", function () {
            var e = i.player.elements.container;

            try {
              var t = new google.ima.AdsRequest();
              t.adTagUrl = i.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!i.player.muted), i.loader.requestAds(t);
            } catch (e) {
              i.onAdError(e);
            }
          }), r(this, "pollCountdown", function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!e) return clearInterval(i.countdownTimer), void i.elements.container.removeAttribute("data-badge-text");

            var t = function t() {
              var e = Ze(Math.max(i.manager.getRemainingTime(), 0)),
                  t = "".concat(Ke("advertisement", i.player.config), " - ").concat(e);
              i.elements.container.setAttribute("data-badge-text", t);
            };

            i.countdownTimer = setInterval(t, 100);
          }), r(this, "onAdsManagerLoaded", function (e) {
            if (i.enabled) {
              var t = new google.ima.AdsRenderingSettings();
              t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, i.manager = e.getAdsManager(i.player, t), i.cuePoints = i.manager.getCuePoints(), i.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
                return i.onAdError(e);
              }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
                i.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
                  return i.onAdEvent(e);
                });
              }), i.trigger("loaded");
            }
          }), r(this, "addCuePoints", function () {
            te(i.cuePoints) || i.cuePoints.forEach(function (e) {
              if (0 !== e && -1 !== e && e < i.player.duration) {
                var t = i.player.elements.progress;

                if (X(t)) {
                  var n = 100 / i.player.duration * e,
                      a = ce("span", {
                    class: i.player.config.classNames.cues
                  });
                  a.style.left = "".concat(n.toString(), "%"), t.appendChild(a);
                }
              }
            });
          }), r(this, "onAdEvent", function (e) {
            var t = i.player.elements.container,
                n = e.getAd(),
                a = e.getAdData();

            switch (function (e) {
              Ne.call(i.player, i.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()));
            }(e.type), e.type) {
              case google.ima.AdEvent.Type.LOADED:
                i.trigger("loaded"), i.pollCountdown(!0), n.isLinear() || (n.width = t.offsetWidth, n.height = t.offsetHeight);
                break;

              case google.ima.AdEvent.Type.STARTED:
                i.manager.setVolume(i.player.volume);
                break;

              case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                i.player.ended ? i.loadAds() : i.loader.contentComplete();
                break;

              case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                i.pauseContent();
                break;

              case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                i.pollCountdown(), i.resumeContent();
                break;

              case google.ima.AdEvent.Type.LOG:
                a.adError && i.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()));
            }
          }), r(this, "onAdError", function (e) {
            i.cancel(), i.player.debug.warn("Ads error", e);
          }), r(this, "listeners", function () {
            var e,
                t = i.player.elements.container;
            i.player.on("canplay", function () {
              i.addCuePoints();
            }), i.player.on("ended", function () {
              i.loader.contentComplete();
            }), i.player.on("timeupdate", function () {
              e = i.player.currentTime;
            }), i.player.on("seeked", function () {
              var t = i.player.currentTime;
              te(i.cuePoints) || i.cuePoints.forEach(function (n, a) {
                e < n && n < t && (i.manager.discardAdBreak(), i.cuePoints.splice(a, 1));
              });
            }), window.addEventListener("resize", function () {
              i.manager && i.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL);
            });
          }), r(this, "play", function () {
            var e = i.player.elements.container;
            i.managerPromise || i.resumeContent(), i.managerPromise.then(function () {
              i.manager.setVolume(i.player.volume), i.elements.displayContainer.initialize();

              try {
                i.initialized || (i.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), i.manager.start()), i.initialized = !0;
              } catch (e) {
                i.onAdError(e);
              }
            }).catch(function () {});
          }), r(this, "resumeContent", function () {
            i.elements.container.style.zIndex = "", i.playing = !1, Le(i.player.media.play());
          }), r(this, "pauseContent", function () {
            i.elements.container.style.zIndex = 3, i.playing = !0, i.player.media.pause();
          }), r(this, "cancel", function () {
            i.initialized && i.resumeContent(), i.trigger("error"), i.loadAds();
          }), r(this, "loadAds", function () {
            i.managerPromise.then(function () {
              i.manager && i.manager.destroy(), i.managerPromise = new Promise(function (e) {
                i.on("loaded", e), i.player.debug.log(i.manager);
              }), i.initialized = !1, i.requestAds();
            }).catch(function () {});
          }), r(this, "trigger", function (e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
              n[a - 1] = arguments[a];
            }

            var r = i.events[e];
            Q(r) && r.forEach(function (e) {
              Y(e) && e.apply(i, n);
            });
          }), r(this, "on", function (e, t) {
            return Q(i.events[e]) || (i.events[e] = []), i.events[e].push(t), i;
          }), r(this, "startSafetyTimer", function (e, t) {
            i.player.debug.log("Safety timer invoked from: ".concat(t)), i.safetyTimer = setTimeout(function () {
              i.cancel(), i.clearSafetyTimer("startSafetyTimer()");
            }, e);
          }), r(this, "clearSafetyTimer", function (e) {
            B(i.safetyTimer) || (i.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(i.safetyTimer), i.safetyTimer = null);
          }), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
            container: null,
            displayContainer: null
          }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
            i.on("loaded", e), i.on("error", t);
          }), this.load();
        }

        return a(e, [{
          key: "enabled",
          get: function get() {
            var e = this.config;
            return this.player.isHTML5 && this.player.isVideo && e.enabled && (!te(e.publisherId) || ee(e.tagUrl));
          }
        }, {
          key: "tagUrl",
          get: function get() {
            var e = this.config;
            if (ee(e.tagUrl)) return e.tagUrl;
            var t = {
              AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
              AV_CHANNELID: "5a0458dc28a06145e4519d21",
              AV_URL: window.location.hostname,
              cb: Date.now(),
              AV_WIDTH: 640,
              AV_HEIGHT: 480,
              AV_CDIM2: e.publisherId
            };
            return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(nt(t));
          }
        }]), e;
      }(),
          Ct = function Ct(e, t) {
        var n = {};
        return e > t.width / t.height ? (n.width = t.width, n.height = 1 / e * t.width) : (n.height = t.height, n.width = e * t.height), n;
      },
          At = function () {
        function e(t) {
          var i = this;
          n(this, e), r(this, "load", function () {
            i.player.elements.display.seekTooltip && (i.player.elements.display.seekTooltip.hidden = i.enabled), i.enabled && i.getThumbnails().then(function () {
              i.enabled && (i.render(), i.determineContainerAutoSizing(), i.loaded = !0);
            });
          }), r(this, "getThumbnails", function () {
            return new Promise(function (e) {
              var t = i.player.config.previewThumbnails.src;
              if (te(t)) throw new Error("Missing previewThumbnails.src config attribute");

              var n = function n() {
                i.thumbnails.sort(function (e, t) {
                  return e.height - t.height;
                }), i.player.debug.log("Preview thumbnails", i.thumbnails), e();
              };

              if (Y(t)) t(function (e) {
                i.thumbnails = e, n();
              });else {
                var a = (z(t) ? [t] : t).map(function (e) {
                  return i.getThumbnail(e);
                });
                Promise.all(a).then(n);
              }
            });
          }), r(this, "getThumbnail", function (e) {
            return new Promise(function (t) {
              Qe(e).then(function (n) {
                var a,
                    r,
                    o = {
                  frames: (a = n, r = [], a.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
                    var t = {};
                    e.split(/\r\n|\n|\r/).forEach(function (e) {
                      if (W(t.startTime)) {
                        if (!te(e.trim()) && te(t.text)) {
                          var n = e.trim().split("#xywh="),
                              i = l(n, 1);

                          if (t.text = i[0], n[1]) {
                            var a = l(n[1].split(","), 4);
                            t.x = a[0], t.y = a[1], t.w = a[2], t.h = a[3];
                          }
                        }
                      } else {
                        var r = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                        r && (t.startTime = 60 * Number(r[1] || 0) * 60 + 60 * Number(r[2]) + Number(r[3]) + Number("0.".concat(r[4])), t.endTime = 60 * Number(r[6] || 0) * 60 + 60 * Number(r[7]) + Number(r[8]) + Number("0.".concat(r[9])));
                      }
                    }), t.text && r.push(t);
                  }), r),
                  height: null,
                  urlPrefix: ""
                };
                o.frames[0].text.startsWith("/") || o.frames[0].text.startsWith("http://") || o.frames[0].text.startsWith("https://") || (o.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                var s = new Image();
                s.onload = function () {
                  o.height = s.naturalHeight, o.width = s.naturalWidth, i.thumbnails.push(o), t();
                }, s.src = o.urlPrefix + o.frames[0].text;
              });
            });
          }), r(this, "startMove", function (e) {
            if (i.loaded && J(e) && ["touchmove", "mousemove"].includes(e.type) && i.player.media.duration) {
              if ("touchmove" === e.type) i.seekTime = i.player.media.duration * (i.player.elements.inputs.seek.value / 100);else {
                var t = i.player.elements.progress.getBoundingClientRect(),
                    n = 100 / t.width * (e.pageX - t.left);
                i.seekTime = i.player.media.duration * (n / 100), i.seekTime < 0 && (i.seekTime = 0), i.seekTime > i.player.media.duration - 1 && (i.seekTime = i.player.media.duration - 1), i.mousePosX = e.pageX, i.elements.thumb.time.innerText = Ze(i.seekTime);
              }
              i.showImageAtCurrentTime();
            }
          }), r(this, "endMove", function () {
            i.toggleThumbContainer(!1, !0);
          }), r(this, "startScrubbing", function (e) {
            (B(e.button) || !1 === e.button || 0 === e.button) && (i.mouseDown = !0, i.player.media.duration && (i.toggleScrubbingContainer(!0), i.toggleThumbContainer(!1, !0), i.showImageAtCurrentTime()));
          }), r(this, "endScrubbing", function () {
            i.mouseDown = !1, Math.ceil(i.lastTime) === Math.ceil(i.player.media.currentTime) ? i.toggleScrubbingContainer(!1) : Me.call(i.player, i.player.media, "timeupdate", function () {
              i.mouseDown || i.toggleScrubbingContainer(!1);
            });
          }), r(this, "listeners", function () {
            i.player.on("play", function () {
              i.toggleThumbContainer(!1, !0);
            }), i.player.on("seeked", function () {
              i.toggleThumbContainer(!1);
            }), i.player.on("timeupdate", function () {
              i.lastTime = i.player.media.currentTime;
            });
          }), r(this, "render", function () {
            i.elements.thumb.container = ce("div", {
              class: i.player.config.classNames.previewThumbnails.thumbContainer
            }), i.elements.thumb.imageContainer = ce("div", {
              class: i.player.config.classNames.previewThumbnails.imageContainer
            }), i.elements.thumb.container.appendChild(i.elements.thumb.imageContainer);
            var e = ce("div", {
              class: i.player.config.classNames.previewThumbnails.timeContainer
            });
            i.elements.thumb.time = ce("span", {}, "00:00"), e.appendChild(i.elements.thumb.time), i.elements.thumb.container.appendChild(e), X(i.player.elements.progress) && i.player.elements.progress.appendChild(i.elements.thumb.container), i.elements.scrubbing.container = ce("div", {
              class: i.player.config.classNames.previewThumbnails.scrubbingContainer
            }), i.player.elements.wrapper.appendChild(i.elements.scrubbing.container);
          }), r(this, "destroy", function () {
            i.elements.thumb.container && i.elements.thumb.container.remove(), i.elements.scrubbing.container && i.elements.scrubbing.container.remove();
          }), r(this, "showImageAtCurrentTime", function () {
            i.mouseDown ? i.setScrubbingContainerSize() : i.setThumbContainerSizeAndPos();
            var e = i.thumbnails[0].frames.findIndex(function (e) {
              return i.seekTime >= e.startTime && i.seekTime <= e.endTime;
            }),
                t = e >= 0,
                n = 0;
            i.mouseDown || i.toggleThumbContainer(t), t && (i.thumbnails.forEach(function (t, a) {
              i.loadedImages.includes(t.frames[e].text) && (n = a);
            }), e !== i.showingThumb && (i.showingThumb = e, i.loadImage(n)));
          }), r(this, "loadImage", function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = i.showingThumb,
                n = i.thumbnails[e],
                a = n.urlPrefix,
                r = n.frames[t],
                o = n.frames[t].text,
                s = a + o;
            if (i.currentImageElement && i.currentImageElement.dataset.filename === o) i.showImage(i.currentImageElement, r, e, t, o, !1), i.currentImageElement.dataset.index = t, i.removeOldImages(i.currentImageElement);else {
              i.loadingImage && i.usingSprites && (i.loadingImage.onload = null);
              var l = new Image();
              l.src = s, l.dataset.index = t, l.dataset.filename = o, i.showingThumbFilename = o, i.player.debug.log("Loading image: ".concat(s)), l.onload = function () {
                return i.showImage(l, r, e, t, o, !0);
              }, i.loadingImage = l, i.removeOldImages(l);
            }
          }), r(this, "showImage", function (e, t, n, a, r) {
            var o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            i.player.debug.log("Showing thumb: ".concat(r, ". num: ").concat(a, ". qual: ").concat(n, ". newimg: ").concat(o)), i.setImageSizeAndOffset(e, t), o && (i.currentImageContainer.appendChild(e), i.currentImageElement = e, i.loadedImages.includes(r) || i.loadedImages.push(r)), i.preloadNearby(a, !0).then(i.preloadNearby(a, !1)).then(i.getHigherQuality(n, e, t, r));
          }), r(this, "removeOldImages", function (e) {
            Array.from(i.currentImageContainer.children).forEach(function (t) {
              if ("img" === t.tagName.toLowerCase()) {
                var n = i.usingSprites ? 500 : 1e3;

                if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                  t.dataset.deleting = !0;
                  var a = i.currentImageContainer;
                  setTimeout(function () {
                    a.removeChild(t), i.player.debug.log("Removing thumb: ".concat(t.dataset.filename));
                  }, n);
                }
              }
            });
          }), r(this, "preloadNearby", function (e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return new Promise(function (n) {
              setTimeout(function () {
                var a = i.thumbnails[0].frames[e].text;

                if (i.showingThumbFilename === a) {
                  var r;
                  r = t ? i.thumbnails[0].frames.slice(e) : i.thumbnails[0].frames.slice(0, e).reverse();
                  var o = !1;
                  r.forEach(function (e) {
                    var t = e.text;

                    if (t !== a && !i.loadedImages.includes(t)) {
                      o = !0, i.player.debug.log("Preloading thumb filename: ".concat(t));
                      var r = i.thumbnails[0].urlPrefix + t,
                          s = new Image();
                      s.src = r, s.onload = function () {
                        i.player.debug.log("Preloaded thumb filename: ".concat(t)), i.loadedImages.includes(t) || i.loadedImages.push(t), n();
                      };
                    }
                  }), o || n();
                }
              }, 300);
            });
          }), r(this, "getHigherQuality", function (e, t, n, a) {
            if (e < i.thumbnails.length - 1) {
              var r = t.naturalHeight;
              i.usingSprites && (r = n.h), r < i.thumbContainerHeight && setTimeout(function () {
                i.showingThumbFilename === a && (i.player.debug.log("Showing higher quality thumb for: ".concat(a)), i.loadImage(e + 1));
              }, 300);
            }
          }), r(this, "toggleThumbContainer", function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = i.player.config.classNames.previewThumbnails.thumbContainerShown;
            i.elements.thumb.container.classList.toggle(n, e), !e && t && (i.showingThumb = null, i.showingThumbFilename = null);
          }), r(this, "toggleScrubbingContainer", function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = i.player.config.classNames.previewThumbnails.scrubbingContainerShown;
            i.elements.scrubbing.container.classList.toggle(t, e), e || (i.showingThumb = null, i.showingThumbFilename = null);
          }), r(this, "determineContainerAutoSizing", function () {
            (i.elements.thumb.imageContainer.clientHeight > 20 || i.elements.thumb.imageContainer.clientWidth > 20) && (i.sizeSpecifiedInCSS = !0);
          }), r(this, "setThumbContainerSizeAndPos", function () {
            if (i.sizeSpecifiedInCSS) {
              if (i.elements.thumb.imageContainer.clientHeight > 20 && i.elements.thumb.imageContainer.clientWidth < 20) {
                var e = Math.floor(i.elements.thumb.imageContainer.clientHeight * i.thumbAspectRatio);
                i.elements.thumb.imageContainer.style.width = "".concat(e, "px");
              } else if (i.elements.thumb.imageContainer.clientHeight < 20 && i.elements.thumb.imageContainer.clientWidth > 20) {
                var t = Math.floor(i.elements.thumb.imageContainer.clientWidth / i.thumbAspectRatio);
                i.elements.thumb.imageContainer.style.height = "".concat(t, "px");
              }
            } else {
              var n = Math.floor(i.thumbContainerHeight * i.thumbAspectRatio);
              i.elements.thumb.imageContainer.style.height = "".concat(i.thumbContainerHeight, "px"), i.elements.thumb.imageContainer.style.width = "".concat(n, "px");
            }

            i.setThumbContainerPos();
          }), r(this, "setThumbContainerPos", function () {
            var e = i.player.elements.progress.getBoundingClientRect(),
                t = i.player.elements.container.getBoundingClientRect(),
                n = i.elements.thumb.container,
                a = t.left - e.left + 10,
                r = t.right - e.left - n.clientWidth - 10,
                o = i.mousePosX - e.left - n.clientWidth / 2;
            o < a && (o = a), o > r && (o = r), n.style.left = "".concat(o, "px");
          }), r(this, "setScrubbingContainerSize", function () {
            var e = Ct(i.thumbAspectRatio, {
              width: i.player.media.clientWidth,
              height: i.player.media.clientHeight
            }),
                t = e.width,
                n = e.height;
            i.elements.scrubbing.container.style.width = "".concat(t, "px"), i.elements.scrubbing.container.style.height = "".concat(n, "px");
          }), r(this, "setImageSizeAndOffset", function (e, t) {
            if (i.usingSprites) {
              var n = i.thumbContainerHeight / t.h;
              e.style.height = "".concat(e.naturalHeight * n, "px"), e.style.width = "".concat(e.naturalWidth * n, "px"), e.style.left = "-".concat(t.x * n, "px"), e.style.top = "-".concat(t.y * n, "px");
            }
          }), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
            thumb: {},
            scrubbing: {}
          }, this.load();
        }

        return a(e, [{
          key: "enabled",
          get: function get() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
          }
        }, {
          key: "currentImageContainer",
          get: function get() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
          }
        }, {
          key: "usingSprites",
          get: function get() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w");
          }
        }, {
          key: "thumbAspectRatio",
          get: function get() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
          }
        }, {
          key: "thumbContainerHeight",
          get: function get() {
            return this.mouseDown ? Ct(this.thumbAspectRatio, {
              width: this.player.media.clientWidth,
              height: this.player.media.clientHeight
            }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
          }
        }, {
          key: "currentImageElement",
          get: function get() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
          },
          set: function set(e) {
            this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
          }
        }]), e;
      }(),
          St = {
        insertElements: function insertElements(e, t) {
          var n = this;
          z(t) ? ue(e, this.media, {
            src: t
          }) : Q(t) && t.forEach(function (t) {
            ue(e, n.media, t);
          });
        },
        change: function change(e) {
          var t = this;
          re(e, "sources.length") ? (Fe.cancelRequests.call(this), this.destroy.call(this, function () {
            t.options.quality = [], de(t.media), t.media = null, X(t.elements.container) && t.elements.container.removeAttribute("class");
            var n = e.sources,
                i = e.type,
                a = l(n, 1)[0],
                r = a.provider,
                o = void 0 === r ? ot.html5 : r,
                s = a.src,
                c = "html5" === o ? i : "div",
                u = "html5" === o ? {} : {
              src: s
            };
            Object.assign(t, {
              provider: o,
              type: i,
              supported: Ae.check(i, o, t.config.playsinline),
              media: ce(c, u)
            }), t.elements.container.appendChild(t.media), K(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), te(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), dt.addStyleHook.call(t), t.isHTML5 && St.insertElements.call(t, "source", n), t.config.title = e.title, kt.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && St.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && dt.build.call(t), t.isHTML5 && t.media.load(), te(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new At(t))), t.fullscreen.update();
          }, !0)) : this.debug.warn("Invalid source format");
        }
      },
          Pt = function () {
        function e(t, i) {
          var a = this;
          if (n(this, e), r(this, "play", function () {
            return Y(a.media.play) ? (a.ads && a.ads.enabled && a.ads.managerPromise.then(function () {
              return a.ads.play();
            }).catch(function () {
              return Le(a.media.play());
            }), a.media.play()) : null;
          }), r(this, "pause", function () {
            return a.playing && Y(a.media.pause) ? a.media.pause() : null;
          }), r(this, "togglePlay", function (e) {
            return (K(e) ? e : !a.playing) ? a.play() : a.pause();
          }), r(this, "stop", function () {
            a.isHTML5 ? (a.pause(), a.restart()) : Y(a.media.stop) && a.media.stop();
          }), r(this, "restart", function () {
            a.currentTime = 0;
          }), r(this, "rewind", function (e) {
            a.currentTime -= W(e) ? e : a.config.seekTime;
          }), r(this, "forward", function (e) {
            a.currentTime += W(e) ? e : a.config.seekTime;
          }), r(this, "increaseVolume", function (e) {
            var t = a.media.muted ? 0 : a.volume;
            a.volume = t + (W(e) ? e : 0);
          }), r(this, "decreaseVolume", function (e) {
            a.increaseVolume(-e);
          }), r(this, "airplay", function () {
            Ae.airplay && a.media.webkitShowPlaybackTargetPicker();
          }), r(this, "toggleControls", function (e) {
            if (a.supported.ui && !a.isAudio) {
              var t = ye(a.elements.container, a.config.classNames.hideControls),
                  n = void 0 === e ? void 0 : !e,
                  i = ge(a.elements.container, a.config.classNames.hideControls, n);

              if (i && Q(a.config.controls) && a.config.controls.includes("settings") && !te(a.config.settings) && et.toggleMenu.call(a, !1), i !== t) {
                var r = i ? "controlshidden" : "controlsshown";
                Ne.call(a, a.media, r);
              }

              return !i;
            }

            return !1;
          }), r(this, "on", function (e, t) {
            Ee.call(a, a.elements.container, e, t);
          }), r(this, "once", function (e, t) {
            Me.call(a, a.elements.container, e, t);
          }), r(this, "off", function (e, t) {
            xe(a.elements.container, e, t);
          }), r(this, "destroy", function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            if (a.ready) {
              var n = function n() {
                document.body.style.overflow = "", a.embed = null, t ? (Object.keys(a.elements).length && (de(a.elements.buttons.play), de(a.elements.captions), de(a.elements.controls), de(a.elements.wrapper), a.elements.buttons.play = null, a.elements.captions = null, a.elements.controls = null, a.elements.wrapper = null), Y(e) && e()) : (Ie.call(a), Fe.cancelRequests.call(a), me(a.elements.original, a.elements.container), Ne.call(a, a.elements.original, "destroyed", !0), Y(e) && e.call(a.elements.original), a.ready = !1, setTimeout(function () {
                  a.elements = null, a.media = null;
                }, 200));
              };

              a.stop(), clearTimeout(a.timers.loading), clearTimeout(a.timers.controls), clearTimeout(a.timers.resized), a.isHTML5 ? (dt.toggleNativeControls.call(a, !0), n()) : a.isYouTube ? (clearInterval(a.timers.buffering), clearInterval(a.timers.playing), null !== a.embed && Y(a.embed.destroy) && a.embed.destroy(), n()) : a.isVimeo && (null !== a.embed && a.embed.unload().then(n), setTimeout(n, 200));
            }
          }), r(this, "supports", function (e) {
            return Ae.mime.call(a, e);
          }), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = Ae.touch, this.media = t, z(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || $(this.media) || Q(this.media)) && (this.media = this.media[0]), this.config = oe({}, at, e.defaults, i || {}, function () {
            try {
              return JSON.parse(a.media.getAttribute("data-plyr-config"));
            } catch (e) {
              return {};
            }
          }()), this.elements = {
            container: null,
            fullscreen: null,
            captions: null,
            buttons: {},
            display: {},
            progress: {},
            inputs: {},
            settings: {
              popup: null,
              menu: null,
              panels: {},
              buttons: {}
            }
          }, this.captions = {
            active: null,
            currentTrack: -1,
            meta: new WeakMap()
          }, this.fullscreen = {
            active: !1
          }, this.options = {
            speed: [],
            quality: []
          }, this.debug = new lt(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Ae), !B(this.media) && X(this.media)) {
            if (this.media.plyr) this.debug.warn("Target already setup");else if (this.config.enabled) {
              if (Ae.check().api) {
                var o = this.media.cloneNode(!0);
                o.autoplay = !1, this.elements.original = o;
                var s = this.media.tagName.toLowerCase(),
                    l = null,
                    c = null;

                switch (s) {
                  case "div":
                    if (l = this.media.querySelector("iframe"), X(l)) {
                      if (c = tt(l.getAttribute("src")), this.provider = function (e) {
                        return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? ot.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? ot.vimeo : null;
                      }(c.toString()), this.elements.container = this.media, this.media = l, this.elements.container.className = "", c.search.length) {
                        var u = ["1", "true"];
                        u.includes(c.searchParams.get("autoplay")) && (this.config.autoplay = !0), u.includes(c.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = u.includes(c.searchParams.get("playsinline")), this.config.youtube.hl = c.searchParams.get("hl")) : this.config.playsinline = !0;
                      }
                    } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);

                    if (te(this.provider) || !Object.values(ot).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                    this.type = "video";
                    break;

                  case "video":
                  case "audio":
                    this.type = s, this.provider = ot.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                    break;

                  default:
                    return void this.debug.error("Setup failed: unsupported type");
                }

                this.supported = Ae.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new ht(this), this.storage = new Ye(this), this.media.plyr = this, X(this.elements.container) || (this.elements.container = ce("div", {
                  tabindex: 0
                }), se(this.media, this.elements.container)), dt.migrateStyles.call(this), dt.addStyleHook.call(this), kt.setup.call(this), this.config.debug && Ee.call(this, this.elements.container, this.config.events.join(" "), function (e) {
                  a.debug.log("event: ".concat(e.type));
                }), this.fullscreen = new ct(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && dt.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Tt(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", function () {
                  return Le(a.play());
                }), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new At(this))) : this.debug.error("Setup failed: no support");
              } else this.debug.error("Setup failed: no support");
            } else this.debug.error("Setup failed: disabled by config");
          } else this.debug.error("Setup failed: no suitable element passed");
        }

        return a(e, [{
          key: "toggleCaptions",
          value: function value(e) {
            it.toggle.call(this, e, !1);
          }
        }, {
          key: "isHTML5",
          get: function get() {
            return this.provider === ot.html5;
          }
        }, {
          key: "isEmbed",
          get: function get() {
            return this.isYouTube || this.isVimeo;
          }
        }, {
          key: "isYouTube",
          get: function get() {
            return this.provider === ot.youtube;
          }
        }, {
          key: "isVimeo",
          get: function get() {
            return this.provider === ot.vimeo;
          }
        }, {
          key: "isVideo",
          get: function get() {
            return "video" === this.type;
          }
        }, {
          key: "isAudio",
          get: function get() {
            return "audio" === this.type;
          }
        }, {
          key: "playing",
          get: function get() {
            return Boolean(this.ready && !this.paused && !this.ended);
          }
        }, {
          key: "paused",
          get: function get() {
            return Boolean(this.media.paused);
          }
        }, {
          key: "stopped",
          get: function get() {
            return Boolean(this.paused && 0 === this.currentTime);
          }
        }, {
          key: "ended",
          get: function get() {
            return Boolean(this.media.ended);
          }
        }, {
          key: "currentTime",
          set: function set(e) {
            if (this.duration) {
              var t = W(e) && e > 0;
              this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
            }
          },
          get: function get() {
            return Number(this.media.currentTime);
          }
        }, {
          key: "buffered",
          get: function get() {
            var e = this.media.buffered;
            return W(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
          }
        }, {
          key: "seeking",
          get: function get() {
            return Boolean(this.media.seeking);
          }
        }, {
          key: "duration",
          get: function get() {
            var e = parseFloat(this.config.duration),
                t = (this.media || {}).duration,
                n = W(t) && t !== 1 / 0 ? t : 0;
            return e || n;
          }
        }, {
          key: "volume",
          set: function set(e) {
            var t = e;
            z(t) && (t = Number(t)), W(t) || (t = this.storage.get("volume")), W(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !te(e) && this.muted && t > 0 && (this.muted = !1);
          },
          get: function get() {
            return Number(this.media.volume);
          }
        }, {
          key: "muted",
          set: function set(e) {
            var t = e;
            K(t) || (t = this.storage.get("muted")), K(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
          },
          get: function get() {
            return Boolean(this.media.muted);
          }
        }, {
          key: "hasAudio",
          get: function get() {
            return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
          }
        }, {
          key: "speed",
          set: function set(e) {
            var t = this,
                n = null;
            W(e) && (n = e), W(n) || (n = this.storage.get("speed")), W(n) || (n = this.config.speed.selected);
            var i = this.minimumSpeed,
                a = this.maximumSpeed;
            n = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
              return Math.min(Math.max(e, t), n);
            }(n, i, a), this.config.speed.selected = n, setTimeout(function () {
              t.media.playbackRate = n;
            }, 0);
          },
          get: function get() {
            return Number(this.media.playbackRate);
          }
        }, {
          key: "minimumSpeed",
          get: function get() {
            return this.isYouTube ? Math.min.apply(Math, c(this.options.speed)) : this.isVimeo ? .5 : .0625;
          }
        }, {
          key: "maximumSpeed",
          get: function get() {
            return this.isYouTube ? Math.max.apply(Math, c(this.options.speed)) : this.isVimeo ? 2 : 16;
          }
        }, {
          key: "quality",
          set: function set(e) {
            var t = this.config.quality,
                n = this.options.quality;

            if (n.length) {
              var i = [!te(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(W),
                  a = !0;

              if (!n.includes(i)) {
                var r = function (e, t) {
                  return Q(e) && e.length ? e.reduce(function (e, n) {
                    return Math.abs(n - t) < Math.abs(e - t) ? n : e;
                  }) : null;
                }(n, i);

                this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(r, " instead")), i = r, a = !1;
              }

              t.selected = i, this.media.quality = i, a && this.storage.set({
                quality: i
              });
            }
          },
          get: function get() {
            return this.media.quality;
          }
        }, {
          key: "loop",
          set: function set(e) {
            var t = K(e) ? e : this.config.loop.active;
            this.config.loop.active = t, this.media.loop = t;
          },
          get: function get() {
            return Boolean(this.media.loop);
          }
        }, {
          key: "source",
          set: function set(e) {
            St.change.call(this, e);
          },
          get: function get() {
            return this.media.currentSrc;
          }
        }, {
          key: "download",
          get: function get() {
            var e = this.config.urls.download;
            return ee(e) ? e : this.source;
          },
          set: function set(e) {
            ee(e) && (this.config.urls.download = e, et.setDownloadUrl.call(this));
          }
        }, {
          key: "poster",
          set: function set(e) {
            this.isVideo ? dt.setPoster.call(this, e, !1).catch(function () {}) : this.debug.warn("Poster can only be set for video");
          },
          get: function get() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
          }
        }, {
          key: "ratio",
          get: function get() {
            if (!this.isVideo) return null;
            var e = je(qe.call(this));
            return Q(e) ? e.join(":") : e;
          },
          set: function set(e) {
            this.isVideo ? z(e) && _e(e) ? (this.config.ratio = e, De.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video");
          }
        }, {
          key: "autoplay",
          set: function set(e) {
            var t = K(e) ? e : this.config.autoplay;
            this.config.autoplay = t;
          },
          get: function get() {
            return Boolean(this.config.autoplay);
          }
        }, {
          key: "currentTrack",
          set: function set(e) {
            it.set.call(this, e, !1);
          },
          get: function get() {
            var e = this.captions,
                t = e.toggled,
                n = e.currentTrack;
            return t ? n : -1;
          }
        }, {
          key: "language",
          set: function set(e) {
            it.setLanguage.call(this, e, !1);
          },
          get: function get() {
            return (it.getCurrentTrack.call(this) || {}).language;
          }
        }, {
          key: "pip",
          set: function set(e) {
            if (Ae.pip) {
              var t = K(e) ? e : !this.pip;
              Y(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? rt : "inline"), Y(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
            }
          },
          get: function get() {
            return Ae.pip ? te(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === rt : null;
          }
        }], [{
          key: "supported",
          value: function value(e, t, n) {
            return Ae.check(e, t, n);
          }
        }, {
          key: "loadSprite",
          value: function value(e, t) {
            return $e(e, t);
          }
        }, {
          key: "setup",
          value: function value(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = null;
            return z(t) ? i = Array.from(document.querySelectorAll(t)) : $(t) ? i = Array.from(t) : Q(t) && (i = t.filter(X)), te(i) ? null : i.map(function (t) {
              return new e(t, n);
            });
          }
        }]), e;
      }();

      return Pt.defaults = (vt = at, JSON.parse(JSON.stringify(vt))), Pt;
    }());
  }).call(this, n(3));
}, function (e, t, n) {
  n(2), e.exports = n(4);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0);
  new (n.n(i).a)("#player");
}, function (e, t) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  e.exports = n;
}, function (e, t, n) {
  "use strict";

  var i, a;
  void 0 === (a = "function" == typeof (i = function i() {
    function e(e, n) {
      if (e) {
        if ("string" == typeof e) return t(e, n);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? t(e, n) : void 0;
      }
    }

    function t(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, i = Array(t); n < t; n++) {
        i[n] = e[n];
      }

      return i;
    }

    function n(t) {
      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (t = e(t))) {
          var _n = 0,
              i = function i() {};

          return {
            s: i,
            n: function n() {
              return _n >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[_n++]
              };
            },
            e: function e(_e2) {
              throw _e2;
            },
            f: i
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var a,
          r = !0,
          o = !1;
      return {
        s: function s() {
          a = t[Symbol.iterator]();
        },
        n: function n() {
          var e = a.next();
          return r = e.done, e;
        },
        e: function e(_e3) {
          o = !0;
        },
        f: function e() {
          try {
            r || null == a.return || a.return();
          } finally {
            if (o) throw e;
          }
        }
      };
    }

    var i = function i(e) {
      void 0 !== window.ResizeObserver && new window.ResizeObserver(function (e) {
        window.requestAnimationFrame(function () {
          if (Array.isArray(e) && e.length) {
            var t,
                i = n(e);

            try {
              for (i.s(); !(t = i.n()).done;) {
                var a = t.value;
                a.contentRect && a.target.style.setProperty("--tt-bind", a.contentRect.width);
              }
            } catch (e) {
              i.e(e);
            } finally {
              i.f();
            }
          }
        });
      }).observe(e);
    },
        a = function a(e) {
      var t = e.base,
          n = e.scale,
          i = document.createElement("style");
      return i.innerHTML = "html{--tt-base: ".concat(t, ";--tt-scale: ").concat(n, ";--tt-ease:linear;--tt-max:1600}*,:before,:after,html{--tt-key:none;animation:var(--tt-key) 1s var(--tt-ease) 1 calc(-1s * var(--tt-bind) / var(--tt-max)) both paused}"), i;
    };

    window.typetura = window.typetura || {
      selectors: [".typetura"],
      base: 20,
      scale: 1
    }, function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.selectors || [".typetura"],
          n = e.base || 20,
          r = e.scale || 1;
      new Promise(function (e) {
        new window.MutationObserver(function (e) {
          e.forEach(function (e) {
            e.addedNodes.forEach(function (e) {
              e.classList && e.matches(t) && i(e);
            });
          });
        }).observe(document.documentElement, {
          childList: !0,
          attributes: !1,
          subtree: !0
        });
        var o = a({
          base: n,
          scale: r
        });
        i(document.documentElement), document.head.insertBefore(o, document.head.firstChild), e();
      });
    }(window.typetura);
  }) ? i.call(t, n, t, e) : i) || (e.exports = a);
}]);