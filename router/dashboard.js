const express = require("express");
const {
  totalCustomer,
  todayCustomer,
  buyPrice,
  sellPrice,
  cowQuantity,
  buffaloQuantity,
} = require("../modules/dashboard");
const router = express.Router();

router.get("/getCustomer", totalCustomer);
router.get("/getTodayCustomer", todayCustomer);
router.get("/buyPrice", buyPrice);
router.get("/sellPrice", sellPrice);
router.get("/cow", cowQuantity);
router.get("/buffalo", buffaloQuantity);

module.exports = router;
