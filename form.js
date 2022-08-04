const http = require("http")
const formidable = require("formidable")
const fs = require("fs")
const os = require("os")
const port = 3200

const server = http.createServer((req, res) => {
	if( req.url == "/fileupload") {
		let form = new formidable.IncomingForm()
		form.parse(req, function(err, fields, files) {
			let oldPath = files.filetoupload.filepath
		    let newPath = "c:/Users/HP/desktop/node/" + files.filetoupload.originalFilename

		    fs.rename(oldPath, newPath, err => {
		    	if(err) {
		    		console.log(err)
		    	}
		    	res.write("Files uploaded moved successfully!")
		    	res.end()
		    })
		})
	} else {
	res.writeHead(200, {"Content-Type": "text/html"})

    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
    res.write('<h2>File Upload</h2><br>')
    res.write('<input type="file" name="filetoupload"><br><br>')
    res.write('<input type="submit" >')
    res.write('</form>')
	return res.end()
	}
})

server.listen(port, () => console.log(`Server is running on port ${port}`))

