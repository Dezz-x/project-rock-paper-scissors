function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"]
    let computerSelection = options[Math.floor(Math.random() * options.length)].toUpperCase();
    return computerSelection;
};

const computerResult = getComputerChoice();

function getHumanChoice(){
    let playerSelection = document.querySelector(".button-container");
    
    playerSelection.addEventListener("click", (e) => {
        
        let target = e.target;
        
        if(target.id == "Rock"){
            playRound("ROCK", computerResult);
        }
        else if(target.id == "Paper"){
            playRound("PAPER", computerResult);
        }
        else if(target.id == "Scissors"){
            playRound("SCISSORS", computerResult);
        }
        else {
            alert("You must select Rock, Paper, or Scissors!")
        };
    });
};

const humanResult = getHumanChoice();


let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){

    const getTextContent = document.querySelector(".display-result");
    
    if(humanChoice == "ROCK" && computerChoice === "SCISSORS"){
        getTextContent.textContent = "You have won the round!";
        humanScore++;
    }
    else if(humanChoice == "ROCK" && computerChoice == "PAPER"){
        getTextContent.textContent = "You have lost the round!";
        computerScore++;
    }
    else if(humanChoice == "PAPER" && computerChoice == "ROCK"){
        getTextContent.textContent = "You have won the round!";
        humanScore++;
    }
    else if(humanChoice == "PAPER" && computerChoice == "SCISSORS"){
        getTextContent.textContent = "You have lost the round!";
        computerScore++;
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "PAPER"){
        getTextContent.textContent = "You have won the round!";
        humanScore++;
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "ROCK"){
        getTextContent.textContent = "You have lost the round!";
        computerScore++;
    }
    else if(humanChoice == computerChoice){
        getTextContent.textContent = "The round has ended in a tie!";
    }
    else{
        getTextContent.textContent = "";
    }

    const getScoreContent = document.querySelector(".display-score");
    getScoreContent.textContent = "P1: " + humanScore + " | " + "CPU: " + computerScore;
};

function checkScore(){
    if(humanScore < 5 && computerScore < 5){
        playRound(humanResult, computerResult);
    }
    else if(humanScore == 5){
        alert("You have won the game!");
    }
    else if(computerScore == 5){
        alert("You have lost the game!")
    };
};

function playGame (){
    
    for(let i = 0; i < 5; i++){
        let humanResult = getHumanChoice();
        let computerResult = getComputerChoice();
        
        playRound(humanResult, computerResult);
    };
};

playGame();
