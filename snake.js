//Packages
const readlineSync = require('readline-sync');
const keypress = require('keypress');

//Modules
const start = require('./start.js');
const setDirection = require('./setDirection.js')

var table;
setTable();
async function setTable() {
    table = await start.run();
}

keypress(process.stdin);

process.stdin.on('keypress', function (ch, key) {
    switch (key.name) {
        case 'up':
            setDirection.up(table);
            break;
        case 'down':
            sdffsdfs
            break;
        case 'left':
            asdjgjsdjhasg
            break;
        case 'right':
            jbsjdfb
            break;
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();