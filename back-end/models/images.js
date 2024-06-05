const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  image: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const Images = model("images", imageSchema);

module.exports = Images;
