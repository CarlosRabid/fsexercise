const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    // _id: false,
    id: String,
    name: String,
    picture: String,
    headline: String,
    lastexperience: String,
    location: String,
    eduName: String,
    eduPdate: String,
    languages: Array,
    pcg: String,
    stats: Object,
  });

module.exports = mongoose.model("Person", personSchema)
