var fs = require('fs');
var html;

/* PARSES states.json INTO A MAP AND WRITES IT TO map.html */
fs.readFile('./states.json', 'utf-8', function(err, states) {
  html = '<map name="states">\n';
  states = JSON.parse(states);
	states.forEach(function(state) {
    html += '<area shape="poly" coords="' + state.coords + '" alt="' + state.name + '" ' + 'id="' + state.code + '">\n';
  });
  html += '</map>'
  fs.writeFileSync('./map.html', html, 'utf-8');
});
