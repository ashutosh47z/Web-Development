// Promises-> The promise object represents the eventual completion (or failure) of a asynchronous operation and its resulting value
// Promise -> Resolve or Reject
// States of a promise - fulfilled/resolved, rejected and pending
// Promises are rejected and resolved with some data (valid results or errors)

// Without promises
// function saveToDb(data, success, failure) {
// let internetSpeed = Math.floor(Math.random() * 10 + 1)
// if (internetSpeed > 4) {
//     success();
// } else {
//     failure();
// }

// };
// saveToDb("Ashutosh", () => {
//     console.log("Success, Your data was saved");
//     saveToDb("Hello JS", () => {
//         console.log("Success 2, data was saved");  // Callback hell
//     }, () => {
//         console.log("failure2, data not saved")
//     }
//     );
// },
//     () => {
//         console.log("Weak Connection, data not saved")
//     }
// );
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10 + 1);
        if (internetSpeed > 4) {
            resolve("Success, Data was saved");
        } else {
            reject("failure..Weak Internet Connection");
        };


    });
};
// saveToDb("Ashutosh,this side");

// then() and catch() methods
let req = saveToDb("Ashutosh,this side")
req.then(() => {
    console.log("Data 1 saved, Promise fulfilled");
    return saveToDb("Hello JS")       //Improved version
})
    .then(() => {
        console.log("data2 saved");
    })
    .catch(() => {
        console.log("Promise rejected");
    });
