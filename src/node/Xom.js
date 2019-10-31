import Node from './Node';
import mode from '../util/mode';
import unit from '../style/unit';
import tf from '../style/transform';
import gradient from '../style/gradient';
import border from '../style/border';
import match from '../style/match';
import css from '../style/css';
import util from '../util/util';
import Component from './Component';
import Animation from '../animate/Animation';

function renderBorder(renderMode, points, color, ctx, xom) {
  if(renderMode === mode.CANVAS) {
    points.forEach(point => {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.moveTo(point[0], point[1]);
      for(let i = 2, len = point.length; i < len; i += 2) {
        ctx.lineTo(point[i], point[i + 1]);
      }
      ctx.fill();
      ctx.closePath();
    });
  }
  else if(renderMode === mode.SVG) {
    let s = '';
    points.forEach(point => {
      s += `M ${point[0]} ${point[1]}`;
      for(let i = 2, len = point.length; i < len; i += 2) {
        s += `L ${point[i]} ${point[i + 1]} `;
      }
    });
    let item = {
      type: 'item',
      tagName: 'path',
      props: [
        ['d', s],
        ['fill', color],
      ],
    };
    xom.addBorder([
      ['d', s],
      ['fill', color],
    ]);
  }
}

class Xom extends Node {
  constructor(tagName, props) {
    super();
    props = props || [];
    // 构建工具中都是arr，手写可能出现hash情况
    if(Array.isArray(props)) {
      this.props = util.arr2hash(props);
      this.__props = props;
    }
    else {
      this.props = props;
      this.__props = util.hash2arr(props);
    }
    this.__tagName = tagName;
    this.__style = this.props.style || {}; // style被解析后的k-v形式
    this.__listener = {};
    this.__props.forEach(item => {
      let k = item[0];
      let v = item[1];
      if(/^on[a-zA-Z]/.test(k)) {
        k = k.slice(2).toLowerCase();
        let arr = this.__listener[k] = this.__listener[k] || [];
        arr.push(v);
      }
      else if(k === 'id' && v) {
        this.__id = v;
      }
      else if(['class', 'className'].indexOf(k) > -1 && v) {
        v = match.splitClass(v);
        if(v) {
          this.__class = v;
        }
      }
    });
    this.__matrix = null;
    this.__matrixEvent = null;
    this.__animation = null;
  }

  // 设置了css时，解析匹配
  __traverseCss(top, css) {
    if(!this.isGeom()) {
      this.children.forEach(item => {
        if(item instanceof Xom || item instanceof Component) {
          item.__traverseCss(top, css);
        }
      });
    }
    // inline拥有最高优先级
    let style = match.parse(this, top, css) || {};
    for(let i in style) {
      if(style.hasOwnProperty(i) && !this.__style.hasOwnProperty(i)) {
        this.__style[i] = style[i];
      }
    }
  }

  __layout(data) {
    let { w } = data;
    let { isDestroyed, computedStyle } = this;
    let {
      display,
      width,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
    } = computedStyle;
    if(isDestroyed || display === 'none') {
      return;
    }
    if(width.unit !== unit.AUTO) {
      switch(width.unit) {
        case unit.PX:
          w = width.value;
          break;
        case unit.PERCENT:
          w *= width.value * 0.01;
          break;
      }
    }
    computedStyle.marginLeft = this.__mpWidth(marginLeft, w);
    computedStyle.marginTop = this.__mpWidth(marginTop, w);
    computedStyle.marginRight = this.__mpWidth(marginRight, w);
    computedStyle.marginBottom = this.__mpWidth(marginBottom, w);
    computedStyle.paddingLeft = this.__mpWidth(paddingLeft, w);
    computedStyle.paddingTop = this.__mpWidth(paddingTop, w);
    computedStyle.paddingRight = this.__mpWidth(paddingRight, w);
    computedStyle.paddingBottom = this.__mpWidth(paddingBottom, w);
    this.__ox = this.__oy = 0;
    this.__matrix = this.__matrixEvent = null;
    if(display === 'block') {
      this.__layoutBlock(data);
    }
    else if(display === 'flex') {
      this.__layoutFlex(data);
    }
    else if(display === 'inline') {
      this.__layoutInline(data);
    }
    // 除root节点外relative渲染时做偏移，百分比基于父元素，若父元素没有定高则为0
    if(computedStyle.position === 'relative' && this.parent) {
      let { top, right, bottom, left } = computedStyle;
      let { parent } = this;
      if(util.isNumber(left)) {
        this.__offsetX(left);
      }
      else if(left.unit === unit.PX) {
        this.__offsetX(left.value);
      }
      else if(left.unit === unit.PERCENT) {
        this.__offsetX(css.calPercentRelative(left.value, parent, 'width', w));
      }
      else if(util.isNumber(right)) {
        this.__offsetX(-right);
        delete computedStyle.right;
      }
      else if(right.unit === unit.PX) {
        this.__offsetX(-right.value);
        delete computedStyle.right;
      }
      else if(right.unit === unit.PERCENT) {
        this.__offsetX(-css.calPercentRelative(right.value, parent, 'width'));
        delete computedStyle.left;
      }
      if(util.isNumber(top)) {
        this.__offsetY(top);
      }
      else if(top.unit === unit.PX) {
        this.__offsetY(top.value);
      }
      else if(top.unit === unit.PERCENT) {
        this.__offsetY(css.calPercentRelative(top.value, parent, 'height'));
      }
      else if(util.isNumber(bottom)) {
        this.__offsetY(-bottom);
        delete computedStyle.top;
      }
      else if(bottom.unit === unit.PX) {
        this.__offsetY(-bottom.value);
        delete computedStyle.top;
      }
      else if(bottom.unit !== unit.AUTO) {
        this.__offsetY(-css.calPercentRelative(bottom.value, parent, 'height'));
        delete computedStyle.top;
      }
    }
    // 计算结果存入computedStyle
    computedStyle.width = this.width;
    computedStyle.height = this.height;
  }

  isGeom() {
    return this.tagName.charAt(0) === '$';
  }

  // 获取margin/padding的实际值，当动画执行时，mp可能为computedStyle，此时已经计算好直接返回
  __mpWidth(mp, w) {
    if(util.isNumber(mp)) {
      return mp;
    }
    else if(mp.unit === unit.PX) {
      return mp.value;
    }
    else if(mp.unit === unit.PERCENT) {
      return mp.value * w * 0.01;
    }
    return 0;
  }

  // 预先计算是否是固定宽高，布局点位和尺寸考虑margin/border/padding
  __preLayout(data) {
    let { x, y, w, h } = data;
    this.__x = x;
    this.__y = y;
    let { computedStyle } = this;
    let {
      width,
      height,
      borderTopWidth,
      borderRightWidth,
      borderBottomWidth,
      borderLeftWidth,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
    } = computedStyle;
    // 除了auto外都是固定宽高度
    let fixedWidth;
    let fixedHeight;
    if(util.isNumber(width)) {
      fixedWidth = true;
      w = width;
    }
    else if(width.unit !== unit.AUTO) {
      fixedWidth = true;
      switch(width.unit) {
        case unit.PX:
          w = width.value;
          break;
        case unit.PERCENT:
          w *= width.value * 0.01;
          break;
      }
    }
    if(util.isNumber(height)) {
      fixedHeight = true;
      h = height;
    }
    else if(height.unit !== unit.AUTO) {
      fixedHeight = true;
      switch(height.unit) {
        case unit.PX:
          h = height.value;
          break;
        case unit.PERCENT:
          h *= height.value * 0.01;
          break;
      }
    }
    // margin/padding/border影响x和y和尺寸
    x += borderLeftWidth + marginLeft + paddingLeft;
    data.x = x;
    y += borderTopWidth + marginTop + paddingTop;
    data.y = y;
    if(width.unit === unit.AUTO) {
      w -= borderLeftWidth + borderRightWidth + marginLeft + marginRight + paddingLeft + paddingRight;
    }
    if(height.unit === unit.AUTO) {
      h -= borderTopWidth + borderBottomWidth + marginTop + marginBottom + paddingTop + paddingBottom;
    }
    return {
      fixedWidth,
      fixedHeight,
      x,
      y,
      w,
      h,
    };
  }

  render(renderMode) {
    this.__renderMode = renderMode;
    if(renderMode === mode.SVG) {
      this.__virtualDom = {
        bb: [],
        children: [],
        transform: [],
      };
    }
    let { isDestroyed, ctx, computedStyle, width, height } = this;
    let parent = this.parent;
    let matrix = [1, 0, 0, 1, 0, 0];
    while(parent) {
      if(parent.matrixEvent) {
        matrix = tf.mergeMatrix(parent.matrixEvent, matrix);
        break;
      }
      parent = parent.parent;
    }
    // canvas继承祖先matrix，没有则恢复默认，防止其它matrix影响；svg则要考虑事件
    if(matrix[0] !== 1
      || matrix[1] !== 0
      || matrix[1] !== 0
      || matrix[1] !== 1
      || matrix[1] !== 0
      || matrix[1] !== 0) {
      if(renderMode === mode.CANVAS) {
        this.__matrix = this.__matrixEvent = matrix;
      }
      else if(renderMode === mode.SVG) {
        this.__matrixEvent = matrix;
      }
    }
    if(renderMode === mode.CANVAS) {
      ctx.setTransform(...matrix);
    }
    let {
      display,
      position,
      top,
      right,
      bottom,
      left,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      backgroundGradient,
      backgroundColor,
      borderTopWidth,
      borderTopColor,
      borderTopStyle,
      borderRightWidth,
      borderRightColor,
      borderRightStyle,
      borderBottomWidth,
      borderBottomColor,
      borderBottomStyle,
      borderLeftWidth,
      borderLeftColor,
      borderLeftStyle,
      transform,
      transformOrigin,
    } = computedStyle;
    if(isDestroyed || display === 'none') {
      return;
    }
    // 使用rx和ry渲染位置，考虑了relative和translate影响
    let { rx: x, ry: y } = this;
    let x1 = x + marginLeft;
    let x2 = x1 + borderLeftWidth;
    let x3 = x2 + width + paddingLeft + paddingRight;
    let x4 = x3 + borderRightWidth;
    let y1 = y + marginTop;
    let y2 = y1 + borderTopWidth;
    let y3 = y2 + height + paddingTop + paddingBottom;
    let y4 = y3 + borderBottomWidth;
    let iw = width + paddingLeft + paddingRight;
    let ih = height + paddingTop + paddingBottom;
    // transform相对于自身
    if(transform) {
      let x4 = x + marginLeft + borderLeftWidth + iw + borderRightWidth + marginRight;
      let y4 = y + marginTop + borderTopWidth + ih + borderBottomWidth + marginBottom;
      let ow = x4 - x;
      let oh = y4 - y;
      let matrix = tf.calMatrix(transform, transformOrigin, x, y, ow, oh);
      // 初始化有可能继承祖先的matrix
      this.__matrix = this.matrix ? tf.mergeMatrix(this.matrix, matrix) : matrix;
      let parent = this.parent;
      while(parent) {
        if(parent.matrixEvent) {
          matrix = tf.mergeMatrix(parent.matrixEvent, matrix);
          break;
        }
        parent = parent.parent;
      }
      this.__matrixEvent = matrix;
      if(renderMode === mode.CANVAS) {
        ctx.setTransform(...matrix);
      }
      else if(renderMode === mode.SVG) {
        this.addTransform(['matrix', this.matrix.join(',')]);
      }
    }
    // 先渲染渐变，没有则背景色
    if(backgroundGradient) {
      let { k, v } = backgroundGradient;
      let cx = x2 + iw * 0.5;
      let cy = y2 + ih * 0.5;
      // 需计算角度 https://www.w3cplus.com/css3/do-you-really-understand-css-linear-gradients.html
      if(k === 'linear') {
        let gd = gradient.getLinear(v, cx, cy, iw, ih);
        if(renderMode === mode.CANVAS) {
          ctx.beginPath();
          ctx.fillStyle = this.__getBgLg(renderMode, gd);
          ctx.rect(x2, y2, iw, ih);
          ctx.fill();
          ctx.closePath();
        }
        else if(renderMode === mode.SVG) {
          let fill = this.__getBgLg(renderMode, gd);
          this.addBackground([
            ['x', x2],
            ['y', y2],
            ['width', iw],
            ['height', ih],
            ['fill', fill]
          ]);
        }
      }
      else if(k === 'radial') {
        let gd = gradient.getRadial(v, cx, cy, x2, y2, x3, y3);
        if(renderMode === mode.CANVAS) {
          ctx.beginPath();
          ctx.fillStyle = this.__getBgRg(renderMode, gd);
          ctx.rect(x2, y2, iw, ih);
          ctx.fill();
          ctx.closePath();
        }
        else if(renderMode === mode.SVG) {
          let fill = this.__getBgRg(renderMode, gd);
          this.addBackground([
            ['x', x2],
            ['y', y2],
            ['width', iw],
            ['height', ih],
            ['fill', fill]
          ]);
        }
      }
    }
    else if(backgroundColor !== 'transparent') {
      if(renderMode === mode.CANVAS) {
        ctx.beginPath();
        ctx.fillStyle = backgroundColor;
        ctx.rect(x2, y2, iw, ih);
        ctx.fill();
        ctx.closePath();
      }
      else if(renderMode === mode.SVG) {
        this.addBackground([
          ['x', x2],
          ['y', y2],
          ['width', iw],
          ['height', ih],
          ['fill', backgroundColor]
        ]);
      }
    }
    // 边框需考虑尖角，两条相交边平分45°夹角
    if(borderTopWidth > 0 && borderTopColor !== 'transparent') {
      let deg1 = Math.atan(borderTopWidth / borderLeftWidth);
      let deg2 = Math.atan(borderTopWidth / borderRightWidth);
      let points = border.calPoints(borderTopWidth, borderTopStyle, deg1, deg2, x1, x2, x3, x4, y1, y2, y3, y4, 0);
      renderBorder(renderMode, points, borderTopColor, ctx, this);
    }
    if(borderRightWidth > 0 && borderRightColor !== 'transparent') {
      let deg1 = Math.atan(borderRightWidth / borderTopWidth);
      let deg2 = Math.atan(borderRightWidth / borderBottomWidth);
      let points = border.calPoints(borderRightWidth, borderRightStyle, deg1, deg2, x1, x2, x3, x4, y1, y2, y3, y4, 1);
      renderBorder(renderMode, points, borderRightColor, ctx, this);
    }
    if(borderBottomWidth > 0 && borderBottomColor !== 'transparent') {
      let deg1 = Math.atan(borderBottomWidth / borderLeftWidth);
      let deg2 = Math.atan(borderBottomWidth / borderRightWidth);
      let points = border.calPoints(borderBottomWidth, borderBottomStyle, deg1, deg2, x1, x2, x3, x4, y1, y2, y3, y4, 2);
      renderBorder(renderMode, points, borderBottomColor, ctx, this);
    }
    if(borderLeftWidth > 0 && borderLeftColor !== 'transparent') {
      let deg1 = Math.atan(borderLeftWidth / borderTopWidth);
      let deg2 = Math.atan(borderLeftWidth / borderBottomWidth);
      let points = border.calPoints(borderLeftWidth, borderLeftStyle, deg1, deg2, x1, x2, x3, x4, y1, y2, y3, y4, 3);
      renderBorder(renderMode, points, borderLeftColor, ctx, this);
    }
  }

  __destroy() {
    let ref = this.props.ref;
    if(ref) {
      let owner = this.host || this.root;
      if(owner && owner.ref[ref]) {
        delete owner.ref[ref];
      }
    }
    super.__destroy();
    this.__matrix = this.__matrixEvent = null;
  }

  // 先查找到注册了事件的节点，再捕获冒泡判断增加性能
  __emitEvent(e, force) {
    let { event: { type }, x, y, covers } = e;
    let { isDestroyed, listener, children, computedStyle, outerWidth, outerHeight, matrixEvent } = this;
    if(isDestroyed || computedStyle.display === 'none' || e.__stopPropagation) {
      return;
    }
    let cb;
    if(listener.hasOwnProperty(type)) {
      cb = listener[type];
    }
    let childWillResponse;
    // touchmove之类强制的直接通知即可
    if(force) {
      if(!this.isGeom()) {
        children.forEach(child => {
          if(child instanceof Xom || child instanceof Component) {
            if(child.__emitEvent(e, force)) {
              childWillResponse = true;
            }
          }
        });
      }
      // touchmove之类也需要考虑target是否是自己以及孩子
      if(!childWillResponse && this.root.__touchstartTarget !== this) {
        return;
      }
      if(e.__stopPropagation) {
        return;
      }
      if(type === 'touchmove' || type === 'touchend' || type === 'touchcancel') {
        e.target = this.root.__touchstartTarget;
      }
      if(cb) {
        cb.forEach(item => {
          if(e.__stopImmediatePropagation) {
            return;
          }
          item(e);
        });
      }
      return true;
    }
    if(!this.isGeom()) {
      // 先响应absolute/relative高优先级，从后往前遮挡顺序
      for(let i = children.length - 1; i >= 0; i--) {
        let child = children[i];
        if(child instanceof Xom && ['absolute', 'relative'].indexOf(child.computedStyle.position) > -1) {
          if(child.__emitEvent(e)) {
            childWillResponse = true;
          }
        }
        // 组件要形成shadowDom，除了shadowRoot，其它节点事件不冒泡
        else if(child instanceof Component && ['absolute', 'relative'].indexOf(child.computedStyle.position) > -1) {
          if(child.__emitEvent(e)) {
            childWillResponse = true;
          }
        }
      }
      // 再看普通流，从后往前遮挡顺序
      for(let i = children.length - 1; i >= 0; i--) {
        let child = children[i];
        if(child instanceof Xom && ['absolute', 'relative'].indexOf(child.computedStyle.position) === -1) {
          if(child.__emitEvent(e)) {
            childWillResponse = true;
          }
        }
        else if(child instanceof Component && ['absolute', 'relative'].indexOf(child.computedStyle.position) === -1) {
          if(child.__emitEvent(e)) {
            childWillResponse = true;
          }
        }
      }
    }
    if(e.__stopPropagation) {
      return;
    }
    // child触发则parent一定触发，否则判断事件坐标是否在节点内且未被遮挡
    if(childWillResponse || this.willResponseEvent(e)) {
      // 根据是否matrix存入遮罩坐标
      covers.push({
        x,
        y,
        w: outerWidth,
        h: outerHeight,
        matrixEvent,
      });
      if(cb) {
        cb.forEach(item => {
          if(e.__stopImmediatePropagation) {
            return;
          }
          if(util.isFunction(item)) {
            item(e);
          }
        });
      }
      return true;
    }
  }

  willResponseEvent(e) {
    let { x, y, covers } = e;
    let { rx, ry, outerWidth, outerHeight, matrixEvent } = this;
    let inThis = tf.pointInQuadrilateral(x - rx, y - ry,
      0, 0,
      outerWidth,0,
      0, outerHeight,
      outerWidth, outerHeight,
      matrixEvent);
    if(inThis) {
      // 不能被遮挡
      for(let i = 0, len = covers.length; i < len; i++) {
        let { x: x2, y: y2, w, h, matrixEvent } = covers[i];
        if(tf.pointInQuadrilateral(x - rx, y - ry,
          x2 - rx, y2 - ry,
          x2 - rx + w,y2 - ry,
          x2 - rx, y2 - ry + h,
          x2 - rx + w, y2 - ry + h,
          matrixEvent)
        ) {
          return;
        }
      }
      if(!e.target) {
        e.target = this;
        // 缓存target给move用
        if(e.event.type === 'touchstart') {
          this.root.__touchstartTarget = this;
        }
      }
      return true;
    }
  }

  __getBgLg(renderMode, gd) {
    if(renderMode === mode.CANVAS) {
      let lg = this.ctx.createLinearGradient(gd.x1, gd.y1, gd.x2, gd.y2);
      gd.stop.forEach(item => {
        lg.addColorStop(item[1], item[0]);
      });
      return lg;
    }
    else if(renderMode === mode.SVG) {
      let uuid = this.defs.add({
        tagName: 'linearGradient',
        props: [
          ['x1', gd.x1],
          ['y1', gd.y1],
          ['x2', gd.x2],
          ['y2', gd.y2]
        ],
        stop: gd.stop,
      });
      return `url(#${uuid})`;
    }
  }

  __getBgRg(renderMode, gd) {
    if(renderMode === mode.CANVAS) {
      let rg = this.ctx.createRadialGradient(gd.cx, gd.cy, 0, gd.cx, gd.cy, gd.r);
      gd.stop.forEach(item => {
        rg.addColorStop(item[1], item[0]);
      });
      return rg;
    }
    else if(renderMode === mode.SVG) {
      let uuid = this.defs.add({
        tagName: 'radialGradient',
        props: [
          ['cx', gd.cx],
          ['cy', gd.cy],
          ['r', gd.r]
        ],
        stop: gd.stop,
      });
      return `url(#${uuid})`;
    }
  }

  addBorder(props) {
    this.virtualDom.bb.push({
      type: 'item',
      tagName: 'path',
      props,
    });
  }

  addBackground(props) {
    this.virtualDom.bb.push({
      type: 'item',
      tagName: 'rect',
      props,
    });
  }

  addTransform(props) {
    this.virtualDom.transform.push(props);
  }

  animate(list, option) {
    if(this.animation) {
      this.animation.cancel();
    }
    let animation = this.__animation = new Animation(this, list, option);
    return animation.play();
  }

  __animateStyle(ns) {
    let { style, computedStyle } = this;
    for(let i in ns) {
      if(ns.hasOwnProperty(i)) {
        computedStyle[i] = ns[i];
      }
    }
    // lineHeight除非是固定，否则也要随着fontSize变化
    css.calLineHeight(this, style.lineHeight, computedStyle);
  }

  get tagName() {
    return this.__tagName;
  }
  get outerWidth() {
    let { computedStyle: {
      borderLeftWidth,
      borderRightWidth,
      marginRight,
      marginLeft,
      paddingRight,
      paddingLeft,
    } } = this;
    return this.width
      + borderLeftWidth
      + borderRightWidth
      + marginLeft
      + marginRight
      + paddingLeft
      + paddingRight;
  }
  get outerHeight() {
    let { computedStyle: {
      borderTopWidth,
      borderBottomWidth,
      marginTop,
      marginBottom,
      paddingTop,
      paddingBottom,
    } } = this;
    return this.height
      + borderTopWidth
      + borderBottomWidth
      + marginTop
      + marginBottom
      + paddingTop
      + paddingBottom;
  }
  get listener() {
    return this.__listener;
  }
  get renderMode() {
    return this.__renderMode;
  }
  get matrix() {
    return this.__matrix;
  }
  get matrixEvent() {
    return this.__matrixEvent;
  }
  get id() {
    return this.__id;
  }
  get class() {
    return this.__class || [];
  }
  get animation() {
    return this.__animation;
  }
}

export default Xom;
