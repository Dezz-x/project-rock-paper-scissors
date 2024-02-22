# The Odin Project: Rock, Paper, Scissors

# Project Goals:
1. Create a best of 5 rock, paper, scissors game.
2. Demonstrate the ability to use functions and conditional statements.
3. Add a score tracker that will update with each round

# Challenges:
- The first challenge I came across was finding a way for the CPU to randomly pick a value. To remedy this problem I decided to store the values of rock, paper, and scissors in an array. Next I created a variable of computerChoice that would loop over the length of the array and select a value at random. Finally, I created a getComputerChoice function that would return the variable of computerChoice. 

- The next issue I came across while creating this project was creating the score tracker. This was what I spent most of my time trying to figure out. Initially I was storing the variables of playerScore and computerScore within the playRound function. This would work, but only for 1 round; I needed the score to keep track of all 5 rounds. After much trial and error messing around with both the playGame function and playRound function I came to the realization that I should store the playerScore and computerScore variables globally. This move got the program working.

- Another challenge I faced was the edge case of the game resulting in a tie. If a player and the computer both won two rounds and tied one round the game would end in a 2-2 tie with 5 rounds being played. The next step was to create a separate alert that would display in this case. After this was accomplished I decided to add the playRound function one more time to create a best of 1 round. If this result ended in a tie an alert was shown saying the game has ended in a tie. 