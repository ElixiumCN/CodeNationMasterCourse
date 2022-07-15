let userPin = 1234;
let userBalance = 500;

const pinTest = (enteredPin) => {
    if (enteredPin == userPin) {
        console.log("Correct Pin");

    }
}

// not actually accepting userinput, we are manually filling the arguments here in the function call to test the code.
// passing argument to parameter
pinTest(1234);