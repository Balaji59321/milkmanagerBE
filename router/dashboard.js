const express = require("express");
const { protect } = require("../config");
const {
  totalCustomer,
  todayCustomer,
  buyPrice,
  sellPrice,
  cowQuantity,
  buffaloQuantity,
} = require("../modules/dashboard");
const router = express.Router();

router.get("/getCustomer", protect,totalCustomer);
router.get("/getTodayCustomer", protect,todayCustomer);
router.get("/buyPrice", protect,buyPrice);
router.get("/sellPrice", protect,sellPrice);
router.get("/cow", protect,cowQuantity);
router.get("/buffalo", protect,buffaloQuantity);

module.exports = router;
