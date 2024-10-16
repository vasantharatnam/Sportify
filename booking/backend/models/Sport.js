// backend/models/Sport.js
const mongoose = require('mongoose');

const SportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  center: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Center',
    required: true
  }
});

module.exports = mongoose.model('Sport', SportSchema);
