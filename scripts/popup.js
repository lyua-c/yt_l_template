"use strict";

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
    }
  }
  return function (t, n, a) {
    return n && e(t.prototype, n), a && e(t, a), t
  }
}();
! function (e) {
  function t(a) {
    if (n[a]) return n[a].exports;
    var i = n[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports
  }
  var n = {};
  return t.m = e, t.c = n, t.d = function (e, n, a) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: a
    })
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"]
    } : function () {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "", t(t.s = 8)
}({
  8: function (e, t, n) {
    ! function () {
      var e = function () {
        function e() {
          var t = this;
          _classCallCheck(this, e), window.addEventListener("load", function (e) {
            t.start()
          })
        }
        return _createClass(e, [{
          key: "start",
          value: function () {
            this.assignEventHandlers(), this.paint()
          }
        }, {
          key: "assignEventHandlers",
          value: function () {
            var e = this;
            document.getElementById("fetch").addEventListener("click", function (t) {
              e.onClickFetchBtn(t)
            }), document.getElementById("option").addEventListener("click", function (e) {
              chrome.tabs.create({
                url: "/options.html"
              })
            })
          }
        }, {
          key: "showMessage",
          value: function (e, t) {
            t || (t = "info");
            var n = document.getElementById("message");
            n.innerHTML = e, n.className = t;
            var a = document.getElementById("message-panel");
            a.style.display = "block", setTimeout(function () {
              a.className += " fadeout", setTimeout(function () {
                a.style.display = "none", a.className = ""
              }, 500)
            }, 3e3)
          }
        }, {
          key: "onClickFetchBtn",
          value: function (e) {
            var t = this;
            chrome.tabs.executeScript(null, {
              file: "scripts/fetch.js"
            }, function (e) {
              if (e && 0 < e.length) {
                var n = e[0];
                chrome.runtime.getBackgroundPage(function (e) {
                  var a = e.bg;
                  a.saveTemplate(n.title, n.title, n.body, n.videotag), t.showMessage("テンプレートとして保存しました"), t.repaint()
                })
              } else e && "" == e.title ? t.showMessage("タイトルを設定してください", "error") : t.showMessage("保存に失敗しました", "error")
            })
          }
        }, {
          key: "onClickTitleLink",
          value: function (e) {
            var t = this,
              n = t.getAttribute("data-id");
            chrome.tabs.query({
              active: !0,
              lastFocusedWindow: !0
            }, function (e) {
              var t = e[0];
              chrome.runtime.getBackgroundPage(function (e) {
                var a = e.bg;
                a.getTemplateById(n, function (e) {
                  chrome.tabs.executeScript(t.id, {
                    file: "scripts/apply.js"
                  }, function () {
                    chrome.tabs.sendMessage(t.id, {
                      args: {
                        title: e.title,
                        body: e.body,
                        videotag: e.videotag
                      }
                    })
                  })
                })
              })
            })
          }
        }, {
          key: "paint",
          value: function () {
            var e = this;
            chrome.runtime.getBackgroundPage(function (t) {
              var n = t.bg;
              n.getAllTemplates(function (t) {
                var n, a = document.getElementById("list");
                Object.keys(t).forEach(function (i) {
                  var r = t[i];
                  n = document.getElementById("template").cloneNode(!0), n.getElementsByClassName("name")[0].innerHTML = r.name, n.id = "", n.setAttribute("data-id", r.id), n.addEventListener("click", function (t) {
                    e.onClickTitleLink.call(this, t)
                  }), a.appendChild(n)
                })
              })
            })
          }
        }, {
          key: "repaint",
          value: function () {
            document.getElementById("list").innerHTML = "", this.paint()
          }
        }, {
          key: "bindApply",
          value: function () {
            var e = this;
            Array.prototype.forEach.call(document.getElementsByClassName("name"), function (t) {
              t.addEventListener("click", function (n) {
                e.onClickTitleLink.call(t, n)
              })
            })
          }
        }]), e
      }();
      new e
    }()
  }
});