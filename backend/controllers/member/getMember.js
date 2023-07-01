const Member = require("../../models/member");

const getMember = async (req, res) => {
  try {
    // console.log("we got it");
    let data = await Member.find();
    data = data.map((info) => {
      return {
        id: info._id,
        image: info.image,
        name: info.name,
        position: info.position,
        contact: info.contact,
        year: info.year,
      };
    });

    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getMember;
