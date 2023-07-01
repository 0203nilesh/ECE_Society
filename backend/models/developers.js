const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  image: {
    type: String,
  },
  details: {
    required: true,
    type: String,
  },
  position: {
    required: true,
    type: String,
  },
  contact: {
    type: String,
  },
});

module.exports = mongoose.model("Developer", productSchema);
