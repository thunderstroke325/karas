import Node from './node/Node';
import Text from './node/Text';
import Xom from './node/Xom';
import Dom from './node/Dom';
import Img from './node/Img';
import Root from './node/Root';
import tag from './node/tag';
import mode from './refresh/mode';
import Geom from './node/geom/Geom';
import Line from './node/geom/Line';
import Polyline from './node/geom/Polyline';
import Polygon from './node/geom/Polygon';
import Sector from './node/geom/Sector';
import Rect from './node/geom/Rect';
import Circle from './node/geom/Circle';
import Ellipse from './node/geom/Ellipse';
import Component from './node/Component';
import Event from './util/Event';
import util from './util/util';
import $$type from './util/$$type';
import builder from './util/builder';
import updater from './util/updater';
import inject from './util/inject';
import enums from './util/enums';
import debug from './util/debug';
import parser from './parser/index';
import style from './style/index';
import animate from './animate/index';
import math from './math/index';
import refresh from './refresh/index';
import { version } from '../package.json';

Geom.register('$line', Line);
Geom.register('$polyline', Polyline);
Geom.register('$polygon', Polygon);
Geom.register('$sector', Sector);
Geom.register('$rect', Rect);
Geom.register('$circle', Circle);
Geom.register('$ellipse', Ellipse);

let karas = {
  version,
  render(root, dom) {
    if(!(root instanceof Root)) {
      throw new Error('Render dom must be canvas/svg/webgl');
    }
    if(dom) {
      root.appendTo(dom);
    }
    return root;
  },
  createElement(tagName, props) {
    props = props || {};
    let children = [];
    for(let i = 2, len = arguments.length; i < len; i++) {
      children.push(arguments[i]);
    }
    if(util.isString(tagName)) {
      if(tagName.charAt(0) === '$') {
        return this.createGm(tagName, props);
      }
      else {
        return this.createVd(tagName, props, children);
      }
    }
    else if(tagName) {
      // 特殊的$匿名类
      if(tagName instanceof Geom) {
        return this.createGm(tagName, props);
      }
      return this.createCp(tagName, props, children);
    }
  },
  createVd(tagName, props, children = []) {
    if(['canvas', 'svg', 'webgl'].indexOf(tagName) > -1) {
      return new Root(tagName, props, children);
    }
    if(tag.TAG_NAME.hasOwnProperty(tagName)) {
      return {
        tagName,
        props,
        children,
        $$type: $$type.TYPE_VD,
      };
    }
    throw new Error(`Can not use <${tagName}>`);
  },
  createGm(tagName, props) {
    return {
      tagName,
      props,
      $$type: $$type.TYPE_GM,
    };
  },
  createCp(klass, props, children = []) {
    props.children = children;
    return {
      klass,
      props,
      $$type: $$type.TYPE_CP,
    };
  },
  parse(json, dom, options) {
    return parser.parse(this, json, dom, options);
  },
  loadAndParse(json, dom, options) {
    return parser.loadAndParse(this, json, dom, options);
  },
  mode,
  Component,
  Node,
  Text,
  Geom,
  Xom,
  Dom,
  Img,
  Root,
  Event,
  util,
  inject,
  style,
  parser,
  animate,
  math,
  builder,
  updater,
  refresh,
  enums,
  set debug(v) {
    debug.flag = !!v;
  },
};

builder.ref({
  Xom,
  Dom,
  Img,
  Geom,
  Component,
});

if(typeof window !== 'undefined') {
  window.karas = karas;
}
else if(typeof self !== 'undefined') {
  self.karas = karas;
}

export default karas;
