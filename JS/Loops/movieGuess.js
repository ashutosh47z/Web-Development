//Guessing Movie
const prompt = require("prompt-sync")();
const favMovie = 'Avatar';
let guess = prompt("Guess my favorite movie: ");
while ((guess != favMovie) && (guess != 'quit')) {
    console.log("Wrong Guess");
    guess = prompt("Guess my favorite movie: ");
}
if (guess == 'quit') {
    console.log("Quit Successfully")
}
if (guess == 'Avatar') {
    console.log("You Guessed it right Man!")
}