const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");

const url = "mongodb+srv://aurixadmin:2020Mongo$@clusterfsexercise.mgcgd.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(url);
 
 // The database to use
//  const dbName = "test";
                      
//  async function run() {
//     try {
//          await client.connect();
//          console.log("Connected correctly to server");
//          const db = client.db(dbName);

//          // Use the collection "people"
//          const col = db.collection("people");

//          // Construct a document                                                                                                                                                              
//          let personDocument = {
//             //  "name": { "first": "Alan", "last": "Turing" },
//             //  "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
//             //  "death": new Date(1954, 5, 7),  // June 7, 1954                                                                                                                                  
//             //  "views": 1250000
//          }

//          // Insert a single document, wait for promise so we can read it back
//          const p = await col.insertOne(personDocument);
//          // Find one document
//          const myDoc = await col.findOne();
//          // Print to the console
//          // console.log(myDoc);

//         } catch (err) {
//          console.log(err.stack);
//      }
 
//      finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);

// const connection = "mongodb+srv://aurixadmin:2020Mongo$@clusterfsexercise.mgcgd.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const connection = "mongodb+srv://aurix@rocketmail.com:<password>@<cluster>/<database>?retryWrites=true&w=majority";

// const dbName = "test"

// mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(() => console.log("Database Connected Successfully"))
//     .catch(err => console.log(err));
