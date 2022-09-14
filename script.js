"use strict";

//TODO: Formula for dice = Math.trunc(Math.random() * 6) + 1

let dice;
let playerTurn = 0;
let player1CurrentScore = Number(
  document.querySelector("#current--0").textContent
);
let player2CurrentScore = Number(
  document.querySelector("#current--1").textContent
);
let player1TotalScore = Number(document.querySelector("#score--0").textContent);
let player2TotalScore = Number(document.querySelector("#score--1").textContent);
let dicePicture = document.querySelector(".dice");

const diceButton = document.querySelector(".btn.btn--roll");
const holdButton = document.querySelector(".btn.btn--hold");
const newGameButton = document.querySelector(".btn.btn--new");
const playerActive = document.querySelectorAll(".player");

const rollDice = function () {
  dice = Math.trunc(Math.random() * 6) + 1;
  dicePicture.src = `http://127.0.0.1:8080/dice-${String(dice)}.png`;
  currentIncrease();
};

const currentIncrease = function () {
  if (dice % 2 === 0) {
    if (playerTurn % 2 === 0) {
      player1CurrentScore = player1CurrentScore + dice;
      document.querySelector("#current--0").textContent = player1CurrentScore;
    } else {
      player2CurrentScore = player2CurrentScore + dice;
      document.querySelector("#current--1").textContent = player2CurrentScore;
    }
  } else {
    player1CurrentScore = 0;
    document.querySelector("#current--0").textContent = player1CurrentScore;
    player2CurrentScore = 0;
    document.querySelector("#current--1").textContent = player2CurrentScore;
    holdActions();
  }
};

for (let i = 0; i < playerActive.length; i++) {
  playerActive[i];
}

const playerActiveStyleChanging = function () {
  if (playerTurn % 2 === 0) {
    playerActive[0].classList.remove("player--active");
    playerActive[1].classList.add("player--active");
  } else {
    playerActive[1].classList.remove("player--active");
    playerActive[0].classList.add("player--active");
  }
};

const holdActions = function () {
  if (playerTurn % 2 === 0) {
    player1TotalScore = player1CurrentScore + player1TotalScore;
    document.querySelector("#score--0").textContent = player1TotalScore;
    player1CurrentScore = 0;
    document.querySelector("#current--0").textContent = player1CurrentScore;
  } else {
    player2TotalScore = player2CurrentScore + player2TotalScore;
    document.querySelector("#score--1").textContent = player2TotalScore;
    player2CurrentScore = 0;
    document.querySelector("#current--1").textContent = player2CurrentScore;
  }
  playerActiveStyleChanging();
  playerTurn++;
};

const newGameActions = function () {
  player1CurrentScore = 0;
  player2CurrentScore = 0;
  player1TotalScore = 0;
  player2TotalScore = 0;
  document.querySelector("#score--0").textContent = player1TotalScore;
  document.querySelector("#current--0").textContent = player1CurrentScore;
  document.querySelector("#score--1").textContent = player2TotalScore;
  document.querySelector("#current--1").textContent = player2CurrentScore;
  if (playerTurn % 2 === 0) {
  } else {
    playerActive[1].classList.remove("player--active");
    playerActive[0].classList.add("player--active");
  }
};

diceButton.addEventListener("click", rollDice);
holdButton.addEventListener("click", holdActions);
newGameButton.addEventListener("click", newGameActions);
