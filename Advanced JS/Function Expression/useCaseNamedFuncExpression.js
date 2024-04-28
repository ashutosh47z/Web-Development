function fun(fn) {
    console.log("Welcome to fun");
    fn();
}
fun(function askingAboutFun() {
    console.log("Wow so much fun");
    console.trace();
})

// For recursive cases, named function expressions are recommended
// Debugging of production level logs becomes easy
