

$(document).ready(function(){

  function colorChange(){
      return '#'+ Math.random().toString(16).slice(2,8);
    };

    $('#button2').on('click',function(){

      $('body').css('background', colorChange());
    });

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var ctxW = canvas.width;
    var ctxH = canvas.height;



    // var player1 = new Player();
    // var image = document.getElementById('racetrack');
    
    var track = ctx.strokeRect(0,50,10,10);


    // background
    ctx.fillStyle = 'red';
    // ctx.fillRect();

    var imageOne = document.getElementById('dawg');
    var playerImage = ctx.drawImage(imageOne,0,10,50,50);
    var player1 = new Player('Player1',playerImage);
    
    function Player(name,image) {
    this.name = name;
    // this.position = ;
    this.image = image;

};


    
    // ctx.drawImage(image, 0,10);
    
// function drawTrack(){
// ctx.clearRect(0,0,ctxW,ctxH);

// ctx.drawImage(trackView,0,0);

// };

});
// OOP Racing Game example boilerplate code

// function Game() {
  //Create a new instance of player 1
  //this.player1 = ...

  //Do the same for a player 2
  //this.player2 = ...

  //Create the track
  //this.track = ...
// }

// `Game.prototype.init` kicks off a new game with a board and two players
// Game.prototype.init = function() {
  //
// };

// A starter Player constructor.




// var player = new Player('dawg', playerImage)

// Remember: prototypes are shared functions between all game instances
// Player.prototype.move = function() {
  //update player's position
// };


// A starter Track constructor.
// function Track(image) {
//   // Tracks the cells of the board instance
//   // this.$cells = ...
//   this.image=image;

//   //Store any other properties that board may have below, such as a reset option
// };
// };



// function player1(){
//   dawg = new Image();
//   dawg.src = "dawg.jpg";


// }
// var player = new Player('dawg',,)



// // Start the game!
// var game = new Game();
// game.init();
