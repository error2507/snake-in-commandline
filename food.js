module.exports = {
    spawn(table, fd) {
        var x;
        var y;
        do {
            x = Math.floor(Math.random() * 77) + 2;
            y = Math.floor(Math.random() * 16) + 2;    
        } while (table.includes(x + '_' + y));
        var food = x + '_' + y;
        return food
    }
}