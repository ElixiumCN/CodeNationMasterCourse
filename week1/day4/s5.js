// This is a function declaration
// Question: Why use variables to declare functions.
// Adds confusion, the only value is reducing wordiness of code.

function square(number) {
    return number * number;
};

square(5);

//
// Expression(2): 
// anonymous function
// 'Anonymous function. Used when defining a function within a function, that doesn't have any use outside of where it was defined.'
// for functions within a function.
// Anonymous functions for Nested functions

const square = function(number) {
    return number * number;
};

square(5);

