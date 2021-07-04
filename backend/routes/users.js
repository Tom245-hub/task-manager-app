const express = require("express");
const passport = require("passport");
const { postUser, postNewUser } = require("../controllers/users");

const router = express.Router();

router.post("/", postUser);

router.post("/newUser", passport.authenticate("local", { session: false }), postNewUser);
router.use((req, res) => res.status(404).end());

module.exports = router;
