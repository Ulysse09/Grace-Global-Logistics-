const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const port = 3001;
const cors = require("cors");
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "upkabalisa@gmail.com",
    pass: "yewzgfqpheiucsrd",
  },
});

app.post("/send-email", (req, res) => {
  console.log(req.body.email);
  const { subject, name, email, text } = req.body;
  const mailOptions = {
    from: email,
    to: "ulyssepaul18@gmail.com",
    name,
    subject,
    text,
    replyTo: email,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending Mail");
    } else {
      console.log("Email sent:" + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`server running on ${port}, `);
});
