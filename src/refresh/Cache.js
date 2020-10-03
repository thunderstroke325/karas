import Page from './Page';

class Cache {
  constructor(bbox, page, pos) {
    this.__init(bbox, page, pos);
  }

  __init(bbox, page, pos) {
    this.__bbox = bbox;
    this.__page = page;
    this.__pos = pos;
    let [x, y] = page.getCoords(pos);
    // 四周各+1px的扩展
    this.__coords = [x + 1, y + 1];
    page.canvas && (this.__enabled = true);
  }

  clear() {
    this.__available = false;
    if(this.enabled && this.ctx) {
      let [x, y] = this.coords;
      this.ctx.clearRect(x - 1, y - 1, this.page.size, this.page.size);
    }
  }

  release() {
    this.clear();
    this.page.del(this.pos);
    this.__page = null;
  }

  reset(bbox) {
    this.release();
    let w = Math.ceil(bbox[2] - bbox[0]);
    let h = Math.ceil(bbox[3] - bbox[1]);
    // 防止边的精度问题四周各+1px，宽高即+2px
    let res = Page.getInstance(Math.max(w + 2, h + 2));
    if(!res) {
      this.__enabled = false;
      return;
    }
    let { page, pos } = res;
    this.__init(bbox, page, pos);
  }

  // 是否功能可用，生成离屏canvas及尺寸超限
  get enabled() {
    return this.__enabled;
  }

  // 是否有可用缓存内容
  get available() {
    return this.enabled && this.__available;
  }

  get bbox() {
    return this.__bbox;
  }

  get page() {
    return this.__page;
  }

  get canvas() {
    return this.page.canvas;
  }

  get ctx() {
    return this.page.ctx;
  }

  get size() {
    return this.page.size;
  }

  get pos() {
    return this.__pos;
  }

  get coords() {
    return this.__coords;
  }

  static SCORE = 5;

  static getInstance(bbox) {
    let w = Math.ceil(bbox[2] - bbox[0]);
    let h = Math.ceil(bbox[3] - bbox[1]);
    // 防止边的精度问题四周各+1px，宽高即+2px
    let res = Page.getInstance(Math.max(w + 2, h + 2));
    if(!res) {
      return;
    }
    let { page, pos } = res;
    return new Cache(bbox, page, pos);
  }
}

export default Cache;
