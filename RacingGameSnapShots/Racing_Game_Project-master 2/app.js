<<<<<<< HEAD
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
=======

// OOP Racing Game example boilerplate code
$(document).ready(function() {

  function Game() {
    //Create a new instance of player 1
    //this.player1 = ...
    this.player1 = new Player ('red', 0, 97, 'track1');
    console.log ("player 1 created");

    //Do the same for a player 2
    //this.player2 = ...
    this.player2 = new Player ('blue', 0, 108, 'track2');
    console.log ("player 2 created");
    //Create the track
    //this.track = ...
    this.track = new Track (10)
  }; 
 


    // `Game.prototype.init` kicks off a new game with a board and two players
    // when play btn pressed, clears board and starts in cell 1 
    Game.prototype.init = function() {
        $("table td").removeClass("active");
        $("table td:first-child").addClass("active");
    };




  // A starter Player constructor.
  function Player(color, position, letterUsed, trackName) {
    this.color = color;
    this.position = 0;
    this.letterUsed = letterUsed;
    this.trackName = trackName;
  };

  //Remember: prototypes are shared functions between all game instances
    Player.prototype.move = function() {
    //update player's position
    //when player hits key: move fwd 1 until end is reached
      this.position = this.postion + 1;
        console.log ("player moved");
    };


  // A starter Track constructor.
  function Track() {
    //Tracks the cells of the board instance
    //this.$cells = ...
    this.trackLength = 10;
  };

    // This is my clone/append function - tried a bunch of stuff, but no success yet
    //Track.prototype.append = function() {
    //   $(#track).append

    //     console.log (track appended)

    // }


//Store any other properties that board may have below, such as a reset option
   
  


// Start the game!
  var game = new Game();
  
//attach listeners
  $(".play").click(game.init);
  $(document).keypress(keyhit);

  function keyhit(e) {
    if (e.which == game.player1.letterUsed) { 
      game.player1.move();
        console.log ("e.which 97 works");
    }    
      else if (game.player1.position > 10) {
        alert("player 1 wins");
      }
        else if (e.which == game.player2.letterUsed) { 
          game.player2.move();
            console.log ("e.which 108 works");
        }    
          else if (game.player2.position > 10) {
            alert("player 2 wins");
          }
  }; 


});
>>>>>>> 73f588620e612c955638dcbff2e8c216db3763f4
