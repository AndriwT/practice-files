// create a Rock, Paper, Scissors function that takes
// inputs from two players and return the result of the round.
// Example:
// player1 = "rock", player2 = "paper";
// output = "Player 2 won!"

const rockPaperScissors = (player1, player2) => {
  if (player1 === "paper") {
    if (player2 === "paper") {
      return "Draw!";
    }

    if (player2 === "rock") {
      return "Player 1 won!";
    }

    if (player2 === "scissors") {
      return "Player 2 won!";
    }
  }

  if (player1 === "rock") {
    if (player2 === "paper") {
      return "Player 2 won!";
    }

    if (player2 === "rock") {
      return "Draw!";
    }

    if (player2 === "scissors") {
      return "Player 1 won!";
    }
  }

  if (player1 === "scissors") {
    if (player2 === "paper") {
      return "Player 1 won!";
    }

    if (player2 === "rock") {
      return "Player 2 won!";
    }

    if (player2 === "scissors") {
      return "Draw!";
    }
  }
};

// console.log(rockPaperScissors("paper", "paper"));
// console.log(rockPaperScissors("paper", "rock"));
console.log(rockPaperScissors("paper", "scissors"));
// console.log(rockPaperScissors("rock", "scissors"));
// console.log(rockPaperScissors("scissors", "paper"));
