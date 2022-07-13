num = "333"

// The split () method is used to split a string
numArray = num.split("")
// The reverse () method reverses the order of the elements in an array
numArrayReversed = numArray.reverse()

// The join () method creates and returns a new string by concatenating all 
// of the elements in an array (or an array-like object ), 
// separated by commas or a specified separator string. 
// If the array has only one item, then that item will be 
// returned without using the separator. Specifies a string to separate 
// each pair of adjacent elements of the array.
// numReversed = numArrayReversed.join("")

if (num == numReversed) {
    console.log("Yes, that's a palindrome.")
} else {
    console.log("None, that's not a palindrome.")
}

// Create a variable called num.
// Check if the number is a palindrome (looks the
// same forward as it does backwards e.g. 1001 or
// 20202).