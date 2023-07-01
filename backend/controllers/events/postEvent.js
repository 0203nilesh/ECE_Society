// Some change has been maded in model of event;

const Events = require("../../models/events");
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const uploader = require("./cloudinary/multer");
const cloudinary = require("./cloudinary/cloud");
const fileUpload = require("express-fileupload");

const postEvent = async (req, res) => {
  // console.log(req.body);
  // console.log(req.files);
  try {
    // console.log(req.files.image);
    const image = req.files.image;
    // console.log(image);
    if (!image) {
      return res.sendStatus(400);
    }

    await image.mv(__dirname + "/upload/" + image.name);
    // console.log("MC");
    const pathName = __dirname + "/upload/" + req.files.image.name;
    const upload = await cloudinary.uploader.upload(pathName);
    // console.log(upload.secure_url);

    const data = new Events({
      name: req.body.name,
      image: upload.secure_url,
      details: req.body.details,
      category: req.body.category,
      // time: req.body.time,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    // console.log("Success!");
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = postEvent;
