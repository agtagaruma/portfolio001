const letters = document.querySelector(".letters"),
hints = document.querySelector(".hint span"),
guessLeft = document.querySelector(".guess-left span"),
wrongLetter = document.querySelector(".wrong-letter span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");

let word, maxGuesses, incorrectLetters = [], correctLetters = [];

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 10 : 6;
    correctLetters = []; incorrectLetters = [];
    hints.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        letters.innerHTML = html;
    }
}
randomWord();


// Sound Effects

const winningSound = new Audio('./sounds/correct.mp3');
const lossingSound = new Audio('./sounds/wrong.mp3');



function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    letters.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
            winningSound.play()
            alert(`Yey! you got the right ${word.toUpperCase()}`);
            return randomWord();
        } else if(maxGuesses < 1) {
            lossingSound.play()
            alert(`Sorry, you ran out of tries!`);
            for(let i = 0; i < word.length; i++) {
                letters.querySelectorAll("input")[i].value = word[i];
            }
            
        }
    }, 100);
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
letters.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());