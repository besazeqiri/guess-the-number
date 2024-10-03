let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = document.getElementById('guess').value;
    attempts++;
    let message = '';

    if (guess == secretNumber) {
        message = `Congratulations! You guessed it right in ${attempts} attempts.`;
        document.getElementById('message').style.color = '#60b347'; 
        resetGame();
    } else if (guess > secretNumber) {
        message = 'Too high! Try again.';
    } else {
        message = 'Too low! Try again.';
    }

    document.getElementById('message').textContent = message;
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
}
