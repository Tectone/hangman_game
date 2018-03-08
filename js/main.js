(() => {
  //put variables at top of js files everytime
var words = ["fruit", "frog", "cracker", "monkey", "bread", "bucket", "steak", "cup"];

let currentWord = words[Math.floor(Math.random()*words.length)],
    wordHint = document.querySelector('.currentWord'),
    guessBox = document.querySelector('.selectedLetter'),
    wrongGuesses = 0,
    correctGuesses = 0,
    resetScreen = document.querySelector('.reset_screen'),
    resetButton = resetScreen.querySelector('button'),
    wrongLetters = document.querySelector('.wrong_letters'),
    wrongLetterArray = []; //2 square brackets means array.

//functions go in the middle
function showResetScreen(message) {
  resetScreen.classList.add('show_piece');
  resetScreen.querySelector('h3').textContent = message;
}

function resetGame() {
  wrongGuesses = 0;
  correctGuesses = 0;
  wrongLetters.textContent = "";
  guessBox.value = "";
  wrongLetterArray = [];
  let gamePieces = Array.from(document.querySelectorAll('.show_piece'));
  gamePieces.forEach(piece => piece.classList.remove('show_piece'));
  init();
}

function makeGuess() {
  console.log(this.value);
  if (this.value == "" || this.value.length < 1 ) {
    return;
  }
  let currentGuess = this.value;

  if (currentWord.indexOf(this.value) < 0) {
  //this will check and keep track of wrong answers
    if (wrongGuesses >= 6) {
      console.log('you lose!');
      showResetScreen("Game Over");
    } else {
      wrongLetterArray.push(this.value);// this will push the letter to the array
      wrongLetters.textContent = wrongLetterArray.join(" ");
      document.querySelector(`.wrong${wrongGuesses}`).classList.add('show_piece');
    // increment the wrong with SVG
      wrongGuesses++;
    }

} else { //This else matches the if on line 37
  // person choose correct letter
  // split the current word into an arrw so we can check the letter where the guess matches
  var matchAgainst = currentWord.split('');
  var hintString = wordHint.textContent.split(' '); // this splits characters not underscore

  // loop through the current word and check each letters
  matchAgainst.forEach((letter, index) => {
    if (letter === currentGuess) {
      hintString[index] = currentGuess;
      correctGuesses++;
    }

  });

  wordHint.textContent = "";//makes the hint screen emtpy
  wordHint.textContent = hintString.join(" ");

  if (correctGuesses === currentWord.length) {
    showResetScreen("You won!");
  }

  }
  guessBox.value = "";
  console.log(currentWord);
}
resetButton.addEventListener('click', resetGame);

//this is the function to start the game
function init() {
  //picks a random number and matches it to a letter
  currentWord = words[Math.floor(Math.random()*words.length)];
  wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");
}
// the event handling always goes at the bottom
guessBox.addEventListener('keyup', makeGuess);
resetButton.addEventListener('click', resetGame);

init();
})();
