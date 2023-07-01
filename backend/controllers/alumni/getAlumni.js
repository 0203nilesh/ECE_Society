const Alumni = require("../../models/alumni");

const getAlumni = async (req, res) => {
  try {
    // console.log("we got it");
    let data = await Alumni.find();
    data = data.map((info) => {
      return {
        id: info._id,
        image: info.image,
        name: info.name,
        position: info.position,
        contact: info.contact,
      };
    });

    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getAlumni;
