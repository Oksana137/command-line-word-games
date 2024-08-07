// node rockPaperScissors.js rock
// # Output: You chose rock. Computer chose scissors. You win!

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Please provide exactly rock or paper or scissors");
  return;
}

const userChoice = args[0];
const validChoices = ["rock", "paper", "scissors"];

if (!validChoices.includes(userChoice)) {
  console.log("Invalid choice. Please choose rock, paper, or scissors.");
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const computerChoice = validChoices[getRandomInt(3)];

function who_wins(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return "Draw";
  }

  switch (userChoice) {
    case "paper":
      return computerChoice == "paper" ? "You win" : "You lose";
      break;
    case "rock":
      return computerChoice == "scissors" ? "You win" : "You lose";
      break;
    case "scissors":
      return computerChoice == "paper" ? "You win" : "You lose";
      break;
  }
}

const result = who_wins(userChoice, computerChoice);

console.log(
  `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}!`
);
