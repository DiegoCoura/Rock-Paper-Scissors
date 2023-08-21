const hands = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerChoice = hands[Math.floor(Math.random() * hands.length)];
  console.log(computerChoice);
  return computerChoice;
}

function getPlayerChoice() {
  const playerChoice = prompt(
    "Type Rock, Paper or Scissors: "
  ).toLocaleLowerCase();
  console.log(playerChoice);
  return playerChoice;
}

function playRound(getComputerChoice, getPlayerChoice) {
  let winner;
  if (getComputerChoice === getPlayerChoice) {
    console.log("It'S a tye!");
    return;
  } else if (getComputerChoice === "rock" && getPlayerChoice === "paper") {
    console.log("You Win! Paper beats Rock!");
    winner = "player";
    return winner;
  } else if (getComputerChoice === "rock" && getPlayerChoice === "scissors") {
    console.log("You Lose! Rock beats Scissors!");
    winner = "computer";
    return winner;
  } else if (getComputerChoice === "paper" && getPlayerChoice === "rock") {
    console.log("You lose! Paper beats Rock!");
    winner = "computer";
    return winner;
  } else if (getComputerChoice === "paper" && getPlayerChoice === "scissors") {
    console.log("You Win! Scissors beats paper!");
    winner = "player";
    return winner;
  } else if (getComputerChoice === "scissors" && getPlayerChoice === "rock") {
    console.log("You Win! Rock beats Scissors!");
    winner = "player";
    return winner;
  } else if (getComputerChoice === "scissors" && getPlayerChoice === "paper") {
    console.log("You Lose! Scissors beats paper!");
    winner = "computer";
    return winner;
  } else {
    console.log("Ops! We have a problem!");
  }
}

function game(playRound, getComputerChoice, getPlayerChoice) {
  let score = {
    computer: 0,
    player: 0,
  };

  for (i = 1; i <= 5; i++) {
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

game(playRound, getComputerChoice, getPlayerChoice);
