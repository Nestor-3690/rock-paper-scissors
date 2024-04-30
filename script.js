// SET computer and human scores
let computerScore = 0;
let humanScore = 0;
// RUN the game
playGame();

function playGame() {

    // PLAY 5 Games
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    // SHOW the Game's result
    if (computerScore > humanScore) {
        console.log(`You Win the game! The score is ${humanScore} - ${computerScore}!`);
    } else if (computerScore < humanScore) {
        console.log(`You Lose the game! The score is ${humanScore} - ${computerScore}!`);
    } else {
        console.log(`The game is a draw! The score is ${humanScore} - ${computerScore}!`);
    }
    
}

function playRound() {
    // SET computer and human choices
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    // CHECK and add points to the winner
    if (computerChoice === humanChoice) {
        // IF tie, no points added
        console.log("Tie!");
        console.log(`The score is still ${humanScore} - ${computerScore}!`);
    } else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "scissors" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "rock")) {
        // IF the computer wins, he gains a point
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`The score is now ${humanScore} - ${computerScore}!`);
    } else {
        // IF the human wins, he gains a point
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        console.log(`The score is now ${humanScore} - ${computerScore}!`);
    }

}

function getComputerChoice() {
    // GET a number > 0 and  < 100
    let number = Math.random() * 100;
    console.log(number);
    // SET a choice based on the number
    let choice;
    if (number < 33) {
        choice = "rock";
    } else if (number < 66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    // RETURN computer's choice
    console.log(choice)
    return choice;
}

function getHumanChoice() {
    // ASK the Human to make his choice
    let choice = prompt("Rock, Paper or Scissors ?");
    // CONVERT the choice to lowercase for checking
    choice = choice.toLowerCase();
    // CHECK the choice
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        // ASKING back the Human
        getHumanChoice();
    } else {
        console.log(choice);
        // RETURN human's choice
        return choice;
    }
}