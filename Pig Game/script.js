"use strict";

const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");
const totalScore_0 = document.querySelector("#score--0");
const totalScore_1 = document.querySelector("#score--1");
const currentScore_0 = document.querySelector("#current--0");
const currentScore_1 = document.querySelector("#current--1");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");

const diceImg = document.querySelector(".dice");
let sumOfDice = 0;
let isHoldButtonPressed = false;
let randomDice;
/**
 * Logic of User rolls dice:- _______________________
 * When user rolls dice -> Generate random dice roll -> Display dice roll -> is it 1? -> No -> Add dice roll to currentscore -> Display new score.If Yes -> Switch player.Check flowchart for clear understanding the game logic.
 */

function playRandomDice() {
  randomDice = parseInt(Math.random() * 6) + 1;
  if (randomDice === 1) {
    playerSwitchingByRandomDiceOne();
  }
  sumOfDice += randomDice;
  diceImg.src = `dice-${randomDice}.png`;
  if (player_1.classList.contains("player--active")) {
    currentScore_1.textContent = randomDice;
  } else {
    currentScore_0.textContent = randomDice;
  }
}

/**
 * Whenever player pressed Hold button playing mode gets switched from Player_0 to Player_1 or vice-versa
 */
function holdTotalScore() {
  if (player_0.classList.contains("player--active")) {
    totalScore_0.textContent = sumOfDice;
    sumOfDice = 0;
  } else {
    totalScore_1.textContent = sumOfDice;
    sumOfDice = 0;
  }

  isHoldButtonPressed = true;
  playerSwitching();
}

/**
 * This function get executed whenever randomDice generate 1
 */
function playerSwitchingByRandomDiceOne() {
  holdTotalScore();
}

/**
 * This function get executed whenever Hold button pressed
 */
function playerSwitching() {
  if (isHoldButtonPressed) {
    if (player_0.classList.contains("player--active")) {
      player_0.classList.remove("player--active");
      player_1.classList.add("player--active");
    } else {
      player_1.classList.remove("player--active");
      player_0.classList.add("player--active");
    }
  }
}

/**
 * Start new game
 */
function startNewGame() {
  totalScore_0.textContent = totalScore_1.textContent = 0;
  currentScore_0.textContent = currentScore_1.textContent = 0;
  diceImg.src = `dice-${1}.png`;
}

buttonRoll.addEventListener("click", playRandomDice);

buttonHold.addEventListener("click", holdTotalScore);

buttonNew.addEventListener("click", startNewGame);
