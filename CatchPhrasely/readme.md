#CatchPhrase.ly

Let's build an app for **Catchphrase**! If you forget, Catchphrase is played to help remember words' definitions, just like flash cards. To play we need a list of `phrases` which have a `word` and a `definition`. For example: `word: "HTTP", definition: "part of the application layer of Internet protocol suite that is used to transfer media across the world wide web"`

The lab will be a review of what we've done this past week. It is broken down into several sprints outlined below.

##Tips

Model this project after the ToEat.ly app we built. First start CRUDing phrases just as we crudded food items. After you get that down you can worry about implimenting any bonus gamification. After sprint three, if you have the energy you can attempt hiding the definition until you click the word. Use the following two in-class builds as references:

* [ToEatly v1](https://github.com/sf-wdi-21/toEatly/tree/dash-six) - final build & [instructions](https://github.com/sf-wdi-21/notes/blob/master/week-03/day-03-crud-express/dawn-to-eatly/readme.md)
* [ToEatly v2](https://github.com/sf-wdi-21/bite_me_mongo_express) - w/ mongodb

##Sprint One

###User Stories
**A User should see a list of `phrases` on the home page**

* A phrase object should have the properties: `_id`, `word`, & `definition`

* The app should, for now, store hard-coded phrases as an array of objects. This will serves as a temporary "database" of sorts. (Create some phrases!)

###General Guidelines
* Start an express project with all the necessary requirements
* Create an `index.html` (home) page
* Serve up your static assets in a public directory
* Use bower to require any libraries and serve them up in a vendor directory
* Your '/phrases' index route should return all the phrases as JSON
* Use AJAX to GET phrases
* Template the phrases on the index page using underscore

##Sprint Two

###User Stories
**A User should be able to create a new phrase by submitting a form**

* The DOM should update state accordingly

* The phrase should persist with a page refresh

**A User should be able to delete any phrase**

* The DOM should update state accordingly
	
* The removed phrase should remain removed upon a page refresh

###General Guidelines

* Create a form for the user to add a new catchphrase
* Send an AJAX POST with form data, overiding the default behavior. Only after the post is successful, update the view according
* Add a delete button next to each phrase. When a user clicks the button, delete the corresponding phrase from the backend (the ids should match); once the delete is successful, update the view accordingly.
   
##Sprint Three

We will be building the last interation of Catchphrasely! Make sure you've been pacing yourself up until now and taking plenty of breaks.

Before you start, *make sure* you've completed the first two parts; you *must* have routes for **Reading, Creating, and Deleting** your phrases.

###User Stories
**A User should be able to see the same phrases in the application, even if the server restarts.** (The phrase data is *persistent*.)

* All phrase data should persist

**A User should be able to read, create, and delete data from the database**

* Existing phrases should all be served from the DB
* New phrases should be permanently saved to the DB
* Deleting phrases should perminently remove them from the DB

###General Guidelines

* Make sure you can successfully connect to your Mongo DB & run CRUD commands from the Node REPL / console. Test this beforehand!
* Try using a `seed` file to make initially populating & reseting your database's content easier
* Make sure your routes perform CRUD action on the database that follows a RESTful convention
