const fs = require("fs")

fs.rename("https.js", "myHttp.js", err => {
	if(err) {
		return console.log(err)
	}
})

// using try and catch to resolve promises
try {
    fs.renameSync("module.js", "modulefs.js")
}

catch(error) {
	console.log(error)
}