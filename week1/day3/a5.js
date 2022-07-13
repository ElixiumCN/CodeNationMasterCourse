// Create a variable, generate a
// random number between 1 and
// 30 six times, each random
// number generated, check if this
// number of divisible by 7 or not.

// let randNum = Math.floor(Math.random() * 30); 

// for (let i = 0; i < 6; i++) {
//     console.log(randNum); 
//     randNum = Math.floor(Math.random() * 30); 
// }

// let randNum = Math.floor(Math.random() * 30); 

for(let i = 0; i < 6; i++){
    let number = Math.floor(Math.random()*30)
    if(number % 7 == 0) {
        console.log(`${number} is divisible by 7`)
    } else {
        console.log(`${number} is not divisible by 7`)
    }
}