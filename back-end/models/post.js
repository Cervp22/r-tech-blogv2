const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  ],
  post: {
    type: String,
    require: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toDateString(),
  },
});
const Post = model("Post", postSchema);

module.exports = Post;
