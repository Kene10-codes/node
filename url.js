
console.log(globalThis.URL === URL)


const myURL = new URL("https://example.com:433/face#book")
const myURLTwo = new URL("http://abc:xyz@example.com")
const myURLThree = new URL("http://www.facebook.com/todo?1234543")
console.log(myURL.hash)

myURL.hash = "work"

// gets and sets the hash portion of the url
console.log(myURL.hash)

// gets and sets the serialized url
console.log(myURL.href)

// gets the host of the url
console.log(myURL.host)


// gets the hostname
console.log(myURL.hostname)

// gets the read only serialization of the url
console.log(myURL.origin)

// gets and sets the password portion of the url
console.log(myURLTwo.password)

myURLTwo.password = 4940
console.log(myURLTwo.password)

// gets and sets pathname portion of the url 
console.log(myURL.pathname)
console.log(myURLTwo.pathname)

// gets and sets the port portion of the url
console.log(myURL.port)
console.log(myURLTwo.port)
console.log(myURLThree.port)

myURLThree.port = 80
console.log("................")

console.log(myURLThree.port)

// gets and sets protocol portion of the url
console.log(myURL.protocol)
console.log(myURLTwo.protocol)
console.log(myURLThree.protocol)

myURLThree.protocol = "ftp"

console.log(myURLThree.protocol)


// gets and sets the serialized query portion of the url
console.log(myURLThree.search)


