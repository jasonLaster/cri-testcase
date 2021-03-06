/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {module.exports = (function(e) {
  function t(r) {
    if (n[r]) {
      return n[r].exports;
    }
    var i = (n[r] = {
      exports: {},
      id: r,
      loaded: !1
    });
    return e[r].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
  }
  var n = {};
  return (t.m = e), (t.c = n), (t.p = ""), t(0);
})([
  function(e, t, n) {
    (function(t) {
      var r = n(2),
        i = n(3),
        o = n(43);
      (e.exports = function(e, n) {
        typeof e == "function" && ((n = e), (e = void 0));
        var i = new r();
        return typeof n == "function"
          ? (
              t.nextTick(function() {
                new o(e, i);
              }),
              i.once("connect", n)
            )
          : new Promise(function(t, n) {
              i.once("connect", t), i.once("error", n), new o(e, i);
            });
      }), (e.exports.listTabs = i.List), (e.exports.spawnTab =
        i.New), (e.exports.closeTab = i.Close), (e.exports.Protocol =
        i.Protocol), (e.exports.List = i.List), (e.exports.New =
        i.New), (e.exports.Activate = i.Activate), (e.exports.Close =
        i.Close), (e.exports.Version = i.Version);
    }.call(t, n(1)));
  },
  function(e, t) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function r() {
      throw new Error("clearTimeout has not been defined");
    }
    function i(e) {
      if (d === setTimeout) {
        return setTimeout(e, 0);
      }
      if ((d === n || !d) && setTimeout) {
        return (d = setTimeout), setTimeout(e, 0);
      }
      try {
        return d(e, 0);
      } catch (t) {
        try {
          return d.call(null, e, 0);
        } catch (t) {
          return d.call(this, e, 0);
        }
      }
    }
    function o(e) {
      if (l === clearTimeout) {
        return clearTimeout(e);
      }
      if ((l === r || !l) && clearTimeout) {
        return (l = clearTimeout), clearTimeout(e);
      }
      try {
        return l(e);
      } catch (t) {
        try {
          return l.call(null, e);
        } catch (t) {
          return l.call(this, e);
        }
      }
    }
    function a() {
      f &&
        u &&
        ((f = !1), u.length ? (h = u.concat(h)) : (y = -1), h.length && s());
    }
    function s() {
      if (!f) {
        var e = i(a);
        f = !0;
        for (var t = h.length; t; ) {
          for (u = h, h = []; ++y < t; ) {
            u && u[y].run();
          }
          (y = -1), (t = h.length);
        }
        (u = null), (f = !1), o(e);
      }
    }
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function c() {}
    var d,
      l,
      m = (e.exports = {});
    !(function() {
      try {
        d = typeof setTimeout == "function" ? setTimeout : n;
      } catch (e) {
        d = n;
      }
      try {
        l = typeof clearTimeout == "function" ? clearTimeout : r;
      } catch (e) {
        l = r;
      }
    })();
    var u,
      h = [],
      f = !1,
      y = -1;
    (m.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }
      }
      h.push(new p(e, t)), h.length !== 1 || f || i(s);
    }), (p.prototype.run = function() {
      this.fun.apply(null, this.array);
    }), (m.title =
      "browser"), (m.browser = !0), (m.env = {}), (m.argv = []), (m.version =
      ""), (m.versions = {}), (m.on = c), (m.addListener = c), (m.once = c), (m.off = c), (m.removeListener = c), (m.removeAllListeners = c), (m.emit = c), (m.prependListener = c), (m.prependOnceListener = c), (m.listeners = function(
      e
    ) {
      return [];
    }), (m.binding = function(e) {
      throw new Error("process.binding is not supported");
    }), (m.cwd = function() {
      return "/";
    }), (m.chdir = function(e) {
      throw new Error("process.chdir is not supported");
    }), (m.umask = function() {
      return 0;
    });
  },
  function(e, t) {
    function n() {
      (this._events = this._events || {}), (this._maxListeners =
        this._maxListeners || void 0);
    }
    function r(e) {
      return typeof e == "function";
    }
    function i(e) {
      return typeof e == "number";
    }
    function o(e) {
      return typeof e == "object" && e !== null;
    }
    function a(e) {
      return void 0 === e;
    }
    (e.exports = n), (n.EventEmitter = n), (n.prototype._events = void 0), (n.prototype._maxListeners = void 0), (n.defaultMaxListeners = 10), (n.prototype.setMaxListeners = function(
      e
    ) {
      if (!i(e) || e < 0 || isNaN(e)) {
        throw TypeError("n must be a positive number");
      }
      return (this._maxListeners = e), this;
    }), (n.prototype.emit = function(e) {
      var t, n, i, s, p, c;
      if (
        (
          this._events || (this._events = {}),
          e === "error" &&
            (!this._events.error ||
              (o(this._events.error) && !this._events.error.length))
        )
      ) {
        if (((t = arguments[1]), t instanceof Error)) {
          throw t;
        }
        var d = new Error(`Uncaught, unspecified "error" event. (${t})`);
        throw ((d.context = t), d);
      }
      if (((n = this._events[e]), a(n))) {
        return !1;
      }
      if (r(n)) {
        switch (arguments.length) {
          case 1:
            n.call(this);
            break;
          case 2:
            n.call(this, arguments[1]);
            break;
          case 3:
            n.call(this, arguments[1], arguments[2]);
            break;
          default:
            (s = Array.prototype.slice.call(arguments, 1)), n.apply(this, s);
        }
      } else if (o(n)) {
        for (
          s = Array.prototype.slice.call(arguments, 1), c = n.slice(), i =
            c.length, p = 0;
          p < i;
          p++
        ) {
          c[p].apply(this, s);
        }
      }
      return !0;
    }), (n.prototype.addListener = function(e, t) {
      var i;
      if (!r(t)) {
        throw TypeError("listener must be a function");
      }
      return this._events || (this._events = {}), this._events.newListener &&
        this.emit("newListener", e, r(t.listener) ? t.listener : t), this
        ._events[e]
        ? o(this._events[e])
          ? this._events[e].push(t)
          : (this._events[e] = [this._events[e], t])
        : (this._events[e] = t), o(this._events[e]) &&
        !this._events[e].warned &&
        (
          (i = a(this._maxListeners)
            ? n.defaultMaxListeners
            : this._maxListeners),
          i &&
            i > 0 &&
            this._events[e].length > i &&
            (
              (this._events[e].warned = !0),
              console.error(
                "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
                this._events[e].length
              ),
              typeof console.trace == "function" && console.trace()
            )
        ), this;
    }), (n.prototype.on =
      n.prototype.addListener), (n.prototype.once = function(e, t) {
      function n() {
        this.removeListener(e, n), i || ((i = !0), t.apply(this, arguments));
      }
      if (!r(t)) {
        throw TypeError("listener must be a function");
      }
      var i = !1;
      return (n.listener = t), this.on(e, n), this;
    }), (n.prototype.removeListener = function(e, t) {
      var n, i, a, s;
      if (!r(t)) {
        throw TypeError("listener must be a function");
      }
      if (!this._events || !this._events[e]) {
        return this;
      }
      if (
        (
          (n = this._events[e]),
          (a = n.length),
          (i = -1),
          n === t || (r(n.listener) && n.listener === t)
        )
      ) {
        delete this._events[e], this._events.removeListener &&
          this.emit("removeListener", e, t);
      } else if (o(n)) {
        for (s = a; s-- > 0; ) {
          if (n[s] === t || (n[s].listener && n[s].listener === t)) {
            i = s;
            break;
          }
        }
        if (i < 0) {
          return this;
        }
        n.length === 1
          ? ((n.length = 0), delete this._events[e])
          : n.splice(i, 1), this._events.removeListener &&
          this.emit("removeListener", e, t);
      }
      return this;
    }), (n.prototype.removeAllListeners = function(e) {
      var t, n;
      if (!this._events) {
        return this;
      }
      if (!this._events.removeListener) {
        return arguments.length === 0
          ? (this._events = {})
          : this._events[e] && delete this._events[e], this;
      }
      if (arguments.length === 0) {
        for (t in this._events) {
          t !== "removeListener" && this.removeAllListeners(t);
        }
        return this.removeAllListeners(
          "removeListener"
        ), (this._events = {}), this;
      }
      if (((n = this._events[e]), r(n))) {
        this.removeListener(e, n);
      } else if (n) {
        for (; n.length; ) {
          this.removeListener(e, n[n.length - 1]);
        }
      }
      return delete this._events[e], this;
    }), (n.prototype.listeners = function(e) {
      var t;
      return (t = this._events && this._events[e]
        ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice()
        : []);
    }), (n.prototype.listenerCount = function(e) {
      if (this._events) {
        var t = this._events[e];
        if (r(t)) {
          return 1;
        }
        if (t) {
          return t.length;
        }
      }
      return 0;
    }), (n.listenerCount = function(e, t) {
      return e.listenerCount(t);
    });
  },
  function(e, t, n) {
    (function(t) {
      function r(e, t) {
        (e.host = e.host || d.HOST), (e.port =
          e.port || d.PORT), (e.secure = !!e.secure), l(e.secure ? c : p, e, t);
      }
      function i(e) {
        return function(t, n) {
          return typeof t == "function" && ((n = t), (t = void 0)), (t =
            t || {}), typeof n != "function"
            ? new Promise(function(n, r) {
                e(t, function(e, t) {
                  e ? r(e) : n(t);
                });
              })
            : void e(t, n);
        };
      }
      function o(e) {
        return e.split(".").map(function(e) {
          return parseInt(e);
        });
      }
      function a(e, n, r) {
        var i = n["WebKit-Version"],
          a = n["V8-Version"],
          s = i.match(/\s\(@(\b[0-9a-f]{5,40}\b)/),
          p = s[1],
          d = p <= 202666,
          m = void 0;
        if (d) {
          m = [
            `https://src.chromium.org/blink/trunk/Source/devtools/protocol.json?p=${p}`
          ];
        } else {
          var u = "53.0.2758.1",
            h = "55.0.2854.3",
            f = o(n.Browser.split("/")[1]),
            y = f[2] <= o(u)[2],
            g = f[2] <= o(h)[2];
          y
            ? (m = [
                `https://chromium.googlesource.com/chromium/src/+/${p}/third_party/WebKit/Source/devtools/protocol.json?format=TEXT`
              ])
            : g
              ? (m = [
                  `https://chromium.googlesource.com/chromium/src/+/${p}/third_party/WebKit/Source/core/inspector/browser_protocol.json?format=TEXT`,
                  `https://chromium.googlesource.com/chromium/src/+/${p}/third_party/WebKit/Source/platform/v8_inspector/js_protocol.json?format=TEXT`
                ])
              : a
                ? (m = [
                    `https://chromium.googlesource.com/chromium/src/+/${p}/third_party/WebKit/Source/core/inspector/browser_protocol.json?format=TEXT`,
                    `https://chromium.googlesource.com/v8/v8/+/${a}/src/inspector/js_protocol.json?format=TEXT`
                  ])
                : (
                    console.error(
                      "Warning: the protocol might be outdated, see: https://groups.google.com/d/topic/chrome-debugging-protocol/HjyOKainKus/discussion"
                    ),
                    (m = [
                      `https://chromium.googlesource.com/chromium/src/+/${p}/third_party/WebKit/Source/core/inspector/browser_protocol.json?format=TEXT`,
                      `https://chromium.googlesource.com/chromium/src/+/${h}/third_party/WebKit/Source/platform/v8_inspector/js_protocol.json?format=TEXT`
                    ])
                  );
        }
        var b = [];
        m.forEach(function(e) {
          l(c, e, function(e, n) {
            var i = void 0;
            if (!e) {
              try {
                d || (n = new t(n, "base64").toString()), (i = JSON.parse(n));
              } catch (e) {}
            }
            if ((b.push(i), b.length === m.length)) {
              if (b.indexOf(void 0) !== -1) {
                return void r(new Error("Cannot fetch from Chromium repo"));
              }
              b.forEach(function(e, t) {
                t !== 0 && Array.prototype.push.apply(b[0].domains, e.domains);
              }), r(null, b[0]);
            }
          });
        });
      }
      function s(e, t, n) {
        (e.path = "/json/protocol"), r(e, function(e, t) {
          e ? n(e) : n(null, JSON.parse(t));
        });
      }
      var p = n(8),
        c = n(39),
        d = n(40),
        l = n(41);
      (e.exports.Protocol = i(function(t, r) {
        if (!t.remote) {
          var i = n(42);
          return void r(null, {
            remote: !1,
            descriptor: i
          });
        }
        e.exports.Version(t, function(e, n) {
          if (e) {
            return void r(e);
          }
          var i = (n[0] || n).Browser,
            p = void 0;
          if (i.match(/^(Headless)?Chrome\//)) {
            var c = "60.0.3097.0",
              d = o(c)[2],
              l = o(n.Browser.split("/")[1])[2];
            p = l < d ? a : s;
          } else if (i.match(/^Microsoft Edge /)) {
            p = s;
          } else {
            if (!i.match(/^node.js\//)) {
              return void r(new Error("Unknown implementation"));
            }
            p = s;
          }
          p(t, n, function(e, t) {
            return e
              ? void r(e)
              : void r(null, {
                  remote: !0,
                  descriptor: t
                });
          });
        });
      })), (e.exports.List = i(function(e, t) {
        (e.path = "/json/list"), r(e, function(e, n) {
          e ? t(e) : t(null, JSON.parse(n));
        });
      })), (e.exports.New = i(function(e, t) {
        (e.path =
          "/json/new"), Object.prototype.hasOwnProperty.call(e, "url") && (e.path += `?${e.url}`), r(e, function(e, n) {
          e ? t(e) : t(null, JSON.parse(n));
        });
      })), (e.exports.Activate = i(function(e, t) {
        (e.path = `/json/activate/${e.id}`), r(e, function(e) {
          t(e ? e : null);
        });
      })), (e.exports.Close = i(function(e, t) {
        (e.path = `/json/close/${e.id}`), r(e, function(e) {
          t(e ? e : null);
        });
      })), (e.exports.Version = i(function(e, t) {
        (e.path = "/json/version"), r(e, function(e, n) {
          e ? t(e) : t(null, JSON.parse(n));
        });
      }));
    }.call(t, n(4).Buffer));
  },
  function(e, t, n) {
    debugger;
    var myfoo = function(e) {
      function r() {
        try {
          var e = new Uint8Array(1);
          return (e.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
              return 42;
            }
          }), e.foo() === 42 &&
            typeof e.subarray == "function" &&
            e.subarray(1, 1).byteLength === 0;
        } catch (e) {
          return !1;
        }
      }
      function i() {
        return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function o(e, t) {
        if (i() < t) {
          throw new RangeError("Invalid typed array length");
        }
        return a.TYPED_ARRAY_SUPPORT
          ? ((e = new Uint8Array(t)), (e.__proto__ = a.prototype))
          : (e === null && (e = new a(t)), (e.length = t)), e;
      }
      function a(e, t, n) {
        if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) {
          return new a(e, t, n);
        }
        if (typeof e == "number") {
          if (typeof t == "string") {
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          }
          return d(this, e);
        }
        return s(this, e, t, n);
      }
      function s(e, t, n, r) {
        if (typeof t == "number") {
          throw new TypeError('"value" argument must not be a number');
        }
        return typeof ArrayBuffer != "undefined" && t instanceof ArrayBuffer
          ? u(e, t, n, r)
          : typeof t == "string" ? l(e, t, n) : h(e, t);
      }
      function p(e) {
        if (typeof e != "number") {
          throw new TypeError('"size" argument must be a number');
        }
        if (e < 0) {
          throw new RangeError('"size" argument must not be negative');
        }
      }
      function c(e, t, n, r) {
        return p(t), t <= 0
          ? o(e, t)
          : void 0 !== n
            ? typeof r == "string" ? o(e, t).fill(n, r) : o(e, t).fill(n)
            : o(e, t);
      }
      function d(e, t) {
        if ((p(t), (e = o(e, t < 0 ? 0 : 0 | f(t))), !a.TYPED_ARRAY_SUPPORT)) {
          for (var n = 0; n < t; ++n) {
            e[n] = 0;
          }
        }
        return e;
      }
      function l(e, t, n) {
        if (
          ((typeof n == "string" && n !== "") || (n = "utf8"), !a.isEncoding(n))
        ) {
          throw new TypeError('"encoding" must be a valid string encoding');
        }
        var r = 0 | g(t, n);
        e = o(e, r);
        var i = e.write(t, n);
        return i !== r && (e = e.slice(0, i)), e;
      }
      function m(e, t) {
        var n = t.length < 0 ? 0 : 0 | f(t.length);
        e = o(e, n);
        for (var r = 0; r < n; r += 1) {
          e[r] = 255 & t[r];
        }
        return e;
      }
      function u(e, t, n, r) {
        if ((t.byteLength, n < 0 || t.byteLength < n)) {
          throw new RangeError("'offset' is out of bounds");
        }
        if (t.byteLength < n + (r || 0)) {
          throw new RangeError("'length' is out of bounds");
        }
        return (t = void 0 === n && void 0 === r
          ? new Uint8Array(t)
          : void 0 === r
            ? new Uint8Array(t, n)
            : new Uint8Array(t, n, r)), a.TYPED_ARRAY_SUPPORT
          ? ((e = t), (e.__proto__ = a.prototype))
          : (e = m(e, t)), e;
      }
      function h(e, t) {
        if (a.isBuffer(t)) {
          var n = 0 | f(t.length);
          return (e = o(e, n)), e.length === 0 ? e : (t.copy(e, 0, 0, n), e);
        }
        if (t) {
          if (
            (typeof ArrayBuffer != "undefined" &&
              t.buffer instanceof ArrayBuffer) ||
            "length" in t
          ) {
            return typeof t.length != "number" || J(t.length)
              ? o(e, 0)
              : m(e, t);
          }
          if (t.type === "Buffer" && Z(t.data)) {
            return m(e, t.data);
          }
        }
        throw new TypeError(
          "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
        );
      }
      function f(e) {
        if (e >= i()) {
          throw new RangeError(
            `Attempt to allocate Buffer larger than maximum size: 0x${i().toString(
              16
            )} bytes`
          );
        }
        return 0 | e;
      }
      function y(e) {
        return +e != e && (e = 0), a.alloc(+e);
      }
      function g(e, t) {
        if (a.isBuffer(e)) {
          return e.length;
        }
        if (
          typeof ArrayBuffer != "undefined" &&
          typeof ArrayBuffer.isView == "function" &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        ) {
          return e.byteLength;
        }
        typeof e != "string" && (e = `${e}`);
        var n = e.length;
        if (n === 0) {
          return 0;
        }
        for (var r = !1; ; ) {
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
            case void 0:
              return z(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return G(e).length;
            default:
              if (r) {
                return z(e).length;
              }
              (t = `${t}`.toLowerCase()), (r = !0);
          }
        }
      }
      function b(e, t, n) {
        var r = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) {
          return "";
        }
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) {
          return "";
        }
        if (((n >>>= 0), (t >>>= 0), n <= t)) {
          return "";
        }
        for (e || (e = "utf8"); ; ) {
          switch (e) {
            case "hex":
              return A(this, t, n);
            case "utf8":
            case "utf-8":
              return O(this, t, n);
            case "ascii":
              return D(this, t, n);
            case "latin1":
            case "binary":
              return j(this, t, n);
            case "base64":
              return $(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return P(this, t, n);
            default:
              if (r) {
                throw new TypeError(`Unknown encoding: ${e}`);
              }
              (e = `${e}`.toLowerCase()), (r = !0);
          }
        }
      }
      function v(e, t, n) {
        var r = e[t];
        (e[t] = e[n]), (e[n] = r);
      }
      function w(e, t, n, r, i) {
        if (e.length === 0) {
          return -1;
        }
        if (
          (
            typeof n == "string"
              ? ((r = n), (n = 0))
              : n > 2147483647
                ? (n = 2147483647)
                : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = i ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length
          )
        ) {
          if (i) {
            return -1;
          }
          n = e.length - 1;
        } else if (n < 0) {
          if (!i) {
            return -1;
          }
          n = 0;
        }
        if ((typeof t == "string" && (t = a.from(t, r)), a.isBuffer(t))) {
          return t.length === 0 ? -1 : S(e, t, n, r, i);
        }
        if (typeof t == "number") {
          return (t &= 255), a.TYPED_ARRAY_SUPPORT &&
            typeof Uint8Array.prototype.indexOf == "function"
            ? i
              ? Uint8Array.prototype.indexOf.call(e, t, n)
              : Uint8Array.prototype.lastIndexOf.call(e, t, n)
            : S(e, [t], n, r, i);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function S(e, t, n, r, i) {
        function o(e, t) {
          return a === 1 ? e[t] : e.readUInt16BE(t * a);
        }
        var a = 1,
          s = e.length,
          p = t.length;
        if (
          void 0 !== r &&
          (
            (r = String(r).toLowerCase()),
            r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le"
          )
        ) {
          if (e.length < 2 || t.length < 2) {
            return -1;
          }
          (a = 2), (s /= 2), (p /= 2), (n /= 2);
        }
        var c;
        if (i) {
          var d = -1;
          for (c = n; c < s; c++) {
            if (o(e, c) === o(t, d === -1 ? 0 : c - d)) {
              if ((d === -1 && (d = c), c - d + 1 === p)) {
                return d * a;
              }
            } else {
              d !== -1 && (c -= c - d), (d = -1);
            }
          }
        } else {
          for (n + p > s && (n = s - p), c = n; c >= 0; c--) {
            for (var l = !0, m = 0; m < p; m++) {
              if (o(e, c + m) !== o(t, m)) {
                l = !1;
                break;
              }
            }
            if (l) {
              return c;
            }
          }
        }
        return -1;
      }
      function x(e, t, n, r) {
        n = Number(n) || 0;
        var i = e.length - n;
        r ? ((r = Number(r)), r > i && (r = i)) : (r = i);
        var o = t.length;
        if (o % 2 !== 0) {
          throw new TypeError("Invalid hex string");
        }
        r > o / 2 && (r = o / 2);
        for (var a = 0; a < r; ++a) {
          var s = parseInt(t.substr(2 * a, 2), 16);
          if (isNaN(s)) {
            return a;
          }
          e[n + a] = s;
        }
        return a;
      }
      function I(e, t, n, r) {
        return Y(z(t, e.length - n), e, n, r);
      }
      function T(e, t, n, r) {
        return Y(V(t), e, n, r);
      }
      function R(e, t, n, r) {
        return T(e, t, n, r);
      }
      function k(e, t, n, r) {
        return Y(G(t), e, n, r);
      }
      function C(e, t, n, r) {
        return Y(X(t, e.length - n), e, n, r);
      }
      function $(e, t, n) {
        return t === 0 && n === e.length
          ? K.fromByteArray(e)
          : K.fromByteArray(e.slice(t, n));
      }
      function O(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], i = t; i < n; ) {
          var o = e[i],
            a = null,
            s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
          if (i + s <= n) {
            var p, c, d, l;
            switch (s) {
              case 1:
                o < 128 && (a = o);
                break;
              case 2:
                (p = e[i + 1]), (192 & p) === 128 &&
                  ((l = ((31 & o) << 6) | (63 & p)), l > 127 && (a = l));
                break;
              case 3:
                (p = e[i + 1]), (c = e[i + 2]), (192 & p) === 128 &&
                  (192 & c) === 128 &&
                  (
                    (l = ((15 & o) << 12) | ((63 & p) << 6) | (63 & c)),
                    l > 2047 && (l < 55296 || l > 57343) && (a = l)
                  );
                break;
              case 4:
                (p = e[i + 1]), (c = e[i + 2]), (d = e[i + 3]), (192 & p) ===
                  128 &&
                  (192 & c) === 128 &&
                  (192 & d) === 128 &&
                  (
                    (l =
                      ((15 & o) << 18) |
                      ((63 & p) << 12) |
                      ((63 & c) << 6) |
                      (63 & d)),
                    l > 65535 && l < 1114112 && (a = l)
                  );
            }
          }
          a === null
            ? ((a = 65533), (s = 1))
            : a > 65535 &&
                (
                  (a -= 65536),
                  r.push(((a >>> 10) & 1023) | 55296),
                  (a = 56320 | (1023 & a))
                ), r.push(a), (i += s);
        }
        return E(r);
      }
      function E(e) {
        var t = e.length;
        if (t <= ee) {
          return String.fromCharCode.apply(String, e);
        }
        for (var n = "", r = 0; r < t; ) {
          n += String.fromCharCode.apply(String, e.slice(r, (r += ee)));
        }
        return n;
      }
      function D(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) {
          r += String.fromCharCode(127 & e[i]);
        }
        return r;
      }
      function j(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) {
          r += String.fromCharCode(e[i]);
        }
        return r;
      }
      function A(e, t, n) {
        var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
        for (var i = "", o = t; o < n; ++o) {
          i += H(e[o]);
        }
        return i;
      }
      function P(e, t, n) {
        for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) {
          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
        }
        return i;
      }
      function N(e, t, n) {
        if (e % 1 !== 0 || e < 0) {
          throw new RangeError("offset is not uint");
        }
        if (e + t > n) {
          throw new RangeError("Trying to access beyond buffer length");
        }
      }
      function M(e, t, n, r, i, o) {
        if (!a.isBuffer(e)) {
          throw new TypeError('"buffer" argument must be a Buffer instance');
        }
        if (t > i || t < o) {
          throw new RangeError('"value" argument is out of bounds');
        }
        if (n + r > e.length) {
          throw new RangeError("Index out of range");
        }
      }
      function L(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) {
          e[n + i] =
            (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
        }
      }
      function _(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) {
          e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
        }
      }
      function q(e, t, n, r, i, o) {
        if (n + r > e.length) {
          throw new RangeError("Index out of range");
        }
        if (n < 0) {
          throw new RangeError("Index out of range");
        }
      }
      function U(e, t, n, r, i) {
        return i ||
          q(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Q.write(
          e,
          t,
          n,
          r,
          23,
          4
        ), n + 4;
      }
      function F(e, t, n, r, i) {
        return i ||
          q(
            e,
            t,
            n,
            8,
            1.7976931348623157e308,
            -1.7976931348623157e308
          ), Q.write(e, t, n, r, 52, 8), n + 8;
      }
      function B(e) {
        if (((e = W(e).replace(te, "")), e.length < 2)) {
          return "";
        }
        for (; e.length % 4 !== 0; ) {
          e += "=";
        }
        return e;
      }
      function W(e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      }
      function H(e) {
        return e < 16 ? `0${e.toString(16)}` : e.toString(16);
      }
      function z(e, t) {
        t = t || 1 / 0;
        for (var n, r = e.length, i = null, o = [], a = 0; a < r; ++a) {
          if (((n = e.charCodeAt(a)), n > 55295 && n < 57344)) {
            if (!i) {
              if (n > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (a + 1 === r) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
              continue;
            }
            n = (((i - 55296) << 10) | (n - 56320)) + 65536;
          } else {
            i && (t -= 3) > -1 && o.push(239, 191, 189);
          }
          if (((i = null), n < 128)) {
            if ((t -= 1) < 0) {
              break;
            }
            o.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) {
              break;
            }
            o.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) {
              break;
            }
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) {
              throw new Error("Invalid code point");
            }
            if ((t -= 4) < 0) {
              break;
            }
            o.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return o;
      }
      function V(e) {
        for (var t = [], n = 0; n < e.length; ++n) {
          t.push(255 & e.charCodeAt(n));
        }
        return t;
      }
      function X(e, t) {
        for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) {
          (n = e.charCodeAt(a)), (r = n >> 8), (i = n % 256), o.push(i), o.push(
            r
          );
        }
        return o;
      }
      function G(e) {
        return K.toByteArray(B(e));
      }
      function Y(e, t, n, r) {
        for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) {
          t[i + n] = e[i];
        }
        return i;
      }
      function J(e) {
        return e !== e;
      }
      var K = n(5),
        Q = n(6),
        Z = n(7);
      debugger;
      (t.Buffer = a), (t.SlowBuffer = y), (t.INSPECT_MAX_BYTES = 50), (a.TYPED_ARRAY_SUPPORT = void 0 !==
        e.TYPED_ARRAY_SUPPORT
        ? e.TYPED_ARRAY_SUPPORT
        : r()), (t.kMaxLength = i()), (a.poolSize = 8192), (a._augment = function(
        e
      ) {
        return (e.__proto__ = a.prototype), e;
      }), (a.from = function(e, t, n) {
        return s(null, e, t, n);
      }), a.TYPED_ARRAY_SUPPORT &&
        (
          (a.prototype.__proto__ = Uint8Array.prototype),
          (a.__proto__ = Uint8Array),
          typeof Symbol != "undefined" &&
            Symbol.species &&
            a[Symbol.species] === a &&
            Object.defineProperty(a, Symbol.species, {
              value: null,
              configurable: !0
            })
        ), (a.alloc = function(e, t, n) {
        return c(null, e, t, n);
      }), (a.allocUnsafe = function(e) {
        return d(null, e);
      }), (a.allocUnsafeSlow = function(e) {
        return d(null, e);
      }), (a.isBuffer = function(e) {
        return !(e == null || !e._isBuffer);
      }), (a.compare = function(e, t) {
        if (!a.isBuffer(e) || !a.isBuffer(t)) {
          throw new TypeError("Arguments must be Buffers");
        }
        if (e === t) {
          return 0;
        }
        for (
          var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
          i < o;
          ++i
        ) {
          if (e[i] !== t[i]) {
            (n = e[i]), (r = t[i]);
            break;
          }
        }
        return n < r ? -1 : r < n ? 1 : 0;
      }), (a.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1;
        }
      }), (a.concat = function(e, t) {
        if (!Z(e)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (e.length === 0) {
          return a.alloc(0);
        }
        var n;
        if (void 0 === t) {
          for (t = 0, n = 0; n < e.length; ++n) {
            t += e[n].length;
          }
        }
        var r = a.allocUnsafe(t),
          i = 0;
        for (n = 0; n < e.length; ++n) {
          var o = e[n];
          if (!a.isBuffer(o)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          }
          o.copy(r, i), (i += o.length);
        }
        return r;
      }), (a.byteLength = g), (a.prototype._isBuffer = !0), (a.prototype.swap16 = function() {
        var e = this.length;
        if (e % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (var t = 0; t < e; t += 2) {
          v(this, t, t + 1);
        }
        return this;
      }), (a.prototype.swap32 = function() {
        var e = this.length;
        if (e % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (var t = 0; t < e; t += 4) {
          v(this, t, t + 3), v(this, t + 1, t + 2);
        }
        return this;
      }), (a.prototype.swap64 = function() {
        var e = this.length;
        if (e % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (var t = 0; t < e; t += 8) {
          v(this, t, t + 7), v(this, t + 1, t + 6), v(this, t + 2, t + 5), v(
            this,
            t + 3,
            t + 4
          );
        }
        return this;
      }), (a.prototype.toString = function() {
        var e = 0 | this.length;
        return e === 0
          ? ""
          : arguments.length === 0 ? O(this, 0, e) : b.apply(this, arguments);
      }), (a.prototype.equals = function(e) {
        if (!a.isBuffer(e)) {
          throw new TypeError("Argument must be a Buffer");
        }
        return this === e || a.compare(this, e) === 0;
      }), (a.prototype.inspect = function() {
        var e = "",
          n = t.INSPECT_MAX_BYTES;
        return this.length > 0 &&
          (
            (e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
            this.length > n && (e += " ... ")
          ), `<Buffer ${e}>`;
      }), (a.prototype.compare = function(e, t, n, r, i) {
        if (!a.isBuffer(e)) {
          throw new TypeError("Argument must be a Buffer");
        }
        if (
          (
            void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            t < 0 || n > e.length || r < 0 || i > this.length
          )
        ) {
          throw new RangeError("out of range index");
        }
        if (r >= i && t >= n) {
          return 0;
        }
        if (r >= i) {
          return -1;
        }
        if (t >= n) {
          return 1;
        }
        if (((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e)) {
          return 0;
        }
        for (
          var o = i - r,
            s = n - t,
            p = Math.min(o, s),
            c = this.slice(r, i),
            d = e.slice(t, n),
            l = 0;
          l < p;
          ++l
        ) {
          if (c[l] !== d[l]) {
            (o = c[l]), (s = d[l]);
            break;
          }
        }
        return o < s ? -1 : s < o ? 1 : 0;
      }), (a.prototype.includes = function(e, t, n) {
        return this.indexOf(e, t, n) !== -1;
      }), (a.prototype.indexOf = function(e, t, n) {
        return w(this, e, t, n, !0);
      }), (a.prototype.lastIndexOf = function(e, t, n) {
        return w(this, e, t, n, !1);
      }), (a.prototype.write = function(e, t, n, r) {
        if (void 0 === t) {
          (r = "utf8"), (n = this.length), (t = 0);
        } else if (void 0 === n && typeof t == "string") {
          (r = t), (n = this.length), (t = 0);
        } else {
          if (!isFinite(t)) {
            throw new Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          }
          (t |= 0), isFinite(n)
            ? ((n |= 0), void 0 === r && (r = "utf8"))
            : ((r = n), (n = void 0));
        }
        var i = this.length - t;
        if (
          (
            (void 0 === n || n > i) && (n = i),
            (e.length > 0 && (n < 0 || t < 0)) || t > this.length
          )
        ) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        r || (r = "utf8");
        for (var o = !1; ; ) {
          switch (r) {
            case "hex":
              return x(this, e, t, n);
            case "utf8":
            case "utf-8":
              return I(this, e, t, n);
            case "ascii":
              return T(this, e, t, n);
            case "latin1":
            case "binary":
              return R(this, e, t, n);
            case "base64":
              return k(this, e, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return C(this, e, t, n);
            default:
              if (o) {
                throw new TypeError(`Unknown encoding: ${r}`);
              }
              (r = `${r}`.toLowerCase()), (o = !0);
          }
        }
      }), (a.prototype.toJSON = function() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      });
      var ee = 4096;
      (a.prototype.slice = function(e, t) {
        var n = this.length;
        (e = ~~e), (t = void 0 === t ? n : ~~t), e < 0
          ? ((e += n), e < 0 && (e = 0))
          : e > n && (e = n), t < 0
          ? ((t += n), t < 0 && (t = 0))
          : t > n && (t = n), t < e && (t = e);
        var r;
        if (a.TYPED_ARRAY_SUPPORT) {
          (r = this.subarray(e, t)), (r.__proto__ = a.prototype);
        } else {
          var i = t - e;
          r = new a(i, void 0);
          for (var o = 0; o < i; ++o) {
            r[o] = this[o + e];
          }
        }
        return r;
      }), (a.prototype.readUIntLE = function(e, t, n) {
        (e |= 0), (t |= 0), n || N(e, t, this.length);
        for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) {
          r += this[e + o] * i;
        }
        return r;
      }), (a.prototype.readUIntBE = function(e, t, n) {
        (e |= 0), (t |= 0), n || N(e, t, this.length);
        for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); ) {
          r += this[e + --t] * i;
        }
        return r;
      }), (a.prototype.readUInt8 = function(e, t) {
        return t || N(e, 1, this.length), this[e];
      }), (a.prototype.readUInt16LE = function(e, t) {
        return t || N(e, 2, this.length), this[e] | (this[e + 1] << 8);
      }), (a.prototype.readUInt16BE = function(e, t) {
        return t || N(e, 2, this.length), (this[e] << 8) | this[e + 1];
      }), (a.prototype.readUInt32LE = function(e, t) {
        return t || N(e, 4, this.length), (this[e] |
          (this[e + 1] << 8) |
          (this[e + 2] << 16)) +
          16777216 * this[e + 3];
      }), (a.prototype.readUInt32BE = function(e, t) {
        return t || N(e, 4, this.length), 16777216 * this[e] +
          ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
      }), (a.prototype.readIntLE = function(e, t, n) {
        (e |= 0), (t |= 0), n || N(e, t, this.length);
        for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) {
          r += this[e + o] * i;
        }
        return (i *= 128), r >= i && (r -= Math.pow(2, 8 * t)), r;
      }), (a.prototype.readIntBE = function(e, t, n) {
        (e |= 0), (t |= 0), n || N(e, t, this.length);
        for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); ) {
          o += this[e + --r] * i;
        }
        return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o;
      }), (a.prototype.readInt8 = function(e, t) {
        return t || N(e, 1, this.length), 128 & this[e]
          ? (255 - this[e] + 1) * -1
          : this[e];
      }), (a.prototype.readInt16LE = function(e, t) {
        t || N(e, 2, this.length);
        var n = this[e] | (this[e + 1] << 8);
        return 32768 & n ? 4294901760 | n : n;
      }), (a.prototype.readInt16BE = function(e, t) {
        t || N(e, 2, this.length);
        var n = this[e + 1] | (this[e] << 8);
        return 32768 & n ? 4294901760 | n : n;
      }), (a.prototype.readInt32LE = function(e, t) {
        return t || N(e, 4, this.length), this[e] |
          (this[e + 1] << 8) |
          (this[e + 2] << 16) |
          (this[e + 3] << 24);
      }), (a.prototype.readInt32BE = function(e, t) {
        return t || N(e, 4, this.length), (this[e] << 24) |
          (this[e + 1] << 16) |
          (this[e + 2] << 8) |
          this[e + 3];
      }), (a.prototype.readFloatLE = function(e, t) {
        return t || N(e, 4, this.length), Q.read(this, e, !0, 23, 4);
      }), (a.prototype.readFloatBE = function(e, t) {
        return t || N(e, 4, this.length), Q.read(this, e, !1, 23, 4);
      }), (a.prototype.readDoubleLE = function(e, t) {
        return t || N(e, 8, this.length), Q.read(this, e, !0, 52, 8);
      }), (a.prototype.readDoubleBE = function(e, t) {
        return t || N(e, 8, this.length), Q.read(this, e, !1, 52, 8);
      }), (a.prototype.writeUIntLE = function(e, t, n, r) {
        if (((e = +e), (t |= 0), (n |= 0), !r)) {
          var i = Math.pow(2, 8 * n) - 1;
          M(this, e, t, n, i, 0);
        }
        var o = 1,
          a = 0;
        for (this[t] = 255 & e; ++a < n && (o *= 256); ) {
          this[t + a] = (e / o) & 255;
        }
        return t + n;
      }), (a.prototype.writeUIntBE = function(e, t, n, r) {
        if (((e = +e), (t |= 0), (n |= 0), !r)) {
          var i = Math.pow(2, 8 * n) - 1;
          M(this, e, t, n, i, 0);
        }
        var o = n - 1,
          a = 1;
        for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); ) {
          this[t + o] = (e / a) & 255;
        }
        return t + n;
      }), (a.prototype.writeUInt8 = function(e, t, n) {
        return (e = +e), (t |= 0), n ||
          M(this, e, t, 1, 255, 0), a.TYPED_ARRAY_SUPPORT ||
          (e = Math.floor(e)), (this[t] = 255 & e), t + 1;
      }), (a.prototype.writeUInt16LE = function(e, t, n) {
        return (e = +e), (t |= 0), n ||
          M(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : L(this, e, t, !0), t + 2;
      }), (a.prototype.writeUInt16BE = function(e, t, n) {
        return (e = +e), (t |= 0), n ||
          M(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : L(this, e, t, !1), t + 2;
      }), (a.prototype.writeUInt32LE = function(e, t, n) {
        return (e = +e), (t |= 0), n ||
          M(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT
          ? (
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e)
            )
          : _(this, e, t, !0), t + 4;
      }), (a.prototype.writeUInt32BE = function(e, t, n) {
        return (e = +e), (t |= 0), n ||
          M(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT
          ? (
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e)
            )
          : _(this, e, t, !1), t + 4;
      }), (a.prototype.writeIntLE = function(e, t, n, r) {
        if (((e = +e), (t |= 0), !r)) {
          var i = Math.pow(2, 8 * n - 1);
          M(this, e, t, n, i - 1, -i);
        }
        var o = 0,
          a = 1,
          s = 0;
        for (this[t] = 255 & e; ++o < n && (a *= 256); ) {
          e < 0 && s === 0 && this[t + o - 1] !== 0 && (s = 1), (this[t + o] =
            (((e / a) >> 0) - s) & 255);
        }
        return t + n;
      }), (a.prototype.writeIntBE = function(e, t, n, r) {
        if (((e = +e), (t |= 0), !r)) {
          var i = Math.pow(2, 8 * n - 1);
          M(this, e, t, n, i - 1, -i);
        }
        var o = n - 1,
          a = 1,
          s = 0;
        for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); ) {
          e < 0 && s === 0 && this[t + o + 1] !== 0 && (s = 1), (this[t + o] =
            (((e / a) >> 0) - s) & 255);
        }
        return t + n;
      }), (a.prototype.writeInt8 = function(e, t, n) {
        return (e = +e), (t |= 0), n ||
          M(this, e, t, 1, 127, -128), a.TYPED_ARRAY_SUPPORT ||
          (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), (this[t] =
          255 & e), t + 1;
      }), (a.prototype.writeInt16LE = function(e, t, n) {
        return (e = +e), (t |= 0), n ||
          M(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : L(this, e, t, !0), t + 2;
      }), (a.prototype.writeInt16BE = function(e, t, n) {
        return (e = +e), (t |= 0), n ||
          M(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : L(this, e, t, !1), t + 2;
      }), (a.prototype.writeInt32LE = function(e, t, n) {
        return (e = +e), (t |= 0), n ||
          M(this, e, t, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT
          ? (
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              (this[t + 2] = e >>> 16),
              (this[t + 3] = e >>> 24)
            )
          : _(this, e, t, !0), t + 4;
      }), (a.prototype.writeInt32BE = function(e, t, n) {
        return (e = +e), (t |= 0), n ||
          M(this, e, t, 4, 2147483647, -2147483648), e < 0 &&
          (e = 4294967295 + e + 1), a.TYPED_ARRAY_SUPPORT
          ? (
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e)
            )
          : _(this, e, t, !1), t + 4;
      }), (a.prototype.writeFloatLE = function(e, t, n) {
        return U(this, e, t, !0, n);
      }), (a.prototype.writeFloatBE = function(e, t, n) {
        return U(this, e, t, !1, n);
      }), (a.prototype.writeDoubleLE = function(e, t, n) {
        return F(this, e, t, !0, n);
      }), (a.prototype.writeDoubleBE = function(e, t, n) {
        return F(this, e, t, !1, n);
      }), (a.prototype.copy = function(e, t, n, r) {
        if (
          (
            n || (n = 0),
            r || r === 0 || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n
          )
        ) {
          return 0;
        }
        if (e.length === 0 || this.length === 0) {
          return 0;
        }
        if (t < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (n < 0 || n >= this.length) {
          throw new RangeError("sourceStart out of bounds");
        }
        if (r < 0) {
          throw new RangeError("sourceEnd out of bounds");
        }
        r > this.length && (r = this.length), e.length - t < r - n &&
          (r = e.length - t + n);
        var i,
          o = r - n;
        if (this === e && n < t && t < r) {
          for (i = o - 1; i >= 0; --i) {
            e[i + t] = this[i + n];
          }
        } else if (o < 1e3 || !a.TYPED_ARRAY_SUPPORT) {
          for (i = 0; i < o; ++i) {
            e[i + t] = this[i + n];
          }
        } else {
          Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
        }
        return o;
      }), (a.prototype.fill = function(e, t, n, r) {
        if (typeof e == "string") {
          if (
            (
              typeof t == "string"
                ? ((r = t), (t = 0), (n = this.length))
                : typeof n == "string" && ((r = n), (n = this.length)),
              e.length === 1
            )
          ) {
            var i = e.charCodeAt(0);
            i < 256 && (e = i);
          }
          if (void 0 !== r && typeof r != "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof r == "string" && !a.isEncoding(r)) {
            throw new TypeError(`Unknown encoding: ${r}`);
          }
        } else {
          typeof e == "number" && (e &= 255);
        }
        if (t < 0 || this.length < t || this.length < n) {
          throw new RangeError("Out of range index");
        }
        if (n <= t) {
          return this;
        }
        (t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0);
        var o;
        if (typeof e == "number") {
          for (o = t; o < n; ++o) {
            this[o] = e;
          }
        } else {
          var s = a.isBuffer(e) ? e : z(new a(e, r).toString()),
            p = s.length;
          for (o = 0; o < n - t; ++o) {
            this[o + t] = s[o % p];
          }
        }
        return this;
      });
      var te = /[^+\/0-9A-Za-z-_]/g;
      debugger;
    };

    debugger;
    myfoo.call(
      t,
      (function() {
        return this;
      })()
    );
  },
  function(e, t) {
    function n(e) {
      var t = e.length;
      if (t % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      return e[t - 2] === "=" ? 2 : e[t - 1] === "=" ? 1 : 0;
    }
    function r(e) {
      return 3 * e.length / 4 - n(e);
    }
    function i(e) {
      var t,
        r,
        i,
        o,
        a,
        s,
        p = e.length;
      (a = n(e)), (s = new d(3 * p / 4 - a)), (i = a > 0 ? p - 4 : p);
      var l = 0;
      for (t = 0, r = 0; t < i; t += 4, r += 3) {
        (o =
          (c[e.charCodeAt(t)] << 18) |
          (c[e.charCodeAt(t + 1)] << 12) |
          (c[e.charCodeAt(t + 2)] << 6) |
          c[e.charCodeAt(t + 3)]), (s[l++] = (o >> 16) & 255), (s[l++] =
          (o >> 8) & 255), (s[l++] = 255 & o);
      }
      return a === 2
        ? (
            (o = (c[e.charCodeAt(t)] << 2) | (c[e.charCodeAt(t + 1)] >> 4)),
            (s[l++] = 255 & o)
          )
        : a === 1 &&
            (
              (o =
                (c[e.charCodeAt(t)] << 10) |
                (c[e.charCodeAt(t + 1)] << 4) |
                (c[e.charCodeAt(t + 2)] >> 2)),
              (s[l++] = (o >> 8) & 255),
              (s[l++] = 255 & o)
            ), s;
    }
    function o(e) {
      return (
        p[(e >> 18) & 63] + p[(e >> 12) & 63] + p[(e >> 6) & 63] + p[63 & e]
      );
    }
    function a(e, t, n) {
      for (var r, i = [], a = t; a < n; a += 3) {
        (r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2]), i.push(o(r));
      }
      return i.join("");
    }
    function s(e) {
      for (
        var t,
          n = e.length,
          r = n % 3,
          i = "",
          o = [],
          s = 16383,
          c = 0,
          d = n - r;
        c < d;
        c += s
      ) {
        o.push(a(e, c, c + s > d ? d : c + s));
      }
      return r === 1
        ? (
            (t = e[n - 1]),
            (i += p[t >> 2]),
            (i += p[(t << 4) & 63]),
            (i += "==")
          )
        : r === 2 &&
            (
              (t = (e[n - 2] << 8) + e[n - 1]),
              (i += p[t >> 10]),
              (i += p[(t >> 4) & 63]),
              (i += p[(t << 2) & 63]),
              (i += "=")
            ), o.push(i), o.join("");
    }
    (t.byteLength = r), (t.toByteArray = i), (t.fromByteArray = s);
    for (
      var p = [],
        c = [],
        d = typeof Uint8Array != "undefined" ? Uint8Array : Array,
        l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        m = 0,
        u = l.length;
      m < u;
      ++m
    ) {
      (p[m] = l[m]), (c[l.charCodeAt(m)] = m);
    }
    (c["-".charCodeAt(0)] = 62), (c["_".charCodeAt(0)] = 63);
  },
  function(e, t) {
    (t.read = function(e, t, n, r, i) {
      var o,
        a,
        s = 8 * i - r - 1,
        p = (1 << s) - 1,
        c = p >> 1,
        d = -7,
        l = n ? i - 1 : 0,
        m = n ? -1 : 1,
        u = e[t + l];
      for (
        l += m, o = u & ((1 << -d) - 1), u >>= -d, d += s;
        d > 0;
        o = 256 * o + e[t + l], l += m, d -= 8
      ) {}
      for (
        a = o & ((1 << -d) - 1), o >>= -d, d += r;
        d > 0;
        a = 256 * a + e[t + l], l += m, d -= 8
      ) {}
      if (o === 0) {
        o = 1 - c;
      } else {
        if (o === p) {
          return a ? NaN : (u ? -1 : 1) * (1 / 0);
        }
        (a += Math.pow(2, r)), (o -= c);
      }
      return (u ? -1 : 1) * a * Math.pow(2, o - r);
    }), (t.write = function(e, t, n, r, i, o) {
      var a,
        s,
        p,
        c = 8 * o - i - 1,
        d = (1 << c) - 1,
        l = d >> 1,
        m = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        u = r ? 0 : o - 1,
        h = r ? 1 : -1,
        f = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
      for (
        t = Math.abs(t), isNaN(t) || t === 1 / 0
          ? ((s = isNaN(t) ? 1 : 0), (a = d))
          : (
              (a = Math.floor(Math.log(t) / Math.LN2)),
              t * (p = Math.pow(2, -a)) < 1 && (a--, (p *= 2)),
              (t += a + l >= 1 ? m / p : m * Math.pow(2, 1 - l)),
              t * p >= 2 && (a++, (p /= 2)),
              a + l >= d
                ? ((s = 0), (a = d))
                : a + l >= 1
                  ? ((s = (t * p - 1) * Math.pow(2, i)), (a += l))
                  : ((s = t * Math.pow(2, l - 1) * Math.pow(2, i)), (a = 0))
            );
        i >= 8;
        e[n + u] = 255 & s, u += h, s /= 256, i -= 8
      ) {}
      for (
        a = (a << i) | s, c += i;
        c > 0;
        e[n + u] = 255 & a, u += h, a /= 256, c -= 8
      ) {}
      e[n + u - h] |= 128 * f;
    });
  },
  function(e, t) {
    var n = {}.toString;
    e.exports =
      Array.isArray ||
      function(e) {
        return n.call(e) == "[object Array]";
      };
  },
  function(e, t, n) {
    (function(e) {
      var r = n(9),
        i = n(30),
        o = n(31),
        a = n(32),
        s = t;
      (s.request = function(t, n) {
        t = typeof t == "string" ? a.parse(t) : i(t);
        var o = e.location.protocol.search(/^https?:$/) === -1 ? "http:" : "",
          s = t.protocol || o,
          p = t.hostname || t.host,
          c = t.port,
          d = t.path || "/";
        p && p.indexOf(":") !== -1 && (p = `[${p}]`), (t.url =
          (p ? `${s}//${p}` : "") +
          (c ? `:${c}` : "") +
          d), (t.method = (t.method || "GET").toUpperCase()), (t.headers =
          t.headers || {});
        var l = new r(t);
        return n && l.on("response", n), l;
      }), (s.get = function(e, t) {
        var n = s.request(e, t);
        return n.end(), n;
      }), (s.Agent = function() {}), (s.Agent.defaultMaxSockets = 4), (s.STATUS_CODES = o), (s.METHODS = [
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LOCK",
        "M-SEARCH",
        "MERGE",
        "MKACTIVITY",
        "MKCOL",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PURGE",
        "PUT",
        "REPORT",
        "SEARCH",
        "SUBSCRIBE",
        "TRACE",
        "UNLOCK",
        "UNSUBSCRIBE"
      ]);
    }.call(
      t,
      (function() {
        return this;
      })()
    ));
  },
  function(e, t, n) {
    (function(t, r, i) {
      function o(e, t) {
        return s.fetch && t
          ? "fetch"
          : s.mozchunkedarraybuffer
            ? "moz-chunked-arraybuffer"
            : s.msstream
              ? "ms-stream"
              : s.arraybuffer && e
                ? "arraybuffer"
                : s.vbArray && e ? "text:vbarray" : "text";
      }
      function a(e) {
        try {
          var t = e.status;
          return t !== null && t !== 0;
        } catch (e) {
          return !1;
        }
      }
      var s = n(10),
        p = n(11),
        c = n(12),
        d = n(13),
        l = n(29),
        m = c.IncomingMessage,
        u = c.readyStates,
        h = (e.exports = function(e) {
          var n = this;
          d.Writable.call(
            n
          ), (n._opts = e), (n._body = []), (n._headers = {}), e.auth &&
            n.setHeader(
              "Authorization",
              `Basic ${new t(e.auth).toString("base64")}`
            ), Object.keys(e.headers).forEach(function(t) {
            n.setHeader(t, e.headers[t]);
          });
          var r,
            i = !0;
          if (e.mode === "disable-fetch" || "timeout" in e) {
            (i = !1), (r = !0);
          } else if (e.mode === "prefer-streaming") {
            r = !1;
          } else if (e.mode === "allow-wrong-content-type") {
            r = !s.overrideMimeType;
          } else {
            if (e.mode && e.mode !== "default" && e.mode !== "prefer-fast") {
              throw new Error("Invalid value for opts.mode");
            }
            r = !0;
          }
          (n._mode = o(r, i)), n.on("finish", function() {
            n._onFinish();
          });
        });
      p(h, d.Writable), (h.prototype.setHeader = function(e, t) {
        var n = this,
          r = e.toLowerCase();
        f.indexOf(r) === -1 &&
          (n._headers[r] = {
            name: e,
            value: t
          });
      }), (h.prototype.getHeader = function(e) {
        var t = this._headers[e.toLowerCase()];
        return t ? t.value : null;
      }), (h.prototype.removeHeader = function(e) {
        var t = this;
        delete t._headers[e.toLowerCase()];
      }), (h.prototype._onFinish = function() {
        var e = this;
        if (!e._destroyed) {
          var n = e._opts,
            o = e._headers,
            a = null;
          n.method !== "GET" &&
            n.method !== "HEAD" &&
            (a = s.blobConstructor
              ? new r.Blob(
                  e._body.map(function(e) {
                    return l(e);
                  }),
                  {
                    type: (o["content-type"] || {}).value || ""
                  }
                )
              : t.concat(e._body).toString());
          var p = [];
          if (
            (
              Object.keys(o).forEach(function(e) {
                var t = o[e].name,
                  n = o[e].value;
                Array.isArray(n)
                  ? n.forEach(function(e) {
                      p.push([t, e]);
                    })
                  : p.push([t, n]);
              }),
              e._mode === "fetch"
            )
          ) {
            r
              .fetch(e._opts.url, {
                method: e._opts.method,
                headers: p,
                body: a || void 0,
                mode: "cors",
                credentials: n.withCredentials ? "include" : "same-origin"
              })
              .then(
                function(t) {
                  (e._fetchResponse = t), e._connect();
                },
                function(t) {
                  e.emit("error", t);
                }
              );
          } else {
            var c = (e._xhr = new r.XMLHttpRequest());
            try {
              c.open(e._opts.method, e._opts.url, !0);
            } catch (t) {
              return void i.nextTick(function() {
                e.emit("error", t);
              });
            }
            "responseType" in c &&
              (c.responseType = e._mode.split(":")[0]), "withCredentials" in
              c && (c.withCredentials = !!n.withCredentials), e._mode ===
              "text" &&
              "overrideMimeType" in c &&
              c.overrideMimeType(
                "text/plain; charset=x-user-defined"
              ), "timeout" in n &&
              (
                (c.timeout = n.timeout),
                (c.ontimeout = function() {
                  e.emit("timeout");
                })
              ), p.forEach(function(e) {
              c.setRequestHeader(e[0], e[1]);
            }), (e._response = null), (c.onreadystatechange = function() {
              switch (c.readyState) {
                case u.LOADING:
                case u.DONE:
                  e._onXHRProgress();
              }
            }), e._mode === "moz-chunked-arraybuffer" &&
              (c.onprogress = function() {
                e._onXHRProgress();
              }), (c.onerror = function() {
              e._destroyed || e.emit("error", new Error("XHR error"));
            });
            try {
              c.send(a);
            } catch (t) {
              return void i.nextTick(function() {
                e.emit("error", t);
              });
            }
          }
        }
      }), (h.prototype._onXHRProgress = function() {
        var e = this;
        a(e._xhr) &&
          !e._destroyed &&
          (e._response || e._connect(), e._response._onXHRProgress());
      }), (h.prototype._connect = function() {
        var e = this;
        e._destroyed ||
          (
            (e._response = new m(e._xhr, e._fetchResponse, e._mode)),
            e._response.on("error", function(t) {
              e.emit("error", t);
            }),
            e.emit("response", e._response)
          );
      }), (h.prototype._write = function(e, t, n) {
        var r = this;
        r._body.push(e), n();
      }), (h.prototype.abort = h.prototype.destroy = function() {
        var e = this;
        (e._destroyed = !0), e._response &&
          (e._response._destroyed = !0), e._xhr && e._xhr.abort();
      }), (h.prototype.end = function(e, t, n) {
        var r = this;
        typeof e == "function" &&
          ((n = e), (e = void 0)), d.Writable.prototype.end.call(r, e, t, n);
      }), (h.prototype.flushHeaders = function() {}), (h.prototype.setTimeout = function() {}), (h.prototype.setNoDelay = function() {}), (h.prototype.setSocketKeepAlive = function() {});
      var f = [
        "accept-charset",
        "accept-encoding",
        "access-control-request-headers",
        "access-control-request-method",
        "connection",
        "content-length",
        "cookie",
        "cookie2",
        "date",
        "dnt",
        "expect",
        "host",
        "keep-alive",
        "origin",
        "referer",
        "te",
        "trailer",
        "transfer-encoding",
        "upgrade",
        "user-agent",
        "via"
      ];
    }.call(
      t,
      n(4).Buffer,
      (function() {
        return this;
      })(),
      n(1)
    ));
  },
  function(e, t) {
    (function(e) {
      function n() {
        if (void 0 !== o) {
          return o;
        }
        if (e.XMLHttpRequest) {
          o = new e.XMLHttpRequest();
          try {
            o.open("GET", e.XDomainRequest ? "/" : "https://example.com");
          } catch (e) {
            o = null;
          }
        } else {
          o = null;
        }
        return o;
      }
      function r(e) {
        var t = n();
        if (!t) {
          return !1;
        }
        try {
          return (t.responseType = e), t.responseType === e;
        } catch (e) {}
        return !1;
      }
      function i(e) {
        return typeof e == "function";
      }
      (t.fetch = i(e.fetch) && i(e.ReadableStream)), (t.blobConstructor = !1);
      try {
        new Blob([new ArrayBuffer(1)]), (t.blobConstructor = !0);
      } catch (e) {}
      var o,
        a = typeof e.ArrayBuffer != "undefined",
        s = a && i(e.ArrayBuffer.prototype.slice);
      (t.arraybuffer = t.fetch || (a && r("arraybuffer"))), (t.msstream =
        !t.fetch && s && r("ms-stream")), (t.mozchunkedarraybuffer =
        !t.fetch && a && r("moz-chunked-arraybuffer")), (t.overrideMimeType =
        t.fetch || (!!n() && i(n().overrideMimeType))), (t.vbArray = i(
        e.VBArray
      )), (o = null);
    }.call(
      t,
      (function() {
        return this;
      })()
    ));
  },
  function(e, t) {
    typeof Object.create == "function"
      ? (e.exports = function(e, t) {
          (e.super_ = t), (e.prototype = Object.create(t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }));
        })
      : (e.exports = function(e, t) {
          e.super_ = t;
          var n = function() {};
          (n.prototype =
            t.prototype), (e.prototype = new n()), (e.prototype.constructor = e);
        });
  },
  function(e, t, n) {
    (function(e, r, i) {
      var o = n(10),
        a = n(11),
        s = n(13),
        p = (t.readyStates = {
          UNSENT: 0,
          OPENED: 1,
          HEADERS_RECEIVED: 2,
          LOADING: 3,
          DONE: 4
        }),
        c = (t.IncomingMessage = function(t, n, i) {
          function a() {
            c
              .read()
              .then(function(e) {
                if (!p._destroyed) {
                  if (e.done) {
                    return void p.push(null);
                  }
                  p.push(new r(e.value)), a();
                }
              })
              .catch(function(e) {
                p.emit("error", e);
              });
          }
          var p = this;
          if (
            (
              s.Readable.call(p),
              (p._mode = i),
              (p.headers = {}),
              (p.rawHeaders = []),
              (p.trailers = {}),
              (p.rawTrailers = []),
              p.on("end", function() {
                e.nextTick(function() {
                  p.emit("close");
                });
              }),
              i === "fetch"
            )
          ) {
            (p._fetchResponse = n), (p.url = n.url), (p.statusCode =
              n.status), (p.statusMessage =
              n.statusText), n.headers.forEach(function(e, t) {
              (p.headers[t.toLowerCase()] = e), p.rawHeaders.push(t, e);
            });
            var c = n.body.getReader();
            a();
          } else {
            (p._xhr = t), (p._pos = 0), (p.url = t.responseURL), (p.statusCode =
              t.status), (p.statusMessage = t.statusText);
            var d = t.getAllResponseHeaders().split(/\r?\n/);
            if (
              (
                d.forEach(function(e) {
                  var t = e.match(/^([^:]+):\s*(.*)/);
                  if (t) {
                    var n = t[1].toLowerCase();
                    n === "set-cookie"
                      ? (
                          void 0 === p.headers[n] && (p.headers[n] = []),
                          p.headers[n].push(t[2])
                        )
                      : void 0 !== p.headers[n]
                        ? (p.headers[n] += `, ${t[2]}`)
                        : (p.headers[n] = t[2]), p.rawHeaders.push(t[1], t[2]);
                  }
                }),
                (p._charset = "x-user-defined"),
                !o.overrideMimeType
              )
            ) {
              var l = p.rawHeaders["mime-type"];
              if (l) {
                var m = l.match(/;\s*charset=([^;])(;|$)/);
                m && (p._charset = m[1].toLowerCase());
              }
              p._charset || (p._charset = "utf-8");
            }
          }
        });
      a(
        c,
        s.Readable
      ), (c.prototype._read = function() {}), (c.prototype._onXHRProgress = function() {
        var e = this,
          t = e._xhr,
          n = null;
        switch (e._mode) {
          case "text:vbarray":
            if (t.readyState !== p.DONE) {
              break;
            }
            try {
              n = new i.VBArray(t.responseBody).toArray();
            } catch (e) {}
            if (n !== null) {
              e.push(new r(n));
              break;
            }
          case "text":
            try {
              n = t.responseText;
            } catch (t) {
              e._mode = "text:vbarray";
              break;
            }
            if (n.length > e._pos) {
              var o = n.substr(e._pos);
              if (e._charset === "x-user-defined") {
                for (var a = new r(o.length), s = 0; s < o.length; s++) {
                  a[s] = 255 & o.charCodeAt(s);
                }
                e.push(a);
              } else {
                e.push(o, e._charset);
              }
              e._pos = n.length;
            }
            break;
          case "arraybuffer":
            if (t.readyState !== p.DONE || !t.response) {
              break;
            }
            (n = t.response), e.push(new r(new Uint8Array(n)));
            break;
          case "moz-chunked-arraybuffer":
            if (((n = t.response), t.readyState !== p.LOADING || !n)) {
              break;
            }
            e.push(new r(new Uint8Array(n)));
            break;
          case "ms-stream":
            if (((n = t.response), t.readyState !== p.LOADING)) {
              break;
            }
            var c = new i.MSStreamReader();
            (c.onprogress = function() {
              c.result.byteLength > e._pos &&
                (
                  e.push(new r(new Uint8Array(c.result.slice(e._pos)))),
                  (e._pos = c.result.byteLength)
                );
            }), (c.onload = function() {
              e.push(null);
            }), c.readAsArrayBuffer(n);
        }
        e._xhr.readyState === p.DONE && e._mode !== "ms-stream" && e.push(null);
      });
    }.call(
      t,
      n(1),
      n(4).Buffer,
      (function() {
        return this;
      })()
    ));
  },
  function(e, t, n) {
    (t = e.exports = n(14)), (t.Stream = t), (t.Readable = t), (t.Writable = n(
      22
    )), (t.Duplex = n(21)), (t.Transform = n(27)), (t.PassThrough = n(28));
  },
  function(e, t, n) {
    (function(t) {
      function r(e, t, n) {
        return typeof e.prependListener == "function"
          ? e.prependListener(t, n)
          : void (e._events && e._events[t]
              ? E(e._events[t])
                ? e._events[t].unshift(n)
                : (e._events[t] = [n, e._events[t]])
              : e.on(t, n));
      }
      function i(e, t) {
        ($ = $ || n(21)), (e =
          e || {}), (this.objectMode = !!e.objectMode), t instanceof $ &&
          (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var r = e.highWaterMark,
          i = this.objectMode ? 16 : 16384;
        (this.highWaterMark = r || r === 0
          ? r
          : i), (this.highWaterMark = ~~this
          .highWaterMark), (this.buffer = new _()), (this.length = 0), (this.pipes = null), (this.pipesCount = 0), (this.flowing = null), (this.ended = !1), (this.endEmitted = !1), (this.reading = !1), (this.sync = !0), (this.needReadable = !1), (this.emittedReadable = !1), (this.readableListening = !1), (this.resumeScheduled = !1), (this.defaultEncoding =
          e.defaultEncoding ||
          "utf8"), (this.ranOut = !1), (this.awaitDrain = 0), (this.readingMore = !1), (this.decoder = null), (this.encoding = null), e.encoding &&
          (
            L || (L = n(26).StringDecoder),
            (this.decoder = new L(e.encoding)),
            (this.encoding = e.encoding)
          );
      }
      function o(e) {
        return ($ = $ || n(21)), this instanceof o
          ? (
              (this._readableState = new i(e, this)),
              (this.readable = !0),
              e && typeof e.read == "function" && (this._read = e.read),
              void j.call(this)
            )
          : new o(e);
      }
      function a(e, t, n, r, i) {
        var o = d(t, n);
        if (o) {
          e.emit("error", o);
        } else if (n === null) {
          (t.reading = !1), l(e, t);
        } else if (t.objectMode || (n && n.length > 0)) {
          if (t.ended && !i) {
            var a = new Error("stream.push() after EOF");
            e.emit("error", a);
          } else if (t.endEmitted && i) {
            var p = new Error("stream.unshift() after end event");
            e.emit("error", p);
          } else {
            var c;
            !t.decoder ||
              i ||
              r ||
              (
                (n = t.decoder.write(n)),
                (c = !t.objectMode && n.length === 0)
              ), i || (t.reading = !1), c ||
              (t.flowing && t.length === 0 && !t.sync
                ? (e.emit("data", n), e.read(0))
                : (
                    (t.length += t.objectMode ? 1 : n.length),
                    i ? t.buffer.unshift(n) : t.buffer.push(n),
                    t.needReadable && m(e)
                  )), h(e, t);
          }
        } else {
          i || (t.reading = !1);
        }
        return s(t);
      }
      function s(e) {
        return (
          !e.ended &&
          (e.needReadable || e.length < e.highWaterMark || e.length === 0)
        );
      }
      function p(e) {
        return e >= U
          ? (e = U)
          : (
              e--,
              (e |= e >>> 1),
              (e |= e >>> 2),
              (e |= e >>> 4),
              (e |= e >>> 8),
              (e |= e >>> 16),
              e++
            ), e;
      }
      function c(e, t) {
        return e <= 0 || (t.length === 0 && t.ended)
          ? 0
          : t.objectMode
            ? 1
            : e !== e
              ? t.flowing && t.length ? t.buffer.head.data.length : t.length
              : (
                  e > t.highWaterMark && (t.highWaterMark = p(e)),
                  e <= t.length
                    ? e
                    : t.ended ? t.length : ((t.needReadable = !0), 0)
                );
      }
      function d(e, t) {
        var n = null;
        return A.isBuffer(t) ||
          typeof t == "string" ||
          t === null ||
          void 0 === t ||
          e.objectMode ||
          (n = new TypeError("Invalid non-string/buffer chunk")), n;
      }
      function l(e, t) {
        if (!t.ended) {
          if (t.decoder) {
            var n = t.decoder.end();
            n &&
              n.length &&
              (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
          }
          (t.ended = !0), m(e);
        }
      }
      function m(e) {
        var t = e._readableState;
        (t.needReadable = !1), t.emittedReadable ||
          (
            M("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            t.sync ? O(u, e) : u(e)
          );
      }
      function u(e) {
        M("emit readable"), e.emit("readable"), w(e);
      }
      function h(e, t) {
        t.readingMore || ((t.readingMore = !0), O(f, e, t));
      }
      function f(e, t) {
        for (
          var n = t.length;
          !t.reading &&
          !t.flowing &&
          !t.ended &&
          t.length < t.highWaterMark &&
          (M("maybeReadMore read 0"), e.read(0), n !== t.length);

        ) {
          n = t.length;
        }
        t.readingMore = !1;
      }
      function y(e) {
        return function() {
          var t = e._readableState;
          M("pipeOnDrain", t.awaitDrain), t.awaitDrain &&
            t.awaitDrain--, t.awaitDrain === 0 &&
            D(e, "data") &&
            ((t.flowing = !0), w(e));
        };
      }
      function g(e) {
        M("readable nexttick read 0"), e.read(0);
      }
      function b(e, t) {
        t.resumeScheduled || ((t.resumeScheduled = !0), O(v, e, t));
      }
      function v(e, t) {
        t.reading ||
          (
            M("resume read 0"),
            e.read(0)
          ), (t.resumeScheduled = !1), (t.awaitDrain = 0), e.emit("resume"), w(
          e
        ), t.flowing && !t.reading && e.read(0);
      }
      function w(e) {
        var t = e._readableState;
        for (M("flow", t.flowing); t.flowing && e.read() !== null; ) {}
      }
      function S(e, t) {
        if (t.length === 0) {
          return null;
        }
        var n;
        return t.objectMode
          ? (n = t.buffer.shift())
          : !e || e >= t.length
            ? (
                (n = t.decoder
                  ? t.buffer.join("")
                  : t.buffer.length === 1
                    ? t.buffer.head.data
                    : t.buffer.concat(t.length)),
                t.buffer.clear()
              )
            : (n = x(e, t.buffer, t.decoder)), n;
      }
      function x(e, t, n) {
        var r;
        return e < t.head.data.length
          ? (
              (r = t.head.data.slice(0, e)),
              (t.head.data = t.head.data.slice(e))
            )
          : (r = e === t.head.data.length
              ? t.shift()
              : n ? I(e, t) : T(e, t)), r;
      }
      function I(e, t) {
        var n = t.head,
          r = 1,
          i = n.data;
        for (e -= i.length; (n = n.next); ) {
          var o = n.data,
            a = e > o.length ? o.length : e;
          if (((i += a === o.length ? o : o.slice(0, e)), (e -= a), e === 0)) {
            a === o.length
              ? (++r, n.next ? (t.head = n.next) : (t.head = t.tail = null))
              : ((t.head = n), (n.data = o.slice(a)));
            break;
          }
          ++r;
        }
        return (t.length -= r), i;
      }
      function T(e, t) {
        var n = A.allocUnsafe(e),
          r = t.head,
          i = 1;
        for (r.data.copy(n), e -= r.data.length; (r = r.next); ) {
          var o = r.data,
            a = e > o.length ? o.length : e;
          if ((o.copy(n, n.length - e, 0, a), (e -= a), e === 0)) {
            a === o.length
              ? (++i, r.next ? (t.head = r.next) : (t.head = t.tail = null))
              : ((t.head = r), (r.data = o.slice(a)));
            break;
          }
          ++i;
        }
        return (t.length -= i), n;
      }
      function R(e) {
        var t = e._readableState;
        if (t.length > 0) {
          throw new Error('"endReadable()" called on non-empty stream');
        }
        t.endEmitted || ((t.ended = !0), O(k, t, e));
      }
      function k(e, t) {
        e.endEmitted ||
          e.length !== 0 ||
          ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
      }
      function C(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) {
            return n;
          }
        }
        return -1;
      }
      e.exports = o;
      var $,
        O = n(15),
        E = n(7);
      o.ReadableState = i;
      var D = (
        n(2).EventEmitter,
        function(e, t) {
          return e.listeners(t).length;
        }
      ),
        j = n(16),
        A = n(17).Buffer,
        P = n(18);
      P.inherits = n(11);
      var N = n(19),
        M = void 0;
      M = N && N.debuglog ? N.debuglog("stream") : function() {};
      var L,
        _ = n(20);
      P.inherits(o, j);
      var q = ["error", "close", "destroy", "pause", "resume"];
      (o.prototype.push = function(e, t) {
        var n = this._readableState;
        return n.objectMode ||
          typeof e != "string" ||
          (
            (t = t || n.defaultEncoding),
            t !== n.encoding && ((e = A.from(e, t)), (t = ""))
          ), a(this, n, e, t, !1);
      }), (o.prototype.unshift = function(e) {
        var t = this._readableState;
        return a(this, t, e, "", !0);
      }), (o.prototype.isPaused = function() {
        return this._readableState.flowing === !1;
      }), (o.prototype.setEncoding = function(e) {
        return L ||
          (L = n(26).StringDecoder), (this._readableState.decoder = new L(
          e
        )), (this._readableState.encoding = e), this;
      });
      var U = 8388608;
      (o.prototype.read = function(e) {
        M("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          n = e;
        if (
          (
            e !== 0 && (t.emittedReadable = !1),
            e === 0 &&
              t.needReadable &&
              (t.length >= t.highWaterMark || t.ended)
          )
        ) {
          return M("read: emitReadable", t.length, t.ended), t.length === 0 &&
            t.ended
            ? R(this)
            : m(this), null;
        }
        if (((e = c(e, t)), e === 0 && t.ended)) {
          return t.length === 0 && R(this), null;
        }
        var r = t.needReadable;
        M("need readable", r), (t.length === 0 ||
          t.length - e < t.highWaterMark) &&
          ((r = !0), M("length less than watermark", r)), t.ended || t.reading
          ? ((r = !1), M("reading or ended", r))
          : r &&
              (
                M("do read"),
                (t.reading = !0),
                (t.sync = !0),
                t.length === 0 && (t.needReadable = !0),
                this._read(t.highWaterMark),
                (t.sync = !1),
                t.reading || (e = c(n, t))
              );
        var i;
        return (i = e > 0 ? S(e, t) : null), i === null
          ? ((t.needReadable = !0), (e = 0))
          : (t.length -= e), t.length === 0 &&
          (
            t.ended || (t.needReadable = !0),
            n !== e && t.ended && R(this)
          ), i !== null && this.emit("data", i), i;
      }), (o.prototype._read = function(e) {
        this.emit("error", new Error("_read() is not implemented"));
      }), (o.prototype.pipe = function(e, n) {
        function i(e) {
          M("onunpipe"), e === m && a();
        }
        function o() {
          M("onend"), e.end();
        }
        function a() {
          M("cleanup"), e.removeListener("close", c), e.removeListener(
            "finish",
            d
          ), e.removeListener("drain", g), e.removeListener(
            "error",
            p
          ), e.removeListener("unpipe", i), m.removeListener(
            "end",
            o
          ), m.removeListener("end", l), m.removeListener(
            "data",
            s
          ), (b = !0), !u.awaitDrain ||
            (e._writableState && !e._writableState.needDrain) ||
            g();
        }
        function s(t) {
          M("ondata"), (v = !1);
          var n = e.write(t);
          !1 !== n ||
            v ||
            (
              ((u.pipesCount === 1 && u.pipes === e) ||
                (u.pipesCount > 1 && C(u.pipes, e) !== -1)) &&
                !b &&
                (
                  M("false write response, pause", m._readableState.awaitDrain),
                  m._readableState.awaitDrain++,
                  (v = !0)
                ),
              m.pause()
            );
        }
        function p(t) {
          M("onerror", t), l(), e.removeListener("error", p), D(e, "error") ===
            0 && e.emit("error", t);
        }
        function c() {
          e.removeListener("finish", d), l();
        }
        function d() {
          M("onfinish"), e.removeListener("close", c), l();
        }
        function l() {
          M("unpipe"), m.unpipe(e);
        }
        var m = this,
          u = this._readableState;
        switch (u.pipesCount) {
          case 0:
            u.pipes = e;
            break;
          case 1:
            u.pipes = [u.pipes, e];
            break;
          default:
            u.pipes.push(e);
        }
        (u.pipesCount += 1), M("pipe count=%d opts=%j", u.pipesCount, n);
        var h = (!n || n.end !== !1) && e !== t.stdout && e !== t.stderr,
          f = h ? o : l;
        u.endEmitted ? O(f) : m.once("end", f), e.on("unpipe", i);
        var g = y(m);
        e.on("drain", g);
        var b = !1,
          v = !1;
        return m.on("data", s), r(e, "error", p), e.once("close", c), e.once(
          "finish",
          d
        ), e.emit("pipe", m), u.flowing || (M("pipe resume"), m.resume()), e;
      }), (o.prototype.unpipe = function(e) {
        var t = this._readableState;
        if (t.pipesCount === 0) {
          return this;
        }
        if (t.pipesCount === 1) {
          return e && e !== t.pipes
            ? this
            : (
                e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this),
                this
              );
        }
        if (!e) {
          var n = t.pipes,
            r = t.pipesCount;
          (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
          for (var i = 0; i < r; i++) {
            n[i].emit("unpipe", this);
          }
          return this;
        }
        var o = C(t.pipes, e);
        return o === -1
          ? this
          : (
              t.pipes.splice(o, 1),
              (t.pipesCount -= 1),
              t.pipesCount === 1 && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this),
              this
            );
      }), (o.prototype.on = function(e, t) {
        var n = j.prototype.on.call(this, e, t);
        if (e === "data") {
          this._readableState.flowing !== !1 && this.resume();
        } else if (e === "readable") {
          var r = this._readableState;
          r.endEmitted ||
            r.readableListening ||
            (
              (r.readableListening = r.needReadable = !0),
              (r.emittedReadable = !1),
              r.reading ? r.length && m(this, r) : O(g, this)
            );
        }
        return n;
      }), (o.prototype.addListener =
        o.prototype.on), (o.prototype.resume = function() {
        var e = this._readableState;
        return e.flowing || (M("resume"), (e.flowing = !0), b(this, e)), this;
      }), (o.prototype.pause = function() {
        return M("call pause flowing=%j", this._readableState.flowing), !1 !==
          this._readableState.flowing &&
          (
            M("pause"),
            (this._readableState.flowing = !1),
            this.emit("pause")
          ), this;
      }), (o.prototype.wrap = function(e) {
        var t = this._readableState,
          n = !1,
          r = this;
        e.on("end", function() {
          if ((M("wrapped end"), t.decoder && !t.ended)) {
            var e = t.decoder.end();
            e && e.length && r.push(e);
          }
          r.push(null);
        }), e.on("data", function(i) {
          if (
            (
              M("wrapped data"),
              t.decoder && (i = t.decoder.write(i)),
              (!t.objectMode || (i !== null && void 0 !== i)) &&
                (t.objectMode || (i && i.length))
            )
          ) {
            var o = r.push(i);
            o || ((n = !0), e.pause());
          }
        });
        for (var i in e) {
          void 0 === this[i] &&
            typeof e[i] == "function" &&
            (this[i] = (function(t) {
              return function() {
                return e[t].apply(e, arguments);
              };
            })(i));
        }
        for (var o = 0; o < q.length; o++) {
          e.on(q[o], r.emit.bind(r, q[o]));
        }
        return (r._read = function(t) {
          M("wrapped _read", t), n && ((n = !1), e.resume());
        }), r;
      }), (o._fromList = S);
    }.call(t, n(1)));
  },
  function(e, t, n) {
    (function(t) {
      function n(e, n, r, i) {
        if (typeof e != "function") {
          throw new TypeError('"callback" argument must be a function');
        }
        var o,
          a,
          s = arguments.length;
        switch (s) {
          case 0:
          case 1:
            return t.nextTick(e);
          case 2:
            return t.nextTick(function() {
              e.call(null, n);
            });
          case 3:
            return t.nextTick(function() {
              e.call(null, n, r);
            });
          case 4:
            return t.nextTick(function() {
              e.call(null, n, r, i);
            });
          default:
            for (o = new Array(s - 1), a = 0; a < o.length; ) {
              o[a++] = arguments[a];
            }
            return t.nextTick(function() {
              e.apply(null, o);
            });
        }
      }
      !t.version ||
        t.version.indexOf("v0.") === 0 ||
        (t.version.indexOf("v1.") === 0 && t.version.indexOf("v1.8.") !== 0)
        ? (e.exports = n)
        : (e.exports = t.nextTick);
    }.call(t, n(1)));
  },
  function(e, t, n) {
    e.exports = n(2).EventEmitter;
  },
  function(e, t, n) {
    function r(e, t, n) {
      return o(e, t, n);
    }
    var i = n(4),
      o = i.Buffer;
    o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow
      ? (e.exports = i)
      : (
          Object.keys(i).forEach(function(e) {
            t[e] = i[e];
          }),
          (t.Buffer = r)
        ), Object.keys(o).forEach(function(e) {
      r[e] = o[e];
    }), (r.from = function(e, t, n) {
      if (typeof e == "number") {
        throw new TypeError("Argument must not be a number");
      }
      return o(e, t, n);
    }), (r.alloc = function(e, t, n) {
      if (typeof e != "number") {
        throw new TypeError("Argument must be a number");
      }
      var r = o(e);
      return void 0 !== t
        ? typeof n == "string" ? r.fill(t, n) : r.fill(t)
        : r.fill(0), r;
    }), (r.allocUnsafe = function(e) {
      if (typeof e != "number") {
        throw new TypeError("Argument must be a number");
      }
      return o(e);
    }), (r.allocUnsafeSlow = function(e) {
      if (typeof e != "number") {
        throw new TypeError("Argument must be a number");
      }
      return i.SlowBuffer(e);
    });
  },
  function(e, t, n) {
    (function(e) {
      function n(e) {
        return Array.isArray ? Array.isArray(e) : y(e) === "[object Array]";
      }
      function r(e) {
        return typeof e == "boolean";
      }
      function i(e) {
        return e === null;
      }
      function o(e) {
        return e == null;
      }
      function a(e) {
        return typeof e == "number";
      }
      function s(e) {
        return typeof e == "string";
      }
      function p(e) {
        return typeof e == "symbol";
      }
      function c(e) {
        return void 0 === e;
      }
      function d(e) {
        return y(e) === "[object RegExp]";
      }
      function l(e) {
        return typeof e == "object" && e !== null;
      }
      function m(e) {
        return y(e) === "[object Date]";
      }
      function u(e) {
        return y(e) === "[object Error]" || e instanceof Error;
      }
      function h(e) {
        return typeof e == "function";
      }
      function f(e) {
        return (
          e === null ||
          typeof e == "boolean" ||
          typeof e == "number" ||
          typeof e == "string" ||
          typeof e == "symbol" ||
          typeof e == "undefined"
        );
      }
      function y(e) {
        return Object.prototype.toString.call(e);
      }
      (t.isArray = n), (t.isBoolean = r), (t.isNull = i), (t.isNullOrUndefined = o), (t.isNumber = a), (t.isString = s), (t.isSymbol = p), (t.isUndefined = c), (t.isRegExp = d), (t.isObject = l), (t.isDate = m), (t.isError = u), (t.isFunction = h), (t.isPrimitive = f), (t.isBuffer =
        e.isBuffer);
    }.call(t, n(4).Buffer));
  },
  function(e, t) {},
  function(e, t, n) {
    function r() {
      (this.head = null), (this.tail = null), (this.length = 0);
    }
    var i = n(17).Buffer;
    (e.exports = r), (r.prototype.push = function(e) {
      var t = {
        data: e,
        next: null
      };
      this.length > 0
        ? (this.tail.next = t)
        : (this.head = t), (this.tail = t), ++this.length;
    }), (r.prototype.unshift = function(e) {
      var t = {
        data: e,
        next: this.head
      };
      this.length === 0 && (this.tail = t), (this.head = t), ++this.length;
    }), (r.prototype.shift = function() {
      if (this.length !== 0) {
        var e = this.head.data;
        return this.length === 1
          ? (this.head = this.tail = null)
          : (this.head = this.head.next), --this.length, e;
      }
    }), (r.prototype.clear = function() {
      (this.head = this.tail = null), (this.length = 0);
    }), (r.prototype.join = function(e) {
      if (this.length === 0) {
        return "";
      }
      for (var t = this.head, n = `${t.data}`; (t = t.next); ) {
        n += e + t.data;
      }
      return n;
    }), (r.prototype.concat = function(e) {
      if (this.length === 0) {
        return i.alloc(0);
      }
      if (this.length === 1) {
        return this.head.data;
      }
      for (var t = i.allocUnsafe(e >>> 0), n = this.head, r = 0; n; ) {
        n.data.copy(t, r), (r += n.data.length), (n = n.next);
      }
      return t;
    });
  },
  function(e, t, n) {
    function r(e) {
      return this instanceof r
        ? (
            c.call(this, e),
            d.call(this, e),
            e && e.readable === !1 && (this.readable = !1),
            e && e.writable === !1 && (this.writable = !1),
            (this.allowHalfOpen = !0),
            e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1),
            void this.once("end", i)
          )
        : new r(e);
    }
    function i() {
      this.allowHalfOpen || this._writableState.ended || s(o, this);
    }
    function o(e) {
      e.end();
    }
    var a =
      Object.keys ||
      function(e) {
        var t = [];
        for (var n in e) {
          t.push(n);
        }
        return t;
      };
    e.exports = r;
    var s = n(15),
      p = n(18);
    p.inherits = n(11);
    var c = n(14),
      d = n(22);
    p.inherits(r, c);
    for (var l = a(d.prototype), m = 0; m < l.length; m++) {
      var u = l[m];
      r.prototype[u] || (r.prototype[u] = d.prototype[u]);
    }
  },
  function(e, t, n) {
    (function(t, r) {
      function i() {}
      function o(e, t, n) {
        (this.chunk = e), (this.encoding = t), (this.callback = n), (this.next = null);
      }
      function a(e, t) {
        (T = T || n(21)), (e =
          e || {}), (this.objectMode = !!e.objectMode), t instanceof T &&
          (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var r = e.highWaterMark,
          i = this.objectMode ? 16 : 16384;
        (this.highWaterMark = r || r === 0
          ? r
          : i), (this.highWaterMark = ~~this
          .highWaterMark), (this.needDrain = !1), (this.ending = !1), (this.ended = !1), (this.finished = !1);
        var o = e.decodeStrings === !1;
        (this.decodeStrings = !o), (this.defaultEncoding =
          e.defaultEncoding ||
          "utf8"), (this.length = 0), (this.writing = !1), (this.corked = 0), (this.sync = !0), (this.bufferProcessing = !1), (this.onwrite = function(
          e
        ) {
          f(t, e);
        }), (this.writecb = null), (this.writelen = 0), (this.bufferedRequest = null), (this.lastBufferedRequest = null), (this.pendingcb = 0), (this.prefinished = !1), (this.errorEmitted = !1), (this.bufferedRequestCount = 0), (this.corkedRequestsFree = new I(
          this
        ));
      }
      function s(e) {
        return (T = T || n(21)), D.call(s, this) || this instanceof T
          ? (
              (this._writableState = new a(e, this)),
              (this.writable = !0),
              e &&
                (
                  typeof e.write == "function" && (this._write = e.write),
                  typeof e.writev == "function" && (this._writev = e.writev)
                ),
              void O.call(this)
            )
          : new s(e);
      }
      function p(e, t) {
        var n = new Error("write after end");
        e.emit("error", n), R(t, n);
      }
      function c(e, t, n, r) {
        var i = !0,
          o = !1;
        return n === null
          ? (o = new TypeError("May not write null values to stream"))
          : typeof n == "string" ||
              void 0 === n ||
              t.objectMode ||
              (o = new TypeError("Invalid non-string/buffer chunk")), o &&
          (e.emit("error", o), R(r, o), (i = !1)), i;
      }
      function d(e, t, n) {
        return e.objectMode ||
          e.decodeStrings === !1 ||
          typeof t != "string" ||
          (t = E.from(t, n)), t;
      }
      function l(e, t, n, r, i, a) {
        n || ((r = d(t, r, i)), E.isBuffer(r) && (i = "buffer"));
        var s = t.objectMode ? 1 : r.length;
        t.length += s;
        var p = t.length < t.highWaterMark;
        if ((p || (t.needDrain = !0), t.writing || t.corked)) {
          var c = t.lastBufferedRequest;
          (t.lastBufferedRequest = new o(r, i, a)), c
            ? (c.next = t.lastBufferedRequest)
            : (t.bufferedRequest =
                t.lastBufferedRequest), (t.bufferedRequestCount += 1);
        } else {
          m(e, t, !1, s, r, i, a);
        }
        return p;
      }
      function m(e, t, n, r, i, o, a) {
        (t.writelen = r), (t.writecb = a), (t.writing = !0), (t.sync = !0), n
          ? e._writev(i, t.onwrite)
          : e._write(i, o, t.onwrite), (t.sync = !1);
      }
      function u(e, t, n, r, i) {
        --t.pendingcb, n
          ? R(i, r)
          : i(r), (e._writableState.errorEmitted = !0), e.emit("error", r);
      }
      function h(e) {
        (e.writing = !1), (e.writecb = null), (e.length -=
          e.writelen), (e.writelen = 0);
      }
      function f(e, t) {
        var n = e._writableState,
          r = n.sync,
          i = n.writecb;
        if ((h(n), t)) {
          u(e, n, r, t, i);
        } else {
          var o = v(n);
          o ||
            n.corked ||
            n.bufferProcessing ||
            !n.bufferedRequest ||
            b(e, n), r ? k(y, e, n, o, i) : y(e, n, o, i);
        }
      }
      function y(e, t, n, r) {
        n || g(e, t), t.pendingcb--, r(), S(e, t);
      }
      function g(e, t) {
        t.length === 0 && t.needDrain && ((t.needDrain = !1), e.emit("drain"));
      }
      function b(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var r = t.bufferedRequestCount,
            i = new Array(r),
            o = t.corkedRequestsFree;
          o.entry = n;
          for (var a = 0; n; ) {
            (i[a] = n), (n = n.next), (a += 1);
          }
          m(
            e,
            t,
            !0,
            t.length,
            i,
            "",
            o.finish
          ), t.pendingcb++, (t.lastBufferedRequest = null), o.next
            ? ((t.corkedRequestsFree = o.next), (o.next = null))
            : (t.corkedRequestsFree = new I(t));
        } else {
          for (; n; ) {
            var s = n.chunk,
              p = n.encoding,
              c = n.callback,
              d = t.objectMode ? 1 : s.length;
            if ((m(e, t, !1, d, s, p, c), (n = n.next), t.writing)) {
              break;
            }
          }
          n === null && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequestCount = 0), (t.bufferedRequest = n), (t.bufferProcessing = !1);
      }
      function v(e) {
        return (
          e.ending &&
          e.length === 0 &&
          e.bufferedRequest === null &&
          !e.finished &&
          !e.writing
        );
      }
      function w(e, t) {
        t.prefinished || ((t.prefinished = !0), e.emit("prefinish"));
      }
      function S(e, t) {
        var n = v(t);
        return n &&
          (t.pendingcb === 0
            ? (w(e, t), (t.finished = !0), e.emit("finish"))
            : w(e, t)), n;
      }
      function x(e, t, n) {
        (t.ending = !0), S(e, t), n &&
          (t.finished
            ? R(n)
            : e.once("finish", n)), (t.ended = !0), (e.writable = !1);
      }
      function I(e) {
        var t = this;
        (this.next = null), (this.entry = null), (this.finish = function(n) {
          var r = t.entry;
          for (t.entry = null; r; ) {
            var i = r.callback;
            e.pendingcb--, i(n), (r = r.next);
          }
          e.corkedRequestsFree
            ? (e.corkedRequestsFree.next = t)
            : (e.corkedRequestsFree = t);
        });
      }
      e.exports = s;
      var T,
        R = n(15),
        k = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1
          ? r
          : R;
      s.WritableState = a;
      var C = n(18);
      C.inherits = n(11);
      var $ = {
        deprecate: n(25)
      },
        O = n(16),
        E = n(17).Buffer;
      C.inherits(s, O), (a.prototype.getBuffer = function() {
        for (var e = this.bufferedRequest, t = []; e; ) {
          t.push(e), (e = e.next);
        }
        return t;
      }), (function() {
        try {
          Object.defineProperty(a.prototype, "buffer", {
            get: $.deprecate(function() {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
          });
        } catch (e) {}
      })();
      var D;
      typeof Symbol == "function" &&
        Symbol.hasInstance &&
        typeof Function.prototype[Symbol.hasInstance] == "function"
        ? (
            (D = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(s, Symbol.hasInstance, {
              value: function(e) {
                return (
                  !!D.call(this, e) || (e && e._writableState instanceof a)
                );
              }
            })
          )
        : (D = function(e) {
            return e instanceof this;
          }), (s.prototype.pipe = function() {
        this.emit("error", new Error("Cannot pipe, not readable"));
      }), (s.prototype.write = function(e, t, n) {
        var r = this._writableState,
          o = !1,
          a = E.isBuffer(e);
        return typeof t == "function" && ((n = t), (t = null)), a
          ? (t = "buffer")
          : t || (t = r.defaultEncoding), typeof n != "function" &&
          (n = i), r.ended
          ? p(this, n)
          : (a || c(this, r, e, n)) &&
              (r.pendingcb++, (o = l(this, r, a, e, t, n))), o;
      }), (s.prototype.cork = function() {
        var e = this._writableState;
        e.corked++;
      }), (s.prototype.uncork = function() {
        var e = this._writableState;
        e.corked &&
          (
            e.corked--,
            e.writing ||
              e.corked ||
              e.finished ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              b(this, e)
          );
      }), (s.prototype.setDefaultEncoding = function(e) {
        if (
          (
            typeof e == "string" && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw"
              ].indexOf(`${e}`.toLowerCase()) > -1
            )
          )
        ) {
          throw new TypeError(`Unknown encoding: ${e}`);
        }
        return (this._writableState.defaultEncoding = e), this;
      }), (s.prototype._write = function(e, t, n) {
        n(new Error("_write() is not implemented"));
      }), (s.prototype._writev = null), (s.prototype.end = function(e, t, n) {
        var r = this._writableState;
        typeof e == "function"
          ? ((n = e), (e = null), (t = null))
          : typeof t == "function" && ((n = t), (t = null)), e !== null &&
          void 0 !== e &&
          this.write(e, t), r.corked &&
          ((r.corked = 1), this.uncork()), r.ending ||
          r.finished ||
          x(this, r, n);
      });
    }.call(t, n(1), n(23).setImmediate));
  },
  function(e, t, n) {
    function r(e, t) {
      (this._id = e), (this._clearFn = t);
    }
    var i = Function.prototype.apply;
    (t.setTimeout = function() {
      return new r(i.call(setTimeout, window, arguments), clearTimeout);
    }), (t.setInterval = function() {
      return new r(i.call(setInterval, window, arguments), clearInterval);
    }), (t.clearTimeout = t.clearInterval = function(e) {
      e && e.close();
    }), (r.prototype.unref = r.prototype.ref = function() {}), (r.prototype.close = function() {
      this._clearFn.call(window, this._id);
    }), (t.enroll = function(e, t) {
      clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
    }), (t.unenroll = function(e) {
      clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
    }), (t._unrefActive = t.active = function(e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 &&
        (e._idleTimeoutId = setTimeout(function() {
          e._onTimeout && e._onTimeout();
        }, t));
    }), n(
      24
    ), (t.setImmediate = setImmediate), (t.clearImmediate = clearImmediate);
  },
  function(e, t, n) {
    (function(e, t) {
      !(function(e, n) {
        function r(e) {
          typeof e != "function" && (e = new Function(`${e}`));
          for (
            var t = new Array(arguments.length - 1), n = 0;
            n < t.length;
            n++
          ) {
            t[n] = arguments[n + 1];
          }
          var r = {
            callback: e,
            args: t
          };
          return (f[h] = r), u(h), h++;
        }
        function i(e) {
          delete f[e];
        }
        function o(e) {
          var t = e.callback,
            r = e.args;
          switch (r.length) {
            case 0:
              t();
              break;
            case 1:
              t(r[0]);
              break;
            case 2:
              t(r[0], r[1]);
              break;
            case 3:
              t(r[0], r[1], r[2]);
              break;
            default:
              t.apply(n, r);
          }
        }
        function a(e) {
          if (y) {
            setTimeout(a, 0, e);
          } else {
            var t = f[e];
            if (t) {
              y = !0;
              try {
                o(t);
              } finally {
                i(e), (y = !1);
              }
            }
          }
        }
        function s() {
          u = function(e) {
            t.nextTick(function() {
              a(e);
            });
          };
        }
        function p() {
          if (e.postMessage && !e.importScripts) {
            var t = !0,
              n = e.onmessage;
            return (e.onmessage = function() {
              t = !1;
            }), e.postMessage("", "*"), (e.onmessage = n), t;
          }
        }
        function c() {
          var t = `setImmediate$${Math.random()}$`,
            n = function(n) {
              n.source === e &&
                typeof n.data == "string" &&
                n.data.indexOf(t) === 0 &&
                a(+n.data.slice(t.length));
            };
          e.addEventListener
            ? e.addEventListener("message", n, !1)
            : e.attachEvent("onmessage", n), (u = function(n) {
            e.postMessage(t + n, "*");
          });
        }
        function d() {
          var e = new MessageChannel();
          (e.port1.onmessage = function(e) {
            var t = e.data;
            a(t);
          }), (u = function(t) {
            e.port2.postMessage(t);
          });
        }
        function l() {
          var e = g.documentElement;
          u = function(t) {
            var n = g.createElement("script");
            (n.onreadystatechange = function() {
              a(t), (n.onreadystatechange = null), e.removeChild(n), (n = null);
            }), e.appendChild(n);
          };
        }
        function m() {
          u = function(e) {
            setTimeout(a, 0, e);
          };
        }
        if (!e.setImmediate) {
          var u,
            h = 1,
            f = {},
            y = !1,
            g = e.document,
            b = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (b = b && b.setTimeout ? b : e), {}.toString.call(e.process) ===
            "[object process]"
            ? s()
            : p()
              ? c()
              : e.MessageChannel
                ? d()
                : g && "onreadystatechange" in g.createElement("script")
                  ? l()
                  : m(), (b.setImmediate = r), (b.clearImmediate = i);
        }
      })(
        typeof self == "undefined" ? (typeof e == "undefined" ? this : e) : self
      );
    }.call(
      t,
      (function() {
        return this;
      })(),
      n(1)
    ));
  },
  function(e, t) {
    (function(t) {
      function n(e, t) {
        function n() {
          if (!i) {
            if (r("throwDeprecation")) {
              throw new Error(t);
            }
            r("traceDeprecation")
              ? console.trace(t)
              : console.warn(t), (i = !0);
          }
          return e.apply(this, arguments);
        }
        if (r("noDeprecation")) {
          return e;
        }
        var i = !1;
        return n;
      }
      function r(e) {
        try {
          if (!t.localStorage) {
            return !1;
          }
        } catch (e) {
          return !1;
        }
        var n = t.localStorage[e];
        return n != null && String(n).toLowerCase() === "true";
      }
      e.exports = n;
    }.call(
      t,
      (function() {
        return this;
      })()
    ));
  },
  function(e, t, n) {
    function r(e) {
      if (!e) {
        return "utf8";
      }
      for (var t; ; ) {
        switch (e) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return e;
          default:
            if (t) {
              return;
            }
            (e = `${e}`.toLowerCase()), (t = !0);
        }
      }
    }
    function i(e) {
      var t = r(e);
      if (typeof t != "string" && (b.isEncoding === v || !v(e))) {
        throw new Error(`Unknown encoding: ${e}`);
      }
      return t || e;
    }
    function o(e) {
      this.encoding = i(e);
      var t;
      switch (this.encoding) {
        case "utf16le":
          (this.text = m), (this.end = u), (t = 4);
          break;
        case "utf8":
          (this.fillLast = c), (t = 4);
          break;
        case "base64":
          (this.text = h), (this.end = f), (t = 3);
          break;
        default:
          return (this.write = y), void (this.end = g);
      }
      (this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = b.allocUnsafe(
        t
      ));
    }
    function a(e) {
      return e <= 127
        ? 0
        : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : -1;
    }
    function s(e, t, n) {
      var r = t.length - 1;
      if (r < n) {
        return 0;
      }
      var i = a(t[r]);
      return i >= 0
        ? (i > 0 && (e.lastNeed = i - 1), i)
        : --r < n
          ? 0
          : (
              (i = a(t[r])),
              i >= 0
                ? (i > 0 && (e.lastNeed = i - 2), i)
                : --r < n
                  ? 0
                  : (
                      (i = a(t[r])),
                      i >= 0
                        ? (
                            i > 0 && (i === 2 ? (i = 0) : (e.lastNeed = i - 3)),
                            i
                          )
                        : 0
                    )
            );
    }
    function p(e, t, n) {
      if ((192 & t[0]) !== 128) {
        return (e.lastNeed = 0), "�".repeat(n);
      }
      if (e.lastNeed > 1 && t.length > 1) {
        if ((192 & t[1]) !== 128) {
          return (e.lastNeed = 1), "�".repeat(n + 1);
        }
        if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) !== 128) {
          return (e.lastNeed = 2), "�".repeat(n + 2);
        }
      }
    }
    function c(e) {
      var t = this.lastTotal - this.lastNeed,
        n = p(this, e, t);
      return void 0 !== n
        ? n
        : this.lastNeed <= e.length
          ? (
              e.copy(this.lastChar, t, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            )
          : (
              e.copy(this.lastChar, t, 0, e.length),
              void (this.lastNeed -= e.length)
            );
    }
    function d(e, t) {
      var n = s(this, e, t);
      if (!this.lastNeed) {
        return e.toString("utf8", t);
      }
      this.lastTotal = n;
      var r = e.length - (n - this.lastNeed);
      return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r);
    }
    function l(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + "�".repeat(this.lastTotal - this.lastNeed) : t;
    }
    function m(e, t) {
      if ((e.length - t) % 2 === 0) {
        var n = e.toString("utf16le", t);
        if (n) {
          var r = n.charCodeAt(n.length - 1);
          if (r >= 55296 && r <= 56319) {
            return (this.lastNeed = 2), (this.lastTotal = 4), (this.lastChar[0] =
              e[e.length - 2]), (this.lastChar[1] = e[e.length - 1]), n.slice(
              0,
              -1
            );
          }
        }
        return n;
      }
      return (this.lastNeed = 1), (this.lastTotal = 2), (this.lastChar[0] =
        e[e.length - 1]), e.toString("utf16le", t, e.length - 1);
    }
    function u(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, n);
      }
      return t;
    }
    function h(e, t) {
      var n = (e.length - t) % 3;
      return n === 0
        ? e.toString("base64", t)
        : (
            (this.lastNeed = 3 - n),
            (this.lastTotal = 3),
            n === 1
              ? (this.lastChar[0] = e[e.length - 1])
              : (
                  (this.lastChar[0] = e[e.length - 2]),
                  (this.lastChar[1] = e[e.length - 1])
                ),
            e.toString("base64", t, e.length - n)
          );
    }
    function f(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed
        ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : t;
    }
    function y(e) {
      return e.toString(this.encoding);
    }
    function g(e) {
      return e && e.length ? this.write(e) : "";
    }
    var b = n(17).Buffer,
      v =
        b.isEncoding ||
        function(e) {
          switch (((e = `${e}`), e && e.toLowerCase())) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        };
    (t.StringDecoder = o), (o.prototype.write = function(e) {
      if (e.length === 0) {
        return "";
      }
      var t, n;
      if (this.lastNeed) {
        if (((t = this.fillLast(e)), void 0 === t)) {
          return "";
        }
        (n = this.lastNeed), (this.lastNeed = 0);
      } else {
        n = 0;
      }
      return n < e.length
        ? t ? t + this.text(e, n) : this.text(e, n)
        : t || "";
    }), (o.prototype.end = l), (o.prototype.text = d), (o.prototype.fillLast = function(
      e
    ) {
      return this.lastNeed <= e.length
        ? (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          )
        : (
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            void (this.lastNeed -= e.length)
          );
    });
  },
  function(e, t, n) {
    function r(e) {
      (this.afterTransform = function(t, n) {
        return i(e, t, n);
      }), (this.needTransform = !1), (this.transforming = !1), (this.writecb = null), (this.writechunk = null), (this.writeencoding = null);
    }
    function i(e, t, n) {
      var r = e._transformState;
      r.transforming = !1;
      var i = r.writecb;
      if (!i) {
        return e.emit("error", new Error("no writecb in Transform class"));
      }
      (r.writechunk = null), (r.writecb = null), n !== null &&
        void 0 !== n &&
        e.push(n), i(t);
      var o = e._readableState;
      (o.reading = !1), (o.needReadable || o.length < o.highWaterMark) &&
        e._read(o.highWaterMark);
    }
    function o(e) {
      if (!(this instanceof o)) {
        return new o(e);
      }
      s.call(this, e), (this._transformState = new r(this));
      var t = this;
      (this._readableState.needReadable = !0), (this._readableState.sync = !1), e &&
        (
          typeof e.transform == "function" && (this._transform = e.transform),
          typeof e.flush == "function" && (this._flush = e.flush)
        ), this.once("prefinish", function() {
        typeof this._flush == "function"
          ? this._flush(function(e, n) {
              a(t, e, n);
            })
          : a(t);
      });
    }
    function a(e, t, n) {
      if (t) {
        return e.emit("error", t);
      }
      n !== null && void 0 !== n && e.push(n);
      var r = e._writableState,
        i = e._transformState;
      if (r.length) {
        throw new Error("Calling transform done when ws.length != 0");
      }
      if (i.transforming) {
        throw new Error("Calling transform done when still transforming");
      }
      return e.push(null);
    }
    e.exports = o;
    var s = n(21),
      p = n(18);
    (p.inherits = n(11)), p.inherits(o, s), (o.prototype.push = function(e, t) {
      return (this._transformState.needTransform = !1), s.prototype.push.call(
        this,
        e,
        t
      );
    }), (o.prototype._transform = function(e, t, n) {
      throw new Error("_transform() is not implemented");
    }), (o.prototype._write = function(e, t, n) {
      var r = this._transformState;
      if (
        (
          (r.writecb = n),
          (r.writechunk = e),
          (r.writeencoding = t),
          !r.transforming
        )
      ) {
        var i = this._readableState;
        (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark);
      }
    }), (o.prototype._read = function(e) {
      var t = this._transformState;
      t.writechunk !== null && t.writecb && !t.transforming
        ? (
            (t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform)
          )
        : (t.needTransform = !0);
    });
  },
  function(e, t, n) {
    function r(e) {
      return this instanceof r ? void i.call(this, e) : new r(e);
    }
    e.exports = r;
    var i = n(27),
      o = n(18);
    (o.inherits = n(11)), o.inherits(r, i), (r.prototype._transform = function(
      e,
      t,
      n
    ) {
      n(null, e);
    });
  },
  function(e, t, n) {
    var r = n(4).Buffer;
    e.exports = function(e) {
      if (e instanceof Uint8Array) {
        if (e.byteOffset === 0 && e.byteLength === e.buffer.byteLength) {
          return e.buffer;
        }
        if (typeof e.buffer.slice == "function") {
          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        }
      }
      if (r.isBuffer(e)) {
        for (
          var t = new Uint8Array(e.length), n = e.length, i = 0;
          i < n;
          i++
        ) {
          t[i] = e[i];
        }
        return t.buffer;
      }
      throw new Error("Argument must be a Buffer");
    };
  },
  function(e, t) {
    function n() {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) {
          r.call(n, i) && (e[i] = n[i]);
        }
      }
      return e;
    }
    e.exports = n;
    var r = Object.prototype.hasOwnProperty;
  },
  function(e, t) {
    e.exports = {
      100: "Continue",
      101: "Switching Protocols",
      102: "Processing",
      200: "OK",
      201: "Created",
      202: "Accepted",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      207: "Multi-Status",
      208: "Already Reported",
      226: "IM Used",
      300: "Multiple Choices",
      301: "Moved Permanently",
      302: "Found",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      308: "Permanent Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      406: "Not Acceptable",
      407: "Proxy Authentication Required",
      408: "Request Timeout",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Payload Too Large",
      414: "URI Too Long",
      415: "Unsupported Media Type",
      416: "Range Not Satisfiable",
      417: "Expectation Failed",
      418: "I'm a teapot",
      421: "Misdirected Request",
      422: "Unprocessable Entity",
      423: "Locked",
      424: "Failed Dependency",
      425: "Unordered Collection",
      426: "Upgrade Required",
      428: "Precondition Required",
      429: "Too Many Requests",
      431: "Request Header Fields Too Large",
      451: "Unavailable For Legal Reasons",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Timeout",
      505: "HTTP Version Not Supported",
      506: "Variant Also Negotiates",
      507: "Insufficient Storage",
      508: "Loop Detected",
      509: "Bandwidth Limit Exceeded",
      510: "Not Extended",
      511: "Network Authentication Required"
    };
  },
  function(e, t, n) {
    function r() {
      (this.protocol = null), (this.slashes = null), (this.auth = null), (this.host = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.query = null), (this.pathname = null), (this.path = null), (this.href = null);
    }
    function i(e, t, n) {
      if (e && c.isObject(e) && e instanceof r) {
        return e;
      }
      var i = new r();
      return i.parse(e, t, n), i;
    }
    function o(e) {
      return c.isString(e) && (e = i(e)), e instanceof r
        ? e.format()
        : r.prototype.format.call(e);
    }
    function a(e, t) {
      return i(e, !1, !0).resolve(t);
    }
    function s(e, t) {
      return e ? i(e, !1, !0).resolveObject(t) : t;
    }
    var p = n(33),
      c = n(35);
    (t.parse = i), (t.resolve = a), (t.resolveObject = s), (t.format = o), (t.Url = r);
    var d = /^([a-z0-9.+-]+:)/i,
      l = /:[0-9]*$/,
      m = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      u = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
      h = ["{", "}", "|", "\\", "^", "`"].concat(u),
      f = ["'"].concat(h),
      y = ["%", "/", "?", ";", "#"].concat(f),
      g = ["/", "?", "#"],
      b = 255,
      v = /^[+a-z0-9A-Z_-]{0,63}$/,
      w = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      S = {
        javascript: !0,
        "javascript:": !0
      },
      x = {
        javascript: !0,
        "javascript:": !0
      },
      I = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
      },
      T = n(36);
    (r.prototype.parse = function(e, t, n) {
      if (!c.isString(e)) {
        throw new TypeError(
          `Parameter 'url' must be a string, not ${typeof e}`
        );
      }
      var r = e.indexOf("?"),
        i = r !== -1 && r < e.indexOf("#") ? "?" : "#",
        o = e.split(i),
        a = /\\/g;
      (o[0] = o[0].replace(a, "/")), (e = o.join(i));
      var s = e;
      if (((s = s.trim()), !n && e.split("#").length === 1)) {
        var l = m.exec(s);
        if (l) {
          return (this.path = s), (this.href = s), (this.pathname = l[1]), l[2]
            ? (
                (this.search = l[2]),
                t
                  ? (this.query = T.parse(this.search.substr(1)))
                  : (this.query = this.search.substr(1))
              )
            : t && ((this.search = ""), (this.query = {})), this;
        }
      }
      var u = d.exec(s);
      if (u) {
        u = u[0];
        var h = u.toLowerCase();
        (this.protocol = h), (s = s.substr(u.length));
      }
      if (n || u || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var R = s.substr(0, 2) === "//";
        !R || (u && x[u]) || ((s = s.substr(2)), (this.slashes = !0));
      }
      if (!x[u] && (R || (u && !I[u]))) {
        for (var k = -1, C = 0; C < g.length; C++) {
          var $ = s.indexOf(g[C]);
          $ !== -1 && (k === -1 || $ < k) && (k = $);
        }
        var O, E;
        (E = k === -1 ? s.lastIndexOf("@") : s.lastIndexOf("@", k)), E !== -1 &&
          (
            (O = s.slice(0, E)),
            (s = s.slice(E + 1)),
            (this.auth = decodeURIComponent(O))
          ), (k = -1);
        for (var C = 0; C < y.length; C++) {
          var $ = s.indexOf(y[C]);
          $ !== -1 && (k === -1 || $ < k) && (k = $);
        }
        k === -1 && (k = s.length), (this.host = s.slice(0, k)), (s = s.slice(
          k
        )), this.parseHost(), (this.hostname = this.hostname || "");
        var D =
          this.hostname[0] === "[" &&
          this.hostname[this.hostname.length - 1] === "]";
        if (!D) {
          for (
            var j = this.hostname.split(/\./), C = 0, A = j.length;
            C < A;
            C++
          ) {
            var P = j[C];
            if (P && !P.match(v)) {
              for (var N = "", M = 0, L = P.length; M < L; M++) {
                N += P.charCodeAt(M) > 127 ? "x" : P[M];
              }
              if (!N.match(v)) {
                var _ = j.slice(0, C),
                  q = j.slice(C + 1),
                  U = P.match(w);
                U && (_.push(U[1]), q.unshift(U[2])), q.length &&
                  (s = `/${q.join(".")}${s}`), (this.hostname = _.join("."));
                break;
              }
            }
          }
        }
        this.hostname.length > b
          ? (this.hostname = "")
          : (this.hostname = this.hostname.toLowerCase()), D ||
          (this.hostname = p.toASCII(this.hostname));
        var F = this.port ? `:${this.port}` : "",
          B = this.hostname || "";
        (this.host = B + F), (this.href += this.host), D &&
          (
            (this.hostname = this.hostname.substr(1, this.hostname.length - 2)),
            s[0] !== "/" && (s = `/${s}`)
          );
      }
      if (!S[h]) {
        for (var C = 0, A = f.length; C < A; C++) {
          var W = f[C];
          if (s.indexOf(W) !== -1) {
            var H = encodeURIComponent(W);
            H === W && (H = escape(W)), (s = s.split(W).join(H));
          }
        }
      }
      var z = s.indexOf("#");
      z !== -1 && ((this.hash = s.substr(z)), (s = s.slice(0, z)));
      var V = s.indexOf("?");
      if (
        (
          V !== -1
            ? (
                (this.search = s.substr(V)),
                (this.query = s.substr(V + 1)),
                t && (this.query = T.parse(this.query)),
                (s = s.slice(0, V))
              )
            : t && ((this.search = ""), (this.query = {})),
          s && (this.pathname = s),
          I[h] && this.hostname && !this.pathname && (this.pathname = "/"),
          this.pathname || this.search
        )
      ) {
        var F = this.pathname || "",
          X = this.search || "";
        this.path = F + X;
      }
      return (this.href = this.format()), this;
    }), (r.prototype.format = function() {
      var e = this.auth || "";
      e &&
        ((e = encodeURIComponent(e)), (e = e.replace(/%3A/i, ":")), (e += "@"));
      var t = this.protocol || "",
        n = this.pathname || "",
        r = this.hash || "",
        i = !1,
        o = "";
      this.host
        ? (i = e + this.host)
        : this.hostname &&
            (
              (i =
                e +
                (this.hostname.indexOf(":") === -1
                  ? this.hostname
                  : `[${this.hostname}]`)),
              this.port && (i += `:${this.port}`)
            ), this.query &&
        c.isObject(this.query) &&
        Object.keys(this.query).length &&
        (o = T.stringify(this.query));
      var a = this.search || (o && `?${o}`) || "";
      return t && t.substr(-1) !== ":" && (t += ":"), this.slashes ||
        ((!t || I[t]) && i !== !1)
        ? ((i = `//${i || ""}`), n && n.charAt(0) !== "/" && (n = `/${n}`))
        : i || (i = ""), r && r.charAt(0) !== "#" && (r = `#${r}`), a &&
        a.charAt(0) !== "?" &&
        (a = `?${a}`), (n = n.replace(/[?#]/g, function(e) {
        return encodeURIComponent(e);
      })), (a = a.replace("#", "%23")), t + i + n + a + r;
    }), (r.prototype.resolve = function(e) {
      return this.resolveObject(i(e, !1, !0)).format();
    }), (r.prototype.resolveObject = function(e) {
      if (c.isString(e)) {
        var t = new r();
        t.parse(e, !1, !0), (e = t);
      }
      for (var n = new r(), i = Object.keys(this), o = 0; o < i.length; o++) {
        var a = i[o];
        n[a] = this[a];
      }
      if (((n.hash = e.hash), e.href === "")) {
        return (n.href = n.format()), n;
      }
      if (e.slashes && !e.protocol) {
        for (var s = Object.keys(e), p = 0; p < s.length; p++) {
          var d = s[p];
          d !== "protocol" && (n[d] = e[d]);
        }
        return I[n.protocol] &&
          n.hostname &&
          !n.pathname &&
          (n.path = n.pathname = "/"), (n.href = n.format()), n;
      }
      if (e.protocol && e.protocol !== n.protocol) {
        if (!I[e.protocol]) {
          for (var l = Object.keys(e), m = 0; m < l.length; m++) {
            var u = l[m];
            n[u] = e[u];
          }
          return (n.href = n.format()), n;
        }
        if (((n.protocol = e.protocol), e.host || x[e.protocol])) {
          n.pathname = e.pathname;
        } else {
          for (
            var h = (e.pathname || "").split("/");
            h.length && !(e.host = h.shift());

          ) {}
          e.host || (e.host = ""), e.hostname || (e.hostname = ""), h[0] !==
            "" && h.unshift(""), h.length < 2 &&
            h.unshift(""), (n.pathname = h.join("/"));
        }
        if (
          (
            (n.search = e.search),
            (n.query = e.query),
            (n.host = e.host || ""),
            (n.auth = e.auth),
            (n.hostname = e.hostname || e.host),
            (n.port = e.port),
            n.pathname || n.search
          )
        ) {
          var f = n.pathname || "",
            y = n.search || "";
          n.path = f + y;
        }
        return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
      }
      var g = n.pathname && n.pathname.charAt(0) === "/",
        b = e.host || (e.pathname && e.pathname.charAt(0) === "/"),
        v = b || g || (n.host && e.pathname),
        w = v,
        S = (n.pathname && n.pathname.split("/")) || [],
        h = (e.pathname && e.pathname.split("/")) || [],
        T = n.protocol && !I[n.protocol];
      if (
        (
          T &&
            (
              (n.hostname = ""),
              (n.port = null),
              n.host && (S[0] === "" ? (S[0] = n.host) : S.unshift(n.host)),
              (n.host = ""),
              e.protocol &&
                (
                  (e.hostname = null),
                  (e.port = null),
                  e.host && (h[0] === "" ? (h[0] = e.host) : h.unshift(e.host)),
                  (e.host = null)
                ),
              (v = v && (h[0] === "" || S[0] === ""))
            ),
          b
        )
      ) {
        (n.host = e.host || e.host === ""
          ? e.host
          : n.host), (n.hostname = e.hostname || e.hostname === ""
          ? e.hostname
          : n.hostname), (n.search = e.search), (n.query = e.query), (S = h);
      } else if (h.length) {
        S || (S = []), S.pop(), (S = S.concat(h)), (n.search =
          e.search), (n.query = e.query);
      } else if (!c.isNullOrUndefined(e.search)) {
        if (T) {
          n.hostname = n.host = S.shift();
          var R = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
          R && ((n.auth = R.shift()), (n.host = n.hostname = R.shift()));
        }
        return (n.search = e.search), (n.query = e.query), (c.isNull(
          n.pathname
        ) &&
          c.isNull(n.search)) ||
          (n.path =
            (n.pathname ? n.pathname : "") +
            (n.search ? n.search : "")), (n.href = n.format()), n;
      }
      if (!S.length) {
        return (n.pathname = null), n.search
          ? (n.path = `/${n.search}`)
          : (n.path = null), (n.href = n.format()), n;
      }
      for (
        var k = S.slice(-1)[0],
          C =
            ((n.host || e.host || S.length > 1) && (k === "." || k === "..")) ||
            k === "",
          $ = 0,
          O = S.length;
        O >= 0;
        O--
      ) {
        (k = S[O]), k === "."
          ? S.splice(O, 1)
          : k === ".." ? (S.splice(O, 1), $++) : $ && (S.splice(O, 1), $--);
      }
      if (!v && !w) {
        for (; $--; $) {
          S.unshift("..");
        }
      }
      !v ||
        S[0] === "" ||
        (S[0] && S[0].charAt(0) === "/") ||
        S.unshift(""), C && S.join("/").substr(-1) !== "/" && S.push("");
      var E = S[0] === "" || (S[0] && S[0].charAt(0) === "/");
      if (T) {
        n.hostname = n.host = E ? "" : S.length ? S.shift() : "";
        var R = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
        R && ((n.auth = R.shift()), (n.host = n.hostname = R.shift()));
      }
      return (v = v || (n.host && S.length)), v && !E && S.unshift(""), S.length
        ? (n.pathname = S.join("/"))
        : ((n.pathname = null), (n.path = null)), (c.isNull(n.pathname) &&
        c.isNull(n.search)) ||
        (n.path =
          (n.pathname ? n.pathname : "") +
          (n.search ? n.search : "")), (n.auth = e.auth || n.auth), (n.slashes =
        n.slashes || e.slashes), (n.href = n.format()), n;
    }), (r.prototype.parseHost = function() {
      var e = this.host,
        t = l.exec(e);
      t &&
        (
          (t = t[0]),
          t !== ":" && (this.port = t.substr(1)),
          (e = e.substr(0, e.length - t.length))
        ), e && (this.hostname = e);
    });
  },
  function(e, t, n) {
    var r;
    (function(e, i) {
      !(function(o) {
        function a(e) {
          throw RangeError(j[e]);
        }
        function s(e, t) {
          for (var n = e.length, r = []; n--; ) {
            r[n] = t(e[n]);
          }
          return r;
        }
        function p(e, t) {
          var n = e.split("@"),
            r = "";
          n.length > 1 && ((r = `${n[0]}@`), (e = n[1])), (e = e.replace(
            D,
            "."
          ));
          var i = e.split("."),
            o = s(i, t).join(".");
          return r + o;
        }
        function c(e) {
          for (var t, n, r = [], i = 0, o = e.length; i < o; ) {
            (t = e.charCodeAt(i++)), t >= 55296 && t <= 56319 && i < o
              ? (
                  (n = e.charCodeAt(i++)),
                  (64512 & n) == 56320
                    ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                    : (r.push(t), i--)
                )
              : r.push(t);
          }
          return r;
        }
        function d(e) {
          return s(e, function(e) {
            var t = "";
            return e > 65535 &&
              (
                (e -= 65536),
                (t += N(((e >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))
              ), (t += N(e));
          }).join("");
        }
        function l(e) {
          return e - 48 < 10
            ? e - 22
            : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : S;
        }
        function m(e, t) {
          return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
        }
        function u(e, t, n) {
          var r = 0;
          for (
            e = n ? P(e / R) : e >> 1, e += P(e / t);
            e > (A * I) >> 1;
            r += S
          ) {
            e = P(e / A);
          }
          return P(r + (A + 1) * e / (e + T));
        }
        function h(e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            p,
            c,
            m,
            h,
            f = [],
            y = e.length,
            g = 0,
            b = C,
            v = k;
          for (n = e.lastIndexOf($), n < 0 && (n = 0), r = 0; r < n; ++r) {
            e.charCodeAt(r) >= 128 && a("not-basic"), f.push(e.charCodeAt(r));
          }
          for (i = n > 0 ? n + 1 : 0; i < y; ) {
            for (
              o = g, s = 1, p = S;
              i >= y && a("invalid-input"), (c = l(e.charCodeAt(i++))), (c >=
                S ||
                c > P((w - g) / s)) &&
                a("overflow"), (g += c * s), (m = p <= v
                ? x
                : p >= v + I ? I : p - v), !(c < m);
              p += S
            ) {
              (h = S - m), s > P(w / h) && a("overflow"), (s *= h);
            }
            (t = f.length + 1), (v = u(g - o, t, o == 0)), P(g / t) > w - b &&
              a("overflow"), (b += P(g / t)), (g %= t), f.splice(g++, 0, b);
          }
          return d(f);
        }
        function f(e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            p,
            d,
            l,
            h,
            f,
            y,
            g,
            b,
            v,
            T = [];
          for (e = c(e), y = e.length, t = C, n = 0, o = k, s = 0; s < y; ++s) {
            (f = e[s]), f < 128 && T.push(N(f));
          }
          for (r = i = T.length, i && T.push($); r < y; ) {
            for (p = w, s = 0; s < y; ++s) {
              (f = e[s]), f >= t && f < p && (p = f);
            }
            for (
              g = r + 1, p - t > P((w - n) / g) && a("overflow"), n +=
                (p - t) * g, t = p, s = 0;
              s < y;
              ++s
            ) {
              if (((f = e[s]), f < t && ++n > w && a("overflow"), f == t)) {
                for (
                  d = n, l = S;
                  (h = l <= o ? x : l >= o + I ? I : l - o), !(d < h);
                  l += S
                ) {
                  (v = d - h), (b = S - h), T.push(N(m(h + v % b, 0))), (d = P(
                    v / b
                  ));
                }
                T.push(N(m(d, 0))), (o = u(n, g, r == i)), (n = 0), ++r;
              }
            }
            ++n, ++t;
          }
          return T.join("");
        }
        function y(e) {
          return p(e, function(e) {
            return O.test(e) ? h(e.slice(4).toLowerCase()) : e;
          });
        }
        function g(e) {
          return p(e, function(e) {
            return E.test(e) ? `xn--${f(e)}` : e;
          });
        }
        var b = (
          typeof t == "object" && t && !t.nodeType && t,
          typeof e == "object" && e && !e.nodeType && e,
          typeof i == "object" && i
        );
        (b.global !== b && b.window !== b && b.self !== b) || (o = b);
        var v,
          w = 2147483647,
          S = 36,
          x = 1,
          I = 26,
          T = 38,
          R = 700,
          k = 72,
          C = 128,
          $ = "-",
          O = /^xn--/,
          E = /[^\x20-\x7E]/,
          D = /[\x2E\u3002\uFF0E\uFF61]/g,
          j = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
          },
          A = S - x,
          P = Math.floor,
          N = String.fromCharCode;
        (v = {
          version: "1.3.2",
          ucs2: {
            decode: c,
            encode: d
          },
          decode: h,
          encode: f,
          toASCII: g,
          toUnicode: y
        }), (r = function() {
          return v;
        }.call(t, n, t, e)), !(void 0 !== r && (e.exports = r));
      })(this);
    }.call(
      t,
      n(34)(e),
      (function() {
        return this;
      })()
    ));
  },
  function(e, t) {
    e.exports = function(e) {
      return e.webpackPolyfill ||
        (
          (e.deprecate = function() {}),
          (e.paths = []),
          (e.children = []),
          (e.webpackPolyfill = 1)
        ), e;
    };
  },
  function(e, t) {
    e.exports = {
      isString: function(e) {
        return typeof e == "string";
      },
      isObject: function(e) {
        return typeof e == "object" && e !== null;
      },
      isNull: function(e) {
        return e === null;
      },
      isNullOrUndefined: function(e) {
        return e == null;
      }
    };
  },
  function(e, t, n) {
    (t.decode = t.parse = n(37)), (t.encode = t.stringify = n(38));
  },
  function(e, t) {
    function n(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.exports = function(e, t, r, i) {
      (t = t || "&"), (r = r || "=");
      var o = {};
      if (typeof e != "string" || e.length === 0) {
        return o;
      }
      var a = /\+/g;
      e = e.split(t);
      var s = 1e3;
      i && typeof i.maxKeys == "number" && (s = i.maxKeys);
      var p = e.length;
      s > 0 && p > s && (p = s);
      for (var c = 0; c < p; ++c) {
        var d,
          l,
          m,
          u,
          h = e[c].replace(a, "%20"),
          f = h.indexOf(r);
        f >= 0
          ? ((d = h.substr(0, f)), (l = h.substr(f + 1)))
          : ((d = h), (l = "")), (m = decodeURIComponent(
          d
        )), (u = decodeURIComponent(l)), n(o, m)
          ? Array.isArray(o[m]) ? o[m].push(u) : (o[m] = [o[m], u])
          : (o[m] = u);
      }
      return o;
    };
  },
  function(e, t) {
    var n = function(e) {
      switch (typeof e) {
        case "string":
          return e;
        case "boolean":
          return e ? "true" : "false";
        case "number":
          return isFinite(e) ? e : "";
        default:
          return "";
      }
    };
    e.exports = function(e, t, r, i) {
      return (t = t || "&"), (r = r || "="), e === null &&
        (e = void 0), typeof e == "object"
        ? Object.keys(e)
            .map(function(i) {
              var o = encodeURIComponent(n(i)) + r;
              return Array.isArray(e[i])
                ? e[i]
                    .map(function(e) {
                      return o + encodeURIComponent(n(e));
                    })
                    .join(t)
                : o + encodeURIComponent(n(e[i]));
            })
            .join(t)
        : i ? encodeURIComponent(n(i)) + r + encodeURIComponent(n(e)) : "";
    };
  },
  function(e, t, n) {
    var r = n(8),
      i = e.exports;
    for (var o in r) {
      r.hasOwnProperty(o) && (i[o] = r[o]);
    }
    i.request = function(e, t) {
      return e || (e = {}), (e.scheme = "https"), (e.protocol =
        "https:"), r.request.call(this, e, t);
    };
  },
  function(e, t) {
    (e.exports.HOST = "localhost"), (e.exports.PORT = 9222);
  },
  function(e, t) {
    function n(e, t, n) {
      var r = e.get(t, function(e) {
        var t = "";
        e.on("data", function(e) {
          t += e;
        }), e.on("end", function() {
          e.statusCode === 200 ? n(null, t) : n(new Error(t));
        });
      });
      r.on("error", function(e) {
        n(e);
      });
    }
    e.exports = n;
  },
  function(e, t) {
    e.exports = {
      version: {
        major: "1",
        minor: "2"
      },
      domains: [
        {
          domain: "Inspector",
          experimental: !0,
          types: [],
          commands: [
            {
              name: "enable",
              description: "Enables inspector domain notifications."
            },
            {
              name: "disable",
              description: "Disables inspector domain notifications."
            }
          ],
          events: [
            {
              name: "detached",
              description:
                "Fired when remote debugging connection is about to be terminated. Contains detach reason.",
              parameters: [
                {
                  name: "reason",
                  type: "string",
                  description: "The reason why connection has been terminated."
                }
              ]
            },
            {
              name: "targetCrashed",
              description: "Fired when debugging target has crashed"
            }
          ]
        },
        {
          domain: "Memory",
          experimental: !0,
          types: [
            {
              id: "PressureLevel",
              type: "string",
              enum: ["moderate", "critical"],
              description: "Memory pressure level."
            }
          ],
          commands: [
            {
              name: "getDOMCounters",
              returns: [
                {
                  name: "documents",
                  type: "integer"
                },
                {
                  name: "nodes",
                  type: "integer"
                },
                {
                  name: "jsEventListeners",
                  type: "integer"
                }
              ]
            },
            {
              name: "setPressureNotificationsSuppressed",
              description:
                "Enable/disable suppressing memory pressure notifications in all processes.",
              parameters: [
                {
                  name: "suppressed",
                  type: "boolean",
                  description:
                    "If true, memory pressure notifications will be suppressed."
                }
              ]
            },
            {
              name: "simulatePressureNotification",
              description:
                "Simulate a memory pressure notification in all processes.",
              parameters: [
                {
                  name: "level",
                  $ref: "PressureLevel",
                  description: "Memory pressure level of the notification."
                }
              ]
            }
          ]
        },
        {
          domain: "Page",
          description:
            "Actions and events related to the inspected page belong to the page domain.",
          dependencies: ["Debugger", "DOM"],
          types: [
            {
              id: "ResourceType",
              type: "string",
              enum: [
                "Document",
                "Stylesheet",
                "Image",
                "Media",
                "Font",
                "Script",
                "TextTrack",
                "XHR",
                "Fetch",
                "EventSource",
                "WebSocket",
                "Manifest",
                "Other"
              ],
              description:
                "Resource type as it was perceived by the rendering engine."
            },
            {
              id: "FrameId",
              type: "string",
              description: "Unique frame identifier."
            },
            {
              id: "Frame",
              type: "object",
              description: "Information about the Frame on the page.",
              properties: [
                {
                  name: "id",
                  type: "string",
                  description: "Frame unique identifier."
                },
                {
                  name: "parentId",
                  type: "string",
                  optional: !0,
                  description: "Parent frame identifier."
                },
                {
                  name: "loaderId",
                  $ref: "Network.LoaderId",
                  description:
                    "Identifier of the loader associated with this frame."
                },
                {
                  name: "name",
                  type: "string",
                  optional: !0,
                  description: "Frame's name as specified in the tag."
                },
                {
                  name: "url",
                  type: "string",
                  description: "Frame document's URL."
                },
                {
                  name: "securityOrigin",
                  type: "string",
                  description: "Frame document's security origin."
                },
                {
                  name: "mimeType",
                  type: "string",
                  description:
                    "Frame document's mimeType as determined by the browser."
                }
              ]
            },
            {
              id: "FrameResource",
              type: "object",
              description: "Information about the Resource on the page.",
              properties: [
                {
                  name: "url",
                  type: "string",
                  description: "Resource URL."
                },
                {
                  name: "type",
                  $ref: "ResourceType",
                  description: "Type of this resource."
                },
                {
                  name: "mimeType",
                  type: "string",
                  description: "Resource mimeType as determined by the browser."
                },
                {
                  name: "lastModified",
                  $ref: "Network.Timestamp",
                  description: "last-modified timestamp as reported by server.",
                  optional: !0
                },
                {
                  name: "contentSize",
                  type: "number",
                  description: "Resource content size.",
                  optional: !0
                },
                {
                  name: "failed",
                  type: "boolean",
                  optional: !0,
                  description: "True if the resource failed to load."
                },
                {
                  name: "canceled",
                  type: "boolean",
                  optional: !0,
                  description:
                    "True if the resource was canceled during loading."
                }
              ],
              experimental: !0
            },
            {
              id: "FrameResourceTree",
              type: "object",
              description:
                "Information about the Frame hierarchy along with their cached resources.",
              properties: [
                {
                  name: "frame",
                  $ref: "Frame",
                  description: "Frame information for this tree item."
                },
                {
                  name: "childFrames",
                  type: "array",
                  optional: !0,
                  items: {
                    $ref: "FrameResourceTree"
                  },
                  description: "Child frames."
                },
                {
                  name: "resources",
                  type: "array",
                  items: {
                    $ref: "FrameResource"
                  },
                  description: "Information about frame resources."
                }
              ],
              experimental: !0
            },
            {
              id: "ScriptIdentifier",
              type: "string",
              description: "Unique script identifier.",
              experimental: !0
            },
            {
              id: "TransitionType",
              type: "string",
              description: "Transition type.",
              experimental: !0,
              enum: [
                "link",
                "typed",
                "auto_bookmark",
                "auto_subframe",
                "manual_subframe",
                "generated",
                "auto_toplevel",
                "form_submit",
                "reload",
                "keyword",
                "keyword_generated",
                "other"
              ]
            },
            {
              id: "NavigationEntry",
              type: "object",
              description: "Navigation history entry.",
              properties: [
                {
                  name: "id",
                  type: "integer",
                  description: "Unique id of the navigation history entry."
                },
                {
                  name: "url",
                  type: "string",
                  description: "URL of the navigation history entry."
                },
                {
                  name: "userTypedURL",
                  type: "string",
                  description: "URL that the user typed in the url bar."
                },
                {
                  name: "title",
                  type: "string",
                  description: "Title of the navigation history entry."
                },
                {
                  name: "transitionType",
                  $ref: "TransitionType",
                  description: "Transition type."
                }
              ],
              experimental: !0
            },
            {
              id: "ScreencastFrameMetadata",
              type: "object",
              description: "Screencast frame metadata.",
              properties: [
                {
                  name: "offsetTop",
                  type: "number",
                  experimental: !0,
                  description: "Top offset in DIP."
                },
                {
                  name: "pageScaleFactor",
                  type: "number",
                  experimental: !0,
                  description: "Page scale factor."
                },
                {
                  name: "deviceWidth",
                  type: "number",
                  experimental: !0,
                  description: "Device screen width in DIP."
                },
                {
                  name: "deviceHeight",
                  type: "number",
                  experimental: !0,
                  description: "Device screen height in DIP."
                },
                {
                  name: "scrollOffsetX",
                  type: "number",
                  experimental: !0,
                  description: "Position of horizontal scroll in CSS pixels."
                },
                {
                  name: "scrollOffsetY",
                  type: "number",
                  experimental: !0,
                  description: "Position of vertical scroll in CSS pixels."
                },
                {
                  name: "timestamp",
                  type: "number",
                  optional: !0,
                  experimental: !0,
                  description: "Frame swap timestamp."
                }
              ],
              experimental: !0
            },
            {
              id: "DialogType",
              description: "Javascript dialog type.",
              type: "string",
              enum: ["alert", "confirm", "prompt", "beforeunload"],
              experimental: !0
            },
            {
              id: "AppManifestError",
              description: "Error while paring app manifest.",
              type: "object",
              properties: [
                {
                  name: "message",
                  type: "string",
                  description: "Error message."
                },
                {
                  name: "critical",
                  type: "integer",
                  description:
                    "If criticial, this is a non-recoverable parse error."
                },
                {
                  name: "line",
                  type: "integer",
                  description: "Error line."
                },
                {
                  name: "column",
                  type: "integer",
                  description: "Error column."
                }
              ],
              experimental: !0
            },
            {
              id: "NavigationResponse",
              description:
                "Proceed: allow the navigation; Cancel: cancel the navigation; CancelAndIgnore: cancels the navigation and makes the requester of the navigation acts like the request was never made.",
              type: "string",
              enum: ["Proceed", "Cancel", "CancelAndIgnore"],
              experimental: !0
            },
            {
              id: "LayoutViewport",
              type: "object",
              description: "Layout viewport position and dimensions.",
              experimental: !0,
              properties: [
                {
                  name: "pageX",
                  type: "integer",
                  description:
                    "Horizontal offset relative to the document (CSS pixels)."
                },
                {
                  name: "pageY",
                  type: "integer",
                  description:
                    "Vertical offset relative to the document (CSS pixels)."
                },
                {
                  name: "clientWidth",
                  type: "integer",
                  description:
                    "Width (CSS pixels), excludes scrollbar if present."
                },
                {
                  name: "clientHeight",
                  type: "integer",
                  description:
                    "Height (CSS pixels), excludes scrollbar if present."
                }
              ]
            },
            {
              id: "VisualViewport",
              type: "object",
              description: "Visual viewport position, dimensions, and scale.",
              experimental: !0,
              properties: [
                {
                  name: "offsetX",
                  type: "number",
                  description:
                    "Horizontal offset relative to the layout viewport (CSS pixels)."
                },
                {
                  name: "offsetY",
                  type: "number",
                  description:
                    "Vertical offset relative to the layout viewport (CSS pixels)."
                },
                {
                  name: "pageX",
                  type: "number",
                  description:
                    "Horizontal offset relative to the document (CSS pixels)."
                },
                {
                  name: "pageY",
                  type: "number",
                  description:
                    "Vertical offset relative to the document (CSS pixels)."
                },
                {
                  name: "clientWidth",
                  type: "number",
                  description:
                    "Width (CSS pixels), excludes scrollbar if present."
                },
                {
                  name: "clientHeight",
                  type: "number",
                  description:
                    "Height (CSS pixels), excludes scrollbar if present."
                },
                {
                  name: "scale",
                  type: "number",
                  description:
                    "Scale relative to the ideal viewport (size at width=device-width)."
                }
              ]
            }
          ],
          commands: [
            {
              name: "enable",
              description: "Enables page domain notifications."
            },
            {
              name: "disable",
              description: "Disables page domain notifications."
            },
            {
              name: "addScriptToEvaluateOnLoad",
              parameters: [
                {
                  name: "scriptSource",
                  type: "string"
                }
              ],
              returns: [
                {
                  name: "identifier",
                  $ref: "ScriptIdentifier",
                  description: "Identifier of the added script."
                }
              ],
              experimental: !0
            },
            {
              name: "removeScriptToEvaluateOnLoad",
              parameters: [
                {
                  name: "identifier",
                  $ref: "ScriptIdentifier"
                }
              ],
              experimental: !0
            },
            {
              name: "setAutoAttachToCreatedPages",
              parameters: [
                {
                  name: "autoAttach",
                  type: "boolean",
                  description:
                    "If true, browser will open a new inspector window for every page created from this one."
                }
              ],
              description:
                "Controls whether browser will open a new inspector window for connected pages.",
              experimental: !0
            },
            {
              name: "reload",
              parameters: [
                {
                  name: "ignoreCache",
                  type: "boolean",
                  optional: !0,
                  description:
                    "If true, browser cache is ignored (as if the user pressed Shift+refresh)."
                },
                {
                  name: "scriptToEvaluateOnLoad",
                  type: "string",
                  optional: !0,
                  description:
                    "If set, the script will be injected into all frames of the inspected page after reload."
                }
              ],
              description: "Reloads given page optionally ignoring the cache."
            },
            {
              name: "navigate",
              parameters: [
                {
                  name: "url",
                  type: "string",
                  description: "URL to navigate the page to."
                },
                {
                  name: "referrer",
                  type: "string",
                  optional: !0,
                  experimental: !0,
                  description: "Referrer URL."
                },
                {
                  name: "transitionType",
                  $ref: "TransitionType",
                  optional: !0,
                  experimental: !0,
                  description: "Intended transition type."
                }
              ],
              returns: [
                {
                  name: "frameId",
                  $ref: "FrameId",
                  experimental: !0,
                  description: "Frame id that will be navigated."
                }
              ],
              description: "Navigates current page to the given URL."
            },
            {
              name: "stopLoading",
              description:
                "Force the page stop all navigations and pending resource fetches.",
              experimental: !0
            },
            {
              name: "getNavigationHistory",
              returns: [
                {
                  name: "currentIndex",
                  type: "integer",
                  description: "Index of the current navigation history entry."
                },
                {
                  name: "entries",
                  type: "array",
                  items: {
                    $ref: "NavigationEntry"
                  },
                  description: "Array of navigation history entries."
                }
              ],
              description: "Returns navigation history for the current page.",
              experimental: !0
            },
            {
              name: "navigateToHistoryEntry",
              parameters: [
                {
                  name: "entryId",
                  type: "integer",
                  description: "Unique id of the entry to navigate to."
                }
              ],
              description: "Navigates current page to the given history entry.",
              experimental: !0
            },
            {
              name: "getCookies",
              returns: [
                {
                  name: "cookies",
                  type: "array",
                  items: {
                    $ref: "Network.Cookie"
                  },
                  description: "Array of cookie objects."
                }
              ],
              description:
                "Returns all browser cookies. Depending on the backend support, will return detailed cookie information in the <code>cookies</code> field.",
              experimental: !0,
              redirect: "Network"
            },
            {
              name: "deleteCookie",
              parameters: [
                {
                  name: "cookieName",
                  type: "string",
                  description: "Name of the cookie to remove."
                },
                {
                  name: "url",
                  type: "string",
                  description: "URL to match cooke domain and path."
                }
              ],
              description:
                "Deletes browser cookie with given name, domain and path.",
              experimental: !0,
              redirect: "Network"
            },
            {
              name: "getResourceTree",
              description: "Returns present frame / resource tree structure.",
              returns: [
                {
                  name: "frameTree",
                  $ref: "FrameResourceTree",
                  description: "Present frame / resource tree structure."
                }
              ],
              experimental: !0
            },
            {
              name: "getResourceContent",
              description: "Returns content of the given resource.",
              parameters: [
                {
                  name: "frameId",
                  $ref: "FrameId",
                  description: "Frame id to get resource for."
                },
                {
                  name: "url",
                  type: "string",
                  description: "URL of the resource to get content for."
                }
              ],
              returns: [
                {
                  name: "content",
                  type: "string",
                  description: "Resource content."
                },
                {
                  name: "base64Encoded",
                  type: "boolean",
                  description: "True, if content was served as base64."
                }
              ],
              experimental: !0
            },
            {
              name: "searchInResource",
              description: "Searches for given string in resource content.",
              parameters: [
                {
                  name: "frameId",
                  $ref: "FrameId",
                  description: "Frame id for resource to search in."
                },
                {
                  name: "url",
                  type: "string",
                  description: "URL of the resource to search in."
                },
                {
                  name: "query",
                  type: "string",
                  description: "String to search for."
                },
                {
                  name: "caseSensitive",
                  type: "boolean",
                  optional: !0,
                  description: "If true, search is case sensitive."
                },
                {
                  name: "isRegex",
                  type: "boolean",
                  optional: !0,
                  description: "If true, treats string parameter as regex."
                }
              ],
              returns: [
                {
                  name: "result",
                  type: "array",
                  items: {
                    $ref: "Debugger.SearchMatch"
                  },
                  description: "List of search matches."
                }
              ],
              experimental: !0
            },
            {
              name: "setDocumentContent",
              description: "Sets given markup as the document's HTML.",
              parameters: [
                {
                  name: "frameId",
                  $ref: "FrameId",
                  description: "Frame id to set HTML for."
                },
                {
                  name: "html",
                  type: "string",
                  description: "HTML content to set."
                }
              ],
              experimental: !0
            },
            {
              name: "setDeviceMetricsOverride",
              description:
                'Overrides the values of device screen dimensions (window.screen.width, window.screen.height, window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media query results).',
              parameters: [
                {
                  name: "width",
                  type: "integer",
                  description:
                    "Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override."
                },
                {
                  name: "height",
                  type: "integer",
                  description:
                    "Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override."
                },
                {
                  name: "deviceScaleFactor",
                  type: "number",
                  description:
                    "Overriding device scale factor value. 0 disables the override."
                },
                {
                  name: "mobile",
                  type: "boolean",
                  description:
                    "Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text autosizing and more."
                },
                {
                  name: "fitWindow",
                  type: "boolean",
                  description:
                    "Whether a view that exceeds the available browser window area should be scaled down to fit."
                },
                {
                  name: "scale",
                  type: "number",
                  optional: !0,
                  description:
                    "Scale to apply to resulting view image. Ignored in |fitWindow| mode."
                },
                {
                  name: "offsetX",
                  type: "number",
                  optional: !0,
                  description:
                    "X offset to shift resulting view image by. Ignored in |fitWindow| mode."
                },
                {
                  name: "offsetY",
                  type: "number",
                  optional: !0,
                  description:
                    "Y offset to shift resulting view image by. Ignored in |fitWindow| mode."
                },
                {
                  name: "screenWidth",
                  type: "integer",
                  optional: !0,
                  description:
                    "Overriding screen width value in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|."
                },
                {
                  name: "screenHeight",
                  type: "integer",
                  optional: !0,
                  description:
                    "Overriding screen height value in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|."
                },
                {
                  name: "positionX",
                  type: "integer",
                  optional: !0,
                  description:
                    "Overriding view X position on screen in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|."
                },
                {
                  name: "positionY",
                  type: "integer",
                  optional: !0,
                  description:
                    "Overriding view Y position on screen in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|."
                },
                {
                  name: "screenOrientation",
                  $ref: "Emulation.ScreenOrientation",
                  optional: !0,
                  description: "Screen orientation override."
                }
              ],
              redirect: "Emulation",
              experimental: !0
            },
            {
              name: "clearDeviceMetricsOverride",
              description: "Clears the overriden device metrics.",
              redirect: "Emulation",
              experimental: !0
            },
            {
              name: "setGeolocationOverride",
              description:
                "Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position unavailable.",
              parameters: [
                {
                  name: "latitude",
                  type: "number",
                  optional: !0,
                  description: "Mock latitude"
                },
                {
                  name: "longitude",
                  type: "number",
                  optional: !0,
                  description: "Mock longitude"
                },
                {
                  name: "accuracy",
                  type: "number",
                  optional: !0,
                  description: "Mock accuracy"
                }
              ],
              redirect: "Emulation"
            },
            {
              name: "clearGeolocationOverride",
              description:
                "Clears the overriden Geolocation Position and Error.",
              redirect: "Emulation"
            },
            {
              name: "setDeviceOrientationOverride",
              description: "Overrides the Device Orientation.",
              parameters: [
                {
                  name: "alpha",
                  type: "number",
                  description: "Mock alpha"
                },
                {
                  name: "beta",
                  type: "number",
                  description: "Mock beta"
                },
                {
                  name: "gamma",
                  type: "number",
                  description: "Mock gamma"
                }
              ],
              redirect: "DeviceOrientation",
              experimental: !0
            },
            {
              name: "clearDeviceOrientationOverride",
              description: "Clears the overridden Device Orientation.",
              redirect: "DeviceOrientation",
              experimental: !0
            },
            {
              name: "setTouchEmulationEnabled",
              parameters: [
                {
                  name: "enabled",
                  type: "boolean",
                  description:
                    "Whether the touch event emulation should be enabled."
                },
                {
                  name: "configuration",
                  type: "string",
                  enum: ["mobile", "desktop"],
                  optional: !0,
                  description:
                    "Touch/gesture events configuration. Default: current platform."
                }
              ],
              description: "Toggles mouse event-based touch event emulation.",
              experimental: !0,
              redirect: "Emulation"
            },
            {
              name: "captureScreenshot",
              description: "Capture page screenshot.",
              parameters: [
                {
                  name: "format",
                  type: "string",
                  optional: !0,
                  enum: ["jpeg", "png"],
                  description: "Image compression format (defaults to png)."
                },
                {
                  name: "quality",
                  type: "integer",
                  optional: !0,
                  description:
                    "Compression quality from range [0..100] (jpeg only)."
                },
                {
                  name: "fromSurface",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Capture the screenshot from the surface, rather than the view. Defaults to true.",
                  experimental: !0
                }
              ],
              returns: [
                {
                  name: "data",
                  type: "string",
                  description: "Base64-encoded image data."
                }
              ],
              experimental: !0
            },
            {
              name: "printToPDF",
              description: "Print page as PDF.",
              parameters: [
                {
                  name: "landscape",
                  type: "boolean",
                  optional: !0,
                  description: "Paper orientation. Defaults to false."
                },
                {
                  name: "displayHeaderFooter",
                  type: "boolean",
                  optional: !0,
                  description: "Display header and footer. Defaults to false."
                },
                {
                  name: "printBackground",
                  type: "boolean",
                  optional: !0,
                  description: "Print background graphics. Defaults to false."
                },
                {
                  name: "scale",
                  type: "number",
                  optional: !0,
                  description: "Scale of the webpage rendering. Defaults to 1."
                },
                {
                  name: "paperWidth",
                  type: "number",
                  optional: !0,
                  description: "Paper width in inches. Defaults to 8.5 inches."
                },
                {
                  name: "paperHeight",
                  type: "number",
                  optional: !0,
                  description: "Paper height in inches. Defaults to 11 inches."
                },
                {
                  name: "marginTop",
                  type: "number",
                  optional: !0,
                  description:
                    "Top margin in inches. Defaults to 1cm (~0.4 inches)."
                },
                {
                  name: "marginBottom",
                  type: "number",
                  optional: !0,
                  description:
                    "Bottom margin in inches. Defaults to 1cm (~0.4 inches)."
                },
                {
                  name: "marginLeft",
                  type: "number",
                  optional: !0,
                  description:
                    "Left margin in inches. Defaults to 1cm (~0.4 inches)."
                },
                {
                  name: "marginRight",
                  type: "number",
                  optional: !0,
                  description:
                    "Right margin in inches. Defaults to 1cm (~0.4 inches)."
                },
                {
                  name: "pageRanges",
                  type: "string",
                  optional: !0,
                  description:
                    "Paper ranges to print, e.g., '1-5, 8, 11-13'. Defaults to the empty string, which means print all pages."
                }
              ],
              returns: [
                {
                  name: "data",
                  type: "string",
                  description: "Base64-encoded pdf data."
                }
              ],
              experimental: !0
            },
            {
              name: "startScreencast",
              description:
                "Starts sending each frame using the <code>screencastFrame</code> event.",
              parameters: [
                {
                  name: "format",
                  type: "string",
                  optional: !0,
                  enum: ["jpeg", "png"],
                  description: "Image compression format."
                },
                {
                  name: "quality",
                  type: "integer",
                  optional: !0,
                  description: "Compression quality from range [0..100]."
                },
                {
                  name: "maxWidth",
                  type: "integer",
                  optional: !0,
                  description: "Maximum screenshot width."
                },
                {
                  name: "maxHeight",
                  type: "integer",
                  optional: !0,
                  description: "Maximum screenshot height."
                },
                {
                  name: "everyNthFrame",
                  type: "integer",
                  optional: !0,
                  description: "Send every n-th frame."
                }
              ],
              experimental: !0
            },
            {
              name: "stopScreencast",
              description:
                "Stops sending each frame in the <code>screencastFrame</code>.",
              experimental: !0
            },
            {
              name: "screencastFrameAck",
              description:
                "Acknowledges that a screencast frame has been received by the frontend.",
              parameters: [
                {
                  name: "sessionId",
                  type: "integer",
                  description: "Frame number."
                }
              ],
              experimental: !0
            },
            {
              name: "handleJavaScriptDialog",
              description:
                "Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload).",
              parameters: [
                {
                  name: "accept",
                  type: "boolean",
                  description: "Whether to accept or dismiss the dialog."
                },
                {
                  name: "promptText",
                  type: "string",
                  optional: !0,
                  description:
                    "The text to enter into the dialog prompt before accepting. Used only if this is a prompt dialog."
                }
              ]
            },
            {
              name: "getAppManifest",
              experimental: !0,
              returns: [
                {
                  name: "url",
                  type: "string",
                  description: "Manifest location."
                },
                {
                  name: "errors",
                  type: "array",
                  items: {
                    $ref: "AppManifestError"
                  }
                },
                {
                  name: "data",
                  type: "string",
                  optional: !0,
                  description: "Manifest content."
                }
              ]
            },
            {
              name: "requestAppBanner",
              experimental: !0
            },
            {
              name: "setControlNavigations",
              parameters: [
                {
                  name: "enabled",
                  type: "boolean"
                }
              ],
              description:
                "Toggles navigation throttling which allows programatic control over navigation and redirect response.",
              experimental: !0
            },
            {
              name: "processNavigation",
              parameters: [
                {
                  name: "response",
                  $ref: "NavigationResponse"
                },
                {
                  name: "navigationId",
                  type: "integer"
                }
              ],
              description:
                "Should be sent in response to a navigationRequested or a redirectRequested event, telling the browser how to handle the navigation.",
              experimental: !0
            },
            {
              name: "getLayoutMetrics",
              description:
                "Returns metrics relating to the layouting of the page, such as viewport bounds/scale.",
              experimental: !0,
              returns: [
                {
                  name: "layoutViewport",
                  $ref: "LayoutViewport",
                  description: "Metrics relating to the layout viewport."
                },
                {
                  name: "visualViewport",
                  $ref: "VisualViewport",
                  description: "Metrics relating to the visual viewport."
                },
                {
                  name: "contentSize",
                  $ref: "DOM.Rect",
                  description: "Size of scrollable area."
                }
              ]
            },
            {
              name: "createIsolatedWorld",
              description: "Creates an isolated world for the given frame.",
              experimental: !0,
              parameters: [
                {
                  name: "frameId",
                  $ref: "FrameId",
                  description:
                    "Id of the frame in which the isolated world should be created."
                },
                {
                  name: "worldName",
                  type: "string",
                  optional: !0,
                  description:
                    "An optional name which is reported in the Execution Context."
                },
                {
                  name: "grantUniveralAccess",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether or not universal access should be granted to the isolated world. This is a powerful option, use with caution."
                }
              ]
            }
          ],
          events: [
            {
              name: "domContentEventFired",
              parameters: [
                {
                  name: "timestamp",
                  type: "number"
                }
              ]
            },
            {
              name: "loadEventFired",
              parameters: [
                {
                  name: "timestamp",
                  type: "number"
                }
              ]
            },
            {
              name: "frameAttached",
              description: "Fired when frame has been attached to its parent.",
              parameters: [
                {
                  name: "frameId",
                  $ref: "FrameId",
                  description: "Id of the frame that has been attached."
                },
                {
                  name: "parentFrameId",
                  $ref: "FrameId",
                  description: "Parent frame identifier."
                },
                {
                  name: "stack",
                  $ref: "Runtime.StackTrace",
                  optional: !0,
                  description:
                    "JavaScript stack trace of when frame was attached, only set if frame initiated from script.",
                  experimental: !0
                }
              ]
            },
            {
              name: "frameNavigated",
              description:
                "Fired once navigation of the frame has completed. Frame is now associated with the new loader.",
              parameters: [
                {
                  name: "frame",
                  $ref: "Frame",
                  description: "Frame object."
                }
              ]
            },
            {
              name: "frameDetached",
              description:
                "Fired when frame has been detached from its parent.",
              parameters: [
                {
                  name: "frameId",
                  $ref: "FrameId",
                  description: "Id of the frame that has been detached."
                }
              ]
            },
            {
              name: "frameStartedLoading",
              description: "Fired when frame has started loading.",
              parameters: [
                {
                  name: "frameId",
                  $ref: "FrameId",
                  description: "Id of the frame that has started loading."
                }
              ],
              experimental: !0
            },
            {
              name: "frameStoppedLoading",
              description: "Fired when frame has stopped loading.",
              parameters: [
                {
                  name: "frameId",
                  $ref: "FrameId",
                  description: "Id of the frame that has stopped loading."
                }
              ],
              experimental: !0
            },
            {
              name: "frameScheduledNavigation",
              description: "Fired when frame schedules a potential navigation.",
              parameters: [
                {
                  name: "frameId",
                  $ref: "FrameId",
                  description:
                    "Id of the frame that has scheduled a navigation."
                },
                {
                  name: "delay",
                  type: "number",
                  description:
                    "Delay (in seconds) until the navigation is scheduled to begin. The navigation is not guaranteed to start."
                }
              ],
              experimental: !0
            },
            {
              name: "frameClearedScheduledNavigation",
              description:
                "Fired when frame no longer has a scheduled navigation.",
              parameters: [
                {
                  name: "frameId",
                  $ref: "FrameId",
                  description:
                    "Id of the frame that has cleared its scheduled navigation."
                }
              ],
              experimental: !0
            },
            {
              name: "frameResized",
              experimental: !0
            },
            {
              name: "javascriptDialogOpening",
              description:
                "Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) is about to open.",
              parameters: [
                {
                  name: "message",
                  type: "string",
                  description: "Message that will be displayed by the dialog."
                },
                {
                  name: "type",
                  $ref: "DialogType",
                  description: "Dialog type."
                }
              ]
            },
            {
              name: "javascriptDialogClosed",
              description:
                "Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) has been closed.",
              parameters: [
                {
                  name: "result",
                  type: "boolean",
                  description: "Whether dialog was confirmed."
                }
              ]
            },
            {
              name: "screencastFrame",
              description:
                "Compressed image data requested by the <code>startScreencast</code>.",
              parameters: [
                {
                  name: "data",
                  type: "string",
                  description: "Base64-encoded compressed image."
                },
                {
                  name: "metadata",
                  $ref: "ScreencastFrameMetadata",
                  description: "Screencast frame metadata."
                },
                {
                  name: "sessionId",
                  type: "integer",
                  description: "Frame number."
                }
              ],
              experimental: !0
            },
            {
              name: "screencastVisibilityChanged",
              description:
                "Fired when the page with currently enabled screencast was shown or hidden </code>.",
              parameters: [
                {
                  name: "visible",
                  type: "boolean",
                  description: "True if the page is visible."
                }
              ],
              experimental: !0
            },
            {
              name: "interstitialShown",
              description: "Fired when interstitial page was shown"
            },
            {
              name: "interstitialHidden",
              description: "Fired when interstitial page was hidden"
            },
            {
              name: "navigationRequested",
              description:
                "Fired when a navigation is started if navigation throttles are enabled.  The navigation will be deferred until processNavigation is called.",
              parameters: [
                {
                  name: "isInMainFrame",
                  type: "boolean",
                  description:
                    "Whether the navigation is taking place in the main frame or in a subframe."
                },
                {
                  name: "isRedirect",
                  type: "boolean",
                  description:
                    "Whether the navigation has encountered a server redirect or not."
                },
                {
                  name: "navigationId",
                  type: "integer"
                },
                {
                  name: "url",
                  type: "string",
                  description: "URL of requested navigation."
                }
              ]
            }
          ]
        },
        {
          domain: "Overlay",
          description:
            "This domain provides various functionality related to drawing atop the inspected page.",
          dependencies: ["DOM", "Page", "Runtime"],
          experimental: !0,
          types: [
            {
              id: "HighlightConfig",
              type: "object",
              properties: [
                {
                  name: "showInfo",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the node info tooltip should be shown (default: false)."
                },
                {
                  name: "showRulers",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the rulers should be shown (default: false)."
                },
                {
                  name: "showExtensionLines",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the extension lines from node to the rulers should be shown (default: false)."
                },
                {
                  name: "displayAsMaterial",
                  type: "boolean",
                  optional: !0
                },
                {
                  name: "contentColor",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The content box highlight fill color (default: transparent)."
                },
                {
                  name: "paddingColor",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The padding highlight fill color (default: transparent)."
                },
                {
                  name: "borderColor",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The border highlight fill color (default: transparent)."
                },
                {
                  name: "marginColor",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The margin highlight fill color (default: transparent)."
                },
                {
                  name: "eventTargetColor",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The event target element highlight fill color (default: transparent)."
                },
                {
                  name: "shapeColor",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The shape outside fill color (default: transparent)."
                },
                {
                  name: "shapeMarginColor",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The shape margin fill color (default: transparent)."
                },
                {
                  name: "selectorList",
                  type: "string",
                  optional: !0,
                  description: "Selectors to highlight relevant nodes."
                }
              ],
              description:
                "Configuration data for the highlighting of page elements."
            },
            {
              id: "InspectMode",
              type: "string",
              enum: ["searchForNode", "searchForUAShadowDOM", "none"]
            }
          ],
          commands: [
            {
              name: "enable",
              description: "Enables domain notifications."
            },
            {
              name: "disable",
              description: "Disables domain notifications."
            },
            {
              name: "setShowPaintRects",
              description: "Requests that backend shows paint rectangles",
              parameters: [
                {
                  name: "result",
                  type: "boolean",
                  description: "True for showing paint rectangles"
                }
              ]
            },
            {
              name: "setShowDebugBorders",
              description:
                "Requests that backend shows debug borders on layers",
              parameters: [
                {
                  name: "show",
                  type: "boolean",
                  description: "True for showing debug borders"
                }
              ]
            },
            {
              name: "setShowFPSCounter",
              description: "Requests that backend shows the FPS counter",
              parameters: [
                {
                  name: "show",
                  type: "boolean",
                  description: "True for showing the FPS counter"
                }
              ]
            },
            {
              name: "setShowScrollBottleneckRects",
              description:
                "Requests that backend shows scroll bottleneck rects",
              parameters: [
                {
                  name: "show",
                  type: "boolean",
                  description: "True for showing scroll bottleneck rects"
                }
              ]
            },
            {
              name: "setShowViewportSizeOnResize",
              description: "Paints viewport size upon main frame resize.",
              parameters: [
                {
                  name: "show",
                  type: "boolean",
                  description: "Whether to paint size or not."
                }
              ]
            },
            {
              name: "setPausedInDebuggerMessage",
              parameters: [
                {
                  name: "message",
                  type: "string",
                  optional: !0,
                  description:
                    "The message to display, also triggers resume and step over controls."
                }
              ]
            },
            {
              name: "setSuspended",
              parameters: [
                {
                  name: "suspended",
                  type: "boolean",
                  description:
                    "Whether overlay should be suspended and not consume any resources until resumed."
                }
              ]
            },
            {
              name: "setInspectMode",
              description:
                "Enters the 'inspect' mode. In this mode, elements that user is hovering over are highlighted. Backend then generates 'inspectNodeRequested' event upon element selection.",
              parameters: [
                {
                  name: "mode",
                  $ref: "InspectMode",
                  description: "Set an inspection mode."
                },
                {
                  name: "highlightConfig",
                  $ref: "HighlightConfig",
                  optional: !0,
                  description:
                    "A descriptor for the highlight appearance of hovered-over nodes. May be omitted if <code>enabled == false</code>."
                }
              ]
            },
            {
              name: "highlightRect",
              description:
                "Highlights given rectangle. Coordinates are absolute with respect to the main frame viewport.",
              parameters: [
                {
                  name: "x",
                  type: "integer",
                  description: "X coordinate"
                },
                {
                  name: "y",
                  type: "integer",
                  description: "Y coordinate"
                },
                {
                  name: "width",
                  type: "integer",
                  description: "Rectangle width"
                },
                {
                  name: "height",
                  type: "integer",
                  description: "Rectangle height"
                },
                {
                  name: "color",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The highlight fill color (default: transparent)."
                },
                {
                  name: "outlineColor",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The highlight outline color (default: transparent)."
                }
              ]
            },
            {
              name: "highlightQuad",
              description:
                "Highlights given quad. Coordinates are absolute with respect to the main frame viewport.",
              parameters: [
                {
                  name: "quad",
                  $ref: "DOM.Quad",
                  description: "Quad to highlight"
                },
                {
                  name: "color",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The highlight fill color (default: transparent)."
                },
                {
                  name: "outlineColor",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The highlight outline color (default: transparent)."
                }
              ]
            },
            {
              name: "highlightNode",
              description:
                "Highlights DOM node with given id or with the given JavaScript object wrapper. Either nodeId or objectId must be specified.",
              parameters: [
                {
                  name: "highlightConfig",
                  $ref: "HighlightConfig",
                  description: "A descriptor for the highlight appearance."
                },
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId",
                  optional: !0,
                  description: "Identifier of the node to highlight."
                },
                {
                  name: "backendNodeId",
                  $ref: "DOM.BackendNodeId",
                  optional: !0,
                  description: "Identifier of the backend node to highlight."
                },
                {
                  name: "objectId",
                  $ref: "Runtime.RemoteObjectId",
                  optional: !0,
                  description:
                    "JavaScript object id of the node to be highlighted."
                }
              ]
            },
            {
              name: "highlightFrame",
              description:
                "Highlights owner element of the frame with given id.",
              parameters: [
                {
                  name: "frameId",
                  $ref: "Page.FrameId",
                  description: "Identifier of the frame to highlight."
                },
                {
                  name: "contentColor",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The content box highlight fill color (default: transparent)."
                },
                {
                  name: "contentOutlineColor",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "The content box highlight outline color (default: transparent)."
                }
              ]
            },
            {
              name: "hideHighlight",
              description: "Hides any highlight."
            },
            {
              name: "getHighlightObjectForTest",
              description: "For testing.",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId",
                  description: "Id of the node to get highlight object for."
                }
              ],
              returns: [
                {
                  name: "highlight",
                  type: "object",
                  description: "Highlight data for the node."
                }
              ]
            }
          ],
          events: [
            {
              name: "nodeHighlightRequested",
              description:
                "Fired when the node should be highlighted. This happens after call to <code>setInspectMode</code>.",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId"
                }
              ]
            },
            {
              name: "inspectNodeRequested",
              description:
                "Fired when the node should be inspected. This happens after call to <code>setInspectMode</code> or when user manually inspects an element.",
              parameters: [
                {
                  name: "backendNodeId",
                  $ref: "DOM.BackendNodeId",
                  description: "Id of the node to inspect."
                }
              ]
            }
          ]
        },
        {
          domain: "Emulation",
          description:
            "This domain emulates different environments for the page.",
          dependencies: ["DOM"],
          types: [
            {
              id: "ScreenOrientation",
              type: "object",
              description: "Screen orientation.",
              properties: [
                {
                  name: "type",
                  type: "string",
                  enum: [
                    "portraitPrimary",
                    "portraitSecondary",
                    "landscapePrimary",
                    "landscapeSecondary"
                  ],
                  description: "Orientation type."
                },
                {
                  name: "angle",
                  type: "integer",
                  description: "Orientation angle."
                }
              ]
            },
            {
              id: "VirtualTimePolicy",
              type: "string",
              enum: ["advance", "pause", "pauseIfNetworkFetchesPending"],
              experimental: !0,
              description:
                "advance: If the scheduler runs out of immediate work, the virtual time base may fast forward to allow the next delayed task (if any) to run; pause: The virtual time base may not advance; pauseIfNetworkFetchesPending: The virtual time base may not advance if there are any pending resource fetches."
            }
          ],
          commands: [
            {
              name: "setDeviceMetricsOverride",
              description:
                'Overrides the values of device screen dimensions (window.screen.width, window.screen.height, window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media query results).',
              parameters: [
                {
                  name: "width",
                  type: "integer",
                  description:
                    "Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override."
                },
                {
                  name: "height",
                  type: "integer",
                  description:
                    "Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override."
                },
                {
                  name: "deviceScaleFactor",
                  type: "number",
                  description:
                    "Overriding device scale factor value. 0 disables the override."
                },
                {
                  name: "mobile",
                  type: "boolean",
                  description:
                    "Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text autosizing and more."
                },
                {
                  name: "fitWindow",
                  type: "boolean",
                  description:
                    "Whether a view that exceeds the available browser window area should be scaled down to fit."
                },
                {
                  name: "scale",
                  type: "number",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Scale to apply to resulting view image. Ignored in |fitWindow| mode."
                },
                {
                  name: "offsetX",
                  type: "number",
                  optional: !0,
                  deprecated: !0,
                  experimental: !0,
                  description: "Not used."
                },
                {
                  name: "offsetY",
                  type: "number",
                  optional: !0,
                  deprecated: !0,
                  experimental: !0,
                  description: "Not used."
                },
                {
                  name: "screenWidth",
                  type: "integer",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Overriding screen width value in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|."
                },
                {
                  name: "screenHeight",
                  type: "integer",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Overriding screen height value in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|."
                },
                {
                  name: "positionX",
                  type: "integer",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Overriding view X position on screen in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|."
                },
                {
                  name: "positionY",
                  type: "integer",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Overriding view Y position on screen in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|."
                },
                {
                  name: "screenOrientation",
                  $ref: "ScreenOrientation",
                  optional: !0,
                  description: "Screen orientation override."
                }
              ]
            },
            {
              name: "clearDeviceMetricsOverride",
              description: "Clears the overriden device metrics."
            },
            {
              name: "forceViewport",
              description:
                "Overrides the visible area of the page. The change is hidden from the page, i.e. the observable scroll position and page scale does not change. In effect, the command moves the specified area of the page into the top-left corner of the frame.",
              experimental: !0,
              parameters: [
                {
                  name: "x",
                  type: "number",
                  description:
                    "X coordinate of top-left corner of the area (CSS pixels)."
                },
                {
                  name: "y",
                  type: "number",
                  description:
                    "Y coordinate of top-left corner of the area (CSS pixels)."
                },
                {
                  name: "scale",
                  type: "number",
                  description:
                    "Scale to apply to the area (relative to a page scale of 1.0)."
                }
              ]
            },
            {
              name: "resetViewport",
              description:
                "Resets the visible area of the page to the original viewport, undoing any effects of the <code>forceViewport</code> command.",
              experimental: !0
            },
            {
              name: "resetPageScaleFactor",
              experimental: !0,
              description:
                "Requests that page scale factor is reset to initial values."
            },
            {
              name: "setPageScaleFactor",
              description: "Sets a specified page scale factor.",
              experimental: !0,
              parameters: [
                {
                  name: "pageScaleFactor",
                  type: "number",
                  description: "Page scale factor."
                }
              ]
            },
            {
              name: "setVisibleSize",
              description:
                "Resizes the frame/viewport of the page. Note that this does not affect the frame's container (e.g. browser window). Can be used to produce screenshots of the specified size. Not supported on Android.",
              experimental: !0,
              parameters: [
                {
                  name: "width",
                  type: "integer",
                  description: "Frame width (DIP)."
                },
                {
                  name: "height",
                  type: "integer",
                  description: "Frame height (DIP)."
                }
              ]
            },
            {
              name: "setScriptExecutionDisabled",
              description: "Switches script execution in the page.",
              experimental: !0,
              parameters: [
                {
                  name: "value",
                  type: "boolean",
                  description:
                    "Whether script execution should be disabled in the page."
                }
              ]
            },
            {
              name: "setGeolocationOverride",
              description:
                "Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position unavailable.",
              experimental: !0,
              parameters: [
                {
                  name: "latitude",
                  type: "number",
                  optional: !0,
                  description: "Mock latitude"
                },
                {
                  name: "longitude",
                  type: "number",
                  optional: !0,
                  description: "Mock longitude"
                },
                {
                  name: "accuracy",
                  type: "number",
                  optional: !0,
                  description: "Mock accuracy"
                }
              ]
            },
            {
              name: "clearGeolocationOverride",
              description:
                "Clears the overriden Geolocation Position and Error.",
              experimental: !0
            },
            {
              name: "setTouchEmulationEnabled",
              parameters: [
                {
                  name: "enabled",
                  type: "boolean",
                  description:
                    "Whether the touch event emulation should be enabled."
                },
                {
                  name: "configuration",
                  type: "string",
                  enum: ["mobile", "desktop"],
                  optional: !0,
                  description:
                    "Touch/gesture events configuration. Default: current platform."
                }
              ],
              description: "Toggles mouse event-based touch event emulation."
            },
            {
              name: "setEmulatedMedia",
              parameters: [
                {
                  name: "media",
                  type: "string",
                  description:
                    "Media type to emulate. Empty string disables the override."
                }
              ],
              description: "Emulates the given media for CSS media queries."
            },
            {
              name: "setCPUThrottlingRate",
              parameters: [
                {
                  name: "rate",
                  type: "number",
                  description:
                    "Throttling rate as a slowdown factor (1 is no throttle, 2 is 2x slowdown, etc)."
                }
              ],
              experimental: !0,
              description: "Enables CPU throttling to emulate slow CPUs."
            },
            {
              name: "canEmulate",
              description: "Tells whether emulation is supported.",
              returns: [
                {
                  name: "result",
                  type: "boolean",
                  description: "True if emulation is supported."
                }
              ],
              experimental: !0
            },
            {
              name: "setVirtualTimePolicy",
              description:
                "Turns on virtual time for all frames (replacing real-time with a synthetic time source) and sets the current virtual time policy.  Note this supersedes any previous time budget.",
              parameters: [
                {
                  name: "policy",
                  $ref: "VirtualTimePolicy"
                },
                {
                  name: "budget",
                  type: "integer",
                  optional: !0,
                  description:
                    "If set, after this many virtual milliseconds have elapsed virtual time will be paused and a virtualTimeBudgetExpired event is sent."
                }
              ],
              experimental: !0
            },
            {
              name: "setDefaultBackgroundColorOverride",
              description:
                "Sets or clears an override of the default background color of the frame. This override is used if the content does not specify one.",
              parameters: [
                {
                  name: "color",
                  $ref: "DOM.RGBA",
                  optional: !0,
                  description:
                    "RGBA of the default background color. If not specified, any existing override will be cleared."
                }
              ],
              experimental: !0
            }
          ],
          events: [
            {
              name: "virtualTimeBudgetExpired",
              experimental: !0,
              description:
                "Notification sent after the virual time budget for the current VirtualTimePolicy has run out."
            }
          ]
        },
        {
          domain: "Security",
          description: "Security",
          experimental: !0,
          types: [
            {
              id: "CertificateId",
              type: "integer",
              description: "An internal certificate ID value."
            },
            {
              id: "SecurityState",
              type: "string",
              enum: [
                "unknown",
                "neutral",
                "insecure",
                "warning",
                "secure",
                "info"
              ],
              description: "The security level of a page or resource."
            },
            {
              id: "SecurityStateExplanation",
              type: "object",
              properties: [
                {
                  name: "securityState",
                  $ref: "SecurityState",
                  description:
                    "Security state representing the severity of the factor being explained."
                },
                {
                  name: "summary",
                  type: "string",
                  description: "Short phrase describing the type of factor."
                },
                {
                  name: "description",
                  type: "string",
                  description: "Full text explanation of the factor."
                },
                {
                  name: "hasCertificate",
                  type: "boolean",
                  description: "True if the page has a certificate."
                }
              ],
              description:
                "An explanation of an factor contributing to the security state."
            },
            {
              id: "InsecureContentStatus",
              type: "object",
              properties: [
                {
                  name: "ranMixedContent",
                  type: "boolean",
                  description:
                    "True if the page was loaded over HTTPS and ran mixed (HTTP) content such as scripts."
                },
                {
                  name: "displayedMixedContent",
                  type: "boolean",
                  description:
                    "True if the page was loaded over HTTPS and displayed mixed (HTTP) content such as images."
                },
                {
                  name: "containedMixedForm",
                  type: "boolean",
                  description:
                    "True if the page was loaded over HTTPS and contained a form targeting an insecure url."
                },
                {
                  name: "ranContentWithCertErrors",
                  type: "boolean",
                  description:
                    "True if the page was loaded over HTTPS without certificate errors, and ran content such as scripts that were loaded with certificate errors."
                },
                {
                  name: "displayedContentWithCertErrors",
                  type: "boolean",
                  description:
                    "True if the page was loaded over HTTPS without certificate errors, and displayed content such as images that were loaded with certificate errors."
                },
                {
                  name: "ranInsecureContentStyle",
                  $ref: "SecurityState",
                  description:
                    "Security state representing a page that ran insecure content."
                },
                {
                  name: "displayedInsecureContentStyle",
                  $ref: "SecurityState",
                  description:
                    "Security state representing a page that displayed insecure content."
                }
              ],
              description: "Information about insecure content on the page."
            },
            {
              id: "CertificateErrorAction",
              type: "string",
              enum: ["continue", "cancel"],
              description:
                "The action to take when a certificate error occurs. continue will continue processing the request and cancel will cancel the request."
            }
          ],
          commands: [
            {
              name: "enable",
              description: "Enables tracking security state changes."
            },
            {
              name: "disable",
              description: "Disables tracking security state changes."
            },
            {
              name: "showCertificateViewer",
              description:
                "Displays native dialog with the certificate details."
            },
            {
              name: "handleCertificateError",
              description:
                "Handles a certificate error that fired a certificateError event.",
              parameters: [
                {
                  name: "eventId",
                  type: "integer",
                  description: "The ID of the event."
                },
                {
                  name: "action",
                  $ref: "CertificateErrorAction",
                  description: "The action to take on the certificate error."
                }
              ]
            },
            {
              name: "setOverrideCertificateErrors",
              description:
                "Enable/disable overriding certificate errors. If enabled, all certificate error events need to be handled by the DevTools client and should be answered with handleCertificateError commands.",
              parameters: [
                {
                  name: "override",
                  type: "boolean",
                  description: "If true, certificate errors will be overridden."
                }
              ]
            }
          ],
          events: [
            {
              name: "securityStateChanged",
              description: "The security state of the page changed.",
              parameters: [
                {
                  name: "securityState",
                  $ref: "SecurityState",
                  description: "Security state."
                },
                {
                  name: "schemeIsCryptographic",
                  type: "boolean",
                  description:
                    "True if the page was loaded over cryptographic transport such as HTTPS."
                },
                {
                  name: "explanations",
                  type: "array",
                  items: {
                    $ref: "SecurityStateExplanation"
                  },
                  description:
                    "List of explanations for the security state. If the overall security state is `insecure` or `warning`, at least one corresponding explanation should be included."
                },
                {
                  name: "insecureContentStatus",
                  $ref: "InsecureContentStatus",
                  description: "Information about insecure content on the page."
                },
                {
                  name: "summary",
                  type: "string",
                  description:
                    "Overrides user-visible description of the state.",
                  optional: !0
                }
              ]
            },
            {
              name: "certificateError",
              description:
                "There is a certificate error. If overriding certificate errors is enabled, then it should be handled with the handleCertificateError command. Note: this event does not fire if the certificate error has been allowed internally.",
              parameters: [
                {
                  name: "eventId",
                  type: "integer",
                  description: "The ID of the event."
                },
                {
                  name: "errorType",
                  type: "string",
                  description: "The type of the error."
                },
                {
                  name: "requestURL",
                  type: "string",
                  description: "The url that was requested."
                }
              ]
            }
          ]
        },
        {
          domain: "Network",
          description:
            "Network domain allows tracking network activities of the page. It exposes information about http, file, data and other requests and responses, their headers, bodies, timing, etc.",
          dependencies: ["Runtime", "Security"],
          types: [
            {
              id: "LoaderId",
              type: "string",
              description: "Unique loader identifier."
            },
            {
              id: "RequestId",
              type: "string",
              description: "Unique request identifier."
            },
            {
              id: "InterceptionId",
              type: "string",
              description: "Unique intercepted request identifier."
            },
            {
              id: "ErrorReason",
              type: "string",
              enum: [
                "Failed",
                "Aborted",
                "TimedOut",
                "AccessDenied",
                "ConnectionClosed",
                "ConnectionReset",
                "ConnectionRefused",
                "ConnectionAborted",
                "ConnectionFailed",
                "NameNotResolved",
                "InternetDisconnected",
                "AddressUnreachable"
              ],
              description: "Network level fetch failure reason."
            },
            {
              id: "Timestamp",
              type: "number",
              description: "Number of seconds since epoch."
            },
            {
              id: "Headers",
              type: "object",
              description:
                "Request / response headers as keys / values of JSON object."
            },
            {
              id: "ConnectionType",
              type: "string",
              enum: [
                "none",
                "cellular2g",
                "cellular3g",
                "cellular4g",
                "bluetooth",
                "ethernet",
                "wifi",
                "wimax",
                "other"
              ],
              description: "Loading priority of a resource request."
            },
            {
              id: "CookieSameSite",
              type: "string",
              enum: ["Strict", "Lax"],
              description:
                "Represents the cookie's 'SameSite' status: https://tools.ietf.org/html/draft-west-first-party-cookies"
            },
            {
              id: "ResourceTiming",
              type: "object",
              description: "Timing information for the request.",
              properties: [
                {
                  name: "requestTime",
                  type: "number",
                  description:
                    "Timing's requestTime is a baseline in seconds, while the other numbers are ticks in milliseconds relatively to this requestTime."
                },
                {
                  name: "proxyStart",
                  type: "number",
                  description: "Started resolving proxy."
                },
                {
                  name: "proxyEnd",
                  type: "number",
                  description: "Finished resolving proxy."
                },
                {
                  name: "dnsStart",
                  type: "number",
                  description: "Started DNS address resolve."
                },
                {
                  name: "dnsEnd",
                  type: "number",
                  description: "Finished DNS address resolve."
                },
                {
                  name: "connectStart",
                  type: "number",
                  description: "Started connecting to the remote host."
                },
                {
                  name: "connectEnd",
                  type: "number",
                  description: "Connected to the remote host."
                },
                {
                  name: "sslStart",
                  type: "number",
                  description: "Started SSL handshake."
                },
                {
                  name: "sslEnd",
                  type: "number",
                  description: "Finished SSL handshake."
                },
                {
                  name: "workerStart",
                  type: "number",
                  description: "Started running ServiceWorker.",
                  experimental: !0
                },
                {
                  name: "workerReady",
                  type: "number",
                  description: "Finished Starting ServiceWorker.",
                  experimental: !0
                },
                {
                  name: "sendStart",
                  type: "number",
                  description: "Started sending request."
                },
                {
                  name: "sendEnd",
                  type: "number",
                  description: "Finished sending request."
                },
                {
                  name: "pushStart",
                  type: "number",
                  description: "Time the server started pushing request.",
                  experimental: !0
                },
                {
                  name: "pushEnd",
                  type: "number",
                  description: "Time the server finished pushing request.",
                  experimental: !0
                },
                {
                  name: "receiveHeadersEnd",
                  type: "number",
                  description: "Finished receiving response headers."
                }
              ]
            },
            {
              id: "ResourcePriority",
              type: "string",
              enum: ["VeryLow", "Low", "Medium", "High", "VeryHigh"],
              description: "Loading priority of a resource request."
            },
            {
              id: "Request",
              type: "object",
              description: "HTTP request data.",
              properties: [
                {
                  name: "url",
                  type: "string",
                  description: "Request URL."
                },
                {
                  name: "method",
                  type: "string",
                  description: "HTTP request method."
                },
                {
                  name: "headers",
                  $ref: "Headers",
                  description: "HTTP request headers."
                },
                {
                  name: "postData",
                  type: "string",
                  optional: !0,
                  description: "HTTP POST request data."
                },
                {
                  name: "mixedContentType",
                  optional: !0,
                  type: "string",
                  enum: ["blockable", "optionally-blockable", "none"],
                  description:
                    "The mixed content status of the request, as defined in http://www.w3.org/TR/mixed-content/"
                },
                {
                  name: "initialPriority",
                  $ref: "ResourcePriority",
                  description:
                    "Priority of the resource request at the time request is sent."
                },
                {
                  name: "referrerPolicy",
                  type: "string",
                  enum: [
                    "unsafe-url",
                    "no-referrer-when-downgrade",
                    "no-referrer",
                    "origin",
                    "origin-when-cross-origin",
                    "no-referrer-when-downgrade-origin-when-cross-origin"
                  ],
                  description:
                    "The referrer policy of the request, as defined in https://www.w3.org/TR/referrer-policy/"
                },
                {
                  name: "isLinkPreload",
                  type: "boolean",
                  optional: !0,
                  description: "Whether is loaded via link preload."
                }
              ]
            },
            {
              id: "SignedCertificateTimestamp",
              type: "object",
              description: "Details of a signed certificate timestamp (SCT).",
              properties: [
                {
                  name: "status",
                  type: "string",
                  description: "Validation status."
                },
                {
                  name: "origin",
                  type: "string",
                  description: "Origin."
                },
                {
                  name: "logDescription",
                  type: "string",
                  description: "Log name / description."
                },
                {
                  name: "logId",
                  type: "string",
                  description: "Log ID."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Issuance date."
                },
                {
                  name: "hashAlgorithm",
                  type: "string",
                  description: "Hash algorithm."
                },
                {
                  name: "signatureAlgorithm",
                  type: "string",
                  description: "Signature algorithm."
                },
                {
                  name: "signatureData",
                  type: "string",
                  description: "Signature data."
                }
              ]
            },
            {
              id: "SecurityDetails",
              type: "object",
              description: "Security details about a request.",
              properties: [
                {
                  name: "protocol",
                  type: "string",
                  description: 'Protocol name (e.g. "TLS 1.2" or "QUIC").'
                },
                {
                  name: "keyExchange",
                  type: "string",
                  description:
                    "Key Exchange used by the connection, or the empty string if not applicable."
                },
                {
                  name: "keyExchangeGroup",
                  type: "string",
                  optional: !0,
                  description:
                    "(EC)DH group used by the connection, if applicable."
                },
                {
                  name: "cipher",
                  type: "string",
                  description: "Cipher name."
                },
                {
                  name: "mac",
                  type: "string",
                  optional: !0,
                  description:
                    "TLS MAC. Note that AEAD ciphers do not have separate MACs."
                },
                {
                  name: "certificateId",
                  $ref: "Security.CertificateId",
                  description: "Certificate ID value."
                },
                {
                  name: "subjectName",
                  type: "string",
                  description: "Certificate subject name."
                },
                {
                  name: "sanList",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description:
                    "Subject Alternative Name (SAN) DNS names and IP addresses."
                },
                {
                  name: "issuer",
                  type: "string",
                  description: "Name of the issuing CA."
                },
                {
                  name: "validFrom",
                  $ref: "Timestamp",
                  description: "Certificate valid from date."
                },
                {
                  name: "validTo",
                  $ref: "Timestamp",
                  description: "Certificate valid to (expiration) date"
                },
                {
                  name: "signedCertificateTimestampList",
                  type: "array",
                  items: {
                    $ref: "SignedCertificateTimestamp"
                  },
                  description: "List of signed certificate timestamps (SCTs)."
                }
              ]
            },
            {
              id: "BlockedReason",
              type: "string",
              description: "The reason why request was blocked.",
              enum: [
                "csp",
                "mixed-content",
                "origin",
                "inspector",
                "subresource-filter",
                "other"
              ],
              experimental: !0
            },
            {
              id: "Response",
              type: "object",
              description: "HTTP response data.",
              properties: [
                {
                  name: "url",
                  type: "string",
                  description:
                    "Response URL. This URL can be different from CachedResource.url in case of redirect."
                },
                {
                  name: "status",
                  type: "number",
                  description: "HTTP response status code."
                },
                {
                  name: "statusText",
                  type: "string",
                  description: "HTTP response status text."
                },
                {
                  name: "headers",
                  $ref: "Headers",
                  description: "HTTP response headers."
                },
                {
                  name: "headersText",
                  type: "string",
                  optional: !0,
                  description: "HTTP response headers text."
                },
                {
                  name: "mimeType",
                  type: "string",
                  description: "Resource mimeType as determined by the browser."
                },
                {
                  name: "requestHeaders",
                  $ref: "Headers",
                  optional: !0,
                  description:
                    "Refined HTTP request headers that were actually transmitted over the network."
                },
                {
                  name: "requestHeadersText",
                  type: "string",
                  optional: !0,
                  description: "HTTP request headers text."
                },
                {
                  name: "connectionReused",
                  type: "boolean",
                  description:
                    "Specifies whether physical connection was actually reused for this request."
                },
                {
                  name: "connectionId",
                  type: "number",
                  description:
                    "Physical connection id that was actually used for this request."
                },
                {
                  name: "remoteIPAddress",
                  type: "string",
                  optional: !0,
                  experimental: !0,
                  description: "Remote IP address."
                },
                {
                  name: "remotePort",
                  type: "integer",
                  optional: !0,
                  experimental: !0,
                  description: "Remote port."
                },
                {
                  name: "fromDiskCache",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Specifies that the request was served from the disk cache."
                },
                {
                  name: "fromServiceWorker",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Specifies that the request was served from the ServiceWorker."
                },
                {
                  name: "encodedDataLength",
                  type: "number",
                  optional: !1,
                  description:
                    "Total number of bytes received for this request so far."
                },
                {
                  name: "timing",
                  $ref: "ResourceTiming",
                  optional: !0,
                  description: "Timing information for the given request."
                },
                {
                  name: "protocol",
                  type: "string",
                  optional: !0,
                  description: "Protocol used to fetch this request."
                },
                {
                  name: "securityState",
                  $ref: "Security.SecurityState",
                  description: "Security state of the request resource."
                },
                {
                  name: "securityDetails",
                  $ref: "SecurityDetails",
                  optional: !0,
                  description: "Security details for the request."
                }
              ]
            },
            {
              id: "WebSocketRequest",
              type: "object",
              description: "WebSocket request data.",
              experimental: !0,
              properties: [
                {
                  name: "headers",
                  $ref: "Headers",
                  description: "HTTP request headers."
                }
              ]
            },
            {
              id: "WebSocketResponse",
              type: "object",
              description: "WebSocket response data.",
              experimental: !0,
              properties: [
                {
                  name: "status",
                  type: "number",
                  description: "HTTP response status code."
                },
                {
                  name: "statusText",
                  type: "string",
                  description: "HTTP response status text."
                },
                {
                  name: "headers",
                  $ref: "Headers",
                  description: "HTTP response headers."
                },
                {
                  name: "headersText",
                  type: "string",
                  optional: !0,
                  description: "HTTP response headers text."
                },
                {
                  name: "requestHeaders",
                  $ref: "Headers",
                  optional: !0,
                  description: "HTTP request headers."
                },
                {
                  name: "requestHeadersText",
                  type: "string",
                  optional: !0,
                  description: "HTTP request headers text."
                }
              ]
            },
            {
              id: "WebSocketFrame",
              type: "object",
              description: "WebSocket frame data.",
              experimental: !0,
              properties: [
                {
                  name: "opcode",
                  type: "number",
                  description: "WebSocket frame opcode."
                },
                {
                  name: "mask",
                  type: "boolean",
                  description: "WebSocke frame mask."
                },
                {
                  name: "payloadData",
                  type: "string",
                  description: "WebSocke frame payload data."
                }
              ]
            },
            {
              id: "CachedResource",
              type: "object",
              description: "Information about the cached resource.",
              properties: [
                {
                  name: "url",
                  type: "string",
                  description:
                    "Resource URL. This is the url of the original network request."
                },
                {
                  name: "type",
                  $ref: "Page.ResourceType",
                  description: "Type of this resource."
                },
                {
                  name: "response",
                  $ref: "Response",
                  optional: !0,
                  description: "Cached response data."
                },
                {
                  name: "bodySize",
                  type: "number",
                  description: "Cached response body size."
                }
              ]
            },
            {
              id: "Initiator",
              type: "object",
              description: "Information about the request initiator.",
              properties: [
                {
                  name: "type",
                  type: "string",
                  enum: ["parser", "script", "preload", "other"],
                  description: "Type of this initiator."
                },
                {
                  name: "stack",
                  $ref: "Runtime.StackTrace",
                  optional: !0,
                  description:
                    "Initiator JavaScript stack trace, set for Script only."
                },
                {
                  name: "url",
                  type: "string",
                  optional: !0,
                  description: "Initiator URL, set for Parser type only."
                },
                {
                  name: "lineNumber",
                  type: "number",
                  optional: !0,
                  description:
                    "Initiator line number, set for Parser type only (0-based)."
                }
              ]
            },
            {
              id: "Cookie",
              type: "object",
              description: "Cookie object",
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "Cookie name."
                },
                {
                  name: "value",
                  type: "string",
                  description: "Cookie value."
                },
                {
                  name: "domain",
                  type: "string",
                  description: "Cookie domain."
                },
                {
                  name: "path",
                  type: "string",
                  description: "Cookie path."
                },
                {
                  name: "expires",
                  type: "number",
                  description:
                    "Cookie expiration date as the number of seconds since the UNIX epoch."
                },
                {
                  name: "size",
                  type: "integer",
                  description: "Cookie size."
                },
                {
                  name: "httpOnly",
                  type: "boolean",
                  description: "True if cookie is http-only."
                },
                {
                  name: "secure",
                  type: "boolean",
                  description: "True if cookie is secure."
                },
                {
                  name: "session",
                  type: "boolean",
                  description: "True in case of session cookie."
                },
                {
                  name: "sameSite",
                  $ref: "CookieSameSite",
                  optional: !0,
                  description: "Cookie SameSite type."
                }
              ],
              experimental: !0
            }
          ],
          commands: [
            {
              name: "enable",
              description:
                "Enables network tracking, network events will now be delivered to the client.",
              parameters: [
                {
                  name: "maxTotalBufferSize",
                  type: "integer",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Buffer size in bytes to use when preserving network payloads (XHRs, etc)."
                },
                {
                  name: "maxResourceBufferSize",
                  type: "integer",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Per-resource buffer size in bytes to use when preserving network payloads (XHRs, etc)."
                }
              ]
            },
            {
              name: "disable",
              description:
                "Disables network tracking, prevents network events from being sent to the client."
            },
            {
              name: "setUserAgentOverride",
              description:
                "Allows overriding user agent with the given string.",
              parameters: [
                {
                  name: "userAgent",
                  type: "string",
                  description: "User agent to use."
                }
              ]
            },
            {
              name: "setExtraHTTPHeaders",
              description:
                "Specifies whether to always send extra HTTP headers with the requests from this page.",
              parameters: [
                {
                  name: "headers",
                  $ref: "Headers",
                  description: "Map with extra HTTP headers."
                }
              ]
            },
            {
              name: "getResponseBody",
              description: "Returns content served for the given request.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description:
                    "Identifier of the network request to get content for."
                }
              ],
              returns: [
                {
                  name: "body",
                  type: "string",
                  description: "Response body."
                },
                {
                  name: "base64Encoded",
                  type: "boolean",
                  description: "True, if content was sent as base64."
                }
              ]
            },
            {
              name: "setBlockedURLs",
              description: "Blocks URLs from loading.",
              parameters: [
                {
                  name: "urls",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description:
                    "URL patterns to block. Wildcards ('*') are allowed."
                }
              ],
              experimental: !0
            },
            {
              name: "replayXHR",
              description:
                "This method sends a new XMLHttpRequest which is identical to the original one. The following parameters should be identical: method, url, async, request body, extra headers, withCredentials attribute, user, password.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Identifier of XHR to replay."
                }
              ],
              experimental: !0
            },
            {
              name: "canClearBrowserCache",
              description: "Tells whether clearing browser cache is supported.",
              returns: [
                {
                  name: "result",
                  type: "boolean",
                  description: "True if browser cache can be cleared."
                }
              ]
            },
            {
              name: "clearBrowserCache",
              description: "Clears browser cache."
            },
            {
              name: "canClearBrowserCookies",
              description:
                "Tells whether clearing browser cookies is supported.",
              returns: [
                {
                  name: "result",
                  type: "boolean",
                  description: "True if browser cookies can be cleared."
                }
              ]
            },
            {
              name: "clearBrowserCookies",
              description: "Clears browser cookies."
            },
            {
              name: "getCookies",
              parameters: [
                {
                  name: "urls",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  optional: !0,
                  description:
                    "The list of URLs for which applicable cookies will be fetched"
                }
              ],
              returns: [
                {
                  name: "cookies",
                  type: "array",
                  items: {
                    $ref: "Cookie"
                  },
                  description: "Array of cookie objects."
                }
              ],
              description:
                "Returns all browser cookies for the current URL. Depending on the backend support, will return detailed cookie information in the <code>cookies</code> field.",
              experimental: !0
            },
            {
              name: "getAllCookies",
              returns: [
                {
                  name: "cookies",
                  type: "array",
                  items: {
                    $ref: "Cookie"
                  },
                  description: "Array of cookie objects."
                }
              ],
              description:
                "Returns all browser cookies. Depending on the backend support, will return detailed cookie information in the <code>cookies</code> field.",
              experimental: !0
            },
            {
              name: "deleteCookie",
              parameters: [
                {
                  name: "cookieName",
                  type: "string",
                  description: "Name of the cookie to remove."
                },
                {
                  name: "url",
                  type: "string",
                  description: "URL to match cooke domain and path."
                }
              ],
              description:
                "Deletes browser cookie with given name, domain and path.",
              experimental: !0
            },
            {
              name: "setCookie",
              parameters: [
                {
                  name: "url",
                  type: "string",
                  description:
                    "The request-URI to associate with the setting of the cookie. This value can affect the default domain and path values of the created cookie."
                },
                {
                  name: "name",
                  type: "string",
                  description: "The name of the cookie."
                },
                {
                  name: "value",
                  type: "string",
                  description: "The value of the cookie."
                },
                {
                  name: "domain",
                  type: "string",
                  optional: !0,
                  description:
                    "If omitted, the cookie becomes a host-only cookie."
                },
                {
                  name: "path",
                  type: "string",
                  optional: !0,
                  description:
                    "Defaults to the path portion of the url parameter."
                },
                {
                  name: "secure",
                  type: "boolean",
                  optional: !0,
                  description: "Defaults ot false."
                },
                {
                  name: "httpOnly",
                  type: "boolean",
                  optional: !0,
                  description: "Defaults to false."
                },
                {
                  name: "sameSite",
                  $ref: "CookieSameSite",
                  optional: !0,
                  description: "Defaults to browser default behavior."
                },
                {
                  name: "expirationDate",
                  $ref: "Timestamp",
                  optional: !0,
                  description:
                    "If omitted, the cookie becomes a session cookie."
                }
              ],
              returns: [
                {
                  name: "success",
                  type: "boolean",
                  description: "True if successfully set cookie."
                }
              ],
              description:
                "Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.",
              experimental: !0
            },
            {
              name: "canEmulateNetworkConditions",
              description:
                "Tells whether emulation of network conditions is supported.",
              returns: [
                {
                  name: "result",
                  type: "boolean",
                  description:
                    "True if emulation of network conditions is supported."
                }
              ],
              experimental: !0
            },
            {
              name: "emulateNetworkConditions",
              description: "Activates emulation of network conditions.",
              parameters: [
                {
                  name: "offline",
                  type: "boolean",
                  description: "True to emulate internet disconnection."
                },
                {
                  name: "latency",
                  type: "number",
                  description: "Additional latency (ms)."
                },
                {
                  name: "downloadThroughput",
                  type: "number",
                  description: "Maximal aggregated download throughput."
                },
                {
                  name: "uploadThroughput",
                  type: "number",
                  description: "Maximal aggregated upload throughput."
                },
                {
                  name: "connectionType",
                  $ref: "ConnectionType",
                  optional: !0,
                  description: "Connection type if known."
                }
              ]
            },
            {
              name: "setCacheDisabled",
              parameters: [
                {
                  name: "cacheDisabled",
                  type: "boolean",
                  description: "Cache disabled state."
                }
              ],
              description:
                "Toggles ignoring cache for each request. If <code>true</code>, cache will not be used."
            },
            {
              name: "setBypassServiceWorker",
              parameters: [
                {
                  name: "bypass",
                  type: "boolean",
                  description: "Bypass service worker and load from network."
                }
              ],
              experimental: !0,
              description:
                "Toggles ignoring of service worker for each request."
            },
            {
              name: "setDataSizeLimitsForTest",
              parameters: [
                {
                  name: "maxTotalSize",
                  type: "integer",
                  description: "Maximum total buffer size."
                },
                {
                  name: "maxResourceSize",
                  type: "integer",
                  description: "Maximum per-resource size."
                }
              ],
              description: "For testing.",
              experimental: !0
            },
            {
              name: "getCertificate",
              description: "Returns the DER-encoded certificate.",
              parameters: [
                {
                  name: "origin",
                  type: "string",
                  description: "Origin to get certificate for."
                }
              ],
              returns: [
                {
                  name: "tableNames",
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              ],
              experimental: !0
            },
            {
              name: "enableRequestInterception",
              parameters: [
                {
                  name: "enabled",
                  type: "boolean",
                  description:
                    "Whether or not HTTP requests should be intercepted and Network.requestIntercepted events sent."
                }
              ],
              experimental: !0
            },
            {
              name: "continueInterceptedRequest",
              description:
                "Response to Network.requestIntercepted which either modifies the request to continue with any modifications, or blocks it, or completes it with the provided response bytes. If a network fetch occurs as a result which encounters a redirect an additional Network.requestIntercepted event will be sent with the same InterceptionId.",
              parameters: [
                {
                  name: "interceptionId",
                  $ref: "InterceptionId"
                },
                {
                  name: "errorReason",
                  $ref: "ErrorReason",
                  optional: !0,
                  description:
                    "If set this causes the request to fail with the given reason."
                },
                {
                  name: "rawResponse",
                  type: "string",
                  optional: !0,
                  description:
                    "If set the requests completes using with the provided base64 encoded raw response, including HTTP status line and headers etc..."
                },
                {
                  name: "url",
                  type: "string",
                  optional: !0,
                  description:
                    "If set the request url will be modified in a way that's not observable by page."
                },
                {
                  name: "method",
                  type: "string",
                  optional: !0,
                  description:
                    "If set this allows the request method to be overridden."
                },
                {
                  name: "postData",
                  type: "string",
                  optional: !0,
                  description: "If set this allows postData to be set."
                },
                {
                  name: "headers",
                  $ref: "Headers",
                  optional: !0,
                  description:
                    "If set this allows the request headers to be changed."
                }
              ],
              experimental: !0
            }
          ],
          events: [
            {
              name: "resourceChangedPriority",
              description: "Fired when resource loading priority is changed",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "newPriority",
                  $ref: "ResourcePriority",
                  description: "New priority"
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                }
              ],
              experimental: !0
            },
            {
              name: "requestWillBeSent",
              description: "Fired when page is about to send HTTP request.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "frameId",
                  $ref: "Page.FrameId",
                  description: "Frame identifier.",
                  experimental: !0
                },
                {
                  name: "loaderId",
                  $ref: "LoaderId",
                  description: "Loader identifier."
                },
                {
                  name: "documentURL",
                  type: "string",
                  description: "URL of the document this request is loaded for."
                },
                {
                  name: "request",
                  $ref: "Request",
                  description: "Request data."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                },
                {
                  name: "wallTime",
                  $ref: "Timestamp",
                  experimental: !0,
                  description: "UTC Timestamp."
                },
                {
                  name: "initiator",
                  $ref: "Initiator",
                  description: "Request initiator."
                },
                {
                  name: "redirectResponse",
                  optional: !0,
                  $ref: "Response",
                  description: "Redirect response data."
                },
                {
                  name: "type",
                  $ref: "Page.ResourceType",
                  optional: !0,
                  experimental: !0,
                  description: "Type of this resource."
                }
              ]
            },
            {
              name: "requestServedFromCache",
              description: "Fired if request ended up loading from cache.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                }
              ]
            },
            {
              name: "responseReceived",
              description: "Fired when HTTP response is available.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "frameId",
                  $ref: "Page.FrameId",
                  description: "Frame identifier.",
                  experimental: !0
                },
                {
                  name: "loaderId",
                  $ref: "LoaderId",
                  description: "Loader identifier."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                },
                {
                  name: "type",
                  $ref: "Page.ResourceType",
                  description: "Resource type."
                },
                {
                  name: "response",
                  $ref: "Response",
                  description: "Response data."
                }
              ]
            },
            {
              name: "dataReceived",
              description:
                "Fired when data chunk was received over the network.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                },
                {
                  name: "dataLength",
                  type: "integer",
                  description: "Data chunk length."
                },
                {
                  name: "encodedDataLength",
                  type: "integer",
                  description:
                    "Actual bytes received (might be less than dataLength for compressed encodings)."
                }
              ]
            },
            {
              name: "loadingFinished",
              description: "Fired when HTTP request has finished loading.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                },
                {
                  name: "encodedDataLength",
                  type: "number",
                  description:
                    "Total number of bytes received for this request."
                }
              ]
            },
            {
              name: "loadingFailed",
              description: "Fired when HTTP request has failed to load.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                },
                {
                  name: "type",
                  $ref: "Page.ResourceType",
                  description: "Resource type."
                },
                {
                  name: "errorText",
                  type: "string",
                  description: "User friendly error message."
                },
                {
                  name: "canceled",
                  type: "boolean",
                  optional: !0,
                  description: "True if loading was canceled."
                },
                {
                  name: "blockedReason",
                  $ref: "BlockedReason",
                  optional: !0,
                  description: "The reason why loading was blocked, if any.",
                  experimental: !0
                }
              ]
            },
            {
              name: "webSocketWillSendHandshakeRequest",
              description:
                "Fired when WebSocket is about to initiate handshake.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                },
                {
                  name: "wallTime",
                  $ref: "Timestamp",
                  experimental: !0,
                  description: "UTC Timestamp."
                },
                {
                  name: "request",
                  $ref: "WebSocketRequest",
                  description: "WebSocket request data."
                }
              ],
              experimental: !0
            },
            {
              name: "webSocketHandshakeResponseReceived",
              description:
                "Fired when WebSocket handshake response becomes available.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                },
                {
                  name: "response",
                  $ref: "WebSocketResponse",
                  description: "WebSocket response data."
                }
              ],
              experimental: !0
            },
            {
              name: "webSocketCreated",
              description: "Fired upon WebSocket creation.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "url",
                  type: "string",
                  description: "WebSocket request URL."
                },
                {
                  name: "initiator",
                  $ref: "Initiator",
                  optional: !0,
                  description: "Request initiator."
                }
              ],
              experimental: !0
            },
            {
              name: "webSocketClosed",
              description: "Fired when WebSocket is closed.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                }
              ],
              experimental: !0
            },
            {
              name: "webSocketFrameReceived",
              description: "Fired when WebSocket frame is received.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                },
                {
                  name: "response",
                  $ref: "WebSocketFrame",
                  description: "WebSocket response data."
                }
              ],
              experimental: !0
            },
            {
              name: "webSocketFrameError",
              description: "Fired when WebSocket frame error occurs.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                },
                {
                  name: "errorMessage",
                  type: "string",
                  description: "WebSocket frame error message."
                }
              ],
              experimental: !0
            },
            {
              name: "webSocketFrameSent",
              description: "Fired when WebSocket frame is sent.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                },
                {
                  name: "response",
                  $ref: "WebSocketFrame",
                  description: "WebSocket response data."
                }
              ],
              experimental: !0
            },
            {
              name: "eventSourceMessageReceived",
              description: "Fired when EventSource message is received.",
              parameters: [
                {
                  name: "requestId",
                  $ref: "RequestId",
                  description: "Request identifier."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp."
                },
                {
                  name: "eventName",
                  type: "string",
                  description: "Message type."
                },
                {
                  name: "eventId",
                  type: "string",
                  description: "Message identifier."
                },
                {
                  name: "data",
                  type: "string",
                  description: "Message content."
                }
              ],
              experimental: !0
            },
            {
              name: "requestIntercepted",
              description:
                "Details of an intercepted HTTP request, which must be either allowed, blocked, modified or mocked.",
              parameters: [
                {
                  name: "InterceptionId",
                  $ref: "InterceptionId",
                  description:
                    "Each request the page makes will have a unique id, however if any redirects are encountered while processing that fetch, they will be reported with the same id as the original fetch."
                },
                {
                  name: "request",
                  $ref: "Request"
                },
                {
                  name: "redirectHeaders",
                  $ref: "Headers",
                  optional: !0,
                  description:
                    "HTTP response headers, only sent if a redirect was intercepted."
                },
                {
                  name: "redirectStatusCode",
                  type: "integer",
                  optional: !0,
                  description:
                    "HTTP response code, only sent if a redirect was intercepted."
                },
                {
                  name: "redirectUrl",
                  optional: !0,
                  type: "string",
                  description:
                    "Redirect location, only sent if a redirect was intercepted."
                }
              ],
              experimental: !0
            }
          ]
        },
        {
          domain: "Database",
          experimental: !0,
          types: [
            {
              id: "DatabaseId",
              type: "string",
              description: "Unique identifier of Database object.",
              experimental: !0
            },
            {
              id: "Database",
              type: "object",
              description: "Database object.",
              experimental: !0,
              properties: [
                {
                  name: "id",
                  $ref: "DatabaseId",
                  description: "Database ID."
                },
                {
                  name: "domain",
                  type: "string",
                  description: "Database domain."
                },
                {
                  name: "name",
                  type: "string",
                  description: "Database name."
                },
                {
                  name: "version",
                  type: "string",
                  description: "Database version."
                }
              ]
            },
            {
              id: "Error",
              type: "object",
              description: "Database error.",
              properties: [
                {
                  name: "message",
                  type: "string",
                  description: "Error message."
                },
                {
                  name: "code",
                  type: "integer",
                  description: "Error code."
                }
              ]
            }
          ],
          commands: [
            {
              name: "enable",
              description:
                "Enables database tracking, database events will now be delivered to the client."
            },
            {
              name: "disable",
              description:
                "Disables database tracking, prevents database events from being sent to the client."
            },
            {
              name: "getDatabaseTableNames",
              parameters: [
                {
                  name: "databaseId",
                  $ref: "DatabaseId"
                }
              ],
              returns: [
                {
                  name: "tableNames",
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              ]
            },
            {
              name: "executeSQL",
              parameters: [
                {
                  name: "databaseId",
                  $ref: "DatabaseId"
                },
                {
                  name: "query",
                  type: "string"
                }
              ],
              returns: [
                {
                  name: "columnNames",
                  type: "array",
                  optional: !0,
                  items: {
                    type: "string"
                  }
                },
                {
                  name: "values",
                  type: "array",
                  optional: !0,
                  items: {
                    type: "any"
                  }
                },
                {
                  name: "sqlError",
                  $ref: "Error",
                  optional: !0
                }
              ]
            }
          ],
          events: [
            {
              name: "addDatabase",
              parameters: [
                {
                  name: "database",
                  $ref: "Database"
                }
              ]
            }
          ]
        },
        {
          domain: "IndexedDB",
          dependencies: ["Runtime"],
          experimental: !0,
          types: [
            {
              id: "DatabaseWithObjectStores",
              type: "object",
              description: "Database with an array of object stores.",
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "Database name."
                },
                {
                  name: "version",
                  type: "integer",
                  description: "Database version."
                },
                {
                  name: "objectStores",
                  type: "array",
                  items: {
                    $ref: "ObjectStore"
                  },
                  description: "Object stores in this database."
                }
              ]
            },
            {
              id: "ObjectStore",
              type: "object",
              description: "Object store.",
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "Object store name."
                },
                {
                  name: "keyPath",
                  $ref: "KeyPath",
                  description: "Object store key path."
                },
                {
                  name: "autoIncrement",
                  type: "boolean",
                  description:
                    "If true, object store has auto increment flag set."
                },
                {
                  name: "indexes",
                  type: "array",
                  items: {
                    $ref: "ObjectStoreIndex"
                  },
                  description: "Indexes in this object store."
                }
              ]
            },
            {
              id: "ObjectStoreIndex",
              type: "object",
              description: "Object store index.",
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "Index name."
                },
                {
                  name: "keyPath",
                  $ref: "KeyPath",
                  description: "Index key path."
                },
                {
                  name: "unique",
                  type: "boolean",
                  description: "If true, index is unique."
                },
                {
                  name: "multiEntry",
                  type: "boolean",
                  description:
                    "If true, index allows multiple entries for a key."
                }
              ]
            },
            {
              id: "Key",
              type: "object",
              description: "Key.",
              properties: [
                {
                  name: "type",
                  type: "string",
                  enum: ["number", "string", "date", "array"],
                  description: "Key type."
                },
                {
                  name: "number",
                  type: "number",
                  optional: !0,
                  description: "Number value."
                },
                {
                  name: "string",
                  type: "string",
                  optional: !0,
                  description: "String value."
                },
                {
                  name: "date",
                  type: "number",
                  optional: !0,
                  description: "Date value."
                },
                {
                  name: "array",
                  type: "array",
                  optional: !0,
                  items: {
                    $ref: "Key"
                  },
                  description: "Array value."
                }
              ]
            },
            {
              id: "KeyRange",
              type: "object",
              description: "Key range.",
              properties: [
                {
                  name: "lower",
                  $ref: "Key",
                  optional: !0,
                  description: "Lower bound."
                },
                {
                  name: "upper",
                  $ref: "Key",
                  optional: !0,
                  description: "Upper bound."
                },
                {
                  name: "lowerOpen",
                  type: "boolean",
                  description: "If true lower bound is open."
                },
                {
                  name: "upperOpen",
                  type: "boolean",
                  description: "If true upper bound is open."
                }
              ]
            },
            {
              id: "DataEntry",
              type: "object",
              description: "Data entry.",
              properties: [
                {
                  name: "key",
                  $ref: "Runtime.RemoteObject",
                  description: "Key object."
                },
                {
                  name: "primaryKey",
                  $ref: "Runtime.RemoteObject",
                  description: "Primary key object."
                },
                {
                  name: "value",
                  $ref: "Runtime.RemoteObject",
                  description: "Value object."
                }
              ]
            },
            {
              id: "KeyPath",
              type: "object",
              description: "Key path.",
              properties: [
                {
                  name: "type",
                  type: "string",
                  enum: ["null", "string", "array"],
                  description: "Key path type."
                },
                {
                  name: "string",
                  type: "string",
                  optional: !0,
                  description: "String value."
                },
                {
                  name: "array",
                  type: "array",
                  optional: !0,
                  items: {
                    type: "string"
                  },
                  description: "Array value."
                }
              ]
            }
          ],
          commands: [
            {
              name: "enable",
              description: "Enables events from backend."
            },
            {
              name: "disable",
              description: "Disables events from backend."
            },
            {
              name: "requestDatabaseNames",
              parameters: [
                {
                  name: "securityOrigin",
                  type: "string",
                  description: "Security origin."
                }
              ],
              returns: [
                {
                  name: "databaseNames",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "Database names for origin."
                }
              ],
              description: "Requests database names for given security origin."
            },
            {
              name: "requestDatabase",
              parameters: [
                {
                  name: "securityOrigin",
                  type: "string",
                  description: "Security origin."
                },
                {
                  name: "databaseName",
                  type: "string",
                  description: "Database name."
                }
              ],
              returns: [
                {
                  name: "databaseWithObjectStores",
                  $ref: "DatabaseWithObjectStores",
                  description: "Database with an array of object stores."
                }
              ],
              description: "Requests database with given name in given frame."
            },
            {
              name: "requestData",
              parameters: [
                {
                  name: "securityOrigin",
                  type: "string",
                  description: "Security origin."
                },
                {
                  name: "databaseName",
                  type: "string",
                  description: "Database name."
                },
                {
                  name: "objectStoreName",
                  type: "string",
                  description: "Object store name."
                },
                {
                  name: "indexName",
                  type: "string",
                  description:
                    "Index name, empty string for object store data requests."
                },
                {
                  name: "skipCount",
                  type: "integer",
                  description: "Number of records to skip."
                },
                {
                  name: "pageSize",
                  type: "integer",
                  description: "Number of records to fetch."
                },
                {
                  name: "keyRange",
                  $ref: "KeyRange",
                  optional: !0,
                  description: "Key range."
                }
              ],
              returns: [
                {
                  name: "objectStoreDataEntries",
                  type: "array",
                  items: {
                    $ref: "DataEntry"
                  },
                  description: "Array of object store data entries."
                },
                {
                  name: "hasMore",
                  type: "boolean",
                  description:
                    "If true, there are more entries to fetch in the given range."
                }
              ],
              description: "Requests data from object store or index."
            },
            {
              name: "clearObjectStore",
              parameters: [
                {
                  name: "securityOrigin",
                  type: "string",
                  description: "Security origin."
                },
                {
                  name: "databaseName",
                  type: "string",
                  description: "Database name."
                },
                {
                  name: "objectStoreName",
                  type: "string",
                  description: "Object store name."
                }
              ],
              returns: [],
              description: "Clears all entries from an object store."
            },
            {
              name: "deleteDatabase",
              parameters: [
                {
                  name: "securityOrigin",
                  type: "string",
                  description: "Security origin."
                },
                {
                  name: "databaseName",
                  type: "string",
                  description: "Database name."
                }
              ],
              returns: [],
              description: "Deletes a database."
            }
          ]
        },
        {
          domain: "CacheStorage",
          experimental: !0,
          types: [
            {
              id: "CacheId",
              type: "string",
              description: "Unique identifier of the Cache object."
            },
            {
              id: "DataEntry",
              type: "object",
              description: "Data entry.",
              properties: [
                {
                  name: "request",
                  type: "string",
                  description: "Request url spec."
                },
                {
                  name: "response",
                  type: "string",
                  description: "Response stataus text."
                }
              ]
            },
            {
              id: "Cache",
              type: "object",
              description: "Cache identifier.",
              properties: [
                {
                  name: "cacheId",
                  $ref: "CacheId",
                  description: "An opaque unique id of the cache."
                },
                {
                  name: "securityOrigin",
                  type: "string",
                  description: "Security origin of the cache."
                },
                {
                  name: "cacheName",
                  type: "string",
                  description: "The name of the cache."
                }
              ]
            }
          ],
          commands: [
            {
              name: "requestCacheNames",
              parameters: [
                {
                  name: "securityOrigin",
                  type: "string",
                  description: "Security origin."
                }
              ],
              returns: [
                {
                  name: "caches",
                  type: "array",
                  items: {
                    $ref: "Cache"
                  },
                  description: "Caches for the security origin."
                }
              ],
              description: "Requests cache names."
            },
            {
              name: "requestEntries",
              parameters: [
                {
                  name: "cacheId",
                  $ref: "CacheId",
                  description: "ID of cache to get entries from."
                },
                {
                  name: "skipCount",
                  type: "integer",
                  description: "Number of records to skip."
                },
                {
                  name: "pageSize",
                  type: "integer",
                  description: "Number of records to fetch."
                }
              ],
              returns: [
                {
                  name: "cacheDataEntries",
                  type: "array",
                  items: {
                    $ref: "DataEntry"
                  },
                  description: "Array of object store data entries."
                },
                {
                  name: "hasMore",
                  type: "boolean",
                  description:
                    "If true, there are more entries to fetch in the given range."
                }
              ],
              description: "Requests data from cache."
            },
            {
              name: "deleteCache",
              parameters: [
                {
                  name: "cacheId",
                  $ref: "CacheId",
                  description: "Id of cache for deletion."
                }
              ],
              description: "Deletes a cache."
            },
            {
              name: "deleteEntry",
              parameters: [
                {
                  name: "cacheId",
                  $ref: "CacheId",
                  description: "Id of cache where the entry will be deleted."
                },
                {
                  name: "request",
                  type: "string",
                  description: "URL spec of the request."
                }
              ],
              description: "Deletes a cache entry."
            }
          ]
        },
        {
          domain: "DOMStorage",
          experimental: !0,
          description: "Query and modify DOM storage.",
          types: [
            {
              id: "StorageId",
              type: "object",
              description: "DOM Storage identifier.",
              experimental: !0,
              properties: [
                {
                  name: "securityOrigin",
                  type: "string",
                  description: "Security origin for the storage."
                },
                {
                  name: "isLocalStorage",
                  type: "boolean",
                  description:
                    "Whether the storage is local storage (not session storage)."
                }
              ]
            },
            {
              id: "Item",
              type: "array",
              description: "DOM Storage item.",
              experimental: !0,
              items: {
                type: "string"
              }
            }
          ],
          commands: [
            {
              name: "enable",
              description:
                "Enables storage tracking, storage events will now be delivered to the client."
            },
            {
              name: "disable",
              description:
                "Disables storage tracking, prevents storage events from being sent to the client."
            },
            {
              name: "clear",
              parameters: [
                {
                  name: "storageId",
                  $ref: "StorageId"
                }
              ]
            },
            {
              name: "getDOMStorageItems",
              parameters: [
                {
                  name: "storageId",
                  $ref: "StorageId"
                }
              ],
              returns: [
                {
                  name: "entries",
                  type: "array",
                  items: {
                    $ref: "Item"
                  }
                }
              ]
            },
            {
              name: "setDOMStorageItem",
              parameters: [
                {
                  name: "storageId",
                  $ref: "StorageId"
                },
                {
                  name: "key",
                  type: "string"
                },
                {
                  name: "value",
                  type: "string"
                }
              ]
            },
            {
              name: "removeDOMStorageItem",
              parameters: [
                {
                  name: "storageId",
                  $ref: "StorageId"
                },
                {
                  name: "key",
                  type: "string"
                }
              ]
            }
          ],
          events: [
            {
              name: "domStorageItemsCleared",
              parameters: [
                {
                  name: "storageId",
                  $ref: "StorageId"
                }
              ]
            },
            {
              name: "domStorageItemRemoved",
              parameters: [
                {
                  name: "storageId",
                  $ref: "StorageId"
                },
                {
                  name: "key",
                  type: "string"
                }
              ]
            },
            {
              name: "domStorageItemAdded",
              parameters: [
                {
                  name: "storageId",
                  $ref: "StorageId"
                },
                {
                  name: "key",
                  type: "string"
                },
                {
                  name: "newValue",
                  type: "string"
                }
              ]
            },
            {
              name: "domStorageItemUpdated",
              parameters: [
                {
                  name: "storageId",
                  $ref: "StorageId"
                },
                {
                  name: "key",
                  type: "string"
                },
                {
                  name: "oldValue",
                  type: "string"
                },
                {
                  name: "newValue",
                  type: "string"
                }
              ]
            }
          ]
        },
        {
          domain: "ApplicationCache",
          experimental: !0,
          types: [
            {
              id: "ApplicationCacheResource",
              type: "object",
              description: "Detailed application cache resource information.",
              properties: [
                {
                  name: "url",
                  type: "string",
                  description: "Resource url."
                },
                {
                  name: "size",
                  type: "integer",
                  description: "Resource size."
                },
                {
                  name: "type",
                  type: "string",
                  description: "Resource type."
                }
              ]
            },
            {
              id: "ApplicationCache",
              type: "object",
              description: "Detailed application cache information.",
              properties: [
                {
                  name: "manifestURL",
                  type: "string",
                  description: "Manifest URL."
                },
                {
                  name: "size",
                  type: "number",
                  description: "Application cache size."
                },
                {
                  name: "creationTime",
                  type: "number",
                  description: "Application cache creation time."
                },
                {
                  name: "updateTime",
                  type: "number",
                  description: "Application cache update time."
                },
                {
                  name: "resources",
                  type: "array",
                  items: {
                    $ref: "ApplicationCacheResource"
                  },
                  description: "Application cache resources."
                }
              ]
            },
            {
              id: "FrameWithManifest",
              type: "object",
              description: "Frame identifier - manifest URL pair.",
              properties: [
                {
                  name: "frameId",
                  $ref: "Page.FrameId",
                  description: "Frame identifier."
                },
                {
                  name: "manifestURL",
                  type: "string",
                  description: "Manifest URL."
                },
                {
                  name: "status",
                  type: "integer",
                  description: "Application cache status."
                }
              ]
            }
          ],
          commands: [
            {
              name: "getFramesWithManifests",
              returns: [
                {
                  name: "frameIds",
                  type: "array",
                  items: {
                    $ref: "FrameWithManifest"
                  },
                  description:
                    "Array of frame identifiers with manifest urls for each frame containing a document associated with some application cache."
                }
              ],
              description:
                "Returns array of frame identifiers with manifest urls for each frame containing a document associated with some application cache."
            },
            {
              name: "enable",
              description: "Enables application cache domain notifications."
            },
            {
              name: "getManifestForFrame",
              parameters: [
                {
                  name: "frameId",
                  $ref: "Page.FrameId",
                  description:
                    "Identifier of the frame containing document whose manifest is retrieved."
                }
              ],
              returns: [
                {
                  name: "manifestURL",
                  type: "string",
                  description: "Manifest URL for document in the given frame."
                }
              ],
              description:
                "Returns manifest URL for document in the given frame."
            },
            {
              name: "getApplicationCacheForFrame",
              parameters: [
                {
                  name: "frameId",
                  $ref: "Page.FrameId",
                  description:
                    "Identifier of the frame containing document whose application cache is retrieved."
                }
              ],
              returns: [
                {
                  name: "applicationCache",
                  $ref: "ApplicationCache",
                  description:
                    "Relevant application cache data for the document in given frame."
                }
              ],
              description:
                "Returns relevant application cache data for the document in given frame."
            }
          ],
          events: [
            {
              name: "applicationCacheStatusUpdated",
              parameters: [
                {
                  name: "frameId",
                  $ref: "Page.FrameId",
                  description:
                    "Identifier of the frame containing document whose application cache updated status."
                },
                {
                  name: "manifestURL",
                  type: "string",
                  description: "Manifest URL."
                },
                {
                  name: "status",
                  type: "integer",
                  description: "Updated application cache status."
                }
              ]
            },
            {
              name: "networkStateUpdated",
              parameters: [
                {
                  name: "isNowOnline",
                  type: "boolean"
                }
              ]
            }
          ]
        },
        {
          domain: "DOM",
          description:
            "This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror object that has an <code>id</code>. This <code>id</code> can be used to get additional information on the Node, resolve it into the JavaScript object wrapper, etc. It is important that client receives DOM events only for the nodes that are known to the client. Backend keeps track of the nodes that were sent to the client and never sends the same node twice. It is client's responsibility to collect information about the nodes that were sent to the client.<p>Note that <code>iframe</code> owner elements will return corresponding document elements as their child nodes.</p>",
          dependencies: ["Runtime"],
          types: [
            {
              id: "NodeId",
              type: "integer",
              description: "Unique DOM node identifier."
            },
            {
              id: "BackendNodeId",
              type: "integer",
              description:
                "Unique DOM node identifier used to reference a node that may not have been pushed to the front-end.",
              experimental: !0
            },
            {
              id: "BackendNode",
              type: "object",
              properties: [
                {
                  name: "nodeType",
                  type: "integer",
                  description: "<code>Node</code>'s nodeType."
                },
                {
                  name: "nodeName",
                  type: "string",
                  description: "<code>Node</code>'s nodeName."
                },
                {
                  name: "backendNodeId",
                  $ref: "BackendNodeId"
                }
              ],
              experimental: !0,
              description: "Backend node with a friendly name."
            },
            {
              id: "PseudoType",
              type: "string",
              enum: [
                "first-line",
                "first-letter",
                "before",
                "after",
                "backdrop",
                "selection",
                "first-line-inherited",
                "scrollbar",
                "scrollbar-thumb",
                "scrollbar-button",
                "scrollbar-track",
                "scrollbar-track-piece",
                "scrollbar-corner",
                "resizer",
                "input-list-button"
              ],
              description: "Pseudo element type."
            },
            {
              id: "ShadowRootType",
              type: "string",
              enum: ["user-agent", "open", "closed"],
              description: "Shadow root type."
            },
            {
              id: "Node",
              type: "object",
              properties: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description:
                    "Node identifier that is passed into the rest of the DOM messages as the <code>nodeId</code>. Backend will only push node with given <code>id</code> once. It is aware of all requested nodes and will only fire DOM events for nodes known to the client."
                },
                {
                  name: "parentId",
                  $ref: "NodeId",
                  optional: !0,
                  description: "The id of the parent node if any.",
                  experimental: !0
                },
                {
                  name: "backendNodeId",
                  $ref: "BackendNodeId",
                  description: "The BackendNodeId for this node.",
                  experimental: !0
                },
                {
                  name: "nodeType",
                  type: "integer",
                  description: "<code>Node</code>'s nodeType."
                },
                {
                  name: "nodeName",
                  type: "string",
                  description: "<code>Node</code>'s nodeName."
                },
                {
                  name: "localName",
                  type: "string",
                  description: "<code>Node</code>'s localName."
                },
                {
                  name: "nodeValue",
                  type: "string",
                  description: "<code>Node</code>'s nodeValue."
                },
                {
                  name: "childNodeCount",
                  type: "integer",
                  optional: !0,
                  description: "Child count for <code>Container</code> nodes."
                },
                {
                  name: "children",
                  type: "array",
                  optional: !0,
                  items: {
                    $ref: "Node"
                  },
                  description:
                    "Child nodes of this node when requested with children."
                },
                {
                  name: "attributes",
                  type: "array",
                  optional: !0,
                  items: {
                    type: "string"
                  },
                  description:
                    "Attributes of the <code>Element</code> node in the form of flat array <code>[name1, value1, name2, value2]</code>."
                },
                {
                  name: "documentURL",
                  type: "string",
                  optional: !0,
                  description:
                    "Document URL that <code>Document</code> or <code>FrameOwner</code> node points to."
                },
                {
                  name: "baseURL",
                  type: "string",
                  optional: !0,
                  description:
                    "Base URL that <code>Document</code> or <code>FrameOwner</code> node uses for URL completion.",
                  experimental: !0
                },
                {
                  name: "publicId",
                  type: "string",
                  optional: !0,
                  description: "<code>DocumentType</code>'s publicId."
                },
                {
                  name: "systemId",
                  type: "string",
                  optional: !0,
                  description: "<code>DocumentType</code>'s systemId."
                },
                {
                  name: "internalSubset",
                  type: "string",
                  optional: !0,
                  description: "<code>DocumentType</code>'s internalSubset."
                },
                {
                  name: "xmlVersion",
                  type: "string",
                  optional: !0,
                  description:
                    "<code>Document</code>'s XML version in case of XML documents."
                },
                {
                  name: "name",
                  type: "string",
                  optional: !0,
                  description: "<code>Attr</code>'s name."
                },
                {
                  name: "value",
                  type: "string",
                  optional: !0,
                  description: "<code>Attr</code>'s value."
                },
                {
                  name: "pseudoType",
                  $ref: "PseudoType",
                  optional: !0,
                  description: "Pseudo element type for this node."
                },
                {
                  name: "shadowRootType",
                  $ref: "ShadowRootType",
                  optional: !0,
                  description: "Shadow root type."
                },
                {
                  name: "frameId",
                  $ref: "Page.FrameId",
                  optional: !0,
                  description: "Frame ID for frame owner elements.",
                  experimental: !0
                },
                {
                  name: "contentDocument",
                  $ref: "Node",
                  optional: !0,
                  description: "Content document for frame owner elements."
                },
                {
                  name: "shadowRoots",
                  type: "array",
                  optional: !0,
                  items: {
                    $ref: "Node"
                  },
                  description: "Shadow root list for given element host.",
                  experimental: !0
                },
                {
                  name: "templateContent",
                  $ref: "Node",
                  optional: !0,
                  description:
                    "Content document fragment for template elements.",
                  experimental: !0
                },
                {
                  name: "pseudoElements",
                  type: "array",
                  items: {
                    $ref: "Node"
                  },
                  optional: !0,
                  description: "Pseudo elements associated with this node.",
                  experimental: !0
                },
                {
                  name: "importedDocument",
                  $ref: "Node",
                  optional: !0,
                  description: "Import document for the HTMLImport links."
                },
                {
                  name: "distributedNodes",
                  type: "array",
                  items: {
                    $ref: "BackendNode"
                  },
                  optional: !0,
                  description: "Distributed nodes for given insertion point.",
                  experimental: !0
                },
                {
                  name: "isSVG",
                  type: "boolean",
                  optional: !0,
                  description: "Whether the node is SVG.",
                  experimental: !0
                }
              ],
              description:
                "DOM interaction is implemented in terms of mirror objects that represent the actual DOM nodes. DOMNode is a base node mirror type."
            },
            {
              id: "RGBA",
              type: "object",
              properties: [
                {
                  name: "r",
                  type: "integer",
                  description: "The red component, in the [0-255] range."
                },
                {
                  name: "g",
                  type: "integer",
                  description: "The green component, in the [0-255] range."
                },
                {
                  name: "b",
                  type: "integer",
                  description: "The blue component, in the [0-255] range."
                },
                {
                  name: "a",
                  type: "number",
                  optional: !0,
                  description:
                    "The alpha component, in the [0-1] range (default: 1)."
                }
              ],
              description: "A structure holding an RGBA color."
            },
            {
              id: "Quad",
              type: "array",
              items: {
                type: "number"
              },
              minItems: 8,
              maxItems: 8,
              description:
                "An array of quad vertices, x immediately followed by y for each point, points clock-wise.",
              experimental: !0
            },
            {
              id: "BoxModel",
              type: "object",
              experimental: !0,
              properties: [
                {
                  name: "content",
                  $ref: "Quad",
                  description: "Content box"
                },
                {
                  name: "padding",
                  $ref: "Quad",
                  description: "Padding box"
                },
                {
                  name: "border",
                  $ref: "Quad",
                  description: "Border box"
                },
                {
                  name: "margin",
                  $ref: "Quad",
                  description: "Margin box"
                },
                {
                  name: "width",
                  type: "integer",
                  description: "Node width"
                },
                {
                  name: "height",
                  type: "integer",
                  description: "Node height"
                },
                {
                  name: "shapeOutside",
                  $ref: "ShapeOutsideInfo",
                  optional: !0,
                  description: "Shape outside coordinates"
                }
              ],
              description: "Box model."
            },
            {
              id: "ShapeOutsideInfo",
              type: "object",
              experimental: !0,
              properties: [
                {
                  name: "bounds",
                  $ref: "Quad",
                  description: "Shape bounds"
                },
                {
                  name: "shape",
                  type: "array",
                  items: {
                    type: "any"
                  },
                  description: "Shape coordinate details"
                },
                {
                  name: "marginShape",
                  type: "array",
                  items: {
                    type: "any"
                  },
                  description: "Margin shape bounds"
                }
              ],
              description: "CSS Shape Outside details."
            },
            {
              id: "Rect",
              type: "object",
              experimental: !0,
              properties: [
                {
                  name: "x",
                  type: "number",
                  description: "X coordinate"
                },
                {
                  name: "y",
                  type: "number",
                  description: "Y coordinate"
                },
                {
                  name: "width",
                  type: "number",
                  description: "Rectangle width"
                },
                {
                  name: "height",
                  type: "number",
                  description: "Rectangle height"
                }
              ],
              description: "Rectangle."
            }
          ],
          commands: [
            {
              name: "enable",
              description: "Enables DOM agent for the given page."
            },
            {
              name: "disable",
              description: "Disables DOM agent for the given page."
            },
            {
              name: "getDocument",
              parameters: [
                {
                  name: "depth",
                  type: "integer",
                  optional: !0,
                  description:
                    "The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the entire subtree or provide an integer larger than 0.",
                  experimental: !0
                },
                {
                  name: "pierce",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether or not iframes and shadow roots should be traversed when returning the subtree (default is false).",
                  experimental: !0
                }
              ],
              returns: [
                {
                  name: "root",
                  $ref: "Node",
                  description: "Resulting node."
                }
              ],
              description:
                "Returns the root DOM node (and optionally the subtree) to the caller."
            },
            {
              name: "getFlattenedDocument",
              parameters: [
                {
                  name: "depth",
                  type: "integer",
                  optional: !0,
                  description:
                    "The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the entire subtree or provide an integer larger than 0.",
                  experimental: !0
                },
                {
                  name: "pierce",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether or not iframes and shadow roots should be traversed when returning the subtree (default is false).",
                  experimental: !0
                }
              ],
              returns: [
                {
                  name: "nodes",
                  type: "array",
                  items: {
                    $ref: "Node"
                  },
                  description: "Resulting node."
                }
              ],
              description:
                "Returns the root DOM node (and optionally the subtree) to the caller."
            },
            {
              name: "collectClassNamesFromSubtree",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to collect class names."
                }
              ],
              returns: [
                {
                  name: "classNames",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "Class name list."
                }
              ],
              description:
                "Collects class names for the node with given id and all of it's child nodes.",
              experimental: !0
            },
            {
              name: "requestChildNodes",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to get children for."
                },
                {
                  name: "depth",
                  type: "integer",
                  optional: !0,
                  description:
                    "The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the entire subtree or provide an integer larger than 0.",
                  experimental: !0
                },
                {
                  name: "pierce",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether or not iframes and shadow roots should be traversed when returning the sub-tree (default is false).",
                  experimental: !0
                }
              ],
              description:
                "Requests that children of the node with given id are returned to the caller in form of <code>setChildNodes</code> events where not only immediate children are retrieved, but all children down to the specified depth."
            },
            {
              name: "querySelector",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to query upon."
                },
                {
                  name: "selector",
                  type: "string",
                  description: "Selector string."
                }
              ],
              returns: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Query selector result."
                }
              ],
              description:
                "Executes <code>querySelector</code> on a given node."
            },
            {
              name: "querySelectorAll",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to query upon."
                },
                {
                  name: "selector",
                  type: "string",
                  description: "Selector string."
                }
              ],
              returns: [
                {
                  name: "nodeIds",
                  type: "array",
                  items: {
                    $ref: "NodeId"
                  },
                  description: "Query selector result."
                }
              ],
              description:
                "Executes <code>querySelectorAll</code> on a given node."
            },
            {
              name: "setNodeName",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to set name for."
                },
                {
                  name: "name",
                  type: "string",
                  description: "New node's name."
                }
              ],
              returns: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "New node's id."
                }
              ],
              description: "Sets node name for a node with given id."
            },
            {
              name: "setNodeValue",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to set value for."
                },
                {
                  name: "value",
                  type: "string",
                  description: "New node's value."
                }
              ],
              description: "Sets node value for a node with given id."
            },
            {
              name: "removeNode",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to remove."
                }
              ],
              description: "Removes node with given id."
            },
            {
              name: "setAttributeValue",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the element to set attribute for."
                },
                {
                  name: "name",
                  type: "string",
                  description: "Attribute name."
                },
                {
                  name: "value",
                  type: "string",
                  description: "Attribute value."
                }
              ],
              description: "Sets attribute for an element with given id."
            },
            {
              name: "setAttributesAsText",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the element to set attributes for."
                },
                {
                  name: "text",
                  type: "string",
                  description:
                    "Text with a number of attributes. Will parse this text using HTML parser."
                },
                {
                  name: "name",
                  type: "string",
                  optional: !0,
                  description:
                    "Attribute name to replace with new attributes derived from text in case text parsed successfully."
                }
              ],
              description:
                "Sets attributes on element with given id. This method is useful when user edits some existing attribute value and types in several attribute name/value pairs."
            },
            {
              name: "removeAttribute",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the element to remove attribute from."
                },
                {
                  name: "name",
                  type: "string",
                  description: "Name of the attribute to remove."
                }
              ],
              description:
                "Removes attribute with given name from an element with given id."
            },
            {
              name: "getOuterHTML",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to get markup for."
                }
              ],
              returns: [
                {
                  name: "outerHTML",
                  type: "string",
                  description: "Outer HTML markup."
                }
              ],
              description: "Returns node's HTML markup."
            },
            {
              name: "setOuterHTML",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to set markup for."
                },
                {
                  name: "outerHTML",
                  type: "string",
                  description: "Outer HTML markup to set."
                }
              ],
              description: "Sets node HTML markup, returns new node id."
            },
            {
              name: "performSearch",
              parameters: [
                {
                  name: "query",
                  type: "string",
                  description:
                    "Plain text or query selector or XPath search query."
                },
                {
                  name: "includeUserAgentShadowDOM",
                  type: "boolean",
                  optional: !0,
                  description: "True to search in user agent shadow DOM.",
                  experimental: !0
                }
              ],
              returns: [
                {
                  name: "searchId",
                  type: "string",
                  description: "Unique search session identifier."
                },
                {
                  name: "resultCount",
                  type: "integer",
                  description: "Number of search results."
                }
              ],
              description:
                "Searches for a given string in the DOM tree. Use <code>getSearchResults</code> to access search results or <code>cancelSearch</code> to end this search session.",
              experimental: !0
            },
            {
              name: "getSearchResults",
              parameters: [
                {
                  name: "searchId",
                  type: "string",
                  description: "Unique search session identifier."
                },
                {
                  name: "fromIndex",
                  type: "integer",
                  description:
                    "Start index of the search result to be returned."
                },
                {
                  name: "toIndex",
                  type: "integer",
                  description: "End index of the search result to be returned."
                }
              ],
              returns: [
                {
                  name: "nodeIds",
                  type: "array",
                  items: {
                    $ref: "NodeId"
                  },
                  description: "Ids of the search result nodes."
                }
              ],
              description:
                "Returns search results from given <code>fromIndex</code> to given <code>toIndex</code> from the sarch with the given identifier.",
              experimental: !0
            },
            {
              name: "discardSearchResults",
              parameters: [
                {
                  name: "searchId",
                  type: "string",
                  description: "Unique search session identifier."
                }
              ],
              description:
                "Discards search results from the session with the given id. <code>getSearchResults</code> should no longer be called for that search.",
              experimental: !0
            },
            {
              name: "requestNode",
              parameters: [
                {
                  name: "objectId",
                  $ref: "Runtime.RemoteObjectId",
                  description: "JavaScript object id to convert into node."
                }
              ],
              returns: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Node id for given object."
                }
              ],
              description:
                "Requests that the node is sent to the caller given the JavaScript node object reference. All nodes that form the path from the node to the root are also sent to the client as a series of <code>setChildNodes</code> notifications."
            },
            {
              name: "highlightRect",
              description: "Highlights given rectangle.",
              redirect: "Overlay"
            },
            {
              name: "highlightNode",
              description: "Highlights DOM node.",
              redirect: "Overlay"
            },
            {
              name: "hideHighlight",
              description: "Hides any highlight.",
              redirect: "Overlay"
            },
            {
              name: "pushNodeByPathToFrontend",
              parameters: [
                {
                  name: "path",
                  type: "string",
                  description: "Path to node in the proprietary format."
                }
              ],
              returns: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node for given path."
                }
              ],
              description:
                "Requests that the node is sent to the caller given its path. // FIXME, use XPath",
              experimental: !0
            },
            {
              name: "pushNodesByBackendIdsToFrontend",
              parameters: [
                {
                  name: "backendNodeIds",
                  type: "array",
                  items: {
                    $ref: "BackendNodeId"
                  },
                  description: "The array of backend node ids."
                }
              ],
              returns: [
                {
                  name: "nodeIds",
                  type: "array",
                  items: {
                    $ref: "NodeId"
                  },
                  description:
                    "The array of ids of pushed nodes that correspond to the backend ids specified in backendNodeIds."
                }
              ],
              description:
                "Requests that a batch of nodes is sent to the caller given their backend node ids.",
              experimental: !0
            },
            {
              name: "setInspectedNode",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description:
                    "DOM node id to be accessible by means of $x command line API."
                }
              ],
              description:
                "Enables console to refer to the node with given id via $x (see Command Line API for more details $x functions).",
              experimental: !0
            },
            {
              name: "resolveNode",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to resolve."
                },
                {
                  name: "objectGroup",
                  type: "string",
                  optional: !0,
                  description:
                    "Symbolic group name that can be used to release multiple objects."
                }
              ],
              returns: [
                {
                  name: "object",
                  $ref: "Runtime.RemoteObject",
                  description: "JavaScript object wrapper for given node."
                }
              ],
              description: "Resolves JavaScript node object for given node id."
            },
            {
              name: "getAttributes",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to retrieve attibutes for."
                }
              ],
              returns: [
                {
                  name: "attributes",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description:
                    "An interleaved array of node attribute names and values."
                }
              ],
              description: "Returns attributes for the specified node."
            },
            {
              name: "copyTo",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to copy."
                },
                {
                  name: "targetNodeId",
                  $ref: "NodeId",
                  description: "Id of the element to drop the copy into."
                },
                {
                  name: "insertBeforeNodeId",
                  $ref: "NodeId",
                  optional: !0,
                  description:
                    "Drop the copy before this node (if absent, the copy becomes the last child of <code>targetNodeId</code>)."
                }
              ],
              returns: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node clone."
                }
              ],
              description:
                "Creates a deep copy of the specified node and places it into the target container before the given anchor.",
              experimental: !0
            },
            {
              name: "moveTo",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to move."
                },
                {
                  name: "targetNodeId",
                  $ref: "NodeId",
                  description: "Id of the element to drop the moved node into."
                },
                {
                  name: "insertBeforeNodeId",
                  $ref: "NodeId",
                  optional: !0,
                  description:
                    "Drop node before this one (if absent, the moved node becomes the last child of <code>targetNodeId</code>)."
                }
              ],
              returns: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "New id of the moved node."
                }
              ],
              description:
                "Moves node into the new container, places it before the given anchor."
            },
            {
              name: "undo",
              description: "Undoes the last performed action.",
              experimental: !0
            },
            {
              name: "redo",
              description: "Re-does the last undone action.",
              experimental: !0
            },
            {
              name: "markUndoableState",
              description: "Marks last undoable state.",
              experimental: !0
            },
            {
              name: "focus",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to focus."
                }
              ],
              description: "Focuses the given element.",
              experimental: !0
            },
            {
              name: "setFileInputFiles",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the file input node to set files for."
                },
                {
                  name: "files",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "Array of file paths to set."
                }
              ],
              description: "Sets files for the given file input element.",
              experimental: !0
            },
            {
              name: "getBoxModel",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node to get box model for."
                }
              ],
              returns: [
                {
                  name: "model",
                  $ref: "BoxModel",
                  description: "Box model for the node."
                }
              ],
              description: "Returns boxes for the currently selected nodes.",
              experimental: !0
            },
            {
              name: "getNodeForLocation",
              parameters: [
                {
                  name: "x",
                  type: "integer",
                  description: "X coordinate."
                },
                {
                  name: "y",
                  type: "integer",
                  description: "Y coordinate."
                },
                {
                  name: "includeUserAgentShadowDOM",
                  type: "boolean",
                  optional: !0,
                  description:
                    "False to skip to the nearest non-UA shadow root ancestor (default: false)."
                }
              ],
              returns: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node at given coordinates."
                }
              ],
              description: "Returns node id at given location.",
              experimental: !0
            },
            {
              name: "getRelayoutBoundary",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node."
                }
              ],
              returns: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Relayout boundary node id for the given node."
                }
              ],
              description:
                "Returns the id of the nearest ancestor that is a relayout boundary.",
              experimental: !0
            }
          ],
          events: [
            {
              name: "documentUpdated",
              description:
                "Fired when <code>Document</code> has been totally updated. Node ids are no longer valid."
            },
            {
              name: "setChildNodes",
              parameters: [
                {
                  name: "parentId",
                  $ref: "NodeId",
                  description: "Parent node id to populate with children."
                },
                {
                  name: "nodes",
                  type: "array",
                  items: {
                    $ref: "Node"
                  },
                  description: "Child nodes array."
                }
              ],
              description:
                "Fired when backend wants to provide client with the missing DOM structure. This happens upon most of the calls requesting node ids."
            },
            {
              name: "attributeModified",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node that has changed."
                },
                {
                  name: "name",
                  type: "string",
                  description: "Attribute name."
                },
                {
                  name: "value",
                  type: "string",
                  description: "Attribute value."
                }
              ],
              description:
                "Fired when <code>Element</code>'s attribute is modified."
            },
            {
              name: "attributeRemoved",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node that has changed."
                },
                {
                  name: "name",
                  type: "string",
                  description: "A ttribute name."
                }
              ],
              description:
                "Fired when <code>Element</code>'s attribute is removed."
            },
            {
              name: "inlineStyleInvalidated",
              parameters: [
                {
                  name: "nodeIds",
                  type: "array",
                  items: {
                    $ref: "NodeId"
                  },
                  description:
                    "Ids of the nodes for which the inline styles have been invalidated."
                }
              ],
              description:
                "Fired when <code>Element</code>'s inline style is modified via a CSS property modification.",
              experimental: !0
            },
            {
              name: "characterDataModified",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node that has changed."
                },
                {
                  name: "characterData",
                  type: "string",
                  description: "New text value."
                }
              ],
              description:
                "Mirrors <code>DOMCharacterDataModified</code> event."
            },
            {
              name: "childNodeCountUpdated",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node that has changed."
                },
                {
                  name: "childNodeCount",
                  type: "integer",
                  description: "New node count."
                }
              ],
              description:
                "Fired when <code>Container</code>'s child node count has changed."
            },
            {
              name: "childNodeInserted",
              parameters: [
                {
                  name: "parentNodeId",
                  $ref: "NodeId",
                  description: "Id of the node that has changed."
                },
                {
                  name: "previousNodeId",
                  $ref: "NodeId",
                  description: "If of the previous siblint."
                },
                {
                  name: "node",
                  $ref: "Node",
                  description: "Inserted node data."
                }
              ],
              description: "Mirrors <code>DOMNodeInserted</code> event."
            },
            {
              name: "childNodeRemoved",
              parameters: [
                {
                  name: "parentNodeId",
                  $ref: "NodeId",
                  description: "Parent id."
                },
                {
                  name: "nodeId",
                  $ref: "NodeId",
                  description: "Id of the node that has been removed."
                }
              ],
              description: "Mirrors <code>DOMNodeRemoved</code> event."
            },
            {
              name: "shadowRootPushed",
              parameters: [
                {
                  name: "hostId",
                  $ref: "NodeId",
                  description: "Host element id."
                },
                {
                  name: "root",
                  $ref: "Node",
                  description: "Shadow root."
                }
              ],
              description:
                "Called when shadow root is pushed into the element.",
              experimental: !0
            },
            {
              name: "shadowRootPopped",
              parameters: [
                {
                  name: "hostId",
                  $ref: "NodeId",
                  description: "Host element id."
                },
                {
                  name: "rootId",
                  $ref: "NodeId",
                  description: "Shadow root id."
                }
              ],
              description:
                "Called when shadow root is popped from the element.",
              experimental: !0
            },
            {
              name: "pseudoElementAdded",
              parameters: [
                {
                  name: "parentId",
                  $ref: "NodeId",
                  description: "Pseudo element's parent element id."
                },
                {
                  name: "pseudoElement",
                  $ref: "Node",
                  description: "The added pseudo element."
                }
              ],
              description:
                "Called when a pseudo element is added to an element.",
              experimental: !0
            },
            {
              name: "pseudoElementRemoved",
              parameters: [
                {
                  name: "parentId",
                  $ref: "NodeId",
                  description: "Pseudo element's parent element id."
                },
                {
                  name: "pseudoElementId",
                  $ref: "NodeId",
                  description: "The removed pseudo element id."
                }
              ],
              description:
                "Called when a pseudo element is removed from an element.",
              experimental: !0
            },
            {
              name: "distributedNodesUpdated",
              parameters: [
                {
                  name: "insertionPointId",
                  $ref: "NodeId",
                  description:
                    "Insertion point where distrubuted nodes were updated."
                },
                {
                  name: "distributedNodes",
                  type: "array",
                  items: {
                    $ref: "BackendNode"
                  },
                  description: "Distributed nodes for given insertion point."
                }
              ],
              description: "Called when distrubution is changed.",
              experimental: !0
            }
          ]
        },
        {
          domain: "CSS",
          experimental: !0,
          description:
            "This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and styles) have an associated <code>id</code> used in subsequent operations on the related object. Each object type has a specific <code>id</code> structure, and those are not interchangeable between objects of different kinds. CSS objects can be loaded using the <code>get*ForNode()</code> calls (which accept a DOM node id). A client can also discover all the existing stylesheets with the <code>getAllStyleSheets()</code> method (or keeping track of the <code>styleSheetAdded</code>/<code>styleSheetRemoved</code> events) and subsequently load the required stylesheet contents using the <code>getStyleSheet[Text]()</code> methods.",
          dependencies: ["DOM"],
          types: [
            {
              id: "StyleSheetId",
              type: "string"
            },
            {
              id: "StyleSheetOrigin",
              type: "string",
              enum: ["injected", "user-agent", "inspector", "regular"],
              description:
                'Stylesheet type: "injected" for stylesheets injected via extension, "user-agent" for user-agent stylesheets, "inspector" for stylesheets created by the inspector (i.e. those holding the "via inspector" rules), "regular" for regular stylesheets.'
            },
            {
              id: "PseudoElementMatches",
              type: "object",
              properties: [
                {
                  name: "pseudoType",
                  $ref: "DOM.PseudoType",
                  description: "Pseudo element type."
                },
                {
                  name: "matches",
                  type: "array",
                  items: {
                    $ref: "RuleMatch"
                  },
                  description:
                    "Matches of CSS rules applicable to the pseudo style."
                }
              ],
              description: "CSS rule collection for a single pseudo style."
            },
            {
              id: "InheritedStyleEntry",
              type: "object",
              properties: [
                {
                  name: "inlineStyle",
                  $ref: "CSSStyle",
                  optional: !0,
                  description:
                    "The ancestor node's inline style, if any, in the style inheritance chain."
                },
                {
                  name: "matchedCSSRules",
                  type: "array",
                  items: {
                    $ref: "RuleMatch"
                  },
                  description:
                    "Matches of CSS rules matching the ancestor node in the style inheritance chain."
                }
              ],
              description: "Inherited CSS rule collection from ancestor node."
            },
            {
              id: "RuleMatch",
              type: "object",
              properties: [
                {
                  name: "rule",
                  $ref: "CSSRule",
                  description: "CSS rule in the match."
                },
                {
                  name: "matchingSelectors",
                  type: "array",
                  items: {
                    type: "integer"
                  },
                  description:
                    "Matching selector indices in the rule's selectorList selectors (0-based)."
                }
              ],
              description: "Match data for a CSS rule."
            },
            {
              id: "Value",
              type: "object",
              properties: [
                {
                  name: "text",
                  type: "string",
                  description: "Value text."
                },
                {
                  name: "range",
                  $ref: "SourceRange",
                  optional: !0,
                  description:
                    "Value range in the underlying resource (if available)."
                }
              ],
              description:
                "Data for a simple selector (these are delimited by commas in a selector list)."
            },
            {
              id: "SelectorList",
              type: "object",
              properties: [
                {
                  name: "selectors",
                  type: "array",
                  items: {
                    $ref: "Value"
                  },
                  description: "Selectors in the list."
                },
                {
                  name: "text",
                  type: "string",
                  description: "Rule selector text."
                }
              ],
              description: "Selector list data."
            },
            {
              id: "CSSStyleSheetHeader",
              type: "object",
              properties: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId",
                  description: "The stylesheet identifier."
                },
                {
                  name: "frameId",
                  $ref: "Page.FrameId",
                  description: "Owner frame identifier."
                },
                {
                  name: "sourceURL",
                  type: "string",
                  description: "Stylesheet resource URL."
                },
                {
                  name: "sourceMapURL",
                  type: "string",
                  optional: !0,
                  description:
                    "URL of source map associated with the stylesheet (if any)."
                },
                {
                  name: "origin",
                  $ref: "StyleSheetOrigin",
                  description: "Stylesheet origin."
                },
                {
                  name: "title",
                  type: "string",
                  description: "Stylesheet title."
                },
                {
                  name: "ownerNode",
                  $ref: "DOM.BackendNodeId",
                  optional: !0,
                  description:
                    "The backend id for the owner node of the stylesheet."
                },
                {
                  name: "disabled",
                  type: "boolean",
                  description: "Denotes whether the stylesheet is disabled."
                },
                {
                  name: "hasSourceURL",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the sourceURL field value comes from the sourceURL comment."
                },
                {
                  name: "isInline",
                  type: "boolean",
                  description:
                    "Whether this stylesheet is created for STYLE tag by parser. This flag is not set for document.written STYLE tags."
                },
                {
                  name: "startLine",
                  type: "number",
                  description:
                    "Line offset of the stylesheet within the resource (zero based)."
                },
                {
                  name: "startColumn",
                  type: "number",
                  description:
                    "Column offset of the stylesheet within the resource (zero based)."
                },
                {
                  name: "length",
                  type: "number",
                  description: "Size of the content (in characters).",
                  experimental: !0
                }
              ],
              description: "CSS stylesheet metainformation."
            },
            {
              id: "CSSRule",
              type: "object",
              properties: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId",
                  optional: !0,
                  description:
                    "The css style sheet identifier (absent for user agent stylesheet and user-specified stylesheet rules) this rule came from."
                },
                {
                  name: "selectorList",
                  $ref: "SelectorList",
                  description: "Rule selector data."
                },
                {
                  name: "origin",
                  $ref: "StyleSheetOrigin",
                  description: "Parent stylesheet's origin."
                },
                {
                  name: "style",
                  $ref: "CSSStyle",
                  description: "Associated style declaration."
                },
                {
                  name: "media",
                  type: "array",
                  items: {
                    $ref: "CSSMedia"
                  },
                  optional: !0,
                  description:
                    "Media list array (for rules involving media queries). The array enumerates media queries starting with the innermost one, going outwards."
                }
              ],
              description: "CSS rule representation."
            },
            {
              id: "RuleUsage",
              type: "object",
              properties: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId",
                  description:
                    "The css style sheet identifier (absent for user agent stylesheet and user-specified stylesheet rules) this rule came from."
                },
                {
                  name: "startOffset",
                  type: "number",
                  description:
                    "Offset of the start of the rule (including selector) from the beginning of the stylesheet."
                },
                {
                  name: "endOffset",
                  type: "number",
                  description:
                    "Offset of the end of the rule body from the beginning of the stylesheet."
                },
                {
                  name: "used",
                  type: "boolean",
                  description:
                    "Indicates whether the rule was actually used by some element in the page."
                }
              ],
              description: "CSS coverage information.",
              experimental: !0
            },
            {
              id: "SourceRange",
              type: "object",
              properties: [
                {
                  name: "startLine",
                  type: "integer",
                  description: "Start line of range."
                },
                {
                  name: "startColumn",
                  type: "integer",
                  description: "Start column of range (inclusive)."
                },
                {
                  name: "endLine",
                  type: "integer",
                  description: "End line of range"
                },
                {
                  name: "endColumn",
                  type: "integer",
                  description: "End column of range (exclusive)."
                }
              ],
              description:
                "Text range within a resource. All numbers are zero-based."
            },
            {
              id: "ShorthandEntry",
              type: "object",
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "Shorthand name."
                },
                {
                  name: "value",
                  type: "string",
                  description: "Shorthand value."
                },
                {
                  name: "important",
                  type: "boolean",
                  optional: !0,
                  description:
                    'Whether the property has "!important" annotation (implies <code>false</code> if absent).'
                }
              ]
            },
            {
              id: "CSSComputedStyleProperty",
              type: "object",
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "Computed style property name."
                },
                {
                  name: "value",
                  type: "string",
                  description: "Computed style property value."
                }
              ]
            },
            {
              id: "CSSStyle",
              type: "object",
              properties: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId",
                  optional: !0,
                  description:
                    "The css style sheet identifier (absent for user agent stylesheet and user-specified stylesheet rules) this rule came from."
                },
                {
                  name: "cssProperties",
                  type: "array",
                  items: {
                    $ref: "CSSProperty"
                  },
                  description: "CSS properties in the style."
                },
                {
                  name: "shorthandEntries",
                  type: "array",
                  items: {
                    $ref: "ShorthandEntry"
                  },
                  description:
                    "Computed values for all shorthands found in the style."
                },
                {
                  name: "cssText",
                  type: "string",
                  optional: !0,
                  description: "Style declaration text (if available)."
                },
                {
                  name: "range",
                  $ref: "SourceRange",
                  optional: !0,
                  description:
                    "Style declaration range in the enclosing stylesheet (if available)."
                }
              ],
              description: "CSS style representation."
            },
            {
              id: "CSSProperty",
              type: "object",
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "The property name."
                },
                {
                  name: "value",
                  type: "string",
                  description: "The property value."
                },
                {
                  name: "important",
                  type: "boolean",
                  optional: !0,
                  description:
                    'Whether the property has "!important" annotation (implies <code>false</code> if absent).'
                },
                {
                  name: "implicit",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the property is implicit (implies <code>false</code> if absent)."
                },
                {
                  name: "text",
                  type: "string",
                  optional: !0,
                  description:
                    "The full property text as specified in the style."
                },
                {
                  name: "parsedOk",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the property is understood by the browser (implies <code>true</code> if absent)."
                },
                {
                  name: "disabled",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the property is disabled by the user (present for source-based properties only)."
                },
                {
                  name: "range",
                  $ref: "SourceRange",
                  optional: !0,
                  description:
                    "The entire property range in the enclosing style declaration (if available)."
                }
              ],
              description: "CSS property declaration data."
            },
            {
              id: "CSSMedia",
              type: "object",
              properties: [
                {
                  name: "text",
                  type: "string",
                  description: "Media query text."
                },
                {
                  name: "source",
                  type: "string",
                  enum: [
                    "mediaRule",
                    "importRule",
                    "linkedSheet",
                    "inlineSheet"
                  ],
                  description:
                    'Source of the media query: "mediaRule" if specified by a @media rule, "importRule" if specified by an @import rule, "linkedSheet" if specified by a "media" attribute in a linked stylesheet\'s LINK tag, "inlineSheet" if specified by a "media" attribute in an inline stylesheet\'s STYLE tag.'
                },
                {
                  name: "sourceURL",
                  type: "string",
                  optional: !0,
                  description:
                    "URL of the document containing the media query description."
                },
                {
                  name: "range",
                  $ref: "SourceRange",
                  optional: !0,
                  description:
                    "The associated rule (@media or @import) header range in the enclosing stylesheet (if available)."
                },
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId",
                  optional: !0,
                  description:
                    "Identifier of the stylesheet containing this object (if exists)."
                },
                {
                  name: "mediaList",
                  type: "array",
                  items: {
                    $ref: "MediaQuery"
                  },
                  optional: !0,
                  experimental: !0,
                  description: "Array of media queries."
                }
              ],
              description: "CSS media rule descriptor."
            },
            {
              id: "MediaQuery",
              type: "object",
              properties: [
                {
                  name: "expressions",
                  type: "array",
                  items: {
                    $ref: "MediaQueryExpression"
                  },
                  description: "Array of media query expressions."
                },
                {
                  name: "active",
                  type: "boolean",
                  description: "Whether the media query condition is satisfied."
                }
              ],
              description: "Media query descriptor.",
              experimental: !0
            },
            {
              id: "MediaQueryExpression",
              type: "object",
              properties: [
                {
                  name: "value",
                  type: "number",
                  description: "Media query expression value."
                },
                {
                  name: "unit",
                  type: "string",
                  description: "Media query expression units."
                },
                {
                  name: "feature",
                  type: "string",
                  description: "Media query expression feature."
                },
                {
                  name: "valueRange",
                  $ref: "SourceRange",
                  optional: !0,
                  description:
                    "The associated range of the value text in the enclosing stylesheet (if available)."
                },
                {
                  name: "computedLength",
                  type: "number",
                  optional: !0,
                  description:
                    "Computed length of media query expression (if applicable)."
                }
              ],
              description: "Media query expression descriptor.",
              experimental: !0
            },
            {
              id: "PlatformFontUsage",
              type: "object",
              properties: [
                {
                  name: "familyName",
                  type: "string",
                  description: "Font's family name reported by platform."
                },
                {
                  name: "isCustomFont",
                  type: "boolean",
                  description:
                    "Indicates if the font was downloaded or resolved locally."
                },
                {
                  name: "glyphCount",
                  type: "number",
                  description:
                    "Amount of glyphs that were rendered with this font."
                }
              ],
              description:
                "Information about amount of glyphs that were rendered with given font.",
              experimental: !0
            },
            {
              id: "CSSKeyframesRule",
              type: "object",
              properties: [
                {
                  name: "animationName",
                  $ref: "Value",
                  description: "Animation name."
                },
                {
                  name: "keyframes",
                  type: "array",
                  items: {
                    $ref: "CSSKeyframeRule"
                  },
                  description: "List of keyframes."
                }
              ],
              description: "CSS keyframes rule representation."
            },
            {
              id: "CSSKeyframeRule",
              type: "object",
              properties: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId",
                  optional: !0,
                  description:
                    "The css style sheet identifier (absent for user agent stylesheet and user-specified stylesheet rules) this rule came from."
                },
                {
                  name: "origin",
                  $ref: "StyleSheetOrigin",
                  description: "Parent stylesheet's origin."
                },
                {
                  name: "keyText",
                  $ref: "Value",
                  description: "Associated key text."
                },
                {
                  name: "style",
                  $ref: "CSSStyle",
                  description: "Associated style declaration."
                }
              ],
              description: "CSS keyframe rule representation."
            },
            {
              id: "StyleDeclarationEdit",
              type: "object",
              properties: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId",
                  description: "The css style sheet identifier."
                },
                {
                  name: "range",
                  $ref: "SourceRange",
                  description:
                    "The range of the style text in the enclosing stylesheet."
                },
                {
                  name: "text",
                  type: "string",
                  description: "New style text."
                }
              ],
              description:
                "A descriptor of operation to mutate style declaration text."
            },
            {
              id: "InlineTextBox",
              type: "object",
              properties: [
                {
                  name: "boundingBox",
                  $ref: "DOM.Rect",
                  description: "The absolute position bounding box."
                },
                {
                  name: "startCharacterIndex",
                  type: "integer",
                  description:
                    "The starting index in characters, for this post layout textbox substring."
                },
                {
                  name: "numCharacters",
                  type: "integer",
                  description:
                    "The number of characters in this post layout textbox substring."
                }
              ],
              description:
                "Details of post layout rendered text positions. The exact layout should not be regarded as stable and may change between versions.",
              experimental: !0
            },
            {
              id: "LayoutTreeNode",
              type: "object",
              properties: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId",
                  description:
                    "The id of the related DOM node matching one from DOM.GetDocument."
                },
                {
                  name: "boundingBox",
                  $ref: "DOM.Rect",
                  description: "The absolute position bounding box."
                },
                {
                  name: "layoutText",
                  type: "string",
                  optional: !0,
                  description: "Contents of the LayoutText if any"
                },
                {
                  name: "inlineTextNodes",
                  type: "array",
                  optional: !0,
                  items: {
                    $ref: "InlineTextBox"
                  },
                  description: "The post layout inline text nodes, if any."
                },
                {
                  name: "styleIndex",
                  type: "integer",
                  optional: !0,
                  description:
                    "Index into the computedStyles array returned by getLayoutTreeAndStyles."
                }
              ],
              description:
                "Details of an element in the DOM tree with a LayoutObject.",
              experimental: !0
            },
            {
              id: "ComputedStyle",
              type: "object",
              properties: [
                {
                  name: "properties",
                  type: "array",
                  items: {
                    $ref: "CSSComputedStyleProperty"
                  }
                }
              ],
              description:
                "A subset of the full ComputedStyle as defined by the request whitelist.",
              experimental: !0
            }
          ],
          commands: [
            {
              name: "enable",
              description:
                "Enables the CSS agent for the given page. Clients should not assume that the CSS agent has been enabled until the result of this command is received."
            },
            {
              name: "disable",
              description: "Disables the CSS agent for the given page."
            },
            {
              name: "getMatchedStylesForNode",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId"
                }
              ],
              returns: [
                {
                  name: "inlineStyle",
                  $ref: "CSSStyle",
                  optional: !0,
                  description: "Inline style for the specified DOM node."
                },
                {
                  name: "attributesStyle",
                  $ref: "CSSStyle",
                  optional: !0,
                  description:
                    'Attribute-defined element style (e.g. resulting from "width=20 height=100%").'
                },
                {
                  name: "matchedCSSRules",
                  type: "array",
                  items: {
                    $ref: "RuleMatch"
                  },
                  optional: !0,
                  description:
                    "CSS rules matching this node, from all applicable stylesheets."
                },
                {
                  name: "pseudoElements",
                  type: "array",
                  items: {
                    $ref: "PseudoElementMatches"
                  },
                  optional: !0,
                  description: "Pseudo style matches for this node."
                },
                {
                  name: "inherited",
                  type: "array",
                  items: {
                    $ref: "InheritedStyleEntry"
                  },
                  optional: !0,
                  description:
                    "A chain of inherited styles (from the immediate node parent up to the DOM tree root)."
                },
                {
                  name: "cssKeyframesRules",
                  type: "array",
                  items: {
                    $ref: "CSSKeyframesRule"
                  },
                  optional: !0,
                  description:
                    "A list of CSS keyframed animations matching this node."
                }
              ],
              description:
                "Returns requested styles for a DOM node identified by <code>nodeId</code>."
            },
            {
              name: "getInlineStylesForNode",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId"
                }
              ],
              returns: [
                {
                  name: "inlineStyle",
                  $ref: "CSSStyle",
                  optional: !0,
                  description: "Inline style for the specified DOM node."
                },
                {
                  name: "attributesStyle",
                  $ref: "CSSStyle",
                  optional: !0,
                  description:
                    'Attribute-defined element style (e.g. resulting from "width=20 height=100%").'
                }
              ],
              description:
                'Returns the styles defined inline (explicitly in the "style" attribute and implicitly, using DOM attributes) for a DOM node identified by <code>nodeId</code>.'
            },
            {
              name: "getComputedStyleForNode",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId"
                }
              ],
              returns: [
                {
                  name: "computedStyle",
                  type: "array",
                  items: {
                    $ref: "CSSComputedStyleProperty"
                  },
                  description: "Computed style for the specified DOM node."
                }
              ],
              description:
                "Returns the computed style for a DOM node identified by <code>nodeId</code>."
            },
            {
              name: "getPlatformFontsForNode",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId"
                }
              ],
              returns: [
                {
                  name: "fonts",
                  type: "array",
                  items: {
                    $ref: "PlatformFontUsage"
                  },
                  description:
                    "Usage statistics for every employed platform font."
                }
              ],
              description:
                "Requests information about platform fonts which we used to render child TextNodes in the given node.",
              experimental: !0
            },
            {
              name: "getStyleSheetText",
              parameters: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId"
                }
              ],
              returns: [
                {
                  name: "text",
                  type: "string",
                  description: "The stylesheet text."
                }
              ],
              description:
                "Returns the current textual content and the URL for a stylesheet."
            },
            {
              name: "collectClassNames",
              parameters: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId"
                }
              ],
              returns: [
                {
                  name: "classNames",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "Class name list."
                }
              ],
              description: "Returns all class names from specified stylesheet.",
              experimental: !0
            },
            {
              name: "setStyleSheetText",
              parameters: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId"
                },
                {
                  name: "text",
                  type: "string"
                }
              ],
              returns: [
                {
                  name: "sourceMapURL",
                  type: "string",
                  optional: !0,
                  description:
                    "URL of source map associated with script (if any)."
                }
              ],
              description: "Sets the new stylesheet text."
            },
            {
              name: "setRuleSelector",
              parameters: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId"
                },
                {
                  name: "range",
                  $ref: "SourceRange"
                },
                {
                  name: "selector",
                  type: "string"
                }
              ],
              returns: [
                {
                  name: "selectorList",
                  $ref: "SelectorList",
                  description: "The resulting selector list after modification."
                }
              ],
              description: "Modifies the rule selector."
            },
            {
              name: "setKeyframeKey",
              parameters: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId"
                },
                {
                  name: "range",
                  $ref: "SourceRange"
                },
                {
                  name: "keyText",
                  type: "string"
                }
              ],
              returns: [
                {
                  name: "keyText",
                  $ref: "Value",
                  description: "The resulting key text after modification."
                }
              ],
              description: "Modifies the keyframe rule key text."
            },
            {
              name: "setStyleTexts",
              parameters: [
                {
                  name: "edits",
                  type: "array",
                  items: {
                    $ref: "StyleDeclarationEdit"
                  }
                }
              ],
              returns: [
                {
                  name: "styles",
                  type: "array",
                  items: {
                    $ref: "CSSStyle"
                  },
                  description: "The resulting styles after modification."
                }
              ],
              description:
                "Applies specified style edits one after another in the given order."
            },
            {
              name: "setMediaText",
              parameters: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId"
                },
                {
                  name: "range",
                  $ref: "SourceRange"
                },
                {
                  name: "text",
                  type: "string"
                }
              ],
              returns: [
                {
                  name: "media",
                  $ref: "CSSMedia",
                  description:
                    "The resulting CSS media rule after modification."
                }
              ],
              description: "Modifies the rule selector."
            },
            {
              name: "createStyleSheet",
              parameters: [
                {
                  name: "frameId",
                  $ref: "Page.FrameId",
                  description:
                    'Identifier of the frame where "via-inspector" stylesheet should be created.'
                }
              ],
              returns: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId",
                  description:
                    'Identifier of the created "via-inspector" stylesheet.'
                }
              ],
              description:
                'Creates a new special "via-inspector" stylesheet in the frame with given <code>frameId</code>.'
            },
            {
              name: "addRule",
              parameters: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId",
                  description:
                    "The css style sheet identifier where a new rule should be inserted."
                },
                {
                  name: "ruleText",
                  type: "string",
                  description: "The text of a new rule."
                },
                {
                  name: "location",
                  $ref: "SourceRange",
                  description:
                    "Text position of a new rule in the target style sheet."
                }
              ],
              returns: [
                {
                  name: "rule",
                  $ref: "CSSRule",
                  description: "The newly created rule."
                }
              ],
              description:
                "Inserts a new rule with the given <code>ruleText</code> in a stylesheet with given <code>styleSheetId</code>, at the position specified by <code>location</code>."
            },
            {
              name: "forcePseudoState",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId",
                  description:
                    "The element id for which to force the pseudo state."
                },
                {
                  name: "forcedPseudoClasses",
                  type: "array",
                  items: {
                    type: "string",
                    enum: ["active", "focus", "hover", "visited"]
                  },
                  description:
                    "Element pseudo classes to force when computing the element's style."
                }
              ],
              description:
                "Ensures that the given node will have specified pseudo-classes whenever its style is computed by the browser."
            },
            {
              name: "getMediaQueries",
              returns: [
                {
                  name: "medias",
                  type: "array",
                  items: {
                    $ref: "CSSMedia"
                  }
                }
              ],
              description:
                "Returns all media queries parsed by the rendering engine.",
              experimental: !0
            },
            {
              name: "setEffectivePropertyValueForNode",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId",
                  description: "The element id for which to set property."
                },
                {
                  name: "propertyName",
                  type: "string"
                },
                {
                  name: "value",
                  type: "string"
                }
              ],
              description:
                "Find a rule with the given active property for the given node and set the new value for this property",
              experimental: !0
            },
            {
              name: "getBackgroundColors",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId",
                  description: "Id of the node to get background colors for."
                }
              ],
              returns: [
                {
                  name: "backgroundColors",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description:
                    "The range of background colors behind this element, if it contains any visible text. If no visible text is present, this will be undefined. In the case of a flat background color, this will consist of simply that color. In the case of a gradient, this will consist of each of the color stops. For anything more complicated, this will be an empty array. Images will be ignored (as if the image had failed to load).",
                  optional: !0
                }
              ],
              experimental: !0
            },
            {
              name: "getLayoutTreeAndStyles",
              parameters: [
                {
                  name: "computedStyleWhitelist",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "Whitelist of computed styles to return."
                }
              ],
              returns: [
                {
                  name: "layoutTreeNodes",
                  type: "array",
                  items: {
                    $ref: "LayoutTreeNode"
                  }
                },
                {
                  name: "computedStyles",
                  type: "array",
                  items: {
                    $ref: "ComputedStyle"
                  }
                }
              ],
              description:
                "For the main document and any content documents, return the LayoutTreeNodes and a whitelisted subset of the computed style. It only returns pushed nodes, on way to pull all nodes is to call DOM.getDocument with a depth of -1.",
              experimental: !0
            },
            {
              name: "startRuleUsageTracking",
              description: "Enables the selector recording.",
              experimental: !0
            },
            {
              name: "takeCoverageDelta",
              description:
                "Obtain list of rules that became used since last call to this method (or since start of coverage instrumentation)",
              returns: [
                {
                  name: "coverage",
                  type: "array",
                  items: {
                    $ref: "RuleUsage"
                  }
                }
              ],
              experimental: !0
            },
            {
              name: "stopRuleUsageTracking",
              returns: [
                {
                  name: "ruleUsage",
                  type: "array",
                  items: {
                    $ref: "RuleUsage"
                  }
                }
              ],
              description:
                "The list of rules with an indication of whether these were used",
              experimental: !0
            }
          ],
          events: [
            {
              name: "mediaQueryResultChanged",
              description:
                "Fires whenever a MediaQuery result changes (for example, after a browser window has been resized.) The current implementation considers only viewport-dependent media features."
            },
            {
              name: "fontsUpdated",
              description: "Fires whenever a web font gets loaded."
            },
            {
              name: "styleSheetChanged",
              parameters: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId"
                }
              ],
              description:
                "Fired whenever a stylesheet is changed as a result of the client operation."
            },
            {
              name: "styleSheetAdded",
              parameters: [
                {
                  name: "header",
                  $ref: "CSSStyleSheetHeader",
                  description: "Added stylesheet metainfo."
                }
              ],
              description:
                "Fired whenever an active document stylesheet is added."
            },
            {
              name: "styleSheetRemoved",
              parameters: [
                {
                  name: "styleSheetId",
                  $ref: "StyleSheetId",
                  description: "Identifier of the removed stylesheet."
                }
              ],
              description:
                "Fired whenever an active document stylesheet is removed."
            }
          ]
        },
        {
          domain: "IO",
          description:
            "Input/Output operations for streams produced by DevTools.",
          experimental: !0,
          types: [
            {
              id: "StreamHandle",
              type: "string"
            }
          ],
          commands: [
            {
              name: "read",
              description: "Read a chunk of the stream",
              parameters: [
                {
                  name: "handle",
                  $ref: "StreamHandle",
                  description: "Handle of the stream to read."
                },
                {
                  name: "offset",
                  type: "integer",
                  optional: !0,
                  description:
                    "Seek to the specified offset before reading (if not specificed, proceed with offset following the last read)."
                },
                {
                  name: "size",
                  type: "integer",
                  optional: !0,
                  description:
                    "Maximum number of bytes to read (left upon the agent discretion if not specified)."
                }
              ],
              returns: [
                {
                  name: "data",
                  type: "string",
                  description: "Data that were read."
                },
                {
                  name: "eof",
                  type: "boolean",
                  description:
                    "Set if the end-of-file condition occured while reading."
                }
              ]
            },
            {
              name: "close",
              description:
                "Close the stream, discard any temporary backing storage.",
              parameters: [
                {
                  name: "handle",
                  $ref: "StreamHandle",
                  description: "Handle of the stream to close."
                }
              ]
            }
          ]
        },
        {
          domain: "DOMDebugger",
          description:
            "DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript execution will stop on these operations as if there was a regular breakpoint set.",
          dependencies: ["DOM", "Debugger"],
          types: [
            {
              id: "DOMBreakpointType",
              type: "string",
              enum: ["subtree-modified", "attribute-modified", "node-removed"],
              description: "DOM breakpoint type."
            },
            {
              id: "EventListener",
              type: "object",
              description: "Object event listener.",
              properties: [
                {
                  name: "type",
                  type: "string",
                  description: "<code>EventListener</code>'s type."
                },
                {
                  name: "useCapture",
                  type: "boolean",
                  description: "<code>EventListener</code>'s useCapture."
                },
                {
                  name: "passive",
                  type: "boolean",
                  description: "<code>EventListener</code>'s passive flag."
                },
                {
                  name: "once",
                  type: "boolean",
                  description: "<code>EventListener</code>'s once flag."
                },
                {
                  name: "scriptId",
                  $ref: "Runtime.ScriptId",
                  description: "Script id of the handler code."
                },
                {
                  name: "lineNumber",
                  type: "integer",
                  description: "Line number in the script (0-based)."
                },
                {
                  name: "columnNumber",
                  type: "integer",
                  description: "Column number in the script (0-based)."
                },
                {
                  name: "handler",
                  $ref: "Runtime.RemoteObject",
                  optional: !0,
                  description: "Event handler function value."
                },
                {
                  name: "originalHandler",
                  $ref: "Runtime.RemoteObject",
                  optional: !0,
                  description: "Event original handler function value."
                },
                {
                  name: "backendNodeId",
                  $ref: "DOM.BackendNodeId",
                  optional: !0,
                  description: "Node the listener is added to (if any)."
                }
              ],
              experimental: !0
            }
          ],
          commands: [
            {
              name: "setDOMBreakpoint",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId",
                  description: "Identifier of the node to set breakpoint on."
                },
                {
                  name: "type",
                  $ref: "DOMBreakpointType",
                  description: "Type of the operation to stop upon."
                }
              ],
              description: "Sets breakpoint on particular operation with DOM."
            },
            {
              name: "removeDOMBreakpoint",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId",
                  description:
                    "Identifier of the node to remove breakpoint from."
                },
                {
                  name: "type",
                  $ref: "DOMBreakpointType",
                  description: "Type of the breakpoint to remove."
                }
              ],
              description:
                "Removes DOM breakpoint that was set using <code>setDOMBreakpoint</code>."
            },
            {
              name: "setEventListenerBreakpoint",
              parameters: [
                {
                  name: "eventName",
                  type: "string",
                  description:
                    "DOM Event name to stop on (any DOM event will do)."
                },
                {
                  name: "targetName",
                  type: "string",
                  optional: !0,
                  description:
                    'EventTarget interface name to stop on. If equal to <code>"*"</code> or not provided, will stop on any EventTarget.',
                  experimental: !0
                }
              ],
              description: "Sets breakpoint on particular DOM event."
            },
            {
              name: "removeEventListenerBreakpoint",
              parameters: [
                {
                  name: "eventName",
                  type: "string",
                  description: "Event name."
                },
                {
                  name: "targetName",
                  type: "string",
                  optional: !0,
                  description: "EventTarget interface name.",
                  experimental: !0
                }
              ],
              description: "Removes breakpoint on particular DOM event."
            },
            {
              name: "setInstrumentationBreakpoint",
              parameters: [
                {
                  name: "eventName",
                  type: "string",
                  description: "Instrumentation name to stop on."
                }
              ],
              description: "Sets breakpoint on particular native event.",
              experimental: !0
            },
            {
              name: "removeInstrumentationBreakpoint",
              parameters: [
                {
                  name: "eventName",
                  type: "string",
                  description: "Instrumentation name to stop on."
                }
              ],
              description: "Removes breakpoint on particular native event.",
              experimental: !0
            },
            {
              name: "setXHRBreakpoint",
              parameters: [
                {
                  name: "url",
                  type: "string",
                  description:
                    "Resource URL substring. All XHRs having this substring in the URL will get stopped upon."
                }
              ],
              description: "Sets breakpoint on XMLHttpRequest."
            },
            {
              name: "removeXHRBreakpoint",
              parameters: [
                {
                  name: "url",
                  type: "string",
                  description: "Resource URL substring."
                }
              ],
              description: "Removes breakpoint from XMLHttpRequest."
            },
            {
              name: "getEventListeners",
              experimental: !0,
              parameters: [
                {
                  name: "objectId",
                  $ref: "Runtime.RemoteObjectId",
                  description:
                    "Identifier of the object to return listeners for."
                },
                {
                  name: "depth",
                  type: "integer",
                  optional: !0,
                  description:
                    "The maximum depth at which Node children should be retrieved, defaults to 1. Use -1 for the entire subtree or provide an integer larger than 0.",
                  experimental: !0
                },
                {
                  name: "pierce",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether or not iframes and shadow roots should be traversed when returning the subtree (default is false). Reports listeners for all contexts if pierce is enabled.",
                  experimental: !0
                }
              ],
              returns: [
                {
                  name: "listeners",
                  type: "array",
                  items: {
                    $ref: "EventListener"
                  },
                  description: "Array of relevant listeners."
                }
              ],
              description: "Returns event listeners of the given object."
            }
          ]
        },
        {
          domain: "Target",
          description:
            "Supports additional targets discovery and allows to attach to them.",
          experimental: !0,
          types: [
            {
              id: "TargetID",
              type: "string"
            },
            {
              id: "BrowserContextID",
              type: "string"
            },
            {
              id: "TargetInfo",
              type: "object",
              properties: [
                {
                  name: "targetId",
                  $ref: "TargetID"
                },
                {
                  name: "type",
                  type: "string"
                },
                {
                  name: "title",
                  type: "string"
                },
                {
                  name: "url",
                  type: "string"
                }
              ]
            },
            {
              id: "RemoteLocation",
              type: "object",
              properties: [
                {
                  name: "host",
                  type: "string"
                },
                {
                  name: "port",
                  type: "integer"
                }
              ]
            }
          ],
          commands: [
            {
              name: "setDiscoverTargets",
              description:
                "Controls whether to discover available targets and notify via <code>targetCreated/targetDestroyed</code> events.",
              parameters: [
                {
                  name: "discover",
                  type: "boolean",
                  description: "Whether to discover available targets."
                }
              ]
            },
            {
              name: "setAutoAttach",
              description:
                "Controls whether to automatically attach to new targets which are considered to be related to this one. When turned on, attaches to all existing related targets as well. When turned off, automatically detaches from all currently attached targets.",
              parameters: [
                {
                  name: "autoAttach",
                  type: "boolean",
                  description: "Whether to auto-attach to related targets."
                },
                {
                  name: "waitForDebuggerOnStart",
                  type: "boolean",
                  description:
                    "Whether to pause new targets when attaching to them. Use <code>Runtime.runIfWaitingForDebugger</code> to run paused targets."
                }
              ]
            },
            {
              name: "setAttachToFrames",
              parameters: [
                {
                  name: "value",
                  type: "boolean",
                  description: "Whether to attach to frames."
                }
              ]
            },
            {
              name: "setRemoteLocations",
              description:
                "Enables target discovery for the specified locations, when <code>setDiscoverTargets</code> was set to <code>true</code>.",
              parameters: [
                {
                  name: "locations",
                  type: "array",
                  items: {
                    $ref: "RemoteLocation"
                  },
                  description: "List of remote locations."
                }
              ]
            },
            {
              name: "sendMessageToTarget",
              description:
                "Sends protocol message to the target with given id.",
              parameters: [
                {
                  name: "targetId",
                  $ref: "TargetID"
                },
                {
                  name: "message",
                  type: "string"
                }
              ]
            },
            {
              name: "getTargetInfo",
              description: "Returns information about a target.",
              parameters: [
                {
                  name: "targetId",
                  $ref: "TargetID"
                }
              ],
              returns: [
                {
                  name: "targetInfo",
                  $ref: "TargetInfo"
                }
              ]
            },
            {
              name: "activateTarget",
              description: "Activates (focuses) the target.",
              parameters: [
                {
                  name: "targetId",
                  $ref: "TargetID"
                }
              ]
            },
            {
              name: "closeTarget",
              description:
                "Closes the target. If the target is a page that gets closed too.",
              parameters: [
                {
                  name: "targetId",
                  $ref: "TargetID"
                }
              ],
              returns: [
                {
                  name: "success",
                  type: "boolean"
                }
              ]
            },
            {
              name: "attachToTarget",
              description: "Attaches to the target with given id.",
              parameters: [
                {
                  name: "targetId",
                  $ref: "TargetID"
                }
              ],
              returns: [
                {
                  name: "success",
                  type: "boolean",
                  description: "Whether attach succeeded."
                }
              ]
            },
            {
              name: "detachFromTarget",
              description: "Detaches from the target with given id.",
              parameters: [
                {
                  name: "targetId",
                  $ref: "TargetID"
                }
              ]
            },
            {
              name: "createBrowserContext",
              description:
                "Creates a new empty BrowserContext. Similar to an incognito profile but you can have more than one.",
              returns: [
                {
                  name: "browserContextId",
                  $ref: "BrowserContextID",
                  description: "The id of the context created."
                }
              ]
            },
            {
              name: "disposeBrowserContext",
              description:
                "Deletes a BrowserContext, will fail of any open page uses it.",
              parameters: [
                {
                  name: "browserContextId",
                  $ref: "BrowserContextID"
                }
              ],
              returns: [
                {
                  name: "success",
                  type: "boolean"
                }
              ]
            },
            {
              name: "createTarget",
              description: "Creates a new page.",
              parameters: [
                {
                  name: "url",
                  type: "string",
                  description: "The initial URL the page will be navigated to."
                },
                {
                  name: "width",
                  type: "integer",
                  description: "Frame width in DIP (headless chrome only).",
                  optional: !0
                },
                {
                  name: "height",
                  type: "integer",
                  description: "Frame height in DIP (headless chrome only).",
                  optional: !0
                },
                {
                  name: "browserContextId",
                  $ref: "BrowserContextID",
                  description:
                    "The browser context to create the page in (headless chrome only).",
                  optional: !0
                }
              ],
              returns: [
                {
                  name: "targetId",
                  $ref: "TargetID",
                  description: "The id of the page opened."
                }
              ]
            },
            {
              name: "getTargets",
              description: "Retrieves a list of available targets.",
              returns: [
                {
                  name: "targetInfos",
                  type: "array",
                  items: {
                    $ref: "TargetInfo"
                  },
                  description: "The list of targets."
                }
              ]
            }
          ],
          events: [
            {
              name: "targetCreated",
              description:
                "Issued when a possible inspection target is created.",
              parameters: [
                {
                  name: "targetInfo",
                  $ref: "TargetInfo"
                }
              ]
            },
            {
              name: "targetDestroyed",
              description: "Issued when a target is destroyed.",
              parameters: [
                {
                  name: "targetId",
                  $ref: "TargetID"
                }
              ]
            },
            {
              name: "attachedToTarget",
              description:
                "Issued when attached to target because of auto-attach or <code>attachToTarget</code> command.",
              parameters: [
                {
                  name: "targetInfo",
                  $ref: "TargetInfo"
                },
                {
                  name: "waitingForDebugger",
                  type: "boolean"
                }
              ]
            },
            {
              name: "detachedFromTarget",
              description:
                "Issued when detached from target for any reason (including <code>detachFromTarget</code> command).",
              parameters: [
                {
                  name: "targetId",
                  $ref: "TargetID"
                }
              ]
            },
            {
              name: "receivedMessageFromTarget",
              description:
                "Notifies about new protocol message from attached target.",
              parameters: [
                {
                  name: "targetId",
                  $ref: "TargetID"
                },
                {
                  name: "message",
                  type: "string"
                }
              ]
            }
          ]
        },
        {
          domain: "ServiceWorker",
          experimental: !0,
          types: [
            {
              id: "ServiceWorkerRegistration",
              type: "object",
              description: "ServiceWorker registration.",
              properties: [
                {
                  name: "registrationId",
                  type: "string"
                },
                {
                  name: "scopeURL",
                  type: "string"
                },
                {
                  name: "isDeleted",
                  type: "boolean"
                }
              ]
            },
            {
              id: "ServiceWorkerVersionRunningStatus",
              type: "string",
              enum: ["stopped", "starting", "running", "stopping"]
            },
            {
              id: "ServiceWorkerVersionStatus",
              type: "string",
              enum: [
                "new",
                "installing",
                "installed",
                "activating",
                "activated",
                "redundant"
              ]
            },
            {
              id: "ServiceWorkerVersion",
              type: "object",
              description: "ServiceWorker version.",
              properties: [
                {
                  name: "versionId",
                  type: "string"
                },
                {
                  name: "registrationId",
                  type: "string"
                },
                {
                  name: "scriptURL",
                  type: "string"
                },
                {
                  name: "runningStatus",
                  $ref: "ServiceWorkerVersionRunningStatus"
                },
                {
                  name: "status",
                  $ref: "ServiceWorkerVersionStatus"
                },
                {
                  name: "scriptLastModified",
                  type: "number",
                  optional: !0,
                  description:
                    "The Last-Modified header value of the main script."
                },
                {
                  name: "scriptResponseTime",
                  type: "number",
                  optional: !0,
                  description:
                    "The time at which the response headers of the main script were received from the server.  For cached script it is the last time the cache entry was validated."
                },
                {
                  name: "controlledClients",
                  type: "array",
                  optional: !0,
                  items: {
                    $ref: "Target.TargetID"
                  }
                },
                {
                  name: "targetId",
                  $ref: "Target.TargetID",
                  optional: !0
                }
              ]
            },
            {
              id: "ServiceWorkerErrorMessage",
              type: "object",
              description: "ServiceWorker error message.",
              properties: [
                {
                  name: "errorMessage",
                  type: "string"
                },
                {
                  name: "registrationId",
                  type: "string"
                },
                {
                  name: "versionId",
                  type: "string"
                },
                {
                  name: "sourceURL",
                  type: "string"
                },
                {
                  name: "lineNumber",
                  type: "integer"
                },
                {
                  name: "columnNumber",
                  type: "integer"
                }
              ]
            }
          ],
          commands: [
            {
              name: "enable"
            },
            {
              name: "disable"
            },
            {
              name: "unregister",
              parameters: [
                {
                  name: "scopeURL",
                  type: "string"
                }
              ]
            },
            {
              name: "updateRegistration",
              parameters: [
                {
                  name: "scopeURL",
                  type: "string"
                }
              ]
            },
            {
              name: "startWorker",
              parameters: [
                {
                  name: "scopeURL",
                  type: "string"
                }
              ]
            },
            {
              name: "skipWaiting",
              parameters: [
                {
                  name: "scopeURL",
                  type: "string"
                }
              ]
            },
            {
              name: "stopWorker",
              parameters: [
                {
                  name: "versionId",
                  type: "string"
                }
              ]
            },
            {
              name: "inspectWorker",
              parameters: [
                {
                  name: "versionId",
                  type: "string"
                }
              ]
            },
            {
              name: "setForceUpdateOnPageLoad",
              parameters: [
                {
                  name: "forceUpdateOnPageLoad",
                  type: "boolean"
                }
              ]
            },
            {
              name: "deliverPushMessage",
              parameters: [
                {
                  name: "origin",
                  type: "string"
                },
                {
                  name: "registrationId",
                  type: "string"
                },
                {
                  name: "data",
                  type: "string"
                }
              ]
            },
            {
              name: "dispatchSyncEvent",
              parameters: [
                {
                  name: "origin",
                  type: "string"
                },
                {
                  name: "registrationId",
                  type: "string"
                },
                {
                  name: "tag",
                  type: "string"
                },
                {
                  name: "lastChance",
                  type: "boolean"
                }
              ]
            }
          ],
          events: [
            {
              name: "workerRegistrationUpdated",
              parameters: [
                {
                  name: "registrations",
                  type: "array",
                  items: {
                    $ref: "ServiceWorkerRegistration"
                  }
                }
              ]
            },
            {
              name: "workerVersionUpdated",
              parameters: [
                {
                  name: "versions",
                  type: "array",
                  items: {
                    $ref: "ServiceWorkerVersion"
                  }
                }
              ]
            },
            {
              name: "workerErrorReported",
              parameters: [
                {
                  name: "errorMessage",
                  $ref: "ServiceWorkerErrorMessage"
                }
              ]
            }
          ]
        },
        {
          domain: "Input",
          types: [
            {
              id: "TouchPoint",
              type: "object",
              experimental: !0,
              properties: [
                {
                  name: "state",
                  type: "string",
                  enum: [
                    "touchPressed",
                    "touchReleased",
                    "touchMoved",
                    "touchStationary",
                    "touchCancelled"
                  ],
                  description: "State of the touch point."
                },
                {
                  name: "x",
                  type: "integer",
                  description:
                    "X coordinate of the event relative to the main frame's viewport."
                },
                {
                  name: "y",
                  type: "integer",
                  description:
                    "Y coordinate of the event relative to the main frame's viewport. 0 refers to the top of the viewport and Y increases as it proceeds towards the bottom of the viewport."
                },
                {
                  name: "radiusX",
                  type: "integer",
                  optional: !0,
                  description: "X radius of the touch area (default: 1)."
                },
                {
                  name: "radiusY",
                  type: "integer",
                  optional: !0,
                  description: "Y radius of the touch area (default: 1)."
                },
                {
                  name: "rotationAngle",
                  type: "number",
                  optional: !0,
                  description: "Rotation angle (default: 0.0)."
                },
                {
                  name: "force",
                  type: "number",
                  optional: !0,
                  description: "Force (default: 1.0)."
                },
                {
                  name: "id",
                  type: "number",
                  optional: !0,
                  description:
                    "Identifier used to track touch sources between events, must be unique within an event."
                }
              ]
            },
            {
              id: "GestureSourceType",
              type: "string",
              experimental: !0,
              enum: ["default", "touch", "mouse"]
            }
          ],
          commands: [
            {
              name: "setIgnoreInputEvents",
              parameters: [
                {
                  name: "ignore",
                  type: "boolean",
                  description:
                    "Ignores input events processing when set to true."
                }
              ],
              description: "Ignores input events (useful while auditing page)."
            },
            {
              name: "dispatchKeyEvent",
              parameters: [
                {
                  name: "type",
                  type: "string",
                  enum: ["keyDown", "keyUp", "rawKeyDown", "char"],
                  description: "Type of the key event."
                },
                {
                  name: "modifiers",
                  type: "integer",
                  optional: !0,
                  description:
                    "Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0)."
                },
                {
                  name: "timestamp",
                  type: "number",
                  optional: !0,
                  description:
                    "Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time)."
                },
                {
                  name: "text",
                  type: "string",
                  optional: !0,
                  description:
                    'Text as generated by processing a virtual key code with a keyboard layout. Not needed for for <code>keyUp</code> and <code>rawKeyDown</code> events (default: "")'
                },
                {
                  name: "unmodifiedText",
                  type: "string",
                  optional: !0,
                  description:
                    'Text that would have been generated by the keyboard if no modifiers were pressed (except for shift). Useful for shortcut (accelerator) key handling (default: "").'
                },
                {
                  name: "keyIdentifier",
                  type: "string",
                  optional: !0,
                  description:
                    "Unique key identifier (e.g., 'U+0041') (default: \"\")."
                },
                {
                  name: "code",
                  type: "string",
                  optional: !0,
                  description:
                    "Unique DOM defined string value for each physical key (e.g., 'KeyA') (default: \"\")."
                },
                {
                  name: "key",
                  type: "string",
                  optional: !0,
                  description:
                    "Unique DOM defined string value describing the meaning of the key in the context of active modifiers, keyboard layout, etc (e.g., 'AltGr') (default: \"\")."
                },
                {
                  name: "windowsVirtualKeyCode",
                  type: "integer",
                  optional: !0,
                  description: "Windows virtual key code (default: 0)."
                },
                {
                  name: "nativeVirtualKeyCode",
                  type: "integer",
                  optional: !0,
                  description: "Native virtual key code (default: 0)."
                },
                {
                  name: "autoRepeat",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the event was generated from auto repeat (default: false)."
                },
                {
                  name: "isKeypad",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the event was generated from the keypad (default: false)."
                },
                {
                  name: "isSystemKey",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the event was a system key event (default: false)."
                }
              ],
              description: "Dispatches a key event to the page."
            },
            {
              name: "dispatchMouseEvent",
              parameters: [
                {
                  name: "type",
                  type: "string",
                  enum: ["mousePressed", "mouseReleased", "mouseMoved"],
                  description: "Type of the mouse event."
                },
                {
                  name: "x",
                  type: "integer",
                  description:
                    "X coordinate of the event relative to the main frame's viewport."
                },
                {
                  name: "y",
                  type: "integer",
                  description:
                    "Y coordinate of the event relative to the main frame's viewport. 0 refers to the top of the viewport and Y increases as it proceeds towards the bottom of the viewport."
                },
                {
                  name: "modifiers",
                  type: "integer",
                  optional: !0,
                  description:
                    "Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0)."
                },
                {
                  name: "timestamp",
                  type: "number",
                  optional: !0,
                  description:
                    "Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time)."
                },
                {
                  name: "button",
                  type: "string",
                  enum: ["none", "left", "middle", "right"],
                  optional: !0,
                  description: 'Mouse button (default: "none").'
                },
                {
                  name: "clickCount",
                  type: "integer",
                  optional: !0,
                  description:
                    "Number of times the mouse button was clicked (default: 0)."
                }
              ],
              description: "Dispatches a mouse event to the page."
            },
            {
              name: "dispatchTouchEvent",
              experimental: !0,
              parameters: [
                {
                  name: "type",
                  type: "string",
                  enum: ["touchStart", "touchEnd", "touchMove"],
                  description: "Type of the touch event."
                },
                {
                  name: "touchPoints",
                  type: "array",
                  items: {
                    $ref: "TouchPoint"
                  },
                  description: "Touch points."
                },
                {
                  name: "modifiers",
                  type: "integer",
                  optional: !0,
                  description:
                    "Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0)."
                },
                {
                  name: "timestamp",
                  type: "number",
                  optional: !0,
                  description:
                    "Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time)."
                }
              ],
              description: "Dispatches a touch event to the page."
            },
            {
              name: "emulateTouchFromMouseEvent",
              experimental: !0,
              parameters: [
                {
                  name: "type",
                  type: "string",
                  enum: [
                    "mousePressed",
                    "mouseReleased",
                    "mouseMoved",
                    "mouseWheel"
                  ],
                  description: "Type of the mouse event."
                },
                {
                  name: "x",
                  type: "integer",
                  description: "X coordinate of the mouse pointer in DIP."
                },
                {
                  name: "y",
                  type: "integer",
                  description: "Y coordinate of the mouse pointer in DIP."
                },
                {
                  name: "timestamp",
                  type: "number",
                  description:
                    "Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970."
                },
                {
                  name: "button",
                  type: "string",
                  enum: ["none", "left", "middle", "right"],
                  description: "Mouse button."
                },
                {
                  name: "deltaX",
                  type: "number",
                  optional: !0,
                  description:
                    "X delta in DIP for mouse wheel event (default: 0)."
                },
                {
                  name: "deltaY",
                  type: "number",
                  optional: !0,
                  description:
                    "Y delta in DIP for mouse wheel event (default: 0)."
                },
                {
                  name: "modifiers",
                  type: "integer",
                  optional: !0,
                  description:
                    "Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0)."
                },
                {
                  name: "clickCount",
                  type: "integer",
                  optional: !0,
                  description:
                    "Number of times the mouse button was clicked (default: 0)."
                }
              ],
              description:
                "Emulates touch event from the mouse event parameters."
            },
            {
              name: "synthesizePinchGesture",
              parameters: [
                {
                  name: "x",
                  type: "integer",
                  description:
                    "X coordinate of the start of the gesture in CSS pixels."
                },
                {
                  name: "y",
                  type: "integer",
                  description:
                    "Y coordinate of the start of the gesture in CSS pixels."
                },
                {
                  name: "scaleFactor",
                  type: "number",
                  description:
                    "Relative scale factor after zooming (>1.0 zooms in, <1.0 zooms out)."
                },
                {
                  name: "relativeSpeed",
                  type: "integer",
                  optional: !0,
                  description:
                    "Relative pointer speed in pixels per second (default: 800)."
                },
                {
                  name: "gestureSourceType",
                  $ref: "GestureSourceType",
                  optional: !0,
                  description:
                    "Which type of input events to be generated (default: 'default', which queries the platform for the preferred input type)."
                }
              ],
              description:
                "Synthesizes a pinch gesture over a time period by issuing appropriate touch events.",
              experimental: !0
            },
            {
              name: "synthesizeScrollGesture",
              parameters: [
                {
                  name: "x",
                  type: "integer",
                  description:
                    "X coordinate of the start of the gesture in CSS pixels."
                },
                {
                  name: "y",
                  type: "integer",
                  description:
                    "Y coordinate of the start of the gesture in CSS pixels."
                },
                {
                  name: "xDistance",
                  type: "integer",
                  optional: !0,
                  description:
                    "The distance to scroll along the X axis (positive to scroll left)."
                },
                {
                  name: "yDistance",
                  type: "integer",
                  optional: !0,
                  description:
                    "The distance to scroll along the Y axis (positive to scroll up)."
                },
                {
                  name: "xOverscroll",
                  type: "integer",
                  optional: !0,
                  description:
                    "The number of additional pixels to scroll back along the X axis, in addition to the given distance."
                },
                {
                  name: "yOverscroll",
                  type: "integer",
                  optional: !0,
                  description:
                    "The number of additional pixels to scroll back along the Y axis, in addition to the given distance."
                },
                {
                  name: "preventFling",
                  type: "boolean",
                  optional: !0,
                  description: "Prevent fling (default: true)."
                },
                {
                  name: "speed",
                  type: "integer",
                  optional: !0,
                  description:
                    "Swipe speed in pixels per second (default: 800)."
                },
                {
                  name: "gestureSourceType",
                  $ref: "GestureSourceType",
                  optional: !0,
                  description:
                    "Which type of input events to be generated (default: 'default', which queries the platform for the preferred input type)."
                },
                {
                  name: "repeatCount",
                  type: "integer",
                  optional: !0,
                  description:
                    "The number of times to repeat the gesture (default: 0)."
                },
                {
                  name: "repeatDelayMs",
                  type: "integer",
                  optional: !0,
                  description:
                    "The number of milliseconds delay between each repeat. (default: 250)."
                },
                {
                  name: "interactionMarkerName",
                  type: "string",
                  optional: !0,
                  description:
                    'The name of the interaction markers to generate, if not empty (default: "").'
                }
              ],
              description:
                "Synthesizes a scroll gesture over a time period by issuing appropriate touch events.",
              experimental: !0
            },
            {
              name: "synthesizeTapGesture",
              parameters: [
                {
                  name: "x",
                  type: "integer",
                  description:
                    "X coordinate of the start of the gesture in CSS pixels."
                },
                {
                  name: "y",
                  type: "integer",
                  description:
                    "Y coordinate of the start of the gesture in CSS pixels."
                },
                {
                  name: "duration",
                  type: "integer",
                  optional: !0,
                  description:
                    "Duration between touchdown and touchup events in ms (default: 50)."
                },
                {
                  name: "tapCount",
                  type: "integer",
                  optional: !0,
                  description:
                    "Number of times to perform the tap (e.g. 2 for double tap, default: 1)."
                },
                {
                  name: "gestureSourceType",
                  $ref: "GestureSourceType",
                  optional: !0,
                  description:
                    "Which type of input events to be generated (default: 'default', which queries the platform for the preferred input type)."
                }
              ],
              description:
                "Synthesizes a tap gesture over a time period by issuing appropriate touch events.",
              experimental: !0
            }
          ],
          events: []
        },
        {
          domain: "LayerTree",
          experimental: !0,
          dependencies: ["DOM"],
          types: [
            {
              id: "LayerId",
              type: "string",
              description: "Unique Layer identifier."
            },
            {
              id: "SnapshotId",
              type: "string",
              description: "Unique snapshot identifier."
            },
            {
              id: "ScrollRect",
              type: "object",
              description:
                "Rectangle where scrolling happens on the main thread.",
              properties: [
                {
                  name: "rect",
                  $ref: "DOM.Rect",
                  description: "Rectangle itself."
                },
                {
                  name: "type",
                  type: "string",
                  enum: [
                    "RepaintsOnScroll",
                    "TouchEventHandler",
                    "WheelEventHandler"
                  ],
                  description:
                    "Reason for rectangle to force scrolling on the main thread"
                }
              ]
            },
            {
              id: "PictureTile",
              type: "object",
              description:
                "Serialized fragment of layer picture along with its offset within the layer.",
              properties: [
                {
                  name: "x",
                  type: "number",
                  description: "Offset from owning layer left boundary"
                },
                {
                  name: "y",
                  type: "number",
                  description: "Offset from owning layer top boundary"
                },
                {
                  name: "picture",
                  type: "string",
                  description: "Base64-encoded snapshot data."
                }
              ]
            },
            {
              id: "Layer",
              type: "object",
              description: "Information about a compositing layer.",
              properties: [
                {
                  name: "layerId",
                  $ref: "LayerId",
                  description: "The unique id for this layer."
                },
                {
                  name: "parentLayerId",
                  $ref: "LayerId",
                  optional: !0,
                  description: "The id of parent (not present for root)."
                },
                {
                  name: "backendNodeId",
                  $ref: "DOM.BackendNodeId",
                  optional: !0,
                  description:
                    "The backend id for the node associated with this layer."
                },
                {
                  name: "offsetX",
                  type: "number",
                  description: "Offset from parent layer, X coordinate."
                },
                {
                  name: "offsetY",
                  type: "number",
                  description: "Offset from parent layer, Y coordinate."
                },
                {
                  name: "width",
                  type: "number",
                  description: "Layer width."
                },
                {
                  name: "height",
                  type: "number",
                  description: "Layer height."
                },
                {
                  name: "transform",
                  type: "array",
                  items: {
                    type: "number"
                  },
                  minItems: 16,
                  maxItems: 16,
                  optional: !0,
                  description:
                    "Transformation matrix for layer, default is identity matrix"
                },
                {
                  name: "anchorX",
                  type: "number",
                  optional: !0,
                  description:
                    "Transform anchor point X, absent if no transform specified"
                },
                {
                  name: "anchorY",
                  type: "number",
                  optional: !0,
                  description:
                    "Transform anchor point Y, absent if no transform specified"
                },
                {
                  name: "anchorZ",
                  type: "number",
                  optional: !0,
                  description:
                    "Transform anchor point Z, absent if no transform specified"
                },
                {
                  name: "paintCount",
                  type: "integer",
                  description: "Indicates how many time this layer has painted."
                },
                {
                  name: "drawsContent",
                  type: "boolean",
                  description:
                    "Indicates whether this layer hosts any content, rather than being used for transform/scrolling purposes only."
                },
                {
                  name: "invisible",
                  type: "boolean",
                  optional: !0,
                  description: "Set if layer is not visible."
                },
                {
                  name: "scrollRects",
                  type: "array",
                  items: {
                    $ref: "ScrollRect"
                  },
                  optional: !0,
                  description: "Rectangles scrolling on main thread only."
                }
              ]
            },
            {
              id: "PaintProfile",
              type: "array",
              description: "Array of timings, one per paint step.",
              items: {
                type: "number",
                description:
                  "A time in seconds since the end of previous step (for the first step, time since painting started)"
              }
            }
          ],
          commands: [
            {
              name: "enable",
              description: "Enables compositing tree inspection."
            },
            {
              name: "disable",
              description: "Disables compositing tree inspection."
            },
            {
              name: "compositingReasons",
              parameters: [
                {
                  name: "layerId",
                  $ref: "LayerId",
                  description:
                    "The id of the layer for which we want to get the reasons it was composited."
                }
              ],
              description:
                "Provides the reasons why the given layer was composited.",
              returns: [
                {
                  name: "compositingReasons",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description:
                    "A list of strings specifying reasons for the given layer to become composited."
                }
              ]
            },
            {
              name: "makeSnapshot",
              parameters: [
                {
                  name: "layerId",
                  $ref: "LayerId",
                  description: "The id of the layer."
                }
              ],
              description: "Returns the layer snapshot identifier.",
              returns: [
                {
                  name: "snapshotId",
                  $ref: "SnapshotId",
                  description: "The id of the layer snapshot."
                }
              ]
            },
            {
              name: "loadSnapshot",
              parameters: [
                {
                  name: "tiles",
                  type: "array",
                  items: {
                    $ref: "PictureTile"
                  },
                  minItems: 1,
                  description: "An array of tiles composing the snapshot."
                }
              ],
              description: "Returns the snapshot identifier.",
              returns: [
                {
                  name: "snapshotId",
                  $ref: "SnapshotId",
                  description: "The id of the snapshot."
                }
              ]
            },
            {
              name: "releaseSnapshot",
              parameters: [
                {
                  name: "snapshotId",
                  $ref: "SnapshotId",
                  description: "The id of the layer snapshot."
                }
              ],
              description: "Releases layer snapshot captured by the back-end."
            },
            {
              name: "profileSnapshot",
              parameters: [
                {
                  name: "snapshotId",
                  $ref: "SnapshotId",
                  description: "The id of the layer snapshot."
                },
                {
                  name: "minRepeatCount",
                  type: "integer",
                  optional: !0,
                  description:
                    "The maximum number of times to replay the snapshot (1, if not specified)."
                },
                {
                  name: "minDuration",
                  type: "number",
                  optional: !0,
                  description:
                    "The minimum duration (in seconds) to replay the snapshot."
                },
                {
                  name: "clipRect",
                  $ref: "DOM.Rect",
                  optional: !0,
                  description:
                    "The clip rectangle to apply when replaying the snapshot."
                }
              ],
              returns: [
                {
                  name: "timings",
                  type: "array",
                  items: {
                    $ref: "PaintProfile"
                  },
                  description: "The array of paint profiles, one per run."
                }
              ]
            },
            {
              name: "replaySnapshot",
              parameters: [
                {
                  name: "snapshotId",
                  $ref: "SnapshotId",
                  description: "The id of the layer snapshot."
                },
                {
                  name: "fromStep",
                  type: "integer",
                  optional: !0,
                  description:
                    "The first step to replay from (replay from the very start if not specified)."
                },
                {
                  name: "toStep",
                  type: "integer",
                  optional: !0,
                  description:
                    "The last step to replay to (replay till the end if not specified)."
                },
                {
                  name: "scale",
                  type: "number",
                  optional: !0,
                  description:
                    "The scale to apply while replaying (defaults to 1)."
                }
              ],
              description:
                "Replays the layer snapshot and returns the resulting bitmap.",
              returns: [
                {
                  name: "dataURL",
                  type: "string",
                  description: "A data: URL for resulting image."
                }
              ]
            },
            {
              name: "snapshotCommandLog",
              parameters: [
                {
                  name: "snapshotId",
                  $ref: "SnapshotId",
                  description: "The id of the layer snapshot."
                }
              ],
              description: "Replays the layer snapshot and returns canvas log.",
              returns: [
                {
                  name: "commandLog",
                  type: "array",
                  items: {
                    type: "object"
                  },
                  description: "The array of canvas function calls."
                }
              ]
            }
          ],
          events: [
            {
              name: "layerTreeDidChange",
              parameters: [
                {
                  name: "layers",
                  type: "array",
                  items: {
                    $ref: "Layer"
                  },
                  optional: !0,
                  description:
                    "Layer tree, absent if not in the comspositing mode."
                }
              ]
            },
            {
              name: "layerPainted",
              parameters: [
                {
                  name: "layerId",
                  $ref: "LayerId",
                  description: "The id of the painted layer."
                },
                {
                  name: "clip",
                  $ref: "DOM.Rect",
                  description: "Clip rectangle."
                }
              ]
            }
          ]
        },
        {
          domain: "DeviceOrientation",
          experimental: !0,
          commands: [
            {
              name: "setDeviceOrientationOverride",
              description: "Overrides the Device Orientation.",
              parameters: [
                {
                  name: "alpha",
                  type: "number",
                  description: "Mock alpha"
                },
                {
                  name: "beta",
                  type: "number",
                  description: "Mock beta"
                },
                {
                  name: "gamma",
                  type: "number",
                  description: "Mock gamma"
                }
              ]
            },
            {
              name: "clearDeviceOrientationOverride",
              description: "Clears the overridden Device Orientation."
            }
          ]
        },
        {
          domain: "Tracing",
          dependencies: ["IO"],
          experimental: !0,
          types: [
            {
              id: "MemoryDumpConfig",
              type: "object",
              description:
                'Configuration for memory dump. Used only when "memory-infra" category is enabled.'
            },
            {
              id: "TraceConfig",
              type: "object",
              properties: [
                {
                  name: "recordMode",
                  type: "string",
                  optional: !0,
                  enum: [
                    "recordUntilFull",
                    "recordContinuously",
                    "recordAsMuchAsPossible",
                    "echoToConsole"
                  ],
                  description: "Controls how the trace buffer stores data."
                },
                {
                  name: "enableSampling",
                  type: "boolean",
                  optional: !0,
                  description: "Turns on JavaScript stack sampling."
                },
                {
                  name: "enableSystrace",
                  type: "boolean",
                  optional: !0,
                  description: "Turns on system tracing."
                },
                {
                  name: "enableArgumentFilter",
                  type: "boolean",
                  optional: !0,
                  description: "Turns on argument filter."
                },
                {
                  name: "includedCategories",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  optional: !0,
                  description: "Included category filters."
                },
                {
                  name: "excludedCategories",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  optional: !0,
                  description: "Excluded category filters."
                },
                {
                  name: "syntheticDelays",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  optional: !0,
                  description:
                    "Configuration to synthesize the delays in tracing."
                },
                {
                  name: "memoryDumpConfig",
                  $ref: "MemoryDumpConfig",
                  optional: !0,
                  description:
                    'Configuration for memory dump triggers. Used only when "memory-infra" category is enabled.'
                }
              ]
            }
          ],
          commands: [
            {
              name: "start",
              description: "Start trace events collection.",
              parameters: [
                {
                  name: "categories",
                  type: "string",
                  optional: !0,
                  deprecated: !0,
                  description: "Category/tag filter"
                },
                {
                  name: "options",
                  type: "string",
                  optional: !0,
                  deprecated: !0,
                  description: "Tracing options"
                },
                {
                  name: "bufferUsageReportingInterval",
                  type: "number",
                  optional: !0,
                  description:
                    "If set, the agent will issue bufferUsage events at this interval, specified in milliseconds"
                },
                {
                  name: "transferMode",
                  type: "string",
                  enum: ["ReportEvents", "ReturnAsStream"],
                  optional: !0,
                  description:
                    "Whether to report trace events as series of dataCollected events or to save trace to a stream (defaults to <code>ReportEvents</code>)."
                },
                {
                  name: "traceConfig",
                  $ref: "TraceConfig",
                  optional: !0,
                  description: ""
                }
              ]
            },
            {
              name: "end",
              description: "Stop trace events collection."
            },
            {
              name: "getCategories",
              description: "Gets supported tracing categories.",
              returns: [
                {
                  name: "categories",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "A list of supported tracing categories."
                }
              ]
            },
            {
              name: "requestMemoryDump",
              description: "Request a global memory dump.",
              returns: [
                {
                  name: "dumpGuid",
                  type: "string",
                  description: "GUID of the resulting global memory dump."
                },
                {
                  name: "success",
                  type: "boolean",
                  description: "True iff the global memory dump succeeded."
                }
              ]
            },
            {
              name: "recordClockSyncMarker",
              description: "Record a clock sync marker in the trace.",
              parameters: [
                {
                  name: "syncId",
                  type: "string",
                  description: "The ID of this clock sync marker"
                }
              ]
            }
          ],
          events: [
            {
              name: "dataCollected",
              parameters: [
                {
                  name: "value",
                  type: "array",
                  items: {
                    type: "object"
                  }
                }
              ],
              description:
                "Contains an bucket of collected trace events. When tracing is stopped collected events will be send as a sequence of dataCollected events followed by tracingComplete event."
            },
            {
              name: "tracingComplete",
              description:
                "Signals that tracing is stopped and there is no trace buffers pending flush, all data were delivered via dataCollected events.",
              parameters: [
                {
                  name: "stream",
                  $ref: "IO.StreamHandle",
                  optional: !0,
                  description:
                    "A handle of the stream that holds resulting trace data."
                }
              ]
            },
            {
              name: "bufferUsage",
              parameters: [
                {
                  name: "percentFull",
                  type: "number",
                  optional: !0,
                  description:
                    "A number in range [0..1] that indicates the used size of event buffer as a fraction of its total size."
                },
                {
                  name: "eventCount",
                  type: "number",
                  optional: !0,
                  description:
                    "An approximate number of events in the trace log."
                },
                {
                  name: "value",
                  type: "number",
                  optional: !0,
                  description:
                    "A number in range [0..1] that indicates the used size of event buffer as a fraction of its total size."
                }
              ]
            }
          ]
        },
        {
          domain: "Animation",
          experimental: !0,
          dependencies: ["Runtime", "DOM"],
          types: [
            {
              id: "Animation",
              type: "object",
              experimental: !0,
              properties: [
                {
                  name: "id",
                  type: "string",
                  description: "<code>Animation</code>'s id."
                },
                {
                  name: "name",
                  type: "string",
                  description: "<code>Animation</code>'s name."
                },
                {
                  name: "pausedState",
                  type: "boolean",
                  experimental: !0,
                  description: "<code>Animation</code>'s internal paused state."
                },
                {
                  name: "playState",
                  type: "string",
                  description: "<code>Animation</code>'s play state."
                },
                {
                  name: "playbackRate",
                  type: "number",
                  description: "<code>Animation</code>'s playback rate."
                },
                {
                  name: "startTime",
                  type: "number",
                  description: "<code>Animation</code>'s start time."
                },
                {
                  name: "currentTime",
                  type: "number",
                  description: "<code>Animation</code>'s current time."
                },
                {
                  name: "source",
                  $ref: "AnimationEffect",
                  description: "<code>Animation</code>'s source animation node."
                },
                {
                  name: "type",
                  type: "string",
                  enum: ["CSSTransition", "CSSAnimation", "WebAnimation"],
                  description: "Animation type of <code>Animation</code>."
                },
                {
                  name: "cssId",
                  type: "string",
                  optional: !0,
                  description:
                    "A unique ID for <code>Animation</code> representing the sources that triggered this CSS animation/transition."
                }
              ],
              description: "Animation instance."
            },
            {
              id: "AnimationEffect",
              type: "object",
              experimental: !0,
              properties: [
                {
                  name: "delay",
                  type: "number",
                  description: "<code>AnimationEffect</code>'s delay."
                },
                {
                  name: "endDelay",
                  type: "number",
                  description: "<code>AnimationEffect</code>'s end delay."
                },
                {
                  name: "iterationStart",
                  type: "number",
                  description: "<code>AnimationEffect</code>'s iteration start."
                },
                {
                  name: "iterations",
                  type: "number",
                  description: "<code>AnimationEffect</code>'s iterations."
                },
                {
                  name: "duration",
                  type: "number",
                  description:
                    "<code>AnimationEffect</code>'s iteration duration."
                },
                {
                  name: "direction",
                  type: "string",
                  description:
                    "<code>AnimationEffect</code>'s playback direction."
                },
                {
                  name: "fill",
                  type: "string",
                  description: "<code>AnimationEffect</code>'s fill mode."
                },
                {
                  name: "backendNodeId",
                  $ref: "DOM.BackendNodeId",
                  description: "<code>AnimationEffect</code>'s target node."
                },
                {
                  name: "keyframesRule",
                  $ref: "KeyframesRule",
                  optional: !0,
                  description: "<code>AnimationEffect</code>'s keyframes."
                },
                {
                  name: "easing",
                  type: "string",
                  description: "<code>AnimationEffect</code>'s timing function."
                }
              ],
              description: "AnimationEffect instance"
            },
            {
              id: "KeyframesRule",
              type: "object",
              properties: [
                {
                  name: "name",
                  type: "string",
                  optional: !0,
                  description: "CSS keyframed animation's name."
                },
                {
                  name: "keyframes",
                  type: "array",
                  items: {
                    $ref: "KeyframeStyle"
                  },
                  description: "List of animation keyframes."
                }
              ],
              description: "Keyframes Rule"
            },
            {
              id: "KeyframeStyle",
              type: "object",
              properties: [
                {
                  name: "offset",
                  type: "string",
                  description: "Keyframe's time offset."
                },
                {
                  name: "easing",
                  type: "string",
                  description: "<code>AnimationEffect</code>'s timing function."
                }
              ],
              description: "Keyframe Style"
            }
          ],
          commands: [
            {
              name: "enable",
              description: "Enables animation domain notifications."
            },
            {
              name: "disable",
              description: "Disables animation domain notifications."
            },
            {
              name: "getPlaybackRate",
              returns: [
                {
                  name: "playbackRate",
                  type: "number",
                  description: "Playback rate for animations on page."
                }
              ],
              description: "Gets the playback rate of the document timeline."
            },
            {
              name: "setPlaybackRate",
              parameters: [
                {
                  name: "playbackRate",
                  type: "number",
                  description: "Playback rate for animations on page"
                }
              ],
              description: "Sets the playback rate of the document timeline."
            },
            {
              name: "getCurrentTime",
              parameters: [
                {
                  name: "id",
                  type: "string",
                  description: "Id of animation."
                }
              ],
              returns: [
                {
                  name: "currentTime",
                  type: "number",
                  description: "Current time of the page."
                }
              ],
              description: "Returns the current time of the an animation."
            },
            {
              name: "setPaused",
              parameters: [
                {
                  name: "animations",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "Animations to set the pause state of."
                },
                {
                  name: "paused",
                  type: "boolean",
                  description: "Paused state to set to."
                }
              ],
              description: "Sets the paused state of a set of animations."
            },
            {
              name: "setTiming",
              parameters: [
                {
                  name: "animationId",
                  type: "string",
                  description: "Animation id."
                },
                {
                  name: "duration",
                  type: "number",
                  description: "Duration of the animation."
                },
                {
                  name: "delay",
                  type: "number",
                  description: "Delay of the animation."
                }
              ],
              description: "Sets the timing of an animation node."
            },
            {
              name: "seekAnimations",
              parameters: [
                {
                  name: "animations",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "List of animation ids to seek."
                },
                {
                  name: "currentTime",
                  type: "number",
                  description: "Set the current time of each animation."
                }
              ],
              description:
                "Seek a set of animations to a particular time within each animation."
            },
            {
              name: "releaseAnimations",
              parameters: [
                {
                  name: "animations",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "List of animation ids to seek."
                }
              ],
              description:
                "Releases a set of animations to no longer be manipulated."
            },
            {
              name: "resolveAnimation",
              parameters: [
                {
                  name: "animationId",
                  type: "string",
                  description: "Animation id."
                }
              ],
              returns: [
                {
                  name: "remoteObject",
                  $ref: "Runtime.RemoteObject",
                  description: "Corresponding remote object."
                }
              ],
              description: "Gets the remote object of the Animation."
            }
          ],
          events: [
            {
              name: "animationCreated",
              parameters: [
                {
                  name: "id",
                  type: "string",
                  description: "Id of the animation that was created."
                }
              ],
              description: "Event for each animation that has been created."
            },
            {
              name: "animationStarted",
              parameters: [
                {
                  name: "animation",
                  $ref: "Animation",
                  description: "Animation that was started."
                }
              ],
              description: "Event for animation that has been started."
            },
            {
              name: "animationCanceled",
              parameters: [
                {
                  name: "id",
                  type: "string",
                  description: "Id of the animation that was cancelled."
                }
              ],
              description: "Event for when an animation has been cancelled."
            }
          ]
        },
        {
          domain: "Accessibility",
          experimental: !0,
          dependencies: ["DOM"],
          types: [
            {
              id: "AXNodeId",
              type: "string",
              description: "Unique accessibility node identifier."
            },
            {
              id: "AXValueType",
              type: "string",
              enum: [
                "boolean",
                "tristate",
                "booleanOrUndefined",
                "idref",
                "idrefList",
                "integer",
                "node",
                "nodeList",
                "number",
                "string",
                "computedString",
                "token",
                "tokenList",
                "domRelation",
                "role",
                "internalRole",
                "valueUndefined"
              ],
              description: "Enum of possible property types."
            },
            {
              id: "AXValueSourceType",
              type: "string",
              enum: [
                "attribute",
                "implicit",
                "style",
                "contents",
                "placeholder",
                "relatedElement"
              ],
              description: "Enum of possible property sources."
            },
            {
              id: "AXValueNativeSourceType",
              type: "string",
              enum: [
                "figcaption",
                "label",
                "labelfor",
                "labelwrapped",
                "legend",
                "tablecaption",
                "title",
                "other"
              ],
              description:
                "Enum of possible native property sources (as a subtype of a particular AXValueSourceType)."
            },
            {
              id: "AXValueSource",
              type: "object",
              properties: [
                {
                  name: "type",
                  $ref: "AXValueSourceType",
                  description: "What type of source this is."
                },
                {
                  name: "value",
                  $ref: "AXValue",
                  description: "The value of this property source.",
                  optional: !0
                },
                {
                  name: "attribute",
                  type: "string",
                  description: "The name of the relevant attribute, if any.",
                  optional: !0
                },
                {
                  name: "attributeValue",
                  $ref: "AXValue",
                  description: "The value of the relevant attribute, if any.",
                  optional: !0
                },
                {
                  name: "superseded",
                  type: "boolean",
                  description:
                    "Whether this source is superseded by a higher priority source.",
                  optional: !0
                },
                {
                  name: "nativeSource",
                  $ref: "AXValueNativeSourceType",
                  description:
                    "The native markup source for this value, e.g. a <label> element.",
                  optional: !0
                },
                {
                  name: "nativeSourceValue",
                  $ref: "AXValue",
                  description:
                    "The value, such as a node or node list, of the native source.",
                  optional: !0
                },
                {
                  name: "invalid",
                  type: "boolean",
                  description:
                    "Whether the value for this property is invalid.",
                  optional: !0
                },
                {
                  name: "invalidReason",
                  type: "string",
                  description: "Reason for the value being invalid, if it is.",
                  optional: !0
                }
              ],
              description: "A single source for a computed AX property."
            },
            {
              id: "AXRelatedNode",
              type: "object",
              properties: [
                {
                  name: "backendDOMNodeId",
                  $ref: "DOM.BackendNodeId",
                  description: "The BackendNodeId of the related DOM node."
                },
                {
                  name: "idref",
                  type: "string",
                  description: "The IDRef value provided, if any.",
                  optional: !0
                },
                {
                  name: "text",
                  type: "string",
                  description:
                    "The text alternative of this node in the current context.",
                  optional: !0
                }
              ]
            },
            {
              id: "AXProperty",
              type: "object",
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "The name of this property."
                },
                {
                  name: "value",
                  $ref: "AXValue",
                  description: "The value of this property."
                }
              ]
            },
            {
              id: "AXValue",
              type: "object",
              properties: [
                {
                  name: "type",
                  $ref: "AXValueType",
                  description: "The type of this value."
                },
                {
                  name: "value",
                  type: "any",
                  description: "The computed value of this property.",
                  optional: !0
                },
                {
                  name: "relatedNodes",
                  type: "array",
                  items: {
                    $ref: "AXRelatedNode"
                  },
                  description: "One or more related nodes, if applicable.",
                  optional: !0
                },
                {
                  name: "sources",
                  type: "array",
                  items: {
                    $ref: "AXValueSource"
                  },
                  description:
                    "The sources which contributed to the computation of this property.",
                  optional: !0
                }
              ],
              description: "A single computed AX property."
            },
            {
              id: "AXGlobalStates",
              type: "string",
              enum: [
                "disabled",
                "hidden",
                "hiddenRoot",
                "invalid",
                "keyshortcuts",
                "roledescription"
              ],
              description: "States which apply to every AX node."
            },
            {
              id: "AXLiveRegionAttributes",
              type: "string",
              enum: ["live", "atomic", "relevant", "busy", "root"],
              description: "Attributes which apply to nodes in live regions."
            },
            {
              id: "AXWidgetAttributes",
              type: "string",
              enum: [
                "autocomplete",
                "haspopup",
                "level",
                "multiselectable",
                "orientation",
                "multiline",
                "readonly",
                "required",
                "valuemin",
                "valuemax",
                "valuetext"
              ],
              description: "Attributes which apply to widgets."
            },
            {
              id: "AXWidgetStates",
              type: "string",
              enum: ["checked", "expanded", "modal", "pressed", "selected"],
              description: "States which apply to widgets."
            },
            {
              id: "AXRelationshipAttributes",
              type: "string",
              enum: [
                "activedescendant",
                "controls",
                "describedby",
                "details",
                "errormessage",
                "flowto",
                "labelledby",
                "owns"
              ],
              description:
                "Relationships between elements other than parent/child/sibling."
            },
            {
              id: "AXNode",
              type: "object",
              properties: [
                {
                  name: "nodeId",
                  $ref: "AXNodeId",
                  description: "Unique identifier for this node."
                },
                {
                  name: "ignored",
                  type: "boolean",
                  description: "Whether this node is ignored for accessibility"
                },
                {
                  name: "ignoredReasons",
                  type: "array",
                  items: {
                    $ref: "AXProperty"
                  },
                  description: "Collection of reasons why this node is hidden.",
                  optional: !0
                },
                {
                  name: "role",
                  $ref: "AXValue",
                  description:
                    "This <code>Node</code>'s role, whether explicit or implicit.",
                  optional: !0
                },
                {
                  name: "name",
                  $ref: "AXValue",
                  description:
                    "The accessible name for this <code>Node</code>.",
                  optional: !0
                },
                {
                  name: "description",
                  $ref: "AXValue",
                  description:
                    "The accessible description for this <code>Node</code>.",
                  optional: !0
                },
                {
                  name: "value",
                  $ref: "AXValue",
                  description: "The value for this <code>Node</code>.",
                  optional: !0
                },
                {
                  name: "properties",
                  type: "array",
                  items: {
                    $ref: "AXProperty"
                  },
                  description: "All other properties",
                  optional: !0
                },
                {
                  name: "childIds",
                  type: "array",
                  items: {
                    $ref: "AXNodeId"
                  },
                  description: "IDs for each of this node's child nodes.",
                  optional: !0
                },
                {
                  name: "backendDOMNodeId",
                  $ref: "DOM.BackendNodeId",
                  description:
                    "The backend ID for the associated DOM node, if any.",
                  optional: !0
                }
              ],
              description: "A node in the accessibility tree."
            }
          ],
          commands: [
            {
              name: "getPartialAXTree",
              parameters: [
                {
                  name: "nodeId",
                  $ref: "DOM.NodeId",
                  description:
                    "ID of node to get the partial accessibility tree for."
                },
                {
                  name: "fetchRelatives",
                  type: "boolean",
                  description:
                    "Whether to fetch this nodes ancestors, siblings and children. Defaults to true.",
                  optional: !0
                }
              ],
              returns: [
                {
                  name: "nodes",
                  type: "array",
                  items: {
                    $ref: "AXNode"
                  },
                  description:
                    "The <code>Accessibility.AXNode</code> for this DOM node, if it exists, plus its ancestors, siblings and children, if requested."
                }
              ],
              description:
                "Fetches the accessibility node and partial accessibility tree for this DOM node, if it exists.",
              experimental: !0
            }
          ]
        },
        {
          domain: "Storage",
          experimental: !0,
          types: [
            {
              id: "StorageType",
              type: "string",
              enum: [
                "appcache",
                "cookies",
                "file_systems",
                "indexeddb",
                "local_storage",
                "shader_cache",
                "websql",
                "service_workers",
                "cache_storage",
                "all"
              ],
              description: "Enum of possible storage types."
            }
          ],
          commands: [
            {
              name: "clearDataForOrigin",
              parameters: [
                {
                  name: "origin",
                  type: "string",
                  description: "Security origin."
                },
                {
                  name: "storageTypes",
                  type: "string",
                  description: "Comma separated origin names."
                }
              ],
              description: "Clears storage for origin."
            }
          ]
        },
        {
          domain: "Log",
          description: "Provides access to log entries.",
          dependencies: ["Runtime", "Network"],
          experimental: !0,
          types: [
            {
              id: "LogEntry",
              type: "object",
              description: "Log entry.",
              properties: [
                {
                  name: "source",
                  type: "string",
                  enum: [
                    "xml",
                    "javascript",
                    "network",
                    "storage",
                    "appcache",
                    "rendering",
                    "security",
                    "deprecation",
                    "worker",
                    "violation",
                    "intervention",
                    "other"
                  ],
                  description: "Log entry source."
                },
                {
                  name: "level",
                  type: "string",
                  enum: ["verbose", "info", "warning", "error"],
                  description: "Log entry severity."
                },
                {
                  name: "text",
                  type: "string",
                  description: "Logged text."
                },
                {
                  name: "timestamp",
                  $ref: "Runtime.Timestamp",
                  description: "Timestamp when this entry was added."
                },
                {
                  name: "url",
                  type: "string",
                  optional: !0,
                  description: "URL of the resource if known."
                },
                {
                  name: "lineNumber",
                  type: "integer",
                  optional: !0,
                  description: "Line number in the resource."
                },
                {
                  name: "stackTrace",
                  $ref: "Runtime.StackTrace",
                  optional: !0,
                  description: "JavaScript stack trace."
                },
                {
                  name: "networkRequestId",
                  $ref: "Network.RequestId",
                  optional: !0,
                  description:
                    "Identifier of the network request associated with this entry."
                },
                {
                  name: "workerId",
                  type: "string",
                  optional: !0,
                  description:
                    "Identifier of the worker associated with this entry."
                }
              ]
            },
            {
              id: "ViolationSetting",
              type: "object",
              description: "Violation configuration setting.",
              properties: [
                {
                  name: "name",
                  type: "string",
                  enum: [
                    "longTask",
                    "longLayout",
                    "blockedEvent",
                    "blockedParser",
                    "discouragedAPIUse",
                    "handler",
                    "recurringHandler"
                  ],
                  description: "Violation type."
                },
                {
                  name: "threshold",
                  type: "number",
                  description: "Time threshold to trigger upon."
                }
              ]
            }
          ],
          commands: [
            {
              name: "enable",
              description:
                "Enables log domain, sends the entries collected so far to the client by means of the <code>entryAdded</code> notification."
            },
            {
              name: "disable",
              description:
                "Disables log domain, prevents further log entries from being reported to the client."
            },
            {
              name: "clear",
              description: "Clears the log."
            },
            {
              name: "startViolationsReport",
              parameters: [
                {
                  name: "config",
                  type: "array",
                  items: {
                    $ref: "ViolationSetting"
                  },
                  description: "Configuration for violations."
                }
              ],
              description: "start violation reporting."
            },
            {
              name: "stopViolationsReport",
              description: "Stop violation reporting."
            }
          ],
          events: [
            {
              name: "entryAdded",
              parameters: [
                {
                  name: "entry",
                  $ref: "LogEntry",
                  description: "The entry."
                }
              ],
              description: "Issued when new message was logged."
            }
          ]
        },
        {
          domain: "SystemInfo",
          description:
            "The SystemInfo domain defines methods and events for querying low-level system information.",
          experimental: !0,
          types: [
            {
              id: "GPUDevice",
              type: "object",
              properties: [
                {
                  name: "vendorId",
                  type: "number",
                  description:
                    "PCI ID of the GPU vendor, if available; 0 otherwise."
                },
                {
                  name: "deviceId",
                  type: "number",
                  description:
                    "PCI ID of the GPU device, if available; 0 otherwise."
                },
                {
                  name: "vendorString",
                  type: "string",
                  description:
                    "String description of the GPU vendor, if the PCI ID is not available."
                },
                {
                  name: "deviceString",
                  type: "string",
                  description:
                    "String description of the GPU device, if the PCI ID is not available."
                }
              ],
              description: "Describes a single graphics processor (GPU)."
            },
            {
              id: "GPUInfo",
              type: "object",
              properties: [
                {
                  name: "devices",
                  type: "array",
                  items: {
                    $ref: "GPUDevice"
                  },
                  description:
                    "The graphics devices on the system. Element 0 is the primary GPU."
                },
                {
                  name: "auxAttributes",
                  type: "object",
                  optional: !0,
                  description:
                    "An optional dictionary of additional GPU related attributes."
                },
                {
                  name: "featureStatus",
                  type: "object",
                  optional: !0,
                  description:
                    "An optional dictionary of graphics features and their status."
                },
                {
                  name: "driverBugWorkarounds",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description:
                    "An optional array of GPU driver bug workarounds."
                }
              ],
              description:
                "Provides information about the GPU(s) on the system."
            }
          ],
          commands: [
            {
              name: "getInfo",
              description: "Returns information about the system.",
              returns: [
                {
                  name: "gpu",
                  $ref: "GPUInfo",
                  description: "Information about the GPUs on the system."
                },
                {
                  name: "modelName",
                  type: "string",
                  description:
                    "A platform-dependent description of the model of the machine. On Mac OS, this is, for example, 'MacBookPro'. Will be the empty string if not supported."
                },
                {
                  name: "modelVersion",
                  type: "string",
                  description:
                    "A platform-dependent description of the version of the machine. On Mac OS, this is, for example, '10.1'. Will be the empty string if not supported."
                },
                {
                  name: "commandLine",
                  type: "string",
                  description:
                    "The command line string used to launch the browser. Will be the empty string if not supported."
                }
              ]
            }
          ]
        },
        {
          domain: "Tethering",
          description:
            "The Tethering domain defines methods and events for browser port binding.",
          experimental: !0,
          commands: [
            {
              name: "bind",
              description: "Request browser port binding.",
              parameters: [
                {
                  name: "port",
                  type: "integer",
                  description: "Port number to bind."
                }
              ]
            },
            {
              name: "unbind",
              description: "Request browser port unbinding.",
              parameters: [
                {
                  name: "port",
                  type: "integer",
                  description: "Port number to unbind."
                }
              ]
            }
          ],
          events: [
            {
              name: "accepted",
              description:
                "Informs that port was successfully bound and got a specified connection id.",
              parameters: [
                {
                  name: "port",
                  type: "integer",
                  description: "Port number that was successfully bound."
                },
                {
                  name: "connectionId",
                  type: "string",
                  description: "Connection id to be used."
                }
              ]
            }
          ]
        },
        {
          domain: "Browser",
          description:
            "The Browser domain defines methods and events for browser managing.",
          experimental: !0,
          types: [
            {
              id: "WindowID",
              type: "integer"
            },
            {
              id: "WindowState",
              type: "string",
              enum: ["normal", "minimized", "maximized", "fullscreen"],
              description: "The state of the browser window."
            },
            {
              id: "Bounds",
              type: "object",
              description: "Browser window bounds information",
              properties: [
                {
                  name: "left",
                  type: "integer",
                  optional: !0,
                  description:
                    "The offset from the left edge of the screen to the window in pixels."
                },
                {
                  name: "top",
                  type: "integer",
                  optional: !0,
                  description:
                    "The offset from the top edge of the screen to the window in pixels."
                },
                {
                  name: "width",
                  type: "integer",
                  optional: !0,
                  description: "The window width in pixels."
                },
                {
                  name: "height",
                  type: "integer",
                  optional: !0,
                  description: "The window height in pixels."
                },
                {
                  name: "windowState",
                  $ref: "WindowState",
                  optional: !0,
                  description: "The window state. Default to normal."
                }
              ]
            }
          ],
          commands: [
            {
              name: "getWindowForTarget",
              description:
                "Get the browser window that contains the devtools target.",
              parameters: [
                {
                  name: "targetId",
                  $ref: "Target.TargetID",
                  description: "Devtools agent host id."
                }
              ],
              returns: [
                {
                  name: "windowId",
                  $ref: "WindowID",
                  description: "Browser window id."
                },
                {
                  name: "bounds",
                  $ref: "Bounds",
                  description:
                    "Bounds information of the window. When window state is 'minimized', the restored window position and size are returned."
                }
              ]
            },
            {
              name: "setWindowBounds",
              description: "Set position and/or size of the browser window.",
              parameters: [
                {
                  name: "windowId",
                  $ref: "WindowID",
                  description: "Browser window id."
                },
                {
                  name: "bounds",
                  $ref: "Bounds",
                  description:
                    "New window bounds. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top', 'width' or 'height'. Leaves unspecified fields unchanged."
                }
              ]
            },
            {
              name: "getWindowBounds",
              description: "Get position and size of the browser window.",
              parameters: [
                {
                  name: "windowId",
                  $ref: "WindowID",
                  description: "Browser window id."
                }
              ],
              returns: [
                {
                  name: "bounds",
                  $ref: "Bounds",
                  description:
                    "Bounds information of the window. When window state is 'minimized', the restored window position and size are returned."
                }
              ]
            }
          ]
        },
        {
          domain: "Schema",
          description: "Provides information about the protocol schema.",
          types: [
            {
              id: "Domain",
              type: "object",
              description: "Description of the protocol domain.",
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "Domain name."
                },
                {
                  name: "version",
                  type: "string",
                  description: "Domain version."
                }
              ]
            }
          ],
          commands: [
            {
              name: "getDomains",
              description: "Returns supported domains.",
              handlers: ["browser", "renderer"],
              returns: [
                {
                  name: "domains",
                  type: "array",
                  items: {
                    $ref: "Domain"
                  },
                  description: "List of supported domains."
                }
              ]
            }
          ]
        },
        {
          domain: "Runtime",
          description:
            "Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects. Evaluation results are returned as mirror object that expose object type, string representation and unique identifier that can be used for further object reference. Original objects are maintained in memory unless they are either explicitly released or are released along with the other objects in their object group.",
          types: [
            {
              id: "ScriptId",
              type: "string",
              description: "Unique script identifier."
            },
            {
              id: "RemoteObjectId",
              type: "string",
              description: "Unique object identifier."
            },
            {
              id: "UnserializableValue",
              type: "string",
              enum: ["Infinity", "NaN", "-Infinity", "-0"],
              description: "Primitive value which cannot be JSON-stringified."
            },
            {
              id: "RemoteObject",
              type: "object",
              description:
                "Mirror object referencing original JavaScript object.",
              properties: [
                {
                  name: "type",
                  type: "string",
                  enum: [
                    "object",
                    "function",
                    "undefined",
                    "string",
                    "number",
                    "boolean",
                    "symbol"
                  ],
                  description: "Object type."
                },
                {
                  name: "subtype",
                  type: "string",
                  optional: !0,
                  enum: [
                    "array",
                    "null",
                    "node",
                    "regexp",
                    "date",
                    "map",
                    "set",
                    "weakmap",
                    "weakset",
                    "iterator",
                    "generator",
                    "error",
                    "proxy",
                    "promise",
                    "typedarray"
                  ],
                  description:
                    "Object subtype hint. Specified for <code>object</code> type values only."
                },
                {
                  name: "className",
                  type: "string",
                  optional: !0,
                  description:
                    "Object class (constructor) name. Specified for <code>object</code> type values only."
                },
                {
                  name: "value",
                  type: "any",
                  optional: !0,
                  description:
                    "Remote object value in case of primitive values or JSON values (if it was requested)."
                },
                {
                  name: "unserializableValue",
                  $ref: "UnserializableValue",
                  optional: !0,
                  description:
                    "Primitive value which can not be JSON-stringified does not have <code>value</code>, but gets this property."
                },
                {
                  name: "description",
                  type: "string",
                  optional: !0,
                  description: "String representation of the object."
                },
                {
                  name: "objectId",
                  $ref: "RemoteObjectId",
                  optional: !0,
                  description:
                    "Unique object identifier (for non-primitive values)."
                },
                {
                  name: "preview",
                  $ref: "ObjectPreview",
                  optional: !0,
                  description:
                    "Preview containing abbreviated property values. Specified for <code>object</code> type values only.",
                  experimental: !0
                },
                {
                  name: "customPreview",
                  $ref: "CustomPreview",
                  optional: !0,
                  experimental: !0
                }
              ]
            },
            {
              id: "CustomPreview",
              type: "object",
              experimental: !0,
              properties: [
                {
                  name: "header",
                  type: "string"
                },
                {
                  name: "hasBody",
                  type: "boolean"
                },
                {
                  name: "formatterObjectId",
                  $ref: "RemoteObjectId"
                },
                {
                  name: "bindRemoteObjectFunctionId",
                  $ref: "RemoteObjectId"
                },
                {
                  name: "configObjectId",
                  $ref: "RemoteObjectId",
                  optional: !0
                }
              ]
            },
            {
              id: "ObjectPreview",
              type: "object",
              experimental: !0,
              description: "Object containing abbreviated remote object value.",
              properties: [
                {
                  name: "type",
                  type: "string",
                  enum: [
                    "object",
                    "function",
                    "undefined",
                    "string",
                    "number",
                    "boolean",
                    "symbol"
                  ],
                  description: "Object type."
                },
                {
                  name: "subtype",
                  type: "string",
                  optional: !0,
                  enum: [
                    "array",
                    "null",
                    "node",
                    "regexp",
                    "date",
                    "map",
                    "set",
                    "weakmap",
                    "weakset",
                    "iterator",
                    "generator",
                    "error"
                  ],
                  description:
                    "Object subtype hint. Specified for <code>object</code> type values only."
                },
                {
                  name: "description",
                  type: "string",
                  optional: !0,
                  description: "String representation of the object."
                },
                {
                  name: "overflow",
                  type: "boolean",
                  description:
                    "True iff some of the properties or entries of the original object did not fit."
                },
                {
                  name: "properties",
                  type: "array",
                  items: {
                    $ref: "PropertyPreview"
                  },
                  description: "List of the properties."
                },
                {
                  name: "entries",
                  type: "array",
                  items: {
                    $ref: "EntryPreview"
                  },
                  optional: !0,
                  description:
                    "List of the entries. Specified for <code>map</code> and <code>set</code> subtype values only."
                }
              ]
            },
            {
              id: "PropertyPreview",
              type: "object",
              experimental: !0,
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "Property name."
                },
                {
                  name: "type",
                  type: "string",
                  enum: [
                    "object",
                    "function",
                    "undefined",
                    "string",
                    "number",
                    "boolean",
                    "symbol",
                    "accessor"
                  ],
                  description:
                    "Object type. Accessor means that the property itself is an accessor property."
                },
                {
                  name: "value",
                  type: "string",
                  optional: !0,
                  description: "User-friendly property value string."
                },
                {
                  name: "valuePreview",
                  $ref: "ObjectPreview",
                  optional: !0,
                  description: "Nested value preview."
                },
                {
                  name: "subtype",
                  type: "string",
                  optional: !0,
                  enum: [
                    "array",
                    "null",
                    "node",
                    "regexp",
                    "date",
                    "map",
                    "set",
                    "weakmap",
                    "weakset",
                    "iterator",
                    "generator",
                    "error"
                  ],
                  description:
                    "Object subtype hint. Specified for <code>object</code> type values only."
                }
              ]
            },
            {
              id: "EntryPreview",
              type: "object",
              experimental: !0,
              properties: [
                {
                  name: "key",
                  $ref: "ObjectPreview",
                  optional: !0,
                  description:
                    "Preview of the key. Specified for map-like collection entries."
                },
                {
                  name: "value",
                  $ref: "ObjectPreview",
                  description: "Preview of the value."
                }
              ]
            },
            {
              id: "PropertyDescriptor",
              type: "object",
              description: "Object property descriptor.",
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "Property name or symbol description."
                },
                {
                  name: "value",
                  $ref: "RemoteObject",
                  optional: !0,
                  description: "The value associated with the property."
                },
                {
                  name: "writable",
                  type: "boolean",
                  optional: !0,
                  description:
                    "True if the value associated with the property may be changed (data descriptors only)."
                },
                {
                  name: "get",
                  $ref: "RemoteObject",
                  optional: !0,
                  description:
                    "A function which serves as a getter for the property, or <code>undefined</code> if there is no getter (accessor descriptors only)."
                },
                {
                  name: "set",
                  $ref: "RemoteObject",
                  optional: !0,
                  description:
                    "A function which serves as a setter for the property, or <code>undefined</code> if there is no setter (accessor descriptors only)."
                },
                {
                  name: "configurable",
                  type: "boolean",
                  description:
                    "True if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object."
                },
                {
                  name: "enumerable",
                  type: "boolean",
                  description:
                    "True if this property shows up during enumeration of the properties on the corresponding object."
                },
                {
                  name: "wasThrown",
                  type: "boolean",
                  optional: !0,
                  description:
                    "True if the result was thrown during the evaluation."
                },
                {
                  name: "isOwn",
                  optional: !0,
                  type: "boolean",
                  description: "True if the property is owned for the object."
                },
                {
                  name: "symbol",
                  $ref: "RemoteObject",
                  optional: !0,
                  description:
                    "Property symbol object, if the property is of the <code>symbol</code> type."
                }
              ]
            },
            {
              id: "InternalPropertyDescriptor",
              type: "object",
              description:
                "Object internal property descriptor. This property isn't normally visible in JavaScript code.",
              properties: [
                {
                  name: "name",
                  type: "string",
                  description: "Conventional property name."
                },
                {
                  name: "value",
                  $ref: "RemoteObject",
                  optional: !0,
                  description: "The value associated with the property."
                }
              ]
            },
            {
              id: "CallArgument",
              type: "object",
              description:
                "Represents function call argument. Either remote object id <code>objectId</code>, primitive <code>value</code>, unserializable primitive value or neither of (for undefined) them should be specified.",
              properties: [
                {
                  name: "value",
                  type: "any",
                  optional: !0,
                  description: "Primitive value."
                },
                {
                  name: "unserializableValue",
                  $ref: "UnserializableValue",
                  optional: !0,
                  description:
                    "Primitive value which can not be JSON-stringified."
                },
                {
                  name: "objectId",
                  $ref: "RemoteObjectId",
                  optional: !0,
                  description: "Remote object handle."
                }
              ]
            },
            {
              id: "ExecutionContextId",
              type: "integer",
              description: "Id of an execution context."
            },
            {
              id: "ExecutionContextDescription",
              type: "object",
              description: "Description of an isolated world.",
              properties: [
                {
                  name: "id",
                  $ref: "ExecutionContextId",
                  description:
                    "Unique id of the execution context. It can be used to specify in which execution context script evaluation should be performed."
                },
                {
                  name: "origin",
                  type: "string",
                  description: "Execution context origin."
                },
                {
                  name: "name",
                  type: "string",
                  description: "Human readable name describing given context."
                },
                {
                  name: "auxData",
                  type: "object",
                  optional: !0,
                  description: "Embedder-specific auxiliary data."
                }
              ]
            },
            {
              id: "ExceptionDetails",
              type: "object",
              description:
                "Detailed information about exception (or error) that was thrown during script compilation or execution.",
              properties: [
                {
                  name: "exceptionId",
                  type: "integer",
                  description: "Exception id."
                },
                {
                  name: "text",
                  type: "string",
                  description:
                    "Exception text, which should be used together with exception object when available."
                },
                {
                  name: "lineNumber",
                  type: "integer",
                  description:
                    "Line number of the exception location (0-based)."
                },
                {
                  name: "columnNumber",
                  type: "integer",
                  description:
                    "Column number of the exception location (0-based)."
                },
                {
                  name: "scriptId",
                  $ref: "ScriptId",
                  optional: !0,
                  description: "Script ID of the exception location."
                },
                {
                  name: "url",
                  type: "string",
                  optional: !0,
                  description:
                    "URL of the exception location, to be used when the script was not reported."
                },
                {
                  name: "stackTrace",
                  $ref: "StackTrace",
                  optional: !0,
                  description: "JavaScript stack trace if available."
                },
                {
                  name: "exception",
                  $ref: "RemoteObject",
                  optional: !0,
                  description: "Exception object if available."
                },
                {
                  name: "executionContextId",
                  $ref: "ExecutionContextId",
                  optional: !0,
                  description:
                    "Identifier of the context where exception happened."
                }
              ]
            },
            {
              id: "Timestamp",
              type: "number",
              description: "Number of milliseconds since epoch."
            },
            {
              id: "CallFrame",
              type: "object",
              description: "Stack entry for runtime errors and assertions.",
              properties: [
                {
                  name: "functionName",
                  type: "string",
                  description: "JavaScript function name."
                },
                {
                  name: "scriptId",
                  $ref: "ScriptId",
                  description: "JavaScript script id."
                },
                {
                  name: "url",
                  type: "string",
                  description: "JavaScript script name or url."
                },
                {
                  name: "lineNumber",
                  type: "integer",
                  description: "JavaScript script line number (0-based)."
                },
                {
                  name: "columnNumber",
                  type: "integer",
                  description: "JavaScript script column number (0-based)."
                }
              ]
            },
            {
              id: "StackTrace",
              type: "object",
              description: "Call frames for assertions or error messages.",
              properties: [
                {
                  name: "description",
                  type: "string",
                  optional: !0,
                  description:
                    "String label of this stack trace. For async traces this may be a name of the function that initiated the async call."
                },
                {
                  name: "callFrames",
                  type: "array",
                  items: {
                    $ref: "CallFrame"
                  },
                  description: "JavaScript function name."
                },
                {
                  name: "parent",
                  $ref: "StackTrace",
                  optional: !0,
                  description:
                    "Asynchronous JavaScript stack trace that preceded this stack, if available."
                },
                {
                  name: "promiseCreationFrame",
                  $ref: "CallFrame",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Creation frame of the Promise which produced the next synchronous trace when resolved, if available."
                }
              ]
            }
          ],
          commands: [
            {
              name: "evaluate",
              parameters: [
                {
                  name: "expression",
                  type: "string",
                  description: "Expression to evaluate."
                },
                {
                  name: "objectGroup",
                  type: "string",
                  optional: !0,
                  description:
                    "Symbolic group name that can be used to release multiple objects."
                },
                {
                  name: "includeCommandLineAPI",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Determines whether Command Line API should be available during the evaluation."
                },
                {
                  name: "silent",
                  type: "boolean",
                  optional: !0,
                  description:
                    "In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state."
                },
                {
                  name: "contextId",
                  $ref: "ExecutionContextId",
                  optional: !0,
                  description:
                    "Specifies in which execution context to perform evaluation. If the parameter is omitted the evaluation will be performed in the context of the inspected page."
                },
                {
                  name: "returnByValue",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the result is expected to be a JSON object that should be sent by value."
                },
                {
                  name: "generatePreview",
                  type: "boolean",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Whether preview should be generated for the result."
                },
                {
                  name: "userGesture",
                  type: "boolean",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Whether execution should be treated as initiated by user in the UI."
                },
                {
                  name: "awaitPromise",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether execution should wait for promise to be resolved. If the result of evaluation is not a Promise, it's considered to be an error."
                }
              ],
              returns: [
                {
                  name: "result",
                  $ref: "RemoteObject",
                  description: "Evaluation result."
                },
                {
                  name: "exceptionDetails",
                  $ref: "ExceptionDetails",
                  optional: !0,
                  description: "Exception details."
                }
              ],
              description: "Evaluates expression on global object."
            },
            {
              name: "awaitPromise",
              parameters: [
                {
                  name: "promiseObjectId",
                  $ref: "RemoteObjectId",
                  description: "Identifier of the promise."
                },
                {
                  name: "returnByValue",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the result is expected to be a JSON object that should be sent by value."
                },
                {
                  name: "generatePreview",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether preview should be generated for the result."
                }
              ],
              returns: [
                {
                  name: "result",
                  $ref: "RemoteObject",
                  description:
                    "Promise result. Will contain rejected value if promise was rejected."
                },
                {
                  name: "exceptionDetails",
                  $ref: "ExceptionDetails",
                  optional: !0,
                  description: "Exception details if stack strace is available."
                }
              ],
              description:
                "Add handler to promise with given promise object id."
            },
            {
              name: "callFunctionOn",
              parameters: [
                {
                  name: "objectId",
                  $ref: "RemoteObjectId",
                  description: "Identifier of the object to call function on."
                },
                {
                  name: "functionDeclaration",
                  type: "string",
                  description: "Declaration of the function to call."
                },
                {
                  name: "arguments",
                  type: "array",
                  items: {
                    $ref: "CallArgument",
                    description: "Call argument."
                  },
                  optional: !0,
                  description:
                    "Call arguments. All call arguments must belong to the same JavaScript world as the target object."
                },
                {
                  name: "silent",
                  type: "boolean",
                  optional: !0,
                  description:
                    "In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state."
                },
                {
                  name: "returnByValue",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the result is expected to be a JSON object which should be sent by value."
                },
                {
                  name: "generatePreview",
                  type: "boolean",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Whether preview should be generated for the result."
                },
                {
                  name: "userGesture",
                  type: "boolean",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Whether execution should be treated as initiated by user in the UI."
                },
                {
                  name: "awaitPromise",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether execution should wait for promise to be resolved. If the result of evaluation is not a Promise, it's considered to be an error."
                }
              ],
              returns: [
                {
                  name: "result",
                  $ref: "RemoteObject",
                  description: "Call result."
                },
                {
                  name: "exceptionDetails",
                  $ref: "ExceptionDetails",
                  optional: !0,
                  description: "Exception details."
                }
              ],
              description:
                "Calls function with given declaration on the given object. Object group of the result is inherited from the target object."
            },
            {
              name: "getProperties",
              parameters: [
                {
                  name: "objectId",
                  $ref: "RemoteObjectId",
                  description:
                    "Identifier of the object to return properties for."
                },
                {
                  name: "ownProperties",
                  optional: !0,
                  type: "boolean",
                  description:
                    "If true, returns properties belonging only to the element itself, not to its prototype chain."
                },
                {
                  name: "accessorPropertiesOnly",
                  optional: !0,
                  type: "boolean",
                  description:
                    "If true, returns accessor properties (with getter/setter) only; internal properties are not returned either.",
                  experimental: !0
                },
                {
                  name: "generatePreview",
                  type: "boolean",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Whether preview should be generated for the results."
                }
              ],
              returns: [
                {
                  name: "result",
                  type: "array",
                  items: {
                    $ref: "PropertyDescriptor"
                  },
                  description: "Object properties."
                },
                {
                  name: "internalProperties",
                  optional: !0,
                  type: "array",
                  items: {
                    $ref: "InternalPropertyDescriptor"
                  },
                  description:
                    "Internal object properties (only of the element itself)."
                },
                {
                  name: "exceptionDetails",
                  $ref: "ExceptionDetails",
                  optional: !0,
                  description: "Exception details."
                }
              ],
              description:
                "Returns properties of a given object. Object group of the result is inherited from the target object."
            },
            {
              name: "releaseObject",
              parameters: [
                {
                  name: "objectId",
                  $ref: "RemoteObjectId",
                  description: "Identifier of the object to release."
                }
              ],
              description: "Releases remote object with given id."
            },
            {
              name: "releaseObjectGroup",
              parameters: [
                {
                  name: "objectGroup",
                  type: "string",
                  description: "Symbolic object group name."
                }
              ],
              description:
                "Releases all remote objects that belong to a given group."
            },
            {
              name: "runIfWaitingForDebugger",
              description:
                "Tells inspected instance to run if it was waiting for debugger to attach."
            },
            {
              name: "enable",
              description:
                "Enables reporting of execution contexts creation by means of <code>executionContextCreated</code> event. When the reporting gets enabled the event will be sent immediately for each existing execution context."
            },
            {
              name: "disable",
              description: "Disables reporting of execution contexts creation."
            },
            {
              name: "discardConsoleEntries",
              description:
                "Discards collected exceptions and console API calls."
            },
            {
              name: "setCustomObjectFormatterEnabled",
              parameters: [
                {
                  name: "enabled",
                  type: "boolean"
                }
              ],
              experimental: !0
            },
            {
              name: "compileScript",
              parameters: [
                {
                  name: "expression",
                  type: "string",
                  description: "Expression to compile."
                },
                {
                  name: "sourceURL",
                  type: "string",
                  description: "Source url to be set for the script."
                },
                {
                  name: "persistScript",
                  type: "boolean",
                  description:
                    "Specifies whether the compiled script should be persisted."
                },
                {
                  name: "executionContextId",
                  $ref: "ExecutionContextId",
                  optional: !0,
                  description:
                    "Specifies in which execution context to perform script run. If the parameter is omitted the evaluation will be performed in the context of the inspected page."
                }
              ],
              returns: [
                {
                  name: "scriptId",
                  $ref: "ScriptId",
                  optional: !0,
                  description: "Id of the script."
                },
                {
                  name: "exceptionDetails",
                  $ref: "ExceptionDetails",
                  optional: !0,
                  description: "Exception details."
                }
              ],
              description: "Compiles expression."
            },
            {
              name: "runScript",
              parameters: [
                {
                  name: "scriptId",
                  $ref: "ScriptId",
                  description: "Id of the script to run."
                },
                {
                  name: "executionContextId",
                  $ref: "ExecutionContextId",
                  optional: !0,
                  description:
                    "Specifies in which execution context to perform script run. If the parameter is omitted the evaluation will be performed in the context of the inspected page."
                },
                {
                  name: "objectGroup",
                  type: "string",
                  optional: !0,
                  description:
                    "Symbolic group name that can be used to release multiple objects."
                },
                {
                  name: "silent",
                  type: "boolean",
                  optional: !0,
                  description:
                    "In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state."
                },
                {
                  name: "includeCommandLineAPI",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Determines whether Command Line API should be available during the evaluation."
                },
                {
                  name: "returnByValue",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the result is expected to be a JSON object which should be sent by value."
                },
                {
                  name: "generatePreview",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether preview should be generated for the result."
                },
                {
                  name: "awaitPromise",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether execution should wait for promise to be resolved. If the result of evaluation is not a Promise, it's considered to be an error."
                }
              ],
              returns: [
                {
                  name: "result",
                  $ref: "RemoteObject",
                  description: "Run result."
                },
                {
                  name: "exceptionDetails",
                  $ref: "ExceptionDetails",
                  optional: !0,
                  description: "Exception details."
                }
              ],
              description: "Runs script with given id in a given context."
            }
          ],
          events: [
            {
              name: "executionContextCreated",
              parameters: [
                {
                  name: "context",
                  $ref: "ExecutionContextDescription",
                  description: "A newly created execution context."
                }
              ],
              description: "Issued when new execution context is created."
            },
            {
              name: "executionContextDestroyed",
              parameters: [
                {
                  name: "executionContextId",
                  $ref: "ExecutionContextId",
                  description: "Id of the destroyed context"
                }
              ],
              description: "Issued when execution context is destroyed."
            },
            {
              name: "executionContextsCleared",
              description:
                "Issued when all executionContexts were cleared in browser"
            },
            {
              name: "exceptionThrown",
              description: "Issued when exception was thrown and unhandled.",
              parameters: [
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Timestamp of the exception."
                },
                {
                  name: "exceptionDetails",
                  $ref: "ExceptionDetails"
                }
              ]
            },
            {
              name: "exceptionRevoked",
              description: "Issued when unhandled exception was revoked.",
              parameters: [
                {
                  name: "reason",
                  type: "string",
                  description: "Reason describing why exception was revoked."
                },
                {
                  name: "exceptionId",
                  type: "integer",
                  description:
                    "The id of revoked exception, as reported in <code>exceptionUnhandled</code>."
                }
              ]
            },
            {
              name: "consoleAPICalled",
              description: "Issued when console API was called.",
              parameters: [
                {
                  name: "type",
                  type: "string",
                  enum: [
                    "log",
                    "debug",
                    "info",
                    "error",
                    "warning",
                    "dir",
                    "dirxml",
                    "table",
                    "trace",
                    "clear",
                    "startGroup",
                    "startGroupCollapsed",
                    "endGroup",
                    "assert",
                    "profile",
                    "profileEnd",
                    "count",
                    "timeEnd"
                  ],
                  description: "Type of the call."
                },
                {
                  name: "args",
                  type: "array",
                  items: {
                    $ref: "RemoteObject"
                  },
                  description: "Call arguments."
                },
                {
                  name: "executionContextId",
                  $ref: "ExecutionContextId",
                  description:
                    "Identifier of the context where the call was made."
                },
                {
                  name: "timestamp",
                  $ref: "Timestamp",
                  description: "Call timestamp."
                },
                {
                  name: "stackTrace",
                  $ref: "StackTrace",
                  optional: !0,
                  description: "Stack trace captured when the call was made."
                }
              ]
            },
            {
              name: "inspectRequested",
              description:
                "Issued when object should be inspected (for example, as a result of inspect() command line API call).",
              parameters: [
                {
                  name: "object",
                  $ref: "RemoteObject"
                },
                {
                  name: "hints",
                  type: "object"
                }
              ]
            }
          ]
        },
        {
          domain: "Debugger",
          description:
            "Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing breakpoints, stepping through execution, exploring stack traces, etc.",
          dependencies: ["Runtime"],
          types: [
            {
              id: "BreakpointId",
              type: "string",
              description: "Breakpoint identifier."
            },
            {
              id: "CallFrameId",
              type: "string",
              description: "Call frame identifier."
            },
            {
              id: "Location",
              type: "object",
              properties: [
                {
                  name: "scriptId",
                  $ref: "Runtime.ScriptId",
                  description:
                    "Script identifier as reported in the <code>Debugger.scriptParsed</code>."
                },
                {
                  name: "lineNumber",
                  type: "integer",
                  description: "Line number in the script (0-based)."
                },
                {
                  name: "columnNumber",
                  type: "integer",
                  optional: !0,
                  description: "Column number in the script (0-based)."
                }
              ],
              description: "Location in the source code."
            },
            {
              id: "ScriptPosition",
              experimental: !0,
              type: "object",
              properties: [
                {
                  name: "lineNumber",
                  type: "integer"
                },
                {
                  name: "columnNumber",
                  type: "integer"
                }
              ],
              description: "Location in the source code."
            },
            {
              id: "CallFrame",
              type: "object",
              properties: [
                {
                  name: "callFrameId",
                  $ref: "CallFrameId",
                  description:
                    "Call frame identifier. This identifier is only valid while the virtual machine is paused."
                },
                {
                  name: "functionName",
                  type: "string",
                  description:
                    "Name of the JavaScript function called on this call frame."
                },
                {
                  name: "functionLocation",
                  $ref: "Location",
                  optional: !0,
                  experimental: !0,
                  description: "Location in the source code."
                },
                {
                  name: "location",
                  $ref: "Location",
                  description: "Location in the source code."
                },
                {
                  name: "scopeChain",
                  type: "array",
                  items: {
                    $ref: "Scope"
                  },
                  description: "Scope chain for this call frame."
                },
                {
                  name: "this",
                  $ref: "Runtime.RemoteObject",
                  description: "<code>this</code> object for this call frame."
                },
                {
                  name: "returnValue",
                  $ref: "Runtime.RemoteObject",
                  optional: !0,
                  description:
                    "The value being returned, if the function is at return point."
                }
              ],
              description:
                "JavaScript call frame. Array of call frames form the call stack."
            },
            {
              id: "Scope",
              type: "object",
              properties: [
                {
                  name: "type",
                  type: "string",
                  enum: [
                    "global",
                    "local",
                    "with",
                    "closure",
                    "catch",
                    "block",
                    "script",
                    "eval",
                    "module"
                  ],
                  description: "Scope type."
                },
                {
                  name: "object",
                  $ref: "Runtime.RemoteObject",
                  description:
                    "Object representing the scope. For <code>global</code> and <code>with</code> scopes it represents the actual object; for the rest of the scopes, it is artificial transient object enumerating scope variables as its properties."
                },
                {
                  name: "name",
                  type: "string",
                  optional: !0
                },
                {
                  name: "startLocation",
                  $ref: "Location",
                  optional: !0,
                  description: "Location in the source code where scope starts"
                },
                {
                  name: "endLocation",
                  $ref: "Location",
                  optional: !0,
                  description: "Location in the source code where scope ends"
                }
              ],
              description: "Scope description."
            },
            {
              id: "SearchMatch",
              type: "object",
              description: "Search match for resource.",
              properties: [
                {
                  name: "lineNumber",
                  type: "number",
                  description: "Line number in resource content."
                },
                {
                  name: "lineContent",
                  type: "string",
                  description: "Line with match content."
                }
              ],
              experimental: !0
            },
            {
              id: "BreakLocation",
              type: "object",
              properties: [
                {
                  name: "scriptId",
                  $ref: "Runtime.ScriptId",
                  description:
                    "Script identifier as reported in the <code>Debugger.scriptParsed</code>."
                },
                {
                  name: "lineNumber",
                  type: "integer",
                  description: "Line number in the script (0-based)."
                },
                {
                  name: "columnNumber",
                  type: "integer",
                  optional: !0,
                  description: "Column number in the script (0-based)."
                },
                {
                  name: "type",
                  type: "string",
                  enum: ["debuggerStatement", "call", "return"],
                  optional: !0
                }
              ],
              experimental: !0
            }
          ],
          commands: [
            {
              name: "enable",
              description:
                "Enables debugger for the given page. Clients should not assume that the debugging has been enabled until the result for this command is received."
            },
            {
              name: "disable",
              description: "Disables debugger for given page."
            },
            {
              name: "setBreakpointsActive",
              parameters: [
                {
                  name: "active",
                  type: "boolean",
                  description: "New value for breakpoints active state."
                }
              ],
              description:
                "Activates / deactivates all breakpoints on the page."
            },
            {
              name: "setSkipAllPauses",
              parameters: [
                {
                  name: "skip",
                  type: "boolean",
                  description: "New value for skip pauses state."
                }
              ],
              description:
                "Makes page not interrupt on any pauses (breakpoint, exception, dom exception etc)."
            },
            {
              name: "setBreakpointByUrl",
              parameters: [
                {
                  name: "lineNumber",
                  type: "integer",
                  description: "Line number to set breakpoint at."
                },
                {
                  name: "url",
                  type: "string",
                  optional: !0,
                  description: "URL of the resources to set breakpoint on."
                },
                {
                  name: "urlRegex",
                  type: "string",
                  optional: !0,
                  description:
                    "Regex pattern for the URLs of the resources to set breakpoints on. Either <code>url</code> or <code>urlRegex</code> must be specified."
                },
                {
                  name: "columnNumber",
                  type: "integer",
                  optional: !0,
                  description: "Offset in the line to set breakpoint at."
                },
                {
                  name: "condition",
                  type: "string",
                  optional: !0,
                  description:
                    "Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true."
                }
              ],
              returns: [
                {
                  name: "breakpointId",
                  $ref: "BreakpointId",
                  description:
                    "Id of the created breakpoint for further reference."
                },
                {
                  name: "locations",
                  type: "array",
                  items: {
                    $ref: "Location"
                  },
                  description:
                    "List of the locations this breakpoint resolved into upon addition."
                }
              ],
              description:
                "Sets JavaScript breakpoint at given location specified either by URL or URL regex. Once this command is issued, all existing parsed scripts will have breakpoints resolved and returned in <code>locations</code> property. Further matching script parsing will result in subsequent <code>breakpointResolved</code> events issued. This logical breakpoint will survive page reloads."
            },
            {
              name: "setBreakpoint",
              parameters: [
                {
                  name: "location",
                  $ref: "Location",
                  description: "Location to set breakpoint in."
                },
                {
                  name: "condition",
                  type: "string",
                  optional: !0,
                  description:
                    "Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true."
                }
              ],
              returns: [
                {
                  name: "breakpointId",
                  $ref: "BreakpointId",
                  description:
                    "Id of the created breakpoint for further reference."
                },
                {
                  name: "actualLocation",
                  $ref: "Location",
                  description: "Location this breakpoint resolved into."
                }
              ],
              description: "Sets JavaScript breakpoint at a given location."
            },
            {
              name: "removeBreakpoint",
              parameters: [
                {
                  name: "breakpointId",
                  $ref: "BreakpointId"
                }
              ],
              description: "Removes JavaScript breakpoint."
            },
            {
              name: "getPossibleBreakpoints",
              parameters: [
                {
                  name: "start",
                  $ref: "Location",
                  description:
                    "Start of range to search possible breakpoint locations in."
                },
                {
                  name: "end",
                  $ref: "Location",
                  optional: !0,
                  description:
                    "End of range to search possible breakpoint locations in (excluding). When not specified, end of scripts is used as end of range."
                },
                {
                  name: "restrictToFunction",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Only consider locations which are in the same (non-nested) function as start."
                }
              ],
              returns: [
                {
                  name: "locations",
                  type: "array",
                  items: {
                    $ref: "BreakLocation"
                  },
                  description: "List of the possible breakpoint locations."
                }
              ],
              description:
                "Returns possible locations for breakpoint. scriptId in start and end range locations should be the same.",
              experimental: !0
            },
            {
              name: "continueToLocation",
              parameters: [
                {
                  name: "location",
                  $ref: "Location",
                  description: "Location to continue to."
                },
                {
                  name: "targetCallFrames",
                  type: "string",
                  enum: ["any", "current"],
                  optional: !0,
                  experimental: !0
                }
              ],
              description:
                "Continues execution until specific location is reached."
            },
            {
              name: "stepOver",
              description: "Steps over the statement."
            },
            {
              name: "stepInto",
              description: "Steps into the function call."
            },
            {
              name: "stepOut",
              description: "Steps out of the function call."
            },
            {
              name: "pause",
              description: "Stops on the next JavaScript statement."
            },
            {
              name: "scheduleStepIntoAsync",
              description:
                "Steps into next scheduled async task if any is scheduled before next pause. Returns success when async task is actually scheduled, returns error if no task were scheduled or another scheduleStepIntoAsync was called.",
              experimental: !0
            },
            {
              name: "resume",
              description: "Resumes JavaScript execution."
            },
            {
              name: "searchInContent",
              parameters: [
                {
                  name: "scriptId",
                  $ref: "Runtime.ScriptId",
                  description: "Id of the script to search in."
                },
                {
                  name: "query",
                  type: "string",
                  description: "String to search for."
                },
                {
                  name: "caseSensitive",
                  type: "boolean",
                  optional: !0,
                  description: "If true, search is case sensitive."
                },
                {
                  name: "isRegex",
                  type: "boolean",
                  optional: !0,
                  description: "If true, treats string parameter as regex."
                }
              ],
              returns: [
                {
                  name: "result",
                  type: "array",
                  items: {
                    $ref: "SearchMatch"
                  },
                  description: "List of search matches."
                }
              ],
              experimental: !0,
              description: "Searches for given string in script content."
            },
            {
              name: "setScriptSource",
              parameters: [
                {
                  name: "scriptId",
                  $ref: "Runtime.ScriptId",
                  description: "Id of the script to edit."
                },
                {
                  name: "scriptSource",
                  type: "string",
                  description: "New content of the script."
                },
                {
                  name: "dryRun",
                  type: "boolean",
                  optional: !0,
                  description:
                    " If true the change will not actually be applied. Dry run may be used to get result description without actually modifying the code."
                }
              ],
              returns: [
                {
                  name: "callFrames",
                  type: "array",
                  optional: !0,
                  items: {
                    $ref: "CallFrame"
                  },
                  description:
                    "New stack trace in case editing has happened while VM was stopped."
                },
                {
                  name: "stackChanged",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether current call stack  was modified after applying the changes."
                },
                {
                  name: "asyncStackTrace",
                  $ref: "Runtime.StackTrace",
                  optional: !0,
                  description: "Async stack trace, if any."
                },
                {
                  name: "exceptionDetails",
                  optional: !0,
                  $ref: "Runtime.ExceptionDetails",
                  description: "Exception details if any."
                }
              ],
              description: "Edits JavaScript source live."
            },
            {
              name: "restartFrame",
              parameters: [
                {
                  name: "callFrameId",
                  $ref: "CallFrameId",
                  description: "Call frame identifier to evaluate on."
                }
              ],
              returns: [
                {
                  name: "callFrames",
                  type: "array",
                  items: {
                    $ref: "CallFrame"
                  },
                  description: "New stack trace."
                },
                {
                  name: "asyncStackTrace",
                  $ref: "Runtime.StackTrace",
                  optional: !0,
                  description: "Async stack trace, if any."
                }
              ],
              description: "Restarts particular call frame from the beginning."
            },
            {
              name: "getScriptSource",
              parameters: [
                {
                  name: "scriptId",
                  $ref: "Runtime.ScriptId",
                  description: "Id of the script to get source for."
                }
              ],
              returns: [
                {
                  name: "scriptSource",
                  type: "string",
                  description: "Script source."
                }
              ],
              description: "Returns source for the script with given id."
            },
            {
              name: "setPauseOnExceptions",
              parameters: [
                {
                  name: "state",
                  type: "string",
                  enum: ["none", "uncaught", "all"],
                  description: "Pause on exceptions mode."
                }
              ],
              description:
                "Defines pause on exceptions state. Can be set to stop on all exceptions, uncaught exceptions or no exceptions. Initial pause on exceptions state is <code>none</code>."
            },
            {
              name: "evaluateOnCallFrame",
              parameters: [
                {
                  name: "callFrameId",
                  $ref: "CallFrameId",
                  description: "Call frame identifier to evaluate on."
                },
                {
                  name: "expression",
                  type: "string",
                  description: "Expression to evaluate."
                },
                {
                  name: "objectGroup",
                  type: "string",
                  optional: !0,
                  description:
                    "String object group name to put result into (allows rapid releasing resulting object handles using <code>releaseObjectGroup</code>)."
                },
                {
                  name: "includeCommandLineAPI",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Specifies whether command line API should be available to the evaluated expression, defaults to false."
                },
                {
                  name: "silent",
                  type: "boolean",
                  optional: !0,
                  description:
                    "In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state."
                },
                {
                  name: "returnByValue",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Whether the result is expected to be a JSON object that should be sent by value."
                },
                {
                  name: "generatePreview",
                  type: "boolean",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Whether preview should be generated for the result."
                },
                {
                  name: "throwOnSideEffect",
                  type: "boolean",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Whether to throw an exception if side effect cannot be ruled out during evaluation."
                }
              ],
              returns: [
                {
                  name: "result",
                  $ref: "Runtime.RemoteObject",
                  description: "Object wrapper for the evaluation result."
                },
                {
                  name: "exceptionDetails",
                  $ref: "Runtime.ExceptionDetails",
                  optional: !0,
                  description: "Exception details."
                }
              ],
              description: "Evaluates expression on a given call frame."
            },
            {
              name: "setVariableValue",
              parameters: [
                {
                  name: "scopeNumber",
                  type: "integer",
                  description:
                    "0-based number of scope as was listed in scope chain. Only 'local', 'closure' and 'catch' scope types are allowed. Other scopes could be manipulated manually."
                },
                {
                  name: "variableName",
                  type: "string",
                  description: "Variable name."
                },
                {
                  name: "newValue",
                  $ref: "Runtime.CallArgument",
                  description: "New variable value."
                },
                {
                  name: "callFrameId",
                  $ref: "CallFrameId",
                  description: "Id of callframe that holds variable."
                }
              ],
              description:
                "Changes value of variable in a callframe. Object-based scopes are not supported and must be mutated manually."
            },
            {
              name: "setAsyncCallStackDepth",
              parameters: [
                {
                  name: "maxDepth",
                  type: "integer",
                  description:
                    "Maximum depth of async call stacks. Setting to <code>0</code> will effectively disable collecting async call stacks (default)."
                }
              ],
              description: "Enables or disables async call stacks tracking."
            },
            {
              name: "setBlackboxPatterns",
              parameters: [
                {
                  name: "patterns",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description:
                    "Array of regexps that will be used to check script url for blackbox state."
                }
              ],
              experimental: !0,
              description:
                "Replace previous blackbox patterns with passed ones. Forces backend to skip stepping/pausing in scripts with url matching one of the patterns. VM will try to leave blackboxed script by performing 'step in' several times, finally resorting to 'step out' if unsuccessful."
            },
            {
              name: "setBlackboxedRanges",
              parameters: [
                {
                  name: "scriptId",
                  $ref: "Runtime.ScriptId",
                  description: "Id of the script."
                },
                {
                  name: "positions",
                  type: "array",
                  items: {
                    $ref: "ScriptPosition"
                  }
                }
              ],
              experimental: !0,
              description:
                "Makes backend skip steps in the script in blackboxed ranges. VM will try leave blacklisted scripts by performing 'step in' several times, finally resorting to 'step out' if unsuccessful. Positions array contains positions where blackbox state is changed. First interval isn't blackboxed. Array should be sorted."
            }
          ],
          events: [
            {
              name: "scriptParsed",
              parameters: [
                {
                  name: "scriptId",
                  $ref: "Runtime.ScriptId",
                  description: "Identifier of the script parsed."
                },
                {
                  name: "url",
                  type: "string",
                  description: "URL or name of the script parsed (if any)."
                },
                {
                  name: "startLine",
                  type: "integer",
                  description:
                    "Line offset of the script within the resource with given URL (for script tags)."
                },
                {
                  name: "startColumn",
                  type: "integer",
                  description:
                    "Column offset of the script within the resource with given URL."
                },
                {
                  name: "endLine",
                  type: "integer",
                  description: "Last line of the script."
                },
                {
                  name: "endColumn",
                  type: "integer",
                  description: "Length of the last line of the script."
                },
                {
                  name: "executionContextId",
                  $ref: "Runtime.ExecutionContextId",
                  description: "Specifies script creation context."
                },
                {
                  name: "hash",
                  type: "string",
                  description: "Content hash of the script."
                },
                {
                  name: "executionContextAuxData",
                  type: "object",
                  optional: !0,
                  description: "Embedder-specific auxiliary data."
                },
                {
                  name: "isLiveEdit",
                  type: "boolean",
                  optional: !0,
                  description:
                    "True, if this script is generated as a result of the live edit operation.",
                  experimental: !0
                },
                {
                  name: "sourceMapURL",
                  type: "string",
                  optional: !0,
                  description:
                    "URL of source map associated with script (if any)."
                },
                {
                  name: "hasSourceURL",
                  type: "boolean",
                  optional: !0,
                  description: "True, if this script has sourceURL.",
                  experimental: !0
                },
                {
                  name: "isModule",
                  type: "boolean",
                  optional: !0,
                  description: "True, if this script is ES6 module.",
                  experimental: !0
                },
                {
                  name: "length",
                  type: "integer",
                  optional: !0,
                  description: "This script length.",
                  experimental: !0
                },
                {
                  name: "stackTrace",
                  $ref: "Runtime.StackTrace",
                  optional: !0,
                  description:
                    "JavaScript top stack frame of where the script parsed event was triggered if available.",
                  experimental: !0
                }
              ],
              description:
                "Fired when virtual machine parses script. This event is also fired for all known and uncollected scripts upon enabling debugger."
            },
            {
              name: "scriptFailedToParse",
              parameters: [
                {
                  name: "scriptId",
                  $ref: "Runtime.ScriptId",
                  description: "Identifier of the script parsed."
                },
                {
                  name: "url",
                  type: "string",
                  description: "URL or name of the script parsed (if any)."
                },
                {
                  name: "startLine",
                  type: "integer",
                  description:
                    "Line offset of the script within the resource with given URL (for script tags)."
                },
                {
                  name: "startColumn",
                  type: "integer",
                  description:
                    "Column offset of the script within the resource with given URL."
                },
                {
                  name: "endLine",
                  type: "integer",
                  description: "Last line of the script."
                },
                {
                  name: "endColumn",
                  type: "integer",
                  description: "Length of the last line of the script."
                },
                {
                  name: "executionContextId",
                  $ref: "Runtime.ExecutionContextId",
                  description: "Specifies script creation context."
                },
                {
                  name: "hash",
                  type: "string",
                  description: "Content hash of the script."
                },
                {
                  name: "executionContextAuxData",
                  type: "object",
                  optional: !0,
                  description: "Embedder-specific auxiliary data."
                },
                {
                  name: "sourceMapURL",
                  type: "string",
                  optional: !0,
                  description:
                    "URL of source map associated with script (if any)."
                },
                {
                  name: "hasSourceURL",
                  type: "boolean",
                  optional: !0,
                  description: "True, if this script has sourceURL.",
                  experimental: !0
                },
                {
                  name: "isModule",
                  type: "boolean",
                  optional: !0,
                  description: "True, if this script is ES6 module.",
                  experimental: !0
                },
                {
                  name: "length",
                  type: "integer",
                  optional: !0,
                  description: "This script length.",
                  experimental: !0
                },
                {
                  name: "stackTrace",
                  $ref: "Runtime.StackTrace",
                  optional: !0,
                  description:
                    "JavaScript top stack frame of where the script parsed event was triggered if available.",
                  experimental: !0
                }
              ],
              description:
                "Fired when virtual machine fails to parse the script."
            },
            {
              name: "breakpointResolved",
              parameters: [
                {
                  name: "breakpointId",
                  $ref: "BreakpointId",
                  description: "Breakpoint unique identifier."
                },
                {
                  name: "location",
                  $ref: "Location",
                  description: "Actual breakpoint location."
                }
              ],
              description:
                "Fired when breakpoint is resolved to an actual script and location."
            },
            {
              name: "paused",
              parameters: [
                {
                  name: "callFrames",
                  type: "array",
                  items: {
                    $ref: "CallFrame"
                  },
                  description: "Call stack the virtual machine stopped on."
                },
                {
                  name: "reason",
                  type: "string",
                  enum: [
                    "XHR",
                    "DOM",
                    "EventListener",
                    "exception",
                    "assert",
                    "debugCommand",
                    "promiseRejection",
                    "OOM",
                    "other",
                    "ambiguous"
                  ],
                  description: "Pause reason."
                },
                {
                  name: "data",
                  type: "object",
                  optional: !0,
                  description:
                    "Object containing break-specific auxiliary properties."
                },
                {
                  name: "hitBreakpoints",
                  type: "array",
                  optional: !0,
                  items: {
                    type: "string"
                  },
                  description: "Hit breakpoints IDs"
                },
                {
                  name: "asyncStackTrace",
                  $ref: "Runtime.StackTrace",
                  optional: !0,
                  description: "Async stack trace, if any."
                }
              ],
              description:
                "Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria."
            },
            {
              name: "resumed",
              description: "Fired when the virtual machine resumed execution."
            }
          ]
        },
        {
          domain: "Console",
          description:
            "This domain is deprecated - use Runtime or Log instead.",
          dependencies: ["Runtime"],
          deprecated: !0,
          types: [
            {
              id: "ConsoleMessage",
              type: "object",
              description: "Console message.",
              properties: [
                {
                  name: "source",
                  type: "string",
                  enum: [
                    "xml",
                    "javascript",
                    "network",
                    "console-api",
                    "storage",
                    "appcache",
                    "rendering",
                    "security",
                    "other",
                    "deprecation",
                    "worker"
                  ],
                  description: "Message source."
                },
                {
                  name: "level",
                  type: "string",
                  enum: ["log", "warning", "error", "debug", "info"],
                  description: "Message severity."
                },
                {
                  name: "text",
                  type: "string",
                  description: "Message text."
                },
                {
                  name: "url",
                  type: "string",
                  optional: !0,
                  description: "URL of the message origin."
                },
                {
                  name: "line",
                  type: "integer",
                  optional: !0,
                  description:
                    "Line number in the resource that generated this message (1-based)."
                },
                {
                  name: "column",
                  type: "integer",
                  optional: !0,
                  description:
                    "Column number in the resource that generated this message (1-based)."
                }
              ]
            }
          ],
          commands: [
            {
              name: "enable",
              description:
                "Enables console domain, sends the messages collected so far to the client by means of the <code>messageAdded</code> notification."
            },
            {
              name: "disable",
              description:
                "Disables console domain, prevents further console messages from being reported to the client."
            },
            {
              name: "clearMessages",
              description: "Does nothing."
            }
          ],
          events: [
            {
              name: "messageAdded",
              parameters: [
                {
                  name: "message",
                  $ref: "ConsoleMessage",
                  description: "Console message that has been added."
                }
              ],
              description: "Issued when new console message is added."
            }
          ]
        },
        {
          domain: "Profiler",
          dependencies: ["Runtime", "Debugger"],
          types: [
            {
              id: "ProfileNode",
              type: "object",
              description:
                "Profile node. Holds callsite information, execution statistics and child nodes.",
              properties: [
                {
                  name: "id",
                  type: "integer",
                  description: "Unique id of the node."
                },
                {
                  name: "callFrame",
                  $ref: "Runtime.CallFrame",
                  description: "Function location."
                },
                {
                  name: "hitCount",
                  type: "integer",
                  optional: !0,
                  experimental: !0,
                  description:
                    "Number of samples where this node was on top of the call stack."
                },
                {
                  name: "children",
                  type: "array",
                  items: {
                    type: "integer"
                  },
                  optional: !0,
                  description: "Child node ids."
                },
                {
                  name: "deoptReason",
                  type: "string",
                  optional: !0,
                  description:
                    "The reason of being not optimized. The function may be deoptimized or marked as don't optimize."
                },
                {
                  name: "positionTicks",
                  type: "array",
                  items: {
                    $ref: "PositionTickInfo"
                  },
                  optional: !0,
                  experimental: !0,
                  description: "An array of source position ticks."
                }
              ]
            },
            {
              id: "Profile",
              type: "object",
              description: "Profile.",
              properties: [
                {
                  name: "nodes",
                  type: "array",
                  items: {
                    $ref: "ProfileNode"
                  },
                  description:
                    "The list of profile nodes. First item is the root node."
                },
                {
                  name: "startTime",
                  type: "number",
                  description: "Profiling start timestamp in microseconds."
                },
                {
                  name: "endTime",
                  type: "number",
                  description: "Profiling end timestamp in microseconds."
                },
                {
                  name: "samples",
                  optional: !0,
                  type: "array",
                  items: {
                    type: "integer"
                  },
                  description: "Ids of samples top nodes."
                },
                {
                  name: "timeDeltas",
                  optional: !0,
                  type: "array",
                  items: {
                    type: "integer"
                  },
                  description:
                    "Time intervals between adjacent samples in microseconds. The first delta is relative to the profile startTime."
                }
              ]
            },
            {
              id: "PositionTickInfo",
              type: "object",
              experimental: !0,
              description:
                "Specifies a number of samples attributed to a certain source position.",
              properties: [
                {
                  name: "line",
                  type: "integer",
                  description: "Source line number (1-based)."
                },
                {
                  name: "ticks",
                  type: "integer",
                  description:
                    "Number of samples attributed to the source line."
                }
              ]
            },
            {
              id: "CoverageRange",
              type: "object",
              description: "Coverage data for a source range.",
              properties: [
                {
                  name: "startOffset",
                  type: "integer",
                  description:
                    "JavaScript script source offset for the range start."
                },
                {
                  name: "endOffset",
                  type: "integer",
                  description:
                    "JavaScript script source offset for the range end."
                },
                {
                  name: "count",
                  type: "integer",
                  description: "Collected execution count of the source range."
                }
              ],
              experimental: !0
            },
            {
              id: "FunctionCoverage",
              type: "object",
              description: "Coverage data for a JavaScript function.",
              properties: [
                {
                  name: "functionName",
                  type: "string",
                  description: "JavaScript function name."
                },
                {
                  name: "ranges",
                  type: "array",
                  items: {
                    $ref: "CoverageRange"
                  },
                  description:
                    "Source ranges inside the function with coverage data."
                }
              ],
              experimental: !0
            },
            {
              id: "ScriptCoverage",
              type: "object",
              description: "Coverage data for a JavaScript script.",
              properties: [
                {
                  name: "scriptId",
                  $ref: "Runtime.ScriptId",
                  description: "JavaScript script id."
                },
                {
                  name: "url",
                  type: "string",
                  description: "JavaScript script name or url."
                },
                {
                  name: "functions",
                  type: "array",
                  items: {
                    $ref: "FunctionCoverage"
                  },
                  description:
                    "Functions contained in the script that has coverage data."
                }
              ],
              experimental: !0
            }
          ],
          commands: [
            {
              name: "enable"
            },
            {
              name: "disable"
            },
            {
              name: "setSamplingInterval",
              parameters: [
                {
                  name: "interval",
                  type: "integer",
                  description: "New sampling interval in microseconds."
                }
              ],
              description:
                "Changes CPU profiler sampling interval. Must be called before CPU profiles recording started."
            },
            {
              name: "start"
            },
            {
              name: "stop",
              returns: [
                {
                  name: "profile",
                  $ref: "Profile",
                  description: "Recorded profile."
                }
              ]
            },
            {
              name: "startPreciseCoverage",
              parameters: [
                {
                  name: "callCount",
                  type: "boolean",
                  optional: !0,
                  description:
                    "Collect accurate call counts beyond simple 'covered' or 'not covered'."
                }
              ],
              description:
                "Enable precise code coverage. Coverage data for JavaScript executed before enabling precise code coverage may be incomplete. Enabling prevents running optimized code and resets execution counters.",
              experimental: !0
            },
            {
              name: "stopPreciseCoverage",
              description:
                "Disable precise code coverage. Disabling releases unnecessary execution count records and allows executing optimized code.",
              experimental: !0
            },
            {
              name: "takePreciseCoverage",
              returns: [
                {
                  name: "result",
                  type: "array",
                  items: {
                    $ref: "ScriptCoverage"
                  },
                  description: "Coverage data for the current isolate."
                }
              ],
              description:
                "Collect coverage data for the current isolate, and resets execution counters. Precise code coverage needs to have started.",
              experimental: !0
            },
            {
              name: "getBestEffortCoverage",
              returns: [
                {
                  name: "result",
                  type: "array",
                  items: {
                    $ref: "ScriptCoverage"
                  },
                  description: "Coverage data for the current isolate."
                }
              ],
              description:
                "Collect coverage data for the current isolate. The coverage data may be incomplete due to garbage collection.",
              experimental: !0
            }
          ],
          events: [
            {
              name: "consoleProfileStarted",
              parameters: [
                {
                  name: "id",
                  type: "string"
                },
                {
                  name: "location",
                  $ref: "Debugger.Location",
                  description: "Location of console.profile()."
                },
                {
                  name: "title",
                  type: "string",
                  optional: !0,
                  description:
                    "Profile title passed as an argument to console.profile()."
                }
              ],
              description:
                "Sent when new profile recording is started using console.profile() call."
            },
            {
              name: "consoleProfileFinished",
              parameters: [
                {
                  name: "id",
                  type: "string"
                },
                {
                  name: "location",
                  $ref: "Debugger.Location",
                  description: "Location of console.profileEnd()."
                },
                {
                  name: "profile",
                  $ref: "Profile"
                },
                {
                  name: "title",
                  type: "string",
                  optional: !0,
                  description:
                    "Profile title passed as an argument to console.profile()."
                }
              ]
            }
          ]
        },
        {
          domain: "HeapProfiler",
          dependencies: ["Runtime"],
          experimental: !0,
          types: [
            {
              id: "HeapSnapshotObjectId",
              type: "string",
              description: "Heap snapshot object id."
            },
            {
              id: "SamplingHeapProfileNode",
              type: "object",
              description:
                "Sampling Heap Profile node. Holds callsite information, allocation statistics and child nodes.",
              properties: [
                {
                  name: "callFrame",
                  $ref: "Runtime.CallFrame",
                  description: "Function location."
                },
                {
                  name: "selfSize",
                  type: "number",
                  description:
                    "Allocations size in bytes for the node excluding children."
                },
                {
                  name: "children",
                  type: "array",
                  items: {
                    $ref: "SamplingHeapProfileNode"
                  },
                  description: "Child nodes."
                }
              ]
            },
            {
              id: "SamplingHeapProfile",
              type: "object",
              description: "Profile.",
              properties: [
                {
                  name: "head",
                  $ref: "SamplingHeapProfileNode"
                }
              ]
            }
          ],
          commands: [
            {
              name: "enable"
            },
            {
              name: "disable"
            },
            {
              name: "startTrackingHeapObjects",
              parameters: [
                {
                  name: "trackAllocations",
                  type: "boolean",
                  optional: !0
                }
              ]
            },
            {
              name: "stopTrackingHeapObjects",
              parameters: [
                {
                  name: "reportProgress",
                  type: "boolean",
                  optional: !0,
                  description:
                    "If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken when the tracking is stopped."
                }
              ]
            },
            {
              name: "takeHeapSnapshot",
              parameters: [
                {
                  name: "reportProgress",
                  type: "boolean",
                  optional: !0,
                  description:
                    "If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken."
                }
              ]
            },
            {
              name: "collectGarbage"
            },
            {
              name: "getObjectByHeapObjectId",
              parameters: [
                {
                  name: "objectId",
                  $ref: "HeapSnapshotObjectId"
                },
                {
                  name: "objectGroup",
                  type: "string",
                  optional: !0,
                  description:
                    "Symbolic group name that can be used to release multiple objects."
                }
              ],
              returns: [
                {
                  name: "result",
                  $ref: "Runtime.RemoteObject",
                  description: "Evaluation result."
                }
              ]
            },
            {
              name: "addInspectedHeapObject",
              parameters: [
                {
                  name: "heapObjectId",
                  $ref: "HeapSnapshotObjectId",
                  description:
                    "Heap snapshot object id to be accessible by means of $x command line API."
                }
              ],
              description:
                "Enables console to refer to the node with given id via $x (see Command Line API for more details $x functions)."
            },
            {
              name: "getHeapObjectId",
              parameters: [
                {
                  name: "objectId",
                  $ref: "Runtime.RemoteObjectId",
                  description:
                    "Identifier of the object to get heap object id for."
                }
              ],
              returns: [
                {
                  name: "heapSnapshotObjectId",
                  $ref: "HeapSnapshotObjectId",
                  description:
                    "Id of the heap snapshot object corresponding to the passed remote object id."
                }
              ]
            },
            {
              name: "startSampling",
              parameters: [
                {
                  name: "samplingInterval",
                  type: "number",
                  optional: !0,
                  description:
                    "Average sample interval in bytes. Poisson distribution is used for the intervals. The default value is 32768 bytes."
                }
              ]
            },
            {
              name: "stopSampling",
              returns: [
                {
                  name: "profile",
                  $ref: "SamplingHeapProfile",
                  description: "Recorded sampling heap profile."
                }
              ]
            }
          ],
          events: [
            {
              name: "addHeapSnapshotChunk",
              parameters: [
                {
                  name: "chunk",
                  type: "string"
                }
              ]
            },
            {
              name: "resetProfiles"
            },
            {
              name: "reportHeapSnapshotProgress",
              parameters: [
                {
                  name: "done",
                  type: "integer"
                },
                {
                  name: "total",
                  type: "integer"
                },
                {
                  name: "finished",
                  type: "boolean",
                  optional: !0
                }
              ]
            },
            {
              name: "lastSeenObjectId",
              description:
                "If heap objects tracking has been started then backend regularly sends a current value for last seen object id and corresponding timestamp. If the were changes in the heap since last event then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.",
              parameters: [
                {
                  name: "lastSeenObjectId",
                  type: "integer"
                },
                {
                  name: "timestamp",
                  type: "number"
                }
              ]
            },
            {
              name: "heapStatsUpdate",
              description:
                "If heap objects tracking has been started then backend may send update for one or more fragments",
              parameters: [
                {
                  name: "statsUpdate",
                  type: "array",
                  items: {
                    type: "integer"
                  },
                  description:
                    "An array of triplets. Each triplet describes a fragment. The first integer is the fragment index, the second integer is a total count of objects for the fragment, the third integer is a total size of the objects for the fragment."
                }
              ]
            }
          ]
        }
      ]
    };
  },
  function(e, t, n) {
    (function(t) {
      function r(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function i(e, t) {
        if (!e) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return !t || (typeof t != "object" && typeof t != "function") ? e : t;
      }
      function o(e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError(
            `Super expression must either be null or a function, not ${typeof t}`
          );
        }
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })), t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
      }
      function a(e, t, n) {
        var r = this,
          i = r._nextCommandId++,
          o = {
            id: i,
            method: e,
            params: t || {}
          };
        r._ws.send(JSON.stringify(o)), (r._callbacks[i] = n);
      }
      function s() {
        var e = this,
          n = {
            host: e.host,
            port: e.port,
            secure: e.secure
          };
        Promise.all([p.call(e, n).then(g.prepare.bind(e)), d.call(e, n)])
          .then(function(t) {
            var n = t[1];
            return l.call(e, n);
          })
          .then(function() {
            t.nextTick(function() {
              e._notifier.emit("connect", e);
            });
          })
          .catch(function(t) {
            e._notifier.emit("error", t);
          });
      }
      function p(e) {
        var t = this;
        return new Promise(function(n, r) {
          t.protocol
            ? n(t.protocol)
            : (
                (e.remote = t.remote),
                v
                  .Protocol(e)
                  .then(function(e) {
                    n(e.descriptor);
                  })
                  .catch(r)
              );
        });
      }
      function c(e, t, n) {
        var r = (n || {}).webSocketDebuggerUrl;
        if (r) {
          e(r);
        } else {
          var i = JSON.stringify(n, null, 4),
            o = new Error(`Invalid target ${i}`);
          t(o);
        }
      }
      function d(e) {
        var t = this;
        return new Promise(function(n, r) {
          var i = t.target;
          switch (typeof i == "undefined" ? "undefined" : u(i)) {
            case "string":
              if (i.startsWith("/")) {
                var o = `ws://${t.host}:${t.port}`;
                i = o + i;
              }
              i.match(/^wss?:/i)
                ? n(i)
                : v
                    .List(e)
                    .then(function(e) {
                      return e.find(function(e) {
                        return e.id === i;
                      });
                    })
                    .then(function(e) {
                      c(n, r, e);
                    })
                    .catch(r);
              break;
            case "object":
              c(n, r, i);
              break;
            case "function":
              v
                .List(e)
                .then(function(e) {
                  var t = i(e);
                  return typeof t == "number" ? e[t] : t;
                })
                .then(function(e) {
                  c(n, r, e);
                })
                .catch(r);
              break;
            default:
              r(new Error(`Invalid target argument "${t.target}"`));
          }
        });
      }
      function l(e) {
        var t = this;
        return new Promise(function(n, r) {
          try {
            t.secure && (e = e.replace(/^ws:/i, "wss:")), (t._ws = new y(e));
          } catch (e) {
            return void r(e);
          }
          t._ws.on("open", function() {
            n();
          }), t._ws.on("message", function(e) {
            var n = JSON.parse(e);
            m.call(t, n);
          }), t._ws.on("close", function(e) {
            t.emit("disconnect");
          }), t._ws.on("error", function(e) {
            r(e);
          });
        });
      }
      function m(e) {
        var t = this;
        if (e.id) {
          var n = t._callbacks[e.id];
          if (!n) {
            return;
          }
          e.error ? n(!0, e.error) : n(!1, e.result || {}), delete t._callbacks[
            e.id
          ], Object.keys(t._callbacks).length === 0 && t.emit("ready");
        } else {
          e.method && (t.emit("event", e), t.emit(e.method, e.params));
        }
      }
      var u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          },
        h = n(2),
        f = n(44),
        y = n(47),
        g = n(48),
        b = n(40),
        v = n(3),
        w = (function(e) {
          function t(e) {
            r(this, t);
            var n = i(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.message)
            );
            return Object.assign(n, e), n;
          }
          return o(t, e), t;
        })(Error),
        S = (function(e) {
          function t(e, n) {
            r(this, t);
            var o = i(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this)
            ),
              a = function(e) {
                var t = e.find(function(e) {
                  return !!e.webSocketDebuggerUrl;
                });
                if (t) {
                  return t;
                }
                throw new Error("No inspectable targets");
              };
            return (e = e || {}), (o.host = e.host || b.HOST), (o.port =
              e.port || b.PORT), (o.secure = !!e.secure), (o.protocol =
              e.protocol), (o.remote = !!e.remote), (o.target =
              e.target || e.tab || e.chooseTab || a), h.call(
              o
            ), (o._notifier = n), (o._callbacks = {}), (o._nextCommandId = 1), s.call(
              o
            ), o;
          }
          return o(t, e), t;
        })(h);
      (S.prototype.inspect = function(e, t) {
        return (t.customInspect = !1), f.inspect(this, t);
      }), (S.prototype.send = function(e, t, n) {
        var r = this;
        return typeof t == "function" && ((n = t), (t = void 0)), typeof n !=
          "function"
          ? new Promise(function(n, i) {
              a.call(r, e, t, function(e, t) {
                e ? i(new w(t)) : n(t);
              });
            })
          : void a.call(r, e, t, n);
      }), (S.prototype.close = function(e) {
        function t(e) {
          n._ws.removeAllListeners(
            "close"
          ), n._ws.close(), n._ws.once("close", function() {
            n._ws.removeAllListeners(), e();
          });
        }
        var n = this;
        return typeof e != "function"
          ? new Promise(function(e, n) {
              t(e);
            })
          : void t(e);
      }), (e.exports = S);
    }.call(t, n(1)));
  },
  function(e, t, n) {
    (function(e, r) {
      function i(e, n) {
        var r = {
          seen: [],
          stylize: a
        };
        return arguments.length >= 3 &&
          (r.depth = arguments[2]), arguments.length >= 4 &&
          (r.colors = arguments[3]), f(n)
          ? (r.showHidden = n)
          : n && t._extend(r, n), S(r.showHidden) && (r.showHidden = !1), S(
          r.depth
        ) && (r.depth = 2), S(r.colors) && (r.colors = !1), S(
          r.customInspect
        ) && (r.customInspect = !0), r.colors && (r.stylize = o), p(
          r,
          e,
          r.depth
        );
      }
      function o(e, t) {
        var n = i.styles[t];
        return n ? `[${i.colors[n][0]}m${e}[${i.colors[n][1]}m` : e;
      }
      function a(e, t) {
        return e;
      }
      function s(e) {
        var t = {};
        return e.forEach(function(e, n) {
          t[e] = !0;
        }), t;
      }
      function p(e, n, r) {
        if (
          e.customInspect &&
          n &&
          k(n.inspect) &&
          n.inspect !== t.inspect &&
          (!n.constructor || n.constructor.prototype !== n)
        ) {
          var i = n.inspect(r, e);
          return v(i) || (i = p(e, i, r)), i;
        }
        var o = c(e, n);
        if (o) {
          return o;
        }
        var a = Object.keys(n),
          f = s(a);
        if (
          (
            e.showHidden && (a = Object.getOwnPropertyNames(n)),
            R(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)
          )
        ) {
          return d(n);
        }
        if (a.length === 0) {
          if (k(n)) {
            var y = n.name ? `: ${n.name}` : "";
            return e.stylize(`[Function${y}]`, "special");
          }
          if (x(n)) {
            return e.stylize(RegExp.prototype.toString.call(n), "regexp");
          }
          if (T(n)) {
            return e.stylize(Date.prototype.toString.call(n), "date");
          }
          if (R(n)) {
            return d(n);
          }
        }
        var g = "",
          b = !1,
          w = ["{", "}"];
        if ((h(n) && ((b = !0), (w = ["[", "]"])), k(n))) {
          var S = n.name ? `: ${n.name}` : "";
          g = ` [Function${S}]`;
        }
        if (
          (
            x(n) && (g = ` ${RegExp.prototype.toString.call(n)}`),
            T(n) && (g = ` ${Date.prototype.toUTCString.call(n)}`),
            R(n) && (g = ` ${d(n)}`),
            a.length === 0 && (!b || n.length == 0)
          )
        ) {
          return w[0] + g + w[1];
        }
        if (r < 0) {
          return x(n)
            ? e.stylize(RegExp.prototype.toString.call(n), "regexp")
            : e.stylize("[Object]", "special");
        }
        e.seen.push(n);
        var I;
        return (I = b
          ? l(e, n, r, f, a)
          : a.map(function(t) {
              return m(e, n, r, f, t, b);
            })), e.seen.pop(), u(I, g, w);
      }
      function c(e, t) {
        if (S(t)) {
          return e.stylize("undefined", "undefined");
        }
        if (v(t)) {
          var n = `'${JSON.stringify(t)
            .replace(/^"|"$/g, "")
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"')}'`;
          return e.stylize(n, "string");
        }
        return b(t)
          ? e.stylize(`${t}`, "number")
          : f(t)
            ? e.stylize(`${t}`, "boolean")
            : y(t) ? e.stylize("null", "null") : void 0;
      }
      function d(e) {
        return `[${Error.prototype.toString.call(e)}]`;
      }
      function l(e, t, n, r, i) {
        for (var o = [], a = 0, s = t.length; a < s; ++a) {
          D(t, String(a)) ? o.push(m(e, t, n, r, String(a), !0)) : o.push("");
        }
        return i.forEach(function(i) {
          i.match(/^\d+$/) || o.push(m(e, t, n, r, i, !0));
        }), o;
      }
      function m(e, t, n, r, i, o) {
        var a, s, c;
        if (
          (
            (c = Object.getOwnPropertyDescriptor(t, i) || {
              value: t[i]
            }),
            c.get
              ? (s = c.set
                  ? e.stylize("[Getter/Setter]", "special")
                  : e.stylize("[Getter]", "special"))
              : c.set && (s = e.stylize("[Setter]", "special")),
            D(r, i) || (a = `[${i}]`),
            s ||
              (e.seen.indexOf(c.value) < 0
                ? (
                    (s = y(n) ? p(e, c.value, null) : p(e, c.value, n - 1)),
                    s.indexOf("\n") > -1 &&
                      (s = o
                        ? s
                            .split("\n")
                            .map(function(e) {
                              return `  ${e}`;
                            })
                            .join("\n")
                            .substr(2)
                        : `\n${s
                            .split("\n")
                            .map(function(e) {
                              return `   ${e}`;
                            })
                            .join("\n")}`)
                  )
                : (s = e.stylize("[Circular]", "special"))),
            S(a)
          )
        ) {
          if (o && i.match(/^\d+$/)) {
            return s;
          }
          (a = JSON.stringify(`${i}`)), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((a = a.substr(1, a.length - 2)), (a = e.stylize(a, "name")))
            : (
                (a = a
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (a = e.stylize(a, "string"))
              );
        }
        return `${a}: ${s}`;
      }
      function u(e, t, n) {
        var r = 0,
          i = e.reduce(function(e, t) {
            return r++, t.indexOf("\n") >= 0 &&
              r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
          }, 0);
        return i > 60
          ? `${n[0] + (t === "" ? "" : `${t}\n `)} ${e.join(",\n  ")} ${n[1]}`
          : `${n[0] + t} ${e.join(", ")} ${n[1]}`;
      }
      function h(e) {
        return Array.isArray(e);
      }
      function f(e) {
        return typeof e == "boolean";
      }
      function y(e) {
        return e === null;
      }
      function g(e) {
        return e == null;
      }
      function b(e) {
        return typeof e == "number";
      }
      function v(e) {
        return typeof e == "string";
      }
      function w(e) {
        return typeof e == "symbol";
      }
      function S(e) {
        return void 0 === e;
      }
      function x(e) {
        return I(e) && $(e) === "[object RegExp]";
      }
      function I(e) {
        return typeof e == "object" && e !== null;
      }
      function T(e) {
        return I(e) && $(e) === "[object Date]";
      }
      function R(e) {
        return I(e) && ($(e) === "[object Error]" || e instanceof Error);
      }
      function k(e) {
        return typeof e == "function";
      }
      function C(e) {
        return (
          e === null ||
          typeof e == "boolean" ||
          typeof e == "number" ||
          typeof e == "string" ||
          typeof e == "symbol" ||
          typeof e == "undefined"
        );
      }
      function $(e) {
        return Object.prototype.toString.call(e);
      }
      function O(e) {
        return e < 10 ? `0${e.toString(10)}` : e.toString(10);
      }
      function E() {
        var e = new Date(),
          t = [O(e.getHours()), O(e.getMinutes()), O(e.getSeconds())].join(":");
        return [e.getDate(), N[e.getMonth()], t].join(" ");
      }
      function D(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      var j = /%[sdj%]/g;
      (t.format = function(e) {
        if (!v(e)) {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t.push(i(arguments[n]));
          }
          return t.join(" ");
        }
        for (
          var n = 1,
            r = arguments,
            o = r.length,
            a = String(e).replace(j, function(e) {
              if (e === "%%") {
                return "%";
              }
              if (n >= o) {
                return e;
              }
              switch (e) {
                case "%s":
                  return String(r[n++]);
                case "%d":
                  return Number(r[n++]);
                case "%j":
                  try {
                    return JSON.stringify(r[n++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                default:
                  return e;
              }
            }),
            s = r[n];
          n < o;
          s = r[++n]
        ) {
          a += y(s) || !I(s) ? ` ${s}` : ` ${i(s)}`;
        }
        return a;
      }), (t.deprecate = function(n, i) {
        function o() {
          if (!a) {
            if (r.throwDeprecation) {
              throw new Error(i);
            }
            r.traceDeprecation ? console.trace(i) : console.error(i), (a = !0);
          }
          return n.apply(this, arguments);
        }
        if (S(e.process)) {
          return function() {
            return t.deprecate(n, i).apply(this, arguments);
          };
        }
        if (r.noDeprecation === !0) {
          return n;
        }
        var a = !1;
        return o;
      });
      var A,
        P = {};
      (t.debuglog = function(e) {
        if (
          (S(A) && (A = r.env.NODE_DEBUG || ""), (e = e.toUpperCase()), !P[e])
        ) {
          if (new RegExp(`\\b${e}\\b`, "i").test(A)) {
            var n = r.pid;
            P[e] = function() {
              var r = t.format.apply(t, arguments);
              console.error("%s %d: %s", e, n, r);
            };
          } else {
            P[e] = function() {};
          }
        }
        return P[e];
      }), (t.inspect = i), (i.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
      }), (i.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
      }), (t.isArray = h), (t.isBoolean = f), (t.isNull = y), (t.isNullOrUndefined = g), (t.isNumber = b), (t.isString = v), (t.isSymbol = w), (t.isUndefined = S), (t.isRegExp = x), (t.isObject = I), (t.isDate = T), (t.isError = R), (t.isFunction = k), (t.isPrimitive = C), (t.isBuffer = n(
        45
      ));
      var N = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      (t.log = function() {
        console.log("%s - %s", E(), t.format.apply(t, arguments));
      }), (t.inherits = n(46)), (t._extend = function(e, t) {
        if (!t || !I(t)) {
          return e;
        }
        for (var n = Object.keys(t), r = n.length; r--; ) {
          e[n[r]] = t[n[r]];
        }
        return e;
      });
    }.call(
      t,
      (function() {
        return this;
      })(),
      n(1)
    ));
  },
  function(e, t) {
    e.exports = function(e) {
      return (
        e &&
        typeof e == "object" &&
        typeof e.copy == "function" &&
        typeof e.fill == "function" &&
        typeof e.readUInt8 == "function"
      );
    };
  },
  function(e, t) {
    typeof Object.create == "function"
      ? (e.exports = function(e, t) {
          (e.super_ = t), (e.prototype = Object.create(t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }));
        })
      : (e.exports = function(e, t) {
          e.super_ = t;
          var n = function() {};
          (n.prototype =
            t.prototype), (e.prototype = new n()), (e.prototype.constructor = e);
        });
  },
  function(e, t, n) {
    function r(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function i(e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      return !t || (typeof t != "object" && typeof t != "function") ? e : t;
    }
    function o(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof t}`
        );
      }
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    var a = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in
            r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
      s = n(2),
      p = (function(e) {
        function t(e) {
          r(this, t);
          var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (n._ws = new WebSocket(e)), (n._ws.onopen = function() {
            n.emit("open");
          }), (n._ws.onclose = function() {
            n.emit("close");
          }), (n._ws.onmessage = function(e) {
            n.emit("message", e.data);
          }), (n._ws.onerror = function() {
            n.emit("error", new Error("WebSocket error"));
          }), n;
        }
        return o(t, e), a(t, [
          {
            key: "close",
            value: function() {
              this._ws.close();
            }
          },
          {
            key: "send",
            value: function(e) {
              this._ws.send(e);
            }
          }
        ]), t;
      })(s);
    e.exports = p;
  },
  function(e, t) {
    function n(e) {
      var t = {};
      return e.forEach(function(e) {
        var n = e.name;
        delete e.name, (t[n] = e);
      }), t;
    }
    function r(e, t, r) {
      (e.category = t), Object.keys(r).forEach(function(i) {
        i !== "name" &&
          ((t === "type" && i === "properties") || i === "parameters"
            ? (e[i] = n(r[i]))
            : (e[i] = r[i]));
      });
    }
    function i(e, t, n) {
      var i = function(r, i) {
        return e.send(`${t}.${n.name}`, r, i);
      };
      r(i, "command", n), (e[t][n.name] = i);
    }
    function o(e, t, n) {
      var i = `${t}.${n.name}`,
        o = function(t) {
          return typeof t != "function"
            ? new Promise(function(t, n) {
                e.once(i, t);
              })
            : void e.on(i, t);
        };
      r(o, "event", n), (e[t][n.name] = o);
    }
    function a(e, t, n) {
      var i = {};
      r(i, "type", n), (e[t][n.id] = i);
    }
    function s(e) {
      var t = this;
      return new Promise(function(n, r) {
        (t.protocol = e), e.domains.forEach(function(e) {
          var n = e.domain;
          (t[n] = {}), (e.commands || []).forEach(function(e) {
            i(t, n, e);
          }), (e.events || []).forEach(function(e) {
            o(t, n, e);
          }), (e.types || []).forEach(function(e) {
            a(t, n, e);
          });
        }), n();
      });
    }

    e.exports.prepare = s;
  }
]);

// WEBPACK FOOTER //
// ../~/chrome-remote-interface/chrome-remote-interface.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).setImmediate, __webpack_require__(0).clearImmediate))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const cri = __webpack_require__(1);

debugger;
alert("yo");


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);