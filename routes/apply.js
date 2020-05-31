const express = require("express");
const router = express.Router();
const mongo = require("../Mongo_Connection");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

var storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + " - " + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });

router.post("/", upload.single("file"), (req, res) => {
  const db = mongo.get().collection("apply");

  if (req.file.size >= 250000) {
    res.json("File size is larger...");
  } else if (req.file.mimetype !== "application/pdf") {
    res.json("Unsupported file format..");
  } else {
    var file = fs.readFileSync(req.file.path);
    var encode_file = file.toString("base64");
    var file_name = path.parse(req.file.originalname).name;

    const order = {
      name: req.body.name,
      emailid: req.body.emailid,
      mobilenumber: req.body.mobilenumber,
      message: req.body.message,
      contentType: req.file.mimetype,
      fileName:file_name,
      file: new Buffer.from(encode_file, "base64"),
    };

    db.insert(order, (err, succ) => {
      if (err) throw err;
      else res.send("Your response has been added");
    });
  }
});

module.exports = router;
