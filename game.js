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

const scoreBoard = document.querySelector(".score-board");
const playerScoreBoard = document.querySelector(".player-score");
const gameTitle = document.querySelector(".game-title");
const computerScoreBoard = document.querySelector(".computer-score");
const playerHandSection = document.querySelector(".player-choice");
const computerHandSection = document.querySelector(".computer-choice");

function createPlayAgainBtn() {
  const playAgainBtn = document.createElement("button");
  const btnContent = document.createTextNode("Play Again");
  playAgainBtn.appendChild(btnContent);
  document.body.appendChild(playAgainBtn);
  playAgainBtn.classList.add("play-again-btn");
  playAgainBtn.addEventListener("click", () => {
    playAgainBtn.remove();
    gameTitle.textContent = "Rock, Paper, Scissors";
    playerScoreBoard.textContent = 0;
    computerScoreBoard.textContent = 0;
    playerHandSection.innerHTML = "";
    computerHandSection.innerHTML = "";
  });
}

function getComputerChoice() {
  const computerChoice = hands[Math.floor(Math.random() * hands.length)];
  return computerChoice;
}


function getPlayerChoice() {  
  if (playerHandSection.hasChildNodes()){
    playerHandSection.innerHTML = "";
  }

  if(computerHandSection.hasChildNodes()){
    computerHandSection.innerHTML = "";
  }

  const playerChoice = this.id;
  const computerChoice = getComputerChoice();

  let playerHand = document.createElement("img");
  playerHand.setAttribute("src", `imgs/${playerChoice}.png`);
  playerHandSection.appendChild(playerHand);

  let computerHand = document.createElement("img");
  computerHand.setAttribute("src", `imgs/${computerChoice}.png`);
  computerHandSection.appendChild(computerHand);

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
      gameTitle.textContent ="Congrats! You Win The Game!";
    } else {
      gameTitle.textContent = "Sorry! You Lose!";
    }
    createPlayAgainBtn();
  }
  return;
}

function playRound(computerChoice, playerChoice) {
  let winner;

  if (computerChoice === playerChoice) {
    gameTitle.textContent = "It's a tye!";
  } else if (computerChoice === MOVES.ROCK && playerChoice === MOVES.PAPER) {
    gameTitle.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    winner = "player";
  } else if (computerChoice === MOVES.ROCK && playerChoice === MOVES.SCISSORS) {
    gameTitle.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    winner = "computer";
  } else if (computerChoice === MOVES.PAPER && playerChoice === MOVES.ROCK) {
    gameTitle.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    winner = "computer";
  } else if (
    computerChoice === MOVES.PAPER &&
    playerChoice === MOVES.SCISSORS
  ) {
    gameTitle.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    winner = "player";
  } else if (computerChoice === MOVES.SCISSORS && playerChoice === MOVES.ROCK) {
    gameTitle.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    winner = "player";
  } else if (
    computerChoice === MOVES.SCISSORS &&
    playerChoice === MOVES.PAPER
  ) {
    gameTitle.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    winner = "computer";
  } else {
    gameTitle.textContent = "Ops! We have a problem!";
  }

  return winner;
}
