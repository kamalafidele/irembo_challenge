const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const emailTemplate =  require('./emailTemplate');
const nodemailer = require('nodemailer');


const app = express();

dotenv.config();

const { PORT, HOST, EMAIL_PASS, EMAIL_USERNAME } = process.env;

app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.post('/businessRegistration', (req, res) => {
  let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: EMAIL_USERNAME,
          pass: EMAIL_PASS
      }
  });

  let mailOptions = {
      from: EMAIL_USERNAME,
      to: req.body.email,
      subject: 'Business Registered Successfully',
      html: emailTemplate(req.body),
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          res.status(500).send({ error: 'Error sending email' });
      } else {
          console.log(info);
          res.status(200).send({ message: 'Email sent successfully' });
      }
  });
});

app.listen(PORT, () => {
  console.log(`APP RUNNING ON ${HOST}:${PORT}`);
});
