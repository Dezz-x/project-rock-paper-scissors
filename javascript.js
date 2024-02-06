//Generating random pick for the computer
const picks = ["Rock", "Paper", "Scissors"];
const computerChoice = picks[Math.floor(Math.random() * picks.length)];

function getComputerChoice(){
    return computerChoice;
}

//Variables for both player and computer selections
const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors?");

//One round function that logs a score to the console
function playRound(playerSelection, computerSelection) {

    let playerScore = 0;
    let computerScore = 0;
    
    if (playerSelection == computerSelection) {
        alert("It's a tie!");
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++
        alert("You win! Rock beats scissors");
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++
        alert("You lose :( Paper beats rock");
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++
        alert("You win! Scissors beats paper");
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        computerScore++
        alert("You lose :( Rock beats scissors");
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore++
        alert("You win! Paper beats rock");
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        computerScore++
        alert("You lose :( Scissors beats paper");
    }
    console.log("Player Score: " + playerScore);
    console.log("CPU Score: " + computerScore);
};
console.log(playRound(playerSelection,computerSelection));

//Best of 5 function that loops through the playRound function 5 times
function playGame(){
};