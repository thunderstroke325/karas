let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[{"type":"item","tagName":"path","props":[["d","M0,0L200,0L200,114.990234375L0,114.990234375L0,0"],["fill","rgba(255,0,0,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",90.52734375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","100px"]],"content":"jj"}]},{"bb":[{"type":"item","tagName":"path","props":[["d","M44.4376,90.52734375L44.4376,90.52734375L44.4376,90.52734375L44.4376,90.52734375L44.4376,90.52734375"],["fill","rgba(0,0,255,1)"]]}],"children":[],"visibility":"visible","type":"dom"},{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",44.4376],["y",90.52734375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","100px"]],"content":"y"}]},{"bb":[{"type":"item","tagName":"path","props":[["d","M94.4376,90.52734375L94.4376,90.52734375L94.4376,90.52734375L94.4376,90.52734375L94.4376,90.52734375"],["fill","rgba(0,0,255,1)"]]}],"children":[],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom","defs":[]}')
      .end();
  }
};
