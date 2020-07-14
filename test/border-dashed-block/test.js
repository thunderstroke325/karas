var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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')
      // .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};
