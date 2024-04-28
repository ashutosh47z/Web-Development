//Create a function to roll a dice and always display the value of the dice(1to6)
function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;  //Math.random()*6 gives random number between o to 5
    console.log(rand);
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
