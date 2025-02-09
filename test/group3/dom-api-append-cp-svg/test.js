let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .pause(40)
      .assert.value('input', 'componentDidMount,<defs></defs><g></g><g><g visibility="visible"><g></g><g><g><text x="0" y="14.484375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">1</text></g></g></g><g visibility="visible"><g></g><g><g visibility="visible"><g></g><g><g><text x="0" y="32.8828125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">2</text></g></g></g></g></g></g>,<defs></defs><g></g><g><g visibility="visible"><g></g><g><g><text x="0" y="14.484375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">1</text></g></g></g><g visibility="visible"><g></g><g><g visibility="visible"><g></g><g><g><text x="0" y="32.8828125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">2</text></g></g></g><g visibility="visible"><g></g><g><g><text x="8.90625" y="32.8828125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">3</text></g></g></g></g></g></g>')
      .end();
  }
};
