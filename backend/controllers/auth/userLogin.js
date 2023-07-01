const User = require("../../models/user");

const userLogin = async (req, res) => {
  try {
    // console.log(req.body);
    const user = await User.findOne({ email: req.body.username });
    // !user && res.status(400).json("Wrong credentials!");
    if (!user) {
      res.status(200).send({message: "User Not Found"});
    } else if (req.body.password != user.password) {
      res.status(200).send({message: "Password Not Match....."});
    } else {
      const { password, ...others } = user._doc;
      // Password k alawa users ka sara cheej others me hn
      res.status(200).json({...others, message: "admin login successful"});
    }
  } catch (err) {
    return res.status(500).send("Something went wrong. Please try again");
  }
};

module.exports = userLogin;
