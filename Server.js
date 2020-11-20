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

app.use('/', users);


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
