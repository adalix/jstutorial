//dates & times
const now = new Date();

console.log(now);
console.log(typeof now);

// year, months, day, times

console.log('getFullYear :', now.getFullYear()); //2024
console.log('getMonth :', now.getMonth()); // 0
console.log('getDate :', now.getDate()); // 28
console.log('getDay :', now.getDay()); // 0
console.log('getHours :', now.getHours()); // 14
console.log('getMinutes :', now.getMinutes()); //34
console.log('getSeconds :', now.getSeconds()); // 9

//timestamps // Beginnigs of the timestamp is "1 january 1970"

console.log('timestamp:', now.getTime()) // 1706441649547

// date string

console.log(now.toDateString()); // Sun Jan 28 2024
console.log(now.toTimeString()); // 14:37:55 GMT+0300 (GMT+03:00)
console.log(now.toLocaleString()); // 1/28/2024, 2:38:58 PM