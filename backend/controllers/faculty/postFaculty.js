const Faculty = require("../../models/faculty");

const postFaculty = async (req, res) => {
  try {
    // const file = req.files.image;
    const data = new Faculty({
      name: req.body.name,
      image: req.body.image,
      position: req.body.position,
      contact: req.body.contact,
      details: req.body.details,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    // console.log("Success!");
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = postFaculty;
