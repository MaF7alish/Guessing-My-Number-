'use strict';
let secretNumbers = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

// When User click in Check Btn
document.querySelector(`.check`).addEventListener('click', function () {
  const inputValue = Number(document.querySelector(`.guess`).value);
  // When Input is empty
  if (!inputValue) {
    displayMessage(`No Number!`);
  }
  // When Guess is wrong
  if (inputValue != secretNumbers) {
    // When Guess is not Between 1 and 20
    if (inputValue > 20 || inputValue < 0) {
      displayMessage(`Choose Between 1 and 20`);
    } else {
      displayMessage(inputValue > secretNumbers ? `Go Lower..` : `Go higher..`);
    }
    if (score > 1) {
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You Lose!`);
      document.body.style.backgroundColor = `red`;
    }
  }
  // When Guess is True
  else if (inputValue === secretNumbers) {
    displayMessage(`You Win!`);
    document.querySelector(`.number`).textContent = secretNumbers;
    document.body.style.backgroundColor = 'green';
    document.querySelector(`.number`).style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  }
});
// When user Click Again Btn
document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumbers = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  displayMessage(`Start guessing...`);
  document.querySelector(`.guess`).value = ``;
});
