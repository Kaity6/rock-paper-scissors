
let computerChoice = 
function getComputerChoice() {
    let computerRandom = Math.random();
    if (computerRandom >= 0 && computerRandom< 0.33) {
        return computerChoice = "rock";
    }
    else if (computerRandom >= 0.33 && computerRandom <0.66) {
        return computerChoice = "paper";
    }
    else {
        return computerChoice = "scissors";
    }
}
console.log(computerChoice());
let playerChoice = prompt("what are you picking?",)
function getPlayerChoice() {
    return playerChoice
}
console.log(getPlayerChoice());