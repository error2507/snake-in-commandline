//Packages
const keypress = require('keypress');
const clear = require('clear-it');

//Modules
const start = require('./start.js');
const move = require('./move.js');
const food = require('./food.js');

var direction = 'right'

var table;
var fd;
setup();

async function setup() {
    async function setTable() {
        table = await start.run();
    }
    async function setFoot() {
        fd = await food.spawn(table, fd);
        console.log(fd);
    }
    await setTable();
    await setFoot();
}

var moveInterval = setInterval(function() {
    clear();
    move.run(direction, table, moveInterval, fd);
}, 500);

keypress(process.stdin);

process.stdin.on('keypress', function (ch, key) {
    switch (key.name) {
        case 'up':
            if (direction != 'down') {
                direction = 'up';
            }
            break;
        case 'down':
            if (direction != 'up') {
                direction = 'down';
            }
            break;
        case 'left':
            if (direction != 'right') {
                direction = 'left';
            }
            break;
        case 'right':
            if (direction != 'left') {
                direction = 'right';
            }
            break;
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();