const express = require("express");
const router = express.Router();

const memberControllers = require("../controllers/member/memberControllers");

router.post("/member/post", memberControllers.postMember);
router.get("/member/get", memberControllers.getMember);
module.exports = router;
