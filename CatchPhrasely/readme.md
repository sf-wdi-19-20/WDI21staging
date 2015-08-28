#CatchPhrase.ly

Let's build an app for the game **Catchphrase**! Catchphrase is the game were you see a definition associated with a word.

The lab will be a review of what we've done this past week. It is broken down into several sprints outlined below.

##Tips

Model this project after the ToEat.ly app we built. First start CRUDing phrases just as we crudded food items. After you get that down you can worry about how to impliment any gamification, such as hiding the word until you click the definition.

##Sprint One

###User Stories
**A User should see a list of `phrases` on the home page**

* A phrase object should have the properties: `_id`, `word`, & `definition`

* The app should hold an array of hard-coded phrases. This will serves as our "database". (Make some phrases up!)

###General Guidelines
* Start an express project with all the necessary requirements
* Create an index (home) page
* Serve up your static assets (html, css, js) in a public directory
* Your '/phrases' route should return phrases as JSON
* Use AJAX to GET phrases
* Render the phrases on the index page using underscore templating

##Sprint Two

###User Stories
**A User should be able to create a new phrase by submitting a form**

* The DOM should maintain state accordingly

* The phrase should persist with a page refresh

**A User should be able to delete any phrase**

* The DOM should update accordingly
	
* The removed phrase should remain removed upon a page refresh

###General Guidelines

* Create a form for the user to add a new catchphrase
* Send an AJAX POST with form data, overiding the default behavior - only after the post is successful, update the view according
* Add a delete button next to each phrase. When a user clicks the button, delete the corresponding phrase from the backend (the ids should match); once the delete is successful, update the view accordingly.
   
##Sprint Three

We will be building the last interation of Catchphrasely!

Before you start, *make sure* you've completed the first two parts; you *must* have routes for **Reading, Creating, and Deleting** your phrases.

###User Stories
**A User should be able to see the same phrases in the application, even if the server restarts.** (The phrase data is *persistent*.)

* Phrase data is persistent

**A User should be able to read, create, and delete data from the database**

* See existing phrases (served from the DB) 
* Save new phrases (permanently to the DB)
* Delete specific phrases (from the DB)

###General Guidelines

* Make sure you can successfully connect to your Mongo DB & run CRUD commands from the Node REPL / console. Test this beforehand!
* Use a `seed` file to make initially populating & reseting your database's content easier
* Make sure your routes perform CRUD action on the database that follows a RESTful convention