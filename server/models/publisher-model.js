const mongoose = require('mongoose');

const PublisherSchema = new mongoose.Schema({
  name: String,
  location: String,
});

module.exports = mongoose.model('Publisher', PublisherSchema);
