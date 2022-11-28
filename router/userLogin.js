const express = require("express");
const { loginUser, signUpUser } = require("../modules/userLogin");
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup",signUpUser)

module.exports = router;
