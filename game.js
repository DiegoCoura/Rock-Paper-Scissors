const hands = ["rock", "paper", "scissors"];

const MOVES = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

function getComputerChoice() {
  const computerChoice = hands[Math.floor(Math.random() * hands.length)];

  return computerChoice;
}

function getPlayerChoice() {
  const playerChoice = prompt("Type Rock, Paper or Scissors: ").toLowerCase();
  console.log(playerChoice);
  return playerChoice;
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

function game() {
  let score = {
    computer: 0,
    player: 0,
  };

  for (i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    let key = playRound(computerChoice, playerChoice);

    score[key] += 1;

    console.log(score);
  }

  if (score.computer > score.player) {
    console.log("You Lose!");
  } else if (score.computer < score.player) {
    console.log("You Win!! Congrats!");
  } else {
    console.log("It's a tye! You should play again!");
  }
}

game();
