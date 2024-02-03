// timestamps

const before = new Date("February 1 2019 7:30:59");
// const before = new Date('January 1 2024 14:53:59');
const now = new Date();

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const months = Math.round(days / 30);
const years = Math.round(months / 12);

console.log(mins, hours, days, months);
console.log(`the blog was written ${days} days ago`); //the blog was written 1822 days ago

console.log(`the blog was written ${months} months ago`); //the blog was written 61 months ago

console.log(`the blog was written ${years} years ago`); //the blog was written 5 years ago


//! converting timestamp into date objects

const timestamp = 1675938474990;

console.log(new Date(timestamp)); //Thu Feb 09 2023 13:27:54 GMT+0300 (GMT+03:00)
