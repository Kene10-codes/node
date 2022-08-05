const http = require("http")
const fs = require("fs")
const url = require("url")
		

const server = http.createServer((req, res) => {

		let clientUrl = url.parse(req.url, true)

		let fileName3 = `.${clientUrl.pathname}`
		fs.readFile(fileName3, "utf8", function(error, data){
			if(error) {
				res.writeHead(404, {"Content-Type" : "text/html"})
				return res.end("404 not found!")
			}
			res.writeHead(200, {"Content-Type": "text/html"})
			res.write(data)
			return res.end()
		} )

	})



// listen to port 
server.listen(3200, () => console.log(`server is running on port 3200`))
