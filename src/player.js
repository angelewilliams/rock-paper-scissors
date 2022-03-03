class Player {
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
    //should start with 0 wins
  }
  makeRandomChoice(gameType){
    var classic = ['rock', 'paper', 'scissors'];
    var difficult = ['rock', 'paper', 'scissors', 'alien', 'lizard'];
    getRandomElement(gameType);
  }
  takeTurn(){

  }

}

//the computer is an instance of play and should have the ability to make a random choice.
class Color {
  constructor() {
  this.hex = `#${generateHexCode()}`;
  this.locked = false;
  };
};


//
// saveWinsToStorage(){
//
// }
// retrieveWinsFromStorage(){
//
// }
