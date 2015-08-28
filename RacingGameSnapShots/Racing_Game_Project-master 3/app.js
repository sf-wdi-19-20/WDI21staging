
var trackHTML = "<tbody>
        <tr>
          <!-- Change all of these to ids ,not classes. IDs are unique -->
          <td id='1'></td>
          <td id='2'></td>
          <td id='3'></td>
          <td id='4'></td>
          <td id='5'></td>
          <td id='6'></td>
          <td id='7'></td>
          <td id='8'></td>
          <td id='9'></td>
          <td id='10'></td>
        </tr>
      </tbody> "; 

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
      var tdPos = 'td#'+this.position;
      // remove class w/ the above partial jqueryString
      // for the player's specific track, remove their
      // current location's class (red)
      this.position = this.postion + 1;
      //maybe rebuild the tdPos to have teh updated position (maybe even make a function)
        console.log ("player moved");
      // now add the class (red) to the new position
      // hint: make a small jquery String
        
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

  //let's smash this together a little more.
  // maybe make a helper function check for win conditions for
  // each player: Example: function checkWin(player, position)
  function keyhit(e) {
    if (e.which == game.player1.letterUsed) { 
      game.player1.move();
        console.log ("e.which 97 works");
        // call a checkWin function after movement
    }    
    else if (game.player1.position > 10) {
      alert("player 1 wins");
    }
    else if (e.which == game.player2.letterUsed) { 
      game.player2.move();
        console.log ("e.which 108 works");
        // call a CheckWin function after movement
    }    
    else if (game.player2.position > 10) {
      alert("player 2 wins");
    }
  }; 


});