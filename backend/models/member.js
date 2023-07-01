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
  position: {
    required: true,
    type: String,
  },
  year: {
    required: true,
    type: String,
  },
  contact: {
    type: String,
  },
});

module.exports = mongoose.model("Member", productSchema);
