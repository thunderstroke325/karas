import inject from '../util/inject';
import util from '../util/util';

const { isFunction } = util;

function traversal(list, length, diff, after) {
  if(after) {
    for(let i = 0; i < length; i++) {
      let item = list[i];
      if(item[1]) {
        item[1](diff);
      }
      else {
        item.__after && item.__after(diff);
      }
    }
  }
  else {
    for(let i = 0; i < length; i++) {
      let item = list[i];
      if(item[0]) {
        item[0](diff);
      }
      else {
        item.__before && item.__before(diff);
      }
    }
  }
}

let isPause;

class Frame {
  constructor() {
    this.__hookTask = []; // 动画刷新后，每个root注册的刷新回调执行
    this.__task = [];
    this.__taskCp = []; // 区别于task，component专用，和animate等其它不同流水线，在最后执行，防止混了 #122
    this.__now = null;
  }

  __init() {
    let self = this;
    let { task, taskCp } = self;
    inject.cancelAnimationFrame(self.id);
    let last = self.__now = inject.now();
    function cb() {
      // 必须清除，可能会发生重复，当动画finish回调中gotoAndPlay(0)，下方结束判断发现aTask还有值会继续，新的init也会进入再次执行
      inject.cancelAnimationFrame(self.id);
      self.id = inject.requestAnimationFrame(function() {
        if(isPause || (!task.length && !taskCp.length)) {
          return;
        }
        let now = self.__now = inject.now();
        let diff = now - last;
        diff = Math.max(diff, 0);
        // let delta = diff * 0.06; // 比例是除以1/60s，等同于*0.06
        last = now;
        // 优先动画计算
        let clone = task.slice(0);
        let cloneCp = taskCp.splice(0); // task要常驻，taskCp只1次直接splice清空
        let length = clone.length;
        let lengthCp = cloneCp.length;
        traversal(clone, length, diff, false);
        traversal(cloneCp, lengthCp, diff, false);
        // 执行动画造成的每个Root的刷新并清空
        let list = self.__hookTask.splice(0);
        for(let i = 0, len = list.length; i < len; i++) {
          let item = list[i];
          item && item();
        }
        // 普通的before/after
        traversal(clone, length, diff, true);
        traversal(cloneCp, lengthCp, diff, true);
        // 还有则继续，没有则停止节省性能
        if(task.length || taskCp.length) {
          cb();
        }
      });
    }
    cb();
  }

  onFrame(handle) {
    if(!handle) {
      return;
    }
    let { task } = this;
    if(!task.length) {
      this.__init();
    }
    if(isFunction(handle)) {
      handle = {
        __after: handle,
        __karasFramecb: handle,
      };
    }
    task.push(handle);
  }

  offFrame(handle) {
    if(!handle) {
      return;
    }
    let { task } = this;
    for(let i = 0, len = task.length; i < len; i++) {
      let item = task[i];
      // 需考虑nextFrame包裹的引用对比
      if(item === handle || item.__karasFramecb === handle) {
        task.splice(i, 1);
        break;
      }
    }
    if(!task.length) {
      inject.cancelAnimationFrame(this.id);
      this.__now = null;
    }
  }

  nextFrame(handle) {
    if(!handle) {
      return;
    }
    // 包裹一层会导致添加后删除对比引用删不掉，需保存原有引用进行对比
    let cb = isFunction(handle) ? {
      __after: diff => {
        handle(diff);
        this.offFrame(cb);
      },
    } : {
      __before: handle.__before,
      __after: diff => {
        handle.__after && handle.__after(diff);
        this.offFrame(cb);
      },
    };
    cb.__karasFramecb = handle;
    this.onFrame(cb);
  }

  __nextFrameCp(handle) {
    let { task, taskCp } = this;
    if(!task.length && !taskCp.length) {
      this.__init();
    }
    taskCp.push(handle);
  }

  pause() {
    isPause = true;
  }

  resume() {
    if(isPause) {
      this.__init();
      isPause = false;
    }
  }

  get task() {
    return this.__task;
  }

  get taskCp() {
    return this.__taskCp;
  }
}

export default new Frame();
