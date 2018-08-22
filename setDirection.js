const move = require('./move.js');
module.exports = {
    up(table) {
        var direction = 'up';
        move.run(direction, table);
    }
}