///------------GLOBAL VARIABLES------------
var humanIcon = document.querySelector('.humanIcon');
var robotIcon = document.querySelector('.robotIcon');

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
  currentGame.player1.fighter = event.target.id;
  chooseRobotFighter();
  currentGame.evaluateGame();
  displayGameOutcome();
  // console.log(currentGame.player1.fighter);
  // console.log(currentGame.player2.fighter.type);
    // console.log(currentGame.winner);
});

//---------FUNCTIONS AND EVENT HANDLERS---------
function chooseRobotFighter() {
  if (currentGame.gameType === 'classic'){
    currentGame.player2.takeTurn(currentGame.player2.classicOptions)
  }
  else if (currentGame.gameType === 'difficult'){
    currentGame.player2.takeTurn(currentGame.player2.difficultOptions)
  }
}

function displayGameOutcome(){
  changeElementDisplay([chosenFighters], [classicGame, difficultGame]);
  chosenFighters.innerHTML += `
    <img class="icon display-result" src="assets/${currentGame.player1.fighter}.png" alt="Player 1's Choice">
    <img class="icon display-result" src="assets/${currentGame.player2.fighter.type}.png" alt="Player 2's Choice">
    `;
  humanWins.innerText = `Wins: ${currentGame.player1.wins}`;
  robotWins.innerText = `Wins: ${currentGame.player2.wins}`;
  if (!currentGame.winner){
    message.innerText = `It's a draw!`;
  }
  else { message.innerText = `${currentGame.winner.token} ${currentGame.winner.name} won this round! ${currentGame.winner.token}`;
  };
  setTimeout(resetDisplay, 2000);
}

function resetDisplay(){
    if (currentGame.gameType === 'classic'){
      displayClassicGame();
      chosenFighters.innerHTML = '';
    }
    else if (currentGame.gameType === 'difficult'){
      displayDifficultGame();
      chosenFighters.innerHTML = '';
    }
  };

function displayClassicGame(){
  // event.preventDefault();
  changeElementDisplay([classicGame, changeGameB], [infoClassic, infoDifficult]);
  message.innerText = 'Choose your fighter!';
  currentGame.setGameType('classic');
  console.log(currentGame.gameType);
}

function displayDifficultGame(){
  // event.preventDefault();
  changeElementDisplay([difficultGame, changeGameB], [infoClassic, infoDifficult]);
  message.innerText = 'Choose your fighter!';
  currentGame.setGameType('difficult');
  console.log(currentGame.gameType);
}

function displayMainView(){
  // event.preventDefault();
  changeElementDisplay([infoDifficult, infoClassic], [difficultGame, changeGameB, classicGame]);
  message.innerText = 'Choose your game!';
  console.log('Returned to Main View');
}

function changeElementDisplay(toView, toHide){
  for (var i = 0; i < toView.length; i ++){
    toView[i].classList.remove("hidden");
  };
  for (var i = 0; i < toHide.length; i ++){
    toHide[i].classList.add("hidden");
  };
}
