// SET computer and human score
let computerScore = 0;
let humanScore = 0;
playRound();

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