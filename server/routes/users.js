const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://aurixadmin:2020Mongo$@clusterfsexercise.mgcgd.mongodb.net/test?retryWrites=true&w=majority";
const User = require("./models/User");

const client = new MongoClient(url);
const dbName = "test";

router.get("/data", (req, res) => {
  async function run() {
    try {
      await client.connect();
      const db = client.db(dbName);
      let data = []
      const collection = db.collection("people");
      let findResult = collection.find();
      await findResult.forEach(i => data.push(i) )
      console.log(data)
      res.send(data)
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

router.post("/offerings", (req, res) => {
  async function run() {
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection("people");
      const { username, email } = req.body;
      const newUser = new User({
        username: username,
        email: email,
      });
      console.log(newUser);
      collection
        .insertOne(newUser)
        .then(() =>
          res.send({
            message: "Created user successfully",
          })
        )
        .catch((err) =>
          res.status(400).json({
            error: err,
            message: "Error creating account",
          })
        );
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});
module.exports = router;
