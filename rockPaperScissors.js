const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Please provide exactly rock or paper or scissors");
  return;
}

const userInput = args[0];
const validChoices = ["rock", "paper", "scissors"];

if (!validChoices.includes(userInput)) {
  console.log("Invalid choice. Please choose rock, paper, or scissors.");
}
