class Game {
  constructor(){
    this.player1 = new Player('Human', '🙍');
    this.player2 = new Player('Computer', '💻' );
    this.gameType = null;
    this.winner = null;
    this.winConditionsChallenge = [
      {type:'rock', beats:['scissors']},
      {type:'paper', beats:['rock']},
      {type:'scissors', beats:['paper']},
      {type:'pan', beats: ['spoon', 'whisk']},
      {type:'bowl', beats: ['pan', 'knife']},
      {type:'spoon', beats: ['bowl', 'whisk']},
      {type:'whisk', beats: ['bowl', 'knife']},
      {type:'knife', beats: ['spoon', 'pan']}
    ];
  }

  autoplay(){
    this.player1.makeRandomChoice(this.player1.classicGame);
    console.log(this.player1.fighter);
    this.player2.makeRandomChoice(this.player2.classicGame);
    console.log(this.player2.fighter);
  }


  autoplayChefVersion(){
    this.player1.makeRandomChoice(this.player1.chefChallengeGame);
    console.log(this.player1.fighter.type);
    this.player2.makeRandomChoice(this.player2.chefChallengeGame);
    console.log(this.player2.fighter.type);
  }


  evaluateGame(){
    // var compare = this.player2.fighter.type;
     if (this.player1.fighter.type === this.player2.fighter.type){
        this.winner = null;
        return `It's a draw!`
      }
      else if (this.player1.fighter.beats.includes(`${this.player2.fighter.type}`)) {
        this.winner = this.player1.name;
      }
      else {
        this.winner = this.player2.name;
      }
      return `${this.winner} won!`
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

//RAINY DAY or OH SHOOT CODE
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
  // }
      // this.winConditionsClassic = ['rock > scissors', 'paper > rock', 'scissors > paper'];
      //
      // checkGameExperiment(){
      //   if (this.winConditionsClassic.includes(`${this.player1.fighter} > ${this.player2.fighter}`)) {
      //     this.winner = this.player1.name;
      //     return `${this.player1.name} won!`
      //     }
      //   else if (this.player1.fighter === this.player2.fighter){
      //     return "It's a draw!"
      //     }
      //   else {
      //     this.player2.wins++;
      //     return `${this.player2.name} won!`
      //   }
      // }
      //
      // checkGameChef(){
      //   for (var i = 0; i < 5; i++){
      //     if (this.player1.chefChallenge2[i].type === `${this.player1.fighter}` && this.player1.chefChallenge2[i].beats.includes(`${this.player2.fighter}`)) {
      //       this.winner = this.player1.name;
      //       // return `${this.player1.name} won!`
      //       }
      //     else if (this.player1.fighter === this.player2.fighter){
      //       this.winner = 'No one';
      //       }
      //     else {
      //       this.winner = this.player2.name;
      //       // return `${this.player2.name} won!`
      //     }
      //   }
      //   return `${this.winner} won!`;
      // }
