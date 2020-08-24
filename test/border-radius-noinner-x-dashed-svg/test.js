var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[{"type":"item","tagName":"rect","props":[["x",60],["y",60],["width",240],["height",200],["fill","rgba(255,0,0,1)"]]},{"type":"item","tagName":"path","props":[["d","M11.129887168889724,11.12988716888973C20.622977774856015,4.090231271859533 34.90773633799029,0 50,0L50,49.99999999999999L0,0M50,0L60,0L60,60L50,49.99999999999999M60,0L172,0L172,60L60,60M188,0L300,0L300,60L188,60M300,0L310,0L310,49.99999999999999L300,60M310,0C325.0922636620097,0 339.377022225144,4.090231271859533 348.8701128311103,11.12988716888973L360,0L310,49.99999999999999"],["fill","rgba(0,0,0,0.5)"]]},{"type":"item","tagName":"path","props":[["d","M348.8701128311103,11.12988716888973C356.07122388827474,16.4699124591653 360,23.130936725759128 360,29.999999999999996L330,30L360,0M330,30L360,30L360,60L300,60M300,60L360,60L360,152L300,152M300,168L360,168L360,260L300,260M300,260L360,260L360,290L330,290M360,290C360,296.8690632742409 356.07122388827474,303.5300875408347 348.8701128311103,308.87011283111025L360,320L330,290"],["fill","rgba(0,0,255,0.5)"]]},{"type":"item","tagName":"path","props":[["d","M11.129887168889724,308.87011283111025C20.622977774856015,315.9097687281405 34.90773633799029,320 50,320L50,270L0,320M50,270L60,260L60,320L50,320M60,260L172,260L172,320L60,320M188,260L300,260L300,320L188,320M300,260L310,270L310,320L300,320M310,320C325.0922636620097,320 339.377022225144,315.9097687281405 348.8701128311103,308.87011283111025L360,320L310,270"],["fill","rgba(255,0,0,0.5)"]]},{"type":"item","tagName":"path","props":[["d","M11.129887168889724,11.12988716888973C3.9287761117252273,16.4699124591653 0,23.130936725759128 0,29.999999999999996L30.000000000000004,30L0,0M0,30L30.000000000000004,30L60,60L0,60M0,60L60,60L60,152L0,152M0,168L60,168L60,260L0,260M0,260L60,260L30.000000000000004,290L0,290M0,290C0,296.8690632742409 3.9287761117252273,303.5300875408347 11.129887168889724,308.87011283111025L0,320L30.000000000000004,290"],["fill","rgba(0,255,0,0.5)"]]}],"children":[],"opacity":1,"type":"dom"}],"opacity":1,"type":"dom","defs":[]}')
      .end();
  }
};
