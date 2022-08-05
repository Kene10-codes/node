const http = require("http")
const fs = require("fs")
const url = require("url")
const port = 3200

const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "text/html"})

	const clientUrl = url.parse(req.url, true)

	if(clientUrl.pathname == "/html") {
		   fs.readFile("index.html", "utf8", function(err, data) {
		   	if(err) {
		   		res.writeHead(404, {"Content-Type": "text/html"})
		   		return res.end()
		   	}
		   	res.write(data)
		   	res.end()
		   })
		   
	}

	else if(clientUrl.pathname == "/about") {
		   fs.readFile("about.html", "utf8", function(err, data) {
		   	if(err) {
		   		res.writeHead(404, {"Content-Type": "text/html"})
		   		return res.end()
		   	}
		   	res.write(data)
		   	res.end()
		   })
		   
	}

	else if(clientUrl.pathname == "/contact-me") {
		   fs.readFile("contact-me.html", "utf8", function(err, data) {
		   	if(err) {
		   		res.writeHead(404, {"Content-Type": "text/html"})
		   		return res.end()
		   	}
		   	res.write(data)
		   	res.end()
		   })
		   
	} else {
		fs.readFile("404.html", "utf8", function(err, data) {
		   	if(err) {
		   		res.writeHead(404, {"Content-Type": "text/html"})
		   		return res.end()
		   	}
		   	res.write(data)
		   	res.end()
		   })
	}
})

server.listen(port, () => console.log(`Listening to ther server on port ${port}`))