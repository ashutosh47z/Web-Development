// Single Threaded vs Multi Threaded
// JavaScript is single threaded language i.e. performs one function at a time
//Synchronous nature of JavaScript
let a = 25;
console.log(a);
let b = 64;
console.log(b);
console.log(a + b);


//Asynchronous nature of JavaScript
// Browsers are generally written in c++. Browser can do multithreading.
setTimeout(() => {
    console.log("Ashutosh! this side");
}, 2000);

setTimeout(() => {
    console.log("I am good in JavaScript");
}, 2000);

console.log("hello....");
