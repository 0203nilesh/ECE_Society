const Developer = require("../../models/developers");

const getDeveloper = async (req, res) => {
  try {
    // console.log("we got it");
    let data = await Developer.find();
    data = data.map((info) => {
      return {
        id: info._id,
        image: info.image,
        name: info.name,
        position: info.position,
        details: info.details,
        contact: info.contact,
      };
    });

    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getDeveloper;
