module.exports.run = async (table, fd) => {
    var line1 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_1') || fd == (x + '_1')) {
            line1.push('#');
        } else {
            line1.push(' ');
        }
    }
    line1.push('#');

    var line2 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_2') || fd == (x + '_2')) {
            line2.push('#');
        } else {
            line2.push(' ');
        }
    }
    line2.push('#');

    var line3 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_3') || fd == (x + '_3')) {
            line3.push('#');
        } else {
            line3.push(' ');
        }
    }
    line3.push('#');

    var line4 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_4') || fd == (x + '_4')) {
            line4.push('#');
        } else {
            line4.push(' ');
        }
    }
    line4.push('#');

    var line5 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_5') || fd == (x + '_5')) {
            line5.push('#');
        } else {
            line5.push(' ');
        }
    } 
    line5.push('#');

    var line6 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_6') || fd == (x + '_6')) {
            line6.push('#');
        } else {
            line6.push(' ');
        }
    } 
    line6.push('#');

    var line7 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_7') || fd == (x + '_7')) {
            line7.push('#');
        } else {
            line7.push(' ');
        }
    } 
    line7.push('#');

    var line8 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_8') || fd == (x + '_8')) {
            line8.push('#');
        } else {
            line8.push(' ');
        }
    } 
    line8.push('#');

    var line9 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_9') || fd == (x + '_9')) {
            line9.push('#');
        } else {
            line9.push(' ');
        }
    } 
    line9.push('#');

    var line10 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_10') || fd == (x + '_10')) {
            line10.push('#');
        } else {
            line10.push(' ');
        }
    } 
    line10.push('#');

    var line11 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_11') || fd == (x + '_11')) {
            line11.push('#');
        } else {
            line11.push(' ');
        }
    } 
    line11.push('#');

    var line12 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_12') || fd == (x + '_12')) {
            line12.push('#');
        } else {
            line12.push(' ');
        }
    } 
    line12.push('#');

    var line13 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_13') || fd == (x + '_13')) {
            line13.push('#');
        } else {
            line13.push(' ');
        }
    } 
    line13.push('#');

    var line14 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_14') || fd == (x + '_14')) {
            line14.push('#');
        } else {
            line14.push(' ');
        }
    } 
    line14.push('#');

    var line15 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_15') || fd == (x + '_15')) {
            line15.push('#');
        } else {
            line15.push(' ');
        }
    } 
    line15.push('#');

    var line16 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_16') || fd == (x + '_16')) {
            line16.push('#');
        } else {
            line16.push(' ');
        }
    } 
    line16.push('#');

    var line17 = ['#'];
    for (var x = 1; x <= 78; x++) {
        if (table.includes(x + '_17') || fd == (x + '_17')) {
            line17.push('#');
        } else {
            line17.push(' ');
        }
    } 
    line17.push('#');

    console.log(`################################################################################
${line1.join('')}
${line2.join('')}
${line3.join('')}
${line4.join('')}
${line5.join('')}
${line6.join('')}
${line7.join('')}
${line8.join('')}
${line9.join('')}
${line10.join('')}
${line11.join('')}
${line12.join('')}
${line13.join('')}
${line14.join('')}
${line15.join('')}
${line16.join('')}
${line17.join('')}
################################################################################
Score: ${table.length - 4}`);
}