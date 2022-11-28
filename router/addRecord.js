const express = require("express");
const { protect } = require("../config");
const records = require("../modules/addRecord");
const router = express.Router();

router.post("/create", protect,records.createRecord);
router.put("/update/:id", protect,records.updateRecord);
router.get("/get", protect,records.getAllRecords);
router.delete("/remove/:id", protect,records.deleteRecord);

module.exports = router;
