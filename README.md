# The Odin Project: Rock, Paper, Scissors

# Project Goals:
1. Create a best of 5 rock, paper, scissors game.
2. Demonstrate the ability to use functions and conditional statements.
3. Add a score tracker that will update with each round

# Challenges:
- The first challenge I came across was finding a way for the CPU to randomly pick a value. To remedy this problem I decided to store the values of rock, paper, and scissors in an array. Next I created a variable of computerChoice that would loop over the length of the array and select a value at random. Finally, I created a getComputerChoice function that would return the variable of computerChoice. 

- The next issue I came across while creating this project was creating the score tracker. This is what I spent most of my time trying to figure out. Initially I was storing the variables of playerScore and computerScore within the playRound function. This would work, but only for 1 round; I needed the score to keep track of all 5 rounds. After much trial and error messing around with both the playGame function and playRound function I came to the realization that I should store the playerScore and computerScore variables globally. This simple move got the program working.

- 