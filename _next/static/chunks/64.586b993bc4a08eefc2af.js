(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [64], {
        20064: function(e, t, r) {
            "use strict";
            r.r(t);
            var s = r(85893),
                l = r(809),
                a = r.n(l),
                n = r(30266),
                c = r(25675),
                o = (r(11163), r(41664)),
                i = r(67294),
                d = r(39623);
            t.default = function() {
                var e = (0, i.useContext)(d.$C),
                    t = (e.mintShowCaseRef, e.executeScroll, (0, i.useState)(!1)),
                    r = (t[0], t[1]),
                    l = (0, i.useState)(!1),
                    u = l[0],
                    h = l[1],
                    f = (0, i.useState)(!1),
                    p = f[0],
                    x = f[1],
                    m = (0, i.useState)(0),
                    v = m[0],
                    b = m[1],
                    g = (0, i.useContext)(d.FL),
                    j = g.minter,
                    N = g.baseToken,
                    y = g.web3;
                return (0, i.useEffect)((function() {
                    (function() {
                        var e = (0, n.Z)(a().mark((function e() {
                            var t, s, l, n, c, o;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(j && N && y)) { e.next = 21; break }
                                        return e.next = 3, N.methods.totalMinted().call();
                                    case 3:
                                        return t = e.sent, e.next = 6, N.methods.maxSupply().call();
                                    case 6:
                                        return s = e.sent, e.next = 9, j.methods.saleIsActive().call();
                                    case 9:
                                        return l = e.sent, e.next = 12, j.methods.signedMintIsActive().call();
                                    case 12:
                                        return n = e.sent, e.next = 15, j.methods.price().call();
                                    case 15:
                                        c = e.sent, o = y.utils.fromWei(c), b(o), r(l || n), h(t), x(s);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    })()()
                }), [j, N, y]), (0, s.jsx)("section", { className: "bg-black text-white pt-10 pb-20", children: (0, s.jsxs)("div", { className: "wrapper", children: [(0, s.jsx)("h1", { className: "text-[45px] lg:text-[60px] uppercase font-bold", children: "All Drops" }), (0, s.jsx)("div", { className: "text-white pt-10 group", children: (0, s.jsx)(o.default, { href: "/we-are-kloud", children: (0, s.jsxs)("a", { children: [(0, s.jsx)("h3", { className: "text-[24px] mb-4 text-left", children: "Current Drop" }), (0, s.jsxs)("div", { className: "border-4 border-brightGreen group-hover:border-brightBlue", children: [(0, s.jsxs)("div", { className: "pt-4 align-bottom", children: [(0, s.jsx)("div", { className: "mx-auto sm:hidden image px-4 text-center", children: (0, s.jsx)(c.default, { src: "/img/drops/we-are-kloud-mobile.png", alt: "We Are Klouds", width: "358", height: "200", priority: !0 }) }), (0, s.jsx)("div", { className: "px-10 mx-auto hidden sm:block image", children: (0, s.jsx)(c.default, { src: "/img/drops/we-are-kloud.jpg", alt: "We Are Klouds", width: "1500", height: "400", priority: !0 }) })] }), (0, s.jsxs)("div", { className: "p-6 md:p-10 bg-white text-black", children: [(0, s.jsx)("h4", { className: "uppercase text-3xl font-bold mb-6 text-left", children: "We Are Kloud" }), (0, s.jsx)("p", { className: "font-mono text-left", children: "With this NFT drop, the collector enters the KLOUD, owning a unique visual & musical art piece derived from the generative algorithm that is KLOUD x HOOKER x COMPUTER." }), (0, s.jsx)("div", { className: "h-[1px] border-b border-black my-6" }), (0, s.jsxs)("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8 md:mb-0", children: [(0, s.jsxs)("div", { children: [(0, s.jsx)("h5", { className: "text-md font-bold", children: "Total Minted" }), (0, s.jsx)("p", { className: "text-md", children: u })] }), (0, s.jsxs)("div", { className: "hidden sm:block", children: [(0, s.jsx)("h5", { className: "text-md font-bold", children: "Project Size" }), (0, s.jsx)("p", { className: "text-md", children: p })] }), (0, s.jsxs)("div", { children: [(0, s.jsx)("h5", { className: "text-md font-bold", children: "Price" }), (0, s.jsxs)("p", { className: "text-md", children: [v, " \u039e"] })] }), (0, s.jsx)("div", { className: "hidden lg:block", children: (0, s.jsx)("div", { className: "bg-lightGrey text-black p-2 text-center font-bold group-hover:bg-lightGrey", children: (0, s.jsx)("p", { children: "Sold Out" }) }) })] }), (0, s.jsx)("div", { className: "mb-2 lg:hidden", children: (0, s.jsx)("div", { className: "bg-lightGrey text-black p-2 text-center font-bold group-hover:bg-lightGrey", children: (0, s.jsx)("p", { children: "Sold Out" }) }) })] })] })] }) }) })] }) })
            }
        },
        92167: function(e, t, r) {
            "use strict";
            var s = r(53848);
            t.default = void 0;
            var l, a = (l = r(67294)) && l.__esModule ? l : { default: l },
                n = r(21063),
                c = r(34651),
                o = r(7426);
            var i = {};

            function d(e, t, r, s) {
                if (e && n.isLocalURL(t)) {
                    e.prefetch(t, r, s).catch((function(e) { 0 }));
                    var l = s && "undefined" !== typeof s.locale ? s.locale : e && e.locale;
                    i[t + "%" + r + (l ? "%" + l : "")] = !0
                }
            }
            var u = function(e) {
                var t, r = !1 !== e.prefetch,
                    l = c.useRouter(),
                    u = a.default.useMemo((function() {
                        var t = n.resolveHref(l, e.href, !0),
                            r = s(t, 2),
                            a = r[0],
                            c = r[1];
                        return { href: a, as: e.as ? n.resolveHref(l, e.as) : c || a }
                    }), [l, e.href, e.as]),
                    h = u.href,
                    f = u.as,
                    p = e.children,
                    x = e.replace,
                    m = e.shallow,
                    v = e.scroll,
                    b = e.locale;
                "string" === typeof p && (p = a.default.createElement("a", null, p));
                var g = (t = a.default.Children.only(p)) && "object" === typeof t && t.ref,
                    j = o.useIntersection({ rootMargin: "200px" }),
                    N = s(j, 2),
                    y = N[0],
                    k = N[1],
                    w = a.default.useCallback((function(e) { y(e), g && ("function" === typeof g ? g(e) : "object" === typeof g && (g.current = e)) }), [g, y]);
                a.default.useEffect((function() {
                    var e = k && r && n.isLocalURL(h),
                        t = "undefined" !== typeof b ? b : l && l.locale,
                        s = i[h + "%" + f + (t ? "%" + t : "")];
                    e && !s && d(l, h, f, { locale: t })
                }), [f, h, k, b, r, l]);
                var L = {
                    ref: w,
                    onClick: function(e) {
                        t.props && "function" === typeof t.props.onClick && t.props.onClick(e), e.defaultPrevented || function(e, t, r, s, l, a, c, o) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) { var t = e.currentTarget.target; return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which }(e) && n.isLocalURL(r)) && (e.preventDefault(), null == c && s.indexOf("#") >= 0 && (c = !1), t[l ? "replace" : "push"](r, s, { shallow: a, locale: o, scroll: c }))
                        }(e, l, h, f, x, m, v, b)
                    },
                    onMouseEnter: function(e) { n.isLocalURL(h) && (t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e), d(l, h, f, { priority: !0 })) }
                };
                if (e.passHref || "a" === t.type && !("href" in t.props)) {
                    var C = "undefined" !== typeof b ? b : l && l.locale,
                        E = l && l.isLocaleDomain && n.getDomainLocale(f, C, l && l.locales, l && l.domainLocales);
                    L.href = E || n.addBasePath(n.addLocale(f, C, l && l.defaultLocale))
                }
                return a.default.cloneElement(t, L)
            };
            t.default = u
        },
        41664: function(e, t, r) { e.exports = r(92167) }
    }
]);