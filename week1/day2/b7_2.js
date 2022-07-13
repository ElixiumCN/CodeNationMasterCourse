function findLastVowel(string) {
    let pattern = /[aeiouAEIOU]/gim;
    let result = [...string.match(pattern)]
    return result[result.length - 1]
}

console.log(findLastVowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"))