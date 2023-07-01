const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth/authControllers");

router.post("/user/login", authControllers.userLogin);

module.exports = router;
