// var classic = ['rock', 'paper', 'scissors'];
// var chefChallenge = ['pan', 'spoon', 'whisk', 'bowl', 'knife'];

class Player {
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.fighter = null;
    this.classic = ['rock', 'paper', 'scissors'];
    this.chefChallenge = ['pan', 'spoon', 'whisk', 'bowl', 'knife'];
    //should start with 0 wins
  }
//maybe should be take turn
  makeRandomChoice(array) {
    this.fighter = array[Math.floor(Math.random() * array.length)];
    return this.fighter;
  }
  takeTurn(array) {
    this.fighter = array[Math.floor(Math.random() * array.length)];
    return this.fighter;
  }


  // takeTurn(fighterChoice){
  //   if (this.name === 'Computer'){
  //     makeRandomChoice
  //   }
  //
  //   this.currentFighter = fighterChoice;
  //   console.log(currentFighter);
  //   return this.currentFighter;
  // }

}

//the computer is an instance of play and should have the ability to make a random choice.

// if computer is going, should makeRandomChoice
// if human is deciding, they are passing in a specific

// whenever you adjust a property of aclass you should have that be a method within the class.
