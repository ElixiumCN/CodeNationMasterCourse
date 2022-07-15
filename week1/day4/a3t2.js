
const dispenseCash = (enteredID, enteredPin, withdrawAmount) => {
    if (enteredID === userId) {
        if (enteredPin == userPin && loginFail < 4) {
            console.log("Pin correct. Loading.");
            if (withdrawAmount <= userBalance) {
                console.log(`Withdrawing £${withdrawAmount}.`);
                userBalance -= withdrawAmount;
                console.log(`Your new balance is £${userBalance}.`)
            } else {
                console.log("Not enough cash.");
            }
        } else if (enteredPin != userPin && loginFail < 3) {
            console.log("Pin incorrect. Try again.");
            loginFail++;
        } else {
            console.log("Tried too many times. Account locked.")
        }
    } else {
        console.log("User ID not recognised.")
    }
}

dispenseCash(0001, 1234, 200);