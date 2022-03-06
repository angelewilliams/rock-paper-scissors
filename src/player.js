class Player {
  constructor(name, token){
    this.name = name;
    this.token = token || '😎';
    this.wins = 0;
    this.fighter;
    this.classicGame = [
      {type:'rock', beats:['scissors']},
      {type:'paper', beats:['rock']},
      {type:'scissors', beats:['paper']},
    ];
    this.chefChallengeGame = [
      {type:'lemon', beats: ['peas', 'broccoli']},
      {type:'pepper', beats: ['lemon', 'apple']},
      {type:'peas', beats: ['pepper', 'broccoli']},
      {type:'broccoli', beats: ['pepper', 'apple']},
      {type:'apple', beats: ['peas', 'lemon']}
    ];
  }
//maybe should be take turn
  makeRandomChoice(array) {
    this.fighter = array[Math.floor(Math.random() * array.length)];
    //this is going to give us a string value of the type property of the object stored in the classic or chef version of the game
    return this.fighter;
  }
  takeTurn(input, array) {
    if (this.name = 'Human'){
      this.fighter = input;
      //OR this.fighter.value --that comes from input click
      //will assign fighter based on the click

    }
    else if (this.name = 'Computer'){
    this.fighter = array[Math.floor(Math.random() * array.length)];
      return this.fighter;
    }
  }
}

// whenever you adjust a property of aclass you should have that be a method within the class.
