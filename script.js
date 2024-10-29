const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const message = document.getElementById("message");
    attempts++;

    if (isNaN(userGuess)) {
        message.textContent = "Please enter a valid number!";
    } else if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Please guess a number between 1 and 100!";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    }
}