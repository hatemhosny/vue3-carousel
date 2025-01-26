import {
  h,
  onMounted,
  onUnmounted,
  ref,
  watch
} from "./chunk-X54IR6VG.js";

// node_modules/.pnpm/livecodes@0.8.0/node_modules/livecodes/vue.js
var te = Object.create;
var F = Object.defineProperty;
var oe = Object.getOwnPropertyDescriptor;
var ne = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf;
var se = Object.prototype.hasOwnProperty;
var ie = (d, v) => () => (v || d((v = { exports: {} }).exports, v), v.exports);
var ae = (d, v, C, x) => {
  if (v && typeof v == "object" || typeof v == "function") for (let m of ne(v)) !se.call(d, m) && m !== C && F(d, m, { get: () => v[m], enumerable: !(x = oe(v, m)) || x.enumerable });
  return d;
};
var le = (d, v, C) => (C = d != null ? te(re(d)) : {}, ae(v || !d || !d.__esModule ? F(C, "default", { value: d, enumerable: true }) : C, d));
var X = ie((ve, _) => {
  var ce = function() {
    var d = String.fromCharCode, v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", x = {};
    function m(t, r) {
      if (!x[t]) {
        x[t] = {};
        for (var f = 0; f < t.length; f++) x[t][t.charAt(f)] = f;
      }
      return x[t][r];
    }
    var b = { compressToBase64: function(t) {
      if (t == null) return "";
      var r = b._compress(t, 6, function(f) {
        return v.charAt(f);
      });
      switch (r.length % 4) {
        default:
        case 0:
          return r;
        case 1:
          return r + "===";
        case 2:
          return r + "==";
        case 3:
          return r + "=";
      }
    }, decompressFromBase64: function(t) {
      return t == null ? "" : t == "" ? null : b._decompress(t.length, 32, function(r) {
        return m(v, t.charAt(r));
      });
    }, compressToUTF16: function(t) {
      return t == null ? "" : b._compress(t, 15, function(r) {
        return d(r + 32);
      }) + " ";
    }, decompressFromUTF16: function(t) {
      return t == null ? "" : t == "" ? null : b._decompress(t.length, 16384, function(r) {
        return t.charCodeAt(r) - 32;
      });
    }, compressToUint8Array: function(t) {
      for (var r = b.compress(t), f = new Uint8Array(r.length * 2), n = 0, i = r.length; n < i; n++) {
        var p = r.charCodeAt(n);
        f[n * 2] = p >>> 8, f[n * 2 + 1] = p % 256;
      }
      return f;
    }, decompressFromUint8Array: function(t) {
      if (t == null) return b.decompress(t);
      for (var r = new Array(t.length / 2), f = 0, n = r.length; f < n; f++) r[f] = t[f * 2] * 256 + t[f * 2 + 1];
      var i = [];
      return r.forEach(function(p) {
        i.push(d(p));
      }), b.decompress(i.join(""));
    }, compressToEncodedURIComponent: function(t) {
      return t == null ? "" : b._compress(t, 6, function(r) {
        return C.charAt(r);
      });
    }, decompressFromEncodedURIComponent: function(t) {
      return t == null ? "" : t == "" ? null : (t = t.replace(/ /g, "+"), b._decompress(t.length, 32, function(r) {
        return m(C, t.charAt(r));
      }));
    }, compress: function(t) {
      return b._compress(t, 16, function(r) {
        return d(r);
      });
    }, _compress: function(t, r, f) {
      if (t == null) return "";
      var n, i, p = {}, a = {}, y = "", S = "", h2 = "", w = 2, M = 3, l = 2, u = [], o = 0, e = 0, E;
      for (E = 0; E < t.length; E += 1) if (y = t.charAt(E), Object.prototype.hasOwnProperty.call(p, y) || (p[y] = M++, a[y] = true), S = h2 + y, Object.prototype.hasOwnProperty.call(p, S)) h2 = S;
      else {
        if (Object.prototype.hasOwnProperty.call(a, h2)) {
          if (h2.charCodeAt(0) < 256) {
            for (n = 0; n < l; n++) o = o << 1, e == r - 1 ? (e = 0, u.push(f(o)), o = 0) : e++;
            for (i = h2.charCodeAt(0), n = 0; n < 8; n++) o = o << 1 | i & 1, e == r - 1 ? (e = 0, u.push(f(o)), o = 0) : e++, i = i >> 1;
          } else {
            for (i = 1, n = 0; n < l; n++) o = o << 1 | i, e == r - 1 ? (e = 0, u.push(f(o)), o = 0) : e++, i = 0;
            for (i = h2.charCodeAt(0), n = 0; n < 16; n++) o = o << 1 | i & 1, e == r - 1 ? (e = 0, u.push(f(o)), o = 0) : e++, i = i >> 1;
          }
          w--, w == 0 && (w = Math.pow(2, l), l++), delete a[h2];
        } else for (i = p[h2], n = 0; n < l; n++) o = o << 1 | i & 1, e == r - 1 ? (e = 0, u.push(f(o)), o = 0) : e++, i = i >> 1;
        w--, w == 0 && (w = Math.pow(2, l), l++), p[S] = M++, h2 = String(y);
      }
      if (h2 !== "") {
        if (Object.prototype.hasOwnProperty.call(a, h2)) {
          if (h2.charCodeAt(0) < 256) {
            for (n = 0; n < l; n++) o = o << 1, e == r - 1 ? (e = 0, u.push(f(o)), o = 0) : e++;
            for (i = h2.charCodeAt(0), n = 0; n < 8; n++) o = o << 1 | i & 1, e == r - 1 ? (e = 0, u.push(f(o)), o = 0) : e++, i = i >> 1;
          } else {
            for (i = 1, n = 0; n < l; n++) o = o << 1 | i, e == r - 1 ? (e = 0, u.push(f(o)), o = 0) : e++, i = 0;
            for (i = h2.charCodeAt(0), n = 0; n < 16; n++) o = o << 1 | i & 1, e == r - 1 ? (e = 0, u.push(f(o)), o = 0) : e++, i = i >> 1;
          }
          w--, w == 0 && (w = Math.pow(2, l), l++), delete a[h2];
        } else for (i = p[h2], n = 0; n < l; n++) o = o << 1 | i & 1, e == r - 1 ? (e = 0, u.push(f(o)), o = 0) : e++, i = i >> 1;
        w--, w == 0 && (w = Math.pow(2, l), l++);
      }
      for (i = 2, n = 0; n < l; n++) o = o << 1 | i & 1, e == r - 1 ? (e = 0, u.push(f(o)), o = 0) : e++, i = i >> 1;
      for (; ; ) if (o = o << 1, e == r - 1) {
        u.push(f(o));
        break;
      } else e++;
      return u.join("");
    }, decompress: function(t) {
      return t == null ? "" : t == "" ? null : b._decompress(t.length, 32768, function(r) {
        return t.charCodeAt(r);
      });
    }, _decompress: function(t, r, f) {
      var n = [], i, p = 4, a = 4, y = 3, S = "", h2 = [], w, M, l, u, o, e, E, c = { val: f(0), position: r, index: 1 };
      for (w = 0; w < 3; w += 1) n[w] = w;
      for (l = 0, o = Math.pow(2, 2), e = 1; e != o; ) u = c.val & c.position, c.position >>= 1, c.position == 0 && (c.position = r, c.val = f(c.index++)), l |= (u > 0 ? 1 : 0) * e, e <<= 1;
      switch (i = l) {
        case 0:
          for (l = 0, o = Math.pow(2, 8), e = 1; e != o; ) u = c.val & c.position, c.position >>= 1, c.position == 0 && (c.position = r, c.val = f(c.index++)), l |= (u > 0 ? 1 : 0) * e, e <<= 1;
          E = d(l);
          break;
        case 1:
          for (l = 0, o = Math.pow(2, 16), e = 1; e != o; ) u = c.val & c.position, c.position >>= 1, c.position == 0 && (c.position = r, c.val = f(c.index++)), l |= (u > 0 ? 1 : 0) * e, e <<= 1;
          E = d(l);
          break;
        case 2:
          return "";
      }
      for (n[3] = E, M = E, h2.push(E); ; ) {
        if (c.index > t) return "";
        for (l = 0, o = Math.pow(2, y), e = 1; e != o; ) u = c.val & c.position, c.position >>= 1, c.position == 0 && (c.position = r, c.val = f(c.index++)), l |= (u > 0 ? 1 : 0) * e, e <<= 1;
        switch (E = l) {
          case 0:
            for (l = 0, o = Math.pow(2, 8), e = 1; e != o; ) u = c.val & c.position, c.position >>= 1, c.position == 0 && (c.position = r, c.val = f(c.index++)), l |= (u > 0 ? 1 : 0) * e, e <<= 1;
            n[a++] = d(l), E = a - 1, p--;
            break;
          case 1:
            for (l = 0, o = Math.pow(2, 16), e = 1; e != o; ) u = c.val & c.position, c.position >>= 1, c.position == 0 && (c.position = r, c.val = f(c.index++)), l |= (u > 0 ? 1 : 0) * e, e <<= 1;
            n[a++] = d(l), E = a - 1, p--;
            break;
          case 2:
            return h2.join("");
        }
        if (p == 0 && (p = Math.pow(2, y), y++), n[E]) S = n[E];
        else if (E === a) S = M + M.charAt(0);
        else return null;
        h2.push(S), n[a++] = M + S.charAt(0), p--, M = S, p == 0 && (p = Math.pow(2, y), y++);
      }
    } };
    return b;
  }();
  typeof _ != "undefined" && _ != null && (_.exports = ce);
});
var de = le(X());
async function H(d, v = {}) {
  typeof d == "object" && !(d instanceof HTMLElement) && d.view === "headless" && (v = d, d = null);
  let { appUrl: C = "https://livecodes.io/", params: x = {}, config: m = {}, import: b, headless: t, lite: r, loading: f = "lazy", template: n, view: i } = v, p = t || i === "headless", a = null;
  if (typeof d == "string") a = document.querySelector(d);
  else if (d instanceof HTMLElement) a = d;
  else if (!(p && typeof d == "object")) throw new Error("A valid container element is required.");
  if (!a) if (p) a = document.createElement("div"), z(a), document.body.appendChild(a);
  else throw new Error(`Cannot find element: "${d}"`);
  let y;
  try {
    y = new URL(C);
  } catch (s) {
    throw new Error(`"${C}" is not a valid URL.`);
  }
  let S = y.origin;
  if (typeof x == "object" && Object.keys(x).forEach((s) => {
    y.searchParams.set(s, String(x[s]));
  }), n && y.searchParams.set("template", n), b && y.searchParams.set("x", b), p && y.searchParams.set("headless", "true"), r && (console.warn(`Deprecation notice: "lite" option is deprecated. Use "config: { mode: 'lite' }" instead.`), typeof m == "object" && m.mode == null ? m.mode = "lite" : y.searchParams.set("lite", "true")), i && (console.warn('Deprecation notice: The "view" option has been moved to "config.view". For headless mode use "headless: true".'), typeof m == "object" && m.view == null && i !== "headless" ? m.view = i : y.searchParams.set("view", i)), typeof m == "string") try {
    new URL(m), y.searchParams.set("config", m);
  } catch (s) {
    throw new Error('"config" is not a valid URL or configuration object.');
  }
  else if (typeof m == "object") Object.keys(m).length > 0 && y.searchParams.set("config", "sdk");
  else throw new Error('"config" is not a valid URL or configuration object.');
  y.searchParams.set("embed", "true"), y.searchParams.set("loading", p ? "eager" : f);
  let h2 = false, w = "Cannot call API methods after calling `destroy()`.", l = await new Promise((s) => {
    var U, A, k, j, T, W, q, Z, Q;
    if (!a) return;
    let P = a.dataset.height || a.style.height;
    if (P && !p) {
      let N = isNaN(Number(P)) ? P : P + "px";
      a.style.height = N;
    }
    a.dataset.defaultStyles !== "false" && !p && ((U = a.style).backgroundColor || (U.backgroundColor = "#fff"), (A = a.style).border || (A.border = "1px solid black"), (k = a.style).borderRadius || (k.borderRadius = "8px"), (j = a.style).boxSizing || (j.boxSizing = "border-box"), (T = a.style).padding || (T.padding = "0"), (W = a.style).width || (W.width = "100%"), (q = a.style).height || (q.height = a.style.height || "300px"), a.style.minHeight = "200px", a.style.flexGrow = "1", (Z = a.style).overflow || (Z.overflow = "hidden"), (Q = a.style).resize || (Q.resize = "vertical"));
    let O = "livecodes", L = a.querySelector(`iframe.${O}`), g = L || document.createElement("iframe");
    g.classList.add(O), g.setAttribute("allow", "accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"), g.setAttribute("allowtransparency", "true"), g.setAttribute("allowpaymentrequest", "true"), g.setAttribute("allowfullscreen", "true"), g.setAttribute("sandbox", "allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");
    let R = f === "eager" ? "eager" : "lazy";
    g.setAttribute("loading", R), p ? z(g) : (g.style.height = "100%", g.style.minHeight = "200px", g.style.width = "100%", g.style.margin = "0", g.style.border = "0", g.style.borderRadius = a.style.borderRadius), addEventListener("message", function N(D) {
      var $, G;
      D.source !== g.contentWindow || D.origin !== S || (($ = D.data) == null ? void 0 : $.type) !== "livecodes-get-config" || (removeEventListener("message", N), (G = g.contentWindow) == null || G.postMessage({ type: "livecodes-config", payload: m }, S));
    }), g.onload = () => {
      s(g);
    }, g.src = y.href, L || a.appendChild(g);
  }), u = new Promise((s) => {
    addEventListener("message", function P(O) {
      var L;
      O.source !== l.contentWindow || O.origin !== S || ((L = O.data) == null ? void 0 : L.type) !== "livecodes-ready" || (removeEventListener("message", P), s(), u.settled = true);
    });
  }), o = () => h2 ? Promise.reject(w) : new Promise(async (s) => {
    var O;
    u.settled && s();
    let P = { type: "livecodes-load" };
    (O = l.contentWindow) == null || O.postMessage(P, S), await u, s();
  }), e = (s, P) => new Promise(async (O, L) => {
    var R;
    if (h2) return L(w);
    await o();
    let g = ee();
    addEventListener("message", function U(A) {
      var k, j;
      if (!(A.source !== l.contentWindow || A.origin !== S || ((k = A.data) == null ? void 0 : k.type) !== "livecodes-api-response" || ((j = A.data) == null ? void 0 : j.id) !== g) && A.data.method === s) {
        removeEventListener("message", U);
        let T = A.data.payload;
        T != null && T.error ? L(T.error) : O(T);
      }
    }), (R = l.contentWindow) == null || R.postMessage({ method: s, id: g, args: P }, S);
  }), E = {}, c = ["load", "ready", "code", "console", "tests", "destroy"], K = (s, P) => {
    var O;
    if (h2) throw new Error(w);
    return c.includes(s) ? (e("watch", [s]), E[s] || (E[s] = []), (O = E[s]) == null || O.push(P), { remove: () => {
      var L, g;
      E[s] = (L = E[s]) == null ? void 0 : L.filter((R) => R !== P), ((g = E[s]) == null ? void 0 : g.length) === 0 && e("watch", [s, "unsubscribe"]);
    } }) : { remove: () => {
    } };
  }, V = (s) => ({ "livecodes-app-loaded": "load", "livecodes-ready": "ready", "livecodes-change": "code", "livecodes-console": "console", "livecodes-test-results": "tests", "livecodes-destroy": "destroy" })[s];
  addEventListener("message", async (s) => {
    var L, g, R, U;
    let P = V((g = (L = s.data) == null ? void 0 : L.type) != null ? g : "");
    if (s.source !== l.contentWindow || s.origin !== S || !P || !E[P]) return;
    let O = (R = s.data) == null ? void 0 : R.payload;
    (U = E[P]) == null || U.forEach((A) => {
      A(O);
    });
  });
  let B = () => {
    var s;
    Object.values(E).forEach((P) => {
      P.length = 0;
    }), (s = l == null ? void 0 : l.remove) == null || s.call(l), h2 = true;
  };
  f === "lazy" && "IntersectionObserver" in window && new IntersectionObserver((P, O) => {
    P.forEach(async (L) => {
      L.isIntersecting && (await o(), O.unobserve(a));
    });
  }, { rootMargin: "150px" }).observe(a);
  function z(s) {
    s.style.position = "absolute", s.style.top = "0", s.style.visibility = "hidden", s.style.opacity = "0";
  }
  let ee = () => (String(Math.random()) + Date.now().toFixed()).replace("0.", "");
  return { load: () => o(), run: () => e("run"), format: (s) => e("format", [s]), getShareUrl: (s) => e("getShareUrl", [s]), getConfig: (s) => e("getConfig", [s]), setConfig: (s) => e("setConfig", [s]), getCode: () => e("getCode"), show: (s, P) => e("show", [s, P]), runTests: () => e("runTests"), onChange: (s) => K("code", s), watch: K, exec: (s, ...P) => e("exec", [s, ...P]), destroy: () => u.settled ? e("destroy").then(B) : h2 ? Promise.reject(w) : (B(), Promise.resolve()) };
}
var Y;
globalThis.document && document.currentScript && "prefill" in ((Y = document.currentScript) == null ? void 0 : Y.dataset) && window.addEventListener("load", () => {
  document.querySelectorAll(".livecodes").forEach((d) => {
    let v, C = d.dataset.options;
    if (C) try {
      v = JSON.parse(C);
    } catch (t) {
    }
    let x, m = d.dataset.config || d.dataset.prefill;
    if (m) try {
      x = JSON.parse(m);
    } catch (t) {
    }
    let b = encodeURIComponent(d.outerHTML);
    d.innerHTML = "", H(d, { import: "dom/" + b, ...v, ...x ? { config: x } : {} });
  });
});
var ye = { appUrl: String, config: [Object, String], headless: Boolean, import: String, lite: Boolean, loading: String, params: Object, template: String, view: String, height: String };
var I = (d) => JSON.parse(JSON.stringify(d));
var he = { props: ye, emits: ["sdkReady"], setup(d, v) {
  let { height: C, ...x } = d, m = ref(), b = ref(C || ""), t = ref(), { config: r, ...f } = x, n = JSON.stringify(r), i = JSON.stringify(f);
  return onMounted(() => {
    m.value && H(m.value, I(x)).then((p) => {
      t.value = p, v.emit("sdkReady", p);
    });
  }), watch(d, async (p) => {
    var w;
    if (!m.value || !t.value) return;
    let { height: a, ...y } = p;
    b.value = a || "";
    let { config: S, ...h2 } = y;
    typeof S == "string" && (S = await fetch(S).then((M) => M.json())), JSON.stringify(h2) !== i ? (await ((w = t.value) == null ? void 0 : w.destroy()), H(m.value, I(y)).then((M) => {
      t.value = M, v.emit("sdkReady", M);
    })) : JSON.stringify(S) !== n && t.value.setConfig(I(S) || {}), n = JSON.stringify(S), i = JSON.stringify(h2);
  }), onUnmounted(() => {
    var p;
    (p = t.value) == null || p.destroy();
  }), () => {
    var p, a;
    return h("div", { ref: m, "data-height": b }, ((a = (p = v.slots).default) == null ? void 0 : a.call(p)) || "");
  };
} };
var Pe = he;
export {
  Pe as default
};
//# sourceMappingURL=livecodes_vue.js.map
