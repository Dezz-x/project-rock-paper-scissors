function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"]
    let computerSelection = options[Math.floor(Math.random() * options.length)].toUpperCase();
    return computerSelection;
};

function getHumanChoice(){
    let playerSelection = prompt("Select your fighter:").toUpperCase();

    switch(playerSelection){
        case "ROCK":
            console.log ("ROCK")
            break;

        case "PAPER":
            console.log("PAPER")
            break;
        
        case "SCISSORS":
            console.log("SCISSORS")
            break;
        
        default:
            alert("You must choose Rock, Paper, or Scissors!")
            getHumanChoice();
    };
    return playerSelection;
};

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){
    
    if(humanChoice == "ROCK" && computerChoice === "SCISSORS"){
        console.log("You have won the round!");
        humanScore++;
    }
    else if(humanChoice == "ROCK" && computerChoice == "PAPER"){
        console.log("You have lost the round!");
        computerScore++;
    }
    else if(humanChoice == "PAPER" && computerChoice == "ROCK"){
        console.log("You have won the round!");
        humanScore++;
    }
    else if(humanChoice == "PAPER" && computerChoice == "SCISSORS"){
        console.log("You have lost the round!");
        computerScore++;
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "PAPER"){
        console.log("You have won the round!");
        humanScore++;
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "ROCK"){
        console.log("You have lost the round!");
        humanScore++;
    }
    else{
        console.log("The round has ended in a tie")
    }
};


function playGame (){
    
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

playGame();
