// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  this.player1 = player1
  //Do the same for a player 2
  this.player2 = player2
  //Create the track
  this.track = ...
};

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
    $("table td").removeClass("active");
  $("table td:first-child").addClass("active");

    $(document).ready(function() {
  //attached listeners
      $(".play").click(play);
        $(document).keypress(hitKey);

    });
};

// A starter Player constructor.
function Player(name, letterUsed, position, image) {
  this.name = name;
  this.position = position;
  this.letterUsed = letterUsed;
  this.image = image;
};

var player1 = new Player ('cake', '1', $("#a1").append("https://crustabakes.files.wordpress.com/2013/06/rainbow-cake-7.jpg"), "https://crustabakes.files.wordpress.com/2013/06/rainbow-cake-7.jpg");
  console.log ("player 1 created");
var player2 = new Player ('pie', '0', $("b1").append("http://talentanarchy.com/wp-content/uploads/2013/06/apple-pie.jpg"), "http://talentanarchy.com/wp-content/uploads/2013/06/apple-pie.jpg");
  console.log ("player 2 created");

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  //update player's position
};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
var game = new Game();
game.init();
