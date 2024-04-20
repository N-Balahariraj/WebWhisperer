const wc_user = require("../Model/Users.Model.js")

exports.Register = (req, res) => {
    const {name,email,picture} = req.body
    newUser = new wc_user({
        name,
        email,
        profilePic : picture,
    })
    wc_user.findOne({ email })
      .then((result) => {
        if (result) {
          res.status(200).send({ message: "User LoggedIn Successfully" });
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


