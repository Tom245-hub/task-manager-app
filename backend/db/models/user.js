const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  login: { type: String },
  email: { type: String },
  // password: { type: String },
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });
const User = mongoose.model("User", UserSchema, "users");

module.exports = User;
