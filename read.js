const fs = require("fs/promises")

// Using the promised based callbacks
async function example3() {
	try {
        const data4 = await fs.readFile("test.js", "utf8")
        console.log("...............................................")
        console.log(data4)
	}
	catch(err) {
		console.log(err)
	}
}

console.log(example3())

// Using promise based callbacks to avoid callback hell
async function example() {
	const fileName2 = "test.js"
	try {
        const data = await fs.readFile(fileName2, "utf8")
        console.log(data)
        const content2 = "Some contents again!"
        const data2 = await fs.writeFile(fileName2, content2)
        console.log("Wrote some new contents!")
        const newData = await fs.readFile(fileName2, "utf8")
        console.log(newData)
	}
	catch(error) {
		console.log(error)
	}
}
