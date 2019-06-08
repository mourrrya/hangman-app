'use strict';
class Hangman {
	constructor(word, remGuess) {
		this.word = word.toLowerCase().split('');
		this.remGuess = remGuess;
		this.guessedLetter = [];
		this.status = 'playing';
	}
	calculateStatus() {
		//debugger
		const finished = this.word.every((letter) => this.guessedLetter.includes(letter) || letter === ' ');

		//   1*   const letterUnguessed=this.word.filter((letter)=>{
		//         return !this.guessedLetter.includes(letter)
		//     })
		//    const finished = letterUnguessed.lenght===0;

		//   2*   let finished=true
		//        this.word.forEach((letter)=>{
		//        debugger
		//        if(this.guessedLetter.includes(letter)){
		//         }
		//        else{
		//         finished=false
		//     }
		// })
		if (this.remGuess === 0) {
			this.status = 'failed';
		} else if (finished) {
			this.status = 'finished';
		} else {
			this.status = 'playing';
		}
	}
	get StatusMessage() {
		if (this.status === 'playing') {
			return `Guesses left: ${this.remGuess}`;
		} else if (this.status === 'failed') {
			return `Nice try! The word was "${this.word.join('')}".`;
		} else {
			return 'Great work! You guessed the word.';
		}
	}
	get puzzle() {
		let puzzle = '';
		this.word.forEach((letter) => {
			if (this.guessedLetter.includes(letter) || letter === ' ') {
				puzzle = puzzle + letter;
			} else {
				puzzle = puzzle + '*';
			}
		});
		return puzzle;
	}
	makeGuess(guess) {
		const isUnique = !this.guessedLetter.includes(guess);
		const badGuess = !this.word.includes(guess);

		if (this.status !== 'playing') {
			return;
		}
		if (isUnique) {
			this.guessedLetter.push(guess);
		}
		if (isUnique && badGuess) {
			this.remGuess--;
		}
		this.calculateStatus()
	}
}

