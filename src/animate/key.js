import enums from '../util/enums';

const { STYLE_KEY } = enums;

const KEY_COLOR = [
  [STYLE_KEY.BACKGROUND_COLOR],
  [STYLE_KEY.BORDER_BOTTOM_COLOR],
  [STYLE_KEY.BORDER_LEFT_COLOR],
  [STYLE_KEY.BORDER_RIGHT_COLOR],
  [STYLE_KEY.BORDER_TOP_COLOR],
  [STYLE_KEY.COLOR],
];

const KEY_LENGTH = [
  [STYLE_KEY.FONT_SIZE],
  [STYLE_KEY.BORDER_BOTTOM_WIDTH],
  [STYLE_KEY.BORDER_LEFT_WIDTH],
  [STYLE_KEY.BORDER_RIGHT_WIDTH],
  [STYLE_KEY.BORDER_TOP_WIDTH],
  [STYLE_KEY.LEFT],
  [STYLE_KEY.TOP],
  [STYLE_KEY.RIGHT],
  [STYLE_KEY.BOTTOM],
  [STYLE_KEY.FLEX_BASIS],
  [STYLE_KEY.WIDTH],
  [STYLE_KEY.HEIGHT],
  [STYLE_KEY.LINE_HEIGHT],
  [STYLE_KEY.MARGIN_BOTTOM],
  [STYLE_KEY.MARGIN_LEFT],
  [STYLE_KEY.MARGIN_TOP],
  [STYLE_KEY.MARGIN_RIGHT],
  [STYLE_KEY.PADDING_TOP],
  [STYLE_KEY.PADDING_RIGHT],
  [STYLE_KEY.PADDING_BOTTOM],
  [STYLE_KEY.PADDING_LEFT],
  [STYLE_KEY.STROKE_WIDTH],
  [STYLE_KEY.STROKE_MITERLIMIT],
];

const KEY_GRADIENT = [
  [STYLE_KEY.BACKGROUND_IMAGE],
  [STYLE_KEY.FILL],
  [STYLE_KEY.STROKE],
];

const KEY_RADIUS = [
  [STYLE_KEY.BORDER_TOP_LEFT_RADIUS],
  [STYLE_KEY.BORDER_TOP_RIGHT_RADIUS],
  [STYLE_KEY.BORDER_BOTTOM_RIGHT_RADIUS],
  [STYLE_KEY.BORDER_BOTTOM_LEFT_RADIUS],
];

const COLOR_HASH = {};
KEY_COLOR.forEach(k => {
  COLOR_HASH[k] = true;
});

const LENGTH_HASH = {};
KEY_LENGTH.forEach(k => {
  LENGTH_HASH[k] = true;
});

const RADIUS_HASH = {};
KEY_RADIUS.forEach(k => {
  RADIUS_HASH[k] = true;
});

const GRADIENT_HASH = {};
KEY_GRADIENT.forEach(k => {
  GRADIENT_HASH[k] = true;
});

const GRADIENT_TYPE = {
  linear: true,
  radial: true,
  conic: true,
};

const KEY_EXPAND = [
  [STYLE_KEY.TRANSLATE_X],
  [STYLE_KEY.TRANSLATE_Y],
  [STYLE_KEY.SKEW_X],
  [STYLE_KEY.SKEW_Y],
  [STYLE_KEY.SCALE_X],
  [STYLE_KEY.SCALE_Y],
  [STYLE_KEY.ROTATE_Z],
];

const EXPAND_HASH = {};
KEY_EXPAND.forEach(k => {
  EXPAND_HASH[k] = true;
});

export default {
  KEY_COLOR,
  KEY_EXPAND,
  KEY_GRADIENT,
  KEY_LENGTH,
  KEY_RADIUS,
  COLOR_HASH,
  EXPAND_HASH,
  GRADIENT_HASH,
  LENGTH_HASH,
  RADIUS_HASH,
  GRADIENT_TYPE,
};
