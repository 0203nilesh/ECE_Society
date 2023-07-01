const express = require("express");
const router = express.Router();

const societyControllers = require("../controllers/society/societyControllers");
const upcomingControllers = require("../controllers/upcoming/upcomingControllers");
router.get("/society/get", societyControllers);
router.get("/upcoming/get", upcomingControllers);
module.exports = router;
