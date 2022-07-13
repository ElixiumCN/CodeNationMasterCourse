let num = 5;

//if it’s divisible by both 3 & 5 log “fizz buzz”
if (num % 3 == 0 && num % 5 == 0){
    console.log("fizz buzz")
// if its divisible only by 5 log "buzz"
} else if (num % 5 == 0) {
    console.log("buzz")
// if its divisible only by 3 log "fizz"
} else if (num % 3 == 0){
    console.log("fizz")
// if none of the above conditions are matched then log the variable.
} else {
    console.log(num)
}

// tested 
// if var = 3 it prints fizz
// if var = 5 it prints buzz
// if var = 15 it prints fizz buzz

// Activity 4:JS
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log
// “fizz buzz” to the console. Otherwise log num to the console.