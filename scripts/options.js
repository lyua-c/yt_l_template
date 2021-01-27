"use strict";

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  return function (t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t
  }
}();
! function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
  }
  var n = {};
  return t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: r
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
  }, t.p = "", t(t.s = 7)
}({
  7: function (e, t, n) {
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
            this.paint(), this.assignEventHandlers()
          }
        }, {
          key: "assignEventHandlers",
          value: function () {
            var e = this;
            document.getElementById("delete").addEventListener("click", function () {
              e.onClickDeleteBtn()
            })
            document.getElementById("edit").addEventListener("click", function () {
              e.onClickEditBtn()
            })
          }
        }, {
          key: "onClickDeleteBtn",
          value: function () {
            var e = this;
            if (window.confirm("delete this template?")) {
              var t = document.getElementById("preview").getAttribute("data-id");
              chrome.runtime.getBackgroundPage(function (n) {
                var r = n.bg;
                r.deleteTemplate(t, function (t) {
                  t && (e.clear(), e.paint())
                })
              })
            }
          }
        }, {
          key: "onClickEditBtn",
          value: function () {
            var e = this;
              var t = document.getElementById("preview").getAttribute("data-id");
              var title = document.getElementById("title").value;
              var body = document.getElementById("body").value;
              var videotags = document.getElementById("videotags").value;
              chrome.runtime.getBackgroundPage(function (n) {
                var r = n.bg;
                r.deleteTemplate(t, function (t) {
                  t && (r.saveTemplate(title,title,body,videotags),e.clear(), e.paint())
                })
              })
          }
        }, {
          key: "paintPreview",
          value: function (e) {
                 document.getElementById("title").value = e.title,
            	 document.getElementById("body").value = e.body,
            	 document.getElementById("preview").setAttribute("data-id", e.id);
            	if (e.videotag !== undefined) {
            	  document.getElementById("videotags").value = e.videotag;
                } else {
            	  document.getElementById("videotags").value = "";
                }
          }
        }, {
          key: "paint",
          value: function () {
            self = this, chrome.runtime.getBackgroundPage(function (e) {
              var t = e.bg;
              t.getAllTemplates(function (e) {
                var t = document.querySelector("#list ul"),
                  n = document.getElementById("template-list");
                Object.keys(e).forEach(function (r, i, a) {
                  var u = e[r],
                    o = n.content.querySelector("a");
                  o.setAttribute("data-id", u.id), o.innerHTML = u.title;
                  var l = document.importNode(n.content, !0);
                  t.appendChild(l);
                  var c = t.lastElementChild.querySelector("a");
                  c.addEventListener("click", function (e) {
                    var t = this.getAttribute("data-id");
                    return self.paintPreviewByTemplateId(t), !1
                  })
                })
              })
            })
          }
        }, {
          key: "paintPreviewByTemplateId",
          value: function (e) {
            var t = this;
            chrome.runtime.getBackgroundPage(function (n) {
              var r = n.bg;
              r.getTemplateById(e, function (e) {
                t.paintPreview(e)
              })
            })
          }
        }, {
          key: "clear",
          value: function () {
            document.querySelector("#list ul").innerHTML = "", document.getElementById("preview").setAttribute("data-id", ""), document.getElementById("title").value = "", document.getElementById("body").value = "", document.getElementById("videotags").value = ""
          }
        }]), e
      }();
      new e
    }()
  }
});