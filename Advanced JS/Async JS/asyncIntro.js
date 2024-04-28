// Asynchronous Programming with JavaScript
// # JavaScript is synchronous in nature -> If we execute valid EcmaScript code viz given by the standards or code native to JavaScript
// Runtime provides facilities to JavaScript for running th code that is not native to JavaScript 
// # JavaScript is single threaded programming language

// Here JavaScript act as async in nature
console.log("hi");
setTimeout(function () {
    console.log("Time done");
}, 5000);
console.log('bye');

//console.log() is not a core JavaScript feature