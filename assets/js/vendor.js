"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function i(s) {
    if (t[s]) return t[s].exports;
    var n = t[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }

  i.m = e, i.c = t, i.d = function (e, t, s) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: s
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var s = Object.create(null);
    if (i.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      i.d(s, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return s;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 1);
}([function (e, t, i) {
  (function (t) {
    "object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && (e.exports = function () {
      "use strict";

      function e(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i, e;
      }

      function i(e, t) {
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
        }
      }

      function s(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i, e;
      }

      function n(e, t) {
        var i = Object.keys(e);

        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t && (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), i.push.apply(i, s);
        }

        return i;
      }

      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2 ? n(Object(i), !0).forEach(function (t) {
            s(e, t, i[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
          });
        }

        return e;
      }

      var l = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
      };

      function o(e, t) {
        return function () {
          return Array.from(document.querySelectorAll(t)).includes(this);
        }.call(e, t);
      }

      var r = function r(e) {
        return null != e ? e.constructor : null;
      },
          c = function c(e, t) {
        return !!(e && t && e instanceof t);
      },
          h = function h(e) {
        return r(e) === String;
      },
          u = function u(e) {
        return Array.isArray(e);
      },
          d = function d(e) {
        return c(e, NodeList);
      },
          m = h,
          p = u,
          g = d,
          f = function f(e) {
        return c(e, Element);
      },
          b = function b(e) {
        return c(e, Event);
      },
          y = function y(e) {
        return function (e) {
          return null == e;
        }(e) || (h(e) || u(e) || d(e)) && !e.length || function (e) {
          return r(e) === Object;
        }(e) && !Object.keys(e).length;
      },
          v = function () {
        function e(t, i) {
          (function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e), f(t) ? this.element = t : m(t) && (this.element = document.querySelector(t)), f(this.element) && y(this.element.rangeTouch) && (this.config = a({}, l, {}, i), this.init());
        }

        return function (e, t, s) {
          t && i(e.prototype, t), s && i(e, s);
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
                i = e ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function (e) {
              t.element[i](e, function (e) {
                return t.set(e);
              }, !1);
            });
          }
        }, {
          key: "get",
          value: function value(t) {
            if (!e.enabled || !b(t)) return null;
            var i,
                s = t.target,
                n = t.changedTouches[0],
                a = parseFloat(s.getAttribute("min")) || 0,
                l = parseFloat(s.getAttribute("max")) || 100,
                o = parseFloat(s.getAttribute("step")) || 1,
                r = s.getBoundingClientRect(),
                c = 100 / r.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (i = 100 / r.width * (n.clientX - r.left)) ? i = 0 : 100 < i && (i = 100), 50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), a + function (e, t) {
              if (1 > t) {
                var i = function (e) {
                  var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
                }(t);

                return parseFloat(e.toFixed(i));
              }

              return Math.round(e / t) * t;
            }(i / 100 * (l - a), o);
          }
        }, {
          key: "set",
          value: function value(t) {
            e.enabled && b(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function (e, t) {
              if (e && t) {
                var i = new Event(t, {
                  bubbles: !0
                });
                e.dispatchEvent(i);
              }
            }(t.target, "touchend" === t.type ? "change" : "input"));
          }
        }], [{
          key: "setup",
          value: function value(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                s = null;
            if (y(t) || m(t) ? s = Array.from(document.querySelectorAll(m(t) ? t : 'input[type="range"]')) : f(t) ? s = [t] : g(t) ? s = Array.from(t) : p(t) && (s = t.filter(f)), y(s)) return null;
            var n = a({}, l, {}, i);

            if (m(t) && n.watch) {
              var r = new MutationObserver(function (i) {
                Array.from(i).forEach(function (i) {
                  Array.from(i.addedNodes).forEach(function (i) {
                    f(i) && o(i, t) && new e(i, n);
                  });
                });
              });
              r.observe(document.body, {
                childList: !0,
                subtree: !0
              });
            }

            return s.map(function (t) {
              return new e(t, i);
            });
          }
        }, {
          key: "enabled",
          get: function get() {
            return "ontouchstart" in document.documentElement;
          }
        }]), e;
      }();

      var w = function w(e) {
        return null != e ? e.constructor : null;
      },
          T = function T(e, t) {
        return Boolean(e && t && e instanceof t);
      },
          k = function k(e) {
        return null == e;
      },
          C = function C(e) {
        return w(e) === Object;
      },
          A = function A(e) {
        return w(e) === String;
      },
          S = function S(e) {
        return w(e) === Function;
      },
          E = function E(e) {
        return Array.isArray(e);
      },
          P = function P(e) {
        return T(e, NodeList);
      },
          x = function x(e) {
        return k(e) || (A(e) || E(e) || P(e)) && !e.length || C(e) && !Object.keys(e).length;
      };

      var M = k,
          N = C,
          I = function I(e) {
        return w(e) === Number && !Number.isNaN(e);
      },
          L = A,
          _ = function _(e) {
        return w(e) === Boolean;
      },
          O = S,
          j = E,
          q = P,
          D = function D(e) {
        return null !== e && "object" == _typeof(e) && 1 === e.nodeType && "object" == _typeof(e.style) && "object" == _typeof(e.ownerDocument);
      },
          F = function F(e) {
        return T(e, Event);
      },
          H = function H(e) {
        return T(e, KeyboardEvent);
      },
          R = function R(e) {
        return T(e, TextTrack) || !k(e) && A(e.kind);
      },
          $ = function $(e) {
        if (T(e, window.URL)) return !0;
        if (!A(e)) return !1;
        var t = e;
        e.startsWith("http://") && e.startsWith("https://") || (t = "http://" + e);

        try {
          return !x(new URL(t).hostname);
        } catch (e) {
          return !1;
        }
      },
          V = x;

      var B = function () {
        var e = document.createElement("span"),
            t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        },
            i = Object.keys(t).find(function (t) {
          return void 0 !== e.style[t];
        });
        return !!L(i) && t[i];
      }();

      function U(e, t) {
        setTimeout(function () {
          try {
            e.hidden = !0, e.offsetHeight, e.hidden = !1;
          } catch (e) {}
        }, t);
      }

      var W = {
        isIE: Boolean(window.document.documentMode),
        isEdge: window.navigator.userAgent.includes("Edge"),
        isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
      };

      function z(e, t) {
        return t.split(".").reduce(function (e, t) {
          return e && e[t];
        }, e);
      }

      function K() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          t[_key - 1] = arguments[_key];
        }

        if (!t.length) return e;
        var i = t.shift();
        return N(i) ? (Object.keys(i).forEach(function (t) {
          N(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, _defineProperty({}, t, {})), K(e[t], i[t])) : Object.assign(e, _defineProperty({}, t, i[t]));
        }), K.apply(void 0, [e].concat(t))) : e;
      }

      function Y(e, t) {
        var i = e.length ? e : [e];
        Array.from(i).reverse().forEach(function (e, i) {
          var s = i > 0 ? t.cloneNode(!0) : t,
              n = e.parentNode,
              a = e.nextSibling;
          s.appendChild(e), a ? n.insertBefore(s, a) : n.appendChild(s);
        });
      }

      function Q(e, t) {
        D(e) && !V(t) && Object.entries(t).filter(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              e = _ref2[1];

          return !M(e);
        }).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              t = _ref4[0],
              i = _ref4[1];

          return e.setAttribute(t, i);
        });
      }

      function X(e, t, i) {
        var s = document.createElement(e);
        return N(t) && Q(s, t), L(i) && (s.innerText = i), s;
      }

      function J(e, t, i, s) {
        D(t) && t.appendChild(X(e, i, s));
      }

      function G(e) {
        q(e) || j(e) ? Array.from(e).forEach(G) : D(e) && D(e.parentNode) && e.parentNode.removeChild(e);
      }

      function Z(e) {
        if (!D(e)) return;
        var t = e.childNodes.length;

        for (; t > 0;) {
          e.removeChild(e.lastChild), t -= 1;
        }
      }

      function ee(e, t) {
        return D(t) && D(t.parentNode) && D(e) ? (t.parentNode.replaceChild(e, t), e) : null;
      }

      function te(e, t) {
        if (!L(e) || V(e)) return {};
        var i = {},
            s = K({}, t);
        return e.split(",").forEach(function (e) {
          var t = e.trim(),
              n = t.replace(".", ""),
              a = t.replace(/[[\]]/g, "").split("="),
              _a = _slicedToArray(a, 1),
              l = _a[0],
              o = a.length > 1 ? a[1].replace(/["']/g, "") : "";

          switch (t.charAt(0)) {
            case ".":
              L(s.class) ? i.class = "".concat(s.class, " ").concat(n) : i.class = n;
              break;

            case "#":
              i.id = t.replace("#", "");
              break;

            case "[":
              i[l] = o;
          }
        }), K(s, i);
      }

      function ie(e, t) {
        if (!D(e)) return;
        var i = t;
        _(i) || (i = !e.hidden), e.hidden = i;
      }

      function se(e, t, i) {
        if (q(e)) return Array.from(e).map(function (e) {
          return se(e, t, i);
        });

        if (D(e)) {
          var _s2 = "toggle";
          return void 0 !== i && (_s2 = i ? "add" : "remove"), e.classList[_s2](t), e.classList.contains(t);
        }

        return !1;
      }

      function ne(e, t) {
        return D(e) && e.classList.contains(t);
      }

      function ae(e, t) {
        var _Element = Element,
            i = _Element.prototype;
        return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
          return Array.from(document.querySelectorAll(t)).includes(this);
        }).call(e, t);
      }

      function le(e) {
        return this.elements.container.querySelectorAll(e);
      }

      function oe(e) {
        return this.elements.container.querySelector(e);
      }

      function re() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        D(e) && (e.focus({
          preventScroll: !0
        }), t && se(e, this.config.classNames.tabFocus));
      }

      var ce = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora"
      },
          he = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check: function check(e, t, i) {
          var s = W.isIPhone && i && he.playsinline,
              n = he[e] || "html5" !== t;
          return {
            api: n,
            ui: n && he.rangeInput && ("video" !== e || !W.isIPhone || s)
          };
        },
        pip: !(W.isIPhone || !O(X("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || X("video").disablePictureInPicture)),
        airplay: O(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime: function mime(e) {
          if (V(e)) return !1;

          var _e$split = e.split("/"),
              _e$split2 = _slicedToArray(_e$split, 1),
              t = _e$split2[0];

          var i = e;
          if (!this.isHTML5 || t !== this.type) return !1;
          Object.keys(ce).includes(i) && (i += "; codecs=\"".concat(ce[e], "\""));

          try {
            return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
          } catch (e) {
            return !1;
          }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: function () {
          var e = document.createElement("input");
          return e.type = "range", "range" === e.type;
        }(),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== B,
        reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
      },
          ue = function () {
        var e = !1;

        try {
          var _t = Object.defineProperty({}, "passive", {
            get: function get() {
              return e = !0, null;
            }
          });

          window.addEventListener("test", null, _t), window.removeEventListener("test", null, _t);
        } catch (e) {}

        return e;
      }();

      function de(e, t, i) {
        var _this = this;

        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
        var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
        if (!e || !("addEventListener" in e) || V(t) || !O(i)) return;
        var l = t.split(" ");
        var o = a;
        ue && (o = {
          passive: n,
          capture: a
        }), l.forEach(function (t) {
          _this && _this.eventListeners && s && _this.eventListeners.push({
            element: e,
            type: t,
            callback: i,
            options: o
          }), e[s ? "addEventListener" : "removeEventListener"](t, i, o);
        });
      }

      function me(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = arguments.length > 2 ? arguments[2] : undefined;
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
        de.call(this, e, t, i, !0, s, n);
      }

      function pe(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = arguments.length > 2 ? arguments[2] : undefined;
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
        de.call(this, e, t, i, !1, s, n);
      }

      function ge(e) {
        var _this2 = this;

        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = arguments.length > 2 ? arguments[2] : undefined;
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;

        var a = function a() {
          for (var _len2 = arguments.length, l = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            l[_key2] = arguments[_key2];
          }

          pe(e, t, a, s, n), i.apply(_this2, l);
        };

        de.call(this, e, t, a, !0, s, n);
      }

      function fe(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        if (!D(e) || V(t)) return;
        var n = new CustomEvent(t, {
          bubbles: i,
          detail: _objectSpread(_objectSpread({}, s), {}, {
            plyr: this
          })
        });
        e.dispatchEvent(n);
      }

      function be() {
        this && this.eventListeners && (this.eventListeners.forEach(function (e) {
          var t = e.element,
              i = e.type,
              s = e.callback,
              n = e.options;
          t.removeEventListener(i, s, n);
        }), this.eventListeners = []);
      }

      function ye() {
        var _this3 = this;

        return new Promise(function (e) {
          return _this3.ready ? setTimeout(e, 0) : me.call(_this3, _this3.elements.container, "ready", e);
        }).then(function () {});
      }

      function ve(e) {
        (function (e) {
          return T(e, Promise) && S(e.then);
        })(e) && e.then(null, function () {});
      }

      function we(e) {
        return j(e) ? e.filter(function (t, i) {
          return e.indexOf(t) === i;
        }) : e;
      }

      function Te(e, t) {
        return j(e) && e.length ? e.reduce(function (e, i) {
          return Math.abs(i - t) < Math.abs(e - t) ? i : e;
        }) : null;
      }

      var ke = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce(function (e, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            t = _ref6[0],
            i = _ref6[1];

        return _objectSpread(_objectSpread({}, e), {}, _defineProperty({}, t / i, [t, i]));
      }, {});

      function Ce(e) {
        return !!(j(e) || L(e) && e.includes(":")) && (j(e) ? e : e.split(":")).map(Number).every(I);
      }

      function Ae(e) {
        if (!j(e) || !e.every(I)) return null;

        var _e2 = _slicedToArray(e, 2),
            t = _e2[0],
            i = _e2[1],
            s = function s(e, t) {
          return 0 === t ? e : s(t, e % t);
        },
            n = s(t, i);

        return [t / n, i / n];
      }

      function Se(e) {
        var _this$embed;

        var t = function t(e) {
          return Ce(e) ? e.split(":").map(Number) : null;
        };

        var i = t(e);

        if (null === i && (i = t(this.config.ratio)), null === i && !V(this.embed) && j(this.embed.ratio) && (_this$embed = this.embed, i = _this$embed.ratio, _this$embed), null === i && this.isHTML5) {
          var _this$media = this.media,
              _e3 = _this$media.videoWidth,
              _t2 = _this$media.videoHeight;
          i = Ae([_e3, _t2]);
        }

        return i;
      }

      function Ee(e) {
        if (!this.isVideo) return {};
        var t = this.elements.wrapper,
            i = Se.call(this, e);
        if (!j(i)) return {};

        var _i2 = _slicedToArray(i, 2),
            s = _i2[0],
            n = _i2[1],
            a = 100 / s * n;

        if (window.CSS && window.CSS.supports("aspect-ratio: ".concat(s, "/").concat(n)) ? t.style.aspectRatio = "".concat(s, "/").concat(n) : t.style.paddingBottom = a + "%", this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
          var _e4 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
              _i3 = (_e4 - a) / (_e4 / 50);

          this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(_i3, "%)");
        } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== i);

        return {
          padding: a,
          ratio: i
        };
      }

      function Pe(e, t) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .05;
        var s = e / t,
            n = Te(Object.keys(ke), s);
        return Math.abs(n - s) <= i ? ke[n] : [e, t];
      }

      var xe = {
        getSources: function getSources() {
          var _this4 = this;

          return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (e) {
            var t = e.getAttribute("type");
            return !!V(t) || he.mime.call(_this4, t);
          }) : [];
        },
        getQualityOptions: function getQualityOptions() {
          return this.config.quality.forced ? this.config.quality.options : xe.getSources.call(this).map(function (e) {
            return Number(e.getAttribute("size"));
          }).filter(Boolean);
        },
        setup: function setup() {
          if (!this.isHTML5) return;
          var e = this;
          e.options.speed = e.config.speed.options, V(this.config.ratio) || Ee.call(e), Object.defineProperty(e.media, "quality", {
            get: function get() {
              var t = xe.getSources.call(e).find(function (t) {
                return t.getAttribute("src") === e.source;
              });
              return t && Number(t.getAttribute("size"));
            },
            set: function set(t) {
              if (e.quality !== t) {
                if (e.config.quality.forced && O(e.config.quality.onChange)) e.config.quality.onChange(t);else {
                  var _i4 = xe.getSources.call(e).find(function (e) {
                    return Number(e.getAttribute("size")) === t;
                  });

                  if (!_i4) return;
                  var _e$media = e.media,
                      _s3 = _e$media.currentTime,
                      _n2 = _e$media.paused,
                      _a2 = _e$media.preload,
                      _l = _e$media.readyState,
                      _o = _e$media.playbackRate;
                  e.media.src = _i4.getAttribute("src"), ("none" !== _a2 || _l) && (e.once("loadedmetadata", function () {
                    e.speed = _o, e.currentTime = _s3, _n2 || ve(e.play());
                  }), e.media.load());
                }
                fe.call(e, e.media, "qualitychange", !1, {
                  quality: t
                });
              }
            }
          });
        },
        cancelRequests: function cancelRequests() {
          this.isHTML5 && (G(xe.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        }
      };

      function Me(e) {
        for (var _len3 = arguments.length, t = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          t[_key3 - 1] = arguments[_key3];
        }

        return V(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, i) {
          return t[i].toString();
        });
      }

      var Ne = function Ne() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString());
      },
          Ie = function Ie() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return e.toString().replace(/\w\S*/g, function (e) {
          return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
        });
      };

      function Le(e) {
        var t = document.createElement("div");
        return t.appendChild(e), t.innerHTML;
      }

      var _e = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube"
      },
          Oe = {
        get: function get() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (V(e) || V(t)) return "";
          var i = z(t.i18n, e);
          if (V(i)) return Object.keys(_e).includes(e) ? _e[e] : "";
          var s = {
            "{seektime}": t.seekTime,
            "{title}": t.title
          };
          return Object.entries(s).forEach(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                e = _ref8[0],
                t = _ref8[1];

            i = Ne(i, e, t);
          }), i;
        }
      };

      var je = /*#__PURE__*/function () {
        function je(t) {
          var _this5 = this;

          _classCallCheck(this, je);

          e(this, "get", function (e) {
            if (!je.supported || !_this5.enabled) return null;
            var t = window.localStorage.getItem(_this5.key);
            if (V(t)) return null;
            var i = JSON.parse(t);
            return L(e) && e.length ? i[e] : i;
          }), e(this, "set", function (e) {
            if (!je.supported || !_this5.enabled) return;
            if (!N(e)) return;

            var t = _this5.get();

            V(t) && (t = {}), K(t, e), window.localStorage.setItem(_this5.key, JSON.stringify(t));
          }), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
        }

        _createClass(je, null, [{
          key: "supported",
          get: function get() {
            try {
              if (!("localStorage" in window)) return !1;
              var _e5 = "___test";
              return window.localStorage.setItem(_e5, _e5), window.localStorage.removeItem(_e5), !0;
            } catch (e) {
              return !1;
            }
          }
        }]);

        return je;
      }();

      function qe(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
        return new Promise(function (i, s) {
          try {
            var _s4 = new XMLHttpRequest();

            if (!("withCredentials" in _s4)) return;
            _s4.addEventListener("load", function () {
              if ("text" === t) try {
                i(JSON.parse(_s4.responseText));
              } catch (e) {
                i(_s4.responseText);
              } else i(_s4.response);
            }), _s4.addEventListener("error", function () {
              throw new Error(_s4.status);
            }), _s4.open("GET", e, !0), _s4.responseType = t, _s4.send();
          } catch (e) {
            s(e);
          }
        });
      }

      function De(e, t) {
        if (!L(e)) return;
        var i = L(t);
        var s = !1;

        var n = function n() {
          return null !== document.getElementById(t);
        },
            a = function a(e, t) {
          e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e);
        };

        if (!i || !n()) {
          var _n3 = je.supported,
              _l2 = document.createElement("div");

          if (_l2.setAttribute("hidden", ""), i && _l2.setAttribute("id", t), _n3) {
            var _e6 = window.localStorage.getItem("cache-" + t);

            if (s = null !== _e6, s) {
              var _t3 = JSON.parse(_e6);

              a(_l2, _t3.content);
            }
          }

          qe(e).then(function (e) {
            V(e) || (_n3 && window.localStorage.setItem("cache-" + t, JSON.stringify({
              content: e
            })), a(_l2, e));
          }).catch(function () {});
        }
      }

      var Fe = function Fe(e) {
        return Math.trunc(e / 60 / 60 % 60, 10);
      };

      function He() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        if (!I(e)) return He(void 0, t, i);

        var s = function s(e) {
          return ("0" + e).slice(-2);
        };

        var n = Fe(e);
        var a = (l = e, Math.trunc(l / 60 % 60, 10));
        var l;

        var o = function (e) {
          return Math.trunc(e % 60, 10);
        }(e);

        return n = t || n > 0 ? n + ":" : "", "".concat(i && e > 0 ? "-" : "").concat(n).concat(s(a), ":").concat(s(o));
      }

      var Re = {
        getIconUrl: function getIconUrl() {
          var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || W.isIE && !window.svg4everybody;
          return {
            url: this.config.iconUrl,
            cors: e
          };
        },
        findElements: function findElements() {
          try {
            return this.elements.controls = oe.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
              play: le.call(this, this.config.selectors.buttons.play),
              pause: oe.call(this, this.config.selectors.buttons.pause),
              restart: oe.call(this, this.config.selectors.buttons.restart),
              rewind: oe.call(this, this.config.selectors.buttons.rewind),
              fastForward: oe.call(this, this.config.selectors.buttons.fastForward),
              mute: oe.call(this, this.config.selectors.buttons.mute),
              pip: oe.call(this, this.config.selectors.buttons.pip),
              airplay: oe.call(this, this.config.selectors.buttons.airplay),
              settings: oe.call(this, this.config.selectors.buttons.settings),
              captions: oe.call(this, this.config.selectors.buttons.captions),
              fullscreen: oe.call(this, this.config.selectors.buttons.fullscreen)
            }, this.elements.progress = oe.call(this, this.config.selectors.progress), this.elements.inputs = {
              seek: oe.call(this, this.config.selectors.inputs.seek),
              volume: oe.call(this, this.config.selectors.inputs.volume)
            }, this.elements.display = {
              buffer: oe.call(this, this.config.selectors.display.buffer),
              currentTime: oe.call(this, this.config.selectors.display.currentTime),
              duration: oe.call(this, this.config.selectors.display.duration)
            }, D(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0;
          } catch (e) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
          }
        },
        createIcon: function createIcon(e, t) {
          var i = "http://www.w3.org/2000/svg",
              s = Re.getIconUrl.call(this),
              n = "".concat(s.cors ? "" : s.url, "#").concat(this.config.iconPrefix),
              a = document.createElementNS(i, "svg");
          Q(a, K(t, {
            "aria-hidden": "true",
            focusable: "false"
          }));
          var l = document.createElementNS(i, "use"),
              o = "".concat(n, "-").concat(e);
          return "href" in l && l.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), a.appendChild(l), a;
        },
        createLabel: function createLabel(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var i = Oe.get(e, this.config);
          return X("span", _objectSpread(_objectSpread({}, t), {}, {
            class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
          }), i);
        },
        createBadge: function createBadge(e) {
          if (V(e)) return null;
          var t = X("span", {
            class: this.config.classNames.menu.value
          });
          return t.appendChild(X("span", {
            class: this.config.classNames.menu.badge
          }, e)), t;
        },
        createButton: function createButton(e, t) {
          var _this6 = this;

          var i = K({}, t);

          var s = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var t = e.toString();
            return t = function () {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
              var t = e.toString();
              return t = Ne(t, "-", " "), t = Ne(t, "_", " "), t = Ie(t), Ne(t, " ", "");
            }(t), t.charAt(0).toLowerCase() + t.slice(1);
          }(e);

          var n = {
            element: "button",
            toggle: !1,
            label: null,
            icon: null,
            labelPressed: null,
            iconPressed: null
          };

          switch (["element", "icon", "label"].forEach(function (e) {
            Object.keys(i).includes(e) && (n[e] = i[e], delete i[e]);
          }), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some(function (e) {
            return e === _this6.config.classNames.control;
          }) || K(i, {
            class: "".concat(i.class, " ").concat(this.config.classNames.control)
          }) : i.class = this.config.classNames.control, e) {
            case "play":
              n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
              break;

            case "mute":
              n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
              break;

            case "captions":
              n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
              break;

            case "fullscreen":
              n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
              break;

            case "play-large":
              i.class += " ".concat(this.config.classNames.control, "--overlaid"), s = "play", n.label = "play", n.icon = "play";
              break;

            default:
              V(n.label) && (n.label = s), V(n.icon) && (n.icon = e);
          }

          var a = X(n.element);
          return n.toggle ? (a.appendChild(Re.createIcon.call(this, n.iconPressed, {
            class: "icon--pressed"
          })), a.appendChild(Re.createIcon.call(this, n.icon, {
            class: "icon--not-pressed"
          })), a.appendChild(Re.createLabel.call(this, n.labelPressed, {
            class: "label--pressed"
          })), a.appendChild(Re.createLabel.call(this, n.label, {
            class: "label--not-pressed"
          }))) : (a.appendChild(Re.createIcon.call(this, n.icon)), a.appendChild(Re.createLabel.call(this, n.label))), K(i, te(this.config.selectors.buttons[s], i)), Q(a, i), "play" === s ? (j(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(a)) : this.elements.buttons[s] = a, a;
        },
        createRange: function createRange(e, t) {
          var i = X("input", K(te(this.config.selectors.inputs[e]), {
            type: "range",
            min: 0,
            max: 100,
            step: .01,
            value: 0,
            autocomplete: "off",
            role: "slider",
            "aria-label": Oe.get(e, this.config),
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": 0
          }, t));
          return this.elements.inputs[e] = i, Re.updateRangeFill.call(this, i), v.setup(i), i;
        },
        createProgress: function createProgress(e, t) {
          var i = X("progress", K(te(this.config.selectors.display[e]), {
            min: 0,
            max: 100,
            value: 0,
            role: "progressbar",
            "aria-hidden": !0
          }, t));

          if ("volume" !== e) {
            i.appendChild(X("span", null, "0"));

            var _t4 = {
              played: "played",
              buffer: "buffered"
            }[e],
                _s5 = _t4 ? Oe.get(_t4, this.config) : "";

            i.innerText = "% " + _s5.toLowerCase();
          }

          return this.elements.display[e] = i, i;
        },
        createTime: function createTime(e, t) {
          var i = te(this.config.selectors.display[e], t),
              s = X("div", K(i, {
            class: "".concat(i.class ? i.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
            "aria-label": Oe.get(e, this.config)
          }), "00:00");
          return this.elements.display[e] = s, s;
        },
        bindMenuItemShortcuts: function bindMenuItemShortcuts(e, t) {
          var _this7 = this;

          me.call(this, e, "keydown keyup", function (i) {
            if (![32, 38, 39, 40].includes(i.which)) return;
            if (i.preventDefault(), i.stopPropagation(), "keydown" === i.type) return;
            var s = ae(e, '[role="menuitemradio"]');
            if (!s && [32, 39].includes(i.which)) Re.showMenuPanel.call(_this7, t, !0);else {
              var _t5;

              32 !== i.which && (40 === i.which || s && 39 === i.which ? (_t5 = e.nextElementSibling, D(_t5) || (_t5 = e.parentNode.firstElementChild)) : (_t5 = e.previousElementSibling, D(_t5) || (_t5 = e.parentNode.lastElementChild)), re.call(_this7, _t5, !0));
            }
          }, !1), me.call(this, e, "keyup", function (e) {
            13 === e.which && Re.focusFirstMenuItem.call(_this7, null, !0);
          });
        },
        createMenuItem: function createMenuItem(_ref9) {
          var _this8 = this;

          var e = _ref9.value,
              t = _ref9.list,
              i = _ref9.type,
              s = _ref9.title,
              _ref9$badge = _ref9.badge,
              n = _ref9$badge === void 0 ? null : _ref9$badge,
              _ref9$checked = _ref9.checked,
              a = _ref9$checked === void 0 ? !1 : _ref9$checked;
          var l = te(this.config.selectors.inputs[i]),
              o = X("button", K(l, {
            type: "button",
            role: "menuitemradio",
            class: "".concat(this.config.classNames.control, " ").concat(l.class ? l.class : "").trim(),
            "aria-checked": a,
            value: e
          })),
              r = X("span");
          r.innerHTML = s, D(n) && r.appendChild(n), o.appendChild(r), Object.defineProperty(o, "checked", {
            enumerable: !0,
            get: function get() {
              return "true" === o.getAttribute("aria-checked");
            },
            set: function set(e) {
              e && Array.from(o.parentNode.children).filter(function (e) {
                return ae(e, '[role="menuitemradio"]');
              }).forEach(function (e) {
                return e.setAttribute("aria-checked", "false");
              }), o.setAttribute("aria-checked", e ? "true" : "false");
            }
          }), this.listeners.bind(o, "click keyup", function (t) {
            if (!H(t) || 32 === t.which) {
              switch (t.preventDefault(), t.stopPropagation(), o.checked = !0, i) {
                case "language":
                  _this8.currentTrack = Number(e);
                  break;

                case "quality":
                  _this8.quality = e;
                  break;

                case "speed":
                  _this8.speed = parseFloat(e);
              }

              Re.showMenuPanel.call(_this8, "home", H(t));
            }
          }, i, !1), Re.bindMenuItemShortcuts.call(this, o, i), t.appendChild(o);
        },
        formatTime: function formatTime() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          return I(e) ? He(e, Fe(this.duration) > 0, t) : e;
        },
        updateTimeDisplay: function updateTimeDisplay() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          D(e) && I(t) && (e.innerText = Re.formatTime(t, i));
        },
        updateVolume: function updateVolume() {
          this.supported.ui && (D(this.elements.inputs.volume) && Re.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), D(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
        },
        setRange: function setRange(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          D(e) && (e.value = t, Re.updateRangeFill.call(this, e));
        },
        updateProgress: function updateProgress(e) {
          var _this9 = this;

          if (!this.supported.ui || !F(e)) return;
          var t = 0;

          var i = function i(e, t) {
            var i = I(t) ? t : 0,
                s = D(e) ? e : _this9.elements.display.buffer;

            if (D(s)) {
              s.value = i;
              var _e7 = s.getElementsByTagName("span")[0];
              D(_e7) && (_e7.childNodes[0].nodeValue = i);
            }
          };

          if (e) switch (e.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
              s = this.currentTime, n = this.duration, t = 0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n) ? 0 : (s / n * 100).toFixed(2), "timeupdate" === e.type && Re.setRange.call(this, this.elements.inputs.seek, t);
              break;

            case "playing":
            case "progress":
              i(this.elements.display.buffer, 100 * this.buffered);
          }
          var s, n;
        },
        updateRangeFill: function updateRangeFill(e) {
          var t = F(e) ? e.target : e;

          if (D(t) && "range" === t.getAttribute("type")) {
            if (ae(t, this.config.selectors.inputs.seek)) {
              t.setAttribute("aria-valuenow", this.currentTime);

              var _e8 = Re.formatTime(this.currentTime),
                  _i5 = Re.formatTime(this.duration),
                  _s6 = Oe.get("seekLabel", this.config);

              t.setAttribute("aria-valuetext", _s6.replace("{currentTime}", _e8).replace("{duration}", _i5));
            } else if (ae(t, this.config.selectors.inputs.volume)) {
              var _e9 = 100 * t.value;

              t.setAttribute("aria-valuenow", _e9), t.setAttribute("aria-valuetext", _e9.toFixed(1) + "%");
            } else t.setAttribute("aria-valuenow", t.value);

            W.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%");
          }
        },
        updateSeekTooltip: function updateSeekTooltip(e) {
          var _this10 = this;

          if (!this.config.tooltips.seek || !D(this.elements.inputs.seek) || !D(this.elements.display.seekTooltip) || 0 === this.duration) return;

          var t = this.config.classNames.tooltip + "--visible",
              i = function i(e) {
            return se(_this10.elements.display.seekTooltip, t, e);
          };

          if (this.touch) return void i(!1);
          var s = 0;
          var n = this.elements.progress.getBoundingClientRect();
          if (F(e)) s = 100 / n.width * (e.pageX - n.left);else {
            if (!ne(this.elements.display.seekTooltip, t)) return;
            s = parseFloat(this.elements.display.seekTooltip.style.left, 10);
          }
          s < 0 ? s = 0 : s > 100 && (s = 100), Re.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * s), this.elements.display.seekTooltip.style.left = s + "%", F(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type);
        },
        timeUpdate: function timeUpdate(e) {
          var t = !D(this.elements.display.duration) && this.config.invertTime;
          Re.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || Re.updateProgress.call(this, e);
        },
        durationUpdate: function durationUpdate() {
          if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
          if (this.duration >= Math.pow(2, 32)) return ie(this.elements.display.currentTime, !0), void ie(this.elements.progress, !0);
          D(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
          var e = D(this.elements.display.duration);
          !e && this.config.displayDuration && this.paused && Re.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && Re.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), Re.updateSeekTooltip.call(this);
        },
        toggleMenuButton: function toggleMenuButton(e, t) {
          ie(this.elements.settings.buttons[e], !t);
        },
        updateSetting: function updateSetting(e, t, i) {
          var s = this.elements.settings.panels[e];
          var n = null,
              a = t;
          if ("captions" === e) n = this.currentTrack;else {
            if (n = V(i) ? this[e] : i, V(n) && (n = this.config[e].default), !V(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn("Unsupported value of '".concat(n, "' for ").concat(e));
            if (!this.config[e].options.includes(n)) return void this.debug.warn("Disabled value of '".concat(n, "' for ").concat(e));
          }
          if (D(a) || (a = s && s.querySelector('[role="menu"]')), !D(a)) return;
          this.elements.settings.buttons[e].querySelector("." + this.config.classNames.menu.value).innerHTML = Re.getLabel.call(this, e, n);
          var l = a && a.querySelector("[value=\"".concat(n, "\"]"));
          D(l) && (l.checked = !0);
        },
        getLabel: function getLabel(e, t) {
          switch (e) {
            case "speed":
              return 1 === t ? Oe.get("normal", this.config) : t + "&times;";

            case "quality":
              if (I(t)) {
                var _e10 = Oe.get("qualityLabel." + t, this.config);

                return _e10.length ? _e10 : t + "p";
              }

              return Ie(t);

            case "captions":
              return Be.getLabel.call(this);

            default:
              return null;
          }
        },
        setQualityMenu: function setQualityMenu(e) {
          var _this11 = this;

          if (!D(this.elements.settings.panels.quality)) return;
          var t = "quality",
              i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
          j(e) && (this.options.quality = we(e).filter(function (e) {
            return _this11.config.quality.options.includes(e);
          }));
          var s = !V(this.options.quality) && this.options.quality.length > 1;
          if (Re.toggleMenuButton.call(this, t, s), Z(i), Re.checkMenu.call(this), !s) return;

          var n = function n(e) {
            var t = Oe.get("qualityBadge." + e, _this11.config);
            return t.length ? Re.createBadge.call(_this11, t) : null;
          };

          this.options.quality.sort(function (e, t) {
            var i = _this11.config.quality.options;
            return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
          }).forEach(function (e) {
            Re.createMenuItem.call(_this11, {
              value: e,
              list: i,
              type: t,
              title: Re.getLabel.call(_this11, "quality", e),
              badge: n(e)
            });
          }), Re.updateSetting.call(this, t, i);
        },
        setCaptionsMenu: function setCaptionsMenu() {
          var _this12 = this;

          if (!D(this.elements.settings.panels.captions)) return;
          var e = "captions",
              t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
              i = Be.getTracks.call(this),
              s = Boolean(i.length);
          if (Re.toggleMenuButton.call(this, e, s), Z(t), Re.checkMenu.call(this), !s) return;
          var n = i.map(function (e, i) {
            return {
              value: i,
              checked: _this12.captions.toggled && _this12.currentTrack === i,
              title: Be.getLabel.call(_this12, e),
              badge: e.language && Re.createBadge.call(_this12, e.language.toUpperCase()),
              list: t,
              type: "language"
            };
          });
          n.unshift({
            value: -1,
            checked: !this.captions.toggled,
            title: Oe.get("disabled", this.config),
            list: t,
            type: "language"
          }), n.forEach(Re.createMenuItem.bind(this)), Re.updateSetting.call(this, e, t);
        },
        setSpeedMenu: function setSpeedMenu() {
          var _this13 = this;

          if (!D(this.elements.settings.panels.speed)) return;
          var e = "speed",
              t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
          this.options.speed = this.options.speed.filter(function (e) {
            return e >= _this13.minimumSpeed && e <= _this13.maximumSpeed;
          });
          var i = !V(this.options.speed) && this.options.speed.length > 1;
          Re.toggleMenuButton.call(this, e, i), Z(t), Re.checkMenu.call(this), i && (this.options.speed.forEach(function (i) {
            Re.createMenuItem.call(_this13, {
              value: i,
              list: t,
              type: e,
              title: Re.getLabel.call(_this13, "speed", i)
            });
          }), Re.updateSetting.call(this, e, t));
        },
        checkMenu: function checkMenu() {
          var e = this.elements.settings.buttons,
              t = !V(e) && Object.values(e).some(function (e) {
            return !e.hidden;
          });
          ie(this.elements.settings.menu, !t);
        },
        focusFirstMenuItem: function focusFirstMenuItem(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          if (this.elements.settings.popup.hidden) return;
          var i = e;
          D(i) || (i = Object.values(this.elements.settings.panels).find(function (e) {
            return !e.hidden;
          }));
          var s = i.querySelector('[role^="menuitem"]');
          re.call(this, s, t);
        },
        toggleMenu: function toggleMenu(e) {
          var t = this.elements.settings.popup,
              i = this.elements.buttons.settings;
          if (!D(t) || !D(i)) return;
          var s = t.hidden;
          var n = s;
          if (_(e)) n = e;else if (H(e) && 27 === e.which) n = !1;else if (F(e)) {
            var _s7 = O(e.composedPath) ? e.composedPath()[0] : e.target,
                _a3 = t.contains(_s7);

            if (_a3 || !_a3 && e.target !== i && n) return;
          }
          i.setAttribute("aria-expanded", n), ie(t, !n), se(this.elements.container, this.config.classNames.menu.open, n), n && H(e) ? Re.focusFirstMenuItem.call(this, null, !0) : n || s || re.call(this, i, H(e));
        },
        getMenuSize: function getMenuSize(e) {
          var t = e.cloneNode(!0);
          t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
          var i = t.scrollWidth,
              s = t.scrollHeight;
          return G(t), {
            width: i,
            height: s
          };
        },
        showMenuPanel: function showMenuPanel() {
          var _this14 = this;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(e));
          if (!D(i)) return;
          var s = i.parentNode,
              n = Array.from(s.children).find(function (e) {
            return !e.hidden;
          });

          if (he.transitions && !he.reducedMotion) {
            s.style.width = n.scrollWidth + "px", s.style.height = n.scrollHeight + "px";

            var _e11 = Re.getMenuSize.call(this, i),
                _t6 = function _t6(e) {
              e.target === s && ["width", "height"].includes(e.propertyName) && (s.style.width = "", s.style.height = "", pe.call(_this14, s, B, _t6));
            };

            me.call(this, s, B, _t6), s.style.width = _e11.width + "px", s.style.height = _e11.height + "px";
          }

          ie(n, !0), ie(i, !1), Re.focusFirstMenuItem.call(this, i, t);
        },
        setDownloadUrl: function setDownloadUrl() {
          var e = this.elements.buttons.download;
          D(e) && e.setAttribute("href", this.download);
        },
        create: function create(e) {
          var _this15 = this;

          var t = Re.bindMenuItemShortcuts,
              i = Re.createButton,
              s = Re.createProgress,
              n = Re.createRange,
              a = Re.createTime,
              l = Re.setQualityMenu,
              o = Re.setSpeedMenu,
              r = Re.showMenuPanel;
          this.elements.controls = null, j(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
          var c = X("div", te(this.config.selectors.controls.wrapper));
          this.elements.controls = c;
          var h = {
            class: "plyr__controls__item"
          };
          return we(j(this.config.controls) ? this.config.controls : []).forEach(function (l) {
            if ("restart" === l && c.appendChild(i.call(_this15, "restart", h)), "rewind" === l && c.appendChild(i.call(_this15, "rewind", h)), "play" === l && c.appendChild(i.call(_this15, "play", h)), "fast-forward" === l && c.appendChild(i.call(_this15, "fast-forward", h)), "progress" === l) {
              var _t7 = X("div", {
                class: h.class + " plyr__progress__container"
              }),
                  _i6 = X("div", te(_this15.config.selectors.progress));

              if (_i6.appendChild(n.call(_this15, "seek", {
                id: "plyr-seek-" + e.id
              })), _i6.appendChild(s.call(_this15, "buffer")), _this15.config.tooltips.seek) {
                var _e12 = X("span", {
                  class: _this15.config.classNames.tooltip
                }, "00:00");

                _i6.appendChild(_e12), _this15.elements.display.seekTooltip = _e12;
              }

              _this15.elements.progress = _i6, _t7.appendChild(_this15.elements.progress), c.appendChild(_t7);
            }

            if ("current-time" === l && c.appendChild(a.call(_this15, "currentTime", h)), "duration" === l && c.appendChild(a.call(_this15, "duration", h)), "mute" === l || "volume" === l) {
              var _t8 = _this15.elements.volume;

              if (D(_t8) && c.contains(_t8) || (_t8 = X("div", K({}, h, {
                class: (h.class + " plyr__volume").trim()
              })), _this15.elements.volume = _t8, c.appendChild(_t8)), "mute" === l && _t8.appendChild(i.call(_this15, "mute")), "volume" === l && !W.isIos) {
                var _i7 = {
                  max: 1,
                  step: .05,
                  value: _this15.config.volume
                };

                _t8.appendChild(n.call(_this15, "volume", K(_i7, {
                  id: "plyr-volume-" + e.id
                })));
              }
            }

            if ("captions" === l && c.appendChild(i.call(_this15, "captions", h)), "settings" === l && !V(_this15.config.settings)) {
              var _s8 = X("div", K({}, h, {
                class: (h.class + " plyr__menu").trim(),
                hidden: ""
              }));

              _s8.appendChild(i.call(_this15, "settings", {
                "aria-haspopup": !0,
                "aria-controls": "plyr-settings-" + e.id,
                "aria-expanded": !1
              }));

              var _n4 = X("div", {
                class: "plyr__menu__container",
                id: "plyr-settings-" + e.id,
                hidden: ""
              }),
                  _a4 = X("div"),
                  _l3 = X("div", {
                id: "plyr-settings-".concat(e.id, "-home")
              }),
                  _o2 = X("div", {
                role: "menu"
              });

              _l3.appendChild(_o2), _a4.appendChild(_l3), _this15.elements.settings.panels.home = _l3, _this15.config.settings.forEach(function (i) {
                var s = X("button", K(te(_this15.config.selectors.buttons.settings), {
                  type: "button",
                  class: "".concat(_this15.config.classNames.control, " ").concat(_this15.config.classNames.control, "--forward"),
                  role: "menuitem",
                  "aria-haspopup": !0,
                  hidden: ""
                }));
                t.call(_this15, s, i), me.call(_this15, s, "click", function () {
                  r.call(_this15, i, !1);
                });
                var n = X("span", null, Oe.get(i, _this15.config)),
                    l = X("span", {
                  class: _this15.config.classNames.menu.value
                });
                l.innerHTML = e[i], n.appendChild(l), s.appendChild(n), _o2.appendChild(s);
                var c = X("div", {
                  id: "plyr-settings-".concat(e.id, "-").concat(i),
                  hidden: ""
                }),
                    h = X("button", {
                  type: "button",
                  class: "".concat(_this15.config.classNames.control, " ").concat(_this15.config.classNames.control, "--back")
                });
                h.appendChild(X("span", {
                  "aria-hidden": !0
                }, Oe.get(i, _this15.config))), h.appendChild(X("span", {
                  class: _this15.config.classNames.hidden
                }, Oe.get("menuBack", _this15.config))), me.call(_this15, c, "keydown", function (e) {
                  37 === e.which && (e.preventDefault(), e.stopPropagation(), r.call(_this15, "home", !0));
                }, !1), me.call(_this15, h, "click", function () {
                  r.call(_this15, "home", !1);
                }), c.appendChild(h), c.appendChild(X("div", {
                  role: "menu"
                })), _a4.appendChild(c), _this15.elements.settings.buttons[i] = s, _this15.elements.settings.panels[i] = c;
              }), _n4.appendChild(_a4), _s8.appendChild(_n4), c.appendChild(_s8), _this15.elements.settings.popup = _n4, _this15.elements.settings.menu = _s8;
            }

            if ("pip" === l && he.pip && c.appendChild(i.call(_this15, "pip", h)), "airplay" === l && he.airplay && c.appendChild(i.call(_this15, "airplay", h)), "download" === l) {
              var _e13 = K({}, h, {
                element: "a",
                href: _this15.download,
                target: "_blank"
              });

              _this15.isHTML5 && (_e13.download = "");
              var _t9 = _this15.config.urls.download;
              !$(_t9) && _this15.isEmbed && K(_e13, {
                icon: "logo-" + _this15.provider,
                label: _this15.provider
              }), c.appendChild(i.call(_this15, "download", _e13));
            }

            "fullscreen" === l && c.appendChild(i.call(_this15, "fullscreen", h));
          }), this.isHTML5 && l.call(this, xe.getQualityOptions.call(this)), o.call(this), c;
        },
        inject: function inject() {
          var _this16 = this;

          if (this.config.loadSprite) {
            var _e14 = Re.getIconUrl.call(this);

            _e14.cors && De(_e14.url, "sprite-plyr");
          }

          this.id = Math.floor(1e4 * Math.random());
          var e = null;
          this.elements.controls = null;
          var t = {
            id: this.id,
            seektime: this.config.seekTime,
            title: this.config.title
          };
          var i,
              s = !0;

          if (O(this.config.controls) && (this.config.controls = this.config.controls.call(this, t)), this.config.controls || (this.config.controls = []), D(this.config.controls) || L(this.config.controls) ? e = this.config.controls : (e = Re.create.call(this, {
            id: this.id,
            seektime: this.config.seekTime,
            speed: this.speed,
            quality: this.quality,
            captions: Be.getLabel.call(this)
          }), s = !1), s && L(this.config.controls) && (e = function (e) {
            var i = e;
            return Object.entries(t).forEach(function (_ref10) {
              var _ref11 = _slicedToArray(_ref10, 2),
                  e = _ref11[0],
                  t = _ref11[1];

              i = Ne(i, "{".concat(e, "}"), t);
            }), i;
          }(e)), L(this.config.selectors.controls.container) && (i = document.querySelector(this.config.selectors.controls.container)), D(i) || (i = this.elements.container), i[D(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e), D(this.elements.controls) || Re.findElements.call(this), !V(this.elements.buttons)) {
            var _e15 = function _e15(e) {
              var t = _this16.config.classNames.controlPressed;
              Object.defineProperty(e, "pressed", {
                enumerable: !0,
                get: function get() {
                  return ne(e, t);
                },
                set: function set() {
                  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                  se(e, t, i);
                }
              });
            };

            Object.values(this.elements.buttons).filter(Boolean).forEach(function (t) {
              j(t) || q(t) ? Array.from(t).filter(Boolean).forEach(_e15) : _e15(t);
            });
          }

          if (W.isEdge && U(i), this.config.tooltips.controls) {
            var _this$config = this.config,
                _e16 = _this$config.classNames,
                _t10 = _this$config.selectors,
                _i8 = "".concat(_t10.controls.wrapper, " ").concat(_t10.labels, " .").concat(_e16.hidden),
                _s9 = le.call(this, _i8);

            Array.from(_s9).forEach(function (e) {
              se(e, _this16.config.classNames.hidden, !1), se(e, _this16.config.classNames.tooltip, !0);
            });
          }
        }
      };

      function $e(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var i = e;

        if (t) {
          var _e17 = document.createElement("a");

          _e17.href = i, i = _e17.href;
        }

        try {
          return new URL(i);
        } catch (e) {
          return null;
        }
      }

      function Ve(e) {
        var t = new URLSearchParams();
        return N(e) && Object.entries(e).forEach(function (_ref12) {
          var _ref13 = _slicedToArray(_ref12, 2),
              e = _ref13[0],
              i = _ref13[1];

          t.set(e, i);
        }), t;
      }

      var Be = {
        setup: function setup() {
          var _i9, _i10, _this$config$captions;

          if (!this.supported.ui) return;
          if (!this.isVideo || this.isYouTube || this.isHTML5 && !he.textTracks) return void (j(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Re.setCaptionsMenu.call(this));
          var e, t;

          if (D(this.elements.captions) || (this.elements.captions = X("div", te(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, D(e) && D(t) && t.parentNode.insertBefore(e, t.nextSibling)), W.isIE && window.URL) {
            var _e18 = this.media.querySelectorAll("track");

            Array.from(_e18).forEach(function (e) {
              var t = e.getAttribute("src"),
                  i = $e(t);
              null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && qe(t, "blob").then(function (t) {
                e.setAttribute("src", window.URL.createObjectURL(t));
              }).catch(function () {
                G(e);
              });
            });
          }

          var i = we((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
            return e.split("-")[0];
          }));
          var s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
          "auto" === s && (_i9 = i, _i10 = _slicedToArray(_i9, 1), s = _i10[0], _i9);
          var n = this.storage.get("captions");

          if (_(n) || (_this$config$captions = this.config.captions, n = _this$config$captions.active, _this$config$captions), Object.assign(this.captions, {
            toggled: !1,
            active: n,
            language: s,
            languages: i
          }), this.isHTML5) {
            var _e19 = this.config.captions.update ? "addtrack removetrack" : "removetrack";

            me.call(this, this.media.textTracks, _e19, Be.update.bind(this));
          }

          setTimeout(Be.update.bind(this), 0);
        },
        update: function update() {
          var _this17 = this;

          var e = Be.getTracks.call(this, !0),
              _this$captions = this.captions,
              t = _this$captions.active,
              i = _this$captions.language,
              s = _this$captions.meta,
              n = _this$captions.currentTrackNode,
              a = Boolean(e.find(function (e) {
            return e.language === i;
          }));
          this.isHTML5 && this.isVideo && e.filter(function (e) {
            return !s.get(e);
          }).forEach(function (e) {
            _this17.debug.log("Track added", e), s.set(e, {
              default: "showing" === e.mode
            }), "showing" === e.mode && (e.mode = "hidden"), me.call(_this17, e, "cuechange", function () {
              return Be.updateCues.call(_this17);
            });
          }), (a && this.language !== i || !e.includes(n)) && (Be.setLanguage.call(this, i), Be.toggle.call(this, t && a)), se(this.elements.container, this.config.classNames.captions.enabled, !V(e)), j(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Re.setCaptionsMenu.call(this);
        },
        toggle: function toggle(e) {
          var _this18 = this;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          if (!this.supported.ui) return;
          var i = this.captions.toggled,
              s = this.config.classNames.captions.active,
              n = M(e) ? !i : e;

          if (n !== i) {
            if (t || (this.captions.active = n, this.storage.set({
              captions: n
            })), !this.language && n && !t) {
              var _e20 = Be.getTracks.call(this),
                  _t11 = Be.findTrack.call(this, [this.captions.language].concat(_toConsumableArray(this.captions.languages)), !0);

              return this.captions.language = _t11.language, void Be.set.call(this, _e20.indexOf(_t11));
            }

            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), se(this.elements.container, s, n), this.captions.toggled = n, Re.updateSetting.call(this, "captions"), fe.call(this, this.media, n ? "captionsenabled" : "captionsdisabled");
          }

          setTimeout(function () {
            n && _this18.captions.toggled && (_this18.captions.currentTrackNode.mode = "hidden");
          });
        },
        set: function set(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var i = Be.getTracks.call(this);
          if (-1 !== e) {
            if (I(e)) {
              if (e in i) {
                if (this.captions.currentTrack !== e) {
                  this.captions.currentTrack = e;

                  var _s10 = i[e],
                      _ref14 = _s10 || {},
                      _n5 = _ref14.language;

                  this.captions.currentTrackNode = _s10, Re.updateSetting.call(this, "captions"), t || (this.captions.language = _n5, this.storage.set({
                    language: _n5
                  })), this.isVimeo && this.embed.enableTextTrack(_n5), fe.call(this, this.media, "languagechange");
                }

                Be.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Be.updateCues.call(this);
              } else this.debug.warn("Track not found", e);
            } else this.debug.warn("Invalid caption argument", e);
          } else Be.toggle.call(this, !1, t);
        },
        setLanguage: function setLanguage(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          if (!L(e)) return void this.debug.warn("Invalid language argument", e);
          var i = e.toLowerCase();
          this.captions.language = i;
          var s = Be.getTracks.call(this),
              n = Be.findTrack.call(this, [i]);
          Be.set.call(this, s.indexOf(n), t);
        },
        getTracks: function getTracks() {
          var _this19 = this;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          return Array.from((this.media || {}).textTracks || []).filter(function (t) {
            return !_this19.isHTML5 || e || _this19.captions.meta.has(t);
          }).filter(function (e) {
            return ["captions", "subtitles"].includes(e.kind);
          });
        },
        findTrack: function findTrack(e) {
          var _this20 = this;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

          var i = Be.getTracks.call(this),
              s = function s(e) {
            return Number((_this20.captions.meta.get(e) || {}).default);
          },
              n = Array.from(i).sort(function (e, t) {
            return s(t) - s(e);
          });

          var a;
          return e.every(function (e) {
            return a = n.find(function (t) {
              return t.language === e;
            }), !a;
          }), a || (t ? n[0] : void 0);
        },
        getCurrentTrack: function getCurrentTrack() {
          return Be.getTracks.call(this)[this.currentTrack];
        },
        getLabel: function getLabel(e) {
          var t = e;
          return !R(t) && he.textTracks && this.captions.toggled && (t = Be.getCurrentTrack.call(this)), R(t) ? V(t.label) ? V(t.language) ? Oe.get("enabled", this.config) : e.language.toUpperCase() : t.label : Oe.get("disabled", this.config);
        },
        updateCues: function updateCues(e) {
          if (!this.supported.ui) return;
          if (!D(this.elements.captions)) return void this.debug.warn("No captions element to render to");
          if (!M(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
          var t = e;

          if (!t) {
            var _e21 = Be.getCurrentTrack.call(this);

            t = Array.from((_e21 || {}).activeCues || []).map(function (e) {
              return e.getCueAsHTML();
            }).map(Le);
          }

          var i = t.map(function (e) {
            return e.trim();
          }).join("\n");

          if (i !== this.elements.captions.innerHTML) {
            Z(this.elements.captions);

            var _e22 = X("span", te(this.config.selectors.caption));

            _e22.innerHTML = i, this.elements.captions.appendChild(_e22), fe.call(this, this.media, "cuechange");
          }
        }
      },
          Ue = {
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
        iconUrl: "https://cdn.plyr.io/3.6.7/plyr.svg",
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
          We = "picture-in-picture",
          ze = {
        html5: "html5",
        youtube: "youtube",
        vimeo: "vimeo"
      },
          Ke = function Ke() {};

      var Ye = /*#__PURE__*/function () {
        function Ye() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

          _classCallCheck(this, Ye);

          this.enabled = window.console && e, this.enabled && this.log("Debugging enabled");
        }

        _createClass(Ye, [{
          key: "log",
          get: function get() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : Ke;
          }
        }, {
          key: "warn",
          get: function get() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : Ke;
          }
        }, {
          key: "error",
          get: function get() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : Ke;
          }
        }]);

        return Ye;
      }();

      var Qe = /*#__PURE__*/function () {
        function Qe(t) {
          var _this21 = this;

          _classCallCheck(this, Qe);

          e(this, "onChange", function () {
            if (!_this21.enabled) return;
            var e = _this21.player.elements.buttons.fullscreen;
            D(e) && (e.pressed = _this21.active);
            var t = _this21.target === _this21.player.media ? _this21.target : _this21.player.elements.container;
            fe.call(_this21.player, t, _this21.active ? "enterfullscreen" : "exitfullscreen", !0);
          }), e(this, "toggleFallback", function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

            if (e ? _this21.scrollPosition = {
              x: window.scrollX || 0,
              y: window.scrollY || 0
            } : window.scrollTo(_this21.scrollPosition.x, _this21.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", se(_this21.target, _this21.player.config.classNames.fullscreen.fallback, e), W.isIos) {
              var _t12 = document.head.querySelector('meta[name="viewport"]');

              var _i11 = "viewport-fit=cover";
              _t12 || (_t12 = document.createElement("meta"), _t12.setAttribute("name", "viewport"));

              var _s11 = L(_t12.content) && _t12.content.includes(_i11);

              e ? (_this21.cleanupViewport = !_s11, _s11 || (_t12.content += "," + _i11)) : _this21.cleanupViewport && (_t12.content = _t12.content.split(",").filter(function (e) {
                return e.trim() !== _i11;
              }).join(","));
            }

            _this21.onChange();
          }), e(this, "trapFocus", function (e) {
            if (W.isIos || !_this21.active || "Tab" !== e.key || 9 !== e.keyCode) return;

            var t = document.activeElement,
                i = le.call(_this21.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                _i12 = _slicedToArray(i, 1),
                s = _i12[0],
                n = i[i.length - 1];

            t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), e.preventDefault());
          }), e(this, "update", function () {
            if (_this21.enabled) {
              var _e23;

              _e23 = _this21.forceFallback ? "Fallback (forced)" : Qe.native ? "Native" : "Fallback", _this21.player.debug.log(_e23 + " fullscreen enabled");
            } else _this21.player.debug.log("Fullscreen not supported and fallback disabled");

            se(_this21.player.elements.container, _this21.player.config.classNames.fullscreen.enabled, _this21.enabled);
          }), e(this, "enter", function () {
            _this21.enabled && (W.isIos && _this21.player.config.fullscreen.iosNative ? _this21.player.isVimeo ? _this21.player.embed.requestFullscreen() : _this21.target.webkitEnterFullscreen() : !Qe.native || _this21.forceFallback ? _this21.toggleFallback(!0) : _this21.prefix ? V(_this21.prefix) || _this21.target["".concat(_this21.prefix, "Request").concat(_this21.property)]() : _this21.target.requestFullscreen({
              navigationUI: "hide"
            }));
          }), e(this, "exit", function () {
            if (_this21.enabled) if (W.isIos && _this21.player.config.fullscreen.iosNative) _this21.target.webkitExitFullscreen(), ve(_this21.player.play());else if (!Qe.native || _this21.forceFallback) _this21.toggleFallback(!1);else if (_this21.prefix) {
              if (!V(_this21.prefix)) {
                var _e24 = "moz" === _this21.prefix ? "Cancel" : "Exit";

                document["".concat(_this21.prefix).concat(_e24).concat(_this21.property)]();
              }
            } else (document.cancelFullScreen || document.exitFullscreen).call(document);
          }), e(this, "toggle", function () {
            _this21.active ? _this21.exit() : _this21.enter();
          }), this.player = t, this.prefix = Qe.prefix, this.property = Qe.property, this.scrollPosition = {
            x: 0,
            y: 0
          }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function (e, t) {
            var _Element2 = Element,
                i = _Element2.prototype;
            return (i.closest || function () {
              var e = this;

              do {
                if (ae.matches(e, t)) return e;
                e = e.parentElement || e.parentNode;
              } while (null !== e && 1 === e.nodeType);

              return null;
            }).call(e, t);
          }(this.player.elements.container, t.config.fullscreen.container), me.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function () {
            _this21.onChange();
          }), me.call(this.player, this.player.elements.container, "dblclick", function (e) {
            D(_this21.player.elements.controls) && _this21.player.elements.controls.contains(e.target) || _this21.player.listeners.proxy(e, _this21.toggle, "fullscreen");
          }), me.call(this, this.player.elements.container, "keydown", function (e) {
            return _this21.trapFocus(e);
          }), this.update();
        }

        _createClass(Qe, [{
          key: "usingNative",
          get: function get() {
            return Qe.native && !this.forceFallback;
          }
        }, {
          key: "enabled",
          get: function get() {
            return (Qe.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
          }
        }, {
          key: "active",
          get: function get() {
            if (!this.enabled) return !1;
            if (!Qe.native || this.forceFallback) return ne(this.target, this.player.config.classNames.fullscreen.fallback);
            var e = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
            return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target;
          }
        }, {
          key: "target",
          get: function get() {
            return W.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
          }
        }], [{
          key: "native",
          get: function get() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
          }
        }, {
          key: "prefix",
          get: function get() {
            if (O(document.exitFullscreen)) return "";
            var e = "";
            return ["webkit", "moz", "ms"].some(function (t) {
              return !(!O(document[t + "ExitFullscreen"]) && !O(document[t + "CancelFullScreen"]) || (e = t, 0));
            }), e;
          }
        }, {
          key: "property",
          get: function get() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
          }
        }]);

        return Qe;
      }();

      function Xe(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        return new Promise(function (i, s) {
          var n = new Image(),
              a = function a() {
            delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n);
          };

          Object.assign(n, {
            onload: a,
            onerror: a,
            src: e
          });
        });
      }

      var Je = {
        addStyleHook: function addStyleHook() {
          se(this.elements.container, this.config.selectors.container.replace(".", ""), !0), se(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        },
        toggleNativeControls: function toggleNativeControls() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        },
        build: function build() {
          var _this22 = this;

          if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void Je.toggleNativeControls.call(this, !0);
          D(this.elements.controls) || (Re.inject.call(this), this.listeners.controls()), Je.toggleNativeControls.call(this), this.isHTML5 && Be.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Re.updateVolume.call(this), Re.timeUpdate.call(this), Je.checkPlaying.call(this), se(this.elements.container, this.config.classNames.pip.supported, he.pip && this.isHTML5 && this.isVideo), se(this.elements.container, this.config.classNames.airplay.supported, he.airplay && this.isHTML5), se(this.elements.container, this.config.classNames.isIos, W.isIos), se(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
            fe.call(_this22, _this22.media, "ready");
          }, 0), Je.setTitle.call(this), this.poster && Je.setPoster.call(this, this.poster, !1).catch(function () {}), this.config.duration && Re.durationUpdate.call(this);
        },
        setTitle: function setTitle() {
          var e = Oe.get("play", this.config);

          if (L(this.config.title) && !V(this.config.title) && (e += ", " + this.config.title), Array.from(this.elements.buttons.play || []).forEach(function (t) {
            t.setAttribute("aria-label", e);
          }), this.isEmbed) {
            var _e25 = oe.call(this, "iframe");

            if (!D(_e25)) return;

            var _t13 = V(this.config.title) ? "video" : this.config.title,
                _i13 = Oe.get("frameTitle", this.config);

            _e25.setAttribute("title", _i13.replace("{title}", _t13));
          }
        },
        togglePoster: function togglePoster(e) {
          se(this.elements.container, this.config.classNames.posterEnabled, e);
        },
        setPoster: function setPoster(e) {
          var _this23 = this;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          return t && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), ye.call(this).then(function () {
            return Xe(e);
          }).catch(function (t) {
            throw e === _this23.poster && Je.togglePoster.call(_this23, !1), t;
          }).then(function () {
            if (e !== _this23.poster) throw new Error("setPoster cancelled by later call to setPoster");
          }).then(function () {
            return Object.assign(_this23.elements.poster.style, {
              backgroundImage: "url('".concat(e, "')"),
              backgroundSize: ""
            }), Je.togglePoster.call(_this23, !0), e;
          }));
        },
        checkPlaying: function checkPlaying(e) {
          var _this24 = this;

          se(this.elements.container, this.config.classNames.playing, this.playing), se(this.elements.container, this.config.classNames.paused, this.paused), se(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
            Object.assign(e, {
              pressed: _this24.playing
            }), e.setAttribute("aria-label", Oe.get(_this24.playing ? "pause" : "play", _this24.config));
          }), F(e) && "timeupdate" === e.type || Je.toggleControls.call(this);
        },
        checkLoading: function checkLoading(e) {
          var _this25 = this;

          this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
            se(_this25.elements.container, _this25.config.classNames.loading, _this25.loading), Je.toggleControls.call(_this25);
          }, this.loading ? 250 : 0);
        },
        toggleControls: function toggleControls(e) {
          var t = this.elements.controls;

          if (t && this.config.hideControls) {
            var _i14 = this.touch && this.lastSeekTime + 2e3 > Date.now();

            this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || _i14));
          }
        },
        migrateStyles: function migrateStyles() {
          var _this26 = this;

          Object.values(_objectSpread({}, this.media.style)).filter(function (e) {
            return !V(e) && L(e) && e.startsWith("--plyr");
          }).forEach(function (e) {
            _this26.elements.container.style.setProperty(e, _this26.media.style.getPropertyValue(e)), _this26.media.style.removeProperty(e);
          }), V(this.media.style) && this.media.removeAttribute("style");
        }
      };

      var Ge = /*#__PURE__*/function () {
        function Ge(t) {
          var _this27 = this;

          _classCallCheck(this, Ge);

          e(this, "firstTouch", function () {
            var e = _this27.player,
                t = e.elements;
            e.touch = !0, se(t.container, e.config.classNames.isTouch, !0);
          }), e(this, "setTabFocus", function (e) {
            var t = _this27.player,
                i = t.elements;
            if (clearTimeout(_this27.focusTimer), "keydown" === e.type && 9 !== e.which) return;
            "keydown" === e.type && (_this27.lastKeyDown = e.timeStamp);
            var s = e.timeStamp - _this27.lastKeyDown <= 20;
            ("focus" !== e.type || s) && (function () {
              var e = t.config.classNames.tabFocus;
              se(le.call(t, "." + e), e, !1);
            }(), "focusout" !== e.type && (_this27.focusTimer = setTimeout(function () {
              var e = document.activeElement;
              i.container.contains(e) && se(document.activeElement, t.config.classNames.tabFocus, !0);
            }, 10)));
          }), e(this, "global", function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            var t = _this27.player;
            t.config.keyboard.global && de.call(t, window, "keydown keyup", _this27.handleKey, e, !1), de.call(t, document.body, "click", _this27.toggleMenu, e), ge.call(t, document.body, "touchstart", _this27.firstTouch), de.call(t, document.body, "keydown focus blur focusout", _this27.setTabFocus, e, !1, !0);
          }), e(this, "container", function () {
            var e = _this27.player,
                t = e.config,
                i = e.elements,
                s = e.timers;
            !t.keyboard.global && t.keyboard.focused && me.call(e, i.container, "keydown keyup", _this27.handleKey, !1), me.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
              var n = i.controls;
              n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
              var a = 0;
              ["touchstart", "touchmove", "mousemove"].includes(t.type) && (Je.toggleControls.call(e, !0), a = e.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout(function () {
                return Je.toggleControls.call(e, !1);
              }, a);
            });

            var n = function n(t) {
              if (!t) return Ee.call(e);
              var s = i.container.getBoundingClientRect(),
                  n = s.width,
                  a = s.height;
              return Ee.call(e, "".concat(n, ":").concat(a));
            },
                a = function a() {
              clearTimeout(s.resized), s.resized = setTimeout(n, 50);
            };

            me.call(e, i.container, "enterfullscreen exitfullscreen", function (t) {
              var _e$fullscreen = e.fullscreen,
                  s = _e$fullscreen.target,
                  l = _e$fullscreen.usingNative;
              if (s !== i.container) return;
              if (!e.isEmbed && V(e.config.ratio)) return;

              var o = "enterfullscreen" === t.type,
                  _n6 = n(o),
                  r = _n6.padding,
                  c = _n6.ratio;

              (function (t, i, s) {
                if (!e.isVimeo || e.config.vimeo.premium) return;

                var n = e.elements.wrapper.firstChild,
                    _t14 = _slicedToArray(t, 2),
                    a = _t14[1],
                    _Se$call = Se.call(e),
                    _Se$call2 = _slicedToArray(_Se$call, 2),
                    l = _Se$call2[0],
                    o = _Se$call2[1];

                n.style.maxWidth = s ? a / o * l + "px" : null, n.style.margin = s ? "0 auto" : null;
              })(c, 0, o), o && setTimeout(function () {
                return U(i.container);
              }, 100), l || (o ? me.call(e, window, "resize", a) : pe.call(e, window, "resize", a));
            });
          }), e(this, "media", function () {
            var e = _this27.player,
                t = e.elements;

            if (me.call(e, e.media, "timeupdate seeking seeked", function (t) {
              return Re.timeUpdate.call(e, t);
            }), me.call(e, e.media, "durationchange loadeddata loadedmetadata", function (t) {
              return Re.durationUpdate.call(e, t);
            }), me.call(e, e.media, "ended", function () {
              e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause());
            }), me.call(e, e.media, "progress playing seeking seeked", function (t) {
              return Re.updateProgress.call(e, t);
            }), me.call(e, e.media, "volumechange", function (t) {
              return Re.updateVolume.call(e, t);
            }), me.call(e, e.media, "playing play pause ended emptied timeupdate", function (t) {
              return Je.checkPlaying.call(e, t);
            }), me.call(e, e.media, "waiting canplay seeked playing", function (t) {
              return Je.checkLoading.call(e, t);
            }), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
              var _i15 = oe.call(e, "." + e.config.classNames.video);

              if (!D(_i15)) return;
              me.call(e, t.container, "click", function (s) {
                ([t.container, _i15].includes(s.target) || _i15.contains(s.target)) && (e.touch && e.config.hideControls || (e.ended ? (_this27.proxy(s, e.restart, "restart"), _this27.proxy(s, function () {
                  ve(e.play());
                }, "play")) : _this27.proxy(s, function () {
                  ve(e.togglePlay());
                }, "play")));
              });
            }

            e.supported.ui && e.config.disableContextMenu && me.call(e, t.wrapper, "contextmenu", function (e) {
              e.preventDefault();
            }, !1), me.call(e, e.media, "volumechange", function () {
              e.storage.set({
                volume: e.volume,
                muted: e.muted
              });
            }), me.call(e, e.media, "ratechange", function () {
              Re.updateSetting.call(e, "speed"), e.storage.set({
                speed: e.speed
              });
            }), me.call(e, e.media, "qualitychange", function (t) {
              Re.updateSetting.call(e, "quality", null, t.detail.quality);
            }), me.call(e, e.media, "ready qualitychange", function () {
              Re.setDownloadUrl.call(e);
            });
            var i = e.config.events.concat(["keyup", "keydown"]).join(" ");
            me.call(e, e.media, i, function (i) {
              var _i$detail = i.detail,
                  s = _i$detail === void 0 ? {} : _i$detail;
              "error" === i.type && (s = e.media.error), fe.call(e, t.container, i.type, !0, s);
            });
          }), e(this, "proxy", function (e, t, i) {
            var s = _this27.player,
                n = s.config.listeners[i];
            var a = !0;
            O(n) && (a = n.call(s, e)), !1 !== a && O(t) && t.call(s, e);
          }), e(this, "bind", function (e, t, i, s) {
            var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
            var a = _this27.player,
                l = a.config.listeners[s],
                o = O(l);
            me.call(a, e, t, function (e) {
              return _this27.proxy(e, i, s);
            }, n && !o);
          }), e(this, "controls", function () {
            var e = _this27.player,
                t = e.elements,
                i = W.isIE ? "change" : "input";

            if (t.buttons.play && Array.from(t.buttons.play).forEach(function (t) {
              _this27.bind(t, "click", function () {
                ve(e.togglePlay());
              }, "play");
            }), _this27.bind(t.buttons.restart, "click", e.restart, "restart"), _this27.bind(t.buttons.rewind, "click", function () {
              e.lastSeekTime = Date.now(), e.rewind();
            }, "rewind"), _this27.bind(t.buttons.fastForward, "click", function () {
              e.lastSeekTime = Date.now(), e.forward();
            }, "fastForward"), _this27.bind(t.buttons.mute, "click", function () {
              e.muted = !e.muted;
            }, "mute"), _this27.bind(t.buttons.captions, "click", function () {
              return e.toggleCaptions();
            }), _this27.bind(t.buttons.download, "click", function () {
              fe.call(e, e.media, "download");
            }, "download"), _this27.bind(t.buttons.fullscreen, "click", function () {
              e.fullscreen.toggle();
            }, "fullscreen"), _this27.bind(t.buttons.pip, "click", function () {
              e.pip = "toggle";
            }, "pip"), _this27.bind(t.buttons.airplay, "click", e.airplay, "airplay"), _this27.bind(t.buttons.settings, "click", function (t) {
              t.stopPropagation(), t.preventDefault(), Re.toggleMenu.call(e, t);
            }, null, !1), _this27.bind(t.buttons.settings, "keyup", function (t) {
              var i = t.which;
              [13, 32].includes(i) && (13 !== i ? (t.preventDefault(), t.stopPropagation(), Re.toggleMenu.call(e, t)) : Re.focusFirstMenuItem.call(e, null, !0));
            }, null, !1), _this27.bind(t.settings.menu, "keydown", function (t) {
              27 === t.which && Re.toggleMenu.call(e, t);
            }), _this27.bind(t.inputs.seek, "mousedown mousemove", function (e) {
              var i = t.progress.getBoundingClientRect(),
                  s = 100 / i.width * (e.pageX - i.left);
              e.currentTarget.setAttribute("seek-value", s);
            }), _this27.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (t) {
              var i = t.currentTarget,
                  s = t.keyCode ? t.keyCode : t.which,
                  n = "play-on-seeked";
              if (H(t) && 39 !== s && 37 !== s) return;
              e.lastSeekTime = Date.now();
              var a = i.hasAttribute(n),
                  l = ["mouseup", "touchend", "keyup"].includes(t.type);
              a && l ? (i.removeAttribute(n), ve(e.play())) : !l && e.playing && (i.setAttribute(n, ""), e.pause());
            }), W.isIos) {
              var _t15 = le.call(e, 'input[type="range"]');

              Array.from(_t15).forEach(function (e) {
                return _this27.bind(e, i, function (e) {
                  return U(e.target);
                });
              });
            }

            _this27.bind(t.inputs.seek, i, function (t) {
              var i = t.currentTarget;
              var s = i.getAttribute("seek-value");
              V(s) && (s = i.value), i.removeAttribute("seek-value"), e.currentTime = s / i.max * e.duration;
            }, "seek"), _this27.bind(t.progress, "mouseenter mouseleave mousemove", function (t) {
              return Re.updateSeekTooltip.call(e, t);
            }), _this27.bind(t.progress, "mousemove touchmove", function (t) {
              var i = e.previewThumbnails;
              i && i.loaded && i.startMove(t);
            }), _this27.bind(t.progress, "mouseleave touchend click", function () {
              var t = e.previewThumbnails;
              t && t.loaded && t.endMove(!1, !0);
            }), _this27.bind(t.progress, "mousedown touchstart", function (t) {
              var i = e.previewThumbnails;
              i && i.loaded && i.startScrubbing(t);
            }), _this27.bind(t.progress, "mouseup touchend", function (t) {
              var i = e.previewThumbnails;
              i && i.loaded && i.endScrubbing(t);
            }), W.isWebkit && Array.from(le.call(e, 'input[type="range"]')).forEach(function (t) {
              _this27.bind(t, "input", function (t) {
                return Re.updateRangeFill.call(e, t.target);
              });
            }), e.config.toggleInvert && !D(t.display.duration) && _this27.bind(t.display.currentTime, "click", function () {
              0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, Re.timeUpdate.call(e));
            }), _this27.bind(t.inputs.volume, i, function (t) {
              e.volume = t.target.value;
            }, "volume"), _this27.bind(t.controls, "mouseenter mouseleave", function (i) {
              t.controls.hover = !e.touch && "mouseenter" === i.type;
            }), t.fullscreen && Array.from(t.fullscreen.children).filter(function (e) {
              return !e.contains(t.container);
            }).forEach(function (i) {
              _this27.bind(i, "mouseenter mouseleave", function (i) {
                t.controls.hover = !e.touch && "mouseenter" === i.type;
              });
            }), _this27.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
              t.controls.pressed = ["mousedown", "touchstart"].includes(e.type);
            }), _this27.bind(t.controls, "focusin", function () {
              var i = e.config,
                  s = e.timers;
              se(t.controls, i.classNames.noTransition, !0), Je.toggleControls.call(e, !0), setTimeout(function () {
                se(t.controls, i.classNames.noTransition, !1);
              }, 0);
              var n = _this27.touch ? 3e3 : 4e3;
              clearTimeout(s.controls), s.controls = setTimeout(function () {
                return Je.toggleControls.call(e, !1);
              }, n);
            }), _this27.bind(t.inputs.volume, "wheel", function (t) {
              var i = t.webkitDirectionInvertedFromDevice,
                  _map = [t.deltaX, -t.deltaY].map(function (e) {
                return i ? -e : e;
              }),
                  _map2 = _slicedToArray(_map, 2),
                  s = _map2[0],
                  n = _map2[1],
                  a = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);

              e.increaseVolume(a / 50);
              var l = e.media.volume;
              (1 === a && l < 1 || -1 === a && l > 0) && t.preventDefault();
            }, "volume", !1);
          }), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
        }

        _createClass(Ge, [{
          key: "handleKey",
          value: function handleKey(e) {
            var t = this.player,
                i = t.elements,
                s = e.keyCode ? e.keyCode : e.which,
                n = "keydown" === e.type,
                a = n && s === this.lastKey;
            if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && I(s)) if (n) {
              var _n7 = document.activeElement;

              if (D(_n7)) {
                var _s12 = t.config.selectors.editable,
                    _a5 = i.inputs.seek;
                if (_n7 !== _a5 && ae(_n7, _s12)) return;
                if (32 === e.which && ae(_n7, 'button, [role^="menuitem"]')) return;
              }

              switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(s) && (e.preventDefault(), e.stopPropagation()), s) {
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
                  a || (t.currentTime = t.duration / 10 * (s - 48));
                  break;

                case 32:
                case 75:
                  a || ve(t.togglePlay());
                  break;

                case 38:
                  t.increaseVolume(.1);
                  break;

                case 40:
                  t.decreaseVolume(.1);
                  break;

                case 77:
                  a || (t.muted = !t.muted);
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
                  a || t.toggleCaptions();
                  break;

                case 76:
                  t.loop = !t.loop;
              }

              27 === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = s;
            } else this.lastKey = null;
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu(e) {
            Re.toggleMenu.call(this.player, e);
          }
        }]);

        return Ge;
      }();

      "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;

      var Ze = function (e, t) {
        return function (e, t) {
          e.exports = function () {
            var e = function e() {},
                t = {},
                i = {},
                s = {};

            function n(e, t) {
              if (e) {
                var n = s[e];
                if (i[e] = t, n) for (; n.length;) {
                  n[0](e, t), n.splice(0, 1);
                }
              }
            }

            function a(t, i) {
              t.call && (t = {
                success: t
              }), i.length ? (t.error || e)(i) : (t.success || e)(t);
            }

            function l(t, i, s, n) {
              var a,
                  o,
                  r = document,
                  c = s.async,
                  h = (s.numRetries || 0) + 1,
                  u = s.before || e,
                  d = t.replace(/[\?|#].*$/, ""),
                  m = t.replace(/^(css|img)!/, "");
              n = n || 0, /(^css!|\.css$)/.test(d) ? ((o = r.createElement("link")).rel = "stylesheet", o.href = m, (a = "hideFocus" in o) && o.relList && (a = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (o = r.createElement("img")).src = m : ((o = r.createElement("script")).src = t, o.async = void 0 === c || c), o.onload = o.onerror = o.onbeforeload = function (e) {
                var r = e.type[0];
                if (a) try {
                  o.sheet.cssText.length || (r = "e");
                } catch (e) {
                  18 != e.code && (r = "e");
                }

                if ("e" == r) {
                  if ((n += 1) < h) return l(t, i, s, n);
                } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";

                i(t, r, e.defaultPrevented);
              }, !1 !== u(t, o) && r.head.appendChild(o);
            }

            function o(e, t, i) {
              var s,
                  n,
                  a = (e = e.push ? e : [e]).length,
                  o = a,
                  r = [];

              for (s = function s(e, i, _s13) {
                if ("e" == i && r.push(e), "b" == i) {
                  if (!_s13) return;
                  r.push(e);
                }

                --a || t(r);
              }, n = 0; n < o; n++) {
                l(e[n], s, i);
              }
            }

            function r(e, i, s) {
              var l, r;

              if (i && i.trim && (l = i), r = (l ? s : i) || {}, l) {
                if (l in t) throw "LoadJS";
                t[l] = !0;
              }

              function c(t, i) {
                o(e, function (e) {
                  a(r, e), t && a({
                    success: t,
                    error: i
                  }, e), n(l, e);
                }, r);
              }

              if (r.returnPromise) return new Promise(c);
              c();
            }

            return r.ready = function (e, t) {
              return function (e, t) {
                e = e.push ? e : [e];
                var n,
                    a,
                    l,
                    o = [],
                    r = e.length,
                    c = r;

                for (n = function n(e, i) {
                  i.length && o.push(e), --c || t(o);
                }; r--;) {
                  a = e[r], (l = i[a]) ? n(a, l) : (s[a] = s[a] || []).push(n);
                }
              }(e, function (e) {
                a(t, e);
              }), r;
            }, r.done = function (e) {
              n(e, []);
            }, r.reset = function () {
              t = {}, i = {}, s = {};
            }, r.isDefined = function (e) {
              return e in t;
            }, r;
          }();
        }(t = {
          exports: {}
        }), t.exports;
      }();

      function et(e) {
        return new Promise(function (t, i) {
          Ze(e, {
            success: t,
            error: i
          });
        });
      }

      function tt(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, fe.call(this, this.media, e ? "play" : "pause"));
      }

      var it = {
        setup: function setup() {
          var e = this;
          se(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Ee.call(e), N(window.Vimeo) ? it.ready.call(e) : et(e.config.urls.vimeo.sdk).then(function () {
            it.ready.call(e);
          }).catch(function (t) {
            e.debug.warn("Vimeo SDK (player.js) failed to load", t);
          });
        },
        ready: function ready() {
          var _this28 = this;

          var e = this,
              t = e.config.vimeo,
              i = t.premium,
              s = t.referrerPolicy,
              n = _objectWithoutProperties(t, ["premium", "referrerPolicy"]);

          i && Object.assign(n, {
            controls: !1,
            sidedock: !1
          });
          var a = Ve(_objectSpread({
            loop: e.config.loop.active,
            autoplay: e.autoplay,
            muted: e.muted,
            gesture: "media",
            playsinline: !this.config.fullscreen.iosNative
          }, n));
          var l = e.media.getAttribute("src");
          V(l) && (l = e.media.getAttribute(e.config.attributes.embed.id));
          var o = V(r = l) ? null : I(Number(r)) ? r : r.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : r;
          var r;
          var c = X("iframe"),
              h = Me(e.config.urls.vimeo.iframe, o, a);
          if (c.setAttribute("src", h), c.setAttribute("allowfullscreen", ""), c.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), V(s) || c.setAttribute("referrerPolicy", s), i || !t.customControls) c.setAttribute("data-poster", e.poster), e.media = ee(c, e.media);else {
            var _t16 = X("div", {
              class: e.config.classNames.embedContainer,
              "data-poster": e.poster
            });

            _t16.appendChild(c), e.media = ee(_t16, e.media);
          }
          t.customControls || qe(Me(e.config.urls.vimeo.api, h)).then(function (t) {
            !V(t) && t.thumbnail_url && Je.setPoster.call(e, t.thumbnail_url).catch(function () {});
          }), e.embed = new window.Vimeo.Player(c, {
            autopause: e.config.autopause,
            muted: e.muted
          }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), e.media.play = function () {
            return tt.call(e, !0), e.embed.play();
          }, e.media.pause = function () {
            return tt.call(e, !1), e.embed.pause();
          }, e.media.stop = function () {
            e.pause(), e.currentTime = 0;
          };
          var u = e.media.currentTime;
          Object.defineProperty(e.media, "currentTime", {
            get: function get() {
              return u;
            },
            set: function set(t) {
              var i = e.embed,
                  s = e.media,
                  n = e.paused,
                  a = e.volume,
                  l = n && !i.hasPlayed;
              s.seeking = !0, fe.call(e, s, "seeking"), Promise.resolve(l && i.setVolume(0)).then(function () {
                return i.setCurrentTime(t);
              }).then(function () {
                return l && i.pause();
              }).then(function () {
                return l && i.setVolume(a);
              }).catch(function () {});
            }
          });
          var d = e.config.speed.selected;
          Object.defineProperty(e.media, "playbackRate", {
            get: function get() {
              return d;
            },
            set: function set(t) {
              e.embed.setPlaybackRate(t).then(function () {
                d = t, fe.call(e, e.media, "ratechange");
              }).catch(function () {
                e.options.speed = [1];
              });
            }
          });
          var m = e.config.volume;
          Object.defineProperty(e.media, "volume", {
            get: function get() {
              return m;
            },
            set: function set(t) {
              e.embed.setVolume(t).then(function () {
                m = t, fe.call(e, e.media, "volumechange");
              });
            }
          });
          var p = e.config.muted;
          Object.defineProperty(e.media, "muted", {
            get: function get() {
              return p;
            },
            set: function set(t) {
              var i = !!_(t) && t;
              e.embed.setVolume(i ? 0 : e.config.volume).then(function () {
                p = i, fe.call(e, e.media, "volumechange");
              });
            }
          });
          var g,
              f = e.config.loop;
          Object.defineProperty(e.media, "loop", {
            get: function get() {
              return f;
            },
            set: function set(t) {
              var i = _(t) ? t : e.config.loop.active;
              e.embed.setLoop(i).then(function () {
                f = i;
              });
            }
          }), e.embed.getVideoUrl().then(function (t) {
            g = t, Re.setDownloadUrl.call(e);
          }).catch(function (e) {
            _this28.debug.warn(e);
          }), Object.defineProperty(e.media, "currentSrc", {
            get: function get() {
              return g;
            }
          }), Object.defineProperty(e.media, "ended", {
            get: function get() {
              return e.currentTime === e.duration;
            }
          }), Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(function (t) {
            var _t17 = _slicedToArray(t, 2),
                i = _t17[0],
                s = _t17[1];

            e.embed.ratio = Pe(i, s), Ee.call(_this28);
          }), e.embed.setAutopause(e.config.autopause).then(function (t) {
            e.config.autopause = t;
          }), e.embed.getVideoTitle().then(function (t) {
            e.config.title = t, Je.setTitle.call(_this28);
          }), e.embed.getCurrentTime().then(function (t) {
            u = t, fe.call(e, e.media, "timeupdate");
          }), e.embed.getDuration().then(function (t) {
            e.media.duration = t, fe.call(e, e.media, "durationchange");
          }), e.embed.getTextTracks().then(function (t) {
            e.media.textTracks = t, Be.setup.call(e);
          }), e.embed.on("cuechange", function (_ref15) {
            var _ref15$cues = _ref15.cues,
                t = _ref15$cues === void 0 ? [] : _ref15$cues;
            var i = t.map(function (e) {
              return function (e) {
                var t = document.createDocumentFragment(),
                    i = document.createElement("div");
                return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
              }(e.text);
            });
            Be.updateCues.call(e, i);
          }), e.embed.on("loaded", function () {
            e.embed.getPaused().then(function (t) {
              tt.call(e, !t), t || fe.call(e, e.media, "playing");
            }), D(e.embed.element) && e.supported.ui && e.embed.element.setAttribute("tabindex", -1);
          }), e.embed.on("bufferstart", function () {
            fe.call(e, e.media, "waiting");
          }), e.embed.on("bufferend", function () {
            fe.call(e, e.media, "playing");
          }), e.embed.on("play", function () {
            tt.call(e, !0), fe.call(e, e.media, "playing");
          }), e.embed.on("pause", function () {
            tt.call(e, !1);
          }), e.embed.on("timeupdate", function (t) {
            e.media.seeking = !1, u = t.seconds, fe.call(e, e.media, "timeupdate");
          }), e.embed.on("progress", function (t) {
            e.media.buffered = t.percent, fe.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && fe.call(e, e.media, "canplaythrough"), e.embed.getDuration().then(function (t) {
              t !== e.media.duration && (e.media.duration = t, fe.call(e, e.media, "durationchange"));
            });
          }), e.embed.on("seeked", function () {
            e.media.seeking = !1, fe.call(e, e.media, "seeked");
          }), e.embed.on("ended", function () {
            e.media.paused = !0, fe.call(e, e.media, "ended");
          }), e.embed.on("error", function (t) {
            e.media.error = t, fe.call(e, e.media, "error");
          }), t.customControls && setTimeout(function () {
            return Je.build.call(e);
          }, 0);
        }
      };

      function st(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, fe.call(this, this.media, e ? "play" : "pause"));
      }

      function nt(e) {
        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
      }

      var at = {
        setup: function setup() {
          var _this29 = this;

          if (se(this.elements.wrapper, this.config.classNames.embed, !0), N(window.YT) && O(window.YT.Player)) at.ready.call(this);else {
            var _e26 = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = function () {
              O(_e26) && _e26(), at.ready.call(_this29);
            }, et(this.config.urls.youtube.sdk).catch(function (e) {
              _this29.debug.warn("YouTube API failed to load", e);
            });
          }
        },
        getTitle: function getTitle(e) {
          var _this30 = this;

          qe(Me(this.config.urls.youtube.api, e)).then(function (e) {
            if (N(e)) {
              var _t18 = e.title,
                  _i16 = e.height,
                  _s14 = e.width;
              _this30.config.title = _t18, Je.setTitle.call(_this30), _this30.embed.ratio = Pe(_s14, _i16);
            }

            Ee.call(_this30);
          }).catch(function () {
            Ee.call(_this30);
          });
        },
        ready: function ready() {
          var e = this,
              t = e.config.youtube,
              i = e.media && e.media.getAttribute("id");
          if (!V(i) && i.startsWith("youtube-")) return;
          var s = e.media.getAttribute("src");
          V(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
          var n = V(a = s) ? null : a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a;
          var a;
          var l = X("div", {
            id: "".concat(e.provider, "-").concat(Math.floor(1e4 * Math.random())),
            "data-poster": t.customControls ? e.poster : void 0
          });

          if (e.media = ee(l, e.media), t.customControls) {
            var _t19 = function _t19(e) {
              return "https://i.ytimg.com/vi/".concat(n, "/").concat(e, "default.jpg");
            };

            Xe(_t19("maxres"), 121).catch(function () {
              return Xe(_t19("sd"), 121);
            }).catch(function () {
              return Xe(_t19("hq"));
            }).then(function (t) {
              return Je.setPoster.call(e, t.src);
            }).then(function (t) {
              t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
            }).catch(function () {});
          }

          e.embed = new window.YT.Player(e.media, {
            videoId: n,
            host: nt(t),
            playerVars: K({}, {
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
                  var _i17 = t.data,
                      _s15 = {
                    2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                    5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                    100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                    101: "The owner of the requested video does not allow it to be played in embedded players.",
                    150: "The owner of the requested video does not allow it to be played in embedded players."
                  }[_i17] || "An unknown error occured";

                  e.media.error = {
                    code: _i17,
                    message: _s15
                  }, fe.call(e, e.media, "error");
                }
              },
              onPlaybackRateChange: function onPlaybackRateChange(t) {
                var i = t.target;
                e.media.playbackRate = i.getPlaybackRate(), fe.call(e, e.media, "ratechange");
              },
              onReady: function onReady(i) {
                if (O(e.media.play)) return;
                var s = i.target;
                at.getTitle.call(e, n), e.media.play = function () {
                  st.call(e, !0), s.playVideo();
                }, e.media.pause = function () {
                  st.call(e, !1), s.pauseVideo();
                }, e.media.stop = function () {
                  s.stopVideo();
                }, e.media.duration = s.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                  get: function get() {
                    return Number(s.getCurrentTime());
                  },
                  set: function set(t) {
                    e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, fe.call(e, e.media, "seeking"), s.seekTo(t);
                  }
                }), Object.defineProperty(e.media, "playbackRate", {
                  get: function get() {
                    return s.getPlaybackRate();
                  },
                  set: function set(e) {
                    s.setPlaybackRate(e);
                  }
                });
                var a = e.config.volume;
                Object.defineProperty(e.media, "volume", {
                  get: function get() {
                    return a;
                  },
                  set: function set(t) {
                    a = t, s.setVolume(100 * a), fe.call(e, e.media, "volumechange");
                  }
                });
                var l = e.config.muted;
                Object.defineProperty(e.media, "muted", {
                  get: function get() {
                    return l;
                  },
                  set: function set(t) {
                    var i = _(t) ? t : l;
                    l = i, s[i ? "mute" : "unMute"](), s.setVolume(100 * a), fe.call(e, e.media, "volumechange");
                  }
                }), Object.defineProperty(e.media, "currentSrc", {
                  get: function get() {
                    return s.getVideoUrl();
                  }
                }), Object.defineProperty(e.media, "ended", {
                  get: function get() {
                    return e.currentTime === e.duration;
                  }
                });
                var o = s.getAvailablePlaybackRates();
                e.options.speed = o.filter(function (t) {
                  return e.config.speed.options.includes(t);
                }), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), fe.call(e, e.media, "timeupdate"), fe.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                  e.media.buffered = s.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && fe.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), fe.call(e, e.media, "canplaythrough"));
                }, 200), t.customControls && setTimeout(function () {
                  return Je.build.call(e);
                }, 50);
              },
              onStateChange: function onStateChange(i) {
                var s = i.target;

                switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(i.data) && (e.media.seeking = !1, fe.call(e, e.media, "seeked")), i.data) {
                  case -1:
                    fe.call(e, e.media, "timeupdate"), e.media.buffered = s.getVideoLoadedFraction(), fe.call(e, e.media, "progress");
                    break;

                  case 0:
                    st.call(e, !1), e.media.loop ? (s.stopVideo(), s.playVideo()) : fe.call(e, e.media, "ended");
                    break;

                  case 1:
                    t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (st.call(e, !0), fe.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                      fe.call(e, e.media, "timeupdate");
                    }, 50), e.media.duration !== s.getDuration() && (e.media.duration = s.getDuration(), fe.call(e, e.media, "durationchange")));
                    break;

                  case 2:
                    e.muted || e.embed.unMute(), st.call(e, !1);
                    break;

                  case 3:
                    fe.call(e, e.media, "waiting");
                }

                fe.call(e, e.elements.container, "statechange", !1, {
                  code: i.data
                });
              }
            }
          });
        }
      },
          lt = {
        setup: function setup() {
          this.media ? (se(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), se(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && se(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = X("div", {
            class: this.config.classNames.video
          }), Y(this.media, this.elements.wrapper), this.elements.poster = X("div", {
            class: this.config.classNames.poster
          }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? xe.setup.call(this) : this.isYouTube ? at.setup.call(this) : this.isVimeo && it.setup.call(this)) : this.debug.warn("No media element found!");
        }
      };

      var ot = /*#__PURE__*/function () {
        function ot(t) {
          var _this31 = this;

          _classCallCheck(this, ot);

          e(this, "load", function () {
            _this31.enabled && (N(window.google) && N(window.google.ima) ? _this31.ready() : et(_this31.player.config.urls.googleIMA.sdk).then(function () {
              _this31.ready();
            }).catch(function () {
              _this31.trigger("error", new Error("Google IMA SDK failed to load"));
            }));
          }), e(this, "ready", function () {
            var e;
            _this31.enabled || ((e = _this31).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), _this31.startSafetyTimer(12e3, "ready()"), _this31.managerPromise.then(function () {
              _this31.clearSafetyTimer("onAdsManagerLoaded()");
            }), _this31.listeners(), _this31.setupIMA();
          }), e(this, "setupIMA", function () {
            _this31.elements.container = X("div", {
              class: _this31.player.config.classNames.ads
            }), _this31.player.elements.container.appendChild(_this31.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(_this31.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(_this31.player.config.playsinline), _this31.elements.displayContainer = new google.ima.AdDisplayContainer(_this31.elements.container, _this31.player.media), _this31.loader = new google.ima.AdsLoader(_this31.elements.displayContainer), _this31.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (e) {
              return _this31.onAdsManagerLoaded(e);
            }, !1), _this31.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
              return _this31.onAdError(e);
            }, !1), _this31.requestAds();
          }), e(this, "requestAds", function () {
            var e = _this31.player.elements.container;

            try {
              var _t20 = new google.ima.AdsRequest();

              _t20.adTagUrl = _this31.tagUrl, _t20.linearAdSlotWidth = e.offsetWidth, _t20.linearAdSlotHeight = e.offsetHeight, _t20.nonLinearAdSlotWidth = e.offsetWidth, _t20.nonLinearAdSlotHeight = e.offsetHeight, _t20.forceNonLinearFullSlot = !1, _t20.setAdWillPlayMuted(!_this31.player.muted), _this31.loader.requestAds(_t20);
            } catch (e) {
              _this31.onAdError(e);
            }
          }), e(this, "pollCountdown", function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            if (!e) return clearInterval(_this31.countdownTimer), void _this31.elements.container.removeAttribute("data-badge-text");
            _this31.countdownTimer = setInterval(function () {
              var e = He(Math.max(_this31.manager.getRemainingTime(), 0)),
                  t = "".concat(Oe.get("advertisement", _this31.player.config), " - ").concat(e);

              _this31.elements.container.setAttribute("data-badge-text", t);
            }, 100);
          }), e(this, "onAdsManagerLoaded", function (e) {
            if (!_this31.enabled) return;
            var t = new google.ima.AdsRenderingSettings();
            t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, _this31.manager = e.getAdsManager(_this31.player, t), _this31.cuePoints = _this31.manager.getCuePoints(), _this31.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
              return _this31.onAdError(e);
            }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
              _this31.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
                return _this31.onAdEvent(e);
              });
            }), _this31.trigger("loaded");
          }), e(this, "addCuePoints", function () {
            V(_this31.cuePoints) || _this31.cuePoints.forEach(function (e) {
              if (0 !== e && -1 !== e && e < _this31.player.duration) {
                var _t21 = _this31.player.elements.progress;

                if (D(_t21)) {
                  var _i18 = 100 / _this31.player.duration * e,
                      _s16 = X("span", {
                    class: _this31.player.config.classNames.cues
                  });

                  _s16.style.left = _i18.toString() + "%", _t21.appendChild(_s16);
                }
              }
            });
          }), e(this, "onAdEvent", function (e) {
            var t = _this31.player.elements.container,
                i = e.getAd(),
                s = e.getAdData();

            switch (function (e) {
              fe.call(_this31.player, _this31.player.media, "ads" + e.replace(/_/g, "").toLowerCase());
            }(e.type), e.type) {
              case google.ima.AdEvent.Type.LOADED:
                _this31.trigger("loaded"), _this31.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
                break;

              case google.ima.AdEvent.Type.STARTED:
                _this31.manager.setVolume(_this31.player.volume);

                break;

              case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                _this31.player.ended ? _this31.loadAds() : _this31.loader.contentComplete();
                break;

              case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                _this31.pauseContent();

                break;

              case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                _this31.pollCountdown(), _this31.resumeContent();
                break;

              case google.ima.AdEvent.Type.LOG:
                s.adError && _this31.player.debug.warn("Non-fatal ad error: " + s.adError.getMessage());
            }
          }), e(this, "onAdError", function (e) {
            _this31.cancel(), _this31.player.debug.warn("Ads error", e);
          }), e(this, "listeners", function () {
            var e = _this31.player.elements.container;
            var t;
            _this31.player.on("canplay", function () {
              _this31.addCuePoints();
            }), _this31.player.on("ended", function () {
              _this31.loader.contentComplete();
            }), _this31.player.on("timeupdate", function () {
              t = _this31.player.currentTime;
            }), _this31.player.on("seeked", function () {
              var e = _this31.player.currentTime;
              V(_this31.cuePoints) || _this31.cuePoints.forEach(function (i, s) {
                t < i && i < e && (_this31.manager.discardAdBreak(), _this31.cuePoints.splice(s, 1));
              });
            }), window.addEventListener("resize", function () {
              _this31.manager && _this31.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL);
            });
          }), e(this, "play", function () {
            var e = _this31.player.elements.container;
            _this31.managerPromise || _this31.resumeContent(), _this31.managerPromise.then(function () {
              _this31.manager.setVolume(_this31.player.volume), _this31.elements.displayContainer.initialize();

              try {
                _this31.initialized || (_this31.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), _this31.manager.start()), _this31.initialized = !0;
              } catch (e) {
                _this31.onAdError(e);
              }
            }).catch(function () {});
          }), e(this, "resumeContent", function () {
            _this31.elements.container.style.zIndex = "", _this31.playing = !1, ve(_this31.player.media.play());
          }), e(this, "pauseContent", function () {
            _this31.elements.container.style.zIndex = 3, _this31.playing = !0, _this31.player.media.pause();
          }), e(this, "cancel", function () {
            _this31.initialized && _this31.resumeContent(), _this31.trigger("error"), _this31.loadAds();
          }), e(this, "loadAds", function () {
            _this31.managerPromise.then(function () {
              _this31.manager && _this31.manager.destroy(), _this31.managerPromise = new Promise(function (e) {
                _this31.on("loaded", e), _this31.player.debug.log(_this31.manager);
              }), _this31.initialized = !1, _this31.requestAds();
            }).catch(function () {});
          }), e(this, "trigger", function (e) {
            for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              t[_key4 - 1] = arguments[_key4];
            }

            var i = _this31.events[e];
            j(i) && i.forEach(function (e) {
              O(e) && e.apply(_this31, t);
            });
          }), e(this, "on", function (e, t) {
            return j(_this31.events[e]) || (_this31.events[e] = []), _this31.events[e].push(t), _this31;
          }), e(this, "startSafetyTimer", function (e, t) {
            _this31.player.debug.log("Safety timer invoked from: " + t), _this31.safetyTimer = setTimeout(function () {
              _this31.cancel(), _this31.clearSafetyTimer("startSafetyTimer()");
            }, e);
          }), e(this, "clearSafetyTimer", function (e) {
            M(_this31.safetyTimer) || (_this31.player.debug.log("Safety timer cleared from: " + e), clearTimeout(_this31.safetyTimer), _this31.safetyTimer = null);
          }), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
            container: null,
            displayContainer: null
          }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
            _this31.on("loaded", e), _this31.on("error", t);
          }), this.load();
        }

        _createClass(ot, [{
          key: "enabled",
          get: function get() {
            var e = this.config;
            return this.player.isHTML5 && this.player.isVideo && e.enabled && (!V(e.publisherId) || $(e.tagUrl));
          }
        }, {
          key: "tagUrl",
          get: function get() {
            var e = this.config;
            return $(e.tagUrl) ? e.tagUrl : "https://go.aniview.com/api/adserver6/vast/?" + Ve({
              AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
              AV_CHANNELID: "5a0458dc28a06145e4519d21",
              AV_URL: window.location.hostname,
              cb: Date.now(),
              AV_WIDTH: 640,
              AV_HEIGHT: 480,
              AV_CDIM2: e.publisherId
            });
          }
        }]);

        return ot;
      }();

      var rt = function rt(e) {
        var t = [];
        return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
          var i = {};
          e.split(/\r\n|\n|\r/).forEach(function (e) {
            if (I(i.startTime)) {
              if (!V(e.trim()) && V(i.text)) {
                var _t23, _t24, _t22$1$split, _t22$1$split2;

                var _t22 = e.trim().split("#xywh=");

                (_t23 = _t22, _t24 = _slicedToArray(_t23, 1), i.text = _t24[0], _t23), _t22[1] && (_t22$1$split = _t22[1].split(","), _t22$1$split2 = _slicedToArray(_t22$1$split, 4), i.x = _t22$1$split2[0], i.y = _t22$1$split2[1], i.w = _t22$1$split2[2], i.h = _t22$1$split2[3], _t22$1$split);
              }
            } else {
              var _t25 = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);

              _t25 && (i.startTime = 60 * Number(_t25[1] || 0) * 60 + 60 * Number(_t25[2]) + Number(_t25[3]) + Number("0." + _t25[4]), i.endTime = 60 * Number(_t25[6] || 0) * 60 + 60 * Number(_t25[7]) + Number(_t25[8]) + Number("0." + _t25[9]));
            }
          }), i.text && t.push(i);
        }), t;
      },
          ct = function ct(e, t) {
        var i = {};
        return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i;
      };

      var ht = /*#__PURE__*/function () {
        function ht(t) {
          var _this32 = this;

          _classCallCheck(this, ht);

          e(this, "load", function () {
            _this32.player.elements.display.seekTooltip && (_this32.player.elements.display.seekTooltip.hidden = _this32.enabled), _this32.enabled && _this32.getThumbnails().then(function () {
              _this32.enabled && (_this32.render(), _this32.determineContainerAutoSizing(), _this32.loaded = !0);
            });
          }), e(this, "getThumbnails", function () {
            return new Promise(function (e) {
              var t = _this32.player.config.previewThumbnails.src;
              if (V(t)) throw new Error("Missing previewThumbnails.src config attribute");

              var i = function i() {
                _this32.thumbnails.sort(function (e, t) {
                  return e.height - t.height;
                }), _this32.player.debug.log("Preview thumbnails", _this32.thumbnails), e();
              };

              if (O(t)) t(function (e) {
                _this32.thumbnails = e, i();
              });else {
                var _e27 = (L(t) ? [t] : t).map(function (e) {
                  return _this32.getThumbnail(e);
                });

                Promise.all(_e27).then(i);
              }
            });
          }), e(this, "getThumbnail", function (e) {
            return new Promise(function (t) {
              qe(e).then(function (i) {
                var s = {
                  frames: rt(i),
                  height: null,
                  urlPrefix: ""
                };
                s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                var n = new Image();
                n.onload = function () {
                  s.height = n.naturalHeight, s.width = n.naturalWidth, _this32.thumbnails.push(s), t();
                }, n.src = s.urlPrefix + s.frames[0].text;
              });
            });
          }), e(this, "startMove", function (e) {
            if (_this32.loaded && F(e) && ["touchmove", "mousemove"].includes(e.type) && _this32.player.media.duration) {
              if ("touchmove" === e.type) _this32.seekTime = _this32.player.media.duration * (_this32.player.elements.inputs.seek.value / 100);else {
                var _t26 = _this32.player.elements.progress.getBoundingClientRect(),
                    _i19 = 100 / _t26.width * (e.pageX - _t26.left);

                _this32.seekTime = _this32.player.media.duration * (_i19 / 100), _this32.seekTime < 0 && (_this32.seekTime = 0), _this32.seekTime > _this32.player.media.duration - 1 && (_this32.seekTime = _this32.player.media.duration - 1), _this32.mousePosX = e.pageX, _this32.elements.thumb.time.innerText = He(_this32.seekTime);
              }

              _this32.showImageAtCurrentTime();
            }
          }), e(this, "endMove", function () {
            _this32.toggleThumbContainer(!1, !0);
          }), e(this, "startScrubbing", function (e) {
            (M(e.button) || !1 === e.button || 0 === e.button) && (_this32.mouseDown = !0, _this32.player.media.duration && (_this32.toggleScrubbingContainer(!0), _this32.toggleThumbContainer(!1, !0), _this32.showImageAtCurrentTime()));
          }), e(this, "endScrubbing", function () {
            _this32.mouseDown = !1, Math.ceil(_this32.lastTime) === Math.ceil(_this32.player.media.currentTime) ? _this32.toggleScrubbingContainer(!1) : ge.call(_this32.player, _this32.player.media, "timeupdate", function () {
              _this32.mouseDown || _this32.toggleScrubbingContainer(!1);
            });
          }), e(this, "listeners", function () {
            _this32.player.on("play", function () {
              _this32.toggleThumbContainer(!1, !0);
            }), _this32.player.on("seeked", function () {
              _this32.toggleThumbContainer(!1);
            }), _this32.player.on("timeupdate", function () {
              _this32.lastTime = _this32.player.media.currentTime;
            });
          }), e(this, "render", function () {
            _this32.elements.thumb.container = X("div", {
              class: _this32.player.config.classNames.previewThumbnails.thumbContainer
            }), _this32.elements.thumb.imageContainer = X("div", {
              class: _this32.player.config.classNames.previewThumbnails.imageContainer
            }), _this32.elements.thumb.container.appendChild(_this32.elements.thumb.imageContainer);
            var e = X("div", {
              class: _this32.player.config.classNames.previewThumbnails.timeContainer
            });
            _this32.elements.thumb.time = X("span", {}, "00:00"), e.appendChild(_this32.elements.thumb.time), _this32.elements.thumb.container.appendChild(e), D(_this32.player.elements.progress) && _this32.player.elements.progress.appendChild(_this32.elements.thumb.container), _this32.elements.scrubbing.container = X("div", {
              class: _this32.player.config.classNames.previewThumbnails.scrubbingContainer
            }), _this32.player.elements.wrapper.appendChild(_this32.elements.scrubbing.container);
          }), e(this, "destroy", function () {
            _this32.elements.thumb.container && _this32.elements.thumb.container.remove(), _this32.elements.scrubbing.container && _this32.elements.scrubbing.container.remove();
          }), e(this, "showImageAtCurrentTime", function () {
            _this32.mouseDown ? _this32.setScrubbingContainerSize() : _this32.setThumbContainerSizeAndPos();

            var e = _this32.thumbnails[0].frames.findIndex(function (e) {
              return _this32.seekTime >= e.startTime && _this32.seekTime <= e.endTime;
            }),
                t = e >= 0;

            var i = 0;
            _this32.mouseDown || _this32.toggleThumbContainer(t), t && (_this32.thumbnails.forEach(function (t, s) {
              _this32.loadedImages.includes(t.frames[e].text) && (i = s);
            }), e !== _this32.showingThumb && (_this32.showingThumb = e, _this32.loadImage(i)));
          }), e(this, "loadImage", function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var t = _this32.showingThumb,
                i = _this32.thumbnails[e],
                s = i.urlPrefix,
                n = i.frames[t],
                a = i.frames[t].text,
                l = s + a;
            if (_this32.currentImageElement && _this32.currentImageElement.dataset.filename === a) _this32.showImage(_this32.currentImageElement, n, e, t, a, !1), _this32.currentImageElement.dataset.index = t, _this32.removeOldImages(_this32.currentImageElement);else {
              _this32.loadingImage && _this32.usingSprites && (_this32.loadingImage.onload = null);

              var _i20 = new Image();

              _i20.src = l, _i20.dataset.index = t, _i20.dataset.filename = a, _this32.showingThumbFilename = a, _this32.player.debug.log("Loading image: " + l), _i20.onload = function () {
                return _this32.showImage(_i20, n, e, t, a, !0);
              }, _this32.loadingImage = _i20, _this32.removeOldImages(_i20);
            }
          }), e(this, "showImage", function (e, t, i, s, n) {
            var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
            _this32.player.debug.log("Showing thumb: ".concat(n, ". num: ").concat(s, ". qual: ").concat(i, ". newimg: ").concat(a)), _this32.setImageSizeAndOffset(e, t), a && (_this32.currentImageContainer.appendChild(e), _this32.currentImageElement = e, _this32.loadedImages.includes(n) || _this32.loadedImages.push(n)), _this32.preloadNearby(s, !0).then(_this32.preloadNearby(s, !1)).then(_this32.getHigherQuality(i, e, t, n));
          }), e(this, "removeOldImages", function (e) {
            Array.from(_this32.currentImageContainer.children).forEach(function (t) {
              if ("img" !== t.tagName.toLowerCase()) return;
              var i = _this32.usingSprites ? 500 : 1e3;

              if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                t.dataset.deleting = !0;
                var _e28 = _this32.currentImageContainer;
                setTimeout(function () {
                  _e28.removeChild(t), _this32.player.debug.log("Removing thumb: " + t.dataset.filename);
                }, i);
              }
            });
          }), e(this, "preloadNearby", function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return new Promise(function (i) {
              setTimeout(function () {
                var s = _this32.thumbnails[0].frames[e].text;

                if (_this32.showingThumbFilename === s) {
                  var _n8;

                  _n8 = t ? _this32.thumbnails[0].frames.slice(e) : _this32.thumbnails[0].frames.slice(0, e).reverse();

                  var _a6 = !1;

                  _n8.forEach(function (e) {
                    var t = e.text;

                    if (t !== s && !_this32.loadedImages.includes(t)) {
                      _a6 = !0, _this32.player.debug.log("Preloading thumb filename: " + t);

                      var _e29 = _this32.thumbnails[0].urlPrefix,
                          _s17 = _e29 + t,
                          _n9 = new Image();

                      _n9.src = _s17, _n9.onload = function () {
                        _this32.player.debug.log("Preloaded thumb filename: " + t), _this32.loadedImages.includes(t) || _this32.loadedImages.push(t), i();
                      };
                    }
                  }), _a6 || i();
                }
              }, 300);
            });
          }), e(this, "getHigherQuality", function (e, t, i, s) {
            if (e < _this32.thumbnails.length - 1) {
              var _n10 = t.naturalHeight;
              _this32.usingSprites && (_n10 = i.h), _n10 < _this32.thumbContainerHeight && setTimeout(function () {
                _this32.showingThumbFilename === s && (_this32.player.debug.log("Showing higher quality thumb for: " + s), _this32.loadImage(e + 1));
              }, 300);
            }
          }), e(this, "toggleThumbContainer", function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var i = _this32.player.config.classNames.previewThumbnails.thumbContainerShown;
            _this32.elements.thumb.container.classList.toggle(i, e), !e && t && (_this32.showingThumb = null, _this32.showingThumbFilename = null);
          }), e(this, "toggleScrubbingContainer", function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            var t = _this32.player.config.classNames.previewThumbnails.scrubbingContainerShown;
            _this32.elements.scrubbing.container.classList.toggle(t, e), e || (_this32.showingThumb = null, _this32.showingThumbFilename = null);
          }), e(this, "determineContainerAutoSizing", function () {
            (_this32.elements.thumb.imageContainer.clientHeight > 20 || _this32.elements.thumb.imageContainer.clientWidth > 20) && (_this32.sizeSpecifiedInCSS = !0);
          }), e(this, "setThumbContainerSizeAndPos", function () {
            if (_this32.sizeSpecifiedInCSS) {
              if (_this32.elements.thumb.imageContainer.clientHeight > 20 && _this32.elements.thumb.imageContainer.clientWidth < 20) {
                var _e30 = Math.floor(_this32.elements.thumb.imageContainer.clientHeight * _this32.thumbAspectRatio);

                _this32.elements.thumb.imageContainer.style.width = _e30 + "px";
              } else if (_this32.elements.thumb.imageContainer.clientHeight < 20 && _this32.elements.thumb.imageContainer.clientWidth > 20) {
                var _e31 = Math.floor(_this32.elements.thumb.imageContainer.clientWidth / _this32.thumbAspectRatio);

                _this32.elements.thumb.imageContainer.style.height = _e31 + "px";
              }
            } else {
              var _e32 = Math.floor(_this32.thumbContainerHeight * _this32.thumbAspectRatio);

              _this32.elements.thumb.imageContainer.style.height = _this32.thumbContainerHeight + "px", _this32.elements.thumb.imageContainer.style.width = _e32 + "px";
            }

            _this32.setThumbContainerPos();
          }), e(this, "setThumbContainerPos", function () {
            var e = _this32.player.elements.progress.getBoundingClientRect(),
                t = _this32.player.elements.container.getBoundingClientRect(),
                i = _this32.elements.thumb.container,
                s = t.left - e.left + 10,
                n = t.right - e.left - i.clientWidth - 10;

            var a = _this32.mousePosX - e.left - i.clientWidth / 2;
            a < s && (a = s), a > n && (a = n), i.style.left = a + "px";
          }), e(this, "setScrubbingContainerSize", function () {
            var _ct = ct(_this32.thumbAspectRatio, {
              width: _this32.player.media.clientWidth,
              height: _this32.player.media.clientHeight
            }),
                e = _ct.width,
                t = _ct.height;

            _this32.elements.scrubbing.container.style.width = e + "px", _this32.elements.scrubbing.container.style.height = t + "px";
          }), e(this, "setImageSizeAndOffset", function (e, t) {
            if (!_this32.usingSprites) return;
            var i = _this32.thumbContainerHeight / t.h;
            e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", e.style.left = "-".concat(t.x * i, "px"), e.style.top = "-".concat(t.y * i, "px");
          }), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
            thumb: {},
            scrubbing: {}
          }, this.load();
        }

        _createClass(ht, [{
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
            if (this.mouseDown) {
              var _ct2 = ct(this.thumbAspectRatio, {
                width: this.player.media.clientWidth,
                height: this.player.media.clientHeight
              }),
                  _e33 = _ct2.height;

              return _e33;
            }

            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
          }
        }, {
          key: "currentImageElement",
          get: function get() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
          },
          set: function set(e) {
            this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
          }
        }]);

        return ht;
      }();

      var ut = {
        insertElements: function insertElements(e, t) {
          var _this33 = this;

          L(t) ? J(e, this.media, {
            src: t
          }) : j(t) && t.forEach(function (t) {
            J(e, _this33.media, t);
          });
        },
        change: function change(e) {
          var _this34 = this;

          z(e, "sources.length") ? (xe.cancelRequests.call(this), this.destroy.call(this, function () {
            _this34.options.quality = [], G(_this34.media), _this34.media = null, D(_this34.elements.container) && _this34.elements.container.removeAttribute("class");

            var t = e.sources,
                i = e.type,
                _t27 = _slicedToArray(t, 1),
                _t27$ = _t27[0],
                _t27$$provider = _t27$.provider,
                s = _t27$$provider === void 0 ? ze.html5 : _t27$$provider,
                n = _t27$.src,
                a = "html5" === s ? i : "div",
                l = "html5" === s ? {} : {
              src: n
            };

            Object.assign(_this34, {
              provider: s,
              type: i,
              supported: he.check(i, s, _this34.config.playsinline),
              media: X(a, l)
            }), _this34.elements.container.appendChild(_this34.media), _(e.autoplay) && (_this34.config.autoplay = e.autoplay), _this34.isHTML5 && (_this34.config.crossorigin && _this34.media.setAttribute("crossorigin", ""), _this34.config.autoplay && _this34.media.setAttribute("autoplay", ""), V(e.poster) || (_this34.poster = e.poster), _this34.config.loop.active && _this34.media.setAttribute("loop", ""), _this34.config.muted && _this34.media.setAttribute("muted", ""), _this34.config.playsinline && _this34.media.setAttribute("playsinline", "")), Je.addStyleHook.call(_this34), _this34.isHTML5 && ut.insertElements.call(_this34, "source", t), _this34.config.title = e.title, lt.setup.call(_this34), _this34.isHTML5 && Object.keys(e).includes("tracks") && ut.insertElements.call(_this34, "track", e.tracks), (_this34.isHTML5 || _this34.isEmbed && !_this34.supported.ui) && Je.build.call(_this34), _this34.isHTML5 && _this34.media.load(), V(e.previewThumbnails) || (Object.assign(_this34.config.previewThumbnails, e.previewThumbnails), _this34.previewThumbnails && _this34.previewThumbnails.loaded && (_this34.previewThumbnails.destroy(), _this34.previewThumbnails = null), _this34.config.previewThumbnails.enabled && (_this34.previewThumbnails = new ht(_this34))), _this34.fullscreen.update();
          }, !0)) : this.debug.warn("Invalid source format");
        }
      };

      var dt = /*#__PURE__*/function () {
        function dt(t, i) {
          var _this35 = this;

          _classCallCheck(this, dt);

          if (e(this, "play", function () {
            return O(_this35.media.play) ? (_this35.ads && _this35.ads.enabled && _this35.ads.managerPromise.then(function () {
              return _this35.ads.play();
            }).catch(function () {
              return ve(_this35.media.play());
            }), _this35.media.play()) : null;
          }), e(this, "pause", function () {
            return _this35.playing && O(_this35.media.pause) ? _this35.media.pause() : null;
          }), e(this, "togglePlay", function (e) {
            return (_(e) ? e : !_this35.playing) ? _this35.play() : _this35.pause();
          }), e(this, "stop", function () {
            _this35.isHTML5 ? (_this35.pause(), _this35.restart()) : O(_this35.media.stop) && _this35.media.stop();
          }), e(this, "restart", function () {
            _this35.currentTime = 0;
          }), e(this, "rewind", function (e) {
            _this35.currentTime -= I(e) ? e : _this35.config.seekTime;
          }), e(this, "forward", function (e) {
            _this35.currentTime += I(e) ? e : _this35.config.seekTime;
          }), e(this, "increaseVolume", function (e) {
            var t = _this35.media.muted ? 0 : _this35.volume;
            _this35.volume = t + (I(e) ? e : 0);
          }), e(this, "decreaseVolume", function (e) {
            _this35.increaseVolume(-e);
          }), e(this, "airplay", function () {
            he.airplay && _this35.media.webkitShowPlaybackTargetPicker();
          }), e(this, "toggleControls", function (e) {
            if (_this35.supported.ui && !_this35.isAudio) {
              var _t28 = ne(_this35.elements.container, _this35.config.classNames.hideControls),
                  _i21 = void 0 === e ? void 0 : !e,
                  _s18 = se(_this35.elements.container, _this35.config.classNames.hideControls, _i21);

              if (_s18 && j(_this35.config.controls) && _this35.config.controls.includes("settings") && !V(_this35.config.settings) && Re.toggleMenu.call(_this35, !1), _s18 !== _t28) {
                var _e34 = _s18 ? "controlshidden" : "controlsshown";

                fe.call(_this35, _this35.media, _e34);
              }

              return !_s18;
            }

            return !1;
          }), e(this, "on", function (e, t) {
            me.call(_this35, _this35.elements.container, e, t);
          }), e(this, "once", function (e, t) {
            ge.call(_this35, _this35.elements.container, e, t);
          }), e(this, "off", function (e, t) {
            pe(_this35.elements.container, e, t);
          }), e(this, "destroy", function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            if (!_this35.ready) return;

            var i = function i() {
              document.body.style.overflow = "", _this35.embed = null, t ? (Object.keys(_this35.elements).length && (G(_this35.elements.buttons.play), G(_this35.elements.captions), G(_this35.elements.controls), G(_this35.elements.wrapper), _this35.elements.buttons.play = null, _this35.elements.captions = null, _this35.elements.controls = null, _this35.elements.wrapper = null), O(e) && e()) : (be.call(_this35), xe.cancelRequests.call(_this35), ee(_this35.elements.original, _this35.elements.container), fe.call(_this35, _this35.elements.original, "destroyed", !0), O(e) && e.call(_this35.elements.original), _this35.ready = !1, setTimeout(function () {
                _this35.elements = null, _this35.media = null;
              }, 200));
            };

            _this35.stop(), clearTimeout(_this35.timers.loading), clearTimeout(_this35.timers.controls), clearTimeout(_this35.timers.resized), _this35.isHTML5 ? (Je.toggleNativeControls.call(_this35, !0), i()) : _this35.isYouTube ? (clearInterval(_this35.timers.buffering), clearInterval(_this35.timers.playing), null !== _this35.embed && O(_this35.embed.destroy) && _this35.embed.destroy(), i()) : _this35.isVimeo && (null !== _this35.embed && _this35.embed.unload().then(i), setTimeout(i, 200));
          }), e(this, "supports", function (e) {
            return he.mime.call(_this35, e);
          }), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = he.touch, this.media = t, L(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || q(this.media) || j(this.media)) && (this.media = this.media[0]), this.config = K({}, Ue, dt.defaults, i || {}, function () {
            try {
              return JSON.parse(_this35.media.getAttribute("data-plyr-config"));
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
          }, this.debug = new Ye(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", he), M(this.media) || !D(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
          if (this.media.plyr) return void this.debug.warn("Target already setup");
          if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
          if (!he.check().api) return void this.debug.error("Setup failed: no support");
          var s = this.media.cloneNode(!0);
          s.autoplay = !1, this.elements.original = s;
          var n = this.media.tagName.toLowerCase();
          var a = null,
              l = null;

          switch (n) {
            case "div":
              if (a = this.media.querySelector("iframe"), D(a)) {
                if (l = $e(a.getAttribute("src")), this.provider = function (e) {
                  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? ze.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? ze.vimeo : null;
                }(l.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", l.search.length) {
                  var _e35 = ["1", "true"];
                  _e35.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), _e35.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = _e35.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0;
                }
              } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);

              if (V(this.provider) || !Object.values(ze).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
              this.type = "video";
              break;

            case "video":
            case "audio":
              this.type = n, this.provider = ze.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
              break;

            default:
              return void this.debug.error("Setup failed: unsupported type");
          }

          this.supported = he.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Ge(this), this.storage = new je(this), this.media.plyr = this, D(this.elements.container) || (this.elements.container = X("div", {
            tabindex: 0
          }), Y(this.media, this.elements.container)), Je.migrateStyles.call(this), Je.addStyleHook.call(this), lt.setup.call(this), this.config.debug && me.call(this, this.elements.container, this.config.events.join(" "), function (e) {
            _this35.debug.log("event: " + e.type);
          }), this.fullscreen = new Qe(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Je.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new ot(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", function () {
            return ve(_this35.play());
          }), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new ht(this))) : this.debug.error("Setup failed: no support");
        }

        _createClass(dt, [{
          key: "toggleCaptions",
          value: function toggleCaptions(e) {
            Be.toggle.call(this, e, !1);
          }
        }, {
          key: "isHTML5",
          get: function get() {
            return this.provider === ze.html5;
          }
        }, {
          key: "isEmbed",
          get: function get() {
            return this.isYouTube || this.isVimeo;
          }
        }, {
          key: "isYouTube",
          get: function get() {
            return this.provider === ze.youtube;
          }
        }, {
          key: "isVimeo",
          get: function get() {
            return this.provider === ze.vimeo;
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
            if (!this.duration) return;
            var t = I(e) && e > 0;
            this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
          },
          get: function get() {
            return Number(this.media.currentTime);
          }
        }, {
          key: "buffered",
          get: function get() {
            var e = this.media.buffered;
            return I(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
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
                i = I(t) && t !== 1 / 0 ? t : 0;
            return e || i;
          }
        }, {
          key: "volume",
          set: function set(e) {
            var _this$config2;

            var t = e;
            L(t) && (t = Number(t)), I(t) || (t = this.storage.get("volume")), I(t) || (_this$config2 = this.config, t = _this$config2.volume, _this$config2), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !V(e) && this.muted && t > 0 && (this.muted = !1);
          },
          get: function get() {
            return Number(this.media.volume);
          }
        }, {
          key: "muted",
          set: function set(e) {
            var t = e;
            _(t) || (t = this.storage.get("muted")), _(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
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
            var _this36 = this;

            var t = null;
            I(e) && (t = e), I(t) || (t = this.storage.get("speed")), I(t) || (t = this.config.speed.selected);
            var i = this.minimumSpeed,
                s = this.maximumSpeed;
            t = function () {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 255;
              return Math.min(Math.max(e, t), i);
            }(t, i, s), this.config.speed.selected = t, setTimeout(function () {
              _this36.media.playbackRate = t;
            }, 0);
          },
          get: function get() {
            return Number(this.media.playbackRate);
          }
        }, {
          key: "minimumSpeed",
          get: function get() {
            return this.isYouTube ? Math.min.apply(Math, _toConsumableArray(this.options.speed)) : this.isVimeo ? .5 : .0625;
          }
        }, {
          key: "maximumSpeed",
          get: function get() {
            return this.isYouTube ? Math.max.apply(Math, _toConsumableArray(this.options.speed)) : this.isVimeo ? 2 : 16;
          }
        }, {
          key: "quality",
          set: function set(e) {
            var t = this.config.quality,
                i = this.options.quality;
            if (!i.length) return;
            var s = [!V(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(I),
                n = !0;

            if (!i.includes(s)) {
              var _e36 = Te(i, s);

              this.debug.warn("Unsupported quality option: ".concat(s, ", using ").concat(_e36, " instead")), s = _e36, n = !1;
            }

            t.selected = s, this.media.quality = s, n && this.storage.set({
              quality: s
            });
          },
          get: function get() {
            return this.media.quality;
          }
        }, {
          key: "loop",
          set: function set(e) {
            var t = _(e) ? e : this.config.loop.active;
            this.config.loop.active = t, this.media.loop = t;
          },
          get: function get() {
            return Boolean(this.media.loop);
          }
        }, {
          key: "source",
          set: function set(e) {
            ut.change.call(this, e);
          },
          get: function get() {
            return this.media.currentSrc;
          }
        }, {
          key: "download",
          get: function get() {
            var e = this.config.urls.download;
            return $(e) ? e : this.source;
          },
          set: function set(e) {
            $(e) && (this.config.urls.download = e, Re.setDownloadUrl.call(this));
          }
        }, {
          key: "poster",
          set: function set(e) {
            this.isVideo ? Je.setPoster.call(this, e, !1).catch(function () {}) : this.debug.warn("Poster can only be set for video");
          },
          get: function get() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
          }
        }, {
          key: "ratio",
          get: function get() {
            if (!this.isVideo) return null;
            var e = Ae(Se.call(this));
            return j(e) ? e.join(":") : e;
          },
          set: function set(e) {
            this.isVideo ? L(e) && Ce(e) ? (this.config.ratio = Ae(e), Ee.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video");
          }
        }, {
          key: "autoplay",
          set: function set(e) {
            var t = _(e) ? e : this.config.autoplay;
            this.config.autoplay = t;
          },
          get: function get() {
            return Boolean(this.config.autoplay);
          }
        }, {
          key: "currentTrack",
          set: function set(e) {
            Be.set.call(this, e, !1);
          },
          get: function get() {
            var _this$captions2 = this.captions,
                e = _this$captions2.toggled,
                t = _this$captions2.currentTrack;
            return e ? t : -1;
          }
        }, {
          key: "language",
          set: function set(e) {
            Be.setLanguage.call(this, e, !1);
          },
          get: function get() {
            return (Be.getCurrentTrack.call(this) || {}).language;
          }
        }, {
          key: "pip",
          set: function set(e) {
            if (!he.pip) return;
            var t = _(e) ? e : !this.pip;
            O(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? We : "inline"), O(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
          },
          get: function get() {
            return he.pip ? V(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === We : null;
          }
        }], [{
          key: "supported",
          value: function supported(e, t, i) {
            return he.check(e, t, i);
          }
        }, {
          key: "loadSprite",
          value: function loadSprite(e, t) {
            return De(e, t);
          }
        }, {
          key: "setup",
          value: function setup(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var i = null;
            return L(e) ? i = Array.from(document.querySelectorAll(e)) : q(e) ? i = Array.from(e) : j(e) && (i = e.filter(D)), V(i) ? null : i.map(function (e) {
              return new dt(e, t);
            });
          }
        }]);

        return dt;
      }();

      var mt;
      return dt.defaults = (mt = Ue, JSON.parse(JSON.stringify(mt))), dt;
    }());
  }).call(this, i(3));
}, function (e, t, i) {
  i(2), e.exports = i(4);
}, function (e, t, i) {
  "use strict";

  i.r(t);
  var s = i(0);
  new (i.n(s).a)("#player");
}, function (e, t) {
  var i;

  i = function () {
    return this;
  }();

  try {
    i = i || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (i = window);
  }

  e.exports = i;
}, function (e, t, i) {
  "use strict";

  var s, n;
  void 0 === (n = "function" == typeof (s = function s() {
    function e(e, i) {
      if (e) {
        if ("string" == typeof e) return t(e, i);
        var s = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(s) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? t(e, i) : void 0;
      }
    }

    function t(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var i = 0, s = Array(t); i < t; i++) {
        s[i] = e[i];
      }

      return s;
    }

    function i(t) {
      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (t = e(t))) {
          var i = 0,
              s = function s() {};

          return {
            s: s,
            n: function n() {
              return i >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[i++]
              };
            },
            e: function e(_e37) {
              throw _e37;
            },
            f: s
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var _n11,
          a = !0,
          l = !1;

      return {
        s: function s() {
          _n11 = t[Symbol.iterator]();
        },
        n: function n() {
          var e = _n11.next();

          return a = e.done, e;
        },
        e: function e(_e38) {
          l = !0;
        },
        f: function e() {
          try {
            a || null == _n11.return || _n11.return();
          } finally {
            if (l) throw e;
          }
        }
      };
    }

    var s = function s(e) {
      void 0 !== window.ResizeObserver && new window.ResizeObserver(function (e) {
        window.requestAnimationFrame(function () {
          if (Array.isArray(e) && e.length) {
            var t,
                s = i(e);

            try {
              for (s.s(); !(t = s.n()).done;) {
                var n = t.value;
                n.contentRect && n.target.style.setProperty("--tt-bind", n.contentRect.width);
              }
            } catch (e) {
              s.e(e);
            } finally {
              s.f();
            }
          }
        });
      }).observe(e);
    },
        n = function n(e) {
      var t = e.base,
          i = e.scale,
          s = document.createElement("style");
      return s.innerHTML = "html{--tt-base: ".concat(t, ";--tt-scale: ").concat(i, ";--tt-ease:linear;--tt-max:1600}*,:before,:after,html{--tt-key:none;animation:var(--tt-key) 1s var(--tt-ease) 1 calc(-1s * var(--tt-bind) / var(--tt-max)) both paused}"), s;
    };

    window.typetura = window.typetura || {
      selectors: [".typetura"],
      base: 20,
      scale: 1
    }, function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.selectors || [".typetura"],
          i = e.base || 20,
          a = e.scale || 1;
      new Promise(function (e) {
        new window.MutationObserver(function (e) {
          e.forEach(function (e) {
            e.addedNodes.forEach(function (e) {
              e.classList && e.matches(t) && s(e);
            });
          });
        }).observe(document.documentElement, {
          childList: !0,
          attributes: !1,
          subtree: !0
        });
        var l = n({
          base: i,
          scale: a
        });
        s(document.documentElement), document.head.insertBefore(l, document.head.firstChild), e();
      });
    }(window.typetura);
  }) ? s.call(t, i, t, e) : s) || (e.exports = n);
}]);