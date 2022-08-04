const http = require("http")
const fs = require("fs")
const dt = require("./fileModule")
const url = require("url")

const port = process.env.LOCAL_PORT || 8080

// create server using createServer function
const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type" : "text/html"})
	res.write(`The current date is ${dt.myDateTime()} `)
	// fs.readFile("test.js", "utf8" function(error, data) {
	// 	if(error) {
	// 		console.log(error)
	// 		return
	// 	}

	// 	res.write(data)
	// 	res.end()
	// })

	try {
		const address = "https://www.facebook.com/default.jtml?year=2022&month=january"
		const data = fs.readFileSync("test.js", "utf8")

		// appends a file
		fs.appendFile("test5.js", "New Contents", function(err) {
			if(err){
				console.log(err)
			}
		})

		// creates a new file
		fs.open("test4.js", "w", function(err, file) {
			if(err) {
				console.log(error)
			}
			console.log("File Saved!")
		})

		// deletes a file
		// fs.unlink("test4.js", err => {
		// 	if(err) {
		// 		console.log(err)
		// 	}
		// 	console.log("File deleted")
		// })

		// rename a file
		fs.rename("test5.js", "test5.js", function(error) {
			if(error) {
				console.log(error)
			}
			console.log("File renamed!")
		})

		res.write(data)
		res.end

	}

	catch(error) {
       console.log(error)
	}
	// let q = url.parse(req.url, true).query
	// let txt = q.year + " " + q.month
	// res.write(txt)
	// res.write(`Random numbers ${dt.randomNum()}`)
})

// listen to port
server.listen(port, () => console.log(`server is running on port ${port}`))