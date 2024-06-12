var startSelect = document.getElementById('selectToggler')
//Button to toggle the selection mode
var colorWheel = document.querySelector('#ToolsList > li > input') //Color wheel
var nodeList = document.querySelectorAll('.selectible')
// querrying all the selectible objects inside the table
//(this return a Node List)
var selectibles = [...nodeList] // Converting them to a List
var color = colorWheel.value // color selected by user

colorWheel.addEventListener('change', () => {
	color = colorWheel.value
})

selectibles.forEach((selectible) => {
	selectible.addEventListener('click', (e) => {
		e.target.style.backgroundColor = color
	})
}) //Changes the color of the selected box to the selected color
