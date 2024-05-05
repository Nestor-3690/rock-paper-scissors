// SET computer and human scores = 0
let computerScore = 0;
let humanScore = 0;

let buttons = document.querySelectorAll("button");
let result = document.querySelector("#result");
let score = document.querySelector("#score");

buttons.forEach((button) => button.addEventListener("click", () => playRound(button.id)))

function playGame() {

    // WHILE i < 5 playRound
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    // PRINT the Game's result
    if (computerScore > humanScore) {
        console.log(`You Lose the game! The score is ${humanScore} - ${computerScore}!`);
    } else if (computerScore < humanScore) {
        console.log(`You Win the game! The score is ${humanScore} - ${computerScore}!`);
    } else {
        console.log(`The game is a draw! The score is ${humanScore} - ${computerScore}!`);
    }
    
}

function playRound(humanChoice) {
    // SET computer and human choices
    const computerChoice = getComputerChoice();

    // CHECK and add points to the winner
    if (computerChoice === humanChoice) {
        // IF tie, no points added
        // SHOW Result of the Round and actual score
        result.textContent = "Tie!";
        score.textContent = `The score is still ${humanScore} - ${computerScore}!`;
    } else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "scissors" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "rock")) {
        // IF the computer wins, increment computerScore
        computerScore++;
        // SHOW Result of the Round and actual score
        result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        score.textContent = `The score is now ${humanScore} - ${computerScore}!`;
    } else {
        // IF the human wins, increment humanScore
        humanScore++;
        // SHOW Result of the Round and actual score
        result.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        score.textContent = `The score is now ${humanScore} - ${computerScore}!`;
    }

}

function getComputerChoice() {
    // COMPUTE a number > 0 and  < 100
    let number = Math.random() * 100;
    // DETERMINE a choice based on the number
    let choice;
    if (number < 33) {
        choice = "rock";
    } else if (number < 66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    // RETURN computer's choice
    return choice;
}

function getHumanChoice() {
    // GET Human's choice
    let choice = prompt("Rock, Paper or Scissors ?");
    // CONVERT the choice to lowercase for checking
    choice = choice.toLowerCase();
    // IF choice not valid, keep asking
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        getHumanChoice();
    } else {
        // RETURN human's choice
        return choice;
    }
}