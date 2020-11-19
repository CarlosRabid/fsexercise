const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const router = express.Router();
const request = require("request");
require('./server/db/database')
const users = require('./server/routes/users');

let axios = require("axios");

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'components')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

app.use('/', users);

// const Schema = mongoose.Schema;
// const personSchema = new Schema({
//   // _id: false,
//   id: String,
//   name: String,
//   picture: String,
//   headline: String,
//   lastexperience: String,
//   location: String,
//   eduName: String,
//   eduPdate: String,
//   languages: Array,
//   pcg: String,
//   stats: Object,
// });

// const peoplecollection = mongoose.model(
//   "peopleCollections",
//   personSchema,
//   "peopleCollections"
// );

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
