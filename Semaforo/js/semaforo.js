const img = document.getElementById("img");
const buttons = document.getElementById("buttons");

let intervalId = null;
let colorId = 0;

function changeColor() {
  const colors = ["red", "yellow", "green"];

  img.src = `img/${colors[colorId++]}.png`;
  if (colorId > 2) colorId = 0;
}

function changeButtonsState(enabledOrDisabled, manualOrAuto, oldId, newId) {
  document.getElementById("red").disabled = enabledOrDisabled;
  document.getElementById("yellow").disabled = enabledOrDisabled;
  document.getElementById("green").disabled = enabledOrDisabled;

  document.getElementById(oldId).textContent = manualOrAuto;
  document.getElementById(oldId).id = newId;
}

const trafficLight = (event) => {

  if (event.target.id === "auto") {
    
    changeButtonsState(true, "Manual", "auto", "manual");
    
    intervalId = setInterval(changeColor, 1000);

  }else if (event.target.id === "manual") {
    
    changeButtonsState(false, "Automático", "manual", "auto");
    console.log(intervalId);
    clearInterval(intervalId);
  
  }else {
    img.src = `img/${event.target.id}.png`;
  }

}

buttons.addEventListener("click", trafficLight);
