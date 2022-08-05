const nodemailer = require("nodemailer")

// set up the transporter
let transporter = nodemailer.createTransport({
	service: 'gmail',
	port: 587,
	secure: false,
	auth: {
		user: "test01@gmail.com",
		pass: "##########"
	}
})

// mail options
let mailOptions = {
	from: "test01@gmail.com",
	to: "test02@gmail.com", "test04@gmail.com",
	subject: "Sending email fron Node.js",
    text: "That was easy!"
}

// send email
transporter.sendMail(mailOptions, function(err, info){
	if(err) {
		console.log(err)
	} else {
		console.log("Email sent: " + info.response)
	}
})