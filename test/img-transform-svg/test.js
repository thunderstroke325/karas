var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 500)
      .assert.value('input', '{"bb":[],"children":[{"bb":[],"children":[{"type":"img","tagName":"image","props":[["xlink:href","../image.png"],["x",0],["y",0],["width",100],["height",100]]}],"transform":[["matrix","1,0,0,1,50,50"]],"type":"dom"}],"transform":[],"type":"dom","defs":[]}')
      .end();
  }
};
