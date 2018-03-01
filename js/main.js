 //JavaScript Document

 console.log("Linked up");




 let currentWord=null,
 	wordHint = document.querySelector('.current-word'),
 	guessBox = document.querySelector('.guess'),
 	wrongGuesses = 0;

 	function showResetScreen(){
 		//user has lost, reset stuff and start over
 		debugger;
 		console.log('you lose, loser!');
 	}

 	function takeGuess() {
 		console.log(this.value);
 	}

 if (this.value =="" || this.value.length <1) {
 	return.
 }

 // set up the win and lose paths ( if / else )
 if (!currentWord.includes(this.value)) {
 	console.log('invalid letter!');
 	document.querySelector(`.wrong${wrongGuesses`).classList.add('show-piece');

 	if (wrongGuesses <=5) {
 		// increment the wrongGUesses variable
 		wrongGuesses++;
 	} else {
 		// you lose, reset the game
 		showResetScreen();
 	}

 	// if (currentWord.includes(this.value)) {
 	//console.log('valid letter!');    
 	//above is what you type when you want it to match the correct letter and the one above this one is what happens when you want to match a wrong letter
 	// losing path
 	// compare the letter guess to the word to see if its in there
 
 } else {
 	// winning path
 }