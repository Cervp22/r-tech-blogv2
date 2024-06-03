const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  image: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const Image = model("images", imageSchema);

module.exports = Image;
