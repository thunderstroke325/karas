let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '<defs></defs><g></g><g><g visibility="visible"><g></g><g><g><text x="10" y="24.484375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">222</text><text x="10" y="42.8828125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">222</text></g><g visibility="visible"><g></g><g><g><text x="10" y="61.28125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">3</text><text x="18.90625" y="61.28125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g></g></g><g visibility="visible"><g></g><g><g><text x="10" y="89.6796875" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">222</text><text x="10" y="108.078125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">222</text><text x="10" y="126.4765625" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">2</text></g><g visibility="visible"><g></g><g><g><text x="18.90625" y="126.4765625" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g></g></g><g visibility="visible"><g></g><g><g><text x="10" y="154.875" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">222</text></g><g visibility="visible"><g></g><g><g><text x="10" y="173.2734375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">333</text><text x="10" y="191.671875" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">333</text><text x="10" y="210.0703125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">333</text><text x="10" y="228.46875" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">3</text></g></g></g><g><text x="10" y="246.8671875" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">222</text><text x="10" y="265.265625" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">2</text><text x="18.90625" y="265.265625" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g><g visibility="visible"><g></g><g><g><text x="10" y="303.6640625" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">4</text><text x="18.90625" y="303.6640625" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g><g visibility="visible"><g></g><g><g visibility="visible"><g></g><g><g><text x="100" y="24.484375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">22222</text></g></g></g><g><text x="144.5" y="24.484375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">333333</text><text x="144.5" y="42.8828125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">3333</text><text x="180.0938" y="42.8828125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g></g>')
      .end();
  }
};
