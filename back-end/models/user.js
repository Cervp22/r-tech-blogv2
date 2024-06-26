const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim:true,
  },
  fullname: {
    type: String,
    required: true,
    trim:true,
  },
  password: {
    type: String,
    trim:true,
  },
  profilepic: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toDateString(),
  },
});

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (err) {
    console.log(err);
  }
});

const User = model("users", userSchema);

module.exports = User;
