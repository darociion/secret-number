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

// Activate buttons and check if user selected option is correct
function start() {
    activateButtons();

    for (let i = 1; i <= 10; i++) {
        document.getElementById(`btn-${i}`).addEventListener('click', () => {
            if (i === generatedSecretNumber) {
                selectorInit('h6', 'You win!');
                disableButtons();
                document.querySelector('.start').disabled = true;
                document.querySelector('.newGame').disabled = false;
            } else if (i > generatedSecretNumber) {
                selectorInit('h6', 'Wrong number, try lower!');
                document.getElementById(`btn-${i}`).disabled = true;
                document.getElementById(`btn-${i}`).classList.add('wrongOption');
                document.getElementById(`btn-${i}`).innerText = "x";
            }
            else {
                selectorInit('h6', 'Wrong number, try higher!');
                document.getElementById(`btn-${i}`).disabled = true;
                document.getElementById(`btn-${i}`).classList.add('wrongOption');
                document.getElementById(`btn-${i}`).innerText = "x";
            }
        });
    }
}

// Initialize a new game
function newGame() {
    generatedSecretNumber = secretNumber();
    selectorInit('h6', 'between 1 and 10');
    document.querySelector('.start').disabled = false;
    document.querySelector('.newGame').disabled = true;
}

function activateButtons() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`btn-${i}`).disabled = false;
    }
}

function disableButtons() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`btn-${i}`).disabled = true;
        document.getElementById(`btn-${i}`).classList.remove('wrongOption');
        document.getElementById(`btn-${i}`).innerText = i;
    }
}

newGame();