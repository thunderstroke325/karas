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
