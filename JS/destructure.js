// Destructuring -> Storing values of array into multiple variables
let names = ['tony', 'bruce', 'steve', 'peter', 'ironman'];
let [winner, runnerup] = names;   // winner and runner up are variables
//Variable assignment can be done using index also 
console.log(winner, runnerup);    // tony bruce
let [winner1, runnerup1, ...other] = names;   // Concept of rest is used
console.log(other);

// Destructing Objects
const student = {
    name: "Ashutosh Shukla",
    age: 18,
    class: 13,
    subject: ['hindi', 'english', 'math', 'science'],
    username: "ashu5463",
    pwd: 'Ashu5463@'

};
// let username = student.username; -> Not a good method in case of big data
// let password = student.password;
let { username, age } = student;  // Concept of destructuring objects
let { name: Name, pwd: password } = student;  // Name and password are variables storing value of name and pwd
console.log(Name);

