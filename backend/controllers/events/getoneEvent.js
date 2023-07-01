// No Need at all 

const Events = require("../../models/events");

const getoneEvent = async (req, res) => {
  try {
    // console.log(req.params.id);
    let info = await Events.findById(req.params.id);

    let value = {
      id: info._id,
      image: info.image,
      name: info.name,
      details: info.details,
      category: info.category,
      time: info.time,
    };

    res.json(value);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getoneEvent;
