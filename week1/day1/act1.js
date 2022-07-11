

// arrays

let down ="   |   |   \n   |   |   \n   |   |   "
let across=
"-----------";

array=[down, across, down, across, down];
console.log(array.join('\n'));

var line = 5

//

// loops: while loop
while (line > 0) {
    if (line == 4 || line == 2) {
        line -= 1;
        console.log("-----------");
    } else {
        line -= 1
        console.log("   |   |   \n   |   |   \n   |   |   ");
    }
}

// console.log('   |    |   ');
// console.log('   |    |   ');
// console.log('   |    |   ');
// console.log('------------');
// console.log('   |    |   ');
// console.log('   |    |   ');
// console.log('   |    |   ');
// console.log('------------');
// console.log('   |    |   ');
// console.log('   |    |   ');
// console.log('   |    |   ');

