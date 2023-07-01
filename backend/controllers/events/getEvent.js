const Events = require("../../models/events");

const getEvents = async (req, res) => {
  try {
    // console.log("we got it");
    let data = await Events.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getEvents;
