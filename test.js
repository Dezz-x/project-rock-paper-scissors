function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"]
    let computerSelection = options[Math.floor(Math.random() * options.length)].toUpperCase();
    return computerSelection;
};

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
const computerResult = getComputerChoice();

const getScoreContent = document.querySelector(".display-score");
getScoreContent.textContent = "0";

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){

    const getTextContent = document.querySelector(".display-result")
    
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
        humanScore++;
    }
    else{
        getTextContent.textContent = "The round has ended in a tie!"
    }
};


/*function playGame (){
    
    for(let i = 0; i < 5; i++){

        const humanResult = getHumanChoice();
        const computerResult = getComputerChoice();
        
        playRound(humanResult, computerResult);

        console.log("Your score: " + humanScore);
        console.log("CPU score: " + computerScore);
    }

    if(humanScore > computerScore){
        alert("You have won the game!");
    }
    else if(humanScore < computerScore){
        alert("You have lost the game!");
    }
    else if(humanScore == computerScore){
        alert("Sudden death! Winner takes all!");
        
        const humanResult = getHumanChoice();
        const computerResult = getComputerChoice();
        
        playRound(humanResult, computerResult);
        
        if(humanScore == computerScore){
            alert("The game has ended in a tie!")
        }
        else if(humanScore > computerScore){
            alert("You are the winner of sudden death!")
        }
        else if(humanScore < computerScore){
            alert("You have lost sudden death!")
        };
    };
};

playGame();*/
