

function endVowel(x){
    const match = x.match(/[aeiou](?!.*[aeiou])/i);
    return match ? match[0] : 'No match';
}

console.log(endVowel('jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'));

// function indexVowel() {
//     let result = endVowel.indexOf

// }


 // Take the string
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the
// index of a last vowel in the string.