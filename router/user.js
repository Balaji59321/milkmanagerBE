const express = require("express");
const {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
} = require("../modules/user");
const router = express.Router();

router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.get("/get", getUsers);
router.delete("/remove/:id", deleteUser);

module.exports = router;
