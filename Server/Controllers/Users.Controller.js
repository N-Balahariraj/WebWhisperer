const userModel = require("../Model/Users.Model.js");

exports.Register = (req, res) => {
  const { name, email, picture } = req.body;
  newUser = new userModel({
    name,
    email,
    profilePic: picture,
  });
  userModel
    .findOne({ email })
    .then((result) => {
      if (result) {
        res.status(200).send({ message: "User LoggedIn Successfully", details: result });
        return;
      }
      newUser.save().then((result) => {
        res
          .status(200)
          .send({ message: "User Registered Successfully", details: result });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.fetchUsers = (req, res) => {
  userModel
    .find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "failure",
        message: "could not fetch details",
        error: err,
      });
    });
};
