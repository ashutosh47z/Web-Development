// API - Application Programming Interface
// Data is returned in APIs in the JSON format

//JSON - JavaScript Object Notation
// Accessing Data from JSON:

// 1. JSON.parse(data) Method -> To parse a string data into a JS object
// JSON -> JS Object
let jsonRes = '{"fact":"A cat has more bones than a human; humans have 206, and the cat - 230.","length":70}';
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

// 2. JSON.stringify(json) Method -> To parse a JS object data into JSON
// JS Object -> JSON
let student = {
    name: "Ashutosh Shukla",
    marks: 87,
};
let json = JSON.stringify(student);
console.log(json);

// Testing API Requests
// Tools: 1. Hoppscoth 2.Postman

// AJAX -> Asynchronous JavaScript and XML

// HTTP Verbs -> Get, Post, Delete etc.

// Status Codes -> Examples:
// 200 - OK
// 404 - NOT FOUND
// 400 - BAD REQUEST
// 500 - Internal Server Error

//Adding information in URLs
// Query Strings
// https://www.google.com/search?q= harry+ porter
// Where q is key and harry + porter is value

// HTTP Headers -> Header, value

// Our First API request
// Using fetch -> fetch(url)
let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res) => {
//         return res.json()
//     })
//     .then((data1) => {
//         console.log("data 1: ", data1.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json()

//     })
//     .then((data2) => {
//         console.log("data 2: ", data2.fact);
//     })
//     .catch((err) => {
//         console.log("Error - ", err);
//     });

// Using Fetch with async/await
// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(res);
//         console.log(data.fact);
//     } catch (err) {
//         console.log("error is-", err);
//     }

// };
let btn = document.querySelector("button");
btn.addEventListener('click', async () => {
    let fact = await getFacts();
    console.log(fact);
    let para = document.querySelector('p');
    para.innerText = fact;
})

//Axios - Library to make HTTP requests
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        console.log("error is-", err);
        return 'No Fact Found'
    }

};

// Sending headers using Axios
const url1 = "https://icanhazdadjoke.com/";
async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let res = await axios.get(url1, config);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};


