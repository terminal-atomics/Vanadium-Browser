const blessed = require('blessed');
const fs = require('fs');

module.exports.render = async function() {
    screen.render();
}

module.exports.init = function(screen) {
    let window = blessed.box({
        top: 'center',
        left: 'center',
        width: '100%',
        height: '100%',
        content: 'Terminal Browser',
        tags: true,
        border: {
            type: 'line',
            fg: 'black'
        },
        scrollbar: {
            bg: 'blue'
        },
        focus: {
            bg: 'red'
        },
        hover: {
          bg: 'red'
        },
        style: {
            fg: 'white',
            bg: 'white',
            border: {
                fg: '#f0f0f0'
            }
        }
	});

	let reload = blessed.button({
		
	});

	let forwardButton = blessed.button({

	});

	let backButton = blessed.button({

	});
	
	let searchBar = blessed.input({
		
	});
		
    let menbox = blessed.box({
		top: '-5%',
		left: 0,
		height: '20%',
		width: '100%'
	});
	
	let pageBody = blessed.box({
		top: '20%',
		left: 0,
		height: '80%',
		width: '100%',
	})
	let tinp = blessed.input({

	});

    //trying to make a text box... looking at docs

    screen.title = 'Terminal Browser';
	tinp.append(backButton);
	tinp.append(forwardButton);
	tinp.append(reload);
	menbox.append(tinp);
	window.append(menbox);
	window.append(pageBody)
	screen.append(window);

	return window;
}

/* module.exports.NotSus = function() {
    let i;
    for(i = 0; i < 99; i++) {
        console.log(i);   
    }
} */ 
