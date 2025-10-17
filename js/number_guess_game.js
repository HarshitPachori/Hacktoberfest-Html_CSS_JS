let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  const message = document.getElementById('message');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "⚠️ Enter a valid number between 1 and 100!";
  } else if (guess === randomNumber) {
    message.textContent = "🎉 Congratulations! You guessed it right!";
    message.style.color = "green";
  } else if (guess > randomNumber) {
    message.textContent = "Too high! Try again ⬇️";
    message.style.color = "red";
  } else {
    message.textContent = "Too low! Try again ⬆️";
    message.style.color = "orange";
  }
}
