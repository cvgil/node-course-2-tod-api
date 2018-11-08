//const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');


	//console.log(db);
		// let db = client.db('TodoApp')
	// 	db.collection('Todos').find({
	// 		_id: new ObjectID ('5be044d34f545901b8649df7')
	// 		}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);

	// });

	// 	let db = client.db('TodoApp')
	// 	db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);

	// });

    let db = client.db('TodoApp')
	db.collection ('Users').find({name: 'Carmen V'}).toArray().then((docs) =>{
		console.log(JSON.stringify(docs, undefined,2));
	});


	
	// db.close();
});