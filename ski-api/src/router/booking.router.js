const express = require("express");
const router = express.Router();
const BookingController = require("../controllers/booking.controller");

router.post("/booking", BookingController.create);
router.get("/booking", BookingController.getAll);

module.exports = router;
