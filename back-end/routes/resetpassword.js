const router = require("express").Router();
const {User} = require('../models')
const nodemailer = require('nodemailer');
require('dotenv').config()


router.post("/", async (req, res) => {
  try {
    const {email}= req.body;
    const userData = await User.findOne({email:email})

    const content = `Hello there ${email} <br> <h2>Click the URL to take you to enter your new password</> <h1>`

    if (!userData){
      return res.status(404).json({status:false, message:'User not found'})
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'lospatojos51@gmail.com',
          pass: 'hprhlvlwqzdfikgg'
        }
      });
      
      var mailOptions = {
        from: 'lospatojos51@gmail.com',
        to: email,
        subject: 'Testing los patojos email',
        text: content
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
         return res.status(200).json({status:true, message:'message sent'})
        }
      });
  

  } catch (err) {
    res.status(500).json({ message: "Check reset password endpoint!" }, err);
  }
});

module.exports = router;