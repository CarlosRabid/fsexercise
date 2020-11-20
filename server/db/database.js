const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://aurixadmin:2020Mongo$@clusterfsexercise.mgcgd.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(url);
const dbName = "test";

