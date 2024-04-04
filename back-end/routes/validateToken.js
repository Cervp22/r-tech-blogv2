const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", (req, res) => {
  try {
    const token = req.cookies.LP_access_token;
    console.log(token);
    const user = jwt.verify(token, process.env.JWT_SECRET_LOSPATOJOSV2);

    if (user) {
      console.log("Token Valid");
      res.status(200).json({ message: "Token is valid" });
    } else {
      res.status(404).json({ message: "Token is invalid" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Check token verification endpoint!" }, err);
  }
});

module.exports = router;
