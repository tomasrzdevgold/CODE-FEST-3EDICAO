const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: 'audra.nitzsche@ethereal.email',
        pass: '5EF5jz5RqEcaY2RhGM'
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <audra.nitzsche@ethereal.email>', // sender address
    to: "audra.nitzsche@ethereal.email, baz@example.com, tomasmolly@hotmail.com",  // list of receivers
    subject: "Hello ✔", // Subject line
    text: `"<img src=images/dinossauro.jpg />"`, // plain text body
    html: tomas, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);