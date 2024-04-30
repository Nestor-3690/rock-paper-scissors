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
}

getComputerChoice();