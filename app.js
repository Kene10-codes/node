const express = require("express")

const app = express()

app.get("/", (res, req) => {
	res.send("Hi!")
})

const server = app.listen(3000, () => console.log("app started!"))

app.on("SIGTERM", () => {
	server.close(() => {
		console.log("process is terminated!")
	})
})

console.log("Hello World!")