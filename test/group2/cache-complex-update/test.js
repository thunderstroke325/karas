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
