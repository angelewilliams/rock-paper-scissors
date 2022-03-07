class Game {
  constructor(){
    this.player1 = new Player('Human', '🙍');
    this.player2 = new Player('Computer', '🤖' );
    this.gameType;
    this.winner;
  }
  setGameType(input){
    this.gameType = input;
  }
  evaluateGame(){
    // var compare = this.player2.fighter.type;
     if (this.player2.fighter.type === this.player1.fighter){
        this.winner = null;
        // return `It's a draw!`
      }
      else if (this.player2.fighter.beats.includes(`${this.player1.fighter}`)) {
        this.winner = this.player2;
      }
      else {
        this.winner = this.player1;
      }
      // return `${this.winner} won!`
  }

  updateScore() {
      if (!this.winner){
        return
      }
      else if (this.winner === this.player1.name) {
        this.player1.wins++;
        // return `${this.player1.name} has ${this.player1.wins} points`
      } else if (this.winner === this.player2.name) {
        this.player2.wins++;
        // return `${this.player2.name} has ${this.player2.wins} points`
      }
    }
  resetGame(){
    this.winner = null;

  }
  setTimeout(){
    // setTimeout(setDefaultScreen,1750)
  };
}
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game


// object within an array within an object

//     this.winConditionsChallenge = [
    //   {type:'rock', beats:['scissors']},
    //   {type:'paper', beats:['rock']},
    //   {type:'scissors', beats:['paper']},
    //   {type:'pan', beats: ['spoon', 'whisk']},
    //   {type:'bowl', beats: ['pan', 'knife']},
    //   {type:'spoon', beats: ['bowl', 'whisk']},
    //   {type:'whisk', beats: ['bowl', 'knife']},
    //   {type:'knife', beats: ['spoon', 'pan']}
    // ];
