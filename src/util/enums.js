const STYLE_KEY = {
  POSITION: 0,
  DISPLAY: 1,
  TOP: 2,
  RIGHT: 3,
  BOTTOM: 4,
  LEFT: 5,
  MARGIN_TOP: 6,
  MARGIN_RIGHT: 7,
  MARGIN_BOTTOM: 8,
  MARGIN_LEFT: 9,
  PADDING_TOP: 10,
  PADDING_RIGHT: 11,
  PADDING_BOTTOM: 12,
  PADDING_LEFT: 13,
  FONT_SIZE: 14,
  FONT_FAMILY: 15,
  COLOR: 16,
  FONT_STYLE: 17,
  FONT_WEIGHT: 18,
  LINE_HEIGHT: 19,
  BACKGROUND_IMAGE: 20,
  BACKGROUND_COLOR: 21,
  BACKGROUND_SIZE: 22,
  BACKGROUND_REPEAT: 23,
  BACKGROUND_POSITION_X: 24,
  BACKGROUND_POSITION_Y: 25,
  BORDER_TOP_WIDTH: 26,
  BORDER_RIGHT_WIDTH: 27,
  BORDER_BOTTOM_WIDTH: 28,
  BORDER_LEFT_WIDTH: 29,
  BORDER_TOP_COLOR: 30,
  BORDER_RIGHT_COLOR: 31,
  BORDER_BOTTOM_COLOR: 32,
  BORDER_LEFT_COLOR: 33,
  BORDER_TOP_STYLE: 34,
  BORDER_RIGHT_STYLE: 35,
  BORDER_BOTTOM_STYLE: 36,
  BORDER_LEFT_STYLE: 37,
  BORDER_TOP_LEFT_RADIUS: 38,
  BORDER_TOP_RIGHT_RADIUS: 39,
  BORDER_BOTTOM_RIGHT_RADIUS: 40,
  BORDER_BOTTOM_LEFT_RADIUS: 41,
  WIDTH: 42,
  HEIGHT: 43,
  FLEX_GROW: 44,
  FLEX_SHRINK: 45,
  FLEX_BASIS: 46,
  FLEX_DIRECTION: 47,
  JUSTIFY_CONTENT: 48,
  ALIGN_ITEMS: 49,
  ALIGN_SELF: 50,
  TEXT_ALIGN: 51,
  TRANSFORM_ORIGIN: 52,
  VISIBILITY: 53,
  OPACITY: 54,
  Z_INDEX: 55,
  TRANSFORM: 56,
  TRANSLATE_X: 57,
  TRANSLATE_Y: 58,
  SCALE_X: 59,
  SCALE_Y: 60,
  SKEW_X: 61,
  SKEW_Y: 62,
  ROTATE_Z: 63,
  FILTER: 64,
  BOX_SHADOW: 65,
  POINTER_EVENTS: 66,
  OVERFLOW: 67,
  MIX_BLEND_MODE: 68,
  BACKGROUND_CLIP: 69,
  WHITE_SPACE: 70,
  TEXT_OVERFLOW: 71,
  LETTER_SPACING: 72,
  LINE_CLAMP: 73,
  // GEOM
  FILL: 74,
  STROKE: 75,
  STROKE_WIDTH: 76,
  STROKE_DASHARRAY: 77,
  STROKE_DASHARRAY_STR: 78,
  STROKE_LINECAP: 79,
  STROKE_LINEJOIN: 80,
  STROKE_MITERLIMIT: 81,
  FILL_RULE: 82,
  // 无此样式，仅cache需要
  MATRIX: 83,
  BORDER_TOP: 84,
  BORDER_RIGHT: 85,
  BORDER_BOTTOM: 86,
  BORDER_LEFT: 87,
};

function style2Lower(s) {
  return s.replace(/[A-Z]/g, function($0) {
    return $0.toLowerCase();
  }).replace(/_([a-z])/g, function($0, $1) {
    return $1.toUpperCase();
  });
}

function style2Upper(s) {
  return s.replace(/[A-Z]/g, function($0) {
    return '_' + $0.toUpperCase();
  }).replace(/[a-z]/g, function($0) {
    return $0.toUpperCase();
  });
}

const STYLE_R_KEY = {};
const STYLE_RV_KEY = {};
const STYLE_V_KEY = {};
Object.keys(STYLE_KEY).forEach(k => {
  let k2 = STYLE_KEY[k];
  STYLE_R_KEY[k2] = k;
  let l = style2Lower(k);
  STYLE_RV_KEY[k2] = l;
  STYLE_V_KEY[l] = k2;
});

// Root的update过程使用
const UPDATE_KEY = {
  UPDATE_NODE: 0,
  UPDATE_STYLE: 1,
  UPDATE_FOCUS: 2,
  UPDATE_MEASURE: 3,
  UPDATE_COMPONENT: 4,
  UPDATE_IMG: 5,
  UPDATE_OVERWRITE: 6,
  UPDATE_KEYS: 7,
  UPDATE_LIST: 8,
  UPDATE_CONFIG: 9,
};

// animation计算每帧使用
const KEY_FRAME_KEY = {
  FRAME_STYLE: 0,
  FRAME_TIME: 1,
  FRAME_EASING: 2,
  FRAME_TRANSITION: 3,
};

// 节点使用
const NODE_KEY = {
  NODE_DOM_PARENT: 0,
  NODE_OPACITY: 1,
  NODE_MATRIX: 2,
  NODE_MATRIX_EVENT: 3,
  NODE_CACHE: 4,
  NODE_CACHE_TOTAL: 5,
  NODE_CACHE_FILTER: 6,
  NODE_CACHE_MASK: 7,
  NODE_CACHE_OVERFLOW: 8,
  NODE_STRUCT: 9,
  NODE_TAG_NAME: 10,
  NODE_CURRENT_STYLE: 11,
  NODE_CURRENT_PROPS: 12,
  NODE_COMPUTED_STYLE: 13,
  NODE_CACHE_STYLE: 14,
  NODE_CACHE_PROPS: 15,
  NODE_LIMIT_CACHE: 16,
  NODE_IS_MASK: 17,
  NODE_BLUR_VALUE: 18,
  NODE_HAS_CONTENT: 19,
  NODE_REFRESH_LV: 20,
  NODE_IS_DESTROYED: 21,
  NODE_STYLE: 22,
  NODE_UPDATE_HASH: 23,
  NODE_UNIQUE_UPDATE_ID: 24,
  NODE_DEFS_CACHE: 25,
};

// struct用
const STRUCT_KEY = {
  STRUCT_NODE: 0,
  STRUCT_INDEX: 1,
  STRUCT_CHILD_INDEX: 2,
  STRUCT_LV: 3,
  STRUCT_NUM: 4,
  STRUCT_TOTAL: 5,
  STRUCT_HAS_MASK: 6,
};

export default {
  STYLE_KEY, // 大写常量为k，数字为值
  STYLE_R_KEY, // 数字为k，大写常量为值
  STYLE_RV_KEY, // 数字为k，小写为值
  STYLE_V_KEY, // 小写为k，数字为值
  style2Lower,
  style2Upper,
  UPDATE_KEY,
  KEY_FRAME_KEY,
  NODE_KEY,
  STRUCT_KEY,
};
