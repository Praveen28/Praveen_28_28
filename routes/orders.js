const express = require("express");
const router = express.Router();
const mongo = require("../Mongo_Connection");

router.post("/", (req, res) => {
  const db = mongo.get().collection("test1");
  console.log(req.body);
  const order = {
    name: req.body.name,
  };

  // db.insert(order);
  res.send("Inserted");
});

module.exports = router;
