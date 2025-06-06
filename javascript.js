function getComputerChoice() {
    if (Math.random() >= 0 && Math.random() < 0.33) {
        return "rock";
    }
    else if (Math.random() >= 0.33 && Math.random() < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
console.log(getComputerChoice());

let playerChoice = prompt("what are you picking?",)
    function getPlayerChoice() {
        return playerChoice.toLowerCase();
}
console.log(getPlayerChoice());

let humanScore = 0, computerScore = 0;

function playRound(humanSelection,computerSelection) {
        if (humanSelection == computerSelection) {
            console.log(`It's a draw, both of you picked ${humanSelection}`)
        }
        else if (humanSelection == "rock" && computerSelection == "scissors" || humanSelection == "paper" && computerSelection == "rock" || humanSelection == "scissors" && computerSelection == "paper") {
            console.log(`You won! ${humanSelection} beats ${computerSelection}.`)
            humanScore ++
        }
        else {
            console.log(`You lost! ${computerSelection} beats ${humanSelection}, skill issue tbh.`)
            computerScore ++
        }
}
let humanSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);
playRound(humanSelection,computerSelection);

