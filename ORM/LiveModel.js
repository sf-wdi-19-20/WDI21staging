function Model(name) {
	this.type = name;
	this.data = [];
	//This is going to be accessed by all
	// objects I create at least once.
	this._id = 0;
}

function Person(first_name, last_name) {
	this.first_name = first_name;
	this.last_name = last_name;
}

Model.prototype = {

	create : function (object, callback) {
		// object parameter goes in object_container
		var objectContainer = {};
		objectContainer._id = this._id;
		this._id += 1;
		objectContainer._ts = Date.now();
		objectContainer.ownObject = object;
		this.data.push(objectContainer);
		return objectContainer;
	}
}


var  User = new Model("user");

var Justin = new Person("Justin", "Reyes");
var Justin2 = new Person("Justin", "Almeida");

var createdUser = User.create(Justin);
//console.log(createdUser);

User.create(Justin2);

console.log(User);
















