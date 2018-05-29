const blessed = require('blessed');
const fs = require('fs');

module.exports.render = async function() {
    screen.render();
}

// wtf does this do
// nothing...
// ???
// i mean, you can tell from title, it's not suspicious...
// 
module.exports.NotSus = function() {
    let i;
    for(i = 0; i < 99; i++) {
        console.log(i);   
    }
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
    var icon = blessed.image({
        parent: window,
        top: 0,
        left: 0,
        type: 'overlay',
        width: 'shrink',
        height: 'shrink',
        file: __dirname + '/my-program-icon.png',
        search: false
    });

    screen.title = 'Terminal Browser';
	screen.append(window);

	return window;
}