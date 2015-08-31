$(document).ready(function(){

  function colorChange(){
      return '#'+ Math.random().toString(16).slice(2,8);
    };

    $('button').on('click',function(){

      $('body').css('background', colorChange());
    });

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var ctxW = canvas.width;
    var ctxH = canvas.height;
    // var player1 = new Player();
    var image = document.getElementById('racetrack');


    // background
    ctx.fillStyle = 'red';
    ctx.fillRect(0,0,500,50);
    
    ctx.drawImage(image, 0,10);
    
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
// function Player(name,position,image) {
//   this.name = name;
//   this.position = position;
//   this.image = image;

// };

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
