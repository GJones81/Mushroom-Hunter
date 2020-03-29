console.log('JS is working')

const lighten = (e) => {
	document.getElementById('test').style.visibility = 'hidden'
}

const darken = (e) => {
	document.getElementById('test').style.visibility = 'visible'
}

document.getElementById('test').setEventListener('mouseenter', lighten)
document.getElementById('test').setEventListener('mouseleave', darken)