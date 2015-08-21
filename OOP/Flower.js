function Flower(color, petals, smellsPretty, origin){
    /* Properties */
    // Passed-in values
    this.color = color;
    this.petals = petals;
    this.smellsPretty= smellsPretty;
    this.origin = origin;

    // Default values
    this.isEdible = false;
	this.wiltFactor = 100; //0 is dead, 100 is fresh
    this.leafCount = 10;

	/* Methods */
    this.sniff = function(){
        console.log("Sniff Sniff Sniff!");
    };
    // Demonstrates use of arguments with methods
    this.hasGoodSmell = function(answer) {
        if (answer) {
            return 'This flower smells amazing!';
        } else {
            return 'What a noxious weed!';
        }
    };
    // Demonstrates use of local object variables
    this.describe = function(answer) {
        alert("This flower is " + this.color + ".");
      }
    /// Demonstrates object to object interaction
    this.compare =  function(otherFlower) {
        return("My " + this.color + " flower is much prettier than your " +
          otherFlower.color + " flower :P");
    };
    // append html string to website 
    this.render = function() {
        $('body').append("<p>My pretty flower is " + this.color +
          " and has " + this.petals + " pristine petals.");
    };
    // displays message to console
    this.giveFlower= function(){
    	console.log("Here's a flower")
	}; 
}

function Bee(flower1, flower2){
    this.flower1 = flower1;
    this.flower2 = flower2;

    this.crossPollinate = function() {
        var colorBlend = flower1.color + "-" + flower2.color;
        var petalAvg = Math.round((flower1.petals + flower2.petals) / 2);
        var leafAvg = Math.round((flower1.leafCount + flower2.leafCount) / 2);
        var smellTrait = flower1.smellsPretty && flower2.smellsPretty;
        var flower3 = new Flower(colorBlend, petalAvg, smellTrait, "Class Room 6");
        flower3.leafCount = leafAvg;

        return flower3;
    }

}

function HTMLGenerator(flower) {
	this.flower = flower;

	this.render(){
		var htmlEntry = '';
		htmlEntry += '<hr>';
		htmlEntry += '<img src = "http://i.imgur.com/e5dUqq4.jpg" height = 350;>';
		htmlEntry += '<table>';
		htmlEntry += '<tr>'
		htmlEntry += '<td>'
		htmlEntry += '<p>Flower: ' + flower.name + '</p>';
		htmlEntry += '</td>'
		htmlEntry += '<td>'
		htmlEntry += '<p>Edible: ' + flower.isEdible + '</p>';
		htmlEntry += '</td>'
		htmlEntry += '</tr>'
		htmlEntry += '</table>';
		$('body').append(htmlEntry);
	}
}

var flower1 = new Flower("blue", 3, true, "Tenderloin");
var flower2 = new Flower("green", 10, true, "Bush & Sutter");

var bee = new Bee(flower1, flower2);

var flower3 = bee.crossPollinate();
