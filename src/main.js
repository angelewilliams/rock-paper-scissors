///------------GLOBAL VARIABLES------------
var humanIcon = document.querySelector('.humanIcon');
var robotIcon = document.querySelector('.robotIcon');
var gameTitle = document.querySelector('.game-title');
var message = document.querySelector('.message');

var gameType = document.querySelectorAll('.info');
var infoClassic = document.querySelector('.game-classic');
var infoDifficult = document.querySelector('.game-difficult');
var classicGame = document.querySelector('.classic-game');
var difficultGame = document.querySelector('.difficult-game');
var changeGameB = document.querySelector('.change-game');
// var game = document.querySelector('.game-area');
// var main = document.querySelector('main');

var fighters = document.querySelector('.fighters');
var chosenFighters = document.querySelector('.display-results')
var humanWins = document.querySelector('#humanWins');
var robotWins = document.querySelector('#robotWins');
var currentGame = new Game();
//--------------EVENT LISTENERS--------------
//Should I change these to be event delagation?
infoClassic.addEventListener('click', displayClassicGame);
infoDifficult.addEventListener('click', displayDifficultGame);
changeGameB.addEventListener('click', displayMainView);

fighters.addEventListener('click', function (event) {
  if (!currentGame.player2.fighter){
  currentGame.player1.fighter = event.target.id;
  takeTurnForRobot();
  currentGame.evaluateGame();
  displayGameOutcome();
}
});

// //---------FUNCTIONS AND EVENT HANDLERS---------
// HTMLElement(or wrapper).addEventListener('click', function(event) {
//   if (event.target.classList.contains('some element')) {
// // call function here to play the game
//     displayGameType(gameType, infoGameType)
//   }
// })


function takeTurnForRobot() {
  if (currentGame.gameType === 'classic'){
    currentGame.player2.takeTurn(currentGame.player2.classicOptions)
  }
  else if (currentGame.gameType === 'difficult'){
    currentGame.player2.takeTurn(currentGame.player2.difficultOptions)
  }
}

function displayGameOutcome(){
  changeElementDisplay([chosenFighters], [classicGame, difficultGame]);
  showChosenFighters();
  updateWinsDisplay();
  updateMessage();
  setTimeout(resetDisplay, 1750);
}

function updateMessage(){
  if (!currentGame.winner){
    message.innerText = `It's a draw!`;
  }
  else {
    message.innerText = `${currentGame.winner.token} ${currentGame.winner.name} won this round! ${currentGame.winner.token}`;
  };
}

function updateWinsDisplay(){
  humanWins.innerText = `Wins: ${currentGame.player1.wins}`;
  robotWins.innerText = `Wins: ${currentGame.player2.wins}`;
}


function showChosenFighters(){
  chosenFighters.innerHTML += `
    <div>
      <img class="icon display-result" style="pointer-events: none;" src="assets/${currentGame.player1.fighter}.png" alt="Player 1's Choice">
      <h3>${currentGame.player1.token}</h3>
    </div>
    <div>
      <img class="icon display-result" src="assets/${currentGame.player2.fighter.type}.png" alt="Player 2's Choice">
      <h3>${currentGame.player2.token}</h3>
    </div>
  `;
}

// function displayGameType(gameType, infoGameType) {
//  changeElementDisplay([infoGameType, changeGameB], [infoClassic, infoDifficult]);
//   message.innerText = 'Choose your fighter!';
//   currentGame.setGameType('gameType');
// }

function resetDisplay(){
  chosenFighters.innerHTML = '';
  currentGame.resetGame();
    if (currentGame.gameType === 'classic'){
      displayClassicGame();
    }
    else if (currentGame.gameType === 'difficult'){
      displayDifficultGame();
    }
  };

function displayClassicGame(){
  changeElementDisplay([classicGame, changeGameB], [infoClassic, infoDifficult]);
  message.innerText = 'Choose your fighter!';
  currentGame.setGameType('classic');
}

function displayDifficultGame(){
  changeElementDisplay([difficultGame, changeGameB], [infoClassic, infoDifficult]);
  message.innerText = 'Choose your fighter!';
  currentGame.setGameType('difficult');
}

function displayMainView(){
  changeElementDisplay([infoDifficult, infoClassic], [difficultGame, changeGameB, classicGame]);
  heading.innerText = 'Produce Party!';
  message.innerText = 'Choose your game!';
}

function changeElementDisplay(elementListToView, elementListToHide){
  for (var i = 0; i < elementListToView.length; i ++){
    elementListToView[i].classList.remove("hidden");
  };
  for (var i = 0; i < elementListToHide.length; i ++){
    elementListToHide[i].classList.add("hidden");
  };
}
