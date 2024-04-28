// Async and Await Function 
//async and await keywords
// async keyword -> creates an async function that returns a promise
async function greet() {
    throw "404 Not Found";
    return "Hello";

};
greet()
    .then((result) => {
        console.log("Promise was resolved");
        console.log(result);
    })
    .catch((err) => {
        console.log("Promise was rejected with err:", err);

    })

let demo = async () => {
    return 5;
}

// Await Keyword -> Pauses the execution of its surrounding async function until the promise is settled(resolved or rejected)
// Rejections can also be handled with await keyword
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();

        }, 1000);

    })
    console.log(5);
}
async function demo1() {
    try {                 // Error handling with try-catch block
        await getNum();
        await getNum();
        await getNum();

    } catch (err) {
        console.log("error caught")
        console.log(err);
    }

}

