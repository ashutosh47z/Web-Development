let gameSeq = [];
let userSeq = [];

let btns = ['aqua', 'coral', 'crimson', 'corn'];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");


document.addEventListener('keypress', function () {
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelUp();

    }

});
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random button choose
    let randIndex = Math.floor(Math.random() * btns.length); // Corrected to use btns.length to avoid index out of bounds
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIndex);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    gameFlash(randBtn);
    console.log(gameSeq);
};
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 400);
};

// function levelUp() { -> Errors in this
//     level++;
//     h2.innerText = `Level ${level}`;
//     //random button choose
//     let randIndex = Math.floor(Math.random() * 3);
//     let randColor = btns[randIndex];
//     let randBtn = document.querySelector(`.${randColor}`);
//     console.log(randIndex);
//     console.log(randColor);
//     console.log(randBtn);
//     gameFlash(randBtn);
// };
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash",
            400);
    })


};
function checkSeq(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if ((userSeq.length) == (gameSeq.length)) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over!Your Score was <b> ${level}</b> <br> Press any key to start!`
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = 'white';

        }, 250);
        reset();
    }


};


function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkSeq(userSeq.length - 1);
};
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener('click', btnPress);
};
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
