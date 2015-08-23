function Model(name){
  this.type  = name;
  this.data = [];
  this._id = 0;
}



Model.prototype = {

  create : function (object){
    var object_container = {};
    object_container._id = this._id++;
    object_container._ts = Date.now();
    object_container.data = object;
    this.data.push(object_container);
    return object_container;
  },

  find_by_id : function(object_id){
    return this.data.filter( function (object) {
      if(object._id === object_id){
        return object;
      }
    });
  },

  delete : function(object_id) {
    var pos, marked;
    this.data.forEach( function (object, index) {
      if(object._id === object_id){
        marked = object;
        pos = index;
      }
    });
    this.data.splice(pos,1);
    return marked;
  },

  update : function(object_id, update_object) {
    var update;
    this.data.forEach( function (object) {
      if(object._id === object_id){
        object.data = update_object;
        update = object;
      }
    });
    return update;
  }
}

/* Instantiate Model object */
//var user = new Model("user");

/* Create objects */
// [
//   {first_name: "Mister", last_name: "Robot"},
//   {first_name: "Stanley", last_name: "Steemer"},
//   {first_name: "Action", last_name: "Bronson"},
//   {first_name: "Jillian", last_name: "Murphy"},
//   {first_name: "Nichole", last_name: "DeJarden"}
// ].forEach( function(person) {
//   user.create(person);
// });

/* Find object by id */
//var found = user.find_by_id(3);
//console.log("Searched:\n", found);

/* Delete object */
//var deleted = user.delete(1);

/* Create object, Show continuation of id scheme after delete*/
//user.create({first_name: "Billy", last_name: "Bragg"});
//console.log("Deleted:\n", deleted);

/* Update object properties */
//var updated = user.update(1, {first_name: "Joey", last_name: "Michaels"});
//console.log("Updated:\n", updated);

/* Display data content */
//console.log(user);
