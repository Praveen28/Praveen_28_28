const express = require("express");
const router = express.Router();

const apply = require("./apply");
const message = require("./message");
const order = require("./order");

router.use("/apply", apply);
router.use("/message", message);
router.use("/order", order);

module.exports = router;
