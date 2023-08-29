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

let playerScoreBoard = document.querySelector(".playerScore");
let computerScoreBoard = document.querySelector(".computerScore");

function getComputerChoice() {
  const computerChoice = hands[Math.floor(Math.random() * hands.length)];
  return computerChoice;
}

function getPlayerChoice() {
  const playerChoice = this.id;
  const computerChoice = getComputerChoice();

  let winner = playRound(computerChoice, playerChoice);

  score[winner] += 1;

  playerScoreBoard.textContent = (score["player"])
  computerScoreBoard.textContent = (score["computer"]);

  if (score[winner] === 5) {
    score = {
      computer: 0,
      player: 0,
    };
    if (winner === "player") {
      console.log(`Congrats! You Win The Game!`);
      return;
    } else {
      console.log("Sorry Game Over!");     
      return;
    }
  }
  return;
}

function playRound(computerChoice, playerChoice) {
  let winner;

  if (computerChoice === playerChoice) {
    console.log("It'S a tye!");
  } else if (computerChoice === MOVES.ROCK && playerChoice === MOVES.PAPER) {
    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
    winner = "player";
  } else if (computerChoice === MOVES.ROCK && playerChoice === MOVES.SCISSORS) {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
    winner = "computer";
  } else if (computerChoice === MOVES.PAPER && playerChoice === MOVES.ROCK) {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
    winner = "computer";
  } else if (
    computerChoice === MOVES.PAPER &&
    playerChoice === MOVES.SCISSORS
  ) {
    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
    winner = "player";
  } else if (computerChoice === MOVES.SCISSORS && playerChoice === MOVES.ROCK) {
    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
    winner = "player";
  } else if (
    computerChoice === MOVES.SCISSORS &&
    playerChoice === MOVES.PAPER
  ) {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
    winner = "computer";
  } else {
    console.log("Ops! We have a problem!");
  }

  return winner;
}
