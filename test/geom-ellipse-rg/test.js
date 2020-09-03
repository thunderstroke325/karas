var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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QCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQKbPGXEAAAnVSURBVCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAgh0DFHCRghAIEkCCHSSYcdpCEAgBgIIdAxRwkYIQCBJAgh0kmHHaQhAIAYCCHQMUcJGCEAgSQIIdJJhx2kIQCAGAv8fVHK/lU0ea/wAAAAASUVORK5CYII=')
      .end();
  }
};
