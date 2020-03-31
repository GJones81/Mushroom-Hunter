
let mushroomNumber = 0
let ratNumber = 0
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

//randomizer function 

//function to set mushroom
	//calls randomizer function

//function to set rat, or rats
	//calls randomizer function

//adds event listeners to set up 'flashlight' effect
const setLevel = (e) => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener('mouseenter', lighten)
		squares[i].addEventListener('mouseleave', darken)
	}
	titleArea.style.display = 'none'
	//call function to place mushroom

	//call function to place rat, or rats
}

//startButton.addEventListener('click', setLevel)