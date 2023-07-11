(()=>{
    var e = {
        380: ()=>{
            document.addEventListener("DOMContentLoaded", (()=>{
                const e = document.querySelector(".np-consent-link");
                e.onclick = e=>{
                    e.preventDefault(),
                    window.__cmp("showModal")
                }
                ;
                const t = ()=>{
                    e.style.display = "inline"
                }
                ;
                if (window.nitroAds && window.nitroAds.loaded ? window.__tcfapi && window.__cmp && t() : document.addEventListener("nitroAds.loaded", (()=>{
                    window.__tcfapi && window.__cmp && t()
                }
                )),
                npShowAds) {
                    const e = {
                        demo: npDemo,
                        refreshLimit: 20,
                        refreshTime: 30,
                        refreshVisibleOnly: !0
                    };
                    window.nitroAds.createAd("np-top", {
                        ...e,
                        sizes: [[728, 90]],
                        mediaQuery: "(min-width: 768px)"
                    }),
                    window.nitroAds.createAd("np-top-mobile", {
                        ...e,
                        sizes: [[320, 50], [320, 100], [300, 250]],
                        mediaQuery: "(max-width: 767px)"
                    }),
                    window.nitroAds.createAd("np-anchor", {
                        ...e,
                        format: "anchor",
                        sizes: [[728, 90]],
                        mediaQuery: "(min-width: 768px)"
                    }),
                    window.nitroAds.createAd("np-anchor-mobile", {
                        ...e,
                        format: "anchor",
                        sizes: [[320, 50]],
                        mediaQuery: "(max-width: 767px)"
                    }),
                    window.nitroAds.createAd("np-sidebar-left", {
                        ...e,
                        sizes: [[336, 280], [300, 250], [300, 600], [160, 600]],
                        mediaQuery: "(min-width: 1500px)"
                    }),
                    window.nitroAds.createAd("np-sidebar-right", {
                        ...e,
                        sizes: [[336, 280], [300, 250], [300, 600], [160, 600]],
                        mediaQuery: "(min-width: 1500px)"
                    }),
                    window.nitroAds.createAd("nitro-outstream", {
                        refreshLimit: 20,
                        refreshTime: 30,
                        format: "floating",
                        report: {
                            enabled: !0,
                            icon: !0,
                            wording: "Report Ad",
                            position: "top-right"
                        },
                        mediaQuery: "(min-width: 768px)"
                    })
                }
            }
            ))
        }
    }
      , t = {};
    function n(i) {
        var r = t[i];
        if (void 0 !== r)
            return r.exports;
        var o = t[i] = {
            exports: {}
        };
        return e[i](o, o.exports, n),
        o.exports
    }
    n.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e,t)=>{
        for (var i in t)
            n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
    }
    ,
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        "use strict";
        n(380);
        function e(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }
        (function() {
            document.addEventListener("DOMContentLoaded", (function() {
                Array.prototype.slice.call(document.querySelectorAll("input[type=submit]")).forEach((function(t) {
                    t.onclick = function(t) {
                        t.preventDefault(),
                        function(t) {
                            var n = t.querySelectorAll("input[type=text]")
                              , i = n[0].value.replace(",", ".")
                              , r = n[1].value.replace(",", ".")
                              , o = 0
                              , d = !1;
                            if (n[0].style.background = "#fff",
                            n[1].style.background = "#fff",
                            n[2].value = "",
                            e(i) || (n[0].style.background = "#fee",
                            d = !0),
                            e(r) || (n[1].style.background = "#fee",
                            d = !0),
                            d)
                                return !1;
                            switch (t.getAttribute("id")) {
                            case "f1":
                                o = i / 100 * r;
                                break;
                            case "f2":
                                o = i / r * 100;
                                break;
                            case "f3":
                                o = (r - i) / i * 100
                            }
                            n[2].value = o
                        }(this.parentNode.parentNode)
                    }
                }
                ))
            }
            ), !1)
        }
        ).call(void 0)
    }
    )()
}
)();
