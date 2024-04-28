//Keyboard Events
let inp1 = document.querySelector("input");
inp1.addEventListener("keydown", function (event) {
    console.log("Code =", event.code); //ArrowUp(U), ArrowDown(D), ArrowLeft(L),ArrowRight(R)
    if (event.code == 'ArrowUp') {
        console.log("Character Moves Forward");
    }
    else if (event.code == 'ArrowDown') {
        console.log("Character Moves Downward");
    }
    else if (event.code == 'ArrowLeft') {
        console.log("Character Moves Left");
    }
    else if (event.code == 'ArrowRight') {
        console.log("Character Moves Right");
    }
});