var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};
