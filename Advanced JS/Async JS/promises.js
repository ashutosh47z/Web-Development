/* Promises -> Readability enhancers
# Can solve the problem of Inversion of control
# In JS, Promises are special type of objects that get returned immediately when we call them
# Promises act as a placeholder for the data we hope to get back sometimes in future.
# In these Promise objects, we can attach the functionality we want to execute once the future task is done
# Once the future task is done, promises will automatically execute the attached functionality
*/

// Creation of promise object is SYNCHRONOUS in nature
// State of a promise -> Pending -> Default state of a promise object is pending(work in progress)
// fulfilled -> If the operation is completed successfully
// rejected ->  If the operation was not successful
// At the time when the constructor generates new promise object, it also generates a pair of function, called as 'resolve' and 'Reject'
// Generally, the executer callback, wraps some async/sync operations

// new Promise(function(resolve, reject)){
//     do something
// }
// promise -> Promise is a constructor expects a callback and callback is executor function
// Whenever in the implementation of executor callback, you call the resolve function the promise goes to fulfilled state
// If you call the reject function the promise goes to rejected state
// If you don't call anything, promise remains in pending state
// As long as promise is in the pending state, the value property of promise remains undefined
// After resolve function being called, the value property of promise gets updated by the argument of resolve
// After reject function being called, the value property of promise gets updated by the argument of reject

// Coding Implementation of Promise
function getRandomInt(max) {
    return Math.floor(Math.random() * max);

}
function createPromiseWithLoop() {
    return new Promise(function executer(resolve, reject) {
        for (let i = 0; i < 1000000000; i++) {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                // if the random number is even, we fulfill
                resolve(num);
            }
            else {
                // if the random number is odd, we reject
                reject(num);
            }

        }

    });

}
// Once you resolve or reject promise object or change the state of promise object, it can never be updated
// First resolve/reject is going to show the effect on promise effect irrespective of how many times you resolve/reject

// Consumption of Promise
// promise.then(fulfillment handler, rejection handler) -> Handler functions will be implemented by ourselves.
function createPromiseWithTimeout() {
    return new Promise(function executer(resolve, reject) {
        console.log("Entering the executer callback in the promise constructor");
        setTimeout(function () {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                // if the random number is even, we fulfill
                resolve(num);
            }
            else {
                // if the random number is odd, we reject
                reject(num);

            }
        }, 10000);
        console.log("Exiting the executor callback in the promise constructor");
    });
};
console.log('Starting.....');
const p = createPromiseWithTimeout();
console.log(p);
console.log("Waiting for the promise to be completed");
console.log("Currently My promise object is like....", p);
p
    .then(
        function fulfillHander(value) {
            console.log("Inside fulfill handler with value", value);
            console.log("Promise after fulfillment is", p);
        },
        function rejectionHandler(value) {
            console.log("Inside rejection handler with value", value);
            console.log("Promise after rejection is", p);
        });

// At any point of time, if event loop has a choice to pick from a microtask queue or callback queue(Macrotask queue),then it always give preference to microtask queue
// Priority Order -> Call stack or global code > microtask queue > callback/macrotask queue
