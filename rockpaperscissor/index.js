"use strict";
let userGuess;
let computerGuess;
let result;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerHand = document.querySelector("#player1");
const comHand = document.querySelector("#player2");
const againButton = document.getElementById("again");
// texts
const draw = document.querySelector("#draw");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
// tiføjer klik

window.addEventListener("load", PlayAgain);
const choices = ["rock", "paper", "scissors"];
// genstarte spil
function PlayAgain() {
  console.log("playReady");

  // skal ind i start game funktion eller ..
  rock.addEventListener("click", rockClicked);
  paper.addEventListener("click", paperClicked);
  scissors.addEventListener("click", scissorsClicked);

  //   fjeren klasser på hænder
  playerHand.classList.remove("shake", "paper", "scissors");
  comHand.classList.remove("shake", "paper", "scissors");

  // tilføjer hidden igen
  document.getElementById("draw").classList.add("hidden");
  document.getElementById("win").classList.add("hidden");
  document.getElementById("lose").classList.add("hidden");

  // add play again knap fjernes
  againButton.removeEventListener("click", PlayAgain);
  againButton.classList.add("hidden");
}

function rockClicked() {
  playerHand.classList.add("shake");
  console.log("ROCK CLIKED");
  //   lytter til animaton ender og fjeren shake og tilføjer rock
  playerHand.addEventListener("animationend", () => {
    playerHand.classList.remove("shake");
    playerHand.classList.add("rock");
  });
  userGuess = "rock";
  computerGuesses();
}
function paperClicked() {
  playerHand.classList.add("shake");
  //   lytter til animaton ender og fjeren shake og tilføjer paper
  playerHand.addEventListener("animationend", () => {
    playerHand.classList.remove("shake");
    playerHand.classList.add("paper");
  });
  userGuess = "paper";
  computerGuesses();
  console.log("paper CLIKED");
}
function scissorsClicked() {
  playerHand.classList.add("shake");
  //   lytter til animaton ender og fjeren shake og tilføjer scisprs
  playerHand.addEventListener("animationend", () => {
    playerHand.classList.remove("shake");
    playerHand.classList.add("scissors");
  });
  userGuess = "scissors";
  computerGuesses();

  console.log("scissors CLIKED");
}
function computerGuesses() {
  comHand.classList.add("shake");

  computerGuess = choices[Math.floor(Math.random() * choices.length)];
  console.log("Computer gætter", computerGuess);
  // Lytter til animationens afslutning, fjerner 'shake' og tilføjer computerens valg
  comHand.addEventListener("animationend", () => {
    comHand.classList.remove("shake");
    // tilføjer det valgt ud fra computer gæt
    comHand.classList.add(computerGuess);
    determinwinner();
  });
}

function determinwinner() {
  // Bestem resultatet baseret på valg
  if (userGuess === computerGuess) {
    result = "draw";
  } else if (
    (userGuess === "rock" && computerGuess === "scissors") ||
    (userGuess === "paper" && computerGuess === "rock") ||
    (userGuess === "scissors" && computerGuess === "paper")
  ) {
    result = "win";
  } else {
    result = "lose";
  }
  // vigtigt for at det funger med draw
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");

  // Vise resultatet på skærmen
  if (result === "win") {
    win.classList.remove("hidden");
  } else if (result === "lose") {
    lose.classList.remove("hidden");
  } else if (result === "draw") {
    draw.classList.remove("hidden");
  }
  // sender til play again
  againButton.classList.remove("hidden");
  againButton.addEventListener("click", PlayAgain);
  console.log("result", result);
  //   if (userGuess === computerGuess) {
  //     result = "draw";
  //     draw.classList.remove("hidden");
  //   }
  //   if (
  //     (userGuess === "rock" && computerGuess === "scissors") ||
  //     (userGuess === "paper" && computerGuess === "rock") ||
  //     (userGuess === "scissors" && computerGuess === "paper")
  //   ) {
  //     result = "win";
  //     win.classList.remove("hidden");
  //   }
  //     result = "lose";
  //     lose.classList.remove("hidden");
  //   }

  //   if (userGuess === "rock" && computerGuess === "rock") {
  //     result = "draw";
  //   }
  //   if (userGuess === "rock" && computerGuess === "paper") {
  //     result = "computer";
  //   }
  //   if (userGuess === "rock" && computerGuess === "scissors") {
  //     result = "user";
  //   }

  //   if (userGuess === "paper" && computerGuess === "rock") {
  //     result = "user";
  //   }
  //   if (userGuess === "paper" && computerGuess === "paper") {
  //     result = "draw";
  //   }
  //   if (userGuess === "paper" && computerGuess === "scissors") {
  //     result = "computer";
  //   }

  //   if (userGuess === "scissors" && computerGuess === "rock") {
  //     result = "computer";
  //   }
  //   if (userGuess === "scissors" && computerGuess === "paper") {
  //     result = "user";
  //   }
  //   if (userGuess === "scissors" && computerGuess === "scissors") {
  //     result = "draw";
  //   }
}
