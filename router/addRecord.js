const express = require("express");
const records = require("../modules/addRecord");
const router = express.Router();

router.post("/create", records.createRecord);
router.put("/update/:id", records.updateRecord);
router.get("/get", records.getAllRecords);
router.delete("/remove/:id", records.deleteRecord);

module.exports = router;
