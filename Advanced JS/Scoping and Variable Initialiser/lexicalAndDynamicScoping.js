// JavaScript has lexical scoping
var teacher = 'Sanket';  // teacher -> global scope
function ask(question) { // ask -> global scope
    console.log(teacher, question);
}
function fun() {  // fun -> global scope
    var teacher = 'Pulkit'; // teacher -> fun scope
    ask("why");
}
fun();