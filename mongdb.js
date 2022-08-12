 const MongoClient = require("mongodb").MongoClient
 const url = "mongodb://localhost:27017/";
 const databasename = "mydb"

// // connect to the database
MongoClient.connect(url, function(err, db) {
	if(err) {
		console.log(err)
	}
	   const myDb = db.db(databasename)
	console.log("Database is created!")

   // create a collection
	myDb.createCollection("customers", function(err, res) {
		if(err) {
         console.log(err)
		}
		console.log("Collection created!")
	})
	// db.close();
})