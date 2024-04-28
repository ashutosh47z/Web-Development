// Higher order functions- functions which take another function as arguments
function f(x, fn) {
    // x- number fn- function
    console.log(x);
    console.log(fn);
    fn();
}
f(10, function exec() {
    console.log("I am Higher Order Function")
});

let arr = [5, 9, 7, 88, 45, 60];  //unsorted array
arr.sort(); // it sorts the given array // [expection]-> this might arrange elements in increasing order
// default implementation of arr.sort() is going to sort array in lexographical order (According to dictionary)
/*  0- A
    1- B
    2- C
    3- D
    4- E
    5- F
    6- G
    7- H
    8- I
    9- J
*/
console.log(arr);

let b = [5, 9, 7, 88, 45, 60];
// sort the array in ascending order
b.sort(function cmp(a, b) {  // cmp is callback function
    return a - b;
    // if a < b -> a - b will be negative -> if cmp function gives negative, a is placed before b (a < b)
    // if a > b -> a - b will be positive -> if cmp function gives positive, b is placed before a (a > b)
}) // sort is HOF, the sort function takes comparator function as an argument

console.log(b);
