//Scope -> Scope determines the accessibility of variables, objects and functions from different parts of code
// 1. Function Scope  2. Block Scope 3. Lexical Scope
// Function Scope -> Variables defined inside a function are not accessible from outside the function
let sum1 = 54;  // Sum1 outside the function has a global scope
function sum(a, b) {
    let sum = a + b;  // Sum is a variable defined inside a function and hence not accessible outside the function
    return sum;
}
console.log(sum(2, 3));
console.log(sum1);
//Block Scope -> Variables declared inside a {} block can not be accessed from outside the block
{
    let a = 35; // a defined inside a block
    // Block Scope is applicable to let
}
{
    const a = 35; // a defined inside a block
    // Block Scope is applicable to const as well
}
{
    var a = 35; // a defined inside a block 
    // In case of var, if we print 'a' outside the block, a will be printed out.
    // Block Scope is not applicable to var
    // It is not a good practice to use var now
}
// Lexical Scope -> A variable defined outside a function can be accessible inside another function defined after the variable declaration
// Opposite is not TRUE
function outerFunc() {
    let x = 5;
    let y = 10;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}
outerFunc();
function outerFunc() {
    function innerFunc() {
        console.log(x);
    }
    let x = 5;
    let y = 10;
    innerFunc();
}
outerFunc();
// Variables are defined after function definition
//Still no error because of the concept of 'Hoisting'
