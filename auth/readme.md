# Auth in Express


| Learning Objectives |
| :---- |
| Implement a password **authentication** strategy in Express |
| Leverage a session to maintain logged-in state for users |
| Create routes for managing user sessions |

##Setup

###Background

This lesson assumes you have background knowledge from the [Storing Passwords w/ Bcrypt](https://github.com/sf-wdi-21/notes/blob/master/week-04/day-3-auth/readme.md) reading.

###Our Tools

Today we will take advantage of:

* Express Framework: build our application and handle requests
* Express Middleware:
  * `body-parser`: handle incoming form data
  * `express-sessions`: manage user sessions
  * `mongoose`: act as an ORM for Mongo
  * `bcrypt`: hash passwords

###Pacing

See all branches in this repo with `git branch -a`. If you want to skip to another point in the exercise, checkout to another step with `git checkout <branch_name>`.

###Get Started

Fork & Clone [this repo]().

##Step 1: App Setup (10m)

**Goal:** Create a boilerplate server.

Inside the project you'll find a black `index.js` file that we will use as our server. Let's get started on setting up our project.

Initialize npm (and press enter a bunch of times) to create your `package.json`

```bash
npm init
```

At the very least we need something like the following:

`index.js`

```js
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/signup", function (req, res) {
  res.send("Coming soon");
});

var listener = app.listen(3000, function () {
  console.log("Listening on port " + listener.address().port);
});
```

The above won't run unless we install those dependencies, so let's go ahead and make sure we do that now. 


Now let's try to install

```
npm install --save express body-parser
```

Run your `index.js` file using `nodemon`

##Step 2: Setup Mongo (10m)

**Goal:** Write a `UserSchema` and define a `User` model.

In the project, create a new directory for `models` and create a file for your `User` model.

```bash
mkdir models
touch models/index.js
touch models/user.js
```

Install `mongoose` for our Mongo ORM and `bcrypt` to help hash our passwords.

```bash
$ npm install --save mongoose bcrypt
```
  
Let's write some logic to connect to our database and bring in our user model to our `models/index.js`.


`models/index.js`

```javascript
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/simple_login");
module.exports.User = require("./user");
```

In `models/user.js`, require `mongoose` and `bcrypt`.

`models/user.js`
 
```javascript
// dependencies
var mongoose = require('mongoose'),
Schema = mongoose.Schema,
bcrypt = require('bcrypt');
```

Also write the `UserSchema`. Users should have the properties **email**, **passwordDigest**, and **createdAt**.

`models/user.js`

```javascript
// the user schema
var UserSchema = new Schema({
  email: {type: String, required: true},
  passwordDigest: {type: String, required: true},
  createdAt: {type: Date, required: true}
});
```

Finally create and export a mongoose model to be required it in other parts of our application.

`models/user.js`

```javascript
// define user model
var User = mongoose.model('User', UserSchema);
// export user model
module.exports = User;
```
  
##Step 3: ...

