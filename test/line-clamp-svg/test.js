let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",10],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"222"},{"type":"item","tagName":"text","props":[["x",10],["y",42.8828125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"222"}]},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",10],["y",61.28125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"333"},{"type":"item","tagName":"text","props":[["x",10],["y",79.6796875],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"3"}]}],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",10],["y",108.078125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"222"},{"type":"item","tagName":"text","props":[["x",10],["y",126.4765625],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"222"},{"type":"item","tagName":"text","props":[["x",10],["y",144.875],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"2"}]},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",18.90625],["y",144.875],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"33"},{"type":"item","tagName":"text","props":[["x",10],["y",163.2734375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"33"}]}],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",10],["y",191.671875],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"222"}]},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",10],["y",210.0703125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"333"},{"type":"item","tagName":"text","props":[["x",10],["y",228.46875],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"333"},{"type":"item","tagName":"text","props":[["x",10],["y",246.8671875],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"333"},{"type":"item","tagName":"text","props":[["x",10],["y",265.265625],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"3"}]}],"visibility":"visible","type":"dom"},{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",10],["y",283.6640625],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"222"},{"type":"item","tagName":"text","props":[["x",10],["y",302.0625],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"2"},{"type":"item","tagName":"text","props":[["x",18.90625],["y",302.0625],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"…"}]}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",10],["y",340.4609375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"4"},{"type":"item","tagName":"text","props":[["x",18.90625],["y",340.4609375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"…"}]}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",100],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"22222"}]}],"visibility":"visible","type":"dom"},{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",144.53125],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"333333"},{"type":"item","tagName":"text","props":[["x",144.53125],["y",42.8828125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"3333"},{"type":"item","tagName":"text","props":[["x",180.15625],["y",42.8828125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"…"}]}],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom","defs":[]}')
      .end();
  }
};
