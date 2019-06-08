"use strict";

const isPuzzle = document.querySelector("#puzzle");
const isRemGuess = document.querySelector("#remGuess");
let game1;

//isPuzzle.textContent = game1.puzzle;
window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  isPuzzle.innerHTML ='' 
  isRemGuess.textContent = game1.StatusMessage;

  game1.puzzle.split('').forEach((letter)=>{
    const letterEl=document.createElement('span')
    letterEl.textContent=letter
    isPuzzle.appendChild(letterEl)

 })
};

// *************** Async callback without passing any argument *****************************
// getResponse((error,data)=>{
// 	data ? console.log(data) : console.log(error)

// })

// *************** synchronus callback with zero agrument passing *****************************
// const isGetResponce=getResponse()
// {
// 	console.log(isGetResponce)
// }

// *************** Async promise without passing any argument *****************************
// getResponse.then((data)=>{
// 	console.log(data)
// },(err)=>{
// console.log(err)
// })

// *************** Async promise with passing any extra argument *****************************
// getResponse('2').then((data)=>{
// 	console.log(data)
// },(err)=>{
// console.log(err)
// })

// *************** Async fetch without passing an argument *****************************
// getPuzzle.then((puzzle)=>{
// 	console.log(puzzle)
// }).catch((err)=>{
//     console.log(err)
// })

// *************** Async-await without passing an argument *****************************
// getPuzzle(1)
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// 	const startGame = async ()=>
// 	{
// 		const puzzleWord= await getResponse('2')
// 		game1=new Hangman(puzzleWord,5)
// 		render()
// 	}

// 	document.querySelector('#reset').addEventListener('click',startGame)
// startGame()

const startGame = async () => {
  const puzzleWord = await getResponse("2");
  
  game1 = new Hangman(puzzleWord, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);
startGame();
