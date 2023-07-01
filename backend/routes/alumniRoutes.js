const express = require("express");
const router = express.Router();

const alumniControllers = require("../controllers/alumni/alumniControllers");

router.post("/alumni/post", alumniControllers.postAlumni);
router.get("/alumni/get", alumniControllers.getAlumni);

module.exports = router;
