const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.LP_access_token;
    console.log(token);
    if (!token) {
      return res.json({ status: false, message: "NO TOKEN" });
    }
    const verified = await jwt.verify(
      token,
      process.env.JWT_SECRET_LOSPATOJOSV2
    );
    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Check token verification endpoint!" }, err);
  }
};
router.get("/", verifyUser, (req, res) => {
  return res.json({ status: true, message: "authorized" });
});

module.exports = router;
