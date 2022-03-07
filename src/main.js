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
var humanWins = document.querySelector('#humanWins');
var computerWins = document.querySelector('#computerWins');
// var ___ = document.querySelector('')
var currentGame = new Game();
//--------------EVENT LISTENERS--------------

infoClassic.addEventListener('click', displayClassicGame);
infoDifficult.addEventListener('click', displayDifficultGame);
changeGameB.addEventListener('click', displayMainView);

fighters.addEventListener('click', function (event) {
  // currentGame.player1.takTurn()

  currentGame.player1.fighter = event.target.id;
  if (currentGame.gameType === 'classic'){
    currentGame.player2.takeTurn(currentGame.player2.classicOptions)
  }
  else if (currentGame.gameType === 'difficult'){
    currentGame.player2.takeTurn(currentGame.player2.difficultOptions)
  }
  // console.log(currentGame.player1.fighter);
  // console.log(currentGame.player2.fighter.type);
  currentGame.evaluateGame();
  currentGame.updateScore();
  // console.log(currentGame.winner);
  displayGameOutcome();
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

//---------FUNCTIONS AND EVENT HANDLERS---------
function displayGameOutcome(){
  // fighters.innerHTML = `
  //   <img class="icon display-result" src="assets/${currentGame.player1.fighter}.png" alt="Player 1 Choice">
  //   <img class="icon display-result" src="assets/${currentGame.player2.fighter.type}.png" alt="Player 2 Choice">
  //   `
  humanWins.innerText = `Wins: ${currentGame.player1.wins}`;
  computerWins.innerText = `Wins: ${currentGame.player2.wins}`;

  if (!currentGame.winner){
    message.innerText = `It's a draw!`;
  }
  //if not a tie:
  else { message.innerText = `${currentGame.winner.token}${currentGame.winner.name} won this round!${currentGame.winner.token}`;
  }

  changeElementDisplay([], [classicGame, difficultGame, changeGameB]);

}

function displayClassicGame(){
  event.preventDefault();
  changeElementDisplay([classicGame, changeGameB], [infoClassic, infoDifficult]);
  message.innerText = 'Choose your fighter!';
  currentGame.setGameType('classic');
  console.log(currentGame.gameType);
}

function displayDifficultGame(){
  event.preventDefault();
  changeElementDisplay([difficultGame, changeGameB], [infoClassic, infoDifficult]);
  message.innerText = 'Choose your fighter!';
  currentGame.setGameType('difficult');
  console.log(currentGame.gameType);
}

function displayMainView(){
  event.preventDefault();
  changeElementDisplay([infoDifficult, infoClassic], [difficultGame, changeGameB, classicGame]);
  message.innerText = 'Choose your game!';
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
  };
  for (var i = 0; i < toHide.length; i ++){
    toHide[i].classList.add("hidden");
  };
}
