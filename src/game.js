class Game {
  constructor(){
    this.player1 = new Player('Computer', '🙍');
    this.player2 = new Player('Computer', '💻' );
    this.gameType = null;
    //classic or difficult
    this.gameData = [this.player1.fighter];
    this.winConditionsClassic = ['rock > scissors', 'paper > rock', 'scissors > paper']
    this.winConditionsChallenge = ['rock > scissors', 'paper > rock', 'scissors > paper']
    this.winner = this.checkGame();
  }

  autoplay(){
    this.player1.makeRandomChoice(this.classic);
    this.player2.makeRandomChoice(this.classic);
  }

  // checkGameClassic(){
  //   if (this.player1.fighter === this.player2.fighter ){
  //     return "It's a draw!"
  //   }
  //   else if(this.player1.fighter === 'rock' && this.player2.fighter === 'scissors'){
  //     this.player1.wins++;
  //     return `${this.player1.name} won!`
  //   }
  //   else if(this.player1.fighter === 'paper' && this.player2.fighter === 'rock'){
  //     this.player1.wins++;
  //     return `${this.player1.name} won!`
  //   }
  //   else if(this.player1.fighter === 'scissors' && this.player2.fighter === 'paper'){
  //     this.player1.wins++;
  //     return `${this.player1.name} won!`
  //   }
  //   this.player2.wins++;
  //   return `${this.player1.name} won!`
  //
  // }
  checkGameExperiment(){
    if (this.winConditionsClassic.includes(`${this.player1.fighter} > ${this.player2.fighter}`){
      this.winner = this.player1.name;
      return `${this.player1.name} won!`
    }
    else if (this.player1.fighter === this.player2.fighter){
      return "It's a draw!"
    }
    this.player2.wins++;
    return `${this.player1.name} won!`
  }
  recordWin() {
      if (this.player1.winner) {
        this.player1.wins++;
      } else if (this.player2.winner) {
        this.player2.wins++;
      }
    }
  resetGame(){

  }

}
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game


// object within an array within an object
