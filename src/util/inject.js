import util from './util';
import debug from './debug';
import font from '../style/font';
import ca from '../gl/ca';
import webgl from '../gl/webgl';

const SPF = 1000 / 60;

const CANVAS = {};
const WEBGL = {};
const CANVAS_LIST = [];
const WEBGL_LIST = [];
const SUPPORT_OFFSCREEN_CANVAS = typeof OffscreenCanvas === 'function' && util.isFunction(OffscreenCanvas.prototype.getContext);

let defaultFontFamilyData;

function cache(key, width, height, hash, message) {
  let o;
  if(!key) {
    let target = hash === CANVAS ? CANVAS_LIST : WEBGL_LIST;
    if(target.length) {
      o = target.pop();
    }
    else {
      o = !debug.flag && SUPPORT_OFFSCREEN_CANVAS ? new OffscreenCanvas(width, height) : document.createElement('canvas');
    }
  }
  else if(!hash[key]) {
    o = hash[key] = !debug.flag && SUPPORT_OFFSCREEN_CANVAS ? new OffscreenCanvas(width, height) : document.createElement('canvas');
  }
  else {
    o = hash[key];
  }
  o.width = width;
  o.height = height;
  if(debug.flag) {
    o.style.width = width + 'px';
    o.style.height = height + 'px';
    o.setAttribute('type', hash === CANVAS ? 'canvas' : 'webgl');
    if(key) {
      o.setAttribute('key', key);
    }
    if(message) {
      o.setAttribute('message', message);
    }
    document.body.appendChild(o);
  }
  let ctx;
  if(hash === CANVAS) {
    ctx = o.getContext('2d');
  }
  else {
    ctx = o.getContext('webgl', ca) || o.getContext('experimental-webgl', ca);
  }
  return {
    canvas: o,
    ctx,
    draw() {
      // 空函数，仅对小程序提供hook特殊处理，flush缓冲
    },
    enabled: true,
    available: true,
    release() {
      if(!key && this.available) {
        if(hash === CANVAS) {
          CANVAS_LIST.push(this.canvas);
        }
        else {
          WEBGL_LIST.push(this.canvas);
        }
      }
      this.available = false;
    },
  };
}

function cacheCanvas(key, width, height, message) {
  return cache(key, width, height, CANVAS, message);
}

function cacheWebgl(key, width, height, message) {
  return cache(key, width, height, WEBGL, message);
}

const IMG = {};
const INIT = 0;
const LOADING = 1;
const LOADED = 2;
const FONT = {};
const COMPONENT = {};
let div;

function createDiv() {
  div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.left = '99999px';
  div.style.top = '-99999px';
  div.style.visibility = 'hidden';
  div.style.whiteSpace = 'nowrap';
  document.body.appendChild(div);
}

let inject = {
  measureTextSync(str, ff, fs, fw) {
    if(!div) {
      createDiv();
    }
    div.style.fontFamily = ff;
    div.style.fontSize = fs + 'px';
    div.style.fontWeight = fw;
    div.innerHTML = str.replace(/</g, '&lt;').replace(/[ \n]/g, '&nbsp;');
    return parseFloat(window.getComputedStyle(div, null).width);
  },
  measureTextListMax(str, ff, fs, fw) {
    if(!div) {
      createDiv();
    }
    div.style.fontFamily = ff;
    div.style.fontSize = fs + 'px';
    div.style.fontWeight = fw;
    let s = '';
    for(let i = 0, len = str.length; i < len; i++) {
      s += '<span style="position:absolute">' + str.charAt(i).replace('<', '&lt;').replace(/[ \n]/, '&nbsp;') + '</span>';
    }
    div.innerHTML = s;
    let max = 0;
    let cns = div.childNodes;
    for(let i = 0, len = cns.length; i < len; i++) {
      let node = cns[i];
      // clientWidth只返回ceil整数，精度必须用getComputedStyle
      max = Math.max(max, parseFloat(window.getComputedStyle(node, null).width));
    }
    return max;
  },
  IMG,
  INIT,
  LOADED,
  LOADING,
  measureImg(url, cb) {
    if(Array.isArray(url)) {
      if(!url.length) {
        return cb();
      }
      let count = 0;
      let len = url.length;
      let list = [];
      url.forEach((item, i) => {
        inject.measureImg(item, function(cache) {
          list[i] = cache;
          if(++count === len) {
            cb(list);
          }
        });
      });
      return;
    }
    else if(!url || !util.isString(url)) {
      inject.error('Measure img invalid: ' + url);
      cb && cb({
        state: LOADED,
        success: false,
        url,
      });
      return;
    }
    let cache = IMG[url] = IMG[url] || {
      state: INIT,
      task: [],
    };
    if(cache.state === LOADED) {
      cb && cb(cache);
    }
    else if(cache.state === LOADING) {
      cb && cache.task.push(cb);
    }
    else {
      cache.state = LOADING;
      cb && cache.task.push(cb);
      let img = new Image();
      img.onload = function() {
        cache.state = LOADED;
        cache.success = true;
        cache.width = img.width;
        cache.height = img.height;
        cache.source = img;
        cache.url = url;
        let list = cache.task.splice(0);
        list.forEach(cb => cb(cache));
      };
      img.onerror = function(e) {
        cache.state = LOADED;
        cache.success = false;
        cache.url = url;
        let list = cache.task.splice(0);
        list.forEach(cb => cb(cache));
      };
      if(url.substr(0, 5) !== 'data:') {
        let host = /^(?:\w+:)?\/\/([^/:]+)/.exec(url);
        if(host) {
          if(typeof location === 'undefined' || location.hostname !== host[1]) {
            img.crossOrigin = 'anonymous';
          }
        }
      }
      img.src = url;
      if(debug.flag && typeof document !== 'undefined') {
        document.body.appendChild(img);
      }
    }
  },
  warn(s) {
    console.warn(s);
  },
  error(s) {
    console.error(s);
  },
  requestAnimationFrame(cb) {
    if(!cb) {
      return;
    }
    let res;
    if(typeof requestAnimationFrame !== 'undefined') {
      inject.requestAnimationFrame = requestAnimationFrame.bind(window);
      res = requestAnimationFrame(cb);
    }
    else {
      res = setTimeout(cb, SPF);
      inject.requestAnimationFrame = function(cb) {
        return setTimeout(cb, SPF);
      };
    }
    return res;
  },
  cancelAnimationFrame(id) {
    let res;
    if(typeof cancelAnimationFrame !== 'undefined') {
      inject.cancelAnimationFrame = cancelAnimationFrame.bind(window);
      res = cancelAnimationFrame(id);
    }
    else {
      res = clearTimeout(id);
      inject.cancelAnimationFrame = function(id) {
        return clearTimeout(id);
      };
    }
    return res;
  },
  now() {
    if(typeof performance !== 'undefined') {
      inject.now = function() {
        return Math.floor(performance.now());
      };
      return Math.floor(performance.now());
    }
    inject.now = Date.now.bind(Date);
    return Date.now();
  },
  hasCacheCanvas(key) {
    return key && CANVAS.hasOwnProperty(key);
  },
  getCacheCanvas(width, height, key, message) {
    return cacheCanvas(key, width, height, message);
  },
  releaseCacheCanvas(o) {
    CANVAS_LIST.push(o);
  },
  delCacheCanvas(key) {
    key && delete CANVAS[key];
  },
  hasCacheWebgl(key) {
    return key && WEBGL.hasOwnProperty(key);
  },
  getCacheWebgl(width, height, key, message) {
    return cacheWebgl(key, width, height, message);
  },
  releaseCacheWebgl(o) {
    WEBGL_LIST.push(o);
  },
  delCacheWebgl(key) {
    key && delete WEBGL[key];
  },
  isDom(o) {
    if(o) {
      if(util.isString(o)) {
        return true;
      }
      if(typeof window !== 'undefined' && window.Element && (o instanceof window.Element)) {
        return true;
      }
      if(typeof window !== 'undefined' && window.OffscreenCanvas && (o instanceof window.OffscreenCanvas)) {
        return true;
      }
      // worker
      if(typeof self !== 'undefined' && self.OffscreenCanvas && (o instanceof self.OffscreenCanvas)) {
        return true;
      }
      if(util.isFunction(o.getElementsByTagName)) {
        return true;
      }
    }
    return false;
  },
  isWebGLTexture(o) {
    if(o && typeof WebGLTexture !== 'undefined') {
      return o instanceof WebGLTexture;
    }
  },
  defaultFontFamily: 'arial',
  getFontCanvas() {
    return inject.getCacheCanvas(16, 16, '__$$CHECK_SUPPORT_FONT_FAMILY$$__');
  },
  checkSupportFontFamily(ff) {
    ff = ff.toLowerCase();
    // 强制arial兜底
    if(ff === this.defaultFontFamily || ff === 'serif' || ff === 'sans-serif' || ff === 'sansserif') {
      return true;
    }
    if(!font.info.hasOwnProperty(ff)) {
      return false;
    }
    if(font.info[ff].hasOwnProperty('checked')) {
      return font.info[ff].checked;
    }
    let canvas = inject.getFontCanvas();
    let context = canvas.ctx;
    context.textAlign = 'center';
    context.fillStyle = '#000';
    context.textBaseline = 'middle';
    if(!defaultFontFamilyData) {
      context.clearRect(0, 0, 16, 16);
      context.font = '16px ' + this.defaultFontFamily;
      context.fillText('a', 8, 8);
      canvas.draw();
      defaultFontFamilyData = context.getImageData(0, 0, 16, 16).data;
    }
    context.clearRect(0, 0, 16, 16);
    context.font = '16px ' + ff;
    context.fillText('a', 8, 8);
    canvas.draw();
    let data = context.getImageData(0, 0, 16, 16).data;
    for(let i = 0, len = data.length; i < len; i++) {
      if(defaultFontFamilyData[i] !== data[i]) {
        return font.info[ff].checked = true;
      }
    }
    return font.info[ff].checked = false;
  },
  loadFont(fontFamily, url, cb) {
    if(util.isFunction(url)) {
      cb = url;
      url = fontFamily;
    }
    if(Array.isArray(url)) {
      if(!url.length) {
        return cb();
      }
      let count = 0;
      let len = url.length;
      let list = [];
      url.forEach((item, i) => {
        inject.loadFont(item.fontFamily, item.url, function(cache) {
          list[i] = cache;
          if(++count === len) {
            cb(list);
          }
        });
      });
      return;
    }
    else if(!url || !util.isString(url)) {
      inject.error('Load font invalid: ' + url);
      cb && cb({
        state: LOADED,
        success: false,
        url,
      });
      return;
    }
    if(!fontFamily) {
      fontFamily = url;
    }
    let cache = FONT[url] = FONT[url] || {
      state: INIT,
      task: [],
    };
    if(cache.state === LOADED) {
      cb && cb(cache);
    }
    else if(cache.state === LOADING) {
      cb && cache.task.push(cb);
    }
    else {
      cache.state = LOADING;
      cb && cache.task.push(cb);
      if(!/url\(/.test(url)) {
        url = `url(${url})`;
      }
      let f = new FontFace(fontFamily, url);
      f.load().then(function() {
        document.fonts.add(f);
        cache.state = LOADED;
        cache.success = true;
        cache.url = url;
        let list = cache.task.splice(0);
        list.forEach(cb => cb(cache));
      }).catch(function() {
        cache.state = LOADED;
        cache.success = false;
        cache.url = url;
        let list = cache.task.splice(0);
        list.forEach(cb => cb(cache));
      });
    }
  },
  loadComponent(url, cb) {
    if(Array.isArray(url)) {
      if(!url.length) {
        return cb();
      }
      let count = 0;
      let len = url.length;
      let list = [];
      url.forEach((item, i) => {
        inject.loadComponent(item, function(cache) {
          list[i] = cache;
          if(++count === len) {
            cb(list);
          }
        });
      });
      return;
    }
    else if(!url || !util.isString(url)) {
      inject.error('Load component invalid: ' + url);
      cb && cb({
        state: LOADED,
        success: false,
        url,
      });
      return;
    }
    let cache = COMPONENT[url] = COMPONENT[url] || {
      state: INIT,
      task: [],
    };
    if(cache.state === LOADED) {
      cb && cb(cache);
    }
    else if(cache.state === LOADING) {
      cb && cache.task.push(cb);
    }
    else {
      cache.state = LOADING;
      cb && cache.task.push(cb);
      let script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.onload = function() {
        cache.state = LOADED;
        cache.success = true;
        cache.url = url;
        let list = cache.task.splice(0);
        list.forEach(cb => cb(cache));
        document.head.removeChild(script);
      };
      script.onerror = function() {
        cache.state = LOADED;
        cache.success = false;
        cache.url = url;
        let list = cache.task.splice(0);
        list.forEach(cb => cb(cache));
        document.head.removeChild(script);
      };
      document.head.appendChild(script);
    }
  },
};

export default inject;
