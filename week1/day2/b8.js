function firstLastLetters(word)
    {
        let i = word.length;
        if (i < 2)
            return -1;
        if (word[0] == word[i - 1])
            return 1;
        else
            return 0;
    }

    // swap reuturn 1/0 for booleans true and false?

    let word = "56456456";
    let res = firstLastLetters(word);

    if (res == -1)
        console.log("Invalid Input");
    else if (res == 1)
        console.log("Equal");
    else
        console.log("Not Equal");

// Create a variable called word that takes a string. Create
// an if statement that checks if the last letter is the same as
// the first. If it is return true, otherwise return false.

// let word = "flower";

// let str = "something";
// let firstChar = str.charAt(0);
// let lastChar = str.charAt(length-1);
// console.log(firstChar===lastChar);