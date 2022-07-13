
let num = 333; 
num = num.toString(); 
let numReverse = num.split("").reverse().join("");

if (num == numReverse) {
    console.log(`${num} is a palindrome.`)
} else {
    console.log(`${num} isn't a palindrome.`)
}

// Create a variable called num.
// Check if the number is a palindrome (looks the
// same forward as it does backwards e.g. 1001 or
// 20202).

