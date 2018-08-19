const move = require('./move.js');
module.exports = {
    up(table) {
        var direction = 'y + 1';
        move.run(direction, table);
    }
}