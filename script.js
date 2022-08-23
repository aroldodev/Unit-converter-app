let button = document.getElementById("btn")
let lengthRender = document.getElementById("length")
let volumeRender = document.getElementById("volume")
let massRender = document.getElementById("mass")

button.addEventListener("click", function(){
  let number = document.getElementById("input").value
  lengthRender.textContent = length(number);
  volumeRender.textContent = volume(number);
  massRender.textContent = mass(number);
  
})

function length(data){
  let meters = data / 3.28084
  let feets = data * 3.28084

  return `${data} meters = ${feets.toFixed(3)} feets  |  ${data} feets = ${meters.toFixed(3)} meters`
}

function volume(data){
  let liters = data * 3.785411784
  let gallons = data / 3.785411784 

  return `${data} liters = ${gallons.toFixed(3)} gallons  |  ${data} gallons = ${liters.toFixed(3)} liters`
}

function mass(data){
  let kilos = data / 2.20462262
  let pounds = data * 2.20462262

  return `${data} kilos = ${pounds.toFixed(3)} pounds  |  ${data} pounds = ${kilos.toFixed(3)} kilos`
}