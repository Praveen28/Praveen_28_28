const MongoClient = require("mongodb").MongoClient;

const url =
  process.env.MONGODB_URI ||
  "mongodb://praveen:praveen@cluster0-shard-00-00-qpqiv.mongodb.net:27017,cluster0-shard-00-01-qpqiv.mongodb.net:27017,cluster0-shard-00-02-qpqiv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

async function connect(callback) {
  await MongoClient.connect(url, async function (err, db) {
    mongodb = await db;
    if (mongodb) callback();
    else console.log("MongoDb not connected..!");
  });
}
function get() {
  return mongodb;
}

function close() {
  mongodb.close();
}

module.exports = { connect, get, close };
