/*Scope -> Represents visibility of variables and functions

# JavaScript is neither purely interpreted nor purely compiled language
# JavaScript executes code in two phases :- 

1. Parsing -> Scope Resolution

# In parsing JavaScript reads the code one by one and start allocating the variables, their corresponding scopes
# In parsing, syntactical issues and formal declaration are only taken into consideration */
// console.log('hi');
// console.lo('hi');  // It doesn't have any syntactical issues. It failes in the execution phase because lo method is not available in JS
// If we update the property of console to have 'lo' method, given blocks of code will execute
// console.log('hello');
// console.log('hello');
// console..lo('hi');  // It fails in the parsing phase only as syantactical issue occurs. '..' is not a valid Syntax
// console.log("hi");


/* Types of Scope- Global, Function and Block Scope
# Variable initialiser var, const and let decides a lot of things around the scope of a variable that you want to define
var - function or global scope NO BLOCK SCOPE
let -BLOCK SCOPE

Autoglobals
Use of Strict Mode -> Strict Mode is restricted mode in which we run javascript
All features supported in sloppy mode in JavaScript might not be supported in Strict Mode
It has better perfomance optimisation for some features

2. Execution 
*/

var teacher = 'Sanket';
function fun() {
    var teacher = 'Pulkit';
    student = 'JS';
    console.log(teacher);
}
function gun() {
    let student = 'Ashutosh';
    console.log(student);
}
fun();
gun();
console.log(teacher);
// console.log(student); -> It will throw referenceError because 'Let' initialiser has block scope
