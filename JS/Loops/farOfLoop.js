// for of loop
// for(element of collection){
//do something
// }
let fruits = ['Apple', 'Orange', 'Litchi', 'Pineapple', 'Banana'];
for (fruit of fruits) {
    console.log(fruit);
}
for (char of 'Ashutosh') {
    console.log(char);
}
// Nested For of Loops
let heroes = [['ironman', 'spiderman', 'thor'], ['superman', 'wonder woman', 'flash']];
for (list of heroes) {
    console.log(list);
    for (hero of list) {
        console.log(hero);
    }
}