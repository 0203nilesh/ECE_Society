const Society = require("../../models/society");

const getSociety = async (req, res) => {
  try {
    // console.log("we got it");
    let data = await Society.find();
    res.status(200).json(data[0]);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getSociety;
