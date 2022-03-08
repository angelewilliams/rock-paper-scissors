///------------GLOBAL VARIABLES------------
var humanIcon = document.querySelector('.humanIcon');
var robotIcon = document.querySelector('.robotIcon');
var gameTitle = document.querySelector('.game-title');
var message = document.querySelector('.message');
var gameType = document.querySelectorAll('.info');
var classicRules = document.querySelector('.classic-rules');
var difficultRules = document.querySelector('.difficult-rules');
var classicGame = document.querySelector('.classic-game');
var difficultGame = document.querySelector('.difficult-game');
var changeGameB = document.querySelector('.change-game');
var fighters = document.querySelector('.fighters');
var chosenFighters = document.querySelector('.display-results');
var humanWins = document.querySelector('#humanWins');
var robotWins = document.querySelector('#robotWins');
var currentGame = new Game();
//--------------EVENT LISTENERS--------------
classicRules.addEventListener('click', function () {
  displayGameType('classic', classicGame)
  });
difficultRules.addEventListener('click', function () {
  displayGameType('difficult', difficultGame)
  });
changeGameB.addEventListener('click', displayMainView);
fighters.addEventListener('click', function (event) {
    if (!currentGame.player2.fighter) {
      currentGame.player1.fighter = event.target.id;
      takeTurnForRobot();
      currentGame.evaluateGame();
      displayGameOutcome();
    };
  });
//------------------FUNCTIONS------------------
function takeTurnForRobot() {
  if (currentGame.gameType === 'classic') {
    currentGame.player2.takeTurn(currentGame.player2.classicOptions)
  }
  else if (currentGame.gameType === 'difficult') {
    currentGame.player2.takeTurn(currentGame.player2.difficultOptions)
  };
};

function displayGameOutcome() {
  viewAndHideElements([chosenFighters], [classicGame, difficultGame]);
  showChosenFighters();
  updateWinsDisplay();
  updateMessage();
  setTimeout(resetDisplay, 1750);
};

function updateMessage() {
  if (!currentGame.winner) {
    message.innerText = `🙃 It's a draw! 🙃`;
  }
  else {
    message.innerText = `${currentGame.winner.token} ${currentGame.winner.name} won this round! ${currentGame.winner.token}`;
  };
};

function updateWinsDisplay() {
  humanWins.innerText = `Wins: ${currentGame.player1.wins}`;
  robotWins.innerText = `Wins: ${currentGame.player2.wins}`;
};

function showChosenFighters() {
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
};

function resetDisplay() {
  chosenFighters.innerHTML = '';
  currentGame.resetGameData();
    if (currentGame.gameType === 'classic') {
      displayGameType('classic', classicGame)
    }
    else if (currentGame.gameType === 'difficult') {
      displayGameType('difficult', difficultGame)
    };
  };

function displayGameType(gameType, gameTypeToDisplay) {
   viewAndHideElements([gameTypeToDisplay, changeGameB], [classicRules, difficultRules]);
   currentGame.setGameType(gameType);
    message.innerText = 'Choose your fighter!';
    if (gameType === 'difficult') {
      gameTitle.innerText = 'Produce Party!'
    }
    else {
      gameTitle.innerText = 'Rock Paper Scissors'
    };
  };

function displayMainView() {
  if (!chosenFighters.innerHTML) {
    viewAndHideElements([difficultRules, classicRules], [difficultGame, changeGameB, classicGame]);
    message.innerText = 'Choose your game!';
  };
};

function viewAndHideElements(elementListToView, elementListToHide) {
  for (var i = 0; i < elementListToView.length; i ++) {
    elementListToView[i].classList.remove("hidden");
  };
  for (var i = 0; i < elementListToHide.length; i ++) {
    elementListToHide[i].classList.add("hidden");
  };
};
