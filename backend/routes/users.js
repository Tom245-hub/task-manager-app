const express = require("express");
const { postUser, postNewUser } = require("../controllers/users");

const router = express.Router();

router.post("/", postUser);
router.post("/newUser", postNewUser);
router.use((request, response) => response.status(404).end());

module.exports = router;
