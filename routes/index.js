const express = require("express");
const router = express.Router();

const sample = require("./sample");
const order = require("./orders");

router.use("/", sample);
router.use("/hi", order);

module.exports = router;
