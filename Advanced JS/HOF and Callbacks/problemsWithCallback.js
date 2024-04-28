/* Problems with Callbacks
1. Inversion of control (Promises can resolve this issue)
2. Callback hell-> Readability Problem
*/
let arr = [1, 100, 1000, 50, 60, 90, 850, 65];
arr.sort(function cmp(a, b) {
    return a - b;

})
console.log(arr);

function doTask(fn, x) {
    // Whole implementation is done by Team A
    fn(x * x); // Calling my callback with sqaure of x
}

// Team B tries to use it
doTask(function exec(num) { // Due to callbacks, Control of how exec should be called is paased to doTask
    // It is known as Inversion of control
    console.log("Your num is", num);
}, 9);