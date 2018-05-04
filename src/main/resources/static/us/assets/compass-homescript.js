/*!
######################################################

# COMPASS-HOMESCRIPT.JS

# OCOM GLOBAL ASSET RELEASE: v6.6.3

# BUILD DATE: THU AUG 21 20:44:40 UTC 2014

# COPYRIGHT ORACLE CORP 2013 [UNLESS STATED OTHERWISE]

# ANY CHANGES MADE TO THIS FILE WILL BE OVERWRITTEN!
# DO NOT MODIFY THIS FILE ON STAGE OR PRODUCTION. ALL
# CHANGES OR ADDITIONS TO THIS FILE MUST BE SUBMITTED
# TO WEBSTANDARDS_WW -AT- ORACLE.COM

######################################################
*/
(function() {
    if (typeof checkbetamode == "function") {
        checkbetamode("compass", "v6.6.3");
    }
    if (window.devicePixelRatio >= 1.2 || document.location.href.indexOf("?retina") > -1) {
        $("html").addClass("retina");
    }
})();

/*! Modernizr 2.8.3 (Custom Build) | MIT & BSD */
window.Modernizr = function(ap, ao, an) {
    function aa(b) {
        ag.cssText = b;
    }

    function Y(d, c) {
        return aa(ad.join(d + ";") + (c || ""));
    }

    function W(d, c) {
        return typeof d === c;
    }

    function U(d, c) {
        return !!~("" + d).indexOf(c);
    }

    function S(f, c) {
        for (var h in f) {
            var g = f[h];
            if (!U(g, "-") && ag[g] !== an) {
                return c == "pfx" ? g : !0;
            }
        }
        return !1;
    }

    function Q(g, c, j) {
        for (var i in g) {
            var h = c[g[i]];
            if (h !== an) {
                return j === !1 ? g[i] : W(h, "function") ? h.bind(j || c) : h;
            }
        }
        return !1;
    }

    function O(g, f, j) {
        var i = g.charAt(0).toUpperCase() + g.slice(1),
            h = (g + " " + ab.join(i + " ") + i).split(" ");
        return W(f, "string") || W(f, "undefined") ? S(h, f) : (h = (g + " " + Z.join(i + " ") + i).split(" "), Q(h, f, j));
    }
    var am = "2.8.3",
        al = {},
        ak = !0,
        aj = ao.documentElement,
        ai = "modernizr",
        ah = ao.createElement(ai),
        ag = ah.style,
        af, ae = {}.toString,
        ad = " -webkit- -moz- -o- -ms- ".split(" "),
        ac = "Webkit Moz O ms",
        ab = ac.split(" "),
        Z = ac.toLowerCase().split(" "),
        X = {},
        V = {},
        T = {},
        R = [],
        P = R.slice,
        N, M = function(v, u, t, s) {
            var r, q, p, o, h = ao.createElement("div"),
                g = ao.body,
                b = g || ao.createElement("body");
            if (parseInt(t, 10)) {
                while (t--) {
                    p = ao.createElement("div"), p.id = s ? s[t] : ai + (t + 1), h.appendChild(p);
                }
            }
            return r = ["&#173;", '<style id="s', ai, '">', v, "</style>"].join(""), h.id = ai, (g ? h : b).innerHTML += r, b.appendChild(h), g || (b.style.background = "", b.style.overflow = "hidden", o = aj.style.overflow, aj.style.overflow = "hidden", aj.appendChild(b)), q = u(h, v), g ? h.parentNode.removeChild(h) : (b.parentNode.removeChild(b), aj.style.overflow = o), !!q;
        },
        K = function() {
            function c(h, g) {
                g = g || ao.createElement(b[h] || "div"), h = "on" + h;
                var a = h in g;
                return a || (g.setAttribute || (g = ao.createElement("div")), g.setAttribute && g.removeAttribute && (g.setAttribute(h, ""), a = W(g[h], "function"), W(g[h], "undefined") || (g[h] = an), g.removeAttribute(h))), g = null, a;
            }
            var b = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return c;
        }(),
        J = {}.hasOwnProperty,
        I;
    !W(J, "undefined") && !W(J.call, "undefined") ? I = function(d, c) {
        return J.call(d, c);
    } : I = function(d, c) {
        return c in d && W(d.constructor.prototype[c], "undefined");
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        var h = this;
        if (typeof h != "function") {
            throw new TypeError;
        }
        var g = P.call(arguments, 1),
            f = function() {
                if (this instanceof f) {
                    var b = function() {};
                    b.prototype = h.prototype;
                    var d = new b,
                        c = h.apply(d, g.concat(P.call(arguments)));
                    return Object(c) === c ? c : d;
                }
                return h.apply(a, g.concat(P.call(arguments)));
            };
        return f;
    }), X.touch = function() {
        var a;
        return "ontouchstart" in ap || ap.DocumentTouch && ao instanceof DocumentTouch ? a = !0 : M(["@media (", ad.join("touch-enabled),("), ai, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(b) {
            a = b.offsetTop === 9;
        }), a;
    }, X.hashchange = function() {
        return K("hashchange", ap) && (ao.documentMode === an || ao.documentMode > 7);
    }, X.history = function() {
        return !!ap.history && !!history.pushState;
    }, X.rgba = function() {
        return aa("background-color:rgba(150,255,150,.5)"), U(ag.backgroundColor, "rgba");
    }, X.boxshadow = function() {
        return O("boxShadow");
    }, X.cssgradients = function() {
        var e = "background-image:",
            d = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            f = "linear-gradient(left top,#9f9, white);";
        return aa((e + "-webkit- ".split(" ").join(d + e) + ad.join(f + e)).slice(0, -e.length)), U(ag.backgroundImage, "gradient");
    };
    for (var L in X) {
        I(X, L) && (N = L.toLowerCase(), al[N] = X[L](), R.push((al[N] ? "" : "no-") + N));
    }
    return al.addTest = function(e, c) {
        if (typeof e == "object") {
            for (var f in e) {
                I(e, f) && al.addTest(f, e[f]);
            }
        } else {
            e = e.toLowerCase();
            if (al[e] !== an) {
                return al;
            }
            c = typeof c == "function" ? c() : c, typeof ak != "undefined" && ak && (aj.className += " " + (c ? "" : "no-") + e), al[e] = c;
        }
        return al;
    }, aa(""), ah = af = null, al._version = am, al._prefixes = ad, al._domPrefixes = Z, al._cssomPrefixes = ab, al.hasEvent = K, al.testProp = function(b) {
        return S([b]);
    }, al.testAllProps = O, al.testStyles = M, aj.className = aj.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (ak ? " js " + R.join(" ") : ""), al;
}(this, this.document);

/*! ORACLELIB.PROFILE  */
var USER = new getUserInfo();
var language_root = "";

function existsUCMCookie(a) {
    if (a == "ORA_UCM_INFO") {
        if ((ORA_UCM_INFO.version != null) && (ORA_UCM_INFO.guid != null) && (ORA_UCM_INFO.username != null)) {
            return true;
        }
    }
    return false;
}

function isUCMRegistered() {
    if (existsUCMCookie("ORA_UCM_INFO") == true) {
        orainfo_exists = true;
        otnnm_exists = true;
        return true;
    }
    return false;
}

function getArg(f, d) {
    var c = "",
        b = "";
    if (!d) {
        d = location.search.substring(1);
    }
    if (!d) {
        return c;
    } else {
        var e = d.split("&");
        for (i = 0; i < e.length; i++) {
            b = e[i].toUpperCase();
            if (b.indexOf(f.toUpperCase() + "=") != -1) {
                var a = e[i].split("=");
                c = a[1];
            }
        }
    }
    return c;
}

function isUCMAnonymous() {
    if ((ORA_UCM_INFO.version != null) && (ORA_UCM_INFO.guid != null) && (isUCMRegistered() == false)) {
        return true;
    } else {
        return false;
    }
}

function getUCMCookies() {
    ORA_UCM_INFO = new private_ORA_UCM_INFO();
}

function signout(a) {
    rUrl = encodeURIComponent(window.location.href);
    if (window.location.host.indexOf("-stage") > -1) {
        window.location = "http://login-stage.oracle.com/sso/logout?p_done_url=" + rUrl;
    } else {
        window.location = "http://login.oracle.com/sso/logout?p_done_url=" + rUrl;
    }
}

function getCookieData(c) {
    var g = c.length;
    var e = document.cookie.length;
    var d = 0;
    var f;
    while (d < e) {
        var b = d + g;
        if (document.cookie.substring(d, b) == c) {
            f = document.cookie.indexOf(";", b);
            if (f == -1) {
                f = document.cookie.length;
            }
            b++;
            var a = decodeURIComponent(document.cookie.substring(b, f).replace(/\+/g, "%20"));
            return cleanCookieContent(a);
        }
        d++;
    }
    return "";
}

function cleanCookieContent(b) {
    var d = (typeof(b) == "undefined") ? "NoData" : b;
    var a = "<>";
    if (d != "NoData") {
        var c = d.length;
        for (i = 0; i < c; i++) {
            if (d.substr(i, 1) != "." && a.search(d.substr(i, 1)) > -1) {
                d = "Invalid";
                i = c + 1;
            }
        }
    }
    return d;
}

function getUserInfo() {
    var a = new Object();
    this.value_enc = getCookieData("ORA_UCM_INFO");
    this.array = this.value_enc.split("~");
    a.version = this.array[0];
    a.guid = this.array[1];
    a.firstname = this.array[2];
    a.lastname = this.array[3];
    a.username = this.array[4];
    return a;
}

function invalidateAuthCookie() {
    var b = getCookieData("ORASSO_AUTH_HINT");
    if (b != null) {
        var a = "ORASSO_AUTH_HINT=INVALID; Max-Age=0; domain=.oracle.com; path=/;";
        document.cookie = a;
    }
}

function sso_sign_out() {
    rUrl = escape(window.location.href);
    if ((rUrl.indexOf("/secure") != -1)) {
        rUrl = "http://www.oracle.com/partners/";
    }
    invalidateAuthCookie();
    if (window.location.host.indexOf("-stage") > -1) {
        window.location = "https://login-stage.oracle.com/sso/logout?p_done_url=" + rUrl;
    } else {
        window.location = "https://login.oracle.com/sso/logout?p_done_url=" + rUrl;
    }
}

function private_UCMCookieDecode(d) {
    var e = " !\"#$&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~.";
    var a = unescape(d);
    var c = "";
    var b = "";
    for (i = 0; i < a.length; i++) {
        b = a.charAt(i);
        j = e.indexOf(b);
        if (j != -1) {
            j += 2;
            if (j > (e.length - 1)) {
                j -= e.length;
            }
            c += e.charAt(j);
        } else {
            c += b;
        }
    }
    return c;
}

function private_ORA_UCM_INFO() {
    this.value_enc = getCookieData("ORA_UCM_INFO");
    this.array = this.value_enc.split("~");
    this.version = this.array[0];
    this.guid = this.array[1];
    this.firstname = this.array[2];
    this.lastname = this.array[3];
    this.username = this.array[4];
    var b = ["3", this.guid, this.firstname, this.lastname, this.username];
    var a = b.join("~");
}
var min = (60 * 1000);
var hour = (60 * min);
var day = (24 * hour);
var year = (365 * day);

/*! SELECTONFOCUS */
jQuery(document).ready(function(a) {
    a(".selectonfocus").focus(function() {
        if (this.value == this.defaultValue) {
            this.select();
        }
    });
});

/*! AUTOCLEAR */
jQuery(document).ready(function(a) {
    a("input.autoclear").bind("focus", function(c) {
        var b = a(this).get(0);
        if (b.value == b.defaultValue) {
            b.value = "";
        }
    });
    a("input.autoclear").bind("blur", function(c) {
        var b = a(this).get(0);
        if (b.value == "") {
            b.value = b.defaultValue;
        }
    });
});

/*!
 * JQUERY.UI v1.9.2 - 2012-12-05
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.position.js, jquery.ui.autocomplete.js, jquery.ui.menu.js
 * Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT
 */

(function(e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0,
        r = /^ui-id-\d+$/;
    e.ui = e.ui || {};
    if (e.ui.version) return;
    e.extend(e.ui, {
            version: "1.9.2",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            _focus: e.fn.focus,
            focus: function(t, n) {
                return typeof t == "number" ? this.each(function() {
                    var r = this;
                    setTimeout(function() {
                        e(r).focus(), n && n.call(r)
                    }, t)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var t;
                return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0) : t = this.parents().filter(function() {
                    return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
            },
            zIndex: function(n) {
                if (n !== t) return this.css("zIndex", n);
                if (this.length) {
                    var r = e(this[0]),
                        i, s;
                    while (r.length && r[0] !== document) {
                        i = r.css("position");
                        if (i === "absolute" || i === "relative" || i === "fixed") {
                            s = parseInt(r.css("zIndex"), 10);
                            if (!isNaN(s) && s !== 0) return s
                        }
                        r = r.parent()
                    }
                }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++n)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    r.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(n) {
                    return !!e.data(n, t)
                }
            }) : function(t, n, r) {
                return !!e.data(t, r[3])
            },
            focusable: function(t) {
                return i(t, !isNaN(e.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var n = e.attr(t, "tabindex"),
                    r = isNaN(n);
                return (r || n >= 0) && i(t, !r)
            }
        }), e(function() {
            var t = document.body,
                n = t.appendChild(n = document.createElement("div"));
            n.offsetHeight, e.extend(n.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            }), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
            function u(t, n, r, s) {
                return e.each(i, function() {
                    n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), n
            }
            var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                s = r.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + r] = function(n) {
                return n === t ? o["inner" + r].call(this) : this.each(function() {
                    e(this).css(s, u(this, n) + "px")
                })
            }, e.fn["outer" + r] = function(t, n) {
                return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                    e(this).css(s, u(this, t, !0, n) + "px")
                })
            }
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
            return function(n) {
                return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
            }
        }(e.fn.removeData)),
        function() {
            var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
            e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = parseFloat(t[1], 10) === 6
        }(), e.fn.extend({
            disableSelection: function() {
                return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), e.extend(e.ui, {
            plugin: {
                add: function(t, n, r) {
                    var i, s = e.ui[t].prototype;
                    for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
                },
                call: function(e, t, n) {
                    var r, i = e.plugins[t];
                    if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
                    for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
                }
            },
            contains: e.contains,
            hasScroll: function(t, n) {
                if (e(t).css("overflow") === "hidden") return !1;
                var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                    i = !1;
                return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
            },
            isOverAxis: function(e, t, n) {
                return e > t && e < t + n
            },
            isOver: function(t, n, r, i, s, o) {
                return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
            }
        })
})(jQuery);
(function(e, t) {
    var n = 0,
        r = Array.prototype.slice,
        i = e.cleanData;
    e.cleanData = function(t) {
        for (var n = 0, r;
            (r = t[n]) != null; n++) try {
            e(r).triggerHandler("remove")
        } catch (s) {}
        i(t)
    }, e.widget = function(t, n, r) {
        var i, s, o, u, a = t.split(".")[0];
        t = t.split(".")[1], i = a + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }, e[a] = e[a] || {}, s = e[a][t], o = e[a][t] = function(e, t) {
            if (!this._createWidget) return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, i) {
            e.isFunction(i) && (r[t] = function() {
                var e = function() {
                        return n.prototype[t].apply(this, arguments)
                    },
                    r = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t = this._super,
                        n = this._superApply,
                        s;
                    return this._super = e, this._superApply = r, s = i.apply(this, arguments), this._super = t, this._superApply = n, s
                }
            }())
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix : t
        }, r, {
            constructor: o,
            namespace: a,
            widgetName: t,
            widgetBaseClass: i,
            widgetFullName: i
        }), s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
    }, e.widget.extend = function(n) {
        var i = r.call(arguments, 1),
            s = 0,
            o = i.length,
            u, a;
        for (; s < o; s++)
            for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }, e.widget.bridge = function(n, i) {
        var s = i.prototype.widgetFullName || n;
        e.fn[n] = function(o) {
            var u = typeof o == "string",
                a = r.call(arguments, 1),
                f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function() {
                var r, i = e.data(this, s);
                if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
            }) : this.each(function() {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
            }), f
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, r) {
            r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetName, this), e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === r && this.destroy()
                }
            }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, r) {
            var i = n,
                s, o, u;
            if (arguments.length === 0) return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {}, s = n.split("."), n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                    n = s.pop();
                    if (r === t) return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (r === t) return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, n, r) {
            var i, s = this;
            typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                function u() {
                    if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
                    return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                }
                typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^(\w+)\s*(.*)$/),
                    f = a[1] + s.eventNamespace,
                    l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s)
                for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {}, typeof i == "number" && (i = {
                duration: i
            }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && (e.effects.effect[u] || e.uiBackCompat !== !1 && e.effects[u]) ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    })
})(jQuery);
(function(e, t) {
    function h(e, t, n) {
        return [parseInt(e[0], 10) * (l.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (l.test(e[1]) ? n / 100 : 1)]
    }

    function p(t, n) {
        return parseInt(e.css(t, n), 10) || 0
    }
    e.ui = e.ui || {};
    var n, r = Math.max,
        i = Math.abs,
        s = Math.round,
        o = /left|center|right/,
        u = /top|center|bottom/,
        a = /[\+\-]\d+%?/,
        f = /^\w+/,
        l = /%$/,
        c = e.fn.position;
    e.position = {
            scrollbarWidth: function() {
                if (n !== t) return n;
                var r, i, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = s.children()[0];
                return e("body").append(s), r = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, r === i && (i = s[0].clientWidth), s.remove(), n = r - i
            },
            getScrollInfo: function(t) {
                var n = t.isWindow ? "" : t.element.css("overflow-x"),
                    r = t.isWindow ? "" : t.element.css("overflow-y"),
                    i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
                    s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
                return {
                    width: i ? e.position.scrollbarWidth() : 0,
                    height: s ? e.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var n = e(t || window),
                    r = e.isWindow(n[0]);
                return {
                    element: n,
                    isWindow: r,
                    offset: n.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: n.scrollLeft(),
                    scrollTop: n.scrollTop(),
                    width: r ? n.width() : n.outerWidth(),
                    height: r ? n.height() : n.outerHeight()
                }
            }
        }, e.fn.position = function(t) {
            if (!t || !t.of) return c.apply(this, arguments);
            t = e.extend({}, t);
            var n, l, d, v, m, g = e(t.of),
                y = e.position.getWithinInfo(t.within),
                b = e.position.getScrollInfo(y),
                w = g[0],
                E = (t.collision || "flip").split(" "),
                S = {};
            return w.nodeType === 9 ? (l = g.width(), d = g.height(), v = {
                top: 0,
                left: 0
            }) : e.isWindow(w) ? (l = g.width(), d = g.height(), v = {
                top: g.scrollTop(),
                left: g.scrollLeft()
            }) : w.preventDefault ? (t.at = "left top", l = d = 0, v = {
                top: w.pageY,
                left: w.pageX
            }) : (l = g.outerWidth(), d = g.outerHeight(), v = g.offset()), m = e.extend({}, v), e.each(["my", "at"], function() {
                var e = (t[this] || "").split(" "),
                    n, r;
                e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), S[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
            }), E.length === 1 && (E[1] = E[0]), t.at[0] === "right" ? m.left += l : t.at[0] === "center" && (m.left += l / 2), t.at[1] === "bottom" ? m.top += d : t.at[1] === "center" && (m.top += d / 2), n = h(S.at, l, d), m.left += n[0], m.top += n[1], this.each(function() {
                var o, u, a = e(this),
                    f = a.outerWidth(),
                    c = a.outerHeight(),
                    w = p(this, "marginLeft"),
                    x = p(this, "marginTop"),
                    T = f + w + p(this, "marginRight") + b.width,
                    N = c + x + p(this, "marginBottom") + b.height,
                    C = e.extend({}, m),
                    k = h(S.my, a.outerWidth(), a.outerHeight());
                t.my[0] === "right" ? C.left -= f : t.my[0] === "center" && (C.left -= f / 2), t.my[1] === "bottom" ? C.top -= c : t.my[1] === "center" && (C.top -= c / 2), C.left += k[0], C.top += k[1], e.support.offsetFractions || (C.left = s(C.left), C.top = s(C.top)), o = {
                    marginLeft: w,
                    marginTop: x
                }, e.each(["left", "top"], function(r, i) {
                    e.ui.position[E[r]] && e.ui.position[E[r]][i](C, {
                        targetWidth: l,
                        targetHeight: d,
                        elemWidth: f,
                        elemHeight: c,
                        collisionPosition: o,
                        collisionWidth: T,
                        collisionHeight: N,
                        offset: [n[0] + k[0], n[1] + k[1]],
                        my: t.my,
                        at: t.at,
                        within: y,
                        elem: a
                    })
                }), e.fn.bgiframe && a.bgiframe(), t.using && (u = function(e) {
                    var n = v.left - C.left,
                        s = n + l - f,
                        o = v.top - C.top,
                        u = o + d - c,
                        h = {
                            target: {
                                element: g,
                                left: v.left,
                                top: v.top,
                                width: l,
                                height: d
                            },
                            element: {
                                element: a,
                                left: C.left,
                                top: C.top,
                                width: f,
                                height: c
                            },
                            horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                            vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
                        };
                    l < f && i(n + s) < l && (h.horizontal = "center"), d < c && i(o + u) < d && (h.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical", t.using.call(this, e, h)
                }), a.offset(e.extend(C, {
                    using: u
                }))
            })
        }, e.ui.position = {
            fit: {
                left: function(e, t) {
                    var n = t.within,
                        i = n.isWindow ? n.scrollLeft : n.offset.left,
                        s = n.width,
                        o = e.left - t.collisionPosition.marginLeft,
                        u = i - o,
                        a = o + t.collisionWidth - s - i,
                        f;
                    t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
                },
                top: function(e, t) {
                    var n = t.within,
                        i = n.isWindow ? n.scrollTop : n.offset.top,
                        s = t.within.height,
                        o = e.top - t.collisionPosition.marginTop,
                        u = i - o,
                        a = o + t.collisionHeight - s - i,
                        f;
                    t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
                }
            },
            flip: {
                left: function(e, t) {
                    var n = t.within,
                        r = n.offset.left + n.scrollLeft,
                        s = n.width,
                        o = n.isWindow ? n.scrollLeft : n.offset.left,
                        u = e.left - t.collisionPosition.marginLeft,
                        a = u - o,
                        f = u + t.collisionWidth - s - o,
                        l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                        c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
                        h = -2 * t.offset[0],
                        p, d;
                    if (a < 0) {
                        p = e.left + l + c + h + t.collisionWidth - s - r;
                        if (p < 0 || p < i(a)) e.left += l + c + h
                    } else if (f > 0) {
                        d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
                        if (d > 0 || i(d) < f) e.left += l + c + h
                    }
                },
                top: function(e, t) {
                    var n = t.within,
                        r = n.offset.top + n.scrollTop,
                        s = n.height,
                        o = n.isWindow ? n.scrollTop : n.offset.top,
                        u = e.top - t.collisionPosition.marginTop,
                        a = u - o,
                        f = u + t.collisionHeight - s - o,
                        l = t.my[1] === "top",
                        c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                        h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                        p = -2 * t.offset[1],
                        d, v;
                    a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
                }
            },
            flipfit: {
                left: function() {
                    e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var t, n, r, i, s, o = document.getElementsByTagName("body")[0],
                u = document.createElement("div");
            t = document.createElement(o ? "div" : "body"), r = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, o && e.extend(r, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (s in r) t.style[s] = r[s];
            t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && i < 11, t.innerHTML = "", n.removeChild(t)
        }(), e.uiBackCompat !== !1 && function(e) {
            var n = e.fn.position;
            e.fn.position = function(r) {
                if (!r || !r.offset) return n.call(this, r);
                var i = r.offset.split(" "),
                    s = r.at.split(" ");
                return i.length === 1 && (i[1] = i[0]), /^\d/.test(i[0]) && (i[0] = "+" + i[0]), /^\d/.test(i[1]) && (i[1] = "+" + i[1]), s.length === 1 && (/left|center|right/.test(s[0]) ? s[1] = "center" : (s[1] = s[0], s[0] = "center")), n.call(this, e.extend(r, {
                    at: s[0] + i[0] + " " + s[1] + i[1],
                    offset: t
                }))
            }
        }(jQuery)
})(jQuery);
(function(e, t) {
    var n = 0;
    e.widget("ui.autocomplete", {
        version: "1.9.2",
        defaultElement: "<input>",
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var t, n, r;
            this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(i) {
                    if (this.element.prop("readOnly")) {
                        t = !0, r = !0, n = !0;
                        return
                    }
                    t = !1, r = !1, n = !1;
                    var s = e.ui.keyCode;
                    switch (i.keyCode) {
                        case s.PAGE_UP:
                            t = !0, this._move("previousPage", i);
                            break;
                        case s.PAGE_DOWN:
                            t = !0, this._move("nextPage", i);
                            break;
                        case s.UP:
                            t = !0, this._keyEvent("previous", i);
                            break;
                        case s.DOWN:
                            t = !0, this._keyEvent("next", i);
                            break;
                        case s.ENTER:
                        case s.NUMPAD_ENTER:
                            this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));
                            break;
                        case s.TAB:
                            this.menu.active && this.menu.select(i);
                            break;
                        case s.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(i), i.preventDefault());
                            break;
                        default:
                            n = !0, this._searchTimeout(i)
                    }
                },
                keypress: function(r) {
                    if (t) {
                        t = !1, r.preventDefault();
                        return
                    }
                    if (n) return;
                    var i = e.ui.keyCode;
                    switch (r.keyCode) {
                        case i.PAGE_UP:
                            this._move("previousPage", r);
                            break;
                        case i.PAGE_DOWN:
                            this._move("nextPage", r);
                            break;
                        case i.UP:
                            this._keyEvent("previous", r);
                            break;
                        case i.DOWN:
                            this._keyEvent("next", r)
                    }
                },
                input: function(e) {
                    if (r) {
                        r = !1, e.preventDefault();
                        return
                    }
                    this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching), this.close(e), this._change(e)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                input: e(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var n = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(r) {
                            r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close()
                        })
                    })
                },
                menufocus: function(t, n) {
                    if (this.isNewMenu) {
                        this.isNewMenu = !1;
                        if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
                            this.menu.blur(), this.document.one("mousemove", function() {
                                e(t.target).trigger(t.originalEvent)
                            });
                            return
                        }
                    }
                    var r = n.item.data("ui-autocomplete-item") || n.item.data("item.autocomplete");
                    !1 !== this._trigger("focus", t, {
                        item: r
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                },
                menuselect: function(e, t) {
                    var n = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"),
                        r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                        this.previous = r, this.selectedItem = n
                    })), !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), e.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t), e === "source" && this._initSource(), e === "appendTo" && this.menu.element.appendTo(this.document.find(t || "body")[0]), e === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _isMultiLine: function() {
            return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
        },
        _initSource: function() {
            var t, n, r = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, r) {
                r(e.ui.autocomplete.filter(t, n.term))
            }) : typeof this.options.source == "string" ? (n = this.options.source, this.source = function(t, i) {
                r.xhr && r.xhr.abort(), r.xhr = e.ajax({
                    url: n,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        i(e)
                    },
                    error: function() {
                        i([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            e = e != null ? e : this._value(), this.term = this._value();
            if (e.length < this.options.minLength) return this.close(t);
            if (this._trigger("search", t) === !1) return;
            return this._search(e)
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var e = this,
                t = ++n;
            return function(r) {
                t === n && e.__response(r), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n, t), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, n) {
            var r = this;
            e.each(n, function(e, n) {
                r._renderItemData(t, n)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, n) {
            return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
        },
        _move: function(e, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
                this._value(this.term), this.menu.blur();
                return
            }
            this.menu[e](t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e, t), t.preventDefault()
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t, function(e) {
                return r.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) return;
            e && e.length ? t = this.options.messages.results(e.length) : t = this.options.messages.noResults, this.liveRegion.text(t)
        }
    })
})(jQuery);
(function(e, t) {
    var n = !1;
    e.widget("ui.menu", {
        version: "1.9.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, e.proxy(function(e) {
                this.options.disabled && e.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-state-disabled > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(t) {
                    var r = e(t.target).closest(".ui-menu-item");
                    !n && r.not(".ui-state-disabled").length && (n = !0, this.select(t), r.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    var n = e(t.currentTarget);
                    n.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var n = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(e, n)
                },
                blur: function(t) {
                    this._delay(function() {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(t) {
                    e(t.target).closest(".ui-menu").length || this.collapseAll(t), n = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(t) {
            function a(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var n, r, i, s, o, u = !0;
            switch (t.keyCode) {
                case e.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case e.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case e.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case e.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case e.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case e.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case e.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case e.ui.keyCode.ENTER:
                case e.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case e.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    u = !1, r = this.previousFilter || "", i = String.fromCharCode(t.keyCode), s = !1, clearTimeout(this.filterTimer), i === r ? s = !0 : i = r + i, o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return o.test(e(this).children("a").text())
                    }), n = s && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n, n.length || (i = String.fromCharCode(t.keyCode), o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return o.test(e(this).children("a").text())
                    })), n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = i, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            u && t.preventDefault()
        },
        _activate: function(e) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var t, n = this.options.icons.submenu,
                r = this.element.find(this.options.menus);
            r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = e(this),
                    r = t.prev("a"),
                    i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                r.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", r.attr("id"))
            }), t = r.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), t.children(":not(.ui-menu-item)").each(function() {
                var t = e(this);
                /[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
            }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        focus: function(e, t) {
            var n, r;
            this.blur(e, e && e.type === "focus"), this._scrollIntoView(t), this.active = t.first(), r = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && e.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), n = t.children(".ui-menu"), n.length && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var n, r, i, s, o, u;
            this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.height(), i < 0 ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer);
            if (!this.active) return;
            this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                item: this.active
            })
        },
        _startOpening: function(e) {
            clearTimeout(this.timer);
            if (e.attr("aria-hidden") !== "true") return;
            this.timer = this._delay(function() {
                this._close(), this._open(e)
            }, this.delay)
        },
        _open: function(t) {
            var n = e.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
        },
        collapseAll: function(t, n) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
            }, this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, n) {
            var r;
            this.active && (e === "first" || e === "last" ? r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r = this.active[e + "All"](".ui-menu-item").eq(0));
            if (!r || !r.length || !this.active) r = this.activeMenu.children(".ui-menu-item")[t]();
            this.focus(n, r)
        },
        nextPage: function(t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isLastItem()) return;
            this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return n = e(this), n.offset().top - r - i < 0
            }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())
        },
        previousPage: function(t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isFirstItem()) return;
            this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return n = e(this), n.offset().top - r + i > 0
            }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var n = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
        }
    })
})(jQuery);


/*! JQUERY.TOUCHSWIPE */
(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a);
    } else {
        a(jQuery);
    }
}(function(e) {
    var o = "left",
        n = "right",
        d = "up",
        v = "down",
        c = "in",
        w = "out",
        l = "none",
        r = "auto",
        k = "swipe",
        s = "pinch",
        x = "tap",
        i = "doubletap",
        b = "longtap",
        A = "horizontal",
        t = "vertical",
        h = "all",
        q = 10,
        f = "start",
        j = "move",
        g = "end",
        p = "cancel",
        a = "ontouchstart" in window,
        y = "TouchSwipe";
    var m = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe,object"
    };
    e.fn.swipe = function(D) {
        var C = e(this),
            B = C.data(y);
        if (B && typeof D === "string") {
            if (B[D]) {
                return B[D].apply(this, Array.prototype.slice.call(arguments, 1));
            } else {
                e.error("Method " + D + " does not exist on jQuery.swipe");
            }
        } else {
            if (!B && (typeof D === "object" || !D)) {
                return u.apply(this, arguments);
            }
        }
        return C;
    };
    e.fn.swipe.defaults = m;
    e.fn.swipe.phases = {
        PHASE_START: f,
        PHASE_MOVE: j,
        PHASE_END: g,
        PHASE_CANCEL: p
    };
    e.fn.swipe.directions = {
        LEFT: o,
        RIGHT: n,
        UP: d,
        DOWN: v,
        IN: c,
        OUT: w
    };
    e.fn.swipe.pageScroll = {
        NONE: l,
        HORIZONTAL: A,
        VERTICAL: t,
        AUTO: r
    };
    e.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: h
    };

    function u(B) {
        if (B && (B.allowPageScroll === undefined && (B.swipe !== undefined || B.swipeStatus !== undefined))) {
            B.allowPageScroll = l;
        }
        if (B.click !== undefined && B.tap === undefined) {
            B.tap = B.click;
        }
        if (!B) {
            B = {};
        }
        B = e.extend({}, e.fn.swipe.defaults, B);
        return this.each(function() {
            var D = e(this);
            var C = D.data(y);
            if (!C) {
                C = new z(this, B);
                D.data(y, C);
            }
        });
    }

    function z(a0, aq) {
        var av = (a || !aq.fallbackToMouseEvents),
            G = av ? "touchstart" : "mousedown",
            au = av ? "touchmove" : "mousemove",
            R = av ? "touchend" : "mouseup",
            P = av ? null : "mouseleave",
            az = "touchcancel";
        var ac = 0,
            aL = null,
            Y = 0,
            aX = 0,
            aV = 0,
            D = 1,
            am = 0,
            aF = 0,
            J = null;
        var aN = e(a0);
        var W = "start";
        var T = 0;
        var aM = null;
        var Q = 0,
            aY = 0,
            a1 = 0,
            aa = 0,
            K = 0;
        var aS = null;
        try {
            aN.bind(G, aJ);
            aN.bind(az, a5);
        } catch (ag) {
            e.error("events not supported " + G + "," + az + " on jQuery.swipe");
        }
        this.enable = function() {
            aN.bind(G, aJ);
            aN.bind(az, a5);
            return aN;
        };
        this.disable = function() {
            aG();
            return aN;
        };
        this.destroy = function() {
            aG();
            aN.data(y, null);
            return aN;
        };
        this.option = function(a8, a7) {
            if (aq[a8] !== undefined) {
                if (a7 === undefined) {
                    return aq[a8];
                } else {
                    aq[a8] = a7;
                }
            } else {
                e.error("Option " + a8 + " does not exist on jQuery.swipe.options");
            }
            return null;
        };

        function aJ(a9) {
            if (ax()) {
                return;
            }
            if (e(a9.target).closest(aq.excludedElements, aN).length > 0) {
                return;
            }
            var ba = a9.originalEvent ? a9.originalEvent : a9;
            var a8, a7 = a ? ba.touches[0] : ba;
            W = f;
            if (a) {
                T = ba.touches.length;
            } else {
                a9.preventDefault();
            }
            ac = 0;
            aL = null;
            aF = null;
            Y = 0;
            aX = 0;
            aV = 0;
            D = 1;
            am = 0;
            aM = af();
            J = X();
            O();
            if (!a || (T === aq.fingers || aq.fingers === h) || aT()) {
                ae(0, a7);
                Q = ao();
                if (T == 2) {
                    ae(1, ba.touches[1]);
                    aX = aV = ap(aM[0].start, aM[1].start);
                }
                if (aq.swipeStatus || aq.pinchStatus) {
                    a8 = L(ba, W);
                }
            } else {
                a8 = false;
            } if (a8 === false) {
                W = p;
                L(ba, W);
                return a8;
            } else {
                ak(true);
            }
            return null;
        }

        function aZ(ba) {
            var bd = ba.originalEvent ? ba.originalEvent : ba;
            if (W === g || W === p || ai()) {
                return;
            }
            var a9, a8 = a ? bd.touches[0] : bd;
            var bb = aD(a8);
            aY = ao();
            if (a) {
                T = bd.touches.length;
            }
            W = j;
            if (T == 2) {
                if (aX == 0) {
                    ae(1, bd.touches[1]);
                    aX = aV = ap(aM[0].start, aM[1].start);
                } else {
                    aD(bd.touches[1]);
                    aV = ap(aM[0].end, aM[1].end);
                    aF = an(aM[0].end, aM[1].end);
                }
                D = a3(aX, aV);
                am = Math.abs(aX - aV);
            }
            if ((T === aq.fingers || aq.fingers === h) || !a || aT()) {
                aL = aH(bb.start, bb.end);
                ah(ba, aL);
                ac = aO(bb.start, bb.end);
                Y = aI();
                aE(aL, ac);
                if (aq.swipeStatus || aq.pinchStatus) {
                    a9 = L(bd, W);
                }
                if (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave) {
                    var a7 = true;
                    if (aq.triggerOnTouchLeave) {
                        var bc = aU(this);
                        a7 = B(bb.end, bc);
                    }
                    if (!aq.triggerOnTouchEnd && a7) {
                        W = ay(j);
                    } else {
                        if (aq.triggerOnTouchLeave && !a7) {
                            W = ay(g);
                        }
                    } if (W == p || W == g) {
                        L(bd, W);
                    }
                }
            } else {
                W = p;
                L(bd, W);
            } if (a9 === false) {
                W = p;
                L(bd, W);
            }
        }

        function I(a7) {
            var a8 = a7.originalEvent;
            if (a) {
                if (a8.touches.length > 0) {
                    C();
                    return true;
                }
            }
            if (ai()) {
                T = aa;
            }
            a7.preventDefault();
            aY = ao();
            Y = aI();
            if (a6()) {
                W = p;
                L(a8, W);
            } else {
                if (aq.triggerOnTouchEnd || (aq.triggerOnTouchEnd == false && W === j)) {
                    W = g;
                    L(a8, W);
                } else {
                    if (!aq.triggerOnTouchEnd && a2()) {
                        W = g;
                        aB(a8, W, x);
                    } else {
                        if (W === j) {
                            W = p;
                            L(a8, W);
                        }
                    }
                }
            }
            ak(false);
            return null;
        }

        function a5() {
            T = 0;
            aY = 0;
            Q = 0;
            aX = 0;
            aV = 0;
            D = 1;
            O();
            ak(false);
        }

        function H(a7) {
            var a8 = a7.originalEvent;
            if (aq.triggerOnTouchLeave) {
                W = ay(g);
                L(a8, W);
            }
        }

        function aG() {
            aN.unbind(G, aJ);
            aN.unbind(az, a5);
            aN.unbind(au, aZ);
            aN.unbind(R, I);
            if (P) {
                aN.unbind(P, H);
            }
            ak(false);
        }

        function ay(bb) {
            var ba = bb;
            var a9 = aw();
            var a8 = aj();
            var a7 = a6();
            if (!a9 || a7) {
                ba = p;
            } else {
                if (a8 && bb == j && (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave)) {
                    ba = g;
                } else {
                    if (!a8 && bb == g && aq.triggerOnTouchLeave) {
                        ba = p;
                    }
                }
            }
            return ba;
        }

        function L(a9, a7) {
            var a8 = undefined;
            if (F() || S()) {
                a8 = aB(a9, a7, k);
            } else {
                if ((M() || aT()) && a8 !== false) {
                    a8 = aB(a9, a7, s);
                }
            } if (aC() && a8 !== false) {
                a8 = aB(a9, a7, i);
            } else {
                if (al() && a8 !== false) {
                    a8 = aB(a9, a7, b);
                } else {
                    if (ad() && a8 !== false) {
                        a8 = aB(a9, a7, x);
                    }
                }
            } if (a7 === p) {
                a5(a9);
            }
            if (a7 === g) {
                if (a) {
                    if (a9.touches.length == 0) {
                        a5(a9);
                    }
                } else {
                    a5(a9);
                }
            }
            return a8;
        }

        function aB(ba, a7, a9) {
            var a8 = undefined;
            if (a9 == k) {
                aN.trigger("swipeStatus", [a7, aL || null, ac || 0, Y || 0, T]);
                if (aq.swipeStatus) {
                    a8 = aq.swipeStatus.call(aN, ba, a7, aL || null, ac || 0, Y || 0, T);
                    if (a8 === false) {
                        return false;
                    }
                }
                if (a7 == g && aR()) {
                    aN.trigger("swipe", [aL, ac, Y, T]);
                    if (aq.swipe) {
                        a8 = aq.swipe.call(aN, ba, aL, ac, Y, T);
                        if (a8 === false) {
                            return false;
                        }
                    }
                    switch (aL) {
                        case o:
                            aN.trigger("swipeLeft", [aL, ac, Y, T]);
                            if (aq.swipeLeft) {
                                a8 = aq.swipeLeft.call(aN, ba, aL, ac, Y, T);
                            }
                            break;
                        case n:
                            aN.trigger("swipeRight", [aL, ac, Y, T]);
                            if (aq.swipeRight) {
                                a8 = aq.swipeRight.call(aN, ba, aL, ac, Y, T);
                            }
                            break;
                        case d:
                            aN.trigger("swipeUp", [aL, ac, Y, T]);
                            if (aq.swipeUp) {
                                a8 = aq.swipeUp.call(aN, ba, aL, ac, Y, T);
                            }
                            break;
                        case v:
                            aN.trigger("swipeDown", [aL, ac, Y, T]);
                            if (aq.swipeDown) {
                                a8 = aq.swipeDown.call(aN, ba, aL, ac, Y, T);
                            }
                            break;
                    }
                }
            }
            if (a9 == s) {
                aN.trigger("pinchStatus", [a7, aF || null, am || 0, Y || 0, T, D]);
                if (aq.pinchStatus) {
                    a8 = aq.pinchStatus.call(aN, ba, a7, aF || null, am || 0, Y || 0, T, D);
                    if (a8 === false) {
                        return false;
                    }
                }
                if (a7 == g && a4()) {
                    switch (aF) {
                        case c:
                            aN.trigger("pinchIn", [aF || null, am || 0, Y || 0, T, D]);
                            if (aq.pinchIn) {
                                a8 = aq.pinchIn.call(aN, ba, aF || null, am || 0, Y || 0, T, D);
                            }
                            break;
                        case w:
                            aN.trigger("pinchOut", [aF || null, am || 0, Y || 0, T, D]);
                            if (aq.pinchOut) {
                                a8 = aq.pinchOut.call(aN, ba, aF || null, am || 0, Y || 0, T, D);
                            }
                            break;
                    }
                }
            }
            if (a9 == x) {
                if (a7 === p || a7 === g) {
                    clearTimeout(aS);
                    if (V() && !E()) {
                        K = ao();
                        aS = setTimeout(e.proxy(function() {
                            K = null;
                            aN.trigger("tap", [ba.target]);
                            if (aq.tap) {
                                a8 = aq.tap.call(aN, ba, ba.target);
                            }
                        }, this), aq.doubleTapThreshold);
                    } else {
                        K = null;
                        aN.trigger("tap", [ba.target]);
                        if (aq.tap) {
                            a8 = aq.tap.call(aN, ba, ba.target);
                        }
                    }
                }
            } else {
                if (a9 == i) {
                    if (a7 === p || a7 === g) {
                        clearTimeout(aS);
                        K = null;
                        aN.trigger("doubletap", [ba.target]);
                        if (aq.doubleTap) {
                            a8 = aq.doubleTap.call(aN, ba, ba.target);
                        }
                    }
                } else {
                    if (a9 == b) {
                        if (a7 === p || a7 === g) {
                            clearTimeout(aS);
                            K = null;
                            aN.trigger("longtap", [ba.target]);
                            if (aq.longTap) {
                                a8 = aq.longTap.call(aN, ba, ba.target);
                            }
                        }
                    }
                }
            }
            return a8;
        }

        function aj() {
            var a7 = true;
            if (aq.threshold !== null) {
                a7 = ac >= aq.threshold;
            }
            return a7;
        }

        function a6() {
            var a7 = false;
            if (aq.cancelThreshold !== null && aL !== null) {
                a7 = (aP(aL) - ac) >= aq.cancelThreshold;
            }
            return a7;
        }

        function ab() {
            if (aq.pinchThreshold !== null) {
                return am >= aq.pinchThreshold;
            }
            return true;
        }

        function aw() {
            var a7;
            if (aq.maxTimeThreshold) {
                if (Y >= aq.maxTimeThreshold) {
                    a7 = false;
                } else {
                    a7 = true;
                }
            } else {
                a7 = true;
            }
            return a7;
        }

        function ah(a7, a8) {
            if (aq.allowPageScroll === l || aT()) {
                a7.preventDefault();
            } else {
                var a9 = aq.allowPageScroll === r;
                switch (a8) {
                    case o:
                        if ((aq.swipeLeft && a9) || (!a9 && aq.allowPageScroll != A)) {
                            a7.preventDefault();
                        }
                        break;
                    case n:
                        if ((aq.swipeRight && a9) || (!a9 && aq.allowPageScroll != A)) {
                            a7.preventDefault();
                        }
                        break;
                    case d:
                        if ((aq.swipeUp && a9) || (!a9 && aq.allowPageScroll != t)) {
                            a7.preventDefault();
                        }
                        break;
                    case v:
                        if ((aq.swipeDown && a9) || (!a9 && aq.allowPageScroll != t)) {
                            a7.preventDefault();
                        }
                        break;
                }
            }
        }

        function a4() {
            var a8 = aK();
            var a7 = U();
            var a9 = ab();
            return a8 && a7 && a9;
        }

        function aT() {
            return !!(aq.pinchStatus || aq.pinchIn || aq.pinchOut);
        }

        function M() {
            return !!(a4() && aT());
        }

        function aR() {
            var ba = aw();
            var bc = aj();
            var a9 = aK();
            var a7 = U();
            var a8 = a6();
            var bb = !a8 && a7 && a9 && bc && ba;
            return bb;
        }

        function S() {
            return !!(aq.swipe || aq.swipeStatus || aq.swipeLeft || aq.swipeRight || aq.swipeUp || aq.swipeDown);
        }

        function F() {
            return !!(aR() && S());
        }

        function aK() {
            return ((T === aq.fingers || aq.fingers === h) || !a);
        }

        function U() {
            return aM[0].end.x !== 0;
        }

        function a2() {
            return !!(aq.tap);
        }

        function V() {
            return !!(aq.doubleTap);
        }

        function aQ() {
            return !!(aq.longTap);
        }

        function N() {
            if (K == null) {
                return false;
            }
            var a7 = ao();
            return (V() && ((a7 - K) <= aq.doubleTapThreshold));
        }

        function E() {
            return N();
        }

        function at() {
            return ((T === 1 || !a) && (isNaN(ac) || ac === 0));
        }

        function aW() {
            return ((Y > aq.longTapThreshold) && (ac < q));
        }

        function ad() {
            return !!(at() && a2());
        }

        function aC() {
            return !!(N() && V());
        }

        function al() {
            return !!(aW() && aQ());
        }

        function C() {
            a1 = ao();
            aa = event.touches.length + 1;
        }

        function O() {
            a1 = 0;
            aa = 0;
        }

        function ai() {
            var a7 = false;
            if (a1) {
                var a8 = ao() - a1;
                if (a8 <= aq.fingerReleaseThreshold) {
                    a7 = true;
                }
            }
            return a7;
        }

        function ax() {
            return !!(aN.data(y + "_intouch") === true);
        }

        function ak(a7) {
            if (a7 === true) {
                aN.bind(au, aZ);
                aN.bind(R, I);
                if (P) {
                    aN.bind(P, H);
                }
            } else {
                aN.unbind(au, aZ, false);
                aN.unbind(R, I, false);
                if (P) {
                    aN.unbind(P, H, false);
                }
            }
            aN.data(y + "_intouch", a7 === true);
        }

        function ae(a8, a7) {
            var a9 = a7.identifier !== undefined ? a7.identifier : 0;
            aM[a8].identifier = a9;
            aM[a8].start.x = aM[a8].end.x = a7.pageX || a7.clientX;
            aM[a8].start.y = aM[a8].end.y = a7.pageY || a7.clientY;
            return aM[a8];
        }

        function aD(a7) {
            var a9 = a7.identifier !== undefined ? a7.identifier : 0;
            var a8 = Z(a9);
            a8.end.x = a7.pageX || a7.clientX;
            a8.end.y = a7.pageY || a7.clientY;
            return a8;
        }

        function Z(a8) {
            for (var a7 = 0; a7 < aM.length; a7++) {
                if (aM[a7].identifier == a8) {
                    return aM[a7];
                }
            }
        }

        function af() {
            var a7 = [];
            for (var a8 = 0; a8 <= 5; a8++) {
                a7.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
            }
            return a7;
        }

        function aE(a7, a8) {
            a8 = Math.max(a8, aP(a7));
            J[a7].distance = a8;
        }

        function aP(a7) {
            if (J[a7]) {
                return J[a7].distance;
            }
            return undefined;
        }

        function X() {
            var a7 = {};
            a7[o] = ar(o);
            a7[n] = ar(n);
            a7[d] = ar(d);
            a7[v] = ar(v);
            return a7;
        }

        function ar(a7) {
            return {
                direction: a7,
                distance: 0
            };
        }

        function aI() {
            return aY - Q;
        }

        function ap(ba, a9) {
            var a8 = Math.abs(ba.x - a9.x);
            var a7 = Math.abs(ba.y - a9.y);
            return Math.round(Math.sqrt(a8 * a8 + a7 * a7));
        }

        function a3(a7, a8) {
            var a9 = (a8 / a7) * 1;
            return a9.toFixed(2);
        }

        function an() {
            if (D < 1) {
                return w;
            } else {
                return c;
            }
        }

        function aO(a8, a7) {
            return Math.round(Math.sqrt(Math.pow(a7.x - a8.x, 2) + Math.pow(a7.y - a8.y, 2)));
        }

        function aA(ba, a8) {
            var a7 = ba.x - a8.x;
            var bc = a8.y - ba.y;
            var a9 = Math.atan2(bc, a7);
            var bb = Math.round(a9 * 180 / Math.PI);
            if (bb < 0) {
                bb = 360 - Math.abs(bb);
            }
            return bb;
        }

        function aH(a8, a7) {
            var a9 = aA(a8, a7);
            if ((a9 <= 45) && (a9 >= 0)) {
                return o;
            } else {
                if ((a9 <= 360) && (a9 >= 315)) {
                    return o;
                } else {
                    if ((a9 >= 135) && (a9 <= 225)) {
                        return n;
                    } else {
                        if ((a9 > 45) && (a9 < 135)) {
                            return v;
                        } else {
                            return d;
                        }
                    }
                }
            }
        }

        function ao() {
            var a7 = new Date();
            return a7.getTime();
        }

        function aU(a7) {
            a7 = e(a7);
            var a9 = a7.offset();
            var a8 = {
                left: a9.left,
                right: a9.left + a7.outerWidth(),
                top: a9.top,
                bottom: a9.top + a7.outerHeight()
            };
            return a8;
        }

        function B(a7, a8) {
            return (a7.x > a8.left && a7.x < a8.right && a7.y > a8.top && a7.y < a8.bottom);
        }
    }
}));
(function() {
    var a = [].indexOf || function(c) {
            for (var d = 0, f = this.length; d < f; d++) {
                if (d in this && this[d] === c) {
                    return d;
                }
            }
            return -1;
        },
        b = [].slice;
    (function(c, d) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(e) {
                return d(e, c);
            });
        } else {
            return d(c.jQuery, c);
        }
    })(this, function(B, x) {
        var E, A, D, t, H, q, K, J, F, I, z, e, k, j, G, C;
        E = B(x);
        J = a.call(x, "ontouchstart") >= 0;
        t = {
            horizontal: {},
            vertical: {}
        };
        H = 1;
        K = {};
        q = "waypoints-context-id";
        z = "resize.waypoints";
        e = "scroll.waypoints";
        k = 1;
        j = "waypoints-waypoint-ids";
        G = "waypoint";
        C = "waypoints";
        A = function() {
            function c(d) {
                var f = this;
                this.$element = d;
                this.element = d[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + H++;
                this.oldScroll = {
                    x: d.scrollLeft(),
                    y: d.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                d.data(q, this.id);
                K[this.id] = this;
                d.bind(e, function() {
                    var g;
                    if (!(f.didScroll || J)) {
                        f.didScroll = true;
                        g = function() {
                            f.doScroll();
                            return f.didScroll = false;
                        };
                        return x.setTimeout(g, B[C].settings.scrollThrottle);
                    }
                });
                d.bind(z, function() {
                    var g;
                    if (!f.didResize) {
                        f.didResize = true;
                        g = function() {
                            B[C]("refresh");
                            return f.didResize = false;
                        };
                        return x.setTimeout(g, B[C].settings.resizeThrottle);
                    }
                });
            }
            c.prototype.doScroll = function() {
                var d, f = this;
                d = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (J && (!d.vertical.oldScroll || !d.vertical.newScroll)) {
                    B[C]("refresh");
                }
                B.each(d, function(m, n) {
                    var h, p, g;
                    g = [];
                    p = n.newScroll > n.oldScroll;
                    h = p ? n.forward : n.backward;
                    B.each(f.waypoints[m], function(o, r) {
                        var s, l;
                        if (n.oldScroll < (s = r.offset) && s <= n.newScroll) {
                            return g.push(r);
                        } else {
                            if (n.newScroll < (l = r.offset) && l <= n.oldScroll) {
                                return g.push(r);
                            }
                        }
                    });
                    g.sort(function(i, l) {
                        return i.offset - l.offset;
                    });
                    if (!p) {
                        g.reverse();
                    }
                    return B.each(g, function(i, l) {
                        if (l.options.continuous || i === g.length - 1) {
                            return l.trigger([h]);
                        }
                    });
                });
                return this.oldScroll = {
                    x: d.horizontal.newScroll,
                    y: d.vertical.newScroll
                };
            };
            c.prototype.refresh = function() {
                var f, h, g, d = this;
                g = B.isWindow(this.element);
                h = this.$element.offset();
                this.doScroll();
                f = {
                    horizontal: {
                        contextOffset: g ? 0 : h.left,
                        contextScroll: g ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: g ? 0 : h.top,
                        contextScroll: g ? 0 : this.oldScroll.y,
                        contextDimension: g ? B[C]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return B.each(f, function(i, l) {
                    return B.each(d.waypoints[i], function(p, v) {
                        var n, y, m, u, w;
                        n = v.options.offset;
                        m = v.offset;
                        y = B.isWindow(v.element) ? 0 : v.$element.offset()[l.offsetProp];
                        if (B.isFunction(n)) {
                            n = n.apply(v.element);
                        } else {
                            if (typeof n === "string") {
                                n = parseFloat(n);
                                if (v.options.offset.indexOf("%") > -1) {
                                    n = Math.ceil(l.contextDimension * n / 100);
                                }
                            }
                        }
                        v.offset = y - l.contextOffset + l.contextScroll - n;
                        if (v.options.onlyOnScroll && m != null || !v.enabled) {
                            return;
                        }
                        if (m !== null && m < (u = l.oldScroll) && u <= v.offset) {
                            return v.trigger([l.backward]);
                        } else {
                            if (m !== null && m > (w = l.oldScroll) && w >= v.offset) {
                                return v.trigger([l.forward]);
                            } else {
                                if (m === null && l.oldScroll >= v.offset) {
                                    return v.trigger([l.forward]);
                                }
                            }
                        }
                    });
                });
            };
            c.prototype.checkEmpty = function() {
                if (B.isEmptyObject(this.waypoints.horizontal) && B.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([z, e].join(" "));
                    return delete K[this.id];
                }
            };
            return c;
        }();
        D = function() {
            function c(f, h, g) {
                var d, l;
                g = B.extend({}, B.fn[G].defaults, g);
                if (g.offset === "bottom-in-view") {
                    g.offset = function() {
                        var i;
                        i = B[C]("viewportHeight");
                        if (!B.isWindow(h.element)) {
                            i = h.$element.height();
                        }
                        return i - B(this).outerHeight();
                    };
                }
                this.$element = f;
                this.element = f[0];
                this.axis = g.horizontal ? "horizontal" : "vertical";
                this.callback = g.handler;
                this.context = h;
                this.enabled = g.enabled;
                this.id = "waypoints" + k++;
                this.offset = null;
                this.options = g;
                h.waypoints[this.axis][this.id] = this;
                t[this.axis][this.id] = this;
                d = (l = f.data(j)) != null ? l : [];
                d.push(this.id);
                f.data(j, d);
            }
            c.prototype.trigger = function(d) {
                if (!this.enabled) {
                    return;
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, d);
                }
                if (this.options.triggerOnce) {
                    return this.destroy();
                }
            };
            c.prototype.disable = function() {
                return this.enabled = false;
            };
            c.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true;
            };
            c.prototype.destroy = function() {
                delete t[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty();
            };
            c.getWaypointsByElement = function(d) {
                var g, f;
                f = B(d).data(j);
                if (!f) {
                    return [];
                }
                g = B.extend({}, t.horizontal, t.vertical);
                return B.map(f, function(h) {
                    return g[h];
                });
            };
            return c;
        }();
        I = {
            init: function(c, f) {
                var d;
                if (f == null) {
                    f = {};
                }
                if ((d = f.handler) == null) {
                    f.handler = c;
                }
                this.each(function() {
                    var h, m, g, l;
                    h = B(this);
                    g = (l = f.context) != null ? l : B.fn[G].defaults.context;
                    if (!B.isWindow(g)) {
                        g = h.closest(g);
                    }
                    g = B(g);
                    m = K[g.data(q)];
                    if (!m) {
                        m = new A(g);
                    }
                    return new D(h, m, f);
                });
                B[C]("refresh");
                return this;
            },
            disable: function() {
                return I._invoke(this, "disable");
            },
            enable: function() {
                return I._invoke(this, "enable");
            },
            destroy: function() {
                return I._invoke(this, "destroy");
            },
            prev: function(c, d) {
                return I._traverse.call(this, c, d, function(f, g, h) {
                    if (g > 0) {
                        return f.push(h[g - 1]);
                    }
                });
            },
            next: function(c, d) {
                return I._traverse.call(this, c, d, function(f, g, h) {
                    if (g < h.length - 1) {
                        return f.push(h[g + 1]);
                    }
                });
            },
            _traverse: function(f, g, d) {
                var h, c;
                if (f == null) {
                    f = "vertical";
                }
                if (g == null) {
                    g = x;
                }
                c = F.aggregate(g);
                h = [];
                this.each(function() {
                    var i;
                    i = B.inArray(this, c[f]);
                    return d(h, i, c[f]);
                });
                return this.pushStack(h);
            },
            _invoke: function(c, d) {
                c.each(function() {
                    var f;
                    f = D.getWaypointsByElement(this);
                    return B.each(f, function(g, h) {
                        h[d]();
                        return true;
                    });
                });
                return this;
            }
        };
        B.fn[G] = function() {
            var c, d;
            d = arguments[0], c = 2 <= arguments.length ? b.call(arguments, 1) : [];
            if (I[d]) {
                return I[d].apply(this, c);
            } else {
                if (B.isFunction(d)) {
                    return I.init.apply(this, arguments);
                } else {
                    if (B.isPlainObject(d)) {
                        return I.init.apply(this, [null, d]);
                    } else {
                        if (!d) {
                            return B.error("jQuery Waypoints needs a callback function or handler option.");
                        } else {
                            return B.error("The " + d + " method does not exist in jQuery Waypoints.");
                        }
                    }
                }
            }
        };
        B.fn[G].defaults = {
            context: x,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        F = {
            refresh: function() {
                return B.each(K, function(c, d) {
                    return d.refresh();
                });
            },
            viewportHeight: function() {
                var c;
                return (c = x.innerHeight) != null ? c : E.height();
            },
            aggregate: function(d) {
                var g, f, c;
                g = t;
                if (d) {
                    g = (c = K[B(d).data(q)]) != null ? c.waypoints : void 0;
                }
                if (!g) {
                    return [];
                }
                f = {
                    horizontal: [],
                    vertical: []
                };
                B.each(f, function(l, h) {
                    B.each(g[l], function(i, m) {
                        return h.push(m);
                    });
                    h.sort(function(i, m) {
                        return i.offset - m.offset;
                    });
                    f[l] = B.map(h, function(i) {
                        return i.element;
                    });
                    return f[l] = B.unique(f[l]);
                });
                return f;
            },
            above: function(c) {
                if (c == null) {
                    c = x;
                }
                return F._filter(c, "vertical", function(d, f) {
                    return f.offset <= d.oldScroll.y;
                });
            },
            below: function(c) {
                if (c == null) {
                    c = x;
                }
                return F._filter(c, "vertical", function(d, f) {
                    return f.offset > d.oldScroll.y;
                });
            },
            left: function(c) {
                if (c == null) {
                    c = x;
                }
                return F._filter(c, "horizontal", function(d, f) {
                    return f.offset <= d.oldScroll.x;
                });
            },
            right: function(c) {
                if (c == null) {
                    c = x;
                }
                return F._filter(c, "horizontal", function(d, f) {
                    return f.offset > d.oldScroll.x;
                });
            },
            enable: function() {
                return F._invoke("enable");
            },
            disable: function() {
                return F._invoke("disable");
            },
            destroy: function() {
                return F._invoke("destroy");
            },
            extendFn: function(c, d) {
                return I[c] = d;
            },
            _invoke: function(c) {
                var d;
                d = B.extend({}, t.vertical, t.horizontal);
                return B.each(d, function(f, g) {
                    g[c]();
                    return true;
                });
            },
            _filter: function(d, g, f) {
                var c, h;
                c = K[B(d).data(q)];
                if (!c) {
                    return [];
                }
                h = [];
                B.each(c.waypoints[g], function(i, l) {
                    if (f(c, l)) {
                        return h.push(l);
                    }
                });
                h.sort(function(i, l) {
                    return i.offset - l.offset;
                });
                return B.map(h, function(i) {
                    return i.element;
                });
            }
        };
        B[C] = function() {
            var c, d;
            d = arguments[0], c = 2 <= arguments.length ? b.call(arguments, 1) : [];
            if (F[d]) {
                return F[d].apply(null, c);
            } else {
                return F.aggregate.call(null, d);
            }
        };
        B[C].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return E.load(function() {
            return B[C]("refresh");
        });
    });
}).call(this);

/*! U01 */
jQuery(document).ready(function(d) {
    if (document.getElementById("u01")) {
       
        var e = window.location.host;
       
        var b = (d("div#u01").attr("data-menusrc") != "") ? d("div#u01").attr("data-menusrc") : "/cors/menucontent.html";
        d.ajax({
            url: b,
            type: "GET",
            contentType: "text/html; charset=UTF-8",
            crossDomain: false,
            success: function(h) {
                h = h.replace(/<img([^>]+)src=/g, "<img$1data-imgpath=");
                d("ul.u01nav").children("li").each(function() {
                    var i = d("#" + d(this).find("a").attr("href").split("#")[1], h);
                    d(this).find("a").attr("href", d(this).find("a").attr("href").split("#")[0]);
                    i.find("h2").remove();
                    i.hide();
                    d(this).append(i);
                });
                d("ul.u01navtools").children("li").each(function() {
                    var i = d(h).find("#" + d(this).find("a").attr("href").split("#")[1]);
                    if (d(this).find("a").attr("href").indexOf(b) > -1) {
                        d(this).find("a").attr("href", d(this).find("a").attr("href").replace(b, ""));
                        d(this).find("a").bind("click", function(j) {
                            j.preventDefault();
                        });
                    } else {
                        d(this).find("a").attr("href", d(this).find("a").attr("href").split("#")[0]);
                    }
                    i.find("h2").remove();
                    d(this).append(i);
                });
            },
            error: function(h) {
                d("ul.u01nav").addClass("u01error");
            }
        });
        d(".u01mmenu a").on("click", function(l) {
            l.preventDefault();
            var h = d("#u01 .u01active");
            var k = d(".u01navtools");
            var m = d(this).parent("div").siblings("ul.u01nav");
            var i = d(this).parent("div");
            var j = d(".u01logo + .u01pfile");
            d(k).toggleClass("u01active");
            d(m).toggleClass("u01active");
            d(i).toggleClass("u01active");
            d(j).toggleClass("u01active");
            d(h).not(k).not(m).not(i).not(j).removeClass("u01active");
        });
        d(window).resize(function() {
            if ((d(".u01mmenu").css("display") == "none") && (d("body").hasClass("f11"))) {
                d(".u01navtools").removeClass("u01active");
                d("ul.u01nav").removeClass("u01active");
                d(".u01mmenu a").parent("div").removeClass("u01active");
                d(".u01logo + .u01pfile").removeClass("u01active");
               
            }
        });
       
    }
});

/*! HP07 */
jQuery(document).ready(function(a) {
    a("div.hp07v0").each(function(e) {
        var c = a(this);
        c[0].current = 1;
        c.append('<div class="hp07z1"></div>').append('<div class="hp07z2"></div>');
        if (c.find("div.hp07").length > 1) {
            c.find(".hp07w2").prepend('<a href="#previous" class="hp07dnav hp07prev" data-goto="-1"><i> </i></a>');
            var d = '<div class="hp07nav"><ul style="margin-top:-' + (((c.find("div.hp07").length * 1.05) / 2) + 0.15) + "em;margin-left:-" + (((c.find("div.hp07").length * 1.05) / 2) + 0.15) + 'em">';
            c.find("div.hp07").each(function(g) {
                a(this).attr("id", "feature-" + (g + 1));
                var f = (g == 0) ? ' class="hp07selected"' : "";
                d += '<li><a href="#feature-' + (g + 1) + '"' + f + ' id="fnav-' + (g + 1) + '" data-goto="' + (g + 1) + '"> </a></li>';
            });
            d += "</ul></div>";
            c.find(".hp07w2").append(d + '\n<a href="#next" class="hp07dnav hp07next" data-goto="+1"><i> </i></a>');
        } else {
            c.find("div.hp07").first().attr("id", "feature-1");
            c.addClass("hp07single");
        }
        c.find("div.hp07").each(function(h) {
            if (h == 0) {
                a(this).addClass("cfeature");
                var g = (a(this).is("[data-bgimg]")) ? b(a(this).attr("data-bgimg")) : "ffffff";
                var f = ((a(this).is("[data-bgimg2x]") && a("html").hasClass("retina") && a(window).width() > 600)) ? a(this).attr("data-bgimg2x") : a(this).attr("data-bgimg");
                c.append('<div class="hp07w4"><div class="hp07imgslide cslide" id="hp07img-1"><div style="background-color:#' + g + '"><img class="hp07img" src="' + f + '"></div></div></div>');
                var f = a(this).attr("data-bgimg");
                imgpreload([f], function(i, j) {
                    var k = j.find("div.hp07w4");
                    j.find("div.hp07").each(function(o) {
                        if (o != 0) {
                            var m = (a(this).is("[data-bgimg]")) ? b(a(this).attr("data-bgimg")) : "ffffff";
                            var l = ((a(this).is("[data-bgimg2x]") && a("html").hasClass("retina") && a(window).width() > 600)) ? a(this).attr("data-bgimg2x") : a(this).attr("data-bgimg");
                            k.append('<div class="hp07imgslide" id="hp07img-' + (o + 1) + '"><div style="background-color:#' + m + '"><img class="hp07img" src="' + l + '"></div></div>');
                        }
                    });
                }, a(this).closest("div.hp07v0"));
            }
            a(this).attr("data-lbl", "hpf" + (h + 1));
            if (!a(this).find(".hp07w3").first().is("[data-lbl]")) {
                a(this).find(".hp07w3").attr("data-lbl", a(this).find(".hp07ttl").text());
            }
        });
        a("#feature-1").css("top", 0).css("left", 0);
        a("#hp07img-1").css("top", 0).css("left", 0);

        function b(f) {
            if (/-bg(......)-/.test(f)) {
                var g = f.replace(/.*-bg(......).*/ig, "$1");
                return g;
            } else {
                return "ffffff";
            }
        }
    });
    a("body").on("mouseenter", "#hp07v0", function() {
        a(this).addClass("hp07pause");
    }).on("mouseleave", "#hp07v0", function() {
        a(this).removeClass("hp07pause");
    });
});
$(window).load(function() {
    var a = ($("#hp07v0").is("[data-hp07rotate]")) ? $("#hp07v0").attr("data-hp07rotate") : 9;
    $("#hp07v0").attr("data-hp07rotate", a);
    if (a != 0 && !$("#hp07v0").hasClass("hp07single")) {
        setTimeout(function() {
            hp07goto("+1", "auto");
        }, a * 1000);
    }
    var b = $("#feature-1").find(".hp07w3").attr("data-lbl");
    b = b.toLowerCase().replace(/ /g, "-").replace(/\xa0/g, "-").replace(/-+/g, "-").replace(/[.,:;'"]/g, "");
    if (typeof navTrack == "function" && typeof s_setAccount == "function") {
        navTrack(s_setAccount()[1], s_setAccount()[2], "hp07", "show-hpf1:" + b + ":load");
    }
});
$(document).on("click", ".hp08promo a[target]", function() {
    $(this).blur();
});
$(document).on("click", "a.hp07dnav,.hp07nav a", function() {
    if (!$(".hp07busy")[0] && !$(this).hasClass("hp07selected")) {
        if (/[-+]/.test($(this).attr("data-goto"))) {
            var a = ($(this).attr("data-goto").indexOf("+") > -1) ? "next" : "prev";
            hp07goto($(this).attr("data-goto"), a);
        } else {
            hp07goto(($(this).attr("data-goto") * 1), "nav");
        }
    }
    return false;
});

function hp07goto(k, l) {
    var i = $("div.hp07v0").first();
    if (l == "auto" && i.hasClass("hp07gonemanual")) {
        return;
    } else {
        if (l == "auto" && i.hasClass("hp07pause")) {
            setTimeout(function() {
                hp07goto("+1", "auto");
            }, i.attr("data-hp07rotate") * 1000);
            return;
        }
    }
    i.addClass("hp07busy");
    if (l != "auto") {
        i.addClass("hp07gonemanual");
    }
    var o = i[0].current;
    var d = i.find("div.hp07").length;
    var j = ((o - 1) == 0) ? d : (o - 1);
    var c = ((o + 1) > d) ? 1 : (o + 1);
    var e = null;
    if (/[+]/.test(k)) {
        k = c;
        e = "n";
    } else {
        if (/[-]/.test(k)) {
            k = j;
            e = "p";
        }
    }
    $(".hp07dnav").animate({
        opacity: "0"
    }, 300, "easeInOutSine");
    $(".hp07selected").removeClass("hp07selected");
    $("#fnav-" + k).addClass("hp07selected");
    var m = "-100%";
    var f = "-80%";
    var g = "100%";
    var h = "-20%";
    var b = "20%";
    if ((k > o && o != d && e != "p") || e == "n") {
        m = "100%";
        f = "80%";
        g = "-100%";
        h = "20%";
        b = "-20%";
    }
    var a = $("#feature-" + k).find(".hp07w3").attr("data-lbl");
    a = a.toLowerCase().replace(/ /g, "-").replace(/\xa0/g, "-").replace(/-+/g, "-").replace(/[.,:;'"]/g, "");
    if (!i[0].autocount) {
        i[0].autocount = 2;
    } else {
        if (!i.hasClass("hp07gonemanual")) {
            i[0].autocount = i[0].autocount + 1;
        } else {
            i[0].autocount = 0;
        }
    } if (typeof navTrack == "function" && typeof s_setAccount == "function" && i[0].autocount <= i.find(".hp07v1").length) {
        navTrack(s_setAccount()[1], s_setAccount()[2], "hp07", "show-hpf" + k + ":" + a + ":" + l);
    }
    var n = (i.width() < 620) ? 600 : 1000;
    if (!document.addEventListener) {
        $("#feature-" + k).addClass("cfeature");
        $("#feature-" + k).css("top", m);
        $("#hp07img-" + k).css("top", "0").css("left", "0").css("z-index", "1");
        $("#hp07img-" + k + " div").css("top", h);
        $("#hp07img-" + k).addClass("cslide");
        $("#hp07img-" + o).css("z-index", "2");
        $("#feature-" + o).animate({
            top: g
        }, n, "easeInOutSine");
        $("#hp07img-" + o + " div").animate({
            top: f
        }, n, "easeInOutSine");
        $("#hp07img-" + o).animate({
            top: g
        }, n, "easeInOutSine", function() {
            $(this).css("top", g);
            $("#feature-" + o).removeClass("cfeature");
            $("#hp07img-" + o).removeClass("cslide");
            if (l == "auto") {
                setTimeout(function() {
                    hp07goto("+1", "auto");
                }, i.attr("data-hp07rotate") * 1000);
            }
        });
        $("#hp07img-" + k + " div").animate({
            top: "0"
        }, n, "easeInOutSine");
        $("#hp07img-" + k).animate({
            top: "0"
        }, n, "easeInOutSine");
        $("#feature-" + k).animate({
            top: "0%"
        }, n, "easeInOutSine", function() {
            $(".hp07dnav").animate({
                opacity: "1"
            }, 150, "easeInOutSine");
            $(".hp07busy").removeClass("hp07busy");
        });
    } else {
        $("#feature-" + k).addClass("cfeature");
        $("#feature-" + k).css("top", m).css("left", m);
        $("#hp07img-" + k).css("top", "0%").css("left", "0%").css("z-index", "0");
        $("#hp07img-" + k).addClass("cslide");
        $("#hp07img-" + k + " div").css("top", h).css("left", h);
        $("#hp07img-" + o).css("z-index", "2");
        $("#feature-" + o).animate({
            top: g,
            left: g
        }, n, "easeInOutSine");
        $("#hp07img-" + o + " div").animate({
            top: f,
            left: f
        }, n, "easeInOutSine");
        $("#hp07img-" + o).animate({
            top: g,
            left: g
        }, n, "easeInOutSine", function() {
            $(this).css("top", g).css("left", g);
            $("#feature-" + o).removeClass("cfeature");
            $("#hp07img-" + o).removeClass("cslide");
            if (l == "auto") {
                setTimeout(function() {
                    hp07goto("+1", "auto");
                }, i.attr("data-hp07rotate") * 1000);
            }
        });
        $("#hp07img-" + k + " div").animate({
            top: "0",
            left: "0"
        }, n, "easeInOutSine");
        $("#hp07img-" + k).animate({
            top: "0",
            left: "0"
        }, n, "easeInOutSine");
        $("#feature-" + k).animate({
            top: "0%",
            left: "0%"
        }, n, "easeInOutSine", function() {
            $(".hp07dnav").animate({
                opacity: "1"
            }, 150, "easeInOutSine");
            $(".hp07busy").removeClass("hp07busy");
        });
    }
    i[0].current = k;
    if (l != "auto") {
        i.addClass("hp07gonemanual");
    }
}

/*! HP08 */
jQuery(document).ready(function(a) {
    a("div.hp08v0").each(function() {
        var d = "";
        var e = (a(this).is("[data-showlist]")) ? a(this).attr("data-showlist") : "Show List View";
        var b = (a(this).is("[data-showimgs]")) ? a(this).attr("data-showimgs") : "Show Panel View";
        a(this).addClass("hp08notloaded").addClass("hp08imgitems").attr("data-lbl", "panelview");
        a(this).find(".hp08v1").each(function(i) {
            var h = a(this)[0].id;
            var g = a(this).find(".hp08label").text();
            var f = (a(this).is("[data-lbl]")) ? a(this).attr("data-lbl") : h;
            d += '<li><a href="#' + h + '" data-lbl="' + f + '">' + g + "<i></i></a></li>";
            a(this).find(".hp08promo").each(function(j) {
                a(this).attr("data-lbl", "location" + (j + 1));
            });
        });
        d = '		<div class="hp08tablist" id="hp08tablist">			<ul data-lbl="tab">' + d + '</ul>			<div class="hp08tglview">				<a href="#showlist" class="hp08showlist" title="' + e + '" data-lbl="show-list-view"> </a>				<a href="#showimages" class="hp08showimgs" title="' + b + '" data-lbl="show-panel-view"> </a>				<div class="hp08tgl-togg"></div>				<div class="hp08tgl-icn list-icn"></div>				<div class="hp08tgl-icn imgs-icn"></div>			</div>			</div>';
        a(this).prepend(d);
        a(this).find(".hp08tablist li:first-child").addClass("hp08default");
        a(this).prepend('<div id="hp08selector"><a href="#choosefilter" data-lbl="notrack"></a></div>');
        a(this).find(".hp08teaser").wrapInner("<span><em></em></span>").append('<b class="hp08arrw"></b>').hide();
        a(this).find(".hp08cta").wrapInner("<span></span>").hide();
        var c = '	<div class="hp08v1 hp08bgtiles">	<div class="hp08promo hp08promo-1 hp08c1 hp08bgtile"></div>	<div class="hp08promo hp08promo-2 hp08c1 hp08bgtile"></div>	<div class="hp08promo hp08promo-3 hp08c2 hp08bgtile"></div>	<div class="hp08promo hp08promo-4 hp08c3 hp08bgtile"></div>	<div class="hp08promo hp08promo-5 hp08c3 hp08bgtile"></div>	</div>';
        a(this).find(".hp08w2").append(c);
        hp08resize();
    });
    a(".hp08v0").waypoint(function(b) {
        if (!a(this).find(".hp08img")[0]) {
            hp08showpromo(a(".hp08v0 .hp08v1").first().attr("id"));
        }
    }, {
        offset: "100%"
    });
});
jQuery(window).resize(function(a) {
    hp08resize();
});

function hp08resize() {
    jQuery("div.hp08promo").each(function() {
        if ($(this).hasClass("hp08promo-3")) {
            $(this).css("height", $(this).closest(".hp08v1").outerHeight());
        }
        var a = jQuery(this).find(".hp08teaser").height();
        var b = jQuery(this).height();
        var c = jQuery(this).find(".cmps-bttns span").width();
        jQuery(this).find(".hp08cta").css("height", (b) + "px").css("margin-top", (-1 * a) + "px").css("padding-top", (1 * a) + "px");
        jQuery(this).find(".hp08w3").css("top", (b - a) + "px").css("padding-right", (c + 40) + "px");
        jQuery(this).find(".hp08w4").css("padding-right", (c + 40) + "px");
    });
}
$(document).on("click", ".hp08tablist ul a", function() {
    if ($(this)[0].href.split("#")[1] != $(".hp08v0").attr("data-cfilter")) {
        hp08showpromo($(this)[0].href.split("#")[1]);
    }
    $(".hp08viewmenu").removeClass("hp08viewmenu");
    return false;
});
$(document).on("click", ".hp08tglview a", function() {
    $(this).closest(".hp08").toggleClass("hp08lvw").toggleClass("hp08imgitems");
    if ($(this).closest(".hp08").attr("data-lbl") == "panelview") {
        $(this).closest(".hp08").attr("data-lbl", "listview");
    } else {
        $(this).closest(".hp08").attr("data-lbl", "panelview");
    }
    hp08resize();
    $(this).parent().find(".hp08tgl-icn").css("opacity", 0.2).animate({
        opacity: 1
    }, 800, "easeInOutSine");
    return false;
});
$(document).on("click", "#hp08selector a", function() {
    $(this).closest(".hp08").toggleClass("hp08viewmenu");
    return false;
});
$(document).on("click", ".hp08promo a[target]", function() {
    $(this).blur();
});
$(document).on("mouseenter", ".hp08notloaded", function() {
    $(this).find(".hp08promo a[data-bgimg]").each(function(c) {
        var b = hp08imgpos($(this).attr("data-bgimg"));
        var a = ($(this).is("[data-bgimg2x]") && $("html").hasClass("retina")) ? $(this).attr("data-bgimg2x") : $(this).attr("data-bgimg");
        $(this).prepend('<div class="hp08img ' + b + '" style="background-image:url(\'' + a + "')\"></div>");
        $(this).removeAttr("data-bgimg").removeAttr("data-bgimg2x");
    });
    $(this).removeClass("hp08notloaded");
});

function hp08showpromo(a) {
    var c = $("#" + a);
    c.parent().find(".hp08cta").hide();
    var b = $("#" + $(".hp08v0").attr("data-cfilter"));
    if (b[0]) {
        $(".hp08prevf").removeClass("hp08prevf");
        b.removeClass("hp08currentfilter").addClass("hp08prevf");
        b.find(".hp08cta").hide();
    }
    c.addClass("hp08currentfilter");
    c.find(".hp08promo a").css("top", "-150%");
    $(".hp08selected").removeClass("hp08selected").removeClass("hp08default");
    $('.hp08tablist a[href="#' + a + '"]').parent().addClass("hp08selected");
    $("#hp08selector a").html($('.hp08tablist a[href="#' + a + '"]').parent().text());
    $(".hp08v0").attr("data-cfilter", a);
    c.find(".hp08promo a").each(function(g) {
        if (!$(this).find(".hp08img")[0] && $(this).is("[data-bgimg]")) {
            var d = ($(this).is("[data-bgimg2x]") && $("html").hasClass("retina")) ? $(this).attr("data-bgimg2x") : $(this).attr("data-bgimg");
            $(this).removeAttr("data-bgimg").removeAttr("data-bgimg2x");
            imgpreload([d], function(h, i) {
                i.css("top", "-150%");
                var j = hp08imgpos(d);
                i.prepend('<div class="hp08img ' + j + '" style="background-image:url(\'' + d + "')\"></div>");
                hp08loadp(i);
            }, $(this));
        } else {
            var f = $(this);
            if (f.closest(".hp08imgitems")[0]) {
                var e = setTimeout(function() {
                    hp08loadp(f);
                }, (g * (100 - (g * 4))));
            } else {
                hp08loadp(f);
            }
        }
    });
}

function hp08loadp(b) {
    b.find(".hp08teaser").show();
    hp08resize();
    var a = "hp08promo-" + b.parent()[0].className.split("8promo-")[1].split(" ")[0];
    if (b.closest(".hp08imgitems")[0]) {
        b.animate({
            top: "0%"
        }, 700, "easeInOutSine", function() {
            $(this).find(".hp08cta").show();
            $("div.hp08prevf ." + a + " a").css("top", "-150%");
        });
    } else {
        b.css("top", 0).show();
        b.find(".hp08cta").show();
    }
}

function hp08imgpos(a) {
    if (/hp08c[13]p1/.test(a)) {
        return " hp08bg-tl";
    } else {
        if (/hp08c[13]p2/.test(a)) {
            return " hp08bg-tc";
        } else {
            if (/hp08c[13]p3/.test(a)) {
                return " hp08bg-tr";
            } else {
                if (/hp08c2p1/.test(a)) {
                    return " hp08bg-tc";
                } else {
                    if (/hp08c2p2/.test(a)) {
                        return " hp08bg-mc";
                    } else {
                        if (/hp08c2p3/.test(a)) {
                            return " hp08bg-bc";
                        } else {
                            return "";
                        }
                    }
                }
            }
        }
    }
}
jQuery(document).ready(function(a) {
    a(".hp09roles > li:nth-child(3)").addClass("hp08clft");
    if (!document.addEventListener) {
        a("div.hp09icn").append('<i class="ie-icn"><span><b> </b></span></i>');
    }
    a(".hp09v0").waypoint(function(b) {
        a(this).addClass("hp09loadicons");
    }, {
        offset: "100%"
    });
});

/*! CW21 */
jQuery(document).ready(function(d) {
    (function(e) {
        e(document).keydown(function(f) {
            if (f.which == 27) {
                e("li.cw21selected").removeClass("cw21selected");
                e("div.cw21opened").css("right", "");
                e("div.cw21opened").removeClass("cw21opened");
                e("div.cw21hidden").remove();
            }
        });
    })(jQuery);
    d("div.cw21").each(function() {
        if (!d(this).hasClass("cw21nobtt")) {
            d(this).prepend('<div class="cw21w3"><a id="cw21scrollto" class="icn-img" href="#top"></a></div>');
        }
        d(this).find("ul.cw21navigation li").first().addClass("cw21firstli");
        d(this).find("ul.cw21navigation li a").append("<b></b>");
    });
    d("ul.cw21navigation").on("click", "a", function(i) {
        var g = d(this).closest(".cw21");
        var f = g.outerWidth(true);
        var h = d(this).attr("href").split("#")[1];
        if ((typeof h !== "undefined")) {
            g.find("div.cw21w1").css("min-height", ((d("ul.cw21navigation li").length * 55) + 0) + "px");
            if (!g.hasClass("cw21opened")) {
                g.addClass("cw21opened");
                d(this).parent().addClass("cw21selected");
                g.parent().append('<div class="cw21hidden"></div>');
                g.animate({
                    right: "0px"
                }, 400);
                g.find("div.cw21w2").hide();
                d("#" + h).show();
            } else {
                if (g.hasClass("cw21opened") && !d(this).parent().hasClass("cw21selected")) {
                    g.find("div.cw21w2").hide();
                    d("#" + h).show();
                    d("li.cw21selected").removeClass("cw21selected");
                    d(this).parent().addClass("cw21selected");
                } else {
                    d("div.cw21hidden").remove();
                    g.find("div.cw21w2").hide();
                    g.removeClass("cw21opened");
                    g.animate({
                        right: (f * -1) + "px"
                    }, 400, function() {
                        d("li.cw21selected").removeClass("cw21selected");
                        d(this).css("right", "");
                    });
                }
            }
            i.preventDefault();
        }
    });
    d(document).on("click", "div.cw21hidden", function(i) {
        var g = d("div.cw21");
        var e = g.outerWidth(true);
        var h = d("div.cw21hidden");
        if (!g.is(i.target) && g.has(i.target).length === 0 && g.hasClass("cw21opened")) {
            g.find("div.cw21w2").hide();
            g.removeClass("cw21opened");
            g.animate({
                right: (e * -1) + "px"
            }, 400, function() {
                d("li.cw21selected").removeClass("cw21selected");
                d(this).css("right", "");
            });
            h.remove();
        }
    });
    d(window).scroll(function() {
        if ((d(this).scrollTop() > d(window).height()) && (d(window).height() > 200)) {
            d(".cw21w3").fadeIn();
        } else {
            d(".cw21w3").fadeOut();
        }
    });
    d(".cw21w3").click(function() {
        d("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    var c = d("div.cw21w2").map(function() {
        return d(this).height();
    }).get();
    var b = Math.max.apply(null, c);
    var a = d(window).height();
    if (b > 200) {
        d("div.cw21").css("margin-top", -(b / 2) + "px");
    }
});

function imgpreload(g, f, d) {
    var b = 0;
    var a = [];
    g = Object.prototype.toString.apply(g) === "[object Array]" ? g : [g];
    var e = function() {
        b += 1;
        if (b === g.length && f) {
            f(a, d);
        }
    };
    for (var c = 0; c < g.length; c++) {
        a[c] = new Image();
        a[c].onabort = e;
        a[c].onerror = e;
        a[c].onload = e;
        a[c].src = g[c];
    }
}