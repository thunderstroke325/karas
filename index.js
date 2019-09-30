(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.karas = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var Node =
  /*#__PURE__*/
  function () {
    function Node() {
      _classCallCheck(this, Node);

      this.__x = 0;
      this.__y = 0;
      this.__ox = 0; // relative/margin:auto/text-align等造成的偏移量

      this.__oy = 0;
      this.__width = 0;
      this.__height = 0;
      this.__prev = null;
      this.__next = null;
      this.__ctx = null; // canvas的context

      this.__defs = null; // svg的defs

      this.__parent = null;
      this.__style = {}; // style被解析后的k-v形式

      this.__baseLine = 0;
      this.__virtualDom = {};
    }

    _createClass(Node, [{
      key: "__offsetX",
      value: function __offsetX(diff) {
        this.__ox += diff;
      }
    }, {
      key: "__offsetY",
      value: function __offsetY(diff) {
        this.__oy += diff;
      }
    }, {
      key: "x",
      get: function get() {
        return this.__x;
      }
    }, {
      key: "y",
      get: function get() {
        return this.__y;
      }
    }, {
      key: "ox",
      get: function get() {
        return this.__ox;
      }
    }, {
      key: "oy",
      get: function get() {
        return this.__oy;
      }
    }, {
      key: "rx",
      get: function get() {
        return this.x + this.ox;
      }
    }, {
      key: "ry",
      get: function get() {
        return this.y + this.oy;
      }
    }, {
      key: "width",
      get: function get() {
        return this.__width;
      }
    }, {
      key: "height",
      get: function get() {
        return this.__height;
      }
    }, {
      key: "outerWidth",
      get: function get() {
        return this.__width;
      }
    }, {
      key: "outerHeight",
      get: function get() {
        return this.__height;
      }
    }, {
      key: "prev",
      get: function get() {
        return this.__prev;
      }
    }, {
      key: "next",
      get: function get() {
        return this.__next;
      }
    }, {
      key: "parent",
      get: function get() {
        return this.__parent;
      }
    }, {
      key: "root",
      get: function get() {
        if (this.parent) {
          return this.parent.root;
        }

        return this;
      }
    }, {
      key: "style",
      get: function get() {
        return this.__style;
      }
    }, {
      key: "ctx",
      get: function get() {
        return this.__ctx;
      }
    }, {
      key: "defs",
      get: function get() {
        return this.__defs;
      }
    }, {
      key: "baseLine",
      get: function get() {
        return this.__baseLine;
      }
    }, {
      key: "virtualDom",
      get: function get() {
        return this.__virtualDom;
      }
    }]);

    return Node;
  }();

  var CANVAS = 0;
  var SVG = 1;
  var div;
  var mode = {
    CANVAS: CANVAS,
    SVG: SVG,
    measure: function measure(s, style) {
      if (!div) {
        div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = '99999px';
        div.style.top = '-99999px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
      }

      div.style.fontSize = style.fontSize + 'px';
      div.innerText = s;
      var css = window.getComputedStyle(div, null);
      return parseFloat(css.width);
    }
  };

  var unit = {
    AUTO: 0,
    PX: 1,
    PERCENT: 2,
    POSITION: 3
  };

  var toString = {}.toString;

  function isType(type) {
    return function (obj) {
      return toString.call(obj) === '[object ' + type + ']';
    };
  }

  var isNumber = isType('Number');

  function _joinSourceArray(arr) {
    var res = '';

    for (var i = 0, len = arr.length; i < len; i++) {
      var item = arr[i];

      if (Array.isArray(item)) {
        res += _joinSourceArray(item);
      } else {
        res += stringify(item);
      }
    }

    return res;
  }

  function stringify(s) {
    if (isNil(s)) {
      return '';
    }

    return s.toString();
  }

  function encodeHtml(s, prop) {
    if (prop) {
      return s.replace(/"/g, '&quot;');
    }

    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  }

  function isNil(v) {
    return v === undefined || v === null;
  }

  function joinVirtualDom(vd, nd) {
    var s = '<defs>';
    nd.forEach(function (item) {
      s += joinDef(item);
    });
    s += '</defs><g>';
    vd.bb.forEach(function (item) {
      s += joinVd(item);
    });
    s += '</g><g>';
    vd.children.forEach(function (item) {
      s += joinVd(item);
    });
    s += '</g>';
    return s;
  }

  function joinVd(vd) {
    if (vd.type === 'item') {
      var s = '';
      vd.props.forEach(function (item) {
        s += " ".concat(item[0], "=\"").concat(item[1], "\"");
      });

      if (vd.tagName === 'text') {
        return "<text".concat(s, ">").concat(vd.content, "</text>");
      }

      return "<".concat(vd.tagName).concat(s, "/>");
    } else if (vd.type === 'text') {
      var _s = "";
      vd.children.forEach(function (item) {
        _s += joinVd(item);
      });
      return "<g>".concat(_s, "</g>");
    } else if (vd.type === 'dom' || vd.type === 'geom') {
      var _s2 = '<g>';
      vd.bb.forEach(function (item) {
        _s2 += joinVd(item);
      });
      _s2 += '</g><g>';
      vd.children.forEach(function (item) {
        _s2 += joinVd(item);
      });
      _s2 += '</g>';
      return "<g transform=\"".concat(joinTransform(vd.transform), "\">").concat(_s2, "</g>");
    }
  }

  function joinTransform(transform) {
    var s = '';
    transform.forEach(function (item) {
      s += "".concat(item[0], "(").concat(item[1], ") ");
    });
    return s;
  }

  function joinDef(def) {
    var s = "<".concat(def.tagName, " id=\"").concat(def.uuid, "\" gradientUnits=\"userSpaceOnUse\"");
    def.props.forEach(function (item) {
      s += " ".concat(item[0], "=\"").concat(item[1], "\"");
    });
    s += '>';
    def.stop.forEach(function (item) {
      s += "<stop stop-color=\"".concat(item[0], "\" offset=\"").concat(item[1] * 100, "%\"/>");
    });
    s += "</".concat(def.tagName, ">");
    return s;
  }

  function r2d(n) {
    return n * Math.PI / 180;
  }

  function rgb2int(color) {
    var res = [];

    if (color.charAt(0) === '#') {
      color = color.slice(1);

      if (color.length === 3) {
        res.push(parseInt(color.charAt(0) + color.charAt(0), 16));
        res.push(parseInt(color.charAt(1) + color.charAt(1), 16));
        res.push(parseInt(color.charAt(2) + color.charAt(2), 16));
      } else if (color.length === 6) {
        res.push(parseInt(color.slice(0, 2), 16));
        res.push(parseInt(color.slice(2, 4), 16));
        res.push(parseInt(color.slice(4), 16));
      }
    } else {
      var c = color.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);

      if (c) {
        res = [parseInt(c[1]), parseInt(c[2]), parseInt(c[3])];

        if (c[4]) {
          res[3] = parseFloat(c[4]);
        }
      }
    }

    return res;
  }

  function arr2hash(arr) {
    var hash = {};

    for (var i = 0, len = arr.length; i < len; i++) {
      var item = arr[i];

      if (Array.isArray(item)) {
        hash[item[0]] = item[1];
      } else {
        for (var list = Object.keys(item), j = list.length - 1; j >= 0; j--) {
          var k = list[j];
          hash[k] = item[k];
        }
      }
    }

    return hash;
  }

  function hash2arr(hash) {
    var arr = [];

    for (var list = Object.keys(hash), i = 0, len = list.length; i < len; i++) {
      var k = list[i];
      arr.push([k, hash[k]]);
    }

    return arr;
  }

  var util = {
    isObject: isType('Object'),
    isString: isType('String'),
    isFunction: isType('Function'),
    isNumber: isNumber,
    isBoolean: isType('Boolean'),
    isDate: isType('Date'),
    stringify: stringify,
    joinSourceArray: function joinSourceArray(arr) {
      return _joinSourceArray(arr);
    },
    encodeHtml: encodeHtml,
    isNil: isNil,
    joinVirtualDom: joinVirtualDom,
    joinVd: joinVd,
    joinTransform: joinTransform,
    joinDef: joinDef,
    r2d: r2d,
    rgb2int: rgb2int,
    arr2hash: arr2hash,
    hash2arr: hash2arr
  };

  function calMatrix(transform, ox, oy) {
    var matrix = [1, 0, 0, 1, 0, 0];
    var tx = 0;
    var ty = 0;
    var rd = 0;
    var sdx = 0;
    var sdy = 0;
    var sx = 1;
    var sy = 1;
    var hasRotate;
    transform.forEach(function (item) {
      var _item = _slicedToArray(item, 2),
          k = _item[0],
          v = _item[1];

      if (k === 'translateX') {
        tx += v;

        if (hasRotate) {
          ox -= v;
        }
      } else if (k === 'translateY') {
        ty += v;

        if (hasRotate) {
          oy -= v;
        }
      } else if (k === 'scaleX') {
        sx *= v;
      } else if (k === 'scaleY') {
        sy *= v;
      } else if (k === 'skewX') {
        sdx += v;
      } else if (k === 'skewY') {
        sdy += v;
      } else if (k === 'rotate') {
        rd += v;
        hasRotate = true;
      }
    });
    rd = util.r2d(rd);
    sdx = util.r2d(sdx);
    sdy = util.r2d(sdy);
    matrix[0] = sx * Math.cos(rd);
    matrix[1] = sy * Math.sin(rd) + sy * Math.tan(sdy);
    matrix[2] = -sx * Math.sin(rd) + sx * Math.tan(sdx);
    matrix[3] = sy * Math.cos(rd);
    matrix[4] = (-ox * Math.cos(rd) + oy * Math.sin(rd) + ox) * sx + tx + ox - sx * ox;
    matrix[5] = (-ox * Math.sin(rd) - oy * Math.cos(rd) + oy) * sy + ty + oy - sy * oy;
    return matrix;
  }

  function transformPoint(matrix, x, y) {
    var _matrix = _slicedToArray(matrix, 6),
        a = _matrix[0],
        b = _matrix[1],
        c = _matrix[2],
        d = _matrix[3],
        e = _matrix[4],
        f = _matrix[5];

    return [a * x + c * y + e, b * x + d * y + f];
  } // 向量积


  function vectorProduct(x1, y1, x2, y2) {
    return x1 * y2 - x2 * y1;
  }

  function pointInQuadrilateral(x, y, x1, y1, x2, y2, x3, y3, x4, y4, matrix) {
    if (matrix) {
      var _transformPoint = transformPoint(matrix, x1, y1);

      var _transformPoint2 = _slicedToArray(_transformPoint, 2);

      x1 = _transformPoint2[0];
      y1 = _transformPoint2[1];

      var _transformPoint3 = transformPoint(matrix, x2, y2);

      var _transformPoint4 = _slicedToArray(_transformPoint3, 2);

      x2 = _transformPoint4[0];
      y2 = _transformPoint4[1];

      var _transformPoint5 = transformPoint(matrix, x3, y3);

      var _transformPoint6 = _slicedToArray(_transformPoint5, 2);

      x3 = _transformPoint6[0];
      y3 = _transformPoint6[1];

      var _transformPoint7 = transformPoint(matrix, x4, y4);

      var _transformPoint8 = _slicedToArray(_transformPoint7, 2);

      x4 = _transformPoint8[0];
      y4 = _transformPoint8[1];

      if (vectorProduct(x2 - x1, y2 - y1, x - x1, y - y1) > 0 && vectorProduct(x4 - x2, y4 - y2, x - x2, y - y2) > 0 && vectorProduct(x3 - x4, y3 - y4, x - x4, y - y4) > 0 && vectorProduct(x1 - x3, y1 - y3, x - x3, y - y3) > 0) {
        return true;
      }
    } else {
      return x >= x1 && y >= y1 && x <= x4 && y <= y4;
    }
  }

  function normalize(transform, ox, oy, w, h) {
    transform.forEach(function (item) {
      var _item2 = _slicedToArray(item, 2),
          k = _item2[0],
          v = _item2[1];

      if (k === 'translateX') {
        if (v.unit === unit.PERCENT) {
          item[1] = v.value * w * 0.01;
        } else {
          item[1] = v.value;
        }
      } else if (k === 'translateY') {
        if (v.unit === unit.PERCENT) {
          item[1] = v.value * h * 0.01;
        } else {
          item[1] = v.value;
        }
      }
    });
    return transform;
  } // 1上层，2下层


  function alphaBlend(im1, im2) {
    var d1 = im1.data;
    var d2 = im2.data;

    for (var i = 0, len = d1.length; i < len; i += 4) {
      var r1 = d1[i];
      var g1 = d1[i + 1];
      var b1 = d1[i + 2];
      var a1 = d1[i + 3];
      var r2 = d2[i];
      var g2 = d2[i + 1];
      var b2 = d2[i + 2];
      var a2 = d2[i + 3];

      if (a2 === 0) ; else if (a1 === 0) {
        d1[i] = r2;
        d1[i + 1] = g2;
        d1[i + 2] = b2;
        d1[i + 3] = a2;
      } else {
        a1 /= 255;
        a2 /= 255;
        r1 = r1 * a1 + r2 * a2 * (1 - a1);
        b1 = g1 * a1 + g2 * a2 * (1 - a1);
        b1 = b1 * a1 + b2 * a2 * (1 - a1);
        a1 = 1 - (1 - a1) * (1 - a2);
        r1 = r1 / a1;
        g1 = g1 / a1;
        b1 = b1 / a1;
        d1[i] = r1;
        d1[i + 1] = g1;
        d1[i + 2] = b1;
        d1[i + 3] = a1;
      }
    }
  }

  var tf = {
    calMatrix: calMatrix,
    pointInQuadrilateral: pointInQuadrilateral,
    normalize: normalize,
    alphaBlend: alphaBlend
  };

  /* 获取合适的虚线实体空白宽度ps/pd和数量n
   * 总长total，start边长bs，end边长be，内容长w，
   * 实体长范围[smin,smax]，空白长范围[dmin,dmax]
   */

  function getFitDashed(total, bs, be, w, smin, smax, dmin, dmax) {
    var n = 1;
    var ps = 1;
    var pd = 1; // 从最大实体空白长开始尝试

    outer: for (var i = smax; i >= smin; i--) {
      for (var j = dmax; j >= dmin; j--) {
        // 已知实体空白长度，n实体和n-1空白组成total，计算获取n数量
        var per = i + j;
        var num = Math.floor((total + j) / per);
        var k = j; // 可能除不尽，此时扩展空白长

        if (num * per < j + total) {
          var free = total - num * i;
          k = free / (num - 1);

          if (k > dmax) {
            continue;
          }
        }

        per = i + k; // bs比实体大才有效，因为小的话必定和第一个实体完整相连

        if (bs > 1 && bs > i) {
          var mo = bs % per;

          if (mo > i) {
            continue;
          }

          if (be > 1) {
            var _mo = (bs + w) % per;

            if (_mo > i) {
              continue;
            }
          }
        }

        if (be > 1) {
          var _mo2 = (bs + w) % per;

          if (_mo2 > i) {
            continue;
          }
        }

        if (num > 0) {
          n = num;
          ps = i;
          pd = k;
        }

        break outer;
      }
    }

    return {
      n: n,
      ps: ps,
      pd: pd
    };
  } // dashed时n个实线和n-1虚线默认以3:1宽度组成，dotted则是n和n以1:1组成


  function getDashed(style, m1, m2, m3, m4, bw) {
    var total = m4 - m1;
    var w = m3 - m2;
    var bs = m2 - m1;
    var be = m4 - m3;

    if (style === 'dotted') {
      return getFitDashed(total, bs, be, w, bw, bw, Math.max(1, bw * 0.25), bw * 2);
    } else {
      var _getFitDashed = getFitDashed(total, bs, be, w, bw, bw * 3, Math.max(1, bw * 0.25), bw * 2),
          n = _getFitDashed.n,
          ps = _getFitDashed.ps,
          pd = _getFitDashed.pd;

      if (n === 1) {
        return getFitDashed(total, bs, be, w, bw, bw, Math.max(1, bw * 0.25), bw * 2);
      } // 降级为dotted


      return {
        n: n,
        ps: ps,
        pd: pd
      };
    }
  }

  function renderBorder(renderMode, points, color, ctx, xom) {
    if (renderMode === mode.CANVAS) {
      points.forEach(function (point) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(point[0], point[1]);

        for (var i = 2, len = point.length; i < len; i += 2) {
          ctx.lineTo(point[i], point[i + 1]);
        }

        ctx.fill();
        ctx.closePath();
      });
    } else if (renderMode === mode.SVG) {
      var s = '';
      points.forEach(function (point) {
        s += "M ".concat(point[0], " ").concat(point[1]);

        for (var i = 2, len = point.length; i < len; i += 2) {
          s += "L ".concat(point[i], " ").concat(point[i + 1], " ");
        }
      });
      xom.addBorder([['d', s], ['fill', color]]);
    }
  } // 当linear-gradient的值超过[0,1]区间限制时，计算其对应区间1的值


  function getCsStartLimit(c1, p1, c2, p2, length) {
    var _c = _slicedToArray(c1, 4),
        r1 = _c[0],
        g1 = _c[1],
        b1 = _c[2],
        _c$ = _c[3],
        a1 = _c$ === void 0 ? 1 : _c$;

    var _c2 = _slicedToArray(c2, 4),
        r2 = _c2[0],
        g2 = _c2[1],
        b2 = _c2[2],
        _c2$ = _c2[3],
        a2 = _c2$ === void 0 ? 1 : _c2$;

    var l1 = Math.abs(p1) * length;
    var l2 = p2 * length;
    var p = l1 / (l2 + l1);
    var r = Math.floor(r1 + (r2 - r1) * p);
    var g = Math.floor(g1 + (g2 - g1) * p);
    var b = Math.floor(b1 + (b2 - b1) * p);
    var a = a1 + (a2 - a1) * p;
    return [r, g, b, a];
  }

  function getCsEndLimit(c1, p1, c2, p2, length) {
    var _c3 = _slicedToArray(c1, 4),
        r1 = _c3[0],
        g1 = _c3[1],
        b1 = _c3[2],
        _c3$ = _c3[3],
        a1 = _c3$ === void 0 ? 1 : _c3$;

    var _c4 = _slicedToArray(c2, 4),
        r2 = _c4[0],
        g2 = _c4[1],
        b2 = _c4[2],
        _c4$ = _c4[3],
        a2 = _c4$ === void 0 ? 1 : _c4$;

    var l1 = p1 * length;
    var l2 = p2 * length;
    var p = (length - l1) / (l2 - l1);
    var r = Math.floor(r1 + (r2 - r1) * p);
    var g = Math.floor(g1 + (g2 - g1) * p);
    var b = Math.floor(b1 + (b2 - b1) * p);
    var a = a1 + (a2 - a1) * p;
    return [r, g, b, a];
  }

  function getCsLimit(first, last, length) {
    var c1 = util.rgb2int(first[0]);
    var c2 = util.rgb2int(last[0]);

    var _c5 = _slicedToArray(c1, 4),
        r1 = _c5[0],
        g1 = _c5[1],
        b1 = _c5[2],
        _c5$ = _c5[3],
        a1 = _c5$ === void 0 ? 1 : _c5$;

    var _c6 = _slicedToArray(c2, 4),
        r2 = _c6[0],
        g2 = _c6[1],
        b2 = _c6[2],
        _c6$ = _c6[3],
        a2 = _c6$ === void 0 ? 1 : _c6$;

    var l1 = Math.abs(first[1]) * length;
    var l2 = last[1] * length;
    var p = l1 / (l1 + l2);
    var r = Math.floor(r1 + (r2 - r1) * p);
    var g = Math.floor(g1 + (g2 - g1) * p);
    var b = Math.floor(b1 + (b2 - b1) * p);
    var a = a1 + (a2 - a1) * p;
    first[0] = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
    first[1] = 0;
    p = (length + l1) / (l1 + l2);
    r = Math.floor(r1 + (r2 - r1) * p);
    g = Math.floor(g1 + (g2 - g1) * p);
    b = Math.floor(b1 + (b2 - b1) * p);
    a = a1 + (a2 - a1) * p;
    last[0] = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
    last[1] = 1;
  } // 获取color-stop区间范围，去除无用值


  function getColorStop(v, length) {
    var list = []; // 先把已经声明距离的换算成[0,1]以数组形式存入，未声明的原样存入

    for (var i = 1, _len = v.length; i < _len; i++) {
      var item = v[i]; // 考虑是否声明了位置

      var arr = item.trim().split(/\s+/);

      if (arr.length > 1) {
        var c = arr[0];
        var p = arr[1];

        if (/%$/.test(p)) {
          list.push([c, parseFloat(p) * 0.01]);
        } else {
          list.push([c, parseFloat(p) / length]);
        }
      } else {
        list.push(arr[0]);
      }
    } // 首尾不声明默认为[0, 1]


    if (list.length > 1) {
      if (!Array.isArray(list[0])) {
        list[0] = [list[0], 0];
      }

      if (!Array.isArray(list[list.length - 1])) {
        list[list.length - 1] = [list[list.length - 1], 1];
      }
    } else if (!Array.isArray(list[0])) {
      list[0] = [list[0], 0];
    } // 不是数组形式的是未声明的，需区间计算，找到连续的未声明的，前后的区间平分


    var start = list[0][1];

    for (var _i = 1, _len2 = list.length; _i < _len2 - 1; _i++) {
      var _item = list[_i];

      if (Array.isArray(_item)) {
        start = _item[1];
      } else {
        var j = _i + 1;
        var end = list[list.length - 1][1];

        for (; j < _len2 - 1; j++) {
          var _item2 = list[j];

          if (Array.isArray(_item2)) {
            end = _item2[1];
            break;
          }
        }

        var num = j - _i + 1;
        var per = (end - start) / num;

        for (var k = _i; k < j; k++) {
          var _item3 = list[k];
          list[k] = [_item3, start + per * (k + 1 - _i)];
        }

        _i = j;
      }
    } // 每个不能小于前面的，canvas/svg不能兼容这种情况，需处理


    for (var _i2 = 1, _len3 = list.length; _i2 < _len3; _i2++) {
      var _item4 = list[_i2];
      var prev = list[_i2 - 1];

      if (_item4[1] < prev[1]) {
        _item4[1] = prev[1];
      }
    } // 0之前的和1之后的要过滤掉


    for (var _i3 = 0, _len4 = list.length; _i3 < _len4 - 1; _i3++) {
      var _item5 = list[_i3];

      if (_item5[1] > 1) {
        list.splice(_i3 + 1);
        break;
      }
    }

    for (var _i4 = list.length - 1; _i4 > 0; _i4--) {
      var _item6 = list[_i4];

      if (_item6[1] < 0) {
        list.splice(0, _i4);
        break;
      }
    } // 可能存在超限情况，如在使用px单位超过len或<len时，canvas会报错超过[0,1]区间，需手动换算至区间内


    var len = list.length; // 在只有1个的情况下可简化

    if (len === 1) {
      list[0][1] = 0;
    } else {
      // 全部都在[0,1]之外也可以简化
      var allBefore = true;
      var allAfter = true;

      for (var _i5 = len - 1; _i5 >= 0; _i5--) {
        var _item7 = list[_i5];
        var _p = _item7[1];

        if (_p > 0) {
          allBefore = false;
        }

        if (_p < 1) {
          allAfter = false;
        }
      }

      if (allBefore) {
        list.splice(0, len - 1);
        list[0][1] = 0;
      } else if (allAfter) {
        list.splice(1);
        list[0][1] = 0;
      } // 部分在区间之外需复杂计算
      else {
          var first = list[0];
          var last = list[len - 1]; // 只要2个的情况下就是首尾都落在外面

          if (len === 2) {
            if (first[1] < 0 && last[1] > 1) {
              getCsLimit(first, last, length);
            }
          } // 只有1个在外面的情况较为容易
          else {
              if (first[1] < 0) {
                var next = list[1];
                var c1 = util.rgb2int(first[0]);
                var c2 = util.rgb2int(next[0]);

                var _c7 = getCsStartLimit(c1, first[1], c2, next[1], length);

                first[0] = "rgba(".concat(_c7[0], ",").concat(_c7[1], ",").concat(_c7[2], ",").concat(_c7[3], ")");
                first[1] = 0;
              }

              if (last[1] > 1) {
                var _prev = list[len - 2];

                var _c8 = util.rgb2int(_prev[0]);

                var _c9 = util.rgb2int(last[0]);

                var _c10 = getCsEndLimit(_c8, _prev[1], _c9, last[1], length);

                last[0] = "rgba(".concat(_c10[0], ",").concat(_c10[1], ",").concat(_c10[2], ",").concat(_c10[3], ")");
                last[1] = 1;
              }
            }
        }
    } // 防止精度计算溢出[0,1]


    list.forEach(function (item) {
      if (item[1] < 0) {
        item[1] = 0;
      } else if (item[1] > 1) {
        item[1] = 1;
      }
    });
    return list;
  }

  var Xom =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Xom, _Node);

    function Xom(tagName, props) {
      var _this;

      _classCallCheck(this, Xom);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Xom).call(this));
      props = props || []; // 构建工具中都是arr，手写可能出现hash情况

      if (Array.isArray(props)) {
        _this.props = util.arr2hash(props);
        _this.__props = props;
      } else {
        _this.props = props;
        _this.__props = util.hash2arr(props);
      }

      _this.__tagName = tagName;
      _this.__style = _this.props.style || {}; // style被解析后的k-v形式

      _this.__listener = {};

      _this.__props.forEach(function (item) {
        var k = item[0];

        if (/^on[a-zA-Z]/.test(k)) {
          _this.__listener[k.slice(2).toLowerCase()] = item[1];
        }
      }); // margin和padding的宽度


      _this.__mtw = 0;
      _this.__mrw = 0;
      _this.__mbw = 0;
      _this.__mlw = 0;
      _this.__ptw = 0;
      _this.__prw = 0;
      _this.__pbw = 0;
      _this.__plw = 0;
      return _this;
    }

    _createClass(Xom, [{
      key: "__layout",
      value: function __layout(data) {
        var w = data.w;
        var _this$style = this.style,
            display = _this$style.display,
            width = _this$style.width,
            marginTop = _this$style.marginTop,
            marginRight = _this$style.marginRight,
            marginBottom = _this$style.marginBottom,
            marginLeft = _this$style.marginLeft,
            paddingTop = _this$style.paddingTop,
            paddingRight = _this$style.paddingRight,
            paddingBottom = _this$style.paddingBottom,
            paddingLeft = _this$style.paddingLeft;

        if (display === 'none') {
          return;
        }

        if (width && width.unit !== unit.AUTO) {
          switch (width.unit) {
            case unit.PX:
              w = width.value;
              break;

            case unit.PERCENT:
              w *= width.value * 0.01;
              break;
          }
        }

        this.__mlw = this.__mpWidth(marginLeft, w);
        this.__mtw = this.__mpWidth(marginTop, w);
        this.__mrw = this.__mpWidth(marginRight, w);
        this.__mbw = this.__mpWidth(marginBottom, w);
        this.__plw = this.__mpWidth(paddingLeft, w);
        this.__ptw = this.__mpWidth(paddingTop, w);
        this.__prw = this.__mpWidth(paddingRight, w);
        this.__pbw = this.__mpWidth(paddingBottom, w);

        if (display === 'block') {
          this.__layoutBlock(data);
        } else if (display === 'flex') {
          this.__layoutFlex(data);
        } else if (display === 'inline') {
          this.__layoutInline(data);
        }
      }
    }, {
      key: "isGeom",
      value: function isGeom() {
        return this.tagName.charAt(0) === '$';
      } // 获取margin/padding的实际值

    }, {
      key: "__mpWidth",
      value: function __mpWidth(mp, w) {
        if (mp.unit === unit.PX) {
          return mp.value;
        } else if (mp.unit === unit.PERCENT) {
          return mp.value * w * 0.01;
        }

        return 0;
      }
    }, {
      key: "render",
      value: function render(renderMode) {
        this.__renderMode = renderMode;

        if (renderMode === mode.SVG) {
          this.__virtualDom = {
            bb: [],
            children: [],
            transform: []
          };
        }

        var ctx = this.ctx,
            style = this.style,
            width = this.width,
            height = this.height,
            mlw = this.mlw,
            mrw = this.mrw,
            mtw = this.mtw,
            mbw = this.mbw,
            plw = this.plw,
            ptw = this.ptw,
            prw = this.prw,
            pbw = this.pbw; // 恢复默认，防止其它matrix影响

        if (renderMode === mode.CANVAS) {
          ctx.setTransform(1, 0, 0, 1, 0, 0);
        }

        var display = style.display,
            position = style.position,
            top = style.top,
            right = style.right,
            bottom = style.bottom,
            left = style.left,
            bgg = style.backgroundGradient,
            bgc = style.backgroundColor,
            borderTopWidth = style.borderTopWidth,
            btc = style.borderTopColor,
            bts = style.borderTopStyle,
            borderRightWidth = style.borderRightWidth,
            brc = style.borderRightColor,
            brs = style.borderRightStyle,
            borderBottomWidth = style.borderBottomWidth,
            bbc = style.borderBottomColor,
            bbs = style.borderBottomStyle,
            borderLeftWidth = style.borderLeftWidth,
            blc = style.borderLeftColor,
            bls = style.borderLeftStyle,
            transform = style.transform,
            transformOrigin = style.transformOrigin;

        if (display === 'none') {
          return;
        } // 使用rx和ry渲染位置，考虑了relative和translate影响


        var x = this.rx,
            y = this.ry;
        var btw = borderTopWidth.value;
        var brw = borderRightWidth.value;
        var bbw = borderBottomWidth.value;
        var blw = borderLeftWidth.value;
        var x1 = x + mlw;
        var x2 = x1 + blw;
        var x3 = x2 + width + plw + prw;
        var x4 = x3 + brw;
        var y1 = y + mtw;
        var y2 = y1 + btw;
        var y3 = y2 + height + ptw + pbw;
        var y4 = y3 + bbw;
        var iw = width + plw + prw;
        var ih = height + ptw + pbw; // 除root节点外relative渲染时做偏移，百分比基于父元素，若父元素没有一定高则为0

        if (position === 'relative' && this.parent) {
          var _this$parent = this.parent,
              _width = _this$parent.width,
              _height = _this$parent.height;
          var h = this.parent.style.height;

          if (left.unit !== unit.AUTO) {
            var diff = left.unit === unit.PX ? left.value : left.value * _width * 0.01;

            this.__offsetX(diff);
          } else if (right.unit !== unit.AUTO) {
            var _diff = right.unit === unit.PX ? right.value : right.value * _width * 0.01;

            this.__offsetX(-_diff);
          }

          if (top.unit !== unit.AUTO) {
            var _diff2 = top.unit === unit.PX ? top.value : top.value * _height * 0.01 * (h.unit === unit.AUTO ? 0 : 1);

            this.__offsetY(_diff2);
          } else if (bottom.unit !== unit.AUTO) {
            var _diff3 = bottom.unit === unit.PX ? bottom.value : bottom.value * _height * 0.01 * (h.unit === unit.AUTO ? 0 : 1);

            this.__offsetY(-_diff3);
          }
        } // translate相对于自身


        if (transform) {
          var _x = x + mlw + blw + iw + brw + mrw;

          var _y = y + mtw + btw + ih + bbw + mbw;

          var tfo = [];
          transformOrigin.forEach(function (item, i) {
            if (item.unit === unit.PX) {
              tfo.push(item.value);
            } else if (item.unit === unit.PERCENT) {
              tfo.push(item.value * (i ? _x - x : _y - y) * 0.01);
            } else if (item.value === 'left') {
              tfo.push(x);
            } else if (item.value === 'right') {
              tfo.push(_x);
            } else if (item.value === 'top') {
              tfo.push(y);
            } else if (item.value === 'bottom') {
              tfo.push(y + _y);
            } else {
              tfo.push(i ? y + (_y - y) * 0.5 : x + (_x - x) * 0.5);
            }
          });
          this.__tox = tfo[0];
          this.__toy = tfo[1];
          var list = tf.normalize(transform, tfo[0], tfo[1], _x - x, _y - y);
          var matrix = tf.calMatrix(list, tfo[0], tfo[1]);

          if (renderMode === mode.CANVAS) {
            // TODO: canvas递归transform处理
            ctx.setTransform.apply(ctx, _toConsumableArray(matrix));
          } else if (renderMode === mode.SVG) {
            this.addTransform(['matrix', matrix.join(',')]);
          }
        } // 先渲染渐变，没有则背景色


        if (bgg) {
          var k = bgg.k,
              v = bgg.v;

          if (k === 'linear') {
            var deg = 180;

            if (v[0] === 'to top') {
              deg = 0;
            } else if (v[0] === 'to top right') {
              deg = 45;
            } else if (v[0] === 'to right') {
              deg = 90;
            } else if (v[0] === 'to bottom right') {
              deg = 135;
            } else if (v[0] === 'to bottom') ; else if (v[0] === 'to bottom left') {
              deg = 225;
            } else if (v[0] === 'to left') {
              deg = 270;
            } else if (v[0] === 'to top left') {
              deg = 315;
            } // 数字角度，没有的话取默认角度
            else {
                var match = /([\d.]+)deg/.exec(v[0]);

                if (match) {
                  deg = parseFloat(match[1]);
                } else {
                  v.unshift(null);
                }
              } // 需计算角度 https://www.w3cplus.com/css3/do-you-really-understand-css-linear-gradients.html


            var r = util.r2d(deg);
            var length = Math.abs(iw * Math.sin(r)) + Math.abs(ih * Math.cos(r));
            var half = length * 0.5;

            if (deg >= 360) {
              deg = deg % 360;
            }

            while (deg < 0) {
              deg += 360;
            }

            var cx = x2 + iw * 0.5;
            var cy = y2 + ih * 0.5;
            var xx0 = x3;
            var yy0 = y3;
            var xx1 = x2;
            var yy1 = y2;

            if (deg >= 270) {
              var _r = util.r2d(360 - deg);

              xx0 = cx + Math.sin(_r) * half;
              yy0 = cy + Math.cos(_r) * half;
              xx1 = cx - Math.sin(_r) * half;
              yy1 = cy - Math.cos(_r) * half;
            } else if (deg >= 180) {
              var _r2 = util.r2d(deg - 180);

              xx0 = cx + Math.sin(_r2) * half;
              yy0 = cy - Math.cos(_r2) * half;
              xx1 = cx - Math.sin(_r2) * half;
              yy1 = cy + Math.cos(_r2) * half;
            } else if (deg >= 90) {
              var _r3 = util.r2d(180 - deg);

              xx0 = cx - Math.sin(_r3) * half;
              yy0 = cy - Math.cos(_r3) * half;
              xx1 = cx + Math.sin(_r3) * half;
              yy1 = cy + Math.cos(_r3) * half;
            } else if (deg >= 0) {
              var _r4 = util.r2d(deg);

              xx0 = cx - Math.sin(_r4) * half;
              yy0 = cy + Math.cos(_r4) * half;
              xx1 = cx + Math.sin(_r4) * half;
              yy1 = cy - Math.cos(_r4) * half;
            } // 计算colorStop


            var _list = getColorStop(v, length);

            if (renderMode === mode.CANVAS) {
              var lg = ctx.createLinearGradient(xx0, yy0, xx1, yy1);

              _list.forEach(function (item) {
                lg.addColorStop(item[1], item[0]);
              });

              ctx.beginPath();
              ctx.fillStyle = lg;
              ctx.rect(x2, y2, iw, ih);
              ctx.fill();
              ctx.closePath();
            } else if (renderMode === mode.SVG) {
              var uuid = this.defs.add({
                tagName: 'linearGradient',
                props: [['x1', xx0], ['y1', yy0], ['x2', xx1], ['y2', yy1]],
                stop: _list
              });
              this.addBackground([['x', x2], ['y', y2], ['width', iw], ['height', ih], ['fill', "url(#".concat(uuid, ")")]]);
            }
          } else if (k === 'radial') {
            var _cx = x2 + iw * 0.5;

            var _cy = y2 + ih * 0.5;

            var size = 'farthest-corner';

            var _r5; // 半径
            // 申明了形状、圆心、size等


            if (/circle|ellipse|at|closest|farthest/i.test(v[0]) || !/#[0-9a-f]{3,6}/i.test(v[0]) && !/\brgba?\(.*\)/i.test(v[0])) {
              var i = v[0].indexOf('at');
              var at;
              var s;

              if (i > -1) {
                at = v[0].slice(i + 2);
                s = v[0].slice(0, i - 1);
              }

              s = /(closest|farthest)-(side|corner)/.exec(s);

              if (s) {
                size = s[0];
              } // 指定宽高后size失效，置null标识
              else {
                  s = /\s+(-?[\d.]+(?:px|%))\s*(-?[\d.]+(?:px|%))?/.exec(s);

                  if (s) {
                    size = null;

                    if (s[1].indexOf('px') > -1) {
                      _r5 = parseFloat(s[1]) * 0.5;
                    } else {
                      _r5 = parseFloat(s[1]) * iw * 0.005;
                    }
                  }
                }

              if (at) {
                s = /\s+(-?[\d.]+(?:px|%))\s*(-?[\d.]+(?:px|%))?/.exec(at);

                if (s) {
                  if (s[1].indexOf('px') > -1) {
                    _cx = x2 + parseFloat(s[1]);
                  } else {
                    _cx = x2 + parseFloat(s[1]) * iw * 0.01;
                  } // y可以省略，此时等同于x


                  var by = s[2] || s[1];

                  if (by.indexOf('px') > -1) {
                    _cy = y2 + parseFloat(by);
                  } else {
                    _cy = y2 + parseFloat(by) * ih * 0.01;
                  }
                }
              }
            } else {
              v.unshift(null);
            }

            if (size) {
              if (size === 'closest-side') {
                // 在边外特殊情况只有end颜色填充
                if (_cx <= x2 || _cx >= x3 || _cy <= y2 || _cy >= y3) {
                  _r5 = 0;
                } else {
                  var xl;
                  var yl;

                  if (_cx < x2 + iw * 0.5) {
                    xl = _cx - x2;
                  } else {
                    xl = x3 - _cx;
                  }

                  if (_cy < y2 + ih * 0.5) {
                    yl = _cy - y2;
                  } else {
                    yl = y3 - _cy;
                  }

                  _r5 = Math.min(xl, yl);
                }
              } else if (size === 'closest-corner') {
                var _xl;

                var _yl;

                if (_cx < x2 + iw * 0.5) {
                  _xl = _cx - x2;
                } else {
                  _xl = x3 - _cx;
                }

                if (_cy < y2 + ih * 0.5) {
                  _yl = _cy - y2;
                } else {
                  _yl = y3 - _cy;
                }

                _r5 = Math.sqrt(Math.pow(_xl, 2) + Math.pow(_yl, 2));
              } else if (size === 'farthest-side') {
                if (_cx <= x2) {
                  _r5 = x2 - _cx + iw;
                } else if (_cx >= x3) {
                  _r5 = _cx - x3 + iw;
                } else if (_cy <= y2) {
                  _r5 = y2 - _cy + ih;
                } else if (_cx >= y3) {
                  _r5 = _cy - y3 + ih;
                } else {
                  var _xl2 = Math.max(x3 - _cx, _cx - x2);

                  var _yl2 = Math.max(y3 - _cy, _cy - y2);

                  _r5 = Math.max(_xl2, _yl2);
                }
              } // 默认farthest-corner
              else {
                  var _xl3;

                  var _yl3;

                  if (_cx < x2 + iw * 0.5) {
                    _xl3 = x3 - _cx;
                  } else {
                    _xl3 = _cx - x2;
                  }

                  if (_cy < y2 + ih * 0.5) {
                    _yl3 = y3 - _cy;
                  } else {
                    _yl3 = _cy - y2;
                  }

                  _r5 = Math.sqrt(Math.pow(_xl3, 2) + Math.pow(_yl3, 2));
                }
            } // 计算colorStop


            var _list2 = getColorStop(v, _r5 * 2); // 超限情况等同于只显示end的bgc


            if (_r5 <= 0) {
              var end = _list2[_list2.length - 1];
              end[1] = 0;
              _list2 = [end];
              _cx = x2;
              _cy = y2; // 肯定大于最长直径

              _r5 = iw + ih;
            }

            if (renderMode === mode.CANVAS) {
              var rg = ctx.createRadialGradient(_cx, _cy, 0, _cx, _cy, _r5);

              _list2.forEach(function (item) {
                rg.addColorStop(item[1], item[0]);
              });

              ctx.beginPath();
              ctx.fillStyle = rg;
              ctx.rect(x2, y2, iw, ih);
              ctx.fill();
              ctx.closePath();
            } else if (renderMode === mode.SVG) {
              var _uuid = this.defs.add({
                tagName: 'radialGradient',
                props: [['cx', _cx], ['cy', _cy], ['r', _r5]],
                stop: _list2
              });

              this.addBackground([['x', x2], ['y', y2], ['width', iw], ['height', ih], ['fill', "url(#".concat(_uuid, ")")]]);
            }
          }
        } else if (bgc && bgc !== 'transparent') {
          if (renderMode === mode.CANVAS) {
            ctx.beginPath();
            ctx.fillStyle = bgc;
            ctx.rect(x2, y2, iw, ih);
            ctx.fill();
            ctx.closePath();
          } else if (renderMode === mode.SVG) {
            this.addBackground([['x', x2], ['y', y2], ['width', iw], ['height', ih], ['fill', bgc]]);
          }
        } // 边框需考虑尖角，两条相交边平分45°夹角


        if (btw > 0 && btc !== 'transparent') {
          var points = [];

          if (['dashed', 'dotted'].indexOf(bts) > -1) {
            // 寻找一个合适的虚线线段长度和之间空白边距长度
            var _getDashed = getDashed(bts, x1, x2, x3, x4, btw),
                n = _getDashed.n,
                ps = _getDashed.ps,
                pd = _getDashed.pd;

            if (n <= 1) {
              points.push([x1, y1, x4, y1, x3, y2, x2, y2]);
            } else {
              var deg1 = Math.atan(btw / blw);
              var deg2 = Math.atan(btw / brw);

              for (var _i6 = 0; _i6 < n; _i6++) {
                // 最后一个可能没有到底，延长之
                var isLast = _i6 === n - 1;

                var _xx = _i6 ? x1 + ps * _i6 + pd * _i6 : x1;

                var xx4 = _xx + ps;

                var _yy = void 0;

                var yy2 = void 0; // 整个和borderLeft重叠

                if (xx4 < x2) {
                  if (isLast) {
                    points.push([x1, y1, x4, y1, x3, y2, x2, y2]);
                  } else {
                    _yy = y1 + (_xx - x1) * Math.tan(deg1);
                    yy2 = y1 + (xx4 - x1) * Math.tan(deg1);
                    points.push([_xx, y1, xx4, y1, xx4, yy2, _xx, _yy]);
                  }
                } // 整个和borderRight重叠
                else if (_xx > x3) {
                    _yy = y1 + (x4 - _xx) * Math.tan(deg2);
                    yy2 = y1 + (x4 - xx4) * Math.tan(deg2);

                    if (isLast) {
                      points.push([_xx, y1, x4, y1, _xx, _yy]);
                    } else {
                      points.push([_xx, y1, xx4, y1, xx4, yy2, _xx, _yy]);
                    }
                  } // 不被整个重叠的情况再细分
                  else {
                      // 上部分和borderLeft重叠
                      if (_xx < x2) {
                        _yy = y1 + (_xx - x1) * Math.tan(deg1);

                        if (isLast) {
                          points.push([_xx, y1, x4, y1, x3, y2, x2, y2, _xx, _yy]);
                        } else {
                          // 下部分和borderRight重叠
                          if (xx4 > x3) {
                            points.push([_xx, y1, xx4, y1, x3, y2, x2, y2, _xx, _yy]);
                          } // 下部独立
                          else {
                              points.push([_xx, y1, xx4, y1, xx4, y2, x2, y2, _xx, _yy]);
                            }
                        }
                      } // 下部分和borderRight重叠
                      else if (xx4 > x3) {
                          _yy = y1 + (x4 - xx4) * Math.tan(deg2); // 上部分和borderLeft重叠

                          if (_xx < x2) {
                            if (isLast) {
                              points.push([_xx, y1, x4, y1, x3, y2, x2, y2, _xx, _yy]);
                            } else {
                              points.push([_xx, y1, xx4, y1, xx4, _yy, x3, y2, x2, y2, _xx, _yy]);
                            }
                          } // 上部独立
                          else {
                              if (isLast) {
                                points.push([_xx, y1, x4, y1, x3, y2, _xx, y2]);
                              } else {
                                points.push([_xx, y1, xx4, y1, xx4, _yy, x3, y2, _xx, y2]);
                              }
                            }
                        } // 完全独立
                        else {
                            if (isLast) {
                              points.push([_xx, y1, x4, y1, x3, y2, _xx, y2]);
                            } else {
                              points.push([_xx, y1, xx4, y1, xx4, y2, _xx, y2]);
                            }
                          }
                    }
              }
            }
          } else {
            points.push([x1, y1, x4, y1, x3, y2, x2, y2]);
          }

          renderBorder(renderMode, points, btc, ctx, this);
        }

        if (brw > 0 && brc !== 'transparent') {
          var _points = [];

          if (['dashed', 'dotted'].indexOf(brs) > -1) {
            // 寻找一个合适的虚线线段长度和之间空白边距长度
            var _getDashed2 = getDashed(brs, y1, y2, y3, y4, brw),
                _n = _getDashed2.n,
                _ps = _getDashed2.ps,
                _pd = _getDashed2.pd;

            if (_n <= 1) {
              _points.push([x3, y2, x4, y1, x4, y4, x3, y3]);
            } else {
              var _deg = Math.atan(brw / btw);

              var _deg2 = Math.atan(brw / bbw);

              for (var _i7 = 0; _i7 < _n; _i7++) {
                // 最后一个可能没有到底，延长之
                var _isLast = _i7 === _n - 1;

                var _yy2 = _i7 ? y1 + _ps * _i7 + _pd * _i7 : y1;

                var yy4 = _yy2 + _ps;

                var _xx2 = void 0;

                var xx2 = void 0; // 整个和borderTop重叠

                if (yy4 < y2) {
                  if (_isLast) {
                    _points.push([x3, y2, x4, y1, x4, y4, x3, y3]);
                  } else {
                    _xx2 = x4 - (yy4 - y1) * Math.tan(_deg);
                    xx2 = x4 - (_yy2 - y1) * Math.tan(_deg);

                    _points.push([_xx2, yy4, xx2, _yy2, x4, _yy2, x4, yy4]);
                  }
                } // 整个和borderBottom重叠
                else if (_yy2 > y3) {
                    _xx2 = x3 + (_yy2 - y3) * Math.tan(_deg2);
                    xx2 = x3 + (yy4 - y3) * Math.tan(_deg2);

                    if (_isLast) {
                      _points.push([_xx2, _yy2, x4, _yy2, x4, y4]);
                    } else {
                      _points.push([_xx2, _yy2, x4, _yy2, x4, yy4, xx2, yy4]);
                    }
                  } // 不被整个重叠的情况再细分
                  else {
                      // 上部分和borderTop重叠
                      if (_yy2 < y2) {
                        _xx2 = x3 + (y2 - _yy2) * Math.tan(_deg);

                        if (_isLast) {
                          _points.push([x3, y2, _xx2, _yy2, x4, _yy2, x4, y4, x3, y4]);
                        } else {
                          // 下部分和borderBottom重叠
                          if (yy4 > y3) {
                            _points.push([x3, y2, _xx2, _yy2, x4, _yy2, x4, yy4, _xx2, yy4, x3, y3]);
                          } // 下部独立
                          else {
                              _points.push([x3, y2, _xx2, _yy2, x4, _yy2, x4, yy4, x3, yy4]);
                            }
                        }
                      } // 下部分和borderBottom重叠
                      else if (yy4 > y3) {
                          _xx2 = x3 + (yy4 - y3) * Math.tan(_deg2); // 上部分和borderTop重叠

                          if (_yy2 < y2) {
                            if (_isLast) {
                              _points.push([x3, y2, _xx2, _yy2, x4, _yy2, x4, y4, x3, y3]);
                            } else {
                              _points.push([x3, y2, _xx2, _yy2, x4, _yy2, x4, yy4, _xx2, yy4, x3, y3]);
                            }
                          } // 上部独立
                          else {
                              if (_isLast) {
                                _points.push([x3, _yy2, x4, _yy2, x4, y4, x3, y3]);
                              } else {
                                _points.push([x3, _yy2, x4, _yy2, x4, yy4, _xx2, yy4, x3, y3]);
                              }
                            }
                        } // 完全独立
                        else {
                            if (_isLast) {
                              _points.push([x3, _yy2, x4, _yy2, x4, y4, x3, y3]);
                            } else {
                              _points.push([x3, _yy2, x4, _yy2, x4, yy4, x3, yy4]);
                            }
                          }
                    }
              }
            }
          } else {
            _points.push([x3, y2, x4, y1, x4, y4, x3, y3]);
          }

          renderBorder(renderMode, _points, brc, ctx, this);
        }

        if (bbw > 0 && bbc !== 'transparent') {
          var _points2 = []; // 寻找一个合适的虚线线段长度和之间空白边距长度

          if (['dashed', 'dotted'].indexOf(bbs) > -1) {
            // 寻找一个合适的虚线线段长度和之间空白边距长度
            var _getDashed3 = getDashed(bbs, x1, x2, x3, x4, bbw),
                _n2 = _getDashed3.n,
                _ps2 = _getDashed3.ps,
                _pd2 = _getDashed3.pd;

            var _deg3 = Math.atan(bbw / blw);

            var _deg4 = Math.atan(bbw / brw);

            for (var _i8 = 0; _i8 < _n2; _i8++) {
              // 最后一个可能没有到底，延长之
              var _isLast2 = _i8 === _n2 - 1;

              var _xx3 = _i8 ? x1 + _ps2 * _i8 + _pd2 * _i8 : x1;

              var _xx4 = _xx3 + _ps2;

              var _yy3 = void 0;

              var _yy4 = void 0; // 整个和borderLeft重叠


              if (_xx4 < x2) {
                if (_isLast2) {
                  _points2.push([x1, y4, x2, y3, x3, y3, x4, y4]);
                } else {
                  _yy3 = y4 - (_xx3 - x1) * Math.tan(_deg3);
                  _yy4 = y4 - (_xx4 - x1) * Math.tan(_deg3);

                  _points2.push([_xx3, _yy3, _xx4, _yy4, _xx4, y4, _xx3, y4]);
                }
              } // 整个和borderRight重叠
              else if (_xx3 > x3) {
                  _yy3 = y4 - (_xx3 - x1) * Math.tan(_deg4);
                  _yy4 = y4 - (_xx4 - x1) * Math.tan(_deg4);

                  if (_isLast2) {
                    _points2.push([_xx3, _yy3, x4, y4, _xx3, y4]);
                  } else {
                    _points2.push([_xx3, _yy3, _xx4, _yy4, _xx4, y4, _xx3, y4]);
                  }
                } // 不被整个重叠的情况再细分
                else {
                    // 上部分和borderLeft重叠
                    if (_xx3 < x2) {
                      _yy3 = y3 + (_xx3 - x1) * Math.tan(_deg3);

                      if (_isLast2) {
                        _points2.push([_xx3, _yy3, x2, y3, x3, y3, x4, y4, _xx3, y4]);
                      } else {
                        // 下部分和borderRight重叠
                        if (_xx4 > x3) {
                          _points2.push([_xx3, _yy3, x2, y3, x3, y3, _xx4, y4, _xx3, y4]);
                        } // 下部独立
                        else {
                            _points2.push([_xx3, _yy3, x2, y3, _xx4, y3, _xx4, y4, _xx3, y4]);
                          }
                      }
                    } // 下部分和borderRight重叠
                    else if (_xx4 > x3) {
                        _yy3 = y4 - (x4 - _xx4) * Math.tan(_deg4); // 上部分和borderLeft重叠

                        if (_xx3 < x2) {
                          if (_isLast2) {
                            _points2.push([_xx3, _yy3, x3, y3, x4, y4, _xx3, y4]);
                          } else {
                            _points2.push([_xx3, _yy3, x3, y3, _xx4, _yy3, _xx4, y4, _xx3, y4]);
                          }
                        } // 上部独立
                        else {
                            if (_isLast2) {
                              _points2.push([_xx3, y3, x3, y3, x4, y4, _xx3, y4]);
                            } else {
                              _points2.push([_xx3, y3, x3, y3, _xx4, _yy3, _xx4, y4, _xx3, y4]);
                            }
                          }
                      } // 完全独立
                      else {
                          if (_isLast2) {
                            _points2.push([_xx3, y3, x3, y3, x4, y4, _xx3, y4]);
                          } else {
                            _points2.push([_xx3, y3, _xx4, y3, _xx4, y4, _xx3, y4]);
                          }
                        }
                  }
            }
          } else {
            _points2.push([x1, y4, x2, y3, x3, y3, x4, y4]);
          }

          renderBorder(renderMode, _points2, bbc, ctx, this);
        }

        if (blw > 0 && blc !== 'transparent') {
          var _points3 = [];

          if (['dashed', 'dotted'].indexOf(bls) > -1) {
            // 寻找一个合适的虚线线段长度和之间空白边距长度
            var _getDashed4 = getDashed(bls, y1, y2, y3, y4, blw),
                _n3 = _getDashed4.n,
                _ps3 = _getDashed4.ps,
                _pd3 = _getDashed4.pd;

            if (_n3 <= 1) {
              _points3.push([x1, y1, x2, y2, x2, y3, x1, y4]);
            } else {
              var _deg5 = Math.atan(blw / btw);

              var _deg6 = Math.atan(blw / bbw);

              for (var _i9 = 0; _i9 < _n3; _i9++) {
                // 最后一个可能没有到底，延长之
                var _isLast3 = _i9 === _n3 - 1;

                var _yy5 = _i9 ? y1 + _ps3 * _i9 + _pd3 * _i9 : y1;

                var _yy6 = _yy5 + _ps3;

                var _xx5 = void 0;

                var _xx6 = void 0; // 整个和borderTop重叠


                if (_yy6 < y2) {
                  if (_isLast3) {
                    _points3.push([x1, y1, x2, y2, x2, y3, x1, y4]);
                  } else {
                    _xx5 = x1 + (_yy5 - y1) * Math.tan(_deg5);
                    _xx6 = x1 + (_yy6 - y1) * Math.tan(_deg5);

                    _points3.push([x1, _yy5, _xx5, _yy5, _xx6, _yy6, x1, _yy6]);
                  }
                } // 整个和borderBottom重叠
                else if (_yy5 > y3) {
                    _xx5 = x1 + (y4 - _yy5) * Math.tan(_deg6);
                    _xx6 = x1 + (y4 - _yy6) * Math.tan(_deg6);

                    if (_isLast3) {
                      _points3.push([x1, _yy5, _xx5, _yy5, x1, y4]);
                    } else {
                      _points3.push([x1, _yy5, _xx5, _yy5, _xx6, _yy6, x1, _yy6]);
                    }
                  } // 不被整个重叠的情况再细分
                  else {
                      // 上部分和borderTop重叠
                      if (_yy5 < y2) {
                        _xx5 = x1 + (_yy5 - y1) * Math.tan(_deg5);

                        if (_isLast3) {
                          _points3.push([x1, _yy5, _xx5, _yy5, x2, y2, x2, y3, x1, y4]);
                        } else {
                          // 下部分和borderBottom重叠
                          if (_yy6 > y3) {
                            _points3.push([x1, _yy5, _xx5, _yy5, x2, y2, x2, y3, _xx5, _yy6, x1, _yy6]);
                          } // 下部独立
                          else {
                              _points3.push([x1, _yy5, _xx5, _yy5, x2, y2, x2, _yy6, x1, _yy6]);
                            }
                        }
                      } // 下部分和borderBottom重叠
                      else if (_yy6 > y3) {
                          _xx5 = x1 + (y4 - _yy6) * Math.tan(_deg6); // 上部分和borderTop重叠

                          if (_yy5 < y2) {
                            if (_isLast3) {
                              _points3.push([x1, _yy5, _xx5, _yy5, x2, y2, x2, y3, x1, y4]);
                            } else {
                              _points3.push([x1, _yy5, _xx5, _yy5, x2, y2, x2, y3, _xx5, _yy6, x1, _yy6]);
                            }
                          } // 上部独立
                          else {
                              if (_isLast3) {
                                _points3.push([x1, _yy5, x2, _yy5, x2, y3, x1, y4]);
                              } else {
                                _points3.push([x1, _yy5, x2, _yy5, x2, y3, _xx5, _yy6, x1, _yy6]);
                              }
                            }
                        } // 完全独立
                        else {
                            if (_isLast3) {
                              _points3.push([x1, _yy5, x2, _yy5, x2, y3, x1, y4]);
                            } else {
                              _points3.push([x1, _yy5, x2, _yy5, x2, _yy6, x1, _yy6]);
                            }
                          }
                    }
              }
            }
          } else {
            _points3.push([x1, y1, x2, y2, x2, y3, x1, y4]);
          }

          renderBorder(renderMode, _points3, blc, ctx, this);
        }
      } // 先查找到注册了事件的节点，再捕获冒泡判断增加性能

    }, {
      key: "__emitEvent",
      value: function __emitEvent(e, force, first) {
        var type = e.event.type,
            x = e.x,
            y = e.y,
            covers = e.covers;
        var listener = this.listener,
            children = this.children,
            style = this.style,
            outerWidth = this.outerWidth,
            outerHeight = this.outerHeight,
            matrix = this.matrix;

        if (style.display === 'none') {
          return;
        }

        var cb;

        if (listener.hasOwnProperty(type)) {
          cb = listener[type];
        } // touchend之类强制的直接通知即可


        if (force) {
          children.forEach(function (child) {
            if (child instanceof Xom && !child.isGeom()) {
              child.__emitEvent(e, force, first);
            }
          });
          cb && cb(e);
          return;
        }

        var childWillResponse;

        if (!this.isGeom()) {
          // 先响应absolute/relative高优先级，从后往前遮挡顺序
          for (var i = children.length - 1; i >= 0; i--) {
            var child = children[i];

            if (child instanceof Xom && ['absolute', 'relative'].indexOf(child.style.position) > -1) {
              if (child.__emitEvent(e)) {
                childWillResponse = true;
              }
            }
          } // 再看普通流，从后往前遮挡顺序


          for (var _i10 = children.length - 1; _i10 >= 0; _i10--) {
            var _child = children[_i10];

            if (_child instanceof Xom && ['absolute', 'relative'].indexOf(_child.style.position) === -1) {
              if (_child.__emitEvent(e)) {
                childWillResponse = true;
              }
            }
          }
        } // child触发则parent一定触发，否则判断事件坐标是否在节点内且未被遮挡


        if (childWillResponse || this.willResponseEvent(e)) {
          // 根据是否matrix存入遮罩坐标
          covers.push({
            x: x,
            y: y,
            w: outerWidth,
            h: outerHeight,
            matrix: matrix
          });

          if (!e.target) {
            e.target = this;
          }

          cb && cb(e);
        }
      }
    }, {
      key: "willResponseEvent",
      value: function willResponseEvent(e) {
        var x = e.x,
            y = e.y,
            covers = e.covers;
        var rx = this.rx,
            ry = this.ry,
            outerWidth = this.outerWidth,
            outerHeight = this.outerHeight,
            matrix = this.matrix;
        var inThis = tf.pointInQuadrilateral(x - rx, y - ry, 0, 0, outerWidth, 0, 0, outerHeight, outerWidth, outerHeight, matrix);

        if (inThis) {
          // 不能被遮挡
          for (var i = 0, len = covers.length; i < len; i++) {
            var _covers$i = covers[i],
                x2 = _covers$i.x,
                y2 = _covers$i.y,
                w = _covers$i.w,
                h = _covers$i.h,
                _matrix = _covers$i.matrix;

            if (tf.pointInQuadrilateral(x - rx, y - ry, x2 - rx, y2 - ry, x2 - rx + w, y2 - ry, x2 - rx, y2 - ry + h, x2 - rx + w, y2 - ry + h, _matrix)) {
              return;
            }
          }

          if (!e.target) {
            e.target = this;
          }

          return true;
        }
      }
    }, {
      key: "addBorder",
      value: function addBorder(props) {
        this.virtualDom.bb.push({
          type: 'item',
          tagName: 'path',
          props: props
        });
      }
    }, {
      key: "addBackground",
      value: function addBackground(props) {
        this.virtualDom.bb.push({
          type: 'item',
          tagName: 'rect',
          props: props
        });
      }
    }, {
      key: "addTransform",
      value: function addTransform(props) {
        this.virtualDom.transform.push(props);
      }
    }, {
      key: "tagName",
      get: function get() {
        return this.__tagName;
      }
    }, {
      key: "mtw",
      get: function get() {
        return this.__mtw;
      }
    }, {
      key: "mrw",
      get: function get() {
        return this.__mrw;
      }
    }, {
      key: "mbw",
      get: function get() {
        return this.__mbw;
      }
    }, {
      key: "mlw",
      get: function get() {
        return this.__mlw;
      }
    }, {
      key: "ptw",
      get: function get() {
        return this.__ptw;
      }
    }, {
      key: "prw",
      get: function get() {
        return this.__prw;
      }
    }, {
      key: "pbw",
      get: function get() {
        return this.__pbw;
      }
    }, {
      key: "plw",
      get: function get() {
        return this.__plw;
      }
    }, {
      key: "outerWidth",
      get: function get() {
        var mlw = this.mlw,
            mrw = this.mrw,
            plw = this.plw,
            prw = this.prw,
            _this$style2 = this.style,
            borderLeftWidth = _this$style2.borderLeftWidth,
            borderRightWidth = _this$style2.borderRightWidth;
        return this.width + borderLeftWidth.value + borderRightWidth.value + mlw + mrw + plw + prw;
      }
    }, {
      key: "outerHeight",
      get: function get() {
        var mtw = this.mtw,
            mbw = this.mbw,
            ptw = this.ptw,
            pbw = this.pbw,
            _this$style3 = this.style,
            borderTopWidth = _this$style3.borderTopWidth,
            borderBottomWidth = _this$style3.borderBottomWidth;
        return this.height + borderTopWidth.value + borderBottomWidth.value + mtw + mbw + ptw + pbw;
      }
    }, {
      key: "listener",
      get: function get() {
        return this.__listener;
      }
    }, {
      key: "renderMode",
      get: function get() {
        return this.__renderMode;
      }
    }]);

    return Xom;
  }(Node);

  var font = {
    arial: {
      lhr: 1.14990234375,
      // 默认line-height ratio，(67+1854+434)/2048
      car: 1.1171875,
      // content-area ratio，(1854+434)/2048
      blr: 0.9052734375,
      // base-line ratio，1854/2048
      mdr: 0.64599609375,
      // middle ratio，(1854-1062/2)/2048
      lgr: 0.03271484375 // line-gap ratio，67/2048

    }
  };

  var RESET = {
    position: 'static',
    display: 'block',
    borderSizing: 'content-box',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fontSize: 16,
    fontFamily: 'arial',
    color: '#000',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: '#000',
    borderRightColor: '#000',
    borderBottomColor: '#000',
    borderLeftColor: '#000',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    verticalAlign: 'baseline',
    width: 'auto',
    height: 'auto',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    textAlign: 'left',
    visibility: 'visible',
    transformOrigin: 'center',
    fill: '#000',
    stroke: '#000',
    strokeWidth: 0,
    strokeDasharray: []
  };
  var reset = [];
  Object.keys(RESET).forEach(function (k) {
    var v = RESET[k];
    reset.push({
      k: k,
      v: v
    });
  });

  function parserOneBorder(style, direction) {
    var key = "border".concat(direction);

    if (!style[key]) {
      return;
    }

    var w = /\b\d+px\b/i.exec(style[key]);

    if (w) {
      style[key + 'Width'] = w[0];
    }

    var s = /\b(solid|dashed|dotted)\b/i.exec(style[key]);

    if (s) {
      style[key + 'Style'] = s[1];
    }

    var c = /#[0-9a-f]{3,6}/i.exec(style[key]);

    if (c && [4, 7].indexOf(c[0].length) > -1) {
      style[key + 'Color'] = c[0];
    } else if (/\btransparent\b/i.test(style[key])) {
      style[key + 'Color'] = 'transparent';
    } else {
      c = /rgba?\(.+\)/i.exec(style[key]);

      if (c) {
        style[key + 'Color'] = c[0];
      }
    }
  }

  function calUnit(obj, k, v) {
    if (v === 'auto') {
      obj[k] = {
        unit: unit.AUTO
      };
    } else if (/px$/.test(v)) {
      v = parseFloat(v) || 0;
      obj[k] = {
        value: v,
        unit: unit.PX
      };
    } else if (/%$/.test(v)) {
      // border不支持百分比
      if (k.indexOf('border') === 0) {
        obj[k] = {
          value: 0,
          unit: unit.PX
        };
      } else {
        v = parseFloat(v) || 0;
        obj[k] = {
          value: v,
          unit: unit.PERCENT
        };
      }
    } else {
      v = parseFloat(v) || 0;
      obj[k] = {
        value: v,
        unit: unit.PX
      };
    }

    return obj;
  }

  function normalize$1(style) {
    // 默认reset
    reset.forEach(function (item) {
      if (!style.hasOwnProperty(item.k)) {
        style[item.k] = item.v;
      }
    });
    var temp = style.background; // 处理缩写

    if (temp) {
      // 优先gradient，没有再考虑颜色
      var gradient = /\b(\w+)-gradient\((.+)\)/.exec(temp);

      if (gradient) {
        style.backgroundGradient = {
          k: gradient[1],
          v: gradient[2].split(/\s*,\s*/)
        };
      } else {
        var bgc = /#[0-9a-f]{3,6}/i.exec(temp);

        if (bgc && [4, 7].indexOf(bgc[0].length) > -1) {
          style.backgroundColor = bgc[0];
        } else {
          bgc = /rgba?\(.+\)/i.exec(temp);

          if (bgc) {
            style.backgroundColor = bgc[0];
          }
        }
      }
    }

    temp = style.flex;

    if (temp) {
      if (temp === 'none') {
        style.flexGrow = 0;
        style.flexShrink = 0;
        style.flexBasis = 'auto';
      } else if (temp === 'auto') {
        style.flexGrow = 1;
        style.flexShrink = 1;
        style.flexBasis = 'auto';
      } else if (/^[\d.]+$/.test(temp)) {
        style.flexGrow = parseFloat(temp);
        style.flexShrink = 1;
        style.flexBasis = 0;
      } else if (/^[\d.]+px$/.test(temp)) ; else if (/^[\d.]+%$/.test(temp)) ; else {
        style.flexGrow = 0;
        style.flexShrink = 1;
        style.flexBasis = 'auto';
      }
    }

    temp = style.border;

    if (temp) {
      style.borderTop = style.borderRight = style.borderBottom = style.borderLeft = temp;
    }

    temp = style.margin;

    if (temp) {
      var match = temp.toString().match(/(-?[\d.]+(px|%)?)|(auto)/ig);

      if (match) {
        if (match.length === 1) {
          match[3] = match[2] = match[1] = match[0];
        } else if (match.length === 2) {
          match[2] = match[0];
          match[3] = match[1];
        } else if (match.length === 3) {
          match[3] = match[1];
        }

        style.marginTop = match[0];
        style.marginRight = match[1];
        style.marginBottom = match[2];
        style.marginLeft = match[3];
      }
    }

    temp = style.padding;

    if (temp) {
      var _match = temp.toString().match(/(-?[\d.]+(px|%)?)|(auto)/ig);

      if (_match) {
        if (_match.length === 1) {
          _match[3] = _match[2] = _match[1] = _match[0];
        } else if (_match.length === 2) {
          _match[2] = _match[0];
          _match[3] = _match[1];
        } else if (_match.length === 3) {
          _match[3] = _match[1];
        }

        style.paddingTop = _match[0];
        style.paddingRight = _match[1];
        style.paddingBottom = _match[2];
        style.paddingLeft = _match[3];
      }
    }

    temp = style.borderRadius;

    if (temp) {
      style.borderTopRightRadius = style.borderTopLeftRadius = style.borderBottomRightRadius = style.borderBottomLeftRadius = temp;
    }

    temp = style.transform;

    if (temp) {
      var _match2 = temp.toString().match(/\w+\(.+?\)/g);

      if (_match2) {
        var transform = style.transform = [];

        _match2.forEach(function (item) {
          var i = item.indexOf('(');
          var k = item.slice(0, i);
          var v = item.slice(i + 1, item.length - 1);

          if (k === 'matrix') {
            var arr = v.split(/\s*,\s*/);
            arr = arr.map(function (item) {
              return parseFloat(item);
            });

            if (arr.length > 6) {
              arr = arr.slice(0, 6);
            } else if (arr.length < 6) {
              while (arr.length < 6) {
                arr.push(0);
              }
            }

            transform.push(['matrix', arr]);
          } else if (k === 'translateX') {
            var _arr = ['translateX', v];
            transform.push(calUnit(_arr, 1, v));
          } else if (k === 'translateY') {
            var _arr2 = ['translateY', v];
            transform.push(calUnit(_arr2, 1, v));
          } else if (k === 'translate') {
            var _arr3 = v.split(/\s*,\s*/);

            var arr1 = ['translateX', _arr3[0]];
            var arr2 = ['translateY', _arr3[1]];
            transform.push(calUnit(arr1, 1, v));
            transform.push(calUnit(arr2, 1, v));
          } else if (k === 'scaleX') {
            transform.push(['scaleX', parseFloat(v) || 0]);
          } else if (k === 'scaleY') {
            transform.push(['scaleY', parseFloat(v) || 0]);
          } else if (k === 'scale') {
            var _arr4 = v.split(/\s*,\s*/);

            transform.push(['scaleX', parseFloat(_arr4[0]) || 0]);
            transform.push(['scaleX', parseFloat(_arr4[1]) || 0]);
          } else if (k === 'rotateZ' || k === 'rotate') {
            transform.push(['rotate', parseFloat(v) || 0]);
          } else if (k === 'skewX') {
            transform.push(['skewX', parseFloat(v) || 0]);
          } else if (k === 'skewY') {
            transform.push(['skewY', parseFloat(v) || 0]);
          } else if (k === 'skew') {
            var _arr5 = v.split(/\s*,\s*/);

            transform.push(['skewX', parseFloat(_arr5[0]) || 0]);
            transform.push(['skewY', parseFloat(_arr5[1]) || 0]);
          }
        });
      }
    }

    temp = style.transformOrigin;

    if (temp) {
      var _match3 = temp.toString().match(/(-?[\d.]+(px|%)?)|(left|top|right|bottom|center)/ig);

      if (_match3) {
        if (_match3.length === 1) {
          _match3[1] = _match3[0];
        }

        var tfo = [];

        for (var i = 0; i < 2; i++) {
          var item = _match3[i];

          if (/px$/.test(item)) {
            tfo.push({
              value: parseFloat(item),
              unit: unit.PX
            });
          } else if (/%$/.test(item)) {
            tfo.push({
              value: parseFloat(item),
              unit: unit.PERCENT
            });
          } else {
            tfo.push({
              value: item,
              unit: unit.POSITION
            });
          }
        }

        style.transformOrigin = tfo;
      }
    }

    parserOneBorder(style, 'Top');
    parserOneBorder(style, 'Right');
    parserOneBorder(style, 'Bottom');
    parserOneBorder(style, 'Left'); // 转化不同单位值为对象标准化

    ['marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'top', 'right', 'bottom', 'left', 'width', 'height', 'flexBasis'].forEach(function (k) {
      var v = style[k];
      calUnit(style, k, v);
    }); // 计算lineHeight为px值，最小范围

    var lineHeight = style.lineHeight;

    if (lineHeight === 'normal') {
      lineHeight = {
        value: style.fontSize * font.arial.lhr,
        unit: unit.PX
      };
    } else if (/px$/.test(lineHeight)) {
      lineHeight = parseFloat(lineHeight);
      lineHeight = {
        value: Math.max(style.fontSize, lineHeight),
        unit: unit.PX
      };
    } // 纯数字比例
    else {
        lineHeight = parseFloat(lineHeight) || 'normal'; // 非法数字

        if (lineHeight === 'normal') {
          lineHeight = {
            value: style.fontSize * font.arial.lhr,
            unit: unit.PX
          };
        } else {
          lineHeight = {
            value: lineHeight * style.fontSize,
            unit: unit.PX
          };
        }
      }

    style.lineHeight = lineHeight;
  }

  function setFontStyle(style) {
    var fontStyle = style.fontStyle,
        fontWeight = style.fontWeight,
        fontSize = style.fontSize,
        fontFamily = style.fontFamily;
    return "".concat(fontStyle, " ").concat(fontWeight, " ").concat(fontSize, "px/").concat(fontSize, "px ").concat(fontFamily);
  }

  function getBaseLine(style) {
    var normal = style.fontSize * font.arial.lhr;
    return (style.lineHeight.value - normal) * 0.5 + style.fontSize * font.arial.blr;
  }

  var css = {
    normalize: normalize$1,
    setFontStyle: setFontStyle,
    getBaseLine: getBaseLine
  };

  var LineBox =
  /*#__PURE__*/
  function () {
    function LineBox(parent, x, y, w, content, style) {
      _classCallCheck(this, LineBox);

      this.__parent = parent;
      this.__x = x;
      this.__y = y;
      this.__width = w;
      this.__content = content;
      this.__style = style;
      this.__virtualDom = {};
    }

    _createClass(LineBox, [{
      key: "render",
      value: function render(renderMode, ctx) {
        var style = this.style,
            content = this.content,
            x = this.x,
            y = this.y,
            _this$parent = this.parent,
            ox = _this$parent.ox,
            oy = _this$parent.oy;
        y += css.getBaseLine(style);
        x += ox;
        y += oy;

        if (renderMode === mode.CANVAS) {
          ctx.fillText(content, x, y);
        } else if (renderMode === mode.SVG) {
          this.__virtualDom = {
            type: 'item',
            tagName: 'text',
            props: [['x', x], ['y', y], ['fill', style.color], ['font-size', "".concat(style.fontSize, "px")]],
            content: content
          };
        }
      }
    }, {
      key: "__offsetX",
      value: function __offsetX(diff) {
        this.__x += diff;
      }
    }, {
      key: "__offsetY",
      value: function __offsetY(diff) {
        this.__y += diff;
      }
    }, {
      key: "x",
      get: function get() {
        return this.__x;
      }
    }, {
      key: "y",
      get: function get() {
        return this.__y;
      }
    }, {
      key: "width",
      get: function get() {
        return this.__width;
      }
    }, {
      key: "content",
      get: function get() {
        return this.__content;
      }
    }, {
      key: "style",
      get: function get() {
        return this.__style;
      }
    }, {
      key: "baseLine",
      get: function get() {
        return css.getBaseLine(this.style);
      }
    }, {
      key: "virtualDom",
      get: function get() {
        return this.__virtualDom;
      }
    }, {
      key: "parent",
      get: function get() {
        return this.__parent;
      }
    }]);

    return LineBox;
  }();

  var CHAR_WIDTH_CACHE = {};

  var Text =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Text, _Node);

    function Text(content) {
      var _this;

      _classCallCheck(this, Text);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this));
      _this.__content = content.toString();
      _this.__lineBoxes = [];
      _this.__charWidthList = [];
      _this.__charWidth = 0;
      _this.__textWidth = 0;
      return _this;
    } // 预先计算每个字的宽度


    _createClass(Text, [{
      key: "__measure",
      value: function __measure() {
        this.__charWidthList = [];
        var ctx = this.ctx,
            content = this.content,
            style = this.style,
            charWidthList = this.charWidthList,
            renderMode = this.renderMode;

        if (renderMode === mode.CANVAS) {
          ctx.font = css.setFontStyle(style);
        }

        var cache = CHAR_WIDTH_CACHE[style.fontSize] = CHAR_WIDTH_CACHE[style.fontSize] || {};
        var length = content.length;
        var sum = 0;

        for (var i = 0; i < length; i++) {
          var _char = content.charAt(i);

          var mw = void 0;

          if (cache.hasOwnProperty(_char)) {
            mw = cache[_char];
          } else if (renderMode === mode.CANVAS) {
            mw = cache[_char] = ctx.measureText(_char).width;
          } else if (renderMode === mode.SVG) {
            mw = cache[_char] = mode.measure(_char, style);
          }

          charWidthList.push(mw);
          sum += mw;
          this.__charWidth = Math.max(this.charWidth, mw);
        }

        this.__textWidth = sum;
      }
    }, {
      key: "__layout",
      value: function __layout(data, isVirtual) {
        var _this2 = this;

        var x = data.x,
            y = data.y,
            w = data.w,
            h = data.h;
        this.__x = x;
        this.__y = y;
        var maxX = x;
        var ctx = this.ctx,
            content = this.content,
            style = this.style,
            lineBoxes = this.lineBoxes,
            charWidthList = this.charWidthList,
            renderMode = this.renderMode; // 顺序尝试分割字符串为lineBox，形成多行

        var begin = 0;
        var i = 0;
        var count = 0;
        var length = content.length;

        while (i < length) {
          count += charWidthList[i];

          if (count === w) {
            var lineBox = new LineBox(this, x, y, count, content.slice(begin, i + 1), style);
            lineBoxes.push(lineBox);
            maxX = Math.max(maxX, x + count);
            y += this.style.lineHeight.value;
            begin = i + 1;
            i = begin + 1;
            count = 0;
          } else if (count > w) {
            // 宽度不足时无法跳出循环，至少也要塞个字符形成一行
            if (i === begin) {
              i = begin + 1;
            }

            var _lineBox = new LineBox(this, x, y, count - charWidthList[i], content.slice(begin, i), style);

            lineBoxes.push(_lineBox);
            maxX = Math.max(maxX, x + count - charWidthList[i]);
            y += this.style.lineHeight.value;
            begin = i;
            i = i + 1;
            count = 0;
          } else {
            i++;
          }
        }

        if (begin < length && begin < i) {
          count = 0;

          for (i = begin; i < length; i++) {
            count += charWidthList[i];
          }

          var _lineBox2 = new LineBox(this, x, y, count, content.slice(begin, length), style);

          lineBoxes.push(_lineBox2);
          maxX = Math.max(maxX, x + count);
          y += style.lineHeight.value;
        }

        this.__width = maxX - x;
        this.__height = y - data.y;

        if (isVirtual) {
          this.__lineBoxes = [];
        } else {
          var textAlign = style.textAlign;

          if (['center', 'right'].indexOf(textAlign) > -1) {
            lineBoxes.forEach(function (lineBox) {
              var diff = _this2.__width - lineBox.width;

              if (diff > 0) {
                lineBox.__offsetX(textAlign === 'center' ? diff * 0.5 : diff);
              }
            });
          }
        }
      }
    }, {
      key: "render",
      value: function render(renderMode) {
        var ctx = this.ctx,
            style = this.style;

        if (renderMode === mode.CANVAS) {
          ctx.font = css.setFontStyle(style);
          ctx.fillStyle = style.color;
        }

        this.lineBoxes.forEach(function (item) {
          item.render(renderMode, ctx);
        });

        if (renderMode === mode.SVG) {
          this.__virtualDom = {
            type: 'text',
            children: this.lineBoxes.map(function (lineBox) {
              return lineBox.virtualDom;
            })
          };
        }
      }
    }, {
      key: "__tryLayInline",
      value: function __tryLayInline(w) {
        return w - this.textWidth;
      }
    }, {
      key: "__calMaxAndMinWidth",
      value: function __calMaxAndMinWidth() {
        var n = 0;
        this.charWidthList.forEach(function (item) {
          n = Math.max(n, item);
        });
        return {
          max: this.textWidth,
          min: n
        };
      }
    }, {
      key: "content",
      get: function get() {
        return this.__content;
      },
      set: function set(v) {
        this.__content = v;
      }
    }, {
      key: "lineBoxes",
      get: function get() {
        return this.__lineBoxes;
      }
    }, {
      key: "charWidthList",
      get: function get() {
        return this.__charWidthList;
      }
    }, {
      key: "charWidth",
      get: function get() {
        return this.__charWidth;
      }
    }, {
      key: "textWidth",
      get: function get() {
        return this.__textWidth;
      }
    }, {
      key: "baseLine",
      get: function get() {
        var last = this.lineBoxes[this.lineBoxes.length - 1];
        return last.y - this.y + last.baseLine;
      }
    }, {
      key: "renderMode",
      get: function get() {
        return this.__renderMode;
      }
    }]);

    return Text;
  }(Node);

  var LineGroup =
  /*#__PURE__*/
  function () {
    function LineGroup(x, y) {
      _classCallCheck(this, LineGroup);

      this.__list = [];
      this.__x = x;
      this.__y = y;
      this.__baseLine = 0;
    }

    _createClass(LineGroup, [{
      key: "add",
      value: function add(item) {
        this.list.push(item);
      }
    }, {
      key: "__calBaseLine",
      value: function __calBaseLine() {
        var baseLine = 0;
        this.list.forEach(function (item) {
          baseLine = Math.max(baseLine, item.baseLine);
        });
        return baseLine;
      }
    }, {
      key: "verticalAlign",
      value: function verticalAlign() {
        var _this = this;

        this.__baseLine = this.__calBaseLine(); // 仅当有2个和以上时才需要vertical对齐调整

        if (this.list.length > 1) {
          this.list.forEach(function (item) {
            if (item.baseLine !== _this.baseLine) {
              item.__offsetY(_this.baseLine - item.baseLine);
            }
          });
        }
      }
    }, {
      key: "horizonAlign",
      value: function horizonAlign(diff) {
        this.list.forEach(function (item) {
          item.__offsetX(diff);
        });
      }
    }, {
      key: "list",
      get: function get() {
        return this.__list;
      }
    }, {
      key: "x",
      get: function get() {
        return this.__x;
      }
    }, {
      key: "y",
      get: function get() {
        return this.__y;
      }
    }, {
      key: "width",
      get: function get() {
        var width = 0;
        this.list.forEach(function (item) {
          width += item.width;
        });
        return width;
      }
    }, {
      key: "height",
      get: function get() {
        var height = 0;
        this.list.forEach(function (item) {
          height = Math.max(height, item.height);
        });
        return height;
      }
    }, {
      key: "baseLine",
      get: function get() {
        return this.__baseLine;
      }
    }, {
      key: "size",
      get: function get() {
        return this.__list.length;
      }
    }]);

    return LineGroup;
  }();

  var IMPLEMENT = {};

  var Geom =
  /*#__PURE__*/
  function (_Xom) {
    _inherits(Geom, _Xom);

    function Geom(tagName, props) {
      _classCallCheck(this, Geom);

      return _possibleConstructorReturn(this, _getPrototypeOf(Geom).call(this, tagName, props));
    }

    _createClass(Geom, [{
      key: "__initStyle",
      value: function __initStyle() {
        css.normalize(this.style);
      }
    }, {
      key: "__tryLayInline",
      value: function __tryLayInline(w, total) {
        // 无children，直接以style的width为宽度，不定义则为0
        var width = this.style.width;

        if (width.unit === unit.PX) {
          return w - width.value;
        } else if (width.unit === unit.PERCENT) {
          return w - total * width.value * 0.01;
        }

        return w;
      }
    }, {
      key: "__calAutoBasis",
      value: function __calAutoBasis(isDirectionRow, w, h) {
        var b = 0;
        var min = 0;
        var max = 0;
        var style = this.style; // 计算需考虑style的属性

        var width = style.width,
            height = style.height,
            borderTopWidth = style.borderTopWidth,
            borderRightWidth = style.borderRightWidth,
            borderBottomWidth = style.borderBottomWidth,
            borderLeftWidth = style.borderLeftWidth;
        var main = isDirectionRow ? width : height;

        if (main.unit !== unit.AUTO) {
          b = max += main.value;
        } // border也得计算在内


        if (isDirectionRow) {
          var _w = borderRightWidth.value + borderLeftWidth.value;

          b += _w;
          max += _w;
          min += _w;
        } else {
          var _h = borderTopWidth.value + borderBottomWidth.value;

          b += _h;
          max += _h;
          min += _h;
        }

        return {
          b: b,
          min: min,
          max: max
        };
      }
    }, {
      key: "__layoutBlock",
      value: function __layoutBlock(data) {
        var x = data.x,
            y = data.y,
            w = data.w,
            h = data.h;
        this.__x = x;
        this.__y = y;
        this.__width = w;
        var style = this.style;
        var width = style.width,
            height = style.height,
            borderTopWidth = style.borderTopWidth,
            borderRightWidth = style.borderRightWidth,
            borderBottomWidth = style.borderBottomWidth,
            borderLeftWidth = style.borderLeftWidth; // 除了auto外都是固定高度

        var fixedHeight;

        if (width && width.unit !== unit.AUTO) {
          switch (width.unit) {
            case unit.PX:
              w = width.value;
              break;
          }
        }

        if (height && height.unit !== unit.AUTO) {
          fixedHeight = true;

          switch (height.unit) {
            case unit.PX:
              h = height.value;
              break;

            case unit.PERCENT:
              h *= height.value * 0.01;
              break;
          }
        } // border影响x和y和尺寸


        x += borderLeftWidth.value;
        data.x = x;
        y += borderTopWidth.value;
        data.y = y;
        w -= borderLeftWidth.value + borderRightWidth.value;
        h -= borderTopWidth.value + borderBottomWidth.value;
        this.__width = w;
        this.__height = fixedHeight ? h : 0;
      }
    }, {
      key: "__layoutFlex",
      value: function __layoutFlex(data) {
        // 无children所以等同于block
        this.__layoutBlock(data);
      }
    }, {
      key: "__layoutInline",
      value: function __layoutInline(data) {
        var x = data.x,
            y = data.y,
            w = data.w,
            h = data.h;
        this.__x = x;
        this.__y = y;
        var style = this.style;
        var width = style.width,
            height = style.height,
            borderTopWidth = style.borderTopWidth,
            borderRightWidth = style.borderRightWidth,
            borderBottomWidth = style.borderBottomWidth,
            borderLeftWidth = style.borderLeftWidth; // 除了auto外都是固定高度

        var fixedWidth;
        var fixedHeight;

        if (width && width.unit !== unit.AUTO) {
          fixedWidth = true;

          switch (width.unit) {
            case unit.PX:
              w = width.value;
              break;
          }
        }

        if (height && height.unit !== unit.AUTO) {
          fixedHeight = true;

          switch (height.unit) {
            case unit.PX:
              h = height.value;
              break;
          }
        } // border影响x和y


        x += borderLeftWidth.value;
        data.x = x;
        y += borderTopWidth.value;
        data.y = y;
        w -= borderLeftWidth.value + borderRightWidth.value;
        h -= borderTopWidth.value + borderBottomWidth.value; // 元素的width不能超过父元素w

        this.__width = fixedWidth ? w : x - data.x;
        this.__height = fixedHeight ? h : y - data.y;
      }
    }, {
      key: "__calAbs",
      value: function __calAbs() {
        return 0;
      }
    }, {
      key: "render",
      value: function render(renderMode) {
        _get(_getPrototypeOf(Geom.prototype), "render", this).call(this, renderMode);

        if (renderMode === mode.SVG) {
          this.__virtualDom = _objectSpread2({}, _get(_getPrototypeOf(Geom.prototype), "virtualDom", this), {
            type: 'geom'
          });
        }
      }
    }, {
      key: "tagName",
      get: function get() {
        return this.__tagName;
      }
    }, {
      key: "baseLine",
      get: function get() {
        return this.__height;
      }
    }], [{
      key: "getImplement",
      value: function getImplement(name) {
        if (!IMPLEMENT.hasOwnProperty(name)) {
          throw new Error("Geom has not register: ".concat(name));
        }

        return IMPLEMENT[name];
      }
    }, {
      key: "register",
      value: function register(name, implement) {
        if (IMPLEMENT.hasOwnProperty(name)) {
          throw new Error("Geom has already register: ".concat(name));
        }

        IMPLEMENT[name] = implement;
      }
    }]);

    return Geom;
  }(Xom);

  var TAG_NAME = {
    'div': true,
    'span': true
  };
  var INLINE = {
    'span': true
  };

  var Dom =
  /*#__PURE__*/
  function (_Xom) {
    _inherits(Dom, _Xom);

    function Dom(tagName, props, children) {
      var _this;

      _classCallCheck(this, Dom);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Dom).call(this, tagName, props));
      _this.__children = children;
      _this.__flowChildren = []; // 非绝对定位孩子

      _this.__absChildren = []; // 绝对定位孩子

      _this.__lineGroups = []; // 一行inline元素组成的LineGroup对象后的存放列表

      _this.__flowY = 0; // 文档流布局结束后的y坐标，供absolute布局默认位置使用

      return _this;
    }
    /**
     * 1. 封装string为Text节点
     * 2. 打平children中的数组，变成一维
     * 3. 合并相连的Text节点
     * 4. 检测inline不能包含block和flex
     * 5. 设置parent和prev/next和ctx和defs和mode
     */


    _createClass(Dom, [{
      key: "__traverse",
      value: function __traverse(ctx, defs, renderMode) {
        var _this2 = this;

        var list = [];

        this.__traverseChildren(this.children, list, ctx, defs, renderMode);

        for (var i = list.length - 1; i > 0; i--) {
          var item = list[i];

          if (item instanceof Text) {
            var _prev = list[i - 1];

            if (_prev instanceof Text) {
              _prev.content += item.content;
              list.splice(i, 1);
            } else {
              i--;
            }
          }
        }

        if (this.style.display === 'inline' && this.parent.style.display !== 'flex') {
          for (var _i = list.length - 1; _i >= 0; _i--) {
            var _item = list[_i];

            if (_item instanceof Dom && _item.style.display !== 'inline') {
              throw new Error('inline can not contain block/flex');
            }
          }
        }

        var prev = null;
        list.forEach(function (item) {
          item.__ctx = ctx;
          item.__defs = defs;

          item.__parent = _this2;
          item.__prev = prev;

          if (item instanceof Text || item.style.position !== 'absolute') {
            _this2.__flowChildren.push(item);
          } else {
            _this2.__absChildren.push(item);
          }
        });
        this.__children = list;
      }
    }, {
      key: "__traverseChildren",
      value: function __traverseChildren(children, list, ctx, defs, renderMode) {
        var _this3 = this;

        if (Array.isArray(children)) {
          children.forEach(function (item) {
            _this3.__traverseChildren(item, list, ctx, defs, renderMode);
          });
        } else if (children instanceof Dom) {
          list.push(children);

          children.__traverse(ctx, defs, renderMode);
        } // 图形没有children
        else if (children instanceof Geom) {
            list.push(children);
          } // 排除掉空的文本
          else if (!util.isNil(children)) {
              var text = new Text(children);
              text.__renderMode = renderMode;
              list.push(text);
            }
      } // 合并设置style，包括继承和默认值，修改一些自动值和固定值，测量所有文字的宽度

    }, {
      key: "__initStyle",
      value: function __initStyle() {
        var style = this.__style; // 仅支持flex/block/inline/none

        if (!style.display || ['flex', 'block', 'inline', 'none'].indexOf(style.display) === -1) {
          if (INLINE.hasOwnProperty(this.tagName)) {
            style.display = 'inline';
          } else {
            style.display = 'block';
          }
        } // 继承父元素样式


        var parent = this.parent;

        if (parent) {
          var parentStyle = parent.style;
          ['fontSize', 'fontWeight', 'fontStyle', 'lineHeight', 'wordBreak', 'color', 'textAlign'].forEach(function (k) {
            if (!style.hasOwnProperty(k) && parentStyle.hasOwnProperty(k)) {
              style[k] = parentStyle[k];
            }
          });
        } // 标准化处理，默认值、简写属性


        css.normalize(style);
        this.children.forEach(function (item) {
          if (item instanceof Xom) {
            item.__initStyle();
          } else {
            item.__style = style; // 文字首先测量所有字符宽度

            item.__measure();
          }
        });
      } // 给定父宽度情况下，尝试行内放下后的剩余宽度，为负数即放不下

    }, {
      key: "__tryLayInline",
      value: function __tryLayInline(w, total) {
        var flowChildren = this.flowChildren,
            width = this.style.width;

        if (width.unit === unit.PX) {
          return w - width.value;
        } else if (width.unit === unit.PERCENT) {
          return w - total * width.value * 0.01;
        }

        for (var i = 0; i < flowChildren.length; i++) {
          // 当放不下时直接返回，无需继续多余的尝试计算
          if (w < 0) {
            return w;
          }

          var item = flowChildren[i];

          if (item instanceof Xom) {
            w -= item.__tryLayInline(w, total);
          } else {
            w -= item.textWidth;
          }
        }

        return w;
      } // 设置y偏移值，递归包括children，此举在flex行元素的child进行justify-content对齐用

    }, {
      key: "__offsetX",
      value: function __offsetX(diff) {
        _get(_getPrototypeOf(Dom.prototype), "__offsetX", this).call(this, diff);

        this.flowChildren.forEach(function (item) {
          if (item) {
            item.__offsetX(diff);
          }
        });
      } // 设置y偏移值，递归包括children，此举在初步确定inline布局后设置元素vertical-align用

    }, {
      key: "__offsetY",
      value: function __offsetY(diff) {
        _get(_getPrototypeOf(Dom.prototype), "__offsetY", this).call(this, diff);

        this.flowChildren.forEach(function (item) {
          if (item) {
            item.__offsetY(diff);
          }
        });
      }
    }, {
      key: "__calAutoBasis",
      value: function __calAutoBasis(isDirectionRow, w, h, isRecursion) {
        var b = 0;
        var min = 0;
        var max = 0;
        var mtw = this.mtw,
            mrw = this.mrw,
            mbw = this.mbw,
            mlw = this.mlw,
            ptw = this.ptw,
            prw = this.prw,
            pbw = this.pbw,
            plw = this.plw,
            flowChildren = this.flowChildren,
            style = this.style; // 计算需考虑style的属性

        var width = style.width,
            height = style.height,
            borderTopWidth = style.borderTopWidth,
            borderRightWidth = style.borderRightWidth,
            borderBottomWidth = style.borderBottomWidth,
            borderLeftWidth = style.borderLeftWidth;
        var main = isDirectionRow ? width : height;

        if (main.unit === unit.PX) {
          b = max = main.value; // 递归时children的长度会影响flex元素的最小宽度

          if (isRecursion) {
            min = b;
          }
        } // 递归children取最大值


        flowChildren.forEach(function (item) {
          if (item instanceof Xom) {
            var _item$__calAutoBasis = item.__calAutoBasis(isDirectionRow, w, h, true),
                b2 = _item$__calAutoBasis.b,
                min2 = _item$__calAutoBasis.min,
                max2 = _item$__calAutoBasis.max;

            b = Math.max(b, b2);
            min = Math.max(min, min2);
            max = Math.max(max, max2);
          } else if (isDirectionRow) {
            min = Math.max(item.charWidth, min);
            max = Math.max(item.textWidth, max);
          } else {
            item.__layout({
              x: 0,
              y: 0,
              w: w,
              h: h
            }, true);

            min = Math.max(min, item.height);
            max = Math.max(max, item.height);
          }
        }); // margin/padding/border也得计算在内

        if (isDirectionRow) {
          var _w = borderRightWidth.value + borderLeftWidth.value + mlw + mrw + plw + prw;

          b += _w;
          max += _w;
          min += _w;
        } else {
          var _h = borderTopWidth.value + borderBottomWidth.value + mtw + mbw + ptw + pbw;

          b += _h;
          max += _h;
          min += _h;
        }

        return {
          b: b,
          min: min,
          max: max
        };
      }
    }, {
      key: "__calAbs",
      value: function __calAbs(isDirectionRow) {
        var max = 0;
        var mtw = this.mtw,
            mrw = this.mrw,
            mbw = this.mbw,
            mlw = this.mlw,
            ptw = this.ptw,
            prw = this.prw,
            pbw = this.pbw,
            plw = this.plw,
            flowChildren = this.flowChildren,
            style = this.style; // 计算需考虑style的属性

        var width = style.width,
            height = style.height,
            borderTopWidth = style.borderTopWidth,
            borderRightWidth = style.borderRightWidth,
            borderBottomWidth = style.borderBottomWidth,
            borderLeftWidth = style.borderLeftWidth;
        var main = isDirectionRow ? width : height;

        if (main.unit === unit.PX) {
          max = main.value;
        } // 递归children取最大值


        flowChildren.forEach(function (item) {
          if (item instanceof Xom) {
            var max2 = item.__calAbs(isDirectionRow);

            max = Math.max(max, max2);
          } else if (isDirectionRow) {
            max = Math.max(item.textWidth, max);
          } else {
            item.__layout({
              x: 0,
              y: 0,
              w: Infinity,
              h: Infinity
            }, true);

            max = Math.max(max, item.height);
          }
        }); // margin/padding/border也得计算在内

        if (isDirectionRow) {
          var w = borderRightWidth.value + borderLeftWidth.value + mlw + mrw + plw + prw;
          max += w;
        } else {
          var h = borderTopWidth.value + borderBottomWidth.value + mtw + mbw + ptw + pbw;
          max += h;
        }

        return max;
      } // 本身block布局时计算好所有子元素的基本位置

    }, {
      key: "__layoutBlock",
      value: function __layoutBlock(data) {
        var x = data.x,
            y = data.y,
            w = data.w,
            h = data.h;
        this.__x = x;
        this.__y = y;
        this.__width = w;
        var flowChildren = this.flowChildren,
            style = this.style,
            lineGroups = this.lineGroups,
            mlw = this.mlw,
            mtw = this.mtw,
            mrw = this.mrw,
            mbw = this.mbw,
            plw = this.plw,
            ptw = this.ptw,
            prw = this.prw,
            pbw = this.pbw;
        var width = style.width,
            height = style.height,
            marginLeft = style.marginLeft,
            marginRight = style.marginRight,
            borderTopWidth = style.borderTopWidth,
            borderRightWidth = style.borderRightWidth,
            borderBottomWidth = style.borderBottomWidth,
            borderLeftWidth = style.borderLeftWidth,
            textAlign = style.textAlign; // 除了auto外都是固定高度

        var fixedHeight;

        if (width && width.unit !== unit.AUTO) {
          switch (width.unit) {
            case unit.PX:
              w = width.value;
              break;

            case unit.PERCENT:
              w *= width.value * 0.01;
              break;
          }
        }

        if (height && height.unit !== unit.AUTO) {
          fixedHeight = true;

          switch (height.unit) {
            case unit.PX:
              h = height.value;
              break;

            case unit.PERCENT:
              h *= height.value * 0.01;
              break;
          }
        } // margin/padding/border影响x和y和尺寸


        x += borderLeftWidth.value + mlw + plw;
        data.x = x;
        y += borderTopWidth.value + mtw + ptw;
        data.y = y;

        if (width.unit === unit.AUTO) {
          w -= borderLeftWidth.value + borderRightWidth.value + mlw + mrw + plw + prw;
        }

        if (height.unit === unit.AUTO) {
          h -= borderTopWidth.value + borderBottomWidth.value + mtw + mbw + ptw + pbw;
        } // 递归布局，将inline的节点组成lineGroup一行


        var lineGroup = new LineGroup(x, y);
        flowChildren.forEach(function (item) {
          if (item instanceof Xom) {
            if (item.style.display === 'inline') {
              // inline开头，不用考虑是否放得下直接放
              if (x === data.x) {
                lineGroup.add(item);

                item.__layout({
                  x: x,
                  y: y,
                  w: w,
                  h: h
                });

                x += item.outerWidth;
              } else {
                // 非开头先尝试是否放得下
                var fw = item.__tryLayInline(w - x, w); // 放得下继续


                if (fw >= 0) {
                  item.__layout({
                    x: x,
                    y: y,
                    w: w,
                    h: h
                  });
                } // 放不下处理之前的lineGroup，并重新开头
                else {
                    lineGroups.push(lineGroup);
                    lineGroup.verticalAlign();
                    x = data.x;
                    y += lineGroup.height;

                    item.__layout({
                      x: data.x,
                      y: y,
                      w: w,
                      h: h
                    });

                    lineGroup = new LineGroup(x, y);
                  }

                x += item.outerWidth;
                lineGroup.add(item);
              }
            } else {
              // block先处理之前可能的lineGroup
              if (lineGroup.size) {
                lineGroups.push(lineGroup);
                lineGroup.verticalAlign();
                y += lineGroup.height;
                lineGroup = new LineGroup(data.x, y);
              }

              item.__layout({
                x: data.x,
                y: y,
                w: w,
                h: h
              });

              x = data.x;
              y += item.outerHeight;
            }
          } // 文字和inline类似
          else {
              // x开头，不用考虑是否放得下直接放
              if (x === data.x) {
                lineGroup.add(item);

                item.__layout({
                  x: x,
                  y: y,
                  w: w,
                  h: h
                });

                x += item.width;
              } else {
                // 非开头先尝试是否放得下
                var _fw = item.__tryLayInline(w - x, w); // 放得下继续


                if (_fw >= 0) {
                  item.__layout({
                    x: x,
                    y: y,
                    w: w,
                    h: h
                  });
                } // 放不下处理之前的lineGroup，并重新开头
                else {
                    lineGroups.push(lineGroup);
                    lineGroup.verticalAlign();
                    x = data.x;
                    y += lineGroup.height;

                    item.__layout({
                      x: data.x,
                      y: y,
                      w: w,
                      h: h
                    });

                    lineGroup = new LineGroup(x, y);
                  }

                x += item.width;
                lineGroup.add(item);
              }
            }
        }); // 结束后处理可能遗留的最后的lineGroup

        if (lineGroup.size) {
          lineGroups.push(lineGroup);
          lineGroup.verticalAlign();
          y += lineGroup.height;
        } // text-align


        if (['center', 'right'].indexOf(textAlign) > -1) {
          lineGroups.forEach(function (lineGroup) {
            var diff = w - lineGroup.width;

            if (diff > 0) {
              lineGroup.horizonAlign(textAlign === 'center' ? diff * 0.5 : diff);
            }
          });
        }

        this.__width = w;
        this.__height = fixedHeight ? h : y - data.y;
        this.__flowY = y; // 处理margin:xx auto居中对齐

        if (marginLeft.unit === unit.AUTO && marginRight.unit === unit.AUTO && width.unit !== unit.AUTO) {
          var ow = this.outerWidth;

          if (ow < data.w) {
            this.__offsetX((data.w - ow) * 0.5);
          }
        }
      } // 弹性布局时的计算位置

    }, {
      key: "__layoutFlex",
      value: function __layoutFlex(data) {
        var x = data.x,
            y = data.y,
            w = data.w,
            h = data.h;
        this.__x = x;
        this.__y = y;
        this.__width = w;
        var flowChildren = this.flowChildren,
            style = this.style,
            mlw = this.mlw,
            mtw = this.mtw,
            mrw = this.mrw,
            mbw = this.mbw,
            plw = this.plw,
            ptw = this.ptw,
            prw = this.prw,
            pbw = this.pbw;
        var width = style.width,
            height = style.height,
            flexDirection = style.flexDirection,
            borderTopWidth = style.borderTopWidth,
            borderRightWidth = style.borderRightWidth,
            borderBottomWidth = style.borderBottomWidth,
            borderLeftWidth = style.borderLeftWidth,
            justifyContent = style.justifyContent,
            alignItems = style.alignItems; // 除了auto外都是固定高度

        var fixedWidth;
        var fixedHeight;

        if (width && width.unit !== unit.AUTO) {
          fixedWidth = true;

          switch (width.unit) {
            case unit.PX:
              w = width.value;
              break;

            case unit.PERCENT:
              w *= width.value * 0.01;
              break;
          }
        }

        if (height && height.unit !== unit.AUTO) {
          fixedHeight = true;

          switch (height.unit) {
            case unit.PX:
              h = height.value;
              break;

            case unit.PERCENT:
              h *= height.value * 0.01;
              break;
          }
        } // margin/padding/border影响x和y和尺寸


        x += borderLeftWidth.value + mlw + plw;
        data.x = x;
        y += borderTopWidth.value + mtw + ptw;
        data.y = y;

        if (width.unit === unit.AUTO) {
          w -= borderLeftWidth.value + borderRightWidth.value + mlw + mrw + plw + prw;
        }

        if (height.unit === unit.AUTO) {
          h -= borderTopWidth.value + borderBottomWidth.value + mtw + mbw + ptw + pbw;
        }

        var isDirectionRow = flexDirection === 'row'; // column时height可能为auto，此时取消伸展，退化为类似block布局，但所有子元素强制block

        if (!isDirectionRow && !fixedHeight) {
          flowChildren.forEach(function (item) {
            if (item instanceof Xom) {
              var _style = item.style,
                  _item$style = item.style,
                  display = _item$style.display,
                  _flexDirection = _item$style.flexDirection,
                  _width = _item$style.width; // column的flex的child如果是inline，变为block

              if (display === 'inline') {
                _style.display = 'block';
              } // 竖向flex的child如果是横向flex，宽度自动的话要等同于父flex的宽度
              else if (display === 'flex' && _flexDirection === 'row' && _width.unit === unit.AUTO) {
                  _width.value = w;
                  _width.unit = unit.PX;
                }

              item.__layout({
                x: x,
                y: y,
                w: w,
                h: h
              });

              y += item.outerHeight;
            } else {
              item.__layout({
                x: x,
                y: y,
                w: w,
                h: h
              });

              y += item.outerHeight;
            }
          });
          this.__width = w;
          this.__height = y - data.y;
          return;
        } // 计算伸缩基数


        var growList = [];
        var shrinkList = [];
        var basisList = [];
        var minList = [];
        var growSum = 0;
        var shrinkSum = 0;
        var basisSum = 0;
        var maxSum = 0;
        flowChildren.forEach(function (item) {
          if (item instanceof Xom) {
            var _item$style2 = item.style,
                flexGrow = _item$style2.flexGrow,
                flexShrink = _item$style2.flexShrink,
                flexBasis = _item$style2.flexBasis;
            growList.push(flexGrow);
            shrinkList.push(flexShrink);
            growSum += flexGrow;
            shrinkSum += flexShrink;

            var _item$__calAutoBasis2 = item.__calAutoBasis(isDirectionRow, w, h),
                b = _item$__calAutoBasis2.b,
                min = _item$__calAutoBasis2.min,
                max = _item$__calAutoBasis2.max; // 根据basis不同，计算方式不同


            if (flexBasis.unit === unit.AUTO) {
              basisList.push(max);
              basisSum += max;
            } else if (flexBasis.unit === unit.PX) {
              b = flexBasis.value;
              basisList.push(b);
              basisSum += b;
            } else if (flexBasis.unit === unit.PERCENT) {
              b = (isDirectionRow ? w : h) * flexBasis.value;
              basisList.push(b);
              basisSum += b;
            }

            maxSum += max;
            minList.push(min);
          } else {
            growList.push(0);
            shrinkList.push(1);
            shrinkSum += 1;

            if (isDirectionRow) {
              basisList.push(item.textWidth);
              basisSum += item.textWidth;
              maxSum += item.textWidth;
              minList.push(item.charWidth);
            } else {
              item.__layout({
                x: 0,
                y: 0,
                w: w,
                h: h
              }, true);

              basisList.push(item.height);
              basisSum += item.height;
              maxSum += item.height;
              minList.push(item.height);
            }
          }
        });
        var maxCross = 0; // 判断是否超出，决定使用grow还是shrink

        var isOverflow = maxSum > (isDirectionRow ? w : h);
        flowChildren.forEach(function (item, i) {
          var main;
          var shrink = shrinkList[i];
          var grow = growList[i]; // 计算主轴长度

          if (isOverflow) {
            var overflow = basisSum - (isDirectionRow ? w : h);
            main = shrink ? basisList[i] - overflow * shrink / shrinkSum : basisList[i];
          } else {
            var free = (isDirectionRow ? w : h) - basisSum;
            main = grow ? basisList[i] + free * grow / growSum : basisList[i];
          } // 主轴长度的最小值不能小于元素的最小长度，比如横向时的字符宽度


          main = Math.max(main, minList[i]);

          if (item instanceof Xom) {
            var _style2 = item.style,
                _mlw = item.mlw,
                _mtw = item.mtw,
                _mrw = item.mrw,
                _mbw = item.mbw,
                _plw = item.plw,
                _ptw = item.ptw,
                _prw = item.prw,
                _pbw = item.pbw,
                _item$style3 = item.style,
                display = _item$style3.display,
                _flexDirection2 = _item$style3.flexDirection,
                _width2 = _item$style3.width,
                _height = _item$style3.height,
                _borderTopWidth = _item$style3.borderTopWidth,
                _borderRightWidth = _item$style3.borderRightWidth,
                _borderBottomWidth = _item$style3.borderBottomWidth,
                _borderLeftWidth = _item$style3.borderLeftWidth;

            if (isDirectionRow) {
              // row的flex的child如果是inline，变为block
              if (display === 'inline') {
                _style2.display = 'block';
              } // 横向flex的child如果是竖向flex，高度自动的话要等同于父flex的高度
              else if (display === 'flex' && _flexDirection2 === 'column' && fixedHeight && _height.unit === unit.AUTO) {
                  _height.value = h;
                  _height.unit = unit.PX;
                }

              item.__layout({
                x: x,
                y: y,
                w: main,
                h: h
              });
            } else {
              // column的flex的child如果是inline，变为block
              if (display === 'inline') {
                _style2.display = 'block';
              } // 竖向flex的child如果是横向flex，宽度自动的话要等同于父flex的宽度
              else if (display === 'flex' && _flexDirection2 === 'row' && _width2.unit === unit.AUTO) {
                  _width2.value = w;
                  _width2.unit = unit.PX;
                }

              item.__layout({
                x: x,
                y: y,
                w: w,
                h: main
              });
            } // 重设因伸缩而导致的主轴长度


            if (isOverflow && shrink) {
              if (isDirectionRow) {
                item.__width = main - _mlw - _mrw - _plw - _prw - _borderLeftWidth.value - _borderRightWidth.value;
              } else {
                item.__height = main - _mtw - _mbw - _ptw - _pbw - _borderTopWidth.value - _borderBottomWidth.value;
              }
            } else if (!isOverflow && grow) {
              if (isDirectionRow) {
                item.__width = main - _mlw - _mrw - _plw - _prw - _borderLeftWidth.value - _borderRightWidth.value;
              } else {
                item.__height = main - _mtw - _mbw - _ptw - _pbw - _borderTopWidth.value - _borderBottomWidth.value;
              }
            }
          } else {
            item.__layout({
              x: x,
              y: y,
              w: isDirectionRow ? main : w,
              h: isDirectionRow ? h : main
            });
          }

          if (isDirectionRow) {
            x += item.outerWidth;
            maxCross = Math.max(maxCross, item.outerHeight);
          } else {
            y += item.outerHeight;
            maxCross = Math.max(maxCross, item.outerWidth);
          }
        }); // 计算主轴剩余时要用真实剩余空间而不能用伸缩剩余空间

        var diff = isDirectionRow ? w - x + data.x : h - y + data.y; // 主轴侧轴对齐方式

        if (!isOverflow && growSum === 0 && diff > 0) {
          var len = flowChildren.length;

          if (justifyContent === 'flex-end') {
            for (var i = 0; i < len; i++) {
              var child = flowChildren[i];
              isDirectionRow ? child.__offsetX(diff) : child.__offsetY(diff);
            }
          } else if (justifyContent === 'center') {
            var center = diff * 0.5;

            for (var _i2 = 0; _i2 < len; _i2++) {
              var _child = flowChildren[_i2];
              isDirectionRow ? _child.__offsetX(center) : _child.__offsetY(center);
            }
          } else if (justifyContent === 'space-between') {
            var between = diff / (len - 1);

            for (var _i3 = 1; _i3 < len; _i3++) {
              var _child2 = flowChildren[_i3];
              isDirectionRow ? _child2.__offsetX(between * _i3) : _child2.__offsetY(between * _i3);
            }
          } else if (justifyContent === 'space-around') {
            var around = diff / (len + 1);

            for (var _i4 = 0; _i4 < len; _i4++) {
              var _child3 = flowChildren[_i4];
              isDirectionRow ? _child3.__offsetX(around * (_i4 + 1)) : _child3.__offsetY(around * (_i4 + 1));
            }
          }
        } // 子元素侧轴伸展


        if (isDirectionRow) {
          // 父元素固定高度，子元素可能超过，侧轴最大长度取固定高度
          if (fixedHeight) {
            maxCross = h;
          }

          y += maxCross;
        } else {
          if (fixedWidth) {
            maxCross = w;
          }
        } // 侧轴对齐


        if (alignItems === 'stretch') {
          // 短侧轴的children伸张侧轴长度至相同，超过的不动，固定宽高的也不动
          flowChildren.forEach(function (item) {
            var style = item.style,
                mlw = item.mlw,
                mtw = item.mtw,
                mrw = item.mrw,
                mbw = item.mbw,
                ptw = item.ptw,
                prw = item.prw,
                plw = item.plw,
                pbw = item.pbw;

            if (isDirectionRow) {
              if (style.height.unit === unit.AUTO) {
                item.__height = maxCross - mtw - mbw - ptw - pbw - style.borderTopWidth.value - style.borderBottomWidth.value;
              }
            } else {
              if (style.width.unit === unit.AUTO) {
                item.__width = maxCross - mlw - mrw - plw - prw - borderRightWidth.value - borderLeftWidth.value;
              }
            }
          });
        } else if (alignItems === 'center') {
          flowChildren.forEach(function (item) {
            var diff = maxCross - item.outerHeight;

            if (diff > 0) {
              item.__offsetY(diff * 0.5);
            }
          });
        } else if (alignItems === 'flex-end') {
          flowChildren.forEach(function (item) {
            var diff = maxCross - item.outerHeight;

            if (diff > 0) {
              item.__offsetY(diff);
            }
          });
        }

        this.__width = w;
        this.__height = fixedHeight ? h : y - data.y;
        this.__flowY = y;
      } // inline比较特殊，先简单顶部对其，后续还需根据vertical和lineHeight计算y偏移

    }, {
      key: "__layoutInline",
      value: function __layoutInline(data) {
        var _this4 = this;

        var x = data.x,
            y = data.y,
            w = data.w,
            h = data.h;
        this.__x = x;
        this.__y = y;
        var maxX = x;
        var flowChildren = this.flowChildren,
            style = this.style,
            lineGroups = this.lineGroups,
            mlw = this.mlw,
            mtw = this.mtw,
            mrw = this.mrw,
            mbw = this.mbw,
            plw = this.plw,
            ptw = this.ptw,
            prw = this.prw,
            pbw = this.pbw;
        var width = style.width,
            height = style.height,
            marginLeft = style.marginLeft,
            marginRight = style.marginRight,
            borderTopWidth = style.borderTopWidth,
            borderRightWidth = style.borderRightWidth,
            borderBottomWidth = style.borderBottomWidth,
            borderLeftWidth = style.borderLeftWidth,
            textAlign = style.textAlign; // 除了auto外都是固定高度

        var fixedWidth;
        var fixedHeight;

        if (width && width.unit !== unit.AUTO) {
          fixedWidth = true;

          switch (width.unit) {
            case unit.PX:
              w = width.value;
              break;

            case unit.PERCENT:
              w *= width.value * 0.01;
              break;
          }
        }

        if (height && height.unit !== unit.AUTO) {
          fixedHeight = true;

          switch (height.unit) {
            case unit.PX:
              h = height.value;
              break;

            case unit.PERCENT:
              h *= height.value * 0.01;
              break;
          }
        } // margin/padding/border影响x和y和尺寸


        x += borderLeftWidth.value + mlw + plw;
        data.x = x;
        y += borderTopWidth.value + mtw + ptw;
        data.y = y;

        if (width.unit === unit.AUTO) {
          w -= borderLeftWidth.value + borderRightWidth.value + mlw + mrw + plw + prw;
        }

        if (height.unit === unit.AUTO) {
          h -= borderTopWidth.value + borderBottomWidth.value + mtw + mbw + ptw + pbw;
        } // 递归布局，将inline的节点组成lineGroup一行


        var lineGroup = new LineGroup(x, y);
        flowChildren.forEach(function (item) {
          if (item instanceof Xom) {
            // 绝对定位跳过
            if (item.style.position === 'absolute') {
              _this4.absChildren.push(item);

              return;
            }

            item.style.display = 'inline'; // inline开头，不用考虑是否放得下直接放

            if (x === data.x) {
              lineGroup.add(item);

              item.__layout({
                x: x,
                y: y,
                w: w,
                h: h
              });

              x += item.outerWidth;
              maxX = Math.max(maxX, x);
            } else {
              // 非开头先尝试是否放得下
              var fw = item.__tryLayInline(w - x, w); // 放得下继续


              if (fw >= 0) {
                item.__layout({
                  x: x,
                  y: y,
                  w: w,
                  h: h
                });
              } // 放不下处理之前的lineGroup，并重新开头
              else {
                  lineGroups.push(lineGroup);
                  lineGroup.verticalAlign();
                  x = data.x;
                  y += lineGroup.height;

                  item.__layout({
                    x: data.x,
                    y: y,
                    w: w,
                    h: h
                  });

                  lineGroup = new LineGroup(x, y);
                }

              x += item.outerWidth;
              maxX = Math.max(maxX, x);
              lineGroup.add(item);
            }
          } // inline里的其它只有文本
          else {
              if (x === data.x) {
                lineGroup.add(item);

                item.__layout({
                  x: x,
                  y: y,
                  w: w,
                  h: h
                });

                x += item.width;
                maxX = Math.max(maxX, x);
              } else {
                // 非开头先尝试是否放得下
                var _fw2 = item.__tryLayInline(w - x, w); // 放得下继续


                if (_fw2 >= 0) {
                  item.__layout({
                    x: x,
                    y: y,
                    w: w,
                    h: h
                  });
                } // 放不下处理之前的lineGroup，并重新开头
                else {
                    lineGroups.push(lineGroup);
                    lineGroup.verticalAlign();
                    x = data.x;
                    y += lineGroup.height;

                    item.__layout({
                      x: data.x,
                      y: y,
                      w: w,
                      h: h
                    });

                    lineGroup = new LineGroup(x, y);
                  }

                x += item.width;
                maxX = Math.max(maxX, x);
                lineGroup.add(item);
              }
            }
        }); // 结束后处理可能遗留的最后的lineGroup，children为空时可能size为空

        if (lineGroup.size) {
          lineGroups.push(lineGroup);
          lineGroup.verticalAlign();
          y += lineGroup.height;
        } // text-align


        if (['center', 'right'].indexOf(textAlign) > -1) {
          lineGroups.forEach(function (lineGroup) {
            var diff = w - lineGroup.width;

            if (diff > 0) {
              lineGroup.horizonAlign(textAlign === 'center' ? diff * 0.5 : diff);
            }
          });
        } // 元素的width不能超过父元素w


        this.__width = fixedWidth ? w : maxX - data.x;
        this.__height = fixedHeight ? h : y - data.y;
        this.__flowY = y; // 处理margin:xx auto居中对齐

        if (marginLeft.unit === unit.AUTO && marginRight.unit === unit.AUTO && width.unit !== unit.AUTO) {
          var ow = this.outerWidth;

          if (ow < data.w) {
            this.__offsetX((data.w - ow) * 0.5);
          }
        }
      } // 只针对绝对定位children布局

    }, {
      key: "__layoutAbs",
      value: function __layoutAbs(container) {
        var x = this.x,
            y = this.y,
            flowY = this.flowY,
            width = this.width,
            height = this.height,
            children = this.children,
            absChildren = this.absChildren,
            style = this.style,
            mlw = this.mlw,
            mtw = this.mtw,
            mrw = this.mrw,
            mbw = this.mbw,
            plw = this.plw,
            ptw = this.ptw,
            prw = this.prw,
            pbw = this.pbw;
        var borderTopWidth = style.borderTopWidth,
            borderLeftWidth = style.borderLeftWidth;
        var pw = width + plw + prw;
        var ph = height + ptw + pbw; // 递归进行，遇到absolute/relative的设置新容器

        children.forEach(function (item) {
          if (item instanceof Dom) {
            item.__layoutAbs(['absolute', 'relative'].indexOf(item.style.position) > -1 ? item : container);
          }
        }); // 对absolute的元素进行相对容器布局

        absChildren.forEach(function (item) {
          var mtw = item.mtw,
              mlw = item.mlw,
              style = item.style,
              _item$style4 = item.style,
              left = _item$style4.left,
              top = _item$style4.top,
              right = _item$style4.right,
              bottom = _item$style4.bottom,
              width2 = _item$style4.width,
              height2 = _item$style4.height;
          var x2, y2, w2, h2; // width优先级高于right高于left，即最高left+right，其次left+width，再次right+width，然后仅申明单个，最次全部auto

          if (left.unit !== unit.AUTO && right.unit !== unit.AUTO) {
            x2 = left.unit === unit.PX ? x + mlw + borderLeftWidth.value + left.value : x + mlw + borderLeftWidth.value + width * left.value * 0.01;
            w2 = right.unit === unit.PX ? x + mlw + borderLeftWidth.value + pw - right.value - x2 : x + mlw + borderLeftWidth.value + pw - width * right.value * 0.01 - x2;
          } else if (left.unit !== unit.AUTO && width2.unit !== unit.AUTO) {
            x2 = left.unit === unit.PX ? x + mlw + borderLeftWidth.value + left.value : x + mlw + borderLeftWidth.value + width * left.value * 0.01;
            w2 = width2.unit === unit.PX ? width2.value : width;
          } else if (right.unit !== unit.AUTO && width2.unit !== unit.AUTO) {
            w2 = width2.unit === unit.PX ? width2.value : width;
            var widthPx = width2.unit === unit.PX ? width2.value : width * width2.value * 0.01;
            x2 = right.unit === unit.PX ? x + mlw + borderLeftWidth.value + pw - right.value - widthPx : x + mlw + borderLeftWidth.value + pw - width * right.value * 0.01 - widthPx;
          } else if (left.unit !== unit.AUTO) {
            x2 = left.unit === unit.PX ? x + left.value : x + mlw + borderLeftWidth.value + width * left.value * 0.01;
            w2 = item.__calAbs(true);
          } else if (right.unit !== unit.AUTO) {
            w2 = item.__calAbs(true);
            x2 = right.unit === unit.PX ? x + mlw + borderLeftWidth.value + pw - right.value - w2 : x + mlw + borderLeftWidth.value + pw - width * right.value * 0.01 - w2;
          } else if (width2.unit !== unit.AUTO) {
            x2 = x + mlw + borderLeftWidth.value;
            w2 = width2.unit === unit.PX ? width2.value : width;
          } else {
            x2 = x + mlw + borderLeftWidth.value;
            w2 = item.__calAbs(true);
          } // top/bottom/height优先级同上


          if (top.unit !== unit.AUTO && bottom.unit !== unit.AUTO) {
            y2 = top.unit === unit.PX ? y + top.value : y + mtw + borderTopWidth.value + height * top.value * 0.01;
            h2 = bottom.unit === unit.PX ? y + mtw + borderTopWidth.value + ph - bottom.value - y2 : y + mtw + borderTopWidth.value + ph - height * bottom.value * 0.01 - y2;
            style.height = {
              value: h2,
              unit: unit.PX
            };
          } else if (top.unit !== unit.AUTO && height2.unit !== unit.AUTO) {
            y2 = top.unit === unit.PX ? y + top.value : y + mtw + borderTopWidth.value + height * top.value * 0.01;
            h2 = height2.unit === unit.PX ? height2.value : height;
          } else if (bottom.unit !== unit.AUTO && height2.unit !== unit.AUTO) {
            h2 = height2.unit === unit.PX ? height2.value : height;
            var heightPx = height2.unit === unit.PX ? height2.value : height * height2.value * 0.01;
            y2 = bottom.unit === unit.PX ? y + mtw + borderTopWidth.value + ph - bottom.value - heightPx : y + mtw + borderTopWidth.value + ph - height * bottom.value * 0.01 - heightPx;
          } else if (top.unit !== unit.AUTO) {
            y2 = top.unit === unit.PX ? y + top.value : y + mtw + borderTopWidth.value + height * top.value * 0.01;
            h2 = item.__calAbs();
          } else if (bottom.unit !== unit.AUTO) {
            h2 = item.__calAbs();
            y2 = bottom.unit === unit.PX ? y + mtw + borderTopWidth.value + ph - bottom.value - h2 : y + mtw + borderTopWidth.value + ph - height * bottom.value * 0.01 - h2;
          } else if (height2.unit !== unit.AUTO) {
            y2 = flowY + mtw + borderTopWidth.value;
            h2 = height2.unit === unit.PX ? height2.value : height;
          } else {
            y2 = flowY + mtw + borderTopWidth.value;
            h2 = item.__calAbs();
          } // absolute时inline强制block


          if (style.display === 'inline') {
            style.display = 'block';
          }

          item.__layout({
            x: x2,
            y: y2,
            w: w2,
            h: h2
          });
        });
      }
    }, {
      key: "render",
      value: function render(renderMode) {
        _get(_getPrototypeOf(Dom.prototype), "render", this).call(this, renderMode);

        var display = this.style.display,
            flowChildren = this.flowChildren,
            children = this.children;

        if (display === 'none') {
          return;
        } // 先绘制static


        flowChildren.forEach(function (item) {
          if (item instanceof Text || item.style.position === 'static') {
            item.render(renderMode);
          }
        }); // 再绘制relative和absolute

        children.forEach(function (item) {
          if (item instanceof Xom && ['relative', 'absolute'].indexOf(item.style.position) > -1) {
            item.render(renderMode);
          }
        });

        if (renderMode === mode.SVG) {
          this.__virtualDom = _objectSpread2({}, _get(_getPrototypeOf(Dom.prototype), "virtualDom", this), {
            type: 'dom',
            children: this.children.map(function (item) {
              return item.virtualDom;
            })
          });
        }
      }
    }, {
      key: "tagName",
      get: function get() {
        return this.__tagName;
      }
    }, {
      key: "children",
      get: function get() {
        return this.__children;
      }
    }, {
      key: "flowChildren",
      get: function get() {
        return this.__flowChildren;
      }
    }, {
      key: "absChildren",
      get: function get() {
        return this.__absChildren;
      }
    }, {
      key: "lineGroups",
      get: function get() {
        return this.__lineGroups;
      }
    }, {
      key: "baseLine",
      get: function get() {
        var len = this.lineGroups.length;

        if (len) {
          var last = this.lineGroups[len - 1];
          return last.y - this.y + last.baseLine;
        }

        return this.y;
      }
    }, {
      key: "flowY",
      get: function get() {
        return this.__flowY;
      }
    }], [{
      key: "isValid",
      value: function isValid(s) {
        return TAG_NAME.hasOwnProperty(s);
      }
    }]);

    return Dom;
  }(Xom);

  function diff(elem, ovd, nvd) {
    var cns = elem.childNodes;
    diffDefs(cns[0], ovd.defs, nvd.defs);
    diffBb(cns[1], ovd.bb, nvd.bb);
    diffD2D(elem, ovd, nvd, true);
  }

  function diffDefs(elem, od, nd) {
    var ol = od.length;
    var nl = nd.length;
    var i = 0;
    var cns = elem.childNodes;

    for (; i < Math.min(ol, nl); i++) {
      diffDef(cns[i], od[i], nd[i]);
    }
  }

  function diffDef(elem, od, nd) {
    if (od.k !== nd.k) {
      elem.insertAdjacentHTML('afterend', util.joinDef(nd));
      elem.parentNode.removeChild(elem);
    } else {
      for (var _i = 0; _i < 4; _i++) {
        if (od.c[_i] !== nd.c[_i]) {
          elem.setAttribute(['x1', 'y1', 'x2', 'y2'][_i], nd.c[_i]);
        }
      }

      var ol = od.v.length;
      var nl = nd.v.length;
      var i = 0;
      var cns = elem.childNodes;

      for (; i < Math.min(ol, nl); i++) {
        var o = od.v[i];
        var n = nd.v[i];

        if (o[0] !== n[0]) {
          cns[i].setAttribute('stop-color', n[0]);
        }

        if (o[1] !== n[1]) {
          cns[i].setAttribute('offset', n[1]);
        }
      }

      if (i < ol) {
        for (; i < ol; i++) {
          removeAt(elem, cns, i);
        }
      } else if (i < nl) {
        for (; i < nl; i++) {
          insertAt(elem, cns, i, util.joinDef(nd.v[i]));
        }
      }
    }
  }

  function diffChild(elem, ovd, nvd) {
    if (ovd.type === 'dom') {
      if (nvd.type === 'dom') {
        diffD2D(elem, ovd, nvd);
      } else if (nvd.type === 'text') {
        replaceWith(elem, nvd);
      } else if (nvd.type === 'geom') {
        diffD2G(elem, ovd, nvd);
      }
    } else if (nvd.type === 'text') {
      if (nvd.type === 'dom') {
        replaceWith(elem, nvd);
      } else if (nvd.type === 'text') {
        diffT2T(elem, ovd, nvd);
      } else if (nvd.type === 'geom') {
        replaceWith(elem, nvd);
      }
    } else if (nvd.type === 'geom') {
      if (nvd.type === 'dom') {
        diffG2D(elem, ovd, nvd);
      } else if (nvd.type === 'text') {
        replaceWith(elem, nvd);
      } else if (nvd.type === 'geom') {
        diffG2G(elem, ovd, nvd);
      }
    }
  }

  function diffD2D(elem, ovd, nvd, root) {
    if (!root) {
      diffBb(elem.firstChild, ovd.bb, nvd.bb);
    }

    var ol = ovd.children.length;
    var nl = nvd.children.length;
    var i = 0;
    var lastChild = elem.lastChild;
    var cns = lastChild.childNodes;

    for (; i < Math.min(ol, nl); i++) {
      diffChild(cns[i], ovd.children[i], nvd.children[i]);
    }

    if (i < ol) {
      for (; i < ol; i++) {
        removeAt(lastChild, cns, i);
      }
    } else if (i < nl) {
      for (; i < nl; i++) {
        insertAt(lastChild, cns, i, util.joinVd(nvd.children[i]));
      }
    }
  }

  function diffD2G(elem, ovd, nvd) {
    diffBb(elem.firstChild, ovd.bb, nvd.bb);
    replaceWith(elem.lastChild, nvd.content);
  }

  function diffT2T(elem, ovd, nvd) {
    var ol = ovd.children.length;
    var nl = nvd.children.length;
    var i = 0;

    for (; i < Math.min(ol, nl); i++) {
      diffItem(elem, i, ovd.children[i], nvd.children[i], true);
    }

    var cns = elem.childNodes;

    if (i < ol) {
      for (; i < ol; i++) {
        removeAt(elem, cns, i);
      }
    } else if (i < nl) {
      for (; i < nl; i++) {
        insertAt(elem, cns, i, util.joinVd(nvd.children[i]));
      }
    }
  }

  function diffG2D(elem, ovd, nvd) {
    diffBb(elem.firstChild, ovd.bb, nvd.bb);
    replaceWith(elem.lastChild, nvd.children);
  }

  function diffG2G(elem, ovd, nvd) {
    if (!equalArr(ovd.transform, nvd.transform)) {
      var transform = util.joinTransform(nvd.transform);

      if (elem.getAttribute('transform') !== transform) {
        elem.setAttribute('transform', transform);
      }
    }

    diffBb(elem.firstChild, ovd.bb, nvd.bb);
    var ol = ovd.content.length;
    var nl = nvd.content.length;
    var i = 0;
    var lastChild = elem.lastChild;
    var cns = lastChild.childNodes;

    for (; i < Math.min(ol, nl); i++) {
      diffItem(lastChild, i, ovd.content[i], nvd.content[i]);
    }

    if (i < ol) {
      for (; i < ol; i++) {
        removeAt(lastChild, cns, i);
      }
    } else if (i < nl) {
      for (; i < nl; i++) {
        insertAt(lastChild, cns, i, util.joinVd(nvd.content[i]));
      }
    }
  }

  function diffBb(elem, obb, nbb) {
    var ol = obb.length;
    var nl = nbb.length;
    var i = 0;

    for (; i < Math.min(ol, nl); i++) {
      diffItem(elem, i, obb[i], nbb[i]);
    }

    var cns = elem.childNodes;

    if (i < ol) {
      for (; i < ol; i++) {
        removeAt(elem, cns, i);
      }
    } else if (i < nl) {
      for (; i < nl; i++) {
        insertAt(elem, cns, i, util.joinVd(nbb[i]));
      }
    }
  }

  function diffItem(elem, i, ovd, nvd, isText) {
    var cns = elem.childNodes;

    if (ovd.tagName !== nvd.tagName) {
      replaceWith(cns[i], nvd);
    } else {
      var op = {};

      for (var j = 0, len = ovd.props.length; j < len; j++) {
        var prop = ovd.props[j];

        var _prop = _slicedToArray(prop, 2),
            _k = _prop[0],
            v = _prop[1];

        op[_k] = v;
      }

      for (var _j = 0, _len = nvd.props.length; _j < _len; _j++) {
        var _prop2 = nvd.props[_j];

        var _prop3 = _slicedToArray(_prop2, 2),
            _k2 = _prop3[0],
            v = _prop3[1]; // 已有不等更新，没有添加


        if (op.hasOwnProperty(_k2)) {
          if (op[_k2] !== v) {
            cns[i].setAttribute(_k2, v);
          }

          delete op[_k2];
        } else {
          cns[i].setAttribute(_k2, v);
        }
      } // 多余的删除


      for (var k in op) {
        if (op.hasOwnProperty(k)) {
          cns[i].removeAttribute(k);
        }
      }

      if (isText && ovd.content !== nvd.content) {
        cns[i].textContent = nvd.content;
      }
    }
  }

  function replaceWith(elem, vd) {
    var res;

    if (Array.isArray(vd)) {
      res = '';
      vd.forEach(function (item) {
        res += util.joinVd(item);
      });
    } else {
      res = util.joinVd(vd);
    }

    elem.insertAdjacentHTML('afterend', res);
    elem.parentNode.removeChild(elem);
  }

  function insertAt(elem, cns, index, html) {
    if (index >= cns.length) {
      elem.insertAdjacentHTML('beforeend', html);
    } else {
      cns[index].insertAdjacentHTML('beforebegin', html);
    }
  }

  function removeAt(elem, cns, index) {
    if (cns[index]) {
      elem.removeChild(cns[index]);
    }
  }

  function equalArr(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0, len = a.length; i < len; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  var Defs =
  /*#__PURE__*/
  function () {
    function Defs(uuid) {
      _classCallCheck(this, Defs);

      this.id = uuid;
      this.count = 0;
      this.list = [];
    }

    _createClass(Defs, [{
      key: "add",
      value: function add(data) {
        data.uuid = "karas-defs-".concat(this.id, "-").concat(this.count++);
        this.list.push(data);
        return data.uuid;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.list = [];
        this.count = 0;
      }
    }, {
      key: "value",
      get: function get() {
        return this.list;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(uuid) {
        return new Defs(uuid);
      }
    }]);

    return Defs;
  }();

  function getDom(dom) {
    if (util.isString(dom)) {
      var o = document.querySelector(dom);

      if (!o) {
        throw new Error('can not find dom of selector: ' + dom);
      }

      return o;
    }

    if (!dom) {
      throw new Error('can not find dom: ' + dom);
    }

    return dom;
  }

  function renderProp(k, v) {
    var s = Array.isArray(v) ? util.joinSourceArray(v) : util.stringify(v);

    if (k === 'className') {
      k = 'class';
    }

    return ' ' + k + '="' + util.encodeHtml(s, true) + '"';
  }

  var uuid = 0;

  var Root =
  /*#__PURE__*/
  function (_Dom) {
    _inherits(Root, _Dom);

    function Root(tagName, props, children) {
      var _this;

      _classCallCheck(this, Root);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this, tagName, props, children));
      _this.__node = null; // 真实DOM引用

      return _this;
    }

    _createClass(Root, [{
      key: "__initProps",
      value: function __initProps() {
        if (this.props.width !== undefined) {
          var value = parseInt(this.props.width);

          if (!isNaN(value) && value > 0) {
            this.__width = value;
          }
        }

        if (this.props.height !== undefined) {
          var _value = parseInt(this.props.height);

          if (!isNaN(_value) && _value > 0) {
            this.__height = _value;
          }
        }
      }
    }, {
      key: "__genHtml",
      value: function __genHtml() {
        var res = "<".concat(this.tagName); // 拼接处理属性

        for (var i = 0, len = this.__props.length; i < len; i++) {
          var item = this.__props[i];
          res += renderProp(item[0], item[1]);
        }

        res += "></".concat(this.tagName, ">");
        return res;
      } // 类似touchend/touchcancel这种无需判断是否发生于元素上，直接强制响应

    }, {
      key: "__cb",
      value: function __cb(e, force) {
        if (e.touches && e.touches.length > 1) {
          return;
        }

        var node = this.node;

        var _node$getBoundingClie = node.getBoundingClientRect(),
            x = _node$getBoundingClie.x,
            y = _node$getBoundingClie.y,
            top = _node$getBoundingClie.top,
            right = _node$getBoundingClie.right;

        x = x || top || 0;
        y = y || right || 0;

        var _ref = e.touches ? e.touches[0] || {} : e,
            clientX = _ref.clientX,
            clientY = _ref.clientY;

        x = clientX - x;
        y = clientY - y;

        this.__emitEvent({
          event: e,
          x: x,
          y: y,
          covers: []
        }, force);
      }
    }, {
      key: "__initEvent",
      value: function __initEvent() {
        var _this2 = this;

        var node = this.node;
        ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'touchcancel'].forEach(function (type) {
          node.addEventListener(type, function (e) {
            _this2.__cb(e, ['touchend', 'touchcancel'].indexOf(type) > -1);
          });
        });
      }
    }, {
      key: "appendTo",
      value: function appendTo(dom) {
        dom = getDom(dom);

        this.__initProps(); // 已有root节点


        if (dom.nodeName.toUpperCase() === this.tagName.toUpperCase()) {
          this.__node = dom;

          if (this.width) {
            dom.setAttribute('width', this.width);
          }

          if (this.height) {
            dom.setAttribute('height', this.height);
          }
        } // 没有canvas/svg节点则生成一个新的
        else {
            this.__node = dom.querySelector(this.tagName);

            if (!this.__node) {
              dom.innerHTML = this.__genHtml();
              this.__node = dom.querySelector(this.tagName);
            }
          }

        this.__uuid = this.__node.__uuid || uuid++;
        this.__defs = Defs.getInstance(this.__uuid);

        this.__defs.clear(); // 没有设置width/height则采用css计算形式


        if (!this.width || !this.height) {
          var css = window.getComputedStyle(dom, null);

          if (!this.width) {
            this.__width = parseInt(css.getPropertyValue('width'));
            dom.setAttribute('width', this.width);
          }

          if (!this.height) {
            this.__height = parseInt(css.getPropertyValue('height'));
            dom.setAttribute('height', this.height);
          }
        } // 只有canvas有ctx，svg用真实dom


        var renderMode;

        if (this.tagName === 'canvas') {
          this.__ctx = this.__node.getContext('2d');

          this.__ctx.clearRect(0, 0, this.width, this.height);

          renderMode = mode.CANVAS;
        } else if (this.tagName === 'svg') {
          renderMode = mode.SVG;
        } // canvas/svg作为根节点一定是block或flex，不会是inline


        var style = this.style;

        if (['flex', 'block'].indexOf(style.display) === -1) {
          style.display = 'block';
        } // 同理position不能为absolute


        if (style.position === 'absolute') {
          style.position = 'static';
        }

        this.__traverse(this.__ctx, this.__defs, renderMode); // canvas的宽高固定初始化


        style.width = this.width;
        style.height = this.height;

        this.__initStyle();

        this.__layout({
          x: 0,
          y: 0,
          w: this.width,
          h: this.height
        });

        this.__layoutAbs(this);

        this.render(renderMode);

        if (renderMode === mode.SVG) {
          var nvd = this.virtualDom;
          var nd = this.__defs.value;
          nvd.defs = nd;

          if (this.node.__karasInit) {
            diff(this.node, this.node.__ovd, nvd);
          } else {
            this.node.innerHTML = util.joinVirtualDom(nvd, nd);
          }

          this.node.__ovd = nvd;
          this.node.__od = nd;
        }

        if (!this.node.__karasInit) {
          this.node.__karasInit = true;

          this.__initEvent();
        }
      }
    }, {
      key: "node",
      get: function get() {
        return this.__node;
      }
    }, {
      key: "imageData",
      get: function get() {
        return this.__imageData;
      }
    }]);

    return Root;
  }(Dom);

  var Line =
  /*#__PURE__*/
  function (_Geom) {
    _inherits(Line, _Geom);

    function Line(tagName, props) {
      var _this;

      _classCallCheck(this, Line);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this, tagName, props)); // start和end表明线段的首尾坐标，control表明控制点坐标

      _this.__start = [];
      _this.__end = [];
      _this.__control = [];

      if (Array.isArray(_this.props.start)) {
        _this.__start = _this.props.start;
      }

      if (Array.isArray(_this.props.end)) {
        _this.__end = _this.props.end;
      }

      if (Array.isArray(_this.props.control)) {
        _this.__control = _this.props.control;
      }

      return _this;
    }

    _createClass(Line, [{
      key: "render",
      value: function render(renderMode) {
        _get(_getPrototypeOf(Line.prototype), "render", this).call(this, renderMode);

        var x = this.rx,
            y = this.ry,
            width = this.width,
            height = this.height,
            mlw = this.mlw,
            mtw = this.mtw,
            plw = this.plw,
            ptw = this.ptw,
            style = this.style,
            ctx = this.ctx,
            start = this.start,
            end = this.end,
            control = this.control,
            virtualDom = this.virtualDom;

        if (start.length < 2 || end.length < 2) {
          return;
        }

        var display = style.display,
            borderTopWidth = style.borderTopWidth,
            borderRightWidth = style.borderRightWidth,
            borderBottomWidth = style.borderBottomWidth,
            borderLeftWidth = style.borderLeftWidth,
            stroke = style.stroke,
            strokeWidth = style.strokeWidth,
            strokeDasharray = style.strokeDasharray;

        if (display === 'none') {
          return;
        }

        var originX = x + borderLeftWidth.value + mlw + plw;
        var originY = y + borderTopWidth.value + mtw + ptw;
        var x1 = originX + start[0] * width;
        var y1 = originY + start[1] * height;
        var x2 = originX + end[0] * width;
        var y2 = originY + end[1] * height;
        var curve = 0;
        var cx1, cy1, cx2, cy2;

        if (Array.isArray(control[0])) {
          curve++;
          cx1 = originX + control[0][0] * width;
          cy1 = originY + control[0][1] * height;
        }

        if (Array.isArray(control[1])) {
          curve++;
          cx2 = originX + control[1][0] * width;
          cy2 = originY + control[1][1] * height;
        }

        if (renderMode === mode.CANVAS) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = strokeWidth;
          ctx.setLineDash(strokeDasharray);
          ctx.beginPath();
          ctx.moveTo(x1, y1);

          if (curve === 2) {
            ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);
          } else if (curve === 1) {
            ctx.quadraticCurveTo(cx1, cy1, x2, y2);
          } else {
            ctx.lineTo(x2, y2);
          }

          ctx.stroke();
          ctx.closePath();
        } else if (renderMode === mode.SVG) {
          if (curve === 2) {
            virtualDom.children.push({
              type: 'item',
              tagName: 'path',
              props: [['d', "M".concat(x1, " ").concat(y1, " C").concat(cx1, " ").concat(cy1, " ").concat(cx2, " ").concat(cy2, " ").concat(x2, " ").concat(y2)], ['fill', 'none'], ['stroke', stroke], ['stroke-width', strokeWidth], ['stroke-dasharray', strokeDasharray]]
            });
          } else if (curve === 1) {
            virtualDom.children.push({
              type: 'item',
              tagName: 'path',
              props: [['d', "M".concat(x1, " ").concat(y1, " Q").concat(cx1, " ").concat(cy1, " ").concat(x2, " ").concat(y2)], ['fill', 'none'], ['stroke', stroke], ['stroke-width', strokeWidth], ['stroke-dasharray', strokeDasharray]]
            });
          } else {
            virtualDom.children.push({
              type: 'item',
              tagName: 'line',
              props: [['x1', x1], ['y1', y1], ['x2', x2], ['y2', y2], ['stroke', stroke], ['stroke-width', strokeWidth], ['stroke-dasharray', strokeDasharray]]
            });
          }
        }
      }
    }, {
      key: "start",
      get: function get() {
        return this.__start;
      }
    }, {
      key: "end",
      get: function get() {
        return this.__end;
      }
    }, {
      key: "control",
      get: function get() {
        return this.__control;
      }
    }]);

    return Line;
  }(Geom);

  var Polyline =
  /*#__PURE__*/
  function (_Geom) {
    _inherits(Polyline, _Geom);

    function Polyline(tagName, props) {
      var _this;

      _classCallCheck(this, Polyline);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Polyline).call(this, tagName, props)); // 折线所有点的列表

      _this.__points = [];

      if (Array.isArray(_this.props.points)) {
        _this.__points = _this.props.points;
      } // 原点位置，4个角，默认左下


      if (['TOP_LEFT', 'TOP_RIGHT', 'BOTTOM_LEFT', 'BOTTOM_RIGHT'].indexOf(_this.props.origin) > -1) {
        _this.__origin = _this.props.origin;
      } else {
        _this.__origin = 'BOTTOM_LEFT';
      }

      return _this;
    }

    _createClass(Polyline, [{
      key: "render",
      value: function render(renderMode) {
        _get(_getPrototypeOf(Polyline.prototype), "render", this).call(this, renderMode);

        var x = this.rx,
            y = this.ry,
            width = this.width,
            height = this.height,
            mlw = this.mlw,
            mtw = this.mtw,
            plw = this.plw,
            ptw = this.ptw,
            style = this.style,
            ctx = this.ctx,
            points = this.points,
            origin = this.origin,
            virtualDom = this.virtualDom;

        if (points.length < 2) {
          return;
        }

        for (var i = 0, len = points.length; i < len; i++) {
          if (!Array.isArray(points[i]) || points[i].length < 2) {
            return;
          }
        }

        var display = style.display,
            borderTopWidth = style.borderTopWidth,
            borderLeftWidth = style.borderLeftWidth,
            stroke = style.stroke,
            strokeWidth = style.strokeWidth,
            strokeDasharray = style.strokeDasharray;

        if (display === 'none') {
          return;
        }

        var originX = x + borderLeftWidth.value + mlw + plw;
        var originY = y + borderTopWidth.value + mtw + ptw;
        var pts = this.__pts = [];

        if (origin === 'TOP_LEFT') {
          points.forEach(function (item) {
            pts.push([originX + item[0] * width, originY + item[1] * height]);
          });
        } else if (origin === 'TOP_RIGHT') {
          points.forEach(function (item) {
            pts.push([originX + width - item[0] * width, originY + item[1] * height]);
          });
        } else if (origin === 'BOTTOM_LEFT') {
          points.forEach(function (item) {
            pts.push([originX + item[0] * width, originY + height - item[1] * height]);
          });
        } else if (origin === 'BOTTOM_RIGHT') {
          points.forEach(function (item) {
            pts.push([originX + width - item[0] * width, originY + height - item[1] * height]);
          });
        }

        if (renderMode === mode.CANVAS) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = strokeWidth;
          ctx.setLineDash(strokeDasharray);
          ctx.beginPath();
          ctx.moveTo(pts[0][0], originY + pts[0][1]);

          for (var _i = 1, _len = pts.length; _i < _len; _i++) {
            var point = pts[_i];
            ctx.lineTo(point[0], point[1]);
          }

          if (strokeWidth && stroke !== 'transparent') {
            ctx.stroke();
          }

          ctx.closePath();
        } else if (renderMode === mode.SVG) {
          var _points = '';

          for (var _i2 = 0, _len2 = pts.length; _i2 < _len2; _i2++) {
            var _point = pts[_i2];
            _points += "".concat(_point[0], ",").concat(_point[1], " ");
          }

          virtualDom.children.push({
            type: 'item',
            tagName: 'polyline',
            props: [['points', _points], ['fill', 'none'], ['stroke', stroke], ['stroke-width', strokeWidth], ['stroke-dasharray', strokeDasharray]]
          });
        }
      }
    }, {
      key: "getPointsByX",
      value: function getPointsByX(x) {
        var min = Infinity;
        var len = this.__pts.length;
        var res = [];

        for (var i = 0; i < len; i++) {
          var diff = Math.abs(this.__pts[i][0] - x);

          if (diff < min) {
            min = diff;
          }
        }

        for (var _i3 = 0; _i3 < len; _i3++) {
          var _diff = Math.abs(this.__pts[_i3][0] - x);

          if (_diff === min) {
            res.push({
              index: _i3,
              x: this.__pts[_i3][0],
              y: this.__pts[_i3][1]
            });
          }
        }

        return res;
      }
    }, {
      key: "points",
      get: function get() {
        return this.__points;
      }
    }, {
      key: "origin",
      get: function get() {
        return this.__origin;
      }
    }]);

    return Polyline;
  }(Geom);

  var Polygon =
  /*#__PURE__*/
  function (_Geom) {
    _inherits(Polygon, _Geom);

    function Polygon(tagName, props) {
      var _this;

      _classCallCheck(this, Polygon);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Polygon).call(this, tagName, props)); // 所有点的列表

      _this.__points = [];

      if (Array.isArray(_this.props.points)) {
        _this.__points = _this.props.points;
      }

      return _this;
    }

    _createClass(Polygon, [{
      key: "render",
      value: function render(renderMode) {
        _get(_getPrototypeOf(Polygon.prototype), "render", this).call(this, renderMode);

        var x = this.rx,
            y = this.ry,
            width = this.width,
            height = this.height,
            mlw = this.mlw,
            mtw = this.mtw,
            plw = this.plw,
            ptw = this.ptw,
            style = this.style,
            ctx = this.ctx,
            points = this.points,
            virtualDom = this.virtualDom;

        if (points.length < 3) {
          return;
        }

        for (var i = 0, len = points.length; i < len; i++) {
          if (!Array.isArray(points[i]) || points[i].length < 2) {
            return;
          }
        }

        var display = style.display,
            borderTopWidth = style.borderTopWidth,
            borderLeftWidth = style.borderLeftWidth,
            stroke = style.stroke,
            strokeWidth = style.strokeWidth,
            strokeDasharray = style.strokeDasharray,
            fill = style.fill;

        if (display === 'none') {
          return;
        }

        var originX = x + borderLeftWidth.value + mlw + plw;
        var originY = y + borderTopWidth.value + mtw + ptw;
        points.forEach(function (item) {
          item[0] = originX + item[0] * width;
          item[1] = originY + item[1] * height;
        });

        if (renderMode === mode.CANVAS) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = strokeWidth;
          ctx.fillStyle = fill;
          ctx.setLineDash(strokeDasharray);
          ctx.beginPath();
          ctx.moveTo(points[0][0], originY + points[0][1]);

          for (var _i = 1, _len = points.length; _i < _len; _i++) {
            var point = points[_i];
            ctx.lineTo(point[0], point[1]);
          }

          ctx.fill();

          if (strokeWidth && stroke !== 'transparent') {
            ctx.stroke();
          }

          ctx.closePath();
        } else if (renderMode === mode.SVG) {
          var _points = '';

          for (var _i2 = 0, _len2 = _points.length; _i2 < _len2; _i2++) {
            var _point = _points[_i2];
            _points += "".concat(_point[0], ",").concat(_point[1], " ");
          }

          virtualDom.children.push({
            type: 'item',
            tagName: 'polygon',
            props: [['points', _points], ['fill', fill], ['stroke', stroke], ['stroke-width', strokeWidth], ['stroke-dasharray', strokeDasharray]]
          });
        }
      }
    }, {
      key: "points",
      get: function get() {
        return this.__points;
      }
    }]);

    return Polygon;
  }(Geom);

  var OFFSET = Math.PI * 0.5;

  function getCoordByDegree(x, y, r, d) {
    while (d > 360) {
      d -= 360;
    }

    while (d < 0) {
      d += 360;
    }

    if (d >= 0 && d < 90) {
      return [x + Math.sin(d * Math.PI / 180) * r, y - Math.cos(d * Math.PI / 180) * r];
    } else if (d >= 90 && d < 180) {
      return [x + Math.cos((d - 90) * Math.PI / 180) * r, y + Math.sin((d - 90) * Math.PI / 180) * r];
    } else if (d >= 180 && d < 270) {
      return [x - Math.cos((270 - d) * Math.PI / 180) * r, y + Math.sin((270 - d) * Math.PI / 180) * r];
    } else {
      return [x - Math.sin((360 - d) * Math.PI / 180) * r, y - Math.cos((360 - d) * Math.PI / 180) * r];
    }
  }

  var Sector =
  /*#__PURE__*/
  function (_Geom) {
    _inherits(Sector, _Geom);

    function Sector(tagName, props) {
      var _this;

      _classCallCheck(this, Sector);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Sector).call(this, tagName, props)); // 角度

      _this.__start = 0;
      _this.__end = 0;

      if (_this.props.start) {
        _this.__start = parseFloat(_this.props.start);

        if (isNaN(_this.start)) {
          _this.__start = 0;
        }
      }

      if (_this.props.end) {
        _this.__end = parseFloat(_this.props.end);

        if (isNaN(_this.end)) {
          _this.__end = 0;
        }
      } // 半径0~1，默认1


      _this.__r = 1;

      if (_this.props.r) {
        _this.__r = parseFloat(_this.props.r);

        if (isNaN(_this.r)) {
          _this.__r = 1;
        }
      }

      return _this;
    }

    _createClass(Sector, [{
      key: "render",
      value: function render(renderMode) {
        _get(_getPrototypeOf(Sector.prototype), "render", this).call(this, renderMode);

        var x = this.rx,
            y = this.ry,
            width = this.width,
            height = this.height,
            mlw = this.mlw,
            mtw = this.mtw,
            plw = this.plw,
            ptw = this.ptw,
            style = this.style,
            ctx = this.ctx,
            start = this.start,
            end = this.end,
            r = this.r,
            virtualDom = this.virtualDom;

        if (start === end) {
          return;
        }

        var display = style.display,
            borderTopWidth = style.borderTopWidth,
            borderLeftWidth = style.borderLeftWidth,
            stroke = style.stroke,
            strokeWidth = style.strokeWidth,
            strokeDasharray = style.strokeDasharray,
            fill = style.fill;

        if (display === 'none') {
          return;
        }

        var originX = x + borderLeftWidth.value + mlw + plw;
        var originY = y + borderTopWidth.value + mtw + ptw;
        originX += width * 0.5;
        originY += height * 0.5;
        r *= Math.min(width, height) * 0.5;

        if (renderMode === mode.CANVAS) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = strokeWidth;
          ctx.fillStyle = fill;
          ctx.setLineDash(strokeDasharray);
          ctx.beginPath();
          ctx.moveTo(originX, originY);
          ctx.arc(originX, originY, r, start * Math.PI / 180 - OFFSET, end * Math.PI / 180 - OFFSET);
          ctx.fill();

          if (strokeWidth && stroke !== 'transparent') {
            ctx.stroke();
          }

          ctx.closePath();
        } else if (renderMode === mode.SVG) {
          var x1, y1, x2, y2;

          var _getCoordByDegree = getCoordByDegree(originX, originY, r, start);

          var _getCoordByDegree2 = _slicedToArray(_getCoordByDegree, 2);

          x1 = _getCoordByDegree2[0];
          y1 = _getCoordByDegree2[1];

          var _getCoordByDegree3 = getCoordByDegree(originX, originY, r, end);

          var _getCoordByDegree4 = _slicedToArray(_getCoordByDegree3, 2);

          x2 = _getCoordByDegree4[0];
          y2 = _getCoordByDegree4[1];
          var large = end - start > 180 ? 1 : 0;
          virtualDom.children.push({
            type: 'item',
            tagName: 'path',
            props: [['d', "M".concat(originX, " ").concat(originY, " L").concat(x1, " ").concat(y1, " A").concat(r, " ").concat(r, " 0 ").concat(large, " 1 ").concat(x2, " ").concat(y2, " z")], ['fill', fill], ['stroke', stroke], ['stroke-width', strokeWidth], ['stroke-dasharray', strokeDasharray]]
          });
        }
      }
    }, {
      key: "start",
      get: function get() {
        return this.__start;
      }
    }, {
      key: "end",
      get: function get() {
        return this.__end;
      }
    }, {
      key: "r",
      get: function get() {
        return this.__r;
      }
    }]);

    return Sector;
  }(Geom);

  var Rect =
  /*#__PURE__*/
  function (_Geom) {
    _inherits(Rect, _Geom);

    function Rect(tagName, props) {
      _classCallCheck(this, Rect);

      return _possibleConstructorReturn(this, _getPrototypeOf(Rect).call(this, tagName, props));
    }

    _createClass(Rect, [{
      key: "render",
      value: function render(renderMode) {
        _get(_getPrototypeOf(Rect.prototype), "render", this).call(this, renderMode);

        var x = this.rx,
            y = this.ry,
            width = this.width,
            height = this.height,
            mlw = this.mlw,
            mtw = this.mtw,
            plw = this.plw,
            ptw = this.ptw,
            style = this.style,
            ctx = this.ctx,
            virtualDom = this.virtualDom;
        var display = style.display,
            borderTopWidth = style.borderTopWidth,
            borderLeftWidth = style.borderLeftWidth,
            stroke = style.stroke,
            strokeWidth = style.strokeWidth,
            strokeDasharray = style.strokeDasharray,
            fill = style.fill;

        if (display === 'none') {
          return;
        }

        var originX = x + borderLeftWidth.value + mlw + plw;
        var originY = y + borderTopWidth.value + mtw + ptw;

        if (renderMode === mode.CANVAS) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = strokeWidth;
          ctx.fillStyle = fill;
          ctx.setLineDash(strokeDasharray);
          ctx.beginPath();
          ctx.moveTo(originX, originY);
          ctx.lineTo(originX + width, originY);
          ctx.lineTo(originX + width, originY + height);
          ctx.lineTo(originX, originY + height);
          ctx.fill();

          if (strokeWidth && stroke !== 'transparent') {
            ctx.stroke();
          }

          ctx.closePath();
        } else if (renderMode === mode.SVG) {
          virtualDom.children.push({
            type: 'item',
            tagName: 'rect',
            props: [['x', x], ['y', y], ['width', width], ['height', height], ['fill', fill], ['stroke', stroke], ['stroke-width', strokeWidth], ['stroke-dasharray', strokeDasharray]]
          });
        }
      }
    }]);

    return Rect;
  }(Geom);

  var Circle =
  /*#__PURE__*/
  function (_Geom) {
    _inherits(Circle, _Geom);

    function Circle(tagName, props) {
      var _this;

      _classCallCheck(this, Circle);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Circle).call(this, tagName, props)); // 半径0~1，默认1

      _this.__r = 1;

      if (_this.props.r) {
        _this.__r = parseFloat(_this.props.r);

        if (isNaN(_this.r)) {
          _this.__r = 1;
        }
      }

      return _this;
    }

    _createClass(Circle, [{
      key: "render",
      value: function render(renderMode) {
        _get(_getPrototypeOf(Circle.prototype), "render", this).call(this, renderMode);

        var x = this.rx,
            y = this.ry,
            width = this.width,
            height = this.height,
            mlw = this.mlw,
            mtw = this.mtw,
            plw = this.plw,
            ptw = this.ptw,
            style = this.style,
            ctx = this.ctx,
            r = this.r,
            virtualDom = this.virtualDom;
        var display = style.display,
            borderTopWidth = style.borderTopWidth,
            borderLeftWidth = style.borderLeftWidth,
            stroke = style.stroke,
            strokeWidth = style.strokeWidth,
            strokeDasharray = style.strokeDasharray,
            fill = style.fill;

        if (display === 'none') {
          return;
        }

        var originX = x + borderLeftWidth.value + mlw + plw;
        var originY = y + borderTopWidth.value + mtw + ptw;
        originX += width * 0.5;
        originY += height * 0.5;
        r *= Math.min(width, height) * 0.5;

        if (renderMode === mode.CANVAS) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = strokeWidth;
          ctx.fillStyle = fill;
          ctx.setLineDash(strokeDasharray);
          ctx.beginPath();
          ctx.arc(originX, originY, r, 0, 2 * Math.PI);

          if (fill !== 'transparent') {
            ctx.fill();
          }

          if (strokeWidth && stroke !== 'transparent') {
            ctx.stroke();
          }

          ctx.closePath();
        } else if (renderMode === mode.SVG) {
          virtualDom.children.push({
            type: 'item',
            tagName: 'circle',
            props: [['cx', originX], ['cy', originY], ['r', r], ['fill', fill], ['stroke', stroke], ['stroke-width', strokeWidth], ['stroke-dasharray', strokeDasharray]]
          });
        }
      }
    }, {
      key: "r",
      get: function get() {
        return this.__r;
      }
    }]);

    return Circle;
  }(Geom);

  var Ellipse =
  /*#__PURE__*/
  function (_Geom) {
    _inherits(Ellipse, _Geom);

    function Ellipse(tagName, props) {
      var _this;

      _classCallCheck(this, Ellipse);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Ellipse).call(this, tagName, props)); // 半径0~1，默认1

      _this.__rx = 1;

      if (_this.props.rx) {
        _this.__rx = parseFloat(_this.props.rx);

        if (isNaN(_this.rx)) {
          _this.__rx = 1;
        }
      }

      _this.__ry = 1;

      if (_this.props.ry) {
        _this.__ry = parseFloat(_this.props.ry);

        if (isNaN(_this.rx)) {
          _this.__ry = 1;
        }
      }

      return _this;
    }

    _createClass(Ellipse, [{
      key: "render",
      value: function render(renderMode) {
        _get(_getPrototypeOf(Ellipse.prototype), "render", this).call(this, renderMode);

        var x = this.rx,
            y = this.ry,
            width = this.width,
            height = this.height,
            mlw = this.mlw,
            mtw = this.mtw,
            plw = this.plw,
            ptw = this.ptw,
            style = this.style,
            ctx = this.ctx,
            rx = this.rx,
            ry = this.ry,
            virtualDom = this.virtualDom;
        var display = style.display,
            borderTopWidth = style.borderTopWidth,
            borderLeftWidth = style.borderLeftWidth,
            stroke = style.stroke,
            strokeWidth = style.strokeWidth,
            strokeDasharray = style.strokeDasharray,
            fill = style.fill;

        if (display === 'none') {
          return;
        }

        var originX = x + borderLeftWidth.value + mlw + plw;
        var originY = y + borderTopWidth.value + mtw + ptw;
        originX += width * 0.5;
        originY += height * 0.5;
        rx *= width * 0.5;
        ry *= height * 0.5;

        if (renderMode === mode.CANVAS) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = strokeWidth;
          ctx.fillStyle = fill;
          ctx.setLineDash(strokeDasharray);
          ctx.beginPath();
          ctx.moveTo(originX, originY);
          ctx.ellipse && ctx.ellipse(originX, originY, rx, ry, 0, 0, 2 * Math.PI);
          ctx.fill();

          if (strokeWidth && stroke !== 'transparent') {
            ctx.stroke();
          }

          ctx.closePath();
        } else if (renderMode === mode.SVG) {
          virtualDom.children.push({
            type: 'item',
            tagName: 'ellipse',
            props: [['cx', originX], ['cy', originY], ['rx', rx], ['ry', ry], ['fill', fill], ['stroke', stroke], ['stroke-width', strokeWidth], ['stroke-dasharray', strokeDasharray]]
          });
        }
      }
    }, {
      key: "rx",
      get: function get() {
        return this.__rx;
      }
    }, {
      key: "ry",
      get: function get() {
        return this.__ry;
      }
    }]);

    return Ellipse;
  }(Geom);

  var Grid =
  /*#__PURE__*/
  function (_Geom) {
    _inherits(Grid, _Geom);

    function Grid(tagName, props) {
      var _this;

      _classCallCheck(this, Grid);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Grid).call(this, tagName, props)); // x,y被分为几格

      _this.__nx = 0;

      if (_this.props.nx) {
        _this.__nx = parseFloat(_this.props.nx);

        if (isNaN(_this.nx)) {
          _this.__nx = 0;
        }
      }

      _this.__ny = 0;

      if (_this.props.ny) {
        _this.__ny = parseFloat(_this.props.ny);

        if (isNaN(_this.ny)) {
          _this.__ny = 0;
        }
      }

      return _this;
    }

    _createClass(Grid, [{
      key: "render",
      value: function render(renderMode) {
        _get(_getPrototypeOf(Grid.prototype), "render", this).call(this, renderMode);

        var x = this.rx,
            y = this.ry,
            width = this.width,
            height = this.height,
            mlw = this.mlw,
            mtw = this.mtw,
            plw = this.plw,
            ptw = this.ptw,
            style = this.style,
            ctx = this.ctx,
            nx = this.nx,
            ny = this.ny,
            virtualDom = this.virtualDom;

        if (width <= 0 || height <= 0) {
          return;
        }

        if (nx < 3 && ny < 3) {
          return;
        }

        var display = style.display,
            borderTopWidth = style.borderTopWidth,
            borderLeftWidth = style.borderLeftWidth,
            stroke = style.stroke,
            strokeWidth = style.strokeWidth,
            strokeDasharray = style.strokeDasharray;

        if (display === 'none') {
          return;
        }

        var originX = x + borderLeftWidth.value + mlw + plw;
        var originY = y + borderTopWidth.value + mtw + ptw;
        var endX = originX + width;
        var endY = originY + height;
        var lx = [];
        var ly = [];

        if (nx >= 3) {
          var per = width / (nx - 1);

          for (var i = 0; i < nx; i++) {
            ly.push(originX + i * per);
          }
        }

        if (ny >= 3) {
          var _per = height / (ny - 1);

          for (var _i = 0; _i < ny; _i++) {
            lx.push(originY + _i * _per);
          }
        }

        if (renderMode === mode.CANVAS) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = strokeWidth;
          ctx.setLineDash(strokeDasharray);
          ctx.beginPath();
          lx.forEach(function (item) {
            ctx.moveTo(originX, item);
            ctx.lineTo(endX, item);
          });
          ly.forEach(function (item) {
            ctx.moveTo(item, originY);
            ctx.lineTo(item, endY);
          });

          if (strokeWidth && stroke !== 'transparent') {
            ctx.stroke();
          }

          ctx.closePath();
        } else if (renderMode === mode.SVG) {
          lx.forEach(function (item) {
            virtualDom.children.push({
              type: 'item',
              tagName: 'line',
              props: [['x1', originX], ['y1', item], ['x2', endX], ['y2', item], ['stroke', stroke], ['stroke-width', strokeWidth], ['stroke-dasharray', strokeDasharray]]
            });
          });
          ly.forEach(function (item) {
            virtualDom.children.push({
              type: 'item',
              tagName: 'line',
              props: [['x1', item], ['y1', originY], ['x2', item], ['y2', endY], ['stroke', stroke], ['stroke-width', strokeWidth], ['stroke-dasharray', strokeDasharray]]
            });
          });
        }
      }
    }, {
      key: "nx",
      get: function get() {
        return this.__nx;
      }
    }, {
      key: "ny",
      get: function get() {
        return this.__ny;
      }
    }, {
      key: "dash",
      get: function get() {
        return this.__dash;
      }
    }]);

    return Grid;
  }(Geom);

  Geom.register('$line', Line);
  Geom.register('$polyline', Polyline);
  Geom.register('$polygon', Polygon);
  Geom.register('$sector', Sector);
  Geom.register('$rect', Rect);
  Geom.register('$circle', Circle);
  Geom.register('$ellipse', Ellipse);
  Geom.register('$grid', Grid);
  var karas = {
    render: function render(root, dom) {
      if (!(root instanceof Root)) {
        throw new Error('render root muse be canvas or svg');
      }

      if (dom) {
        root.appendTo(dom);
      }

      return root;
    },
    createVd: function createVd(tagName, props, children) {
      if (['canvas', 'svg'].indexOf(tagName) > -1) {
        return new Root(tagName, props, children);
      }

      if (Dom.isValid(tagName)) {
        return new Dom(tagName, props, children);
      }

      throw new Error('can not use marker: ' + tagName);
    },
    createGm: function createGm(tagName, props) {
      var klass = Geom.getImplement(tagName);
      return new klass(tagName, props);
    },
    createCp: function createCp(cp, props) {
      return new cp(props);
    },
    Geom: Geom,
    mode: mode
  };

  if (typeof window != 'undefined') {
    window.karas = karas;
  }

  return karas;

}));
//# sourceMappingURL=index.js.map
