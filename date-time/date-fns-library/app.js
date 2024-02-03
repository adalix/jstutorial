const now = new Date();

// console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY')); // 2024
console.log(dateFns.format(now, 'MMMM')); //January
console.log(dateFns.format(now, 'dddd')); //Sunday
console.log(dateFns.format(now, 'Do')); //28th
console.log(dateFns.format(now, 'dddd Do MMMM YYYY')); //Sunday 28th January 2024

// Comparing dates
const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));

