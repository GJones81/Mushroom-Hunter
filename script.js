//Globals
const LS_NAME = 'highScores'
const SCORE_SLOTS = 10
let turnNumber = 0
let mushroomNumber = 0
let ratHorde = []
let score = 0
let healthPoints = 10

let titleArea = document.getElementById('titleArea')

let startButton = document.getElementById('startButton')

let finishArea = document.getElementById('finishArea')

let playAgainButton = document.getElementById('playAgainButton')

let highScoreTable = document.getElementById('highScoreTable')

let table = document.getElementById('table')

let statusArea = document.getElementById('statusArea')

let healthBoard = document.getElementById('health')

let scoreBoard = document.getElementById('score')

let continueButtonArea = document.getElementById('contButtonArea')

let continueButton = document.getElementById('continueButton')

let exitButtonArea = document.getElementById('exitButtonArea')

let exitButton = document.getElementById('exitButton')

let playArea = document.getElementById('playArea')

let transitionArea = document.getElementById('transitionArea')

let ratGrowl = document.getElementById('ratGrowl')

let mushroomSound = document.getElementById('mushroomSound')

let caveSounds = document.getElementById('caveSounds')

document.addEventListener('DOMContentLoaded', () => {
	//sets a click on the start button
	startButton.addEventListener('click', setLevel)
})

const resetGame = () => {
	score = 0
	healthPoints = 10
	turnNumber = 0 
	defeatBanner.style.display = 'none'
	endLevel()
}

const retrieveHighScore = () => {
	//goes into local storage and retrieves scores in string type format
	let scoreString = localStorage.getItem(LS_NAME)
		//if there aren't any strings in local storage, return an empty array
		if (!scoreString){
			return []
 		}
 		//convert the strings to an array and return it when called
 		let scoreArray = JSON.parse(scoreString)
 		return scoreArray	
}

const tallyHighScore = (initials) => {
	//calls the function to get the array it returns from local storage
	let scores = retrieveHighScore()
	//add the new score to the array
	scores.push({initials: initials, score: score})
	//sort the array to put them in order from highest to lowest
	scores.sort((a, b) => {
		return b.score - a.score
	})
	//limit the score table entries to the top 10
	scores = scores.slice(0, SCORE_SLOTS)
	//stringify the updated array
	let newScoreString = JSON.stringify(scores)
	//send it back to local storage
	localStorage.setItem(LS_NAME, newScoreString)	
}

const updateScore = () => {
	//clear the table
	document.getElementById('tableBody').innerHTML = ''
	//get scores from local storage
	let scores = retrieveHighScore()
	//loop through the scores
	for ( let i = 0; i < scores.length; i++){
		let tr = document.createElement('tr')
		let tdInitials = document.createElement('td')
		let tdScore = document.createElement('td')
		tdInitials.textContent = scores[i].initials
		tdScore.textContent = scores[i].score
		tr.append(tdInitials)
		tr.append(tdScore)
		document.getElementById('tableBody').append(tr)
	}
}


//function for ending game
const endGame = () => {
	//hides the playing area
	playArea.style.display = 'none'
	//hides the status area
	statusArea.style.display = 'none'
	//shows the defeat announcement and highscore table
	finishArea.style.display = 'inline-block'
	//ask player to record initials
	let initials = prompt("Nice huntin'. Write your initials here")
	//add up the score
	tallyHighScore(initials)
	//update high score
	updateScore()
}



//function for delaying a rat attack
//const ratAttack 


//function for mousing over rat
const findRat = (e) => {
	console.log('ATTACK!')
	//set the image of the rat
	//e.target.style.backgroundImage = "url('pngkey.com-animal-face-png-3882222.png')"
	e.target.style.backgroundImage = "url('kgSnEU6.jpg')"
	ratGrowl.play()
	//subtracts health points and updates the health points displayed
	healthPoints--
	healthBoard.textContent = `Health: ${healthPoints}`
	console.log(healthPoints)
	//calls endGame function when health points fall to zero
	if (healthPoints == 0){
		endGame()
	}


}

//function for clicking on a mushroom
const claimMushroom = () =>{
	//increases score
	score++
	//plays the mushroom sound when you click on the mushroom
	mushroomSound.play()
	//pauses the cave sounds
	caveSounds.pause()
	//hides the playing area
	playArea.style.display = 'none'
	//shows the continue button
	contButtonArea.style.display = 'inline-block'
	//updates the score displayed
	scoreBoard.textContent = `Score: ${score}`
	//add a click to the endLevel function
	continueButton.addEventListener('click', endLevel)
}

//function to set background image to mushroom
const findMushroom =(e) => {
	//set the image of a mushroom
	squares[mushroomNumber].style.backgroundImage = "url('mushroom-icon-2-48.png')"
}

//randomizer function
const getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max))
}

//function to create a random number and set the mushroom with that number
const setMushroom = (e) => {
	//calls getRandomInt to get a random number, then assigns it to mushroomNumber
	mushroomNumber = getRandomInt(84)
	console.log('the mushroom is at ' + mushroomNumber)
		//add event listeners
		squares[mushroomNumber].addEventListener('mouseenter', findMushroom)
		squares[mushroomNumber].addEventListener('click', claimMushroom)

	//calls function to begin populating the rat horde
	countRatHorde()
}
	
//function to populate ratHorde array with random, unique numbers 0 to 83
const countRatHorde = () => {
	if (turnNumber > 1){
		while (ratHorde.length < turnNumber - 1 ){
			let pup = getRandomInt(84)
			if (ratHorde.includes(pup) != true && pup != mushroomNumber){
				ratHorde.push(pup)
				console.log(ratHorde)
			}
		}
		createRats()
	}
}
	
//creates rats based on the ratHorde array, sets them with event listeners	
const createRats = () => {
		while(ratHorde.length > 0){
			rat = ratHorde.pop()
			console.log('rat at ' + rat)
			squares[rat].removeEventListener('mouseenter', lighten)
			//ratAttack is the function which shows the rat image and decrements healthPoints
			squares[rat].addEventListener('mouseenter', findRat)
			console.log(ratHorde)
		}
}

//first part of flashlight effect
const lighten = (e) => {
	e.target.style.backgroundColor = '#ffff33'
}

//second part of flashligth effect
const darken = (e) => {
	e.target.style.backgroundColor = 'black'
	e.target.style.backgroundImage = 'none'
}

//Adds event listeners to set up 'flashlight' effect
const setLevel = (e) => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener('mouseenter', lighten)
		squares[i].addEventListener('mouseleave', darken)
	}
	//increases turn number
	turnNumber++
	healthBoard.textContent = `Health: ${healthPoints}`
	scoreBoard.textContent = `Score: ${score}`
	console.log('It is turn number ' + turnNumber)
	//hides the title area for playing
	titleArea.style.display = 'none'
	//shows the status area for playing
	statusArea.style.display = 'inline-block'
	//hides the continue button area
	contButtonArea.style.display = 'none'
	//shows the exit button
	exitButtonArea.style.display = 'inline-block'
	//plays cave sounds
	caveSounds.play()
	caveSounds.loop = true
	//call function to place mushroom
	setMushroom()

}	

//removes all event listeners to conclude the level before starting the next
const endLevel = () => {
	//shows the playing area
	playArea.style.display = 'inline-block'
	//removes the click from the continue button
	continueButton.removeEventListener('click', endLevel)
	//resets the squares with mushrooms to 'blank' for the next level to begin 
	squares[mushroomNumber].style.backgroundImage = 'none'
	squares[mushroomNumber].style.backgroundColor = 'black'
	//cycles through to clear all event listeners and rat images for the
	//next level to begin
	for (let i = 0; i < squares.length; i++) {
		squares[i].removeEventListener('mouseenter', lighten)
		squares[i].removeEventListener('mouseleave', darken)
		squares[i].removeEventListener('mouseenter', findMushroom)
		squares[i].removeEventListener('click', claimMushroom)
		squares[i].removeEventListener('mouseenter', findRat)
		squares[i].style.backgroundImage = 'none'
	}
	//resets these global variables for the next level to begin
	mushroomNumber = 0
	ratHorde = []
	setLevel()
}

//sets a click on the reset button
playAgainButton.addEventListener('click', resetGame)
//sets a click on the exit button
exitButton.addEventListener('click', endGame)
