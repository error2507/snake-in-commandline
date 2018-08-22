//Modules
const drawNewTable = require('./drawNewTable.js');
module.exports.run = (direction, table) => {
    table.shift();
    switch(direction) {
        case 'up':
            table.push(table[table.length - 1].split('_').slice(1) + '_' + parseInt(table[table.length - 1].split('_').slice(1)) + 1);
    }
    drawNewTable.run(table);
}