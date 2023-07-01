const Alumni = require("../../models/alumni");

const postAlumni = async (req, res) => {
  // console.log("Heloo");
  // console.log(req.body);
  // res.status(200).send("good");
  try {
    // const file = req.files.image;
    const data = new Alumni({
      name: req.body.name,
      image: req.body.image,
      position: req.body.position,
      contact: req.body.contact,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    // console.log("Success!");
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = postAlumni;
