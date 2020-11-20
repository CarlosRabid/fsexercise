const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
const request = require("request");
const options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  /* reconnectTries: 30, reconnectInterval: 5000,*/ useUnifiedTopology: true,
};
const url =
  "mongodb+srv://aurixadmin:2020Mongo$@clusterfsexercise.mgcgd.mongodb.net/test?retryWrites=true&w=majority";
const User = require("./models/User");
const Person = require("./models/Person");

const client = new MongoClient(url, options);
const dbName = "test";

router.get("/data", (req, res) => {
  async function run() {
    try {
      await client.connect();
      const db = client.db(dbName);
      let data = [];
      const collection = db.collection("people");
      let findResult = collection.find();
      await findResult.forEach((i) => data.push(i));
      res.send(data);
    } finally {
      //   await client.close();
    }
  }
  run().catch(console.dir);
});

router.delete("/empty", function (req, res) {
    console.log("empty route")
  async function run() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("people");
    collection.deleteMany({}, function (err, response) {
      res.send(response);
    });
    return;
  }
  run().catch(console.dir);
});

router.get("/data/:userName", async (req, res) => {
  let userName = req.params.userName;
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("people");
  request(`https://torre.bio/api/bios/${userName}`, function (
    error,
    result,
    data
  ) {
    let parsData = JSON.parse(data);
    console.log(parsData);
    let person = parsData.person;
    nPerson = new Person({
      id: person.id,
      name: person.name,
      picture: person.pictureThumbnail,
      headline: person.professionalHeadline,
      //   lastexperience:
      //     parsData.experiences[0].category +
      //     "  -  " +
      //     parsData.experiences[0].name,
      location: person.location.name,
      //   eduName: parsData.education[0].name,
      //   eduPdate:
      //     parsData.education[0].toMonth +
      //     " of year " +
      //     parsData.education[0].toYear,
      languages: parsData.languages,
      pcg:
        parsData.professionalCultureGenomeResults.groups[0].text +
        " , " +
        parsData.professionalCultureGenomeResults.groups[1].text,
      stats: parsData.stats,
    });
    collection.insertOne(nPerson);
    return res.send(nPerson);
  });
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
      //   await client.close();
    }
  }
  run().catch(console.dir);
});
module.exports = router;
