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
