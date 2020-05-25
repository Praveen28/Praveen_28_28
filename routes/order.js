const express = require("express");
const router = express.Router();
const mongo = require("../Mongo_Connection");

router.post("/", (req, res) => {
  const db = mongo.get().collection("order");
  const order = {
    name: req.body.name,
    emailid: req.body.emailid,
    mobilenumber: req.body.mobilenumber,
    type: req.body.type,
    application: req.body.application,
    shape: req.body.shape,
    description: req.body.description,
  };
  console.log(order.emailid)
  db.insert(order, (err, succ) => {
    if (err) throw err;
    else res.send("Successfully inserted");
  });
});

module.exports = router;
