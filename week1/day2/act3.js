// how many days until my birthday?
var date1 = new Date();
var birthDay = new Date("04/13/2023");
var Difference_In_Time = birthDay.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
console.log('there are ' + Math.ceil(Difference_In_Days) + ' days until my birthday');