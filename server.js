const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

// Serve static files (images, JS, CSS) from the current directory
app.use(express.static(path.join(__dirname)));

// Serve the resume.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.json());

app.post('/send-email', (req, res) => {
  const message = req.body.message;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'e0223011@sriher.edu.in',
      pass: 'yuvaraj2006'
    }
  });

  let mailOptions = {
    from: 'e0223011@sriher.edu.in',
    to: 'e0223011@sriher.edu.in',
    subject: 'A user sent a message via your site',
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));





      
