class Player {
  constructor(name, token){
    this.name = name;
    this.token = token || '😎';
    this.wins = 0;
    this.fighter;
    this.classicOptions = [
      {type:'rock', beats:['scissors']},
      {type:'paper', beats:['rock']},
      {type:'scissors', beats:['paper']},
    ];
    this.difficultOptions = [
      {type:'lemon', beats: ['peas', 'broccoli']},
      {type:'pepper', beats: ['lemon', 'apple']},
      {type:'peas', beats: ['pepper', 'broccoli']},
      {type:'broccoli', beats: ['pepper', 'apple']},
      {type:'apple', beats: ['peas', 'lemon']}
    ];
  }
  takeTurn(array) {
    this.fighter = array[Math.floor(Math.random() * array.length)];
  }
}
