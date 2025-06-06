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

let playerChoice = prompt("what are you picking?",)
    function getPlayerChoice() {
        return playerChoice.toLowerCase();
}


function assignSelections () {
    let humanSelection = getPlayerChoice(), computerSelection = getComputerChoice();
    console.log(humanSelection)
    console.log(computerSelection)
}
function playRound () {
    assignSelections();
    winningLogic();
}

function playGame () {
    let humanScore = 0, computerScore = 0;


        function winningLogic(humanSelection,computerSelection) {
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
        playRound(humanSelection,computerSelection);
        playRound(humanSelection,computerSelection);
        playRound(humanSelection,computerSelection);
        playRound(humanSelection,computerSelection);
        playRound(humanSelection,computerSelection);
}
playGame()



