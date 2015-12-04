//connect to the test server
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {

	//create a schema ie a database tables

	var kittySchema = mongoose.Schema({
			name: String

	});

	//add a function to a schema must be added before compiling with mongood model
	kittySchema.methods.speak = function () {
		var greeting = this.name
		? "My name is " + this.name

		: "I don't have a name";

		console.log(greeting);
	}

	//create a model with which to create instances of items in the database
	var Kitten = mongoose.model('Kitten', kittySchema);

	var fluffy = new Kitten({name : 'Fluffy'});

	var tibbles = new Kitten({name : 'Tibbles'});
	tibbles.speak();

	//save fluffy to the database
	fluffy.save(function (err, fluffy) {
		if (err) return console.error(err);

		fluffy.speak();

	});


	//find kitten in database

	Kitten.find(function (err, kittens)
	{
		if (err) return console.error(err);
		console.log(kittens);
	});

});