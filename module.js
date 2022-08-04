const fs = require("fs")

// fs.rename("https.js", "myHttp.js", err => {
// 	if(err) {
// 		return console.log(err)
// 	}
// })

// // using try and catch to resolve promises
// try {
//     fs.renameSync("module.js", "modulefs.js")
// }

// catch(error) {
// 	console.log(error)
// }

// callback based API
const fileName = "test.js"
fs.readFile(fileName, "utf8", (error, data) => {
	if(error) {
		console.log(error)
		return
	}
	console.log(data)
	const content = "Some content!"
	fs.writeFile(fileName, content, ((error, data) => {
		if(error) {
			console.log(error)
			return
		}
		console.log("Wrote some content!")
		fs.readFile(fileName, "utf8", ((error, data) => {
			if(error) {
				console.log(error)
				return
			}
			console.log(data)
		}))
	}))
})


// example async

fs.writeFile("test.js", "Hello this is my new file", (err) => {
	if(err) {
		console.log(err)
		return
	}
})

// using sync method

const content3 = "This is the third content!."
try {

	fs.writeFileSync("app.js", content3)
} 
catch(error) {
	console.error(error)
}

// append file
const content4 = ". This is the fourth content."

fs.appendFile("test.js", content4, err => {
	if(err) {
		console.error(err)
	}
})


// using promise base callbacks
async function example2() {
	try {
		const content5 = "This is the fifth content."
        await fs.appendFile("file.js", content5)
	}
	catch(error) {
		console.log(error)
	}
}

// example2()

// reading files
fs.readFile("test.js", "utf8", (error, data ) => {
	if(error) {
		console.error(error)
		return
	}
	console.log(data)
})

// using the promised based callbacks
	try {
        const data4 = await fs.readFileSync("test.js", "utf8")
        console.log("...............................................")
        console.log(data4)
	}
	catch(err) {
		console.log(err)
	}
