
let ratNumber = -1
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

//adds event listeners to set up 'flashlight' effect
const startGame = (e) => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener('mouseenter', lighten)
		squares[i].addEventListener('mouseleave', darken)
	}
	titleArea.style.display = 'none'
}
startButton.addEventListener('click', startGame)