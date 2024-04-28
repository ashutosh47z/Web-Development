//Simple Calculator using Switch Case in Javascript
const prompt = require("prompt-sync")();
let firstNum = prompt("Enter first number:")//User Input for first number
let secondNum = prompt("Enter second number:"); //User Input for second number
let operator = prompt("Enter Operator:");       // User Input for the operator
switch (operator) {
    case '+':
        console.log("The Sum of given two numbers is =", firstNum + secondNum);
        break;
    case '-':
        console.log("The difference of given two numbers is =", firstNum - secondNum);
        break;
    case '*':
        console.log("The Product of given two numbers is =", firstNum * secondNum);
        break;
    case '/':
        console.log("The Division of given two numbers is =", firstNum / secondNum);
        break;
    default:
        console.log("Operator Not Valid! Please Check Again!")
}
console.log("Thanks for Using the calculator! Be with us");
