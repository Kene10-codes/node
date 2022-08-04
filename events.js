const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

eventEmitter.on("start", (begin, end) => {
	console.log(`--------started--------- ${begin} to ${end}`)
})

const func = () => {
	console.log("slam was added", this)
}

const funcRemoved = () => {
	console.log("slam was removed")
}

// adds ana event listener slam
eventEmitter.on("slam", func) 

eventEmitter.emit("start", 1, 50)
eventEmitter.emit("slam")

eventEmitter.off("start", () => {})

// get all the registered event names
console.log(eventEmitter.eventNames())

// get the max number of event you can add in en EventEmmitter object
console.log(eventEmitter.getMaxListeners())

// get the counts of listeners of event passed
console.log(eventEmitter.listenerCount("slam"))
console.log(eventEmitter.listenerCount("start"))

// get an array of listeners of the events passsed
console.log(eventEmitter.listeners("start"))

// removes an events from the event object
console.log(eventEmitter.removeListener("slams", funcRemoved))

eventEmitter.on("open" , function() {
	console.log("events opened")
})

eventEmitter.emit("open")

eventEmitter.removeListener("open", function() {
	console.log("event open removed")
})

// set maximum listeners
eventEmitter.setMaxListeners(60)
console.log(eventEmitter.getMaxListeners())
