//Modules
const drawNewTable = require('./drawNewTable.js');
module.exports.run = async () => {
    await console.log(` 222222222222222    555555555555555555      000000000     77777777777777777777
2:::::::::::::::22  5::::::::::::::::5    00:::::::::00   7::::::::::::::::::7
2::::::222222:::::2 5::::::::::::::::5  00:::::::::::::00 7::::::::::::::::::7
2222222     2:::::2 5:::::555555555555 0:::::::000:::::::0777777777777:::::::7
            2:::::2 5:::::5            0::::::0   0::::::0           7::::::7 
            2:::::2 5:::::5            0:::::0     0:::::0          7::::::7  
         2222::::2  5:::::5555555555   0:::::0     0:::::0         7::::::7   
    22222::::::22   5:::::::::::::::5  0:::::0 000 0:::::0        7::::::7    
  22::::::::222     555555555555:::::5 0:::::0 000 0:::::0       7::::::7     
 2:::::22222                    5:::::50:::::0     0:::::0      7::::::7      
2:::::2                         5:::::50:::::0     0:::::0     7::::::7       
2:::::2             5555555     5:::::50::::::0   0::::::0    7::::::7        
2:::::2       2222225::::::55555::::::50:::::::000:::::::0   7::::::7         
2::::::2222222:::::2 55:::::::::::::55  00:::::::::::::00   7::::::7          
2::::::::::::::::::2   55:::::::::55      00:::::::::00    7::::::7           
22222222222222222222     555555555          000000000     77777777            `);
    //Set all variables in format x_y
    var table = await [
        16 + '_' + 8,
        17 + '_' + 8,
        18 + '_' + 8,
        19 + '_' + 8
    ];
    drawNewTable.run(table);
    return table;
}