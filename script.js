//Globals
let turnNumber = 0
let mushroomNumber = 0
let ratHorde = []
let score = 0
let healthPoints = 10

let titleArea = document.getElementById('titleArea')

let startButton = document.getElementById('startButton')

let defeatBanner = document.getElementById('defeatBanner')

let playAgainButton = document.getElementById('playAgain')

let statusArea = document.getElementById('statusArea')

let healthBoard = document.getElementById('health')

let scoreBoard = document.getElementById('score')

let continueButton = document.getElementById('continueButton')

let exitButton = document.getElementById('exitButton')

let playArea = document.getElementById('playArea')


//first part of flashlight effect
const lighten = (e) => {
	e.target.style.backgroundColor = 'yellow'
}

//second part of flashligth effect
const darken = (e) => {
	e.target.style.backgroundColor = 'black'
	e.target.style.backgroundImage = 'none'
}

const getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max))
}

// function resets game
	//sets score to 0
	//sets health points to 3
	//clears ratHorde
	//remove event listeners


//function for ending game
const endGame = () => {
	playArea.style.display = 'none'
	statusArea.style.display = 'none'
	defeatBanner.style.display = 'inline-block'
}
	//append score to high score table
	//display high score table
	//ask if player wants to play again
	// if so, calls resetGame

//function for clicking on a mushroom
const claimMushroom = () =>{
	playArea.style.display = 'none'
	score++
	scoreBoard.textContent = `Your score is ${score}`
	healthBoard.textContent = `Your health is at ${healthPoints}`
	continueButton.addEventListener('click', endLevel)
}
//function for mousing over rat
const ratAttack = (e) => {
	console.log('ATTACK!')
	e.target.style.backgroundImage = "url('pngkey.com-animal-face-png-3882222.png')"
	healthPoints--
	console.log(healthPoints)
	if (healthPoints == 0){
		endGame()
	}
}

//function to set background image to mushroom
const findMushroom =(e) => {
	squares[mushroomNumber].style.backgroundImage = "url('mushroom-icon-2-48.png')"
}


//function to create a random number and set the mushroom with that number
const setMushroom = (e) => {
	//mushroomNumber = Math.floor(Math.random() * 100)
	mushroomNumber = getRandomInt(84)
	console.log('the mushroom number equals ' + mushroomNumber)
	if (mushroomNumber < 84){
		//add event listeners
		squares[mushroomNumber].addEventListener('mouseenter', findMushroom)
		squares[mushroomNumber].addEventListener('click', claimMushroom)
	} 
	//else {
	//	setMushroom()
	//}
//calls function to begin populating the rat horde
	countRatHorde()
}
	
//function to populate ratHorde array with random, unique numbers 0 to 83
const countRatHorde = () => {
	if (turnNumber > 1){
		while (ratHorde.length < turnNumber - 1 ){
			let pup = getRandomInt(84)
			//let pup = Math.floor(Math.random() * 100)
			if (pup < 84 && ratHorde.includes(pup) != true && pup != mushroomNumber){
				ratHorde.push(pup)
			}
		}
		createRats()
	}
}
	
//creates rats based on the ratHorde array, sets them with event listeners	
const createRats = () => {
		while(ratHorde.length > 0){
			rat = ratHorde.pop()
			console.log('rat equals ' + rat)
			squares[rat].removeEventListener('mouseenter', lighten)
			//ratAttack is the function which shows the rat image and decrements healthPoints
			squares[rat].addEventListener('mouseenter', ratAttack)
		}
}

//Adds event listeners to set up 'flashlight' effect
const setLevel = (e) => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener('mouseenter', lighten)
		squares[i].addEventListener('mouseleave', darken)
	}
	turnNumber++
	console.log('It is turn number ' + turnNumber)
	titleArea.style.display = 'none'
	statusArea.style.display = 'inline-block'
	//call function to place mushroom
	setMushroom()

}	

//removes all event listeners to conclude the level before starting the next
const endLevel = () => {
	playArea.style.display = 'inline-block'
	continueButton.removeEventListener('click', endLevel)
	console.log('wrapping up the level')
	squares[mushroomNumber].style.backgroundImage = 'none'
	squares[mushroomNumber].style.backgroundColor = 'black'
	for (let i = 0; i < squares.length; i++) {
		squares[i].removeEventListener('mouseenter', lighten)
		squares[i].removeEventListener('mouseleave', darken)
		squares[i].removeEventListener('mouseenter', findMushroom)
		squares[i].removeEventListener('click', claimMushroom)
		squares[i].style.backgroundImage = 'none'
	}
	mushroomNumber = 0
	ratHorde = []
	setLevel()
}

startButton.addEventListener('click', setLevel)