// OOP Racing Game example boilerplate code
<<<<<<< HEAD
function Game(player1, player2, track) {
  //Create a new instance of player 1
  //this.player1 = ...
  this.player1 = player1
  //Do the same for a player 2
  //this.player2 = ...
  this.player2 = player2
  //Create the track
  //this.track = ...
  this.track = track
=======

function Game() {
  //Create a new instance of player 1
  //this.player1 = ...

  //Do the same for a player 2
  //this.player2 = ...

  //Create the track
  //this.track = ...
>>>>>>> 73f588620e612c955638dcbff2e8c216db3763f4
}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
<<<<<<< HEAD
  
  
=======
>>>>>>> 73f588620e612c955638dcbff2e8c216db3763f4
  //
};

// A starter Player constructor.
function Player(team) {
<<<<<<< HEAD
  this.name = team;
  
  //this.name = ...
  this.position = 
=======
  //this.name = ...
>>>>>>> 73f588620e612c955638dcbff2e8c216db3763f4
  //this.position = ...
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  //update player's position
<<<<<<< HEAD
  var playerMove = this.move();
  
  if (i = 0, i < track.length, i++) {
    return playerMove(i);
  } else {
      console.log("done!");
  }
=======
>>>>>>> 73f588620e612c955638dcbff2e8c216db3763f4
};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
var game = new Game();
game.init();
