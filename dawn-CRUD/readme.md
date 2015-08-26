#Attack of the Mongo(ose)DB!

| Learning Objectives
|----
| Compare and Contrast an SQL with a noSQL database
| Create a custom Schema and subsequent Model using the Mongoose library
| Execute basic CRUD actions with the the console/REPL
| Demonstrate the ability to create and modify embedded objects within top level objects in a noSQL database


##First things first:  Install Party!

We need to use brew to install our new **MongoDB** database system!

From the console:
```brew install mongodb```

Now we need to create a directory for **MongoDB** to save and store data.

From the console: 
```sudo mkdir -p /data/db```

Let's ensure that the folder permissions allow us to read and write to our newly made diretory.

From the console:
```sudo chown -R $USER	/data/db```


##Terminology:
- **RDBMS**: (Relational Database Management System)  
 
- **SQL**: (Structured Query Language) a special-purpose programming language designed for managing data held in a RDBMS  
  
- **noSQL**: Document databases pair each key with a complex data structure or object known as a document. Documents can contain many different key-value pairs, or key-array pairs, or even nested documents.

- **Schema**: Similar to an object constructor, a Schema is a diagram or blueprint for what every object in the noSQL database will contain.  Here's an example of a simple Address Book noSQL database schema:  

	```javascript
		var AddressBookSchema = new Schema({
		    firstName: String,
		    lastName: String,
		    address: String
		    phoneNumber: Number,
		    email: String
		    professionalContact: Boolean
		});
	```
*With the above Schema, we can expect all of our Address Book entries would have a first name, last name, address, and email address in the form of Strings.  We can count on the phoneNumber to always be accepted, stored, and returned as a number.  Lastly, the boolean value of Professional Contact will always be a `true` or `false`*

##RDBMS vs noSQL
A great analogy from a fellow StackOverflower:
> "NoSQL databases store information like you would recipes in a book. When you want to know how to make a cake, you go to that recipe, and all of the information about how to make that cake (ingredients, preparation, mixing, baking, finishing, etc.) are all on that one page.
> 
> SQL is like shopping for the ingredients for the recipe. In order to get all of your ingredients into your cart, you have to go to many different aisles to get each ingredient. When you are done shopping, your grocery cart will be full of all the ingredients you had to run around and collect.
> 
> Wouldn’t it be nicer if there was a store was organized by recipe, so you could go to one place in the store and grab everything you need from that one spot? Granted you’ll find ingredients like eggs in 50 different places, so there’s a bit of overhead when stocking the shelves, but from a consumer standpoint it was much easier/faster to find what they were looking for."  

-[mgoffin, Jan 20 '13 at 19:15](http://stackoverflow.com/questions/14428069/sql-and-nosql-analogy-for-the-non-technical/14428221#14428221)  


##Getting started with our own database!
1.  Head over to our app folder and we will istall Mongoose via npm.   Mongoose is a Object-relational mapping middleware that enables us to easily model objects and interact with MongoDB.  

	From the console:  

	```
	npm init
	npm install --save mongoose
	```

2.  We need to make sure MongoDB is running.  From the console, enter this command: 

	```
	mongod
	```
Mongodb's secret servers will run in the background, so we don't have to worry about anything for right now.

	
	
