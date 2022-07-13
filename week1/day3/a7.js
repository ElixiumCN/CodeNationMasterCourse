// Research on do...while loop, find
// out about the difference between
// for loop, while loop and do...while
// loop. Give an example of each.
// What are the pros and cons?

// A While loop will only run whilst a condition is true or not true.

// Example: the code in the loop will run for as long as the variable (num) is less than 10:
let num = 1;
// whilst num is less than 10 [Then] print num [Then] increment num once per loop.
while (num < 10) {
    console.log(num);
    num ++;
}

// Pros: The while loop is useful in a large number of situations 
// where something needs to happen whilst a condition is or isn't true as specified by the expression.
// e.g. whilst the user is holding down the "x" button then do "y".
// Cons: The while loop isn't useful in situations where you need a loop to run immediately regardless of the status of various conditions.

// Example: the code in the loop will run until it reaches the end of the array regardless of any conditions in the program parsing out to be true or false.
let gameList = [
    "Persona 3",
    "Persona 4",
    "Persona 5",
    "Final Fantasy 7",
    "Final Fantasy 10"
]

for (let i = 0; i < gameList.length; i++) {
    console.log(gameList[i]); 
}

// Pros: The for loop is useful when you want to call functionality at any time that isn't dependant on sepcific conditions being true or false.
// Cons: The for loop isn't useful when you want the functionality contained within to trigger only when a condition is either true or false.

// this is a do...while loop
// Pros: It will do something whilst a specified condition is true or false.
// Cons: 
let count = 6;

do {
    count++ 
    console.log(count)
}
while(count != 10);