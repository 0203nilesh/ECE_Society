const express = require("express");
const router = express.Router();

const eventControllers = require("../controllers/events/eventControllers");

router.post("/event/post", eventControllers.postEvent);
router.get("/event/get", eventControllers.getEvent);
router.get("/event/get/:id", eventControllers.getoneEvent);

module.exports = router;
