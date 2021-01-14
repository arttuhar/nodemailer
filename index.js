const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", () => {
	resizeBy.send("works?");
});

app.post("/api/forma", (req, res) => {
	let data = req.body;
	let smtpTransport = nodemailer.createTransport({
		service: "Gmail",
		port: 465,
		auth: {
			user: "YOUR GMAIL ADDRESS",
			pass: "YOUR GMAIL PASSWORD",
		},
	});
	let mailOptions = {
		from: data.email,
		to: "YOUR GMAIL ADDRESS",
		subject: `Message from ${data.firstname}`,
		html: `
        <h3>Senders information</h3>
        <ul>
        <li>First name: ${data.firstname}</li>
        <li>Last name: ${data.lastname}</li>
        <li>Email: ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        `,
	};
	smtpTransport.sendMail(mailOptions, (error, response) => {
		if (error) {
			res.send(error);
		} else {
			res.send("IT WORKS!!");
		}
	});
	smtpTransport.close();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Listening port ${PORT}`);
});
