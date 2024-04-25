const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const { password, id, token } = req.body;

    // Validate required fields
    if (!password || !id || !token) {
      return res.status(400).json({ status: "Missing required fields" });
    }

    // Verify JWT token
    const decoded = await jwt.verify(token, "lospatojosv2jwtsecret");
    if (!decoded) {
      return res.status(401).json({ status: "Invalid token" });
    }

    // Hash the password securely (using a higher cost factor if necessary)
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Update user password automatically
    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      { password: hashedPassword },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ status: "User not found" });
    }
    console.log("User password changed");
    res.status(200).json({ status: "Success" });
  } catch (err) {
    res.status(500).json({ message: "Check reset password endpoint!" }, err);
  }
});

module.exports = router;
