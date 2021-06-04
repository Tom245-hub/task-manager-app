const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  login: { type: String },
  password: { type: String },
});

const User = mongoose.model("User", UserSchema, "users");

module.exports = User;
