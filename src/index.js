const blessed = require('blessed');
const fs = require('fs');

const render = require('./renderer');

/*
	Linting:

	Tabs - 4 spaces
	Same line bracing
	Honestly just look around the code base and imitate the style
	use Let var types pls

	Make sure your code is:

	1. Functional
	2. Maintainable and Scalable
	3. Readable
*/

let screen = blessed.screen({
    smartCSR: true
});

let window = render.init(screen);

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
});

window.focus();
 
screen.render();
