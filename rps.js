function getComputerChoice() {
  randomNumber = Math.round(Math.random() * 2);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "scissors";
  } else if (randomNumber === 2) {
    return "paper";
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt("What's your input? Rock, paper, or scissors?");
  return humanChoice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === "rock") {
//     if (computerChoice === "rock") {
//       console.log("It's a tie bro!");
//     } else if (computerChoice === "paper") {
//       console.log("You win. Computer chose paper.");
//     } else {
//       console.log("You lose. Computer chose scissors.");
//     }
//   }
// }

// playRound(humanChoice, computerChoice);
