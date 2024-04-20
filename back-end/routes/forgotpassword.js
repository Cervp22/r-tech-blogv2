const router = require("express").Router();
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_LOSPATOJOSV2,
      { expiresIn: "1d" }
    );

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lospatojos51@gmail.com",
        pass: "hprhlvlwqzdfikgg",
      },
    });

    var mailOptions = {
      from: "lospatojos51@gmail.com",
      to: email,
      subject: "Reset Your Password",
      text: `http://localhost:3000/resetpassword/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        return res.status(200).json({ status: true, message: "message sent" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Check reset password endpoint!" }, err);
  }
});

module.exports = router;
