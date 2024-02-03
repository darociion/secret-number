let generatedSecretNumber = 0;

// Generate random secret number
function secretNumber() {
    return Math.floor(Math.random() * 10) + 1;   
}

// Generate selector title
function selectorInit(selector, phrase) {
    let title = document.querySelector(selector);
    title.innerHTML = phrase;
}

// Check if user number is correct
function check() {
    const number = parseInt(document.querySelector('.number').value);
    if (number === generatedSecretNumber) {
        selectorInit('h6', 'You win!');
        document.querySelector('.check').disabled = true;
        document.querySelector('.newGame').disabled = false;
    } else if (number > generatedSecretNumber) {
        selectorInit('h6', 'Wrong number, try lower!');
        document.querySelector('.number').value = '';
    }
    else {
        selectorInit('h6', 'Wrong number, try higher!');
        document.querySelector('.number').value = '';
    }
}

// Initialize a new game
function newGame() {
    generatedSecretNumber = secretNumber();
    selectorInit('h6', 'between 1 and 10');
    document.querySelector('.number').value = '';
    document.querySelector('.check').disabled = false;
    document.querySelector('.newGame').disabled = true;
}

newGame();