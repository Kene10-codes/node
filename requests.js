const https = require("https")

const options = {
	hostname: "example.com",
	port: 433,
	path: "/todos",
	method: "GET"
}

// make a get request
const req = https.request(options, res => {
	console.log(`Res: ${res.statusCode}`)

    // listen to data event and call a func
	res.on("data", d => process.stdout.write(d))
})


// listen to error if any
req.on("error", () => console.error(`Error is present!`))

// data to post 
const data = JSON.stringify({
	todo: "Buy me a chocolate"
})

const optionsPost = {
	hostname: "example.com",
	port: 433,
	path: "/post-todos",
	method: "POST",
	headers: {
		Content-Type: "application/json",
		Content-Length: data.length
	}
}

// make a post request
const req = https.request(optionsPost, res => {
	console.log(`Status code: ${res.statusCode}`)

	res.on("data", d => process.stdout.write(d))

})

req.write(data)

// end the request
req.end()
	