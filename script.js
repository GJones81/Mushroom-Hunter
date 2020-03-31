//Globals
let turnNumber = 0
let mushroomNumber = 0
let ratHorde = []
let score = 0
let healthPoints = 3

let startButton = document.getElementById('startButton')
let titleArea = document.getElementById('titleArea')
let statusArea = document.getElementById('statusArea')
let attackBanner = document.getElementById('attackBanner')

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
const claimMushroom = () =>{
	score++
	console.log('Your score is ' + score)
	endLevel()
}
//function for mousing over rat
const ratAttack = (e) => {
	console.log('ATTACK!')
	e.target.style.backgroundImage = "url('pngkey.com-animal-face-png-3882222.png')"
	attackBanner.style.display = 'inline-block'
	healthPoints--
	console.log(healthPoints)
	//endLevel()
}
	//check if healthPoints are at 0
	//	calls endGame function if at 0

//function to set background image to mushroom
const findMushroom =(e) => {
	squares[mushroomNumber].style.backgroundImage = "url('mushroom-icon-2-48.png')"
}


//function to create a random number and set the mushroom with that number
const setMushroom = (e) => {
	mushroomNumber = Math.floor(Math.random() * 100)
	console.log('the mushroom number equals ' + mushroomNumber)
	if (mushroomNumber < 84){
		//add event listeners
		squares[mushroomNumber].addEventListener('mouseenter', findMushroom)
		squares[mushroomNumber].addEventListener('click', claimMushroom)
	} 
	else {
		setMushroom()
	}

	countRatHorde()
}
	
//function to populate ratHorde array with random, unique numbers 0 to 83
const countRatHorde = () => {
	if (turnNumber > 1){
		while (ratHorde.length < turnNumber - 1 ){
			let pup = Math.floor(Math.random() * 100)
			if (pup < 84 && ratHorde.includes(pup) != true && pup != mushroomNumber){
				ratHorde.push(pup)
			}
		}
		createRats()
	}
}
	
//creates rats based on the ratHorde array, sets them with event listeners and image	
const createRats = () => {
		while(ratHorde.length > 0){
			rat = ratHorde.pop()
			console.log('rat equals ' + rat)
			squares[rat].addEventListener('mouseenter', ratAttack)
			squares[rat].removeEventListener('mouseenter', lighten)
			squares[rat].removeEventListener('mouseleave', darken)
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
	console.log('It is turn number ' + turnNumber)
	titleArea.style.display = 'none'
	statusArea.style.display = 'inline-block'
	//call function to place mushroom
	setMushroom()

}	

//removes all event listeners to conclude the level before starting the next
const endLevel = () => {
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