/*
	Linting:

	Tabs - 4 spaces
	Same line bracing
	Honestly just look around the code base and imitate the style
	Use Let var types pls
	Use '' for strings and if needed ``
	Keep code well commented

	Make sure your code is:

	1. Functional
	2. Maintainable and Scalable [Impossible]
	3. Readable
*/
const blessed = require('blessed');
const fs = require('fs');

const render = require('./renderer');


let screen = blessed.screen({
    smartCSR: true
});

let window = render.init(screen);

screen.key(['escape', 'C-c'], function(ch, key) {
    return process.exit(0);
});

window.focus();
 
screen.render();
