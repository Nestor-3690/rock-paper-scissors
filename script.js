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
    return choice;
}

function getHumanChoice() {
    // Ask the Human to make his choice
    let choice = prompt("Rock, Paper or Scissors ?");
    // Convert the choice to lowercase for checking
    choice = choice.toLowerCase();
    // Check the choice
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        // Asking back the Human
        getHumanChoice();
    } else {
        console.log(choice);
    }

}

computerChoice = getComputerChoice();
humanChoice = getHumanChoice();