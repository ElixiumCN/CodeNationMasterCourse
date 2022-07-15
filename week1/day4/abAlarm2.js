let day = '';
let alarm = '';

const obj = {
    weekendAlarm: "No alarm needed.",
    weekdayAlarm: "Get up at 7am.",
    days: [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ]
};

function randomDay () {
    day = (obj.days[Math.floor(Math.random() * obj.days.length)]);
};
randomDay();

if (day == obj.days[0] || day == obj.days[6]) {
    alarm = obj.weekendAlarm;
} else if (day == obj.days[1] || obj.days[2] || obj.days[3] || obj.days[4] || obj.days[5]) {
    alarm = obj.weekdayAlarm;
};

console.log(day+':', alarm);