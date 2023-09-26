const express = require("express");
const { message, getUserHistory } = require("../controller/Message");
const VarifyToken = require("../middleware/VarifyToken");
// const Message = require("../model/Message");

const router = express.Router();
// router.get("/:id", getUserHistory);
// Define a route to fetch a user's message history
// router.get('/getUserHistory', VarifyToken, async (req, res) => {
//          try {
//            const userHistory = await Message.find({ sender: req.user }).exec();
//            res.json(userHistory);
//          //   console.log(userHistory);
//          } catch (error) {
//                   res.status(404).json({mes: 'no history'})
//            res.status(500).json({ error: 'Internal server error' });
//          }
//        });
       
router.get("/getUserHistory",VarifyToken, getUserHistory);
router.post("/message",VarifyToken, message);

module.exports = router;