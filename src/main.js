///------------GLOBAL VARIABLES------------
var message = document.querySelector('.message');
var gameType = document.querySelectorAll('.info');

var infoClassic = document.querySelector('.game-classic');
var infoDifficult = document.querySelector('.game-difficult');
var classicGame = document.querySelector('.classic-game');
var difficultGame = document.querySelector('.difficult-game');

// var ___ = document.querySelector('')
var game = new Game();
//EVENT LISTENERS

infoClassic.addEventListener('click', displayGame);


//FUNCTIONS AND EVENT HANDLERS

function displayGame(){
  event.preventDefault();
  hideElement(infoClassic);
  hideElement(infoDifficult);
  viewElement(classicGame);
}

// event.target.closest('')
// event.preventDefault();
// hideElement()
 // something.playerComputer.makeRandomChoice()
// var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
// var timeoutID = setTimeout(function[, delay]);
// var timeoutID = setTimeout(code[, delay]);
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
// CONTENTS

function viewElement(edit) {
  edit.classList.remove("hidden");
}

function hideElement(edit) {
  edit.classList.add("hidden");
}
