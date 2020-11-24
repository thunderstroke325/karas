let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};
