let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let gussedNumber = parseInt(userInput.value);

    if (gussedNumber > randomNumber) {
        gameResult.textContent = ("Too High! Try Again.");
        gameResult.style.backgroundColor = "#1e217c";

    } else if (gussedNumber < randomNumber) {
        gameResult.textContent = ("Too Low! Try Again.");
        gameResult.style.backgroundColor = "#1e217c";

    } else if (gussedNumber === randomNumber) {
        gameResult.textContent = ("Congratulation! You Got It Right.");
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = ("Provide a valid user input.");
        gameResult.style.backgroundColor = "red";
    }
}
