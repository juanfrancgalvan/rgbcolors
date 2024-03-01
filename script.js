const inputRed = document.getElementById('red')
const inputGreen = document.getElementById('green')
const inputBlue = document.getElementById('blue')

const redText = document.getElementById('red-text')
const greenText = document.getElementById('green-text')
const blueText = document.getElementById('blue-text')

let red = inputRed.value
let green = inputGreen.value
let blue = inputBlue.value

inputRed.innerText = red
inputGreen.innerText = green
inputBlue.innerText = blue

function updateColor(red, green, blue) {
  const colorRGB = `rgb(${red}, ${green}, ${blue})`
  document.body.style.backgroundColor = colorRGB
}

inputRed.addEventListener('change', (e) => {
  red = e.target.value
  redText.innerText = red
  updateColor(red, green, blue)
})

inputGreen.addEventListener('change', (e) => {
  green = e.target.value
  greenText.innerText = green
  updateColor(red, green, blue)
})

inputBlue.addEventListener('change', (e) => {
  blue = e.target.value
  blueText.innerText = blue
  updateColor(red, green, blue)
})