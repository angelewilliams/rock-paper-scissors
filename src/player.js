class Player {
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.fighter = null;
    this.classicGame = [
      {type:'rock', beats:['scissors']},
      {type:'paper', beats:['rock']},
      {type:'scissors', beats:['paper']},
    ];
    this.chefChallengeGame = [
      {type:'pan', beats: ['spoon', 'whisk']},
      {type:'bowl', beats: ['pan', 'knife']},
      {type:'spoon', beats: ['bowl', 'whisk']},
      {type:'whisk', beats: ['bowl', 'knife']},
      {type:'knife', beats: ['spoon', 'pan']}
    ];


    //should start with 0 wins
  }
//maybe should be take turn
  generateComputerChoice(array) {
    this.fighter = array[Math.floor(Math.random() * array.length)];
    //this is going to give us a string value of the type property of the object stored in the classic or chef version of the game
    return this.fighter;
  }
  takeTurn(array, input) {
    if (this.name = 'Human'){
      this.fighter = input;
    }
    else if (this.name = 'Computer'){
    this.fighter = array[Math.floor(Math.random() * array.length)];
      return this.fighter;
    }
  }
}
  //will assign fighter based on the click

  // makeRandomChoice(array) {
  //   this.fighter = array[Math.floor(Math.random() * array.length)].type;
  //   //this is going to give us a string value of the type property of the object stored in the classic or chef version of the game
  //   return this.fighter;
  // }
  // takeTurn(array) {
  //   this.fighter = array[Math.floor(Math.random() * array.length)].type;
  //   return this.fighter;
  // }


  // takeTurn(fighterChoice){
  //   if (this.name === 'Computer'){
  //     makeRandomChoice
  //   }
  //
  //   this.currentFighter = fighterChoice;
  //   console.log(currentFighter);
  //   return this.currentFighter;
  // }

// }

//the computer is an instance of play and should have the ability to make a random choice.

// if computer is going, should makeRandomChoice
// if human is deciding, they are passing in a specific

// whenever you adjust a property of aclass you should have that be a method within the class.
