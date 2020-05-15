const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const cors = require("cors");

const mongo = require("./Mongo_Connection");
const routes = require("./routes/index");

var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

mongo.connect(function (err, client) {
  if (err) console.log(err);
  else console.log("Mongodb has been connected");
});

app.use("/", routes);


// app.use(express.static(path.join(__dirname, "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });

console.log(process.env.NODE_ENV)


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build"));
//   });
// }

app.listen(port, () => console.log(`App running on port ${port}`));
