//Globals
let turnNumber = 0
let mushroomNumber = 0
let ratHorde = []
let score = 0
let healthPoints = 3

let startButton = document.getElementById('startButton')
let titleArea = document.getElementById('titleArea')
let statusArea = document.getElementById('statusArea')

//first part of flashlight effect
const lighten = (e) => {
	e.target.style.backgroundColor = 'yellow'
}

//second part of flashligth effect
const darken = (e) => {
	e.target.style.backgroundColor = 'black'
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

//function to populate ratHorde array with random, unique numbers 0 to 83
const countRatHorde = () => {
	while(ratHorde.length > turnNumber - 1){
		pup = Math.floor(Math.random() * 100)
		if (pup < 84 && ratHorde.includes(pup) != true){
			ratHorde.push(pup)
		}
		console.log(ratHorde)
	}
	createRats()
}

	
//creates rats based on the ratHorde array, sets them with event listeners and image	
const createRats = () => {
	while(ratHorde.length >= 0){
		rat = ratHorde.pop
		//squares[rat].addEventListener('mouseenter', ratAttack)
		//squares[rat].removeEventListener('mouseenter', lighten)
		//squares[rat].removeEventListener('mouseleave', darken)
		//squares[rat].style.backgroundImage= NEED RAT IMAGE
	}
	console.log(ratHorde)
}

//adds event listeners to set up 'flashlight' effect
const setLevel = (e) => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener('mouseenter', lighten)
		squares[i].addEventListener('mouseleave', darken)
	}
	turnNumber++
	titleArea.style.display = 'none'
	statusArea.style.display = 'inline-block'
	//call function to place mushroom

	//call function to create and place rats
	countRatHorde()
}

startButton.addEventListener('click', setLevel)