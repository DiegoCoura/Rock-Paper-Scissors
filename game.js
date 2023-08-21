const hands = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const computerChoice = hands[(Math.floor(Math.random() * hands.length))];
    console.log(computerChoice);
    return computerChoice;
}

function getPlayerChoice(){
    const playerChoice = prompt("Type Rock, Paper or Scissors: ").toLocaleLowerCase();
    console.log(playerChoice);
    return playerChoice;
}

function playRound(getComputerChoice, getPlayerChoice){
    let winner; 
    if (getComputerChoice === getPlayerChoice){
        console.log("It'S a tye!");
        return;
    } else if (getComputerChoice === "rock" && getPlayerChoice === "paper"){
        console.log("You Win! Paper beats Rock!");
        winner = "player";
        return;
    } else if(getComputerChoice === "rock" && getPlayerChoice === "scissors"){
        console.log("You Lose! Rock beats Scissors!");
        winner = "computer";
        return;
    } else if(getComputerChoice === "paper" && getPlayerChoice === "rock"){
        console.log("You lose! Paper beats Rock!");
        winner = "computer";
        return;
    } else if (getComputerChoice === "paper" && getPlayerChoice === "scissors"){
        console.log("You Win! Scissors beats paper!");
        winner = "player";
        return;
    } else if (getComputerChoice === "scissors" && getPlayerChoice === "rock"){
        console.log("You Win! Rock beats Scissors!");
        winner = "player";
        return;
    } else if (getComputerChoice === "scissors" && getPlayerChoice === "paper"){
        console.log("You Lose! Scissors beats paper!");
        winner = "computer";
        return;
    } else {
        console.log("Ops! We have a problem!")
    }
}

playRound(getComputerChoice(), getPlayerChoice());

function game(){
    let score = {
        "computer": 0,
        "player": 0,
    }

}