/**
 * @constructor
 * @param {string} humanChoice
 * @param {string} computerChoice
 */
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It's a tie!");
  }
  if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log("Computer Wins!");
  }
  if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log("You Win!");
  }

  if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log("Computer Wins!");
  }
  if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log("You Win!");
  }

  if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log("Computer Wins!");
  }
  if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log("You Wins!");
  }
}

/**
 * @constructor
 * @returns {string}
 */
function getHumanChoice() {
  return prompt('Enter your Choise from "Rock", "Paper", "Scissors": ');
}

/**
 * @constructor
 * @returns {string}
 */
function getComputerChoice() {
  let chance = Math.random() * 3;
  if (chance >= 2) {
    return "Rock";
  }
  if (chance >= 1) {
    return "Scissors";
  }
  if (chance >= 0) {
    return "Paper";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
