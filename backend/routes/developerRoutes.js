const express = require("express");
const router = express.Router();

const developerControllers = require("../controllers/developer/developerControllers");

router.get("/developer/get", developerControllers.getDeveloper);

module.exports = router;
