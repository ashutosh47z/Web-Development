//Printing Even numbers from 1 to N
const prompt = require("prompt-sync")();
N = parseInt(N); // It will convert N into integer
let N = prompt("Enter Number upto which you find even numbers: ");
for (let i = 2; i <= N; i = i + 2) {
    console.log(i);
}
