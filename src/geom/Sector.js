import Geom from './Geom';
import util from '../util/util';
import enums from '../util/enums';
import geom from '../math/geom';
import inject from '../util/inject';

const { STYLE_KEY: {
  PADDING_TOP,
  PADDING_LEFT,
  STROKE_WIDTH,
  BOX_SHADOW,
  FILTER,
} } = enums;
const { isNil } = util;
const { sectorPoints } = geom;

function getR(v, dft) {
  v = parseFloat(v);
  if(isNaN(v)) {
    v = dft;
  }
  return v;
}

class Sector extends Geom {
  constructor(tagName, props) {
    super(tagName, props);
    // 角度
    if(this.isMulti) {
      this.__begin = [0];
      this.__end = [0];
      this.__r = [1];
      if(Array.isArray(props.begin)) {
        this.__begin = props.begin.map(i => getR(i, 0));
      }
      if(Array.isArray(props.end)) {
        this.__end = props.end.map(i => getR(i, 0));
      }
      if(Array.isArray(props.r)) {
        this.__r = props.r.map(i => getR(i, 1));
      }
      if(Array.isArray(props.edge)) {
        this.__edge = props.edge.map(i => !!i);
      }
      if(Array.isArray(props.closure)) {
        this.__closure = props.closure.map(i => !!i);
      }
    }
    else {
      this.__begin = this.__end = 0;
      // 半径[0, ∞)，默认1
      this.__r = 1;
      // 扇形两侧是否有边
      this.__edge = false;
      // 扇形大于180°时，是否闭合两端
      this.__closure = false;
      if(!isNil(props.begin)) {
        this.__begin = getR(props.begin, 0);
      }
      if(!isNil(props.end)) {
        this.__end = getR(props.end, 0);
      }
      if(!isNil(props.r)) {
        this.__r = getR(props.r, 1);
      }
      if(!isNil(props.edge)) {
        this.__edge = !!props.edge;
      }
      if(!isNil(props.closure)) {
        this.__closure = !!props.closure;
      }
    }
  }

  buildCache(cx, cy) {
    let { width, begin, end, r, edge, closure, __cacheProps, isMulti } = this;
    let rebuild;
    if(isNil(__cacheProps.begin)) {
      rebuild = true;
      __cacheProps.begin = (begin || 0) % 360;
    }
    if(isNil(__cacheProps.end)) {
      rebuild = true;
      __cacheProps.end = (end || 0) % 360;
    }
    if(isNil(__cacheProps.r)) {
      rebuild = true;
      if(isMulti) {
        __cacheProps.r = r.map(r => r * width * 0.5);
      }
      else {
        __cacheProps.r = r * width * 0.5;
      }
    }
    r = __cacheProps.r;
    if(isNil(__cacheProps.edge)) {
      rebuild = true;
      __cacheProps.edge = edge;
    }
    if(isNil(__cacheProps.closure)) {
      rebuild = true;
      __cacheProps.closure = closure;
    }
    if(rebuild) {
      if(isMulti) {
        __cacheProps.list = [];
        __cacheProps.sList = [];
        begin.forEach((begin, i) => {
          let r2 = isNil(r[i]) ? width * 0.5 : r[i];
          let list = sectorPoints(cx, cy, r2, parseFloat(begin || 0) % 360, parseFloat(end[i] || 0) % 360);
          let sList = list.slice(0);
          if(closure[i]) {
            list.push(list[0].slice(0));
            if(edge) {
              sList.push(sList[0].slice(0));
            }
          }
          else {
            list.unshift([cx, cy]);
            list.push([cx, cy]);
            if(edge) {
              sList.unshift([cx, cy]);
              sList.push([cx, cy]);
            }
          }
          __cacheProps.list.push(list);
          __cacheProps.sList.push(sList);
        });
      }
      else {
        let list = sectorPoints(cx, cy, r, parseFloat(begin || 0), parseFloat(end || 0));
        let sList = list.slice(0);
        if(closure) {
          list.push(list[0].slice(0));
          if(edge) {
            sList.push(sList[0].slice(0));
          }
        }
        else {
          list.unshift([cx, cy]);
          list.push([cx, cy]);
          if(edge) {
            sList.unshift([cx, cy]);
            sList.push([cx, cy]);
          }
        }
        __cacheProps.list = list;
        __cacheProps.sList = sList;
      }
    }
    return rebuild;
  }

  render(renderMode, lv, ctx, defs, cache) {
    let res = super.render(renderMode, lv, ctx, defs, cache);
    if(res.break) {
      return res;
    }
    this.buildCache(res.cx, res.cy);
    let {
      fill,
      stroke,
      strokeWidth,
      dx,
      dy,
    } = res;
    let { __cacheProps: { list, sList }, isMulti } = this;
    let isFillRE = fill.k === 'radial' && Array.isArray(fill.v);
    let isStrokeRE = strokeWidth > 0 && stroke.k === 'radial' && Array.isArray(stroke.v);
    if(isFillRE || isStrokeRE) {
      if(isFillRE) {
        this.__radialEllipse(renderMode, ctx, defs, list, isMulti, res, 'fill');
      }
      else if(fill !== 'none') {
        this.__drawPolygon(renderMode, ctx, defs, isMulti, list, dx, dy, res, true);
      }
      // stroke椭圆渐变matrix会变形，降级为圆
      if(strokeWidth > 0 && isStrokeRE) {
        inject.warn('Stroke style can not use radial-gradient for ellipse');
        res.stroke = res.stroke.v[0];
        this.__drawPolygon(renderMode, ctx, defs, isMulti, sList, dx, dy, res, false, true);
      }
      else if(strokeWidth > 0 && stroke !== 'none') {
        this.__drawPolygon(renderMode, ctx, defs, isMulti, sList, dx, dy, res, false, true);
      }
    }
    else {
      if(fill !== 'none') {
        this.__drawPolygon(renderMode, ctx, defs, isMulti, list, dx, dy, res, true, false);
      }
      if(stroke !== 'none') {
        this.__drawPolygon(renderMode, ctx, defs, isMulti, sList, dx, dy, res, false, true);
      }
    }
    return res;
  }

  __genSector(edge, d, fill, stroke, strokeWidth, strokeDasharrayStr, strokeLinecap, strokeLinejoin, strokeMiterlimit) {
    if(edge) {
      let props = [
        ['d', d[0]],
        ['fill', fill.v || fill],
        ['stroke', stroke.v || stroke],
        ['stroke-width', strokeWidth],
      ];
      this.__propsStrokeStyle(props, strokeDasharrayStr, strokeLinecap, strokeLinejoin, strokeMiterlimit);
      this.addGeom('path', props);
    }
    else {
      this.addGeom('path', [
        ['d', d[0]],
        ['fill', fill.v || fill],
      ]);
      if(strokeWidth > 0) {
        let props = [
          ['d', d[1]],
          ['fill', 'none'],
          ['stroke', stroke.v || stroke],
          ['stroke-width', strokeWidth],
        ];
        this.__propsStrokeStyle(props, strokeDasharrayStr, strokeLinecap, strokeLinejoin, strokeMiterlimit);
        this.addGeom('path', props);
      }
    }
  }

  get begin() {
    return this.getProps('begin');
  }

  get end() {
    return this.getProps('end');
  }

  get r() {
    return this.getProps('r');
  }

  get edge() {
    return this.getProps('edge');
  }

  // >180°时是否链接端点
  get closure() {
    return this.getProps('closure');
  }

  get bbox() {
    let {
      isMulti, __cacheProps,
      __sx2, __sy2, width, height,
      computedStyle: {
        [PADDING_TOP]: paddingTop,
        [PADDING_LEFT]: paddingLeft,
        [STROKE_WIDTH]: strokeWidth,
        [BOX_SHADOW]: boxShadow,
        [FILTER]: filter,
      } } = this;
    let originX = __sx2 + paddingLeft;
    let originY = __sy2 + paddingTop;
    let cx = originX + width * 0.5;
    let cy = originY + height * 0.5;
    this.buildCache(cx, cy);
    let r = 0;
    if(isMulti) {
      let max = 0;
      __cacheProps.r.forEach(r => {
        max = Math.max(r, max);
      });
      r = max;
    }
    else {
      r = __cacheProps.r;
    }
    let bbox = super.bbox;
    let half = strokeWidth * 0.5;
    let [ox, oy] = this.__spreadByBoxShadowAndFilter(boxShadow, filter);
    ox += half;
    oy += half;
    let xa = cx - r - ox;
    let xb = cx + r + ox;
    let ya = cy - r - oy;
    let yb = cy + r + oy;
    bbox[0] = Math.min(bbox[0], xa);
    bbox[1] = Math.min(bbox[1], ya);
    bbox[2] = Math.max(bbox[2], xb);
    bbox[3] = Math.max(bbox[3], yb);
    return bbox;
  }
}

export default Sector;
