//Packages
const clear = require('clear-it');
//Modules
const drawNewTable = require('./drawNewTable.js');
const food = require('./food.js');
const gameOver = require('./gameOver.js');
module.exports.run = async (direction, table, moveInterval, fd) => {
    switch (direction) {
        case 'up':
            var oldY = parseInt(table[table.length - 1].split('_')[1], 10);
            var newY = oldY - 1;
            if (newY >= 1) {
                if (!table.includes(parseInt(table[table.length - 1].split('_')[0], 10) + '_' + newY)) {
                    await table.push(table[table.length - 1].split('_')[0] + '_' + newY);
                    if (fd != table[table.length - 2].split('_')[0] + '_' + newY) {
                        table.shift();
                    } else {
                        fd = await food.spawn(table, fd);
                    }
                } else {
                    await clearInterval(moveInterval);
                    await setTimeout(function() {
                        clear();
                    }, 500);
                    gameOver.run();
                }
            } else {
                await clearInterval(moveInterval);
                await setTimeout(function() {
                    clear();
                }, 500);
                gameOver.run();
            }
            break;
        case 'down':
            var oldY = parseInt(table[table.length - 1].split('_')[1], 10);
            var newY = oldY + 1;
            if (newY <= 17) {
                if (!table.includes(parseInt(table[table.length - 1].split('_')[0], 10) + '_' + newY)) {
                    await table.push(table[table.length - 1].split('_')[0] + '_' + newY);
                    if (fd != table[table.length - 2].split('_')[0] + '_' + newY) {
                        table.shift();
                    } else {
                        fd = await food.spawn(table, fd);
                    }
                } else {
                    await clearInterval(moveInterval);
                    await setTimeout(function() {
                        clear();
                    }, 500);
                    gameOver.run();
                }
            } else {
                await clearInterval(moveInterval);
                await setTimeout(function() {
                    clear();
                }, 500);
                gameOver.run();
            }
            break;
        case 'left':
            var oldX = parseInt(table[table.length - 1].split('_')[0], 10);
            var newX = oldX - 1;
            if (newX >= 1) {
                if (!table.includes(newX + '_' + parseInt(table[table.length - 1].split('_')[1], 10))) {
                    await table.push(newX + '_' + parseInt(table[table.length - 1].split('_')[1], 10));
                    if (fd != newX + '_' + table[table.length - 2].split('_')[1], 10) {
                        table.shift();
                    } else {
                        fd = await food.spawn(table, fd);
                    }
                } else {
                    await clearInterval(moveInterval);
                    await setTimeout(function() {
                        clear();
                    }, 500);
                    gameOver.run();
                }
            } else {
                await clearInterval(moveInterval);
                await setTimeout(function() {
                    clear();
                }, 500);
                gameOver.run();
            }
            break;
        case 'right':
            var oldX = parseInt(table[table.length - 1].split('_')[0], 10);
            var newX = oldX + 1;
            if (newX <= 78) {
                if (!table.includes(newX + '_' + parseInt(table[table.length - 1].split('_')[1], 10))) {
                    await table.push(newX + '_' + parseInt(table[table.length - 1].split('_')[1], 10));
                    if (fd != newX + '_' + table[table.length - 2].split('_')[1], 10) {
                        table.shift();
                    } else {
                        fd = await food.spawn(table, fd);
                    }
                } else {
                    await clearInterval(moveInterval);
                    await setTimeout(function() {
                        clear();
                    }, 500);
                    gameOver.run();
                }
            } else {
                await clearInterval(moveInterval);
                await setTimeout(function() {
                    clear();
                }, 500);
                gameOver.run();
            }
            break;
    }
    drawNewTable.run(table, fd);
}