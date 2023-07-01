const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "drkpusv1o",
  api_key: "755578816695867",
  api_secret: "BIGk0rwmPGie3QlyBDl1ZIHKOqg",
});

module.exports = cloudinary;
