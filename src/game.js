class Game {
  constructor(){
    this.player1 = new Player('Human', '👤');
    this.player2 = new Player('Robot', '🤖' );
    this.gameType;
    this.winner;
  }
  setGameType(input){
    this.gameType = input;
  }
  evaluateGame(){
     if(this.player2.fighter.type === this.player1.fighter){
        this.winner = null;
      }
      else if(this.player2.fighter.beats.includes(`${this.player1.fighter}`)) {
        this.winner = this.player2;
        this.player2.wins++;
      }
      else {
        this.winner = this.player1;
        this.player1.wins++;
      }
  }
  resetGameData(){
    this.winner = null;
    this.player1.fighter = null;
    this.player2.fighter = null;
  }
}
