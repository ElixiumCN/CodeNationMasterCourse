let alarmSetup = null;
let days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
]
let day = days[Math.floor(Math.random() * days.length)]

const alarm = {
    weekendAlarm: "No alarm needed.",
    weekdayAlarm: "Get up at 7am."
}; 

const checkDay = () => {
    if (day == "Saturday" || day == "Sunday") {
        console.log(`It is ${day}.`)
        day = "weekend";
    } else {
        console.log(`It is ${day}.`)
        day = "weekday"; 
    }
}
const setAlarm = () => {
    if (day == "weekend") {
        alarmSetup = alarm.weekendAlarm; 
    } else if (day == "weekday") {
        alarmSetup = alarm.weekdayAlarm; 
    } else {
        console.log("Error")
    }
    console.log(alarmSetup); 
}
checkDay(); 
setAlarm(); 