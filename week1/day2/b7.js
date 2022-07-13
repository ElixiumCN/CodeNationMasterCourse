let myString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'
let vowels =  ['a','e','i','o','u'];

let arr = myString.split("").reverse(); 
let indexOfLastVowelInReverse = arr.findIndex(e => vowels.includes(e))

if(indexOfLastVowelInReverse != -1) {
let index = myString.length-1-indexOfLastVowelInReverse
console.log(`Last vowel found at index ${index}: ${myString[index]}`)
}