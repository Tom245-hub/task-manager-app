const passport = require("passport");
const User = require("../db/models/user");

exports.passport = () => {
  passport.use(User.createStrategy());
};
