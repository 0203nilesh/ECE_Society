const mongoose = require("mongoose");
const { Schema } = mongoose;

const upcomingSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  venue: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Upcoming", upcomingSchema);
