// Automatically generated file.  Do not edit!

"use strict";
var b,
  g = { Vc: {} };
g.Vc.rw = !1;
g.Vc.register = function (a) {
  if (g.Vc.rw) throw Error("CSS already injected");
  Array.prototype.push.apply(g.Vc.yt, a);
  a.length = 0;
};
g.Vc.Jk = function (a, c) {
  if (!g.Vc.rw) {
    g.Vc.rw = !0;
    var d = g.Vc.yt.join("\n");
    g.Vc.yt.length = 0;
    a &&
      ((a = c.replace(/[\\/]$/, "")),
      (d = d.replace(/<<<PATH>>>/g, a)),
      (a = document.createElement("style")),
      (a.id = "blockly-common-style"),
      (d = document.createTextNode(d)),
      a.appendChild(d),
      document.head.insertBefore(a, document.head.firstChild));
  }
};
g.Vc.yt = [
  ".blocklySvg {",
  "background-color: #fff;",
  "outline: none;",
  "overflow: hidden;",
  "position: absolute;",
  "display: block;",
  "}",
  ".blocklyWidgetDiv {",
  "display: none;",
  "position: absolute;",
  "z-index: 99999;",
  "}",
  ".injectionDiv {",
  "height: 100%;",
  "position: relative;",
  "overflow: hidden;",
  "touch-action: none;",
  "}",
  ".blocklyNonSelectable {",
  "user-select: none;",
  "-ms-user-select: none;",
  "-webkit-user-select: none;",
  "}",
  ".blocklyWsDragSurface {",
  "display: none;",
  "position: absolute;",
  "top: 0;",
  "left: 0;",
  "}",
  ".blocklyWsDragSurface.blocklyOverflowVisible {",
  "overflow: visible;",
  "}",
  ".blocklyBlockDragSurface {",
  "display: none;",
  "position: absolute;",
  "top: 0;",
  "left: 0;",
  "right: 0;",
  "bottom: 0;",
  "overflow: visible !important;",
  "z-index: 50;",
  "}",
  ".blocklyBlockCanvas.blocklyCanvasTransitioning,",
  ".blocklyBubbleCanvas.blocklyCanvasTransitioning {",
  "transition: transform .5s;",
  "}",
  ".blocklyTooltipDiv {",
  "background-color: #ffffc7;",
  "border: 1px solid #ddc;",
  "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);",
  "color: #000;",
  "display: none;",
  "font: 9pt sans-serif;",
  "opacity: .9;",
  "padding: 2px;",
  "position: absolute;",
  "z-index: 100000;",
  "}",
  ".blocklyDropDownDiv {",
  "position: absolute;",
  "left: 0;",
  "top: 0;",
  "z-index: 1000;",
  "display: none;",
  "border: 1px solid;",
  "border-color: #dadce0;",
  "background-color: #fff;",
  "border-radius: 2px;",
  "padding: 4px;",
  "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownDiv.blocklyFocused {",
  "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownContent {",
  "max-height: 300px;",
  "overflow: auto;",
  "overflow-x: hidden;",
  "position: relative;",
  "}",
  ".blocklyDropDownArrow {",
  "position: absolute;",
  "left: 0;",
  "top: 0;",
  "width: 16px;",
  "height: 16px;",
  "z-index: -1;",
  "background-color: inherit;",
  "border-color: inherit;",
  "}",
  ".blocklyDropDownButton {",
  "display: inline-block;",
  "float: left;",
  "padding: 0;",
  "margin: 4px;",
  "border-radius: 4px;",
  "outline: none;",
  "border: 1px solid;",
  "transition: box-shadow .1s;",
  "cursor: pointer;",
  "}",
  ".blocklyArrowTop {",
  "border-top: 1px solid;",
  "border-left: 1px solid;",
  "border-top-left-radius: 4px;",
  "border-color: inherit;",
  "}",
  ".blocklyArrowBottom {",
  "border-bottom: 1px solid;",
  "border-right: 1px solid;",
  "border-bottom-right-radius: 4px;",
  "border-color: inherit;",
  "}",
  ".blocklyResizeSE {",
  "cursor: se-resize;",
  "fill: #aaa;",
  "}",
  ".blocklyResizeSW {",
  "cursor: sw-resize;",
  "fill: #aaa;",
  "}",
  ".blocklyResizeLine {",
  "stroke: #515A5A;",
  "stroke-width: 1;",
  "}",
  ".blocklyHighlightedConnectionPath {",
  "fill: none;",
  "stroke: #fc3;",
  "stroke-width: 4px;",
  "}",
  ".blocklyPathLight {",
  "fill: none;",
  "stroke-linecap: round;",
  "stroke-width: 1;",
  "}",
  ".blocklySelected>.blocklyPathLight {",
  "display: none;",
  "}",
  ".blocklyDraggable {",
  'cursor: url("<<<PATH>>>/handopen.cur"), auto;',
  "cursor: grab;",
  "cursor: -webkit-grab;",
  "}",
  ".blocklyDragging {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyDraggable:active {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyBlockDragSurface .blocklyDraggable {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyDragging.blocklyDraggingDelete {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyDragging>.blocklyPath,",
  ".blocklyDragging>.blocklyPathLight {",
  "fill-opacity: .8;",
  "stroke-opacity: .8;",
  "}",
  ".blocklyDragging>.blocklyPathDark {",
  "display: none;",
  "}",
  ".blocklyDisabled>.blocklyPath {",
  "fill-opacity: .5;",
  "stroke-opacity: .5;",
  "}",
  ".blocklyDisabled>.blocklyPathLight,",
  ".blocklyDisabled>.blocklyPathDark {",
  "display: none;",
  "}",
  ".blocklyInsertionMarker>.blocklyPath,",
  ".blocklyInsertionMarker>.blocklyPathLight,",
  ".blocklyInsertionMarker>.blocklyPathDark {",
  "fill-opacity: .2;",
  "stroke: none;",
  "}",
  ".blocklyMultilineText {",
  "font-family: monospace;",
  "}",
  ".blocklyNonEditableText>text {",
  "pointer-events: none;",
  "}",
  ".blocklyFlyout {",
  "position: absolute;",
  "z-index: 20;",
  "}",
  ".blocklyText text {",
  "cursor: default;",
  "}",
  ".blocklySvg text,",
  ".blocklyBlockDragSurface text {",
  "user-select: none;",
  "-ms-user-select: none;",
  "-webkit-user-select: none;",
  "cursor: inherit;",
  "}",
  ".blocklyHidden {",
  "display: none;",
  "}",
  ".blocklyFieldDropdown:not(.blocklyHidden) {",
  "display: block;",
  "}",
  ".blocklyIconGroup {",
  "cursor: default;",
  "}",
  ".blocklyIconGroup:not(:hover),",
  ".blocklyIconGroupReadonly {",
  "opacity: .6;",
  "}",
  ".blocklyIconShape {",
  "fill: #00f;",
  "stroke: #fff;",
  "stroke-width: 1px;",
  "}",
  ".blocklyIconSymbol {",
  "fill: #fff;",
  "}",
  ".blocklyMinimalBody {",
  "margin: 0;",
  "padding: 0;",
  "}",
  ".blocklyHtmlInput {",
  "border: none;",
  "border-radius: 4px;",
  "height: 100%;",
  "margin: 0;",
  "outline: none;",
  "padding: 0;",
  "width: 100%;",
  "text-align: center;",
  "display: block;",
  "box-sizing: border-box;",
  "}",
  ".blocklyHtmlInput::-ms-clear {",
  "display: none;",
  "}",
  ".blocklyMainBackground {",
  "stroke-width: 1;",
  "stroke: #c6c6c6;",
  "}",
  ".blocklyMutatorBackground {",
  "fill: #fff;",
  "stroke: #ddd;",
  "stroke-width: 1;",
  "}",
  ".blocklyFlyoutBackground {",
  "fill: #ddd;",
  "fill-opacity: .8;",
  "}",
  ".blocklyMainWorkspaceScrollbar {",
  "z-index: 20;",
  "}",
  ".blocklyFlyoutScrollbar {",
  "z-index: 30;",
  "}",
  ".blocklyScrollbarHorizontal,",
  ".blocklyScrollbarVertical {",
  "position: absolute;",
  "outline: none;",
  "}",
  ".blocklyScrollbarBackground {",
  "opacity: 0;",
  "}",
  ".blocklyScrollbarHandle {",
  "fill: #ccc;",
  "}",
  ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
  ".blocklyScrollbarHandle:hover {",
  "fill: #bbb;",
  "}",
  ".blocklyFlyout .blocklyScrollbarHandle {",
  "fill: #bbb;",
  "}",
  ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
  ".blocklyFlyout .blocklyScrollbarHandle:hover {",
  "fill: #aaa;",
  "}",
  ".blocklyInvalidInput {",
  "background: #faa;",
  "}",
  ".blocklyVerticalMarker {",
  "stroke-width: 3px;",
  "fill: rgba(255,255,255,.5);",
  "pointer-events: none;",
  "}",
  ".blocklyComputeCanvas {",
  "position: absolute;",
  "width: 0;",
  "height: 0;",
  "}",
  ".blocklyNoPointerEvents {",
  "pointer-events: none;",
  "}",
  ".blocklyContextMenu {",
  "border-radius: 4px;",
  "max-height: 100%;",
  "}",
  ".blocklyDropdownMenu {",
  "border-radius: 2px;",
  "padding: 0 !important;",
  "}",
  ".blocklyDropdownMenu .blocklyMenuItem {",
  "padding-left: 28px;",
  "}",
  ".blocklyDropdownMenu .blocklyMenuItemRtl {",
  "padding-left: 5px;",
  "padding-right: 28px;",
  "}",
  ".blocklyWidgetDiv .blocklyMenu {",
  "background: #fff;",
  "border: 1px solid transparent;",
  "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);",
  "font: normal 13px Arial, sans-serif;",
  "margin: 0;",
  "outline: none;",
  "padding: 4px 0;",
  "position: absolute;",
  "overflow-y: auto;",
  "overflow-x: hidden;",
  "max-height: 100%;",
  "z-index: 20000;",
  "}",
  ".blocklyWidgetDiv .blocklyMenu.blocklyFocused {",
  "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownDiv .blocklyMenu {",
  "background: inherit;",
  "border: inherit;",
  'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;',
  "outline: none;",
  "position: relative;",
  "z-index: 20000;",
  "}",
  ".blocklyMenuItem {",
  "border: none;",
  "color: #000;",
  "cursor: pointer;",
  "list-style: none;",
  "margin: 0;",
  "min-width: 7em;",
  "padding: 6px 15px;",
  "white-space: nowrap;",
  "}",
  ".blocklyMenuItemDisabled {",
  "color: #ccc;",
  "cursor: inherit;",
  "}",
  ".blocklyMenuItemHighlight {",
  "background-color: rgba(0,0,0,.1);",
  "}",
  ".blocklyMenuItemCheckbox {",
  "height: 16px;",
  "position: absolute;",
  "width: 16px;",
  "}",
  ".blocklyMenuItemSelected .blocklyMenuItemCheckbox {",
  "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;",
  "float: left;",
  "margin-left: -24px;",
  "position: static;",
  "}",
  ".blocklyMenuItemRtl .blocklyMenuItemCheckbox {",
  "float: right;",
  "margin-right: -24px;",
  "}",
];
g.g = {};
g.g.global = (function () {
  return "object" === typeof self
    ? self
    : "object" === typeof window
    ? window
    : "object" === typeof global
    ? global
    : this;
})();
g.i = {};
g.g.global.Blockly || (g.g.global.Blockly = {});
g.g.global.Blockly.Msg || (g.g.global.Blockly.Msg = g.i);
g.jm = {};
g.xz = 40;
g.Mz = 125;
g.UE = 5;
g.sF = 10;
g.Rd = 28;
g.EE = g.Rd;
g.HE = 8;
g.Yp = 250;
g.st = 10;
g.BE = 30;
g.bG = 750;
g.LG = 100;
g.VE = !0;
g.FF = 0.45;
g.GF = 0.65;
g.Sd = { width: 96, height: 124, url: "sprites.png" };
g.ob = 1;
g.Pf = 2;
g.Cb = 3;
g.Qf = 4;
g.rh = 5;
g.jt = -1;
g.ht = 0;
g.yl = 1;
g.lM = 0;
g.mM = 1;
g.jM = 1;
g.kM = 2;
g.Nl = [];
g.Nl[g.ob] = g.Pf;
g.Nl[g.Pf] = g.ob;
g.Nl[g.Cb] = g.Qf;
g.Nl[g.Qf] = g.Cb;
g.gk = 0;
g.In = 1;
g.De = 2;
g.Wl = 3;
g.Vy = null;
g.Ct = 1;
g.Wy = 2;
g.zc = "VARIABLE";
g.dH = "VARIABLE_DYNAMIC";
g.Dn = "PROCEDURE";
g.Vz = "RENAME_VARIABLE_ID";
g.Xy = "DELETE_VARIABLE_ID";
g.g.Fb = {};
g.g.Fb.parse = function (a) {
  a = String(a).toLowerCase().trim();
  var c = g.g.Fb.names[a];
  if (c) return c;
  c = "0x" == a.substring(0, 2) ? "#" + a.substring(2) : a;
  c = "#" == c[0] ? c : "#" + c;
  if (/^#[0-9a-f]{6}$/.test(c)) return c;
  if (/^#[0-9a-f]{3}$/.test(c))
    return ["#", c[1], c[1], c[2], c[2], c[3], c[3]].join("");
  var d = a.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  return d &&
    ((a = Number(d[1])),
    (c = Number(d[2])),
    (d = Number(d[3])),
    0 <= a && 256 > a && 0 <= c && 256 > c && 0 <= d && 256 > d)
    ? g.g.Fb.Rx(a, c, d)
    : null;
};
g.g.Fb.Rx = function (a, c, d) {
  c = (a << 16) | (c << 8) | d;
  return 16 > a
    ? "#" + (16777216 | c).toString(16).substr(1)
    : "#" + c.toString(16);
};
g.g.Fb.kC = function (a) {
  a = g.g.Fb.parse(a);
  if (!a) return [0, 0, 0];
  a = parseInt(a.substr(1), 16);
  return [a >> 16, (a >> 8) & 255, a & 255];
};
g.g.Fb.oC = function (a) {
  var c = g.FF,
    d = 255 * g.GF,
    e = 0,
    f = 0,
    h = 0;
  if (0 == c) h = f = e = d;
  else {
    var k = Math.floor(a / 60),
      l = a / 60 - k;
    a = d * (1 - c);
    var m = d * (1 - c * l);
    c = d * (1 - c * (1 - l));
    switch (k) {
      case 1:
        e = m;
        f = d;
        h = a;
        break;
      case 2:
        e = a;
        f = d;
        h = c;
        break;
      case 3:
        e = a;
        f = m;
        h = d;
        break;
      case 4:
        e = c;
        f = a;
        h = d;
        break;
      case 5:
        e = d;
        f = a;
        h = m;
        break;
      case 6:
      case 0:
        (e = d), (f = c), (h = a);
    }
  }
  return g.g.Fb.Rx(Math.floor(e), Math.floor(f), Math.floor(h));
};
g.g.Fb.Ku = function (a, c, d) {
  a = g.g.Fb.parse(a);
  if (!a) return null;
  c = g.g.Fb.parse(c);
  if (!c) return null;
  a = g.g.Fb.kC(a);
  c = g.g.Fb.kC(c);
  return g.g.Fb.Rx(
    Math.round(c[0] + d * (a[0] - c[0])),
    Math.round(c[1] + d * (a[1] - c[1])),
    Math.round(c[2] + d * (a[2] - c[2]))
  );
};
g.g.Fb.names = {
  aqua: "#00ffff",
  black: "#000000",
  blue: "#0000ff",
  fuchsia: "#ff00ff",
  gray: "#808080",
  green: "#008000",
  lime: "#00ff00",
  maroon: "#800000",
  navy: "#000080",
  olive: "#808000",
  purple: "#800080",
  red: "#ff0000",
  silver: "#c0c0c0",
  teal: "#008080",
  white: "#ffffff",
  yellow: "#ffff00",
};
g.g.T = function (a, c) {
  this.x = a;
  this.y = c;
};
g.g.T.sf = function (a, c) {
  return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1;
};
g.g.T.io = function (a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
};
g.g.T.wJ = function (a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
g.g.T.ho = function (a, c) {
  return new g.g.T(a.x - c.x, a.y - c.y);
};
g.g.T.sum = function (a, c) {
  return new g.g.T(a.x + c.x, a.y + c.y);
};
g.g.T.prototype.scale = function (a) {
  this.x *= a;
  this.y *= a;
  return this;
};
g.g.T.prototype.translate = function (a, c) {
  this.x += a;
  this.y += c;
  return this;
};
g.g.Rect = function (a, c, d, e) {
  this.top = a;
  this.bottom = c;
  this.left = d;
  this.right = e;
};
g.g.Rect.prototype.contains = function (a, c) {
  return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom;
};
g.g.tb = {};
g.g.tb.startsWith = function (a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.g.tb.$x = function (a) {
  return a.length
    ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d;
      }).length
    : 0;
};
g.g.tb.GH = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.tb.$x(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return d;
  return c;
};
g.g.tb.HH = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.tb.$x(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return d;
  return c;
};
g.g.tb.dE = function (a, c) {
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) a[d] = g.g.tb.SL(a[d], c);
  return a.join("\n");
};
g.g.tb.SL = function (a, c) {
  if (a.length <= c) return a;
  for (var d = a.trim().split(/\s+/), e = 0; e < d.length; e++)
    d[e].length > c && (c = d[e].length);
  e = -Infinity;
  var f = 1;
  do {
    var h = e;
    var k = a;
    a = [];
    var l = d.length / f,
      m = 1;
    for (e = 0; e < d.length - 1; e++)
      m < (e + 1.5) / l ? (m++, (a[e] = !0)) : (a[e] = !1);
    a = g.g.tb.eE(d, a, c);
    e = g.g.tb.zy(d, a, c);
    a = g.g.tb.TL(d, a);
    f++;
  } while (e > h);
  return k;
};
g.g.tb.zy = function (a, c, d) {
  for (var e = [0], f = [], h = 0; h < a.length; h++)
    (e[e.length - 1] += a[h].length),
      !0 === c[h]
        ? (e.push(0), f.push(a[h].charAt(a[h].length - 1)))
        : !1 === c[h] && e[e.length - 1]++;
  a = Math.max.apply(Math, e);
  for (h = c = 0; h < e.length; h++)
    (c -= 2 * Math.pow(Math.abs(d - e[h]), 1.5)),
      (c -= Math.pow(a - e[h], 1.5)),
      -1 != ".?!".indexOf(f[h])
        ? (c += d / 3)
        : -1 != ",;)]}".indexOf(f[h]) && (c += d / 4);
  1 < e.length && e[e.length - 1] <= e[e.length - 2] && (c += 0.5);
  return c;
};
g.g.tb.eE = function (a, c, d) {
  for (var e = g.g.tb.zy(a, c, d), f, h = 0; h < c.length - 1; h++)
    if (c[h] != c[h + 1]) {
      var k = [].concat(c);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var l = g.g.tb.zy(a, k, d);
      l > e && ((e = l), (f = k));
    }
  return f ? g.g.tb.eE(a, f, d) : c;
};
g.g.tb.TL = function (a, c) {
  for (var d = [], e = 0; e < a.length; e++)
    d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
  return d.join("");
};
g.g.ff = function (a, c) {
  this.width = a;
  this.height = c;
};
g.g.ff.sf = function (a, c) {
  return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1;
};
g.g.style = {};
g.g.style.Xh = function (a) {
  if ("none" != g.g.style.ZB(a, "display")) return g.g.style.XB(a);
  var c = a.style,
    d = c.display,
    e = c.visibility,
    f = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  var h = a.offsetWidth;
  a = a.offsetHeight;
  c.display = d;
  c.position = f;
  c.visibility = e;
  return new g.g.ff(h, a);
};
g.g.style.XB = function (a) {
  return new g.g.ff(a.offsetWidth, a.offsetHeight);
};
g.g.style.ZB = function (a, c) {
  return (
    g.g.style.getComputedStyle(a, c) ||
    g.g.style.zI(a, c) ||
    (a.style && a.style[c])
  );
};
g.g.style.getComputedStyle = function (a, c) {
  return document.defaultView &&
    document.defaultView.getComputedStyle &&
    (a = document.defaultView.getComputedStyle(a, null))
    ? a[c] || a.getPropertyValue(c) || ""
    : "";
};
g.g.style.zI = function (a, c) {
  return a.currentStyle ? a.currentStyle[c] : null;
};
g.g.style.Ak = function (a) {
  var c = new g.g.T(0, 0);
  a = a.getBoundingClientRect();
  var d = document.documentElement;
  d = new g.g.T(
    window.pageXOffset || d.scrollLeft,
    window.pageYOffset || d.scrollTop
  );
  c.x = a.left + d.x;
  c.y = a.top + d.y;
  return c;
};
g.g.style.NI = function () {
  var a = document.body,
    c = document.documentElement;
  return new g.g.T(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop);
};
g.g.style.ZO = function (a, c) {
  a.style.display = c ? "" : "none";
};
g.g.style.LO = function (a) {
  return "rtl" == g.g.style.ZB(a, "direction");
};
g.g.style.wI = function (a) {
  var c = g.g.style.getComputedStyle(a, "borderLeftWidth"),
    d = g.g.style.getComputedStyle(a, "borderRightWidth"),
    e = g.g.style.getComputedStyle(a, "borderTopWidth");
  a = g.g.style.getComputedStyle(a, "borderBottomWidth");
  return {
    top: parseFloat(e),
    right: parseFloat(d),
    bottom: parseFloat(a),
    left: parseFloat(c),
  };
};
g.g.style.aL = function (a, c) {
  a = g.g.style.BI(a, c);
  c.scrollLeft = a.x;
  c.scrollTop = a.y;
};
g.g.style.BI = function (a, c) {
  var d = g.g.style.Ak(a),
    e = g.g.style.Ak(c),
    f = g.g.style.wI(c),
    h = d.x - e.x - f.left;
  d = d.y - e.y - f.top;
  a = g.g.style.XB(a);
  e = c.clientHeight - a.height;
  f = c.scrollLeft;
  var k = c.scrollTop;
  f += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
  k += Math.min(d, Math.max(d - e, 0));
  return new g.g.T(f, k);
};
g.g.userAgent = {};
(function (a) {
  function c(e) {
    return -1 != d.indexOf(e.toUpperCase());
  }
  g.g.userAgent.raw = a;
  var d = g.g.userAgent.raw.toUpperCase();
  g.g.userAgent.bf = c("Trident") || c("MSIE");
  g.g.userAgent.Uj = c("Edge");
  g.g.userAgent.QF = c("JavaFX");
  g.g.userAgent.bM = (c("Chrome") || c("CriOS")) && !g.g.userAgent.Uj;
  g.g.userAgent.sA = c("WebKit") && !g.g.userAgent.Uj;
  g.g.userAgent.zF =
    c("Gecko") && !g.g.userAgent.sA && !g.g.userAgent.bf && !g.g.userAgent.Uj;
  g.g.userAgent.Oj = c("Android");
  g.g.userAgent.sh = c("iPad");
  g.g.userAgent.uz = c("iPod");
  g.g.userAgent.Ot = c("iPhone") && !g.g.userAgent.sh && !g.g.userAgent.uz;
  g.g.userAgent.eG = c("Macintosh");
  g.g.userAgent.UG =
    g.g.userAgent.sh || (g.g.userAgent.Oj && !c("Mobile")) || c("Silk");
  g.g.userAgent.Dz =
    !g.g.userAgent.UG &&
    (g.g.userAgent.uz || g.g.userAgent.Ot || g.g.userAgent.Oj || c("IEMobile"));
})((g.g.global.navigator && g.g.global.navigator.userAgent) || "");
g.g.OJ = function (a) {
  a.preventDefault();
  a.stopPropagation();
};
g.g.Wr = function (a) {
  return (
    "textarea" == a.target.type ||
    "text" == a.target.type ||
    "number" == a.target.type ||
    "email" == a.target.type ||
    "password" == a.target.type ||
    "search" == a.target.type ||
    "tel" == a.target.type ||
    "url" == a.target.type ||
    a.target.isContentEditable ||
    (a.target.dataset && "true" == a.target.dataset.NO)
  );
};
g.g.tf = function (a) {
  var c = new g.g.T(0, 0),
    d = a.getAttribute("x");
  d && (c.x = parseInt(d, 10));
  if ((d = a.getAttribute("y"))) c.y = parseInt(d, 10);
  if ((d = (d = a.getAttribute("transform")) && d.match(g.g.tf.gH)))
    (c.x += Number(d[1])), d[3] && (c.y += Number(d[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    (a = a.match(g.g.tf.hH)) &&
    ((c.x += Number(a[1])), a[3] && (c.y += Number(a[3])));
  return c;
};
g.g.Bo = function (a) {
  for (var c = 0, d = 0; a; ) {
    var e = g.g.tf(a);
    c += e.x;
    d += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new g.g.T(c, d);
};
g.g.tf.gH = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
g.g.tf.hH = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
g.g.Rk = function (a) {
  return a.ctrlKey && g.g.userAgent.eG ? !0 : 2 == a.button;
};
g.g.Wo = function (a, c, d) {
  var e = c.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  d || (d = c.getScreenCTM().inverse());
  return e.matrixTransform(d);
};
g.g.WB = function (a) {
  switch (a.deltaMode) {
    default:
      return { x: a.deltaX, y: a.deltaY };
    case 1:
      return { x: a.deltaX * g.xz, y: a.deltaY * g.xz };
    case 2:
      return { x: a.deltaX * g.Mz, y: a.deltaY * g.Mz };
  }
};
g.g.xL = function (a) {
  return g.g.ny(a, !0);
};
g.g.xe = function (a) {
  if ("string" != typeof a) return a;
  a = g.g.ny(a, !1);
  return a.length ? String(a[0]) : "";
};
g.g.PA = function (a) {
  for (var c = g.i, d = a.match(/%{BKY_[A-Z]\w*}/gi), e = 0; e < d.length; e++)
    void 0 == c[d[e].toUpperCase().slice(6, -1)] &&
      console.warn("No message string for " + d[e] + " in " + a);
};
g.g.ny = function (a, c) {
  var d = [],
    e = a.split("");
  e.push("");
  var f = 0;
  a = [];
  for (var h = null, k = 0; k < e.length; k++) {
    var l = e[k];
    0 == f
      ? "%" == l
        ? ((l = a.join("")) && d.push(l), (a.length = 0), (f = 1))
        : a.push(l)
      : 1 == f
      ? "%" == l
        ? (a.push(l), (f = 0))
        : c && "0" <= l && "9" >= l
        ? ((f = 2), (h = l), (l = a.join("")) && d.push(l), (a.length = 0))
        : "{" == l
        ? (f = 3)
        : (a.push("%", l), (f = 0))
      : 2 == f
      ? "0" <= l && "9" >= l
        ? (h += l)
        : (d.push(parseInt(h, 10)), k--, (f = 0))
      : 3 == f &&
        ("" == l
          ? (a.splice(0, 0, "%{"), k--, (f = 0))
          : "}" != l
          ? a.push(l)
          : ((f = a.join("")),
            /[A-Z]\w*/i.test(f)
              ? ((l = f.toUpperCase()),
                (l = g.g.tb.startsWith(l, "BKY_") ? l.substring(4) : null) &&
                l in g.i
                  ? ((f = g.i[l]),
                    "string" == typeof f
                      ? Array.prototype.push.apply(d, g.g.ny(f, c))
                      : c
                      ? d.push(String(f))
                      : d.push(f))
                  : d.push("%{" + f + "}"))
              : d.push("%{" + f + "}"),
            (f = a.length = 0)));
  }
  (l = a.join("")) && d.push(l);
  c = [];
  for (k = a.length = 0; k < d.length; ++k)
    "string" == typeof d[k]
      ? a.push(d[k])
      : ((l = a.join("")) && c.push(l), (a.length = 0), c.push(d[k]));
  (l = a.join("")) && c.push(l);
  a.length = 0;
  return c;
};
g.g.Vh = function () {
  for (var a = g.g.Vh.ED.length, c = [], d = 0; 20 > d; d++)
    c[d] = g.g.Vh.ED.charAt(Math.random() * a);
  return c.join("");
};
g.g.Vh.ED =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.Lk = function () {
  if (void 0 !== g.g.Lk.Uu) return g.g.Lk.Uu;
  if (!g.g.global.getComputedStyle) return !1;
  var a = document.createElement("p"),
    c = "none",
    d = {
      webkitTransform: "-webkit-transform",
      OTransform: "-o-transform",
      msTransform: "-ms-transform",
      MozTransform: "-moz-transform",
      transform: "transform",
    };
  document.body.insertBefore(a, null);
  for (var e in d)
    if (void 0 !== a.style[e]) {
      a.style[e] = "translate3d(1px,1px,1px)";
      c = g.g.global.getComputedStyle(a);
      if (!c) return document.body.removeChild(a), !1;
      c = c.getPropertyValue(d[e]);
    }
  document.body.removeChild(a);
  g.g.Lk.Uu = "none" !== c;
  return g.g.Lk.Uu;
};
g.g.yD = function (a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" == document.readyState) a();
  else
    var c = setInterval(function () {
      "complete" == document.readyState && (clearInterval(c), a());
    }, 10);
};
g.g.MI = function () {
  var a = g.g.style.NI();
  return new g.g.Rect(
    a.y,
    document.documentElement.clientHeight + a.y,
    a.x,
    document.documentElement.clientWidth + a.x
  );
};
g.g.Pq = function (a, c) {
  c = a.indexOf(c);
  if (-1 == c) return !1;
  a.splice(c, 1);
  return !0;
};
g.g.FI = function () {
  var a = document.documentElement,
    c = window;
  return g.g.userAgent.bf && c.pageYOffset != a.scrollTop
    ? new g.g.T(a.scrollLeft, a.scrollTop)
    : new g.g.T(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop);
};
g.g.Uv = function (a, c) {
  var d = Object.create(null),
    e = q(a, !0);
  c && (a = t(a)) && ((a = e.indexOf(a)), e.splice(a, e.length - a));
  for (a = 0; (c = e[a]); a++) d[c.type] ? d[c.type]++ : (d[c.type] = 1);
  return d;
};
g.g.$K = function (a, c) {
  var d = c.x;
  c = c.y;
  var e = ca(a).getBoundingClientRect();
  d = new g.g.T(d - e.left, c - e.top);
  c = g.g.Bo(a.Bb);
  return g.g.T.ho(d, c).scale(1 / a.scale);
};
g.g.Bs = function (a) {
  var c = "string" == typeof a ? g.g.xe(a) : a,
    d = Number(c);
  if (!isNaN(d) && 0 <= d && 360 >= d) return { cJ: d, Fo: g.g.Fb.oC(d) };
  if ((d = g.g.Fb.parse(c))) return { cJ: null, Fo: d };
  d = 'Invalid colour: "' + c + '"';
  a != c && (d += ' (from "' + a + '")');
  throw Error(d);
};
g.g.F = function (a) {
  this.uL = a;
};
g.g.F.prototype.toString = function () {
  return this.uL;
};
g.g.F.kt = new g.g.F("animate");
g.g.F.cq = new g.g.F("circle");
g.g.F.ln = new g.g.F("clipPath");
g.g.F.Uy = new g.g.F("defs");
g.g.F.Gt = new g.g.F("feComposite");
g.g.F.fF = new g.g.F("feComponentTransfer");
g.g.F.gF = new g.g.F("feFlood");
g.g.F.hF = new g.g.F("feFuncA");
g.g.F.iF = new g.g.F("feGaussianBlur");
g.g.F.jF = new g.g.F("fePointLight");
g.g.F.kF = new g.g.F("feSpecularLighting");
g.g.F.ez = new g.g.F("filter");
g.g.F.tF = new g.g.F("foreignObject");
g.g.F.xc = new g.g.F("g");
g.g.F.Yj = new g.g.F("image");
g.g.F.$j = new g.g.F("line");
g.g.F.Od = new g.g.F("path");
g.g.F.Nz = new g.g.F("pattern");
g.g.F.BG = new g.g.F("polygon");
g.g.F.Hc = new g.g.F("rect");
g.g.F.Pi = new g.g.F("svg");
g.g.F.qu = new g.g.F("text");
g.g.F.vu = new g.g.F("tspan");
g.g.o = {};
g.g.o.Fn = "http://www.w3.org/2000/svg";
g.g.o.Xj = "http://www.w3.org/1999/xhtml";
g.g.o.Uf = "http://www.w3.org/1999/xlink";
g.g.o.Mi = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  COMMENT_NODE: 8,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
};
g.g.o.Vf = null;
g.g.o.Ru = 0;
g.g.o.Xq = null;
g.g.o.M = function (a, c, d) {
  a = document.createElementNS(g.g.o.Fn, String(a));
  for (var e in c) a.setAttribute(e, c[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  d && d.appendChild(a);
  return a;
};
g.g.o.Ga = function (a, c) {
  var d = a.getAttribute("class") || "";
  -1 == (" " + d + " ").indexOf(" " + c + " ") &&
    (d && (d += " "), a.setAttribute("class", d + c));
};
g.g.o.vD = function (a, c) {
  c = c.split(" ");
  for (var d = 0; d < c.length; d++) g.g.o.jc(a, c[d]);
};
g.g.o.jc = function (a, c) {
  var d = a.getAttribute("class");
  if (-1 != (" " + d + " ").indexOf(" " + c + " ")) {
    d = d.split(/\s+/);
    for (var e = 0; e < d.length; e++)
      (d[e] && d[e] != c) || (d.splice(e, 1), e--);
    d.length
      ? a.setAttribute("class", d.join(" "))
      : a.removeAttribute("class");
  }
};
g.g.o.Or = function (a, c) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ");
};
g.g.o.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
g.g.o.Kk = function (a, c) {
  var d = c.nextSibling;
  c = c.parentNode;
  if (!c) throw Error("Reference node has no parent.");
  d ? c.insertBefore(a, d) : c.appendChild(a);
};
g.g.o.containsNode = function (a, c) {
  return !!(
    a.compareDocumentPosition(c) & g.g.o.Mi.DOCUMENT_POSITION_CONTAINED_BY
  );
};
g.g.o.rp = function (a, c) {
  a.style.transform = c;
  a.style["-webkit-transform"] = c;
};
g.g.o.Ap = function () {
  g.g.o.Ru++;
  g.g.o.Vf || (g.g.o.Vf = {});
};
g.g.o.Bp = function () {
  g.g.o.Ru--;
  g.g.o.Ru || (g.g.o.Vf = null);
};
g.g.o.FO = function (a) {
  var c = a.textContent + "\n" + a.className.baseVal,
    d;
  if (g.g.o.Vf && (d = g.g.o.Vf[c])) return d;
  try {
    d =
      g.g.userAgent.bf || g.g.userAgent.Uj
        ? a.getBBox().width
        : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  g.g.o.Vf && (g.g.o.Vf[c] = d);
  return d;
};
g.g.o.Zv = function (a, c, d, e) {
  return g.g.o.QB(a, c + "pt", d, e);
};
g.g.o.QB = function (a, c, d, e) {
  var f = a.textContent;
  a = f + "\n" + a.className.baseVal;
  var h;
  if (g.g.o.Vf && (h = g.g.o.Vf[a])) return h;
  g.g.o.Xq ||
    ((h = document.createElement("canvas")),
    (h.className = "blocklyComputeCanvas"),
    document.body.appendChild(h),
    (g.g.o.Xq = h.getContext("2d")));
  g.g.o.Xq.font = d + " " + c + " " + e;
  h = g.g.o.Xq.measureText(f).width;
  g.g.o.Vf && (g.g.o.Vf[a] = h);
  return h;
};
g.g.o.JC = function (a, c, d, e) {
  var f = document.createElement("span");
  f.style.font = d + " " + c + " " + e;
  f.textContent = a;
  a = document.createElement("div");
  a.style.width = "1px";
  a.style.height = "0px";
  c = document.createElement("div");
  c.setAttribute("style", "position: fixed; top: 0; left: 0; display: flex;");
  c.appendChild(f);
  c.appendChild(a);
  document.body.appendChild(c);
  try {
    (d = {}),
      (c.style.alignItems = "baseline"),
      (d.jf = a.offsetTop - f.offsetTop),
      (c.style.alignItems = "flex-end"),
      (d.height = a.offsetTop - f.offsetTop);
  } finally {
    document.body.removeChild(c);
  }
  return d;
};
g.Vj = function (a, c, d, e) {
  this.s = a;
  this.Xs = c;
  this.wi = d.text;
  this.fl = new g.g.T(0, 0);
  this.ei = e;
  this.Vq = d.callbackKey || d.callbackkey;
  this.iB = d["web-class"] || null;
  this.rd = null;
  this.info = d;
};
g.Vj.fG = 5;
g.Vj.gG = 2;
b = g.Vj.prototype;
b.width = 0;
b.height = 0;
b.$a = function () {
  var a = this.ei ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
  this.iB && (a += " " + this.iB);
  this.P = g.g.o.M(g.g.F.xc, { class: a }, this.s.Bb);
  if (!this.ei)
    var c = g.g.o.M(
      g.g.F.Hc,
      { class: "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 },
      this.P
    );
  a = g.g.o.M(
    g.g.F.Hc,
    {
      class: this.ei
        ? "blocklyFlyoutLabelBackground"
        : "blocklyFlyoutButtonBackground",
      rx: 4,
      ry: 4,
    },
    this.P
  );
  var d = g.g.o.M(
      g.g.F.qu,
      {
        class: this.ei ? "blocklyFlyoutLabelText" : "blocklyText",
        x: 0,
        y: 0,
        "text-anchor": "middle",
      },
      this.P
    ),
    e = g.g.xe(this.wi);
  this.s.L && (e += "\u200f");
  d.textContent = e;
  this.ei &&
    ((this.ly = d),
    this.s.Dc.subscribe(this.ly, "flyoutForegroundColour", "fill"));
  var f = g.g.style.getComputedStyle(d, "fontSize"),
    h = g.g.style.getComputedStyle(d, "fontWeight"),
    k = g.g.style.getComputedStyle(d, "fontFamily");
  this.width = g.g.o.QB(d, f, h, k);
  e = g.g.o.JC(e, f, h, k);
  this.height = e.height;
  this.ei ||
    ((this.width += 2 * g.Vj.fG),
    (this.height += 2 * g.Vj.gG),
    c.setAttribute("width", this.width),
    c.setAttribute("height", this.height));
  a.setAttribute("width", this.width);
  a.setAttribute("height", this.height);
  d.setAttribute("x", this.width / 2);
  d.setAttribute("y", this.height / 2 - e.height / 2 + e.jf);
  da(this);
  this.rd = g.wa(this.P, "mouseup", this, this.cK);
  return this.P;
};
b.show = function () {
  da(this);
  this.P.setAttribute("display", "block");
};
function da(a) {
  a.P.setAttribute("transform", "translate(" + a.fl.x + "," + a.fl.y + ")");
}
b.moveTo = function (a, c) {
  this.fl.x = a;
  this.fl.y = c;
  da(this);
};
b.I = function () {
  this.rd && g.Ma(this.rd);
  this.P && g.g.o.removeNode(this.P);
  this.ly && this.s.Dc.unsubscribe(this.ly);
};
b.cK = function (a) {
  (a = this.Xs.Wh(a)) && a.cancel();
  this.ei && this.Vq
    ? console.warn("Labels should not have callbacks. Label text: " + this.wi)
    : this.ei || (this.Vq && ea(this.Xs, this.Vq))
    ? this.ei || ea(this.Xs, this.Vq)(this)
    : console.warn("Buttons should have callbacks. Button text: " + this.wi);
};
g.Vc.register(
  ".blocklyFlyoutButton {,fill: #888;,cursor: default;,},.blocklyFlyoutButtonShadow {,fill: #666;,},.blocklyFlyoutButton:hover {,fill: #aaa;,},.blocklyFlyoutLabel {,cursor: default;,},.blocklyFlyoutLabelBackground {,opacity: 0;,}".split(
    ","
  )
);
g.Touch = {};
g.Touch.hA =
  "ontouchstart" in g.g.global ||
  !!(
    g.g.global.document &&
    document.documentElement &&
    "ontouchstart" in document.documentElement
  ) ||
  !(
    !g.g.global.navigator ||
    (!g.g.global.navigator.maxTouchPoints &&
      !g.g.global.navigator.msMaxTouchPoints)
  );
g.Touch.Ip = null;
g.Touch.vg = {};
g.g.global.PointerEvent
  ? (g.Touch.vg = {
      mousedown: ["pointerdown"],
      mouseenter: ["pointerenter"],
      mouseleave: ["pointerleave"],
      mousemove: ["pointermove"],
      mouseout: ["pointerout"],
      mouseover: ["pointerover"],
      mouseup: ["pointerup", "pointercancel"],
      touchend: ["pointerup"],
      touchcancel: ["pointercancel"],
    })
  : g.Touch.hA &&
    (g.Touch.vg = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"],
    });
g.bs = 0;
g.uJ = function (a, c) {
  g.oj();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (g.bs = setTimeout(function () {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      c && fa(c, a);
    }, g.bG));
};
g.oj = function () {
  g.bs && (clearTimeout(g.bs), (g.bs = 0));
};
g.Touch.kk = function () {
  g.Touch.Ip = null;
};
g.Touch.by = function (a) {
  return !g.Touch.mJ(a) || g.Touch.DH(a);
};
g.Touch.Mr = function (a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 !== a.changedTouches[0].identifier &&
      null !== a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
g.Touch.DH = function (a) {
  var c = g.Touch.Mr(a);
  return void 0 !== g.Touch.Ip && null !== g.Touch.Ip
    ? g.Touch.Ip == c
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((g.Touch.Ip = c), !0)
    : !1;
};
g.Touch.cL = function (a) {
  if (g.g.tb.startsWith(a.type, "touch")) {
    var c = a.changedTouches[0];
    a.clientX = c.clientX;
    a.clientY = c.clientY;
  }
};
g.Touch.mJ = function (a) {
  return (
    g.g.tb.startsWith(a.type, "touch") ||
    g.g.tb.startsWith(a.type, "mouse") ||
    g.g.tb.startsWith(a.type, "pointer")
  );
};
g.Touch.Yr = function (a) {
  return (
    g.g.tb.startsWith(a.type, "touch") || g.g.tb.startsWith(a.type, "pointer")
  );
};
g.Touch.kL = function (a) {
  var c = [];
  if (a.changedTouches)
    for (var d = 0; d < a.changedTouches.length; d++)
      c[d] = {
        type: a.type,
        changedTouches: [a.changedTouches[d]],
        target: a.target,
        stopPropagation: function () {
          a.stopPropagation();
        },
        preventDefault: function () {
          a.preventDefault();
        },
      };
  else c.push(a);
  return c;
};
g.g.aN = function () {};
g.Gn = function (a) {
  this.s = a;
  this.vf = new g.Va(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.Jf = new g.Va(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.Yn = g.g.o.M(
    g.g.F.Hc,
    { height: g.Va.Sc, width: g.Va.Sc, class: "blocklyScrollbarBackground" },
    null
  );
  g.g.o.Kk(this.Yn, a.jg);
  this.bc = null;
};
g.Gn.prototype.I = function () {
  g.g.o.removeNode(this.Yn);
  this.bc = this.s = this.Yn = null;
  this.vf.I();
  this.vf = null;
  this.Jf.I();
  this.Jf = null;
};
g.Gn.prototype.resize = function () {
  var a = this.s.Zc();
  if (a) {
    var c = !1,
      d = !1;
    this.bc &&
    this.bc.Kb == a.Kb &&
    this.bc.Ub == a.Ub &&
    this.bc.Xc == a.Xc &&
    this.bc.Oc == a.Oc
      ? ((this.bc &&
          this.bc.mf == a.mf &&
          this.bc.Yb == a.Yb &&
          this.bc.md == a.md) ||
          (c = !0),
        (this.bc &&
          this.bc.Wd == a.Wd &&
          this.bc.ec == a.ec &&
          this.bc.Yc == a.Yc) ||
          (d = !0))
      : (d = c = !0);
    if (c || d) {
      try {
        g.h.disable(), c && this.vf.resize(a), d && this.Jf.resize(a);
      } finally {
        g.h.enable();
      }
      ha(this.s);
    }
    (this.bc && this.bc.Kb == a.Kb && this.bc.Oc == a.Oc) ||
      this.Yn.setAttribute("x", this.Jf.position.x);
    (this.bc && this.bc.Ub == a.Ub && this.bc.Xc == a.Xc) ||
      this.Yn.setAttribute("y", this.vf.position.y);
    this.bc = a;
  }
};
g.Gn.prototype.set = function (a, c) {
  var d = {};
  a *= this.vf.ratio;
  c *= this.Jf.ratio;
  var e = this.Jf.Ef,
    f = a / this.vf.Ef;
  d.x = isNaN(f) ? 0 : f;
  e = c / e;
  d.y = isNaN(e) ? 0 : e;
  this.s.tp(d);
  ia(this.vf, a);
  ia(this.Jf, c);
};
g.Va = function (a, c, d, e) {
  this.s = a;
  this.Lm = d || !1;
  this.Fk = c;
  this.ratio = this.bc = null;
  this.Ke(e);
  this.position = new g.g.T(0, 0);
  a = g.Va.Sc;
  c
    ? (this.td.setAttribute("height", a),
      this.$g.setAttribute("height", a),
      this.ye.setAttribute("height", a - 5),
      this.ye.setAttribute("y", 2.5),
      (this.Oo = "width"),
      (this.kD = "x"))
    : (this.td.setAttribute("width", a),
      this.$g.setAttribute("width", a),
      this.ye.setAttribute("width", a - 5),
      this.ye.setAttribute("x", 2.5),
      (this.Oo = "height"),
      (this.kD = "y"));
  this.eD = g.wa(this.td, "mousedown", this, this.XJ);
  this.fD = g.wa(this.ye, "mousedown", this, this.YJ);
};
b = g.Va.prototype;
b.sx = new g.g.T(0, 0);
b.GD = 0;
b.Ef = 0;
b.bj = 0;
b.Do = 0;
b.gi = !0;
b.mk = !0;
g.Va.Sc = 15;
g.Touch.hA && (g.Va.Sc = 25);
g.Va.yJ = function (a, c) {
  return a &&
    c &&
    a.Kb == c.Kb &&
    a.Ub == c.Ub &&
    a.Yb == c.Yb &&
    a.ec == c.ec &&
    a.Xc == c.Xc &&
    a.Oc == c.Oc &&
    a.mf == c.mf &&
    a.Wd == c.Wd &&
    a.md == c.md &&
    a.Yc == c.Yc
    ? !0
    : !1;
};
g.Va.prototype.I = function () {
  ja();
  g.Ma(this.eD);
  this.eD = null;
  g.Ma(this.fD);
  this.fD = null;
  g.g.o.removeNode(this.$g);
  this.td = this.P = this.$g = null;
  this.ye && (this.s.Dc.unsubscribe(this.ye), (this.ye = null));
  this.s = null;
};
function ia(a, c) {
  a.Do = c;
  a.ye.setAttribute(a.kD, a.Do);
}
function ka(a, c) {
  a.Ef = c;
  a.$g.setAttribute(a.Oo, a.Ef);
  a.td.setAttribute(a.Oo, a.Ef);
}
g.Gn.prototype.jl = function (a) {
  this.vf.jl(a);
  this.Jf.jl(a);
};
b = g.Va.prototype;
b.setPosition = function (a, c) {
  this.position.x = a;
  this.position.y = c;
  g.g.o.rp(
    this.$g,
    "translate(" +
      (this.position.x + this.sx.x) +
      "px," +
      (this.position.y + this.sx.y) +
      "px)"
  );
};
b.resize = function (a) {
  if (!a && ((a = this.s.Zc()), !a)) return;
  g.Va.yJ(a, this.bc) ||
    ((this.bc = a), this.Fk ? la(this, a) : ma(this, a), na(this));
};
function la(a, c) {
  var d = c.Kb - 1;
  a.Lm && (d -= g.Va.Sc);
  ka(a, Math.max(0, d));
  d = c.Oc + 0.5;
  a.Lm && a.s.L && (d += g.Va.Sc);
  a.setPosition(d, c.Xc + c.Ub - g.Va.Sc - 0.5);
  oa(a, c);
}
function oa(a, c) {
  a.Lm || a.Jb(a.Ef < c.mf);
  a.ratio = a.Ef / c.mf;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.bj = Math.max(0, c.Kb * a.ratio);
  a.ye.setAttribute(a.Oo, a.bj);
  ia(a, pa(a, (c.Yb - c.md) * a.ratio));
}
function ma(a, c) {
  var d = c.Ub - 1;
  a.Lm && (d -= g.Va.Sc);
  ka(a, Math.max(0, d));
  d = c.Oc + 0.5;
  a.s.L || (d += c.Kb - g.Va.Sc - 1);
  a.setPosition(d, c.Xc + 0.5);
  qa(a, c);
}
function qa(a, c) {
  a.Lm || a.Jb(a.Ef < c.Wd);
  a.ratio = a.Ef / c.Wd;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.bj = Math.max(0, c.Ub * a.ratio);
  a.ye.setAttribute(a.Oo, a.bj);
  ia(a, pa(a, (c.ec - c.Yc) * a.ratio));
}
b.Ke = function (a) {
  var c = "blocklyScrollbar" + (this.Fk ? "Horizontal" : "Vertical");
  a && (c += " " + a);
  this.$g = g.g.o.M(g.g.F.Pi, { class: c }, null);
  this.P = g.g.o.M(g.g.F.xc, {}, this.$g);
  this.td = g.g.o.M(g.g.F.Hc, { class: "blocklyScrollbarBackground" }, this.P);
  a = Math.floor((g.Va.Sc - 5) / 2);
  this.ye = g.g.o.M(
    g.g.F.Hc,
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.P
  );
  this.s.Dc.subscribe(this.ye, "scrollbarColour", "fill");
  this.s.Dc.subscribe(this.ye, "scrollbarOpacity", "fill-opacity");
  g.g.o.Kk(this.$g, u(this.s));
};
b.isVisible = function () {
  return this.gi;
};
b.jl = function (a) {
  var c = a != this.mk;
  this.mk = a;
  c && this.Lp();
};
b.Jb = function (a) {
  var c = a != this.isVisible();
  if (this.Lm) throw Error("Unable to toggle visibility of paired scrollbars.");
  this.gi = a;
  c && this.Lp();
};
b.Lp = function () {
  this.mk && this.isVisible()
    ? this.$g.setAttribute("display", "block")
    : this.$g.setAttribute("display", "none");
};
b.XJ = function (a) {
  ra(this.s);
  g.Touch.kk();
  ja();
  if (g.g.Rk(a)) a.stopPropagation();
  else {
    var c = g.g.Wo(a, u(this.s), sa(this.s));
    c = this.Fk ? c.x : c.y;
    var d = g.g.Bo(this.ye);
    d = this.Fk ? d.x : d.y;
    var e = this.Do,
      f = 0.95 * this.bj;
    c <= d ? (e -= f) : c >= d + this.bj && (e += f);
    ia(this, pa(this, e));
    na(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
b.YJ = function (a) {
  ra(this.s);
  ja();
  g.g.Rk(a)
    ? a.stopPropagation()
    : ((this.nL = this.Do),
      ta(this.s),
      (this.GD = this.Fk ? a.clientX : a.clientY),
      (g.Va.rd = g.wa(document, "mouseup", this, this.bK)),
      (g.Va.vj = g.wa(document, "mousemove", this, this.ZJ)),
      a.stopPropagation(),
      a.preventDefault());
};
b.ZJ = function (a) {
  ia(this, pa(this, this.nL + ((this.Fk ? a.clientX : a.clientY) - this.GD)));
  na(this);
};
b.bK = function () {
  ua(this.s);
  g.Touch.kk();
  ja();
};
function ja() {
  g.Bc(!0);
  g.Va.rd && (g.Ma(g.Va.rd), (g.Va.rd = null));
  g.Va.vj && (g.Ma(g.Va.vj), (g.Va.vj = null));
}
function pa(a, c) {
  return (c = 0 >= c || isNaN(c) || a.Ef < a.bj ? 0 : Math.min(c, a.Ef - a.bj));
}
function na(a) {
  var c = a.Do / a.Ef;
  isNaN(c) && (c = 0);
  var d = {};
  a.Fk ? (d.x = c) : (d.y = c);
  a.s.tp(d);
}
b.set = function (a) {
  ia(this, pa(this, a * this.ratio));
  na(this);
};
g.Du = function (a) {
  this.s = a;
  this.hn = this.Sp = this.gn = this.kh = this.ox = this.nx = this.px = null;
};
b = g.Du.prototype;
b.jk = 32;
b.kz = 110;
b.Tt = 20;
b.sn = 20;
b.P = null;
b.No = 0;
b.an = 0;
b.$a = function () {
  this.P = g.g.o.M(g.g.F.xc, {}, null);
  var a = String(Math.random()).substring(2);
  this.Sp = g.g.o.M(g.g.F.xc, { class: "blocklyZoom" }, this.P);
  var c = g.g.o.M(g.g.F.ln, { id: "blocklyZoomoutClipPath" + a }, this.Sp);
  g.g.o.M(g.g.F.Hc, { width: 32, height: 32 }, c);
  g.g.o
    .M(
      g.g.F.Yj,
      {
        width: g.Sd.width,
        height: g.Sd.height,
        x: -64,
        y: -92,
        "clip-path": "url(#blocklyZoomoutClipPath" + a + ")",
      },
      this.Sp
    )
    .setAttributeNS(g.g.o.Uf, "xlink:href", this.s.options.xj + g.Sd.url);
  this.ox = g.wa(this.Sp, "mousedown", null, this.iE.bind(this, -1));
  this.gn = g.g.o.M(g.g.F.xc, { class: "blocklyZoom" }, this.P);
  c = g.g.o.M(g.g.F.ln, { id: "blocklyZoominClipPath" + a }, this.gn);
  g.g.o.M(g.g.F.Hc, { width: 32, height: 32 }, c);
  g.g.o
    .M(
      g.g.F.Yj,
      {
        width: g.Sd.width,
        height: g.Sd.height,
        x: -32,
        y: -92,
        "clip-path": "url(#blocklyZoominClipPath" + a + ")",
      },
      this.gn
    )
    .setAttributeNS(g.g.o.Uf, "xlink:href", this.s.options.xj + g.Sd.url);
  this.nx = g.wa(this.gn, "mousedown", null, this.iE.bind(this, 1));
  this.s.Kc() &&
    ((this.hn = g.g.o.M(g.g.F.xc, { class: "blocklyZoom" }, this.P)),
    (c = g.g.o.M(g.g.F.ln, { id: "blocklyZoomresetClipPath" + a }, this.hn)),
    g.g.o.M(g.g.F.Hc, { width: 32, height: 32 }, c),
    g.g.o
      .M(
        g.g.F.Yj,
        {
          width: g.Sd.width,
          height: g.Sd.height,
          y: -92,
          "clip-path": "url(#blocklyZoomresetClipPath" + a + ")",
        },
        this.hn
      )
      .setAttributeNS(g.g.o.Uf, "xlink:href", this.s.options.xj + g.Sd.url),
    (this.px = g.wa(this.hn, "mousedown", null, this.VK.bind(this))));
  return this.P;
};
b.R = function (a) {
  this.kh = this.Tt + a;
  return this.kh + this.kz;
};
b.I = function () {
  this.P && g.g.o.removeNode(this.P);
  this.px && g.Ma(this.px);
  this.nx && g.Ma(this.nx);
  this.ox && g.Ma(this.ox);
};
b.position = function () {
  if (this.kh) {
    var a = this.s.Zc();
    a &&
      ((this.No =
        a.Ka == g.De || (this.s.Bd && !this.s.L)
          ? a.Kb + a.Oc - this.jk - this.sn - g.Va.Sc
          : this.sn + g.Va.Sc),
      a.Ka == g.In
        ? ((this.an = this.kh),
          this.gn.setAttribute("transform", "translate(0, 34)"),
          this.hn && this.hn.setAttribute("transform", "translate(0, 77)"))
        : ((this.an = a.Ub + a.Xc - this.kz - this.kh),
          this.gn.setAttribute("transform", "translate(0, 43)"),
          this.Sp.setAttribute("transform", "translate(0, 77)")),
      this.P.setAttribute(
        "transform",
        "translate(" + this.No + "," + this.an + ")"
      ));
  }
};
b.iE = function (a, c) {
  ra(this.s);
  var d = this.s,
    e = d.Zc();
  if (d.na) {
    var f = e.LD ? e.LD / 2 : 0;
    e = e.KD ? e.KD / 2 : 0;
  } else (f = e.Kb / 2 + e.Oc), (e = e.Ub / 2 + e.Xc);
  d.zoom(f, e, a);
  va(this);
  g.Touch.kk();
  c.stopPropagation();
  c.preventDefault();
};
b.VK = function (a) {
  ra(this.s);
  this.s.setScale(this.s.options.vb.ID);
  var c = this.s;
  g.g.o.Ga(c.Bb, "blocklyCanvasTransitioning");
  g.g.o.Ga(c.jg, "blocklyCanvasTransitioning");
  c = this.s;
  if (c.Kc()) {
    var d = c.Zc(),
      e = (d.mf - d.Kb) / 2,
      f = (d.Wd - d.Ub) / 2;
    e = -e - d.md;
    f = -f - d.Yc;
    c.scroll(e, f);
  } else
    console.warn(
      "Tried to move a non-movable workspace. This could result in blocks becoming inaccessible."
    );
  setTimeout(this.s.mI.bind(this.s), 500);
  va(this);
  g.Touch.kk();
  a.stopPropagation();
  a.preventDefault();
};
function va(a) {
  a = new g.h.Lf(null, a.s.id, "zoom_controls");
  g.h.Ha(a);
}
g.Vc.register([
  ".blocklyZoom>image, .blocklyZoom>svg>image {",
  "opacity: .4;",
  "}",
  ".blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {",
  "opacity: .6;",
  "}",
  ".blocklyZoom>image:active, .blocklyZoom>svg>image:active {",
  "opacity: .8;",
  "}",
]);
g.C = {};
g.C.cn = {};
g.C.lq = "default";
g.C.aa = function (a) {
  this.rj = a;
};
g.C.aa.prototype.toString = function () {
  return this.rj;
};
g.C.aa.Oy = new g.C.aa("connectionChecker");
g.C.aa.fc = new g.C.aa("event");
g.C.aa.Gc = new g.C.aa("field");
g.C.aa.RENDERER = new g.C.aa("renderer");
g.C.aa.Iq = new g.C.aa("toolbox");
g.C.aa.su = new g.C.aa("theme");
g.C.aa.Xl = new g.C.aa("toolboxItem");
g.C.aa.gz = new g.C.aa("flyoutsVerticalToolbox");
g.C.aa.rF = new g.C.aa("flyoutsHorizontalToolbox");
g.C.register = function (a, c, d, e) {
  if (
    (!(a instanceof g.C.aa) && "string" != typeof a) ||
    "" == String(a).trim()
  )
    throw Error(
      'Invalid type "' +
        a +
        '". The type must be a non-empty string or a Blockly.registry.Type.'
    );
  a = String(a).toLowerCase();
  if ("string" != typeof c || "" == c.trim())
    throw Error(
      'Invalid name "' + c + '". The name must be a non-empty string.'
    );
  c = c.toLowerCase();
  if (!d) throw Error("Can not register a null value");
  var f = g.C.cn[a];
  f || (f = g.C.cn[a] = {});
  g.C.JL(a, d);
  if (!e && f[c])
    throw Error('Name "' + c + '" with type "' + a + '" already registered.');
  f[c] = d;
};
g.C.JL = function (a, c) {
  switch (a) {
    case String(g.C.aa.Gc):
      if ("function" != typeof c.ka)
        throw Error('Type "' + a + '" must have a fromJson function');
  }
};
g.C.unregister = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.cn[a];
  d
    ? d[c]
      ? delete g.C.cn[a][c]
      : console.warn('No name "' + c + '" with type "' + a + '" found')
    : console.warn('No type "' + a + '" found');
};
g.C.RB = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.cn[a];
  return d
    ? d[c]
      ? d[c]
      : (console.warn('No name "' + c + '" with type "' + a + '" found'), null)
    : (console.warn('No type "' + a + '" found'), null);
};
g.C.YI = function (a) {
  var c = g.C.aa.Xl;
  c = String(c).toLowerCase();
  a = a.toLowerCase();
  return (c = g.C.cn[c]) ? !!c[a] : !1;
};
g.C.wo = function (a, c) {
  return g.C.RB(a, c);
};
g.C.cw = function (a, c) {
  return g.C.RB(a, c);
};
g.C.Hr = function (a, c) {
  c = c.plugins[a.toString()] || g.C.lq;
  return "function" == typeof c ? c : g.C.wo(a, c);
};
g.h = {};
g.h.fC = "";
g.h.cb = !0;
g.h.vv = 0;
g.h.hq = "create";
g.h.Vp = g.h.hq;
g.h.Tj = "delete";
g.h.nt = g.h.Tj;
g.h.Rj = "change";
g.h.rE = g.h.Rj;
g.h.vn = "move";
g.h.ot = g.h.vn;
g.h.lA = "var_create";
g.h.mA = "var_delete";
g.h.oA = "var_rename";
g.h.yu = "ui";
g.h.Jy = "drag";
g.h.Ql = "selected";
g.h.vt = "click";
g.h.yz = "marker_move";
g.h.Xp = "bubble_open";
g.h.iA = "trashcan_open";
g.h.gA = "toolbox_item_select";
g.h.fA = "theme_change";
g.h.pA = "viewport_change";
g.h.eq = "comment_create";
g.h.Ny = "comment_delete";
g.h.My = "comment_change";
g.h.fq = "comment_move";
g.h.fz = "finished_loading";
g.h.wE = [g.h.Vp, g.h.ot, g.h.eq, g.h.fq];
g.h.pn = [];
g.h.Ha = function (a) {
  g.h.isEnabled() && (g.h.pn.length || setTimeout(g.h.qI, 0), g.h.pn.push(a));
};
g.h.qI = function () {
  for (
    var a = g.h.filter(g.h.pn, !0), c = (g.h.pn.length = 0), d;
    (d = a[c]);
    c++
  )
    if (d.Tc) {
      var e = g.Vb.vo(d.Tc);
      if (e) {
        var f = d;
        if (f.cb)
          for (e.ql.push(f), e.hp.length = 0; e.ql.length > e.Az && 0 <= e.Az; )
            e.ql.shift();
        for (var h = 0; (d = e.ie[h]); h++) d(f);
      }
    }
};
g.h.filter = function (a, c) {
  a = a.slice();
  c || a.reverse();
  for (var d = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.Fm()) {
      var k = [h.yw ? g.h.yu : h.type, h.pb, h.Tc].join(" "),
        l = e[k],
        m = l ? l.event : null;
      if (!l) (e[k] = { event: h, index: f }), d.push(h);
      else if (h.type == g.h.vn && l.index == f - 1)
        (m.$k = h.$k), (m.Zk = h.Zk), (m.tj = h.tj), (l.index = f);
      else if (h.type == g.h.Rj && h.element == m.element && h.name == m.name)
        m.newValue = h.newValue;
      else if (h.type != g.h.vt || m.type != g.h.Xp)
        (e[k] = { event: h, index: f }), d.push(h);
    }
  a = d.filter(function (n) {
    return !n.Fm();
  });
  c || a.reverse();
  for (f = 1; (h = a[f]); f++)
    h.type == g.h.Rj && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
g.h.FH = function () {
  for (var a = 0, c; (c = g.h.pn[a]); a++) c.cb = !1;
};
g.h.disable = function () {
  g.h.vv++;
};
g.h.enable = function () {
  g.h.vv--;
};
g.h.isEnabled = function () {
  return 0 == g.h.vv;
};
g.h.uc = function () {
  return g.h.fC;
};
g.h.ea = function (a) {
  g.h.fC = "boolean" == typeof a ? (a ? g.g.Vh() : "") : a;
};
g.h.NB = function (a) {
  var c = [];
  a = q(a, !1);
  for (var d = 0, e; (e = a[d]); d++) c[d] = e.id;
  return c;
};
g.h.ka = function (a) {
  var c = g.C.wo(g.C.aa.fc, a.type);
  if (!c) throw Error("Unknown event type.");
  c = new c();
  c.ka(a);
  c.Tc = (void 0).id;
  return c;
};
g.h.aI = function (a) {
  if ((a.type == g.h.vn || a.type == g.h.hq) && a.Tc) {
    var c = g.Vb.vo(a.Tc),
      d = c.Zd(a.pb);
    if (d) {
      a = g.h.cb;
      try {
        g.h.cb = !1;
        var e = d.getParent();
        if (e && e.isEnabled()) {
          var f = q(d, !1);
          c = 0;
          for (var h; (h = f[c]); c++) h.je(!0);
        } else if ((d.O || d.ba) && !c.Jc()) {
          do d.je(!1), (d = t(d));
          while (d);
        }
      } finally {
        g.h.cb = a;
      }
    }
  }
};
g.h.Abstract = function () {
  this.Pe = null;
  this.Tc = void 0;
  this.group = g.h.uc();
  this.cb = g.h.cb;
};
b = g.h.Abstract.prototype;
b.yw = !1;
b.ya = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
b.ka = function (a) {
  this.Pe = !1;
  this.group = a.group;
};
b.Fm = function () {
  return !1;
};
b.run = function () {};
function v(a) {
  if (a.Tc) var c = g.Vb.vo(a.Tc);
  if (!c)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return c;
}
g.g.object = {};
g.g.object.X = function (a, c) {
  a.v = c.prototype;
  a.prototype = Object.create(c.prototype);
  a.prototype.constructor = a;
};
g.g.object.Re = function (a, c) {
  for (var d in c) a[d] = c[d];
};
g.g.object.nm = function (a, c) {
  for (var d in c)
    a[d] =
      null != c[d] && "object" === typeof c[d]
        ? g.g.object.nm(a[d] || Object.create(null), c[d])
        : c[d];
  return a;
};
g.g.object.values = function (a) {
  return Object.values
    ? Object.values(a)
    : Object.keys(a).map(function (c) {
        return a[c];
      });
};
g.h.Fe = function (a) {
  g.h.Fe.v.constructor.call(this);
  this.Pe = "undefined" == typeof a;
  this.Tc = a ? a : "";
  this.cb = !1;
};
g.g.object.X(g.h.Fe, g.h.Abstract);
g.h.Fe.prototype.yw = !0;
g.h.Ri = function (a, c, d, e) {
  g.h.Ri.v.constructor.call(this, a ? a.u.id : void 0);
  this.pb = a ? a.id : null;
  this.element = "undefined" == typeof c ? "" : c;
  this.oldValue = "undefined" == typeof d ? "" : d;
  this.newValue = "undefined" == typeof e ? "" : e;
};
g.g.object.X(g.h.Ri, g.h.Fe);
g.h.Ri.prototype.type = g.h.yu;
g.h.Ri.prototype.ya = function () {
  var a = g.h.Ri.v.ya.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.pb && (a.blockId = this.pb);
  return a;
};
g.h.Ri.prototype.ka = function (a) {
  g.h.Ri.v.ka.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.pb = a.blockId;
};
g.C.register(g.C.aa.fc, g.h.yu, g.h.Ri);
g.Ly = function (a) {
  this.Xn = a;
  this.$a();
};
b = g.Ly.prototype;
b.Ob = null;
b.Kg = null;
b.Xn = null;
b.Ej = 1;
b.Ep = null;
b.$a = function () {
  this.Ob ||
    ((this.Ob = g.g.o.M(
      g.g.F.Pi,
      {
        xmlns: g.g.o.Fn,
        "xmlns:html": g.g.o.Xj,
        "xmlns:xlink": g.g.o.Uf,
        version: "1.1",
        class: "blocklyBlockDragSurface",
      },
      this.Xn
    )),
    (this.Kg = g.g.o.M(g.g.F.xc, {}, this.Ob)));
};
function wa(a, c) {
  if (a.Kg.childNodes.length) throw Error("Already dragging a block.");
  a.Kg.appendChild(c);
  a.Ob.style.display = "block";
  a.Ep = new g.g.T(0, 0);
}
b.ol = function (a, c) {
  this.Ep = new g.g.T(a * this.Ej, c * this.Ej);
  a = this.Ep.x;
  c = this.Ep.y;
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.Ob.style.display = "block";
  g.g.o.rp(this.Ob, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.ew = function () {
  var a = g.g.tf(this.Ob);
  return new g.g.T(a.x / this.Ej, a.y / this.Ej);
};
b.uc = function () {
  return this.Kg;
};
b.$q = function (a) {
  a
    ? a.appendChild(this.Kg.firstChild)
    : this.Kg.removeChild(this.Kg.firstChild);
  this.Ob.style.display = "none";
  if (this.Kg.childNodes.length) throw Error("Drag group was not cleared.");
  this.Ep = null;
};
g.g.Ra = {};
g.g.Ra.Ed = function (a) {
  return (a * Math.PI) / 180;
};
g.g.Ra.$m = function (a) {
  return (180 * a) / Math.PI;
};
g.g.Ra.Bg = function (a, c, d) {
  if (d < a) {
    var e = d;
    d = a;
    a = e;
  }
  return Math.max(a, Math.min(c, d));
};
g.H = function () {};
g.H.Ou = null;
g.H.Bf = null;
g.H.pD = null;
g.H.Up = 16;
g.H.Ky = 1;
g.H.Hy = 12;
g.H.Lz = 16;
g.H.mt = 0.25;
g.H.Gu = null;
g.H.cl = null;
g.H.fg = "";
g.H.kg = "";
g.H.$a = function () {
  if (!g.H.og) {
    var a = document.createElement("div");
    a.className = "blocklyDropDownDiv";
    (g.As || document.body).appendChild(a);
    g.H.og = a;
    var c = document.createElement("div");
    c.className = "blocklyDropDownContent";
    a.appendChild(c);
    g.H.Oh = c;
    c = document.createElement("div");
    c.className = "blocklyDropDownArrow";
    a.appendChild(c);
    g.H.hf = c;
    g.H.og.style.opacity = 0;
    g.H.og.style.transition =
      "transform " + g.H.mt + "s, opacity " + g.H.mt + "s";
    a.addEventListener("focusin", function () {
      g.g.o.Ga(a, "blocklyFocused");
    });
    a.addEventListener("focusout", function () {
      g.g.o.jc(a, "blocklyFocused");
    });
  }
};
g.H.bL = function (a) {
  g.H.Ou = a;
};
g.H.MB = function () {
  return g.H.Oh;
};
g.H.EH = function () {
  g.H.Oh.textContent = "";
  g.H.Oh.style.width = "";
};
g.H.bd = function (a, c) {
  g.H.og.style.backgroundColor = a;
  g.H.og.style.borderColor = c;
};
g.H.aP = function (a, c, d, e) {
  return g.H.DD(g.H.UB(c), a, d, e);
};
g.H.CD = function (a, c) {
  g.H.pD = !0;
  g.H.DD(g.H.VB(a), a, c, void 0);
};
g.H.UB = function (a) {
  var c = a.Pa(),
    d = c.getBBox(),
    e = a.u.scale;
  a = d.height * e;
  d = d.width * e;
  c = g.g.style.Ak(c);
  return new g.g.Rect(c.y, c.y + a, c.x, c.x + d);
};
g.H.VB = function (a) {
  a = xa(a);
  return new g.g.Rect(a.top, a.bottom, a.left, a.right);
};
g.H.DD = function (a, c, d, e) {
  var f = a.left + (a.right - a.left) / 2,
    h = a.bottom;
  a = a.top;
  e && (a += e);
  e = c.Y();
  for (var k = e.u; k.options.vc; ) k = k.options.vc;
  g.H.bL(u(k).parentNode);
  return g.H.show(c, e.L, f, h, f, a, d);
};
g.H.show = function (a, c, d, e, f, h, k) {
  g.H.Bf = a;
  g.H.cl = k || null;
  a = g.H.og;
  a.style.direction = c ? "rtl" : "ltr";
  c = g.Og();
  g.H.fg = c.Mb.ag();
  g.H.kg = c.Rg().ag();
  g.g.o.Ga(a, g.H.fg);
  g.g.o.Ga(a, g.H.kg);
  return g.H.cp(d, e, f, h);
};
g.H.xI = function () {
  var a = g.g.style.Ak(g.H.Ou),
    c = g.g.style.Xh(g.H.Ou);
  return {
    left: a.x,
    right: a.x + c.width,
    top: a.y,
    bottom: a.y + c.height,
    width: c.width,
    height: c.height,
  };
};
g.H.II = function (a, c, d, e) {
  var f = g.H.xI(),
    h = g.g.style.Xh(g.H.og);
  return c + h.height < f.bottom
    ? g.H.TB(a, c, f, h)
    : e - h.height > f.top
    ? g.H.SB(d, e, f, h)
    : c + h.height < document.documentElement.clientHeight
    ? g.H.TB(a, c, f, h)
    : e - h.height > document.documentElement.clientTop
    ? g.H.SB(d, e, f, h)
    : g.H.JI(a, f, h);
};
g.H.TB = function (a, c, d, e) {
  a = g.H.dw(a, d.left, d.right, e.width);
  return {
    pw: a.pm,
    qw: c,
    Ov: a.pm,
    Pv: c + g.H.Lz,
    am: a.am,
    Iu: -(g.H.Up / 2 + g.H.Ky),
    Qq: !0,
    Hu: !0,
  };
};
g.H.SB = function (a, c, d, e) {
  a = g.H.dw(a, d.left, d.right, e.width);
  return {
    pw: a.pm,
    qw: c - e.height,
    Ov: a.pm,
    Pv: c - e.height - g.H.Lz,
    am: a.am,
    Iu: e.height - 2 * g.H.Ky - g.H.Up / 2,
    Qq: !1,
    Hu: !0,
  };
};
g.H.JI = function (a, c, d) {
  a = g.H.dw(a, c.left, c.right, d.width);
  return {
    pw: a.pm,
    qw: 0,
    Ov: a.pm,
    Pv: 0,
    Qq: null,
    am: null,
    Iu: null,
    Hu: !1,
  };
};
g.H.dw = function (a, c, d, e) {
  var f = a;
  a = g.g.Ra.Bg(c, a - e / 2, d - e);
  f -= g.H.Up / 2;
  c = g.g.Ra.Bg(g.H.Hy, f - a, e - g.H.Hy - g.H.Up);
  return { am: c, pm: a };
};
g.H.isVisible = function () {
  return !!g.H.Bf;
};
g.H.ym = function (a, c) {
  g.H.Bf === a && (c ? g.H.Dk() : g.H.Ja());
};
g.H.Ja = function () {
  var a = g.H.og;
  a.style.transform = "translate(0, 0)";
  a.style.opacity = 0;
  g.H.Gu = setTimeout(function () {
    g.H.Dk();
  }, 1e3 * g.H.mt);
  g.H.cl && (g.H.cl(), (g.H.cl = null));
};
g.H.Dk = function () {
  if (g.H.isVisible()) {
    g.H.Gu && clearTimeout(g.H.Gu);
    var a = g.H.og;
    a.style.transform = "";
    a.style.left = "";
    a.style.top = "";
    a.style.opacity = 0;
    a.style.display = "none";
    a.style.backgroundColor = "";
    a.style.borderColor = "";
    g.H.cl && (g.H.cl(), (g.H.cl = null));
    g.H.EH();
    g.H.Bf = null;
    g.H.fg && (g.g.o.jc(a, g.H.fg), (g.H.fg = ""));
    g.H.kg && (g.g.o.jc(a, g.H.kg), (g.H.kg = ""));
    ra(g.Og());
  }
};
g.H.cp = function (a, c, d, e) {
  a = g.H.II(a, c, d, e);
  a.Hu
    ? ((g.H.hf.style.display = ""),
      (g.H.hf.style.transform =
        "translate(" + a.am + "px," + a.Iu + "px) rotate(45deg)"),
      g.H.hf.setAttribute(
        "class",
        a.Qq
          ? "blocklyDropDownArrow blocklyArrowTop"
          : "blocklyDropDownArrow blocklyArrowBottom"
      ))
    : (g.H.hf.style.display = "none");
  c = Math.floor(a.pw);
  d = Math.floor(a.qw);
  e = Math.floor(a.Ov);
  var f = Math.floor(a.Pv),
    h = g.H.og;
  h.style.left = c + "px";
  h.style.top = d + "px";
  h.style.display = "block";
  h.style.opacity = 1;
  h.style.transform = "translate(" + (e - c) + "px," + (f - d) + "px)";
  return !!a.Qq;
};
g.H.UO = function () {
  if (g.H.Bf) {
    var a = g.H.Bf,
      c = a.Y();
    a = g.H.pD ? g.H.VB(a) : g.H.UB(c);
    c = a.left + (a.right - a.left) / 2;
    g.H.cp(c, a.bottom, c, a.top);
  } else g.H.Ja();
};
g.Wj = function (a, c) {
  this.vm = a;
  this.gy = c.spacing;
  this.EC = c.length;
  this.rJ = (this.Hw = a.firstChild) && this.Hw.nextSibling;
  this.jL = c.snap;
};
g.Wj.prototype.Ej = 1;
g.Wj.prototype.I = function () {
  this.vm = null;
};
g.Wj.prototype.update = function (a) {
  this.Ej = a;
  var c = this.gy * a || 100;
  this.vm.setAttribute("width", c);
  this.vm.setAttribute("height", c);
  c = Math.floor(this.gy / 2) + 0.5;
  var d = c - this.EC / 2,
    e = c + this.EC / 2;
  c *= a;
  d *= a;
  e *= a;
  ya(this.Hw, a, d, e, c, c);
  ya(this.rJ, a, c, c, d, e);
};
function ya(a, c, d, e, f, h) {
  a &&
    (a.setAttribute("stroke-width", c),
    a.setAttribute("x1", d),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h));
}
g.Wj.prototype.moveTo = function (a, c) {
  this.vm.setAttribute("x", a);
  this.vm.setAttribute("y", c);
  (g.g.userAgent.bf || g.g.userAgent.Uj) && this.update(this.Ej);
};
g.Wj.$a = function (a, c, d) {
  a = g.g.o.M(
    g.g.F.Nz,
    { id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse" },
    d
  );
  0 < c.length && 0 < c.spacing
    ? (g.g.o.M(g.g.F.$j, { stroke: c.colour }, a),
      1 < c.length && g.g.o.M(g.g.F.$j, { stroke: c.colour }, a))
    : g.g.o.M(g.g.F.$j, {}, a);
  return a;
};
g.hk = function (a, c, d, e) {
  this.name = a;
  this.Ui = c || Object.create(null);
  this.Yq = d || Object.create(null);
  this.VA = e || Object.create(null);
  this.fontStyle = Object.create(null);
  this.jy = null;
  g.C.register(g.C.aa.su, a, this);
};
g.hk.prototype.ag = function () {
  return this.name + "-theme";
};
function za(a, c) {
  return (c = a.VA[c]) && "string" == typeof c && za(a, c)
    ? za(a, c)
    : c
    ? String(c)
    : null;
}
g.hk.VH = function (a, c) {
  var d = new g.hk(a),
    e = c.base;
  e &&
    ("string" == typeof e && (e = g.C.cw(g.C.aa.su, e)),
    e instanceof g.hk && (g.g.object.nm(d, e), (d.name = a)));
  g.g.object.nm(d.Ui, c.blockStyles);
  g.g.object.nm(d.Yq, c.categoryStyles);
  g.g.object.nm(d.VA, c.componentStyles);
  g.g.object.nm(d.fontStyle, c.fontStyle);
  null != c.startHats && (d.jy = c.startHats);
  return d;
};
g.Dh = {};
g.Dh.Ei = {};
g.Dh.Ei.SH = {
  colour_blocks: { colourPrimary: "20" },
  list_blocks: { colourPrimary: "260" },
  logic_blocks: { colourPrimary: "210" },
  loop_blocks: { colourPrimary: "120" },
  math_blocks: { colourPrimary: "230" },
  procedure_blocks: { colourPrimary: "290" },
  text_blocks: { colourPrimary: "160" },
  variable_blocks: { colourPrimary: "330" },
  variable_dynamic_blocks: { colourPrimary: "310" },
  hat_blocks: { colourPrimary: "330", hat: "cap" },
};
g.Dh.Ei.Yq = {
  colour_category: { colour: "20" },
  list_category: { colour: "260" },
  logic_category: { colour: "210" },
  loop_category: { colour: "120" },
  math_category: { colour: "230" },
  procedure_category: { colour: "290" },
  text_category: { colour: "160" },
  variable_category: { colour: "330" },
  variable_dynamic_category: { colour: "310" },
};
g.Dh.Ei = new g.hk("classic", g.Dh.Ei.SH, g.Dh.Ei.Yq);
g.g.Gl = {};
g.g.Gl.NJ = 0;
g.g.Gl.bw = function () {
  return "blockly-" + (g.g.Gl.NJ++).toString(36);
};
g.g.za = {};
g.g.za.ut = "categoryToolbox";
g.g.za.hz = "flyoutToolbox";
g.g.za.Qd = { Jq: g.gk, qt: g.In, Zj: g.De, dk: g.Wl };
g.g.za.bv = function (a) {
  if (!a) return null;
  if (a instanceof Element || "string" == typeof a)
    (a = g.g.za.xx(a)), (a = g.g.za.NH(a));
  g.g.za.IL(a);
  return a;
};
g.g.za.IL = function (a) {
  var c = a.kind;
  a = a.contents;
  if (c && c != g.g.za.hz && c != g.g.za.ut)
    throw Error(
      "Invalid toolbox kind " +
        c +
        ". Please supply either " +
        g.g.za.hz +
        " or " +
        g.g.za.ut
    );
  if (!a) throw Error("Toolbox must have a contents attribute.");
};
g.g.za.dB = function (a) {
  return a
    ? a.contents
      ? a.contents
      : Array.isArray(a) && 0 < a.length && !a[0].nodeType
      ? a
      : g.g.za.Ay(a)
    : [];
};
g.g.za.Eo = function (a) {
  if (!a) return !1;
  var c = a.kind;
  return c
    ? c == g.g.za.ut
    : !!a.contents.filter(function (d) {
        return "CATEGORY" == d.kind.toUpperCase();
      }).length;
};
g.g.za.uC = function (a) {
  return a && a.contents
    ? !!a.contents.filter(function (c) {
        return "CATEGORY" == c.kind.toUpperCase();
      }).length
    : !1;
};
g.g.za.NH = function (a) {
  var c = { contents: g.g.za.Ay(a) };
  a instanceof Node && g.g.za.AA(a, c);
  return c;
};
g.g.za.Ay = function (a) {
  var c = [],
    d = a.childNodes;
  d || (d = a);
  a = 0;
  for (var e; (e = d[a]); a++)
    if (e.tagName) {
      var f = {},
        h = e.tagName.toUpperCase();
      f.kind = h;
      "BLOCK" == h
        ? (f.blockxml = e)
        : e.childNodes &&
          0 < e.childNodes.length &&
          (f.contents = g.g.za.Ay(e));
      g.g.za.AA(e, f);
      c.push(f);
    }
  return c;
};
g.g.za.AA = function (a, c) {
  for (var d = 0; d < a.attributes.length; d++) {
    var e = a.attributes[d];
    -1 < e.nodeName.indexOf("css-")
      ? ((c.cssconfig = c.cssconfig || {}),
        (c.cssconfig[e.nodeName.replace("css-", "")] = e.value))
      : (c[e.nodeName] = e.value);
  }
};
g.g.za.xx = function (a) {
  if (a) {
    if (
      ("string" != typeof a &&
        (g.g.userAgent.bf && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a &&
        ((a = g.W.Hf(a)), "xml" != a.nodeName.toLowerCase()))
    )
      throw TypeError("Toolbox should be an <xml> document.");
  } else a = null;
  return a;
};
g.g.xml = {};
g.g.xml.rG = "https://developers.google.com/blockly/xml";
g.g.xml.document = function () {
  return document;
};
g.g.xml.createElement = function (a) {
  return g.g.xml.document().createElementNS(g.g.xml.rG, a);
};
g.g.xml.createTextNode = function (a) {
  return g.g.xml.document().createTextNode(a);
};
g.g.xml.vL = function (a) {
  return new DOMParser().parseFromString(a, "text/xml");
};
g.g.xml.re = function (a) {
  return new XMLSerializer().serializeToString(a);
};
g.h.mg = function (a) {
  g.h.mg.v.constructor.call(this);
  this.pb = (this.Pe = "undefined" == typeof a) ? "" : a.id;
  this.Tc = this.Pe ? "" : a.u.id;
};
g.g.object.X(g.h.mg, g.h.Abstract);
g.h.mg.prototype.ya = function () {
  var a = g.h.mg.v.ya.call(this);
  a.blockId = this.pb;
  return a;
};
g.h.mg.prototype.ka = function (a) {
  g.h.mg.v.ka.call(this, a);
  this.pb = a.blockId;
};
g.h.Di = function (a, c, d, e, f) {
  g.h.Di.v.constructor.call(this, a);
  a &&
    ((this.element = "undefined" == typeof c ? "" : c),
    (this.name = "undefined" == typeof d ? "" : d),
    (this.oldValue = "undefined" == typeof e ? "" : e),
    (this.newValue = "undefined" == typeof f ? "" : f));
};
g.g.object.X(g.h.Di, g.h.mg);
g.h.mh = g.h.Di;
b = g.h.Di.prototype;
b.type = g.h.Rj;
b.ya = function () {
  var a = g.h.Di.v.ya.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.oldValue = this.oldValue;
  a.newValue = this.newValue;
  return a;
};
b.ka = function (a) {
  g.h.Di.v.ka.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.oldValue = a.oldValue;
  this.newValue = a.newValue;
};
b.Fm = function () {
  return this.oldValue == this.newValue;
};
b.run = function (a) {
  var c = v(this).Zd(this.pb);
  if (c)
    switch (
      (c.qd && c.qd.Jb(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (c = x(c, this.name))
          ? c.setValue(a)
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        c.fh(a || null);
        break;
      case "collapsed":
        c.Fj(!!a);
        break;
      case "disabled":
        c.je(!a);
        break;
      case "inline":
        c.cd(!!a);
        break;
      case "mutation":
        var d = "";
        c.rb && (d = (d = c.rb()) && g.W.re(d));
        if (c.Xb) {
          var e = g.W.Hf(a || "<mutation/>");
          c.Xb(e);
        }
        g.h.Ha(new g.h.Di(c, "mutation", null, d, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.pb);
};
g.h.Nf = function (a) {
  g.h.Nf.v.constructor.call(this, a);
  a &&
    (a.Qa && (this.cb = !1),
    (this.xml = a.u.pa ? g.W.Mu(a) : g.W.Jh(a)),
    (this.fj = g.h.NB(a)));
};
g.g.object.X(g.h.Nf, g.h.mg);
g.h.$p = g.h.Nf;
g.h.Nf.prototype.type = g.h.hq;
g.h.Nf.prototype.ya = function () {
  var a = g.h.Nf.v.ya.call(this);
  a.xml = g.W.re(this.xml);
  a.ids = this.fj;
  this.cb || (a.recordUndo = this.cb);
  return a;
};
g.h.Nf.prototype.ka = function (a) {
  g.h.Nf.v.ka.call(this, a);
  this.xml = g.W.Hf(a.xml);
  this.fj = a.ids;
  void 0 !== a.recordUndo && (this.cb = a.recordUndo);
};
g.h.Nf.prototype.run = function (a) {
  var c = v(this);
  if (a)
    (a = g.g.xml.createElement("xml")), a.appendChild(this.xml), g.W.tk(a, c);
  else {
    a = 0;
    for (var d; (d = this.fj[a]); a++) {
      var e = c.Zd(d);
      e
        ? e.I(!1)
        : d == this.pb &&
          console.warn("Can't uncreate non-existent block: " + d);
    }
  }
};
g.h.pg = function (a) {
  g.h.pg.v.constructor.call(this, a);
  if (a) {
    if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
    a.Qa && (this.cb = !1);
    this.Km = a.u.pa ? g.W.Mu(a) : g.W.Jh(a);
    this.fj = g.h.NB(a);
  }
};
g.g.object.X(g.h.pg, g.h.mg);
g.h.xE = g.h.pg;
g.h.pg.prototype.type = g.h.Tj;
g.h.pg.prototype.ya = function () {
  var a = g.h.pg.v.ya.call(this);
  a.oldXml = g.W.re(this.Km);
  a.ids = this.fj;
  this.cb || (a.recordUndo = this.cb);
  return a;
};
g.h.pg.prototype.ka = function (a) {
  g.h.pg.v.ka.call(this, a);
  this.Km = g.W.Hf(a.oldXml);
  this.fj = a.ids;
  void 0 !== a.recordUndo && (this.cb = a.recordUndo);
};
g.h.pg.prototype.run = function (a) {
  var c = v(this);
  if (a) {
    a = 0;
    for (var d; (d = this.fj[a]); a++) {
      var e = c.Zd(d);
      e
        ? e.I(!1)
        : d == this.pb && console.warn("Can't delete non-existent block: " + d);
    }
  } else
    (a = g.g.xml.createElement("xml")), a.appendChild(this.Km), g.W.tk(a, c);
};
g.h.ak = function (a) {
  g.h.ak.v.constructor.call(this, a);
  a &&
    (a.Qa && (this.cb = !1),
    (a = Aa(this)),
    (this.YC = a.gD),
    (this.UC = a.pC),
    (this.ex = a.eB));
};
g.g.object.X(g.h.ak, g.h.mg);
g.h.kn = g.h.ak;
b = g.h.ak.prototype;
b.type = g.h.vn;
b.ya = function () {
  var a = g.h.ak.v.ya.call(this);
  this.$k && (a.newParentId = this.$k);
  this.Zk && (a.newInputName = this.Zk);
  this.tj &&
    (a.newCoordinate = Math.round(this.tj.x) + "," + Math.round(this.tj.y));
  this.cb || (a.recordUndo = this.cb);
  return a;
};
b.ka = function (a) {
  g.h.ak.v.ka.call(this, a);
  this.$k = a.newParentId;
  this.Zk = a.newInputName;
  if (a.newCoordinate) {
    var c = a.newCoordinate.split(",");
    this.tj = new g.g.T(Number(c[0]), Number(c[1]));
  }
  void 0 !== a.recordUndo && (this.cb = a.recordUndo);
};
b.hl = function () {
  var a = Aa(this);
  this.$k = a.gD;
  this.Zk = a.pC;
  this.tj = a.eB;
};
function Aa(a) {
  var c = v(a).Zd(a.pb);
  a = {};
  var d = c.getParent();
  if (d) {
    if (((a.gD = d.id), (c = Ba(d, c)))) a.pC = c.name;
  } else a.eB = c.ab();
  return a;
}
b.Fm = function () {
  return this.YC == this.$k && this.UC == this.Zk && g.g.T.sf(this.ex, this.tj);
};
b.run = function (a) {
  var c = v(this),
    d = c.Zd(this.pb);
  if (d) {
    var e = a ? this.$k : this.YC,
      f = a ? this.Zk : this.UC;
    a = a ? this.tj : this.ex;
    var h = null;
    if (e && ((h = c.Zd(e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    d.getParent() && y(d);
    if (a) (f = d.ab()), d.moveBy(a.x - f.x, a.y - f.y);
    else {
      d = d.O || d.ba;
      if (f) {
        if ((c = z(h, f))) var k = c.connection;
      } else d.type == g.Qf && (k = h.Z);
      k
        ? d.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.pb);
};
g.C.register(g.C.aa.fc, g.h.hq, g.h.Nf);
g.C.register(g.C.aa.fc, g.h.Tj, g.h.pg);
g.C.register(g.C.aa.fc, g.h.Rj, g.h.Di);
g.C.register(g.C.aa.fc, g.h.vn, g.h.ak);
g.h.Fl = function (a) {
  this.Pe = "undefined" == typeof a;
  this.Tc = a ? a.id : "";
  this.group = g.h.uc();
  this.cb = !1;
};
g.g.object.X(g.h.Fl, g.h.Abstract);
g.h.Fl.prototype.type = g.h.fz;
g.h.Fl.prototype.ya = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.Tc && (a.workspaceId = this.Tc);
  return a;
};
g.h.Fl.prototype.ka = function (a) {
  this.Pe = !1;
  this.Tc = a.workspaceId;
  this.group = a.group;
};
g.C.register(g.C.aa.fc, g.h.fz, g.h.Fl);
g.h.Gh = function (a) {
  g.h.Gh.v.constructor.call(this);
  this.Lj = (this.Pe = "undefined" == typeof a) ? "" : a.Oa();
  this.Tc = this.Pe ? "" : a.u.id;
};
g.g.object.X(g.h.Gh, g.h.Abstract);
g.h.Gh.prototype.ya = function () {
  var a = g.h.Gh.v.ya.call(this);
  a.varId = this.Lj;
  return a;
};
g.h.Gh.prototype.ka = function (a) {
  g.h.Gh.v.ya.call(this);
  this.Lj = a.varId;
};
g.h.gf = function (a) {
  g.h.gf.v.constructor.call(this, a);
  a && ((this.ul = a.type), (this.tl = a.name));
};
g.g.object.X(g.h.gf, g.h.Gh);
g.h.gf.prototype.type = g.h.lA;
g.h.gf.prototype.ya = function () {
  var a = g.h.gf.v.ya.call(this);
  a.varType = this.ul;
  a.varName = this.tl;
  return a;
};
g.h.gf.prototype.ka = function (a) {
  g.h.gf.v.ka.call(this, a);
  this.ul = a.varType;
  this.tl = a.varName;
};
g.h.gf.prototype.run = function (a) {
  var c = v(this);
  a ? c.nf(this.tl, this.ul, this.Lj) : c.Th(this.Lj);
};
g.h.Tf = function (a) {
  g.h.Tf.v.constructor.call(this, a);
  a && ((this.ul = a.type), (this.tl = a.name));
};
g.g.object.X(g.h.Tf, g.h.Gh);
g.h.Tf.prototype.type = g.h.mA;
g.h.Tf.prototype.ya = function () {
  var a = g.h.Tf.v.ya.call(this);
  a.varType = this.ul;
  a.varName = this.tl;
  return a;
};
g.h.Tf.prototype.ka = function (a) {
  g.h.Tf.v.ka.call(this, a);
  this.ul = a.varType;
  this.tl = a.varName;
};
g.h.Tf.prototype.run = function (a) {
  var c = v(this);
  a ? c.Th(this.Lj) : c.nf(this.tl, this.ul, this.Lj);
};
g.h.yg = function (a, c) {
  g.h.yg.v.constructor.call(this, a);
  a && ((this.hx = a.name), (this.$w = "undefined" == typeof c ? "" : c));
};
g.g.object.X(g.h.yg, g.h.Gh);
g.h.yg.prototype.type = g.h.oA;
g.h.yg.prototype.ya = function () {
  var a = g.h.yg.v.ya.call(this);
  a.oldName = this.hx;
  a.newName = this.$w;
  return a;
};
g.h.yg.prototype.ka = function (a) {
  g.h.yg.v.ka.call(this, a);
  this.hx = a.oldName;
  this.$w = a.newName;
};
g.h.yg.prototype.run = function (a) {
  var c = v(this);
  a ? c.Cj(this.Lj, this.$w) : c.Cj(this.Lj, this.hx);
};
g.C.register(g.C.aa.fc, g.h.lA, g.h.gf);
g.C.register(g.C.aa.fc, g.h.mA, g.h.Tf);
g.C.register(g.C.aa.fc, g.h.oA, g.h.yg);
g.W = {};
g.W.RL = function () {
  var a = A,
    c = g.g.xml.createElement("xml"),
    d = g.W.ML(g.$.EA(a));
  d.hasChildNodes() && c.appendChild(d);
  var e = [].concat(a.at);
  1 < e.length &&
    ((a.hh.offset = Math.sin(g.g.Ra.Ed(g.Vb.Yz))),
    a.L && (a.hh.offset *= -1),
    e.sort(a.hh));
  d = 0;
  for (var f; (f = e[d]); d++) c.appendChild(f.RD(!0));
  a = a.ac(!0);
  for (d = 0; (e = a[d]); d++) c.appendChild(g.W.Mu(e, !0));
  return c;
};
g.W.ML = function (a) {
  for (var c = g.g.xml.createElement("variables"), d = 0, e; (e = a[d]); d++) {
    var f = g.g.xml.createElement("variable");
    f.appendChild(g.g.xml.createTextNode(e.name));
    e.type && f.setAttribute("type", e.type);
    f.id = e.Oa();
    c.appendChild(f);
  }
  return c;
};
g.W.Mu = function (a, c) {
  if (a.we() && ((a = Ca(a, !1)[0]), !a)) return new DocumentFragment();
  var d;
  a.u.L && (d = a.u.Sg());
  c = g.W.Jh(a, c);
  var e = a.ab();
  c.setAttribute("x", Math.round(a.u.L ? d - e.x : e.x));
  c.setAttribute("y", Math.round(e.y));
  return c;
};
g.W.pI = function (a) {
  var c = !1;
  a.name &&
    (a.fk
      ? (c = !0)
      : a.mq &&
        (console.warn(
          "Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."
        ),
        (c = !0)));
  return c
    ? ((c = g.g.xml.createElement("field")),
      c.setAttribute("name", a.name || ""),
      a.QD(c))
    : null;
};
g.W.nH = function (a, c) {
  for (var d = 0, e; (e = a.V[d]); d++)
    for (var f = 0, h; (h = e.kb[f]); f++) (h = g.W.pI(h)) && c.appendChild(h);
};
g.W.Jh = function (a, c) {
  if (a.we()) return (a = Ca(a, !1)[0]) ? g.W.Jh(a) : new DocumentFragment();
  var d = g.g.xml.createElement(a.Qa ? "shadow" : "block");
  d.setAttribute("type", a.type);
  c || d.setAttribute("id", a.id);
  if (a.rb) {
    var e = a.rb();
    e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e);
  }
  g.W.nH(a, d);
  if ((e = a.Ie.text)) {
    var f = a.Ie.size,
      h = a.Ie.Bx,
      k = g.g.xml.createElement("comment");
    k.appendChild(g.g.xml.createTextNode(e));
    k.setAttribute("pinned", h);
    k.setAttribute("h", f.height);
    k.setAttribute("w", f.width);
    d.appendChild(k);
  }
  a.data &&
    ((e = g.g.xml.createElement("data")),
    e.appendChild(g.g.xml.createTextNode(a.data)),
    d.appendChild(e));
  for (e = 0; (f = a.V[e]); e++) {
    var l;
    h = !0;
    if (f.type != g.rh) {
      var m = f.connection.sa();
      f.type == g.ob
        ? (l = g.g.xml.createElement("value"))
        : f.type == g.Cb && (l = g.g.xml.createElement("statement"));
      k = f.connection.um();
      !k || (m && m.Qa) || l.appendChild(g.W.RA(k, c));
      m &&
        ((k = g.W.Jh(m, c)),
        k.nodeType == g.g.o.Mi.ELEMENT_NODE && (l.appendChild(k), (h = !1)));
      l.setAttribute("name", f.name);
      h || d.appendChild(l);
    }
  }
  void 0 != a.bi && a.bi != a.gJ && d.setAttribute("inline", a.bi);
  a.isCollapsed() && d.setAttribute("collapsed", !0);
  a.isEnabled() || d.setAttribute("disabled", !0);
  a.ve() || a.Qa || d.setAttribute("deletable", !1);
  a.Kc() || a.Qa || d.setAttribute("movable", !1);
  a.fe() || d.setAttribute("editable", !1);
  if ((e = t(a)))
    (k = g.W.Jh(e, c)),
      k.nodeType == g.g.o.Mi.ELEMENT_NODE &&
        ((l = g.g.xml.createElement("next")),
        l.appendChild(k),
        d.appendChild(l));
  k = a.Z && a.Z.um();
  !k || (e && e.Qa) || l.appendChild(g.W.RA(k, c));
  return d;
};
g.W.RA = function (a, c) {
  for (var d = (a = a.cloneNode(!0)), e; d; )
    if ((c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild))
      d = d.firstChild;
    else {
      for (; d && !d.nextSibling; )
        (e = d),
          (d = d.parentNode),
          e.nodeType == g.g.o.Mi.TEXT_NODE &&
            "" == e.data.trim() &&
            d.firstChild != e &&
            g.g.o.removeNode(e);
      d &&
        ((e = d),
        (d = d.nextSibling),
        e.nodeType == g.g.o.Mi.TEXT_NODE &&
          "" == e.data.trim() &&
          g.g.o.removeNode(e));
    }
  return a;
};
g.W.re = function (a) {
  return g.g.xml.re(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>");
};
g.W.zO = function (a) {
  a = g.W.re(a).split("<");
  for (var c = "", d = 1; d < a.length; d++) {
    var e = a[d];
    "/" == e[0] && (c = c.substring(2));
    a[d] = c + "<" + e;
    "/" != e[0] && "/>" != e.slice(-2) && (c += "  ");
  }
  a = a.join("\n");
  a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
  return a.replace(/^\n/, "");
};
g.W.Hf = function (a) {
  var c = g.g.xml.vL(a);
  if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length)
    throw Error("textToDom was unable to parse: " + a);
  return c.documentElement;
};
g.W.vO = function (a, c) {
  c.dd(!1);
  c.clear();
  a = g.W.tk(a, c);
  c.dd(!0);
  return a;
};
g.W.tk = function (a, c) {
  if (a instanceof g.Vb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  c.L && (e = c.Sg());
  d = [];
  g.g.o.Ap();
  var f = g.h.uc();
  f || g.h.ea(!0);
  c.dd && c.dd(!1);
  var h = !0;
  try {
    for (var k = 0, l; (l = a.childNodes[k]); k++) {
      var m = l.nodeName.toLowerCase(),
        n = l;
      if ("block" == m || ("shadow" == m && !g.h.cb)) {
        var p = g.W.rk(n, c);
        d.push(p.id);
        var r = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10,
          w = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
        isNaN(r) || isNaN(w) || p.moveBy(c.L ? e - r : r, w);
        h = !1;
      } else {
        if ("shadow" == m)
          throw TypeError("Shadow block cannot be a top-level block.");
        if ("comment" == m)
          c.pa
            ? g.Zl
              ? g.Zl.so(n)
              : console.warn(
                  "Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment."
                )
            : g.xA
            ? g.xA.so(n)
            : console.warn(
                "Missing require for Blockly.WorkspaceComment, ignoring workspace comment."
              );
        else if ("variables" == m) {
          if (h) g.W.hI(n, c);
          else
            throw Error(
              "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
            );
          h = !1;
        }
      }
    }
  } finally {
    f || g.h.ea(!1), g.g.o.Bp();
  }
  c.dd && c.dd(!0);
  g.h.Ha(new g.h.Fl(c));
  return d;
};
g.W.sO = function (a, c) {
  var d;
  Object.prototype.hasOwnProperty.call(c, "scale") && (d = Da(c));
  a = g.W.tk(a, c);
  if (d && d.top != d.bottom) {
    var e = d.bottom;
    var f = c.L ? d.right : d.left;
    var h = Infinity,
      k = -Infinity,
      l = Infinity;
    for (d = 0; d < a.length; d++) {
      var m = c.Zd(a[d]).ab();
      m.y < l && (l = m.y);
      m.x < h && (h = m.x);
      m.x > k && (k = m.x);
    }
    e = e - l + 10;
    f = c.L ? f - k : f - h;
    for (d = 0; d < a.length; d++) c.Zd(a[d]).moveBy(f, e);
  }
  return a;
};
g.W.rk = function (a, c) {
  if (a instanceof g.Vb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  g.h.disable();
  d = c.yk();
  try {
    var e = g.W.Av(a, c),
      f = q(e, !1);
    if (c.pa) {
      Ea(e, !1);
      for (var h = f.length - 1; 0 <= h; h--) f[h].wf();
      for (h = f.length - 1; 0 <= h; h--) f[h].Ia(!1);
      setTimeout(function () {
        e.Zf || Ea(e, !0);
      }, 1);
      Fa(e);
      Ha(c);
    } else for (h = f.length - 1; 0 <= h; h--) f[h].Ik();
  } finally {
    g.h.enable();
  }
  if (g.h.isEnabled()) {
    a = g.$.JB(c, d);
    for (h = 0; h < a.length; h++) g.h.Ha(new g.h.gf(a[h]));
    g.h.Ha(new g.h.$p(e));
  }
  return e;
};
g.W.hI = function (a, c) {
  for (var d = 0, e; (e = a.childNodes[d]); d++)
    if (e.nodeType == g.g.o.Mi.ELEMENT_NODE) {
      var f = e.getAttribute("type"),
        h = e.getAttribute("id");
      c.nf(e.textContent, f, h);
    }
};
g.W.Av = function (a, c) {
  var d = null,
    e = a.getAttribute("type");
  if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
  var f = a.getAttribute("id");
  d = c.sj(e, f);
  var h = null;
  f = 0;
  for (var k; (k = a.childNodes[f]); f++)
    if (k.nodeType != g.g.o.Mi.TEXT_NODE) {
      for (var l, m = (h = null), n = 0; (l = k.childNodes[n]); n++)
        l.nodeType == g.g.o.Mi.ELEMENT_NODE &&
          ("block" == l.nodeName.toLowerCase()
            ? (h = l)
            : "shadow" == l.nodeName.toLowerCase() && (m = l));
      n = !1;
      var p = k.getAttribute("name");
      l = k;
      switch (k.nodeName.toLowerCase()) {
        case "mutation":
          d.Xb && (d.Xb(l), d.wf && (n = !0));
          break;
        case "comment":
          if (!g.Comment) {
            console.warn(
              "Missing require for Blockly.Comment, ignoring block comment."
            );
            break;
          }
          m = l.textContent;
          h = "true" == l.getAttribute("pinned");
          k = parseInt(l.getAttribute("w"), 10);
          l = parseInt(l.getAttribute("h"), 10);
          d.fh(m);
          d.Ie.Bx = h;
          isNaN(k) || isNaN(l) || (d.Ie.size = new g.g.ff(k, l));
          h &&
            d.AI &&
            !d.Qb &&
            setTimeout(function () {
              d.lf.Jb(!0);
            }, 1);
          break;
        case "data":
          d.data = k.textContent;
          break;
        case "title":
        case "field":
          g.W.gI(d, p, l);
          break;
        case "value":
        case "statement":
          l = z(d, p);
          if (!l) {
            console.warn("Ignoring non-existent input " + p + " in block " + e);
            break;
          }
          if (h)
            if (((h = g.W.Av(h, c)), h.O)) l.connection.connect(h.O);
            else if (h.ba) l.connection.connect(h.ba);
            else
              throw TypeError(
                "Child block does not have output or previous statement."
              );
          m && l.connection.Tm(m);
          break;
        case "next":
          if (h) {
            if (!d.Z) throw TypeError("Next statement does not exist.");
            if (d.Z.isConnected())
              throw TypeError("Next statement is already connected.");
            h = g.W.Av(h, c);
            if (!h.ba)
              throw TypeError("Next block does not have previous statement.");
            d.Z.connect(h.ba);
          }
          m && d.Z && d.Z.Tm(m);
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  n && d.wf();
  (f = a.getAttribute("inline")) && d.cd("true" == f);
  (f = a.getAttribute("disabled")) && d.je("true" != f && "disabled" != f);
  if ((f = a.getAttribute("deletable"))) d.nv = "true" == f;
  (f = a.getAttribute("movable")) && d.Ps("true" == f);
  (f = a.getAttribute("editable")) && d.Ux("true" == f);
  (f = a.getAttribute("collapsed")) && d.Fj("true" == f);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = Ca(d, !1);
    for (f = 0; (c = a[f]); f++)
      if (!c.Qa) throw TypeError("Shadow block not allowed non-shadow child.");
    if (d.Yh().length)
      throw TypeError("Shadow blocks cannot have variable references.");
    d.Xx(!0);
  }
  return d;
};
g.W.gI = function (a, c, d) {
  var e = x(a, c);
  e
    ? e.so(d)
    : console.warn("Ignoring non-existent field " + c + " in block " + a.type);
};
g.W.XH = function (a) {
  for (var c = 0, d; (d = a.childNodes[c]); c++)
    if ("next" == d.nodeName.toLowerCase()) {
      a.removeChild(d);
      break;
    }
};
g.Nd = function (a) {
  var c = !!a.readOnly;
  if (c)
    var d = null,
      e = !1,
      f = !1,
      h = !1,
      k = !1,
      l = !1,
      m = !1;
  else {
    d = g.g.za.bv(a.toolbox);
    e = g.g.za.Eo(d);
    f = a.trashcan;
    void 0 === f && (f = e);
    var n = a.maxTrashcanContents;
    f ? void 0 === n && (n = 32) : (n = 0);
    h = a.collapse;
    void 0 === h && (h = e);
    k = a.comments;
    void 0 === k && (k = e);
    l = a.disable;
    void 0 === l && (l = e);
    m = a.sounds;
    void 0 === m && (m = !0);
  }
  var p = !!a.rtl,
    r = a.horizontalLayout;
  void 0 === r && (r = !1);
  var w = a.toolboxPosition;
  w = "end" !== w;
  w = r
    ? w
      ? g.g.za.Qd.Jq
      : g.g.za.Qd.qt
    : w == p
    ? g.g.za.Qd.dk
    : g.g.za.Qd.Zj;
  var E = a.css;
  void 0 === E && (E = !0);
  var aa = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (aa = a.media) : a.path && (aa = a.path + "media/");
  var ba = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
    Ga = a.renderer || "geras",
    Me = a.plugins || {};
  this.L = p;
  this.ki = ba;
  this.collapse = h;
  this.Tn = k;
  this.disable = l;
  this.readOnly = c;
  this.Tw = a.maxBlocks || Infinity;
  this.fs = a.maxInstances;
  this.xj = aa;
  this.Eo = e;
  this.ad = g.Nd.fK(a, e);
  this.iC = f;
  this.gs = n;
  this.$I = m;
  this.XI = E;
  this.Bd = r;
  this.Yg = d;
  this.eC = g.Nd.eK(a);
  this.vb = g.Nd.hK(a);
  this.Ka = w;
  this.wL = g.Nd.gK(a);
  this.kp = Ga;
  this.lp = a.rendererOverrides;
  this.iw = null;
  this.vc = a.parentWorkspace;
  this.plugins = Me;
};
g.ZL = function () {};
g.Nd.fK = function (a, c) {
  var d = a.move || {},
    e = {};
  e.scrollbars =
    void 0 === d.scrollbars && void 0 === a.scrollbars
      ? c
      : !!d.scrollbars || !!a.scrollbars;
  e.Nj = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
  e.Zi = e.scrollbars ? (void 0 === d.drag ? !0 : !!d.drag) : !1;
  return e;
};
g.Nd.hK = function (a) {
  a = a.zoom || {};
  var c = {};
  c.controls = void 0 === a.controls ? !1 : !!a.controls;
  c.Nj = void 0 === a.wheel ? !1 : !!a.wheel;
  c.ID = void 0 === a.startScale ? 1 : Number(a.startScale);
  c.So = void 0 === a.maxScale ? 3 : Number(a.maxScale);
  c.Uo = void 0 === a.minScale ? 0.3 : Number(a.minScale);
  c.ZK = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
  c.Ax = void 0 === a.pinch ? c.Nj || c.controls : !!a.pinch;
  return c;
};
g.Nd.eK = function (a) {
  a = a.grid || {};
  var c = {};
  c.spacing = Number(a.spacing) || 0;
  c.Fb = a.colour || "#888";
  c.length = void 0 === a.length ? 1 : Number(a.length);
  c.bP = 0 < c.spacing && !!a.snap;
  return c;
};
g.Nd.gK = function (a) {
  a = a.theme || g.Dh.Ei;
  return "string" == typeof a
    ? g.C.cw(g.C.aa.su, a)
    : a instanceof g.hk
    ? a
    : g.hk.VH(a.name || "builtin" + g.g.Gl.bw(), a);
};
g.Nd.xx = function (a) {
  g.g.ov.warn(
    "Blockly.Options.parseToolboxTree",
    "September 2020",
    "September 2021",
    "Blockly.utils.toolbox.parseToolboxTree"
  );
  return g.g.za.xx(a);
};
g.K = {};
g.K.visible = !1;
g.K.em = !1;
g.K.VF = 50;
g.K.MC = 0;
g.K.wp = 0;
g.K.Dw = 0;
g.K.Ew = 0;
g.K.Hb = null;
g.K.bp = null;
g.K.Gz = 0;
g.K.Hz = 10;
g.K.EG = 10;
g.K.EF = 750;
g.K.St = 5;
g.K.mb = null;
g.K.KI = function () {
  var a = g.K.bC(g.K.Hb);
  if (a) {
    for (a = a.If; "function" == typeof a; ) a = a();
    if ("string" != typeof a)
      throw Error("Tooltip function must return a string.");
    return a;
  }
  return "";
};
g.K.bC = function (a) {
  for (; a && a.If; ) {
    if ("string" == typeof a.If || "function" == typeof a.If) return a;
    a = a.If;
  }
  return null;
};
g.K.$a = function () {
  g.K.mb ||
    ((g.K.mb = document.createElement("div")),
    (g.K.mb.className = "blocklyTooltipDiv"),
    (g.As || document.body).appendChild(g.K.mb));
};
g.K.dm = function (a) {
  a.CJ = g.Ud(a, "mouseover", null, g.K.aK);
  a.AJ = g.Ud(a, "mouseout", null, g.K.$J);
  a.addEventListener("mousemove", g.K.Zo, !1);
};
g.K.sy = function (a) {
  a && (g.Ma(a.CJ), g.Ma(a.AJ), a.removeEventListener("mousemove", g.K.Zo));
};
g.K.aK = function (a) {
  g.K.em ||
    ((a = g.K.bC(a.currentTarget)),
    g.K.Hb != a && (g.K.Ja(), (g.K.bp = null), (g.K.Hb = a)),
    clearTimeout(g.K.MC));
};
g.K.$J = function () {
  g.K.em ||
    ((g.K.MC = setTimeout(function () {
      g.K.Hb = null;
      g.K.bp = null;
      g.K.Ja();
    }, 1)),
    clearTimeout(g.K.wp));
};
g.K.Zo = function (a) {
  if (g.K.Hb && g.K.Hb.If && !g.K.em)
    if (g.K.visible) {
      var c = g.K.Dw - a.pageX;
      a = g.K.Ew - a.pageY;
      Math.sqrt(c * c + a * a) > g.K.EG && g.K.Ja();
    } else
      g.K.bp != g.K.Hb &&
        (clearTimeout(g.K.wp),
        (g.K.Dw = a.pageX),
        (g.K.Ew = a.pageY),
        (g.K.wp = setTimeout(g.K.hL, g.K.EF)));
};
g.K.I = function () {
  g.K.Hb = null;
  g.K.bp = null;
  g.K.Ja();
};
g.K.Ja = function () {
  g.K.visible &&
    ((g.K.visible = !1), g.K.mb && (g.K.mb.style.display = "none"));
  g.K.wp && clearTimeout(g.K.wp);
};
g.K.block = function () {
  g.K.Ja();
  g.K.em = !0;
};
g.K.DL = function () {
  g.K.em = !1;
};
g.K.hL = function () {
  if (!g.K.em && ((g.K.bp = g.K.Hb), g.K.mb)) {
    g.K.mb.textContent = "";
    var a = g.K.KI();
    a = g.g.tb.dE(a, g.K.VF);
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) {
      var d = document.createElement("div");
      d.appendChild(document.createTextNode(a[c]));
      g.K.mb.appendChild(d);
    }
    a = g.K.Hb.L;
    c = document.documentElement.clientWidth;
    d = document.documentElement.clientHeight;
    g.K.mb.style.direction = a ? "rtl" : "ltr";
    g.K.mb.style.display = "block";
    g.K.visible = !0;
    var e = g.K.Dw;
    e = a ? e - (g.K.Gz + g.K.mb.offsetWidth) : e + g.K.Gz;
    var f = g.K.Ew + g.K.Hz;
    f + g.K.mb.offsetHeight > d + window.scrollY &&
      (f -= g.K.mb.offsetHeight + 2 * g.K.Hz);
    a
      ? (e = Math.max(g.K.St - window.scrollX, e))
      : e + g.K.mb.offsetWidth > c + window.scrollX - 2 * g.K.St &&
        (e = c - g.K.mb.offsetWidth - 2 * g.K.St);
    g.K.mb.style.top = f + "px";
    g.K.mb.style.left = e + "px";
  }
};
g.yA = function (a) {
  this.Xn = a;
  this.$a();
};
b = g.yA.prototype;
b.Ob = null;
b.Xn = null;
b.$a = function () {
  this.Ob ||
    ((this.Ob = g.g.o.M(
      g.g.F.Pi,
      {
        xmlns: g.g.o.Fn,
        "xmlns:html": g.g.o.Xj,
        "xmlns:xlink": g.g.o.Uf,
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible",
      },
      null
    )),
    this.Xn.appendChild(this.Ob));
};
b.ol = function (a, c) {
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.Ob.style.display = "block";
  g.g.o.rp(this.Ob, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.ew = function () {
  return g.g.tf(this.Ob);
};
b.$q = function (a) {
  if (!a)
    throw Error(
      "Couldn't clear and hide the drag surface: missing new surface."
    );
  var c = this.Ob.childNodes[0],
    d = this.Ob.childNodes[1];
  if (
    !(
      c &&
      d &&
      g.g.o.Or(c, "blocklyBlockCanvas") &&
      g.g.o.Or(d, "blocklyBubbleCanvas")
    )
  )
    throw Error(
      "Couldn't clear and hide the drag surface. A node was missing."
    );
  null != this.Fx ? g.g.o.Kk(c, this.Fx) : a.insertBefore(c, a.firstChild);
  g.g.o.Kk(d, c);
  this.Ob.style.display = "none";
  if (this.Ob.childNodes.length) throw Error("Drag surface was not cleared.");
  g.g.o.rp(this.Ob, "");
  this.Fx = null;
};
g.G = function (a, c, d) {
  if (!c) throw Error("Cannot create a node without a location.");
  this.Kp = a;
  this.Bm = g.G.iJ(a);
  this.Fa = c;
  this.ft = null;
  (a = d || null) && a.gE && (this.ft = a.gE);
};
g.G.types = {
  Gc: "field",
  kc: "block",
  cf: "input",
  ck: "output",
  Ld: "next",
  Pd: "previous",
  tg: "stack",
  Wc: "workspace",
};
g.G.Li = !1;
g.G.PE = -20;
g.G.iJ = function (a) {
  switch (a) {
    case g.G.types.Pd:
    case g.G.types.Ld:
    case g.G.types.cf:
    case g.G.types.ck:
      return !0;
  }
  return !1;
};
g.G.km = function (a) {
  return a ? new g.G(g.G.types.Gc, a) : null;
};
g.G.Hg = function (a) {
  return a
    ? a.type == g.ob || (a.type == g.Cb && a.Qg())
      ? g.G.nk(a.Qg())
      : a.type == g.Cb
      ? new g.G(g.G.types.Ld, a)
      : a.type == g.Pf
      ? new g.G(g.G.types.ck, a)
      : a.type == g.Qf
      ? new g.G(g.G.types.Pd, a)
      : null
    : null;
};
g.G.nk = function (a) {
  return a && a.connection ? new g.G(g.G.types.cf, a.connection) : null;
};
g.G.Gg = function (a) {
  return a ? new g.G(g.G.types.kc, a) : null;
};
g.G.Zn = function (a) {
  return a ? new g.G(g.G.types.tg, a) : null;
};
g.G.lm = function (a, c) {
  return c && a ? new g.G(g.G.types.Wc, a, { gE: c }) : null;
};
g.G.gv = function (a) {
  var c = a.ba || a.O;
  return c ? g.G.Hg(c) : g.G.Gg(a);
};
b = g.G.prototype;
b.qb = function () {
  return this.Kp;
};
function Ia(a, c) {
  a = a.Fa;
  a instanceof g.me || (a = a.Y());
  if (!a || !a.u) return null;
  var d = a.ce();
  a = d.u.ac(!0);
  for (var e = 0, f; (f = a[e]); e++)
    if (d.id == f.id)
      return (
        (c = e + (c ? 1 : -1)), -1 == c || c == a.length ? null : g.G.Zn(a[c])
      );
  throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}
function Ja(a) {
  if (!a) return null;
  do var c = a.ba && a.ba.sa();
  while (c && t(c) == a && (a = c));
  return (c = a.ba || a.O) && c.ma && c.ma.Qg() ? g.G.nk(c.ma.Qg()) : g.G.Zn(a);
}
b.Y = function () {
  return this.qb() === g.G.types.kc
    ? this.Fa
    : this.qb() === g.G.types.tg
    ? this.Fa
    : this.qb() === g.G.types.Wc
    ? null
    : this.Fa.Y();
};
b.next = function () {
  switch (this.Kp) {
    case g.G.types.tg:
      return Ia(this, !0);
    case g.G.types.ck:
      var a = this.Fa;
      return g.G.Gg(a.Y());
    case g.G.types.Gc:
      a: {
        var c = this.Fa,
          d = c.Qg();
        a = c.Y();
        c = d.kb.indexOf(c) + 1;
        d = a.V.indexOf(d);
        for (var e; (e = a.V[d]); d++) {
          for (var f = e.kb; c < f.length; ) {
            if (Ka(f[c]) || g.G.Li) {
              a = g.G.km(f[c]);
              break a;
            }
            c++;
          }
          c = 0;
          if (e.connection) {
            a = g.G.nk(e);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.G.types.cf:
      a: {
        c = this.Fa.Qg();
        a = c.Y();
        for (c = a.V.indexOf(c) + 1; (d = a.V[c]); c++) {
          e = d.kb;
          f = 0;
          for (var h; (h = e[f]); f++)
            if (Ka(h) || g.G.Li) {
              a = g.G.km(h);
              break a;
            }
          if (d.connection) {
            a = g.G.nk(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.G.types.kc:
      return g.G.Hg(this.Fa.Z);
    case g.G.types.Pd:
      return (a = this.Fa), g.G.Gg(a.Y());
    case g.G.types.Ld:
      return (a = this.Fa), g.G.Hg(a.ma);
  }
  return null;
};
b.Vg = function () {
  switch (this.Kp) {
    case g.G.types.Wc:
      var a = this.Fa.ac(!0);
      if (0 < a.length) return g.G.Zn(a[0]);
      break;
    case g.G.types.tg:
      a = this.Fa;
      var c = a.ba || a.O;
      return c ? g.G.Hg(c) : g.G.Gg(a);
    case g.G.types.kc:
      a = this.Fa;
      a: {
        a = a.V;
        c = 0;
        for (var d; (d = a[c]); c++) {
          for (var e = d.kb, f = 0, h; (h = e[f]); f++)
            if (Ka(h) || g.G.Li) {
              a = g.G.km(h);
              break a;
            }
          if (d.connection) {
            a = g.G.nk(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.G.types.cf:
      return g.G.Hg(this.Fa.ma);
  }
  return null;
};
b.Df = function () {
  switch (this.Kp) {
    case g.G.types.tg:
      return Ia(this, !1);
    case g.G.types.Gc:
      a: {
        var a = this.Fa;
        var c = a.Qg();
        var d = a.Y();
        a = c.kb.indexOf(a) - 1;
        for (var e = d.V.indexOf(c), f; (f = d.V[e]); e--) {
          if (f.connection && f !== c) {
            c = g.G.nk(f);
            break a;
          }
          for (f = f.kb; -1 < a; ) {
            if (Ka(f[a]) || g.G.Li) {
              c = g.G.km(f[a]);
              break a;
            }
            a--;
          }
          0 <= e - 1 && (a = d.V[e - 1].kb.length - 1);
        }
        c = null;
      }
      return c;
    case g.G.types.cf:
      a: {
        c = this.Fa.Qg();
        d = c.Y();
        for (a = d.V.indexOf(c); (e = d.V[a]); a--) {
          if (e.connection && e !== c) {
            c = g.G.nk(e);
            break a;
          }
          e = e.kb;
          f = e.length - 1;
          for (var h; (h = e[f]); f--)
            if (Ka(h) || g.G.Li) {
              c = g.G.km(h);
              break a;
            }
        }
        c = null;
      }
      return c;
    case g.G.types.kc:
      return (c = this.Fa), g.G.Hg(c.ba || c.O);
    case g.G.types.Pd:
      c = this.Fa;
      if ((c = c.ma) && !c.Qg()) return g.G.Hg(c);
      break;
    case g.G.types.Ld:
      return (c = this.Fa), g.G.Gg(c.Y());
  }
  return null;
};
b.Zg = function () {
  switch (this.Kp) {
    case g.G.types.tg:
      var a = this.Fa,
        c = a.ab();
      return g.G.lm(a.u, new g.g.T(c.x, c.y + g.G.PE));
    case g.G.types.ck:
      return (a = this.Fa), (c = a.ma) ? g.G.Hg(c) : g.G.Zn(a.Y());
    case g.G.types.Gc:
      return g.G.Gg(this.Fa.Y());
    case g.G.types.cf:
      return (a = this.Fa), g.G.Gg(a.Y());
    case g.G.types.kc:
      return (a = this.Fa), Ja(a);
    case g.G.types.Pd:
      return (a = this.Fa), Ja(a.Y());
    case g.G.types.Ld:
      return (a = this.Fa), Ja(a.Y());
  }
  return null;
};
g.N = Object.create(null);
g.g.ov = {};
g.g.ov.warn = function (a, c, d, e) {
  a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
  e && (a += "\nUse " + e + " instead.");
  console.warn(a);
};
g.Ca = function (a, c) {
  this.J = a;
  this.type = c;
};
g.Ca.bq = 0;
g.Ca.Rz = 1;
g.Ca.Uz = 2;
g.Ca.Tz = 3;
g.Ca.Oz = 4;
g.Ca.Pz = 5;
g.Ca.Sz = 6;
g.Ca.Qz = 7;
b = g.Ca.prototype;
b.ma = null;
b.Zf = !1;
b.Ag = null;
b.Ss = null;
b.x = 0;
b.y = 0;
b.Wf = function (a) {
  var c = this,
    d = c.Y(),
    e = a.Y();
  a.isConnected() && a.disconnect();
  if (c.isConnected()) {
    var f = c.sa(),
      h = c.um();
    c.Ss = null;
    if (f.Qa) (h = g.W.Jh(f)), f.I(!1), (f = null);
    else if (c.type == g.ob) {
      if (!f.O) throw Error("Orphan block does not have an output connection.");
      var k = g.Ca.CC(e, f);
      k && (f.O.connect(k), (f = null));
    } else if (c.type == g.Cb) {
      if (!f.ba)
        throw Error("Orphan block does not have a previous connection.");
      for (k = e; k.Z; ) {
        var l = t(k);
        if (l && !l.Qa) k = l;
        else {
          B(f.u.Vn, f.ba, k.Z, !1) && (k.Z.connect(f.ba), (f = null));
          break;
        }
      }
    }
    if (f && (c.disconnect(), g.h.cb)) {
      var m = g.h.uc();
      setTimeout(function () {
        f.u &&
          !f.getParent() &&
          (g.h.ea(m), f.O ? f.O.ss(c) : f.ba && f.ba.ss(c), g.h.ea(!1));
      }, g.Yp);
    }
    c.Ss = h;
  }
  var n;
  g.h.isEnabled() && (n = new g.h.kn(e));
  g.Ca.KH(c, a);
  e.Qs(d);
  n && (n.hl(), g.h.Ha(n));
};
b.I = function () {
  if (this.isConnected()) {
    this.Tm(null);
    var a = this.sa();
    a && y(a);
  }
  this.Zf = !0;
};
b.Y = function () {
  return this.J;
};
function C(a) {
  return a.type == g.ob || a.type == g.Cb;
}
b.isConnected = function () {
  return !!this.ma;
};
b.Wq = function (a) {
  g.g.ov.warn(
    "Connection.prototype.canConnectWithReason",
    "July 2020",
    "July 2021",
    "the workspace's connection checker"
  );
  return La(this).Wq(this, a, !1);
};
function La(a) {
  return a.J.u.Vn;
}
b.ss = function () {};
b.connect = function (a) {
  if (this.ma != a && B(La(this), this, a, !1)) {
    var c = g.h.uc();
    c || g.h.ea(!0);
    C(this) ? this.Wf(a) : a.Wf(this);
    c || g.h.ea(!1);
  }
};
g.Ca.KH = function (a, c) {
  if (!a || !c) throw Error("Cannot connect null connections.");
  a.ma = c;
  c.ma = a;
};
g.Ca.iL = function (a, c) {
  var d = null;
  c = c.O;
  for (var e = 0; e < a.V.length; e++) {
    var f = a.V[e].connection,
      h = La(c);
    if (f && f.type == g.ob && B(h, c, f, !1)) {
      if (d) return null;
      d = f;
    }
  }
  return d;
};
g.Ca.CC = function (a, c) {
  for (var d; (d = g.Ca.iL(a, c)); ) if (((a = d.sa()), !a || a.Qa)) return d;
  return null;
};
b = g.Ca.prototype;
b.disconnect = function () {
  var a = this.ma;
  if (!a) throw Error("Source connection not connected.");
  if (a.ma != this)
    throw Error("Target connection not connected to source connection.");
  if (C(this)) {
    var c = this.J;
    var d = a.Y();
    a = this;
  } else (c = a.Y()), (d = this.J);
  var e = g.h.uc();
  e || g.h.ea(!0);
  this.wv(c, d);
  d.Qa || a.mp();
  e || g.h.ea(!1);
};
b.wv = function (a, c) {
  var d;
  g.h.isEnabled() && (d = new g.h.kn(c));
  this.ma = this.ma.ma = null;
  c.Qs(null);
  d && (d.hl(), g.h.Ha(d));
};
b.mp = function () {
  var a = this.Y(),
    c = this.um();
  if (a.u && c)
    if (((a = g.W.rk(c, a.u)), a.O)) this.connect(a.O);
    else if (a.ba) this.connect(a.ba);
    else throw Error("Child block does not have output or previous statement.");
};
b.sa = function () {
  return this.isConnected() ? this.ma.Y() : null;
};
b.bD = function () {
  !this.isConnected() ||
    (this.ma && B(La(this), this, this.ma, !1)) ||
    y(C(this) ? this.sa() : this.J);
};
b.Sb = function (a) {
  a
    ? (Array.isArray(a) || (a = [a]), (this.Ag = a), this.bD())
    : (this.Ag = null);
  return this;
};
b.Tm = function (a) {
  this.Ss = a;
  a = this.sa();
  a ? a.Qa && (a.I(!1), this.mp()) : this.mp();
};
b.um = function () {
  return this.Ss;
};
b.OC = function () {
  return [];
};
b.Qg = function () {
  for (var a = null, c = this.J, d = c.V, e = 0; e < c.V.length; e++)
    if (d[e].connection === this) {
      a = d[e];
      break;
    }
  return a;
};
b.toString = function () {
  var a = this.J;
  if (a)
    if (a.O == this) var c = "Output Connection of ";
    else if (a.ba == this) c = "Previous Connection of ";
    else if (a.Z == this) c = "Next Connection of ";
    else {
      c = null;
      for (var d = 0, e; (e = a.V[d]); d++)
        if (e.connection == this) {
          c = e;
          break;
        }
      if (c) c = 'Input "' + c.name + '" connection on ';
      else
        return (
          console.warn("Connection not actually connected to sourceBlock_"),
          "Orphan Connection"
        );
    }
  else return "Orphan Connection";
  d = a.type ? '"' + a.type + '" block' : "Block";
  a.id && (d += ' (id="' + a.id + '")');
  return c + d;
};
g.ga = {};
g.ga.jn = {};
g.ga.register = function (a, c) {
  if ("string" != typeof a || "" == a.trim())
    throw Error('Error: Invalid extension name "' + a + '"');
  if (g.ga.jn[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if ("function" != typeof c)
    throw Error('Error: Extension "' + a + '" must be a function');
  g.ga.jn[a] = c;
};
g.ga.Gs = function (a, c) {
  if (!c || "object" != typeof c)
    throw Error('Error: Mixin "' + a + '" must be a object');
  g.ga.register(a, function () {
    this.Re(c);
  });
};
g.ga.Jx = function (a, c, d, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  g.ga.OA(f, c.Xb, "domToMutation");
  g.ga.OA(f, c.rb, "mutationToDom");
  var h = g.ga.QA(c, f);
  if (d && "function" != typeof d)
    throw Error('Extension "' + a + '" is not a function');
  g.ga.register(a, function () {
    if (h) {
      if (!g.lc) throw Error(f + "Missing require for Blockly.Mutator");
      this.Hj(new g.lc(e || []));
    }
    this.Re(c);
    d && d.apply(this);
  });
};
g.ga.unregister = function (a) {
  g.ga.jn[a]
    ? delete g.ga.jn[a]
    : console.warn(
        'No extension mapping for name "' + a + '" found to unregister'
      );
};
g.ga.apply = function (a, c, d) {
  var e = g.ga.jn[a];
  if ("function" != typeof e)
    throw Error('Error: Extension "' + a + '" not found.');
  if (d) g.ga.CH(a, c);
  else var f = g.ga.aw(c);
  e.apply(c);
  if (d) g.ga.AH('Error after applying mutator "' + a + '": ', c);
  else if (!g.ga.JJ(f, c))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
g.ga.OA = function (a, c, d) {
  if (!c) throw Error(a + 'missing required property "' + d + '"');
  if ("function" != typeof c)
    throw Error(a + '" required property "' + d + '" must be a function');
};
g.ga.CH = function (a, c) {
  if (g.ga.aw(c).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        c.id
    );
};
g.ga.QA = function (a, c) {
  var d = void 0 !== a.Nh,
    e = void 0 !== a.Rh;
  if (d && e) {
    if ("function" != typeof a.Nh)
      throw Error(c + "compose must be a function.");
    if ("function" != typeof a.Rh)
      throw Error(c + "decompose must be a function.");
    return !0;
  }
  if (d || e)
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
g.ga.AH = function (a, c) {
  if ("function" != typeof c.Xb)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof c.rb)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  g.ga.QA(c, a);
};
g.ga.aw = function (a) {
  var c = [];
  void 0 !== a.Xb && c.push(a.Xb);
  void 0 !== a.rb && c.push(a.rb);
  void 0 !== a.Nh && c.push(a.Nh);
  void 0 !== a.Rh && c.push(a.Rh);
  return c;
};
g.ga.JJ = function (a, c) {
  c = g.ga.aw(c);
  if (c.length != a.length) return !1;
  for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
  return !0;
};
g.ga.Tq = function (a, c) {
  var d = [];
  "object" == typeof document &&
    g.g.yD(function () {
      for (var e in c) g.g.PA(c[e]);
    });
  return function () {
    this.type &&
      -1 == d.indexOf(this.type) &&
      (g.ga.BH(this, a, c), d.push(this.type));
    this.eb(
      function () {
        var e = String(D(this, a)),
          f = c[e];
        null == f
          ? -1 == d.indexOf(this.type) &&
            ((e = "No tooltip mapping for value " + e + " of field " + a),
            null != this.type && (e += " of block type " + this.type),
            console.warn(e + "."))
          : (f = g.g.xe(f));
        return f;
      }.bind(this)
    );
  };
};
g.ga.BH = function (a, c, d) {
  var e = x(a, c);
  if ("function" != typeof e.Xk) {
    e = e.getOptions();
    for (var f = 0; f < e.length; ++f) {
      var h = e[f][1];
      null == d[h] &&
        console.warn(
          "No tooltip mapping for value " +
            h +
            " of field " +
            c +
            " of block type " +
            a.type
        );
    }
  }
};
g.ga.Qu = function (a) {
  "object" == typeof document &&
    g.g.yD(function () {
      g.g.PA(a);
    });
  return function () {
    this.eb(
      function () {
        var c = x(this, "VAR");
        return g.g.xe(a).replace("%1", c ? c.Ad() : "");
      }.bind(this)
    );
  };
};
g.ga.oI = function () {
  this.yL = this.If;
  this.eb(
    function () {
      var a = this.getParent();
      return (a && Ma(a) && a.If) || this.yL;
    }.bind(this)
  );
};
g.ga.register("parent_tooltip_when_inline", g.ga.oI);
g.$f = {};
g.$f.register = function (a, c) {
  g.C.register(g.C.aa.Gc, a, c);
};
g.$f.unregister = function (a) {
  g.C.unregister(g.C.aa.Gc, a);
};
g.$f.ka = function (a) {
  var c = g.C.cw(g.C.aa.Gc, a.type);
  return c
    ? c.ka(a)
    : (console.warn(
        "Blockly could not create a field of type " +
          a.type +
          ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."
      ),
      null);
};
g.Eb = {};
g.Eb.xv = 0;
g.Eb.rr = null;
g.Eb.eI = function (a) {
  var c = a.u,
    d = a.Pa();
  c.Si.play("delete");
  a = Na(c, d);
  d = d.cloneNode(!0);
  d.AL = a.x;
  d.BL = a.y;
  d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  u(c).appendChild(d);
  d.FA = d.getBBox();
  g.Eb.vB(d, c.L, new Date(), c.scale);
};
g.Eb.vB = function (a, c, d, e) {
  var f = (new Date() - d) / 150;
  1 < f
    ? g.g.o.removeNode(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.AL + (((c ? -1 : 1) * a.FA.width * e) / 2) * f) +
          "," +
          (a.BL + a.FA.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(g.Eb.vB, 10, a, c, d, e));
};
g.Eb.LH = function (a) {
  var c = a.u,
    d = c.scale;
  c.Si.play("click");
  if (!(1 > d)) {
    var e = Na(c, a.Pa());
    a.O
      ? ((e.x += (a.L ? 3 : -3) * d), (e.y += 13 * d))
      : a.ba && ((e.x += (a.L ? -23 : 23) * d), (e.y += 3 * d));
    a = g.g.o.M(
      g.g.F.cq,
      {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10,
      },
      u(c)
    );
    g.Eb.ZA(a, new Date(), d);
  }
};
g.Eb.ZA = function (a, c, d) {
  var e = (new Date() - c) / 150;
  1 < e
    ? g.g.o.removeNode(a)
    : (a.setAttribute("r", 25 * e * d),
      (a.style.opacity = 1 - e),
      (g.Eb.xv = setTimeout(g.Eb.ZA, 10, a, c, d)));
};
g.Eb.dI = function (a) {
  a.u.Si.play("disconnect");
  if (!(1 > a.u.scale)) {
    var c = F(a).height;
    c = (Math.atan(10 / c) / Math.PI) * 180;
    a.L || (c *= -1);
    g.Eb.uB(a.Pa(), c, new Date());
  }
};
g.Eb.uB = function (a, c, d) {
  var e = (new Date() - d) / 200;
  1 < e
    ? (a.xp = "")
    : ((a.xp =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")"),
      (g.Eb.rr = a),
      (g.Eb.xv = setTimeout(g.Eb.uB, 10, a, c, d)));
  a.setAttribute("transform", a.Jp + a.xp);
};
g.Eb.yv = function () {
  if (g.Eb.rr) {
    clearTimeout(g.Eb.xv);
    var a = g.Eb.rr;
    a.xp = "";
    a.setAttribute("transform", a.Jp);
    g.Eb.rr = null;
  }
};
g.h.ng = function (a, c, d) {
  g.h.ng.v.constructor.call(this, a ? a.u.id : void 0);
  this.pb = a ? a.id : null;
  this.yC = c;
  this.HA = d;
};
g.g.object.X(g.h.ng, g.h.Fe);
g.h.ng.prototype.type = g.h.Jy;
g.h.ng.prototype.ya = function () {
  var a = g.h.ng.v.ya.call(this);
  a.isStart = this.yC;
  a.blockId = this.pb;
  a.blocks = this.HA;
  return a;
};
g.h.ng.prototype.ka = function (a) {
  g.h.ng.v.ka.call(this, a);
  this.yC = a.isStart;
  this.pb = a.blockId;
  this.HA = a.blocks;
};
g.C.register(g.C.aa.fc, g.h.Jy, g.h.ng);
g.Of = function (a) {
  this.yi = g.selected = a;
  this.s = a.u;
  this.mj = this.Bw = null;
  this.po = Oa(this, this.yi);
  this.Dd = this.rc = null;
  this.lh = !1;
  this.no = this.lw = this.Tk = null;
  this.Rq = Pa(this);
};
g.Of.Pl = { Mt: 0, KF: 1, Wz: 2 };
g.Of.prototype.I = function () {
  this.Rq.length = 0;
  g.h.disable();
  try {
    this.po && this.po.I(), this.mj && this.mj.I();
  } finally {
    g.h.enable();
  }
};
g.Of.prototype.update = function (a, c) {
  var d = this.rc && this.Dd ? g.EE : g.Rd;
  for (var e = null, f = null, h = 0; h < this.Rq.length; h++) {
    var k = this.Rq[h],
      l = k.closest(d, a);
    l.connection && ((e = l.connection), (f = k), (d = l.Es));
  }
  e = ((d = { closest: e, local: f, Es: d }), !!d.closest) && c != g.Wy;
  if (
    (this.lh = !!c && !this.yi.getParent() && this.yi.ve() && !e) ||
    Qa(this, d, a)
  ) {
    g.h.disable();
    d.closest
      ? ((a = this.rc != d.closest),
        (c = this.Dd != d.local),
        this.rc && this.Dd && (a || c || this.lh) && Ra(this))
      : Ra(this);
    this.Dd = this.rc = this.Tk = null;
    if (!this.lh && ((a = d.closest), (c = d.local), a))
      if (a == this.rc || a.Y().we())
        console.log("Trying to connect to an insertion marker");
      else {
        this.rc = a;
        this.Dd = c;
        a = this.rc;
        d = this.Dd;
        c = this.yi;
        d.type == g.Pf || d.type == g.Qf
          ? ((e = !a.isConnected()) ||
              ((e = a.sa()),
              d.type == g.Pf
                ? ((d = e.O), (c = g.Ca.CC(c, e)))
                : ((d = e.ba), (c = c.Zr())),
              (e = c ? B(La(d), c, d, !1) : !1)),
            (c = e ? g.Of.Pl.Mt : g.Of.Pl.Wz))
          : (c = g.Of.Pl.Mt);
        switch (c) {
          case g.Of.Pl.KF:
            this.lw = this.rc.Y();
            break;
          case g.Of.Pl.Mt:
            e = this.Dd;
            c = this.rc;
            d = this.Bw && e == this.Bw ? this.mj : this.po;
            e = d.$v(e.Y(), e);
            if (e == this.Tk)
              throw Error(
                "Made it to showInsertionMarker_ even though the marker isn't changing"
              );
            d.Ia();
            d.pa = !0;
            d.Pa().setAttribute("visibility", "visible");
            e && c && Sa(d, e, c);
            c && e.connect(c);
            this.Tk = e;
            break;
          case g.Of.Pl.Wz:
            (this.no = this.rc.sa()), Ta(this.no.Rb, "blocklyReplaceable", !0);
        }
        a &&
          ((d = a.J.u.Mb.la()),
          (c = Ua(d, a)),
          a.type == g.ob || a.type == g.Pf
            ? ((d = d.Vl),
              (c =
                g.g.D.moveBy(0, -d) +
                g.g.D.oa("v", d) +
                c.Cf +
                g.g.D.oa("v", d)))
            : ((d = d.xn - d.Nb),
              (c =
                g.g.D.moveBy(-d, 0) +
                g.g.D.oa("h", d) +
                c.wj +
                g.g.D.oa("h", d))),
          (d = a.J.ab()),
          (g.Ca.nC = g.g.o.M(
            g.g.F.Od,
            {
              class: "blocklyHighlightedConnectionPath",
              d: c,
              transform:
                "translate(" +
                (a.x - d.x) +
                "," +
                (a.y - d.y) +
                ")" +
                (a.J.L ? " scale(-1 1)" : ""),
            },
            a.J.Pa()
          )));
      }
    g.h.enable();
  }
};
function Oa(a, c) {
  var d = c.type;
  g.h.disable();
  try {
    var e = a.s.sj(d);
    e.BD(!0);
    if (c.rb) {
      var f = c.rb();
      f && e.Xb(f);
    }
    for (a = 0; a < c.V.length; a++) {
      var h = c.V[a];
      if (h.name != g.me.mn) {
        var k = e.V[a];
        for (d = 0; d < h.kb.length; d++) k.kb[d].setValue(h.kb[d].getValue());
      }
    }
    e.Fj(c.isCollapsed());
    e.cd(Ma(c));
    e.wf();
    e.Pa().setAttribute("visibility", "hidden");
  } finally {
    g.h.enable();
  }
  return e;
}
function Pa(a) {
  var c = a.yi.cg(!1),
    d = a.yi.Zr();
  if (d && d != a.yi.Z) {
    c.push(d);
    a.Bw = d;
    if (a.mj) {
      g.h.disable();
      try {
        a.mj.I();
      } finally {
        g.h.enable();
      }
    }
    a.mj = Oa(a, d.Y());
  }
  return c;
}
function Qa(a, c, d) {
  var e = c.local,
    f = c.closest;
  c = c.Es;
  if (e && f) {
    if (a.Dd && a.rc) {
      if (a.rc == f && a.Dd == e) return !1;
      e = a.Dd.x + d.x - a.rc.x;
      a = a.Dd.y + d.y - a.rc.y;
      a = Math.sqrt(e * e + a * a);
      return !(f && c > a - g.HE);
    }
    if (a.Dd || a.rc)
      console.error(
        "Only one of localConnection_ and closestConnection_ was set."
      );
    else return !0;
  } else return !(!a.Dd || !a.rc);
  console.error(
    "Returning true from shouldUpdatePreviews, but it's not clear why."
  );
  return !0;
}
function Ra(a) {
  a.rc && a.rc.sa() && (g.g.o.removeNode(g.Ca.nC), delete g.Ca.nC);
  if (a.no) Ta(a.no.Rb, "blocklyReplaceable", !1), (a.no = null);
  else if (a.lw) a.lw = null;
  else if (a.Tk)
    if (a.Tk) {
      var c = a.Tk,
        d = c.Y(),
        e = d.Z,
        f = d.ba,
        h = d.O;
      h = c.type == g.ob && !(h && h.ma);
      !(c != e || (f && f.ma)) || h
        ? y(c.sa(), !1)
        : c.type == g.Cb && c != e
        ? ((e = c.ma),
          y(e.Y(), !1),
          (f = f ? f.ma : null),
          y(d, !0),
          f && f.connect(e))
        : y(d, !0);
      if (c.ma)
        throw Error(
          "markerConnection_ still connected at the end of disconnectInsertionMarker"
        );
      a.Tk = null;
      d.Pa().setAttribute("visibility", "hidden");
    } else console.log("No insertion marker connection to disconnect");
}
g.Of.prototype.tm = function () {
  var a = [];
  this.po && a.push(this.po);
  this.mj && a.push(this.mj);
  return a;
};
g.Pj = function (a, c) {
  this.Lb = a;
  this.s = c;
  this.Lg = new g.Of(this.Lb);
  this.qk = null;
  this.lh = !1;
  this.ih = this.Lb.ab();
  this.yr = g.Pj.eJ(a);
};
g.Pj.prototype.I = function () {
  this.yr.length = 0;
  this.Lg && this.Lg.I();
};
g.Pj.eJ = function (a) {
  var c = [];
  a = q(a, !1);
  for (var d = 0, e; (e = a[d]); d++) {
    e = Va(e);
    for (var f = 0; f < e.length; f++)
      c.push({ location: e[f].Gk, icon: e[f] });
  }
  return c;
};
function Wa(a, c, d) {
  d = a.Mm(d);
  var e = g.g.T.sum(a.ih, d);
  a.Lb.Yw(e);
  for (e = 0; e < a.yr.length; e++) {
    var f = a.yr[e];
    Xa(f.icon, g.g.T.sum(f.location, d));
  }
  a.qk = Ya(a.s, c);
  a.Lg.update(d, a.qk);
  a.lh = a.Lg.lh;
  c = a.s.ud;
  a.lh
    ? (a.Lb.sp(!0), a.qk == g.Ct && c && Za(c, !0))
    : (a.Lb.sp(!1), c && Za(c, !1));
}
function $a(a, c, d) {
  Wa(a, c, d);
  a.yr = [];
  c = new g.h.ng(a.Lb, !1, q(a.Lb, !1));
  g.h.Ha(c);
  g.g.o.Bp();
  g.Eb.yv();
  d = a.Mm(d);
  c = g.g.T.sum(a.ih, d);
  var e = a.Lb;
  e.Qp && (e.translate(c.x, c.y), e.u.Ge.$q(e.u.Bb));
  c = a.s.ud;
  a.lh
    ? (c && setTimeout(c.hr.bind(c), 100), a.oo(), a.Lb.I(!1, !0), (g.qm = []))
    : c && c.hr();
  a.lh ||
    (ab(a.Lb, d.x, d.y),
    a.Lb.Gj(!1),
    a.oo(),
    a.Lg.rc
      ? ((d = a.Lg),
        d.rc &&
          (g.h.disable(),
          Ra(d),
          g.h.enable(),
          d.Dd.connect(d.rc),
          d.yi.pa && (g.Eb.LH((C(d.Dd) ? d.rc : d.Dd).Y()), bb(d.yi.ce()))))
      : a.Lb.Ia(),
    cb(a.Lb));
  a.s.dd(!0);
  (d = a.s.La) &&
    "function" == typeof d.Hs &&
    d.Hs(a.Lb.ve() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.h.ea(!1);
}
g.Pj.prototype.oo = function () {
  var a = new g.h.kn(this.Lb);
  a.ex = this.ih;
  a.hl();
  g.h.Ha(a);
};
g.Pj.prototype.Mm = function (a) {
  a = new g.g.T(a.x / this.s.scale, a.y / this.s.scale);
  this.s.Mo && a.scale(1 / this.s.options.vc.scale);
  return a;
};
g.Pj.prototype.tm = function () {
  return this.Lg && this.Lg.tm ? this.Lg.tm() : [];
};
g.Ry = function () {};
function B(a, c, d, e, f) {
  return a.Wq(c, d, e, f) == g.Ca.bq;
}
g.Ry.prototype.Wq = function (a, c, d, e) {
  if (a && c) {
    if (C(a)) {
      var f = a.Y();
      var h = c.Y();
    } else (h = a.Y()), (f = c.Y());
    f =
      f == h
        ? g.Ca.Rz
        : c.type != g.Nl[a.type]
        ? g.Ca.Uz
        : f.u !== h.u
        ? g.Ca.Pz
        : f.Qa && !h.Qa
        ? g.Ca.Sz
        : g.Ca.bq;
  } else f = g.Ca.Tz;
  return f != g.Ca.bq
    ? f
    : db(a, c)
    ? d && !eb(a, c, e || 0)
      ? g.Ca.Qz
      : g.Ca.bq
    : g.Ca.Oz;
};
function fb(a, c, d) {
  switch (a) {
    case g.Ca.Rz:
      return "Attempted to connect a block to itself.";
    case g.Ca.Pz:
      return "Blocks not on same workspace.";
    case g.Ca.Uz:
      return "Attempt to connect incompatible types.";
    case g.Ca.Tz:
      return "Target connection is null.";
    case g.Ca.Oz:
      return (
        "Connection checks failed. " +
        (c + " expected " + c.Ag + ", found " + d.Ag)
      );
    case g.Ca.Sz:
      return "Connecting non-shadow to shadow block.";
    case g.Ca.Qz:
      return "Drag checks failed.";
    default:
      return "Unknown connection failure: this should never happen!";
  }
}
function db(a, c) {
  a = a.Ag;
  c = c.Ag;
  if (!a || !c) return !0;
  for (var d = 0; d < a.length; d++) if (-1 != c.indexOf(a[d])) return !0;
  return !1;
}
function eb(a, c, d) {
  if (gb(a, c) > d || c.Y().we()) return !1;
  switch (c.type) {
    case g.Qf:
      return (
        a.ma || -1 != g.qm.indexOf(c)
          ? (a = !1)
          : c.ma
          ? ((a = c.sa()), (a = a.we() ? !(a.ba && a.ba.sa()) : !1))
          : (a = !0),
        a
      );
    case g.Pf:
      if ((c.isConnected() && !c.sa().we()) || a.isConnected()) return !1;
      break;
    case g.ob:
      if (c.isConnected() && !c.sa().Kc() && !c.sa().Qa) return !1;
      break;
    case g.Cb:
      if (c.isConnected() && !a.Y().Z && !c.sa().Qa && c.sa().Z) return !1;
      break;
    default:
      return !1;
  }
  return -1 != g.qm.indexOf(c) ? !1 : !0;
}
g.C.register(g.C.aa.Oy, g.C.lq, g.Ry);
g.Bu = function (a) {
  this.Ta = Object.create(null);
  this.u = a;
};
b = g.Bu.prototype;
b.clear = function () {
  this.Ta = Object.create(null);
};
b.Ls = function (a, c) {
  var d = this.od(c, a.type),
    e = G(this.u);
  g.h.ea(!0);
  try {
    if (d && d.Oa() != a.Oa()) {
      var f = a.type;
      c != d.name && hb(d, c, e);
      for (c = 0; c < e.length; c++) e[c].Ks(a.Oa(), d.Oa());
      g.h.Ha(new g.h.Tf(a));
      this.Ta[f].splice(this.Co(f).indexOf(a), 1);
    } else hb(a, c, e);
  } finally {
    g.h.ea(!1);
  }
};
b.Cj = function (a, c) {
  var d = this.dg(a);
  if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.Ls(d, c);
};
function hb(a, c, d) {
  g.h.Ha(new g.h.yg(a, c));
  a.name = c;
  for (c = 0; c < d.length; c++) d[c].bt(a);
}
b.nf = function (a, c, d) {
  var e = this.od(a, c);
  if (e) {
    if (d && e.Oa() != d)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.Oa() +
          '" which conflicts with the passed in id, "' +
          d +
          '".'
      );
    return e;
  }
  if (d && this.dg(d))
    throw Error('Variable id, "' + d + '", is already in use.');
  e = d || g.g.Vh();
  c = c || "";
  e = new g.Jn(this.u, a, c, e);
  a = this.Ta[c] || [];
  a.push(e);
  delete this.Ta[c];
  this.Ta[c] = a;
  return e;
};
b.Th = function (a) {
  var c = this.dg(a);
  if (c) {
    var d = c.name,
      e = this.hw(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = D(f, "NAME");
        d = g.i.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace(
          "%2",
          a
        );
        g.alert(d);
        return;
      }
    var h = this;
    1 < e.length
      ? ((d = g.i.DELETE_VARIABLE_CONFIRMATION.replace(
          "%1",
          String(e.length)
        ).replace("%2", d)),
        g.confirm(d, function (k) {
          k && c && ib(h, c, e);
        }))
      : ib(h, c, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
function ib(a, c, d) {
  var e = g.h.uc();
  e || g.h.ea(!0);
  try {
    for (var f = 0; f < d.length; f++) d[f].I(!0);
    var h = a.Ta[c.type];
    a = 0;
    for (var k; (k = h[a]); a++)
      if (k.Oa() == c.Oa()) {
        h.splice(a, 1);
        g.h.Ha(new g.h.Tf(c));
        break;
      }
  } finally {
    e || g.h.ea(!1);
  }
}
b.od = function (a, c) {
  if ((c = this.Ta[c || ""]))
    for (var d = 0, e; (e = c[d]); d++) if (g.Md.sf(e.name, a)) return e;
  return null;
};
b.dg = function (a) {
  for (var c = Object.keys(this.Ta), d = 0; d < c.length; d++)
    for (var e = c[d], f = 0, h; (h = this.Ta[e][f]); f++)
      if (h.Oa() == a) return h;
  return null;
};
b.Co = function (a) {
  return (a = this.Ta[a || ""]) ? a.slice() : [];
};
b.gw = function (a) {
  var c = {};
  g.g.object.Re(c, this.Ta);
  a && a.yj && g.g.object.Re(c, a.yj.Ta);
  a = Object.keys(c);
  c = !1;
  for (var d = 0; d < a.length; d++) "" == a[d] && (c = !0);
  c || a.push("");
  return a;
};
b.yk = function () {
  var a = [],
    c;
  for (c in this.Ta) a = a.concat(this.Ta[c]);
  return a;
};
b.Tv = function () {
  var a = [],
    c;
  for (c in this.Ta)
    for (var d = this.Ta[c], e = 0, f; (f = d[e]); e++) a.push(f.name);
  return a;
};
b.hw = function (a) {
  for (var c = [], d = G(this.u), e = 0; e < d.length; e++) {
    var f = d[e].Yh();
    if (f) for (var h = 0; h < f.length; h++) f[h].Oa() == a && c.push(d[e]);
  }
  return c;
};
g.Vb = function (a) {
  this.id = g.g.Vh();
  g.Vb.Ln[this.id] = this;
  this.options = a || new g.Nd({});
  this.L = !!this.options.L;
  this.Bd = !!this.options.Bd;
  this.Ka = this.options.Ka;
  this.Vn = new (g.C.Hr(g.C.aa.Oy, this.options))(this);
  this.Hp = [];
  this.at = [];
  this.jr = Object.create(null);
  this.ie = [];
  this.ql = [];
  this.hp = [];
  this.Lu = Object.create(null);
  this.Ai = Object.create(null);
  this.Ta = new g.Bu(this);
  this.yj = null;
};
b = g.Vb.prototype;
b.pa = !1;
b.uw = !1;
b.Az = 1024;
b.lr = null;
b.I = function () {
  this.ie.length = 0;
  this.clear();
  delete g.Vb.Ln[this.id];
};
g.Vb.Yz = 3;
b = g.Vb.prototype;
b.hh = function (a, c) {
  a = a.ab();
  c = c.ab();
  return (
    a.y +
    g.Vb.prototype.hh.offset * a.x -
    (c.y + g.Vb.prototype.hh.offset * c.x)
  );
};
b.Oq = function (a) {
  this.Hp.push(a);
};
b.Is = function (a) {
  if (!g.g.Pq(this.Hp, a))
    throw Error("Block not present in workspace's list of top-most blocks.");
};
b.ac = function (a) {
  var c = [].concat(this.Hp);
  a &&
    1 < c.length &&
    ((this.hh.offset = Math.sin(g.g.Ra.Ed(g.Vb.Yz))),
    this.L && (this.hh.offset *= -1),
    c.sort(this.hh));
  return c;
};
function jb(a, c) {
  return a.Ai[c] ? a.Ai[c].slice(0) : [];
}
function G(a) {
  var c = a.ac(!1);
  for (a = 0; a < c.length; a++) c.push.apply(c, Ca(c[a], !1));
  return c.filter(function (d) {
    return !d.we();
  });
}
b.clear = function () {
  this.uw = !0;
  try {
    var a = g.h.uc();
    for (a || g.h.ea(!0); this.Hp.length; ) this.Hp[0].I(!1);
    for (; this.at.length; ) this.at[this.at.length - 1].I(!1);
    a || g.h.ea(!1);
    this.Ta.clear();
    this.yj && this.yj.clear();
  } finally {
    this.uw = !1;
  }
};
b.Cj = function (a, c) {
  this.Ta.Cj(a, c);
};
b.nf = function (a, c, d) {
  return this.Ta.nf(a, c, d);
};
b.hw = function (a) {
  return this.Ta.hw(a);
};
b.Th = function (a) {
  this.Ta.Th(a);
};
b.od = function (a, c) {
  return this.Ta.od(a, c);
};
b.dg = function (a) {
  return this.Ta.dg(a);
};
b.Co = function (a) {
  return this.Ta.Co(a);
};
b.gw = function () {
  return this.Ta.gw(this);
};
b.yk = function () {
  return this.Ta.yk();
};
b.Tv = function () {
  return this.Ta.Tv();
};
b.Sg = function () {
  return 0;
};
b.sj = function (a, c) {
  return new g.me(this, a, c);
};
function kb(a) {
  return isNaN(a.options.Tw) ? Infinity : a.options.Tw - G(a).length;
}
function lb(a, c) {
  if (!mb(a)) return !0;
  var d = 0,
    e;
  for (e in c) {
    if (
      c[e] >
      (a.options.fs
        ? (void 0 !== a.options.fs[e] ? a.options.fs[e] : Infinity) -
          jb(a, e).length
        : Infinity)
    )
      return !1;
    d += c[e];
  }
  return d > kb(a) ? !1 : !0;
}
function mb(a) {
  return Infinity != a.options.Tw || !!a.options.fs;
}
function nb(a, c) {
  var d = c ? a.hp : a.ql;
  a = c ? a.ql : a.hp;
  var e = d.pop();
  if (e) {
    for (var f = [e]; d.length && e.group && e.group == d[d.length - 1].group; )
      f.push(d.pop());
    for (d = 0; (e = f[d]); d++) a.push(e);
    f = g.h.filter(f, c);
    g.h.cb = !1;
    try {
      for (d = 0; (e = f[d]); d++) e.run(c);
    } finally {
      g.h.cb = !0;
    }
  }
}
function H(a, c) {
  a.ie.push(c);
}
function ob(a, c) {
  g.g.Pq(a.ie, c);
}
b.Zd = function (a) {
  return this.Lu[a] || null;
};
b.Zx = function (a) {
  this.Ta = a;
};
g.Vb.Ln = Object.create(null);
g.Vb.vo = function (a) {
  return g.Vb.Ln[a] || null;
};
g.Vb.getAll = function () {
  var a = [],
    c;
  for (c in g.Vb.Ln) a.push(g.Vb.Ln[c]);
  return a;
};
g.ta = function (a, c, d, e, f, h) {
  this.s = a;
  this.Oh = c;
  this.gL = d;
  this.lx = this.kx = this.Xw = this.Px = null;
  this.Zf = !1;
  d = g.ta.mE;
  this.s.L && (d = -d);
  this.qH = g.g.Ra.Ed(d);
  a.jg.appendChild(this.Ke(c, !(!f || !h)));
  this.Ac = e;
  this.Nx && pb(this);
  (f && h) ||
    ((a = this.Oh.getBBox()),
    (f = a.width + 2 * g.ta.vd),
    (h = a.height + 2 * g.ta.vd));
  this.qp(f, h);
  pb(this);
  qb(this);
  this.Nx = !0;
};
g.ta.vd = 6;
g.ta.nE = 5;
g.ta.mE = 20;
g.ta.Fy = 4;
g.ta.jE = 8;
g.ta.rd = null;
g.ta.vj = null;
g.ta.qy = function () {
  g.ta.rd && (g.Ma(g.ta.rd), (g.ta.rd = null));
  g.ta.vj && (g.Ma(g.ta.vj), (g.ta.vj = null));
};
g.ta.wH = function () {
  g.Touch.kk();
  g.ta.qy();
};
b = g.ta.prototype;
b.Nx = !1;
b.Ac = null;
b.dh = 0;
b.Bj = 0;
b.ub = 0;
b.Qc = 0;
b.Ju = !0;
b.Ke = function (a, c) {
  this.kf = g.g.o.M(g.g.F.xc, {}, null);
  var d = { filter: "url(#" + this.s.Mb.la().zr + ")" };
  g.g.userAgent.QF && (d = {});
  d = g.g.o.M(g.g.F.xc, d, this.kf);
  this.IA = g.g.o.M(g.g.F.Od, {}, d);
  this.Sq = g.g.o.M(
    g.g.F.Hc,
    { class: "blocklyDraggable", x: 0, y: 0, rx: g.ta.vd, ry: g.ta.vd },
    d
  );
  c
    ? ((this.oi = g.g.o.M(
        g.g.F.xc,
        { class: this.s.L ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.kf
      )),
      (c = 2 * g.ta.vd),
      g.g.o.M(
        g.g.F.BG,
        { points: "0,x x,x x,0".replace(/x/g, c.toString()) },
        this.oi
      ),
      g.g.o.M(
        g.g.F.$j,
        {
          class: "blocklyResizeLine",
          x1: c / 3,
          y1: c - 1,
          x2: c - 1,
          y2: c / 3,
        },
        this.oi
      ),
      g.g.o.M(
        g.g.F.$j,
        {
          class: "blocklyResizeLine",
          x1: (2 * c) / 3,
          y1: c - 1,
          x2: c - 1,
          y2: (2 * c) / 3,
        },
        this.oi
      ))
    : (this.oi = null);
  this.s.options.readOnly ||
    ((this.kx = g.wa(this.Sq, "mousedown", this, this.vH)),
    this.oi && (this.lx = g.wa(this.oi, "mousedown", this, this.WK)));
  this.kf.appendChild(a);
  return this.kf;
};
b.Pa = function () {
  return this.kf;
};
function rb(a, c) {
  a.kf.dataset && (a.kf.dataset.blockId = c);
}
b.vH = function (a) {
  var c = this.s.Wh(a);
  if (c) {
    if (c.Ck)
      throw Error(
        "Tried to call gesture.handleBubbleStart, but the gesture had already been started."
      );
    c.Xe || (c.Xe = this);
    c.zf = a;
  }
};
b.vp = function () {};
b.ve = function () {
  return !1;
};
b.sp = function () {};
b.WK = function (a) {
  sb(this);
  g.ta.qy();
  g.g.Rk(a) ||
    (this.s.iy(a, new g.g.T(this.s.L ? -this.ub : this.ub, this.Qc)),
    (g.ta.rd = g.wa(document, "mouseup", this, g.ta.wH)),
    (g.ta.vj = g.wa(document, "mousemove", this, this.XK)),
    g.Bc());
  a.stopPropagation();
};
b.XK = function (a) {
  this.Ju = !1;
  var c = this.s;
  a = g.g.Wo(a, u(c), sa(c));
  a.x /= c.scale;
  a.y /= c.scale;
  c = g.g.T.sum(c.xB, a);
  this.qp(this.s.L ? -c.x : c.x, c.y);
  this.s.L && pb(this);
};
function tb(a, c) {
  a.Xw = c;
}
function sb(a) {
  var c = a.kf.parentNode;
  return c.lastChild !== a.kf ? (c.appendChild(a.kf), !0) : !1;
}
function ub(a, c, d) {
  var e = a.s.L ? a.Ac.x - c.x - a.ub : c.x + a.Ac.x;
  c = c.y + a.Ac.y;
  return Math.max(
    0,
    Math.min(
      1,
      ((Math.min(e + a.ub, d.Yb + d.Kb) - Math.max(e, d.Yb)) *
        (Math.min(c + a.Qc, d.ec + d.Ub) - Math.max(c, d.ec))) /
        (a.ub * a.Qc)
    )
  );
}
function pb(a) {
  var c = a.Ac.x;
  c = a.s.L ? c - (a.dh + a.ub) : c + a.dh;
  a.moveTo(c, a.Bj + a.Ac.y);
}
b.moveTo = function (a, c) {
  this.kf.setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.Gj = function (a) {
  !a && this.Xw && this.Xw();
};
b.Vv = function () {
  return new g.g.ff(this.ub, this.Qc);
};
b.qp = function (a, c) {
  var d = 2 * g.ta.vd;
  a = Math.max(a, d + 45);
  c = Math.max(c, d + 20);
  this.ub = a;
  this.Qc = c;
  this.Sq.setAttribute("width", a);
  this.Sq.setAttribute("height", c);
  this.oi &&
    (this.s.L
      ? this.oi.setAttribute(
          "transform",
          "translate(" + 2 * g.ta.vd + "," + (c - d) + ") scale(-1 1)"
        )
      : this.oi.setAttribute(
          "transform",
          "translate(" + (a - d) + "," + (c - d) + ")"
        ));
  if (this.Ju) {
    a = this.s.Zc();
    a.Yb /= this.s.scale;
    a.Kb /= this.s.scale;
    a.ec /= this.s.scale;
    a.Ub /= this.s.scale;
    c = -this.ub / 4;
    if (!(this.ub > a.Kb)) {
      if (this.s.L) {
        d = this.Ac.x - c;
        var e = d - this.ub;
        var f = a.Yb + a.Kb,
          h = a.Yb + g.Va.Sc / this.s.scale;
      } else
        (e = c + this.Ac.x),
          (d = e + this.ub),
          (h = a.Yb),
          (f = a.Yb + a.Kb - g.Va.Sc / this.s.scale);
      this.s.L
        ? e < h
          ? (c = -(h - this.Ac.x + this.ub))
          : d > f && (c = -(f - this.Ac.x))
        : e < h
        ? (c = h - this.Ac.x)
        : d > f && (c = f - this.Ac.x - this.ub);
    }
    e = c;
    c = -this.Qc / 4;
    if (!(this.Qc > a.Ub)) {
      d = this.Ac.y + c;
      f = d + this.Qc;
      h = a.ec;
      var k = a.ec + a.Ub - g.Va.Sc / this.s.scale,
        l = this.Ac.y;
      d < h ? (c = h - l) : f > k && (c = k - l - this.Qc);
    }
    h = c;
    f = this.gL.getBBox();
    c = { x: e, y: -this.Qc - this.s.Mb.la().un };
    d = { x: -this.ub - 30, y: h };
    h = { x: f.width, y: h };
    k = { x: e, y: f.height };
    e = f.width < f.height ? h : k;
    f = f.width < f.height ? k : h;
    h = ub(this, c, a);
    k = ub(this, d, a);
    l = ub(this, e, a);
    a = Math.max(h, k, l, ub(this, f, a));
    h == a
      ? ((this.dh = c.x), (this.Bj = c.y))
      : k == a
      ? ((this.dh = d.x), (this.Bj = d.y))
      : l == a
      ? ((this.dh = e.x), (this.Bj = e.y))
      : ((this.dh = f.x), (this.Bj = f.y));
  }
  pb(this);
  qb(this);
  this.Px && this.Px();
};
function qb(a) {
  var c = [],
    d = a.ub / 2,
    e = a.Qc / 2,
    f = -a.dh,
    h = -a.Bj;
  if (d == f && e == h) c.push("M " + d + "," + e);
  else {
    h -= e;
    f -= d;
    a.s.L && (f *= -1);
    var k = Math.sqrt(h * h + f * f),
      l = Math.acos(f / k);
    0 > h && (l = 2 * Math.PI - l);
    var m = l + Math.PI / 2;
    m > 2 * Math.PI && (m -= 2 * Math.PI);
    var n = Math.sin(m),
      p = Math.cos(m),
      r = a.Vv();
    m = (r.width + r.height) / g.ta.nE;
    m = Math.min(m, r.width, r.height) / 4;
    r = 1 - g.ta.jE / k;
    f = d + r * f;
    h = e + r * h;
    r = d + m * p;
    var w = e + m * n;
    d -= m * p;
    e -= m * n;
    n = l + a.qH;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / g.ta.Fy;
    k = (Math.cos(n) * k) / g.ta.Fy;
    c.push("M" + r + "," + w);
    c.push(
      "C" + (r + k) + "," + (w + l) + " " + f + "," + h + " " + f + "," + h
    );
    c.push(
      "C" + f + "," + h + " " + (d + k) + "," + (e + l) + " " + d + "," + e
    );
  }
  c.push("z");
  a.IA.setAttribute("d", c.join(" "));
}
b.bd = function (a) {
  this.Sq.setAttribute("fill", a);
  this.IA.setAttribute("fill", a);
};
b.I = function () {
  this.kx && g.Ma(this.kx);
  this.lx && g.Ma(this.lx);
  g.ta.qy();
  g.g.o.removeNode(this.kf);
  this.Zf = !0;
};
b.Yw = function (a, c) {
  a ? a.ol(c.x, c.y) : this.moveTo(c.x, c.y);
  this.dh = this.s.L ? this.Ac.x - c.x - this.ub : c.x - this.Ac.x;
  this.Bj = c.y - this.Ac.y;
  qb(this);
};
b.ab = function () {
  return new g.g.T(
    this.s.L ? -this.dh + this.Ac.x - this.ub : this.Ac.x + this.dh,
    this.Ac.y + this.Bj
  );
};
g.ta.Hf = function (a) {
  var c = g.g.o.M(
    g.g.F.qu,
    {
      class: "blocklyText blocklyBubbleText blocklyNoPointerEvents",
      y: g.ta.vd,
    },
    null
  );
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) {
    var e = g.g.o.M(g.g.F.vu, { dy: "1em", x: g.ta.vd }, c),
      f = document.createTextNode(a[d]);
    e.appendChild(f);
  }
  return c;
};
g.ta.gB = function (a, c, d) {
  d = new g.ta(c.u, a, c.Rb.dc, d, null, null);
  rb(d, c.id);
  if (c.L) {
    c = a.getBBox().width;
    for (var e = 0, f; (f = a.childNodes[e]); e++)
      f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + g.ta.vd);
  }
  return d;
};
g.h.nh = function (a) {
  this.Dg = (this.Pe = "undefined" == typeof a) ? "" : a.id;
  this.Tc = this.Pe ? "" : a.u.id;
  this.group = g.h.uc();
  this.cb = g.h.cb;
};
g.g.object.X(g.h.nh, g.h.Abstract);
g.h.nh.prototype.ya = function () {
  var a = g.h.nh.v.ya.call(this);
  this.Dg && (a.commentId = this.Dg);
  return a;
};
g.h.nh.prototype.ka = function (a) {
  g.h.nh.v.ka.call(this, a);
  this.Dg = a.commentId;
};
g.h.Al = function (a, c, d) {
  g.h.Al.v.constructor.call(this, a);
  a &&
    ((this.SC = "undefined" == typeof c ? "" : c),
    (this.qs = "undefined" == typeof d ? "" : d));
};
g.g.object.X(g.h.Al, g.h.nh);
b = g.h.Al.prototype;
b.type = g.h.My;
b.ya = function () {
  var a = g.h.Al.v.ya.call(this);
  a.newContents = this.qs;
  return a;
};
b.ka = function (a) {
  g.h.Al.v.ka.call(this, a);
  this.qs = a.newValue;
};
b.Fm = function () {
  return this.SC == this.qs;
};
b.run = function (a) {
  var c;
  (c = v(this).jr[this.Dg] || null)
    ? c.YO(a ? this.qs : this.SC)
    : console.warn("Can't change non-existent comment: " + this.Dg);
};
g.h.oh = function (a) {
  g.h.oh.v.constructor.call(this, a);
  a && (this.xml = a.RD());
};
g.g.object.X(g.h.oh, g.h.nh);
g.h.oh.prototype.type = g.h.eq;
g.h.oh.prototype.ya = function () {
  var a = g.h.oh.v.ya.call(this);
  a.xml = g.W.re(this.xml);
  return a;
};
g.h.oh.prototype.ka = function (a) {
  g.h.oh.v.ka.call(this, a);
  this.xml = g.W.Hf(a.xml);
};
g.h.oh.prototype.run = function (a) {
  g.h.Qy(this, a);
};
g.h.Qy = function (a, c) {
  var d = v(a);
  c
    ? ((c = g.g.xml.createElement("xml")), c.appendChild(a.xml), g.W.tk(c, d))
    : (d = d.jr[a.Dg] || null)
    ? d.I(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + a.Dg);
};
g.h.ph = function (a) {
  g.h.ph.v.constructor.call(this, a);
  a && (this.xml = a.RD());
};
g.g.object.X(g.h.ph, g.h.nh);
g.h.ph.prototype.type = g.h.Ny;
g.h.ph.prototype.ya = function () {
  return g.h.ph.v.ya.call(this);
};
g.h.ph.prototype.ka = function (a) {
  g.h.ph.v.ka.call(this, a);
};
g.h.ph.prototype.run = function (a) {
  g.h.Qy(this, !a);
};
g.h.Sj = function (a) {
  g.h.Sj.v.constructor.call(this, a);
  a && ((this.$u = a), (this.gx = a.dC()), (this.Yk = null));
};
g.g.object.X(g.h.Sj, g.h.nh);
b = g.h.Sj.prototype;
b.hl = function () {
  if (!this.$u)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.Yk = this.$u.dC();
  this.$u = null;
};
b.type = g.h.fq;
b.ya = function () {
  var a = g.h.Sj.v.ya.call(this);
  this.Yk &&
    (a.newCoordinate = Math.round(this.Yk.x) + "," + Math.round(this.Yk.y));
  return a;
};
b.ka = function (a) {
  g.h.Sj.v.ka.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.Yk = new g.g.T(Number(a[0]), Number(a[1]))));
};
b.Fm = function () {
  return g.g.T.sf(this.gx, this.Yk);
};
b.run = function (a) {
  var c;
  if ((c = v(this).jr[this.Dg] || null)) {
    a = a ? this.Yk : this.gx;
    var d = c.dC();
    c.moveBy(a.x - d.x, a.y - d.y);
  } else console.warn("Can't move non-existent comment: " + this.Dg);
};
g.C.register(g.C.aa.fc, g.h.eq, g.h.oh);
g.C.register(g.C.aa.fc, g.h.My, g.h.Al);
g.C.register(g.C.aa.fc, g.h.fq, g.h.Sj);
g.C.register(g.C.aa.fc, g.h.Ny, g.h.ph);
g.aq = function (a, c) {
  this.Pc = a;
  this.s = c;
  this.qk = null;
  this.et = !1;
  this.ih = this.Pc.ab();
  this.vk = g.g.Lk() && c.Ge ? c.Ge : null;
};
g.aq.prototype.I = function () {
  this.vk = this.s = this.Pc = null;
};
function vb(a, c, d) {
  d = a.Mm(d);
  d = g.g.T.sum(a.ih, d);
  a.Pc.Yw(a.vk, d);
  a.Pc.ve() &&
    ((a.qk = Ya(a.s, c)),
    (a.et = a.qk != g.Vy),
    (c = a.s.ud),
    a.et
      ? (a.Pc.sp(!0), a.qk == g.Ct && c && Za(c, !0))
      : (a.Pc.sp(!1), c && Za(c, !1)));
}
function wb(a, c, d) {
  vb(a, c, d);
  c = a.Mm(d);
  c = g.g.T.sum(a.ih, c);
  a.Pc.moveTo(c.x, c.y);
  c = a.s.ud;
  a.et
    ? (c && setTimeout(c.hr.bind(c), 100), a.oo(), a.Pc.I(!1, !0))
    : c && c.hr();
  a.et || (a.vk && a.vk.$q(a.s.jg), a.Pc.Gj && a.Pc.Gj(!1), a.oo());
  a.s.dd(!0);
  (c = a.s.La) &&
    "function" == typeof c.Hs &&
    c.Hs(a.Pc.ve() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.h.ea(!1);
}
g.aq.prototype.oo = function () {
  if (this.Pc.HO) {
    var a = new g.h.Sj(this.Pc);
    a.gx = this.ih;
    a.hl();
    g.h.Ha(a);
  }
};
g.aq.prototype.Mm = function (a) {
  a = new g.g.T(a.x / this.s.scale, a.y / this.s.scale);
  this.s.Mo && a.scale(1 / this.s.options.vc.scale);
  return a;
};
g.h.Lf = function (a, c, d) {
  g.h.Lf.v.constructor.call(this, a ? a.u.id : c);
  this.pb = a ? a.id : null;
  this.ND = d;
};
g.g.object.X(g.h.Lf, g.h.Fe);
g.h.Lf.prototype.type = g.h.vt;
g.h.Lf.prototype.ya = function () {
  var a = g.h.Lf.v.ya.call(this);
  a.targetType = this.ND;
  this.pb && (a.blockId = this.pb);
  return a;
};
g.h.Lf.prototype.ka = function (a) {
  g.h.Lf.v.ka.call(this, a);
  this.ND = a.targetType;
  this.pb = a.blockId;
};
g.C.register(g.C.aa.fc, g.h.vt, g.h.Lf);
g.Mn = function (a) {
  this.s = a;
  this.JD = new g.g.T(a.scrollX, a.scrollY);
};
g.Mn.prototype.I = function () {
  this.s = null;
};
g.Mn.prototype.iy = function () {
  g.selected && xb(g.selected);
  ta(this.s);
};
g.Mn.prototype.Zi = function (a) {
  a = g.g.T.sum(this.JD, a);
  this.s.scroll(a.x, a.y);
};
g.tq = function (a) {
  g.tq.v.constructor.call(this, a.s);
  this.zD = a.Sa;
  this.Ek = a.Bd;
};
g.g.object.X(g.tq, g.Mn);
g.tq.prototype.Zi = function (a) {
  a = g.g.T.sum(this.JD, a);
  this.Ek ? this.zD.set(-a.x) : this.zD.set(-a.y);
};
g.navigation = {};
g.navigation.Jm = null;
g.navigation.Sl = 1;
g.navigation.Sf = 2;
g.navigation.Tl = 3;
g.navigation.vA = 40;
g.navigation.Le = g.navigation.Sf;
g.navigation.Db = {
  Pd: "previous",
  Ld: "next",
  Lt: "in",
  bu: "out",
  qz: "insert",
  hG: "mark",
  TE: "disconnect",
  Iq: "toolbox",
  cF: "exit",
  WG: "toggle_keyboard_nav",
  qG: "move workspace cursor up",
  nG: "move workspace cursor down",
  oG: "move workspace cursor left",
  pG: "move workspace cursor right",
};
g.navigation.tn = "local_marker_1";
g.navigation.$d = function () {
  return g.navigation.Pg().$d(g.navigation.tn);
};
g.navigation.Pg = function () {
  return g.Og();
};
g.navigation.GB = function (a) {
  if ((a = a.La))
    if (
      ((g.navigation.Le = g.navigation.Tl),
      g.navigation.xD(!1),
      g.navigation.$d().lb || g.navigation.Qw(),
      !a.sb && 0 < a.Gb.length)
    ) {
      var c = a.Gb[0];
      c.Xg() && yb(a, c);
    }
};
g.navigation.FB = function (a) {
  g.navigation.Le = g.navigation.Sl;
  var c = a.La;
  a = c ? c.hc() : a.hc();
  g.navigation.$d().lb || g.navigation.Qw();
  a &&
    a.s &&
    ((a = a.s.ac(!0)),
    0 < a.length && ((a = a[0]), (a = g.G.Zn(a)), I(g.navigation.sm(), a)));
};
g.navigation.Er = function (a) {
  g.Bc();
  var c = a.Ib(),
    d = !!a.La,
    e = a.ac(!0);
  g.navigation.xD(d);
  g.navigation.Le = g.navigation.Sf;
  0 < e.length
    ? I(c, g.G.gv(e[0]))
    : ((a = g.G.lm(a, new g.g.T(100, 100))), I(c, a));
};
g.navigation.sm = function () {
  var a = g.navigation.Pg(),
    c = null;
  a.pa && (c = (a = (c = a.La) ? c.hc() : a.hc()) ? a.s.Ib() : null);
  return c;
};
g.navigation.hJ = function (a) {
  var c = a.hc();
  if (c && c.isVisible()) {
    var d = g.navigation.sm().lb.Fa;
    d.isEnabled()
      ? ((c = zb(c, d)),
        c.Ia(),
        Ea(c, !0),
        I(a.Ib(), g.G.Gg(c)),
        g.navigation.KC() ||
          g.navigation.Fd(
            "Something went wrong while inserting a block from the flyout."
          ),
        g.navigation.Er(a),
        I(a.Ib(), g.G.gv(c)),
        g.navigation.UK())
      : g.navigation.Fd("Can't insert a disabled block.");
  } else
    g.navigation.Fd(
      "Trying to insert from the flyout when the flyout does not  exist or is not visible"
    );
};
g.navigation.xD = function (a) {
  g.navigation.sm() &&
    (g.navigation.sm().Ja(), a && g.navigation.Pg().hc().Ja());
};
g.navigation.zJ = function () {
  var a = g.navigation.$d().lb,
    c = g.navigation.Pg().Ib().lb;
  if (!a) return g.navigation.Fd("Cannot insert with no marked node."), !1;
  if (!c) return g.navigation.Fd("Cannot insert with no cursor node."), !1;
  a = a.qb();
  c = c.qb();
  return a == g.G.types.Gc
    ? (g.navigation.Fd("Should not have been able to mark a field."), !1)
    : a == g.G.types.kc
    ? (g.navigation.Fd("Should not have been able to mark a block."), !1)
    : a == g.G.types.tg
    ? (g.navigation.Fd("Should not have been able to mark a stack."), !1)
    : c == g.G.types.Gc
    ? (g.navigation.Fd("Cannot attach a field to anything else."), !1)
    : c == g.G.types.Wc
    ? (g.navigation.Fd("Cannot attach a workspace to anything else."), !1)
    : !0;
};
g.navigation.EJ = function (a, c) {
  if (!a) return !1;
  if (a.Qa)
    return g.navigation.Fd("Cannot move a shadow block to the workspace."), !1;
  a.getParent() && y(a, !1);
  a.moveTo(c.ft);
  return !0;
};
g.navigation.KC = function () {
  var a = g.navigation.$d().lb,
    c = g.navigation.Pg().Ib().lb;
  if (!g.navigation.zJ()) return !1;
  var d = a.qb(),
    e = c.qb(),
    f = c.Fa,
    h = a.Fa;
  if (a.Bm && c.Bm) return g.navigation.Wf(f, h);
  if (a.Bm && (e == g.G.types.kc || e == g.G.types.tg))
    return g.navigation.rC(f, h);
  if (d == g.G.types.Wc) return (c = c ? c.Y() : null), g.navigation.EJ(c, a);
  g.navigation.Fd("Unexpected state in Blockly.navigation.modify_.");
  return !1;
};
g.navigation.cI = function (a, c) {
  var d = a.Y(),
    e = c.Y();
  d.ce() == e.ce() &&
    (-1 < q(d, !1).indexOf(e)
      ? g.navigation.Jr(c).disconnect()
      : g.navigation.Jr(a).disconnect());
};
g.navigation.Ww = function (a, c) {
  if (!a || !c) return !1;
  var d = a.Y();
  return B(La(a), a, c, !1)
    ? (g.navigation.cI(a, c), C(c) || Sa(d.ce(), a, c), c.connect(a), !0)
    : !1;
};
g.navigation.Jr = function (a) {
  var c = a.Y();
  return C(a) ? (c.ba ? c.ba : c.O ? c.O : null) : a;
};
g.navigation.$B = function (a) {
  return C(a) ? a : a.ma ? a.ma : null;
};
g.navigation.Wf = function (a, c) {
  if (!a || !c) return !1;
  var d = g.navigation.Jr(a),
    e = g.navigation.$B(c),
    f = g.navigation.$B(a),
    h = g.navigation.Jr(c);
  if (
    (d && e && g.navigation.Ww(d, e)) ||
    (f && h && g.navigation.Ww(f, h)) ||
    g.navigation.Ww(a, c)
  )
    return !0;
  d = La(a).Wq(a, c, !1);
  g.navigation.Fd("Connection failed with error: " + fb(d, a, c));
  return !1;
};
g.navigation.rC = function (a, c) {
  switch (c.type) {
    case g.Qf:
      if (g.navigation.Wf(a.Z, c)) return !0;
      break;
    case g.Cb:
      if (g.navigation.Wf(a.ba, c)) return !0;
      break;
    case g.ob:
      if (g.navigation.Wf(a.O, c)) return !0;
      break;
    case g.Pf:
      for (var d = 0; d < a.V.length; d++) {
        var e = a.V[d].connection;
        if (e && e.type === g.ob && g.navigation.Wf(e, c)) return !0;
      }
      if (a.O && g.navigation.Wf(a.O, c)) return !0;
  }
  g.navigation.Fd("This block can not be inserted at the marked location.");
  return !1;
};
g.navigation.bI = function (a) {
  var c = a.Ib().lb;
  if (c.Bm) {
    var d = c.Fa;
    d.isConnected()
      ? ((c = C(d) ? d : d.ma),
        (d = C(d) ? d.ma : d),
        d.Y().Qa
          ? g.navigation.Jw("Cannot disconnect a shadow block")
          : (c.disconnect(),
            Ab(d, c),
            bb(c.Y().ce()),
            (c = g.G.Hg(c)),
            I(a.Ib(), c)))
      : g.navigation.Jw("Cannot disconnect unconnected connection");
  } else
    g.navigation.Jw(
      "Cannot disconnect blocks when the cursor is not on a connection"
    );
};
g.navigation.Qw = function () {
  I(g.navigation.$d(), g.navigation.Pg().Ib().lb);
};
g.navigation.UK = function () {
  var a = g.navigation.$d();
  I(a, null);
  a.Ja();
};
g.navigation.sd = function (a) {
  g.navigation.Le = a;
};
g.navigation.FJ = function (a) {
  var c = g.navigation.Pg();
  if (c && (c = c.Ib())) {
    var d = c.lb;
    d = d ? d.Y() : null;
    d === a
      ? d.getParent()
        ? (a = d.ba || d.O) && I(c, g.G.Hg(a.ma))
        : I(c, g.G.lm(d.u, d.ab()))
      : d && -1 < Ca(a, !1).indexOf(d) && I(c, g.G.lm(d.u, d.ab()));
  }
};
g.navigation.GJ = function (a) {
  var c = g.navigation.Pg().Ib();
  if (c) {
    var d = c.lb;
    d = d ? d.Y() : null;
    d === a && I(c, g.G.Gg(d));
  }
};
g.navigation.lI = function () {
  var a = g.navigation.Pg();
  a.zb || ((a.zb = !0), g.navigation.Er(a));
};
g.navigation.$H = function () {
  var a = g.navigation.Pg();
  a.zb &&
    ((a.zb = !1),
    a.Ib().Ja(),
    g.navigation.$d().Ja(),
    g.navigation.sm() && g.navigation.sm().Ja());
};
g.navigation.Jw = function (a) {
  g.navigation.Jm ? g.navigation.Jm("log", a) : console.log(a);
};
g.navigation.Fd = function (a) {
  g.navigation.Jm ? g.navigation.Jm("warn", a) : console.warn(a);
};
g.navigation.AO = function (a) {
  g.navigation.Jm ? g.navigation.Jm("error", a) : console.error(a);
};
g.navigation.ps = function (a, c, d) {
  var e = a.Ib(),
    f = a.Ib().lb;
  if (f.qb() !== g.G.types.Wc) return !1;
  f = f.ft;
  I(
    e,
    g.G.lm(a, new g.g.T(c * g.navigation.vA + f.x, d * g.navigation.vA + f.y))
  );
  return !0;
};
g.navigation.QI = function (a) {
  a = a.Ib().lb;
  var c = a.qb();
  c == g.G.types.Gc
    ? ((a = a.Fa), Ka(a) && a.gg(void 0))
    : a.Bm || c == g.G.types.Wc
    ? g.navigation.Qw()
    : c == g.G.types.kc
    ? g.navigation.Fd("Cannot mark a block.")
    : c == g.G.types.tg && g.navigation.Fd("Cannot mark a stack.");
};
g.navigation.MK = function () {
  var a = {
    name: g.navigation.Db.Pd,
    bb: function (c) {
      return c.zb;
    },
    Ba: function (c, d, e) {
      d = c.La;
      switch (g.navigation.Le) {
        case g.navigation.Sf:
          return c.Ib().ic(e);
        case g.navigation.Sl:
          return (c = d ? d.hc() : c.hc()), !(!c || !c.ic(e));
        case g.navigation.Tl:
          return d && "function" == typeof d.ic ? d.ic(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.jb.C.register(a);
  J(g.g.S.rA, a.name);
};
g.navigation.KK = function () {
  var a = {
    name: g.navigation.Db.bu,
    bb: function (c) {
      return c.zb;
    },
    Ba: function (c, d, e) {
      switch (g.navigation.Le) {
        case g.navigation.Sf:
          return c.Ib().ic(e);
        case g.navigation.Sl:
          return g.navigation.GB(c), !0;
        case g.navigation.Tl:
          return (c = c.La) && "function" == typeof c.ic ? c.ic(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.jb.C.register(a);
  J(g.g.S.By, a.name);
};
g.navigation.JK = function () {
  var a = {
    name: g.navigation.Db.Ld,
    bb: function (c) {
      return c.zb;
    },
    Ba: function (c, d, e) {
      d = c.La;
      switch (g.navigation.Le) {
        case g.navigation.Sf:
          return c.Ib().ic(e);
        case g.navigation.Sl:
          return (c = d ? d.hc() : c.hc()), !(!c || !c.ic(e));
        case g.navigation.Tl:
          return d && "function" == typeof d.ic ? d.ic(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.jb.C.register(a);
  J(g.g.S.Xz, a.name);
};
g.navigation.EK = function () {
  var a = {
    name: g.navigation.Db.Lt,
    bb: function (c) {
      return c.zb;
    },
    Ba: function (c, d, e) {
      switch (g.navigation.Le) {
        case g.navigation.Sf:
          return c.Ib().ic(e);
        case g.navigation.Tl:
          return (
            ((d = c.La) && "function" == typeof d.ic && d.ic(e)) ||
              g.navigation.FB(c),
            !0
          );
        default:
          return !1;
      }
    },
  };
  g.jb.C.register(a);
  J(g.g.S.Sy, a.name);
};
g.navigation.GK = function () {
  var a = {
    name: g.navigation.Db.qz,
    bb: function (c) {
      return c.zb && !c.options.readOnly;
    },
    Ba: function () {
      switch (g.navigation.Le) {
        case g.navigation.Sf:
          return g.navigation.KC();
        default:
          return !1;
      }
    },
  };
  g.jb.C.register(a);
  J(g.g.S.HF, a.name);
};
g.navigation.HK = function () {
  var a = {
    name: g.navigation.Db.hG,
    bb: function (c) {
      return c.zb && !c.options.readOnly;
    },
    Ba: function (c) {
      switch (g.navigation.Le) {
        case g.navigation.Sf:
          return g.navigation.QI(c), !0;
        case g.navigation.Sl:
          return g.navigation.hJ(c), !0;
        default:
          return !1;
      }
    },
  };
  g.jb.C.register(a);
  J(g.g.S.nq, a.name);
};
g.navigation.yK = function () {
  var a = {
    name: g.navigation.Db.TE,
    bb: function (c) {
      return c.zb && !c.options.readOnly;
    },
    Ba: function (c) {
      switch (g.navigation.Le) {
        case g.navigation.Sf:
          return g.navigation.bI(c), !0;
        default:
          return !1;
      }
    },
  };
  g.jb.C.register(a);
  J(g.g.S.Lq, a.name);
};
g.navigation.OK = function () {
  var a = {
    name: g.navigation.Db.Iq,
    bb: function (c) {
      return c.zb && !c.options.readOnly;
    },
    Ba: function (c) {
      switch (g.navigation.Le) {
        case g.navigation.Sf:
          return c.La ? g.navigation.GB(c) : g.navigation.FB(c), !0;
        default:
          return !1;
      }
    },
  };
  g.jb.C.register(a);
  J(g.g.S.SG, a.name);
};
g.navigation.BK = function () {
  var a = {
    name: g.navigation.Db.cF,
    bb: function (c) {
      return c.zb;
    },
    Ba: function (c) {
      switch (g.navigation.Le) {
        case g.navigation.Sl:
          return g.navigation.Er(c), !0;
        case g.navigation.Tl:
          return g.navigation.Er(c), !0;
        default:
          return !1;
      }
    },
  };
  g.jb.C.register(a, !0);
  J(g.g.S.Ft, a.name, !0);
  J(g.g.S.E, a.name, !0);
};
g.navigation.NK = function () {
  var a = {
    name: g.navigation.Db.WG,
    Ba: function (d) {
      d.zb ? g.navigation.$H() : g.navigation.lI();
      return !0;
    },
  };
  g.jb.C.register(a);
  var c = K(g.g.S.RF, [g.g.S.Ci, g.g.S.Bh]);
  J(c, a.name);
};
g.navigation.QK = function () {
  var a = {
    name: g.navigation.Db.oG,
    bb: function (d) {
      return d.zb && !d.options.readOnly;
    },
    Ba: function (d) {
      return g.navigation.ps(d, -1, 0);
    },
  };
  g.jb.C.register(a);
  var c = K(g.g.S.By, [g.g.S.Bh]);
  J(c, a.name);
};
g.navigation.RK = function () {
  var a = {
    name: g.navigation.Db.pG,
    bb: function (d) {
      return d.zb && !d.options.readOnly;
    },
    Ba: function (d) {
      return g.navigation.ps(d, 1, 0);
    },
  };
  g.jb.C.register(a);
  var c = K(g.g.S.Sy, [g.g.S.Bh]);
  J(c, a.name);
};
g.navigation.SK = function () {
  var a = {
    name: g.navigation.Db.qG,
    bb: function (d) {
      return d.zb && !d.options.readOnly;
    },
    Ba: function (d) {
      return g.navigation.ps(d, 0, -1);
    },
  };
  g.jb.C.register(a);
  var c = K(g.g.S.rA, [g.g.S.Bh]);
  J(c, a.name);
};
g.navigation.PK = function () {
  var a = {
    name: g.navigation.Db.nG,
    bb: function (d) {
      return d.zb && !d.options.readOnly;
    },
    Ba: function (d) {
      return g.navigation.ps(d, 0, 1);
    },
  };
  g.jb.C.register(a);
  var c = K(g.g.S.Xz, [g.g.S.Bh]);
  J(c, a.name);
};
g.navigation.IK = function () {
  g.navigation.EK();
  g.navigation.JK();
  g.navigation.KK();
  g.navigation.MK();
  g.navigation.PK();
  g.navigation.QK();
  g.navigation.RK();
  g.navigation.SK();
  g.navigation.yK();
  g.navigation.BK();
  g.navigation.GK();
  g.navigation.HK();
  g.navigation.NK();
  g.navigation.OK();
};
g.rg = function (a, c) {
  this.LC = null;
  this.Xd = new g.g.T(0, 0);
  this.wc = this.Lc = this.Vm = this.Wm = this.Xe = null;
  this.hv = c;
  this.Io = this.Ok = this.Jo = this.Bk = !1;
  this.zf = a;
  this.na = this.wl = this.zg = this.Vi = this.ys = this.xs = null;
  this.Tr = this.Ck = this.MA = !1;
  this.jC = !g.VE;
};
b = g.rg.prototype;
b.I = function () {
  g.Touch.kk();
  g.K.DL();
  this.hv.zd = null;
  this.xs && g.Ma(this.xs);
  this.ys && g.Ma(this.ys);
  this.zg && this.zg.I();
  this.wl && this.wl.I();
  this.Vi && this.Vi.I();
};
function Bb(a, c) {
  a.Xd = g.g.T.ho(new g.g.T(c.clientX, c.clientY), a.LC);
  if (a.Bk) var d = !1;
  else (a.Bk = g.g.T.wJ(a.Xd) > (a.na ? g.sF : g.UE)), (d = a.Bk);
  if (d) {
    if (a.MA)
      throw Error("updateIsDragging_ should only be called once per gesture.");
    a.MA = !0;
    if (a.Xe) {
      a.Io = !0;
      a.Vi = new g.aq(a.Xe, a.wc);
      d = a.Vi;
      g.h.uc() || g.h.ea(!0);
      d.s.dd(!1);
      d.Pc.Ju = !1;
      d.vk && (d.Pc.moveTo(0, 0), d.vk.ol(d.ih.x, d.ih.y), wa(d.vk, d.Pc.Pa()));
      d.Pc.Gj && d.Pc.Gj(!0);
      var e = d.s.La;
      e &&
        "function" == typeof e.Nq &&
        e.Nq(d.Pc.ve() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      vb(a.Vi, a.zf, a.Xd);
      d = !0;
    } else d = !1;
    if (!d) {
      if (a.Lc)
        if (
          (a.na
            ? (a.Lc && a.Lc.isEnabled()
                ? ((d = !Cb(a.na)) ||
                    ((d = a.Xd),
                    (d = (Math.atan2(d.y, d.x) / Math.PI) * 180),
                    (e = a.na.iI),
                    (d =
                      (d < e && d > -e) || d < -180 + e || d > 180 - e
                        ? !0
                        : !1)),
                  d
                    ? ((a.wc = a.na.fb),
                      Db(a.wc),
                      g.h.uc() || g.h.ea(!0),
                      (a.Vm = null),
                      (a.Lc = zb(a.na, a.Lc)),
                      a.Lc.select(),
                      (d = !0))
                    : (d = !1))
                : (d = !1),
              (a.Ok = d))
            : a.Lc.Kc() && (a.Ok = !0),
          a.Ok)
        ) {
          a.zg = new g.Pj(a.Lc, a.wc);
          d = a.zg;
          e = a.Xd;
          var f = a.jC;
          g.h.uc() || g.h.ea(!0);
          var h = new g.h.ng(d.Lb, !0, q(d.Lb, !1));
          g.h.Ha(h);
          d.s.Mo && bb(d.Lb);
          g.g.o.Ap();
          d.s.dd(!1);
          g.Eb.yv();
          if (d.Lb.getParent() || (f && d.Lb.Z && d.Lb.Z.sa()))
            y(d.Lb, f),
              (e = d.Mm(e)),
              (e = g.g.T.sum(d.ih, e)),
              d.Lb.translate(e.x, e.y),
              g.Eb.dI(d.Lb),
              (e = d.Lg),
              (e.Rq = Pa(e));
          d.Lb.Gj(!0);
          e = d.Lb;
          e.Qp &&
            ((f = e.ab()),
            e.Pa().removeAttribute("transform"),
            e.u.Ge.ol(f.x, f.y),
            (f = e.Pa()) && wa(e.u.Ge, f));
          (e = d.s.La) &&
            "function" == typeof e.Nq &&
            e.Nq(d.Lb.ve() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
          Wa(a.zg, a.zf, a.Xd);
          d = !0;
        } else d = !1;
      else d = !1;
      if ((d = !d))
        if (a.na) d = Cb(a.na);
        else if ((d = a.wc)) (d = a.wc), (d = d.options.ad && d.options.ad.Zi);
      d &&
        ((a.wl = a.na ? new g.tq(a.na) : new g.Mn(a.wc)),
        (a.Jo = !0),
        a.wl.iy());
    }
    g.oj();
  }
  a.zf = c;
}
b.zv = function (a) {
  g.g.Wr(a)
    ? this.cancel()
    : ((this.Ck = !0),
      g.Eb.yv(),
      Db(this.wc),
      this.wc.Mo && this.wc.resize(),
      g.Bc(!!this.na),
      ra(this.wc),
      (this.zf = a),
      g.K.block(),
      this.Lc &&
        (!this.Lc.Qb && a.shiftKey && this.Lc.u.zb
          ? I(this.hv.Ib(), g.G.gv(this.Lc))
          : this.Lc.select()),
      g.g.Rk(a)
        ? fa(this, a)
        : (("touchstart" != a.type.toLowerCase() &&
            "pointerdown" != a.type.toLowerCase()) ||
            "mouse" == a.pointerType ||
            g.uJ(a, this),
          (this.LC = new g.g.T(a.clientX, a.clientY)),
          (this.jC = a.altKey || a.ctrlKey || a.metaKey),
          this.dm(a)));
};
b.dm = function (a) {
  this.xs = g.wa(document, "mousemove", null, this.wm.bind(this));
  this.ys = g.wa(document, "mouseup", null, this.Nr.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
b.wm = function (a) {
  Bb(this, a);
  this.Jo
    ? this.wl.Zi(this.Xd)
    : this.Ok
    ? Wa(this.zg, this.zf, this.Xd)
    : this.Io && vb(this.Vi, this.zf, this.Xd);
  a.preventDefault();
  a.stopPropagation();
};
b.Nr = function (a) {
  Bb(this, a);
  g.oj();
  if (this.Tr) console.log("Trying to end a gesture recursively.");
  else {
    this.Tr = !0;
    if (this.Io) wb(this.Vi, a, this.Xd);
    else if (this.Ok) $a(this.zg, a, this.Xd);
    else if (this.Jo) {
      var c = this.wl;
      c.Zi(this.Xd);
      ua(c.s);
    } else if (this.Xe && !this.Bk)
      this.Xe.dL && this.Xe.dL(), this.Xe.select && this.Xe.select();
    else if (Eb(this)) {
      c = this.Wm;
      var d = this.zf;
      Ka(c) && c.gg(d);
      Fb(this);
    } else
      !this.Vm || this.Bk || Eb(this)
        ? this.Vm ||
          this.Xe ||
          this.Wm ||
          this.Bk ||
          ((c = this.hv),
          a.shiftKey && c.zb
            ? ((d = g.g.$K(c, new g.g.T(a.clientX, a.clientY))),
              (d = g.G.lm(c, d)),
              I(c.Ib(), d))
            : g.selected && xb(g.selected),
          (c = new g.h.Lf(null, (this.wc || c).id, "workspace")),
          g.h.Ha(c))
        : (this.na && this.na.cm
            ? this.Lc.isEnabled() &&
              (g.h.uc() || g.h.ea(!0), cb(zb(this.na, this.Lc)))
            : ((c = new g.h.Lf(this.Vm, this.wc.id, "block")), g.h.Ha(c)),
          Fb(this),
          g.h.ea(!1));
    a.preventDefault();
    a.stopPropagation();
    this.I();
  }
};
b.cancel = function () {
  if (!this.Tr) {
    g.oj();
    if (this.Io) wb(this.Vi, this.zf, this.Xd);
    else if (this.Ok) $a(this.zg, this.zf, this.Xd);
    else if (this.Jo) {
      var a = this.wl;
      a.Zi(this.Xd);
      ua(a.s);
    }
    this.I();
  }
};
function fa(a, c) {
  a.Lc
    ? (Fb(a), g.Bc(!!a.na), a.Lc.vp(c))
    : a.Xe
    ? a.Xe.vp(c)
    : a.wc && !a.na && (g.Bc(), a.wc.vp(c));
  c.preventDefault();
  c.stopPropagation();
  a.I();
}
function Gb(a, c, d) {
  if (a.Ck)
    throw Error(
      "Tried to call gesture.handleWsStart, but the gesture had already been started."
    );
  a.wc || (a.wc = d);
  a.zf = c;
  a.zv(c);
  a.wc.zb && g.navigation.sd(g.navigation.Sf);
}
function Hb(a, c, d) {
  if (a.Ck)
    throw Error(
      "Tried to call gesture.handleFlyoutStart, but the gesture had already been started."
    );
  a.na || (a.na = d);
  Gb(a, c, d.s);
}
function Fb(a) {
  a.Lc && !a.na && bb(a.Lc);
}
function Ib(a, c) {
  a.Vm || a.Xe || ((a.Vm = c), c.Qb && c != c.ce() ? Jb(a, c.ce()) : Jb(a, c));
}
function Jb(a, c) {
  c.Qa ? Jb(a, c.getParent()) : (a.Lc = c);
}
function Eb(a) {
  return (a.Wm ? Ka(a.Wm) : !1) && !a.Bk && (!a.na || !a.na.cm);
}
b.Jc = function () {
  return this.Jo || this.Ok || this.Io;
};
b.tm = function () {
  return this.zg ? this.zg.tm() : [];
};
g.rg.Hk = function () {
  for (var a = g.Vb.getAll(), c = 0, d; (d = a[c]); c++) if (d.zd) return !0;
  return !1;
};
g.Be = function (a, c, d) {
  this.Fc = this.Dl;
  this.VD = this.rl = null;
  this.le = new g.g.ff(0, 0);
  this.B = this.Vw = this.ui = this.Cc = this.pc = this.Me = this.ji = this.Ph = null;
  d && this.qe(d);
  this.setValue(a);
  c && (this.rl = c);
};
b = g.Be.prototype;
b.Dl = null;
b.name = void 0;
b.Zf = !1;
b.IC = 50;
b.J = null;
b.ci = !0;
b.Mj = !0;
b.Xu = null;
g.Be.Fz = "\u00a0";
b = g.Be.prototype;
b.mq = !0;
b.fk = !1;
b.qe = function (a) {
  var c = a.tooltip;
  "string" == typeof c && (c = g.g.xe(a.tooltip));
  c && this.eb(c);
};
b.Yx = function (a) {
  if (this.J) throw Error("Field already bound to a block.");
  this.J = a;
};
b.la = function () {
  !this.B && this.J && this.J.u && this.J.u.pa && (this.B = this.J.u.Mb.la());
  return this.B;
};
b.Y = function () {
  return this.J;
};
b.R = function () {
  this.Me ||
    ((this.Me = g.g.o.M(g.g.F.xc, {}, null)),
    this.isVisible() || (this.Me.style.display = "none"),
    this.J.Pa().appendChild(this.Me),
    this.gj(),
    this.Bi(),
    this.eb(this.VD),
    g.K.dm(Kb(this)),
    (this.Vw = g.wa(Kb(this), "mousedown", this, this.uj)),
    this.Ik());
};
b.gj = function () {
  Lb(this);
  Mb(this);
};
b.Ik = function () {};
function Lb(a) {
  a.pc = g.g.o.M(
    g.g.F.Hc,
    {
      rx: a.la().pq,
      ry: a.la().pq,
      x: 0,
      y: 0,
      height: a.le.height,
      width: a.le.width,
      class: "blocklyFieldRect",
    },
    a.Me
  );
}
function Mb(a) {
  a.Cc = g.g.o.M(g.g.F.qu, { class: "blocklyText" }, a.Me);
  a.la().It && a.Cc.setAttribute("dominant-baseline", "central");
  a.ui = document.createTextNode("");
  a.Cc.appendChild(a.ui);
}
b.so = function (a) {
  this.setValue(a.textContent);
};
b.QD = function (a) {
  a.textContent = this.getValue();
  return a;
};
b.I = function () {
  g.H.ym(this);
  g.ca.ym(this);
  g.K.sy(Kb(this));
  this.Vw && g.Ma(this.Vw);
  g.g.o.removeNode(this.Me);
  this.Zf = !0;
};
b.Bi = function () {
  var a = this.Me;
  this.mq &&
    a &&
    (this.J.fe()
      ? (g.g.o.Ga(a, "blocklyEditableText"),
        g.g.o.jc(a, "blocklyNonEditableText"),
        (a.style.cursor = this.Bt))
      : (g.g.o.Ga(a, "blocklyNonEditableText"),
        g.g.o.jc(a, "blocklyEditableText"),
        (a.style.cursor = "")));
};
function Ka(a) {
  return !!a.J && a.J.fe() && !!a.gg && "function" === typeof a.gg;
}
b.isVisible = function () {
  return this.Mj;
};
b.Jb = function (a) {
  if (this.Mj != a) {
    this.Mj = a;
    var c = this.Pa();
    c && (c.style.display = a ? "block" : "none");
  }
};
function Nb(a, c) {
  a.rl = c;
}
b.cC = function () {
  return this.rl;
};
b.Pa = function () {
  return this.Me;
};
b.nc = function () {};
b.Dj = function () {
  this.ui && (this.ui.nodeValue = this.Ir());
  Ob(this);
};
function Ob(a, c) {
  var d = a.la();
  c = void 0 != c ? c : a.pc ? a.la().El : 0;
  var e = 2 * c,
    f = d.qq,
    h = 0;
  a.Cc && ((h = g.g.o.Zv(a.Cc, d.Gi, d.Hi, d.Fi)), (e += h));
  a.pc && (f = Math.max(f, d.bz));
  a.le.height = f;
  a.le.width = e;
  Pb(a, c, h);
  Qb(a);
}
function Pb(a, c, d) {
  if (a.Cc) {
    var e = a.la(),
      f = a.le.height / 2;
    a.Cc.setAttribute("x", a.J.L ? a.le.width - d - c : c);
    a.Cc.setAttribute("y", e.It ? f : f - e.qq / 2 + e.dz);
  }
}
function Qb(a) {
  a.pc &&
    (a.pc.setAttribute("width", a.le.width),
    a.pc.setAttribute("height", a.le.height),
    a.pc.setAttribute("rx", a.la().pq),
    a.pc.setAttribute("ry", a.la().pq));
}
b.Xh = function () {
  if (!this.isVisible()) return new g.g.ff(0, 0);
  this.ci
    ? (this.Dj(), (this.ci = !1))
    : this.Mj &&
      0 == this.le.width &&
      (console.warn(
        "Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."
      ),
      this.Dj());
  return this.le;
};
function xa(a) {
  if (a.pc)
    (c = a.pc.getBoundingClientRect()),
      (a = g.g.style.Ak(a.pc)),
      (e = c.width),
      (c = c.height);
  else {
    var c = F(a.J),
      d = a.J.u.scale;
    a = g.g.style.Ak(Kb(a));
    var e = c.width * d;
    c = c.height * d;
    g.g.userAgent.zF
      ? ((a.x += 1.5 * d), (a.y += 1.5 * d))
      : g.g.userAgent.Uj ||
        g.g.userAgent.bf ||
        ((a.x -= 0.5 * d), (a.y -= 0.5 * d));
    e += 1 * d;
    c += 1 * d;
  }
  return new g.g.Rect(a.y, a.y + c, a.x, a.x + e);
}
b.Ir = function () {
  var a = this.Ad();
  if (!a) return g.Be.Fz;
  a.length > this.IC && (a = a.substring(0, this.IC - 2) + "\u2026");
  a = a.replace(/\s/g, g.Be.Fz);
  this.J && this.J.L && (a += "\u200f");
  return a;
};
b.Ad = function () {
  if (this.fw) {
    var a = this.fw.call(this);
    if (null !== a) return String(a);
  }
  return String(this.getValue());
};
b.Ro = function () {
  this.ci = !0;
  this.B = null;
};
function Rb(a) {
  a.ci = !0;
  a.J && a.J.pa && (a.J.Ia(), a.J.$b(), a.vy());
}
b.setValue = function (a) {
  if (null !== a) {
    var c = this.Yi(a);
    a = Sb(this, a, c);
    if (!(a instanceof Error)) {
      if ((c = this.cC()))
        if (((c = c.call(this, a)), (a = Sb(this, a, c)), a instanceof Error))
          return;
      c = this.J;
      if (!c || !c.Zf) {
        var d = this.getValue();
        d === a
          ? this.Uh(a)
          : (c &&
              g.h.isEnabled() &&
              g.h.Ha(new g.h.mh(c, "field", this.name || null, d, a)),
            this.Uh(a),
            this.ci && Rb(this));
      }
    }
  }
};
function Sb(a, c, d) {
  if (null === d) return a.wB(), a.ci && Rb(a), Error();
  void 0 !== d && (c = d);
  return c;
}
b.getValue = function () {
  return this.Fc;
};
b.Yi = function (a) {
  return null === a || void 0 === a ? null : a;
};
b.Uh = function (a) {
  this.Fc = a;
  this.ci = !0;
};
b.wB = function () {};
b.uj = function (a) {
  if (this.J && this.J.u && (a = this.J.u.Wh(a))) {
    if (a.Ck)
      throw Error(
        "Tried to call gesture.setStartField, but the gesture had already been started."
      );
    a.Wm || (a.Wm = this);
  }
};
b.eb = function (a) {
  a || "" === a || (a = this.J);
  var c = Kb(this);
  c ? (c.If = a) : (this.VD = a);
};
function Kb(a) {
  return a.Xu || a.Pa();
}
b.ip = function () {
  return !1;
};
b.Qg = function () {
  for (var a = null, c = this.J, d = c.V, e = 0; e < c.V.length; e++)
    for (var f = d[e], h = f.kb, k = 0; k < h.length; k++)
      if (h[k] === this) {
        a = f;
        break;
      }
  return a;
};
b.zC = function () {
  return !1;
};
b.ic = function () {
  return !1;
};
b.pi = function (a) {
  a ? (this.Me.appendChild(a), (this.Ph = a)) : (this.Ph = null);
};
b.si = function (a) {
  a ? (this.Me.appendChild(a), (this.ji = a)) : (this.ji = null);
};
b.vy = function () {
  var a = this.J.u;
  a.zb && this.Ph && a.Ib().draw();
  a.zb && this.ji && a.$d(g.navigation.tn).draw();
};
g.wd = function (a, c, d) {
  this.Zq = null;
  g.wd.v.constructor.call(this, a, null, d);
  d || (this.Zq = c || null);
};
g.g.object.X(g.wd, g.Be);
g.wd.prototype.Dl = "";
g.wd.ka = function (a) {
  var c = g.g.xe(a.text);
  return new g.wd(c, void 0, a);
};
g.wd.prototype.mq = !1;
g.wd.prototype.qe = function (a) {
  g.wd.v.qe.call(this, a);
  this.Zq = a["class"];
};
g.wd.prototype.gj = function () {
  Mb(this);
  this.Zq && g.g.o.Ga(this.Cc, this.Zq);
};
g.wd.prototype.Yi = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
g.$f.register("field_label", g.wd);
g.vz = function (a, c, d, e) {
  if (a != g.rh && !c)
    throw Error("Value inputs and statement inputs must have non-empty name.");
  this.type = a;
  this.name = c;
  this.J = d;
  this.connection = e;
  this.kb = [];
};
b = g.vz.prototype;
b.align = g.jt;
b.Mj = !0;
b.Y = function () {
  return this.J;
};
function L(a, c, d) {
  Tb(a, a.kb.length, c, d);
  return a;
}
function Tb(a, c, d, e) {
  if (0 > c || c > a.kb.length) throw Error("index " + c + " out of bounds.");
  if (!(d || ("" == d && e))) return c;
  "string" == typeof d && (d = new g.wd(d));
  d.Yx(a.J);
  a.J.pa && (d.R(), d.nc());
  d.name = e;
  d.Jb(a.isVisible());
  e = d;
  e.Dx && (c = Tb(a, c, e.Dx));
  a.kb.splice(c, 0, d);
  ++c;
  e.ky && (c = Tb(a, c, e.ky));
  a.J.pa && ((a.J = a.J), a.J.Ia(), a.J.$b());
  return c;
}
function Ub(a, c) {
  for (var d = 0, e; (e = a.kb[d]); d++)
    if (e.name === c) {
      e.I();
      a.kb.splice(d, 1);
      a.J.pa && ((a.J = a.J), a.J.Ia(), a.J.$b());
      return;
    }
  throw Error('Field "' + c + '" not found.');
}
b.isVisible = function () {
  return this.Mj;
};
b.Jb = function (a) {
  if (this.Mj != a) {
    this.Mj = a;
    for (var c = 0, d; (d = this.kb[c]); c++) d.Jb(a);
    if (this.connection) {
      this.connection = this.connection;
      if (a) Vb(this.connection);
      else if (((c = this.connection), Wb(c, !1), c.ma))
        for (c = q(c.sa(), !1), d = 0; d < c.length; d++) {
          for (var e = c[d], f = e.cg(!0), h = 0; h < f.length; h++)
            Wb(f[h], !1);
          e = Va(e);
          for (h = 0; h < e.length; h++) e[h].Jb(!1);
        }
      if ((c = this.connection.sa()))
        c.Pa().style.display = a ? "block" : "none";
    }
  }
};
b.Ro = function () {
  for (var a = 0, c; (c = this.kb[a]); a++) c.Ro();
};
b.Sb = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Sb(a);
  return this;
};
function Xb(a, c) {
  a.align = c;
  a.J.pa && ((a.J = a.J), a.J.Ia());
  return a;
}
b.Tm = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Tm(a);
};
b.um = function () {
  if (!this.connection) throw Error("This input does not have a connection.");
  return this.connection.um();
};
b.R = function () {
  if (this.J.u.pa) for (var a = 0; a < this.kb.length; a++) this.kb[a].R();
};
b.I = function () {
  for (var a = 0, c; (c = this.kb[a]); a++) c.I();
  this.connection && this.connection.I();
  this.J = null;
};
g.me = function (a, c, d) {
  if (g.Generator && "undefined" != typeof g.Generator.prototype[c])
    throw Error(
      'Block prototypeName "' +
        c +
        '" conflicts with Blockly.Generator members.'
    );
  this.id = d && !a.Zd(d) ? d : g.g.Vh();
  a.Lu[this.id] = this;
  this.ba = this.Z = this.O = null;
  this.V = [];
  this.bi = void 0;
  this.disabled = !1;
  this.If = "";
  this.contextMenu = !0;
  this.ah = null;
  this.Lh = [];
  this.AB = this.NC = this.nv = !0;
  this.lk = this.Qa = !1;
  this.Sn = null;
  this.Ie = { text: null, Bx: !1, size: new g.g.ff(160, 80) };
  this.hE = new g.g.T(0, 0);
  this.u = a;
  this.Qb = a.eg;
  this.L = a.L;
  this.Em = !1;
  this.Tg = void 0;
  this.pa = null;
  if (c) {
    this.type = c;
    d = g.N[c];
    if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
    g.g.object.Re(this, d);
  }
  a.Oq(this);
  a.Ai[this.type] || (a.Ai[this.type] = []);
  a.Ai[this.type].push(this);
  (a = g.h.uc()) || g.h.ea(!0);
  c = g.h.cb;
  try {
    "function" == typeof this.R && ((g.h.cb = !1), this.R(), (g.h.cb = c)),
      g.h.isEnabled() && g.h.Ha(new g.h.$p(this));
  } finally {
    a || g.h.ea(!1), (g.h.cb = c);
  }
  this.gJ = this.bi;
  if ("function" == typeof this.onchange) {
    if ((a = this.onchange) && "function" != typeof a)
      throw Error("onchange must be a function.");
    this.$o && ob(this.u, this.$o);
    if ((this.onchange = a)) (this.$o = a.bind(this)), H(this.u, this.$o);
  }
};
g.me.mn = "_TEMP_COLLAPSED_INPUT";
g.me.wt = "_TEMP_COLLAPSED_FIELD";
b = g.me.prototype;
b.data = null;
b.Zf = !1;
b.ld = "#000000";
b.kl = null;
b.I = function (a) {
  if (this.u) {
    this.$o && ob(this.u, this.$o);
    y(this, a);
    g.h.isEnabled() && g.h.Ha(new g.h.xE(this));
    g.h.disable();
    try {
      if (this.u) {
        this.u.Is(this);
        var c = this.u;
        c.Ai[this.type].splice(c.Ai[this.type].indexOf(this), 1);
        c.Ai[this.type].length || delete c.Ai[this.type];
        delete this.u.Lu[this.id];
        this.u = null;
      }
      g.selected == this && (g.selected = null);
      for (var d = this.Lh.length - 1; 0 <= d; d--) this.Lh[d].I(!1);
      d = 0;
      for (var e; (e = this.V[d]); d++) e.I();
      this.V.length = 0;
      var f = this.cg(!0);
      d = 0;
      for (var h; (h = f[d]); d++) h.I();
    } finally {
      g.h.enable(), (this.Zf = !0);
    }
  }
};
b.Ik = function () {
  for (var a = 0, c; (c = this.V[a]); a++)
    for (var d = 0, e; (e = c.kb[d]); d++) e.Ik && e.Ik();
};
function y(a, c) {
  if (a.O) {
    var d = null;
    a.O.isConnected() && ((d = a.O.ma), a.O.disconnect());
    if (d && c) {
      a: {
        c = null;
        for (var e = 0; e < a.V.length; e++) {
          var f = a.V[e].connection;
          if (f && f.type == g.ob && f.ma) {
            if (c) {
              c = null;
              break a;
            }
            c = f;
          }
        }
      }
      c &&
        c.isConnected() &&
        !c.sa().Qa &&
        ((c = c.ma),
        c.disconnect(),
        B(a.u.Vn, c, d, !1) ? d.connect(c) : c.ss(d));
    }
  } else
    a.ba &&
      ((d = null),
      a.ba.isConnected() && ((d = a.ba.ma), a.ba.disconnect()),
      (e = t(a)),
      c &&
        e &&
        !e.Qa &&
        ((c = a.Z.ma),
        c.disconnect(),
        d && B(a.u.Vn, d, c, !1) && d.connect(c)));
}
b.cg = function () {
  var a = [];
  this.O && a.push(this.O);
  this.ba && a.push(this.ba);
  this.Z && a.push(this.Z);
  for (var c = 0, d; (d = this.V[c]); c++) d.connection && a.push(d.connection);
  return a;
};
b.Zr = function () {
  for (var a = this.Z; a; ) {
    var c = a.sa();
    if (!c) return a;
    a = c.Z;
  }
  return null;
};
b.$b = function () {};
b.getParent = function () {
  return this.ah;
};
function Ba(a, c) {
  for (var d = 0, e; (e = a.V[d]); d++)
    if (e.connection && e.connection.sa() == c) return e;
  return null;
}
function Yb(a) {
  do {
    var c = a;
    a = a.getParent();
    if (!a) return null;
  } while (t(a) == c);
  return a;
}
function t(a) {
  return a.Z && a.Z.sa();
}
b.ce = function () {
  var a = this;
  do {
    var c = a;
    a = c.ah;
  } while (a);
  return c;
};
function Ca(a, c) {
  if (!c) return a.Lh;
  c = [];
  for (var d = 0, e; (e = a.V[d]); d++)
    e.connection && (e = e.connection.sa()) && c.push(e);
  (a = t(a)) && c.push(a);
  return c;
}
b.Qs = function (a) {
  if (a != this.ah) {
    if (this.ah) {
      g.g.Pq(this.ah.Lh, this);
      if (this.ba && this.ba.isConnected())
        throw Error("Still connected to previous block.");
      if (this.O && this.O.isConnected())
        throw Error("Still connected to parent block.");
      this.ah = null;
    } else this.u.Is(this);
    (this.ah = a) ? a.Lh.push(this) : this.u.Oq(this);
  }
};
function q(a, c) {
  var d = [a];
  a = Ca(a, c);
  for (var e, f = 0; (e = a[f]); f++) d.push.apply(d, q(e, c));
  return d;
}
b.ve = function () {
  return this.nv && !this.Qa && !(this.u && this.u.options.readOnly);
};
b.Kc = function () {
  return this.NC && !this.Qa && !(this.u && this.u.options.readOnly);
};
b.Ps = function (a) {
  this.NC = a;
};
b.Xx = function (a) {
  this.Qa = a;
};
b.we = function () {
  return this.Em;
};
b.BD = function (a) {
  this.Em = a;
};
b.fe = function () {
  return this.AB && !(this.u && this.u.options.readOnly);
};
b.Ux = function (a) {
  this.AB = a;
  a = 0;
  for (var c; (c = this.V[a]); a++)
    for (var d = 0, e; (e = c.kb[d]); d++) e.Bi();
};
b.$v = function (a, c) {
  var d = this.cg(!0);
  a = a.cg(!0);
  if (d.length != a.length)
    throw Error("Connection lists did not match in length.");
  for (var e = 0; e < a.length; e++) if (a[e] == c) return d[e];
  return null;
};
b.eb = function (a) {
  this.If = a;
};
b.Xv = function () {
  return this.ld;
};
b.bd = function (a) {
  this.ld = g.g.Bs(a).Fo;
};
b.cc = function (a) {
  this.kl = a;
};
function x(a, c) {
  for (var d = 0, e; (e = a.V[d]); d++)
    for (var f = 0, h; (h = e.kb[f]); f++) if (h.name == c) return h;
  return null;
}
b.Zh = function () {
  for (var a = [], c = 0, d; (d = this.V[c]); c++)
    for (var e = 0, f; (f = d.kb[e]); e++) f.ip() && a.push(f.getValue());
  return a;
};
b.Yh = function () {
  for (var a = [], c = 0, d; (d = this.V[c]); c++)
    for (var e = 0, f; (f = d.kb[e]); e++)
      f.ip() && (f = this.u.dg(f.getValue())) && a.push(f);
  return a;
};
b.bt = function (a) {
  for (var c = 0, d; (d = this.V[c]); c++)
    for (var e = 0, f; (f = d.kb[e]); e++)
      f.ip() && a.Oa() == f.getValue() && Rb(f);
};
b.Ks = function (a, c) {
  for (var d = 0, e; (e = this.V[d]); d++)
    for (var f = 0, h; (h = e.kb[f]); f++)
      h.ip() && a == h.getValue() && h.setValue(c);
};
function D(a, c) {
  return (a = x(a, c)) ? a.getValue() : null;
}
function Zb(a, c, d) {
  a = x(a, d);
  if (!a) throw Error('Field "' + d + '" not found.');
  a.setValue(c);
}
b.We = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.ba) {
      if (this.O)
        throw Error(
          "Remove output connection prior to adding previous connection."
        );
      this.ba = this.Qo(g.Qf);
    }
    this.ba.Sb(c);
  } else if (this.ba) {
    if (this.ba.isConnected())
      throw Error(
        "Must disconnect previous statement before removing connection."
      );
    this.ba.I();
    this.ba = null;
  }
};
b.Ve = function (a, c) {
  if (a)
    void 0 === c && (c = null),
      this.Z || (this.Z = this.Qo(g.Cb)),
      this.Z.Sb(c);
  else if (this.Z) {
    if (this.Z.isConnected())
      throw Error("Must disconnect next statement before removing connection.");
    this.Z.I();
    this.Z = null;
  }
};
b.ke = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.O) {
      if (this.ba)
        throw Error(
          "Remove previous connection prior to adding output connection."
        );
      this.O = this.Qo(g.Pf);
    }
    this.O.Sb(c);
  } else if (this.O) {
    if (this.O.isConnected())
      throw Error("Must disconnect output value before removing connection.");
    this.O.I();
    this.O = null;
  }
};
b.cd = function (a) {
  this.bi != a &&
    (g.h.Ha(new g.h.mh(this, "inline", null, this.bi, a)), (this.bi = a));
};
function Ma(a) {
  if (void 0 != a.bi) return a.bi;
  for (var c = 1; c < a.V.length; c++)
    if (a.V[c - 1].type == g.rh && a.V[c].type == g.rh) return !1;
  for (c = 1; c < a.V.length; c++)
    if (a.V[c - 1].type == g.ob && a.V[c].type == g.rh) return !0;
  return !1;
}
b.isEnabled = function () {
  return !this.disabled;
};
b.je = function (a) {
  this.isEnabled() != a &&
    (g.h.Ha(new g.h.mh(this, "disabled", null, this.disabled, !a)),
    (this.disabled = !a));
};
function $b(a) {
  for (a = Yb(a); a; ) {
    if (a.disabled) return !0;
    a = Yb(a);
  }
  return !1;
}
b.isCollapsed = function () {
  return this.lk;
};
b.Fj = function (a) {
  this.lk != a &&
    (g.h.Ha(new g.h.mh(this, "collapsed", null, this.lk, a)), (this.lk = a));
};
b.toString = function (a, c) {
  function d(n) {
    var p = n.Ag;
    !p && n.ma && (p = n.ma.Ag);
    return !!p && (-1 != p.indexOf("Boolean") || -1 != p.indexOf("Number"));
  }
  function e() {
    k && k.qb() == l.qb() && k.Fa == l.Fa && (k = null);
  }
  var f = [];
  c = c || "?";
  var h = g.G.Li;
  g.G.Li = !0;
  for (var k = g.G.Gg(this), l = k; k; ) {
    switch (k.qb()) {
      case g.G.types.cf:
        var m = k.Fa;
        k.Vg() ? d(m) && f.push("(") : f.push(c);
        break;
      case g.G.types.Gc:
        (m = k.Fa), m.name != g.me.wt && f.push(m.Ad());
    }
    m = k;
    k = m.Vg() || m.next();
    if (!k) {
      k = m.Zg();
      for (e(); k && !k.next(); )
        (k = k.Zg()),
          e(),
          k && k.qb() == g.G.types.cf && d(k.Fa) && f.push(")");
      k && (k = k.next());
    }
  }
  g.G.Li = h;
  c = 2;
  for (h = f.length; c < h; c++)
    "(" == f[c - 2] &&
      ")" == f[c] &&
      ((f[c - 2] = f[c - 1]), f.splice(c - 1, 2), (h -= 2));
  f =
    f
      .join(" ")
      .replace(/(\() | (\))/gim, "$1$2")
      .trim() || "???";
  a && f.length > a && (f = f.substring(0, a - 3) + "...");
  return f;
};
function M(a, c) {
  return a.On(g.ob, c);
}
function ac(a, c) {
  return a.On(g.Cb, c);
}
function N(a, c) {
  return a.On(g.rh, c || "");
}
function O(a, c) {
  var d = c.type ? 'Block "' + c.type + '": ' : "";
  if (c.output && c.previousStatement)
    throw Error(d + "Must not have both an output and a previousStatement.");
  c.style && c.style.Tg && ((a.Tg = c.style.Tg), (c.style = null));
  if (c.style && c.colour)
    throw Error(d + "Must not have both a colour and a style.");
  if (c.style) {
    var e = c.style;
    try {
      a.cc(e);
    } catch (aa) {
      console.warn(d + "Style does not exist: ", e);
    }
  } else if ("colour" in c)
    if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
    else {
      e = c.colour;
      try {
        a.bd(e);
      } catch (aa) {
        console.warn(d + "Illegal colour value: ", e);
      }
    }
  for (e = 0; void 0 !== c["message" + e]; ) {
    for (
      var f = a,
        h = c["args" + e] || [],
        k = c["lastDummyAlign" + e],
        l = d,
        m = g.g.xL(c["message" + e]),
        n = [],
        p = 0,
        r = [],
        w = 0;
      w < m.length;
      w++
    ) {
      var E = m[w];
      if ("number" == typeof E) {
        if (0 >= E || E > h.length)
          throw Error(
            'Block "' + f.type + '": Message index %' + E + " out of range."
          );
        if (n[E])
          throw Error(
            'Block "' + f.type + '": Message index %' + E + " duplicated."
          );
        n[E] = !0;
        p++;
        r.push(h[E - 1]);
      } else (E = E.trim()) && r.push(E);
    }
    if (p != h.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          h.length +
          " arg(s)."
      );
    r.length &&
      ("string" == typeof r[r.length - 1] ||
        g.g.tb.startsWith(r[r.length - 1].type, "field_")) &&
      ((w = { type: "input_dummy" }), k && (w.align = k), r.push(w));
    k = { LEFT: g.jt, RIGHT: g.yl, CENTRE: g.ht, CENTER: g.ht };
    h = [];
    for (w = 0; w < r.length; w++)
      if (((n = r[w]), "string" == typeof n)) h.push([n, void 0]);
      else {
        m = p = null;
        do
          if (((E = !1), "string" == typeof n)) p = new g.wd(n);
          else
            switch (n.type) {
              case "input_value":
                m = M(f, n.name);
                break;
              case "input_statement":
                m = ac(f, n.name);
                break;
              case "input_dummy":
                m = N(f, n.name);
                break;
              default:
                (p = g.$f.ka(n)), !p && n.alt && ((n = n.alt), (E = !0));
            }
        while (E);
        if (p) h.push([p, n.name]);
        else if (m) {
          n.check && m.Sb(n.check);
          n.align &&
            ((p = k[n.align.toUpperCase()]),
            void 0 === p
              ? console.warn(l + "Illegal align value: ", n.align)
              : Xb(m, p));
          for (n = 0; n < h.length; n++) L(m, h[n][0], h[n][1]);
          h.length = 0;
        }
      }
    e++;
  }
  void 0 !== c.inputsInline && a.cd(c.inputsInline);
  void 0 !== c.output && a.ke(!0, c.output);
  void 0 !== c.previousStatement && a.We(!0, c.previousStatement);
  void 0 !== c.nextStatement && a.Ve(!0, c.nextStatement);
  void 0 !== c.tooltip && ((e = c.tooltip), (e = g.g.xe(e)), a.eb(e));
  void 0 !== c.enableContextMenu &&
    ((e = c.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== c.helpUrl && ((e = c.helpUrl), (e = g.g.xe(e)), (a.Pb = e));
  "string" == typeof c.extensions &&
    (console.warn(
      d +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        c.type +
        "' block."
    ),
    (c.extensions = [c.extensions]));
  void 0 !== c.mutator && g.ga.apply(c.mutator, a, !0);
  if (Array.isArray(c.extensions))
    for (c = c.extensions, d = 0; d < c.length; ++d) g.ga.apply(c[d], a, !1);
}
b.Re = function (a, c) {
  if (void 0 !== c && "boolean" != typeof c)
    throw Error("opt_disableCheck must be a boolean if provided");
  if (!c) {
    c = [];
    for (var d in a) void 0 !== this[d] && c.push(d);
    if (c.length)
      throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  }
  g.g.object.Re(this, a);
};
b.On = function (a, c) {
  var d = null;
  if (a == g.ob || a == g.Cb) d = this.Qo(a);
  a = new g.vz(a, c, this, d);
  this.V.push(a);
  return a;
};
function bc(a, c, d) {
  if (c != d) {
    for (var e = -1, f = d ? -1 : a.V.length, h = 0, k; (k = a.V[h]); h++)
      if (k.name == c) {
        if (((e = h), -1 != f)) break;
      } else if (d && k.name == d && ((f = h), -1 != e)) break;
    if (-1 == e) throw Error('Named input "' + c + '" not found.');
    if (-1 == f) throw Error('Reference input "' + d + '" not found.');
    a.Zw(e, f);
  }
}
b.Zw = function (a, c) {
  if (a == c) throw Error("Can't move input to itself.");
  if (a >= this.V.length)
    throw RangeError("Input index " + a + " out of bounds.");
  if (c > this.V.length)
    throw RangeError("Reference input " + c + " out of bounds.");
  var d = this.V[a];
  this.V.splice(a, 1);
  a < c && c--;
  this.V.splice(c, 0, d);
};
b.Ab = function (a, c) {
  for (var d = 0, e; (e = this.V[d]); d++)
    if (e.name == a) return e.I(), this.V.splice(d, 1), !0;
  if (c) return !1;
  throw Error("Input not found: " + a);
};
function z(a, c) {
  for (var d = 0, e; (e = a.V[d]); d++) if (e.name == c) return e;
  return null;
}
function P(a, c) {
  return (a = z(a, c)) && a.connection && a.connection.sa();
}
b.fh = function (a) {
  this.Ie.text != a &&
    (g.h.Ha(new g.h.mh(this, "comment", null, this.Ie.text, a)),
    (this.Sn = this.Ie.text = a));
};
b.Um = function () {};
b.Hj = function () {};
b.ab = function () {
  return this.hE;
};
b.moveBy = function (a, c) {
  if (this.ah) throw Error("Block has parent.");
  var d = new g.h.kn(this);
  this.hE.translate(a, c);
  d.hl();
  g.h.Ha(d);
};
b.Qo = function (a) {
  return new g.Ca(this, a);
};
g.m = {};
g.m.OM = function () {};
g.g.va = {};
g.g.va.lE = "aria-";
g.g.va.IG = "role";
g.g.va.Oi = {
  JM: "grid",
  KM: "gridcell",
  AF: "group",
  WF: "listbox",
  kG: "menu",
  lG: "menuitem",
  ZM: "menuitemcheckbox",
  uG: "option",
  CG: "presentation",
  lu: "row",
  ZG: "tree",
  $G: "treeitem",
};
g.g.va.State = {
  gt: "activedescendant",
  dM: "colcount",
  SE: "disabled",
  dF: "expanded",
  rz: "invalid",
  SF: "label",
  TF: "labelledby",
  UF: "level",
  PN: "orientation",
  VN: "posinset",
  aO: "rowcount",
  Ql: "selected",
  dO: "setsize",
  bH: "valuemax",
  cH: "valuemin",
};
g.g.va.Ff = function (a, c) {
  a.setAttribute(g.g.va.IG, c);
};
g.g.va.sd = function (a, c, d) {
  Array.isArray(d) && (d = d.join(" "));
  a.setAttribute(g.g.va.lE + c, d);
};
g.g.S = {
  qO: 0,
  UM: 3,
  pE: 8,
  TG: 9,
  eN: 12,
  nq: 13,
  Bh: 16,
  Ci: 17,
  zl: 18,
  RN: 19,
  $L: 20,
  Ft: 27,
  $z: 32,
  zG: 33,
  yG: 34,
  aF: 35,
  DF: 36,
  Zj: 37,
  zu: 38,
  dk: 39,
  Et: 40,
  UN: 43,
  WN: 44,
  qz: 45,
  Tj: 46,
  ZERO: 48,
  ONE: 49,
  lO: 50,
  jO: 51,
  IM: 52,
  HM: 53,
  gO: 54,
  eO: 55,
  nM: 56,
  cN: 57,
  FM: 59,
  DM: 61,
  CM: 173,
  EM: 163,
  XN: 63,
  VL: 64,
  By: 65,
  XL: 66,
  tt: 67,
  Sy: 68,
  E: 69,
  pM: 70,
  xc: 71,
  LM: 72,
  HF: 73,
  PM: 74,
  RF: 75,
  QM: 76,
  TM: 77,
  bN: 78,
  uN: 79,
  QN: 80,
  Q: 81,
  YN: 82,
  Xz: 83,
  SG: 84,
  mO: 85,
  Au: 86,
  rA: 87,
  Lq: 88,
  iH: 89,
  $l: 90,
  Kl: 91,
  rO: 92,
  fM: 93,
  tN: 96,
  mN: 97,
  sN: 98,
  rN: 99,
  iN: 100,
  hN: 101,
  qN: 102,
  pN: 103,
  gN: 104,
  lN: 105,
  kN: 106,
  oN: 107,
  jN: 109,
  nN: 110,
  fN: 111,
  qM: 112,
  uM: 113,
  vM: 114,
  wM: 115,
  xM: 116,
  yM: 117,
  zM: 118,
  AM: 119,
  BM: 120,
  rM: 121,
  sM: 122,
  tM: 123,
  dN: 144,
  bO: 145,
  GM: 166,
  RM: 183,
  cO: 186,
  hM: 189,
  oM: 187,
  eM: 188,
  SN: 190,
  hO: 191,
  UL: 192,
  kO: 192,
  fO: 222,
  vN: 219,
  YL: 220,
  cM: 221,
  pO: 224,
  VM: 224,
  WM: 91,
  XM: 93,
  oO: 229,
  nO: 252,
  TN: 255,
};
g.Ut = function () {
  this.yf = [];
  this.il = this.Hb = this.us = this.ls = this.ks = this.cr = this.ns = this.ej = this.qx = null;
};
b = g.Ut.prototype;
b.Ia = function (a) {
  var c = document.createElement("div");
  c.className = "blocklyMenu goog-menu blocklyNonSelectable";
  c.tabIndex = 0;
  this.il && g.g.va.Ff(c, this.il);
  this.Hb = c;
  for (var d = 0, e; (e = this.yf[d]); d++) c.appendChild(e.$a());
  this.ns = g.wa(c, "mouseover", this, this.VI, !0);
  this.cr = g.wa(c, "click", this, this.OI, !0);
  this.ks = g.wa(c, "mouseenter", this, this.TI, !0);
  this.ls = g.wa(c, "mouseleave", this, this.UI, !0);
  this.us = g.wa(c, "keydown", this, this.RI);
  a.appendChild(c);
};
b.focus = function () {
  var a = this.Hb;
  a && (a.focus({ preventScroll: !0 }), g.g.o.Ga(a, "blocklyFocused"));
};
b.Ff = function (a) {
  this.il = a;
};
b.I = function () {
  this.ns && (g.Ma(this.ns), (this.ns = null));
  this.cr && (g.Ma(this.cr), (this.cr = null));
  this.ks && (g.Ma(this.ks), (this.ks = null));
  this.ls && (g.Ma(this.ls), (this.ls = null));
  this.us && (g.Ma(this.us), (this.us = null));
  for (var a = 0, c; (c = this.yf[a]); a++) c.I();
  this.Hb = null;
};
function cc(a, c) {
  for (var d = a.Hb; c && c != d; ) {
    if (g.g.o.Or(c, "blocklyMenuItem"))
      for (var e = 0, f; (f = a.yf[e]); e++) if (f.Hb == c) return f;
    c = c.parentElement;
  }
  return null;
}
b.ri = function (a) {
  var c = this.ej;
  c && (c.ri(!1), (this.ej = null));
  a &&
    (a.ri(!0),
    (this.ej = a),
    (c = this.Hb),
    g.g.style.aL(a.Hb, c),
    g.g.va.sd(c, g.g.va.State.gt, a.Oa()));
};
function dc(a) {
  var c = a.yf.indexOf(a.ej);
  ec(a, 0 > c ? a.yf.length : c, -1);
}
function ec(a, c, d) {
  c += d;
  for (var e; (e = a.yf[c]); ) {
    if (e.isEnabled()) {
      a.ri(e);
      break;
    }
    c += d;
  }
}
b.VI = function (a) {
  (a = cc(this, a.target)) &&
    (a.isEnabled() ? this.ej != a && this.ri(a) : this.ri(null));
};
b.OI = function (a) {
  var c = this.qx;
  this.qx = null;
  (c &&
    "number" == typeof a.clientX &&
    1 > g.g.T.io(c, new g.g.T(a.clientX, a.clientY))) ||
    ((a = cc(this, a.target)) && a.isEnabled() && a.Nn && a.Nn(a));
};
b.TI = function () {
  this.focus();
};
b.UI = function () {
  if (this.Hb) {
    var a = this.Hb;
    a && (a.blur(), g.g.o.jc(a, "blocklyFocused"));
    this.ri(null);
  }
};
b.RI = function (a) {
  if (this.yf.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
    var c = this.ej;
    switch (a.keyCode) {
      case g.g.S.nq:
      case g.g.S.$z:
        c && c.isEnabled() && c.Nn && c.Nn(c);
        break;
      case g.g.S.zu:
        dc(this);
        break;
      case g.g.S.Et:
        ec(this, this.yf.indexOf(this.ej), 1);
        break;
      case g.g.S.zG:
      case g.g.S.DF:
        ec(this, -1, 1);
        break;
      case g.g.S.yG:
      case g.g.S.aF:
        ec(this, this.yf.length, -1);
        break;
      default:
        return;
    }
    a.preventDefault();
    a.stopPropagation();
  }
};
b.Xh = function () {
  var a = this.Hb,
    c = g.g.style.Xh(a);
  c.height = a.scrollHeight;
  return c;
};
g.Vt = function (a, c) {
  this.Oh = a;
  this.Fc = c;
  this.Ar = !0;
  this.Hb = null;
  this.Sx = !1;
  this.il = null;
  this.mC = this.Wu = this.Vu = !1;
  this.Nn = null;
};
b = g.Vt.prototype;
b.$a = function () {
  var a = document.createElement("div");
  a.id = g.g.Gl.bw();
  this.Hb = a;
  a.className =
    "blocklyMenuItem goog-menuitem " +
    (this.Ar ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") +
    (this.Wu ? "blocklyMenuItemSelected goog-option-selected " : "") +
    (this.mC ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") +
    (this.Sx ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
  var c = document.createElement("div");
  c.className = "blocklyMenuItemContent goog-menuitem-content";
  if (this.Vu) {
    var d = document.createElement("div");
    d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
    c.appendChild(d);
  }
  d = this.Oh;
  "string" == typeof this.Oh && (d = document.createTextNode(this.Oh));
  c.appendChild(d);
  a.appendChild(c);
  this.il && g.g.va.Ff(a, this.il);
  g.g.va.sd(a, g.g.va.State.Ql, (this.Vu && this.Wu) || !1);
  g.g.va.sd(a, g.g.va.State.SE, !this.Ar);
  return a;
};
b.I = function () {
  this.Hb = null;
};
b.Oa = function () {
  return this.Hb.id;
};
b.getValue = function () {
  return this.Fc;
};
b.Ff = function (a) {
  this.il = a;
};
b.ri = function (a) {
  this.mC = a;
  var c = this.Hb;
  c &&
    this.isEnabled() &&
    (a
      ? (g.g.o.Ga(c, "blocklyMenuItemHighlight"),
        g.g.o.Ga(c, "goog-menuitem-highlight"))
      : (g.g.o.jc(c, "blocklyMenuItemHighlight"),
        g.g.o.jc(c, "goog-menuitem-highlight")));
};
b.isEnabled = function () {
  return this.Ar;
};
b.je = function (a) {
  this.Ar = a;
};
function fc(a, c, d) {
  a.Nn = c.bind(d);
}
g.Za = {};
g.Za.nr = null;
g.Za.$c = null;
g.Za.show = function (a, c, d) {
  g.ca.show(g.Za, d, g.Za.I);
  if (c.length) {
    var e = g.Za.iK(c, d);
    g.Za.$c = e;
    g.Za.fl(e, a, d);
    setTimeout(function () {
      e.focus();
    }, 1);
    g.Za.nr = null;
  } else g.Za.Ja();
};
g.Za.iK = function (a, c) {
  var d = new g.Ut();
  d.Ff(g.g.va.Oi.kG);
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new g.Vt(f.text);
    h.Sx = c;
    h.Ff(g.g.va.Oi.lG);
    d.yf.push(h);
    h.je(f.enabled);
    f.enabled &&
      fc(
        h,
        function () {
          g.Za.Ja();
          this.Ba(this.scope);
        },
        f
      );
  }
  return d;
};
g.Za.fl = function (a, c, d) {
  var e = g.g.MI();
  c = new g.g.Rect(
    c.clientY + e.top,
    c.clientY + e.top,
    c.clientX + e.left,
    c.clientX + e.left
  );
  g.Za.QH(a);
  var f = a.Xh();
  d &&
    ((c.left += f.width),
    (c.right += f.width),
    (e.left += f.width),
    (e.right += f.width));
  g.ca.jK(e, c, f, d);
  a.focus();
};
g.Za.QH = function (a) {
  a.Ia(g.ca.mb);
  var c = a.Hb;
  g.g.o.Ga(c, "blocklyContextMenu");
  g.wa(c, "contextmenu", null, g.g.OJ);
  a.focus();
};
g.Za.Ja = function () {
  g.ca.ym(g.Za);
  g.Za.nr = null;
};
g.Za.I = function () {
  g.Za.$c && (g.Za.$c.I(), (g.Za.$c = null));
};
g.Za.Uq = function (a, c) {
  return function () {
    g.h.disable();
    try {
      var d = g.W.rk(c, a.u),
        e = a.ab();
      e.x = a.L ? e.x - g.Rd : e.x + g.Rd;
      e.y += 2 * g.Rd;
      d.moveBy(e.x, e.y);
    } finally {
      g.h.enable();
    }
    g.h.isEnabled() && !d.Qa && g.h.Ha(new g.h.$p(d));
    d.select();
  };
};
g.Za.wO = function (a) {
  return {
    text: g.i.REMOVE_COMMENT,
    enabled: !0,
    Ba: function () {
      g.h.ea(!0);
      a.I(!0, !0);
      g.h.ea(!1);
    },
  };
};
g.Za.xO = function (a) {
  return {
    text: g.i.DUPLICATE_COMMENT,
    enabled: !0,
    Ba: function () {
      g.duplicate(a);
    },
  };
};
g.Za.fP = function (a, c) {
  if (!g.Zl) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
  var d = { enabled: !g.g.userAgent.bf };
  d.text = g.i.ADD_COMMENT;
  d.Ba = function () {
    var e = new g.Zl(a, g.i.WORKSPACE_COMMENT_DEFAULT_TEXT, g.Zl.QE, g.Zl.QE),
      f = ca(a).getBoundingClientRect();
    f = new g.g.T(c.clientX - f.left, c.clientY - f.top);
    var h = g.g.Bo(a.Bb);
    f = g.g.T.ho(f, h);
    f.scale(1 / a.scale);
    e.moveBy(f.x, f.y);
    a.pa && (e.wf(), e.Ia(), e.select());
  };
  return d;
};
g.Da = {};
g.Da.Lx = function () {
  g.Ua.C.register({
    Yd: function () {
      return g.i.UNDO;
    },
    bb: function (a) {
      return 0 < a.u.ql.length ? "enabled" : "disabled";
    },
    Ba: function (a) {
      nb(a.u, !1);
    },
    Ue: g.Ua.Td.Wc,
    id: "undoWorkspace",
    weight: 1,
  });
};
g.Da.Kx = function () {
  g.Ua.C.register({
    Yd: function () {
      return g.i.REDO;
    },
    bb: function (a) {
      return 0 < a.u.hp.length ? "enabled" : "disabled";
    },
    Ba: function (a) {
      nb(a.u, !0);
    },
    Ue: g.Ua.Td.Wc,
    id: "redoWorkspace",
    weight: 2,
  });
};
g.Da.oK = function () {
  g.Ua.C.register({
    Yd: function () {
      return g.i.CLEAN_UP;
    },
    bb: function (a) {
      return a.u.Kc()
        ? 1 < a.u.ac(!1).length
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    Ba: function (a) {
      a = a.u;
      a.dd(!1);
      g.h.ea(!0);
      for (var c = a.ac(!0), d = 0, e = 0, f; (f = c[e]); e++)
        if (f.Kc()) {
          var h = f.ab();
          f.moveBy(-h.x, d - h.y);
          gc(f);
          d = f.ab().y + F(f).height + a.Mb.la().un;
        }
      g.h.ea(!1);
      a.dd(!0);
    },
    Ue: g.Ua.Td.Wc,
    id: "cleanWorkspace",
    weight: 3,
  });
};
g.Da.SD = function (a, c) {
  for (var d = 0, e = 0; e < c.length; e++)
    for (var f = c[e]; f; )
      setTimeout(f.Fj.bind(f, a), d), (f = t(f)), (d += 10);
};
g.Da.pK = function () {
  g.Ua.C.register({
    Yd: function () {
      return g.i.COLLAPSE_ALL;
    },
    bb: function (a) {
      if (a.u.options.collapse) {
        a = a.u.ac(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (!d.isCollapsed()) return "enabled";
            d = t(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    Ba: function (a) {
      g.Da.SD(!0, a.u.ac(!0));
    },
    Ue: g.Ua.Td.Wc,
    id: "collapseWorkspace",
    weight: 4,
  });
};
g.Da.CK = function () {
  g.Ua.C.register({
    Yd: function () {
      return g.i.EXPAND_ALL;
    },
    bb: function (a) {
      if (a.u.options.collapse) {
        a = a.u.ac(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (d.isCollapsed()) return "enabled";
            d = t(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    Ba: function (a) {
      g.Da.SD(!1, a.u.ac(!0));
    },
    Ue: g.Ua.Td.Wc,
    id: "expandWorkspace",
    weight: 5,
  });
};
g.Da.BA = function (a, c) {
  if (a.ve()) Array.prototype.push.apply(c, q(a, !1));
  else {
    a = Ca(a, !1);
    for (var d = 0; d < a.length; d++) g.Da.BA(a[d], c);
  }
};
g.Da.Yv = function (a) {
  var c = [];
  a = a.ac(!0);
  for (var d = 0; d < a.length; d++) g.Da.BA(a[d], c);
  return c;
};
g.Da.pr = function (a, c) {
  g.h.ea(c);
  var d = a.shift();
  d && (d.u ? (d.I(!1, !0), setTimeout(g.Da.pr, 10, a, c)) : g.Da.pr(a, c));
  g.h.ea(!1);
};
g.Da.wK = function () {
  g.Ua.C.register({
    Yd: function (a) {
      if (a.u)
        return (
          (a = g.Da.Yv(a.u).length),
          1 == a
            ? g.i.DELETE_BLOCK
            : g.i.DELETE_X_BLOCKS.replace("%1", String(a))
        );
    },
    bb: function (a) {
      if (a.u) return 0 < g.Da.Yv(a.u).length ? "enabled" : "disabled";
    },
    Ba: function (a) {
      if (a.u) {
        hc(a.u);
        var c = g.Da.Yv(a.u),
          d = g.g.Vh();
        2 > c.length
          ? g.Da.pr(c, d)
          : g.confirm(
              g.i.DELETE_ALL_BLOCKS.replace("%1", c.length),
              function (e) {
                e && g.Da.pr(c, d);
              }
            );
      }
    },
    Ue: g.Ua.Td.Wc,
    id: "workspaceDelete",
    weight: 6,
  });
};
g.Da.TK = function () {
  g.Da.Lx();
  g.Da.Kx();
  g.Da.oK();
  g.Da.pK();
  g.Da.CK();
  g.Da.wK();
};
g.Da.zK = function () {
  g.Ua.C.register({
    Yd: function () {
      return g.i.DUPLICATE_BLOCK;
    },
    bb: function (a) {
      a = a.block;
      return !a.Qb && a.ve() && a.Kc()
        ? (mb(a.u) ? lb(a.u, g.g.Uv(a, !0)) : 1)
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    Ba: function (a) {
      a.block && g.duplicate(a.block);
    },
    Ue: g.Ua.Td.kc,
    id: "blockDuplicate",
    weight: 1,
  });
};
g.Da.rK = function () {
  g.Ua.C.register({
    Yd: function (a) {
      return a.block.lf ? g.i.REMOVE_COMMENT : g.i.ADD_COMMENT;
    },
    bb: function (a) {
      a = a.block;
      return g.g.userAgent.bf ||
        a.Qb ||
        !a.u.options.Tn ||
        a.isCollapsed() ||
        !a.fe()
        ? "hidden"
        : "enabled";
    },
    Ba: function (a) {
      a = a.block;
      a.lf ? a.fh(null) : a.fh("");
    },
    Ue: g.Ua.Td.kc,
    id: "blockComment",
    weight: 2,
  });
};
g.Da.FK = function () {
  g.Ua.C.register({
    Yd: function (a) {
      return Ma(a.block) ? g.i.EXTERNAL_INPUTS : g.i.INLINE_INPUTS;
    },
    bb: function (a) {
      a = a.block;
      if (!a.Qb && a.Kc() && !a.isCollapsed())
        for (var c = 1; c < a.V.length; c++)
          if (a.V[c - 1].type != g.Cb && a.V[c].type != g.Cb) return "enabled";
      return "hidden";
    },
    Ba: function (a) {
      a.block.cd(!Ma(a.block));
    },
    Ue: g.Ua.Td.kc,
    id: "blockInline",
    weight: 3,
  });
};
g.Da.qK = function () {
  g.Ua.C.register({
    Yd: function (a) {
      return a.block.isCollapsed() ? g.i.EXPAND_BLOCK : g.i.COLLAPSE_BLOCK;
    },
    bb: function (a) {
      a = a.block;
      return !a.Qb && a.Kc() ? "enabled" : "hidden";
    },
    Ba: function (a) {
      a.block.Fj(!a.block.isCollapsed());
    },
    Ue: g.Ua.Td.kc,
    id: "blockCollapseExpand",
    weight: 4,
  });
};
g.Da.xK = function () {
  g.Ua.C.register({
    Yd: function (a) {
      return a.block.isEnabled() ? g.i.DISABLE_BLOCK : g.i.ENABLE_BLOCK;
    },
    bb: function (a) {
      a = a.block;
      return !a.Qb && a.u.options.disable && a.fe()
        ? $b(a)
          ? "disabled"
          : "enabled"
        : "hidden";
    },
    Ba: function (a) {
      a = a.block;
      var c = g.h.uc();
      c || g.h.ea(!0);
      a.je(!a.isEnabled());
      c || g.h.ea(!1);
    },
    Ue: g.Ua.Td.kc,
    id: "blockDisable",
    weight: 5,
  });
};
g.Da.Ix = function () {
  g.Ua.C.register({
    Yd: function (a) {
      var c = a.block;
      a = q(c, !1).length;
      (c = t(c)) && (a -= q(c, !1).length);
      return 1 == a
        ? g.i.DELETE_BLOCK
        : g.i.DELETE_X_BLOCKS.replace("%1", String(a));
    },
    bb: function (a) {
      return !a.block.Qb && a.block.ve() ? "enabled" : "hidden";
    },
    Ba: function (a) {
      g.h.ea(!0);
      a.block.I(!0, !0);
      g.h.ea(!1);
    },
    Ue: g.Ua.Td.kc,
    id: "blockDelete",
    weight: 6,
  });
};
g.Da.DK = function () {
  g.Ua.C.register({
    Yd: function () {
      return g.i.HELP;
    },
    bb: function (a) {
      a = a.block;
      return ("function" == typeof a.Pb ? a.Pb() : a.Pb) ? "enabled" : "hidden";
    },
    Ba: function (a) {
      a.block.showHelp();
    },
    Ue: g.Ua.Td.kc,
    id: "blockHelp",
    weight: 7,
  });
};
g.Da.nK = function () {
  g.Da.zK();
  g.Da.rK();
  g.Da.FK();
  g.Da.qK();
  g.Da.xK();
  g.Da.Ix();
  g.Da.DK();
};
g.Da.uK = function () {
  g.Da.TK();
  g.Da.nK();
};
g.Ua = function () {
  g.Ua.C = this;
  this.Se = {};
  g.Da.uK();
};
g.Ua.Td = { kc: "block", Wc: "workspace" };
g.Ua.C = null;
g.Ua.prototype.register = function (a) {
  if (this.Se[a.id])
    throw Error('Menu item with id "' + a.id + '" is already registered.');
  this.Se[a.id] = a;
};
g.Ua.prototype.unregister = function (a) {
  if (this.Se[a]) delete this.Se[a];
  else throw Error('Menu item with id "' + a + '" not found.');
};
g.Ua.prototype.getItem = function (a) {
  return this.Se[a] ? this.Se[a] : null;
};
function ic(a, c) {
  var d = [],
    e = g.Ua.C.Se;
  Object.keys(e).forEach(function (f) {
    f = e[f];
    if (a == f.Ue) {
      var h = f.bb(c);
      "hidden" != h &&
        ((f = {
          text: "function" == typeof f.Yd ? f.Yd(c) : f.Yd,
          enabled: "enabled" == h,
          Ba: f.Ba,
          scope: c,
          weight: f.weight,
        }),
        d.push(f));
    }
  });
  d.sort(function (f, h) {
    return f.weight - h.weight;
  });
  return d;
}
new g.Ua();
g.h.ug = function (a, c, d) {
  g.h.ug.v.constructor.call(this, d);
  this.TC = a;
  this.PC = c;
};
g.g.object.X(g.h.ug, g.h.Fe);
g.h.ug.prototype.type = g.h.Ql;
g.h.ug.prototype.ya = function () {
  var a = g.h.ug.v.ya.call(this);
  a.oldElementId = this.TC;
  a.newElementId = this.PC;
  return a;
};
g.h.ug.prototype.ka = function (a) {
  g.h.ug.v.ka.call(this, a);
  this.TC = a.oldElementId;
  this.PC = a.newElementId;
};
g.C.register(g.C.aa.fc, g.h.Ql, g.h.ug);
g.yc = function (a, c) {
  g.yc.v.constructor.call(this, a, c);
  this.Ig = a.u.lr[c];
  this.jB = a.u.lr[g.Nl[c]];
  this.al = new g.g.T(0, 0);
  this.zi = g.yc.xg.tA;
  this.ma = null;
};
g.g.object.X(g.yc, g.Ca);
g.yc.xg = { tA: -1, kA: 0, Yl: 1 };
b = g.yc.prototype;
b.I = function () {
  g.yc.v.I.call(this);
  this.zi == g.yc.xg.Yl && jc(this.Ig, this, this.y);
};
b.Y = function () {
  return g.yc.v.Y.call(this);
};
b.sa = function () {
  return g.yc.v.sa.call(this);
};
function gb(a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
}
function Ab(a, c) {
  if (!a.J.u.Jc()) {
    var d = a.J.ce();
    if (!d.Qb) {
      var e = !1;
      if (!d.Kc()) {
        d = c.Y().ce();
        if (!d.Kc()) return;
        c = a;
        e = !0;
      }
      var f = g.selected == d;
      f || d.Mq();
      var h = c.x + g.Rd + Math.floor(Math.random() * g.st) - a.x,
        k = c.y + g.Rd + Math.floor(Math.random() * g.st) - a.y;
      e && (k = -k);
      d.L && (h = c.x - g.Rd - Math.floor(Math.random() * g.st) - a.x);
      d.moveBy(h, k);
      f || d.jp();
    }
  }
}
b.moveTo = function (a, c) {
  if (this.zi == g.yc.xg.tA) {
    var d = this.Ig;
    d.tc.splice(kc(d, c), 0, this);
    this.zi = g.yc.xg.Yl;
  } else
    this.zi == g.yc.xg.Yl &&
      (jc(this.Ig, this, this.y),
      (d = this.Ig),
      d.tc.splice(kc(d, c), 0, this));
  this.x = a;
  this.y = c;
};
b.moveBy = function (a, c) {
  this.moveTo(this.x + a, this.y + c);
};
function lc(a, c) {
  a.moveTo(c.x + a.al.x, c.y + a.al.y);
}
function mc(a, c, d) {
  a.al.x = c;
  a.al.y = d;
}
function nc(a) {
  var c = a.ma.x - a.x,
    d = a.ma.y - a.y;
  if (0 != c || 0 != d) {
    a = a.sa();
    var e = a.Pa();
    if (!e) throw Error("block is not rendered.");
    e = g.g.tf(e);
    a.Pa().setAttribute(
      "transform",
      "translate(" + (e.x - c) + "," + (e.y - d) + ")"
    );
    ab(a, -c, -d);
  }
}
b.closest = function (a, c) {
  var d = this.jB;
  if (d.tc.length) {
    var e = this.y,
      f = this.x;
    this.x = f + c.x;
    this.y = e + c.y;
    var h = kc(d, this.y);
    c = null;
    for (var k = a, l, m = h - 1; 0 <= m && Math.abs(d.tc[m].y - this.y) <= a; )
      (l = d.tc[m]),
        B(d.YA, this, l, !0, k) && ((c = l), (k = gb(l, this))),
        m--;
    for (; h < d.tc.length && Math.abs(d.tc[h].y - this.y) <= a; )
      (l = d.tc[h]),
        B(d.YA, this, l, !0, k) && ((c = l), (k = gb(l, this))),
        h++;
    this.x = f;
    this.y = e;
    a = { connection: c, Es: k };
  } else a = { connection: null, Es: a };
  return a;
};
function Wb(a, c) {
  (c && a.zi == g.yc.xg.Yl) ||
    (!c && a.zi == g.yc.xg.kA) ||
    a.J.Qb ||
    (c
      ? ((c = a.Ig), c.tc.splice(kc(c, a.y), 0, a), (a.zi = g.yc.xg.Yl))
      : (a.zi == g.yc.xg.Yl && jc(a.Ig, a, a.y), (a.zi = g.yc.xg.kA)));
}
function Vb(a) {
  Wb(a, !0);
  var c = [];
  if (a.type != g.ob && a.type != g.Cb) return c;
  if ((a = a.sa())) {
    if (a.isCollapsed()) {
      var d = [];
      a.O && d.push(a.O);
      a.Z && d.push(a.Z);
      a.ba && d.push(a.ba);
    } else d = a.cg(!0);
    for (var e = 0; e < d.length; e++) c.push.apply(c, Vb(d[e]));
    c.length || (c[0] = a);
  }
  return c;
}
b.ss = function (a) {
  Ab(this, a);
};
b.wv = function (a, c) {
  g.yc.v.wv.call(this, a, c);
  a.pa && a.Ia();
  c.pa && (Fa(c), c.Ia(), (c.Pa().style.display = "block"));
};
b.mp = function () {
  g.yc.v.mp.call(this);
  var a = this.sa();
  a && (a.wf(), a.Ia(!1), (a = this.Y()), a.pa && a.Ia());
};
b.OC = function (a) {
  return oc(this.jB, this, a);
};
b.Wf = function (a) {
  g.yc.v.Wf.call(this, a);
  var c = this.Y();
  a = a.Y();
  var d = c.pa,
    e = a.pa;
  d && Fa(c);
  e && Fa(a);
  d && e && (this.type == g.Cb || this.type == g.Qf ? a.Ia() : c.Ia());
  if ((c = Ba(c, a)))
    (c = c.isVisible()), (a.Pa().style.display = c ? "block" : "none");
};
b.bD = function () {
  !this.isConnected() ||
    (this.ma && B(La(this), this, this.ma, !1)) ||
    (y(C(this) ? this.sa() : this.J), this.J.$b());
};
g.wn = function () {
  this.se = this.lb = this.Fb = null;
  this.type = "marker";
};
function I(a, c) {
  var d = a.lb;
  a.lb = c;
  a.se && a.se.draw(d, a.lb);
}
g.wn.prototype.draw = function () {
  this.se && this.se.draw(this.lb, this.lb);
};
g.wn.prototype.Ja = function () {
  this.se && this.se.Ja();
};
g.wn.prototype.I = function () {
  this.se && this.se.I();
};
g.Cl = function () {
  g.Cl.v.constructor.call(this);
  this.type = "cursor";
};
g.g.object.X(g.Cl, g.wn);
b = g.Cl.prototype;
b.next = function () {
  var a = this.lb;
  if (!a) return null;
  for (
    a = a.next();
    a && a.next() && (a.qb() == g.G.types.Ld || a.qb() == g.G.types.kc);

  )
    a = a.next();
  a && I(this, a);
  return a;
};
b.Vg = function () {
  var a = this.lb;
  if (!a) return null;
  if (a.qb() == g.G.types.Pd || a.qb() == g.G.types.ck) a = a.next();
  (a = a.Vg()) && I(this, a);
  return a;
};
b.Df = function () {
  var a = this.lb;
  if (!a) return null;
  for (
    a = a.Df();
    a && a.Df() && (a.qb() == g.G.types.Ld || a.qb() == g.G.types.kc);

  )
    a = a.Df();
  a && I(this, a);
  return a;
};
b.Zg = function () {
  var a = this.lb;
  if (!a) return null;
  (a = a.Zg()) && a.qb() == g.G.types.kc && (a = a.Df() || a);
  a && I(this, a);
  return a;
};
b.ic = function (a) {
  if (this.lb && this.lb.qb() === g.G.types.Gc && this.lb.Fa.ic(a)) return !0;
  switch (a.name) {
    case g.navigation.Db.Pd:
      return this.Df(), !0;
    case g.navigation.Db.bu:
      return this.Zg(), !0;
    case g.navigation.Db.Ld:
      return this.next(), !0;
    case g.navigation.Db.Lt:
      return this.Vg(), !0;
    default:
      return !1;
  }
};
g.Zp = function () {
  g.Zp.v.constructor.call(this);
};
g.g.object.X(g.Zp, g.Cl);
b = g.Zp.prototype;
b.next = function () {
  var a = this.lb;
  if (!a) return null;
  (a = pc(this, a, this.wy)) && I(this, a);
  return a;
};
b.Vg = function () {
  return this.next();
};
b.Df = function () {
  var a = this.lb;
  if (!a) return null;
  (a = qc(this, a, this.wy)) && I(this, a);
  return a;
};
b.Zg = function () {
  return this.Df();
};
function pc(a, c, d) {
  if (!c) return null;
  var e = c.Vg() || c.next();
  if (d(e)) return e;
  if (e) return pc(a, e, d);
  c = rc(a, c.Zg());
  return d(c) ? c : c ? pc(a, c, d) : null;
}
function qc(a, c, d) {
  if (!c) return null;
  var e = c.Df();
  e = e ? sc(a, e) : c.Zg();
  return d(e) ? e : e ? qc(a, e, d) : null;
}
b.wy = function (a) {
  var c = !1;
  a = a && a.qb();
  if (
    a == g.G.types.ck ||
    a == g.G.types.cf ||
    a == g.G.types.Gc ||
    a == g.G.types.Ld ||
    a == g.G.types.Pd ||
    a == g.G.types.Wc
  )
    c = !0;
  return c;
};
function rc(a, c) {
  if (!c) return null;
  var d = c.next();
  return d ? d : rc(a, c.Zg());
}
function sc(a, c) {
  if (!c.Vg()) return c;
  for (c = c.Vg(); c.next(); ) c = c.next();
  return sc(a, c);
}
g.Kq = function () {
  g.Kq.v.constructor.call(this);
};
g.g.object.X(g.Kq, g.Zp);
g.Kq.prototype.wy = function (a) {
  var c = !1,
    d = a && a.qb();
  a && ((a = a.Fa), d == g.G.types.Gc && a && a.zC() && Ka(a) && (c = !0));
  return c;
};
g.wb = function (a, c, d) {
  this.P = g.g.o.M(g.g.F.xc, {}, null);
  this.P.Jp = "";
  this.style = tc(a.Mb.la(), null);
  this.Rb = a.Mb.GC(this.P, this.style);
  this.Mx = this.pa = !1;
  this.u = a;
  this.ba = this.Z = this.O = null;
  this.Qp = g.g.Lk() && !!a.Ge;
  var e = this.Rb.dc;
  e.If = this;
  g.K.dm(e);
  g.wb.v.constructor.call(this, a, c, d);
  this.P.dataset
    ? (this.P.dataset.id = this.id)
    : g.g.userAgent.bf && this.P.setAttribute("data-id", this.id);
};
g.g.object.X(g.wb, g.me);
g.wb.prototype.height = 0;
g.wb.prototype.width = 0;
g.wb.prototype.Ae = null;
g.wb.NM = -1;
g.wb.AE = "TEMP_COLLAPSED_WARNING_";
b = g.wb.prototype;
b.wf = function () {
  if (!this.u.pa) throw TypeError("Workspace is headless.");
  for (var a = 0, c; (c = this.V[a]); a++) c.R();
  c = Va(this);
  for (a = 0; a < c.length; a++) uc(c[a]);
  this.nc();
  Ta(this.Rb, "blocklyDraggable", this.Kc());
  a = this.Pa();
  this.u.options.readOnly ||
    this.nI ||
    !a ||
    g.wa(a, "mousedown", this, this.uj);
  this.nI = !0;
  a.parentNode || this.u.Bb.appendChild(a);
};
b.select = function () {
  if (this.Qa && this.getParent()) this.getParent().select();
  else if (g.selected != this) {
    var a = null;
    if (g.selected) {
      a = g.selected.id;
      g.h.disable();
      try {
        xb(g.selected);
      } finally {
        g.h.enable();
      }
    }
    a = new g.h.ug(a, this.id, this.u.id);
    g.h.Ha(a);
    g.selected = this;
    this.Mq();
  }
};
function xb(a) {
  if (g.selected == a) {
    var c = new g.h.ug(a.id, null, a.u.id);
    c.Tc = a.u.id;
    g.h.Ha(c);
    g.selected = null;
    a.jp();
  }
}
b.qd = null;
b.Sn = null;
b.lf = null;
b.Ze = null;
function Va(a) {
  var c = [];
  a.qd && c.push(a.qd);
  a.lf && c.push(a.lf);
  a.Ze && c.push(a.Ze);
  return c;
}
b.Qs = function (a) {
  var c = this.ah;
  if (a != c) {
    g.g.o.Ap();
    g.wb.v.Qs.call(this, a);
    g.g.o.Bp();
    var d = this.Pa();
    if (!this.u.uw && d) {
      var e = this.ab();
      a
        ? (a.Pa().appendChild(d),
          (a = this.ab()),
          ab(this, a.x - e.x, a.y - e.y))
        : c && (this.u.Bb.appendChild(d), this.translate(e.x, e.y));
      this.nc();
    }
  }
};
b.ab = function () {
  var a = 0,
    c = 0,
    d = this.Qp ? this.u.Ge.uc() : null,
    e = this.Pa();
  if (e) {
    do {
      var f = g.g.tf(e);
      a += f.x;
      c += f.y;
      this.Qp &&
        this.u.Ge.Kg.firstChild == e &&
        ((f = this.u.Ge.ew()), (a += f.x), (c += f.y));
      e = e.parentNode;
    } while (e && e != this.u.Bb && e != d);
  }
  return new g.g.T(a, c);
};
b.moveBy = function (a, c) {
  if (this.ah) throw Error("Block has parent.");
  var d = g.h.isEnabled();
  if (d) var e = new g.h.kn(this);
  var f = this.ab();
  this.translate(f.x + a, f.y + c);
  ab(this, a, c);
  d && (e.hl(), g.h.Ha(e));
  Ha(this.u);
};
b.translate = function (a, c) {
  this.Pa().setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.moveTo = function (a) {
  var c = this.ab();
  this.moveBy(a.x - c.x, a.y - c.y);
};
b.Yw = function (a) {
  this.Qp
    ? this.u.Ge.ol(a.x, a.y)
    : ((this.P.Jp = "translate(" + a.x + "," + a.y + ")"),
      this.P.setAttribute("transform", this.P.Jp + this.P.xp));
};
function gc(a) {
  if (a.u && !a.u.Jc() && !a.getParent() && !a.Qb) {
    var c = a.u.uf;
    if (c && c.jL) {
      var d = c.gy,
        e = d / 2,
        f = a.ab();
      c = Math.round((f.x - e) / d) * d + e - f.x;
      d = Math.round((f.y - e) / d) * d + e - f.y;
      c = Math.round(c);
      d = Math.round(d);
      (0 == c && 0 == d) || a.moveBy(c, d);
    }
  }
}
function vc(a) {
  var c = a.ab(),
    d = F(a);
  if (a.L) {
    a = c.x - d.width;
    var e = c.x;
  } else (a = c.x), (e = c.x + d.width);
  return new g.g.Rect(c.y, c.y + d.height, a, e);
}
b.Ro = function () {
  this.Rb.jm = this.u.Mb.la();
  for (var a = 0, c; (c = this.V[a]); a++) c.Ro();
};
b.Fj = function (a) {
  this.lk != a &&
    (g.wb.v.Fj.call(this, a), a ? this.pa && this.Ia() : wc(this));
};
function wc(a) {
  for (var c = a.isCollapsed(), d = 0, e; (e = a.V[d]); d++)
    e.name != g.me.mn && e.Jb(!c);
  if (c) {
    e = Va(a);
    for (d = 0; (c = e[d]); d++) c.Jb(!1);
    d = a.toString(g.BE);
    (e = x(a, g.me.wt))
      ? e.setValue(d)
      : ((e = z(a, g.me.mn) || N(a, g.me.mn)), L(e, new g.wd(d), g.me.wt));
  } else a.Ab(g.me.mn);
}
b.uj = function (a) {
  var c = this.u && this.u.Wh(a);
  if (c) {
    if (c.Ck)
      throw Error(
        "Tried to call gesture.handleBlockStart, but the gesture had already been started."
      );
    Ib(c, this);
    c.zf = a;
  }
};
b.showHelp = function () {
  var a = "function" == typeof this.Pb ? this.Pb() : this.Pb;
  a && window.open(a);
};
b.vp = function (a) {
  if (this.u.options.readOnly || !this.contextMenu) var c = null;
  else (c = ic(g.Ua.Td.kc, { block: this })), this.Qh && this.Qh(c);
  c && c.length && (g.Za.show(a, c, this.L), (g.Za.nr = this));
};
function ab(a, c, d) {
  if (a.pa) {
    for (var e = a.cg(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
    e = Va(a);
    for (f = 0; f < e.length; f++) xc(e[f]);
    for (f = 0; f < a.Lh.length; f++) ab(a.Lh[f], c, d);
  }
}
b.Gj = function (a) {
  if (a) {
    var c = this.Pa();
    c.Jp = "";
    c.xp = "";
    g.qm = g.qm.concat(this.cg(!0));
    g.g.o.Ga(this.P, "blocklyDragging");
  } else (g.qm = []), g.g.o.jc(this.P, "blocklyDragging");
  for (c = 0; c < this.Lh.length; c++) this.Lh[c].Gj(a);
};
b.Ps = function (a) {
  g.wb.v.Ps.call(this, a);
  Ta(this.Rb, "blocklyDraggable", a);
};
b.Ux = function (a) {
  g.wb.v.Ux.call(this, a);
  a = Va(this);
  for (var c = 0; c < a.length; c++) a[c].Bi();
};
b.Xx = function (a) {
  g.wb.v.Xx.call(this, a);
  this.nc();
};
b.BD = function (a) {
  this.Em != a &&
    (this.Em = a) &&
    (this.bd(this.u.Mb.la().Nt), Ta(this.Rb, "blocklyInsertionMarker", !0));
};
b.Pa = function () {
  return this.P;
};
b.I = function (a, c) {
  if (this.u) {
    g.K.I();
    g.K.sy(this.Rb.dc);
    g.g.o.Ap();
    var d = this.u;
    g.selected == this && (xb(this), hc(this.u));
    g.Za.nr == this && g.Za.Ja();
    this.u.zb && g.navigation.FJ(this);
    c && this.pa && (y(this, a), g.Eb.eI(this));
    this.pa = !1;
    if (this.Ae) {
      for (var e in this.Ae) clearTimeout(this.Ae[e]);
      this.Ae = null;
    }
    c = Va(this);
    for (e = 0; e < c.length; e++) c[e].I();
    g.wb.v.I.call(this, !!a);
    g.g.o.removeNode(this.P);
    Ha(d);
    this.P = null;
    g.g.o.Bp();
  }
};
b.nc = function () {
  this.Rb.nc(this);
  for (var a = Va(this), c = 0; c < a.length; c++) a[c].nc();
  for (a = 0; (c = this.V[a]); a++)
    for (var d = 0, e; (e = c.kb[d]); d++) e.nc();
};
function Fa(a) {
  var c = Ca(a, !1);
  a.nc();
  if (!a.isCollapsed()) {
    a = 0;
    for (var d; (d = c[a]); a++) d.pa && Fa(d);
  }
}
b.AI = function () {
  return this.lf;
};
b.fh = function (a) {
  if (!g.Comment) throw Error("Missing require for Blockly.Comment");
  this.Ie.text != a &&
    (g.wb.v.fh.call(this, a),
    (a = null != a),
    !!this.lf == a
      ? ((a = this.lf),
        a.ml
          ? (a.ml.value = a.pd.text)
          : a.dl && (a.dl.firstChild.textContent = a.pd.text))
      : (a
          ? (this.Sn = this.lf = new g.Comment(this))
          : (this.lf.I(), (this.Sn = this.lf = null)),
        this.pa && (this.Ia(), this.$b())));
};
b.Um = function (a, c) {
  if (!g.Kn) throw Error("Missing require for Blockly.Warning");
  this.Ae || (this.Ae = Object.create(null));
  var d = c || "";
  if (d) this.Ae[d] && (clearTimeout(this.Ae[d]), delete this.Ae[d]);
  else for (var e in this.Ae) clearTimeout(this.Ae[e]), delete this.Ae[e];
  if (this.u.Jc()) {
    var f = this;
    this.Ae[d] = setTimeout(function () {
      f.u && (delete f.Ae[d], f.Um(a, d));
    }, 100);
  } else {
    this.Qb && (a = null);
    c = !1;
    if ("string" == typeof a) {
      e = Yb(this);
      for (var h = null; e; ) e.isCollapsed() && (h = e), (e = Yb(e));
      h && h.Um(g.i.COLLAPSED_WARNINGS_WARNING, g.wb.AE);
      this.Ze || ((this.Ze = new g.Kn(this)), (c = !0));
      yc(this.Ze, a, d);
    } else
      this.Ze && !d
        ? (this.Ze.I(), (c = !0))
        : this.Ze &&
          ((c = this.Ze.Ad()),
          yc(this.Ze, "", d),
          (e = this.Ze.Ad()) || this.Ze.I(),
          (c = c != e));
    c && this.pa && (this.Ia(), this.$b());
  }
};
b.Hj = function (a) {
  this.qd && this.qd !== a && this.qd.I();
  a && ((a.U = this), (this.qd = a), uc(a));
  this.pa && (this.Ia(), this.$b());
};
b.je = function (a) {
  this.isEnabled() != a &&
    (g.wb.v.je.call(this, a), this.pa && !$b(this) && Fa(this));
};
b.ri = function (a) {
  this.pa && this.Rb.WD(a);
};
b.Mq = function () {
  Ta(this.Rb, "blocklySelected", !0);
};
b.jp = function () {
  Ta(this.Rb, "blocklySelected", !1);
};
b.sp = function (a) {
  Ta(this.Rb, "blocklyDraggingDelete", a);
};
b.Xv = function () {
  return this.style.Mh;
};
b.bd = function (a) {
  g.wb.v.bd.call(this, a);
  a = zc(this.u.Mb.la(), this.ld);
  this.Rb.cc(a.style);
  this.style = a.style;
  this.kl = a.name;
  this.nc();
};
b.cc = function (a) {
  var c = tc(this.u.Mb.la(), a);
  this.kl = a;
  if (c)
    (this.Tg = c.Tg),
      this.Rb.cc(c),
      (this.ld = c.Mh),
      (this.style = c),
      this.nc();
  else throw Error("Invalid style name: " + a);
};
function bb(a) {
  do {
    var c = a.Pa(),
      d = c.parentNode,
      e = d.childNodes;
    e[e.length - 1] !== c && d.appendChild(c);
    a = a.getParent();
  } while (a);
}
b.We = function (a, c) {
  g.wb.v.We.call(this, a, c);
  this.pa && (this.Ia(), this.$b());
};
b.Ve = function (a, c) {
  g.wb.v.Ve.call(this, a, c);
  this.pa && (this.Ia(), this.$b());
};
b.ke = function (a, c) {
  g.wb.v.ke.call(this, a, c);
  this.pa && (this.Ia(), this.$b());
};
b.cd = function (a) {
  g.wb.v.cd.call(this, a);
  this.pa && (this.Ia(), this.$b());
};
b.Ab = function (a, c) {
  a = g.wb.v.Ab.call(this, a, c);
  this.pa && (this.Ia(), this.$b());
  return a;
};
b.Zw = function (a, c) {
  g.wb.v.Zw.call(this, a, c);
  this.pa && (this.Ia(), this.$b());
};
b.On = function (a, c) {
  a = g.wb.v.On.call(this, a, c);
  this.pa && (this.Ia(), this.$b());
  return a;
};
function Ea(a, c) {
  a.ba && Wb(a.ba, c);
  a.O && Wb(a.O, c);
  if (a.Z) {
    Wb(a.Z, c);
    var d = a.Z.sa();
    d && Ea(d, c);
  }
  if (!a.lk)
    for (d = 0; d < a.V.length; d++) {
      var e = a.V[d].connection;
      e && (Wb(e, c), (e = e.sa()) && Ea(e, c));
    }
}
b.cg = function (a) {
  var c = [];
  if (a || this.pa)
    if (
      (this.O && c.push(this.O),
      this.ba && c.push(this.ba),
      this.Z && c.push(this.Z),
      a || !this.lk)
    ) {
      a = 0;
      for (var d; (d = this.V[a]); a++) d.connection && c.push(d.connection);
    }
  return c;
};
b.Zr = function () {
  return g.wb.v.Zr.call(this);
};
b.$v = function (a, c) {
  return g.wb.v.$v.call(this, a, c);
};
b.Qo = function (a) {
  return new g.yc(this, a);
};
b.$b = function () {
  if (this.u && !this.u.Jc()) {
    var a = this.ce();
    if (!a.Qb)
      for (var c = this.cg(!1), d = 0, e; (e = c[d]); d++) {
        e.isConnected() && C(e) && e.sa().$b();
        for (var f = e.OC(g.Rd), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            (k.Y().ce() != a && (C(e) ? Ab(k, e) : Ab(e, k)));
      }
  }
};
function cb(a) {
  var c = g.h.uc();
  setTimeout(function () {
    g.h.ea(c);
    gc(a);
    g.h.ea(!1);
  }, g.Yp / 2);
  setTimeout(function () {
    g.h.ea(c);
    a.$b();
    g.h.ea(!1);
  }, g.Yp);
}
function Sa(a, c, d) {
  (c.type != g.Cb && c.type != g.ob) || a.moveBy(d.x - c.x, d.y - c.y);
}
b.getParent = function () {
  return g.wb.v.getParent.call(this);
};
b.ce = function () {
  return g.wb.v.ce.call(this);
};
b.Ia = function (a) {
  if (!this.Mx) {
    this.Mx = !0;
    try {
      this.pa = !0;
      g.g.o.Ap();
      this.isCollapsed() && wc(this);
      this.u.Mb.Ia(this);
      var c = this.ab();
      this.ba && lc(this.ba, c);
      this.O && lc(this.O, c);
      for (var d = 0; d < this.V.length; d++) {
        var e = this.V[d].connection;
        e && (lc(e, c), e.isConnected() && nc(e));
      }
      this.Z && (lc(this.Z, c), this.Z.isConnected() && nc(this.Z));
      if (!1 !== a) {
        var f = this.getParent();
        f ? f.Ia(!0) : Ha(this.u);
      }
      g.g.o.Bp();
      this.vy();
    } finally {
      this.Mx = !1;
    }
  }
};
b.vy = function () {
  this.u.zb && this.Rb.bo && this.u.Ib().draw();
  this.u.zb && this.Rb.Rw && this.u.$d(g.navigation.tn).draw();
};
b.pi = function (a) {
  this.Rb.pi(a);
};
b.si = function (a) {
  this.Rb.si(a);
};
function F(a) {
  var c = a.height,
    d = a.width,
    e = t(a);
  e &&
    ((e = F(e)),
    (a = a.u.Mb.la().Xt),
    (c += e.height - a),
    (d = Math.max(d, e.width)));
  return { height: c, width: d };
}
g.m.Pp = !1;
g.m.register = function (a, c) {
  g.C.register(g.C.aa.RENDERER, a, c);
};
g.m.unregister = function (a) {
  g.C.unregister(g.C.aa.RENDERER, a);
};
g.m.cP = function () {
  g.m.Pp = !0;
};
g.m.dP = function () {
  g.m.Pp = !1;
};
g.m.R = function (a, c, d) {
  a = new (g.C.wo(g.C.aa.RENDERER, a))(a);
  a.R(c, d);
  return a;
};
g.Bl = function (a) {
  this.tc = [];
  this.YA = a;
};
function Ac(a, c, d) {
  if (!a.tc.length) return -1;
  var e = kc(a, d);
  if (e >= a.tc.length) return -1;
  d = c.y;
  for (var f = e; 0 <= f && a.tc[f].y == d; ) {
    if (a.tc[f] == c) return f;
    f--;
  }
  for (; e < a.tc.length && a.tc[e].y == d; ) {
    if (a.tc[e] == c) return e;
    e++;
  }
  return -1;
}
function kc(a, c) {
  if (!a.tc.length) return 0;
  for (var d = 0, e = a.tc.length; d < e; ) {
    var f = Math.floor((d + e) / 2);
    if (a.tc[f].y < c) d = f + 1;
    else if (a.tc[f].y > c) e = f;
    else {
      d = f;
      break;
    }
  }
  return d;
}
function jc(a, c, d) {
  c = Ac(a, c, d);
  if (-1 == c) throw Error("Unable to find connection in connectionDB.");
  a.tc.splice(c, 1);
}
function oc(a, c, d) {
  function e(n) {
    var p = h - f[n].x,
      r = k - f[n].y;
    Math.sqrt(p * p + r * r) <= d && m.push(f[n]);
    return r < d;
  }
  var f = a.tc,
    h = c.x,
    k = c.y;
  a = 0;
  for (var l = (c = f.length - 2); a < l; )
    f[l].y < k ? (a = l) : (c = l), (l = Math.floor((a + c) / 2));
  var m = [];
  c = a = l;
  if (f.length) {
    for (; 0 <= a && e(a); ) a--;
    do c++;
    while (c < f.length && e(c));
  }
  return m;
}
g.Bl.R = function (a) {
  var c = [];
  c[g.ob] = new g.Bl(a);
  c[g.Pf] = new g.Bl(a);
  c[g.Cb] = new g.Bl(a);
  c[g.Qf] = new g.Bl(a);
  return c;
};
g.h.Ch = function (a, c) {
  g.h.Ch.v.constructor.call(this, c);
  this.OD = a;
};
g.g.object.X(g.h.Ch, g.h.Fe);
g.h.Ch.prototype.type = g.h.fA;
g.h.Ch.prototype.ya = function () {
  var a = g.h.Ch.v.ya.call(this);
  a.themeName = this.OD;
  return a;
};
g.h.Ch.prototype.ka = function (a) {
  g.h.Ch.v.ka.call(this, a);
  this.OD = a.themeName;
};
g.C.register(g.C.aa.fc, g.h.fA, g.h.Ch);
g.h.Ih = function (a, c, d, e) {
  g.h.Ih.v.constructor.call(this, e);
  this.ec = a;
  this.Yb = c;
  this.scale = d;
};
g.g.object.X(g.h.Ih, g.h.Fe);
g.h.Ih.prototype.type = g.h.pA;
g.h.Ih.prototype.ya = function () {
  var a = g.h.Ih.v.ya.call(this);
  a.viewTop = this.ec;
  a.viewLeft = this.Yb;
  a.scale = this.scale;
  return a;
};
g.h.Ih.prototype.ka = function (a) {
  g.h.Ih.v.ka.call(this, a);
  this.ec = a.viewTop;
  this.Yb = a.viewLeft;
  this.scale = a.scale;
};
g.C.register(g.C.aa.fc, g.h.pA, g.h.Ih);
g.Ez = function (a) {
  this.Ph = this.qf = null;
  this.Wk = {};
  this.s = a;
};
function Bc(a, c) {
  var d = a.Wk[c];
  if (d) d.I(), delete a.Wk[c];
  else
    throw Error(
      "Marker with id " +
        c +
        " does not exist. Can only unregistermarkers that exist."
    );
}
b = g.Ez.prototype;
b.Ib = function () {
  return this.qf;
};
b.$d = function (a) {
  return this.Wk[a];
};
function Cc(a, c) {
  a.qf && a.qf.se && a.qf.se.I();
  a.qf = c;
  a.qf &&
    ((c = a.qf),
    (c = new g.m.wh(a.s, a.s.Mb.la(), c)),
    (a.qf.se = c),
    a.pi(a.qf.se.$a()));
}
b.pi = function (a) {
  a ? (this.s.Bb.appendChild(a), (this.Ph = a)) : (this.Ph = null);
};
b.si = function (a) {
  a
    ? this.s.Bb &&
      (this.Ph ? this.s.Bb.insertBefore(a, this.Ph) : this.s.Bb.appendChild(a))
    : (this.ji = null);
};
b.I = function () {
  for (var a = Object.keys(this.Wk), c = 0, d; (d = a[c]); c++) Bc(this, d);
  this.Wk = null;
  this.qf && (this.qf.I(), (this.qf = null));
};
g.jA = function (a, c) {
  this.s = a;
  this.xi = c;
  this.Dp = [];
  this.Eg = Object.create(null);
};
b = g.jA.prototype;
b.Rg = function () {
  return this.xi;
};
b.up = function (a) {
  var c = this.xi;
  this.xi = a;
  if ((a = ca(this.s))) c && g.g.o.jc(a, c.ag()), g.g.o.Ga(a, this.xi.ag());
  for (c = 0; (a = this.Dp[c]); c++) a.Qm();
  c = 0;
  a = Object.keys(this.Eg);
  for (var d; (d = a[c]); c++)
    for (var e = 0, f; (f = this.Eg[d][e]); e++)
      f.element.style[f.propertyName] = (this.xi && za(this.xi, d)) || "";
  g.Bc();
};
b.subscribe = function (a, c, d) {
  this.Eg[c] || (this.Eg[c] = []);
  this.Eg[c].push({ element: a, propertyName: d });
  a.style[d] = (this.xi && za(this.xi, c)) || "";
};
b.unsubscribe = function (a) {
  if (a)
    for (var c = Object.keys(this.Eg), d = 0, e; (e = c[d]); d++) {
      for (var f = this.Eg[e], h = f.length - 1; 0 <= h; h--)
        f[h].element === a && f.splice(h, 1);
      this.Eg[e].length || delete this.Eg[e];
    }
};
b.I = function () {
  this.Eg = this.Dp = this.xi = this.Bf = null;
};
g.pe = function (a, c) {
  g.pe.v.constructor.call(this, a, c);
  this.Vr = !1;
  this.He = Object.create(null);
  this.FD = this.ep = 0;
  this.wC = this.mx = null;
};
g.g.object.X(g.pe, g.rg);
g.pe.jH = 5;
g.pe.kH = 6;
b = g.pe.prototype;
b.zv = function (a) {
  this.wC = this.wc.options.vb && this.wc.options.vb.Ax;
  g.pe.v.zv.call(this, a);
  !this.Tr && g.Touch.Yr(a) && Dc(this, a);
};
b.dm = function (a) {
  this.mx = g.wa(document, "mousedown", null, this.WI.bind(this), !0);
  this.xs = g.wa(document, "mousemove", null, this.wm.bind(this), !0);
  this.ys = g.wa(document, "mouseup", null, this.Nr.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
b.WI = function (a) {
  !this.Jc() && g.Touch.Yr(a) && (Dc(this, a), this.Vr && g.oj());
};
b.wm = function (a) {
  if (this.Jc()) g.Touch.by(a) && g.pe.v.wm.call(this, a);
  else if (this.Vr) {
    if (g.Touch.Yr(a)) {
      this.He[g.Touch.Mr(a)] = Ec(this, a);
      var c = Object.keys(this.He);
      if (this.wC && 2 === c.length) {
        c = Object.keys(this.He);
        c = g.g.T.io(this.He[c[0]], this.He[c[1]]) / this.FD;
        if (0 < this.ep && Infinity > this.ep) {
          var d = c - this.ep;
          d = 0 < d ? d * g.pe.jH : d * g.pe.kH;
          var e = this.wc,
            f = g.g.Wo(a, u(e), sa(e));
          e.zoom(f.x, f.y, d);
        }
        this.ep = c;
        a.preventDefault();
      } else g.pe.v.wm.call(this, a);
    }
    g.oj();
  } else g.pe.v.wm.call(this, a);
};
b.Nr = function (a) {
  if (g.Touch.Yr(a) && !this.Jc()) {
    var c = g.Touch.Mr(a);
    this.He[c] && delete this.He[c];
    2 > Object.keys(this.He).length &&
      ((this.He = Object.create(null)), (this.ep = 0));
  }
  !this.Vr || this.Jc()
    ? g.Touch.by(a) && g.pe.v.Nr.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.I());
};
b.I = function () {
  g.pe.v.I.call(this);
  this.mx && g.Ma(this.mx);
};
function Dc(a, c) {
  a.He[g.Touch.Mr(c)] = Ec(a, c);
  var d = Object.keys(a.He);
  2 == d.length &&
    ((a.FD = g.g.T.io(a.He[d[0]], a.He[d[1]])),
    (a.Vr = !0),
    c.preventDefault());
}
function Ec(a, c) {
  return a.wc
    ? new g.g.T(
        c.pageX ? c.pageX : c.changedTouches[0].pageX,
        c.pageY ? c.pageY : c.changedTouches[0].pageY
      )
    : null;
}
g.wA = function (a) {
  this.wx = a;
  this.En = Object.create(null);
};
b = g.wA.prototype;
b.Cw = null;
b.I = function () {
  this.En = this.wx = null;
};
b.load = function (a, c) {
  if (a.length) {
    try {
      var d = new g.g.global.Audio();
    } catch (l) {
      return;
    }
    for (var e, f = 0; f < a.length; f++) {
      var h = a[f],
        k = h.match(/\.(\w+)$/);
      if (k && d.canPlayType("audio/" + k[1])) {
        e = new g.g.global.Audio(h);
        break;
      }
    }
    e && e.play && (this.En[c] = e);
  }
};
b.preload = function () {
  for (var a in this.En) {
    var c = this.En[a];
    c.volume = 0.01;
    var d = c.play();
    void 0 !== d ? d.then(c.pause).catch(function () {}) : c.pause();
    if (g.g.userAgent.sh || g.g.userAgent.Ot) break;
  }
};
b.play = function (a, c) {
  var d = this.En[a];
  d
    ? ((a = new Date()),
      (null != this.Cw && a - this.Cw < g.LG) ||
        ((this.Cw = a),
        (d = g.g.userAgent.sh || g.g.userAgent.Oj ? d : d.cloneNode()),
        (d.volume = void 0 === c ? 1 : c),
        d.play()))
    : this.wx && this.wx.Si.play(a, c);
};
g.yb = function (a, c, d) {
  g.yb.v.constructor.call(this, a);
  this.Zc = a.Zc || g.yb.LI;
  this.tp = a.tp || g.yb.fL;
  this.lr = g.Bl.R(this.Vn);
  c && (this.Ge = c);
  d && (this.vl = d);
  this.ct = !!this.vl && g.g.Lk();
  this.Si = new g.wA(a.vc);
  this.uf = this.options.iw ? new g.Wj(this.options.iw, a.eC) : null;
  this.Qe = new g.Ez(this);
  this.oy = {};
  this.Rv = {};
  g.$ && g.$.xk && Fc(this, g.zc, g.$.xk);
  g.qA && g.qA.xk && Fc(this, g.dH, g.qA.xk);
  g.Aa && g.Aa.xk && (Fc(this, g.Dn, g.Aa.xk), H(this, g.Aa.IJ));
  this.Dc = this.options.vc
    ? this.options.vc.Dc
    : new g.jA(this, this.options.wL || g.Dh.Ei);
  this.Dc.Dp.push(this);
  this.Mb = g.m.R(this.options.kp || "geras", this.Rg(), this.options.lp);
  this.Su = null;
  this.zb = !1;
  this.$s = [];
};
g.g.object.X(g.yb, g.Vb);
b = g.yb.prototype;
b.Ms = null;
b.pa = !0;
b.gi = !0;
b.eg = !1;
b.Mo = !1;
b.Qx = !0;
b.scrollX = 0;
b.scrollY = 0;
b.xB = null;
b.scale = 1;
b.ZC = 1;
b.$C = 0;
b.WC = 0;
b.ud = null;
b.Sa = null;
b.na = null;
b.La = null;
b.zd = null;
b.Ge = null;
b.vl = null;
b.ct = !1;
b.Sr = !1;
b.sw = null;
b.DC = null;
b.fb = null;
b.tC = null;
b.tw = !0;
b.pi = function (a) {
  this.Qe.pi(a);
};
b.si = function (a) {
  this.Qe.si(a);
};
b.$d = function (a) {
  return this.Qe ? this.Qe.$d(a) : null;
};
b.Ib = function () {
  return this.Qe ? this.Qe.Ib() : null;
};
b.Rg = function () {
  return this.Dc.Rg();
};
b.up = function (a) {
  a || (a = g.Dh.Ei);
  this.Dc.up(a);
};
b.Qm = function () {
  this.P && this.Mb.Hx(this.P, this.Rg());
  Gc(
    G(this).filter(function (c) {
      return void 0 !== c.kl;
    })
  );
  Hc(this);
  this.La && this.La.Qm();
  this.isVisible() && this.Jb(!0);
  var a = new g.h.Ch(this.Rg().name, this.id);
  g.h.Ha(a);
};
function Gc(a) {
  for (var c = 0, d; (d = a[c]); c++) {
    var e = d.kl;
    if (e && (d.cc(e), d.qd)) {
      var f = d.qd.s;
      if (f && G(f)) {
        var h = G(f);
        for (d = 0; d < h.length; d++) (e = h[d]), e.cc(e.kl);
        if ((d = f.hc()))
          for (f = G(d.s), d = 0; d < f.length; d++) (e = f[d]), e.cc(e.kl);
      }
    }
  }
}
function sa(a) {
  if (a.tw) {
    var c = u(a).getScreenCTM();
    c && ((a.tC = c.inverse()), (a.tw = !1));
  }
  return a.tC;
}
b.Mp = function () {
  this.tw = !0;
};
b.isVisible = function () {
  return this.gi;
};
function Na(a, c) {
  var d = 0,
    e = 0,
    f = 1;
  if (g.g.o.containsNode(a.Bb, c) || g.g.o.containsNode(a.jg, c)) f = a.scale;
  do {
    var h = g.g.tf(c);
    if (c == a.Bb || c == a.jg) f = 1;
    d += h.x * f;
    e += h.y * f;
    c = c.parentNode;
  } while (c && c != u(a));
  return new g.g.T(d, e);
}
function ca(a) {
  if (!a.sw)
    for (var c = a.P; c; ) {
      if (
        -1 !=
        (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
      ) {
        a.sw = c;
        break;
      }
      c = c.parentNode;
    }
  return a.sw;
}
b.$a = function (a) {
  this.P = g.g.o.M(g.g.F.xc, { class: "blocklyWorkspace" }, null);
  a &&
    ((this.td = g.g.o.M(
      g.g.F.Hc,
      { height: "100%", width: "100%", class: a },
      this.P
    )),
    "blocklyMainBackground" == a && this.uf
      ? (this.td.style.fill = "url(#" + this.uf.vm.id + ")")
      : this.Dc.subscribe(this.td, "workspaceBackgroundColour", "fill"));
  this.Bb = g.g.o.M(g.g.F.xc, { class: "blocklyBlockCanvas" }, this.P);
  this.jg = g.g.o.M(g.g.F.xc, { class: "blocklyBubbleCanvas" }, this.P);
  this.eg ||
    (g.wa(this.P, "mousedown", this, this.uj, !1, !0),
    g.wa(this.P, "wheel", this, this.dK));
  if (this.options.Eo) {
    if (!g.wu) throw Error("Missing require for Blockly.Toolbox");
    this.La = new (g.C.Hr(g.C.aa.Iq, this.options))(this);
  }
  this.uf && this.uf.update(this.scale);
  Ic(this);
  Cc(this.Qe, new g.Cl());
  a = this.Qe;
  var c = g.navigation.tn,
    d = new g.wn();
  a.Wk[c] && Bc(a, c);
  var e = new g.m.wh(a.s, a.s.Mb.la(), d);
  d.se = e;
  a.si(d.se.$a());
  a.Wk[c] = d;
  this.Mb.$a(this.P, this.Rg());
  return this.P;
};
b.I = function () {
  this.pa = !1;
  this.zd && this.zd.cancel();
  this.P && (g.g.o.removeNode(this.P), (this.P = null));
  this.jg = this.Bb = null;
  this.La && (this.La.I(), (this.La = null));
  this.na && (this.na.I(), (this.na = null));
  this.ud && (this.ud.I(), (this.ud = null));
  this.Sa && (this.Sa.I(), (this.Sa = null));
  this.xl && (this.xl.I(), (this.xl = null));
  this.Si && (this.Si.I(), (this.Si = null));
  this.uf && (this.uf.I(), (this.uf = null));
  this.Mb.I();
  this.Qe && (this.Qe.I(), (this.Qe = null));
  g.yb.v.I.call(this);
  if (this.Dc) {
    var a = this.Dc,
      c = a.Dp.indexOf(this);
    if (0 > c)
      throw Error(
        "Cannot unsubscribe a workspace that hasn't been subscribed."
      );
    a.Dp.splice(c, 1);
    this.Dc.unsubscribe(this.td);
    this.options.vc || (this.Dc.I(), (this.Dc = null));
  }
  this.Rv = this.oy = this.lr = null;
  this.options.vc ||
    ((a = u(this)) && a.parentNode && g.g.o.removeNode(a.parentNode));
  this.Ms && (g.Ma(this.Ms), (this.Ms = null));
};
b.sj = function (a, c) {
  return new g.wb(this, a, c);
};
function Jc(a) {
  if (!g.kd) throw Error("Missing require for Blockly.Trashcan");
  a.ud = new g.kd(a);
  var c = a.ud.$a();
  a.P.insertBefore(c, a.Bb);
}
function Kc(a) {
  if (!g.Du) throw Error("Missing require for Blockly.ZoomControls");
  a.xl = new g.Du(a);
  var c = a.xl.$a();
  a.P.appendChild(c);
}
function Lc(a, c) {
  var d = new g.Nd({
    parentWorkspace: a,
    rtl: a.L,
    oneBasedIndex: a.options.ki,
    horizontalLayout: a.Bd,
    renderer: a.options.kp,
    rendererOverrides: a.options.lp,
  });
  d.Ka = a.options.Ka;
  if (a.Bd) {
    if (!g.Kt) throw Error("Missing require for Blockly.HorizontalFlyout");
    a.na = new g.Kt(d);
  } else {
    if (!g.Hh) throw Error("Missing require for Blockly.VerticalFlyout");
    a.na = new g.Hh(d);
  }
  a.na.cm = !1;
  a.na.s.Jb(!0);
  return a.na.$a(c);
}
b.hc = function (a) {
  return this.na || a ? this.na : this.La ? this.La.hc() : null;
};
function Ha(a) {
  a.Qx && a.pa && (a.Sa && a.Sa.resize(), a.Mp());
}
b.resize = function () {
  this.La && this.La.position();
  this.na && this.na.position();
  this.ud && this.ud.position();
  this.xl && this.xl.position();
  this.Sa && this.Sa.resize();
  this.Mp();
  Ic(this);
};
function Db(a) {
  var c = g.g.FI();
  g.g.T.sf(a.DC, c) || ((a.DC = c), a.Mp(), Ic(a));
}
function u(a) {
  if (!a.Su)
    for (var c = a.P; c; ) {
      if ("svg" == c.tagName) {
        a.Su = c;
        break;
      }
      c = c.parentNode;
    }
  return a.Su;
}
function ha(a) {
  if (g.h.isEnabled()) {
    var c = a.scale,
      d = -a.scrollY,
      e = -a.scrollX;
    (c == a.ZC && 1 > Math.abs(d - a.$C) && 1 > Math.abs(e - a.WC)) ||
      ((a.ZC = c),
      (a.$C = d),
      (a.WC = e),
      (a = new g.h.Ih(d, e, c, a.id)),
      g.h.Ha(a));
  }
}
b.translate = function (a, c) {
  if (this.ct && this.Sr) this.vl.ol(a, c);
  else {
    var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
    this.Bb.setAttribute("transform", d);
    this.jg.setAttribute("transform", d);
  }
  if (this.Ge) {
    d = this.Ge;
    var e = this.scale;
    d.Ej = e;
    d.Kg.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")"
    );
  }
  this.uf && this.uf.moveTo(a, c);
  ha(this);
};
function ua(a) {
  if (a.ct) {
    a.Sr = !1;
    var c = a.vl.ew();
    a.vl.$q(a.P);
    c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
    a.Bb.setAttribute("transform", c);
    a.jg.setAttribute("transform", c);
  }
}
function ta(a) {
  if (a.ct && !a.Sr) {
    a.Sr = !0;
    var c = a.Bb.previousSibling,
      d = parseInt(u(a).getAttribute("width"), 10),
      e = parseInt(u(a).getAttribute("height"), 10),
      f = g.g.tf(a.Bb),
      h = a.vl,
      k = a.Bb,
      l = a.jg,
      m = a.scale;
    if (h.Ob.childNodes.length) throw Error("Already dragging a block.");
    h.Fx = c;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    h.Ob.setAttribute("width", d);
    h.Ob.setAttribute("height", e);
    h.Ob.appendChild(k);
    h.Ob.appendChild(l);
    h.Ob.style.display = "block";
    a.vl.ol(f.x, f.y);
  }
}
b.Sg = function () {
  var a = this.Zc();
  return a ? a.Kb / this.scale : 0;
};
b.Jb = function (a) {
  this.gi = a;
  if (this.P)
    if (
      (this.Sa && this.Sa.jl(a),
      this.hc() && this.hc().jl(a),
      (u(this).style.display = a ? "block" : "none"),
      this.La && this.La.Jb(a),
      a)
    ) {
      a = G(this);
      for (var c = a.length - 1; 0 <= c; c--) a[c].Ro();
      this.Ia();
      this.La && this.La.position();
    } else g.Bc(!0);
};
b.Ia = function () {
  for (var a = G(this), c = a.length - 1; 0 <= c; c--) a[c].Ia(!1);
  if (this.zd) for (a = this.zd.tm(), c = 0; c < a.length; c++) a[c].Ia(!1);
  c = this.Qe;
  c.s.zb && c.Ph && c.s.Ib().draw();
};
b.Cs = function (a) {
  if (
    this.pa &&
    a.tagName &&
    !(a.getElementsByTagName("block").length >= kb(this))
  )
    if ((this.zd && this.zd.cancel(), "comment" == a.tagName.toLowerCase())) {
      g.h.disable();
      try {
        var c = g.Zl.so(a),
          d = parseInt(a.getAttribute("x"), 10),
          e = parseInt(a.getAttribute("y"), 10);
        isNaN(d) || isNaN(e) || (this.L && (d = -d), c.moveBy(d + 50, e + 50));
      } finally {
        g.h.enable();
      }
      g.h.isEnabled() && g.xA.BO(c);
      c.select();
    } else
      a: {
        g.h.disable();
        try {
          var f = g.W.rk(a, this),
            h = this.$d(g.navigation.tn).lb;
          if (this.zb && h && h.Bm) {
            g.navigation.rC(f, h.Fa);
            break a;
          }
          var k = parseInt(a.getAttribute("x"), 10),
            l = parseInt(a.getAttribute("y"), 10);
          if (!isNaN(k) && !isNaN(l)) {
            this.L && (k = -k);
            do {
              a = !1;
              var m = G(this);
              c = 0;
              for (var n; (n = m[c]); c++) {
                var p = n.ab();
                if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) {
                  a = !0;
                  break;
                }
              }
              if (!a) {
                var r = f.cg(!1);
                c = 0;
                for (var w; (w = r[c]); c++)
                  if (w.closest(g.Rd, new g.g.T(k, l)).connection) {
                    a = !0;
                    break;
                  }
              }
              a && ((k = this.L ? k - g.Rd : k + g.Rd), (l += 2 * g.Rd));
            } while (a);
            f.moveBy(k, l);
          }
        } finally {
          g.h.enable();
        }
        g.h.isEnabled() && !f.Qa && g.h.Ha(new g.h.$p(f));
        f.select();
      }
};
function Hc(a) {
  (a = a.eg ? a.fb : a) &&
    !a.zd &&
    a.La &&
    a.La.hc() &&
    ((a = a.La), a.sb && a.sb.Xg() && a.sb.$i.length && a.na.show(a.sb.$i));
}
b.Cj = function (a, c) {
  g.yb.v.Cj.call(this, a, c);
  Hc(this);
};
b.Th = function (a) {
  g.yb.v.Th.call(this, a);
  Hc(this);
};
b.nf = function (a, c, d) {
  a = g.yb.v.nf.call(this, a, c, d);
  Hc(this);
  return a;
};
function Ic(a) {
  a.nB = a.ud && a.P.parentNode ? a.ud.rm() : null;
  a.mB = a.na
    ? a.na.rm()
    : a.La && "function" == typeof a.La.rm
    ? a.La.rm()
    : null;
}
function Ya(a, c) {
  return a.nB && a.nB.contains(c.clientX, c.clientY)
    ? g.Ct
    : a.mB && a.mB.contains(c.clientX, c.clientY)
    ? g.Wy
    : g.Vy;
}
b.uj = function (a) {
  var c = this.Wh(a);
  c && Gb(c, a, this);
};
b.iy = function (a, c) {
  a = g.g.Wo(a, u(this), sa(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.xB = g.g.T.ho(c, a);
};
b.Jc = function () {
  return null != this.zd && this.zd.Jc();
};
function Mc(a) {
  return (
    (a.options.ad && a.options.ad.scrollbars) ||
    (a.options.ad && a.options.ad.Nj) ||
    (a.options.ad && a.options.ad.Zi) ||
    (a.options.vb && a.options.vb.controls) ||
    (a.options.vb && a.options.vb.Nj) ||
    (a.options.vb && a.options.vb.Ax)
  );
}
b.Kc = function () {
  return (
    (this.options.ad && this.options.ad.scrollbars) ||
    (this.options.ad && this.options.ad.Nj) ||
    (this.options.ad && this.options.ad.Zi) ||
    (this.options.vb && this.options.vb.Nj) ||
    (this.options.vb && this.options.vb.Ax)
  );
};
b.dK = function (a) {
  if (g.rg.Hk()) a.preventDefault(), a.stopPropagation();
  else {
    var c = this.options.vb && this.options.vb.Nj,
      d = this.options.ad && this.options.ad.Nj;
    if (c || d) {
      var e = g.g.WB(a);
      !c || (!a.ctrlKey && d)
        ? ((c = this.scrollX - e.x),
          (d = this.scrollY - e.y),
          a.shiftKey && !e.x && ((c = this.scrollX - e.y), (d = this.scrollY)),
          this.scroll(c, d))
        : ((e = -e.y / 50),
          (c = g.g.Wo(a, u(this), sa(this))),
          this.zoom(c.x, c.y, e));
      a.preventDefault();
    }
  }
};
function Da(a) {
  a = [].concat(a.$s);
  if (!a.length) return new g.g.Rect(0, 0, 0, 0);
  for (var c = vc(a[0]), d = 1; d < a.length; d++) {
    var e = vc(a[d]);
    e.top < c.top && (c.top = e.top);
    e.bottom > c.bottom && (c.bottom = e.bottom);
    e.left < c.left && (c.left = e.left);
    e.right > c.right && (c.right = e.right);
  }
  return c;
}
b.vp = function (a) {
  if (!this.options.readOnly && !this.eg) {
    var c = ic(g.Ua.Td.Wc, { u: this });
    this.JH && this.JH(c, a);
    g.Za.show(a, c, this.L);
  }
};
function ra(a) {
  if (a.options.vc) ra(a.options.vc);
  else {
    g.Po = a;
    document.activeElement &&
      document.activeElement.blur &&
      document.activeElement.blur();
    try {
      u(a).focus({ preventScroll: !0 });
    } catch (c) {
      try {
        u(a).parentNode.setActive();
      } catch (d) {
        u(a).parentNode.focus({ preventScroll: !0 });
      }
    }
  }
}
b.zoom = function (a, c, d) {
  d = Math.pow(this.options.vb.ZK, d);
  var e = this.scale * d;
  if (this.scale != e) {
    e > this.options.vb.So
      ? (d = this.options.vb.So / this.scale)
      : e < this.options.vb.Uo && (d = this.options.vb.Uo / this.scale);
    var f = this.Bb.getCTM(),
      h = u(this).createSVGPoint();
    h.x = a;
    h.y = c;
    h = h.matrixTransform(f.inverse());
    a = h.x;
    c = h.y;
    f = f.translate(a * (1 - d), c * (1 - d)).scale(d);
    this.scrollX = f.e;
    this.scrollY = f.f;
    this.setScale(e);
  }
};
b.mI = function () {
  g.g.o.jc(this.Bb, "blocklyCanvasTransitioning");
  g.g.o.jc(this.jg, "blocklyCanvasTransitioning");
};
b.setScale = function (a) {
  this.options.vb.So && a > this.options.vb.So
    ? (a = this.options.vb.So)
    : this.options.vb.Uo && a < this.options.vb.Uo && (a = this.options.vb.Uo);
  this.scale = a;
  g.Bc(!1);
  this.na && (this.na.Gx(), Ic(this));
  this.uf && this.uf.update(this.scale);
  a = this.Zc();
  this.scrollX -= a.Oc;
  this.scrollY -= a.Xc;
  a.Yb += a.Oc;
  a.ec += a.Xc;
  this.scroll(this.scrollX, this.scrollY);
  this.Sa &&
    (this.na
      ? (la(this.Sa.vf, a), ma(this.Sa.Jf, a))
      : (oa(this.Sa.vf, a), qa(this.Sa.Jf, a)));
};
function Nc(a) {
  return a.options.vc ? Nc(a.options.vc) : a.scale;
}
b.scroll = function (a, c) {
  g.Bc(!0);
  var d = this.Zc(),
    e = d.mf + d.md - d.Kb,
    f = d.Wd + d.Yc - d.Ub;
  a = Math.min(a, -d.md);
  c = Math.min(c, -d.Yc);
  a = Math.max(a, -e);
  c = Math.max(c, -f);
  this.scrollX = a;
  this.scrollY = c;
  this.Sa &&
    (ia(this.Sa.vf, -(a + d.md) * this.Sa.vf.ratio),
    ia(this.Sa.Jf, -(c + d.Yc) * this.Sa.Jf.ratio));
  a += d.Oc;
  c += d.Xc;
  this.translate(a, c);
};
g.yb.OB = function (a) {
  var c = 0,
    d = 0;
  a && ((c = a.Sg()), (d = a.Qc));
  return new g.g.ff(c, d);
};
g.yb.DI = function (a, c) {
  return Mc(a) ? g.yb.CI(a, c) : g.yb.LB(a);
};
g.yb.LB = function (a) {
  var c = Da(a),
    d = a.scale;
  a = c.top * d;
  var e = c.bottom * d,
    f = c.left * d;
  c = c.right * d;
  return { top: a, bottom: e, left: f, right: c, width: c - f, height: e - a };
};
g.yb.CI = function (a, c) {
  a = g.yb.LB(a);
  var d = c.width;
  c = c.height;
  var e = d / 2,
    f = c / 2,
    h = Math.min(a.left - e, a.right - d),
    k = Math.min(a.top - f, a.bottom - c);
  return {
    left: h,
    top: k,
    height: Math.max(a.bottom + f, a.top + c) - k,
    width: Math.max(a.right + e, a.left + d) - h,
  };
};
g.yb.LI = function () {
  var a = g.yb.OB(this.La),
    c = g.yb.OB(this.na),
    d = g.tL(u(this)),
    e = { height: d.height, width: d.width };
  if (this.La)
    if (this.Ka == g.gk || this.Ka == g.In) e.height -= a.height;
    else {
      if (this.Ka == g.De || this.Ka == g.Wl) e.width -= a.width;
    }
  else if (this.na)
    if (this.Ka == g.gk || this.Ka == g.In) e.height -= c.height;
    else if (this.Ka == g.De || this.Ka == g.Wl) e.width -= c.width;
  var f = g.yb.DI(this, e),
    h = 0;
  this.La && this.Ka == g.De
    ? (h = a.width)
    : this.na && this.Ka == g.De && (h = c.width);
  var k = 0;
  this.La && this.Ka == g.gk
    ? (k = a.height)
    : this.na && this.Ka == g.gk && (k = c.height);
  return {
    Wd: f.height,
    mf: f.width,
    Yc: f.top,
    md: f.left,
    Ub: e.height,
    Kb: e.width,
    ec: -this.scrollY,
    Yb: -this.scrollX,
    Xc: k,
    Oc: h,
    KD: d.height,
    LD: d.width,
    UD: a.width,
    eP: a.height,
    Ka: this.Ka,
    DO: c.width,
    CO: c.height,
  };
};
g.yb.fL = function (a) {
  var c = this.Zc();
  "number" == typeof a.x && (this.scrollX = -c.mf * a.x - c.md);
  "number" == typeof a.y && (this.scrollY = -c.Wd * a.y - c.Yc);
  this.translate(this.scrollX + c.Oc, this.scrollY + c.Xc);
};
b = g.yb.prototype;
b.Zd = function (a) {
  return g.yb.v.Zd.call(this, a);
};
b.ac = function (a) {
  return g.yb.v.ac.call(this, a);
};
b.Oq = function (a) {
  this.$s.push(a);
  g.yb.v.Oq.call(this, a);
};
b.Is = function (a) {
  g.g.Pq(this.$s, a);
  g.yb.v.Is.call(this, a);
};
b.dd = function (a) {
  var c = !this.Qx && a;
  this.Qx = a;
  c && Ha(this);
};
b.clear = function () {
  this.dd(!1);
  g.yb.v.clear.call(this);
  this.$s = [];
  this.dd(!0);
};
function Oc(a, c) {
  if ("function" != typeof c)
    throw TypeError("Button callbacks must be functions.");
  a.Rv.CREATE_VARIABLE = c;
}
function ea(a, c) {
  return (a = a.Rv[c]) ? a : null;
}
function Fc(a, c, d) {
  if ("function" != typeof d)
    throw TypeError("Toolbox category callbacks must be functions.");
  a.oy[c] = d;
}
b.Wh = function (a) {
  var c =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    d = this.zd;
  return d
    ? c && d.Ck
      ? (console.warn("Tried to start the same gesture twice."),
        d.cancel(),
        null)
      : d
    : c
    ? (this.zd = new g.pe(a, this))
    : null;
};
function hc(a) {
  a.zd && a.zd.cancel();
}
g.Jk = function (a, c) {
  g.zH();
  "string" == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a));
  if (!a || !g.g.o.containsNode(document, a))
    throw Error("Error: container is not in current document.");
  c = new g.Nd(c || {});
  var d = document.createElement("div");
  d.className = "injectionDiv";
  d.tabIndex = 0;
  g.g.va.sd(d, g.g.va.State.SF, g.i.WORKSPACE_ARIA_LABEL);
  a.appendChild(d);
  a = g.Ke(d, c);
  var e = new g.Ly(d),
    f = new g.yA(d),
    h = g.OH(a, c, e, f);
  g.fJ(h);
  g.Po = h;
  g.Ym(h);
  d.addEventListener("focusin", function () {
    g.Po = h;
  });
  return h;
};
g.Ke = function (a, c) {
  a.setAttribute("dir", "LTR");
  g.Vc.Jk(c.XI, c.xj);
  a = g.g.o.M(
    g.g.F.Pi,
    {
      xmlns: g.g.o.Fn,
      "xmlns:html": g.g.o.Xj,
      "xmlns:xlink": g.g.o.Uf,
      version: "1.1",
      class: "blocklySvg",
      tabindex: "0",
    },
    a
  );
  var d = g.g.o.M(g.g.F.Uy, {}, a);
  c.iw = g.Wj.$a(String(Math.random()).substring(2), c.eC, d);
  return a;
};
g.OH = function (a, c, d, e) {
  c.vc = null;
  var f = new g.yb(c, d, e);
  c = f.options;
  f.scale = c.vb.ID;
  a.appendChild(f.$a("blocklyMainBackground"));
  g.g.o.Ga(ca(f), f.Mb.ag());
  g.g.o.Ga(ca(f), f.Rg().ag());
  !c.Eo && c.Yg && ((d = Lc(f, g.g.F.Pi)), g.g.o.Kk(d, a));
  c.iC && Jc(f);
  c.vb && c.vb.controls && Kc(f);
  f.Dc.subscribe(a, "workspaceBackgroundColour", "background-color");
  f.translate(0, 0);
  c.readOnly ||
    f.Kc() ||
    H(f, function (h) {
      if (!f.Jc() && !f.Kc() && -1 != g.h.wE.indexOf(h.type)) {
        var k = Object.create(null),
          l = f.Zc(),
          m = f.scale;
        k.L = f.L;
        k.Yb = l.Yb / m;
        k.ec = l.ec / m;
        k.cE = (l.Yb + l.Kb) / m;
        k.bE = (l.ec + l.Ub) / m;
        Mc(f)
          ? ((l = Da(f)),
            (k.md = l.left),
            (k.Yc = l.top),
            (k.cB = l.right),
            (k.$A = l.bottom))
          : ((k.md = l.md / m),
            (k.Yc = l.Yc / m),
            (k.cB = (l.md + l.mf) / m),
            (k.$A = (l.Yc + l.Wd) / m));
        if (k.Yc < k.ec || k.$A > k.bE || k.md < k.Yb || k.cB > k.cE) {
          l = null;
          h && ((l = g.h.uc()), g.h.ea(h.group));
          switch (h.type) {
            case g.h.Vp:
            case g.h.ot:
              var n = f.Zd(h.pb);
              n && (n = n.ce());
              break;
            case g.h.eq:
            case g.h.fq:
              n = f.jr[h.Dg] || null;
          }
          if (n) {
            m = vc(n);
            m.height = m.bottom - m.top;
            m.width = m.right - m.left;
            var p = k.ec,
              r = k.bE - m.height;
            r = Math.max(p, r);
            p = g.g.Ra.Bg(p, m.top, r) - m.top;
            r = k.Yb;
            var w = k.cE - m.width;
            k.L ? (r = Math.min(w, r)) : (w = Math.max(r, w));
            n.moveBy(g.g.Ra.Bg(r, m.left, w) - m.left, p);
          }
          h &&
            (!h.group &&
              n &&
              console.warn(
                "Moved object in bounds but there was no event group. This may break undo."
              ),
            null !== l && g.h.ea(l));
        }
      }
    });
  g.Ym(f);
  g.ca.$a();
  g.H.$a();
  g.K.$a();
  return f;
};
g.fJ = function (a) {
  var c = a.options,
    d = u(a);
  g.wa(d.parentNode, "contextmenu", null, function (f) {
    g.g.Wr(f) || f.preventDefault();
  });
  d = g.wa(window, "resize", null, function () {
    g.Bc(!0);
    g.Ym(a);
  });
  a.Ms = d;
  g.Jk.sH();
  if (c.Yg) {
    d = a.La;
    var e = a.hc(!0);
    d
      ? d.R()
      : e && (e.R(a), e.show(c.Yg), "function" == typeof e.Tx && e.Tx());
  }
  d = g.Va.Sc;
  c.iC && (d = a.ud.R(d));
  c.vb && c.vb.controls && a.xl.R(d);
  c.ad && c.ad.scrollbars
    ? ((a.Sa = new g.Gn(a)), a.Sa.resize())
    : a.tp({ x: 0.5, y: 0.5 });
  c.$I && g.Jk.sJ(c.xj, a);
};
g.Jk.sH = function () {
  g.fI ||
    (g.wa(document, "scroll", null, function () {
      for (var a = g.Vb.getAll(), c = 0, d; (d = a[c]); c++) d.Mp && d.Mp();
    }),
    g.wa(document, "keydown", null, g.Yo),
    g.Ud(document, "touchend", null, g.oj),
    g.Ud(document, "touchcancel", null, g.oj),
    g.g.userAgent.sh &&
      g.wa(window, "orientationchange", document, function () {
        g.Ym(g.Og());
      }));
  g.fI = !0;
};
g.Jk.sJ = function (a, c) {
  function d() {
    for (; f.length; ) g.Ma(f.pop());
    e.preload();
  }
  var e = c.Si;
  e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
  e.load(
    [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"],
    "disconnect"
  );
  e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
  var f = [];
  f.push(g.wa(document, "mousemove", null, d, !0));
  f.push(g.wa(document, "touchstart", null, d, !0));
};
g.Md = function (a, c) {
  this.aE = c || "";
  this.wD = Object.create(null);
  if (a) for (a = a.split(","), c = 0; c < a.length; c++) this.wD[a[c]] = !0;
  this.reset();
};
g.Md.Dt = "DEVELOPER_VARIABLE";
g.Md.prototype.reset = function () {
  this.Ig = Object.create(null);
  this.kB = Object.create(null);
  this.Ta = null;
};
g.Md.prototype.Zx = function (a) {
  this.Ta = a;
};
g.Md.prototype.ae = function (a, c) {
  if (c == g.zc) {
    var d = a;
    this.Ta
      ? (d = (d = this.Ta.dg(d)) ? d.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (d = null));
    d && (a = d);
  }
  d = a.toLowerCase() + "_" + c;
  var e = c == g.zc || c == g.Md.Dt ? this.aE : "";
  if (d in this.Ig) return e + this.Ig[d];
  a = Q(this, a, c);
  this.Ig[d] = a.substr(e.length);
  return a;
};
function Q(a, c, d) {
  c
    ? ((c = encodeURI(c.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(c[0]) && (c = "my_" + c))
    : (c = g.i.UNNAMED_KEY || "unnamed");
  for (var e = ""; a.kB[c + e] || c + e in a.wD; ) e = e ? e + 1 : 2;
  c += e;
  a.kB[c] = !0;
  return (d == g.zc || d == g.Md.Dt ? a.aE : "") + c;
}
g.Md.sf = function (a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.Aa = {};
g.Aa.Aq = g.Dn;
g.Aa.Ty = "x";
g.Aa.oH = function (a) {
  var c = jb(a, "procedures_defnoreturn").map(function (d) {
    return d.aj();
  });
  a = jb(a, "procedures_defreturn").map(function (d) {
    return d.aj();
  });
  c.sort(g.Aa.rD);
  a.sort(g.Aa.rD);
  return [c, a];
};
g.Aa.rD = function (a, c) {
  return a[0].toLowerCase().localeCompare(c[0].toLowerCase());
};
g.Aa.Dr = function (a, c) {
  if (c.Qb) return a;
  for (a = a || g.i.UNNAMED_KEY || "unnamed"; !g.Aa.lJ(a, c.u, c); ) {
    var d = a.match(/^(.*?)(\d+)$/);
    a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2";
  }
  return a;
};
g.Aa.lJ = function (a, c, d) {
  return !g.Aa.nJ(a, c, d);
};
g.Aa.nJ = function (a, c, d) {
  c = G(c);
  for (var e = 0; e < c.length; e++)
    if (c[e] != d && c[e].aj) {
      var f = c[e].aj();
      if (g.Md.sf(f[0], a)) return !0;
    }
  return !1;
};
g.Aa.Js = function (a) {
  a = a.trim();
  var c = g.Aa.Dr(a, this.Y()),
    d = this.getValue();
  if (d != a && d != c) {
    a = G(this.Y().u);
    for (var e = 0; e < a.length; e++) a[e].Rm && a[e].Rm(d, c);
  }
  return c;
};
g.Aa.xk = function (a) {
  function c(h, k) {
    for (var l = 0; l < h.length; l++) {
      var m = h[l][0],
        n = h[l][1],
        p = g.g.xml.createElement("block");
      p.setAttribute("type", k);
      p.setAttribute("gap", 16);
      var r = g.g.xml.createElement("mutation");
      r.setAttribute("name", m);
      p.appendChild(r);
      for (m = 0; m < n.length; m++) {
        var w = g.g.xml.createElement("arg");
        w.setAttribute("name", n[m]);
        r.appendChild(w);
      }
      d.push(p);
    }
  }
  var d = [];
  if (g.N.procedures_defnoreturn) {
    var e = g.g.xml.createElement("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = g.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFNORETURN_PROCEDURE));
    e.appendChild(f);
    d.push(e);
  }
  g.N.procedures_defreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = g.g.xml.createElement("field")),
    f.setAttribute("name", "NAME"),
    f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    d.push(e));
  g.N.procedures_ifreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    d.push(e));
  d.length && d[d.length - 1].setAttribute("gap", 24);
  a = g.Aa.oH(a);
  c(a[0], "procedures_callnoreturn");
  c(a[1], "procedures_callreturn");
  return d;
};
g.Aa.XD = function (a) {
  for (
    var c = [], d = jb(a, "procedures_mutatorarg"), e = 0, f;
    (f = d[e]);
    e++
  )
    c.push(D(f, "NAME"));
  d = g.g.xml.createElement("xml");
  e = g.g.xml.createElement("block");
  e.setAttribute("type", "procedures_mutatorarg");
  f = g.g.xml.createElement("field");
  f.setAttribute("name", "NAME");
  c = g.g.xml.createTextNode(g.$.IB(g.Aa.Ty, c));
  f.appendChild(c);
  e.appendChild(f);
  d.appendChild(e);
  if ((c = g.g.za.bv(d))) {
    if (!a.options.Yg)
      throw Error("Existing toolbox is null.  Can't create new toolbox.");
    if (g.g.za.Eo(c)) {
      if (!a.La)
        throw Error("Existing toolbox has no categories.  Can't change mode.");
      a.options.Yg = c;
      a.La.Ia(c);
    } else {
      if (!a.na)
        throw Error("Existing toolbox has categories.  Can't change mode.");
      a.options.Yg = c;
      a.na.show(c);
    }
  } else if (a.options.Yg) throw Error("Can't nullify an existing toolbox.");
};
g.Aa.IJ = function (a) {
  if (a.type == g.h.Xp && "mutator" === a.Pu && a.Gm) {
    a = g.Vb.vo(a.Tc).Zd(a.pb);
    var c = a.type;
    if ("procedures_defnoreturn" == c || "procedures_defreturn" == c)
      (a = a.qd.s), g.Aa.XD(a), H(a, g.Aa.HJ);
  }
};
g.Aa.HJ = function (a) {
  (a.type != g.h.Vp && a.type != g.h.nt && a.type != g.h.rE) ||
    g.Aa.XD(g.Vb.vo(a.Tc));
};
g.Aa.yI = function (a, c) {
  var d = [];
  c = G(c);
  for (var e = 0; e < c.length; e++)
    if (c[e].Ne) {
      var f = c[e].Ne();
      f && g.Md.sf(f, a) && d.push(c[e]);
    }
  return d;
};
g.Aa.Xo = function (a) {
  var c = g.h.cb,
    d = a.aj()[0],
    e = a.rb(!0);
  a = g.Aa.yI(d, a.u);
  d = 0;
  for (var f; (f = a[d]); d++) {
    var h = f.rb();
    h = h && g.W.re(h);
    f.Xb(e);
    var k = f.rb();
    k = k && g.W.re(k);
    h != k &&
      ((g.h.cb = !1),
      g.h.Ha(new g.h.mh(f, "mutation", null, h, k)),
      (g.h.cb = c));
  }
};
g.Aa.xo = function (a, c) {
  c = c.ac(!1);
  for (var d = 0; d < c.length; d++)
    if (c[d].aj) {
      var e = c[d].aj();
      if (e && g.Md.sf(e[0], a)) return c[d];
    }
  return null;
};
g.Zb = {};
g.Zb.names = {
  bF: "escape",
  Tj: "delete",
  GE: "copy",
  NE: "cut",
  AG: "paste",
  aH: "undo",
  FG: "redo",
};
g.Zb.AK = function () {
  var a = {
    name: g.Zb.names.bF,
    bb: function (c) {
      return !c.options.readOnly;
    },
    Ba: function () {
      g.Bc();
      return !0;
    },
  };
  g.jb.C.register(a);
  J(g.g.S.Ft, a.name);
};
g.Zb.Ix = function () {
  var a = {
    name: g.Zb.names.Tj,
    bb: function (c) {
      return !c.options.readOnly && g.selected && g.selected.ve();
    },
    Ba: function (c, d) {
      d.preventDefault();
      if (g.rg.Hk()) return !1;
      g.oB();
      return !0;
    },
  };
  g.jb.C.register(a);
  J(g.g.S.Tj, a.name);
  J(g.g.S.pE, a.name);
};
g.Zb.sK = function () {
  var a = {
    name: g.Zb.names.GE,
    bb: function (d) {
      return (
        !d.options.readOnly &&
        !g.rg.Hk() &&
        g.selected &&
        g.selected.ve() &&
        g.selected.Kc()
      );
    },
    Ba: function () {
      g.Bc();
      g.cv(g.selected);
      return !0;
    },
  };
  g.jb.C.register(a);
  var c = K(g.g.S.tt, [g.g.S.Ci]);
  J(c, a.name);
  c = K(g.g.S.tt, [g.g.S.zl]);
  J(c, a.name);
  c = K(g.g.S.tt, [g.g.S.Kl]);
  J(c, a.name);
};
g.Zb.tK = function () {
  var a = {
    name: g.Zb.names.NE,
    bb: function (d) {
      return (
        !d.options.readOnly &&
        !g.rg.Hk() &&
        g.selected &&
        g.selected.ve() &&
        g.selected.Kc() &&
        !g.selected.u.eg
      );
    },
    Ba: function () {
      g.cv(g.selected);
      g.oB();
      return !0;
    },
  };
  g.jb.C.register(a);
  var c = K(g.g.S.Lq, [g.g.S.Ci]);
  J(c, a.name);
  c = K(g.g.S.Lq, [g.g.S.zl]);
  J(c, a.name);
  c = K(g.g.S.Lq, [g.g.S.Kl]);
  J(c, a.name);
};
g.Zb.LK = function () {
  var a = {
    name: g.Zb.names.AG,
    bb: function (d) {
      return !d.options.readOnly && !g.rg.Hk();
    },
    Ba: function () {
      return g.Cs();
    },
  };
  g.jb.C.register(a);
  var c = K(g.g.S.Au, [g.g.S.Ci]);
  J(c, a.name);
  c = K(g.g.S.Au, [g.g.S.zl]);
  J(c, a.name);
  c = K(g.g.S.Au, [g.g.S.Kl]);
  J(c, a.name);
};
g.Zb.Lx = function () {
  var a = {
    name: g.Zb.names.aH,
    bb: function (d) {
      return !d.options.readOnly && !g.rg.Hk();
    },
    Ba: function (d) {
      g.Bc();
      nb(d, !1);
      return !0;
    },
  };
  g.jb.C.register(a);
  var c = K(g.g.S.$l, [g.g.S.Ci]);
  J(c, a.name);
  c = K(g.g.S.$l, [g.g.S.zl]);
  J(c, a.name);
  c = K(g.g.S.$l, [g.g.S.Kl]);
  J(c, a.name);
};
g.Zb.Kx = function () {
  var a = {
    name: g.Zb.names.FG,
    bb: function (d) {
      return !g.rg.Hk() && !d.options.readOnly;
    },
    Ba: function (d) {
      g.Bc();
      nb(d, !0);
      return !0;
    },
  };
  g.jb.C.register(a);
  var c = K(g.g.S.$l, [g.g.S.Bh, g.g.S.Ci]);
  J(c, a.name);
  c = K(g.g.S.$l, [g.g.S.Bh, g.g.S.zl]);
  J(c, a.name);
  c = K(g.g.S.$l, [g.g.S.Bh, g.g.S.Kl]);
  J(c, a.name);
  c = K(g.g.S.iH, [g.g.S.Ci]);
  J(c, a.name);
};
g.Zb.vK = function () {
  g.Zb.AK();
  g.Zb.Ix();
  g.Zb.sK();
  g.Zb.tK();
  g.Zb.LK();
  g.Zb.Lx();
  g.Zb.Kx();
};
g.jb = function () {
  g.jb.C = this;
  this.Se = Object.create(null);
  this.Im = Object.create(null);
  g.Zb.vK();
  g.navigation.IK();
};
g.jb.hs = { iO: g.g.S.Bh, gM: g.g.S.Ci, WL: g.g.S.zl, $M: g.g.S.Kl };
g.jb.prototype.register = function (a, c) {
  if (this.Se[a.name] && !c)
    throw Error('Shortcut with name "' + a.name + '" already exists.');
  this.Se[a.name] = a;
};
g.jb.prototype.unregister = function (a) {
  if (!this.Se[a])
    return (
      console.warn('Keyboard shortcut with name "' + a + '" not found.'), !1
    );
  for (var c in this.Im) {
    var d = c,
      e = this.Im[d],
      f = e.indexOf(a);
    -1 < f && (e.splice(f, 1), 0 == e.length && delete this.Im[d]);
  }
  delete this.Se[a];
  return !0;
};
function J(a, c, d) {
  var e = g.jb.C,
    f = e.Im[a];
  if (f && !d)
    throw Error(
      'Shortcut with name "' + c + '" collides with shortcuts ' + f.toString()
    );
  f && d ? f.unshift(c) : (e.Im[a] = [c]);
}
g.jb.prototype.Yo = function (a, c) {
  var d = "";
  for (e in g.jb.hs) c.getModifierState(e) && ("" != d && (d += "+"), (d += e));
  "" != d && c.keyCode
    ? (d = d + "+" + c.keyCode)
    : c.keyCode && (d = c.keyCode.toString());
  d = this.Im[d] || [];
  if (!d) return !1;
  var e = 0;
  for (var f; (f = d[e]); e++)
    if (((f = this.Se[f]), (!f.bb || f.bb(a)) && f.Ba && f.Ba(a, c, f)))
      return !0;
  return !1;
};
function K(a, c) {
  var d = "";
  if (c) {
    for (var e = g.g.object.values(g.jb.hs), f = 0, h; (h = c[f]); f++)
      if (0 > e.indexOf(h)) throw Error(h + " is not a valid modifier key.");
    for (var k in g.jb.hs)
      -1 < c.indexOf(g.jb.hs[k]) && ("" != d && (d += "+"), (d += k));
  }
  "" != d && a ? (d = d + "+" + a) : a && (d = a.toString());
  return d;
}
new g.jb();
g.Jn = function (a, c, d, e) {
  this.u = a;
  this.name = c;
  this.type = d || "";
  this.nw = e || g.g.Vh();
  g.h.Ha(new g.h.gf(this));
};
g.Jn.prototype.Oa = function () {
  return this.nw;
};
g.Jn.UA = function (a, c) {
  a = a.name.toLowerCase();
  c = c.name.toLowerCase();
  return a < c ? -1 : a == c ? 0 : 1;
};
g.$ = {};
g.$.Aq = g.zc;
g.$.EA = function (a) {
  var c = G(a);
  a = Object.create(null);
  for (var d = 0; d < c.length; d++) {
    var e = c[d].Yh();
    if (e)
      for (var f = 0; f < e.length; f++) {
        var h = e[f],
          k = h.Oa();
        k && (a[k] = h);
      }
  }
  c = [];
  for (k in a) c.push(a[k]);
  return c;
};
g.$.Dy = {};
g.$.mH = function (a) {
  a = G(a);
  for (var c = Object.create(null), d = 0, e; (e = a[d]); d++) {
    var f = e.EO;
    !f &&
      e.EI &&
      ((f = e.EI),
      g.$.Dy[e.type] ||
        (console.warn(
          "Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" +
            e.type +
            "')"
        ),
        (g.$.Dy[e.type] = !0)));
    if (f) for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0;
  }
  return Object.keys(c);
};
g.$.xk = function (a) {
  var c = [],
    d = document.createElement("button");
  d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
  d.setAttribute("callbackKey", "CREATE_VARIABLE");
  Oc(a, function (e) {
    g.$.hB(e.Xs);
  });
  c.push(d);
  a = g.$.sI(a);
  return (c = c.concat(a));
};
g.$.sI = function (a) {
  a = a.Co("");
  var c = [];
  if (0 < a.length) {
    var d = a[a.length - 1];
    if (g.N.variables_set) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", "variables_set");
      e.setAttribute("gap", g.N.math_change ? 8 : 24);
      e.appendChild(g.$.uo(d));
      c.push(e);
    }
    g.N.math_change &&
      ((e = g.g.xml.createElement("block")),
      e.setAttribute("type", "math_change"),
      e.setAttribute("gap", g.N.variables_get ? 20 : 8),
      e.appendChild(g.$.uo(d)),
      (d = g.W.Hf(
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
      )),
      e.appendChild(d),
      c.push(e));
    if (g.N.variables_get) {
      a.sort(g.Jn.UA);
      d = 0;
      for (var f; (f = a[d]); d++)
        (e = g.g.xml.createElement("block")),
          e.setAttribute("type", "variables_get"),
          e.setAttribute("gap", 8),
          e.appendChild(g.$.uo(f)),
          c.push(e);
    }
  }
  return c;
};
g.$.nA = "ijkmnopqrstuvwxyzabcdefgh";
g.$.uI = function (a) {
  return g.$.IB(g.$.nA.charAt(0), a.Tv());
};
g.$.IB = function (a, c) {
  if (!c.length) return a;
  for (var d = g.$.nA, e = "", f = d.indexOf(a); ; ) {
    for (var h = !1, k = 0; k < c.length; k++)
      if (c[k].toLowerCase() == a) {
        h = !0;
        break;
      }
    if (!h) return a;
    f++;
    f == d.length && ((f = 0), (e = Number(e) + 1));
    a = d.charAt(f) + e;
  }
};
g.$.hB = function (a, c, d) {
  function e(h) {
    g.$.sD(g.i.NEW_VARIABLE_TITLE, h, function (k) {
      if (k) {
        var l = g.$.KJ(k, a);
        if (l) {
          if (l.type == f)
            var m = g.i.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
          else
            (m = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (m = m.replace("%1", l.name).replace("%2", l.type));
          g.alert(m, function () {
            e(k);
          });
        } else a.nf(k, f), c && c(k);
      } else c && c(null);
    });
  }
  var f = d || "";
  e("");
};
g.$.nf = g.$.hB;
g.$.Ls = function (a, c) {
  function d(e) {
    var f = g.i.RENAME_VARIABLE_TITLE.replace("%1", c.name);
    g.$.sD(f, e, function (h) {
      if (h) {
        var k = g.$.LJ(h, c.type, a);
        k
          ? ((k = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              k.name
            ).replace("%2", k.type)),
            g.alert(k, function () {
              d(h);
            }))
          : a.Cj(c.Oa(), h);
      }
    });
  }
  d("");
};
g.$.sD = function (a, c, d) {
  g.prompt(a, c, function (e) {
    e &&
      ((e = e.replace(/[\s\xa0]+/g, " ").trim()),
      e == g.i.RENAME_VARIABLE || e == g.i.NEW_VARIABLE) &&
      (e = null);
    d(e);
  });
};
g.$.LJ = function (a, c, d) {
  d = d.Ta.yk();
  a = a.toLowerCase();
  for (var e = 0, f; (f = d[e]); e++)
    if (f.name.toLowerCase() == a && f.type != c) return f;
  return null;
};
g.$.KJ = function (a, c) {
  c = c.Ta.yk();
  a = a.toLowerCase();
  for (var d = 0, e; (e = c[d]); d++) if (e.name.toLowerCase() == a) return e;
  return null;
};
g.$.uo = function (a) {
  var c = g.g.xml.createElement("field");
  c.setAttribute("name", "VAR");
  c.setAttribute("id", a.Oa());
  c.setAttribute("variabletype", a.type);
  a = g.g.xml.createTextNode(a.name);
  c.appendChild(a);
  return c;
};
g.$.Lr = function (a, c, d, e) {
  var f = g.$.od(a, c, d, e);
  f || (f = g.$.PH(a, c, d, e));
  return f;
};
g.$.od = function (a, c, d, e) {
  var f = a.yj,
    h = null;
  if (c && ((h = a.dg(c)), !h && f && (h = f.dg(c)), h)) return h;
  if (d) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    h = a.od(d, e);
    !h && f && (h = f.od(d, e));
  }
  return h;
};
g.$.PH = function (a, c, d, e) {
  var f = a.yj;
  d || (d = g.$.uI(a.eg ? a.fb : a));
  return f ? f.nf(d, e, c) : a.nf(d, e, c);
};
g.$.JB = function (a, c) {
  a = a.yk();
  var d = [];
  if (c.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == c.indexOf(f) && d.push(f);
    }
  return d;
};
g.ca = {};
g.ca.Bf = null;
g.ca.xr = null;
g.ca.fg = "";
g.ca.kg = "";
g.ca.$a = function () {
  g.ca.mb ||
    ((g.ca.mb = document.createElement("div")),
    (g.ca.mb.className = "blocklyWidgetDiv"),
    (g.As || document.body).appendChild(g.ca.mb));
};
g.ca.show = function (a, c, d) {
  g.ca.Ja();
  g.ca.Bf = a;
  g.ca.xr = d;
  a = g.ca.mb;
  a.style.direction = c ? "rtl" : "ltr";
  a.style.display = "block";
  c = g.Og();
  g.ca.fg = c.Mb.ag();
  g.ca.kg = c.Rg().ag();
  g.g.o.Ga(a, g.ca.fg);
  g.g.o.Ga(a, g.ca.kg);
};
g.ca.Ja = function () {
  if (g.ca.isVisible()) {
    g.ca.Bf = null;
    var a = g.ca.mb;
    a.style.display = "none";
    a.style.left = "";
    a.style.top = "";
    g.ca.xr && g.ca.xr();
    g.ca.xr = null;
    a.textContent = "";
    g.ca.fg && (g.g.o.jc(a, g.ca.fg), (g.ca.fg = ""));
    g.ca.kg && (g.g.o.jc(a, g.ca.kg), (g.ca.kg = ""));
    ra(g.Og());
  }
};
g.ca.isVisible = function () {
  return !!g.ca.Bf;
};
g.ca.ym = function (a) {
  g.ca.Bf == a && g.ca.Ja();
};
g.ca.cp = function (a, c, d) {
  g.ca.mb.style.left = a + "px";
  g.ca.mb.style.top = c + "px";
  g.ca.mb.style.height = d + "px";
};
g.ca.jK = function (a, c, d, e) {
  var f = g.ca.yH(a, c, d);
  a = g.ca.xH(a, c, d, e);
  0 > f ? g.ca.cp(a, 0, d.height + f) : g.ca.cp(a, f, d.height);
};
g.ca.xH = function (a, c, d, e) {
  if (e)
    return (
      (c = Math.max(c.right - d.width, a.left)), Math.min(c, a.right - d.width)
    );
  c = Math.min(c.left, a.right - d.width);
  return Math.max(c, a.left);
};
g.ca.yH = function (a, c, d) {
  return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom;
};
g.VERSION = "uncompiled";
g.Po = null;
g.selected = null;
g.qm = [];
g.gm = null;
g.gr = null;
g.Yu = null;
g.uO = null;
g.As = null;
g.tL = function (a) {
  return new g.g.ff(a.KA, a.JA);
};
g.VO = function (a) {
  Ha(a);
};
g.Ym = function (a) {
  for (; a.options.vc; ) a = a.options.vc;
  var c = u(a),
    d = c.parentNode;
  if (d) {
    var e = d.offsetWidth;
    d = d.offsetHeight;
    c.KA != e && (c.setAttribute("width", e + "px"), (c.KA = e));
    c.JA != d && (c.setAttribute("height", d + "px"), (c.JA = d));
    a.resize();
  }
};
g.Yo = function (a) {
  var c = g.Po;
  !c || g.g.Wr(a) || (c.pa && !c.isVisible()) || g.jb.C.Yo(c, a);
};
g.oB = function () {
  var a = g.selected;
  a.u.eg || (g.h.ea(!0), g.Bc(), a.I(!0, !0), g.h.ea(!1));
};
g.cv = function (a) {
  if (a.Em) a = null;
  else {
    var c = g.W.Jh(a, !0);
    g.W.XH(c);
    var d = a.ab();
    c.setAttribute("x", a.L ? -d.x : d.x);
    c.setAttribute("y", d.y);
    a = { xml: c, source: a.u, CL: g.g.Uv(a, !0) };
  }
  a && ((g.gm = a.xml), (g.gr = a.source), (g.Yu = a.CL));
};
g.Cs = function () {
  if (!g.gm) return !1;
  var a = g.gr;
  a.eg && (a = a.fb);
  return g.Yu && lb(a, g.Yu) ? (g.h.ea(!0), a.Cs(g.gm), g.h.ea(!1), !0) : !1;
};
g.duplicate = function (a) {
  var c = g.gm,
    d = g.gr;
  g.cv(a);
  a.u.Cs(g.gm);
  g.gm = c;
  g.gr = d;
};
g.RO = function (a) {
  g.g.Wr(a) || a.preventDefault();
};
g.Bc = function (a) {
  g.K.Ja();
  g.ca.Ja();
  g.H.Dk();
  if (!a) {
    a = g.Og();
    if (a.ud && a.ud.Mg) {
      var c = a.ud;
      c.Mg.isVisible() && (c.Mg.Ja(), Pc(c, !1));
    }
    (a = a.La) && a.hc() && a.hc().cm && yb(a, null);
  }
};
g.Og = function () {
  return g.Po;
};
g.alert = function (a, c) {
  alert(a);
  c && c();
};
g.confirm = function (a, c) {
  c(confirm(a));
};
g.prompt = function (a, c, d) {
  d(prompt(a, c));
};
g.qJ = function (a) {
  return function () {
    O(this, a);
  };
};
g.om = function (a) {
  for (var c = 0; c < a.length; c++) {
    var d = a[c];
    if (d) {
      var e = d.type;
      null == e || "" === e
        ? console.warn(
            "Block definition #" +
              c +
              " in JSON array is missing a type attribute. Skipping."
          )
        : (g.N[e] &&
            console.warn(
              "Block definition #" +
                c +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (g.N[e] = { R: g.qJ(d) }));
    } else
      console.warn(
        "Block definition #" + c + " in JSON array is " + d + ". Skipping."
      );
  }
};
g.wa = function (a, c, d, e, f, h) {
  function k(w) {
    var E = !f;
    w = g.Touch.kL(w);
    for (var aa = 0, ba; (ba = w[aa]); aa++)
      if (!E || g.Touch.by(ba))
        g.Touch.cL(ba), d ? e.call(d, ba) : e(ba), (l = !0);
  }
  var l = !1,
    m = [];
  if (g.g.global.PointerEvent && c in g.Touch.vg)
    for (var n = 0, p; (p = g.Touch.vg[c][n]); n++)
      a.addEventListener(p, k, !1), m.push([a, p, k]);
  else if ((a.addEventListener(c, k, !1), m.push([a, c, k]), c in g.Touch.vg)) {
    var r = function (w) {
      k(w);
      var E = !h;
      l && E && w.preventDefault();
    };
    for (n = 0; (p = g.Touch.vg[c][n]); n++)
      a.addEventListener(p, r, !1), m.push([a, p, r]);
  }
  return m;
};
g.Ud = function (a, c, d, e) {
  function f(n) {
    d ? e.call(d, n) : e(n);
  }
  var h = [];
  if (g.g.global.PointerEvent && c in g.Touch.vg)
    for (var k = 0, l; (l = g.Touch.vg[c][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f]);
  else if ((a.addEventListener(c, f, !1), h.push([a, c, f]), c in g.Touch.vg)) {
    var m = function (n) {
      if (n.changedTouches && 1 == n.changedTouches.length) {
        var p = n.changedTouches[0];
        n.clientX = p.clientX;
        n.clientY = p.clientY;
      }
      f(n);
      n.preventDefault();
    };
    for (k = 0; (l = g.Touch.vg[c][k]); k++)
      a.addEventListener(l, m, !1), h.push([a, l, m]);
  }
  return h;
};
g.Ma = function (a) {
  for (; a.length; ) {
    var c = a.pop();
    c[0].removeEventListener(c[1], c[2], !1);
  }
};
g.lj = function (a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
g.dJ = function (a) {
  return g.g.Fb.oC(a);
};
g.zH = function () {
  g.yd("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  g.yd("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  g.yd("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  g.yd("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  g.yd("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  g.yd("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  g.yd("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  g.yd("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  g.yd("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  g.yd("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  g.yd("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  g.yd("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  g.yd("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  g.yd("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  g.yd("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  g.yd("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
g.yd = function (a, c, d) {
  for (var e = "Blockly", f = g, h = 0; h < c.length; ++h)
    (e += "." + c[h]), f && (f = f[c[h]]);
  f &&
    f !== d &&
    ((a = (void 0 === d
      ? '%1 has been removed. Use Blockly.Msg["%2"].'
      : '%1 is deprecated and unused. Override Blockly.Msg["%2"].'
    )
      .replace("%1", e)
      .replace("%2", a)),
    console.warn(a));
};
g.$O = function (a) {
  g.As = a;
};
g.g.D = {};
g.g.D.Xa = function (a, c) {
  return " " + a + "," + c + " ";
};
g.g.D.curve = function (a, c) {
  return " " + a + c.join("");
};
g.g.D.moveTo = function (a, c) {
  return " M " + a + "," + c + " ";
};
g.g.D.moveBy = function (a, c) {
  return " m " + a + "," + c + " ";
};
g.g.D.lineTo = function (a, c) {
  return " l " + a + "," + c + " ";
};
g.g.D.line = function (a) {
  return " l" + a.join("");
};
g.g.D.oa = function (a, c) {
  return " " + a + " " + c + " ";
};
g.g.D.arc = function (a, c, d, e) {
  return a + " " + d + " " + d + " " + c + e;
};
g.m.qh = function () {
  this.sg = 0;
  this.KG = 3;
  this.ef = 5;
  this.Bz = 8;
  this.Kd = 10;
  this.eA = this.ef;
  this.Hn = 15;
  this.Vl = 5;
  this.Hq = 8;
  this.sG = 15;
  this.Xt = 4;
  this.mG = 12;
  this.XE = 16;
  this.WE = this.Yy = this.Hn;
  this.Nb = 8;
  this.QG = this.xn = 15;
  this.bA = 0;
  this.dA = 20;
  this.qE = 4;
  this.XG = this.ef;
  this.YG = this.Kd;
  this.uE = this.ef;
  this.tE = this.Kd;
  this.Tp = !1;
  this.NG = 15;
  this.OG = 100;
  this.MG = 15;
  this.un = 24;
  this.ZE = 14.5;
  this.YE = this.Hn + 11;
  this.eF = 2;
  this.$E = this.un;
  this.aA = g.g.D.moveBy(0, 0);
  this.OF = 12;
  this.PF = 6;
  this.Gi = 11;
  this.Hi = "normal";
  this.Fi = "sans-serif";
  this.dz = this.qq = -1;
  this.pq = 4;
  this.bz = 16;
  this.El = 5;
  this.az = "#fff";
  this.It = !g.g.userAgent.bf && !g.g.userAgent.Uj;
  this.cz = this.bz;
  this.nF = this.mF = this.Ht = !1;
  this.pF = this.El;
  this.nn = 12;
  this.oF =
    "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
  this.qF = !1;
  this.lF = this.El - 3;
  this.gp = String(Math.random()).substring(2);
  this.zr = "";
  this.Lv = null;
  this.tB = "";
  this.ao = this.jv = this.uv = null;
  this.iq = "#cc0a0a";
  this.zq = "#4286f4";
  this.kq = 100;
  this.uA = 5;
  this.jq = 10;
  this.IE = 2;
  this.KE = 4;
  this.iz = !1;
  this.Nt = "#000000";
  this.wq = 0.2;
  this.Zz = { DG: 1, Ml: 2 };
};
b = g.m.qh.prototype;
b.R = function () {
  this.Il = this.Mw();
  this.Ml = this.Nw();
  this.Rl = this.Pw();
  this.fu = this.Ow();
  var a = this.Nb,
    c = g.g.D.arc("a", "0 0,0", a, g.g.D.Xa(-a, a)),
    d = g.g.D.arc("a", "0 0,0", a, g.g.D.Xa(a, a));
  this.xq = { width: a, height: a, yx: c, Ds: d };
  a = this.Nb;
  c = g.g.D.moveBy(0, a) + g.g.D.arc("a", "0 0,1", a, g.g.D.Xa(a, -a));
  d = g.g.D.arc("a", "0 0,1", a, g.g.D.Xa(a, a));
  var e = g.g.D.arc("a", "0 0,1", a, g.g.D.Xa(-a, -a)),
    f = g.g.D.arc("a", "0 0,1", a, g.g.D.Xa(-a, a));
  this.Cn = { py: c, zL: d, uH: f, Nu: e, YK: a };
};
b.up = function (a) {
  this.Ui = {};
  var c = a.Ui,
    d;
  for (d in c) this.Ui[d] = Qc(c[d]);
  this.Fi =
    a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.Fi;
  this.Hi =
    a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.Hi;
  this.Gi =
    a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.Gi;
  c = g.g.o.JC("Hg", this.Gi + "pt", this.Hi, this.Fi);
  this.qq = c.height;
  this.dz = c.jf;
  this.iq = za(a, "cursorColour") || this.iq;
  this.zq = za(a, "markerColour") || this.zq;
  this.Nt = za(a, "insertionMarkerColour") || this.Nt;
  this.wq = Number(za(a, "insertionMarkerOpacity")) || this.wq;
  this.Tp = null != a.jy ? a.jy : this.Tp;
};
function zc(a, c) {
  var d = "auto_" + c;
  a.Ui[d] || (a.Ui[d] = Qc({ colourPrimary: c }));
  return { style: a.Ui[d], name: d };
}
function tc(a, c) {
  return (
    a.Ui[c || ""] ||
    (c && 0 == c.indexOf("auto_")
      ? zc(a, c.substring(5)).style
      : Qc({ colourPrimary: "#000000" }))
  );
}
function Qc(a) {
  var c = {};
  a && g.g.object.Re(c, a);
  a = g.g.Bs(c.colourPrimary || "#000");
  c.Mh = a.Fo;
  c.colourSecondary
    ? (a = g.g.Bs(c.colourSecondary).Fo)
    : ((a = c.Mh), (a = g.g.Fb.Ku("#fff", a, 0.6) || a));
  c.ir = a;
  c.colourTertiary
    ? (a = g.g.Bs(c.colourTertiary).Fo)
    : ((a = c.Mh), (a = g.g.Fb.Ku("#fff", a, 0.3) || a));
  c.Cg = a;
  c.Tg = c.hat || "";
  return c;
}
b.I = function () {
  this.Lv && g.g.o.removeNode(this.Lv);
  this.uv && g.g.o.removeNode(this.uv);
  this.jv && g.g.o.removeNode(this.jv);
  this.ao = null;
};
b.Mw = function () {
  var a = this.OF,
    c = this.PF,
    d = g.g.D.line([
      g.g.D.Xa(c, a / 4),
      g.g.D.Xa(2 * -c, a / 2),
      g.g.D.Xa(c, a / 4),
    ]);
  return { height: a, width: c, path: d };
};
b.Pw = function () {
  var a = this.NG,
    c = this.OG,
    d = g.g.D.curve("c", [g.g.D.Xa(30, -a), g.g.D.Xa(70, -a), g.g.D.Xa(c, 0)]);
  return { height: a, width: c, path: d };
};
b.Ow = function () {
  function a(h) {
    h = h ? -1 : 1;
    var k = -h,
      l = d / 2,
      m = g.g.D.Xa(c, h * l);
    return (
      g.g.D.curve("c", [
        g.g.D.Xa(0, h * (l + 2.5)),
        g.g.D.Xa(-c, k * (l + 0.5)),
        g.g.D.Xa(-c, h * l),
      ]) + g.g.D.curve("s", [g.g.D.Xa(c, 2.5 * k), m])
    );
  }
  var c = this.Hq,
    d = this.Hn,
    e = a(!0),
    f = a(!1);
  return { type: this.Zz.DG, width: c, height: d, Cf: f, ap: e };
};
b.Nw = function () {
  function a(k) {
    return g.g.D.line([
      g.g.D.Xa(k * e, d),
      g.g.D.Xa(3 * k, 0),
      g.g.D.Xa(k * e, -d),
    ]);
  }
  var c = this.sG,
    d = this.Xt,
    e = (c - 3) / 2,
    f = a(1),
    h = a(-1);
  return { type: this.Zz.Ml, width: c, height: d, wj: f, iD: h };
};
function Ua(a, c) {
  switch (c.type) {
    case g.ob:
    case g.Pf:
      return a.fu;
    case g.Qf:
    case g.Cb:
      return a.Ml;
    default:
      throw Error("Unknown connection type");
  }
}
b.$a = function (a, c, d) {
  d = this.Wv(d);
  c = "blockly-renderer-style-" + c;
  this.ao = document.getElementById(c);
  var e = d.join("\n");
  this.ao
    ? (this.ao.firstChild.textContent = e)
    : ((d = document.createElement("style")),
      (d.id = c),
      (c = document.createTextNode(e)),
      d.appendChild(c),
      document.head.insertBefore(d, document.head.firstChild),
      (this.ao = d));
  a = g.g.o.M(g.g.F.Uy, {}, a);
  c = g.g.o.M(g.g.F.ez, { id: "blocklyEmbossFilter" + this.gp }, a);
  g.g.o.M(g.g.F.iF, { in: "SourceAlpha", stdDeviation: 1, result: "blur" }, c);
  d = g.g.o.M(
    g.g.F.kF,
    {
      in: "blur",
      surfaceScale: 1,
      specularConstant: 0.5,
      specularExponent: 10,
      "lighting-color": "white",
      result: "specOut",
    },
    c
  );
  g.g.o.M(g.g.F.jF, { x: -5e3, y: -1e4, z: 2e4 }, d);
  g.g.o.M(
    g.g.F.Gt,
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    c
  );
  g.g.o.M(
    g.g.F.Gt,
    {
      in: "SourceGraphic",
      in2: "specOut",
      operator: "arithmetic",
      k1: 0,
      k2: 1,
      k3: 1,
      k4: 0,
    },
    c
  );
  this.zr = c.id;
  this.Lv = c;
  c = g.g.o.M(
    g.g.F.Nz,
    {
      id: "blocklyDisabledPattern" + this.gp,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10,
    },
    a
  );
  g.g.o.M(g.g.F.Hc, { width: 10, height: 10, fill: "#aaa" }, c);
  g.g.o.M(g.g.F.Od, { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, c);
  this.tB = c.id;
  this.uv = c;
  g.m.Zy &&
    ((a = g.g.o.M(
      g.g.F.ez,
      {
        id: "blocklyDebugFilter" + this.gp,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%",
      },
      a
    )),
    (c = g.g.o.M(g.g.F.fF, { result: "outBlur" }, a)),
    g.g.o.M(
      g.g.F.hF,
      { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" },
      c
    ),
    g.g.o.M(
      g.g.F.gF,
      { "flood-color": "#ff0000", "flood-opacity": 0.5, result: "outColor" },
      a
    ),
    g.g.o.M(
      g.g.F.Gt,
      { in: "outColor", in2: "outBlur", operator: "in", result: "outGlow" },
      a
    ),
    (this.jv = a));
};
b.Wv = function (a) {
  return [
    a + " .blocklyText, ",
    a + " .blocklyFlyoutLabelText {",
    "font: " + this.Hi + " " + this.Gi + "pt " + this.Fi + ";",
    "}",
    a + " .blocklyText {",
    "fill: #fff;",
    "}",
    a + " .blocklyNonEditableText>rect,",
    a + " .blocklyEditableText>rect {",
    "fill: " + this.az + ";",
    "fill-opacity: .6;",
    "stroke: none;",
    "}",
    a + " .blocklyNonEditableText>text,",
    a + " .blocklyEditableText>text {",
    "fill: #000;",
    "}",
    a + " .blocklyFlyoutLabelText {",
    "fill: #000;",
    "}",
    a + " .blocklyText.blocklyBubbleText {",
    "fill: #000;",
    "}",
    a + " .blocklyEditableText:not(.editing):hover>rect {",
    "stroke: #fff;",
    "stroke-width: 2;",
    "}",
    a + " .blocklyHtmlInput {",
    "font-family: " + this.Fi + ";",
    "font-weight: " + this.Hi + ";",
    "}",
    a + " .blocklySelected>.blocklyPath {",
    "stroke: #fc3;",
    "stroke-width: 3px;",
    "}",
    a + " .blocklyHighlightedConnectionPath {",
    "stroke: #fc3;",
    "}",
    a + " .blocklyReplaceable .blocklyPath {",
    "fill-opacity: .5;",
    "}",
    a + " .blocklyReplaceable .blocklyPathLight,",
    a + " .blocklyReplaceable .blocklyPathDark {",
    "display: none;",
    "}",
    a + " .blocklyInsertionMarker>.blocklyPath {",
    "fill-opacity: " + this.wq + ";",
    "stroke: none;",
    "}",
  ];
};
g.h.vh = function (a, c, d, e) {
  var f = a ? a.u.id : void 0;
  e && e.qb() == g.G.types.Wc && (f = e.Fa.id);
  g.h.vh.v.constructor.call(this, f);
  this.pb = a ? a.id : null;
  this.XC = d;
  this.RC = e;
  this.Wg = c;
};
g.g.object.X(g.h.vh, g.h.Fe);
g.h.vh.prototype.type = g.h.yz;
g.h.vh.prototype.ya = function () {
  var a = g.h.vh.v.ya.call(this);
  a.isCursor = this.Wg;
  a.blockId = this.pb;
  a.oldNode = this.XC;
  a.newNode = this.RC;
  return a;
};
g.h.vh.prototype.ka = function (a) {
  g.h.vh.v.ka.call(this, a);
  this.Wg = a.isCursor;
  this.pb = a.blockId;
  this.XC = a.oldNode;
  this.RC = a.newNode;
};
g.C.register(g.C.aa.fc, g.h.yz, g.h.vh);
g.m.wh = function (a, c, d) {
  this.s = a;
  this.Sw = d;
  this.mi = null;
  this.B = c;
  this.mm = null;
  a = this.Wg() ? this.B.iq : this.B.zq;
  this.ld = d.Fb || a;
};
g.m.wh.JE = "blocklyCursor";
g.m.wh.iG = "blocklyMarker";
g.m.wh.CF = 0.75;
b = g.m.wh.prototype;
b.Pa = function () {
  return this.P;
};
b.$d = function () {
  return this.Sw;
};
b.Wg = function () {
  return "cursor" == this.Sw.type;
};
b.$a = function () {
  var a = this.Wg() ? g.m.wh.JE : g.m.wh.iG;
  this.P = g.g.o.M(g.g.F.xc, { class: a }, null);
  this.ji = g.g.o.M(g.g.F.xc, { width: this.B.kq, height: this.B.uA }, this.P);
  this.pj = g.g.o.M(
    g.g.F.Hc,
    { width: this.B.kq, height: this.B.uA, style: "display: none" },
    this.ji
  );
  this.Vk = g.g.o.M(
    g.g.F.Hc,
    { class: "blocklyVerticalMarker", rx: 10, ry: 10, style: "display: none" },
    this.ji
  );
  this.Uk = g.g.o.M(
    g.g.F.Od,
    { transform: "", style: "display: none" },
    this.ji
  );
  this.ii = g.g.o.M(
    g.g.F.Od,
    {
      transform: "",
      style: "display: none",
      fill: "none",
      "stroke-width": this.B.KE,
    },
    this.ji
  );
  this.Wg() &&
    ((a = {
      attributeType: "XML",
      attributeName: "fill",
      dur: "1s",
      values: this.ld + ";transparent;transparent;",
      repeatCount: "indefinite",
    }),
    g.g.o.M(g.g.F.kt, a, this.pj),
    g.g.o.M(g.g.F.kt, a, this.Uk),
    (a.attributeName = "stroke"),
    g.g.o.M(g.g.F.kt, a, this.ii));
  return this.P;
};
function Rc(a, c) {
  a.Wg()
    ? (a.mi && a.mi.pi(null), c.pi(a.Pa()))
    : (a.mi && a.mi.si(null), c.si(a.Pa()));
  a.mi = c;
}
b.draw = function (a, c) {
  if (c) {
    this.B = this.s.Mb.la();
    var d = this.Wg() ? this.B.iq : this.B.zq;
    this.ld = this.Sw.Fb || d;
    this.pj.setAttribute("fill", this.ld);
    this.Vk.setAttribute("stroke", this.ld);
    this.Uk.setAttribute("fill", this.ld);
    this.ii.setAttribute("stroke", this.ld);
    this.Wg() &&
      ((d = this.ld + ";transparent;transparent;"),
      this.pj.firstChild.setAttribute("values", d),
      this.Uk.firstChild.setAttribute("values", d),
      this.ii.firstChild.setAttribute("values", d));
    d = c.Fa;
    if (c.qb() == g.G.types.kc) Sc(this, c);
    else if (c.qb() == g.G.types.ck) Sc(this, c);
    else if (d.type == g.ob) {
      var e = c.Fa;
      d = e.Y();
      var f = e.al.x,
        h = e.al.y;
      e = g.g.D.moveTo(0, 0) + Ua(this.B, e).Cf;
      this.Uk.setAttribute("d", e);
      this.Uk.setAttribute(
        "transform",
        "translate(" + f + "," + h + ")" + (this.s.L ? " scale(-1 1)" : "")
      );
      this.mm = this.Uk;
      Rc(this, d);
      Tc(this);
    } else if (d.type == g.Cb)
      (h = c.Fa),
        (d = h.Y()),
        (f = 0),
        (h = h.al.y),
        (e = F(d).width),
        this.s.L && (f = -e),
        Uc(this, f, h, e),
        Rc(this, d),
        Tc(this);
    else if (c.qb() == g.G.types.Pd) Sc(this, c);
    else if (c.qb() == g.G.types.Gc)
      (d = c.Fa),
        (f = d.Xh().width),
        (h = d.Xh().height),
        Vc(this, 0, 0, f, h),
        Rc(this, d),
        Tc(this);
    else if (c.qb() == g.G.types.Wc)
      (f = c.ft),
        (d = f.x),
        (f = f.y),
        this.s.L && (d -= this.B.kq),
        Uc(this, d, f, this.B.kq),
        Rc(this, this.s),
        Tc(this);
    else if (c.qb() == g.G.types.tg) {
      d = c.Fa;
      h = F(d);
      f = h.width + this.B.jq;
      h = h.height + this.B.jq;
      var k = (e = -this.B.jq / 2),
        l = -this.B.jq / 2;
      this.s.L && (k = -(f + e));
      Vc(this, k, l, f, h);
      Rc(this, d);
      Tc(this);
    }
    d = c.Y();
    a = new g.h.vh(d, this.Wg(), a, c);
    g.h.Ha(a);
    a = this.mm.childNodes[0];
    void 0 !== a && a.beginElement && a.beginElement();
  } else this.Ja();
};
function Sc(a, c) {
  c = c.Y();
  var d = c.width,
    e = c.height,
    f = e * g.m.wh.CF,
    h = a.B.IE;
  if (c.ba) {
    var k = Ua(a.B, c.ba);
    e = k;
    d =
      g.g.D.moveBy(-h, f) +
      g.g.D.oa("V", -h) +
      g.g.D.oa("H", a.B.xn) +
      e.wj +
      g.g.D.oa("H", d + 2 * h) +
      g.g.D.oa("V", f);
    a.ii.setAttribute("d", d);
  } else
    c.O
      ? ((f = k = Ua(a.B, c.O)),
        (d =
          g.g.D.moveBy(d, 0) +
          g.g.D.oa("h", -(d - f.width)) +
          g.g.D.oa("v", a.B.Vl) +
          f.Cf +
          g.g.D.oa("V", e) +
          g.g.D.oa("H", d)),
        a.ii.setAttribute("d", d))
      : ((d =
          g.g.D.moveBy(-h, f) +
          g.g.D.oa("V", -h) +
          g.g.D.oa("H", d + 2 * h) +
          g.g.D.oa("V", f)),
        a.ii.setAttribute("d", d));
  a.s.L && a.ii.setAttribute("transform", "scale(-1 1)");
  a.mm = a.ii;
  Rc(a, c);
  Tc(a);
}
function Tc(a) {
  a.Ja();
  a.mm.style.display = "";
}
function Uc(a, c, d, e) {
  a.pj.setAttribute("x", c);
  a.pj.setAttribute("y", d);
  a.pj.setAttribute("width", e);
  a.mm = a.pj;
}
function Vc(a, c, d, e, f) {
  a.Vk.setAttribute("x", c);
  a.Vk.setAttribute("y", d);
  a.Vk.setAttribute("width", e);
  a.Vk.setAttribute("height", f);
  a.mm = a.Vk;
}
b.Ja = function () {
  this.pj.style.display = "none";
  this.Vk.style.display = "none";
  this.Uk.style.display = "none";
  this.ii.style.display = "none";
};
b.I = function () {
  this.P && g.g.o.removeNode(this.P);
};
g.m.A = {
  NONE: 0,
  Gc: 1,
  jz: 2,
  nz: 4,
  nu: 8,
  Iy: 16,
  sz: 32,
  $y: 64,
  cf: 128,
  oz: 256,
  cA: 512,
  FE: 1024,
  du: 2048,
  Wt: 4096,
  wG: 8192,
  At: 16384,
  Rt: 32768,
  Qt: 65536,
  ku: 131072,
  ju: 262144,
  wz: 524288,
  lu: 1048576,
  uu: 2097152,
  rt: 4194304,
  pz: 8388608,
};
g.m.A.SM = g.m.A.Rt | g.m.A.Qt;
g.m.A.$N = g.m.A.ku | g.m.A.ju;
g.m.A.bx = 16777216;
g.m.A.qb = function () {
  Object.prototype.hasOwnProperty.call(g.m.A, void 0) ||
    ((g.m.A[void 0] = g.m.A.bx), (g.m.A.bx <<= 1));
  return g.m.A[void 0];
};
g.m.A.di = function (a) {
  return a.type & g.m.A.Gc;
};
g.m.A.Qk = function (a) {
  return a.type & g.m.A.jz;
};
g.m.A.Cm = function (a) {
  return a.type & g.m.A.nz;
};
g.m.A.xf = function (a) {
  return a.type & g.m.A.nu;
};
g.m.A.JO = function (a) {
  return a.type & g.m.A.sz;
};
g.m.A.ij = function (a) {
  return a.type & g.m.A.cf;
};
g.m.A.Ko = function (a) {
  return a.type & g.m.A.$y;
};
g.m.A.hj = function (a) {
  return a.type & g.m.A.oz;
};
g.m.A.Sk = function (a) {
  return a.type & g.m.A.cA;
};
g.m.A.Hm = function (a) {
  return a.type & g.m.A.du;
};
g.m.A.kj = function (a) {
  return a.type & g.m.A.Wt;
};
g.m.A.oJ = function (a) {
  return a.type & (g.m.A.du | g.m.A.Wt);
};
g.m.A.jj = function (a) {
  return a.type & g.m.A.Qt;
};
g.m.A.xC = function (a) {
  return a.type & g.m.A.ju;
};
g.m.A.Lo = function (a) {
  return a.type & g.m.A.Rt;
};
g.m.A.KO = function (a) {
  return a.type & g.m.A.ku;
};
g.m.A.IO = function (a) {
  return a.type & g.m.A.At;
};
g.m.A.vC = function (a) {
  return a.type & g.m.A.wz;
};
g.m.A.MO = function (a) {
  return a.type & g.m.A.lu;
};
g.m.A.GO = function (a) {
  return a.type & g.m.A.Iy;
};
g.m.A.Xr = function (a) {
  return a.type & g.m.A.uu;
};
g.m.A.Rr = function (a) {
  return a.type & g.m.A.rt;
};
g.m.A.pJ = function (a) {
  return a.type & (g.m.A.uu | g.m.A.rt);
};
g.m.A.kJ = function (a) {
  return a.type & g.m.A.pz;
};
g.m.Ki = function (a) {
  this.height = this.width = 0;
  this.type = g.m.A.NONE;
  this.fm = this.Ya = 0;
  this.B = a;
  this.Af = this.B.xn;
};
g.m.Ca = function (a, c) {
  g.m.Ca.v.constructor.call(this, a);
  this.Vd = c;
  this.shape = Ua(this.B, c);
  this.Pk = !!this.shape.isDynamic;
  this.type |= g.m.A.FE;
};
g.g.object.X(g.m.Ca, g.m.Ki);
g.m.cu = function (a, c) {
  g.m.cu.v.constructor.call(this, a, c);
  this.type |= g.m.A.wG;
  this.height = this.Pk ? 0 : this.shape.height;
  this.Gf = this.width = this.Pk ? 0 : this.shape.width;
  this.Je = this.B.Vl;
  this.Wn = 0;
};
g.g.object.X(g.m.cu, g.m.Ca);
g.m.gu = function (a, c) {
  g.m.gu.v.constructor.call(this, a, c);
  this.type |= g.m.A.du;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.X(g.m.gu, g.m.Ca);
g.m.Yt = function (a, c) {
  g.m.Yt.v.constructor.call(this, a, c);
  this.type |= g.m.A.Wt;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.X(g.m.Yt, g.m.Ca);
g.m.rn = function (a, c) {
  g.m.rn.v.constructor.call(this, a, c.connection);
  this.type |= g.m.A.cf;
  this.input = c;
  this.align = c.align;
  (this.Wi = c.connection && c.connection.sa() ? c.connection.sa() : null)
    ? ((a = F(this.Wi)), (this.Un = a.width), (this.kr = a.height))
    : (this.kr = this.Un = 0);
  this.Je = this.Wn = 0;
};
g.g.object.X(g.m.rn, g.m.Ca);
g.m.Ii = function (a, c) {
  g.m.Ii.v.constructor.call(this, a, c);
  this.type |= g.m.A.oz;
  this.Wi
    ? ((this.width = this.Un), (this.height = this.kr))
    : ((this.height = this.B.YE), (this.width = this.B.ZE));
  this.hm = this.Pk ? this.shape.height(this.height) : this.shape.height;
  this.Fg = this.Pk ? this.shape.width(this.height) : this.shape.width;
  this.Wi || (this.width += this.Fg * (this.Pk ? 2 : 1));
  this.Je = this.Pk ? this.shape.Je(this.hm) : this.B.Vl;
  this.Wn = this.Pk ? this.shape.Wn(this.Fg) : 0;
};
g.g.object.X(g.m.Ii, g.m.rn);
g.m.Qi = function (a, c) {
  g.m.Qi.v.constructor.call(this, a, c);
  this.type |= g.m.A.cA;
  this.height = this.Wi ? this.kr + this.B.bA : this.B.$E;
  this.width = this.B.QG + this.shape.width;
};
g.g.object.X(g.m.Qi, g.m.rn);
g.m.oq = function (a, c) {
  g.m.oq.v.constructor.call(this, a, c);
  this.type |= g.m.A.$y;
  this.height = this.Wi ? this.kr - this.B.Vl - this.B.ef : this.shape.height;
  this.width = this.shape.width + this.B.eF;
  this.Je = this.B.Vl;
  this.hm = this.shape.height;
  this.Fg = this.shape.width;
};
g.g.object.X(g.m.oq, g.m.rn);
g.m.ne = function (a, c) {
  g.m.ne.v.constructor.call(this, a);
  this.icon = c;
  this.isVisible = c.isVisible();
  this.type |= g.m.A.nz;
  a = new g.g.ff(g.ne.prototype.Fq, g.ne.prototype.Fq - 2);
  this.height = a.height;
  this.width = a.width;
};
g.g.object.X(g.m.ne, g.m.Ki);
g.m.Pt = function (a) {
  g.m.Pt.v.constructor.call(this, a);
  this.type |= g.m.A.wz;
  this.height = this.B.Il.height;
  this.width = this.B.Il.width;
};
g.g.object.X(g.m.Pt, g.m.Ki);
g.m.Be = function (a, c) {
  g.m.Be.v.constructor.call(this, a);
  this.BB = c;
  this.fe = c.mq;
  this.rI = !1;
  this.type |= g.m.A.Gc;
  a = this.BB.Xh();
  this.height = a.height;
  this.width = a.width;
};
g.g.object.X(g.m.Be, g.m.Ki);
g.m.Jt = function (a) {
  g.m.Jt.v.constructor.call(this, a);
  this.type |= g.m.A.jz;
  this.height = this.B.Rl.height;
  this.width = this.B.Rl.width;
  this.bm = this.height;
};
g.g.object.X(g.m.Jt, g.m.Ki);
g.m.Ul = function (a, c) {
  g.m.Ul.v.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.A.ku : g.m.A.Rt) | g.m.A.At;
  this.width = this.height = this.B.sg;
};
g.g.object.X(g.m.Ul, g.m.Ki);
g.m.Eq = function (a, c) {
  g.m.Eq.v.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.A.ju : g.m.A.Qt) | g.m.A.At;
  this.width = this.B.Nb;
  this.height = this.B.Nb / 2;
};
g.g.object.X(g.m.Eq, g.m.Ki);
g.m.uh = function (a, c) {
  g.m.uh.v.constructor.call(this, a);
  this.type = this.type | g.m.A.nu | g.m.A.sz;
  this.width = c;
  this.height = this.B.MG;
};
g.g.object.X(g.m.uh, g.m.Ki);
g.m.ek = function (a) {
  this.type = g.m.A.lu;
  this.elements = [];
  this.Ya = this.Uc = this.lg = this.minWidth = this.minHeight = this.width = this.height = 0;
  this.gC = this.xm = this.jw = this.Ic = this.cj = !1;
  this.B = a;
  this.Af = this.B.xn;
  this.align = null;
};
g.m.ek.prototype.measure = function () {
  throw Error("Unexpected attempt to measure a base Row.");
};
function Wc(a) {
  for (var c = a.elements.length - 1, d; (d = a.elements[c]); c--)
    if (g.m.A.ij(d)) return d;
  return null;
}
g.m.ek.prototype.Vs = function () {
  return !0;
};
g.m.ek.prototype.mo = function () {
  return !0;
};
g.m.ik = function (a) {
  g.m.ik.v.constructor.call(this, a);
  this.type |= g.m.A.uu;
  this.bm = this.Kh = 0;
  this.ZI = !1;
  this.connection = null;
};
g.g.object.X(g.m.ik, g.m.ek);
g.m.ik.prototype.kw = function (a) {
  var c = (a.Tg ? "cap" === a.Tg : this.B.Tp) && !a.O && !a.ba,
    d = a.ba && a.ba.sa();
  return !!a.O || c || (d ? t(d) == a : !1);
};
g.m.ik.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.A.xf(f) ||
        (g.m.A.Qk(f) ? (d = Math.max(d, f.bm)) : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Kh = this.bm = d;
  this.lg = this.width;
};
g.m.ik.prototype.Vs = function () {
  return !1;
};
g.m.ik.prototype.mo = function () {
  return !1;
};
g.m.Qj = function (a) {
  g.m.Qj.v.constructor.call(this, a);
  this.type |= g.m.A.rt;
  this.hC = !1;
  this.connection = null;
  this.jf = this.co = 0;
};
g.g.object.X(g.m.Qj, g.m.ek);
g.m.Qj.prototype.kw = function (a) {
  return !!a.O || !!t(a);
};
g.m.Qj.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.A.xf(f) ||
        (g.m.A.kj(f)
          ? (d = Math.max(d, f.height))
          : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.co = d;
  this.lg = this.width;
};
g.m.Qj.prototype.Vs = function () {
  return !1;
};
g.m.Qj.prototype.mo = function () {
  return !1;
};
g.m.Gq = function (a, c, d) {
  g.m.Gq.v.constructor.call(this, a);
  this.type = this.type | g.m.A.nu | g.m.A.Iy;
  this.width = d;
  this.height = c;
  this.HB = !1;
  this.lg = 0;
  this.elements = [new g.m.uh(this.B, d)];
};
g.g.object.X(g.m.Gq, g.m.ek);
g.m.Gq.prototype.measure = function () {};
g.m.Hl = function (a) {
  g.m.Hl.v.constructor.call(this, a);
  this.type |= g.m.A.pz;
  this.XA = 0;
};
g.g.object.X(g.m.Hl, g.m.ek);
g.m.Hl.prototype.measure = function () {
  this.width = this.minWidth;
  this.height = this.minHeight;
  for (var a = 0, c = 0, d; (d = this.elements[c]); c++)
    (this.width += d.width),
      g.m.A.ij(d) &&
        (g.m.A.Sk(d)
          ? (a += d.Un)
          : g.m.A.Ko(d) && 0 != d.Un && (a += d.Un - d.Fg)),
      g.m.A.xf(d) || (this.height = Math.max(this.height, d.height));
  this.XA = a;
  this.lg = this.width + a;
};
g.m.Hl.prototype.mo = function () {
  return !this.cj && !this.Ic;
};
g.m.Rf = function (a, c) {
  this.U = c;
  this.Mb = a;
  this.B = this.Mb.la();
  this.O = c.O ? new g.m.cu(this.B, c.O) : null;
  this.Dm = Ma(c) && !c.isCollapsed();
  this.isCollapsed = c.isCollapsed();
  this.we = c.we();
  this.L = c.L;
  this.Ij = this.width = this.dn = this.height = 0;
  this.rows = [];
  this.qC = [];
  this.lC = [];
  this.Ec = new g.m.ik(this.B);
  this.Wb = new g.m.Qj(this.B);
  this.Us = this.Gf = 0;
};
b = g.m.Rf.prototype;
b.measure = function () {
  var a = !!this.U.ba,
    c = (this.U.Tg ? "cap" === this.U.Tg : this.B.Tp) && !this.O && !a;
  this.Ec.kw(this.U)
    ? this.Ec.elements.push(new g.m.Ul(this.B))
    : this.Ec.elements.push(new g.m.Eq(this.B));
  c
    ? ((a = new g.m.Jt(this.B)), this.Ec.elements.push(a), (this.Ec.Kh = a.bm))
    : a &&
      ((this.Ec.ZI = !0),
      (this.Ec.connection = new g.m.gu(this.B, this.U.ba)),
      this.Ec.elements.push(this.Ec.connection));
  this.U.V.length && this.U.V[0].type == g.Cb && !this.U.isCollapsed()
    ? (this.Ec.minHeight = this.B.YG)
    : (this.Ec.minHeight = this.B.XG);
  this.Ec.elements.push(new g.m.Ul(this.B, "right"));
  this.rows.push(this.Ec);
  a = new g.m.Hl(this.B);
  this.qC.push(a);
  var d = Va(this.U);
  if (d.length) {
    c = 0;
    for (var e; (e = d[c]); c++) {
      var f = new g.m.ne(this.B, e);
      this.isCollapsed && e.TA ? this.lC.push(f) : a.elements.push(f);
    }
  }
  e = null;
  for (c = 0; (d = this.U.V[c]); c++)
    if (d.isVisible()) {
      !e ||
        (d.type != g.Cb &&
          e.type != g.Cb &&
          ((d.type != g.ob && d.type != g.rh) || this.Dm)) ||
        (this.rows.push(a), (a = new g.m.Hl(this.B)), this.qC.push(a));
      for (e = 0; (f = d.kb[e]); e++) a.elements.push(new g.m.Be(this.B, f, d));
      this.DA(d, a);
      e = d;
    }
  this.isCollapsed && ((a.gC = !0), a.elements.push(new g.m.Pt(this.B)));
  (a.elements.length || a.xm) && this.rows.push(a);
  this.Cx();
  this.rows.push(this.Wb);
  this.CA();
  a = this.rows;
  this.rows = [];
  for (c = 0; c < a.length; c++)
    if ((this.rows.push(a[c]), c != a.length - 1)) {
      d = this.rows;
      e = d.push;
      f = a[c];
      var h = a[c + 1],
        k = new g.m.Gq(this.B, this.YB(f, h), this.width - this.Gf);
      f.Ic && (k.HB = !0);
      h.Ic && (k.SO = !0);
      e.call(d, k);
    }
  for (e = d = c = a = 0; (f = this.rows[e]); e++)
    f.measure(),
      (c = Math.max(c, f.width)),
      f.Ic && (a = Math.max(a, f.width - Wc(f).width)),
      (d = Math.max(d, f.lg));
  this.Ij = a;
  this.width = c;
  for (e = 0; (f = this.rows[e]); e++) f.Ic && (f.Ij = this.Ij);
  this.dn = Math.max(c, d);
  this.O &&
    ((this.Gf = this.O.width),
    (this.width += this.O.width),
    (this.dn += this.O.width));
  this.Eu();
  this.CB();
};
b.Cx = function () {
  this.Wb.hC = !!this.U.Z;
  this.Wb.minHeight =
    this.U.V.length && this.U.V[this.U.V.length - 1].type == g.Cb
      ? this.B.tE
      : this.B.uE;
  this.Wb.kw(this.U)
    ? this.Wb.elements.push(new g.m.Ul(this.B))
    : this.Wb.elements.push(new g.m.Eq(this.B));
  this.Wb.hC &&
    ((this.Wb.connection = new g.m.Yt(this.B, this.U.Z)),
    this.Wb.elements.push(this.Wb.connection));
  this.Wb.elements.push(new g.m.Ul(this.B, "right"));
};
b.DA = function (a, c) {
  this.Dm && a.type == g.ob
    ? (c.elements.push(new g.m.Ii(this.B, a)), (c.jw = !0))
    : a.type == g.Cb
    ? (c.elements.push(new g.m.Qi(this.B, a)), (c.Ic = !0))
    : a.type == g.ob
    ? (c.elements.push(new g.m.oq(this.B, a)), (c.cj = !0))
    : a.type == g.rh &&
      ((c.minHeight = Math.max(
        c.minHeight,
        a.Y() && a.Y().Qa ? this.B.WE : this.B.Yy
      )),
      (c.xm = !0));
  null == c.align && (c.align = a.align);
};
b.CA = function () {
  for (var a = 0, c; (c = this.rows[a]); a++) {
    var d = c.elements;
    c.elements = [];
    c.Vs() && c.elements.push(new g.m.uh(this.B, this.zk(null, d[0])));
    if (d.length) {
      for (var e = 0; e < d.length - 1; e++)
        c.elements.push(d[e]),
          c.elements.push(new g.m.uh(this.B, this.zk(d[e], d[e + 1])));
      c.elements.push(d[d.length - 1]);
      c.mo() &&
        c.elements.push(new g.m.uh(this.B, this.zk(d[d.length - 1], null)));
    }
  }
};
b.zk = function (a, c) {
  if (!a && c && g.m.A.Sk(c)) return this.B.dA;
  if (a && g.m.A.ij(a) && !c) {
    if (g.m.A.Ko(a)) return this.B.sg;
    if (g.m.A.hj(a)) return this.B.Kd;
    if (g.m.A.Sk(a)) return this.B.sg;
  }
  return a && g.m.A.Lo(a) && c && (g.m.A.Hm(c) || g.m.A.kj(c))
    ? c.Af
    : a && g.m.A.jj(a) && c && (g.m.A.Hm(c) || g.m.A.kj(c))
    ? c.Af - this.B.Nb
    : this.B.ef;
};
b.Eu = function () {
  for (var a = 0, c; (c = this.rows[a]); a++)
    if (c.Ic) Xc(this, c);
    else {
      var d = this.zo(c) - c.width;
      0 < d && Yc(c, d);
      g.m.A.pJ(c) && (c.lg = c.width);
    }
};
b.zo = function () {
  return this.width - this.Gf;
};
function Yc(a, c) {
  a: {
    var d = 0;
    for (var e; (e = a.elements[d]); d++)
      if (g.m.A.xf(e)) {
        d = e;
        break a;
      }
    d = null;
  }
  a: {
    e = a.elements.length - 1;
    for (var f; (f = a.elements[e]); e--)
      if (g.m.A.xf(f)) {
        e = f;
        break a;
      }
    e = null;
  }
  if (a.cj || a.Ic) a.lg += c;
  a.align == g.jt
    ? (e.width += c)
    : a.align == g.ht
    ? ((d.width += c / 2), (e.width += c / 2))
    : a.align == g.yl
    ? (d.width += c)
    : (e.width += c);
  a.width += c;
}
function Xc(a, c) {
  var d = Wc(c),
    e = c.width - d.width,
    f = a.Ij;
  e = f - e;
  0 < e && Yc(c, e);
  e = c.width;
  f = a.zo(c);
  d.width += f - e;
  d.height = Math.max(d.height, c.height);
  c.width += f - e;
  c.lg = Math.max(c.width, a.Ij + c.XA);
}
b.YB = function () {
  return this.B.ef;
};
b.PB = function (a, c) {
  return g.m.A.xf(c)
    ? a.Uc + c.height / 2
    : g.m.A.Rr(a)
    ? ((a = a.Uc + a.height - a.co),
      g.m.A.kj(c) ? a + c.height / 2 : a - c.height / 2)
    : g.m.A.Xr(a)
    ? g.m.A.Qk(c)
      ? a.Kh - c.height / 2
      : a.Kh + c.height / 2
    : a.Uc + a.height / 2;
};
function Zc(a, c) {
  for (var d = c.Ya, e = 0, f; (f = c.elements[e]); e++)
    g.m.A.xf(f) && (f.height = c.height),
      (f.Ya = d),
      (f.fm = a.PB(c, f)),
      (d += f.width);
}
b.CB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++)
    (e.Uc = c),
      (e.Ya = this.Gf),
      (c += e.height),
      (a = Math.max(a, e.lg)),
      Zc(this, e);
  this.O &&
    this.U.Z &&
    this.U.Z.isConnected() &&
    (a = Math.max(a, F(this.U.Z.sa()).width));
  this.dn = a + this.Gf;
  this.height = c;
  this.Us = this.Ec.Kh;
  this.Wb.jf = c - this.Wb.co;
};
g.m.Gd = function (a, c) {
  this.U = a;
  this.Ea = c;
  a.ab();
  this.Qr = this.hb = "";
  this.B = c.Mb.la();
};
b = g.m.Gd.prototype;
b.draw = function () {
  $c(this);
  ad(this);
  bd(this);
  this.U.Rb.Vx(this.hb + "\n" + this.Qr);
  this.Ea.L && this.U.Rb.Qv();
  g.m.Pp && this.U.Ox.jI(this.U, this.Ea);
  cd(this);
};
function cd(a) {
  a.U.height = a.Ea.height;
  a.U.width = a.Ea.dn;
}
function $c(a) {
  for (var c = 0, d; (d = a.Ea.lC[c]); c++)
    d.icon.ee.setAttribute("display", "none");
}
function ad(a) {
  a.Hv();
  for (var c = 1; c < a.Ea.rows.length - 1; c++) {
    var d = a.Ea.rows[c];
    d.gC ? a.jo(d) : d.Ic ? a.Gv(d) : d.cj ? a.Iv(d) : a.yB(d);
  }
  a.Cv();
  a.Fv();
}
b.Hv = function () {
  var a = this.Ea.Ec,
    c = a.elements,
    d = this.Ea.Ec;
  if (d.connection) {
    var e = d.Ya + d.Af;
    mc(d.connection.Vd, this.Ea.L ? -e : e, 0);
  }
  this.hb += g.g.D.moveBy(a.Ya, this.Ea.Us);
  for (d = 0; (e = c[d]); d++)
    g.m.A.jj(e)
      ? (this.hb += this.B.Cn.py)
      : g.m.A.xC(e)
      ? (this.hb += this.B.Cn.zL)
      : g.m.A.Hm(e)
      ? (this.hb += e.shape.wj)
      : g.m.A.Qk(e)
      ? (this.hb += this.B.Rl.path)
      : g.m.A.xf(e) && (this.hb += g.g.D.oa("h", e.width));
  this.hb += g.g.D.oa("v", a.height);
};
b.jo = function (a) {
  this.hb += this.B.Il.path + g.g.D.oa("v", a.height - this.B.Il.height);
};
b.Iv = function (a) {
  var c = Wc(a);
  this.lD(a);
  var d = "function" == typeof c.shape.Cf ? c.shape.Cf(c.height) : c.shape.Cf;
  this.hb += g.g.D.oa("H", c.Ya + c.width) + d + g.g.D.oa("v", a.height - c.hm);
};
b.Gv = function (a) {
  var c = Wc(a);
  this.hb +=
    g.g.D.oa("H", c.Ya + c.Af + c.shape.width) +
    (c.shape.iD + g.g.D.oa("h", -(c.Af - this.B.xq.width)) + this.B.xq.yx) +
    g.g.D.oa("v", a.height - 2 * this.B.xq.height) +
    this.B.xq.Ds +
    g.g.D.oa("H", a.Ya + a.width);
  this.oD(a);
};
b.yB = function (a) {
  this.hb += g.g.D.oa("V", a.Uc + a.height);
};
b.Cv = function () {
  var a = this.Ea.Wb,
    c = a.elements;
  this.nD();
  for (var d = 0, e = "", f = c.length - 1, h; (h = c[f]); f--)
    g.m.A.kj(h)
      ? (e += h.shape.iD)
      : g.m.A.Lo(h)
      ? (e += g.g.D.oa("H", a.Ya))
      : g.m.A.jj(h)
      ? (e += this.B.Cn.Nu)
      : g.m.A.xC(h)
      ? ((e += this.B.Cn.uH), (d = this.B.Cn.YK))
      : g.m.A.xf(h) && (e += g.g.D.oa("h", -1 * h.width));
  this.hb += g.g.D.oa("V", a.jf - d);
  this.hb += e;
};
b.Fv = function () {
  var a = this.Ea.O;
  if (this.Ea.O) {
    var c = this.Ea.Gf + this.Ea.O.Wn;
    mc(this.U.O, this.Ea.L ? -c : c, this.Ea.O.Je);
  }
  a &&
    ((c = a.Je + a.height),
    (a = "function" == typeof a.shape.ap ? a.shape.ap(a.height) : a.shape.ap),
    (this.hb += g.g.D.oa("V", c) + a));
  this.hb += "z";
};
function bd(a) {
  for (var c = 0, d; (d = a.Ea.rows[c]); c++)
    for (var e = 0, f; (f = d.elements[e]); e++)
      if (g.m.A.hj(f)) a.Ev(f);
      else if (g.m.A.Cm(f) || g.m.A.di(f)) {
        var h = a;
        if (g.m.A.di(f)) var k = f.BB.Pa();
        else g.m.A.Cm(f) && (k = f.icon.ee);
        var l = f.fm - f.height / 2,
          m = f.Ya,
          n = "";
        h.Ea.L &&
          ((m = -(m + f.width)), f.rI && ((m += f.width), (n = "scale(-1 1)")));
        g.m.A.Cm(f)
          ? (k.setAttribute("display", "block"),
            k.setAttribute("transform", "translate(" + m + "," + l + ")"),
            xc(f.icon))
          : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        h.Ea.we && k.setAttribute("display", "none");
      }
}
b.Ev = function (a) {
  var c = a.width,
    d = a.height,
    e = a.Je,
    f = a.hm + e;
  this.Qr +=
    g.g.D.moveTo(a.Ya + a.Fg, a.fm - d / 2) +
    g.g.D.oa("v", e) +
    a.shape.Cf +
    g.g.D.oa("v", d - f) +
    g.g.D.oa("h", c - a.Fg) +
    g.g.D.oa("v", -d) +
    "z";
  this.mD(a);
};
b.mD = function (a) {
  var c = a.fm - a.height / 2;
  if (a.Vd) {
    var d = a.Ya + a.Fg + a.Wn;
    this.Ea.L && (d *= -1);
    mc(a.Vd, d, c + a.Je);
  }
};
b.oD = function (a) {
  var c = Wc(a);
  if (c.Vd) {
    var d = a.Ya + a.Ij + c.Af;
    this.Ea.L && (d *= -1);
    mc(c.Vd, d, a.Uc);
  }
};
b.lD = function (a) {
  var c = Wc(a);
  if (c.Vd) {
    var d = a.Ya + a.width;
    this.Ea.L && (d *= -1);
    mc(c.Vd, d, a.Uc);
  }
};
b.nD = function () {
  var a = this.Ea.Wb;
  if (a.connection) {
    var c = a.connection,
      d = c.Ya;
    mc(c.Vd, this.Ea.L ? -d : d, a.jf);
  }
};
g.m.yh = function (a, c, d) {
  this.jm = d;
  this.jh = a;
  this.dc = g.g.o.M(g.g.F.Od, { class: "blocklyPath" }, this.jh);
  this.style = c;
  this.Rw = this.bo = null;
};
b = g.m.yh.prototype;
b.Vx = function (a) {
  this.dc.setAttribute("d", a);
};
b.Qv = function () {
  this.dc.setAttribute("transform", "scale(-1 1)");
};
b.pi = function (a) {
  a ? (this.jh.appendChild(a), (this.bo = a)) : (this.bo = null);
};
b.si = function (a) {
  a
    ? (this.bo ? this.jh.insertBefore(a, this.bo) : this.jh.appendChild(a),
      (this.Rw = a))
    : (this.Rw = null);
};
b.nc = function (a) {
  this.dc.setAttribute("stroke", this.style.Cg);
  this.dc.setAttribute("fill", this.style.Mh);
  this.YD(a.Qa);
  this.ty(!a.isEnabled() || $b(a));
};
b.cc = function (a) {
  this.style = a;
};
function Ta(a, c, d) {
  d ? g.g.o.Ga(a.jh, c) : g.g.o.jc(a.jh, c);
}
b.WD = function (a) {
  a
    ? this.dc.setAttribute("filter", "url(#" + this.jm.zr + ")")
    : this.dc.setAttribute("filter", "none");
};
b.YD = function (a) {
  a &&
    (this.dc.setAttribute("stroke", "none"),
    this.dc.setAttribute("fill", this.style.ir));
};
b.ty = function (a) {
  Ta(this, "blocklyDisabled", a);
  a && this.dc.setAttribute("fill", "url(#" + this.jm.tB + ")");
};
g.m.Ah = function (a) {
  this.name = a;
  this.ux = this.B = null;
};
b = g.m.Ah.prototype;
b.ag = function () {
  return this.name + "-renderer";
};
b.R = function (a, c) {
  this.B = this.Kw();
  c && ((this.ux = c), g.g.object.Re(this.B, c));
  this.B.up(a);
  this.B.R();
};
b.$a = function (a, c) {
  this.B.$a(a, this.name + "-" + c.name, "." + this.ag() + "." + c.ag());
};
b.Hx = function (a, c) {
  var d = this.la();
  d.I();
  this.B = this.Kw();
  this.ux && g.g.object.Re(this.B, this.ux);
  this.B.gp = d.gp;
  this.B.up(c);
  this.B.R();
  this.$a(a, c);
};
b.I = function () {
  this.B && this.B.I();
};
b.Kw = function () {
  return new g.m.qh();
};
b.HC = function (a) {
  return new g.m.Rf(this, a);
};
b.FC = function (a, c) {
  return new g.m.Gd(a, c);
};
b.GC = function (a, c) {
  return new g.m.yh(a, c, this.B);
};
b.la = function () {
  return this.B;
};
b.Ia = function (a) {
  if (g.m.Pp && !a.Ox) {
    if (!g.m.Zy)
      throw Error("Missing require for Blockly.blockRendering.Debug");
    var c = new g.m.Zy(this.la());
    a.Ox = c;
  }
  c = this.HC(a);
  c.measure();
  this.FC(a, c).draw();
};
g.ra = {};
g.ra.qh = function () {
  g.ra.qh.v.constructor.call(this);
  this.It = !1;
  this.gd = 1;
  this.jG = 30;
  this.bA = -this.Xt / 2;
};
g.g.object.X(g.ra.qh, g.m.qh);
g.ra.qh.prototype.Wv = function (a) {
  return g.ra.qh.v.Wv.call(this, a).concat([
    a + " .blocklyInsertionMarker>.blocklyPathLight,",
    a + " .blocklyInsertionMarker>.blocklyPathDark {",
    "fill-opacity: " + this.wq + ";",
    "stroke: none;",
    "}",
  ]);
};
g.ra.mz = function (a) {
  this.Ea = a;
  this.Ho = this.xa = "";
  this.hd = this.Ea.L;
  a = a.Mb;
  this.B = a.la();
  this.Oe = a.Oe;
  this.ue = this.Oe.OFFSET;
  this.tx = this.Oe.xG;
  this.zm = this.Oe.LF;
  this.fp = this.Oe.fu;
  this.PJ = this.Oe.Ml;
  this.pL = this.Oe.Rl;
  this.AC = this.Oe.Il;
};
g.ra.mz.prototype.jo = function (a) {
  this.Ea.L &&
    (this.xa +=
      this.AC.wj + g.g.D.oa("v", a.height - this.AC.height - this.ue));
};
function dd(a, c) {
  var d = c.Ya + c.width - a.ue;
  c.HB && (a.xa += g.g.D.oa("H", d));
  a.hd &&
    ((a.xa += g.g.D.oa("H", d)),
    c.height > a.ue && (a.xa += g.g.D.oa("V", c.Uc + c.height - a.ue)));
}
g.ra.Ii = function (a, c) {
  g.ra.Ii.v.constructor.call(this, a, c);
  this.Wi && ((this.width += this.B.gd), (this.height += this.B.gd));
};
g.g.object.X(g.ra.Ii, g.m.Ii);
g.ra.Qi = function (a, c) {
  g.ra.Qi.v.constructor.call(this, a, c);
  this.Wi && (this.height += this.B.gd);
};
g.g.object.X(g.ra.Qi, g.m.Qi);
g.ra.Rf = function (a, c) {
  g.ra.Rf.v.constructor.call(this, a, c);
};
g.g.object.X(g.ra.Rf, g.m.Rf);
b = g.ra.Rf.prototype;
b.Cx = function () {
  g.ra.Rf.v.Cx.call(this);
  (this.U.V.length && this.U.V[this.U.V.length - 1].type == g.Cb) ||
    (this.Wb.minHeight = this.B.ef - this.B.gd);
};
b.DA = function (a, c) {
  this.Dm && a.type == g.ob
    ? (c.elements.push(new g.ra.Ii(this.B, a)), (c.jw = !0))
    : a.type == g.Cb
    ? (c.elements.push(new g.ra.Qi(this.B, a)), (c.Ic = !0))
    : a.type == g.ob
    ? (c.elements.push(new g.m.oq(this.B, a)), (c.cj = !0))
    : a.type == g.rh &&
      ((c.minHeight = Math.max(c.minHeight, this.B.Yy)), (c.xm = !0));
  this.Dm || null != c.align || (c.align = a.align);
};
b.CA = function () {
  for (var a = !1, c = 0, d; (d = this.rows[c]); c++) d.cj && (a = !0);
  for (c = 0; (d = this.rows[c]); c++) {
    var e = d.elements;
    d.elements = [];
    d.Vs() && d.elements.push(new g.m.uh(this.B, this.zk(null, e[0])));
    if (e.length) {
      for (var f = 0; f < e.length - 1; f++) {
        d.elements.push(e[f]);
        var h = this.zk(e[f], e[f + 1]);
        d.elements.push(new g.m.uh(this.B, h));
      }
      d.elements.push(e[e.length - 1]);
      d.mo() &&
        ((h = this.zk(e[e.length - 1], null)),
        a && d.xm && (h += this.B.Hq),
        d.elements.push(new g.m.uh(this.B, h)));
    }
  }
};
b.zk = function (a, c) {
  if (!a)
    return c && g.m.A.di(c) && c.fe
      ? this.B.ef
      : c && g.m.A.hj(c)
      ? this.B.Bz
      : c && g.m.A.Sk(c)
      ? this.B.dA
      : this.B.Kd;
  if (!g.m.A.ij(a) && (!c || g.m.A.Sk(c)))
    return g.m.A.di(a) && a.fe
      ? this.B.ef
      : g.m.A.Cm(a)
      ? 2 * this.B.Kd + 1
      : g.m.A.Qk(a)
      ? this.B.sg
      : g.m.A.oJ(a)
      ? this.B.Kd
      : g.m.A.jj(a)
      ? this.B.mG
      : g.m.A.vC(a)
      ? this.B.sg
      : this.B.Kd;
  if (g.m.A.ij(a) && !c) {
    if (g.m.A.Ko(a)) return this.B.sg;
    if (g.m.A.hj(a)) return this.B.Kd;
    if (g.m.A.Sk(a)) return this.B.sg;
  }
  if (!g.m.A.ij(a) && c && g.m.A.ij(c)) {
    if (g.m.A.di(a) && a.fe) {
      if (g.m.A.hj(c) || g.m.A.Ko(c)) return this.B.KG;
    } else {
      if (g.m.A.hj(c) || g.m.A.Ko(c)) return this.B.Bz;
      if (g.m.A.Sk(c)) return this.B.Kd;
    }
    return this.B.Kd - 1;
  }
  if (g.m.A.Cm(a) && c && !g.m.A.ij(c)) return this.B.Kd;
  if (g.m.A.hj(a) && c && g.m.A.di(c)) return c.fe ? this.B.ef : this.B.Kd;
  if (g.m.A.Lo(a) && c) {
    if (g.m.A.Qk(c)) return this.B.sg;
    if (g.m.A.Hm(c)) return c.Af;
    if (g.m.A.kj(c)) return (a = ((this.L ? 1 : -1) * this.B.gd) / 2), c.Af + a;
  }
  if (g.m.A.jj(a) && c) {
    if (g.m.A.Hm(c)) return c.Af - this.B.Nb;
    if (g.m.A.kj(c))
      return (a = ((this.L ? 1 : -1) * this.B.gd) / 2), c.Af - this.B.Nb + a;
  }
  return (g.m.A.di(a) && c && g.m.A.di(c) && a.fe == c.fe) || (c && g.m.A.vC(c))
    ? this.B.Kd
    : this.B.ef;
};
b.YB = function (a, c) {
  return g.m.A.Xr(a) && g.m.A.Rr(c)
    ? this.B.XE
    : g.m.A.Xr(a) || g.m.A.Rr(c)
    ? this.B.sg
    : a.cj && c.cj
    ? this.B.Kd
    : !a.Ic && c.Ic
    ? this.B.qE
    : (a.Ic && c.Ic) || (!a.Ic && c.xm) || a.xm
    ? this.B.Kd
    : this.B.ef;
};
b.PB = function (a, c) {
  if (g.m.A.xf(c)) return a.Uc + c.height / 2;
  if (g.m.A.Rr(a))
    return (
      (a = a.Uc + a.height - a.co),
      g.m.A.kj(c) ? a + c.height / 2 : a - c.height / 2
    );
  if (g.m.A.Xr(a))
    return g.m.A.Qk(c) ? a.Kh - c.height / 2 : a.Kh + c.height / 2;
  var d = a.Uc;
  g.m.A.di(c) || g.m.A.Cm(c)
    ? ((d += c.height / 2),
      (a.jw || a.Ic) && c.height + this.B.eA <= a.height && (d += this.B.eA))
    : (d = g.m.A.hj(c) ? d + c.height / 2 : d + a.height / 2);
  return d;
};
b.Eu = function () {
  if (this.Dm) {
    for (
      var a = 0, c = null, d = this.rows.length - 1, e;
      (e = this.rows[d]);
      d--
    )
      (e.ax = a),
        g.m.A.kJ(e) &&
          (e.Ic && Xc(this, e),
          c && c.Ic && e.width < c.width ? (e.ax = c.width) : (a = e.width),
          (c = e));
    for (d = a = 0; (e = this.rows[d]); d++)
      e.Ic
        ? (a = this.zo(e))
        : g.m.A.xf(e)
        ? (e.width = Math.max(a, e.ax))
        : ((a = Math.max(a, e.ax) - e.width), 0 < a && Yc(e, a), (a = e.width));
  } else g.ra.Rf.v.Eu.call(this);
};
b.zo = function (a) {
  return this.Dm && a.Ic
    ? this.Ij + this.B.jG + this.Gf
    : g.ra.Rf.v.zo.call(this, a);
};
b.CB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++) {
    e.Uc = c;
    e.Ya = this.Gf;
    c += e.height;
    a = Math.max(a, e.lg);
    var f = c - this.Ec.bm;
    e == this.Wb &&
      f < this.B.un &&
      ((f = this.B.un - f), (this.Wb.height += f), (c += f));
    Zc(this, e);
  }
  this.O &&
    this.U.Z &&
    this.U.Z.isConnected() &&
    (a = Math.max(a, F(this.U.Z.sa()).width - this.B.gd));
  this.Wb.jf = c - this.Wb.co;
  this.dn = a + this.Gf + this.B.gd;
  this.width += this.B.gd;
  this.height = c + this.B.gd;
  this.Us = this.Ec.Kh;
};
g.ra.Gd = function (a, c) {
  g.ra.Gd.v.constructor.call(this, a, c);
  this.Ug = new g.ra.mz(c);
};
g.g.object.X(g.ra.Gd, g.m.Gd);
b = g.ra.Gd.prototype;
b.draw = function () {
  $c(this);
  ad(this);
  bd(this);
  var a = this.U.Rb;
  a.Vx(this.hb + "\n" + this.Qr);
  var c = this.Ug;
  a.ll.setAttribute("d", c.xa + "\n" + c.Ho);
  this.Ea.L && a.Qv();
  g.m.Pp && this.U.Ox.jI(this.U, this.Ea);
  cd(this);
};
b.Hv = function () {
  var a = this.Ug,
    c = this.Ea.Ec;
  a.xa += g.g.D.moveBy(c.Ya, a.Ea.Us);
  for (var d = 0, e; (e = c.elements[d]); d++)
    g.m.A.Lo(e)
      ? (a.xa += a.Oe.aA)
      : g.m.A.jj(e)
      ? (a.xa += a.tx.py(a.hd))
      : g.m.A.Hm(e)
      ? (a.xa += a.PJ.wj)
      : g.m.A.Qk(e)
      ? (a.xa += a.pL.path(a.hd))
      : g.m.A.xf(e) &&
        0 != e.width &&
        (a.xa += g.g.D.oa("H", e.Ya + e.width - a.ue));
  a.xa += g.g.D.oa("H", c.Ya + c.width - a.ue);
  dd(this.Ug, this.Ea.Ec);
  g.ra.Gd.v.Hv.call(this);
};
b.jo = function (a) {
  this.Ug.jo(a);
  g.ra.Gd.v.jo.call(this, a);
};
b.Iv = function (a) {
  var c = this.Ug,
    d = Wc(a);
  if (c.hd) {
    var e = a.height - d.hm;
    c.xa +=
      g.g.D.moveTo(d.Ya + d.width - c.ue, a.Uc) +
      c.fp.Cf(c.hd) +
      g.g.D.oa("v", e);
  } else c.xa += g.g.D.moveTo(d.Ya + d.width, a.Uc) + c.fp.Cf(c.hd);
  g.ra.Gd.v.Iv.call(this, a);
};
b.Gv = function (a) {
  var c = this.Ug,
    d = Wc(a);
  if (c.hd) {
    var e = a.height - 2 * c.zm.height;
    c.xa +=
      g.g.D.moveTo(d.Ya, a.Uc) +
      c.zm.yx(c.hd) +
      g.g.D.oa("v", e) +
      c.zm.Ds(c.hd) +
      g.g.D.lineTo(a.width - d.Ya - c.zm.width, 0);
  } else
    c.xa +=
      g.g.D.moveTo(d.Ya, a.Uc + a.height) +
      c.zm.Ds(c.hd) +
      g.g.D.lineTo(a.width - d.Ya - c.zm.width, 0);
  g.ra.Gd.v.Gv.call(this, a);
};
b.yB = function (a) {
  dd(this.Ug, a);
  this.hb += g.g.D.oa("H", a.Ya + a.width) + g.g.D.oa("V", a.Uc + a.height);
};
b.Cv = function () {
  var a = this.Ug,
    c = this.Ea.Wb;
  if (a.hd) a.xa += g.g.D.oa("V", c.jf - a.ue);
  else {
    var d = a.Ea.Wb.elements[0];
    g.m.A.Lo(d)
      ? (a.xa += g.g.D.moveTo(c.Ya + a.ue, c.jf - a.ue))
      : g.m.A.jj(d) &&
        ((a.xa += g.g.D.moveTo(c.Ya, c.jf)), (a.xa += a.tx.Nu()));
  }
  g.ra.Gd.v.Cv.call(this);
};
b.Fv = function () {
  var a = this.Ug,
    c = a.Ea.O;
  c &&
    ((c = c.Je + c.height),
    a.hd
      ? (a.xa += g.g.D.moveTo(a.Ea.Gf, c))
      : ((a.xa += g.g.D.moveTo(a.Ea.Gf + a.ue, a.Ea.Wb.jf - a.ue)),
        (a.xa += g.g.D.oa("V", c))),
    (a.xa += a.fp.ap(a.hd)));
  a.hd ||
    ((c = a.Ea.Ec),
    (a.xa = g.m.A.jj(c.elements[0])
      ? a.xa + g.g.D.oa("V", a.tx.height)
      : a.xa + g.g.D.oa("V", c.Kh + a.ue)));
  g.ra.Gd.v.Fv.call(this);
};
b.Ev = function (a) {
  var c = this.Ug,
    d = c.ue,
    e = a.Ya + a.Fg,
    f = a.fm - a.height / 2,
    h = a.width - a.Fg,
    k = f + d;
  if (c.hd) {
    f = a.Je - d;
    var l = a.height - (a.Je + a.hm) + d;
    c.Ho +=
      g.g.D.moveTo(e - d, k) +
      g.g.D.oa("v", f) +
      c.fp.Cf(c.hd) +
      g.g.D.oa("v", l) +
      g.g.D.oa("h", h);
  } else
    c.Ho +=
      g.g.D.moveTo(a.Ya + a.width + d, k) +
      g.g.D.oa("v", a.height) +
      g.g.D.oa("h", -h) +
      g.g.D.moveTo(e, f + a.Je) +
      c.fp.Cf(c.hd);
  g.ra.Gd.v.Ev.call(this, a);
};
b.mD = function (a) {
  var c = a.fm - a.height / 2;
  if (a.Vd) {
    var d = a.Ya + a.Fg + this.B.gd;
    this.Ea.L && (d *= -1);
    mc(a.Vd, d, c + a.Je + this.B.gd);
  }
};
b.oD = function (a) {
  var c = Wc(a);
  if (c.Vd) {
    var d = a.Ya + a.Ij + c.Af;
    d = this.Ea.L ? -1 * d : d + this.B.gd;
    mc(c.Vd, d, a.Uc + this.B.gd);
  }
};
b.lD = function (a) {
  var c = Wc(a);
  if (c.Vd) {
    var d = a.Ya + a.width + this.B.gd;
    this.Ea.L && (d *= -1);
    mc(c.Vd, d, a.Uc);
  }
};
b.nD = function () {
  var a = this.Ea.Wb;
  if (a.connection) {
    var c = a.connection,
      d = c.Ya;
    mc(c.Vd, (this.Ea.L ? -d : d) + this.B.gd / 2, a.jf + this.B.gd);
  }
};
g.ra.lz = function (a) {
  this.im = a;
  this.OFFSET = 0.5;
  this.aA = g.g.D.moveBy(this.OFFSET, this.OFFSET);
};
b = g.ra.lz.prototype;
b.R = function () {
  this.LF = ed(this);
  this.xG = fd(this);
  this.fu = this.Ow();
  this.Ml = this.Nw();
  this.Il = this.Mw();
  this.Rl = this.Pw();
};
function ed(a) {
  var c = a.im.Nb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c + a) - a,
    e =
      g.g.D.moveBy(d, d) + g.g.D.arc("a", "0 0,0", c, g.g.D.Xa(-d - a, c - d)),
    f = g.g.D.arc("a", "0 0,0", c + a, g.g.D.Xa(c + a, c + a)),
    h =
      g.g.D.moveBy(d, -d) +
      g.g.D.arc("a", "0 0,0", c + a, g.g.D.Xa(c - d, d + a));
  return {
    width: c + a,
    height: c,
    yx: function (k) {
      return k ? e : "";
    },
    Ds: function (k) {
      return k ? f : h;
    },
  };
}
function fd(a) {
  var c = a.im.Nb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c - a) + a,
    e =
      g.g.D.moveBy(d, d) +
      g.g.D.arc("a", "0 0,1", c - a, g.g.D.Xa(c - d, -d + a)),
    f =
      g.g.D.moveBy(a, c) + g.g.D.arc("a", "0 0,1", c - a, g.g.D.Xa(c, -c + a)),
    h = -d,
    k =
      g.g.D.moveBy(d, h) +
      g.g.D.arc("a", "0 0,1", c - a, g.g.D.Xa(-d + a, -h - c));
  return {
    height: c,
    py: function (l) {
      return l ? e : f;
    },
    Nu: function () {
      return k;
    },
  };
}
b.Ow = function () {
  var a = this.im.Hq,
    c = this.im.Hn,
    d = g.g.D.moveBy(-2, -c + 3.4) + g.g.D.lineTo(-0.45 * a, -2.1),
    e =
      g.g.D.oa("v", 2.5) +
      g.g.D.moveBy(0.97 * -a, 2.5) +
      g.g.D.curve("q", [g.g.D.Xa(0.05 * -a, 10), g.g.D.Xa(0.3 * a, 9.5)]) +
      g.g.D.moveBy(0.67 * a, -1.9) +
      g.g.D.oa("v", 2.5),
    f =
      g.g.D.oa("v", -1.5) +
      g.g.D.moveBy(-0.92 * a, -0.5) +
      g.g.D.curve("q", [g.g.D.Xa(-0.19 * a, -5.5), g.g.D.Xa(0, -11)]) +
      g.g.D.moveBy(0.92 * a, 1),
    h = g.g.D.moveBy(-5, c - 0.7) + g.g.D.lineTo(0.46 * a, -2.1);
  return {
    width: a,
    height: c,
    ap: function (k) {
      return k ? d : f;
    },
    Cf: function (k) {
      return k ? e : h;
    },
  };
};
b.Nw = function () {
  return { wj: g.g.D.oa("h", this.OFFSET) + this.im.Ml.wj };
};
b.Mw = function () {
  return {
    wj:
      g.g.D.lineTo(5.1, 2.6) +
      g.g.D.moveBy(-10.2, 6.8) +
      g.g.D.lineTo(5.1, 2.6),
    height: 12,
    width: 10.2,
  };
};
b.Pw = function () {
  var a = this.im.Rl.height,
    c =
      g.g.D.moveBy(25, -8.7) +
      g.g.D.curve("c", [
        g.g.D.Xa(29.7, -6.2),
        g.g.D.Xa(57.2, -0.5),
        g.g.D.Xa(75, 8.7),
      ]),
    d =
      g.g.D.curve("c", [
        g.g.D.Xa(17.8, -9.2),
        g.g.D.Xa(45.3, -14.9),
        g.g.D.Xa(75, -8.7),
      ]) + g.g.D.moveTo(100.5, a + 0.5);
  return {
    path: function (e) {
      return e ? c : d;
    },
  };
};
g.ra.yh = function (a, c, d) {
  this.jm = d;
  this.jh = a;
  this.Gp = g.g.o.M(
    g.g.F.Od,
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.jh
  );
  this.dc = g.g.o.M(g.g.F.Od, { class: "blocklyPath" }, this.jh);
  this.ll = g.g.o.M(g.g.F.Od, { class: "blocklyPathLight" }, this.jh);
  this.Zu = "#000000";
  this.style = c;
};
g.g.object.X(g.ra.yh, g.m.yh);
b = g.ra.yh.prototype;
b.Vx = function (a) {
  this.dc.setAttribute("d", a);
  this.Gp.setAttribute("d", a);
};
b.Qv = function () {
  this.dc.setAttribute("transform", "scale(-1 1)");
  this.ll.setAttribute("transform", "scale(-1 1)");
  this.Gp.setAttribute("transform", "translate(1,1) scale(-1 1)");
};
b.nc = function (a) {
  this.ll.style.display = "";
  this.Gp.style.display = "";
  this.ll.setAttribute("stroke", this.style.Cg);
  this.Gp.setAttribute("fill", this.Zu);
  g.ra.yh.v.nc.call(this, a);
  this.dc.setAttribute("stroke", "none");
};
b.cc = function (a) {
  this.style = a;
  this.Zu = g.g.Fb.Ku("#000", this.style.Mh, 0.2) || this.Zu;
};
b.WD = function (a) {
  a
    ? (this.dc.setAttribute("filter", "url(#" + this.jm.zr + ")"),
      (this.ll.style.display = "none"))
    : (this.dc.setAttribute("filter", "none"),
      (this.ll.style.display = "inline"));
};
b.YD = function (a) {
  a &&
    ((this.ll.style.display = "none"),
    this.Gp.setAttribute("fill", this.style.ir),
    this.dc.setAttribute("stroke", "none"),
    this.dc.setAttribute("fill", this.style.ir));
};
b.ty = function (a) {
  g.ra.yh.v.ty.call(this, a);
  a && this.dc.setAttribute("stroke", "none");
};
g.ra.Ah = function (a) {
  g.ra.Ah.v.constructor.call(this, a);
  this.Oe = null;
};
g.g.object.X(g.ra.Ah, g.m.Ah);
b = g.ra.Ah.prototype;
b.R = function (a, c) {
  g.ra.Ah.v.R.call(this, a, c);
  this.Oe = new g.ra.lz(this.la());
  this.Oe.R();
};
b.Hx = function (a, c) {
  g.ra.Ah.v.Hx.call(this, a, c);
  this.Oe.R();
};
b.Kw = function () {
  return new g.ra.qh();
};
b.HC = function (a) {
  return new g.ra.Rf(this, a);
};
b.FC = function (a, c) {
  return new g.ra.Gd(a, c);
};
b.GC = function (a, c) {
  return new g.ra.yh(a, c, this.la());
};
g.m.register("geras", g.ra.Ah);
var gd = {
    ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
    "be-tarask": "Tara\u0161kievica",
    bg:
      "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
    bn: "\u09ac\u09be\u0982\u09b2\u09be",
    br: "Brezhoneg",
    cs: "\u010cesky",
    da: "Dansk",
    de: "Deutsch",
    el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    en: "English",
    eo: "Esperanto",
    es: "Espa\u00f1ol",
    eu: "Euskara",
    fa: "\u0641\u0627\u0631\u0633\u06cc",
    fi: "Suomi",
    fo: "F\u00f8royskt",
    fr: "Fran\u00e7ais",
    gl: "Galego",
    ha: "Hausa",
    he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
    hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
    hu: "Magyar",
    hy: "\u0570\u0561\u0575\u0565\u0580\u0567\u0576",
    ia: "Interlingua",
    id: "Bahasa Indonesia",
    ig: "As\u1ee5s\u1ee5 Igbo",
    is: "\u00cdslenska",
    it: "Italiano",
    ja: "\u65e5\u672c\u8a9e",
    kab: "Taqbaylit",
    ko: "\ud55c\uad6d\uc5b4",
    lt: "Lietuvi\u0173",
    lv: "Latvie\u0161u",
    ms: "Bahasa Melayu",
    my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
    nb: "Norsk Bokm\u00e5l",
    nl: "Nederlands, Vlaams",
    pl: "Polski",
    pms: "Piemont\u00e8is",
    pt: "Portugu\u00eas",
    "pt-br": "Portugu\u00eas Brasileiro",
    ro: "Rom\u00e2n\u0103",
    ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
    sc: "Sardu",
    sk: "Sloven\u010dina",
    sl: "Sloven\u0161\u010dina",
    sq: "Shqip",
    sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
    sv: "Svenska",
    th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
    ti: "\u1275\u130d\u122d\u129b",
    tr: "T\u00fcrk\u00e7e",
    uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
    ur: "\u0627\u064f\u0631\u062f\u064f\u0648\u202c",
    vi: "Ti\u1ebfng Vi\u1ec7t",
    yo: "\u00c8d\u00e8 Yor\u00f9b\u00e1",
    "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
    "zh-hant": "\u6b63\u9ad4\u4e2d\u6587",
  },
  hd = "ace ar fa he mzn ps ur".split(" "),
  id = window.BlocklyGamesLang,
  jd = window.BlocklyGamesLanguages,
  kd = /\.html$/.test(window.location.pathname),
  ld,
  md = Number,
  nd,
  od = window.location.search.match(/[?&]level=([^&]+)/);
nd = od ? decodeURIComponent(od[1].replace(/\+/g, "%20")) : "NaN";
var pd = md(nd);
ld = isNaN(pd) ? 1 : g.g.Ra.Bg(1, pd, 10);
function qd() {
  document.title = document.getElementById("title").textContent;
  document.dir = -1 != hd.indexOf(id) ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", id);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var c = [], d = 0; d < jd.length; d++) {
      var e = jd[d];
      c.push([gd[e], e]);
    }
    c.sort(function (h, k) {
      return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0;
    });
    for (d = a.options.length = 0; d < c.length; d++) {
      var f = c[d];
      e = f[1];
      f = new Option(f[0], e);
      e == id && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (d = 1; 10 >= d; d++)
    (a = document.getElementById("level" + d)),
      (c = !!rd(d)),
      a && c && (a.className += " level_done");
  (d = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(sd, 1);
}
function rd(a) {
  var c = td;
  try {
    var d = window.localStorage[c + a];
  } catch (e) {}
  return d;
}
function R(a) {
  var c;
  (c = document.getElementById(a))
    ? ((c = c.textContent), (c = c.replace(/\\n/g, "\n")))
    : (c = null);
  return null === c ? "[Unknown message: " + a + "]" : c;
}
function ud(a, c) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", c, !0);
  a.addEventListener("touchend", c, !0);
}
function vd(a) {
  a %= 360;
  0 > a && (a += 360);
  return a;
}
function sd() {
  if (!kd) {
    window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
    var a = function (d) {
      (a.q = a.q || []).push(arguments);
    };
    window.GoogleAnalyticsFunction = a;
    a.l = 1 * new Date();
    var c = document.createElement("script");
    c.async = 1;
    c.src = "//www.google-analytics.com/analytics.js";
    document.head.appendChild(c);
    a("create", "UA-50448074-1", "auto");
    a("send", "pageview");
  }
}
g.i.ADD_COMMENT = "Add Comment";
g.i.CANNOT_DELETE_VARIABLE_PROCEDURE =
  "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
g.i.CHANGE_VALUE_TITLE = "Change value:";
g.i.CLEAN_UP = "Clean up Blocks";
g.i.COLLAPSED_WARNINGS_WARNING = "Collapsed blocks contain warnings.";
g.i.COLLAPSE_ALL = "Collapse Blocks";
g.i.COLLAPSE_BLOCK = "Collapse Block";
g.i.CONTROLS_FLOW_STATEMENTS_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =
  "continue with next iteration of loop";
g.i.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK =
  "Break out of the containing loop.";
g.i.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =
  "Skip the rest of this loop, and continue with the next iteration.";
g.i.CONTROLS_FLOW_STATEMENTS_WARNING =
  "Warning: This block may only be used within a loop.";
g.i.CONTROLS_FOREACH_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#for-each";
g.i.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
g.i.CONTROLS_FOREACH_TOOLTIP =
  "For each item in a list, set the variable '%1' to the item, and then do some statements.";
g.i.CONTROLS_FOR_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#count-with";
g.i.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
g.i.CONTROLS_FOR_TOOLTIP =
  "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
g.i.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
g.i.CONTROLS_IF_ELSE_TOOLTIP =
  "Add a final, catch-all condition to the if block.";
g.i.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
g.i.CONTROLS_IF_IF_TOOLTIP =
  "Add, remove, or reorder sections to reconfigure this if block.";
g.i.CONTROLS_IF_MSG_ELSE = "else";
g.i.CONTROLS_IF_MSG_ELSEIF = "else if";
g.i.CONTROLS_IF_MSG_IF = "if";
g.i.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
g.i.CONTROLS_IF_TOOLTIP_2 =
  "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
g.i.CONTROLS_IF_TOOLTIP_3 =
  "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
g.i.CONTROLS_IF_TOOLTIP_4 =
  "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
g.i.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
g.i.CONTROLS_REPEAT_INPUT_DO = "do";
g.i.CONTROLS_REPEAT_TITLE = "repeat %1 times";
g.i.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
g.i.CONTROLS_WHILEUNTIL_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#repeat";
g.i.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
g.i.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
g.i.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =
  "While a value is false, then do some statements.";
g.i.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =
  "While a value is true, then do some statements.";
g.i.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
g.i.DELETE_BLOCK = "Delete Block";
g.i.DELETE_VARIABLE = "Delete the '%1' variable";
g.i.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
g.i.DELETE_X_BLOCKS = "Delete %1 Blocks";
g.i.DISABLE_BLOCK = "Disable Block";
g.i.DUPLICATE_BLOCK = "Duplicate";
g.i.DUPLICATE_COMMENT = "Duplicate Comment";
g.i.ENABLE_BLOCK = "Enable Block";
g.i.EXPAND_ALL = "Expand Blocks";
g.i.EXPAND_BLOCK = "Expand Block";
g.i.EXTERNAL_INPUTS = "External Inputs";
g.i.HELP = "Help";
g.i.INLINE_INPUTS = "Inline Inputs";
g.i.LISTS_CREATE_EMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-empty-list";
g.i.LISTS_CREATE_EMPTY_TITLE = "create empty list";
g.i.LISTS_CREATE_EMPTY_TOOLTIP =
  "Returns a list, of length 0, containing no data records";
g.i.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
g.i.LISTS_CREATE_WITH_CONTAINER_TOOLTIP =
  "Add, remove, or reorder sections to reconfigure this list block.";
g.i.LISTS_CREATE_WITH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.i.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
g.i.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
g.i.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
g.i.LISTS_GET_INDEX_FIRST = "first";
g.i.LISTS_GET_INDEX_FROM_END = "# from end";
g.i.LISTS_GET_INDEX_FROM_START = "#";
g.i.LISTS_GET_INDEX_GET = "get";
g.i.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
g.i.LISTS_GET_INDEX_LAST = "last";
g.i.LISTS_GET_INDEX_RANDOM = "random";
g.i.LISTS_GET_INDEX_REMOVE = "remove";
g.i.LISTS_GET_INDEX_TAIL = "";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM =
  "Returns the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST =
  "Removes and returns the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM =
  "Removes and returns the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST =
  "Removes and returns the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM =
  "Removes and returns a random item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM =
  "Removes the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
g.i.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
g.i.LISTS_GET_SUBLIST_END_FROM_START = "to #";
g.i.LISTS_GET_SUBLIST_END_LAST = "to last";
g.i.LISTS_GET_SUBLIST_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
g.i.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
g.i.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
g.i.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
g.i.LISTS_GET_SUBLIST_TAIL = "";
g.i.LISTS_GET_SUBLIST_TOOLTIP =
  "Creates a copy of the specified portion of a list.";
g.i.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.";
g.i.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.";
g.i.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
g.i.LISTS_INDEX_OF_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
g.i.LISTS_INDEX_OF_LAST = "find last occurrence of item";
g.i.LISTS_INDEX_OF_TOOLTIP =
  "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
g.i.LISTS_INLIST = "in list";
g.i.LISTS_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#is-empty";
g.i.LISTS_ISEMPTY_TITLE = "%1 is empty";
g.i.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
g.i.LISTS_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#length-of";
g.i.LISTS_LENGTH_TITLE = "length of %1";
g.i.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
g.i.LISTS_REPEAT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.i.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
g.i.LISTS_REPEAT_TOOLTIP =
  "Creates a list consisting of the given value repeated the specified number of times.";
g.i.LISTS_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
g.i.LISTS_REVERSE_MESSAGE0 = "reverse %1";
g.i.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
g.i.LISTS_SET_INDEX_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#in-list--set";
g.i.LISTS_SET_INDEX_INPUT_TO = "as";
g.i.LISTS_SET_INDEX_INSERT = "insert at";
g.i.LISTS_SET_INDEX_SET = "set";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST =
  "Inserts the item at the start of a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM =
  "Inserts the item at the specified position in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST =
  "Append the item to the end of a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM =
  "Inserts the item randomly in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM =
  "Sets the item at the specified position in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
g.i.LISTS_SORT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
g.i.LISTS_SORT_ORDER_ASCENDING = "ascending";
g.i.LISTS_SORT_ORDER_DESCENDING = "descending";
g.i.LISTS_SORT_TITLE = "sort %1 %2 %3";
g.i.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";
g.i.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";
g.i.LISTS_SORT_TYPE_NUMERIC = "numeric";
g.i.LISTS_SORT_TYPE_TEXT = "alphabetic";
g.i.LISTS_SPLIT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
g.i.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
g.i.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
g.i.LISTS_SPLIT_TOOLTIP_JOIN =
  "Join a list of texts into one text, separated by a delimiter.";
g.i.LISTS_SPLIT_TOOLTIP_SPLIT =
  "Split text into a list of texts, breaking at each delimiter.";
g.i.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
g.i.LOGIC_BOOLEAN_FALSE = "false";
g.i.LOGIC_BOOLEAN_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#values";
g.i.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
g.i.LOGIC_BOOLEAN_TRUE = "true";
g.i.LOGIC_COMPARE_HELPURL =
  "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
g.i.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
g.i.LOGIC_COMPARE_TOOLTIP_GT =
  "Return true if the first input is greater than the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_GTE =
  "Return true if the first input is greater than or equal to the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_LT =
  "Return true if the first input is smaller than the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_LTE =
  "Return true if the first input is smaller than or equal to the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_NEQ =
  "Return true if both inputs are not equal to each other.";
g.i.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
g.i.LOGIC_NEGATE_TITLE = "not %1";
g.i.LOGIC_NEGATE_TOOLTIP =
  "Returns true if the input is false. Returns false if the input is true.";
g.i.LOGIC_NULL = "null";
g.i.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
g.i.LOGIC_NULL_TOOLTIP = "Returns null.";
g.i.LOGIC_OPERATION_AND = "and";
g.i.LOGIC_OPERATION_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#logical-operations";
g.i.LOGIC_OPERATION_OR = "or";
g.i.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
g.i.LOGIC_OPERATION_TOOLTIP_OR =
  "Return true if at least one of the inputs is true.";
g.i.LOGIC_TERNARY_CONDITION = "test";
g.i.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
g.i.LOGIC_TERNARY_IF_FALSE = "if false";
g.i.LOGIC_TERNARY_IF_TRUE = "if true";
g.i.LOGIC_TERNARY_TOOLTIP =
  "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
g.i.MATH_ADDITION_SYMBOL = "+";
g.i.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
g.i.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_POWER =
  "Return the first number raised to the power of the second number.";
g.i.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2";
g.i.MATH_ATAN2_TITLE = "atan2 of X:%1 Y:%2";
g.i.MATH_ATAN2_TOOLTIP =
  "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
g.i.MATH_CHANGE_HELPURL =
  "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
g.i.MATH_CHANGE_TITLE = "change %1 by %2";
g.i.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
g.i.MATH_CONSTANT_HELPURL =
  "https://en.wikipedia.org/wiki/Mathematical_constant";
g.i.MATH_CONSTANT_TOOLTIP =
  "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
g.i.MATH_CONSTRAIN_HELPURL =
  "https://en.wikipedia.org/wiki/Clamping_(graphics)";
g.i.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
g.i.MATH_CONSTRAIN_TOOLTIP =
  "Constrain a number to be between the specified limits (inclusive).";
g.i.MATH_DIVISION_SYMBOL = "\u00f7";
g.i.MATH_IS_DIVISIBLE_BY = "is divisible by";
g.i.MATH_IS_EVEN = "is even";
g.i.MATH_IS_NEGATIVE = "is negative";
g.i.MATH_IS_ODD = "is odd";
g.i.MATH_IS_POSITIVE = "is positive";
g.i.MATH_IS_PRIME = "is prime";
g.i.MATH_IS_TOOLTIP =
  "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
g.i.MATH_IS_WHOLE = "is whole";
g.i.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
g.i.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
g.i.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
g.i.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
g.i.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
g.i.MATH_NUMBER_TOOLTIP = "A number.";
g.i.MATH_ONLIST_HELPURL = "";
g.i.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
g.i.MATH_ONLIST_OPERATOR_MAX = "max of list";
g.i.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
g.i.MATH_ONLIST_OPERATOR_MIN = "min of list";
g.i.MATH_ONLIST_OPERATOR_MODE = "modes of list";
g.i.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
g.i.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
g.i.MATH_ONLIST_OPERATOR_SUM = "sum of list";
g.i.MATH_ONLIST_TOOLTIP_AVERAGE =
  "Return the average (arithmetic mean) of the numeric values in the list.";
g.i.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MODE =
  "Return a list of the most common item(s) in the list.";
g.i.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
g.i.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
g.i.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
g.i.MATH_POWER_SYMBOL = "^";
g.i.MATH_RANDOM_FLOAT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.i.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
g.i.MATH_RANDOM_FLOAT_TOOLTIP =
  "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
g.i.MATH_RANDOM_INT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.i.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
g.i.MATH_RANDOM_INT_TOOLTIP =
  "Return a random integer between the two specified limits, inclusive.";
g.i.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
g.i.MATH_ROUND_OPERATOR_ROUND = "round";
g.i.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
g.i.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
g.i.MATH_ROUND_TOOLTIP = "Round a number up or down.";
g.i.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
g.i.MATH_SINGLE_OP_ABSOLUTE = "absolute";
g.i.MATH_SINGLE_OP_ROOT = "square root";
g.i.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
g.i.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
g.i.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
g.i.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
g.i.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
g.i.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
g.i.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
g.i.MATH_SUBTRACTION_SYMBOL = "-";
g.i.MATH_TRIG_ACOS = "acos";
g.i.MATH_TRIG_ASIN = "asin";
g.i.MATH_TRIG_ATAN = "atan";
g.i.MATH_TRIG_COS = "cos";
g.i.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
g.i.MATH_TRIG_SIN = "sin";
g.i.MATH_TRIG_TAN = "tan";
g.i.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
g.i.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
g.i.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
g.i.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
g.i.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
g.i.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
g.i.NEW_VARIABLE = "Create variable...";
g.i.NEW_VARIABLE_TITLE = "New variable name:";
g.i.ORDINAL_NUMBER_SUFFIX = "";
g.i.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
g.i.PROCEDURES_BEFORE_PARAMS = "with:";
g.i.PROCEDURES_CALLNORETURN_HELPURL =
  "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
g.i.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_CALLRETURN_TOOLTIP =
  "Run the user-defined function '%1' and use its output.";
g.i.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
g.i.PROCEDURES_CREATE_DO = "Create '%1'";
g.i.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
g.i.PROCEDURES_DEFNORETURN_DO = "";
g.i.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
g.i.PROCEDURES_DEFNORETURN_TITLE = "to";
g.i.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
g.i.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_DEFRETURN_RETURN = "return";
g.i.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
g.i.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
g.i.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
g.i.PROCEDURES_IFRETURN_TOOLTIP =
  "If a value is true, then return a second value.";
g.i.PROCEDURES_IFRETURN_WARNING =
  "Warning: This block may be used only within a function definition.";
g.i.PROCEDURES_MUTATORARG_TITLE = "input name:";
g.i.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
g.i.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
g.i.PROCEDURES_MUTATORCONTAINER_TOOLTIP =
  "Add, remove, or reorder inputs to this function.";
g.i.REDO = "Redo";
g.i.REMOVE_COMMENT = "Remove Comment";
g.i.RENAME_VARIABLE = "Rename variable...";
g.i.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
g.i.UNDO = "Undo";
g.i.UNNAMED_KEY = "unnamed";
g.i.VARIABLES_DEFAULT_NAME = "item";
g.i.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
g.i.VARIABLES_GET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#get";
g.i.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
g.i.VARIABLES_SET = "set %1 to %2";
g.i.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
g.i.VARIABLES_SET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#set";
g.i.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
g.i.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "A variable named '%1' already exists for another type: '%2'.";
g.i.WORKSPACE_ARIA_LABEL = "Blockly Workspace";
g.i.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
g.i.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = g.i.CONTROLS_IF_MSG_ELSEIF;
g.i.CONTROLS_IF_ELSE_TITLE_ELSE = g.i.CONTROLS_IF_MSG_ELSE;
g.i.CONTROLS_IF_IF_TITLE_IF = g.i.CONTROLS_IF_MSG_IF;
g.i.CONTROLS_IF_MSG_THEN = g.i.CONTROLS_REPEAT_INPUT_DO;
g.i.LISTS_CREATE_WITH_ITEM_TITLE = g.i.VARIABLES_DEFAULT_NAME;
g.i.LISTS_GET_INDEX_HELPURL = g.i.LISTS_INDEX_OF_HELPURL;
g.i.LISTS_GET_INDEX_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_GET_SUBLIST_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_INDEX_OF_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_SET_INDEX_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.MATH_CHANGE_TITLE_ITEM = g.i.VARIABLES_DEFAULT_NAME;
g.i.PROCEDURES_DEFRETURN_COMMENT = g.i.PROCEDURES_DEFNORETURN_COMMENT;
g.i.PROCEDURES_DEFRETURN_PROCEDURE = g.i.PROCEDURES_DEFNORETURN_PROCEDURE;
g.i.PROCEDURES_DEFRETURN_TITLE = g.i.PROCEDURES_DEFNORETURN_TITLE;
g.i.MATH_HUE = "230";
g.i.LOOPS_HUE = "120";
g.i.LISTS_HUE = "260";
g.i.LOGIC_HUE = "210";
g.i.VARIABLES_HUE = "330";
g.i.PROCEDURES_HUE = "290";
var BlocklyStorage = {},
  wd = null,
  xd = null;
function yd() {
  var a = wd();
  zd("xml=" + encodeURIComponent(a));
}
var Ad = {};
function zd(a) {
  var c = Bd;
  Ad["/storage"] && Ad["/storage"].abort();
  Ad["/storage"] = new XMLHttpRequest();
  Ad["/storage"].onload = function () {
    200 === this.status
      ? c && c.call(this)
      : Cd(R("Games_httpRequestError") + "\nXHR status: " + this.status);
    Ad["/storage"] = null;
  };
  Ad["/storage"].open("POST", "/storage");
  Ad["/storage"].setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  Ad["/storage"].send(a);
}
function Bd() {
  window.location.hash = this.responseText.trim();
  Cd(R("Games_linkAlert").replace("%1", window.location.href));
  xd = wd();
}
function Cd(a) {
  if ("object" === typeof S) {
    var c = document.getElementById("linkButton");
    S.sL(c, a);
  } else alert(a);
}
var A = null,
  Dd = null,
  Ed = !1;
function Fd() {
  qd();
  var a = document.getElementById("linkButton");
  a && (kd ? (a.style.display = "none") : ((wd = Gd), ud(a, yd)));
  (a = document.getElementById("languageMenu")) &&
    a.addEventListener("change", Hd, !0);
}
function Gd() {
  if (Ed) var a = Dd.getValue();
  else {
    a = g.W.RL();
    if (1 == A.ac(!1).length && a.querySelector) {
      var c = a.querySelector("block");
      c && (c.removeAttribute("x"), c.removeAttribute("y"));
    }
    a = g.W.re(a);
  }
  return a;
}
function Id() {
  "object" == typeof BlocklyStorage &&
    null !== xd &&
    xd != Gd() &&
    ((window.location.hash = ""), (xd = null));
}
function Jd() {
  window.location = (kd ? "index.html" : "./") + "?lang=" + id;
}
function Hd() {
  window.sessionStorage && (window.sessionStorage.PO = Gd());
  var a = document.getElementById("languageMenu");
  a = encodeURIComponent(a.options[a.selectedIndex].value);
  var c = window.location.search;
  c =
    1 >= c.length
      ? "?lang=" + a
      : /[?&]lang=[^&]*/.test(c)
      ? c.replace(/([?&]lang=)[^&]*/, "$1" + a)
      : c.replace(/\?/, "?lang=" + a + "&");
  window.location =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    c;
}
function Kd() {
  10 > ld
    ? (window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        id +
        "&level=" +
        (ld + 1))
    : Jd();
}
function Ld() {
  var a = "".replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
  return a.replace(/\s+$/, "");
}
function Md(a) {
  if (
    ("click" == a.type && "touchend" == Nd && Od + 2e3 > Date.now()) ||
    (Nd == a.type && Od + 400 > Date.now())
  )
    return a.preventDefault(), a.stopPropagation(), !0;
  Nd = a.type;
  Od = Date.now();
  return !1;
}
var Nd = null,
  Od = 0;
function Pd() {
  setTimeout(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/JS-Interpreter/compressed.js";
    document.head.appendChild(a);
  }, 1);
}
function Qd() {
  setTimeout(function () {
    var a = document.createElement("link");
    a.rel = "stylesheet";
    a.type = "text/css";
    a.href = "common/prettify.css";
    document.head.appendChild(a);
    a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "common/prettify.js";
    document.head.appendChild(a);
  }, 1);
}
function Rd() {
  setTimeout(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/babel.min.js";
    document.head.appendChild(a);
  }, 1);
}
function Sd() {
  var a = window.ace;
  a.require("ace/ext/language_tools");
  Dd = a = a.edit("editor");
  a.setTheme("ace/theme/chrome");
  a.setShowPrintMargin(!1);
  a.setOptions({ enableBasicAutocompletion: !0, enableLiveAutocompletion: !0 });
  a = a.getSession();
  a.setMode("ace/mode/javascript");
  a.setTabSize(2);
  a.setUseSoftTabs(!0);
  a.on("change", Id);
  Td();
  return a;
}
function Td() {
  var a = Dd.getSession().getMode().$highlightRules.$keywordList;
  a
    ? a.splice(
        0,
        Infinity,
        "arguments",
        "this",
        "NaN",
        "Math",
        "JSON",
        "parseInt",
        "parseFloat",
        "isNaN",
        "isFinite",
        "eval",
        "String",
        "RegExp",
        "Object",
        "Number",
        "Function",
        "Date",
        "Boolean",
        "Array",
        "while",
        "var",
        "let",
        "typeof",
        "try",
        "throw",
        "switch",
        "return",
        "new",
        "instanceof",
        "of",
        "in",
        "if",
        "function",
        "for",
        "finally",
        "else",
        "do",
        "delete",
        "continue",
        "catch",
        "case",
        "break",
        "const",
        "undefined",
        "Infinity",
        "null",
        "false",
        "true"
      )
    : setTimeout(Td, (Td.lB *= 2));
}
Td.lB = 1;
var S = {
  Nk: !1,
  qB: null,
  qr: null,
  ey: function (a, c, d, e, f, h) {
    function k() {
      S.Nk &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    S.Nk && S.$h(!1);
    g.Og() && g.Bc(!0);
    S.Nk = !0;
    S.qB = c;
    S.qr = h;
    var l = document.getElementById("dialog");
    h = document.getElementById("dialogShadow");
    var m = document.getElementById("dialogBorder"),
      n;
    for (n in f) l.style[n] = f[n];
    e &&
      ((h.style.visibility = "visible"),
      (h.style.opacity = 0.3),
      (h.style.zIndex = 9),
      (e = document.createElement("div")),
      (e.id = "dialogHeader"),
      l.appendChild(e),
      (S.pv = g.Ud(e, "mousedown", null, S.YH)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    d && c ? (S.qj(c, !1, 0.2), S.qj(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  rB: 0,
  sB: 0,
  YH: function (a) {
    S.tv();
    if (!g.g.Rk(a)) {
      var c = document.getElementById("dialog");
      S.rB = c.offsetLeft - a.clientX;
      S.sB = c.offsetTop - a.clientY;
      S.rv = g.Ud(document, "mouseup", null, S.tv);
      S.qv = g.Ud(document, "mousemove", null, S.ZH);
      a.stopPropagation();
    }
  },
  ZH: function (a) {
    var c = document.getElementById("dialog"),
      d = S.rB + a.clientX;
    a = S.sB + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - c.offsetHeight);
    d = Math.max(d, 0);
    d = Math.min(d, window.innerWidth - c.offsetWidth);
    c.style.left = d + "px";
    c.style.top = a + "px";
  },
  tv: function () {
    S.rv && (g.Ma(S.rv), (S.rv = null));
    S.qv && (g.Ma(S.qv), (S.qv = null));
  },
  $h: function (a) {
    function c() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (S.Nk) {
      S.tv();
      S.pv && (g.Ma(S.pv), (S.pv = null));
      S.Nk = !1;
      S.qr && S.qr();
      S.qr = null;
      var d = !1 === a ? null : S.qB;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      d && a ? (S.qj(a, !1, 0.8), S.qj(d, !0, 0.2), setTimeout(c, 175)) : c();
      a.style.visibility = "hidden";
      a.style.zIndex = -1;
      for (
        (d = document.getElementById("dialogHeader")) &&
        d.parentNode.removeChild(d);
        a.firstChild;

      )
        (d = a.firstChild),
          (d.className += " dialogHiddenContent"),
          document.body.appendChild(d);
    }
  },
  qj: function (a, c, d) {
    function e() {
      f.style.width = h.width + "px";
      f.style.height = h.height + "px";
      f.style.left = h.x + "px";
      f.style.top = h.y + "px";
      f.style.opacity = d;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        h = S.vI(a);
      c
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  vI: function (a) {
    var c = g.g.style.Ak(a);
    c = { x: c.x, y: c.y };
    a.getBBox
      ? ((a = a.getBBox()), (c.height = a.height), (c.width = a.width))
      : ((c.height = a.offsetHeight), (c.width = a.offsetWidth));
    return c;
  },
  sL: function (a, c) {
    var d = document.getElementById("containerStorage");
    d.textContent = "";
    c = c.split("\n");
    for (var e = 0; e < c.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(c[e]));
      d.appendChild(f);
    }
    d = document.getElementById("dialogStorage");
    S.ey(d, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, S.rL);
    S.mL();
  },
  lH: function () {
    if (!rd(ld))
      if (S.Nk || A.Jc()) setTimeout(S.lH, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          c = document.getElementById("abortCancel");
        c.addEventListener("click", S.$h, !0);
        c.addEventListener("touchend", S.$h, !0);
        c = document.getElementById("abortOk");
        c.addEventListener("click", Jd, !0);
        c.addEventListener("touchend", Jd, !0);
        S.ey(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function () {
            document.body.removeEventListener("keydown", S.zA, !0);
          }
        );
        document.body.addEventListener("keydown", S.zA, !0);
      }
  },
  yO: function () {
    var a = document.getElementById("dialogDone");
    if (A) {
      var c = document.getElementById("dialogLinesText");
      c.textContent = "";
      var d = Ld();
      var e = d.replace(/\/\/[^\n]*/g, "");
      e = e.replace(/\/\*.*\*\//g, "");
      e = e.replace(/[ \t]+\n/g, "\n");
      e = e.replace(/\n+/g, "\n");
      e = e.trim();
      e = e.split("\n").length;
      var f = document.getElementById("containerCode");
      f.textContent = d;
      "function" == typeof prettyPrintOne &&
        ((d = f.innerHTML), (d = prettyPrintOne(d, "js")), (f.innerHTML = d));
      d =
        1 == e
          ? R("Games_linesOfCode1")
          : R("Games_linesOfCode2").replace("%1", String(e));
      c.appendChild(document.createTextNode(d));
    }
    d =
      10 > ld
        ? R("Games_nextLevel").replace("%1", String(ld + 1))
        : R("Games_finalLevel");
    c = document.getElementById("doneCancel");
    c.addEventListener("click", S.$h, !0);
    c.addEventListener("touchend", S.$h, !0);
    c = document.getElementById("doneOk");
    c.addEventListener("click", Kd, !0);
    c.addEventListener("touchend", Kd, !0);
    S.ey(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function () {
        document.body.removeEventListener("keydown", S.WA, !0);
      }
    );
    document.body.addEventListener("keydown", S.WA, !0);
    document.getElementById("dialogDoneText").textContent = d;
  },
  pB: function (a) {
    !S.Nk ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (S.$h(!0), a.stopPropagation(), a.preventDefault());
  },
  mL: function () {
    document.body.addEventListener("keydown", S.pB, !0);
  },
  rL: function () {
    document.body.removeEventListener("keydown", S.pB, !0);
  },
  WA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      S.$h(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && Kd();
  },
  zA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      S.$h(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && Jd();
  },
};
window.BlocklyDialogs = S;
S.hideDialog = S.$h;
g.h.Kf = function (a, c, d) {
  g.h.Kf.v.constructor.call(this, a ? a.u.id : void 0);
  this.pb = a ? a.id : null;
  this.Gm = c;
  this.Pu = d;
};
g.g.object.X(g.h.Kf, g.h.Fe);
g.h.Kf.prototype.type = g.h.Xp;
g.h.Kf.prototype.ya = function () {
  var a = g.h.Kf.v.ya.call(this);
  a.isOpen = this.Gm;
  a.bubbleType = this.Pu;
  a.blockId = this.pb;
  return a;
};
g.h.Kf.prototype.ka = function (a) {
  g.h.Kf.v.ka.call(this, a);
  this.Gm = a.isOpen;
  this.Pu = a.bubbleType;
  this.pb = a.blockId;
};
g.C.register(g.C.aa.fc, g.h.Xp, g.h.Kf);
g.ne = function (a) {
  this.U = a;
  this.ee = null;
};
b = g.ne.prototype;
b.TA = !0;
b.Fq = 17;
b.qc = null;
b.Gk = null;
function uc(a) {
  a.ee ||
    ((a.ee = g.g.o.M(g.g.F.xc, { class: "blocklyIconGroup" }, null)),
    a.U.Qb && g.g.o.Ga(a.ee, "blocklyIconGroupReadonly"),
    a.Dv(a.ee),
    a.U.Pa().appendChild(a.ee),
    g.wa(a.ee, "mouseup", a, a.mw),
    a.Bi());
}
b.I = function () {
  g.g.o.removeNode(this.ee);
  this.ee = null;
  this.Jb(!1);
  this.U = null;
};
b.Bi = function () {};
b.isVisible = function () {
  return !!this.qc;
};
b.mw = function (a) {
  this.U.u.Jc() || this.U.Qb || g.g.Rk(a) || this.Jb(!this.isVisible());
};
b.nc = function () {
  this.isVisible() && this.qc.bd(this.U.style.Mh);
};
function Xa(a, c) {
  a.Gk = c;
  a.isVisible() && ((a = a.qc), (a.Ac = c), a.Nx && pb(a));
}
function xc(a) {
  var c = a.U.ab(),
    d = g.g.tf(a.ee);
  c = new g.g.T(c.x + d.x + a.Fq / 2, c.y + d.y + a.Fq / 2);
  g.g.T.sf(a.Gk, c) || Xa(a, c);
}
g.Kn = function (a) {
  g.Kn.v.constructor.call(this, a);
  uc(this);
  this.wi = {};
};
g.g.object.X(g.Kn, g.ne);
b = g.Kn.prototype;
b.TA = !1;
b.Dv = function (a) {
  g.g.o.M(
    g.g.F.Od,
    {
      class: "blocklyIconShape",
      d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z",
    },
    a
  );
  g.g.o.M(
    g.g.F.Od,
    {
      class: "blocklyIconSymbol",
      d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z",
    },
    a
  );
  g.g.o.M(
    g.g.F.Hc,
    { class: "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" },
    a
  );
};
b.Jb = function (a) {
  a != this.isVisible() &&
    (g.h.Ha(new g.h.Kf(this.U, a, "warning")), a ? this.mr() : this.wr());
};
b.mr = function () {
  this.dl = g.ta.Hf(this.Ad());
  this.qc = g.ta.gB(this.dl, this.U, this.Gk);
  this.nc();
};
b.wr = function () {
  this.qc.I();
  this.dl = this.qc = null;
};
function yc(a, c, d) {
  a.wi[d] != c &&
    (c ? (a.wi[d] = c) : delete a.wi[d], a.isVisible() && (a.Jb(!1), a.Jb(!0)));
}
b.Ad = function () {
  var a = [],
    c;
  for (c in this.wi) a.push(this.wi[c]);
  return a.join("\n");
};
b.I = function () {
  this.U.Ze = null;
  g.ne.prototype.I.call(this);
};
g.Comment = function (a) {
  g.Comment.v.constructor.call(this, a);
  this.pd = a.Ie;
  this.pd.text = this.pd.text || "";
  this.Tu = "";
  this.ts = this.rs = this.zs = this.rd = null;
  uc(this);
};
g.g.object.X(g.Comment, g.ne);
b = g.Comment.prototype;
b.Dv = function (a) {
  g.g.o.M(g.g.F.cq, { class: "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
  g.g.o.M(
    g.g.F.Od,
    {
      class: "blocklyIconSymbol",
      d:
        "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z",
    },
    a
  );
  g.g.o.M(
    g.g.F.Hc,
    {
      class: "blocklyIconSymbol",
      x: "6.8",
      y: "10.78",
      height: "2",
      width: "2",
    },
    a
  );
};
b.ev = function () {
  this.qo = g.g.o.M(g.g.F.tF, { x: g.ta.vd, y: g.ta.vd }, null);
  var a = document.createElementNS(g.g.o.Xj, "body");
  a.setAttribute("xmlns", g.g.o.Xj);
  a.className = "blocklyMinimalBody";
  var c = (this.ml = document.createElementNS(g.g.o.Xj, "textarea"));
  c.className = "blocklyCommentTextarea";
  c.setAttribute("dir", this.U.L ? "RTL" : "LTR");
  c.value = this.pd.text;
  Ud(this);
  a.appendChild(c);
  this.qo.appendChild(a);
  this.rd = g.wa(c, "mouseup", this, this.oL, !0, !0);
  this.zs = g.wa(c, "wheel", this, function (d) {
    d.stopPropagation();
  });
  this.rs = g.wa(c, "change", this, function () {
    this.Tu != this.pd.text &&
      g.h.Ha(new g.h.mh(this.U, "comment", null, this.Tu, this.pd.text));
  });
  this.ts = g.wa(c, "input", this, function () {
    this.pd.text = c.value;
  });
  setTimeout(c.focus.bind(c), 0);
  return this.qo;
};
b.Bi = function () {
  g.Comment.v.Bi.call(this);
  this.isVisible() && (this.wr(), this.mr());
};
b.SJ = function () {
  this.isVisible() && ((this.pd.size = this.qc.Vv()), Ud(this));
};
function Ud(a) {
  var c = a.pd.size,
    d = 2 * g.ta.vd,
    e = c.width - d;
  c = c.height - d;
  a.qo.setAttribute("width", e);
  a.qo.setAttribute("height", c);
  a.ml.style.width = e - 4 + "px";
  a.ml.style.height = c - 4 + "px";
}
b.Jb = function (a) {
  a != this.isVisible() &&
    (g.h.Ha(new g.h.Kf(this.U, a, "comment")),
    (this.pd.Bx = a) ? this.mr() : this.wr());
};
b.mr = function () {
  if (!this.U.fe() || g.g.userAgent.bf)
    (this.dl = g.ta.Hf(this.U.Ie.text)),
      (this.qc = g.ta.gB(this.dl, this.U, this.Gk));
  else {
    this.qc = new g.ta(
      this.U.u,
      this.ev(),
      this.U.Rb.dc,
      this.Gk,
      this.pd.size.width,
      this.pd.size.height
    );
    rb(this.qc, this.U.id);
    var a = this.SJ.bind(this);
    this.qc.Px = a;
  }
  this.nc();
};
b.wr = function () {
  this.rd && (g.Ma(this.rd), (this.rd = null));
  this.zs && (g.Ma(this.zs), (this.zs = null));
  this.rs && (g.Ma(this.rs), (this.rs = null));
  this.ts && (g.Ma(this.ts), (this.ts = null));
  this.qc.I();
  this.dl = this.qo = this.ml = this.qc = null;
};
b.oL = function () {
  sb(this.qc) && this.ml.focus();
  this.Tu = this.pd.text;
};
b.Vv = function () {
  return this.pd.size;
};
b.qp = function (a, c) {
  this.qc
    ? this.qc.qp(a, c)
    : ((this.pd.size.width = a), (this.pd.size.height = c));
};
b.I = function () {
  this.U.Sn = null;
  g.ne.prototype.I.call(this);
};
g.Vc.register(
  ".blocklyCommentTextarea {,background-color: #fef49c;,border: 0;,outline: 0;,margin: 0;,padding: 3px;,resize: none;,display: block;,text-overflow: hidden;,}".split(
    ","
  )
);
g.xu = function (a, c, d) {
  this.nw = a.toolboxitemid || g.g.Gl.bw();
  this.Fw = (this.mi = d || null) ? this.mi.Fw + 1 : 0;
  this.Ys = a;
  this.li = c;
  this.s = this.li.s;
};
b = g.xu.prototype;
b.R = function () {};
b.Ao = function () {
  return null;
};
b.Oa = function () {
  return this.nw;
};
b.getParent = function () {
  return null;
};
b.Xg = function () {
  return !1;
};
b.Mk = function () {
  return !1;
};
b.I = function () {};
g.Ee = function (a, c, d) {
  g.Ee.v.constructor.call(this, a, c, d);
  this.rj = g.g.xe(a.name);
  this.ld = Vd(this, a);
  this.zw = this.Go = this.op = this.Te = this.Rc = null;
  this.nd = this.Lw();
  g.g.object.Re(this.nd, a.cssconfig || a.cssConfig);
  this.jJ = this.vw = !1;
  this.$i = [];
  this.hD(a);
};
g.g.object.X(g.Ee, g.xu);
g.Ee.Aj = "category";
g.Ee.MJ = 19;
g.Ee.borderWidth = 8;
g.Ee.RH = "#57e";
b = g.Ee.prototype;
b.Lw = function () {
  return {
    container: "blocklyToolboxCategory",
    row: "blocklyTreeRow",
    rowcontentcontainer: "blocklyTreeRowContentContainer",
    icon: "blocklyTreeIcon",
    label: "blocklyTreeLabel",
    contents: "blocklyToolboxContents",
    selected: "blocklyTreeSelected",
    openicon: "blocklyTreeIconOpen",
    closedicon: "blocklyTreeIconClosed",
  };
};
b.hD = function (a) {
  var c = a.contents;
  if (a.custom) this.$i = a.custom;
  else if (c) {
    a = 0;
    for (var d; (d = c[a]); a++) this.$i.push(d);
  }
};
b.R = function () {
  this.Ke();
  "true" == this.Ys.hidden && this.Ja();
};
b.Ke = function () {
  this.Rc = this.dv();
  g.g.va.Ff(this.Rc, g.g.va.Oi.$G);
  g.g.va.sd(this.Rc, g.g.va.State.Ql, !1);
  g.g.va.sd(this.Rc, g.g.va.State.UF, this.Fw);
  var a = document.createElement("div");
  g.g.o.Ga(a, this.nd.row);
  var c = g.Ee.MJ * this.Fw;
  c = c.toString() + "px";
  this.s.L ? (a.style.paddingRight = c) : (a.style.paddingLeft = c);
  this.Te = a;
  this.Te.style.pointerEvents = "auto";
  this.Rc.appendChild(this.Te);
  a = document.createElement("div");
  g.g.o.Ga(a, this.nd.rowcontentcontainer);
  this.op = a;
  this.op.style.pointerEvents = "none";
  this.Te.appendChild(this.op);
  this.Go = this.fB();
  g.g.va.Ff(this.Go, g.g.va.Oi.CG);
  this.op.appendChild(this.Go);
  a = this.rj;
  c = document.createElement("span");
  c.setAttribute("id", this.Oa() + ".label");
  c.textContent = a;
  g.g.o.Ga(c, this.nd.label);
  this.zw = c;
  this.op.appendChild(this.zw);
  g.g.va.sd(this.Rc, g.g.va.State.TF, this.zw.getAttribute("id"));
  Wd(this, this.ld);
  return this.Rc;
};
b.dv = function () {
  var a = document.createElement("div");
  g.g.o.Ga(a, this.nd.container);
  return a;
};
b.fB = function () {
  var a = document.createElement("span");
  this.li.Ek || g.g.o.Ga(a, this.nd.icon);
  a.style.display = "inline-block";
  return a;
};
b.Qm = function () {
  this.ld = Vd(this, this.Ys);
  Wd(this, this.ld);
};
function Wd(a, c) {
  c &&
    ((c = g.Ee.borderWidth + "px solid " + (c || "#ddd")),
    a.s.L ? (a.Te.style.borderRight = c) : (a.Te.style.borderLeft = c));
}
function Vd(a, c) {
  var d = c.categorystyle || c.categoryStyle;
  if ((c = c.colour) && d)
    console.warn(
      'Toolbox category "' + a.rj + '" must not have both a style and a colour'
    );
  else {
    if (d)
      a: {
        c = a.s.Rg();
        if (d && c) {
          if ((c = c.Yq[d]) && c.Fb) {
            a = Xd(a, c.Fb);
            break a;
          }
          console.warn(
            'Style "' + d + '" must exist and contain a colour value'
          );
        }
        a = "";
      }
    else a = Xd(a, c);
    return a;
  }
  return "";
}
b.KB = function () {
  return this.Te;
};
function Xd(a, c) {
  c = g.g.xe(c);
  if (null == c || "" === c) return "";
  var d = Number(c);
  if (isNaN(d)) {
    if ((d = g.g.Fb.parse(c))) return d;
    console.warn(
      'Toolbox category "' + a.rj + '" has unrecognized colour attribute: ' + c
    );
    return "";
  }
  return g.dJ(d);
}
b.Rs = function (a) {
  this.Rc.style.display = a ? "block" : "none";
  this.vw = !a;
  this.li.sb == this && yb(this.li, null);
};
b.Ja = function () {
  this.Rs(!1);
};
b.show = function () {
  this.Rs(!0);
};
b.isVisible = function () {
  var a;
  if ((a = !this.vw))
    a: {
      for (a = this; a.getParent(); )
        if (((a = a.getParent()), !a.wk)) {
          a = !1;
          break a;
        }
      a = !0;
    }
  return a;
};
b.Xg = function () {
  return this.isVisible() && !this.jJ;
};
b.cD = function () {};
function Yd(a, c) {
  if (c) {
    var d = Xd(a, g.Ee.RH);
    a.Te.style.backgroundColor = a.ld || d;
    g.g.o.Ga(a.Te, a.nd.selected);
  } else (a.Te.style.backgroundColor = ""), g.g.o.jc(a.Te, a.nd.selected);
  g.g.va.sd(a.Rc, g.g.va.State.Ql, c);
}
b.ae = function () {
  return this.rj;
};
b.getParent = function () {
  return this.mi;
};
b.Ao = function () {
  return this.Rc;
};
b.I = function () {
  g.g.o.removeNode(this.Rc);
};
g.Vc.register([
  ".blocklyTreeRow:not(.blocklyTreeSelected):hover {",
  "background-color: rgba(255, 255, 255, 0.2);",
  "}",
  '.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {',
  "margin: 1px 5px 1px 0;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {',
  "margin: 1px 0 1px 5px;",
  "}",
  ".blocklyTreeRow {",
  "height: 22px;",
  "line-height: 22px;",
  "margin-bottom: 3px;",
  "padding-right: 8px;",
  "white-space: nowrap;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',
  "margin-left: 8px;",
  "padding-right: 0px",
  "}",
  ".blocklyTreeIcon {",
  "background-image: url(<<<PATH>>>/sprites.png);",
  "height: 16px;",
  "vertical-align: middle;",
  "visibility: hidden;",
  "width: 16px;",
  "}",
  ".blocklyTreeIconClosed {",
  "background-position: -32px -1px;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {',
  "background-position: 0 -1px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconClosed {",
  "background-position: -32px -17px;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {',
  "background-position: 0 -17px;",
  "}",
  ".blocklyTreeIconOpen {",
  "background-position: -16px -1px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconOpen {",
  "background-position: -16px -17px;",
  "}",
  ".blocklyTreeLabel {",
  "cursor: default;",
  "font: 16px sans-serif;",
  "padding: 0 3px;",
  "vertical-align: middle;",
  "}",
  ".blocklyToolboxDelete .blocklyTreeLabel {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyTreeSelected .blocklyTreeLabel {",
  "color: #fff;",
  "}",
]);
g.C.register(g.C.aa.Xl, g.Ee.Aj, g.Ee);
g.wg = function (a, c) {
  g.wg.v.constructor.call(this, a, c);
  this.nd = { container: "blocklyTreeSeparator" };
  g.g.object.Re(this.nd, a.cssconfig || a.cssConfig);
};
g.g.object.X(g.wg, g.xu);
g.wg.Aj = "sep";
g.wg.prototype.R = function () {
  this.Ke();
};
g.wg.prototype.Ke = function () {
  var a = document.createElement("div");
  g.g.o.Ga(a, this.nd.container);
  return (this.Rc = a);
};
g.wg.prototype.Ao = function () {
  return this.Rc;
};
g.wg.prototype.I = function () {
  g.g.o.removeNode(this.Rc);
};
g.Vc.register(
  '.blocklyTreeSeparator {,border-bottom: solid #e5e5e5 1px;,height: 0;,margin: 5px 0;,},.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {,border-right: solid #e5e5e5 1px;,border-bottom: none;,height: auto;,margin: 0 5px 0 5px;,padding: 5px 0;,width: 0;,}'.split(
    ","
  )
);
g.C.register(g.C.aa.Xl, g.wg.Aj, g.wg);
g.Mf = function (a, c, d) {
  this.Cp = null;
  this.wk = !1;
  this.Zs = [];
  g.Mf.v.constructor.call(this, a, c, d);
};
g.g.object.X(g.Mf, g.Ee);
g.Mf.Aj = "collapsibleCategory";
b = g.Mf.prototype;
b.Lw = function () {
  var a = g.Mf.v.Lw.call(this);
  a.contents = "blocklyToolboxContents";
  return a;
};
b.hD = function (a) {
  var c = a.contents,
    d = !0;
  if (a.custom) this.$i = a.custom;
  else if (c) {
    a = 0;
    for (var e; (e = c[a]); a++)
      !g.C.YI(e.kind) || (e.kind.toLowerCase() == g.wg.Aj && d)
        ? (this.$i.push(e), (d = !0))
        : (this.fv(e), (d = !1));
  }
};
b.fv = function (a) {
  var c = a.kind;
  "CATEGORY" == c.toUpperCase() && g.g.za.uC(a) && (c = g.Mf.Aj);
  a = new (g.C.wo(g.C.aa.Xl, c))(a, this.li, this);
  this.Zs.push(a);
};
b.R = function () {
  g.Mf.v.R.call(this);
  Zd(this, "true" == this.Ys.expanded || this.Ys.expanded);
};
b.Ke = function () {
  g.Mf.v.Ke.call(this);
  var a = this.Zs,
    c = document.createElement("div");
  g.g.o.Ga(c, this.nd.contents);
  for (var d = 0; d < a.length; d++) {
    var e = a[d];
    e.R();
    c.appendChild(e.Ao());
    e.KB && e.Te.setAttribute("id", e.Oa());
  }
  this.Cp = c;
  g.g.va.Ff(this.Cp, g.g.va.Oi.AF);
  this.Rc.appendChild(this.Cp);
  return this.Rc;
};
b.fB = function () {
  var a = document.createElement("span");
  this.li.Ek || (g.g.o.Ga(a, this.nd.icon), (a.style.visibility = "visible"));
  a.style.display = "inline-block";
  return a;
};
function Zd(a, c) {
  if (a.wk != c) {
    if ((a.wk = c)) {
      a.Cp.style.display = "block";
      var d = a.Go;
      d && (g.g.o.vD(d, a.nd.closedicon), g.g.o.Ga(d, a.nd.openicon));
    } else if (((a.Cp.style.display = "none"), (d = a.Go)))
      g.g.o.vD(d, a.nd.openicon), g.g.o.Ga(d, a.nd.closedicon);
    g.g.va.sd(a.Rc, g.g.va.State.dF, c);
    a = a.li;
    c = a.s;
    d = a.Ce.getBoundingClientRect();
    c.translate(
      a.Ka == g.De ? c.scrollX + d.width : c.scrollX,
      a.Ka == g.gk ? c.scrollY + d.height : c.scrollY
    );
    g.Ym(c);
  }
}
b.Rs = function (a) {
  this.Rc.style.display = a ? "block" : "none";
  for (var c = 0, d; (d = this.Zs[c]); c++) d.Rs(a);
  this.vw = !a;
  this.li.sb == this && yb(this.li, null);
};
b.Mk = function () {
  return !0;
};
b.cD = function () {
  Zd(this, !this.wk);
};
b.Ao = function () {
  return this.Rc;
};
g.C.register(g.C.aa.Xl, g.Mf.Aj, g.Mf);
g.h.Eh = function (a, c, d) {
  g.h.Eh.v.constructor.call(this, d);
  this.VC = a;
  this.QC = c;
};
g.g.object.X(g.h.Eh, g.h.Fe);
g.h.Eh.prototype.type = g.h.gA;
g.h.Eh.prototype.ya = function () {
  var a = g.h.Eh.v.ya.call(this);
  a.oldItem = this.VC;
  a.newItem = this.QC;
  return a;
};
g.h.Eh.prototype.ka = function (a) {
  g.h.Eh.v.ka.call(this, a);
  this.VC = a.oldItem;
  this.QC = a.newItem;
};
g.C.register(g.C.aa.fc, g.h.gA, g.h.Eh);
g.wu = function (a) {
  this.s = a;
  this.TD = a.options.Yg || { contents: [] };
  this.Ek = a.options.Bd;
  this.Xi = this.Ce = null;
  this.Gb = [];
  this.Qc = this.ub = 0;
  this.L = a.options.L;
  this.na = null;
  this.av = {};
  this.Ka = a.options.Ka;
  this.sb = null;
  this.Pn = [];
};
b = g.wu.prototype;
b.R = function () {
  var a = this.s,
    c = u(a),
    d = this.s,
    e = new g.Nd({
      parentWorkspace: d,
      rtl: d.L,
      oneBasedIndex: d.options.ki,
      horizontalLayout: d.Bd,
      renderer: d.options.kp,
      rendererOverrides: d.options.lp,
    });
  e.Ka = d.options.Ka;
  d = d.Bd ? g.C.Hr(g.C.aa.rF, d.options) : g.C.Hr(g.C.aa.gz, d.options);
  if (!d)
    throw Error(
      "Blockly.VerticalFlyout, Blockly.HorizontalFlyout or your own custom flyout must be required."
    );
  this.na = new d(e);
  this.Ce = this.Ke(this.s);
  g.g.o.Kk(this.na.$a("svg"), c);
  this.na.R(a);
  this.Ia(this.TD);
  a = a.Dc;
  a.subscribe(this.Ce, "toolboxBackgroundColour", "background-color");
  a.subscribe(this.Ce, "toolboxForegroundColour", "color");
};
b.Ke = function (a) {
  var c = u(a);
  a = this.dv();
  var d = document.createElement("div");
  g.g.o.Ga(d, "blocklyToolboxContents");
  this.Ek && (d.style.flexDirection = "row");
  this.Xi = d;
  this.Xi.tabIndex = 0;
  g.g.va.Ff(this.Xi, g.g.va.Oi.ZG);
  a.appendChild(this.Xi);
  c.parentNode.insertBefore(a, c);
  c = this.Xi;
  d = g.wa(a, "click", this, this.TJ, !1, !0);
  this.Pn.push(d);
  c = g.wa(c, "keydown", this, this.WJ, !1, !0);
  this.Pn.push(c);
  return a;
};
b.dv = function () {
  var a = document.createElement("div");
  a.setAttribute("layout", this.Ek ? "h" : "v");
  g.g.o.Ga(a, "blocklyToolboxDiv");
  g.g.o.Ga(a, "blocklyNonSelectable");
  a.setAttribute("dir", this.L ? "RTL" : "LTR");
  return a;
};
b.TJ = function (a) {
  if (g.g.Rk(a) || a.target == this.Ce) g.Bc(!1);
  else {
    if ((a = a.target.getAttribute("id")))
      (a = this.av[a]), a.Xg() && (yb(this, a), a.cD());
    g.Bc(!0);
  }
  g.Touch.kk();
};
b.WJ = function (a) {
  var c = !1;
  switch (a.keyCode) {
    case g.g.S.Et:
      c = $d(this);
      break;
    case g.g.S.zu:
      c = ae(this);
      break;
    case g.g.S.Zj:
      c = be(this);
      break;
    case g.g.S.dk:
      c = ce(this);
      break;
    case g.g.S.nq:
    case g.g.S.$z:
      this.sb && this.sb.Mk() && ((c = this.sb), Zd(c, !c.wk), (c = !0));
      break;
    default:
      c = !1;
  }
  !c && this.sb && this.sb.Yo && (c = this.sb.Yo(a));
  c && a.preventDefault();
};
b.Ia = function (a) {
  this.TD = a;
  for (var c = 0; c < this.Gb.length; c++) {
    var d = this.Gb[c];
    d && d.I();
  }
  this.Gb = [];
  this.av = {};
  a = a.contents;
  c = document.createDocumentFragment();
  d = 0;
  for (var e; (e = a[d]); d++) this.fv(e, c);
  this.Xi.appendChild(c);
  this.position();
};
b.fv = function (a, c) {
  var d = a.kind;
  "CATEGORY" == d.toUpperCase() && g.g.za.uC(a) && (d = g.Mf.Aj);
  if ((d = g.C.wo(g.C.aa.Xl, d.toLowerCase())))
    (a = new d(a, this)),
      de(this, a),
      a.R(),
      (d = a.Ao()) && c.appendChild(d),
      a.KB && a.Te.setAttribute("id", a.Oa());
};
function de(a, c) {
  a.Gb.push(c);
  a.av[c.Oa()] = c;
  if (c.Mk()) for (var d = 0, e; (e = c.Zs[d]); d++) de(a, e);
}
b.Nq = function (a) {
  g.g.o.Ga(this.Ce, a);
};
b.Hs = function (a) {
  g.g.o.jc(this.Ce, a);
};
b.rm = function () {
  if (!this.Ce) return null;
  var a = this.Ce.getBoundingClientRect(),
    c = a.top,
    d = c + a.height,
    e = a.left;
  a = e + a.width;
  return this.Ka == g.g.za.Qd.Jq
    ? new g.g.Rect(-1e7, d, -1e7, 1e7)
    : this.Ka == g.g.za.Qd.qt
    ? new g.g.Rect(c, 1e7, -1e7, 1e7)
    : this.Ka == g.g.za.Qd.Zj
    ? new g.g.Rect(-1e7, 1e7, -1e7, a)
    : new g.g.Rect(-1e7, 1e7, e, 1e7);
};
b.Sg = function () {
  return this.ub;
};
b.hc = function () {
  return this.na;
};
b.position = function () {
  var a = this.Ce;
  a &&
    (this.Ek
      ? ((a.style.left = "0"),
        (a.style.height = "auto"),
        (a.style.width = "100%"),
        (this.Qc = a.offsetHeight),
        this.Ka == g.gk ? (a.style.top = "0") : (a.style.bottom = "0"))
      : (this.Ka == g.Wl ? (a.style.right = "0") : (a.style.left = "0"),
        (a.style.height = "100%"),
        (this.ub = a.offsetWidth)),
    this.na.position());
};
b.Qm = function () {
  for (var a = 0; a < this.Gb.length; a++) {
    var c = this.Gb[a];
    c.Qm && c.Qm();
  }
};
b.Jb = function (a) {
  this.Ce.style.display = a ? "block" : "none";
};
function yb(a, c) {
  var d = a.sb;
  if ((c || d) && (!c || c.Xg())) {
    null == d ||
      (d.Mk() && d == c) ||
      null == d ||
      ((a.sb = null), Yd(d, !1), g.g.va.sd(a.Xi, g.g.va.State.gt, ""));
    null != c &&
      c != d &&
      null != c &&
      ((a.sb = c), Yd(c, !0), g.g.va.sd(a.Xi, g.g.va.State.gt, c.Oa()));
    (d != c || c.Mk()) && c && c.$i.length
      ? (a.na.show(c.$i), a.na.Tx())
      : a.na.Ja();
    var e = d && d.ae(),
      f = c && c.ae();
    d == c && (f = null);
    a = new g.h.Eh(e, f, a.s.id);
    g.h.Ha(a);
  }
}
b.ic = function (a) {
  if (!this.sb) return !1;
  switch (a.name) {
    case g.navigation.Db.Pd:
      return ae(this);
    case g.navigation.Db.bu:
      return be(this);
    case g.navigation.Db.Ld:
      return $d(this);
    case g.navigation.Db.Lt:
      return ce(this);
    default:
      return !1;
  }
};
function be(a) {
  return a.sb
    ? a.sb.Mk() && a.sb.wk
      ? (Zd(a.sb, !1), !0)
      : a.sb.getParent() && a.sb.getParent().Xg()
      ? (yb(a, a.sb.getParent()), !0)
      : !1
    : !1;
}
function ce(a) {
  if (!a.sb || !a.sb.Mk()) return !1;
  var c = a.sb;
  c.wk ? $d(a) : Zd(c, !0);
  return !0;
}
function $d(a) {
  if (!a.sb) return !1;
  var c = a.Gb.indexOf(a.sb) + 1;
  if (-1 < c && c < a.Gb.length) {
    for (var d = a.Gb[c]; d && !d.Xg(); ) d = a.Gb[++c];
    if (d && d.Xg()) return yb(a, d), !0;
  }
  return !1;
}
function ae(a) {
  if (!a.sb) return !1;
  var c = a.Gb.indexOf(a.sb) - 1;
  if (-1 < c && c < a.Gb.length) {
    for (var d = a.Gb[c]; d && !d.Xg(); ) d = a.Gb[--c];
    if (d && d.Xg()) return yb(a, d), !0;
  }
  return !1;
}
b.I = function () {
  this.na.I();
  for (var a = 0; a < this.Gb.length; a++) this.Gb[a].I();
  for (a = 0; a < this.Pn.length; a++) g.Ma(this.Pn[a]);
  this.Pn = [];
  this.Gb = [];
  this.s.Dc.unsubscribe(this.Ce);
  g.g.o.removeNode(this.Ce);
};
g.Vc.register([
  ".blocklyToolboxDelete {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyToolboxGrab {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyToolboxDiv {",
  "background-color: #ddd;",
  "overflow-x: visible;",
  "overflow-y: auto;",
  "padding: 4px 0 4px 0;",
  "position: absolute;",
  "z-index: 70;",
  "-webkit-tap-highlight-color: transparent;",
  "}",
  ".blocklyToolboxContents {",
  "display: flex;",
  "flex-wrap: wrap;",
  "flex-direction: column;",
  "}",
  ".blocklyToolboxContents:focus {",
  "outline: none;",
  "}",
]);
g.C.register(g.C.aa.Iq, g.C.lq, g.wu);
g.h.Fh = function (a, c) {
  g.h.Fh.v.constructor.call(this, c);
  this.Gm = a;
};
g.g.object.X(g.h.Fh, g.h.Fe);
g.h.Fh.prototype.type = g.h.iA;
g.h.Fh.prototype.ya = function () {
  var a = g.h.Fh.v.ya.call(this);
  a.isOpen = this.Gm;
  return a;
};
g.h.Fh.prototype.ka = function (a) {
  g.h.Fh.v.ka.call(this, a);
  this.Gm = a.isOpen;
};
g.C.register(g.C.aa.fc, g.h.iA, g.h.Fh);
g.kd = function (a) {
  this.s = a;
  this.Gb = [];
  this.Mg = null;
  if (!(0 >= this.s.options.gs)) {
    a = new g.Nd({
      scrollbars: !0,
      parentWorkspace: this.s,
      rtl: this.s.L,
      oneBasedIndex: this.s.options.ki,
      renderer: this.s.options.kp,
      rendererOverrides: this.s.options.lp,
    });
    if (this.s.Bd) {
      a.Ka = this.s.Ka == g.g.za.Qd.Jq ? g.g.za.Qd.qt : g.g.za.Qd.Jq;
      if (!g.Kt) throw Error("Missing require for Blockly.HorizontalFlyout");
      this.Mg = new g.Kt(a);
    } else {
      a.Ka = this.s.Ka == g.g.za.Qd.dk ? g.g.za.Qd.Zj : g.g.za.Qd.dk;
      if (!g.Hh) throw Error("Missing require for Blockly.VerticalFlyout");
      this.Mg = new g.Hh(a);
    }
    H(this.s, this.UJ.bind(this));
  }
};
b = g.kd.prototype;
b.jk = 47;
b.Wp = 44;
b.Jl = 16;
b.Tt = 20;
b.sn = 20;
b.yq = 10;
b.ou = 0;
b.pu = 32;
b.BF = 0.1;
g.kd.kE = 80;
g.kd.Ey = 4;
g.kd.Iz = 0.4;
g.kd.tG = 0.8;
g.kd.zz = 45;
b = g.kd.prototype;
b.Ur = !1;
b.Uw = 0;
b.P = null;
b.Ws = null;
b.Gw = 0;
b.nj = 0;
b.No = 0;
b.an = 0;
b.$a = function () {
  this.P = g.g.o.M(g.g.F.xc, { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var c = g.g.o.M(g.g.F.ln, { id: "blocklyTrashBodyClipPath" + a }, this.P);
  g.g.o.M(g.g.F.Hc, { width: this.jk, height: this.Wp, y: this.Jl }, c);
  var d = g.g.o.M(
    g.g.F.Yj,
    {
      width: g.Sd.width,
      x: -this.ou,
      height: g.Sd.height,
      y: -this.pu,
      "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")",
    },
    this.P
  );
  d.setAttributeNS(g.g.o.Uf, "xlink:href", this.s.options.xj + g.Sd.url);
  c = g.g.o.M(g.g.F.ln, { id: "blocklyTrashLidClipPath" + a }, this.P);
  g.g.o.M(g.g.F.Hc, { width: this.jk, height: this.Jl }, c);
  this.Ws = g.g.o.M(
    g.g.F.Yj,
    {
      width: g.Sd.width,
      x: -this.ou,
      height: g.Sd.height,
      y: -this.pu,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")",
    },
    this.P
  );
  this.Ws.setAttributeNS(g.g.o.Uf, "xlink:href", this.s.options.xj + g.Sd.url);
  g.Ud(this.P, "mousedown", this, this.tH);
  g.Ud(this.P, "mouseup", this, this.click);
  g.Ud(d, "mouseover", this, this.DJ);
  g.Ud(d, "mouseout", this, this.BJ);
  this.Fu();
  return this.P;
};
b.R = function (a) {
  0 < this.s.options.gs &&
    (g.g.o.Kk(this.Mg.$a(g.g.F.Pi), u(this.s)), this.Mg.R(this.s));
  this.kh = this.Tt + a;
  Za(this, !1);
  return this.kh + this.Wp + this.Jl;
};
b.I = function () {
  this.P && (g.g.o.removeNode(this.P), (this.P = null));
  this.s = this.Ws = null;
  clearTimeout(this.Gw);
};
b.position = function () {
  if (this.kh) {
    var a = this.s.Zc();
    a &&
      ((this.No =
        a.Ka == g.De || (this.s.Bd && !this.s.L)
          ? a.Kb + a.Oc - this.jk - this.sn - g.Va.Sc
          : this.sn + g.Va.Sc),
      (this.an =
        a.Ka == g.In ? this.kh : a.Ub + a.Xc - (this.Wp + this.Jl) - this.kh),
      this.P.setAttribute(
        "transform",
        "translate(" + this.No + "," + this.an + ")"
      ));
  }
};
b.rm = function () {
  if (!this.P) return null;
  var a = this.P.getBoundingClientRect(),
    c = a.top + this.pu - this.yq;
  a = a.left + this.ou - this.yq;
  return new g.g.Rect(
    c,
    c + this.Jl + this.Wp + 2 * this.yq,
    a,
    a + this.jk + 2 * this.yq
  );
};
function Za(a, c) {
  a.Ur != c && (clearTimeout(a.Gw), (a.Ur = c), a.Fu());
}
b.Fu = function () {
  var a = 1 / (g.kd.Ey + 1);
  this.nj += this.Ur ? a : -a;
  this.nj = Math.min(Math.max(this.nj, this.Uw), 1);
  ee(this, this.nj * g.kd.zz);
  this.P.style.opacity = g.kd.Iz + this.nj * (g.kd.tG - g.kd.Iz);
  this.nj > this.Uw &&
    1 > this.nj &&
    (this.Gw = setTimeout(this.Fu.bind(this), g.kd.kE / g.kd.Ey));
};
function ee(a, c) {
  var d = a.s.Ka == g.Wl || (a.s.Bd && a.s.L);
  a.Ws.setAttribute(
    "transform",
    "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.jk - 4) + "," + (a.Jl - 2) + ")"
  );
}
b.hr = function () {
  Za(this, !1);
};
b.click = function () {
  if (this.Gb.length && !this.Mg.isVisible()) {
    for (var a = [], c = 0, d; (d = this.Gb[c]); c++) a[c] = g.W.Hf(d);
    this.Mg.show(a);
    Pc(this, !0);
  }
};
function Pc(a, c) {
  a = new g.h.Fh(c, a.s.id);
  g.h.Ha(a);
}
b.tH = function (a) {
  !this.Mg.isVisible() && this.Gb.length && a.stopPropagation();
};
b.DJ = function () {
  this.Gb.length && Za(this, !0);
};
b.BJ = function () {
  Za(this, !1);
};
b.UJ = function (a) {
  if (
    !(0 >= this.s.options.gs) &&
    a.type == g.h.nt &&
    a.Km.tagName &&
    "shadow" != a.Km.tagName.toLowerCase()
  ) {
    for (var c = (a = a.Km.cloneNode(!0)); c; ) {
      c.removeAttribute &&
        (c.removeAttribute("x"),
        c.removeAttribute("y"),
        c.removeAttribute("id"),
        c.removeAttribute("disabled"),
        "comment" == c.nodeName &&
          (c.removeAttribute("h"),
          c.removeAttribute("w"),
          c.removeAttribute("pinned")));
      var d = c.firstChild || c.nextSibling;
      if (!d)
        for (d = c.parentNode; d; ) {
          if (d.nextSibling) {
            d = d.nextSibling;
            break;
          }
          d = d.parentNode;
        }
      c = d;
    }
    a = g.W.re(a);
    if (-1 == this.Gb.indexOf(a)) {
      for (this.Gb.unshift(a); this.Gb.length > this.s.options.gs; )
        this.Gb.pop();
      this.Uw = a = this.BF;
      this.Ur || ee(this, a * g.kd.zz);
    }
  }
};
g.rq = function () {
  g.rq.v.constructor.call(this);
};
g.g.object.X(g.rq, g.Cl);
b = g.rq.prototype;
b.ic = function (a) {
  switch (a.name) {
    case g.navigation.Db.Pd:
      return this.Df(), !0;
    case g.navigation.Db.Ld:
      return this.next(), !0;
    default:
      return !1;
  }
};
b.next = function () {
  var a = this.lb;
  if (!a) return null;
  (a = a.next()) && I(this, a);
  return a;
};
b.Vg = function () {
  return null;
};
b.Df = function () {
  var a = this.lb;
  if (!a) return null;
  (a = a.Df()) && I(this, a);
  return a;
};
b.Zg = function () {
  return null;
};
g.qn = function (a) {
  a.Zc = this.Kr.bind(this);
  a.tp = this.eL.bind(this);
  this.s = new g.yb(a);
  this.s.eg = !0;
  this.s.Jb(this.gi);
  this.L = !!a.L;
  this.Bd = !1;
  this.Kj = a.Ka;
  this.Mv = [];
  this.ds = [];
  this.Qn = [];
  this.ie = [];
  this.zx = [];
  this.Zm = this.s.Mb.la().Hq;
  this.fb = null;
};
b = g.qn.prototype;
b.cm = !0;
b.gi = !1;
b.mk = !0;
b.Nb = 8;
b.Ji = g.qn.prototype.Nb;
b.xF = 3 * g.qn.prototype.Ji;
b.yF = 3 * g.qn.prototype.Ji;
b.mu = 2;
b.ub = 0;
b.Qc = 0;
b.iI = 70;
b.$a = function (a) {
  this.P = g.g.o.M(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.td = g.g.o.M(g.g.F.Od, { class: "blocklyFlyoutBackground" }, this.P);
  this.P.appendChild(this.s.$a());
  this.s.Dc.subscribe(this.td, "flyoutBackgroundColour", "fill");
  this.s.Dc.subscribe(this.td, "flyoutOpacity", "fill-opacity");
  Cc(this.s.Qe, new g.rq());
  return this.P;
};
b.R = function (a) {
  this.fb = a;
  this.s.fb = a;
  this.Sa = new g.Va(this.s, this.Bd, !1, "blocklyFlyoutScrollbar");
  this.Ja();
  Array.prototype.push.apply(this.Mv, g.wa(this.P, "wheel", this, this.OL));
  this.cm || ((this.Cr = this.Nv.bind(this)), H(this.fb, this.Cr));
  Array.prototype.push.apply(
    this.Mv,
    g.wa(this.td, "mousedown", this, this.uj)
  );
  this.s.Wh = this.fb.Wh.bind(this.fb);
  this.s.Zx(this.fb.Ta);
  a = this.s;
  a.yj = new g.Bu(a);
};
b.I = function () {
  this.Ja();
  g.Ma(this.Mv);
  this.Cr && (ob(this.fb, this.Cr), (this.Cr = null));
  this.Sa && (this.Sa.I(), (this.Sa = null));
  this.s &&
    (this.s.Dc.unsubscribe(this.td),
    (this.s.fb = null),
    this.s.I(),
    (this.s = null));
  this.P && (g.g.o.removeNode(this.P), (this.P = null));
  this.fb = this.td = null;
};
b.Sg = function () {
  return this.ub;
};
b.isVisible = function () {
  return this.gi;
};
b.Jb = function (a) {
  var c = a != this.isVisible();
  this.gi = a;
  c && this.Lp();
};
b.jl = function (a) {
  var c = a != this.mk;
  this.mk = a;
  c && this.Lp();
};
b.Lp = function () {
  var a = this.mk ? this.isVisible() : !1;
  this.P.style.display = a ? "block" : "none";
  this.Sa.jl(a);
};
b.Ja = function () {
  if (this.isVisible()) {
    this.Jb(!1);
    for (var a = 0, c; (c = this.ie[a]); a++) g.Ma(c);
    this.ie.length = 0;
    this.zj && (ob(this.s, this.zj), (this.zj = null));
  }
};
b.show = function (a) {
  this.s.dd(!1);
  this.Ja();
  fe(this);
  "string" == typeof a && (a = ge(this, a));
  this.Jb(!0);
  a = g.g.za.dB(a);
  a = he(this, a);
  ie(this, a.MH, a.tI);
  this.ie.push(
    g.wa(this.td, "mouseover", this, function () {
      for (var c = this.s.ac(!1), d = 0, e; (e = c[d]); d++) e.jp();
    })
  );
  this.Bd ? (this.Qc = 0) : (this.ub = 0);
  this.s.dd(!0);
  this.Gx();
  this.Nv();
  this.position();
  this.zj = this.Gx.bind(this);
  H(this.s, this.zj);
};
function he(a, c) {
  var d = [],
    e = [];
  a.zx.length = 0;
  for (var f = a.Bd ? a.xF : a.yF, h = 0, k; (k = c[h]); h++) {
    if (k.custom) {
      var l = ge(a, k.custom);
      l = g.g.za.dB(l);
      c.splice.apply(c, [h, 1].concat(l));
      k = c[h];
    }
    switch (k.kind.toUpperCase()) {
      case "BLOCK":
        l = k;
        var m = l;
        k = null;
        var n = m.blockxml;
        n && "string" != typeof n
          ? (k = n)
          : n && "string" == typeof n
          ? ((k = g.W.Hf(n)), (m.blockxml = k))
          : m.type &&
            ((k = g.g.xml.createElement("xml")),
            k.setAttribute("type", m.type),
            k.setAttribute("disabled", m.disabled),
            (m.blockxml = k));
        if (!k)
          throw Error(
            "Error: Invalid block definition. Block definition must have blockxml or type."
          );
        m = k;
        k = a;
        n = g.W.rk(m, k.s);
        n.isEnabled() || k.zx.push(n);
        k = n;
        l = parseInt(l.gap || m.getAttribute("gap"), 10);
        e.push(isNaN(l) ? f : l);
        d.push({ type: "block", block: k });
        break;
      case "SEP":
        l = e;
        m = f;
        k = parseInt(k.gap, 10);
        !isNaN(k) && 0 < l.length ? (l[l.length - 1] = k) : l.push(m);
        break;
      case "LABEL":
        l = je(a, k, !0);
        d.push({ type: "button", button: l });
        e.push(f);
        break;
      case "BUTTON":
        (l = je(a, k, !1)), d.push({ type: "button", button: l }), e.push(f);
    }
  }
  return { MH: d, tI: e };
}
function ge(a, c) {
  c = a.s.fb.oy[c] || null;
  if ("function" != typeof c)
    throw TypeError(
      "Couldn't find a callback function when opening a toolbox category."
    );
  a = c(a.s.fb);
  if (!Array.isArray(a))
    throw new TypeError(
      "Result of toolbox category callback must be an array."
    );
  return a;
}
function je(a, c, d) {
  if (!g.Vj) throw Error("Missing require for Blockly.FlyoutButton");
  return new g.Vj(a.s, a.fb, c, d);
}
function fe(a) {
  for (var c = a.s.ac(!1), d = 0, e; (e = c[d]); d++) e.u == a.s && e.I(!1, !1);
  for (d = 0; d < a.ds.length; d++)
    if ((c = a.ds[d])) g.K.sy(c), g.g.o.removeNode(c);
  for (d = a.ds.length = 0; (c = a.Qn[d]); d++) c.I();
  a.Qn.length = 0;
  a.s.yj.clear();
}
function ke(a, c) {
  return function (d) {
    var e = a.fb.Wh(d);
    e && (Ib(e, c), Hb(e, d, a));
  };
}
b.uj = function (a) {
  var c = this.fb.Wh(a);
  c && Hb(c, a, this);
};
function zb(a, c) {
  var d = null;
  g.h.disable();
  var e = a.fb.yk();
  a.fb.dd(!1);
  try {
    var f = a.fb;
    if (!c.Pa()) throw Error("oldBlock is not rendered.");
    var h = g.W.Jh(c, !0);
    f.dd(!1);
    var k = g.W.rk(h, f);
    if (!k.Pa()) throw Error("block is not rendered.");
    var l = g.g.Bo(f.Bb),
      m = g.g.Bo(a.s.Bb),
      n = c.ab();
    n.scale(a.s.scale);
    var p = g.g.T.sum(m, n),
      r = g.g.T.ho(p, l);
    r.scale(1 / f.scale);
    k.moveBy(r.x, r.y);
    d = k;
  } finally {
    g.h.enable();
  }
  g.Bc();
  c = g.$.JB(a.fb, e);
  if (g.h.isEnabled()) {
    g.h.ea(!0);
    for (e = 0; e < c.length; e++) g.h.Ha(new g.h.gf(c[e]));
    g.h.Ha(new g.h.Nf(d));
  }
  a.cm ? a.Ja() : a.Nv();
  return d;
}
b.Nv = function () {
  for (var a = this.s.ac(!1), c = 0, d; (d = a[c]); c++)
    if (-1 == this.zx.indexOf(d))
      for (var e = lb(this.fb, g.g.Uv(d)); d; ) d.je(e), (d = t(d));
};
b.Gx = function () {
  this.zj && ob(this.s, this.zj);
  this.s.scale = this.fb.scale;
  for (var a = 0, c = this.s.ac(!1), d = 0, e; (e = c[d]); d++) {
    var f = F(e).width;
    e.O && (f -= this.Zm);
    a = Math.max(a, f);
  }
  for (d = 0; (e = this.Qn[d]); d++) a = Math.max(a, e.width);
  a += 1.5 * this.Ji + this.Zm;
  a *= this.s.scale;
  a += g.Va.Sc;
  if (this.ub != a) {
    for (d = 0; (e = c[d]); d++) {
      if (this.L) {
        f = e.ab().x;
        var h = a / this.s.scale - this.Ji;
        e.O || (h -= this.Zm);
        e.moveBy(h - f, 0);
      }
      e.EB &&
        ((f = e.EB),
        (h = e),
        (e = F(h)),
        f.setAttribute("width", e.width),
        f.setAttribute("height", e.height),
        (h = h.ab()),
        f.setAttribute("y", h.y),
        f.setAttribute("x", this.L ? h.x - e.width : h.x));
    }
    if (this.L)
      for (d = 0; (e = this.Qn[d]); d++)
        e.moveTo(a / this.s.scale - e.width - this.Ji - this.Zm, e.fl.y);
    this.fb.Ka != this.Kj ||
      this.Kj != g.De ||
      this.fb.La ||
      this.fb.translate(this.fb.scrollX + a, this.fb.scrollY);
    this.ub = a;
    this.position();
  }
  this.zj && H(this.s, this.zj);
};
function Cb(a) {
  return a.Sa ? a.Sa.isVisible() : !1;
}
b.ic = function (a) {
  return this.s.Ib().ic(a);
};
g.Hh = function (a) {
  g.Hh.v.constructor.call(this, a);
};
g.g.object.X(g.Hh, g.qn);
g.Hh.TO = "verticalFlyout";
b = g.Hh.prototype;
b.Kr = function () {
  if (!this.isVisible()) return null;
  try {
    var a = this.s.Bb.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var c = this.mu,
    d = this.Qc - 2 * this.mu,
    e = this.ub;
  this.L || (e -= this.mu);
  return {
    Wd: a.height * this.s.scale + 2 * this.Ji,
    mf: a.width * this.s.scale + 2 * this.Ji,
    Yc: a.y,
    md: a.x,
    Ub: d,
    Kb: e,
    ec: -this.s.scrollY + a.y,
    Yb: -this.s.scrollX,
    Xc: c,
    Oc: 0,
  };
};
b.eL = function (a) {
  var c = this.Kr();
  c &&
    ("number" == typeof a.y && (this.s.scrollY = -c.Wd * a.y),
    this.s.translate(this.s.scrollX + c.Oc, this.s.scrollY + c.Xc));
};
b.position = function () {
  if (this.isVisible()) {
    var a = this.fb.Zc();
    if (a) {
      this.Qc = a.Ub;
      var c = this.ub - this.Nb;
      a = a.Ub - 2 * this.Nb;
      var d = this.Kj == g.Wl,
        e = c + this.Nb;
      e = ["M " + (d ? e : 0) + ",0"];
      e.push("h", d ? -c : c);
      e.push(
        "a",
        this.Nb,
        this.Nb,
        0,
        0,
        d ? 0 : 1,
        d ? -this.Nb : this.Nb,
        this.Nb
      );
      e.push("v", Math.max(0, a));
      e.push(
        "a",
        this.Nb,
        this.Nb,
        0,
        0,
        d ? 0 : 1,
        d ? this.Nb : -this.Nb,
        this.Nb
      );
      e.push("h", d ? c : -c);
      e.push("z");
      this.td.setAttribute("d", e.join(" "));
      c = (c = this.fb.Zc())
        ? this.fb.Ka == this.Kj
          ? c.UD
            ? this.Kj == g.De
              ? c.UD
              : c.Kb - this.ub
            : this.Kj == g.De
            ? 0
            : c.Kb
          : this.Kj == g.De
          ? 0
          : c.Kb + c.Oc - this.ub
        : 0;
      a = this.Qc;
      this.P.setAttribute("width", this.ub);
      this.P.setAttribute("height", a);
      "svg" == this.P.tagName
        ? g.g.o.rp(this.P, "translate(" + c + "px,0px)")
        : this.P.setAttribute("transform", "translate(" + c + ",0)");
      this.Sa &&
        ((this.Sa.sx = new g.g.T(c, 0)),
        this.Sa.resize(),
        this.Sa.setPosition(this.Sa.position.x, this.Sa.position.y));
    }
  }
};
b.Tx = function () {
  this.Sa.set(0);
};
b.OL = function (a) {
  var c = g.g.WB(a);
  if (c.y) {
    var d = this.Kr();
    c = d.ec - d.Yc + c.y;
    c = Math.min(c, d.Wd - d.Ub);
    c = Math.max(c, 0);
    this.Sa.set(c);
    g.ca.Ja();
    g.H.Dk();
  }
  a.preventDefault();
  a.stopPropagation();
};
function ie(a, c, d) {
  a.s.scale = a.fb.scale;
  for (var e = a.Ji, f = a.L ? e : e + a.Zm, h = 0, k; (k = c[h]); h++)
    if ("block" == k.type) {
      k = k.block;
      for (var l = q(k, !1), m = 0, n; (n = l[m]); m++) n.Qb = !0;
      k.Ia();
      n = k.Pa();
      l = F(k);
      m = k.O ? f - a.Zm : f;
      k.moveBy(m, e);
      var p = a,
        r = k,
        w = h;
      m = g.g.o.M(
        g.g.F.Hc,
        {
          "fill-opacity": 0,
          x: a.L ? m - l.width : m,
          y: e,
          height: l.height,
          width: l.width,
        },
        null
      );
      m.If = r;
      g.K.dm(m);
      p.s.Bb.insertBefore(m, r.Pa());
      r.EB = m;
      p.ds[w] = m;
      p = a;
      p.ie.push(g.wa(n, "mousedown", null, ke(p, k)));
      p.ie.push(g.wa(m, "mousedown", null, ke(p, k)));
      p.ie.push(g.Ud(n, "mouseenter", k, k.Mq));
      p.ie.push(g.Ud(n, "mouseleave", k, k.jp));
      p.ie.push(g.Ud(m, "mouseenter", k, k.Mq));
      p.ie.push(g.Ud(m, "mouseleave", k, k.jp));
      e += l.height + d[h];
    } else
      "button" == k.type &&
        ((l = a),
        (m = k.button),
        (n = f),
        (p = e),
        (r = m.$a()),
        m.moveTo(n, p),
        m.show(),
        l.ie.push(g.wa(r, "mousedown", l, l.uj)),
        l.Qn.push(m),
        (e += k.button.height + d[h]));
}
b.rm = function () {
  if (!this.P) return null;
  var a = this.P.getBoundingClientRect(),
    c = a.left;
  return this.Kj == g.De
    ? new g.g.Rect(-1e9, 1e9, -1e9, c + a.width)
    : new g.g.Rect(-1e9, 1e9, c, 1e9);
};
g.C.register(g.C.aa.gz, g.C.lq, g.Hh);
function le(a, c, d) {
  var e = T;
  this.name = a;
  this.HD = c;
  this.lL = 0;
  this.zB = d;
  this.Ti = e;
  this.Wa = new g.g.T();
  this.reset();
  this.dt = e.fd.length;
  e.fd.push(this);
  console.log(this + " loaded.");
}
b = le.prototype;
b.qL = !1;
b.Yf = !1;
b.Xf = 0;
b.Sh = 0;
b.facing = 0;
b.speed = 0;
b.Jg = 0;
b.Wa = null;
b.Aw = 0;
b.toString = function () {
  return "[" + this.name + "]";
};
function me(a, c, d, e) {
  a.GA = c;
  a.BC = d;
  a.IH = e;
}
b.reset = function () {
  delete this.qL;
  delete this.Yf;
  delete this.speed;
  delete this.Jg;
  delete this.Aw;
  this.Xf = this.lL;
  this.Wa.x = this.HD.x;
  this.Wa.y = this.HD.y;
  this.facing = this.Sh = vd(
    g.g.Ra.$m(Math.atan2(50 - this.Wa.y, 50 - this.Wa.x))
  );
  this.sC = null;
};
b.ow = function () {
  this.sC = new Interpreter(this.IH, this.Ti.ow);
};
function ne(a, c) {
  a.Xf += c;
  100 <= a.Xf && oe(a);
}
function oe(a) {
  a.speed = 0;
  a.Yf = !0;
  a.Xf = 100;
  a.Ti.Dq.unshift(a);
  a.Ti.qg.push({ type: "DIE", avatar: a });
  console.log(a + " sinks.");
}
b.stop = function () {
  this.Jg = 0;
};
var T = {
  fd: [],
  Dq: [],
  qg: [],
  Ll: [],
  wF: 50,
  PG: 100,
  GG: 0.5,
  pf: null,
  oE: 1,
  Cz: 3,
  Cy: 5,
  CE: 5,
  xt: 3,
  jD: 0,
  Br: 0,
  PD: 0,
  VG: 3e5,
  Bv: null,
  reset: function () {
    clearTimeout(T.jD);
    T.qg.length = 0;
    T.Ll.length = 0;
    T.Dq.length = 0;
    for (var a = (T.PD = 0), c; (c = T.fd[a]); a++) c.reset();
  },
  start: function (a) {
    T.Bv = a;
    T.Br = Date.now() + T.VG;
    console.log("Starting battle with " + T.fd.length + " avatars.");
    a = 0;
    for (var c; (c = T.fd[a]); a++)
      try {
        c.ow();
      } catch (d) {
        console.log(c + " fails to load: " + d), oe(c);
      }
    T.update();
  },
  update: function () {
    T.GL();
    T.HL();
    T.FL();
    T.fd.length <= T.Dq.length + 1 && (T.Br = Math.min(T.Br, Date.now() + 1e3));
    Date.now() > T.Br ? T.stop() : (T.jD = setTimeout(T.update, 1e3 / T.wF));
  },
  stop: function () {
    for (var a = [], c = 0, d; (d = T.fd[c]); c++) d.Yf || a.push(d);
    c = a.length;
    for (
      a.sort(function (e, f) {
        return e.Xf - f.Xf;
      });
      a.length;

    )
      T.Dq.unshift(a.pop());
    T.Bv && T.Bv(c);
  },
  HL: function () {
    for (var a = T.Ll.length - 1; 0 <= a; a--) {
      var c = T.Ll[a];
      c.progress += T.Cz;
      var d = 0;
      if (c.Fs - c.progress < T.Cz / 2) {
        T.Ll.splice(a, 1);
        for (var e = 0, f; (f = T.fd[e]); e++)
          if (!f.Yf) {
            var h = 10 * (1 - g.g.T.io(f.Wa, c.lo) / 4);
            0 < h && (ne(f, h), (d = Math.max(d, h)));
          }
        T.qg.push({ type: "BOOM", damage: d, x: c.lo.x, y: c.lo.y });
      }
    }
  },
  FL: function () {
    for (var a = 0, c; (c = T.fd[a]); a++)
      if (
        !c.Yf &&
        (c.speed < c.Jg
          ? (c.speed = Math.min(c.speed + T.Cy, c.Jg))
          : c.speed > c.Jg && (c.speed = Math.max(c.speed - T.Cy, c.Jg)),
        0 < c.speed)
      ) {
        var d = T.SA(c),
          e = d[1],
          f = g.g.Ra.Ed(c.Sh),
          h = (c.speed / 100) * T.oE,
          k = Math.cos(f) * h;
        h *= Math.sin(f);
        c.Wa.x += k;
        c.Wa.y += h;
        0 > c.Wa.x || 100 < c.Wa.x || 0 > c.Wa.y || 100 < c.Wa.y
          ? ((c.Wa.x = g.g.Ra.Bg(c.Wa.x, 0, 100)),
            (c.Wa.y = g.g.Ra.Bg(c.Wa.y, 0, 100)),
            (e = (c.speed / 100) * T.xt),
            ne(c, e),
            (c.speed = 0),
            (c.Jg = 0),
            T.qg.push({ type: "CRASH", avatar: c, damage: e }))
          : ((d = T.SA(c)),
            (f = d[0]),
            (d = d[1]),
            d < T.CE &&
              e > d &&
              ((c.Wa.x -= k),
              (c.Wa.y -= h),
              (e = (Math.max(c.speed, f.speed) / 100) * T.xt),
              ne(c, e),
              (c.speed = 0),
              (c.Jg = 0),
              ne(f, e),
              (f.speed = 0),
              (f.Jg = 0),
              T.qg.push(
                { type: "CRASH", avatar: c, damage: e },
                { type: "CRASH", avatar: f, damage: e }
              )));
      }
  },
  GL: function () {
    for (var a = 0; a < T.PG; a++) {
      T.PD++;
      for (var c = 0, d; (d = T.fd[c]); c++)
        if (!d.Yf) {
          T.pf = d;
          try {
            d.sC.step();
          } catch (e) {
            console.log(d + " throws an error: " + e), oe(d);
          }
          T.pf = null;
        }
    }
  },
  ow: function (a, c) {
    var d = function (e) {
      console.log(T.pf.name + " logs: " + Number(e));
    };
    a.setProperty(c, "log", a.createNativeFunction(d));
    d = function (e, f) {
      var h = e;
      e = T.pf;
      var k = void 0 === f || null === f ? 5 : f;
      if ("number" != typeof h || isNaN(h) || "number" != typeof k || isNaN(k))
        throw TypeError();
      h = vd(h);
      k = g.g.Ra.Bg(k, 0, 20);
      e.Ti.qg.push({ type: "SCAN", avatar: e, degree: h, resolution: k });
      f = vd(h - k / 2);
      h = vd(h + k / 2);
      f > h && (h += 360);
      k = e.Wa.x;
      for (var l = e.Wa.y, m = Infinity, n = 0, p; (p = e.Ti.fd[n]); n++)
        if (p != e && !p.Yf) {
          var r = p.Wa.x,
            w = p.Wa.y;
          p = Math.sqrt((w - l) * (w - l) + (r - k) * (r - k));
          p >= m ||
            ((r = Math.atan2(w - l, r - k)),
            (r = vd(g.g.Ra.$m(r))),
            r < f && (r += 360),
            f <= r && r <= h && (m = p));
        }
      return m;
    };
    a.setProperty(c, "scan", a.createNativeFunction(d));
    d = function (e, f) {
      var h = f;
      f = T.pf;
      if ("number" != typeof e || isNaN(e) || "number" != typeof h || isNaN(h))
        throw TypeError;
      var k = Date.now();
      f.Aw + 1e3 * f.Ti.GG > k
        ? (e = !1)
        : ((f.Aw = k),
          (k = new g.g.T(f.Wa.x, f.Wa.y)),
          (e = vd(e)),
          (f.facing = e),
          (h = g.g.Ra.Bg(h, 0, 70)),
          (e = {
            rH: f,
            zp: k,
            Sh: e,
            Fs: h,
            lo: new g.g.T(
              k.x + h * Math.cos(g.g.Ra.Ed(e)),
              k.y + h * Math.sin(g.g.Ra.Ed(e))
            ),
            progress: 0,
          }),
          f.Ti.Ll.push(e),
          f.Ti.qg.push({ type: "BANG", avatar: f, degree: e.Sh }),
          (e = !0));
      return e;
    };
    a.setProperty(c, "cannon", a.createNativeFunction(d));
    d = function (e, f) {
      var h = T.pf;
      f = void 0 === f || null === f ? 50 : f;
      if ("number" != typeof e || isNaN(e) || "number" != typeof f || isNaN(f))
        throw TypeError;
      h.Sh != vd(e) &&
        (50 >= h.speed ? ((h.Sh = vd(e)), (h.facing = h.Sh)) : (f = 0));
      0 == h.speed && 0 < f && (h.speed = 0.1);
      h.Jg = g.g.Ra.Bg(f, 0, 100);
    };
    a.setProperty(c, "drive", a.createNativeFunction(d));
    a.setProperty(c, "swim", a.createNativeFunction(d));
    a.setProperty(
      c,
      "stop",
      a.createNativeFunction(function () {
        T.pf.stop();
      })
    );
    a.setProperty(
      c,
      "damage",
      a.createNativeFunction(function () {
        return T.pf.Xf;
      })
    );
    a.setProperty(
      c,
      "health",
      a.createNativeFunction(function () {
        return 100 - T.pf.Xf;
      })
    );
    a.setProperty(
      c,
      "speed",
      a.createNativeFunction(function () {
        return T.pf.speed;
      })
    );
    d = function () {
      return T.pf.Wa.x;
    };
    a.setProperty(c, "loc_x", a.createNativeFunction(d));
    a.setProperty(c, "getX", a.createNativeFunction(d));
    d = function () {
      return T.pf.Wa.y;
    };
    a.setProperty(c, "loc_y", a.createNativeFunction(d));
    a.setProperty(c, "getY", a.createNativeFunction(d));
    if ((c = a.getProperty(c, "Math")))
      (d = function (e) {
        return Math.sin(g.g.Ra.Ed(e));
      }),
        a.setProperty(c, "sin_deg", a.createNativeFunction(d)),
        (d = function (e) {
          return Math.cos(g.g.Ra.Ed(e));
        }),
        a.setProperty(c, "cos_deg", a.createNativeFunction(d)),
        (d = function (e) {
          return Math.tan(g.g.Ra.Ed(e));
        }),
        a.setProperty(c, "tan_deg", a.createNativeFunction(d)),
        (d = function (e) {
          return g.g.Ra.$m(Math.asin(e));
        }),
        a.setProperty(c, "asin_deg", a.createNativeFunction(d)),
        (d = function (e) {
          return g.g.Ra.$m(Math.acos(e));
        }),
        a.setProperty(c, "acos_deg", a.createNativeFunction(d)),
        (d = function (e) {
          return g.g.Ra.$m(Math.atan(e));
        }),
        a.setProperty(c, "atan_deg", a.createNativeFunction(d));
  },
  SA: function (a) {
    for (var c = null, d = Infinity, e = 0, f; (f = T.fd[e]); e++)
      if (!f.Yf && a != f) {
        var h = Math.min(d, g.g.T.io(a.Wa, f.Wa));
        h < d && ((d = h), (c = f));
      }
    return [c, d];
  },
};
var pe,
  qe,
  re,
  se = {},
  te = [],
  ue = new Image();
ue.src = "pond/sprites.png";
var ve = ["#ff8b00", "#c90015", "#166c0b", "#223068"],
  we = 0,
  xe = Object.create(null);
function ye() {
  pe = document.getElementById("scratch").getContext("2d");
  var a = document.getElementById("display").getContext("2d");
  qe = a;
  re = a.canvas.width;
  a.globalCompositeOperation = "copy";
  ze(["pond/whack.mp3", "pond/whack.ogg"], "whack");
  ze(["pond/boom.mp3", "pond/boom.ogg"], "boom");
  ze(["pond/splash.mp3", "pond/splash.ogg"], "splash");
  g.g.userAgent.sh || g.g.userAgent.Ot || Ae();
}
function Be() {
  clearTimeout(we);
  te.length = 0;
  var a = document.getElementById("avatarStatRow1");
  a.innerHTML = "";
  var c = document.getElementById("avatarStatRow2");
  c.innerHTML = "";
  for (
    var d = [], e = [], f = document.getElementById("avatar-select"), h = 0, k;
    (k = T.fd[h]);
    h++
  ) {
    var l = Math.floor(h / 2) % 2 ? c : a,
      m = ve[k.dt % ve.length],
      n = document.createElement("td");
    f &&
      ((n.className = "asButton"),
      n.setAttribute("role", "button"),
      n.addEventListener(
        "click",
        (function (r) {
          return function () {
            f.selectedIndex = r;
            var w = document.createEvent("HTMLEvents");
            w.initEvent("change", !1, !0);
            f.dispatchEvent(w);
          };
        })(h)
      ));
    n.style.borderColor = m;
    var p = document.createElement("div");
    p.className = "avatarStatHealth";
    p.style.background = m;
    k.NL = p;
    e[h] = p;
    n.appendChild(p);
    p = document.createElement("div");
    p.className = "avatarStatName";
    k = document.createTextNode(k.name);
    p.appendChild(k);
    d[h] = p;
    n.appendChild(p);
    p = document.createElement("div");
    k = document.createTextNode("\u00a0");
    p.appendChild(k);
    n.appendChild(p);
    l.appendChild(n);
  }
  for (h = 0; (p = d[h]); h++)
    p.style.width = p.parentNode.offsetWidth - 2 + "px";
  for (h = 0; (p = e[h]); h++)
    p.style.height = p.parentNode.offsetHeight - 2 + "px";
  Ce();
}
var De = 0,
  Ee = 0;
function Fe() {
  Ce();
  var a = Date.now(),
    c = Math.max(1, 1e3 / 36 - (a - De - Ee));
  we = setTimeout(Fe, c);
  De = a;
  Ee = c;
}
function Ge(a) {
  return (a / 100) * (re - 35) + 17.5;
}
function Ce() {
  var a = pe;
  a.beginPath();
  a.rect(0, 0, a.canvas.width, a.canvas.height);
  a.fillStyle = "#527dbf";
  a.fill();
  for (var c = [], d = 0, e; (e = T.fd[d]); d++) e.Yf && c.push(e);
  for (d = 0; (e = T.fd[d]); d++) e.Yf || c.push(e);
  for (d = 0; (e = c[d]); d++) {
    a.save();
    var f = Ge(e.Wa.x),
      h = Ge(100 - e.Wa.y);
    a.translate(f, h);
    var k = (e.dt % ve.length) * 35;
    e.Yf && (a.globalAlpha = 0.25);
    0 < e.speed &&
      (a.save(),
      (f = 50 < e.speed ? 0 : 25 < e.speed ? 35 : 70),
      a.rotate(g.g.Ra.Ed(-e.Sh)),
      a.drawImage(ue, 455, f, 35, 35, -45.5, -17.5, 35, 35),
      a.restore());
    a.drawImage(ue, 0, k, 35, 35, -17.5, -17.5, 35, 35);
    f = g.g.Ra.Ed(e.facing);
    a.translate(12 * Math.cos(f), 12 * -Math.sin(f) - 2);
    f = ((14 - Math.round((e.facing / 360) * 12)) % 12) + 1;
    e = e.facing % 30;
    15 <= e && (e -= 30);
    e /= 1.5;
    a.rotate(g.g.Ra.Ed(-e));
    a.drawImage(ue, 35 * f, k, 35, 35, -15.5, -15.5, 35, 35);
    a.restore();
  }
  for (d = 0; (e = T.Ll[d]); d++) {
    a.save();
    h = e.progress / e.Fs;
    k = (e.lo.y - e.zp.y) * -h;
    f = e.Fs / 2;
    var l = 0.15 * e.Fs;
    f = l - Math.pow((((e.progress - f) / Math.sqrt(l)) * l) / f, 2);
    h = Ge(e.zp.x + (e.lo.x - e.zp.x) * h);
    l = Ge(100 - e.zp.y + k - f);
    k = Ge(100 - e.zp.y + k);
    a.beginPath();
    a.arc(h, k, 5 * Math.max(0, 1 - f / 10), 0, 2 * Math.PI, !0);
    a.closePath();
    a.fillStyle = "rgba(128, 128, 128, " + Math.max(0, 1 - f / 10) + ")";
    a.fill();
    a.beginPath();
    a.arc(h, l, 5, 0, 2 * Math.PI, !0);
    a.closePath();
    a.fillStyle = ve[e.rH.dt % ve.length];
    a.fill();
  }
  for (d = 0; d < T.qg.length; d++)
    if (((f = T.qg[d]), (e = f.avatar), "CRASH" == f.type)) {
      if (((k = se[e.id]), !k || k + 1e3 < Date.now()))
        He("whack", f.damage / T.xt), (se[e.id] = Date.now());
    } else
      "SCAN" == f.type
        ? ((h = Math.max(f.resolution / 2, 0.5)),
          (k = -g.g.Ra.Ed(f.degree + h)),
          (l = -g.g.Ra.Ed(f.degree - h)),
          a.beginPath(),
          (f = Ge(e.Wa.x)),
          (h = Ge(100 - e.Wa.y)),
          a.moveTo(f, h),
          a.lineTo(f + 200 * Math.cos(k), h + 200 * Math.sin(k)),
          a.arc(f, h, 200, k, l),
          a.lineTo(f, h),
          (e = a.createRadialGradient(f, h, 17.5, f, h, 200)),
          e.addColorStop(0, "rgba(255, 255, 255, 0.3)"),
          e.addColorStop(1, "rgba(255, 255, 255, 0)"),
          (a.fillStyle = e),
          a.fill())
        : "BANG" != f.type &&
          ("BOOM" == f.type
            ? (f.damage && He("boom", f.damage / 10),
              te.push({ x: f.x, y: f.y, t: 0 }))
            : "DIE" == f.type && He("splash"));
  T.qg.length = 0;
  for (d = te.length - 1; 0 <= d; d--)
    (e = te[d]),
      (f = Ge(e.x)),
      (h = Ge(100 - e.y)),
      a.beginPath(),
      a.arc(f, h, e.t + 1, 0, 2 * Math.PI, !0),
      a.closePath(),
      (a.lineWidth = 5),
      (a.strokeStyle = "rgba(255, 255, 255, " + (1 - e.t / 10) + ")"),
      a.stroke(),
      (e.t += 2),
      10 < e.t && te.splice(d, 1);
  qe.drawImage(a.canvas, 0, 0);
  for (d = 0; (e = c[d]); d++)
    (a = e.NL),
      (a.parentNode.title = e.name + ": " + Math.round(100 - e.Xf) + "%"),
      (a.style.width =
        Math.max(0, a.parentNode.offsetWidth * (1 - e.Xf / 100) - 2) + "px");
}
function ze(a, c) {
  if (window.Audio && a.length) {
    for (var d, e = new window.Audio(), f = 0; f < a.length; f++) {
      var h = a[f],
        k = h.match(/\.(\w+)$/);
      if (k && e.canPlayType("audio/" + k[1])) {
        d = new window.Audio(h);
        break;
      }
    }
    d && d.play && (xe[c] = d);
  }
}
function Ae() {
  for (var a in xe) {
    var c = xe[a];
    c.volume = 0.01;
    c.play().catch(function () {});
    c.pause();
  }
}
function He(a, c) {
  a = xe[a];
  a = g.g.userAgent.sh || g.g.userAgent.Oj ? a : a.cloneNode();
  a.volume = void 0 === c ? 1 : c;
  a.play();
}
var U = null,
  Ie = !1;
function Je() {
  if (!Ie) {
    var a = document.getElementById("docsButton"),
      c = document.getElementById("dialogDocs"),
      d = document.getElementById("frameDocs"),
      e = "pond/docs.html?lang=" + id + "&mode=" + ld;
    d.src != e && (d.src = e);
    Ie = !0;
    S.qj(a, !1, 0.2);
    S.qj(c, !0, 0.8);
    setTimeout(function () {
      c.style.visibility = "visible";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }, 175);
  }
}
function Ke() {
  if (Ie) {
    var a = document.getElementById("docsButton"),
      c = document.getElementById("dialogDocs");
    Ie = !1;
    S.qj(c, !1, 0.8);
    S.qj(a, !0, 0.2);
    setTimeout(function () {
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }, 175);
    c.style.visibility = "hidden";
  }
}
function Le() {
  var a = U;
  if (a) {
    var c = Gd(),
      d = Ed ? Dd.getValue() : Ne();
    if (Ed) {
      try {
        var e =
          "object" == typeof Babel
            ? Babel.transform(d, { presets: ["es2015"] }).code
            : void 0;
        d = e || d;
      } catch (f) {
        alert(f);
      }
      me(a, void 0, c, d);
    } else me(a, c, void 0, d);
  }
}
function Oe(a) {
  if (!Md(a)) {
    Le();
    a = document.getElementById("runButton");
    var c = document.getElementById("resetButton");
    c.style.minWidth || (c.style.minWidth = a.offsetWidth + "px");
    a.style.display = "none";
    c.style.display = "inline";
    Pe();
  }
}
function Qe(a) {
  Md(a) ||
    ((document.getElementById("runButton").style.display = "inline"),
    (document.getElementById("resetButton").style.display = "none"),
    T.reset(),
    Be());
}
function Pe() {
  "Interpreter" in window
    ? (T.reset(), Be(), T.start(null), Fe())
    : setTimeout(Pe, 250);
}
g.gb = function (a, c, d) {
  "function" != typeof a && g.gb.$D(a);
  this.Xk = a;
  this.ky = this.Dx = this.Gr = null;
  a = this.Xk;
  if (Array.isArray(a)) {
    for (var e = !1, f = 0; f < a.length; f++) {
      var h = a[f][0];
      "string" == typeof h
        ? (a[f][0] = g.g.xe(h))
        : (null != h.alt && (a[f][0].alt = g.g.xe(h.alt)), (e = !0));
    }
    if (!(e || 2 > a.length)) {
      e = [];
      for (f = 0; f < a.length; f++) e.push(a[f][0]);
      f = g.g.tb.$x(e);
      h = g.g.tb.GH(e, f);
      var k = g.g.tb.HH(e, f);
      (!h && !k) ||
        f <= h + k ||
        (h && (this.Dx = e[0].substring(0, h - 1)),
        k && (this.ky = e[0].substr(1 - k)),
        (this.Xk = g.gb.pH(a, h, k)));
    }
  }
  this.Sm = this.getOptions(!1)[0];
  g.gb.v.constructor.call(this, this.Sm[1], c, d);
  this.Xm = this.hf = this.ai = this.$c = this.pp = null;
};
g.g.object.X(g.gb, g.Be);
g.gb.ka = function (a) {
  return new g.gb(a.options, void 0, a);
};
g.gb.prototype.fk = !0;
g.gb.aM = 25;
g.gb.YM = 0.45;
g.gb.IF = 5;
g.gb.JF = 2 * g.gb.IF;
g.gb.Gy = g.g.userAgent.Oj ? "\u25bc" : "\u25be";
b = g.gb.prototype;
b.Bt = "default";
b.gj = function () {
  this.ay() ? Lb(this) : (this.Xu = this.J.Pa());
  Mb(this);
  this.ai = g.g.o.M(g.g.F.Yj, {}, this.Me);
  this.la().nF
    ? ((this.Xm = g.g.o.M(
        g.g.F.Yj,
        { height: this.la().nn + "px", width: this.la().nn + "px" },
        this.Me
      )),
      this.Xm.setAttributeNS(g.g.o.Uf, "xlink:href", this.la().oF))
    : ((this.hf = g.g.o.M(g.g.F.vu, {}, this.Cc)),
      this.hf.appendChild(
        document.createTextNode(this.J.L ? g.gb.Gy + " " : " " + g.gb.Gy)
      ),
      this.J.L
        ? this.Cc.insertBefore(this.hf, this.ui)
        : this.Cc.appendChild(this.hf));
  this.pc && g.g.o.Ga(this.pc, "blocklyDropdownRect");
};
b.ay = function () {
  return !this.la().Ht || (this.la().Ht && !this.J.Qa);
};
b.gg = function (a) {
  this.$c = this.Jv();
  this.$c.qx =
    a && "number" === typeof a.clientX ? new g.g.T(a.clientX, a.clientY) : null;
  this.$c.Ia(g.H.MB());
  g.g.o.Ga(this.$c.Hb, "blocklyDropdownMenu");
  if (this.la().mF) {
    a = this.J.Qa ? this.J.getParent().Xv() : this.J.Xv();
    var c = this.J.Qa ? this.J.getParent().style.Cg : this.J.style.Cg;
    g.H.bd(a, c);
  }
  g.H.CD(this, this.Kv.bind(this));
  this.$c.focus();
  this.pp && this.$c.ri(this.pp);
  this.nc();
};
b.Jv = function () {
  var a = new g.Ut();
  a.Ff(g.g.va.Oi.WF);
  var c = this.getOptions(!1);
  this.pp = null;
  for (var d = 0; d < c.length; d++) {
    var e = c[d][0],
      f = c[d][1];
    if ("object" == typeof e) {
      var h = new Image(e.width, e.height);
      h.src = e.src;
      h.alt = e.alt || "";
      e = h;
    }
    e = new g.Vt(e, f);
    e.Ff(g.g.va.Oi.uG);
    e.Sx = this.J.L;
    e.Vu = !0;
    a.yf.push(e);
    e.Wu = f == this.Fc;
    f == this.Fc && (this.pp = e);
    fc(e, this.SI, this);
  }
  return a;
};
b.Kv = function () {
  this.$c && this.$c.I();
  this.pp = this.$c = null;
  this.nc();
};
b.SI = function (a) {
  g.H.ym(this, !0);
  this.dD(a);
};
b.dD = function (a) {
  this.setValue(a.getValue());
};
g.gb.pH = function (a, c, d) {
  for (var e = [], f = 0; f < a.length; f++) {
    var h = a[f][0],
      k = a[f][1];
    h = h.substring(c, h.length - d);
    e[f] = [h, k];
  }
  return e;
};
b = g.gb.prototype;
b.getOptions = function (a) {
  return "function" == typeof this.Xk
    ? ((this.Gr && a) || ((this.Gr = this.Xk.call(this)), g.gb.$D(this.Gr)),
      this.Gr)
    : this.Xk;
};
b.Yi = function (a) {
  for (var c = !1, d = this.getOptions(!0), e = 0, f; (f = d[e]); e++)
    if (f[1] == a) {
      c = !0;
      break;
    }
  return c
    ? a
    : (this.J &&
        console.warn(
          "Cannot set the dropdown's value to an unavailable option. Block type: " +
            this.J.type +
            ", Field name: " +
            this.name +
            ", Value: " +
            a
        ),
      null);
};
b.Uh = function (a) {
  g.gb.v.Uh.call(this, a);
  a = this.getOptions(!0);
  for (var c = 0, d; (d = a[c]); c++) d[1] == this.Fc && (this.Sm = d);
};
b.nc = function () {
  this.pc &&
    (this.pc.setAttribute("stroke", this.J.style.Cg),
    this.$c
      ? this.pc.setAttribute("fill", this.J.style.Cg)
      : this.pc.setAttribute("fill", "transparent"));
  this.J &&
    this.hf &&
    (this.hf.style.fill = this.J.Qa ? this.J.style.ir : this.J.style.Mh);
};
b.Dj = function () {
  this.ui.nodeValue = "";
  this.ai.style.display = "none";
  var a = this.Sm && this.Sm[0];
  if (a && "object" == typeof a) {
    this.ai.style.display = "";
    this.ai.setAttributeNS(g.g.o.Uf, "xlink:href", a.src);
    this.ai.setAttribute("height", a.height);
    this.ai.setAttribute("width", a.width);
    var c = Number(a.height);
    a = Number(a.width);
    var d = !!this.pc,
      e = Math.max(d ? this.la().cz : 0, c + g.gb.JF);
    d = d ? this.la().El : 0;
    var f = this.Xm
      ? Re(this, a + d, e / 2 - this.la().nn / 2)
      : g.g.o.Zv(this.hf, this.la().Gi, this.la().Hi, this.la().Fi);
    this.le.width = a + f + 2 * d;
    this.le.height = e;
    var h = 0;
    this.J.L
      ? this.ai.setAttribute("x", d + f)
      : ((h = a + f),
        this.Cc.setAttribute("text-anchor", "end"),
        this.ai.setAttribute("x", d));
    this.ai.setAttribute("y", e / 2 - c / 2);
    Pb(this, h + d, a + f);
  } else
    (this.ui.nodeValue = this.Ir()),
      g.g.o.Ga(this.Cc, "blocklyDropdownText"),
      this.Cc.setAttribute("text-anchor", "start"),
      (e = !!this.pc),
      (c = Math.max(e ? this.la().cz : 0, this.la().qq)),
      (a = g.g.o.Zv(this.Cc, this.la().Gi, this.la().Hi, this.la().Fi)),
      (e = e ? this.la().El : 0),
      (d = 0),
      this.Xm && (d = Re(this, a + e, c / 2 - this.la().nn / 2)),
      (this.le.width = a + d + 2 * e),
      (this.le.height = c),
      Pb(this, e, a);
  Qb(this);
};
function Re(a, c, d) {
  if (!a.Xm) return 0;
  var e = a.pc ? a.la().El : 0,
    f = a.la().pF,
    h = a.la().nn;
  a.Xm.setAttribute(
    "transform",
    "translate(" + (a.J.L ? e : c + f) + "," + d + ")"
  );
  return h + f;
}
b.fw = function () {
  if (!this.Sm) return null;
  var a = this.Sm[0];
  return "object" == typeof a ? a.alt : a;
};
g.gb.$D = function (a) {
  if (!Array.isArray(a))
    throw TypeError("FieldDropdown options must be an array.");
  if (!a.length)
    throw TypeError("FieldDropdown options must not be an empty array.");
  for (var c = !1, d = 0; d < a.length; ++d) {
    var e = a[d];
    Array.isArray(e)
      ? "string" != typeof e[1]
        ? ((c = !0),
          console.error(
            "Invalid option[" +
              d +
              "]: Each FieldDropdown option id must be a string. Found " +
              e[1] +
              " in: ",
            e
          ))
        : e[0] &&
          "string" != typeof e[0] &&
          "string" != typeof e[0].src &&
          ((c = !0),
          console.error(
            "Invalid option[" +
              d +
              "]: Each FieldDropdown option must have a string label or image description. Found" +
              e[0] +
              " in: ",
            e
          ))
      : ((c = !0),
        console.error(
          "Invalid option[" +
            d +
            "]: Each FieldDropdown option must be an array. Found: ",
          e
        ));
  }
  if (c) throw TypeError("Found invalid FieldDropdown options.");
};
g.gb.prototype.ic = function (a) {
  if (this.$c)
    switch (a.name) {
      case g.navigation.Db.Pd:
        return dc(this.$c), !0;
      case g.navigation.Db.Ld:
        return (a = this.$c), ec(a, a.yf.indexOf(a.ej), 1), !0;
      default:
        return !1;
    }
  return g.gb.v.ic.call(this, a);
};
g.$f.register("field_dropdown", g.gb);
g.Mc = function (a, c, d) {
  this.yp = !0;
  g.Mc.v.constructor.call(this, a, c, d);
  this.ws = this.vs = this.Cd = null;
  this.Fr = !1;
  this.s = null;
};
g.g.object.X(g.Mc, g.Be);
g.Mc.prototype.Dl = "";
g.Mc.ka = function (a) {
  var c = g.g.xe(a.text);
  return new g.Mc(c, void 0, a);
};
g.Mc.prototype.fk = !0;
g.Mc.sE = 4;
b = g.Mc.prototype;
b.Bt = "text";
b.qe = function (a) {
  g.Mc.v.qe.call(this, a);
  "boolean" == typeof a.spellcheck && (this.yp = a.spellcheck);
};
b.gj = function () {
  if (this.la().iz) {
    for (var a = 0, c = 0, d = 0, e; (e = this.J.V[d]); d++) {
      for (var f = 0; e.kb[f]; f++) a++;
      e.connection && c++;
    }
    this.Fr = 1 >= a && this.J.O && !c;
  } else this.Fr = !1;
  this.Fr ? (this.Xu = this.J.Pa()) : Lb(this);
  Mb(this);
};
b.Yi = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
b.wB = function () {
  if (this.Am) {
    this.xw = !1;
    var a = this.Fc;
    this.Fc = this.Cd.EL;
    this.J &&
      g.h.isEnabled() &&
      g.h.Ha(new g.h.mh(this.J, "field", this.name || null, a, this.Fc));
  }
};
b.Uh = function (a) {
  this.xw = !0;
  this.Fc = a;
  this.Am || (this.ci = !0);
};
b.nc = function () {
  this.J &&
    this.la().iz &&
    (this.pc
      ? this.pc.setAttribute("stroke", this.J.style.Cg)
      : this.J.Rb.dc.setAttribute("fill", this.la().az));
};
b.Dj = function () {
  g.Mc.v.Dj.call(this);
  if (this.Am) {
    Se(this);
    var a = this.Cd;
    this.xw
      ? (g.g.o.jc(a, "blocklyInvalidInput"), g.g.va.sd(a, g.g.va.State.rz, !1))
      : (g.g.o.Ga(a, "blocklyInvalidInput"), g.g.va.sd(a, g.g.va.State.rz, !0));
  }
};
function Te(a) {
  0 != a.yp && ((a.yp = !1), a.Cd && a.Cd.setAttribute("spellcheck", a.yp));
}
b.gg = function (a, c) {
  this.s = this.J.u;
  a = c || !1;
  !a && (g.g.userAgent.Dz || g.g.userAgent.Oj || g.g.userAgent.sh)
    ? Ue(this)
    : (g.ca.show(this, this.J.L, this.PL.bind(this)),
      (this.Cd = this.yy()),
      (this.Am = !0),
      a || (this.Cd.focus({ preventScroll: !0 }), this.Cd.select()));
};
function Ue(a) {
  g.prompt(
    g.i.CHANGE_VALUE_TITLE,
    a.Ad(),
    function (c) {
      this.setValue(c);
    }.bind(a)
  );
}
b.yy = function () {
  var a = g.ca.mb;
  g.g.o.Ga(Kb(this), "editing");
  var c = document.createElement("input");
  c.className = "blocklyHtmlInput";
  c.setAttribute("spellcheck", this.yp);
  var d = Nc(this.s),
    e = this.la().Gi * d + "pt";
  a.style.fontSize = e;
  c.style.fontSize = e;
  e = g.Mc.sE * d + "px";
  if (this.Fr) {
    e = xa(this);
    e = (e.bottom - e.top) / 2 + "px";
    var f = this.J.getParent() ? this.J.getParent().style.Cg : this.J.style.Cg;
    c.style.border = 1 * d + "px solid " + f;
    a.style.borderRadius = e;
    a.style.transition = "box-shadow 0.25s ease 0s";
    this.la().qF &&
      (a.style.boxShadow =
        "rgba(255, 255, 255, 0.3) 0px 0px 0px " + 4 * d + "px");
  }
  c.style.borderRadius = e;
  a.appendChild(c);
  c.value = c.defaultValue = String(this.Fc);
  c.EL = this.Fc;
  c.aD = null;
  Se(this);
  this.vs = g.wa(c, "keydown", this, this.jx);
  this.ws = g.wa(c, "input", this, this.VJ);
  return c;
};
b.PL = function () {
  this.Am = !1;
  this.xw = !0;
  Rb(this);
  this.ix && this.ix(this.Fc);
  this.vs && (g.Ma(this.vs), (this.vs = null));
  this.ws && (g.Ma(this.ws), (this.ws = null));
  var a = g.ca.mb.style;
  a.width = "auto";
  a.height = "auto";
  a.fontSize = "";
  a.transition = "";
  a.boxShadow = "";
  this.Cd = null;
  g.g.o.jc(Kb(this), "editing");
};
b.jx = function (a) {
  if (a.keyCode == g.g.S.nq) g.ca.Ja(), g.H.Dk();
  else if (a.keyCode == g.g.S.Ft)
    (this.Cd.value = this.Cd.defaultValue), g.ca.Ja(), g.H.Dk();
  else if (a.keyCode == g.g.S.TG) {
    g.ca.Ja();
    g.H.Dk();
    var c = this.J,
      d = !a.shiftKey,
      e = new g.Kq();
    I(e, g.G.km(this));
    var f = e.lb;
    e.ic({ name: d ? g.navigation.Db.Ld : g.navigation.Db.Pd });
    (d = e.lb) &&
      d !== f &&
      ((f = d.Fa), Ka(f) && f.gg(void 0), c.u.zb && I(c.u.Ib(), d));
    a.preventDefault();
  }
};
b.VJ = function () {
  var a = this.Cd.value;
  a !== this.Cd.aD &&
    ((this.Cd.aD = a),
    g.h.ea(!0),
    this.setValue(a),
    Rb(this),
    Se(this),
    g.h.ea(!1));
};
function Se(a) {
  var c = g.ca.mb,
    d = xa(a);
  c.style.width = d.right - d.left + "px";
  c.style.height = d.bottom - d.top + "px";
  a = new g.g.T(a.J.L ? d.right - c.offsetWidth : d.left, d.top);
  c.style.left = a.x + "px";
  c.style.top = a.y + "px";
}
b.zC = function () {
  return !0;
};
b.fw = function () {
  return this.Am && this.Cd ? this.Cd.value : null;
};
g.$f.register("field_input", g.Mc);
g.Hd = function (a, c, d, e, f, h) {
  this.Vo = -Infinity;
  this.To = Infinity;
  this.Nm = 0;
  this.kv = null;
  g.Hd.v.constructor.call(this, a, f, h);
  h || (Ve(this, c), We(this, d), Xe(this, e), this.setValue(this.getValue()));
};
g.g.object.X(g.Hd, g.Mc);
g.Hd.prototype.Dl = 0;
g.Hd.ka = function (a) {
  return new g.Hd(a.value, void 0, void 0, void 0, void 0, a);
};
g.Hd.prototype.fk = !0;
g.Hd.prototype.qe = function (a) {
  g.Hd.v.qe.call(this, a);
  Ve(this, a.min);
  We(this, a.max);
  Xe(this, a.precision);
};
function Ve(a, c) {
  null == c ? (a.Vo = -Infinity) : ((c = Number(c)), isNaN(c) || (a.Vo = c));
}
function We(a, c) {
  null == c ? (a.To = Infinity) : ((c = Number(c)), isNaN(c) || (a.To = c));
}
function Xe(a, c) {
  null == c ? (a.Nm = 0) : ((c = Number(c)), isNaN(c) || (a.Nm = c));
  var d = a.Nm.toLocaleString("en-US", { maximumFractionDigits: 20 }),
    e = d.indexOf(".");
  a.kv = -1 == e ? (c ? 0 : null) : d.length - e - 1;
}
g.Hd.prototype.Yi = function (a) {
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = a.replace(/infinity/i, "Infinity");
  a = Number(a || 0);
  if (isNaN(a)) return null;
  a = Math.min(Math.max(a, this.Vo), this.To);
  this.Nm && isFinite(a) && (a = Math.round(a / this.Nm) * this.Nm);
  null != this.kv && (a = Number(a.toFixed(this.kv)));
  return a;
};
g.Hd.prototype.yy = function () {
  var a = g.Hd.v.yy.call(this);
  -Infinity < this.Vo && g.g.va.sd(a, g.g.va.State.cH, this.Vo);
  Infinity > this.To && g.g.va.sd(a, g.g.va.State.bH, this.To);
  return a;
};
g.$f.register("field_number", g.Hd);
g.Id = function (a, c, d, e, f) {
  this.Xk = g.Id.kI;
  this.UH = "string" === typeof a ? a : "";
  this.le = new g.g.ff(0, 0);
  f && this.qe(f);
  c && (this.rl = c);
  f || Ye(this, d, e);
};
g.g.object.X(g.Id, g.gb);
g.Id.ka = function (a) {
  var c = g.g.xe(a.variable);
  return new g.Id(c, void 0, void 0, void 0, a);
};
b = g.Id.prototype;
b.fk = !0;
b.qe = function (a) {
  g.Id.v.qe.call(this, a);
  Ye(this, a.variableTypes, a.defaultType);
};
b.Ik = function () {
  if (!this.ze) {
    var a = g.$.Lr(this.J.u, null, this.UH, this.TH);
    this.Uh(a.Oa());
  }
};
b.ay = function () {
  return (
    g.Id.v.ay.call(this) && (!this.la().Ht || "variables_get" != this.J.type)
  );
};
b.so = function (a) {
  var c = a.getAttribute("id"),
    d = a.textContent,
    e = a.getAttribute("variabletype") || a.getAttribute("variableType") || "";
  c = g.$.Lr(this.J.u, c, d, e);
  if (null != e && e !== c.type)
    throw Error(
      "Serialized variable type with id '" +
        c.Oa() +
        "' had type " +
        c.type +
        ", and does not match variable field that references it: " +
        g.W.re(a) +
        "."
    );
  this.setValue(c.Oa());
};
b.QD = function (a) {
  this.Ik();
  a.id = this.ze.Oa();
  a.textContent = this.ze.name;
  this.ze.type && a.setAttribute("variabletype", this.ze.type);
  return a;
};
b.Yx = function (a) {
  if (a.Qa)
    throw Error("Variable fields are not allowed to exist on shadow blocks.");
  g.Id.v.Yx.call(this, a);
};
b.getValue = function () {
  return this.ze ? this.ze.Oa() : null;
};
b.Ad = function () {
  return this.ze ? this.ze.name : "";
};
b.od = function () {
  return this.ze;
};
b.cC = function () {
  return this.ze ? this.rl : null;
};
b.Yi = function (a) {
  if (null === a) return null;
  var c = g.$.od(this.J.u, a);
  if (!c)
    return (
      console.warn("Variable id doesn't point to a real variable! ID was " + a),
      null
    );
  c = c.type;
  var d;
  a: if ((d = Ze(this))) {
    for (var e = 0; e < d.length; e++)
      if (c == d[e]) {
        d = !0;
        break a;
      }
    d = !1;
  } else d = !0;
  return d
    ? a
    : (console.warn("Variable type doesn't match this field!  Type was " + c),
      null);
};
b.Uh = function (a) {
  this.ze = g.$.od(this.J.u, a);
  g.Id.v.Uh.call(this, a);
};
function Ze(a) {
  var c = a.KL;
  if (null === c && a.J && a.J.u) return a.J.u.gw();
  c = c || [""];
  if (0 == c.length)
    throw (
      ((a = a.Ad()),
      Error("'variableTypes' of field variable " + a + " was an empty list"))
    );
  return c;
}
function Ye(a, c, d) {
  d = d || "";
  if (null == c || void 0 == c) c = null;
  else if (Array.isArray(c)) {
    for (var e = !1, f = 0; f < c.length; f++) c[f] == d && (e = !0);
    if (!e)
      throw Error(
        "Invalid default type '" + d + "' in the definition of a FieldVariable"
      );
  } else
    throw Error(
      "'variableTypes' was not an array in the definition of a FieldVariable"
    );
  a.TH = d;
  a.KL = c;
}
g.Id.kI = function () {
  if (!this.ze)
    throw Error(
      "Tried to call dropdownCreate on a variable field with no variable selected."
    );
  var a = this.Ad(),
    c = [];
  if (this.J && this.J.u)
    for (var d = Ze(this), e = 0; e < d.length; e++)
      c = c.concat(this.J.u.Co(d[e]));
  c.sort(g.Jn.UA);
  d = [];
  for (e = 0; e < c.length; e++) d[e] = [c[e].name, c[e].Oa()];
  d.push([g.i.RENAME_VARIABLE, g.Vz]);
  g.i.DELETE_VARIABLE && d.push([g.i.DELETE_VARIABLE.replace("%1", a), g.Xy]);
  return d;
};
g.Id.prototype.dD = function (a) {
  a = a.getValue();
  if (this.J && this.J.u) {
    if (a == g.Vz) {
      g.$.Ls(this.J.u, this.ze);
      return;
    }
    if (a == g.Xy) {
      this.J.u.Th(this.ze.Oa());
      return;
    }
  }
  this.setValue(a);
};
g.Id.prototype.ip = function () {
  return !0;
};
g.$f.register("field_variable", g.Id);
g.N.Ra = {};
g.ua = {};
g.ua.Math = {};
g.ua.Math.uq = 230;
g.om([
  {
    type: "math_number",
    message0: "%1",
    args0: [{ type: "field_number", name: "NUM", value: 0 }],
    output: "Number",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"],
  },
  {
    type: "math_arithmetic",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Number" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
          ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
          ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
          ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
          ["%{BKY_MATH_POWER_SYMBOL}", "POWER"],
        ],
      },
      { type: "input_value", name: "B", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_single",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
          ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
          ["-", "NEG"],
          ["ln", "LN"],
          ["log10", "LOG10"],
          ["e^", "EXP"],
          ["10^", "POW10"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_trig",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_TRIG_SIN}", "SIN"],
          ["%{BKY_MATH_TRIG_COS}", "COS"],
          ["%{BKY_MATH_TRIG_TAN}", "TAN"],
          ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
          ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
          ["%{BKY_MATH_TRIG_ATAN}", "ATAN"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_constant",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "CONSTANT",
        options: [
          ["\u03c0", "PI"],
          ["e", "E"],
          ["\u03c6", "GOLDEN_RATIO"],
          ["sqrt(2)", "SQRT2"],
          ["sqrt(\u00bd)", "SQRT1_2"],
          ["\u221e", "INFINITY"],
        ],
      },
    ],
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}",
  },
  {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [
      { type: "input_value", name: "NUMBER_TO_CHECK", check: "Number" },
      {
        type: "field_dropdown",
        name: "PROPERTY",
        options: [
          ["%{BKY_MATH_IS_EVEN}", "EVEN"],
          ["%{BKY_MATH_IS_ODD}", "ODD"],
          ["%{BKY_MATH_IS_PRIME}", "PRIME"],
          ["%{BKY_MATH_IS_WHOLE}", "WHOLE"],
          ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
          ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
          ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"],
        ],
      },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator",
  },
  {
    type: "math_change",
    message0: "%{BKY_MATH_CHANGE_TITLE}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}",
      },
      { type: "input_value", name: "DELTA", check: "Number" },
    ],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
    extensions: ["math_change_tooltip"],
  },
  {
    type: "math_round",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}",
  },
  {
    type: "math_on_list",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"],
          ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"],
          ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"],
          ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"],
        ],
      },
      { type: "input_value", name: "LIST", check: "Array" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
    mutator: "math_modes_of_list_mutator",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_modulo",
    message0: "%{BKY_MATH_MODULO_TITLE}",
    args0: [
      { type: "input_value", name: "DIVIDEND", check: "Number" },
      { type: "input_value", name: "DIVISOR", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}",
  },
  {
    type: "math_constrain",
    message0: "%{BKY_MATH_CONSTRAIN_TITLE}",
    args0: [
      { type: "input_value", name: "VALUE", check: "Number" },
      { type: "input_value", name: "LOW", check: "Number" },
      { type: "input_value", name: "HIGH", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}",
  },
  {
    type: "math_random_int",
    message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
    args0: [
      { type: "input_value", name: "FROM", check: "Number" },
      { type: "input_value", name: "TO", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}",
  },
  {
    type: "math_random_float",
    message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}",
  },
  {
    type: "math_atan2",
    message0: "%{BKY_MATH_ATAN2_TITLE}",
    args0: [
      { type: "input_value", name: "X", check: "Number" },
      { type: "input_value", name: "Y", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_ATAN2_TOOLTIP}",
    helpUrl: "%{BKY_MATH_ATAN2_HELPURL}",
  },
]);
g.ua.Math.tu = {
  ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
  MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
  MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
  DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
  POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
  ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
  ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
  NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
  LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
  LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
  EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
  POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
  SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
  COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
  TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
  ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
  ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
  ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
  SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
  MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
  MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
  AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
  MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
  MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
  STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
  RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}",
};
g.ga.register("math_op_tooltip", g.ga.Tq("OP", g.ua.Math.tu));
g.ua.Math.MF = {
  rb: function () {
    var a = g.g.xml.createElement("mutation"),
      c = "DIVISIBLE_BY" == D(this, "PROPERTY");
    a.setAttribute("divisor_input", c);
    return a;
  },
  Xb: function (a) {
    a = "true" == a.getAttribute("divisor_input");
    this.ed(a);
  },
  ed: function (a) {
    var c = z(this, "DIVISOR");
    a ? c || M(this, "DIVISOR").Sb("Number") : c && this.Ab("DIVISOR");
  },
};
g.ua.Math.NF = function () {
  Nb(x(this, "PROPERTY"), function (a) {
    a = "DIVISIBLE_BY" == a;
    this.Y().ed(a);
  });
};
g.ga.Jx("math_is_divisibleby_mutator", g.ua.Math.MF, g.ua.Math.NF);
g.ga.register("math_change_tooltip", g.ga.Qu("%{BKY_MATH_CHANGE_TOOLTIP}"));
g.ua.Math.YF = {
  Op: function (a) {
    "MODE" == a ? this.O.Sb("Array") : this.O.Sb("Number");
  },
  rb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("op", D(this, "OP"));
    return a;
  },
  Xb: function (a) {
    this.Op(a.getAttribute("op"));
  },
};
g.ua.Math.XF = function () {
  Nb(
    x(this, "OP"),
    function (a) {
      this.Op(a);
    }.bind(this)
  );
};
g.ga.Jx("math_modes_of_list_mutator", g.ua.Math.YF, g.ua.Math.XF);
g.qa = function (a, c, d) {
  this.Rn = g.qa.zE;
  this.bl = g.qa.OFFSET;
  this.fE = g.qa.fH;
  this.np = g.qa.JG;
  g.qa.v.constructor.call(this, a, c, d);
  this.os = this.dr = this.er = this.$r = this.to = null;
};
g.g.object.X(g.qa, g.Mc);
g.qa.prototype.Dl = 0;
g.qa.ka = function (a) {
  return new g.qa(a.angle, void 0, a);
};
g.qa.prototype.fk = !0;
g.qa.JG = 15;
g.qa.Nc = 50;
g.qa.zE = !1;
g.qa.OFFSET = 0;
g.qa.fH = 360;
g.qa.zh = g.qa.Nc - 1;
b = g.qa.prototype;
b.qe = function (a) {
  g.qa.v.qe.call(this, a);
  switch (a.mode) {
    case "compass":
      this.Rn = !0;
      this.bl = 90;
      break;
    case "protractor":
      (this.Rn = !1), (this.bl = 0);
  }
  var c = a.clockwise;
  "boolean" == typeof c && (this.Rn = c);
  c = a.offset;
  null != c && ((c = Number(c)), isNaN(c) || (this.bl = c));
  c = a.wrap;
  null != c && ((c = Number(c)), isNaN(c) || (this.fE = c));
  a = a.round;
  null != a && ((a = Number(a)), isNaN(a) || (this.np = a));
};
b.gj = function () {
  g.qa.v.gj.call(this);
  this.MD = g.g.o.M(g.g.F.vu, {}, null);
  this.MD.appendChild(document.createTextNode("\u00b0"));
  this.Cc.appendChild(this.MD);
};
b.Dj = function () {
  g.qa.v.Dj.call(this);
  $e(this);
};
b.gg = function (a) {
  g.qa.v.gg.call(
    this,
    a,
    g.g.userAgent.Dz || g.g.userAgent.Oj || g.g.userAgent.sh
  );
  a = this.Jv();
  g.H.MB().appendChild(a);
  g.H.bd(this.J.style.Mh, this.J.style.Cg);
  g.H.CD(this, this.Kv.bind(this));
  $e(this);
};
b.Jv = function () {
  var a = g.g.o.M(
      g.g.F.Pi,
      {
        xmlns: g.g.o.Fn,
        "xmlns:html": g.g.o.Xj,
        "xmlns:xlink": g.g.o.Uf,
        version: "1.1",
        height: 2 * g.qa.Nc + "px",
        width: 2 * g.qa.Nc + "px",
        style: "touch-action: none",
      },
      null
    ),
    c = g.g.o.M(
      g.g.F.cq,
      { cx: g.qa.Nc, cy: g.qa.Nc, r: g.qa.zh, class: "blocklyAngleCircle" },
      a
    );
  this.to = g.g.o.M(g.g.F.Od, { class: "blocklyAngleGauge" }, a);
  this.$r = g.g.o.M(
    g.g.F.$j,
    { x1: g.qa.Nc, y1: g.qa.Nc, class: "blocklyAngleLine" },
    a
  );
  for (var d = 0; 360 > d; d += 15)
    g.g.o.M(
      g.g.F.$j,
      {
        x1: g.qa.Nc + g.qa.zh,
        y1: g.qa.Nc,
        x2: g.qa.Nc + g.qa.zh - (0 == d % 45 ? 10 : 5),
        y2: g.qa.Nc,
        class: "blocklyAngleMarks",
        transform: "rotate(" + d + "," + g.qa.Nc + "," + g.qa.Nc + ")",
      },
      a
    );
  this.er = g.wa(a, "click", this, this.aJ);
  this.dr = g.wa(c, "click", this, this.Zo, !0, !0);
  this.os = g.wa(c, "mousemove", this, this.Zo, !0, !0);
  return a;
};
b.Kv = function () {
  this.er && (g.Ma(this.er), (this.er = null));
  this.dr && (g.Ma(this.dr), (this.dr = null));
  this.os && (g.Ma(this.os), (this.os = null));
  this.$r = this.to = null;
};
b.aJ = function () {
  g.H.ym(this);
  g.ca.Ja();
};
b.Zo = function (a) {
  var c = this.to.ownerSVGElement.getBoundingClientRect(),
    d = a.clientX - c.left - g.qa.Nc;
  a = a.clientY - c.top - g.qa.Nc;
  c = Math.atan(-a / d);
  isNaN(c) ||
    ((c = g.g.Ra.$m(c)),
    0 > d ? (c += 180) : 0 < a && (c += 360),
    (c = this.Rn ? this.bl + 360 - c : 360 - (this.bl - c)),
    af(this, c));
};
function af(a, c) {
  a.np && (c = Math.round(c / a.np) * a.np);
  c = bf(a, c);
  c != a.Fc && ((a.ci = !0), a.Am && (a.Cd.value = String(c)), a.setValue(c));
}
function $e(a) {
  if (a.to) {
    var c = Number(a.Ad()) + a.bl,
      d = g.g.Ra.Ed(c % 360);
    c = ["M ", g.qa.Nc, ",", g.qa.Nc];
    var e = g.qa.Nc,
      f = g.qa.Nc;
    if (!isNaN(d)) {
      var h = Number(a.Rn),
        k = g.g.Ra.Ed(a.bl),
        l = Math.cos(k) * g.qa.zh,
        m = Math.sin(k) * -g.qa.zh;
      h && (d = 2 * k - d);
      e += Math.cos(d) * g.qa.zh;
      f -= Math.sin(d) * g.qa.zh;
      d = Math.abs(Math.floor((d - k) / Math.PI) % 2);
      h && (d = 1 - d);
      c.push(
        " l ",
        l,
        ",",
        m,
        " A ",
        g.qa.zh,
        ",",
        g.qa.zh,
        " 0 ",
        d,
        " ",
        h,
        " ",
        e,
        ",",
        f,
        " z"
      );
    }
    a.to.setAttribute("d", c.join(""));
    a.$r.setAttribute("x2", e);
    a.$r.setAttribute("y2", f);
  }
}
b.jx = function (a) {
  g.qa.v.jx.call(this, a);
  var c;
  a.keyCode === g.g.S.Zj
    ? (c = this.J.L ? 1 : -1)
    : a.keyCode === g.g.S.dk
    ? (c = this.J.L ? -1 : 1)
    : a.keyCode === g.g.S.Et
    ? (c = -1)
    : a.keyCode === g.g.S.zu && (c = 1);
  if (c) {
    var d = this.getValue();
    af(this, d + c * this.np);
    a.preventDefault();
    a.stopPropagation();
  }
};
b.Yi = function (a) {
  a = Number(a);
  return isNaN(a) || !isFinite(a) ? null : bf(this, a);
};
function bf(a, c) {
  c %= 360;
  0 > c && (c += 360);
  c > a.fE && (c -= 360);
  return c;
}
g.Vc.register(
  ".blocklyAngleCircle {,stroke: #444;,stroke-width: 1;,fill: #ddd;,fill-opacity: .8;,},.blocklyAngleMarks {,stroke: #444;,stroke-width: 1;,},.blocklyAngleGauge {,fill: #f88;,fill-opacity: .8;,pointer-events: none;,},.blocklyAngleLine {,stroke: #f00;,stroke-width: 2;,stroke-linecap: round;,pointer-events: none;,}".split(
    ","
  )
);
g.$f.register("field_angle", g.qa);
g.Generator = function (a) {
  this.rj = a;
  this.uF = new RegExp(this.$e, "g");
};
g.Generator.Aq = "generated_function";
b = g.Generator.prototype;
b.vq = null;
b.oe = null;
b.jd = null;
b.Jd = "  ";
b.DE = 60;
b.Cq = [];
b.ww = null;
function Ne() {
  var a = g.j,
    c = A;
  c ||
    (console.warn("No workspace specified in workspaceToCode call.  Guessing."),
    (c = g.Og()));
  var d = [];
  a.R(c);
  c = c.ac(!0);
  for (var e = 0, f; (f = c[e]); e++) {
    var h = cf(a, f);
    Array.isArray(h) && (h = h[0]);
    h &&
      (f.O &&
        ((h = a.AD(h)),
        a.oe && !f.Jj && (h = V(a.oe, f) + h),
        a.jd && !f.Jj && (h += V(a.jd, f))),
      d.push(h));
  }
  d = d.join("\n");
  d = a.finish(d);
  d = d.replace(/^\s+\n/, "");
  d = d.replace(/\n\s+$/, "\n");
  return (d = d.replace(/[ \t]+\n/g, "\n"));
}
function W(a, c) {
  return c + a.replace(/(?!\n$)\n/g, "\n" + c);
}
function cf(a, c) {
  !1 === a.ww &&
    console.warn(
      "Generator init was not called before blockToCode was called."
    );
  if (!c) return "";
  if (!c.isEnabled()) return cf(a, t(c));
  if (c.we()) return cf(a, Ca(c, !1)[0]);
  var d = a[c.type];
  if ("function" != typeof d)
    throw Error(
      'Language "' +
        a.rj +
        '" does not know how to generate  code for block type "' +
        c.type +
        '".'
    );
  d = d.call(c, c);
  if (Array.isArray(d)) {
    if (!c.O)
      throw TypeError("Expecting string from statement block: " + c.type);
    return [a.Os(c, d[0], void 0), d[1]];
  }
  if ("string" == typeof d)
    return (
      a.oe && !c.Jj && (d = V(a.oe, c) + d),
      a.jd && !c.Jj && (d += V(a.jd, c)),
      a.Os(c, d, void 0)
    );
  if (null === d) return "";
  throw SyntaxError("Invalid code generated: " + d);
}
function X(a, c, d) {
  var e = g.j;
  if (isNaN(d)) throw TypeError("Expecting valid order from block: " + a.type);
  var f = P(a, c);
  if (!f) return "";
  c = cf(e, f);
  if ("" === c) return "";
  if (!Array.isArray(c))
    throw TypeError("Expecting tuple from value block: " + f.type);
  a = c[0];
  c = c[1];
  if (isNaN(c))
    throw TypeError("Expecting valid order from value block: " + f.type);
  if (!a) return "";
  f = !1;
  var h = Math.floor(d),
    k = Math.floor(c);
  if (h <= k && (h != k || (0 != h && 99 != h)))
    for (f = !0, h = 0; h < e.Cq.length; h++)
      if (e.Cq[h][0] == d && e.Cq[h][1] == c) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function df(a, c) {
  var d = g.j;
  a = P(a, c);
  c = cf(d, a);
  if ("string" != typeof c)
    throw TypeError("Expecting code from statement block: " + (a && a.type));
  c && (c = W(c, d.Jd));
  return c;
}
function ef(a, c) {
  var d = g.j;
  d.vq && (a = W(V(d.vq, c), d.Jd) + a);
  d.jd && !c.Jj && (a = W(V(d.jd, c), d.Jd) + a);
  d.oe && !c.Jj && (a += W(V(d.oe, c), d.Jd));
  return a;
}
function V(a, c) {
  c = c.id.replace(/\$/g, "$$$$");
  return a.replace(/%1/g, "'" + c + "'");
}
b.iu = "";
function ff(a, c) {
  a.iu += c + ",";
}
b.$e = "{leCUI8hutHZI4480Dc}";
function Y(a, c) {
  var d = g.j;
  if (!d.pk[a]) {
    var e = Q(d.Tb, a, g.Dn);
    d.Sv[a] = e;
    c = c.join("\n").replace(d.uF, e);
    for (var f; f != c; )
      (f = c), (c = c.replace(/^(( {2})*) {2}/gm, "$1\x00"));
    c = c.replace(/\0/g, d.Jd);
    d.pk[a] = c;
  }
  return d.Sv[a];
}
b.R = function () {};
b.Os = function (a, c) {
  return c;
};
b.finish = function (a) {
  return a;
};
b.AD = function (a) {
  return a;
};
g.j = new g.Generator("JavaScript");
ff(
  g.j,
  "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," +
    Object.getOwnPropertyNames(g.g.global).join(",")
);
g.j.bk = 0;
g.j.JN = 1.1;
g.j.mc = 1.2;
g.j.xb = 2;
g.j.HN = 3;
g.j.DN = 3;
g.j.zN = 4.1;
g.j.MN = 4.2;
g.j.Bn = 4.3;
g.j.zn = 4.4;
g.j.KN = 4.5;
g.j.NN = 4.6;
g.j.EN = 4.7;
g.j.xN = 4.8;
g.j.FN = 5;
g.j.au = 5.1;
g.j.yn = 5.2;
g.j.An = 5.3;
g.j.Ol = 6.1;
g.j.Ni = 6.2;
g.j.BN = 7;
g.j.vG = 8;
g.j.GN = 8;
g.j.IN = 8;
g.j.Kz = 9;
g.j.yN = 10;
g.j.CN = 11;
g.j.AN = 12;
g.j.Zt = 13;
g.j.$t = 14;
g.j.Bq = 15;
g.j.xh = 16;
g.j.ON = 17;
g.j.Jz = 18;
g.j.ib = 99;
g.j.Cq = [
  [g.j.xb, g.j.mc],
  [g.j.xb, g.j.xb],
  [g.j.mc, g.j.mc],
  [g.j.mc, g.j.xb],
  [g.j.zn, g.j.zn],
  [g.j.au, g.j.au],
  [g.j.Ni, g.j.Ni],
  [g.j.Zt, g.j.Zt],
  [g.j.$t, g.j.$t],
];
g.j.ww = !1;
g.j.R = function (a) {
  g.j.pk = Object.create(null);
  g.j.Sv = Object.create(null);
  g.j.Tb ? g.j.Tb.reset() : (g.j.Tb = new g.Md(g.j.iu));
  g.j.Tb.Zx(a.Ta);
  for (var c = [], d = g.$.mH(a), e = 0; e < d.length; e++)
    c.push(g.j.Tb.ae(d[e], g.Md.Dt));
  a = g.$.EA(a);
  for (e = 0; e < a.length; e++) c.push(g.j.Tb.ae(a[e].Oa(), g.zc));
  c.length && (g.j.pk.variables = "var " + c.join(", ") + ";");
  this.ww = !0;
};
g.j.finish = function (a) {
  var c = [],
    d;
  for (d in g.j.pk) c.push(g.j.pk[d]);
  delete g.j.pk;
  delete g.j.Sv;
  g.j.Tb.reset();
  return c.join("\n\n") + "\n\n\n" + a;
};
g.j.AD = function (a) {
  return a + ";\n";
};
g.j.lK = function (a) {
  a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
  return "'" + a + "'";
};
g.j.QO = function (a) {
  return a.split(/\n/g).map(g.j.lK).join(" + '\\n' +\n");
};
g.j.Os = function (a, c, d) {
  var e = "";
  if (!a.O || !a.O.ma) {
    var f = a.Ie.text;
    f && ((f = g.g.tb.dE(f, g.j.DE - 3)), (e += W(f + "\n", "// ")));
    for (var h = 0; h < a.V.length; h++)
      if (a.V[h].type == g.ob) {
        var k = a.V[h].connection.sa();
        if (k) {
          f = [];
          k = q(k, !0);
          for (var l = 0; l < k.length; l++) {
            var m = k[l].Ie.text;
            m && f.push(m);
          }
          f.length && f.push("");
          (f = f.join("\n")) && (e += W(f, "// "));
        }
      }
  }
  a = a.Z && a.Z.sa();
  d = d ? "" : cf(g.j, a);
  return e + c + d;
};
g.j.Ng = function (a, c, d, e, f) {
  d = d || 0;
  f = f || g.j.ib;
  a.u.options.ki && d--;
  var h = a.u.options.ki ? "1" : "0";
  a =
    0 < d
      ? X(a, c, g.j.Ni) || h
      : 0 > d
      ? X(a, c, g.j.Ol) || h
      : e
      ? X(a, c, g.j.Bn) || h
      : X(a, c, f) || h;
  if (g.lj(a)) (a = Number(a) + d), e && (a = -a);
  else {
    if (0 < d) {
      a = a + " + " + d;
      var k = g.j.Ni;
    } else 0 > d && ((a = a + " - " + -d), (k = g.j.Ol));
    e && ((a = d ? "-(" + a + ")" : "-" + a), (k = g.j.Bn));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
g.j.Ra = {};
g.j.math_number = function (a) {
  a = Number(D(a, "NUM"));
  return [a, 0 <= a ? g.j.bk : g.j.Bn];
};
g.j.math_arithmetic = function (a) {
  var c = {
      ADD: [" + ", g.j.Ni],
      MINUS: [" - ", g.j.Ol],
      MULTIPLY: [" * ", g.j.au],
      DIVIDE: [" / ", g.j.yn],
      POWER: [null, g.j.ib],
    }[D(a, "OP")],
    d = c[0];
  c = c[1];
  var e = X(a, "A", c) || "0";
  a = X(a, "B", c) || "0";
  return d ? [e + d + a, c] : ["Math.pow(" + e + ", " + a + ")", g.j.xb];
};
g.j.math_single = function (a) {
  var c = D(a, "OP");
  if ("NEG" == c)
    return (
      (a = X(a, "NUM", g.j.Bn) || "0"),
      "-" == a[0] && (a = " " + a),
      ["-" + a, g.j.Bn]
    );
  a =
    "SIN" == c || "COS" == c || "TAN" == c
      ? X(a, "NUM", g.j.yn) || "0"
      : X(a, "NUM", g.j.ib) || "0";
  switch (c) {
    case "ABS":
      var d = "Math.abs(" + a + ")";
      break;
    case "ROOT":
      d = "Math.sqrt(" + a + ")";
      break;
    case "LN":
      d = "Math.log(" + a + ")";
      break;
    case "EXP":
      d = "Math.exp(" + a + ")";
      break;
    case "POW10":
      d = "Math.pow(10," + a + ")";
      break;
    case "ROUND":
      d = "Math.round(" + a + ")";
      break;
    case "ROUNDUP":
      d = "Math.ceil(" + a + ")";
      break;
    case "ROUNDDOWN":
      d = "Math.floor(" + a + ")";
      break;
    case "SIN":
      d = "Math.sin(" + a + " / 180 * Math.PI)";
      break;
    case "COS":
      d = "Math.cos(" + a + " / 180 * Math.PI)";
      break;
    case "TAN":
      d = "Math.tan(" + a + " / 180 * Math.PI)";
  }
  if (d) return [d, g.j.xb];
  switch (c) {
    case "LOG10":
      d = "Math.log(" + a + ") / Math.log(10)";
      break;
    case "ASIN":
      d = "Math.asin(" + a + ") / Math.PI * 180";
      break;
    case "ACOS":
      d = "Math.acos(" + a + ") / Math.PI * 180";
      break;
    case "ATAN":
      d = "Math.atan(" + a + ") / Math.PI * 180";
      break;
    default:
      throw Error("Unknown math operator: " + c);
  }
  return [d, g.j.yn];
};
g.j.math_constant = function (a) {
  return {
    PI: ["Math.PI", g.j.mc],
    E: ["Math.E", g.j.mc],
    GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", g.j.yn],
    SQRT2: ["Math.SQRT2", g.j.mc],
    SQRT1_2: ["Math.SQRT1_2", g.j.mc],
    INFINITY: ["Infinity", g.j.bk],
  }[D(a, "CONSTANT")];
};
g.j.math_number_property = function (a) {
  var c = X(a, "NUMBER_TO_CHECK", g.j.An) || "0",
    d = D(a, "PROPERTY");
  if ("PRIME" == d) {
    var e =
      Y("mathIsPrime", [
        "function " + g.j.$e + "(n) {",
        "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods",
        "  if (n == 2 || n == 3) {",
        "    return true;",
        "  }",
        "  // False if n is NaN, negative, is 1, or not whole.",
        "  // And false if n is divisible by 2 or 3.",
        "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {",
        "    return false;",
        "  }",
        "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
        "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {",
        "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {",
        "      return false;",
        "    }",
        "  }",
        "  return true;",
        "}",
      ]) +
      "(" +
      c +
      ")";
    return [e, g.j.xb];
  }
  switch (d) {
    case "EVEN":
      e = c + " % 2 == 0";
      break;
    case "ODD":
      e = c + " % 2 == 1";
      break;
    case "WHOLE":
      e = c + " % 1 == 0";
      break;
    case "POSITIVE":
      e = c + " > 0";
      break;
    case "NEGATIVE":
      e = c + " < 0";
      break;
    case "DIVISIBLE_BY":
      (a = X(a, "DIVISOR", g.j.An) || "0"), (e = c + " % " + a + " == 0");
  }
  return [e, g.j.Kz];
};
g.j.math_change = function (a) {
  var c = X(a, "DELTA", g.j.Ni) || "0";
  a = g.j.Tb.ae(D(a, "VAR"), g.zc);
  return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + c + ";\n";
};
g.j.math_round = g.j.math_single;
g.j.math_trig = g.j.math_single;
g.j.math_on_list = function (a) {
  var c = D(a, "OP");
  switch (c) {
    case "SUM":
      a = X(a, "LIST", g.j.mc) || "[]";
      a += ".reduce(function(x, y) {return x + y;})";
      break;
    case "MIN":
      a = X(a, "LIST", g.j.ib) || "[]";
      a = "Math.min.apply(null, " + a + ")";
      break;
    case "MAX":
      a = X(a, "LIST", g.j.ib) || "[]";
      a = "Math.max.apply(null, " + a + ")";
      break;
    case "AVERAGE":
      c = Y("mathMean", [
        "function " + g.j.$e + "(myList) {",
        "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;",
        "}",
      ]);
      a = X(a, "LIST", g.j.ib) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MEDIAN":
      c = Y("mathMedian", [
        "function " + g.j.$e + "(myList) {",
        "  var localList = myList.filter(function (x) {return typeof x == 'number';});",
        "  if (!localList.length) return null;",
        "  localList.sort(function(a, b) {return b - a;});",
        "  if (localList.length % 2 == 0) {",
        "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;",
        "  } else {",
        "    return localList[(localList.length - 1) / 2];",
        "  }",
        "}",
      ]);
      a = X(a, "LIST", g.j.ib) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MODE":
      c = Y("mathModes", [
        "function " + g.j.$e + "(values) {",
        "  var modes = [];",
        "  var counts = [];",
        "  var maxCount = 0;",
        "  for (var i = 0; i < values.length; i++) {",
        "    var value = values[i];",
        "    var found = false;",
        "    var thisCount;",
        "    for (var j = 0; j < counts.length; j++) {",
        "      if (counts[j][0] === value) {",
        "        thisCount = ++counts[j][1];",
        "        found = true;",
        "        break;",
        "      }",
        "    }",
        "    if (!found) {",
        "      counts.push([value, 1]);",
        "      thisCount = 1;",
        "    }",
        "    maxCount = Math.max(thisCount, maxCount);",
        "  }",
        "  for (var j = 0; j < counts.length; j++) {",
        "    if (counts[j][1] == maxCount) {",
        "        modes.push(counts[j][0]);",
        "    }",
        "  }",
        "  return modes;",
        "}",
      ]);
      a = X(a, "LIST", g.j.ib) || "[]";
      a = c + "(" + a + ")";
      break;
    case "STD_DEV":
      c = Y("mathStandardDeviation", [
        "function " + g.j.$e + "(numbers) {",
        "  var n = numbers.length;",
        "  if (!n) return null;",
        "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;",
        "  var variance = 0;",
        "  for (var j = 0; j < n; j++) {",
        "    variance += Math.pow(numbers[j] - mean, 2);",
        "  }",
        "  variance = variance / n;",
        "  return Math.sqrt(variance);",
        "}",
      ]);
      a = X(a, "LIST", g.j.ib) || "[]";
      a = c + "(" + a + ")";
      break;
    case "RANDOM":
      c = Y("mathRandomList", [
        "function " + g.j.$e + "(list) {",
        "  var x = Math.floor(Math.random() * list.length);",
        "  return list[x];",
        "}",
      ]);
      a = X(a, "LIST", g.j.ib) || "[]";
      a = c + "(" + a + ")";
      break;
    default:
      throw Error("Unknown operator: " + c);
  }
  return [a, g.j.xb];
};
g.j.math_modulo = function (a) {
  var c = X(a, "DIVIDEND", g.j.An) || "0";
  a = X(a, "DIVISOR", g.j.An) || "0";
  return [c + " % " + a, g.j.An];
};
g.j.math_constrain = function (a) {
  var c = X(a, "VALUE", g.j.ib) || "0",
    d = X(a, "LOW", g.j.ib) || "0";
  a = X(a, "HIGH", g.j.ib) || "Infinity";
  return ["Math.min(Math.max(" + c + ", " + d + "), " + a + ")", g.j.xb];
};
g.j.math_random_int = function (a) {
  var c = X(a, "FROM", g.j.ib) || "0";
  a = X(a, "TO", g.j.ib) || "0";
  return [
    Y("mathRandomInt", [
      "function " + g.j.$e + "(a, b) {",
      "  if (a > b) {",
      "    // Swap a and b to ensure a is smaller.",
      "    var c = a;",
      "    a = b;",
      "    b = c;",
      "  }",
      "  return Math.floor(Math.random() * (b - a + 1) + a);",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      a +
      ")",
    g.j.xb,
  ];
};
g.j.math_random_float = function () {
  return ["Math.random()", g.j.xb];
};
g.j.math_atan2 = function (a) {
  var c = X(a, "X", g.j.ib) || "0";
  return [
    "Math.atan2(" + (X(a, "Y", g.j.ib) || "0") + ", " + c + ") / Math.PI * 180",
    g.j.yn,
  ];
};
g.lc = function (a) {
  g.lc.v.constructor.call(this, null);
  this.tD = a;
};
g.g.object.X(g.lc, g.ne);
b = g.lc.prototype;
b.fn = 0;
b.Rp = 0;
b.Dv = function (a) {
  g.g.o.M(
    g.g.F.Hc,
    { class: "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" },
    a
  );
  g.g.o.M(
    g.g.F.Od,
    {
      class: "blocklyIconSymbol",
      d:
        "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z",
    },
    a
  );
  g.g.o.M(
    g.g.F.cq,
    { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" },
    a
  );
};
b.mw = function (a) {
  this.U.fe() && g.ne.prototype.mw.call(this, a);
};
b.ev = function () {
  this.Fp = g.g.o.M(g.g.F.Pi, { x: g.ta.vd, y: g.ta.vd }, null);
  if (this.tD.length)
    for (
      var a = g.g.xml.createElement("xml"), c = 0, d;
      (d = this.tD[c]);
      c++
    ) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", d);
      a.appendChild(e);
    }
  else a = null;
  c = new g.Nd({
    disable: !1,
    parentWorkspace: this.U.u,
    media: this.U.u.options.xj,
    rtl: this.U.L,
    horizontalLayout: !1,
    renderer: this.U.u.options.kp,
    rendererOverrides: this.U.u.options.lp,
  });
  c.Ka = this.U.L ? g.g.za.Qd.dk : g.g.za.Qd.Zj;
  if ((d = !!a)) (c.Yg = g.g.za.bv(a)), (c.Zc = this.GI.bind(this));
  this.s = new g.yb(c);
  this.s.Mo = !0;
  H(this.s, g.h.aI);
  a = d ? Lc(this.s, g.g.F.xc) : null;
  c = this.s.$a("blocklyMutatorBackground");
  a && c.insertBefore(a, this.s.Bb);
  this.Fp.appendChild(c);
  return this.Fp;
};
b.Bi = function () {
  g.lc.v.Bi.call(this);
  this.U.Qb ||
    (this.U.fe()
      ? this.ee && g.g.o.jc(this.ee, "blocklyIconGroupReadonly")
      : (this.Jb(!1),
        this.ee && g.g.o.Ga(this.ee, "blocklyIconGroupReadonly")));
};
function gf(a) {
  var c = 2 * g.ta.vd,
    d = a.s.Bb.getBBox(),
    e = d.width + d.x,
    f = d.height + 3 * c,
    h = a.s.hc();
  if (h) {
    var k = h.Kr();
    f = Math.max(f, k.Wd + 20);
    e += h.Sg();
  }
  a.U.L && (e = -d.x);
  e += 3 * c;
  if (Math.abs(a.fn - e) > c || Math.abs(a.Rp - f) > c)
    (a.fn = e),
      (a.Rp = f),
      a.qc.qp(e + c, f + c),
      a.Fp.setAttribute("width", a.fn),
      a.Fp.setAttribute("height", a.Rp);
  a.U.L && a.s.Bb.setAttribute("transform", "translate(" + a.fn + ",0)");
  a.s.resize();
}
b.RJ = function () {
  this.s && Ic(this.s);
};
b.Jb = function (a) {
  if (a != this.isVisible())
    if ((g.h.Ha(new g.h.Kf(this.U, a, "mutator")), a)) {
      this.qc = new g.ta(
        this.U.u,
        this.ev(),
        this.U.Rb.dc,
        this.Gk,
        null,
        null
      );
      rb(this.qc, this.U.id);
      tb(this.qc, this.RJ.bind(this));
      var c = this.s.options.Yg;
      a = this.s.hc();
      c && (a.R(this.s), a.show(c));
      this.eh = this.U.Rh(this.s);
      c = q(this.eh, !1);
      for (var d = 0, e; (e = c[d]); d++) e.Ia();
      this.eh.Ps(!1);
      this.eh.nv = !1;
      a ? ((c = 2 * a.Nb), (a = this.eh.L ? a.Sg() + c : c)) : (a = c = 16);
      this.U.L && (a = -a);
      this.eh.moveBy(a, c);
      if (this.U.Ns) {
        var f = this,
          h = this.U;
        h.Ns(this.eh);
        this.Ts = function () {
          h.Ns(f.eh);
        };
        H(this.U.u, this.Ts);
      }
      gf(this);
      H(this.s, this.QL.bind(this));
      this.nc();
    } else
      (this.Fp = null),
        this.s.I(),
        (this.eh = this.s = null),
        this.qc.I(),
        (this.qc = null),
        (this.Rp = this.fn = 0),
        this.Ts && (ob(this.U.u, this.Ts), (this.Ts = null));
};
b.QL = function (a) {
  if (!(a.yw || (a.type == g.h.Rj && "disabled" == a.element))) {
    if (!this.s.Jc()) {
      a = this.s.ac(!1);
      for (var c = 0, d; (d = a[c]); c++) {
        var e = d.ab();
        20 > e.y && d.moveBy(0, 20 - e.y);
        if (d.L) {
          var f = -20,
            h = this.s.hc();
          h && (f -= h.Sg());
          e.x > f && d.moveBy(f - e.x, 0);
        } else 20 > e.x && d.moveBy(20 - e.x, 0);
      }
    }
    if (this.eh.u == this.s) {
      g.h.ea(!0);
      d = this.U;
      a = (a = d.rb()) && g.W.re(a);
      c = d.pa;
      d.pa = !1;
      d.Nh(this.eh);
      d.pa = c;
      d.wf();
      g.Og().zb && g.navigation.GJ(d);
      d.pa && d.Ia();
      c = (c = d.rb()) && g.W.re(c);
      if (a != c) {
        g.h.Ha(new g.h.mh(d, "mutation", null, a, c));
        var k = g.h.uc();
        setTimeout(function () {
          g.h.ea(k);
          d.$b();
          g.h.ea(!1);
        }, g.Yp);
      }
      this.s.Jc() || gf(this);
      g.h.ea(!1);
    }
  }
};
b.GI = function () {
  var a = this.s.hc();
  a = a ? a.Sg() : 0;
  return {
    Wd: 0,
    mf: 0,
    Yc: 0,
    md: 0,
    Ub: this.Rp,
    Kb: this.fn - a,
    ec: 0,
    Yb: 0,
    Xc: 0,
    Oc: this.s.L ? 0 : a,
  };
};
b.I = function () {
  this.U.qd = null;
  g.ne.prototype.I.call(this);
};
g.lc.Pm = function (a, c, d) {
  if (!a || !a.Y().u) return !1;
  d = z(c, d).connection;
  var e = a.sa();
  return (e && e != c) || d.ma == a
    ? !1
    : (d.isConnected() && d.disconnect(), d.connect(a), !0);
};
g.lc.DB = function (a) {
  var c = null;
  if (a && a.options) {
    var d = a.options.vc;
    a.eg ? d && d.options && (c = d.options.vc) : d && (c = d);
  }
  return c;
};
g.N.Iw = {};
g.ua.dG = {};
g.ua.dG.uq = 260;
g.om([
  {
    type: "lists_create_empty",
    message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}",
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}",
  },
  {
    type: "lists_repeat",
    message0: "%{BKY_LISTS_REPEAT_TITLE}",
    args0: [
      { type: "input_value", name: "ITEM" },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}",
  },
  {
    type: "lists_reverse",
    message0: "%{BKY_LISTS_REVERSE_MESSAGE0}",
    args0: [{ type: "input_value", name: "LIST", check: "Array" }],
    output: "Array",
    inputsInline: !0,
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REVERSE_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REVERSE_HELPURL}",
  },
  {
    type: "lists_isEmpty",
    message0: "%{BKY_LISTS_ISEMPTY_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Boolean",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_ISEMPTY_HELPURL}",
  },
  {
    type: "lists_length",
    message0: "%{BKY_LISTS_LENGTH_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Number",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_LENGTH_HELPURL}",
  },
]);
g.N.lists_create_with = {
  R: function () {
    this.Pb = g.i.LISTS_CREATE_WITH_HELPURL;
    this.cc("list_blocks");
    this.ge = 3;
    this.ed();
    this.ke(!0, "Array");
    this.Hj(new g.lc(["lists_create_with_item"]));
    this.eb(g.i.LISTS_CREATE_WITH_TOOLTIP);
  },
  rb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("items", this.ge);
    return a;
  },
  Xb: function (a) {
    this.ge = parseInt(a.getAttribute("items"), 10);
    this.ed();
  },
  Rh: function (a) {
    var c = a.sj("lists_create_with_container");
    c.wf();
    for (var d = z(c, "STACK").connection, e = 0; e < this.ge; e++) {
      var f = a.sj("lists_create_with_item");
      f.wf();
      d.connect(f.ba);
      d = f.Z;
    }
    return c;
  },
  Nh: function (a) {
    var c = P(a, "STACK");
    for (a = []; c && !c.we(); ) a.push(c.xy), (c = c.Z && c.Z.sa());
    for (c = 0; c < this.ge; c++) {
      var d = z(this, "ADD" + c).connection.ma;
      d && -1 == a.indexOf(d) && d.disconnect();
    }
    this.ge = a.length;
    this.ed();
    for (c = 0; c < this.ge; c++) g.lc.Pm(a[c], this, "ADD" + c);
  },
  Ns: function (a) {
    a = P(a, "STACK");
    for (var c = 0; a; ) {
      var d = z(this, "ADD" + c);
      a.xy = d && d.connection.ma;
      c++;
      a = a.Z && a.Z.sa();
    }
  },
  ed: function () {
    this.ge && z(this, "EMPTY")
      ? this.Ab("EMPTY")
      : this.ge ||
        z(this, "EMPTY") ||
        L(N(this, "EMPTY"), g.i.LISTS_CREATE_EMPTY_TITLE);
    for (var a = 0; a < this.ge; a++)
      if (!z(this, "ADD" + a)) {
        var c = Xb(M(this, "ADD" + a), g.yl);
        0 == a && L(c, g.i.LISTS_CREATE_WITH_INPUT_WITH);
      }
    for (; z(this, "ADD" + a); ) this.Ab("ADD" + a), a++;
  },
};
g.N.lists_create_with_container = {
  R: function () {
    this.cc("list_blocks");
    L(N(this), g.i.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    ac(this, "STACK");
    this.eb(g.i.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.N.lists_create_with_item = {
  R: function () {
    this.cc("list_blocks");
    L(N(this), g.i.LISTS_CREATE_WITH_ITEM_TITLE);
    this.We(!0);
    this.Ve(!0);
    this.eb(g.i.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.N.lists_indexOf = {
  R: function () {
    var a = [
      [g.i.LISTS_INDEX_OF_FIRST, "FIRST"],
      [g.i.LISTS_INDEX_OF_LAST, "LAST"],
    ];
    this.Pb = g.i.LISTS_INDEX_OF_HELPURL;
    this.cc("list_blocks");
    this.ke(!0, "Number");
    L(M(this, "VALUE").Sb("Array"), g.i.LISTS_INDEX_OF_INPUT_IN_LIST);
    L(M(this, "FIND"), new g.gb(a), "END");
    this.cd(!0);
    var c = this;
    this.eb(function () {
      return g.i.LISTS_INDEX_OF_TOOLTIP.replace(
        "%1",
        c.u.options.ki ? "0" : "-1"
      );
    });
  },
};
g.N.lists_getIndex = {
  R: function () {
    var a = [
      [g.i.LISTS_GET_INDEX_GET, "GET"],
      [g.i.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
      [g.i.LISTS_GET_INDEX_REMOVE, "REMOVE"],
    ];
    this.Cu = [
      [g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.i.LISTS_GET_INDEX_LAST, "LAST"],
      [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.Pb = g.i.LISTS_GET_INDEX_HELPURL;
    this.cc("list_blocks");
    a = new g.gb(a, function (d) {
      d = "REMOVE" == d;
      this.Y().ZD(d);
    });
    L(M(this, "VALUE").Sb("Array"), g.i.LISTS_GET_INDEX_INPUT_IN_LIST);
    L(L(N(this), a, "MODE"), "", "SPACE");
    N(this, "AT");
    g.i.LISTS_GET_INDEX_TAIL && L(N(this, "TAIL"), g.i.LISTS_GET_INDEX_TAIL);
    this.cd(!0);
    this.ke(!0);
    this.Ye(!0);
    var c = this;
    this.eb(function () {
      var d = D(c, "MODE"),
        e = D(c, "WHERE"),
        f = "";
      switch (d + " " + e) {
        case "GET FROM_START":
        case "GET FROM_END":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
          break;
        case "GET FIRST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
          break;
        case "GET LAST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
          break;
        case "GET RANDOM":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
          break;
        case "GET_REMOVE FROM_START":
        case "GET_REMOVE FROM_END":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
          break;
        case "GET_REMOVE FIRST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
          break;
        case "GET_REMOVE LAST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
          break;
        case "GET_REMOVE RANDOM":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
          break;
        case "REMOVE FROM_START":
        case "REMOVE FROM_END":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
          break;
        case "REMOVE FIRST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
          break;
        case "REMOVE LAST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
          break;
        case "REMOVE RANDOM":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
      }
      if ("FROM_START" == e || "FROM_END" == e)
        f +=
          "  " +
          ("FROM_START" == e
            ? g.i.LISTS_INDEX_FROM_START_TOOLTIP
            : g.i.LISTS_INDEX_FROM_END_TOOLTIP
          ).replace("%1", c.u.options.ki ? "#1" : "#0");
      return f;
    });
  },
  rb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("statement", !this.O);
    a.setAttribute("at", z(this, "AT").type == g.ob);
    return a;
  },
  Xb: function (a) {
    var c = "true" == a.getAttribute("statement");
    this.ZD(c);
    a = "false" != a.getAttribute("at");
    this.Ye(a);
  },
  ZD: function (a) {
    a != !this.O &&
      (y(this, !0),
      a
        ? (this.ke(!1), this.We(!0), this.Ve(!0))
        : (this.We(!1), this.Ve(!1), this.ke(!0)));
  },
  Ye: function (a) {
    this.Ab("AT");
    this.Ab("ORDINAL", !0);
    a
      ? (M(this, "AT").Sb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          L(N(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX))
      : N(this, "AT");
    var c = new g.gb(this.Cu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.Y();
        f.Ye(e);
        Zb(f, d, "WHERE");
        return null;
      }
    });
    L(z(this, "AT"), c, "WHERE");
    g.i.LISTS_GET_INDEX_TAIL && bc(this, "TAIL", null);
  },
};
g.N.lists_setIndex = {
  R: function () {
    var a = [
      [g.i.LISTS_SET_INDEX_SET, "SET"],
      [g.i.LISTS_SET_INDEX_INSERT, "INSERT"],
    ];
    this.Cu = [
      [g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.i.LISTS_GET_INDEX_LAST, "LAST"],
      [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.Pb = g.i.LISTS_SET_INDEX_HELPURL;
    this.cc("list_blocks");
    L(M(this, "LIST").Sb("Array"), g.i.LISTS_SET_INDEX_INPUT_IN_LIST);
    L(L(N(this), new g.gb(a), "MODE"), "", "SPACE");
    N(this, "AT");
    L(M(this, "TO"), g.i.LISTS_SET_INDEX_INPUT_TO);
    this.cd(!0);
    this.We(!0);
    this.Ve(!0);
    this.eb(g.i.LISTS_SET_INDEX_TOOLTIP);
    this.Ye(!0);
    var c = this;
    this.eb(function () {
      var d = D(c, "MODE"),
        e = D(c, "WHERE"),
        f = "";
      switch (d + " " + e) {
        case "SET FROM_START":
        case "SET FROM_END":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
          break;
        case "SET FIRST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
          break;
        case "SET LAST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
          break;
        case "SET RANDOM":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
          break;
        case "INSERT FROM_START":
        case "INSERT FROM_END":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
          break;
        case "INSERT FIRST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
          break;
        case "INSERT LAST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
          break;
        case "INSERT RANDOM":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;
      }
      if ("FROM_START" == e || "FROM_END" == e)
        f +=
          "  " +
          g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace(
            "%1",
            c.u.options.ki ? "#1" : "#0"
          );
      return f;
    });
  },
  rb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at", z(this, "AT").type == g.ob);
    return a;
  },
  Xb: function (a) {
    a = "false" != a.getAttribute("at");
    this.Ye(a);
  },
  Ye: function (a) {
    this.Ab("AT");
    this.Ab("ORDINAL", !0);
    a
      ? (M(this, "AT").Sb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          L(N(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX))
      : N(this, "AT");
    var c = new g.gb(this.Cu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.Y();
        f.Ye(e);
        Zb(f, d, "WHERE");
        return null;
      }
    });
    bc(this, "AT", "TO");
    z(this, "ORDINAL") && bc(this, "ORDINAL", "TO");
    L(z(this, "AT"), c, "WHERE");
  },
};
g.N.lists_getSublist = {
  R: function () {
    this.WHERE_OPTIONS_1 = [
      [g.i.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_SUBLIST_START_FIRST, "FIRST"],
    ];
    this.WHERE_OPTIONS_2 = [
      [g.i.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_SUBLIST_END_LAST, "LAST"],
    ];
    this.Pb = g.i.LISTS_GET_SUBLIST_HELPURL;
    this.cc("list_blocks");
    L(M(this, "LIST").Sb("Array"), g.i.LISTS_GET_SUBLIST_INPUT_IN_LIST);
    N(this, "AT1");
    N(this, "AT2");
    g.i.LISTS_GET_SUBLIST_TAIL &&
      L(N(this, "TAIL"), g.i.LISTS_GET_SUBLIST_TAIL);
    this.cd(!0);
    this.ke(!0, "Array");
    this.Ye(1, !0);
    this.Ye(2, !0);
    this.eb(g.i.LISTS_GET_SUBLIST_TOOLTIP);
  },
  rb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at1", z(this, "AT1").type == g.ob);
    a.setAttribute("at2", z(this, "AT2").type == g.ob);
    return a;
  },
  Xb: function (a) {
    var c = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.Ye(1, c);
    this.Ye(2, a);
  },
  Ye: function (a, c) {
    this.Ab("AT" + a);
    this.Ab("ORDINAL" + a, !0);
    c
      ? (M(this, "AT" + a).Sb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          L(N(this, "ORDINAL" + a), g.i.ORDINAL_NUMBER_SUFFIX))
      : N(this, "AT" + a);
    var d = new g.gb(this["WHERE_OPTIONS_" + a], function (e) {
      var f = "FROM_START" == e || "FROM_END" == e;
      if (f != c) {
        var h = this.Y();
        h.Ye(a, f);
        Zb(h, e, "WHERE" + a);
        return null;
      }
    });
    L(z(this, "AT" + a), d, "WHERE" + a);
    1 == a &&
      (bc(this, "AT1", "AT2"),
      z(this, "ORDINAL1") && bc(this, "ORDINAL1", "AT2"));
    g.i.LISTS_GET_SUBLIST_TAIL && bc(this, "TAIL", null);
  },
};
g.N.lists_sort = {
  R: function () {
    O(this, {
      message0: g.i.LISTS_SORT_TITLE,
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            [g.i.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"],
            [g.i.LISTS_SORT_TYPE_TEXT, "TEXT"],
            [g.i.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"],
          ],
        },
        {
          type: "field_dropdown",
          name: "DIRECTION",
          options: [
            [g.i.LISTS_SORT_ORDER_ASCENDING, "1"],
            [g.i.LISTS_SORT_ORDER_DESCENDING, "-1"],
          ],
        },
        { type: "input_value", name: "LIST", check: "Array" },
      ],
      output: "Array",
      style: "list_blocks",
      tooltip: g.i.LISTS_SORT_TOOLTIP,
      helpUrl: g.i.LISTS_SORT_HELPURL,
    });
  },
};
g.N.lists_split = {
  R: function () {
    var a = this,
      c = new g.gb(
        [
          [g.i.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
          [g.i.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"],
        ],
        function (d) {
          a.Op(d);
        }
      );
    this.Pb = g.i.LISTS_SPLIT_HELPURL;
    this.cc("list_blocks");
    L(M(this, "INPUT").Sb("String"), c, "MODE");
    L(M(this, "DELIM").Sb("String"), g.i.LISTS_SPLIT_WITH_DELIMITER);
    this.cd(!0);
    this.ke(!0, "Array");
    this.eb(function () {
      var d = D(a, "MODE");
      if ("SPLIT" == d) return g.i.LISTS_SPLIT_TOOLTIP_SPLIT;
      if ("JOIN" == d) return g.i.LISTS_SPLIT_TOOLTIP_JOIN;
      throw Error("Unknown mode: " + d);
    });
  },
  Op: function (a) {
    if (D(this, "MODE") != a) {
      var c = z(this, "INPUT").connection;
      c.Tm(null);
      var d = c.sa();
      d && (c.disconnect(), d.Qa ? d.I() : this.$b());
    }
    "SPLIT" == a
      ? (this.O.Sb("Array"), z(this, "INPUT").Sb("String"))
      : (this.O.Sb("String"), z(this, "INPUT").Sb("Array"));
  },
  rb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("mode", D(this, "MODE"));
    return a;
  },
  Xb: function (a) {
    this.Op(a.getAttribute("mode"));
  },
};
g.N.tJ = {};
g.ua.xd = {};
g.ua.xd.uq = 210;
g.om([
  {
    type: "logic_boolean",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "BOOL",
        options: [
          ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
          ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"],
        ],
      },
    ],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}",
  },
  {
    type: "controls_if",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{ type: "input_statement", name: "DO0" }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    mutator: "controls_if_mutator",
    extensions: ["controls_if_tooltip"],
  },
  {
    type: "controls_ifelse",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{ type: "input_statement", name: "DO0" }],
    message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    args2: [{ type: "input_statement", name: "ELSE" }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    extensions: ["controls_if_tooltip"],
  },
  {
    type: "logic_compare",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["=", "EQ"],
          ["\u2260", "NEQ"],
          ["\u200f<", "LT"],
          ["\u200f\u2264", "LTE"],
          ["\u200f>", "GT"],
          ["\u200f\u2265", "GTE"],
        ],
      },
      { type: "input_value", name: "B" },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
    extensions: ["logic_compare", "logic_op_tooltip"],
  },
  {
    type: "logic_operation",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Boolean" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_LOGIC_OPERATION_AND}", "AND"],
          ["%{BKY_LOGIC_OPERATION_OR}", "OR"],
        ],
      },
      { type: "input_value", name: "B", check: "Boolean" },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}",
    extensions: ["logic_op_tooltip"],
  },
  {
    type: "logic_negate",
    message0: "%{BKY_LOGIC_NEGATE_TITLE}",
    args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}",
  },
  {
    type: "logic_null",
    message0: "%{BKY_LOGIC_NULL}",
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NULL_HELPURL}",
  },
  {
    type: "logic_ternary",
    message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
    args0: [{ type: "input_value", name: "IF", check: "Boolean" }],
    message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
    args1: [{ type: "input_value", name: "THEN" }],
    message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
    args2: [{ type: "input_value", name: "ELSE" }],
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
    extensions: ["logic_ternary"],
  },
]);
g.om([
  {
    type: "controls_if_if",
    message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}",
  },
  {
    type: "controls_if_elseif",
    message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}",
  },
  {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}",
  },
]);
g.ua.xd.tu = {
  EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
  NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
  LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
  LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
  GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
  GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
  AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
  OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}",
};
g.ga.register("logic_op_tooltip", g.ga.Tq("OP", g.ua.xd.tu));
g.ua.xd.zt = {
  te: 0,
  rf: 0,
  Jj: !0,
  rb: function () {
    if (!this.te && !this.rf) return null;
    var a = g.g.xml.createElement("mutation");
    this.te && a.setAttribute("elseif", this.te);
    this.rf && a.setAttribute("else", 1);
    return a;
  },
  Xb: function (a) {
    this.te = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.rf = parseInt(a.getAttribute("else"), 10) || 0;
    this.mK();
  },
  Rh: function (a) {
    var c = a.sj("controls_if_if");
    c.wf();
    for (var d = c.Z, e = 1; e <= this.te; e++) {
      var f = a.sj("controls_if_elseif");
      f.wf();
      d.connect(f.ba);
      d = f.Z;
    }
    this.rf && ((a = a.sj("controls_if_else")), a.wf(), d.connect(a.ba));
    return c;
  },
  Nh: function (a) {
    a = a.Z.sa();
    this.rf = this.te = 0;
    for (var c = [null], d = [null], e = null; a && !a.we(); ) {
      switch (a.type) {
        case "controls_if_elseif":
          this.te++;
          c.push(a.xy);
          d.push(a.hg);
          break;
        case "controls_if_else":
          this.rf++;
          e = a.hg;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.Z && a.Z.sa();
    }
    this.ed();
    this.uD(c, d, e);
  },
  Ns: function (a) {
    a = a.Z.sa();
    for (var c = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var d = z(this, "IF" + c),
            e = z(this, "DO" + c);
          a.xy = d && d.connection.ma;
          a.hg = e && e.connection.ma;
          c++;
          break;
        case "controls_if_else":
          e = z(this, "ELSE");
          a.hg = e && e.connection.ma;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.Z && a.Z.sa();
    }
  },
  mK: function () {
    var a = [null],
      c = [null],
      d = null;
    z(this, "ELSE") && (d = z(this, "ELSE").connection.ma);
    for (var e = 1; z(this, "IF" + e); ) {
      var f = z(this, "DO" + e);
      a.push(z(this, "IF" + e).connection.ma);
      c.push(f.connection.ma);
      e++;
    }
    this.ed();
    this.uD(a, c, d);
  },
  ed: function () {
    z(this, "ELSE") && this.Ab("ELSE");
    for (var a = 1; z(this, "IF" + a); )
      this.Ab("IF" + a), this.Ab("DO" + a), a++;
    for (a = 1; a <= this.te; a++)
      L(M(this, "IF" + a).Sb("Boolean"), g.i.CONTROLS_IF_MSG_ELSEIF),
        L(ac(this, "DO" + a), g.i.CONTROLS_IF_MSG_THEN);
    this.rf && L(ac(this, "ELSE"), g.i.CONTROLS_IF_MSG_ELSE);
  },
  uD: function (a, c, d) {
    for (var e = 1; e <= this.te; e++)
      g.lc.Pm(a[e], this, "IF" + e), g.lc.Pm(c[e], this, "DO" + e);
    g.lc.Pm(d, this, "ELSE");
  },
};
g.ga.Jx("controls_if_mutator", g.ua.xd.zt, null, [
  "controls_if_elseif",
  "controls_if_else",
]);
g.ua.xd.Py = function () {
  this.eb(
    function () {
      if (this.te || this.rf) {
        if (!this.te && this.rf) return g.i.CONTROLS_IF_TOOLTIP_2;
        if (this.te && !this.rf) return g.i.CONTROLS_IF_TOOLTIP_3;
        if (this.te && this.rf) return g.i.CONTROLS_IF_TOOLTIP_4;
      } else return g.i.CONTROLS_IF_TOOLTIP_1;
      return "";
    }.bind(this)
  );
};
g.ga.register("controls_if_tooltip", g.ua.xd.Py);
g.ua.xd.$F = {
  onchange: function (a) {
    this.Om || (this.Om = [null, null]);
    var c = P(this, "A"),
      d = P(this, "B");
    c &&
      d &&
      !db(c.O, d.O) &&
      (g.h.ea(a.group),
      (a = this.Om[0]),
      a !== c &&
        (y(c), !a || a.Zf || a.Qa || z(this, "A").connection.connect(a.O)),
      (c = this.Om[1]),
      c !== d &&
        (y(d), !c || c.Zf || c.Qa || z(this, "B").connection.connect(c.O)),
      this.$b(),
      g.h.ea(!1));
    this.Om[0] = P(this, "A");
    this.Om[1] = P(this, "B");
  },
};
g.ua.xd.ZF = function () {
  this.Re(g.ua.xd.$F);
};
g.ga.register("logic_compare", g.ua.xd.ZF);
g.ua.xd.aG = {
  qD: null,
  onchange: function (a) {
    var c = P(this, "THEN"),
      d = P(this, "ELSE"),
      e = this.O.ma;
    if ((c || d) && e)
      for (var f = 0; 2 > f; f++) {
        var h = 1 == f ? c : d;
        h &&
          !db(h.O, e) &&
          (g.h.ea(a.group),
          e === this.qD ? (y(this), e.Y().$b()) : (y(h), h.$b()),
          g.h.ea(!1));
      }
    this.qD = e;
  },
};
g.ga.Gs("logic_ternary", g.ua.xd.aG);
g.N.vJ = {};
g.ua.df = {};
g.ua.df.uq = 120;
g.om([
  {
    type: "controls_repeat_ext",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{ type: "input_value", name: "TIMES", check: "Number" }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}",
  },
  {
    type: "controls_repeat",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [
      { type: "field_number", name: "TIMES", value: 10, min: 0, precision: 1 },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}",
  },
  {
    type: "controls_whileUntil",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "MODE",
        options: [
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"],
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"],
        ],
      },
      { type: "input_value", name: "BOOL", check: "Boolean" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    extensions: ["controls_whileUntil_tooltip"],
  },
  {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR_TITLE}",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "TO", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "BY", check: "Number", align: "RIGHT" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"],
  },
  {
    type: "controls_forEach",
    message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "LIST", check: "Array" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"],
  },
  {
    type: "controls_flow_statements",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "FLOW",
        options: [
          ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"],
          ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"],
        ],
      },
    ],
    previousStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
    extensions: ["controls_flow_tooltip", "controls_flow_in_loop_check"],
  },
]);
g.ua.df.eH = {
  WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
  UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}",
};
g.ga.register("controls_whileUntil_tooltip", g.ga.Tq("MODE", g.ua.df.eH));
g.ua.df.vE = {
  BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
  CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}",
};
g.ga.register("controls_flow_tooltip", g.ga.Tq("FLOW", g.ua.df.vE));
g.ua.df.LE = {
  Qh: function (a) {
    if (!this.Qb) {
      var c = x(this, "VAR").od(),
        d = c.name;
      if (!this.isCollapsed() && null != d) {
        var e = { enabled: !0 };
        e.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", d);
        c = g.$.uo(c);
        d = g.g.xml.createElement("block");
        d.setAttribute("type", "variables_get");
        d.appendChild(c);
        e.Ba = g.Za.Uq(this, d);
        a.push(e);
      }
    }
  },
};
g.ga.Gs("contextMenu_newGetVariableBlock", g.ua.df.LE);
g.ga.register("controls_for_tooltip", g.ga.Qu("%{BKY_CONTROLS_FOR_TOOLTIP}"));
g.ga.register(
  "controls_forEach_tooltip",
  g.ga.Qu("%{BKY_CONTROLS_FOREACH_TOOLTIP}")
);
g.ua.df.gq = {
  cG: [
    "controls_repeat",
    "controls_repeat_ext",
    "controls_forEach",
    "controls_for",
    "controls_whileUntil",
  ],
  Jj: !0,
  aC: function (a) {
    do {
      if (-1 != g.ua.df.gq.cG.indexOf(a.type)) return a;
      a = Yb(a);
    } while (a);
    return null;
  },
  onchange: function (a) {
    if (this.u.Jc && !this.u.Jc() && a.type == g.h.ot) {
      var c = g.ua.df.gq.aC(this);
      this.Um(c ? null : g.i.CONTROLS_FLOW_STATEMENTS_WARNING);
      if (!this.Qb) {
        var d = g.h.uc();
        g.h.ea(a.group);
        this.je(c);
        g.h.ea(d);
      }
    }
  },
};
g.ga.Gs("controls_flow_in_loop_check", g.ua.df.gq);
g.af = function (a, c, d) {
  this.NA = null;
  g.af.v.constructor.call(this, a, c, d);
};
g.g.object.X(g.af, g.Be);
g.af.prototype.Dl = !1;
g.af.ka = function (a) {
  return new g.af(a.checked, void 0, a);
};
g.af.yE = "\u2713";
b = g.af.prototype;
b.fk = !0;
b.Bt = "default";
b.qe = function (a) {
  g.af.v.qe.call(this, a);
  a.checkCharacter && (this.NA = a.checkCharacter);
};
b.gj = function () {
  g.af.v.gj.call(this);
  g.g.o.Ga(this.Cc, "blocklyCheckbox");
  this.Cc.style.display = this.Fc ? "block" : "none";
};
b.Dj = function () {
  this.ui && (this.ui.nodeValue = this.Ir());
  Ob(this, this.la().lF);
};
b.Ir = function () {
  return this.NA || g.af.yE;
};
b.gg = function () {
  this.setValue(!this.Fc);
};
b.Yi = function (a) {
  return !0 === a || "TRUE" === a
    ? "TRUE"
    : !1 === a || "FALSE" === a
    ? "FALSE"
    : null;
};
b.Uh = function (a) {
  this.Fc = hf(a);
  this.Cc && (this.Cc.style.display = this.Fc ? "block" : "none");
};
b.getValue = function () {
  return this.Fc ? "TRUE" : "FALSE";
};
b.Ad = function () {
  return String(hf(this.Fc));
};
function hf(a) {
  return "string" == typeof a ? "TRUE" == a : !!a;
}
g.$f.register("field_checkbox", g.af);
g.N.kK = {};
g.N.procedures_defnoreturn = {
  R: function () {
    var a = g.Aa.Dr("", this);
    a = new g.Mc(a, g.Aa.Js);
    Te(a);
    L(L(L(N(this), g.i.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
    this.Hj(new g.lc(["procedures_mutatorarg"]));
    (this.u.options.Tn ||
      (this.u.options.vc && this.u.options.vc.options.Tn)) &&
      g.i.PROCEDURES_DEFNORETURN_COMMENT &&
      this.fh(g.i.PROCEDURES_DEFNORETURN_COMMENT);
    this.cc("procedure_blocks");
    this.eb(g.i.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.Pb = g.i.PROCEDURES_DEFNORETURN_HELPURL;
    this.Na = [];
    this.oc = [];
    this.gh(!0);
    this.hg = null;
  },
  gh: function (a) {
    this.Pr !== a &&
      (a
        ? (L(ac(this, "STACK"), g.i.PROCEDURES_DEFNORETURN_DO),
          z(this, "RETURN") && bc(this, "STACK", "RETURN"))
        : this.Ab("STACK", !0),
      (this.Pr = a));
  },
  Np: function () {
    var a = "";
    this.Na.length &&
      (a = g.i.PROCEDURES_BEFORE_PARAMS + " " + this.Na.join(", "));
    g.h.disable();
    try {
      Zb(this, a, "PARAMS");
    } finally {
      g.h.enable();
    }
  },
  rb: function (a) {
    var c = g.g.xml.createElement("mutation");
    a && c.setAttribute("name", D(this, "NAME"));
    for (var d = 0; d < this.oc.length; d++) {
      var e = g.g.xml.createElement("arg"),
        f = this.oc[d];
      e.setAttribute("name", f.name);
      e.setAttribute("varid", f.Oa());
      a && this.vx && e.setAttribute("paramId", this.vx[d]);
      c.appendChild(e);
    }
    this.Pr || c.setAttribute("statements", "false");
    return c;
  },
  Xb: function (a) {
    this.Na = [];
    this.oc = [];
    for (var c = 0, d; (d = a.childNodes[c]); c++)
      if ("arg" == d.nodeName.toLowerCase()) {
        var e = d.getAttribute("name");
        d = d.getAttribute("varid") || d.getAttribute("varId");
        this.Na.push(e);
        d = g.$.Lr(this.u, d, e, "");
        null != d
          ? this.oc.push(d)
          : console.log(
              "Failed to create a variable with name " + e + ", ignoring."
            );
      }
    this.Np();
    g.Aa.Xo(this);
    this.gh("false" !== a.getAttribute("statements"));
  },
  Rh: function (a) {
    var c = g.g.xml.createElement("block");
    c.setAttribute("type", "procedures_mutatorcontainer");
    var d = g.g.xml.createElement("statement");
    d.setAttribute("name", "STACK");
    c.appendChild(d);
    for (var e = 0; e < this.Na.length; e++) {
      var f = g.g.xml.createElement("block");
      f.setAttribute("type", "procedures_mutatorarg");
      var h = g.g.xml.createElement("field");
      h.setAttribute("name", "NAME");
      var k = g.g.xml.createTextNode(this.Na[e]);
      h.appendChild(k);
      f.appendChild(h);
      h = g.g.xml.createElement("next");
      f.appendChild(h);
      d.appendChild(f);
      d = h;
    }
    a = g.W.rk(c, a);
    "procedures_defreturn" == this.type
      ? Zb(a, this.Pr, "STATEMENTS")
      : a.Ab("STATEMENT_INPUT");
    g.Aa.Xo(this);
    return a;
  },
  Nh: function (a) {
    this.Na = [];
    this.vx = [];
    this.oc = [];
    for (var c = P(a, "STACK"); c && !c.we(); ) {
      var d = D(c, "NAME");
      this.Na.push(d);
      d = this.u.od(d, "");
      this.oc.push(d);
      this.vx.push(c.id);
      c = c.Z && c.Z.sa();
    }
    this.Np();
    g.Aa.Xo(this);
    a = D(a, "STATEMENTS");
    if (null !== a && ((a = "TRUE" == a), this.Pr != a))
      if (a) this.gh(!0), g.lc.Pm(this.hg, this, "STACK"), (this.hg = null);
      else {
        a = z(this, "STACK").connection;
        if ((this.hg = a.ma)) (a = a.sa()), y(a), a.$b();
        this.gh(!1);
      }
  },
  aj: function () {
    return [D(this, "NAME"), this.Na, !1];
  },
  Zh: function () {
    return this.Na;
  },
  Yh: function () {
    return this.oc;
  },
  Ks: function (a, c) {
    var d = this.u.dg(a);
    if ("" == d.type) {
      d = d.name;
      c = this.u.dg(c);
      for (var e = !1, f = 0; f < this.oc.length; f++)
        this.oc[f].Oa() == a &&
          ((this.Na[f] = c.name), (this.oc[f] = c), (e = !0));
      e && (this.vr(d, c.name), g.Aa.Xo(this));
    }
  },
  bt: function (a) {
    for (var c = a.name, d = !1, e = 0; e < this.oc.length; e++)
      if (this.oc[e].Oa() == a.Oa()) {
        var f = this.Na[e];
        this.Na[e] = c;
        d = !0;
      }
    d && (this.vr(f, c), g.Aa.Xo(this));
  },
  vr: function (a, c) {
    this.Np();
    if (this.qd && this.qd.isVisible())
      for (var d = G(this.qd.s), e = 0, f; (f = d[e]); e++)
        "procedures_mutatorarg" == f.type &&
          g.Md.sf(a, D(f, "NAME")) &&
          Zb(f, c, "NAME");
  },
  Qh: function (a) {
    if (!this.Qb) {
      var c = { enabled: !0 },
        d = D(this, "NAME");
      c.text = g.i.PROCEDURES_CREATE_DO.replace("%1", d);
      var e = g.g.xml.createElement("mutation");
      e.setAttribute("name", d);
      for (d = 0; d < this.Na.length; d++) {
        var f = g.g.xml.createElement("arg");
        f.setAttribute("name", this.Na[d]);
        e.appendChild(f);
      }
      d = g.g.xml.createElement("block");
      d.setAttribute("type", this.LA);
      d.appendChild(e);
      c.Ba = g.Za.Uq(this, d);
      a.push(c);
      if (!this.isCollapsed())
        for (d = 0; d < this.oc.length; d++)
          (c = { enabled: !0 }),
            (e = this.oc[d]),
            (c.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", e.name)),
            (e = g.$.uo(e)),
            (f = g.g.xml.createElement("block")),
            f.setAttribute("type", "variables_get"),
            f.appendChild(e),
            (c.Ba = g.Za.Uq(this, f)),
            a.push(c);
    }
  },
  LA: "procedures_callnoreturn",
};
g.N.procedures_defreturn = {
  R: function () {
    var a = g.Aa.Dr("", this);
    a = new g.Mc(a, g.Aa.Js);
    Te(a);
    L(L(L(N(this), g.i.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
    L(Xb(M(this, "RETURN"), g.yl), g.i.PROCEDURES_DEFRETURN_RETURN);
    this.Hj(new g.lc(["procedures_mutatorarg"]));
    (this.u.options.Tn ||
      (this.u.options.vc && this.u.options.vc.options.Tn)) &&
      g.i.PROCEDURES_DEFRETURN_COMMENT &&
      this.fh(g.i.PROCEDURES_DEFRETURN_COMMENT);
    this.cc("procedure_blocks");
    this.eb(g.i.PROCEDURES_DEFRETURN_TOOLTIP);
    this.Pb = g.i.PROCEDURES_DEFRETURN_HELPURL;
    this.Na = [];
    this.oc = [];
    this.gh(!0);
    this.hg = null;
  },
  gh: g.N.procedures_defnoreturn.gh,
  Np: g.N.procedures_defnoreturn.Np,
  rb: g.N.procedures_defnoreturn.rb,
  Xb: g.N.procedures_defnoreturn.Xb,
  Rh: g.N.procedures_defnoreturn.Rh,
  Nh: g.N.procedures_defnoreturn.Nh,
  aj: function () {
    return [D(this, "NAME"), this.Na, !0];
  },
  Zh: g.N.procedures_defnoreturn.Zh,
  Yh: g.N.procedures_defnoreturn.Yh,
  Ks: g.N.procedures_defnoreturn.Ks,
  bt: g.N.procedures_defnoreturn.bt,
  vr: g.N.procedures_defnoreturn.vr,
  Qh: g.N.procedures_defnoreturn.Qh,
  LA: "procedures_callreturn",
};
g.N.procedures_mutatorcontainer = {
  R: function () {
    L(N(this), g.i.PROCEDURES_MUTATORCONTAINER_TITLE);
    ac(this, "STACK");
    L(
      L(N(this, "STATEMENT_INPUT"), g.i.PROCEDURES_ALLOW_STATEMENTS),
      new g.af("TRUE"),
      "STATEMENTS"
    );
    this.cc("procedure_blocks");
    this.eb(g.i.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.N.procedures_mutatorarg = {
  R: function () {
    var a = new g.Mc(g.Aa.Ty, this.rl);
    a.QJ = a.gg;
    a.gg = function () {
      this.$n = [];
      this.QJ();
    };
    L(L(N(this), g.i.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
    this.We(!0);
    this.Ve(!0);
    this.cc("procedure_blocks");
    this.eb(g.i.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = !1;
    a.ix = this.WH;
    a.$n = [];
    a.ix("x");
  },
  rl: function (a) {
    var c = this.Y(),
      d = g.lc.DB(c.u);
    a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
    if (!a) return null;
    for (
      var e = G(c.u.fb || c.u), f = a.toLowerCase(), h = 0;
      h < e.length;
      h++
    )
      if (e[h].id != this.Y().id) {
        var k = D(e[h], "NAME");
        if (k && k.toLowerCase() == f) return null;
      }
    if (c.Qb) return a;
    (c = d.od(a, "")) && c.name != a && d.Cj(c.Oa(), a);
    c || ((c = d.nf(a, "")) && this.$n && this.$n.push(c));
    return a;
  },
  WH: function (a) {
    var c = g.lc.DB(this.Y().u);
    if (c)
      for (var d = 0; d < this.$n.length; d++) {
        var e = this.$n[d];
        e.name != a && c.Th(e.Oa());
      }
  },
};
g.N.procedures_callnoreturn = {
  R: function () {
    L(N(this, "TOPROW"), "", "NAME");
    this.We(!0);
    this.Ve(!0);
    this.cc("procedure_blocks");
    this.Pb = g.i.PROCEDURES_CALLNORETURN_HELPURL;
    this.Na = [];
    this.oc = [];
    this.ni = {};
    this.bh = null;
    this.Ex = !0;
  },
  Ne: function () {
    return D(this, "NAME");
  },
  Rm: function (a, c) {
    g.Md.sf(a, this.Ne()) &&
      (Zb(this, c, "NAME"),
      this.eb(
        (this.O
          ? g.i.PROCEDURES_CALLRETURN_TOOLTIP
          : g.i.PROCEDURES_CALLNORETURN_TOOLTIP
        ).replace("%1", c)
      ));
  },
  Wx: function (a, c) {
    var d = g.Aa.xo(this.Ne(), this.u),
      e = d && d.qd && d.qd.isVisible();
    e || ((this.ni = {}), (this.bh = null));
    if (c)
      if (a.join("\n") == this.Na.join("\n")) this.bh = c;
      else {
        if (c.length != a.length)
          throw RangeError("paramNames and paramIds must be the same length.");
        this.Fj(!1);
        this.bh || ((this.ni = {}), (this.bh = []));
        d = this.pa;
        this.pa = !1;
        for (var f = 0; f < this.Na.length; f++) {
          var h = z(this, "ARG" + f);
          h &&
            ((h = h.connection.ma),
            (this.ni[this.bh[f]] = h),
            e &&
              h &&
              -1 == c.indexOf(this.bh[f]) &&
              (h.disconnect(), h.Y().$b()));
        }
        this.Na = [].concat(a);
        this.oc = [];
        for (f = 0; f < this.Na.length; f++)
          (a = g.$.Lr(this.u, null, this.Na[f], "")), this.oc.push(a);
        this.ed();
        if ((this.bh = c))
          for (f = 0; f < this.Na.length; f++)
            (c = this.bh[f]),
              c in this.ni &&
                ((h = this.ni[c]),
                g.lc.Pm(h, this, "ARG" + f) || delete this.ni[c]);
        (this.pa = d) && this.Ia();
      }
  },
  ed: function () {
    for (var a = 0; a < this.Na.length; a++) {
      var c = x(this, "ARGNAME" + a);
      if (c) {
        g.h.disable();
        try {
          c.setValue(this.Na[a]);
        } finally {
          g.h.enable();
        }
      } else
        (c = new g.wd(this.Na[a])),
          L(Xb(M(this, "ARG" + a), g.yl), c, "ARGNAME" + a).R();
    }
    for (; z(this, "ARG" + a); ) this.Ab("ARG" + a), a++;
    if ((a = z(this, "TOPROW")))
      this.Na.length
        ? x(this, "WITH") ||
          (L(a, g.i.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.R())
        : x(this, "WITH") && Ub(a, "WITH");
  },
  rb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("name", this.Ne());
    for (var c = 0; c < this.Na.length; c++) {
      var d = g.g.xml.createElement("arg");
      d.setAttribute("name", this.Na[c]);
      a.appendChild(d);
    }
    return a;
  },
  Xb: function (a) {
    var c = a.getAttribute("name");
    this.Rm(this.Ne(), c);
    c = [];
    for (var d = [], e = 0, f; (f = a.childNodes[e]); e++)
      "arg" == f.nodeName.toLowerCase() &&
        (c.push(f.getAttribute("name")), d.push(f.getAttribute("paramId")));
    this.Wx(c, d);
  },
  Zh: function () {
    return this.Na;
  },
  Yh: function () {
    return this.oc;
  },
  onchange: function (a) {
    if (this.u && !this.u.eg && a.cb)
      if (a.type == g.h.Vp && -1 != a.fj.indexOf(this.id)) {
        var c = this.Ne();
        c = g.Aa.xo(c, this.u);
        !c ||
          (c.type == this.mv &&
            JSON.stringify(c.Zh()) == JSON.stringify(this.Na)) ||
          (c = null);
        if (!c) {
          g.h.ea(a.group);
          a = g.g.xml.createElement("xml");
          c = g.g.xml.createElement("block");
          c.setAttribute("type", this.mv);
          var d = this.ab(),
            e = d.y + 2 * g.Rd;
          c.setAttribute("x", d.x + g.Rd * (this.L ? -1 : 1));
          c.setAttribute("y", e);
          d = this.rb();
          c.appendChild(d);
          d = g.g.xml.createElement("field");
          d.setAttribute("name", "NAME");
          e = this.Ne();
          e || ((e = g.Aa.Dr("", this)), this.Rm("", e));
          d.appendChild(g.g.xml.createTextNode(e));
          c.appendChild(d);
          a.appendChild(c);
          g.W.tk(a, this.u);
          g.h.ea(!1);
        }
      } else
        a.type == g.h.nt
          ? ((c = this.Ne()),
            (c = g.Aa.xo(c, this.u)),
            c || (g.h.ea(a.group), this.I(!0), g.h.ea(!1)))
          : a.type == g.h.Rj &&
            "disabled" == a.element &&
            ((c = this.Ne()),
            (c = g.Aa.xo(c, this.u)) &&
              c.id == a.pb &&
              ((c = g.h.uc()) &&
                console.log(
                  "Saw an existing group while responding to a definition change"
                ),
              g.h.ea(a.group),
              a.newValue
                ? ((this.Ex = this.isEnabled()), this.je(!1))
                : this.je(this.Ex),
              g.h.ea(c)));
  },
  Qh: function (a) {
    if (this.u.Kc()) {
      var c = { enabled: !0 };
      c.text = g.i.PROCEDURES_HIGHLIGHT_DEF;
      var d = this.Ne(),
        e = this.u;
      c.Ba = function () {
        var f = g.Aa.xo(d, e);
        if (f) {
          var h = f.id;
          if (e.Kc()) {
            if ((h = h ? e.Zd(h) : null)) {
              var k = h.ab(),
                l = F(h),
                m = e.scale;
              h = (k.x + ((e.L ? -1 : 1) * l.width) / 2) * m;
              k = (k.y + l.height / 2) * m;
              l = e.Zc();
              e.scroll(-(h - l.Kb / 2), -(k - l.Ub / 2));
            }
          } else
            console.warn(
              "Tried to move a non-movable workspace. This could result in blocks becoming inaccessible."
            );
          f.select();
        }
      };
      a.push(c);
    }
  },
  mv: "procedures_defnoreturn",
};
g.N.procedures_callreturn = {
  R: function () {
    L(N(this, "TOPROW"), "", "NAME");
    this.ke(!0);
    this.cc("procedure_blocks");
    this.Pb = g.i.PROCEDURES_CALLRETURN_HELPURL;
    this.Na = [];
    this.oc = [];
    this.ni = {};
    this.bh = null;
    this.Ex = !0;
  },
  Ne: g.N.procedures_callnoreturn.Ne,
  Rm: g.N.procedures_callnoreturn.Rm,
  Wx: g.N.procedures_callnoreturn.Wx,
  ed: g.N.procedures_callnoreturn.ed,
  rb: g.N.procedures_callnoreturn.rb,
  Xb: g.N.procedures_callnoreturn.Xb,
  Zh: g.N.procedures_callnoreturn.Zh,
  Yh: g.N.procedures_callnoreturn.Yh,
  onchange: g.N.procedures_callnoreturn.onchange,
  Qh: g.N.procedures_callnoreturn.Qh,
  mv: "procedures_defreturn",
};
g.N.procedures_ifreturn = {
  R: function () {
    L(M(this, "CONDITION").Sb("Boolean"), g.i.CONTROLS_IF_MSG_IF);
    L(M(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN);
    this.cd(!0);
    this.We(!0);
    this.Ve(!0);
    this.cc("procedure_blocks");
    this.eb(g.i.PROCEDURES_IFRETURN_TOOLTIP);
    this.Pb = g.i.PROCEDURES_IFRETURN_HELPURL;
    this.dj = !0;
  },
  rb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("value", Number(this.dj));
    return a;
  },
  Xb: function (a) {
    this.dj = 1 == a.getAttribute("value");
    this.dj ||
      (this.Ab("VALUE"), L(N(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN));
  },
  onchange: function () {
    if (this.u.Jc && !this.u.Jc()) {
      var a = !1,
        c = this;
      do {
        if (-1 != this.vF.indexOf(c.type)) {
          a = !0;
          break;
        }
        c = Yb(c);
      } while (c);
      a
        ? ("procedures_defnoreturn" == c.type && this.dj
            ? (this.Ab("VALUE"),
              L(N(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN),
              (this.dj = !1))
            : "procedures_defreturn" != c.type ||
              this.dj ||
              (this.Ab("VALUE"),
              L(M(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN),
              (this.dj = !0)),
          this.Um(null),
          this.Qb || this.je(!0))
        : (this.Um(g.i.PROCEDURES_IFRETURN_WARNING),
          this.Qb || $b(this) || this.je(!1));
    }
  },
  vF: ["procedures_defnoreturn", "procedures_defreturn"],
};
g.N.LL = {};
g.ua.$ = {};
g.ua.$.uq = 330;
g.om([
  {
    type: "variables_get",
    message0: "%1",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      },
    ],
    output: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter"],
  },
  {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      },
      { type: "input_value", name: "VALUE" },
    ],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"],
  },
]);
g.ua.$.ME = {
  Qh: function (a) {
    if (!this.Qb) {
      if ("variables_get" == this.type)
        var c = "variables_set",
          d = g.i.VARIABLES_GET_CREATE_SET;
      else (c = "variables_get"), (d = g.i.VARIABLES_SET_CREATE_GET);
      var e = { enabled: 0 < kb(this.u) },
        f = x(this, "VAR").Ad();
      e.text = d.replace("%1", f);
      d = g.g.xml.createElement("field");
      d.setAttribute("name", "VAR");
      d.appendChild(g.g.xml.createTextNode(f));
      f = g.g.xml.createElement("block");
      f.setAttribute("type", c);
      f.appendChild(d);
      e.Ba = g.Za.Uq(this, f);
      a.push(e);
    } else if (
      "variables_get" == this.type ||
      "variables_get_reporter" == this.type
    )
      (c = { text: g.i.ZN, enabled: !0, Ba: g.ua.$.HG(this) }),
        (f = x(this, "VAR").Ad()),
        (e = {
          text: g.i.iM.replace("%1", f),
          enabled: !0,
          Ba: g.ua.$.RE(this),
        }),
        a.unshift(c),
        a.unshift(e);
  },
};
g.ua.$.HG = function (a) {
  return function () {
    var c = a.u,
      d = x(a, "VAR").od();
    g.$.Ls(c, d);
  };
};
g.ua.$.RE = function (a) {
  return function () {
    var c = a.u,
      d = x(a, "VAR").od();
    c.Th(d.Oa());
    Hc(c);
  };
};
g.ga.Gs("contextMenu_variableSetterGetter", g.ua.$.ME);
g.j.Iw = {};
g.j.lists_create_empty = function () {
  return ["[]", g.j.bk];
};
g.j.lists_create_with = function (a) {
  for (var c = Array(a.ge), d = 0; d < a.ge; d++)
    c[d] = X(a, "ADD" + d, g.j.ib) || "null";
  return ["[" + c.join(", ") + "]", g.j.bk];
};
g.j.lists_repeat = function (a) {
  var c = Y("listsRepeat", [
      "function " + g.j.$e + "(value, n) {",
      "  var array = [];",
      "  for (var i = 0; i < n; i++) {",
      "    array[i] = value;",
      "  }",
      "  return array;",
      "}",
    ]),
    d = X(a, "ITEM", g.j.ib) || "null";
  a = X(a, "NUM", g.j.ib) || "0";
  return [c + "(" + d + ", " + a + ")", g.j.xb];
};
g.j.lists_length = function (a) {
  return [(X(a, "VALUE", g.j.mc) || "[]") + ".length", g.j.mc];
};
g.j.lists_isEmpty = function (a) {
  return ["!" + (X(a, "VALUE", g.j.mc) || "[]") + ".length", g.j.zn];
};
g.j.lists_indexOf = function (a) {
  var c = "FIRST" == D(a, "END") ? "indexOf" : "lastIndexOf",
    d = X(a, "FIND", g.j.ib) || "''";
  c = (X(a, "VALUE", g.j.mc) || "[]") + "." + c + "(" + d + ")";
  return a.u.options.ki ? [c + " + 1", g.j.Ni] : [c, g.j.xb];
};
g.j.lists_getIndex = function (a) {
  var c = D(a, "MODE") || "GET",
    d = D(a, "WHERE") || "FROM_START",
    e = X(a, "VALUE", "RANDOM" == d ? g.j.ib : g.j.mc) || "[]";
  switch (d) {
    case "FIRST":
      if ("GET" == c) return [e + "[0]", g.j.mc];
      if ("GET_REMOVE" == c) return [e + ".shift()", g.j.mc];
      if ("REMOVE" == c) return e + ".shift();\n";
      break;
    case "LAST":
      if ("GET" == c) return [e + ".slice(-1)[0]", g.j.mc];
      if ("GET_REMOVE" == c) return [e + ".pop()", g.j.mc];
      if ("REMOVE" == c) return e + ".pop();\n";
      break;
    case "FROM_START":
      a = g.j.Ng(a, "AT");
      if ("GET" == c) return [e + "[" + a + "]", g.j.mc];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.xb];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);\n";
      break;
    case "FROM_END":
      a = g.j.Ng(a, "AT", 1, !0);
      if ("GET" == c) return [e + ".slice(" + a + ")[0]", g.j.xb];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.xb];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);";
      break;
    case "RANDOM":
      e =
        Y("listsGetRandomItem", [
          "function " + g.j.$e + "(list, remove) {",
          "  var x = Math.floor(Math.random() * list.length);",
          "  if (remove) {",
          "    return list.splice(x, 1)[0];",
          "  } else {",
          "    return list[x];",
          "  }",
          "}",
        ]) +
        "(" +
        e +
        ", " +
        ("GET" != c) +
        ")";
      if ("GET" == c || "GET_REMOVE" == c) return [e, g.j.xb];
      if ("REMOVE" == c) return e + ";\n";
  }
  throw Error("Unhandled combination (lists_getIndex).");
};
g.j.lists_setIndex = function (a) {
  function c() {
    if (d.match(/^\w+$/)) return "";
    var k = Q(g.j.Tb, "tmpList", g.zc),
      l = "var " + k + " = " + d + ";\n";
    d = k;
    return l;
  }
  var d = X(a, "LIST", g.j.mc) || "[]",
    e = D(a, "MODE") || "GET",
    f = D(a, "WHERE") || "FROM_START",
    h = X(a, "TO", g.j.xh) || "null";
  switch (f) {
    case "FIRST":
      if ("SET" == e) return d + "[0] = " + h + ";\n";
      if ("INSERT" == e) return d + ".unshift(" + h + ");\n";
      break;
    case "LAST":
      if ("SET" == e)
        return (a = c()), a + (d + "[" + d + ".length - 1] = " + h + ";\n");
      if ("INSERT" == e) return d + ".push(" + h + ");\n";
      break;
    case "FROM_START":
      f = g.j.Ng(a, "AT");
      if ("SET" == e) return d + "[" + f + "] = " + h + ";\n";
      if ("INSERT" == e) return d + ".splice(" + f + ", 0, " + h + ");\n";
      break;
    case "FROM_END":
      f = g.j.Ng(a, "AT", 1, !1, g.j.Ol);
      a = c();
      if ("SET" == e)
        return a + (d + "[" + d + ".length - " + f + "] = " + h + ";\n");
      if ("INSERT" == e)
        return (
          a + (d + ".splice(" + d + ".length - " + f + ", 0, " + h + ");\n")
        );
      break;
    case "RANDOM":
      a = c();
      f = Q(g.j.Tb, "tmpX", g.zc);
      a += "var " + f + " = Math.floor(Math.random() * " + d + ".length);\n";
      if ("SET" == e) return a + (d + "[" + f + "] = " + h + ";\n");
      if ("INSERT" == e) return a + (d + ".splice(" + f + ", 0, " + h + ");\n");
  }
  throw Error("Unhandled combination (lists_setIndex).");
};
g.j.Iw.HI = function (a, c, d) {
  return "FIRST" == c
    ? "0"
    : "FROM_END" == c
    ? a + ".length - 1 - " + d
    : "LAST" == c
    ? a + ".length - 1"
    : d;
};
g.j.lists_getSublist = function (a) {
  var c = X(a, "LIST", g.j.mc) || "[]",
    d = D(a, "WHERE1"),
    e = D(a, "WHERE2");
  if ("FIRST" == d && "LAST" == e) c += ".slice(0)";
  else if (c.match(/^\w+$/) || ("FROM_END" != d && "FROM_START" == e)) {
    switch (d) {
      case "FROM_START":
        var f = g.j.Ng(a, "AT1");
        break;
      case "FROM_END":
        f = g.j.Ng(a, "AT1", 1, !1, g.j.Ol);
        f = c + ".length - " + f;
        break;
      case "FIRST":
        f = "0";
        break;
      default:
        throw Error("Unhandled option (lists_getSublist).");
    }
    switch (e) {
      case "FROM_START":
        a = g.j.Ng(a, "AT2", 1);
        break;
      case "FROM_END":
        a = g.j.Ng(a, "AT2", 0, !1, g.j.Ol);
        a = c + ".length - " + a;
        break;
      case "LAST":
        a = c + ".length";
        break;
      default:
        throw Error("Unhandled option (lists_getSublist).");
    }
    c = c + ".slice(" + f + ", " + a + ")";
  } else {
    f = g.j.Ng(a, "AT1");
    a = g.j.Ng(a, "AT2");
    var h = g.j.Iw.HI,
      k = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd",
      };
    c =
      Y("subsequence" + k[d] + k[e], [
        "function " +
          g.j.$e +
          "(sequence" +
          ("FROM_END" == d || "FROM_START" == d ? ", at1" : "") +
          ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") +
          ") {",
        "  var start = " + h("sequence", d, "at1") + ";",
        "  var end = " + h("sequence", e, "at2") + " + 1;",
        "  return sequence.slice(start, end);",
        "}",
      ]) +
      "(" +
      c +
      ("FROM_END" == d || "FROM_START" == d ? ", " + f : "") +
      ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") +
      ")";
  }
  return [c, g.j.xb];
};
g.j.lists_sort = function (a) {
  var c = X(a, "LIST", g.j.xb) || "[]",
    d = "1" === D(a, "DIRECTION") ? 1 : -1;
  a = D(a, "TYPE");
  var e = Y("listsGetSortCompare", [
    "function " + g.j.$e + "(type, direction) {",
    "  var compareFuncs = {",
    '    "NUMERIC": function(a, b) {',
    "        return Number(a) - Number(b); },",
    '    "TEXT": function(a, b) {',
    "        return a.toString() > b.toString() ? 1 : -1; },",
    '    "IGNORE_CASE": function(a, b) {',
    "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },",
    "  };",
    "  var compare = compareFuncs[type];",
    "  return function(a, b) { return compare(a, b) * direction; }",
    "}",
  ]);
  return [c + ".slice().sort(" + e + '("' + a + '", ' + d + "))", g.j.xb];
};
g.j.lists_split = function (a) {
  var c = X(a, "INPUT", g.j.mc),
    d = X(a, "DELIM", g.j.ib) || "''";
  a = D(a, "MODE");
  if ("SPLIT" == a) c || (c = "''"), (a = "split");
  else if ("JOIN" == a) c || (c = "[]"), (a = "join");
  else throw Error("Unknown mode: " + a);
  return [c + "." + a + "(" + d + ")", g.j.xb];
};
g.j.lists_reverse = function (a) {
  return [(X(a, "LIST", g.j.xb) || "[]") + ".slice().reverse()", g.j.xb];
};
g.j.tJ = {};
g.j.controls_if = function (a) {
  var c = 0,
    d = "";
  g.j.oe && (d += V(g.j.oe, a));
  do {
    var e = X(a, "IF" + c, g.j.ib) || "false";
    var f = df(a, "DO" + c);
    g.j.jd && (f = W(V(g.j.jd, a), g.j.Jd) + f);
    d += (0 < c ? " else " : "") + "if (" + e + ") {\n" + f + "}";
    ++c;
  } while (z(a, "IF" + c));
  if (z(a, "ELSE") || g.j.jd)
    (f = df(a, "ELSE")),
      g.j.jd && (f = W(V(g.j.jd, a), g.j.Jd) + f),
      (d += " else {\n" + f + "}");
  return d + "\n";
};
g.j.controls_ifelse = g.j.controls_if;
g.j.logic_compare = function (a) {
  var c = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[
      D(a, "OP")
    ],
    d = "==" == c || "!=" == c ? g.j.Kz : g.j.vG,
    e = X(a, "A", d) || "0";
  a = X(a, "B", d) || "0";
  return [e + " " + c + " " + a, d];
};
g.j.logic_operation = function (a) {
  var c = "AND" == D(a, "OP") ? "&&" : "||",
    d = "&&" == c ? g.j.Zt : g.j.$t,
    e = X(a, "A", d);
  a = X(a, "B", d);
  if (e || a) {
    var f = "&&" == c ? "true" : "false";
    e || (e = f);
    a || (a = f);
  } else a = e = "false";
  return [e + " " + c + " " + a, d];
};
g.j.logic_negate = function (a) {
  var c = g.j.zn;
  return ["!" + (X(a, "BOOL", c) || "true"), c];
};
g.j.logic_boolean = function (a) {
  return ["TRUE" == D(a, "BOOL") ? "true" : "false", g.j.bk];
};
g.j.logic_null = function () {
  return ["null", g.j.bk];
};
g.j.logic_ternary = function (a) {
  var c = X(a, "IF", g.j.Bq) || "false",
    d = X(a, "THEN", g.j.Bq) || "null";
  a = X(a, "ELSE", g.j.Bq) || "null";
  return [c + " ? " + d + " : " + a, g.j.Bq];
};
g.j.vJ = {};
g.j.controls_repeat_ext = function (a) {
  var c = x(a, "TIMES")
      ? String(Number(D(a, "TIMES")))
      : X(a, "TIMES", g.j.xh) || "0",
    d = df(a, "DO");
  d = ef(d, a);
  a = "";
  var e = Q(g.j.Tb, "count", g.zc),
    f = c;
  c.match(/^\w+$/) ||
    g.lj(c) ||
    ((f = Q(g.j.Tb, "repeat_end", g.zc)),
    (a += "var " + f + " = " + c + ";\n"));
  return (
    a +
    ("for (var " +
      e +
      " = 0; " +
      e +
      " < " +
      f +
      "; " +
      e +
      "++) {\n" +
      d +
      "}\n")
  );
};
g.j.controls_repeat = g.j.controls_repeat_ext;
g.j.controls_whileUntil = function (a) {
  var c = "UNTIL" == D(a, "MODE"),
    d = X(a, "BOOL", c ? g.j.zn : g.j.ib) || "false",
    e = df(a, "DO");
  e = ef(e, a);
  c && (d = "!" + d);
  return "while (" + d + ") {\n" + e + "}\n";
};
g.j.controls_for = function (a) {
  var c = g.j.Tb.ae(D(a, "VAR"), g.zc),
    d = X(a, "FROM", g.j.xh) || "0",
    e = X(a, "TO", g.j.xh) || "0",
    f = X(a, "BY", g.j.xh) || "1",
    h = df(a, "DO");
  h = ef(h, a);
  if (g.lj(d) && g.lj(e) && g.lj(f)) {
    var k = Number(d) <= Number(e);
    a =
      "for (" + c + " = " + d + "; " + c + (k ? " <= " : " >= ") + e + "; " + c;
    c = Math.abs(Number(f));
    a =
      (1 == c ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + c)) +
      (") {\n" + h + "}\n");
  } else
    (a = ""),
      (k = d),
      d.match(/^\w+$/) ||
        g.lj(d) ||
        ((k = Q(g.j.Tb, c + "_start", g.zc)),
        (a += "var " + k + " = " + d + ";\n")),
      (d = e),
      e.match(/^\w+$/) ||
        g.lj(e) ||
        ((d = Q(g.j.Tb, c + "_end", g.zc)),
        (a += "var " + d + " = " + e + ";\n")),
      (e = Q(g.j.Tb, c + "_inc", g.zc)),
      (a += "var " + e + " = "),
      (a = g.lj(f)
        ? a + (Math.abs(f) + ";\n")
        : a + ("Math.abs(" + f + ");\n")),
      (a =
        a +
        ("if (" + k + " > " + d + ") {\n") +
        (g.j.Jd + e + " = -" + e + ";\n")),
      (a += "}\n"),
      (a +=
        "for (" +
        c +
        " = " +
        k +
        "; " +
        e +
        " >= 0 ? " +
        c +
        " <= " +
        d +
        " : " +
        c +
        " >= " +
        d +
        "; " +
        c +
        " += " +
        e +
        ") {\n" +
        h +
        "}\n");
  return a;
};
g.j.controls_forEach = function (a) {
  var c = g.j.Tb.ae(D(a, "VAR"), g.zc),
    d = X(a, "LIST", g.j.xh) || "[]",
    e = df(a, "DO");
  e = ef(e, a);
  a = "";
  var f = d;
  d.match(/^\w+$/) ||
    ((f = Q(g.j.Tb, c + "_list", g.zc)), (a += "var " + f + " = " + d + ";\n"));
  d = Q(g.j.Tb, c + "_index", g.zc);
  e = g.j.Jd + c + " = " + f + "[" + d + "];\n" + e;
  return a + ("for (var " + d + " in " + f + ") {\n" + e + "}\n");
};
g.j.controls_flow_statements = function (a) {
  var c = "";
  g.j.oe && (c += V(g.j.oe, a));
  g.j.jd && (c += V(g.j.jd, a));
  if (g.j.oe) {
    var d = g.ua.df.gq.aC(a);
    d && !d.Jj && (c += V(g.j.oe, d));
  }
  switch (D(a, "FLOW")) {
    case "BREAK":
      return c + "break;\n";
    case "CONTINUE":
      return c + "continue;\n";
  }
  throw Error("Unknown flow statement.");
};
g.j.kK = {};
g.j.procedures_defreturn = function (a) {
  var c = g.j.Tb.ae(D(a, "NAME"), g.Dn),
    d = "";
  g.j.oe && (d += V(g.j.oe, a));
  g.j.jd && (d += V(g.j.jd, a));
  d && (d = W(d, g.j.Jd));
  var e = "";
  g.j.vq && (e = W(V(g.j.vq, a), g.j.Jd));
  var f = df(a, "STACK"),
    h = X(a, "RETURN", g.j.ib) || "",
    k = "";
  f && h && (k = d);
  h && (h = g.j.Jd + "return " + h + ";\n");
  for (var l = [], m = a.Zh(), n = 0; n < m.length; n++)
    l[n] = g.j.Tb.ae(m[n], g.zc);
  d = "function " + c + "(" + l.join(", ") + ") {\n" + d + e + f + k + h + "}";
  d = g.j.Os(a, d);
  g.j.pk["%" + c] = d;
  return null;
};
g.j.procedures_defnoreturn = g.j.procedures_defreturn;
g.j.procedures_callreturn = function (a) {
  for (
    var c = g.j.Tb.ae(D(a, "NAME"), g.Dn), d = [], e = a.Zh(), f = 0;
    f < e.length;
    f++
  )
    d[f] = X(a, "ARG" + f, g.j.ib) || "null";
  return [c + "(" + d.join(", ") + ")", g.j.xb];
};
g.j.procedures_callnoreturn = function (a) {
  return g.j.procedures_callreturn(a)[0] + ";\n";
};
g.j.procedures_ifreturn = function (a) {
  var c = "if (" + (X(a, "CONDITION", g.j.ib) || "false") + ") {\n";
  g.j.jd && (c += W(V(g.j.jd, a), g.j.Jd));
  a.dj
    ? ((a = X(a, "VALUE", g.j.ib) || "null"),
      (c += g.j.Jd + "return " + a + ";\n"))
    : (c += g.j.Jd + "return;\n");
  return c + "}\n";
};
g.j.LL = {};
g.j.variables_get = function (a) {
  return [g.j.Tb.ae(D(a, "VAR"), g.zc), g.j.bk];
};
g.j.variables_set = function (a) {
  var c = X(a, "VALUE", g.j.xh) || "0";
  return g.j.Tb.ae(D(a, "VAR"), g.zc) + " = " + c + ";\n";
};
for (var jf in g.ua.xd.zt) g.N.controls_if[jf] = g.ua.xd.zt[jf];
g.N.controls_if.R = function () {
  this.Pb = g.i.CONTROLS_IF_HELPURL;
  this.bd(g.i.LOGIC_HUE);
  L(M(this, "IF0").Sb("Boolean"), "if (");
  L(N(this), ") {");
  ac(this, "DO0");
  L(N(this, "TAIL"), "}");
  this.cd(!0);
  this.We(!0);
  this.Ve(!0);
  this.Hj(new g.lc(["controls_if_elseif", "controls_if_else"]));
  g.ua.xd.Py.apply(this);
};
g.N.controls_if.ed = function () {
  z(this, "ELSE") && (this.Ab("ELSEMSG"), this.Ab("ELSE"));
  for (var a = 1; z(this, "IF" + a); )
    this.Ab("IF" + a), this.Ab("TAIL" + a), this.Ab("DO" + a), a++;
  for (a = 1; a <= this.te; a++)
    L(M(this, "IF" + a).Sb("Boolean"), "} else if ("),
      L(N(this, "TAIL" + a), ") {"),
      ac(this, "DO" + a);
  this.rf && (L(N(this, "ELSEMSG"), "} else {"), ac(this, "ELSE"));
  bc(this, "TAIL", null);
};
g.N.logic_compare.R = function () {
  this.Pb = g.i.LOGIC_COMPARE_HELPURL;
  this.bd(g.i.LOGIC_HUE);
  this.ke(!0, "Boolean");
  M(this, "A");
  L(
    M(this, "B"),
    new g.gb([
      ["==", "EQ"],
      ["!=", "NEQ"],
      ["<", "LT"],
      ["<=", "LTE"],
      [">", "GT"],
      [">=", "GTE"],
    ]),
    "OP"
  );
  this.cd(!0);
  var a = this;
  this.eb(function () {
    var c = D(a, "OP");
    return {
      EQ: g.i.LOGIC_COMPARE_TOOLTIP_EQ,
      NEQ: g.i.LOGIC_COMPARE_TOOLTIP_NEQ,
      LT: g.i.LOGIC_COMPARE_TOOLTIP_LT,
      LTE: g.i.LOGIC_COMPARE_TOOLTIP_LTE,
      GT: g.i.LOGIC_COMPARE_TOOLTIP_GT,
      GTE: g.i.LOGIC_COMPARE_TOOLTIP_GTE,
    }[c];
  });
  this.Om = [null, null];
};
g.i.LOGIC_OPERATION_AND = "&&";
g.i.LOGIC_OPERATION_OR = "||";
g.i.LOGIC_NEGATE_TITLE = "! %1";
g.i.LOGIC_BOOLEAN_TRUE = "true";
g.i.LOGIC_BOOLEAN_FALSE = "false";
g.N.controls_whileUntil.R = function () {
  O(this, {
    message0: "while ( %1 ) { %2 %3 }",
    args0: [
      { type: "input_value", name: "BOOL", check: "Boolean" },
      { type: "input_dummy" },
      { type: "input_statement", name: "DO" },
    ],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: g.i.LOOPS_HUE,
    tooltip: g.i.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
    helpUrl: g.i.CONTROLS_WHILEUNTIL_HELPURL,
  });
};
g.N.controls_for.R = function () {
  O(this, {
    message0: "for (var %1 = %2;  %3 < %4;  %5 += 1) { %6 %7 }",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" },
      { type: "field_label", name: "VAR1", text: "?" },
      { type: "input_value", name: "TO", check: "Number", align: "RIGHT" },
      { type: "field_label", name: "VAR2", text: "?" },
      { type: "input_dummy" },
      { type: "input_statement", name: "DO" },
    ],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: g.i.LOOPS_HUE,
    helpUrl: g.i.CONTROLS_FOR_HELPURL,
  });
  var a = this;
  this.eb(function () {
    return g.i.CONTROLS_FOR_TOOLTIP.replace("%1", D(a, "VAR"));
  });
};
g.N.controls_for.onchange = function () {
  var a = x(this, "VAR").Ad();
  Zb(this, a, "VAR1");
  Zb(this, a, "VAR2");
};
g.j.controls_for = function (a) {
  var c = g.j.Tb.ae(D(a, "VAR"), g.$.Aq),
    d = X(a, "FROM", g.j.xh) || "0",
    e = X(a, "TO", g.j.xh) || "0",
    f = df(a, "DO");
  f = ef(f, a.id);
  return (
    "for (var " +
    c +
    " = " +
    d +
    "; " +
    c +
    " < " +
    e +
    "; " +
    c +
    " += 1) {\n" +
    f +
    "}\n"
  );
};
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break ;";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue ;";
g.N.math_arithmetic.R = function () {
  O(this, {
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Number" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["+", "ADD"],
          ["-", "MINUS"],
          ["*", "MULTIPLY"],
          ["/", "DIVIDE"],
        ],
      },
      { type: "input_value", name: "B", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    colour: g.i.MATH_HUE,
    helpUrl: g.i.MATH_ARITHMETIC_HELPURL,
  });
  var a = this;
  this.eb(function () {
    var c = D(a, "OP");
    return {
      ADD: g.i.MATH_ARITHMETIC_TOOLTIP_ADD,
      MINUS: g.i.MATH_ARITHMETIC_TOOLTIP_MINUS,
      MULTIPLY: g.i.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
      DIVIDE: g.i.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
    }[c];
  });
};
g.N.math_change.R = function () {
  O(this, {
    message0: "%1 += %2;",
    args0: [
      { type: "field_variable", name: "VAR", variable: "name" },
      { type: "input_value", name: "DELTA", check: "Number" },
    ],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: g.i.VARIABLES_HUE,
    helpUrl: g.i.MATH_CHANGE_HELPURL,
  });
  var a = this;
  this.eb(function () {
    return g.i.MATH_CHANGE_TOOLTIP.replace("%1", x(a, "VAR").od().name);
  });
};
g.j.math_change = function (a) {
  var c = X(a, "DELTA", g.j.Ni) || "0";
  return g.j.Tb.ae(D(a, "VAR"), g.$.Aq) + " += " + c + ";\n";
};
g.N.math_random_int.R = function () {
  O(this, {
    message0: "%1(%2,%3)",
    args0: [
      "Math.randomInt",
      { type: "input_value", name: "FROM", check: "Number" },
      { type: "input_value", name: "TO", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    colour: g.i.MATH_HUE,
    tooltip: g.i.MATH_RANDOM_INT_TOOLTIP,
    helpUrl: g.i.MATH_RANDOM_INT_HELPURL,
  });
};
g.i.MATH_RANDOM_FLOAT_TITLE_RANDOM = "Math.random  (  )";
g.i.LISTS_CREATE_EMPTY_TITLE = "[ ]";
g.i.LISTS_CREATE_WITH_INPUT_WITH = "[";
g.N.lists_create_with.ed = function () {
  z(this, "TAIL") && this.Ab("TAIL");
  this.ge && z(this, "EMPTY")
    ? this.Ab("EMPTY")
    : this.ge ||
      z(this, "EMPTY") ||
      L(N(this, "EMPTY"), g.i.LISTS_CREATE_EMPTY_TITLE);
  for (var a = 0; a < this.ge; a++)
    if (!z(this, "ADD" + a)) {
      var c = M(this, "ADD" + a);
      0 == a ? L(c, g.i.LISTS_CREATE_WITH_INPUT_WITH) : L(c, ",");
    }
  for (; z(this, "ADD" + a); ) this.Ab("ADD" + a), a++;
  this.ge && L(N(this, "TAIL"), "]");
};
g.N.lists_getIndex = {
  R: function () {
    O(this, {
      message0: "%1[%2]",
      args0: [
        { type: "input_value", name: "VALUE", check: "Array" },
        { type: "input_value", name: "AT", check: "Number" },
      ],
      inputsInline: !0,
      output: null,
      colour: g.i.LISTS_HUE,
      tooltip:
        g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM +
        g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"),
      helpUrl: g.i.LISTS_GET_INDEX_HELPURL,
    });
  },
};
g.N.lists_setIndex = {
  R: function () {
    O(this, {
      message0: "%1[%2] = %3;",
      args0: [
        { type: "input_value", name: "LIST", check: "Array" },
        { type: "input_value", name: "AT", check: "Number" },
        { type: "input_value", name: "TO" },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: g.i.LISTS_HUE,
      tooltip:
        g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM +
        g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"),
      helpUrl: g.i.LISTS_SET_INDEX_HELPURL,
    });
  },
};
g.i.LISTS_LENGTH_TITLE = "%1 . length";
g.N.variables_get.R = function () {
  this.Pb = g.i.VARIABLES_GET_HELPURL;
  this.bd(g.i.VARIABLES_HUE);
  L(N(this), new g.Id("name"), "VAR");
  this.ke(!0);
  this.eb(g.i.VARIABLES_GET_TOOLTIP);
};
g.N.variables_set.R = function () {
  this.Pb = g.i.VARIABLES_SET_HELPURL;
  this.bd(g.i.VARIABLES_HUE);
  L(L(L(M(this, "VALUE"), "var"), new g.Id("name"), "VAR"), "=");
  L(N(this), ";");
  this.cd(!0);
  this.We(!0);
  this.Ve(!0);
  this.eb(g.i.VARIABLES_SET_TOOLTIP);
};
g.N.procedures_defnoreturn.R = function () {
  var a = new g.Mc("", g.Aa.Js);
  L(L(L(L(L(N(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
  this.gh(!0);
  L(N(this), "}");
  this.Hj(new g.lc(["procedures_mutatorarg"]));
  g.i.PROCEDURES_DEFNORETURN_COMMENT &&
    this.fh(g.i.PROCEDURES_DEFNORETURN_COMMENT);
  this.bd(g.i.PROCEDURES_HUE);
  this.eb(g.i.PROCEDURES_DEFNORETURN_TOOLTIP);
  this.Pb = g.i.PROCEDURES_DEFNORETURN_HELPURL;
  this.Na = [];
  this.oc = [];
  this.gh(!0);
  this.hg = null;
};
g.N.procedures_defreturn.R = function () {
  var a = new g.Mc("", g.Aa.Js);
  L(L(L(L(L(N(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
  L(Xb(M(this, "RETURN"), g.yl), "return");
  L(N(this), "}");
  this.Hj(new g.lc(["procedures_mutatorarg"]));
  g.i.PROCEDURES_DEFRETURN_COMMENT && this.fh(g.i.PROCEDURES_DEFRETURN_COMMENT);
  this.bd(g.i.PROCEDURES_HUE);
  this.eb(g.i.PROCEDURES_DEFRETURN_TOOLTIP);
  this.Pb = g.i.PROCEDURES_DEFRETURN_HELPURL;
  this.Na = [];
  this.oc = [];
  this.gh(!0);
  this.hg = null;
};
g.i.PROCEDURES_BEFORE_PARAMS = "";
g.N.procedures_callnoreturn.R = function () {
  this.Pb = g.i.PROCEDURES_CALLNORETURN_HELPURL;
  this.bd(g.i.PROCEDURES_HUE);
  L(L(N(this), "", "NAME"), "(");
  L(N(this, "TAIL"), ");");
  this.cd(!0);
  this.We(!0);
  this.Ve(!0);
  this.eb(g.i.PROCEDURES_CALLNORETURN_TOOLTIP);
  this.Na = [];
  this.ni = {};
};
g.N.procedures_callnoreturn.ed = function () {
  for (var a = 0; a < this.Na.length; a++)
    if (!z(this, "ARG" + a)) {
      new g.wd(this.Na[a]);
      var c = M(this, "ARG" + a);
      0 < a && L(c, ",");
      c.R();
    }
  for (; z(this, "ARG" + a); ) this.Ab("ARG" + a), a++;
  bc(this, "TAIL", null);
};
g.N.procedures_callreturn.R = function () {
  this.Pb = g.i.PROCEDURES_CALLRETURN_HELPURL;
  this.bd(g.i.PROCEDURES_HUE);
  L(L(N(this), "", "NAME"), "(");
  L(N(this, "TAIL"), ")");
  this.cd(!0);
  this.ke(!0);
  this.eb(g.i.PROCEDURES_CALLRETURN_TOOLTIP);
  this.Na = [];
  this.ni = {};
};
g.N.procedures_callreturn.ed = g.N.procedures_callnoreturn.ed;
delete g.N.procedures_ifreturn;
g.N.pond_scan = {
  R: function () {
    O(this, {
      message0: "%1(%2)",
      args0: [
        "scan",
        { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] },
      ],
      inputsInline: !0,
      output: "Number",
      colour: 290,
      tooltip: R("Pond_scanTooltip"),
    });
  },
};
g.j.pond_scan = function (a) {
  return ["scan(" + (X(a, "DEGREE", g.j.ib) || 0) + ")", g.j.xb];
};
g.N.pond_cannon = {
  R: function () {
    O(this, {
      message0: "%1(%2, %3);",
      args0: [
        "cannon",
        { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] },
        { type: "input_value", name: "RANGE", check: "Number" },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: R("Pond_cannonTooltip"),
    });
  },
};
g.j.pond_cannon = function (a) {
  var c = X(a, "DEGREE", g.j.Jz) || 0;
  a = X(a, "RANGE", g.j.Jz) || 0;
  return "cannon(" + c + ", " + a + ");\n";
};
g.N.pond_swim = {
  R: function () {
    O(this, {
      message0: "%1(%2);",
      args0: [
        "swim",
        { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: R("Pond_swimTooltip"),
    });
  },
};
g.j.pond_swim = function (a) {
  return "swim(" + (X(a, "DEGREE", g.j.ib) || 0) + ");\n";
};
g.N.pond_stop = {
  R: function () {
    O(this, {
      message0: "%1(%2);",
      args0: ["stop", ""],
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: R("Pond_stopTooltip"),
    });
  },
};
g.j.pond_stop = function () {
  return "stop();\n";
};
g.N.pond_health = {
  R: function () {
    O(this, {
      message0: "%1(%2)",
      args0: ["health", ""],
      output: "Number",
      colour: 290,
      tooltip: R("Pond_healthTooltip"),
    });
  },
};
g.j.pond_health = function () {
  return ["health()", g.j.xb];
};
g.N.pond_speed = {
  R: function () {
    O(this, {
      message0: "%1(%2)",
      args0: ["speed", ""],
      output: "Number",
      colour: 290,
      tooltip: R("Pond_speedTooltip"),
    });
  },
};
g.j.pond_speed = function () {
  return ["speed()", g.j.xb];
};
g.N.pond_getX = {
  R: function () {
    O(this, {
      message0: "%1(%2)",
      args0: ["getX", ""],
      output: "Number",
      colour: 290,
      tooltip: R("Pond_locXTooltip"),
    });
  },
};
g.j.pond_getX = function () {
  return ["getX()", g.j.xb];
};
g.N.pond_getY = {
  R: function () {
    O(this, {
      message0: "%1(%2)",
      args0: ["getY", ""],
      output: "Number",
      colour: 290,
      tooltip: R("Pond_locYTooltip"),
    });
  },
};
g.j.pond_getY = function () {
  return ["getY()", g.j.xb];
};
g.N.pond_log = {
  R: function () {
    O(this, {
      message0: "%1(%2);",
      args0: ["log", { type: "input_value", name: "VALUE" }],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: R("Pond_logTooltip"),
    });
  },
};
g.j.pond_log = function (a) {
  return "log(" + (X(a, "VALUE", g.j.ib) || "''") + ");\n";
};
g.N.pond_math_number = {
  R: function () {
    this.Pb = g.i.MATH_NUMBER_HELPURL;
    this.bd(g.i.MATH_HUE);
    L(N(this, "DUMMY"), new g.Hd(0), "NUM");
    this.ke(!0, "Number");
    this.eb(g.i.MATH_NUMBER_TOOLTIP);
  },
  rb: function () {
    var a = document.createElement("mutation");
    a.setAttribute("angle_field", x(this, "NUM").constructor == g.qa);
    return a;
  },
  Xb: function (a) {
    a = "true" == a.getAttribute("angle_field");
    this.uy(a);
  },
  onchange: function () {
    if (this.u && this.O.ma && this.O.ma.Ag) {
      var a = x(this, "NUM");
      -1 != this.O.ma.Ag.indexOf("Angle")
        ? a.constructor != g.qa && this.uy(!0)
        : a.constructor != g.Hd && this.uy(!1);
    }
  },
  uy: function (a) {
    g.h.disable();
    var c = z(this, "DUMMY"),
      d = x(this, "NUM"),
      e = d.getValue();
    a
      ? (Ub(c, "NUM"), (d = new g.qa("")), L(c, d, "NUM"), d.setValue(e))
      : (Ub(c, "NUM"), L(c, new g.Hd(e), "NUM"));
    this.pa && this.Ia();
    g.h.enable();
  },
};
g.N.pond_math_single = {
  R: function () {
    O(this, {
      message0: "%1 (%2)",
      args0: [
        {
          type: "field_dropdown",
          name: "OP",
          options: [
            ["Math.sqrt", "ROOT"],
            ["Math.abs", "ABS"],
            ["Math.sin_deg", "SIN"],
            ["Math.cos_deg", "COS"],
            ["Math.tan_deg", "TAN"],
            ["Math.asin_deg", "ASIN"],
            ["Math.acos_deg", "ACOS"],
            ["Math.atan_deg", "ATAN"],
          ],
        },
        { type: "input_value", name: "NUM", check: "Number" },
      ],
      inputsInline: !0,
      output: "Number",
      colour: g.i.MATH_HUE,
      helpUrl: g.i.MATH_SINGLE_HELPURL,
    });
    var a = this;
    this.eb(function () {
      var c = D(a, "OP");
      return {
        ROOT: g.i.MATH_SINGLE_TOOLTIP_ROOT,
        ABS: g.i.MATH_SINGLE_TOOLTIP_ABS,
        SIN: g.i.MATH_TRIG_TOOLTIP_SIN,
        COS: g.i.MATH_TRIG_TOOLTIP_COS,
        TAN: g.i.MATH_TRIG_TOOLTIP_TAN,
        ASIN: g.i.MATH_TRIG_TOOLTIP_ASIN,
        ACOS: g.i.MATH_TRIG_TOOLTIP_ACOS,
        ATAN: g.i.MATH_TRIG_TOOLTIP_ATAN,
      }[c];
    });
  },
};
g.j.pond_math_single = function (a) {
  var c = D(a, "OP");
  a = X(a, "NUM", g.j.ib) || "0";
  switch (c) {
    case "ABS":
      c = "Math.abs(" + a + ")";
      break;
    case "ROOT":
      c = "Math.sqrt(" + a + ")";
      break;
    case "SIN":
      c = "Math.sin_deg(" + a + ")";
      break;
    case "COS":
      c = "Math.cos_deg(" + a + ")";
      break;
    case "TAN":
      c = "Math.tan_deg(" + a + ")";
      break;
    case "ASIN":
      c = "Math.asin_deg(" + a + ")";
      break;
    case "ACOS":
      c = "Math.acos_deg(" + a + ")";
      break;
    case "ATAN":
      c = "Math.atan_deg(" + a + ")";
      break;
    default:
      throw Error("Unknown math operator: " + c);
  }
  return [c, g.j.xb];
};
g.j.pond_math_number = g.j.math_number;
g.N.pond_loc_x = g.N.pond_getX;
g.j.pond_loc_x = g.j.pond_getX;
g.N.pond_loc_y = g.N.pond_getY;
g.j.pond_loc_y = g.j.pond_getY;
g.N.pond_controls_if = g.N.controls_if;
g.j.pond_controls_if = g.j.controls_if;
g.N.pond_loops_while = g.N.controls_whileUntil;
g.j.pond_loops_while = g.j.controls_whileUntil;
g.N.pond_math_arithmetic = g.N.math_arithmetic;
g.j.pond_math_arithmetic = g.j.math_arithmetic;
g.N.pond_math_change = g.N.math_change;
g.j.pond_math_change = g.j.math_change;
var kf = kf || {};
function lf(a, c) {
  function d() {}
  d.prototype = c.prototype;
  a.v = c.prototype;
  a.prototype = new d();
  a.prototype.constructor = a;
  a.tO = function (e, f, h) {
    return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2));
  };
}
if (!mf) {
  var mf,
    nf = "";
  "undefined" !== typeof navigator &&
    navigator &&
    "string" == typeof navigator.userAgent &&
    (nf = navigator.userAgent);
  var of = 0 == nf.indexOf("Opera");
  mf = {
    OO: { MM: "ScriptEngine" in window },
    wN: of,
    bf: !of && -1 != nf.indexOf("MSIE"),
    sA: !of && -1 != nf.indexOf("WebKit"),
  };
}
if (!pf) var pf = {};
if (!qf) var qf = {};
if (!rf) var rf = {};
if (!sf) var sf = {};
if (!tf) var tf = {};
if (!uf) var uf = {};
var vf = kf.OE ? { WO: !0 } : {},
  wf = kf.OE ? { XO: !0 } : {};
function xf() {
  throw Error("Do not instantiate directly");
}
xf.prototype.aB = null;
xf.prototype.toString = function () {
  return this.content;
};
function yf(a) {
  if (null != a)
    switch (a.aB) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function zf() {
  xf.call(this);
}
lf(zf, xf);
zf.prototype.bB = vf;
function Z(a) {
  return null != a && a.bB === vf
    ? a
    : Af(String(String(a)).replace(Bf, Cf), yf(a));
}
var Af = (function (a) {
    function c() {}
    c.prototype = a.prototype;
    return function (d, e) {
      var f = new c();
      f.content = String(d);
      void 0 !== e && (f.aB = e);
      return f;
    };
  })(zf),
  Df = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;",
  };
function Cf(a) {
  return Df[a];
}
var Bf = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Ef() {
  var a = { lang: id, bJ: kd },
    c = "Pond",
    d = "",
    e = !1,
    f = !1,
    h = "";
  c =
    '<table width="100%"><tr><td><h1><span id="title">' +
    ((a.bJ
      ? '<a href="index.html?lang=' + Z(a.lang) + '">'
      : '<a href="./?lang=' + Z(a.lang) + '">') +
      "Codekid</a> : " +
      Z(c) +
      "</span>");
  if (a.level) {
    d = "" + (d ? Z(d) : "");
    for (var k = " &nbsp; ", l = a.xJ + 1, m = 1; m < l; m++) {
      var n = "?lang=" + Z(a.lang) + "&level=" + Z(m) + (d ? "&" + Z(d) : "");
      k +=
        " " +
        (m == a.level
          ? '<span class="level_number level_done" id="level' +
            Z(m) +
            '">' +
            Z(m) +
            "</span>"
          : m == a.xJ
          ? '<a class="level_number" id="level' +
            Z(m) +
            '" href="' +
            Z(n) +
            '">' +
            Z(m) +
            "</a>"
          : '<a class="level_dot" id="level' +
            Z(m) +
            '" href="' +
            Z(n) +
            '"></a>');
    }
    a = k;
  } else a = "";
  h = h ? "&nbsp;" + (null != h && h.bB === wf ? "zSoyz" : h) : "";
  return (
    '<div style="display: none"><span id="Games_name">Codekid</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). Returns the distance to the closest enemy in that direction. Returns Infinity if no enemy found.</span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and a range (0-70).</span><span id="Pond_swimTooltip">Swim forward. Specify a direction (0-360).</span><span id="Pond_stopTooltip">Stop swimming. Player will slow to a stop.</span><span id="Pond_healthTooltip">Returns the player\'s current health (0 is dead, 100 is healthy).</span><span id="Pond_speedTooltip">Returns the current speed of the player (0 is stopped, 100 is full speed).</span><span id="Pond_locXTooltip">Returns the X coordinate of the player (0 is the left edge, 100 is the right edge).</span><span id="Pond_locYTooltip">Returns the Y coordinate of the player (0 is the bottom edge, 100 is the top edge).</span><span id="Pond_logTooltip">Prints a number to your browser\'s console.</span></div><div style="display: none"><span id="Pond_myName">Player</span></div>' +
    (c +
      a +
      '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' +
      (e
        ? '&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>'
        : "") +
      (f ? '&nbsp;<button id="helpButton">Help</button>' : "") +
      h +
      '</td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">Documentation</button></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div><div id="tabarea"><div id="editorBar" class="tab-bar"><div><select id="avatar-select"></select></div><div class="tab tab-selected">Blocks</div><div class="tab">JavaScript</div></div><div class="tab-bar-clear"></div><div id="blockly"></div><div id="editor"></div></div><xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Pond"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">70</field></shadow></value></block><block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block><block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block><block type="pond_stop"></block><block type="pond_getX"></block><block type="pond_getY"></block><block type="pond_speed"></block><block type="pond_health"></block><block type="pond_log"><value name="VALUE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">123</field></shadow></value></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_boolean"></block></category><category name="Loops"><block type="controls_whileUntil"></block></category><category name="Math"><block type="pond_math_number"><mutation angle_field="false"></mutation></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="pond_math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_random_float"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category></xml><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>')
  );
}
var td = "pond-duck",
  Ff = null,
  Gf = !0,
  Hf = (U = null);
function If() {
  Gf = !0;
  var a = document.getElementById("avatar-select"),
    c = a.selectedIndex;
  U != T.fd[c] &&
    (Le(),
    (U = T.fd[c]),
    (a.style.backgroundColor = ve[U.dt % ve.length]),
    void 0 !== U.GA &&
      (A && A.I(),
      (a = {
        rtl: !1,
        trashcan: !0,
        readOnly: !U.zB,
        zoom: { controls: !0, wheel: !0 },
      }),
      (c = document.getElementById("toolbox")) && (a.toolbox = c),
      (a.media = "third-party/blockly/media/"),
      (a.oneBasedIndex = !1),
      (A = g.Jk("blockly", a)),
      H(A, Id),
      (a = g.W.Hf(U.GA)),
      g.W.tk(a, A),
      (a = A),
      (a.ql.length = 0),
      (a.hp.length = 0),
      g.h.FH(),
      Jf(!1),
      Kf(0)),
    void 0 !== U.BC && (Dd.setValue(U.BC, -1), Jf(!0), Kf(1)),
    Dd.setReadOnly(!U.zB),
    (Gf = !1));
}
function Kf(a) {
  for (var c = 0; c < Ff.length; c++)
    a == c ? g.g.o.Ga(Ff[c], "tab-selected") : g.g.o.jc(Ff[c], "tab-selected");
  var d = ["blockly", "editor"];
  c = 0;
  for (var e; (e = d[c]); c++)
    document.getElementById(e).style.visibility = c == a ? "visible" : "hidden";
  g.Bc(!1);
  document.getElementById("docsButton").disabled = !1;
  ld = 0 == a ? 11 : 12;
  Ie &&
    (document.getElementById("frameDocs").src =
      "pond/docs.html?lang=" + id + "&mode=" + ld);
  Gf || Ed || 1 != a || ((a = Ne()), (Gf = !0), Dd.setValue(a, -1), (Gf = !1));
}
function Lf() {
  if (!Gf) {
    var a = Ed ? Dd.getValue() : Ne();
    Ed
      ? a.trim() || (A.clear(), Jf(!1))
      : !A.ac(!1).length || confirm(R("Games_breakLink"))
      ? Jf(!0)
      : ((Gf = !0), Dd.setValue(a, -1), (Gf = !1));
  }
}
function Jf(a) {
  Ed = a;
  var c = Ff[0];
  a ? g.g.o.Ga(c, "tab-disabled") : g.g.o.jc(c, "tab-disabled");
}
var Mf = document.createElement("script");
Mf.type = "text/javascript";
Mf.src = "pond/duck/default-ducks.js";
document.head.appendChild(Mf);
window.addEventListener("load", function () {
  function a() {
    var w = h.offsetTop;
    k.style.top = w - window.pageYOffset + "px";
    k.style.left = f ? "10px" : "420px";
    k.style.width = window.innerWidth - 440 + "px";
    w = Math.max(0, w + k.offsetHeight - window.pageYOffset) + "px";
    for (
      var E = f ? "10px" : "420px",
        aa = window.innerWidth - 440 + "px",
        ba = 0,
        Ga;
      (Ga = m[ba]);
      ba++
    )
      (Ga.style.top = w), (Ga.style.left = E), (Ga.style.width = aa);
  }
  function c(w) {
    return function () {
      g.g.o.Or(d[w], "tab-disabled") || Kf(w);
    };
  }
  Hf = window.DUCKS;
  document.body.innerHTML = Ef();
  Fd();
  ye();
  ud("runButton", Oe);
  ud("resetButton", Qe);
  ud("docsButton", Je);
  ud("closeDocs", Ke);
  Pd();
  Qd();
  var d = Array.prototype.slice.call(
    document.querySelectorAll("#editorBar>.tab")
  );
  Ff = d;
  for (var e = 0; e < d.length; e++) ud(d[e], c(e));
  var f = -1 != hd.indexOf(id),
    h = document.getElementById("visualization"),
    k = document.getElementById("tabarea");
  e = document.getElementById("blockly");
  var l = document.getElementById("editor"),
    m = [e, l];
  window.addEventListener("scroll", function () {
    a(null);
    g.Ym(A);
  });
  window.addEventListener("resize", a);
  a(null);
  Sd().on("change", Lf);
  Rd();
  ff(
    g.j,
    "scan,cannon,drive,swim,stop,speed,damage,health,loc_x,getX,loc_y,getY,log"
  );
  l = [
    new g.g.T(20, 80),
    new g.g.T(80, 80),
    new g.g.T(20, 20),
    new g.g.T(80, 20),
  ];
  var n = document.getElementById("avatar-select"),
    p;
  for (e = 0; (p = Hf[e]); e++) {
    null === p.name && (p.name = R("Pond_myName"));
    var r = new Option(p.name, p.id);
    n.add(r);
    r = new le(p.name, l[e], p.editable);
    void 0 === p.blockly && void 0 === p.js && (p.js = p.compiled);
    me(r, p.blockly, p.js, p.compiled);
  }
  n.addEventListener("change", If);
  T.reset();
  Be();
  n &&
    (If(),
    (n.style.width = "0"),
    setTimeout(function () {
      n.style.width = "auto";
    }, 0));
});
