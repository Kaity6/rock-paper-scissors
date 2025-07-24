





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

let humanSelection, computerSelection;
let roundResult = document.getElementById("roundResult")
let showPlayerChoice = document.getElementById("showPlayerChoice")
let showComputerChoice = document.getElementById("showComputerChoice")
let playerRock = document.getElementById("playerRock");
let playerPaper = document.getElementById("playerPaper");
let playerScissors = document.getElementById("playerScissors");
let playerScoreDom = document.getElementById("playerScore")
let computerScoreDom = document.getElementById("computerScore")



let humanScore = 0, computerScore = 0;
function playRound() {

function assignSelections () {
    humanSelection = playerChoice;
    computerSelection = getComputerChoice();
    showPlayerChoice.innerText = `Your Choice: ${humanSelection}`
    showComputerChoice.innerText = `Computer's Choice: ${computerSelection}`
}
                assignSelections();
                if (humanSelection == computerSelection) {
                    roundResult.innerText = (`It's a draw, both of you picked ${humanSelection}`)
                }
                else if (humanSelection == "rock" && computerSelection == "scissors" || humanSelection == "paper" && computerSelection == "rock" || humanSelection == "scissors" && computerSelection == "paper") {
                    roundResult.innerText = (`You won! ${humanSelection} beats ${computerSelection}.`)
                    humanScore ++
                }
                else {
                    roundResult.innerText = (`You lost! ${computerSelection} beats ${humanSelection}, skill issue tbh.`)
                    computerScore ++
                };
                playerScoreDom.innerText = `Player score: ${humanScore}`;
                computerScoreDom.innerText = `computer score: ${computerScore}`
                if (humanScore === 5) {
                    theEnd.innerText = `You won! Your parents must be Asian!`
                    humanScore = 0;
                    computerScore = 0;
                    } else if (computerScore === 5) {
                    theEnd.innerText = `This the end! AI is taking over!` 
                    humanScore = 0;
                    computerScore = 0;
}

        }



playerScoreDom.innerText = `Player score: ${humanScore}`
computerScoreDom.innerText = `computer score: ${computerScore}`

let theEnd = document.getElementById("theEnd")



let playerChoice;

playerRock.addEventListener("click", () => {
playerChoice = "rock"
playRound()
})


playerPaper.addEventListener("click", () => {
    playerChoice = "paper"
    playRound()
})


playerScissors.addEventListener("click", () => {
playerChoice = "scissors"
playRound()
})





