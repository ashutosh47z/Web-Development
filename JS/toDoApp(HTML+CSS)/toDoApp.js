// /* To Do App
// Functions of this app:-
// 1.list- to show all todos
// 2.add- to add a todo
// 3.delete- to delete a task
// 4.quit - to exit the todo
// */
//My Code
// const prompt = require("prompt-sync")();
// let toDo = [];
// let req = prompt("Please Enter Your Request-> ");

// while (true) {
//     if (req == 'quit') {
//         console.log("Quit Successfully");
//         break;
//     }
//     if (req == 'list') {
//         console.log("-----------------------------------------");
//         for (let i = 0; i < toDo.length; i++) {
//             console.log(i, toDo[i]);
//         }
//         console.log("-------------------------------------------");

//     }
//     else if (req == 'add') {
//         task = prompt("Enter the task that you want to add-> ");
//         toDo.push(task);
//         console.log("Task Added Successfully");

//     }
//     else if (req == 'delete') {
//         let idx = prompt("Please Enter the task index: ");
//         toDo.splice(idx, 1,);
//         console.log("Task Deleted Successfullly");
//     }
//     else {
//         console.log("Invalid Request");
//     }

// }
// req = prompt("Enter again your request: ");
//Improved Code 
let toDo = [];
let numAttempts = 0; // Limit iterations for safety

while (true) {
    let userRequest = prompt("Enter your request (quit, list, add, delete): ");

    if (userRequest === "quit") {
        console.log("Quit successfully!");
        break;
    } else if (userRequest === "list") {
        console.log("-----------------------------------------");
        for (let i = 0; i < toDo.length; i++) {
            console.log(`${i}. ${toDo[i]}`);
        }
        console.log("-------------------------------------------");
    } else if (userRequest === "add") {
        let task = prompt("Enter the task you want to add: ");
        toDo.push(task);
        console.log("Task added successfully!");
    } else if (userRequest === "delete") {
        let idx = prompt("Enter the task index to delete (0-based): ");
        try {
            // Validate index, convert to number
            idx = parseInt(idx, 10);
            if (isNaN(idx) || idx < 0 || idx >= toDo.length) {
                throw new Error("Invalid task index");
            }
            toDo.splice(idx, 1);
            console.log("Task deleted successfully!");
        } catch (error) {
            console.error("Error:", error.message);
        }
    } else {
        console.log("Invalid request. Please try again.");
        numAttempts++; // Track invalid attempts
        if (numAttempts >= 5) {
            console.warn("Too many invalid requests. Exiting...");
            break;
        }
    }
}