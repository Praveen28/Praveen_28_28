const express = require("express");
const router = express.Router();

const order = require("./orders");

router.use("/hi", order);

module.exports = router;
