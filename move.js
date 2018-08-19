//Modules
const drawNewTable = require('./drawNewTable.js');
module.exports = (direction, table) => {
    table.forEach(function(position, index) {
        if (position.endsWith('_end')) {
            var newEnd = table[table.length];
            table.splice(table.length, 1);
            table.push(newEnd + '_end');
        }
        if (position.endsWith(position, index)) {
            switch (direction) {
                case 'y + 1':
                    var x = table[0].split('_').slice(0, 1);
                    var y = parseInt(table[0].split('_').slice(1, 2), 10) + 1;
                    var newFront = x + '_' + y + 'front'
            }
            table.splice(0, 1);
            table.unshift(newFront);
        }
    });
    drawNewTable.run(table);
}