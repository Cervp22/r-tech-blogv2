const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const totalUsers = (await User.find()).length;
    res.status(200).json(totalUsers);
  } catch (err) {
    res
      .status(500)
      .json({ status: "Failed", message: "Check total user endpoint!" });
  }
});

module.exports = router;
