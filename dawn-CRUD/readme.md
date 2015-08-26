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
*With the above Schema, we can expect all of our Address Book entries would have a first name, last name, address, and email address in the form of Strings.  We can count on the phoneNumber to always be accepted, stored, and returned as a number.  Lastly, the boolean value of Professional Contact will always be a `true` or `false`