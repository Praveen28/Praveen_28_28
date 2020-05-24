const express = require("express");
const router = express.Router();
const mongo = require("../Mongo_Connection");

router.post("/", (req, res) => {
  const db = mongo.get().collection("apply");
  const order = {
    name: req.body.name,
    emailid: req.body.emailid,
    mobilenumber: req.body.mobilenumber,
    message: req.body.message,
  };

  db.insert(order, (err, succ) => {
    if (err) throw err;
    else res.send("Your response has been added");
  });
});

module.exports = router;
