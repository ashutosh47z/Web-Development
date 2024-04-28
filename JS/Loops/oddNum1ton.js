//Printing odd numbers from 1 to N
const prompt = require("prompt-sync")();
let N = prompt("Enter Number upto which you find odd numbers: ");
N = parseInt(N); // It will convert N into Integer
for (let i = 1; i <= N; i = i + 2) {
    console.log(i);
}

