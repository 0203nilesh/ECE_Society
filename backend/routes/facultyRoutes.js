const express = require("express");
const router = express.Router();

const facultyControllers = require("../controllers/faculty/facultyControllers");

router.post("/faculty/post", facultyControllers.postFaculty);
router.get("/faculty/get", facultyControllers.getFaculty);

module.exports = router;
