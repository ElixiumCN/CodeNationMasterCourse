pin = 1234
funds = 1000

let wantMoney = (pin, amount) => {
    if (pin == pinNo && funds >= amount) {
        funds -= amount
        console.log(`Thank you, Now dispensing £${amount}. Your new balance is £${funds}. Enjoy your day`);
    } else if (pin != pinNo){
        console.log("Your PIN is incorrect")
    } else{
        console.log("You don't have that much")
    }
}
wantMoney(1234, 200);