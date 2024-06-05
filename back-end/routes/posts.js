const router = require("express").Router();
const { Post, User } = require("../models");

//add post to database and update to specific user profile
router.post("/", async (req, res) => {
  console.log(req.body);
  const { userPost, username, userId } = req.body;
  try {
    const post = await Post.create({
      post: userPost,
      username: username,
      userId: userId,
    });

    const { _id } = post;

    console.log(_id);

    const updateUser = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { post: _id } }
    );

    if (post) {
      res.status(200).json({ status: "Success" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ status: "Request failed", message: "Check Post endpoint!" });
  }
});

//get all post in database
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();

    if (posts) {
      res.status(200).json(posts);
    } else {
      res.status(404).json({ Status: "Check request for errors!" });
    }
  } catch (err) {
    res.status(500).json({ Status: "Check endpoint!" });
  }
});

// get specific post with id of post
router.get("/:id", async (req, res) => {
  console.log(req.params);
  try {
    const post = await Post.findById({ _id: req.params.id });
    console.log(post);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ Status: "Failed", message: "Check endpoint!" });
  }
});
// get all post from specifc user id
router.get("/userpost/:userid", async (req, res) => {
  try {
    const userpost = await Post.find({ userId: req.params.userid });

    if (userpost) {
      res.status(200).json(userpost);
    } else {
      res.status(404).json({ message: "Failed, try again!" });
    }
  } catch (err) {
    res.status(500).json({ status: "Failed", message: "Check endpoint", err });
  }
});

module.exports = router;
