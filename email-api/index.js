
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  const token = req.headers['x-api-key'];
  if (token !== 'furhop-2sasqo-qabpAd') { //env
    return res.status(403).send({ error: 'Forbidden' });
  }
  next();
});

const transporter = nodemailer.createTransport({
  host: 'superlearn.ing', //envß
  port: 465,
  secure: true,
  auth: {
    user: 'shlee@superlearn.ing', //env
    pass: 'Sup1059!@!'  //env
  }
});

app.post('/send-invoice', async (req, res) => {
  const { to, subject, html } = req.body;
  if (!to || !subject || !html) {
    return res.status(400).send({ error: 'Missing fields' });
  }

  try {
    await transporter.sendMail({
      from: 'Sunghyuk <shlee@superlearn.ing>',
      to,
      subject,
      html
    });
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Email failed to send!!!' });
  }
});

app.listen(3000, () => {
  console.log('Email API server running on port 3000');
});
