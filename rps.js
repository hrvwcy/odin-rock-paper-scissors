function getComputerChoice() {
  randomNumber = Math.round(Math.random() * 2);
  console.log(`You got the random number ${randomNumber}`);

  if (randomNumber === 0) {
    console.log("ROCK!");
  } else if (randomNumber === 1) {
    console.log("SCISSORS!");
  } else if (randomNumber === 2) {
    console.log("PAPER!");
  }
}

function getHumanChoice() {
  let humanChoice = prompt("What's your input?");
  if (humanChoice === "rock") {
    console.log(`YOU CHOSE ROCK!`);
  } else if (humanChoice === "scissors") {
    console.log(`YOU CHOSE SCISSORS!`);
  } else if (humanChoice === "paper") {
    console.log(`YOU CHOSE PAPER!`);
  }
}

let humanScore = 0;
let computerScore = 0;
