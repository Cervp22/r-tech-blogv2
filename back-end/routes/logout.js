const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    res.clearCookie("LP_access_token");
    res.status(200).json({ status: true, message: "Logout Successful!" });
  } catch (err) {
    res.status(500).json({ message: "Check logout endpoint!" }, err);
  }
});

module.exports = router;
