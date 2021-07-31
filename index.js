// Adds audio to all buttons, will only work for clicks

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", soundPlayer);
}

// Adds audio to all buttons, will only work for keyboard presses

document.addEventListener("keydown", function(event){
  textAgainsttheSwitch(event.key);
  flash(event.key);
});

// Creates Audio Sounds

var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kickbass.mp3");

// Fuction tests against the switch to choose which audio file to play

function textAgainsttheSwitch(buttonInnerHTML){
  switch (buttonInnerHTML) {
    case "w":
    tom1.play();
    break;

    case "a":
    tom2.play();
    break;

    case "s":
    tom3.play();
    break;

    case "d":
    tom4.play();
    break;

    case "j":
    snare.play();
    break;

    case "k":
    crash.play();
    break;

    case "l":
    kick.play();
    break;

    default:
    console.log(buttonInnerHTML);
  }
}

// Flashes the button when it is clicked

function flash(key_pressed) {
  if (document.querySelector("." + key_pressed) !== null){
    document.querySelector("." + key_pressed).classList.add("pressed");
    window.setTimeout(unflash, 200, key_pressed);
  }
}

// Unflashes the button by removing the pressed class

function unflash(key_pressed) {
  document.querySelector("." + key_pressed).classList.remove("pressed");
}

// Plays sound by testing against the audio switch and flash

function soundPlayer () {
  var buttonInnerHTML = this.innerHTML;
  textAgainsttheSwitch(buttonInnerHTML);
  flash(buttonInnerHTML);
}
