const Member = require("../../models/member");

const postMember = async (req, res) => {
  console.log(req.body);
  try {
    // const file = req.files.image;
    const data = new Member({
      name: req.body.name,
      image: req.body.image,
      position: req.body.position,
      contact: req.body.contact,
      year: req.body.year,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    // console.log("Success!");
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = postMember;
