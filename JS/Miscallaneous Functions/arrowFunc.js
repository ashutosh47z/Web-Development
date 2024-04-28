// Arrow Functions
// const func =(arg1,arg2....) =>{function definition};
// Arrow functions can be used as callbacks i.e. function that serves as argument in another function
const sum = (a, b) => {    //arrow function
    console.log(a + b);
};
sum(2, 3);

const cube = (n) => {  // In case of single arguments, parenthesis can be removed
    return n * n * n;
};
console.log(cube(8));
const pow = (a, b) => {
    return a ** b;
};
console.log(pow(2, 3));
const hello = () => {  // In case of no arguments, parenthesis is compulsory
    return ("Hello! Ashutosh,this side");
}

// Implicit return in arrow function
// const func = (arg1, arg2...) => (value);
// In case of implicit return, no curly braces , parethesis will be used 

const multiply = (a, b) => (      //parenthesis are used before definition of function
    a * b
);
const pow1 = (a, b) => (a ** b);
console.log(pow1(6, 3));
