// User Enters a max number and then tries to guess a random generated number between 1 to max
const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;
console.log(random);
let guess = prompt("Guess the number");
while (true) {
    if (guess == "quit") {
        console.log("User Quit");
        break;
    }
    if (guess == random) {
        console.log("You Guessed it right! Congratulations Random Number was :->", random);
        break;
    } else if (guess < random) {
        guess = prompt("hint: Your Guess was too small! Please try again");
    } else {
        guess = prompt("hint: Your Guess was too large! Please try again");
    }


}

// } else {
//     prompt("Your guess was wrong! Please try again");
// }
// }
