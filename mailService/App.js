const mailer = require("nodemailer")
const express = require("express")

const app = express()
require("dotenv").config()

const html = `
<h2>Welcome</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deserunt quaerat odio, ratione vero nesciunt enim ea eveniet nobis. Eveniet in nisi deserunt harum dolore culpa sint maxime rem architecto!</p>
`

const transporter = mailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD
    }
})

async function send(mailId) {
    const info = await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: [mailId],
      subject: "test",
      html: "<b>Hello world?</b>",
    });
    return info.messageId;
}
  
app.get("/", (req, res) => {
    res.send('html')
})

app.get("/sendmail/:email", async (req, res) => {
    try {
        const mailId = req.params
        // if (req.url === '/favicon.ico') return res.end();
        const id = await send(mailId.email).catch(console.error);
        res.status(200).json({message: `mail sent to ${mailId.email} with id : ${id}`})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.listen(process.env.PORT, () => console.log("Server Started :)"))