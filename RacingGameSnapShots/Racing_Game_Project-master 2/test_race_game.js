$(function() {

  $(document).keypress(function(action){

    //when "1" is pressed this action will start 
      if (action.which == 49) {
          var count = 4;
          function anim() {
              if (count > 1) {
                  console.log(count);
                  count--;
                  setTimeout(anim, 700);
                  // alert(count)
                  $("h1").append('<p>' + count + '</p>');
                  $("h1").remove();
              }
              else {
                  // alert('GO!')
                  $("h1").append("GO!");
              }
          }
          anim();
      }
  });


    function Game (player1, player2, winner) {
      this.player1 = player1;
      this.player2 = player2;
      this.winner = winner;
      this.init();
    }

    // `Game.prototype.init` kicks off a new game with a board and two players
    Game.prototype.init = function() {
      $(document).keypress(function() {


      });


    };



    // A starter Player constructor.
    function Player(name, letterUsed, position, image) {
      this.name = name;
      this.position = position;
      this.letterUsed = letterUsed;
      this.image = image;
    };

    var player1 = new Player ('cake', '1', $(".a1").append('<img src=' + "https://crustabakes.files.wordpress.com/2013/06/rainbow-cake-7.jpg" + '>'), "https://crustabakes.files.wordpress.com/2013/06/rainbow-cake-7.jpg");
      console.log ("player 1 created");
    var player2 = new Player ('pie', '0', $(".b1").append('<img src=' + "http://talentanarchy.com/wp-content/uploads/2013/06/apple-pie.jpg" + '>'), "http://talentanarchy.com/wp-content/uploads/2013/06/apple-pie.jpg");
      console.log ("player 2 created");




    // Remember: prototypes are shared functions between all game instances
    // Player.prototype.move = function() {
    //   update player's position
    // };

          var p1Moves = 0;
          var p2Moves = 0;
          var max = 15;
          var p1Wins = 0;
          var p2Wins = 0;

    Player.constructor.prototype.move = 
          
          $(document).keypress (function(action) { 
          

            if (p1Moves < max) {
                // start by pressing 1
             if(action.which == 49){ 
                $('.a1').animate({'margin-left': '+=40px' }, 700);
                p1Moves++
              } 
            }

            if (p2Moves < max) {
              //start by pressing 0
             if(action.which == 48) {
                $('.b1').animate({'margin-left': '+=40px' }, 700);
                p2Moves++;
              } 
          };
    });




    Player.constructor.prototype.winOnce = $(document).keypress (function () {
      
      if (p1Moves >= 10) {
        p1Wins++;
        alert("Cake Wins!");
    }

      if (p2Moves >= 10) {
        p2Wins++;
        alert("Pie Wins!");
      }

    });




    //<<<<<<<<<< Soft Reset Button >>>>>>>>>>
    $( "#soft-reset" ).click(function() {
      $( ".a1" ).css({'margin-left': '0'});
      p1Moves = 0;
      $( ".b1" ).css({'margin-left': '0'});
      p2Moves = 0;
    });


});






// Start the game!
var game = new Game();
game.init();




