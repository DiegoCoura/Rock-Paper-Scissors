const hands = ["rock", "paper", "scissors"];

const MOVES = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

let score = {
  computer: 0,
  player: 0,
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => btn.addEventListener("click", getPlayerChoice));

const scoreBoard = document.querySelector(".scoreBoard");
const playerScoreBoard = document.querySelector(".playerScore");
const computerScoreBoard = document.querySelector(".computerScore");
const currentRound = document.querySelector(".currentRound");

function createPlayAgainBtn() {
  const playAgainBtn = document.createElement("button");
  const btnContent = document.createTextNode("Play Again");
  playAgainBtn.appendChild(btnContent);
  document.body.appendChild(playAgainBtn);
  playAgainBtn.addEventListener("click", () => {
    playAgainBtn.remove();
    currentRound.textContent = "";
    playerScoreBoard.textContent = 0;
    computerScoreBoard.textContent = 0;
  });
}

function getComputerChoice() {
  const computerChoice = hands[Math.floor(Math.random() * hands.length)];
  return computerChoice;
}

function getPlayerChoice() {
  const playerChoice = this.id;
  const computerChoice = getComputerChoice();

  let winner = playRound(computerChoice, playerChoice);

  score[winner] += 1;

  playerScoreBoard.textContent = score["player"];
  computerScoreBoard.textContent = score["computer"];

  if (score[winner] === 5) {
    score = {
      computer: 0,
      player: 0,
    };
    if (winner === "player") {
      currentRound.textContent ="Congrats! You Win The Game!";
    } else {
      currentRound.textContent = "Sorry! You Lose!";
    }
    createPlayAgainBtn();
  }
  return;
}

function playRound(computerChoice, playerChoice) {
  let winner;

  if (computerChoice === playerChoice) {
    currentRound.textContent = "It's a tye!";
  } else if (computerChoice === MOVES.ROCK && playerChoice === MOVES.PAPER) {
    currentRound.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    winner = "player";
  } else if (computerChoice === MOVES.ROCK && playerChoice === MOVES.SCISSORS) {
    currentRound.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    winner = "computer";
  } else if (computerChoice === MOVES.PAPER && playerChoice === MOVES.ROCK) {
    currentRound.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    winner = "computer";
  } else if (
    computerChoice === MOVES.PAPER &&
    playerChoice === MOVES.SCISSORS
  ) {
    currentRound.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    winner = "player";
  } else if (computerChoice === MOVES.SCISSORS && playerChoice === MOVES.ROCK) {
    currentRound.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    winner = "player";
  } else if (
    computerChoice === MOVES.SCISSORS &&
    playerChoice === MOVES.PAPER
  ) {
    currentRound.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    winner = "computer";
  } else {
    currentRound.textContent = "Ops! We have a problem!";
  }

  return winner;
}
