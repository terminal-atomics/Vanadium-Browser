const blessed = require('blessed');


var screen = blessed.screen({
    smartCSR: true
  });
   
  screen.title = 'Terminal Browser';
   
  // Create a box perfectly centered horizontally and vertically.
  var box = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
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
   
  // Append our box to the screen.
  screen.append(box);
   
  // Add a png icon to the box
  var icon = blessed.image({
    parent: box,
    top: 0,
    left: 0,
    type: 'overlay',
    width: 'shrink',
    height: 'shrink',
    file: __dirname + '/my-program-icon.png',
    search: false
  });
   
  // If our box is clicked, change the content.
  box.on('click', function(data) {
    box.setContent('W o a h');
    screen.render();
  });
   
  // If box is focused, handle `enter`/`return` and give us some more content.
  box.key('enter', function(ch, key) {
    box.setContent('s l i d e  t o  t h e  r i g h t');
    box.setLine(1, 'Test1');
    box.insertLine(1, 'Test2');
    screen.render();
  });
   
  // Quit on Escape, q, or Control-C.
  screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
  });
   
  // Focus our element.
  box.focus();
   
  // Render the screen.
  screen.render();