var teacher = 'Sanket';  // global
function fun() {       // global
    console.log(teacher);   // No error will be given
    console.log(content);   // Throws an error

    // Difference between function scope and block scope is:-
    // Variable declared in function scope is accessible everywhere inside function
    // Whereas in block scope, Variable and its content can only be accessible post declaration within the block only
    // Above Zone is Temporal Dead Zone(TDG) - The region before the declaration of block scoped variable is TDG
    // We can't access a variable having block scope before its declaration
    var teacher = 'Pulkit';
    let content = 'JS';
    if (content == 'JS') {
        let hours = '120+';
        console.log(hours);
    }
    console.log(teacher, content);
}

fun();
console.log(teacher);
console.log(Content);