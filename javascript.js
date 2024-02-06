const picks = ["Rock", "Paper", "Scissors"];
const computerChoice = picks[Math.floor(Math.random() * picks.length)];

function getComputerChoice(){
    return computerChoice;
}

const playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors?");
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats scissors";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose :( Paper beats rock";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win! Scissors beats paper";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You lose :( Rock beats scissors";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return "You win! Paper beats rock";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You lose :( Scissors beats paper";
    }
};

console.log(playRound(playerSelection,computerSelection));


let playerScore = 0
let computerScore = 0

function playGame(playRound) {
    for (let i = 0; i < 10000; i++){
        if (playRound == "You win! Rock beats scissors" || "You win! Scissors beats paper" || "You win! Paper beats rock") {
            return playerScore += 1;
        }
        else if(playRound == "It's a tie!"){
            return 0;
        }
        else {
            return computerScore +=1;
        }

    }
};


