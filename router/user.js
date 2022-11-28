const express = require("express");
const { protect } = require("../config");
const {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
} = require("../modules/user");
const router = express.Router();

router.post("/create", protect, createUser);
router.put("/update/:id", protect, updateUser);
router.get("/get", protect,getUsers);
router.delete("/remove/:id", protect,deleteUser);

module.exports = router;
