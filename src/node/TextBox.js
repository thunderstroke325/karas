import mode from '../refresh/mode';
import css from '../style/css';
import enums from '../util/enums';
import util from '../util/util';

const { STYLE_KEY: {
  COLOR,
  FONT_WEIGHT,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_STYLE,
  LETTER_SPACING,
  TEXT_STROKE_COLOR,
  TEXT_STROKE_WIDTH,
  TEXT_STROKE_OVER,
} } = enums;

/**
 * 表示一行文本的类，保存它的位置、内容、从属信息，在布局阶段生成，并在渲染阶段被Text调用render()
 * 关系上直属于Text类，一个Text类可能因为换行原因导致有多个TextBox，一行内容中也可能有不同Text从而不同TextBox
 * 另外本类还会被LineBoxManager添加到LineBox里，LineBox为一行中的inline/文本组合，之间需要进行垂直对齐
 * 在textOverflow为ellipsis时，可能会收到后面节点的向前回退（后面不足放下…），使得省略号发生在本节点
 */
class TextBox {
  constructor(parent, index, x, y, w, h, content) {
    this.__parent = parent;
    this.__index = index;
    this.__x = x;
    this.__y = y;
    this.__width = w;
    this.__height = h;
    this.__content = content;
    this.__virtualDom = {};
    this.__parentLineBox = null;
  }

  setEllipsis(fontFamily, fontSize, fontWeight) {
    this.__fontFamily = fontFamily;
    this.__fontSize = fontSize;
    this.__fontWeight = fontWeight;
  }

  setDom(dom) {
    this.__dom = dom;
  }

  /**
   * 渲染阶段被Text类调用，多行Text会有多个TextBox，内容被分拆开
   * @param renderMode
   * @param ctx
   * @param computedStyle
   * @param cacheStyle Text父节点Dom的缓存样式，相比computedStyle可以直接用，比如color被缓存为style字符串
   * @param dx
   * @param dy
   */
  render(renderMode, ctx, computedStyle, cacheStyle, dx, dy) {
    let { content, x, y, parent, width, dom } = this;
    let { ox, oy } = parent;
    y += css.getBaseline(computedStyle);
    x += ox + dx;
    y += oy + dy;
    this.__endX = x + width;
    this.__endY = y;
    // ELLIPSIS使用block的样式
    if(dom) {
      cacheStyle = dom.cacheStyle;
      computedStyle = dom.computedStyle;
    }
    let {
      [LETTER_SPACING]: letterSpacing,
      [TEXT_STROKE_WIDTH]: textStrokeWidth,
      [TEXT_STROKE_COLOR]: textStrokeColor,
    } = computedStyle;
    let i = 0, length = content.length;
    if(renderMode === mode.CANVAS || renderMode === mode.WEBGL) {
      // ellipsis会强行设置
      if(dom) {
        computedStyle = dom.computedStyle;
        let font = css.setFontStyle(computedStyle);
        if(ctx.font !== font) {
          ctx.font = font;
        }
        let color = cacheStyle[COLOR];
        // 渐变
        if(color.k) {
          color = dom.__gradient(renderMode, ctx, dom.__bx1, dom.__by1, dom.__bx2, dom.__by2, color, dx, dy).v;
        }
        if(ctx.fillStyle !== color) {
          ctx.fillStyle = color;
        }
        textStrokeWidth = computedStyle[TEXT_STROKE_WIDTH];
        textStrokeColor = computedStyle[TEXT_STROKE_COLOR];
        let sColor = cacheStyle[TEXT_STROKE_COLOR];
        // 渐变
        if(textStrokeColor.k) {
          sColor = dom.__gradient(renderMode, ctx, dom.__bx1, dom.__by1, dom.__bx2, dom.__by2, textStrokeColor, dx, dy).v;
        }
        if(ctx.strokeStyle !== sColor) {
          ctx.strokeStyle = sColor;
        }
      }
      let overFill = computedStyle[TEXT_STROKE_OVER] === 'fill';
      if(letterSpacing) {
        for(; i < length; i++) {
          let c = content.charAt(i);
          if(overFill) {
            ctx.fillText(c, x, y);
          }
          if(textStrokeWidth && (textStrokeColor[3] > 0 || textStrokeColor.length === 3 || textStrokeColor.k)) {
            ctx.strokeText(c, x, y);
          }
          if(!overFill) {
            ctx.fillText(c, x, y);
          }
          x += ctx.measureText(c).width + letterSpacing;
        }
      }
      else {
        if(overFill) {
          ctx.fillText(content, x, y);
        }
        if(textStrokeWidth && (textStrokeColor[3] > 0 || textStrokeColor.length === 3 || textStrokeColor.k)) {
          ctx.strokeText(content, x, y);
        }
        if(!overFill) {
          ctx.fillText(content, x, y);
        }
      }
    }
    else if(renderMode === mode.SVG) {
      let color = cacheStyle[COLOR];
      if(color.k) {
        let dom = this.parent.parent;
        color = dom.__gradient(renderMode, ctx, dom.__bx1, dom.__by1, dom.__bx2, dom.__by2, color, dx, dy).v;
      }
      let props = [
        ['x', x],
        ['y', y],
        ['fill', color],
        ['font-family', computedStyle[FONT_FAMILY]],
        ['font-weight', computedStyle[FONT_WEIGHT]],
        ['font-style', computedStyle[FONT_STYLE]],
        ['font-size', computedStyle[FONT_SIZE] + 'px'],
      ];
      // svg无法定义stroke的over
      if(textStrokeWidth && (textStrokeColor[3] > 0 || textStrokeColor.length === 3 || textStrokeColor.k)) {
        let textStrokeColor = cacheStyle[TEXT_STROKE_COLOR];
        // 渐变
        if(textStrokeColor.k) {
          let dom = this.parent.parent;
          textStrokeColor = dom.__gradient(renderMode, ctx, dom.__bx1, dom.__by1, dom.__bx2, dom.__by2, textStrokeColor, dx, dy).v;
        }
        props.push(['stroke', textStrokeColor]);
        props.push(['stroke-width', computedStyle[TEXT_STROKE_WIDTH]]);
      }
      if(letterSpacing) {
        props.push(['letter-spacing', letterSpacing]);
      }
      this.__virtualDom = {
        type: 'item',
        tagName: 'text',
        props,
        content: util.encodeHtml(content),
      };
    }
  }

  __offsetX(diff) {
    this.__x += diff;
  }

  __offsetY(diff) {
    this.__y += diff;
  }

  get x() {
    return this.__x;
  }

  get y() {
    return this.__y;
  }

  get endX() {
    return this.__endX;
  }

  get endY() {
    return this.__endY;
  }

  get width() {
    return this.__width;
  }

  get outerWidth() {
    return this.__width;
  }

  get height() {
    return this.__height;
  }

  get outerHeight() {
    return this.__height;
  }

  get content() {
    return this.__content;
  }

  get baseline() {
    return this.parent.baseline;
  }

  get virtualDom() {
    return this.__virtualDom;
  }

  get parent() {
    return this.__parent;
  }

  get parentLineBox() {
    return this.__parentLineBox;
  }

  get isReplaced() {
    return false;
  }

  get dom() {
    return this.__dom;
  }
}

export default TextBox;
