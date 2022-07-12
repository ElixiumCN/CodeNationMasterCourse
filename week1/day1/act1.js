

// arrays
// let = modern way of declaring a variable.
// var works but its usually only found in legacy code.

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

let array = []
for (let i = 0; i <= 4;i++){
    
    if(i == 1 || i ==3){
        array.push("-----------");
    } else{
        array.push("   |   |   ");
        array.push("   |   |   ");
        array.push("   |   |   ");
    }
}
console.log(array.join("\n"));

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

