import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

/**
 * @constructor
 * @param {string} humanChoice
 * @param {string} computerChoice
 * @returns {string}
 */
function getPlayResult(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return 0;
  }
  if (humanChoice == "Rock" && computerChoice == "Paper") {
    return -1;
  }
  if (humanChoice == "Rock" && computerChoice == "Scissors") {
    return 1;
  }

  if (humanChoice == "Paper" && computerChoice == "Scissors") {
    return -1;
  }
  if (humanChoice == "Paper" && computerChoice == "Rock") {
    return 1;
  }

  if (humanChoice == "Scissors" && computerChoice == "Rock") {
    return -1;
  }
  if (humanChoice == "Scissors" && computerChoice == "Paper") {
    return 1;
  }
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

/**
 * @param {number} playerScore
 * @param {number} computerScore
 */
function getGameScore(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return 1;
  }
  if (playerScore < computerScore) {
    return -1;
  }
  return 0;
}

function showGameScore(resultText) {
  const body = document.querySelector("body");
  console.log(`body: ${body.innerHTML}`);
  const resultPara = document.createElement("p");
  resultPara.innerHTML = resultText;
  body.appendChild(resultPara);
  console.log(`result: ${resultPara.innerHTML}`);
  console.log(`body: ${body.innerHTML}`);
}

let humanSelection = "";

const choiceBtns = document.querySelectorAll("button");
let rounds = 0;
let result = 0;
let playerScore = 0;
let computerScore = 0;

choiceBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (rounds === 5) {
      const finalScore = getGameScore(playerScore, computerScore);
      if (finalScore === 0) {
        showGameScore("Result: It's a tie!");
      }
      if (finalScore === 1) {
        showGameScore("You Win!");
      }
      if (finalScore === -1) {
        showGameScore("Computer Wins!");
      }
    }

    humanSelection = e.target.innerHTML;

    const computerSelection = getComputerChoice();

    result = getPlayResult(humanSelection, computerSelection);

    if (result > 0) {
      playerScore += result;
    }
    if (result < 0) {
      computerScore += result * -1;
    }

    rounds += 1;
    const playerScoreSpan = document.getElementById("player-score");
    playerScoreSpan.innerHTML = playerScore;

    const computercoreSpan = document.getElementById("computer-score");
    computercoreSpan.innerHTML = computerScore;
  });
});
