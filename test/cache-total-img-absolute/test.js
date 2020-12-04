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
