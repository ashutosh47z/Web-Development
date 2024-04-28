// setTimeout function in Javascript
// Inbuilt function of window object
// setTimeout(function, timeout)  
// It takes timout in milliseconds i.e. 1 sec = 1000 ms
console.log("Hi there!");
setTimeout(() => {
    console.log("I am a developer"); // Passed an arrow function as a callback
}, 4000);
console.log("My Code is here!");