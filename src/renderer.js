const blessed = require('blessed');
const fs = require('fs');

module.exports.render = async function() {
    screen.render();
}

module.exports.init = function(screen) {
    var window = blessed.box({
        top: 'center',
        left: 'center',
        width: '100%',
        height: '100%',
        content: 'Terminal Browser',
        tags: true,
        border: {
            type: 'line'
        },
        style: {
            fg: 'white',
            bg: 'magenta',
            border: {
                fg: '#f0f0f0'
            },
            hover: {
                bg: 'green'
            }
        }
    });

    screen.title = 'Terminal Browser';
	screen.append(window);

	return window;
}

/* module.exports.NotSus = function() {
    let i;
    for(i = 0; i < 99; i++) {
        console.log(i);   
    }
} */ 
