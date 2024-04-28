// Use Case of let
// let doesn't allow a declared variable to be reinitialised
let x = 5;
// let x = 10; -> It will throw an error. Redeclaration is not allowed using let keyword
function fun() {
    for (let i = 0; i < 10; i++) {
        // do something
    }

}
fun();
function process(x, y) {
    if (x > y) {
        // var temp = x;
        let temp = x;   // temp is of no use after if block , it's better to use let
        x = y;
        y = temp;
    }
    return y - x;
}