//Globals
let turnNumber = 0
let mushroomNumber = 0
let ratHorde = []
let score = 0
let healthPoints = 3

let startButton = document.getElementById('startButton')
let titleArea = document.getElementById('titleArea')

//first part of flashlight effect
const lighten = (e) => {
	e.target.style.backgroundColor = 'yellow'
	console.log(e.target)
}

//second part of flashligth effect
const darken = (e) => {
	e.target.style.backgroundColor = 'black'
	console.log(e.target)
}

// function resets game
	//sets score to 0
	//sets health points to 3
	//clears ratHorde
	//remove event listeners


//function for ending game
	//append score to high score table
	//display high score table
	//ask if player wants to play again
	// if so, calls resetGame

//function for clicking mushroom
	//increase score by one
	//calls setLevel function for next level

//function for mousing over rat
	//subtract 1 from healthPoints
	//check if healthPoints are at 0
	//	calls endGame function if at 0


//function to set mushroom
	//randomizer
	//	sets mushroomNumber to number
	//adds event listener to mushroom image
	//remove event listeners for 'flashlight'
	//adds mushroom image based on mushroomNumber

//function to create rat, or rats
	//randomizer
	//checks if random number matches mushroomNumber or
	//	other numbers already in the ratHorde array
	//push new number into ratHorde
	
//function to set rats
	//based on numbers in ratHorde and .length
		//add event listener to rat images
		//remove event listeners for 'flashlight'
		//add rat images based on random numbers popped off
		//	the array

//adds event listeners to set up 'flashlight' effect
const setLevel = (e) => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener('mouseenter', lighten)
		squares[i].addEventListener('mouseleave', darken)
	}
	turnNumber++
	titleArea.style.display = 'none'
	//call function to place mushroom

	//call function to place rat, or rats
}

//startButton.addEventListener('click', setLevel)