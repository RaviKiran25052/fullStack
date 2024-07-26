const mailer = require("nodemailer")
require("dotenv").config()

console.log(process.env.USER_EMAIL);

const transporter = mailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD
    }
})

async function main() {
    const info = await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: ["ravivarma25052@gmail.com", "sastaguvvu25@gmail.com"],
      subject: "test",
      html: "<b>Hello world?</b>",
    });
    console.log("Message sent: %s", info.messageId);
}
  
main().catch(console.error);