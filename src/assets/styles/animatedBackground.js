! function(e) {
    e.hexToRgb = function(e) {
        "4" == e.length && (e = "#" + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2) + e.charAt(3) + e.charAt(3));
        var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return a ? {
            r: parseInt(a[1], 16),
            g: parseInt(a[2], 16),
            b: parseInt(a[3], 16)
        } : null
    }, e.componentToHex = function(e) {
        var a = e.toString(16);
        return 1 == a.length ? "0" + a : a
    }, e.rgbToHex = function(a, o, r) {
        return "#" + e.componentToHex(a) + e.componentToHex(o) + e.componentToHex(r)
    }, e.fn.easyBackgroundParticles = function(a) {
        var o = a,
            r = this[0].getContext("2d"),
            i = this.parent(),
            t = this[0],
            s = [];
        if ("image" == o.shape.substr(0, 5)) {
            var n = o.shape.split(":");
            n.shift(), n = n.join(":"), o.shape = "image", o.image = new Image, o.image.src = n
        }
        var c = function(e, a) {
                return Math.random() * (a - e) + e
            },
            g = function() {
                t.width = i.innerWidth(), t.height = i.innerHeight()
            },
            d = function() {
                for (var e = 0; e < o.numParticles; e++) {
                    var a = o.colors[~~c(0, o.colors.length)],
                        r = o.borderColors[~~c(0, o.borderColors.length)],
                        i = (c(o.minBorderOpacity, o.maxBorderOpacity), c(o.minOpacity, o.maxOpacity));
                    s[e] = {
                        scale: c(o.minScale, o.maxScale),
                        x: c(0, t.width),
                        y: c(0, t.height),
                        rotation: 0,
                        xpeed: c(o.minSpeedX, o.maxSpeedX),
                        yspeed: c(o.minSpeedY, o.maxSpeedY),
                        rotationSpeed: c(o.minRotateSpeed, o.maxRotateSpeed),
                        color: "rgba(" + a + "," + i + ")",
                        opacity: i,
                        borderColor: "rgb(" + r + ")"
                    }
                }
                A()
            },
            l = function(e) {
                r.fillStyle = e.color, o.border && (r.strokeStyle = e.borderColor, r.stroke()), r.beginPath(), e.rotation += e.rotationSpeed, r.save(), r.translate(e.x, e.y), r.rotate(e.rotation * Math.PI / 180);
                var a = o.baseSize * e.scale / 2;
                switch (o.shape) {
                    case "circle":
                        r.arc(-a, -a, o.baseSize * e.scale, 0, 2 * Math.PI, !1);
                        break;
                    case "square":
                        r.fillRect(-a, -a, o.baseSize * e.scale, o.baseSize * e.scale);
                        break;
                    case "image":
                        r.globalAlpha = e.opacity, r.drawImage(o.image, -(o.image.width / 2), -(o.image.height / 2), o.image.width * e.scale, o.image.height * e.scale), r.globalAlpha = 1
                }
                r.restore(), r.fill()
            },
            A = function() {
                setInterval(function() {
                    r.clearRect(0, 0, t.width, t.height);
                    for (var e = 0; e < o.numParticles; e++) {
                        var a = s[e];
                        a.x += a.xpeed, a.y += a.yspeed;
                        var i = o.baseSize * a.scale,
                            n = i;
                        "image" == o.shape && (i = o.image.width * a.scale, n = o.image.height * a.scale), a.x > t.width + i || a.y > t.height + n || a.x < -(1.5 * i) || a.y < -(1.5 * n) ? h(a) : l(a)
                    }
                }, 17)
            },
            h = function(e) {
                var a = c(0, 1),
                    r = o.baseSize * e.scale,
                    i = r;
                "image" == o.shape && (r = o.image.width * e.scale, i = o.image.height * e.scale), a > .5 ? (e.x = e.xpeed > 0 ? -r : t.width + r, e.y = c(0, t.height)) : (e.x = c(0, t.width), e.y = e.yspeed > 0 ? -i : t.height + i), l(e)
            };
        g(), e(window).on("resize.canvas", g), d()
    }, e.fn.easyBackground = function(a) {
        function o() {
            var a = e('<canvas class="easy-background-canvas" />');
            return a.css("display", "block"), h.append(a), a
        }

        function r(a) {
            var o = e('<div id="easy-background-player" />');
            if (h.append(o), "youtube" == a.substr(0, 7)) {
                var r = a.split(":")[1];
                if (r) {
                    var i = document.createElement("script");
                    i.type = "text/javascript", i.src = "http://www.youtube.com/iframe_api", e("body").append(i), window.onYouTubeIframeAPIReady = function() {
                        var e = new YT.Player("easy-background-player", {
                            width: 1,
                            height: 1,
                            videoId: r,
                            playerVars: {
                                controls: 0,
                                showinfo: 0,
                                modestbranding: 1,
                                iv_load_policy: 3
                            },
                            events: {
                                onReady: function(e) {
                                    t(), l.mute && e.target.mute(), e.target.seekTo(0), e.target.playVideo()
                                },
                                onStateChange: function(a) {
                                    0 === a.data && e.seekTo(0)
                                }
                            }
                        })
                    };
                    var t = function() {
                        var a = {};
                        a.width = h.innerWidth(), a.height = h.innerHeight();
                        var o = 24,
                            r = 100,
                            i = {};
                        i.width = a.width + a.width * o / 100, i.height = Math.ceil("16/9" == l.ratio ? 9 * a.width / 16 : 3 * a.width / 4), i.marginTop = -((i.height - a.height) / 2), i.marginLeft = -(a.width * (o / 2) / 100), i.height < a.height && (i.height = a.height + a.height * o / 100, i.width = Math.floor("16/9" == l.ratio ? 16 * a.height / 9 : 4 * a.height / 3), i.marginTop = -(a.height * (o / 2) / 100), i.marginLeft = -((i.width - a.width) / 2)), i.width += r, i.height += r, i.marginTop -= r / 2, i.marginLeft -= r / 2, e("#easy-background-player").css(i)
                    };
                    e(window).on("resize.youtube", t)
                }
            }
        }

        function i(e, a) {
            switch (l.gradientType) {
                case "horizontal":
                    h.css("background", "-moz-linear-gradient(left, " + e + ", " + a + " 100%)"), h.css("background", "-webkit-gradient(linear, left top, right top, color-stop(0%," + e + "), color-stop(100%," + a + "))"), h.css("background", "-webkit-linear-gradient(left, " + e + " 0%," + a + " 100%)"), h.css("background", "-o-linear-gradient(left, " + e + " 0%," + a + " 100%)"), h.css("background", "-ms-linear-gradient(left, " + e + " 0%," + a + " 100%)"), h.css("background", "linear-gradient(to right, " + e + " 0%," + a + " 100%)"), h.css("filter", "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + e + "', endColorstr='" + a + "',GradientType=1 )");
                    break;
                case "vertical":
                    h.css("background", "-moz-linear-gradient(top, " + e + ", " + a + " 100%)"), h.css("background", "-webkit-gradient(linear, left top, left bottom, color-stop(0%," + e + "), color-stop(100%," + a + "))"), h.css("background", "-webkit-linear-gradient(top, " + e + " 0%," + a + " 100%)"), h.css("background", "-o-linear-gradient(top, " + e + " 0%," + a + " 100%)"), h.css("background", "-ms-linear-gradient(top, " + e + " 0%," + a + " 100%)"), h.css("background", "linear-gradient(to bottom, " + e + " 0%," + a + " 100%)"), h.css("filter", "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + e + "', endColorstr='" + a + "',GradientType=0 )");
                    break;
                case "diagonal":
                    h.css("background", "-moz-linear-gradient(-45deg, " + e + ", " + a + " 100%)"), h.css("background", "-webkit-gradient(linear, left top, right bottom, color-stop(0%," + e + "), color-stop(100%," + a + "))"), h.css("background", "-webkit-linear-gradient(-45deg, " + e + " 0%," + a + " 100%)"), h.css("background", "-o-linear-gradient(-45deg, " + e + " 0%," + a + " 100%)"), h.css("background", "-ms-linear-gradient(-45deg, " + e + " 0%," + a + " 100%)"), h.css("background", "linear-gradient(135deg, " + e + " 0%," + a + " 100%)"), h.css("filter", "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + e + "', endColorstr='" + a + "',GradientType=1 )");
                    break;
                case "radial":
                    h.css("background", "-moz-radial-gradient(center, ellipse cover, " + e + " 0%, " + a + " 100%)"), h.css("background", "-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%," + e + "), color-stop(100%," + a + "))"), h.css("background", "-webkit-radial-gradient(center, ellipse cover, " + e + " 0%," + a + " 100%)"), h.css("background", "-o-radial-gradient(center, ellipse cover, " + e + " 0%," + a + " 100%)"), h.css("background", "-ms-radial-gradient(center, ellipse cover, " + e + " 0%," + a + " 100%)"), h.css("background", "radial-gradient(ellipse at center, " + e + " 0%," + a + " 100%)"), h.css("filter", "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + e + "', endColorstr='" + a + "',GradientType=1 )")
            }
        }

        function t(a, o) {
            var r = {
                    colorAR: a[0][0],
                    colorAG: a[0][1],
                    colorAB: a[0][2],
                    colorBR: a[1][0],
                    colorBG: a[1][1],
                    colorBB: a[1][2]
                },
                s = {
                    colorAR: o[0][0],
                    colorAG: o[0][1],
                    colorAB: o[0][2],
                    colorBR: o[1][0],
                    colorBG: o[1][1],
                    colorBB: o[1][2]
                };
            e(r).animate(s, {
                duration: l.duration,
                easing: l.gradientEase,
                step: function() {
                    var a = e.rgbToHex(Math.round(this.colorAR), Math.round(this.colorAG), Math.round(this.colorAB)),
                        o = e.rgbToHex(Math.round(this.colorBR), Math.round(this.colorBG), Math.round(this.colorBB));
                    i(a, o)
                },
                complete: function() {
                    l.gradientLoop && t(o, a)
                }
            })
        }

        function s(a) {
            if (!a) return console && console.log && console.log("No pattern found."), !1;
            h.css("background-image", "url(" + a + ")");
            var o = new Image;
            o.src = a, e(o).on("load", function() {
                n(this.width, this.height)
            })
        }

        function n(a, o) {
            h.css("background-position", "0 0");
            var r = {
                    x: 0,
                    y: 0
                },
                i = {
                    x: 0,
                    y: 0
                };
            "left" == l.patternAnimationX ? i.x = -a : "right" == l.patternAnimationX && (i.x = a), "top" == l.patternAnimationY ? i.y = -o : "bottom" == l.patternAnimationY && (i.y = o), e(r).animate(i, {
                duration: l.duration,
                easing: "linear",
                step: function() {
                    var e = Math.round(this.x),
                        a = Math.round(this.y);
                    h.css("background-position", e + "px " + a + "px")
                },
                complete: function() {
                    n(a, o)
                }
            })
        }

        function c(a) {
            if (!a || 0 == a.length) return console && console.log && console.log("No slides found."), !1;
            for (var o = 0; o < a.length; o++) {
                var r = new Image;
                r.src = a[o]
            }
            var i = e("<div />");
            i.css("width", "100%"), i.css("height", "100%"), i.css("position", "absolute"), i.css("top", "0"), i.css("left", "0"), i.css("z-index", "2"), i.css("-webkit-background-size", "cover"), i.css("-moz-background-size", "cover"), i.css("-o-background-size", "cover"), i.css("background-size", "cover"), i.css("background-repeat", "no-repeat"), i.css("background-position", "center");
            var t = e("<div/>");
            t.css("width", "100%"), t.css("height", "100%"), t.css("position", "absolute"), t.css("top", "0"), t.css("left", "0"), t.css("z-index", "1"), t.css("-webkit-background-size", "cover"), t.css("-moz-background-size", "cover"), t.css("-o-background-size", "cover"), t.css("background-size", "cover"), t.css("background-repeat", "no-repeat"), t.css("background-position", "center"), h.append(i), h.append(t), g(i, a[0]), a.length > 1 && setTimeout(function() {
                d(i, t, 0, a)
            }, l.duration)
        }

        function g(e, a) {
            e.css("background-image", "url(" + a + ")"), e.css("filter", "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + a + "', sizingMethod='scale')"), e.css("-ms-filter", "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + a + "', sizingMethod='scale')")
        }

        function d(e, a, o, r) {
            var i = o + 1;
            i == r.length && (i = 0), g(a, r[i]);
            var t = "slide" == l.slideshowEffect ? "slideUp" : "fadeOut";
            e[t](l.slideshowSpeed, function() {
                g(e, r[i]), e.show(), setTimeout(function() {
                    d(e, a, i, r)
                }, l.duration)
            })
        }
        var l = {
            effect: "particles",
            duration: 5e3,
            slides: [],
            slideshowEffect: "fade",
            slideshowSpeed: 2e3,
            patternImage: null,
            patternAnimationX: "left",
            patternAnimationY: "none",
            gradientType: "radial",
            gradientColors: ["#9CC4E2", "#004799"],
            gradientAnimateColors: ["#666666", "#333333"],
            gradientLoop: !0,
            gradientEase: "linear",
            video: "youtube:3agk-1DohfA",
            mute: !0,
            ratio: "16/9",
            shape: "circle",
            colors: ["#FFFFFF", "255, 99, 71", "19, 19, 19"],
            border: !1,
            borderColors: ["#FF0000", "#00FF00", "#0000FF"],
            minScale: .5,
            maxScale: 1,
            baseSize: 30,
            minOpacity: .1,
            maxOpacity: 1,
            minBorderOpacity: .1,
            maxBorderOpacity: 1,
            minSpeedX: -1,
            maxSpeedX: 1,
            minSpeedY: -1,
            maxSpeedY: 1,
            minRotateSpeed: .05,
            maxRotateSpeed: .1,
            numParticles: 75,
            overlay: "dots",
            baseColor: "#333333",
            disableMobile: !1,
            wrapNeighbours: !1,
            relativeNeighbours: !1
        };
        e.extend(!0, l, a), l && l.colors && e(l.colors).each(function(a, o) {
            if ("#" == o.substr(0, 1)) {
                var r = e.hexToRgb(o);
                l.colors[a] = r.r + ", " + r.g + ", " + r.b
            }
        }), l && l.borderColors && e(l.borderColors).each(function(a, o) {
            if ("#" == o.substr(0, 1)) {
                var r = e.hexToRgb(o);
                l.borderColors[a] = r.r + ", " + r.g + ", " + r.b
            }
        }), l && l.gradientColors && e(l.gradientColors).each(function(a, o) {
            if ("#" == o.substr(0, 1)) {
                var r = e.hexToRgb(o);
                l.gradientColors[a] = [r.r, r.g, r.b]
            }
        }), l && l.gradientAnimateColors && e(l.gradientAnimateColors).each(function(a, o) {
            if ("#" == o.substr(0, 1)) {
                var r = e.hexToRgb(o);
                l.gradientAnimateColors[a] = [r.r, r.g, r.b]
            }
        });
        var A = !1;
        l.disableMobile && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (A = !0);
        var h = e('<div class="easy-background" /> ');
        if (h.css("width", "100%"), h.css("height", "100%"), this.is("body") ? h.css("position", "fixed") : (h.css("position", "absolute"), this.css("overflow", "hidden")), h.css("top", "0"), h.css("left", "0"), l.baseColor && h.css("background-color", l.baseColor), h.css("z-index", "1"), this.append(h), l.overlay) {
            var p = e("<div /> ");
            switch (p.css("width", "100%"), p.css("height", "100%"), p.css("position", "absolute"), p.css("top", "0"), p.css("left", "0"), p.css("z-index", "10"), l.overlay) {
                case "waves":
                    p.css("background-image", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAPklEQVQYV2NkwAT/gUKM6MLoAjBFGIqRFaJLovBhCrFaB7QeLg5SiEsRzJlgeQxHY/EcSOg/sQoxgwGHiQwA+f4KCL3Y/AQAAAAASUVORK5CYII=)");
                    break;
                case "horizontal-lines":
                    p.css("background-image", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAFCAYAAACJmvbYAAAAF0lEQVQIW2NcvHjxfwYcgBGXBEicRpIAn+0C7kufXBgAAAAASUVORK5CYII=)");
                    break;
                case "vertical-lines":
                    p.css("background-image", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAAF0lEQVQIW2NcvHjx/9jYWEYGJMA4oIIAzrccCBIzFHAAAAAASUVORK5CYII=)");
                    break;
                case "simple-grid":
                    p.css("background-image", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAHElEQVQIW2NcvHjxfwYcgBEkGRsby4hNftBJAgB4hhrww0B+QQAAAABJRU5ErkJggg==)");
                    break;
                case "grid":
                    p.css("background-image", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaklEQVQYV2NkYGAwBuKzQAwC9UA8C4ifQ/n/GaEMkCIfIG6E8iWB9DMgZoQpAOncgmTSfyBbCmQSSAFIEqYTZNIZkE6YSSAGyDi4nUC2CbKb4CphdqK7CaYAbieSb8BuAikASSKblIbsJgCKXBfTNjWx1AAAAABJRU5ErkJggg==)");
                    break;
                case "dots":
                    p.css("background-image", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGklEQVQIW2NkYGD4D8SMQAwGcAY2AbBKDBUAVuYCBQPd34sAAAAASUVORK5CYII=)");
                    break;
                case "diagonal-lines":
                    p.css("background-image", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAI0lEQVQIW2NkwAT/GdHE/gP5jMiCYAGQIpggXAAmiCIAEgQAAE4FBbECyZcAAAAASUVORK5CYII=)")
            }
            if ("image" == l.overlay.substr(0, 5)) {
                var b = l.overlay.split(":");
                b.shift(), b = b.join(":"), p.css("background-image", "url(" + b + ")")
            }
            h.append(p)
        }
        if (l.wrapNeighbours ? h.siblings(":not(script)").wrap('<div class="easy-background-wrap" style="position:relative; z-index: 2;"></div>') : l.relativeNeighbours && h.siblings(":not(script)").each(function(a, o) {
                o = e(o), "static" == o.css("position") && o.css({
                    position: "relative",
                    "z-index": "2"
                })
            }), !A) switch (l.effect) {
            case "particles":
                o().easyBackgroundParticles(l);
                break;
            case "video":
                r(l.video);
                break;
            case "gradient":
                if (l.gradientAnimateColors) t(l.gradientColors, l.gradientAnimateColors);
                else {
                    var u = e.rgbToHex(l.gradientColors[0][0], l.gradientColors[0][1], l.gradientColors[0][2]),
                        m = e.rgbToHex(l.gradientColors[1][0], l.gradientColors[1][1], l.gradientColors[1][2]);
                    i(u, m)
                }
                break;
            case "pattern":
                s(l.patternImage);
                break;
            case "slideshow":
                c(l.slides)
        }
    }
}(jQuery);
