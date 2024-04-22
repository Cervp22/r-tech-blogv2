const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateUser = async (req, res, next) => {
  try {
    const token = req.cookies.LP_access_token;
    if (!token) {
      return res.json({ status: false, message: "NO TOKEN" });
    }
    const user = await jwt.verify(token, process.env.JWT_SECRET_LOSPATOJOSV2);
    req.user = user;

    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Check token verification endpoint!" }, err);
  }
};

router.get("/", validateUser, (req, res) => {
  console.log("User token validated");
  return res.json({ status: true, message: "authorized" });
});

module.exports = router;
