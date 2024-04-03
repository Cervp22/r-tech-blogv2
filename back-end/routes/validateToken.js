const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", (req, res, next) => {
  try {
    const token = req.cookies.LP_access_token;
    const user = jwt.verify(token, process.env.JWT_SECRET_LOSPATOJOSV2);
    req.user = user;

    if (user) {
      res.redirect("/home");
    }
  } catch (err) {
    res.status(500).json({ message: "Check token verification endpoint!" });
  }
});

module.exports = router;
