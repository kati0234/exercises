// Determine the winner metode et med els if
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }
  return "lose";
}

// metode to med

const outcomes = {
  rock: { rock: "draw", paper: "computer", scissors: "user" },
  paper: { rock: "user", paper: "draw", scissors: "computer" },
  scissors: { rock: "computer", paper: "user", scissors: "draw" },
};

function determinwinner() {
  result = outcomes[userGuess][computerGuess];
  console.log("Result:", result);

  // Vise resultatet på skærmen
  if (result === "user") {
    win.classList.remove("hidden");
  } else if (result === "computer") {
    lose.classList.remove("hidden");
  } else if (result === "draw") {
    draw.classList.remove("hidden");
  }

  // Vis "Play Again"-knappen
  againButton.style.display = "block";
  againButton.addEventListener("click", PlayAgain);
}

// metode 3

function determinwinner() {
  if (userGuess === "rock" && computerGuess === "rock") {
    result = "draw";
  }
  if (userGuess === "rock" && computerGuess === "paper") {
    result = "computer";
  }
  if (userGuess === "rock" && computerGuess === "scissors") {
    result = "user";
  }

  if (userGuess === "paper" && computerGuess === "rock") {
    result = "user";
  }
  if (userGuess === "paper" && computerGuess === "paper") {
    result = "draw";
  }
  if (userGuess === "paper" && computerGuess === "scissors") {
    result = "computer";
  }

  if (userGuess === "scissors" && computerGuess === "rock") {
    result = "computer";
  }
  if (userGuess === "scissors" && computerGuess === "paper") {
    result = "user";
  }
  if (userGuess === "scissors" && computerGuess === "scissors") {
    result = "draw";
  }

  // Vise resultatet på skærmen
  if (result === "user") {
    win.classList.remove("hidden"); // Vis "You win!"
  } else if (result === "computer") {
    lose.classList.remove("hidden"); // Vis "You lose!"
  } else if (result === "draw") {
    draw.classList.remove("hidden"); // Vis "It's a draw!"
  }
  // Vis "Play Again"-knappen efter spillet

  againButton.classList.remove("hidden");
  againButton.addEventListener("click", PlayAgain);
  console.log("result", result);
}
