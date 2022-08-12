const mysql = require("mysql")

// connect to mysql
const connection = mysql.createConnection({
	host: "localhost",
	user: "2323",
	password: "332342fws"
})

connection.connect(function(err){
	if(err) throw err;
	console.log("Connected!")
})

