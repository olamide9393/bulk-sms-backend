const express = require("express");
const { message, getUserHistory } = require("../controller/Message");
const VarifyToken = require("../middleware/VarifyToken");
// const Message = require("../model/Message");

const router = express.Router();
       
router.get("/getUserHistory",VarifyToken, getUserHistory);
router.post("/message", message);

module.exports = router;