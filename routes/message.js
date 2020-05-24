const express = require("express");
const router = express.Router();
const mongo = require("../Mongo_Connection");

router.post("/", (req, res) => {
  const db = mongo.get().collection("message");
  const apply = {
    name: req.body.name,
    emailid: req.body.emailid,
    mobilenumber: req.body.mobilenumber,
    message: req.body.message,
  };

  db.insert(apply, (err, succ) => {
    if (err) throw err;
    else res.send("Successfully inserted");
  });
});

module.exports = router;