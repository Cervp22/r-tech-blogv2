const router = require("express").Router();
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      res.status(400).json({ messag: "Username is wrong!" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Wrong password" });
    }

    const payload = {
      _id: user._id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_LOSPATOJOSV2, {
      expiresIn: "1d",
    });
    res
      .cookie("LP_access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ username: user.username, token: token });
  } catch (err) {
    res.status(500).json({ message: "Check server login endpoint" }, err);
  }
});

module.exports = router;
