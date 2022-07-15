// Cash machine time!
// Let’s create one that:

// 1. Dispenses cash if your pin number is correct 
// 2. and your balance is equal to, or more than, the amount you’re trying to withdraw!

// 1. check if Userinput integer string is equivalent to pin number const variable.
// 2. check if userinput integer string is equal or more than the account balance const variable.

let accBalance = 1000;
let userPin = 1234

let atMachine = (enteredPin, amount) => {
    if (enteredPin === userPin && amount <= accBalance) {
        accBalance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${accBalance}.`)
    } else if (amount > accBalance) {
    console.log(`You are trying to withdraw ${amount}. Your available balance is ${accBalance}.`)
    } else {
    console.log("Incorrect pin")
    }
}

atMachine(1234, 500);
atMachine(1234, 600);
atMachine(1235, 100);

