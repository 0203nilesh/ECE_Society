const mongoose = require("mongoose");
const { Schema } = mongoose;

const societySchema = new mongoose.Schema({
  goal: {
    required: true,
    type: String,
  },
  vision: {
    type: String,
  },
  about: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Society", societySchema);
