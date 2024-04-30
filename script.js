// SET computer and human score
let computerScore = 0;
let humanScore = 0;

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
    console.log(choice);
    // RETURN computer's choice
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
// SET computer and human choice
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();