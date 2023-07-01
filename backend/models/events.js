const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  image: {
    type: [String],
  },
  description: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
  vanue: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Events", productSchema);
