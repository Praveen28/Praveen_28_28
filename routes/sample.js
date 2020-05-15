const express = require("express");
const router = express.Router();

router.get("/hhh", (req, res) => {
  res.json({
    message: "success",
  });
});

module.exports = router;
