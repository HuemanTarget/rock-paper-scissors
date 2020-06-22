const choices = ["Rock", "Paper", "Scissors"];

const player = {
  currentChoice: null,
};

const computer = {
  currentChoice: null,
};

const randomIndex = Math.floor(Math.random() * choices.length);

computer.currentChoice = choices[randomIndex];
player.currentChoice = choices[2]

// console.log(`The computer chose ${computer.currentChoice}`);

if (
  player.currentChoice === choices[0] &&
  computer.currentChoice === choices[2]
) {
  console.log(
    `Player wins! ${player.currentChoice} beats ${computer.currentChoice}!`
  );
} else if (
  player.currentChoice === choices[1] &&
  computer.currentChoice === choices[0]
) {
  console.log(
    `Player wins! ${player.currentChoice} beats ${computer.currentChoice}!`
  );
} else if (
  player.currentChoice === choices[2] &&
  computer.currentChoice === choices[1]
) {
  console.log(
    `Player wins! ${player.currentChoice} beats ${computer.currentChoice}!`
  );
} else if (player.currentChoice === computer.currentChoice) {
  console.log(
    `Tie! Player picked ${player.currentChoice} and Computer picked ${computer.currentChoice}!`
  );
}else{
  console.log(
    `Computer wins! ${computer.currentChoice} beats ${player.currentChoice}!`
  );
}
