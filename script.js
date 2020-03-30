let startButton = document.getElementById('startButton')


const lighten = (e) => {
	e.target.opacity = '0';
	console.log(e.target)
}

const darken = (e) => {
	e.target.opacity = '1'
}

document.getElementById('15').addEventListener('mouseenter', lighten)
document.getElementById('15').addEventListener('mouseleave', darken)



//Start button event listener calls setGame
//startButton.addEventListener('click', setGame)