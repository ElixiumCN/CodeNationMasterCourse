// gist - lets people share code to people individually
// Let’s create an alarm.
// 1. Create a key called weekendAlarm, with a value saying “no
// alarm needed” 
// 2. And a key called weekdayAlarm, with a value
// saying “get up at 7am”.
// 3. Create a variable called day and one called alarm.
// 4. [If] day is Saturday or Sunday, set alarm to weekendAlarm.
// 5. [If] day is a weekday, set alarm to weekdayAlarm.

let alarmSetting = "";
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// generate integer between 0 and 6 (the length of the days array)
const random = Math.floor(Math.random() * days.length);

const alarm = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
}

// the 5th and 6th items in the array are weekend days
if(random == 5 || random == 6) {
    // update variable
    alarmSetting = alarm.weekendAlarm
} else {
    alarmSetting = alarm.weekdayAlarm
}

console.log(`Its ${days[random]}. ${alarmSetting}`)

//method is a function, function is a method
// function inside an object is a method.
// _underscore naming convention, differentiate between e.g. variable and function for things that have the same name
// make sure things don't change, things can't be accessed improperly.

// asking other developers to not adjust, call, use, etc that specific variable?
// don't ever use integers as keys in key value pairs