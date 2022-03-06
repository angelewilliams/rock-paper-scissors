///------------GLOBAL VARIABLES------------
var message = document.querySelector('.message');
var gameType = document.querySelectorAll('.info');

var infoClassic = document.querySelector('.game-classic');
var infoDifficult = document.querySelector('.game-difficult');
var classicGame = document.querySelector('.classic-game');
var difficultGame = document.querySelector('.difficult-game');
var changeGameB = document.querySelector('.change-game');
var game = document.querySelector('.game-area');

// var ___ = document.querySelector('')
var game = new Game();
//EVENT LISTENERS

infoClassic.addEventListener('click', displayClassicGame);
infoDifficult.addEventListener('click', displayDifficultGame);
changeGameB.addEventListener('click', displayMainView);



parent.addEventListener('click', function(event) {
  if (event.target.className === 'icon') {
    // do your action on your 'button' or whatever it is you're listening for
  }
});

//FUNCTIONS AND EVENT HANDLERS

function displayClassicGame(){
  event.preventDefault();
  hideElement(infoClassic);
  hideElement(infoDifficult);
  viewElement(classicGame);
  viewElement(changeGameB);
}

function displayDifficultGame(){
  event.preventDefault();
  hideElement(infoClassic);
  hideElement(infoDifficult);
  viewElement(difficultGame);
  viewElement(changeGameB);
}

function displayMainView(){
  event.preventDefault();
  hideElement(difficultGame);
  hideElement(changeGameB);
  hideElement(classicGame);
  viewElement(infoDifficult);
  viewElement(infoClassic);
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
