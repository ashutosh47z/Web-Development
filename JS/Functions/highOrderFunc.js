/* High Order Function -> A function which does one or both:
1. Takes one or multiple functions as arguments
2. Returns a function
*/
// Category 1 -> Takes one or multiple functions as arguments
function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func()
    }

}
let greet = function () {
    console.log("Hello");
}
greet();
multipleGreet(greet, 5);
// Category 2 -> Returns a function

let odd = function (n) {
    console.log(!(n % 2 == 0));
}
let even = function (n) {
    console.log(n % 2 == 0);
}
function oddOrEvenFactory(request) {
    if (request == 'odd') {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
    else if (request == 'even') {
        return function (n) {
            console.log(n % 2 == 0);
        }
        return even;
    }
    else {
        console.log("Wrong Request");
    }
}
let request = 'odd';
let func = oddOrEvenFactory(request); // Returns odd function
console.log(func);
func(3);
func(10);
func(23);


