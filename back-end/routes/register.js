const router = require("express").Router();
const { User } = require("../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json({ message: "User was not created.." });
    }
  } catch (err) {
    res.status(500).json({ messag: "Check Route endpoint!" }, err);
  }
});

module.exports = router;
