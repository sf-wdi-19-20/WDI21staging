function getTimeStamp() {
    var now = new Date();
    return parseInt(((now.getMonth() + 1) + '' +
            (now.getDate()) + '' +
             now.getFullYear() + "" +
             now.getHours() + '' +
             ((now.getMinutes() < 10)
                 ? ("0" + now.getMinutes())
                 : (now.getMinutes())) + '' +
             ((now.getSeconds() < 10)
                 ? ("0" + now.getSeconds())
                 : (now.getSeconds()))));
}


function Model(name){
  this.type  = name;
  this.data = [];
  this._id = 0;
}
Model.prototype.create(object){
    var object_container = {};
    object_container._id = this._id++;
    object_container._ts = getTimeStamp();
    object_container._actv = true;
    object_container.data = object;
    this.data.push(object_container);
  }

  this.find_by_id = function(object_id){
  return this.data.filter( function (object) {
      if(object._id === object_id){
        return object;
      }
    });
  }

  this.delete = function(object_id) {
    var pos, marked;
    this.data.forEach( function (object, index) {
      if(object._id === object_id){
        marked = object;
        pos = index;
      }
    });
    this.data.splice(pos,1);
    return marked;
  }

  this.update = function(object_id, update_object) {
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

var user = new Model("user");

user.insert({first_name: "Stanley", last_name: "Steemer"});
user.insert({first_name: "Action", last_name: "Bronson"});
user.insert({first_name: "Jillian", last_name: "Murphy"});
user.insert({first_name: "Nichole", last_name: "DeJarden"});

// var found = user.find_by_id(3);
// console.log("Searched",found);

// var deleted = user.delete(1);

user.insert({first_name: "Billy", last_name: "Bragg"});
// console.log("Deleted", deleted);

// var updated = user.update(1, {first_name: "Joey", last_name: "Michaels"});
// console.log("Updated", updated);

// console.log(user);
