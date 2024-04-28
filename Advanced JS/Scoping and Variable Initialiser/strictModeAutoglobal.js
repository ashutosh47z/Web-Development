"use strict";   // Use of Strict Mode to avoid autoglobals 
var teacher = 'Sanket';
function fun() {
    var teacher = 'Pulkit';
    content = 'JS';     // Informal declaration of variable
    console.log(teacher);
    console.log(content);
}
function gun() {
    var student = 'Ashutosh';
    console.log(student);
}
fun();
gun();
console.log(teacher);
console.log(content);