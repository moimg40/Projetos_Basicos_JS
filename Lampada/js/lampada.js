const lamp = document.getElementById('lamp');

let quebrada = false;

function lampOn() {
  if(!quebrada)
    lamp.src = 'img/ligada.jpg';
}

function lampOff() {
  if(!quebrada)
    lamp.src = 'img/desligada.jpg';
}

function lampBroken() {
  lamp.src = 'img/quebrada.jpg';
  quebrada = true;
}

function resetLamp() {
  if(quebrada) {
    lamp.src = 'img/desligada.jpg';
    quebrada = false;

  }
}

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
lamp.addEventListener('click', resetLamp);
