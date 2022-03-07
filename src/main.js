///------------GLOBAL VARIABLES------------
var message = document.querySelector('.message');
var gameType = document.querySelectorAll('.info');
var infoClassic = document.querySelector('.game-classic');
var infoDifficult = document.querySelector('.game-difficult');
var classicGame = document.querySelector('.classic-game');
var difficultGame = document.querySelector('.difficult-game');
var changeGameB = document.querySelector('.change-game');
var game = document.querySelector('.game-area');
var main = document.querySelector('main');
var fighters = document.querySelector('.fighters');

// var ___ = document.querySelector('')
var currentGame = new Game();
//EVENT LISTENERS

infoClassic.addEventListener('click', displayClassicGame);
infoDifficult.addEventListener('click', displayDifficultGame);
changeGameB.addEventListener('click', displayMainView);

fighters.addEventListener('click', function (event) {
  // var difficultIds = ['lemon', 'pepper', 'peas', 'broccoli', 'apple']
  currentGame.player1.fighter = event.target.id;

  // console.log(event.target.id);
    console.log(currentGame.player1.fighter);
});

//When a user clicks on a fighter, that should get stored in game.player1.fighter
//then the computer will makeRandomChoice and that will be stored in game.player2.fighter
//next game.evaluateGame() and game.updateScore() should be called
// the  game.player1.fighter and game.player2.fighter should be displayed with a message at the top declaring who won the round and display the updated scores.
//then that will timeout and return to the main game display with the scores from before.

//
// game.addEventListener('click', function(event) {
//   // if (event.target.id === game.player1.fighter.type) {
// console.log(event.target);
//     // do your action on  your 'button' or whatever it is you're listening for
//   // }
// });

//FUNCTIONS AND EVENT HANDLERS

function displayClassicGame(){
  event.preventDefault();
  changeElementDisplay([classicGame, changeGameB], [infoClassic, infoDifficult])
  currentGame.setGameType('Classic');
  console.log(currentGame.gameType);
}

function displayDifficultGame(){
  event.preventDefault();
 changeElementDisplay([difficultGame, changeGameB], [infoClassic, infoDifficult])
 currentGame.setGameType('Difficult');
 console.log(currentGame.gameType);
}

function displayMainView(){
  event.preventDefault();
  changeElementDisplay([infoDifficult, infoClassic], [difficultGame, changeGameB, classicGame])
  console.log('Returned to Main View');
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


function changeElementDisplay(toView, toHide){
  for (var i = 0; i < toView.length; i ++){
    toView[i].classList.remove("hidden");
  }
  for (var i = 0; i < toHide.length; i ++){
    toHide[i].classList.add("hidden");
  }
}
