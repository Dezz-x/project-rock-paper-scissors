//Generating random pick for the computer
/*const picks = ["Rock", "Paper", "Scissors"];
const computerChoice = picks[Math.floor(Math.random() * picks.length)];

function getComputerChoice(){
    return computerChoice;
}

//Variables for both player and computer selections
const computerSelection = getComputerChoice();

const playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors?");
console.log("Player selects: " + playerSelection)

//One round function that logs a score to the console
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        alert("It's a tie!");
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        alert("You win! Rock beats scissors");
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        alert("You lose :( Paper beats rock");
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        alert("You win! Scissors beats paper");
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        alert("You lose :( Rock beats scissors");
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        alert("You win! Paper beats rock");
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        alert("You lose :( Scissors beats paper");
    }
} 
*/

//Best of 5 function that loops through the playRound function 5 times
let playerScore = 0;
let computerScore = 0;

function playGame(){
    for (let i = 0; i < 5; i++){
        
        const picks = ["Rock", "Paper", "Scissors"];
        const computerChoice = picks[Math.floor(Math.random() * picks.length)];

        function getComputerChoice(){
            return computerChoice;
        }
        
        const computerSelection = getComputerChoice().toUpperCase();
        console.log("CPU selects: " + computerSelection);
        
        const playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors?").toUpperCase();
        console.log("Player selects: " + playerSelection);

        function playRound(playerSelection, computerSelection) {
    
            if (playerSelection == computerSelection) {
                alert("It's a tie!");
            }
            else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
                alert("You win! Rock beats scissors");
            }
            else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
                alert("You lose :( Paper beats rock");
            }
            else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
                alert("You win! Scissors beats paper");
            }
            else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
                alert("You lose :( Rock beats scissors");
            }
            else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
                alert("You win! Paper beats rock");
            }
            else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
                alert("You lose :( Scissors beats paper");
            }
            else {
                alert("Oops! Check your spelling.")
            }
        } playRound(playerSelection, computerSelection); 

    }
}
playGame();
