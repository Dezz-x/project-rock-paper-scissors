function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"]
    let computerSelection = options[Math.floor(Math.random() * options.length)].toUpperCase();
    console.log(computerSelection);
    return computerSelection;
};


function getHumanChoice(){
    
    let playerSelection = document.querySelector(".button-container");
    playerSelection.addEventListener("click", (e) => {
        
        let target = e.target;
        
        if(target.id == "Rock"){
            playRound("ROCK", getComputerChoice());
        }
        else if(target.id == "Paper"){
            playRound("PAPER", getComputerChoice());
        }
        else if(target.id == "Scissors"){
            playRound("SCISSORS", getComputerChoice());
        }
        else {
            alert("You must select Rock, Paper, or Scissors!");
        };
    });
};
let humanChoice = getHumanChoice();


let humanScore = 0;
let computerScore = 0;

const getScoreContent = document.querySelector(".display-score");
getScoreContent.textContent = "P1: " + humanScore + " | " + "CPU: " + computerScore;


function playRound(humanChoice, computerChoice){

    const getTextContent = document.querySelector(".display-result");
    getTextContent.textContent = "";
    
    if(humanChoice == "ROCK" && computerChoice=== "SCISSORS"){
        getTextContent.textContent = "You have won the round!";
        humanScore++;
    }
    else if(humanChoice == "ROCK" && computerChoice == "PAPER"){
        getTextContent.textContent = "You have lost the round!";
        computerScore++;
    }
    else if(humanChoice == "PAPER" && computerChoice== "ROCK"){
        getTextContent.textContent = "You have won the round!";
        humanScore++;
    }
    else if(humanChoice == "PAPER" && computerChoice== "SCISSORS"){
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
    else if(humanChoice === computerChoice){
        getTextContent.textContent = "The round is a tie!";
    }

    checkScore();

    const getScoreContent = document.querySelector(".display-score");
    getScoreContent.textContent = "P1: " + humanScore + " | " + "CPU: " + computerScore;

};

const buttonContainer = document.querySelector(".button-container");

function checkScore (){
    if(humanScore == 5){
        
        const updateTitle = document.querySelector("h1");
        updateTitle.textContent = "YOU HAVE WON THE GAME!"
        
        const removeButton = document.querySelector(".button-container")
        removeButton.remove();
        
        const removeText = document.querySelector(".display-result");
        removeText.remove();

        const restartButton = document.createElement("button");
        restartButton.style.cssText = "height: 50px; width: 200px; border: 2px solid #ededed;";
    }
    else if(computerScore == 5){

        const updateTitle = document.querySelector("h1");
        updateTitle.textContent = "YOU HAVE LOST THE GAME!"
        
        const removeButton = document.querySelector(".button-container")
        removeButton.remove();

        const removeText = document.querySelector(".display-result");
        removeText.remove();

        const restartButton = document.createElement("button");
        restartButton.style.cssText = "height: 50px; width: 200px; border: 2px solid #ededed;";
        
    };
};