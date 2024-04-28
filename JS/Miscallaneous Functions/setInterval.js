//setInterval function in Window Object in JS
// setInterval(function, timeout);
// timeout is in miliseconds
// It executes the function multiple times with timespan of timeout given as argument
let id1 = setInterval(() => {
    console.log("Hello! I am Ashutosh");
}, 4000);
let id2 = setInterval(() => {
    console.log("In the loop of Programming");
}, 4000);

//Execution can be stopped using clearInterval(id) method
clearInterval(id1);