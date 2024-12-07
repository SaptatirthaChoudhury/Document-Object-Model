const randomNumber = parseInt(Math.random() * 100 + 1);

// submit guess
const submit = document.querySelector("#subt");
// Input guess
const userInput = document.querySelector("#guessField");
// Previous guesses
const guessSlot = document.querySelector(".guesses");
// Remaining guesses
const remaining = document.querySelector(".remaining");
//Check Low or High of guess
const lowOrHi = document.querySelector(".lowOrHigh");
// Result of guesses
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
// Initializing with true to start the game
let playGames = true;

if (playGames) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please entera valid number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  const disableSubmit = document.getElementById("subt");
  disableSubmit.setAttribute("disabled", "disabled");
  disableSubmit.style.cursor = "not-allowed";
  const starGameButton = document.createElement("button");
  starGameButton.innerHTML = '<h2 id="newGame"> Start new Game</h2>';
  starGameButton.className = "custom-button";
  startOver.appendChild(starGameButton);
  playGames = false;

  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    playGames = true;
  });
}
