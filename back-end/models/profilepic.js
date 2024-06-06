const { Schema, model } = require("mongoose");

const profilepicSchema = new Schema({
  profileImage: {
    type: String,
  },
  userId: {
    type: String,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toDateString(),
  },
});

const ProfilePics = model("profilePics", profilepicSchema);

module.exports = ProfilePics;
