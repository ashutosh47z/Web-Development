//Spread -> Expands an interable into multiple values
/* function func(...arr){    '...' -> denotes spread
    //do something;
}
*/
arr = [6, 5, 8, 10, 17];
console.log(...arr);  //Spread 

let str = "Hello";
console.log(...str); //String will spread into individual characters

//Spread(Array Literals)
let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let nums = [...odd, ...even];  //Two arrays can also be spread together in into new array
console.log(nums);

//Spread with object literals
const data = {
    email: 'ashutoshshukla5463@gmail.com',
    password: 'Ashu123@'

};
const dataCopy = {
    ...data, id: 123
}
console.log(dataCopy);