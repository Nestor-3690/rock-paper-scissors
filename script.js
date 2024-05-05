let computerScore = 0;
let humanScore = 0;
let finalScore = `${humanScore} - ${computerScore}`;
let gameOver = false;

let buttons = document.querySelectorAll("button");
let result = document.querySelector("#result");
let score = document.querySelector("#score");

// FOR each button, when clicked, playRound with value of the button
buttons.forEach((button) => button.addEventListener("click", () => playRound(button.id)))

function playRound(humanChoice) {
    // IF gameOver is true, then the Round isn't played, else played normally
    if (gameOver) {
        result.textContent = "Reload the page to play again!"
    } else {
        const computerChoice = getComputerChoice();

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

        // IF someone has 5 or more points, then he wins and the game is Over
        if (computerScore >=5 || humanScore >= 5) {
            finalScore = `${humanScore} - ${computerScore}`;
            gameOver = true;
            if (computerScore >= 5){
                score.textContent = `Computer Win ! ${finalScore}`;
            } else {
                score.textContent = `You Win ! ${finalScore}`;
            }
        }
    }

}

function getComputerChoice() {
    // COMPUTE a number between 0 and 3
    let number = Math.random() * 3;
    // DETERMINE a choice based on the number
    let choice;
    if (number < 1) {
        choice = "rock";
    } else if (number < 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}