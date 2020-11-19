const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://aurixadmin:2020Mongo$@clusterfsexercise.mgcgd.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(url);
const dbName = "test";

// The database to use
//  const dbName = "test";

// async function run() {
//     //   try {
//         await client.connect();
//         const db = client.db(dbName);
//     console.log("Connected correctly to server");
// //   } finally {
//     // await client.close();
// //   }
// }

// run().catch(console.dir);

// const connection = "mongodb+srv://aurixadmin:2020Mongo$@clusterfsexercise.mgcgd.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const connection = "mongodb+srv://aurix@rocketmail.com:<password>@<cluster>/<database>?retryWrites=true&w=majority";

// const dbName = "test"

// mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(() => console.log("Database Connected Successfully"))
//     .catch(err => console.log(err));
