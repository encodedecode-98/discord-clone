const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { mail, password } = req.body;
    const user = await User.findOne({
      mail: mail.toLowerCase(),
    });
    console.log(user);
    console.log("PASSWORD" + password);
    console.log("USERNAME");

    if (!user)
      return res.status(404).send({
        message: "User not found",
      });

    const validate = await bcrypt.compare(password, user.password);
    console.log(user.password);
    console.log(password);
  console.log(validate)
    if (!validate)
      return res.status(400).send({
        message: "Something went wrong . Please try Again",
      });

    const token = "JWT_TOKEN";
    return res.status(200).json({
      userDetails: {
        mail: user.mail,
        token: token,
        username: user.username,
      },
    });

    // successfully logged in so send a new token

    // return res.status(200).send({
    //   message: "Something went wrong . Please try again ",
    // });
  } catch (err) {
    return res.status(500).send({
      message: "Something went wrong . Please try again",
    });
  }
  res.send("login route");
};

module.exports = postLogin;
