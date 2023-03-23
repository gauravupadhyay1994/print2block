const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  fetchChats,
  createGroupChat,
} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").get(protect, fetchChats);

router.route("/group").post(protect, createGroupChat);
module.exports = router;
