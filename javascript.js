//Variables for keeping indivdual scores
let playerScore = 0;
let computerScore = 0;

//One round function that logs a score to the console
function playRound() {
    
    //Generating random pick for the computer
    const selections = ["Rock", "Paper", "Scissors"];
    const computerChoice = selections[Math.floor(Math.random() * selections.length)];
    
    function getComputerChoice(){
        return computerChoice;
    };

    //Variables for the selections of the CPU and User
    let computerSelection = getComputerChoice().toUpperCase();
    console.log("CPU selects: " + computerSelection);
    let playerSelection = prompt("Choose your weapon! Rock, Paper or Scissors?").toUpperCase();
    alert("Player selects: " + playerSelection);
    
    if (playerSelection == computerSelection) {
        alert("It's a tie!");
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        alert("You win! Rock beats scissors");
        playerScore++
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        alert("You lose :( Paper beats rock");
        computerScore++
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        alert("You win! Scissors beats paper");
        playerScore++
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        alert("You lose :( Rock beats scissors");
        computerScore++
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        alert("You win! Paper beats rock");
        playerScore++
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        alert("You lose :( Scissors beats paper");
        computerScore++
    };
    console.log("Player: " + playerScore);
    console.log("CPU: " + computerScore);
};


//Best of 5 function that loops through the playRound function 5 times
function playGame(){
    for (let i = 0; i < 5; i++){
        playRound();
    }
    if(playerScore > computerScore){
        alert("You have won the game!")
    }
    else if(computerScore > playerScore){
        alert("Oh no! You have lost the game")
    }
    //In the event of a tie
    else{
        alert("Sudden death!");
        playRound();

        if(playerScore > computerScore){
            alert("You have won sudden death!")
        }
        else if(computerScore > playerScore){
            alert("You have lost sudden death!")
        }
        else if(playerScore == computerScore){
            alert("The game has ended in a tie")
        }
    }
}
playGame();