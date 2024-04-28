function fun() {   // function declaration
    // some impl
}
let f = function gun() {  //  Named function expression
    // some impl
}
let a = function () {     // Anonymous function expression
    // some more impl
};
(function x() {          // function expression
    // Can you stop it?
});
(function () {           // function expression
    // I am done
})
let y = () => {

}
// IIFY - Immediately Invoked Function Expression
// Example of IIFY
(function x(y) {
    console.log("hi", y);
})('Ashutosh');