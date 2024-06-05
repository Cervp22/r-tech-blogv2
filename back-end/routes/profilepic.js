const router = require("express").Router();
const { ProfilePics, User } = require("../models");

//Profile pic to profilepic model
router.get("/", async (req, res) => {
  try {
    const profilePics = await ProfilePics.find();

    res.status(200).json(profilePics);
  } catch (err) {
    res.status(500).json({ status: "failed", message: err });
  }
});

router.get("/:id", async (req, res) => {
  console.log(req.params);
  try {
    const profilePics = await ProfilePics.findById({ _id: req.params.id });

    res.status(200).json(profilePics);
  } catch (err) {
    res.status(500).json({ status: "failed", message: err });
  }
});

//needs work with user and array to delete and update
router.post("/:userid", async (req, res) => {
  console.log(req.body.profileImage);
  try {
    const currentProfilePhoto = await ProfilePics.findOneAndDelete({
      userId: req.params.userid,
    });

    if (currentProfilePhoto) {
      console.log("Deleted old profile photo");
    } else {
      console.log("NO profile photo found, inserting new one");
    }

    const userprofilepic = await ProfilePics.create({
      profileImage: req.body.profileImage,
      userId: req.params.userid,
    });

    const { _id } = userprofilepic;

    const userData = await User.findOneAndUpdate(
      { _id: req.body.userid },
      { $addToSet: { profilepic: _id } }
    );

    res.status(200).json({ status: "Success!", message: "endpoint works!" });
  } catch (err) {
    res.status(500).json({ messag: "Check user profile endpoint!", err });
  }
});

//getting profile pic
router.get("/user/:userid", async (req, res) => {
  console.log(req.params.userid);
  try {
    const profilePic = await ProfilePics.find({ userId: req.params.userid });

    if (profilePic) {
      res.status(200).json({ status: "Success!", profilePic });
    } else {
      res.status(404).json({ status: "Failed" });
    }
  } catch (err) {
    res.status(500).json({ message: "Check endpoint!" });
  }
});

module.exports = router;
